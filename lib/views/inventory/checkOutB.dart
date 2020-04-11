import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';
import 'package:RentalAdmin/views/ReservationView.dart';
import 'package:RentalAdmin/views/InventoryView.dart';
import 'package:RentalAdmin/widgets/testlist.dart';
TextEditingController _textFieldController = TextEditingController();

class CheckingIn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
          
          children: <Widget>[
            
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
                        title: Text('Please select your options'),
                        // content: TextField(
                        //   controller: _textFieldController,
                        //   decoration:
                        //       InputDecoration(hintText: "Please enter SID#"),
                        // ),
                        actions: <Widget>[
                          new FlatButton(
                            child: new Text('Check In'),
                            onPressed: () {
                              Navigator.of(context).pop();
                              Navigator.push(context, MaterialPageRoute(builder: (context) => LocationPage(title:'Select a Location'))
                              );
                            },
                          ),
                          new FlatButton(
                            child: new Text('I have a Reservation'),
                            onPressed: () {
                              Navigator.of(context).pop();
                              Navigator.push(context, MaterialPageRoute(builder: (context) => ReservationListPage()));
                            },
                          ),
                        ],
                      );
                    });
              },
              child: Padding(
                padding: const EdgeInsets.symmetric(
                    vertical: 40.0, horizontal: 40.0),
                child: Text(
                  "Check In",
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
