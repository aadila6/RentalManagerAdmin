import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class NewItemDialog extends StatefulWidget {
  String categorySelected;
  String locationSelected;
  NewItemDialog({this.categorySelected, this.locationSelected});
  @override
  _NewItemDialogState createState() => _NewItemDialogState();
}

class _NewItemDialogState extends State<NewItemDialog> {
  @override
  void initState() {
    super.initState();
    print(globals.existingLocations);
    getCollections();
    // print(globals.existingLocations[0]);
    // getCollections();
  }

  File _image;
  String _uploadedFileURL;
  html.File image;
  List<DropdownMenuItem<String>> _dropDownMenuItems;
  // String _categorySelected = this.wicategorySelected;
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
  Future getCollections() async {
    globals.existingLocations = ['Select a Location'];
    QuerySnapshot list =
        await Firestore.instance.collection(globals.locations).getDocuments();
        print("ADDING LOCATIONS!!!");
    list.documents.forEach((doc) {
      globals.existingLocations.add(doc.data['name']);
     
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

  String _itemName;
  int _itemCount;
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
                          child: Text('Choose Image'),
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
                      _itemName = text;
                      print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Item Name",
                    ),
                  ),
                  TextField(
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
                        // uploadFile().then((value) => testingUploadItem(_itemName, _itemCount));
                        testingUploadItem(_itemName, _itemCount);
                      },
                      child: Text("Submit"))
                ]))));
  }
List<String> itemList = [];
  Future getItemLists() async {
    itemList.clear();
    QuerySnapshot list =
        await Firestore.instance.collection(globals.items_global).where('category',isEqualTo: this.widget.categorySelected).getDocuments();
    list.documents.forEach((doc) {
      itemList.add(doc.data['name']);
    });
  }


  testingUploadItem(String itemName, int itemCount) async {
    await getItemLists();
    bool found = false;
    itemList.forEach((element) {
      if(element == itemName){
        found = true;
      }
    });
    if(!found){
      final databaseReference = Firestore.instance;
    String url;
    if (_uploadedFileURL == null) {
      print("DEBUG:  URL is Empty");
      url = defaultURL;
    } else {
      url = _uploadedFileURL;
    }
    await databaseReference
        .collection(globals.items_global)
        .document()
        .setData({
      'category': this.widget.categorySelected,
      'imageURL': url,
      'name': itemName,
      'Location':this.widget.locationSelected,
      '# of items': itemCount,
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
                  'The item name is already exist and can not be added!'),
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
             
            });
          },
          value: selected),
    );
  }
}
