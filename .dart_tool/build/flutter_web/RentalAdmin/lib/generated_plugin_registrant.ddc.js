define(['dart_sdk', 'packages/cloud_firestore_web/cloud_firestore_web', 'packages/firebase_auth_web/firebase_auth_web', 'packages/firebase_core_web/firebase_core_web', 'packages/google_sign_in_web/google_sign_in_web'], function(dart_sdk, packages__cloud_firestore_web__cloud_firestore_web, packages__firebase_auth_web__firebase_auth_web, packages__firebase_core_web__firebase_core_web, packages__google_sign_in_web__google_sign_in_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cloud_firestore_web = packages__cloud_firestore_web__cloud_firestore_web.cloud_firestore_web;
  const firebase_auth_web = packages__firebase_auth_web__firebase_auth_web.firebase_auth_web;
  const firebase_core_web = packages__firebase_core_web__firebase_core_web.firebase_core_web;
  const google_sign_in_web = packages__google_sign_in_web__google_sign_in_web.google_sign_in_web;
  const generated_plugin_registrant = Object.create(dart.library);
  const CT = Object.create(null);
  generated_plugin_registrant.registerPlugins = function registerPlugins(registry) {
    cloud_firestore_web.FirestoreWeb.registerWith(registry.registrarFor(dart.wrapType(cloud_firestore_web.FirestoreWeb)));
    firebase_auth_web.FirebaseAuthWeb.registerWith(registry.registrarFor(dart.wrapType(firebase_auth_web.FirebaseAuthWeb)));
    firebase_core_web.FirebaseCoreWeb.registerWith(registry.registrarFor(dart.wrapType(firebase_core_web.FirebaseCoreWeb)));
    google_sign_in_web.GoogleSignInPlugin.registerWith(registry.registrarFor(dart.wrapType(google_sign_in_web.GoogleSignInPlugin)));
    registry.registerMessageHandler();
  };
  dart.trackLibraries("packages/RentalAdmin/generated_plugin_registrant", {
    "package:RentalAdmin/generated_plugin_registrant.dart": generated_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["generated_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;yEAcoC;AAC4B,IAAjD,8CAAa,AAAS,QAAD,cAAc;AACoB,IAApD,+CAAa,AAAS,QAAD,cAAc;AACiB,IAApD,+CAAa,AAAS,QAAD,cAAc;AACuB,IAAvD,mDAAa,AAAS,QAAD,cAAc;AACrB,IAAjC,AAAS,QAAD;EACV","file":"generated_plugin_registrant.ddc.js"}');
  // Exports:
  return {
    generated_plugin_registrant: generated_plugin_registrant
  };
});

//# sourceMappingURL=generated_plugin_registrant.ddc.js.map
