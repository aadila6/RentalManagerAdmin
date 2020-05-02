import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/cardTiles.dart';
import 'package:RentalAdmin/views/inventory/item_page.dart';
import 'package:RentalAdmin/views/SuperUser/BarMenu.dart';
import 'package:RentalAdmin/views/SuperUser/AllItems.dart';
class InventoryManagement extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final _media = MediaQuery.of(context).size;
    // int selectedView
    print(_media);
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
          return Material(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                // ResponsiveWidget.isLargeScreen(context)
                    // SideBarMenu(),
                    // : Container(),
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
                      // ItemInvPage(),
                    ],
                  ),
                ),
              ],
            ),
          );
        //}
        return Container();
      },
    );
  }
}