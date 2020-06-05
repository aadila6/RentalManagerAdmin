import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/UpdateLocationDialog.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/DashBoard/theme.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/UpdateItemDialog.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/NewLocationDialog.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/ItemManagement/NewItemDialog.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:fluttertoast/fluttertoast.dart';
import 'Category.dart';
import 'package:flutter/cupertino.dart';

class FirstTab extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: inventoryByLOC(),
    );
  }
}

class inventoryByLOC extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return inventoryByLOCState();
  }
}

class inventoryByLOCState extends State<inventoryByLOC> {
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
            'Rental Manager Admin - ' + globals.organization,
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
                return NewLocationDialog();
              });
        },
        child: Text(
          "Add Location",
          style: TextStyle(color: Colors.white),
        ),
      ),
      Expanded(
        child: StreamBuilder(
            stream: Firestore.instance.collection(globals.locations).snapshots(),
            builder: (context, snapshot) {
              print("Building");
              if (!snapshot.hasData) return CupertinoActivityIndicator();
              List dataRef = snapshot.data.documents;
              dataRef.removeWhere((element){
                print(element.data['name']);
                if(globals.admin==true) {
                  return false;
                }
                else if(globals.locationManager != element.data['name']) {
                  return true;
                }
                return false;
              });
              return GridView(
                  gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 5),
                  children: dataRef.map((e) => buildBox(e)).toList()
              );
            }),
      )
    ]);
  }

  Widget buildBox(doc) {
    return InkWell(
      child: CustommCell(
        doc.data['name'].toString(),
        doc.data['imageURL'].toString()
      ),
      onTap: () {
        var documentID = doc.documentID;
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => CategoryVC(
              locationSelected: documentID,
              locationName: doc.data['name'].toString(),
            )
          ),
        );
      },
      onDoubleTap: () {
        print("User double tapped location!");
        showDialog(
          context: context,
          builder: (ctxt) {
            return UpdateLocationDialog(
              itemSelected: doc);
          }
        );
      },
    );
  }

  navigateToDetail(DocumentSnapshot indexedData) {
    return UpdateItemDialog(itemSelected: indexedData);
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
