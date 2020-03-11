import 'package:cloud_firestore/cloud_firestore.dart' as MobFirebaseFirestore;
import 'package:firebase/firebase.dart' as WebFirebase;
import 'package:firebase/firestore.dart' as WebFirestore;
import 'package:firebase_auth/firebase_auth.dart' as MobFirebaseAuth;
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/foundation.dart';
import 'package:google_sign_in/google_sign_in.dart';

import '../main.dart';

MobFirebaseAuth.FirebaseUser firebaseUser;
WebFirebase.User webFirebaseUser;
//For storing user Profile info
Map<String, dynamic> userProfile = new Map();

//This is the main Firebase auth object
MobFirebaseAuth.FirebaseAuth mobAuth = MobFirebaseAuth.FirebaseAuth.instance;
WebFirebase.Auth webAuth = WebFirebase.auth();

// For google sign in
final GoogleSignIn mobGoogleSignIn = GoogleSignIn();
WebFirebase.GoogleAuthProvider webGoogleSignIn;

//CloudFireStore
MobFirebaseFirestore.Firestore dbFirestore = MobFirebaseFirestore.Firestore.instance;
WebFirestore.Firestore webFirestore = WebFirebase.firestore();

bool blIsSignedIn = false;

class AuthService {
  // constructor
  AuthService() {
    // checkIsSignedIn().then((_blIsSignedIn) {
    //   //redirect to appropriate screen
    //   // homeView();
    // });
    print("COnstructor of AUTH is called");
  }

  //Checks if the user has signed in
  Future<bool> checkIsSignedIn() async {
      //For web
      if (webAuth != null) {
        webFirebaseUser = await webAuth.onAuthStateChanged.first;
        print(webFirebaseUser);

        if (webFirebaseUser != null) {
          //User is already logged in
          blIsSignedIn = true;
        } else {
          blIsSignedIn = false;
        }
      } else {
        blIsSignedIn = false;
      }
    
    return blIsSignedIn;
  }

  //Log in using google
  Future<dynamic> googleSignIn() async {
    
      //For web
      var provider = new WebFirebase.GoogleAuthProvider();
      try {
        WebFirebase.UserCredential _userCredential = await webAuth.signInWithPopup(provider);
        webFirebaseUser = _userCredential.user;
      } catch (e) {
        webFirebaseUser = null;
        print("Error in sign in with google: $e");
      }
      return webFirebaseUser;
    
  }

  //Gets the userData
  getData() async {
    
      //For Web
      webFirestore.collection("Master").doc(webFirebaseUser.email).onSnapshot.listen((snapshot) {
        if (snapshot.data != null) {
          userProfile = snapshot.data();
        }
      });
    
  }
  

  //Update the data into the database
  Future<bool> setData() async {
    bool blReturn = false;
    if (!kIsWeb) {
      //For mobile
      await dbFirestore
          .collection('Master')
          .document(firebaseUser.email)
          .setData(userProfile, merge: false)
          .then((onValue) async {
        blReturn = true;
      });
    } else {
      //For Web
//      WebFirestore.SetOptions options;
      await webFirestore.collection('Master').doc(webFirebaseUser.email).set(userProfile).then((onValue) async {
        blReturn = true;
      });
    }
    return blReturn;
  }

  void signOut() {
    if (!kIsWeb) {
      //For mobile
      mobAuth.signOut();
    } else {
      //For web
      webAuth.signOut();
    }
  }
}
