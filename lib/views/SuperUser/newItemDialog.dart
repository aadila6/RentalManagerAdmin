import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;

class NewItemDialog extends StatefulWidget {
  @override
  _NewItemDialogState createState() => _NewItemDialogState();
}

class _NewItemDialogState extends State<NewItemDialog> {
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
    fb.UploadTaskSnapshot uploadTaskSnapshot = await storageRef.put(image).future;
    await uploadTaskSnapshot.ref.getDownloadURL().then((fileURL) {
     setState(() {
       print("DEBUG URLLLLLL:" + fileURL.toString());
        defaultURL = fileURL.toString();
     });
     _uploadedFileURL = fileURL.toString();
   });
  }
  String _itemName;
  String _itemCount;
  String defaultURL = "https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b";

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
                  SizedBox(height:10),
                   _image == null
                      ? RaisedButton(
                          child: Text('Choose Image'),
                          onPressed: pickImage,
                          color: Colors.cyan,
                        )
                      : Container(),
                  // Text("Add new item"),
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
                      _itemCount = text;
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

  testingUploadItem(String itemName, String itemCount) async {
    final databaseReference = Firestore.instance;
    String url;
    if(_uploadedFileURL == null){
      print("DEBUG:  URL is Empty bitch");
      url = defaultURL;
    }else{
      url = _uploadedFileURL;
    }
    await databaseReference.collection("items").document().setData({
      'Category': "sport",
      'imageURL': url,
      'isAvaliable': "true",
      'name': itemName,
      'amount': itemCount,
    }).then((value){
      Navigator.pop(context);
    });
    // return ;
    print("Finish uploading");
  }
}
