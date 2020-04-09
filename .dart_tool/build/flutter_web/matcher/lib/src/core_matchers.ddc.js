define(['dart_sdk', 'packages/stack_trace/src/chain'], function(dart_sdk, packages__stack_trace__src__chain) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const chain = packages__stack_trace__src__chain.src__chain;
  const frame = packages__stack_trace__src__chain.src__frame;
  var operator_matchers = Object.create(dart.library);
  var util = Object.create(dart.library);
  var interfaces = Object.create(dart.library);
  var equals_matcher = Object.create(dart.library);
  var feature_matcher = Object.create(dart.library);
  var type_matcher = Object.create(dart.library);
  var having_matcher = Object.create(dart.library);
  var custom_matcher = Object.create(dart.library);
  var description$ = Object.create(dart.library);
  var pretty_print = Object.create(dart.library);
  var core_matchers = Object.create(dart.library);
  var order_matchers = Object.create(dart.library);
  var numeric_matchers = Object.create(dart.library);
  var iterable_matchers = Object.create(dart.library);
  var string_matchers = Object.create(dart.library);
  var map_matchers = Object.create(dart.library);
  var error_matchers = Object.create(dart.library);
  var $_get = dartx._get;
  var $where = dartx.where;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $_set = dartx._set;
  var $addAll = dartx.addAll;
  var $replaceAll = dartx.replaceAll;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $single = dartx.single;
  var $runes = dartx.runes;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $padLeft = dartx.padLeft;
  var $keys = dartx.keys;
  var $join = dartx.join;
  var $codeUnitAt = dartx.codeUnitAt;
  var $substring = dartx.substring;
  var $iterator = dartx.iterator;
  var $toSet = dartx.toSet;
  var $every = dartx.every;
  var $length = dartx.length;
  var $containsKey = dartx.containsKey;
  var $isNotEmpty = dartx.isNotEmpty;
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $followedBy = dartx.followedBy;
  var $noSuchMethod = dartx.noSuchMethod;
  var $replaceRange = dartx.replaceRange;
  var $contains = dartx.contains;
  var $split = dartx.split;
  var $startsWith = dartx.startsWith;
  var $runtimeType = dartx.runtimeType;
  var $compareTo = dartx.compareTo;
  var $any = dartx.any;
  var $sublist = dartx.sublist;
  var $toLowerCase = dartx.toLowerCase;
  var $endsWith = dartx.endsWith;
  var $indexOf = dartx.indexOf;
  var $trim = dartx.trim;
  var dynamicToboolL = () => (dynamicToboolL = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  var dynamicToMatcherL = () => (dynamicToMatcherL = dart.constFn(dart.fnType(interfaces.Matcher, [dart.dynamic])))();
  var ObjectLToLboolL = () => (ObjectLToLboolL = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  var NullNToLboolL = () => (NullNToLboolL = dart.constFn(dart.fnType(core.bool, [core.Null])))();
  var MatchLToStringL = () => (MatchLToStringL = dart.constFn(dart.fnType(core.String, [core.Match])))();
  var StringLToStringL = () => (StringLToStringL = dart.constFn(dart.fnType(core.String, [core.String])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(core.String)))();
  var JSArrayOf_FunctionMatcherL = () => (JSArrayOf_FunctionMatcherL = dart.constFn(_interceptors.JSArray$(having_matcher._FunctionMatcher)))();
  var JSArrayOfMatcherL = () => (JSArrayOfMatcherL = dart.constFn(_interceptors.JSArray$(interfaces.Matcher)))();
  var FrameLToboolL = () => (FrameLToboolL = dart.constFn(dart.fnType(core.bool, [frame.Frame])))();
  var dynamicToStringL = () => (dynamicToStringL = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  var dynamicAndintLAndSetL__ToStringL = () => (dynamicAndintLAndSetL__ToStringL = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.int, core.Set, core.bool])))();
  var LinkedHashSetOfObjectL = () => (LinkedHashSetOfObjectL = dart.constFn(collection.LinkedHashSet$(core.Object)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(core.String)))();
  var _InOfObjectL = () => (_InOfObjectL = dart.constFn(core_matchers._In$(core.Object)))();
  var _InOfPatternL = () => (_InOfPatternL = dart.constFn(core_matchers._In$(core.Pattern)))();
  var TypeMatcherOfMapL = () => (TypeMatcherOfMapL = dart.constFn(type_matcher.TypeMatcher$(core.Map)))();
  var TypeMatcherOfListL = () => (TypeMatcherOfListL = dart.constFn(type_matcher.TypeMatcher$(core.List)))();
  var dynamicAndintLToMatcherL = () => (dynamicAndintLToMatcherL = dart.constFn(dart.fnType(interfaces.Matcher, [dart.dynamic], [core.int])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(core.int)))();
  var ListOfListLOfintL = () => (ListOfListLOfintL = dart.constFn(core.List$(ListOfintL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(core.int)))();
  var intLToListLOfintL = () => (intLToListLOfintL = dart.constFn(dart.fnType(ListOfintL(), [core.int])))();
  var intLToboolL = () => (intLToboolL = dart.constFn(dart.fnType(core.bool, [core.int])))();
  var LinkedHashSetOfintL = () => (LinkedHashSetOfintL = dart.constFn(collection.LinkedHashSet$(core.int)))();
  var TypeMatcherOfArgumentErrorL = () => (TypeMatcherOfArgumentErrorL = dart.constFn(type_matcher.TypeMatcher$(core.ArgumentError)))();
  var TypeMatcherOfCastErrorL = () => (TypeMatcherOfCastErrorL = dart.constFn(type_matcher.TypeMatcher$(core.CastError)))();
  var TypeMatcherOfConcurrentModificationErrorL = () => (TypeMatcherOfConcurrentModificationErrorL = dart.constFn(type_matcher.TypeMatcher$(core.ConcurrentModificationError)))();
  var TypeMatcherOfCyclicInitializationErrorL = () => (TypeMatcherOfCyclicInitializationErrorL = dart.constFn(type_matcher.TypeMatcher$(core.CyclicInitializationError)))();
  var TypeMatcherOfExceptionL = () => (TypeMatcherOfExceptionL = dart.constFn(type_matcher.TypeMatcher$(core.Exception)))();
  var TypeMatcherOfFormatExceptionL = () => (TypeMatcherOfFormatExceptionL = dart.constFn(type_matcher.TypeMatcher$(core.FormatException)))();
  var TypeMatcherOfNoSuchMethodErrorL = () => (TypeMatcherOfNoSuchMethodErrorL = dart.constFn(type_matcher.TypeMatcher$(core.NoSuchMethodError)))();
  var TypeMatcherOfNullThrownErrorL = () => (TypeMatcherOfNullThrownErrorL = dart.constFn(type_matcher.TypeMatcher$(core.NullThrownError)))();
  var TypeMatcherOfRangeErrorL = () => (TypeMatcherOfRangeErrorL = dart.constFn(type_matcher.TypeMatcher$(core.RangeError)))();
  var TypeMatcherOfStateErrorL = () => (TypeMatcherOfStateErrorL = dart.constFn(type_matcher.TypeMatcher$(core.StateError)))();
  var TypeMatcherOfUnimplementedErrorL = () => (TypeMatcherOfUnimplementedErrorL = dart.constFn(type_matcher.TypeMatcher$(core.UnimplementedError)))();
  var TypeMatcherOfUnsupportedErrorL = () => (TypeMatcherOfUnsupportedErrorL = dart.constFn(type_matcher.TypeMatcher$(core.UnsupportedError)))();
  const CT = Object.create(null);
  var L12 = "package:matcher/src/string_matchers.dart";
  var L1 = "package:matcher/src/operator_matchers.dart";
  var L0 = "package:matcher/src/interfaces.dart";
  var L13 = "package:matcher/src/map_matchers.dart";
  var L5 = "package:matcher/src/having_matcher.dart";
  var L6 = "package:matcher/src/custom_matcher.dart";
  var L9 = "package:matcher/src/order_matchers.dart";
  var L11 = "package:matcher/src/iterable_matchers.dart";
  var L10 = "package:matcher/src/numeric_matchers.dart";
  var L3 = "package:matcher/src/feature_matcher.dart";
  var L4 = "package:matcher/src/equals_matcher.dart";
  var L8 = "package:matcher/src/core_matchers.dart";
  var L2 = "package:matcher/src/type_matcher.dart";
  var L7 = "package:matcher/src/description.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(util.wrapMatcher, dynamicToMatcherL());
    },
    get C1() {
      return C1 = dart.constMap(core.String, core.String, ["\n", "\\n", "\r", "\\r", "\f", "\\f", "\b", "\\b", "\t", "\\t", "\v", "\\v", "", "\\x7F"]);
    },
    get C2() {
      return C2 = dart.fn(util._getHexLiteral, StringLToStringL());
    },
    get C3() {
      return C3 = dart.const(new _js_helper.PrivateSymbol.new('_name', _name$0));
    },
    get C4() {
      return C4 = dart.fn(pretty_print._escapeString, StringLToStringL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: core_matchers._Empty.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: core_matchers._NotEmpty.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core_matchers._IsNull.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: core_matchers._IsNotNull.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: core_matchers._IsTrue.prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: core_matchers._IsFalse.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: core_matchers._IsNaN.prototype,
        [_name$]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: core_matchers._IsNotNaN.prototype,
        [_name$]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: core_matchers._IsAnything.prototype
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: core_matchers._ReturnsNormally.prototype,
        [_name$]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: TypeMatcherOfMapL().prototype,
        [_name$]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: TypeMatcherOfListL().prototype,
        [_name$]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: true,
        [_comparisonDescription$]: "a value equal to",
        [_greaterThanValue$]: false,
        [_lessThanValue$]: false,
        [_equalValue$]: true,
        [_value$0]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: true,
        [_comparisonDescription$]: "a value not equal to",
        [_greaterThanValue$]: true,
        [_lessThanValue$]: true,
        [_equalValue$]: false,
        [_value$0]: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: false,
        [_comparisonDescription$]: "a positive value",
        [_greaterThanValue$]: true,
        [_lessThanValue$]: false,
        [_equalValue$]: false,
        [_value$0]: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: false,
        [_comparisonDescription$]: "a non-positive value",
        [_greaterThanValue$]: false,
        [_lessThanValue$]: true,
        [_equalValue$]: true,
        [_value$0]: 0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: false,
        [_comparisonDescription$]: "a negative value",
        [_greaterThanValue$]: false,
        [_lessThanValue$]: true,
        [_equalValue$]: false,
        [_value$0]: 0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: order_matchers._OrderingMatcher.prototype,
        [_valueInDescription$]: false,
        [_comparisonDescription$]: "a non-negative value",
        [_greaterThanValue$]: true,
        [_lessThanValue$]: false,
        [_equalValue$]: true,
        [_value$0]: 0
      });
    },
    get C23() {
      return C23 = dart.fn(equals_matcher.equals, dynamicAndintLToMatcherL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: TypeMatcherOfArgumentErrorL().prototype,
        [_name$]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: TypeMatcherOfCastErrorL().prototype,
        [_name$]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: TypeMatcherOfConcurrentModificationErrorL().prototype,
        [_name$]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: TypeMatcherOfCyclicInitializationErrorL().prototype,
        [_name$]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: TypeMatcherOfExceptionL().prototype,
        [_name$]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: TypeMatcherOfFormatExceptionL().prototype,
        [_name$]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: TypeMatcherOfNoSuchMethodErrorL().prototype,
        [_name$]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: TypeMatcherOfNullThrownErrorL().prototype,
        [_name$]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: TypeMatcherOfRangeErrorL().prototype,
        [_name$]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: TypeMatcherOfStateErrorL().prototype,
        [_name$]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: TypeMatcherOfUnimplementedErrorL().prototype,
        [_name$]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: TypeMatcherOfUnsupportedErrorL().prototype,
        [_name$]: null
      });
    }
  }, false);
  var _matcher = dart.privateName(operator_matchers, "_matcher");
  interfaces.Matcher = class Matcher extends core.Object {
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription;
    }
  };
  (interfaces.Matcher.new = function() {
    ;
  }).prototype = interfaces.Matcher.prototype;
  dart.addTypeTests(interfaces.Matcher);
  dart.addTypeCaches(interfaces.Matcher);
  dart.setMethodSignature(interfaces.Matcher, () => ({
    __proto__: dart.getMethods(interfaces.Matcher.__proto__),
    describeMismatch: dart.fnType(interfaces.Description, [dart.dynamic, interfaces.Description, core.Map, core.bool])
  }));
  dart.setLibraryUri(interfaces.Matcher, L0);
  var _matcher$ = dart.privateName(operator_matchers, "_IsNot._matcher");
  operator_matchers._IsNot = class _IsNot extends interfaces.Matcher {
    get [_matcher]() {
      return this[_matcher$];
    }
    set [_matcher](value) {
      super[_matcher] = value;
    }
    matches(item, matchState) {
      return !dart.test(this[_matcher].matches(item, matchState));
    }
    describe(description) {
      return description.add("not ").addDescriptionOf(this[_matcher]);
    }
  };
  (operator_matchers._IsNot.new = function(_matcher) {
    this[_matcher$] = _matcher;
    operator_matchers._IsNot.__proto__.new.call(this);
    ;
  }).prototype = operator_matchers._IsNot.prototype;
  dart.addTypeTests(operator_matchers._IsNot);
  dart.addTypeCaches(operator_matchers._IsNot);
  dart.setMethodSignature(operator_matchers._IsNot, () => ({
    __proto__: dart.getMethods(operator_matchers._IsNot.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(operator_matchers._IsNot, L1);
  dart.setFieldSignature(operator_matchers._IsNot, () => ({
    __proto__: dart.getFields(operator_matchers._IsNot.__proto__),
    [_matcher]: dart.finalFieldType(interfaces.Matcher)
  }));
  var _matchers = dart.privateName(operator_matchers, "_matchers");
  var _matchers$ = dart.privateName(operator_matchers, "_AllOf._matchers");
  operator_matchers._AllOf = class _AllOf extends interfaces.Matcher {
    get [_matchers]() {
      return this[_matchers$];
    }
    set [_matchers](value) {
      super[_matchers] = value;
    }
    matches(item, matchState) {
      for (let matcher of this[_matchers]) {
        if (!dart.test(matcher.matches(item, matchState))) {
          util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["matcher", matcher]));
          return false;
        }
      }
      return true;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let matcher = matchState[$_get]("matcher");
      dart.dsend(matcher, 'describeMismatch', [item, mismatchDescription, matchState[$_get]("state"), verbose]);
      return mismatchDescription;
    }
    describe(description) {
      return description.addAll("(", " and ", ")", this[_matchers]);
    }
  };
  (operator_matchers._AllOf.new = function(_matchers) {
    this[_matchers$] = _matchers;
    operator_matchers._AllOf.__proto__.new.call(this);
    ;
  }).prototype = operator_matchers._AllOf.prototype;
  dart.addTypeTests(operator_matchers._AllOf);
  dart.addTypeCaches(operator_matchers._AllOf);
  dart.setMethodSignature(operator_matchers._AllOf, () => ({
    __proto__: dart.getMethods(operator_matchers._AllOf.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(operator_matchers._AllOf, L1);
  dart.setFieldSignature(operator_matchers._AllOf, () => ({
    __proto__: dart.getFields(operator_matchers._AllOf.__proto__),
    [_matchers]: dart.finalFieldType(core.List$(interfaces.Matcher))
  }));
  var _matchers$0 = dart.privateName(operator_matchers, "_AnyOf._matchers");
  operator_matchers._AnyOf = class _AnyOf extends interfaces.Matcher {
    get [_matchers]() {
      return this[_matchers$0];
    }
    set [_matchers](value) {
      super[_matchers] = value;
    }
    matches(item, matchState) {
      for (let matcher of this[_matchers]) {
        if (dart.test(matcher.matches(item, matchState))) {
          return true;
        }
      }
      return false;
    }
    describe(description) {
      return description.addAll("(", " or ", ")", this[_matchers]);
    }
  };
  (operator_matchers._AnyOf.new = function(_matchers) {
    this[_matchers$0] = _matchers;
    operator_matchers._AnyOf.__proto__.new.call(this);
    ;
  }).prototype = operator_matchers._AnyOf.prototype;
  dart.addTypeTests(operator_matchers._AnyOf);
  dart.addTypeCaches(operator_matchers._AnyOf);
  dart.setMethodSignature(operator_matchers._AnyOf, () => ({
    __proto__: dart.getMethods(operator_matchers._AnyOf.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(operator_matchers._AnyOf, L1);
  dart.setFieldSignature(operator_matchers._AnyOf, () => ({
    __proto__: dart.getFields(operator_matchers._AnyOf.__proto__),
    [_matchers]: dart.finalFieldType(core.List$(interfaces.Matcher))
  }));
  var C0;
  operator_matchers.isNot = function isNot(matcher) {
    return new operator_matchers._IsNot.new(util.wrapMatcher(matcher));
  };
  operator_matchers.allOf = function allOf(arg0, arg1 = null, arg2 = null, arg3 = null, arg4 = null, arg5 = null, arg6 = null) {
    return new operator_matchers._AllOf.new(operator_matchers._wrapArgs(arg0, arg1, arg2, arg3, arg4, arg5, arg6));
  };
  operator_matchers.anyOf = function anyOf(arg0, arg1 = null, arg2 = null, arg3 = null, arg4 = null, arg5 = null, arg6 = null) {
    return new operator_matchers._AnyOf.new(operator_matchers._wrapArgs(arg0, arg1, arg2, arg3, arg4, arg5, arg6));
  };
  operator_matchers._wrapArgs = function _wrapArgs(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    let args = null;
    if (core.List.is(arg0)) {
      if (arg1 != null || arg2 != null || arg3 != null || arg4 != null || arg5 != null || arg6 != null) {
        dart.throw(new core.ArgumentError.new("If arg0 is a List, all other arguments must be" + " null."));
      }
      args = arg0;
    } else {
      args = [arg0, arg1, arg2, arg3, arg4, arg5, arg6][$where](dart.fn(e => e != null, dynamicToboolL()));
    }
    return args[$map](interfaces.Matcher, C0 || CT.C0)[$toList]();
  };
  util.addStateInfo = function addStateInfo(matchState, values) {
    let innerState = collection.LinkedHashMap.from(matchState);
    matchState[$clear]();
    matchState[$_set]("state", innerState);
    matchState[$addAll](values);
  };
  util.wrapMatcher = function wrapMatcher(x) {
    if (interfaces.Matcher.is(x)) {
      return x;
    } else if (ObjectLToLboolL().is(x)) {
      return core_matchers.predicate(core.Object, x);
    } else if (NullNToLboolL().is(x)) {
      return core_matchers.predicate(dart.dynamic, dart.fn(a => core.bool.as(dart.dcall(x, [a])), dynamicToboolL()));
    } else {
      return equals_matcher.equals(x);
    }
  };
  util.escape = function escape(str) {
    str = str[$replaceAll]("\\", "\\\\");
    return str[$replaceAllMapped](util._escapeRegExp, dart.fn(match => {
      let mapped = util._escapeMap[$_get](match._get(0));
      if (mapped != null) return mapped;
      return util._getHexLiteral(match._get(0));
    }, MatchLToStringL()));
  };
  util._getHexLiteral = function _getHexLiteral(input) {
    let rune = input[$runes][$single];
    return "\\x" + rune[$toRadixString](16)[$toUpperCase]()[$padLeft](2, "0");
  };
  var C1;
  var C2;
  dart.defineLazy(util, {
    /*util._escapeMap*/get _escapeMap() {
      return C1 || CT.C1;
    },
    /*util._escapeRegExp*/get _escapeRegExp() {
      return core.RegExp.new("[\\x00-\\x07\\x0E-\\x1F" + dart.str(util._escapeMap[$keys][$map](core.String, C2 || CT.C2)[$join]()) + "]");
    }
  }, true);
  interfaces.Description = class Description extends core.Object {};
  (interfaces.Description.new = function() {
    ;
  }).prototype = interfaces.Description.prototype;
  dart.addTypeTests(interfaces.Description);
  dart.addTypeCaches(interfaces.Description);
  dart.setLibraryUri(interfaces.Description, L0);
  var _value$ = dart.privateName(equals_matcher, "_value");
  var _name = dart.privateName(type_matcher, "_name");
  const _is_TypeMatcher_default = Symbol('_is_TypeMatcher_default');
  var _name$ = dart.privateName(type_matcher, "TypeMatcher._name");
  type_matcher.TypeMatcher$ = dart.generic(T => {
    var HavingMatcherOfTL = () => (HavingMatcherOfTL = dart.constFn(having_matcher.HavingMatcher$(T)))();
    class TypeMatcher extends interfaces.Matcher {
      get [_name]() {
        return this[_name$];
      }
      set [_name](value) {
        super[_name] = value;
      }
      having(feature, description, matcher) {
        return new (HavingMatcherOfTL()).new(this, description, feature, matcher);
      }
      describe(description) {
        let t0;
        let name = (t0 = this[_name], t0 == null ? type_matcher._stripDynamic(dart.wrapType(T)) : t0);
        return description.add("<Instance of '" + dart.str(name) + "'>");
      }
      matches(item, matchState) {
        return T.is(item);
      }
    }
    (TypeMatcher.new = function(name = null) {
      this[_name$] = name;
      TypeMatcher.__proto__.new.call(this);
      ;
    }).prototype = TypeMatcher.prototype;
    dart.addTypeTests(TypeMatcher);
    TypeMatcher.prototype[_is_TypeMatcher_default] = true;
    dart.addTypeCaches(TypeMatcher);
    dart.setMethodSignature(TypeMatcher, () => ({
      __proto__: dart.getMethods(TypeMatcher.__proto__),
      having: dart.fnType(type_matcher.TypeMatcher$(T), [dart.fnType(core.Object, [T]), core.String, core.Object]),
      describe: dart.fnType(interfaces.Description, [interfaces.Description]),
      matches: dart.fnType(core.bool, [core.Object, core.Map])
    }));
    dart.setLibraryUri(TypeMatcher, L2);
    dart.setFieldSignature(TypeMatcher, () => ({
      __proto__: dart.getFields(TypeMatcher.__proto__),
      [_name]: dart.finalFieldType(core.String)
    }));
    return TypeMatcher;
  });
  type_matcher.TypeMatcher = type_matcher.TypeMatcher$();
  dart.addTypeTests(type_matcher.TypeMatcher, _is_TypeMatcher_default);
  const _is_FeatureMatcher_default = Symbol('_is_FeatureMatcher_default');
  feature_matcher.FeatureMatcher$ = dart.generic(T => {
    class FeatureMatcher extends type_matcher.TypeMatcher$(T) {
      matches(item, matchState) {
        return dart.test(super.matches(item, matchState)) && dart.test(this.typedMatches(T.as(item), matchState));
      }
      describeMismatch(item, mismatchDescription, matchState, verbose) {
        if (T.is(item)) {
          return this.describeTypedMismatch(item, mismatchDescription, matchState, verbose);
        }
        return super.describe(mismatchDescription.add("not an "));
      }
      describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
        T.as(item);
        return mismatchDescription;
      }
    }
    (FeatureMatcher.new = function() {
      FeatureMatcher.__proto__.new.call(this);
      ;
    }).prototype = FeatureMatcher.prototype;
    dart.addTypeTests(FeatureMatcher);
    FeatureMatcher.prototype[_is_FeatureMatcher_default] = true;
    dart.addTypeCaches(FeatureMatcher);
    dart.setMethodSignature(FeatureMatcher, () => ({
      __proto__: dart.getMethods(FeatureMatcher.__proto__),
      describeTypedMismatch: dart.fnType(interfaces.Description, [core.Object, interfaces.Description, core.Map, core.bool])
    }));
    dart.setLibraryUri(FeatureMatcher, L3);
    return FeatureMatcher;
  });
  feature_matcher.FeatureMatcher = feature_matcher.FeatureMatcher$();
  dart.addTypeTests(feature_matcher.FeatureMatcher, _is_FeatureMatcher_default);
  equals_matcher._StringEqualsMatcher = class _StringEqualsMatcher extends feature_matcher.FeatureMatcher$(core.String) {
    typedMatches(item, matchState) {
      core.String.as(item);
      return this[_value$] == item;
    }
    describe(description) {
      return description.addDescriptionOf(this[_value$]);
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.String.as(item);
      let buff = new core.StringBuffer.new();
      buff.write("is different.");
      let escapedItem = util.escape(item);
      let escapedValue = util.escape(this[_value$]);
      let minLength = escapedItem.length < escapedValue.length ? escapedItem.length : escapedValue.length;
      let start = 0;
      for (; start < minLength; start = start + 1) {
        if (escapedValue[$codeUnitAt](start) !== escapedItem[$codeUnitAt](start)) {
          break;
        }
      }
      if (start === minLength) {
        if (escapedValue.length < escapedItem.length) {
          buff.write(" Both strings start the same, but the actual value also" + " has the following trailing characters: ");
          equals_matcher._StringEqualsMatcher._writeTrailing(buff, escapedItem, escapedValue.length);
        } else {
          buff.write(" Both strings start the same, but the actual value is" + " missing the following trailing characters: ");
          equals_matcher._StringEqualsMatcher._writeTrailing(buff, escapedValue, escapedItem.length);
        }
      } else {
        buff.write("\nExpected: ");
        equals_matcher._StringEqualsMatcher._writeLeading(buff, escapedValue, start);
        equals_matcher._StringEqualsMatcher._writeTrailing(buff, escapedValue, start);
        buff.write("\n  Actual: ");
        equals_matcher._StringEqualsMatcher._writeLeading(buff, escapedItem, start);
        equals_matcher._StringEqualsMatcher._writeTrailing(buff, escapedItem, start);
        buff.write("\n          ");
        for (let i = start > 10 ? 14 : start; i > 0; i = i - 1) {
          buff.write(" ");
        }
        buff.write("^\n Differ at offset " + dart.str(start));
      }
      return mismatchDescription.add(buff.toString());
    }
    static _writeLeading(buff, s, start) {
      if (dart.notNull(start) > 10) {
        buff.write("... ");
        buff.write(s[$substring](dart.notNull(start) - 10, start));
      } else {
        buff.write(s[$substring](0, start));
      }
    }
    static _writeTrailing(buff, s, start) {
      if (dart.notNull(start) + 10 > s.length) {
        buff.write(s[$substring](start));
      } else {
        buff.write(s[$substring](start, dart.notNull(start) + 10));
        buff.write(" ...");
      }
    }
  };
  (equals_matcher._StringEqualsMatcher.new = function(_value) {
    this[_value$] = _value;
    equals_matcher._StringEqualsMatcher.__proto__.new.call(this);
    ;
  }).prototype = equals_matcher._StringEqualsMatcher.prototype;
  dart.addTypeTests(equals_matcher._StringEqualsMatcher);
  dart.addTypeCaches(equals_matcher._StringEqualsMatcher);
  dart.setMethodSignature(equals_matcher._StringEqualsMatcher, () => ({
    __proto__: dart.getMethods(equals_matcher._StringEqualsMatcher.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(equals_matcher._StringEqualsMatcher, L4);
  dart.setFieldSignature(equals_matcher._StringEqualsMatcher, () => ({
    __proto__: dart.getFields(equals_matcher._StringEqualsMatcher.__proto__),
    [_value$]: dart.finalFieldType(core.String)
  }));
  var _expected$ = dart.privateName(equals_matcher, "_expected");
  var _limit = dart.privateName(equals_matcher, "_limit");
  var _compareIterables = dart.privateName(equals_matcher, "_compareIterables");
  var _compareSets = dart.privateName(equals_matcher, "_compareSets");
  var _recursiveMatch = dart.privateName(equals_matcher, "_recursiveMatch");
  var _match = dart.privateName(equals_matcher, "_match");
  equals_matcher._DeepMatcher = class _DeepMatcher extends interfaces.Matcher {
    [_compareIterables](expected, actual, matcher, depth, location) {
      if (core.Iterable.is(actual)) {
        let expectedIterator = expected[$iterator];
        let actualIterator = actual[$iterator];
        for (let index = 0;; index = index + 1) {
          let expectedNext = expectedIterator.moveNext();
          let actualNext = actualIterator.moveNext();
          if (!dart.test(expectedNext) && !dart.test(actualNext)) return null;
          let newLocation = dart.str(location) + "[" + dart.str(index) + "]";
          if (!dart.test(expectedNext)) return JSArrayOfStringL().of(["longer than expected", newLocation]);
          if (!dart.test(actualNext)) return JSArrayOfStringL().of(["shorter than expected", newLocation]);
          let rp = matcher(expectedIterator.current, actualIterator.current, newLocation, depth);
          if (rp != null) return rp;
        }
      } else {
        return JSArrayOfStringL().of(["is not Iterable", location]);
      }
    }
    [_compareSets](expected, actual, matcher, depth, location) {
      if (core.Iterable.is(actual)) {
        let other = actual[$toSet]();
        for (let expectedElement of expected) {
          if (dart.test(other[$every](dart.fn(actualElement => matcher(expectedElement, actualElement, location, depth) != null, dynamicToboolL())))) {
            return JSArrayOfStringL().of(["does not contain " + dart.str(expectedElement), location]);
          }
        }
        if (dart.notNull(other[$length]) > dart.notNull(expected[$length])) {
          return JSArrayOfStringL().of(["larger than expected", location]);
        } else if (dart.notNull(other[$length]) < dart.notNull(expected[$length])) {
          return JSArrayOfStringL().of(["smaller than expected", location]);
        } else {
          return null;
        }
      } else {
        return JSArrayOfStringL().of(["is not Iterable", location]);
      }
    }
    [_recursiveMatch](expected, actual, location, depth) {
      if (interfaces.Matcher.is(expected)) {
        let matchState = new _js_helper.LinkedMap.new();
        if (dart.test(expected.matches(actual, matchState))) return null;
        let description = new description$.StringDescription.new();
        expected.describe(description);
        return JSArrayOfStringL().of(["does not match " + dart.str(description), location]);
      } else {
        try {
          if (dart.equals(expected, actual)) return null;
        } catch (e$) {
          let e = dart.getThrown(e$);
          return JSArrayOfStringL().of(["== threw \"" + dart.str(e) + "\"", location]);
        }
      }
      if (dart.notNull(depth) > dart.notNull(this[_limit])) return JSArrayOfStringL().of(["recursion depth limit exceeded", location]);
      if (depth === 0 || dart.notNull(this[_limit]) > 1) {
        if (core.Set.is(expected)) {
          return this[_compareSets](expected, actual, dart.bind(this, _recursiveMatch), dart.notNull(depth) + 1, location);
        } else if (core.Iterable.is(expected)) {
          return this[_compareIterables](expected, actual, dart.bind(this, _recursiveMatch), dart.notNull(depth) + 1, location);
        } else if (core.Map.is(expected)) {
          if (!core.Map.is(actual)) return JSArrayOfStringL().of(["expected a map", location]);
          let map = core.Map.as(actual);
          let err = expected[$length] == map[$length] ? "" : "has different length and ";
          for (let key of expected[$keys]) {
            if (!dart.test(map[$containsKey](key))) {
              return JSArrayOfStringL().of([err + "is missing map key '" + dart.str(key) + "'", location]);
            }
          }
          for (let key of map[$keys]) {
            if (!dart.test(expected[$containsKey](key))) {
              return JSArrayOfStringL().of([err + "has extra map key '" + dart.str(key) + "'", location]);
            }
          }
          for (let key of expected[$keys]) {
            let rp = this[_recursiveMatch](expected[$_get](key), map[$_get](key), dart.str(location) + "['" + dart.str(key) + "']", dart.notNull(depth) + 1);
            if (rp != null) return rp;
          }
          return null;
        }
      }
      let description = new description$.StringDescription.new();
      if (dart.notNull(depth) > 0) {
        description.add("was ").addDescriptionOf(actual).add(" instead of ").addDescriptionOf(expected);
        return JSArrayOfStringL().of([description.toString(), location]);
      }
      return JSArrayOfStringL().of(["", location]);
    }
    [_match](expected, actual, matchState) {
      let rp = this[_recursiveMatch](expected, actual, "", 0);
      if (rp == null) return null;
      let reason = null;
      if (rp[$_get](0)[$isNotEmpty]) {
        if (rp[$_get](1)[$isNotEmpty]) {
          reason = dart.str(rp[$_get](0)) + " at location " + dart.str(rp[$_get](1));
        } else {
          reason = rp[$_get](0);
        }
      } else {
        reason = "";
      }
      util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["reason", reason]));
      return reason;
    }
    matches(item, matchState) {
      return this[_match](this[_expected$], item, matchState) == null;
    }
    describe(description) {
      return description.addDescriptionOf(this[_expected$]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let t1;
      let reason = (t1 = core.String.as(matchState[$_get]("reason")), t1 == null ? "" : t1);
      if (reason[$isEmpty] && dart.notNull(mismatchDescription.length) > 0) {
        mismatchDescription.add("is ").addDescriptionOf(item);
      } else {
        mismatchDescription.add(reason);
      }
      return mismatchDescription;
    }
  };
  (equals_matcher._DeepMatcher.new = function(_expected, limit = 1000) {
    this[_expected$] = _expected;
    this[_limit] = limit;
    equals_matcher._DeepMatcher.__proto__.new.call(this);
    ;
  }).prototype = equals_matcher._DeepMatcher.prototype;
  dart.addTypeTests(equals_matcher._DeepMatcher);
  dart.addTypeCaches(equals_matcher._DeepMatcher);
  dart.setMethodSignature(equals_matcher._DeepMatcher, () => ({
    __proto__: dart.getMethods(equals_matcher._DeepMatcher.__proto__),
    [_compareIterables]: dart.fnType(core.List$(core.String), [core.Iterable, core.Object, dart.fnType(core.List$(core.String), [dart.dynamic, dart.dynamic, core.String, core.int]), core.int, core.String]),
    [_compareSets]: dart.fnType(core.List$(core.String), [core.Set, core.Object, dart.fnType(core.List$(core.String), [dart.dynamic, dart.dynamic, core.String, core.int]), core.int, core.String]),
    [_recursiveMatch]: dart.fnType(core.List$(core.String), [core.Object, core.Object, core.String, core.int]),
    [_match]: dart.fnType(core.String, [dart.dynamic, dart.dynamic, core.Map]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(equals_matcher._DeepMatcher, L4);
  dart.setFieldSignature(equals_matcher._DeepMatcher, () => ({
    __proto__: dart.getFields(equals_matcher._DeepMatcher.__proto__),
    [_expected$]: dart.finalFieldType(core.Object),
    [_limit]: dart.finalFieldType(core.int)
  }));
  equals_matcher.equals = function equals(expected, limit = 100) {
    return typeof expected == 'string' ? new equals_matcher._StringEqualsMatcher.new(expected) : new equals_matcher._DeepMatcher.new(expected, limit);
  };
  type_matcher.isA = function isA(T) {
    return new (type_matcher.TypeMatcher$(T)).new();
  };
  type_matcher._stripDynamic = function _stripDynamic(type) {
    return dart.toString(type)[$replaceAll](type_matcher._dart2DynamicArgs, "");
  };
  dart.defineLazy(type_matcher, {
    /*type_matcher._dart2DynamicArgs*/get _dart2DynamicArgs() {
      return core.RegExp.new("<dynamic(, dynamic)*>");
    }
  }, true);
  var _parent = dart.privateName(having_matcher, "_parent");
  var _functionMatchers = dart.privateName(having_matcher, "_functionMatchers");
  var _name$0 = dart.privateName(having_matcher, "_name");
  var C3;
  const _is_HavingMatcher_default = Symbol('_is_HavingMatcher_default');
  having_matcher.HavingMatcher$ = dart.generic(T => {
    var _FunctionMatcherOfTL = () => (_FunctionMatcherOfTL = dart.constFn(having_matcher._FunctionMatcher$(T)))();
    var HavingMatcherOfTL = () => (HavingMatcherOfTL = dart.constFn(having_matcher.HavingMatcher$(T)))();
    class HavingMatcher extends core.Object {
      having(feature, description, matcher) {
        return new (HavingMatcherOfTL()).new(this[_parent], description, feature, matcher, this[_functionMatchers]);
      }
      matches(item, matchState) {
        for (let matcher of JSArrayOfMatcherL().of([this[_parent]])[$followedBy](this[_functionMatchers])) {
          if (!dart.test(matcher.matches(item, matchState))) {
            util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["matcher", matcher]));
            return false;
          }
        }
        return true;
      }
      describeMismatch(item, mismatchDescription, matchState, verbose) {
        let matcher = interfaces.Matcher.as(matchState[$_get]("matcher"));
        matcher.describeMismatch(item, mismatchDescription, core.Map.as(matchState[$_get]("state")), verbose);
        return mismatchDescription;
      }
      describe(description) {
        return description.add("").addDescriptionOf(this[_parent]).add(" with ").addAll("", " and ", "", this[_functionMatchers]);
      }
      get [_name]() {
        return core.String.as(this[$noSuchMethod](new core._Invocation.getter(C3 || CT.C3)));
      }
    }
    (HavingMatcher.new = function(parent, description, feature, matcher, existing = null) {
      let t2, t1;
      this[_parent] = parent;
      this[_functionMatchers] = (t1 = JSArrayOf_FunctionMatcherL().of([]), t1[$addAll]((t2 = existing, t2 == null ? JSArrayOf_FunctionMatcherL().of([]) : t2)), t1[$add](new (_FunctionMatcherOfTL()).new(description, feature, matcher)), t1);
      ;
    }).prototype = HavingMatcher.prototype;
    dart.addTypeTests(HavingMatcher);
    HavingMatcher.prototype[_is_HavingMatcher_default] = true;
    dart.addTypeCaches(HavingMatcher);
    HavingMatcher[dart.implements] = () => [type_matcher.TypeMatcher$(T)];
    dart.setMethodSignature(HavingMatcher, () => ({
      __proto__: dart.getMethods(HavingMatcher.__proto__),
      having: dart.fnType(type_matcher.TypeMatcher$(T), [dart.fnType(core.Object, [T]), core.String, core.Object]),
      matches: dart.fnType(core.bool, [core.Object, core.Map]),
      describeMismatch: dart.fnType(interfaces.Description, [dart.dynamic, interfaces.Description, core.Map, core.bool]),
      describe: dart.fnType(interfaces.Description, [interfaces.Description])
    }));
    dart.setGetterSignature(HavingMatcher, () => ({
      __proto__: dart.getGetters(HavingMatcher.__proto__),
      [_name]: core.String
    }));
    dart.setLibraryUri(HavingMatcher, L5);
    dart.setFieldSignature(HavingMatcher, () => ({
      __proto__: dart.getFields(HavingMatcher.__proto__),
      [_parent]: dart.finalFieldType(type_matcher.TypeMatcher$(T)),
      [_functionMatchers]: dart.finalFieldType(core.List$(having_matcher._FunctionMatcher))
    }));
    return HavingMatcher;
  });
  having_matcher.HavingMatcher = having_matcher.HavingMatcher$();
  dart.addTypeTests(having_matcher.HavingMatcher, _is_HavingMatcher_default);
  var _feature$ = dart.privateName(having_matcher, "_feature");
  var _featureDescription$ = dart.privateName(custom_matcher, "_featureDescription");
  var _featureName$ = dart.privateName(custom_matcher, "_featureName");
  var _matcher$0 = dart.privateName(custom_matcher, "_matcher");
  custom_matcher.CustomMatcher = class CustomMatcher extends interfaces.Matcher {
    featureValueOf(actual) {
      return actual;
    }
    matches(item, matchState) {
      try {
        let f = this.featureValueOf(item);
        if (dart.test(this[_matcher$0].matches(f, matchState))) return true;
        util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["custom.feature", f]));
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["custom.exception", dart.toString(exception), "custom.stack", dart.toString(chain.Chain.forTrace(stack).foldFrames(dart.fn(frame => frame.package === "test" || frame.package === "stream_channel" || frame.package === "matcher", FrameLToboolL()), {terse: true}))]));
      }
      return false;
    }
    describe(description) {
      return description.add(this[_featureDescription$]).add(" ").addDescriptionOf(this[_matcher$0]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (matchState[$_get]("custom.exception") != null) {
        mismatchDescription.add("threw ").addDescriptionOf(matchState[$_get]("custom.exception")).add("\n").add(dart.toString(matchState[$_get]("custom.stack")));
        return mismatchDescription;
      }
      mismatchDescription.add("has ").add(this[_featureName$]).add(" with value ").addDescriptionOf(matchState[$_get]("custom.feature"));
      let innerDescription = new description$.StringDescription.new();
      this[_matcher$0].describeMismatch(matchState[$_get]("custom.feature"), innerDescription, core.Map.as(matchState[$_get]("state")), verbose);
      if (dart.notNull(innerDescription.length) > 0) {
        mismatchDescription.add(" which ").add(innerDescription.toString());
      }
      return mismatchDescription;
    }
  };
  (custom_matcher.CustomMatcher.new = function(_featureDescription, _featureName, matcher) {
    this[_featureDescription$] = _featureDescription;
    this[_featureName$] = _featureName;
    this[_matcher$0] = util.wrapMatcher(matcher);
    custom_matcher.CustomMatcher.__proto__.new.call(this);
    ;
  }).prototype = custom_matcher.CustomMatcher.prototype;
  dart.addTypeTests(custom_matcher.CustomMatcher);
  dart.addTypeCaches(custom_matcher.CustomMatcher);
  dart.setMethodSignature(custom_matcher.CustomMatcher, () => ({
    __proto__: dart.getMethods(custom_matcher.CustomMatcher.__proto__),
    featureValueOf: dart.fnType(core.Object, [dart.dynamic]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(custom_matcher.CustomMatcher, L6);
  dart.setFieldSignature(custom_matcher.CustomMatcher, () => ({
    __proto__: dart.getFields(custom_matcher.CustomMatcher.__proto__),
    [_featureDescription$]: dart.finalFieldType(core.String),
    [_featureName$]: dart.finalFieldType(core.String),
    [_matcher$0]: dart.finalFieldType(interfaces.Matcher)
  }));
  const _is__FunctionMatcher_default = Symbol('_is__FunctionMatcher_default');
  having_matcher._FunctionMatcher$ = dart.generic(T => {
    class _FunctionMatcher extends custom_matcher.CustomMatcher {
      featureValueOf(actual) {
        let t1;
        T.as(actual);
        t1 = actual;
        return this[_feature$](t1);
      }
    }
    (_FunctionMatcher.new = function(name, _feature, matcher) {
      this[_feature$] = _feature;
      _FunctionMatcher.__proto__.new.call(this, "`" + dart.str(name) + "`:", "`" + dart.str(name) + "`", matcher);
      ;
    }).prototype = _FunctionMatcher.prototype;
    dart.addTypeTests(_FunctionMatcher);
    _FunctionMatcher.prototype[_is__FunctionMatcher_default] = true;
    dart.addTypeCaches(_FunctionMatcher);
    dart.setMethodSignature(_FunctionMatcher, () => ({
      __proto__: dart.getMethods(_FunctionMatcher.__proto__),
      featureValueOf: dart.fnType(core.Object, [core.Object])
    }));
    dart.setLibraryUri(_FunctionMatcher, L5);
    dart.setFieldSignature(_FunctionMatcher, () => ({
      __proto__: dart.getFields(_FunctionMatcher.__proto__),
      [_feature$]: dart.finalFieldType(dart.fnType(dart.dynamic, [T]))
    }));
    return _FunctionMatcher;
  });
  having_matcher._FunctionMatcher = having_matcher._FunctionMatcher$();
  dart.addTypeTests(having_matcher._FunctionMatcher, _is__FunctionMatcher_default);
  var _out = dart.privateName(description$, "_out");
  description$.StringDescription = class StringDescription extends core.Object {
    get length() {
      return this[_out].length;
    }
    toString() {
      return dart.toString(this[_out]);
    }
    add(text) {
      this[_out].write(text);
      return this;
    }
    replace(text) {
      this[_out].clear();
      return this.add(text);
    }
    addDescriptionOf(value) {
      if (interfaces.Matcher.is(value)) {
        value.describe(this);
      } else {
        this.add(pretty_print.prettyPrint(value, {maxLineLength: 80, maxItems: 25}));
      }
      return this;
    }
    addAll(start, separator, end, list) {
      let separate = false;
      this.add(start);
      for (let item of list) {
        if (separate) {
          this.add(separator);
        }
        this.addDescriptionOf(item);
        separate = true;
      }
      this.add(end);
      return this;
    }
  };
  (description$.StringDescription.new = function(init = "") {
    this[_out] = new core.StringBuffer.new();
    this[_out].write(init);
  }).prototype = description$.StringDescription.prototype;
  dart.addTypeTests(description$.StringDescription);
  dart.addTypeCaches(description$.StringDescription);
  description$.StringDescription[dart.implements] = () => [interfaces.Description];
  dart.setMethodSignature(description$.StringDescription, () => ({
    __proto__: dart.getMethods(description$.StringDescription.__proto__),
    add: dart.fnType(interfaces.Description, [core.String]),
    replace: dart.fnType(interfaces.Description, [core.String]),
    addDescriptionOf: dart.fnType(interfaces.Description, [dart.dynamic]),
    addAll: dart.fnType(interfaces.Description, [core.String, core.String, core.String, core.Iterable])
  }));
  dart.setGetterSignature(description$.StringDescription, () => ({
    __proto__: dart.getGetters(description$.StringDescription.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(description$.StringDescription, L7);
  dart.setFieldSignature(description$.StringDescription, () => ({
    __proto__: dart.getFields(description$.StringDescription.__proto__),
    [_out]: dart.finalFieldType(core.StringBuffer)
  }));
  dart.defineExtensionMethods(description$.StringDescription, ['toString']);
  var C4;
  pretty_print.prettyPrint = function prettyPrint(object, opts) {
    let maxLineLength = opts && 'maxLineLength' in opts ? opts.maxLineLength : null;
    let maxItems = opts && 'maxItems' in opts ? opts.maxItems : null;
    function _prettyPrint(object, indent, seen, top) {
      if (interfaces.Matcher.is(object)) {
        let description = new description$.StringDescription.new();
        object.describe(description);
        return "<" + dart.str(description) + ">";
      }
      if (dart.test(seen.contains(object))) return "(recursive)";
      seen = seen.union(collection.LinkedHashSet.from([object]));
      function pp(child) {
        return _prettyPrint(child, dart.notNull(indent) + 2, seen, false);
      }
      dart.fn(pp, dynamicToStringL());
      if (core.Iterable.is(object)) {
        let type = core.List.is(object) ? "" : dart.notNull(pretty_print._typeName(object)) + ":";
        let strings = object[$map](core.String, pp)[$toList]();
        if (maxItems != null && dart.notNull(strings[$length]) > dart.notNull(maxItems)) {
          strings[$replaceRange](dart.notNull(maxItems) - 1, strings[$length], JSArrayOfStringL().of(["..."]));
        }
        let singleLine = type + "[" + dart.str(strings[$join](", ")) + "]";
        if ((maxLineLength == null || singleLine.length + dart.notNull(indent) <= dart.notNull(maxLineLength)) && !singleLine[$contains]("\n")) {
          return singleLine;
        }
        return type + "[\n" + dart.notNull(strings[$map](core.String, dart.fn(string => dart.notNull(pretty_print._indent(dart.notNull(indent) + 2)) + dart.notNull(string), StringLToStringL()))[$join](",\n")) + "\n" + dart.notNull(pretty_print._indent(indent)) + "]";
      } else if (core.Map.is(object)) {
        let strings = object[$keys][$map](core.String, dart.fn(key => dart.str(pp(key)) + ": " + dart.str(pp(object[$_get](key))), dynamicToStringL()))[$toList]();
        if (maxItems != null && dart.notNull(strings[$length]) > dart.notNull(maxItems)) {
          strings[$replaceRange](dart.notNull(maxItems) - 1, strings[$length], JSArrayOfStringL().of(["..."]));
        }
        let singleLine = "{" + dart.str(strings[$join](", ")) + "}";
        if ((maxLineLength == null || singleLine.length + dart.notNull(indent) <= dart.notNull(maxLineLength)) && !singleLine[$contains]("\n")) {
          return singleLine;
        }
        return "{\n" + dart.notNull(strings[$map](core.String, dart.fn(string => dart.notNull(pretty_print._indent(dart.notNull(indent) + 2)) + dart.notNull(string), StringLToStringL()))[$join](",\n")) + "\n" + dart.notNull(pretty_print._indent(indent)) + "}";
      } else if (typeof object == 'string') {
        let lines = object[$split]("\n");
        return "'" + dart.notNull(lines[$map](core.String, C4 || CT.C4)[$join]("\\n'\n" + dart.str(pretty_print._indent(dart.notNull(indent) + 2)) + "'")) + "'";
      } else {
        let value = dart.toString(object)[$replaceAll]("\n", dart.notNull(pretty_print._indent(indent)) + "\n");
        let defaultToString = value[$startsWith]("Instance of ");
        if (dart.test(top)) value = "<" + value + ">";
        if (typeof object == 'number' || typeof object == 'boolean' || core.Function.is(object) || core.RegExp.is(object) || core.MapEntry.is(object) || core.Expando.is(object) || object == null || defaultToString) {
          return value;
        } else {
          return dart.str(pretty_print._typeName(object)) + ":" + value;
        }
      }
    }
    dart.fn(_prettyPrint, dynamicAndintLAndSetL__ToStringL());
    return _prettyPrint(object, 0, LinkedHashSetOfObjectL().new(), true);
  };
  pretty_print._indent = function _indent(length) {
    return ListOfStringL().filled(length, " ")[$join]("");
  };
  pretty_print._typeName = function _typeName(x) {
    if (core.Type.is(x)) return "Type";
    if (core.Uri.is(x)) return "Uri";
    if (core.Set.is(x)) return "Set";
    if (core.BigInt.is(x)) return "BigInt";
    return dart.str(dart.runtimeType(x));
  };
  pretty_print._escapeString = function _escapeString(source) {
    return util.escape(source)[$replaceAll]("'", "\\'");
  };
  core_matchers._Empty = class _Empty extends interfaces.Matcher {
    matches(item, matchState) {
      return core.bool.as(dart.dload(item, 'isEmpty'));
    }
    describe(description) {
      return description.add("empty");
    }
  };
  (core_matchers._Empty.new = function() {
    core_matchers._Empty.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._Empty.prototype;
  dart.addTypeTests(core_matchers._Empty);
  dart.addTypeCaches(core_matchers._Empty);
  dart.setMethodSignature(core_matchers._Empty, () => ({
    __proto__: dart.getMethods(core_matchers._Empty.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._Empty, L8);
  core_matchers._NotEmpty = class _NotEmpty extends interfaces.Matcher {
    matches(item, matchState) {
      return core.bool.as(dart.dload(item, 'isNotEmpty'));
    }
    describe(description) {
      return description.add("non-empty");
    }
  };
  (core_matchers._NotEmpty.new = function() {
    core_matchers._NotEmpty.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._NotEmpty.prototype;
  dart.addTypeTests(core_matchers._NotEmpty);
  dart.addTypeCaches(core_matchers._NotEmpty);
  dart.setMethodSignature(core_matchers._NotEmpty, () => ({
    __proto__: dart.getMethods(core_matchers._NotEmpty.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._NotEmpty, L8);
  core_matchers._IsNull = class _IsNull extends interfaces.Matcher {
    matches(item, matchState) {
      return item == null;
    }
    describe(description) {
      return description.add("null");
    }
  };
  (core_matchers._IsNull.new = function() {
    core_matchers._IsNull.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsNull.prototype;
  dart.addTypeTests(core_matchers._IsNull);
  dart.addTypeCaches(core_matchers._IsNull);
  dart.setMethodSignature(core_matchers._IsNull, () => ({
    __proto__: dart.getMethods(core_matchers._IsNull.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsNull, L8);
  core_matchers._IsNotNull = class _IsNotNull extends interfaces.Matcher {
    matches(item, matchState) {
      return item != null;
    }
    describe(description) {
      return description.add("not null");
    }
  };
  (core_matchers._IsNotNull.new = function() {
    core_matchers._IsNotNull.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsNotNull.prototype;
  dart.addTypeTests(core_matchers._IsNotNull);
  dart.addTypeCaches(core_matchers._IsNotNull);
  dart.setMethodSignature(core_matchers._IsNotNull, () => ({
    __proto__: dart.getMethods(core_matchers._IsNotNull.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsNotNull, L8);
  core_matchers._IsTrue = class _IsTrue extends interfaces.Matcher {
    matches(item, matchState) {
      return dart.equals(item, true);
    }
    describe(description) {
      return description.add("true");
    }
  };
  (core_matchers._IsTrue.new = function() {
    core_matchers._IsTrue.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsTrue.prototype;
  dart.addTypeTests(core_matchers._IsTrue);
  dart.addTypeCaches(core_matchers._IsTrue);
  dart.setMethodSignature(core_matchers._IsTrue, () => ({
    __proto__: dart.getMethods(core_matchers._IsTrue.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsTrue, L8);
  core_matchers._IsFalse = class _IsFalse extends interfaces.Matcher {
    matches(item, matchState) {
      return dart.equals(item, false);
    }
    describe(description) {
      return description.add("false");
    }
  };
  (core_matchers._IsFalse.new = function() {
    core_matchers._IsFalse.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsFalse.prototype;
  dart.addTypeTests(core_matchers._IsFalse);
  dart.addTypeCaches(core_matchers._IsFalse);
  dart.setMethodSignature(core_matchers._IsFalse, () => ({
    __proto__: dart.getMethods(core_matchers._IsFalse.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsFalse, L8);
  core_matchers._IsNaN = class _IsNaN extends feature_matcher.FeatureMatcher$(core.num) {
    typedMatches(item, matchState) {
      core.num.as(item);
      return (0 / 0)[$compareTo](item) === 0;
    }
    describe(description) {
      return description.add("NaN");
    }
  };
  (core_matchers._IsNaN.new = function() {
    core_matchers._IsNaN.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsNaN.prototype;
  dart.addTypeTests(core_matchers._IsNaN);
  dart.addTypeCaches(core_matchers._IsNaN);
  dart.setMethodSignature(core_matchers._IsNaN, () => ({
    __proto__: dart.getMethods(core_matchers._IsNaN.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(core_matchers._IsNaN, L8);
  core_matchers._IsNotNaN = class _IsNotNaN extends feature_matcher.FeatureMatcher$(core.num) {
    typedMatches(item, matchState) {
      core.num.as(item);
      return (0 / 0)[$compareTo](item) !== 0;
    }
    describe(description) {
      return description.add("not NaN");
    }
  };
  (core_matchers._IsNotNaN.new = function() {
    core_matchers._IsNotNaN.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsNotNaN.prototype;
  dart.addTypeTests(core_matchers._IsNotNaN);
  dart.addTypeCaches(core_matchers._IsNotNaN);
  dart.setMethodSignature(core_matchers._IsNotNaN, () => ({
    __proto__: dart.getMethods(core_matchers._IsNotNaN.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(core_matchers._IsNotNaN, L8);
  var _expected = dart.privateName(core_matchers, "_expected");
  var _expected$0 = dart.privateName(core_matchers, "_IsSameAs._expected");
  core_matchers._IsSameAs = class _IsSameAs extends interfaces.Matcher {
    get [_expected]() {
      return this[_expected$0];
    }
    set [_expected](value) {
      super[_expected] = value;
    }
    matches(item, matchState) {
      return core.identical(item, this[_expected]);
    }
    describe(description) {
      return description.add("same instance as ").addDescriptionOf(this[_expected]);
    }
  };
  (core_matchers._IsSameAs.new = function(_expected) {
    this[_expected$0] = _expected;
    core_matchers._IsSameAs.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsSameAs.prototype;
  dart.addTypeTests(core_matchers._IsSameAs);
  dart.addTypeCaches(core_matchers._IsSameAs);
  dart.setMethodSignature(core_matchers._IsSameAs, () => ({
    __proto__: dart.getMethods(core_matchers._IsSameAs.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsSameAs, L8);
  dart.setFieldSignature(core_matchers._IsSameAs, () => ({
    __proto__: dart.getFields(core_matchers._IsSameAs.__proto__),
    [_expected]: dart.finalFieldType(core.Object)
  }));
  core_matchers._IsAnything = class _IsAnything extends interfaces.Matcher {
    matches(item, matchState) {
      return true;
    }
    describe(description) {
      return description.add("anything");
    }
  };
  (core_matchers._IsAnything.new = function() {
    core_matchers._IsAnything.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._IsAnything.prototype;
  dart.addTypeTests(core_matchers._IsAnything);
  dart.addTypeCaches(core_matchers._IsAnything);
  dart.setMethodSignature(core_matchers._IsAnything, () => ({
    __proto__: dart.getMethods(core_matchers._IsAnything.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._IsAnything, L8);
  const _is_isInstanceOf_default = Symbol('_is_isInstanceOf_default');
  core_matchers.isInstanceOf$ = dart.generic(T => {
    class isInstanceOf extends type_matcher.TypeMatcher$(T) {}
    (isInstanceOf.new = function() {
      isInstanceOf.__proto__.new.call(this);
      ;
    }).prototype = isInstanceOf.prototype;
    dart.addTypeTests(isInstanceOf);
    isInstanceOf.prototype[_is_isInstanceOf_default] = true;
    dart.addTypeCaches(isInstanceOf);
    dart.setLibraryUri(isInstanceOf, L8);
    return isInstanceOf;
  });
  core_matchers.isInstanceOf = core_matchers.isInstanceOf$();
  dart.addTypeTests(core_matchers.isInstanceOf, _is_isInstanceOf_default);
  core_matchers._ReturnsNormally = class _ReturnsNormally extends feature_matcher.FeatureMatcher$(core.Function) {
    typedMatches(f, matchState) {
      core.Function.as(f);
      try {
        dart.dcall(f, []);
        return true;
      } catch (e$) {
        let e = dart.getThrown(e$);
        let s = dart.stackTrace(e$);
        util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["exception", e, "stack", s]));
        return false;
      }
    }
    describe(description) {
      return description.add("return normally");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.Function.as(item);
      mismatchDescription.add("threw ").addDescriptionOf(matchState[$_get]("exception"));
      if (dart.test(verbose)) {
        mismatchDescription.add(" at ").add(dart.toString(matchState[$_get]("stack")));
      }
      return mismatchDescription;
    }
  };
  (core_matchers._ReturnsNormally.new = function() {
    core_matchers._ReturnsNormally.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._ReturnsNormally.prototype;
  dart.addTypeTests(core_matchers._ReturnsNormally);
  dart.addTypeCaches(core_matchers._ReturnsNormally);
  dart.setMethodSignature(core_matchers._ReturnsNormally, () => ({
    __proto__: dart.getMethods(core_matchers._ReturnsNormally.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(core_matchers._ReturnsNormally, L8);
  var _matcher$1 = dart.privateName(core_matchers, "_matcher");
  var _matcher$2 = dart.privateName(core_matchers, "_HasLength._matcher");
  core_matchers._HasLength = class _HasLength extends interfaces.Matcher {
    get [_matcher$1]() {
      return this[_matcher$2];
    }
    set [_matcher$1](value) {
      super[_matcher$1] = value;
    }
    matches(item, matchState) {
      try {
        if (dart.dtest(dart.dsend(dart.dsend(dart.dload(item, 'length'), '*', [dart.dload(item, 'length')]), '>=', [0]))) {
          return this[_matcher$1].matches(dart.dload(item, 'length'), matchState);
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        return false;
      }
      dart.throw(new core.UnsupportedError.new("Should never get here"));
    }
    describe(description) {
      return description.add("an object with length of ").addDescriptionOf(this[_matcher$1]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      try {
        if (dart.dtest(dart.dsend(dart.dsend(dart.dload(item, 'length'), '*', [dart.dload(item, 'length')]), '>=', [0]))) {
          return mismatchDescription.add("has length of ").addDescriptionOf(dart.dload(item, 'length'));
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        return mismatchDescription.add("has no length property");
      }
      dart.throw(new core.UnsupportedError.new("Should never get here"));
    }
  };
  (core_matchers._HasLength.new = function(matcher = null) {
    this[_matcher$2] = matcher;
    core_matchers._HasLength.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._HasLength.prototype;
  dart.addTypeTests(core_matchers._HasLength);
  dart.addTypeCaches(core_matchers._HasLength);
  dart.setMethodSignature(core_matchers._HasLength, () => ({
    __proto__: dart.getMethods(core_matchers._HasLength.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._HasLength, L8);
  dart.setFieldSignature(core_matchers._HasLength, () => ({
    __proto__: dart.getFields(core_matchers._HasLength.__proto__),
    [_matcher$1]: dart.finalFieldType(interfaces.Matcher)
  }));
  var _expected$1 = dart.privateName(core_matchers, "_Contains._expected");
  core_matchers._Contains = class _Contains extends interfaces.Matcher {
    get [_expected]() {
      return this[_expected$1];
    }
    set [_expected](value) {
      super[_expected] = value;
    }
    matches(item, matchState) {
      let expected = this[_expected];
      if (typeof item == 'string') {
        return core.Pattern.is(expected) && item[$contains](expected);
      } else if (core.Iterable.is(item)) {
        if (interfaces.Matcher.is(expected)) {
          return item[$any](dart.fn(e => expected.matches(e, matchState), dynamicToboolL()));
        } else {
          return item[$contains](this[_expected]);
        }
      } else if (core.Map.is(item)) {
        return item[$containsKey](this[_expected]);
      }
      return false;
    }
    describe(description) {
      return description.add("contains ").addDescriptionOf(this[_expected]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (typeof item == 'string' || core.Iterable.is(item) || core.Map.is(item)) {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      } else {
        return mismatchDescription.add("is not a string, map or iterable");
      }
    }
  };
  (core_matchers._Contains.new = function(_expected) {
    this[_expected$1] = _expected;
    core_matchers._Contains.__proto__.new.call(this);
    ;
  }).prototype = core_matchers._Contains.prototype;
  dart.addTypeTests(core_matchers._Contains);
  dart.addTypeCaches(core_matchers._Contains);
  dart.setMethodSignature(core_matchers._Contains, () => ({
    __proto__: dart.getMethods(core_matchers._Contains.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(core_matchers._Contains, L8);
  dart.setFieldSignature(core_matchers._Contains, () => ({
    __proto__: dart.getFields(core_matchers._Contains.__proto__),
    [_expected]: dart.finalFieldType(core.Object)
  }));
  var _source = dart.privateName(core_matchers, "_source");
  var _containsFunction = dart.privateName(core_matchers, "_containsFunction");
  const _is__In_default = Symbol('_is__In_default');
  var _source$ = dart.privateName(core_matchers, "_In._source");
  var _containsFunction$ = dart.privateName(core_matchers, "_In._containsFunction");
  core_matchers._In$ = dart.generic(T => {
    class _In extends feature_matcher.FeatureMatcher$(T) {
      get [_source]() {
        return this[_source$];
      }
      set [_source](value) {
        super[_source] = value;
      }
      get [_containsFunction]() {
        return this[_containsFunction$];
      }
      set [_containsFunction](value) {
        super[_containsFunction] = value;
      }
      typedMatches(item, matchState) {
        let t5;
        T.as(item);
        t5 = item;
        return this[_containsFunction](t5);
      }
      describe(description) {
        return description.add("is in ").addDescriptionOf(this[_source]);
      }
    }
    (_In.new = function(_source, _containsFunction) {
      this[_source$] = _source;
      this[_containsFunction$] = _containsFunction;
      _In.__proto__.new.call(this);
      ;
    }).prototype = _In.prototype;
    dart.addTypeTests(_In);
    _In.prototype[_is__In_default] = true;
    dart.addTypeCaches(_In);
    dart.setMethodSignature(_In, () => ({
      __proto__: dart.getMethods(_In.__proto__),
      typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
    }));
    dart.setLibraryUri(_In, L8);
    dart.setFieldSignature(_In, () => ({
      __proto__: dart.getFields(_In.__proto__),
      [_source]: dart.finalFieldType(core.Object),
      [_containsFunction]: dart.finalFieldType(dart.fnType(core.bool, [T]))
    }));
    return _In;
  });
  core_matchers._In = core_matchers._In$();
  dart.addTypeTests(core_matchers._In, _is__In_default);
  var _description$ = dart.privateName(core_matchers, "_description");
  const _is__Predicate_default = Symbol('_is__Predicate_default');
  core_matchers._Predicate$ = dart.generic(T => {
    class _Predicate extends feature_matcher.FeatureMatcher$(T) {
      typedMatches(item, matchState) {
        let t5;
        T.as(item);
        t5 = item;
        return this[_matcher$1](t5);
      }
      describe(description) {
        return description.add(this[_description$]);
      }
    }
    (_Predicate.new = function(_matcher, _description) {
      this[_matcher$1] = _matcher;
      this[_description$] = _description;
      _Predicate.__proto__.new.call(this);
      ;
    }).prototype = _Predicate.prototype;
    dart.addTypeTests(_Predicate);
    _Predicate.prototype[_is__Predicate_default] = true;
    dart.addTypeCaches(_Predicate);
    dart.setMethodSignature(_Predicate, () => ({
      __proto__: dart.getMethods(_Predicate.__proto__),
      typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
    }));
    dart.setLibraryUri(_Predicate, L8);
    dart.setFieldSignature(_Predicate, () => ({
      __proto__: dart.getFields(_Predicate.__proto__),
      [_matcher$1]: dart.finalFieldType(dart.fnType(core.bool, [T])),
      [_description$]: dart.finalFieldType(core.String)
    }));
    return _Predicate;
  });
  core_matchers._Predicate = core_matchers._Predicate$();
  dart.addTypeTests(core_matchers._Predicate, _is__Predicate_default);
  core_matchers.same = function same(expected) {
    return new core_matchers._IsSameAs.new(expected);
  };
  core_matchers.hasLength = function hasLength(matcher) {
    return new core_matchers._HasLength.new(util.wrapMatcher(matcher));
  };
  core_matchers.contains = function contains(expected) {
    return new core_matchers._Contains.new(expected);
  };
  core_matchers.isIn = function isIn(expected) {
    if (core.Iterable.is(expected)) {
      return new (_InOfObjectL()).new(expected, dart.bind(expected, $contains));
    } else if (typeof expected == 'string') {
      return new (_InOfPatternL()).new(expected, dart.bind(expected, $contains));
    } else if (core.Map.is(expected)) {
      return new (_InOfObjectL()).new(expected, dart.bind(expected, $containsKey));
    }
    dart.throw(new core.ArgumentError.value(expected, "expected", "Only Iterable, Map, and String are supported."));
  };
  core_matchers.predicate = function predicate(T, f, description = "satisfies function") {
    return new (core_matchers._Predicate$(T)).new(f, description);
  };
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  dart.defineLazy(core_matchers, {
    /*core_matchers.isEmpty*/get isEmpty() {
      return C5 || CT.C5;
    },
    /*core_matchers.isNotEmpty*/get isNotEmpty() {
      return C6 || CT.C6;
    },
    /*core_matchers.isNull*/get isNull() {
      return C7 || CT.C7;
    },
    /*core_matchers.isNotNull*/get isNotNull() {
      return C8 || CT.C8;
    },
    /*core_matchers.isTrue*/get isTrue() {
      return C9 || CT.C9;
    },
    /*core_matchers.isFalse*/get isFalse() {
      return C10 || CT.C10;
    },
    /*core_matchers.isNaN*/get isNaN() {
      return C11 || CT.C11;
    },
    /*core_matchers.isNotNaN*/get isNotNaN() {
      return C12 || CT.C12;
    },
    /*core_matchers.anything*/get anything() {
      return C13 || CT.C13;
    },
    /*core_matchers.returnsNormally*/get returnsNormally() {
      return C14 || CT.C14;
    },
    /*core_matchers.isMap*/get isMap() {
      return C15 || CT.C15;
    },
    /*core_matchers.isList*/get isList() {
      return C16 || CT.C16;
    }
  }, true);
  var _value = dart.privateName(order_matchers, "_value");
  var _equalValue = dart.privateName(order_matchers, "_equalValue");
  var _lessThanValue = dart.privateName(order_matchers, "_lessThanValue");
  var _greaterThanValue = dart.privateName(order_matchers, "_greaterThanValue");
  var _comparisonDescription = dart.privateName(order_matchers, "_comparisonDescription");
  var _valueInDescription = dart.privateName(order_matchers, "_valueInDescription");
  var _value$0 = dart.privateName(order_matchers, "_OrderingMatcher._value");
  var _equalValue$ = dart.privateName(order_matchers, "_OrderingMatcher._equalValue");
  var _lessThanValue$ = dart.privateName(order_matchers, "_OrderingMatcher._lessThanValue");
  var _greaterThanValue$ = dart.privateName(order_matchers, "_OrderingMatcher._greaterThanValue");
  var _comparisonDescription$ = dart.privateName(order_matchers, "_OrderingMatcher._comparisonDescription");
  var _valueInDescription$ = dart.privateName(order_matchers, "_OrderingMatcher._valueInDescription");
  order_matchers._OrderingMatcher = class _OrderingMatcher extends interfaces.Matcher {
    get [_value]() {
      return this[_value$0];
    }
    set [_value](value) {
      super[_value] = value;
    }
    get [_equalValue]() {
      return this[_equalValue$];
    }
    set [_equalValue](value) {
      super[_equalValue] = value;
    }
    get [_lessThanValue]() {
      return this[_lessThanValue$];
    }
    set [_lessThanValue](value) {
      super[_lessThanValue] = value;
    }
    get [_greaterThanValue]() {
      return this[_greaterThanValue$];
    }
    set [_greaterThanValue](value) {
      super[_greaterThanValue] = value;
    }
    get [_comparisonDescription]() {
      return this[_comparisonDescription$];
    }
    set [_comparisonDescription](value) {
      super[_comparisonDescription] = value;
    }
    get [_valueInDescription]() {
      return this[_valueInDescription$];
    }
    set [_valueInDescription](value) {
      super[_valueInDescription] = value;
    }
    matches(item, matchState) {
      if (dart.equals(item, this[_value])) {
        return this[_equalValue];
      } else if (dart.dtest(dart.dsend(item, '<', [this[_value]]))) {
        return this[_lessThanValue];
      } else if (dart.dtest(dart.dsend(item, '>', [this[_value]]))) {
        return this[_greaterThanValue];
      } else {
        return false;
      }
    }
    describe(description) {
      if (dart.test(this[_valueInDescription])) {
        return description.add(this[_comparisonDescription]).add(" ").addDescriptionOf(this[_value]);
      } else {
        return description.add(this[_comparisonDescription]);
      }
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      mismatchDescription.add("is not ");
      return this.describe(mismatchDescription);
    }
  };
  (order_matchers._OrderingMatcher.new = function(_value, _equalValue, _lessThanValue, _greaterThanValue, _comparisonDescription, valueInDescription = true) {
    this[_value$0] = _value;
    this[_equalValue$] = _equalValue;
    this[_lessThanValue$] = _lessThanValue;
    this[_greaterThanValue$] = _greaterThanValue;
    this[_comparisonDescription$] = _comparisonDescription;
    this[_valueInDescription$] = valueInDescription;
    order_matchers._OrderingMatcher.__proto__.new.call(this);
    ;
  }).prototype = order_matchers._OrderingMatcher.prototype;
  dart.addTypeTests(order_matchers._OrderingMatcher);
  dart.addTypeCaches(order_matchers._OrderingMatcher);
  dart.setMethodSignature(order_matchers._OrderingMatcher, () => ({
    __proto__: dart.getMethods(order_matchers._OrderingMatcher.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(order_matchers._OrderingMatcher, L9);
  dart.setFieldSignature(order_matchers._OrderingMatcher, () => ({
    __proto__: dart.getFields(order_matchers._OrderingMatcher.__proto__),
    [_value]: dart.finalFieldType(core.Object),
    [_equalValue]: dart.finalFieldType(core.bool),
    [_lessThanValue]: dart.finalFieldType(core.bool),
    [_greaterThanValue]: dart.finalFieldType(core.bool),
    [_comparisonDescription]: dart.finalFieldType(core.String),
    [_valueInDescription]: dart.finalFieldType(core.bool)
  }));
  order_matchers.greaterThan = function greaterThan(value) {
    return new order_matchers._OrderingMatcher.new(value, false, false, true, "a value greater than");
  };
  order_matchers.greaterThanOrEqualTo = function greaterThanOrEqualTo(value) {
    return new order_matchers._OrderingMatcher.new(value, true, false, true, "a value greater than or equal to");
  };
  order_matchers.lessThan = function lessThan(value) {
    return new order_matchers._OrderingMatcher.new(value, false, true, false, "a value less than");
  };
  order_matchers.lessThanOrEqualTo = function lessThanOrEqualTo(value) {
    return new order_matchers._OrderingMatcher.new(value, true, true, false, "a value less than or equal to");
  };
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  dart.defineLazy(order_matchers, {
    /*order_matchers.isZero*/get isZero() {
      return C17 || CT.C17;
    },
    /*order_matchers.isNonZero*/get isNonZero() {
      return C18 || CT.C18;
    },
    /*order_matchers.isPositive*/get isPositive() {
      return C19 || CT.C19;
    },
    /*order_matchers.isNonPositive*/get isNonPositive() {
      return C20 || CT.C20;
    },
    /*order_matchers.isNegative*/get isNegative() {
      return C21 || CT.C21;
    },
    /*order_matchers.isNonNegative*/get isNonNegative() {
      return C22 || CT.C22;
    }
  }, true);
  var _value$1 = dart.privateName(numeric_matchers, "_value");
  var _delta = dart.privateName(numeric_matchers, "_delta");
  var _value$2 = dart.privateName(numeric_matchers, "_IsCloseTo._value");
  var _delta$ = dart.privateName(numeric_matchers, "_IsCloseTo._delta");
  numeric_matchers._IsCloseTo = class _IsCloseTo extends feature_matcher.FeatureMatcher$(core.num) {
    get [_value$1]() {
      return this[_value$2];
    }
    set [_value$1](value) {
      super[_value$1] = value;
    }
    get [_delta]() {
      return this[_delta$];
    }
    set [_delta](value) {
      super[_delta] = value;
    }
    typedMatches(item, matchState) {
      core.num.as(item);
      let diff = dart.notNull(item) - dart.notNull(this[_value$1]);
      if (diff < 0) diff = -diff;
      return diff <= dart.notNull(this[_delta]);
    }
    describe(description) {
      return description.add("a numeric value within ").addDescriptionOf(this[_delta]).add(" of ").addDescriptionOf(this[_value$1]);
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.num.as(item);
      let diff = dart.notNull(item) - dart.notNull(this[_value$1]);
      if (diff < 0) diff = -diff;
      return mismatchDescription.add(" differs by ").addDescriptionOf(diff);
    }
  };
  (numeric_matchers._IsCloseTo.new = function(_value, _delta) {
    this[_value$2] = _value;
    this[_delta$] = _delta;
    numeric_matchers._IsCloseTo.__proto__.new.call(this);
    ;
  }).prototype = numeric_matchers._IsCloseTo.prototype;
  dart.addTypeTests(numeric_matchers._IsCloseTo);
  dart.addTypeCaches(numeric_matchers._IsCloseTo);
  dart.setMethodSignature(numeric_matchers._IsCloseTo, () => ({
    __proto__: dart.getMethods(numeric_matchers._IsCloseTo.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(numeric_matchers._IsCloseTo, L10);
  dart.setFieldSignature(numeric_matchers._IsCloseTo, () => ({
    __proto__: dart.getFields(numeric_matchers._IsCloseTo.__proto__),
    [_value$1]: dart.finalFieldType(core.num),
    [_delta]: dart.finalFieldType(core.num)
  }));
  var _low = dart.privateName(numeric_matchers, "_low");
  var _high = dart.privateName(numeric_matchers, "_high");
  var _lowMatchValue = dart.privateName(numeric_matchers, "_lowMatchValue");
  var _highMatchValue = dart.privateName(numeric_matchers, "_highMatchValue");
  var _low$ = dart.privateName(numeric_matchers, "_InRange._low");
  var _high$ = dart.privateName(numeric_matchers, "_InRange._high");
  var _lowMatchValue$ = dart.privateName(numeric_matchers, "_InRange._lowMatchValue");
  var _highMatchValue$ = dart.privateName(numeric_matchers, "_InRange._highMatchValue");
  numeric_matchers._InRange = class _InRange extends feature_matcher.FeatureMatcher$(core.num) {
    get [_low]() {
      return this[_low$];
    }
    set [_low](value) {
      super[_low] = value;
    }
    get [_high]() {
      return this[_high$];
    }
    set [_high](value) {
      super[_high] = value;
    }
    get [_lowMatchValue]() {
      return this[_lowMatchValue$];
    }
    set [_lowMatchValue](value) {
      super[_lowMatchValue] = value;
    }
    get [_highMatchValue]() {
      return this[_highMatchValue$];
    }
    set [_highMatchValue](value) {
      super[_highMatchValue] = value;
    }
    typedMatches(value, matchState) {
      core.num.as(value);
      if (dart.notNull(value) < dart.notNull(this[_low]) || dart.notNull(value) > dart.notNull(this[_high])) {
        return false;
      }
      if (value == this[_low]) {
        return this[_lowMatchValue];
      }
      if (value == this[_high]) {
        return this[_highMatchValue];
      }
      return dart.notNull(value) > dart.notNull(this[_low]) && dart.notNull(value) < dart.notNull(this[_high]);
    }
    describe(description) {
      return description.add("be in range from " + dart.str(this[_low]) + " (" + (dart.test(this[_lowMatchValue]) ? "inclusive" : "exclusive") + ") to " + dart.str(this[_high]) + " (" + (dart.test(this[_highMatchValue]) ? "inclusive" : "exclusive") + ")");
    }
  };
  (numeric_matchers._InRange.new = function(_low, _high, _lowMatchValue, _highMatchValue) {
    this[_low$] = _low;
    this[_high$] = _high;
    this[_lowMatchValue$] = _lowMatchValue;
    this[_highMatchValue$] = _highMatchValue;
    numeric_matchers._InRange.__proto__.new.call(this);
    ;
  }).prototype = numeric_matchers._InRange.prototype;
  dart.addTypeTests(numeric_matchers._InRange);
  dart.addTypeCaches(numeric_matchers._InRange);
  dart.setMethodSignature(numeric_matchers._InRange, () => ({
    __proto__: dart.getMethods(numeric_matchers._InRange.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(numeric_matchers._InRange, L10);
  dart.setFieldSignature(numeric_matchers._InRange, () => ({
    __proto__: dart.getFields(numeric_matchers._InRange.__proto__),
    [_low]: dart.finalFieldType(core.num),
    [_high]: dart.finalFieldType(core.num),
    [_lowMatchValue]: dart.finalFieldType(core.bool),
    [_highMatchValue]: dart.finalFieldType(core.bool)
  }));
  numeric_matchers.closeTo = function closeTo(value, delta) {
    return new numeric_matchers._IsCloseTo.new(value, delta);
  };
  numeric_matchers.inInclusiveRange = function inInclusiveRange(low, high) {
    return new numeric_matchers._InRange.new(low, high, true, true);
  };
  numeric_matchers.inExclusiveRange = function inExclusiveRange(low, high) {
    return new numeric_matchers._InRange.new(low, high, false, false);
  };
  numeric_matchers.inOpenClosedRange = function inOpenClosedRange(low, high) {
    return new numeric_matchers._InRange.new(low, high, false, true);
  };
  numeric_matchers.inClosedOpenRange = function inClosedOpenRange(low, high) {
    return new numeric_matchers._InRange.new(low, high, true, false);
  };
  var _matcher$3 = dart.privateName(iterable_matchers, "_matcher");
  iterable_matchers._IterableMatcher = class _IterableMatcher extends feature_matcher.FeatureMatcher$(core.Iterable) {};
  (iterable_matchers._IterableMatcher.new = function() {
    iterable_matchers._IterableMatcher.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._IterableMatcher.prototype;
  dart.addTypeTests(iterable_matchers._IterableMatcher);
  dart.addTypeCaches(iterable_matchers._IterableMatcher);
  dart.setLibraryUri(iterable_matchers._IterableMatcher, L11);
  iterable_matchers._EveryElement = class _EveryElement extends iterable_matchers._IterableMatcher {
    typedMatches(item, matchState) {
      core.Iterable.as(item);
      let i = 0;
      for (let element of item) {
        if (!dart.test(this[_matcher$3].matches(element, matchState))) {
          util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["index", i, "element", element]));
          return false;
        }
        i = i + 1;
      }
      return true;
    }
    describe(description) {
      return description.add("every element(").addDescriptionOf(this[_matcher$3]).add(")");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.Iterable.as(item);
      if (matchState[$_get]("index") != null) {
        let index = matchState[$_get]("index");
        let element = matchState[$_get]("element");
        mismatchDescription.add("has value ").addDescriptionOf(element).add(" which ");
        let subDescription = new description$.StringDescription.new();
        this[_matcher$3].describeMismatch(element, subDescription, core.Map.as(matchState[$_get]("state")), verbose);
        if (dart.notNull(subDescription.length) > 0) {
          mismatchDescription.add(subDescription.toString());
        } else {
          mismatchDescription.add("doesn't match ");
          this[_matcher$3].describe(mismatchDescription);
        }
        mismatchDescription.add(" at index " + dart.str(index));
        return mismatchDescription;
      }
      return super.describeMismatch(item, mismatchDescription, matchState, verbose);
    }
  };
  (iterable_matchers._EveryElement.new = function(_matcher) {
    this[_matcher$3] = _matcher;
    iterable_matchers._EveryElement.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._EveryElement.prototype;
  dart.addTypeTests(iterable_matchers._EveryElement);
  dart.addTypeCaches(iterable_matchers._EveryElement);
  dart.setMethodSignature(iterable_matchers._EveryElement, () => ({
    __proto__: dart.getMethods(iterable_matchers._EveryElement.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(iterable_matchers._EveryElement, L11);
  dart.setFieldSignature(iterable_matchers._EveryElement, () => ({
    __proto__: dart.getFields(iterable_matchers._EveryElement.__proto__),
    [_matcher$3]: dart.finalFieldType(interfaces.Matcher)
  }));
  iterable_matchers._AnyElement = class _AnyElement extends iterable_matchers._IterableMatcher {
    typedMatches(item, matchState) {
      core.Iterable.as(item);
      return item[$any](dart.fn(e => this[_matcher$3].matches(e, matchState), dynamicToboolL()));
    }
    describe(description) {
      return description.add("some element ").addDescriptionOf(this[_matcher$3]);
    }
  };
  (iterable_matchers._AnyElement.new = function(_matcher) {
    this[_matcher$3] = _matcher;
    iterable_matchers._AnyElement.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._AnyElement.prototype;
  dart.addTypeTests(iterable_matchers._AnyElement);
  dart.addTypeCaches(iterable_matchers._AnyElement);
  dart.setMethodSignature(iterable_matchers._AnyElement, () => ({
    __proto__: dart.getMethods(iterable_matchers._AnyElement.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(iterable_matchers._AnyElement, L11);
  dart.setFieldSignature(iterable_matchers._AnyElement, () => ({
    __proto__: dart.getFields(iterable_matchers._AnyElement.__proto__),
    [_matcher$3]: dart.finalFieldType(interfaces.Matcher)
  }));
  var _expected$2 = dart.privateName(iterable_matchers, "_expected");
  iterable_matchers._OrderedEquals = class _OrderedEquals extends iterable_matchers._IterableMatcher {
    typedMatches(item, matchState) {
      core.Iterable.as(item);
      return this[_matcher$3].matches(item, matchState);
    }
    describe(description) {
      return description.add("equals ").addDescriptionOf(this[_expected$2]).add(" ordered");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.Iterable.as(item);
      return this[_matcher$3].describeMismatch(item, mismatchDescription, matchState, verbose);
    }
  };
  (iterable_matchers._OrderedEquals.new = function(_expected) {
    this[_expected$2] = _expected;
    this[_matcher$3] = equals_matcher.equals(_expected, 1);
    iterable_matchers._OrderedEquals.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._OrderedEquals.prototype;
  dart.addTypeTests(iterable_matchers._OrderedEquals);
  dart.addTypeCaches(iterable_matchers._OrderedEquals);
  dart.setMethodSignature(iterable_matchers._OrderedEquals, () => ({
    __proto__: dart.getMethods(iterable_matchers._OrderedEquals.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(iterable_matchers._OrderedEquals, L11);
  dart.setFieldSignature(iterable_matchers._OrderedEquals, () => ({
    __proto__: dart.getFields(iterable_matchers._OrderedEquals.__proto__),
    [_expected$2]: dart.finalFieldType(core.Iterable),
    [_matcher$3]: dart.finalFieldType(interfaces.Matcher)
  }));
  var _expectedValues = dart.privateName(iterable_matchers, "_expectedValues");
  var C23;
  var _allowUnmatchedValues = dart.privateName(iterable_matchers, "_allowUnmatchedValues");
  var _findPairing = dart.privateName(iterable_matchers, "_findPairing");
  var _test = dart.privateName(iterable_matchers, "_test");
  iterable_matchers._UnorderedMatches = class _UnorderedMatches extends iterable_matchers._IterableMatcher {
    [_test](values) {
      if (dart.notNull(this[_expected$2][$length]) > dart.notNull(values[$length])) {
        return "has too few elements (" + dart.str(values[$length]) + " < " + dart.str(this[_expected$2][$length]) + ")";
      } else if (!dart.test(this[_allowUnmatchedValues]) && dart.notNull(this[_expected$2][$length]) < dart.notNull(values[$length])) {
        return "has too many elements (" + dart.str(values[$length]) + " > " + dart.str(this[_expected$2][$length]) + ")";
      }
      let edges = ListOfListLOfintL().generate(values[$length], dart.fn(_ => JSArrayOfintL().of([]), intLToListLOfintL()), {growable: false});
      for (let v = 0; v < dart.notNull(values[$length]); v = v + 1) {
        for (let m = 0; m < dart.notNull(this[_expected$2][$length]); m = m + 1) {
          if (dart.test(this[_expected$2][$_get](m).matches(values[$_get](v), new _js_helper.LinkedMap.new()))) {
            edges[$_get](v)[$add](m);
          }
        }
      }
      let matched = ListOfintL().new(this[_expected$2][$length]);
      for (let valueIndex = 0; valueIndex < dart.notNull(values[$length]); valueIndex = valueIndex + 1) {
        this[_findPairing](edges, valueIndex, matched);
      }
      for (let matcherIndex = 0; matcherIndex < dart.notNull(this[_expected$2][$length]); matcherIndex = matcherIndex + 1) {
        if (matched[$_get](matcherIndex) == null) {
          let description = new description$.StringDescription.new().add("has no match for ").addDescriptionOf(this[_expected$2][$_get](matcherIndex)).add(" at index " + dart.str(matcherIndex));
          let remainingUnmatched = matched[$sublist](matcherIndex + 1)[$where](dart.fn(m => m == null, intLToboolL()))[$length];
          return remainingUnmatched === 0 ? dart.toString(description) : dart.toString(description.add(" along with " + dart.str(remainingUnmatched) + " other unmatched"));
        }
      }
      return null;
    }
    typedMatches(item, mismatchState) {
      core.Iterable.as(item);
      return this[_test](item[$toList]()) == null;
    }
    describe(description) {
      return description.add("matches ").addAll("[", ", ", "]", this[_expected$2]).add(" unordered");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.Iterable.as(item);
      return mismatchDescription.add(this[_test](item[$toList]()));
    }
    [_findPairing](edges, valueIndex, matched, reserved = null) {
      reserved == null ? reserved = LinkedHashSetOfintL().new() : null;
      let possiblePairings = edges[$_get](valueIndex)[$where](dart.fn(m => !dart.test(reserved.contains(m)), intLToboolL()));
      for (let matcherIndex of possiblePairings) {
        reserved.add(matcherIndex);
        let previouslyMatched = matched[$_get](matcherIndex);
        if (previouslyMatched == null || dart.test(this[_findPairing](edges, matched[$_get](matcherIndex), matched, reserved))) {
          matched[$_set](matcherIndex, valueIndex);
          return true;
        }
      }
      return false;
    }
  };
  (iterable_matchers._UnorderedMatches.new = function(expected, opts) {
    let t5;
    let allowUnmatchedValues = opts && 'allowUnmatchedValues' in opts ? opts.allowUnmatchedValues : null;
    this[_expected$2] = expected[$map](interfaces.Matcher, C0 || CT.C0)[$toList]();
    this[_allowUnmatchedValues] = (t5 = allowUnmatchedValues, t5 == null ? false : t5);
    iterable_matchers._UnorderedMatches.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._UnorderedMatches.prototype;
  dart.addTypeTests(iterable_matchers._UnorderedMatches);
  dart.addTypeCaches(iterable_matchers._UnorderedMatches);
  dart.setMethodSignature(iterable_matchers._UnorderedMatches, () => ({
    __proto__: dart.getMethods(iterable_matchers._UnorderedMatches.__proto__),
    [_test]: dart.fnType(core.String, [core.List]),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map]),
    [_findPairing]: dart.fnType(core.bool, [core.List$(core.List$(core.int)), core.int, core.List$(core.int)], [core.Set$(core.int)])
  }));
  dart.setLibraryUri(iterable_matchers._UnorderedMatches, L11);
  dart.setFieldSignature(iterable_matchers._UnorderedMatches, () => ({
    __proto__: dart.getFields(iterable_matchers._UnorderedMatches.__proto__),
    [_expected$2]: dart.finalFieldType(core.List$(interfaces.Matcher)),
    [_allowUnmatchedValues]: dart.finalFieldType(core.bool)
  }));
  iterable_matchers._UnorderedEquals = class _UnorderedEquals extends iterable_matchers._UnorderedMatches {
    describe(description) {
      return description.add("equals ").addDescriptionOf(this[_expectedValues]).add(" unordered");
    }
  };
  (iterable_matchers._UnorderedEquals.new = function(expected) {
    this[_expectedValues] = expected[$toList]();
    iterable_matchers._UnorderedEquals.__proto__.new.call(this, expected[$map](dart.dynamic, C23 || CT.C23));
    ;
  }).prototype = iterable_matchers._UnorderedEquals.prototype;
  dart.addTypeTests(iterable_matchers._UnorderedEquals);
  dart.addTypeCaches(iterable_matchers._UnorderedEquals);
  dart.setLibraryUri(iterable_matchers._UnorderedEquals, L11);
  dart.setFieldSignature(iterable_matchers._UnorderedEquals, () => ({
    __proto__: dart.getFields(iterable_matchers._UnorderedEquals.__proto__),
    [_expectedValues]: dart.finalFieldType(core.List)
  }));
  var _comparator$ = dart.privateName(iterable_matchers, "_comparator");
  var _description$0 = dart.privateName(iterable_matchers, "_description");
  const _is__PairwiseCompare_default = Symbol('_is__PairwiseCompare_default');
  iterable_matchers._PairwiseCompare$ = dart.generic((S, T) => {
    class _PairwiseCompare extends iterable_matchers._IterableMatcher {
      typedMatches(item, matchState) {
        let t6, t5;
        core.Iterable.as(item);
        if (item[$length] != this[_expected$2][$length]) return false;
        let iterator = item[$iterator];
        let i = 0;
        for (let e of this[_expected$2]) {
          iterator.moveNext();
          if (!dart.test((t5 = e, t6 = T.as(iterator.current), this[_comparator$](t5, t6)))) {
            util.addStateInfo(matchState, new _js_helper.LinkedMap.from(["index", i, "expected", e, "actual", iterator.current]));
            return false;
          }
          i = i + 1;
        }
        return true;
      }
      describe(description) {
        return description.add("pairwise " + dart.str(this[_description$0]) + " ").addDescriptionOf(this[_expected$2]);
      }
      describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
        core.Iterable.as(item);
        if (item[$length] != this[_expected$2][$length]) {
          return mismatchDescription.add("has length " + dart.str(item[$length]) + " instead of " + dart.str(this[_expected$2][$length]));
        } else {
          return mismatchDescription.add("has ").addDescriptionOf(matchState[$_get]("actual")).add(" which is not " + dart.str(this[_description$0]) + " ").addDescriptionOf(matchState[$_get]("expected")).add(" at index " + dart.str(matchState[$_get]("index")));
        }
      }
    }
    (_PairwiseCompare.new = function(_expected, _comparator, _description) {
      this[_expected$2] = _expected;
      this[_comparator$] = _comparator;
      this[_description$0] = _description;
      _PairwiseCompare.__proto__.new.call(this);
      ;
    }).prototype = _PairwiseCompare.prototype;
    dart.addTypeTests(_PairwiseCompare);
    _PairwiseCompare.prototype[_is__PairwiseCompare_default] = true;
    dart.addTypeCaches(_PairwiseCompare);
    dart.setMethodSignature(_PairwiseCompare, () => ({
      __proto__: dart.getMethods(_PairwiseCompare.__proto__),
      typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
    }));
    dart.setLibraryUri(_PairwiseCompare, L11);
    dart.setFieldSignature(_PairwiseCompare, () => ({
      __proto__: dart.getFields(_PairwiseCompare.__proto__),
      [_expected$2]: dart.finalFieldType(core.Iterable$(S)),
      [_comparator$]: dart.finalFieldType(dart.fnType(core.bool, [S, T])),
      [_description$0]: dart.finalFieldType(core.String)
    }));
    return _PairwiseCompare;
  });
  iterable_matchers._PairwiseCompare = iterable_matchers._PairwiseCompare$();
  dart.addTypeTests(iterable_matchers._PairwiseCompare, _is__PairwiseCompare_default);
  var _unwrappedExpected = dart.privateName(iterable_matchers, "_unwrappedExpected");
  iterable_matchers._ContainsAll = class _ContainsAll extends iterable_matchers._UnorderedMatches {
    describe(description) {
      return description.add("contains all of ").addDescriptionOf(this[_unwrappedExpected]);
    }
  };
  (iterable_matchers._ContainsAll.new = function(expected) {
    this[_unwrappedExpected] = expected;
    iterable_matchers._ContainsAll.__proto__.new.call(this, expected[$map](dart.dynamic, C0 || CT.C0), {allowUnmatchedValues: true});
    ;
  }).prototype = iterable_matchers._ContainsAll.prototype;
  dart.addTypeTests(iterable_matchers._ContainsAll);
  dart.addTypeCaches(iterable_matchers._ContainsAll);
  dart.setLibraryUri(iterable_matchers._ContainsAll, L11);
  dart.setFieldSignature(iterable_matchers._ContainsAll, () => ({
    __proto__: dart.getFields(iterable_matchers._ContainsAll.__proto__),
    [_unwrappedExpected]: dart.finalFieldType(core.Iterable)
  }));
  iterable_matchers._ContainsAllInOrder = class _ContainsAllInOrder extends iterable_matchers._IterableMatcher {
    [_test](item, matchState) {
      let matchers = this[_expected$2][$map](interfaces.Matcher, C0 || CT.C0)[$toList]();
      let matcherIndex = 0;
      for (let value of item) {
        if (dart.test(matchers[$_get](matcherIndex).matches(value, matchState))) matcherIndex = matcherIndex + 1;
        if (matcherIndex === matchers[$length]) return null;
      }
      return dart.toString(new description$.StringDescription.new().add("did not find a value matching ").addDescriptionOf(matchers[$_get](matcherIndex)).add(" following expected prior values"));
    }
    typedMatches(item, matchState) {
      core.Iterable.as(item);
      return this[_test](item, matchState) == null;
    }
    describe(description) {
      return description.add("contains in order(").addDescriptionOf(this[_expected$2]).add(")");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.Iterable.as(item);
      return mismatchDescription.add(this[_test](item, matchState));
    }
  };
  (iterable_matchers._ContainsAllInOrder.new = function(_expected) {
    this[_expected$2] = _expected;
    iterable_matchers._ContainsAllInOrder.__proto__.new.call(this);
    ;
  }).prototype = iterable_matchers._ContainsAllInOrder.prototype;
  dart.addTypeTests(iterable_matchers._ContainsAllInOrder);
  dart.addTypeCaches(iterable_matchers._ContainsAllInOrder);
  dart.setMethodSignature(iterable_matchers._ContainsAllInOrder, () => ({
    __proto__: dart.getMethods(iterable_matchers._ContainsAllInOrder.__proto__),
    [_test]: dart.fnType(core.String, [core.Iterable, core.Map]),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(iterable_matchers._ContainsAllInOrder, L11);
  dart.setFieldSignature(iterable_matchers._ContainsAllInOrder, () => ({
    __proto__: dart.getFields(iterable_matchers._ContainsAllInOrder.__proto__),
    [_expected$2]: dart.finalFieldType(core.Iterable)
  }));
  iterable_matchers.everyElement = function everyElement(matcher) {
    return new iterable_matchers._EveryElement.new(util.wrapMatcher(matcher));
  };
  iterable_matchers.anyElement = function anyElement(matcher) {
    return new iterable_matchers._AnyElement.new(util.wrapMatcher(matcher));
  };
  iterable_matchers.orderedEquals = function orderedEquals(expected) {
    return new iterable_matchers._OrderedEquals.new(expected);
  };
  iterable_matchers.unorderedEquals = function unorderedEquals(expected) {
    return new iterable_matchers._UnorderedEquals.new(expected);
  };
  iterable_matchers.unorderedMatches = function unorderedMatches(expected) {
    return new iterable_matchers._UnorderedMatches.new(expected);
  };
  iterable_matchers.pairwiseCompare = function pairwiseCompare(S, T, expected, comparator, description) {
    return new (iterable_matchers._PairwiseCompare$(S, T)).new(expected, comparator, description);
  };
  iterable_matchers.containsAll = function containsAll(expected) {
    return new iterable_matchers._ContainsAll.new(expected);
  };
  iterable_matchers.containsAllInOrder = function containsAllInOrder(expected) {
    return new iterable_matchers._ContainsAllInOrder.new(expected);
  };
  var _value$3 = dart.privateName(string_matchers, "_value");
  var _matchValue = dart.privateName(string_matchers, "_matchValue");
  string_matchers._IsEqualIgnoringCase = class _IsEqualIgnoringCase extends feature_matcher.FeatureMatcher$(core.String) {
    typedMatches(item, matchState) {
      core.String.as(item);
      return this[_matchValue] === item[$toLowerCase]();
    }
    describe(description) {
      return description.addDescriptionOf(this[_value$3]).add(" ignoring case");
    }
  };
  (string_matchers._IsEqualIgnoringCase.new = function(value) {
    this[_value$3] = value;
    this[_matchValue] = value[$toLowerCase]();
    string_matchers._IsEqualIgnoringCase.__proto__.new.call(this);
    ;
  }).prototype = string_matchers._IsEqualIgnoringCase.prototype;
  dart.addTypeTests(string_matchers._IsEqualIgnoringCase);
  dart.addTypeCaches(string_matchers._IsEqualIgnoringCase);
  dart.setMethodSignature(string_matchers._IsEqualIgnoringCase, () => ({
    __proto__: dart.getMethods(string_matchers._IsEqualIgnoringCase.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._IsEqualIgnoringCase, L12);
  dart.setFieldSignature(string_matchers._IsEqualIgnoringCase, () => ({
    __proto__: dart.getFields(string_matchers._IsEqualIgnoringCase.__proto__),
    [_value$3]: dart.finalFieldType(core.String),
    [_matchValue]: dart.finalFieldType(core.String)
  }));
  string_matchers._IsEqualIgnoringWhitespace = class _IsEqualIgnoringWhitespace extends feature_matcher.FeatureMatcher$(core.String) {
    typedMatches(item, matchState) {
      core.String.as(item);
      return this[_matchValue] == string_matchers.collapseWhitespace(item);
    }
    describe(description) {
      return description.addDescriptionOf(this[_matchValue]).add(" ignoring whitespace");
    }
    describeTypedMismatch(item, mismatchDescription, matchState, verbose) {
      core.String.as(item);
      return mismatchDescription.add("is ").addDescriptionOf(string_matchers.collapseWhitespace(item)).add(" with whitespace compressed");
    }
  };
  (string_matchers._IsEqualIgnoringWhitespace.new = function(value) {
    this[_value$3] = value;
    this[_matchValue] = string_matchers.collapseWhitespace(value);
    string_matchers._IsEqualIgnoringWhitespace.__proto__.new.call(this);
    ;
  }).prototype = string_matchers._IsEqualIgnoringWhitespace.prototype;
  dart.addTypeTests(string_matchers._IsEqualIgnoringWhitespace);
  dart.addTypeCaches(string_matchers._IsEqualIgnoringWhitespace);
  dart.setMethodSignature(string_matchers._IsEqualIgnoringWhitespace, () => ({
    __proto__: dart.getMethods(string_matchers._IsEqualIgnoringWhitespace.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._IsEqualIgnoringWhitespace, L12);
  dart.setFieldSignature(string_matchers._IsEqualIgnoringWhitespace, () => ({
    __proto__: dart.getFields(string_matchers._IsEqualIgnoringWhitespace.__proto__),
    [_value$3]: dart.finalFieldType(core.String),
    [_matchValue]: dart.finalFieldType(core.String)
  }));
  var _prefix = dart.privateName(string_matchers, "_prefix");
  var _prefix$ = dart.privateName(string_matchers, "_StringStartsWith._prefix");
  string_matchers._StringStartsWith = class _StringStartsWith extends feature_matcher.FeatureMatcher$(core.String) {
    get [_prefix]() {
      return this[_prefix$];
    }
    set [_prefix](value) {
      super[_prefix] = value;
    }
    typedMatches(item, matchState) {
      core.String.as(item);
      return item[$startsWith](this[_prefix]);
    }
    describe(description) {
      return description.add("a string starting with ").addDescriptionOf(this[_prefix]);
    }
  };
  (string_matchers._StringStartsWith.new = function(_prefix) {
    this[_prefix$] = _prefix;
    string_matchers._StringStartsWith.__proto__.new.call(this);
    ;
  }).prototype = string_matchers._StringStartsWith.prototype;
  dart.addTypeTests(string_matchers._StringStartsWith);
  dart.addTypeCaches(string_matchers._StringStartsWith);
  dart.setMethodSignature(string_matchers._StringStartsWith, () => ({
    __proto__: dart.getMethods(string_matchers._StringStartsWith.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._StringStartsWith, L12);
  dart.setFieldSignature(string_matchers._StringStartsWith, () => ({
    __proto__: dart.getFields(string_matchers._StringStartsWith.__proto__),
    [_prefix]: dart.finalFieldType(core.String)
  }));
  var _suffix = dart.privateName(string_matchers, "_suffix");
  var _suffix$ = dart.privateName(string_matchers, "_StringEndsWith._suffix");
  string_matchers._StringEndsWith = class _StringEndsWith extends feature_matcher.FeatureMatcher$(core.String) {
    get [_suffix]() {
      return this[_suffix$];
    }
    set [_suffix](value) {
      super[_suffix] = value;
    }
    typedMatches(item, matchState) {
      core.String.as(item);
      return item[$endsWith](this[_suffix]);
    }
    describe(description) {
      return description.add("a string ending with ").addDescriptionOf(this[_suffix]);
    }
  };
  (string_matchers._StringEndsWith.new = function(_suffix) {
    this[_suffix$] = _suffix;
    string_matchers._StringEndsWith.__proto__.new.call(this);
    ;
  }).prototype = string_matchers._StringEndsWith.prototype;
  dart.addTypeTests(string_matchers._StringEndsWith);
  dart.addTypeCaches(string_matchers._StringEndsWith);
  dart.setMethodSignature(string_matchers._StringEndsWith, () => ({
    __proto__: dart.getMethods(string_matchers._StringEndsWith.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._StringEndsWith, L12);
  dart.setFieldSignature(string_matchers._StringEndsWith, () => ({
    __proto__: dart.getFields(string_matchers._StringEndsWith.__proto__),
    [_suffix]: dart.finalFieldType(core.String)
  }));
  var _substrings = dart.privateName(string_matchers, "_substrings");
  var _substrings$ = dart.privateName(string_matchers, "_StringContainsInOrder._substrings");
  string_matchers._StringContainsInOrder = class _StringContainsInOrder extends feature_matcher.FeatureMatcher$(core.String) {
    get [_substrings]() {
      return this[_substrings$];
    }
    set [_substrings](value) {
      super[_substrings] = value;
    }
    typedMatches(item, matchState) {
      core.String.as(item);
      let fromIndex = 0;
      for (let s of this[_substrings]) {
        fromIndex = item[$indexOf](s, fromIndex);
        if (fromIndex < 0) return false;
      }
      return true;
    }
    describe(description) {
      return description.addAll("a string containing ", ", ", " in order", this[_substrings]);
    }
  };
  (string_matchers._StringContainsInOrder.new = function(_substrings) {
    this[_substrings$] = _substrings;
    string_matchers._StringContainsInOrder.__proto__.new.call(this);
    ;
  }).prototype = string_matchers._StringContainsInOrder.prototype;
  dart.addTypeTests(string_matchers._StringContainsInOrder);
  dart.addTypeCaches(string_matchers._StringContainsInOrder);
  dart.setMethodSignature(string_matchers._StringContainsInOrder, () => ({
    __proto__: dart.getMethods(string_matchers._StringContainsInOrder.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._StringContainsInOrder, L12);
  dart.setFieldSignature(string_matchers._StringContainsInOrder, () => ({
    __proto__: dart.getFields(string_matchers._StringContainsInOrder.__proto__),
    [_substrings]: dart.finalFieldType(core.List$(core.String))
  }));
  var _regexp = dart.privateName(string_matchers, "_regexp");
  string_matchers._MatchesRegExp = class _MatchesRegExp extends feature_matcher.FeatureMatcher$(core.String) {
    typedMatches(item, matchState) {
      core.String.as(item);
      return this[_regexp].hasMatch(item);
    }
    describe(description) {
      return description.add("match '" + dart.str(this[_regexp].pattern) + "'");
    }
  };
  (string_matchers._MatchesRegExp.new = function(re) {
    this[_regexp] = null;
    string_matchers._MatchesRegExp.__proto__.new.call(this);
    if (typeof re == 'string') {
      this[_regexp] = core.RegExp.new(re);
    } else if (core.RegExp.is(re)) {
      this[_regexp] = re;
    } else {
      dart.throw(new core.ArgumentError.new("matches requires a regexp or string"));
    }
  }).prototype = string_matchers._MatchesRegExp.prototype;
  dart.addTypeTests(string_matchers._MatchesRegExp);
  dart.addTypeCaches(string_matchers._MatchesRegExp);
  dart.setMethodSignature(string_matchers._MatchesRegExp, () => ({
    __proto__: dart.getMethods(string_matchers._MatchesRegExp.__proto__),
    typedMatches: dart.fnType(core.bool, [core.Object, core.Map])
  }));
  dart.setLibraryUri(string_matchers._MatchesRegExp, L12);
  dart.setFieldSignature(string_matchers._MatchesRegExp, () => ({
    __proto__: dart.getFields(string_matchers._MatchesRegExp.__proto__),
    [_regexp]: dart.fieldType(core.RegExp)
  }));
  string_matchers.equalsIgnoringCase = function equalsIgnoringCase(value) {
    return new string_matchers._IsEqualIgnoringCase.new(value);
  };
  string_matchers.equalsIgnoringWhitespace = function equalsIgnoringWhitespace(value) {
    return new string_matchers._IsEqualIgnoringWhitespace.new(value);
  };
  string_matchers.startsWith = function startsWith(prefixString) {
    return new string_matchers._StringStartsWith.new(prefixString);
  };
  string_matchers.endsWith = function endsWith(suffixString) {
    return new string_matchers._StringEndsWith.new(suffixString);
  };
  string_matchers.stringContainsInOrder = function stringContainsInOrder(substrings) {
    return new string_matchers._StringContainsInOrder.new(substrings);
  };
  string_matchers.matches = function matches(re) {
    return new string_matchers._MatchesRegExp.new(re);
  };
  string_matchers.collapseWhitespace = function collapseWhitespace(string) {
    let result = new core.StringBuffer.new();
    let skipSpace = true;
    for (let i = 0; i < string.length; i = i + 1) {
      let character = string[$_get](i);
      if (dart.test(string_matchers._isWhitespace(character))) {
        if (!skipSpace) {
          result.write(" ");
          skipSpace = true;
        }
      } else {
        result.write(character);
        skipSpace = false;
      }
    }
    return result.toString()[$trim]();
  };
  string_matchers._isWhitespace = function _isWhitespace(ch) {
    return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
  };
  var _value$4 = dart.privateName(map_matchers, "_value");
  var _value$5 = dart.privateName(map_matchers, "_ContainsValue._value");
  map_matchers._ContainsValue = class _ContainsValue extends interfaces.Matcher {
    get [_value$4]() {
      return this[_value$5];
    }
    set [_value$4](value) {
      super[_value$4] = value;
    }
    matches(item, matchState) {
      return core.bool.as(dart.dsend(item, 'containsValue', [this[_value$4]]));
    }
    describe(description) {
      return description.add("contains value ").addDescriptionOf(this[_value$4]);
    }
  };
  (map_matchers._ContainsValue.new = function(_value) {
    this[_value$5] = _value;
    map_matchers._ContainsValue.__proto__.new.call(this);
    ;
  }).prototype = map_matchers._ContainsValue.prototype;
  dart.addTypeTests(map_matchers._ContainsValue);
  dart.addTypeCaches(map_matchers._ContainsValue);
  dart.setMethodSignature(map_matchers._ContainsValue, () => ({
    __proto__: dart.getMethods(map_matchers._ContainsValue.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(map_matchers._ContainsValue, L13);
  dart.setFieldSignature(map_matchers._ContainsValue, () => ({
    __proto__: dart.getFields(map_matchers._ContainsValue.__proto__),
    [_value$4]: dart.finalFieldType(core.Object)
  }));
  var _key = dart.privateName(map_matchers, "_key");
  var _valueMatcher = dart.privateName(map_matchers, "_valueMatcher");
  var _key$ = dart.privateName(map_matchers, "_ContainsMapping._key");
  var _valueMatcher$ = dart.privateName(map_matchers, "_ContainsMapping._valueMatcher");
  map_matchers._ContainsMapping = class _ContainsMapping extends interfaces.Matcher {
    get [_key]() {
      return this[_key$];
    }
    set [_key](value) {
      super[_key] = value;
    }
    get [_valueMatcher]() {
      return this[_valueMatcher$];
    }
    set [_valueMatcher](value) {
      super[_valueMatcher] = value;
    }
    matches(item, matchState) {
      return dart.dtest(dart.dsend(item, 'containsKey', [this[_key]])) && dart.test(this[_valueMatcher].matches(dart.dsend(item, '_get', [this[_key]]), matchState));
    }
    describe(description) {
      return description.add("contains pair ").addDescriptionOf(this[_key]).add(" => ").addDescriptionOf(this[_valueMatcher]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!dart.dtest(dart.dsend(item, 'containsKey', [this[_key]]))) {
        return mismatchDescription.add(" doesn't contain key ").addDescriptionOf(this[_key]);
      } else {
        mismatchDescription.add(" contains key ").addDescriptionOf(this[_key]).add(" but with value ");
        this[_valueMatcher].describeMismatch(dart.dsend(item, '_get', [this[_key]]), mismatchDescription, matchState, verbose);
        return mismatchDescription;
      }
    }
  };
  (map_matchers._ContainsMapping.new = function(_key, _valueMatcher) {
    this[_key$] = _key;
    this[_valueMatcher$] = _valueMatcher;
    map_matchers._ContainsMapping.__proto__.new.call(this);
    ;
  }).prototype = map_matchers._ContainsMapping.prototype;
  dart.addTypeTests(map_matchers._ContainsMapping);
  dart.addTypeCaches(map_matchers._ContainsMapping);
  dart.setMethodSignature(map_matchers._ContainsMapping, () => ({
    __proto__: dart.getMethods(map_matchers._ContainsMapping.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(interfaces.Description, [interfaces.Description])
  }));
  dart.setLibraryUri(map_matchers._ContainsMapping, L13);
  dart.setFieldSignature(map_matchers._ContainsMapping, () => ({
    __proto__: dart.getFields(map_matchers._ContainsMapping.__proto__),
    [_key]: dart.finalFieldType(core.Object),
    [_valueMatcher]: dart.finalFieldType(interfaces.Matcher)
  }));
  map_matchers.containsValue = function containsValue(value) {
    return new map_matchers._ContainsValue.new(value);
  };
  map_matchers.containsPair = function containsPair(key, value) {
    return new map_matchers._ContainsMapping.new(key, util.wrapMatcher(value));
  };
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  dart.defineLazy(error_matchers, {
    /*error_matchers.isArgumentError*/get isArgumentError() {
      return C24 || CT.C24;
    },
    /*error_matchers.isCastError*/get isCastError() {
      return C25 || CT.C25;
    },
    /*error_matchers.isConcurrentModificationError*/get isConcurrentModificationError() {
      return C26 || CT.C26;
    },
    /*error_matchers.isCyclicInitializationError*/get isCyclicInitializationError() {
      return C27 || CT.C27;
    },
    /*error_matchers.isException*/get isException() {
      return C28 || CT.C28;
    },
    /*error_matchers.isFormatException*/get isFormatException() {
      return C29 || CT.C29;
    },
    /*error_matchers.isNoSuchMethodError*/get isNoSuchMethodError() {
      return C30 || CT.C30;
    },
    /*error_matchers.isNullThrownError*/get isNullThrownError() {
      return C31 || CT.C31;
    },
    /*error_matchers.isRangeError*/get isRangeError() {
      return C32 || CT.C32;
    },
    /*error_matchers.isStateError*/get isStateError() {
      return C33 || CT.C33;
    },
    /*error_matchers.isUnimplementedError*/get isUnimplementedError() {
      return C34 || CT.C34;
    },
    /*error_matchers.isUnsupportedError*/get isUnsupportedError() {
      return C35 || CT.C35;
    }
  }, true);
  dart.trackLibraries("packages/matcher/src/core_matchers", {
    "package:matcher/src/operator_matchers.dart": operator_matchers,
    "package:matcher/src/util.dart": util,
    "package:matcher/src/interfaces.dart": interfaces,
    "package:matcher/src/equals_matcher.dart": equals_matcher,
    "package:matcher/src/feature_matcher.dart": feature_matcher,
    "package:matcher/src/type_matcher.dart": type_matcher,
    "package:matcher/src/having_matcher.dart": having_matcher,
    "package:matcher/src/custom_matcher.dart": custom_matcher,
    "package:matcher/src/description.dart": description$,
    "package:matcher/src/pretty_print.dart": pretty_print,
    "package:matcher/src/core_matchers.dart": core_matchers,
    "package:matcher/src/order_matchers.dart": order_matchers,
    "package:matcher/src/numeric_matchers.dart": numeric_matchers,
    "package:matcher/src/iterable_matchers.dart": iterable_matchers,
    "package:matcher/src/string_matchers.dart": string_matchers,
    "package:matcher/src/map_matchers.dart": map_matchers,
    "package:matcher/src/error_matchers.dart": error_matchers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interfaces.dart","operator_matchers.dart","util.dart","type_matcher.dart","feature_matcher.dart","equals_matcher.dart","having_matcher.dart","custom_matcher.dart","description.dart","pretty_print.dart","core_matchers.dart","order_matchers.dart","numeric_matchers.dart","iterable_matchers.dart","string_matchers.dart","map_matchers.dart","error_matchers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAwD+B,MAAkB,qBACnC,YAAiB;AACzB,gCAAmB;;;;;EAxBR;;;;;;;;;;ICvBD;;;;;;YAKD,MAAU;AAAe,wBAAC,AAAS,uBAAQ,IAAI,EAAE,UAAU;IAAC;aAGxC;AAC7B,YAAA,AAAY,AAAY,YAAb,KAAK,yBAAyB;IAAS;;;IAPpC;AAAZ;;EAAqB;;;;;;;;;;;;;;;;IAqBP;;;;;;YAKP,MAAU;AACrB,eAAS,UAAW;AAClB,uBAAK,AAAQ,OAAD,SAAS,IAAI,EAAE,UAAU;AACW,UAA9C,kBAAa,UAAU,EAAE,+BAAC,WAAW,OAAO;AAC5C,gBAAO;;;AAGX,YAAO;IACT;qBAII,MAAkB,qBAAyB,YAAiB;AAC1D,oBAAU,AAAU,UAAA,QAAC;AAEmC,MADpD,WAAR,OAAO,uBACH,IAAI,EAAE,mBAAmB,EAAE,AAAU,UAAA,QAAC,UAAU,OAAO;AAC3D,YAAO,oBAAmB;IAC5B;aAGiC;AAC7B,YAAA,AAAY,YAAD,QAAQ,KAAK,SAAS,KAAK;IAAU;;;IAxBlC;AAAZ;;EAAsB;;;;;;;;;;;;;;;IA0CR;;;;;;YAKP,MAAU;AACrB,eAAS,UAAW;AAClB,sBAAI,AAAQ,OAAD,SAAS,IAAI,EAAE,UAAU;AAClC,gBAAO;;;AAGX,YAAO;IACT;aAGiC;AAC7B,YAAA,AAAY,YAAD,QAAQ,KAAK,QAAQ,KAAK;IAAU;;;IAdjC;AAAZ;;EAAsB;;;;;;;;;;;;;;2CAxEhB;AAAY,4CAAO,iBAAY,OAAO;EAAE;2CAqBxC,MAAO,aAAM,aAAM,aAAM,aAAM,aAAM;AACjD,UAAO,kCAAO,4BAAU,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;EAClE;2CA0Cc,MAAO,aAAM,aAAM,aAAM,aAAM,aAAM;AACjD,UAAO,kCAAO,4BAAU,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;EAClE;mDAsBwB,MAAM,MAAM,MAAM,MAAM,MAAM,MAAM;AACjD;AACT,QAAS,aAAL,IAAI;AACN,UAAI,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI;AAEG,QADb,WAAM,2BAAa,AAAC,mDAChB;;AAGK,MAAX,OAAO,IAAI;;AAE8D,MAAzE,OAAO,AAA2C,CAA1C,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,UAAQ,QAAC,KAAM,AAAE,CAAD,IAAI;;AAGtE,UAAO,AAAK,AAAiB,KAAlB;EACb;4CC1FsB,YAAgB;AAChC,qBAAiB,8BAAK,UAAU;AAClB,IAAlB,AAAW,UAAD;AACsB,IAAhC,AAAU,UAAA,QAAC,SAAW,UAAU;AACP,IAAzB,AAAW,UAAD,UAAQ,MAAM;EAC1B;0CAOoB;AAClB,QAAM,sBAAF,CAAC;AACH,YAAO,EAAC;UACH,KAAM,qBAAF,CAAC;AAEV,YAAO,sCAAU,CAAC;UACb,KAAM,mBAAF,CAAC;AAIV,YAAO,uCAAU,QAAC,KAAM,aAAc,WAAb,CAAC,GAAa,CAAC;;AAExC,YAAO,uBAAO,CAAC;;EAEnB;gCAMqB;AACc,IAAjC,MAAM,AAAI,GAAD,cAAY,MAAM;AAC3B,UAAO,AAAI,IAAD,oBAAkB,oBAAe,QAAC;AACtC,mBAAS,AAAU,uBAAC,AAAK,KAAA,MAAC;AAC9B,UAAI,MAAM,IAAI,MAAM,MAAO,OAAM;AACjC,YAAO,qBAAe,AAAK,KAAA,MAAC;;EAEhC;gDAG6B;AACvB,eAAO,AAAM,AAAM,KAAP;AAChB,UAAO,AAAM,SAAE,AAAK,AAAkB,AAAc,IAAjC,iBAAe,8BAA0B,GAAG;EACjE;;;;MA5DM,eAAU;;;MAWV,kBAAa;YAAG,iBAClB,AAAuE,qCAA7C,AAAW,AAAK,AAAoB,mEAAO;;;;;;EFEzE;;;;;;;;;;;MG6Be;;;;;;aA4BE,SAA0B,aAAoB;AACzD,6CAAc,MAAM,WAAW,EAAE,OAAO,EAAE,OAAO;MAAC;eAGrB;;AAC3B,oBAAa,wBAAN,OAAS,2BAAc;AAClC,cAAO,AAAY,YAAD,KAAK,AAAuB,4BAAP,IAAI;MAC7C;cAGoB,MAAU;AAAe,cAAK,MAAL,IAAI;MAAK;;gCA9BvC;MACH,eAEF,IAAI;AANR;;IAMQ;;;;;;;;;;;;;;;;;;;;;;cCnDD,MAAU;AACnB,cAAgC,WAA1B,cAAQ,IAAI,EAAE,UAAU,gBAAK,uBAAa,IAAI,GAAE,UAAU;MAAC;uBAMjE,MAAkB,qBAAyB,YAAiB;AAC9D,YAAS,KAAL,IAAI;AACN,gBAAO,4BACH,IAAI,EAAE,mBAAmB,EAAE,UAAU,EAAE,OAAO;;AAGpD,cAAa,gBAAS,AAAoB,mBAAD,KAAK;MAChD;4BAEoC,MAAkB,qBAC1C,YAAiB;aADO;AAEhC,kCAAmB;;;;AArBjB;;IAAgB;;;;;;;;;;;;;;iBCqBG,MAAU;qBAAV;AAAyB,YAAA,AAAO,kBAAG,IAAI;;aAG/B;AAC7B,YAAA,AAAY,YAAD,kBAAkB;IAAO;0BAGC,MACzB,qBAAyB,YAAiB;qBADjB;AAEnC,iBAAO;AACgB,MAA3B,AAAK,IAAD,OAAO;AACP,wBAAc,YAAO,IAAI;AACzB,yBAAe,YAAO;AACtB,sBAAY,AAAY,AAAO,WAAR,UAAU,AAAa,YAAD,UAC3C,AAAY,WAAD,UACX,AAAa,YAAD;AACd,kBAAQ;AACZ,aAAO,AAAM,KAAD,GAAG,SAAS,EAAE,QAAA,AAAK,KAAA;AAC7B,YAAI,AAAa,YAAD,cAAY,KAAK,MAAK,AAAY,WAAD,cAAY,KAAK;AAChE;;;AAGJ,UAAI,AAAM,KAAD,KAAI,SAAS;AACpB,YAAI,AAAa,AAAO,YAAR,UAAU,AAAY,WAAD;AAEY,UAD/C,AAAK,IAAD,OAAM,AAAC,4DACP;AACkD,UAAtD,mDAAe,IAAI,EAAE,WAAW,EAAE,AAAa,YAAD;;AAGK,UADnD,AAAK,IAAD,OAAM,AAAC,0DACP;AACkD,UAAtD,mDAAe,IAAI,EAAE,YAAY,EAAE,AAAY,WAAD;;;AAGtB,QAA1B,AAAK,IAAD,OAAO;AAC6B,QAAxC,kDAAc,IAAI,EAAE,YAAY,EAAE,KAAK;AACE,QAAzC,mDAAe,IAAI,EAAE,YAAY,EAAE,KAAK;AACd,QAA1B,AAAK,IAAD,OAAO;AAC4B,QAAvC,kDAAc,IAAI,EAAE,WAAW,EAAE,KAAK;AACE,QAAxC,mDAAe,IAAI,EAAE,WAAW,EAAE,KAAK;AACb,QAA1B,AAAK,IAAD,OAAO;AACX,iBAAS,IAAI,AAAM,KAAD,GAAG,KAAK,KAAK,KAAK,EAAE,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AAC7B,UAAf,AAAK,IAAD,OAAO;;AAE4B,QAAzC,AAAK,IAAD,OAAO,AAA6B,mCAAN,KAAK;;AAGzC,YAAO,AAAoB,oBAAD,KAAK,AAAK,IAAD;IACrC;yBAEuC,MAAa,GAAO;AACzD,UAAU,aAAN,KAAK,IAAG;AACQ,QAAlB,AAAK,IAAD,OAAO;AAC+B,QAA1C,AAAK,IAAD,OAAO,AAAE,CAAD,aAAiB,aAAN,KAAK,IAAG,IAAI,KAAK;;AAEP,QAAjC,AAAK,IAAD,OAAO,AAAE,CAAD,aAAW,GAAG,KAAK;;IAEnC;0BAEwC,MAAa,GAAO;AAC1D,UAAU,AAAK,aAAX,KAAK,IAAG,KAAK,AAAE,CAAD;AACc,QAA9B,AAAK,IAAD,OAAO,AAAE,CAAD,aAAW,KAAK;;AAEc,QAA1C,AAAK,IAAD,OAAO,AAAE,CAAD,aAAW,KAAK,EAAQ,aAAN,KAAK,IAAG;AACpB,QAAlB,AAAK,IAAD,OAAO;;IAEf;;;IApE0B;AAA1B;;EAAiC;;;;;;;;;;;;;;;;;;;wBA8EO,UAAiB,QACnC,SAAa,OAAc;AAC/C,UAAW,iBAAP,MAAM;AACJ,+BAAmB,AAAS,QAAD;AAC3B,6BAAiB,AAAO,MAAD;AAC3B,iBAAS,QAAQ,IAAI,QAAA,AAAK,KAAA;AAEpB,6BAAe,AAAiB,gBAAD;AAC/B,2BAAa,AAAe,cAAD;AAG/B,yBAAK,YAAY,gBAAK,UAAU,GAAE,MAAO;AAGrC,4BAAiC,SAAjB,QAAQ,mBAAE,KAAK;AACnC,yBAAK,YAAY,GAAE,MAAO,wBAAC,wBAAwB,WAAW;AAC9D,yBAAK,UAAU,GAAE,MAAO,wBAAC,yBAAyB,WAAW;AAGzD,mBAAK,AAAO,OAAA,CAAC,AAAiB,gBAAD,UAAU,AAAe,cAAD,UACrD,WAAW,EAAE,KAAK;AACtB,cAAI,EAAE,IAAI,MAAM,MAAO,GAAE;;;AAG3B,cAAO,wBAAC,mBAAmB,QAAQ;;IAEvC;mBAE8B,UAAiB,QACzB,SAAa,OAAc;AAC/C,UAAW,iBAAP,MAAM;AACJ,oBAAQ,AAAO,MAAD;AAElB,iBAAS,kBAAmB,SAAQ;AAClC,wBAAI,AAAM,KAAD,SAAO,QAAC,iBACb,AAAO,AAAkD,OAAlD,CAAC,eAAe,EAAE,aAAa,EAAE,QAAQ,EAAE,KAAK,KAAK;AAC9D,kBAAO,wBAAC,AAAmC,+BAAhB,eAAe,GAAG,QAAQ;;;AAIzD,YAAiB,aAAb,AAAM,KAAD,0BAAU,AAAS,QAAD;AACzB,gBAAO,wBAAC,wBAAwB,QAAQ;cACnC,KAAiB,aAAb,AAAM,KAAD,0BAAU,AAAS,QAAD;AAChC,gBAAO,wBAAC,yBAAyB,QAAQ;;AAEzC,gBAAO;;;AAGT,cAAO,wBAAC,mBAAmB,QAAQ;;IAEvC;sBAGW,UAAiB,QAAe,UAAc;AAEvD,UAAa,sBAAT,QAAQ;AACN,yBAAa;AACjB,sBAAI,AAAS,QAAD,SAAS,MAAM,EAAE,UAAU,IAAG,MAAO;AAE7C,0BAAc;AACY,QAA9B,AAAS,QAAD,UAAU,WAAW;AAC7B,cAAO,wBAAC,AAA6B,6BAAZ,WAAW,GAAG,QAAQ;;AAG/C;AACE,cAAa,YAAT,QAAQ,EAAI,MAAM,GAAE,MAAO;;cACxB;AAEP,gBAAO,wBAAC,AAAe,yBAAH,CAAC,UAAI,QAAQ;;;AAIrC,UAAU,aAAN,KAAK,iBAAG,eAAQ,MAAO,wBAAC,kCAAkC,QAAQ;AAGtE,UAAI,AAAM,KAAD,KAAI,KAAY,aAAP,gBAAS;AACzB,YAAa,YAAT,QAAQ;AACV,gBAAO,oBACH,QAAQ,EAAE,MAAM,YAAE,wBAAuB,aAAN,KAAK,IAAG,GAAG,QAAQ;cACrD,KAAa,iBAAT,QAAQ;AACjB,gBAAO,yBACH,QAAQ,EAAE,MAAM,YAAE,wBAAuB,aAAN,KAAK,IAAG,GAAG,QAAQ;cACrD,KAAa,YAAT,QAAQ;AACjB,eAAW,YAAP,MAAM,GAAU,MAAO,wBAAC,kBAAkB,QAAQ;AAClD,oBAAa,YAAP,MAAM;AACZ,oBACC,AAAS,AAAO,QAAR,aAAW,AAAI,GAAD,YAAW,KAAK;AAC3C,mBAAS,MAAO,AAAS,SAAD;AACtB,2BAAK,AAAI,GAAD,eAAa,GAAG;AACtB,oBAAO,wBAAI,AAA8B,GAA3B,GAAC,kCAAqB,GAAG,SAAI,QAAQ;;;AAIvD,mBAAS,MAAO,AAAI,IAAD;AACjB,2BAAK,AAAS,QAAD,eAAa,GAAG;AAC3B,oBAAO,wBAAI,AAA6B,GAA1B,GAAC,iCAAoB,GAAG,SAAI,QAAQ;;;AAItD,mBAAS,MAAO,AAAS,SAAD;AAClB,qBAAK,sBACL,AAAQ,QAAA,QAAC,GAAG,GAAG,AAAG,GAAA,QAAC,GAAG,GAAsB,SAAjB,QAAQ,oBAAG,GAAG,UAAW,aAAN,KAAK,IAAG;AAC1D,gBAAI,EAAE,IAAI,MAAM,MAAO,GAAE;;AAG3B,gBAAO;;;AAIP,wBAAc;AAIlB,UAAU,aAAN,KAAK,IAAG;AAKqB,QAJ/B,AACK,AACA,AACA,AACA,WAJM,KACF,yBACa,MAAM,MACnB,iCACa,QAAQ;AAC9B,cAAO,wBAAC,AAAY,WAAD,aAAa,QAAQ;;AAI1C,YAAO,wBAAC,IAAI,QAAQ;IACtB;aAEc,UAAU,QAAY;AAC9B,eAAK,sBAAgB,QAAQ,EAAE,MAAM,EAAE,IAAI;AAC/C,UAAI,AAAG,EAAD,IAAI,MAAM,MAAO;AAChB;AACP,UAAI,AAAE,AAAI,EAAJ,QAAC;AACL,YAAI,AAAE,AAAI,EAAJ,QAAC;AACmC,UAAxC,SAAwC,SAA5B,AAAE,EAAA,QAAC,MAAG,2BAAe,AAAE,EAAA,QAAC;;AAEtB,UAAd,SAAS,AAAE,EAAA,QAAC;;;AAGH,QAAX,SAAS;;AAGiC,MAA5C,kBAAa,UAAU,EAAE,+BAAC,UAAU,MAAM;AAC1C,YAAO,OAAM;IACf;YAGa,MAAU;AACnB,YAAA,AAAoC,cAA7B,kBAAW,IAAI,EAAE,UAAU,KAAK;IAAI;aAGd;AAC7B,YAAA,AAAY,YAAD,kBAAkB;IAAU;qBAIvC,MAAkB,qBAAyB,YAAiB;;AAC1D,oBAAwC,KAAV,eAArB,AAAU,UAAA,QAAC,kBAAU,OAAa;AAK/C,UAAI,AAAO,MAAD,cAAuC,aAA3B,AAAoB,mBAAD,WAAU;AACI,QAArD,AAAoB,AAAW,mBAAZ,KAAK,wBAAwB,IAAI;;AAErB,QAA/B,AAAoB,mBAAD,KAAK,MAAM;;AAEhC,YAAO,oBAAmB;IAC5B;;8CAzKkB,WAAgB;IAAhB;IAAwC,eAAE,KAAK;AAAjE;;EAAiE;;;;;;;;;;;;;;;;;;0CAtFpD,UAAe;AAAiB,UAAS,QAAT,QAAQ,eACjD,4CAAqB,QAAQ,IAC7B,oCAAa,QAAQ,EAAE,KAAK;EAAC;;AFLR;EAAgB;sDAwFjB;AACtB,UAAK,AAAW,eAAhB,IAAI,eAAuB,gCAAmB;EAAG;;MAT/C,8BAAiB;YAAG,iBAAO;;;;;;;;;;;;aGtEhB,SAA0B,aAAoB;AACzD,6CAAc,eAAS,WAAW,EAAE,OAAO,EAAE,OAAO,EAAE;MAAkB;cAG/D,MAAU;AACrB,iBAAS,UAAoB,AAAU,yBAAT,6BAAoB;AAChD,yBAAK,AAAQ,OAAD,SAAS,IAAI,EAAE,UAAU;AACW,YAA9C,kBAAa,UAAU,EAAE,+BAAC,WAAW,OAAO;AAC5C,kBAAO;;;AAGX,cAAO;MACT;uBAII,MAAkB,qBAAyB,YAAiB;AAC1D,sBAAgC,sBAAtB,AAAU,UAAA,QAAC;AAE0C,QADnE,AAAQ,OAAD,kBACH,IAAI,EAAE,mBAAmB,EAAsB,YAApB,AAAU,UAAA,QAAC,WAAiB,OAAO;AAClE,cAAO,oBAAmB;MAC5B;eAGiC;AAAgB,cAAA,AAC5C,AACA,AACA,AACA,YAJuD,KACnD,qBACa,mBACb,iBACG,IAAI,SAAS,IAAI;MAAkB;;;;;kCAtClB,QAAe,aACjC,SAA0B,SACL;;MAClB,gBAAE,MAAM;MACE,gCAAoB,qCAClC,aAAgB,KAAT,QAAQ,QAAR,OAAY,4CACnB,SAAI,iCAAoB,WAAW,EAAE,OAAO,EAAE,OAAO;;IAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBCoB3C;AAAW,mBAAM;;YAG1B,MAAU;AACrB;AACM,gBAAI,oBAAe,IAAI;AAC3B,sBAAI,AAAS,yBAAQ,CAAC,EAAE,UAAU,IAAG,MAAO;AACG,QAA/C,kBAAa,UAAU,EAAE,+BAAC,kBAAkB,CAAC;;YACtC;YAAW;AAWhB,QAVF,kBAAa,UAAU,EAAE,+BACvB,oBAA8B,cAAV,SAAS,GAC7B,gBAOK,cAPiB,AACjB,qBAD0B,KAAK,aAE5B,QAAC,SACG,AAAM,AAAQ,AACoB,KAD7B,aAAY,UACjB,AAAM,AAAQ,KAAT,aAAY,oBACjB,AAAM,AAAQ,KAAT,aAAY,qCACd;;AAInB,YAAO;IACT;aAGiC;AAC7B,YAAA,AAAY,AAAyB,AAAS,YAAnC,KAAK,gCAAyB,sBAAsB;IAAS;qBAIxE,MAAkB,qBAAyB,YAAiB;AAC9D,UAAI,AAAU,UAAA,QAAC,uBAAuB;AAKW,QAJ/C,AACK,AACA,AACA,AACA,mBAJc,KACV,2BACa,AAAU,UAAA,QAAC,yBACxB,UAC2B,cAA3B,AAAU,UAAA,QAAC;AACpB,cAAO,oBAAmB;;AAOuB,MAJnD,AACK,AACA,AACA,AACA,mBAJc,KACV,YACA,yBACA,iCACa,AAAU,UAAA,QAAC;AAC7B,6BAAmB;AAGiB,MADxC,AAAS,kCAAiB,AAAU,UAAA,QAAC,mBAAmB,gBAAgB,EAChD,YAApB,AAAU,UAAA,QAAC,WAAiB,OAAO;AAEvC,UAA4B,aAAxB,AAAiB,gBAAD,WAAU;AACuC,QAAnE,AAAoB,AAAe,mBAAhB,KAAK,eAAe,AAAiB,gBAAD;;AAEzD,YAAO,oBAAmB;IAC5B;;+CA1DmB,qBAA0B,cAAc;IAAxC;IAA0B;IAC9B,mBAAE,iBAAY,OAAO;AADpC;;EACqC;;;;;;;;;;;;;;;;;;;qBDyBH;;;AAAW,aAAS,MAAM;cAAf,AAAQ;MAAQ;;qCAJrC,MAAW,UAAU;MAAV;AAC7B,gDAAM,AAAU,eAAP,IAAI,UAAK,AAAS,eAAN,IAAI,SAAI,OAAO;;IAAC;;;;;;;;;;;;;;;;;;;;AEzCzB,YAAA,AAAK;IAAM;;AAIR,YAAK,eAAL;IAAe;QAIb;AACL,MAAhB,AAAK,iBAAM,IAAI;AACf,YAAO;IACT;YAI2B;AACb,MAAZ,AAAK;AACL,YAAO,UAAI,IAAI;IACjB;qBAO6B;AAC3B,UAAU,sBAAN,KAAK;AACa,QAApB,AAAM,KAAD,UAAU;;AAEyC,QAAxD,SAAI,yBAAY,KAAK,kBAAiB,cAAc;;AAEtD,YAAO;IACT;WAOW,OAAc,WAAkB,KAAc;AACnD,qBAAW;AACL,MAAV,SAAI,KAAK;AACT,eAAS,OAAQ,KAAI;AACnB,YAAI,QAAQ;AACI,UAAd,SAAI,SAAS;;AAEO,QAAtB,sBAAiB,IAAI;AACN,QAAf,WAAW;;AAEL,MAAR,SAAI,GAAG;AACP,YAAO;IACT;;iDAxD0B;IAHP,aAAO;AAIR,IAAhB,AAAK,iBAAM,IAAI;EACjB;;;;;;;;;;;;;;;;;;;;;;kDCCiB;QAAa;QAAmB;AACjD,aAAO,aAAa,QAAY,QAAY,MAAW;AAErD,UAAW,sBAAP,MAAM;AACJ,0BAAc;AACU,QAA5B,AAAO,MAAD,UAAU,WAAW;AAC3B,cAAO,AAAgB,gBAAb,WAAW;;AAIvB,oBAAI,AAAK,IAAD,UAAU,MAAM,IAAG,MAAO;AACP,MAA3B,OAAO,AAAK,IAAD,OAAO,+BAAC,MAAM;AACzB,eAAO,GAAG;AAAU,cAAA,AAAY,aAAA,CAAC,KAAK,EAAS,aAAP,MAAM,IAAG,GAAG,IAAI,EAAE;;;AAE1D,UAAW,iBAAP,MAAM;AAEJ,mBAAc,aAAP,MAAM,IAAW,KAAuB,aAAlB,uBAAU,MAAM,KAAI;AAGjD,sBAAU,AAAO,AAAQ,MAAT,oBAAK,EAAE;AAC3B,YAAI,QAAQ,IAAI,QAAuB,aAAf,AAAQ,OAAD,0BAAU,QAAQ;AACY,UAA3D,AAAQ,OAAD,gBAAuB,aAAT,QAAQ,IAAG,GAAG,AAAQ,OAAD,WAAS,uBAAC;;AAKlD,yBAAe,AAA4B,IAAxB,kBAAG,AAAQ,OAAD,QAAM,SAAM;AAC7C,aAAK,AAAc,aAAD,IAAI,QACd,AAAW,AAAO,AAAS,UAAjB,uBAAU,MAAM,kBAAI,aAAa,OAC9C,AAAW,UAAD,YAAU;AACvB,gBAAO,WAAU;;AAInB,cAAS,AAAS,AAGC,AACV,AACW,KALP,wBACT,AAAQ,AAEL,OAFI,oBAAK,QAAC,UACgB,aAApB,qBAAe,aAAP,MAAM,IAAG,mBAAK,MAAM,+BAC7B,UACR,oBACA,qBAAQ,MAAM,KACd;YACC,KAAW,YAAP,MAAM;AAEX,sBAAU,AAAO,AAAK,AAEvB,MAFiB,2BAAU,QAAC,OACU,SAA7B,AAAE,EAAA,CAAC,GAAG,KAAE,gBAAI,AAAE,EAAA,CAAC,AAAM,MAAA,QAAC,GAAG;AAIrC,YAAI,QAAQ,IAAI,QAAuB,aAAf,AAAQ,OAAD,0BAAU,QAAQ;AACY,UAA3D,AAAQ,OAAD,gBAAuB,aAAT,QAAQ,IAAG,GAAG,AAAQ,OAAD,WAAS,uBAAC;;AAKlD,yBAAa,AAAyB,eAArB,AAAQ,OAAD,QAAM,SAAM;AACxC,aAAK,AAAc,aAAD,IAAI,QACd,AAAW,AAAO,AAAS,UAAjB,uBAAU,MAAM,kBAAI,aAAa,OAC9C,AAAW,UAAD,YAAU;AACvB,gBAAO,WAAU;;AAInB,cAAO,AAAM,AAGM,AACV,AACW,sBAJhB,AAAQ,AAEL,OAFI,oBAAK,QAAC,UACgB,aAApB,qBAAe,aAAP,MAAM,IAAG,mBAAK,MAAM,+BAC7B,UACR,oBACA,qBAAQ,MAAM,KACd;YACC,KAAW,OAAP,MAAM;AAEX,oBAAQ,AAAO,MAAD,SAAO;AACzB,cAAO,AAAI,AACwD,oBAA/D,AAAM,AAAmB,KAApB,wCAAyB,AAA+B,oBAAtB,qBAAe,aAAP,MAAM,IAAG,MAAG,QAC3D;;AAEA,oBAAe,AAAW,cAAlB,MAAM,eAAuB,MAAsB,aAAhB,qBAAQ,MAAM,KAAI;AAC7D,8BAAkB,AAAM,KAAD,cAAY;AAIvC,sBAAI,GAAG,GAAE,AAAkB,QAAV,AAAU,MAAP,KAAK;AAKzB,YAAW,OAAP,MAAM,gBACC,OAAP,MAAM,iBACC,iBAAP,MAAM,KACC,eAAP,MAAM,KACC,iBAAP,MAAM,KACC,gBAAP,MAAM,KACN,AAAO,MAAD,IAAI,QACV,eAAe;AACjB,gBAAO,MAAK;;AAEZ,gBAAoC,UAA1B,uBAAU,MAAM,KAAE,MAAE,KAAK;;;;;AAKzC,UAAO,AAAY,aAAA,CAAC,MAAM,EAAE,GAAW,gCAAI;EAC7C;0CAEmB;AAAW,UAAK,AAAoB,wBAAb,MAAM,EAAE,YAAU;EAAG;8CAI9C;AACf,QAAM,aAAF,CAAC,GAAU,MAAO;AACtB,QAAM,YAAF,CAAC,GAAS,MAAO;AACrB,QAAM,YAAF,CAAC,GAAS,MAAO;AACrB,QAAM,eAAF,CAAC,GAAY,MAAO;AACxB,UAAyB,UAAb,iBAAF,CAAC;EACb;sDAO4B;AAAW,UAAA,AAAe,aAAR,MAAM,eAAa,KAAK;EAAM;;YC1H7D,MAAU;AAAe,0BAAK,WAAL,IAAI;IAAQ;aAGjB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAQ;;;AANnE;;EAAQ;;;;;;;;;;YAgBD,MAAU;AAAe,0BAAK,WAAL,IAAI;IAAW;aAGpB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAY;;;AANvE;;EAAW;;;;;;;;;;YAkBJ,MAAU;AAAe,YAAA,AAAK,KAAD,IAAI;IAAI;aAEjB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAO;;;AAJlE;;EAAS;;;;;;;;;;YAUF,MAAU;AAAe,YAAA,AAAK,KAAD,IAAI;IAAI;aAEjB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAW;;;AAJtE;;EAAY;;;;;;;;;;YAgBL,MAAU;AAAe,YAAK,aAAL,IAAI,EAAI;IAAI;aAEjB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAO;;;AAJlE;;EAAS;;;;;;;;;;YAUF,MAAU;AAAe,YAAK,aAAL,IAAI,EAAI;IAAK;aAElB;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAQ;;;AAJnE;;EAAU;;;;;;;;;;iBAgBM,MAAU;kBAAV;AAClB,YAAW,AAAgB,qBAAN,IAAI,MAAK;IAAC;aAEF;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAM;;;AALjE;;EAAQ;;;;;;;;;iBAWQ,MAAU;kBAAV;AAClB,YAAW,AAAgB,qBAAN,IAAI,MAAK;IAAC;aAEF;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAU;;;AALrE;;EAAW;;;;;;;;;;;IAaJ;;;;;;YAGA,MAAU;AAAe,4BAAU,IAAI,EAAE;IAAU;aAG/B;AAC7B,YAAA,AAAY,AAAyB,YAA1B,KAAK,sCAAsC;IAAU;;;IAN/C;AAAf;;EAAyB;;;;;;;;;;;;;;YAelB,MAAU;AAAe;IAAI;aAET;AAAgB,YAAA,AAAY,YAAD,KAAK;IAAW;;;AAJtE;;EAAa;;;;;;;;;;;;;AAab;;IAAc;;;;;;;;;;iBAeO,GAAO;uBAAP;AACzB;AACK,QAAF,WAAD,CAAC;AACD,cAAO;;YACA;YAAG;AAC4C,QAAtD,kBAAa,UAAU,EAAE,+BAAC,aAAa,CAAC,EAAE,SAAS,CAAC;AACpD,cAAO;;IAEX;aAGiC;AAC7B,YAAA,AAAY,YAAD,KAAK;IAAkB;0BAGK,MAC3B,qBAAyB,YAAiB;uBADf;AAEkC,MAA3E,AAAoB,AAAc,mBAAf,KAAK,2BAA2B,AAAU,UAAA,QAAC;AAC9D,oBAAI,OAAO;AAC0D,QAAnE,AAAoB,AAAY,mBAAb,KAAK,YAAgC,cAApB,AAAU,UAAA,QAAC;;AAEjD,YAAO,oBAAmB;IAC5B;;;AAzBM;;EAAkB;;;;;;;;;;;IAuCV;;;;;;YAID,MAAU;AACrB;AAGE,uBAA8B,WAAd,WAAP,WAAL,IAAI,mBAAe,WAAL,IAAI,sBAAW;AAC/B,gBAAO,AAAS,0BAAa,WAAL,IAAI,aAAS,UAAU;;;YAE1C;AACP,cAAO;;AAEsC,MAA/C,WAAM,8BAAiB;IACzB;aAGiC;AAC7B,YAAA,AAAY,AAAiC,YAAlC,KAAK,8CAA8C;IAAS;qBAIvE,MAAkB,qBAAyB,YAAiB;AAC9D;AAGE,uBAA8B,WAAd,WAAP,WAAL,IAAI,mBAAe,WAAL,IAAI,sBAAW;AAC/B,gBAAO,AACF,AACA,oBAFqB,KACjB,mCACkB,WAAL,IAAI;;;YAErB;AACP,cAAO,AAAoB,oBAAD,KAAK;;AAEc,MAA/C,WAAM,8BAAiB;IACzB;;2CAnC0B;IAAqB,mBAAE,OAAO;AAAlD;;EAAkD;;;;;;;;;;;;;;;IAgD3C;;;;;;YAKA,MAAU;AACjB,qBAAW;AACf,UAAS,OAAL,IAAI;AACN,cAAgB,AAAW,iBAApB,QAAQ,KAAe,AAAK,IAAD,YAAU,QAAQ;YAC/C,KAAS,iBAAL,IAAI;AACb,YAAa,sBAAT,QAAQ;AACV,gBAAO,AAAK,KAAD,OAAK,QAAC,KAAM,AAAS,QAAD,SAAS,CAAC,EAAE,UAAU;;AAErD,gBAAO,AAAK,KAAD,YAAU;;YAElB,KAAS,YAAL,IAAI;AACb,cAAO,AAAK,KAAD,eAAa;;AAE1B,YAAO;IACT;aAGiC;AAC7B,YAAA,AAAY,AAAiB,YAAlB,KAAK,8BAA8B;IAAU;qBAIxD,MAAkB,qBAAyB,YAAiB;AAC9D,UAAS,OAAL,IAAI,gBAAmB,iBAAL,IAAI,KAAqB,YAAL,IAAI;AAC5C,cACK,wBAAiB,IAAI,EAAE,mBAAmB,EAAE,UAAU,EAAE,OAAO;;AAEpE,cAAO,AAAoB,oBAAD,KAAK;;IAEnC;;;IAhCqB;AAAf;;EAAyB;;;;;;;;;;;;;;;;;;;;MAmDlB;;;;;;MACU;;;;;;mBAKH,MAAU;;aAAV;AAAyB,aAAkB,IAAI;cAAtB,AAAiB;MAAM;eAGnC;AAC7B,cAAA,AAAY,AAAc,YAAf,KAAK,2BAA2B;MAAQ;;wBAPxC,SAAc;MAAd;MAAc;AAAvB;;IAAyC;;;;;;;;;;;;;;;;;;;;;;mBA6B3B,MAAU;;aAAV;AAAyB,aAAS,IAAI;cAAb,AAAQ;MAAM;eAG1B;AAC7B,cAAA,AAAY,YAAD,KAAK;MAAa;;+BAPjB,UAAe;MAAf;MAAe;AAA/B;;IAA4C;;;;;;;;;;;;;;;;;;qCApNjC;AAAa,2CAAU,QAAQ;EAAC;+CA8E3B;AAAY,4CAAW,iBAAY,OAAO;EAAE;6CAiD7C;AAAa,2CAAU,QAAQ;EAAC;qCA0CpC;AACX,QAAa,iBAAT,QAAQ;AACV,YAAO,0BAAI,QAAQ,EAAW,UAAT,QAAQ;UACxB,KAAa,OAAT,QAAQ;AACjB,YAAO,2BAAa,QAAQ,EAAW,UAAT,QAAQ;UACjC,KAAa,YAAT,QAAQ;AACjB,YAAO,0BAAI,QAAQ,EAAW,UAAT,QAAQ;;AAI2C,IAD1E,WAAoB,6BAChB,QAAQ,EAAE,YAAY;EAC5B;kDAsB0B,GACV;AACZ,kDAAW,CAAC,EAAE,WAAW;EAAC;;;;;;;;;;;;;;MA3ShB,qBAAO;;;MAaP,wBAAU;;;MAaV,oBAAM;;;MAGN,uBAAS;;;MAmBT,oBAAM;;;MAGN,qBAAO;;;MAmBP,mBAAK;;;MAGL,sBAAQ;;;MAoCR,sBAAQ;;;MAyBR,6BAAe;;;MAgCvB,mBAAK;;;MAGL,oBAAM;;;;;;;;;;;;;;;;;IC7HG;;;;;;IAGF;;;;;;IAGA;;;;;;IAGA;;;;;;IAGE;;;;;;IAGF;;;;;;YAQE,MAAU;AACrB,UAAS,YAAL,IAAI,EAAI;AACV,cAAO;YACF,gBAAS,WAAL,IAAI,QAAG;AAChB,cAAO;YACF,gBAAS,WAAL,IAAI,QAAG;AAChB,cAAO;;AAEP,cAAO;;IAEX;aAGiC;AAC/B,oBAAI;AACF,cAAO,AACF,AACA,AACA,YAHa,KACT,kCACA,sBACa;;AAEtB,cAAO,AAAY,YAAD,KAAK;;IAE3B;qBAII,MAAkB,qBAAyB,YAAiB;AAC5B,MAAlC,AAAoB,mBAAD,KAAK;AACxB,YAAO,eAAS,mBAAmB;IACrC;;kDAnC4B,QAAa,aAAkB,gBAClD,mBAAwB,wBACvB;IAFkB;IAAa;IAAkB;IAClD;IAAwB;IAEP,6BAAE,kBAAkB;AAHxC;;EAGwC;;;;;;;;;;;;;;;;;;oDAlE5B;AAChB,mDAAiB,KAAK,EAAE,OAAO,OAAO,MAAM;EAAuB;sEAI1C;AAAU,mDACnC,KAAK,EAAE,MAAM,OAAO,MAAM;EAAmC;8CAIhD;AACb,mDAAiB,KAAK,EAAE,OAAO,MAAM,OAAO;EAAoB;gEAI1C;AACtB,mDAAiB,KAAK,EAAE,MAAM,MAAM,OAAO;EAAgC;;;;;;;;MAGjE,qBAAM;;;MAIN,wBAAS;;;MAIT,yBAAU;;;MAIV,4BAAa;;;MAIb,yBAAU;;;MAIV,4BAAa;;;;;;;;;IChCf;;;;;;IAAQ;;;;;;iBAKA,MAAU;kBAAV;AACZ,iBAAY,aAAL,IAAI,iBAAG;AAClB,UAAI,AAAK,IAAD,GAAG,GAAG,AAAY,OAAL,CAAC,IAAI;AAC1B,YAAO,AAAK,KAAD,iBAAI;IACjB;aAGiC;AAAgB,YAAA,AAC5C,AACA,AACA,AACA,YAJuD,KACnD,4CACa,kBACb,yBACa;IAAO;0BAIzB,MAAkB,qBAAyB,YAAiB;kBAA5D;AACE,iBAAY,aAAL,IAAI,iBAAG;AAClB,UAAI,AAAK,IAAD,GAAG,GAAG,AAAY,OAAL,CAAC,IAAI;AAC1B,YAAO,AAAoB,AAAoB,oBAArB,KAAK,iCAAiC,IAAI;IACtE;;8CAtBsB,QAAa;IAAb;IAAa;AAA7B;;EAAoC;;;;;;;;;;;;;;;;;;;;;;IA6ChC;;;;;;IAAM;;;;;;IACL;;;;;;IAAgB;;;;;;iBAMT,OAAW;kBAAX;AAChB,UAAU,aAAN,KAAK,iBAAG,eAAc,aAAN,KAAK,iBAAG;AAC1B,cAAO;;AAET,UAAI,AAAM,KAAD,IAAI;AACX,cAAO;;AAET,UAAI,AAAM,KAAD,IAAI;AACX,cAAO;;AAGT,YAAa,AAAO,cAAb,KAAK,iBAAG,eAAc,aAAN,KAAK,iBAAG;IACjC;aAGiC;AAC7B,YAAA,AAAY,YAAD,KAAI,AAAC,+BACV,cAAI,kBAAI,wBAAiB,cAAc,eAAY,mBACnD,eAAK,kBAAI,yBAAkB,cAAc,eAAY;IAAG;;4CArBzD,MAAW,OAAY,gBAAqB;IAA5C;IAAW;IAAY;IAAqB;AAD/C;;EAC+D;;;;;;;;;;;;;;;8CAtDnD,OAAW;AAAU,+CAAW,KAAK,EAAE,KAAK;EAAC;gEAgCpC,KAAS;AAAS,6CAAS,GAAG,EAAE,IAAI,EAAE,MAAM;EAAK;gEAIjD,KAAS;AAClC,6CAAS,GAAG,EAAE,IAAI,EAAE,OAAO;EAAM;kEAIP,KAAS;AACnC,6CAAS,GAAG,EAAE,IAAI,EAAE,OAAO;EAAK;kEAIN,KAAS;AACnC,6CAAS,GAAG,EAAE,IAAI,EAAE,MAAM;EAAM;;;;AC0E5B;;EAAkB;;;;;iBAjHG,MAAU;uBAAV;AACrB,cAAI;AACR,eAAS,UAAW,KAAI;AACtB,uBAAK,AAAS,yBAAQ,OAAO,EAAE,UAAU;AACmB,UAA1D,kBAAa,UAAU,EAAE,+BAAC,SAAS,CAAC,EAAE,WAAW,OAAO;AACxD,gBAAO;;AAEN,QAAD,IAAF,AAAE,CAAC,GAAH;;AAEF,YAAO;IACT;aAGiC;AAC7B,YAAA,AAAY,AAAsB,AAA2B,YAAlD,KAAK,mCAAmC,sBAAc;IAAI;0BAIrE,MAAkB,qBAAyB,YAAiB;uBAA5D;AACF,UAAI,AAAU,UAAA,QAAC,YAAY;AACrB,oBAAQ,AAAU,UAAA,QAAC;AACnB,sBAAU,AAAU,UAAA,QAAC;AAIN,QAHnB,AACK,AACA,AACA,mBAHc,KACV,+BACa,OAAO,MACpB;AACL,6BAAiB;AAE4C,QADjE,AAAS,kCACL,OAAO,EAAE,cAAc,EAAsB,YAApB,AAAU,UAAA,QAAC,WAAiB,OAAO;AAChE,YAA0B,aAAtB,AAAe,cAAD,WAAU;AACwB,UAAlD,AAAoB,mBAAD,KAAK,AAAe,cAAD;;AAEG,UAAzC,AAAoB,mBAAD,KAAK;AACc,UAAtC,AAAS,0BAAS,mBAAmB;;AAEI,QAA3C,AAAoB,mBAAD,KAAK,AAAkB,wBAAN,KAAK;AACzC,cAAO,oBAAmB;;AAE5B,YACK,wBAAiB,IAAI,EAAE,mBAAmB,EAAE,UAAU,EAAE,OAAO;IACtE;;;IA3CmB;AAAnB;;EAA4B;;;;;;;;;;;;;iBAwDD,MAAU;uBAAV;AACvB,YAAA,AAAK,KAAD,OAAK,QAAC,KAAM,AAAS,yBAAQ,CAAC,EAAE,UAAU;IAAE;aAGnB;AAC7B,YAAA,AAAY,AAAqB,YAAtB,KAAK,kCAAkC;IAAS;;;IAR9C;AAAjB;;EAA0B;;;;;;;;;;;;;;iBAwBC,MAAU;uBAAV;AACvB,YAAA,AAAS,0BAAQ,IAAI,EAAE,UAAU;IAAC;aAGL;AAC7B,YAAA,AAAY,AAAe,AAA4B,YAA5C,KAAK,4BAA4B,uBAAe;IAAW;0BAG/B,MAC3B,qBAAyB,YAAiB;uBADf;AAEzC,YAAO,AAAS,mCACZ,IAAI,EAAE,mBAAmB,EAAE,UAAU,EAAE,OAAO;IACpD;;;IAfoB;IAAsB,mBAAE,sBAAO,SAAS,EAAE;AAA9D;;EAAgE;;;;;;;;;;;;;;;;;;;YA4D9C;AAEhB,UAAqB,aAAjB,AAAU,2CAAS,AAAO,MAAD;AAC3B,cAAO,AAA+D,qCAAtC,AAAO,MAAD,aAAQ,iBAAK,AAAU,8BAAO;YAC/D,gBAAK,gCAA0C,aAAjB,AAAU,2CAAS,AAAO,MAAD;AAC5D,cAAO,AAAgE,sCAAtC,AAAO,MAAD,aAAQ,iBAAK,AAAU,8BAAO;;AAGnE,kBAAa,6BAAS,AAAO,MAAD,WAAS,QAAC,KAAW,yDAAc;AACnE,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAO,MAAD,YAAS,IAAA,AAAC,CAAA;AAClC,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAU,6BAAQ,IAAA,AAAC,CAAA;AACrC,wBAAI,AAAS,AAAI,yBAAH,CAAC,UAAU,AAAM,MAAA,QAAC,CAAC,GAAG;AACnB,YAAf,AAAK,AAAI,KAAJ,QAAC,CAAC,QAAM,CAAC;;;;AAMhB,oBAAU,iBAAU,AAAU;AAClC,eAAS,aAAa,GAAG,AAAW,UAAD,gBAAG,AAAO,MAAD,YAAS,aAAA,AAAU,UAAA;AACrB,QAAxC,mBAAa,KAAK,EAAE,UAAU,EAAE,OAAO;;AAEzC,eAAS,eAAe,GACpB,AAAa,YAAD,gBAAG,AAAU,6BACzB,eAAA,AAAY,YAAA;AACd,YAAI,AAAO,AAAe,OAAf,QAAC,YAAY,KAAK;AACrB,4BAAc,AACf,AACA,AACA,6CAFI,sCACa,AAAS,yBAAC,YAAY,OACnC,AAAyB,wBAAb,YAAY;AAC3B,mCACF,AAAQ,AAA0B,AAAwB,OAAnD,WAAS,AAAa,YAAD,GAAG,WAAS,QAAC,KAAM,AAAE,CAAD,IAAI;AACxD,gBAAO,AAAmB,mBAAD,KAAI,IACX,cAAZ,WAAW,IAGR,cAFH,AACG,WADQ,KACJ,AAAiD,0BAAnC,kBAAkB;;;AAIjD,YAAO;IACT;iBAG2B,MAAU;uBAAV;AACvB,YAAA,AAAqB,aAAf,AAAK,IAAD,gBAAc;IAAI;aAGC;AAAgB,YAAA,AAC5C,AACA,AACA,YAHuD,KACnD,mBACG,KAAK,MAAM,KAAK,uBACnB;IAAa;0BAGY,MAAkB,qBACxC,YAAiB;uBADK;AAE9B,YAAA,AAAoB,oBAAD,KAAK,YAAM,AAAK,IAAD;IAAW;mBAQf,OAAW,YAAsB,SACrD;AACQ,MAApB,AAAS,QAAD,IAAC,OAAT,WAAkB,8BAAT;AACH,6BACF,AAAK,AAAa,KAAb,QAAC,UAAU,UAAQ,QAAC,KAAM,WAAC,AAAS,QAAD,UAAU,CAAC;AACvD,eAAW,eAAgB,iBAAgB;AACf,QAA1B,AAAS,QAAD,KAAK,YAAY;AACnB,gCAAoB,AAAO,OAAA,QAAC,YAAY;AAC9C,YAAI,AAAkB,iBAAD,IAAI,kBAGrB,mBAAa,KAAK,EAAE,AAAO,OAAA,QAAC,YAAY,GAAG,OAAO,EAAE,QAAQ;AAC5B,UAAlC,AAAO,OAAA,QAAC,YAAY,EAAI,UAAU;AAClC,gBAAO;;;AAGX,YAAO;IACT;;sDApF2B;;QAAgB;IAC3B,oBAAE,AAAS,AAAiB,QAAlB;IACE,+BAAuB,KAArB,oBAAoB,QAApB,OAAwB;AAFtD;;EAE2D;;;;;;;;;;;;;;;;aAzB1B;AAAgB,YAAA,AAC5C,AACA,AACA,YAHuD,KACnD,4BACa,2BACb;IAAa;;qDARI;IACJ,wBAAE,AAAS,QAAD;AAC1B,gEAAM,AAAS,QAAD;;EAAa;;;;;;;;;;;;;mBAoIN,MAAU;;yBAAV;AACzB,YAAI,AAAK,IAAD,aAAW,AAAU,4BAAQ,MAAO;AACxC,uBAAW,AAAK,IAAD;AACf,gBAAI;AACR,iBAAS,IAAK;AACO,UAAnB,AAAS,QAAD;AACR,+BAAiB,CAAC,OAAmB,KAAjB,AAAS,QAAD,WAAvB,AAAW;AAE8C,YAD5D,kBAAa,UAAU,EACnB,+BAAC,SAAS,CAAC,EAAE,YAAY,CAAC,EAAE,UAAU,AAAS,QAAD;AAClD,kBAAO;;AAEN,UAAH,IAAA,AAAC,CAAA;;AAEH,cAAO;MACT;eAGiC;AAC7B,cAAA,AAAY,AAA+B,YAAhC,KAAK,AAAyB,uBAAd,wBAAY,sBAAqB;MAAU;4BAG/B,MAC3B,qBAAyB,YAAiB;yBADf;AAEzC,YAAI,AAAK,IAAD,aAAW,AAAU;AAC3B,gBAAO,AACF,oBADqB,KACjB,AAA0D,yBAA5C,AAAK,IAAD,aAAQ,0BAAc,AAAU;;AAE3D,gBAAO,AACF,AACA,AACA,AACA,AACA,oBALqB,KACjB,yBACa,AAAU,UAAA,QAAC,eACxB,AAA8B,4BAAd,wBAAY,sBACf,AAAU,UAAA,QAAC,iBACxB,AAAkC,wBAArB,AAAU,UAAA,QAAC;;MAErC;;qCArCsB,WAAgB,aAAkB;MAAlC;MAAgB;MAAkB;AAAxD;;IAAqE;;;;;;;;;;;;;;;;;;;;;aAkEpC;AAC7B,YAAA,AAAY,AAAwB,YAAzB,KAAK,qCAAqC;IAAmB;;iDALtD;IACG,2BAAE,QAAQ;AAC7B,4DAAM,AAAS,QAAD,0DAAyC;;EAAK;;;;;;;;;YAqB5C,MAAU;AAC1B,qBAAW,AAAU,AAAiB;AACtC,yBAAe;AACnB,eAAS,QAAS,KAAI;AACpB,sBAAI,AAAQ,AAAe,QAAf,QAAC,YAAY,UAAU,KAAK,EAAE,UAAU,IAAG,AAAc,eAAd,AAAY,YAAA;AACnE,YAAI,AAAa,YAAD,KAAI,AAAS,QAAD,WAAS,MAAO;;AAE9C,YAIK,eAJE,AACF,AACA,AACA,6CAFI,mDACa,AAAQ,QAAA,QAAC,YAAY,OAClC;IAEX;iBAG2B,MAAU;uBAAV;AACvB,YAAA,AAAwB,aAAlB,IAAI,EAAE,UAAU,KAAK;IAAI;aAGF;AAAgB,YAAA,AAC5C,AACA,AACA,YAHuD,KACnD,uCACa,uBACb;IAAI;0BAG8B,MACvB,qBAAyB,YAAiB;uBADnB;AAEvC,YAAA,AAAoB,oBAAD,KAAK,YAAM,IAAI,EAAE,UAAU;IAAE;;;IA7B3B;AAAzB;;EAAmC;;;;;;;;;;;;;yDAjUhB;AAAY,mDAAc,iBAAY,OAAO;EAAE;qDAqDjD;AAAY,iDAAY,iBAAY,OAAO;EAAE;2DAoBjC;AAAa,oDAAe,QAAQ;EAAC;+DA6BnC;AAAa,sDAAiB,QAAQ;EAAC;iEA2BtC;AAAa,uDAAkB,QAAQ;EAAC;qEAmGtD,UAAe,YAA6B;AAC5D,+DAAiB,QAAQ,EAAE,UAAU,EAAE,WAAW;EAAC;uDAkE1B;AAAa,kDAAa,QAAQ;EAAC;qEAqB5B;AAAa,yDAAoB,QAAQ;EAAC;;;;iBCpTnD,MAAU;qBAAV;AACrB,YAAA,AAAY,uBAAG,AAAK,IAAD;IAAc;aAGJ;AAC7B,YAAA,AAAY,AAAyB,YAA1B,kBAAkB,oBAAY;IAAiB;;uDAVlC;IACf,iBAAE,KAAK;IACF,oBAAE,AAAM,KAAD;AAFzB;;EAEuC;;;;;;;;;;;;;;iBAwCd,MAAU;qBAAV;AACrB,YAAA,AAAY,sBAAG,mCAAmB,IAAI;IAAC;aAGV;AAC7B,YAAA,AAAY,AAA8B,YAA/B,kBAAkB,uBAAiB;IAAuB;0BAIrE,MAAkB,qBAAyB,YAAiB;qBAA5D;AACF,YAAO,AACF,AACA,AACA,oBAHqB,KACjB,wBACa,mCAAmB,IAAI,OACpC;IACX;;6DAnBkC;IACrB,iBAAE,KAAK;IACF,oBAAE,mCAAmB,KAAK;AAF5C;;EAE6C;;;;;;;;;;;;;;;;IAyBhC;;;;;;iBAKK,MAAU;qBAAV;AAAyB,YAAA,AAAK,KAAD,cAAY;IAAQ;aAGlC;AAC7B,YAAA,AAAY,AAA+B,YAAhC,KAAK,4CAA4C;IAAQ;;;IAP3C;AAAvB;;EAA+B;;;;;;;;;;;;;;;IAexB;;;;;;iBAKK,MAAU;qBAAV;AAAyB,YAAA,AAAK,KAAD,YAAU;IAAQ;aAGhC;AAC7B,YAAA,AAAY,AAA6B,YAA9B,KAAK,0CAA0C;IAAQ;;;IAP3C;AAArB;;EAA6B;;;;;;;;;;;;;;;IAoBhB;;;;;;iBAKD,MAAU;qBAAV;AACZ,sBAAY;AAChB,eAAS,IAAK;AAC0B,QAAtC,YAAY,AAAK,IAAD,WAAS,CAAC,EAAE,SAAS;AACrC,YAAI,AAAU,SAAD,GAAG,GAAG,MAAO;;AAE5B,YAAO;IACT;aAGiC;AAAgB,YAAA,AAAY,YAAD,QACxD,wBAAwB,MAAM,aAAa;IAAY;;;IAdzB;AAA5B;;EAAwC;;;;;;;;;;;;;;iBAsC5B,MAAU;qBAAV;AAAyB,YAAA,AAAQ,wBAAS,IAAI;IAAC;aAGhC;AAC7B,YAAA,AAAY,YAAD,KAAK,AAA4B,qBAAlB,AAAQ,yBAAQ;IAAG;;iDAflC;IAFR;AAEP;AACE,QAAO,OAAH,EAAE;AACgB,MAApB,gBAAU,gBAAO,EAAE;UACd,KAAO,eAAH,EAAE;AACC,MAAZ,gBAAU,EAAE;;AAE8C,MAA1D,WAAM,2BAAc;;EAExB;;;;;;;;;;;;mEAlJgC;AAAU,wDAAqB,KAAK;EAAC;+EAoC/B;AACpC,8DAA2B,KAAK;EAAC;mDA8BX;AAAiB,qDAAkB,YAAY;EAAC;+CAiBlD;AAAiB,mDAAgB,YAAY;EAAC;yEAqB3B;AACvC,0DAAuB,UAAU;EAAC;6CA2BtB;AAAO,kDAAe,EAAE;EAAC;mEAyBR;AAC3B,iBAAS;AACT,oBAAY;AAChB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,SAAS,IAAA,AAAC,CAAA;AAC9B,sBAAY,AAAM,MAAA,QAAC,CAAC;AACxB,oBAAI,8BAAc,SAAS;AACzB,aAAK,SAAS;AACK,UAAjB,AAAO,MAAD,OAAO;AACG,UAAhB,YAAY;;;AAGS,QAAvB,AAAO,MAAD,OAAO,SAAS;AACL,QAAjB,YAAY;;;AAGhB,UAAO,AAAO,AAAW,OAAZ;EACf;yDAE0B;AACtB,UAAA,AAAG,AAAmC,GAApC,KAAI,OAAO,AAAG,EAAD,KAAI,QAAQ,AAAG,EAAD,KAAI,QAAQ,AAAG,EAAD,KAAI;EAAI;;;;IC/KxC;;;;;;YAKA,MAAU;AAAe,0BAAK,WAAL,IAAI,oBAAe;IAAO;aAE/B;AAC7B,YAAA,AAAY,AAAuB,YAAxB,KAAK,oCAAoC;IAAO;;;IANrC;AAApB;;EAA2B;;;;;;;;;;;;;;;;;;IAcpB;;;;;;IACC;;;;;;YAKD,MAAU;AACnB,YAAuB,YAAlB,WAAL,IAAI,kBAAa,2BAAS,AAAc,4BAAY,WAAJ,IAAI,WAAC,cAAO,UAAU;IAAC;aAG1C;AAC/B,YAAO,AACF,AACA,AACA,AACA,YAJa,KACT,mCACa,gBACb,yBACa;IACxB;qBAII,MAAkB,qBAAyB,YAAiB;AAC9D,sBAAU,WAAL,IAAI,kBAAa;AACpB,cAAO,AACF,AACA,oBAFqB,KACjB,0CACa;;AAKM,QAH5B,AACK,AACA,AACA,mBAHc,KACV,mCACa,gBACb;AAEgD,QADzD,AAAc,qCACN,WAAJ,IAAI,WAAC,cAAO,mBAAmB,EAAE,UAAU,EAAE,OAAO;AACxD,cAAO,oBAAmB;;IAE9B;;gDA/B4B,MAAW;IAAX;IAAW;AAAjC;;EAA+C;;;;;;;;;;;;;;sDAtBjC;AAAU,+CAAe,KAAK;EAAC;oDAgBhC,KAAK;AAAU,iDAAiB,GAAG,EAAE,iBAAY,KAAK;EAAE;;;;;;;;;;;;;;MCjBvE,8BAAe;;;MAGf,0BAAW;;;MAGX,4CAA6B;;;MAI7B,0CAA2B;;;MAG3B,0BAAW;;;MAGX,gCAAiB;;;MAGjB,kCAAmB;;;MAGnB,gCAAiB;;;MAGjB,2BAAY;;;MAGZ,2BAAY;;;MAGZ,mCAAoB;;;MAGpB,iCAAkB","file":"core_matchers.ddc.js"}');
  // Exports:
  return {
    src__operator_matchers: operator_matchers,
    src__util: util,
    src__interfaces: interfaces,
    src__equals_matcher: equals_matcher,
    src__feature_matcher: feature_matcher,
    src__type_matcher: type_matcher,
    src__having_matcher: having_matcher,
    src__custom_matcher: custom_matcher,
    src__description: description$,
    src__pretty_print: pretty_print,
    src__core_matchers: core_matchers,
    src__order_matchers: order_matchers,
    src__numeric_matchers: numeric_matchers,
    src__iterable_matchers: iterable_matchers,
    src__string_matchers: string_matchers,
    src__map_matchers: map_matchers,
    src__error_matchers: error_matchers
  };
});

//# sourceMappingURL=core_matchers.ddc.js.map
