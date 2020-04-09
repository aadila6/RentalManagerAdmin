define(['dart_sdk', 'packages/firebase/src/app', 'packages/cloud_firestore_platform_interface/cloud_firestore_platform_interface', 'packages/firebase/firebase', 'packages/firebase_core/firebase_core'], function(dart_sdk, packages__firebase__src__app, packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface, packages__firebase__firebase, packages__firebase_core__firebase_core) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firestore = packages__firebase__src__app.src__firestore;
  const field_value = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__field_value;
  const timestamp = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__timestamp;
  const geo_point = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__geo_point;
  const blob = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__blob;
  const cloud_firestore_platform_interface = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.cloud_firestore_platform_interface;
  const source = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__source;
  const document_snapshot = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__document_snapshot;
  const document_reference = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__document_reference;
  const snapshot_metadata = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__snapshot_metadata;
  const collection_reference = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__collection_reference;
  const query_snapshot = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__query_snapshot;
  const field_path = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__field_path;
  const document_change = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__document_change;
  const query = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__query;
  const field_value_factory = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__field_value_factory;
  const write_batch = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__write_batch;
  const transaction = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__transaction;
  const top_level = packages__firebase__firebase.src__top_level;
  const firebase_app = packages__firebase_core__firebase_core.src__firebase_app;
  const field_value_web = Object.create(dart.library);
  const codec_utility = Object.create(dart.library);
  const document_reference_web = Object.create(dart.library);
  const document_reference_utils = Object.create(dart.library);
  const collection_reference_web = Object.create(dart.library);
  const query_web = Object.create(dart.library);
  const cloud_firestore_web = Object.create(dart.library);
  const write_batch_web = Object.create(dart.library);
  const transaction_web = Object.create(dart.library);
  const field_value_factory_web = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $updateAll = dartx.updateAll;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $join = dartx.join;
  const $length = dartx.length;
  const $removeLast = dartx.removeLast;
  const $split = dartx.split;
  const $addAll = dartx.addAll;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $toLowerCase = dartx.toLowerCase;
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let StringAnddynamicTodynamic = () => (StringAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String, dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let DocumentSnapshotToDocumentSnapshotPlatform = () => (DocumentSnapshotToDocumentSnapshotPlatform = dart.constFn(dart.fnType(document_snapshot.DocumentSnapshotPlatform, [firestore.DocumentSnapshot])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let TransactionToFutureOfNull = () => (TransactionToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [firestore.Transaction])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(codec_utility.CodecUtility.valueEncode, dynamicTodynamic());
    },
    get C1() {
      return C1 = dart.fn(codec_utility.CodecUtility.valueDecode, dynamicTodynamic());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.serverAndCache",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 5000000
      });
    }
  });
  const data$ = dart.privateName(field_value_web, "FieldValueWeb.data");
  field_value_web.FieldValueWeb = class FieldValueWeb extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      this[data$] = value;
    }
    _equals(other) {
      if (other == null) return false;
      return field_value_web.FieldValueWeb.is(other) && dart.equals(other.data, this.data);
    }
    get hashCode() {
      return dart.hashCode(this.data);
    }
  };
  (field_value_web.FieldValueWeb.new = function(data) {
    this[data$] = data;
    ;
  }).prototype = field_value_web.FieldValueWeb.prototype;
  dart.addTypeTests(field_value_web.FieldValueWeb);
  dart.setLibraryUri(field_value_web.FieldValueWeb, "package:cloud_firestore_web/src/field_value_web.dart");
  dart.setFieldSignature(field_value_web.FieldValueWeb, () => ({
    __proto__: dart.getFields(field_value_web.FieldValueWeb.__proto__),
    data: dart.fieldType(firestore.FieldValue)
  }));
  dart.defineExtensionMethods(field_value_web.FieldValueWeb, ['_equals']);
  dart.defineExtensionAccessors(field_value_web.FieldValueWeb, ['hashCode']);
  let C0;
  let C1;
  codec_utility.CodecUtility = class CodecUtility extends core.Object {
    static encodeMapData(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfString$dynamic().from(data);
      output[$updateAll](dart.fn((key, value) => codec_utility.CodecUtility.valueEncode(value), StringAnddynamicTodynamic()));
      return output;
    }
    static encodeArrayData(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, C0 || CT.C0)[$toList]();
    }
    static valueEncode(value) {
      if (field_value.FieldValuePlatform.is(value)) {
        let delegate = field_value_web.FieldValueWeb._check(field_value.FieldValuePlatform.getDelegate(value));
        return delegate.data;
      } else if (timestamp.Timestamp.is(value)) {
        return value.toDate();
      } else if (geo_point.GeoPoint.is(value)) {
        return new dart.global.firebase.firestore.GeoPoint(value.latitude, value.longitude);
      } else if (blob.Blob.is(value)) {
        return dart.global.firebase.firestore.Blob.fromUint8Array(value.bytes);
      } else if (document_reference_web.DocumentReferenceWeb.is(value)) {
        return value.delegate;
      } else if (MapOfString$dynamic().is(value)) {
        return codec_utility.CodecUtility.encodeMapData(value);
      } else if (core.List.is(value)) {
        return codec_utility.CodecUtility.encodeArrayData(value);
      }
      return value;
    }
    static decodeMapData(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfString$dynamic().from(data);
      output[$updateAll](dart.fn((key, value) => codec_utility.CodecUtility.valueDecode(value), StringAnddynamicTodynamic()));
      return output;
    }
    static decodeArrayData(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, C1 || CT.C1)[$toList]();
    }
    static valueDecode(value) {
      if (dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").is(value)) {
        return new geo_point.GeoPoint.new(value.latitude, value.longitude);
      } else if (core.DateTime.is(value)) {
        return timestamp.Timestamp.fromDate(value);
      } else if (dart.anonymousJSType("Blob").is(value)) {
        return new blob.Blob.new(value.toUint8Array());
      } else if (firestore.DocumentReference.is(value)) {
        return cloud_firestore_web.FirestoreWeb.as(cloud_firestore_platform_interface.FirestorePlatform.instance).document(value.path);
      } else if (MapOfString$dynamic().is(value)) {
        return codec_utility.CodecUtility.decodeMapData(value);
      } else if (core.List.is(value)) {
        return codec_utility.CodecUtility.decodeArrayData(value);
      }
      return value;
    }
  };
  (codec_utility.CodecUtility.new = function() {
    ;
  }).prototype = codec_utility.CodecUtility.prototype;
  dart.addTypeTests(codec_utility.CodecUtility);
  dart.setLibraryUri(codec_utility.CodecUtility, "package:cloud_firestore_web/src/utils/codec_utility.dart");
  const _name = dart.privateName(source, "_name");
  let C2;
  const firestoreWeb$ = dart.privateName(document_reference_web, "DocumentReferenceWeb.firestoreWeb");
  const delegate = dart.privateName(document_reference_web, "DocumentReferenceWeb.delegate");
  document_reference_web.DocumentReferenceWeb = class DocumentReferenceWeb extends document_reference.DocumentReferencePlatform {
    get firestoreWeb() {
      return this[firestoreWeb$];
    }
    set firestoreWeb(value) {
      super.firestoreWeb = value;
    }
    get delegate() {
      return this[delegate];
    }
    set delegate(value) {
      super.delegate = value;
    }
    setData(data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      return this.delegate.set(codec_utility.CodecUtility.encodeMapData(data), {merge: merge});
    }
    updateData(data) {
      return this.delegate.update({data: codec_utility.CodecUtility.encodeMapData(data)});
    }
    get(opts) {
      let source = opts && 'source' in opts ? opts.source : C2 || CT.C2;
      return async.async(document_snapshot.DocumentSnapshotPlatform, (function* get() {
        return document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot(yield this.delegate.get(), this.firestore);
      }).bind(this));
    }
    delete() {
      return this.delegate.delete();
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      let querySnapshots = this.delegate.onSnapshot;
      if (dart.test(includeMetadataChanges)) {
        querySnapshots = this.delegate.onMetadataChangesSnapshot;
      }
      return querySnapshots.map(document_snapshot.DocumentSnapshotPlatform, dart.fn(webSnapshot => document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot(webSnapshot, this.firestore), DocumentSnapshotToDocumentSnapshotPlatform()));
    }
  };
  (document_reference_web.DocumentReferenceWeb.new = function(firestoreWeb, firestore, pathComponents) {
    this[firestoreWeb$] = firestoreWeb;
    this[delegate] = firestoreWeb.doc(pathComponents[$join]("/"));
    document_reference_web.DocumentReferenceWeb.__proto__.new.call(this, firestore, pathComponents);
    ;
  }).prototype = document_reference_web.DocumentReferenceWeb.prototype;
  dart.addTypeTests(document_reference_web.DocumentReferenceWeb);
  dart.setLibraryUri(document_reference_web.DocumentReferenceWeb, "package:cloud_firestore_web/src/document_reference_web.dart");
  dart.setFieldSignature(document_reference_web.DocumentReferenceWeb, () => ({
    __proto__: dart.getFields(document_reference_web.DocumentReferenceWeb.__proto__),
    firestoreWeb: dart.finalFieldType(firestore.Firestore),
    delegate: dart.finalFieldType(firestore.DocumentReference)
  }));
  document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot = function fromWebDocumentSnapshotToPlatformDocumentSnapshot(webSnapshot, firestore) {
    return new document_snapshot.DocumentSnapshotPlatform.new(webSnapshot.ref.path, codec_utility.CodecUtility.decodeMapData(webSnapshot.data()), new snapshot_metadata.SnapshotMetadataPlatform.new(webSnapshot.metadata.hasPendingWrites, webSnapshot.metadata.fromCache), firestore);
  };
  const _firestorePlatform$ = dart.privateName(collection_reference_web, "_firestorePlatform");
  const _webFirestore$ = dart.privateName(collection_reference_web, "_webFirestore");
  const _resetQueryDelegate = dart.privateName(collection_reference_web, "_resetQueryDelegate");
  const queryDelegate = dart.privateName(collection_reference_web, "CollectionReferenceWeb.queryDelegate");
  collection_reference_web.CollectionReferenceWeb = class CollectionReferenceWeb extends collection_reference.CollectionReferencePlatform {
    get queryDelegate() {
      return this[queryDelegate];
    }
    set queryDelegate(value) {
      this[queryDelegate] = value;
    }
    parent() {
      let t0;
      if (dart.notNull(this.pathComponents[$length]) < 2) {
        return null;
      }
      return new document_reference_web.DocumentReferenceWeb.new(this[_webFirestore$], this.firestore, (t0 = ListOfString().from(this.pathComponents), t0[$removeLast](), t0));
    }
    document(path = null) {
      let t0;
      let childPath = null;
      if (path == null) {
        let doc = this[_webFirestore$].collection(this.pathComponents[$join]("/")).doc();
        childPath = doc.path[$split]("/");
      } else {
        childPath = (t0 = ListOfString().from(this.pathComponents), t0[$addAll](path[$split]("/")), t0);
      }
      return new document_reference_web.DocumentReferenceWeb.new(this[_webFirestore$], this.firestore, childPath);
    }
    add(data) {
      return async.async(document_reference.DocumentReferencePlatform, (function* add() {
        let newDocument = this.document();
        yield newDocument.setData(data);
        return newDocument;
      }).bind(this));
    }
    buildArguments() {
      return this.queryDelegate.buildArguments();
    }
    endAt(values) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.endAt(values);
    }
    endAtDocument(documentSnapshot) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.endAtDocument(documentSnapshot);
    }
    endBefore(values) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.endBefore(values);
    }
    endBeforeDocument(documentSnapshot) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.endBeforeDocument(documentSnapshot);
    }
    get firestore() {
      return this[_firestorePlatform$];
    }
    getDocuments(opts) {
      let source = opts && 'source' in opts ? opts.source : C2 || CT.C2;
      return this.queryDelegate.getDocuments({source: source});
    }
    get id() {
      return dart.test(this.pathComponents[$isEmpty]) ? null : this.pathComponents[$last];
    }
    get isCollectionGroup() {
      return false;
    }
    limit(length) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.limit(length);
    }
    orderBy(field, opts) {
      let descending = opts && 'descending' in opts ? opts.descending : false;
      this[_resetQueryDelegate]();
      return this.queryDelegate.orderBy(field, {descending: descending});
    }
    get parameters() {
      return this.queryDelegate.parameters;
    }
    get path() {
      return this.pathComponents[$join]("/");
    }
    reference() {
      return this.queryDelegate.reference();
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      return this.queryDelegate.snapshots({includeMetadataChanges: includeMetadataChanges});
    }
    startAfter(values) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.startAfter(values);
    }
    startAfterDocument(documentSnapshot) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.startAfterDocument(documentSnapshot);
    }
    startAt(values) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.startAt(values);
    }
    startAtDocument(documentSnapshot) {
      this[_resetQueryDelegate]();
      return this.queryDelegate.startAtDocument(documentSnapshot);
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
      this[_resetQueryDelegate]();
      return this.queryDelegate.where(field, {isEqualTo: isEqualTo, isLessThan: isLessThan, isLessThanOrEqualTo: isLessThanOrEqualTo, isGreaterThan: isGreaterThan, isGreaterThanOrEqualTo: isGreaterThanOrEqualTo, arrayContains: arrayContains, arrayContainsAny: arrayContainsAny, whereIn: whereIn, isNull: isNull});
    }
    [_resetQueryDelegate]() {
      return this.queryDelegate = this.queryDelegate.resetQueryDelegate();
    }
  };
  (collection_reference_web.CollectionReferenceWeb.new = function(_firestorePlatform, _webFirestore, pathComponents) {
    this[_firestorePlatform$] = _firestorePlatform;
    this[_webFirestore$] = _webFirestore;
    this[queryDelegate] = new query_web.QueryWeb.new(_firestorePlatform, pathComponents[$join]("/"), _webFirestore.collection(pathComponents[$join]("/")));
    collection_reference_web.CollectionReferenceWeb.__proto__.new.call(this, _firestorePlatform, pathComponents);
    ;
  }).prototype = collection_reference_web.CollectionReferenceWeb.prototype;
  dart.addTypeTests(collection_reference_web.CollectionReferenceWeb);
  dart.setMethodSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getMethods(collection_reference_web.CollectionReferenceWeb.__proto__),
    [_resetQueryDelegate]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getGetters(collection_reference_web.CollectionReferenceWeb.__proto__),
    firestore: cloud_firestore_platform_interface.FirestorePlatform,
    isCollectionGroup: core.bool,
    parameters: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(collection_reference_web.CollectionReferenceWeb, "package:cloud_firestore_web/src/collection_reference_web.dart");
  dart.setFieldSignature(collection_reference_web.CollectionReferenceWeb, () => ({
    __proto__: dart.getFields(collection_reference_web.CollectionReferenceWeb.__proto__),
    [_webFirestore$]: dart.finalFieldType(firestore.Firestore),
    [_firestorePlatform$]: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    queryDelegate: dart.fieldType(query_web.QueryWeb)
  }));
  const _firestore$ = dart.privateName(query_web, "_firestore");
  const _path$ = dart.privateName(query_web, "_path");
  const _webQuery$ = dart.privateName(query_web, "_webQuery");
  const _isCollectionGroup = dart.privateName(query_web, "_isCollectionGroup");
  const _orderByKeys = dart.privateName(query_web, "_orderByKeys");
  const _webQuerySnapshotToQuerySnapshot = dart.privateName(query_web, "_webQuerySnapshotToQuerySnapshot");
  const _webChangeToChange = dart.privateName(query_web, "_webChangeToChange");
  const _webMetadataToMetada = dart.privateName(query_web, "_webMetadataToMetada");
  const _fromString = dart.privateName(query_web, "_fromString");
  query_web.QueryWeb = class QueryWeb extends query.QueryPlatform {
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      if (!(this[_webQuery$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 42, 12, "_webQuery != null");
      let querySnapshots = this[_webQuery$].onSnapshot;
      if (dart.test(includeMetadataChanges)) {
        querySnapshots = this[_webQuery$].onSnapshotMetadata;
      }
      return querySnapshots.map(query_snapshot.QuerySnapshotPlatform, dart.bind(this, _webQuerySnapshotToQuerySnapshot));
    }
    getDocuments(opts) {
      let source = opts && 'source' in opts ? opts.source : C2 || CT.C2;
      return async.async(query_snapshot.QuerySnapshotPlatform, (function* getDocuments() {
        if (!(this[_webQuery$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 54, 12, "_webQuery != null");
        return this[_webQuerySnapshotToQuerySnapshot](yield this[_webQuery$].get());
      }).bind(this));
    }
    buildArguments() {
      return new (LinkedMapOfString$dynamic()).new();
    }
    endAt(values) {
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$] != null ? this[_webQuery$].endAt({fieldValues: values}) : null, {isCollectionGroup: this[_isCollectionGroup]});
    }
    endAtDocument(documentSnapshot) {
      if (!(this[_webQuery$] != null && dart.test(this[_orderByKeys][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 71, 12, "_webQuery != null && _orderByKeys.isNotEmpty");
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].endAt({fieldValues: this[_orderByKeys][$map](dart.dynamic, dart.fn(key => documentSnapshot.data[$_get](key), dynamicTodynamic()))[$toList]()}), {isCollectionGroup: this[_isCollectionGroup]});
    }
    endBefore(values) {
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$] != null ? this[_webQuery$].endBefore({fieldValues: values}) : null, {isCollectionGroup: this[_isCollectionGroup]});
    }
    endBeforeDocument(documentSnapshot) {
      if (!(this[_webQuery$] != null && dart.test(this[_orderByKeys][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 91, 12, "_webQuery != null && _orderByKeys.isNotEmpty");
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].endBefore({fieldValues: this[_orderByKeys][$map](dart.dynamic, dart.fn(key => documentSnapshot.data[$_get](key), dynamicTodynamic()))[$toList]()}), {isCollectionGroup: this[_isCollectionGroup]});
    }
    get firestore() {
      return this[_firestore$];
    }
    get isCollectionGroup() {
      return this[_isCollectionGroup];
    }
    limit(length) {
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$] != null ? this[_webQuery$].limit(length) : null, {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
    }
    orderBy(field, opts) {
      let t0;
      let descending = opts && 'descending' in opts ? opts.descending : false;
      let usableField = field;
      if (dart.equals(field, field_path.FieldPath.documentId)) {
        usableField = dart.global.firebase.firestore.FieldPath.documentId();
      }
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].orderBy(usableField, dart.test(descending) ? "desc" : "asc"), {orderByKeys: (t0 = this[_orderByKeys], t0[$add](usableField), t0), isCollectionGroup: this[_isCollectionGroup]});
    }
    get path() {
      return this[_path$];
    }
    get pathComponents() {
      return this[_path$][$split]("/");
    }
    reference() {
      return this.firestore.collection(this[_path$]);
    }
    startAfter(values) {
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].startAfter({fieldValues: values}), {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
    }
    startAfterDocument(documentSnapshot) {
      if (!(this[_webQuery$] != null && dart.test(this[_orderByKeys][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 154, 12, "_webQuery != null && _orderByKeys.isNotEmpty");
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].startAfter({fieldValues: this[_orderByKeys][$map](dart.dynamic, dart.fn(key => documentSnapshot.data[$_get](key), dynamicTodynamic()))[$toList]()}), {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
    }
    startAt(values) {
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].startAt({fieldValues: values}), {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
    }
    startAtDocument(documentSnapshot) {
      if (!(this[_webQuery$] != null && dart.test(this[_orderByKeys][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 176, 12, "_webQuery != null && _orderByKeys.isNotEmpty");
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], this[_webQuery$].startAt({fieldValues: this[_orderByKeys][$map](dart.dynamic, dart.fn(key => documentSnapshot.data[$_get](key), dynamicTodynamic()))[$toList]()}), {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
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
      if (!(typeof field == 'string' || field_path.FieldPath.is(field))) dart.assertFailed("Supported [field] types are [String] and [FieldPath].", "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 202, 12, "field is String || field is FieldPath");
      if (!(this[_webQuery$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 204, 12, "_webQuery != null");
      let usableField = codec_utility.CodecUtility.valueEncode(field);
      if (dart.equals(field, field_path.FieldPath.documentId)) {
        usableField = dart.global.firebase.firestore.FieldPath.documentId();
      }
      let query = this[_webQuery$];
      if (isEqualTo != null) {
        query = query.where(usableField, "==", codec_utility.CodecUtility.valueEncode(isEqualTo));
      }
      if (isLessThan != null) {
        query = query.where(usableField, "<", codec_utility.CodecUtility.valueEncode(isLessThan));
      }
      if (isLessThanOrEqualTo != null) {
        query = query.where(usableField, "<=", codec_utility.CodecUtility.valueEncode(isLessThanOrEqualTo));
      }
      if (isGreaterThan != null) {
        query = query.where(usableField, ">", codec_utility.CodecUtility.valueEncode(isGreaterThan));
      }
      if (isGreaterThanOrEqualTo != null) {
        query = query.where(usableField, ">=", codec_utility.CodecUtility.valueEncode(isGreaterThanOrEqualTo));
      }
      if (arrayContains != null) {
        query = query.where(usableField, "array-contains", codec_utility.CodecUtility.valueEncode(arrayContains));
      }
      if (arrayContainsAny != null) {
        if (!(dart.notNull(arrayContainsAny[$length]) <= 10)) dart.assertFailed("array contains can have maximum of 10 items", "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 236, 14, "arrayContainsAny.length <= 10");
        query = query.where(usableField, "array-contains-any", codec_utility.CodecUtility.valueEncode(arrayContainsAny));
      }
      if (whereIn != null) {
        if (!(dart.notNull(whereIn[$length]) <= 10)) dart.assertFailed("array contains can have maximum of 10 items", "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 243, 11, "whereIn.length <= 10");
        query = query.where(usableField, "in", codec_utility.CodecUtility.valueEncode(whereIn));
      }
      if (isNull != null) {
        if (!dart.test(isNull)) dart.assertFailed("isNull can only be set to true. " + "Use isEqualTo to filter on non-null values.", "org-dartlang-app:///packages/cloud_firestore_web/src/query_web.dart", 248, 11, "isNull");
        query = query.where(usableField, "==", null);
      }
      return new query_web.QueryWeb.new(this[_firestore$], this[_path$], query, {orderByKeys: this[_orderByKeys], isCollectionGroup: this[_isCollectionGroup]});
    }
    [_webQuerySnapshotToQuerySnapshot](webSnapshot) {
      return new query_snapshot.QuerySnapshotPlatform.new(webSnapshot.docs[$map](document_snapshot.DocumentSnapshotPlatform, dart.fn(webSnapshot => document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot(webSnapshot, this[_firestore$]), DocumentSnapshotToDocumentSnapshotPlatform()))[$toList](), webSnapshot.docChanges()[$map](document_change.DocumentChangePlatform, dart.bind(this, _webChangeToChange))[$toList](), this[_webMetadataToMetada](webSnapshot.metadata));
    }
    [_webChangeToChange](webChange) {
      return new document_change.DocumentChangePlatform.new(this[_fromString](webChange.type), dart.asInt(webChange.oldIndex), dart.asInt(webChange.newIndex), document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot(webChange.doc, this[_firestore$]));
    }
    [_fromString](item) {
      switch (item[$toLowerCase]()) {
        case "added":
        {
          return document_change.DocumentChangeType.added;
        }
        case "modified":
        {
          return document_change.DocumentChangeType.modified;
        }
        case "removed":
        {
          return document_change.DocumentChangeType.removed;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Invalid type"));
        }
      }
    }
    [_webMetadataToMetada](webMetadata) {
      return new snapshot_metadata.SnapshotMetadataPlatform.new(webMetadata.hasPendingWrites, webMetadata.fromCache);
    }
    get parameters() {
      return new (LinkedMapOfString$dynamic()).new();
    }
    resetQueryDelegate() {
      return new query_web.QueryWeb.new(this.firestore, this.pathComponents[$join]("/"), this[_webQuery$]);
    }
  };
  (query_web.QueryWeb.new = function(_firestore, _path, _webQuery, opts) {
    let t0, t0$;
    let isCollectionGroup = opts && 'isCollectionGroup' in opts ? opts.isCollectionGroup : null;
    let orderByKeys = opts && 'orderByKeys' in opts ? opts.orderByKeys : null;
    this[_firestore$] = _firestore;
    this[_path$] = _path;
    this[_webQuery$] = _webQuery;
    this[_isCollectionGroup] = (t0 = isCollectionGroup, t0 == null ? false : t0);
    this[_orderByKeys] = (t0$ = orderByKeys, t0$ == null ? [] : t0$);
    query_web.QueryWeb.__proto__.new.call(this, {firestore: _firestore, pathComponents: _path[$split]("/"), isCollectionGroup: isCollectionGroup});
    ;
  }).prototype = query_web.QueryWeb.prototype;
  dart.addTypeTests(query_web.QueryWeb);
  dart.setMethodSignature(query_web.QueryWeb, () => ({
    __proto__: dart.getMethods(query_web.QueryWeb.__proto__),
    [_webQuerySnapshotToQuerySnapshot]: dart.fnType(query_snapshot.QuerySnapshotPlatform, [firestore.QuerySnapshot]),
    [_webChangeToChange]: dart.fnType(document_change.DocumentChangePlatform, [firestore.DocumentChange]),
    [_fromString]: dart.fnType(document_change.DocumentChangeType, [core.String]),
    [_webMetadataToMetada]: dart.fnType(snapshot_metadata.SnapshotMetadataPlatform, [dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata")]),
    resetQueryDelegate: dart.fnType(query_web.QueryWeb, [])
  }));
  dart.setGetterSignature(query_web.QueryWeb, () => ({
    __proto__: dart.getGetters(query_web.QueryWeb.__proto__),
    firestore: cloud_firestore_platform_interface.FirestorePlatform,
    isCollectionGroup: core.bool,
    pathComponents: core.List$(core.String),
    parameters: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(query_web.QueryWeb, "package:cloud_firestore_web/src/query_web.dart");
  dart.setFieldSignature(query_web.QueryWeb, () => ({
    __proto__: dart.getFields(query_web.QueryWeb.__proto__),
    [_webQuery$]: dart.finalFieldType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))),
    [_firestore$]: dart.finalFieldType(cloud_firestore_platform_interface.FirestorePlatform),
    [_isCollectionGroup]: dart.finalFieldType(core.bool),
    [_path$]: dart.finalFieldType(core.String),
    [_orderByKeys]: dart.finalFieldType(core.List)
  }));
  dart.defineLazy(query_web.QueryWeb, {
    /*query_web.QueryWeb._kChangeTypeAdded*/get _kChangeTypeAdded() {
      return "added";
    },
    /*query_web.QueryWeb._kChangeTypeModified*/get _kChangeTypeModified() {
      return "modified";
    },
    /*query_web.QueryWeb._kChangeTypeRemoved*/get _kChangeTypeRemoved() {
      return "removed";
    }
  });
  const _webFirestore = dart.privateName(cloud_firestore_web, "_webFirestore");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C3;
  cloud_firestore_web.FirestoreWeb = class FirestoreWeb extends cloud_firestore_platform_interface.FirestorePlatform {
    static registerWith(registrar) {
      cloud_firestore_platform_interface.FirestorePlatform.instance = new cloud_firestore_web.FirestoreWeb.new();
    }
    withApp(app) {
      return new cloud_firestore_web.FirestoreWeb.new({app: app});
    }
    collection(path) {
      return new collection_reference_web.CollectionReferenceWeb.new(this, this[_webFirestore], path[$split]("/"));
    }
    collectionGroup(path) {
      return new query_web.QueryWeb.new(this, path, this[_webFirestore].collectionGroup(path), {isCollectionGroup: true});
    }
    document(path) {
      return new document_reference_web.DocumentReferenceWeb.new(this[_webFirestore], this, path[$split]("/"));
    }
    batch() {
      return new write_batch_web.WriteBatchWeb.new(this[_webFirestore].batch());
    }
    enablePersistence(enable) {
      return async.async(dart.void, (function* enablePersistence() {
        if (dart.test(enable)) {
          yield this[_webFirestore].enablePersistence();
        }
      }).bind(this));
    }
    settings(opts) {
      let persistenceEnabled = opts && 'persistenceEnabled' in opts ? opts.persistenceEnabled : null;
      let host = opts && 'host' in opts ? opts.host : null;
      let sslEnabled = opts && 'sslEnabled' in opts ? opts.sslEnabled : null;
      let cacheSizeBytes = opts && 'cacheSizeBytes' in opts ? opts.cacheSizeBytes : null;
      return async.async(dart.void, (function* settings() {
        let t0, t0$;
        if (host != null && sslEnabled != null) {
          this[_webFirestore].settings({cacheSizeBytes: (t0 = cacheSizeBytes, t0 == null ? 40000000 : t0), host: host, ssl: sslEnabled});
        } else {
          this[_webFirestore].settings({cacheSizeBytes: (t0$ = cacheSizeBytes, t0$ == null ? 40000000 : t0$)});
        }
        if (dart.test(persistenceEnabled)) {
          yield this[_webFirestore].enablePersistence();
        }
      }).bind(this));
    }
    runTransaction(transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C3 || CT.C3;
      return async.async(MapOfString$dynamic(), (function* runTransaction() {
        let result = null;
        yield this[_webFirestore].runTransaction(dart.fn(transaction => async.async(core.Null, (function*() {
          result = MapOfString$dynamic()._check(yield transactionHandler(new transaction_web.TransactionWeb.new(transaction, this)));
        }).bind(this)), TransactionToFutureOfNull())).timeout(timeout);
        return MapOfString$dynamic().is(result) ? result : new (IdentityMapOfString$dynamic()).new();
      }).bind(this));
    }
  };
  (cloud_firestore_web.FirestoreWeb.new = function(opts) {
    let t0, t0$;
    let app = opts && 'app' in opts ? opts.app : null;
    this[_webFirestore] = top_level.firestore(top_level.app((t0 = app, t0 == null ? firebase_app.FirebaseApp.instance : t0).name));
    cloud_firestore_web.FirestoreWeb.__proto__.new.call(this, {app: (t0$ = app, t0$ == null ? firebase_app.FirebaseApp.instance : t0$)});
    field_value_factory.FieldValueFactoryPlatform.instance = new field_value_factory_web.FieldValueFactoryWeb.new();
  }).prototype = cloud_firestore_web.FirestoreWeb.prototype;
  dart.addTypeTests(cloud_firestore_web.FirestoreWeb);
  dart.setLibraryUri(cloud_firestore_web.FirestoreWeb, "package:cloud_firestore_web/cloud_firestore_web.dart");
  dart.setFieldSignature(cloud_firestore_web.FirestoreWeb, () => ({
    __proto__: dart.getFields(cloud_firestore_web.FirestoreWeb.__proto__),
    [_webFirestore]: dart.finalFieldType(firestore.Firestore)
  }));
  const _delegate$ = dart.privateName(write_batch_web, "_delegate");
  write_batch_web.WriteBatchWeb = class WriteBatchWeb extends write_batch.WriteBatchPlatform {
    commit() {
      return async.async(dart.void, (function* commit() {
        yield this[_delegate$].commit();
      }).bind(this));
    }
    delete(document) {
      if (!document_reference_web.DocumentReferenceWeb.is(document)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/write_batch_web.dart", 25, 12, "document is DocumentReferenceWeb");
      this[_delegate$].delete(document_reference_web.DocumentReferenceWeb.as(document).delegate);
    }
    setData(document, data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      if (!document_reference_web.DocumentReferenceWeb.is(document)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/write_batch_web.dart", 35, 12, "document is DocumentReferenceWeb");
      this[_delegate$].set(document_reference_web.DocumentReferenceWeb.as(document).delegate, codec_utility.CodecUtility.encodeMapData(data), dart.test(merge) ? {merge: merge} : null);
    }
    updateData(document, data) {
      if (!document_reference_web.DocumentReferenceWeb.is(document)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/write_batch_web.dart", 47, 12, "document is DocumentReferenceWeb");
      this[_delegate$].update(document_reference_web.DocumentReferenceWeb.as(document).delegate, {data: codec_utility.CodecUtility.encodeMapData(data)});
    }
  };
  (write_batch_web.WriteBatchWeb.new = function(_delegate) {
    this[_delegate$] = _delegate;
    write_batch_web.WriteBatchWeb.__proto__.new.call(this);
    ;
  }).prototype = write_batch_web.WriteBatchWeb.prototype;
  dart.addTypeTests(write_batch_web.WriteBatchWeb);
  dart.setLibraryUri(write_batch_web.WriteBatchWeb, "package:cloud_firestore_web/src/write_batch_web.dart");
  dart.setFieldSignature(write_batch_web.WriteBatchWeb, () => ({
    __proto__: dart.getFields(write_batch_web.WriteBatchWeb.__proto__),
    [_delegate$]: dart.finalFieldType(firestore.WriteBatch)
  }));
  const _webTransaction$ = dart.privateName(transaction_web, "_webTransaction");
  const firestore$ = dart.privateName(transaction_web, "TransactionWeb.firestore");
  transaction_web.TransactionWeb = class TransactionWeb extends transaction.TransactionPlatform {
    get firestore() {
      return this[firestore$];
    }
    set firestore(value) {
      this[firestore$] = value;
    }
    delete(documentReference) {
      return async.async(dart.void, (function* $delete() {
        if (!document_reference_web.DocumentReferenceWeb.is(documentReference)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/transaction_web.dart", 23, 12, "documentReference is DocumentReferenceWeb");
        yield this[_webTransaction$].delete(document_reference_web.DocumentReferenceWeb.as(documentReference).delegate);
      }).bind(this));
    }
    get(documentReference) {
      return async.async(document_snapshot.DocumentSnapshotPlatform, (function* get() {
        if (!document_reference_web.DocumentReferenceWeb.is(documentReference)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/transaction_web.dart", 32, 12, "documentReference is DocumentReferenceWeb");
        let webSnapshot = (yield this[_webTransaction$].get(document_reference_web.DocumentReferenceWeb.as(documentReference).delegate));
        return document_reference_utils.fromWebDocumentSnapshotToPlatformDocumentSnapshot(webSnapshot, this.firestore);
      }).bind(this));
    }
    set(documentReference, data) {
      return async.async(dart.void, (function* set() {
        if (!document_reference_web.DocumentReferenceWeb.is(documentReference)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/transaction_web.dart", 44, 12, "documentReference is DocumentReferenceWeb");
        yield this[_webTransaction$].set(document_reference_web.DocumentReferenceWeb.as(documentReference).delegate, codec_utility.CodecUtility.encodeMapData(data));
      }).bind(this));
    }
    update(documentReference, data) {
      return async.async(dart.void, (function* update() {
        if (!document_reference_web.DocumentReferenceWeb.is(documentReference)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore_web/src/transaction_web.dart", 55, 12, "documentReference is DocumentReferenceWeb");
        yield this[_webTransaction$].update(document_reference_web.DocumentReferenceWeb.as(documentReference).delegate, {data: codec_utility.CodecUtility.encodeMapData(data)});
      }).bind(this));
    }
    finish() {
      return FutureOfvoid().value();
    }
  };
  (transaction_web.TransactionWeb.new = function(_webTransaction, firestore) {
    this[_webTransaction$] = _webTransaction;
    this[firestore$] = firestore;
    transaction_web.TransactionWeb.__proto__.new.call(this, firestore);
    ;
  }).prototype = transaction_web.TransactionWeb.prototype;
  dart.addTypeTests(transaction_web.TransactionWeb);
  dart.setLibraryUri(transaction_web.TransactionWeb, "package:cloud_firestore_web/src/transaction_web.dart");
  dart.setFieldSignature(transaction_web.TransactionWeb, () => ({
    __proto__: dart.getFields(transaction_web.TransactionWeb.__proto__),
    [_webTransaction$]: dart.finalFieldType(firestore.Transaction),
    firestore: dart.fieldType(cloud_firestore_platform_interface.FirestorePlatform)
  }));
  field_value_factory_web.FieldValueFactoryWeb = class FieldValueFactoryWeb extends field_value_factory.FieldValueFactoryPlatform {
    arrayRemove(elements) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.arrayRemove(elements));
    }
    arrayUnion(elements) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.arrayUnion(elements));
    }
    delete() {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.delete());
    }
    increment(value) {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.increment(value));
    }
    serverTimestamp() {
      return new field_value_web.FieldValueWeb.new(firestore.FieldValue.serverTimestamp());
    }
  };
  (field_value_factory_web.FieldValueFactoryWeb.new = function() {
    field_value_factory_web.FieldValueFactoryWeb.__proto__.new.call(this);
    ;
  }).prototype = field_value_factory_web.FieldValueFactoryWeb.prototype;
  dart.addTypeTests(field_value_factory_web.FieldValueFactoryWeb);
  dart.setMethodSignature(field_value_factory_web.FieldValueFactoryWeb, () => ({
    __proto__: dart.getMethods(field_value_factory_web.FieldValueFactoryWeb.__proto__),
    arrayRemove: dart.fnType(field_value_web.FieldValueWeb, [core.List]),
    arrayUnion: dart.fnType(field_value_web.FieldValueWeb, [core.List]),
    delete: dart.fnType(field_value_web.FieldValueWeb, []),
    increment: dart.fnType(field_value_web.FieldValueWeb, [core.num]),
    serverTimestamp: dart.fnType(field_value_web.FieldValueWeb, [])
  }));
  dart.setLibraryUri(field_value_factory_web.FieldValueFactoryWeb, "package:cloud_firestore_web/src/field_value_factory_web.dart");
  dart.trackLibraries("packages/cloud_firestore_web/cloud_firestore_web", {
    "package:cloud_firestore_web/src/field_value_web.dart": field_value_web,
    "package:cloud_firestore_web/src/utils/codec_utility.dart": codec_utility,
    "package:cloud_firestore_web/src/document_reference_web.dart": document_reference_web,
    "package:cloud_firestore_web/src/utils/document_reference_utils.dart": document_reference_utils,
    "package:cloud_firestore_web/src/collection_reference_web.dart": collection_reference_web,
    "package:cloud_firestore_web/src/query_web.dart": query_web,
    "package:cloud_firestore_web/cloud_firestore_web.dart": cloud_firestore_web,
    "package:cloud_firestore_web/src/write_batch_web.dart": write_batch_web,
    "package:cloud_firestore_web/src/transaction_web.dart": transaction_web,
    "package:cloud_firestore_web/src/field_value_factory_web.dart": field_value_factory_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/field_value_web.dart","src/utils/codec_utility.dart","src/document_reference_web.dart","src/utils/document_reference_utils.dart","src/collection_reference_web.dart","src/query_web.dart","cloud_firestore_web.dart","src/write_batch_web.dart","src/transaction_web.dart","src/field_value_factory_web.dart"],"names":[],"mappings":"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","file":"cloud_firestore_web.ddc.js"}');
  // Exports:
  return {
    src__field_value_web: field_value_web,
    src__utils__codec_utility: codec_utility,
    src__document_reference_web: document_reference_web,
    src__utils__document_reference_utils: document_reference_utils,
    src__collection_reference_web: collection_reference_web,
    src__query_web: query_web,
    cloud_firestore_web: cloud_firestore_web,
    src__write_batch_web: write_batch_web,
    src__transaction_web: transaction_web,
    src__field_value_factory_web: field_value_factory_web
  };
});

//# sourceMappingURL=cloud_firestore_web.ddc.js.map
