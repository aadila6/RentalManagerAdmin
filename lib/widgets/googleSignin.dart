
// import 'package:RentalAdmin/views/homeView.dart';
// import 'package:flutter/material.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'auth.dart';
// class signInScreen extends StatefulWidget {
//   @override
//   _State createState() => _State();
// }
// AuthService authService;
// class _State extends State<signInScreen> {
//   Future<void> loadUserData() async {
//     //Get the data from firestore
//     authService = new AuthService();
//     await authService.getData();
//     //Not setState, to reflect the changes of Map to the widget tree
//     setState(() {});
//   }
//   @override
//   Widget build(BuildContext context) {
//     loadUserData();
//     return MaterialApp(
//       home: Scaffold(
//         body: Center(
//           child: RaisedButton(
//             child: new Text(
//               "Log In using Google",
//               style: TextStyle(fontSize: 19),
//             ),
//             onPressed: () {
//               //LOGIN USING GOOGLE HERE
//               authService.googleSignIn().then((user) {
//                 if (user == null) {
//                   //Login failed
//                   showDialog(
//                     context: context,
//                     builder: (BuildContext context) {
//                       // return object of type Dialog
//                       return AlertDialog(
//                         title: new Text("Failed to log in!"),
//                         content: new Text(
//                             "Please make sure your Google Account is usable. Also make sure that you have a active internet connection, and try again."),
//                         actions: <Widget>[
//                           // usually buttons at the bottom of the dialog
//                           new FlatButton(
//                             child: new Text("Close"),
//                             onPressed: () {
//                               Navigator.of(context).pop();
//                             },
//                           ),
//                         ],
//                       );
//                     },
//                   );
//                 } else {
//                   print(user.toString());
//                   //Navigate to the Homescreen
//                   Navigator.push(
//                     context,
//                     MaterialPageRoute(builder: (context) => HomeView()),
//                     // MaterialPageRoute(builder: (context) => ReservationListPage()),
//                   );
//                 }
//               });
//             },
//           ),
//         ),
//       ),
//     );
//   }
// }

