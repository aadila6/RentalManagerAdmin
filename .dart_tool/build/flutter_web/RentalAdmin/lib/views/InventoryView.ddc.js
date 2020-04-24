define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/src/rendering/animated_size', 'packages/RentalAdmin/views/inventory/custom_gridcell', 'packages/intl/intl', 'packages/google_sign_in/google_sign_in', 'packages/firebase_auth/firebase_auth', 'packages/RentalAdmin/widgets/auth'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__cloud_firestore__cloud_firestore, packages__flutter__src__rendering__animated_size, packages__RentalAdmin__views__inventory__custom_gridcell, packages__intl__intl, packages__google_sign_in__google_sign_in, packages__firebase_auth__firebase_auth, packages__RentalAdmin__widgets__auth) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const spacer = packages__flutter__src__widgets__actions.src__widgets__spacer;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const card = packages__flutter__material.src__material__card;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const icons = packages__flutter__material.src__material__icons;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const app = packages__flutter__material.src__material__app;
  const grid_tile = packages__flutter__material.src__material__grid_tile;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const divider = packages__flutter__material.src__material__divider;
  const input_border = packages__flutter__material.src__material__input_border;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const custom_gridcell = packages__RentalAdmin__views__inventory__custom_gridcell.views__inventory__custom_gridcell;
  const intl = packages__intl__intl.intl;
  const google_sign_in = packages__google_sign_in__google_sign_in.google_sign_in;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const auth = packages__RentalAdmin__widgets__auth.widgets__auth;
  const $return = Object.create(dart.library);
  const activeActivities = Object.create(dart.library);
  const homeView = Object.create(dart.library);
  const checkOutB = Object.create(dart.library);
  const ReservationView = Object.create(dart.library);
  const InventoryView = Object.create(dart.library);
  const list_page = Object.create(dart.library);
  const category_page = Object.create(dart.library);
  const itemGrid = Object.create(dart.library);
  const ItemDetails = Object.create(dart.library);
  const resCell = Object.create(dart.library);
  const navigation = Object.create(dart.library);
  const signInScreen = Object.create(dart.library);
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $split = dartx.split;
  let BuildContextToActiveActivity = () => (BuildContextToActiveActivity = dart.constFn(dart.fnType(activeActivities.ActiveActivity, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(homeView.HomeView, [framework.BuildContext])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let BuildContextAndintToCard = () => (BuildContextAndintToCard = dart.constFn(dart.fnType(card.Card, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let BuildContextToReservationListPage = () => (BuildContextToReservationListPage = dart.constFn(dart.fnType(ReservationView.ReservationListPage, [framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToLocationPage = () => (BuildContextToLocationPage = dart.constFn(dart.fnType(InventoryView.LocationPage, [framework.BuildContext])))();
  let BuildContextToreservationCell = () => (BuildContextToreservationCell = dart.constFn(dart.fnType(resCell.reservationCell, [framework.BuildContext])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
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
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let BuildContextTosignInScreen = () => (BuildContextTosignInScreen = dart.constFn(dart.fnType(signInScreen.signInScreen, [framework.BuildContext])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let BuildContextToSignUpPage = () => (BuildContextToSignUpPage = dart.constFn(dart.fnType(signInScreen.SignUpPage, [framework.BuildContext])))();
  let BuildContextToResetPassword = () => (BuildContextToResetPassword = dart.constFn(dart.fnType(signInScreen.ResetPassword, [framework.BuildContext])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 82,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 40,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 40,
        [EdgeInsets_left]: 40
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 26,
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
        [_Location_column]: 24,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 24,
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
        [_Location_column]: 22,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 32,
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
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 12,
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
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 10,
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
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/return.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 25,
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
        [_Location_column]: 12,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 66,
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
        [_Location_column]: 38,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 68,
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
        [_Location_column]: 41,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 43,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 43,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 61,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 56,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 62,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 75,
        [_Location_line]: 103,
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
        [_Location_column]: 70,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 77,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 59,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 59,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 55,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 55,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 45,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 45,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 41,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 41,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 41,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 31,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 31,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 32,
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
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 259,
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
        [_Location_column]: 22,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 263,
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
        [_Location_column]: 28,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 264,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 262,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 269,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 261,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/activeActivities.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], widget_inspector._Location);
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C157 || CT.C157,
        [BorderRadius_bottomLeft]: C157 || CT.C157,
        [BorderRadius_topRight]: C157 || CT.C157,
        [BorderRadius_topLeft]: C157 || CT.C157
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 23,
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
        [_Location_column]: 30,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 25,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 25,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 25,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176, C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 23,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181, C182 || CT.C182], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C184 || CT.C184,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 48,
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
        [_Location_column]: 20,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194, C195 || CT.C195, C196 || CT.C196], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 46,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.constList([C212 || CT.C212], widget_inspector._Location);
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C211 || CT.C211,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 21,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C214 || CT.C214,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C222 || CT.C222,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 21,
        [_Location_line]: 53,
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
        [_Location_column]: 26,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.constList([C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C231 || CT.C231,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.constList([C236 || CT.C236, C237 || CT.C237], widget_inspector._Location);
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C235 || CT.C235,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 65,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 21,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245, C246 || CT.C246], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.constList([C249 || CT.C249, C250 || CT.C250], widget_inspector._Location);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C248 || CT.C248,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253, C254 || CT.C254, C255 || CT.C255], widget_inspector._Location);
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258, C259 || CT.C259], widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C257 || CT.C257,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C265 || CT.C265,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 69,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 31,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 31,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 31,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275, C276 || CT.C276, C277 || CT.C277], widget_inspector._Location);
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 21,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 92,
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
        [_Location_column]: 33,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 78,
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
        [_Location_column]: 16,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 76,
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
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "passedFirestoreData",
        [_Location_column]: 33,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.constList([C294 || CT.C294], widget_inspector._Location);
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C293 || CT.C293,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298, C299 || CT.C299], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C297 || CT.C297,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302], widget_inspector._Location);
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.constList([C305 || CT.C305], widget_inspector._Location);
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C304 || CT.C304,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.constList([C309 || CT.C309, C310 || CT.C310], widget_inspector._Location);
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C308 || CT.C308,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313], widget_inspector._Location);
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316, C317 || CT.C317], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C315 || CT.C315,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320, C321 || CT.C321], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C319 || CT.C319,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.constList([C324 || CT.C324], widget_inspector._Location);
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C323 || CT.C323,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327, C328 || CT.C328], widget_inspector._Location);
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.constList([C331 || CT.C331], widget_inspector._Location);
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C330 || CT.C330,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C333 || CT.C333,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.constList([C337 || CT.C337, C338 || CT.C338], widget_inspector._Location);
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C336 || CT.C336,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341], widget_inspector._Location);
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C343() {
      return C343 = dart.constList([C344 || CT.C344], widget_inspector._Location);
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C343 || CT.C343,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.constList([C347 || CT.C347], widget_inspector._Location);
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C346 || CT.C346,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350], widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C349 || CT.C349,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.constList([C353 || CT.C353], widget_inspector._Location);
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C352 || CT.C352,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.constList([C356 || CT.C356, C357 || CT.C357], widget_inspector._Location);
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C355 || CT.C355,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C360() {
      return C360 = dart.constList([C361 || CT.C361, C362 || CT.C362], widget_inspector._Location);
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C360 || CT.C360,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "passedFirestoreData",
        [_Location_column]: 30,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365], widget_inspector._Location);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C364 || CT.C364,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C367() {
      return C367 = dart.constList([C368 || CT.C368], widget_inspector._Location);
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C367 || CT.C367,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C370 || CT.C370,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.constList([C374 || CT.C374, C375 || CT.C375], widget_inspector._Location);
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C373 || CT.C373,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.constList([C378 || CT.C378, C379 || CT.C379], widget_inspector._Location);
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C377 || CT.C377,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.constList([C382 || CT.C382], widget_inspector._Location);
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C381 || CT.C381,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 18,
        [EdgeInsets_right]: 200,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 200
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C386() {
      return C386 = dart.constList([C387 || CT.C387, C388 || CT.C388], widget_inspector._Location);
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C386 || CT.C386,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C390 || CT.C390,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C394() {
      return C394 = dart.constList([C395 || CT.C395], widget_inspector._Location);
    },
    get C393() {
      return C393 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C394 || CT.C394,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.constList([C398 || CT.C398], widget_inspector._Location);
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C397 || CT.C397,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C400() {
      return C400 = dart.constList([C401 || CT.C401, C402 || CT.C402], widget_inspector._Location);
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C400 || CT.C400,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.constList([C405 || CT.C405, C406 || CT.C406], widget_inspector._Location);
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C404 || CT.C404,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.constList([C409 || CT.C409], widget_inspector._Location);
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C408 || CT.C408,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.constList([C412 || CT.C412, C413 || CT.C413, C414 || CT.C414], widget_inspector._Location);
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C411 || CT.C411,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.constList([C417 || CT.C417, C418 || CT.C418], widget_inspector._Location);
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C416 || CT.C416,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.constList([C421 || CT.C421], widget_inspector._Location);
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C420 || CT.C420,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/list_page.dart"
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "category",
        [_Location_column]: 48,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C423() {
      return C423 = dart.constList([C424 || CT.C424], widget_inspector._Location);
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C423 || CT.C423,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427], widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C426 || CT.C426,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C429() {
      return C429 = dart.constList([C430 || CT.C430, C431 || CT.C431], widget_inspector._Location);
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C429 || CT.C429,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "categoryInfo",
        [_Location_column]: 43,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.constList([C434 || CT.C434], widget_inspector._Location);
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C433 || CT.C433,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C436() {
      return C436 = dart.constList([C437 || CT.C437], widget_inspector._Location);
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C436 || CT.C436,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440, C441 || CT.C441], widget_inspector._Location);
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisCount",
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "childAspectRatio",
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisSpacing",
        [_Location_column]: 17,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C443() {
      return C443 = dart.constList([C444 || CT.C444, C445 || CT.C445, C446 || CT.C446, C447 || CT.C447, C448 || CT.C448], widget_inspector._Location);
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C443 || CT.C443,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 42,
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
        [_Location_column]: 20,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C454() {
      return C454 = dart.constList([C455 || CT.C455], widget_inspector._Location);
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C454 || CT.C454,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C457() {
      return C457 = dart.constList([C458 || CT.C458, C459 || CT.C459, C460 || CT.C460, C461 || CT.C461], widget_inspector._Location);
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C457 || CT.C457,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.constList([C464 || CT.C464, C465 || CT.C465], widget_inspector._Location);
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C463 || CT.C463,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/category_page.dart"
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemSelected",
        [_Location_column]: 46,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.constList([C468 || CT.C468], widget_inspector._Location);
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C467 || CT.C467,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C470() {
      return C470 = dart.constList([C471 || CT.C471], widget_inspector._Location);
    },
    get C469() {
      return C469 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C470 || CT.C470,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C473() {
      return C473 = dart.constList([C474 || CT.C474, C475 || CT.C475], widget_inspector._Location);
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C473 || CT.C473,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C476() {
      return C476 = dart.const({
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
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 63,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 67,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C478() {
      return C478 = dart.constList([C479 || CT.C479, C480 || CT.C480], widget_inspector._Location);
    },
    get C477() {
      return C477 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C478 || CT.C478,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C482() {
      return C482 = dart.constList([C483 || CT.C483, C484 || CT.C484], widget_inspector._Location);
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C482 || CT.C482,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.constList([C487 || CT.C487, C488 || CT.C488, C489 || CT.C489], widget_inspector._Location);
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C486 || CT.C486,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C491() {
      return C491 = dart.constList([C492 || CT.C492, C493 || CT.C493], widget_inspector._Location);
    },
    get C490() {
      return C490 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C491 || CT.C491,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C495() {
      return C495 = dart.constList([C496 || CT.C496, C497 || CT.C497], widget_inspector._Location);
    },
    get C494() {
      return C494 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C495 || CT.C495,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 40,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C499() {
      return C499 = dart.constList([C500 || CT.C500], widget_inspector._Location);
    },
    get C498() {
      return C498 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C499 || CT.C499,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.constList([C503 || CT.C503, C504 || CT.C504], widget_inspector._Location);
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C502 || CT.C502,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.constList([C507 || CT.C507], widget_inspector._Location);
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C506 || CT.C506,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C509() {
      return C509 = dart.constList([C510 || CT.C510, C511 || CT.C511, C512 || CT.C512, C513 || CT.C513, C514 || CT.C514], widget_inspector._Location);
    },
    get C508() {
      return C508 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C509 || CT.C509,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C516() {
      return C516 = dart.constList([C517 || CT.C517, C518 || CT.C518], widget_inspector._Location);
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C516 || CT.C516,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.constList([C521 || CT.C521, C522 || CT.C522, C523 || CT.C523, C524 || CT.C524], widget_inspector._Location);
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C520 || CT.C520,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C526() {
      return C526 = dart.constList([C527 || CT.C527, C528 || CT.C528], widget_inspector._Location);
    },
    get C525() {
      return C525 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C526 || CT.C526,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C530() {
      return C530 = dart.constList([C531 || CT.C531, C532 || CT.C532], widget_inspector._Location);
    },
    get C529() {
      return C529 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C530 || CT.C530,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.constList([C535 || CT.C535, C536 || CT.C536, C537 || CT.C537], widget_inspector._Location);
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C534 || CT.C534,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 28,
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
        [_Location_column]: 16,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.constList([C544 || CT.C544, C545 || CT.C545, C546 || CT.C546], widget_inspector._Location);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C543 || CT.C543,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C548() {
      return C548 = dart.constList([C549 || CT.C549, C550 || CT.C550, C551 || CT.C551], widget_inspector._Location);
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C548 || CT.C548,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.constList([C554 || CT.C554, C555 || CT.C555, C556 || CT.C556, C557 || CT.C557], widget_inspector._Location);
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C553 || CT.C553,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C561() {
      return C561 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C559() {
      return C559 = dart.constList([C560 || CT.C560, C561 || CT.C561], widget_inspector._Location);
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C559 || CT.C559,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 73,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C563() {
      return C563 = dart.constList([C564 || CT.C564, C565 || CT.C565], widget_inspector._Location);
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C563 || CT.C563,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 67,
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
        [_Location_column]: 16,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C573() {
      return C573 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C571() {
      return C571 = dart.constList([C572 || CT.C572, C573 || CT.C573], widget_inspector._Location);
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C571 || CT.C571,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C576() {
      return C576 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C575() {
      return C575 = dart.constList([C576 || CT.C576], widget_inspector._Location);
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C575 || CT.C575,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.constList([C579 || CT.C579], widget_inspector._Location);
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C578 || CT.C578,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 90,
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
        [_Location_column]: 14,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C584() {
      return C584 = dart.constList([C585 || CT.C585, C586 || CT.C586, C587 || CT.C587, C588 || CT.C588, C589 || CT.C589], widget_inspector._Location);
    },
    get C583() {
      return C583 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C584 || CT.C584,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C591() {
      return C591 = dart.constList([C592 || CT.C592], widget_inspector._Location);
    },
    get C590() {
      return C590 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C591 || CT.C591,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C594() {
      return C594 = dart.constList([C595 || CT.C595, C596 || CT.C596], widget_inspector._Location);
    },
    get C593() {
      return C593 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C594 || CT.C594,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C598() {
      return C598 = dart.constList([C599 || CT.C599], widget_inspector._Location);
    },
    get C597() {
      return C597 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C598 || CT.C598,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C601() {
      return C601 = dart.constList([C602 || CT.C602], widget_inspector._Location);
    },
    get C600() {
      return C600 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C601 || CT.C601,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C606() {
      return C606 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C607() {
      return C607 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C604() {
      return C604 = dart.constList([C605 || CT.C605, C606 || CT.C606, C607 || CT.C607], widget_inspector._Location);
    },
    get C603() {
      return C603 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C604 || CT.C604,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C608() {
      return C608 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 69,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 77,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 77,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C611() {
      return C611 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 73,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 55,
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
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C616() {
      return C616 = dart.constList([C617 || CT.C617, C618 || CT.C618], widget_inspector._Location);
    },
    get C615() {
      return C615 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C616 || CT.C616,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C621() {
      return C621 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C620() {
      return C620 = dart.constList([C621 || CT.C621], widget_inspector._Location);
    },
    get C619() {
      return C619 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C620 || CT.C620,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C623() {
      return C623 = dart.constList([C624 || CT.C624], widget_inspector._Location);
    },
    get C622() {
      return C622 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C623 || CT.C623,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C626() {
      return C626 = dart.constList([C627 || CT.C627], widget_inspector._Location);
    },
    get C625() {
      return C625 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C626 || CT.C626,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C629() {
      return C629 = dart.constList([C630 || CT.C630], widget_inspector._Location);
    },
    get C628() {
      return C628 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C629 || CT.C629,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C633() {
      return C633 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C632() {
      return C632 = dart.constList([C633 || CT.C633], widget_inspector._Location);
    },
    get C631() {
      return C631 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C632 || CT.C632,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 98,
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
        [_Location_column]: 18,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C639() {
      return C639 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 113,
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
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 115,
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
        [_Location_column]: 18,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C645() {
      return C645 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 130,
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
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C648() {
      return C648 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C647() {
      return C647 = dart.constList([C648 || CT.C648], widget_inspector._Location);
    },
    get C646() {
      return C646 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C647 || CT.C647,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C650() {
      return C650 = dart.constList([C651 || CT.C651], widget_inspector._Location);
    },
    get C649() {
      return C649 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C650 || CT.C650,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C654() {
      return C654 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 51,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C653() {
      return C653 = dart.constList([C654 || CT.C654, C655 || CT.C655], widget_inspector._Location);
    },
    get C652() {
      return C652 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C653 || CT.C653,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C658() {
      return C658 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C659() {
      return C659 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C657() {
      return C657 = dart.constList([C658 || CT.C658, C659 || CT.C659], widget_inspector._Location);
    },
    get C656() {
      return C656 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C657 || CT.C657,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C662() {
      return C662 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C663() {
      return C663 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 17,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C668() {
      return C668 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C661() {
      return C661 = dart.constList([C662 || CT.C662, C663 || CT.C663, C664 || CT.C664, C665 || CT.C665, C666 || CT.C666, C667 || CT.C667, C668 || CT.C668], widget_inspector._Location);
    },
    get C660() {
      return C660 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C661 || CT.C661,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C671() {
      return C671 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C672() {
      return C672 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C673() {
      return C673 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C670() {
      return C670 = dart.constList([C671 || CT.C671, C672 || CT.C672, C673 || CT.C673], widget_inspector._Location);
    },
    get C669() {
      return C669 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C670 || CT.C670,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C675() {
      return C675 = dart.constList([C676 || CT.C676], widget_inspector._Location);
    },
    get C674() {
      return C674 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C675 || CT.C675,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 84,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 19,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C679() {
      return C679 = dart.constList([C680 || CT.C680, C681 || CT.C681], widget_inspector._Location);
    },
    get C678() {
      return C678 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C679 || CT.C679,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C684() {
      return C684 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C685() {
      return C685 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C683() {
      return C683 = dart.constList([C684 || CT.C684, C685 || CT.C685], widget_inspector._Location);
    },
    get C682() {
      return C682 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C683 || CT.C683,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C688() {
      return C688 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C689() {
      return C689 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 17,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 17,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C687() {
      return C687 = dart.constList([C688 || CT.C688, C689 || CT.C689, C690 || CT.C690, C691 || CT.C691, C692 || CT.C692, C693 || CT.C693, C694 || CT.C694], widget_inspector._Location);
    },
    get C686() {
      return C686 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C687 || CT.C687,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C697() {
      return C697 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C698() {
      return C698 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C696() {
      return C696 = dart.constList([C697 || CT.C697, C698 || CT.C698, C699 || CT.C699], widget_inspector._Location);
    },
    get C695() {
      return C695 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C696 || CT.C696,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C701() {
      return C701 = dart.constList([C702 || CT.C702, C703 || CT.C703], widget_inspector._Location);
    },
    get C700() {
      return C700 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C701 || CT.C701,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C706() {
      return C706 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C705() {
      return C705 = dart.constList([C706 || CT.C706, C707 || CT.C707], widget_inspector._Location);
    },
    get C704() {
      return C704 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C705 || CT.C705,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C710() {
      return C710 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C709() {
      return C709 = dart.constList([C710 || CT.C710, C711 || CT.C711], widget_inspector._Location);
    },
    get C708() {
      return C708 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C709 || CT.C709,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C714() {
      return C714 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C713() {
      return C713 = dart.constList([C714 || CT.C714, C715 || CT.C715], widget_inspector._Location);
    },
    get C712() {
      return C712 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C713 || CT.C713,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C716() {
      return C716 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 86,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C719() {
      return C719 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C720() {
      return C720 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C718() {
      return C718 = dart.constList([C719 || CT.C719, C720 || CT.C720], widget_inspector._Location);
    },
    get C717() {
      return C717 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C718 || CT.C718,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C723() {
      return C723 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C724() {
      return C724 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C725() {
      return C725 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C722() {
      return C722 = dart.constList([C723 || CT.C723, C724 || CT.C724, C725 || CT.C725, C726 || CT.C726], widget_inspector._Location);
    },
    get C721() {
      return C721 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C722 || CT.C722,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C728() {
      return C728 = dart.constList([C729 || CT.C729], widget_inspector._Location);
    },
    get C727() {
      return C727 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C728 || CT.C728,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 29,
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
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C735() {
      return C735 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 20,
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
        [_Location_column]: 16,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C739() {
      return C739 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C742() {
      return C742 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C738() {
      return C738 = dart.constList([C739 || CT.C739, C740 || CT.C740, C741 || CT.C741, C742 || CT.C742], widget_inspector._Location);
    },
    get C737() {
      return C737 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C738 || CT.C738,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C743() {
      return C743 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C746() {
      return C746 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C747() {
      return C747 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C745() {
      return C745 = dart.constList([C746 || CT.C746, C747 || CT.C747], widget_inspector._Location);
    },
    get C744() {
      return C744 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C745 || CT.C745,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C751() {
      return C751 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C749() {
      return C749 = dart.constList([C750 || CT.C750, C751 || CT.C751], widget_inspector._Location);
    },
    get C748() {
      return C748 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C749 || CT.C749,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C755() {
      return C755 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C753() {
      return C753 = dart.constList([C754 || CT.C754, C755 || CT.C755], widget_inspector._Location);
    },
    get C752() {
      return C752 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C753 || CT.C753,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C758() {
      return C758 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C759() {
      return C759 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C757() {
      return C757 = dart.constList([C758 || CT.C758, C759 || CT.C759], widget_inspector._Location);
    },
    get C756() {
      return C756 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C757 || CT.C757,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C762() {
      return C762 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C761() {
      return C761 = dart.constList([C762 || CT.C762], widget_inspector._Location);
    },
    get C760() {
      return C760 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C761 || CT.C761,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C765() {
      return C765 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C766() {
      return C766 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C767() {
      return C767 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C764() {
      return C764 = dart.constList([C765 || CT.C765, C766 || CT.C766, C767 || CT.C767], widget_inspector._Location);
    },
    get C763() {
      return C763 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C764 || CT.C764,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C770() {
      return C770 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C771() {
      return C771 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C769() {
      return C769 = dart.constList([C770 || CT.C770, C771 || CT.C771], widget_inspector._Location);
    },
    get C768() {
      return C768 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C769 || CT.C769,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C772() {
      return C772 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 100
      });
    },
    get C774() {
      return C774 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C773() {
      return C773 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C774 || CT.C774,
        [Icon_size]: null,
        [Icon_icon]: C775 || CT.C775
      });
    },
    get C778() {
      return C778 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C779() {
      return C779 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C780() {
      return C780 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C781() {
      return C781 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C777() {
      return C777 = dart.constList([C778 || CT.C778, C779 || CT.C779, C780 || CT.C780, C781 || CT.C781], widget_inspector._Location);
    },
    get C776() {
      return C776 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C777 || CT.C777,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C784() {
      return C784 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C785() {
      return C785 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C783() {
      return C783 = dart.constList([C784 || CT.C784, C785 || CT.C785], widget_inspector._Location);
    },
    get C782() {
      return C782 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C783 || CT.C783,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C788() {
      return C788 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C789() {
      return C789 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 101,
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
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C791() {
      return C791 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59543
      });
    },
    get C790() {
      return C790 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C774 || CT.C774,
        [Icon_size]: null,
        [Icon_icon]: C791 || CT.C791
      });
    },
    get C794() {
      return C794 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C795() {
      return C795 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C793() {
      return C793 = dart.constList([C794 || CT.C794, C795 || CT.C795, C796 || CT.C796, C797 || CT.C797], widget_inspector._Location);
    },
    get C792() {
      return C792 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C793 || CT.C793,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C800() {
      return C800 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C801() {
      return C801 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C799() {
      return C799 = dart.constList([C800 || CT.C800, C801 || CT.C801], widget_inspector._Location);
    },
    get C798() {
      return C798 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C799 || CT.C799,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C804() {
      return C804 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C803() {
      return C803 = dart.constList([C804 || CT.C804], widget_inspector._Location);
    },
    get C802() {
      return C802 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C803 || CT.C803,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C807() {
      return C807 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C808() {
      return C808 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C806() {
      return C806 = dart.constList([C807 || CT.C807, C808 || CT.C808], widget_inspector._Location);
    },
    get C805() {
      return C805 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C806 || CT.C806,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C811() {
      return C811 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C810() {
      return C810 = dart.constList([C811 || CT.C811], widget_inspector._Location);
    },
    get C809() {
      return C809 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C810 || CT.C810,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C814() {
      return C814 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C815() {
      return C815 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C813() {
      return C813 = dart.constList([C814 || CT.C814, C815 || CT.C815], widget_inspector._Location);
    },
    get C812() {
      return C812 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C813 || CT.C813,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C818() {
      return C818 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C817() {
      return C817 = dart.constList([C818 || CT.C818], widget_inspector._Location);
    },
    get C816() {
      return C816 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C817 || CT.C817,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C821() {
      return C821 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C820() {
      return C820 = dart.constList([C821 || CT.C821], widget_inspector._Location);
    },
    get C819() {
      return C819 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C820 || CT.C820,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C824() {
      return C824 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C823() {
      return C823 = dart.constList([C824 || CT.C824, C825 || CT.C825], widget_inspector._Location);
    },
    get C822() {
      return C822 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C823 || CT.C823,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C828() {
      return C828 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C829() {
      return C829 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C827() {
      return C827 = dart.constList([C828 || CT.C828, C829 || CT.C829], widget_inspector._Location);
    },
    get C826() {
      return C826 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C827 || CT.C827,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C831() {
      return C831 = dart.constList([C832 || CT.C832], widget_inspector._Location);
    },
    get C830() {
      return C830 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C831 || CT.C831,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C835() {
      return C835 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C834() {
      return C834 = dart.constList([C835 || CT.C835], widget_inspector._Location);
    },
    get C833() {
      return C833 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C834 || CT.C834,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C838() {
      return C838 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C837() {
      return C837 = dart.constList([C838 || CT.C838, C839 || CT.C839], widget_inspector._Location);
    },
    get C836() {
      return C836 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C837 || CT.C837,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C842() {
      return C842 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C843() {
      return C843 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C841() {
      return C841 = dart.constList([C842 || CT.C842, C843 || CT.C843], widget_inspector._Location);
    },
    get C840() {
      return C840 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C841 || CT.C841,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C844() {
      return C844 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C848() {
      return C848 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C849() {
      return C849 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C850() {
      return C850 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C851() {
      return C851 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C852() {
      return C852 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C853() {
      return C853 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C854() {
      return C854 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C855() {
      return C855 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C856() {
      return C856 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C857() {
      return C857 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C846() {
      return C846 = dart.constList([C847 || CT.C847, C848 || CT.C848, C849 || CT.C849, C850 || CT.C850, C851 || CT.C851, C852 || CT.C852, C853 || CT.C853, C854 || CT.C854, C855 || CT.C855, C856 || CT.C856, C857 || CT.C857], widget_inspector._Location);
    },
    get C845() {
      return C845 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C846 || CT.C846,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C860() {
      return C860 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C859() {
      return C859 = dart.constList([C860 || CT.C860, C861 || CT.C861], widget_inspector._Location);
    },
    get C858() {
      return C858 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C859 || CT.C859,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C864() {
      return C864 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C865() {
      return C865 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C863() {
      return C863 = dart.constList([C864 || CT.C864, C865 || CT.C865], widget_inspector._Location);
    },
    get C862() {
      return C862 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C863 || CT.C863,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 29,
        [_Location_line]: 228,
        [_Location_file]: null
      });
    },
    get C869() {
      return C869 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C867() {
      return C867 = dart.constList([C868 || CT.C868, C869 || CT.C869], widget_inspector._Location);
    },
    get C866() {
      return C866 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C867 || CT.C867,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 232,
        [_Location_file]: null
      });
    },
    get C871() {
      return C871 = dart.constList([C872 || CT.C872], widget_inspector._Location);
    },
    get C870() {
      return C870 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C871 || CT.C871,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 232,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C875() {
      return C875 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C876() {
      return C876 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C874() {
      return C874 = dart.constList([C875 || CT.C875, C876 || CT.C876], widget_inspector._Location);
    },
    get C873() {
      return C873 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C874 || CT.C874,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 234,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C879() {
      return C879 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C878() {
      return C878 = dart.constList([C879 || CT.C879], widget_inspector._Location);
    },
    get C877() {
      return C877 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C878 || CT.C878,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C882() {
      return C882 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C881() {
      return C881 = dart.constList([C882 || CT.C882, C883 || CT.C883], widget_inspector._Location);
    },
    get C880() {
      return C880 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C881 || CT.C881,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C884() {
      return C884 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 55,
        [_Location_line]: 275,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C887() {
      return C887 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C888() {
      return C888 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C889() {
      return C889 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C890() {
      return C890 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C892() {
      return C892 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C893() {
      return C893 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 277,
        [_Location_file]: null
      });
    },
    get C896() {
      return C896 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 279,
        [_Location_file]: null
      });
    },
    get C897() {
      return C897 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C886() {
      return C886 = dart.constList([C887 || CT.C887, C888 || CT.C888, C889 || CT.C889, C890 || CT.C890, C891 || CT.C891, C892 || CT.C892, C893 || CT.C893, C894 || CT.C894, C895 || CT.C895, C896 || CT.C896, C897 || CT.C897], widget_inspector._Location);
    },
    get C885() {
      return C885 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C886 || CT.C886,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 216,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C900() {
      return C900 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C901() {
      return C901 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C899() {
      return C899 = dart.constList([C900 || CT.C900, C901 || CT.C901], widget_inspector._Location);
    },
    get C898() {
      return C898 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C899 || CT.C899,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C904() {
      return C904 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C905() {
      return C905 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C903() {
      return C903 = dart.constList([C904 || CT.C904, C905 || CT.C905], widget_inspector._Location);
    },
    get C902() {
      return C902 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C903 || CT.C903,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C908() {
      return C908 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C907() {
      return C907 = dart.constList([C908 || CT.C908], widget_inspector._Location);
    },
    get C906() {
      return C906 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C907 || CT.C907,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C912() {
      return C912 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 293,
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
        [_Location_column]: 19,
        [_Location_line]: 291,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 295,
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
        [_Location_column]: 19,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C916() {
      return C916 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C919() {
      return C919 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C920() {
      return C920 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C918() {
      return C918 = dart.constList([C919 || CT.C919, C920 || CT.C920], widget_inspector._Location);
    },
    get C917() {
      return C917 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C918 || CT.C918,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C923() {
      return C923 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C924() {
      return C924 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C922() {
      return C922 = dart.constList([C923 || CT.C923, C924 || CT.C924], widget_inspector._Location);
    },
    get C921() {
      return C921 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C922 || CT.C922,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C927() {
      return C927 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C928() {
      return C928 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C926() {
      return C926 = dart.constList([C927 || CT.C927, C928 || CT.C928], widget_inspector._Location);
    },
    get C925() {
      return C925 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C926 || CT.C926,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 288,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C931() {
      return C931 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C930() {
      return C930 = dart.constList([C931 || CT.C931], widget_inspector._Location);
    },
    get C929() {
      return C929 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C930 || CT.C930,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 314,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C932() {
      return C932 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 326,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C935() {
      return C935 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C936() {
      return C936 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 330,
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
        [_Location_column]: 28,
        [_Location_line]: 328,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C939() {
      return C939 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 328,
        [_Location_file]: null
      });
    },
    get C938() {
      return C938 = dart.constList([C939 || CT.C939, C940 || CT.C940], widget_inspector._Location);
    },
    get C937() {
      return C937 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C938 || CT.C938,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C943() {
      return C943 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C942() {
      return C942 = dart.constList([C943 || CT.C943], widget_inspector._Location);
    },
    get C941() {
      return C941 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C942 || CT.C942,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 318,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C946() {
      return C946 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C945() {
      return C945 = dart.constList([C946 || CT.C946], widget_inspector._Location);
    },
    get C944() {
      return C944 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C945 || CT.C945,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C949() {
      return C949 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C948() {
      return C948 = dart.constList([C949 || CT.C949], widget_inspector._Location);
    },
    get C947() {
      return C947 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C948 || CT.C948,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C952() {
      return C952 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C953() {
      return C953 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C951() {
      return C951 = dart.constList([C952 || CT.C952, C953 || CT.C953], widget_inspector._Location);
    },
    get C950() {
      return C950 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C951 || CT.C951,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C956() {
      return C956 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C955() {
      return C955 = dart.constList([C956 || CT.C956], widget_inspector._Location);
    },
    get C954() {
      return C954 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C955 || CT.C955,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C959() {
      return C959 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C960() {
      return C960 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C958() {
      return C958 = dart.constList([C959 || CT.C959, C960 || CT.C960], widget_inspector._Location);
    },
    get C957() {
      return C957 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C958 || CT.C958,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C963() {
      return C963 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C962() {
      return C962 = dart.constList([C963 || CT.C963], widget_inspector._Location);
    },
    get C961() {
      return C961 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C962 || CT.C962,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C966() {
      return C966 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C965() {
      return C965 = dart.constList([C966 || CT.C966], widget_inspector._Location);
    },
    get C964() {
      return C964 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C965 || CT.C965,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 364,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C969() {
      return C969 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C970() {
      return C970 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C968() {
      return C968 = dart.constList([C969 || CT.C969, C970 || CT.C970], widget_inspector._Location);
    },
    get C967() {
      return C967 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C968 || CT.C968,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 367,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C973() {
      return C973 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C974() {
      return C974 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C972() {
      return C972 = dart.constList([C973 || CT.C973, C974 || CT.C974], widget_inspector._Location);
    },
    get C971() {
      return C971 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C972 || CT.C972,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C977() {
      return C977 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 364,
        [_Location_file]: null
      });
    },
    get C978() {
      return C978 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C979() {
      return C979 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 366,
        [_Location_file]: null
      });
    },
    get C976() {
      return C976 = dart.constList([C977 || CT.C977, C978 || CT.C978, C979 || CT.C979], widget_inspector._Location);
    },
    get C975() {
      return C975 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C976 || CT.C976,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 363,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C982() {
      return C982 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C983() {
      return C983 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C981() {
      return C981 = dart.constList([C982 || CT.C982, C983 || CT.C983], widget_inspector._Location);
    },
    get C980() {
      return C980 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C981 || CT.C981,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 375,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C986() {
      return C986 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C987() {
      return C987 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 378,
        [_Location_file]: null
      });
    },
    get C985() {
      return C985 = dart.constList([C986 || CT.C986, C987 || CT.C987], widget_inspector._Location);
    },
    get C984() {
      return C984 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C985 || CT.C985,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C990() {
      return C990 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C991() {
      return C991 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C989() {
      return C989 = dart.constList([C990 || CT.C990, C991 || CT.C991], widget_inspector._Location);
    },
    get C988() {
      return C988 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C989 || CT.C989,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 385,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C995() {
      return C995 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C993() {
      return C993 = dart.constList([C994 || CT.C994, C995 || CT.C995], widget_inspector._Location);
    },
    get C992() {
      return C992 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C993 || CT.C993,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 386,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C998() {
      return C998 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C997() {
      return C997 = dart.constList([C998 || CT.C998], widget_inspector._Location);
    },
    get C996() {
      return C996 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C997 || CT.C997,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 397,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1001() {
      return C1001 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C1002() {
      return C1002 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C1003() {
      return C1003 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 397,
        [_Location_file]: null
      });
    },
    get C1000() {
      return C1000 = dart.constList([C1001 || CT.C1001, C1002 || CT.C1002, C1003 || CT.C1003], widget_inspector._Location);
    },
    get C999() {
      return C999 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1000 || CT.C1000,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1006() {
      return C1006 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C1007() {
      return C1007 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C1005() {
      return C1005 = dart.constList([C1006 || CT.C1006, C1007 || CT.C1007], widget_inspector._Location);
    },
    get C1004() {
      return C1004 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1005 || CT.C1005,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 401,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1008() {
      return C1008 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 30
      });
    },
    get C1010() {
      return C1010 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C1009() {
      return C1009 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C774 || CT.C774,
        [Icon_size]: null,
        [Icon_icon]: C1010 || CT.C1010
      });
    },
    get C1013() {
      return C1013 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 406,
        [_Location_file]: null
      });
    },
    get C1014() {
      return C1014 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 21,
        [_Location_line]: 409,
        [_Location_file]: null
      });
    },
    get C1015() {
      return C1015 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 21,
        [_Location_line]: 410,
        [_Location_file]: null
      });
    },
    get C1016() {
      return C1016 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C1012() {
      return C1012 = dart.constList([C1013 || CT.C1013, C1014 || CT.C1014, C1015 || CT.C1015, C1016 || CT.C1016], widget_inspector._Location);
    },
    get C1011() {
      return C1011 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1012 || CT.C1012,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 405,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1019() {
      return C1019 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C1020() {
      return C1020 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 405,
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
        [_Location_column]: 15,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1023() {
      return C1023 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 428,
        [_Location_file]: null
      });
    },
    get C1024() {
      return C1024 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 428,
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
        [_Location_column]: 15,
        [_Location_line]: 428,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1027() {
      return C1027 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 431,
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
        [_Location_column]: 15,
        [_Location_line]: 430,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1030() {
      return C1030 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 451,
        [_Location_file]: null
      });
    },
    get C1031() {
      return C1031 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 452,
        [_Location_file]: null
      });
    },
    get C1029() {
      return C1029 = dart.constList([C1030 || CT.C1030, C1031 || CT.C1031], widget_inspector._Location);
    },
    get C1028() {
      return C1028 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1029 || CT.C1029,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 450,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1034() {
      return C1034 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 450,
        [_Location_file]: null
      });
    },
    get C1033() {
      return C1033 = dart.constList([C1034 || CT.C1034], widget_inspector._Location);
    },
    get C1032() {
      return C1032 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1033 || CT.C1033,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 449,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1037() {
      return C1037 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C1038() {
      return C1038 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 448,
        [_Location_file]: null
      });
    },
    get C1036() {
      return C1036 = dart.constList([C1037 || CT.C1037, C1038 || CT.C1038], widget_inspector._Location);
    },
    get C1035() {
      return C1035 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1036 || CT.C1036,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 446,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1041() {
      return C1041 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C1042() {
      return C1042 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C1043() {
      return C1043 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C1044() {
      return C1044 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C1045() {
      return C1045 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C1046() {
      return C1046 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C1047() {
      return C1047 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 446,
        [_Location_file]: null
      });
    },
    get C1048() {
      return C1048 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 461,
        [_Location_file]: null
      });
    },
    get C1049() {
      return C1049 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 462,
        [_Location_file]: null
      });
    },
    get C1050() {
      return C1050 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 463,
        [_Location_file]: null
      });
    },
    get C1051() {
      return C1051 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C1040() {
      return C1040 = dart.constList([C1041 || CT.C1041, C1042 || CT.C1042, C1043 || CT.C1043, C1044 || CT.C1044, C1045 || CT.C1045, C1046 || CT.C1046, C1047 || CT.C1047, C1048 || CT.C1048, C1049 || CT.C1049, C1050 || CT.C1050, C1051 || CT.C1051], widget_inspector._Location);
    },
    get C1039() {
      return C1039 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1040 || CT.C1040,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 438,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1054() {
      return C1054 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C1055() {
      return C1055 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C1053() {
      return C1053 = dart.constList([C1054 || CT.C1054, C1055 || CT.C1055], widget_inspector._Location);
    },
    get C1052() {
      return C1052 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1053 || CT.C1053,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 436,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1058() {
      return C1058 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C1059() {
      return C1059 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C1057() {
      return C1057 = dart.constList([C1058 || CT.C1058, C1059 || CT.C1059], widget_inspector._Location);
    },
    get C1056() {
      return C1056 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1057 || CT.C1057,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1062() {
      return C1062 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C1061() {
      return C1061 = dart.constList([C1062 || CT.C1062], widget_inspector._Location);
    },
    get C1060() {
      return C1060 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1061 || CT.C1061,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 469,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1065() {
      return C1065 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C1064() {
      return C1064 = dart.constList([C1065 || CT.C1065], widget_inspector._Location);
    },
    get C1063() {
      return C1063 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1064 || CT.C1064,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1068() {
      return C1068 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 373,
        [_Location_file]: null
      });
    },
    get C1067() {
      return C1067 = dart.constList([C1068 || CT.C1068], widget_inspector._Location);
    },
    get C1066() {
      return C1066 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1067 || CT.C1067,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 372,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1071() {
      return C1071 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C1072() {
      return C1072 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 371,
        [_Location_file]: null
      });
    },
    get C1073() {
      return C1073 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C1070() {
      return C1070 = dart.constList([C1071 || CT.C1071, C1072 || CT.C1072, C1073 || CT.C1073], widget_inspector._Location);
    },
    get C1069() {
      return C1069 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1070 || CT.C1070,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 362,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1076() {
      return C1076 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C1075() {
      return C1075 = dart.constList([C1076 || CT.C1076], widget_inspector._Location);
    },
    get C1074() {
      return C1074 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1075 || CT.C1075,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1079() {
      return C1079 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C1078() {
      return C1078 = dart.constList([C1079 || CT.C1079], widget_inspector._Location);
    },
    get C1077() {
      return C1077 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1078 || CT.C1078,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 493,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1082() {
      return C1082 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C1083() {
      return C1083 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C1081() {
      return C1081 = dart.constList([C1082 || CT.C1082, C1083 || CT.C1083], widget_inspector._Location);
    },
    get C1080() {
      return C1080 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1081 || CT.C1081,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 492,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1084() {
      return C1084 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 50,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 50
      });
    },
    get C1087() {
      return C1087 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 503,
        [_Location_file]: null
      });
    },
    get C1088() {
      return C1088 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 507,
        [_Location_file]: null
      });
    },
    get C1089() {
      return C1089 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C1090() {
      return C1090 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C1086() {
      return C1086 = dart.constList([C1087 || CT.C1087, C1088 || CT.C1088, C1089 || CT.C1089, C1090 || CT.C1090], widget_inspector._Location);
    },
    get C1085() {
      return C1085 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1086 || CT.C1086,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 502,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1093() {
      return C1093 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C1094() {
      return C1094 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C1092() {
      return C1092 = dart.constList([C1093 || CT.C1093, C1094 || CT.C1094], widget_inspector._Location);
    },
    get C1091() {
      return C1091 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1092 || CT.C1092,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 500,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1097() {
      return C1097 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C1096() {
      return C1096 = dart.constList([C1097 || CT.C1097], widget_inspector._Location);
    },
    get C1095() {
      return C1095 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1096 || CT.C1096,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 528,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1100() {
      return C1100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 534,
        [_Location_file]: null
      });
    },
    get C1101() {
      return C1101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C1102() {
      return C1102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 540,
        [_Location_file]: null
      });
    },
    get C1099() {
      return C1099 = dart.constList([C1100 || CT.C1100, C1101 || CT.C1101, C1102 || CT.C1102], widget_inspector._Location);
    },
    get C1098() {
      return C1098 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1099 || CT.C1099,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 533,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1105() {
      return C1105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 532,
        [_Location_file]: null
      });
    },
    get C1106() {
      return C1106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C1104() {
      return C1104 = dart.constList([C1105 || CT.C1105, C1106 || CT.C1106], widget_inspector._Location);
    },
    get C1103() {
      return C1103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1104 || CT.C1104,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 531,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1109() {
      return C1109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 560,
        [_Location_file]: null
      });
    },
    get C1108() {
      return C1108 = dart.constList([C1109 || CT.C1109], widget_inspector._Location);
    },
    get C1107() {
      return C1107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1108 || CT.C1108,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 559,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1112() {
      return C1112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 565,
        [_Location_file]: null
      });
    },
    get C1113() {
      return C1113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 570,
        [_Location_file]: null
      });
    },
    get C1114() {
      return C1114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 571,
        [_Location_file]: null
      });
    },
    get C1111() {
      return C1111 = dart.constList([C1112 || CT.C1112, C1113 || CT.C1113, C1114 || CT.C1114], widget_inspector._Location);
    },
    get C1110() {
      return C1110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1111 || CT.C1111,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 564,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1117() {
      return C1117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 563,
        [_Location_file]: null
      });
    },
    get C1118() {
      return C1118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 564,
        [_Location_file]: null
      });
    },
    get C1116() {
      return C1116 = dart.constList([C1117 || CT.C1117, C1118 || CT.C1118], widget_inspector._Location);
    },
    get C1115() {
      return C1115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1116 || CT.C1116,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 562,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1121() {
      return C1121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 591,
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
        [_Location_column]: 13,
        [_Location_line]: 590,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1124() {
      return C1124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 596,
        [_Location_file]: null
      });
    },
    get C1125() {
      return C1125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 600,
        [_Location_file]: null
      });
    },
    get C1126() {
      return C1126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 601,
        [_Location_file]: null
      });
    },
    get C1127() {
      return C1127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 602,
        [_Location_file]: null
      });
    },
    get C1128() {
      return C1128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 604,
        [_Location_file]: null
      });
    },
    get C1123() {
      return C1123 = dart.constList([C1124 || CT.C1124, C1125 || CT.C1125, C1126 || CT.C1126, C1127 || CT.C1127, C1128 || CT.C1128], widget_inspector._Location);
    },
    get C1122() {
      return C1122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1123 || CT.C1123,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 595,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1131() {
      return C1131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 594,
        [_Location_file]: null
      });
    },
    get C1132() {
      return C1132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 595,
        [_Location_file]: null
      });
    },
    get C1130() {
      return C1130 = dart.constList([C1131 || CT.C1131, C1132 || CT.C1132], widget_inspector._Location);
    },
    get C1129() {
      return C1129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1130 || CT.C1130,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 593,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1135() {
      return C1135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C1134() {
      return C1134 = dart.constList([C1135 || CT.C1135], widget_inspector._Location);
    },
    get C1133() {
      return C1133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1134 || CT.C1134,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 622,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1138() {
      return C1138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 628,
        [_Location_file]: null
      });
    },
    get C1139() {
      return C1139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 632,
        [_Location_file]: null
      });
    },
    get C1140() {
      return C1140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 633,
        [_Location_file]: null
      });
    },
    get C1141() {
      return C1141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 634,
        [_Location_file]: null
      });
    },
    get C1137() {
      return C1137 = dart.constList([C1138 || CT.C1138, C1139 || CT.C1139, C1140 || CT.C1140, C1141 || CT.C1141], widget_inspector._Location);
    },
    get C1136() {
      return C1136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1137 || CT.C1137,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 627,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1144() {
      return C1144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 626,
        [_Location_file]: null
      });
    },
    get C1145() {
      return C1145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C1143() {
      return C1143 = dart.constList([C1144 || CT.C1144, C1145 || CT.C1145], widget_inspector._Location);
    },
    get C1142() {
      return C1142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1143 || CT.C1143,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 625,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1148() {
      return C1148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C1147() {
      return C1147 = dart.constList([C1148 || CT.C1148], widget_inspector._Location);
    },
    get C1146() {
      return C1146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1147 || CT.C1147,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1151() {
      return C1151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 18,
        [_Location_line]: 656,
        [_Location_file]: null
      });
    },
    get C1150() {
      return C1150 = dart.constList([C1151 || CT.C1151], widget_inspector._Location);
    },
    get C1149() {
      return C1149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1150 || CT.C1150,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 656,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1154() {
      return C1154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C1153() {
      return C1153 = dart.constList([C1154 || CT.C1154], widget_inspector._Location);
    },
    get C1152() {
      return C1152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1153 || CT.C1153,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 662,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1157() {
      return C1157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 19,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C1158() {
      return C1158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 661,
        [_Location_file]: null
      });
    },
    get C1159() {
      return C1159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 662,
        [_Location_file]: null
      });
    },
    get C1160() {
      return C1160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 663,
        [_Location_file]: null
      });
    },
    get C1161() {
      return C1161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C1162() {
      return C1162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 19,
        [_Location_line]: 665,
        [_Location_file]: null
      });
    },
    get C1163() {
      return C1163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 19,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C1156() {
      return C1156 = dart.constList([C1157 || CT.C1157, C1158 || CT.C1158, C1159 || CT.C1159, C1160 || CT.C1160, C1161 || CT.C1161, C1162 || CT.C1162, C1163 || CT.C1163], widget_inspector._Location);
    },
    get C1155() {
      return C1155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1156 || CT.C1156,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 659,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1166() {
      return C1166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 658,
        [_Location_file]: null
      });
    },
    get C1167() {
      return C1167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 659,
        [_Location_file]: null
      });
    },
    get C1165() {
      return C1165 = dart.constList([C1166 || CT.C1166, C1167 || CT.C1167], widget_inspector._Location);
    },
    get C1164() {
      return C1164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1165 || CT.C1165,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 657,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1170() {
      return C1170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C1171() {
      return C1171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 499,
        [_Location_file]: null
      });
    },
    get C1169() {
      return C1169 = dart.constList([C1170 || CT.C1170, C1171 || CT.C1171], widget_inspector._Location);
    },
    get C1168() {
      return C1168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1169 || CT.C1169,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 497,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1174() {
      return C1174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C1173() {
      return C1173 = dart.constList([C1174 || CT.C1174], widget_inspector._Location);
    },
    get C1172() {
      return C1172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1173 || CT.C1173,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 496,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    },
    get C1177() {
      return C1177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 491,
        [_Location_file]: null
      });
    },
    get C1178() {
      return C1178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 492,
        [_Location_file]: null
      });
    },
    get C1179() {
      return C1179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C1176() {
      return C1176 = dart.constList([C1177 || CT.C1177, C1178 || CT.C1178, C1179 || CT.C1179], widget_inspector._Location);
    },
    get C1175() {
      return C1175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1176 || CT.C1176,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 490,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/signInScreen.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C2;
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
  let C15;
  let C16;
  let C12;
  let C11;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  let C26;
  let C25;
  let C24;
  $return.Returning = class Returning extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new activeActivities.ActiveActivity.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToActiveActivity())}));
              }, VoidToNull()), child: new basic.Padding.new({padding: C2 || CT.C2, child: new text.Text.new("Returning", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
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
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C46;
  let C45;
  let C50;
  let C49;
  let C48;
  let C53;
  let C52;
  let C51;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C66;
  let C65;
  let C70;
  let C69;
  let C68;
  let C73;
  let C72;
  let C71;
  let C74;
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C90;
  let C91;
  let C88;
  let C87;
  let C94;
  let C95;
  let C96;
  let C93;
  let C92;
  let C99;
  let C98;
  let C97;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C109;
  let C108;
  let C113;
  let C112;
  let C111;
  let C116;
  let C117;
  let C115;
  let C114;
  let C120;
  let C119;
  let C118;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C126;
  let C125;
  let C130;
  let C131;
  let C129;
  let C128;
  let C134;
  let C135;
  let C136;
  let C133;
  let C132;
  activeActivities._ActiveActivity = class _ActiveActivity extends framework.State$(activeActivities.ActiveActivity) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Checked Out Activities", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), body: this.reservation(), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new card.Card.new({child: new list_tile.ListTile.new({title: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), subtitle: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {$creationLocationd_0dea112b090073317d4: C48 || CT.C48}), onTap: dart.fn(() => {
                      dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), content: new text_field.TextField.new({controller: activeActivities._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C58 || CT.C58}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new flat_button.FlatButton.new({child: new text.Text.new("RETURN", {$creationLocationd_0dea112b090073317d4: C65 || CT.C65}), onPressed: dart.fn(() => {
                                navigator.Navigator.of(context).pop(core.Object);
                                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Thanks for returning the item!", {$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), onPressed: dart.fn(() => {
                                          navigator.Navigator.of(context).pop(core.Object);
                                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), BuildContextToHomeView())}));
                                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C75 || CT.C75})]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), BuildContextToAlertDialog())});
                              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C83 || CT.C83})]), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), BuildContextToAlertDialog())});
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: C100 || CT.C100});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").where("uid", {isEqualTo: "AppSignInUserladydilaa@gmail.com"}).getDocuments());
        return itemListDOC.documents;
      });
    }
    testingReservations(itemID, context) {
      return async.async(dart.dynamic, function* testingReservations() {
        dialog.showDialog(dart.dynamic, {context: framework.BuildContext._check(context), builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C111 || CT.C111}), content: new text_field.TextField.new({controller: activeActivities._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C118 || CT.C118}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), new flat_button.FlatButton.new({child: new text.Text.new("RETURN", {$creationLocationd_0dea112b090073317d4: C125 || CT.C125}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C128 || CT.C128})]), $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), BuildContextToAlertDialog())});
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
  let C137;
  let C140;
  let C139;
  let C138;
  let C143;
  let C142;
  let C141;
  let C146;
  let C147;
  let C145;
  let C144;
  let C150;
  let C151;
  let C149;
  let C148;
  let C154;
  let C155;
  let C153;
  let C152;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C157;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C156;
  let C158;
  let C161;
  let C160;
  let C159;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C163;
  let C162;
  homeView.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C137 || CT.C137}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), this.contentBoard(context)]), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144});
    }
    contentBoard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([this.dashBoard(framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152});
    }
    dashBoard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(5.0, 5.0, 5.0, 5.0), height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, decoration: new box_decoration.BoxDecoration.new({borderRadius: C156 || CT.C156}), child: new basic.Column.new({children: JSArrayOfWidget().of([new checkOutB.CheckingOut.new({$creationLocationd_0dea112b090073317d4: C158 || CT.C158})]), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
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
    dashBoard: dart.fnType(container.Container, [framework.BuildContext])
  }));
  dart.setLibraryUri(homeView.HomeView, "package:RentalAdmin/views/homeView.dart");
  let C171;
  let C170;
  let C169;
  let C172;
  let C175;
  let C176;
  let C177;
  let C178;
  let C174;
  let C173;
  let C181;
  let C182;
  let C180;
  let C179;
  let C185;
  let C186;
  let C184;
  let C183;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C194;
  let C195;
  let C196;
  let C192;
  let C191;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C202;
  let C201;
  let C206;
  let C205;
  let C204;
  const sid = dart.privateName(checkOutB, "CheckingOut.sid");
  checkOutB.CheckingOut = class CheckingOut extends framework.StatelessWidget {
    get sid() {
      return this[sid];
    }
    set sid(value) {
      this[sid] = value;
    }
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                core.print("pressed redeem:)");
                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C169 || CT.C169}), content: new text_field.TextField.new({autofocus: true, onChanged: dart.fn(text => {
                        if (text.length === 9) {
                          this.sid = text;
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C172 || CT.C172}), BuildContextToReservationListPage())}));
                          checkOutB._textFieldController.clear();
                        }
                        core.print("First text field: " + dart.str(text));
                      }, StringToNull()), controller: checkOutB._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), $creationLocationd_0dea112b090073317d4: C179 || CT.C179}), BuildContextToAlertDialog())});
              }, VoidToNull()), child: new basic.Padding.new({padding: C2 || CT.C2, child: new text.Text.new("Begin", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C183 || CT.C183}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C197 || CT.C197})]), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204});
    }
  };
  (checkOutB.CheckingOut.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[sid] = "";
    checkOutB.CheckingOut.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = checkOutB.CheckingOut.prototype;
  dart.addTypeTests(checkOutB.CheckingOut);
  dart.setMethodSignature(checkOutB.CheckingOut, () => ({
    __proto__: dart.getMethods(checkOutB.CheckingOut.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(checkOutB.CheckingOut, "package:RentalAdmin/views/inventory/checkOutB.dart");
  dart.setFieldSignature(checkOutB.CheckingOut, () => ({
    __proto__: dart.getFields(checkOutB.CheckingOut.__proto__),
    sid: dart.fieldType(core.String)
  }));
  dart.defineLazy(checkOutB, {
    /*checkOutB._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  ReservationView.ReservationListPage = class ReservationListPage extends framework.StatefulWidget {
    createState() {
      return new ReservationView._ReservationListPage.new();
    }
  };
  (ReservationView.ReservationListPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ReservationView.ReservationListPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ReservationView.ReservationListPage.prototype;
  dart.addTypeTests(ReservationView.ReservationListPage);
  dart.setMethodSignature(ReservationView.ReservationListPage, () => ({
    __proto__: dart.getMethods(ReservationView.ReservationListPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(ReservationView.ReservationListPage, "package:RentalAdmin/views/ReservationView.dart");
  let C209;
  let C208;
  let C207;
  let C212;
  let C211;
  let C210;
  let C215;
  let C216;
  let C214;
  let C213;
  let C219;
  let C220;
  let C218;
  let C217;
  let C223;
  let C224;
  let C222;
  let C221;
  let C225;
  let C228;
  let C229;
  let C227;
  let C226;
  let C232;
  let C233;
  let C231;
  let C230;
  let C236;
  let C237;
  let C235;
  let C234;
  let C238;
  let C241;
  let C242;
  let C240;
  let C239;
  let C245;
  let C246;
  let C244;
  let C243;
  let C249;
  let C250;
  let C248;
  let C247;
  let C253;
  let C254;
  let C255;
  let C252;
  let C251;
  let C258;
  let C259;
  let C257;
  let C256;
  let C262;
  let C263;
  let C261;
  let C260;
  let C266;
  let C265;
  let C264;
  let C269;
  let C268;
  let C267;
  let C272;
  let C271;
  let C270;
  let C275;
  let C276;
  let C277;
  let C274;
  let C273;
  let C280;
  let C279;
  let C278;
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
  let C294;
  let C293;
  let C292;
  let C295;
  let C298;
  let C299;
  let C297;
  let C296;
  let C302;
  let C301;
  let C300;
  let C305;
  let C304;
  let C303;
  let C306;
  let C309;
  let C310;
  let C308;
  let C307;
  let C313;
  let C312;
  let C311;
  let C316;
  let C317;
  let C315;
  let C314;
  let C320;
  let C321;
  let C319;
  let C318;
  let C324;
  let C323;
  let C322;
  let C327;
  let C328;
  let C326;
  let C325;
  let C331;
  let C330;
  let C329;
  let C334;
  let C333;
  let C332;
  let C337;
  let C338;
  let C336;
  let C335;
  let C341;
  let C340;
  let C339;
  let C344;
  let C343;
  let C342;
  ReservationView._ReservationListPage = class _ReservationListPage extends framework.State$(ReservationView.ReservationListPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("User Activities", {$creationLocationd_0dea112b090073317d4: C207 || CT.C207}), backgroundColor: colors.Colors.teal, actions: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 20.0}), child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                  navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C210 || CT.C210}), BuildContextToLocationPage())}));
                }, VoidToNull()), child: new icon.Icon.new(icons.Icons.add_to_queue, {size: 30.0, $creationLocationd_0dea112b090073317d4: C213 || CT.C213}), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), $creationLocationd_0dea112b090073317d4: C221 || CT.C221}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 20.0}), child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                  navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new activeActivities.ActiveActivity.new({$creationLocationd_0dea112b090073317d4: C225 || CT.C225}), BuildContextToActiveActivity())}));
                }, VoidToNull()), child: new icon.Icon.new(icons.Icons.history, {size: 30.0, $creationLocationd_0dea112b090073317d4: C226 || CT.C226}), $creationLocationd_0dea112b090073317d4: C230 || CT.C230}), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 20.0}), child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                  navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C238 || CT.C238}), BuildContextToHomeView())}));
                }, VoidToNull()), child: new icon.Icon.new(icons.Icons.home, {size: 30.0, $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), $creationLocationd_0dea112b090073317d4: C247 || CT.C247})]), $creationLocationd_0dea112b090073317d4: C251 || CT.C251}), body: this.reservation(), $creationLocationd_0dea112b090073317d4: C256 || CT.C256});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C260 || CT.C260}), $creationLocationd_0dea112b090073317d4: C264 || CT.C264});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new card.Card.new({child: new list_tile.ListTile.new({title: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C267 || CT.C267}), subtitle: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {$creationLocationd_0dea112b090073317d4: C270 || CT.C270}), onTap: dart.fn(() => {
                      this.navigateToDetail(cloud_firestore.DocumentSnapshot._check(dart.dsend(snapshot.data, '_get', [index])));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C273 || CT.C273}), $creationLocationd_0dea112b090073317d4: C278 || CT.C278}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: C281 || CT.C281});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C285 || CT.C285}), $creationLocationd_0dea112b090073317d4: C289 || CT.C289});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").where("uid", {isEqualTo: "AppSignInUserladydilaa@gmail.com"}).where("status", {whereIn: ["Reserved", "Picked Up"]}).getDocuments());
        return itemListDOC.documents;
      });
    }
    navigateToDetail(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new resCell.reservationCell.new({passedFirestoreData: indexedData, $creationLocationd_0dea112b090073317d4: C292 || CT.C292}), BuildContextToreservationCell())}));
    }
    customCell(index, snapshot) {
      return new material.Material.new({child: new ink_well.InkWell.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey, blurRadius: 10.0})])}), child: new card.Card.new({child: new container.Container.new({child: new basic.Padding.new({padding: C295 || CT.C295, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 15.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C296 || CT.C296})]), $creationLocationd_0dea112b090073317d4: C300 || CT.C300})]), $creationLocationd_0dea112b090073317d4: C303 || CT.C303}), new spacer.Spacer.new({$creationLocationd_0dea112b090073317d4: C306 || CT.C306}), new basic.Stack.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["startTime"])), {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.teal.shade900}), $creationLocationd_0dea112b090073317d4: C307 || CT.C307})]), $creationLocationd_0dea112b090073317d4: C311 || CT.C311})]), $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {style: new text_style.TextStyle.new({fontSize: 10.0, color: colors.Colors.teal}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318})]), $creationLocationd_0dea112b090073317d4: C322 || CT.C322}), $creationLocationd_0dea112b090073317d4: C325 || CT.C325}), $creationLocationd_0dea112b090073317d4: C329 || CT.C329}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), $creationLocationd_0dea112b090073317d4: C335 || CT.C335}), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C342 || CT.C342});
    }
  };
  (ReservationView._ReservationListPage.new = function() {
    ReservationView._ReservationListPage.__proto__.new.call(this);
    ;
  }).prototype = ReservationView._ReservationListPage.prototype;
  dart.addTypeTests(ReservationView._ReservationListPage);
  dart.setMethodSignature(ReservationView._ReservationListPage, () => ({
    __proto__: dart.getMethods(ReservationView._ReservationListPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    reservation: dart.fnType(container.Container, []),
    getFirestoreData: dart.fnType(async.Future, []),
    navigateToDetail: dart.fnType(dart.dynamic, [cloud_firestore.DocumentSnapshot]),
    customCell: dart.fnType(framework.Widget, [core.int, async$.AsyncSnapshot])
  }));
  dart.setLibraryUri(ReservationView._ReservationListPage, "package:RentalAdmin/views/ReservationView.dart");
  dart.defineLazy(ReservationView, {
    /*ReservationView._textFieldController*/get _textFieldController() {
      return new editable_text.TextEditingController.new();
    },
    set _textFieldController(_) {}
  });
  let C347;
  let C346;
  let C345;
  let C350;
  let C349;
  let C348;
  InventoryView.FirstTab = class FirstTab extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C345 || CT.C345}), $creationLocationd_0dea112b090073317d4: C348 || CT.C348});
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
  let C353;
  let C352;
  let C351;
  let C356;
  let C357;
  let C355;
  let C354;
  let C358;
  let C361;
  let C362;
  let C360;
  let C359;
  InventoryView._LocationPageState = class _LocationPageState extends framework.State$(InventoryView.LocationPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C351 || CT.C351}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C354 || CT.C354}), body: new list_page.ListPage.new({$creationLocationd_0dea112b090073317d4: C358 || CT.C358}), $creationLocationd_0dea112b090073317d4: C359 || CT.C359});
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
  let C365;
  let C364;
  let C363;
  let C368;
  let C367;
  let C366;
  let C371;
  let C370;
  let C369;
  let C374;
  let C375;
  let C373;
  let C372;
  let C378;
  let C379;
  let C377;
  let C376;
  let C382;
  let C381;
  let C380;
  let C383;
  let C384;
  let C387;
  let C388;
  let C386;
  let C385;
  let C391;
  let C390;
  let C389;
  let C392;
  let C395;
  let C394;
  let C393;
  let C398;
  let C397;
  let C396;
  let C401;
  let C402;
  let C400;
  let C399;
  let C405;
  let C406;
  let C404;
  let C403;
  let C409;
  let C408;
  let C407;
  let C412;
  let C413;
  let C414;
  let C411;
  let C410;
  let C417;
  let C418;
  let C416;
  let C415;
  let C421;
  let C420;
  let C419;
  list_page._ListPageState = class _ListPageState extends framework.State$(list_page.ListPage) {
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let arrayOfLocationDocuments = (yield firestore.collection("locations").getDocuments());
        return arrayOfLocationDocuments.documents;
      });
    }
    navigateToCategory(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new category_page.CategoryPage.new({passedFirestoreData: indexedData, $creationLocationd_0dea112b090073317d4: C363 || CT.C363}), BuildContextToCategoryPage())}));
    }
    build(context) {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {$creationLocationd_0dea112b090073317d4: C366 || CT.C366}), $creationLocationd_0dea112b090073317d4: C369 || CT.C369});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => this.customCard(index, snapshot), BuildContextAndintToWidget()), $creationLocationd_0dea112b090073317d4: C372 || CT.C372});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C376 || CT.C376}), $creationLocationd_0dea112b090073317d4: C380 || CT.C380});
    }
    customCard(index, snapshot) {
      return new material.Material.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => this.navigateToCategory(cloud_firestore.DocumentSnapshot._check(dart.dsend(snapshot.data, '_get', [index]))), VoidTodynamic()), child: new container.Container.new({padding: C383 || CT.C383, height: 200.0, child: new card.Card.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["imageURL"]))), fit: box_fit.BoxFit.fill})}), child: new basic.Padding.new({padding: C384 || CT.C384, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 1.0, fontWeight: ui.FontWeight.bold, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C385 || CT.C385})]), $creationLocationd_0dea112b090073317d4: C389 || CT.C389}), new spacer.Spacer.new({$creationLocationd_0dea112b090073317d4: C392 || CT.C392})]), $creationLocationd_0dea112b090073317d4: C393 || CT.C393})]), $creationLocationd_0dea112b090073317d4: C396 || CT.C396}), $creationLocationd_0dea112b090073317d4: C399 || CT.C399}), $creationLocationd_0dea112b090073317d4: C403 || CT.C403}), $creationLocationd_0dea112b090073317d4: C407 || CT.C407}), $creationLocationd_0dea112b090073317d4: C410 || CT.C410}), $creationLocationd_0dea112b090073317d4: C415 || CT.C415}), $creationLocationd_0dea112b090073317d4: C419 || CT.C419});
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
  let C424;
  let C423;
  let C422;
  let C427;
  let C426;
  let C425;
  let C430;
  let C431;
  let C429;
  let C428;
  let C434;
  let C433;
  let C432;
  let C437;
  let C436;
  let C435;
  let C440;
  let C441;
  let C439;
  let C438;
  let C444;
  let C445;
  let C446;
  let C447;
  let C448;
  let C443;
  let C442;
  let C451;
  let C452;
  let C450;
  let C449;
  let C455;
  let C454;
  let C453;
  let C458;
  let C459;
  let C460;
  let C461;
  let C457;
  let C456;
  let C464;
  let C465;
  let C463;
  let C462;
  category_page._CategoryPageState = class _CategoryPageState extends framework.State$(category_page.CategoryPage) {
    navigateToItem(categorySelected) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new itemGrid.ItemGridPage.new({category: categorySelected, $creationLocationd_0dea112b090073317d4: C422 || CT.C422}), BuildContextToItemGridPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selection Page", {$creationLocationd_0dea112b090073317d4: C425 || CT.C425}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C428 || CT.C428}), body: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(5.0), child: new scroll_view.GridView.count({crossAxisCount: 5, childAspectRatio: 1.0, mainAxisSpacing: 4.0, crossAxisSpacing: 4.0, children: ListOfWidget()._check(dart.dsend(dart.dgsend(this.widget.passedFirestoreData.data[$_get]("categories"), [framework.Widget], 'map', [dart.fn(categoryInfo => new gesture_detector.GestureDetector.new({child: new grid_tile.GridTile.new({child: new custom_gridcell.CustomCell.new(categoryInfo, {$creationLocationd_0dea112b090073317d4: C432 || CT.C432}), $creationLocationd_0dea112b090073317d4: C435 || CT.C435}), onTap: dart.fn(() => {
                        this.navigateToItem(core.String._check(dart.dsend(categoryInfo, '_get', ["name"])));
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C438 || CT.C438}), dynamicToGestureDetector())]), 'toList', [])), $creationLocationd_0dea112b090073317d4: C442 || CT.C442}), $creationLocationd_0dea112b090073317d4: C449 || CT.C449}), $creationLocationd_0dea112b090073317d4: C453 || CT.C453})]), $creationLocationd_0dea112b090073317d4: C456 || CT.C456}), $creationLocationd_0dea112b090073317d4: C462 || CT.C462});
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
  let C468;
  let C467;
  let C466;
  let C471;
  let C470;
  let C469;
  let C474;
  let C475;
  let C473;
  let C472;
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
  let C476;
  let C479;
  let C480;
  let C478;
  let C477;
  let C483;
  let C484;
  let C482;
  let C481;
  let C487;
  let C488;
  let C489;
  let C486;
  let C485;
  let C492;
  let C493;
  let C491;
  let C490;
  let C496;
  let C497;
  let C495;
  let C494;
  itemGrid._ItemGridPageState = class _ItemGridPageState extends framework.State$(itemGrid.ItemGridPage) {
    navigateToDetail(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ItemDetails.DetailPage.new({itemSelected: indexedData, $creationLocationd_0dea112b090073317d4: C466 || CT.C466}), BuildContextToDetailPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selected: " + dart.str(this.widget.category), {$creationLocationd_0dea112b090073317d4: C469 || CT.C469}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C472 || CT.C472}), body: new (StreamBuilderOfQuerySnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").where("category", {isEqualTo: this.widget.category}).snapshots(), builder: dart.fn((context, snapshot) => {
            if (!dart.test(snapshot.hasData)) return C476 || CT.C476;
            return new scroll_view.GridView.builder({itemCount: core.int._check(dart.dload(dart.dload(snapshot.data, 'documents'), 'length')), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 5}), itemBuilder: dart.fn((context, index) => new ink_well.InkWell.new({child: new itemGrid.CustommCell.new(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])), dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["imageURL"])), {$creationLocationd_0dea112b090073317d4: C477 || CT.C477}), onTap: dart.fn(() => {
                  core.print(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])));
                  this.navigateToDetail(cloud_firestore.DocumentSnapshot._check(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index])));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C481 || CT.C481}), BuildContextAndintToInkWell()), $creationLocationd_0dea112b090073317d4: C485 || CT.C485});
          }, BuildContextAndAsyncSnapshotToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C490 || CT.C490}), $creationLocationd_0dea112b090073317d4: C494 || CT.C494});
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
  let C500;
  let C499;
  let C498;
  let C503;
  let C504;
  let C502;
  let C501;
  let C507;
  let C506;
  let C505;
  let C510;
  let C511;
  let C512;
  let C513;
  let C514;
  let C509;
  let C508;
  let C517;
  let C518;
  let C516;
  let C515;
  let C521;
  let C522;
  let C523;
  let C524;
  let C520;
  let C519;
  let C527;
  let C528;
  let C526;
  let C525;
  let C531;
  let C532;
  let C530;
  let C529;
  let C535;
  let C536;
  let C537;
  let C534;
  let C533;
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
      return new card.Card.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), color: colors.Colors.white, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new container.Container.new({alignment: alignment.Alignment.center, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(10.0), child: new image.Image.network(this.url, {$creationLocationd_0dea112b090073317d4: C498 || CT.C498}), $creationLocationd_0dea112b090073317d4: C501 || CT.C501}), $creationLocationd_0dea112b090073317d4: C505 || CT.C505}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new text.Text.new(this.name, {maxLines: 1, softWrap: true, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 12.0, fontWeight: ui.FontWeight.w800}), $creationLocationd_0dea112b090073317d4: C508 || CT.C508}), $creationLocationd_0dea112b090073317d4: C515 || CT.C515})]), $creationLocationd_0dea112b090073317d4: C519 || CT.C519}), $creationLocationd_0dea112b090073317d4: C525 || CT.C525}), $creationLocationd_0dea112b090073317d4: C529 || CT.C529}), $creationLocationd_0dea112b090073317d4: C533 || CT.C533});
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
  let C540;
  let C541;
  let C539;
  let C538;
  let C544;
  let C545;
  let C546;
  let C543;
  let C542;
  let C549;
  let C550;
  let C551;
  let C548;
  let C547;
  let C554;
  let C555;
  let C556;
  let C557;
  let C553;
  let C552;
  let C560;
  let C561;
  let C559;
  let C558;
  let C564;
  let C565;
  let C563;
  let C562;
  let C568;
  let C569;
  let C567;
  let C566;
  let C572;
  let C573;
  let C571;
  let C570;
  let C576;
  let C575;
  let C574;
  let C579;
  let C578;
  let C577;
  let C582;
  let C581;
  let C580;
  let C585;
  let C586;
  let C587;
  let C588;
  let C589;
  let C584;
  let C583;
  let C592;
  let C591;
  let C590;
  let C595;
  let C596;
  let C594;
  let C593;
  let C599;
  let C598;
  let C597;
  let C602;
  let C601;
  let C600;
  let C605;
  let C606;
  let C607;
  let C604;
  let C603;
  let C608;
  ItemDetails._DetailPage = class _DetailPage extends framework.State$(ItemDetails.DetailPage) {
    reserveButton() {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 16.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 5, child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            core.print("button pressed! (reserve)");
            this.testingReservations(core.String._check(dart.dload(this.widget.itemSelected, 'documentID')));
          }, VoidToNull()), child: new text.Text.new("Check Out", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C538 || CT.C538}), color: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C542 || CT.C542}), $creationLocationd_0dea112b090073317d4: C547 || CT.C547});
    }
    top() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["imageURL"])))})}), $creationLocationd_0dea112b090073317d4: C552 || CT.C552});
    }
    descriptionText() {
      return new text.Text.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C558 || CT.C558});
    }
    amount() {
      return new container.Container.new({child: new basic.Align.new({alignment: alignment.Alignment.center, child: new (StreamBuilderOfDocumentSnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").document(core.String._check(dart.dload(this.widget.itemSelected, 'documentID'))).snapshots(), builder: dart.fn((context, snapshot) => {
              if (!dart.test(snapshot.hasData)) return C476 || CT.C476;
              return new text.Text.new("Instock Amount: " + dart.str(dart.dsend(snapshot.data, '_get', ["# of items"])), {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.green, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C562 || CT.C562});
            }, BuildContextAndAsyncSnapshotToText()), $creationLocationd_0dea112b090073317d4: C566 || CT.C566}), $creationLocationd_0dea112b090073317d4: C570 || CT.C570}), $creationLocationd_0dea112b090073317d4: C574 || CT.C574});
    }
    bottom() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, padding: new edge_insets.EdgeInsets.fromLTRB(30.0, 5.0, 30.0, 30.0), child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([this.descriptionText(), this.amount(), this.reserveButton()]), $creationLocationd_0dea112b090073317d4: C577 || CT.C577}), $creationLocationd_0dea112b090073317d4: C580 || CT.C580}), $creationLocationd_0dea112b090073317d4: C583 || CT.C583});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(dart.str(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C590 || CT.C590}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C593 || CT.C593}), backgroundColor: colors.Colors.blueGrey, body: new scaffold.Scaffold.new({body: new basic.Row.new({children: JSArrayOfWidget().of([this.top(), this.bottom()]), $creationLocationd_0dea112b090073317d4: C597 || CT.C597}), $creationLocationd_0dea112b090073317d4: C600 || CT.C600}), $creationLocationd_0dea112b090073317d4: C603 || CT.C603});
    }
    testingReservations(itemID) {
      return async.async(dart.dynamic, (function* testingReservations() {
        core.print(itemID);
        let now = new core.DateTime.now();
        let time = new intl.DateFormat.new("yyyy-MM-dd hh:mm:ss").format(now);
        let pickUpBefore = now.add(new core.Duration.new({minutes: 10}));
        this.uploadData(itemID, "AppSignInUserladydilaa@gmail.com", time);
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
        let userID = "AppSignInUserladydilaa@gmail.com";
        yield databaseReference.collection("reservation").document().setData(new (IdentityMapOfString$dynamic()).from(["imageURL", imageURL, "name", itemName, "uid", uid, "item", itemID, "userID", userID, "amount", "1", "startTime", dateTime, "status", "Picked Up", "endTime", "TBD"]));
        navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C608 || CT.C608}), BuildContextToReservationListPage())}));
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
  const passedFirestoreData$0 = dart.privateName(resCell, "reservationCell.passedFirestoreData");
  resCell.reservationCell = class reservationCell extends framework.StatefulWidget {
    get passedFirestoreData() {
      return this[passedFirestoreData$0];
    }
    set passedFirestoreData(value) {
      super.passedFirestoreData = value;
    }
    createState() {
      return new resCell._reservationCell.new();
    }
  };
  (resCell.reservationCell.new = function(opts) {
    let passedFirestoreData = opts && 'passedFirestoreData' in opts ? opts.passedFirestoreData : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[passedFirestoreData$0] = passedFirestoreData;
    resCell.reservationCell.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = resCell.reservationCell.prototype;
  dart.addTypeTests(resCell.reservationCell);
  dart.setMethodSignature(resCell.reservationCell, () => ({
    __proto__: dart.getMethods(resCell.reservationCell.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(resCell.reservationCell, "package:RentalAdmin/widgets/resCell.dart");
  dart.setFieldSignature(resCell.reservationCell, () => ({
    __proto__: dart.getFields(resCell.reservationCell.__proto__),
    passedFirestoreData: dart.finalFieldType(cloud_firestore.DocumentSnapshot)
  }));
  let C609;
  let C610;
  let C611;
  let C614;
  let C613;
  let C612;
  let C617;
  let C618;
  let C616;
  let C615;
  let C621;
  let C620;
  let C619;
  let C624;
  let C623;
  let C622;
  let C627;
  let C626;
  let C625;
  let C630;
  let C629;
  let C628;
  let C633;
  let C632;
  let C631;
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
  let C647;
  let C646;
  let C651;
  let C650;
  let C649;
  let C654;
  let C655;
  let C653;
  let C652;
  let C658;
  let C659;
  let C657;
  let C656;
  let C662;
  let C663;
  let C664;
  let C665;
  let C666;
  let C667;
  let C668;
  let C661;
  let C660;
  let C671;
  let C672;
  let C673;
  let C670;
  let C669;
  let C676;
  let C675;
  let C674;
  let C677;
  let C680;
  let C681;
  let C679;
  let C678;
  let C684;
  let C685;
  let C683;
  let C682;
  let C688;
  let C689;
  let C690;
  let C691;
  let C692;
  let C693;
  let C694;
  let C687;
  let C686;
  let C697;
  let C698;
  let C699;
  let C696;
  let C695;
  let C702;
  let C703;
  let C701;
  let C700;
  let C706;
  let C707;
  let C705;
  let C704;
  let C710;
  let C711;
  let C709;
  let C708;
  resCell._reservationCell = class _reservationCell extends framework.State$(resCell.reservationCell) {
    pickedUp() {
      return async.async(dart.dynamic, (function* pickedUp() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).updateData(new (IdentityMapOfString$dynamic()).from(["status", "Picked Up"])).catchError(dart.fn(error => core.print(error), dynamicTovoid()));
        navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C609 || CT.C609}), BuildContextToReservationListPage())}));
      }).bind(this));
    }
    returned() {
      return async.async(dart.dynamic, (function* returned() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).updateData(new (IdentityMapOfString$dynamic()).from(["status", "Returned"])).catchError(dart.fn(error => core.print(error), dynamicTovoid()));
        navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C610 || CT.C610}), BuildContextToReservationListPage())}));
      }).bind(this));
    }
    cancelReservation() {
      return async.async(dart.dynamic, (function* cancelReservation() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).delete().catchError(dart.fn(error => core.print(error), dynamicTovoid()));
        navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C611 || CT.C611}), BuildContextToReservationListPage())}));
      }).bind(this));
    }
    build(context) {
      if (dart.equals(this.widget.passedFirestoreData._get("status"), "Reserved")) {
        resCell.action = "Pick Up";
      } else if (dart.equals(this.widget.passedFirestoreData._get("status"), "Picked Up")) {
        resCell.action = "Return";
      }
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.teal, title: new text.Text.new("Activity Details", {$creationLocationd_0dea112b090073317d4: C612 || CT.C612}), $creationLocationd_0dea112b090073317d4: C615 || CT.C615}), body: new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 20.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C619 || CT.C619}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- item name: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("name")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C622 || CT.C622}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C625 || CT.C625}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- start time: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("startTime")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C628 || CT.C628}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C631 || CT.C631}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- end time: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("endTime")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C634 || CT.C634}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C637 || CT.C637}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- quantity: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("amount")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C640 || CT.C640}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C643 || CT.C643}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- item status: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("status")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C646 || CT.C646}), new basic.SizedBox.new({height: 50.0, $creationLocationd_0dea112b090073317d4: C649 || CT.C649}), new basic.SizedBox.new({height: 50.0, width: 1 / 0, child: new raised_button._RaisedButtonWithIcon.new({color: colors.Colors.teal, textColor: colors.Colors.white, elevation: 2.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(40.0)}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    if (dart.equals(this.widget.passedFirestoreData._get("status"), "Reserved")) {
                      this.pickedUp();
                    } else if (dart.equals(this.widget.passedFirestoreData._get("status"), "Picked Up")) {
                      this.returned();
                    }
                    navigator.Navigator.pop(core.Object, context);
                  }).bind(this)), VoidToFutureOfNull()), icon: new icon.Icon.new(icons.Icons.insert_emoticon, {size: 30.0, $creationLocationd_0dea112b090073317d4: C652 || CT.C652}), label: new text.Text.new(resCell.action, {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C656 || CT.C656}), $creationLocationd_0dea112b090073317d4: C660 || CT.C660}), $creationLocationd_0dea112b090073317d4: C669 || CT.C669}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C674 || CT.C674}), new basic.SizedBox.new({height: 50.0, width: 1 / 0, child: new raised_button._RaisedButtonWithIcon.new({color: colors.Colors.teal, textColor: colors.Colors.white, elevation: 2.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(40.0)}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    this.cancelReservation();
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ReservationView.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C677 || CT.C677}), BuildContextToReservationListPage())}));
                    navigator.Navigator.pop(core.Object, context);
                  }).bind(this)), VoidToFutureOfNull()), icon: new icon.Icon.new(icons.Icons.cancel, {size: 30.0, $creationLocationd_0dea112b090073317d4: C678 || CT.C678}), label: new text.Text.new("Cancel", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C682 || CT.C682}), $creationLocationd_0dea112b090073317d4: C686 || CT.C686}), $creationLocationd_0dea112b090073317d4: C695 || CT.C695})]), $creationLocationd_0dea112b090073317d4: C700 || CT.C700}), $creationLocationd_0dea112b090073317d4: C704 || CT.C704}), $creationLocationd_0dea112b090073317d4: C708 || CT.C708});
    }
  };
  (resCell._reservationCell.new = function() {
    resCell._reservationCell.__proto__.new.call(this);
    ;
  }).prototype = resCell._reservationCell.prototype;
  dart.addTypeTests(resCell._reservationCell);
  dart.setMethodSignature(resCell._reservationCell, () => ({
    __proto__: dart.getMethods(resCell._reservationCell.__proto__),
    pickedUp: dart.fnType(async.Future, []),
    returned: dart.fnType(async.Future, []),
    cancelReservation: dart.fnType(async.Future, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(resCell._reservationCell, "package:RentalAdmin/widgets/resCell.dart");
  dart.defineLazy(resCell, {
    /*resCell.action*/get action() {
      return "Pick Up";
    },
    set action(_) {}
  });
  let C714;
  let C715;
  let C713;
  let C712;
  let C716;
  let C719;
  let C720;
  let C718;
  let C717;
  let C723;
  let C724;
  let C725;
  let C726;
  let C722;
  let C721;
  let C729;
  let C728;
  let C727;
  let C732;
  let C731;
  let C730;
  let C735;
  let C736;
  let C734;
  let C733;
  let C739;
  let C740;
  let C741;
  let C742;
  let C738;
  let C737;
  navigation.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0), color: colors.Colors.teal, height: 80.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new("Rental Manager Administrator", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, color: colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C712 || CT.C712}), new basic.Row.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({side: new borders.BorderSide.new({color: colors.Colors.white})}), onPressed: dart.fn(() => {
                    core.print("Pressed Support button!!");
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.signInScreen.new({$creationLocationd_0dea112b090073317d4: C716 || CT.C716}), BuildContextTosignInScreen())}));
                  }, VoidToNull()), child: new text.Text.new("Admin Login", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C717 || CT.C717}), $creationLocationd_0dea112b090073317d4: C721 || CT.C721}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C727 || CT.C727})]), $creationLocationd_0dea112b090073317d4: C730 || CT.C730})]), $creationLocationd_0dea112b090073317d4: C733 || CT.C733}), $creationLocationd_0dea112b090073317d4: C737 || CT.C737});
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
  let C743;
  const title$0 = dart.privateName(navigation, "_NavigationBar.title");
  navigation._NavigationBar = class _NavigationBar extends framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C743 || CT.C743});
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
  dart.setLibraryUri(signInScreen.signInScreen, "package:RentalAdmin/views/signInScreen.dart");
  const _Accountvalidate = dart.privateName(signInScreen, "_Accountvalidate");
  const _contactText = dart.privateName(signInScreen, "_contactText");
  const _currentUser = dart.privateName(signInScreen, "_currentUser");
  const _googleSignIn = dart.privateName(signInScreen, "_googleSignIn");
  const _handleSignIn = dart.privateName(signInScreen, "_handleSignIn");
  let C746;
  let C747;
  let C745;
  let C744;
  let C750;
  let C751;
  let C749;
  let C748;
  let C754;
  let C755;
  let C753;
  let C752;
  let C758;
  let C759;
  let C757;
  let C756;
  let C762;
  let C761;
  let C760;
  let C765;
  let C766;
  let C767;
  let C764;
  let C763;
  let C770;
  let C771;
  let C769;
  let C768;
  let C772;
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color_value = dart.privateName(ui, "Color.value");
  let C774;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C775;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C773;
  let C778;
  let C779;
  let C780;
  let C781;
  let C777;
  let C776;
  let C784;
  let C785;
  let C783;
  let C782;
  let C788;
  let C789;
  let C787;
  let C786;
  let C791;
  let C790;
  let C794;
  let C795;
  let C796;
  let C797;
  let C793;
  let C792;
  let C800;
  let C801;
  let C799;
  let C798;
  let C804;
  let C803;
  let C802;
  let C807;
  let C808;
  let C806;
  let C805;
  let C811;
  let C810;
  let C809;
  let C814;
  let C815;
  let C813;
  let C812;
  let C818;
  let C817;
  let C816;
  let C821;
  let C820;
  let C819;
  let C824;
  let C825;
  let C823;
  let C822;
  let C828;
  let C829;
  let C827;
  let C826;
  let C832;
  let C831;
  let C830;
  let C835;
  let C834;
  let C833;
  let C838;
  let C839;
  let C837;
  let C836;
  let C842;
  let C843;
  let C841;
  let C840;
  let C844;
  let C847;
  let C848;
  let C849;
  let C850;
  let C851;
  let C852;
  let C853;
  let C854;
  let C855;
  let C856;
  let C857;
  let C846;
  let C845;
  let C860;
  let C861;
  let C859;
  let C858;
  let C864;
  let C865;
  let C863;
  let C862;
  let C868;
  let C869;
  let C867;
  let C866;
  let C872;
  let C871;
  let C870;
  let C875;
  let C876;
  let C874;
  let C873;
  let C879;
  let C878;
  let C877;
  let C882;
  let C883;
  let C881;
  let C880;
  let C884;
  let C887;
  let C888;
  let C889;
  let C890;
  let C891;
  let C892;
  let C893;
  let C894;
  let C895;
  let C896;
  let C897;
  let C886;
  let C885;
  let C900;
  let C901;
  let C899;
  let C898;
  let C904;
  let C905;
  let C903;
  let C902;
  let C908;
  let C907;
  let C906;
  let C911;
  let C912;
  let C910;
  let C909;
  let C915;
  let C914;
  let C913;
  let C916;
  let C919;
  let C920;
  let C918;
  let C917;
  let C923;
  let C924;
  let C922;
  let C921;
  let C927;
  let C928;
  let C926;
  let C925;
  let C931;
  let C930;
  let C929;
  let C932;
  let C935;
  let C936;
  let C934;
  let C933;
  let C939;
  let C940;
  let C938;
  let C937;
  let C943;
  let C942;
  let C941;
  let C946;
  let C945;
  let C944;
  let C949;
  let C948;
  let C947;
  let C952;
  let C953;
  let C951;
  let C950;
  let C956;
  let C955;
  let C954;
  let C959;
  let C960;
  let C958;
  let C957;
  let C963;
  let C962;
  let C961;
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
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C744 || CT.C744}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C748 || CT.C748}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C752 || CT.C752}), new text.Text.new("Welcome", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C756 || CT.C756}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C760 || CT.C760}), $creationLocationd_0dea112b090073317d4: C763 || CT.C763}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C768 || CT.C768}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.username = text;
                      core.print("First text field: " + dart.str(text));
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C772 || CT.C772, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C773 || CT.C773}), $creationLocationd_0dea112b090073317d4: C776 || CT.C776}), $creationLocationd_0dea112b090073317d4: C782 || CT.C782}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C786 || CT.C786}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.password = text;
                    }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C790 || CT.C790}), $creationLocationd_0dea112b090073317d4: C792 || CT.C792}), $creationLocationd_0dea112b090073317d4: C798 || CT.C798}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C802 || CT.C802}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("LOGIN", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C805 || CT.C805}), $creationLocationd_0dea112b090073317d4: C809 || CT.C809})]), $creationLocationd_0dea112b090073317d4: C812 || CT.C812}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                          let e = (yield authHandler.signIn(this.username, this.password));
                          core.print("on Press Error: " + dart.notNull(e));
                          if (e === "false") {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Your Email needs to be verified.", {$creationLocationd_0dea112b090073317d4: C816 || CT.C816}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C819 || CT.C819}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C822 || CT.C822})]), $creationLocationd_0dea112b090073317d4: C826 || CT.C826}), BuildContextToAlertDialog())});
                          } else if (dart.test(signInScreen.ErrorDetect(e))) {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(signInScreen.errorDetect(e, {pos: 1}), {$creationLocationd_0dea112b090073317d4: C830 || CT.C830}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C833 || CT.C833}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C836 || CT.C836})]), $creationLocationd_0dea112b090073317d4: C840 || CT.C840}), BuildContextToAlertDialog())});
                          } else {
                            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C844 || CT.C844}), BuildContextToHomeView())}));
                          }
                        }).bind(this)), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C845 || CT.C845}), $creationLocationd_0dea112b090073317d4: C858 || CT.C858})]), $creationLocationd_0dea112b090073317d4: C862 || CT.C862}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.new({image: new _network_image_web.NetworkImage.new("https://pluspng.com/img-png/google-logo-png-open-2000.png"), height: 30.0, $creationLocationd_0dea112b090073317d4: C866 || CT.C866}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C870 || CT.C870}), new basic.Center.new({child: new text.Text.new("Sign In with Google", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C873 || CT.C873}), $creationLocationd_0dea112b090073317d4: C877 || CT.C877})]), $creationLocationd_0dea112b090073317d4: C880 || CT.C880}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C884 || CT.C884}), BuildContextToHomeView())}));
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C885 || CT.C885}), $creationLocationd_0dea112b090073317d4: C898 || CT.C898})]), $creationLocationd_0dea112b090073317d4: C902 || CT.C902}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C906 || CT.C906}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("New to Rental Manager?", {style: new text_style.TextStyle.new({fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C909 || CT.C909}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C913 || CT.C913}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.SignUpPage.new({$creationLocationd_0dea112b090073317d4: C916 || CT.C916}), BuildContextToSignUpPage())}));
                      }, VoidToNull()), child: new text.Text.new("Register", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C917 || CT.C917}), $creationLocationd_0dea112b090073317d4: C921 || CT.C921})]), $creationLocationd_0dea112b090073317d4: C925 || CT.C925}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C929 || CT.C929}), new basic.Center.new({child: new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.ResetPassword.new({$creationLocationd_0dea112b090073317d4: C932 || CT.C932}), BuildContextToResetPassword())}));
                      }, VoidToNull()), child: new text.Text.new("Forgot Password", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontWeight: ui.FontWeight.bold, fontFamily: "Montserrat", decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C933 || CT.C933}), $creationLocationd_0dea112b090073317d4: C937 || CT.C937}), $creationLocationd_0dea112b090073317d4: C941 || CT.C941}), $creationLocationd_0dea112b090073317d4: C944 || CT.C944}), new basic.Row.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C947 || CT.C947})]), $creationLocationd_0dea112b090073317d4: C950 || CT.C950}), $creationLocationd_0dea112b090073317d4: C954 || CT.C954}), $creationLocationd_0dea112b090073317d4: C957 || CT.C957}), $creationLocationd_0dea112b090073317d4: C961 || CT.C961});
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
  dart.setLibraryUri(signInScreen._signInScreenState, "package:RentalAdmin/views/signInScreen.dart");
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
  dart.setLibraryUri(signInScreen.UserCredential, "package:RentalAdmin/views/signInScreen.dart");
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
  dart.setLibraryUri(signInScreen.ResetPassword, "package:RentalAdmin/views/signInScreen.dart");
  let C966;
  let C965;
  let C964;
  let C969;
  let C970;
  let C968;
  let C967;
  let C973;
  let C974;
  let C972;
  let C971;
  let C977;
  let C978;
  let C979;
  let C976;
  let C975;
  let C982;
  let C983;
  let C981;
  let C980;
  let C986;
  let C987;
  let C985;
  let C984;
  let C990;
  let C991;
  let C989;
  let C988;
  let C994;
  let C995;
  let C993;
  let C992;
  let C998;
  let C997;
  let C996;
  let C1001;
  let C1002;
  let C1003;
  let C1000;
  let C999;
  let C1006;
  let C1007;
  let C1005;
  let C1004;
  let C1008;
  let C1010;
  let C1009;
  let C1013;
  let C1014;
  let C1015;
  let C1016;
  let C1012;
  let C1011;
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
  let C1029;
  let C1028;
  let C1034;
  let C1033;
  let C1032;
  let C1037;
  let C1038;
  let C1036;
  let C1035;
  let C1041;
  let C1042;
  let C1043;
  let C1044;
  let C1045;
  let C1046;
  let C1047;
  let C1048;
  let C1049;
  let C1050;
  let C1051;
  let C1040;
  let C1039;
  let C1054;
  let C1055;
  let C1053;
  let C1052;
  let C1058;
  let C1059;
  let C1057;
  let C1056;
  let C1062;
  let C1061;
  let C1060;
  let C1065;
  let C1064;
  let C1063;
  let C1068;
  let C1067;
  let C1066;
  let C1071;
  let C1072;
  let C1073;
  let C1070;
  let C1069;
  let C1076;
  let C1075;
  let C1074;
  signInScreen._ResetPasswordState = class _ResetPasswordState extends framework.State$(signInScreen.ResetPassword) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reset PassWord", {$creationLocationd_0dea112b090073317d4: C964 || CT.C964}), backgroundColor: colors.Colors.teal, leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back_ios, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C967 || CT.C967}), onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.Object), VoidTobool()), $creationLocationd_0dea112b090073317d4: C971 || CT.C971}), $creationLocationd_0dea112b090073317d4: C975 || CT.C975}), backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C980 || CT.C980}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C984 || CT.C984}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C988 || CT.C988}), new text.Text.new("Enter your email address below", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C992 || CT.C992}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C996 || CT.C996}), $creationLocationd_0dea112b090073317d4: C999 || CT.C999}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C1004 || CT.C1004}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.email = text;
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C1008 || CT.C1008, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Enter your Email Address", prefixIcon: C1009 || CT.C1009, contentPadding: C1008 || CT.C1008}), $creationLocationd_0dea112b090073317d4: C1011 || CT.C1011}), $creationLocationd_0dea112b090073317d4: C1017 || CT.C1017}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C1021 || CT.C1021}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C1025 || CT.C1025}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("Send Verification Email", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C1028 || CT.C1028}), $creationLocationd_0dea112b090073317d4: C1032 || CT.C1032})]), $creationLocationd_0dea112b090073317d4: C1035 || CT.C1035}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C1039 || CT.C1039}), $creationLocationd_0dea112b090073317d4: C1052 || CT.C1052})]), $creationLocationd_0dea112b090073317d4: C1056 || CT.C1056}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C1060 || CT.C1060})]), $creationLocationd_0dea112b090073317d4: C1063 || CT.C1063}), $creationLocationd_0dea112b090073317d4: C1066 || CT.C1066}), $creationLocationd_0dea112b090073317d4: C1069 || CT.C1069}), $creationLocationd_0dea112b090073317d4: C1074 || CT.C1074});
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
  dart.setLibraryUri(signInScreen._ResetPasswordState, "package:RentalAdmin/views/signInScreen.dart");
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
  dart.setLibraryUri(signInScreen.SignUpPage, "package:RentalAdmin/views/signInScreen.dart");
  let C1079;
  let C1078;
  let C1077;
  let C1082;
  let C1083;
  let C1081;
  let C1080;
  let C1084;
  let C1087;
  let C1088;
  let C1089;
  let C1090;
  let C1086;
  let C1085;
  let C1093;
  let C1094;
  let C1092;
  let C1091;
  let C1097;
  let C1096;
  let C1095;
  let C1100;
  let C1101;
  let C1102;
  let C1099;
  let C1098;
  let C1105;
  let C1106;
  let C1104;
  let C1103;
  let C1109;
  let C1108;
  let C1107;
  let C1112;
  let C1113;
  let C1114;
  let C1111;
  let C1110;
  let C1117;
  let C1118;
  let C1116;
  let C1115;
  let C1121;
  let C1120;
  let C1119;
  let C1124;
  let C1125;
  let C1126;
  let C1127;
  let C1128;
  let C1123;
  let C1122;
  let C1131;
  let C1132;
  let C1130;
  let C1129;
  let C1135;
  let C1134;
  let C1133;
  let C1138;
  let C1139;
  let C1140;
  let C1141;
  let C1137;
  let C1136;
  let C1144;
  let C1145;
  let C1143;
  let C1142;
  let C1148;
  let C1147;
  let C1146;
  let C1151;
  let C1150;
  let C1149;
  let C1154;
  let C1153;
  let C1152;
  let C1157;
  let C1158;
  let C1159;
  let C1160;
  let C1161;
  let C1162;
  let C1163;
  let C1156;
  let C1155;
  let C1166;
  let C1167;
  let C1165;
  let C1164;
  let C1170;
  let C1171;
  let C1169;
  let C1168;
  let C1174;
  let C1173;
  let C1172;
  let C1177;
  let C1178;
  let C1179;
  let C1176;
  let C1175;
  signInScreen._State = class _State extends framework.State$(signInScreen.SignUpPage) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, appBar: new app_bar.AppBar.new({title: new text.Text.new("Account Sign Up", {$creationLocationd_0dea112b090073317d4: C1077 || CT.C1077}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C1080 || CT.C1080}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.email = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C1084 || CT.C1084, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C1009 || CT.C1009, contentPadding: C1084 || CT.C1084}), $creationLocationd_0dea112b090073317d4: C1085 || CT.C1085}), $creationLocationd_0dea112b090073317d4: C1091 || CT.C1091}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1095 || CT.C1095}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameFirst = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "First Name", prefixIcon: C773 || CT.C773, contentPadding: C1084 || CT.C1084}), $creationLocationd_0dea112b090073317d4: C1098 || CT.C1098}), $creationLocationd_0dea112b090073317d4: C1103 || CT.C1103}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1107 || CT.C1107}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameLast = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Lastname", prefixIcon: C773 || CT.C773, contentPadding: C1084 || CT.C1084}), $creationLocationd_0dea112b090073317d4: C1110 || CT.C1110}), $creationLocationd_0dea112b090073317d4: C1115 || CT.C1115}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1119 || CT.C1119}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.password = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, scrollPadding: C1084 || CT.C1084, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C790 || CT.C790, contentPadding: C1084 || CT.C1084}), $creationLocationd_0dea112b090073317d4: C1122 || CT.C1122}), $creationLocationd_0dea112b090073317d4: C1129 || CT.C1129}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1133 || CT.C1133}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.confirmpw = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C156 || CT.C156, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Confirm Password", prefixIcon: C790 || CT.C790, contentPadding: C1084 || CT.C1084}), $creationLocationd_0dea112b090073317d4: C1136 || CT.C1136}), $creationLocationd_0dea112b090073317d4: C1142 || CT.C1142}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C1146 || CT.C1146}), new text.Text.new("Click sign up after entering all of above", {$creationLocationd_0dea112b090073317d4: C1149 || CT.C1149}), new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({textColor: colors.Colors.white, color: colors.Colors.teal.shade900, child: new text.Text.new("SIGN UP", {$creationLocationd_0dea112b090073317d4: C1152 || CT.C1152}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                  }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C1155 || CT.C1155}), $creationLocationd_0dea112b090073317d4: C1164 || CT.C1164})]), $creationLocationd_0dea112b090073317d4: C1168 || CT.C1168}), $creationLocationd_0dea112b090073317d4: C1172 || CT.C1172}), $creationLocationd_0dea112b090073317d4: C1175 || CT.C1175});
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
  dart.setLibraryUri(signInScreen._State, "package:RentalAdmin/views/signInScreen.dart");
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
  dart.trackLibraries("packages/RentalAdmin/views/InventoryView", {
    "package:RentalAdmin/views/inventory/return.dart": $return,
    "package:RentalAdmin/widgets/activeActivities.dart": activeActivities,
    "package:RentalAdmin/views/homeView.dart": homeView,
    "package:RentalAdmin/views/inventory/checkOutB.dart": checkOutB,
    "package:RentalAdmin/views/ReservationView.dart": ReservationView,
    "package:RentalAdmin/views/InventoryView.dart": InventoryView,
    "package:RentalAdmin/views/inventory/list_page.dart": list_page,
    "package:RentalAdmin/views/inventory/category_page.dart": category_page,
    "package:RentalAdmin/views/inventory/itemGrid.dart": itemGrid,
    "package:RentalAdmin/views/inventory/ItemDetails.dart": ItemDetails,
    "package:RentalAdmin/widgets/resCell.dart": resCell,
    "package:RentalAdmin/widgets/navigation.dart": navigation,
    "package:RentalAdmin/views/signInScreen.dart": signInScreen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inventory/return.dart","../widgets/activeActivities.dart","homeView.dart","inventory/checkOutB.dart","ReservationView.dart","InventoryView.dart","inventory/list_page.dart","inventory/category_page.dart","inventory/itemGrid.dart","inventory/ItemDetails.dart","../widgets/resCell.dart","../widgets/navigation.dart","signInScreen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,qCACI,gCAEa,sBAEhB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AAC0E,gBAAzE,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAa;uCAE5D,oDAGE,kBACL,qBACO,wCAAoB,aAAiB,iCAA6B,6LAI/E,+BACS,cACC;IAMpB;;;;;;EAEF;;;;;;;;MApCsB,4BAAoB;YAAG;;;;;;ACMzC,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oCACK,+BACC,kBAAK,qGACY,mFAGpB;IACZ;;AAGE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAqB7B,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UAC/B,0BACI,mCACI,kBAC+B,cAAT,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,+EACpB,kBAC4B,cAAX,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,8EAKrB;AAmDC,sBAlDN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,oFACH,0CACK,mDACA,mDACE,yFAEC,sBACX,uCACS,kBAAK,+EACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;yGAGpB,uCACS,kBAAK,+EACL;AACkB,gCAAjB,AAAY,uBAAT,OAAO;AAwBd,gCAvBN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBACH,qGACa,sBACX,uCACS,kBAAK,2EACL;AAGC,0CAFA,AAEL,uBADG,OAAO;AAOa,0CALlB,uCACN,OAAO,EACP,yCAEQ,QAAC,WACG;;;;;;IAiB1E;;AAmCuB;AACf,wBAAsB;AACd,2BAEV,MAAM,AACD,AACA,AACA,SAHU,YACC,qBACL,mBAAkB;AAEjC,cAAO,AAAY,YAAD;MACpB;;wBA6E2B,QAAQ;AAAhB;AAyBX,QAxBN,wEACa,OAAO,YACP,QAAC,WACD,mCACE,kBAAK,sFACH,0CACK,mDACA,mDAA0B,2FAEvB,sBACX,uCACS,kBAAK,iFACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;6FAGpB,uCACS,kBAAK,iFACL;AACkB,kBAAjB,AAAY,uBAAT,OAAO;;MAMpC;;;;;;EACF;;;;;;;;;;;MAxQsB,qCAAoB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCCjB;AACxB,YAAO,6CACmB,AAAK,mCACvB,gCACc,sBAChB,6FACA,gCACU,iEAEV,kBAAa,OAAO;IAI5B;iBAEuB;AACrB,YAAO,uCACe,+BAAI,aACjB,sCACgC,8CACnB,sBAEhB,6CAAU,OAAO;IAIzB;cAEiC;AAC/B,YAAO,uCACe,oCAAS,KAAG,KAAG,KAAG,cACK,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8EAIL,gCACa,sBAChB;IAOR;;;QAjDoB;;AAAQ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICLvC;;;;;;UAEsB;AACxB,YAAO,qCACE,gCACa,sBAChB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AACgB,gBAAzB,WAAM;AAyBA,gBAxBN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,sFACH,yCACI,iBACA,QAAC;AACV,4BAAI,AAAK,AAAO,IAAR,YAAW;AACP,0BAAV,WAAM,IAAI;AAKyB,0BAJzB,uCACN,OAAO,EACP,yCACa,QAAC,WACN;AACgB,0BAA5B,AAAqB;;AAES,wBAAhC,WAAM,AAAyB,gCAAL,IAAI;sDAEpB,4CAER,mDAA0B;uCAKnC,oDAGE,kBACL,iBACO,wCACO,aACI,iCACS,uMAIjC,+BACS,cACC;IAKlB;;;;IAzDI,YAAM;;;EA0DZ;;;;;;;;;;;;MA7DsB,8BAAoB;YAAG;;;;;;ACQzC,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,oCACK,+BACC,kBAAK,gGACY,6BACP,sBACf,gCACwB,wCAAY,eACzB,iDACE;AAKiD,kBAJ5C,uCACN,OAAO,EACP,yCACa,QAAC,WACN,2CAAoB;yCAE3B,kBACC,iCACA,uLAGV,gCACoB,wCAAY,eACzB,iDACE;AAKyB,kBAJpB,uCACN,OAAO,EACP,yCACa,QAAC,WACN;yCAEP,kBACC,4BACA,uLAGd,gCACwB,wCAAY,eACzB,iDACE;AAEmD,kBAD9C,uCAAK,OAAO,EAClB,yCAA2B,QAAC,WAAY;yCAEvC,kBACC,yBACA,0PAMZ;IACZ;;AAGE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAK7B,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UAC/B,0BACI,mCACI,kBAC+B,cAAT,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,iFACpB,kBAC4B,cAAX,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,gFAErB;AACgC,sBAAtC,8DAA8B,WAAb,AAAS,QAAD,gBAAM,KAAK;;;;IAKjE;;AAEuB;AACf,wBAAsB;AACd,2BAEV,MAAM,AACD,AACA,AACA,AACA,SAJU,YACC,qBACL,mBAAkB,2CAClB,oBAAmB,CAAC,YAAW;AAE9C,cAAO,AAAY,YAAD;MACpB;;qBACiC;AAKgC,MAJrD,uCACN,cACA,yCACa,QAAC,WACN,sDAAqC,WAAW;IAC9D;eASsB,OAAqB;AACzC,YAAO,mCACE,iCAEE,yCACO,iDACC,yBACT,qCACgB,gCACF,mBAIX,0BACE,oCACE,wDAEE,gCACa,sBAChB,sCACuC,+CACnB,sBAChB,+BACoB,sBAChB,gCACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mBACnB,wCACK,kBACa,2MAOnC,kFACA,+BACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,wBACnB,wCACK,aACI,AAAK,oNAO/B,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,qBACnB,wCACK,aACI;IAWpC;;;;;EACF;;;;;;;;;;;;MAzLsB,oCAAoB;YAAG;;;;;;;;;;;UCTjB;AACxB,YAAO,gCACC,2CAAoB;IAE9B;;;;;;EACF;;;;;;;;;IAGe;;;;;;;AAKX,YAAO;IACT;;;QALkB;QAAU;;;AAAU,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;UAU3B;AAExB,YAAO,oCACG,+BACC,kBAAK,AAAO,gGACK,qFAEpB;IAEV;;;;;EACF;;;;;;;;;AC1BI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAGyB;AACf,wBAAsB;AACd,wCACV,MAAM,AAAU,AAAwB,SAAzB,YAAY;AAC/B,cAAO,AAAyB,yBAAD;MACjC;;uBAEoC;AAK0B,MAJlD,uCACN,cACA,yCACa,QAAC,WACN,yDAAkC,WAAW;IAC3D;UAG0B;AAExB,YAAO,qCACE,sCACG,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBAAK;;AAGd,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UACpC,gBAAW,KAAK,EAAE,QAAQ;;;IAc5C;eAEsB,OAAqB;AACzC,YAAO,mCACE,iCACE,cAAM,gEAAgC,WAAb,AAAS,QAAD,gBAAM,KAAK,+BAC5C,+DAEG,cACD,0BACE,yCACO,6CACH,iDACE,2DAAsC,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,qBAClC,gCAGT,wDAEE,gCACa,sBAChB,6BACoB,sBAChB,+BACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mBACnB,wCACK,iBACa,2BACT,+IAKtB;IAuCtB;;;;;EACF;;;;;;;;;;;;IC9HyB;;;;;;;AAMrB,YAAO;IACT;;;QANmB;;;AAAnB;;EAAwC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBAUlB;AAIoD,MAH9D,uCACN,cACA,yCACa,QAAC,WAAY,yCAAuB,gBAAgB;IACvE;UAG0B;AAExB,YAAO,oCACG,+BACC,kBAAK,wGACY,qFAEpB,yCACiC,kDACE,6CACZ,iCACT,sBAChB,+BACS,gCACe,+BAAI,aACR,gDACE,qBACE,sBACD,uBACC,qCAchB,WAZgD,YAA9C,AAAO,AAAoB,AAAI,4CAAC,2CAClC,QAAC,gBACQ,iDACE,mCACE,mCAAW,YAAY,gIAEzB;AAE+B,wBAApC,uCAA2B,WAAZ,YAAY,WAAC;;IAYlD;;;;;EACF;;;;;;;;;;IC1DS;;;;;;;AAML,YAAO;IACT;;;QANmB;;;AAAnB;;EAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBA4BK;AAIqC,MAH3D,uCACN,cACA,yCACa,QAAC,WAAY,8CAAyB,WAAW;IACpE;UAE0B;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAuC,iCAAjB,AAAO,oGACjB,qFAEpB,kDACgB,AACb,AACA,AACA,8CAFW,mBACL,wBAAuB,AAAO,6CAEhC,SAAC,SAAS;AACjB,2BAAK,AAAS,QAAD,WAAU;AA2BvB,kBAAgB,8DACqB,WAAV,WAAd,AAAS,QAAD,+CACD,+EACE,kBACP,SAAc,SAAa,UAC/B,iCACE,6BACqC,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,WACY,cAAb,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,kFAC7B;AACwD,kBAA7D,WAAkD,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO;AACM,kBAAhD,8DAAwC,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK;;;IAQhE;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAES;;;;;;IACA;;;;;;UAImB;AAExB,YAAO,2BACE,uEACsB,wCAAS,gBAExB,4BACP,gCACe,+BAAI,cACjB,wCACgB,mCACd,0CACkC,mDACF,6CACV,iCACT,sBAChB,+BACS,uCACsB,wCAAS,cACvB,wBAAQ,4LAGzB,gCACsB,+BAAI,cACjB,kBACL,sBACU,aACA,iBACW,4BACd,wCACK,kBACa;IASzC;;uCA3CiB,MAAW;;IAAX;IAAW;AAA5B;;EAAgC;;;;;;;;;;;;;;ICvG5B;;;;;;;AAKF,YAAO;IACT;;;QALiB;;;AAAjB;;EAA+B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAY7B,YAAO,uCACe,gDAAoB,eACC,aAAvB,AAAY,AAAK,0BAAd,4BAAsB,UACpC,+CACM;AACyB,YAAlC,WAAM;AAC6C,YAAnD,4CAAwC,WAApB,AAAO;mCAEtB,kBAAK,qBAAoB,qCAAwB,yFAC1C;IAGpB;;AAGE,YAAO,yCAEgB,oCAGsB,AAAM,aAA9B,AAAY,AAAK,0BAAd,6BAAuB,MAAM,UACV,AAAM,aAA7B,AAAY,AAAK,0BAAd,4BAAsB,MAAM,eACjC,6CACH,iDACF,2DAAqC,WAAJ,WAApB,AAAO,4CAAkB;IAMrD;;AAGE,YAAO,sCAA6B,WAAJ,WAApB,AAAO,4CAAkB,mBAC1B,wCAAoB;IACjC;;AAGE,YAAO,qCAEE,gCACgB,mCACd,qDACa,AACb,AACA,AACA,8CAFW,yCACkB,WAApB,AAAO,gEAEZ,SAAC,SAAS;AACjB,6BAAK,AAAS,QAAD,WAAU;AACvB,oBAAO,mBAAK,AAAgD,8BAAhB,WAAb,AAAS,QAAD,gBAAM,yBAClC,wCACO,aACI,iCACS;;IAKzC;;AAGE,YAAO,yCAEgB,oCAEsB,AAAM,aAA9B,AAAY,AAAK,0BAAd,6BAAuB,MAAM,UACV,AAAM,aAA7B,AAAY,AAAK,0BAAd,4BAAsB,MAAM,YAC7B,oCAAS,MAAM,KAAK,MAAM,cAEvC,6BACE,gCACa,sBAAC,wBAAmB,eAAU;IAIxD;UAG0B;AACxB,YAAO,oCACK,+BACC,kBAA0C,SAAV,WAAJ,WAApB,AAAO,4CAAkB,wFAChB,gGAEF,8BAClB,iCACE,6BACc,sBAAC,YAAO;IAGpC;wBAEyB;AAAR;AASF,QAAb,WAAM,MAAM;AAER,kBAAU;AACV,mBAAO,AAAkC,wBAAvB,8BAA8B,GAAG;AACnD,2BAAe,AAAI,GAAD,KAAS,gCAAkB;AAIW,QAA5D,gBAAW,MAAM,EAAE,oCAAoC,IAAI;MAC7D;;eAEgB,QAAQ,KAAK;AAAd;AACN;AAAU;AACX,gCAA8B;AAYlC,QAXF,MAAgB,AACX,AACA,AACA,AACA,8CAHW,yCACF,MAAM,yBAEV,QAAkB;AAC1B;AACuB,uBAArB,mBAAW,AAAE,EAAA,MAAC;AACa,YAA3B,WAAM;;gBACC;AACC,YAAR,WAAM,CAAC;;;AAeT,QAXF,MAAgB,AACX,AACA,AACA,AACA,8CAHW,yCACF,MAAM,yBAEV,QAAkB;AAC1B;AAC2B,uBAAzB,mBAAW,AAAE,EAAA,MAAC;AACa,YAA3B,WAAM;;gBACC;AACC,YAAR,WAAM,CAAC;;;AAIX,YAAI,AAAS,QAAD,IAAI;AACQ,UAAtB,WAAM;AACoB,UAA1B,WAAW;;AAEb,YAAI,AAAS,QAAD,IAAI;AACQ,UAAtB,WAAM;AACsB,UAA5B,WAAW;;AAIP,qBAAS;AAWb,QAVF,MAAM,AAAkB,AAA0B,AAAW,iBAAtC,YAAY,kCAAkC,0CACnE,YAAY,QAAQ,EACpB,QAAQ,QAAQ,EAChB,OAAO,GAAG,EACV,QAAQ,MAAM,EACd,UAAU,MAAM,EAChB,UAAU,KACV,aAAa,QAAQ,EACrB,UAAU,aACV,WAAW;AAE0E,QAA7E,uCAAK,cAAS,yCAA2B,QAAC,WAAY;MAOlE;;;;;;EAAC;;;;;;;;;;;;;;;MA9KmB,gCAAoB;YAAG;;;;;;ICTpB;;;;;;;AAKrB,YAAO;IACT;;;QALsB;;;AAAtB;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAS5B;AACP,wBAAsB;AAKI,QAJhC,MAAM,AACD,AACA,AACA,AAAoC,SAH1B,YACC,wBACoC,cAAtC,AAAO,AAAoB,wDACzB,0CAAC,UAAU,0BACnB,QAAC,SAAU,WAAM,KAAK;AACiE,QAA7E,uCAAK,cAAS,yCAA2B,QAAC,WAAY;MAC1E;;;AACe;AACP,wBAAsB;AAKI,QAJhC,MAAM,AACD,AACA,AACA,AAAmC,SAHzB,YACC,wBACoC,cAAtC,AAAO,AAAoB,wDACzB,0CAAC,UAAU,yBACnB,QAAC,SAAU,WAAM,KAAK;AACiE,QAA7E,uCAAK,cAAS,yCAA2B,QAAC,WAAY;MAC1E;;;AACwB;AAChB,wBAAsB;AAKY,QAJxC,MAAM,AACD,AACA,AACA,AACA,SAJU,YACC,wBACoC,cAAtC,AAAO,AAAoB,iEAEzB,QAAC,SAAU,WAAM,KAAK;AACqD,QAA7E,uCAAK,cAAS,yCAA2B,QAAC,WAAY;MACtE;;UAG0B;AACxB,UAAwC,YAArC,AAAO,AAAmB,qCAAC,WAAa;AACvB,QAAlB,iBAAS;YACL,KAAwC,YAArC,AAAO,AAAmB,qCAAC,WAAa;AAC9B,QAAjB,iBAAS;;AAEX,YAAO,oCACG,yCACkB,2BACjB,kBAAK,iJAER,sCACgB,gDAAoB,kBAAkB,eACnD,0CACkC,yCACrB,sBAChB,gCAAiB,iEACZ,mBACH,sCACsB,wBAClB,kCACU,wBACC,yCACkB,+BAAkB,UAC/C,qDACU,AAAO,AAAmB,qCAAC,iBAC1B,0CACoB,8BACb,aACI,wFAI5B,gCAAiB,iEACZ,mBACH,sCACsB,wBAClB,kCACU,yBACC,yCACkB,+BAAkB,UAC/C,qDACU,AAAO,AAAmB,qCAAC,sBAC1B,0CACoB,8BACb,aACI,wFAI5B,gCAAiB,iEACZ,mBACH,sCACsB,wBAClB,kCACU,uBACC,yCACkB,+BAAkB,UAC/C,qDACU,AAAO,AAAmB,qCAAC,oBAC1B,0CACoB,8BACb,aACI,wFAI5B,gCAAiB,iEACZ,mBACH,sCACsB,wBAClB,kCACU,uBACC,yCACkB,+BAAkB,UAC/C,qDACU,AAAO,AAAmB,qCAAC,mBAC1B,0CACoB,8BACb,aACI,wFAI5B,gCAAiB,iEACZ,mBACH,sCACsB,wBAClB,kCACU,0BACC,yCACkB,+BAAkB,UAC/C,qDACU,AAAO,AAAmB,qCAAC,mBAC1B,0CACoB,8BACb,aACI,wFAI5B,gCAAiB,iEACjB,gCACU,2BAEY,oDACJ,+BACI,gCACP,YACA,uEACS,wCAAsB,oBAE/B;AAET,wBAAwC,YAArC,AAAO,AAAmB,qCAAC,WAAa;AAC/B,sBAAV;0BAEI,KAAwC,YAArC,AAAO,AAAmB,qCAAC,WAAa;AACrC,sBAAV;;AAIoB,oBAAZ,qCAAI,OAAO;kBACtB,6CACK,kBAAW,oCAAuB,wEACjC,kBACL,wBACO,wCAAoB,yLAIjC,gCAAiB,iEACjB,gCACU,2BAEY,oDACJ,+BACI,gCACP,YACA,uEACS,wCAAsB,oBAE/B;AACU,oBAAnB;AACwF,oBAA7E,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;AAC3C,oBAAZ,qCAAI,OAAO;kBACtB,6CACK,kBACE,2BACA,wEAED,kBACL,kBACO,wCAAoB;IAQ3C;;;;;EACF;;;;;;;;;;;MAjMO,cAAM;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCFY;AACxB,YAAO,uCACiB,oCAAS,MAAI,MAAI,MAAI,cAC3B,4BACN,aACD,sCACgC,+CACnB,sBAChB,kBACE,wCACO,0CACoB,2BACT,+BACJ,mEAEhB,6BACoB,sBAChB,+CACgB,2BACH,+DAED,mCAAyB,oCACxB;AACwB,oBAAjC,WAAM;AAC2E,oBAAtE,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;2CAG5D,kBACL,uBACO,qCAAwB,6IAGnC,+BACS;IAMvB;;;QAzCyB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;IA6CnC;;;;;;UAIa;AACxB,YAAO;IACT;;4CAL0B;;;AAApB;;EAA0B;;;;;;;;;;;;;AC9CI;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeoC;AAChC;AAC8B,UAA5B,MAAM,AAAc;;cACb;AACK,UAAZ,WAAM,KAAK;;MAEf;;UAG0B;AACpB,wBAAkB;AACtB,YAAO,gCACC,4CACoB,2BAClB,mCACG,yCACgC,yCACnB,sBAChB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,mBACO,0CACO,0BACE,AAAK,uCACT,qBACK,kEAGnB,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;AACiB,sBAAhC,WAAM,AAAyB,gCAAL,IAAI;qDAGZ,AAAK,yEAGb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,8JAKjB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;qDAEJ,mBACO,AAAK,yCACb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,iKAKjB,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,iBACO,wCACK,aAEI,iCACF,8MAMX;AAEL,mCAAI,MAAM,AAAY,WAAD,QAAQ,eAAU;AACd,0BAA7B,WAAM,AAAmB,kCAAE,CAAC;AAC5B,8BAAI,AAAE,CAAD,KAAI;AAgBD,4BAfN,0CACa,OAAO,WACP,QAAC,WACD,mCAED,kBAAK,yGACQ,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;gCAM7B,eAAI,yBAAY,CAAC;AAehB,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yBAAY,CAAC,QAAO,0EACf,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;;AAUQ,4BAHhC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;;wBAEjC,gDACmB,+BAAI,sBAEF,wCACI,wMAKlC,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,4BACS,wCACH,sEACI,iEAEV,+BAAgB,iEAChB,6BACS,kBACL,+BACO,wCACK,aAEI,iCACF,8MAMX;AA6BiC,0BAHhC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;wBAC/B,oCACmB,+BAAI,qBAEF,wCACI,wMAKlC,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,kBACE,kCACO,0CAAsB,2EAE/B,+BAAgB,gEAChB,iCACS;AAIuC,wBAHlC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,oBACO,qCACW,iCACF,0BACW,gCACI,kNAKvC,gCACU,iEAEV,6BACS,oCAGE,iCACE;AAI0C,wBAHrC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,2BACO,qCACW,iCACS,gCACX,0BACe,2QAKvC,6BACoB;IAOhC;;;IA5UO;IAAU;IAAU;IAEtB,yBAAmB;IACjB;IACa;IACP,sBAAgB,6CACnB,sBACN,SACA;;;EAqUN;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,gCACC,mCACI,+BACC,kBAAK,+FACY,6BACX,sCACD,kBAAW,oCAA8B,2FACxC,cAAgB,AAAY,uBAAT,OAAO,0KAGjB,2BAClB,mCACG,gCACa,sBAChB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,0CACO,0CACO,0BACE,AAAK,uCACT,mEAGd,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,oEAE5B,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACE,sBAAZ,aAAQ,IAAI;qDAEM,AAAK,2EAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,0NAMnB,gCAAiB,aAAW,oEAE5B,gCACU,kEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,mCACO,wCACK,aACI,iCACF,oNAMX;wBAAW,oCACF,+BAAI,qBACF,wCACI,8MAKlC,gCACU;IAOtB;;;IAtHO;;;EAuHT;;;;;;;;;;;;;AAI0B;IAAQ;;;;;;EAClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,sDACqB,eAClB,+BACC,kBAAK,kGACY,uFAEpB,6BACG,yCACgC,yCACnB,sBAChB,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACE,oBAAZ,aAAQ,IAAI;mDAGM,AAAK,2EAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,uMAQnB,gCACU,mEAEV,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACU,oBAApB,qBAAgB,IAAI;mDAIF,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,0MAQnB,gCACU,mEAEV,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACS,oBAAnB,oBAAe,IAAI;mDAID,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,wMAQnB,gCACU,mEAEV,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,oBAAf,gBAAW,IAAI;mDAGJ,mBACO,AAAK,2EAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,wMAQnB,gCACU,mEAEV,gCACwB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACM,oBAAhB,iBAAY,IAAI;mDAGL,mBACO,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,gNAQnB,gCACU,mEAEV,kBAAK,2GACL,+BAC6C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,+CACa,4BACJ,AAAK,oCACZ,kBAAK,oFACD;kBAAW,oCACF,+BAAI,sBACF,wCACI;IAM1C;;;IAzLO;IAAO;IAAe;IAAc;IAAU;;;EA0LvD;;;;;;;;;;;;;;;kDAEwB;AACtB,QAAI,AAAE,CAAD,YAAU;AACb,YAAO;;AAEP,YAAO;;EAEX;kDAE0B;QAAQ;AACnB,kBAAU,AAAE,CAAD,SAAO;AACxB,kBAAU,AAAO,OAAA,QAAC,GAAG;AACf,cAAM,AAAQ,OAAD,SAAO;AACjC,UAAO,AAAG,IAAA,QAAC;EACb","file":"InventoryView.ddc.js"}');
  // Exports:
  return {
    views__inventory__return: $return,
    widgets__activeActivities: activeActivities,
    views__homeView: homeView,
    views__inventory__checkOutB: checkOutB,
    views__ReservationView: ReservationView,
    views__InventoryView: InventoryView,
    views__inventory__list_page: list_page,
    views__inventory__category_page: category_page,
    views__inventory__itemGrid: itemGrid,
    views__inventory__ItemDetails: ItemDetails,
    widgets__resCell: resCell,
    widgets__navigation: navigation,
    views__signInScreen: signInScreen
  };
});

//# sourceMappingURL=InventoryView.ddc.js.map
