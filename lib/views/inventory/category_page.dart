import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'custom_gridcell.dart';
import "itemGrid.dart";
import 'item_page.dart';

class CategoryPage extends StatefulWidget {
  final DocumentSnapshot passedFirestoreData;
  CategoryPage({this.passedFirestoreData});
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState

    return _CategoryPageState();
  }
}

class _CategoryPageState extends State<CategoryPage> {
  navigateToItem(String categorySelected) {
    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => ItemGridPage(category: categorySelected)));
  }
  
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(
        title: Text('Category Selection Page'),
        backgroundColor: Colors.teal,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Flexible(
            child: Padding(
              padding: EdgeInsets.all(5.0),
              child: GridView.count(
                crossAxisCount: 5,
                childAspectRatio: 1.0,
                mainAxisSpacing: 4.0,
                crossAxisSpacing: 4.0,
                children:
                    widget.passedFirestoreData.data['categories'].map<Widget>(
                  (categoryInfo) {
                    return GestureDetector(
                      child: GridTile(
                        child: CustomCell(categoryInfo),
                      ),
                      onTap: () {
                        // print("tapped ${categoryInfo.toString()}");
                        navigateToItem(categoryInfo['name']);
                      },
                    );
                  },
                ).toList(),
              ),
            ),
          ),
        ],
      ),

    );
  }
}
