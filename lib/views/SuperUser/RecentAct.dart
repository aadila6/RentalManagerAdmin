import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:firebase_storage/firebase_storage.dart';
// import '../reservations/reservationCell.dart';
// import 'package:liquid_pull_to_refresh/liquid_pull_to_refresh.dart';
// import '../globals.dart' as globals;

class RecentActivities extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _RecentActivities();
  }
}

class _RecentActivities extends State<RecentActivities> {
  Future getFirestoreData() async {
    final FirebaseUser user = await FirebaseAuth.instance.currentUser();
    // final userID = user.uid;
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC = await firestore
        .collection('reservation')
        .getDocuments();
    return itemListDOC.documents;
  }

  // navigateToDetail(DocumentSnapshot indexedData) {
  //   Navigator.push(
  //       context,
  //       MaterialPageRoute(
  //           builder: (context) =>
  //               reservationCell(passedFirestoreData: indexedData)));
  // }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: getFirestoreData(),
      builder: (_, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Center(
            child: Text('Loading...'),
          );
        } else {
          return ListView.builder(
            itemCount: snapshot.data.length,
            // add change here make the itemBuilder return Dismissible type
            itemBuilder: (context, index) {
              // print(snapshot.data[index]['name'].toString());
              return Container(
                // padding: EdgeInsets.all(10.0),
                margin: EdgeInsets.all(5.0),
                // decoration: BoxDecoration(
                //   border: Border.all(color: Colors.teal, width: 3.0),
                //   borderRadius: BorderRadius.all(Radius.circular(
                //           40.0) //                 <--- border radius here
                //       ),
                // ),
                child: ListTile(
                  // leading: Icon(Icons.timer, size: 35.0),
                  // trailing: Icon(Icons.arrow_forward, size: 28.0),
                  onTap: () {
                    // navigateToDetail(snapshot.data[index]);
                  },
                  title: Text(
                    snapshot.data[index]['name'],
                    style: TextStyle(fontSize: 20.0),
                  ),
                  subtitle: Text(snapshot.data[index]['startTime'] +
                      ' - quantity: ' +
                      snapshot.data[index]['amount']),
                ),
              );
            },
          );
        }
      },
    );
  }
}