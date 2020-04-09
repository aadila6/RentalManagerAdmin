define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var scheduler = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/scheduler", {
    "package:flutter/scheduler.dart": scheduler
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"scheduler.ddc.js"}');
  // Exports:
  return {
    scheduler: scheduler
  };
});

//# sourceMappingURL=scheduler.ddc.js.map
