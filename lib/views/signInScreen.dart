import 'package:RentalAdmin/views/homeView.dart';
import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:RentalAdmin/views/SignUpDialog.dart';
import '../widgets/auth.dart';
import 'package:RentalAdmin/views/SuperUser/SuperuserPanel.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:RentalAdmin/views/SuperUser/organizationSelection.dart';
import 'package:progress_dialog/progress_dialog.dart';
class signInScreen extends StatefulWidget {
  @override
  _signInScreenState createState() => _signInScreenState();
  
}


class _signInScreenState extends State<signInScreen> {
  
  String username, password, resetPassword;

  bool _Accountvalidate = false;
  String _contactText;
  // GoogleSignInAccount _currentUser;
  // GoogleSignIn _googleSignIn = GoogleSignIn(
  //   scopes: [
  //     'email',
  //     'https://www.googleapis.com/auth/contacts.readonly',
  //   ],
  // );

  // Future<void> _handleSignIn() async {
  //   try {
  //     await _googleSignIn.signIn();
  //   } catch (error) {
  //     print(error);
  //   }
  // }
  @override
  void initState() {
    // getOrganizations().whenComplete(() => setState(() {}));
    super.initState();
    getCollections();
  }
  
  // Future<void> _handleSignOut() => _googleSignIn.disconnect();
  Future<void> getData() async {
    Firestore.instance
        .collection('global_users')
        .document(globals.userLoginID.toLowerCase())
        .get()
        .then((DocumentSnapshot ds) {
      // use ds as a snapshot
      var doc = ds.data;
      print("ADMIN STATUS: " + doc["Admin"]);
      globals.admin = doc["Admin"];
      globals.uid = doc["uid"];
      globals.username = doc["Name"];
      globals.email = doc["Email"];
      globals.rentalID = doc["RentalID"];
      globals.userImageUrl = doc["imageURL"];
      globals.phoneNumber = doc["PhoneNumber"];

      if (globals.userImageUrl == null) {
        globals.userImageUrl =
            "https://images.unsplash.com/photo-1581660545544-83b8812f9516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
      }
      globals.organization = doc['organization'];
      globals.reservation_global = globals.organization + '_reservations';
      globals.items_global = globals.organization + '_items';
      globals.locations = globals.organization + '_locations';
    });
    // return ds.data;
    return Future.delayed(Duration(seconds: 3), () => 'Large Latte');
  }

  Future getCollections() async {
    globals.existingLocations.clear();
    QuerySnapshot list1 = await Firestore.instance.collection(globals.locations).getDocuments();
    list1.documents.forEach((doc) {
      globals.existingLocations.add(doc.data['name']);
    });

    globals.existingOrganizations.clear();
    QuerySnapshot list =
        await Firestore.instance.collection('organizations').getDocuments();
    print("ADDING LOCATIONS!!!");
    list.documents.forEach((doc) {
      globals.existingOrganizations.add(doc.data['name']);
       print("loctaion: " + doc.data['name']);
    });
    print("INITING ");
    print(globals.existingOrganizations.toString());
  }

