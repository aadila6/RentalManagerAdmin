import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'newItemDialog.dart';


class SuperUserMgtView extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperUserMgtViewState();
  }
}

class SuperUserMgtViewState extends State<SuperUserMgtView> {
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
            'Rental Manager Admin ',
          ),
          backgroundColor: drawerBgColor,
        ),
      ),
      MaterialButton(
        color: Colors.teal,
        shape: new RoundedRectangleBorder(
            // borderRadius: new BorderRadius.circular(18.0),
            side: BorderSide(color: Colors.white)),
        onPressed: () {
          showDialog(
              context: context,
              builder: (ctxt) {
                return NewItemDialog();
              });
        },
        child: Text(
          "Add User Permissions",
          style: TextStyle(color: Colors.white),
        ),
      ),
      // Expanded(
      //   child:
      //       // StreamBuilder(
      //       //     stream: Firestore.instance.collection('user').snapshots(),
      //       //     builder: (context, snapshot) {
      //       //       if (!snapshot.hasData) return const Text('loading...');
      //       //       print("SUCCESS!!!!");
      //       //       return ListView.builder(
      //       //         itemExtent: 25.0,
      //       //         itemCount: snapshot.data.documents.length,
      //       //         itemBuilder: (BuildContext context, int index) => ListTile(
      //       //           title: Text(
      //       //               snapshot.data.documents[index].data['name'].toString()),
      //       //           subtitle: Text(
      //       //               'UId: ${snapshot.data.documents[index].data['uid'].toString()}'),
      //       //           onTap: () {
      //       //            
      //       //           },
      //       //         ),
      //       //       );
      //       //     }),
            
      // )

      
    ]);
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


