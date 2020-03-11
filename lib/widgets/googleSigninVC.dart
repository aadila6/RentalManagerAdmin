import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import '../main.dart';
import 'signInScreen.dart';
import 'auth.dart';

//==================This is the Login Screen for the app==================
class ggSignin extends StatefulWidget {
  // BuildContext _context;
 
  @override
  _ggSigninState createState() => new _ggSigninState();
}
  
class _ggSigninState extends State<ggSignin> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: RaisedButton(
            child: new Text(
              "Log In using Google",
              style: TextStyle(fontSize: 19),
            ),
            onPressed: () {
              //LOGIN USING GOOGLE HERE
              AuthService authService;
              print("in signin button!");
              authService.googleSignIn().then((user) {
                if (user == null) {
                  //Login failed
                  showDialog(
                    context: context,
                    builder: (BuildContext context) {
                      // return object of type Dialog
                      return AlertDialog(
                        title: new Text("Failed to log in!"),
                        content: new Text(
                            "Please make sure your Google Account is usable. Also make sure that you have a active internet connection, and try again."),
                        actions: <Widget>[
                          // usually buttons at the bottom of the dialog
                          new FlatButton(
                            child: new Text("Close"),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          ),
                        ],
                      );
                    },
                  );
                } else {
                  //Navigate to the Homescreen
                  // Navigator.push(
                  //   context,
                  //   MaterialPageRoute(builder: (context) => HomeScreen()),
                  // );
                  print("SUCCESS!!!!!!!!!!!!!!!!!!!!!!!");
                }
              });
            },
          ),
        ),
      ),
    );
  }
}
