define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/RentalAdmin/views/inventory/detail_page', 'packages/cloud_firestore/cloud_firestore'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__RentalAdmin__views__inventory__detail_page, packages__cloud_firestore__cloud_firestore) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const async = packages__flutter__src__widgets__actions.src__widgets__async;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const detail_page = packages__RentalAdmin__views__inventory__detail_page.views__inventory__detail_page;
  const cloud_firestore = packages__cloud_firestore__cloud_firestore.cloud_firestore;
  const item_page = Object.create(dart.library);
  const $toString = dartx.toString;
  let BuildContextToDetailPage = () => (BuildContextToDetailPage = dart.constFn(dart.fnType(detail_page.DetailPage, [framework.BuildContext])))();
  let StreamBuilderOfQuerySnapshot = () => (StreamBuilderOfQuerySnapshot = dart.constFn(async.StreamBuilder$(cloud_firestore.QuerySnapshot)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let BuildContextAndAsyncSnapshotToStatelessWidget = () => (BuildContextAndAsyncSnapshotToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, async.AsyncSnapshot])))();
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
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
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
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
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
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
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
        [_Location_name]: "data",
        [_Location_column]: 65,
        [_Location_line]: 64,
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
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 100,
        [_Location_line]: 66,
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
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 17,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 65,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 15,
        [_Location_line]: 62,
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
        [_Location_column]: 29,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stream",
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 53,
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
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/inventory/item_page.dart"
      });
    }
  });
  const category$ = dart.privateName(item_page, "ItemPage.category");
  item_page.ItemPage = class ItemPage extends framework.StatefulWidget {
    get category() {
      return this[category$];
    }
    set category(value) {
      this[category$] = value;
    }
    createState() {
      return new item_page._ItemPageState.new();
    }
  };
  (item_page.ItemPage.new = function(opts) {
    let category = opts && 'category' in opts ? opts.category : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[category$] = category;
    item_page.ItemPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = item_page.ItemPage.prototype;
  dart.addTypeTests(item_page.ItemPage);
  dart.setMethodSignature(item_page.ItemPage, () => ({
    __proto__: dart.getMethods(item_page.ItemPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(item_page.ItemPage, "package:RentalAdmin/views/inventory/item_page.dart");
  dart.setFieldSignature(item_page.ItemPage, () => ({
    __proto__: dart.getFields(item_page.ItemPage.__proto__),
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
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  item_page._ItemPageState = class _ItemPageState extends framework.State$(item_page.ItemPage) {
    navigateToDetail(indexedData) {
      navigator.Navigator.push(dart.dynamic, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new detail_page.DetailPage.new({itemSelected: indexedData, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToDetailPage())}));
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Category Selected: " + dart.str(this.widget.category), {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), body: new (StreamBuilderOfQuerySnapshot()).new({stream: cloud_firestore.Firestore.instance.collection("ARC_items").where("category", {isEqualTo: this.widget.category}).snapshots(), builder: dart.fn((context, snapshot) => {
            if (!dart.test(snapshot.hasData)) return C10 || CT.C10;
            return new scroll_view.ListView.builder({itemCount: core.int._check(dart.dload(dart.dload(snapshot.data, 'documents'), 'length')), itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["name"])), {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), subtitle: new text.Text.new("Total amount: " + dart.str(dart.toString(dart.dsend(dart.dload(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index]), 'data'), '_get', ["# of items"]))), {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), onTap: dart.fn(() => {
                  this.navigateToDetail(cloud_firestore.DocumentSnapshot._check(dart.dsend(dart.dload(snapshot.data, 'documents'), '_get', [index])));
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
          }, BuildContextAndAsyncSnapshotToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30});
    }
  };
  (item_page._ItemPageState.new = function() {
    item_page._ItemPageState.__proto__.new.call(this);
    ;
  }).prototype = item_page._ItemPageState.prototype;
  dart.addTypeTests(item_page._ItemPageState);
  dart.setMethodSignature(item_page._ItemPageState, () => ({
    __proto__: dart.getMethods(item_page._ItemPageState.__proto__),
    navigateToDetail: dart.fnType(dart.dynamic, [cloud_firestore.DocumentSnapshot]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(item_page._ItemPageState, "package:RentalAdmin/views/inventory/item_page.dart");
  dart.trackLibraries("packages/RentalAdmin/views/inventory/item_page", {
    "package:RentalAdmin/views/inventory/item_page.dart": item_page
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["item_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUS;;;;;;;AAML,YAAO;IACT;;;QANe;;;AAAf;;EAAyB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBA4BS;AAIqC,MAH3D,uCACN,cACA,yCACa,QAAC,WAAY,8CAAyB,WAAW;IACpE;UAE0B;AACxB,YAAO,oCACG,+BACC,kBAAK,AAAuC,iCAAjB,AAAO,gGACjB,iFAEpB,kDACgB,AACb,AACA,AACA,8CAFW,mBACL,wBAAuB,AAAO,6CAEhC,SAAC,SAAS;AACjB,2BAAK,AAAS,QAAD,WAAU;AACvB,kBAAgB,8DACqB,WAAV,WAAd,AAAS,QAAD,8CACN,SAAc,SAAa,UAAU,mCACzC,kBACyC,cAAT,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,+EAC9B,kBACN,AAA+E,4BAAZ,cAAf,WAAJ,WAAR,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK,sBAAO,mFAClD;AAC2C,kBAAhD,8DAAwC,WAAT,WAAd,AAAS,QAAD,8BAAgB,KAAK;;;IAQ9D;;;;;EAkHF","file":"item_page.ddc.js"}');
  // Exports:
  return {
    views__inventory__item_page: item_page
  };
});

//# sourceMappingURL=item_page.ddc.js.map
