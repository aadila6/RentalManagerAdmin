import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

import 'newItemDialog.dart';

Future<List<DocumentSnapshot>> getAllInventory(self) async {
  // final firestore = Firestore.instance;
  // QuerySnapshot docs = await firestore.collection('items').getDocuments();
  // self.setState(() {
  //   self.isReady = true;
  // });
  // return docs.documents;
  print("FUCK");
  return null;
}

class SuperuserInventoryView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperuserInventoryViewState();
  }
}

class SuperuserInventoryViewState extends State<SuperuserInventoryView> {
  bool isReady = false;
  @override
  Widget build(BuildContext context) {
    return Column(children:[
      FlatButton(onPressed: (){
        showDialog(context: context, 
        builder: (ctxt){
          return NewItemDialog();
          });
        }, child: Text("Add new item")),
      FutureBuilder(
        future: getAllInventory(this),
        builder: (ctxt, snap) {
          if (isReady) {
            List<DocumentSnapshot> snapData = snap.data;
            return Flexible(
                child: ListView.builder(
                    itemCount: snapData.length,
                    itemBuilder: (context, i) {
                      return ListTile(
                        title: Text(snapData[i].data['name']),
                      );
                    }));
          } else {
            return CircularProgressIndicator();
          }
        })]);
  }
}
