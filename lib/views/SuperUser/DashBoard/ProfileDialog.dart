import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;

class UpdateProfile extends StatefulWidget {
  @override
  _UpdateProfileState createState() => _UpdateProfileState();
}

TextEditingController controller = TextEditingController();
TextEditingController controller2 = TextEditingController();
TextEditingController controller3 = TextEditingController();

class _UpdateProfileState extends State<UpdateProfile> {
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
        globals.userImageUrl = _url;
      });
      print("NEW URL:" + _url);
      _url = fileURL.toString();
      globals.userImageUrl = _url;
    });
  }

  String userName ;
  String employeeID ;
  String phoneNumber ;
  String _url ;

  @override
  Widget build(BuildContext context) {
     userName = globals.username;
  employeeID =  globals.rentalID;
  phoneNumber =  globals.phoneNumber;
   _url = globals.userImageUrl;
    controller.text = globals.username;
    controller2.text = globals.rentalID;
    controller3.text = globals.phoneNumber;
    print("Updateing??");
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
                      userName = text;
                      // print("First text field: $text");
                    },
                    autofocus: true,
                    decoration: InputDecoration(
                      labelText: "Username",
                    ),
                  ),
                  TextField(
                    controller: controller2,
                    onChanged: (text) {
                      employeeID = text;
                      // print("First text field: $text");
                    },
                    decoration: InputDecoration(
                      labelText: "Employee ID",
                    ),
                  ),
                  TextField(
                    controller: controller3,
                    onChanged: (text) {
                      phoneNumber = text;
                      // print("First text field: $text");
                    },
                    decoration: InputDecoration(
                      labelText: "Phone Number",
                    ),
                  ),
                  RaisedButton(
                      onPressed: () {
                         updateDBs(_url);
                          Navigator.pop(context);
                      },
                      child: Text("Update"))
                ]))));
  }

  
Future updateDBs(String urr) async{
   print("uploading URL: " + urr);
    final firestore = Firestore.instance;
    await firestore
        .collection('global_users')
        .document(globals.userLoginID)
        .updateData({
      'Name': userName,
      'PhoneNumber': phoneNumber,
      'RentalID':employeeID,
      'imageURL':urr,
    }).catchError((error) => print(error));
    print("uploading URL: " + urr);
    globals.rentalID = employeeID;
    globals.username = userName;
    globals.phoneNumber = phoneNumber;
    globals.userImageUrl = urr;
}
}
