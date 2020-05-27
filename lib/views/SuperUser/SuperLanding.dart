import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/cardTiles.dart';
import 'package:RentalAdmin/views/SuperUser/currentDash.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:RentalAdmin/views/SuperUser/ProfileDialog.dart';

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}
String numTotalInventory = '0';
class _DashboardState extends State<Dashboard> {
  String numUsedToday = '0';
  // numTotalInventory = '0';
  // String numDamaged = '0';

  Future countDocuments() async {
    QuerySnapshot _myDoc = await Firestore.instance
        .collection(globals.items_global)
        .getDocuments();
    List<DocumentSnapshot> _myDocCount = _myDoc.documents;
    numTotalInventory = _myDocCount.length.toString();
    // print(globals.items_global);
    print(numTotalInventory); // Count of Documents in Collection
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    countDocuments();
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        return Material(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              // SideBarMenu(),
              Flexible(
                fit: FlexFit.loose,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    SizedBox(
                      height: 55,
                      width: _media.width,
                      child: AppBar(
                        elevation: 4,
                        centerTitle: true,
                        title: Text(
                          'Rental Manager Admin - ' + globals.organization,
                        ),
                        backgroundColor: drawerBgColor,
                      ),
                    ),
                    Expanded(
                      child: ListView(
                        padding: EdgeInsets.only(
                            top: 20, left: 20, right: 20, bottom: 20),
                        children: <Widget>[
                          IntrinsicHeight(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Column(
                                  children: <Widget>[
                                    IntrinsicHeight(
                                      child: Row(
                                        mainAxisAlignment:
                                            MainAxisAlignment.start,
                                        crossAxisAlignment:
                                            CrossAxisAlignment.stretch,
                                        children: <Widget>[
                                          CardTile(
                                            iconBgColor: Colors.orange,
                                            cardTitle: 'Todays',
                                            icon: Icons.data_usage,
                                            subText: 'Items Usage',
                                            mainText: numUsedToday,
                                          ),
                                          SizedBox(width: 20),
                                          CardTile(
                                            iconBgColor: Colors.green,
                                            cardTitle: 'Inventory',
                                            icon: Icons.home,
                                            subText: 'Total Number of Items',
                                            mainText: numTotalInventory,
                                          ),
                                          SizedBox(width: 20),
                                        ],
                                      ),
                                    ),
                                    SizedBox(
                                      height: 20,
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          IntrinsicHeight(
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: <Widget>[
                                ActivityWidget(),
                                SizedBox(
                                  width: 20,
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: 20),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
        //}
        // return Container();
      },
    );
  }
}
