// import 'package:RentalAdmin/views/LandingView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/navigation.dart';
import 'package:RentalAdmin/widgets/centerer.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';
import 'package:RentalAdmin/widgets/listofRes.dart';
import 'package:RentalAdmin/widgets/testlist.dart';
class ReservationView extends StatelessWidget {
  const ReservationView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade100,
      body: CenteredView(
        child: Column(
          children: <Widget>[
            // NavigationBar(),
            // SizedBox(height: 10,),
            ReservationListPage(),
          ],
        ),
      ),
    );
  }
}
