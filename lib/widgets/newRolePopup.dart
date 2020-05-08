import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/HttpRequestModel.dart';
class NewRolePopup extends StatefulWidget {
  BuildContext ctxt;
  final email;
  NewRolePopup({this.ctxt,this.email});
  @override
  State<StatefulWidget> createState() => NewRolePopupState();
}

class NewRolePopupState extends State<NewRolePopup> {
  var selectedRole = 'admin';
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text("Add new role"),
      content: DropdownButton(
          value: selectedRole,
          items: ["admin", "frontdesk", "user"]
              .map((e) => DropdownMenuItem(child: Text(e), value: e))
              .toList(),
          onChanged: (v) {
            print(v);
            setState(() {
              selectedRole = v;
            });
          }),
        actions: <Widget>[
        RaisedButton(child: Text("No"),onPressed: (){
          Navigator.of(context).pop();
        }),
        RaisedButton(child: Text("Yes"),onPressed: (){
          modifyRoleFake(widget.email,selectedRole,true);
        }),
      ],
    );
  }
}
