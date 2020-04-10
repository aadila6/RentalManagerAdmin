define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__cloud_firestore__cloud_firestore, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const spacer = packages__flutter__src__widgets__actions.src__widgets__spacer;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const card = packages__flutter__material.src__material__card;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const testlist = Object.create(dart.library);
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToWidget = () => (BuildContextAndAsyncSnapshotToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, async$.AsyncSnapshot])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 22,
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
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 76,
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
        [_Location_column]: 27,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 17,
        [_Location_line]: 74,
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
        [_Location_column]: 25,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 21,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 54,
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
        [_Location_column]: 16,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 20,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 20
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 148,
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
        [_Location_column]: 33,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 35,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 145,
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
        [_Location_column]: 29,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 143,
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
        [_Location_column]: 25,
        [_Location_line]: 142,
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
        [_Location_column]: 25,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 169,
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
        [_Location_column]: 29,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 166,
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
        [_Location_column]: 25,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 141,
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
        [_Location_column]: 21,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 138,
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
        [_Location_column]: 24,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 135,
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
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 134,
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
        [_Location_column]: 18,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 133,
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
        [_Location_column]: 16,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/testlist.dart"
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
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C32;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C38;
  let C37;
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
  let C54;
  let C53;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C65;
  let C64;
  let C69;
  let C70;
  let C68;
  let C67;
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
  let C82;
  let C81;
  let C86;
  let C85;
  let C84;
  testlist._ReservationListPage = class _ReservationListPage extends framework.State$(testlist.ReservationListPage) {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.yellow, body: this.reservation(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    reservation() {
      return new container.Container.new({child: new async$.FutureBuilder.new({future: this.getFirestoreData(), builder: dart.fn((_, snapshot) => {
            if (dart.equals(snapshot.connectionState, async$.ConnectionState.waiting)) {
              return new basic.Center.new({child: new text.Text.new("Loading...", {style: new text_style.TextStyle.new({fontSize: 10.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
            } else {
              return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(snapshot.data, 'length')), itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new("Data", {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), subtitle: new text.Text.new("Total amount: ", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
            }
          }, BuildContextAndAsyncSnapshotToWidget()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    getFirestoreData() {
      return async.async(dart.dynamic, function* getFirestoreData() {
        let firestore = cloud_firestore.Firestore.instance;
        let itemListDOC = (yield firestore.collection("reservation").getDocuments());
        return itemListDOC.documents;
      });
    }
    customCell(index, snapshot) {
      return new material.Material.new({child: new ink_well.InkWell.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new box_shadow.BoxShadow.new({color: colors.Colors.grey, blurRadius: 10.0})])}), child: new card.Card.new({child: new container.Container.new({child: new basic.Padding.new({padding: C32 || CT.C32, child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Stack.new({children: JSArrayOfWidget().of([new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["name"])), {style: new text_style.TextStyle.new({fontSize: 15.0, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["startTime"])), {style: new text_style.TextStyle.new({fontSize: 15.0, color: colors.Colors.teal.shade900}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37})]), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new spacer.Spacer.new({$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.Stack.new({children: JSArrayOfWidget().of([new text.Text.new(">", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.teal}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), new text.Text.new(core.String._check(dart.dsend(dart.dload(dart.dsend(snapshot.data, '_get', [index]), 'data'), '_get', ["status"])), {style: new text_style.TextStyle.new({fontSize: 10.0, color: colors.Colors.teal}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60})]), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
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
  dart.trackLibraries("packages/RentalAdmin/widgets/testlist", {
    "package:RentalAdmin/widgets/testlist.dart": testlist
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["testlist.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,6CAKqB,4BAClB;IACZ;;AA4BE,YAAO,qCACI,sCACK,kCACC,SAAC,GAAG;AACX,gBAA6B,YAAzB,AAAS,QAAD,kBAAoC;AAC9C,oBAAO,8BACE,kBACL,sBACO,wCACK,kBACa;;AAK7B,oBAAgB,8DACa,WAAd,AAAS,QAAD,gCACN,SAAc,SAAa,UACpC,mCACD,kBAEH,4EAEM,kBAEN;;;IAMlB;;AAEuB;AACf,wBAAsB;AACd,2BACV,MAAM,AAAU,AAA0B,SAA3B,YAAY;AAC/B,cAAO,AAAY,YAAD;MACpB;;eAUsB,OAAqB;AAsBzC,YAAO,mCACE,iCAEE,yCACO,iDACC,yBACT,qCACgB,gCACF,mBAIX,0BACE,oCACE,sDAEE,gCACa,sBAChB,sCACuC,+CACnB,sBAChB,+BACoB,sBAChB,gCACoB,sBAChB,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,mBACnB,wCACK,kBACa,+EAG3B,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,wBACnB,wCACK,aACI,AAAK,8MAO/B,gFACA,+BACoB,sBAChB,kBACE,aACO,wCACK,aACI,qMAO1B,qCAC2B,WAAJ,WAAR,WAAb,AAAS,QAAD,gBAAM,KAAK,sBAAO,qBACnB,wCACK,aACI;IAWpC;;;;;EACF","file":"testlist.ddc.js"}');
  // Exports:
  return {
    widgets__testlist: testlist
  };
});

//# sourceMappingURL=testlist.ddc.js.map
