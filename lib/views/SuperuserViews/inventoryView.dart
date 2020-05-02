import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

//import 'newItemDialog.dart';

Future<List<DocumentSnapshot>> getAllInventory(self) async {
  if (self.isReady == false) {
    final firestore = Firestore.instance;
    QuerySnapshot docs = await firestore.collection('items').getDocuments();
    self.setState(() {
      self.isReady = true;
      self.itemList = docs.documents;
    });
    print("FUCK");
    return docs.documents;
  }
  
  return self.itemList;
}

class SuperuserInventoryView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperuserInventoryViewState();
  }
}

class SuperuserInventoryViewState extends State<SuperuserInventoryView> {
  bool isReady = false;
  List<DocumentSnapshot> itemList;
  @override
  Widget build(BuildContext context) {
    return Column(children:[
      FlatButton(onPressed: (){
        showDialog(context: context, 
        builder: (ctxt){
          return Text("Placeholder");//NewItemDialog();
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
