import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;

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
  String _itemCount;
  String _url =
      'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/cat.jpg?alt=media&token=78818628-9471-421d-8969-76d68b07f591';

  @override
  Widget build(BuildContext context) {
    _itemName = widget.itemSelected.data['name'];
    _itemCount = widget.itemSelected.data['amount'];
    _url = widget.itemSelected.data['imageURL'];
    controller.text = widget.itemSelected.data['name'];
    controller2.text = widget.itemSelected.data['amount'];
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
                      _itemCount = text;
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
                          Navigator.pop(context);
                        
                      },
                      child: Text("Update Item"))
                ]))));
  }

  Future updateAll() {
    updateName();
    updateAmount();
    updateUrl();
  }

  Future deleteItem() async {
    final firestore = Firestore.instance;
    await firestore
        .collection('items')
        .document(widget.itemSelected.documentID.toString())
        .delete()
        .catchError((error) => print(error));
  }

  Future updateName() async {
    final firestore = Firestore.instance;
    await firestore
        .collection('items')
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'name': _itemName,
    }).catchError((error) => print(error));
  }

  Future updateAmount() async {
    final firestore = Firestore.instance;
    await firestore
        .collection('items')
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'amount': _itemCount,
    }).catchError((error) => print(error));
  }

  Future updateUrl() async {
    final firestore = Firestore.instance;
    await firestore
        .collection('items')
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'imageURL': _url,
    }).catchError((error) => print(error));
  }
}
