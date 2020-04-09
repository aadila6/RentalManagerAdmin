define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common = Object.create(dart.library);
  const fife = Object.create(dart.library);
  const $length = dartx.length;
  const $last = dartx.last;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $split = dartx.split;
  const $isEmpty = dartx.isEmpty;
  const $round = dartx.round;
  const $join = dartx.join;
  const $removeWhere = dartx.removeWhere;
  const $insert = dartx.insert;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  const CT = Object.create(null);
  common.GoogleIdentity = class GoogleIdentity extends core.Object {};
  (common.GoogleIdentity.new = function() {
    ;
  }).prototype = common.GoogleIdentity.prototype;
  dart.addTypeTests(common.GoogleIdentity);
  dart.setLibraryUri(common.GoogleIdentity, "package:google_sign_in/src/common.dart");
  fife.addSizeDirectiveToUrl = function addSizeDirectiveToUrl(photoUrl, size) {
    let t0, t0$;
    let profileUri = core.Uri.parse(photoUrl);
    let pathSegments = ListOfString().from(profileUri.pathSegments);
    if (dart.notNull(pathSegments[$length]) <= 2) {
      let imagePath = pathSegments[$last];
      let directiveSeparator = imagePath[$indexOf]("=");
      if (directiveSeparator >= 0) {
        let baseUrl = imagePath[$substring](0, directiveSeparator);
        let directive = imagePath[$substring](directiveSeparator + 1);
        let directives = (t0 = LinkedHashSetOfString().from(directive[$split]("-")), t0.removeWhere(dart.fn(s => s[$isEmpty] || dart.test(fife.sizeDirective.hasMatch(s)), StringTobool())), t0.addAll(JSArrayOfString().of(["c", "s" + dart.str(size[$round]())])), t0);
        pathSegments[$last] = baseUrl + "=" + dart.str(directives[$join]("-"));
      } else {
        pathSegments[$last] = dart.str(pathSegments[$last]) + "=c-s" + dart.str(size[$round]());
      }
    } else {
      t0$ = pathSegments;
      t0$[$removeWhere](dart.bind(fife.sizeDirective, 'hasMatch'));
      t0$[$insert](dart.notNull(pathSegments[$length]) - 1, "s" + dart.str(size[$round]()) + "-c");
      t0$;
    }
    return dart.toString(core._Uri.new({scheme: profileUri.scheme, host: profileUri.host, pathSegments: pathSegments}));
  };
  dart.defineLazy(fife, {
    /*fife.sizeDirective*/get sizeDirective() {
      return core.RegExp.new("^s[0-9]{1,5}(-c)?$");
    }
  });
  dart.trackLibraries("packages/google_sign_in/src/common", {
    "package:google_sign_in/src/common.dart": common,
    "package:google_sign_in/src/fife.dart": fife
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["common.dart","fife.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;EAoCA;;;8DCAoC,UAAiB;;AACzC,qBAAiB,eAAM,QAAQ;AACtB,uBAAa,oBAAoB,AAAW,UAAD;AAC9D,QAAwB,aAApB,AAAa,YAAD,cAAW;AACZ,sBAAY,AAAa,YAAD;AAE3B,+BAAqB,AAAU,SAAD,WAAS;AACjD,UAAI,AAAmB,kBAAD,IAAI;AAEX,sBAAU,AAAU,SAAD,aAAW,GAAG,kBAAkB;AACnD,wBAAY,AAAU,SAAD,aAAW,AAAmB,kBAAD,GAAG;AAEhD,+BAAW,6BAAmB,AAAU,SAAD,SAAO,OAE5D,eAAY,QAAQ,KAAM,AAAE,AAAQ,CAAT,wBAAY,AAAc,4BAAS,CAAC,sBAE/D,UAAe,sBAAC,KAAK,AAAkB,eAAd,AAAK,IAAD;AAEqB,QAAtD,AAAa,YAAD,UAAU,AAAgC,OAAzB,kBAAG,AAAW,UAAD,QAAM;;AAEa,QAA7D,AAAa,YAAD,UAAiD,SAAtC,AAAa,YAAD,WAAM,kBAAM,AAAK,IAAD;;;AAMI,YAFzD,YAAY;MACR,kBAA0B,UAAd;MACZ,aAA2B,aAApB,AAAa,YAAD,aAAU,GAAG,AAAoB,eAAhB,AAAK,IAAD,cAAS;;;AAEvD,UAIE,eAJK,uBACG,AAAW,UAAD,eACZ,AAAW,UAAD,qBACF,YAAY;EAE9B;;MA5Da,kBAAa;YAAG,iBAAO","file":"common.ddc.js"}');
  // Exports:
  return {
    src__common: common,
    src__fife: fife
  };
});

//# sourceMappingURL=common.ddc.js.map
