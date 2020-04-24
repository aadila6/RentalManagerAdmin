import 'package:flutter/material.dart';

class NewItemDialog extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Dialog(
      child:ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: 500,
          maxHeight: 500
        ),
      child: Container(
        padding: EdgeInsets.all(30),
        child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text("Add new item"),
          TextField(
            autofocus: true,
            decoration: InputDecoration(
                labelText: "Item Name",
            ),
          ),
          TextField(
            decoration: InputDecoration(
                labelText: "Item Amount",
            ),
          ),
          RaisedButton(onPressed: (){}, child: Text("Submit"))
        ]
      ))
    ));
  }
  
}