import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart'; 
import 'package:firebase_storage/firebase_storage.dart';
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
   Image _image;
  String _uploadedFileURL;  
  Future chooseFile() async{
    Image fromPicker = await ImagePickerWeb.getImage(outputType: ImageType.widget);

    if (fromPicker != null) {
      setState(() {
        _image = fromPicker;
      });
    }
  }
//    Future uploadFile() async {    
//    StorageReference storageReference = FirebaseStorage.instance    
//        .ref()    
//        .child('images/${Path.basename(_image.path)}}');    
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
 
  @override
  Widget build(BuildContext context) {
    return Dialog(
      child:ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: 500,
          maxHeight: 500
        ),
      child: Container(
        padding: EdgeInsets.all(30),
        child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text("Add new item"),
          TextField(
            autofocus: true,
            decoration: InputDecoration(
                labelText: "Item Name",
            ),
          ),
          TextField(
            decoration: InputDecoration(
                labelText: "Item Amount",
            ),
          ),
          _image == null    
               ? RaisedButton(    
                   child: Text('Choose File'),    
                   onPressed: chooseFile,    
                   color: Colors.cyan,    
                 )    
               : Container(),    
              
          RaisedButton(onPressed: (){ 
            //First upload to firebase Storage and get the image URL
            //Second create in cloud firestore of the new item with the given URL
            //Display them on inventory page
            
          }, child: Text("Submit"))
        ]
      ))
    ));
  }
   
}