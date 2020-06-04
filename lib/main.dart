import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SignInUp/signInScreen.dart';
import 'views/SignInUp/signInScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: SuperuserPanel(),
      home: signInScreen(),
    );
  }
}
