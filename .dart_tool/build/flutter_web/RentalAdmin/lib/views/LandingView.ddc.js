define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/RentalAdmin/widgets/centerer', 'packages/RentalAdmin/widgets/testlist', 'packages/flutter/src/rendering/animated_size', 'packages/google_sign_in/google_sign_in', 'packages/firebase_auth/firebase_auth', 'packages/RentalAdmin/widgets/auth', 'packages/cloud_firestore/cloud_firestore', 'packages/RentalAdmin/widgets/actionButton'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__RentalAdmin__widgets__centerer, packages__RentalAdmin__widgets__testlist, packages__flutter__src__rendering__animated_size, packages__google_sign_in__google_sign_in, packages__firebase_auth__firebase_auth, packages__RentalAdmin__widgets__auth, packages__cloud_firestore__cloud_firestore, packages__RentalAdmin__widgets__actionButton) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const page = packages__flutter__material.src__material__page;
  const app = packages__flutter__material.src__material__app;
  const divider = packages__flutter__material.src__material__divider;
  const input_border = packages__flutter__material.src__material__input_border;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const centerer = packages__RentalAdmin__widgets__centerer.widgets__centerer;
  const testlist = packages__RentalAdmin__widgets__testlist.widgets__testlist;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const google_sign_in = packages__google_sign_in__google_sign_in.google_sign_in;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const auth = packages__RentalAdmin__widgets__auth.widgets__auth;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const actionButton = packages__RentalAdmin__widgets__actionButton.widgets__actionButton;
  const LandingView = Object.create(dart.library);
  const ReservationView = Object.create(dart.library);
  const navigation = Object.create(dart.library);
  const signInScreen = Object.create(dart.library);
  const homeView = Object.create(dart.library);
  const chatBoxView = Object.create(dart.library);
  const $contains = dartx.contains;
  const $split = dartx.split;
  const $_get = dartx._get;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let BuildContextToReservationListPage = () => (BuildContextToReservationListPage = dart.constFn(dart.fnType(testlist.ReservationListPage, [framework.BuildContext])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(homeView.HomeView, [framework.BuildContext])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let BuildContextToSignUpPage = () => (BuildContextToSignUpPage = dart.constFn(dart.fnType(signInScreen.SignUpPage, [framework.BuildContext])))();
  let BuildContextToResetPassword = () => (BuildContextToResetPassword = dart.constFn(dart.fnType(signInScreen.ResetPassword, [framework.BuildContext])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let BuildContextAndintToDivider = () => (BuildContextAndintToDivider = dart.constFn(dart.fnType(divider.Divider, [framework.BuildContext, core.int])))();
  let BuildContextAndintToPadding = () => (BuildContextAndintToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext, core.int])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 25,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 25,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 25,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 40,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 40
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/LandingView.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C60() {
      return C60 = dart.constList([], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 85,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 100
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C132 || CT.C132,
        [BorderRadius_bottomLeft]: C132 || CT.C132,
        [BorderRadius_topRight]: C132 || CT.C132,
        [BorderRadius_topLeft]: C132 || CT.C132
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C134 || CT.C134,
        [Icon_size]: null,
        [Icon_icon]: C135 || CT.C135
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59543
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C134 || CT.C134,
        [Icon_size]: null,
        [Icon_icon]: C151 || CT.C151
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 238,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199], widget_inspector._Location);
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208, C209 || CT.C209, C210 || CT.C210, C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 29,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228, C229 || CT.C229], widget_inspector._Location);
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236], widget_inspector._Location);
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C241() {
      return C241 = dart.constList([C242 || CT.C242, C243 || CT.C243], widget_inspector._Location);
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C241 || CT.C241,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247, C248 || CT.C248, C249 || CT.C249, C250 || CT.C250, C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255, C256 || CT.C256, C257 || CT.C257], widget_inspector._Location);
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264, C265 || CT.C265], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C263 || CT.C263,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.constList([C268 || CT.C268], widget_inspector._Location);
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C267 || CT.C267,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.constList([C271 || CT.C271, C272 || CT.C272], widget_inspector._Location);
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C270 || CT.C270,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275], widget_inspector._Location);
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 365,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279, C280 || CT.C280], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C278 || CT.C278,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.constList([C283 || CT.C283, C284 || CT.C284], widget_inspector._Location);
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C282 || CT.C282,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287, C288 || CT.C288], widget_inspector._Location);
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C286 || CT.C286,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291], widget_inspector._Location);
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 396,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299, C300 || CT.C300], widget_inspector._Location);
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C298 || CT.C298,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 391,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303], widget_inspector._Location);
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C302 || CT.C302,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.constList([C306 || CT.C306], widget_inspector._Location);
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C305 || CT.C305,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 387,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C308 || CT.C308,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312, C313 || CT.C313], widget_inspector._Location);
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C311 || CT.C311,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C315 || CT.C315,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.constList([C319 || CT.C319, C320 || CT.C320], widget_inspector._Location);
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C318 || CT.C318,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C325() {
      return C325 = dart.constList([C326 || CT.C326], widget_inspector._Location);
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C325 || CT.C325,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 434,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.constList([C329 || CT.C329, C330 || CT.C330], widget_inspector._Location);
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C328 || CT.C328,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 437,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333, C334 || CT.C334], widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C332 || CT.C332,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 436,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338, C339 || CT.C339], widget_inspector._Location);
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C341() {
      return C341 = dart.constList([C342 || CT.C342, C343 || CT.C343], widget_inspector._Location);
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C341 || CT.C341,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 445,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347], widget_inspector._Location);
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C345 || CT.C345,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 446,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350, C351 || CT.C351], widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 455,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354, C355 || CT.C355], widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.constList([C358 || CT.C358], widget_inspector._Location);
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C357 || CT.C357,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 467,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.constList([C361 || CT.C361, C362 || CT.C362, C363 || CT.C363], widget_inspector._Location);
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C360 || CT.C360,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C365() {
      return C365 = dart.constList([C366 || CT.C366, C367 || CT.C367], widget_inspector._Location);
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C365 || CT.C365,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 30
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C134 || CT.C134,
        [Icon_size]: null,
        [Icon_icon]: C370 || CT.C370
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 476,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 17,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 17,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.constList([C373 || CT.C373, C374 || CT.C374, C375 || CT.C375, C376 || CT.C376], widget_inspector._Location);
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C372 || CT.C372,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 475,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 475,
        [_Location_file]: null
      });
    },
    get C378() {
      return C378 = dart.constList([C379 || CT.C379, C380 || CT.C380], widget_inspector._Location);
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C378 || CT.C378,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.constList([C383 || CT.C383, C384 || CT.C384], widget_inspector._Location);
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C382 || CT.C382,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 501,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 504,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.constList([C387 || CT.C387], widget_inspector._Location);
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C386 || CT.C386,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 503,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390, C391 || CT.C391], widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 523,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 523,
        [_Location_file]: null
      });
    },
    get C393() {
      return C393 = dart.constList([C394 || CT.C394], widget_inspector._Location);
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C393 || CT.C393,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 522,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397, C398 || CT.C398], widget_inspector._Location);
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C396 || CT.C396,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 519,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 535,
        [_Location_file]: null
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 536,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C400() {
      return C400 = dart.constList([C401 || CT.C401, C402 || CT.C402, C403 || CT.C403, C404 || CT.C404, C405 || CT.C405, C406 || CT.C406, C407 || CT.C407, C408 || CT.C408, C409 || CT.C409, C410 || CT.C410, C411 || CT.C411], widget_inspector._Location);
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C400 || CT.C400,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 511,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 511,
        [_Location_file]: null
      });
    },
    get C413() {
      return C413 = dart.constList([C414 || CT.C414, C415 || CT.C415], widget_inspector._Location);
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C413 || CT.C413,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 509,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 507,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C417() {
      return C417 = dart.constList([C418 || CT.C418, C419 || CT.C419], widget_inspector._Location);
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C417 || CT.C417,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 506,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C421() {
      return C421 = dart.constList([C422 || CT.C422], widget_inspector._Location);
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C421 || CT.C421,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 544,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.constList([C425 || CT.C425], widget_inspector._Location);
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C424 || CT.C424,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 443,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C427() {
      return C427 = dart.constList([C428 || CT.C428], widget_inspector._Location);
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C427 || CT.C427,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 442,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C430() {
      return C430 = dart.constList([C431 || CT.C431, C432 || CT.C432, C433 || CT.C433], widget_inspector._Location);
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C430 || CT.C430,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C435() {
      return C435 = dart.constList([C436 || CT.C436], widget_inspector._Location);
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C435 || CT.C435,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 431,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C438() {
      return C438 = dart.constList([C439 || CT.C439], widget_inspector._Location);
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C438 || CT.C438,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 613,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.constList([C442 || CT.C442, C443 || CT.C443], widget_inspector._Location);
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C441 || CT.C441,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 612,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 50,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 50
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 628,
        [_Location_file]: null
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.constList([C447 || CT.C447, C448 || CT.C448, C449 || CT.C449, C450 || CT.C450], widget_inspector._Location);
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C446 || CT.C446,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 622,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.constList([C453 || CT.C453, C454 || CT.C454], widget_inspector._Location);
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C452 || CT.C452,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.constList([C457 || CT.C457], widget_inspector._Location);
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C456 || CT.C456,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 659,
        [_Location_file]: null
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.constList([C460 || CT.C460, C461 || CT.C461, C462 || CT.C462], widget_inspector._Location);
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C459 || CT.C459,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 652,
        [_Location_file]: null
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 653,
        [_Location_file]: null
      });
    },
    get C464() {
      return C464 = dart.constList([C465 || CT.C465, C466 || CT.C466], widget_inspector._Location);
    },
    get C463() {
      return C463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C464 || CT.C464,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 651,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C468() {
      return C468 = dart.constList([C469 || CT.C469], widget_inspector._Location);
    },
    get C467() {
      return C467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C468 || CT.C468,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 679,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 685,
        [_Location_file]: null
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 691,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.constList([C472 || CT.C472, C473 || CT.C473, C474 || CT.C474], widget_inspector._Location);
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C471 || CT.C471,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 684,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C476() {
      return C476 = dart.constList([C477 || CT.C477, C478 || CT.C478], widget_inspector._Location);
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C476 || CT.C476,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 682,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 711,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C480 || CT.C480,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 710,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 716,
        [_Location_file]: null
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 720,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 721,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 722,
        [_Location_file]: null
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 724,
        [_Location_file]: null
      });
    },
    get C483() {
      return C483 = dart.constList([C484 || CT.C484, C485 || CT.C485, C486 || CT.C486, C487 || CT.C487, C488 || CT.C488], widget_inspector._Location);
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C483 || CT.C483,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 715,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 714,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 715,
        [_Location_file]: null
      });
    },
    get C490() {
      return C490 = dart.constList([C491 || CT.C491, C492 || CT.C492], widget_inspector._Location);
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C490 || CT.C490,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 713,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 743,
        [_Location_file]: null
      });
    },
    get C494() {
      return C494 = dart.constList([C495 || CT.C495], widget_inspector._Location);
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C494 || CT.C494,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 742,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 748,
        [_Location_file]: null
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 752,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 753,
        [_Location_file]: null
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 754,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.constList([C498 || CT.C498, C499 || CT.C499, C500 || CT.C500, C501 || CT.C501], widget_inspector._Location);
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C497 || CT.C497,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 747,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 746,
        [_Location_file]: null
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 747,
        [_Location_file]: null
      });
    },
    get C503() {
      return C503 = dart.constList([C504 || CT.C504, C505 || CT.C505], widget_inspector._Location);
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C503 || CT.C503,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 745,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 774,
        [_Location_file]: null
      });
    },
    get C507() {
      return C507 = dart.constList([C508 || CT.C508], widget_inspector._Location);
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C507 || CT.C507,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 773,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 18,
        [_Location_line]: 776,
        [_Location_file]: null
      });
    },
    get C510() {
      return C510 = dart.constList([C511 || CT.C511], widget_inspector._Location);
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C510 || CT.C510,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 776,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C513() {
      return C513 = dart.constList([C514 || CT.C514], widget_inspector._Location);
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C513 || CT.C513,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 782,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 15,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 15,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 15,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C516() {
      return C516 = dart.constList([C517 || CT.C517, C518 || CT.C518, C519 || CT.C519, C520 || CT.C520, C521 || CT.C521, C522 || CT.C522, C523 || CT.C523], widget_inspector._Location);
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C516 || CT.C516,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 779,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 778,
        [_Location_file]: null
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 779,
        [_Location_file]: null
      });
    },
    get C525() {
      return C525 = dart.constList([C526 || CT.C526, C527 || CT.C527], widget_inspector._Location);
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C525 || CT.C525,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 777,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C529() {
      return C529 = dart.constList([C530 || CT.C530, C531 || CT.C531], widget_inspector._Location);
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C529 || CT.C529,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 617,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C533() {
      return C533 = dart.constList([C534 || CT.C534], widget_inspector._Location);
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C533 || CT.C533,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 616,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.constList([C537 || CT.C537, C538 || CT.C538, C539 || CT.C539], widget_inspector._Location);
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C536 || CT.C536,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 610,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C542() {
      return C542 = dart.constList([C543 || CT.C543], widget_inspector._Location);
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C542 || CT.C542,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.constList([C546 || CT.C546], widget_inspector._Location);
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C545 || CT.C545,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C548() {
      return C548 = dart.constList([C549 || CT.C549, C550 || CT.C550], widget_inspector._Location);
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C548 || CT.C548,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C552() {
      return C552 = dart.constList([C553 || CT.C553, C554 || CT.C554], widget_inspector._Location);
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C552 || CT.C552,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C556() {
      return C556 = dart.constList([C557 || CT.C557, C558 || CT.C558], widget_inspector._Location);
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C556 || CT.C556,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C560() {
      return C560 = dart.constList([C561 || CT.C561], widget_inspector._Location);
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C560 || CT.C560,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C563() {
      return C563 = dart.constList([C564 || CT.C564, C565 || CT.C565, C566 || CT.C566, C567 || CT.C567], widget_inspector._Location);
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C563 || CT.C563,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C572() {
      return C572 = dart.constList([C573 || CT.C573], widget_inspector._Location);
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C572 || CT.C572,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C575() {
      return C575 = dart.constList([C576 || CT.C576, C577 || CT.C577, C578 || CT.C578, C579 || CT.C579], widget_inspector._Location);
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C575 || CT.C575,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.constList([C582 || CT.C582], widget_inspector._Location);
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C581 || CT.C581,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C584() {
      return C584 = dart.constList([C585 || CT.C585], widget_inspector._Location);
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C584 || CT.C584,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C587() {
      return C587 = dart.constList([C588 || CT.C588], widget_inspector._Location);
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C587 || CT.C587,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C590() {
      return C590 = dart.constList([C591 || CT.C591, C592 || CT.C592], widget_inspector._Location);
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C590 || CT.C590,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "separatorBuilder",
        [_Location_column]: 15,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.constList([C595 || CT.C595, C596 || CT.C596, C597 || CT.C597], widget_inspector._Location);
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C594 || CT.C594,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C599() {
      return C599 = dart.constList([C600 || CT.C600], widget_inspector._Location);
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C599 || CT.C599,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C602() {
      return C602 = dart.constList([C603 || CT.C603, C604 || CT.C604], widget_inspector._Location);
    },
    get C601() {
      return C601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C602 || CT.C602,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C606() {
      return C606 = dart.constList([C607 || CT.C607, C608 || CT.C608], widget_inspector._Location);
    },
    get C605() {
      return C605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C606 || CT.C606,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C611() {
      return C611 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C610() {
      return C610 = dart.constList([C611 || CT.C611], widget_inspector._Location);
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C610 || CT.C610,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C613() {
      return C613 = dart.constList([C614 || CT.C614], widget_inspector._Location);
    },
    get C612() {
      return C612 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C613 || CT.C613,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C616() {
      return C616 = dart.constList([C617 || CT.C617], widget_inspector._Location);
    },
    get C615() {
      return C615 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C616 || CT.C616,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 21,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C619() {
      return C619 = dart.constList([C620 || CT.C620, C621 || CT.C621], widget_inspector._Location);
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C619 || CT.C619,
        [_Location_name]: null,
        [_Location_column]: 69,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 19,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C623() {
      return C623 = dart.constList([C624 || CT.C624, C625 || CT.C625], widget_inspector._Location);
    },
    get C622() {
      return C622 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C623 || CT.C623,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C627() {
      return C627 = dart.constList([C628 || CT.C628, C629 || CT.C629], widget_inspector._Location);
    },
    get C626() {
      return C626 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C627 || CT.C627,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C631() {
      return C631 = dart.constList([C632 || CT.C632], widget_inspector._Location);
    },
    get C630() {
      return C630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C631 || CT.C631,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C635() {
      return C635 = dart.constList([C636 || CT.C636], widget_inspector._Location);
    },
    get C634() {
      return C634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C635 || CT.C635,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C638() {
      return C638 = dart.constList([C639 || CT.C639], widget_inspector._Location);
    },
    get C637() {
      return C637 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C638 || CT.C638,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C641() {
      return C641 = dart.constList([C642 || CT.C642], widget_inspector._Location);
    },
    get C640() {
      return C640 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C641 || CT.C641,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C644() {
      return C644 = dart.constList([C645 || CT.C645], widget_inspector._Location);
    },
    get C643() {
      return C643 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C644 || CT.C644,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C647() {
      return C647 = dart.constList([C648 || CT.C648, C649 || CT.C649], widget_inspector._Location);
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C647 || CT.C647,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C25;
  let C22;
  let C21;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C26;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C46;
  let C45;
  let C50;
  let C49;
  let C48;
  LandingView.Landing = class Landing extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                core.print("pressed redeem:)");
                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), content: new text_field.TextField.new({controller: LandingView._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new flat_button.FlatButton.new({child: new text.Text.new("REDEEM", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), BuildContextToAlertDialog())});
              }, VoidToNull()), child: new basic.Padding.new({padding: C26 || CT.C26, child: new text.Text.new("Check Out Item", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
    }
  };
  (LandingView.Landing.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    LandingView.Landing.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = LandingView.Landing.prototype;
  dart.addTypeTests(LandingView.Landing);
  dart.setMethodSignature(LandingView.Landing, () => ({
    __proto__: dart.getMethods(LandingView.Landing.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(LandingView.Landing, "package:RentalAdmin/views/LandingView.dart");
  dart.defineLazy(LandingView, {
    /*LandingView._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C60;
  let C59;
  let C63;
  let C62;
  let C61;
  let C66;
  let C65;
  let C64;
  let C69;
  let C70;
  let C71;
  let C68;
  let C67;
  ReservationView.ReservationView = class ReservationView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.teal, title: new text.Text.new("Help Chat", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
    }
  };
  (ReservationView.ReservationView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ReservationView.ReservationView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ReservationView.ReservationView.prototype;
  dart.addTypeTests(ReservationView.ReservationView);
  dart.setMethodSignature(ReservationView.ReservationView, () => ({
    __proto__: dart.getMethods(ReservationView.ReservationView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ReservationView.ReservationView, "package:RentalAdmin/views/ReservationView.dart");
  let C74;
  let C75;
  let C73;
  let C72;
  let C76;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C87;
  let C86;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C100;
  let C97;
  let C96;
  navigation.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({color: colors.Colors.greenAccent, height: 80.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new("Rental Manager Administrator", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, color: colors.Colors.teal.shade900, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new basic.Row.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, onPressed: dart.fn(() => {
                    core.print("Pressed Support button!!");
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C76 || CT.C76}), BuildContextToReservationListPage())}));
                  }, VoidToNull()), child: new text.Text.new("Admin Login", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C89 || CT.C89})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
  };
  (navigation.NavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navigation.NavigationBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation.NavigationBar.prototype;
  dart.addTypeTests(navigation.NavigationBar);
  dart.setMethodSignature(navigation.NavigationBar, () => ({
    __proto__: dart.getMethods(navigation.NavigationBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation.NavigationBar, "package:RentalAdmin/widgets/navigation.dart");
  let C101;
  const title$ = dart.privateName(navigation, "_NavigationBar.title");
  navigation._NavigationBar = class _NavigationBar extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C101 || CT.C101});
    }
  };
  (navigation._NavigationBar.new = function(title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    navigation._NavigationBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation._NavigationBar.prototype;
  dart.addTypeTests(navigation._NavigationBar);
  dart.setMethodSignature(navigation._NavigationBar, () => ({
    __proto__: dart.getMethods(navigation._NavigationBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation._NavigationBar, "package:RentalAdmin/widgets/navigation.dart");
  dart.setFieldSignature(navigation._NavigationBar, () => ({
    __proto__: dart.getFields(navigation._NavigationBar.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  signInScreen.signInScreen = class signInScreen$ extends framework.StatefulWidget {
    createState() {
      return new signInScreen._signInScreenState.new();
    }
  };
  (signInScreen.signInScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    signInScreen.signInScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = signInScreen.signInScreen.prototype;
  dart.addTypeTests(signInScreen.signInScreen);
  dart.setMethodSignature(signInScreen.signInScreen, () => ({
    __proto__: dart.getMethods(signInScreen.signInScreen.__proto__),
    createState: dart.fnType(signInScreen._signInScreenState, [])
  }));
  dart.setLibraryUri(signInScreen.signInScreen, "package:RentalAdmin/widgets/signInScreen.dart");
  const _Accountvalidate = dart.privateName(signInScreen, "_Accountvalidate");
  const _contactText = dart.privateName(signInScreen, "_contactText");
  const _currentUser = dart.privateName(signInScreen, "_currentUser");
  const _googleSignIn = dart.privateName(signInScreen, "_googleSignIn");
  const _handleSignIn = dart.privateName(signInScreen, "_handleSignIn");
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C119;
  let C118;
  let C123;
  let C124;
  let C125;
  let C122;
  let C121;
  let C128;
  let C129;
  let C127;
  let C126;
  let C130;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C132;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C131;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color_value = dart.privateName(ui, "Color.value");
  let C134;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C135;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C133;
  let C138;
  let C139;
  let C140;
  let C141;
  let C137;
  let C136;
  let C144;
  let C145;
  let C143;
  let C142;
  let C148;
  let C149;
  let C147;
  let C146;
  let C151;
  let C150;
  let C154;
  let C155;
  let C156;
  let C157;
  let C153;
  let C152;
  let C160;
  let C161;
  let C159;
  let C158;
  let C164;
  let C163;
  let C162;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C170;
  let C169;
  let C174;
  let C175;
  let C173;
  let C172;
  let C178;
  let C177;
  let C176;
  let C181;
  let C180;
  let C179;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C191;
  let C190;
  let C195;
  let C194;
  let C193;
  let C198;
  let C199;
  let C197;
  let C196;
  let C202;
  let C203;
  let C201;
  let C200;
  let C204;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C206;
  let C205;
  let C220;
  let C221;
  let C219;
  let C218;
  let C224;
  let C225;
  let C223;
  let C222;
  let C228;
  let C229;
  let C227;
  let C226;
  let C232;
  let C231;
  let C230;
  let C235;
  let C236;
  let C234;
  let C233;
  let C239;
  let C238;
  let C237;
  let C242;
  let C243;
  let C241;
  let C240;
  let C244;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C246;
  let C245;
  let C260;
  let C261;
  let C259;
  let C258;
  let C264;
  let C265;
  let C263;
  let C262;
  let C268;
  let C267;
  let C266;
  let C271;
  let C272;
  let C270;
  let C269;
  let C275;
  let C274;
  let C273;
  let C276;
  let C279;
  let C280;
  let C278;
  let C277;
  let C283;
  let C284;
  let C282;
  let C281;
  let C287;
  let C288;
  let C286;
  let C285;
  let C291;
  let C290;
  let C289;
  let C292;
  let C295;
  let C296;
  let C294;
  let C293;
  let C299;
  let C300;
  let C298;
  let C297;
  let C303;
  let C302;
  let C301;
  let C306;
  let C305;
  let C304;
  let C309;
  let C308;
  let C307;
  let C312;
  let C313;
  let C311;
  let C310;
  let C316;
  let C315;
  let C314;
  let C319;
  let C320;
  let C318;
  let C317;
  let C323;
  let C322;
  let C321;
  signInScreen._signInScreenState = class _signInScreenState extends framework.State$(signInScreen.signInScreen) {
    [_handleSignIn]() {
      return async.async(firebase_auth.FirebaseUser, (function* _handleSignIn() {
        try {
          yield this[_googleSignIn].signIn();
        } catch (e) {
          let error = dart.getThrown(e);
          core.print(error);
        }
      }).bind(this));
    }
    build(context) {
      let authHandler = new auth.Auth.new();
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), new text.Text.new("Welcome", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.username = text;
                      core.print("First text field: " + dart.str(text));
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C130 || CT.C130, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.password = text;
                    }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("LOGIN", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169})]), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                          let e = (yield authHandler.signIn(this.username, this.password));
                          core.print("on Press Error: " + dart.notNull(e));
                          if (e === "false") {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Your Email needs to be verified.", {$creationLocationd_0dea112b090073317d4: C176 || CT.C176}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C179 || CT.C179}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C182 || CT.C182})]), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), BuildContextToAlertDialog())});
                          } else if (dart.test(signInScreen.ErrorDetect(e))) {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(signInScreen.errorDetect(e, {pos: 1}), {$creationLocationd_0dea112b090073317d4: C190 || CT.C190}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C193 || CT.C193}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C196 || CT.C196})]), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), BuildContextToAlertDialog())});
                          } else {
                            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C204 || CT.C204}), BuildContextToHomeView())}));
                          }
                        }).bind(this)), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), $creationLocationd_0dea112b090073317d4: C218 || CT.C218})]), $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.new({image: new _network_image_web.NetworkImage.new("https://pluspng.com/img-png/google-logo-png-open-2000.png"), height: 30.0, $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), new basic.Center.new({child: new text.Text.new("Sign In with Google", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C233 || CT.C233}), $creationLocationd_0dea112b090073317d4: C237 || CT.C237})]), $creationLocationd_0dea112b090073317d4: C240 || CT.C240}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C244 || CT.C244}), BuildContextToHomeView())}));
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C245 || CT.C245}), $creationLocationd_0dea112b090073317d4: C258 || CT.C258})]), $creationLocationd_0dea112b090073317d4: C262 || CT.C262}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C266 || CT.C266}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("New to Rental Manager?", {style: new text_style.TextStyle.new({fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C269 || CT.C269}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C273 || CT.C273}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.SignUpPage.new({$creationLocationd_0dea112b090073317d4: C276 || CT.C276}), BuildContextToSignUpPage())}));
                      }, VoidToNull()), child: new text.Text.new("Register", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C277 || CT.C277}), $creationLocationd_0dea112b090073317d4: C281 || CT.C281})]), $creationLocationd_0dea112b090073317d4: C285 || CT.C285}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C289 || CT.C289}), new basic.Center.new({child: new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.ResetPassword.new({$creationLocationd_0dea112b090073317d4: C292 || CT.C292}), BuildContextToResetPassword())}));
                      }, VoidToNull()), child: new text.Text.new("Forgot Password", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontWeight: ui.FontWeight.bold, fontFamily: "Montserrat", decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), $creationLocationd_0dea112b090073317d4: C297 || CT.C297}), $creationLocationd_0dea112b090073317d4: C301 || CT.C301}), $creationLocationd_0dea112b090073317d4: C304 || CT.C304}), new basic.Row.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C307 || CT.C307})]), $creationLocationd_0dea112b090073317d4: C310 || CT.C310}), $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), $creationLocationd_0dea112b090073317d4: C317 || CT.C317}), $creationLocationd_0dea112b090073317d4: C321 || CT.C321});
    }
  };
  (signInScreen._signInScreenState.new = function() {
    this.username = null;
    this.password = null;
    this.resetPassword = null;
    this[_Accountvalidate] = false;
    this[_contactText] = null;
    this[_currentUser] = null;
    this[_googleSignIn] = new google_sign_in.GoogleSignIn.new({scopes: JSArrayOfString().of(["email", "https://www.googleapis.com/auth/contacts.readonly"])});
    signInScreen._signInScreenState.__proto__.new.call(this);
    ;
  }).prototype = signInScreen._signInScreenState.prototype;
  dart.addTypeTests(signInScreen._signInScreenState);
  dart.setMethodSignature(signInScreen._signInScreenState, () => ({
    __proto__: dart.getMethods(signInScreen._signInScreenState.__proto__),
    [_handleSignIn]: dart.fnType(async.Future$(firebase_auth.FirebaseUser), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(signInScreen._signInScreenState, "package:RentalAdmin/widgets/signInScreen.dart");
  dart.setFieldSignature(signInScreen._signInScreenState, () => ({
    __proto__: dart.getFields(signInScreen._signInScreenState.__proto__),
    username: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    resetPassword: dart.fieldType(core.String),
    [_Accountvalidate]: dart.fieldType(core.bool),
    [_contactText]: dart.fieldType(core.String),
    [_currentUser]: dart.fieldType(google_sign_in.GoogleSignInAccount),
    [_googleSignIn]: dart.fieldType(google_sign_in.GoogleSignIn)
  }));
  signInScreen.UserCredential = class UserCredential extends core.Object {};
  signInScreen.UserCredential[dart.mixinOn] = Object => class UserCredential extends Object {};
  (signInScreen.UserCredential[dart.mixinNew] = function() {
  }).prototype = signInScreen.UserCredential.prototype;
  dart.addTypeTests(signInScreen.UserCredential);
  signInScreen.UserCredential[dart.implements] = () => [core.Object];
  dart.setLibraryUri(signInScreen.UserCredential, "package:RentalAdmin/widgets/signInScreen.dart");
  signInScreen.ResetPassword = class ResetPassword extends framework.StatefulWidget {
    createState() {
      return new signInScreen._ResetPasswordState.new();
    }
  };
  (signInScreen.ResetPassword.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    signInScreen.ResetPassword.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = signInScreen.ResetPassword.prototype;
  dart.addTypeTests(signInScreen.ResetPassword);
  dart.setMethodSignature(signInScreen.ResetPassword, () => ({
    __proto__: dart.getMethods(signInScreen.ResetPassword.__proto__),
    createState: dart.fnType(signInScreen._ResetPasswordState, [])
  }));
  dart.setLibraryUri(signInScreen.ResetPassword, "package:RentalAdmin/widgets/signInScreen.dart");
  let C326;
  let C325;
  let C324;
  let C329;
  let C330;
  let C328;
  let C327;
  let C333;
  let C334;
  let C332;
  let C331;
  let C337;
  let C338;
  let C339;
  let C336;
  let C335;
  let C342;
  let C343;
  let C341;
  let C340;
  let C346;
  let C347;
  let C345;
  let C344;
  let C350;
  let C351;
  let C349;
  let C348;
  let C354;
  let C355;
  let C353;
  let C352;
  let C358;
  let C357;
  let C356;
  let C361;
  let C362;
  let C363;
  let C360;
  let C359;
  let C366;
  let C367;
  let C365;
  let C364;
  let C368;
  let C370;
  let C369;
  let C373;
  let C374;
  let C375;
  let C376;
  let C372;
  let C371;
  let C379;
  let C380;
  let C378;
  let C377;
  let C383;
  let C384;
  let C382;
  let C381;
  let C387;
  let C386;
  let C385;
  let C390;
  let C391;
  let C389;
  let C388;
  let C394;
  let C393;
  let C392;
  let C397;
  let C398;
  let C396;
  let C395;
  let C401;
  let C402;
  let C403;
  let C404;
  let C405;
  let C406;
  let C407;
  let C408;
  let C409;
  let C410;
  let C411;
  let C400;
  let C399;
  let C414;
  let C415;
  let C413;
  let C412;
  let C418;
  let C419;
  let C417;
  let C416;
  let C422;
  let C421;
  let C420;
  let C425;
  let C424;
  let C423;
  let C428;
  let C427;
  let C426;
  let C431;
  let C432;
  let C433;
  let C430;
  let C429;
  let C436;
  let C435;
  let C434;
  signInScreen._ResetPasswordState = class _ResetPasswordState extends framework.State$(signInScreen.ResetPassword) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reset PassWord", {$creationLocationd_0dea112b090073317d4: C324 || CT.C324}), backgroundColor: colors.Colors.teal, leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back_ios, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C327 || CT.C327}), onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.Object), VoidTobool()), $creationLocationd_0dea112b090073317d4: C331 || CT.C331}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C340 || CT.C340}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C344 || CT.C344}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), new text.Text.new("Enter your email address below", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C356 || CT.C356}), $creationLocationd_0dea112b090073317d4: C359 || CT.C359}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C364 || CT.C364}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.email = text;
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C368 || CT.C368, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Enter your Email Address", prefixIcon: C369 || CT.C369, contentPadding: C368 || CT.C368}), $creationLocationd_0dea112b090073317d4: C371 || CT.C371}), $creationLocationd_0dea112b090073317d4: C377 || CT.C377}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C381 || CT.C381}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C385 || CT.C385}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("Send Verification Email", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C388 || CT.C388}), $creationLocationd_0dea112b090073317d4: C392 || CT.C392})]), $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C399 || CT.C399}), $creationLocationd_0dea112b090073317d4: C412 || CT.C412})]), $creationLocationd_0dea112b090073317d4: C416 || CT.C416}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C420 || CT.C420})]), $creationLocationd_0dea112b090073317d4: C423 || CT.C423}), $creationLocationd_0dea112b090073317d4: C426 || CT.C426}), $creationLocationd_0dea112b090073317d4: C429 || CT.C429}), $creationLocationd_0dea112b090073317d4: C434 || CT.C434});
    }
  };
  (signInScreen._ResetPasswordState.new = function() {
    this.email = null;
    signInScreen._ResetPasswordState.__proto__.new.call(this);
    ;
  }).prototype = signInScreen._ResetPasswordState.prototype;
  dart.addTypeTests(signInScreen._ResetPasswordState);
  dart.setMethodSignature(signInScreen._ResetPasswordState, () => ({
    __proto__: dart.getMethods(signInScreen._ResetPasswordState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(signInScreen._ResetPasswordState, "package:RentalAdmin/widgets/signInScreen.dart");
  dart.setFieldSignature(signInScreen._ResetPasswordState, () => ({
    __proto__: dart.getFields(signInScreen._ResetPasswordState.__proto__),
    email: dart.fieldType(core.String)
  }));
  signInScreen.SignUpPage = class SignUpPage extends framework.StatefulWidget {
    createState() {
      return new signInScreen._State.new();
    }
  };
  (signInScreen.SignUpPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    signInScreen.SignUpPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = signInScreen.SignUpPage.prototype;
  dart.addTypeTests(signInScreen.SignUpPage);
  dart.setMethodSignature(signInScreen.SignUpPage, () => ({
    __proto__: dart.getMethods(signInScreen.SignUpPage.__proto__),
    createState: dart.fnType(signInScreen._State, [])
  }));
  dart.setLibraryUri(signInScreen.SignUpPage, "package:RentalAdmin/widgets/signInScreen.dart");
  let C439;
  let C438;
  let C437;
  let C442;
  let C443;
  let C441;
  let C440;
  let C444;
  let C447;
  let C448;
  let C449;
  let C450;
  let C446;
  let C445;
  let C453;
  let C454;
  let C452;
  let C451;
  let C457;
  let C456;
  let C455;
  let C460;
  let C461;
  let C462;
  let C459;
  let C458;
  let C465;
  let C466;
  let C464;
  let C463;
  let C469;
  let C468;
  let C467;
  let C472;
  let C473;
  let C474;
  let C471;
  let C470;
  let C477;
  let C478;
  let C476;
  let C475;
  let C481;
  let C480;
  let C479;
  let C484;
  let C485;
  let C486;
  let C487;
  let C488;
  let C483;
  let C482;
  let C491;
  let C492;
  let C490;
  let C489;
  let C495;
  let C494;
  let C493;
  let C498;
  let C499;
  let C500;
  let C501;
  let C497;
  let C496;
  let C504;
  let C505;
  let C503;
  let C502;
  let C508;
  let C507;
  let C506;
  let C511;
  let C510;
  let C509;
  let C514;
  let C513;
  let C512;
  let C517;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  let C523;
  let C516;
  let C515;
  let C526;
  let C527;
  let C525;
  let C524;
  let C530;
  let C531;
  let C529;
  let C528;
  let C534;
  let C533;
  let C532;
  let C537;
  let C538;
  let C539;
  let C536;
  let C535;
  signInScreen._State = class _State extends framework.State$(signInScreen.SignUpPage) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, appBar: new app_bar.AppBar.new({title: new text.Text.new("Account Sign Up", {$creationLocationd_0dea112b090073317d4: C437 || CT.C437}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C440 || CT.C440}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.email = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C444 || CT.C444, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C369 || CT.C369, contentPadding: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C451 || CT.C451}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C455 || CT.C455}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameFirst = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "First Name", prefixIcon: C133 || CT.C133, contentPadding: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C458 || CT.C458}), $creationLocationd_0dea112b090073317d4: C463 || CT.C463}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C467 || CT.C467}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameLast = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Lastname", prefixIcon: C133 || CT.C133, contentPadding: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C470 || CT.C470}), $creationLocationd_0dea112b090073317d4: C475 || CT.C475}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C479 || CT.C479}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.password = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, scrollPadding: C444 || CT.C444, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C150 || CT.C150, contentPadding: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C482 || CT.C482}), $creationLocationd_0dea112b090073317d4: C489 || CT.C489}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C493 || CT.C493}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.confirmpw = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C131 || CT.C131, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Confirm Password", prefixIcon: C150 || CT.C150, contentPadding: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C496 || CT.C496}), $creationLocationd_0dea112b090073317d4: C502 || CT.C502}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C506 || CT.C506}), new text.Text.new("Click sign up after entering all of above", {$creationLocationd_0dea112b090073317d4: C509 || CT.C509}), new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({textColor: colors.Colors.white, color: colors.Colors.teal.shade900, child: new text.Text.new("SIGN UP", {$creationLocationd_0dea112b090073317d4: C512 || CT.C512}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                  }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C515 || CT.C515}), $creationLocationd_0dea112b090073317d4: C524 || CT.C524})]), $creationLocationd_0dea112b090073317d4: C528 || CT.C528}), $creationLocationd_0dea112b090073317d4: C532 || CT.C532}), $creationLocationd_0dea112b090073317d4: C535 || CT.C535});
    }
  };
  (signInScreen._State.new = function() {
    this.email = null;
    this.usernameFirst = null;
    this.usernameLast = null;
    this.password = null;
    this.confirmpw = null;
    signInScreen._State.__proto__.new.call(this);
    ;
  }).prototype = signInScreen._State.prototype;
  dart.addTypeTests(signInScreen._State);
  dart.setMethodSignature(signInScreen._State, () => ({
    __proto__: dart.getMethods(signInScreen._State.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(signInScreen._State, "package:RentalAdmin/widgets/signInScreen.dart");
  dart.setFieldSignature(signInScreen._State, () => ({
    __proto__: dart.getFields(signInScreen._State.__proto__),
    email: dart.fieldType(core.String),
    usernameFirst: dart.fieldType(core.String),
    usernameLast: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    confirmpw: dart.fieldType(core.String)
  }));
  signInScreen.ErrorDetect = function ErrorDetect(e) {
    if (e[$contains]("FirebaseError")) {
      return true;
    } else {
      return false;
    }
  };
  signInScreen.errorDetect = function errorDetect(e, opts) {
    let pos = opts && 'pos' in opts ? opts.pos : 1;
    let strList = e[$split](":");
    let _retstr = strList[$_get](pos);
    let str = _retstr[$split]("(");
    return str[$_get](0);
  };
  let C540;
  let C543;
  let C542;
  let C541;
  let C546;
  let C545;
  let C544;
  let C549;
  let C550;
  let C548;
  let C547;
  let C553;
  let C554;
  let C552;
  let C551;
  let C557;
  let C558;
  let C556;
  let C555;
  let C561;
  let C560;
  let C559;
  let C564;
  let C565;
  let C566;
  let C567;
  let C563;
  let C562;
  let C568;
  let C569;
  let C570;
  let C573;
  let C572;
  let C571;
  let C576;
  let C577;
  let C578;
  let C579;
  let C575;
  let C574;
  let C582;
  let C581;
  let C580;
  let C585;
  let C584;
  let C583;
  let C588;
  let C587;
  let C586;
  let C591;
  let C592;
  let C590;
  let C589;
  let C595;
  let C596;
  let C597;
  let C594;
  let C593;
  let C600;
  let C599;
  let C598;
  let C603;
  let C604;
  let C602;
  let C601;
  let C607;
  let C608;
  let C606;
  let C605;
  let C611;
  let C610;
  let C609;
  let C614;
  let C613;
  let C612;
  let C617;
  let C616;
  let C615;
  let C620;
  let C621;
  let C619;
  let C618;
  let C624;
  let C625;
  let C623;
  let C622;
  let C628;
  let C629;
  let C627;
  let C626;
  let C632;
  let C631;
  let C630;
  homeView.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C540 || CT.C540}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C541 || CT.C541}), this.contentBoard(context)]), $creationLocationd_0dea112b090073317d4: C544 || CT.C544}), $creationLocationd_0dea112b090073317d4: C547 || CT.C547});
    }
    contentBoard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([this.leftDashboard(framework.BuildContext._check(context)), this.rightDashboard(framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C551 || CT.C551}), $creationLocationd_0dea112b090073317d4: C555 || CT.C555});
    }
    leftDashboard(context) {
      return new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 2, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C131 || CT.C131}), child: new basic.Column.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C559 || CT.C559}), $creationLocationd_0dea112b090073317d4: C562 || CT.C562});
    }
    rightDashboard(context) {
      return new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C131 || CT.C131}), child: new basic.Column.new({children: JSArrayOfWidget().of([new LandingView.Landing.new({$creationLocationd_0dea112b090073317d4: C568 || CT.C568}), new LandingView.Landing.new({$creationLocationd_0dea112b090073317d4: C569 || CT.C569}), new LandingView.Landing.new({$creationLocationd_0dea112b090073317d4: C570 || CT.C570})]), $creationLocationd_0dea112b090073317d4: C571 || CT.C571}), $creationLocationd_0dea112b090073317d4: C574 || CT.C574});
    }
    res(context) {
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C131 || CT.C131}), child: new basic.Column.new({children: JSArrayOfWidget().of([new scroll_view.ListView.separated({separatorBuilder: dart.fn((context, index) => new divider.Divider.new({color: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C580 || CT.C580}), BuildContextAndintToDivider()), itemCount: 20, itemBuilder: dart.fn((context, index) => new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(8.0), child: new basic.Center.new({child: new text.Text.new("Index " + dart.str(index), {$creationLocationd_0dea112b090073317d4: C583 || CT.C583}), $creationLocationd_0dea112b090073317d4: C586 || CT.C586}), $creationLocationd_0dea112b090073317d4: C589 || CT.C589}), BuildContextAndintToPadding()), $creationLocationd_0dea112b090073317d4: C593 || CT.C593})]), $creationLocationd_0dea112b090073317d4: C598 || CT.C598}), $creationLocationd_0dea112b090073317d4: C601 || CT.C601});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C605 || CT.C605}), $creationLocationd_0dea112b090073317d4: C609 || CT.C609});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new("Data", {$creationLocationd_0dea112b090073317d4: C612 || CT.C612}), subtitle: new text.Text.new("Total amount: ", {$creationLocationd_0dea112b090073317d4: C615 || CT.C615}), $creationLocationd_0dea112b090073317d4: C618 || CT.C618}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C622 || CT.C622});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C626 || CT.C626}), $creationLocationd_0dea112b090073317d4: C630 || CT.C630});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").getDocuments());
        return itemListDOC.documents;
      });
    }
  };
  (homeView.HomeView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    homeView.HomeView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = homeView.HomeView.prototype;
  dart.addTypeTests(homeView.HomeView);
  dart.setMethodSignature(homeView.HomeView, () => ({
    __proto__: dart.getMethods(homeView.HomeView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    contentBoard: dart.fnType(container.Container, [dart.dynamic]),
    leftDashboard: dart.fnType(container.Container, [framework.BuildContext]),
    rightDashboard: dart.fnType(container.Container, [framework.BuildContext]),
    res: dart.fnType(container.Container, [framework.BuildContext]),
    reservation: dart.fnType(container.Container, []),
    getFirestoreData: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(homeView.HomeView, "package:RentalAdmin/views/homeView.dart");
  let C633;
  let C636;
  let C635;
  let C634;
  let C639;
  let C638;
  let C637;
  let C642;
  let C641;
  let C640;
  let C645;
  let C644;
  let C643;
  let C648;
  let C649;
  let C647;
  let C646;
  chatBoxView.chatBoxView = class chatBoxView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C633 || CT.C633}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C634 || CT.C634}), new actionButton.ReservationListView.new("Chating Controller Goes Here", {$creationLocationd_0dea112b090073317d4: C637 || CT.C637})]), $creationLocationd_0dea112b090073317d4: C640 || CT.C640}), $creationLocationd_0dea112b090073317d4: C643 || CT.C643}), $creationLocationd_0dea112b090073317d4: C646 || CT.C646});
    }
  };
  (chatBoxView.chatBoxView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    chatBoxView.chatBoxView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = chatBoxView.chatBoxView.prototype;
  dart.addTypeTests(chatBoxView.chatBoxView);
  dart.setMethodSignature(chatBoxView.chatBoxView, () => ({
    __proto__: dart.getMethods(chatBoxView.chatBoxView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(chatBoxView.chatBoxView, "package:RentalAdmin/views/chatBoxView.dart");
  dart.trackLibraries("packages/RentalAdmin/views/LandingView", {
    "package:RentalAdmin/views/LandingView.dart": LandingView,
    "package:RentalAdmin/views/ReservationView.dart": ReservationView,
    "package:RentalAdmin/widgets/navigation.dart": navigation,
    "package:RentalAdmin/widgets/signInScreen.dart": signInScreen,
    "package:RentalAdmin/views/homeView.dart": homeView,
    "package:RentalAdmin/views/chatBoxView.dart": chatBoxView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["LandingView.dart","ReservationView.dart","../widgets/navigation.dart","../widgets/signInScreen.dart","homeView.dart","chatBoxView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,qCACI,gCAEa,sBAEhB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AACgB,gBAAzB,WAAM;AA0BA,gBAzBN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,kFACH,0CACK,8CAER,mDAA0B,uFAEf,sBACX,uCACS,kBAAK,6EACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;mGAGpB,uCACS,kBAAK,+EACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;;uCAO7B,sDAGE,kBACL,0BACO,wCAAoB,aAAiB,iCAA6B,iMAI/E,+BACS,cACC;IAMpB;;;;;;EAEF;;;;;;;;MA9DsB,gCAAoB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;UCMjB;AACxB,YAAO,oCACS,yCACgB,2BACb,kBACT,qBACO,qCACO,0JAME,AAAK,mCACvB,sCACG,gCACa,sBAGhB;IAKV;;;QA3B2B;;AAAQ,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCMxB;AACxB,YAAO,qCACS,mCACJ,aACD,sCACgC,+CACnB,sBAChB,kBACE,wCACO,0CACoB,2BACT,AAAK,uCACT,iEAEhB,6BACoB,sBAsDhB,+CACgB,+BACH;AACyB,oBAAjC,WAAM;AAEgF,oBAA7E,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;2CAE3D,kBACL,uBACO,qCAAwB,yIAEhC,+BACM;IAMvB;;;QAzFyB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;IA6FnC;;;;;;UAIa;AACxB,YAAO;IAGT;;4CAP0B;;;AAApB;;EAA0B;;;;;;;;;;;;;AC/FI;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCoC;AAChC;AAC8B,UAA5B,MAAM,AAAc;;cACb;AACK,UAAZ,WAAM,KAAK;;MAEf;;UAuB0B;AACpB,wBAAkB;AACtB,YAAO,gCACC,4CACoB,2BAClB,mCACG,yCACgC,yCACnB,sBAUhB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,mBACO,0CACO,0BACE,AAAK,uCACT,qBACK,kEAGnB,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;AACiB,sBAAhC,WAAM,AAAyB,gCAAL,IAAI;qDAGZ,AAAK,yEAGb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,8JAQjB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;qDAKJ,mBACO,AAAK,yCACb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,iKASjB,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,iBACO,wCACK,aAEI,iCACF,8MAMX;AAKL,mCAAI,MAAM,AAAY,WAAD,QAAQ,eAAU;AACd,0BAA7B,WAAM,AAAmB,kCAAE,CAAC;AAC5B,8BAAI,AAAE,CAAD,KAAI;AAeD,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yGACK,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;gCAO7B,eAAG,yBAAY,CAAC;AAef,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yBAAY,CAAC,QAAO,0EACf,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;;AAUQ,4BAHhC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;;wBAEjC,gDACmB,+BAAI,sBAEF,wCACI,wMAKlC,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,4BACS,wCACH,sEACI,iEAEV,+BAAgB,iEAChB,6BACS,kBACL,+BACO,wCACK,aAEI,iCACF,8MAMX;AAyBmC,0BAH/B,uCACP,OAAO,EACP,yCACa,QAAC,WAAY;wBAOjC,oCACmB,+BAAI,qBAEF,wCACI,wMAKlC,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,kBACE,kCACO,0CAAsB,2EAE/B,+BAAgB,gEAChB,iCACS;AAIuC,wBAHlC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,oBACO,qCACW,iCACF,0BACW,gCACI,kNAKvC,gCACU,iEAEV,6BACS,oCAGE,iCACE;AAI0C,wBAHrC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,2BACO,qCACW,iCACS,gCACX,0BACe,2QAKvC,6BACoB;IAQhC;;;IAnZO;IAAU;IAAU;IAEtB,yBAAmB;IACjB;IACa;IA2BP,sBAAgB,6CACnB,sBACN,SACA;;;EAkXN;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,gCACC,mCACI,+BACC,kBAAK,+FACY,6BACX,sCACD,kBAAW,oCAA8B,2FACxC,cAAgB,AAAY,uBAAT,OAAO,0KAGjB,2BAClB,mCACG,gCACa,sBAChB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,0CACO,0CACO,0BACE,AAAK,uCACT,mEAGd,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAE3B,gCACqB,gDAAoB,iBAAiB,gBAClD,yCACI,QAAC;AACE,sBAAZ,aAAQ,IAAI;qDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kNAQf,gCAAiB,aAAW,kEAE5B,gCACU,gEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,mCACO,wCACK,aAEI,iCACF,8MAMX;wBAAW,oCACF,+BAAI,qBAEF,wCACI,wMAKlC,gCACU;IAoDtB;;;IAxKO;;;EAyKT;;;;;;;;;;;;;AAI0B;IAAQ;;;;;;EAClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,sDACqB,eAClB,+BACC,kBAAK,gGACY,qFAEpB,6BACG,yCACgC,yCACnB,sBACf,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACE,oBAAZ,aAAQ,IAAI;mDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,+LAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACU,oBAApB,qBAAgB,IAAI;mDAIF,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,oMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACS,oBAAnB,oBAAe,IAAI;mDAID,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACK,oBAAf,gBAAW,IAAI;mDAGJ,mBACO,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACM,oBAAhB,iBAAY,IAAI;mDAGL,mBACO,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,0MAQf,gCACU,iEAEV,kBAAK,yGACJ,+BACgD,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,+CACK,4BACJ,AAAK,oCACZ,kBAAK,kFACD;kBAEV,oCACmB,+BAAI,sBACF,wCACI;IAMtC;;;IA3LO;IAAO;IAAe;IAAc;IAAU;;;EA4LvD;;;;;;;;;;;;;;;kDACwB;AACtB,QAAG,AAAE,CAAD,YAAU;AACZ,YAAO;;AAEP,YAAO;;EAEX;kDAC0B;QAAQ;AAEjB,kBAAU,AAAE,CAAD,SAAO;AACxB,kBAAU,AAAO,OAAA,QAAC,GAAG;AACf,cAAM,AAAQ,OAAD,SAAO;AACjC,UAAO,AAAG,IAAA,QAAC;EAEf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UC9xB4B;AACxB,YAAO,6CACmB,AAAK,mCACvB,gCACc,sBAChB,6FACA,gCACU,iEAEV,kBAAa,OAAO;IAI5B;iBAEuB;AACrB,YAAO,uCACe,+BAAI,aACjB,sCACgC,8CACnB,sBAChB,iDAAc,OAAO,IACrB,kDAAe,OAAO;IAI9B;kBAEqC;AACnC,YAAO,sCACwC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa;IAK1B;mBAEsC;AACpC,YAAO,sCACsC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa,sBAChB,wFACA,wFACA;IAIR;QAE2B;AACzB,YAAO,0CACO,8CACK,8BAAW,aAAkB,8DAGvC,gCACa,sBACP,sDACa,SAAC,SAAS,UAAU,gCACtB,2HAEL,iBACE,SAAC,SAAS,UAAU,gCACX,+BAAI,aACjB,6BAAc,kBAAK,AAAc,oBAAN,KAAK;IAMrD;;AAGE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAK7B,oBAAgB,8DACW,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UAAU,mCACzC,kBAEH,8EACM,kBAEN;;;IAOtB;;AAEuB;AACf,wBAAsB;AACd,2BACV,MAAM,AAAU,AAA0B,SAA3B,YAAY;AAC/B,cAAO,AAAY,YAAD;MACpB;;;;QA9HoB;;AAAQ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACEzC,YAAO,6CACmB,AAAK,mCACvB,sCACG,gCACa,sBAChB,6FACA,gCAAiB,iEACjB,yCAAoB;IAK9B;;;QAfuB;;AAAQ,2DAAW,GAAG;;EAAC","file":"LandingView.ddc.js"}');
  // Exports:
  return {
    views__LandingView: LandingView,
    views__ReservationView: ReservationView,
    widgets__navigation: navigation,
    widgets__signInScreen: signInScreen,
    views__homeView: homeView,
    views__chatBoxView: chatBoxView
  };
});

//# sourceMappingURL=LandingView.ddc.js.map
