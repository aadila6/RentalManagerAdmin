import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/DashBoard/theme.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

class ActivityWidget extends StatefulWidget {
  @override
  _ActivityWidgetState createState() => _ActivityWidgetState();
}

class _ActivityWidgetState extends State<ActivityWidget> {
  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC = await firestore
        .collection(globals.reservation_global)
        .orderBy('startTime')
        .getDocuments();
    await firestore.collection(globals.reservation_global).getDocuments();
    return itemListDOC.documents;
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

  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    return Material(
      elevation: 10,
      shadowColor: Colors.grey,
      borderRadius: BorderRadius.circular(4),
      color: Colors.white,
      child: Container(
        padding: EdgeInsets.all(20),
        height: _media.height,
        width: _media.width / 2,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              'Recent Activities',
              style: cardTitleTextStyle,
            ),
            SizedBox(height: 10),
            Text(
              'Latest activities lists',
              style: TextStyle(fontSize: 13, color: Colors.grey),
            ),
            // SizedBox(height: 20),
            Expanded(

              child: StreamBuilder(
                  stream: Firestore.instance
                      .collection(globals.reservation_global).orderBy('startTime', descending: true)// //modify here
                      .snapshots(),
                  builder: (context, snapshot) {
                    if (!snapshot.hasData) return CupertinoActivityIndicator();
                    return ListView.builder(
                      itemExtent: 50.0,
                      itemCount: snapshot.data.documents.length,
                      itemBuilder: (BuildContext context, int index) =>
                      
                      ListTile(
                          leading: CircleAvatar(
                            backgroundImage: NetworkImage(snapshot.data.documents[index].data['imageURL']),
                          ),
                          trailing: new Text(
                            //snapshot.data.documents[index].data['startTime']
                              returnDifferenceTime(snapshot.data.documents[index].data['reserved time'], snapshot.data.documents[index].data['picked Up time'], snapshot.data.documents[index].data['return time']) // modify here
                              ),
                          title: new Text(snapshot.data.documents[index].data['name']),
                              // style: TextStyle(color: textcolor())),
                          subtitle: new Text(
                              snapshot.data.documents[index].data['status'] +
                                  " by " +
                                  snapshot.data.documents[index].data['UserName'],
                              // style: TextStyle(color: textcolor())),
                          // onTap: () {},
                        ),
                    ),
              );}),
            )
          ],
        ),
      ),
    );
  }
}
