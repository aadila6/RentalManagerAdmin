library my_prj.globals;
import 'dart:collection';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';


String uid = '';
String username = 'Xu Liu';
String email = '';
String phoneNumber = '530-xxx-xxxx';
String userImageUrl = '';
// String collectionName = 'TestModeNew';
String organization = '';
String reservation_global = organization + '_reservations';
String items_global = organization + 'items';
bool admin = false;
String rentalID = '';
String userLoginID = '';
String locations = '';
String locationManager = '';
// String existingOrganizations = '';
List<String> existingOrganizations = [];
List<String> existingLocations = ['Select a Location'];
List<String> categories = ['Select a Category'];