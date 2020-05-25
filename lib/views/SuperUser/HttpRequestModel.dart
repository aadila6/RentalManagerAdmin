import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:cloud_firestore/cloud_firestore.dart';

class User {
  bool admin;
  String loc;
  bool user;
  Map<String,dynamic> permissions = Map();
  String email;

  User({this.admin,this.loc,this.user, this.email}){
    permissions['Admin'] = this.admin;
    permissions['User'] = this.user;
    permissions['LocationManager'] = this.loc;
  }

  Map getPermissions() {
    Map<String,dynamic> r = {
      'Admin': this.permissions['Admin'],
      'LocationManager': this.permissions['LocationManager'],
      'User': this.permissions['User']
    };
    return r;
  }
}

// void modifyPermission(String email, String p, dynamic op) {
//   print("Firebase request2");
//   String path = "AppSignInUser"+ globals.email;
//   var col = Firestore.instance.collection("global_users");
//   col.document(path).setData({p:op},merge: true);

// }

void modifyAllPermissions(User u) {
  //print(u.getPermissions());
  print("Firebase request3");
  String path = "AppSignInUser"+ u.email;
  var col = Firestore.instance.collection("global_users");
  col.document(path).setData(u.getPermissions(),merge: true);
}