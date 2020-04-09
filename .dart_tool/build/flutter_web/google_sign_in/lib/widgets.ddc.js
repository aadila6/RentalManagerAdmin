define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/google_sign_in/src/common', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__google_sign_in__src__common, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const fade_in_image = packages__flutter__src__widgets__actions.src__widgets__fade_in_image;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const fife = packages__google_sign_in__src__common.src__fife;
  const common = packages__google_sign_in__src__common.src__common;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const widgets = Object.create(dart.library);
  const $round = dartx.round;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trimLeft = dartx.trimLeft;
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $toUpperCase = dartx.toUpperCase;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 28,
        [_Location_line]: 67,
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
        [_Location_column]: 14,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundColor",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 36,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 15,
        [_Location_line]: 123,
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
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 24,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 46,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/google_sign_in/widgets.dart"
      });
    }
  });
  const _buildClippedImage = dart.privateName(widgets, "_buildClippedImage");
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
  let C7;
  let C4;
  let C3;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C27;
  let C26;
  const identity$ = dart.privateName(widgets, "GoogleUserCircleAvatar.identity");
  const foregroundColor$ = dart.privateName(widgets, "GoogleUserCircleAvatar.foregroundColor");
  const backgroundColor$ = dart.privateName(widgets, "GoogleUserCircleAvatar.backgroundColor");
  const placeholderPhotoUrl$ = dart.privateName(widgets, "GoogleUserCircleAvatar.placeholderPhotoUrl");
  widgets.GoogleUserCircleAvatar = class GoogleUserCircleAvatar extends framework.StatelessWidget {
    get identity() {
      return this[identity$];
    }
    set identity(value) {
      super.identity = value;
    }
    get foregroundColor() {
      return this[foregroundColor$];
    }
    set foregroundColor(value) {
      super.foregroundColor = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get placeholderPhotoUrl() {
      return this[placeholderPhotoUrl$];
    }
    set placeholderPhotoUrl(value) {
      super.placeholderPhotoUrl = value;
    }
    build(context) {
      return new circle_avatar.CircleAvatar.new({backgroundColor: this.backgroundColor, foregroundColor: this.foregroundColor, child: new layout_builder.LayoutBuilder.new({builder: dart.bind(this, _buildClippedImage), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
    static _sizedProfileImageUrl(photoUrl, size) {
      if (photoUrl == null) {
        return "https://lh3.googleusercontent.com/a/default-user=s" + dart.str(size[$round]()) + "-c";
      }
      return fife.addSizeDirectiveToUrl(photoUrl, size);
    }
    [_buildClippedImage](context, constraints) {
      let t0;
      if (!(constraints.maxWidth == constraints.maxHeight)) dart.assertFailed(null, "org-dartlang-app:///packages/google_sign_in/widgets.dart", 84, 12, "constraints.maxWidth == constraints.maxHeight");
      let placeholderCharSources = JSArrayOfString().of([this.identity.displayName, this.identity.email, "-"]);
      let placeholderChar = placeholderCharSources[$firstWhere](dart.fn(str => str != null && str[$trimLeft]()[$isNotEmpty], StringTobool()))[$trimLeft]()[$_get](0)[$toUpperCase]();
      let placeholder = new basic.Center.new({child: new text.Text.new(placeholderChar, {textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
      let photoUrl = (t0 = this.identity.photoUrl, t0 == null ? this.placeholderPhotoUrl : t0);
      if (photoUrl == null) {
        return placeholder;
      }
      let size = dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio) * dart.notNull(constraints.maxWidth);
      let sizedPhotoUrl = widgets.GoogleUserCircleAvatar._sizedProfileImageUrl(photoUrl, size);
      return new basic.SizedBox.new({width: size, height: size, child: new basic.ClipOval.new({child: new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([placeholder, new fade_in_image.FadeInImage.memoryNetwork({placeholder: _native_typed_data.NativeUint8List.new(size[$round]() * size[$round]()), image: sizedPhotoUrl, $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (widgets.GoogleUserCircleAvatar.new = function(opts) {
    let identity = opts && 'identity' in opts ? opts.identity : null;
    let placeholderPhotoUrl = opts && 'placeholderPhotoUrl' in opts ? opts.placeholderPhotoUrl : null;
    let foregroundColor = opts && 'foregroundColor' in opts ? opts.foregroundColor : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[identity$] = identity;
    this[placeholderPhotoUrl$] = placeholderPhotoUrl;
    this[foregroundColor$] = foregroundColor;
    this[backgroundColor$] = backgroundColor;
    if (!(identity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/google_sign_in/widgets.dart", 30, 15, "identity != null");
    widgets.GoogleUserCircleAvatar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = widgets.GoogleUserCircleAvatar.prototype;
  dart.addTypeTests(widgets.GoogleUserCircleAvatar);
  dart.setMethodSignature(widgets.GoogleUserCircleAvatar, () => ({
    __proto__: dart.getMethods(widgets.GoogleUserCircleAvatar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildClippedImage]: dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])
  }));
  dart.setLibraryUri(widgets.GoogleUserCircleAvatar, "package:google_sign_in/widgets.dart");
  dart.setFieldSignature(widgets.GoogleUserCircleAvatar, () => ({
    __proto__: dart.getFields(widgets.GoogleUserCircleAvatar.__proto__),
    identity: dart.finalFieldType(common.GoogleIdentity),
    foregroundColor: dart.finalFieldType(ui.Color),
    backgroundColor: dart.finalFieldType(ui.Color),
    placeholderPhotoUrl: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(widgets.GoogleUserCircleAvatar, {
    /*widgets.GoogleUserCircleAvatar.sizeDirective*/get sizeDirective() {
      return fife.sizeDirective;
    }
  });
  dart.trackLibraries("packages/google_sign_in/widgets", {
    "package:google_sign_in/widgets.dart": widgets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widgets.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAuCuB;;;;;;IAKT;;;;;;IAMA;;;;;;IASC;;;;;;UAGa;AACxB,YAAO,sDACY,uCACA,6BACV,yDAAuB;IAElC;iCAK2C,UAAiB;AAC1D,UAAI,AAAS,QAAD,IAAI;AAGd,cAAO,AAAqE,iEAAhB,AAAK,IAAD,cAAS;;AAE3E,YAAO,4BAA2B,QAAQ,EAAE,IAAI;IAClD;yBAEuC,SAAwB;;AAC7D,YAAO,AAAY,AAAS,WAAV,aAAa,AAAY,WAAD;AAKvB,mCAAiC,sBAClD,AAAS,2BACT,AAAS,qBACT;AAEW,4BAAkB,AAC1B,AACA,AAAU,AACV,sBAHgD,cACrC,QAAQ,OAAQ,AAAY,GAAT,IAAI,QAAQ,AAAI,AAAW,GAAZ,iEAClC;AAEH,wBAAc,6BAClB,kBAAK,eAAe,cAAuB;AAGvC,sBAA6B,KAAlB,AAAS,8BAAA,OAAY;AAC7C,UAAI,AAAS,QAAD,IAAI;AACd,cAAO,YAAW;;AAIP,iBAC+B,aAA7B,AAAY,0BAAT,OAAO,mCAAqB,AAAY,WAAD;AAC5C,0BAAgB,qDAAsB,QAAQ,EAAE,IAAI;AAGjE,YAAO,gCACI,IAAI,UACH,IAAI,SACL,+BACE,0BAAoB,iCAA0B,sBACnD,WAAW,EACC,0DAGG,uCAAW,AAAK,AAAQ,IAAT,aAAW,AAAK,IAAD,oBACpC,aAAa;IAIhC;;;QArGiB;QACV;QACA;QACA;;IAHU;IACV;IACA;IACA;UACK,AAAS,QAAD,IAAI;AALlB;;EAKuB;;;;;;;;;;;;;;;;MAOT,4CAAa;YAAQ","file":"widgets.ddc.js"}');
  // Exports:
  return {
    widgets: widgets
  };
});

//# sourceMappingURL=widgets.ddc.js.map
