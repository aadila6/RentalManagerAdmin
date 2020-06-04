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
    print("Inside new location");
  }

  File _image;
  String _uploadedFileURL;
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
                 
                  RaisedButton(
                      onPressed: () {
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
      'name': itemName.trim(),
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

}
