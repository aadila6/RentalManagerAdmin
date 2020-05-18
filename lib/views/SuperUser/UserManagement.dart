//import 'package:RentalAdmin/widgets/newRolePopup.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'newItemDialog.dart';
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

  void fetchFromFirebase() {
    print("Firebase request1");
    //List<User> res = List();
    Firestore.instance.collection("global_users").where('organization', isEqualTo: globals.organization)
    .snapshots().listen((s) {
      s.documents.forEach((e) {
        allUserList.add(User(email: e.data['Email'],admin: e.data['Admin']));
      });
      setState((){});
    });
  }
  @override
  void initState() {
    super.initState();
    //print("@#!@#!@#!@#!@#!#@");
    //allUserFuture = fetchUser();allUsers
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
            'Rental Manager Admin ',
          ),
          backgroundColor: drawerBgColor,
        ),
        body: ListView.builder(
          padding: EdgeInsets.fromLTRB(30, 20, 30, 0),
          itemCount: allUserList.length + 1,
          itemBuilder: (c,i){
            if(i==0)
              return Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text("Email",
                  style: TextStyle(
                    fontSize: 30
                  ),),
                  Text("is Admin",
                  style: TextStyle(
                    fontSize: 30
                  ))
                ],
              );
            
            return userRowBuilder(allUserList[i-1]);
          }
        )
    );
  }

  Widget userRowBuilder(User u) {
    return Row(
      //mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: <Widget>[
        Text(u.email),
        Spacer(),
        Checkbox(value: u.admin, onChanged: (newVal){
          if(newVal) {
            modifyAdmin(u.email,true);
          } else {
            modifyAdmin(u.email,false);
          }
          u.admin =! u.admin;
          setState((){});
        })
      ],
    );
  }

//   Widget confirmationPopup(String user, String s) {
//     return AlertDialog(
//       title: Text("Delete"),
//       content: Text("Deleting Role $s from user $user. Are you sure?"),
//       actions: <Widget>[
//         RaisedButton(
//             child: Text("No"),
//             onPressed: () {
//               Navigator.of(context).pop();
//             }),
//         RaisedButton(
//             child: Text("Yes"),
//             onPressed: () {
//               modifyRoleFake(user, s, false);
//               setState(() {});
//               Navigator.of(context).pop();
//             }),
//       ],
//     );
//   }
}
