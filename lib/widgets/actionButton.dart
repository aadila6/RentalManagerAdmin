import 'package:flutter/material.dart';

class ReservationListView extends StatelessWidget {
   final String title;
    ReservationListView(this.title);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 60, vertical: 15),
      child: Text(
        title,
        style: TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w800,
          color: Colors.black,
      ),
    ),

    );
  }
}