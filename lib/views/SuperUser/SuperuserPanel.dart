import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/SuperUser/inventoryView.dart';
import 'package:RentalAdmin/views/SuperUser/SuperLanding.dart';
import 'package:RentalAdmin/views/signInScreen.dart';
import 'package:RentalAdmin/views/SuperUser/menu.dart';
import 'package:RentalAdmin/views/SuperUser/theme.dart';
import 'package:RentalAdmin/views/SuperUser/UserManagement.dart';

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

  // Widget sideMenu(self, tabController) {
  //   return Flexible(
  //       child: ListView(
  //     shrinkWrap: true,
  //     children: <Widget>[
  //       ListTile(
  //         leading: Icon(Icons.list),
  //         title: Text('Items'),
  //         selected: tabController.index == 0 ? true : false,
  //         onTap: () {
  //           tabController.animateTo(0);
  //           self.setState(() {});
  //         },
  //       ),
  //       ListTile(
  //         leading: Icon(Icons.people),
  //         title: Text('Users'),
  //         selected: tabController.index == 1 ? true : false,
  //         onTap: () {
  //           tabController.animateTo(1);
  //           self.setState(() {});
  //         },
  //       ),

  //     ],
  //   ));
  // }

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
                color: Colors.grey.shade300,
                image: DecorationImage(
                  image: NetworkImage(
                      'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/location_images%2Farc.png?alt=media&token=c28ecf55-9980-4b02-8cba-84a955aa2c63'),
                  fit: BoxFit.cover,
                )),
          ),
          SizedBox(
            height: 80,
          ),
          ListTile(
            leading: Icon(menuItems[0].icon,size: 40),
            title: Text(menuItems[0].title,style: menuListTileDefaultText),
            selected: tabController.index == 0 ? true : false,
            onTap: () {
              tabController.animateTo(0);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(menuItems[1].icon,size: 40),
            title: Text(menuItems[1].title,style: menuListTileDefaultText),
            selected: tabController.index == 1 ? true : false,
            onTap: () {
              tabController.animateTo(1);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(menuItems[2].icon,size: 40),
            title: Text(
              menuItems[2].title,
              style: menuListTileDefaultText),
            selected: tabController.index == 2 ? true : false,
            onTap: () {
              tabController.animateTo(2);
              setState(() {});
            },
          ),
          ListTile(
            leading: Icon(menuItems[3].icon,size: 40,),
            title: Text(menuItems[3].title,style: menuListTileDefaultText),
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
