define(['dart_sdk', 'packages/flutter_test/flutter_test', 'test/widget_test', 'packages/test_api/src/remote_listener', 'packages/test_api/src/suite_channel_manager', 'packages/stream_channel/stream_channel'], function(dart_sdk, packages__flutter_test__flutter_test, test__widget_test, packages__test_api__src__remote_listener, packages__test_api__src__suite_channel_manager, packages__stream_channel__stream_channel) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const js = dart_sdk.js;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _goldens_web = packages__flutter_test__flutter_test.src___goldens_web;
  const goldens = packages__flutter_test__flutter_test.src__goldens;
  const widget_test = test__widget_test.test__widget_test;
  const remote_listener = packages__test_api__src__remote_listener.src__remote_listener;
  const suite_channel_manager = packages__test_api__src__suite_channel_manager.src__suite_channel_manager;
  const stream_channel_controller = packages__stream_channel__stream_channel.src__stream_channel_controller;
  var widget_test$46dart$46browser_test = Object.create(dart.library);
  var $onMessage = dartx.onMessage;
  var $origin = dartx.origin;
  var $location = dartx.location;
  var $data = dartx.data;
  var $first = dartx.first;
  var $postMessage = dartx.postMessage;
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.fnType(dart.void, [])))();
  var VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToLvoid(), [])))();
  var MessageEventLToboolL = () => (MessageEventLToboolL = dart.constFn(dart.fnType(core.bool, [html.MessageEvent])))();
  var MessageEventLToNullN = () => (MessageEventLToNullN = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 1800,
        [OffsetBase__dx]: 2400
      });
    },
    get C1() {
      return C1 = dart.fn(widget_test.main, VoidTovoid());
    }
  }, false);
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C0;
  var C1;
  widget_test$46dart$46browser_test.main = function main() {
    return async.async(dart.void, function* main() {
      ui.debugEmulateFlutterTesterEnvironment = true;
      yield ui.webOnlyInitializePlatform();
      goldens.webGoldenComparator = new _goldens_web.DefaultWebGoldenComparator.new(core.Uri.parse("file:///Users/adila/Desktop/RentalManagerAdmin/test/widget_test.dart"));
      dart.dsend(ui.window, 'debugOverrideDevicePixelRatio', [3.0]);
      dart.dput(ui.window, 'webOnlyDebugPhysicalSizeOverride', C0 || CT.C0);
      widget_test$46dart$46browser_test.internalBootstrapBrowserTest(dart.fn(() => C1 || CT.C1, VoidToFn()));
    });
  };
  widget_test$46dart$46browser_test.internalBootstrapBrowserTest = function internalBootstrapBrowserTest(getMain) {
    let channel = widget_test$46dart$46browser_test.serializeSuite(getMain, {hidePrints: false});
    widget_test$46dart$46browser_test.postMessageChannel().pipe(channel);
  };
  widget_test$46dart$46browser_test.serializeSuite = function serializeSuite(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return remote_listener.RemoteListener.start(getMain, {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  widget_test$46dart$46browser_test.suiteChannel = function suiteChannel(name) {
    let manager = suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new("suiteChannel() may only be called within a test worker."));
    }
    return manager.connectOut(name);
  };
  widget_test$46dart$46browser_test.postMessageChannel = function postMessageChannel() {
    let controller = new stream_channel_controller.StreamChannelController.new({sync: true});
    html.window[$onMessage].firstWhere(dart.fn(message => message.origin == html.window[$location][$origin] && dart.equals(message[$data], "port"), MessageEventLToboolL())).then(core.Null, dart.fn(message => {
      let port = message.ports[$first];
      let portSubscription = port[$onMessage].listen(dart.fn(message => {
        controller.local.sink.add(message[$data]);
      }, MessageEventLToNullN()));
      controller.local.stream.listen(dart.fn(data => {
        port[$postMessage](new (IdentityMapOfStringL$dynamic()).from(["data", data]));
      }, dynamicToNullN()), {onDone: dart.fn(() => {
          port[$postMessage](new (IdentityMapOfStringL$StringL()).from(["event", "done"]));
          portSubscription.cancel();
        }, VoidToNullN())});
    }, MessageEventLToNullN()));
    dart.dsend(js.context._get("parent"), 'callMethod', ["postMessage", JSArrayOfObjectL().of([js.JsObject.jsify(new (IdentityMapOfStringL$ObjectL()).from(["href", html.window[$location].href, "ready", true])), html.window[$location][$origin]])]);
    return controller.foreign;
  };
  dart.trackLibraries("test/widget_test.dart.browser_test", {
    "org-dartlang-app:///test/widget_test.dart.browser_test.dart": widget_test$46dart$46browser_test
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["widget_test.dart.browser_test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYiB;AAK+B,MAA3C,0CAAuC;AACN,MAApC,MAAM;AAC6H,MAAnI,8BAAsB,gDAA+B,eAAM;AAEF,MAAlC,WAAnB,6CAAiD;AAC8B,MAA5D,UAAnB;AACyC,MAA7C,+DAA6B;IAC/B;;yGAE2C;AACrC,kBAAU,iDAAe,OAAO,eAAc;AAChB,IAAlC,AAAqB,4DAAK,OAAO;EACnC;6EACsC;QACxB;QAA0B;AACpC,UAAe,sCAAM,OAAO,eACZ,UAAU,cAAc,UAAU;EAAC;yEAErB;AAC5B,kBAA8B;AAClC,QAAI,AAAQ,OAAD,IAAI;AAC8D,MAA3E,WAAM,wBAAW;;AAGnB,UAAO,AAAQ,QAAD,YAAY,IAAI;EAChC;;AAGM,qBAAa,iEAA8B;AAe7C,IAdF,AAAO,AAAU,AAEd,mCAFyB,QAAC,WACpB,AAAQ,AAAO,AAA0B,OAAlC,WAAW,AAAO,AAAS,mCAAuB,YAAb,AAAQ,OAAD,SAAS,kDAC7D,QAAC;AACH,iBAAO,AAAQ,AAAM,OAAP;AACd,6BAAmB,AAAK,AAAU,IAAX,oBAAkB,QAAC;AACL,QAAvC,AAAW,AAAM,AAAK,UAAZ,gBAAgB,AAAQ,OAAD;;AAQjC,MALF,AAAW,AAAM,AAAO,UAAd,qBAAqB,QAAC;AACE,QAAhC,AAAK,IAAD,eAAa,2CAAC,QAAQ,IAAI;qCACrB;AAC0B,UAAnC,AAAK,IAAD,eAAa,2CAAC,SAAS;AACF,UAAzB,AAAiB,gBAAD;;;AAOlB,IAHgB,WAAlB,AAAO,gBAAC,0BAAqB,eAAe,uBACjC,kBAAM,2CAAC,QAAQ,AAAO,AAAS,6BAAM,SAAS,SACvD,AAAO,AAAS;AAElB,UAAO,AAAW,WAAD;EACnB","file":"widget_test.dart.browser_test.ddc.js"}');
  // Exports:
  return {
    test__widget_test$46dart$46browser_test: widget_test$46dart$46browser_test
  };
});

//# sourceMappingURL=widget_test.dart.browser_test.ddc.js.map
