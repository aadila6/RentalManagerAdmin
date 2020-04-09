define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var services = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/services", {
    "package:flutter/services.dart": services
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"services.ddc.js"}');
  // Exports:
  return {
    services: services
  };
});

//# sourceMappingURL=services.ddc.js.map
