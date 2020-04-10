import 'package:RentalAdmin/views/LandingView.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/widgets/navigation.dart';
import 'package:RentalAdmin/widgets/centerer.dart';
import 'package:RentalAdmin/widgets/testlist.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

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
          leftDashboard(context),
          rightDashboard(context),
        ],
      ),
    );
  }

  Container leftDashboard(BuildContext context) {
    return Container(
        height: MediaQuery.of(context).size.height * .65,
        width: MediaQuery.of(context).size.width / 2,
        decoration: BoxDecoration(
          border: Border.all(width: 10, color: Colors.pink),
          borderRadius: const BorderRadius.all(const Radius.circular(8)),
        ),
        child: Column(
          children: <Widget>[
            // reservation(),
            // res(context),
          ],
        ));
  }

  Container rightDashboard(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height * .65,
      width: MediaQuery.of(context).size.width / 3,
      decoration: BoxDecoration(
        border: Border.all(width: 10, color: Colors.pink),
        borderRadius: const BorderRadius.all(const Radius.circular(8)),
      ),
      child: Column(
        children: <Widget>[
          Landing(),
          Landing(),
          Landing(),
        ],
      ),
    );
  }

  Container res(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(width: 10, color: Colors.pink),
        borderRadius: const BorderRadius.all(const Radius.circular(8)),
      ),
      child: Column(
        children: <Widget>[
          ListView.separated(
              separatorBuilder: (context, index) => Divider(
                color: Colors.black,
              ),
              itemCount: 20,
              itemBuilder: (context, index) => Padding(
                padding: EdgeInsets.all(8.0),
                child: Center(child: Text("Index $index")),
              ),
            )
        ],
      ),
    );
  }

  Container reservation() {
    return Container(
        child: FutureBuilder(
            future: getFirestoreData(),
            builder: (_, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return Center(
                  child: Text(
                    'Loading...',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                );
              } else {
                return ListView.builder(
                  itemCount: snapshot.data.length,
                  itemBuilder: (BuildContext context, int index) => ListTile(
                    title: Text(
                        // snapshot.data.documents[index].data['name'].toString()
                        'Data'),
                    subtitle: Text(
                        // 'Total amount: ${snapshot.data.documents[index].data['# of items'].toString()}'),
                        'Total amount: '),
                    // onTap: () => testingReservations(
                    //     snapshot.data.documents[index].documentID, context),
                  ),
                );
              }
            }));
  }

  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        await firestore.collection('reservation').getDocuments();
    return itemListDOC.documents;
  }
  // Widget customCell(int index, AsyncSnapshot snapshot) {
  //   return Material(
  //     child: InkWell(
  //       // onTap: () => navigateToDetail(snapshot.data[index]),
  //       child: Container(
  //         // decoration: BoxDecoration(
  //         //   boxShadow: [
  //         //     BoxShadow(
  //         //       color: Colors.grey,
  //         //       blurRadius: 10.0,
  //         //     ),
  //         //   ],
  //         // ),
  //         child: Card(
  //           child: Container(
  //             child: Padding(
  //               padding: const EdgeInsets.all(5.0),
  //               child: Column(
  //                 children: <Widget>[
  //                   Row(
  //                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
  //                     children: <Widget>[
  //                       Stack(
  //                         children: <Widget>[
  //                           Column(
  //                             children: <Widget>[
  //                               Text(
  //                                 snapshot.data[index].data['name'],
  //                                 style: TextStyle(
  //                                   fontSize: 5,
  //                                   fontWeight: FontWeight.bold,
  //                                 ),
  //                               ),
  //                               Text(
  //                                 snapshot.data[index].data['startTime'],
  //                                 style: TextStyle(
  //                                   fontSize: 5,
  //                                   color: Colors.teal.shade900,
  //                                 ),
  //                               ),
  //                             ],
  //                           ),
  //                         ],
  //                       ),
  //                       Spacer(),
  //                       Stack(
  //                         children: <Widget>[
  //                           Text(
  //                             '>',
  //                             style: TextStyle(
  //                               fontSize: 5,
  //                               color: Colors.teal,
  //                             ),
  //                           ),
  //                         ],
  //                       ),
  //                     ],
  //                   ),
  //                   Text(
  //                     snapshot.data[index].data['status'],
  //                     style: TextStyle(
  //                       fontSize: 5,
  //                       color: Colors.teal,
  //                     ),
  //                   ),
  //                 ],
  //               ),
  //             ),
  //           ),
  //         ),
  //       ),
  //     ),
  //   );
  // }
}
