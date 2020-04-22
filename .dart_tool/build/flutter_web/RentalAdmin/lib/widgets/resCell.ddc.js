define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__cloud_firestore__cloud_firestore, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const icons = packages__flutter__material.src__material__icons;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const resCell = Object.create(dart.library);
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 51,
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
        [_Location_column]: 16,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 51,
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
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 58,
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
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 75,
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
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 126,
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
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 15,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 143,
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
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 34,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 51,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 19,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 17,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 17,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
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
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/resCell.dart"
      });
    }
  });
  const passedFirestoreData$ = dart.privateName(resCell, "reservationCell.passedFirestoreData");
  resCell.reservationCell = class reservationCell extends framework.StatefulWidget {
    get passedFirestoreData() {
      return this[passedFirestoreData$];
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
    this[passedFirestoreData$] = passedFirestoreData;
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
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  let C24;
  let C23;
  let C22;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C49;
  let C48;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C74;
  let C73;
  let C84;
  let C85;
  let C86;
  let C83;
  let C82;
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C96;
  let C95;
  resCell._reservationCell = class _reservationCell extends framework.State$(resCell.reservationCell) {
    pickedUp() {
      return async.async(dart.dynamic, (function* pickedUp() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).updateData(new (IdentityMapOfString$dynamic()).from(["status", "Picked Up"])).catchError(dart.fn(error => core.print(error), dynamicTovoid()));
      }).bind(this));
    }
    returned() {
      return async.async(dart.dynamic, (function* returned() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).updateData(new (IdentityMapOfString$dynamic()).from(["status", "Returned"])).catchError(dart.fn(error => core.print(error), dynamicTovoid()));
      }).bind(this));
    }
    cancelReservation() {
      return async.async(dart.dynamic, (function* cancelReservation() {
        let firestore = cloud_firestore.Firestore.instance;
        yield firestore.collection("reservation").document(dart.toString(this.widget.passedFirestoreData.documentID)).delete().catchError(dart.fn(error => core.print(error), dynamicTovoid()));
      }).bind(this));
    }
    build(context) {
      if (dart.equals(this.widget.passedFirestoreData._get("status"), "Reserved")) {
        resCell.action = "Pick Up";
      } else if (dart.equals(this.widget.passedFirestoreData._get("status"), "Picked Up")) {
        resCell.action = "Return";
      }
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.teal, title: new text.Text.new("Reservation Details", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 20.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- item name: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("name")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- start time: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("startTime")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- end time: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("endTime")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- quantity: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("amount")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "- item status: ", style: new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic, fontSize: 16.0})}), new text_span.TextSpan.new({text: core.String._check(this.widget.passedFirestoreData._get("status")), style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 18.0, color: colors.Colors.teal})})])}), {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.SizedBox.new({height: 50.0, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new basic.SizedBox.new({height: 50.0, width: 1 / 0, child: new raised_button._RaisedButtonWithIcon.new({color: colors.Colors.teal, textColor: colors.Colors.white, elevation: 2.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(40.0)}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    if (dart.equals(this.widget.passedFirestoreData._get("status"), "Reserved")) {
                      this.pickedUp();
                    } else if (dart.equals(this.widget.passedFirestoreData._get("status"), "Picked Up")) {
                      this.returned();
                    }
                    navigator.Navigator.pop(core.Object, context);
                  }).bind(this)), VoidToFutureOfNull()), icon: new icon.Icon.new(icons.Icons.insert_emoticon, {size: 30.0, $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), label: new text.Text.new(resCell.action, {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), new basic.SizedBox.new({height: 50.0, width: 1 / 0, child: new raised_button._RaisedButtonWithIcon.new({color: colors.Colors.teal, textColor: colors.Colors.white, elevation: 2.0, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(40.0)}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    this.cancelReservation();
                    navigator.Navigator.pop(core.Object, context);
                  }).bind(this)), VoidToFutureOfNull()), icon: new icon.Icon.new(icons.Icons.cancel, {size: 30.0, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), label: new text.Text.new("Cancel Reservation", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82})]), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
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
  dart.trackLibraries("packages/RentalAdmin/widgets/resCell", {
    "package:RentalAdmin/widgets/resCell.dart": resCell
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["resCell.dart"],"names":[],"mappings":"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","file":"resCell.ddc.js"}');
  // Exports:
  return {
    widgets__resCell: resCell
  };
});

//# sourceMappingURL=resCell.ddc.js.map
