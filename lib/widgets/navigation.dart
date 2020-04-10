import 'package:RentalAdmin/views/homeView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/InventoryView.dart';
import 'package:RentalAdmin/views/chatBoxView.dart';
import 'package:RentalAdmin/views/ReservationView.dart';
import 'package:RentalAdmin/widgets/testlist.dart';
import 'package:RentalAdmin/widgets/signInScreen.dart';
import 'package:RentalAdmin/widgets/chat.dart';
import 'googleSignin.dart';

class NavigationBar extends StatelessWidget {
  const NavigationBar({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.greenAccent,
        height: 80,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(
              "Rental Manager Administrator",
              style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.teal.shade900,
                  fontSize: 20),
            ),
            Row(
              children: <Widget>[
                // MaterialButton(
                //   color: Colors.teal,
                //   onPressed: () {
                //     print("Pressed home button!!");
                //     Navigator.push(context, MaterialPageRoute(builder: (context) => HomeView()));
                //   },
                //   child: Text(
                //     "Home",
                //     style: TextStyle(color: Colors.white),
                //   ),
                  
                // ), SizedBox(
                //   width: 20,
                // ),
                // MaterialButton(
                //   color: Colors.teal,
                //   onPressed: () {
                //     print("Pressed Support button!!");
                //      Navigator.push(context, MaterialPageRoute(builder: (context) => LocationPage(title:'Select a Location')));
                //   },
                //   child: Text(
                //     "Inventory",
                //     style: TextStyle(color: Colors.white),
                //   ),
                // ), SizedBox(
                //   width: 20,
                // ),
                // MaterialButton(
                //  color: Colors.teal,
                //   onPressed: () {
                //      print("Pressed Inventory button!!");
                //      Navigator.push(context, MaterialPageRoute(builder: (context) => ChatScreen()));
                //   },
                //   child: Text(
                //     "ChatBox",
                //     style: TextStyle(color: Colors.white),
                //   ),
                // ), SizedBox(
                //   width: 20,
                // ),
                // MaterialButton(
                //   color: Colors.teal,
                //   onPressed: () {
                //      print("Pressed Reservation button!!");
                //      Navigator.push(context, MaterialPageRoute(builder: (context) => ReservationListPage()));
                //   },
                //   child: Text(
                //     "Reservations",
                //     style: TextStyle(color: Colors.white),
                //   ),
                // ), SizedBox(
                //   width: 20,
                // ),
                MaterialButton(
                  color: Colors.teal,
                  onPressed: () {
                     print("Pressed Support button!!");
                    //  Navigator.push(context, MaterialPageRoute(builder: (context) => signInScreen()));
                    Navigator.push(context, MaterialPageRoute(builder: (context) => ReservationListPage()));
                  },
                  child: Text(
                    "Admin Login",
                    style: TextStyle(color: Colors.white),
                  ),
                ), SizedBox(
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
    return Container(
      
    );
  }
}
