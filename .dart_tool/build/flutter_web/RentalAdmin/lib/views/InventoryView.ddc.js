define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/RentalAdmin/views/inventory/list_page'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__RentalAdmin__views__inventory__list_page) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const colors = packages__flutter__material.src__material__colors;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const list_page = packages__RentalAdmin__views__inventory__list_page.views__inventory__list_page;
  const InventoryView = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 26,
        [_Location_line]: 38,
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
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 38,
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
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 28,
        [_Location_line]: 59,
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
        [_Location_column]: 16,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 60,
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
        [_Location_column]: 15,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C14() {
      return C14 = dart.constList([], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 62,
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
        [_Location_column]: 12,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/RentalAdmin/views/InventoryView.dart"
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
  InventoryView.FirstTab = class FirstTab extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({home: new InventoryView.LocationPage.new({title: "Select a Location", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
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
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C14;
  let C13;
  let C17;
  let C18;
  let C16;
  let C15;
  InventoryView._LocationPageState = class _LocationPageState extends framework.State$(InventoryView.LocationPage) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new(this.widget.title, {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), backgroundColor: colors.Colors.teal, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), body: new list_page.ListPage.new({$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
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
  dart.trackLibraries("packages/RentalAdmin/views/InventoryView", {
    "package:RentalAdmin/views/InventoryView.dart": InventoryView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["InventoryView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAmC4B;AACxB,YAAO,gCACC,2CAAoB;IAE9B;;;;;;EACF;;;;;;;;;IAGe;;;;;;;AAKX,YAAO;IACT;;;QALkB;QAAU;;;AAAU,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;UAU3B;AAExB,YAAO,oCACG,+BACC,kBAAK,AAAO,4FACK,iFAEpB;IAEV;;;;;EACF","file":"InventoryView.ddc.js"}');
  // Exports:
  return {
    views__InventoryView: InventoryView
  };
});

//# sourceMappingURL=InventoryView.ddc.js.map
