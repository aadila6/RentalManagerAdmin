import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/widgets/resCell.dart';
import 'package:RentalAdmin/widgets/activeActivities.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:RentalAdmin/views/SuperUser/InventoryVC/TestInventory.dart';
import 'package:flutter/cupertino.dart';
import 'package:RentalAdmin/views/User/homeView.dart';
import 'package:RentalAdmin/views/User/InventoryView.dart';
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
                                LocationPage(title: "Select Your Location")));
                  },
                  child: Icon(
                    Icons.add_to_queue,
                    size: 30.0,
                  ),
                )),
            // Padding(
            //     padding: EdgeInsets.only(right: 20.0),
            //     child: GestureDetector(
            //       onTap: () {
            //         Navigator.push(
            //             context,
            //             MaterialPageRoute(
            //                 builder: (context) => ActiveActivity()));
            //       },
            //       child: Icon(
            //         Icons.history,
            //         size: 30.0,
            //       ),
            //     )),
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
                //   return StreamBuilder(
                //     stream: Firestore.instance
                //         .collection(globals.reservation_global).orderBy('startTime', descending: true)// //modify here
                //         .snapshots(),
                //     builder: (context, snapshot) {
                //       if (!snapshot.hasData) return CupertinoActivityIndicator();
                //       return ListView.builder(
                //         itemExtent: 50.0,
                //         itemCount: snapshot.data.documents.length,
                //         itemBuilder: (BuildContext context, int index) =>
                //         ListTile(
                //             leading: CircleAvatar(
                //               backgroundImage: NetworkImage(snapshot.data.documents[index].data['imageURL']),
                //             ),
                //             trailing: new Text(
                //               //snapshot.data.documents[index].data['startTime']
                //                 returnDifferenceTime(snapshot.data.documents[index].data['startTime'], snapshot.data.documents[index].data['picked Up time'], snapshot.data.documents[index].data['return time']) // modify here
                //                 ),
                //             title: new Text(snapshot.data.documents[index].data['name']),
                //                 // style: TextStyle(color: textcolor())),
                //             subtitle: new Text(
                //                 snapshot.data.documents[index].data['status'] +
                //                     " by " +
                //                     snapshot.data.documents[index].data['UserName'],
                //                 // style: TextStyle(color: textcolor())),

                //           ),
                //           onTap: () {
                //             print("RUAAAAAAAAA");
                //             navigateToDetail(snapshot.data[index]);
                //             },
                //       ),
                // );});
                return ListView.builder(
                    itemCount: snapshot.data.length,
                    itemBuilder: (BuildContext context, int index) {
                      return Card(
                          child: ListTile(
                              leading: CircleAvatar(
                                backgroundImage: NetworkImage(
                                    snapshot.data[index].data['imageURL']),
                              ),
                              trailing: new Text(returnDifferenceTime(
                                      snapshot.data[index].data['startTime'],
                                      snapshot
                                          .data[index].data['picked Up time'],
                                      snapshot.data[index]
                                          .data['return time']) // modify here
                                  ),
                              title: Text(
                                  snapshot.data[index].data['name'].toString()),
                              subtitle: Text(
                                // snapshot.data[index].data['status'].toString(),
                                snapshot.data[index].data['status'] +
                                    " by " +
                                    snapshot.data[index].data['UserName'],
                              ),
                              onTap: () {
                                navigateToDetail(snapshot.data[index]);
                              }));
                    });
              }
            }));
  }

  String returnDifferenceTime(
      String reservationTime, String pickUpTime, String returnTime) {
    if (returnTime != null && returnTime.isNotEmpty) {
      if (returnTime != "NULL") {
        reservationTime = returnTime;
      }
    } else {
      if (pickUpTime != null && pickUpTime.isNotEmpty) {
        if (pickUpTime != "NULL") {
          pickUpTime = reservationTime;
        }
      }
    }

    var validTime = DateTime.parse(reservationTime);
    var difference = DateTime.now().difference(validTime);
    String ans = "NULL";
    var a = difference.inSeconds,
        b = difference.inMinutes,
        c = difference.inHours,
        d = difference.inDays;
    if (a < 60) {
      var tmp = "seconds";
      if (a == 1) {
        tmp = "second";
      }
      ans = "$a $tmp ago";
    } else if (b >= 1 && b <= 60) {
      var tmp = "minutes";
      if (b == 1) {
        tmp = "minute";
      }
      ans = "$b $tmp ago";
    } else if (c >= 1 && c <= 24) {
      var tmp = "hours";
      if (c == 1) {
        tmp = "hour";
      }
      ans = "$c $tmp ago";
    } else if (d >= 1) {
      var tmp = "days";
      if (d == 1) {
        tmp = "day";
      }
      ans = "$d $tmp ago";
    }
    return ans;
  }

  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        // await firestore.collection('reservation').orderBy('startTime').getDocuments();
        await firestore
            .collection(globals.reservation_global)
            .where('uid', isEqualTo: globals.userLoginID)
            .where('status', whereIn: ['Reserved', 'Picked Up']).getDocuments();
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
