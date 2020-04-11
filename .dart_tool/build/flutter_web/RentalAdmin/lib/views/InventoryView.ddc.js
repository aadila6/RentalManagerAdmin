define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/src/rendering/animated_size', 'packages/RentalAdmin/views/LandingView', 'packages/RentalAdmin/views/inventory/custom_gridcell', 'packages/intl/intl', 'packages/RentalAdmin/widgets/centerer', 'packages/google_sign_in/google_sign_in', 'packages/firebase_auth/firebase_auth', 'packages/RentalAdmin/widgets/auth', 'packages/RentalAdmin/widgets/actionButton'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__cloud_firestore__cloud_firestore, packages__flutter__src__rendering__animated_size, packages__RentalAdmin__views__LandingView, packages__RentalAdmin__views__inventory__custom_gridcell, packages__intl__intl, packages__RentalAdmin__widgets__centerer, packages__google_sign_in__google_sign_in, packages__firebase_auth__firebase_auth, packages__RentalAdmin__widgets__auth, packages__RentalAdmin__widgets__actionButton) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const spacer = packages__flutter__src__widgets__actions.src__widgets__spacer;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const card = packages__flutter__material.src__material__card;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const page = packages__flutter__material.src__material__page;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const material_button = packages__flutter__material.src__material__material_button;
  const app = packages__flutter__material.src__material__app;
  const grid_tile = packages__flutter__material.src__material__grid_tile;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const divider = packages__flutter__material.src__material__divider;
  const input_border = packages__flutter__material.src__material__input_border;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const LandingView = packages__RentalAdmin__views__LandingView.views__LandingView;
  const custom_gridcell = packages__RentalAdmin__views__inventory__custom_gridcell.views__inventory__custom_gridcell;
  const intl = packages__intl__intl.intl;
  const centerer = packages__RentalAdmin__widgets__centerer.widgets__centerer;
  const google_sign_in = packages__google_sign_in__google_sign_in.google_sign_in;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const auth = packages__RentalAdmin__widgets__auth.widgets__auth;
  const actionButton = packages__RentalAdmin__widgets__actionButton.widgets__actionButton;
  const testlist = Object.create(dart.library);
  const homeView = Object.create(dart.library);
  const checkOutB = Object.create(dart.library);
  const InventoryView = Object.create(dart.library);
  const list_page = Object.create(dart.library);
  const category_page = Object.create(dart.library);
  const itemGrid = Object.create(dart.library);
  const ItemDetails = Object.create(dart.library);
  const ReservationView = Object.create(dart.library);
  const navigation = Object.create(dart.library);
  const signInScreen = Object.create(dart.library);
  const chatBoxView = Object.create(dart.library);
  const $return = Object.create(dart.library);
  const activeActivities = Object.create(dart.library);
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $split = dartx.split;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(homeView.HomeView, [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let BuildContextAndintToCard = () => (BuildContextAndintToCard = dart.constFn(dart.fnType(card.Card, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let BuildContextToLocationPage = () => (BuildContextToLocationPage = dart.constFn(dart.fnType(InventoryView.LocationPage, [framework.BuildContext])))();
  let BuildContextToReservationListPage = () => (BuildContextToReservationListPage = dart.constFn(dart.fnType(testlist.ReservationListPage, [framework.BuildContext])))();
  let BuildContextToCategoryPage = () => (BuildContextToCategoryPage = dart.constFn(dart.fnType(category_page.CategoryPage, [framework.BuildContext])))();
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let BuildContextToItemGridPage = () => (BuildContextToItemGridPage = dart.constFn(dart.fnType(itemGrid.ItemGridPage, [framework.BuildContext])))();
  let dynamicToGestureDetector = () => (dynamicToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [dart.dynamic])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let BuildContextToDetailPage = () => (BuildContextToDetailPage = dart.constFn(dart.fnType(ItemDetails.DetailPage, [framework.BuildContext])))();
  let StreamBuilderOfQuerySnapshot = () => (StreamBuilderOfQuerySnapshot = dart.constFn(async$.StreamBuilder$(cloud_firestore.QuerySnapshot)))();
  let BuildContextAndintToInkWell = () => (BuildContextAndintToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToStatelessWidget = () => (BuildContextAndAsyncSnapshotToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let StreamBuilderOfDocumentSnapshot = () => (StreamBuilderOfDocumentSnapshot = dart.constFn(async$.StreamBuilder$(cloud_firestore.DocumentSnapshot)))();
  let BuildContextAndAsyncSnapshotToText = () => (BuildContextAndAsyncSnapshotToText = dart.constFn(dart.fnType(text.Text, [framework.BuildContext, async$.AsyncSnapshot])))();
  let DocumentSnapshotToNull = () => (DocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [cloud_firestore.DocumentSnapshot])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let BuildContextTosignInScreen = () => (BuildContextTosignInScreen = dart.constFn(dart.fnType(signInScreen.signInScreen, [framework.BuildContext])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let BuildContextToSignUpPage = () => (BuildContextToSignUpPage = dart.constFn(dart.fnType(signInScreen.SignUpPage, [framework.BuildContext])))();
  let BuildContextToResetPassword = () => (BuildContextToResetPassword = dart.constFn(dart.fnType(signInScreen.ResetPassword, [framework.BuildContext])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let BuildContextToActiveActivity = () => (BuildContextToActiveActivity = dart.constFn(dart.fnType(activeActivities.ActiveActivity, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 22,
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
        [_Location_column]: 18,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 23,
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
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 43,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 43,
        [_Location_line]: 65,
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
        [_Location_column]: 50,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 75,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 70,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C48() {
      return C48 = dart.constList([], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 77,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 59,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 59,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 55,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 55,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 41,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 41,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 41,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 31,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 31,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 21,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C130 || CT.C130,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 18,
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
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 35,
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
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C155 || CT.C155,
        [BorderRadius_bottomLeft]: C155 || CT.C155,
        [BorderRadius_topRight]: C155 || CT.C155,
        [BorderRadius_topLeft]: C155 || CT.C155
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162, C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174, C175 || CT.C175, C176 || CT.C176, C177 || CT.C177], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.constList([C180 || CT.C180], widget_inspector._Location);
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C179 || CT.C179,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 108,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 95,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C188 || CT.C188,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 95,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 25,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 25,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 40,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 40
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 63,
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
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.constList([C230 || CT.C230], widget_inspector._Location);
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C229 || CT.C229,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244, C245 || CT.C245], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C243 || CT.C243,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "passedFirestoreData",
        [_Location_column]: 30,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C250 || CT.C250,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.constList([C254 || CT.C254], widget_inspector._Location);
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C253 || CT.C253,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.constList([C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C256 || CT.C256,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C260() {
      return C260 = dart.constList([C261 || CT.C261, C262 || CT.C262], widget_inspector._Location);
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C260 || CT.C260,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265], widget_inspector._Location);
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 18,
        [EdgeInsets_right]: 200,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 200
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.constList([C274 || CT.C274], widget_inspector._Location);
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C273 || CT.C273,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.constList([C278 || CT.C278], widget_inspector._Location);
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C277 || CT.C277,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C280() {
      return C280 = dart.constList([C281 || CT.C281], widget_inspector._Location);
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C280 || CT.C280,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.constList([C284 || CT.C284, C285 || CT.C285], widget_inspector._Location);
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C283 || CT.C283,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.constList([C288 || CT.C288, C289 || CT.C289], widget_inspector._Location);
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C287 || CT.C287,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.constList([C292 || CT.C292], widget_inspector._Location);
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C291 || CT.C291,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296, C297 || CT.C297], widget_inspector._Location);
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.constList([C300 || CT.C300, C301 || CT.C301], widget_inspector._Location);
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C299 || CT.C299,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C303 || CT.C303,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 48,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307], widget_inspector._Location);
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C306 || CT.C306,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.constList([C310 || CT.C310], widget_inspector._Location);
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C309 || CT.C309,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313, C314 || CT.C314], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "categoryInfo",
        [_Location_column]: 43,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.constList([C323 || CT.C323, C324 || CT.C324], widget_inspector._Location);
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C322 || CT.C322,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childAspectRatio",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327, C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334, C335 || CT.C335], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C333 || CT.C333,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C337 || CT.C337,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341, C342 || CT.C342, C343 || CT.C343, C344 || CT.C344], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.constList([C347 || CT.C347, C348 || CT.C348], widget_inspector._Location);
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C346 || CT.C346,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemSelected",
        [_Location_column]: 46,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.constList([C351 || CT.C351], widget_inspector._Location);
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C350 || CT.C350,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354], widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.constList([C357 || CT.C357, C358 || CT.C358], widget_inspector._Location);
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C356 || CT.C356,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "loading..."
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 63,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 67,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.constList([C362 || CT.C362, C363 || CT.C363], widget_inspector._Location);
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C361 || CT.C361,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 95,
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
        [_Location_column]: 24,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C369() {
      return C369 = dart.constList([C370 || CT.C370, C371 || CT.C371, C372 || CT.C372], widget_inspector._Location);
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C369 || CT.C369,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C374() {
      return C374 = dart.constList([C375 || CT.C375, C376 || CT.C376], widget_inspector._Location);
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C374 || CT.C374,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
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
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 40,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C382() {
      return C382 = dart.constList([C383 || CT.C383], widget_inspector._Location);
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C382 || CT.C382,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.constList([C386 || CT.C386, C387 || CT.C387], widget_inspector._Location);
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C385 || CT.C385,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390], widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C389 || CT.C389,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.constList([C393 || CT.C393, C394 || CT.C394, C395 || CT.C395, C396 || CT.C396, C397 || CT.C397], widget_inspector._Location);
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C392 || CT.C392,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.constList([C400 || CT.C400, C401 || CT.C401], widget_inspector._Location);
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C399 || CT.C399,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.constList([C404 || CT.C404, C405 || CT.C405, C406 || CT.C406, C407 || CT.C407], widget_inspector._Location);
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C403 || CT.C403,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C409() {
      return C409 = dart.constList([C410 || CT.C410, C411 || CT.C411], widget_inspector._Location);
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C409 || CT.C409,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 122,
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
        [_Location_column]: 14,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C417() {
      return C417 = dart.constList([C418 || CT.C418, C419 || CT.C419, C420 || CT.C420], widget_inspector._Location);
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C417 || CT.C417,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423, C424 || CT.C424], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428, C429 || CT.C429], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C431() {
      return C431 = dart.constList([C432 || CT.C432, C433 || CT.C433, C434 || CT.C434], widget_inspector._Location);
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C431 || CT.C431,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.constList([C437 || CT.C437, C438 || CT.C438, C439 || CT.C439, C440 || CT.C440], widget_inspector._Location);
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C436 || CT.C436,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C442() {
      return C442 = dart.constList([C443 || CT.C443, C444 || CT.C444], widget_inspector._Location);
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C442 || CT.C442,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 73,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.constList([C447 || CT.C447, C448 || CT.C448], widget_inspector._Location);
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C446 || CT.C446,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C450() {
      return C450 = dart.constList([C451 || CT.C451, C452 || CT.C452], widget_inspector._Location);
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C450 || CT.C450,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C454() {
      return C454 = dart.constList([C455 || CT.C455, C456 || CT.C456], widget_inspector._Location);
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C454 || CT.C454,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C458() {
      return C458 = dart.constList([C459 || CT.C459], widget_inspector._Location);
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C458 || CT.C458,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.constList([C462 || CT.C462], widget_inspector._Location);
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C461 || CT.C461,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C464() {
      return C464 = dart.constList([C465 || CT.C465], widget_inspector._Location);
    },
    get C463() {
      return C463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C464 || CT.C464,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468, C469 || CT.C469, C470 || CT.C470, C471 || CT.C471, C472 || CT.C472], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.constList([C475 || CT.C475], widget_inspector._Location);
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C474 || CT.C474,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C477() {
      return C477 = dart.constList([C478 || CT.C478, C479 || CT.C479], widget_inspector._Location);
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C477 || CT.C477,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C481() {
      return C481 = dart.constList([C482 || CT.C482], widget_inspector._Location);
    },
    get C480() {
      return C480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C481 || CT.C481,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C484 || CT.C484,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.constList([C488 || CT.C488, C489 || CT.C489, C490 || CT.C490], widget_inspector._Location);
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C487 || CT.C487,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C492() {
      return C492 = dart.constList([C493 || CT.C493], widget_inspector._Location);
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C492 || CT.C492,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C495() {
      return C495 = dart.constList([C496 || CT.C496], widget_inspector._Location);
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C495 || CT.C495,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C499() {
      return C499 = dart.constList([C500 || CT.C500, C501 || CT.C501], widget_inspector._Location);
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C499 || CT.C499,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 125,
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
        [_Location_column]: 18,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 141,
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
        [_Location_column]: 20,
        [_Location_line]: 141,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C510() {
      return C510 = dart.constList([C511 || CT.C511, C512 || CT.C512], widget_inspector._Location);
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C510 || CT.C510,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.constList([C515 || CT.C515], widget_inspector._Location);
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C514 || CT.C514,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.constList([C518 || CT.C518, C519 || CT.C519], widget_inspector._Location);
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C517 || CT.C517,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C521() {
      return C521 = dart.constList([C522 || CT.C522], widget_inspector._Location);
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C521 || CT.C521,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.constList([C525 || CT.C525, C526 || CT.C526], widget_inspector._Location);
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C524 || CT.C524,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C530() {
      return C530 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C528() {
      return C528 = dart.constList([C529 || CT.C529, C530 || CT.C530, C531 || CT.C531], widget_inspector._Location);
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C528 || CT.C528,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 218,
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
        [_Location_column]: 20,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.constList([C537 || CT.C537], widget_inspector._Location);
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C536 || CT.C536,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.constList([C540 || CT.C540, C541 || CT.C541], widget_inspector._Location);
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C539 || CT.C539,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.constList([C544 || CT.C544, C545 || CT.C545], widget_inspector._Location);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C543 || CT.C543,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C547() {
      return C547 = dart.constList([C548 || CT.C548, C549 || CT.C549], widget_inspector._Location);
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C547 || CT.C547,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.constList([C552 || CT.C552, C553 || CT.C553], widget_inspector._Location);
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C551 || CT.C551,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C556() {
      return C556 = dart.constList([C557 || CT.C557], widget_inspector._Location);
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C556 || CT.C556,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C559() {
      return C559 = dart.constList([C560 || CT.C560], widget_inspector._Location);
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C559 || CT.C559,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C562() {
      return C562 = dart.constList([C563 || CT.C563, C564 || CT.C564, C565 || CT.C565], widget_inspector._Location);
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C562 || CT.C562,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.constList([C568 || CT.C568, C569 || CT.C569], widget_inspector._Location);
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C567 || CT.C567,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 86,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C572() {
      return C572 = dart.constList([C573 || CT.C573, C574 || CT.C574], widget_inspector._Location);
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C572 || CT.C572,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C576() {
      return C576 = dart.constList([C577 || CT.C577, C578 || CT.C578, C579 || CT.C579, C580 || CT.C580], widget_inspector._Location);
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C576 || CT.C576,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C582() {
      return C582 = dart.constList([C583 || CT.C583], widget_inspector._Location);
    },
    get C581() {
      return C581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C582 || CT.C582,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C585() {
      return C585 = dart.constList([C586 || CT.C586], widget_inspector._Location);
    },
    get C584() {
      return C584 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C585 || CT.C585,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C588() {
      return C588 = dart.constList([C589 || CT.C589, C590 || CT.C590], widget_inspector._Location);
    },
    get C587() {
      return C587 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C588 || CT.C588,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C592() {
      return C592 = dart.constList([C593 || CT.C593, C594 || CT.C594, C595 || CT.C595, C596 || CT.C596], widget_inspector._Location);
    },
    get C591() {
      return C591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C592 || CT.C592,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C599() {
      return C599 = dart.constList([C600 || CT.C600, C601 || CT.C601], widget_inspector._Location);
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C599 || CT.C599,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C603() {
      return C603 = dart.constList([C604 || CT.C604, C605 || CT.C605], widget_inspector._Location);
    },
    get C602() {
      return C602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C603 || CT.C603,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C607() {
      return C607 = dart.constList([C608 || CT.C608, C609 || CT.C609], widget_inspector._Location);
    },
    get C606() {
      return C606 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C607 || CT.C607,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C612() {
      return C612 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C611() {
      return C611 = dart.constList([C612 || CT.C612, C613 || CT.C613], widget_inspector._Location);
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C611 || CT.C611,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C615() {
      return C615 = dart.constList([C616 || CT.C616], widget_inspector._Location);
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C615 || CT.C615,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C620() {
      return C620 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C618() {
      return C618 = dart.constList([C619 || CT.C619, C620 || CT.C620, C621 || CT.C621], widget_inspector._Location);
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C618 || CT.C618,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 127,
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
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 100
      });
    },
    get C628() {
      return C628 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C629() {
      return C629 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C628 || CT.C628,
        [Icon_size]: null,
        [Icon_icon]: C629 || CT.C629
      });
    },
    get C632() {
      return C632 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C635() {
      return C635 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C631() {
      return C631 = dart.constList([C632 || CT.C632, C633 || CT.C633, C634 || CT.C634, C635 || CT.C635], widget_inspector._Location);
    },
    get C630() {
      return C630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C631 || CT.C631,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C638() {
      return C638 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C637() {
      return C637 = dart.constList([C638 || CT.C638, C390 || CT.C390], widget_inspector._Location);
    },
    get C636() {
      return C636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C637 || CT.C637,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C640() {
      return C640 = dart.constList([C641 || CT.C641, C642 || CT.C642], widget_inspector._Location);
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C640 || CT.C640,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C644() {
      return C644 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59543
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C628 || CT.C628,
        [Icon_size]: null,
        [Icon_icon]: C644 || CT.C644
      });
    },
    get C647() {
      return C647 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C646() {
      return C646 = dart.constList([C647 || CT.C647, C648 || CT.C648, C649 || CT.C649, C650 || CT.C650], widget_inspector._Location);
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C646 || CT.C646,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C653() {
      return C653 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C652() {
      return C652 = dart.constList([C653 || CT.C653, C654 || CT.C654], widget_inspector._Location);
    },
    get C651() {
      return C651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C652 || CT.C652,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C656() {
      return C656 = dart.constList([C657 || CT.C657], widget_inspector._Location);
    },
    get C655() {
      return C655 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C656 || CT.C656,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C659() {
      return C659 = dart.constList([C660 || CT.C660, C661 || CT.C661], widget_inspector._Location);
    },
    get C658() {
      return C658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C659 || CT.C659,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C663() {
      return C663 = dart.constList([C664 || CT.C664], widget_inspector._Location);
    },
    get C662() {
      return C662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C663 || CT.C663,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C666() {
      return C666 = dart.constList([C667 || CT.C667, C668 || CT.C668], widget_inspector._Location);
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C666 || CT.C666,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C670() {
      return C670 = dart.constList([C671 || CT.C671], widget_inspector._Location);
    },
    get C669() {
      return C669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C670 || CT.C670,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C673() {
      return C673 = dart.constList([C674 || CT.C674], widget_inspector._Location);
    },
    get C672() {
      return C672 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C673 || CT.C673,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C678() {
      return C678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C676() {
      return C676 = dart.constList([C677 || CT.C677, C678 || CT.C678], widget_inspector._Location);
    },
    get C675() {
      return C675 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C676 || CT.C676,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 238,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C682() {
      return C682 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C680() {
      return C680 = dart.constList([C681 || CT.C681, C682 || CT.C682], widget_inspector._Location);
    },
    get C679() {
      return C679 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C680 || CT.C680,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C684() {
      return C684 = dart.constList([C685 || CT.C685], widget_inspector._Location);
    },
    get C683() {
      return C683 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C684 || CT.C684,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.constList([C688 || CT.C688], widget_inspector._Location);
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C687 || CT.C687,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C690() {
      return C690 = dart.constList([C691 || CT.C691, C692 || CT.C692], widget_inspector._Location);
    },
    get C689() {
      return C689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C690 || CT.C690,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C694() {
      return C694 = dart.constList([C695 || CT.C695, C696 || CT.C696], widget_inspector._Location);
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C694 || CT.C694,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C697() {
      return C697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C701() {
      return C701 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C705() {
      return C705 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C709() {
      return C709 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C699() {
      return C699 = dart.constList([C700 || CT.C700, C701 || CT.C701, C702 || CT.C702, C703 || CT.C703, C704 || CT.C704, C705 || CT.C705, C706 || CT.C706, C707 || CT.C707, C708 || CT.C708, C709 || CT.C709, C710 || CT.C710], widget_inspector._Location);
    },
    get C698() {
      return C698 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C699 || CT.C699,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C713() {
      return C713 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C712() {
      return C712 = dart.constList([C713 || CT.C713, C714 || CT.C714], widget_inspector._Location);
    },
    get C711() {
      return C711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C712 || CT.C712,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C717() {
      return C717 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C718() {
      return C718 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C716() {
      return C716 = dart.constList([C717 || CT.C717, C718 || CT.C718], widget_inspector._Location);
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C716 || CT.C716,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C721() {
      return C721 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 29,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C720() {
      return C720 = dart.constList([C721 || CT.C721, C722 || CT.C722], widget_inspector._Location);
    },
    get C719() {
      return C719 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C720 || CT.C720,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C725() {
      return C725 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C724() {
      return C724 = dart.constList([C725 || CT.C725], widget_inspector._Location);
    },
    get C723() {
      return C723 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C724 || CT.C724,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C728() {
      return C728 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C727() {
      return C727 = dart.constList([C728 || CT.C728, C729 || CT.C729], widget_inspector._Location);
    },
    get C726() {
      return C726 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C727 || CT.C727,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C731() {
      return C731 = dart.constList([C732 || CT.C732], widget_inspector._Location);
    },
    get C730() {
      return C730 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C731 || CT.C731,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C734() {
      return C734 = dart.constList([C735 || CT.C735, C736 || CT.C736], widget_inspector._Location);
    },
    get C733() {
      return C733 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C734 || CT.C734,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C742() {
      return C742 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C743() {
      return C743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C744() {
      return C744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C745() {
      return C745 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C739() {
      return C739 = dart.constList([C740 || CT.C740, C741 || CT.C741, C742 || CT.C742, C743 || CT.C743, C744 || CT.C744, C745 || CT.C745, C746 || CT.C746, C747 || CT.C747, C748 || CT.C748, C749 || CT.C749, C750 || CT.C750], widget_inspector._Location);
    },
    get C738() {
      return C738 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C739 || CT.C739,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C753() {
      return C753 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C752() {
      return C752 = dart.constList([C753 || CT.C753, C754 || CT.C754], widget_inspector._Location);
    },
    get C751() {
      return C751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C752 || CT.C752,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C757() {
      return C757 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C758() {
      return C758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C756() {
      return C756 = dart.constList([C757 || CT.C757, C758 || CT.C758], widget_inspector._Location);
    },
    get C755() {
      return C755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C756 || CT.C756,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C760() {
      return C760 = dart.constList([C761 || CT.C761], widget_inspector._Location);
    },
    get C759() {
      return C759 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C760 || CT.C760,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C764() {
      return C764 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C765() {
      return C765 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C763() {
      return C763 = dart.constList([C764 || CT.C764, C765 || CT.C765], widget_inspector._Location);
    },
    get C762() {
      return C762 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C763 || CT.C763,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C768() {
      return C768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C767() {
      return C767 = dart.constList([C768 || CT.C768], widget_inspector._Location);
    },
    get C766() {
      return C766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C767 || CT.C767,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 365,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C769() {
      return C769 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C773() {
      return C773 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C771() {
      return C771 = dart.constList([C772 || CT.C772, C773 || CT.C773], widget_inspector._Location);
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C771 || CT.C771,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C776() {
      return C776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C777() {
      return C777 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C775() {
      return C775 = dart.constList([C776 || CT.C776, C777 || CT.C777], widget_inspector._Location);
    },
    get C774() {
      return C774 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C775 || CT.C775,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C779() {
      return C779 = dart.constList([C780 || CT.C780, C781 || CT.C781], widget_inspector._Location);
    },
    get C778() {
      return C778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C779 || CT.C779,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C783() {
      return C783 = dart.constList([C784 || CT.C784], widget_inspector._Location);
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C783 || CT.C783,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 396,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C787() {
      return C787 = dart.constList([C788 || CT.C788, C789 || CT.C789], widget_inspector._Location);
    },
    get C786() {
      return C786 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C787 || CT.C787,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C793() {
      return C793 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C791() {
      return C791 = dart.constList([C792 || CT.C792, C793 || CT.C793], widget_inspector._Location);
    },
    get C790() {
      return C790 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C791 || CT.C791,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 391,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C795() {
      return C795 = dart.constList([C796 || CT.C796], widget_inspector._Location);
    },
    get C794() {
      return C794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C795 || CT.C795,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C799() {
      return C799 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C798() {
      return C798 = dart.constList([C799 || CT.C799], widget_inspector._Location);
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C798 || CT.C798,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 387,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C802() {
      return C802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C801() {
      return C801 = dart.constList([C802 || CT.C802], widget_inspector._Location);
    },
    get C800() {
      return C800 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C801 || CT.C801,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C805() {
      return C805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C806() {
      return C806 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C804() {
      return C804 = dart.constList([C805 || CT.C805, C806 || CT.C806], widget_inspector._Location);
    },
    get C803() {
      return C803 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C804 || CT.C804,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C809() {
      return C809 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C808() {
      return C808 = dart.constList([C809 || CT.C809], widget_inspector._Location);
    },
    get C807() {
      return C807 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C808 || CT.C808,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C812() {
      return C812 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C813() {
      return C813 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C811() {
      return C811 = dart.constList([C812 || CT.C812, C813 || CT.C813], widget_inspector._Location);
    },
    get C810() {
      return C810 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C811 || CT.C811,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C816() {
      return C816 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C815() {
      return C815 = dart.constList([C816 || CT.C816], widget_inspector._Location);
    },
    get C814() {
      return C814 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C815 || CT.C815,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C819() {
      return C819 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C818() {
      return C818 = dart.constList([C819 || CT.C819], widget_inspector._Location);
    },
    get C817() {
      return C817 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C818 || CT.C818,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 434,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C822() {
      return C822 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C823() {
      return C823 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C821() {
      return C821 = dart.constList([C822 || CT.C822, C823 || CT.C823], widget_inspector._Location);
    },
    get C820() {
      return C820 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C821 || CT.C821,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 437,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C826() {
      return C826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C827() {
      return C827 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C825() {
      return C825 = dart.constList([C826 || CT.C826, C827 || CT.C827], widget_inspector._Location);
    },
    get C824() {
      return C824 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C825 || CT.C825,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 436,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C830() {
      return C830 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C831() {
      return C831 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C829() {
      return C829 = dart.constList([C830 || CT.C830, C831 || CT.C831, C832 || CT.C832], widget_inspector._Location);
    },
    get C828() {
      return C828 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C829 || CT.C829,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C835() {
      return C835 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C836() {
      return C836 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C834() {
      return C834 = dart.constList([C835 || CT.C835, C836 || CT.C836], widget_inspector._Location);
    },
    get C833() {
      return C833 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C834 || CT.C834,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 445,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C840() {
      return C840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C838() {
      return C838 = dart.constList([C839 || CT.C839, C840 || CT.C840], widget_inspector._Location);
    },
    get C837() {
      return C837 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C838 || CT.C838,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 446,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C844() {
      return C844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C842() {
      return C842 = dart.constList([C843 || CT.C843, C844 || CT.C844], widget_inspector._Location);
    },
    get C841() {
      return C841 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C842 || CT.C842,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 455,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C848() {
      return C848 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C846() {
      return C846 = dart.constList([C847 || CT.C847, C848 || CT.C848], widget_inspector._Location);
    },
    get C845() {
      return C845 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C846 || CT.C846,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C851() {
      return C851 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C850() {
      return C850 = dart.constList([C851 || CT.C851], widget_inspector._Location);
    },
    get C849() {
      return C849 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C850 || CT.C850,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 467,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C854() {
      return C854 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C855() {
      return C855 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C856() {
      return C856 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C853() {
      return C853 = dart.constList([C854 || CT.C854, C855 || CT.C855, C856 || CT.C856], widget_inspector._Location);
    },
    get C852() {
      return C852 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C853 || CT.C853,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C859() {
      return C859 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C860() {
      return C860 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C858() {
      return C858 = dart.constList([C859 || CT.C859, C860 || CT.C860], widget_inspector._Location);
    },
    get C857() {
      return C857 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C858 || CT.C858,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 30
      });
    },
    get C863() {
      return C863 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C862() {
      return C862 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C628 || CT.C628,
        [Icon_size]: null,
        [Icon_icon]: C863 || CT.C863
      });
    },
    get C866() {
      return C866 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 476,
        [_Location_file]: null
      });
    },
    get C867() {
      return C867 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 17,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 17,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C869() {
      return C869 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C865() {
      return C865 = dart.constList([C866 || CT.C866, C867 || CT.C867, C868 || CT.C868, C869 || CT.C869], widget_inspector._Location);
    },
    get C864() {
      return C864 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C865 || CT.C865,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 475,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C873() {
      return C873 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 475,
        [_Location_file]: null
      });
    },
    get C871() {
      return C871 = dart.constList([C872 || CT.C872, C873 || CT.C873], widget_inspector._Location);
    },
    get C870() {
      return C870 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C871 || CT.C871,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C876() {
      return C876 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C877() {
      return C877 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C875() {
      return C875 = dart.constList([C876 || CT.C876, C877 || CT.C877], widget_inspector._Location);
    },
    get C874() {
      return C874 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C875 || CT.C875,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 501,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C880() {
      return C880 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 504,
        [_Location_file]: null
      });
    },
    get C879() {
      return C879 = dart.constList([C880 || CT.C880], widget_inspector._Location);
    },
    get C878() {
      return C878 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C879 || CT.C879,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 503,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C884() {
      return C884 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C882() {
      return C882 = dart.constList([C883 || CT.C883, C884 || CT.C884], widget_inspector._Location);
    },
    get C881() {
      return C881 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C882 || CT.C882,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 523,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C887() {
      return C887 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 523,
        [_Location_file]: null
      });
    },
    get C886() {
      return C886 = dart.constList([C887 || CT.C887], widget_inspector._Location);
    },
    get C885() {
      return C885 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C886 || CT.C886,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 522,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C890() {
      return C890 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C889() {
      return C889 = dart.constList([C890 || CT.C890, C891 || CT.C891], widget_inspector._Location);
    },
    get C888() {
      return C888 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C889 || CT.C889,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 519,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C896() {
      return C896 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C897() {
      return C897 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C898() {
      return C898 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C899() {
      return C899 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C900() {
      return C900 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C901() {
      return C901 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 535,
        [_Location_file]: null
      });
    },
    get C902() {
      return C902 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 536,
        [_Location_file]: null
      });
    },
    get C903() {
      return C903 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C904() {
      return C904 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C893() {
      return C893 = dart.constList([C894 || CT.C894, C895 || CT.C895, C896 || CT.C896, C897 || CT.C897, C898 || CT.C898, C899 || CT.C899, C900 || CT.C900, C901 || CT.C901, C902 || CT.C902, C903 || CT.C903, C904 || CT.C904], widget_inspector._Location);
    },
    get C892() {
      return C892 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C893 || CT.C893,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 511,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C907() {
      return C907 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C908() {
      return C908 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 511,
        [_Location_file]: null
      });
    },
    get C906() {
      return C906 = dart.constList([C907 || CT.C907, C908 || CT.C908], widget_inspector._Location);
    },
    get C905() {
      return C905 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C906 || CT.C906,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 509,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 507,
        [_Location_file]: null
      });
    },
    get C912() {
      return C912 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C910() {
      return C910 = dart.constList([C911 || CT.C911, C912 || CT.C912], widget_inspector._Location);
    },
    get C909() {
      return C909 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C910 || CT.C910,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 506,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C914() {
      return C914 = dart.constList([C915 || CT.C915], widget_inspector._Location);
    },
    get C913() {
      return C913 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C914 || CT.C914,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 544,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C918() {
      return C918 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C917() {
      return C917 = dart.constList([C918 || CT.C918], widget_inspector._Location);
    },
    get C916() {
      return C916 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C917 || CT.C917,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 443,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C921() {
      return C921 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C920() {
      return C920 = dart.constList([C921 || CT.C921], widget_inspector._Location);
    },
    get C919() {
      return C919 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C920 || CT.C920,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 442,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C924() {
      return C924 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C925() {
      return C925 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C926() {
      return C926 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C923() {
      return C923 = dart.constList([C924 || CT.C924, C925 || CT.C925, C926 || CT.C926], widget_inspector._Location);
    },
    get C922() {
      return C922 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C923 || CT.C923,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C929() {
      return C929 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C928() {
      return C928 = dart.constList([C929 || CT.C929], widget_inspector._Location);
    },
    get C927() {
      return C927 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C928 || CT.C928,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 431,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C932() {
      return C932 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C931() {
      return C931 = dart.constList([C932 || CT.C932], widget_inspector._Location);
    },
    get C930() {
      return C930 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C931 || CT.C931,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 613,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C935() {
      return C935 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C936() {
      return C936 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C934() {
      return C934 = dart.constList([C935 || CT.C935, C936 || CT.C936], widget_inspector._Location);
    },
    get C933() {
      return C933 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C934 || CT.C934,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 612,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C937() {
      return C937 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 50,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 50
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C941() {
      return C941 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C942() {
      return C942 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 628,
        [_Location_file]: null
      });
    },
    get C943() {
      return C943 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C939() {
      return C939 = dart.constList([C940 || CT.C940, C941 || CT.C941, C942 || CT.C942, C943 || CT.C943], widget_inspector._Location);
    },
    get C938() {
      return C938 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C939 || CT.C939,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 622,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C946() {
      return C946 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C947() {
      return C947 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C945() {
      return C945 = dart.constList([C946 || CT.C946, C947 || CT.C947], widget_inspector._Location);
    },
    get C944() {
      return C944 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C945 || CT.C945,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C950() {
      return C950 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C949() {
      return C949 = dart.constList([C950 || CT.C950], widget_inspector._Location);
    },
    get C948() {
      return C948 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C949 || CT.C949,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C953() {
      return C953 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C954() {
      return C954 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 659,
        [_Location_file]: null
      });
    },
    get C955() {
      return C955 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C952() {
      return C952 = dart.constList([C953 || CT.C953, C954 || CT.C954, C955 || CT.C955], widget_inspector._Location);
    },
    get C951() {
      return C951 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C952 || CT.C952,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C958() {
      return C958 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 652,
        [_Location_file]: null
      });
    },
    get C959() {
      return C959 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 653,
        [_Location_file]: null
      });
    },
    get C957() {
      return C957 = dart.constList([C958 || CT.C958, C959 || CT.C959], widget_inspector._Location);
    },
    get C956() {
      return C956 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C957 || CT.C957,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 651,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C962() {
      return C962 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C961() {
      return C961 = dart.constList([C962 || CT.C962], widget_inspector._Location);
    },
    get C960() {
      return C960 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C961 || CT.C961,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 679,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C965() {
      return C965 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 685,
        [_Location_file]: null
      });
    },
    get C966() {
      return C966 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C967() {
      return C967 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 691,
        [_Location_file]: null
      });
    },
    get C964() {
      return C964 = dart.constList([C965 || CT.C965, C966 || CT.C966, C967 || CT.C967], widget_inspector._Location);
    },
    get C963() {
      return C963 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C964 || CT.C964,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 684,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C970() {
      return C970 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C971() {
      return C971 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 684,
        [_Location_file]: null
      });
    },
    get C969() {
      return C969 = dart.constList([C970 || CT.C970, C971 || CT.C971], widget_inspector._Location);
    },
    get C968() {
      return C968 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C969 || CT.C969,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 682,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C974() {
      return C974 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 711,
        [_Location_file]: null
      });
    },
    get C973() {
      return C973 = dart.constList([C974 || CT.C974], widget_inspector._Location);
    },
    get C972() {
      return C972 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C973 || CT.C973,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 710,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C977() {
      return C977 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 716,
        [_Location_file]: null
      });
    },
    get C978() {
      return C978 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 720,
        [_Location_file]: null
      });
    },
    get C979() {
      return C979 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 721,
        [_Location_file]: null
      });
    },
    get C980() {
      return C980 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 722,
        [_Location_file]: null
      });
    },
    get C981() {
      return C981 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 724,
        [_Location_file]: null
      });
    },
    get C976() {
      return C976 = dart.constList([C977 || CT.C977, C978 || CT.C978, C979 || CT.C979, C980 || CT.C980, C981 || CT.C981], widget_inspector._Location);
    },
    get C975() {
      return C975 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C976 || CT.C976,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 715,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C984() {
      return C984 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 714,
        [_Location_file]: null
      });
    },
    get C985() {
      return C985 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 715,
        [_Location_file]: null
      });
    },
    get C983() {
      return C983 = dart.constList([C984 || CT.C984, C985 || CT.C985], widget_inspector._Location);
    },
    get C982() {
      return C982 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C983 || CT.C983,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 713,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C988() {
      return C988 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 743,
        [_Location_file]: null
      });
    },
    get C987() {
      return C987 = dart.constList([C988 || CT.C988], widget_inspector._Location);
    },
    get C986() {
      return C986 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C987 || CT.C987,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 742,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C991() {
      return C991 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 748,
        [_Location_file]: null
      });
    },
    get C992() {
      return C992 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 752,
        [_Location_file]: null
      });
    },
    get C993() {
      return C993 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 753,
        [_Location_file]: null
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 754,
        [_Location_file]: null
      });
    },
    get C990() {
      return C990 = dart.constList([C991 || CT.C991, C992 || CT.C992, C993 || CT.C993, C994 || CT.C994], widget_inspector._Location);
    },
    get C989() {
      return C989 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C990 || CT.C990,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 747,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C997() {
      return C997 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 746,
        [_Location_file]: null
      });
    },
    get C998() {
      return C998 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 747,
        [_Location_file]: null
      });
    },
    get C996() {
      return C996 = dart.constList([C997 || CT.C997, C998 || CT.C998], widget_inspector._Location);
    },
    get C995() {
      return C995 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C996 || CT.C996,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 745,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1001() {
      return C1001 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 774,
        [_Location_file]: null
      });
    },
    get C1000() {
      return C1000 = dart.constList([C1001 || CT.C1001], widget_inspector._Location);
    },
    get C999() {
      return C999 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1000 || CT.C1000,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 773,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1004() {
      return C1004 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 18,
        [_Location_line]: 776,
        [_Location_file]: null
      });
    },
    get C1003() {
      return C1003 = dart.constList([C1004 || CT.C1004], widget_inspector._Location);
    },
    get C1002() {
      return C1002 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1003 || CT.C1003,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 776,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1007() {
      return C1007 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C1006() {
      return C1006 = dart.constList([C1007 || CT.C1007], widget_inspector._Location);
    },
    get C1005() {
      return C1005 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1006 || CT.C1006,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 782,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1010() {
      return C1010 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 15,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C1011() {
      return C1011 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C1012() {
      return C1012 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C1013() {
      return C1013 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C1014() {
      return C1014 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C1015() {
      return C1015 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 15,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C1016() {
      return C1016 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 15,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C1009() {
      return C1009 = dart.constList([C1010 || CT.C1010, C1011 || CT.C1011, C1012 || CT.C1012, C1013 || CT.C1013, C1014 || CT.C1014, C1015 || CT.C1015, C1016 || CT.C1016], widget_inspector._Location);
    },
    get C1008() {
      return C1008 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1009 || CT.C1009,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 779,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1019() {
      return C1019 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 778,
        [_Location_file]: null
      });
    },
    get C1020() {
      return C1020 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 779,
        [_Location_file]: null
      });
    },
    get C1018() {
      return C1018 = dart.constList([C1019 || CT.C1019, C1020 || CT.C1020], widget_inspector._Location);
    },
    get C1017() {
      return C1017 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1018 || CT.C1018,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 777,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1023() {
      return C1023 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C1024() {
      return C1024 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C1022() {
      return C1022 = dart.constList([C1023 || CT.C1023, C1024 || CT.C1024], widget_inspector._Location);
    },
    get C1021() {
      return C1021 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1022 || CT.C1022,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 617,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1027() {
      return C1027 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C1026() {
      return C1026 = dart.constList([C1027 || CT.C1027], widget_inspector._Location);
    },
    get C1025() {
      return C1025 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1026 || CT.C1026,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 616,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1030() {
      return C1030 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C1031() {
      return C1031 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C1032() {
      return C1032 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C1029() {
      return C1029 = dart.constList([C1030 || CT.C1030, C1031 || CT.C1031, C1032 || CT.C1032], widget_inspector._Location);
    },
    get C1028() {
      return C1028 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1029 || CT.C1029,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 610,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C1033() {
      return C1033 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1036() {
      return C1036 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C1035() {
      return C1035 = dart.constList([C1036 || CT.C1036], widget_inspector._Location);
    },
    get C1034() {
      return C1034 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1035 || CT.C1035,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1039() {
      return C1039 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1038() {
      return C1038 = dart.constList([C1039 || CT.C1039], widget_inspector._Location);
    },
    get C1037() {
      return C1037 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1038 || CT.C1038,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1042() {
      return C1042 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1041() {
      return C1041 = dart.constList([C1042 || CT.C1042], widget_inspector._Location);
    },
    get C1040() {
      return C1040 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1041 || CT.C1041,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1045() {
      return C1045 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C1044() {
      return C1044 = dart.constList([C1045 || CT.C1045], widget_inspector._Location);
    },
    get C1043() {
      return C1043 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1044 || CT.C1044,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1048() {
      return C1048 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C1049() {
      return C1049 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C1047() {
      return C1047 = dart.constList([C1048 || CT.C1048, C1049 || CT.C1049], widget_inspector._Location);
    },
    get C1046() {
      return C1046 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1047 || CT.C1047,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C1050() {
      return C1050 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 82,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1053() {
      return C1053 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1054() {
      return C1054 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1052() {
      return C1052 = dart.constList([C1053 || CT.C1053, C1054 || CT.C1054], widget_inspector._Location);
    },
    get C1051() {
      return C1051 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1052 || CT.C1052,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1057() {
      return C1057 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1058() {
      return C1058 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C1056() {
      return C1056 = dart.constList([C1057 || CT.C1057, C1058 || CT.C1058], widget_inspector._Location);
    },
    get C1055() {
      return C1055 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1056 || CT.C1056,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1061() {
      return C1061 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1062() {
      return C1062 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C1063() {
      return C1063 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C1064() {
      return C1064 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C1060() {
      return C1060 = dart.constList([C1061 || CT.C1061, C1062 || CT.C1062, C1063 || CT.C1063, C1064 || CT.C1064], widget_inspector._Location);
    },
    get C1059() {
      return C1059 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1060 || CT.C1060,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1067() {
      return C1067 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1068() {
      return C1068 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C1066() {
      return C1066 = dart.constList([C1067 || CT.C1067, C1068 || CT.C1068], widget_inspector._Location);
    },
    get C1065() {
      return C1065 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1066 || CT.C1066,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1071() {
      return C1071 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C1070() {
      return C1070 = dart.constList([C1071 || CT.C1071], widget_inspector._Location);
    },
    get C1069() {
      return C1069 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1070 || CT.C1070,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1074() {
      return C1074 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C1073() {
      return C1073 = dart.constList([C1074 || CT.C1074], widget_inspector._Location);
    },
    get C1072() {
      return C1072 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1073 || CT.C1073,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C1077() {
      return C1077 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C1076() {
      return C1076 = dart.constList([C1077 || CT.C1077], widget_inspector._Location);
    },
    get C1075() {
      return C1075 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1076 || CT.C1076,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1080() {
      return C1080 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C1081() {
      return C1081 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C1079() {
      return C1079 = dart.constList([C1080 || CT.C1080, C1081 || CT.C1081], widget_inspector._Location);
    },
    get C1078() {
      return C1078 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1079 || CT.C1079,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1084() {
      return C1084 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C1085() {
      return C1085 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1083() {
      return C1083 = dart.constList([C1084 || CT.C1084, C1085 || CT.C1085], widget_inspector._Location);
    },
    get C1082() {
      return C1082 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1083 || CT.C1083,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1088() {
      return C1088 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C1089() {
      return C1089 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C1087() {
      return C1087 = dart.constList([C1088 || CT.C1088, C1089 || CT.C1089], widget_inspector._Location);
    },
    get C1086() {
      return C1086 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1087 || CT.C1087,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1092() {
      return C1092 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C1091() {
      return C1091 = dart.constList([C1092 || CT.C1092], widget_inspector._Location);
    },
    get C1090() {
      return C1090 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1091 || CT.C1091,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1095() {
      return C1095 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C1094() {
      return C1094 = dart.constList([C1095 || CT.C1095], widget_inspector._Location);
    },
    get C1093() {
      return C1093 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1094 || CT.C1094,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1098() {
      return C1098 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C1097() {
      return C1097 = dart.constList([C1098 || CT.C1098], widget_inspector._Location);
    },
    get C1096() {
      return C1096 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1097 || CT.C1097,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1101() {
      return C1101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C1100() {
      return C1100 = dart.constList([C1101 || CT.C1101], widget_inspector._Location);
    },
    get C1099() {
      return C1099 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1100 || CT.C1100,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1104() {
      return C1104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 43,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C1105() {
      return C1105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 43,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C1103() {
      return C1103 = dart.constList([C1104 || CT.C1104, C1105 || CT.C1105], widget_inspector._Location);
    },
    get C1102() {
      return C1102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1103 || CT.C1103,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1108() {
      return C1108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C1107() {
      return C1107 = dart.constList([C1108 || CT.C1108], widget_inspector._Location);
    },
    get C1106() {
      return C1106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1107 || CT.C1107,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1111() {
      return C1111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C1112() {
      return C1112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C1110() {
      return C1110 = dart.constList([C1111 || CT.C1111, C1112 || CT.C1112], widget_inspector._Location);
    },
    get C1109() {
      return C1109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1110 || CT.C1110,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1115() {
      return C1115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1114() {
      return C1114 = dart.constList([C1115 || CT.C1115], widget_inspector._Location);
    },
    get C1113() {
      return C1113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1114 || CT.C1114,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1118() {
      return C1118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C1117() {
      return C1117 = dart.constList([C1118 || CT.C1118], widget_inspector._Location);
    },
    get C1116() {
      return C1116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1117 || CT.C1117,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1121() {
      return C1121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 75,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C1120() {
      return C1120 = dart.constList([C1121 || CT.C1121], widget_inspector._Location);
    },
    get C1119() {
      return C1119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1120 || CT.C1120,
        [_Location_name]: null,
        [_Location_column]: 70,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1122() {
      return C1122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 77,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1125() {
      return C1125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 59,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C1126() {
      return C1126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 59,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C1124() {
      return C1124 = dart.constList([C1125 || CT.C1125, C1126 || CT.C1126], widget_inspector._Location);
    },
    get C1123() {
      return C1123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1124 || CT.C1124,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1129() {
      return C1129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 55,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C1130() {
      return C1130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 55,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C1128() {
      return C1128 = dart.constList([C1129 || CT.C1129, C1130 || CT.C1130], widget_inspector._Location);
    },
    get C1127() {
      return C1127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1128 || CT.C1128,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1133() {
      return C1133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C1134() {
      return C1134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C1132() {
      return C1132 = dart.constList([C1133 || CT.C1133, C1134 || CT.C1134], widget_inspector._Location);
    },
    get C1131() {
      return C1131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1132 || CT.C1132,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1137() {
      return C1137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 41,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C1138() {
      return C1138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 41,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C1139() {
      return C1139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 41,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C1136() {
      return C1136 = dart.constList([C1137 || CT.C1137, C1138 || CT.C1138, C1139 || CT.C1139], widget_inspector._Location);
    },
    get C1135() {
      return C1135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1136 || CT.C1136,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1142() {
      return C1142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C1143() {
      return C1143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 31,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C1144() {
      return C1144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 31,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C1141() {
      return C1141 = dart.constList([C1142 || CT.C1142, C1143 || CT.C1143, C1144 || CT.C1144], widget_inspector._Location);
    },
    get C1140() {
      return C1140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1141 || CT.C1141,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1147() {
      return C1147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C1146() {
      return C1146 = dart.constList([C1147 || CT.C1147], widget_inspector._Location);
    },
    get C1145() {
      return C1145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1146 || CT.C1146,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1150() {
      return C1150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C1151() {
      return C1151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C1149() {
      return C1149 = dart.constList([C1150 || CT.C1150, C1151 || CT.C1151], widget_inspector._Location);
    },
    get C1148() {
      return C1148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1149 || CT.C1149,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1154() {
      return C1154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1155() {
      return C1155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C1153() {
      return C1153 = dart.constList([C1154 || CT.C1154, C1155 || CT.C1155], widget_inspector._Location);
    },
    get C1152() {
      return C1152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1153 || CT.C1153,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1158() {
      return C1158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1157() {
      return C1157 = dart.constList([C1158 || CT.C1158], widget_inspector._Location);
    },
    get C1156() {
      return C1156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1157 || CT.C1157,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1161() {
      return C1161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C1160() {
      return C1160 = dart.constList([C1161 || CT.C1161], widget_inspector._Location);
    },
    get C1159() {
      return C1159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1160 || CT.C1160,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1164() {
      return C1164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C1165() {
      return C1165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C1163() {
      return C1163 = dart.constList([C1164 || CT.C1164, C1165 || CT.C1165], widget_inspector._Location);
    },
    get C1162() {
      return C1162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1163 || CT.C1163,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1168() {
      return C1168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C1167() {
      return C1167 = dart.constList([C1168 || CT.C1168], widget_inspector._Location);
    },
    get C1166() {
      return C1166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1167 || CT.C1167,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1171() {
      return C1171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C1172() {
      return C1172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C1170() {
      return C1170 = dart.constList([C1171 || CT.C1171, C1172 || CT.C1172], widget_inspector._Location);
    },
    get C1169() {
      return C1169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1170 || CT.C1170,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1175() {
      return C1175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C1174() {
      return C1174 = dart.constList([C1175 || CT.C1175], widget_inspector._Location);
    },
    get C1173() {
      return C1173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1174 || CT.C1174,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1178() {
      return C1178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C1179() {
      return C1179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C1177() {
      return C1177 = dart.constList([C1178 || CT.C1178, C1179 || CT.C1179], widget_inspector._Location);
    },
    get C1176() {
      return C1176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1177 || CT.C1177,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C1182() {
      return C1182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C1183() {
      return C1183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C1184() {
      return C1184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C1181() {
      return C1181 = dart.constList([C1182 || CT.C1182, C1183 || CT.C1183, C1184 || CT.C1184], widget_inspector._Location);
    },
    get C1180() {
      return C1180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1181 || CT.C1181,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    }
  });
  testlist.ReservationListPage = class ReservationListPage extends framework.StatefulWidget {
    createState() {
      return new testlist._ReservationListPage.new();
    }
  };
  (testlist.ReservationListPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    testlist.ReservationListPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = testlist.ReservationListPage.prototype;
  dart.addTypeTests(testlist.ReservationListPage);
  dart.setMethodSignature(testlist.ReservationListPage, () => ({
    __proto__: dart.getMethods(testlist.ReservationListPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(testlist.ReservationListPage, "package:RentalAdmin/widgets/testlist.dart");
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
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C25;
  let C24;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  let C46;
  let C45;
  let C44;
  let C48;
  let C47;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C75;
  let C74;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C83;
  let C82;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C85;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C91;
  let C90;
  let C95;
  let C94;
  let C93;
  let C96;
  let C99;
  let C100;
  let C98;
  let C97;
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C113;
  let C112;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C120;
  let C119;
  let C124;
  let C123;
  let C122;
  let C127;
  let C128;
  let C126;
  let C125;
  let C131;
  let C130;
  let C129;
  let C134;
  let C133;
  let C132;
  testlist._ReservationListPage = class _ReservationListPage extends framework.State$(testlist.ReservationListPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reservations For Today", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: this.reservation(), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new card.Card.new({child: new list_tile.ListTile.new({title: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), subtitle: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), onTap: dart.fn(() => {
                      dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), content: new text_field.TextField.new({controller: testlist._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new flat_button.FlatButton.new({child: new text.Text.new("CONFIRM", {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Please remember to return the Item, enjoy!", {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), onPressed: dart.fn(() => {
                                          navigator.Navigator.of(context).pop(core.Object);
                                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), BuildContextToHomeView())}));
                                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), BuildContextToAlertDialog())});
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), BuildContextToAlertDialog())});
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: C74 || CT.C74});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").where("status", {isEqualTo: "Reserved"}).getDocuments());
        return itemListDOC.documents;
      });
    }
    customCell(index, snapshot) {
      return new material.Material.new({child: new ink_well.InkWell.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey, blurRadius: 10.0})])}), child: new card.Card.new({child: new container.Container.new({child: new basic.Padding.new({padding: C85 || CT.C85, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 15.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), new spacer.Spacer.new({$creationLocationd_0dea112b090073317d4: C96 || CT.C96}), new basic.Stack.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["startTime"])), {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.teal.shade900}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97})]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101})]), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {style: new text_style.TextStyle.new({fontSize: 10.0, color: colors.Colors.teal}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108})]), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), $creationLocationd_0dea112b090073317d4: C132 || CT.C132});
    }
  };
  (testlist._ReservationListPage.new = function() {
    testlist._ReservationListPage.__proto__.new.call(this);
    ;
  }).prototype = testlist._ReservationListPage.prototype;
  dart.addTypeTests(testlist._ReservationListPage);
  dart.setMethodSignature(testlist._ReservationListPage, () => ({
    __proto__: dart.getMethods(testlist._ReservationListPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    reservation: dart.fnType(container.Container, []),
    getFirestoreData: dart.fnType(async.Future, []),
    customCell: dart.fnType(framework.Widget, [core.int, async$.AsyncSnapshot])
  }));
  dart.setLibraryUri(testlist._ReservationListPage, "package:RentalAdmin/widgets/testlist.dart");
  dart.defineLazy(testlist, {
    /*testlist._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  let C135;
  let C138;
  let C137;
  let C136;
  let C141;
  let C140;
  let C139;
  let C144;
  let C145;
  let C143;
  let C142;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C153;
  let C151;
  let C150;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C155;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C154;
  let C158;
  let C157;
  let C156;
  let C161;
  let C162;
  let C163;
  let C164;
  let C160;
  let C159;
  let C165;
  let C166;
  let C167;
  let C170;
  let C169;
  let C168;
  let C173;
  let C174;
  let C175;
  let C176;
  let C177;
  let C172;
  let C171;
  homeView.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C135 || CT.C135}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), this.contentBoard(context)]), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C142 || CT.C142});
    }
    contentBoard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([this.rightDashboard(framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C150 || CT.C150});
    }
    leftDashboard(context) {
      return new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 2, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C154 || CT.C154}), child: new basic.Column.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159});
    }
    rightDashboard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(5.0, 5.0, 5.0, 5.0), height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C154 || CT.C154}), child: new basic.Column.new({children: JSArrayOfWidget().of([new checkOutB.CheckingIn.new({$creationLocationd_0dea112b090073317d4: C165 || CT.C165}), new $return.Returning.new({$creationLocationd_0dea112b090073317d4: C166 || CT.C166}), new LandingView.Landing.new({$creationLocationd_0dea112b090073317d4: C167 || CT.C167})]), $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171});
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
    rightDashboard: dart.fnType(container.Container, [framework.BuildContext])
  }));
  dart.setLibraryUri(homeView.HomeView, "package:RentalAdmin/views/homeView.dart");
  let C180;
  let C179;
  let C178;
  let C183;
  let C182;
  let C181;
  let C186;
  let C185;
  let C184;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C192;
  let C191;
  let C194;
  let C197;
  let C198;
  let C196;
  let C195;
  let C201;
  let C202;
  let C200;
  let C199;
  let C203;
  let C206;
  let C207;
  let C205;
  let C204;
  let C210;
  let C211;
  let C209;
  let C208;
  let C214;
  let C215;
  let C216;
  let C217;
  let C213;
  let C212;
  let C220;
  let C221;
  let C219;
  let C218;
  let C224;
  let C223;
  let C222;
  let C227;
  let C226;
  let C225;
  checkOutB.CheckingIn = class CheckingIn extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                core.print("pressed redeem:)");
                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Please select your options", {$creationLocationd_0dea112b090073317d4: C178 || CT.C178}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Check In", {$creationLocationd_0dea112b090073317d4: C181 || CT.C181}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C184 || CT.C184}), BuildContextToLocationPage())}));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), new flat_button.FlatButton.new({child: new text.Text.new("I have a Reservation", {$creationLocationd_0dea112b090073317d4: C191 || CT.C191}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C194 || CT.C194}), BuildContextToReservationListPage())}));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C195 || CT.C195})]), $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), BuildContextToAlertDialog())});
              }, VoidToNull()), child: new basic.Padding.new({padding: C203 || CT.C203, child: new text.Text.new("Check In", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C218 || CT.C218})]), $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225});
    }
  };
  (checkOutB.CheckingIn.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    checkOutB.CheckingIn.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = checkOutB.CheckingIn.prototype;
  dart.addTypeTests(checkOutB.CheckingIn);
  dart.setMethodSignature(checkOutB.CheckingIn, () => ({
    __proto__: dart.getMethods(checkOutB.CheckingIn.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(checkOutB.CheckingIn, "package:RentalAdmin/views/inventory/checkOutB.dart");
  dart.defineLazy(checkOutB, {
    /*checkOutB._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  let C230;
  let C229;
  let C228;
  let C233;
  let C232;
  let C231;
  InventoryView.FirstTab = class FirstTab extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C228 || CT.C228}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231});
    }
  };
  (InventoryView.FirstTab.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    InventoryView.FirstTab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = InventoryView.FirstTab.prototype;
  dart.addTypeTests(InventoryView.FirstTab);
  dart.setMethodSignature(InventoryView.FirstTab, () => ({
    __proto__: dart.getMethods(InventoryView.FirstTab.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(InventoryView.FirstTab, "package:RentalAdmin/views/InventoryView.dart");
  const title$ = dart.privateName(InventoryView, "LocationPage.title");
  InventoryView.LocationPage = class LocationPage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new InventoryView._LocationPageState.new();
    }
  };
  (InventoryView.LocationPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    InventoryView.LocationPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = InventoryView.LocationPage.prototype;
  dart.addTypeTests(InventoryView.LocationPage);
  dart.setMethodSignature(InventoryView.LocationPage, () => ({
    __proto__: dart.getMethods(InventoryView.LocationPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(InventoryView.LocationPage, "package:RentalAdmin/views/InventoryView.dart");
  dart.setFieldSignature(InventoryView.LocationPage, () => ({
    __proto__: dart.getFields(InventoryView.LocationPage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  let C236;
  let C235;
  let C234;
  let C239;
  let C240;
  let C238;
  let C237;
  let C241;
  let C244;
  let C245;
  let C243;
  let C242;
  InventoryView._LocationPageState = class _LocationPageState extends framework.State$(InventoryView.LocationPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C234 || CT.C234}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C237 || CT.C237}), body: new list_page.ListPage.new({$creationLocationd_0dea112b090073317d4: C241 || CT.C241}), $creationLocationd_0dea112b090073317d4: C242 || CT.C242});
    }
  };
  (InventoryView._LocationPageState.new = function() {
    InventoryView._LocationPageState.__proto__.new.call(this);
    ;
  }).prototype = InventoryView._LocationPageState.prototype;
  dart.addTypeTests(InventoryView._LocationPageState);
  dart.setMethodSignature(InventoryView._LocationPageState, () => ({
    __proto__: dart.getMethods(InventoryView._LocationPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(InventoryView._LocationPageState, "package:RentalAdmin/views/InventoryView.dart");
  list_page.ListPage = class ListPage extends framework.StatefulWidget {
    createState() {
      return new list_page._ListPageState.new();
    }
  };
  (list_page.ListPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    list_page.ListPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_page.ListPage.prototype;
  dart.addTypeTests(list_page.ListPage);
  dart.setMethodSignature(list_page.ListPage, () => ({
    __proto__: dart.getMethods(list_page.ListPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(list_page.ListPage, "package:RentalAdmin/views/inventory/list_page.dart");
  let C248;
  let C247;
  let C246;
  let C251;
  let C250;
  let C249;
  let C254;
  let C253;
  let C252;
  let C257;
  let C258;
  let C256;
  let C255;
  let C261;
  let C262;
  let C260;
  let C259;
  let C265;
  let C264;
  let C263;
  let C266;
  let C267;
  let C270;
  let C271;
  let C269;
  let C268;
  let C274;
  let C273;
  let C272;
  let C275;
  let C278;
  let C277;
  let C276;
  let C281;
  let C280;
  let C279;
  let C284;
  let C285;
  let C283;
  let C282;
  let C288;
  let C289;
  let C287;
  let C286;
  let C292;
  let C291;
  let C290;
  let C295;
  let C296;
  let C297;
  let C294;
  let C293;
  let C300;
  let C301;
  let C299;
  let C298;
  let C304;
  let C303;
  let C302;
  list_page._ListPageState = class _ListPageState extends framework.State$(list_page.ListPage) {
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let arrayOfLocationDocuments = (yield firestore.collection("locations").getDocuments());
        return arrayOfLocationDocuments.documents;
      });
    }
    navigateToCategory(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new category_page.CategoryPage.new({passedFirestoreData: indexedData, $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), BuildContextToCategoryPage())}));
    }
    build(context) {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {$creationLocationd_0dea112b090073317d4: C249 || CT.C249}), $creationLocationd_0dea112b090073317d4: C252 || CT.C252});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => this.customCard(index, snapshot), BuildContextAndintToWidget()), $creationLocationd_0dea112b090073317d4: C255 || CT.C255});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C259 || CT.C259}), $creationLocationd_0dea112b090073317d4: C263 || CT.C263});
    }
    customCard(index, snapshot) {
      return new material.Material.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => this.navigateToCategory(cloud_firestore.DocumentSnapshot._check(dart.dsend(snapshot.data, '_get', [index]))), VoidTodynamic()), child: new container.Container.new({padding: C266 || CT.C266, height: 200.0, child: new card.Card.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["imageURL"]))), fit: box_fit.BoxFit.fill})}), child: new basic.Padding.new({padding: C267 || CT.C267, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 1.0, fontWeight: ui.FontWeight.bold, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C268 || CT.C268})]), $creationLocationd_0dea112b090073317d4: C272 || CT.C272}), new spacer.Spacer.new({$creationLocationd_0dea112b090073317d4: C275 || CT.C275})]), $creationLocationd_0dea112b090073317d4: C276 || CT.C276})]), $creationLocationd_0dea112b090073317d4: C279 || CT.C279}), $creationLocationd_0dea112b090073317d4: C282 || CT.C282}), $creationLocationd_0dea112b090073317d4: C286 || CT.C286}), $creationLocationd_0dea112b090073317d4: C290 || CT.C290}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), $creationLocationd_0dea112b090073317d4: C298 || CT.C298}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302});
    }
  };
  (list_page._ListPageState.new = function() {
    list_page._ListPageState.__proto__.new.call(this);
    ;
  }).prototype = list_page._ListPageState.prototype;
  dart.addTypeTests(list_page._ListPageState);
  dart.setMethodSignature(list_page._ListPageState, () => ({
    __proto__: dart.getMethods(list_page._ListPageState.__proto__),
    getFirestoreData: dart.fnType(async.Future, []),
    navigateToCategory: dart.fnType(dart.dynamic, [cloud_firestore.DocumentSnapshot]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    customCard: dart.fnType(framework.Widget, [core.int, async$.AsyncSnapshot])
  }));
  dart.setLibraryUri(list_page._ListPageState, "package:RentalAdmin/views/inventory/list_page.dart");
  const passedFirestoreData$ = dart.privateName(category_page, "CategoryPage.passedFirestoreData");
  category_page.CategoryPage = class CategoryPage extends framework.StatefulWidget {
    get passedFirestoreData() {
      return this[passedFirestoreData$];
    }
    set passedFirestoreData(value) {
      super.passedFirestoreData = value;
    }
    createState() {
      return new category_page._CategoryPageState.new();
    }
  };
  (category_page.CategoryPage.new = function(opts) {
    let passedFirestoreData = opts && 'passedFirestoreData' in opts ? opts.passedFirestoreData : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[passedFirestoreData$] = passedFirestoreData;
    category_page.CategoryPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = category_page.CategoryPage.prototype;
  dart.addTypeTests(category_page.CategoryPage);
  dart.setMethodSignature(category_page.CategoryPage, () => ({
    __proto__: dart.getMethods(category_page.CategoryPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(category_page.CategoryPage, "package:RentalAdmin/views/inventory/category_page.dart");
  dart.setFieldSignature(category_page.CategoryPage, () => ({
    __proto__: dart.getFields(category_page.CategoryPage.__proto__),
    passedFirestoreData: dart.finalFieldType(cloud_firestore.DocumentSnapshot)
  }));
  let C307;
  let C306;
  let C305;
  let C310;
  let C309;
  let C308;
  let C313;
  let C314;
  let C312;
  let C311;
  let C317;
  let C316;
  let C315;
  let C320;
  let C319;
  let C318;
  let C323;
  let C324;
  let C322;
  let C321;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C326;
  let C325;
  let C334;
  let C335;
  let C333;
  let C332;
  let C338;
  let C337;
  let C336;
  let C341;
  let C342;
  let C343;
  let C344;
  let C340;
  let C339;
  let C347;
  let C348;
  let C346;
  let C345;
  category_page._CategoryPageState = class _CategoryPageState extends framework.State$(category_page.CategoryPage) {
    navigateToItem(categorySelected) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new itemGrid.ItemGridPage.new({category: categorySelected, $creationLocationd_0dea112b090073317d4: C305 || CT.C305}), BuildContextToItemGridPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selection Page", {$creationLocationd_0dea112b090073317d4: C308 || CT.C308}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), body: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(5.0), child: new scroll_view.GridView.count({crossAxisCount: 5, childAspectRatio: 1.0, mainAxisSpacing: 4.0, crossAxisSpacing: 4.0, children: ListOfWidget()._check(dart.dsend(dart.dgsend(this.widget.passedFirestoreData.data[$_get]("categories"), [framework.Widget], 'map', [dart.fn(categoryInfo => new gesture_detector.GestureDetector.new({child: new grid_tile.GridTile.new({child: new custom_gridcell.CustomCell.new(categoryInfo, {$creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}), onTap: dart.fn(() => {
                        this.navigateToItem(core.String._check(dart.dsend(categoryInfo, '_get', ["name"])));
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C321 || CT.C321}), dynamicToGestureDetector())]), 'toList', [])), $creationLocationd_0dea112b090073317d4: C325 || CT.C325}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), $creationLocationd_0dea112b090073317d4: C336 || CT.C336})]), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C345 || CT.C345});
    }
  };
  (category_page._CategoryPageState.new = function() {
    category_page._CategoryPageState.__proto__.new.call(this);
    ;
  }).prototype = category_page._CategoryPageState.prototype;
  dart.addTypeTests(category_page._CategoryPageState);
  dart.setMethodSignature(category_page._CategoryPageState, () => ({
    __proto__: dart.getMethods(category_page._CategoryPageState.__proto__),
    navigateToItem: dart.fnType(dart.dynamic, [core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(category_page._CategoryPageState, "package:RentalAdmin/views/inventory/category_page.dart");
  const category$ = dart.privateName(itemGrid, "ItemGridPage.category");
  itemGrid.ItemGridPage = class ItemGridPage extends framework.StatefulWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      this[category$] = value;
    }
    createState() {
      return new itemGrid._ItemGridPageState.new();
    }
  };
  (itemGrid.ItemGridPage.new = function(opts) {
    let category = opts && 'category' in opts ? opts.category : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    itemGrid.ItemGridPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = itemGrid.ItemGridPage.prototype;
  dart.addTypeTests(itemGrid.ItemGridPage);
  dart.setMethodSignature(itemGrid.ItemGridPage, () => ({
    __proto__: dart.getMethods(itemGrid.ItemGridPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(itemGrid.ItemGridPage, "package:RentalAdmin/views/inventory/itemGrid.dart");
  dart.setFieldSignature(itemGrid.ItemGridPage, () => ({
    __proto__: dart.getFields(itemGrid.ItemGridPage.__proto__),
    category: dart.fieldType(core.String)
  }));
  let C351;
  let C350;
  let C349;
  let C354;
  let C353;
  let C352;
  let C357;
  let C358;
  let C356;
  let C355;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C359;
  let C362;
  let C363;
  let C361;
  let C360;
  let C366;
  let C367;
  let C365;
  let C364;
  let C370;
  let C371;
  let C372;
  let C369;
  let C368;
  let C375;
  let C376;
  let C374;
  let C373;
  let C379;
  let C380;
  let C378;
  let C377;
  itemGrid._ItemGridPageState = class _ItemGridPageState extends framework.State$(itemGrid.ItemGridPage) {
    navigateToDetail(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ItemDetails.DetailPage.new({itemSelected: indexedData, $creationLocationd_0dea112b090073317d4: C349 || CT.C349}), BuildContextToDetailPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selected: " + dart.str(this.widget.category), {$creationLocationd_0dea112b090073317d4: C352 || CT.C352}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C355 || CT.C355}), body: new (StreamBuilderOfQuerySnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").where("category", {isEqualTo: this.widget.category}).snapshots(), builder: dart.fn((context, snapshot) => {
            if (!dart.test(snapshot.hasData)) return C359 || CT.C359;
            return new scroll_view.GridView.builder({itemCount: core.int._check(dart.dload(dart.dload(snapshot.data, 'documents'), 'length')), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 5}), itemBuilder: dart.fn((context, index) => new ink_well.InkWell.new({child: new itemGrid.CustommCell.new(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])), dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["imageURL"])), {$creationLocationd_0dea112b090073317d4: C360 || CT.C360}), onTap: dart.fn(() => {
                  core.print(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])));
                  this.navigateToDetail(cloud_firestore.DocumentSnapshot._check(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index])));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C364 || CT.C364}), BuildContextAndintToInkWell()), $creationLocationd_0dea112b090073317d4: C368 || CT.C368});
          }, BuildContextAndAsyncSnapshotToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C373 || CT.C373}), $creationLocationd_0dea112b090073317d4: C377 || CT.C377});
    }
  };
  (itemGrid._ItemGridPageState.new = function() {
    itemGrid._ItemGridPageState.__proto__.new.call(this);
    ;
  }).prototype = itemGrid._ItemGridPageState.prototype;
  dart.addTypeTests(itemGrid._ItemGridPageState);
  dart.setMethodSignature(itemGrid._ItemGridPageState, () => ({
    __proto__: dart.getMethods(itemGrid._ItemGridPageState.__proto__),
    navigateToDetail: dart.fnType(dart.dynamic, [cloud_firestore.DocumentSnapshot]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(itemGrid._ItemGridPageState, "package:RentalAdmin/views/inventory/itemGrid.dart");
  let C383;
  let C382;
  let C381;
  let C386;
  let C387;
  let C385;
  let C384;
  let C390;
  let C389;
  let C388;
  let C393;
  let C394;
  let C395;
  let C396;
  let C397;
  let C392;
  let C391;
  let C400;
  let C401;
  let C399;
  let C398;
  let C404;
  let C405;
  let C406;
  let C407;
  let C403;
  let C402;
  let C410;
  let C411;
  let C409;
  let C408;
  let C414;
  let C415;
  let C413;
  let C412;
  let C418;
  let C419;
  let C420;
  let C417;
  let C416;
  const name$ = dart.privateName(itemGrid, "CustommCell.name");
  const url$ = dart.privateName(itemGrid, "CustommCell.url");
  itemGrid.CustommCell = class CustommCell extends framework.StatelessWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      this[url$] = value;
    }
    build(context) {
      return new card.Card.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), color: colors.Colors.white, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new container.Container.new({alignment: alignment.Alignment.center, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(10.0), child: new image.Image.network(this.url, {$creationLocationd_0dea112b090073317d4: C381 || CT.C381}), $creationLocationd_0dea112b090073317d4: C384 || CT.C384}), $creationLocationd_0dea112b090073317d4: C388 || CT.C388}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new text.Text.new(this.name, {maxLines: 1, softWrap: true, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 12.0, fontWeight: ui.FontWeight.w800}), $creationLocationd_0dea112b090073317d4: C391 || CT.C391}), $creationLocationd_0dea112b090073317d4: C398 || CT.C398})]), $creationLocationd_0dea112b090073317d4: C402 || CT.C402}), $creationLocationd_0dea112b090073317d4: C408 || CT.C408}), $creationLocationd_0dea112b090073317d4: C412 || CT.C412}), $creationLocationd_0dea112b090073317d4: C416 || CT.C416});
    }
  };
  (itemGrid.CustommCell.new = function(name, url, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[url$] = url;
    itemGrid.CustommCell.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = itemGrid.CustommCell.prototype;
  dart.addTypeTests(itemGrid.CustommCell);
  dart.setMethodSignature(itemGrid.CustommCell, () => ({
    __proto__: dart.getMethods(itemGrid.CustommCell.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(itemGrid.CustommCell, "package:RentalAdmin/views/inventory/itemGrid.dart");
  dart.setFieldSignature(itemGrid.CustommCell, () => ({
    __proto__: dart.getFields(itemGrid.CustommCell.__proto__),
    name: dart.fieldType(core.String),
    url: dart.fieldType(core.String)
  }));
  const itemSelected$ = dart.privateName(ItemDetails, "DetailPage.itemSelected");
  ItemDetails.DetailPage = class DetailPage extends framework.StatefulWidget {
    get itemSelected() {
      return this[itemSelected$];
    }
    set itemSelected(value) {
      this[itemSelected$] = value;
    }
    createState() {
      return new ItemDetails._DetailPage.new();
    }
  };
  (ItemDetails.DetailPage.new = function(opts) {
    let itemSelected = opts && 'itemSelected' in opts ? opts.itemSelected : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemSelected$] = itemSelected;
    ItemDetails.DetailPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ItemDetails.DetailPage.prototype;
  dart.addTypeTests(ItemDetails.DetailPage);
  dart.setMethodSignature(ItemDetails.DetailPage, () => ({
    __proto__: dart.getMethods(ItemDetails.DetailPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(ItemDetails.DetailPage, "package:RentalAdmin/views/inventory/ItemDetails.dart");
  dart.setFieldSignature(ItemDetails.DetailPage, () => ({
    __proto__: dart.getFields(ItemDetails.DetailPage.__proto__),
    itemSelected: dart.fieldType(dart.dynamic)
  }));
  let C423;
  let C424;
  let C422;
  let C421;
  let C427;
  let C428;
  let C429;
  let C426;
  let C425;
  let C432;
  let C433;
  let C434;
  let C431;
  let C430;
  let C437;
  let C438;
  let C439;
  let C440;
  let C436;
  let C435;
  let C443;
  let C444;
  let C442;
  let C441;
  let C447;
  let C448;
  let C446;
  let C445;
  let C451;
  let C452;
  let C450;
  let C449;
  let C455;
  let C456;
  let C454;
  let C453;
  let C459;
  let C458;
  let C457;
  let C462;
  let C461;
  let C460;
  let C465;
  let C464;
  let C463;
  let C468;
  let C469;
  let C470;
  let C471;
  let C472;
  let C467;
  let C466;
  let C475;
  let C474;
  let C473;
  let C478;
  let C479;
  let C477;
  let C476;
  let C482;
  let C481;
  let C480;
  let C485;
  let C484;
  let C483;
  let C488;
  let C489;
  let C490;
  let C487;
  let C486;
  let C493;
  let C492;
  let C491;
  let C496;
  let C495;
  let C494;
  let C497;
  let C500;
  let C501;
  let C499;
  let C498;
  let C504;
  let C505;
  let C503;
  let C502;
  let C508;
  let C507;
  let C506;
  let C511;
  let C512;
  let C510;
  let C509;
  let C515;
  let C514;
  let C513;
  let C518;
  let C519;
  let C517;
  let C516;
  let C522;
  let C521;
  let C520;
  let C525;
  let C526;
  let C524;
  let C523;
  let C529;
  let C530;
  let C531;
  let C528;
  let C527;
  let C534;
  let C533;
  let C532;
  let C537;
  let C536;
  let C535;
  let C540;
  let C541;
  let C539;
  let C538;
  let C544;
  let C545;
  let C543;
  let C542;
  ItemDetails._DetailPage = class _DetailPage extends framework.State$(ItemDetails.DetailPage) {
    reserveButton() {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 16.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 5, child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            core.print("button pressed! (reserve)");
            this.testingReservations(core.String._check(dart.dload(this.widget.itemSelected, 'documentID')));
          }, VoidToNull()), child: new text.Text.new("Check Out", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C421 || CT.C421}), color: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C425 || CT.C425}), $creationLocationd_0dea112b090073317d4: C430 || CT.C430});
    }
    top() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["imageURL"])))})}), $creationLocationd_0dea112b090073317d4: C435 || CT.C435});
    }
    descriptionText() {
      return new text.Text.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C441 || CT.C441});
    }
    amount() {
      return new container.Container.new({child: new basic.Align.new({alignment: alignment.Alignment.center, child: new (StreamBuilderOfDocumentSnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").document(core.String._check(dart.dload(this.widget.itemSelected, 'documentID'))).snapshots(), builder: dart.fn((context, snapshot) => {
              if (!dart.test(snapshot.hasData)) return C359 || CT.C359;
              return new text.Text.new("Instock Amount: " + dart.str(dart.dsend(snapshot.data, '_get', ["# of items"])), {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.green, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C445 || CT.C445});
            }, BuildContextAndAsyncSnapshotToText()), $creationLocationd_0dea112b090073317d4: C449 || CT.C449}), $creationLocationd_0dea112b090073317d4: C453 || CT.C453}), $creationLocationd_0dea112b090073317d4: C457 || CT.C457});
    }
    bottom() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, padding: new edge_insets.EdgeInsets.fromLTRB(30.0, 5.0, 30.0, 30.0), child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([this.descriptionText(), this.amount(), this.reserveButton()]), $creationLocationd_0dea112b090073317d4: C460 || CT.C460}), $creationLocationd_0dea112b090073317d4: C463 || CT.C463}), $creationLocationd_0dea112b090073317d4: C466 || CT.C466});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(dart.str(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C473 || CT.C473}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C476 || CT.C476}), backgroundColor: colors.Colors.blueGrey, body: new scaffold.Scaffold.new({body: new basic.Row.new({children: JSArrayOfWidget().of([this.top(), this.bottom()]), $creationLocationd_0dea112b090073317d4: C480 || CT.C480}), $creationLocationd_0dea112b090073317d4: C483 || CT.C483}), $creationLocationd_0dea112b090073317d4: C486 || CT.C486});
    }
    testingReservations(itemID) {
      return async.async(dart.dynamic, (function* testingReservations() {
        core.print(itemID);
        let now = new core.DateTime.now();
        let time = new intl.DateFormat.new("yyyy-MM-dd hh:mm:ss").format(now);
        let pickUpBefore = now.add(new core.Duration.new({minutes: 10}));
        core.print("Reservation Created time: " + dart.notNull(time));
        core.print("Reservation pickup before time: " + dart.notNull(new intl.DateFormat.new("yyyy-MM-dd hh:mm:ss").format(pickUpBefore)));
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Check Out Complete", {$creationLocationd_0dea112b090073317d4: C491 || CT.C491}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C494 || CT.C494}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                  navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C497 || CT.C497}), BuildContextToHomeView())}));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C498 || CT.C498})]), $creationLocationd_0dea112b090073317d4: C502 || CT.C502}), BuildContextToAlertDialog())});
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C506 || CT.C506}), content: new text_field.TextField.new({controller: ItemDetails._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C509 || CT.C509}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Cancel", {$creationLocationd_0dea112b090073317d4: C513 || CT.C513}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C516 || CT.C516}), new flat_button.FlatButton.new({child: new text.Text.new("Confirm", {$creationLocationd_0dea112b090073317d4: C520 || CT.C520}), onPressed: dart.fn(() => {
                  core.print("URL Request sent");
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C523 || CT.C523})]), $creationLocationd_0dea112b090073317d4: C527 || CT.C527}), BuildContextToAlertDialog())});
      }).bind(this));
    }
    uploadData(itemID, uid, dateTime) {
      return async.async(dart.void, (function* uploadData() {
        let itemName = null;
        let imageURL = null;
        let databaseReference = cloud_firestore.Firestore.instance;
        yield cloud_firestore.Firestore.instance.collection("ARC_items").document(core.String._check(itemID)).get().then(core.Null, dart.fn(ds => {
          try {
            itemName = core.String._check(ds._get("name"));
            core.print("Found in ARC_items");
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print(e);
          }
        }, DocumentSnapshotToNull()));
        yield cloud_firestore.Firestore.instance.collection("ARC_items").document(core.String._check(itemID)).get().then(core.Null, dart.fn(ds => {
          try {
            imageURL = core.String._check(ds._get("imageURL"));
            core.print("Found in ARC_items");
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print(e);
          }
        }, DocumentSnapshotToNull()));
        if (itemName == null) {
          core.print("UID Not Found");
          itemName = "UID Not Found";
        }
        if (imageURL == null) {
          core.print("UID Not Found");
          imageURL = "www.gooogle.com";
        }
        yield databaseReference.collection("Record").document().setData(new (IdentityMapOfString$dynamic()).from(["imageURL", imageURL, "name", itemName, "uid", uid, "item", itemID, "amount", "1", "startTime", dateTime, "status", "Picked Up", "endTime", "TBD"]));
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Check Out Complete", {$creationLocationd_0dea112b090073317d4: C532 || CT.C532}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C535 || CT.C535}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C538 || CT.C538})]), $creationLocationd_0dea112b090073317d4: C542 || CT.C542}), BuildContextToAlertDialog())});
        core.print("success!");
      }).bind(this));
    }
  };
  (ItemDetails._DetailPage.new = function() {
    ItemDetails._DetailPage.__proto__.new.call(this);
    ;
  }).prototype = ItemDetails._DetailPage.prototype;
  dart.addTypeTests(ItemDetails._DetailPage);
  dart.setMethodSignature(ItemDetails._DetailPage, () => ({
    __proto__: dart.getMethods(ItemDetails._DetailPage.__proto__),
    reserveButton: dart.fnType(container.Container, []),
    top: dart.fnType(container.Container, []),
    descriptionText: dart.fnType(text.Text, []),
    amount: dart.fnType(framework.Widget, []),
    bottom: dart.fnType(container.Container, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    testingReservations: dart.fnType(dart.dynamic, [core.String]),
    uploadData: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(ItemDetails._DetailPage, "package:RentalAdmin/views/inventory/ItemDetails.dart");
  dart.defineLazy(ItemDetails, {
    /*ItemDetails._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  let C548;
  let C549;
  let C547;
  let C546;
  let C552;
  let C553;
  let C551;
  let C550;
  let C554;
  let C557;
  let C556;
  let C555;
  let C560;
  let C559;
  let C558;
  let C563;
  let C564;
  let C565;
  let C562;
  let C561;
  ReservationView.ReservationView = class ReservationView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.teal, title: new text.Text.new("Help Chat", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C546 || CT.C546}), $creationLocationd_0dea112b090073317d4: C550 || CT.C550}), backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C554 || CT.C554})]), $creationLocationd_0dea112b090073317d4: C555 || CT.C555}), $creationLocationd_0dea112b090073317d4: C558 || CT.C558}), $creationLocationd_0dea112b090073317d4: C561 || CT.C561});
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
  let C568;
  let C569;
  let C567;
  let C566;
  let C570;
  let C573;
  let C574;
  let C572;
  let C571;
  let C577;
  let C578;
  let C579;
  let C580;
  let C576;
  let C575;
  let C583;
  let C582;
  let C581;
  let C586;
  let C585;
  let C584;
  let C589;
  let C590;
  let C588;
  let C587;
  let C593;
  let C594;
  let C595;
  let C596;
  let C592;
  let C591;
  navigation.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0), color: colors.Colors.teal, height: 80.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new("Rental Manager Administrator", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, color: colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C566 || CT.C566}), new basic.Row.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({side: new borders.BorderSide.new({color: colors.Colors.white})}), onPressed: dart.fn(() => {
                    core.print("Pressed Support button!!");
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.signInScreen.new({$creationLocationd_0dea112b090073317d4: C570 || CT.C570}), BuildContextTosignInScreen())}));
                  }, VoidToNull()), child: new text.Text.new("Admin Login", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C571 || CT.C571}), $creationLocationd_0dea112b090073317d4: C575 || CT.C575}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C581 || CT.C581})]), $creationLocationd_0dea112b090073317d4: C584 || CT.C584})]), $creationLocationd_0dea112b090073317d4: C587 || CT.C587}), $creationLocationd_0dea112b090073317d4: C591 || CT.C591});
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
  let C597;
  const title$0 = dart.privateName(navigation, "_NavigationBar.title");
  navigation._NavigationBar = class _NavigationBar extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C597 || CT.C597});
    }
  };
  (navigation._NavigationBar.new = function(title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
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
  let C600;
  let C601;
  let C599;
  let C598;
  let C604;
  let C605;
  let C603;
  let C602;
  let C608;
  let C609;
  let C607;
  let C606;
  let C612;
  let C613;
  let C611;
  let C610;
  let C616;
  let C615;
  let C614;
  let C619;
  let C620;
  let C621;
  let C618;
  let C617;
  let C624;
  let C625;
  let C623;
  let C622;
  let C626;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color_value = dart.privateName(ui, "Color.value");
  let C628;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C629;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C627;
  let C632;
  let C633;
  let C634;
  let C635;
  let C631;
  let C630;
  let C638;
  let C637;
  let C636;
  let C641;
  let C642;
  let C640;
  let C639;
  let C644;
  let C643;
  let C647;
  let C648;
  let C649;
  let C650;
  let C646;
  let C645;
  let C653;
  let C654;
  let C652;
  let C651;
  let C657;
  let C656;
  let C655;
  let C660;
  let C661;
  let C659;
  let C658;
  let C664;
  let C663;
  let C662;
  let C667;
  let C668;
  let C666;
  let C665;
  let C671;
  let C670;
  let C669;
  let C674;
  let C673;
  let C672;
  let C677;
  let C678;
  let C676;
  let C675;
  let C681;
  let C682;
  let C680;
  let C679;
  let C685;
  let C684;
  let C683;
  let C688;
  let C687;
  let C686;
  let C691;
  let C692;
  let C690;
  let C689;
  let C695;
  let C696;
  let C694;
  let C693;
  let C697;
  let C700;
  let C701;
  let C702;
  let C703;
  let C704;
  let C705;
  let C706;
  let C707;
  let C708;
  let C709;
  let C710;
  let C699;
  let C698;
  let C713;
  let C714;
  let C712;
  let C711;
  let C717;
  let C718;
  let C716;
  let C715;
  let C721;
  let C722;
  let C720;
  let C719;
  let C725;
  let C724;
  let C723;
  let C728;
  let C729;
  let C727;
  let C726;
  let C732;
  let C731;
  let C730;
  let C735;
  let C736;
  let C734;
  let C733;
  let C737;
  let C740;
  let C741;
  let C742;
  let C743;
  let C744;
  let C745;
  let C746;
  let C747;
  let C748;
  let C749;
  let C750;
  let C739;
  let C738;
  let C753;
  let C754;
  let C752;
  let C751;
  let C757;
  let C758;
  let C756;
  let C755;
  let C761;
  let C760;
  let C759;
  let C764;
  let C765;
  let C763;
  let C762;
  let C768;
  let C767;
  let C766;
  let C769;
  let C772;
  let C773;
  let C771;
  let C770;
  let C776;
  let C777;
  let C775;
  let C774;
  let C780;
  let C781;
  let C779;
  let C778;
  let C784;
  let C783;
  let C782;
  let C785;
  let C788;
  let C789;
  let C787;
  let C786;
  let C792;
  let C793;
  let C791;
  let C790;
  let C796;
  let C795;
  let C794;
  let C799;
  let C798;
  let C797;
  let C802;
  let C801;
  let C800;
  let C805;
  let C806;
  let C804;
  let C803;
  let C809;
  let C808;
  let C807;
  let C812;
  let C813;
  let C811;
  let C810;
  let C816;
  let C815;
  let C814;
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
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C598 || CT.C598}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C602 || CT.C602}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C606 || CT.C606}), new text.Text.new("Welcome", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C610 || CT.C610}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C614 || CT.C614}), $creationLocationd_0dea112b090073317d4: C617 || CT.C617}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C622 || CT.C622}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.username = text;
                      core.print("First text field: " + dart.str(text));
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C626 || CT.C626, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C627 || CT.C627}), $creationLocationd_0dea112b090073317d4: C630 || CT.C630}), $creationLocationd_0dea112b090073317d4: C636 || CT.C636}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C639 || CT.C639}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.password = text;
                    }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C643 || CT.C643}), $creationLocationd_0dea112b090073317d4: C645 || CT.C645}), $creationLocationd_0dea112b090073317d4: C651 || CT.C651}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C655 || CT.C655}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("LOGIN", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C658 || CT.C658}), $creationLocationd_0dea112b090073317d4: C662 || CT.C662})]), $creationLocationd_0dea112b090073317d4: C665 || CT.C665}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                          let e = (yield authHandler.signIn(this.username, this.password));
                          core.print("on Press Error: " + dart.notNull(e));
                          if (e === "false") {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Your Email needs to be verified.", {$creationLocationd_0dea112b090073317d4: C669 || CT.C669}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C672 || CT.C672}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C675 || CT.C675})]), $creationLocationd_0dea112b090073317d4: C679 || CT.C679}), BuildContextToAlertDialog())});
                          } else if (dart.test(signInScreen.ErrorDetect(e))) {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(signInScreen.errorDetect(e, {pos: 1}), {$creationLocationd_0dea112b090073317d4: C683 || CT.C683}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C686 || CT.C686}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C689 || CT.C689})]), $creationLocationd_0dea112b090073317d4: C693 || CT.C693}), BuildContextToAlertDialog())});
                          } else {
                            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C697 || CT.C697}), BuildContextToHomeView())}));
                          }
                        }).bind(this)), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C698 || CT.C698}), $creationLocationd_0dea112b090073317d4: C711 || CT.C711})]), $creationLocationd_0dea112b090073317d4: C715 || CT.C715}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.new({image: new _network_image_web.NetworkImage.new("https://pluspng.com/img-png/google-logo-png-open-2000.png"), height: 30.0, $creationLocationd_0dea112b090073317d4: C719 || CT.C719}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C723 || CT.C723}), new basic.Center.new({child: new text.Text.new("Sign In with Google", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C726 || CT.C726}), $creationLocationd_0dea112b090073317d4: C730 || CT.C730})]), $creationLocationd_0dea112b090073317d4: C733 || CT.C733}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C737 || CT.C737}), BuildContextToHomeView())}));
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C738 || CT.C738}), $creationLocationd_0dea112b090073317d4: C751 || CT.C751})]), $creationLocationd_0dea112b090073317d4: C755 || CT.C755}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C759 || CT.C759}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("New to Rental Manager?", {style: new text_style.TextStyle.new({fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C762 || CT.C762}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C766 || CT.C766}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.SignUpPage.new({$creationLocationd_0dea112b090073317d4: C769 || CT.C769}), BuildContextToSignUpPage())}));
                      }, VoidToNull()), child: new text.Text.new("Register", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C770 || CT.C770}), $creationLocationd_0dea112b090073317d4: C774 || CT.C774})]), $creationLocationd_0dea112b090073317d4: C778 || CT.C778}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C782 || CT.C782}), new basic.Center.new({child: new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.ResetPassword.new({$creationLocationd_0dea112b090073317d4: C785 || CT.C785}), BuildContextToResetPassword())}));
                      }, VoidToNull()), child: new text.Text.new("Forgot Password", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontWeight: ui.FontWeight.bold, fontFamily: "Montserrat", decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C786 || CT.C786}), $creationLocationd_0dea112b090073317d4: C790 || CT.C790}), $creationLocationd_0dea112b090073317d4: C794 || CT.C794}), $creationLocationd_0dea112b090073317d4: C797 || CT.C797}), new basic.Row.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C800 || CT.C800})]), $creationLocationd_0dea112b090073317d4: C803 || CT.C803}), $creationLocationd_0dea112b090073317d4: C807 || CT.C807}), $creationLocationd_0dea112b090073317d4: C810 || CT.C810}), $creationLocationd_0dea112b090073317d4: C814 || CT.C814});
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
  let C819;
  let C818;
  let C817;
  let C822;
  let C823;
  let C821;
  let C820;
  let C826;
  let C827;
  let C825;
  let C824;
  let C830;
  let C831;
  let C832;
  let C829;
  let C828;
  let C835;
  let C836;
  let C834;
  let C833;
  let C839;
  let C840;
  let C838;
  let C837;
  let C843;
  let C844;
  let C842;
  let C841;
  let C847;
  let C848;
  let C846;
  let C845;
  let C851;
  let C850;
  let C849;
  let C854;
  let C855;
  let C856;
  let C853;
  let C852;
  let C859;
  let C860;
  let C858;
  let C857;
  let C861;
  let C863;
  let C862;
  let C866;
  let C867;
  let C868;
  let C869;
  let C865;
  let C864;
  let C872;
  let C873;
  let C871;
  let C870;
  let C876;
  let C877;
  let C875;
  let C874;
  let C880;
  let C879;
  let C878;
  let C883;
  let C884;
  let C882;
  let C881;
  let C887;
  let C886;
  let C885;
  let C890;
  let C891;
  let C889;
  let C888;
  let C894;
  let C895;
  let C896;
  let C897;
  let C898;
  let C899;
  let C900;
  let C901;
  let C902;
  let C903;
  let C904;
  let C893;
  let C892;
  let C907;
  let C908;
  let C906;
  let C905;
  let C911;
  let C912;
  let C910;
  let C909;
  let C915;
  let C914;
  let C913;
  let C918;
  let C917;
  let C916;
  let C921;
  let C920;
  let C919;
  let C924;
  let C925;
  let C926;
  let C923;
  let C922;
  let C929;
  let C928;
  let C927;
  signInScreen._ResetPasswordState = class _ResetPasswordState extends framework.State$(signInScreen.ResetPassword) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reset PassWord", {$creationLocationd_0dea112b090073317d4: C817 || CT.C817}), backgroundColor: colors.Colors.teal, leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back_ios, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C820 || CT.C820}), onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.Object), VoidTobool()), $creationLocationd_0dea112b090073317d4: C824 || CT.C824}), $creationLocationd_0dea112b090073317d4: C828 || CT.C828}), backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C833 || CT.C833}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C837 || CT.C837}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C841 || CT.C841}), new text.Text.new("Enter your email address below", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C845 || CT.C845}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C849 || CT.C849}), $creationLocationd_0dea112b090073317d4: C852 || CT.C852}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C857 || CT.C857}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.email = text;
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C861 || CT.C861, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Enter your Email Address", prefixIcon: C862 || CT.C862, contentPadding: C861 || CT.C861}), $creationLocationd_0dea112b090073317d4: C864 || CT.C864}), $creationLocationd_0dea112b090073317d4: C870 || CT.C870}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C874 || CT.C874}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C878 || CT.C878}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("Send Verification Email", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C881 || CT.C881}), $creationLocationd_0dea112b090073317d4: C885 || CT.C885})]), $creationLocationd_0dea112b090073317d4: C888 || CT.C888}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C892 || CT.C892}), $creationLocationd_0dea112b090073317d4: C905 || CT.C905})]), $creationLocationd_0dea112b090073317d4: C909 || CT.C909}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C913 || CT.C913})]), $creationLocationd_0dea112b090073317d4: C916 || CT.C916}), $creationLocationd_0dea112b090073317d4: C919 || CT.C919}), $creationLocationd_0dea112b090073317d4: C922 || CT.C922}), $creationLocationd_0dea112b090073317d4: C927 || CT.C927});
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
  let C932;
  let C931;
  let C930;
  let C935;
  let C936;
  let C934;
  let C933;
  let C937;
  let C940;
  let C941;
  let C942;
  let C943;
  let C939;
  let C938;
  let C946;
  let C947;
  let C945;
  let C944;
  let C950;
  let C949;
  let C948;
  let C953;
  let C954;
  let C955;
  let C952;
  let C951;
  let C958;
  let C959;
  let C957;
  let C956;
  let C962;
  let C961;
  let C960;
  let C965;
  let C966;
  let C967;
  let C964;
  let C963;
  let C970;
  let C971;
  let C969;
  let C968;
  let C974;
  let C973;
  let C972;
  let C977;
  let C978;
  let C979;
  let C980;
  let C981;
  let C976;
  let C975;
  let C984;
  let C985;
  let C983;
  let C982;
  let C988;
  let C987;
  let C986;
  let C991;
  let C992;
  let C993;
  let C994;
  let C990;
  let C989;
  let C997;
  let C998;
  let C996;
  let C995;
  let C1001;
  let C1000;
  let C999;
  let C1004;
  let C1003;
  let C1002;
  let C1007;
  let C1006;
  let C1005;
  let C1010;
  let C1011;
  let C1012;
  let C1013;
  let C1014;
  let C1015;
  let C1016;
  let C1009;
  let C1008;
  let C1019;
  let C1020;
  let C1018;
  let C1017;
  let C1023;
  let C1024;
  let C1022;
  let C1021;
  let C1027;
  let C1026;
  let C1025;
  let C1030;
  let C1031;
  let C1032;
  let C1029;
  let C1028;
  signInScreen._State = class _State extends framework.State$(signInScreen.SignUpPage) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, appBar: new app_bar.AppBar.new({title: new text.Text.new("Account Sign Up", {$creationLocationd_0dea112b090073317d4: C930 || CT.C930}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C933 || CT.C933}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.email = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C937 || CT.C937, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C862 || CT.C862, contentPadding: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C938 || CT.C938}), $creationLocationd_0dea112b090073317d4: C944 || CT.C944}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C948 || CT.C948}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameFirst = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "First Name", prefixIcon: C627 || CT.C627, contentPadding: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C951 || CT.C951}), $creationLocationd_0dea112b090073317d4: C956 || CT.C956}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C960 || CT.C960}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameLast = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Lastname", prefixIcon: C627 || CT.C627, contentPadding: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C963 || CT.C963}), $creationLocationd_0dea112b090073317d4: C968 || CT.C968}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C972 || CT.C972}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.password = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, scrollPadding: C937 || CT.C937, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C643 || CT.C643, contentPadding: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C975 || CT.C975}), $creationLocationd_0dea112b090073317d4: C982 || CT.C982}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C986 || CT.C986}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.confirmpw = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C154 || CT.C154, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Confirm Password", prefixIcon: C643 || CT.C643, contentPadding: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C989 || CT.C989}), $creationLocationd_0dea112b090073317d4: C995 || CT.C995}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C999 || CT.C999}), new text.Text.new("Click sign up after entering all of above", {$creationLocationd_0dea112b090073317d4: C1002 || CT.C1002}), new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({textColor: colors.Colors.white, color: colors.Colors.teal.shade900, child: new text.Text.new("SIGN UP", {$creationLocationd_0dea112b090073317d4: C1005 || CT.C1005}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                  }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C1008 || CT.C1008}), $creationLocationd_0dea112b090073317d4: C1017 || CT.C1017})]), $creationLocationd_0dea112b090073317d4: C1021 || CT.C1021}), $creationLocationd_0dea112b090073317d4: C1025 || CT.C1025}), $creationLocationd_0dea112b090073317d4: C1028 || CT.C1028});
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
  let C1033;
  let C1036;
  let C1035;
  let C1034;
  let C1039;
  let C1038;
  let C1037;
  let C1042;
  let C1041;
  let C1040;
  let C1045;
  let C1044;
  let C1043;
  let C1048;
  let C1049;
  let C1047;
  let C1046;
  chatBoxView.chatBoxView = class chatBoxView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C1033 || CT.C1033}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1034 || CT.C1034}), new actionButton.ReservationListView.new("Chating Controller Goes Here", {$creationLocationd_0dea112b090073317d4: C1037 || CT.C1037})]), $creationLocationd_0dea112b090073317d4: C1040 || CT.C1040}), $creationLocationd_0dea112b090073317d4: C1043 || CT.C1043}), $creationLocationd_0dea112b090073317d4: C1046 || CT.C1046});
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
  let C1050;
  let C1053;
  let C1054;
  let C1052;
  let C1051;
  let C1057;
  let C1058;
  let C1056;
  let C1055;
  let C1061;
  let C1062;
  let C1063;
  let C1064;
  let C1060;
  let C1059;
  let C1067;
  let C1068;
  let C1066;
  let C1065;
  let C1071;
  let C1070;
  let C1069;
  let C1074;
  let C1073;
  let C1072;
  $return.Returning = class Returning extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new activeActivities.ActiveActivity.new({$creationLocationd_0dea112b090073317d4: C1050 || CT.C1050}), BuildContextToActiveActivity())}));
              }, VoidToNull()), child: new basic.Padding.new({padding: C203 || CT.C203, child: new text.Text.new("Returning", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C1051 || CT.C1051}), $creationLocationd_0dea112b090073317d4: C1055 || CT.C1055}), $creationLocationd_0dea112b090073317d4: C1059 || CT.C1059}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C1065 || CT.C1065})]), $creationLocationd_0dea112b090073317d4: C1069 || CT.C1069}), $creationLocationd_0dea112b090073317d4: C1072 || CT.C1072});
    }
  };
  ($return.Returning.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    $return.Returning.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = $return.Returning.prototype;
  dart.addTypeTests($return.Returning);
  dart.setMethodSignature($return.Returning, () => ({
    __proto__: dart.getMethods($return.Returning.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri($return.Returning, "package:RentalAdmin/views/inventory/return.dart");
  dart.defineLazy($return, {
    /*$return._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  activeActivities.ActiveActivity = class ActiveActivity extends framework.StatefulWidget {
    createState() {
      return new activeActivities._ActiveActivity.new();
    }
  };
  (activeActivities.ActiveActivity.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    activeActivities.ActiveActivity.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = activeActivities.ActiveActivity.prototype;
  dart.addTypeTests(activeActivities.ActiveActivity);
  dart.setMethodSignature(activeActivities.ActiveActivity, () => ({
    __proto__: dart.getMethods(activeActivities.ActiveActivity.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(activeActivities.ActiveActivity, "package:RentalAdmin/widgets/activeActivities.dart");
  let C1077;
  let C1076;
  let C1075;
  let C1080;
  let C1081;
  let C1079;
  let C1078;
  let C1084;
  let C1085;
  let C1083;
  let C1082;
  let C1088;
  let C1089;
  let C1087;
  let C1086;
  let C1092;
  let C1091;
  let C1090;
  let C1095;
  let C1094;
  let C1093;
  let C1098;
  let C1097;
  let C1096;
  let C1101;
  let C1100;
  let C1099;
  let C1104;
  let C1105;
  let C1103;
  let C1102;
  let C1108;
  let C1107;
  let C1106;
  let C1111;
  let C1112;
  let C1110;
  let C1109;
  let C1115;
  let C1114;
  let C1113;
  let C1118;
  let C1117;
  let C1116;
  let C1121;
  let C1120;
  let C1119;
  let C1122;
  let C1125;
  let C1126;
  let C1124;
  let C1123;
  let C1129;
  let C1130;
  let C1128;
  let C1127;
  let C1133;
  let C1134;
  let C1132;
  let C1131;
  let C1137;
  let C1138;
  let C1139;
  let C1136;
  let C1135;
  let C1142;
  let C1143;
  let C1144;
  let C1141;
  let C1140;
  let C1147;
  let C1146;
  let C1145;
  let C1150;
  let C1151;
  let C1149;
  let C1148;
  let C1154;
  let C1155;
  let C1153;
  let C1152;
  let C1158;
  let C1157;
  let C1156;
  let C1161;
  let C1160;
  let C1159;
  let C1164;
  let C1165;
  let C1163;
  let C1162;
  let C1168;
  let C1167;
  let C1166;
  let C1171;
  let C1172;
  let C1170;
  let C1169;
  let C1175;
  let C1174;
  let C1173;
  let C1178;
  let C1179;
  let C1177;
  let C1176;
  let C1182;
  let C1183;
  let C1184;
  let C1181;
  let C1180;
  activeActivities._ActiveActivity = class _ActiveActivity extends framework.State$(activeActivities.ActiveActivity) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Checked Out Activities", {$creationLocationd_0dea112b090073317d4: C1075 || CT.C1075}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C1078 || CT.C1078}), body: this.reservation(), $creationLocationd_0dea112b090073317d4: C1082 || CT.C1082});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C1086 || CT.C1086}), $creationLocationd_0dea112b090073317d4: C1090 || CT.C1090});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new card.Card.new({child: new list_tile.ListTile.new({title: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C1093 || CT.C1093}), subtitle: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {$creationLocationd_0dea112b090073317d4: C1096 || CT.C1096}), onTap: dart.fn(() => {
                      dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C1099 || CT.C1099}), content: new text_field.TextField.new({controller: activeActivities._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C1102 || CT.C1102}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C1106 || CT.C1106}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1109 || CT.C1109}), new flat_button.FlatButton.new({child: new text.Text.new("RETURN", {$creationLocationd_0dea112b090073317d4: C1113 || CT.C1113}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Thanks for returning the item!", {$creationLocationd_0dea112b090073317d4: C1116 || CT.C1116}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C1119 || CT.C1119}), onPressed: dart.fn(() => {
                                          navigator.Navigator.of(context).pop(core.Object);
                                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C1122 || CT.C1122}), BuildContextToHomeView())}));
                                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1123 || CT.C1123})]), $creationLocationd_0dea112b090073317d4: C1127 || CT.C1127}), BuildContextToAlertDialog())});
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1131 || CT.C1131})]), $creationLocationd_0dea112b090073317d4: C1135 || CT.C1135}), BuildContextToAlertDialog())});
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1140 || CT.C1140}), $creationLocationd_0dea112b090073317d4: C1145 || CT.C1145}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: C1148 || CT.C1148});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C1152 || CT.C1152}), $creationLocationd_0dea112b090073317d4: C1156 || CT.C1156});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").where("status", {isEqualTo: "Picked Up"}).getDocuments());
        return itemListDOC.documents;
      });
    }
    testingReservations(itemID, context) {
      return async.async(dart.dynamic, function* testingReservations() {
        dialog.showDialog(dart.dynamic, {context: framework.BuildContext._check(context), builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C1159 || CT.C1159}), content: new text_field.TextField.new({controller: activeActivities._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C1162 || CT.C1162}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C1166 || CT.C1166}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1169 || CT.C1169}), new flat_button.FlatButton.new({child: new text.Text.new("RETURN", {$creationLocationd_0dea112b090073317d4: C1173 || CT.C1173}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C1176 || CT.C1176})]), $creationLocationd_0dea112b090073317d4: C1180 || CT.C1180}), BuildContextToAlertDialog())});
      });
    }
  };
  (activeActivities._ActiveActivity.new = function() {
    activeActivities._ActiveActivity.__proto__.new.call(this);
    ;
  }).prototype = activeActivities._ActiveActivity.prototype;
  dart.addTypeTests(activeActivities._ActiveActivity);
  dart.setMethodSignature(activeActivities._ActiveActivity, () => ({
    __proto__: dart.getMethods(activeActivities._ActiveActivity.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    reservation: dart.fnType(container.Container, []),
    getFirestoreData: dart.fnType(async.Future, []),
    testingReservations: dart.fnType(dart.dynamic, [core.String, dart.dynamic])
  }));
  dart.setLibraryUri(activeActivities._ActiveActivity, "package:RentalAdmin/widgets/activeActivities.dart");
  dart.defineLazy(activeActivities, {
    /*activeActivities._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  dart.trackLibraries("packages/RentalAdmin/views/InventoryView", {
    "package:RentalAdmin/widgets/testlist.dart": testlist,
    "package:RentalAdmin/views/homeView.dart": homeView,
    "package:RentalAdmin/views/inventory/checkOutB.dart": checkOutB,
    "package:RentalAdmin/views/InventoryView.dart": InventoryView,
    "package:RentalAdmin/views/inventory/list_page.dart": list_page,
    "package:RentalAdmin/views/inventory/category_page.dart": category_page,
    "package:RentalAdmin/views/inventory/itemGrid.dart": itemGrid,
    "package:RentalAdmin/views/inventory/ItemDetails.dart": ItemDetails,
    "package:RentalAdmin/views/ReservationView.dart": ReservationView,
    "package:RentalAdmin/widgets/navigation.dart": navigation,
    "package:RentalAdmin/widgets/signInScreen.dart": signInScreen,
    "package:RentalAdmin/views/chatBoxView.dart": chatBoxView,
    "package:RentalAdmin/views/inventory/return.dart": $return,
    "package:RentalAdmin/widgets/activeActivities.dart": activeActivities
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../widgets/testlist.dart","homeView.dart","inventory/checkOutB.dart","InventoryView.dart","inventory/list_page.dart","inventory/category_page.dart","inventory/itemGrid.dart","inventory/ItemDetails.dart","ReservationView.dart","../widgets/navigation.dart","../widgets/signInScreen.dart","chatBoxView.dart","inventory/return.dart","../widgets/activeActivities.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oCACK,+BACC,kBAAK,mGACY,iFAGpB;IACZ;;AAGE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAK7B,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UAC/B,0BACI,mCACI,kBAC+B,cAAT,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,+EACpB,kBAC4B,cAAX,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,8EAIrB;AAkDC,sBAjDN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,oFACH,0CACK,2CACA,mDACE,yFAEC,sBACX,uCACS,kBAAK,+EACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;yGAGpB,uCACS,kBAAK,gFACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;AAwBd,gCAvBN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBACH,iHACa,sBACX,uCACS,kBAAK,2EACL;AAGC,0CAFA,AAEL,uBADG,OAAO;AAOa,0CALlB,uCACN,OAAO,EACP,yCAEQ,QAAC,WACG;;;;;;IAe1E;;AAmCuB;AACf,wBAAsB;AACd,2BAEV,MAAM,AACD,AACA,AACA,SAHU,YACC,qBACL,sBAAqB;AAEpC,cAAO,AAAY,YAAD;MACpB;;eAUsB,OAAqB;AACzC,YAAO,mCACE,iCAEE,yCACO,iDACC,yBACT,qCACgB,gCACF,mBAIX,0BACE,oCACE,sDAEE,gCACa,sBAChB,sCACuC,+CACnB,sBAChB,+BACoB,sBAChB,gCACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mBACnB,wCACK,kBACa,qMAOnC,gFACA,+BACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,wBACnB,wCACK,aACI,AAAK,kNAO/B,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,qBACnB,wCACK,aACI;IAWpC;;;;;EACF;;;;;;;;;;;MA1NsB,6BAAoB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCAjB;AACxB,YAAO,6CACmB,AAAK,mCACvB,gCACc,sBAChB,6FACA,gCACU,iEAEV,kBAAa,OAAO;IAI5B;iBAEuB;AACrB,YAAO,uCACe,+BAAI,aACjB,sCACgC,8CACnB,sBAEhB,kDAAe,OAAO;IAI9B;kBAEqC;AACnC,YAAO,sCACwC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa;IAK1B;mBAEsC;AACpC,YAAO,uCACe,oCAAS,KAAG,KAAG,KAAG,cACK,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa,sBAChB,yFACA,sFACA;IAKR;;;QAjEoB;;AAAQ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCFjB;AACxB,YAAO,qCACI,gCAEa,sBAEhB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AACgB,gBAAzB,WAAM;AA6BA,gBA5BN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,mGAMK,sBACX,uCACS,kBAAK,mFACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;AAEnB,0BADS,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY,2CAAmB;qGAInF,uCACS,kBAAK,+FACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;AACmE,0BAA7E,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;;uCAOzE,wDAGE,kBACL,oBACO,wCAAoB,aAAiB,iCAA6B,uMAI/E,+BACS,cACC;IAMpB;;;;;;EAEF;;;;;;;;MAjEsB,8BAAoB;YAAG;;;;;;;;;;;UC8BjB;AACxB,YAAO,gCACC,2CAAoB;IAE9B;;;;;;EACF;;;;;;;;;IAGe;;;;;;;AAKX,YAAO;IACT;;;QALkB;QAAU;;;AAAU,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;UAU3B;AAExB,YAAO,oCACG,+BACC,kBAAK,AAAO,gGACK,qFAEpB;IAEV;;;;;EACF;;;;;;;;;ACvDI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGyB;AACf,wBAAsB;AACd,wCACV,MAAM,AAAU,AAAwB,SAAzB,YAAY;AAC/B,cAAO,AAAyB,yBAAD;MACjC;;uBAEoC;AAK0B,MAJlD,uCACN,cACA,yCACa,QAAC,WACN,yDAAkC,WAAW;IAC3D;UAG0B;AAExB,YAAO,qCACE,sCACG,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBAAK;;AAGd,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UACpC,gBAAW,KAAK,EAAE,QAAQ;;;IAc5C;eAEsB,OAAqB;AACzC,YAAO,mCACE,iCACE,cAAM,gEAAgC,WAAb,AAAS,QAAD,gBAAM,KAAK,+BAC5C,+DAEG,cACD,0BACE,yCACO,6CACH,iDACE,2DAAsC,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,qBAClC,gCAGT,wDAEE,gCACa,sBAChB,6BACoB,sBAChB,+BACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mBACnB,wCACK,iBACa,2BACT,+IAKtB;IAuCtB;;;;;EACF;;;;;;;;;;;;IC9HyB;;;;;;;AAMrB,YAAO;IACT;;;QANmB;;;AAAnB;;EAAwC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAUlB;AAIoD,MAH9D,uCACN,cACA,yCACa,QAAC,WAAY,yCAAuB,gBAAgB;IACvE;UAG0B;AAExB,YAAO,oCACG,+BACC,kBAAK,wGACY,qFAEpB,yCACiC,kDACE,6CACZ,iCACT,sBAChB,+BACS,gCACe,+BAAI,aACR,gDACE,qBACE,sBACD,uBACC,qCAchB,WAZgD,YAA9C,AAAO,AAAoB,AAAI,4CAAC,2CAClC,QAAC,gBACQ,iDACE,mCACE,mCAAW,YAAY,gIAEzB;AAE+B,wBAApC,uCAA2B,WAAZ,YAAY,WAAC;;IA4ClD;;;;;EACF;;;;;;;;;;IC1FS;;;;;;;AAML,YAAO;IACT;;;QANmB;;;AAAnB;;EAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBA4BK;AAIqC,MAH3D,uCACN,cACA,yCACa,QAAC,WAAY,8CAAyB,WAAW;IACpE;UAE0B;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAuC,iCAAjB,AAAO,oGACjB,qFAEpB,kDACgB,AACb,AACA,AACA,8CAFW,mBACL,wBAAuB,AAAO,6CAEhC,SAAC,SAAS;AACjB,2BAAK,AAAS,QAAD,WAAU;AA2BvB,kBAAgB,8DACqB,WAAV,WAAd,AAAS,QAAD,+CACD,+EACE,kBACP,SAAc,SAAa,UAC/B,iCACE,6BACqC,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,WACY,cAAb,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,kFAC7B;AACwD,kBAA7D,WAAkD,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO;AACM,kBAAhD,8DAAwC,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK;;;IAQhE;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAES;;;;;;IACA;;;;;;UAImB;AAExB,YAAO,2BACE,uEACsB,wCAAS,gBAExB,4BACP,gCACe,+BAAI,cACjB,wCACgB,mCACd,0CACkC,mDACF,6CACV,iCACT,sBAChB,+BACS,uCACsB,wCAAS,cACvB,wBAAQ,4LAGzB,gCACsB,+BAAI,cACjB,kBACL,sBACU,aACA,iBACW,4BACd,wCACK,kBACa;IASzC;;uCA3CiB,MAAW;;IAAX;IAAW;AAA5B;;EAAgC;;;;;;;;;;;;;;ICvG5B;;;;;;;AAKF,YAAO;IACT;;;QALiB;;;AAAjB;;EAA+B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY7B,YAAO,uCACe,gDAAoB,eACC,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,UACpC,+CACM;AACyB,YAAlC,WAAM;AAC6C,YAAnD,4CAAwC,WAApB,AAAO;mCAEtB,kBAAK,qBAAoB,qCAAwB,yFAC1C;IAGpB;;AAGE,YAAO,yCAEgB,oCAGsB,AAAM,aAA9B,AAAY,AAAK,0BAAd,6BAAuB,MAAM,UACV,AAAM,aAA7B,AAAY,AAAK,0BAAd,4BAAsB,MAAM,eACjC,6CACH,iDACF,2DAAqC,WAAJ,WAApB,AAAO,4CAAkB;IAMrD;;AAGE,YAAO,sCAA6B,WAAJ,WAApB,AAAO,4CAAkB,mBAC1B,wCAAoB;IACjC;;AAGE,YAAO,qCAEE,gCACgB,mCACd,qDACa,AACb,AACA,AACA,8CAFW,yCACkB,WAApB,AAAO,gEAEZ,SAAC,SAAS;AACjB,6BAAK,AAAS,QAAD,WAAU;AACvB,oBAAO,mBAAK,AAAgD,8BAAhB,WAAb,AAAS,QAAD,gBAAM,yBAClC,wCACO,aACI,iCACS;;IAKzC;;AAGE,YAAO,yCAEgB,oCAEsB,AAAM,aAA9B,AAAY,AAAK,0BAAd,6BAAuB,MAAM,UACV,AAAM,aAA7B,AAAY,AAAK,0BAAd,4BAAsB,MAAM,YAC7B,oCAAS,MAAM,KAAK,MAAM,cAEvC,6BACE,gCACa,sBAAC,wBAAmB,eAAU;IAIxD;UAG0B;AACxB,YAAO,oCACK,+BACC,kBAA0C,SAAV,WAAJ,WAApB,AAAO,4CAAkB,wFAChB,gGAEF,8BAClB,iCACE,6BACc,sBAAC,YAAO;IAGpC;wBAE2B;AAAR;AACJ,QAAb,WAAM,MAAM;AACR,kBAAU;AACV,mBAAO,AAAkC,wBAAvB,8BAA8B,GAAG;AACnD,2BAAe,AAAI,GAAD,KAAS,gCAAkB;AACP,QAA1C,WAAM,AAA6B,4CAAE,IAAI;AAEkB,QAD3D,WAAM,AAAmC,kDACrC,AAAkC,wBAAvB,8BAA8B,YAAY;AAiBnD,QAhBN,0CACa,uBACA,QAAC,WACD,mCACE,kBAAK,2FACK,sBACX,uCACS,kBAAK,6EACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;AAEoC,kBAD9C,uCAAK,OAAO,EAClB,yCAA2B,QAAC,WAAY;;AA+BpD,QAzBN,0CACa,uBACA,QAAC,WACD,mCACE,kBAAK,sFACH,0CACK,8CACA,mDAA0B,2FAEvB,sBACX,uCACS,kBAAK,iFACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;6FAGpB,uCACS,kBAAK,kFACL;AACgB,kBAAzB,WAAM;AACqB,kBAAjB,AAAY,uBAAT,OAAO;;MAOpC;;eAEgB,QAAQ,KAAK;AAAd;AACN;AAAU;AACX,gCAA8B;AAYlC,QAXF,MAAgB,AACX,AACA,AACA,AACA,8CAHW,yCACF,MAAM,yBAEV,QAAkB;AAC1B;AACuB,uBAArB,mBAAW,AAAE,EAAA,MAAC;AACa,YAA3B,WAAM;;gBACC;AACC,YAAR,WAAM,CAAC;;;AAeT,QAXF,MAAgB,AACX,AACA,AACA,AACA,8CAHW,yCACF,MAAM,yBAEV,QAAkB;AAC1B;AAC2B,uBAAzB,mBAAW,AAAE,EAAA,MAAC;AACa,YAA3B,WAAM;;gBACC;AACC,YAAR,WAAM,CAAC;;;AAIX,YAAI,AAAS,QAAD,IAAI;AACQ,UAAtB,WAAM;AACoB,UAA1B,WAAW;;AAEb,YAAI,AAAS,QAAD,IAAI;AACQ,UAAtB,WAAM;AACsB,UAA5B,WAAW;;AAYX,QATF,MAAM,AAAkB,AAAqB,AAAW,iBAAjC,YAAY,6BAA6B,0CAC9D,YAAY,QAAQ,EACpB,QAAQ,QAAQ,EAChB,OAAO,GAAG,EACV,QAAQ,MAAM,EACd,UAAU,KACV,aAAa,QAAQ,EACrB,UAAU,aACV,WAAW;AAgBP,QAdN,0CACa,uBACA,QAAC,WACD,mCACE,kBAAK,2FACK,sBACX,uCACS,kBAAK,6EACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;;AAMjB,QAAjB,WAAM;MACR;;;;;;EACF;;;;;;;;;;;;;;;MAvNsB,gCAAoB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;UCLjB;AACxB,YAAO,oCACS,yCACgB,2BACb,kBACT,qBACO,qCACO,8JAME,AAAK,mCACvB,sCACG,gCACa,sBAGhB;IAKV;;;QA3B2B;;AAAQ,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCMxB;AACxB,YAAO,uCACiB,oCAAS,MAAI,MAAI,MAAI,cAC3B,4BACN,aACD,sCACgC,+CACnB,sBAChB,kBACE,wCACO,0CACoB,2BACT,+BACJ,mEAEhB,6BACoB,sBAsDhB,+CACgB,2BACH,+DAED,mCAAyB,oCACxB;AACwB,oBAAjC,WAAM;AAC2E,oBAAtE,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;2CAM5D,kBACL,uBACO,qCAAwB,6IAGnC,+BACS;IAMvB;;;QAjGyB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;IAqGnC;;;;;;UAIa;AACxB,YAAO;IACT;;4CAL0B;;;AAApB;;EAA0B;;;;;;;;;;;;;ACvGI;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCoC;AAChC;AAC8B,UAA5B,MAAM,AAAc;;cACb;AACK,UAAZ,WAAM,KAAK;;MAEf;;UAuB0B;AACpB,wBAAkB;AACtB,YAAO,gCACC,4CACoB,2BAClB,mCACG,yCACgC,yCACnB,sBAUhB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,mBACO,0CACO,0BACE,AAAK,uCACT,qBACK,kEAGnB,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;AACiB,sBAAhC,WAAM,AAAyB,gCAAL,IAAI;qDAGZ,AAAK,yEAGb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,8JAQjB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;qDAKJ,mBACO,AAAK,yCACb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,iKASjB,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,iBACO,wCACK,aAEI,iCACF,8MAMX;AAKL,mCAAI,MAAM,AAAY,WAAD,QAAQ,eAAU;AACd,0BAA7B,WAAM,AAAmB,kCAAE,CAAC;AAC5B,8BAAI,AAAE,CAAD,KAAI;AAeD,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yGACK,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;gCAO7B,eAAG,yBAAY,CAAC;AAef,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yBAAY,CAAC,QAAO,0EACf,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;;AAUQ,4BAHhC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;;wBAEjC,gDACmB,+BAAI,sBAEF,wCACI,wMAKlC,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,4BACS,wCACH,sEACI,iEAEV,+BAAgB,iEAChB,6BACS,kBACL,+BACO,wCACK,aAEI,iCACF,8MAMX;AAyBmC,0BAH/B,uCACP,OAAO,EACP,yCACa,QAAC,WAAY;wBAOjC,oCACmB,+BAAI,qBAEF,wCACI,wMAKlC,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,kBACE,kCACO,0CAAsB,2EAE/B,+BAAgB,gEAChB,iCACS;AAIuC,wBAHlC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,oBACO,qCACW,iCACF,0BACW,gCACI,kNAKvC,gCACU,iEAEV,6BACS,oCAGE,iCACE;AAI0C,wBAHrC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,2BACO,qCACW,iCACS,gCACX,0BACe,2QAKvC,6BACoB;IAQhC;;;IAnZO;IAAU;IAAU;IAEtB,yBAAmB;IACjB;IACa;IA2BP,sBAAgB,6CACnB,sBACN,SACA;;;EAkXN;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,gCACC,mCACI,+BACC,kBAAK,+FACY,6BACX,sCACD,kBAAW,oCAA8B,2FACxC,cAAgB,AAAY,uBAAT,OAAO,0KAGjB,2BAClB,mCACG,gCACa,sBAChB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,0CACO,0CACO,0BACE,AAAK,uCACT,mEAGd,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAE3B,gCACqB,gDAAoB,iBAAiB,gBAClD,yCACI,QAAC;AACE,sBAAZ,aAAQ,IAAI;qDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kNAQf,gCAAiB,aAAW,kEAE5B,gCACU,gEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,mCACO,wCACK,aAEI,iCACF,8MAMX;wBAAW,oCACF,+BAAI,qBAEF,wCACI,wMAKlC,gCACU;IAoDtB;;;IAxKO;;;EAyKT;;;;;;;;;;;;;AAI0B;IAAQ;;;;;;EAClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,sDACqB,eAClB,+BACC,kBAAK,gGACY,qFAEpB,6BACG,yCACgC,yCACnB,sBACf,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACE,oBAAZ,aAAQ,IAAI;mDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,+LAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACU,oBAApB,qBAAgB,IAAI;mDAIF,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,oMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACS,oBAAnB,oBAAe,IAAI;mDAID,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACK,oBAAf,gBAAW,IAAI;mDAGJ,mBACO,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACM,oBAAhB,iBAAY,IAAI;mDAGL,mBACO,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,0MAQf,gCACU,iEAEV,kBAAK,2GACJ,+BACgD,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,+CACK,4BACJ,AAAK,oCACZ,kBAAK,oFACD;kBAEV,oCACmB,+BAAI,sBACF,wCACI;IAMtC;;;IA3LO;IAAO;IAAe;IAAc;IAAU;;;EA4LvD;;;;;;;;;;;;;;;kDACwB;AACtB,QAAG,AAAE,CAAD,YAAU;AACZ,YAAO;;AAEP,YAAO;;EAEX;kDAC0B;QAAQ;AAEjB,kBAAU,AAAE,CAAD,SAAO;AACxB,kBAAU,AAAO,OAAA,QAAC,GAAG;AACf,cAAM,AAAQ,OAAD,SAAO;AACjC,UAAO,AAAG,IAAA,QAAC;EAEf;;;;;;;;;;;;;;;;;;;UChyB4B;AACxB,YAAO,6CACmB,AAAK,mCACvB,sCACG,gCACa,sBAChB,+FACA,gCAAiB,mEACjB,yCAAoB;IAK9B;;;QAfuB;;AAAQ,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCApB;AACxB,YAAO,qCACI,gCAEa,sBAEhB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AAC0E,gBAAzE,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAa;uCAE5D,wDAGE,kBACL,qBACO,wCAAoB,aAAiB,iCAA6B,6MAI/E,+BACS,cACC;IAMpB;;;;;;EAEF;;;;;;;;MApCsB,4BAAoB;YAAG;;;;;;ACMzC,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oCACK,+BACC,kBAAK,yGACY,uFAGpB;IACZ;;AAGE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAqB7B,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UAC/B,0BACI,mCACI,kBAC+B,cAAT,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mFACpB,kBAC4B,cAAX,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,kFAKrB;AAmDC,sBAlDN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,wFACH,0CACK,mDACA,mDACE,6FAEC,sBACX,uCACS,kBAAK,mFACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;6GAGpB,uCACS,kBAAK,mFACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;AAwBd,gCAvBN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBACH,yGACa,sBACX,uCACS,kBAAK,+EACL;AAGC,0CAFA,AAEL,uBADG,OAAO;AAOa,0CALlB,uCACN,OAAO,EACP,yCAEQ,QAAC,WACG;;;;;;IAiB1E;;AAmCuB;AACf,wBAAsB;AACd,2BAEV,MAAM,AACD,AACA,AACA,SAHU,YACC,qBACL,sBAAqB;AAEpC,cAAO,AAAY,YAAD;MACpB;;wBA6E2B,QAAQ;AAAhB;AAyBX,QAxBN,wEACa,OAAO,YACP,QAAC,WACD,mCACE,kBAAK,wFACH,0CACK,mDACA,mDAA0B,6FAEvB,sBACX,uCACS,kBAAK,mFACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;+FAGpB,uCACS,kBAAK,mFACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;;MAMpC;;;;;;EACF;;;;;;;;;;;MAxQsB,qCAAoB;YAAG","file":"InventoryView.ddc.js"}');
  // Exports:
  return {
    widgets__testlist: testlist,
    views__homeView: homeView,
    views__inventory__checkOutB: checkOutB,
    views__InventoryView: InventoryView,
    views__inventory__list_page: list_page,
    views__inventory__category_page: category_page,
    views__inventory__itemGrid: itemGrid,
    views__inventory__ItemDetails: ItemDetails,
    views__ReservationView: ReservationView,
    widgets__navigation: navigation,
    widgets__signInScreen: signInScreen,
    views__chatBoxView: chatBoxView,
    views__inventory__return: $return,
    widgets__activeActivities: activeActivities
  };
});

//# sourceMappingURL=InventoryView.ddc.js.map
