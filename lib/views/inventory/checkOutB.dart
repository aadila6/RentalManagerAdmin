import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/userReservation.dart';

TextEditingController _textFieldController = TextEditingController();

class CheckingOut extends StatelessWidget {
  var sid = "";
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
                      title: Text('Swipe ID card'),
                      content: TextField(
                        autofocus: true,
                        onChanged: (text) {
                          if (text.length == 9) {
                            sid = text;
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        ReservationListPage()));
                            _textFieldController.clear();
                          }
                          print("First text field: $text");
                        },
                        controller: _textFieldController,
                        decoration:
                            InputDecoration(hintText: "Please enter SID#"),
                      ),
                    );
                  });
            },
            child: Padding(
              padding:
                  const EdgeInsets.symmetric(vertical: 40.0, horizontal: 40.0),
              child: Text(
                "Begin",
                style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.w100),
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
