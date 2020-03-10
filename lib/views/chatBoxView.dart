// import 'package:RentalAdmin/views/LandingView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/navigation.dart';
import 'package:RentalAdmin/widgets/centerer.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';

class chatBoxView extends StatelessWidget {
  const chatBoxView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade100,
      body: CenteredView(
        child: Column(
          children: <Widget>[
            NavigationBar(),
            SizedBox(height: 20,),
            ReservationListView('Chating Controller Goes Here'),
          ],
        ),
      ),
    );
  }
}
