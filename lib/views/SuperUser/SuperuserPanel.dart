import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/inventoryView.dart';
import 'package:RentalAdmin/views/SuperUser/SuperLanding.dart';
import 'package:RentalAdmin/views/signInScreen.dart';
import 'package:RentalAdmin/views/SuperUser/menu.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/UserManagement.dart';
import 'package:RentalAdmin/views/SuperUser/ProfileDialog.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:cloud_firestore/cloud_firestore.dart';

// import 'package:RentalAdmin/views/SuperUser/theme.dart';
class SuperuserPanel extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return SuperuserPanelState();
  }
}

class SuperuserPanelState extends State<SuperuserPanel>
    with SingleTickerProviderStateMixin {
  TabController tabController;
  final List<Tab> myTabs = <Tab>[
    Tab(child: Dashboard()),
    Tab(child: SuperuserInventoryView()),
    Tab(child: SuperUserMgtView()),
    // Tab(child: ListPage()),
    // Tab(child: ),
  ];

  @override
  void initState() {
    super.initState();
    tabController = TabController(vsync: this, length: myTabs.length);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(children: [
        // sideMenu(this, tabController),
        sideMenus(tabController),
        Flexible(
            flex: 5,
            child: TabBarView(
                physics: NeverScrollableScrollPhysics(),
                controller: tabController,
                children: myTabs))
      ]),
    );
  }
  
  Widget sideMenus(tabController) {
    return Container(
      decoration: BoxDecoration(
        boxShadow: [
          BoxShadow(blurRadius: 10, color: Colors.black26, spreadRadius: 2)
        ],
        color: drawerBgColor,
      ),
      width: 250,
      child: Column(
        children: <Widget>[
          Container(
            height: 200,
            decoration: BoxDecoration(
              color: drawerBgColor,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                 SizedBox(height: 20,),
                CircleAvatar(
                    radius: 30,
                    backgroundImage:
                        NetworkImage(globals.userImageUrl)),
                        SizedBox(height: 10,),
                Text(globals.username,
                   style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 15,
                  color: Colors.teal.shade100,
                  fontWeight: FontWeight.bold,
                ),
                    ),
                     MaterialButton(
                                      color: Colors.teal,
                                      shape: RoundedRectangleBorder(
                                          borderRadius: BorderRadius.all(
                                              Radius.circular(20.0))),
                                      onPressed: () {
                                        print("Clicked Update Profile");
                                        showDialog(
                                            context: context,
                                            builder: (ctxt) {
                                              return UpdateProfile();
                                            });
                                      },
                                      child: Padding(
                                        padding: const EdgeInsets.symmetric(
                                            vertical: 3.0, horizontal: 3.0),
                                        child: Text(
                                          "Update My Profile",
                                          style: TextStyle(
                                              fontSize: 10,
                                              color: Colors.white,
                                              fontWeight: FontWeight.w100),
                                        ),
                                      ),
                                    ),

              ],
            ),
          ),
          // SizedBox(
          //   height: 40,
          // ),
          ListTile(
            leading: Icon(menuItems[0].icon, size: 40),
            title: Text(menuItems[0].title, style: menuListTileDefaultText),
            selected: tabController.index == 0 ? true : false,
            onTap: () {
              tabController.animateTo(0);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(menuItems[1].icon, size: 40),
            title: Text(menuItems[1].title, style: menuListTileDefaultText),
            selected: tabController.index == 1 ? true : false,
            onTap: () {
              tabController.animateTo(1);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(menuItems[2].icon, size: 40),
            title: Text(menuItems[2].title, style: menuListTileDefaultText),
            selected: tabController.index == 2 ? true : false,
            onTap: () {
              tabController.animateTo(2);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(
              menuItems[3].icon,
              size: 40,
            ),
            title: Text(menuItems[3].title, style: menuListTileDefaultText),
            selected: tabController.index == 3 ? true : false,
            onTap: () {
              // tabController.animateTo(3);
              Signout(context);
              setState(() {});
            },
          ),
        ],
      ),
    );
  }

  static Signout(BuildContext context) {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => signInScreen()));
  }
}
