import 'package:RentalAdmin/views/globals.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/signInScreen.dart';

class SignUpPage extends StatefulWidget {
  String organization;
  SignUpPage({this.organization});
  @override
  SignUpState createState() => SignUpState();
}

class SignUpState extends State<SignUpPage> {
  String email, usernameFirst, usernameLast, password, confirmpw;
  var _organizations = [
    'Select an organization',
  ];
  // var _organizationSelected = widget.organization;

  Future getOrganizations() async {
    QuerySnapshot list =
        await Firestore.instance.collection('organizations').getDocuments();
    list.documents.forEach((doc) => _organizations.add(doc.data['name']));
  }

  @override
  void initState() {
    // getOrganizations().whenComplete(() => setState(() {}));
    super.initState();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Text('Account Sign Up'),
        backgroundColor: Colors.teal,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                    prefixIcon: const Icon(Icons.email, color: Colors.black),
                    contentPadding: const EdgeInsets.symmetric(
                        vertical: 20.0, horizontal: 50),
                  ),
                )),
            SizedBox(
              height: 20,
            ),
            Padding(
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                    prefixIcon: const Icon(Icons.person, color: Colors.black),
                    contentPadding: const EdgeInsets.symmetric(
                        vertical: 20.0, horizontal: 50),
                  ),
                )),
            SizedBox(
              height: 20,
            ),
            Padding(
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                    prefixIcon: const Icon(Icons.person, color: Colors.black),
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
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                    prefixIcon: const Icon(Icons.lock, color: Colors.black),
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
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                    prefixIcon: const Icon(Icons.lock, color: Colors.black),
                    // labelStyle:
                    // new TextStyle(color: Colors.teal.shade900, fontSize: 16.0),
                    contentPadding: const EdgeInsets.symmetric(
                        vertical: 20.0, horizontal: 50),
                  ),
                )),
            SizedBox(
              height: 20,
            ),
            // DropdownButton<String>(
            //   // dropdownColor: Colors.black,
            //   iconSize: 28.0,
            //   style: TextStyle(
            //       color: Colors.blue,
            //       fontWeight: FontWeight.bold,
            //       fontSize: 20.0),
            //   icon: Icon(Icons.home, color: Colors.teal),
            //   items: _organizations.map(
            //     (String organization) {
            //       return DropdownMenuItem<String>(
            //           child: Text(organization), value: organization);
            //     },
            //   ).toList(),
            //   onChanged: (String selected) {
            //     setState(
            //       () {
            //         this._organizationSelected = selected;
            //       },
            //     );
            //   },
            //   value: _organizationSelected,
            // ),
            Text('Click sign up after entering all of above'),
            SizedBox(
                width: MediaQuery.of(context).size.width / 20 * 5,
                child: RaisedButton(
                  textColor: Colors.white,
                  color: Colors.teal.shade900,
                  child: Text('SIGN UP'),
                  onPressed: () async {
                    var e = await signUp(email, password);
                    if (ErrorDetect(e)) {
                      String a = errorDetect(e, pos: 0),
                          b = errorDetect(e, pos: 1);
                      // print(a);
                      // print(b);
                      showDialog(
                          context: context,
                          builder: (context) {
                            return AlertDialog(
                              title: Text(b),
                              actions: <Widget>[
                                new FlatButton(
                                  child: new Text('OK'),
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                ),
                              ],
                            );
                          });

                      // pop_window(a, b, context);
                    } else {
                      print("printing value (uid): " + e);
                      print("ORG insde the Signup: " + organization);
                      uploadData(usernameFirst, usernameLast, email, e
                          );
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => signInScreen()));
                    }
                  },
                  padding: EdgeInsets.all(10.0),
                  disabledColor: Colors.black,
                  disabledTextColor: Colors.black,
                )),
          ],
        ),
      ),
    );
  }

  void uploadData(
      usernameFirst, usernameLast, email, uid) async {
    print("UPLOADING");
    String fullName = usernameFirst + ' ' + usernameLast;
    final databaseReference = Firestore.instance;
    String doc = "AppSignInUser" + email;
    String thiscollectionName = '${this.widget.organization}_users';
    await databaseReference.collection('global_users').document(doc).setData({
      'Name': fullName,
      'Email': email,
      'Admin': false,
      'imageURL':
          "https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b",
      'PhoneNumber': '',
      'organization': this.widget.organization.toString(),
      'LocationManager':'',
      'Sex':'',
    });
  }
}

bool ErrorDetect(String e) {
  if (e.contains('FirebaseError')) {
    return true;
  } else {
    return false;
  }
}

String errorDetect(String e, {int pos = 1}) {
  List<String> strList = e.split(":");
  String _retstr = strList[pos];
  List<String> str = _retstr.split("(");
  return str[0];
}

Future<String> signUp(email, password) async {
  final FirebaseAuth auth = FirebaseAuth.instance;

  try {
    AuthResult authResult = await auth.createUserWithEmailAndPassword(
        email: email, password: password);
    var user = await auth.currentUser();

    user.sendEmailVerification();
    // isSignUp = true;
    user = authResult.user;
    print(user.uid);
    // userID = user.uid;
    return user.uid;
  } catch (e) {
    //errorHands(e);
    print(e);
    // userID = e.toString();
    return e.toString();
  }
}
