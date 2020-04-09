define(['dart_sdk', 'packages/path/path'], function(dart_sdk, packages__path__path) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path = packages__path__path.path;
  var trace$ = Object.create(dart.library);
  var vm_trace = Object.create(dart.library);
  var frame$ = Object.create(dart.library);
  var unparsed_frame = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var lazy_trace = Object.create(dart.library);
  var chain$ = Object.create(dart.library);
  var stack_zone_specification = Object.create(dart.library);
  var lazy_chain = Object.create(dart.library);
  var stack_trace = Object.create(dart.library);
  var $split = dartx.split;
  var $skip = dartx.skip;
  var $startsWith = dartx.startsWith;
  var $skipWhile = dartx.skipWhile;
  var $map = dartx.map;
  var $where = dartx.where;
  var $trim = dartx.trim;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $contains = dartx.contains;
  var $replaceAll = dartx.replaceAll;
  var $length = dartx.length;
  var $take = dartx.take;
  var $toList = dartx.toList;
  var $last = dartx.last;
  var $endsWith = dartx.endsWith;
  var $add = dartx.add;
  var $reversed = dartx.reversed;
  var $first = dartx.first;
  var $removeAt = dartx.removeAt;
  var $fold = dartx.fold;
  var $padRight = dartx.padRight;
  var $join = dartx.join;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $_get = dartx._get;
  var $allMatches = dartx.allMatches;
  var $addAll = dartx.addAll;
  var $single = dartx.single;
  var $expand = dartx.expand;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var StringLToboolL = () => (StringLToboolL = dart.constFn(dart.fnType(core.bool, [core.String])))();
  var StringLToFrameL = () => (StringLToFrameL = dart.constFn(dart.fnType(frame$.Frame, [core.String])))();
  var JSArrayOfFrameL = () => (JSArrayOfFrameL = dart.constFn(_interceptors.JSArray$(frame$.Frame)))();
  var ListOfFrameL = () => (ListOfFrameL = dart.constFn(core.List$(frame$.Frame)))();
  var VoidToTraceL = () => (VoidToTraceL = dart.constFn(dart.fnType(trace$.Trace, [])))();
  var FrameLToboolL = () => (FrameLToboolL = dart.constFn(dart.fnType(core.bool, [frame$.Frame])))();
  var FrameLToFrameL = () => (FrameLToFrameL = dart.constFn(dart.fnType(frame$.Frame, [frame$.Frame])))();
  var FrameLTointL = () => (FrameLTointL = dart.constFn(dart.fnType(core.int, [frame$.Frame])))();
  var TLAndTLToTL = () => (TLAndTLToTL = dart.constFn(dart.gFnType(T => [T, [T, T]], T => [core.num])))();
  var FrameLToStringL = () => (FrameLToStringL = dart.constFn(dart.fnType(core.String, [frame$.Frame])))();
  var MatchLToStringL = () => (MatchLToStringL = dart.constFn(dart.fnType(core.String, [core.Match])))();
  var VoidToFrameL = () => (VoidToFrameL = dart.constFn(dart.fnType(frame$.Frame, [])))();
  var dynamicAnddynamicToFrameL = () => (dynamicAnddynamicToFrameL = dart.constFn(dart.fnType(frame$.Frame, [dart.dynamic, dart.dynamic])))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(core.String)))();
  var ListOfTraceL = () => (ListOfTraceL = dart.constFn(core.List$(trace$.Trace)))();
  var dynamicAnddynamicToNullN = () => (dynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  var LinkedMapOfObjectL$boolL = () => (LinkedMapOfObjectL$boolL = dart.constFn(_js_helper.LinkedMap$(core.Object, core.bool)))();
  var JSArrayOfTraceL = () => (JSArrayOfTraceL = dart.constFn(_interceptors.JSArray$(trace$.Trace)))();
  var VoidToChainL = () => (VoidToChainL = dart.constFn(dart.fnType(chain$.Chain, [])))();
  var StringLToTraceL = () => (StringLToTraceL = dart.constFn(dart.fnType(trace$.Trace, [core.String])))();
  var TraceLToTraceL = () => (TraceLToTraceL = dart.constFn(dart.fnType(trace$.Trace, [trace$.Trace])))();
  var TraceLToboolL = () => (TraceLToboolL = dart.constFn(dart.fnType(core.bool, [trace$.Trace])))();
  var TraceLToListLOfFrameL = () => (TraceLToListLOfFrameL = dart.constFn(dart.fnType(ListOfFrameL(), [trace$.Trace])))();
  var TraceLTointL = () => (TraceLTointL = dart.constFn(dart.fnType(core.int, [trace$.Trace])))();
  var TraceLToStringL = () => (TraceLToStringL = dart.constFn(dart.fnType(core.String, [trace$.Trace])))();
  var ExpandoOf_NodeL = () => (ExpandoOf_NodeL = dart.constFn(core.Expando$(stack_zone_specification._Node)))();
  const CT = Object.create(null);
  var L4 = "package:stack_trace/src/lazy_trace.dart";
  var L0 = "package:stack_trace/src/trace.dart";
  var L1 = "package:stack_trace/src/vm_trace.dart";
  var L2 = "package:stack_trace/src/frame.dart";
  var L6 = "package:stack_trace/src/stack_zone_specification.dart";
  var L5 = "package:stack_trace/src/chain.dart";
  var L3 = "package:stack_trace/src/unparsed_frame.dart";
  var L7 = "package:stack_trace/src/lazy_chain.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(math.max, TLAndTLToTL());
    }
  }, false);
  var C0;
  var frames$ = dart.privateName(trace$, "Trace.frames");
  var original$ = dart.privateName(trace$, "Trace.original");
  trace$.Trace = class Trace extends core.Object {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    static format(stackTrace, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : true;
      let trace = trace$.Trace.from(stackTrace);
      if (dart.test(terse)) trace = trace.terse;
      return dart.toString(trace);
    }
    static current(level = 0) {
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      let trace = trace$.Trace.from(core.StackTrace.current);
      return new lazy_trace.LazyTrace.new(dart.fn(() => new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(trace.original)}), VoidToTraceL()));
    }
    static from(trace) {
      if (trace == null) {
        dart.throw(new core.ArgumentError.new("Cannot create a Trace from null."));
      }
      if (trace$.Trace.is(trace)) return trace;
      if (chain$.Chain.is(trace)) return trace.toTrace();
      return new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(dart.toString(trace)), VoidToTraceL()));
    }
    static parse(trace) {
      try {
        if (trace[$isEmpty]) return new trace$.Trace.new(JSArrayOfFrameL().of([]));
        if (trace[$contains](trace$._v8Trace)) return new trace$.Trace.parseV8(trace);
        if (trace[$contains]("\tat ")) return new trace$.Trace.parseJSCore(trace);
        if (trace[$contains](trace$._firefoxSafariTrace)) {
          return new trace$.Trace.parseFirefox(trace);
        }
        if (trace[$contains](utils.chainGap)) return chain$.Chain.parse(trace).toTrace();
        if (trace[$contains](trace$._friendlyTrace)) {
          return new trace$.Trace.parseFriendly(trace);
        }
        return new trace$.Trace.parseVM(trace);
      } catch (e) {
        let error = dart.getThrown(e);
        if (core.FormatException.is(error)) {
          dart.throw(new core.FormatException.new(dart.str(error.message) + "\nStack trace:\n" + dart.str(trace)));
        } else
          throw e;
      }
    }
    static _parseVM(trace) {
      let lines = trace[$trim]()[$replaceAll]("<asynchronous suspension>\n", "")[$split]("\n");
      let frames = lines[$take](dart.notNull(lines[$length]) - 1)[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseVM(line), StringLToFrameL()))[$toList]();
      if (!lines[$last][$endsWith](".da")) {
        frames[$add](frame$.Frame.parseVM(lines[$last]));
      }
      return frames;
    }
    get vmTrace() {
      return new vm_trace.VMTrace.new(this.frames);
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameLToboolL()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      if (dart.test(terse)) {
        let oldPredicate = predicate;
        predicate = dart.fn(frame => {
          if (dart.test(oldPredicate(frame))) return true;
          if (dart.test(frame.isCore)) return true;
          if (frame.package === "stack_trace") return true;
          if (!frame.member[$contains]("<async>")) return false;
          return frame.line == null;
        }, FrameLToboolL());
      }
      let newFrames = JSArrayOfFrameL().of([]);
      for (let frame of this.frames[$reversed]) {
        if (unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) {
          newFrames[$add](frame);
        } else if (dart.test(newFrames[$isEmpty]) || !dart.test(predicate(newFrames[$last]))) {
          newFrames[$add](new frame$.Frame.new(frame.uri, frame.line, frame.column, frame.member));
        }
      }
      if (dart.test(terse)) {
        newFrames = newFrames[$map](frame$.Frame, dart.fn(frame => {
          if (unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) return frame;
          let library = frame.library[$replaceAll](trace$._terseRegExp, "");
          return new frame$.Frame.new(core.Uri.parse(library), null, null, frame.member);
        }, FrameLToFrameL()))[$toList]();
        if (dart.notNull(newFrames[$length]) > 1 && dart.test(predicate(newFrames[$first]))) {
          newFrames[$removeAt](0);
        }
      }
      return new trace$.Trace.new(newFrames[$reversed], {original: dart.toString(this.original)});
    }
    toString() {
      let longest = this.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameLTointL()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int));
      return this.frames[$map](core.String, dart.fn(frame => {
        if (unparsed_frame.UnparsedFrame.is(frame)) return dart.str(frame) + "\n";
        return frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n";
      }, FrameLToStringL()))[$join]();
    }
  };
  (trace$.Trace.parseVM = function(trace) {
    trace$.Trace.new.call(this, trace$.Trace._parseVM(trace), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseV8 = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$skip](1)[$skipWhile](dart.fn(line => !line[$startsWith](trace$._v8TraceLine), StringLToboolL()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseV8(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseJSCore = function(trace) {
    trace$.Trace.new.call(this, trace[$split]("\n")[$where](dart.fn(line => line !== "\tat ", StringLToboolL()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseV8(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseIE = function(trace) {
    trace$.Trace.parseV8.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFirefox = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty] && line !== "[native code]", StringLToboolL()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFirefox(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari = function(trace) {
    trace$.Trace.parseFirefox.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_1 = function(trace) {
    trace$.Trace.parseSafari.call(this, trace);
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseSafari6_0 = function(trace) {
    trace$.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line !== "[native code]", StringLToboolL()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFirefox(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.parseFriendly = function(trace) {
    trace$.Trace.new.call(this, trace[$isEmpty] ? JSArrayOfFrameL().of([]) : trace[$trim]()[$split]("\n")[$where](dart.fn(line => !line[$startsWith]("====="), StringLToboolL()))[$map](frame$.Frame, dart.fn(line => frame$.Frame.parseFriendly(line), StringLToFrameL())), {original: trace});
  }).prototype = trace$.Trace.prototype;
  (trace$.Trace.new = function(frames, opts) {
    let original = opts && 'original' in opts ? opts.original : null;
    this[frames$] = ListOfFrameL().unmodifiable(frames);
    this[original$] = new core._StringStackTrace.new(original);
    ;
  }).prototype = trace$.Trace.prototype;
  dart.addTypeTests(trace$.Trace);
  dart.addTypeCaches(trace$.Trace);
  trace$.Trace[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(trace$.Trace, () => ({
    __proto__: dart.getMethods(trace$.Trace.__proto__),
    foldFrames: dart.fnType(trace$.Trace, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}, {})
  }));
  dart.setGetterSignature(trace$.Trace, () => ({
    __proto__: dart.getGetters(trace$.Trace.__proto__),
    vmTrace: core.StackTrace,
    terse: trace$.Trace
  }));
  dart.setLibraryUri(trace$.Trace, L0);
  dart.setFieldSignature(trace$.Trace, () => ({
    __proto__: dart.getFields(trace$.Trace.__proto__),
    frames: dart.finalFieldType(core.List$(frame$.Frame)),
    original: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(trace$.Trace, ['toString']);
  dart.defineLazy(trace$, {
    /*trace$._terseRegExp*/get _terseRegExp() {
      return core.RegExp.new("(-patch)?([/\\\\].*)?$");
    },
    /*trace$._v8Trace*/get _v8Trace() {
      return core.RegExp.new("\\n    ?at ");
    },
    /*trace$._v8TraceLine*/get _v8TraceLine() {
      return core.RegExp.new("    ?at ");
    },
    /*trace$._firefoxSafariTrace*/get _firefoxSafariTrace() {
      return core.RegExp.new("^" + "(" + "([.0-9A-Za-z_$/<]|\\(.*\\))*" + "@" + ")?" + "[^\\s]*" + ":\\d*" + "$", {multiLine: true});
    },
    /*trace$._friendlyTrace*/get _friendlyTrace() {
      return core.RegExp.new("^[^\\s<][^\\s]*( \\d+(:\\d+)?)?[ \\t]+[^\\s]+$", {multiLine: true});
    }
  }, true);
  var frames$0 = dart.privateName(vm_trace, "VMTrace.frames");
  vm_trace.VMTrace = class VMTrace extends core.Object {
    get frames() {
      return this[frames$0];
    }
    set frames(value) {
      super.frames = value;
    }
    toString() {
      let i = 1;
      return this.frames[$map](core.String, dart.fn(frame => {
        let t1;
        let number = ("#" + dart.str((t1 = i, i = t1 + 1, t1)))[$padRight](8);
        let member = frame.member[$replaceAllMapped](core.RegExp.new("[^.]+\\.<async>"), dart.fn(match => dart.str(match._get(1)) + ".<" + dart.str(match._get(1)) + "_async_body>", MatchLToStringL()))[$replaceAll]("<fn>", "<anonymous closure>");
        let line = frame.line == null ? 0 : frame.line;
        let column = frame.column == null ? 0 : frame.column;
        return number + member + " (" + dart.str(frame.uri) + ":" + dart.str(line) + ":" + dart.str(column) + ")\n";
      }, FrameLToStringL()))[$join]();
    }
  };
  (vm_trace.VMTrace.new = function(frames) {
    this[frames$0] = frames;
    ;
  }).prototype = vm_trace.VMTrace.prototype;
  dart.addTypeTests(vm_trace.VMTrace);
  dart.addTypeCaches(vm_trace.VMTrace);
  vm_trace.VMTrace[dart.implements] = () => [core.StackTrace];
  dart.setLibraryUri(vm_trace.VMTrace, L1);
  dart.setFieldSignature(vm_trace.VMTrace, () => ({
    __proto__: dart.getFields(vm_trace.VMTrace.__proto__),
    frames: dart.finalFieldType(core.List$(frame$.Frame))
  }));
  dart.defineExtensionMethods(vm_trace.VMTrace, ['toString']);
  var uri$ = dart.privateName(frame$, "Frame.uri");
  var line$ = dart.privateName(frame$, "Frame.line");
  var column$ = dart.privateName(frame$, "Frame.column");
  var member$ = dart.privateName(frame$, "Frame.member");
  frame$.Frame = class Frame extends core.Object {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get member() {
      return this[member$];
    }
    set member(value) {
      super.member = value;
    }
    get isCore() {
      return this.uri.scheme === "dart";
    }
    get library() {
      if (this.uri.scheme === "data") return "data:...";
      return path.prettyUri(this.uri);
    }
    get package() {
      if (this.uri.scheme !== "package") return null;
      return this.uri.path[$split]("/")[$first];
    }
    get location() {
      if (this.line == null) return this.library;
      if (this.column == null) return dart.str(this.library) + " " + dart.str(this.line);
      return dart.str(this.library) + " " + dart.str(this.line) + ":" + dart.str(this.column);
    }
    static caller(level = 1) {
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      return trace$.Trace.current(dart.notNull(level) + 1).frames[$first];
    }
    static parseVM(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        if (frame === "...") {
          return new frame$.Frame.new(core._Uri.new(), null, null, "...");
        }
        let match = frame$._vmFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let member = match._get(1)[$replaceAll](frame$._asyncBody, "<async>")[$replaceAll]("<anonymous closure>", "<fn>");
        let uri = core.Uri.parse(match._get(2));
        let lineAndColumn = match._get(3)[$split](":");
        let line = dart.notNull(lineAndColumn[$length]) > 1 ? core.int.parse(lineAndColumn[$_get](1)) : null;
        let column = dart.notNull(lineAndColumn[$length]) > 2 ? core.int.parse(lineAndColumn[$_get](2)) : null;
        return new frame$.Frame.new(uri, line, column, member);
      }, VoidToFrameL()));
    }
    static parseV8(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._v8Frame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        function parseLocation(location, member) {
          let evalMatch = frame$._v8EvalLocation.firstMatch(core.String.as(location));
          while (evalMatch != null) {
            location = evalMatch._get(1);
            evalMatch = frame$._v8EvalLocation.firstMatch(core.String.as(location));
          }
          if (dart.equals(location, "native")) {
            return new frame$.Frame.new(core.Uri.parse("native"), null, null, core.String.as(member));
          }
          let urlMatch = frame$._v8UrlLocation.firstMatch(core.String.as(location));
          if (urlMatch == null) return new unparsed_frame.UnparsedFrame.new(frame);
          return new frame$.Frame.new(frame$.Frame._uriOrPathToUri(urlMatch._get(1)), core.int.parse(urlMatch._get(2)), core.int.parse(urlMatch._get(3)), core.String.as(member));
        }
        dart.fn(parseLocation, dynamicAnddynamicToFrameL());
        if (match._get(2) != null) {
          return parseLocation(match._get(2), match._get(1)[$replaceAll]("<anonymous>", "<fn>")[$replaceAll]("Anonymous function", "<fn>")[$replaceAll]("(anonymous function)", "<fn>"));
        } else {
          return parseLocation(match._get(3), "<fn>");
        }
      }, VoidToFrameL()));
    }
    static parseJSCore(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static parseIE(frame) {
      return frame$.Frame.parseV8(frame);
    }
    static parseFirefox(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._firefoxSafariFrame.firstMatch(frame);
        if (match == null) return new unparsed_frame.UnparsedFrame.new(frame);
        let uri = frame$.Frame._uriOrPathToUri(match._get(3));
        let member = null;
        if (match._get(1) != null) {
          member = match._get(1);
          member = dart.dsend(member, '+', [ListOfStringL().filled("/"[$allMatches](match._get(2))[$length], ".<fn>")[$join]()]);
          if (dart.equals(member, "")) member = "<fn>";
          member = dart.dsend(member, 'replaceFirst', [frame$._initialDot, ""]);
        } else {
          member = "<fn>";
        }
        let line = match._get(4) === "" ? null : core.int.parse(match._get(4));
        let column = match._get(5) == null || match._get(5) === "" ? null : core.int.parse(match._get(5));
        return new frame$.Frame.new(uri, line, column, core.String.as(member));
      }, VoidToFrameL()));
    }
    static parseSafari6_0(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari6_1(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseSafari(frame) {
      return frame$.Frame.parseFirefox(frame);
    }
    static parseFriendly(frame) {
      return frame$.Frame._catchFormatException(frame, dart.fn(() => {
        let match = frame$._friendlyFrame.firstMatch(frame);
        if (match == null) {
          dart.throw(new core.FormatException.new("Couldn't parse package:stack_trace stack trace line '" + dart.str(frame) + "'."));
        }
        let uri = match._get(1) === "data:..." ? core.Uri.dataFromString("") : core.Uri.parse(match._get(1));
        if (uri.scheme === "") {
          uri = path.toUri(path.absolute(path.fromUri(uri)));
        }
        let line = match._get(2) == null ? null : core.int.parse(match._get(2));
        let column = match._get(3) == null ? null : core.int.parse(match._get(3));
        return new frame$.Frame.new(uri, line, column, match._get(4));
      }, VoidToFrameL()));
    }
    static _uriOrPathToUri(uriOrPath) {
      if (uriOrPath[$contains](frame$.Frame._uriRegExp)) {
        return core.Uri.parse(uriOrPath);
      } else if (uriOrPath[$contains](frame$.Frame._windowsRegExp)) {
        return core._Uri.file(uriOrPath, {windows: true});
      } else if (uriOrPath[$startsWith]("/")) {
        return core._Uri.file(uriOrPath, {windows: false});
      }
      if (uriOrPath[$contains]("\\")) return path.windows.toUri(uriOrPath);
      return core.Uri.parse(uriOrPath);
    }
    static _catchFormatException(text, body) {
      try {
        return body();
      } catch (e) {
        let _ = dart.getThrown(e);
        if (core.FormatException.is(_)) {
          return new unparsed_frame.UnparsedFrame.new(text);
        } else
          throw e;
      }
    }
    toString() {
      return dart.str(this.location) + " in " + dart.str(this.member);
    }
  };
  (frame$.Frame.new = function(uri, line, column, member) {
    this[uri$] = uri;
    this[line$] = line;
    this[column$] = column;
    this[member$] = member;
    ;
  }).prototype = frame$.Frame.prototype;
  dart.addTypeTests(frame$.Frame);
  dart.addTypeCaches(frame$.Frame);
  dart.setGetterSignature(frame$.Frame, () => ({
    __proto__: dart.getGetters(frame$.Frame.__proto__),
    isCore: core.bool,
    library: core.String,
    package: core.String,
    location: core.String
  }));
  dart.setLibraryUri(frame$.Frame, L2);
  dart.setFieldSignature(frame$.Frame, () => ({
    __proto__: dart.getFields(frame$.Frame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(frame$.Frame, ['toString']);
  dart.defineLazy(frame$.Frame, {
    /*frame$.Frame._uriRegExp*/get _uriRegExp() {
      return core.RegExp.new("^[a-zA-Z][-+.a-zA-Z\\d]*://");
    },
    /*frame$.Frame._windowsRegExp*/get _windowsRegExp() {
      return core.RegExp.new("^([a-zA-Z]:[\\\\/]|\\\\\\\\)");
    }
  }, true);
  dart.defineLazy(frame$, {
    /*frame$._vmFrame*/get _vmFrame() {
      return core.RegExp.new("^#\\d+\\s+(\\S.*) \\((.+?)((?::\\d+){0,2})\\)$");
    },
    /*frame$._v8Frame*/get _v8Frame() {
      return core.RegExp.new("^\\s*at (?:(\\S.*?)(?: \\[as [^\\]]+\\])? \\((.*)\\)|(.*))$");
    },
    /*frame$._v8UrlLocation*/get _v8UrlLocation() {
      return core.RegExp.new("^(.*):(\\d+):(\\d+)|native$");
    },
    /*frame$._v8EvalLocation*/get _v8EvalLocation() {
      return core.RegExp.new("^eval at (?:\\S.*?) \\((.*)\\)(?:, .*?:\\d+:\\d+)?$");
    },
    /*frame$._firefoxSafariFrame*/get _firefoxSafariFrame() {
      return core.RegExp.new("^" + "(?:" + "([^@(/]*)" + "(?:\\(.*\\))?" + "((?:/[^/]*)*)" + "(?:\\(.*\\))?" + "@" + ")?" + "(.*?)" + ":" + "(\\d*)" + "(?::(\\d*))?" + "$");
    },
    /*frame$._friendlyFrame*/get _friendlyFrame() {
      return core.RegExp.new("^(\\S+)(?: (\\d+)(?::(\\d+))?)?\\s+([^\\d].*)$");
    },
    /*frame$._asyncBody*/get _asyncBody() {
      return core.RegExp.new("<(<anonymous closure>|[^>]+)_async_body>");
    },
    /*frame$._initialDot*/get _initialDot() {
      return core.RegExp.new("^\\.");
    }
  }, true);
  var uri = dart.privateName(unparsed_frame, "UnparsedFrame.uri");
  var line = dart.privateName(unparsed_frame, "UnparsedFrame.line");
  var column = dart.privateName(unparsed_frame, "UnparsedFrame.column");
  var isCore = dart.privateName(unparsed_frame, "UnparsedFrame.isCore");
  var library = dart.privateName(unparsed_frame, "UnparsedFrame.library");
  var package$ = dart.privateName(unparsed_frame, "UnparsedFrame.package");
  var location = dart.privateName(unparsed_frame, "UnparsedFrame.location");
  var member$0 = dart.privateName(unparsed_frame, "UnparsedFrame.member");
  unparsed_frame.UnparsedFrame = class UnparsedFrame extends core.Object {
    get uri() {
      return this[uri];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column];
    }
    set column(value) {
      super.column = value;
    }
    get isCore() {
      return this[isCore];
    }
    set isCore(value) {
      super.isCore = value;
    }
    get library() {
      return this[library];
    }
    set library(value) {
      super.library = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      super.location = value;
    }
    get member() {
      return this[member$0];
    }
    set member(value) {
      super.member = value;
    }
    toString() {
      return this.member;
    }
  };
  (unparsed_frame.UnparsedFrame.new = function(member) {
    this[uri] = core._Uri.new({path: "unparsed"});
    this[line] = null;
    this[column] = null;
    this[isCore] = false;
    this[library] = "unparsed";
    this[package$] = null;
    this[location] = "unparsed";
    this[member$0] = member;
    ;
  }).prototype = unparsed_frame.UnparsedFrame.prototype;
  dart.addTypeTests(unparsed_frame.UnparsedFrame);
  dart.addTypeCaches(unparsed_frame.UnparsedFrame);
  unparsed_frame.UnparsedFrame[dart.implements] = () => [frame$.Frame];
  dart.setLibraryUri(unparsed_frame.UnparsedFrame, L3);
  dart.setFieldSignature(unparsed_frame.UnparsedFrame, () => ({
    __proto__: dart.getFields(unparsed_frame.UnparsedFrame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    isCore: dart.finalFieldType(core.bool),
    library: dart.finalFieldType(core.String),
    package: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.String),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(unparsed_frame.UnparsedFrame, ['toString']);
  dart.defineLazy(utils, {
    /*utils.chainGap*/get chainGap() {
      return "===== asynchronous gap ===========================\n";
    },
    /*utils.vmChainGap*/get vmChainGap() {
      return "<asynchronous suspension>\n";
    },
    /*utils.inJS*/get inJS() {
      return core.int.is(0.0);
    }
  }, true);
  var _inner = dart.privateName(lazy_trace, "_inner");
  var _thunk$ = dart.privateName(lazy_trace, "_thunk");
  var _trace = dart.privateName(lazy_trace, "_trace");
  lazy_trace.LazyTrace = class LazyTrace extends core.Object {
    get [_trace]() {
      if (this[_inner] == null) this[_inner] = this[_thunk$]();
      return this[_inner];
    }
    get frames() {
      return this[_trace].frames;
    }
    get original() {
      return this[_trace].original;
    }
    get vmTrace() {
      return this[_trace].vmTrace;
    }
    get terse() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].terse, VoidToTraceL()));
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].foldFrames(predicate, {terse: terse}), VoidToTraceL()));
    }
    toString() {
      return dart.toString(this[_trace]);
    }
    set frames(_) {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (lazy_trace.LazyTrace.new = function(_thunk) {
    this[_inner] = null;
    this[_thunk$] = _thunk;
    ;
  }).prototype = lazy_trace.LazyTrace.prototype;
  dart.addTypeTests(lazy_trace.LazyTrace);
  dart.addTypeCaches(lazy_trace.LazyTrace);
  lazy_trace.LazyTrace[dart.implements] = () => [trace$.Trace];
  dart.setMethodSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getMethods(lazy_trace.LazyTrace.__proto__),
    foldFrames: dart.fnType(trace$.Trace, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}, {})
  }));
  dart.setGetterSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getGetters(lazy_trace.LazyTrace.__proto__),
    [_trace]: trace$.Trace,
    frames: core.List$(frame$.Frame),
    original: core.StackTrace,
    vmTrace: core.StackTrace,
    terse: trace$.Trace
  }));
  dart.setSetterSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getSetters(lazy_trace.LazyTrace.__proto__),
    frames: dart.dynamic
  }));
  dart.setLibraryUri(lazy_trace.LazyTrace, L4);
  dart.setFieldSignature(lazy_trace.LazyTrace, () => ({
    __proto__: dart.getFields(lazy_trace.LazyTrace.__proto__),
    [_thunk$]: dart.finalFieldType(dart.fnType(trace$.Trace, [])),
    [_inner]: dart.fieldType(trace$.Trace)
  }));
  dart.defineExtensionMethods(lazy_trace.LazyTrace, ['toString']);
  var traces$ = dart.privateName(chain$, "Chain.traces");
  chain$.Chain = class Chain extends core.Object {
    get traces() {
      return this[traces$];
    }
    set traces(value) {
      super.traces = value;
    }
    static get _currentSpec() {
      return stack_zone_specification.StackZoneSpecification.as(async.Zone.current._get(chain$._specKey));
    }
    static capture(T, callback, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let when = opts && 'when' in opts ? opts.when : true;
      let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
      if (!dart.test(errorZone) && onError != null) {
        dart.throw(new core.ArgumentError.value(onError, "onError", "must be null if errorZone is false"));
      }
      if (!dart.test(when)) {
        let newOnError = null;
        if (onError != null) {
          newOnError = dart.fn((error, stackTrace) => {
            onError(error, stackTrace == null ? chain$.Chain.current() : chain$.Chain.forTrace(core.StackTrace.as(stackTrace)));
          }, dynamicAnddynamicToNullN());
        }
        return async.runZoned(T, callback, {onError: core.Function.as(newOnError)});
      }
      let spec = new stack_zone_specification.StackZoneSpecification.new(onError, {errorZone: errorZone});
      return async.runZoned(T, dart.fn(() => {
        try {
          return callback();
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          async.Zone.current.handleUncaughtError(error, stackTrace);
          return null;
        }
      }, dart.fnType(T, [])), {zoneSpecification: spec.toSpec(), zoneValues: new _js_helper.LinkedMap.from([chain$._specKey, spec, stack_zone_specification.StackZoneSpecification.disableKey, false])});
    }
    static disable(T, callback, opts) {
      let when = opts && 'when' in opts ? opts.when : true;
      let zoneValues = dart.test(when) ? new (LinkedMapOfObjectL$boolL()).from([chain$._specKey, null, stack_zone_specification.StackZoneSpecification.disableKey, true]) : null;
      return async.runZoned(T, callback, {zoneValues: zoneValues});
    }
    static track(futureOrStream) {
      return futureOrStream;
    }
    static current(level = 0) {
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.currentChain(dart.notNull(level) + 1);
      let chain = chain$.Chain.forTrace(core.StackTrace.current);
      return new lazy_chain.LazyChain.new(dart.fn(() => {
        let t3;
        let first = new trace$.Trace.new(chain.traces[$first].frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: dart.toString(chain.traces[$first].original)});
        return new chain$.Chain.new((t3 = JSArrayOfTraceL().of([first]), t3[$addAll](chain.traces[$skip](1)), t3));
      }, VoidToChainL()));
    }
    static forTrace(trace) {
      if (chain$.Chain.is(trace)) return trace;
      if (chain$.Chain._currentSpec != null) return chain$.Chain._currentSpec.chainFor(trace);
      if (trace$.Trace.is(trace)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace]));
      return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChainL()));
    }
    static parse(chain) {
      if (chain[$isEmpty]) return new chain$.Chain.new(JSArrayOfTraceL().of([]));
      if (chain[$contains]("<asynchronous suspension>\n")) {
        return new chain$.Chain.new(chain[$split]("<asynchronous suspension>\n")[$map](trace$.Trace, dart.fn(trace => new trace$.Trace.parseVM(trace), StringLToTraceL())));
      }
      if (!chain[$contains](utils.chainGap)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace$.Trace.parse(chain)]));
      return new chain$.Chain.new(chain[$split](utils.chainGap)[$map](trace$.Trace, dart.fn(trace => new trace$.Trace.parseFriendly(trace), StringLToTraceL())));
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameLToboolL()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      let foldedTraces = this.traces[$map](trace$.Trace, dart.fn(trace => trace.foldFrames(predicate, {terse: terse}), TraceLToTraceL()));
      let nonEmptyTraces = foldedTraces[$where](dart.fn(trace => {
        if (dart.notNull(trace.frames[$length]) > 1) return true;
        if (dart.test(trace.frames[$isEmpty])) return false;
        if (!dart.test(terse)) return false;
        return trace.frames[$single].line != null;
      }, TraceLToboolL()));
      if (dart.test(nonEmptyTraces[$isEmpty]) && dart.test(foldedTraces[$isNotEmpty])) {
        return new chain$.Chain.new(JSArrayOfTraceL().of([foldedTraces[$last]]));
      }
      return new chain$.Chain.new(nonEmptyTraces);
    }
    toTrace() {
      return new trace$.Trace.new(this.traces[$expand](frame$.Frame, dart.fn(trace => trace.frames, TraceLToListLOfFrameL())));
    }
    toString() {
      let longest = this.traces[$map](core.int, dart.fn(trace => trace.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameLTointL()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int)), TraceLTointL()))[$fold](core.int, 0, dart.gbind(C0 || CT.C0, core.int));
      return this.traces[$map](core.String, dart.fn(trace => trace.frames[$map](core.String, dart.fn(frame => frame.location[$padRight](longest) + "  " + dart.str(frame.member) + "\n", FrameLToStringL()))[$join](), TraceLToStringL()))[$join](utils.chainGap);
    }
  };
  (chain$.Chain.new = function(traces) {
    this[traces$] = ListOfTraceL().unmodifiable(traces);
    ;
  }).prototype = chain$.Chain.prototype;
  dart.addTypeTests(chain$.Chain);
  dart.addTypeCaches(chain$.Chain);
  chain$.Chain[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(chain$.Chain, () => ({
    __proto__: dart.getMethods(chain$.Chain.__proto__),
    foldFrames: dart.fnType(chain$.Chain, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}, {}),
    toTrace: dart.fnType(trace$.Trace, [])
  }));
  dart.setGetterSignature(chain$.Chain, () => ({
    __proto__: dart.getGetters(chain$.Chain.__proto__),
    terse: chain$.Chain
  }));
  dart.setLibraryUri(chain$.Chain, L5);
  dart.setFieldSignature(chain$.Chain, () => ({
    __proto__: dart.getFields(chain$.Chain.__proto__),
    traces: dart.finalFieldType(core.List$(trace$.Trace))
  }));
  dart.defineExtensionMethods(chain$.Chain, ['toString']);
  dart.defineLazy(chain$, {
    /*chain$._specKey*/get _specKey() {
      return new core.Object.new();
    }
  }, true);
  var _chains = dart.privateName(stack_zone_specification, "_chains");
  var _currentNode = dart.privateName(stack_zone_specification, "_currentNode");
  var _onError$ = dart.privateName(stack_zone_specification, "_onError");
  var _errorZone = dart.privateName(stack_zone_specification, "_errorZone");
  var _disabled = dart.privateName(stack_zone_specification, "_disabled");
  var _handleUncaughtError = dart.privateName(stack_zone_specification, "_handleUncaughtError");
  var _registerCallback = dart.privateName(stack_zone_specification, "_registerCallback");
  var _registerUnaryCallback = dart.privateName(stack_zone_specification, "_registerUnaryCallback");
  var _registerBinaryCallback = dart.privateName(stack_zone_specification, "_registerBinaryCallback");
  var _errorCallback = dart.privateName(stack_zone_specification, "_errorCallback");
  var _createNode = dart.privateName(stack_zone_specification, "_createNode");
  var _trimVMChain = dart.privateName(stack_zone_specification, "_trimVMChain");
  var _run = dart.privateName(stack_zone_specification, "_run");
  var _currentTrace = dart.privateName(stack_zone_specification, "_currentTrace");
  stack_zone_specification.StackZoneSpecification = class StackZoneSpecification extends core.Object {
    get [_disabled]() {
      return dart.equals(async.Zone.current._get(stack_zone_specification.StackZoneSpecification.disableKey), true);
    }
    toSpec() {
      return new async._ZoneSpecification.new({handleUncaughtError: dart.test(this[_errorZone]) ? dart.bind(this, _handleUncaughtError) : null, registerCallback: dart.bind(this, _registerCallback), registerUnaryCallback: dart.bind(this, _registerUnaryCallback), registerBinaryCallback: dart.bind(this, _registerBinaryCallback), errorCallback: dart.bind(this, _errorCallback)});
    }
    currentChain(level = 0) {
      return this[_createNode](dart.notNull(level) + 1).toChain();
    }
    chainFor(trace) {
      let t3;
      if (chain$.Chain.is(trace)) return trace;
      trace == null ? trace = core.StackTrace.current : null;
      let previous = (t3 = this[_chains]._get(trace), t3 == null ? this[_currentNode] : t3);
      if (previous == null) {
        if (trace$.Trace.is(trace)) return new chain$.Chain.new(JSArrayOfTraceL().of([trace]));
        return new lazy_chain.LazyChain.new(dart.fn(() => chain$.Chain.parse(dart.toString(trace)), VoidToChainL()));
      } else {
        if (!trace$.Trace.is(trace)) {
          let original = trace;
          trace = new lazy_trace.LazyTrace.new(dart.fn(() => trace$.Trace.parse(this[_trimVMChain](original)), VoidToTraceL()));
        }
        return new stack_zone_specification._Node.new(trace, previous).toChain();
      }
    }
    [_registerCallback](R, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerCallback(R, zone, f);
      let node = this[_createNode](1);
      return parent.registerCallback(R, zone, dart.fn(() => this[_run](R, f, node), dart.fnType(R, [])));
    }
    [_registerUnaryCallback](R, T, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerUnaryCallback(R, T, zone, f);
      let node = this[_createNode](1);
      return parent.registerUnaryCallback(R, T, zone, dart.fn(arg => this[_run](R, dart.fn(() => f(arg), dart.fnType(R, [])), node), dart.fnType(R, [T])));
    }
    [_registerBinaryCallback](R, T1, T2, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerBinaryCallback(R, T1, T2, zone, dart.fnType(R, [T1, T2]).as(f));
      let node = this[_createNode](1);
      return parent.registerBinaryCallback(R, T1, T2, zone, dart.fn((arg1, arg2) => this[_run](R, dart.fn(() => R.as(dart.dcall(f, [arg1, arg2])), dart.fnType(R, [])), node), dart.fnType(R, [T1, T2])));
    }
    [_handleUncaughtError](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) {
        parent.handleUncaughtError(zone, error, stackTrace);
        return;
      }
      let stackChain = this.chainFor(stackTrace);
      if (this[_onError$] == null) {
        parent.handleUncaughtError(zone, error, stackChain);
        return;
      }
      try {
        self.parent.runBinary(dart.void, dart.dynamic, chain$.Chain, this[_onError$], error, stackChain);
      } catch (e) {
        let newError = dart.getThrown(e);
        let newStackTrace = dart.stackTrace(e);
        if (core.identical(newError, error)) {
          parent.handleUncaughtError(zone, error, stackChain);
        } else {
          parent.handleUncaughtError(zone, newError, newStackTrace);
        }
      }
    }
    [_errorCallback](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) return parent.errorCallback(zone, error, stackTrace);
      if (stackTrace == null) {
        stackTrace = this[_createNode](2).toChain();
      } else {
        if (this[_chains]._get(stackTrace) == null) this[_chains]._set(stackTrace, this[_createNode](2));
      }
      let asyncError = parent.errorCallback(zone, error, stackTrace);
      return asyncError == null ? new async.AsyncError.new(error, stackTrace) : asyncError;
    }
    [_createNode](level = 0) {
      return new stack_zone_specification._Node.new(this[_currentTrace](dart.notNull(level) + 1), this[_currentNode]);
    }
    [_run](T, f, node) {
      let t6, t5;
      let previousNode = this[_currentNode];
      this[_currentNode] = node;
      try {
        return f();
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stackTrace = dart.stackTrace(e$);
        t5 = this[_chains];
        t6 = stackTrace;
        t5._get(t6) == null ? t5._set(t6, node) : null;
        dart.rethrow(e$);
      } finally {
        this[_currentNode] = previousNode;
      }
    }
    [_currentTrace](level = null) {
      level == null ? level = 0 : null;
      let stackTrace = core.StackTrace.current;
      return new lazy_trace.LazyTrace.new(dart.fn(() => {
        let text = this[_trimVMChain](stackTrace);
        let trace = trace$.Trace.parse(text);
        return new trace$.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(utils.inJS) ? 2 : 1)), {original: text});
      }, VoidToTraceL()));
    }
    [_trimVMChain](trace) {
      let text = dart.toString(trace);
      let index = text[$indexOf]("<asynchronous suspension>\n");
      return index === -1 ? text : text[$substring](0, index);
    }
  };
  (stack_zone_specification.StackZoneSpecification.new = function(_onError, opts) {
    let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
    this[_chains] = new (ExpandoOf_NodeL()).new("stack chains");
    this[_currentNode] = null;
    this[_onError$] = _onError;
    this[_errorZone] = errorZone;
    ;
  }).prototype = stack_zone_specification.StackZoneSpecification.prototype;
  dart.addTypeTests(stack_zone_specification.StackZoneSpecification);
  dart.addTypeCaches(stack_zone_specification.StackZoneSpecification);
  dart.setMethodSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getMethods(stack_zone_specification.StackZoneSpecification.__proto__),
    toSpec: dart.fnType(async.ZoneSpecification, []),
    currentChain: dart.fnType(chain$.Chain, [], [core.int]),
    chainFor: dart.fnType(chain$.Chain, [core.StackTrace]),
    [_registerCallback]: dart.gFnType(R => [dart.fnType(R, []), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_registerUnaryCallback]: dart.gFnType((R, T) => [dart.fnType(R, [T]), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T])]]),
    [_registerBinaryCallback]: dart.gFnType((R, T1, T2) => [dart.fnType(R, [T1, T2]), [async.Zone, async.ZoneDelegate, async.Zone, core.Function]]),
    [_handleUncaughtError]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace]),
    [_errorCallback]: dart.fnType(async.AsyncError, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace]),
    [_createNode]: dart.fnType(stack_zone_specification._Node, [], [core.int]),
    [_run]: dart.gFnType(T => [T, [dart.fnType(T, []), stack_zone_specification._Node]]),
    [_currentTrace]: dart.fnType(trace$.Trace, [], [core.int]),
    [_trimVMChain]: dart.fnType(core.String, [core.StackTrace])
  }));
  dart.setGetterSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getGetters(stack_zone_specification.StackZoneSpecification.__proto__),
    [_disabled]: core.bool
  }));
  dart.setLibraryUri(stack_zone_specification.StackZoneSpecification, L6);
  dart.setFieldSignature(stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getFields(stack_zone_specification.StackZoneSpecification.__proto__),
    [_chains]: dart.finalFieldType(core.Expando$(stack_zone_specification._Node)),
    [_onError$]: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, chain$.Chain])),
    [_currentNode]: dart.fieldType(stack_zone_specification._Node),
    [_errorZone]: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(stack_zone_specification.StackZoneSpecification, {
    /*stack_zone_specification.StackZoneSpecification.disableKey*/get disableKey() {
      return new core.Object.new();
    }
  }, true);
  stack_zone_specification._Node = class _Node extends core.Object {
    toChain() {
      let nodes = JSArrayOfTraceL().of([]);
      let node = this;
      while (node != null) {
        nodes[$add](node.trace);
        node = node.previous;
      }
      return new chain$.Chain.new(nodes);
    }
  };
  (stack_zone_specification._Node.new = function(trace, previous = null) {
    this.previous = previous;
    this.trace = trace$.Trace.from(trace);
    ;
  }).prototype = stack_zone_specification._Node.prototype;
  dart.addTypeTests(stack_zone_specification._Node);
  dart.addTypeCaches(stack_zone_specification._Node);
  dart.setMethodSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getMethods(stack_zone_specification._Node.__proto__),
    toChain: dart.fnType(chain$.Chain, [])
  }));
  dart.setLibraryUri(stack_zone_specification._Node, L6);
  dart.setFieldSignature(stack_zone_specification._Node, () => ({
    __proto__: dart.getFields(stack_zone_specification._Node.__proto__),
    trace: dart.finalFieldType(trace$.Trace),
    previous: dart.finalFieldType(stack_zone_specification._Node)
  }));
  var _inner$ = dart.privateName(lazy_chain, "_inner");
  var _thunk$0 = dart.privateName(lazy_chain, "_thunk");
  var _chain = dart.privateName(lazy_chain, "_chain");
  lazy_chain.LazyChain = class LazyChain extends core.Object {
    get [_chain]() {
      if (this[_inner$] == null) this[_inner$] = this[_thunk$0]();
      return this[_inner$];
    }
    get traces() {
      return this[_chain].traces;
    }
    get terse() {
      return this[_chain].terse;
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new lazy_chain.LazyChain.new(dart.fn(() => this[_chain].foldFrames(predicate, {terse: terse}), VoidToChainL()));
    }
    toTrace() {
      return new lazy_trace.LazyTrace.new(dart.fn(() => this[_chain].toTrace(), VoidToTraceL()));
    }
    toString() {
      return dart.toString(this[_chain]);
    }
  };
  (lazy_chain.LazyChain.new = function(_thunk) {
    this[_inner$] = null;
    this[_thunk$0] = _thunk;
    ;
  }).prototype = lazy_chain.LazyChain.prototype;
  dart.addTypeTests(lazy_chain.LazyChain);
  dart.addTypeCaches(lazy_chain.LazyChain);
  lazy_chain.LazyChain[dart.implements] = () => [chain$.Chain];
  dart.setMethodSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getMethods(lazy_chain.LazyChain.__proto__),
    foldFrames: dart.fnType(chain$.Chain, [dart.fnType(core.bool, [frame$.Frame])], {terse: core.bool}, {}),
    toTrace: dart.fnType(trace$.Trace, [])
  }));
  dart.setGetterSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getGetters(lazy_chain.LazyChain.__proto__),
    [_chain]: chain$.Chain,
    traces: core.List$(trace$.Trace),
    terse: chain$.Chain
  }));
  dart.setLibraryUri(lazy_chain.LazyChain, L7);
  dart.setFieldSignature(lazy_chain.LazyChain, () => ({
    __proto__: dart.getFields(lazy_chain.LazyChain.__proto__),
    [_thunk$0]: dart.finalFieldType(dart.fnType(chain$.Chain, [])),
    [_inner$]: dart.fieldType(chain$.Chain)
  }));
  dart.defineExtensionMethods(lazy_chain.LazyChain, ['toString']);
  dart.trackLibraries("packages/stack_trace/src/chain", {
    "package:stack_trace/src/trace.dart": trace$,
    "package:stack_trace/src/vm_trace.dart": vm_trace,
    "package:stack_trace/src/frame.dart": frame$,
    "package:stack_trace/src/unparsed_frame.dart": unparsed_frame,
    "package:stack_trace/src/utils.dart": utils,
    "package:stack_trace/src/lazy_trace.dart": lazy_trace,
    "package:stack_trace/src/chain.dart": chain$,
    "package:stack_trace/src/stack_zone_specification.dart": stack_zone_specification,
    "package:stack_trace/src/lazy_chain.dart": lazy_chain,
    "package:stack_trace/stack_trace.dart": stack_trace
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["trace.dart","vm_trace.dart","frame.dart","unparsed_frame.dart","utils.dart","lazy_trace.dart","chain.dart","stack_zone_specification.dart","lazy_chain.dart"],"names":[],"mappings":"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","file":"chain.ddc.js"}');
  // Exports:
  return {
    src__trace: trace$,
    src__vm_trace: vm_trace,
    src__frame: frame$,
    src__unparsed_frame: unparsed_frame,
    src__utils: utils,
    src__lazy_trace: lazy_trace,
    src__chain: chain$,
    src__stack_zone_specification: stack_zone_specification,
    src__lazy_chain: lazy_chain,
    stack_trace: stack_trace
  };
});

//# sourceMappingURL=chain.ddc.js.map
