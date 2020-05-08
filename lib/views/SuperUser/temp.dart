import 'package:flutter/material.dart';
import 'dart:io';
import 'package:image_picker_web/image_picker_web.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;

class SignUpDlg extends StatefulWidget {
  @override
  _SignUpDlgState createState() => _SignUpDlgState();
}

class _SignUpDlgState extends State<SignUpDlg> {
  String email, usernameFirst, usernameLast, password, confirmpw;
  @override
  Widget build(BuildContext context) {
    return Dialog(
        child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: 500, maxHeight: 500),
            child: Container(
                padding: EdgeInsets.all(30),
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                      child: TextField(
                        onChanged: (text) {
                          email = text;
                          //print("First text field: $text");
                        },
                        cursorColor: Colors.teal.shade900,
                        scrollPadding: const EdgeInsets.symmetric(
                            vertical: 20.0, horizontal: 50),
                        decoration: InputDecoration(
                          border: new OutlineInputBorder(
                            borderRadius: const BorderRadius.all(
                              const Radius.circular(8.0),
                            ),
                            borderSide: new BorderSide(
                              color: Colors.transparent,
                              width: 1.0,
                            ),
                          ),
                          labelText: 'Email',
                          prefixIcon:
                              const Icon(Icons.email, color: Colors.black),
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 20.0, horizontal: 50),
                        ),
                      )),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                      child: TextField(
                        onChanged: (text) {
                          usernameFirst = text;
                        },
                        cursorColor: Colors.teal.shade900,
                        decoration: InputDecoration(
                          border: new OutlineInputBorder(
                            borderRadius: const BorderRadius.all(
                              const Radius.circular(8.0),
                            ),
                            borderSide: new BorderSide(
                              color: Colors.transparent,
                              width: 1.0,
                            ),
                          ),
                          labelText: 'First Name',
                          prefixIcon:
                              const Icon(Icons.person, color: Colors.black),
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 20.0, horizontal: 50),
                        ),
                      )),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                      child: TextField(
                        onChanged: (text) {
                          usernameLast = text;
                        },
                        // obscureText: true,
                        cursorColor: Colors.teal.shade900,
                        decoration: InputDecoration(
                          border: new OutlineInputBorder(
                            borderRadius: const BorderRadius.all(
                              const Radius.circular(8.0),
                            ),
                            borderSide: new BorderSide(
                              color: Colors.transparent,
                              width: 1.0,
                            ),
                          ),
                          labelText: 'Lastname',
                          prefixIcon:
                              const Icon(Icons.person, color: Colors.black),
                          // labelStyle:
                          // new TextStyle(color: Colors.teal.shade900, fontSize: 16.0),
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 20.0, horizontal: 50),
                        ),
                      )),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                      child: TextField(
                        onChanged: (text) {
                          password = text;
                          //print("First password field: $text");
                        },
                        obscureText: true,
                        cursorColor: Colors.teal.shade900,
                        scrollPadding: const EdgeInsets.symmetric(
                            vertical: 20.0, horizontal: 50),
                        decoration: InputDecoration(
                          border: new OutlineInputBorder(
                            borderRadius: const BorderRadius.all(
                              const Radius.circular(8.0),
                            ),
                            borderSide: new BorderSide(
                              color: Colors.transparent,
                              width: 1.0,
                            ),
                          ),
                          labelText: 'Password',
                          prefixIcon:
                              const Icon(Icons.lock, color: Colors.black),
                          // labelStyle:
                          // new TextStyle(color: Colors.teal.shade900, fontSize: 16.0),
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 20.0, horizontal: 50),
                        ),
                      )),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                      child: TextField(
                        onChanged: (text) {
                          confirmpw = text;
                          //print("Second password field: $text");
                        },
                        obscureText: true,
                        cursorColor: Colors.teal.shade900,
                        decoration: InputDecoration(
                          // contentPadding: new EdgeInsets.fromLTRB(20.0, 10.0, 100.0, 10.0),
                          border: new OutlineInputBorder(
                            borderRadius: const BorderRadius.all(
                              const Radius.circular(8.0),
                            ),
                            borderSide: new BorderSide(
                              color: Colors.transparent,
                              width: 1.0,
                            ),
                          ),
                          labelText: 'Confirm Password',
                          prefixIcon:
                              const Icon(Icons.lock, color: Colors.black),
                          // labelStyle:
                          // new TextStyle(color: Colors.teal.shade900, fontSize: 16.0),
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 20.0, horizontal: 50),
                        ),
                      )),
                  SizedBox(
                    height: 20,
                  ),
                  Text('Click sign up after entering all of above'),
                  SizedBox(
                      width: MediaQuery.of(context).size.width / 20 * 5,
                      child: RaisedButton(
                        textColor: Colors.white,
                        color: Colors.teal.shade900,
                        child: Text('SIGN UP'),
                        onPressed: () async {
                          
                        },
                        padding: EdgeInsets.all(10.0),
                        disabledColor: Colors.black,
                        disabledTextColor: Colors.black,
                      )),
                ]))));
  }

  // testingUploadItem(String itemName, String itemCount) async {
  //   final databaseReference = Firestore.instance;
  //   String url;
  //   if(_uploadedFileURL == null){
  //     print("DEBUG:  URL is Empty bitch");
  //     url = defaultURL;
  //   }else{
  //     url = _uploadedFileURL;
  //   }
  //   await databaseReference.collection("items").document().setData({
  //     'Category': "sport",
  //     'imageURL': url,
  //     'isAvaliable': "true",
  //     'name': itemName,
  //     'amount': itemCount,
  //   }).then((value){
  //     Navigator.pop(context);
  //   });
  //   // return ;
  //   print("Finish uploading");
  // }
}
