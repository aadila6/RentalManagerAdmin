import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:path/path.dart' as Path;

class UpdateItemDialog extends StatefulWidget {
  var itemSelected;
  UpdateItemDialog({this.itemSelected});
  @override
  _UpdateItemDialogState createState() => _UpdateItemDialogState();
}
TextEditingController controller = TextEditingController();
TextEditingController controller2 = TextEditingController();
class _UpdateItemDialogState extends State<UpdateItemDialog> {
  File _image ;
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
      print("Success???");
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
                    backgroundImage: NetworkImage(widget.itemSelected.data['imageURL']),
                  ),
                  SizedBox(height:10),
                   _image == null
                      ? RaisedButton(
                          child: Text('Change Image'),
                          onPressed: chooseFile,
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
                      labelText:"Item Name",
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
                        deleteItem();
                      },
                      child: Text("Delete Item")),
                  RaisedButton(
                      onPressed: () {
                        // uploadFile();
                        //Convert the image to a file

                        //First upload to firebase Storage and get the image URL

                        //Second create in cloud firestore of the new item with the given URL

                        //Display them on inventory page
                        updateName();
                      },
                      child: Text("Update Item"))
                ]))));
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
        .updateData({'name': _itemName,},).catchError(
            (error) => print(error));
  }

}
