import 'dart:async';
import 'dart:convert';
import 'dart:html';

import 'package:flutter/material.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:universal_html/prefer_universal/html.dart' as html;
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:csv/csv.dart';

class ImportCSVDialog extends StatefulWidget {
  @override
  _ImportCSVDialogState createState() => _ImportCSVDialogState();
}

class _ImportCSVDialogState extends State<ImportCSVDialog> {
  File image;
  Future<String> getFile() {
    final completer = new Completer<String>();
    final InputElement input = document.createElement('input');
    input.type = 'file';
    input.onChange.listen((e) async {
      final List<File> files = input.files;
      final reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onError.listen((error) => completer.completeError(error));
      await reader.onLoad.first;
      completer.complete(reader.result as String);
    });
    input.click();
    return completer.future;
  }

  String _itemName;
  String _itemCount;
  String defaultURL =
      "https://firebasestorage.googleapis.com/v0/b/rentalmanager-f94f1.appspot.com/o/images%2F1588472194089?alt=media&token=d529dcfc-4f5d-4f3f-9de3-54d9f441408b";
  var batch = Firestore.instance.batch();
  List<List<dynamic>> rows;
  @override
  Widget build(BuildContext context) {
    return Dialog(
        child: Container(
          width: 768,
          child:Column(
          mainAxisSize: MainAxisSize.min,
          children: [
          Row(children:[RaisedButton(
            onPressed: () {
              var collection = Firestore.instance.collection(globals.items_global);

              var csvFuture = getFile();
              csvFuture.then((value) {
                print(value);
                rows = const CsvToListConverter().convert(value);
                print(rows);
                for (var r in rows) {
                  var docRef = collection.document();
                  batch.setData(docRef, {
                    'Category': "sport",
                    'isAvaliable': "true",
                    'name': r[0],
                    'amount': r[1],
                    'imageURL': r.length>3?r[2]:defaultURL
                  });
                }
                setState(() {});
              });
            },
            child: Text("Select CSV File")
          )]
          ),
          Table(
            children: <TableRow>[TableRow(children: [Text("Name"),Text("Amount")])]+(rows==null?[]:rows.map<TableRow>(
              (e) => TableRow(children: [Text(e[0]),Text(e[1].toString())])
            ).toList())
          ),
          RaisedButton(
            child: Text("Confirm & Upload"),
            onPressed: () {
            batch.commit().then((value) {
              print("Commited ${rows.length} items!");
              Navigator.of(context).pop();
            });
          },)
    ])));
  }
}
