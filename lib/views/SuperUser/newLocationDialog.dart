import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class NewLocationDialog extends StatefulWidget {
  @override
  _NewLocationDialogState createState() => _NewLocationDialogState();
}

class _NewLocationDialogState extends State<NewLocationDialog> {
  @override
  void initState() {
    super.initState();
    print(globals.existingLocations);
    // print(globals.existingLocations[0]);
    // getCollections();
  }

  File _image;
  String _uploadedFileURL;
  html.File image;
  List<DropdownMenuItem<String>> _dropDownMenuItems;
  // String _categorySelected = globals.categories[0];
  String _collectionSelected = globals.existingLocations[0];

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
    
    print("DEBUG REF IS: ");
    print(storageRef);
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

  Future getCategories(String locationName) async {
    List<dynamic> names;
    QuerySnapshot list = await Firestore.instance
        .collection(globals.locations)
        .where('name', isEqualTo: locationName)
        .getDocuments();
    list.documents.forEach((doc) {
      names = List.from(doc.data['categories']);
      print("Printing NAMESSSSSSSS!!!!!!!!!!!!");
      names.forEach((element) {
        print(element['name']);
         globals.categories.add(element['name']);
      });
      print("GLOBAL CAT :");
      print(globals.categories);

    });
  }

  // Future getCollections() async {
  //   QuerySnapshot list =
  //       await Firestore.instance.collection(globals.locations).getDocuments();
  //   list.documents.forEach((doc) => globals.existingLocations.add(doc.data['name']));
  // }

  String _locationNme;
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
                          child: Text('Choose Location Image'),
                          onPressed: pickImage,
                          color: Colors.cyan,
                        )
                      : Container(),
                  // Text("Add new item"),
                  //Selecting a location?
                  // SizedBox(
                  //     child: customDropDownMwnu(
                  //         globals.existingLocations, _collectionSelected,0)),
                  // //Selecting a category?
                  // SizedBox(
                  //     child: customDropDownMwnu(
                  //         globals.categories, _categorySelected,1)),
                  TextField(
                    onChanged: (text) {
                      _locationNme = text;
                      print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Location Name",
                    ),
                  ),
                  // TextField(
                  //   onChanged: (text) {
                  //     _itemCount = text;
                  //     print("First text field: $text");
                  //   },
                  //   decoration: InputDecoration(
                  //     labelText: "Item Amount",
                  //   ),
                  // ),

                  RaisedButton(
                      onPressed: () {
                        // uploadFile().then((value) => testingUploadItem(_locationNme, _itemCount));
                        testingUploadItem(_locationNme);
                      },
                      child: Text("Submit"))
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


  testingUploadItem(String itemName) async {
    await getLocationList();
    bool found = false;
    locationList.forEach((element) {
      if (itemName == element) {
        found = true;
      }
    });
    if(!found){
      final databaseReference = Firestore.instance;
    // List<dynamic> emptyList = [];
    String url;
    if (_uploadedFileURL == null) {
      print("DEBUG:  URL is Empty");
      url = defaultURL;
    } else {
      url = _uploadedFileURL;
    }
    await databaseReference
        .collection(globals.locations)
        .document()
        .setData({
      'imageURL': url,
      'name': itemName,
      'categories' : [],
      //categories
    }).then((value) {
      Navigator.pop(context);
    });
    // return ;
    print("Finish uploading");

    }else{
      showDialog(
          context: context,
          builder: (context) {
            return AlertDialog(
              title: Text(
                  'The location name is already exist and can not be added!'),
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

  Widget customDropDownMwnu(List<String> collection, String selected, int pos) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 5.0),
      decoration: BoxDecoration(
        color: Colors.white,
        // borderRadius: BorderRadius.circular(30.0),
        // border: Border.all(
        //     color: Colors.green, style: BorderStyle.solid, width: 2.0),
      ),
      child: DropdownButton<String>(
          isExpanded: true,
          // dropdownColor: Colors.green,
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
              // _collectionSelected = optionSelected;
              if(pos == 0){
                print("GETTING INSIDE THE 0");
                getCategories(optionSelected);
                 _collectionSelected = optionSelected;
              }
            });
          },
          value: selected),
    );
  }
}
