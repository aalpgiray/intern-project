// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({16:[function(require,module,exports) {

},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(_appElement, _dataStore) {
    _classCallCheck(this, App);

    this.dataStore = _dataStore;
    this.appElement = _appElement;
    this.template = '<div id="Inner">\r\n    <h1>Lorem Ipsum</h1>\r\n    <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>\r\n    <h5>"Ac\u0131y\u0131 seven, arayan ve ona sahip olmak isteyen hi\xE7 kimse yoktur. Nedeni basit. \xC7\xFCnk\xFC o ac\u0131d\u0131r..."</h5>\r\n\r\n    <hr>\r\n\r\n    <div id="Content">\r\n        <div class="boxed">\r\n            <!-- \r\n    \r\n    \r\n    If you want to use Lorem Ipsum within another program please contact us for details\r\n    on our API rather than parse the HTML below, we have XML and JSON available.\r\n    \r\n    \r\n     -->\r\n            <div id="lipsum">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec pulvinar libero. Nullam non nunc enim. Cras commodo tempus\r\n                    lacus et placerat. Morbi non lectus venenatis, laoreet nisl sed, elementum nibh. Mauris in arcu sed ipsum\r\n                    bibendum vehicula. Integer a mauris molestie, porttitor ligula vel, vulputate augue. Suspendisse potenti.\r\n                    Vestibulum eget faucibus mauris.\r\n                </p>\r\n                <p>\r\n                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris semper interdum tortor at\r\n                    semper. Fusce ut ullamcorper enim, vel sollicitudin nibh. Curabitur elementum dolor in ante aliquet,\r\n                    in congue orci feugiat. Nunc eleifend nunc eu ornare dignissim. Vestibulum ante ipsum primis in faucibus\r\n                    orci luctus et ultrices posuere cubilia Curae; Curabitur massa turpis, interdum nec scelerisque nec,\r\n                    semper at nisi. Nullam id dapibus lorem, in interdum nisi. Donec imperdiet orci ac nisi eleifend varius.\r\n                    Donec efficitur sit amet enim ut fermentum. Morbi sodales mauris leo, nec placerat lorem gravida non.\r\n                    Mauris sed urna ex.\r\n                </p>\r\n                <p>\r\n                    In et eros libero. Sed mi arcu, consectetur vel porta sed, sagittis quis lacus. Nam dapibus sodales leo ac molestie. Maecenas\r\n                    laoreet tristique justo, ac tincidunt massa dapibus a. Nunc elementum porta metus sed sodales. Cras vel\r\n                    elit et felis convallis finibus. Duis dictum massa quis fermentum fringilla. Vestibulum dignissim, ante\r\n                    et molestie lacinia, augue urna vestibulum magna, sit amet vulputate erat sapien sed risus. Ut gravida\r\n                    egestas augue ut congue. Donec sed suscipit purus, eget iaculis mi. Quisque hendrerit sit amet nibh ac\r\n                    sollicitudin. Morbi nunc est, pharetra sit amet condimentum vel, euismod a lectus. Integer tempor quam\r\n                    dui, sed euismod lorem convallis rutrum. Vestibulum felis augue, tincidunt sit amet orci vitae, mollis\r\n                    iaculis eros. Integer ut odio eu nulla faucibus tempor.\r\n                </p>\r\n                <p>\r\n                    Ut suscipit orci fermentum dignissim viverra. Proin imperdiet auctor dolor vitae luctus. Cras feugiat est et diam congue,\r\n                    et viverra est sollicitudin. Sed imperdiet eleifend odio in accumsan. Quisque vel luctus neque. Nam posuere\r\n                    luctus ligula id malesuada. Quisque venenatis ipsum sed luctus bibendum. Morbi maximus aliquam metus,\r\n                    sodales luctus ligula pretium non. Phasellus felis libero, euismod ut hendrerit posuere, aliquam eu mauris.\r\n                    Phasellus luctus, augue non commodo dapibus, nibh lorem tincidunt erat, ut consequat dui odio sodales\r\n                    erat. Suspendisse placerat nulla lorem, quis hendrerit lectus cursus nec. Donec congue sem a tincidunt\r\n                    vestibulum. Maecenas et maximus quam, et molestie quam. Aenean elementum magna id lorem placerat, non\r\n                    egestas ipsum pretium. Proin dolor diam, elementum quis finibus non, vehicula at ipsum. Donec eu rhoncus\r\n                    lacus.\r\n                </p>\r\n                <p>\r\n                    Nulla arcu mauris, ornare nec molestie vel, suscipit non ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices\r\n                    posuere cubilia Curae; Vivamus non ipsum nec dolor porttitor porttitor. Praesent nunc urna, bibendum\r\n                    vestibulum imperdiet at, ullamcorper ut orci. Nunc egestas magna in blandit accumsan. Etiam laoreet neque\r\n                    in justo posuere congue. Mauris in risus in nisl elementum mattis eu a orci. Sed sit amet euismod mauris.\r\n                    Mauris lacinia metus et lorem maximus viverra non in odio. Ut ultrices lacus in diam aliquam, et aliquam\r\n                    nunc sagittis. Aenean sit amet quam enim. Nullam tincidunt interdum iaculis.\r\n                </p>\r\n            </div>\r\n            <div id="generated">5 paragraf, 497 s\xF6zc\xFCk, 3300 karakter\r\n                <a href="https://tr.lipsum.com/" title="Lorem Ipsum">Lorem Ipsum</a> \xFCretilmi\u015Ftir</div>\r\n        </div>\r\n        <div id="bannerL">\r\n            <div id="div-gpt-ad-1474537762122-2">\r\n                <script type="text/javascript">googletag.cmd.push(function () { googletag.display("div-gpt-ad-1474537762122-2"); });</script>\r\n            </div>\r\n        </div>\r\n        <div id="bannerR">\r\n            <div id="div-gpt-ad-1474537762122-3">\r\n                <script type="text/javascript">googletag.cmd.push(function () { googletag.display("div-gpt-ad-1474537762122-3"); });</script>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class="boxed">\r\n        <a style="text-decoration:none" href="mailto:help@lipsum.com">help@lipsum.com</a>\r\n        <br>\r\n        <a style="text-decoration:none" target="_blank" href="/privacy.pdf">Privacy Policy</a>\r\n    </div>\r\n\r\n</div>';
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      this.appElement.innerHTML = this.template;
    }
  }]);

  return App;
}();

exports.default = App;
},{"fs":16}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./App.js');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_App).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./App.js":8}],4:[function(require,module,exports) {
'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App2.default(document.getElementById('app'));

app.render();
},{"./App":14}],6:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '41568' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[6,4], null)
//# sourceMappingURL=/translator.2fa321ca.map