  @override
  Widget build(BuildContext context) {
    var authHandler = new Auth();
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.white,
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              SizedBox(height: 10, width: 150),
              Text(
                'Rental Manager',
                style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 20,
                  color: Colors.teal.shade900,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 10, width: 150),
              Text(
                'Welcome',
                style: TextStyle(
                  fontFamily: 'Source Sans Pro',
                  color: Colors.teal.shade900,
                  fontSize: 20,
                  letterSpacing: 2.5,
                ),
              ),
              SizedBox(height: 10, width: 150),
              ConstrainedBox(
                constraints: BoxConstraints(
                  minWidth: 200,
                  maxWidth: 500
                ),
                child: TextField(
                  onChanged: (text) {
                    username = text;
                    // print("First text field: $text");
                  },
                  // controller: _username,
                  cursorColor: Colors.teal.shade900,
                  scrollPadding: const EdgeInsets.symmetric(
                      vertical: 10.0, horizontal: 100),
                  decoration: InputDecoration(
                    contentPadding:
                        new EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0),
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
                    prefixIcon: const Icon(Icons.person, color: Colors.black),
                  ),
                ),
              ),
              SizedBox(height: 20, width: 150),
              ConstrainedBox(
                constraints: BoxConstraints(
                  minWidth: 200,
                  maxWidth: 500
                ),
                child: TextField(
                  onChanged: (text) {
                    password = text;
                  },
                  obscureText: true,
                  cursorColor: Colors.teal.shade900,
                  decoration: InputDecoration(
                    contentPadding:
                        new EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0),
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
                  ),
                ),
              ),
              SizedBox(
                height: 15,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  ConstrainedBox(
                    constraints: BoxConstraints(
                      minWidth: 150,
                      maxWidth: 300
                    ),
                    child: RaisedButton(
                      highlightElevation: 0.0,
                      splashColor: Colors.greenAccent,
                      highlightColor: Colors.green,
                      elevation: 0.0,
                      color: Colors.green,
                      shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(30.0)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Center(
                            child: Text(
                              "LOGIN",
                              style: TextStyle(
                                fontSize: 15,
                                // backgroundColor:  Colors.teal[50],
                                color: Colors.white,
                                fontFamily: 'Montserrat',
                              ),
                            ),
                          ),
                        ],
                      ),
                      onPressed: () async {
                        var e = await authHandler.signIn(username, password);
                        print("on Press Error: " + e);
                        if (e == "false") {
                          showDialog(
                              context: context,
                              builder: (context) {
                                return AlertDialog(
                                  title:
                                      Text('Your Email needs to be verified.'),
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
                        } else if (ErrorDetect(e)) {
                          showDialog(
                              context: context,
                              builder: (context) {
                                return AlertDialog(
                                  title: Text(errorDetect(e, pos: 1)),
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
                        } else {
                          //Direct To SuperUserView directly
                          // getCollections();
                          print("UID: " + e);
                          globals.userLoginID = "AppSignInUser" + username.toLowerCase();
                          print("name:" + globals.userLoginID);
                          print("------------------1--------------------");
                          await Firestore.instance
                              .collection('global_users')
                              .document(globals.userLoginID)
                              .get()
                              .then((DocumentSnapshot ds) async {
                            var doc = ds.data;
                            print(doc['Admin']);
                            print('------------------------');
                            print(doc["Admin"]);
                            print(doc["uid"]);
                            print(doc["Name"]);
                            print("email STATUS: " + doc["Email"]);
                            print("url STATUS: " + doc["imageURL"]);
                            print("phone STATUS: " + doc["PhoneNumber"]);

                            globals.admin = doc["Admin"];
                            // globals.uid = doc["uid"];
                            globals.username = doc["Name"];
                            globals.email = doc["Email"];
                            // globals.rentalID = doc["RentalID"];
                            globals.userImageUrl = doc["imageURL"];
                            globals.phoneNumber = doc["PhoneNumber"];
                            if (globals.userImageUrl == null) {
                              globals.userImageUrl =
                                  "https://images.unsplash.com/photo-1581660545544-83b8812f9516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
                            }
                            globals.organization = doc['organization'];
                            globals.reservation_global =
                                globals.organization + '_reservations';
                            globals.items_global =
                                globals.organization + '_items';
                            globals.locations =
                                globals.organization + '_locations';
                            globals.locationManager = doc['LocationManager'];
                            print("------------------END ----------------");
                            // Firestore.instance.collection(globals.locations).getDocuments().then((value){
                            //   globals.existingLocations = value.documents.map<String>((e){
                            //     return e.data['name'];
                            //   }).toList();
                            // });
print(globals.locations);
                            print("BEFORE LOG IN");
                            print(globals.existingOrganizations);
                            if (!globals.existingOrganizations
                                            .contains(doc['organization']) &&
                                        doc['Admin'] == false) {
                                      await Firestore.instance
                                          .collection('global_users')
                                          .document(globals.userLoginID)
                                          .updateData({'Admin': true});
                                      await Firestore.instance
                                          .collection('organizations')
                                          .document()
                                          .setData(
                                              {'name': doc['organization']});
                                      globals.admin = true;
                                    }
                          });
                          // await getData().then((value) {
                          if (globals.admin) {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => SuperuserPanel()));
                          } else {
                            if(globals.locationManager!= ""){
                               Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => SuperuserPanel()));
                            }
                            else{
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => HomeView()));
                            }
                          }
                        }
                      },
                      padding: EdgeInsets.all(10.0),
                      //color: Colors.teal.shade900,
                      disabledColor: Colors.black,
                      disabledTextColor: Colors.black,
                    ),
                  ),
                ],
              ),
              SizedBox(
                height: 15,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'New to Rental Manager?',
                    style: TextStyle(fontFamily: 'Montserrat'),
                  ),
                  SizedBox(width: 5.0),
                  InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) =>
                              //SignUpPage(),
                              OrganizationSelection(),
                        ),
                      );
                    },
                    child: Text(
                      'Register',
                      style: TextStyle(
                          color: Colors.green,
                          fontFamily: 'Montserrat',
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.underline),
                    ),
                  )
                ],
              ),
              SizedBox(
                height: 15,
              ),
              Center(
                child: Container(
                  //alignment: Alignment(1.0, 0.0),
                  //padding: EdgeInsets.only(top: 15.0, left: 20.0),
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ResetPassword()));
                    },
                    child: Text(
                      'Forgot Password',
                      style: TextStyle(
                          color: Colors.green,
                          fontWeight: FontWeight.bold,
                          fontFamily: 'Montserrat',
                          decoration: TextDecoration.underline),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

mixin UserCredential {}

class ResetPassword extends StatefulWidget {
  @override
  _ResetPasswordState createState() => _ResetPasswordState();
}

class _ResetPasswordState extends State<ResetPassword> {
  @override
  String email;
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Reset PassWord'),
          backgroundColor: Colors.teal,
          leading: new IconButton(
            icon: new Icon(Icons.arrow_back_ios, color: Colors.white),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ),
        backgroundColor: Colors.white,
        body: SafeArea(
          child: Column(
            children: <Widget>[
              SizedBox(height: 10, width: 150),
              Text(
                'Rental Manager',
                style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 20,
                  color: Colors.teal.shade900,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 10, width: 150),
              Text(
                'Enter your email address below',
                style: TextStyle(
                  fontFamily: 'Source Sans Pro',
                  color: Colors.teal.shade900,
                  fontSize: 20,
                ),
              ),
              SizedBox(
                height: 20,
                width: 150,
                child: Divider(
                  color: Colors.teal.shade900,
                ),
              ),
              SizedBox(height: 10, width: 150),
              Padding(
                  padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
                  child: TextField(
                    onChanged: (text) {
                      email = text;
                    },
                    cursorColor: Colors.teal.shade900,
                    scrollPadding: const EdgeInsets.symmetric(
                        vertical: 10.0, horizontal: 30),
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
                      labelText: 'Enter your Email Address',
                      prefixIcon: const Icon(Icons.email, color: Colors.black),
                      contentPadding: const EdgeInsets.symmetric(
                          vertical: 10.0, horizontal: 30),
                    ),
                  )),
              SizedBox(height: 20, width: 150),
              SizedBox(
                height: 5,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(
                    width: MediaQuery.of(context).size.width / 20 * 5,
                    child: RaisedButton(
                      highlightElevation: 0.0,
                      splashColor: Colors.greenAccent,
                      highlightColor: Colors.green,
                      elevation: 0.0,
                      color: Colors.green,
                      shape: RoundedRectangleBorder(
                          borderRadius: new BorderRadius.circular(30.0)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Center(
                            child: Text(
                              "Send Verification Email",
                              style: TextStyle(
                                fontSize: 15,
                                color: Colors.white,
                                fontFamily: 'Montserrat',
                              ),
                            ),
                          ),
                        ],
                      ),
                      onPressed: () async {
                        // check if the email exsit? 
                        final QuerySnapshot result = await Firestore.instance
                            .collection('global_users')
                            .getDocuments();
                        final List<DocumentSnapshot> documents =
                            result.documents;
                        List<String> userNameList = [];
                        documents.forEach(
                            (data) => userNameList.add(data['Email']));
                        bool found = false;
                        for (var i = 0; i < userNameList.length; i++) {
                          if (email.toLowerCase() == userNameList[i]) {
                            found = true;
                            print("found");
                            break;
                          }
                        }
                        if(found){
                          final FirebaseAuth auth = FirebaseAuth.instance;
                           ProgressDialog prForgetPassword;
                          prForgetPassword = new ProgressDialog(context,
                              type: ProgressDialogType.Normal);
                          prForgetPassword.update(
                            message: 'Sending Email...',
                            progressWidget: CircularProgressIndicator(),
                            progressTextStyle: TextStyle(
                                color: Colors.black,
                                fontSize: 13.0,
                                fontWeight: FontWeight.w400),
                            messageTextStyle: TextStyle(
                                color: Colors.black,
                                fontSize: 19.0,
                                fontWeight: FontWeight.w600),
                          );
                          await prForgetPassword.show();
                          Future.delayed(Duration(seconds: 2)).then((onValue) {
                            prForgetPassword.update(
                              message: "Email Sent",
                              progressWidget: Container(
                                  padding: EdgeInsets.all(8.0),
                                  child: CircularProgressIndicator()),
                              progressTextStyle: TextStyle(
                                  color: Colors.black,
                                  fontSize: 13.0,
                                  fontWeight: FontWeight.w400),
                              messageTextStyle: TextStyle(
                                  color: Colors.black,
                                  fontSize: 19.0,
                                  fontWeight: FontWeight.w600),
                            );
                            Future.delayed(Duration(seconds: 2)).then((value) async{
                              // authHandler.resetPassword(email);
                              await auth.sendPasswordResetEmail(email: email);
                              prForgetPassword.hide();
                            });
                          });
                        }else{
                           showDialog(
                              context: context,
                              builder: (context) {
                                return AlertDialog(
                                  title:
                                      Text('The email that you provided doesn not seem to be a registered account'),
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
                        

                      },
                      padding: EdgeInsets.all(7.0),
                      disabledColor: Colors.black,
                      disabledTextColor: Colors.black,
                    ),
                  ),
                ],
              ),
              SizedBox(
                height: 5,
              ),
            ],
          ),
        ),
      ),
    );
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
