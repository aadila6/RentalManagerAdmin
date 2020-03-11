
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


class listOfInventory extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
            backgroundColor: Colors.teal,
            title: new Text(
              "Reservations",
              style: TextStyle(
              color: Colors.white,
              ),
            ),),
        backgroundColor: Colors.teal.shade100,
        body: GridView.count(
          // Create a grid with 2 columns. If you change the scrollDirection to
          // horizontal, this produces 2 rows.
          crossAxisCount: 5,
          // Generate 100 widgets that display their index in the List.
          children: List.generate(5, (index) {
            return Center(
              child: MaterialButton(
                color: Colors.white,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(20.0))),
                onPressed: () {},
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                      vertical: 20.0, horizontal: 40.0),
                  child: Text(
                    "$index",
                    style: TextStyle(color: Colors.red),
                  ),
                ),
              ),
            );
          }),
        ),
      );
  }
}