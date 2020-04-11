import 'package:flutter/material.dart';

import 'package:RentalAdmin/widgets/activeActivities.dart';
TextEditingController _textFieldController = TextEditingController();

class Returning extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
          // crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            //checkOutButton() ,returnButton()
            MaterialButton(
              color: Colors.teal,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(20.0))),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) =>  ActiveActivity()));
              },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 40.0, horizontal: 40.0),
                child: Text(
                  "Returning",
                  style: TextStyle(fontSize: 20,color: Colors.white,fontWeight: FontWeight.w100),
                ),
              ),
            ),
            SizedBox(
              width: 30,
              height: 30,
            ),

          ],
        ),
    );
  }
  
}
