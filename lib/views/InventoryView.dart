// import 'package:RentalAdmin/views/LandingView.dart';
// import 'package:flutter/material.dart';
// import 'package:RentalAdmin/widgets/navigation.dart';
// import 'package:RentalAdmin/widgets/centerer.dart';
// import 'package:RentalAdmin/widgets/actionButton.dart';
// import 'package:RentalAdmin/widgets/inventoryList.dart';


// class InventoryView extends StatelessWidget {
//   const InventoryView({Key key}) : super(key: key);
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: Colors.teal.shade100,
//       body: Padding(
//         padding: EdgeInsets.all(8.0),
//         child: CenteredView(
//         child: Column(
//           children: <Widget>[
//             NavigationBar(),
//             SizedBox(height: 20,),
//             // ReservationListView('List of All Inventory Items'),
//             listOfInventory(),
//           ],
//         ),
//       ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
import '../views/inventory/list_page.dart';
class FirstTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LocationPage(title: 'Select a Location'),
    );
  }
}

class LocationPage extends StatefulWidget {
  final String title;
  LocationPage({Key key, this.title}) : super(key: key);
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _LocationPageState();
  }
}

class _LocationPageState extends State<LocationPage> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.teal,
        ),
      body: ListPage(),
    );
  }
}

