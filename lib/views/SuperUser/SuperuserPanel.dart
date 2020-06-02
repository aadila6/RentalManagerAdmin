import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/SuperLanding.dart';
import 'package:RentalAdmin/views/signInScreen.dart';
import 'package:RentalAdmin/views/SuperUser/menu.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/UserManagement.dart';
import 'package:RentalAdmin/views/SuperUser/InventoryVC/TestInventory.dart';
import 'package:RentalAdmin/views/SuperUser/ProfileDialog.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;

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
    Tab(child: FirstTab()),
    Tab(child: SuperUserMgtView()),
  ];

  @override
  void initState() {
    super.initState();
    if(globals.admin== false) {
      myTabs.removeAt(2);
    }
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
                SizedBox(
                  height: 20,
                ),
                CircleAvatar(
                    radius: 30,
                    backgroundImage: NetworkImage(globals.userImageUrl)),
                SizedBox(
                  height: 10,
                ),
                Text(
                  globals.username,
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
                      borderRadius: BorderRadius.all(Radius.circular(20.0))),
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
          )]+List.generate(myTabs.length, (i){
            return ListTile(
              leading: Icon(menuItems[i].icon, size: 40),
              title: Text(menuItems[i].title, style: menuListTileDefaultText),
              selected: tabController.index == i ? true : false,
              onTap: () {
                tabController.animateTo(i);
                setState(() {});
              },
            );
          })+ <Widget>[
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
        ]
      ),
    );
  }

  static Signout(BuildContext context) {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => signInScreen()));
  }
}
