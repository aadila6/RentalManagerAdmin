
import 'package:flutter/material.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import '../views/inventory/list_page.dart';
import '../views/InventoryView.dart';


class LocationPage extends StatefulWidget {
  final String title;
  LocationPage({Key key, this.title}) : super(key: key);
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _LocationPageState();
  }
}

class _LocationPageState extends State<LocationPage> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.teal,
        ),
      body: ListPage(),
    );
  }
}

