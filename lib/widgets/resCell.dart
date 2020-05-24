import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/ReservationView.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
class reservationCell extends StatefulWidget {
  final DocumentSnapshot passedFirestoreData;
  reservationCell({this.passedFirestoreData});
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _reservationCell();
  }
}

String action = "Pick Up";

class _reservationCell extends State<reservationCell> {
  Future pickedUp() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.reservation_global)
        .document(widget.passedFirestoreData.documentID.toString())
        .updateData({'status': 'Picked Up'}).catchError(
            (error) => print(error));
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => ReservationListPage()));
  }

  Future returned() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.reservation_global)
        .document(widget.passedFirestoreData.documentID.toString())
        .updateData({'status': 'Returned'}).catchError((error) => print(error));
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => ReservationListPage()));
  }

  Future cancelReservation() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.reservation_global)
        .document(widget.passedFirestoreData.documentID.toString())
        .delete()
        .catchError((error) => print(error));
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => ReservationListPage()));
  }

  @override
  Widget build(BuildContext context) {
    if (widget.passedFirestoreData['status'] == 'Reserved') {
      action = "Pick Up";
    } else if (widget.passedFirestoreData['status'] == 'Picked Up') {
      action = "Return";
    }
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.teal,
        title: Text('Activity Details'),
      ),
      body: Container(
        padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            SizedBox(height: 20),
            Text.rich(
              TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: '- item name: ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic, fontSize: 16.0)),
                  TextSpan(
                      text: widget.passedFirestoreData['name'],
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.teal)),
                ],
              ),
            ),
            SizedBox(height: 20),
            Text.rich(
              TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: '- start time: ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic, fontSize: 16.0)),
                  TextSpan(
                      text: widget.passedFirestoreData['startTime'],
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.teal)),
                ],
              ),
            ),
            SizedBox(height: 20),
            Text.rich(
              TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: '- end time: ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic, fontSize: 16.0)),
                  TextSpan(
                      text: widget.passedFirestoreData['endTime'],
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.teal)),
                ],
              ),
            ),
            SizedBox(height: 20),
            Text.rich(
              TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: '- quantity: ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic, fontSize: 16.0)),
                  TextSpan(
                      text: widget.passedFirestoreData['amount'],
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.teal)),
                ],
              ),
            ),
            SizedBox(height: 20),
            Text.rich(
              TextSpan(
                children: <TextSpan>[
                  TextSpan(
                      text: '- item status: ',
                      style: TextStyle(
                          fontStyle: FontStyle.italic, fontSize: 16.0)),
                  TextSpan(
                      text: widget.passedFirestoreData['status'],
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 18,
                          color: Colors.teal)),
                ],
              ),
            ),
            SizedBox(height: 50),
            SizedBox(
              height: 50,
              width: double.infinity,
              child: RaisedButton.icon(
                color: Colors.teal,
                textColor: Colors.white,
                elevation: 2.0,
                shape: new RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(40.0),
                ),
                onPressed: () async {
                  if (widget.passedFirestoreData['status'] == 'Reserved') {
                    pickedUp();
                  } else if (widget.passedFirestoreData['status'] ==
                      'Picked Up') {
                    returned();
                  }
                  Navigator.pop(context);
                },
                icon: Icon(Icons.insert_emoticon, size: 30.0),
                label: Text(
                  action,
                  style: TextStyle(fontSize: 20.0),
                ),
              ),
            ),
            SizedBox(height: 20),
            SizedBox(
              height: 50,
              width: double.infinity,
              child: RaisedButton.icon(
                color: Colors.teal,
                textColor: Colors.white,
                elevation: 2.0,
                shape: new RoundedRectangleBorder(
                  borderRadius: new BorderRadius.circular(40.0),
                ),
                onPressed: () async {
                  cancelReservation();
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => ReservationListPage()));
                  Navigator.pop(context);
                },
                icon: Icon(
                  Icons.cancel,
                  size: 30.0,
                ),
                label: Text(
                  'Cancel',
                  style: TextStyle(fontSize: 20.0),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
