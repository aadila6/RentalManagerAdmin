import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/widgets/reservationCell.dart';

class ReservationListPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _ReservationListPage();
  }
}

class _ReservationListPage extends State<ReservationListPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('All Reservations'),
          backgroundColor: Colors.teal,
        ),
        backgroundColor: Colors.blueGrey,
        body: reservation());
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
                    itemBuilder: (BuildContext context, int index) =>
                        customCell(index, snapshot));
              }
            }));
  }

  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        await firestore.collection('reservation').getDocuments();
    return itemListDOC.documents;
  }

  navigateToDetail(DocumentSnapshot indexedData) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) =>
                reservationCell(passedFirestoreData: indexedData)));
  }

  Widget customCell(int index, AsyncSnapshot snapshot) {
    
    // // getItemName(snapshot.data[index].data['item']);
    // // print("Got this: " + lala);
    // Future<String> getFirestoreItemData() async {
    //   // final firestoreItem = Firestore.instance;
    //   DocumentReference itemListDOC = Firestore.instance
    //       .collection("items")
    //       .document(snapshot.data[index].data['item']);
    //   itemListDOC.get().then((datasnapshot) {
    //     //print(datasnapshot.data);
    //     if (datasnapshot.data.containsKey('name')) {
    //       return datasnapshot.data['name'].toString();
    //     } else {
    //       return "null1";
    //       print("No such item in database!?");
    //     }
    //   });
    //   return "null3";
    //   // return res;
    // }

    return Material(
      child: InkWell(
        // onTap: () => navigateToDetail(snapshot.data[index]),
        child: Container(
          decoration: BoxDecoration(
            boxShadow: [
              BoxShadow(
                color: Colors.grey,
                blurRadius: 10.0,
              ),
            ],
          ),
          child: Card(
            child: Container(
              child: Padding(
                padding: const EdgeInsets.all(20.0),
                child: Column(
                  children: <Widget>[
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Stack(
                          children: <Widget>[
                            Column(
                              children: <Widget>[
                                Text(
                                  snapshot.data[index].data['name'],
                                  style: TextStyle(
                                    fontSize: 15,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Text(
                                  snapshot.data[index].data['startTime'],
                                  style: TextStyle(
                                    fontSize: 15,
                                    color: Colors.teal.shade900,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                        Spacer(),
                        Stack(
                          children: <Widget>[
                            Text(
                              '>',
                              style: TextStyle(
                                fontSize: 20,
                                color: Colors.teal,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    Text(
                      snapshot.data[index].data['status'],
                      style: TextStyle(
                        fontSize: 10,
                        color: Colors.teal,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
