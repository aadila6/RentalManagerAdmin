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
    allUserFuture = fetchUser();
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
                future: allUserFuture,
                builder: (ctxt, snapshot) {
                  if (snapshot.hasData)
                    return Column(
                        children: snapshot.data.map<Widget>((e) {
                      return Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: <Widget>[
                            Text(e.userId),
                            Text(e.email),
                            Text(e.roles.toString()),
                            IconButton(
                                icon: Icon(Icons.edit), onPressed: () {}),
                          ]);
                    }).toList());
                  else
                    return Text("NULL");
                })));
  }
}