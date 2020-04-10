define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__cloud_firestore__cloud_firestore, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const divider = packages__flutter__material.src__material__divider;
  const material_button = packages__flutter__material.src__material__material_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const reservationCell = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 27,
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
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
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
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 34,
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 41,
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
        [_Location_column]: 17,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 54,
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
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 52,
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
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 65,
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
        [_Location_column]: 26,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 76,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 71,
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
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 75,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 75,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 42,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 113,
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
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 110,
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
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 139,
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
        [_Location_column]: 17,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 154,
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
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 151,
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
        [_Location_column]: 13,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 172,
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
        [_Location_column]: 13,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 182,
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
        [_Location_column]: 17,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minWidth",
        [_Location_column]: 15,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106, C107 || CT.C107, C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 32,
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
        [_Location_column]: 16,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 31,
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
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 30,
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
        [_Location_column]: 12,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/widgets/reservationCell.dart"
      });
    }
  });
  const passedFirestoreData$ = dart.privateName(reservationCell, "reservationCell.passedFirestoreData");
  reservationCell.reservationCell = class reservationCell$ extends framework.StatefulWidget {
    get passedFirestoreData() {
      return this[passedFirestoreData$];
    }
    set passedFirestoreData(value) {
      super.passedFirestoreData = value;
    }
    createState() {
      core.print(this.passedFirestoreData.data);
      return new reservationCell._reservationCell.new();
    }
  };
  (reservationCell.reservationCell.new = function(opts) {
    let passedFirestoreData = opts && 'passedFirestoreData' in opts ? opts.passedFirestoreData : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[passedFirestoreData$] = passedFirestoreData;
    reservationCell.reservationCell.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = reservationCell.reservationCell.prototype;
  dart.addTypeTests(reservationCell.reservationCell);
  dart.setMethodSignature(reservationCell.reservationCell, () => ({
    __proto__: dart.getMethods(reservationCell.reservationCell.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(reservationCell.reservationCell, "package:RentalAdmin/widgets/reservationCell.dart");
  dart.setFieldSignature(reservationCell.reservationCell, () => ({
    __proto__: dart.getFields(reservationCell.reservationCell.__proto__),
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
  let C13;
  let C11;
  let C10;
  let C16;
  let C17;
  let C15;
  let C14;
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
  let C31;
  let C28;
  let C27;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C62;
  let C61;
  let C66;
  let C65;
  let C64;
  let C69;
  let C68;
  let C67;
  let C72;
  let C71;
  let C70;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C85;
  let C84;
  let C89;
  let C88;
  let C87;
  let C92;
  let C91;
  let C90;
  let C95;
  let C94;
  let C93;
  let C98;
  let C97;
  let C96;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C104;
  let C103;
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
  reservationCell._reservationCell = class _reservationCell extends framework.State$(reservationCell.reservationCell) {
    build(context) {
      let num = 2;
      let totalnum = 10;
      let TimeLimit = "4 hr";
      let MaxAmount = "10";
      let Location = "Gym";
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Reservation Details", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new safe_area.SafeArea.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new text.Text.new("Item Information", {style: new text_style.TextStyle.new({fontFamily: "", color: colors.Colors.teal, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10})]), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, width: 200.0, child: new divider.Divider.new({color: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("· Item Name: " + dart.str(this.widget.passedFirestoreData.data[$_get]("name")), {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36})]), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("· Amount: " + dart.str(this.widget.passedFirestoreData.data[$_get]("amount")), {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("· Status: " + dart.str(this.widget.passedFirestoreData.data[$_get]("status")), {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})]), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("· Location: " + Location, {style: new text_style.TextStyle.new({fontFamily: "Source Sans Pro", color: colors.Colors.teal, fontSize: 20.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 50.0, $creationLocationd_0dea112b090073317d4: C64 || CT.C64})]), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C70 || CT.C70})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("  Time Left To Pick Up: ", {style: new text_style.TextStyle.new({color: colors.Colors.teal, fontFamily: "Source Sans Pro", fontSize: 25.0}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new text.Text.new("10 minutes", {style: new text_style.TextStyle.new({color: colors.Colors.teal, fontFamily: "Source Sans Pro", fontSize: 25.0, letterSpacing: 2.5}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80})]), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C87 || CT.C87})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C93 || CT.C93})]), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), new material_button.MaterialButton.new({minWidth: 140.0, height: 50.0, color: colors.Colors.teal, splashColor: colors.Colors.redAccent, onPressed: dart.fn(() => {
                  core.print("Cancel Reservation");
                }, VoidToNull()), child: new text.Text.new("Cancel Reservation", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103})]), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117});
    }
  };
  (reservationCell._reservationCell.new = function() {
    reservationCell._reservationCell.__proto__.new.call(this);
    ;
  }).prototype = reservationCell._reservationCell.prototype;
  dart.addTypeTests(reservationCell._reservationCell);
  dart.setMethodSignature(reservationCell._reservationCell, () => ({
    __proto__: dart.getMethods(reservationCell._reservationCell.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(reservationCell._reservationCell, "package:RentalAdmin/widgets/reservationCell.dart");
  dart.trackLibraries("packages/RentalAdmin/widgets/reservationCell", {
    "package:RentalAdmin/widgets/reservationCell.dart": reservationCell
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["reservationCell.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKyB;;;;;;;AAIU,MAA/B,WAAM,AAAoB;AAG1B,YAAO;IACT;;;QAPsB;;;AAAtB;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAWjB;AACpB,gBAAM;AACN,qBAAW;AACX,sBAAY;AACZ,sBAAY;AACZ,qBAAW;AAEf,YAAO,oCACG,+BACC,kBAAK,gGACY,iFAEpB,mCACG,gCACa,sBAChB,gCACU,6DAEV,sCACuC,8CACnB,sBAChB,kBACE,4BACO,0CACO,WACE,8BACJ,qBACK,2HAMvB,6BACoB,sBAChB,gCACU,0HAId,sCACuC,8CACnB,sBAChB,gCACU,aACD,cACA,gCACS,iMAKtB,6BACoB,sBAChB,kBACE,AAAyD,2BAAzC,AAAO,AAAoB,AAAI,4CAAC,kBACzC,0CACO,0BACE,8BACJ,qBACK,2HAKvB,6BACoB,sBAChB,kBACE,AAAwD,wBAA3C,AAAO,AAAoB,AAAI,4CAAC,oBACtC,0CACO,0BACE,8BACJ,qBACK,2HAKvB,6BACoB,sBAChB,kBACE,AAAwD,wBAA3C,AAAO,AAAoB,AAAI,4CAAC,oBACtC,0CACO,0BACE,8BACJ,qBACK,2HAKvB,6BACoB,sBAChB,kBACE,AAAuB,iBAAT,QAAQ,UACf,0CACO,0BACE,8BACJ,qBACK,2HAmBvB,6BACoB,sBAChB,gCACU,0HAId,6BACoB,sBAChB,gCACU,0HAId,6BACoB,sBAChB,kBACE,oCACO,qCACS,gCACF,6BACF,iEAGd,kBACE,sBACO,qCACS,gCACF,6BACF,qBACK,2HAKvB,6BACoB,sBAChB,gCACU,0HAKd,6BACoB,sBAChB,gCACU,0HAId,kDACY,eACF,aACM,iCACM,oCACT;AACkB,kBAA3B,WAAM;yCAED,kBACL,8BACO,qCACS,+BACJ;IAQ1B;;;;;EACF","file":"reservationCell.ddc.js"}');
  // Exports:
  return {
    widgets__reservationCell: reservationCell
  };
});

//# sourceMappingURL=reservationCell.ddc.js.map
