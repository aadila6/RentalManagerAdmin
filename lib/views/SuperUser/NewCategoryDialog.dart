import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class NewCategory extends StatefulWidget {
  String locationSelected;
  String locationName;
  NewCategory({this.locationSelected, this.locationName});
  @override
  _NewCategoryState createState() => _NewCategoryState();
}

class _NewCategoryState extends State<NewCategory> {
  @override
  void initState() {
    super.initState();
    print(globals.existingLocations);
    getCategories(this.widget.locationName);
    // getCollections();
  }

  File _image;
  String _uploadedFileURL;
  html.File image;
  List<DropdownMenuItem<String>> _dropDownMenuItems;
  // String _categorySelected = globals.categories[0];
  // String _collectionSelected = globals.existingLocations[0];

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
        defaultURL = fileURL.toString();
      });
      _uploadedFileURL = fileURL.toString();
    });
  }

  // Future getCollections() async {
  //   globals.existingLocations = ['Select a Location'];
  //   QuerySnapshot list =
  //       await Firestore.instance.collection(globals.locations).getDocuments();
  //   print("ADDING LOCATIONS!!!");
  //   list.documents.forEach((doc) {
  //     globals.existingLocations.add(doc.data['name']);
  //   });
  // }
  //  List<dynamic> categoryList;
  List<Map<dynamic, dynamic>> categoryList = [];
  Future getCategories(String locationName) async {
    //First get the name
    QuerySnapshot list = await Firestore.instance
        .collection(globals.locations)
        .where('name', isEqualTo: locationName)
        .getDocuments();
    list.documents.forEach((doc) {
      categoryList = List.from(doc.data['categories']);
      print("Printing NAMESSSSSSSS!!!!!!!!!!!!");
      categoryList.forEach((element) {
        print(element['name']);
        //  globals.categories.add(element['name']);
      });
      print("GLOBAL CAT :");
      print(categoryList);
    });
  }

  String _categoryName;
  String _itemCount;
  String defaultURL =
      "https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b";

  @override
  Widget build(BuildContext context) {
    return Dialog(
        child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: 500, maxHeight: 500),
            child: Container(
                padding: EdgeInsets.all(30),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  CircleAvatar(
                    radius: 50,
                    backgroundImage: NetworkImage(defaultURL),
                  ),
                  SizedBox(height: 10),
                  _image == null
                      ? RaisedButton(
                          child: Text('Choose Category Image'),
                          onPressed: pickImage,
                          color: Colors.cyan,
                        )
                      : Container(),
                  TextField(
                    onChanged: (text) {
                      _categoryName = text;
                      print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Category Name",
                    ),
                  ),
                  RaisedButton(
                      onPressed: () {
                        // uploadFile().then((value) => testingUploadItem(_categoryName, _itemCount));
                        testingUploadItem(_categoryName);
                      },
                      child: Text("Submit"))
                ]))));
  }

  testingUploadItem(String itemName) async {
    final databaseReference = Firestore.instance;
    String url;
    if (_uploadedFileURL == null) {
      print("DEBUG:  URL is Empty");
      url = defaultURL;
    } else {
      url = _uploadedFileURL;
    }

    categoryList.add({'name': itemName, 'imageURL': url});
    await Firestore.instance
        .collection(globals.locations)
        .document(this.widget.locationSelected)
        .updateData({
      "categories": categoryList,
    });
    print("Finish uploading");
  }

  Widget customDropDownMwnu(List<String> collection, String selected, int pos) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 5.0),
      decoration: BoxDecoration(
        color: Colors.white,
      ),
      child: DropdownButton<String>(
          isExpanded: true,
          iconSize: 28.0,
          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.bold,
            fontSize: 20.0,
          ),
          icon: Icon(
            Icons.arrow_drop_down,
            color: Colors.black,
            size: 40,
          ),
          items: collection.map(
            (String type) {
              return DropdownMenuItem<String>(
                child: Text(type),
                value: type,
              );
            },
          ).toList(),
          onChanged: (String optionSelected) {
            print(optionSelected);
            setState(() {
              if (pos == 0) {
                print("GETTING INSIDE THE 0");
              }
            });
          },
          value: selected),
    );
  }
}
