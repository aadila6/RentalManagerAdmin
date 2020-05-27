import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class UpdateItemDialog extends StatefulWidget {
  var itemSelected;
  UpdateItemDialog({this.itemSelected});
  @override
  _UpdateItemDialogState createState() => _UpdateItemDialogState();
}

TextEditingController controller = TextEditingController();
TextEditingController controller2 = TextEditingController();

class _UpdateItemDialogState extends State<UpdateItemDialog> {
  File _image;
  html.File image;
  Future pickImage() async {
    print("Begin pick Image");
    html.File imageFile =
        await ImagePickerWeb.getImage(outputType: ImageType.file);
    if (imageFile != null) {
      debugPrint(imageFile.name.toString());
      image = imageFile;
      uploadFile();
    }
  }

  Future uploadFile() async {
    String fileName = DateTime.now().millisecondsSinceEpoch.toString();
    fb.StorageReference storageRef = fb.storage().ref('images/$fileName');
    fb.UploadTaskSnapshot uploadTaskSnapshot =
        await storageRef.put(image).future;
    await uploadTaskSnapshot.ref.getDownloadURL().then((fileURL) {
      setState(() {
        print("DEBUG URLLLLLL:" + fileURL.toString());
        _url = fileURL.toString();
      });
      _url = fileURL.toString();
    });
  }

  String _itemName;
  int _itemCount;
  String _url =
      'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/cat.jpg?alt=media&token=78818628-9471-421d-8969-76d68b07f591';

  @override
  Widget build(BuildContext context) {
    _itemName = widget.itemSelected.data['name'];
    _itemCount = widget.itemSelected.data['amount'];
    _url = widget.itemSelected.data['imageURL'];
    controller.text = widget.itemSelected.data['name'];
    controller2.text = widget.itemSelected.data['amount'].toString();
    return Dialog(
        child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: 500, maxHeight: 500),
            child: Container(
                padding: EdgeInsets.all(30),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  CircleAvatar(
                    radius: 50,
                    backgroundImage: NetworkImage(_url),
                  ),
                  SizedBox(height: 10),
                  _image == null
                      ? RaisedButton(
                          child: Text('Change Image'),
                          onPressed: pickImage,
                          color: Colors.cyan,
                        )
                      : Container(),
                  // Text("Add new item"),
                  TextField(
                    controller: controller,
                    onChanged: (text) {
                      _itemName = text;
                      print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Item Name",
                    ),
                  ),
                  TextField(
                    controller: controller2,
                    onChanged: (text) {
                      _itemCount = int.parse(text);
                      print("First text field: $text");
                    },
                    decoration: InputDecoration(
                      labelText: "Item Amount",
                    ),
                  ),
                  RaisedButton(
                      onPressed: () {
                        deleteItem().then((value) {
                          Navigator.pop(context);
                        });
                      },
                      child: Text("Delete Item")),
                  RaisedButton(
                      onPressed: () {
                        updateAll();
                          // Navigator.pop(context);
                        
                      },
                      child: Text("Update Item"))
                ]))));
  }
  List<String> itemList = [];
  Future getItemLists() async {
    itemList.clear();
    QuerySnapshot list =
        await Firestore.instance.collection(globals.items_global).where('category',isEqualTo: widget.itemSelected.data['category']).getDocuments();
    list.documents.forEach((doc) {
      itemList.add(doc.data['name']);
    });
  }

  Future updateAll() async{
    await getItemLists();
    bool found = false;
    int counter = 0;
    // itemList.add(_itemName);
     itemList.removeWhere(
          (item) => item == widget.itemSelected.data['name']);
    itemList.forEach((element) {
      if(element == _itemName){
        found = true;
        counter++;
      }
    });
    if(found){
      showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text(
                  'The item name is already exist and can not be changed!'),
              actions: <Widget>[
                new FlatButton(
                  child: new Text('CANCEL'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          });
    }else{
      updateName();
    }
    updateAmount();
    updateUrl();
    

  }

  Future deleteItem() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.items_global)
        .document(widget.itemSelected.documentID.toString())
        .delete()
        .catchError((error) => print(error));
        
        // Navigator.pop(context);
  }

  Future updateName() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.items_global)
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'name': _itemName,
    }).catchError((error) => print(error));
    Navigator.pop(context);
  }

  Future updateAmount() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.items_global)
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'amount': _itemCount,
    }).catchError((error) => print(error));
    // Navigator.pop(context);
  }

  Future updateUrl() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.items_global)
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'imageURL': _url,
    }).catchError((error) => print(error));

  }
}
