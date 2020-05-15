import 'package:flutter/material.dart';

class Menu {
  String title;
  IconData icon;
  Menu({this.title, this.icon});
}

List<Menu> menuItems = [
  Menu(title: 'Dashboard', icon: Icons.dashboard),
  Menu(title: 'Item Management', icon: Icons.web),
  Menu(title: 'Users', icon: Icons.supervised_user_circle),
 
  Menu(title: 'Sign Out', icon: Icons.exit_to_app),
];