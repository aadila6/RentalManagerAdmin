define(['dart_sdk', 'packages/firebase_core/firebase_core', 'packages/flutter/src/gestures/arena', 'packages/plugin_platform_interface/plugin_platform_interface', 'packages/collection/src/comparators'], function(dart_sdk, packages__firebase_core__firebase_core, packages__flutter__src__gestures__arena, packages__plugin_platform_interface__plugin_platform_interface, packages__collection__src__comparators) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_app = packages__firebase_core__firebase_core.src__firebase_app;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const plugin_platform_interface = packages__plugin_platform_interface__plugin_platform_interface.plugin_platform_interface;
  const equality = packages__collection__src__comparators.src__equality;
  const method_channel_firestore = Object.create(dart.library);
  const maps = Object.create(dart.library);
  const firestore_message_codec = Object.create(dart.library);
  const method_channel_field_value = Object.create(dart.library);
  const cloud_firestore_platform_interface = Object.create(dart.library);
  const write_batch = Object.create(dart.library);
  const transaction = Object.create(dart.library);
  const query_snapshot = Object.create(dart.library);
  const query = Object.create(dart.library);
  const field_value_factory = Object.create(dart.library);
  const method_channel_field_value_factory = Object.create(dart.library);
  const field_value = Object.create(dart.library);
  const document_reference = Object.create(dart.library);
  const document_change = Object.create(dart.library);
  const collection_reference = Object.create(dart.library);
  const timestamp = Object.create(dart.library);
  const source$ = Object.create(dart.library);
  const snapshot_metadata = Object.create(dart.library);
  const geo_point = Object.create(dart.library);
  const field_path = Object.create(dart.library);
  const field_path_type = Object.create(dart.library);
  const document_snapshot = Object.create(dart.library);
  const blob = Object.create(dart.library);
  const method_channel_write_batch = Object.create(dart.library);
  const method_channel_transaction = Object.create(dart.library);
  const method_channel_query_snapshot = Object.create(dart.library);
  const method_channel_document_change = Object.create(dart.library);
  const method_channel_query = Object.create(dart.library);
  const source$0 = Object.create(dart.library);
  const method_channel_document_reference = Object.create(dart.library);
  const method_channel_collection_reference = Object.create(dart.library);
  const auto_id_generator = Object.create(dart.library);
  const $_get = dartx._get;
  const $split = dartx.split;
  const $contains = dartx.contains;
  const $_set = dartx._set;
  const $hashCode = dartx.hashCode;
  const $cast = dartx.cast;
  const $length = dartx.length;
  const $add = dartx.add;
  const $join = dartx.join;
  const $containsKey = dartx.containsKey;
  const $removeLast = dartx.removeLast;
  const $last = dartx.last;
  const $isEmpty = dartx.isEmpty;
  const $floor = dartx.floor;
  const $compareTo = dartx.compareTo;
  const $firstWhere = dartx.firstWhere;
  const $addAll = dartx.addAll;
  const $remove = dartx.remove;
  const $where = dartx.where;
  let MethodCallToFuture = () => (MethodCallToFuture = dart.constFn(dart.fnType(async.Future, [message_codec.MethodCall])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let StreamControllerOfQuerySnapshotPlatform = () => (StreamControllerOfQuerySnapshotPlatform = dart.constFn(async.StreamController$(query_snapshot.QuerySnapshotPlatform)))();
  let IdentityMapOfint$StreamControllerOfQuerySnapshotPlatform = () => (IdentityMapOfint$StreamControllerOfQuerySnapshotPlatform = dart.constFn(_js_helper.IdentityMap$(core.int, StreamControllerOfQuerySnapshotPlatform())))();
  let StreamControllerOfDocumentSnapshotPlatform = () => (StreamControllerOfDocumentSnapshotPlatform = dart.constFn(async.StreamController$(document_snapshot.DocumentSnapshotPlatform)))();
  let IdentityMapOfint$StreamControllerOfDocumentSnapshotPlatform = () => (IdentityMapOfint$StreamControllerOfDocumentSnapshotPlatform = dart.constFn(_js_helper.IdentityMap$(core.int, StreamControllerOfDocumentSnapshotPlatform())))();
  let TransactionPlatformToFuture = () => (TransactionPlatformToFuture = dart.constFn(dart.fnType(async.Future, [transaction.TransactionPlatform])))();
  let IdentityMapOfint$TransactionPlatformToFuture = () => (IdentityMapOfint$TransactionPlatformToFuture = dart.constFn(_js_helper.IdentityMap$(core.int, TransactionPlatformToFuture())))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let ListOfList = () => (ListOfList = dart.constFn(core.List$(core.List)))();
  let JSArrayOfList = () => (JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$bool = () => (IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))();
  let ListOfDocumentSnapshotPlatform = () => (ListOfDocumentSnapshotPlatform = dart.constFn(core.List$(document_snapshot.DocumentSnapshotPlatform)))();
  let intToDocumentSnapshotPlatform = () => (intToDocumentSnapshotPlatform = dart.constFn(dart.fnType(document_snapshot.DocumentSnapshotPlatform, [core.int])))();
  let ListOfDocumentChangePlatform = () => (ListOfDocumentChangePlatform = dart.constFn(core.List$(document_change.DocumentChangePlatform)))();
  let intToMethodChannelDocumentChange = () => (intToMethodChannelDocumentChange = dart.constFn(dart.fnType(method_channel_document_change.MethodChannelDocumentChange, [core.int])))();
  let DocumentChangeTypeTobool = () => (DocumentChangeTypeTobool = dart.constFn(dart.fnType(core.bool, [document_change.DocumentChangeType])))();
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let FutureOrOfint = () => (FutureOrOfint = dart.constFn(async.FutureOr$(core.int)))();
  let dynamicToFutureOrOfint = () => (dynamicToFutureOrOfint = dart.constFn(dart.fnType(FutureOrOfint(), [dart.dynamic])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let intToFutureOfNull = () => (intToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.int])))();
  let DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  let ListTobool = () => (ListTobool = dart.constFn(dart.fnType(core.bool, [core.List])))();
  let dynamicAndStringAnddynamicTovoid = () => (dynamicAndStringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.String, dart.dynamic])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 5000000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.arrayUnion",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.arrayRemove",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.delete",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.serverTimestamp",
        index: 3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.incrementDouble",
        index: 4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: method_channel_field_value.FieldValueType.prototype,
        [_name$]: "FieldValueType.incrementInteger",
        index: 5
      });
    },
    get C1() {
      return C1 = dart.constMap(method_channel_field_value.FieldValueType, core.int, [C2 || CT.C2, 132, C3 || CT.C3, 133, C4 || CT.C4, 134, C5 || CT.C5, 135, C6 || CT.C6, 137, C7 || CT.C7, 138]);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: field_path_type.FieldPathType.prototype,
        [_name$0]: "FieldPathType.documentId",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.constMap(field_path_type.FieldPathType, core.int, [C9 || CT.C9, 139]);
    },
    get C10() {
      return C10 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], method_channel_field_value.FieldValueType);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: equality.DefaultEquality.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C12 || CT.C12
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: source$.Source.prototype,
        [_name$1]: "Source.serverAndCache",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: document_change.DocumentChangeType.prototype,
        [_name$2]: "DocumentChangeType.added",
        index: 0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: document_change.DocumentChangeType.prototype,
        [_name$2]: "DocumentChangeType.modified",
        index: 1
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: document_change.DocumentChangeType.prototype,
        [_name$2]: "DocumentChangeType.removed",
        index: 2
      });
    },
    get C17() {
      return C17 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], document_change.DocumentChangeType);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: source$.Source.prototype,
        [_name$1]: "Source.server",
        index: 1
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: source$.Source.prototype,
        [_name$1]: "Source.cache",
        index: 2
      });
    },
    get C20() {
      return C20 = dart.constList([C13 || CT.C13, C18 || CT.C18, C19 || CT.C19], source$.Source);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: field_path.FieldPath.prototype,
        [FieldPath_type]: C9 || CT.C9
      });
    },
    get C22() {
      return C22 = dart.constList([C9 || CT.C9], field_path_type.FieldPathType);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: equality.ListEquality.prototype,
        [ListEquality__elementEquality]: C24 || CT.C24
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  const app$ = dart.privateName(cloud_firestore_platform_interface, "FirestorePlatform.app");
  cloud_firestore_platform_interface.FirestorePlatform = class FirestorePlatform extends plugin_platform_interface.PlatformInterface {
    get app() {
      return this[app$];
    }
    set app(value) {
      super.app = value;
    }
    static instanceFor(opts) {
      let app = opts && 'app' in opts ? opts.app : null;
      return cloud_firestore_platform_interface.FirestorePlatform.instance.withApp(app);
    }
    static get instance() {
      if (cloud_firestore_platform_interface.FirestorePlatform._instance == null) {
        cloud_firestore_platform_interface.FirestorePlatform._instance = new method_channel_firestore.MethodChannelFirestore.new();
      }
      return cloud_firestore_platform_interface.FirestorePlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, cloud_firestore_platform_interface.FirestorePlatform._token);
      cloud_firestore_platform_interface.FirestorePlatform._instance = instance;
    }
    withApp(app) {
      dart.throw(new core.UnimplementedError.new("withApp() not implemented"));
    }
    collection(path) {
      dart.throw(new core.UnimplementedError.new("collection() is not implemented"));
    }
    collectionGroup(path) {
      dart.throw(new core.UnimplementedError.new("collectionGroup() is not implemented"));
    }
    document(path) {
      dart.throw(new core.UnimplementedError.new("document() is not implemented"));
    }
    batch() {
      dart.throw(new core.UnimplementedError.new("batch() is not implemented"));
    }
    runTransaction(transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C0 || CT.C0;
      return async.async(MapOfString$dynamic(), function* runTransaction() {
        dart.throw(new core.UnimplementedError.new("runTransaction() is not implemented"));
      });
    }
    enablePersistence(enable) {
      return async.async(dart.void, function* enablePersistence() {
        dart.throw(new core.UnimplementedError.new("enablePersistence() is not implemented"));
      });
    }
    settings(opts) {
      let persistenceEnabled = opts && 'persistenceEnabled' in opts ? opts.persistenceEnabled : null;
      let host = opts && 'host' in opts ? opts.host : null;
      let sslEnabled = opts && 'sslEnabled' in opts ? opts.sslEnabled : null;
      let cacheSizeBytes = opts && 'cacheSizeBytes' in opts ? opts.cacheSizeBytes : null;
      return async.async(dart.void, function* settings() {
        dart.throw(new core.UnimplementedError.new("settings() is not implemented"));
      });
    }
    get hashCode() {
      return dart.hashCode(this.app.name);
    }
    _equals(o) {
      if (o == null) return false;
      return cloud_firestore_platform_interface.FirestorePlatform.is(o) && dart.equals(o.app, this.app);
    }
  };
  (cloud_firestore_platform_interface.FirestorePlatform.new = function(opts) {
    let t0;
    let app = opts && 'app' in opts ? opts.app : null;
    this[app$] = (t0 = app, t0 == null ? firebase_app.FirebaseApp.instance : t0);
    cloud_firestore_platform_interface.FirestorePlatform.__proto__.new.call(this, {token: cloud_firestore_platform_interface.FirestorePlatform._token});
    ;
  }).prototype = cloud_firestore_platform_interface.FirestorePlatform.prototype;
  dart.addTypeTests(cloud_firestore_platform_interface.FirestorePlatform);
  dart.setMethodSignature(cloud_firestore_platform_interface.FirestorePlatform, () => ({
    __proto__: dart.getMethods(cloud_firestore_platform_interface.FirestorePlatform.__proto__),
    withApp: dart.fnType(cloud_firestore_platform_interface.FirestorePlatform, [firebase_app.FirebaseApp]),
    collection: dart.fnType(collection_reference.CollectionReferencePlatform, [core.String]),
    collectionGroup: dart.fnType(query.QueryPlatform, [core.String]),
    document: dart.fnType(document_reference.DocumentReferencePlatform, [core.String]),
    batch: dart.fnType(write_batch.WriteBatchPlatform, []),
    runTransaction: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [dart.fnType(async.Future, [transaction.TransactionPlatform])], {timeout: core.Duration}, {}),
    enablePersistence: dart.fnType(async.Future$(dart.void), [core.bool]),
    settings: dart.fnType(async.Future$(dart.void), [], {cacheSizeBytes: core.int, host: core.String, persistenceEnabled: core.bool, sslEnabled: core.bool}, {})
  }));
  dart.setLibraryUri(cloud_firestore_platform_interface.FirestorePlatform, "package:cloud_firestore_platform_interface/cloud_firestore_platform_interface.dart");
  dart.setFieldSignature(cloud_firestore_platform_interface.FirestorePlatform, () => ({
    __proto__: dart.getFields(cloud_firestore_platform_interface.FirestorePlatform.__proto__),
    app: dart.finalFieldType(firebase_app.FirebaseApp)
  }));
  dart.defineExtensionMethods(cloud_firestore_platform_interface.FirestorePlatform, ['_equals']);
  dart.defineExtensionAccessors(cloud_firestore_platform_interface.FirestorePlatform, ['hashCode']);
  dart.defineLazy(cloud_firestore_platform_interface.FirestorePlatform, {
    /*cloud_firestore_platform_interface.FirestorePlatform._token*/get _token() {
      return new core.Object.new();
    },
    /*cloud_firestore_platform_interface.FirestorePlatform._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  method_channel_firestore.MethodChannelFirestore = class MethodChannelFirestore extends cloud_firestore_platform_interface.FirestorePlatform {
    withApp(app) {
      return new method_channel_firestore.MethodChannelFirestore.new({app: app});
    }
    collection(path) {
      if (!(path != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 89, 12, "path != null");
      return new method_channel_collection_reference.MethodChannelCollectionReference.new(this, path[$split]("/"));
    }
    collectionGroup(path) {
      if (!(path != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 95, 12, "path != null");
      if (!!path[$contains]("/")) dart.assertFailed("Collection IDs must not contain '/'.", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 96, 12, "!path.contains(\"/\")");
      return new method_channel_query.MethodChannelQuery.new({firestore: this, isCollectionGroup: true, pathComponents: path[$split]("/")});
    }
    document(path) {
      if (!(path != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 106, 12, "path != null");
      return new method_channel_document_reference.MethodChannelDocumentReference.new(this, path[$split]("/"));
    }
    batch() {
      return new method_channel_write_batch.MethodChannelWriteBatch.new(this);
    }
    runTransaction(transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C0 || CT.C0;
      return async.async(MapOfString$dynamic(), (function* runTransaction() {
        let t0, t0$;
        if (!(dart.notNull(timeout.inMilliseconds) > 0)) dart.assertFailed("Transaction timeout must be more than 0 milliseconds", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 118, 12, "timeout.inMilliseconds > 0");
        let transactionId = (t0 = method_channel_firestore.MethodChannelFirestore._transactionHandlerId, method_channel_firestore.MethodChannelFirestore._transactionHandlerId = dart.notNull(t0) + 1, t0);
        method_channel_firestore.MethodChannelFirestore._transactionHandlers[$_set](transactionId, transactionHandler);
        let result = (yield method_channel_firestore.MethodChannelFirestore.channel.invokeMapMethod(core.String, dart.dynamic, "Firestore#runTransaction", new (IdentityMapOfString$dynamic()).from(["app", this.app.name, "transactionId", transactionId, "transactionTimeout", timeout.inMilliseconds])));
        t0$ = result;
        return t0$ == null ? new (IdentityMapOfString$dynamic()).new() : t0$;
      }).bind(this));
    }
    enablePersistence(enable) {
      return async.async(dart.void, (function* enablePersistence() {
        if (!(enable != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart", 134, 12, "enable != null");
        yield method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "Firestore#enablePersistence", new (IdentityMapOfString$dynamic()).from(["app", this.app.name, "enable", enable]));
      }).bind(this));
    }
    settings(opts) {
      let persistenceEnabled = opts && 'persistenceEnabled' in opts ? opts.persistenceEnabled : null;
      let host = opts && 'host' in opts ? opts.host : null;
      let sslEnabled = opts && 'sslEnabled' in opts ? opts.sslEnabled : null;
      let cacheSizeBytes = opts && 'cacheSizeBytes' in opts ? opts.cacheSizeBytes : null;
      return async.async(dart.void, (function* settings() {
        yield method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "Firestore#settings", new (IdentityMapOfString$dynamic()).from(["app", this.app.name, "persistenceEnabled", persistenceEnabled, "host", host, "sslEnabled", sslEnabled, "cacheSizeBytes", cacheSizeBytes]));
      }).bind(this));
    }
  };
  (method_channel_firestore.MethodChannelFirestore.new = function(opts) {
    let t0;
    let app = opts && 'app' in opts ? opts.app : null;
    method_channel_firestore.MethodChannelFirestore.__proto__.new.call(this, {app: (t0 = app, t0 == null ? firebase_app.FirebaseApp.instance : t0)});
    if (dart.test(method_channel_firestore.MethodChannelFirestore._initialized)) return;
    method_channel_firestore.MethodChannelFirestore.channel.setMethodCallHandler(dart.fn(call => async.async(dart.dynamic, (function*() {
      if (call.method === "QuerySnapshot") {
        let snapshot = new method_channel_query_snapshot.MethodChannelQuerySnapshot.new(core.Map._check(call.arguments), this);
        method_channel_firestore.MethodChannelFirestore.queryObservers[$_get](dart.dsend(call.arguments, '_get', ["handle"])).add(snapshot);
      } else if (call.method === "DocumentSnapshot") {
        let snapshot = new document_snapshot.DocumentSnapshotPlatform.new(core.String._check(dart.dsend(call.arguments, '_get', ["path"])), maps.asStringKeyedMap(core.Map._check(dart.dsend(call.arguments, '_get', ["data"]))), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(dart.dsend(call.arguments, '_get', ["metadata"]), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(dart.dsend(call.arguments, '_get', ["metadata"]), '_get', ["isFromCache"]))), this);
        method_channel_firestore.MethodChannelFirestore.documentObservers[$_get](dart.dsend(call.arguments, '_get', ["handle"])).add(snapshot);
      } else if (call.method === "DoTransaction") {
        let transactionId = core.int._check(dart.dsend(call.arguments, '_get', ["transactionId"]));
        let transaction = new method_channel_transaction.MethodChannelTransaction.new(transactionId, core.String._check(dart.dsend(call.arguments, '_get', ["app"])));
        let result = (yield method_channel_firestore.MethodChannelFirestore._transactionHandlers[$_get](transactionId)(transaction));
        yield transaction.finish();
        return result;
      }
    }).bind(this)), MethodCallToFuture()));
    method_channel_firestore.MethodChannelFirestore._initialized = true;
  }).prototype = method_channel_firestore.MethodChannelFirestore.prototype;
  dart.addTypeTests(method_channel_firestore.MethodChannelFirestore);
  dart.setLibraryUri(method_channel_firestore.MethodChannelFirestore, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart");
  dart.defineLazy(method_channel_firestore.MethodChannelFirestore, {
    /*method_channel_firestore.MethodChannelFirestore._initialized*/get _initialized() {
      return false;
    },
    set _initialized(_) {},
    /*method_channel_firestore.MethodChannelFirestore.channel*/get channel() {
      return new platform_channel.MethodChannel.new("plugins.flutter.io/cloud_firestore", new message_codecs.StandardMethodCodec.new(new firestore_message_codec.FirestoreMessageCodec.new()));
    },
    set channel(_) {},
    /*method_channel_firestore.MethodChannelFirestore.queryObservers*/get queryObservers() {
      return new (IdentityMapOfint$StreamControllerOfQuerySnapshotPlatform()).new();
    },
    /*method_channel_firestore.MethodChannelFirestore.documentObservers*/get documentObservers() {
      return new (IdentityMapOfint$StreamControllerOfDocumentSnapshotPlatform()).new();
    },
    /*method_channel_firestore.MethodChannelFirestore._transactionHandlers*/get _transactionHandlers() {
      return new (IdentityMapOfint$TransactionPlatformToFuture()).new();
    },
    /*method_channel_firestore.MethodChannelFirestore._transactionHandlerId*/get _transactionHandlerId() {
      return 0;
    },
    set _transactionHandlerId(_) {}
  });
  maps.asStringKeyedMap = function asStringKeyedMap(map) {
    let t0;
    t0 = map;
    return t0 == null ? null : t0[$cast](core.String, dart.dynamic);
  };
  const _name$ = dart.privateName(method_channel_field_value, "_name");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C1;
  const _name$0 = dart.privateName(field_path_type, "_name");
  let C9;
  let C8;
  firestore_message_codec.FirestoreMessageCodec = class FirestoreMessageCodec extends message_codecs.StandardMessageCodec {
    writeValue(buffer, value) {
      if (core.DateTime.is(value)) {
        buffer.putUint8(128);
        buffer.putInt64(value.millisecondsSinceEpoch);
      } else if (timestamp.Timestamp.is(value)) {
        buffer.putUint8(136);
        buffer.putInt64(value.seconds);
        buffer.putInt32(value.nanoseconds);
      } else if (geo_point.GeoPoint.is(value)) {
        buffer.putUint8(129);
        buffer.putFloat64(value.latitude);
        buffer.putFloat64(value.longitude);
      } else if (document_reference.DocumentReferencePlatform.is(value)) {
        buffer.putUint8(130);
        let appName = convert.utf8.encoder.convert(value.firestore.app.name);
        this.writeSize(buffer, appName[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(appName));
        let bytes = convert.utf8.encoder.convert(value.path);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (blob.Blob.is(value)) {
        buffer.putUint8(131);
        this.writeSize(buffer, value.bytes[$length]);
        buffer.putUint8List(value.bytes);
      } else if (field_value.FieldValuePlatform.is(value)) {
        let delegate = method_channel_field_value.MethodChannelFieldValue._check(field_value.FieldValuePlatform.getDelegate(value));
        let code = firestore_message_codec.FirestoreMessageCodec._kFieldValueCodes[$_get](delegate.type);
        if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart", 75, 14, "code != null");
        buffer.putUint8(code);
        if (delegate.value != null) this.writeValue(buffer, delegate.value);
      } else if (field_path.FieldPath.is(value)) {
        let code = firestore_message_codec.FirestoreMessageCodec._kFieldPathCodes[$_get](value.type);
        if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart", 80, 14, "code != null");
        buffer.putUint8(code);
      } else {
        super.writeValue(buffer, value);
      }
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 128:
        {
          return new core.DateTime.fromMillisecondsSinceEpoch(buffer.getInt64());
        }
        case 136:
        {
          return new timestamp.Timestamp.new(buffer.getInt64(), buffer.getInt32());
        }
        case 129:
        {
          return new geo_point.GeoPoint.new(buffer.getFloat64(), buffer.getFloat64());
        }
        case 130:
        {
          let appNameLength = this.readSize(buffer);
          let appName = convert.utf8.decoder.convert(buffer.getUint8List(appNameLength));
          let app = new firebase_app.FirebaseApp.new({name: appName});
          let firestore = cloud_firestore_platform_interface.FirestorePlatform.instanceFor({app: app});
          let pathLength = this.readSize(buffer);
          let path = convert.utf8.decoder.convert(buffer.getUint8List(pathLength));
          return firestore.document(path);
        }
        case 131:
        {
          let length = this.readSize(buffer);
          let bytes = buffer.getUint8List(length);
          return new blob.Blob.new(typed_data.Uint8List._check(bytes));
        }
        case 139:
        {
          return field_path.FieldPath.documentId;
        }
        case 132:
        case 133:
        case 134:
        case 135:
        case 137:
        case 138:
        default:
        {
          return super.readValueOfType(type, buffer);
        }
      }
    }
  };
  (firestore_message_codec.FirestoreMessageCodec.new = function() {
    firestore_message_codec.FirestoreMessageCodec.__proto__.new.call(this);
    ;
  }).prototype = firestore_message_codec.FirestoreMessageCodec.prototype;
  dart.addTypeTests(firestore_message_codec.FirestoreMessageCodec);
  dart.setLibraryUri(firestore_message_codec.FirestoreMessageCodec, "package:cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart");
  dart.defineLazy(firestore_message_codec.FirestoreMessageCodec, {
    /*firestore_message_codec.FirestoreMessageCodec._kDateTime*/get _kDateTime() {
      return 128;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kGeoPoint*/get _kGeoPoint() {
      return 129;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDocumentReference*/get _kDocumentReference() {
      return 130;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kBlob*/get _kBlob() {
      return 131;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kArrayUnion*/get _kArrayUnion() {
      return 132;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kArrayRemove*/get _kArrayRemove() {
      return 133;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDelete*/get _kDelete() {
      return 134;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kServerTimestamp*/get _kServerTimestamp() {
      return 135;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kTimestamp*/get _kTimestamp() {
      return 136;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kIncrementDouble*/get _kIncrementDouble() {
      return 137;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kIncrementInteger*/get _kIncrementInteger() {
      return 138;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kDocumentId*/get _kDocumentId() {
      return 139;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFieldValueCodes*/get _kFieldValueCodes() {
      return C1 || CT.C1;
    },
    /*firestore_message_codec.FirestoreMessageCodec._kFieldPathCodes*/get _kFieldPathCodes() {
      return C8 || CT.C8;
    }
  });
  let C10;
  method_channel_field_value.FieldValueType = class FieldValueType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (method_channel_field_value.FieldValueType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = method_channel_field_value.FieldValueType.prototype;
  dart.addTypeTests(method_channel_field_value.FieldValueType);
  dart.setLibraryUri(method_channel_field_value.FieldValueType, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value.dart");
  dart.setFieldSignature(method_channel_field_value.FieldValueType, () => ({
    __proto__: dart.getFields(method_channel_field_value.FieldValueType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(method_channel_field_value.FieldValueType, ['toString']);
  method_channel_field_value.FieldValueType.arrayUnion = C2 || CT.C2;
  method_channel_field_value.FieldValueType.arrayRemove = C3 || CT.C3;
  method_channel_field_value.FieldValueType.delete = C4 || CT.C4;
  method_channel_field_value.FieldValueType.serverTimestamp = C5 || CT.C5;
  method_channel_field_value.FieldValueType.incrementDouble = C6 || CT.C6;
  method_channel_field_value.FieldValueType.incrementInteger = C7 || CT.C7;
  method_channel_field_value.FieldValueType.values = C10 || CT.C10;
  const DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  let C12;
  const DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  let C11;
  const type$ = dart.privateName(method_channel_field_value, "MethodChannelFieldValue.type");
  const value$ = dart.privateName(method_channel_field_value, "MethodChannelFieldValue.value");
  method_channel_field_value.MethodChannelFieldValue = class MethodChannelFieldValue extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    _equals(other) {
      if (other == null) return false;
      return method_channel_field_value.MethodChannelFieldValue.is(other) && dart.equals(other.type, this.type) && dart.test((C11 || CT.C11).equals(other.value, this.value));
    }
    get hashCode() {
      return ui.hashValues(this.type, this.value);
    }
  };
  (method_channel_field_value.MethodChannelFieldValue.new = function(type, value) {
    this[type$] = type;
    this[value$] = value;
    ;
  }).prototype = method_channel_field_value.MethodChannelFieldValue.prototype;
  dart.addTypeTests(method_channel_field_value.MethodChannelFieldValue);
  dart.setLibraryUri(method_channel_field_value.MethodChannelFieldValue, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value.dart");
  dart.setFieldSignature(method_channel_field_value.MethodChannelFieldValue, () => ({
    __proto__: dart.getFields(method_channel_field_value.MethodChannelFieldValue.__proto__),
    type: dart.finalFieldType(method_channel_field_value.FieldValueType),
    value: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(method_channel_field_value.MethodChannelFieldValue, ['_equals']);
  dart.defineExtensionAccessors(method_channel_field_value.MethodChannelFieldValue, ['hashCode']);
  write_batch.WriteBatchPlatform = class WriteBatchPlatform extends plugin_platform_interface.PlatformInterface {
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, write_batch.WriteBatchPlatform._token);
    }
    commit() {
      return async.async(dart.void, function* commit() {
        dart.throw(new core.UnimplementedError.new("commit() not implemented"));
      });
    }
    delete(document) {
      dart.throw(new core.UnimplementedError.new("commit() not implemented"));
    }
    setData(document, data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      dart.throw(new core.UnimplementedError.new("commit() not implemented"));
    }
    updateData(document, data) {
      dart.throw(new core.UnimplementedError.new("commit() not implemented"));
    }
  };
  (write_batch.WriteBatchPlatform.new = function() {
    write_batch.WriteBatchPlatform.__proto__.new.call(this, {token: write_batch.WriteBatchPlatform._token});
    ;
  }).prototype = write_batch.WriteBatchPlatform.prototype;
  dart.addTypeTests(write_batch.WriteBatchPlatform);
  dart.setMethodSignature(write_batch.WriteBatchPlatform, () => ({
    __proto__: dart.getMethods(write_batch.WriteBatchPlatform.__proto__),
    commit: dart.fnType(async.Future$(dart.void), []),
    delete: dart.fnType(dart.void, [document_reference.DocumentReferencePlatform]),
    setData: dart.fnType(dart.void, [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)], {merge: core.bool}, {}),
    updateData: dart.fnType(dart.void, [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(write_batch.WriteBatchPlatform, "package:cloud_firestore_platform_interface/src/platform_interface/write_batch.dart");
  dart.defineLazy(write_batch.WriteBatchPlatform, {
    /*write_batch.WriteBatchPlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  const _pendingResults = dart.privateName(transaction, "_pendingResults");
  const firestore$ = dart.privateName(transaction, "TransactionPlatform.firestore");
  transaction.TransactionPlatform = class TransactionPlatform extends plugin_platform_interface.PlatformInterface {
    get firestore() {
      return this[firestore$];
    }
    set firestore(value) {
      this[firestore$] = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, transaction.TransactionPlatform._token);
    }
    finish() {
      return async.Future.wait(dart.void, this[_pendingResults]);
    }
    get(documentReference) {
      let result = this.doGet(documentReference);
      this[_pendingResults][$add](result);
      return result;
    }
    doGet(documentReference) {
      return async.async(document_snapshot.DocumentSnapshotPlatform, function* doGet() {
        dart.throw(new core.UnimplementedError.new("get() not implemented"));
      });
    }
    delete(documentReference) {
      let result = this.doDelete(documentReference);
      this[_pendingResults][$add](result);
      return result;
    }
    doDelete(documentReference) {
      return async.async(dart.void, function* doDelete() {
        dart.throw(new core.UnimplementedError.new("delete() not implemented"));
      });
    }
    update(documentReference, data) {
      return async.async(dart.void, (function* update() {
        let result = this.doUpdate(documentReference, data);
        this[_pendingResults][$add](result);
        return result;
      }).bind(this));
    }
    doUpdate(documentReference, data) {
      return async.async(dart.void, function* doUpdate() {
        dart.throw(new core.UnimplementedError.new("updated() not implemented"));
      });
    }
    set(documentReference, data) {
      let result = this.doSet(documentReference, data);
      this[_pendingResults][$add](result);
      return result;
    }
    doSet(documentReference, data) {
      return async.async(dart.void, function* doSet() {
        dart.throw(new core.UnimplementedError.new("set() not implemented"));
      });
    }
  };
  (transaction.TransactionPlatform.new = function(firestore) {
    this[_pendingResults] = JSArrayOfFuture().of([]);
    this[firestore$] = firestore;
    transaction.TransactionPlatform.__proto__.new.call(this, {token: transaction.TransactionPlatform._token});
    ;
  }).prototype = transaction.TransactionPlatform.prototype;
  dart.addTypeTests(transaction.TransactionPlatform);
  dart.setMethodSignature(transaction.TransactionPlatform, () => ({
    __proto__: dart.getMethods(transaction.TransactionPlatform.__proto__),
    finish: dart.fnType(async.Future$(dart.void), []),
    get: dart.fnType(async.Future$(document_snapshot.DocumentSnapshotPlatform), [document_reference.DocumentReferencePlatform]),
    doGet: dart.fnType(async.Future$(document_snapshot.DocumentSnapshotPlatform), [document_reference.DocumentReferencePlatform]),
    delete: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform]),
    doDelete: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform]),
    update: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)]),
    doUpdate: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)]),
    set: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)]),
    doSet: dart.fnType(async.Future$(dart.void), [document_reference.DocumentReferencePlatform, core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(transaction.TransactionPlatform, "package:cloud_firestore_platform_interface/src/platform_interface/transaction.dart");
  dart.setFieldSignature(transaction.TransactionPlatform, () => ({
    __proto__: dart.getFields(transaction.TransactionPlatform.__proto__),
    firestore: dart.fieldType(cloud_firestore_platform_interface.FirestorePlatform),
    [_pendingResults]: dart.fieldType(core.List$(async.Future))
  }));
  dart.defineLazy(transaction.TransactionPlatform, {
    /*transaction.TransactionPlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  const documents$ = dart.privateName(query_snapshot, "QuerySnapshotPlatform.documents");
  const documentChanges$ = dart.privateName(query_snapshot, "QuerySnapshotPlatform.documentChanges");
  const metadata$ = dart.privateName(query_snapshot, "QuerySnapshotPlatform.metadata");
  query_snapshot.QuerySnapshotPlatform = class QuerySnapshotPlatform extends plugin_platform_interface.PlatformInterface {
    get documents() {
      return this[documents$];
    }
    set documents(value) {
      super.documents = value;
    }
    get documentChanges() {
      return this[documentChanges$];
    }
    set documentChanges(value) {
      super.documentChanges = value;
    }
    get metadata() {
      return this[metadata$];
    }
    set metadata(value) {
      super.metadata = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, query_snapshot.QuerySnapshotPlatform._token);
    }
  };
  (query_snapshot.QuerySnapshotPlatform.new = function(documents, documentChanges, metadata) {
    this[documents$] = documents;
    this[documentChanges$] = documentChanges;
    this[metadata$] = metadata;
    query_snapshot.QuerySnapshotPlatform.__proto__.new.call(this, {token: query_snapshot.QuerySnapshotPlatform._token});
    ;
  }).prototype = query_snapshot.QuerySnapshotPlatform.prototype;
  dart.addTypeTests(query_snapshot.QuerySnapshotPlatform);
  dart.setLibraryUri(query_snapshot.QuerySnapshotPlatform, "package:cloud_firestore_platform_interface/src/platform_interface/query_snapshot.dart");
  dart.setFieldSignature(query_snapshot.QuerySnapshotPlatform, () => ({
    __proto__: dart.getFields(query_snapshot.QuerySnapshotPlatform.__proto__),
    documents: dart.finalFieldType(core.List$(document_snapshot.DocumentSnapshotPlatform)),
    documentChanges: dart.finalFieldType(core.List$(document_change.DocumentChangePlatform)),
    metadata: dart.finalFieldType(snapshot_metadata.SnapshotMetadataPlatform)
  }));
  dart.defineLazy(query_snapshot.QuerySnapshotPlatform, {
    /*query_snapshot.QuerySnapshotPlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  const _name$1 = dart.privateName(source$, "_name");
  let C13;
  const firestore$0 = dart.privateName(query, "QueryPlatform.firestore");
  const pathComponents$ = dart.privateName(query, "QueryPlatform.pathComponents");
  const parameters$ = dart.privateName(query, "QueryPlatform.parameters");
  const isCollectionGroup$ = dart.privateName(query, "QueryPlatform.isCollectionGroup");
  query.QueryPlatform = class QueryPlatform extends plugin_platform_interface.PlatformInterface {
    get firestore() {
      return this[firestore$0];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get pathComponents() {
      return this[pathComponents$];
    }
    set pathComponents(value) {
      super.pathComponents = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get isCollectionGroup() {
      return this[isCollectionGroup$];
    }
    set isCollectionGroup(value) {
      super.isCollectionGroup = value;
    }
    static verifyExtends(instance) {
      if (!collection_reference.CollectionReferencePlatform.is(instance)) {
        plugin_platform_interface.PlatformInterface.verifyToken(instance, query.QueryPlatform._token);
      }
    }
    get path() {
      return this.pathComponents[$join]("/");
    }
    copyWithParameters(parameters) {
      dart.throw(new core.UnimplementedError.new("copyWithParameters() is not implemented"));
    }
    buildArguments() {
      dart.throw(new core.UnimplementedError.new("buildArguments() is not imlpmented"));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      dart.throw(new core.UnimplementedError.new("snapshots() is not implemented"));
    }
    getDocuments(opts) {
      let source = opts && 'source' in opts ? opts.source : C13 || CT.C13;
      return async.async(query_snapshot.QuerySnapshotPlatform, function* getDocuments() {
        dart.throw(new core.UnimplementedError.new("getDocuments() is not implemented"));
      });
    }
    reference() {
      return this.firestore.collection(this.pathComponents[$join]("/"));
    }
    where(field, opts) {
      let isEqualTo = opts && 'isEqualTo' in opts ? opts.isEqualTo : null;
      let isLessThan = opts && 'isLessThan' in opts ? opts.isLessThan : null;
      let isLessThanOrEqualTo = opts && 'isLessThanOrEqualTo' in opts ? opts.isLessThanOrEqualTo : null;
      let isGreaterThan = opts && 'isGreaterThan' in opts ? opts.isGreaterThan : null;
      let isGreaterThanOrEqualTo = opts && 'isGreaterThanOrEqualTo' in opts ? opts.isGreaterThanOrEqualTo : null;
      let arrayContains = opts && 'arrayContains' in opts ? opts.arrayContains : null;
      let arrayContainsAny = opts && 'arrayContainsAny' in opts ? opts.arrayContainsAny : null;
      let whereIn = opts && 'whereIn' in opts ? opts.whereIn : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      dart.throw(new core.UnimplementedError.new("where() is not implemented"));
    }
    orderBy(field, opts) {
      let descending = opts && 'descending' in opts ? opts.descending : false;
      dart.throw(new core.UnimplementedError.new("orderBy() is not implemented"));
    }
    startAfterDocument(documentSnapshot) {
      dart.throw(new core.UnimplementedError.new("startAfterDocument() is not implemented"));
    }
    startAtDocument(documentSnapshot) {
      dart.throw(new core.UnimplementedError.new("startAtDocument() is not implemented"));
    }
    startAfter(values) {
      dart.throw(new core.UnimplementedError.new("startAfter() is not implemented"));
    }
    startAt(values) {
      dart.throw(new core.UnimplementedError.new("startAt() is not implemented"));
    }
    endAtDocument(documentSnapshot) {
      dart.throw(new core.UnimplementedError.new("endAtDocument() is not implemented"));
    }
    endAt(values) {
      dart.throw(new core.UnimplementedError.new("endAt() is not implemented"));
    }
    endBeforeDocument(documentSnapshot) {
      dart.throw(new core.UnimplementedError.new("endBeforeDocument() is not implemented"));
    }
    endBefore(values) {
      dart.throw(new core.UnimplementedError.new("endBefore() is not implemented"));
    }
    limit(length) {
      if (!!dart.test(this.parameters[$containsKey]("limit"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/platform_interface/query.dart", 255, 12, "!parameters.containsKey('limit')");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["limit", length]));
    }
  };
  (query.QueryPlatform.new = function(opts) {
    let t0;
    let firestore = opts && 'firestore' in opts ? opts.firestore : null;
    let pathComponents = opts && 'pathComponents' in opts ? opts.pathComponents : null;
    let isCollectionGroup = opts && 'isCollectionGroup' in opts ? opts.isCollectionGroup : false;
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    this[firestore$0] = firestore;
    this[pathComponents$] = pathComponents;
    this[isCollectionGroup$] = isCollectionGroup;
    this[parameters$] = (t0 = parameters, t0 == null ? MapOfString$dynamic().unmodifiable(new (IdentityMapOfString$dynamic()).from(["where", ListOfList().unmodifiable(JSArrayOfList().of([])), "orderBy", ListOfList().unmodifiable(JSArrayOfList().of([]))])) : t0);
    if (!(firestore != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/platform_interface/query.dart", 28, 16, "firestore != null");
    if (!(pathComponents != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/platform_interface/query.dart", 29, 16, "pathComponents != null");
    query.QueryPlatform.__proto__.new.call(this, {token: query.QueryPlatform._token});
    ;
  }).prototype = query.QueryPlatform.prototype;
  dart.addTypeTests(query.QueryPlatform);
  dart.setMethodSignature(query.QueryPlatform, () => ({
    __proto__: dart.getMethods(query.QueryPlatform.__proto__),
    copyWithParameters: dart.fnType(query.QueryPlatform, [core.Map$(core.String, dart.dynamic)]),
    buildArguments: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    snapshots: dart.fnType(async.Stream$(query_snapshot.QuerySnapshotPlatform), [], {includeMetadataChanges: core.bool}, {}),
    getDocuments: dart.fnType(async.Future$(query_snapshot.QuerySnapshotPlatform), [], {source: source$.Source}, {}),
    reference: dart.fnType(collection_reference.CollectionReferencePlatform, []),
    where: dart.fnType(query.QueryPlatform, [dart.dynamic], {arrayContains: dart.dynamic, arrayContainsAny: core.List, isEqualTo: dart.dynamic, isGreaterThan: dart.dynamic, isGreaterThanOrEqualTo: dart.dynamic, isLessThan: dart.dynamic, isLessThanOrEqualTo: dart.dynamic, isNull: core.bool, whereIn: core.List}, {}),
    orderBy: dart.fnType(query.QueryPlatform, [dart.dynamic], {descending: core.bool}, {}),
    startAfterDocument: dart.fnType(query.QueryPlatform, [document_snapshot.DocumentSnapshotPlatform]),
    startAtDocument: dart.fnType(query.QueryPlatform, [document_snapshot.DocumentSnapshotPlatform]),
    startAfter: dart.fnType(query.QueryPlatform, [core.List]),
    startAt: dart.fnType(query.QueryPlatform, [core.List]),
    endAtDocument: dart.fnType(query.QueryPlatform, [document_snapshot.DocumentSnapshotPlatform]),
    endAt: dart.fnType(query.QueryPlatform, [core.List]),
    endBeforeDocument: dart.fnType(query.QueryPlatform, [document_snapshot.DocumentSnapshotPlatform]),
    endBefore: dart.fnType(query.QueryPlatform, [core.List]),
    limit: dart.fnType(query.QueryPlatform, [core.int])
  }));
  dart.setGetterSignature(query.QueryPlatform, () => ({
    __proto__: dart.getGetters(query.QueryPlatform.__proto__),
    path: core.String
  }));
  dart.setLibraryUri(query.QueryPlatform, "package:cloud_firestore_platform_interface/src/platform_interface/query.dart");
  dart.setFieldSignature(query.QueryPlatform, () => ({
    __proto__: dart.getFields(query.QueryPlatform.__proto__),
    firestore: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    pathComponents: dart.finalFieldType(core.List$(core.String)),
    parameters: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    isCollectionGroup: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(query.QueryPlatform, {
    /*query.QueryPlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  field_value_factory.FieldValueFactoryPlatform = class FieldValueFactoryPlatform extends plugin_platform_interface.PlatformInterface {
    static get instance() {
      return field_value_factory.FieldValueFactoryPlatform._instance;
    }
    static set instance(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, field_value_factory.FieldValueFactoryPlatform._token);
      field_value_factory.FieldValueFactoryPlatform._instance = instance;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, field_value_factory.FieldValueFactoryPlatform._token);
    }
    arrayUnion(elements) {
      dart.throw(new core.UnimplementedError.new("arrayUnion() is not implemented"));
    }
    arrayRemove(elements) {
      dart.throw(new core.UnimplementedError.new("arrayRemove() is not implemented"));
    }
    delete() {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    serverTimestamp() {
      dart.throw(new core.UnimplementedError.new("serverTimestamp() is not implemented"));
    }
    increment(value) {
      dart.throw(new core.UnimplementedError.new("increment() is not implemented"));
    }
  };
  (field_value_factory.FieldValueFactoryPlatform.new = function() {
    field_value_factory.FieldValueFactoryPlatform.__proto__.new.call(this, {token: field_value_factory.FieldValueFactoryPlatform._token});
    ;
  }).prototype = field_value_factory.FieldValueFactoryPlatform.prototype;
  dart.addTypeTests(field_value_factory.FieldValueFactoryPlatform);
  dart.setMethodSignature(field_value_factory.FieldValueFactoryPlatform, () => ({
    __proto__: dart.getMethods(field_value_factory.FieldValueFactoryPlatform.__proto__),
    arrayUnion: dart.fnType(dart.dynamic, [core.List]),
    arrayRemove: dart.fnType(dart.dynamic, [core.List]),
    delete: dart.fnType(dart.dynamic, []),
    serverTimestamp: dart.fnType(dart.dynamic, []),
    increment: dart.fnType(dart.dynamic, [core.num])
  }));
  dart.setLibraryUri(field_value_factory.FieldValueFactoryPlatform, "package:cloud_firestore_platform_interface/src/platform_interface/field_value_factory.dart");
  dart.defineLazy(field_value_factory.FieldValueFactoryPlatform, {
    /*field_value_factory.FieldValueFactoryPlatform._instance*/get _instance() {
      return new method_channel_field_value_factory.MethodChannelFieldValueFactory.new();
    },
    set _instance(_) {},
    /*field_value_factory.FieldValueFactoryPlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  method_channel_field_value_factory.MethodChannelFieldValueFactory = class MethodChannelFieldValueFactory extends field_value_factory.FieldValueFactoryPlatform {
    arrayRemove(elements) {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.arrayRemove, elements);
    }
    arrayUnion(elements) {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.arrayUnion, elements);
    }
    delete() {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.delete, null);
    }
    increment(value) {
      if (!(core.int.is(value) || typeof value == 'number')) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_field_value_factory.dart", 30, 12, "value is int || value is double");
      if (typeof value == 'number') {
        return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.incrementDouble, value);
      } else if (core.int.is(value)) {
        return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.incrementInteger, value);
      }
      return null;
    }
    serverTimestamp() {
      return new method_channel_field_value.MethodChannelFieldValue.new(method_channel_field_value.FieldValueType.serverTimestamp, null);
    }
  };
  (method_channel_field_value_factory.MethodChannelFieldValueFactory.new = function() {
    method_channel_field_value_factory.MethodChannelFieldValueFactory.__proto__.new.call(this);
    ;
  }).prototype = method_channel_field_value_factory.MethodChannelFieldValueFactory.prototype;
  dart.addTypeTests(method_channel_field_value_factory.MethodChannelFieldValueFactory);
  dart.setMethodSignature(method_channel_field_value_factory.MethodChannelFieldValueFactory, () => ({
    __proto__: dart.getMethods(method_channel_field_value_factory.MethodChannelFieldValueFactory.__proto__),
    arrayRemove: dart.fnType(method_channel_field_value.MethodChannelFieldValue, [core.List]),
    arrayUnion: dart.fnType(method_channel_field_value.MethodChannelFieldValue, [core.List]),
    delete: dart.fnType(method_channel_field_value.MethodChannelFieldValue, []),
    increment: dart.fnType(method_channel_field_value.MethodChannelFieldValue, [core.num]),
    serverTimestamp: dart.fnType(method_channel_field_value.MethodChannelFieldValue, [])
  }));
  dart.setLibraryUri(method_channel_field_value_factory.MethodChannelFieldValueFactory, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value_factory.dart");
  const _delegate$ = dart.privateName(field_value, "_delegate");
  field_value.FieldValuePlatform = class FieldValuePlatform extends core.Object {
    static getDelegate(fieldValue) {
      return fieldValue[_delegate$];
    }
    static verifyExtends(instance) {
    }
  };
  (field_value.FieldValuePlatform.new = function(_delegate) {
    this[_delegate$] = _delegate;
    ;
  }).prototype = field_value.FieldValuePlatform.prototype;
  dart.addTypeTests(field_value.FieldValuePlatform);
  dart.setLibraryUri(field_value.FieldValuePlatform, "package:cloud_firestore_platform_interface/src/platform_interface/field_value.dart");
  dart.setFieldSignature(field_value.FieldValuePlatform, () => ({
    __proto__: dart.getFields(field_value.FieldValuePlatform.__proto__),
    [_delegate$]: dart.finalFieldType(dart.dynamic)
  }));
  const _pathComponents$ = dart.privateName(document_reference, "_pathComponents");
  const firestore$1 = dart.privateName(document_reference, "DocumentReferencePlatform.firestore");
  document_reference.DocumentReferencePlatform = class DocumentReferencePlatform extends plugin_platform_interface.PlatformInterface {
    get firestore() {
      return this[firestore$1];
    }
    set firestore(value) {
      super.firestore = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, document_reference.DocumentReferencePlatform._token);
    }
    _equals(o) {
      if (o == null) return false;
      return document_reference.DocumentReferencePlatform.is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return ui.hashList(this[_pathComponents$]);
    }
    parent() {
      let t0;
      let parentPathComponents = (t0 = ListOfString().from(this[_pathComponents$]), t0[$removeLast](), t0);
      return this.firestore.collection(parentPathComponents[$join]("/"));
    }
    get path() {
      return this[_pathComponents$][$join]("/");
    }
    get documentID() {
      return this[_pathComponents$][$last];
    }
    setData(data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      dart.throw(new core.UnimplementedError.new("setData() is not implemented"));
    }
    updateData(data) {
      dart.throw(new core.UnimplementedError.new("updateData() is not implemented"));
    }
    get(opts) {
      let source = opts && 'source' in opts ? opts.source : C13 || CT.C13;
      return async.async(document_snapshot.DocumentSnapshotPlatform, function* get() {
        dart.throw(new core.UnimplementedError.new("get() is not implemented"));
      });
    }
    delete() {
      dart.throw(new core.UnimplementedError.new("delete() is not implemented"));
    }
    collection(collectionPath) {
      return this.firestore.collection(dart.str(this.path) + "/" + dart.str(collectionPath));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      dart.throw(new core.UnimplementedError.new("snapshots() is not implemented"));
    }
  };
  (document_reference.DocumentReferencePlatform.new = function(firestore, _pathComponents) {
    this[firestore$1] = firestore;
    this[_pathComponents$] = _pathComponents;
    document_reference.DocumentReferencePlatform.__proto__.new.call(this, {token: document_reference.DocumentReferencePlatform._token});
    ;
  }).prototype = document_reference.DocumentReferencePlatform.prototype;
  dart.addTypeTests(document_reference.DocumentReferencePlatform);
  dart.setMethodSignature(document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getMethods(document_reference.DocumentReferencePlatform.__proto__),
    parent: dart.fnType(collection_reference.CollectionReferencePlatform, []),
    setData: dart.fnType(async.Future$(dart.void), [core.Map$(core.String, dart.dynamic)], {merge: core.bool}, {}),
    updateData: dart.fnType(async.Future$(dart.void), [core.Map$(core.String, dart.dynamic)]),
    get: dart.fnType(async.Future$(document_snapshot.DocumentSnapshotPlatform), [], {source: source$.Source}, {}),
    delete: dart.fnType(async.Future$(dart.void), []),
    collection: dart.fnType(collection_reference.CollectionReferencePlatform, [core.String]),
    snapshots: dart.fnType(async.Stream$(document_snapshot.DocumentSnapshotPlatform), [], {includeMetadataChanges: core.bool}, {})
  }));
  dart.setGetterSignature(document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getGetters(document_reference.DocumentReferencePlatform.__proto__),
    path: core.String,
    documentID: core.String
  }));
  dart.setLibraryUri(document_reference.DocumentReferencePlatform, "package:cloud_firestore_platform_interface/src/platform_interface/document_reference.dart");
  dart.setFieldSignature(document_reference.DocumentReferencePlatform, () => ({
    __proto__: dart.getFields(document_reference.DocumentReferencePlatform.__proto__),
    firestore: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    [_pathComponents$]: dart.finalFieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(document_reference.DocumentReferencePlatform, ['_equals']);
  dart.defineExtensionAccessors(document_reference.DocumentReferencePlatform, ['hashCode']);
  dart.defineLazy(document_reference.DocumentReferencePlatform, {
    /*document_reference.DocumentReferencePlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  const _name$2 = dart.privateName(document_change, "_name");
  let C14;
  let C15;
  let C16;
  let C17;
  document_change.DocumentChangeType = class DocumentChangeType extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (document_change.DocumentChangeType.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = document_change.DocumentChangeType.prototype;
  dart.addTypeTests(document_change.DocumentChangeType);
  dart.setLibraryUri(document_change.DocumentChangeType, "package:cloud_firestore_platform_interface/src/platform_interface/document_change.dart");
  dart.setFieldSignature(document_change.DocumentChangeType, () => ({
    __proto__: dart.getFields(document_change.DocumentChangeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(document_change.DocumentChangeType, ['toString']);
  document_change.DocumentChangeType.added = C14 || CT.C14;
  document_change.DocumentChangeType.modified = C15 || CT.C15;
  document_change.DocumentChangeType.removed = C16 || CT.C16;
  document_change.DocumentChangeType.values = C17 || CT.C17;
  const type$0 = dart.privateName(document_change, "DocumentChangePlatform.type");
  const oldIndex$ = dart.privateName(document_change, "DocumentChangePlatform.oldIndex");
  const newIndex$ = dart.privateName(document_change, "DocumentChangePlatform.newIndex");
  const document$ = dart.privateName(document_change, "DocumentChangePlatform.document");
  document_change.DocumentChangePlatform = class DocumentChangePlatform extends plugin_platform_interface.PlatformInterface {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get oldIndex() {
      return this[oldIndex$];
    }
    set oldIndex(value) {
      super.oldIndex = value;
    }
    get newIndex() {
      return this[newIndex$];
    }
    set newIndex(value) {
      super.newIndex = value;
    }
    get document() {
      return this[document$];
    }
    set document(value) {
      super.document = value;
    }
    static verifyExtends(instance) {
      plugin_platform_interface.PlatformInterface.verifyToken(instance, document_change.DocumentChangePlatform._token);
    }
  };
  (document_change.DocumentChangePlatform.new = function(type, oldIndex, newIndex, document) {
    this[type$0] = type;
    this[oldIndex$] = oldIndex;
    this[newIndex$] = newIndex;
    this[document$] = document;
    document_change.DocumentChangePlatform.__proto__.new.call(this, {token: document_change.DocumentChangePlatform._token});
    ;
  }).prototype = document_change.DocumentChangePlatform.prototype;
  dart.addTypeTests(document_change.DocumentChangePlatform);
  dart.setLibraryUri(document_change.DocumentChangePlatform, "package:cloud_firestore_platform_interface/src/platform_interface/document_change.dart");
  dart.setFieldSignature(document_change.DocumentChangePlatform, () => ({
    __proto__: dart.getFields(document_change.DocumentChangePlatform.__proto__),
    type: dart.finalFieldType(document_change.DocumentChangeType),
    oldIndex: dart.finalFieldType(core.int),
    newIndex: dart.finalFieldType(core.int),
    document: dart.finalFieldType(document_snapshot.DocumentSnapshotPlatform)
  }));
  dart.defineLazy(document_change.DocumentChangePlatform, {
    /*document_change.DocumentChangePlatform._token*/get _token() {
      return new core.Object.new();
    }
  });
  collection_reference.CollectionReferencePlatform = class CollectionReferencePlatform extends query.QueryPlatform {
    get id() {
      return dart.test(this.pathComponents[$isEmpty]) ? null : this.pathComponents[$last];
    }
    parent() {
      dart.throw(new core.UnimplementedError.new("parent() is not implemented"));
    }
    document(path = null) {
      dart.throw(new core.UnimplementedError.new("document() is not implemented"));
    }
    add(data) {
      return async.async(document_reference.DocumentReferencePlatform, function* add() {
        dart.throw(new core.UnimplementedError.new("add() is not implemented"));
      });
    }
  };
  (collection_reference.CollectionReferencePlatform.new = function(firestore, pathComponents) {
    collection_reference.CollectionReferencePlatform.__proto__.new.call(this, {firestore: firestore, pathComponents: pathComponents});
    ;
  }).prototype = collection_reference.CollectionReferencePlatform.prototype;
  dart.addTypeTests(collection_reference.CollectionReferencePlatform);
  dart.setMethodSignature(collection_reference.CollectionReferencePlatform, () => ({
    __proto__: dart.getMethods(collection_reference.CollectionReferencePlatform.__proto__),
    parent: dart.fnType(document_reference.DocumentReferencePlatform, []),
    document: dart.fnType(document_reference.DocumentReferencePlatform, [], [core.String]),
    add: dart.fnType(async.Future$(document_reference.DocumentReferencePlatform), [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setGetterSignature(collection_reference.CollectionReferencePlatform, () => ({
    __proto__: dart.getGetters(collection_reference.CollectionReferencePlatform.__proto__),
    id: core.String
  }));
  dart.setLibraryUri(collection_reference.CollectionReferencePlatform, "package:cloud_firestore_platform_interface/src/platform_interface/collection_reference.dart");
  const _seconds$ = dart.privateName(timestamp, "_seconds");
  const _nanoseconds$ = dart.privateName(timestamp, "_nanoseconds");
  timestamp.Timestamp = class Timestamp extends core.Object {
    static fromMillisecondsSinceEpoch(milliseconds) {
      let seconds = (dart.notNull(milliseconds) / 1000)[$floor]();
      let nanoseconds = (dart.notNull(milliseconds) - seconds * 1000) * 1000000;
      return new timestamp.Timestamp.new(seconds, nanoseconds);
    }
    static fromMicrosecondsSinceEpoch(microseconds) {
      let seconds = (dart.notNull(microseconds) / 1000000)[$floor]();
      let nanoseconds = (dart.notNull(microseconds) - seconds * 1000000) * 1000;
      return new timestamp.Timestamp.new(seconds, nanoseconds);
    }
    static fromDate(date) {
      return timestamp.Timestamp.fromMicrosecondsSinceEpoch(date.microsecondsSinceEpoch);
    }
    static now() {
      return timestamp.Timestamp.fromMicrosecondsSinceEpoch(new core.DateTime.now().microsecondsSinceEpoch);
    }
    get seconds() {
      return this[_seconds$];
    }
    get nanoseconds() {
      return this[_nanoseconds$];
    }
    get millisecondsSinceEpoch() {
      return (dart.notNull(this.seconds) * 1000 + dart.notNull(this.nanoseconds) / 1000000)[$floor]();
    }
    get microsecondsSinceEpoch() {
      return (dart.notNull(this.seconds) * 1000000 + dart.notNull(this.nanoseconds) / 1000)[$floor]();
    }
    toDate() {
      return new core.DateTime.fromMicrosecondsSinceEpoch(this.microsecondsSinceEpoch);
    }
    get hashCode() {
      return ui.hashValues(this.seconds, this.nanoseconds);
    }
    _equals(o) {
      if (o == null) return false;
      return timestamp.Timestamp.is(o) && o.seconds == this.seconds && o.nanoseconds == this.nanoseconds;
    }
    compareTo(other) {
      timestamp.Timestamp._check(other);
      if (this.seconds == other.seconds) {
        return this.nanoseconds[$compareTo](other.nanoseconds);
      }
      return this.seconds[$compareTo](other.seconds);
    }
    toString() {
      return "Timestamp(seconds=" + dart.str(this.seconds) + ", nanoseconds=" + dart.str(this.nanoseconds) + ")";
    }
    static _validateRange(seconds, nanoseconds) {
      timestamp._check(dart.notNull(nanoseconds) >= 0, "nanoseconds", nanoseconds);
      timestamp._check(dart.notNull(nanoseconds) < 1000000000, "nanoseconds", nanoseconds);
      timestamp._check(dart.notNull(seconds) >= -62135596800.0, "seconds", seconds);
      timestamp._check(dart.notNull(seconds) < 253402300800.0, "seconds", seconds);
    }
  };
  (timestamp.Timestamp.new = function(_seconds, _nanoseconds) {
    this[_seconds$] = _seconds;
    this[_nanoseconds$] = _nanoseconds;
    timestamp.Timestamp._validateRange(this[_seconds$], this[_nanoseconds$]);
  }).prototype = timestamp.Timestamp.prototype;
  dart.addTypeTests(timestamp.Timestamp);
  timestamp.Timestamp[dart.implements] = () => [core.Comparable$(timestamp.Timestamp)];
  dart.setMethodSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getMethods(timestamp.Timestamp.__proto__),
    toDate: dart.fnType(core.DateTime, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getGetters(timestamp.Timestamp.__proto__),
    seconds: core.int,
    nanoseconds: core.int,
    millisecondsSinceEpoch: core.int,
    microsecondsSinceEpoch: core.int
  }));
  dart.setLibraryUri(timestamp.Timestamp, "package:cloud_firestore_platform_interface/src/timestamp.dart");
  dart.setFieldSignature(timestamp.Timestamp, () => ({
    __proto__: dart.getFields(timestamp.Timestamp.__proto__),
    [_seconds$]: dart.finalFieldType(core.int),
    [_nanoseconds$]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(timestamp.Timestamp, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(timestamp.Timestamp, ['hashCode']);
  dart.defineLazy(timestamp.Timestamp, {
    /*timestamp.Timestamp._kStartOfTime*/get _kStartOfTime() {
      return -62135596800.0;
    },
    /*timestamp.Timestamp._kEndOfTime*/get _kEndOfTime() {
      return 253402300800.0;
    }
  });
  timestamp._check = function _check(expr, name, value) {
    if (!dart.test(expr)) {
      dart.throw(new core.ArgumentError.new("Timestamp " + dart.str(name) + " out of range: " + dart.str(value)));
    }
  };
  dart.defineLazy(timestamp, {
    /*timestamp._kThousand*/get _kThousand() {
      return 1000;
    },
    /*timestamp._kMillion*/get _kMillion() {
      return 1000000;
    },
    /*timestamp._kBillion*/get _kBillion() {
      return 1000000000;
    }
  });
  let C18;
  let C19;
  let C20;
  source$.Source = class Source extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (source$.Source.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = source$.Source.prototype;
  dart.addTypeTests(source$.Source);
  dart.setLibraryUri(source$.Source, "package:cloud_firestore_platform_interface/src/source.dart");
  dart.setFieldSignature(source$.Source, () => ({
    __proto__: dart.getFields(source$.Source.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(source$.Source, ['toString']);
  source$.Source.serverAndCache = C13 || CT.C13;
  source$.Source.server = C18 || CT.C18;
  source$.Source.cache = C19 || CT.C19;
  source$.Source.values = C20 || CT.C20;
  const hasPendingWrites$ = dart.privateName(snapshot_metadata, "SnapshotMetadataPlatform.hasPendingWrites");
  const isFromCache$ = dart.privateName(snapshot_metadata, "SnapshotMetadataPlatform.isFromCache");
  snapshot_metadata.SnapshotMetadataPlatform = class SnapshotMetadataPlatform extends core.Object {
    get hasPendingWrites() {
      return this[hasPendingWrites$];
    }
    set hasPendingWrites(value) {
      super.hasPendingWrites = value;
    }
    get isFromCache() {
      return this[isFromCache$];
    }
    set isFromCache(value) {
      super.isFromCache = value;
    }
  };
  (snapshot_metadata.SnapshotMetadataPlatform.new = function(hasPendingWrites, isFromCache) {
    this[hasPendingWrites$] = hasPendingWrites;
    this[isFromCache$] = isFromCache;
    ;
  }).prototype = snapshot_metadata.SnapshotMetadataPlatform.prototype;
  dart.addTypeTests(snapshot_metadata.SnapshotMetadataPlatform);
  dart.setLibraryUri(snapshot_metadata.SnapshotMetadataPlatform, "package:cloud_firestore_platform_interface/src/snapshot_metadata.dart");
  dart.setFieldSignature(snapshot_metadata.SnapshotMetadataPlatform, () => ({
    __proto__: dart.getFields(snapshot_metadata.SnapshotMetadataPlatform.__proto__),
    hasPendingWrites: dart.finalFieldType(core.bool),
    isFromCache: dart.finalFieldType(core.bool)
  }));
  const latitude$ = dart.privateName(geo_point, "GeoPoint.latitude");
  const longitude$ = dart.privateName(geo_point, "GeoPoint.longitude");
  geo_point.GeoPoint = class GeoPoint extends core.Object {
    get latitude() {
      return this[latitude$];
    }
    set latitude(value) {
      super.latitude = value;
    }
    get longitude() {
      return this[longitude$];
    }
    set longitude(value) {
      super.longitude = value;
    }
    _equals(o) {
      if (o == null) return false;
      return geo_point.GeoPoint.is(o) && o.latitude == this.latitude && o.longitude == this.longitude;
    }
    get hashCode() {
      return ui.hashValues(this.latitude, this.longitude);
    }
  };
  (geo_point.GeoPoint.new = function(latitude, longitude) {
    this[latitude$] = latitude;
    this[longitude$] = longitude;
    ;
  }).prototype = geo_point.GeoPoint.prototype;
  dart.addTypeTests(geo_point.GeoPoint);
  dart.setLibraryUri(geo_point.GeoPoint, "package:cloud_firestore_platform_interface/src/geo_point.dart");
  dart.setFieldSignature(geo_point.GeoPoint, () => ({
    __proto__: dart.getFields(geo_point.GeoPoint.__proto__),
    latitude: dart.finalFieldType(core.double),
    longitude: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(geo_point.GeoPoint, ['_equals']);
  dart.defineExtensionAccessors(geo_point.GeoPoint, ['hashCode']);
  const FieldPath_type = dart.privateName(field_path, "FieldPath.type");
  let C21;
  field_path.FieldPath = class FieldPath extends core.Object {
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    static get documentId() {
      return C21 || CT.C21;
    }
  };
  (field_path.FieldPath.__ = function(type) {
    this[type$1] = type;
    ;
  }).prototype = field_path.FieldPath.prototype;
  dart.addTypeTests(field_path.FieldPath);
  const type$1 = FieldPath_type;
  dart.setLibraryUri(field_path.FieldPath, "package:cloud_firestore_platform_interface/src/field_path.dart");
  dart.setFieldSignature(field_path.FieldPath, () => ({
    __proto__: dart.getFields(field_path.FieldPath.__proto__),
    type: dart.finalFieldType(field_path_type.FieldPathType)
  }));
  let C22;
  field_path_type.FieldPathType = class FieldPathType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (field_path_type.FieldPathType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = field_path_type.FieldPathType.prototype;
  dart.addTypeTests(field_path_type.FieldPathType);
  dart.setLibraryUri(field_path_type.FieldPathType, "package:cloud_firestore_platform_interface/src/internal/field_path_type.dart");
  dart.setFieldSignature(field_path_type.FieldPathType, () => ({
    __proto__: dart.getFields(field_path_type.FieldPathType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(field_path_type.FieldPathType, ['toString']);
  field_path_type.FieldPathType.documentId = C9 || CT.C9;
  field_path_type.FieldPathType.values = C22 || CT.C22;
  const _path$ = dart.privateName(document_snapshot, "_path");
  const firestore$2 = dart.privateName(document_snapshot, "DocumentSnapshotPlatform.firestore");
  const data$ = dart.privateName(document_snapshot, "DocumentSnapshotPlatform.data");
  const metadata$0 = dart.privateName(document_snapshot, "DocumentSnapshotPlatform.metadata");
  document_snapshot.DocumentSnapshotPlatform = class DocumentSnapshotPlatform extends core.Object {
    get firestore() {
      return this[firestore$2];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get metadata() {
      return this[metadata$0];
    }
    set metadata(value) {
      super.metadata = value;
    }
    get reference() {
      return this.firestore.document(this[_path$]);
    }
    _get(key) {
      return this.data[$_get](key);
    }
    get documentID() {
      return this[_path$][$split]("/")[$last];
    }
    get exists() {
      return this.data != null;
    }
  };
  (document_snapshot.DocumentSnapshotPlatform.new = function(_path, data, metadata, firestore) {
    this[_path$] = _path;
    this[data$] = data;
    this[metadata$0] = metadata;
    this[firestore$2] = firestore;
    ;
  }).prototype = document_snapshot.DocumentSnapshotPlatform.prototype;
  dart.addTypeTests(document_snapshot.DocumentSnapshotPlatform);
  dart.setMethodSignature(document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getMethods(document_snapshot.DocumentSnapshotPlatform.__proto__),
    _get: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setGetterSignature(document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getGetters(document_snapshot.DocumentSnapshotPlatform.__proto__),
    reference: document_reference.DocumentReferencePlatform,
    documentID: core.String,
    exists: core.bool
  }));
  dart.setLibraryUri(document_snapshot.DocumentSnapshotPlatform, "package:cloud_firestore_platform_interface/src/document_snapshot.dart");
  dart.setFieldSignature(document_snapshot.DocumentSnapshotPlatform, () => ({
    __proto__: dart.getFields(document_snapshot.DocumentSnapshotPlatform.__proto__),
    [_path$]: dart.finalFieldType(core.String),
    firestore: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    data: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    metadata: dart.finalFieldType(snapshot_metadata.SnapshotMetadataPlatform)
  }));
  const bytes$ = dart.privateName(blob, "Blob.bytes");
  blob.Blob = class Blob extends core.Object {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    _equals(other) {
      if (other == null) return false;
      return blob.Blob.is(other) && dart.test((C11 || CT.C11).equals(other.bytes, this.bytes));
    }
    get hashCode() {
      return ui.hashList(this.bytes);
    }
  };
  (blob.Blob.new = function(bytes) {
    this[bytes$] = bytes;
    ;
  }).prototype = blob.Blob.prototype;
  dart.addTypeTests(blob.Blob);
  dart.setLibraryUri(blob.Blob, "package:cloud_firestore_platform_interface/src/blob.dart");
  dart.setFieldSignature(blob.Blob, () => ({
    __proto__: dart.getFields(blob.Blob.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  dart.defineExtensionMethods(blob.Blob, ['_equals']);
  dart.defineExtensionAccessors(blob.Blob, ['hashCode']);
  const _actions = dart.privateName(method_channel_write_batch, "_actions");
  const _committed = dart.privateName(method_channel_write_batch, "_committed");
  const _firestore$ = dart.privateName(method_channel_write_batch, "_firestore");
  const _handle = dart.privateName(method_channel_write_batch, "_handle");
  const _assertNotCommitted = dart.privateName(method_channel_write_batch, "_assertNotCommitted");
  method_channel_write_batch.MethodChannelWriteBatch = class MethodChannelWriteBatch extends write_batch.WriteBatchPlatform {
    commit() {
      return async.async(dart.void, (function* commit() {
        this[_assertNotCommitted]();
        this[_committed] = true;
        yield async.Future.wait(dart.dynamic, this[_actions]);
        yield method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "WriteBatch#commit", new (IdentityMapOfString$dynamic()).from(["handle", (yield this[_handle])]));
      }).bind(this));
    }
    delete(document) {
      this[_assertNotCommitted]();
      this[_handle].then(core.Null, dart.fn(handle => {
        this[_actions][$add](method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "WriteBatch#delete", new (IdentityMapOfString$dynamic()).from(["app", this[_firestore$].app.name, "handle", handle, "path", document.path])));
      }, dynamicToNull()));
    }
    setData(document, data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      this[_assertNotCommitted]();
      this[_handle].then(core.Null, dart.fn(handle => {
        this[_actions][$add](method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "WriteBatch#setData", new (IdentityMapOfString$dynamic()).from(["app", this[_firestore$].app.name, "handle", handle, "path", document.path, "data", data, "options", new (IdentityMapOfString$bool()).from(["merge", merge])])));
      }, dynamicToNull()));
    }
    updateData(document, data) {
      this[_assertNotCommitted]();
      this[_handle].then(core.Null, dart.fn(handle => {
        this[_actions][$add](method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "WriteBatch#updateData", new (IdentityMapOfString$dynamic()).from(["app", this[_firestore$].app.name, "handle", handle, "path", document.path, "data", data])));
      }, dynamicToNull()));
    }
    [_assertNotCommitted]() {
      if (dart.test(this[_committed])) {
        dart.throw(new core.StateError.new("This batch has already been committed and can no longer be changed."));
      }
    }
  };
  (method_channel_write_batch.MethodChannelWriteBatch.new = function(_firestore) {
    this[_actions] = JSArrayOfFuture().of([]);
    this[_committed] = false;
    this[_firestore$] = _firestore;
    this[_handle] = method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.dynamic, "WriteBatch#create", new (IdentityMapOfString$dynamic()).from(["app", _firestore.app.name]));
    method_channel_write_batch.MethodChannelWriteBatch.__proto__.new.call(this);
    ;
  }).prototype = method_channel_write_batch.MethodChannelWriteBatch.prototype;
  dart.addTypeTests(method_channel_write_batch.MethodChannelWriteBatch);
  dart.setMethodSignature(method_channel_write_batch.MethodChannelWriteBatch, () => ({
    __proto__: dart.getMethods(method_channel_write_batch.MethodChannelWriteBatch.__proto__),
    [_assertNotCommitted]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(method_channel_write_batch.MethodChannelWriteBatch, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_write_batch.dart");
  dart.setFieldSignature(method_channel_write_batch.MethodChannelWriteBatch, () => ({
    __proto__: dart.getFields(method_channel_write_batch.MethodChannelWriteBatch.__proto__),
    [_firestore$]: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    [_handle]: dart.fieldType(async.Future),
    [_actions]: dart.finalFieldType(core.List$(async.Future)),
    [_committed]: dart.fieldType(core.bool)
  }));
  const _transactionId = dart.privateName(method_channel_transaction, "_transactionId");
  const appName$ = dart.privateName(method_channel_transaction, "MethodChannelTransaction.appName");
  method_channel_transaction.MethodChannelTransaction = class MethodChannelTransaction extends transaction.TransactionPlatform {
    get appName() {
      return this[appName$];
    }
    set appName(value) {
      super.appName = value;
    }
    doGet(documentReference) {
      return async.async(document_snapshot.DocumentSnapshotPlatform, (function* doGet() {
        let t0;
        let result = (yield method_channel_firestore.MethodChannelFirestore.channel.invokeMapMethod(core.String, dart.dynamic, "Transaction#get", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "transactionId", this[_transactionId], "path", documentReference.path])));
        if (result != null) {
          return new document_snapshot.DocumentSnapshotPlatform.new(documentReference.path, MapOfString$dynamic()._check((t0 = result[$_get]("data"), t0 == null ? null : dart.dgsend(t0, [core.String, dart.dynamic], 'cast', []))), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(result[$_get]("metadata"), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(result[$_get]("metadata"), '_get', ["isFromCache"]))), this.firestore);
        } else {
          return null;
        }
      }).bind(this));
    }
    doDelete(documentReference) {
      return async.async(dart.void, (function* doDelete() {
        return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "Transaction#delete", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "transactionId", this[_transactionId], "path", documentReference.path]));
      }).bind(this));
    }
    doUpdate(documentReference, data) {
      return async.async(dart.void, (function* doUpdate() {
        return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "Transaction#update", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "transactionId", this[_transactionId], "path", documentReference.path, "data", data]));
      }).bind(this));
    }
    doSet(documentReference, data) {
      return async.async(dart.void, (function* doSet() {
        return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "Transaction#set", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "transactionId", this[_transactionId], "path", documentReference.path, "data", data]));
      }).bind(this));
    }
  };
  (method_channel_transaction.MethodChannelTransaction.new = function(transactionId, appName) {
    this[appName$] = appName;
    this[_transactionId] = transactionId;
    method_channel_transaction.MethodChannelTransaction.__proto__.new.call(this, appName == firebase_app.FirebaseApp.defaultAppName ? cloud_firestore_platform_interface.FirestorePlatform.instance : cloud_firestore_platform_interface.FirestorePlatform.instanceFor({app: new firebase_app.FirebaseApp.new({name: appName})}));
    ;
  }).prototype = method_channel_transaction.MethodChannelTransaction.prototype;
  dart.addTypeTests(method_channel_transaction.MethodChannelTransaction);
  dart.setLibraryUri(method_channel_transaction.MethodChannelTransaction, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_transaction.dart");
  dart.setFieldSignature(method_channel_transaction.MethodChannelTransaction, () => ({
    __proto__: dart.getFields(method_channel_transaction.MethodChannelTransaction.__proto__),
    appName: dart.finalFieldType(core.String),
    [_transactionId]: dart.fieldType(core.int)
  }));
  method_channel_query_snapshot.MethodChannelQuerySnapshot = class MethodChannelQuerySnapshot extends query_snapshot.QuerySnapshotPlatform {};
  (method_channel_query_snapshot.MethodChannelQuerySnapshot.new = function(data, firestore) {
    method_channel_query_snapshot.MethodChannelQuerySnapshot.__proto__.new.call(this, ListOfDocumentSnapshotPlatform().generate(core.int._check(dart.dload(data[$_get]("documents"), 'length')), dart.fn(index => new document_snapshot.DocumentSnapshotPlatform.new(core.String._check(dart.dsend(data[$_get]("paths"), '_get', [index])), maps.asStringKeyedMap(core.Map._check(dart.dsend(data[$_get]("documents"), '_get', [index]))), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(dart.dsend(data[$_get]("metadatas"), '_get', [index]), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(dart.dsend(data[$_get]("metadatas"), '_get', [index]), '_get', ["isFromCache"]))), firestore), intToDocumentSnapshotPlatform())), ListOfDocumentChangePlatform().generate(core.int._check(dart.dload(data[$_get]("documentChanges"), 'length')), dart.fn(index => new method_channel_document_change.MethodChannelDocumentChange.new(core.Map._check(dart.dsend(data[$_get]("documentChanges"), '_get', [index])), firestore), intToMethodChannelDocumentChange())), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["isFromCache"]))));
    ;
  }).prototype = method_channel_query_snapshot.MethodChannelQuerySnapshot.prototype;
  dart.addTypeTests(method_channel_query_snapshot.MethodChannelQuerySnapshot);
  dart.setLibraryUri(method_channel_query_snapshot.MethodChannelQuerySnapshot, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query_snapshot.dart");
  method_channel_document_change.MethodChannelDocumentChange = class MethodChannelDocumentChange extends document_change.DocumentChangePlatform {};
  (method_channel_document_change.MethodChannelDocumentChange.new = function(data, firestore) {
    method_channel_document_change.MethodChannelDocumentChange.__proto__.new.call(this, document_change.DocumentChangeType.values[$firstWhere](dart.fn(type => core.identical(dart.toString(type), data[$_get]("type")), DocumentChangeTypeTobool())), core.int._check(data[$_get]("oldIndex")), core.int._check(data[$_get]("newIndex")), new document_snapshot.DocumentSnapshotPlatform.new(core.String._check(data[$_get]("path")), maps.asStringKeyedMap(core.Map._check(data[$_get]("document"))), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["isFromCache"]))), firestore));
    ;
  }).prototype = method_channel_document_change.MethodChannelDocumentChange.prototype;
  dart.addTypeTests(method_channel_document_change.MethodChannelDocumentChange);
  dart.setLibraryUri(method_channel_document_change.MethodChannelDocumentChange, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_change.dart");
  let C24;
  const ListEquality__elementEquality = dart.privateName(equality, "ListEquality._elementEquality");
  let C23;
  method_channel_query.MethodChannelQuery = class MethodChannelQuery extends query.QueryPlatform {
    copyWithParameters(parameters) {
      let t0;
      return new method_channel_query.MethodChannelQuery.new({firestore: this.firestore, isCollectionGroup: this.isCollectionGroup, pathComponents: this.pathComponents, parameters: MapOfString$dynamic().unmodifiable((t0 = LinkedHashMapOfString$dynamic().from(this.parameters), t0[$addAll](parameters), t0))});
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      if (!(includeMetadataChanges != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 48, 12, "includeMetadataChanges != null");
      let _handle = null;
      let controller = null;
      controller = StreamControllerOfQuerySnapshotPlatform().broadcast({onListen: dart.fn(() => {
          _handle = method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(core.int, "Query#addSnapshotListener", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "isCollectionGroup", this.isCollectionGroup, "parameters", this.parameters, "includeMetadataChanges", includeMetadataChanges])).then(core.int, dart.fn(result => FutureOrOfint()._check(result), dynamicToFutureOrOfint()));
          _handle.then(core.Null, dart.fn(handle => {
            method_channel_firestore.MethodChannelFirestore.queryObservers[$_set](handle, controller);
          }, intToNull()));
        }, VoidToNull()), onCancel: dart.fn(() => {
          _handle.then(core.Null, dart.fn(handle => async.async(core.Null, function*() {
            yield method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "removeListener", new (IdentityMapOfString$dynamic()).from(["handle", handle]));
            method_channel_firestore.MethodChannelFirestore.queryObservers[$remove](handle);
          }), intToFutureOfNull()));
        }, VoidToNull())});
      return controller.stream;
    }
    getDocuments(opts) {
      let source = opts && 'source' in opts ? opts.source : C13 || CT.C13;
      return async.async(query_snapshot.QuerySnapshotPlatform, (function* getDocuments() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 85, 12, "source != null");
        let data = (yield method_channel_firestore.MethodChannelFirestore.channel.invokeMapMethod(core.String, dart.dynamic, "Query#getDocuments", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "isCollectionGroup", this.isCollectionGroup, "parameters", this.parameters, "source", source$0.getSourceString(source)])));
        return new method_channel_query_snapshot.MethodChannelQuerySnapshot.new(data, this.firestore);
      }).bind(this));
    }
    buildArguments() {
      let t0;
      t0 = LinkedHashMapOfString$dynamic().from(this.parameters);
      t0[$addAll](new (IdentityMapOfString$dynamic()).from(["path", this.path]));
      return t0;
    }
    where(field, opts) {
      let isEqualTo = opts && 'isEqualTo' in opts ? opts.isEqualTo : null;
      let isLessThan = opts && 'isLessThan' in opts ? opts.isLessThan : null;
      let isLessThanOrEqualTo = opts && 'isLessThanOrEqualTo' in opts ? opts.isLessThanOrEqualTo : null;
      let isGreaterThan = opts && 'isGreaterThan' in opts ? opts.isGreaterThan : null;
      let isGreaterThanOrEqualTo = opts && 'isGreaterThanOrEqualTo' in opts ? opts.isGreaterThanOrEqualTo : null;
      let arrayContains = opts && 'arrayContains' in opts ? opts.arrayContains : null;
      let arrayContainsAny = opts && 'arrayContainsAny' in opts ? opts.arrayContainsAny : null;
      let whereIn = opts && 'whereIn' in opts ? opts.whereIn : null;
      let isNull = opts && 'isNull' in opts ? opts.isNull : null;
      if (!(typeof field == 'string' || field_path.FieldPath.is(field))) dart.assertFailed("Supported [field] types are [String] and [FieldPath].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 119, 12, "field is String || field is FieldPath");
      let equality = C23 || CT.C23;
      let conditions = ListOfList().from(core.Iterable._check(this.parameters[$_get]("where")));
      function addCondition(field, operator, value) {
        let condition = [field, operator, value];
        if (!dart.test(conditions[$where](dart.fn(item => equality.equals(condition, item), ListTobool()))[$isEmpty])) dart.assertFailed("Condition " + dart.str(condition) + " already exists in this query.", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 129, 11, "conditions\n              .where((List<dynamic> item) => equality.equals(condition, item))\n              .isEmpty");
        conditions[$add](condition);
      }
      dart.fn(addCondition, dynamicAndStringAnddynamicTovoid());
      if (isEqualTo != null) addCondition(field, "==", isEqualTo);
      if (isLessThan != null) addCondition(field, "<", isLessThan);
      if (isLessThanOrEqualTo != null) {
        addCondition(field, "<=", isLessThanOrEqualTo);
      }
      if (isGreaterThan != null) addCondition(field, ">", isGreaterThan);
      if (isGreaterThanOrEqualTo != null) {
        addCondition(field, ">=", isGreaterThanOrEqualTo);
      }
      if (arrayContains != null) {
        addCondition(field, "array-contains", arrayContains);
      }
      if (arrayContainsAny != null) {
        addCondition(field, "array-contains-any", arrayContainsAny);
      }
      if (whereIn != null) addCondition(field, "in", whereIn);
      if (isNull != null) {
        if (!dart.test(isNull)) dart.assertFailed("isNull can only be set to true. " + "Use isEqualTo to filter on non-null values.", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 154, 11, "isNull");
        addCondition(field, "==", null);
      }
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["where", conditions]));
    }
    orderBy(field, opts) {
      let descending = opts && 'descending' in opts ? opts.descending : false;
      if (!(field != null && descending != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 168, 12, "field != null && descending != null");
      if (!(typeof field == 'string' || field_path.FieldPath.is(field))) dart.assertFailed("Supported [field] types are [String] and [FieldPath].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 169, 12, "field is String || field is FieldPath");
      let orders = ListOfList().from(core.Iterable._check(this.parameters[$_get]("orderBy")));
      let order = [field, descending];
      if (!dart.test(orders[$where](dart.fn(item => dart.equals(field, item[$_get](0)), ListTobool()))[$isEmpty])) dart.assertFailed("OrderBy " + dart.str(field) + " already exists in this query", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 176, 12, "orders.where((List<dynamic> item) => field == item[0]).isEmpty");
      if (!dart.test(dart.fn(() => {
        if (dart.equals(field, field_path.FieldPath.documentId)) {
          return !(dart.test(this.parameters[$containsKey]("startAfterDocument")) || dart.test(this.parameters[$containsKey]("startAtDocument")) || dart.test(this.parameters[$containsKey]("endAfterDocument")) || dart.test(this.parameters[$containsKey]("endAtDocument")));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed("{start/end}{At/After/Before}Document order by document id themselves. " + "Hence, you may not use an order by [FieldPath.documentId] when using any of these methods for a query.", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 179, 12, "() {\n      if (field == FieldPath.documentId) {\n        return !(parameters.containsKey('startAfterDocument') ||\n            parameters.containsKey('startAtDocument') ||\n            parameters.containsKey('endAfterDocument') ||\n            parameters.containsKey('endAtDocument'));\n      }\n      return true;\n    }()");
      orders[$add](order);
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["orderBy", orders]));
    }
    startAfterDocument(documentSnapshot) {
      if (!(documentSnapshot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 197, 12, "documentSnapshot != null");
      if (!!dart.test(this.parameters[$containsKey]("startAfter"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 198, 12, "!parameters.containsKey('startAfter')");
      if (!!dart.test(this.parameters[$containsKey]("startAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 199, 12, "!parameters.containsKey('startAt')");
      if (!!dart.test(this.parameters[$containsKey]("startAfterDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 200, 12, "!parameters.containsKey('startAfterDocument')");
      if (!!dart.test(this.parameters[$containsKey]("startAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 201, 12, "!parameters.containsKey('startAtDocument')");
      if (!dart.test(ListOfList().from(core.Iterable._check(this.parameters[$_get]("orderBy")))[$where](dart.fn(item => dart.equals(item[$_get](0), field_path.FieldPath.documentId), ListTobool()))[$isEmpty])) dart.assertFailed("[startAfterDocument] orders by document id itself. " + "Hence, you may not use an order by [FieldPath.documentId] when using [startAfterDocument].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 203, 9, "List<List<dynamic>>.from(parameters['orderBy'])\n            .where((List<dynamic> item) => item[0] == FieldPath.documentId)\n            .isEmpty");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["startAfterDocument", new (IdentityMapOfString$dynamic()).from(["id", documentSnapshot.documentID, "path", documentSnapshot.reference.path, "data", documentSnapshot.data])]));
    }
    startAtDocument(documentSnapshot) {
      if (!(documentSnapshot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 219, 12, "documentSnapshot != null");
      if (!!dart.test(this.parameters[$containsKey]("startAfter"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 220, 12, "!parameters.containsKey('startAfter')");
      if (!!dart.test(this.parameters[$containsKey]("startAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 221, 12, "!parameters.containsKey('startAt')");
      if (!!dart.test(this.parameters[$containsKey]("startAfterDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 222, 12, "!parameters.containsKey('startAfterDocument')");
      if (!!dart.test(this.parameters[$containsKey]("startAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 223, 12, "!parameters.containsKey('startAtDocument')");
      if (!dart.test(ListOfList().from(core.Iterable._check(this.parameters[$_get]("orderBy")))[$where](dart.fn(item => dart.equals(item[$_get](0), field_path.FieldPath.documentId), ListTobool()))[$isEmpty])) dart.assertFailed("[startAtDocument] orders by document id itself. " + "Hence, you may not use an order by [FieldPath.documentId] when using [startAtDocument].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 225, 9, "List<List<dynamic>>.from(parameters['orderBy'])\n            .where((List<dynamic> item) => item[0] == FieldPath.documentId)\n            .isEmpty");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["startAtDocument", new (IdentityMapOfString$dynamic()).from(["id", documentSnapshot.documentID, "path", documentSnapshot.reference.path, "data", documentSnapshot.data])]));
    }
    startAfter(values) {
      if (!(values != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 241, 12, "values != null");
      if (!!dart.test(this.parameters[$containsKey]("startAfter"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 242, 12, "!parameters.containsKey('startAfter')");
      if (!!dart.test(this.parameters[$containsKey]("startAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 243, 12, "!parameters.containsKey('startAt')");
      if (!!dart.test(this.parameters[$containsKey]("startAfterDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 244, 12, "!parameters.containsKey('startAfterDocument')");
      if (!!dart.test(this.parameters[$containsKey]("startAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 245, 12, "!parameters.containsKey('startAtDocument')");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["startAfter", values]));
    }
    startAt(values) {
      if (!(values != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 251, 12, "values != null");
      if (!!dart.test(this.parameters[$containsKey]("startAfter"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 252, 12, "!parameters.containsKey('startAfter')");
      if (!!dart.test(this.parameters[$containsKey]("startAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 253, 12, "!parameters.containsKey('startAt')");
      if (!!dart.test(this.parameters[$containsKey]("startAfterDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 254, 12, "!parameters.containsKey('startAfterDocument')");
      if (!!dart.test(this.parameters[$containsKey]("startAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 255, 12, "!parameters.containsKey('startAtDocument')");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["startAt", values]));
    }
    endAtDocument(documentSnapshot) {
      if (!(documentSnapshot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 261, 12, "documentSnapshot != null");
      if (!!dart.test(this.parameters[$containsKey]("endBefore"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 262, 12, "!parameters.containsKey('endBefore')");
      if (!!dart.test(this.parameters[$containsKey]("endAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 263, 12, "!parameters.containsKey('endAt')");
      if (!!dart.test(this.parameters[$containsKey]("endBeforeDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 264, 12, "!parameters.containsKey('endBeforeDocument')");
      if (!!dart.test(this.parameters[$containsKey]("endAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 265, 12, "!parameters.containsKey('endAtDocument')");
      if (!dart.test(ListOfList().from(core.Iterable._check(this.parameters[$_get]("orderBy")))[$where](dart.fn(item => dart.equals(item[$_get](0), field_path.FieldPath.documentId), ListTobool()))[$isEmpty])) dart.assertFailed("[endAtDocument] orders by document id itself. " + "Hence, you may not use an order by [FieldPath.documentId] when using [endAtDocument].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 267, 9, "List<List<dynamic>>.from(parameters['orderBy'])\n            .where((List<dynamic> item) => item[0] == FieldPath.documentId)\n            .isEmpty");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["endAtDocument", new (IdentityMapOfString$dynamic()).from(["id", documentSnapshot.documentID, "path", documentSnapshot.reference.path, "data", documentSnapshot.data])]));
    }
    endAt(values) {
      if (!(values != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 284, 12, "values != null");
      if (!!dart.test(this.parameters[$containsKey]("endBefore"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 285, 12, "!parameters.containsKey('endBefore')");
      if (!!dart.test(this.parameters[$containsKey]("endAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 286, 12, "!parameters.containsKey('endAt')");
      if (!!dart.test(this.parameters[$containsKey]("endBeforeDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 287, 12, "!parameters.containsKey('endBeforeDocument')");
      if (!!dart.test(this.parameters[$containsKey]("endAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 288, 12, "!parameters.containsKey('endAtDocument')");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["endAt", values]));
    }
    endBeforeDocument(documentSnapshot) {
      if (!(documentSnapshot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 294, 12, "documentSnapshot != null");
      if (!!dart.test(this.parameters[$containsKey]("endBefore"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 295, 12, "!parameters.containsKey('endBefore')");
      if (!!dart.test(this.parameters[$containsKey]("endAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 296, 12, "!parameters.containsKey('endAt')");
      if (!!dart.test(this.parameters[$containsKey]("endBeforeDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 297, 12, "!parameters.containsKey('endBeforeDocument')");
      if (!!dart.test(this.parameters[$containsKey]("endAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 298, 12, "!parameters.containsKey('endAtDocument')");
      if (!dart.test(ListOfList().from(core.Iterable._check(this.parameters[$_get]("orderBy")))[$where](dart.fn(item => dart.equals(item[$_get](0), field_path.FieldPath.documentId), ListTobool()))[$isEmpty])) dart.assertFailed("[endBeforeDocument] orders by document id itself. " + "Hence, you may not use an order by [FieldPath.documentId] when using [endBeforeDocument].", "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 300, 9, "List<List<dynamic>>.from(parameters['orderBy'])\n            .where((List<dynamic> item) => item[0] == FieldPath.documentId)\n            .isEmpty");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["endBeforeDocument", new (IdentityMapOfString$dynamic()).from(["id", documentSnapshot.documentID, "path", documentSnapshot.reference.path, "data", documentSnapshot.data])]));
    }
    endBefore(values) {
      if (!(values != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 316, 12, "values != null");
      if (!!dart.test(this.parameters[$containsKey]("endBefore"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 317, 12, "!parameters.containsKey('endBefore')");
      if (!!dart.test(this.parameters[$containsKey]("endAt"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 318, 12, "!parameters.containsKey('endAt')");
      if (!!dart.test(this.parameters[$containsKey]("endBeforeDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 319, 12, "!parameters.containsKey('endBeforeDocument')");
      if (!!dart.test(this.parameters[$containsKey]("endAtDocument"))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart", 320, 12, "!parameters.containsKey('endAtDocument')");
      return this.copyWithParameters(new (IdentityMapOfString$dynamic()).from(["endBefore", values]));
    }
  };
  (method_channel_query.MethodChannelQuery.new = function(opts) {
    let firestore = opts && 'firestore' in opts ? opts.firestore : null;
    let pathComponents = opts && 'pathComponents' in opts ? opts.pathComponents : null;
    let isCollectionGroup = opts && 'isCollectionGroup' in opts ? opts.isCollectionGroup : false;
    let parameters = opts && 'parameters' in opts ? opts.parameters : null;
    method_channel_query.MethodChannelQuery.__proto__.new.call(this, {firestore: firestore, pathComponents: pathComponents, isCollectionGroup: isCollectionGroup, parameters: parameters});
    ;
  }).prototype = method_channel_query.MethodChannelQuery.prototype;
  dart.addTypeTests(method_channel_query.MethodChannelQuery);
  dart.setLibraryUri(method_channel_query.MethodChannelQuery, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart");
  source$0.getSourceString = function getSourceString(source) {
    if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/utils/source.dart", 9, 10, "source != null");
    if (dart.equals(source, source$.Source.server)) {
      return "server";
    }
    if (dart.equals(source, source$.Source.cache)) {
      return "cache";
    }
    return "default";
  };
  method_channel_document_reference.MethodChannelDocumentReference = class MethodChannelDocumentReference extends document_reference.DocumentReferencePlatform {
    setData(data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "DocumentReference#setData", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "data", data, "options", new (IdentityMapOfString$bool()).from(["merge", merge])]));
    }
    updateData(data) {
      return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "DocumentReference#updateData", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "data", data]));
    }
    get(opts) {
      let source = opts && 'source' in opts ? opts.source : C13 || CT.C13;
      return async.async(document_snapshot.DocumentSnapshotPlatform, (function* get() {
        let data = (yield method_channel_firestore.MethodChannelFirestore.channel.invokeMapMethod(core.String, dart.dynamic, "DocumentReference#get", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "source", source$0.getSourceString(source)])));
        return new document_snapshot.DocumentSnapshotPlatform.new(core.String._check(data[$_get]("path")), maps.asStringKeyedMap(core.Map._check(data[$_get]("data"))), new snapshot_metadata.SnapshotMetadataPlatform.new(core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["hasPendingWrites"])), core.bool._check(dart.dsend(data[$_get]("metadata"), '_get', ["isFromCache"]))), this.firestore);
      }).bind(this));
    }
    delete() {
      return method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "DocumentReference#delete", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path]));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      if (!(includeMetadataChanges != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart", 85, 12, "includeMetadataChanges != null");
      let _handle = null;
      let controller = null;
      controller = StreamControllerOfDocumentSnapshotPlatform().broadcast({onListen: dart.fn(() => {
          _handle = method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(core.int, "DocumentReference#addSnapshotListener", new (IdentityMapOfString$dynamic()).from(["app", this.firestore.app.name, "path", this.path, "includeMetadataChanges", includeMetadataChanges])).then(core.int, dart.fn(result => FutureOrOfint()._check(result), dynamicToFutureOrOfint()));
          _handle.then(core.Null, dart.fn(handle => {
            method_channel_firestore.MethodChannelFirestore.documentObservers[$_set](handle, controller);
          }, intToNull()));
        }, VoidToNull()), onCancel: dart.fn(() => {
          _handle.then(core.Null, dart.fn(handle => async.async(core.Null, function*() {
            yield method_channel_firestore.MethodChannelFirestore.channel.invokeMethod(dart.void, "removeListener", new (IdentityMapOfString$dynamic()).from(["handle", handle]));
            method_channel_firestore.MethodChannelFirestore.documentObservers[$remove](handle);
          }), intToFutureOfNull()));
        }, VoidToNull())});
      return controller.stream;
    }
  };
  (method_channel_document_reference.MethodChannelDocumentReference.new = function(firestore, pathComponents) {
    if (!(firestore != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart", 20, 16, "firestore != null");
    method_channel_document_reference.MethodChannelDocumentReference.__proto__.new.call(this, firestore, pathComponents);
    ;
  }).prototype = method_channel_document_reference.MethodChannelDocumentReference.prototype;
  dart.addTypeTests(method_channel_document_reference.MethodChannelDocumentReference);
  dart.setLibraryUri(method_channel_document_reference.MethodChannelDocumentReference, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart");
  method_channel_collection_reference.MethodChannelCollectionReference = class MethodChannelCollectionReference extends method_channel_query.MethodChannelQuery {
    get id() {
      return dart.test(this.pathComponents[$isEmpty]) ? null : this.pathComponents[$last];
    }
    parent() {
      let t0;
      if (dart.notNull(this.pathComponents[$length]) < 2) {
        return null;
      }
      return new method_channel_document_reference.MethodChannelDocumentReference.new(this.firestore, (t0 = ListOfString().from(this.pathComponents), t0[$removeLast](), t0));
    }
    document(path = null) {
      let t0, t0$;
      let childPath = null;
      if (path == null) {
        let key = auto_id_generator.AutoIdGenerator.autoId();
        childPath = (t0 = ListOfString().from(this.pathComponents), t0[$add](key), t0);
      } else {
        childPath = (t0$ = ListOfString().from(this.pathComponents), t0$[$addAll](path[$split]("/")), t0$);
      }
      return new method_channel_document_reference.MethodChannelDocumentReference.new(this.firestore, childPath);
    }
    add(data) {
      return async.async(document_reference.DocumentReferencePlatform, (function* add() {
        let newDocument = this.document();
        yield newDocument.setData(data);
        return newDocument;
      }).bind(this));
    }
  };
  (method_channel_collection_reference.MethodChannelCollectionReference.new = function(firestore, pathComponents) {
    method_channel_collection_reference.MethodChannelCollectionReference.__proto__.new.call(this, {firestore: firestore, pathComponents: pathComponents});
    ;
  }).prototype = method_channel_collection_reference.MethodChannelCollectionReference.prototype;
  dart.addTypeTests(method_channel_collection_reference.MethodChannelCollectionReference);
  method_channel_collection_reference.MethodChannelCollectionReference[dart.implements] = () => [collection_reference.CollectionReferencePlatform];
  dart.setMethodSignature(method_channel_collection_reference.MethodChannelCollectionReference, () => ({
    __proto__: dart.getMethods(method_channel_collection_reference.MethodChannelCollectionReference.__proto__),
    parent: dart.fnType(document_reference.DocumentReferencePlatform, []),
    document: dart.fnType(document_reference.DocumentReferencePlatform, [], [core.String]),
    add: dart.fnType(async.Future$(document_reference.DocumentReferencePlatform), [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setGetterSignature(method_channel_collection_reference.MethodChannelCollectionReference, () => ({
    __proto__: dart.getGetters(method_channel_collection_reference.MethodChannelCollectionReference.__proto__),
    id: core.String
  }));
  dart.setLibraryUri(method_channel_collection_reference.MethodChannelCollectionReference, "package:cloud_firestore_platform_interface/src/method_channel/method_channel_collection_reference.dart");
  auto_id_generator.AutoIdGenerator = class AutoIdGenerator extends core.Object {
    static autoId() {
      let stringBuffer = new core.StringBuffer.new();
      let maxRandom = auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET.length;
      for (let i = 0; i < 20; i = i + 1) {
        stringBuffer.write(auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET[$_get](auto_id_generator.AutoIdGenerator._random.nextInt(maxRandom)));
      }
      return stringBuffer.toString();
    }
  };
  (auto_id_generator.AutoIdGenerator.new = function() {
    ;
  }).prototype = auto_id_generator.AutoIdGenerator.prototype;
  dart.addTypeTests(auto_id_generator.AutoIdGenerator);
  dart.setLibraryUri(auto_id_generator.AutoIdGenerator, "package:cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart");
  dart.defineLazy(auto_id_generator.AutoIdGenerator, {
    /*auto_id_generator.AutoIdGenerator._AUTO_ID_LENGTH*/get _AUTO_ID_LENGTH() {
      return 20;
    },
    /*auto_id_generator.AutoIdGenerator._AUTO_ID_ALPHABET*/get _AUTO_ID_ALPHABET() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    },
    /*auto_id_generator.AutoIdGenerator._random*/get _random() {
      return math.Random.new();
    }
  });
  dart.trackLibraries("packages/cloud_firestore_platform_interface/cloud_firestore_platform_interface", {
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_firestore.dart": method_channel_firestore,
    "package:cloud_firestore_platform_interface/src/method_channel/utils/maps.dart": maps,
    "package:cloud_firestore_platform_interface/src/method_channel/utils/firestore_message_codec.dart": firestore_message_codec,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value.dart": method_channel_field_value,
    "package:cloud_firestore_platform_interface/cloud_firestore_platform_interface.dart": cloud_firestore_platform_interface,
    "package:cloud_firestore_platform_interface/src/platform_interface/write_batch.dart": write_batch,
    "package:cloud_firestore_platform_interface/src/platform_interface/transaction.dart": transaction,
    "package:cloud_firestore_platform_interface/src/platform_interface/query_snapshot.dart": query_snapshot,
    "package:cloud_firestore_platform_interface/src/platform_interface/query.dart": query,
    "package:cloud_firestore_platform_interface/src/platform_interface/field_value_factory.dart": field_value_factory,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_field_value_factory.dart": method_channel_field_value_factory,
    "package:cloud_firestore_platform_interface/src/platform_interface/field_value.dart": field_value,
    "package:cloud_firestore_platform_interface/src/platform_interface/document_reference.dart": document_reference,
    "package:cloud_firestore_platform_interface/src/platform_interface/document_change.dart": document_change,
    "package:cloud_firestore_platform_interface/src/platform_interface/collection_reference.dart": collection_reference,
    "package:cloud_firestore_platform_interface/src/timestamp.dart": timestamp,
    "package:cloud_firestore_platform_interface/src/source.dart": source$,
    "package:cloud_firestore_platform_interface/src/snapshot_metadata.dart": snapshot_metadata,
    "package:cloud_firestore_platform_interface/src/geo_point.dart": geo_point,
    "package:cloud_firestore_platform_interface/src/field_path.dart": field_path,
    "package:cloud_firestore_platform_interface/src/internal/field_path_type.dart": field_path_type,
    "package:cloud_firestore_platform_interface/src/document_snapshot.dart": document_snapshot,
    "package:cloud_firestore_platform_interface/src/blob.dart": blob,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_write_batch.dart": method_channel_write_batch,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_transaction.dart": method_channel_transaction,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query_snapshot.dart": method_channel_query_snapshot,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_change.dart": method_channel_document_change,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_query.dart": method_channel_query,
    "package:cloud_firestore_platform_interface/src/method_channel/utils/source.dart": source$0,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_document_reference.dart": method_channel_document_reference,
    "package:cloud_firestore_platform_interface/src/method_channel/method_channel_collection_reference.dart": method_channel_collection_reference,
    "package:cloud_firestore_platform_interface/src/method_channel/utils/auto_id_generator.dart": auto_id_generator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cloud_firestore_platform_interface.dart","src/method_channel/method_channel_firestore.dart","src/method_channel/utils/maps.dart","src/method_channel/utils/firestore_message_codec.dart","src/method_channel/method_channel_field_value.dart","src/platform_interface/write_batch.dart","src/platform_interface/transaction.dart","src/platform_interface/query_snapshot.dart","src/platform_interface/query.dart","src/platform_interface/field_value_factory.dart","src/method_channel/method_channel_field_value_factory.dart","src/platform_interface/field_value.dart","src/platform_interface/document_reference.dart","src/platform_interface/document_change.dart","src/platform_interface/collection_reference.dart","src/timestamp.dart","src/source.dart","src/snapshot_metadata.dart","src/geo_point.dart","src/field_path.dart","src/internal/field_path_type.dart","src/document_snapshot.dart","src/blob.dart","src/method_channel/method_channel_write_batch.dart","src/method_channel/method_channel_transaction.dart","src/method_channel/method_channel_query_snapshot.dart","src/method_channel/method_channel_document_change.dart","src/method_channel/method_channel_query.dart","src/method_channel/utils/source.dart","src/method_channel/method_channel_document_reference.dart","src/method_channel/method_channel_collection_reference.dart","src/method_channel/utils/auto_id_generator.dart"],"names":[],"mappings":"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","file":"cloud_firestore_platform_interface.ddc.js"}');
  // Exports:
  return {
    src__method_channel__method_channel_firestore: method_channel_firestore,
    src__method_channel__utils__maps: maps,
    src__method_channel__utils__firestore_message_codec: firestore_message_codec,
    src__method_channel__method_channel_field_value: method_channel_field_value,
    cloud_firestore_platform_interface: cloud_firestore_platform_interface,
    src__platform_interface__write_batch: write_batch,
    src__platform_interface__transaction: transaction,
    src__platform_interface__query_snapshot: query_snapshot,
    src__platform_interface__query: query,
    src__platform_interface__field_value_factory: field_value_factory,
    src__method_channel__method_channel_field_value_factory: method_channel_field_value_factory,
    src__platform_interface__field_value: field_value,
    src__platform_interface__document_reference: document_reference,
    src__platform_interface__document_change: document_change,
    src__platform_interface__collection_reference: collection_reference,
    src__timestamp: timestamp,
    src__source: source$,
    src__snapshot_metadata: snapshot_metadata,
    src__geo_point: geo_point,
    src__field_path: field_path,
    src__internal__field_path_type: field_path_type,
    src__document_snapshot: document_snapshot,
    src__blob: blob,
    src__method_channel__method_channel_write_batch: method_channel_write_batch,
    src__method_channel__method_channel_transaction: method_channel_transaction,
    src__method_channel__method_channel_query_snapshot: method_channel_query_snapshot,
    src__method_channel__method_channel_document_change: method_channel_document_change,
    src__method_channel__method_channel_query: method_channel_query,
    src__method_channel__utils__source: source$0,
    src__method_channel__method_channel_document_reference: method_channel_document_reference,
    src__method_channel__method_channel_collection_reference: method_channel_collection_reference,
    src__method_channel__utils__auto_id_generator: auto_id_generator
  };
});

//# sourceMappingURL=cloud_firestore_platform_interface.ddc.js.map
