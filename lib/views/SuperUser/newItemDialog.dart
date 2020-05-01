import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:path/path.dart' as Path;
// class NewItemDialog extends StatelessWidget {
//   Image _image;
//   String _uploadedFileURL;

//   @override
//   Widget build(BuildContext context) {
//     return Dialog(
//       child:ConstrainedBox(
//         constraints: BoxConstraints(
//           maxWidth: 500,
//           maxHeight: 500
//         ),
//       child: Container(
//         padding: EdgeInsets.all(30),
//         child: Column(
//         mainAxisSize: MainAxisSize.min,
//         children: [
//           Text("Add new item"),
//           TextField(
//             autofocus: true,
//             decoration: InputDecoration(
//                 labelText: "Item Name",
//             ),
//           ),
//           TextField(
//             decoration: InputDecoration(
//                 labelText: "Item Amount",
//             ),
//           ),
//           _image == null
//                ? RaisedButton(
//                    child: Text('Choose File'),
//                    onPressed: chooseFile,
//                    color: Colors.cyan,
//                  )
//                : Container(),

//           RaisedButton(onPressed: (

//           ){ uploadFile();}, child: Text("Submit"))
//         ]
//       ))
//     ));
//   }
//    Future chooseFile() async{
//     Image fromPicker = await ImagePickerWeb.getImage(outputType: ImageType.widget);

//     if (fromPicker != null) {
//       // setState(() {
//       //   _image = fromPicker;
//       // });
//     }
//   }
//    Future uploadFile() async {
//    StorageReference storageReference = FirebaseStorage.instance
//        .ref()
//        .child('images/${Path.basename(_image.path)}}');
//    StorageUploadTask uploadTask = storageReference.putFile(_image);
//    await uploadTask.onComplete;
//    print('File Uploaded');
//    storageReference.getDownloadURL().then((fileURL) {
//     //  setState(() {
//     //    _uploadedFileURL = fileURL;
//     //    print(fileURL);
//     //  });
//    });
//  }
// }
class NewItemDialog extends StatefulWidget {
  @override
  _NewItemDialogState createState() => _NewItemDialogState();
}

class _NewItemDialogState extends State<NewItemDialog> {
  File _image;
  String _uploadedFileURL;
  Future chooseFile() async {
    File fromPicker = await ImagePickerWeb.getImage(outputType: ImageType.file);
    // print("Image selecting");
    if (fromPicker != null) {
      setState(() {
        _image = fromPicker;
      });
      print("Image selected");
      uploadFile();
    }
  }

//    Future uploadFile() async {
//      print("Inside upload~ ");
//    StorageReference storageReference = FirebaseStorage.instance
//        .ref()
//        .child('/${Path.basename(_image.path)}}');
//    StorageUploadTask uploadTask = storageReference.putFile(_image);
//    await uploadTask.onComplete;
//    print('File Uploaded');
//    storageReference.getDownloadURL().then((fileURL) {
//      setState(() {
//        _uploadedFileURL = fileURL;
//        print(fileURL);
//      });
//    });
//  }
  Future uploadFile() async {
    String fileName = DateTime.now().millisecondsSinceEpoch.toString();
    StorageReference reference = FirebaseStorage.instance.ref().child(fileName);
    StorageUploadTask uploadTask = reference.putFile(_image);
    StorageTaskSnapshot storageTaskSnapshot = await uploadTask.onComplete;
    storageTaskSnapshot.ref.getDownloadURL().then((downloadUrl) {
      _uploadedFileURL = downloadUrl;
      setState(() {
        _uploadedFileURL = downloadUrl;
      });
      print("Success?????");
      print(_uploadedFileURL);
    }, onError: (err) {
      setState(() {
        print('ERRRRRR');
      });
      print('ERRRRRR');
    });
  }

  String _itemName;
  String _itemCount;
  String _url =
      'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/cat.jpg?alt=media&token=78818628-9471-421d-8969-76d68b07f591';
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
                    backgroundImage: NetworkImage(_url),
                  ),
                  SizedBox(height:10),
                   _image == null
                      ? RaisedButton(
                          child: Text('Choose Image'),
                          onPressed: chooseFile,
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
                        // uploadFile();
                        //Convert the image to a file

                        //First upload to firebase Storage and get the image URL

                        //Second create in cloud firestore of the new item with the given URL

                        //Display them on inventory page
                        testingUploadItem(_itemName, _itemCount, _url);
                      },
                      child: Text("Submit"))
                ]))));
  }

  testingUploadItem(String itemName, String itemCount, String url) async {
    final databaseReference = Firestore.instance;
    await databaseReference.collection("items").document().setData({
      'Category': "sport",
      'imageURL': url,
      'isAvaliable': "true",
      'name': itemName,
      'amount': itemCount,
    });
    print("Finish uploading");
  }
}
