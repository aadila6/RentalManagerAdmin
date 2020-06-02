import 'package:RentalAdmin/views/SuperUser/SuperuserPanel.dart';
import 'package:RentalAdmin/views/homeView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/InventoryView.dart';
// import 'package:RentalAdmin/views/chatBoxView.dart';
import 'package:RentalAdmin/views/ReservationView.dart';
import 'package:RentalAdmin/views/ReservationView.dart';
import 'package:RentalAdmin/views/signInScreen.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

class NavigationBar extends StatelessWidget {
  const NavigationBar({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
        color: Colors.teal,
        height: 80,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              "Rental Manager Administrator",
              style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  fontSize: 20),
            ),
            Row(
              children: <Widget>[
                MaterialButton(
                  color: Colors.teal,
                  shape: new RoundedRectangleBorder(
                      // borderRadius: new BorderRadius.circular(18.0),
                      side: BorderSide(color: Colors.white)),
                  onPressed: () {
                    print("Pressed Admin login");
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => signInScreen()));
                  },
                  child: Text(
                    "Log Out",
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                SizedBox(
                  width: 20,
                ),
              ],
            )
          ],
        ));
  }
}

class _NavigationBar extends StatelessWidget {
  final String title;
  const _NavigationBar(this.title);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
