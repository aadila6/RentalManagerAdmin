define(['dart_sdk', 'packages/cloud_firestore_platform_interface/cloud_firestore_platform_interface', 'packages/firebase_core/firebase_core'], function(dart_sdk, packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface, packages__firebase_core__firebase_core) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const query = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__query;
  const query_snapshot = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__query_snapshot;
  const source = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__source;
  const collection_reference = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__collection_reference;
  const document_change = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__document_change;
  const document_snapshot = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__document_snapshot;
  const snapshot_metadata = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__snapshot_metadata;
  const cloud_firestore_platform_interface = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.cloud_firestore_platform_interface;
  const document_reference = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__document_reference;
  const field_value = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__field_value;
  const field_value_factory = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__field_value_factory;
  const transaction = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__transaction;
  const write_batch = packages__cloud_firestore_platform_interface__cloud_firestore_platform_interface.src__platform_interface__write_batch;
  const firebase_app = packages__firebase_core__firebase_core.src__firebase_app;
  const cloud_firestore = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $length = dartx.length;
  const $join = dartx.join;
  const $split = dartx.split;
  const $_get = dartx._get;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $updateAll = dartx.updateAll;
  let QuerySnapshotPlatformToQuerySnapshot = () => (QuerySnapshotPlatformToQuerySnapshot = dart.constFn(dart.fnType(cloud_firestore.QuerySnapshot, [query_snapshot.QuerySnapshotPlatform])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DocumentSnapshotPlatformToDocumentSnapshot = () => (DocumentSnapshotPlatformToDocumentSnapshot = dart.constFn(dart.fnType(cloud_firestore.DocumentSnapshot, [document_snapshot.DocumentSnapshotPlatform])))();
  let TransactionPlatformToFuture = () => (TransactionPlatformToFuture = dart.constFn(dart.fnType(async.Future, [transaction.TransactionPlatform])))();
  let DocumentChangePlatformToDocumentChange = () => (DocumentChangePlatformToDocumentChange = dart.constFn(dart.fnType(cloud_firestore.DocumentChange, [document_change.DocumentChangePlatform])))();
  let LinkedHashMapOfString$dynamic = () => (LinkedHashMapOfString$dynamic = dart.constFn(collection.LinkedHashMap$(core.String, dart.dynamic)))();
  let StringAnddynamicTodynamic = () => (StringAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.String, dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: source.Source.prototype,
        [_name]: "Source.serverAndCache",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 5000000
      });
    }
  });
  const _delegate$ = dart.privateName(cloud_firestore, "_delegate");
  const _pathComponents = dart.privateName(cloud_firestore, "_pathComponents");
  const _path = dart.privateName(cloud_firestore, "_path");
  const _name = dart.privateName(source, "_name");
  let C0;
  const _delegate$0 = dart.privateName(cloud_firestore, "Query._delegate");
  const firestore$ = dart.privateName(cloud_firestore, "Query.firestore");
  cloud_firestore.Query = class Query extends core.Object {
    get [_delegate$]() {
      return this[_delegate$0];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get firestore() {
      return this[firestore$];
    }
    set firestore(value) {
      super.firestore = value;
    }
    get [_pathComponents]() {
      return this[_delegate$].pathComponents;
    }
    get [_path]() {
      return this[_pathComponents][$join]("/");
    }
    buildArguments() {
      return this[_delegate$].buildArguments();
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      return this[_delegate$].snapshots({includeMetadataChanges: includeMetadataChanges}).map(cloud_firestore.QuerySnapshot, dart.fn(item => new cloud_firestore.QuerySnapshot.__(item, this.firestore), QuerySnapshotPlatformToQuerySnapshot()));
    }
    getDocuments(opts) {
      let source = opts && 'source' in opts ? opts.source : C0 || CT.C0;
      return async.async(cloud_firestore.QuerySnapshot, (function* getDocuments() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore/src/query.dart", 36, 12, "source != null");
        let docs = (yield this[_delegate$].getDocuments({source: source}));
        return new cloud_firestore.QuerySnapshot.__(docs, this.firestore);
      }).bind(this));
    }
    reference() {
      return new cloud_firestore.CollectionReference.__(this[_delegate$].reference(), this.firestore);
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
      return new cloud_firestore.Query.__(this[_delegate$].where(cloud_firestore._CodecUtility.valueEncode(field), {isEqualTo: cloud_firestore._CodecUtility.valueEncode(isEqualTo), isLessThan: cloud_firestore._CodecUtility.valueEncode(isLessThan), isLessThanOrEqualTo: cloud_firestore._CodecUtility.valueEncode(isLessThanOrEqualTo), isGreaterThan: cloud_firestore._CodecUtility.valueEncode(isGreaterThan), isGreaterThanOrEqualTo: cloud_firestore._CodecUtility.valueEncode(isGreaterThanOrEqualTo), arrayContainsAny: core.List._check(cloud_firestore._CodecUtility.valueEncode(arrayContainsAny)), arrayContains: cloud_firestore._CodecUtility.valueEncode(arrayContains), whereIn: core.List._check(cloud_firestore._CodecUtility.valueEncode(whereIn)), isNull: isNull}), this.firestore);
    }
    orderBy(field, opts) {
      let descending = opts && 'descending' in opts ? opts.descending : false;
      return new cloud_firestore.Query.__(this[_delegate$].orderBy(field, {descending: descending}), this.firestore);
    }
    startAfterDocument(documentSnapshot) {
      return new cloud_firestore.Query.__(this[_delegate$].startAfterDocument(cloud_firestore._PlatformUtils.toPlatformDocumentSnapshot(documentSnapshot)), this.firestore);
    }
    startAtDocument(documentSnapshot) {
      return new cloud_firestore.Query.__(this[_delegate$].startAtDocument(cloud_firestore._PlatformUtils.toPlatformDocumentSnapshot(documentSnapshot)), this.firestore);
    }
    startAfter(values) {
      return new cloud_firestore.Query.__(this[_delegate$].startAfter(values), this.firestore);
    }
    startAt(values) {
      return new cloud_firestore.Query.__(this[_delegate$].startAt(values), this.firestore);
    }
    endAtDocument(documentSnapshot) {
      return new cloud_firestore.Query.__(this[_delegate$].endAtDocument(cloud_firestore._PlatformUtils.toPlatformDocumentSnapshot(documentSnapshot)), this.firestore);
    }
    endAt(values) {
      return new cloud_firestore.Query.__(this[_delegate$].endAt(values), this.firestore);
    }
    endBeforeDocument(documentSnapshot) {
      return new cloud_firestore.Query.__(this[_delegate$].endBeforeDocument(cloud_firestore._PlatformUtils.toPlatformDocumentSnapshot(documentSnapshot)), this.firestore);
    }
    endBefore(values) {
      return new cloud_firestore.Query.__(this[_delegate$].endBefore(values), this.firestore);
    }
    limit(length) {
      return new cloud_firestore.Query.__(this[_delegate$].limit(length), this.firestore);
    }
  };
  (cloud_firestore.Query.__ = function(_delegate, firestore) {
    this[_delegate$0] = _delegate;
    this[firestore$] = firestore;
    query.QueryPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.Query.prototype;
  dart.addTypeTests(cloud_firestore.Query);
  dart.setMethodSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getMethods(cloud_firestore.Query.__proto__),
    buildArguments: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    snapshots: dart.fnType(async.Stream$(cloud_firestore.QuerySnapshot), [], {includeMetadataChanges: core.bool}, {}),
    getDocuments: dart.fnType(async.Future$(cloud_firestore.QuerySnapshot), [], {source: source.Source}, {}),
    reference: dart.fnType(cloud_firestore.CollectionReference, []),
    where: dart.fnType(cloud_firestore.Query, [dart.dynamic], {arrayContains: dart.dynamic, arrayContainsAny: core.List, isEqualTo: dart.dynamic, isGreaterThan: dart.dynamic, isGreaterThanOrEqualTo: dart.dynamic, isLessThan: dart.dynamic, isLessThanOrEqualTo: dart.dynamic, isNull: core.bool, whereIn: core.List}, {}),
    orderBy: dart.fnType(cloud_firestore.Query, [dart.dynamic], {descending: core.bool}, {}),
    startAfterDocument: dart.fnType(cloud_firestore.Query, [cloud_firestore.DocumentSnapshot]),
    startAtDocument: dart.fnType(cloud_firestore.Query, [cloud_firestore.DocumentSnapshot]),
    startAfter: dart.fnType(cloud_firestore.Query, [core.List]),
    startAt: dart.fnType(cloud_firestore.Query, [core.List]),
    endAtDocument: dart.fnType(cloud_firestore.Query, [cloud_firestore.DocumentSnapshot]),
    endAt: dart.fnType(cloud_firestore.Query, [core.List]),
    endBeforeDocument: dart.fnType(cloud_firestore.Query, [cloud_firestore.DocumentSnapshot]),
    endBefore: dart.fnType(cloud_firestore.Query, [core.List]),
    limit: dart.fnType(cloud_firestore.Query, [core.int])
  }));
  dart.setGetterSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getGetters(cloud_firestore.Query.__proto__),
    [_pathComponents]: core.List$(core.String),
    [_path]: core.String
  }));
  dart.setLibraryUri(cloud_firestore.Query, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.Query, () => ({
    __proto__: dart.getFields(cloud_firestore.Query.__proto__),
    [_delegate$]: dart.finalFieldType(query.QueryPlatform),
    firestore: dart.finalFieldType(cloud_firestore.Firestore)
  }));
  const _delegate$1 = dart.privateName(cloud_firestore, "CollectionReference._delegate");
  cloud_firestore.CollectionReference = class CollectionReference extends cloud_firestore.Query {
    get [_delegate$]() {
      return this[_delegate$1];
    }
    set [_delegate$](value) {
      super[_delegate$] = value;
    }
    get id() {
      return dart.test(this[_pathComponents][$isEmpty]) ? null : this[_pathComponents][$last];
    }
    parent() {
      if (dart.notNull(this[_pathComponents][$length]) < 2) {
        return null;
      }
      return new cloud_firestore.DocumentReference.__(this[_delegate$].parent(), this.firestore);
    }
    get path() {
      return this[_path];
    }
    document(path = null) {
      return new cloud_firestore.DocumentReference.__(this[_delegate$].document(path), this.firestore);
    }
    add(data) {
      return async.async(cloud_firestore.DocumentReference, (function* add() {
        let newDocument = this.document();
        yield newDocument.setData(data);
        return newDocument;
      }).bind(this));
    }
  };
  (cloud_firestore.CollectionReference.__ = function(_delegate, firestore) {
    this[_delegate$1] = _delegate;
    cloud_firestore.CollectionReference.__proto__.__.call(this, _delegate, firestore);
    ;
  }).prototype = cloud_firestore.CollectionReference.prototype;
  dart.addTypeTests(cloud_firestore.CollectionReference);
  dart.setMethodSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getMethods(cloud_firestore.CollectionReference.__proto__),
    parent: dart.fnType(cloud_firestore.DocumentReference, []),
    document: dart.fnType(cloud_firestore.DocumentReference, [], [core.String]),
    add: dart.fnType(async.Future$(cloud_firestore.DocumentReference), [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setGetterSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getGetters(cloud_firestore.CollectionReference.__proto__),
    id: core.String,
    path: core.String
  }));
  dart.setLibraryUri(cloud_firestore.CollectionReference, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.CollectionReference, () => ({
    __proto__: dart.getFields(cloud_firestore.CollectionReference.__proto__),
    [_delegate$]: dart.finalFieldType(collection_reference.CollectionReferencePlatform)
  }));
  const _firestore$ = dart.privateName(cloud_firestore, "_firestore");
  cloud_firestore.DocumentChange = class DocumentChange extends core.Object {
    get type() {
      return this[_delegate$].type;
    }
    get oldIndex() {
      return this[_delegate$].oldIndex;
    }
    get newIndex() {
      return this[_delegate$].newIndex;
    }
    get document() {
      return new cloud_firestore.DocumentSnapshot.__(this[_delegate$].document, this[_firestore$]);
    }
  };
  (cloud_firestore.DocumentChange.__ = function(_delegate, _firestore) {
    this[_delegate$] = _delegate;
    this[_firestore$] = _firestore;
    document_change.DocumentChangePlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.DocumentChange.prototype;
  dart.addTypeTests(cloud_firestore.DocumentChange);
  dart.setGetterSignature(cloud_firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentChange.__proto__),
    type: document_change.DocumentChangeType,
    oldIndex: core.int,
    newIndex: core.int,
    document: cloud_firestore.DocumentSnapshot
  }));
  dart.setLibraryUri(cloud_firestore.DocumentChange, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.DocumentChange, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentChange.__proto__),
    [_delegate$]: dart.finalFieldType(document_change.DocumentChangePlatform),
    [_firestore$]: dart.finalFieldType(cloud_firestore.Firestore)
  }));
  cloud_firestore._PlatformUtils = class _PlatformUtils extends core.Object {
    static toPlatformDocumentSnapshot(documentSnapshot) {
      return new document_snapshot.DocumentSnapshotPlatform.new(documentSnapshot.reference.path, documentSnapshot.data, new snapshot_metadata.SnapshotMetadataPlatform.new(documentSnapshot.metadata.hasPendingWrites, documentSnapshot.metadata.isFromCache), cloud_firestore_platform_interface.FirestorePlatform.instance);
    }
  };
  (cloud_firestore._PlatformUtils.new = function() {
    ;
  }).prototype = cloud_firestore._PlatformUtils.prototype;
  dart.addTypeTests(cloud_firestore._PlatformUtils);
  dart.setLibraryUri(cloud_firestore._PlatformUtils, "package:cloud_firestore/cloud_firestore.dart");
  const firestore$0 = dart.privateName(cloud_firestore, "DocumentReference.firestore");
  cloud_firestore.DocumentReference = class DocumentReference extends core.Object {
    get firestore() {
      return this[firestore$0];
    }
    set firestore(value) {
      super.firestore = value;
    }
    _equals(o) {
      if (o == null) return false;
      return cloud_firestore.DocumentReference.is(o) && dart.equals(o.firestore, this.firestore) && o.path == this.path;
    }
    get hashCode() {
      return ui.hashList(this[_delegate$].path[$split]("/"));
    }
    parent() {
      return new cloud_firestore.CollectionReference.__(this[_delegate$].parent(), this.firestore);
    }
    get path() {
      return this[_delegate$].path;
    }
    get documentID() {
      return this[_delegate$].documentID;
    }
    setData(data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      return this[_delegate$].setData(cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data), {merge: merge});
    }
    updateData(data) {
      return this[_delegate$].updateData(cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
    }
    get(opts) {
      let source = opts && 'source' in opts ? opts.source : C0 || CT.C0;
      return async.async(cloud_firestore.DocumentSnapshot, (function* get() {
        return new cloud_firestore.DocumentSnapshot.__(yield this[_delegate$].get({source: source}), this.firestore);
      }).bind(this));
    }
    delete() {
      return this[_delegate$].delete();
    }
    collection(collectionPath) {
      return this.firestore.collection(JSArrayOfString().of([this.path, collectionPath])[$join]("/"));
    }
    snapshots(opts) {
      let includeMetadataChanges = opts && 'includeMetadataChanges' in opts ? opts.includeMetadataChanges : false;
      return this[_delegate$].snapshots({includeMetadataChanges: includeMetadataChanges}).map(cloud_firestore.DocumentSnapshot, dart.fn(snapshot => new cloud_firestore.DocumentSnapshot.__(snapshot, this.firestore), DocumentSnapshotPlatformToDocumentSnapshot()));
    }
  };
  (cloud_firestore.DocumentReference.__ = function(_delegate, firestore) {
    this[_delegate$] = _delegate;
    this[firestore$0] = firestore;
    document_reference.DocumentReferencePlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.DocumentReference.prototype;
  dart.addTypeTests(cloud_firestore.DocumentReference);
  dart.setMethodSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(cloud_firestore.DocumentReference.__proto__),
    parent: dart.fnType(cloud_firestore.CollectionReference, []),
    setData: dart.fnType(async.Future$(dart.void), [core.Map$(core.String, dart.dynamic)], {merge: core.bool}, {}),
    updateData: dart.fnType(async.Future$(dart.void), [core.Map$(core.String, dart.dynamic)]),
    get: dart.fnType(async.Future$(cloud_firestore.DocumentSnapshot), [], {source: source.Source}, {}),
    delete: dart.fnType(async.Future$(dart.void), []),
    collection: dart.fnType(cloud_firestore.CollectionReference, [core.String]),
    snapshots: dart.fnType(async.Stream$(cloud_firestore.DocumentSnapshot), [], {includeMetadataChanges: core.bool}, {})
  }));
  dart.setGetterSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentReference.__proto__),
    path: core.String,
    documentID: core.String
  }));
  dart.setLibraryUri(cloud_firestore.DocumentReference, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.DocumentReference, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentReference.__proto__),
    [_delegate$]: dart.fieldType(document_reference.DocumentReferencePlatform),
    firestore: dart.finalFieldType(cloud_firestore.Firestore)
  }));
  dart.defineExtensionMethods(cloud_firestore.DocumentReference, ['_equals']);
  dart.defineExtensionAccessors(cloud_firestore.DocumentReference, ['hashCode']);
  cloud_firestore.DocumentSnapshot = class DocumentSnapshot extends core.Object {
    get reference() {
      return this[_firestore$].document(this[_delegate$].reference.path);
    }
    get data() {
      return cloud_firestore._CodecUtility.replaceDelegatesWithValueInMap(this[_delegate$].data, this[_firestore$]);
    }
    get metadata() {
      return new cloud_firestore.SnapshotMetadata.__(this[_delegate$].metadata);
    }
    _get(key) {
      return this.data[$_get](key);
    }
    get documentID() {
      return this[_delegate$].documentID;
    }
    get exists() {
      return this.data != null;
    }
  };
  (cloud_firestore.DocumentSnapshot.__ = function(_delegate, _firestore) {
    this[_delegate$] = _delegate;
    this[_firestore$] = _firestore;
    ;
  }).prototype = cloud_firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(cloud_firestore.DocumentSnapshot);
  dart.setMethodSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(cloud_firestore.DocumentSnapshot.__proto__),
    _get: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setGetterSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(cloud_firestore.DocumentSnapshot.__proto__),
    reference: cloud_firestore.DocumentReference,
    data: core.Map$(core.String, dart.dynamic),
    metadata: cloud_firestore.SnapshotMetadata,
    documentID: core.String,
    exists: core.bool
  }));
  dart.setLibraryUri(cloud_firestore.DocumentSnapshot, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.DocumentSnapshot, () => ({
    __proto__: dart.getFields(cloud_firestore.DocumentSnapshot.__proto__),
    [_delegate$]: dart.fieldType(document_snapshot.DocumentSnapshotPlatform),
    [_firestore$]: dart.finalFieldType(cloud_firestore.Firestore)
  }));
  cloud_firestore.FieldValue = class FieldValue extends field_value.FieldValuePlatform {
    static arrayUnion(elements) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.arrayUnion(core.List._check(cloud_firestore._CodecUtility.valueEncode(elements))));
    }
    static arrayRemove(elements) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.arrayRemove(core.List._check(cloud_firestore._CodecUtility.valueEncode(elements))));
    }
    static delete() {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.delete());
    }
    static serverTimestamp() {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.serverTimestamp());
    }
    static increment(value) {
      return new cloud_firestore.FieldValue.__(cloud_firestore.FieldValue._factory.increment(value));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this[_delegate$]) + ")";
    }
    _equals(o) {
      if (o == null) return false;
      return cloud_firestore.FieldValue.is(o) && dart.equals(o[_delegate$], this[_delegate$]);
    }
    get hashCode() {
      return dart.hashCode(this[_delegate$]);
    }
  };
  (cloud_firestore.FieldValue.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    cloud_firestore.FieldValue.__proto__.new.call(this, _delegate);
    ;
  }).prototype = cloud_firestore.FieldValue.prototype;
  dart.addTypeTests(cloud_firestore.FieldValue);
  dart.setMethodSignature(cloud_firestore.FieldValue, () => ({
    __proto__: dart.getMethods(cloud_firestore.FieldValue.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(cloud_firestore.FieldValue, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.FieldValue, () => ({
    __proto__: dart.getFields(cloud_firestore.FieldValue.__proto__),
    [_delegate$]: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(cloud_firestore.FieldValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(cloud_firestore.FieldValue, ['hashCode']);
  dart.defineLazy(cloud_firestore.FieldValue, {
    /*cloud_firestore.FieldValue._factory*/get _factory() {
      return field_value_factory.FieldValueFactoryPlatform.instance;
    }
  });
  const _delegatePackingProperty = dart.privateName(cloud_firestore, "_delegatePackingProperty");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C1;
  cloud_firestore.Firestore = class Firestore extends core.Object {
    get [_delegate$]() {
      if (this[_delegatePackingProperty] == null) {
        this[_delegatePackingProperty] = cloud_firestore_platform_interface.FirestorePlatform.instance;
      }
      return this[_delegatePackingProperty];
    }
    static get instance() {
      return new cloud_firestore.Firestore.new();
    }
    get app() {
      return this[_delegate$].app;
    }
    batch() {
      return new cloud_firestore.WriteBatch.__(this[_delegate$].batch());
    }
    collection(path) {
      if (!(path != null)) dart.assertFailed(null, "org-dartlang-app:///packages/cloud_firestore/src/firestore.dart", 45, 12, "path != null");
      return new cloud_firestore.CollectionReference.__(this[_delegate$].collection(path), this);
    }
    collectionGroup(path) {
      return new cloud_firestore.Query.__(this[_delegate$].collectionGroup(path), this);
    }
    document(path) {
      return new cloud_firestore.DocumentReference.__(this[_delegate$].document(path), this);
    }
    enablePersistence(enable) {
      return this[_delegate$].enablePersistence(enable);
    }
    runTransaction(transactionHandler, opts) {
      let timeout = opts && 'timeout' in opts ? opts.timeout : C1 || CT.C1;
      return this[_delegate$].runTransaction(dart.fn(platformTransaction => transactionHandler(new cloud_firestore.Transaction.__(platformTransaction, this)), TransactionPlatformToFuture()), {timeout: timeout});
    }
    settings(opts) {
      let persistenceEnabled = opts && 'persistenceEnabled' in opts ? opts.persistenceEnabled : null;
      let host = opts && 'host' in opts ? opts.host : null;
      let sslEnabled = opts && 'sslEnabled' in opts ? opts.sslEnabled : null;
      let cacheSizeBytes = opts && 'cacheSizeBytes' in opts ? opts.cacheSizeBytes : null;
      return this[_delegate$].settings({persistenceEnabled: persistenceEnabled, host: host, sslEnabled: sslEnabled, cacheSizeBytes: cacheSizeBytes});
    }
  };
  (cloud_firestore.Firestore.new = function(opts) {
    let app = opts && 'app' in opts ? opts.app : null;
    this[_delegatePackingProperty] = app != null ? cloud_firestore_platform_interface.FirestorePlatform.instanceFor({app: app}) : cloud_firestore_platform_interface.FirestorePlatform.instance;
    ;
  }).prototype = cloud_firestore.Firestore.prototype;
  dart.addTypeTests(cloud_firestore.Firestore);
  dart.setMethodSignature(cloud_firestore.Firestore, () => ({
    __proto__: dart.getMethods(cloud_firestore.Firestore.__proto__),
    batch: dart.fnType(cloud_firestore.WriteBatch, []),
    collection: dart.fnType(cloud_firestore.CollectionReference, [core.String]),
    collectionGroup: dart.fnType(cloud_firestore.Query, [core.String]),
    document: dart.fnType(cloud_firestore.DocumentReference, [core.String]),
    enablePersistence: dart.fnType(async.Future$(dart.void), [core.bool]),
    runTransaction: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [dart.fnType(async.Future, [cloud_firestore.Transaction])], {timeout: core.Duration}, {}),
    settings: dart.fnType(async.Future$(dart.void), [], {cacheSizeBytes: core.int, host: core.String, persistenceEnabled: core.bool, sslEnabled: core.bool}, {})
  }));
  dart.setGetterSignature(cloud_firestore.Firestore, () => ({
    __proto__: dart.getGetters(cloud_firestore.Firestore.__proto__),
    [_delegate$]: cloud_firestore_platform_interface.FirestorePlatform,
    app: firebase_app.FirebaseApp
  }));
  dart.setLibraryUri(cloud_firestore.Firestore, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.Firestore, () => ({
    __proto__: dart.getFields(cloud_firestore.Firestore.__proto__),
    [_delegatePackingProperty]: dart.fieldType(cloud_firestore_platform_interface.FirestorePlatform)
  }));
  cloud_firestore.QuerySnapshot = class QuerySnapshot extends core.Object {
    get documents() {
      return this[_delegate$].documents[$map](cloud_firestore.DocumentSnapshot, dart.fn(item => new cloud_firestore.DocumentSnapshot.__(item, this[_firestore$]), DocumentSnapshotPlatformToDocumentSnapshot()))[$toList]();
    }
    get documentChanges() {
      return this[_delegate$].documentChanges[$map](cloud_firestore.DocumentChange, dart.fn(item => new cloud_firestore.DocumentChange.__(item, this[_firestore$]), DocumentChangePlatformToDocumentChange()))[$toList]();
    }
    get metadata() {
      return new cloud_firestore.SnapshotMetadata.__(this[_delegate$].metadata);
    }
  };
  (cloud_firestore.QuerySnapshot.__ = function(_delegate, _firestore) {
    this[_delegate$] = _delegate;
    this[_firestore$] = _firestore;
    query_snapshot.QuerySnapshotPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.QuerySnapshot.prototype;
  dart.addTypeTests(cloud_firestore.QuerySnapshot);
  dart.setGetterSignature(cloud_firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(cloud_firestore.QuerySnapshot.__proto__),
    documents: core.List$(cloud_firestore.DocumentSnapshot),
    documentChanges: core.List$(cloud_firestore.DocumentChange),
    metadata: cloud_firestore.SnapshotMetadata
  }));
  dart.setLibraryUri(cloud_firestore.QuerySnapshot, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.QuerySnapshot, () => ({
    __proto__: dart.getFields(cloud_firestore.QuerySnapshot.__proto__),
    [_delegate$]: dart.finalFieldType(query_snapshot.QuerySnapshotPlatform),
    [_firestore$]: dart.finalFieldType(cloud_firestore.Firestore)
  }));
  cloud_firestore._CodecUtility = class _CodecUtility extends core.Object {
    static replaceValueWithDelegatesInMap(data) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfString$dynamic().from(data);
      output[$updateAll](dart.fn((_, value) => cloud_firestore._CodecUtility.valueEncode(value), StringAnddynamicTodynamic()));
      return output;
    }
    static replaceValueWithDelegatesInArray(data) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, dart.fn(value => cloud_firestore._CodecUtility.valueEncode(value), dynamicTodynamic()))[$toList]();
    }
    static replaceDelegatesWithValueInMap(data, firestore) {
      if (data == null) {
        return null;
      }
      let output = LinkedHashMapOfString$dynamic().from(data);
      output[$updateAll](dart.fn((_, value) => cloud_firestore._CodecUtility.valueDecode(value, firestore), StringAnddynamicTodynamic()));
      return output;
    }
    static replaceDelegatesWithValueInArray(data, firestore) {
      if (data == null) {
        return null;
      }
      return core.List.from(data)[$map](dart.dynamic, dart.fn(value => cloud_firestore._CodecUtility.valueDecode(value, firestore), dynamicTodynamic()))[$toList]();
    }
    static valueEncode(value) {
      if (cloud_firestore.DocumentReference.is(value)) {
        return value[_delegate$];
      } else if (core.List.is(value)) {
        return cloud_firestore._CodecUtility.replaceValueWithDelegatesInArray(value);
      } else if (core.Map.is(value)) {
        return cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(value);
      }
      return value;
    }
    static valueDecode(value, firestore) {
      if (document_reference.DocumentReferencePlatform.is(value)) {
        return new cloud_firestore.DocumentReference.__(value, firestore);
      } else if (core.List.is(value)) {
        return cloud_firestore._CodecUtility.replaceDelegatesWithValueInArray(value, firestore);
      } else if (core.Map.is(value)) {
        return cloud_firestore._CodecUtility.replaceDelegatesWithValueInMap(value, firestore);
      }
      return value;
    }
  };
  (cloud_firestore._CodecUtility.new = function() {
    ;
  }).prototype = cloud_firestore._CodecUtility.prototype;
  dart.addTypeTests(cloud_firestore._CodecUtility);
  dart.setLibraryUri(cloud_firestore._CodecUtility, "package:cloud_firestore/cloud_firestore.dart");
  cloud_firestore.SnapshotMetadata = class SnapshotMetadata extends core.Object {
    get hasPendingWrites() {
      return this[_delegate$].hasPendingWrites;
    }
    get isFromCache() {
      return this[_delegate$].isFromCache;
    }
  };
  (cloud_firestore.SnapshotMetadata.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    ;
  }).prototype = cloud_firestore.SnapshotMetadata.prototype;
  dart.addTypeTests(cloud_firestore.SnapshotMetadata);
  dart.setGetterSignature(cloud_firestore.SnapshotMetadata, () => ({
    __proto__: dart.getGetters(cloud_firestore.SnapshotMetadata.__proto__),
    hasPendingWrites: core.bool,
    isFromCache: core.bool
  }));
  dart.setLibraryUri(cloud_firestore.SnapshotMetadata, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.SnapshotMetadata, () => ({
    __proto__: dart.getFields(cloud_firestore.SnapshotMetadata.__proto__),
    [_delegate$]: dart.fieldType(snapshot_metadata.SnapshotMetadataPlatform)
  }));
  const _finish = dart.privateName(cloud_firestore, "_finish");
  cloud_firestore.Transaction = class Transaction extends core.Object {
    [_finish]() {
      return this[_delegate$].finish();
    }
    get(documentReference) {
      return async.async(cloud_firestore.DocumentSnapshot, (function* get() {
        let result = (yield this[_delegate$].get(documentReference[_delegate$]));
        if (result != null) {
          return new cloud_firestore.DocumentSnapshot.__(result, this[_firestore$]);
        } else {
          return null;
        }
      }).bind(this));
    }
    delete(documentReference) {
      return this[_delegate$].delete(documentReference[_delegate$]);
    }
    update(documentReference, data) {
      return async.async(dart.void, (function* update() {
        return this[_delegate$].update(documentReference[_delegate$], cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
      }).bind(this));
    }
    set(documentReference, data) {
      return this[_delegate$].set(documentReference[_delegate$], cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
    }
  };
  (cloud_firestore.Transaction.__ = function(_delegate, _firestore) {
    this[_delegate$] = _delegate;
    this[_firestore$] = _firestore;
    transaction.TransactionPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.Transaction.prototype;
  dart.addTypeTests(cloud_firestore.Transaction);
  dart.setMethodSignature(cloud_firestore.Transaction, () => ({
    __proto__: dart.getMethods(cloud_firestore.Transaction.__proto__),
    [_finish]: dart.fnType(async.Future$(dart.void), []),
    get: dart.fnType(async.Future$(cloud_firestore.DocumentSnapshot), [cloud_firestore.DocumentReference]),
    delete: dart.fnType(async.Future$(dart.void), [cloud_firestore.DocumentReference]),
    update: dart.fnType(async.Future$(dart.void), [cloud_firestore.DocumentReference, core.Map$(core.String, dart.dynamic)]),
    set: dart.fnType(async.Future$(dart.void), [cloud_firestore.DocumentReference, core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(cloud_firestore.Transaction, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.Transaction, () => ({
    __proto__: dart.getFields(cloud_firestore.Transaction.__proto__),
    [_firestore$]: dart.finalFieldType(cloud_firestore.Firestore),
    [_delegate$]: dart.fieldType(transaction.TransactionPlatform)
  }));
  cloud_firestore.WriteBatch = class WriteBatch extends core.Object {
    commit() {
      return this[_delegate$].commit();
    }
    delete(document) {
      return this[_delegate$].delete(document[_delegate$]);
    }
    setData(document, data, opts) {
      let merge = opts && 'merge' in opts ? opts.merge : false;
      return this[_delegate$].setData(document[_delegate$], cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data), {merge: merge});
    }
    updateData(document, data) {
      return this[_delegate$].updateData(document[_delegate$], cloud_firestore._CodecUtility.replaceValueWithDelegatesInMap(data));
    }
  };
  (cloud_firestore.WriteBatch.__ = function(_delegate) {
    this[_delegate$] = _delegate;
    write_batch.WriteBatchPlatform.verifyExtends(this[_delegate$]);
  }).prototype = cloud_firestore.WriteBatch.prototype;
  dart.addTypeTests(cloud_firestore.WriteBatch);
  dart.setMethodSignature(cloud_firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(cloud_firestore.WriteBatch.__proto__),
    commit: dart.fnType(async.Future$(dart.void), []),
    delete: dart.fnType(dart.void, [cloud_firestore.DocumentReference]),
    setData: dart.fnType(dart.void, [cloud_firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], {merge: core.bool}, {}),
    updateData: dart.fnType(dart.void, [cloud_firestore.DocumentReference, core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(cloud_firestore.WriteBatch, "package:cloud_firestore/cloud_firestore.dart");
  dart.setFieldSignature(cloud_firestore.WriteBatch, () => ({
    __proto__: dart.getFields(cloud_firestore.WriteBatch.__proto__),
    [_delegate$]: dart.finalFieldType(write_batch.WriteBatchPlatform)
  }));
  dart.trackLibraries("packages/cloud_firestore/cloud_firestore", {
    "package:cloud_firestore/cloud_firestore.dart": cloud_firestore
  }, {
    "package:cloud_firestore/cloud_firestore.dart": ["src/collection_reference.dart", "src/document_change.dart", "src/utils/platform_utils.dart", "src/document_reference.dart", "src/document_snapshot.dart", "src/field_value.dart", "src/firestore.dart", "src/query.dart", "src/query_snapshot.dart", "src/utils/codec_utility.dart", "src/snapshot_metadata.dart", "src/transaction.dart", "src/write_batch.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/query.dart","src/collection_reference.dart","src/document_change.dart","src/utils/platform_utils.dart","src/document_reference.dart","src/document_snapshot.dart","src/field_value.dart","src/firestore.dart","src/query_snapshot.dart","src/utils/codec_utility.dart","src/snapshot_metadata.dart","src/transaction.dart","src/write_batch.dart"],"names":[],"mappings":"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","file":"cloud_firestore.ddc.js"}');
  // Exports:
  return {
    cloud_firestore: cloud_firestore
  };
});

//# sourceMappingURL=cloud_firestore.ddc.js.map
