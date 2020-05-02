// import 'package:flutter/material.dart';
// import 'package:RentalAdmin/views/SuperUser/menu.dart';
// import 'package:RentalAdmin/views/SuperUser/theme.dart';
// import 'package:RentalAdmin/views/SuperUser/menu_tile.dart';
// import 'package:RentalAdmin/views/SuperUser/SuperInventory.dart';

// class SideBarMenu extends StatefulWidget {
 
//   @override
//   _SideBarMenuState createState() => _SideBarMenuState();
// }



// class _SideBarMenuState extends State<SideBarMenu>
//     with SingleTickerProviderStateMixin {
//   double maxWidth = 250;
//   double minWidgth = 70;
//   bool collapsed = false;
//   int selectedIndex = 0;

//   AnimationController _animationController;
//   Animation<double> _animation;

//   @override
//   void initState() {
//     super.initState();
//     _animationController =
//         AnimationController(vsync: this, duration: Duration(milliseconds: 100));

//     _animation = Tween<double>(begin: maxWidth, end: minWidgth)
//         .animate(_animationController);
//   }

//   @override
//   Widget build(BuildContext context) {
//     return AnimatedBuilder(
//       animation: _animation,
//       builder: (BuildContext context, Widget child) {
//         return Container(
//           decoration: BoxDecoration(
//             boxShadow: [
//               BoxShadow(blurRadius: 10, color: Colors.black26, spreadRadius: 2)
//             ],
//             color: drawerBgColor,
//           ),
//           width: _animation.value,
//           child:  Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             crossAxisAlignment: CrossAxisAlignment.center,
//             children: <Widget>[
//               Container(
//                 height: 200,
//                 decoration: BoxDecoration(
//                     color: Colors.grey.shade300,
//                     image: DecorationImage(
//                       image: NetworkImage(
//                         'https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/location_images%2Farc.png?alt=media&token=c28ecf55-9980-4b02-8cba-84a955aa2c63'
//                           ),
//                       fit: BoxFit.cover,
//                     )),
                
//               ),
//               SizedBox(
//                 height: 80,
//               ),
//               Expanded(
//                 child: ListView.separated(
//                   separatorBuilder: (context, counter) {
//                     return Divider(
//                       height: 2,
//                     );
//                   },
//                   itemCount: menuItems.length,
//                   itemBuilder: (BuildContext context, int index) {
//                     return MenuItemTile(
//                       title: menuItems[index].title,
//                       icon: menuItems[index].icon,
//                       animationController: _animationController,
//                       isSelected: selectedIndex == index,
//                       onTap: () {
//                         setState(() {
//                           selectedIndex = index;
//                           if(selectedIndex == 0){
//                             print("One Pressed");
                             

//                           }else if(selectedIndex == 1){
//                             print("Two Pressed");

//                           }else if(selectedIndex==2){
//                             print("Three Pressed");

//                           }
//                         });
//                       },
//                     );
//                   },
//                 ),
//               ),
//               InkWell(
//                 onTap: () {
//                   setState(() {
//                     collapsed = !collapsed;
//                     collapsed
//                         ? _animationController.reverse()
//                         : _animationController.forward();
//                   });
//                 },
//                 child: AnimatedIcon(
//                   icon: AnimatedIcons.close_menu,
//                   progress: _animationController,
//                   color: Colors.white,
//                   size: 40,
//                 ),
//               ),
//               SizedBox(
//                 height: 20,
//               )
//             ],
//           ),
//         );
//       },
//     );
//   }
// }