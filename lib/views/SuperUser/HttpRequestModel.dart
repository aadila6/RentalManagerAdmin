import 'dart:convert';

import 'package:http/http.dart' as http;

class User {
  final String userId;
  final String email;
  final List<String> roles;

  User({this.userId, this.email, this.roles});

  // factory User.fromJson(Map<String, dynamic> json) {
  //   return User(
  //     userId: json['userId'],
  //     email: json['id'],
  //     roles: json['roles'],
  //   );
  // }
}

Future<List<User>> fetchUser() async {
  print("FETCHING USERS");
  var response = await http.get('http://127.0.0.1:8000/admin/getalluser');
  print("Fetched");
  List l = json.decode(response.body)['result'] as List;
  print(l.runtimeType);
  //l.map((e) => )
  //print(list);
  var res = l.map((e) => User(email: e['email'], userId: e['uid'], roles: List.from(e['roles']))).toList();
  print(res.runtimeType);
  return res;
}
var fake_result = {
    "result": [
        {
            "uid": "0N5OeQsd0qYQyrxJ3UM2qkdIKb43",
            "email": "lala@gmail.com",
            "roles": []
        },
        {
            "uid": "234K6LDd6weilMEa2W4U7sfF1b63",
            "email": "heelo@gmail.com",
            "roles": []
        },
        {
            "uid": "2GCtcxVvXhbtQRcJShLaxM0DsIY2",
            "email": "aadila@ucdavis.edu",
            "roles": []
        },
        {
            "uid": "32iDHLNY4HN2A8dH2sHTniDxDOg2",
            "email": "testing@number100.com",
            "roles": []
        },
        {
            "uid": "3UImmvfoSBP21dmETE8HsqtwBmj1",
            "email": "w1708465@apps.losrios.edu",
            "roles": []
        },
        {
            "uid": "3Wt0n0epsqSWoqRR9K8fm5mI5bJ3",
            "email": "testing@number14.com",
            "roles": []
        },
        {
            "uid": "8oQJwO0OIhSPqwR38zaFAWz9e9a2",
            "email": "jagao@ucdavis.edu",
            "roles": []
        },
        {
            "uid": "9Egd92Fjm3bMcq0hvjXgdyfb2gj1",
            "email": "testing@number11.com",
            "roles": []
        },
        {
            "uid": "9zIWSP56vIgGUbtEhOZFhpm1J3u2",
            "email": "testing@number12.com",
            "roles": []
        },
        {
            "uid": "AXZ7VF04QPQBSa8Vt2M4I1uFNlY2",
            "email": "testing@number19.com",
            "roles": []
        },
        {
            "uid": "CcoiSpEZiTOnWv7CVf6bbQJEnA92",
            "email": "jagaoabc@gmail.com",
            "roles": []
        },
        {
            "uid": "CsytgY90ZFetbL1QK99XcWYsMD52",
            "email": "alle95liu@fmail.com",
            "roles": []
        },
        {
            "uid": "D3NnZvS2umPNY3GaqownDSfPVSR2",
            "email": "alle95liu@gmail.com",
            "roles": []
        },
        {
            "uid": "FC9u1Gqzj2bZQ25sC4ursI8x64s1",
            "email": "adila@ucdavis.edu",
            "roles": []
        },
        {
            "uid": "FtbLA2uSQvNY0oWGWJ4b08v9oEG2",
            "email": "testing@number9.com",
            "roles": []
        },
        {
            "uid": "GUUkK263mHMYTHXQArmP9v4a1pg2",
            "email": "testing@number1.com",
            "roles": []
        },
        {
            "uid": "JnSx2t2eyjVdhnlb5D94QAxqC5u2",
            "email": "testfrontdesk@mail.com",
            "roles": [
                "role"
            ]
        },
        {
            "uid": "Nt6lXRrKftQeajTBMEEaXRiSiWu1",
            "email": "testing@number90.com",
            "roles": []
        },
        {
            "uid": "Ob4vV6Teopd5EWJ2sPl8CMaN1WQ2",
            "email": "testing@number15.com",
            "roles": []
        },
        {
            "uid": "R5omIZYCd6dpcMW21zgHO0304953",
            "email": "jagaoabc2@gmail.com",
            "roles": []
        },
        {
            "uid": "RcFIgoKzMchWUA8WAlJinnHXf4w2",
            "email": "testing@number13.com",
            "roles": []
        },
        {
            "uid": "T0gQ1lNNLScWZoJBlUNXroyX6TI3",
            "email": "aleliu@ucdavis.edu",
            "roles": []
        },
        {
            "uid": "Ur4VehUfv0XYX5QnOaodyZWPZkw2",
            "email": "testing@number3.com",
            "roles": []
        },
        {
            "uid": "VW99I6t396R1R155QCOBPSaXm393",
            "email": "jagaoabc1@gmail.com",
            "roles": []
        },
        {
            "uid": "Wpnbbc3J7QQPqHJtrtOCIzQfQb13",
            "email": "heeloo@gmail.com",
            "roles": []
        },
        {
            "uid": "XrK5j6OjguMmCOoMxgURdfwHgR43",
            "email": "ladydilaa@gmail.com",
            "roles": []
        },
        {
            "uid": "Yf28ga5AJeZJiYEZ9VvpuzvuCOh2",
            "email": "testing@number1000.com",
            "roles": []
        },
        {
            "uid": "dRGRINoF1LV3IDgcuqAwuzvglTA3",
            "email": "testing@number5.com",
            "roles": []
        },
        {
            "uid": "edbaiweQDTQaaa8m2bc4woXTZiA2",
            "email": "testing@number10.com",
            "roles": []
        },
        {
            "uid": "lJvW5WDvNNbYwIO0UcyVaxb69Mw2",
            "email": "pkazhang@ucdavis.edu",
            "roles": []
        },
        {
            "uid": "r9eIU1XX42bgzEuDRERAw1TW6NG2",
            "email": "testing@number21.com",
            "roles": []
        },
        {
            "uid": "soTiza4m2MYbDCAbyfRbNgxQowH3",
            "email": "testemail@test.com",
            "roles": []
        },
        {
            "uid": "szrW7rIppETsOHcQ5DpQMNS8o1H2",
            "email": "testing@number20.com",
            "roles": []
        },
        {
            "uid": "tDjrJUIfPVcemIiYxyQyRlquK912",
            "email": "dila@ucdavis.edu",
            "roles": [
                "admin"
            ]
        }]
};

Future<List<User>> fetchUserFake() {
  return Future.delayed(Duration(milliseconds: 500)).then((value) =>fake_result['result'].map((e){
    return User(email: e['email'], userId: e['uid'], roles: List.from(e['roles']));
  }).toList());
}
void modifyRoleFake(String email, String role, bool op) {
  for(var i in fake_result['result']) {
    if(i['email'] == email) {
      if(op) {
        var tl = List.from(i['roles']);
        tl.add(role);
        i['roles'] = tl;
      }
      else {
        var tl = List.from(i['roles']);
        tl.remove(role);
        i['roles'] = tl;
      }
    }
  }
}