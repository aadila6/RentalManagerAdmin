define(['dart_sdk', 'packages/quiver/time'], function(dart_sdk, packages__quiver__time) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time = packages__quiver__time.time;
  var async$ = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $any = dartx.any;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $where = dartx.where;
  var $isEmpty = dartx.isEmpty;
  var $reduce = dartx.reduce;
  var ListQueueOfFunctionL = () => (ListQueueOfFunctionL = dart.constFn(collection.ListQueue$(core.Function)))();
  var _HashSetOf_FakeTimerL = () => (_HashSetOf_FakeTimerL = dart.constFn(collection._HashSet$(async$._FakeTimer)))();
  var VoidToDateTimeL = () => (VoidToDateTimeL = dart.constFn(dart.fnType(core.DateTime, [])))();
  var _FakeTimerLToboolL = () => (_FakeTimerLToboolL = dart.constFn(dart.fnType(core.bool, [async$._FakeTimer])))();
  var _FakeTimerLToStringL = () => (_FakeTimerLToStringL = dart.constFn(dart.fnType(core.String, [async$._FakeTimer])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var ZoneLAndZoneDelegateLAndZoneL__ToTimerL = () => (ZoneLAndZoneDelegateLAndZoneL__ToTimerL = dart.constFn(dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, core.Function])))();
  var ZoneLAndZoneDelegateLAndZoneL__ToNullN = () => (ZoneLAndZoneDelegateLAndZoneL__ToNullN = dart.constFn(dart.fnType(core.Null, [async.Zone, async.ZoneDelegate, async.Zone, core.Function])))();
  var _FakeTimerLAnd_FakeTimerLTo_FakeTimerL = () => (_FakeTimerLAnd_FakeTimerLTo_FakeTimerL = dart.constFn(dart.fnType(async$._FakeTimer, [async$._FakeTimer, async$._FakeTimer])))();
  const CT = Object.create(null);
  var L1 = "file:///private/var/folders/kv/jfkyvgcx1q3_7nwhmrnqw7z80000gn/T/scratch_spacenntfA9/packages/quiver/testing/src/async/fake_async.dart";
  var L0 = "package:quiver/testing/async.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 3600000000.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 0
      });
    }
  }, false);
  async$.FakeAsync = class FakeAsync extends core.Object {};
  (async$.FakeAsync[dart.mixinNew] = function() {
  }).prototype = async$.FakeAsync.prototype;
  dart.addTypeTests(async$.FakeAsync);
  dart.addTypeCaches(async$.FakeAsync);
  dart.setLibraryUri(async$.FakeAsync, L0);
  var _elapsed = dart.privateName(async$, "_elapsed");
  var _elapsingTo = dart.privateName(async$, "_elapsingTo");
  var _microtasks = dart.privateName(async$, "_microtasks");
  var _timers = dart.privateName(async$, "_timers");
  var _zone = dart.privateName(async$, "_zone");
  var _nextCall = dart.privateName(async$, "_nextCall");
  var _drainTimersWhile = dart.privateName(async$, "_drainTimersWhile");
  var _elapseTo = dart.privateName(async$, "_elapseTo");
  var _drainMicrotasks = dart.privateName(async$, "_drainMicrotasks");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var _isPeriodic$ = dart.privateName(async$, "_isPeriodic");
  var _zoneSpec = dart.privateName(async$, "_zoneSpec");
  var _createTimer = dart.privateName(async$, "_createTimer");
  var _getNextTimer = dart.privateName(async$, "_getNextTimer");
  var _runTimer = dart.privateName(async$, "_runTimer");
  var _callback$ = dart.privateName(async$, "_callback");
  var _duration = dart.privateName(async$, "_duration");
  var _hasTimer = dart.privateName(async$, "_hasTimer");
  var _cancelTimer = dart.privateName(async$, "_cancelTimer");
  async$._FakeAsync = class _FakeAsync extends core.Object {
    getClock(initialTime) {
      return new time.Clock.new(dart.fn(() => initialTime.add(this[_elapsed]), VoidToDateTimeL()));
    }
    elapse(duration) {
      if (dart.notNull(duration.inMicroseconds) < 0) {
        dart.throw(new core.ArgumentError.new("Cannot call elapse with negative duration"));
      }
      if (this[_elapsingTo] != null) {
        dart.throw(new core.StateError.new("Cannot elapse until previous elapse is complete."));
      }
      this[_elapsingTo] = this[_elapsed]['+'](duration);
      this[_drainTimersWhile](dart.fn(next => next[_nextCall]['<='](this[_elapsingTo]), _FakeTimerLToboolL()));
      this[_elapseTo](this[_elapsingTo]);
      this[_elapsingTo] = null;
    }
    elapseBlocking(duration) {
      if (dart.notNull(duration.inMicroseconds) < 0) {
        dart.throw(new core.ArgumentError.new("Cannot call elapse with negative duration"));
      }
      this[_elapsed] = this[_elapsed]['+'](duration);
      if (this[_elapsingTo] != null && dart.test(this[_elapsed]['>'](this[_elapsingTo]))) {
        this[_elapsingTo] = this[_elapsed];
      }
    }
    flushMicrotasks() {
      this[_drainMicrotasks]();
    }
    flushTimers(opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C0 || CT.C0;
      let flushPeriodicTimers = opts && 'flushPeriodicTimers' in opts ? opts.flushPeriodicTimers : true;
      let absoluteTimeout = this[_elapsed]['+'](timeout);
      this[_drainTimersWhile](dart.fn(timer => {
        if (dart.test(timer[_nextCall]['>'](absoluteTimeout))) {
          dart.throw(new core.StateError.new("Exceeded timeout " + dart.str(timeout) + " while flushing timers"));
        }
        if (dart.test(flushPeriodicTimers)) {
          return this[_timers][$isNotEmpty];
        } else {
          return this[_timers][$any](dart.fn(timer => !dart.test(timer[_isPeriodic$]) || dart.test(timer[_nextCall]['<='](this[_elapsed])), _FakeTimerLToboolL()));
        }
      }, _FakeTimerLToboolL()));
    }
    get pendingTimersDebugInfo() {
      return this[_timers][$map](core.String, dart.fn(timer => dart.str(timer.debugInfo), _FakeTimerLToStringL()))[$toList]({growable: false});
    }
    run(callback) {
      this[_zone] == null ? this[_zone] = async.Zone.current.fork({specification: this[_zoneSpec]}) : null;
      let result = null;
      this[_zone].runGuarded(dart.fn(() => {
        result = callback(this);
      }, VoidToNullN()));
      return result;
    }
    get periodicTimerCount() {
      return this[_timers][$where](dart.fn(timer => timer[_isPeriodic$], _FakeTimerLToboolL()))[$length];
    }
    get nonPeriodicTimerCount() {
      return this[_timers][$where](dart.fn(timer => !dart.test(timer[_isPeriodic$]), _FakeTimerLToboolL()))[$length];
    }
    get microtaskCount() {
      return this[_microtasks][$length];
    }
    get [_zoneSpec]() {
      return new async._ZoneSpecification.new({createTimer: dart.fn((_, __, ___, duration, callback) => this[_createTimer](duration, callback, false), ZoneLAndZoneDelegateLAndZoneL__ToTimerL()), createPeriodicTimer: dart.fn((_, __, ___, duration, callback) => this[_createTimer](duration, callback, true), ZoneLAndZoneDelegateLAndZoneL__ToTimerL()), scheduleMicrotask: dart.fn((_, __, ___, microtask) => {
          this[_microtasks].add(microtask);
        }, ZoneLAndZoneDelegateLAndZoneL__ToNullN())});
    }
    [_drainTimersWhile](predicate) {
      this[_drainMicrotasks]();
      let next = null;
      while ((next = this[_getNextTimer]()) != null && dart.test(predicate(next))) {
        this[_runTimer](next);
        this[_drainMicrotasks]();
      }
    }
    [_elapseTo](to) {
      if (dart.test(to['>'](this[_elapsed]))) {
        this[_elapsed] = to;
      }
    }
    [_createTimer](duration, callback, isPeriodic) {
      let timer = new async$._FakeTimer.__(duration, callback, isPeriodic, this);
      this[_timers].add(timer);
      return timer;
    }
    [_getNextTimer]() {
      return dart.test(this[_timers][$isEmpty]) ? null : this[_timers][$reduce](dart.fn((t1, t2) => dart.test(t1[_nextCall]['<='](t2[_nextCall])) ? t1 : t2, _FakeTimerLAnd_FakeTimerLTo_FakeTimerL()));
    }
    [_runTimer](timer) {
      let t1, t0, t0$;
      if (!dart.test(timer.isActive)) dart.assertFailed(null, L1, 252, 12, "timer.isActive");
      this[_elapseTo](timer[_nextCall]);
      if (dart.test(timer[_isPeriodic$])) {
        t0 = timer;
        t1 = timer;
        dart.dsend(t0, _callback$, [t1]);
        t0$ = timer;
        t0$[_nextCall] = t0$[_nextCall]['+'](timer[_duration]);
      } else {
        this[_timers].remove(timer);
        dart.dsend(timer, _callback$, []);
      }
    }
    [_drainMicrotasks]() {
      while (dart.test(this[_microtasks][$isNotEmpty])) {
        dart.dcall(this[_microtasks].removeFirst(), []);
      }
    }
    [_hasTimer](timer) {
      return this[_timers].contains(timer);
    }
    [_cancelTimer](timer) {
      return this[_timers].remove(timer);
    }
  };
  (async$._FakeAsync.new = function() {
    this[_elapsed] = core.Duration.zero;
    this[_elapsingTo] = null;
    this[_microtasks] = new (ListQueueOfFunctionL()).new();
    this[_timers] = new (_HashSetOf_FakeTimerL()).new();
    this[_zone] = null;
    ;
  }).prototype = async$._FakeAsync.prototype;
  dart.addTypeTests(async$._FakeAsync);
  dart.addTypeCaches(async$._FakeAsync);
  async$._FakeAsync[dart.implements] = () => [async$.FakeAsync];
  dart.setMethodSignature(async$._FakeAsync, () => ({
    __proto__: dart.getMethods(async$._FakeAsync.__proto__),
    getClock: dart.fnType(time.Clock, [core.DateTime]),
    elapse: dart.fnType(dart.void, [core.Duration]),
    elapseBlocking: dart.fnType(dart.void, [core.Duration]),
    flushMicrotasks: dart.fnType(dart.void, []),
    flushTimers: dart.fnType(dart.void, [], {flushPeriodicTimers: core.bool, timeout: core.Duration}, {}),
    run: dart.fnType(dart.dynamic, [dart.fnType(dart.dynamic, [async$.FakeAsync])]),
    [_drainTimersWhile]: dart.fnType(dart.void, [dart.fnType(core.bool, [async$._FakeTimer])]),
    [_elapseTo]: dart.fnType(dart.void, [core.Duration]),
    [_createTimer]: dart.fnType(async.Timer, [core.Duration, core.Function, core.bool]),
    [_getNextTimer]: dart.fnType(async$._FakeTimer, []),
    [_runTimer]: dart.fnType(dart.void, [async$._FakeTimer]),
    [_drainMicrotasks]: dart.fnType(dart.void, []),
    [_hasTimer]: dart.fnType(core.bool, [async$._FakeTimer]),
    [_cancelTimer]: dart.fnType(dart.void, [async$._FakeTimer])
  }));
  dart.setGetterSignature(async$._FakeAsync, () => ({
    __proto__: dart.getGetters(async$._FakeAsync.__proto__),
    pendingTimersDebugInfo: core.List$(core.String),
    periodicTimerCount: core.int,
    nonPeriodicTimerCount: core.int,
    microtaskCount: core.int,
    [_zoneSpec]: async.ZoneSpecification
  }));
  dart.setLibraryUri(async$._FakeAsync, L0);
  dart.setFieldSignature(async$._FakeAsync, () => ({
    __proto__: dart.getFields(async$._FakeAsync.__proto__),
    [_elapsed]: dart.fieldType(core.Duration),
    [_elapsingTo]: dart.fieldType(core.Duration),
    [_microtasks]: dart.finalFieldType(collection.Queue$(core.Function)),
    [_timers]: dart.finalFieldType(core.Set$(async$._FakeTimer)),
    [_zone]: dart.fieldType(async.Zone)
  }));
  var _time$ = dart.privateName(async$, "_time");
  var _creationStackTrace = dart.privateName(async$, "_creationStackTrace");
  var C1;
  async$._FakeTimer = class _FakeTimer extends core.Object {
    get isActive() {
      return this[_time$][_hasTimer](this);
    }
    cancel() {
      return this[_time$][_cancelTimer](this);
    }
    get tick() {
      dart.throw(new core.UnimplementedError.new("tick"));
    }
    get debugInfo() {
      return "Timer (duration: " + dart.str(this[_duration]) + ", periodic: " + dart.str(this[_isPeriodic$]) + "), created:\n" + dart.str(this[_creationStackTrace]);
    }
  };
  (async$._FakeTimer.__ = function(duration, _callback, _isPeriodic, _time) {
    this[_nextCall] = null;
    this[_callback$] = _callback;
    this[_isPeriodic$] = _isPeriodic;
    this[_time$] = _time;
    this[_duration] = dart.test(duration['<'](async$._FakeTimer._minDuration)) ? async$._FakeTimer._minDuration : duration;
    this[_creationStackTrace] = core.StackTrace.current;
    this[_nextCall] = this[_time$][_elapsed]['+'](this[_duration]);
  }).prototype = async$._FakeTimer.prototype;
  dart.addTypeTests(async$._FakeTimer);
  dart.addTypeCaches(async$._FakeTimer);
  async$._FakeTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(async$._FakeTimer, () => ({
    __proto__: dart.getMethods(async$._FakeTimer.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(async$._FakeTimer, () => ({
    __proto__: dart.getGetters(async$._FakeTimer.__proto__),
    isActive: core.bool,
    tick: core.int,
    debugInfo: core.String
  }));
  dart.setLibraryUri(async$._FakeTimer, L0);
  dart.setFieldSignature(async$._FakeTimer, () => ({
    __proto__: dart.getFields(async$._FakeTimer.__proto__),
    [_duration]: dart.finalFieldType(core.Duration),
    [_callback$]: dart.finalFieldType(core.Function),
    [_isPeriodic$]: dart.finalFieldType(core.bool),
    [_time$]: dart.finalFieldType(async$._FakeAsync),
    [_creationStackTrace]: dart.finalFieldType(core.StackTrace),
    [_nextCall]: dart.fieldType(core.Duration)
  }));
  dart.defineLazy(async$._FakeTimer, {
    /*async$._FakeTimer._minDuration*/get _minDuration() {
      return C1 || CT.C1;
    }
  }, true);
  dart.trackLibraries("packages/quiver/testing/async", {
    "package:quiver/testing/async.dart": async$
  }, {
    "package:quiver/testing/async.dart": ["src/async/fake_async.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/async/fake_async.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    testing__async: async$
  };
});

//# sourceMappingURL=async.ddc.js.map
