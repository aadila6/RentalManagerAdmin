define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/RentalAdmin/views/inventory/ItemDetails', 'packages/cloud_firestore/cloud_firestore', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__RentalAdmin__views__inventory__ItemDetails, packages__cloud_firestore__cloud_firestore, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const async = packages__flutter__src__widgets__actions.src__widgets__async;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const card = packages__flutter__material.src__material__card;
  const ItemDetails = packages__RentalAdmin__views__inventory__ItemDetails.views__inventory__ItemDetails;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const itemGrid = Object.create(dart.library);
  const $toString = dartx.toString;
  let BuildContextToDetailPage = () => (BuildContextToDetailPage = dart.constFn(dart.fnType(ItemDetails.DetailPage, [framework.BuildContext])))();
  let StreamBuilderOfQuerySnapshot = () => (StreamBuilderOfQuerySnapshot = dart.constFn(async.StreamBuilder$(cloud_firestore.QuerySnapshot)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndintToInkWell = () => (BuildContextAndintToInkWell = dart.constFn(dart.fnType(ink_well.InkWell, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToStatelessWidget = () => (BuildContextAndAsyncSnapshotToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, async.AsyncSnapshot])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemSelected",
        [_Location_column]: 46,
        [_Location_line]: 44,
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
        [_Location_column]: 35,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 60,
        [_Location_line]: 50,
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
        [_Location_column]: 16,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
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
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 63,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 67,
        [_Location_line]: 94,
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
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "gridDelegate",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 40,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 19,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 19,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 19,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 137,
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
        [_Location_column]: 15,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 120,
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
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/itemGrid.dart"
      });
    }
  });
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
  let C9;
  let C7;
  let C6;
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
  let C10;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C29;
  let C28;
  itemGrid._ItemGridPageState = class _ItemGridPageState extends framework.State$(itemGrid.ItemGridPage) {
    navigateToDetail(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new ItemDetails.DetailPage.new({itemSelected: indexedData, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToDetailPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selected: " + dart.str(this.widget.category), {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), body: new (StreamBuilderOfQuerySnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").where("category", {isEqualTo: this.widget.category}).snapshots(), builder: dart.fn((context, snapshot) => {
            if (!dart.test(snapshot.hasData)) return C10 || CT.C10;
            return new scroll_view.GridView.builder({itemCount: core.int._check(dart.dload(dart.dload(snapshot.data, 'documents'), 'length')), gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 5}), itemBuilder: dart.fn((context, index) => new ink_well.InkWell.new({child: new itemGrid.CustommCell.new(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])), dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["imageURL"])), {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), onTap: dart.fn(() => {
                  core.print(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])));
                  this.navigateToDetail(cloud_firestore.DocumentSnapshot._check(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index])));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), BuildContextAndintToInkWell()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
          }, BuildContextAndAsyncSnapshotToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28});
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
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C43;
  let C42;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C57;
  let C58;
  let C54;
  let C53;
  let C61;
  let C62;
  let C60;
  let C59;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C70;
  let C71;
  let C68;
  let C67;
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
      return new card.Card.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10.0)}), color: colors.Colors.white, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new container.Container.new({alignment: alignment.Alignment.center, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Flexible.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(10.0), child: new image.Image.network(this.url, {$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(10.0), child: new text.Text.new(this.name, {maxLines: 1, softWrap: true, textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({fontSize: 12.0, fontWeight: ui.FontWeight.w800}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
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
  dart.trackLibraries("packages/RentalAdmin/views/inventory/itemGrid", {
    "package:RentalAdmin/views/inventory/itemGrid.dart": itemGrid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["itemGrid.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUS;;;;;;;AAML,YAAO;IACT;;;QANmB;;;AAAnB;;EAA6B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBA4BK;AAIqC,MAH3D,uCACN,cACA,yCACa,QAAC,WAAY,8CAAyB,WAAW;IACpE;UAE0B;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAuC,iCAAjB,AAAO,gGACjB,iFAEpB,kDACgB,AACb,AACA,AACA,8CAFW,mBACL,wBAAuB,AAAO,6CAEhC,SAAC,SAAS;AACjB,2BAAK,AAAS,QAAD,WAAU;AA2BvB,kBAAgB,8DACqB,WAAV,WAAd,AAAS,QAAD,+CACD,+EACE,kBACP,SAAc,SAAa,UAC/B,iCACE,6BACqC,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,WACY,cAAb,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,gFAC7B;AACwD,kBAA7D,WAAkD,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO;AACM,kBAAhD,8DAAwC,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK;;;IAQhE;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAES;;;;;;IACA;;;;;;UAImB;AAExB,YAAO,2BACE,uEACsB,wCAAS,gBAExB,4BACP,gCACe,+BAAI,cACjB,wCACgB,mCACd,0CACkC,mDACF,6CACV,iCACT,sBAChB,+BACS,uCACsB,wCAAS,cACvB,wBAAQ,sLAGzB,gCACsB,+BAAI,cACjB,kBACL,sBACU,aACA,iBACW,4BACd,wCACK,kBACa;IASzC;;uCA3CiB,MAAW;;IAAX;IAAW;AAA5B;;EAAgC","file":"itemGrid.ddc.js"}');
  // Exports:
  return {
    views__inventory__itemGrid: itemGrid
  };
});

//# sourceMappingURL=itemGrid.ddc.js.map
