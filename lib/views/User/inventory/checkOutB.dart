import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/User/UI/ReservationView.dart';

TextEditingController _textFieldController = TextEditingController();

class CheckingOut extends StatelessWidget {
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
              Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => ReservationListPage()));
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
