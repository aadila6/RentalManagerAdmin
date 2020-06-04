//import 'package:RentalAdmin/widgets/newRolePopup.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/DashBoard/theme.dart';
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
  List<User> allUserList;
  List<String> allPermissions = ['Admin'];
  void fetchFromFirebase() {
    print("Firebase request1");
    allUserList = List();
    Firestore.instance.collection("global_users").where('organization', isEqualTo: globals.organization).getDocuments().then((s) {
      s.documents.forEach((e) {
        var tu = User(email: e.data['Email']);
        for(var i in ['Admin', 'LocationManager']) {
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
    print(globals.existingLocations);
    print(allUserList);
    return Scaffold(
        appBar: AppBar(
          elevation: 4,
          centerTitle: true,
          title: Text(
            'Rental Manager Admin - ' + globals.organization,
          ),
          backgroundColor: drawerBgColor,
        ),
        body: Padding(
          padding: EdgeInsets.all(30),
          child:Table(
            columnWidths: {0:FlexColumnWidth(2),1:FlexColumnWidth(1),2:FlexColumnWidth(1),3:FlexColumnWidth(0.5)},
          children: [TableRow(
            children: [
              Text("Email",
              style: TextStyle(
                fontSize: 20
              )),Text("Location Manager",
              style: TextStyle(
                fontSize: 20
              ))] + allPermissions.map((e){
                return Text("is $e",
                  style: TextStyle(
                    fontSize: 20
                  ));
              }).toList() + [Text("")],
          )] + allUserList.map((e){
            print(globals.existingLocations);
            return TableRow(children: <Widget>[Text(e.email)] +
            [
              DropdownButton(
                value: e.permissions['LocationManager'],
                items: <DropdownMenuItem>[DropdownMenuItem(child:Text("None"),value:"",)]+globals.existingLocations.map((e) => DropdownMenuItem(child: Text(e),value: e)).toList(),
              onChanged: (n){
                e.permissions['LocationManager'] = n;
                e.permissions['Admin'] = false;
                setState((){});
              })
            ]+
              allPermissions.map<Widget>((p){
                return Checkbox(value: e.permissions[p], onChanged: (newVal){
                  e.permissions[p] = newVal;
                  e.permissions['LocationManager'] = "";
                  setState((){});
                });
              }).toList() + [
                RaisedButton(
                  child:Text("Submit"),
                  onPressed: (){
                    modifyAllPermissions(e);
                })
              ]
            );
          }).toList()
        ))
    );
  }
}