import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
// import '../globals.dart' as globals;
// import 'package:intl/intl.dart';
// import 'package:rental_manager/PlatformWidget/platform_alert_dialog.dart';
// import 'package:rental_manager/PlatformWidget/strings.dart';
// import 'package:flutter/services.dart';
// import 'ItemDetails.dart';

class ItemInvPage extends StatefulWidget {
  // String category;
  // ItemGridPage({this.category});
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState

    return _ItemInvPageState();
  }
}

// showAlertDialog(BuildContext context) {
//   // set up the buttons
//   Widget remindButton = RaisedButton(
//     child: Text("Reservation have been created"),
//     onPressed: () {
//       // Navigator.push(context, MaterialPageRoute(builder: (context) => MyHomePage()));
//     },
//   );
// }

class _ItemInvPageState extends State<ItemInvPage> {
  Widget build(BuildContext context) {
    return Container(
      child: StreamBuilder(
          stream: Firestore.instance
              .collection('ARC_items')
              // .where('category', isEqualTo: widget.category)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) return const Text('loading...');
            return ListView.builder(
              itemCount: snapshot.data.documents.length,
              itemBuilder: (BuildContext context, int index) => ListTile(
                title: Text(
                    snapshot.data.documents[index].data['name'].toString()),
                subtitle: Text(
                    'Total amount: ${snapshot.data.documents[index].data['# of items'].toString()}'),
                onTap: () {
                },
              ),
            );

            // return GridView.builder(
            //   itemCount: snapshot.data.documents.length,
            //   gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
            //       crossAxisCount: 5),
            //   itemBuilder: (BuildContext context, int index) => CustommCell(
            //       snapshot.data.documents[index].data['name'].toString(),
            //       snapshot.data.documents[index].data['imageURL'].toString()),
            // );

            // return GridView.builder(
            //   itemCount: snapshot.data.documents.length,
            //   gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
            //       crossAxisCount: 5),
            //   itemBuilder: (BuildContext context, int index) {
            //     return InkWell(
            //       child: CustommCell(
            //       snapshot.data.documents[index].data['name'].toString(),
            //       snapshot.data.documents[index].data['imageURL'].toString()),
            //       onTap: (){
            //         print(snapshot.data.documents[index].data['name'].toString());
            //         // navigateToDetail(snapshot.data.documents[index]);
            //       },
            //     );

            //   }
            // );
          }),
    );
  }
}

class CustommCell extends StatelessWidget {
  String name;
  String url;
  CustommCell(this.name, this.url);

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10.0),
      ),
      color: Colors.white,
      child: Padding(
        padding: EdgeInsets.all(10.0),
        child: Container(
          alignment: Alignment.center,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Flexible(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10.0),
                  child: Image.network(url),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(10.0),
                child: Text(
                  name,
                  maxLines: 1,
                  softWrap: true,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
