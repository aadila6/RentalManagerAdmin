// import 'package:RentalAdmin/views/LandingView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/navigation.dart';
import 'package:RentalAdmin/widgets/centerer.dart';
import 'package:RentalAdmin/widgets/actionButton.dart';
import 'package:RentalAdmin/widgets/inventoryList.dart';


class InventoryView extends StatelessWidget {
  const InventoryView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.teal.shade100,
      body: Padding(
        padding: EdgeInsets.all(8.0),
        child: CenteredView(
        child: Column(
          children: <Widget>[
            NavigationBar(),
            SizedBox(height: 20,),
            // ReservationListView('List of All Inventory Items'),
            listOfInventory(),
          ],
        ),
      ),
      ),
    );
  }
}
