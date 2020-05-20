import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/UpdateItemDialog.dart';
import 'package:RentalAdmin/views/SuperUser/NewLocationDialog.dart';
import 'package:RentalAdmin/views/SuperUser/NewCategoryDialog.dart';
import 'package:RentalAdmin/views/SuperUser/NewItemDialog.dart';
import 'package:RentalAdmin/views/SuperUser/SuperLanding.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

class ItemVC extends StatefulWidget {
  String categorySelected;
  String locationSelected;
  ItemVC({this.categorySelected, this.locationSelected});
  @override
  State<StatefulWidget> createState() {
    return _ItemVC();
  }
}

class _ItemVC extends State<ItemVC> {
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
                this.widget.locationSelected +
                ' - ' +
                this.widget.categorySelected,
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
                return NewItemDialog(
                  categorySelected: this.widget.categorySelected,
                  locationSelected: this.widget.locationSelected,
                );
              });
        },
        child: Text(
          "Add New item",
          style: TextStyle(color: Colors.white),
        ),
      ),
      Expanded(
        child: StreamBuilder(
            stream: Firestore.instance
                .collection(globals.items_global)
                .where('category', isEqualTo: this.widget.categorySelected)
                .snapshots(),
            builder: (context, snapshot) {
              if (!snapshot.hasData) return const Text('loading...');

              return GridView.builder(
                  itemCount: snapshot.data.documents.length,
                  gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 5),
                  itemBuilder: (BuildContext context, int index) {
                    return InkWell(
                      child: CustommCell(
                          snapshot.data.documents[index].data['name']
                              .toString(),
                          snapshot.data.documents[index].data['imageURL']
                              .toString()),
                      onTap: () {
                        // if(globals.admin){
                          showDialog(
              context: context,
              builder: (ctxt) {
                return UpdateItemDialog(
                  itemSelected: snapshot.data.documents[index],
                );
              });

                        // }else{
                          // print("HOLAAAAA");


                        // }

                        // Navigator.push(
                        //   context,
                        //   MaterialPageRoute(builder: (context) => Dashboard()),
                        // );
                        // Navigator.replace(context, oldRoute:(context) => ItemVC(), newRoute: (context) =>Dashboard());
                        // showDialog(
                        //     context: context,
                        //     builder: (ctxt) {
                        //       // return UpdateItemDialog(
                        //       //     itemSelected: snapshot.data.documents[index]);
                        //       // return Dashboard();

                        //     });
                        // navigateToDetail(snapshot.data.documents[index]);
                      },
                    );
                  });
            }),
      )
    ]);
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
