import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:cloud_firestore/cloud_firestore.dart';

class User {
  bool admin;
  bool frontdesk;
  bool user;
  Map<String,bool> permissions = Map();
  String email;

  User({this.admin,this.frontdesk,this.user, this.email}){
    permissions['Admin'] = this.admin;
    permissions['Frontdesk'] = this.frontdesk;
    permissions['User'] = this.user;
  }
}

void modifyPermission(String email, String p, bool op) {
  print("Firebase request2");
  String path = "AppSignInUser"+ globals.email;
  var col = Firestore.instance.collection("global_users");
  col.document(path).setData({p:op},merge: true);

}
