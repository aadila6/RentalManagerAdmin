define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/RentalAdmin/views/InventoryView', 'packages/RentalAdmin/widgets/testlist', 'packages/RentalAdmin/widgets/centerer', 'packages/flutter/src/rendering/animated_size', 'packages/google_sign_in/google_sign_in', 'packages/firebase_auth/firebase_auth', 'packages/RentalAdmin/widgets/auth', 'packages/RentalAdmin/views/inventory/return', 'packages/RentalAdmin/views/LandingView', 'packages/RentalAdmin/widgets/actionButton'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__RentalAdmin__views__InventoryView, packages__RentalAdmin__widgets__testlist, packages__RentalAdmin__widgets__centerer, packages__flutter__src__rendering__animated_size, packages__google_sign_in__google_sign_in, packages__firebase_auth__firebase_auth, packages__RentalAdmin__widgets__auth, packages__RentalAdmin__views__inventory__return, packages__RentalAdmin__views__LandingView, packages__RentalAdmin__widgets__actionButton) {
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
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const app = packages__flutter__material.src__material__app;
  const divider = packages__flutter__material.src__material__divider;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const InventoryView = packages__RentalAdmin__views__InventoryView.views__InventoryView;
  const testlist = packages__RentalAdmin__widgets__testlist.widgets__testlist;
  const centerer = packages__RentalAdmin__widgets__centerer.widgets__centerer;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const google_sign_in = packages__google_sign_in__google_sign_in.google_sign_in;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const auth = packages__RentalAdmin__widgets__auth.widgets__auth;
  const $return = packages__RentalAdmin__views__inventory__return.views__inventory__return;
  const LandingView = packages__RentalAdmin__views__LandingView.views__LandingView;
  const actionButton = packages__RentalAdmin__widgets__actionButton.widgets__actionButton;
  const checkOutB = Object.create(dart.library);
  const ReservationView = Object.create(dart.library);
  const navigation = Object.create(dart.library);
  const signInScreen = Object.create(dart.library);
  const homeView = Object.create(dart.library);
  const chatBoxView = Object.create(dart.library);
  const $contains = dartx.contains;
  const $split = dartx.split;
  const $_get = dartx._get;
  let BuildContextToLocationPage = () => (BuildContextToLocationPage = dart.constFn(dart.fnType(InventoryView.LocationPage, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToReservationListPage = () => (BuildContextToReservationListPage = dart.constFn(dart.fnType(testlist.ReservationListPage, [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(homeView.HomeView, [framework.BuildContext])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let BuildContextToSignUpPage = () => (BuildContextToSignUpPage = dart.constFn(dart.fnType(signInScreen.SignUpPage, [framework.BuildContext])))();
  let BuildContextToResetPassword = () => (BuildContextToResetPassword = dart.constFn(dart.fnType(signInScreen.ResetPassword, [framework.BuildContext])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 26,
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
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 108,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 95,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C17() {
      return C17 = dart.constList([], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 95,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
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
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
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
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 57,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 55,
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
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 52,
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
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 63,
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
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 14,
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
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 12,
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
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/checkOutB.dart"
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
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 25,
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
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/ReservationView.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 85,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 99,
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
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 30,
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
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 21,
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
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
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
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/navigation.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 113,
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
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 124,
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
        [_Location_column]: 24,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 100,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 100
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 8,
        [Radius_x]: 8
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C133 || CT.C133,
        [BorderRadius_bottomLeft]: C133 || CT.C133,
        [BorderRadius_topRight]: C133 || CT.C133,
        [BorderRadius_topLeft]: C133 || CT.C133
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59389
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C135 || CT.C135,
        [Icon_size]: null,
        [Icon_icon]: C136 || CT.C136
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 59543
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C135 || CT.C135,
        [Icon_size]: null,
        [Icon_icon]: C152 || CT.C152
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 19,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 211,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 236,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 239,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 240,
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
        [_Location_column]: 41,
        [_Location_line]: 238,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 237,
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
        [_Location_column]: 40,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 253,
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
        [_Location_column]: 42,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 55,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 39,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 39,
        [_Location_line]: 257,
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
        [_Location_column]: 41,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 35,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 35,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 268,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208, C209 || CT.C209, C210 || CT.C210, C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217, C218 || CT.C218], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222], widget_inspector._Location);
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225, C226 || CT.C226], widget_inspector._Location);
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 29,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 300,
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
        [_Location_column]: 27,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 304,
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
        [_Location_column]: 36,
        [_Location_line]: 302,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C239 || CT.C239,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 57,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 292,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248, C249 || CT.C249, C250 || CT.C250, C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 284,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 284,
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
        [_Location_column]: 19,
        [_Location_line]: 282,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265, C266 || CT.C266], widget_inspector._Location);
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 356,
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
        [_Location_column]: 15,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 362,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 363,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272, C273 || CT.C273], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 361,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 28,
        [_Location_line]: 365,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 365,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 374,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280, C281 || CT.C281], widget_inspector._Location);
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 373,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 367,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 373,
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
        [_Location_column]: 19,
        [_Location_line]: 366,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 360,
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
        [_Location_column]: 15,
        [_Location_line]: 358,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 385,
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
        [_Location_column]: 15,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 53,
        [_Location_line]: 396,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.constList([C296 || CT.C296, C297 || CT.C297], widget_inspector._Location);
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C295 || CT.C295,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 398,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 398,
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
        [_Location_column]: 26,
        [_Location_line]: 391,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 391,
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
        [_Location_column]: 24,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 388,
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
        [_Location_column]: 15,
        [_Location_line]: 387,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 410,
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
        [_Location_column]: 15,
        [_Location_line]: 409,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 90,
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
        [_Location_column]: 18,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 88,
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
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 87,
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
        [_Location_column]: 13,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 85,
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
        [_Location_column]: 12,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327], widget_inspector._Location);
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 434,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C329() {
      return C329 = dart.constList([C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C329 || CT.C329,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 437,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 438,
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
        [_Location_column]: 24,
        [_Location_line]: 436,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338, C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C337 || CT.C337,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 433,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.constList([C343 || CT.C343, C344 || CT.C344], widget_inspector._Location);
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C342 || CT.C342,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 445,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 447,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 448,
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
        [_Location_column]: 15,
        [_Location_line]: 446,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 455,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.constList([C351 || CT.C351, C352 || CT.C352], widget_inspector._Location);
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C350 || CT.C350,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 455,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C354() {
      return C354 = dart.constList([C355 || CT.C355, C356 || CT.C356], widget_inspector._Location);
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C354 || CT.C354,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 456,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 468,
        [_Location_file]: null
      });
    },
    get C358() {
      return C358 = dart.constList([C359 || CT.C359], widget_inspector._Location);
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C358 || CT.C358,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 467,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 465,
        [_Location_file]: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 467,
        [_Location_file]: null
      });
    },
    get C361() {
      return C361 = dart.constList([C362 || CT.C362, C363 || CT.C363, C364 || CT.C364], widget_inspector._Location);
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C361 || CT.C361,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C366() {
      return C366 = dart.constList([C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C366 || CT.C366,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 471,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 30,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 30
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C135 || CT.C135,
        [Icon_size]: null,
        [Icon_icon]: C371 || CT.C371
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 17,
        [_Location_line]: 476,
        [_Location_file]: null
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 17,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 17,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C373() {
      return C373 = dart.constList([C374 || CT.C374, C375 || CT.C375, C376 || CT.C376, C377 || CT.C377], widget_inspector._Location);
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C373 || CT.C373,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 475,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 475,
        [_Location_file]: null
      });
    },
    get C379() {
      return C379 = dart.constList([C380 || CT.C380, C381 || CT.C381], widget_inspector._Location);
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C379 || CT.C379,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 36,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C383() {
      return C383 = dart.constList([C384 || CT.C384, C385 || CT.C385], widget_inspector._Location);
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C383 || CT.C383,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 501,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 504,
        [_Location_file]: null
      });
    },
    get C387() {
      return C387 = dart.constList([C388 || CT.C388], widget_inspector._Location);
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C387 || CT.C387,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 503,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 524,
        [_Location_file]: null
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 525,
        [_Location_file]: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391, C392 || CT.C392], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C390 || CT.C390,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 523,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 523,
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
        [_Location_column]: 27,
        [_Location_line]: 522,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 520,
        [_Location_file]: null
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 521,
        [_Location_file]: null
      });
    },
    get C397() {
      return C397 = dart.constList([C398 || CT.C398, C399 || CT.C399], widget_inspector._Location);
    },
    get C396() {
      return C396 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C397 || CT.C397,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 519,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightElevation",
        [_Location_column]: 23,
        [_Location_line]: 512,
        [_Location_file]: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 23,
        [_Location_line]: 513,
        [_Location_file]: null
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 23,
        [_Location_line]: 514,
        [_Location_file]: null
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 515,
        [_Location_file]: null
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 516,
        [_Location_file]: null
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 517,
        [_Location_file]: null
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 519,
        [_Location_file]: null
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 535,
        [_Location_file]: null
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 536,
        [_Location_file]: null
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 23,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 23,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C401() {
      return C401 = dart.constList([C402 || CT.C402, C403 || CT.C403, C404 || CT.C404, C405 || CT.C405, C406 || CT.C406, C407 || CT.C407, C408 || CT.C408, C409 || CT.C409, C410 || CT.C410, C411 || CT.C411, C412 || CT.C412], widget_inspector._Location);
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C401 || CT.C401,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 511,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 511,
        [_Location_file]: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415, C416 || CT.C416], widget_inspector._Location);
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C414 || CT.C414,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 509,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 507,
        [_Location_file]: null
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 508,
        [_Location_file]: null
      });
    },
    get C418() {
      return C418 = dart.constList([C419 || CT.C419, C420 || CT.C420], widget_inspector._Location);
    },
    get C417() {
      return C417 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C418 || CT.C418,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 506,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C422() {
      return C422 = dart.constList([C423 || CT.C423], widget_inspector._Location);
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C422 || CT.C422,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 544,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 444,
        [_Location_file]: null
      });
    },
    get C425() {
      return C425 = dart.constList([C426 || CT.C426], widget_inspector._Location);
    },
    get C424() {
      return C424 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C425 || CT.C425,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 443,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 443,
        [_Location_file]: null
      });
    },
    get C428() {
      return C428 = dart.constList([C429 || CT.C429], widget_inspector._Location);
    },
    get C427() {
      return C427 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C428 || CT.C428,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 442,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 442,
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
        [_Location_column]: 13,
        [_Location_line]: 432,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 432,
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
        [_Location_column]: 12,
        [_Location_line]: 431,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C439() {
      return C439 = dart.constList([C440 || CT.C440], widget_inspector._Location);
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C439 || CT.C439,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 613,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 613,
        [_Location_file]: null
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 614,
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
        [_Location_column]: 15,
        [_Location_line]: 612,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 50,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 50
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 623,
        [_Location_file]: null
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 627,
        [_Location_file]: null
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 628,
        [_Location_file]: null
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C447() {
      return C447 = dart.constList([C448 || CT.C448, C449 || CT.C449, C450 || CT.C450, C451 || CT.C451], widget_inspector._Location);
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C447 || CT.C447,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 622,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 622,
        [_Location_file]: null
      });
    },
    get C453() {
      return C453 = dart.constList([C454 || CT.C454, C455 || CT.C455], widget_inspector._Location);
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C453 || CT.C453,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 649,
        [_Location_file]: null
      });
    },
    get C457() {
      return C457 = dart.constList([C458 || CT.C458], widget_inspector._Location);
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C457 || CT.C457,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 648,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 654,
        [_Location_file]: null
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 659,
        [_Location_file]: null
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 660,
        [_Location_file]: null
      });
    },
    get C460() {
      return C460 = dart.constList([C461 || CT.C461, C462 || CT.C462, C463 || CT.C463], widget_inspector._Location);
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C460 || CT.C460,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 653,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 652,
        [_Location_file]: null
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 653,
        [_Location_file]: null
      });
    },
    get C465() {
      return C465 = dart.constList([C466 || CT.C466, C467 || CT.C467], widget_inspector._Location);
    },
    get C464() {
      return C464 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C465 || CT.C465,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 651,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 680,
        [_Location_file]: null
      });
    },
    get C469() {
      return C469 = dart.constList([C470 || CT.C470], widget_inspector._Location);
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C469 || CT.C469,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 679,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 685,
        [_Location_file]: null
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 690,
        [_Location_file]: null
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 691,
        [_Location_file]: null
      });
    },
    get C472() {
      return C472 = dart.constList([C473 || CT.C473, C474 || CT.C474, C475 || CT.C475], widget_inspector._Location);
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C472 || CT.C472,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 684,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 683,
        [_Location_file]: null
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 684,
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
        [_Location_column]: 14,
        [_Location_line]: 682,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 711,
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
        [_Location_column]: 13,
        [_Location_line]: 710,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 716,
        [_Location_file]: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 720,
        [_Location_file]: null
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 721,
        [_Location_file]: null
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollPadding",
        [_Location_column]: 15,
        [_Location_line]: 722,
        [_Location_file]: null
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 724,
        [_Location_file]: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485, C486 || CT.C486, C487 || CT.C487, C488 || CT.C488, C489 || CT.C489], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C484 || CT.C484,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 715,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 714,
        [_Location_file]: null
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 715,
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
        [_Location_column]: 14,
        [_Location_line]: 713,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 743,
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
        [_Location_column]: 13,
        [_Location_line]: 742,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 15,
        [_Location_line]: 748,
        [_Location_file]: null
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 15,
        [_Location_line]: 752,
        [_Location_file]: null
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "cursorColor",
        [_Location_column]: 15,
        [_Location_line]: 753,
        [_Location_file]: null
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 754,
        [_Location_file]: null
      });
    },
    get C498() {
      return C498 = dart.constList([C499 || CT.C499, C500 || CT.C500, C501 || CT.C501, C502 || CT.C502], widget_inspector._Location);
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C498 || CT.C498,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 747,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 746,
        [_Location_file]: null
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 747,
        [_Location_file]: null
      });
    },
    get C504() {
      return C504 = dart.constList([C505 || CT.C505, C506 || CT.C506], widget_inspector._Location);
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C504 || CT.C504,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 745,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 774,
        [_Location_file]: null
      });
    },
    get C508() {
      return C508 = dart.constList([C509 || CT.C509], widget_inspector._Location);
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C508 || CT.C508,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 773,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 18,
        [_Location_line]: 776,
        [_Location_file]: null
      });
    },
    get C511() {
      return C511 = dart.constList([C512 || CT.C512], widget_inspector._Location);
    },
    get C510() {
      return C510 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C511 || CT.C511,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 776,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 782,
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
        [_Location_column]: 22,
        [_Location_line]: 782,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C518() {
      return C518 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 15,
        [_Location_line]: 780,
        [_Location_file]: null
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 781,
        [_Location_file]: null
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 782,
        [_Location_file]: null
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 783,
        [_Location_file]: null
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 786,
        [_Location_file]: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledColor",
        [_Location_column]: 15,
        [_Location_line]: 787,
        [_Location_file]: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "disabledTextColor",
        [_Location_column]: 15,
        [_Location_line]: 788,
        [_Location_file]: null
      });
    },
    get C517() {
      return C517 = dart.constList([C518 || CT.C518, C519 || CT.C519, C520 || CT.C520, C521 || CT.C521, C522 || CT.C522, C523 || CT.C523, C524 || CT.C524], widget_inspector._Location);
    },
    get C516() {
      return C516 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C517 || CT.C517,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 779,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 21,
        [_Location_line]: 778,
        [_Location_file]: null
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 779,
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
        [_Location_column]: 14,
        [_Location_line]: 777,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 619,
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
        [_Location_column]: 16,
        [_Location_line]: 617,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C534() {
      return C534 = dart.constList([C535 || CT.C535], widget_inspector._Location);
    },
    get C533() {
      return C533 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C534 || CT.C534,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 616,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C538() {
      return C538 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomInset",
        [_Location_column]: 7,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 612,
        [_Location_file]: null
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 616,
        [_Location_file]: null
      });
    },
    get C537() {
      return C537 = dart.constList([C538 || CT.C538, C539 || CT.C539, C540 || CT.C540], widget_inspector._Location);
    },
    get C536() {
      return C536 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C537 || CT.C537,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 610,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/signInScreen.dart"
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C543() {
      return C543 = dart.constList([C544 || CT.C544], widget_inspector._Location);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C543 || CT.C543,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C546() {
      return C546 = dart.constList([C547 || CT.C547], widget_inspector._Location);
    },
    get C545() {
      return C545 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C546 || CT.C546,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C549() {
      return C549 = dart.constList([C550 || CT.C550, C551 || CT.C551], widget_inspector._Location);
    },
    get C548() {
      return C548 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C549 || CT.C549,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C553() {
      return C553 = dart.constList([C554 || CT.C554, C555 || CT.C555], widget_inspector._Location);
    },
    get C552() {
      return C552 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C553 || CT.C553,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C557() {
      return C557 = dart.constList([C558 || CT.C558, C559 || CT.C559], widget_inspector._Location);
    },
    get C556() {
      return C556 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C557 || CT.C557,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C561() {
      return C561 = dart.constList([C562 || CT.C562], widget_inspector._Location);
    },
    get C560() {
      return C560 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C561 || CT.C561,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C568() {
      return C568 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C564() {
      return C564 = dart.constList([C565 || CT.C565, C566 || CT.C566, C567 || CT.C567, C568 || CT.C568], widget_inspector._Location);
    },
    get C563() {
      return C563 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C564 || CT.C564,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C573() {
      return C573 = dart.constList([C574 || CT.C574], widget_inspector._Location);
    },
    get C572() {
      return C572 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C573 || CT.C573,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C576() {
      return C576 = dart.constList([C577 || CT.C577, C578 || CT.C578, C579 || CT.C579, C580 || CT.C580, C581 || CT.C581], widget_inspector._Location);
    },
    get C575() {
      return C575 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C576 || CT.C576,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/homeView.dart"
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 17,
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
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 33,
        [_Location_line]: 18,
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
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C590() {
      return C590 = dart.constList([C591 || CT.C591], widget_inspector._Location);
    },
    get C589() {
      return C589 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C590 || CT.C590,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C593() {
      return C593 = dart.constList([C594 || CT.C594], widget_inspector._Location);
    },
    get C592() {
      return C592 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C593 || CT.C593,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/chatBoxView.dart"
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C596() {
      return C596 = dart.constList([C597 || CT.C597, C598 || CT.C598], widget_inspector._Location);
    },
    get C595() {
      return C595 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C596 || CT.C596,
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
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C17;
  let C16;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C25;
  let C23;
  let C22;
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
  checkOutB.CheckingIn = class CheckingIn extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20.0))}), onPressed: dart.fn(() => {
                core.print("pressed redeem:)");
                dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Please select your options", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Check In", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextToLocationPage())}));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new flat_button.FlatButton.new({child: new text.Text.new("I have a Reservation", {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), onPressed: dart.fn(() => {
                          navigator.Navigator.of(context).pop(core.Object);
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), BuildContextToReservationListPage())}));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), BuildContextToAlertDialog())});
              }, VoidToNull()), child: new basic.Padding.new({padding: C26 || CT.C26, child: new text.Text.new("Check In", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new basic.SizedBox.new({width: 30.0, height: 30.0, $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48});
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
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  let C59;
  let C62;
  let C61;
  let C60;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  ReservationView.ReservationView = class ReservationView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.teal, title: new text.Text.new("Help Chat", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C59 || CT.C59})]), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
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
  let C73;
  let C74;
  let C72;
  let C71;
  let C75;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C84;
  let C85;
  let C81;
  let C80;
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
  let C101;
  let C97;
  let C96;
  navigation.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(10.0, 10.0, 10.0, 10.0), color: colors.Colors.teal, height: 80.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new text.Text.new("Rental Manager Administrator", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, color: colors.Colors.white, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), new basic.Row.new({children: JSArrayOfWidget().of([new material_button.MaterialButton.new({color: colors.Colors.teal, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({side: new borders.BorderSide.new({color: colors.Colors.white})}), onPressed: dart.fn(() => {
                    core.print("Pressed Support button!!");
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new testlist.ReservationListPage.new({$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), BuildContextToReservationListPage())}));
                  }, VoidToNull()), child: new text.Text.new("Admin Login", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C89 || CT.C89})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
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
  let C102;
  const title$ = dart.privateName(navigation, "_NavigationBar.title");
  navigation._NavigationBar = class _NavigationBar extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C102 || CT.C102});
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
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C108;
  let C107;
  let C113;
  let C114;
  let C112;
  let C111;
  let C117;
  let C118;
  let C116;
  let C115;
  let C121;
  let C120;
  let C119;
  let C124;
  let C125;
  let C126;
  let C123;
  let C122;
  let C129;
  let C130;
  let C128;
  let C127;
  let C131;
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C133;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C132;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Color_value = dart.privateName(ui, "Color.value");
  let C135;
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C136;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C134;
  let C139;
  let C140;
  let C141;
  let C142;
  let C138;
  let C137;
  let C145;
  let C146;
  let C144;
  let C143;
  let C149;
  let C150;
  let C148;
  let C147;
  let C152;
  let C151;
  let C155;
  let C156;
  let C157;
  let C158;
  let C154;
  let C153;
  let C161;
  let C162;
  let C160;
  let C159;
  let C165;
  let C164;
  let C163;
  let C168;
  let C169;
  let C167;
  let C166;
  let C172;
  let C171;
  let C170;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C178;
  let C177;
  let C182;
  let C181;
  let C180;
  let C185;
  let C186;
  let C184;
  let C183;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C192;
  let C191;
  let C196;
  let C195;
  let C194;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C204;
  let C202;
  let C201;
  let C205;
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
  let C218;
  let C207;
  let C206;
  let C221;
  let C222;
  let C220;
  let C219;
  let C225;
  let C226;
  let C224;
  let C223;
  let C229;
  let C230;
  let C228;
  let C227;
  let C233;
  let C232;
  let C231;
  let C236;
  let C237;
  let C235;
  let C234;
  let C240;
  let C239;
  let C238;
  let C243;
  let C244;
  let C242;
  let C241;
  let C245;
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
  let C258;
  let C247;
  let C246;
  let C261;
  let C262;
  let C260;
  let C259;
  let C265;
  let C266;
  let C264;
  let C263;
  let C269;
  let C268;
  let C267;
  let C272;
  let C273;
  let C271;
  let C270;
  let C276;
  let C275;
  let C274;
  let C277;
  let C280;
  let C281;
  let C279;
  let C278;
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
  let C293;
  let C296;
  let C297;
  let C295;
  let C294;
  let C300;
  let C301;
  let C299;
  let C298;
  let C304;
  let C303;
  let C302;
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
  let C321;
  let C319;
  let C318;
  let C324;
  let C323;
  let C322;
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
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), new text.Text.new("Welcome", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.username = text;
                      core.print("First text field: " + dart.str(text));
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C131 || CT.C131, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.password = text;
                    }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({contentPadding: new edge_insets.EdgeInsets.fromLTRB(20.0, 10.0, 10.0, 10.0), border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C151 || CT.C151}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("LOGIN", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170})]), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                          let e = (yield authHandler.signIn(this.username, this.password));
                          core.print("on Press Error: " + dart.notNull(e));
                          if (e === "false") {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Your Email needs to be verified.", {$creationLocationd_0dea112b090073317d4: C177 || CT.C177}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C180 || CT.C180}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C183 || CT.C183})]), $creationLocationd_0dea112b090073317d4: C187 || CT.C187}), BuildContextToAlertDialog())});
                          } else if (dart.test(signInScreen.ErrorDetect(e))) {
                            dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new(signInScreen.errorDetect(e, {pos: 1}), {$creationLocationd_0dea112b090073317d4: C191 || CT.C191}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("CANCEL", {$creationLocationd_0dea112b090073317d4: C194 || CT.C194}), onPressed: dart.fn(() => {
                                      navigator.Navigator.of(context).pop(core.Object);
                                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C197 || CT.C197})]), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), BuildContextToAlertDialog())});
                          } else {
                            navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C205 || CT.C205}), BuildContextToHomeView())}));
                          }
                        }).bind(this)), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C206 || CT.C206}), $creationLocationd_0dea112b090073317d4: C219 || CT.C219})]), $creationLocationd_0dea112b090073317d4: C223 || CT.C223}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new image.Image.new({image: new _network_image_web.NetworkImage.new("https://pluspng.com/img-png/google-logo-png-open-2000.png"), height: 30.0, $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), new basic.Center.new({child: new text.Text.new("Sign In with Google", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C234 || CT.C234}), $creationLocationd_0dea112b090073317d4: C238 || CT.C238})]), $creationLocationd_0dea112b090073317d4: C241 || CT.C241}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                          navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new homeView.HomeView.new({$creationLocationd_0dea112b090073317d4: C245 || CT.C245}), BuildContextToHomeView())}));
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), $creationLocationd_0dea112b090073317d4: C259 || CT.C259})]), $creationLocationd_0dea112b090073317d4: C263 || CT.C263}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C267 || CT.C267}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("New to Rental Manager?", {style: new text_style.TextStyle.new({fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C270 || CT.C270}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.SignUpPage.new({$creationLocationd_0dea112b090073317d4: C277 || CT.C277}), BuildContextToSignUpPage())}));
                      }, VoidToNull()), child: new text.Text.new("Register", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontFamily: "Montserrat", fontWeight: ui.FontWeight.bold, decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C278 || CT.C278}), $creationLocationd_0dea112b090073317d4: C282 || CT.C282})]), $creationLocationd_0dea112b090073317d4: C286 || CT.C286}), new basic.SizedBox.new({height: 15.0, $creationLocationd_0dea112b090073317d4: C290 || CT.C290}), new basic.Center.new({child: new container.Container.new({child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                        navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({builder: dart.fn(context => new signInScreen.ResetPassword.new({$creationLocationd_0dea112b090073317d4: C293 || CT.C293}), BuildContextToResetPassword())}));
                      }, VoidToNull()), child: new text.Text.new("Forgot Password", {style: new text_style.TextStyle.new({color: colors.Colors.green, fontWeight: ui.FontWeight.bold, fontFamily: "Montserrat", decoration: ui.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: C294 || CT.C294}), $creationLocationd_0dea112b090073317d4: C298 || CT.C298}), $creationLocationd_0dea112b090073317d4: C302 || CT.C302}), $creationLocationd_0dea112b090073317d4: C305 || CT.C305}), new basic.Row.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C308 || CT.C308})]), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318}), $creationLocationd_0dea112b090073317d4: C322 || CT.C322});
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
  let C327;
  let C326;
  let C325;
  let C330;
  let C331;
  let C329;
  let C328;
  let C334;
  let C335;
  let C333;
  let C332;
  let C338;
  let C339;
  let C340;
  let C337;
  let C336;
  let C343;
  let C344;
  let C342;
  let C341;
  let C347;
  let C348;
  let C346;
  let C345;
  let C351;
  let C352;
  let C350;
  let C349;
  let C355;
  let C356;
  let C354;
  let C353;
  let C359;
  let C358;
  let C357;
  let C362;
  let C363;
  let C364;
  let C361;
  let C360;
  let C367;
  let C368;
  let C366;
  let C365;
  let C369;
  let C371;
  let C370;
  let C374;
  let C375;
  let C376;
  let C377;
  let C373;
  let C372;
  let C380;
  let C381;
  let C379;
  let C378;
  let C384;
  let C385;
  let C383;
  let C382;
  let C388;
  let C387;
  let C386;
  let C391;
  let C392;
  let C390;
  let C389;
  let C395;
  let C394;
  let C393;
  let C398;
  let C399;
  let C397;
  let C396;
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
  let C412;
  let C401;
  let C400;
  let C415;
  let C416;
  let C414;
  let C413;
  let C419;
  let C420;
  let C418;
  let C417;
  let C423;
  let C422;
  let C421;
  let C426;
  let C425;
  let C424;
  let C429;
  let C428;
  let C427;
  let C432;
  let C433;
  let C434;
  let C431;
  let C430;
  let C437;
  let C436;
  let C435;
  signInScreen._ResetPasswordState = class _ResetPasswordState extends framework.State$(signInScreen.ResetPassword) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reset PassWord", {$creationLocationd_0dea112b090073317d4: C325 || CT.C325}), backgroundColor: colors.Colors.teal, leading: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.arrow_back_ios, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C328 || CT.C328}), onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.Object), VoidTobool()), $creationLocationd_0dea112b090073317d4: C332 || CT.C332}), $creationLocationd_0dea112b090073317d4: C336 || CT.C336}), backgroundColor: colors.Colors.white, body: new safe_area.SafeArea.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C341 || CT.C341}), new text.Text.new("Rental Manager", {style: new text_style.TextStyle.new({fontFamily: "Pacifico", fontSize: 20.0, color: colors.Colors.teal.shade900, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C345 || CT.C345}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C349 || CT.C349}), new text.Text.new("Enter your email address below", {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal.shade900, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C353 || CT.C353}), new basic.SizedBox.new({height: 20.0, width: 150.0, child: new divider.Divider.new({color: colors.Colors.teal.shade900, $creationLocationd_0dea112b090073317d4: C357 || CT.C357}), $creationLocationd_0dea112b090073317d4: C360 || CT.C360}), new basic.SizedBox.new({height: 10.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C365 || CT.C365}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                      this.email = text;
                    }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C369 || CT.C369, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Enter your Email Address", prefixIcon: C370 || CT.C370, contentPadding: C369 || CT.C369}), $creationLocationd_0dea112b090073317d4: C372 || CT.C372}), $creationLocationd_0dea112b090073317d4: C378 || CT.C378}), new basic.SizedBox.new({height: 20.0, width: 150.0, $creationLocationd_0dea112b090073317d4: C382 || CT.C382}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C386 || CT.C386}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({highlightElevation: 0.0, splashColor: colors.Colors.greenAccent, highlightColor: colors.Colors.green, elevation: 0.0, color: colors.Colors.green, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(30.0)}), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Center.new({child: new text.Text.new("Send Verification Email", {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.white, fontFamily: "Montserrat"}), $creationLocationd_0dea112b090073317d4: C389 || CT.C389}), $creationLocationd_0dea112b090073317d4: C393 || CT.C393})]), $creationLocationd_0dea112b090073317d4: C396 || CT.C396}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                        }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(7.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C400 || CT.C400}), $creationLocationd_0dea112b090073317d4: C413 || CT.C413})]), $creationLocationd_0dea112b090073317d4: C417 || CT.C417}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C421 || CT.C421})]), $creationLocationd_0dea112b090073317d4: C424 || CT.C424}), $creationLocationd_0dea112b090073317d4: C427 || CT.C427}), $creationLocationd_0dea112b090073317d4: C430 || CT.C430}), $creationLocationd_0dea112b090073317d4: C435 || CT.C435});
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
  let C440;
  let C439;
  let C438;
  let C443;
  let C444;
  let C442;
  let C441;
  let C445;
  let C448;
  let C449;
  let C450;
  let C451;
  let C447;
  let C446;
  let C454;
  let C455;
  let C453;
  let C452;
  let C458;
  let C457;
  let C456;
  let C461;
  let C462;
  let C463;
  let C460;
  let C459;
  let C466;
  let C467;
  let C465;
  let C464;
  let C470;
  let C469;
  let C468;
  let C473;
  let C474;
  let C475;
  let C472;
  let C471;
  let C478;
  let C479;
  let C477;
  let C476;
  let C482;
  let C481;
  let C480;
  let C485;
  let C486;
  let C487;
  let C488;
  let C489;
  let C484;
  let C483;
  let C492;
  let C493;
  let C491;
  let C490;
  let C496;
  let C495;
  let C494;
  let C499;
  let C500;
  let C501;
  let C502;
  let C498;
  let C497;
  let C505;
  let C506;
  let C504;
  let C503;
  let C509;
  let C508;
  let C507;
  let C512;
  let C511;
  let C510;
  let C515;
  let C514;
  let C513;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  let C523;
  let C524;
  let C517;
  let C516;
  let C527;
  let C528;
  let C526;
  let C525;
  let C531;
  let C532;
  let C530;
  let C529;
  let C535;
  let C534;
  let C533;
  let C538;
  let C539;
  let C540;
  let C537;
  let C536;
  signInScreen._State = class _State extends framework.State$(signInScreen.SignUpPage) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomInset: false, appBar: new app_bar.AppBar.new({title: new text.Text.new("Account Sign Up", {$creationLocationd_0dea112b090073317d4: C438 || CT.C438}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C441 || CT.C441}), body: new basic.Center.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.email = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, scrollPadding: C445 || CT.C445, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Email", prefixIcon: C370 || CT.C370, contentPadding: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C446 || CT.C446}), $creationLocationd_0dea112b090073317d4: C452 || CT.C452}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C456 || CT.C456}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameFirst = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "First Name", prefixIcon: C134 || CT.C134, contentPadding: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C459 || CT.C459}), $creationLocationd_0dea112b090073317d4: C464 || CT.C464}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C468 || CT.C468}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.usernameLast = text;
                  }, StringToNull()), cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Lastname", prefixIcon: C134 || CT.C134, contentPadding: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C471 || CT.C471}), $creationLocationd_0dea112b090073317d4: C476 || CT.C476}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C480 || CT.C480}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.password = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, scrollPadding: C445 || CT.C445, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Password", prefixIcon: C151 || CT.C151, contentPadding: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C483 || CT.C483}), $creationLocationd_0dea112b090073317d4: C490 || CT.C490}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C494 || CT.C494}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 2.0, horizontal: 450.0}), child: new text_field.TextField.new({onChanged: dart.fn(text => {
                    this.confirmpw = text;
                  }, StringToNull()), obscureText: true, cursorColor: colors.Colors.teal.shade900, decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new({borderRadius: C132 || CT.C132, borderSide: new borders.BorderSide.new({color: colors.Colors.transparent, width: 1.0})}), labelText: "Confirm Password", prefixIcon: C151 || CT.C151, contentPadding: C445 || CT.C445}), $creationLocationd_0dea112b090073317d4: C497 || CT.C497}), $creationLocationd_0dea112b090073317d4: C503 || CT.C503}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C507 || CT.C507}), new text.Text.new("Click sign up after entering all of above", {$creationLocationd_0dea112b090073317d4: C510 || CT.C510}), new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 20 * 5, child: new raised_button.RaisedButton.new({textColor: colors.Colors.white, color: colors.Colors.teal.shade900, child: new text.Text.new("SIGN UP", {$creationLocationd_0dea112b090073317d4: C513 || CT.C513}), onPressed: dart.fn(() => async.async(core.Null, function*() {
                  }), VoidToFutureOfNull()), padding: new edge_insets.EdgeInsets.all(10.0), disabledColor: colors.Colors.black, disabledTextColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C516 || CT.C516}), $creationLocationd_0dea112b090073317d4: C525 || CT.C525})]), $creationLocationd_0dea112b090073317d4: C529 || CT.C529}), $creationLocationd_0dea112b090073317d4: C533 || CT.C533}), $creationLocationd_0dea112b090073317d4: C536 || CT.C536});
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
  let C541;
  let C544;
  let C543;
  let C542;
  let C547;
  let C546;
  let C545;
  let C550;
  let C551;
  let C549;
  let C548;
  let C554;
  let C555;
  let C553;
  let C552;
  let C558;
  let C559;
  let C557;
  let C556;
  let C562;
  let C561;
  let C560;
  let C565;
  let C566;
  let C567;
  let C568;
  let C564;
  let C563;
  let C569;
  let C570;
  let C571;
  let C574;
  let C573;
  let C572;
  let C577;
  let C578;
  let C579;
  let C580;
  let C581;
  let C576;
  let C575;
  homeView.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C541 || CT.C541}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C542 || CT.C542}), this.contentBoard(context)]), $creationLocationd_0dea112b090073317d4: C545 || CT.C545}), $creationLocationd_0dea112b090073317d4: C548 || CT.C548});
    }
    contentBoard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(0.0), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([this.rightDashboard(framework.BuildContext._check(context))]), $creationLocationd_0dea112b090073317d4: C552 || CT.C552}), $creationLocationd_0dea112b090073317d4: C556 || CT.C556});
    }
    leftDashboard(context) {
      return new container.Container.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 2, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C132 || CT.C132}), child: new basic.Column.new({children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C560 || CT.C560}), $creationLocationd_0dea112b090073317d4: C563 || CT.C563});
    }
    rightDashboard(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.fromLTRB(5.0, 5.0, 5.0, 5.0), height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.65, width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({width: 10.0, color: colors.Colors.pink}), borderRadius: C132 || CT.C132}), child: new basic.Column.new({children: JSArrayOfWidget().of([new checkOutB.CheckingIn.new({$creationLocationd_0dea112b090073317d4: C569 || CT.C569}), new $return.Returning.new({$creationLocationd_0dea112b090073317d4: C570 || CT.C570}), new LandingView.Landing.new({$creationLocationd_0dea112b090073317d4: C571 || CT.C571})]), $creationLocationd_0dea112b090073317d4: C572 || CT.C572}), $creationLocationd_0dea112b090073317d4: C575 || CT.C575});
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
  let C582;
  let C585;
  let C584;
  let C583;
  let C588;
  let C587;
  let C586;
  let C591;
  let C590;
  let C589;
  let C594;
  let C593;
  let C592;
  let C597;
  let C598;
  let C596;
  let C595;
  chatBoxView.chatBoxView = class chatBoxView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.teal.shade100, body: new centerer.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navigation.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C582 || CT.C582}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C583 || CT.C583}), new actionButton.ReservationListView.new("Chating Controller Goes Here", {$creationLocationd_0dea112b090073317d4: C586 || CT.C586})]), $creationLocationd_0dea112b090073317d4: C589 || CT.C589}), $creationLocationd_0dea112b090073317d4: C592 || CT.C592}), $creationLocationd_0dea112b090073317d4: C595 || CT.C595});
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
  dart.trackLibraries("packages/RentalAdmin/views/ReservationView", {
    "package:RentalAdmin/views/inventory/checkOutB.dart": checkOutB,
    "package:RentalAdmin/views/ReservationView.dart": ReservationView,
    "package:RentalAdmin/widgets/navigation.dart": navigation,
    "package:RentalAdmin/widgets/signInScreen.dart": signInScreen,
    "package:RentalAdmin/views/homeView.dart": homeView,
    "package:RentalAdmin/views/chatBoxView.dart": chatBoxView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["inventory/checkOutB.dart","ReservationView.dart","../widgets/navigation.dart","../widgets/signInScreen.dart","homeView.dart","chatBoxView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,qCACI,gCAEa,sBAEhB,+CACgB,2BACP,uEACwB,mCAAW,uBAAS,qBACxC;AACgB,gBAAzB,WAAM;AA6BA,gBA5BN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,+FAMK,sBACX,uCACS,kBAAK,+EACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;AAEnB,0BADS,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY,2CAAmB;iGAInF,uCACS,kBAAK,6FACL;AACkB,0BAAjB,AAAY,uBAAT,OAAO;AACmE,0BAA7E,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;;uCAOzE,sDAGE,kBACL,oBACO,wCAAoB,aAAiB,iCAA6B,iMAI/E,+BACS,cACC;IAMpB;;;;;;EAEF;;;;;;;;MAjEsB,8BAAoB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;UCKjB;AACxB,YAAO,oCACS,yCACgB,2BACb,kBACT,qBACO,qCACO,0JAME,AAAK,mCACvB,sCACG,gCACa,sBAGhB;IAKV;;;QA3B2B;;AAAQ,mEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCMxB;AACxB,YAAO,uCACe,oCAAS,MAAI,MAAI,MAAI,cAC3B,4BACJ,aACD,sCACgC,+CACnB,sBAChB,kBACE,wCACO,0CACoB,2BACT,+BACJ,iEAEhB,6BACoB,sBAsDhB,+CACgB,2BACH,+DAEf,mCAAyB,oCACV;AACyB,oBAAjC,WAAM;AAEgF,oBAA7E,uCAAK,OAAO,EAAE,yCAA2B,QAAC,WAAY;2CAE3D,kBACL,uBACO,qCAAwB,yIAEhC,+BACM;IAMvB;;;QA7FyB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;IAiGnC;;;;;;UAIa;AACxB,YAAO;IAGT;;4CAP0B;;;AAApB;;EAA0B;;;;;;;;;;;;;ACnGI;IAAoB;;;;;;EAC1D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyCoC;AAChC;AAC8B,UAA5B,MAAM,AAAc;;cACb;AACK,UAAZ,WAAM,KAAK;;MAEf;;UAuB0B;AACpB,wBAAkB;AACtB,YAAO,gCACC,4CACoB,2BAClB,mCACG,yCACgC,yCACnB,sBAUhB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,mBACO,0CACO,0BACE,AAAK,uCACT,qBACK,kEAGnB,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;AACiB,sBAAhC,WAAM,AAAyB,gCAAL,IAAI;qDAGZ,AAAK,yEAGb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,8JAQjB,gCAAiB,aAAW,kEAC5B,gCACsB,gDAAoB,iBAAiB,gBAClD,yCACM,QAAC;AACK,sBAAf,gBAAW,IAAI;qDAKJ,mBACO,AAAK,yCACb,yDAEF,oCAAoB,MAAM,MAAM,MAAM,eAClC,oFAIM,mCACA,kCACP,oBAGA,iKASjB,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,iBACO,wCACK,aAEI,iCACF,8MAMX;AAKL,mCAAI,MAAM,AAAY,WAAD,QAAQ,eAAU;AACd,0BAA7B,WAAM,AAAmB,kCAAE,CAAC;AAC5B,8BAAI,AAAE,CAAD,KAAI;AAeD,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yGACK,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;gCAO7B,eAAG,yBAAY,CAAC;AAef,4BAdN,0CACa,OAAO,WACP,QAAC,WACD,mCACE,kBAAK,yBAAY,CAAC,QAAO,0EACf,sBACX,uCACS,kBAAK,iFACL;AACkB,sCAAjB,AAAY,uBAAT,OAAO;;;AAUQ,4BAHhC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;;wBAEjC,gDACmB,+BAAI,sBAEF,wCACI,wMAKlC,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,4BACS,wCACH,sEACI,iEAEV,+BAAgB,iEAChB,6BACS,kBACL,+BACO,wCACK,aAEI,iCACF,8MAMX;AAyBmC,0BAH/B,uCACP,OAAO,EACP,yCACa,QAAC,WAAY;wBAOjC,oCACmB,+BAAI,qBAEF,wCACI,wMAKlC,gCACU,iEAEV,sCACuC,yCACnB,sBAChB,kBACE,kCACO,0CAAsB,2EAE/B,+BAAgB,gEAChB,iCACS;AAIuC,wBAHlC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,oBACO,qCACW,iCACF,0BACW,gCACI,kNAKvC,gCACU,iEAEV,6BACS,oCAGE,iCACE;AAI0C,wBAHrC,uCACN,OAAO,EACP,yCACa,QAAC,WAAY;+CAEzB,kBACL,2BACO,qCACW,iCACS,gCACX,0BACe,2QAKvC,6BACoB;IAQhC;;;IAnZO;IAAU;IAAU;IAEtB,yBAAmB;IACjB;IACa;IA2BP,sBAAgB,6CACnB,sBACN,SACA;;;EAkXN;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,gCACC,mCACI,+BACC,kBAAK,+FACY,6BACX,sCACD,kBAAW,oCAA8B,2FACxC,cAAgB,AAAY,uBAAT,OAAO,0KAGjB,2BAClB,mCACG,gCACa,sBAChB,gCAAiB,aAAW,kEAC5B,kBACE,0BACO,0CACO,sBACF,aACI,AAAK,yCACI,iFAG3B,gCAAiB,aAAW,kEAC5B,kBACE,0CACO,0CACO,0BACE,AAAK,uCACT,mEAGd,gCACU,aACD,cACA,gCACS,AAAK,mJAGvB,gCAAiB,aAAW,kEAE3B,gCACqB,gDAAoB,iBAAiB,gBAClD,yCACI,QAAC;AACE,sBAAZ,aAAQ,IAAI;qDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kNAQf,gCAAiB,aAAW,kEAE5B,gCACU,gEAEV,sCACuC,yCACnB,sBAChB,+BAC2C,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,wDACe,kBACA,2CACG,gCACZ,YACG,4BACP,uEACe,wCAAsB,gBACrC,sCACgC,yCACnB,sBAChB,6BACS,kBACL,mCACO,wCACK,aAEI,iCACF,8MAMX;wBAAW,oCACF,+BAAI,qBAEF,wCACI,wMAKlC,gCACU;IAoDtB;;;IAxKO;;;EAyKT;;;;;;;;;;;;;AAI0B;IAAQ;;;;;;EAClC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,sDACqB,eAClB,+BACC,kBAAK,gGACY,qFAEpB,6BACG,yCACgC,yCACnB,sBACf,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACE,oBAAZ,aAAQ,IAAI;mDAGM,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,+LAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACU,oBAApB,qBAAgB,IAAI;mDAIF,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,oMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACS,oBAAnB,oBAAe,IAAI;mDAID,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACK,oBAAf,gBAAW,IAAI;mDAGJ,mBACO,AAAK,yEAGb,iDACE,oFAIM,mCACA,kCACP,oBAGA,kMAQf,gCACU,iEAET,gCACuB,gDAAoB,iBAAiB,gBAClD,yCACE,QAAC;AACM,oBAAhB,iBAAY,IAAI;mDAGL,mBACO,AAAK,yCACb,iDAEE,oFAIM,mCACA,kCACP,oBAGA,0MAQf,gCACU,iEAEV,kBAAK,yGACJ,+BACgD,AAAK,aAA5B,AAAY,AAAK,0BAAd,OAAO,gBAAe,KAAK,UACzC,+CACK,4BACJ,AAAK,oCACZ,kBAAK,kFACD;kBAEV,oCACmB,+BAAI,sBACF,wCACI;IAMtC;;;IA3LO;IAAO;IAAe;IAAc;IAAU;;;EA4LvD;;;;;;;;;;;;;;;kDACwB;AACtB,QAAG,AAAE,CAAD,YAAU;AACZ,YAAO;;AAEP,YAAO;;EAEX;kDAC0B;QAAQ;AAEjB,kBAAU,AAAE,CAAD,SAAO;AACxB,kBAAU,AAAO,OAAA,QAAC,GAAG;AACf,cAAM,AAAQ,OAAD,SAAO;AACjC,UAAO,AAAG,IAAA,QAAC;EAEf;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UC3xB4B;AACxB,YAAO,6CACmB,AAAK,mCACvB,gCACc,sBAChB,6FACA,gCACU,iEAEV,kBAAa,OAAO;IAI5B;iBAEuB;AACrB,YAAO,uCACe,+BAAI,aACjB,sCACgC,8CACnB,sBAEhB,kDAAe,OAAO;IAI9B;kBAEqC;AACnC,YAAO,sCACwC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa;IAK1B;mBAEsC;AACpC,YAAO,uCACe,oCAAS,KAAG,KAAG,KAAG,cACK,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACJ,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,eAC/B,8CACK,8BAAW,aAAkB,8DAGvC,gCACa,sBAChB,yFACA,sFACA;IAKR;;;QAjEoB;;AAAQ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCFjB;AACxB,YAAO,6CACmB,AAAK,mCACvB,sCACG,gCACa,sBAChB,6FACA,gCAAiB,iEACjB,yCAAoB;IAK9B;;;QAfuB;;AAAQ,2DAAW,GAAG;;EAAC","file":"ReservationView.ddc.js"}');
  // Exports:
  return {
    views__inventory__checkOutB: checkOutB,
    views__ReservationView: ReservationView,
    widgets__navigation: navigation,
    widgets__signInScreen: signInScreen,
    views__homeView: homeView,
    views__chatBoxView: chatBoxView
  };
});

//# sourceMappingURL=ReservationView.ddc.js.map
