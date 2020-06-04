import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/navigation.dart';
import 'package:RentalAdmin/views/inventory/checkOutB.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade100,
      body: Column(
        children: <Widget>[
          NavigationBar(),
          SizedBox(
            height: 10,
          ),
          contentBoard(context),
        ],
      ),
    );
  }

  Container contentBoard(context) {
    return Container(
      padding: EdgeInsets.all(0.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          // leftDashboard(context),
          dashBoard(context),
        ],
      ),
    );
  }

  Container dashBoard(BuildContext context) {
    return Container(
      padding: EdgeInsets.fromLTRB(5, 5, 5, 5),
      height: MediaQuery.of(context).size.height * .65,
      width: MediaQuery.of(context).size.width / 3,
      decoration: BoxDecoration(
        // border: Border.all(width: 10, color: Colors.pink),
        borderRadius: const BorderRadius.all(const Radius.circular(8)),
      ),
      child: Column(
        children: <Widget>[
          CheckingOut(),
        ],
      ),
    );
  }
}
