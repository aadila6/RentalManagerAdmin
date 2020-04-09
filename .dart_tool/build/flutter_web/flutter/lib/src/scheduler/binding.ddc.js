define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/collection/src/priority_queue', 'packages/flutter/src/services/asset_bundle'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__collection__src__priority_queue, packages__flutter__src__services__asset_bundle) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const print = packages__flutter__src__foundation___bitfield_web.src__foundation__print;
  const debug = packages__flutter__src__foundation___bitfield_web.src__foundation__debug;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const object = packages__flutter__src__foundation___bitfield_web.src__foundation__object;
  const priority_queue = packages__collection__src__priority_queue.src__priority_queue;
  const system_channels = packages__flutter__src__services__asset_bundle.src__services__system_channels;
  const binding$ = packages__flutter__src__services__asset_bundle.src__services__binding;
  var debug$ = Object.create(dart.library);
  var priority$ = Object.create(dart.library);
  var binding$0 = Object.create(dart.library);
  var ticker$ = Object.create(dart.library);
  var $abs = dartx.abs;
  var $sign = dartx.sign;
  var $add = dartx.add;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $remove = dartx.remove;
  var $isEmpty = dartx.isEmpty;
  var $compareTo = dartx.compareTo;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $trimRight = dartx.trimRight;
  var $split = dartx.split;
  var $join = dartx.join;
  var $round = dartx.round;
  var $toString = dartx.toString;
  var $padRight = dartx.padRight;
  var $padLeft = dartx.padLeft;
  var $forEach = dartx.forEach;
  var $clear = dartx.clear;
  var $times = dartx['*'];
  var $_equals = dartx._equals;
  var $runtimeType = dartx.runtimeType;
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(core.bool, [])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfDiagnosticsNodeL = () => (JSArrayOfDiagnosticsNodeL = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  var ListOfFrameTimingL = () => (ListOfFrameTimingL = dart.constFn(core.List$(ui.FrameTiming)))();
  var ListLOfFrameTimingLToLvoid = () => (ListLOfFrameTimingLToLvoid = dart.constFn(dart.fnType(dart.void, [ListOfFrameTimingL()])))();
  var JSArrayOfListLOfFrameTimingLToLvoid = () => (JSArrayOfListLOfFrameTimingLToLvoid = dart.constFn(_interceptors.JSArray$(ListLOfFrameTimingLToLvoid())))();
  var __ToboolL = () => (__ToboolL = dart.constFn(dart.fnType(core.bool, [], {priority: core.int, scheduler: binding$0.SchedulerBinding}, {})))();
  var HeapPriorityQueueOf_TaskEntryL = () => (HeapPriorityQueueOf_TaskEntryL = dart.constFn(priority_queue.HeapPriorityQueue$(binding$0._TaskEntry)))();
  var _TaskEntryLAnd_TaskEntryLTointL = () => (_TaskEntryLAnd_TaskEntryLTointL = dart.constFn(dart.fnType(core.int, [binding$0._TaskEntry, binding$0._TaskEntry])))();
  var IdentityMapOfintL$_FrameCallbackEntryL = () => (IdentityMapOfintL$_FrameCallbackEntryL = dart.constFn(_js_helper.IdentityMap$(core.int, binding$0._FrameCallbackEntry)))();
  var _IdentityHashSetOfintL = () => (_IdentityHashSetOfintL = dart.constFn(collection._IdentityHashSet$(core.int)))();
  var DurationLToLvoid = () => (DurationLToLvoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  var JSArrayOfDurationLToLvoid = () => (JSArrayOfDurationLToLvoid = dart.constFn(_interceptors.JSArray$(DurationLToLvoid())))();
  var ListLOfFrameTimingLToNullN = () => (ListLOfFrameTimingLToNullN = dart.constFn(dart.fnType(core.Null, [ListOfFrameTimingL()])))();
  var ListOfListLOfFrameTimingLToLvoid = () => (ListOfListLOfFrameTimingLToLvoid = dart.constFn(core.List$(ListLOfFrameTimingLToLvoid())))();
  var DiagnosticsPropertyOfListLOfFrameTimingLToLvoid = () => (DiagnosticsPropertyOfListLOfFrameTimingLToLvoid = dart.constFn(diagnostics.DiagnosticsProperty$(ListLOfFrameTimingLToLvoid())))();
  var SyncIterableOfDiagnosticsNodeL = () => (SyncIterableOfDiagnosticsNodeL = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  var IterableOfDiagnosticsNodeL = () => (IterableOfDiagnosticsNodeL = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  var VoidToIterableLOfDiagnosticsNodeL = () => (VoidToIterableLOfDiagnosticsNodeL = dart.constFn(dart.fnType(IterableOfDiagnosticsNodeL(), [])))();
  var FutureOfdoubleL = () => (FutureOfdoubleL = dart.constFn(async.Future$(core.double)))();
  var VoidToFutureLOfdoubleL = () => (VoidToFutureLOfdoubleL = dart.constFn(dart.fnType(FutureOfdoubleL(), [])))();
  var FutureOfNullN = () => (FutureOfNullN = dart.constFn(async.Future$(core.Null)))();
  var doubleLToFutureLOfNullN = () => (doubleLToFutureLOfNullN = dart.constFn(dart.fnType(FutureOfNullN(), [core.double])))();
  var LinkedHashMapOfintL$_FrameCallbackEntryL = () => (LinkedHashMapOfintL$_FrameCallbackEntryL = dart.constFn(collection.LinkedHashMap$(core.int, binding$0._FrameCallbackEntry)))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var DurationLToNullN = () => (DurationLToNullN = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  var VoidToFutureLOfNullN = () => (VoidToFutureLOfNullN = dart.constFn(dart.fnType(FutureOfNullN(), [])))();
  var intLAnd_FrameCallbackEntryLToNullN = () => (intLAnd_FrameCallbackEntryLToNullN = dart.constFn(dart.fnType(core.Null, [core.int, binding$0._FrameCallbackEntry])))();
  var ListOfDurationLToLvoid = () => (ListOfDurationLToLvoid = dart.constFn(core.List$(DurationLToLvoid())))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  var DiagnosticsPropertyOfTickerL = () => (DiagnosticsPropertyOfTickerL = dart.constFn(diagnostics.DiagnosticsProperty$(ticker$.Ticker)))();
  var dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  var VoidToLdynamic = () => (VoidToLdynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const CT = Object.create(null);
  var L1 = "package:flutter/src/scheduler/priority.dart";
  var L3 = "package:flutter/src/scheduler/binding.dart";
  var L2 = "file:///private/var/folders/kv/jfkyvgcx1q3_7nwhmrnqw7z80000gn/T/scratch_spacenntfA9/packages/flutter/src/scheduler/binding.dart";
  var L4 = "package:flutter/src/scheduler/ticker.dart";
  var L0 = "file:///private/var/folders/kv/jfkyvgcx1q3_7nwhmrnqw7z80000gn/T/scratch_spacenntfA9/packages/flutter/src/scheduler/debug.dart";
  var L5 = "file:///private/var/folders/kv/jfkyvgcx1q3_7nwhmrnqw7z80000gn/T/scratch_spacenntfA9/packages/flutter/src/scheduler/ticker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 200000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.idle",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.transientCallbacks",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.midFrameMicrotasks",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.persistentCallbacks",
        index: 3
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.postFrameCallbacks",
        index: 4
      });
    },
    get C8() {
      return C8 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], binding$0.SchedulerPhase);
    },
    get C9() {
      return C9 = dart.fn(binding$0.defaultSchedulingStrategy, __ToboolL());
    },
    get C10() {
      return C10 = dart.fn(binding$0.SchedulerBinding._taskSorter, _TaskEntryLAnd_TaskEntryLTointL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.resumed",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.inactive",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.paused",
        index: 2
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.detached",
        index: 3
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ticker$.TickerCanceled.prototype,
        [TickerCanceled_ticker]: null
      });
    }
  }, false);
  debug$.debugAssertAllSchedulerVarsUnset = function debugAssertAllSchedulerVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L0, 59, 10, "() {\n    if (debugPrintBeginFrameBanner ||\n        debugPrintEndFrameBanner) {\n      throw FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(debug$, {
    /*debug$.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*debug$.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*debug$.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  }, true);
  var _value = dart.privateName(priority$, "_value");
  var _value$ = dart.privateName(priority$, "Priority._value");
  var C0;
  var C1;
  var C2;
  priority$.Priority = class Priority extends core.Object {
    get [_value]() {
      return this[_value$];
    }
    set [_value](value) {
      super[_value] = value;
    }
    get value() {
      return this[_value];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority$.Priority.__(dart.notNull(this[_value]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (priority$.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = priority$.Priority.prototype;
  dart.addTypeTests(priority$.Priority);
  dart.addTypeCaches(priority$.Priority);
  dart.setMethodSignature(priority$.Priority, () => ({
    __proto__: dart.getMethods(priority$.Priority.__proto__),
    '+': dart.fnType(priority$.Priority, [core.int]),
    '-': dart.fnType(priority$.Priority, [core.int])
  }));
  dart.setGetterSignature(priority$.Priority, () => ({
    __proto__: dart.getGetters(priority$.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority$.Priority, L1);
  dart.setFieldSignature(priority$.Priority, () => ({
    __proto__: dart.getFields(priority$.Priority.__proto__),
    [_value]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(priority$.Priority, {
    /*priority$.Priority.idle*/get idle() {
      return C0 || CT.C0;
    },
    /*priority$.Priority.animation*/get animation() {
      return C1 || CT.C1;
    },
    /*priority$.Priority.touch*/get touch() {
      return C2 || CT.C2;
    },
    /*priority$.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  }, true);
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  var completer = dart.privateName(binding$0, "_TaskEntry.completer");
  binding$0._TaskEntry$ = dart.generic(T => {
    var CompleterOfTL = () => (CompleterOfTL = dart.constFn(async.Completer$(T)))();
    class _TaskEntry extends core.Object {
      get completer() {
        return this[completer];
      }
      set completer(value) {
        this[completer] = CompleterOfTL().as(value);
      }
      run() {
        let t0;
        if (!false) {
          developer.Timeline.timeSync(core.Null, (t0 = this.debugLabel, t0 == null ? "Scheduled Task" : t0), dart.fn(() => {
            this.completer.complete(this.task());
          }, VoidToNullN()), {flow: this.flow != null ? developer.Flow.step(this.flow.id) : null});
        } else {
          this.completer.complete(this.task());
        }
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      this.debugStack = null;
      this[completer] = null;
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.test(dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 63, 12, "() {\n      debugStack = StackTrace.current;\n      return true;\n    }()");
      this.completer = CompleterOfTL().new();
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    dart.addTypeCaches(_TaskEntry);
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_TaskEntry, L3);
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(dart.fnType(T, [])),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(core.String),
      flow: dart.finalFieldType(developer.Flow),
      debugStack: dart.fieldType(core.StackTrace),
      completer: dart.fieldType(async.Completer$(T))
    }));
    return _TaskEntry;
  });
  binding$0._TaskEntry = binding$0._TaskEntry$();
  dart.addTypeTests(binding$0._TaskEntry, _is__TaskEntry_default);
  binding$0._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {};
  (binding$0._FrameCallbackEntry.new = function(callback, opts) {
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    this.debugStack = null;
    this.callback = callback;
    if (!dart.test(dart.fn(() => {
      if (dart.test(rescheduling)) {
        if (!dart.test(dart.fn(() => {
          if (binding$0._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNodeL().of([new assertions.ErrorSummary.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope."), new assertions.ErrorDescription.new("The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous."), new assertions.ErrorHint.new("If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument.")])));
          }
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L2, 96, 16, "() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.'\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.'\n              )\n            ]);\n          }\n          return true;\n        }()");
        this.debugStack = binding$0._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L2, 94, 12, "() {\n      if (rescheduling) {\n        assert(() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError.fromParts(<DiagnosticsNode>[\n              ErrorSummary('scheduleFrameCallback called with rescheduling true, but no callback is in scope.'),\n              ErrorDescription(\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous.'\n              ),\n              ErrorHint(\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.'\n              )\n            ]);\n          }\n          return true;\n        }());\n        debugStack = debugCurrentCallbackStack;\n      } else {\n        // TODO(ianh): trim the frames from this library, so that the call to scheduleFrameCallback is the top one\n        debugStack = StackTrace.current;\n      }\n      return true;\n    }()");
  }).prototype = binding$0._FrameCallbackEntry.prototype;
  dart.addTypeTests(binding$0._FrameCallbackEntry);
  dart.addTypeCaches(binding$0._FrameCallbackEntry);
  dart.setLibraryUri(binding$0._FrameCallbackEntry, L3);
  dart.setFieldSignature(binding$0._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(binding$0._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    debugStack: dart.fieldType(core.StackTrace)
  }));
  dart.defineLazy(binding$0._FrameCallbackEntry, {
    /*binding$0._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  }, true);
  var _name$ = dart.privateName(binding$0, "_name");
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  binding$0.SchedulerPhase = class SchedulerPhase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$0.SchedulerPhase.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$0.SchedulerPhase.prototype;
  dart.addTypeTests(binding$0.SchedulerPhase);
  dart.addTypeCaches(binding$0.SchedulerPhase);
  dart.setLibraryUri(binding$0.SchedulerPhase, L3);
  dart.setFieldSignature(binding$0.SchedulerPhase, () => ({
    __proto__: dart.getFields(binding$0.SchedulerPhase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$0.SchedulerPhase, ['toString']);
  binding$0.SchedulerPhase.idle = C3 || CT.C3;
  binding$0.SchedulerPhase.transientCallbacks = C4 || CT.C4;
  binding$0.SchedulerPhase.midFrameMicrotasks = C5 || CT.C5;
  binding$0.SchedulerPhase.persistentCallbacks = C6 || CT.C6;
  binding$0.SchedulerPhase.postFrameCallbacks = C7 || CT.C7;
  binding$0.SchedulerPhase.values = C8 || CT.C8;
  var _timingsCallbacks = dart.privateName(binding$0, "_timingsCallbacks");
  var _lifecycleState = dart.privateName(binding$0, "_lifecycleState");
  var C9;
  var _taskQueue = dart.privateName(binding$0, "_taskQueue");
  var C10;
  var _hasRequestedAnEventLoopCallback = dart.privateName(binding$0, "_hasRequestedAnEventLoopCallback");
  var _nextFrameCallbackId = dart.privateName(binding$0, "_nextFrameCallbackId");
  var _transientCallbacks = dart.privateName(binding$0, "_transientCallbacks");
  var _removedIds = dart.privateName(binding$0, "_removedIds");
  var _persistentCallbacks = dart.privateName(binding$0, "_persistentCallbacks");
  var _postFrameCallbacks = dart.privateName(binding$0, "_postFrameCallbacks");
  var _nextFrameCompleter = dart.privateName(binding$0, "_nextFrameCompleter");
  var _hasScheduledFrame = dart.privateName(binding$0, "_hasScheduledFrame");
  var _schedulerPhase = dart.privateName(binding$0, "_schedulerPhase");
  var _framesEnabled = dart.privateName(binding$0, "_framesEnabled");
  var _warmUpFrame = dart.privateName(binding$0, "_warmUpFrame");
  var _firstRawTimeStampInEpoch = dart.privateName(binding$0, "_firstRawTimeStampInEpoch");
  var _epochStart = dart.privateName(binding$0, "_epochStart");
  var _lastRawTimeStamp = dart.privateName(binding$0, "_lastRawTimeStamp");
  var _currentFrameTimeStamp = dart.privateName(binding$0, "_currentFrameTimeStamp");
  var _debugFrameNumber = dart.privateName(binding$0, "_debugFrameNumber");
  var _debugBanner = dart.privateName(binding$0, "_debugBanner");
  var _ignoreNextEngineDrawFrame = dart.privateName(binding$0, "_ignoreNextEngineDrawFrame");
  var _handleLifecycleMessage = dart.privateName(binding$0, "_handleLifecycleMessage");
  var _profileFramePostEvent = dart.privateName(binding$0, "_profileFramePostEvent");
  var _executeTimingsCallbacks = dart.privateName(binding$0, "_executeTimingsCallbacks");
  var _setFramesEnabledState = dart.privateName(binding$0, "_setFramesEnabledState");
  var _name = dart.privateName(ui, "_name");
  var C11;
  var C12;
  var C13;
  var C14;
  var _ensureEventLoopCallback = dart.privateName(binding$0, "_ensureEventLoopCallback");
  var _runTasks = dart.privateName(binding$0, "_runTasks");
  var _handleBeginFrame = dart.privateName(binding$0, "_handleBeginFrame");
  var _handleDrawFrame = dart.privateName(binding$0, "_handleDrawFrame");
  var _adjustForEpoch = dart.privateName(binding$0, "_adjustForEpoch");
  var _invokeFrameCallback = dart.privateName(binding$0, "_invokeFrameCallback");
  var schedulingStrategy = dart.privateName(binding$0, "SchedulerBinding.schedulingStrategy");
  binding$0.SchedulerBinding = class SchedulerBinding extends core.Object {
    static get instance() {
      return binding$0.SchedulerBinding._instance;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.detached":
        {
          return ui.AppLifecycleState.detached;
        }
      }
      return null;
    }
    static _taskSorter(e1, e2) {
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.test(dart.fn(() => {
        if (binding$0._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          print.debugPrint("When the current transient callback was registered, this was the stack:");
          print.debugPrint(assertions.FlutterError.defaultStackFilter(dart.toString(binding$0._FrameCallbackEntry.debugCurrentCallbackStack)[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 617, 12, "() {\n      if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {\n        debugPrint('When the current transient callback was registered, this was the stack:');\n        debugPrint(\n          FlutterError.defaultStackFilter(\n            _FrameCallbackEntry.debugCurrentCallbackStack.toString().trimRight().split('\\n')\n          ).join('\\n')\n        );\n      } else {\n        debugPrint('No transient callback is currently executing.');\n      }\n      return true;\n    }()");
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (dart.notNull(timeStamp.inDays) > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (dart.notNull(timeStamp.inHours) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inHours) - dart.notNull(timeStamp.inDays) * 24) + "h ");
      if (dart.notNull(timeStamp.inMinutes) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inMinutes) - dart.notNull(timeStamp.inHours) * 60) + "m ");
      if (dart.notNull(timeStamp.inSeconds) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inSeconds) - dart.notNull(timeStamp.inMinutes) * 60) + "s ");
      buffer.write(dart.str(dart.notNull(timeStamp.inMilliseconds) - dart.notNull(timeStamp.inSeconds) * 1000));
      let microseconds = dart.notNull(timeStamp.inMicroseconds) - dart.notNull(timeStamp.inMilliseconds) * 1000;
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  binding$0.SchedulerBinding[dart.mixinOn] = _SchedulerBinding$36BindingBase$36ServicesBinding => class SchedulerBinding extends _SchedulerBinding$36BindingBase$36ServicesBinding {
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    initInstances() {
      super.initInstances();
      binding$0.SchedulerBinding._instance = this;
      system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      this.readInitialLifecycleStateFromNativeWindow();
      if (!false) {
        let frameNumber = 0;
        this.addTimingsCallback(dart.fn(timings => {
          for (let frameTiming of timings) {
            frameNumber = frameNumber + 1;
            this[_profileFramePostEvent](frameNumber, frameTiming);
          }
        }, ListLOfFrameTimingLToNullN()));
      }
    }
    addTimingsCallback(callback) {
      this[_timingsCallbacks][$add](callback);
      if (this[_timingsCallbacks][$length] === 1) {
        if (!(this.window.onReportTimings == null)) dart.assertFailed(null, L2, 233, 14, "window.onReportTimings == null");
        this.window.onReportTimings = dart.bind(this, _executeTimingsCallbacks);
      }
      if (!dart.equals(this.window.onReportTimings, dart.bind(this, _executeTimingsCallbacks))) dart.assertFailed(null, L2, 236, 12, "window.onReportTimings == _executeTimingsCallbacks");
    }
    removeTimingsCallback(callback) {
      if (!dart.test(this[_timingsCallbacks][$contains](callback))) dart.assertFailed(null, L2, 241, 12, "_timingsCallbacks.contains(callback)");
      this[_timingsCallbacks][$remove](callback);
      if (dart.test(this[_timingsCallbacks][$isEmpty])) {
        this.window.onReportTimings = null;
      }
    }
    [_executeTimingsCallbacks](timings) {
      let clonedCallbacks = ListOfListLOfFrameTimingLToLvoid().from(this[_timingsCallbacks]);
      for (let callback of clonedCallbacks) {
        try {
          if (dart.test(this[_timingsCallbacks][$contains](callback))) {
            callback(timings);
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          let collector = null;
          if (!dart.test(dart.fn(() => {
            collector = dart.fn(() => new (SyncIterableOfDiagnosticsNodeL()).new(function*() {
              yield new (DiagnosticsPropertyOfListLOfFrameTimingLToLvoid()).new("The TimingsCallback that gets executed was", callback, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableLOfDiagnosticsNodeL());
            return true;
          }, VoidToboolL())())) dart.assertFailed(null, L2, 258, 16, "() {\n          collector = () sync* {\n            yield DiagnosticsProperty<TimingsCallback>(\n              'The TimingsCallback that gets executed was',\n              callback,\n              style: DiagnosticsTreeStyle.errorProperty,\n            );\n          };\n          return true;\n        }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, context: new assertions.ErrorDescription.new("while executing callbacks for FrameTiming"), informationCollector: collector}));
        }
      }
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!false) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return binding$0.timeDilation;
          }), VoidToFutureLOfdoubleL()), setter: dart.fn(value => async.async(core.Null, function*() {
            binding$0.timeDilation = value;
          }), doubleLToFutureLOfNullN())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this[_lifecycleState] == null && binding$0.SchedulerBinding._parseAppLifecycleMessage(this.window.initialLifecycleState) != null) {
        this[_handleLifecycleMessage](this.window.initialLifecycleState);
      }
    }
    handleAppLifecycleStateChanged(state) {
      if (!(state != null)) dart.assertFailed(null, L2, 334, 12, "state != null");
      this[_lifecycleState] = state;
      switch (state) {
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case C13 || CT.C13:
        case C14 || CT.C14:
        {
          this[_setFramesEnabledState](false);
          break;
        }
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(core.String, (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(binding$0.SchedulerBinding._parseAppLifecycleMessage(message));
        return null;
      }).bind(this));
    }
    scheduleTask(T, task, priority, opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (binding$0._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (dart.test(isFirstTask) && !dart.test(this.locked)) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (dart.test(this[_taskQueue].isNotEmpty)) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, L2, 428, 12, "!locked");
      if (!dart.test(this[_taskQueue].isNotEmpty)) dart.assertFailed(null, L2, 429, 12, "_taskQueue.isNotEmpty");
      if (dart.test(this[_hasRequestedAnEventLoopCallback])) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (dart.test(this.handleEventLoopCallback())) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      let t1;
      if (dart.test(this[_taskQueue].isEmpty) || dart.test(this.locked)) return false;
      let entry = this[_taskQueue].first;
      if (dart.test((t1 = entry.priority, this.schedulingStrategy({priority: t1, scheduler: this})))) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          let callbackStack = null;
          if (!dart.test(dart.fn(() => {
            callbackStack = entry.debugStack;
            return true;
          }, VoidToboolL())())) dart.assertFailed(null, L2, 464, 16, "() {\n          callbackStack = entry.debugStack;\n          return true;\n        }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a task callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsNodeL()).new(function*() {
              yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
            }), VoidToIterableLOfDiagnosticsNodeL())}));
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      this.scheduleFrame();
      this[_nextFrameCallbackId] = dart.notNull(this[_nextFrameCallbackId]) + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new binding$0._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (!(dart.notNull(id) > 0)) dart.assertFailed(null, L2, 536, 12, "id > 0");
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.transientCallbackCount) > 0) {
          let count = this.transientCallbackCount;
          let callbacks = LinkedHashMapOfintL$_FrameCallbackEntryL().from(this[_transientCallbacks]);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNodeL()).new(function*() {
              if (count === 1) {
                yield new assertions.ErrorDescription.new("There was one transient callback left. " + "The stack trace for when it was registered is as follows:");
              } else {
                yield new assertions.ErrorDescription.new("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:");
              }
              for (let id of callbacks[$keys]) {
                let entry = callbacks[$_get](id);
                yield new assertions.DiagnosticsStackTrace.new("── callback " + dart.str(id) + " ──", entry.debugStack, {showSeparator: false});
              }
            }), VoidToIterableLOfDiagnosticsNodeL())}));
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 562, 12, "() {\n      if (transientCallbackCount > 0) {\n        // We cache the values so that we can produce them later\n        // even if the information collector is called after\n        // the problem has been resolved.\n        final int count = transientCallbackCount;\n        final Map<int, _FrameCallbackEntry> callbacks = Map<int, _FrameCallbackEntry>.from(_transientCallbacks);\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: reason,\n          library: 'scheduler library',\n          informationCollector: () sync* {\n            if (count == 1) {\n              // TODO(jacobr): I have added an extra line break in this case.\n              yield ErrorDescription(\n                'There was one transient callback left. '\n                'The stack trace for when it was registered is as follows:'\n              );\n            } else {\n              yield ErrorDescription(\n                'There were $count transient callbacks left. '\n                'The stack traces for when they were registered are as follows:'\n              );\n            }\n            for (final int id in callbacks.keys) {\n              final _FrameCallbackEntry entry = callbacks[id];\n              yield DiagnosticsStackTrace('── callback $id ──', entry.debugStack, showSeparator: false);\n            }\n          },\n        ));\n      }\n      return true;\n    }()");
      return true;
    }
    addPersistentFrameCallback(callback) {
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) this.scheduleFrame();
        this[_nextFrameCompleter] = CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          this[_nextFrameCompleter].complete();
          this[_nextFrameCompleter] = null;
        }, DurationLToNullN()));
      }
      return this[_nextFrameCompleter].future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (dart.equals(this[_framesEnabled], enabled)) return;
      this[_framesEnabled] = enabled;
      if (dart.test(enabled)) this.scheduleFrame();
    }
    ensureFrameCallbacksRegistered() {
      let t2, t2$;
      t2 = this.window;
      t2.onBeginFrame == null ? t2.onBeginFrame = dart.bind(this, _handleBeginFrame) : null;
      t2$ = this.window;
      t2$.onDrawFrame == null ? t2$.onDrawFrame = dart.bind(this, _handleDrawFrame) : null;
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case C3 || CT.C3:
        case C7 || CT.C7:
        {
          this.scheduleFrame();
          return;
        }
        case C4 || CT.C4:
        case C5 || CT.C5:
        case C6 || CT.C6:
        {
          return;
        }
      }
    }
    scheduleFrame() {
      if (dart.test(this[_hasScheduledFrame]) || !dart.test(this.framesEnabled)) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 784, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.ensureFrameCallbacksRegistered();
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (!dart.test(this.framesEnabled)) return;
      if (dart.test(this[_hasScheduledFrame])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 821, 12, "() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(label: 'scheduleForcedFrame() called. Current phase is $schedulerPhase.');\n      return true;\n    }()");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      if (dart.test(this[_warmUpFrame]) || !dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) return;
      this[_warmUpFrame] = true;
      developer.Timeline.startSync("Warm-up frame");
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, L2, 856, 14, "_warmUpFrame");
        this.handleBeginFrame(null);
      }, VoidToNullN()));
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, L2, 860, 14, "_warmUpFrame");
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (dart.test(hadScheduledFrame)) this.scheduleFrame();
      }, VoidToNullN()));
      this.lockEvents(dart.fn(() => async.async(core.Null, (function*() {
        yield this.endOfFrame;
        developer.Timeline.finishSync();
      }).bind(this)), VoidToFutureLOfNullN()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](this[_firstRawTimeStampInEpoch]);
      return new core.Duration.new({microseconds: (dart.notNull(rawDurationSinceEpoch.inMicroseconds) / dart.notNull(binding$0.timeDilation))[$round]() + dart.notNull(this[_epochStart].inMicroseconds)});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed(null, L2, 929, 12, "_currentFrameTimeStamp != null");
      return this[_currentFrameTimeStamp];
    }
    get currentSystemFrameTimeStamp() {
      if (!(this[_lastRawTimeStamp] != null)) dart.assertFailed(null, L2, 946, 12, "_lastRawTimeStamp != null");
      return this[_lastRawTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (dart.test(this[_warmUpFrame])) {
        if (!!dart.test(this[_ignoreNextEngineDrawFrame])) dart.assertFailed(null, L2, 956, 14, "!_ignoreNextEngineDrawFrame");
        this[_ignoreNextEngineDrawFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (dart.test(this[_ignoreNextEngineDrawFrame])) {
        this[_ignoreNextEngineDrawFrame] = false;
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      let t2;
      developer.Timeline.startSync("Frame", {arguments: debug.timelineWhitelistArguments});
      this[_firstRawTimeStampInEpoch] == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : null;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch]((t2 = rawTimeStamp, t2 == null ? this[_lastRawTimeStamp] : t2));
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      if (!dart.test(dart.fn(() => {
        this[_debugFrameNumber] = dart.notNull(this[_debugFrameNumber]) + 1;
        if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            binding$0.SchedulerBinding._debugDescribeTimeStamp(this[_currentFrameTimeStamp], frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "▄▄▄▄▄▄▄▄ Frame " + dart.toString(this[_debugFrameNumber])[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ▄▄▄▄▄▄▄▄";
          if (dart.test(debug$.debugPrintBeginFrameBanner)) print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 1001, 12, "() {\n      _debugFrameNumber += 1;\n\n      if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\n        final StringBuffer frameTimeStampDescription = StringBuffer();\n        if (rawTimeStamp != null) {\n          _debugDescribeTimeStamp(_currentFrameTimeStamp, frameTimeStampDescription);\n        } else {\n          frameTimeStampDescription.write('(warm-up frame)');\n        }\n        _debugBanner = '▄▄▄▄▄▄▄▄ Frame ${_debugFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ▄▄▄▄▄▄▄▄';\n        if (debugPrintBeginFrameBanner)\n          debugPrint(_debugBanner);\n      }\n      return true;\n    }()");
      if (!dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) dart.assertFailed(null, L2, 1018, 12, "schedulerPhase == SchedulerPhase.idle");
      this[_hasScheduledFrame] = false;
      try {
        developer.Timeline.startSync("Animate", {arguments: debug.timelineWhitelistArguments});
        this[_schedulerPhase] = binding$0.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (IdentityMapOfintL$_FrameCallbackEntryL()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (!dart.test(this[_removedIds].contains(id))) this[_invokeFrameCallback](callbackEntry.callback, this[_currentFrameTimeStamp], callbackEntry.debugStack);
        }, intLAnd_FrameCallbackEntryLToNullN()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = binding$0.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      if (!dart.equals(this[_schedulerPhase], binding$0.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed(null, L2, 1046, 12, "_schedulerPhase == SchedulerPhase.midFrameMicrotasks");
      developer.Timeline.finishSync();
      try {
        this[_schedulerPhase] = binding$0.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
        this[_schedulerPhase] = binding$0.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = ListOfDurationLToLvoid().from(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
      } finally {
        this[_schedulerPhase] = binding$0.SchedulerPhase.idle;
        developer.Timeline.finishSync();
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$.debugPrintEndFrameBanner)) print.debugPrint("▀"[$times](this[_debugBanner].length));
          this[_debugBanner] = null;
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L2, 1064, 14, "() {\n        if (debugPrintEndFrameBanner)\n          debugPrint('▀' * _debugBanner.length);\n        _debugBanner = null;\n        return true;\n      }()");
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent](frameNumber, frameTiming) {
      this.postEvent("Flutter.Frame", new (IdentityMapOfStringL$dynamic()).from(["number", frameNumber, "startTime", frameTiming.timestampInMicroseconds(ui.FramePhase.buildStart), "elapsed", frameTiming.totalSpan.inMicroseconds, "build", frameTiming.buildDuration.inMicroseconds, "raster", frameTiming.rasterDuration.inMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack = null) {
      if (!(callback != null)) dart.assertFailed(null, L2, 1106, 12, "callback != null");
      if (!(binding$0._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed(null, L2, 1107, 12, "_FrameCallbackEntry.debugCurrentCallbackStack == null");
      if (!dart.test(dart.fn(() => {
        binding$0._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 1108, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;\n      return true;\n    }()");
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a scheduler callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsNodeL()).new(function*() {
            yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
          }), VoidToIterableLOfDiagnosticsNodeL())}));
      }
      if (!dart.test(dart.fn(() => {
        binding$0._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 1130, 12, "() {\n      _FrameCallbackEntry.debugCurrentCallbackStack = null;\n      return true;\n    }()");
    }
  };
  (binding$0.SchedulerBinding[dart.mixinNew] = function() {
    this[_timingsCallbacks] = JSArrayOfListLOfFrameTimingLToLvoid().of([]);
    this[_lifecycleState] = null;
    this[schedulingStrategy] = C9 || CT.C9;
    this[_taskQueue] = new (HeapPriorityQueueOf_TaskEntryL()).new(C10 || CT.C10);
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (IdentityMapOfintL$_FrameCallbackEntryL()).new();
    this[_removedIds] = new (_IdentityHashSetOfintL()).new();
    this[_persistentCallbacks] = JSArrayOfDurationLToLvoid().of([]);
    this[_postFrameCallbacks] = JSArrayOfDurationLToLvoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = binding$0.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_debugFrameNumber] = 0;
    this[_debugBanner] = null;
    this[_ignoreNextEngineDrawFrame] = false;
  }).prototype = binding$0.SchedulerBinding.prototype;
  dart.addTypeTests(binding$0.SchedulerBinding);
  dart.addTypeCaches(binding$0.SchedulerBinding);
  binding$0.SchedulerBinding[dart.implements] = () => [binding$.ServicesBinding, binding.BindingBase];
  dart.setMethodSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getMethods(binding$0.SchedulerBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    addTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    removeTimingsCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.List$(ui.FrameTiming)])]),
    [_executeTimingsCallbacks]: dart.fnType(dart.void, [core.List$(ui.FrameTiming)]),
    initServiceExtensions: dart.fnType(dart.void, []),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui.AppLifecycleState]),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(core.String), [core.String]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), priority$.Priority], {debugLabel: core.String, flow: developer.Flow}, {}]),
    unlocked: dart.fnType(dart.void, []),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}, {}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureFrameCallbacksRegistered: dart.fnType(dart.void, []),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [core.Duration]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, [core.int, ui.FrameTiming]),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [core.StackTrace])
  }));
  dart.setGetterSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getGetters(binding$0.SchedulerBinding.__proto__),
    lifecycleState: ui.AppLifecycleState,
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: binding$0.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration,
    currentSystemFrameTimeStamp: core.Duration
  }));
  dart.setLibraryUri(binding$0.SchedulerBinding, L3);
  dart.setFieldSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getFields(binding$0.SchedulerBinding.__proto__),
    [_timingsCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.List$(ui.FrameTiming)]))),
    [_lifecycleState]: dart.fieldType(ui.AppLifecycleState),
    schedulingStrategy: dart.fieldType(dart.fnType(core.bool, [], {priority: core.int, scheduler: binding$0.SchedulerBinding}, {})),
    [_taskQueue]: dart.finalFieldType(priority_queue.PriorityQueue$(binding$0._TaskEntry)),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(core.Map$(core.int, binding$0._FrameCallbackEntry)),
    [_removedIds]: dart.finalFieldType(core.Set$(core.int)),
    [_persistentCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_postFrameCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_nextFrameCompleter]: dart.fieldType(async.Completer$(dart.void)),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(binding$0.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(core.Duration),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(core.Duration),
    [_debugFrameNumber]: dart.fieldType(core.int),
    [_debugBanner]: dart.fieldType(core.String),
    [_ignoreNextEngineDrawFrame]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(binding$0.SchedulerBinding, {
    /*binding$0.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  }, true);
  binding$0.defaultSchedulingStrategy = function defaultSchedulingStrategy(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (dart.notNull(scheduler.transientCallbackCount) > 0) return dart.notNull(priority) >= dart.notNull(priority$.Priority.animation.value);
    return true;
  };
  dart.copyProperties(binding$0, {
    get timeDilation() {
      return binding$0._timeDilation;
    },
    set timeDilation(value) {
      let t3;
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, L2, 26, 10, "value > 0.0");
      if (binding$0._timeDilation == value) return;
      t3 = binding$0.SchedulerBinding.instance;
      t3 == null ? null : t3.resetEpoch();
      binding$0._timeDilation = value;
    }
  });
  dart.defineLazy(binding$0, {
    /*binding$0._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  }, true);
  ticker$.TickerProvider = class TickerProvider extends core.Object {};
  (ticker$.TickerProvider.new = function() {
    ;
  }).prototype = ticker$.TickerProvider.prototype;
  dart.addTypeTests(ticker$.TickerProvider);
  dart.addTypeCaches(ticker$.TickerProvider);
  dart.setLibraryUri(ticker$.TickerProvider, L4);
  var _future = dart.privateName(ticker$, "_future");
  var _muted = dart.privateName(ticker$, "_muted");
  var _startTime = dart.privateName(ticker$, "_startTime");
  var _animationId = dart.privateName(ticker$, "_animationId");
  var _debugCreationStack = dart.privateName(ticker$, "_debugCreationStack");
  var _onTick$ = dart.privateName(ticker$, "_onTick");
  var _cancel = dart.privateName(ticker$, "_cancel");
  var _complete = dart.privateName(ticker$, "_complete");
  var _tick = dart.privateName(ticker$, "_tick");
  var debugLabel$ = dart.privateName(ticker$, "Ticker.debugLabel");
  ticker$.Ticker = class Ticker extends core.Object {
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get muted() {
      return this[_muted];
    }
    set muted(value) {
      if (dart.equals(value, this.muted)) return;
      this[_muted] = value;
      if (dart.test(value)) {
        this.unscheduleTick();
      } else if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
    }
    get isTicking() {
      if (this[_future] == null) return false;
      if (dart.test(this.muted)) return false;
      if (dart.test(binding$0.SchedulerBinding.instance.framesEnabled)) return true;
      if (!dart.equals(binding$0.SchedulerBinding.instance.schedulerPhase, binding$0.SchedulerPhase.idle)) return true;
      return false;
    }
    get isActive() {
      return this[_future] != null;
    }
    start() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.isActive)) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNodeL().of([new assertions.ErrorSummary.new("A ticker was started twice."), new assertions.ErrorDescription.new("A ticker that is already active cannot be started again without first stopping it."), this.describeForError("The affected ticker was")])));
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L5, 148, 12, "() {\n      if (isActive) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('A ticker was started twice.'),\n          ErrorDescription('A ticker that is already active cannot be started again without first stopping it.'),\n          describeForError('The affected ticker was'),\n        ]);\n      }\n      return true;\n    }()");
      if (!(this[_startTime] == null)) dart.assertFailed(null, L5, 158, 12, "_startTime == null");
      this[_future] = new ticker$.TickerFuture.__();
      if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
      if (dart.notNull(binding$0.SchedulerBinding.instance.schedulerPhase.index) > dart.notNull(binding$0.SchedulerPhase.idle.index) && dart.notNull(binding$0.SchedulerBinding.instance.schedulerPhase.index) < dart.notNull(binding$0.SchedulerPhase.postFrameCallbacks.index)) this[_startTime] = binding$0.SchedulerBinding.instance.currentFrameTimeStamp;
      return this[_future];
    }
    describeForError(name) {
      return new (DiagnosticsPropertyOfTickerL()).new(name, this, {description: this.toString({debugIncludeStack: true})});
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : false;
      if (!dart.test(this.isActive)) return;
      let localFuture = this[_future];
      this[_future] = null;
      this[_startTime] = null;
      if (!!dart.test(this.isActive)) dart.assertFailed(null, L5, 200, 12, "!isActive");
      this.unscheduleTick();
      if (dart.test(canceled)) {
        localFuture[_cancel](this);
      } else {
        localFuture[_complete]();
      }
    }
    get scheduled() {
      return this[_animationId] != null;
    }
    get shouldScheduleTick() {
      return !dart.test(this.muted) && dart.test(this.isActive) && !dart.test(this.scheduled);
    }
    [_tick](timeStamp) {
      let t3;
      if (!dart.test(this.isTicking)) dart.assertFailed(null, L5, 232, 12, "isTicking");
      if (!dart.test(this.scheduled)) dart.assertFailed(null, L5, 233, 12, "scheduled");
      this[_animationId] = null;
      this[_startTime] == null ? this[_startTime] = timeStamp : null;
      t3 = timeStamp['-'](this[_startTime]);
      this[_onTick$](t3);
      if (dart.test(this.shouldScheduleTick)) this.scheduleTick({rescheduling: true});
    }
    scheduleTick(opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      if (!!dart.test(this.scheduled)) dart.assertFailed(null, L5, 250, 12, "!scheduled");
      if (!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, L5, 251, 12, "shouldScheduleTick");
      this[_animationId] = binding$0.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _tick), {rescheduling: rescheduling});
    }
    unscheduleTick() {
      if (dart.test(this.scheduled)) {
        binding$0.SchedulerBinding.instance.cancelFrameCallbackWithId(this[_animationId]);
        this[_animationId] = null;
      }
      if (!!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, L5, 267, 12, "!shouldScheduleTick");
    }
    absorbTicker(originalTicker) {
      if (!!dart.test(this.isActive)) dart.assertFailed(null, L5, 280, 12, "!isActive");
      if (!(this[_future] == null)) dart.assertFailed(null, L5, 281, 12, "_future == null");
      if (!(this[_startTime] == null)) dart.assertFailed(null, L5, 282, 12, "_startTime == null");
      if (!(this[_animationId] == null)) dart.assertFailed(null, L5, 283, 12, "_animationId == null");
      if (!(originalTicker[_future] == null)[$_equals](originalTicker[_startTime] == null)) dart.assertFailed("Cannot absorb Ticker after it has been disposed.", L5, 284, 12, "(originalTicker._future == null) == (originalTicker._startTime == null)");
      if (originalTicker[_future] != null) {
        this[_future] = originalTicker[_future];
        this[_startTime] = originalTicker[_startTime];
        if (dart.test(this.shouldScheduleTick)) this.scheduleTick();
        originalTicker[_future] = null;
        originalTicker.unscheduleTick();
      }
      originalTicker.dispose();
    }
    dispose() {
      if (this[_future] != null) {
        let localFuture = this[_future];
        this[_future] = null;
        if (!!dart.test(this.isActive)) dart.assertFailed(null, L5, 303, 14, "!isActive");
        this.unscheduleTick();
        localFuture[_cancel](this);
      }
      if (!dart.test(dart.fn(() => {
        this[_startTime] = core.Duration.zero;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L5, 307, 12, "() {\n      // We intentionally don't null out _startTime. This means that if start()\n      // was ever called, the object is now in a bogus state. This weakly helps\n      // catch cases of use-after-dispose.\n      _startTime = Duration.zero;\n      return true;\n    }()");
    }
    toString(opts) {
      let debugIncludeStack = opts && 'debugIncludeStack' in opts ? opts.debugIncludeStack : false;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(object.objectRuntimeType(this, "Ticker")) + "(");
      if (!dart.test(dart.fn(() => {
        let t3;
        buffer.write((t3 = this.debugLabel, t3 == null ? "" : t3));
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L5, 326, 12, "() {\n      buffer.write(debugLabel ?? '');\n      return true;\n    }()");
      buffer.write(")");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debugIncludeStack)) {
          buffer.writeln();
          buffer.writeln("The stack trace when the " + dart.str(this[$runtimeType]) + " was actually created was:");
          assertions.FlutterError.defaultStackFilter(dart.toString(this[_debugCreationStack])[$trimRight]()[$split]("\n"))[$forEach](dart.bind(buffer, 'writeln'));
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L5, 331, 12, "() {\n      if (debugIncludeStack) {\n        buffer.writeln();\n        buffer.writeln('The stack trace when the $runtimeType was actually created was:');\n        FlutterError.defaultStackFilter(_debugCreationStack.toString().trimRight().split('\\n')).forEach(buffer.writeln);\n      }\n      return true;\n    }()");
      return buffer.toString();
    }
  };
  (ticker$.Ticker.new = function(_onTick, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[_future] = null;
    this[_muted] = false;
    this[_startTime] = null;
    this[_animationId] = null;
    this[_debugCreationStack] = null;
    this[_onTick$] = _onTick;
    this[debugLabel$] = debugLabel;
    if (!dart.test(dart.fn(() => {
      this[_debugCreationStack] = core.StackTrace.current;
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L5, 65, 12, "() {\n      _debugCreationStack = StackTrace.current;\n      return true;\n    }()");
  }).prototype = ticker$.Ticker.prototype;
  dart.addTypeTests(ticker$.Ticker);
  dart.addTypeCaches(ticker$.Ticker);
  dart.setMethodSignature(ticker$.Ticker, () => ({
    __proto__: dart.getMethods(ticker$.Ticker.__proto__),
    start: dart.fnType(ticker$.TickerFuture, []),
    describeForError: dart.fnType(diagnostics.DiagnosticsNode, [core.String]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}, {}),
    [_tick]: dart.fnType(dart.void, [core.Duration]),
    scheduleTick: dart.fnType(dart.void, [], {rescheduling: core.bool}, {}),
    unscheduleTick: dart.fnType(dart.void, []),
    absorbTicker: dart.fnType(dart.void, [ticker$.Ticker]),
    dispose: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, [], {debugIncludeStack: core.bool}, {}),
    [$toString]: dart.fnType(core.String, [], {debugIncludeStack: core.bool}, {})
  }));
  dart.setGetterSignature(ticker$.Ticker, () => ({
    __proto__: dart.getGetters(ticker$.Ticker.__proto__),
    muted: core.bool,
    isTicking: core.bool,
    isActive: core.bool,
    scheduled: core.bool,
    shouldScheduleTick: core.bool
  }));
  dart.setSetterSignature(ticker$.Ticker, () => ({
    __proto__: dart.getSetters(ticker$.Ticker.__proto__),
    muted: core.bool
  }));
  dart.setLibraryUri(ticker$.Ticker, L4);
  dart.setFieldSignature(ticker$.Ticker, () => ({
    __proto__: dart.getFields(ticker$.Ticker.__proto__),
    [_future]: dart.fieldType(ticker$.TickerFuture),
    [_muted]: dart.fieldType(core.bool),
    [_startTime]: dart.fieldType(core.Duration),
    [_onTick$]: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    [_animationId]: dart.fieldType(core.int),
    debugLabel: dart.finalFieldType(core.String),
    [_debugCreationStack]: dart.fieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(ticker$.Ticker, ['toString']);
  var _primaryCompleter = dart.privateName(ticker$, "_primaryCompleter");
  var _secondaryCompleter = dart.privateName(ticker$, "_secondaryCompleter");
  var _completed = dart.privateName(ticker$, "_completed");
  var TickerCanceled_ticker = dart.privateName(ticker$, "TickerCanceled.ticker");
  var C15;
  ticker$.TickerFuture = class TickerFuture extends core.Object {
    [_complete]() {
      let t3;
      if (!(this[_completed] == null)) dart.assertFailed(null, L5, 378, 12, "_completed == null");
      this[_completed] = true;
      this[_primaryCompleter].complete(null);
      t3 = this[_secondaryCompleter];
      t3 == null ? null : t3.complete(null);
    }
    [_cancel](ticker) {
      let t3;
      if (!(this[_completed] == null)) dart.assertFailed(null, L5, 385, 12, "_completed == null");
      this[_completed] = false;
      t3 = this[_secondaryCompleter];
      t3 == null ? null : t3.completeError(new ticker$.TickerCanceled.new(ticker));
    }
    whenCompleteOrCancel(callback) {
      function thunk(value) {
        callback();
      }
      dart.fn(thunk, dynamicTovoid());
      this.orCancel.then(dart.void, thunk, {onError: thunk});
    }
    get orCancel() {
      if (this[_secondaryCompleter] == null) {
        this[_secondaryCompleter] = CompleterOfvoid().new();
        if (this[_completed] != null) {
          if (dart.test(this[_completed])) {
            this[_secondaryCompleter].complete();
          } else {
            this[_secondaryCompleter].completeError(C15 || CT.C15);
          }
        }
      }
      return this[_secondaryCompleter].future;
    }
    asStream() {
      return this[_primaryCompleter].future.asStream();
    }
    catchError(onError, opts) {
      let test = opts && 'test' in opts ? opts.test : null;
      return this[_primaryCompleter].future.catchError(onError, {test: test});
    }
    then(R, onValue, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return this[_primaryCompleter].future.then(R, onValue, {onError: onError});
    }
    timeout(timeLimit, opts) {
      let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
      VoidToLdynamic().as(onTimeout);
      return this[_primaryCompleter].future.timeout(timeLimit, {onTimeout: onTimeout});
    }
    whenComplete(action) {
      return this[_primaryCompleter].future.whenComplete(action);
    }
    toString() {
      return dart.str(diagnostics.describeIdentity(this)) + "(" + (this[_completed] == null ? "active" : dart.test(this[_completed]) ? "complete" : "canceled") + ")";
    }
  };
  (ticker$.TickerFuture.__ = function() {
    this[_primaryCompleter] = CompleterOfvoid().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    ;
  }).prototype = ticker$.TickerFuture.prototype;
  (ticker$.TickerFuture.complete = function() {
    this[_primaryCompleter] = CompleterOfvoid().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    this[_complete]();
  }).prototype = ticker$.TickerFuture.prototype;
  ticker$.TickerFuture.prototype[dart.isFuture] = true;
  dart.addTypeTests(ticker$.TickerFuture);
  dart.addTypeCaches(ticker$.TickerFuture);
  ticker$.TickerFuture[dart.implements] = () => [async.Future$(dart.void)];
  dart.setMethodSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getMethods(ticker$.TickerFuture.__proto__),
    [_complete]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, [ticker$.Ticker]),
    whenCompleteOrCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    asStream: dart.fnType(async.Stream$(dart.void), []),
    catchError: dart.fnType(async.Future$(dart.void), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}, {}),
    then: dart.gFnType(R => [async.Future$(R), [dart.fnType(async.FutureOr$(R), [dart.void])], {onError: core.Function}, {}]),
    timeout: dart.fnType(async.Future$(dart.void), [core.Duration], {onTimeout: core.Object}, {}),
    whenComplete: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.dynamic, [])])
  }));
  dart.setGetterSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getGetters(ticker$.TickerFuture.__proto__),
    orCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(ticker$.TickerFuture, L4);
  dart.setFieldSignature(ticker$.TickerFuture, () => ({
    __proto__: dart.getFields(ticker$.TickerFuture.__proto__),
    [_primaryCompleter]: dart.finalFieldType(async.Completer$(dart.void)),
    [_secondaryCompleter]: dart.fieldType(async.Completer$(dart.void)),
    [_completed]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(ticker$.TickerFuture, ['toString']);
  ticker$.TickerCanceled = class TickerCanceled extends core.Object {
    get ticker() {
      return this[ticker$0];
    }
    set ticker(value) {
      super.ticker = value;
    }
    toString() {
      if (this.ticker != null) return "This ticker was canceled: " + dart.str(this.ticker);
      return "The ticker was canceled before the \"orCancel\" property was first used.";
    }
  };
  (ticker$.TickerCanceled.new = function(ticker = null) {
    this[ticker$0] = ticker;
    ;
  }).prototype = ticker$.TickerCanceled.prototype;
  dart.addTypeTests(ticker$.TickerCanceled);
  dart.addTypeCaches(ticker$.TickerCanceled);
  const ticker$0 = TickerCanceled_ticker;
  ticker$.TickerCanceled[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(ticker$.TickerCanceled, L4);
  dart.setFieldSignature(ticker$.TickerCanceled, () => ({
    __proto__: dart.getFields(ticker$.TickerCanceled.__proto__),
    ticker: dart.finalFieldType(ticker$.Ticker)
  }));
  dart.defineExtensionMethods(ticker$.TickerCanceled, ['toString']);
  dart.trackLibraries("packages/flutter/src/scheduler/binding", {
    "package:flutter/src/scheduler/debug.dart": debug$,
    "package:flutter/src/scheduler/priority.dart": priority$,
    "package:flutter/src/scheduler/binding.dart": binding$0,
    "package:flutter/src/scheduler/ticker.dart": ticker$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","priority.dart","binding.dart","ticker.dart"],"names":[],"mappings":"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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__scheduler__debug: debug$,
    src__scheduler__priority: priority$,
    src__scheduler__binding: binding$0,
    src__scheduler__ticker: ticker$
  };
});

//# sourceMappingURL=binding.ddc.js.map
