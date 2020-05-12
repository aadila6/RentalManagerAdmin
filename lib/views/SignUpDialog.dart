import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:RentalAdmin/views/homeView.dart';
import '../widgets/auth.dart';
import 'package:http/http.dart' as http;
import 'package:RentalAdmin/views/SuperUser/SuperLanding.dart';
import 'package:RentalAdmin/views/SuperUser/SuperuserPanel.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/signInScreen.dart';

class SignUpPage extends StatefulWidget {
  @override
  SignUpState createState() => SignUpState();
}

class SignUpState extends State<SignUpPage> {
  String email, usernameFirst, usernameLast, password, confirmpw;
  var _organizations = [
    'Select an organization',
  ];
  var _organizationSelected = 'Select an organization';

  Future getOrganizations() async {
    QuerySnapshot list =
        await Firestore.instance.collection('organizations').getDocuments();
    list.documents.forEach((doc) => _organizations.add(doc.data['name']));
  }

  @override
  void initState() {
    getOrganizations().whenComplete(() => setState(() {}));
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
            DropdownButton<String>(
              // dropdownColor: Colors.black,
              iconSize: 28.0,
              style: TextStyle(
                  color: Colors.blue,
                  fontWeight: FontWeight.bold,
                  fontSize: 20.0),
              icon: Icon(Icons.home, color: Colors.teal),
              items: _organizations.map(
                (String organization) {
                  return DropdownMenuItem<String>(
                      child: Text(organization), value: organization);
                },
              ).toList(),
              onChanged: (String selected) {
                setState(
                  () {
                    this._organizationSelected = selected;
                  },
                );
              },
              value: _organizationSelected,
            ),
            Text('Click sign up after entering all of above'),
            SizedBox(
                width: MediaQuery.of(context).size.width / 20 * 5,
                child: RaisedButton(
                  textColor: Colors.white,
                  color: Colors.teal.shade900,
                  child: Text('SIGN UP'),
                  onPressed: () async {
                    var e = await signUp(email, password).then((uid){
                      print("printing value (uid): " + uid);
                      uploadData(usernameFirst, usernameLast, email,
                          uid, _organizationSelected);
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => signInScreen()));
                    });
                    if (ErrorDetect(e)) {
                      print("An Error OCCURED!!!");
                    } else {
                      // print("Inside the signUp and waiting to be uploading image");
                      // print("UID : "+ errorDetect(e));
                      // print("Name : "+ usernameFirst + ' '+ usernameLast);
                      // print("Email : "+ email);
                      // print("Organization : "+ _organizationSelected);
                      // uploadData(usernameFirst, usernameLast, email,
                      //     errorDetect(e), _organizationSelected);
                      print("Inside the signUp and waiting to be uploading image");
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
      usernameFirst, usernameLast, email, uid, String organization) async {
    print("UPLOADING");
    String fullName = usernameFirst + ' ' + usernameLast;
    final databaseReference = Firestore.instance;
    String doc = "AppSignInUser" + email;
    String thiscollectionName = '${organization}_users';
    await databaseReference.collection('global_users').document(uid).setData({
      'Name': fullName,
      'Email': email,
      'Admin': true,
      'imageURL':"https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b",
      'PhoneNumber': '',
      'RentalID': '',
      'organization': organization,
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
