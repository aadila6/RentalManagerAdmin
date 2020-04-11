import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/widgets/reservationCell.dart';

class AllActivities extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _AllActivities();
  }
}
TextEditingController _textFieldController = TextEditingController();
class _AllActivities extends State<AllActivities> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('All Reservations'),
          backgroundColor: Colors.teal,
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
                              // onTap: () => testingReservations(
                              //     snapshot.data.documents[index].documentID, context),
                              onTap: () {
                                showDialog(
                                    context: context,
                                    builder: (context) {
                                      return AlertDialog(
                                        title: Text('Details'),
                                        content: Text(itemInfo(index,snapshot)),
                                        actions: <Widget>[
                                          new FlatButton(
                                            
                                            child: new Text('OK'),
                                            onPressed: () {
                                              Navigator.of(context).pop();
                                            },
                                          ),
                                          // new FlatButton(
                                          //   child: new Text('CONFIRM'),
                                          //   onPressed: () {
                                          //     Navigator.of(context).pop();
                                          //   },
                                          // )
                                        ],
                                      );
                                    });
                              }));
                    });
              }
            }));
  }

  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        // await firestore.collection('reservation').orderBy('startTime').getDocuments();
        await firestore.collection('reservation').orderBy('startTime').getDocuments();
    return itemListDOC.documents;
  }
  String itemInfo(int index, AsyncSnapshot snapshot){
  String ret = '';
  ret += 'Item Name:' + snapshot.data[index].data['name'].toString() + '\n';
  ret += 'Item Amount: ' + snapshot.data[index].data['amount'].toString() + '\n';
  ret += 'Item Status: ' + snapshot.data[index].data['status'].toString() + '\n';
  ret += 'Item Start Time: ' + snapshot.data[index].data['startTime'].toString() + '\n';
  // ret += 'Item End Tiem: ' + item.endTime + '\n';
  return ret;
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
