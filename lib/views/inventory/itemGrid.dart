import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
// import '../globals.dart' as globals;
// import 'package:intl/intl.dart';
// import 'package:rental_manager/PlatformWidget/platform_alert_dialog.dart';
// import 'package:rental_manager/PlatformWidget/strings.dart';
// import 'package:flutter/services.dart';
import 'detail_page.dart';

class ItemGridPage extends StatefulWidget {
  String category;
  ItemGridPage({this.category});
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState

    return _ItemGridPageState();
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

class _ItemGridPageState extends State<ItemGridPage> {
  // Future getFirestoreData() async {
  //   final firestore = Firestore.instance;
  //   QuerySnapshot arrayOfLocationDocuments = await firestore
  //       .collection('ARC_items')
  //       .where('category', isEqualTo: widget.category)
  //       .getDocuments();
  //   return arrayOfLocationDocuments.documents;
  // }
  navigateToDetail(DocumentSnapshot indexedData) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => DetailPage(itemSelected: indexedData)));
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Category Selected: ${widget.category}'),
        backgroundColor: Colors.teal,
      ),
      body: StreamBuilder(
          stream: Firestore.instance
              .collection('ARC_items')
              .where('category', isEqualTo: widget.category)
              .snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) return const Text('loading...');
            // return ListView.builder(
            //   itemCount: snapshot.data.documents.length,
            //   itemBuilder: (BuildContext context, int index) => ListTile(
            //     title: Text(
            //         snapshot.data.documents[index].data['name'].toString()),
            //     subtitle: Text(
            //         'Total amount: ${snapshot.data.documents[index].data['# of items'].toString()}'),
                // onTap: () {
                //   navigateToDetail(snapshot.data.documents[index]);
                //   // testingReservations(
                //   //     snapshot.data.documents[index].documentID);
                // },
            //   ),
            // );
            return GridView.builder(
              itemCount: snapshot.data.documents.length,
              gridDelegate:
                new SliverGridDelegateWithFixedCrossAxisCount(
                                   crossAxisCount: 5),
                itemBuilder: (BuildContext context, int index) => CustommCell(snapshot.data.documents[index].data['name'].toString(),),
               
                );
          }),
    );
  }
}
  // Widget build(){
  //   return Scaffold(
  //     appBar: AppBar(
  //       title: Text('Category Selection Page'),
  //       backgroundColor: Colors.teal,
  //     ),
  //     body: Column(
  //       mainAxisAlignment: MainAxisAlignment.start,
  //       crossAxisAlignment: CrossAxisAlignment.start,
  //       mainAxisSize: MainAxisSize.min,
  //       children: <Widget>[
  //         Flexible(
  //           child: Padding(
  //             padding: EdgeInsets.all(5.0),
  //             child: GridView.count(
  //               crossAxisCount: 5,
  //               childAspectRatio: 1.0,
  //               mainAxisSpacing: 4.0,
  //               crossAxisSpacing: 4.0,
  //               children:
  //                   widget.passedFirestoreData.data['categories'].map<Widget>(
  //                 (categoryInfo) {
  //                   return GestureDetector(
  //                     child: GridTile(
  //                       child: CustomCell(categoryInfo),
  //                     ),
  //                     onTap: () {
  //                       // print("tapped ${categoryInfo.toString()}");
  //                       navigateToItem(categoryInfo['name']);
  //                     },
  //                   );
  //                 },
  //               ).toList(),
  //             ),
  //           ),
  //         ),
  //       ],
  //     ),

      
  //   );
  // }

class CustommCell extends StatelessWidget {
  String name;
  CustommCell(this.name);

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
                  // child: Image.network(categoryInfo['imageURL']),
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
                    fontSize: 20.0,
                    fontWeight: FontWeight.w500,
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
