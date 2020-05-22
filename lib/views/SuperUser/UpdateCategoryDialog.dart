import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class UpdateCategoryDialog extends StatefulWidget {
  var categorySelected;
  var locationSelected;
  String locationName;
  UpdateCategoryDialog(
      {this.categorySelected, this.locationSelected, this.locationName});
  @override
  _UpdateLocationDialogState createState() => _UpdateLocationDialogState();
}

TextEditingController controller = TextEditingController();
TextEditingController controller2 = TextEditingController();

class _UpdateLocationDialogState extends State<UpdateCategoryDialog> {
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
  List<Map<dynamic, dynamic>> categoryList = [];
  List<String> catNames = [];
  Future getCat() async {
    print("Getting Cattttt");
    //First get the name
    QuerySnapshot list = await Firestore.instance
        .collection(globals.locations)
        .where('name', isEqualTo: this.widget.locationName)
        .getDocuments();
    categoryList.clear();
    print("cleared the matrix");
    list.documents.forEach((doc) {
       print("000000000");
      categoryList = List.from(doc.data['categories']);
      print("11111111");
      // catNames.add(doc.data['categories']['name']);
      categoryList.forEach((element) {
        print("222222222222");
        print(element);
        //  globals.categories.add(element['name']);
      });
      print(categoryList);
      print("Printing NAMESSSSSSSS!!!!!!!!!!!!");
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getCat();
  }

  @override
  Widget build(BuildContext context) {
    _itemName = widget.categorySelected['name'];
    // _itemCount = widget.itemSelected.data['amount'];
    _url = widget.categorySelected['imageURL'];
    controller.text = widget.categorySelected['name'];
    // controller2.text = widget.categorySelected['imageURL'].toString();
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
                      labelText: "Category Name",
                    ),
                  ),
                  RaisedButton(
                      onPressed: () {
                        deleteItem().then((value) {
                          Navigator.pop(context);
                        });
                      },
                      child: Text("Delete Category")),
                  RaisedButton(
                      onPressed: () {
                        updateAll();
                        
                      },
                      child: Text("Update Information"))
                ]))));
  }

  Future updateAll() async {
    await getCat();
    // catNames.clear();
    bool found = false;
    categoryList.forEach((element) {
      print(element['name']);
      if (element['name'].toString().toLowerCase() == _itemName.toLowerCase()) {
        found = true;
        print("found!!!!");
      }else{
        print(element['name']);
      }
    });
    if (found) {
      print("ERRRR: dup category and returning a err dialog");
      showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title:
                  Text('The category name already exist and can not be added!'),
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
    } else {
      print("SUCCESS!");
      categoryList.removeWhere(
          (item) => item['name'] == this.widget.categorySelected['name']);
      categoryList.add({'name': _itemName, 'imageURL': _url});
      await Firestore.instance
          .collection(globals.locations)
          .document(this.widget.locationSelected)
          .updateData({
        "categories": categoryList,
      });
      Navigator.pop(context);
    }
  }

  Future deleteItem() async {
    await getCat();
    categoryList.removeWhere(
        (item) => item['name'] == this.widget.categorySelected['name']);
    await Firestore.instance
        .collection(globals.locations)
        .document(this.widget.locationSelected)
        .updateData({
      "categories": categoryList,
    });
    // also deletes everything related to this category and location.
    // final firestore = Firestore.instance;
    QuerySnapshot list = await Firestore.instance
        .collection(globals.items_global)
        .where('category', isEqualTo: this.widget.categorySelected['name'])
        .where('Location', isEqualTo: this.widget.locationName)
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
  }
}
