import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:RentalAdmin/views/globals.dart' as globals;
import 'package:RentalAdmin/views/SignUpDialog.dart';
import 'package:flutter/cupertino.dart';
class OrganizationSelection extends StatefulWidget {
  @override
  _OrganizationSelectionState createState() => _OrganizationSelectionState();
}
bool isNEW = false;
class _OrganizationSelectionState extends State<OrganizationSelection> {
  Future navigateToSignUp(String orgSelected, BuildContext context) {
    print("Selected the Organization: " + orgSelected);
    return Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SignUpPage(organization: orgSelected, isNew: isNEW),
      ),
    );
  }

  Future inputDialog(BuildContext context) {
    TextEditingController inputText = TextEditingController();
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Create New Organization'),
            content: TextField(
                decoration:
                    InputDecoration(hintText: 'enter organization name'),
                controller: inputText,
                keyboardType: TextInputType.text),
            actions: <Widget>[
              MaterialButton(
                color: Colors.blue,
                onPressed: () {
                  isNEW = true;
                  String noSpaceInput =
                      inputText.text.trim().replaceAll(' ', '');
                  String compateInput = noSpaceInput.toLowerCase();
                  List<String> toLowerList = [];
                  for (String s in globals.existingOrganizations) {
                    toLowerList.add(s.toLowerCase());
                  }
                  if (!toLowerList.contains(compateInput)) {
                    Navigator.of(context).pop(noSpaceInput);
                  } else {
                    // isNEW = true;
                    exisitDialog(context);
                  }
                },
                child: Text('add'),
                elevation: 0.0,
              )
            ],
          );
        });
  }

  Future addOrganization(String newOrganization) async {
    isNEW = true;
    await Firestore.instance
        .collection('organizations')
        .document()
        .setData({'name': newOrganization});
  }

  Future exisitDialog(BuildContext context) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text(
              'Error Message:',
              style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
            ),
            content: Text('the organization already exist.',
                style: TextStyle(fontWeight: FontWeight.bold)),
            actions: <Widget>[
              FlatButton(
                  onPressed: () => Navigator.of(context).pop(),
                  child:
                      Text('OK', style: TextStyle(fontWeight: FontWeight.bold)))
            ],
          );
        });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Select an oganization'),
        backgroundColor: Colors.teal,
        actions: <Widget>[
          IconButton(
            onPressed: () {
              showSearch(
                context: context,
                delegate: CustomSearchDelegate(),
              );
            },
            icon: Icon(Icons.search),
          ),
          IconButton(
            onPressed: () {
              inputDialog(context).then((newOrganization) async {
                isNEW = true;
                if (newOrganization != null && newOrganization != '') {
                  await addOrganization(newOrganization.toString());
                  navigateToSignUp(newOrganization.toString(), context);
                }
              });
            },
            icon: Icon(Icons.add),
          ),
        ],
      ),
      body: StreamBuilder(
          stream: Firestore.instance.collection('organizations').snapshots(),
          builder: (context, snapshot) {
           
              if (!snapshot.hasData) return CupertinoActivityIndicator();

            return ListView.builder(
              itemCount: snapshot.data.documents.length,
              itemBuilder: (context, index) => ListTile(
                // title: Text(results.length.toString()),
                title: Center(
                  child: Text(
                    snapshot.data.documents[index].data['name'].toString(),
                    style: TextStyle(fontSize: 20, color: Colors.teal),
                  ),
                ),
                onTap: () {
                  isNEW = false;
                  navigateToSignUp(
                      snapshot.data.documents[index].data['name'].toString(),
                      context);
                  // testingReservations(
                  //     snapshot.data.documents[index].documentID);
                },
              ),
            );
          }),
    );
  }
}

class CustomSearchDelegate extends SearchDelegate {
  Future navigateToSignUp(String orgSelected, BuildContext context) {
    return Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SignUpPage(organization: orgSelected),
      ),
    );
  }

  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: Icon(Icons.clear),
        onPressed: () {
          query = '';
        },
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        close(context, null);
      },
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return null;
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return StreamBuilder(
        stream: Firestore.instance.collection('organizations').snapshots(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return Center(child: Text('Loading...'));
          var results = snapshot.data.documents
              .where(
                (DocumentSnapshot doc) =>
                    doc.data['name'].toString().toLowerCase().contains(
                          query.trim().toLowerCase(),
                        ),
              )
              .toList();
          return ListView.builder(
            itemCount: results.length,
            itemBuilder: (context, index) => ListTile(
              // title: Text(results.length.toString()),
              title: Center(
                child: Text(
                  results[index]['name'].toString(),
                  style: TextStyle(fontSize: 20, color: Colors.blue),
                ),
              ),
              onTap: () =>
                  navigateToSignUp(results[index]['name'].toString(), context),
            ),
          );
        });
  }
}
