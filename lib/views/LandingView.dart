import 'package:flutter/material.dart';
// import 'package:RentalAdmin/widgets/actionButton.dart';

import 'package:RentalAdmin/widgets/allActivities.dart';

TextEditingController _textFieldController = TextEditingController();

class Landing extends StatelessWidget {
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
                 Navigator.push(context, MaterialPageRoute(builder: (context) => AllActivities()));
              },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 40.0, horizontal: 40.0),
                child: Text(
                  "All Activity",
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
