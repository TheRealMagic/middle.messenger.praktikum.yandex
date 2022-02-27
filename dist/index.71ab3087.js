// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8d4jI":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ee5f23f571ab3087";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i3jPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _router = require("../src/utils/RouteUtils/Router");
var _loginPageController = require("../src/controllers/LoginPageController");
var _loginPageControllerDefault = parcelHelpers.interopDefault(_loginPageController);
var _profilePageController = require("../src/controllers/ProfilePageController");
var _chatsPageController = require("../src/controllers/ChatsPageController");
var _signUpPageController = require("../src/controllers/SignUpPageController");
var _signUpPageControllerDefault = parcelHelpers.interopDefault(_signUpPageController);
var _userApi = require("../src/utils/API/UserApi");
var _applicationStore = require("../src/modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _404ErrorController = require("../src/controllers/404ErrorController");
var _404ErrorControllerDefault = parcelHelpers.interopDefault(_404ErrorController);
_userApi.UserApi.getUser().then(()=>onCheckUser()
);
_applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, ()=>console.dir(_applicationStoreDefault.default.getState())
);
function onCheckUser() {
    const router = new _router.Router("body");
    router.use("/", _loginPageControllerDefault.default).use("/sign-up", _signUpPageControllerDefault.default).use("/settings", _profilePageController.ProfilePageController).use("/messenger", _chatsPageController.ChatsPageController).use("/404", _404ErrorControllerDefault.default).start();
    _applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, (path, value)=>{
        if (path === "user" && !value?.id) router.go("/");
    });
}

},{"../src/utils/RouteUtils/Router":"8BLVw","../src/controllers/LoginPageController":"gvLqv","../src/controllers/ProfilePageController":"1KxVp","../src/controllers/ChatsPageController":"i3Rdb","../src/controllers/SignUpPageController":"5Wb5J","../src/utils/API/UserApi":"8beJ7","../src/modules/ApplicationState/ApplicationStore":"1aamq","../src/controllers/404ErrorController":"ktlA8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BLVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router
);
var _route = require("./Route");
var _get = require("../get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
class Router {
    constructor(rootQuery){
        if (Router.__instance) return Router.__instance;
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block) {
        const route = new _route.Route(pathname, block, {
            rootQuery: this._rootQuery
        });
        this.routes.push(route);
        return this;
    }
    start() {
        window.addEventListener("popstate", (e)=>{
            this._onRoute(e.currentTarget.location.pathname);
        });
        let user = _getDefault.default(_applicationStoreDefault.default.getState(), "user");
        const path = window.location.pathname;
        if (user && (path === "/" || path === "/sign-up")) this.go("/messenger");
        else this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        this._currentRoute = route;
        if (!route) this.go("/404");
        else route.render();
    }
    go(pathname) {
        this.history.pushState({
        }, "", pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getRoute(pathname) {
        return this.routes.find((route)=>route.match(pathname)
        );
    }
}

},{"./Route":"4kN3J","../get":"2rbBD","../../modules/ApplicationState/ApplicationStore":"1aamq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4kN3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Route", ()=>Route
);
var _render = require("../render");
var _baseController = require("../../controllers/BaseController");
class Route {
    constructor(pathname, view, props){
        this._pathname = pathname;
        this._controllerClass = view;
        this._controller = null;
        this._props = props;
    }
    navigate(pathname) {
        if (this.match(pathname)) this.render();
    }
    leave() {
        if (this._controller) this._controller.hideView();
    }
    match(pathname) {
        return isEqual(pathname, this._pathname);
    }
    render() {
        if (!this._controller) this._controller = new this._controllerClass(this._props);
        _render.render(this._props.rootQuery, this._controller.view);
        this._controller.eventBus.emit(_baseController.BaseControllerEvents.VIEW_RENDERED);
    }
}
function isEqual(lhs, rhs) {
    return lhs === rhs;
}

},{"../render":"duBlU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../controllers/BaseController":"cvh6U"}],"duBlU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "renderPopup", ()=>renderPopup
);
function render(query, block) {
    const root = document.querySelector(query);
    if (root) {
        root.innerHTML = "";
        root.appendChild(block.getContent());
    }
    return root;
}
function renderPopup(block) {
    const root = document.querySelector("body");
    if (root) root.appendChild(block.getContent());
    return root;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cvh6U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseControllerEvents", ()=>BaseControllerEvents
);
parcelHelpers.export(exports, "BaseController", ()=>BaseController
);
var _eventBus = require("../utils/EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
let BaseControllerEvents;
(function(BaseControllerEvents1) {
    BaseControllerEvents1["VIEW_RENDERED"] = "viewRendered";
})(BaseControllerEvents || (BaseControllerEvents = {
}));
class BaseController {
    constructor(view){
        this.view = view;
        this.eventBus = new _eventBusDefault.default();
        this.subscribeBase();
    }
    subscribeBase() {
        this.eventBus.on(BaseControllerEvents.VIEW_RENDERED, ()=>this.onViewRendered()
        );
    }
    onViewRendered() {
    }
    hideView() {
        this.view.hide();
    }
    showView() {
        this.view.show();
    }
}

},{"../utils/EventBus":"iVvKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVvKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EventBus
);
class EventBus {
    constructor(){
        this.listeners = {
        };
    }
    on(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event] = this.listeners[event].filter((listener)=>listener !== callback
        );
    }
    emit(event, ...args) {
        if (!this.listeners[event]) throw new Error(`Нет события: ${event}`);
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rbBD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function get(obj, path, defaultValue) {
    const keys = path.split(".");
    let result = obj;
    for (let key of keys){
        result = result[key];
        if (result === undefined) return defaultValue;
    }
    return result ?? defaultValue;
}
exports.default = get;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aamq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StoreEvents", ()=>StoreEvents
);
var _set = require("../../utils/set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _eventBus = require("../../utils/EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
let StoreEvents;
(function(StoreEvents1) {
    StoreEvents1["Updated"] = "updated";
})(StoreEvents || (StoreEvents = {
}));
class ApplicationStore extends _eventBusDefault.default {
    set(path, value) {
        _setDefault.default(this.state, path, value);
        this.emit(StoreEvents.Updated, path, value);
    }
    getState() {
        return this.state;
    }
    constructor(...args){
        super(...args);
        this.state = {
        };
    }
}
exports.default = new ApplicationStore();

},{"../../utils/set":"5RfbO","../../utils/EventBus":"iVvKU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RfbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespace = require("./namespace");
var _namespaceDefault = parcelHelpers.interopDefault(_namespace);
var _merge = require("./merge");
var _mergeDefault = parcelHelpers.interopDefault(_merge);
function set(object, path, value) {
    if (typeof object !== "object" || object === null || Array.isArray(object)) return object;
    checkPath(path);
    const newObj = _namespaceDefault.default(path, value);
    return _mergeDefault.default(object, newObj);
}
function checkPath(part) {
    if (typeof part !== "string") throw new Error("path must be string");
}
exports.default = set;

},{"./namespace":"9Bxf5","./merge":"haiPR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Bxf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function namespace(value, start) {
    if (~value.indexOf(",")) throw new Error("Нет точек");
    const arr = value.split(".");
    return arr.reduceRight((result, item, index)=>{
        if (index === arr.length - 1 && start !== undefined) result = {
            [item]: start
        };
        else result = {
            [item]: result
        };
        return result;
    }, {
    });
}
exports.default = namespace;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haiPR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function merge(lhs, rhs) {
    Object.keys(rhs).reduce((result, key)=>{
        const left = result[key], right = rhs[key];
        if (key in result && checkObject(left) && checkObject(right)) return merge(left, right);
        result[key] = rhs[key];
        return result;
    }, lhs);
    return lhs;
}
function checkObject(value) {
    return typeof value === "object" && value && !Array.isArray(value);
}
exports.default = merge;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvLqv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>LoginPageController
);
var _baseController = require("./BaseController");
var _login = require("../pages/login/login");
var _loginDefault = parcelHelpers.interopDefault(_login);
var _loginPageApi = require("../utils/API/LoginPageApi");
var _applicationStore = require("../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _router = require("../utils/RouteUtils/Router");
const loginPageApi = new _loginPageApi.LoginPageApi();
class LoginPageController extends _baseController.BaseController {
    constructor(){
        super(new _loginDefault.default());
        this.currentState = "login";
        this.view.eventBus.on("formSubmit", (data)=>this.onFormSubmit(data)
        );
        _applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, (path, value)=>this.onApplicationStoreUpdate(path, value)
        );
    }
    onApplicationStoreUpdate(path, value) {
        if (path === "user" && value && value.id) this.onChangeUser();
        if (path === "loginError") this.view.eventBus.emit("loginError", value);
    }
    onChangeUser() {
        const router = new _router.Router("body");
        router.go("/messenger");
    }
    onFormSubmit(data) {
        loginPageApi.login(data);
    }
}

},{"./BaseController":"cvh6U","../pages/login/login":"dCEbf","../utils/API/LoginPageApi":"hAFc7","../modules/ApplicationState/ApplicationStore":"1aamq","../utils/RouteUtils/Router":"8BLVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCEbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>LoginPage
);
var _block = require("../../components/block/block");
var _template = require("./template");
var _label = require("../../components/label/label");
var _container = require("../../components/container/container");
var _loginForm = require("../../modules/loginForm/loginForm");
var _input = require("../../components/Input/input");
var _router = require("../../utils/RouteUtils/Router");
var _errorPopup = require("../../modules/popup/errorPopup");
var _errorPopupDefault = parcelHelpers.interopDefault(_errorPopup);
class LoginPage extends _block.Block {
    constructor(){
        const label = new _label.Label({
            classes: [
                "form-header"
            ],
            textContent: "Вход"
        });
        const link = new _block.Block("a", {
            classes: [
                "base-link",
                "sign-link"
            ],
            href: "/",
            textContent: "Нет аккаунта?"
        }, _template.authLinkTemplate);
        const btn = new _input.Input({
            type: "submit",
            value: "Авторизоваться",
            listeners: {
                click: function() {
                }
            },
            classes: [
                "base-input",
                "base-input-button",
                "sign-btn",
                "action-container__autorize-btn"
            ]
        });
        const form = new _loginForm.LoginForm({
            link,
            btn
        });
        const mainBlock = new _container.Container({
            classes: [
                "login-block",
                "main-block"
            ],
            label,
            form
        });
        super("div", {
            mainBlock
        }, _template.template);
        form.setProps({
            listeners: {
                submit: this.onLoginSubmit.bind(this)
            }
        });
        link.setProps({
            listeners: this.getLinkListener()
        });
        this.form = form;
        this.eventBus.on("loginError", (errorText)=>this.onLoginError(errorText)
        );
    }
    getLinkListener() {
        return {
            click: (e)=>{
                e.preventDefault();
                const router = new _router.Router("body");
                router.go("/sign-up");
            }
        };
    }
    onLoginSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            login: form.login.value,
            password: form.password.value
        };
        const isNotValid = this.form.validate();
        this.eventBus.emit("formSubmit", data);
    }
    onLoginError(errorText) {
        _errorPopupDefault.default.showErrorPopup(errorText);
    }
}

},{"../../components/block/block":"5WfBa","./template":"gtofV","../../components/label/label":"7Iu1p","../../components/container/container":"1QgVj","../../modules/loginForm/loginForm":"4JA1L","../../components/Input/input":"bl4Uw","../../utils/RouteUtils/Router":"8BLVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../modules/popup/errorPopup":"jNphn"}],"5WfBa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block
);
var _eventBus = require("../../utils/EventBus");
var _eventBusDefault = parcelHelpers.interopDefault(_eventBus);
var _templator = require("../../utils/Templator/Templator");
var _stylesScss = require("./styles.scss");
class Block {
    /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */ constructor(tagName = "div", props, template){
        this.template = "";
        this.setProps = (nextProps)=>{
            if (!nextProps) return;
            Object.assign(this.props, nextProps);
        };
        this.template = template;
        this._meta = {
            tagName,
            props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = new _eventBusDefault.default();
        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    init() {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    _createResources() {
        const { tagName  } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidMount() {
    }
    dispatchComponentDidMount() {
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldValue, newValue) {
        return oldValue !== newValue;
    }
    _componentDidUpdate(oldValue, newValue) {
        const response = this.componentDidUpdate(oldValue, newValue);
        if (response) this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    get element() {
        return this._element;
    }
    _render() {
        const newElement = this.render();
        this.removeListeners();
        const tempEl = this._element;
        this._element = newElement;
        tempEl.replaceWith(newElement);
        this.addListeners();
    }
    // Может переопределять пользователь, необязательно трогать
    render() {
        const templator = new _templator.Templator(this.template || "");
        return templator.compile(this.props);
    }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props || {
        }, {
            get (target, property, receiver) {
                return Reflect.get(target, property, receiver);
            },
            // eslint-disable-next-line max-params
            set: (target, property, value, receiver)=>{
                if (target[property] !== value) {
                    const oldValue = target[property];
                    Reflect.set(target, property, value, receiver);
                    self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, value);
                }
                return true;
            },
            deleteProperty () {
                throw new Error("нет доступа");
            }
        });
    }
    addListeners() {
        const listeners = this.props.listeners;
        if (!listeners || !this.element) return;
        Object.entries(listeners).forEach(([eventName, handler])=>{
            this.element.addEventListener(eventName, handler, {
                once: eventName === "blur"
            });
        });
    }
    removeListeners() {
        const listeners = this.props.listeners;
        if (!listeners || !this.element) return;
        Object.entries(listeners).forEach(([eventName, handler])=>{
            this.element.removeEventListener(eventName, handler);
        });
    }
    toggleClasses(insertClasses, removeClasses) {
        const cls = new Set(this.props.classes);
        if (cls.size) {
            removeClasses.forEach((remove)=>cls.delete(remove)
            );
            insertClasses.forEach((insert)=>cls.add(insert)
            );
        }
        return Array.from(cls);
    }
    show() {
        this._element.style.display = "block";
    }
    hide() {
        this._element.style.display = "none";
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};

},{"../../utils/EventBus":"iVvKU","../../utils/Templator/Templator":"56UND","./styles.scss":"kZfea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56UND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Templator", ()=>Templator
);
var _get = require("../get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _block = require("../../components/block/block");
const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
const printableProps = {
    id: "id",
    classes: "class",
    style: "style",
    placeholder: "placeholder",
    type: "type",
    value: "value",
    href: "href",
    name: "name",
    alt: "alt",
    src: "src"
};
class Templator {
    constructor(template){
        this._template = "";
        this.items = [];
        this.classes = [];
        this.textContent = "";
        this._template = template;
    }
    _compileTemplate(ctx) {
        let tmpl = this._template, key = null;
        const result = [];
        const valueIndex = 1;
        while(key = TEMPLATE_REGEXP.exec(tmpl))if (key[valueIndex]) {
            const tmpls = key[valueIndex].trim().split(" ").filter((item)=>item
            );
            let tmplValue = tmpls.pop();
            while(tmplValue){
                const data = _getDefault.default(ctx, tmplValue);
                if (data) {
                    if (this._isBlock(data)) {
                        this.items.push(data.getContent());
                        tmplValue = tmpls.pop();
                        continue;
                    } else if (this._isBlockArray(data)) {
                        data.forEach((item)=>{
                            this.items.push(item.getContent());
                        });
                        tmplValue = tmpls.pop();
                        continue;
                    } else {
                        let replacedText = "";
                        if (!this._isStringArray(data)) {
                            if (tmplValue === "textContent") {
                                this.textContent = data;
                                tmplValue = tmpls.pop();
                                continue;
                            }
                            if (data !== "false") replacedText = printableProps[tmplValue] ? `${printableProps[tmplValue]}='${data}'` : data;
                        } else if (tmplValue === "classes") {
                            this.classes = data;
                            replacedText = `${printableProps[tmplValue]}='${data.join(" ")}'`;
                        } else {
                            const newData = data.join("");
                            replacedText = printableProps[tmplValue] ? `${printableProps[tmplValue]}='${newData}'` : newData;
                        }
                        result.push(replacedText);
                    }
                }
                tmplValue = tmpls.pop();
            }
        }
        tmpl = tmpl.replace(TEMPLATE_REGEXP, result.join(" "));
        return this._getElement(tmpl);
    }
    _getElement(tmpl) {
        const fragment = document.createElement("template");
        fragment.innerHTML = tmpl;
        let root;
        if (this.classes.length) // @ts-ignore
        root = fragment.content.querySelector(`.${this.classes.join(".")}`);
        else root = fragment.content.children[0];
        if (root) {
            root.textContent = this.textContent;
            this.items.forEach((item)=>root.appendChild(item)
            );
        }
        return root;
    }
    _isBlock(value) {
        return value instanceof _block.Block;
    }
    _isStringArray(value) {
        return Array.isArray(value) && value.every((el)=>typeof el === "string"
        );
    }
    _isBlockArray(value) {
        return Array.isArray(value) && value.every((el)=>el instanceof _block.Block
        );
    }
    compile(ctx) {
        return this._compileTemplate(ctx);
    }
}

},{"../get":"2rbBD","../../components/block/block":"5WfBa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZfea":[function() {},{}],"gtofV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "template", ()=>template
);
parcelHelpers.export(exports, "authLinkTemplate", ()=>authLinkTemplate
);
const template = "<div {{ classes mainBlock form }} ></div>";
const authLinkTemplate = "<a {{ classes textContent href }}></a>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Iu1p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Label", ()=>Label
);
var _block = require("../block/block");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Label extends _block.Block {
    constructor(props){
        super("div", props, _templateDefault.default);
    }
}

},{"../block/block":"5WfBa","./template":"641HT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"641HT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = "<div {{ classes textContent }}></div>";
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QgVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container
);
var _block = require("../block/block");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Container extends _block.Block {
    constructor(props, template){
        super("div", props, template || _templateDefault.default);
    }
}

},{"../block/block":"5WfBa","./template":"6sfs2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sfs2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = "<div {{ classes textContent form label }}></div>";
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4JA1L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginForm", ()=>LoginForm
);
var _form = require("../../components/form/form");
var _containeredInput = require("../../components/containeredInput/containeredInput");
var _template = require("./template");
var _container = require("../../components/container/container");
var _validatorFactory = require("../../utils/Validators/ValidatorFactory");
class LoginForm extends _form.Form {
    constructor(props){
        const nameInput = new _containeredInput.ContaineredInput({
            name: "login",
            type: "text",
            placeholder: "Логин",
            classes: _form.getDefaultTextInputClasses(),
            containerClasses: getDefaultInputContainerClasses(),
            labelClasses: [
                "base-label",
                "login-label"
            ],
            validator: _validatorFactory.ValidatorFactory.getValidator("login")
        });
        const passInput = new _containeredInput.ContaineredInput({
            name: "password",
            type: "password",
            placeholder: "Пароль",
            classes: _form.getDefaultTextInputClasses(),
            containerClasses: getDefaultInputContainerClasses(),
            labelClasses: [
                "base-label",
                "login-label"
            ],
            validator: _validatorFactory.ValidatorFactory.getValidator("password")
        });
        const actionContainer = new _container.Container({
            classes: [
                "login-form__action-container",
                "sign-action-container"
            ],
            link: props.link,
            btn: props.btn
        }, _template.actionsContainerTemplate);
        super({
            classes: [
                "base-form",
                "sign-form",
                "login-form"
            ],
            actionContainer,
            passInput,
            nameInput,
            listeners: props.listeners
        }, _template.template);
    }
}
function getDefaultInputContainerClasses() {
    return [
        "sign-input-container"
    ];
}

},{"../../components/form/form":"1enI1","../../components/containeredInput/containeredInput":"iQOIx","./template":"7T6YY","../../components/container/container":"1QgVj","../../utils/Validators/ValidatorFactory":"fyOYk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1enI1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Form", ()=>Form
);
parcelHelpers.export(exports, "getDefaultTextInputClasses", ()=>getDefaultTextInputClasses
);
var _block = require("../block/block");
var _input = require("../Input/input");
var _containeredInput = require("../containeredInput/containeredInput");
class Form extends _block.Block {
    constructor(props, template){
        super("form", props, template);
    }
    validate() {
        const forValidate = Object.values(this.props).filter((item)=>item instanceof _input.Input || item instanceof _containeredInput.ContaineredInput
        );
        let isNotValid = false;
        for(let i = 0; i < forValidate.length; i++)isNotValid = !!forValidate[i].validate() || isNotValid;
        return isNotValid;
    }
}
function getDefaultTextInputClasses() {
    return [
        "base-input",
        "base-input-text",
        "sign-text-input"
    ];
}

},{"../block/block":"5WfBa","../Input/input":"bl4Uw","../containeredInput/containeredInput":"iQOIx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bl4Uw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input
);
var _block = require("../block/block");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
class Input extends _block.Block {
    constructor(props){
        super("input", props, _templateDefault.default);
    }
    validate() {
        if (!this.props.validator) return "";
        else {
            this.props.validator.field = this.getContent();
            return this.props.validator.checkValid();
        }
    }
}

},{"../block/block":"5WfBa","./template":"7LgiA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LgiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = "<input {{ name type placeholder value classes disabled }}></input>";
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQOIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContaineredInput", ()=>ContaineredInput
);
var _block = require("../block/block");
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _label = require("../label/label");
var _input = require("../Input/input");
var _templator = require("../../utils/Templator/Templator");
var _styleScss = require("./style.scss");
class ContaineredInput extends _block.Block {
    constructor(props){
        const fieldNameLabel = new _label.Label({
            classes: props.labelClasses || [],
            textContent: props.placeholder || "Поле"
        });
        if (!props.alwaysShowlabel) fieldNameLabel.hide();
        const inputField = new _input.Input(props);
        const validationLabel = new _label.Label({
            classes: [
                "base-label",
                "warning-label",
                ...props.warningLabelClasses || []
            ],
            textContent: ""
        });
        validationLabel.hide();
        super("div", {
            classes: [
                "input-container",
                ...props.containerClasses || []
            ],
            fieldNameLabel,
            inputField,
            validationLabel
        }, _templateDefault.default);
        this.alwaysShowlabel = props.alwaysShowlabel;
        this.neverShowlabel = props.neverShowlabel;
        this.fieldNameLabel = fieldNameLabel;
        const newListeners = Object.assign(props.listeners || {
        }, {
            focus: ()=>{
                inputField.focused = true;
                this.checkHideLabel();
                this.validate();
            },
            blur: (e)=>{
                inputField.setProps({
                    value: e.target.value
                });
                inputField.focused = false;
                this.checkHideLabel();
                this.validate();
            }
        });
        inputField.setProps({
            listeners: newListeners
        });
        this.inputField = inputField;
        this.validationLabel = validationLabel;
    }
    componentDidUpdate(oldValue, newValue) {
        if (this.inputField) this.inputField.setProps({
            value: this.props.value
        });
        return oldValue !== newValue;
    }
    render() {
        const templator = new _templator.Templator(_templateDefault.default);
        const newElement = templator.compile(this.props);
        this.checkHideLabel();
        return newElement;
    }
    checkHideLabel() {
        if (!this.alwaysShowlabel && !this.neverShowlabel && this.fieldNameLabel) this.input.props.value || this.input.focused ? this.fieldNameLabel.show() : this.fieldNameLabel.hide();
    }
    validate() {
        const warningMessage = this.input.validate();
        if (warningMessage) {
            this.validationLabel.setProps({
                textContent: warningMessage
            });
            this.validationLabel.show();
        } else {
            this.validationLabel.setProps({
                textContent: ""
            });
            this.validationLabel.hide();
        }
        return warningMessage;
    }
    addListeners() {
        if (this.input) this.input.addListeners();
    }
    removeListeners() {
        if (this.input) this.input.removeListeners();
    }
    get input() {
        return this.inputField;
    }
}

},{"../block/block":"5WfBa","./template":"kZ0wN","../label/label":"7Iu1p","../Input/input":"bl4Uw","../../utils/Templator/Templator":"56UND","./style.scss":"7XcMV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZ0wN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const template = "<div {{ classes validationLabel inputField fieldNameLabel}}></div>";
exports.default = template;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XcMV":[function() {},{}],"7T6YY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "template", ()=>template
);
parcelHelpers.export(exports, "actionsContainerTemplate", ()=>actionsContainerTemplate
);
const template = "<form {{ classes actionContainer passInput nameInput}} ></form>";
const actionsContainerTemplate = "<div {{ classes link btn }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fyOYk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValidatorFactory", ()=>ValidatorFactory
);
var _nameValidator = require("./NameValidator");
var _passwordValidator = require("./PasswordValidator");
var _loginValidator = require("./LoginValidator");
var _phoneValidator = require("./PhoneValidator");
var _baseValidator = require("./BaseValidator");
var _emailValidator = require("./EmailValidator");
class ValidatorFactory {
    static getValidator(field) {
        field = field.toLowerCase();
        if (field.includes("name")) return new _nameValidator.NameValidator();
        else if (field.includes("password")) return new _passwordValidator.PasswordValidator();
        else if (field.includes("login")) return new _loginValidator.LoginValidator();
        else if (field.includes("phone")) return new _phoneValidator.PhoneValidator();
        else if (field.includes("email")) return new _emailValidator.EmailValidator();
        else return new _baseValidator.BaseValidator();
    }
}

},{"./NameValidator":"1TM3z","./PasswordValidator":"cL07J","./LoginValidator":"9OIGr","./PhoneValidator":"7Ul2h","./BaseValidator":"4HKdS","./EmailValidator":"21aBR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TM3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NameValidator", ()=>NameValidator
);
var _baseValidator = require("./BaseValidator");
class NameValidator extends _baseValidator.BaseValidator {
    constructor(){
        const validFncs = [];
        validFncs.push({
            text: "Первая буква должна быть заглавной",
            fn: (value)=>{
                if (!value) return true;
                return value[0] === value[0].toLocaleUpperCase();
            }
        });
        validFncs.push({
            text: "Есть пробелы и/или цифры",
            fn: (value)=>{
                return !/[\d\s]/.test(value);
            }
        });
        validFncs.push({
            text: "Есть недопустимые символы",
            fn: (value)=>{
                return !/["'&<>_]/.test(value);
            }
        });
        super(validFncs);
    }
}

},{"./BaseValidator":"4HKdS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HKdS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseValidator", ()=>BaseValidator
);
class BaseValidator {
    constructor(validFncs){
        validFncs = validFncs || [];
        validFncs.push({
            text: "Заполните поле",
            fn: (value)=>{
                return !!value;
            }
        });
        this.validFncs = validFncs;
    }
    checkValid() {
        if (this.field) for(let i = 0; i < this.validFncs.length; i++){
            const current = this.validFncs[i];
            if (!current.fn(this.field.value)) return current.text;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cL07J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PasswordValidator", ()=>PasswordValidator
);
var _baseValidator = require("./BaseValidator");
class PasswordValidator extends _baseValidator.BaseValidator {
    constructor(){
        const validFncs = [];
        validFncs.push({
            text: "Длина от 8 до 40 символов",
            fn: (value)=>{
                return value.length >= 8 && value.length <= 40;
            }
        });
        validFncs.push({
            text: "Неверный формат пароля (большая буква)",
            fn: (value)=>{
                return /[A-ZА-ЯЁ]/.test(value);
            }
        });
        validFncs.push({
            text: "Неверный формат пароля (digit)",
            fn: (value)=>{
                return /\d/.test(value);
            }
        });
        super(validFncs);
    }
}

},{"./BaseValidator":"4HKdS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OIGr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginValidator", ()=>LoginValidator
);
var _baseValidator = require("./BaseValidator");
class LoginValidator extends _baseValidator.BaseValidator {
    constructor(){
        const validFncs = [];
        validFncs.push({
            text: "Нет букв",
            fn: (value)=>{
                return /\w+/.test(value);
            }
        });
        validFncs.push({
            text: "От 3 до 20 символов",
            fn: (value)=>{
                return value.length >= 3 && value.length <= 20;
            }
        });
        validFncs.push({
            text: "Только латинница",
            fn: (value)=>{
                return !/[а-яёА-ЯЁ]/.test(value);
            }
        });
        validFncs.push({
            text: "Есть спецсимволы или пробел",
            fn: (value)=>{
                return !/["'&<>\s]/.test(value);
            }
        });
        super(validFncs);
    }
}

},{"./BaseValidator":"4HKdS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ul2h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PhoneValidator", ()=>PhoneValidator
);
var _baseValidator = require("./BaseValidator");
class PhoneValidator extends _baseValidator.BaseValidator {
    constructor(){
        const validFncs = [];
        validFncs.push({
            text: "Длина от 10 до 15 символов",
            fn: (value)=>{
                return value.length >= 10 && value.length <= 15;
            }
        });
        validFncs.push({
            text: "Неверный формат телефона",
            fn: (value)=>{
                return !/\++\d+/.test(value);
            }
        });
        super(validFncs);
    }
}

},{"./BaseValidator":"4HKdS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21aBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmailValidator", ()=>EmailValidator
);
var _baseValidator = require("./BaseValidator");
class EmailValidator extends _baseValidator.BaseValidator {
    constructor(){
        const validFncs = [];
        validFncs.push({
            text: "Только латинница",
            fn: (value)=>{
                return !/[а-яёА-ЯЁ]/.test(value);
            }
        });
        validFncs.push({
            text: "Неверный формат email",
            fn: (value)=>{
                return /[\w\d]+@\w+\.\w+/.test(value);
            }
        });
        super(validFncs);
    }
}

},{"./BaseValidator":"4HKdS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNphn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ErrorPopup
);
var _label = require("../../components/label/label");
var _input = require("../../components/Input");
var _container = require("../../components/container");
var _popup = require("./popup");
var _template = require("./template");
class ErrorPopup {
    static showErrorPopup(errorText = "Ошибка") {
        const errorLabel = new _label.Label({
            textContent: errorText
        });
        const errorOkBtn = new _input.Input({
            value: "OK",
            classes: [
                "popup-btn",
                "base-input-button",
                "sign-btn"
            ],
            listeners: {
                click: ()=>{
                    loginErrorMessage.hide();
                }
            }
        });
        const signUpErrorPopup = new _container.Container({
            classes: [
                "main-block",
                "change-avatar-popup"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            },
            errorLabel,
            errorOkBtn
        }, _template.errorContainerTemplate);
        const loginErrorMessage = new _popup.Popup({
            popupContainer: signUpErrorPopup
        });
        loginErrorMessage.show();
    }
}

},{"../../components/label/label":"7Iu1p","../../components/Input":"iclCk","../../components/container":"hRraL","./popup":"Rw8MJ","./template":"9mCe8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iclCk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>_input.Input
);
var _input = require("./input");

},{"./input":"bl4Uw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRraL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>_container.Container
);
var _container = require("./container");

},{"./container":"1QgVj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Rw8MJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Popup", ()=>Popup
);
var _block = require("../../components/block/block");
var _render = require("../../utils/render");
var _template = require("./template");
var _styleScss = require("./style.scss");
class Popup extends _block.Block {
    constructor(props){
        const popupContainer = props.popupContainer;
        const body = document.querySelector("body");
        if (body) body.style.overflow = "hidden";
        super("div", {
            classes: [
                "body-mask"
            ],
            popupContainer,
            listeners: {
                click: ()=>{
                    this.hide();
                }
            }
        }, _template.bodyMaskTemplate);
        this.popupContainer = popupContainer;
    }
    get container() {
        return this.popupContainer;
    }
    show() {
        const body = document.querySelector("body");
        if (body) body.style.overflow = "hidden";
        _render.renderPopup(this);
    }
    hide() {
        const body = document.querySelector("body");
        if (body) body.style.overflow = "visible";
        this.getContent().remove();
    }
}

},{"../../components/block/block":"5WfBa","../../utils/render":"duBlU","./template":"9mCe8","./style.scss":"Q3w2C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9mCe8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bodyMaskTemplate", ()=>bodyMaskTemplate
);
parcelHelpers.export(exports, "errorContainerTemplate", ()=>errorContainerTemplate
);
const bodyMaskTemplate = "<div {{ classes popupContainer }}></div>";
const errorContainerTemplate = "<div {{ classes textContent errorOkBtn errorLabel }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Q3w2C":[function() {},{}],"hAFc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginPageApi", ()=>LoginPageApi
);
var _baseApi = require("./BaseApi");
var _xhr = require("../XHR");
var _userApi = require("./UserApi");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _get = require("../get");
var _getDefault = parcelHelpers.interopDefault(_get);
const HTTP = new _xhr.HTTPTransport("https://ya-praktikum.tech/api/v2/");
class LoginPageApi extends _baseApi.BaseAPI {
    login(user) {
        return HTTP.post("auth/signin", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: user
        }).then(()=>{
            _userApi.UserApi.getUser();
        }).catch((result)=>{
            if (_getDefault.default(_applicationStoreDefault.default.getState(), "user")) _applicationStoreDefault.default.set("user", null);
            _applicationStoreDefault.default.set("loginError", JSON.parse(result.responseText).reason);
        });
    }
}

},{"./BaseApi":"gkMZh","../XHR":"29JJz","./UserApi":"8beJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../modules/ApplicationState/ApplicationStore":"1aamq","../get":"2rbBD"}],"gkMZh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseAPI", ()=>BaseAPI
);
class BaseAPI {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29JJz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTTPTransport", ()=>HTTPTransport
);
// eslint-disable-next-line no-unused-vars
parcelHelpers.export(exports, "fetchWithRetry", ()=>fetchWithRetry
);
var _queryString = require("./queryString");
let METHODS;
(function(METHODS1) {
    METHODS1["GET"] = "GET";
    METHODS1["POST"] = "POST";
    METHODS1["PUT"] = "PUT";
    METHODS1["DELETE"] = "DELETE";
})(METHODS || (METHODS = {
}));
class HTTPTransport {
    constructor(baseUrl){
        this.get = (url, options = {
        })=>{
            if (options.data && Object.keys(options.data).length) {
                url += _queryString.queryString(options.data);
                delete options.data;
            }
            return this.request(url, {
                ...options,
                method: METHODS.GET
            }, options.timeout);
        };
        this.put = (url, options = {
        })=>{
            return this.request(url, {
                ...options,
                method: METHODS.PUT
            }, options.timeout);
        };
        this.post = (url, options = {
        })=>{
            return this.request(url, {
                ...options,
                method: METHODS.POST
            }, options.timeout);
        };
        this.delete = (url, options = {
        })=>{
            return this.request(url, {
                ...options,
                method: METHODS.DELETE
            }, options.timeout);
        };
        this.request = (url, options, timeout = 5000)=>{
            return new Promise((resolve, reject)=>{
                const { method , data , headers , form  } = options;
                const xhr = new XMLHttpRequest();
                xhr.open(options.method, this.baseUrl + url);
                if (headers) Object.entries(headers).forEach(([key, value])=>{
                    xhr.setRequestHeader(key, value);
                });
                if (options.credentials === "include") xhr.withCredentials = true;
                xhr.onload = function() {
                    if (this.status !== 200) reject(xhr);
                    else resolve(xhr);
                };
                const handleError = ()=>{
                    reject(new Error("Ошибка запроса"));
                };
                xhr.onabort = handleError;
                xhr.onerror = handleError;
                xhr.ontimeout = handleError;
                if (form) xhr.send(form);
                else if (method === METHODS.GET || !data) xhr.send();
                else xhr.send(JSON.stringify(data));
                setTimeout(()=>{
                    reject(new Error("timeout"));
                }, timeout);
            });
        };
        this.baseUrl = baseUrl || "";
    }
}
function fetchWithRetry(url, options) {
    if (options && options.retries && options.retries > 1) {
        const req = new HTTPTransport();
        return req.get(url, options).then((response)=>{
            return response;
        }, ()=>{
            options.retries--;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return fetchWithRetry(url, options);
        });
    } else throw new Error("Нет попыток");
}

},{"./queryString":"hEN1s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEN1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryString", ()=>queryString
);
function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object && Object.prototype.toString.call(value) === "[object Object]";
}
function isArray(value) {
    return Array.isArray(value);
}
function isArrayOrObject(value) {
    return isPlainObject(value) || isArray(value);
}
function getKey(key, parentKey) {
    return parentKey ? `${parentKey}[${key}]` : key;
}
function getParams(data, parentKey) {
    const result = [];
    for (const [key, value] of Object.entries(data))if (isArrayOrObject(value)) result.push(...getParams(value, getKey(key, parentKey)));
    else result.push([
        getKey(key, parentKey),
        encodeURIComponent(String(value))
    ]);
    return result;
}
function queryString(data) {
    if (!isPlainObject(data)) throw new Error("input must be an object");
    return getParams(data).map((arr)=>arr.join("=")
    ).join("&");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8beJ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserApi", ()=>UserApi
);
var _baseApi = require("./BaseApi");
var _xhr = require("../XHR");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _get = require("../get");
var _getDefault = parcelHelpers.interopDefault(_get);
const HTTP = new _xhr.HTTPTransport("https://ya-praktikum.tech/api/v2/");
class UserApi extends _baseApi.BaseAPI {
    static getUser() {
        return HTTP.get("auth/user", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            }
        }).then((result)=>{
            let user = null;
            user = JSON.parse(result.responseText);
            _applicationStoreDefault.default.set("user", user);
        }).catch(()=>{
            if (_getDefault.default(_applicationStoreDefault.default.getState(), "user")) _applicationStoreDefault.default.set("user", null);
        });
    }
    static logout() {
        return HTTP.post("auth/logout", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            }
        }).then(()=>{
            _applicationStoreDefault.default.set("user", null);
        });
    }
}

},{"./BaseApi":"gkMZh","../XHR":"29JJz","../../modules/ApplicationState/ApplicationStore":"1aamq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../get":"2rbBD"}],"1KxVp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfileStates", ()=>ProfileStates
);
parcelHelpers.export(exports, "ProfilePageEvents", ()=>ProfilePageEvents
);
parcelHelpers.export(exports, "ProfilePageController", ()=>ProfilePageController
);
var _baseController = require("./BaseController");
var _profile = require("../pages/newprofile/profile");
var _userApi = require("../utils/API/UserApi");
var _profileApi = require("../utils/API/ProfileApi");
let ProfileStates;
(function(ProfileStates1) {
    ProfileStates1["Preview"] = "preview";
    ProfileStates1["ChangeInfo"] = "changeInfo";
    ProfileStates1["ChangePass"] = "changePass";
})(ProfileStates || (ProfileStates = {
}));
let ProfilePageEvents;
(function(ProfilePageEvents1) {
    ProfilePageEvents1["CHANGE_STATE"] = "changeState";
    ProfilePageEvents1["CHANGE_DATA"] = "changeData";
    ProfilePageEvents1["CHANGE_PASSWORD"] = "changePassword";
    ProfilePageEvents1["CHANGE_AVATAR"] = "changeAvatar";
    ProfilePageEvents1["LOGOUT"] = "logout";
})(ProfilePageEvents || (ProfilePageEvents = {
}));
const profilePageApi = new _profileApi.ProfilePageApi();
class ProfilePageController extends _baseController.BaseController {
    constructor(){
        super(new _profile.ProfilePage());
        this.currentState = ProfileStates.Preview;
        this.submit();
    }
    submit() {
        this.view.eventBus.on(ProfilePageEvents.CHANGE_STATE, (state)=>this.setState(state)
        );
        this.view.eventBus.on(ProfilePageEvents.CHANGE_DATA, (user)=>this.changeUserData(user)
        );
        this.view.eventBus.on(ProfilePageEvents.CHANGE_PASSWORD, (passwordRequest)=>this.changeUserPassword(passwordRequest)
        );
        this.view.eventBus.on(ProfilePageEvents.CHANGE_AVATAR, (changeAvatarData)=>this.changeAvatar(changeAvatarData)
        );
        this.view.eventBus.on(ProfilePageEvents.LOGOUT, ()=>_userApi.UserApi.logout()
        );
    }
    setState(state) {
        this.currentState = state;
    }
    changeUserData(user) {
        profilePageApi.changeData(user);
        this.setState(ProfileStates.Preview);
    }
    changeUserPassword(passwordRequest) {
        profilePageApi.changhePassword(passwordRequest);
        this.setState(ProfileStates.Preview);
    }
    changeAvatar(changeAvatarData) {
        profilePageApi.changeAvatar(changeAvatarData);
    }
    get state() {
        return this.currentState;
    }
}

},{"./BaseController":"cvh6U","../pages/newprofile/profile":"kmYY4","../utils/API/UserApi":"8beJ7","../utils/API/ProfileApi":"a0AUf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmYY4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePage", ()=>ProfilePage
);
var _block = require("../../components/block/block");
var _container = require("../../components/container/container");
var _template = require("./template");
var _template1 = require("../../components/block/template");
var _form = require("../../components/form/form");
var _containeredInput = require("../../components/containeredInput/containeredInput");
var _profilePageController = require("../../controllers/ProfilePageController");
var _input = require("../../components/Input/input");
var _popup = require("../../modules/popup/popup");
var _label = require("../../components/label/label");
var _validatorFactory = require("../../utils/Validators/ValidatorFactory");
var _styleScss = require("./style.scss");
var _router = require("../../utils/RouteUtils/Router");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _get = require("../../utils/get");
var _getDefault = parcelHelpers.interopDefault(_get);
const baseYaUrl = "https://ya-praktikum.tech/api/v2";
class ProfilePage extends _block.Block {
    constructor(){
        const state = _applicationStoreDefault.default.getState();
        const backButton = new _container.Container({
            classes: [
                "back-btn-container__back-btn"
            ],
            textContent: "❮",
            listeners: {
                click: ()=>{
                    const router = new _router.Router("body");
                    router.go("/messenger");
                }
            }
        });
        const backBtnContainer = new _container.Container({
            classes: [
                "back-btn-container"
            ],
            backButton
        }, _template.backButtonContainerTemplate);
        //region AvatarPopups
        const changeAvatarTitle = new _label.Label({
            textContent: "Загрузите файл"
        });
        const changeAvatarLink = new _input.Input({
            textContent: "Выбрать файл на компьютере",
            type: "file",
            name: "avatar",
            classes: [
                "popup-link"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            }
        });
        const changeAvatarButton = new _input.Input({
            value: "Изменить аватар",
            type: "submit",
            classes: [
                "popup-button",
                "base-input-button",
                "sign-btn"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            }
        });
        const changeAvaparPopupContainer = new _form.Form({
            classes: [
                "main-block",
                "change-avatar-popup"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                },
                submit: (e)=>{
                    e.cancelBubble = true;
                    e.preventDefault();
                    let data = new FormData(e.target);
                    const newAv = data.get("avatar");
                    if (newAv.size) this.eventBus.emit(_profilePageController.ProfilePageEvents.CHANGE_AVATAR, data);
                }
            },
            changeAvatarTitle,
            changeAvatarLink,
            changeAvatarButton
        }, _template.changeAvatarTemplate);
        //endregion AvatarPopups
        //region avatar
        const img = new _block.Block("img", {
            classes: [
                "avatar"
            ]
        }, _template1.imgTemplate);
        debugger;
        const avatarSrc = _getDefault.default(state, "user.avatar");
        if (avatarSrc) img.setProps({
            src: baseYaUrl + avatarSrc
        });
        const newAvatar = new _container.Container({
            classes: [
                "new-avatar"
            ],
            textContent: "Изменить аватар",
            listeners: {
                click: ()=>{
                    const changeAvatarPopup = new _popup.Popup({
                        popupContainer: changeAvaparPopupContainer
                    });
                    changeAvatarPopup.show();
                }
            }
        });
        const avatarWrapper = new _container.Container({
            classes: [
                "avatar-wrapper"
            ],
            img,
            newAvatar
        }, _template.avatarWrapperTemplate);
        //endregion avatar
        const displayName = _getDefault.default(state, "user.display_name");
        const nameLabel = new _container.Container({
            classes: [
                "name-label"
            ],
            textContent: displayName || ""
        });
        const { form , items: profileFormItems  } = getProfileForm(false);
        const contentWrapper = new _container.Container({
            classes: [
                "content-wrapper"
            ],
            avatarWrapper,
            nameLabel,
            profileForm: form
        }, _template.contentWrapperTemplate);
        const profileContainer = new _container.Container({
            classes: [
                "profile-container"
            ],
            contentWrapper
        }, _template.profileContainerTemplate);
        super("div", {
            classes: [
                "page-wrapper"
            ],
            backBtnContainer,
            profileContainer
        }, _template.template);
        this.profileFormItems = profileFormItems;
        this.contentWrapper = contentWrapper;
        const actionsContainer1 = this.getActionContainer(this.getPreviewActionContainerItems());
        form.setProps({
            listeners: {
                submit: (function(e) {
                    const items = Array.prototype.reduce.call(e.target.elements, (res, { name , value  })=>{
                        if (name && value) res[name] = value;
                        return res;
                    }, {
                    });
                    const isNotValid = form.validate();
                    if (!isNotValid) {
                        this.eventBus.emit(_profilePageController.ProfilePageEvents.CHANGE_DATA, items);
                        const actionsContainer = this.getActionContainer(this.getPreviewActionContainerItems());
                        this.setInputsDisable(true);
                        this.profileForm.setProps({
                            actionsContainer
                        });
                    }
                    e.preventDefault();
                }).bind(this)
            }
        });
        this.profileForm = form;
        this.profileForm.setProps({
            actionsContainer: actionsContainer1
        });
        this.avatarImg = img;
        this.submit();
    }
    submit() {
        _applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, (path, value)=>this.onChangeUserData(path, value)
        );
    }
    onChangeUserData(path, value) {
        if (path === "user" && value?.id) {
            const { form , items: profileFormItems  } = getProfileForm(false);
            this.profileFormItems = profileFormItems;
            this.profileForm = form;
            this.contentWrapper.setProps({
                form: this.profileForm
            });
            this.contentWrapper.props.nameLabel.setProps({
                textContent: value.display_name || ""
            });
            this.avatarImg.setProps({
                src: baseYaUrl + value.avatar
            });
        }
    }
    getActionContainer(actions) {
        return new _container.Container({
            classes: [
                "profile-form__action-container",
                "profile-action-container"
            ],
            ...actions
        }, _template.actionsContainerTemplate);
    }
    getPreviewActionContainerItems() {
        const changeDataButton = this.getProfileActionButton("Изменить данные", [
            "main-profile-btn",
            "action-container__change-data-btn"
        ], "button", this.onChangeDataClick);
        const changePassButton = this.getProfileActionButton("Изменить пароль", [
            "main-profile-btn",
            "action-container__change-password-btn"
        ], "button", this.onChangePassButtonClick);
        const exitButton = this.getProfileActionButton("Выйти", [
            "main-profile-btn",
            "action-container__exit-btn"
        ], "button", ()=>{
            this.eventBus.emit(_profilePageController.ProfilePageEvents.LOGOUT);
        });
        return {
            changeDataButton,
            changePassButton,
            exitButton
        };
    }
    getChangeDataActionsContainer() {
        const saveDataButton = this.getProfileActionButton("Сохранить", [
            "sign-btn",
            "action-container__save-data-btn"
        ], "submit");
        return {
            saveDataButton
        };
    }
    getChangePassActionsContainer() {
        const saveDataButton = this.getProfileActionButton("Сохранить", [
            "sign-btn",
            "action-container__save-data-btn"
        ], "submit");
        return {
            saveDataButton
        };
    }
    onChangeDataClick() {
        this.eventBus.emit(_profilePageController.ProfilePageEvents.CHANGE_STATE, _profilePageController.ProfileStates.ChangeInfo);
        this.setInputsDisable(false);
        const actionsContainer = this.getActionContainer(this.getChangeDataActionsContainer());
        this.profileForm.setProps({
            actionsContainer
        });
    }
    onChangePassButtonClick() {
        this.eventBus.emit(_profilePageController.ProfilePageEvents.CHANGE_STATE, _profilePageController.ProfileStates.ChangePass);
        if (!this.changePassForm) {
            const { form /*, items*/  } = getChangePasswordForm();
            form.setProps({
                actionsContainer: this.getActionContainer(this.getChangePassActionsContainer()),
                listeners: {
                    submit: (function(e) {
                        const items = Array.prototype.reduce.call(e.target.elements, (res, { name , value  })=>{
                            if (name && value) res[name] = value;
                            return res;
                        }, {
                        });
                        const isNotValid = form.validate();
                        if (!isNotValid) {
                            this.eventBus.emit(_profilePageController.ProfilePageEvents.CHANGE_PASSWORD, items);
                            this.changePassForm.hide();
                            this.profileForm.show();
                        }
                        e.preventDefault();
                    }).bind(this)
                }
            });
            this.changePassForm = form;
            //this.changePassFormItems = items;
            this.contentWrapper.setProps({
                changePassForm: this.changePassForm
            });
        }
        this.profileForm.hide();
        this.changePassForm.show();
    }
    setInputsDisable(disabled) {
        if (this.profileFormItems) Object.values(this.profileFormItems).forEach((item)=>item.input.setProps({
                disabled: disabled ? "disabled" : "false"
            })
        );
    }
    // eslint-disable-next-line max-params
    getProfileActionButton(value, additionalClasses = [], type = "button", clickHandler) {
        let config = {
            type: type,
            value: value,
            classes: [
                "base-input-button",
                "base-input",
                ...additionalClasses
            ]
        };
        if (clickHandler) config = Object.assign(config, {
            listeners: {
                click: clickHandler.bind(this)
            }
        });
        return new _input.Input(config);
    }
}
function getProfileForm(enabled) {
    const { user  } = _applicationStoreDefault.default.getState();
    const email = getFormItem("email", "string", "Почта", enabled, user.email);
    const login = getFormItem("login", "string", "Логин", enabled, user.login);
    const firstName = getFormItem("first_name", "string", "Имя", enabled, user.first_name);
    const secondName = getFormItem("second_name", "string", "Фамилия", enabled, user.second_name);
    const displayName = getFormItem("display_name", "string", "Имя в чате", enabled, user.display_name);
    const phone = getFormItem("phone", "string", "Телефон", enabled, user.phone);
    const form = new _form.Form({
        classes: [
            "profile-form",
            "base-form"
        ],
        email,
        login,
        firstName,
        secondName,
        displayName,
        phone
    }, _template.profileFormTemplate);
    return {
        form,
        items: {
            email,
            login,
            firstName,
            secondName,
            displayName,
            phone
        }
    };
}
function getChangePasswordForm() {
    const oldPass = getFormItem("oldPassword", "password", "Старый пароль", true);
    const newPass = getFormItem("newPassword", "password", "Новый пароль", true);
    const newPassConfirmation = getFormItem("newPasswordConf", "password", "Повторите пароль", true);
    const form = new _form.Form({
        classes: [
            "profile-form",
            "base-form"
        ],
        oldPass,
        newPass,
        newPassConfirmation
    }, _template.changePassFormTemplate);
    return {
        form,
        items: {
            oldPass,
            newPass,
            newPassConfirmation
        }
    };
}
// eslint-disable-next-line max-params
function getFormItem(name, type, placeholder, enabled = true, value = "") {
    let instance;
    const config = {
        containerClasses: getDefaultInputContainerClasses(),
        labelClasses: getDefaultInputLabelClasses(),
        warningLabelClasses: getDefaultWarningLabelClasses(),
        alwaysShowlabel: true,
        name: name,
        type: type,
        placeholder: placeholder,
        classes: [
            "profile-text-input",
            "base-input",
            "base-input-text"
        ],
        validator: _validatorFactory.ValidatorFactory.getValidator(name)
    };
    if (value) Object.assign(config, {
        value: value
    });
    if (!enabled) Object.assign(config, {
        disabled: "disabled"
    });
    instance = new _containeredInput.ContaineredInput(config);
    return instance;
}
function getDefaultInputContainerClasses() {
    return [
        "input-container",
        "profile-input-container"
    ];
}
function getDefaultInputLabelClasses() {
    return [
        "profile-input-label"
    ];
}
function getDefaultWarningLabelClasses() {
    return [
        "profile-warning-label"
    ];
}

},{"../../components/block/block":"5WfBa","../../components/container/container":"1QgVj","./template":"5RHmK","../../components/block/template":"lBVWo","../../components/form/form":"1enI1","../../components/containeredInput/containeredInput":"iQOIx","../../controllers/ProfilePageController":"1KxVp","../../components/Input/input":"bl4Uw","../../modules/popup/popup":"Rw8MJ","../../components/label/label":"7Iu1p","../../utils/Validators/ValidatorFactory":"fyOYk","./style.scss":"hgxKv","../../utils/RouteUtils/Router":"8BLVw","../../modules/ApplicationState/ApplicationStore":"1aamq","../../utils/get":"2rbBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RHmK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backButtonContainerTemplate", ()=>backButtonContainerTemplate
);
parcelHelpers.export(exports, "avatarWrapperTemplate", ()=>avatarWrapperTemplate
);
parcelHelpers.export(exports, "contentWrapperTemplate", ()=>contentWrapperTemplate
);
parcelHelpers.export(exports, "profileContainerTemplate", ()=>profileContainerTemplate
);
parcelHelpers.export(exports, "profileFormTemplate", ()=>profileFormTemplate
);
parcelHelpers.export(exports, "changePassFormTemplate", ()=>changePassFormTemplate
);
parcelHelpers.export(exports, "actionsContainerTemplate", ()=>actionsContainerTemplate
);
parcelHelpers.export(exports, "changeAvatarTemplate", ()=>changeAvatarTemplate
);
parcelHelpers.export(exports, "template", ()=>template
);
const backButtonContainerTemplate = "<div {{ classes backButton }}></div>";
const avatarWrapperTemplate = "<div {{ classes newAvatar img }}></div>";
const contentWrapperTemplate = "<div {{ classes profileForm changePassForm nameLabel avatarWrapper }}></div>";
const profileContainerTemplate = "<div {{ classes contentWrapper }}></div>";
const profileFormTemplate = "<form {{ classes actionsContainer phone displayName secondName firstName login email }}></form>";
const changePassFormTemplate = "<form {{ classes actionsContainer newPassConfirmation newPass oldPass }}></form>";
const actionsContainerTemplate = "<div {{ classes exitButton changePassButton changeDataButton saveDataButton   }}></div>";
const changeAvatarTemplate = "<form {{ classes changeAvatarButton changeAvatarLink changeAvatarTitle }}></form>";
const template = "<div {{ classes profileContainer backBtnContainer }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBVWo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linkTemplate", ()=>linkTemplate
);
parcelHelpers.export(exports, "imgTemplate", ()=>imgTemplate
);
const linkTemplate = "<a {{ classes textContent href }}></a>";
const imgTemplate = "<img {{ classes src }}></img>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgxKv":[function() {},{}],"a0AUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProfilePageApi", ()=>ProfilePageApi
);
var _baseApi = require("./BaseApi");
var _xhr = require("../XHR");
var _userApi = require("./UserApi");
const HTTP = new _xhr.HTTPTransport("https://ya-praktikum.tech/api/v2/");
class ProfilePageApi extends _baseApi.BaseAPI {
    changeData(user) {
        return HTTP.put("user/profile", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: user
        }).then((result)=>{
            if (result.status === 200) _userApi.UserApi.getUser();
        });
    }
    changhePassword(passwordRequest) {
        return HTTP.put("user/password", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: passwordRequest
        });
    }
    changeAvatar(avatar) {
        return HTTP.put("user/profile/avatar", {
            credentials: "include",
            mode: "cors",
            form: avatar
        });
    }
}

},{"./BaseApi":"gkMZh","../XHR":"29JJz","./UserApi":"8beJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3Rdb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatEvents", ()=>ChatEvents
);
parcelHelpers.export(exports, "ChatsPageController", ()=>ChatsPageController
);
var _baseController = require("./BaseController");
var _chats = require("../pages/chats/chats");
var _chatPageApi = require("../utils/API/ChatPageApi");
var _applicationStore = require("../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _input = require("../components/Input/input");
var _container = require("../components/container/container");
var _popup = require("../modules/popup/popup");
var _label = require("../components/label/label");
var _template = require("../pages/chats/template");
var _get = require("../utils/get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _socketUtils = require("../utils/SocketUtils");
const chatPageApi = new _chatPageApi.ChatPageApi();
let ChatEvents;
(function(ChatEvents1) {
    ChatEvents1["GET_CHATS"] = "getChats";
    ChatEvents1["REFRESH_CHATS"] = "refreshChatList";
    ChatEvents1["ADD_CHAT"] = "addChatClick";
    ChatEvents1["DELETE_CHAT"] = "deleteChatClick";
    ChatEvents1["ON_CHAT_DESELECTED"] = "onChatChatDeselected";
    ChatEvents1["ON_CHAT_ACTIVATED"] = "chatActivated";
    ChatEvents1["ADD_CHAT_USER"] = "addChatUser";
    ChatEvents1["DELETE_CHAT_USER"] = "deleteChatUser";
    ChatEvents1["SEND_MESSAGE"] = "sendMessage";
    ChatEvents1["RECEIVE_MESSAGE"] = "receiveMessage";
})(ChatEvents || (ChatEvents = {
}));
class ChatsPageController extends _baseController.BaseController {
    constructor(){
        super(new _chats.ChatsPage());
        this.sockets = {
        };
        this.subscribe();
    }
    subscribe() {
        _applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, (path, value)=>this.onApplicationStoreUpdate(path, value)
        );
        this.view.eventBus.on(ChatEvents.GET_CHATS, ()=>this.getChats()
        );
        this.view.eventBus.on(ChatEvents.ON_CHAT_ACTIVATED, (chatId)=>this.onChatActivated(chatId)
        );
        this.view.eventBus.on(ChatEvents.ADD_CHAT, ()=>this.onAddChatClick()
        );
        this.view.eventBus.on(ChatEvents.DELETE_CHAT, (chatId)=>this.onDeleteChatClick(chatId)
        );
        this.view.eventBus.on(ChatEvents.ADD_CHAT_USER, (chatId)=>this.showUserActionPopup(chatId, false)
        );
        this.view.eventBus.on(ChatEvents.DELETE_CHAT_USER, (chatId)=>this.showUserActionPopup(chatId, true)
        );
        this.view.eventBus.on(ChatEvents.SEND_MESSAGE, (chanId, message)=>this.sendMessage(chanId, message)
        );
    }
    getChats() {
        chatPageApi.getChats();
    }
    sendMessage(chatId, message) {
        const socket = this.sockets[chatId];
        if (socket) _socketUtils.SocketUtils.sendMessage(socket, message);
    }
    onApplicationStoreUpdate(path, value) {
        if (path === "chats") this.onChatsUpdated(value);
        if (/tokens.*/.test(path)) this.onTokensChanged(value);
        if (path === "activeChatNewMessagesCount") this.onNewMessagesCountCHanged();
    }
    onViewRendered() {
        this.view.eventBus.emit(ChatEvents.GET_CHATS);
        this.view.eventBus.emit(ChatEvents.ON_CHAT_DESELECTED);
    }
    onNewMessagesCountCHanged() {
        const activeChatId = this.view.activeChatId;
        _socketUtils.SocketUtils.sendMessage(this.sockets[activeChatId], "0", "get old");
    }
    onChatsUpdated(chats) {
        this.view.eventBus.emit(ChatEvents.REFRESH_CHATS, chats);
    }
    onTokensChanged(value) {
        const token = value.token;
        if (!token) return;
        const activeChatId = this.view.activeChatId;
        if (!this.sockets[activeChatId]) {
            this.sockets[activeChatId] = _socketUtils.SocketUtils.createSocket(activeChatId, token);
            _socketUtils.SocketUtils.applySocketListeners(this.sockets[activeChatId], activeChatId, this);
        } else chatPageApi.getNewMessagesCount(activeChatId);
    }
    onReceiveMessage(message) {
        this.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, message);
    }
    onAddChatClick() {
        const input = new _input.Input({
            classes: [
                "base-input",
                "base-input-text",
                "sign-text-input"
            ],
            placeholder: "Название чата"
        });
        const button = new _input.Input({
            value: "Создать",
            classes: [
                "popup-btn",
                "base-input-button",
                "sign-btn"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                    e.preventDefault();
                    const inputValue = input.element.value;
                    if (inputValue) {
                        chatPageApi.createChat(inputValue);
                        this.view.eventBus.emit(ChatEvents.ON_CHAT_DESELECTED);
                    }
                    popup.hide();
                }
            }
        });
        const popupContainer = new _container.Container({
            classes: [
                "main-block",
                "change-avatar-popup"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            },
            input,
            button
        }, _template.addChatTemplate);
        const popup = new _popup.Popup({
            popupContainer: popupContainer
        });
        popup.show();
    }
    onDeleteChatClick(chatId) {
        const label = new _label.Label({
            textContent: "Вы уверены что хотите удалить чат?"
        });
        const button = new _input.Input({
            value: "Удалить",
            classes: [
                "popup-btn",
                "base-input-button",
                "sign-btn"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                    e.preventDefault();
                    popup.hide();
                    chatPageApi.deleteChat(chatId);
                    this.view.eventBus.emit(ChatEvents.ON_CHAT_DESELECTED);
                }
            }
        });
        const popupContainer = new _container.Container({
            classes: [
                "main-block",
                "change-avatar-popup"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            },
            label,
            button
        }, _template.deleteChatTemplate);
        const popup = new _popup.Popup({
            popupContainer: popupContainer
        });
        popup.show();
    }
    showUserActionPopup(chatId, isDelete) {
        const input = new _input.Input({
            classes: [
                "base-input",
                "base-input-text",
                "sign-text-input"
            ],
            placeholder: "Id пользователей"
        });
        const button = new _input.Input({
            value: isDelete ? "Удалить" : "Добавить",
            classes: [
                "popup-btn",
                "base-input-button",
                "sign-btn"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                    e.preventDefault();
                    const inputValue = input.element.value;
                    if (inputValue) {
                        const data = {
                            users: inputValue.split(",").map((item)=>Number.parseInt(item)
                            ),
                            chatId: chatId
                        };
                        if (!isDelete) chatPageApi.addChatUsers(data);
                        else chatPageApi.deleteChatUsers(data);
                    }
                    popup.hide();
                }
            }
        });
        const popupContainer = new _container.Container({
            classes: [
                "main-block",
                "change-avatar-popup"
            ],
            listeners: {
                click: (e)=>{
                    e.cancelBubble = true;
                }
            },
            input,
            button
        }, _template.addChatTemplate);
        const popup = new _popup.Popup({
            popupContainer: popupContainer
        });
        popup.show();
    }
    onChatActivated(chatId) {
        const state = _applicationStoreDefault.default.getState();
        const token = _getDefault.default(state, `tokens.${chatId}.token`);
        if (!token) chatPageApi.getChatToken(chatId);
        else chatPageApi.getNewMessagesCount(chatId);
    }
}

},{"./BaseController":"cvh6U","../utils/API/ChatPageApi":"aBTKm","../modules/ApplicationState/ApplicationStore":"1aamq","../components/Input/input":"bl4Uw","../components/container/container":"1QgVj","../modules/popup/popup":"Rw8MJ","../components/label/label":"7Iu1p","../utils/get":"2rbBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../pages/chats/chats":"gTikN","../pages/chats/template":"iSWX2","../utils/SocketUtils":"382xl"}],"aBTKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatPageApi", ()=>ChatPageApi
);
var _baseApi = require("./BaseApi");
var _xhr = require("../XHR");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
const HTTP = new _xhr.HTTPTransport("https://ya-praktikum.tech/api/v2/");
class ChatPageApi extends _baseApi.BaseAPI {
    getChats() {
        return HTTP.get("chats", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            }
        }).then((result)=>{
            _applicationStoreDefault.default.set("chats", JSON.parse(result.responseText));
        });
    }
    createChat(title) {
        return HTTP.post("chats", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: {
                title
            }
        }).then(()=>{
            this.getChats();
        });
    }
    deleteChat(chatId) {
        HTTP.delete("chats", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: {
                chatId
            }
        }).then(()=>{
            this.getChats();
        });
    }
    addChatUsers(data) {
        HTTP.put("chats/users", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: {
                ...data
            }
        }).then(()=>{
            this.getChats();
        });
    }
    deleteChatUsers(data) {
        HTTP.delete("chats/users", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: {
                ...data
            }
        }).then(()=>{
            this.getChats();
        });
    }
    getChatToken(chatId) {
        HTTP.post("chats/token/" + chatId, {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            }
        }).then((result)=>{
            _applicationStoreDefault.default.set(`tokens.${chatId}`, JSON.parse(result.responseText));
        });
    }
    getNewMessagesCount(chatId) {
        HTTP.get("chats/new/" + chatId, {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            }
        }).then((result)=>{
            _applicationStoreDefault.default.set("activeChatNewMessagesCount", JSON.parse(result.responseText));
        });
    }
}

},{"./BaseApi":"gkMZh","../XHR":"29JJz","../../modules/ApplicationState/ApplicationStore":"1aamq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTikN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatsPage", ()=>ChatsPage
);
var _block = require("../../components/block/block");
var _container = require("../../components/container/container");
var _template = require("../../components/block/template");
var _input = require("../../components/Input/input");
var _template1 = require("./template");
var _chat = require("../../modules/chat/chat");
var _form = require("../../components/form/form");
var _label = require("../../components/label/label");
var _styleScss = require("./style.scss");
var _chatsPageController = require("../../controllers/ChatsPageController");
var _router = require("../../utils/RouteUtils/Router");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _get = require("../../utils/get");
var _getDefault = parcelHelpers.interopDefault(_get);
const activeChatClass = "chat-item__active";
class ChatsPage extends _block.Block {
    constructor(){
        const profileLink = new _block.Block("a", {
            classes: [
                "left-container__profile-link",
                "base-link"
            ],
            href: "#",
            textContent: "Профиль ❯",
            listeners: {
                click: (e)=>{
                    e.preventDefault();
                    const router = new _router.Router("body");
                    router.go("/settings");
                }
            }
        }, _template.linkTemplate);
        const chatSearchField = new _input.Input({
            classes: [
                "left-container__search",
                "left-container__search_empty",
                "base-input",
                "base-input-text"
            ],
            placeholder: "🔎 Поиск"
        });
        const addChatButton = new _container.Container({
            classes: [
                "chat-list-action-button",
                "add-chat-button"
            ],
            textContent: "Добавить чат"
        });
        const deleteChatButton = new _container.Container({
            classes: [
                "chat-list-action-button",
                "delete-chat-button"
            ],
            textContent: "Удалить чат"
        });
        const addUserButton = new _container.Container({
            classes: [
                "chat-list-action-button",
                "add-chat-button"
            ],
            textContent: "Добавить пользователя в чат"
        });
        const deleteUserButton = new _container.Container({
            classes: [
                "chat-list-action-button",
                "delete-chat-button"
            ],
            textContent: "Удалить пользователя из чата"
        });
        const chatListContainer = new _container.Container({
            classes: [
                "chat-list-container"
            ],
            textContent: "Загрузка чатов..."
        }, _template1.chatContainerListTemplate);
        const leftContainer = new _container.Container({
            classes: [
                "left-container"
            ],
            chatListContainer,
            chatSearchField,
            deleteChatButton,
            addChatButton,
            addUserButton,
            deleteUserButton,
            profileLink
        }, _template1.leftContainerTemplate);
        const chatContainer = new _container.Container({
            classes: [
                "chat-container__empty"
            ],
            textContent: "Выберите чат чтобы отправить сообщение"
        }, _template1.chatContainerTemplate);
        super("div", {
            classes: [
                "page-wrapper"
            ],
            leftContainer,
            chatContainer
        }, _template1.template);
        chatListContainer.setProps({
            listeners: {
                click: this.onChatItemClick.bind(this)
            }
        });
        this.chatListContainer = chatListContainer;
        this.chatContainer = chatContainer;
        this.submit();
        chatSearchField.setProps({
            listeners: {
                keyup: this.searchChats.bind(this)
            }
        });
        this.search = chatSearchField;
        addChatButton.setProps({
            listeners: {
                click: ()=>this.eventBus.emit(_chatsPageController.ChatEvents.ADD_CHAT)
            }
        });
        deleteChatButton.setProps({
            listeners: {
                click: ()=>this.eventBus.emit(_chatsPageController.ChatEvents.DELETE_CHAT, this.activeChatId)
            }
        });
        addUserButton.setProps({
            listeners: {
                click: ()=>this.eventBus.emit(_chatsPageController.ChatEvents.ADD_CHAT_USER, this.activeChatId)
            }
        });
        deleteUserButton.setProps({
            listeners: {
                click: ()=>this.eventBus.emit(_chatsPageController.ChatEvents.DELETE_CHAT_USER, this.activeChatId)
            }
        });
        deleteChatButton.hide();
        addUserButton.hide();
        deleteUserButton.hide();
        this.deleteChatButton = deleteChatButton;
        this.addUserButton = addUserButton;
        this.deleteUserButton = deleteUserButton;
        this.deleteUserButton = deleteUserButton;
    }
    submit() {
        this.eventBus.on(_chatsPageController.ChatEvents.ON_CHAT_ACTIVATED, this.onChatActivated.bind(this));
        this.eventBus.on(_chatsPageController.ChatEvents.REFRESH_CHATS, (chats)=>this.refreshChatList(chats)
        );
        this.eventBus.on(_chatsPageController.ChatEvents.ON_CHAT_DESELECTED, ()=>this.onChatDeselected()
        );
        this.eventBus.on(_chatsPageController.ChatEvents.RECEIVE_MESSAGE, (messages)=>{
            const config = messages.map((message)=>{
                return {
                    isMine: _getDefault.default(_applicationStoreDefault.default.getState(), "user.id") === message.user_id,
                    message: message.content
                };
            });
            this.addMessageHandler(config);
        });
    }
    refreshChatList(chats) {
        if (chats.length) {
            const searchValue = this.search.props.value;
            if (searchValue) chats = chats.filter((chat)=>chat.title.includes(searchValue)
            );
            const chatBlocks = chats.map((chat)=>{
                return new _chat.Chat(chat);
            });
            this.chatListContainer.setProps({
                chats: chatBlocks,
                textContent: ""
            });
        } else this.chatListContainer.setProps({
            textContent: "Нет чатов",
            chats: []
        });
    }
    onChatDeselected() {
        this.chatContainer.element.classList.remove("chat-container");
        this.chatContainer.setProps({
            classes: [
                "chat-container__empty"
            ],
            textContent: "Выберите чат чтобы отправить сообщение",
            chatMessagesContainer: null,
            sendForm: null
        });
        this.deleteChatButton.hide();
        this.addUserButton.hide();
        this.deleteUserButton.hide();
    }
    searchChats(e) {
        if (e.code === "Enter") {
            const searchValue = e.target.value || "";
            this.eventBus.emit("chatSearchFieldChanged", searchValue);
        }
    }
    onChatItemClick(e) {
        const target = e.target;
        const targetChat = target.closest(".chat-item");
        if (targetChat && Number(targetChat.dataset.chatId) !== this.activeChatId) {
            const activeItem = this.element.querySelector(`.${activeChatClass}`);
            if (activeItem) activeItem.classList.remove(activeChatClass);
            targetChat.classList.add(activeChatClass);
            const chatId = targetChat.dataset.chatId;
            this.eventBus.emit("chatActivated", chatId);
        }
    }
    onChatActivated(chatId = "" + this.activeChatId || "") {
        if (!this.sendForm) {
            const attachButton = new _label.Label({
                classes: [
                    "send-item",
                    "send-button"
                ],
                textContent: "+"
            });
            const message = new _input.Input({
                classes: [
                    "send-item",
                    "send-message"
                ],
                type: "text",
                name: "message",
                placeholder: "Введите сообщение"
            });
            const sendMessageButton = new _input.Input({
                classes: [
                    "send-item",
                    "send-button"
                ],
                type: "submit",
                value: "\u279c"
            });
            const sendForm = new _form.Form({
                classes: [
                    "send-message-form"
                ],
                attachButton,
                message,
                sendMessageButton,
                listeners: {
                    submit: this.onSendFormSubmit.bind(this)
                }
            }, _template1.sendFormTemplate);
            this.sendForm = sendForm;
            this.chatMessagesContainer = this.getChatMessagesContainer(Number(chatId));
        }
        this.activeChatId = Number.parseInt(chatId);
        this.deleteChatButton.show();
        this.addUserButton.show();
        this.deleteUserButton.show();
        this.chatContainer.setProps({
            classes: [
                "chat-container"
            ],
            textContent: "",
            sendForm: this.sendForm,
            chatMessagesContainer: this.chatMessagesContainer
        });
    }
    getChatMessagesContainer(chatId) {
        return new _container.Container({
            chatId,
            classes: [
                "chat-messages-container", 
            ]
        }, _template1.chatMessagesContainerTemplate);
    }
    getMessages() {
        if (this.chatMessagesContainer.props.chatId === this.activeChatId) return this.chatMessagesContainer.props.messages || [];
        else return [];
    }
    getChatItem(config) {
        const cls = [
            "chat-message-item-span"
        ];
        if (config.isMine) cls.push("my-message");
        return new _container.Container({
            classes: [
                "chat-message-item"
            ],
            messageSpan: new _container.Container({
                textContent: config.message,
                classes: cls
            }, _template1.messageSpanTemplate)
        }, _template1.messageWrapTemplate);
    }
    onSendFormSubmit(e) {
        e.preventDefault();
        const text = e.target.message.value;
        if (text) {
            e.target.message.value = "";
            this.eventBus.emit(_chatsPageController.ChatEvents.SEND_MESSAGE, this.activeChatId, text);
        }
    }
    addMessageHandler(messages) {
        const currentMessages = this.getMessages();
        for(let i = messages.length - 1; i >= 0; i--)currentMessages.push(this.getChatItem(messages[i]));
        this.chatMessagesContainer = this.getChatMessagesContainer(this.activeChatId);
        this.chatMessagesContainer.setProps({
            messages: currentMessages
        });
        this.chatContainer.setProps({
            chatMessagesContainer: this.chatMessagesContainer
        });
    }
}

},{"../../components/block/block":"5WfBa","../../components/container/container":"1QgVj","../../components/block/template":"lBVWo","../../components/Input/input":"bl4Uw","./template":"iSWX2","../../modules/chat/chat":"crI0e","../../components/form/form":"1enI1","../../components/label/label":"7Iu1p","./style.scss":"lQBT1","../../controllers/ChatsPageController":"i3Rdb","../../utils/RouteUtils/Router":"8BLVw","../../modules/ApplicationState/ApplicationStore":"1aamq","../../utils/get":"2rbBD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSWX2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "leftContainerTemplate", ()=>leftContainerTemplate
);
parcelHelpers.export(exports, "chatContainerListTemplate", ()=>chatContainerListTemplate
);
parcelHelpers.export(exports, "chatContainerTemplate", ()=>chatContainerTemplate
);
parcelHelpers.export(exports, "chatMessagesContainerTemplate", ()=>chatMessagesContainerTemplate
);
parcelHelpers.export(exports, "sendFormTemplate", ()=>sendFormTemplate
);
parcelHelpers.export(exports, "messageWrapTemplate", ()=>messageWrapTemplate
);
parcelHelpers.export(exports, "messageSpanTemplate", ()=>messageSpanTemplate
);
parcelHelpers.export(exports, "addChatTemplate", ()=>addChatTemplate
);
parcelHelpers.export(exports, "deleteChatTemplate", ()=>deleteChatTemplate
);
parcelHelpers.export(exports, "template", ()=>template
);
const leftContainerTemplate = "<div {{ classes chatListContainer chatSearchField deleteUserButton addUserButton deleteChatButton addChatButton profileLink }}></div>";
const chatContainerListTemplate = "<div {{ classes textContent chats }}></div>";
const chatContainerTemplate = "<div {{ classes textContent sendForm chatMessagesContainer }}></div>";
const chatMessagesContainerTemplate = "<div {{ classes messages }}></div>";
const sendFormTemplate = "<form {{ classes sendMessageButton message attachButton }}></form>";
const messageWrapTemplate = "<div {{ classes messageSpan }}></div>";
const messageSpanTemplate = "<span {{ classes textContent }}></span>";
const addChatTemplate = "<div {{ classes button input }}></div>";
const deleteChatTemplate = "<div {{ classes button label }}></div>";
const template = "<div {{ classes chatContainer leftContainer }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crI0e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chat", ()=>Chat
);
var _block = require("../../components/block/block");
var _container = require("../../components/container/container");
var _template = require("./template");
var _label = require("../../components/label/label");
var _applicationStore = require("../ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
class Chat extends _block.Block {
    constructor(props){
        const imageContainer = new _container.Container({
            classes: [
                "chat-item__image-container"
            ]
        }, _template.imageContainerTemplate);
        const chatNameLabel = new _label.Label({
            textContent: props.title,
            classes: [
                "chat-item__name-label"
            ]
        });
        const isMyLastMessage = _applicationStoreDefault.default.getState().user.login === props.last_message?.user.login;
        let lastMessageText = "<Нет сообщений>";
        if (props.last_message?.content) lastMessageText = (isMyLastMessage ? "Вы: " : "") + props.last_message?.content;
        const chatLastMessageLabel = new _label.Label({
            textContent: lastMessageText,
            classes: [
                "chat-item__last-message-label"
            ]
        });
        const centerContainer = new _container.Container({
            classes: [
                "chat-item__center-container"
            ],
            chatNameLabel,
            chatLastMessageLabel
        }, _template.centerContainerTemplate);
        const lastMessageTimeLabel = new _label.Label({
            classes: [
                "chat-item__last-message-time-label"
            ]
        });
        if (props.last_message?.time) {
            const lastMEssageDateString = new Date(Date.parse(props.last_message?.time)).toLocaleDateString();
            lastMessageTimeLabel.setProps({
                textContent: lastMEssageDateString
            });
        } else lastMessageTimeLabel.hide();
        const newMessageCountLabel = new _label.Label({
            classes: [
                "chat-item__new-message-label"
            ],
            textContent: props.unread_count
        });
        if (!props.unread_count) newMessageCountLabel.hide();
        const rightContainer = new _container.Container({
            classes: [
                "chat-item__right-container"
            ],
            newMessageCountLabel,
            lastMessageTimeLabel
        }, _template.rightContainerTemplate);
        super("div", {
            classes: [
                "chat-item"
            ],
            marker: `data-chat-id='${props.id || "0"}'`,
            imageContainer,
            centerContainer,
            rightContainer
        }, _template.template);
        this.chatLastMessageLabel = chatLastMessageLabel;
        this.lastMessageTimeLabel = lastMessageTimeLabel;
        this.newMessageCountLabel = newMessageCountLabel;
        this.id = props.id;
        this.title = props.chatName;
        this.eventBus.on("newMessage", this.handleNewMessageEvent);
    }
    // eslint-disable-next-line max-params
    handleNewMessageEvent(lastMessage, lastMessageTime, newMessageCount, isMine) {
        isMine ? this.chatLastMessageLabel.props.isMine.show() : this.chatLastMessageLabel.props.isMine.hide();
        this.chatLastMessageLabel.setProps({
            textContent: lastMessage
        });
        this.lastMessageTimeLabel.setProps({
            textContent: lastMessageTime
        });
        if (newMessageCount) {
            this.newMessageCountLabel.setProps({
                textContent: "" + newMessageCount
            });
            this.newMessageCountLabel.show();
        } else this.newMessageCountLabel.hide();
    }
}

},{"../../components/block/block":"5WfBa","../../components/container/container":"1QgVj","./template":"c9qCp","../../components/label/label":"7Iu1p","../ApplicationState/ApplicationStore":"1aamq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9qCp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "imageContainerTemplate", ()=>imageContainerTemplate
);
parcelHelpers.export(exports, "centerContainerTemplate", ()=>centerContainerTemplate
);
parcelHelpers.export(exports, "rightContainerTemplate", ()=>rightContainerTemplate
);
parcelHelpers.export(exports, "isMineTemplate", ()=>isMineTemplate
);
parcelHelpers.export(exports, "template", ()=>template
);
const imageContainerTemplate = "<div {{ classes image }}></div>";
const centerContainerTemplate = "<div {{ classes chatLastMessageLabel isMine chatNameLabel }}></div>";
const rightContainerTemplate = "<div {{ classes newMessageCountLabel lastMessageTimeLabel }}></div>";
const isMineTemplate = "<span {{ classes textContent }}></span>";
const template = "<div {{ classes rightContainer centerContainer imageContainer marker }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQBT1":[function() {},{}],"382xl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SocketUtils", ()=>SocketUtils
);
var _get = require("./get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _applicationStore = require("../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _chatsPageController = require("../controllers/ChatsPageController");
var _chatPageApi = require("./API/ChatPageApi");
const chatPageApi = new _chatPageApi.ChatPageApi();
class SocketUtils {
    static createSocket(chatId, token) {
        if (!chatId) return;
        const userId = _getDefault.default(_applicationStoreDefault.default.getState(), "user.id");
        if (!userId) return;
        const socketTemplate = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
        return new WebSocket(socketTemplate);
    }
    static applySocketListeners(socket, chatId, controller) {
        socket.addEventListener("open", ()=>{
            chatPageApi.getNewMessagesCount(chatId);
            console.log("Соединение установлено " + chatId);
        });
        socket.addEventListener("close", (event)=>{
            if (event.wasClean) console.log("Соединение закрыто чисто");
            else console.log("Обрыв соединения");
            console.log(chatId + ` Код: ${event.code} | Причина: ${event.reason}`);
            delete controller.sockets[chatId];
        });
        socket.addEventListener("message", (event)=>{
            const message = JSON.parse(event.data);
            if (Array.isArray(message)) controller.view.eventBus.emit(_chatsPageController.ChatEvents.RECEIVE_MESSAGE, message);
            if (message.type === "message") controller.view.eventBus.emit(_chatsPageController.ChatEvents.RECEIVE_MESSAGE, [
                message
            ]);
        });
        socket.addEventListener("error", (event)=>{
            console.log("Ошибка", event.message);
        });
        setInterval(()=>{
            console.log("ping");
            socket.send(JSON.stringify({
                type: "ping"
            }));
        }, 30000);
    }
    static sendMessage(socket, message, type = "message") {
        socket.send(JSON.stringify({
            content: message,
            type: type
        }));
    }
}

},{"./get":"2rbBD","../modules/ApplicationState/ApplicationStore":"1aamq","../controllers/ChatsPageController":"i3Rdb","./API/ChatPageApi":"aBTKm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Wb5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SignUpPageController
);
var _baseController = require("./BaseController");
var _signUp = require("../pages/signUp/signUp");
var _signUpDefault = parcelHelpers.interopDefault(_signUp);
var _signUpPageApi = require("../utils/API/SignUpPageApi");
var _applicationStore = require("../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
var _router = require("../utils/RouteUtils/Router");
const signUpPageApi = new _signUpPageApi.SignUpPageApi();
class SignUpPageController extends _baseController.BaseController {
    constructor(){
        super(new _signUpDefault.default());
        this.view.eventBus.on("formSubmit", (data)=>this.onFormSubmit(data)
        );
        _applicationStoreDefault.default.on(_applicationStore.StoreEvents.Updated, (path, value)=>this.onApplicationStoreUpdate(path, value)
        );
    }
    onFormSubmit(data) {
        signUpPageApi.register(data);
    }
    onApplicationStoreUpdate(path, value) {
        if (path === "user" && value && value.id) this.onChangeUser();
        if (path === "signUpError") this.view.eventBus.emit("signUpError", value);
    }
    onChangeUser() {
        const router = new _router.Router("body");
        router.go("/messenger");
    }
}

},{"./BaseController":"cvh6U","../pages/signUp/signUp":"cVnDl","../utils/API/SignUpPageApi":"7ZgAI","../modules/ApplicationState/ApplicationStore":"1aamq","../utils/RouteUtils/Router":"8BLVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVnDl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SignUpPage
);
var _block = require("../../components/block/block");
var _template = require("../login/template");
var _label = require("../../components/label/label");
var _container = require("../../components/container/container");
var _signUpForm = require("../../modules/signUpForm/signUpForm");
var _input = require("../../components/Input/input");
var _router = require("../../utils/RouteUtils/Router");
var _errorPopup = require("../../modules/popup/errorPopup");
var _errorPopupDefault = parcelHelpers.interopDefault(_errorPopup);
class SignUpPage extends _block.Block {
    constructor(){
        const label = new _label.Label({
            classes: [
                "form-header"
            ],
            textContent: "Регистрация"
        });
        const link = new _block.Block("a", {
            classes: [
                "base-link",
                "sign-link"
            ],
            href: "/",
            textContent: "Войти"
        }, _template.authLinkTemplate);
        const btn = new _input.Input({
            type: "submit",
            value: "Авторизоваться",
            listeners: {
                click: function() {
                }
            },
            classes: [
                "base-input",
                "base-input-button",
                "sign-btn",
                "action-container__sign-up-btn"
            ]
        });
        const form = new _signUpForm.SignUpForm({
            link,
            btn
        });
        const mainBlock = new _container.Container({
            classes: [
                "sign-in-block",
                "main-block"
            ],
            label,
            form
        });
        super("div", {
            mainBlock
        }, _template.template);
        link.setProps({
            listeners: this.getLinkListener()
        });
        form.setProps({
            listeners: {
                submit: this.onSignUpSubmit.bind(this)
            }
        });
        this.form = form;
        this.eventBus.on("signUpError", (errorText)=>this.onSignUpError(errorText)
        );
    }
    getLinkListener() {
        return {
            click: (e)=>{
                e.preventDefault();
                const router = new _router.Router("body");
                router.go("/");
            }
        };
    }
    onSignUpSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            email: form.email.value,
            login: form.login.value,
            first_name: form.first_name.value,
            second_name: form.second_name.value,
            phone: form.phone.value,
            password: form.password.value
        };
        const isNotValid = this.form.validate();
        this.eventBus.emit("formSubmit", data);
    }
    onSignUpError(errorText) {
        _errorPopupDefault.default.showErrorPopup(errorText);
    }
}

},{"../../components/block/block":"5WfBa","../login/template":"gtofV","../../components/label/label":"7Iu1p","../../components/container/container":"1QgVj","../../modules/signUpForm/signUpForm":"kFKEn","../../components/Input/input":"bl4Uw","../../utils/RouteUtils/Router":"8BLVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../modules/popup/errorPopup":"jNphn"}],"kFKEn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpForm", ()=>SignUpForm
);
var _form = require("../../components/form/form");
var _containeredInput = require("../../components/containeredInput/containeredInput");
var _template = require("./template");
var _container = require("../../components/container/container");
var _validatorFactory = require("../../utils/Validators/ValidatorFactory");
class SignUpForm extends _form.Form {
    constructor(props){
        const confirmPass = getSignUpFormField("password_confirmation", "password", "Подтвердите пароль");
        const pass = getSignUpFormField("password", "password", "Пароль");
        const phone = getSignUpFormField("phone", "text", "Телефон");
        const secName = getSignUpFormField("second_name", "text", "Фамилия");
        const firstName = getSignUpFormField("first_name", "text", "Имя");
        const login = getSignUpFormField("login", "text", "Логин");
        const email = getSignUpFormField("email", "text", "Email");
        const actionContainer = new _container.Container({
            classes: [
                "sign-in-form__action-container",
                "sign-action-container"
            ],
            link: props.link,
            btn: props.btn
        }, _template.actionsContainerTemplate);
        super({
            classes: [
                "base-form",
                "sign-form",
                "login-form"
            ],
            actionContainer,
            email,
            login,
            firstName,
            secName,
            phone,
            pass,
            confirmPass,
            listeners: props.listeners
        }, _template.template);
    }
}
function getSignUpFormField(name, type, placeholder) {
    let instanse;
    const props = {
        name: name,
        type: type,
        placeholder: placeholder,
        classes: _form.getDefaultTextInputClasses(),
        containerClasses: getDefaultInputContainerClasses(),
        labelClasses: [
            "base-label"
        ],
        validator: _validatorFactory.ValidatorFactory.getValidator(name)
    };
    instanse = new _containeredInput.ContaineredInput(props);
    return instanse;
}
function getDefaultInputContainerClasses() {
    return [
        "sign-input-container"
    ];
}

},{"../../components/form/form":"1enI1","../../components/containeredInput/containeredInput":"iQOIx","./template":"fx1lw","../../components/container/container":"1QgVj","../../utils/Validators/ValidatorFactory":"fyOYk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fx1lw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "template", ()=>template
);
parcelHelpers.export(exports, "actionsContainerTemplate", ()=>actionsContainerTemplate
);
const template = `<form {{ classes actionContainer confirmPass pass phone secName firstName login email }} >
  </form>`;
