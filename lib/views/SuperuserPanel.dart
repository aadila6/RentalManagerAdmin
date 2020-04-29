import 'package:flutter/material.dart';
import 'SuperuserViews/inventoryView.dart';

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
    Tab(child:SuperuserInventoryView()),
    Tab(text: 'RIGHT'),
  ];

  @override
  void initState() {
    super.initState();
    tabController = TabController(vsync: this, length: myTabs.length);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Rental Manager Admin"),
      ),
      body: Row(children: [
        sideMenu(this, tabController),
        Flexible(
            flex: 5,
            child: TabBarView(
              physics: NeverScrollableScrollPhysics(),
                controller: tabController,
                children: myTabs
                ))
      ]),
    );
  }
}

Widget sideMenu(self, tabController) {
  return Flexible(
      child: ListView(
    shrinkWrap: true,
    children: <Widget>[
      ListTile(
        leading: Icon(Icons.list),
        title: Text('Items'),
        selected: tabController.index == 0 ? true : false,
        onTap: () {
          tabController.animateTo(0);
          self.setState(() {});
        },
      ),
      ListTile(
        leading: Icon(Icons.people),
        title: Text('Users'),
        selected: tabController.index == 1 ? true : false,
        onTap: () {
          tabController.animateTo(1);
          self.setState(() {});
        },
      ),
    ],
  ));
}
