import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import 'package:intl/intl.dart';

class DetailPage extends StatefulWidget {
  var itemSelected;
  DetailPage({this.itemSelected});
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _DetailPage();
  }
}
TextEditingController _textFieldController = TextEditingController();
class _DetailPage extends State<DetailPage> {
  Container reserveButton() {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      width: MediaQuery.of(context).size.width / 5,
      child: RaisedButton(
        onPressed: () {
          print('button pressed! (reserve)');
          testingReservations(widget.itemSelected.documentID);
        },
        child: Text('Check Out', style: TextStyle(color: Colors.white)),
        color: Colors.teal,
      ),
    );
  }

  Container top() {
    return Container(
      // padding: EdgeInsets.symmetric(vertical: 16.0),
      alignment: Alignment.center,
      // width: MediaQuery.of(context).size.width,
      // padding: EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0),
      height: MediaQuery.of(context).size.height * 0.5 / 2,
      width: MediaQuery.of(context).size.width * 0.5 / 2,
      decoration: new BoxDecoration(
        image: new DecorationImage(
          image: NetworkImage(widget.itemSelected.data['imageURL']),
          // image: new AssetImage("drive-steering-wheel.jpg"),
          // fit: BoxFit.cover,
        ),
      ),
    );
  }

  Text descriptionText() {
    return Text(widget.itemSelected.data['name'],
        style: TextStyle(fontSize: 18.0));
  }

  Widget amount() {
    return Container(
      // padding: EdgeInsets.fromLTRB(30.0, 10.0, 30.0, 30.0),
      child: Align(
        alignment: Alignment.center,
        child: StreamBuilder(
          stream: Firestore.instance
              .collection('ARC_items')
              .document(widget.itemSelected.documentID)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) return const Text('loading...');
            return Text('Instock Amount: ${snapshot.data['# of items']}',
                style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.green,
                    fontWeight: FontWeight.bold));
          },
        ),
      ),
    );
  }

  Container bottom() {
    return Container(
      // height: MediaQuery.of(context).size.height,
      alignment: Alignment.center,
      // width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height * 0.5 / 2,
      width: MediaQuery.of(context).size.width * 0.5 / 2,
      padding: EdgeInsets.fromLTRB(30.0, 5.0, 30.0, 30.0),
      // padding: EdgeInsets.all(40.0),
      child: Center(
        child: Column(
          children: <Widget>[descriptionText(), amount(), reserveButton()],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('${widget.itemSelected.data['name']}'),
          backgroundColor: Colors.teal,
        ),
        backgroundColor: Colors.blueGrey,
        body: Scaffold(
          body: Row(
            children: <Widget>[top(), bottom()],
          ),
        ));
  }

  testingReservations(String itemID) async {
    print(itemID);
    var now = new DateTime.now();
    var time = DateFormat("yyyy-MM-dd hh:mm:ss").format(now);
    var pickUpBefore = now.add(new Duration(minutes: 10));
    print("Reservation Created time: " + time);
    print("Reservation pickup before time: " +
        DateFormat("yyyy-MM-dd hh:mm:ss").format(pickUpBefore));
        showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Check Out Complete'),
            actions: <Widget>[
              new FlatButton(
                child: new Text('OK'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
        showDialog(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        title: Text('Swipe ID card'),
                        content: TextField(
                          controller: _textFieldController,
                          decoration:
                              InputDecoration(hintText: "Please enter SID#"),
                        ),
                        actions: <Widget>[
                          new FlatButton(
                            child: new Text('Cancel'),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          ),
                          new FlatButton(
                            child: new Text('Confirm'),
                            onPressed: () {
                              print("URL Request sent");
                              Navigator.of(context).pop();
                            },
                          )
                        ],
                      );
                    });
    // uploadData(itemID, '0000000000', time);
  }

  void uploadData(itemID, uid, dateTime) async {
    String itemName, imageURL;
    final databaseReference = Firestore.instance;
    await Firestore.instance
        .collection('ARC_items')
        .document(itemID)
        .get()
        .then((DocumentSnapshot ds) {
      try {
        itemName = ds["name"];
        print("Found in ARC_items");
      } catch (e) {
        print(e);
      }
    });

    await Firestore.instance
        .collection('ARC_items')
        .document(itemID)
        .get()
        .then((DocumentSnapshot ds) {
      try {
        imageURL = ds["imageURL"];
        print("Found in ARC_items");
      } catch (e) {
        print(e);
      }
    });

    if (itemName == null) {
      print("UID Not Found");
      itemName = "UID Not Found";
    }
    if (imageURL == null) {
      print("UID Not Found");
      imageURL = "www.gooogle.com";
    }

    await databaseReference.collection("Record").document().setData({
      'imageURL': imageURL,
      'name': itemName,
      'uid': uid,
      'item': itemID,
      'amount': "1",
      'startTime': dateTime,
      'status': "Picked Up",
      'endTime': "TBD",
    });
    showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Check Out Complete'),
            actions: <Widget>[
              new FlatButton(
                child: new Text('OK'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
    print("success!");
  }
}
