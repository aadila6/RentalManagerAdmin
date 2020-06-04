import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/DashBoard/theme.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/UpdateItemDialog.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/NewCategoryDialog.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/UpdateCategoryDialog.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'Items.dart';
import 'package:flutter/cupertino.dart';
class CategoryVC extends StatefulWidget {
  String locationSelected;
  String locationName;
  CategoryVC({this.locationSelected, this.locationName});

  @override
  State<StatefulWidget> createState() {
    return _CategoryVC();
  }
}

String glocation = '';
List<dynamic> categoryNameList = [];

class _CategoryVC extends State<CategoryVC> {
  bool isReady = false;
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      SizedBox(
        height: 55,
        width: MediaQuery.of(context).size.width,
        child: AppBar(
          elevation: 4,
          centerTitle: true,
          title: Text(
            'Rental Manager Admin - ' +
                globals.organization +
                ' - ' +
                this.widget.locationName,
          ),
          backgroundColor: drawerBgColor,
        ),
      ),
      MaterialButton(
        color: Colors.teal,
        shape: new RoundedRectangleBorder(
            borderRadius: new BorderRadius.circular(20.0),
            side: BorderSide(color: Colors.white)),
        onPressed: () {
          showDialog(
              context: context,
              builder: (ctxt) {
                return NewCategory(
                    locationSelected: this.widget.locationSelected,
                    locationName: glocation);
              });
        },
        child: Text(
          "Add a Category",
          style: TextStyle(color: Colors.white),
        ),
      ),
      
      Expanded(
        child: StreamBuilder(
            stream: Firestore.instance
                .collection(globals.locations)
                .document(this.widget.locationSelected)
                .snapshots(),
            builder: (context, snapshot) {
              if (!snapshot.hasData) return CupertinoActivityIndicator();
              print("SNAPSHOT DATA - NAME");
              print(snapshot.data['name']);
              glocation = snapshot.data['name'].toString();
              print(snapshot.data['categories']);
              return GridView.builder(
                  itemCount: snapshot.data['categories'].length,
                  gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 5),
                  itemBuilder: (BuildContext context, int index) {
                    return InkWell(
                      child: CustommCell(
                          snapshot.data['categories'][index]['name'].toString(),
                          snapshot.data['categories'][index]['imageURL']
                              .toString()),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ItemVC(
                                    categorySelected: snapshot
                                        .data['categories'][index]['name'],
                                    locationSelected: glocation,
                                  )),
                        );
                      },
                      onDoubleTap: () {
                        print("User double tapped!!");
                        // return UpdateCategoryDialog(itemSelected: snapshot.data.documents[index]);
                        showDialog(
                            context: context,
                            builder: (ctxt) {
                              return UpdateCategoryDialog(
                                  locationSelected:
                                      this.widget.locationSelected,
                                  locationName: this.widget.locationName,
                                  categorySelected: snapshot.data['categories']
                                      [index]);
                            });
                      },
                    );
                  });
            }),
      )
    ]);
  }

  navigateToDetail(DocumentSnapshot indexedData) {
    return UpdateItemDialog();
  }
}

class CustommCell extends StatelessWidget {
  String name;
  String url;
  CustommCell(this.name, this.url);
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
                  child: Image.network(url),
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
                    fontSize: 12.0,
                    fontWeight: FontWeight.w800,
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
