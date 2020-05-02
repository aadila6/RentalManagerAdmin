import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/cardTiles.dart';
import 'package:RentalAdmin/views/SuperUser/BarMenu.dart';
import 'package:RentalAdmin/views/SuperUser/currentDash.dart';

class MainPage extends StatelessWidget {
  // final GlobalKey<SideBarMenu> _myWidgetState = GlobalKey<SideBarMenu>();
  // GlobalKey<_SideBarMenuState> _keyChild1 = GlobalKey();
  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    // int selectedView = 0;
    // print(_media);
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
                          'Rental Manager Admin ',
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
                                            mainText: '5',
                                          ),
                                          SizedBox(width: 20),
                                          CardTile(
                                            iconBgColor: Colors.red,
                                            cardTitle: 'Damaged',
                                            icon: Icons.bug_report,
                                            subText:
                                                'Items needs attention',
                                            mainText: '0',
                                          ),
                                          SizedBox(width: 20),
                                          CardTile(
                                            iconBgColor: Colors.green,
                                            cardTitle: 'Inventory',
                                            icon: Icons.home,
                                            subText: 'Total Number of Items',
                                            mainText: '50',
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
                                ActivityWidget(media: _media),
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
