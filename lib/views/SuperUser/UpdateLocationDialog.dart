import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class UpdateLocationDialog extends StatefulWidget {
  var itemSelected;
  UpdateLocationDialog({this.itemSelected});
  @override
  _UpdateLocationDialogState createState() => _UpdateLocationDialogState();
}

TextEditingController controller = TextEditingController();
TextEditingController controller2 = TextEditingController();

class _UpdateLocationDialogState extends State<UpdateLocationDialog> {
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
  // int _itemCount;
  String _url =
      'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/cat.jpg?alt=media&token=78818628-9471-421d-8969-76d68b07f591';

  @override
  Widget build(BuildContext context) {
    _itemName = widget.itemSelected.data['name'];
    // _itemCount = widget.itemSelected.data['amount'];
    _url = widget.itemSelected.data['imageURL'];
    controller.text = widget.itemSelected.data['name'];
    // controller2.text = widget.itemSelected.data['amount'].toString();
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
                  TextField(
                    controller: controller,
                    onChanged: (text) {
                      _itemName = text;
                      print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Location Name",
                    ),
                  ),
                 
                  RaisedButton(
                      onPressed: () {
                        deleteItem().then((value) {
                          Navigator.pop(context);
                        });
                      },
                      child: Text("Delete Location")),
                  RaisedButton(
                      onPressed: () {
                        updateAll();
                      },
                      child: Text("Update Information"))
                ]))));
  }

  List<String> locationList = [];
  Future getLocationList() async {
    locationList.clear();
    QuerySnapshot list =
        await Firestore.instance.collection(globals.locations).getDocuments();
    list.documents.forEach((doc) {
      locationList.add(doc.data['name']);
    });
  }

  Future updateAll() {
    updateName();
    updateUrl();
  }
  List<Map<dynamic, dynamic>> categoryList = [];
  // List<String>CatNames = [];
  List<String> catNames = [];
  Future getCat() async {
    print("Getting Cattttt");
    //First get the name
    QuerySnapshot list = await Firestore.instance
        .collection(globals.locations)
        .where('name', isEqualTo:  widget.itemSelected.data['name'])
        .getDocuments();
    categoryList.clear();
    print("cleared the matrix");
    list.documents.forEach((doc) {
       print("000000000");
      categoryList = List.from(doc.data['categories']);
      print("11111111");
      catNames.add(doc.data['categories']['name']);
      // categoryList.forEach((element) {
      //   print("222222222222");
      //   print(element);
      //   //  globals.categories.add(element['name']);
      // });
      print(categoryList);
      print("Printing NAMESSSSSSSS!!!!!!!!!!!!");
    });
  }

  Future deleteItem() async {
    // getCat();
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.locations)
        .document(widget.itemSelected.documentID.toString())
        .delete()
        .catchError((error) => print(error));
    //delete categories inside the location
    
    QuerySnapshot list = await Firestore.instance
        .collection(globals.items_global)
        // .where('category', isEqualTo: catNames)
        .where('Location', isEqualTo: widget.itemSelected.data['name'])
        .getDocuments();
    List docID = [];
    list.documents.forEach((doc) async {
      docID.add(doc.documentID);
    });
    print("DOC IDS: " + docID.toString());
    docID.forEach((element) async {
      await Firestore.instance
          .collection(globals.items_global)
          .document(element)
          .delete()
          .catchError((error) => print(error));
    });

    //delete items inside categories
    
    // Navigator.pop(context);
  }

  Future updateName() async {
    await getLocationList();
    bool found = false;
    int counter = 0;
    locationList.removeWhere(
          (item) => item == widget.itemSelected.data['name']);
    locationList.forEach((element) {
      if (_itemName == element) {
        found = true;
        counter++;
      }
    });
    if (!found) {
      final firestore = Firestore.instance;
      await firestore
          .collection(globals.locations)
          .document(widget.itemSelected.documentID.toString())
          .updateData({
        'name': _itemName,
      }).catchError((error) => print(error));
      Navigator.pop(context);
    } else {
      showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text(
                  'The location name is already exist and can not be changed!'),
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
    }
  }

  Future updateUrl() async {
    final firestore = Firestore.instance;
    await firestore
        .collection(globals.locations)
        .document(widget.itemSelected.documentID.toString())
        .updateData({
      'imageURL': _url,
    }).catchError((error) => print(error));
  }
}
