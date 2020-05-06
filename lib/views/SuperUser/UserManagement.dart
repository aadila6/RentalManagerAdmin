import 'package:RentalAdmin/widgets/newRolePopup.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'newItemDialog.dart';
import 'HttpRequestModel.dart';

class SuperUserMgtView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperUserMgtViewState();
  }
}

class SuperUserMgtViewState extends State<SuperUserMgtView> {
  bool isReady = false;
  List<User> allUsers;
  Future<List<User>> allUserFuture;
  @override
  void initState() {
    super.initState();
    //print("@#!@#!@#!@#!@#!#@");
    //allUserFuture = fetchUser();
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
        body: SingleChildScrollView(
            child: FutureBuilder(
                future: fetchUserFake(),
                builder: (ctxt, snapshot) {
                  if (snapshot.hasData)
                    return Column(
                        children: snapshot.data.map<Widget>((e) {
                      return userRowBuilder(e);
                    }).toList());
                  else
                    return Text("NULL");
                })));
  }

  Widget userRowBuilder(User u) {
    return Row(
      //mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: <Widget>[
        Spacer(),
        Text(u.email),
        Spacer(),
        Row(
            children:
                u.roles.map<Widget>((e) => ActionChip(
                  label: Text(e),
                  //deleteIcon: Icon(Icons.delete),
                  onPressed: (){
                    showDialog(
                      context: context,
                      builder: (context) {
                        return confirmationPopup(u.email, e);
                      },
                      );
                  },
                  )).toList() +
                    [ActionChip(
                      avatar: Icon(Icons.add),
                      onPressed: () {

                        showDialog(context: context,
                        builder:(context){
                          return NewRolePopup();
                        });
                      },
                      label: Text("New role"),
                    )]),
        Spacer(),
      ],
    );
  }

  Widget confirmationPopup(String user, String s) {
    return AlertDialog(
      title: Text("Delete"),
      content: Text("Deleting Role $s from user $user. Are you sure?"),
      actions: <Widget>[
        RaisedButton(child: Text("No"),onPressed: (){
          Navigator.of(context).pop();
        }),
        RaisedButton(child: Text("Yes"),onPressed: (){
          //Send http request.
        }),
      ],
    );
  }
}
