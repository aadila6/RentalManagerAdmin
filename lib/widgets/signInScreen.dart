import 'package:flutter/material.dart';
import 'package:google_sign_in/google_sign_in.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:RentalAdmin/views/homeView.dart';
import 'auth.dart';
import 'package:http/http.dart' as http;

class signInScreen extends StatefulWidget {
  @override
  _signInScreenState createState() => _signInScreenState();
}

class _signInScreenState extends State<signInScreen> {
  String username, password, resetPassword;

  bool _Accountvalidate = false;
  String _contactText;
  GoogleSignInAccount _currentUser;
  GoogleSignIn _googleSignIn = GoogleSignIn(
    scopes: [
      'email',
      'https://www.googleapis.com/auth/contacts.readonly',
    ],
  );

  Future<FirebaseUser> _handleSignIn() async {
    try {
      await _googleSignIn.signIn();
    } catch (error) {
      print(error);
    }
  }

  // String googleLogInName = '';

  // final FirebaseAuth _auth = FirebaseAuth.instance;
  // final GoogleSignIn googleSignIn = new GoogleSignIn();
  // FirebaseUser _user;

  // Future<FirebaseUser> _myGoogleSignIn() async {
  //   GoogleSignInAccount googleUser = await _googleSignIn.signIn();
  //   GoogleSignInAuthentication googleAuth = await googleUser.authentication;
  //   final AuthCredential credential = GoogleAuthProvider.getCredential(
  //     accessToken: googleAuth.accessToken,
  //     idToken: googleAuth.idToken,
  //   );
  //   final FirebaseUser user = (await _auth.signInWithCredential(credential)).user;
  //   print("signed in " + user.displayName);
  //   print("signed in " + user.email);

  //   return user;
  // }

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
                    username = text;
                    print("First text field: $text");
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
              Padding(
                padding: EdgeInsets.symmetric(vertical: 2.0, horizontal: 450),
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
                        //  Navigator.push(
                        //       context,
                        //       MaterialPageRoute(
                        //           builder: (context) => HomeView()));
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
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => HomeView()));
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
                          Image(
                            image: NetworkImage(
                                'https://pluspng.com/img-png/google-logo-png-open-2000.png'),
                            height: 30,
                          ),
                          SizedBox(width: 20.0),
                          Center(
                            child: Text(
                              "Sign In with Google",
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
                        // _handleSignIn()
                        //     .then((FirebaseUser user) => print(user))
                        //     .catchError((e) => print(e));
                        // try{
                        //   FirebaseUser googleuser = await _myGoogleSignIn();
                        //   if(googleuser != null){
                        //   //  globals.username = googleuser.displayName;
                        //   //  globals.email = googleuser.email;
                        //   //  globals.uid = 'GoogleSignInUser' + globals.email;
                        //   //  prLOGIN.update(
                        //   //    message: 'Successfully Login...',
                        //   //    progressWidget: CircularProgressIndicator(),
                        //   //    progressTextStyle: TextStyle(
                        //   //        color: Colors.black, fontSize: 13.0, fontWeight: FontWeight.w400),
                        //   //    messageTextStyle: TextStyle(
                        //   //        color: Colors.black, fontSize: 19.0, fontWeight: FontWeight.w600),
                        //   //  );
                        //   //  await prLOGIN.show();
                        //   //  prLOGIN.hide();
                        //   //  Navigator.of(context).pushReplacementNamed('/MainViewScreen');
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => HomeView()));
                        //   }
                        // }catch(e){
                        //   print(e);
                        // }
                      },
                      padding: EdgeInsets.all(7.0),
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
                              builder: (context) => SignUpPage()));
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
              Row(
                children: <Widget>[],
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
                    // controller: _username,
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
                      // labelStyle:
                      // new TextStyle(color: Colors.teal.shade900, fontSize: 16.0),
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
                                // backgroundColor:  Colors.teal[50],
                                color: Colors.white,
                                fontFamily: 'Montserrat',
                              ),
                            ),
                          ),
                        ],
                      ),
                      onPressed: () async {},
                      padding: EdgeInsets.all(7.0),
                      //color: Colors.teal.shade900,
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

class SignUpPage extends StatefulWidget {
  @override
  _State createState() => _State();
}

class _State extends State<SignUpPage> {
  @override
  String email, usernameFirst, usernameLast, password, confirmpw;

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
                    usernameFirst = text;
                    //print("username: $text");
                  },
                  // obscureText: true,
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
                    labelText: 'First Name',
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
                    usernameLast = text;
                    //print("username: $text");
                  },
                  // obscureText: true,
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
            Text('Click sign up after entering all of above'),
            SizedBox(
                width: MediaQuery.of(context).size.width / 20 * 5,
                child: RaisedButton(
                  textColor: Colors.white,
                  color: Colors.teal.shade900,
                  child: Text('SIGN UP'),
                  onPressed: () async {},
                  padding: EdgeInsets.all(10.0),
                  disabledColor: Colors.black,
                  disabledTextColor: Colors.black,
                )),
          ],
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
