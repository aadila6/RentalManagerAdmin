define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/cloud_firestore/cloud_firestore', 'packages/intl/intl'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__cloud_firestore__cloud_firestore, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const intl = packages__intl__intl.intl;
  const ItemDetails = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamBuilderOfDocumentSnapshot = () => (StreamBuilderOfDocumentSnapshot = dart.constFn(async$.StreamBuilder$(cloud_firestore.DocumentSnapshot)))();
  let BuildContextAndAsyncSnapshotToText = () => (BuildContextAndAsyncSnapshotToText = dart.constFn(dart.fnType(text.Text, [framework.BuildContext, async$.AsyncSnapshot])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let DocumentSnapshotToNull = () => (DocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [cloud_firestore.DocumentSnapshot])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 34,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
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
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 73,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 105,
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
        [_Location_column]: 17,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 104,
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
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 103,
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
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 122,
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
        [_Location_column]: 20,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 126,
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
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 29,
        [_Location_line]: 152,
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
        [_Location_column]: 31,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 25,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 25,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 25,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 215,
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
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 216,
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
        [_Location_column]: 18,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/ItemDetails.dart"
      });
    }
  });
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
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C12;
  let C13;
  let C10;
  let C9;
  let C16;
  let C17;
  let C18;
  let C19;
  let C15;
  let C14;
  let C22;
  let C23;
  let C21;
  let C20;
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
  let C24;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C47;
  let C46;
  let C55;
  let C54;
  let C53;
  let C58;
  let C59;
  let C57;
  let C56;
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
  let C73;
  let C72;
  let C71;
  let C76;
  let C75;
  let C74;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C86;
  let C85;
  let C90;
  let C91;
  let C89;
  let C88;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C110;
  let C107;
  let C106;
  let C113;
  let C112;
  let C111;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C122;
  let C121;
  ItemDetails._DetailPage = class _DetailPage extends framework.State$(ItemDetails.DetailPage) {
    reserveButton() {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 16.0}), width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) / 5, child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
            core.print("button pressed! (reserve)");
            this.testingReservations(core.String._check(dart.dload(this.widget.itemSelected, 'documentID')));
          }, VoidToNull()), child: new text.Text.new("Check Out", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), color: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
    top() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["imageURL"])))})}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    descriptionText() {
      return new text.Text.new(core.String._check(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
    amount() {
      return new container.Container.new({child: new basic.Align.new({alignment: alignment.Alignment.center, child: new (StreamBuilderOfDocumentSnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").document(core.String._check(dart.dload(this.widget.itemSelected, 'documentID'))).snapshots(), builder: dart.fn((context, snapshot) => {
              if (!dart.test(snapshot.hasData)) return C24 || CT.C24;
              return new text.Text.new("Instock Amount: " + dart.str(dart.dsend(snapshot.data, '_get', ["# of items"])), {style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.green, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
            }, BuildContextAndAsyncSnapshotToText()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
    bottom() {
      return new container.Container.new({alignment: alignment.Alignment.center, height: dart.notNull(media_query.MediaQuery.of(this.context).size.height) * 0.5 / 2, width: dart.notNull(media_query.MediaQuery.of(this.context).size.width) * 0.5 / 2, padding: new edge_insets.EdgeInsets.fromLTRB(30.0, 5.0, 30.0, 30.0), child: new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([this.descriptionText(), this.amount(), this.reserveButton()]), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(dart.str(dart.dsend(dart.dload(this.widget.itemSelected, 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C53 || CT.C53}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), backgroundColor: colors.Colors.blueGrey, body: new scaffold.Scaffold.new({body: new basic.Row.new({children: JSArrayOfWidget().of([this.top(), this.bottom()]), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
    testingReservations(itemID) {
      return async.async(dart.dynamic, (function* testingReservations() {
        core.print(itemID);
        let now = new core.DateTime.now();
        let time = new intl.DateFormat.new("yyyy-MM-dd hh:mm:ss").format(now);
        let pickUpBefore = now.add(new core.Duration.new({minutes: 10}));
        core.print("Reservation Created time: " + dart.notNull(time));
        core.print("Reservation pickup before time: " + dart.notNull(new intl.DateFormat.new("yyyy-MM-dd hh:mm:ss").format(pickUpBefore)));
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Check Out Complete", {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), BuildContextToAlertDialog())});
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Swipe ID card", {$creationLocationd_0dea112b090073317d4: C85 || CT.C85}), content: new text_field.TextField.new({controller: ItemDetails._textFieldController, decoration: new input_decorator.InputDecoration.new({hintText: "Please enter SID#"}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Cancel", {$creationLocationd_0dea112b090073317d4: C92 || CT.C92}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), new flat_button.FlatButton.new({child: new text.Text.new("Confirm", {$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), onPressed: dart.fn(() => {
                  core.print("URL Request sent");
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), BuildContextToAlertDialog())});
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
        dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Check Out Complete", {$creationLocationd_0dea112b090073317d4: C111 || CT.C111}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("OK", {$creationLocationd_0dea112b090073317d4: C114 || CT.C114}), onPressed: dart.fn(() => {
                  navigator.Navigator.of(context).pop(core.Object);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C117 || CT.C117})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), BuildContextToAlertDialog())});
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
  dart.trackLibraries("packages/RentalAdmin/views/inventory/ItemDetails", {
    "package:RentalAdmin/views/inventory/ItemDetails.dart": ItemDetails
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ItemDetails.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMM;;;;;;;AAKF,YAAO;IACT;;;QALiB;;;AAAjB;;EAA+B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"ItemDetails.ddc.js"}');
  // Exports:
  return {
    views__inventory__ItemDetails: ItemDetails
  };
});

//# sourceMappingURL=ItemDetails.ddc.js.map
