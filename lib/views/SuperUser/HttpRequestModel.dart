import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:cloud_firestore/cloud_firestore.dart';

class User {
  bool admin;
  String email;

  User({this.admin, this.email});

  // factory User.fromJson(Map<String, dynamic> json) {
  //   return User(
  //     userId: json['userId'],
  //     email: json['id'],
  //     roles: json['roles'],
  //   );
  // }
}

void modifyAdmin(String email, bool op) {
  print("Firebase request2");
  String path = "AppSignInUser"+ globals.email;
  var col = Firestore.instance.collection("global_users");
  col.document(path).setData({'Admin':op});

}

// Future<List<User>> fetchUser() async {
//   print("FETCHING USERS");
//   var response = await http.get('http://127.0.0.1:8000/admin/getalluser');
//   print("Fetched");
//   List l = json.decode(response.body)['result'] as List;
//   print(l.runtimeType);
//   //l.map((e) => )
//   //print(list);
//   var res = l
//       .map((e) => User(
//           email: e['email'], userId: e['uid'], roles: List.from(e['roles'])))
//       .toList();
//   print(res.runtimeType);
//   return res;
// }


// void modifyRoleFake(String email, String role, bool op) {
//   for (var i in fake_result['result']) {
//     if (i['email'] == email) {
//       if (op) {
//         var tl = List.from(i['roles']);
//         tl.add(role);
//         i['roles'] = tl;
//       } else {
//         var tl = List.from(i['roles']);
//         tl.remove(role);
//         i['roles'] = tl;
//       }
//     }
//   }
// }