const actionsContainerTemplate = "<div {{ classes link btn }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZgAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SignUpPageApi", ()=>SignUpPageApi
);
var _baseApi = require("./BaseApi");
var _xhr = require("../XHR");
var _userApi = require("./UserApi");
var _applicationStore = require("../../modules/ApplicationState/ApplicationStore");
var _applicationStoreDefault = parcelHelpers.interopDefault(_applicationStore);
const HTTP = new _xhr.HTTPTransport("https://ya-praktikum.tech/api/v2/");
class SignUpPageApi extends _baseApi.BaseAPI {
    register(user) {
        return HTTP.post("auth/signup", {
            credentials: "include",
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            data: user
        }).then(()=>{
            _userApi.UserApi.getUser();
        }).catch((result)=>{
            _applicationStoreDefault.default.set("signUpError", JSON.parse(result.responseText).reason);
        });
    }
}

},{"./BaseApi":"gkMZh","../XHR":"29JJz","./UserApi":"8beJ7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../modules/ApplicationState/ApplicationStore":"1aamq"}],"ktlA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>NotFoundController
);
var _baseController = require("./BaseController");
var _errorPage = require("../pages/error/errorPage");
class NotFoundController extends _baseController.BaseController {
    constructor(){
        super(new _errorPage.NotFoundPage());
    }
}

},{"./BaseController":"cvh6U","../pages/error/errorPage":"328Qb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"328Qb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundPage", ()=>NotFoundPage
);
parcelHelpers.export(exports, "ServerErrorPage", ()=>ServerErrorPage
);
var _block = require("../../components/block/block");
var _container = require("../../components/container/container");
var _template = require("./template");
var _template1 = require("../../components/block/template");
var _styleScss = require("./style.scss");
class ErrorPage extends _block.Block {
    constructor(props){
        const errorNumber = new _container.Container({
            classes: "error-number",
            textContent: props.errorNumber
        });
        const errorText = new _container.Container({
            classes: "error-text",
            textContent: props.errorText
        });
        const link = new _block.Block("a", {
            classes: [
                "base-link",
                "sign-link",
                "error-link"
            ],
            href: "/",
            textContent: "Назад к чатам"
        }, _template1.linkTemplate);
        const mainContainer = new _container.Container({
            classes: [
                "main-container"
            ],
            link,
            errorText,
            errorNumber
        }, _template.mainContainerTemplate);
        super("div", {
            mainContainer
        }, _template.template);
    }
}
class NotFoundPage extends ErrorPage {
    constructor(){
        super({
            errorNumber: "404",
            errorText: "Не туда попали"
        });
    }
}
class ServerErrorPage extends ErrorPage {
    constructor(){
        super({
            errorNumber: "500",
            errorText: "Мы уже фиксим"
        });
    }
}

},{"../../components/block/block":"5WfBa","../../components/container/container":"1QgVj","./template":"3lVvF","../../components/block/template":"lBVWo","./style.scss":"cRw8n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lVvF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainContainerTemplate", ()=>mainContainerTemplate
);
parcelHelpers.export(exports, "template", ()=>template
);
const mainContainerTemplate = "<div {{ classes link errorText errorNumber }}></div>";
const template = "<div {{ mainContainer }}></div>";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cRw8n":[function() {},{}]},["8d4jI","i3jPr"], "i3jPr", "parcelRequire2d00")

//# sourceMappingURL=index.71ab3087.js.map
