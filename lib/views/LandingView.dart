import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';
import 'package:RentalAdmin/views/ReservationView.dart';

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
                print("pressed redeem:)");
                showDialog(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        title: Text('Swipe ID card'),
                        content: TextField(
                          controller: _textFieldController,
                          decoration:
                              InputDecoration(hintText: "Please enter SID#"),
                        ),
                        actions: <Widget>[
                          new FlatButton(
                            child: new Text('CANCEL'),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          ),
                          new FlatButton(
                            child: new Text('REDEEM'),
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                          )
                        ],
                      );
                    });
              },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 40.0, horizontal: 40.0),
                child: Text(
                  "Check Out Item",
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
