define(['dart_sdk', 'packages/firebase_auth/firebase_auth', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__firebase_auth__firebase_auth, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const auth = Object.create(dart.library);
  const $toString = dartx.toString;
  const CT = Object.create(null);
  const errorCatch = dart.privateName(auth, "Auth.errorCatch");
  const auth$ = dart.privateName(auth, "Auth.auth");
  const userID = dart.privateName(auth, "Auth.userID");
  const isSignUp = dart.privateName(auth, "Auth.isSignUp");
  auth.Auth = class Auth extends core.Object {
    get errorCatch() {
      return this[errorCatch];
    }
    set errorCatch(value) {
      this[errorCatch] = value;
    }
    get auth() {
      return this[auth$];
    }
    set auth(value) {
      super.auth = value;
    }
    get userID() {
      return this[userID];
    }
    set userID(value) {
      this[userID] = value;
    }
    get isSignUp() {
      return this[isSignUp];
    }
    set isSignUp(value) {
      this[isSignUp] = value;
    }
    signIn(username, password) {
      return async.async(core.String, (function* signIn() {
        try {
          let user = (yield this.auth.signInWithEmailAndPassword({email: core.String._check(username), password: core.String._check(password)})).user;
          if (!(user != null)) dart.assertFailed(null, "org-dartlang-app:///packages/RentalAdmin/widgets/auth.dart", 18, 14, "user != null");
          if (!((yield user.getIdToken()) != null)) dart.assertFailed(null, "org-dartlang-app:///packages/RentalAdmin/widgets/auth.dart", 19, 14, "await user.getIdToken() != null");
          let currentUser = (yield this.auth.currentUser());
          if (dart.equals(currentUser.isEmailVerified, false)) {
            core.print("False!");
            return "false";
          }
          if (!(user.uid == currentUser.uid)) dart.assertFailed(null, "org-dartlang-app:///packages/RentalAdmin/widgets/auth.dart", 28, 14, "user.uid == currentUser.uid");
          return user.uid;
        } catch (e$) {
          let e = dart.getThrown(e$);
          return dart.toString(e);
        }
      }).bind(this));
    }
    signUp(email, password) {
      return async.async(core.String, (function* signUp() {
        let auth = firebase_auth.FirebaseAuth.instance;
        try {
          let authResult = (yield auth.createUserWithEmailAndPassword({email: core.String._check(email), password: core.String._check(password)}));
          let user = (yield auth.currentUser());
          user.sendEmailVerification();
          this.isSignUp = true;
          core.print("True here");
          user = authResult.user;
          this.userID = user.uid;
          return user.uid;
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print(e);
          this.userID = dart.toString(e);
          return dart.toString(e);
        }
      }).bind(this));
    }
    resetPassword(email) {
      return async.async(dart.void, (function* resetPassword() {
        yield this.auth.sendPasswordResetEmail({email: email});
      }).bind(this));
    }
  };
  (auth.Auth.new = function() {
    this[errorCatch] = null;
    this[auth$] = firebase_auth.FirebaseAuth.instance;
    this[userID] = "";
    this[isSignUp] = false;
    ;
  }).prototype = auth.Auth.prototype;
  dart.addTypeTests(auth.Auth);
  dart.setMethodSignature(auth.Auth, () => ({
    __proto__: dart.getMethods(auth.Auth.__proto__),
    signIn: dart.fnType(async.Future$(core.String), [dart.dynamic, dart.dynamic]),
    signUp: dart.fnType(async.Future$(core.String), [dart.dynamic, dart.dynamic]),
    resetPassword: dart.fnType(async.Future$(dart.void), [core.String])
  }));
  dart.setLibraryUri(auth.Auth, "package:RentalAdmin/widgets/auth.dart");
  dart.setFieldSignature(auth.Auth, () => ({
    __proto__: dart.getFields(auth.Auth.__proto__),
    errorCatch: dart.fieldType(message_codec.PlatformException),
    auth: dart.finalFieldType(firebase_auth.FirebaseAuth),
    userID: dart.fieldType(core.String),
    isSignUp: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/RentalAdmin/widgets/auth", {
    "package:RentalAdmin/widgets/auth.dart": auth
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAQoB;;;;;;IACC;;;;;;IACZ;;;;;;IACF;;;;;;WACiB,UAAS;AAAV;AACnB;AACe,qBAC6B,CADrB,MAAM,AAAK,gEACrB,QAAQ,gCAAY,QAAQ;AAEvC,gBAAO,AAAK,IAAD,IAAI;AACf,gBAA+B,CAAxB,MAAM,AAAK,IAAD,kBAAiB;AAEf,6BAAc,MAAM,AAAK;AAE5C,cAA+B,YAA5B,AAAY,WAAD,kBAAoB;AACjB,YAAf,WAAM;AACN,kBAAO;;AAGT,gBAAO,AAAK,AAAI,IAAL,QAAQ,AAAY,WAAD;AAC9B,gBAAO,AAAK,KAAD;;cACJ;AAEP,gBAAS,eAAF,CAAC;;MAGZ;;WAEsB,OAAO;AAAR;AACA,mBAAoB;AAEvC;AACa,4BAAa,MAAM,AAAK,IAAD,2DACvB,KAAK,gCAAY,QAAQ;AAChC,sBAAO,MAAM,AAAK,IAAD;AAEO,UAA5B,AAAK,IAAD;AACW,UAAf,gBAAW;AACO,UAAlB,WAAM;AACgB,UAAtB,OAAO,AAAW,UAAD;AACA,UAAjB,cAAS,AAAK,IAAD;AACb,gBAAO,AAAK,KAAD;;cACN;AAEG,UAAR,WAAM,CAAC;AACc,UAArB,cAAW,cAAF,CAAC;AACV,gBAAS,eAAF,CAAC;;MAEZ;;kBAEkC;AAAR;AACuB,QAA/C,MAAM,AAAK,yCAA8B,KAAK;MAChD;;;;IApDkB;IACC,cAAoB;IAChC,eAAS;IACX,iBAAW;;EAkDlB","file":"auth.ddc.js"}');
  // Exports:
  return {
    widgets__auth: auth
  };
});

//# sourceMappingURL=auth.ddc.js.map
