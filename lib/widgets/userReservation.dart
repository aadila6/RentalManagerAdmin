import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/homeView.dart';
import 'package:RentalAdmin/widgets/resCell.dart';
import 'package:RentalAdmin/widgets/activeActivities.dart';
import 'package:RentalAdmin/views/InventoryView.dart';

//
class ReservationListPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _ReservationListPage();
  }
}

TextEditingController _textFieldController = TextEditingController();

class _ReservationListPage extends State<ReservationListPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('User Activities'),
          backgroundColor: Colors.teal,
          actions: <Widget>[
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                LocationPage(title: 'Select a Location')));
                  },
                  child: Icon(
                    Icons.add_to_queue,
                    size: 30.0,
                  ),
                )),
                Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                ActiveActivity()));
                  },
                  child: Icon(
                    Icons.history,
                    size: 30.0,
                  ),
                )),
            Padding(
                padding: EdgeInsets.only(right: 20.0),
                child: GestureDetector(
                  onTap: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => HomeView()));
                  },
                  child: Icon(
                    Icons.home,
                    size: 30.0,
                  ),
                )),
          ],
        ),
        // backgroundColor: Colors.teal,
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
                    itemBuilder: (BuildContext context, int index) {
                      return Card(
                          child: ListTile(
                              title: Text(
                                  snapshot.data[index].data['name'].toString()),
                              subtitle: Text(
                                snapshot.data[index].data['status'].toString(),
                              ),
                              onTap: () {
                               navigateToDetail(snapshot.data[index]);
                              }));
                    });
              }
            }));
  }
  
  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        // await firestore.collection('reservation').orderBy('startTime').getDocuments();
        await firestore
            .collection('reservation')
            .where('uid', isEqualTo: 'AppSignInUserladydilaa@gmail.com')
            .where('status', whereIn: ['Reserved','Picked Up'])
            .getDocuments();
    return itemListDOC.documents;
  }
 navigateToDetail(DocumentSnapshot indexedData) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) =>
                reservationCell(passedFirestoreData: indexedData)));
  }
  // navigateToDetail(DocumentSnapshot indexedData) {
  //   Navigator.push(
  //       context,
  //       MaterialPageRoute(
  //           builder: (context) =>
  //               reservationCell(passedFirestoreData: indexedData)));
  // }

  Widget customCell(int index, AsyncSnapshot snapshot) {
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
                padding: const EdgeInsets.all(10.0),
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
                              ],
                            ),
                          ],
                        ),
                        Spacer(),
                        Stack(
                          children: <Widget>[
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
