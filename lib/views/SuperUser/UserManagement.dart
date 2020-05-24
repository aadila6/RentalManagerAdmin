//import 'package:RentalAdmin/widgets/newRolePopup.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'HttpRequestModel.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

class SuperUserMgtView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperUserMgtViewState();
  }
}

class SuperUserMgtViewState extends State<SuperUserMgtView> {
  bool isReady = false;
  var allUsers;
  List<User> allUserList = List();
  List<String> allPermissions = ['Admin', 'Frontdesk', 'User'];
  void fetchFromFirebase() {
    print("Firebase request1");
    //List<User> res = List();
    Firestore.instance.collection("global_users").where('organization', isEqualTo: globals.organization)
    .snapshots().listen((s) {
      s.documents.forEach((e) {
        var tu = User(email: e.data['Email']);
        for(var i in allPermissions) {
          if(e.data.containsKey(i))
            tu.permissions[i] = e.data[i];
          else
            tu.permissions[i] = false;
        }
        allUserList.add(tu);
      });
      setState((){});
    });
  }
  @override
  void initState() {
    super.initState();
    fetchFromFirebase();
    print("Init Finished");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          elevation: 4,
          centerTitle: true,
          title: Text(
            'Rental Manager Admin - ' + globals.organization,
          ),
          backgroundColor: drawerBgColor,
        ),
        body: Table(
          children: [TableRow(
            children: [
              Text("Email",
              style: TextStyle(
                fontSize: 30
              ))] + allPermissions.map((e){
                return Text("is $e",
                  style: TextStyle(
                    fontSize: 30
                  ));
              }).toList(),
          )] + allUserList.map((e){
            return TableRow(children: <Widget>[Text(e.email)] +
              allPermissions.map<Widget>((p){
                return Checkbox(value: e.permissions[p], onChanged: (newVal){
                  if(newVal) {
                    modifyPermission(e.email,p,true);
                  } else {
                    modifyPermission(e.email,p,false);
                  }
                  e.permissions[p] =! e.permissions[p];
                  setState((){});
                });
              }).toList()
            );
          }).toList()
        )
    );
  }
}