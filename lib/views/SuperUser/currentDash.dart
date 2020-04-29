import 'package:flutter/material.dart';
// import 'package:flutter_web_dashboard/src/commons/theme.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
// import 'package:flutter_web_dashboard/src/commons/theme.dart';
// import 'package:RentalAdmin/views/SuperUser/RecentAct.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
class ActivityWidget extends StatelessWidget {
  const ActivityWidget({
    Key key,
    @required Size media,
  })  : _media = media,
        super(key: key);

  final Size _media;
  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 10,
      shadowColor: Colors.grey,
      borderRadius: BorderRadius.circular(4),
      color: Colors.white,
      child: Container(
        padding: EdgeInsets.all(20),
        height: _media.height ,
        width: _media.width/2 ,
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
            SizedBox(height: 20),
          ],
        ),
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
                    // itemCount: 3,
                    itemBuilder: (BuildContext context, int index) {
                      print("retriving data" + snapshot.data.length);
                      return ListTile(
                              title: Text(
                                  snapshot.data[index].data['name'].toString()),
                              subtitle: Text(
                                snapshot.data[index].data['status'].toString(),
                              ),
                              onTap: () {
                              //  navigateToDetail(snapshot.data[index]);
                              });
                    });
              }
            }));
  }
  
  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot itemListDOC =
        await firestore.collection('reservation').orderBy('startTime').getDocuments();
        await firestore
            .collection('reservation')
            .getDocuments();
    return itemListDOC.documents;
  }
}