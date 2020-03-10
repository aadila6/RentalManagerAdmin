import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';
import 'package:RentalAdmin/views/ReservationView.dart';


TextEditingController _textFieldController = TextEditingController();
class Landing extends StatelessWidget {
  
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20.0),
              child: Text(
                "Please click administrator login in order to start the process ",
                style: TextStyle(fontSize: 16.0, color: Colors.white),
              ),
            ),
            MaterialButton(
              color: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0))),
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
                    vertical: 20.0, horizontal: 40.0),
                child: Text(
                  "Redeem Item",
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
            SizedBox(
              width: 20,
              height: 20,
            ),
           MaterialButton(
              color: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10.0))),
              onPressed: () {
              
            },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 20.0, horizontal: 40.0),
                child: Text(
                  "Google Sign In",
                  style: TextStyle(color: Colors.black),
                ),
              ),
            ),
          ],
        ),
    );
  }
}



