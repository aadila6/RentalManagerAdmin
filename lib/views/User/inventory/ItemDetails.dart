import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/User/UI/homeView.dart';
import 'package:intl/intl.dart';
import 'package:RentalAdmin/views/User/UI/ReservationView.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:flutter/cupertino.dart';
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
      alignment: Alignment.center,
      height: MediaQuery.of(context).size.height * 0.5 / 2,
      width: MediaQuery.of(context).size.width * 0.5 / 2,
      decoration: new BoxDecoration(
        image: new DecorationImage(
          image: NetworkImage(widget.itemSelected.data['imageURL']),
        ),
      ),
    );
  }

  Text descriptionText() {
    return Text(widget.itemSelected.data['name'],
        style: TextStyle(fontSize: 18.0));
  }


  Widget amount() {
    print("globals items" + globals.items_global);
    print("item name" + this.widget.itemSelected['name']);
    return Container(
      // padding: EdgeInsets.fromLTRB(30.0, 10.0, 30.0, 30.0),
      child: Align(
        alignment: Alignment.center,
        child: StreamBuilder(
          stream: Firestore.instance
              .collection(globals.items_global)
              .document(widget.itemSelected.documentID)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) return CupertinoActivityIndicator();
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
  Future incrementItemAmount() {
    return 
        Firestore.instance
            .collection(globals.items_global)
            .document(widget.itemSelected.documentID)
            .updateData({'# of items': widget.itemSelected['# of items']-1});
  }
  

testingReservations(String itemID) async {
    print(itemID);
    var now = new DateTime.now();
    var time = DateFormat("yyyy-MM-dd HH:mm:ss").format(now);
    print("time");
    var pickUpBefore = now.add(new Duration(minutes: 10));
    uploadData(itemID, globals.userLoginID, time);
  }

  void uploadData(itemID, uid, dateTime) async {
    String itemName, imageURL;
    final databaseReference = Firestore.instance;
    await Firestore.instance
        .collection(globals.items_global)
        .document(itemID)
        .get()
        .then((DocumentSnapshot ds) {
      try {
        itemName = ds["name"];
        // print("Found in ARC_items");
      } catch (e) {
        print(e);
      }
    });

    await Firestore.instance
        .collection(globals.items_global)
        .document(itemID)
        .get()
        .then((DocumentSnapshot ds) {
      try {
        imageURL = ds["imageURL"];
        // print("Found in ARC_items");
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
      imageURL ="https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b";
    }
    int num = 1;
    await databaseReference.collection(globals.reservation_global).document().setData({
      'imageURL': imageURL,
      'name': itemName,
      'uid': globals.userLoginID,
      'item': itemID,
      'amount': num,
      'startTime': dateTime,
      'status': "Picked Up",
      'reserved time': dateTime,
      'picked Up time': dateTime,
      'return time': 'NULL',
      'endTime': "TBD",
      'UserName': globals.username,
      'location': widget.itemSelected.data['Location'],
      'category': widget.itemSelected.data['category'],
    });
    incrementItemAmount();
    Navigator.push(context, MaterialPageRoute(builder: (context) => ReservationListPage()));
  }}
