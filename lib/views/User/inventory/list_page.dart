import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:firebase_storage/firebase_storage.dart';
import 'category_page.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

class ListPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _ListPageState();
  }
}

class _ListPageState extends State<ListPage> {
  Future getFirestoreData() async {
    final firestore = Firestore.instance;
    QuerySnapshot arrayOfLocationDocuments =
        await firestore.collection(globals.locations).getDocuments();
    return arrayOfLocationDocuments.documents;
  }

  navigateToCategory(DocumentSnapshot indexedData) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) =>
                CategoryPage(passedFirestoreData: indexedData)));
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      child: FutureBuilder(
        future: getFirestoreData(),
        builder: (_, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: Text('Loading...'),
            );
          } else {
            return ListView.builder(
                itemCount: snapshot.data.length,
                itemBuilder: (BuildContext context, int index) =>
                    customCard(index, snapshot));
          }
        },
      ),
    );
  }

  Widget customCard(int index, AsyncSnapshot snapshot) {
    return Material(
      child: InkWell(
        onTap: () => navigateToCategory(snapshot.data[index]),
        child: Container(
          padding: const EdgeInsets.fromLTRB(200, 0, 200, 18),
          height: 200,
          child: Card(
            child: Container(
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage(snapshot.data[index].data['imageURL']),
                  fit: BoxFit.fill,
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.all(15.0),
                child: Column(
                  children: <Widget>[
                    Row(
                      children: <Widget>[
                        Stack(
                          children: <Widget>[
                            Text(
                              snapshot.data[index].data['name'],
                              style: TextStyle(
                                fontSize: 1,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                          ],
                        ),
                        Spacer(),
                      ],
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
