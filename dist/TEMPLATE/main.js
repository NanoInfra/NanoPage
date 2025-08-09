var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno:https://esm.sh/react@19.1.1/denonext/jsx-runtime.mjs
var p = Object.create;
var j = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf;
var T = Object.prototype.hasOwnProperty;
var n = (e8, r8) => () => (r8 || e8((r8 = {
  exports: {}
}).exports, r8), r8.exports);
var f = (e8, r8, t8, o7) => {
  if (r8 && typeof r8 == "object" || typeof r8 == "function") for (let s8 of a(r8)) !T.call(e8, s8) && s8 !== t8 && j(e8, s8, {
    get: () => r8[s8],
    enumerable: !(o7 = v(r8, s8)) || o7.enumerable
  });
  return e8;
};
var m = (e8, r8, t8) => (t8 = e8 != null ? p(k(e8)) : {}, f(r8 || !e8 || !e8.__esModule ? j(t8, "default", {
  value: e8,
  enumerable: true
}) : t8, e8));
var E = n((l9) => {
  "use strict";
  var _8 = Symbol.for("react.transitional.element"), c6 = Symbol.for("react.fragment");
  function x10(e8, r8, t8) {
    var o7 = null;
    if (t8 !== void 0 && (o7 = "" + t8), r8.key !== void 0 && (o7 = "" + r8.key), "key" in r8) {
      t8 = {};
      for (var s8 in r8) s8 !== "key" && (t8[s8] = r8[s8]);
    } else t8 = r8;
    return r8 = t8.ref, {
      $$typeof: _8,
      type: e8,
      key: o7,
      ref: r8 !== void 0 ? r8 : null,
      props: t8
    };
  }
  l9.Fragment = c6;
  l9.jsx = x10;
  l9.jsxs = x10;
});
var i = n((P7, d8) => {
  "use strict";
  d8.exports = E();
});
var u = m(i());
var { Fragment: R, jsx: q, jsxs: C } = u;
var M = u.default ?? u;

// deno:https://esm.sh/react-dom@19.1.1/denonext/react-dom.mjs
var react_dom_exports = {};
__export(react_dom_exports, {
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => H,
  createPortal: () => I,
  default: () => K,
  flushSync: () => b2,
  preconnect: () => F,
  prefetchDNS: () => j2,
  preinit: () => k3,
  preinitModule: () => G2,
  preload: () => q3,
  preloadModule: () => w,
  requestFormReset: () => V,
  unstable_batchedUpdates: () => x2,
  useFormState: () => Y,
  useFormStatus: () => z2,
  version: () => B
});

// deno:https://esm.sh/react@19.1.1/denonext/react.mjs
var react_exports = {};
__export(react_exports, {
  Children: () => ce,
  Component: () => pe,
  Fragment: () => ae,
  Profiler: () => _e,
  PureComponent: () => le,
  StrictMode: () => Ee,
  Suspense: () => ye,
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => ve,
  __COMPILER_RUNTIME: () => Re,
  cache: () => me,
  cloneElement: () => Te,
  createContext: () => de,
  createElement: () => Ce,
  createRef: () => Se,
  default: () => Qe,
  forwardRef: () => Ae,
  isValidElement: () => we,
  lazy: () => he,
  memo: () => Oe,
  startTransition: () => ge,
  unstable_useCacheRefresh: () => Ne,
  use: () => je,
  useActionState: () => Pe,
  useCallback: () => He,
  useContext: () => Ie,
  useDebugValue: () => $e,
  useDeferredValue: () => Me,
  useEffect: () => Le,
  useId: () => Ue,
  useImperativeHandle: () => Ye,
  useInsertionEffect: () => xe,
  useLayoutEffect: () => De,
  useMemo: () => be,
  useOptimistic: () => ke,
  useReducer: () => qe,
  useRef: () => ze,
  useState: () => Ge,
  useSyncExternalStore: () => Ke,
  useTransition: () => We,
  version: () => Be
});

// deno:data:application/javascript,export default { env: { NODE_ENV: 'production' } };
var javascript_export_default_env_NODE_ENV_production_default = {
  env: {
    NODE_ENV: "production"
  }
};

// deno:https://esm.sh/react@19.1.1/denonext/react.mjs
var x = Object.create;
var C2 = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var b = Object.getOwnPropertyNames;
var k2 = Object.getPrototypeOf;
var q2 = Object.prototype.hasOwnProperty;
var S = (e8, t8) => () => (t8 || e8((t8 = {
  exports: {}
}).exports, t8), t8.exports);
var z = (e8, t8, n5, r8) => {
  if (t8 && typeof t8 == "object" || typeof t8 == "function") for (let u10 of b(t8)) !q2.call(e8, u10) && u10 !== n5 && C2(e8, u10, {
    get: () => t8[u10],
    enumerable: !(r8 = D(t8, u10)) || r8.enumerable
  });
  return e8;
};
var G = (e8, t8, n5) => (n5 = e8 != null ? x(k2(e8)) : {}, z(t8 || !e8 || !e8.__esModule ? C2(n5, "default", {
  value: e8,
  enumerable: true
}) : n5, e8));
var M2 = S((o7) => {
  "use strict";
  var v13 = Symbol.for("react.transitional.element"), K9 = Symbol.for("react.portal"), W6 = Symbol.for("react.fragment"), B7 = Symbol.for("react.strict_mode"), Q5 = Symbol.for("react.profiler"), V8 = Symbol.for("react.consumer"), X6 = Symbol.for("react.context"), Z6 = Symbol.for("react.forward_ref"), J5 = Symbol.for("react.suspense"), F7 = Symbol.for("react.memo"), N4 = Symbol.for("react.lazy"), A6 = Symbol.iterator;
  function ee4(e8) {
    return e8 === null || typeof e8 != "object" ? null : (e8 = A6 && e8[A6] || e8["@@iterator"], typeof e8 == "function" ? e8 : null);
  }
  var j10 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P7 = Object.assign, H6 = {};
  function _8(e8, t8, n5) {
    this.props = e8, this.context = t8, this.refs = H6, this.updater = n5 || j10;
  }
  _8.prototype.isReactComponent = {};
  _8.prototype.setState = function(e8, t8) {
    if (typeof e8 != "object" && typeof e8 != "function" && e8 != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e8, t8, "setState");
  };
  _8.prototype.forceUpdate = function(e8) {
    this.updater.enqueueForceUpdate(this, e8, "forceUpdate");
  };
  function I6() {
  }
  I6.prototype = _8.prototype;
  function R8(e8, t8, n5) {
    this.props = e8, this.context = t8, this.refs = H6, this.updater = n5 || j10;
  }
  var m13 = R8.prototype = new I6();
  m13.constructor = R8;
  P7(m13, _8.prototype);
  m13.isPureReactComponent = true;
  var w5 = Array.isArray, i9 = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  }, $7 = Object.prototype.hasOwnProperty;
  function T8(e8, t8, n5, r8, u10, f11) {
    return n5 = f11.ref, {
      $$typeof: v13,
      type: e8,
      key: t8,
      ref: n5 !== void 0 ? n5 : null,
      props: f11
    };
  }
  function te2(e8, t8) {
    return T8(e8.type, t8, void 0, void 0, void 0, e8.props);
  }
  function d8(e8) {
    return typeof e8 == "object" && e8 !== null && e8.$$typeof === v13;
  }
  function ne4(e8) {
    var t8 = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e8.replace(/[=:]/g, function(n5) {
      return t8[n5];
    });
  }
  var h10 = /\/+/g;
  function y10(e8, t8) {
    return typeof e8 == "object" && e8 !== null && e8.key != null ? ne4("" + e8.key) : t8.toString(36);
  }
  function O6() {
  }
  function re3(e8) {
    switch (e8.status) {
      case "fulfilled":
        return e8.value;
      case "rejected":
        throw e8.reason;
      default:
        switch (typeof e8.status == "string" ? e8.then(O6, O6) : (e8.status = "pending", e8.then(function(t8) {
          e8.status === "pending" && (e8.status = "fulfilled", e8.value = t8);
        }, function(t8) {
          e8.status === "pending" && (e8.status = "rejected", e8.reason = t8);
        })), e8.status) {
          case "fulfilled":
            return e8.value;
          case "rejected":
            throw e8.reason;
        }
    }
    throw e8;
  }
  function a9(e8, t8, n5, r8, u10) {
    var f11 = typeof e8;
    (f11 === "undefined" || f11 === "boolean") && (e8 = null);
    var s8 = false;
    if (e8 === null) s8 = true;
    else switch (f11) {
      case "bigint":
      case "string":
      case "number":
        s8 = true;
        break;
      case "object":
        switch (e8.$$typeof) {
          case v13:
          case K9:
            s8 = true;
            break;
          case N4:
            return s8 = e8._init, a9(s8(e8._payload), t8, n5, r8, u10);
        }
    }
    if (s8) return u10 = u10(e8), s8 = r8 === "" ? "." + y10(e8, 0) : r8, w5(u10) ? (n5 = "", s8 != null && (n5 = s8.replace(h10, "$&/") + "/"), a9(u10, t8, n5, "", function(Y10) {
      return Y10;
    })) : u10 != null && (d8(u10) && (u10 = te2(u10, n5 + (u10.key == null || e8 && e8.key === u10.key ? "" : ("" + u10.key).replace(h10, "$&/") + "/") + s8)), t8.push(u10)), 1;
    s8 = 0;
    var p9 = r8 === "" ? "." : r8 + ":";
    if (w5(e8)) for (var c6 = 0; c6 < e8.length; c6++) r8 = e8[c6], f11 = p9 + y10(r8, c6), s8 += a9(r8, t8, n5, f11, u10);
    else if (c6 = ee4(e8), typeof c6 == "function") for (e8 = c6.call(e8), c6 = 0; !(r8 = e8.next()).done; ) r8 = r8.value, f11 = p9 + y10(r8, c6++), s8 += a9(r8, t8, n5, f11, u10);
    else if (f11 === "object") {
      if (typeof e8.then == "function") return a9(re3(e8), t8, n5, r8, u10);
      throw t8 = String(e8), Error("Objects are not valid as a React child (found: " + (t8 === "[object Object]" ? "object with keys {" + Object.keys(e8).join(", ") + "}" : t8) + "). If you meant to render a collection of children, use an array instead.");
    }
    return s8;
  }
  function l9(e8, t8, n5) {
    if (e8 == null) return e8;
    var r8 = [], u10 = 0;
    return a9(e8, r8, "", "", function(f11) {
      return t8.call(n5, f11, u10++);
    }), r8;
  }
  function oe5(e8) {
    if (e8._status === -1) {
      var t8 = e8._result;
      t8 = t8(), t8.then(function(n5) {
        (e8._status === 0 || e8._status === -1) && (e8._status = 1, e8._result = n5);
      }, function(n5) {
        (e8._status === 0 || e8._status === -1) && (e8._status = 2, e8._result = n5);
      }), e8._status === -1 && (e8._status = 0, e8._result = t8);
    }
    if (e8._status === 1) return e8._result.default;
    throw e8._result;
  }
  var g9 = typeof reportError == "function" ? reportError : function(e8) {
    if (typeof globalThis == "object" && typeof globalThis.ErrorEvent == "function") {
      var t8 = new globalThis.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e8 == "object" && e8 !== null && typeof e8.message == "string" ? String(e8.message) : String(e8),
        error: e8
      });
      if (!globalThis.dispatchEvent(t8)) return;
    } else if (typeof javascript_export_default_env_NODE_ENV_production_default == "object" && typeof javascript_export_default_env_NODE_ENV_production_default.emit == "function") {
      javascript_export_default_env_NODE_ENV_production_default.emit("uncaughtException", e8);
      return;
    }
    console.error(e8);
  };
  function ue3() {
  }
  o7.Children = {
    map: l9,
    forEach: function(e8, t8, n5) {
      l9(e8, function() {
        t8.apply(this, arguments);
      }, n5);
    },
    count: function(e8) {
      var t8 = 0;
      return l9(e8, function() {
        t8++;
      }), t8;
    },
    toArray: function(e8) {
      return l9(e8, function(t8) {
        return t8;
      }) || [];
    },
    only: function(e8) {
      if (!d8(e8)) throw Error("React.Children.only expected to receive a single React element child.");
      return e8;
    }
  };
  o7.Component = _8;
  o7.Fragment = W6;
  o7.Profiler = Q5;
  o7.PureComponent = R8;
  o7.StrictMode = B7;
  o7.Suspense = J5;
  o7.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i9;
  o7.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e8) {
      return i9.H.useMemoCache(e8);
    }
  };
  o7.cache = function(e8) {
    return function() {
      return e8.apply(null, arguments);
    };
  };
  o7.cloneElement = function(e8, t8, n5) {
    if (e8 == null) throw Error("The argument must be a React element, but you passed " + e8 + ".");
    var r8 = P7({}, e8.props), u10 = e8.key, f11 = void 0;
    if (t8 != null) for (s8 in t8.ref !== void 0 && (f11 = void 0), t8.key !== void 0 && (u10 = "" + t8.key), t8) !$7.call(t8, s8) || s8 === "key" || s8 === "__self" || s8 === "__source" || s8 === "ref" && t8.ref === void 0 || (r8[s8] = t8[s8]);
    var s8 = arguments.length - 2;
    if (s8 === 1) r8.children = n5;
    else if (1 < s8) {
      for (var p9 = Array(s8), c6 = 0; c6 < s8; c6++) p9[c6] = arguments[c6 + 2];
      r8.children = p9;
    }
    return T8(e8.type, u10, void 0, void 0, f11, r8);
  };
  o7.createContext = function(e8) {
    return e8 = {
      $$typeof: X6,
      _currentValue: e8,
      _currentValue2: e8,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e8.Provider = e8, e8.Consumer = {
      $$typeof: V8,
      _context: e8
    }, e8;
  };
  o7.createElement = function(e8, t8, n5) {
    var r8, u10 = {}, f11 = null;
    if (t8 != null) for (r8 in t8.key !== void 0 && (f11 = "" + t8.key), t8) $7.call(t8, r8) && r8 !== "key" && r8 !== "__self" && r8 !== "__source" && (u10[r8] = t8[r8]);
    var s8 = arguments.length - 2;
    if (s8 === 1) u10.children = n5;
    else if (1 < s8) {
      for (var p9 = Array(s8), c6 = 0; c6 < s8; c6++) p9[c6] = arguments[c6 + 2];
      u10.children = p9;
    }
    if (e8 && e8.defaultProps) for (r8 in s8 = e8.defaultProps, s8) u10[r8] === void 0 && (u10[r8] = s8[r8]);
    return T8(e8, f11, void 0, void 0, null, u10);
  };
  o7.createRef = function() {
    return {
      current: null
    };
  };
  o7.forwardRef = function(e8) {
    return {
      $$typeof: Z6,
      render: e8
    };
  };
  o7.isValidElement = d8;
  o7.lazy = function(e8) {
    return {
      $$typeof: N4,
      _payload: {
        _status: -1,
        _result: e8
      },
      _init: oe5
    };
  };
  o7.memo = function(e8, t8) {
    return {
      $$typeof: F7,
      type: e8,
      compare: t8 === void 0 ? null : t8
    };
  };
  o7.startTransition = function(e8) {
    var t8 = i9.T, n5 = {};
    i9.T = n5;
    try {
      var r8 = e8(), u10 = i9.S;
      u10 !== null && u10(n5, r8), typeof r8 == "object" && r8 !== null && typeof r8.then == "function" && r8.then(ue3, g9);
    } catch (f11) {
      g9(f11);
    } finally {
      i9.T = t8;
    }
  };
  o7.unstable_useCacheRefresh = function() {
    return i9.H.useCacheRefresh();
  };
  o7.use = function(e8) {
    return i9.H.use(e8);
  };
  o7.useActionState = function(e8, t8, n5) {
    return i9.H.useActionState(e8, t8, n5);
  };
  o7.useCallback = function(e8, t8) {
    return i9.H.useCallback(e8, t8);
  };
  o7.useContext = function(e8) {
    return i9.H.useContext(e8);
  };
  o7.useDebugValue = function() {
  };
  o7.useDeferredValue = function(e8, t8) {
    return i9.H.useDeferredValue(e8, t8);
  };
  o7.useEffect = function(e8, t8, n5) {
    var r8 = i9.H;
    if (typeof n5 == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return r8.useEffect(e8, t8);
  };
  o7.useId = function() {
    return i9.H.useId();
  };
  o7.useImperativeHandle = function(e8, t8, n5) {
    return i9.H.useImperativeHandle(e8, t8, n5);
  };
  o7.useInsertionEffect = function(e8, t8) {
    return i9.H.useInsertionEffect(e8, t8);
  };
  o7.useLayoutEffect = function(e8, t8) {
    return i9.H.useLayoutEffect(e8, t8);
  };
  o7.useMemo = function(e8, t8) {
    return i9.H.useMemo(e8, t8);
  };
  o7.useOptimistic = function(e8, t8) {
    return i9.H.useOptimistic(e8, t8);
  };
  o7.useReducer = function(e8, t8, n5) {
    return i9.H.useReducer(e8, t8, n5);
  };
  o7.useRef = function(e8) {
    return i9.H.useRef(e8);
  };
  o7.useState = function(e8) {
    return i9.H.useState(e8);
  };
  o7.useSyncExternalStore = function(e8, t8, n5) {
    return i9.H.useSyncExternalStore(e8, t8, n5);
  };
  o7.useTransition = function() {
    return i9.H.useTransition();
  };
  o7.version = "19.1.1";
});
var U = S((fe5, L6) => {
  "use strict";
  L6.exports = M2();
});
var E2 = G(U());
var { Children: ce, Component: pe, Fragment: ae, Profiler: _e, PureComponent: le, StrictMode: Ee, Suspense: ye, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: ve, __COMPILER_RUNTIME: Re, cache: me, cloneElement: Te, createContext: de, createElement: Ce, createRef: Se, forwardRef: Ae, isValidElement: we, lazy: he, memo: Oe, startTransition: ge, unstable_useCacheRefresh: Ne, use: je, useActionState: Pe, useCallback: He, useContext: Ie, useDebugValue: $e, useDeferredValue: Me, useEffect: Le, useId: Ue, useImperativeHandle: Ye, useInsertionEffect: xe, useLayoutEffect: De, useMemo: be, useOptimistic: ke, useReducer: qe, useRef: ze, useState: Ge, useSyncExternalStore: Ke, useTransition: We, version: Be } = E2;
var Qe = E2.default ?? E2;

// deno:https://esm.sh/react-dom@19.1.1/denonext/react-dom.mjs
var require2 = (n5) => {
  const e8 = (m13) => typeof m13.default < "u" ? m13.default : m13, c6 = (m13) => Object.assign({
    __esModule: true
  }, m13);
  switch (n5) {
    case "react":
      return e8(react_exports);
    default:
      console.error('module "' + n5 + '" not found');
      return null;
  }
};
var S2 = Object.create;
var l = Object.defineProperty;
var E3 = Object.getOwnPropertyDescriptor;
var T2 = Object.getOwnPropertyNames;
var R2 = Object.getPrototypeOf;
var N = Object.prototype.hasOwnProperty;
var p2 = ((r8) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(r8, {
  get: (e8, t8) => (typeof require2 < "u" ? require2 : e8)[t8]
}) : r8)(function(r8) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + r8 + '" is not supported');
});
var y = (r8, e8) => () => (e8 || r8((e8 = {
  exports: {}
}).exports, e8), e8.exports);
var A = (r8, e8, t8, c6) => {
  if (e8 && typeof e8 == "object" || typeof e8 == "function") for (let a9 of T2(e8)) !N.call(r8, a9) && a9 !== t8 && l(r8, a9, {
    get: () => e8[a9],
    enumerable: !(c6 = E3(e8, a9)) || c6.enumerable
  });
  return r8;
};
var D2 = (r8, e8, t8) => (t8 = r8 != null ? S2(R2(r8)) : {}, A(e8 || !r8 || !r8.__esModule ? l(t8, "default", {
  value: r8,
  enumerable: true
}) : t8, r8));
var _ = y((i9) => {
  "use strict";
  var h10 = p2("react");
  function o7(r8) {
    var e8 = "https://react.dev/errors/" + r8;
    if (1 < arguments.length) {
      e8 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t8 = 2; t8 < arguments.length; t8++) e8 += "&args[]=" + encodeURIComponent(arguments[t8]);
    }
    return "Minified React error #" + r8 + "; visit " + e8 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f11() {
  }
  var n5 = {
    d: {
      f: f11,
      r: function() {
        throw Error(o7(522));
      },
      D: f11,
      C: f11,
      L: f11,
      m: f11,
      X: f11,
      S: f11,
      M: f11
    },
    p: 0,
    findDOMNode: null
  }, P7 = Symbol.for("react.portal");
  function C10(r8, e8, t8) {
    var c6 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P7,
      key: c6 == null ? null : "" + c6,
      children: r8,
      containerInfo: e8,
      implementation: t8
    };
  }
  var u10 = h10.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s8(r8, e8) {
    if (r8 === "font") return "";
    if (typeof e8 == "string") return e8 === "use-credentials" ? e8 : "";
  }
  i9.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n5;
  i9.createPortal = function(r8, e8) {
    var t8 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e8 || e8.nodeType !== 1 && e8.nodeType !== 9 && e8.nodeType !== 11) throw Error(o7(299));
    return C10(r8, e8, null, t8);
  };
  i9.flushSync = function(r8) {
    var e8 = u10.T, t8 = n5.p;
    try {
      if (u10.T = null, n5.p = 2, r8) return r8();
    } finally {
      u10.T = e8, n5.p = t8, n5.d.f();
    }
  };
  i9.preconnect = function(r8, e8) {
    typeof r8 == "string" && (e8 ? (e8 = e8.crossOrigin, e8 = typeof e8 == "string" ? e8 === "use-credentials" ? e8 : "" : void 0) : e8 = null, n5.d.C(r8, e8));
  };
  i9.prefetchDNS = function(r8) {
    typeof r8 == "string" && n5.d.D(r8);
  };
  i9.preinit = function(r8, e8) {
    if (typeof r8 == "string" && e8 && typeof e8.as == "string") {
      var t8 = e8.as, c6 = s8(t8, e8.crossOrigin), a9 = typeof e8.integrity == "string" ? e8.integrity : void 0, g9 = typeof e8.fetchPriority == "string" ? e8.fetchPriority : void 0;
      t8 === "style" ? n5.d.S(r8, typeof e8.precedence == "string" ? e8.precedence : void 0, {
        crossOrigin: c6,
        integrity: a9,
        fetchPriority: g9
      }) : t8 === "script" && n5.d.X(r8, {
        crossOrigin: c6,
        integrity: a9,
        fetchPriority: g9,
        nonce: typeof e8.nonce == "string" ? e8.nonce : void 0
      });
    }
  };
  i9.preinitModule = function(r8, e8) {
    if (typeof r8 == "string") if (typeof e8 == "object" && e8 !== null) {
      if (e8.as == null || e8.as === "script") {
        var t8 = s8(e8.as, e8.crossOrigin);
        n5.d.M(r8, {
          crossOrigin: t8,
          integrity: typeof e8.integrity == "string" ? e8.integrity : void 0,
          nonce: typeof e8.nonce == "string" ? e8.nonce : void 0
        });
      }
    } else e8 == null && n5.d.M(r8);
  };
  i9.preload = function(r8, e8) {
    if (typeof r8 == "string" && typeof e8 == "object" && e8 !== null && typeof e8.as == "string") {
      var t8 = e8.as, c6 = s8(t8, e8.crossOrigin);
      n5.d.L(r8, t8, {
        crossOrigin: c6,
        integrity: typeof e8.integrity == "string" ? e8.integrity : void 0,
        nonce: typeof e8.nonce == "string" ? e8.nonce : void 0,
        type: typeof e8.type == "string" ? e8.type : void 0,
        fetchPriority: typeof e8.fetchPriority == "string" ? e8.fetchPriority : void 0,
        referrerPolicy: typeof e8.referrerPolicy == "string" ? e8.referrerPolicy : void 0,
        imageSrcSet: typeof e8.imageSrcSet == "string" ? e8.imageSrcSet : void 0,
        imageSizes: typeof e8.imageSizes == "string" ? e8.imageSizes : void 0,
        media: typeof e8.media == "string" ? e8.media : void 0
      });
    }
  };
  i9.preloadModule = function(r8, e8) {
    if (typeof r8 == "string") if (e8) {
      var t8 = s8(e8.as, e8.crossOrigin);
      n5.d.m(r8, {
        as: typeof e8.as == "string" && e8.as !== "script" ? e8.as : void 0,
        crossOrigin: t8,
        integrity: typeof e8.integrity == "string" ? e8.integrity : void 0
      });
    } else n5.d.m(r8);
  };
  i9.requestFormReset = function(r8) {
    n5.d.r(r8);
  };
  i9.unstable_batchedUpdates = function(r8, e8) {
    return r8(e8);
  };
  i9.useFormState = function(r8, e8, t8) {
    return u10.H.useFormState(r8, e8, t8);
  };
  i9.useFormStatus = function() {
    return u10.H.useHostTransitionStatus();
  };
  i9.version = "19.1.1";
});
var v2 = y((M5, O6) => {
  "use strict";
  function m13() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m13);
    } catch (r8) {
      console.error(r8);
    }
  }
  m13(), O6.exports = _();
});
var d = D2(v2());
var { __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: H, createPortal: I, flushSync: b2, preconnect: F, prefetchDNS: j2, preinit: k3, preinitModule: G2, preload: q3, preloadModule: w, requestFormReset: V, unstable_batchedUpdates: x2, useFormState: Y, useFormStatus: z2, version: B } = d;
var K = d.default ?? d;

// deno:https://esm.sh/scheduler@0.26.0?target=denonext
var scheduler_0_26_exports = {};
__export(scheduler_0_26_exports, {
  default: () => we2,
  unstable_IdlePriority: () => re,
  unstable_ImmediatePriority: () => ue,
  unstable_LowPriority: () => se,
  unstable_NormalPriority: () => oe,
  unstable_Profiling: () => ie,
  unstable_UserBlockingPriority: () => ce2,
  unstable_cancelCallback: () => fe,
  unstable_forceFrameRate: () => be2,
  unstable_getCurrentPriorityLevel: () => _e2,
  unstable_next: () => de2,
  unstable_now: () => ae2,
  unstable_requestPaint: () => ve2,
  unstable_runWithPriority: () => ye2,
  unstable_scheduleCallback: () => ke2,
  unstable_shouldYield: () => me2,
  unstable_wrapCallback: () => Pe2
});

// deno:https://esm.sh/scheduler@0.26.0/denonext/scheduler.mjs
var __setImmediate$ = (cb, ...args) => ({
  $t: setTimeout(cb, 0, ...args),
  [Symbol.dispose]() {
    clearTimeout(this.t);
  }
});
var J = Object.create;
var F2 = Object.defineProperty;
var K2 = Object.getOwnPropertyDescriptor;
var X = Object.getOwnPropertyNames;
var Z = Object.getPrototypeOf;
var $ = Object.prototype.hasOwnProperty;
var Y2 = (e8, n5) => () => (n5 || e8((n5 = {
  exports: {}
}).exports, n5), n5.exports);
var x3 = (e8, n5, l9, t8) => {
  if (n5 && typeof n5 == "object" || typeof n5 == "function") for (let a9 of X(n5)) !$.call(e8, a9) && a9 !== l9 && F2(e8, a9, {
    get: () => n5[a9],
    enumerable: !(t8 = K2(n5, a9)) || t8.enumerable
  });
  return e8;
};
var h = (e8, n5, l9) => (l9 = e8 != null ? J(Z(e8)) : {}, x3(n5 || !e8 || !e8.__esModule ? F2(l9, "default", {
  value: e8,
  enumerable: true
}) : l9, e8));
var z3 = Y2((r8) => {
  "use strict";
  function H6(e8, n5) {
    var l9 = e8.length;
    e8.push(n5);
    e: for (; 0 < l9; ) {
      var t8 = l9 - 1 >>> 1, a9 = e8[t8];
      if (0 < w5(a9, n5)) e8[t8] = n5, e8[l9] = a9, l9 = t8;
      else break e;
    }
  }
  function o7(e8) {
    return e8.length === 0 ? null : e8[0];
  }
  function T8(e8) {
    if (e8.length === 0) return null;
    var n5 = e8[0], l9 = e8.pop();
    if (l9 !== n5) {
      e8[0] = l9;
      e: for (var t8 = 0, a9 = e8.length, k13 = a9 >>> 1; t8 < k13; ) {
        var m13 = 2 * (t8 + 1) - 1, j10 = e8[m13], f11 = m13 + 1, P7 = e8[f11];
        if (0 > w5(j10, l9)) f11 < a9 && 0 > w5(P7, j10) ? (e8[t8] = P7, e8[f11] = l9, t8 = f11) : (e8[t8] = j10, e8[m13] = l9, t8 = m13);
        else if (f11 < a9 && 0 > w5(P7, l9)) e8[t8] = P7, e8[f11] = l9, t8 = f11;
        else break e;
      }
    }
    return n5;
  }
  function w5(e8, n5) {
    var l9 = e8.sortIndex - n5.sortIndex;
    return l9 !== 0 ? l9 : e8.id - n5.id;
  }
  r8.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function" ? (B7 = performance, r8.unstable_now = function() {
    return B7.now();
  }) : (q9 = Date, D8 = q9.now(), r8.unstable_now = function() {
    return q9.now() - D8;
  });
  var B7, q9, D8, i9 = [], c6 = [], ee4 = 1, s8 = null, u10 = 3, N4 = false, d8 = false, v13 = false, R8 = false, L6 = typeof setTimeout == "function" ? setTimeout : null, M5 = typeof clearTimeout == "function" ? clearTimeout : null, E11 = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  function C10(e8) {
    for (var n5 = o7(c6); n5 !== null; ) {
      if (n5.callback === null) T8(c6);
      else if (n5.startTime <= e8) T8(c6), n5.sortIndex = n5.expirationTime, H6(i9, n5);
      else break;
      n5 = o7(c6);
    }
  }
  function S11(e8) {
    if (v13 = false, C10(e8), !d8) if (o7(i9) !== null) d8 = true, _8 || (_8 = true, b12());
    else {
      var n5 = o7(c6);
      n5 !== null && U9(S11, n5.startTime - e8);
    }
  }
  var _8 = false, y10 = -1, O6 = 5, V8 = -1;
  function W6() {
    return R8 ? true : !(r8.unstable_now() - V8 < O6);
  }
  function I6() {
    if (R8 = false, _8) {
      var e8 = r8.unstable_now();
      V8 = e8;
      var n5 = true;
      try {
        e: {
          d8 = false, v13 && (v13 = false, M5(y10), y10 = -1), N4 = true;
          var l9 = u10;
          try {
            n: {
              for (C10(e8), s8 = o7(i9); s8 !== null && !(s8.expirationTime > e8 && W6()); ) {
                var t8 = s8.callback;
                if (typeof t8 == "function") {
                  s8.callback = null, u10 = s8.priorityLevel;
                  var a9 = t8(s8.expirationTime <= e8);
                  if (e8 = r8.unstable_now(), typeof a9 == "function") {
                    s8.callback = a9, C10(e8), n5 = true;
                    break n;
                  }
                  s8 === o7(i9) && T8(i9), C10(e8);
                } else T8(i9);
                s8 = o7(i9);
              }
              if (s8 !== null) n5 = true;
              else {
                var k13 = o7(c6);
                k13 !== null && U9(S11, k13.startTime - e8), n5 = false;
              }
            }
            break e;
          } finally {
            s8 = null, u10 = l9, N4 = false;
          }
          n5 = void 0;
        }
      } finally {
        n5 ? b12() : _8 = false;
      }
    }
  }
  var b12;
  typeof E11 == "function" ? b12 = function() {
    E11(I6);
  } : typeof MessageChannel < "u" ? (p9 = new MessageChannel(), Q5 = p9.port2, p9.port1.onmessage = I6, b12 = function() {
    Q5.postMessage(null);
  }) : b12 = function() {
    L6(I6, 0);
  };
  var p9, Q5;
  function U9(e8, n5) {
    y10 = L6(function() {
      e8(r8.unstable_now());
    }, n5);
  }
  r8.unstable_IdlePriority = 5;
  r8.unstable_ImmediatePriority = 1;
  r8.unstable_LowPriority = 4;
  r8.unstable_NormalPriority = 3;
  r8.unstable_Profiling = null;
  r8.unstable_UserBlockingPriority = 2;
  r8.unstable_cancelCallback = function(e8) {
    e8.callback = null;
  };
  r8.unstable_forceFrameRate = function(e8) {
    0 > e8 || 125 < e8 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O6 = 0 < e8 ? Math.floor(1e3 / e8) : 5;
  };
  r8.unstable_getCurrentPriorityLevel = function() {
    return u10;
  };
  r8.unstable_next = function(e8) {
    switch (u10) {
      case 1:
      case 2:
      case 3:
        var n5 = 3;
        break;
      default:
        n5 = u10;
    }
    var l9 = u10;
    u10 = n5;
    try {
      return e8();
    } finally {
      u10 = l9;
    }
  };
  r8.unstable_requestPaint = function() {
    R8 = true;
  };
  r8.unstable_runWithPriority = function(e8, n5) {
    switch (e8) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e8 = 3;
    }
    var l9 = u10;
    u10 = e8;
    try {
      return n5();
    } finally {
      u10 = l9;
    }
  };
  r8.unstable_scheduleCallback = function(e8, n5, l9) {
    var t8 = r8.unstable_now();
    switch (typeof l9 == "object" && l9 !== null ? (l9 = l9.delay, l9 = typeof l9 == "number" && 0 < l9 ? t8 + l9 : t8) : l9 = t8, e8) {
      case 1:
        var a9 = -1;
        break;
      case 2:
        a9 = 250;
        break;
      case 5:
        a9 = 1073741823;
        break;
      case 4:
        a9 = 1e4;
        break;
      default:
        a9 = 5e3;
    }
    return a9 = l9 + a9, e8 = {
      id: ee4++,
      callback: n5,
      priorityLevel: e8,
      startTime: l9,
      expirationTime: a9,
      sortIndex: -1
    }, l9 > t8 ? (e8.sortIndex = l9, H6(c6, e8), o7(i9) === null && e8 === o7(c6) && (v13 ? (M5(y10), y10 = -1) : v13 = true, U9(S11, l9 - t8))) : (e8.sortIndex = a9, H6(i9, e8), d8 || N4 || (d8 = true, _8 || (_8 = true, b12()))), e8;
  };
  r8.unstable_shouldYield = W6;
  r8.unstable_wrapCallback = function(e8) {
    var n5 = u10;
    return function() {
      var l9 = u10;
      u10 = n5;
      try {
        return e8.apply(this, arguments);
      } finally {
        u10 = l9;
      }
    };
  };
});
var G3 = Y2((te2, A6) => {
  "use strict";
  A6.exports = z3();
});
var g = h(G3());
var { unstable_now: ae2, unstable_IdlePriority: re, unstable_ImmediatePriority: ue, unstable_LowPriority: se, unstable_NormalPriority: oe, unstable_Profiling: ie, unstable_UserBlockingPriority: ce2, unstable_cancelCallback: fe, unstable_forceFrameRate: be2, unstable_getCurrentPriorityLevel: _e2, unstable_next: de2, unstable_requestPaint: ve2, unstable_runWithPriority: ye2, unstable_scheduleCallback: ke2, unstable_shouldYield: me2, unstable_wrapCallback: Pe2 } = g;
var we2 = g.default ?? g;

// deno:https://esm.sh/react-dom@19.1.1/denonext/client.mjs
var require3 = (n5) => {
  const e8 = (m13) => typeof m13.default < "u" ? m13.default : m13, c6 = (m13) => Object.assign({
    __esModule: true
  }, m13);
  switch (n5) {
    case "scheduler":
      return e8(scheduler_0_26_exports);
    case "react":
      return e8(react_exports);
    case "react-dom":
      return e8(react_dom_exports);
    default:
      console.error('module "' + n5 + '" not found');
      return null;
  }
};
var Cv = Object.create;
var Xe = Object.defineProperty;
var Lv = Object.getOwnPropertyDescriptor;
var pv = Object.getOwnPropertyNames;
var Jv = Object.getPrototypeOf;
var Wv = Object.prototype.hasOwnProperty;
var Sf = ((l9) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(l9, {
  get: (u10, a9) => (typeof require3 < "u" ? require3 : u10)[a9]
}) : l9)(function(l9) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + l9 + '" is not supported');
});
var Ge2 = (l9, u10) => () => (u10 || l9((u10 = {
  exports: {}
}).exports, u10), u10.exports);
var wv = (l9, u10, a9, t8) => {
  if (u10 && typeof u10 == "object" || typeof u10 == "function") for (let n5 of pv(u10)) !Wv.call(l9, n5) && n5 !== a9 && Xe(l9, n5, {
    get: () => u10[n5],
    enumerable: !(t8 = Lv(u10, n5)) || t8.enumerable
  });
  return l9;
};
var $v = (l9, u10, a9) => (a9 = l9 != null ? Cv(Jv(l9)) : {}, wv(u10 || !l9 || !l9.__esModule ? Xe(a9, "default", {
  value: l9,
  enumerable: true
}) : a9, l9));
var Zv = Ge2((yf) => {
  "use strict";
  var I6 = Sf("scheduler"), t0 = Sf("react"), Fv = Sf("react-dom");
  function A6(l9) {
    var u10 = "https://react.dev/errors/" + l9;
    if (1 < arguments.length) {
      u10 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a9 = 2; a9 < arguments.length; a9++) u10 += "&args[]=" + encodeURIComponent(arguments[a9]);
    }
    return "Minified React error #" + l9 + "; visit " + u10 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n0(l9) {
    return !(!l9 || l9.nodeType !== 1 && l9.nodeType !== 9 && l9.nodeType !== 11);
  }
  function Ht3(l9) {
    var u10 = l9, a9 = l9;
    if (l9.alternate) for (; u10.return; ) u10 = u10.return;
    else {
      l9 = u10;
      do
        u10 = l9, (u10.flags & 4098) !== 0 && (a9 = u10.return), l9 = u10.return;
      while (l9);
    }
    return u10.tag === 3 ? a9 : null;
  }
  function f0(l9) {
    if (l9.tag === 13) {
      var u10 = l9.memoizedState;
      if (u10 === null && (l9 = l9.alternate, l9 !== null && (u10 = l9.memoizedState)), u10 !== null) return u10.dehydrated;
    }
    return null;
  }
  function Qe6(l9) {
    if (Ht3(l9) !== l9) throw Error(A6(188));
  }
  function kv(l9) {
    var u10 = l9.alternate;
    if (!u10) {
      if (u10 = Ht3(l9), u10 === null) throw Error(A6(188));
      return u10 !== l9 ? null : l9;
    }
    for (var a9 = l9, t8 = u10; ; ) {
      var n5 = a9.return;
      if (n5 === null) break;
      var f11 = n5.alternate;
      if (f11 === null) {
        if (t8 = n5.return, t8 !== null) {
          a9 = t8;
          continue;
        }
        break;
      }
      if (n5.child === f11.child) {
        for (f11 = n5.child; f11; ) {
          if (f11 === a9) return Qe6(n5), l9;
          if (f11 === t8) return Qe6(n5), u10;
          f11 = f11.sibling;
        }
        throw Error(A6(188));
      }
      if (a9.return !== t8.return) a9 = n5, t8 = f11;
      else {
        for (var c6 = false, e8 = n5.child; e8; ) {
          if (e8 === a9) {
            c6 = true, a9 = n5, t8 = f11;
            break;
          }
          if (e8 === t8) {
            c6 = true, t8 = n5, a9 = f11;
            break;
          }
          e8 = e8.sibling;
        }
        if (!c6) {
          for (e8 = f11.child; e8; ) {
            if (e8 === a9) {
              c6 = true, a9 = f11, t8 = n5;
              break;
            }
            if (e8 === t8) {
              c6 = true, t8 = f11, a9 = n5;
              break;
            }
            e8 = e8.sibling;
          }
          if (!c6) throw Error(A6(189));
        }
      }
      if (a9.alternate !== t8) throw Error(A6(190));
    }
    if (a9.tag !== 3) throw Error(A6(188));
    return a9.stateNode.current === a9 ? l9 : u10;
  }
  function c0(l9) {
    var u10 = l9.tag;
    if (u10 === 5 || u10 === 26 || u10 === 27 || u10 === 6) return l9;
    for (l9 = l9.child; l9 !== null; ) {
      if (u10 = c0(l9), u10 !== null) return u10;
      l9 = l9.sibling;
    }
    return null;
  }
  var j10 = Object.assign, rv = Symbol.for("react.element"), Ct2 = Symbol.for("react.transitional.element"), $a = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), e0 = Symbol.for("react.strict_mode"), Jf = Symbol.for("react.profiler"), Iv = Symbol.for("react.provider"), i0 = Symbol.for("react.consumer"), $l = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Wf = Symbol.for("react.suspense"), wf = Symbol.for("react.suspense_list"), Kc = Symbol.for("react.memo"), vu = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var $f = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var Pv = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var Ze4 = Symbol.iterator;
  function ja(l9) {
    return l9 === null || typeof l9 != "object" ? null : (l9 = Ze4 && l9[Ze4] || l9["@@iterator"], typeof l9 == "function" ? l9 : null);
  }
  var lh = Symbol.for("react.client.reference");
  function Ff(l9) {
    if (l9 == null) return null;
    if (typeof l9 == "function") return l9.$$typeof === lh ? null : l9.displayName || l9.name || null;
    if (typeof l9 == "string") return l9;
    switch (l9) {
      case ta:
        return "Fragment";
      case Jf:
        return "Profiler";
      case e0:
        return "StrictMode";
      case Wf:
        return "Suspense";
      case wf:
        return "SuspenseList";
      case $f:
        return "Activity";
    }
    if (typeof l9 == "object") switch (l9.$$typeof) {
      case $a:
        return "Portal";
      case $l:
        return (l9.displayName || "Context") + ".Provider";
      case i0:
        return (l9._context.displayName || "Context") + ".Consumer";
      case jc:
        var u10 = l9.render;
        return l9 = l9.displayName, l9 || (l9 = u10.displayName || u10.name || "", l9 = l9 !== "" ? "ForwardRef(" + l9 + ")" : "ForwardRef"), l9;
      case Kc:
        return u10 = l9.displayName || null, u10 !== null ? u10 : Ff(l9.type) || "Memo";
      case vu:
        u10 = l9._payload, l9 = l9._init;
        try {
          return Ff(l9(u10));
        } catch {
        }
    }
    return null;
  }
  var Fa = Array.isArray, s8 = t0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, o7 = Fv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qu = {
    pending: false,
    data: null,
    method: null,
    action: null
  }, kf = [], na = -1;
  function Cl(l9) {
    return {
      current: l9
    };
  }
  function tl(l9) {
    0 > na || (l9.current = kf[na], kf[na] = null, na--);
  }
  function C10(l9, u10) {
    na++, kf[na] = l9.current, l9.current = u10;
  }
  var Vl = Cl(null), dt3 = Cl(null), Tu = Cl(null), Tn = Cl(null);
  function Mn(l9, u10) {
    switch (C10(Tu, u10), C10(dt3, l9), C10(Vl, null), u10.nodeType) {
      case 9:
      case 11:
        l9 = (l9 = u10.documentElement) && (l9 = l9.namespaceURI) ? Li(l9) : 0;
        break;
      default:
        if (l9 = u10.tagName, u10 = u10.namespaceURI) u10 = Li(u10), l9 = Uv(u10, l9);
        else switch (l9) {
          case "svg":
            l9 = 1;
            break;
          case "math":
            l9 = 2;
            break;
          default:
            l9 = 0;
        }
    }
    tl(Vl), C10(Vl, l9);
  }
  function Oa() {
    tl(Vl), tl(dt3), tl(Tu);
  }
  function rf(l9) {
    l9.memoizedState !== null && C10(Tn, l9);
    var u10 = Vl.current, a9 = Uv(u10, l9.type);
    u10 !== a9 && (C10(dt3, l9), C10(Vl, a9));
  }
  function En(l9) {
    dt3.current === l9 && (tl(Vl), tl(dt3)), Tn.current === l9 && (tl(Tn), Dt3._currentValue = Qu);
  }
  var If = Object.prototype.hasOwnProperty, Cc = I6.unstable_scheduleCallback, mf = I6.unstable_cancelCallback, uh = I6.unstable_shouldYield, ah = I6.unstable_requestPaint, jl = I6.unstable_now, th = I6.unstable_getCurrentPriorityLevel, v0 = I6.unstable_ImmediatePriority, h0 = I6.unstable_UserBlockingPriority, Dn = I6.unstable_NormalPriority, nh = I6.unstable_LowPriority, y0 = I6.unstable_IdlePriority, fh = I6.log, ch = I6.unstable_setDisableYieldValue, Nt2 = null, Tl = null;
  function gu(l9) {
    if (typeof fh == "function" && ch(l9), Tl && typeof Tl.setStrictMode == "function") try {
      Tl.setStrictMode(Nt2, l9);
    } catch {
    }
  }
  var Ml = Math.clz32 ? Math.clz32 : vh, eh = Math.log, ih = Math.LN2;
  function vh(l9) {
    return l9 >>>= 0, l9 === 0 ? 32 : 31 - (eh(l9) / ih | 0) | 0;
  }
  var Lt3 = 256, pt4 = 4194304;
  function _u(l9) {
    var u10 = l9 & 42;
    if (u10 !== 0) return u10;
    switch (l9 & -l9) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l9 & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l9 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l9;
    }
  }
  function Fn(l9, u10, a9) {
    var t8 = l9.pendingLanes;
    if (t8 === 0) return 0;
    var n5 = 0, f11 = l9.suspendedLanes, c6 = l9.pingedLanes;
    l9 = l9.warmLanes;
    var e8 = t8 & 134217727;
    return e8 !== 0 ? (t8 = e8 & ~f11, t8 !== 0 ? n5 = _u(t8) : (c6 &= e8, c6 !== 0 ? n5 = _u(c6) : a9 || (a9 = e8 & ~l9, a9 !== 0 && (n5 = _u(a9))))) : (e8 = t8 & ~f11, e8 !== 0 ? n5 = _u(e8) : c6 !== 0 ? n5 = _u(c6) : a9 || (a9 = t8 & ~l9, a9 !== 0 && (n5 = _u(a9)))), n5 === 0 ? 0 : u10 !== 0 && u10 !== n5 && (u10 & f11) === 0 && (f11 = n5 & -n5, a9 = u10 & -u10, f11 >= a9 || f11 === 32 && (a9 & 4194048) !== 0) ? u10 : n5;
  }
  function qt4(l9, u10) {
    return (l9.pendingLanes & ~(l9.suspendedLanes & ~l9.pingedLanes) & u10) === 0;
  }
  function hh(l9, u10) {
    switch (l9) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return u10 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return u10 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function d0() {
    var l9 = Lt3;
    return Lt3 <<= 1, (Lt3 & 4194048) === 0 && (Lt3 = 256), l9;
  }
  function S0() {
    var l9 = pt4;
    return pt4 <<= 1, (pt4 & 62914560) === 0 && (pt4 = 4194304), l9;
  }
  function gf(l9) {
    for (var u10 = [], a9 = 0; 31 > a9; a9++) u10.push(l9);
    return u10;
  }
  function Bt2(l9, u10) {
    l9.pendingLanes |= u10, u10 !== 268435456 && (l9.suspendedLanes = 0, l9.pingedLanes = 0, l9.warmLanes = 0);
  }
  function yh(l9, u10, a9, t8, n5, f11) {
    var c6 = l9.pendingLanes;
    l9.pendingLanes = a9, l9.suspendedLanes = 0, l9.pingedLanes = 0, l9.warmLanes = 0, l9.expiredLanes &= a9, l9.entangledLanes &= a9, l9.errorRecoveryDisabledLanes &= a9, l9.shellSuspendCounter = 0;
    var e8 = l9.entanglements, i9 = l9.expirationTimes, d8 = l9.hiddenUpdates;
    for (a9 = c6 & ~a9; 0 < a9; ) {
      var g9 = 31 - Ml(a9), z10 = 1 << g9;
      e8[g9] = 0, i9[g9] = -1;
      var S11 = d8[g9];
      if (S11 !== null) for (d8[g9] = null, g9 = 0; g9 < S11.length; g9++) {
        var m13 = S11[g9];
        m13 !== null && (m13.lane &= -536870913);
      }
      a9 &= ~z10;
    }
    t8 !== 0 && m0(l9, t8, 0), f11 !== 0 && n5 === 0 && l9.tag !== 0 && (l9.suspendedLanes |= f11 & ~(c6 & ~u10));
  }
  function m0(l9, u10, a9) {
    l9.pendingLanes |= u10, l9.suspendedLanes &= ~u10;
    var t8 = 31 - Ml(u10);
    l9.entangledLanes |= u10, l9.entanglements[t8] = l9.entanglements[t8] | 1073741824 | a9 & 4194090;
  }
  function g0(l9, u10) {
    var a9 = l9.entangledLanes |= u10;
    for (l9 = l9.entanglements; a9; ) {
      var t8 = 31 - Ml(a9), n5 = 1 << t8;
      n5 & u10 | l9[t8] & u10 && (l9[t8] |= u10), a9 &= ~n5;
    }
  }
  function Lc(l9) {
    switch (l9) {
      case 2:
        l9 = 1;
        break;
      case 8:
        l9 = 4;
        break;
      case 32:
        l9 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l9 = 128;
        break;
      case 268435456:
        l9 = 134217728;
        break;
      default:
        l9 = 0;
    }
    return l9;
  }
  function pc(l9) {
    return l9 &= -l9, 2 < l9 ? 8 < l9 ? (l9 & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function b0() {
    var l9 = o7.p;
    return l9 !== 0 ? l9 : (l9 = globalThis.event, l9 === void 0 ? 32 : Gv(l9.type));
  }
  function dh(l9, u10) {
    var a9 = o7.p;
    try {
      return o7.p = l9, u10();
    } finally {
      o7.p = a9;
    }
  }
  var Ru = Math.random().toString(36).slice(2), el = "__reactFiber$" + Ru, Sl = "__reactProps$" + Ru, Xa = "__reactContainer$" + Ru, Pf = "__reactEvents$" + Ru, Sh = "__reactListeners$" + Ru, mh = "__reactHandles$" + Ru, xe4 = "__reactResources$" + Ru, Rt3 = "__reactMarker$" + Ru;
  function Jc(l9) {
    delete l9[el], delete l9[Sl], delete l9[Pf], delete l9[Sh], delete l9[mh];
  }
  function fa(l9) {
    var u10 = l9[el];
    if (u10) return u10;
    for (var a9 = l9.parentNode; a9; ) {
      if (u10 = a9[Xa] || a9[el]) {
        if (a9 = u10.alternate, u10.child !== null || a9 !== null && a9.child !== null) for (l9 = Wi(l9); l9 !== null; ) {
          if (a9 = l9[el]) return a9;
          l9 = Wi(l9);
        }
        return u10;
      }
      l9 = a9, a9 = l9.parentNode;
    }
    return null;
  }
  function Ga(l9) {
    if (l9 = l9[el] || l9[Xa]) {
      var u10 = l9.tag;
      if (u10 === 5 || u10 === 6 || u10 === 13 || u10 === 26 || u10 === 27 || u10 === 3) return l9;
    }
    return null;
  }
  function ka(l9) {
    var u10 = l9.tag;
    if (u10 === 5 || u10 === 26 || u10 === 27 || u10 === 6) return l9.stateNode;
    throw Error(A6(33));
  }
  function ga(l9) {
    var u10 = l9[xe4];
    return u10 || (u10 = l9[xe4] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), u10;
  }
  function ul(l9) {
    l9[Rt3] = true;
  }
  var z0 = /* @__PURE__ */ new Set(), A0 = {};
  function wu(l9, u10) {
    sa(l9, u10), sa(l9 + "Capture", u10);
  }
  function sa(l9, u10) {
    for (A0[l9] = u10, l9 = 0; l9 < u10.length; l9++) z0.add(u10[l9]);
  }
  var gh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ve3 = {}, je5 = {};
  function bh(l9) {
    return If.call(je5, l9) ? true : If.call(Ve3, l9) ? false : gh.test(l9) ? je5[l9] = true : (Ve3[l9] = true, false);
  }
  function fn(l9, u10, a9) {
    if (bh(u10)) if (a9 === null) l9.removeAttribute(u10);
    else {
      switch (typeof a9) {
        case "undefined":
        case "function":
        case "symbol":
          l9.removeAttribute(u10);
          return;
        case "boolean":
          var t8 = u10.toLowerCase().slice(0, 5);
          if (t8 !== "data-" && t8 !== "aria-") {
            l9.removeAttribute(u10);
            return;
          }
      }
      l9.setAttribute(u10, "" + a9);
    }
  }
  function Jt2(l9, u10, a9) {
    if (a9 === null) l9.removeAttribute(u10);
    else {
      switch (typeof a9) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l9.removeAttribute(u10);
          return;
      }
      l9.setAttribute(u10, "" + a9);
    }
  }
  function pl(l9, u10, a9, t8) {
    if (t8 === null) l9.removeAttribute(a9);
    else {
      switch (typeof t8) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l9.removeAttribute(a9);
          return;
      }
      l9.setAttributeNS(u10, a9, "" + t8);
    }
  }
  var bf, Ke6;
  function la(l9) {
    if (bf === void 0) try {
      throw Error();
    } catch (a9) {
      var u10 = a9.stack.trim().match(/\n( *(at )?)/);
      bf = u10 && u10[1] || "", Ke6 = -1 < a9.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a9.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + bf + l9 + Ke6;
  }
  var zf = false;
  function Af(l9, u10) {
    if (!l9 || zf) return "";
    zf = true;
    var a9 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t8 = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u10) {
              var z10 = function() {
                throw Error();
              };
              if (Object.defineProperty(z10.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z10, []);
                } catch (m13) {
                  var S11 = m13;
                }
                Reflect.construct(l9, [], z10);
              } else {
                try {
                  z10.call();
                } catch (m13) {
                  S11 = m13;
                }
                l9.call(z10.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m13) {
                S11 = m13;
              }
              (z10 = l9()) && typeof z10.catch == "function" && z10.catch(function() {
              });
            }
          } catch (m13) {
            if (m13 && S11 && typeof m13.stack == "string") return [
              m13.stack,
              S11.stack
            ];
          }
          return [
            null,
            null
          ];
        }
      };
      t8.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n5 = Object.getOwnPropertyDescriptor(t8.DetermineComponentFrameRoot, "name");
      n5 && n5.configurable && Object.defineProperty(t8.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var f11 = t8.DetermineComponentFrameRoot(), c6 = f11[0], e8 = f11[1];
      if (c6 && e8) {
        var i9 = c6.split(`
`), d8 = e8.split(`
`);
        for (n5 = t8 = 0; t8 < i9.length && !i9[t8].includes("DetermineComponentFrameRoot"); ) t8++;
        for (; n5 < d8.length && !d8[n5].includes("DetermineComponentFrameRoot"); ) n5++;
        if (t8 === i9.length || n5 === d8.length) for (t8 = i9.length - 1, n5 = d8.length - 1; 1 <= t8 && 0 <= n5 && i9[t8] !== d8[n5]; ) n5--;
        for (; 1 <= t8 && 0 <= n5; t8--, n5--) if (i9[t8] !== d8[n5]) {
          if (t8 !== 1 || n5 !== 1) do
            if (t8--, n5--, 0 > n5 || i9[t8] !== d8[n5]) {
              var g9 = `
` + i9[t8].replace(" at new ", " at ");
              return l9.displayName && g9.includes("<anonymous>") && (g9 = g9.replace("<anonymous>", l9.displayName)), g9;
            }
          while (1 <= t8 && 0 <= n5);
          break;
        }
      }
    } finally {
      zf = false, Error.prepareStackTrace = a9;
    }
    return (a9 = l9 ? l9.displayName || l9.name : "") ? la(a9) : "";
  }
  function zh(l9) {
    switch (l9.tag) {
      case 26:
      case 27:
      case 5:
        return la(l9.type);
      case 16:
        return la("Lazy");
      case 13:
        return la("Suspense");
      case 19:
        return la("SuspenseList");
      case 0:
      case 15:
        return Af(l9.type, false);
      case 11:
        return Af(l9.type.render, false);
      case 1:
        return Af(l9.type, true);
      case 31:
        return la("Activity");
      default:
        return "";
    }
  }
  function Ce5(l9) {
    try {
      var u10 = "";
      do
        u10 += zh(l9), l9 = l9.return;
      while (l9);
      return u10;
    } catch (a9) {
      return `
Error generating stack: ` + a9.message + `
` + a9.stack;
    }
  }
  function Ul(l9) {
    switch (typeof l9) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l9;
      case "object":
        return l9;
      default:
        return "";
    }
  }
  function T0(l9) {
    var u10 = l9.type;
    return (l9 = l9.nodeName) && l9.toLowerCase() === "input" && (u10 === "checkbox" || u10 === "radio");
  }
  function Ah(l9) {
    var u10 = T0(l9) ? "checked" : "value", a9 = Object.getOwnPropertyDescriptor(l9.constructor.prototype, u10), t8 = "" + l9[u10];
    if (!l9.hasOwnProperty(u10) && typeof a9 < "u" && typeof a9.get == "function" && typeof a9.set == "function") {
      var n5 = a9.get, f11 = a9.set;
      return Object.defineProperty(l9, u10, {
        configurable: true,
        get: function() {
          return n5.call(this);
        },
        set: function(c6) {
          t8 = "" + c6, f11.call(this, c6);
        }
      }), Object.defineProperty(l9, u10, {
        enumerable: a9.enumerable
      }), {
        getValue: function() {
          return t8;
        },
        setValue: function(c6) {
          t8 = "" + c6;
        },
        stopTracking: function() {
          l9._valueTracker = null, delete l9[u10];
        }
      };
    }
  }
  function On(l9) {
    l9._valueTracker || (l9._valueTracker = Ah(l9));
  }
  function M0(l9) {
    if (!l9) return false;
    var u10 = l9._valueTracker;
    if (!u10) return true;
    var a9 = u10.getValue(), t8 = "";
    return l9 && (t8 = T0(l9) ? l9.checked ? "true" : "false" : l9.value), l9 = t8, l9 !== a9 ? (u10.setValue(l9), true) : false;
  }
  function sn2(l9) {
    if (l9 = l9 || (typeof document < "u" ? document : void 0), typeof l9 > "u") return null;
    try {
      return l9.activeElement || l9.body;
    } catch {
      return l9.body;
    }
  }
  var Th = /[\n"\\]/g;
  function ql(l9) {
    return l9.replace(Th, function(u10) {
      return "\\" + u10.charCodeAt(0).toString(16) + " ";
    });
  }
  function lc(l9, u10, a9, t8, n5, f11, c6, e8) {
    l9.name = "", c6 != null && typeof c6 != "function" && typeof c6 != "symbol" && typeof c6 != "boolean" ? l9.type = c6 : l9.removeAttribute("type"), u10 != null ? c6 === "number" ? (u10 === 0 && l9.value === "" || l9.value != u10) && (l9.value = "" + Ul(u10)) : l9.value !== "" + Ul(u10) && (l9.value = "" + Ul(u10)) : c6 !== "submit" && c6 !== "reset" || l9.removeAttribute("value"), u10 != null ? uc(l9, c6, Ul(u10)) : a9 != null ? uc(l9, c6, Ul(a9)) : t8 != null && l9.removeAttribute("value"), n5 == null && f11 != null && (l9.defaultChecked = !!f11), n5 != null && (l9.checked = n5 && typeof n5 != "function" && typeof n5 != "symbol"), e8 != null && typeof e8 != "function" && typeof e8 != "symbol" && typeof e8 != "boolean" ? l9.name = "" + Ul(e8) : l9.removeAttribute("name");
  }
  function E0(l9, u10, a9, t8, n5, f11, c6, e8) {
    if (f11 != null && typeof f11 != "function" && typeof f11 != "symbol" && typeof f11 != "boolean" && (l9.type = f11), u10 != null || a9 != null) {
      if (!(f11 !== "submit" && f11 !== "reset" || u10 != null)) return;
      a9 = a9 != null ? "" + Ul(a9) : "", u10 = u10 != null ? "" + Ul(u10) : a9, e8 || u10 === l9.value || (l9.value = u10), l9.defaultValue = u10;
    }
    t8 = t8 ?? n5, t8 = typeof t8 != "function" && typeof t8 != "symbol" && !!t8, l9.checked = e8 ? l9.checked : !!t8, l9.defaultChecked = !!t8, c6 != null && typeof c6 != "function" && typeof c6 != "symbol" && typeof c6 != "boolean" && (l9.name = c6);
  }
  function uc(l9, u10, a9) {
    u10 === "number" && sn2(l9.ownerDocument) === l9 || l9.defaultValue === "" + a9 || (l9.defaultValue = "" + a9);
  }
  function ba(l9, u10, a9, t8) {
    if (l9 = l9.options, u10) {
      u10 = {};
      for (var n5 = 0; n5 < a9.length; n5++) u10["$" + a9[n5]] = true;
      for (a9 = 0; a9 < l9.length; a9++) n5 = u10.hasOwnProperty("$" + l9[a9].value), l9[a9].selected !== n5 && (l9[a9].selected = n5), n5 && t8 && (l9[a9].defaultSelected = true);
    } else {
      for (a9 = "" + Ul(a9), u10 = null, n5 = 0; n5 < l9.length; n5++) {
        if (l9[n5].value === a9) {
          l9[n5].selected = true, t8 && (l9[n5].defaultSelected = true);
          return;
        }
        u10 !== null || l9[n5].disabled || (u10 = l9[n5]);
      }
      u10 !== null && (u10.selected = true);
    }
  }
  function D0(l9, u10, a9) {
    if (u10 != null && (u10 = "" + Ul(u10), u10 !== l9.value && (l9.value = u10), a9 == null)) {
      l9.defaultValue !== u10 && (l9.defaultValue = u10);
      return;
    }
    l9.defaultValue = a9 != null ? "" + Ul(a9) : "";
  }
  function O0(l9, u10, a9, t8) {
    if (u10 == null) {
      if (t8 != null) {
        if (a9 != null) throw Error(A6(92));
        if (Fa(t8)) {
          if (1 < t8.length) throw Error(A6(93));
          t8 = t8[0];
        }
        a9 = t8;
      }
      a9 == null && (a9 = ""), u10 = a9;
    }
    a9 = Ul(u10), l9.defaultValue = a9, t8 = l9.textContent, t8 === a9 && t8 !== "" && t8 !== null && (l9.value = t8);
  }
  function Ua(l9, u10) {
    if (u10) {
      var a9 = l9.firstChild;
      if (a9 && a9 === l9.lastChild && a9.nodeType === 3) {
        a9.nodeValue = u10;
        return;
      }
    }
    l9.textContent = u10;
  }
  var Mh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Le6(l9, u10, a9) {
    var t8 = u10.indexOf("--") === 0;
    a9 == null || typeof a9 == "boolean" || a9 === "" ? t8 ? l9.setProperty(u10, "") : u10 === "float" ? l9.cssFloat = "" : l9[u10] = "" : t8 ? l9.setProperty(u10, a9) : typeof a9 != "number" || a9 === 0 || Mh.has(u10) ? u10 === "float" ? l9.cssFloat = a9 : l9[u10] = ("" + a9).trim() : l9[u10] = a9 + "px";
  }
  function s0(l9, u10, a9) {
    if (u10 != null && typeof u10 != "object") throw Error(A6(62));
    if (l9 = l9.style, a9 != null) {
      for (var t8 in a9) !a9.hasOwnProperty(t8) || u10 != null && u10.hasOwnProperty(t8) || (t8.indexOf("--") === 0 ? l9.setProperty(t8, "") : t8 === "float" ? l9.cssFloat = "" : l9[t8] = "");
      for (var n5 in u10) t8 = u10[n5], u10.hasOwnProperty(n5) && a9[n5] !== t8 && Le6(l9, n5, t8);
    } else for (var f11 in u10) u10.hasOwnProperty(f11) && Le6(l9, f11, u10[f11]);
  }
  function Wc(l9) {
    if (l9.indexOf("-") === -1) return false;
    switch (l9) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Eh = /* @__PURE__ */ new Map([
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ],
    [
      "crossOrigin",
      "crossorigin"
    ],
    [
      "accentHeight",
      "accent-height"
    ],
    [
      "alignmentBaseline",
      "alignment-baseline"
    ],
    [
      "arabicForm",
      "arabic-form"
    ],
    [
      "baselineShift",
      "baseline-shift"
    ],
    [
      "capHeight",
      "cap-height"
    ],
    [
      "clipPath",
      "clip-path"
    ],
    [
      "clipRule",
      "clip-rule"
    ],
    [
      "colorInterpolation",
      "color-interpolation"
    ],
    [
      "colorInterpolationFilters",
      "color-interpolation-filters"
    ],
    [
      "colorProfile",
      "color-profile"
    ],
    [
      "colorRendering",
      "color-rendering"
    ],
    [
      "dominantBaseline",
      "dominant-baseline"
    ],
    [
      "enableBackground",
      "enable-background"
    ],
    [
      "fillOpacity",
      "fill-opacity"
    ],
    [
      "fillRule",
      "fill-rule"
    ],
    [
      "floodColor",
      "flood-color"
    ],
    [
      "floodOpacity",
      "flood-opacity"
    ],
    [
      "fontFamily",
      "font-family"
    ],
    [
      "fontSize",
      "font-size"
    ],
    [
      "fontSizeAdjust",
      "font-size-adjust"
    ],
    [
      "fontStretch",
      "font-stretch"
    ],
    [
      "fontStyle",
      "font-style"
    ],
    [
      "fontVariant",
      "font-variant"
    ],
    [
      "fontWeight",
      "font-weight"
    ],
    [
      "glyphName",
      "glyph-name"
    ],
    [
      "glyphOrientationHorizontal",
      "glyph-orientation-horizontal"
    ],
    [
      "glyphOrientationVertical",
      "glyph-orientation-vertical"
    ],
    [
      "horizAdvX",
      "horiz-adv-x"
    ],
    [
      "horizOriginX",
      "horiz-origin-x"
    ],
    [
      "imageRendering",
      "image-rendering"
    ],
    [
      "letterSpacing",
      "letter-spacing"
    ],
    [
      "lightingColor",
      "lighting-color"
    ],
    [
      "markerEnd",
      "marker-end"
    ],
    [
      "markerMid",
      "marker-mid"
    ],
    [
      "markerStart",
      "marker-start"
    ],
    [
      "overlinePosition",
      "overline-position"
    ],
    [
      "overlineThickness",
      "overline-thickness"
    ],
    [
      "paintOrder",
      "paint-order"
    ],
    [
      "panose-1",
      "panose-1"
    ],
    [
      "pointerEvents",
      "pointer-events"
    ],
    [
      "renderingIntent",
      "rendering-intent"
    ],
    [
      "shapeRendering",
      "shape-rendering"
    ],
    [
      "stopColor",
      "stop-color"
    ],
    [
      "stopOpacity",
      "stop-opacity"
    ],
    [
      "strikethroughPosition",
      "strikethrough-position"
    ],
    [
      "strikethroughThickness",
      "strikethrough-thickness"
    ],
    [
      "strokeDasharray",
      "stroke-dasharray"
    ],
    [
      "strokeDashoffset",
      "stroke-dashoffset"
    ],
    [
      "strokeLinecap",
      "stroke-linecap"
    ],
    [
      "strokeLinejoin",
      "stroke-linejoin"
    ],
    [
      "strokeMiterlimit",
      "stroke-miterlimit"
    ],
    [
      "strokeOpacity",
      "stroke-opacity"
    ],
    [
      "strokeWidth",
      "stroke-width"
    ],
    [
      "textAnchor",
      "text-anchor"
    ],
    [
      "textDecoration",
      "text-decoration"
    ],
    [
      "textRendering",
      "text-rendering"
    ],
    [
      "transformOrigin",
      "transform-origin"
    ],
    [
      "underlinePosition",
      "underline-position"
    ],
    [
      "underlineThickness",
      "underline-thickness"
    ],
    [
      "unicodeBidi",
      "unicode-bidi"
    ],
    [
      "unicodeRange",
      "unicode-range"
    ],
    [
      "unitsPerEm",
      "units-per-em"
    ],
    [
      "vAlphabetic",
      "v-alphabetic"
    ],
    [
      "vHanging",
      "v-hanging"
    ],
    [
      "vIdeographic",
      "v-ideographic"
    ],
    [
      "vMathematical",
      "v-mathematical"
    ],
    [
      "vectorEffect",
      "vector-effect"
    ],
    [
      "vertAdvY",
      "vert-adv-y"
    ],
    [
      "vertOriginX",
      "vert-origin-x"
    ],
    [
      "vertOriginY",
      "vert-origin-y"
    ],
    [
      "wordSpacing",
      "word-spacing"
    ],
    [
      "writingMode",
      "writing-mode"
    ],
    [
      "xmlnsXlink",
      "xmlns:xlink"
    ],
    [
      "xHeight",
      "x-height"
    ]
  ]), Dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cn2(l9) {
    return Dh.test("" + l9) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l9;
  }
  var ac = null;
  function wc(l9) {
    return l9 = l9.target || l9.srcElement || globalThis, l9.correspondingUseElement && (l9 = l9.correspondingUseElement), l9.nodeType === 3 ? l9.parentNode : l9;
  }
  var ca = null, za = null;
  function pe5(l9) {
    var u10 = Ga(l9);
    if (u10 && (l9 = u10.stateNode)) {
      var a9 = l9[Sl] || null;
      l: switch (l9 = u10.stateNode, u10.type) {
        case "input":
          if (lc(l9, a9.value, a9.defaultValue, a9.defaultValue, a9.checked, a9.defaultChecked, a9.type, a9.name), u10 = a9.name, a9.type === "radio" && u10 != null) {
            for (a9 = l9; a9.parentNode; ) a9 = a9.parentNode;
            for (a9 = a9.querySelectorAll('input[name="' + ql("" + u10) + '"][type="radio"]'), u10 = 0; u10 < a9.length; u10++) {
              var t8 = a9[u10];
              if (t8 !== l9 && t8.form === l9.form) {
                var n5 = t8[Sl] || null;
                if (!n5) throw Error(A6(90));
                lc(t8, n5.value, n5.defaultValue, n5.defaultValue, n5.checked, n5.defaultChecked, n5.type, n5.name);
              }
            }
            for (u10 = 0; u10 < a9.length; u10++) t8 = a9[u10], t8.form === l9.form && M0(t8);
          }
          break l;
        case "textarea":
          D0(l9, a9.value, a9.defaultValue);
          break l;
        case "select":
          u10 = a9.value, u10 != null && ba(l9, !!a9.multiple, u10, false);
      }
    }
  }
  var Tf = false;
  function U0(l9, u10, a9) {
    if (Tf) return l9(u10, a9);
    Tf = true;
    try {
      var t8 = l9(u10);
      return t8;
    } finally {
      if (Tf = false, (ca !== null || za !== null) && (ff(), ca && (u10 = ca, l9 = za, za = ca = null, pe5(u10), l9))) for (u10 = 0; u10 < l9.length; u10++) pe5(l9[u10]);
    }
  }
  function St2(l9, u10) {
    var a9 = l9.stateNode;
    if (a9 === null) return null;
    var t8 = a9[Sl] || null;
    if (t8 === null) return null;
    a9 = t8[u10];
    l: switch (u10) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (t8 = !t8.disabled) || (l9 = l9.type, t8 = !(l9 === "button" || l9 === "input" || l9 === "select" || l9 === "textarea")), l9 = !t8;
        break l;
      default:
        l9 = false;
    }
    if (l9) return null;
    if (a9 && typeof a9 != "function") throw Error(A6(231, u10, typeof a9));
    return a9;
  }
  var uu = !(typeof globalThis > "u" || typeof globalThis.document > "u" || typeof globalThis.document.createElement > "u"), tc = false;
  if (uu) try {
    ru = {}, Object.defineProperty(ru, "passive", {
      get: function() {
        tc = true;
      }
    }), globalThis.addEventListener("test", ru, ru), globalThis.removeEventListener("test", ru, ru);
  } catch {
    tc = false;
  }
  var ru, bu = null, $c = null, en2 = null;
  function H0() {
    if (en2) return en2;
    var l9, u10 = $c, a9 = u10.length, t8, n5 = "value" in bu ? bu.value : bu.textContent, f11 = n5.length;
    for (l9 = 0; l9 < a9 && u10[l9] === n5[l9]; l9++) ;
    var c6 = a9 - l9;
    for (t8 = 1; t8 <= c6 && u10[a9 - t8] === n5[f11 - t8]; t8++) ;
    return en2 = n5.slice(l9, 1 < t8 ? 1 - t8 : void 0);
  }
  function vn(l9) {
    var u10 = l9.keyCode;
    return "charCode" in l9 ? (l9 = l9.charCode, l9 === 0 && u10 === 13 && (l9 = 13)) : l9 = u10, l9 === 10 && (l9 = 13), 32 <= l9 || l9 === 13 ? l9 : 0;
  }
  function Wt2() {
    return true;
  }
  function Je3() {
    return false;
  }
  function ml(l9) {
    function u10(a9, t8, n5, f11, c6) {
      this._reactName = a9, this._targetInst = n5, this.type = t8, this.nativeEvent = f11, this.target = c6, this.currentTarget = null;
      for (var e8 in l9) l9.hasOwnProperty(e8) && (a9 = l9[e8], this[e8] = a9 ? a9(f11) : f11[e8]);
      return this.isDefaultPrevented = (f11.defaultPrevented != null ? f11.defaultPrevented : f11.returnValue === false) ? Wt2 : Je3, this.isPropagationStopped = Je3, this;
    }
    return j10(u10.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var a9 = this.nativeEvent;
        a9 && (a9.preventDefault ? a9.preventDefault() : typeof a9.returnValue != "unknown" && (a9.returnValue = false), this.isDefaultPrevented = Wt2);
      },
      stopPropagation: function() {
        var a9 = this.nativeEvent;
        a9 && (a9.stopPropagation ? a9.stopPropagation() : typeof a9.cancelBubble != "unknown" && (a9.cancelBubble = true), this.isPropagationStopped = Wt2);
      },
      persist: function() {
      },
      isPersistent: Wt2
    }), u10;
  }
  var $u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l9) {
      return l9.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = ml($u), Yt2 = j10({}, $u, {
    view: 0,
    detail: 0
  }), Oh = ml(Yt2), Mf, Ef, Ka, rn2 = j10({}, Yt2, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l9) {
      return l9.relatedTarget === void 0 ? l9.fromElement === l9.srcElement ? l9.toElement : l9.fromElement : l9.relatedTarget;
    },
    movementX: function(l9) {
      return "movementX" in l9 ? l9.movementX : (l9 !== Ka && (Ka && l9.type === "mousemove" ? (Mf = l9.screenX - Ka.screenX, Ef = l9.screenY - Ka.screenY) : Ef = Mf = 0, Ka = l9), Mf);
    },
    movementY: function(l9) {
      return "movementY" in l9 ? l9.movementY : Ef;
    }
  }), We6 = ml(rn2), sh = j10({}, rn2, {
    dataTransfer: 0
  }), Uh = ml(sh), Hh = j10({}, Yt2, {
    relatedTarget: 0
  }), Df = ml(Hh), Nh = j10({}, $u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qh = ml(Nh), Bh = j10({}, $u, {
    clipboardData: function(l9) {
      return "clipboardData" in l9 ? l9.clipboardData : globalThis.clipboardData;
    }
  }), Rh = ml(Bh), Yh = j10({}, $u, {
    data: 0
  }), we6 = ml(Yh), oh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, _h = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gh(l9) {
    var u10 = this.nativeEvent;
    return u10.getModifierState ? u10.getModifierState(l9) : (l9 = Xh[l9]) ? !!u10[l9] : false;
  }
  function Fc() {
    return Gh;
  }
  var Qh = j10({}, Yt2, {
    key: function(l9) {
      if (l9.key) {
        var u10 = oh[l9.key] || l9.key;
        if (u10 !== "Unidentified") return u10;
      }
      return l9.type === "keypress" ? (l9 = vn(l9), l9 === 13 ? "Enter" : String.fromCharCode(l9)) : l9.type === "keydown" || l9.type === "keyup" ? _h[l9.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fc,
    charCode: function(l9) {
      return l9.type === "keypress" ? vn(l9) : 0;
    },
    keyCode: function(l9) {
      return l9.type === "keydown" || l9.type === "keyup" ? l9.keyCode : 0;
    },
    which: function(l9) {
      return l9.type === "keypress" ? vn(l9) : l9.type === "keydown" || l9.type === "keyup" ? l9.keyCode : 0;
    }
  }), Zh = ml(Qh), xh = j10({}, rn2, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $e6 = ml(xh), Vh = j10({}, Yt2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fc
  }), jh = ml(Vh), Kh = j10({}, $u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ch = ml(Kh), Lh = j10({}, rn2, {
    deltaX: function(l9) {
      return "deltaX" in l9 ? l9.deltaX : "wheelDeltaX" in l9 ? -l9.wheelDeltaX : 0;
    },
    deltaY: function(l9) {
      return "deltaY" in l9 ? l9.deltaY : "wheelDeltaY" in l9 ? -l9.wheelDeltaY : "wheelDelta" in l9 ? -l9.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ph = ml(Lh), Jh = j10({}, $u, {
    newState: 0,
    oldState: 0
  }), Wh = ml(Jh), wh = [
    9,
    13,
    27,
    32
  ], kc = uu && "CompositionEvent" in globalThis, Ia = null;
  uu && "documentMode" in document && (Ia = document.documentMode);
  var $h = uu && "TextEvent" in globalThis && !Ia, N0 = uu && (!kc || Ia && 8 < Ia && 11 >= Ia), Fe4 = " ", ke5 = false;
  function q0(l9, u10) {
    switch (l9) {
      case "keyup":
        return wh.indexOf(u10.keyCode) !== -1;
      case "keydown":
        return u10.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function B0(l9) {
    return l9 = l9.detail, typeof l9 == "object" && "data" in l9 ? l9.data : null;
  }
  var ea = false;
  function Fh(l9, u10) {
    switch (l9) {
      case "compositionend":
        return B0(u10);
      case "keypress":
        return u10.which !== 32 ? null : (ke5 = true, Fe4);
      case "textInput":
        return l9 = u10.data, l9 === Fe4 && ke5 ? null : l9;
      default:
        return null;
    }
  }
  function kh(l9, u10) {
    if (ea) return l9 === "compositionend" || !kc && q0(l9, u10) ? (l9 = H0(), en2 = $c = bu = null, ea = false, l9) : null;
    switch (l9) {
      case "paste":
        return null;
      case "keypress":
        if (!(u10.ctrlKey || u10.altKey || u10.metaKey) || u10.ctrlKey && u10.altKey) {
          if (u10.char && 1 < u10.char.length) return u10.char;
          if (u10.which) return String.fromCharCode(u10.which);
        }
        return null;
      case "compositionend":
        return N0 && u10.locale !== "ko" ? null : u10.data;
      default:
        return null;
    }
  }
  var rh = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function re3(l9) {
    var u10 = l9 && l9.nodeName && l9.nodeName.toLowerCase();
    return u10 === "input" ? !!rh[l9.type] : u10 === "textarea";
  }
  function R0(l9, u10, a9, t8) {
    ca ? za ? za.push(t8) : za = [
      t8
    ] : ca = t8, u10 = Cn(u10, "onChange"), 0 < u10.length && (a9 = new kn("onChange", "change", null, a9, t8), l9.push({
      event: a9,
      listeners: u10
    }));
  }
  var Pa = null, mt4 = null;
  function Ih(l9) {
    Dv(l9, 0);
  }
  function In(l9) {
    var u10 = ka(l9);
    if (M0(u10)) return l9;
  }
  function Ie5(l9, u10) {
    if (l9 === "change") return u10;
  }
  var Y0 = false;
  uu && (uu ? ($t3 = "oninput" in document, $t3 || (Of = document.createElement("div"), Of.setAttribute("oninput", "return;"), $t3 = typeof Of.oninput == "function"), wt = $t3) : wt = false, Y0 = wt && (!document.documentMode || 9 < document.documentMode));
  var wt, $t3, Of;
  function Pe7() {
    Pa && (Pa.detachEvent("onpropertychange", o0), mt4 = Pa = null);
  }
  function o0(l9) {
    if (l9.propertyName === "value" && In(mt4)) {
      var u10 = [];
      R0(u10, mt4, l9, wc(l9)), U0(Ih, u10);
    }
  }
  function Ph(l9, u10, a9) {
    l9 === "focusin" ? (Pe7(), Pa = u10, mt4 = a9, Pa.attachEvent("onpropertychange", o0)) : l9 === "focusout" && Pe7();
  }
  function ly(l9) {
    if (l9 === "selectionchange" || l9 === "keyup" || l9 === "keydown") return In(mt4);
  }
  function uy(l9, u10) {
    if (l9 === "click") return In(u10);
  }
  function ay(l9, u10) {
    if (l9 === "input" || l9 === "change") return In(u10);
  }
  function ty(l9, u10) {
    return l9 === u10 && (l9 !== 0 || 1 / l9 === 1 / u10) || l9 !== l9 && u10 !== u10;
  }
  var Ol = typeof Object.is == "function" ? Object.is : ty;
  function gt2(l9, u10) {
    if (Ol(l9, u10)) return true;
    if (typeof l9 != "object" || l9 === null || typeof u10 != "object" || u10 === null) return false;
    var a9 = Object.keys(l9), t8 = Object.keys(u10);
    if (a9.length !== t8.length) return false;
    for (t8 = 0; t8 < a9.length; t8++) {
      var n5 = a9[t8];
      if (!If.call(u10, n5) || !Ol(l9[n5], u10[n5])) return false;
    }
    return true;
  }
  function li(l9) {
    for (; l9 && l9.firstChild; ) l9 = l9.firstChild;
    return l9;
  }
  function ui(l9, u10) {
    var a9 = li(l9);
    l9 = 0;
    for (var t8; a9; ) {
      if (a9.nodeType === 3) {
        if (t8 = l9 + a9.textContent.length, l9 <= u10 && t8 >= u10) return {
          node: a9,
          offset: u10 - l9
        };
        l9 = t8;
      }
      l: {
        for (; a9; ) {
          if (a9.nextSibling) {
            a9 = a9.nextSibling;
            break l;
          }
          a9 = a9.parentNode;
        }
        a9 = void 0;
      }
      a9 = li(a9);
    }
  }
  function _0(l9, u10) {
    return l9 && u10 ? l9 === u10 ? true : l9 && l9.nodeType === 3 ? false : u10 && u10.nodeType === 3 ? _0(l9, u10.parentNode) : "contains" in l9 ? l9.contains(u10) : l9.compareDocumentPosition ? !!(l9.compareDocumentPosition(u10) & 16) : false : false;
  }
  function X0(l9) {
    l9 = l9 != null && l9.ownerDocument != null && l9.ownerDocument.defaultView != null ? l9.ownerDocument.defaultView : globalThis;
    for (var u10 = sn2(l9.document); u10 instanceof l9.HTMLIFrameElement; ) {
      try {
        var a9 = typeof u10.contentWindow.location.href == "string";
      } catch {
        a9 = false;
      }
      if (a9) l9 = u10.contentWindow;
      else break;
      u10 = sn2(l9.document);
    }
    return u10;
  }
  function rc(l9) {
    var u10 = l9 && l9.nodeName && l9.nodeName.toLowerCase();
    return u10 && (u10 === "input" && (l9.type === "text" || l9.type === "search" || l9.type === "tel" || l9.type === "url" || l9.type === "password") || u10 === "textarea" || l9.contentEditable === "true");
  }
  var ny = uu && "documentMode" in document && 11 >= document.documentMode, ia = null, nc = null, lt2 = null, fc = false;
  function ai(l9, u10, a9) {
    var t8 = a9.window === a9 ? a9.document : a9.nodeType === 9 ? a9 : a9.ownerDocument;
    fc || ia == null || ia !== sn2(t8) || (t8 = ia, "selectionStart" in t8 && rc(t8) ? t8 = {
      start: t8.selectionStart,
      end: t8.selectionEnd
    } : (t8 = (t8.ownerDocument && t8.ownerDocument.defaultView || globalThis).getSelection(), t8 = {
      anchorNode: t8.anchorNode,
      anchorOffset: t8.anchorOffset,
      focusNode: t8.focusNode,
      focusOffset: t8.focusOffset
    }), lt2 && gt2(lt2, t8) || (lt2 = t8, t8 = Cn(nc, "onSelect"), 0 < t8.length && (u10 = new kn("onSelect", "select", null, u10, a9), l9.push({
      event: u10,
      listeners: t8
    }), u10.target = ia)));
  }
  function ou(l9, u10) {
    var a9 = {};
    return a9[l9.toLowerCase()] = u10.toLowerCase(), a9["Webkit" + l9] = "webkit" + u10, a9["Moz" + l9] = "moz" + u10, a9;
  }
  var va = {
    animationend: ou("Animation", "AnimationEnd"),
    animationiteration: ou("Animation", "AnimationIteration"),
    animationstart: ou("Animation", "AnimationStart"),
    transitionrun: ou("Transition", "TransitionRun"),
    transitionstart: ou("Transition", "TransitionStart"),
    transitioncancel: ou("Transition", "TransitionCancel"),
    transitionend: ou("Transition", "TransitionEnd")
  }, sf = {}, G0 = {};
  uu && (G0 = document.createElement("div").style, "AnimationEvent" in globalThis || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in globalThis || delete va.transitionend.transition);
  function Fu(l9) {
    if (sf[l9]) return sf[l9];
    if (!va[l9]) return l9;
    var u10 = va[l9], a9;
    for (a9 in u10) if (u10.hasOwnProperty(a9) && a9 in G0) return sf[l9] = u10[a9];
    return l9;
  }
  var Q0 = Fu("animationend"), Z0 = Fu("animationiteration"), x0 = Fu("animationstart"), fy = Fu("transitionrun"), cy = Fu("transitionstart"), ey = Fu("transitioncancel"), V0 = Fu("transitionend"), j0 = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cc.push("scrollEnd");
  function Gl(l9, u10) {
    j0.set(l9, u10), wu(u10, [
      l9
    ]);
  }
  var ti = /* @__PURE__ */ new WeakMap();
  function Bl(l9, u10) {
    if (typeof l9 == "object" && l9 !== null) {
      var a9 = ti.get(l9);
      return a9 !== void 0 ? a9 : (u10 = {
        value: l9,
        source: u10,
        stack: Ce5(u10)
      }, ti.set(l9, u10), u10);
    }
    return {
      value: l9,
      source: u10,
      stack: Ce5(u10)
    };
  }
  var sl = [], ha = 0, Ic = 0;
  function Pn() {
    for (var l9 = ha, u10 = Ic = ha = 0; u10 < l9; ) {
      var a9 = sl[u10];
      sl[u10++] = null;
      var t8 = sl[u10];
      sl[u10++] = null;
      var n5 = sl[u10];
      sl[u10++] = null;
      var f11 = sl[u10];
      if (sl[u10++] = null, t8 !== null && n5 !== null) {
        var c6 = t8.pending;
        c6 === null ? n5.next = n5 : (n5.next = c6.next, c6.next = n5), t8.pending = n5;
      }
      f11 !== 0 && K0(a9, n5, f11);
    }
  }
  function lf(l9, u10, a9, t8) {
    sl[ha++] = l9, sl[ha++] = u10, sl[ha++] = a9, sl[ha++] = t8, Ic |= t8, l9.lanes |= t8, l9 = l9.alternate, l9 !== null && (l9.lanes |= t8);
  }
  function Pc(l9, u10, a9, t8) {
    return lf(l9, u10, a9, t8), Un(l9);
  }
  function Qa(l9, u10) {
    return lf(l9, null, null, u10), Un(l9);
  }
  function K0(l9, u10, a9) {
    l9.lanes |= a9;
    var t8 = l9.alternate;
    t8 !== null && (t8.lanes |= a9);
    for (var n5 = false, f11 = l9.return; f11 !== null; ) f11.childLanes |= a9, t8 = f11.alternate, t8 !== null && (t8.childLanes |= a9), f11.tag === 22 && (l9 = f11.stateNode, l9 === null || l9._visibility & 1 || (n5 = true)), l9 = f11, f11 = f11.return;
    return l9.tag === 3 ? (f11 = l9.stateNode, n5 && u10 !== null && (n5 = 31 - Ml(a9), l9 = f11.hiddenUpdates, t8 = l9[n5], t8 === null ? l9[n5] = [
      u10
    ] : t8.push(u10), u10.lane = a9 | 536870912), f11) : null;
  }
  function Un(l9) {
    if (50 < ht2) throw ht2 = 0, Nc = null, Error(A6(185));
    for (var u10 = l9.return; u10 !== null; ) l9 = u10, u10 = l9.return;
    return l9.tag === 3 ? l9.stateNode : null;
  }
  var ya = {};
  function iy(l9, u10, a9, t8) {
    this.tag = l9, this.key = a9, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u10, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t8, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Al(l9, u10, a9, t8) {
    return new iy(l9, u10, a9, t8);
  }
  function le6(l9) {
    return l9 = l9.prototype, !(!l9 || !l9.isReactComponent);
  }
  function Pl(l9, u10) {
    var a9 = l9.alternate;
    return a9 === null ? (a9 = Al(l9.tag, u10, l9.key, l9.mode), a9.elementType = l9.elementType, a9.type = l9.type, a9.stateNode = l9.stateNode, a9.alternate = l9, l9.alternate = a9) : (a9.pendingProps = u10, a9.type = l9.type, a9.flags = 0, a9.subtreeFlags = 0, a9.deletions = null), a9.flags = l9.flags & 65011712, a9.childLanes = l9.childLanes, a9.lanes = l9.lanes, a9.child = l9.child, a9.memoizedProps = l9.memoizedProps, a9.memoizedState = l9.memoizedState, a9.updateQueue = l9.updateQueue, u10 = l9.dependencies, a9.dependencies = u10 === null ? null : {
      lanes: u10.lanes,
      firstContext: u10.firstContext
    }, a9.sibling = l9.sibling, a9.index = l9.index, a9.ref = l9.ref, a9.refCleanup = l9.refCleanup, a9;
  }
  function C0(l9, u10) {
    l9.flags &= 65011714;
    var a9 = l9.alternate;
    return a9 === null ? (l9.childLanes = 0, l9.lanes = u10, l9.child = null, l9.subtreeFlags = 0, l9.memoizedProps = null, l9.memoizedState = null, l9.updateQueue = null, l9.dependencies = null, l9.stateNode = null) : (l9.childLanes = a9.childLanes, l9.lanes = a9.lanes, l9.child = a9.child, l9.subtreeFlags = 0, l9.deletions = null, l9.memoizedProps = a9.memoizedProps, l9.memoizedState = a9.memoizedState, l9.updateQueue = a9.updateQueue, l9.type = a9.type, u10 = a9.dependencies, l9.dependencies = u10 === null ? null : {
      lanes: u10.lanes,
      firstContext: u10.firstContext
    }), l9;
  }
  function hn2(l9, u10, a9, t8, n5, f11) {
    var c6 = 0;
    if (t8 = l9, typeof l9 == "function") le6(l9) && (c6 = 1);
    else if (typeof l9 == "string") c6 = id(l9, a9, Vl.current) ? 26 : l9 === "html" || l9 === "head" || l9 === "body" ? 27 : 5;
    else l: switch (l9) {
      case $f:
        return l9 = Al(31, a9, u10, n5), l9.elementType = $f, l9.lanes = f11, l9;
      case ta:
        return Zu(a9.children, n5, f11, u10);
      case e0:
        c6 = 8, n5 |= 24;
        break;
      case Jf:
        return l9 = Al(12, a9, u10, n5 | 2), l9.elementType = Jf, l9.lanes = f11, l9;
      case Wf:
        return l9 = Al(13, a9, u10, n5), l9.elementType = Wf, l9.lanes = f11, l9;
      case wf:
        return l9 = Al(19, a9, u10, n5), l9.elementType = wf, l9.lanes = f11, l9;
      default:
        if (typeof l9 == "object" && l9 !== null) switch (l9.$$typeof) {
          case Iv:
          case $l:
            c6 = 10;
            break l;
          case i0:
            c6 = 9;
            break l;
          case jc:
            c6 = 11;
            break l;
          case Kc:
            c6 = 14;
            break l;
          case vu:
            c6 = 16, t8 = null;
            break l;
        }
        c6 = 29, a9 = Error(A6(130, l9 === null ? "null" : typeof l9, "")), t8 = null;
    }
    return u10 = Al(c6, a9, u10, n5), u10.elementType = l9, u10.type = t8, u10.lanes = f11, u10;
  }
  function Zu(l9, u10, a9, t8) {
    return l9 = Al(7, l9, t8, u10), l9.lanes = a9, l9;
  }
  function Uf(l9, u10, a9) {
    return l9 = Al(6, l9, null, u10), l9.lanes = a9, l9;
  }
  function Hf(l9, u10, a9) {
    return u10 = Al(4, l9.children !== null ? l9.children : [], l9.key, u10), u10.lanes = a9, u10.stateNode = {
      containerInfo: l9.containerInfo,
      pendingChildren: null,
      implementation: l9.implementation
    }, u10;
  }
  var da = [], Sa = 0, Hn = null, Nn = 0, Hl = [], Nl = 0, xu = null, Fl = 1, kl = "";
  function Xu(l9, u10) {
    da[Sa++] = Nn, da[Sa++] = Hn, Hn = l9, Nn = u10;
  }
  function L0(l9, u10, a9) {
    Hl[Nl++] = Fl, Hl[Nl++] = kl, Hl[Nl++] = xu, xu = l9;
    var t8 = Fl;
    l9 = kl;
    var n5 = 32 - Ml(t8) - 1;
    t8 &= ~(1 << n5), a9 += 1;
    var f11 = 32 - Ml(u10) + n5;
    if (30 < f11) {
      var c6 = n5 - n5 % 5;
      f11 = (t8 & (1 << c6) - 1).toString(32), t8 >>= c6, n5 -= c6, Fl = 1 << 32 - Ml(u10) + n5 | a9 << n5 | t8, kl = f11 + l9;
    } else Fl = 1 << f11 | a9 << n5 | t8, kl = l9;
  }
  function ue3(l9) {
    l9.return !== null && (Xu(l9, 1), L0(l9, 1, 0));
  }
  function ae6(l9) {
    for (; l9 === Hn; ) Hn = da[--Sa], da[Sa] = null, Nn = da[--Sa], da[Sa] = null;
    for (; l9 === xu; ) xu = Hl[--Nl], Hl[Nl] = null, kl = Hl[--Nl], Hl[Nl] = null, Fl = Hl[--Nl], Hl[Nl] = null;
  }
  var vl = null, p9 = null, Y10 = false, Vu = null, Zl = false, ec = Error(A6(519));
  function Lu(l9) {
    var u10 = Error(A6(418, ""));
    throw bt2(Bl(u10, l9)), ec;
  }
  function ni(l9) {
    var u10 = l9.stateNode, a9 = l9.type, t8 = l9.memoizedProps;
    switch (u10[el] = l9, u10[Sl] = t8, a9) {
      case "dialog":
        N4("cancel", u10), N4("close", u10);
        break;
      case "iframe":
      case "object":
      case "embed":
        N4("load", u10);
        break;
      case "video":
      case "audio":
        for (a9 = 0; a9 < Tt4.length; a9++) N4(Tt4[a9], u10);
        break;
      case "source":
        N4("error", u10);
        break;
      case "img":
      case "image":
      case "link":
        N4("error", u10), N4("load", u10);
        break;
      case "details":
        N4("toggle", u10);
        break;
      case "input":
        N4("invalid", u10), E0(u10, t8.value, t8.defaultValue, t8.checked, t8.defaultChecked, t8.type, t8.name, true), On(u10);
        break;
      case "select":
        N4("invalid", u10);
        break;
      case "textarea":
        N4("invalid", u10), O0(u10, t8.value, t8.defaultValue, t8.children), On(u10);
    }
    a9 = t8.children, typeof a9 != "string" && typeof a9 != "number" && typeof a9 != "bigint" || u10.textContent === "" + a9 || t8.suppressHydrationWarning === true || sv(u10.textContent, a9) ? (t8.popover != null && (N4("beforetoggle", u10), N4("toggle", u10)), t8.onScroll != null && N4("scroll", u10), t8.onScrollEnd != null && N4("scrollend", u10), t8.onClick != null && (u10.onclick = vf), u10 = true) : u10 = false, u10 || Lu(l9);
  }
  function fi(l9) {
    for (vl = l9.return; vl; ) switch (vl.tag) {
      case 5:
      case 13:
        Zl = false;
        return;
      case 27:
      case 3:
        Zl = true;
        return;
      default:
        vl = vl.return;
    }
  }
  function Ca(l9) {
    if (l9 !== vl) return false;
    if (!Y10) return fi(l9), Y10 = true, false;
    var u10 = l9.tag, a9;
    if ((a9 = u10 !== 3 && u10 !== 27) && ((a9 = u10 === 5) && (a9 = l9.type, a9 = !(a9 !== "form" && a9 !== "button") || _c(l9.type, l9.memoizedProps)), a9 = !a9), a9 && p9 && Lu(l9), fi(l9), u10 === 13) {
      if (l9 = l9.memoizedState, l9 = l9 !== null ? l9.dehydrated : null, !l9) throw Error(A6(317));
      l: {
        for (l9 = l9.nextSibling, u10 = 0; l9; ) {
          if (l9.nodeType === 8) if (a9 = l9.data, a9 === "/$") {
            if (u10 === 0) {
              p9 = Xl(l9.nextSibling);
              break l;
            }
            u10--;
          } else a9 !== "$" && a9 !== "$!" && a9 !== "$?" || u10++;
          l9 = l9.nextSibling;
        }
        p9 = null;
      }
    } else u10 === 27 ? (u10 = p9, Yu(l9.type) ? (l9 = Qc, Qc = null, p9 = l9) : p9 = u10) : p9 = vl ? Xl(l9.stateNode.nextSibling) : null;
    return true;
  }
  function ot3() {
    p9 = vl = null, Y10 = false;
  }
  function ci() {
    var l9 = Vu;
    return l9 !== null && (dl === null ? dl = l9 : dl.push.apply(dl, l9), Vu = null), l9;
  }
  function bt2(l9) {
    Vu === null ? Vu = [
      l9
    ] : Vu.push(l9);
  }
  var ic = Cl(null), ku = null, rl = null;
  function yu(l9, u10, a9) {
    C10(ic, u10._currentValue), u10._currentValue = a9;
  }
  function lu(l9) {
    l9._currentValue = ic.current, tl(ic);
  }
  function vc(l9, u10, a9) {
    for (; l9 !== null; ) {
      var t8 = l9.alternate;
      if ((l9.childLanes & u10) !== u10 ? (l9.childLanes |= u10, t8 !== null && (t8.childLanes |= u10)) : t8 !== null && (t8.childLanes & u10) !== u10 && (t8.childLanes |= u10), l9 === a9) break;
      l9 = l9.return;
    }
  }
  function hc(l9, u10, a9, t8) {
    var n5 = l9.child;
    for (n5 !== null && (n5.return = l9); n5 !== null; ) {
      var f11 = n5.dependencies;
      if (f11 !== null) {
        var c6 = n5.child;
        f11 = f11.firstContext;
        l: for (; f11 !== null; ) {
          var e8 = f11;
          f11 = n5;
          for (var i9 = 0; i9 < u10.length; i9++) if (e8.context === u10[i9]) {
            f11.lanes |= a9, e8 = f11.alternate, e8 !== null && (e8.lanes |= a9), vc(f11.return, a9, l9), t8 || (c6 = null);
            break l;
          }
          f11 = e8.next;
        }
      } else if (n5.tag === 18) {
        if (c6 = n5.return, c6 === null) throw Error(A6(341));
        c6.lanes |= a9, f11 = c6.alternate, f11 !== null && (f11.lanes |= a9), vc(c6, a9, l9), c6 = null;
      } else c6 = n5.child;
      if (c6 !== null) c6.return = n5;
      else for (c6 = n5; c6 !== null; ) {
        if (c6 === l9) {
          c6 = null;
          break;
        }
        if (n5 = c6.sibling, n5 !== null) {
          n5.return = c6.return, c6 = n5;
          break;
        }
        c6 = c6.return;
      }
      n5 = c6;
    }
  }
  function _t3(l9, u10, a9, t8) {
    l9 = null;
    for (var n5 = u10, f11 = false; n5 !== null; ) {
      if (!f11) {
        if ((n5.flags & 524288) !== 0) f11 = true;
        else if ((n5.flags & 262144) !== 0) break;
      }
      if (n5.tag === 10) {
        var c6 = n5.alternate;
        if (c6 === null) throw Error(A6(387));
        if (c6 = c6.memoizedProps, c6 !== null) {
          var e8 = n5.type;
          Ol(n5.pendingProps.value, c6.value) || (l9 !== null ? l9.push(e8) : l9 = [
            e8
          ]);
        }
      } else if (n5 === Tn.current) {
        if (c6 = n5.alternate, c6 === null) throw Error(A6(387));
        c6.memoizedState.memoizedState !== n5.memoizedState.memoizedState && (l9 !== null ? l9.push(Dt3) : l9 = [
          Dt3
        ]);
      }
      n5 = n5.return;
    }
    l9 !== null && hc(u10, l9, a9, t8), u10.flags |= 262144;
  }
  function qn(l9) {
    for (l9 = l9.firstContext; l9 !== null; ) {
      if (!Ol(l9.context._currentValue, l9.memoizedValue)) return true;
      l9 = l9.next;
    }
    return false;
  }
  function pu(l9) {
    ku = l9, rl = null, l9 = l9.dependencies, l9 !== null && (l9.firstContext = null);
  }
  function il(l9) {
    return p0(ku, l9);
  }
  function Ft3(l9, u10) {
    return ku === null && pu(l9), p0(l9, u10);
  }
  function p0(l9, u10) {
    var a9 = u10._currentValue;
    if (u10 = {
      context: u10,
      memoizedValue: a9,
      next: null
    }, rl === null) {
      if (l9 === null) throw Error(A6(308));
      rl = u10, l9.dependencies = {
        lanes: 0,
        firstContext: u10
      }, l9.flags |= 524288;
    } else rl = rl.next = u10;
    return a9;
  }
  var vy = typeof AbortController < "u" ? AbortController : function() {
    var l9 = [], u10 = this.signal = {
      aborted: false,
      addEventListener: function(a9, t8) {
        l9.push(t8);
      }
    };
    this.abort = function() {
      u10.aborted = true, l9.forEach(function(a9) {
        return a9();
      });
    };
  }, hy = I6.unstable_scheduleCallback, yy = I6.unstable_NormalPriority, k13 = {
    $$typeof: $l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function te2() {
    return {
      controller: new vy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xt2(l9) {
    l9.refCount--, l9.refCount === 0 && hy(yy, function() {
      l9.controller.abort();
    });
  }
  var ut3 = null, yc = 0, Ha = 0, Aa = null;
  function dy(l9, u10) {
    if (ut3 === null) {
      var a9 = ut3 = [];
      yc = 0, Ha = He6(), Aa = {
        status: "pending",
        value: void 0,
        then: function(t8) {
          a9.push(t8);
        }
      };
    }
    return yc++, u10.then(ei, ei), u10;
  }
  function ei() {
    if (--yc === 0 && ut3 !== null) {
      Aa !== null && (Aa.status = "fulfilled");
      var l9 = ut3;
      ut3 = null, Ha = 0, Aa = null;
      for (var u10 = 0; u10 < l9.length; u10++) (0, l9[u10])();
    }
  }
  function Sy(l9, u10) {
    var a9 = [], t8 = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n5) {
        a9.push(n5);
      }
    };
    return l9.then(function() {
      t8.status = "fulfilled", t8.value = u10;
      for (var n5 = 0; n5 < a9.length; n5++) (0, a9[n5])(u10);
    }, function(n5) {
      for (t8.status = "rejected", t8.reason = n5, n5 = 0; n5 < a9.length; n5++) (0, a9[n5])(void 0);
    }), t8;
  }
  var ii = s8.S;
  s8.S = function(l9, u10) {
    typeof u10 == "object" && u10 !== null && typeof u10.then == "function" && dy(l9, u10), ii !== null && ii(l9, u10);
  };
  var ju = Cl(null);
  function ne4() {
    var l9 = ju.current;
    return l9 !== null ? l9 : V8.pooledCache;
  }
  function yn(l9, u10) {
    u10 === null ? C10(ju, ju.current) : C10(ju, u10.pool);
  }
  function J0() {
    var l9 = ne4();
    return l9 === null ? null : {
      parent: k13._currentValue,
      pool: l9
    };
  }
  var Gt2 = Error(A6(460)), W0 = Error(A6(474)), uf = Error(A6(542)), dc = {
    then: function() {
    }
  };
  function vi(l9) {
    return l9 = l9.status, l9 === "fulfilled" || l9 === "rejected";
  }
  function kt3() {
  }
  function w0(l9, u10, a9) {
    switch (a9 = l9[a9], a9 === void 0 ? l9.push(u10) : a9 !== u10 && (u10.then(kt3, kt3), u10 = a9), u10.status) {
      case "fulfilled":
        return u10.value;
      case "rejected":
        throw l9 = u10.reason, yi(l9), l9;
      default:
        if (typeof u10.status == "string") u10.then(kt3, kt3);
        else {
          if (l9 = V8, l9 !== null && 100 < l9.shellSuspendCounter) throw Error(A6(482));
          l9 = u10, l9.status = "pending", l9.then(function(t8) {
            if (u10.status === "pending") {
              var n5 = u10;
              n5.status = "fulfilled", n5.value = t8;
            }
          }, function(t8) {
            if (u10.status === "pending") {
              var n5 = u10;
              n5.status = "rejected", n5.reason = t8;
            }
          });
        }
        switch (u10.status) {
          case "fulfilled":
            return u10.value;
          case "rejected":
            throw l9 = u10.reason, yi(l9), l9;
        }
        throw at3 = u10, Gt2;
    }
  }
  var at3 = null;
  function hi() {
    if (at3 === null) throw Error(A6(459));
    var l9 = at3;
    return at3 = null, l9;
  }
  function yi(l9) {
    if (l9 === Gt2 || l9 === uf) throw Error(A6(483));
  }
  var hu = false;
  function fe5(l9) {
    l9.updateQueue = {
      baseState: l9.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Sc(l9, u10) {
    l9 = l9.updateQueue, u10.updateQueue === l9 && (u10.updateQueue = {
      baseState: l9.baseState,
      firstBaseUpdate: l9.firstBaseUpdate,
      lastBaseUpdate: l9.lastBaseUpdate,
      shared: l9.shared,
      callbacks: null
    });
  }
  function Mu(l9) {
    return {
      lane: l9,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Eu(l9, u10, a9) {
    var t8 = l9.updateQueue;
    if (t8 === null) return null;
    if (t8 = t8.shared, (X6 & 2) !== 0) {
      var n5 = t8.pending;
      return n5 === null ? u10.next = u10 : (u10.next = n5.next, n5.next = u10), t8.pending = u10, u10 = Un(l9), K0(l9, null, a9), u10;
    }
    return lf(l9, t8, u10, a9), Un(l9);
  }
  function tt4(l9, u10, a9) {
    if (u10 = u10.updateQueue, u10 !== null && (u10 = u10.shared, (a9 & 4194048) !== 0)) {
      var t8 = u10.lanes;
      t8 &= l9.pendingLanes, a9 |= t8, u10.lanes = a9, g0(l9, a9);
    }
  }
  function Nf(l9, u10) {
    var a9 = l9.updateQueue, t8 = l9.alternate;
    if (t8 !== null && (t8 = t8.updateQueue, a9 === t8)) {
      var n5 = null, f11 = null;
      if (a9 = a9.firstBaseUpdate, a9 !== null) {
        do {
          var c6 = {
            lane: a9.lane,
            tag: a9.tag,
            payload: a9.payload,
            callback: null,
            next: null
          };
          f11 === null ? n5 = f11 = c6 : f11 = f11.next = c6, a9 = a9.next;
        } while (a9 !== null);
        f11 === null ? n5 = f11 = u10 : f11 = f11.next = u10;
      } else n5 = f11 = u10;
      a9 = {
        baseState: t8.baseState,
        firstBaseUpdate: n5,
        lastBaseUpdate: f11,
        shared: t8.shared,
        callbacks: t8.callbacks
      }, l9.updateQueue = a9;
      return;
    }
    l9 = a9.lastBaseUpdate, l9 === null ? a9.firstBaseUpdate = u10 : l9.next = u10, a9.lastBaseUpdate = u10;
  }
  var mc = false;
  function nt4() {
    if (mc) {
      var l9 = Aa;
      if (l9 !== null) throw l9;
    }
  }
  function ft3(l9, u10, a9, t8) {
    mc = false;
    var n5 = l9.updateQueue;
    hu = false;
    var f11 = n5.firstBaseUpdate, c6 = n5.lastBaseUpdate, e8 = n5.shared.pending;
    if (e8 !== null) {
      n5.shared.pending = null;
      var i9 = e8, d8 = i9.next;
      i9.next = null, c6 === null ? f11 = d8 : c6.next = d8, c6 = i9;
      var g9 = l9.alternate;
      g9 !== null && (g9 = g9.updateQueue, e8 = g9.lastBaseUpdate, e8 !== c6 && (e8 === null ? g9.firstBaseUpdate = d8 : e8.next = d8, g9.lastBaseUpdate = i9));
    }
    if (f11 !== null) {
      var z10 = n5.baseState;
      c6 = 0, g9 = d8 = i9 = null, e8 = f11;
      do {
        var S11 = e8.lane & -536870913, m13 = S11 !== e8.lane;
        if (m13 ? (B7 & S11) === S11 : (t8 & S11) === S11) {
          S11 !== 0 && S11 === Ha && (mc = true), g9 !== null && (g9 = g9.next = {
            lane: 0,
            tag: e8.tag,
            payload: e8.payload,
            callback: null,
            next: null
          });
          l: {
            var O6 = l9, E11 = e8;
            S11 = u10;
            var G10 = a9;
            switch (E11.tag) {
              case 1:
                if (O6 = E11.payload, typeof O6 == "function") {
                  z10 = O6.call(G10, z10, S11);
                  break l;
                }
                z10 = O6;
                break l;
              case 3:
                O6.flags = O6.flags & -65537 | 128;
              case 0:
                if (O6 = E11.payload, S11 = typeof O6 == "function" ? O6.call(G10, z10, S11) : O6, S11 == null) break l;
                z10 = j10({}, z10, S11);
                break l;
              case 2:
                hu = true;
            }
          }
          S11 = e8.callback, S11 !== null && (l9.flags |= 64, m13 && (l9.flags |= 8192), m13 = n5.callbacks, m13 === null ? n5.callbacks = [
            S11
          ] : m13.push(S11));
        } else m13 = {
          lane: S11,
          tag: e8.tag,
          payload: e8.payload,
          callback: e8.callback,
          next: null
        }, g9 === null ? (d8 = g9 = m13, i9 = z10) : g9 = g9.next = m13, c6 |= S11;
        if (e8 = e8.next, e8 === null) {
          if (e8 = n5.shared.pending, e8 === null) break;
          m13 = e8, e8 = m13.next, m13.next = null, n5.lastBaseUpdate = m13, n5.shared.pending = null;
        }
      } while (true);
      g9 === null && (i9 = z10), n5.baseState = i9, n5.firstBaseUpdate = d8, n5.lastBaseUpdate = g9, f11 === null && (n5.shared.lanes = 0), Bu |= c6, l9.lanes = c6, l9.memoizedState = z10;
    }
  }
  function $0(l9, u10) {
    if (typeof l9 != "function") throw Error(A6(191, l9));
    l9.call(u10);
  }
  function F0(l9, u10) {
    var a9 = l9.callbacks;
    if (a9 !== null) for (l9.callbacks = null, l9 = 0; l9 < a9.length; l9++) $0(a9[l9], u10);
  }
  var Na = Cl(null), Bn = Cl(0);
  function di(l9, u10) {
    l9 = nu, C10(Bn, l9), C10(Na, u10), nu = l9 | u10.baseLanes;
  }
  function gc() {
    C10(Bn, nu), C10(Na, Na.current);
  }
  function ce6() {
    nu = Bn.current, tl(Na), tl(Bn);
  }
  var Nu = 0, U9 = null, Z6 = null, $7 = null, Rn = false, Ta = false, Ju = false, Yn = 0, zt3 = 0, Ma = null, my = 0;
  function W6() {
    throw Error(A6(321));
  }
  function ee4(l9, u10) {
    if (u10 === null) return false;
    for (var a9 = 0; a9 < u10.length && a9 < l9.length; a9++) if (!Ol(l9[a9], u10[a9])) return false;
    return true;
  }
  function ie4(l9, u10, a9, t8, n5, f11) {
    return Nu = f11, U9 = u10, u10.memoizedState = null, u10.updateQueue = null, u10.lanes = 0, s8.H = l9 === null || l9.memoizedState === null ? H1 : N1, Ju = false, f11 = a9(t8, n5), Ju = false, Ta && (f11 = r0(u10, a9, t8, n5)), k0(l9), f11;
  }
  function k0(l9) {
    s8.H = on;
    var u10 = Z6 !== null && Z6.next !== null;
    if (Nu = 0, $7 = Z6 = U9 = null, Rn = false, zt3 = 0, Ma = null, u10) throw Error(A6(300));
    l9 === null || al || (l9 = l9.dependencies, l9 !== null && qn(l9) && (al = true));
  }
  function r0(l9, u10, a9, t8) {
    U9 = l9;
    var n5 = 0;
    do {
      if (Ta && (Ma = null), zt3 = 0, Ta = false, 25 <= n5) throw Error(A6(301));
      if (n5 += 1, $7 = Z6 = null, l9.updateQueue != null) {
        var f11 = l9.updateQueue;
        f11.lastEffect = null, f11.events = null, f11.stores = null, f11.memoCache != null && (f11.memoCache.index = 0);
      }
      s8.H = Ey, f11 = u10(a9, t8);
    } while (Ta);
    return f11;
  }
  function gy() {
    var l9 = s8.H, u10 = l9.useState()[0];
    return u10 = typeof u10.then == "function" ? Qt2(u10) : u10, l9 = l9.useState()[0], (Z6 !== null ? Z6.memoizedState : null) !== l9 && (U9.flags |= 1024), u10;
  }
  function ve7() {
    var l9 = Yn !== 0;
    return Yn = 0, l9;
  }
  function he5(l9, u10, a9) {
    u10.updateQueue = l9.updateQueue, u10.flags &= -2053, l9.lanes &= ~a9;
  }
  function ye7(l9) {
    if (Rn) {
      for (l9 = l9.memoizedState; l9 !== null; ) {
        var u10 = l9.queue;
        u10 !== null && (u10.pending = null), l9 = l9.next;
      }
      Rn = false;
    }
    Nu = 0, $7 = Z6 = U9 = null, Ta = false, zt3 = Yn = 0, Ma = null;
  }
  function hl() {
    var l9 = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return $7 === null ? U9.memoizedState = $7 = l9 : $7 = $7.next = l9, $7;
  }
  function F7() {
    if (Z6 === null) {
      var l9 = U9.alternate;
      l9 = l9 !== null ? l9.memoizedState : null;
    } else l9 = Z6.next;
    var u10 = $7 === null ? U9.memoizedState : $7.next;
    if (u10 !== null) $7 = u10, Z6 = l9;
    else {
      if (l9 === null) throw U9.alternate === null ? Error(A6(467)) : Error(A6(310));
      Z6 = l9, l9 = {
        memoizedState: Z6.memoizedState,
        baseState: Z6.baseState,
        baseQueue: Z6.baseQueue,
        queue: Z6.queue,
        next: null
      }, $7 === null ? U9.memoizedState = $7 = l9 : $7 = $7.next = l9;
    }
    return $7;
  }
  function de7() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Qt2(l9) {
    var u10 = zt3;
    return zt3 += 1, Ma === null && (Ma = []), l9 = w0(Ma, l9, u10), u10 = U9, ($7 === null ? u10.memoizedState : $7.next) === null && (u10 = u10.alternate, s8.H = u10 === null || u10.memoizedState === null ? H1 : N1), l9;
  }
  function af(l9) {
    if (l9 !== null && typeof l9 == "object") {
      if (typeof l9.then == "function") return Qt2(l9);
      if (l9.$$typeof === $l) return il(l9);
    }
    throw Error(A6(438, String(l9)));
  }
  function Se5(l9) {
    var u10 = null, a9 = U9.updateQueue;
    if (a9 !== null && (u10 = a9.memoCache), u10 == null) {
      var t8 = U9.alternate;
      t8 !== null && (t8 = t8.updateQueue, t8 !== null && (t8 = t8.memoCache, t8 != null && (u10 = {
        data: t8.data.map(function(n5) {
          return n5.slice();
        }),
        index: 0
      })));
    }
    if (u10 == null && (u10 = {
      data: [],
      index: 0
    }), a9 === null && (a9 = de7(), U9.updateQueue = a9), a9.memoCache = u10, a9 = u10.data[u10.index], a9 === void 0) for (a9 = u10.data[u10.index] = Array(l9), t8 = 0; t8 < l9; t8++) a9[t8] = Pv;
    return u10.index++, a9;
  }
  function au(l9, u10) {
    return typeof u10 == "function" ? u10(l9) : u10;
  }
  function dn(l9) {
    var u10 = F7();
    return me6(u10, Z6, l9);
  }
  function me6(l9, u10, a9) {
    var t8 = l9.queue;
    if (t8 === null) throw Error(A6(311));
    t8.lastRenderedReducer = a9;
    var n5 = l9.baseQueue, f11 = t8.pending;
    if (f11 !== null) {
      if (n5 !== null) {
        var c6 = n5.next;
        n5.next = f11.next, f11.next = c6;
      }
      u10.baseQueue = n5 = f11, t8.pending = null;
    }
    if (f11 = l9.baseState, n5 === null) l9.memoizedState = f11;
    else {
      u10 = n5.next;
      var e8 = c6 = null, i9 = null, d8 = u10, g9 = false;
      do {
        var z10 = d8.lane & -536870913;
        if (z10 !== d8.lane ? (B7 & z10) === z10 : (Nu & z10) === z10) {
          var S11 = d8.revertLane;
          if (S11 === 0) i9 !== null && (i9 = i9.next = {
            lane: 0,
            revertLane: 0,
            action: d8.action,
            hasEagerState: d8.hasEagerState,
            eagerState: d8.eagerState,
            next: null
          }), z10 === Ha && (g9 = true);
          else if ((Nu & S11) === S11) {
            d8 = d8.next, S11 === Ha && (g9 = true);
            continue;
          } else z10 = {
            lane: 0,
            revertLane: d8.revertLane,
            action: d8.action,
            hasEagerState: d8.hasEagerState,
            eagerState: d8.eagerState,
            next: null
          }, i9 === null ? (e8 = i9 = z10, c6 = f11) : i9 = i9.next = z10, U9.lanes |= S11, Bu |= S11;
          z10 = d8.action, Ju && a9(f11, z10), f11 = d8.hasEagerState ? d8.eagerState : a9(f11, z10);
        } else S11 = {
          lane: z10,
          revertLane: d8.revertLane,
          action: d8.action,
          hasEagerState: d8.hasEagerState,
          eagerState: d8.eagerState,
          next: null
        }, i9 === null ? (e8 = i9 = S11, c6 = f11) : i9 = i9.next = S11, U9.lanes |= z10, Bu |= z10;
        d8 = d8.next;
      } while (d8 !== null && d8 !== u10);
      if (i9 === null ? c6 = f11 : i9.next = e8, !Ol(f11, l9.memoizedState) && (al = true, g9 && (a9 = Aa, a9 !== null))) throw a9;
      l9.memoizedState = f11, l9.baseState = c6, l9.baseQueue = i9, t8.lastRenderedState = f11;
    }
    return n5 === null && (t8.lanes = 0), [
      l9.memoizedState,
      t8.dispatch
    ];
  }
  function qf(l9) {
    var u10 = F7(), a9 = u10.queue;
    if (a9 === null) throw Error(A6(311));
    a9.lastRenderedReducer = l9;
    var t8 = a9.dispatch, n5 = a9.pending, f11 = u10.memoizedState;
    if (n5 !== null) {
      a9.pending = null;
      var c6 = n5 = n5.next;
      do
        f11 = l9(f11, c6.action), c6 = c6.next;
      while (c6 !== n5);
      Ol(f11, u10.memoizedState) || (al = true), u10.memoizedState = f11, u10.baseQueue === null && (u10.baseState = f11), a9.lastRenderedState = f11;
    }
    return [
      f11,
      t8
    ];
  }
  function I0(l9, u10, a9) {
    var t8 = U9, n5 = F7(), f11 = Y10;
    if (f11) {
      if (a9 === void 0) throw Error(A6(407));
      a9 = a9();
    } else a9 = u10();
    var c6 = !Ol((Z6 || n5).memoizedState, a9);
    c6 && (n5.memoizedState = a9, al = true), n5 = n5.queue;
    var e8 = u1.bind(null, t8, n5, l9);
    if (Zt2(2048, 8, e8, [
      l9
    ]), n5.getSnapshot !== u10 || c6 || $7 !== null && $7.memoizedState.tag & 1) {
      if (t8.flags |= 2048, qa(9, tf(), l1.bind(null, t8, n5, a9, u10), null), V8 === null) throw Error(A6(349));
      f11 || (Nu & 124) !== 0 || P0(t8, u10, a9);
    }
    return a9;
  }
  function P0(l9, u10, a9) {
    l9.flags |= 16384, l9 = {
      getSnapshot: u10,
      value: a9
    }, u10 = U9.updateQueue, u10 === null ? (u10 = de7(), U9.updateQueue = u10, u10.stores = [
      l9
    ]) : (a9 = u10.stores, a9 === null ? u10.stores = [
      l9
    ] : a9.push(l9));
  }
  function l1(l9, u10, a9, t8) {
    u10.value = a9, u10.getSnapshot = t8, a12(u10) && t1(l9);
  }
  function u1(l9, u10, a9) {
    return a9(function() {
      a12(u10) && t1(l9);
    });
  }
  function a12(l9) {
    var u10 = l9.getSnapshot;
    l9 = l9.value;
    try {
      var a9 = u10();
      return !Ol(l9, a9);
    } catch {
      return true;
    }
  }
  function t1(l9) {
    var u10 = Qa(l9, 2);
    u10 !== null && Dl(u10, l9, 2);
  }
  function bc(l9) {
    var u10 = hl();
    if (typeof l9 == "function") {
      var a9 = l9;
      if (l9 = a9(), Ju) {
        gu(true);
        try {
          a9();
        } finally {
          gu(false);
        }
      }
    }
    return u10.memoizedState = u10.baseState = l9, u10.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: au,
      lastRenderedState: l9
    }, u10;
  }
  function n1(l9, u10, a9, t8) {
    return l9.baseState = a9, me6(l9, Z6, typeof t8 == "function" ? t8 : au);
  }
  function by(l9, u10, a9, t8, n5) {
    if (nf(l9)) throw Error(A6(485));
    if (l9 = u10.action, l9 !== null) {
      var f11 = {
        payload: n5,
        action: l9,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c6) {
          f11.listeners.push(c6);
        }
      };
      s8.T !== null ? a9(true) : f11.isTransition = false, t8(f11), a9 = u10.pending, a9 === null ? (f11.next = u10.pending = f11, f12(u10, f11)) : (f11.next = a9.next, u10.pending = a9.next = f11);
    }
  }
  function f12(l9, u10) {
    var a9 = u10.action, t8 = u10.payload, n5 = l9.state;
    if (u10.isTransition) {
      var f11 = s8.T, c6 = {};
      s8.T = c6;
      try {
        var e8 = a9(n5, t8), i9 = s8.S;
        i9 !== null && i9(c6, e8), Si(l9, u10, e8);
      } catch (d8) {
        zc(l9, u10, d8);
      } finally {
        s8.T = f11;
      }
    } else try {
      f11 = a9(n5, t8), Si(l9, u10, f11);
    } catch (d8) {
      zc(l9, u10, d8);
    }
  }
  function Si(l9, u10, a9) {
    a9 !== null && typeof a9 == "object" && typeof a9.then == "function" ? a9.then(function(t8) {
      mi(l9, u10, t8);
    }, function(t8) {
      return zc(l9, u10, t8);
    }) : mi(l9, u10, a9);
  }
  function mi(l9, u10, a9) {
    u10.status = "fulfilled", u10.value = a9, c1(u10), l9.state = a9, u10 = l9.pending, u10 !== null && (a9 = u10.next, a9 === u10 ? l9.pending = null : (a9 = a9.next, u10.next = a9, f12(l9, a9)));
  }
  function zc(l9, u10, a9) {
    var t8 = l9.pending;
    if (l9.pending = null, t8 !== null) {
      t8 = t8.next;
      do
        u10.status = "rejected", u10.reason = a9, c1(u10), u10 = u10.next;
      while (u10 !== t8);
    }
    l9.action = null;
  }
  function c1(l9) {
    l9 = l9.listeners;
    for (var u10 = 0; u10 < l9.length; u10++) (0, l9[u10])();
  }
  function e12(l9, u10) {
    return u10;
  }
  function gi(l9, u10) {
    if (Y10) {
      var a9 = V8.formState;
      if (a9 !== null) {
        l: {
          var t8 = U9;
          if (Y10) {
            if (p9) {
              u: {
                for (var n5 = p9, f11 = Zl; n5.nodeType !== 8; ) {
                  if (!f11) {
                    n5 = null;
                    break u;
                  }
                  if (n5 = Xl(n5.nextSibling), n5 === null) {
                    n5 = null;
                    break u;
                  }
                }
                f11 = n5.data, n5 = f11 === "F!" || f11 === "F" ? n5 : null;
              }
              if (n5) {
                p9 = Xl(n5.nextSibling), t8 = n5.data === "F!";
                break l;
              }
            }
            Lu(t8);
          }
          t8 = false;
        }
        t8 && (u10 = a9[0]);
      }
    }
    return a9 = hl(), a9.memoizedState = a9.baseState = u10, t8 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: e12,
      lastRenderedState: u10
    }, a9.queue = t8, a9 = O1.bind(null, U9, t8), t8.dispatch = a9, t8 = bc(false), f11 = Ae5.bind(null, U9, false, t8.queue), t8 = hl(), n5 = {
      state: u10,
      dispatch: null,
      action: l9,
      pending: null
    }, t8.queue = n5, a9 = by.bind(null, U9, n5, f11, a9), n5.dispatch = a9, t8.memoizedState = l9, [
      u10,
      a9,
      false
    ];
  }
  function bi(l9) {
    var u10 = F7();
    return i1(u10, Z6, l9);
  }
  function i1(l9, u10, a9) {
    if (u10 = me6(l9, u10, e12)[0], l9 = dn(au)[0], typeof u10 == "object" && u10 !== null && typeof u10.then == "function") try {
      var t8 = Qt2(u10);
    } catch (c6) {
      throw c6 === Gt2 ? uf : c6;
    }
    else t8 = u10;
    u10 = F7();
    var n5 = u10.queue, f11 = n5.dispatch;
    return a9 !== u10.memoizedState && (U9.flags |= 2048, qa(9, tf(), zy.bind(null, n5, a9), null)), [
      t8,
      f11,
      l9
    ];
  }
  function zy(l9, u10) {
    l9.action = u10;
  }
  function zi(l9) {
    var u10 = F7(), a9 = Z6;
    if (a9 !== null) return i1(u10, a9, l9);
    F7(), u10 = u10.memoizedState, a9 = F7();
    var t8 = a9.queue.dispatch;
    return a9.memoizedState = l9, [
      u10,
      t8,
      false
    ];
  }
  function qa(l9, u10, a9, t8) {
    return l9 = {
      tag: l9,
      create: a9,
      deps: t8,
      inst: u10,
      next: null
    }, u10 = U9.updateQueue, u10 === null && (u10 = de7(), U9.updateQueue = u10), a9 = u10.lastEffect, a9 === null ? u10.lastEffect = l9.next = l9 : (t8 = a9.next, a9.next = l9, l9.next = t8, u10.lastEffect = l9), l9;
  }
  function tf() {
    return {
      destroy: void 0,
      resource: void 0
    };
  }
  function v1() {
    return F7().memoizedState;
  }
  function Sn(l9, u10, a9, t8) {
    var n5 = hl();
    t8 = t8 === void 0 ? null : t8, U9.flags |= l9, n5.memoizedState = qa(1 | u10, tf(), a9, t8);
  }
  function Zt2(l9, u10, a9, t8) {
    var n5 = F7();
    t8 = t8 === void 0 ? null : t8;
    var f11 = n5.memoizedState.inst;
    Z6 !== null && t8 !== null && ee4(t8, Z6.memoizedState.deps) ? n5.memoizedState = qa(u10, f11, a9, t8) : (U9.flags |= l9, n5.memoizedState = qa(1 | u10, f11, a9, t8));
  }
  function Ai(l9, u10) {
    Sn(8390656, 8, l9, u10);
  }
  function h1(l9, u10) {
    Zt2(2048, 8, l9, u10);
  }
  function y1(l9, u10) {
    return Zt2(4, 2, l9, u10);
  }
  function d12(l9, u10) {
    return Zt2(4, 4, l9, u10);
  }
  function S1(l9, u10) {
    if (typeof u10 == "function") {
      l9 = l9();
      var a9 = u10(l9);
      return function() {
        typeof a9 == "function" ? a9() : u10(null);
      };
    }
    if (u10 != null) return l9 = l9(), u10.current = l9, function() {
      u10.current = null;
    };
  }
  function m1(l9, u10, a9) {
    a9 = a9 != null ? a9.concat([
      l9
    ]) : null, Zt2(4, 4, S1.bind(null, u10, l9), a9);
  }
  function ge5() {
  }
  function g1(l9, u10) {
    var a9 = F7();
    u10 = u10 === void 0 ? null : u10;
    var t8 = a9.memoizedState;
    return u10 !== null && ee4(u10, t8[1]) ? t8[0] : (a9.memoizedState = [
      l9,
      u10
    ], l9);
  }
  function b1(l9, u10) {
    var a9 = F7();
    u10 = u10 === void 0 ? null : u10;
    var t8 = a9.memoizedState;
    if (u10 !== null && ee4(u10, t8[1])) return t8[0];
    if (t8 = l9(), Ju) {
      gu(true);
      try {
        l9();
      } finally {
        gu(false);
      }
    }
    return a9.memoizedState = [
      t8,
      u10
    ], t8;
  }
  function be4(l9, u10, a9) {
    return a9 === void 0 || (Nu & 1073741824) !== 0 ? l9.memoizedState = u10 : (l9.memoizedState = a9, l9 = cv(), U9.lanes |= l9, Bu |= l9, a9);
  }
  function z1(l9, u10, a9, t8) {
    return Ol(a9, u10) ? a9 : Na.current !== null ? (l9 = be4(l9, a9, t8), Ol(l9, u10) || (al = true), l9) : (Nu & 42) === 0 ? (al = true, l9.memoizedState = a9) : (l9 = cv(), U9.lanes |= l9, Bu |= l9, u10);
  }
  function A1(l9, u10, a9, t8, n5) {
    var f11 = o7.p;
    o7.p = f11 !== 0 && 8 > f11 ? f11 : 8;
    var c6 = s8.T, e8 = {};
    s8.T = e8, Ae5(l9, false, u10, a9);
    try {
      var i9 = n5(), d8 = s8.S;
      if (d8 !== null && d8(e8, i9), i9 !== null && typeof i9 == "object" && typeof i9.then == "function") {
        var g9 = Sy(i9, t8);
        ct(l9, u10, g9, El(l9));
      } else ct(l9, u10, t8, El(l9));
    } catch (z10) {
      ct(l9, u10, {
        then: function() {
        },
        status: "rejected",
        reason: z10
      }, El());
    } finally {
      o7.p = f11, s8.T = c6;
    }
  }
  function Ay() {
  }
  function Ac(l9, u10, a9, t8) {
    if (l9.tag !== 5) throw Error(A6(476));
    var n5 = T1(l9).queue;
    A1(l9, n5, u10, Qu, a9 === null ? Ay : function() {
      return M1(l9), a9(t8);
    });
  }
  function T1(l9) {
    var u10 = l9.memoizedState;
    if (u10 !== null) return u10;
    u10 = {
      memoizedState: Qu,
      baseState: Qu,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: Qu
      },
      next: null
    };
    var a9 = {};
    return u10.next = {
      memoizedState: a9,
      baseState: a9,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: au,
        lastRenderedState: a9
      },
      next: null
    }, l9.memoizedState = u10, l9 = l9.alternate, l9 !== null && (l9.memoizedState = u10), u10;
  }
  function M1(l9) {
    var u10 = T1(l9).next.queue;
    ct(l9, u10, {}, El());
  }
  function ze6() {
    return il(Dt3);
  }
  function E1() {
    return F7().memoizedState;
  }
  function D1() {
    return F7().memoizedState;
  }
  function Ty(l9) {
    for (var u10 = l9.return; u10 !== null; ) {
      switch (u10.tag) {
        case 24:
        case 3:
          var a9 = El();
          l9 = Mu(a9);
          var t8 = Eu(u10, l9, a9);
          t8 !== null && (Dl(t8, u10, a9), tt4(t8, u10, a9)), u10 = {
            cache: te2()
          }, l9.payload = u10;
          return;
      }
      u10 = u10.return;
    }
  }
  function My(l9, u10, a9) {
    var t8 = El();
    a9 = {
      lane: t8,
      revertLane: 0,
      action: a9,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l9) ? s1(u10, a9) : (a9 = Pc(l9, u10, a9, t8), a9 !== null && (Dl(a9, l9, t8), U1(a9, u10, t8)));
  }
  function O1(l9, u10, a9) {
    var t8 = El();
    ct(l9, u10, a9, t8);
  }
  function ct(l9, u10, a9, t8) {
    var n5 = {
      lane: t8,
      revertLane: 0,
      action: a9,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (nf(l9)) s1(u10, n5);
    else {
      var f11 = l9.alternate;
      if (l9.lanes === 0 && (f11 === null || f11.lanes === 0) && (f11 = u10.lastRenderedReducer, f11 !== null)) try {
        var c6 = u10.lastRenderedState, e8 = f11(c6, a9);
        if (n5.hasEagerState = true, n5.eagerState = e8, Ol(e8, c6)) return lf(l9, u10, n5, 0), V8 === null && Pn(), false;
      } catch {
      } finally {
      }
      if (a9 = Pc(l9, u10, n5, t8), a9 !== null) return Dl(a9, l9, t8), U1(a9, u10, t8), true;
    }
    return false;
  }
  function Ae5(l9, u10, a9, t8) {
    if (t8 = {
      lane: 2,
      revertLane: He6(),
      action: t8,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nf(l9)) {
      if (u10) throw Error(A6(479));
    } else u10 = Pc(l9, a9, t8, 2), u10 !== null && Dl(u10, l9, 2);
  }
  function nf(l9) {
    var u10 = l9.alternate;
    return l9 === U9 || u10 !== null && u10 === U9;
  }
  function s1(l9, u10) {
    Ta = Rn = true;
    var a9 = l9.pending;
    a9 === null ? u10.next = u10 : (u10.next = a9.next, a9.next = u10), l9.pending = u10;
  }
  function U1(l9, u10, a9) {
    if ((a9 & 4194048) !== 0) {
      var t8 = u10.lanes;
      t8 &= l9.pendingLanes, a9 |= t8, u10.lanes = a9, g0(l9, a9);
    }
  }
  var on = {
    readContext: il,
    use: af,
    useCallback: W6,
    useContext: W6,
    useEffect: W6,
    useImperativeHandle: W6,
    useLayoutEffect: W6,
    useInsertionEffect: W6,
    useMemo: W6,
    useReducer: W6,
    useRef: W6,
    useState: W6,
    useDebugValue: W6,
    useDeferredValue: W6,
    useTransition: W6,
    useSyncExternalStore: W6,
    useId: W6,
    useHostTransitionStatus: W6,
    useFormState: W6,
    useActionState: W6,
    useOptimistic: W6,
    useMemoCache: W6,
    useCacheRefresh: W6
  }, H1 = {
    readContext: il,
    use: af,
    useCallback: function(l9, u10) {
      return hl().memoizedState = [
        l9,
        u10 === void 0 ? null : u10
      ], l9;
    },
    useContext: il,
    useEffect: Ai,
    useImperativeHandle: function(l9, u10, a9) {
      a9 = a9 != null ? a9.concat([
        l9
      ]) : null, Sn(4194308, 4, S1.bind(null, u10, l9), a9);
    },
    useLayoutEffect: function(l9, u10) {
      return Sn(4194308, 4, l9, u10);
    },
    useInsertionEffect: function(l9, u10) {
      Sn(4, 2, l9, u10);
    },
    useMemo: function(l9, u10) {
      var a9 = hl();
      u10 = u10 === void 0 ? null : u10;
      var t8 = l9();
      if (Ju) {
        gu(true);
        try {
          l9();
        } finally {
          gu(false);
        }
      }
      return a9.memoizedState = [
        t8,
        u10
      ], t8;
    },
    useReducer: function(l9, u10, a9) {
      var t8 = hl();
      if (a9 !== void 0) {
        var n5 = a9(u10);
        if (Ju) {
          gu(true);
          try {
            a9(u10);
          } finally {
            gu(false);
          }
        }
      } else n5 = u10;
      return t8.memoizedState = t8.baseState = n5, l9 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l9,
        lastRenderedState: n5
      }, t8.queue = l9, l9 = l9.dispatch = My.bind(null, U9, l9), [
        t8.memoizedState,
        l9
      ];
    },
    useRef: function(l9) {
      var u10 = hl();
      return l9 = {
        current: l9
      }, u10.memoizedState = l9;
    },
    useState: function(l9) {
      l9 = bc(l9);
      var u10 = l9.queue, a9 = O1.bind(null, U9, u10);
      return u10.dispatch = a9, [
        l9.memoizedState,
        a9
      ];
    },
    useDebugValue: ge5,
    useDeferredValue: function(l9, u10) {
      var a9 = hl();
      return be4(a9, l9, u10);
    },
    useTransition: function() {
      var l9 = bc(false);
      return l9 = A1.bind(null, U9, l9.queue, true, false), hl().memoizedState = l9, [
        false,
        l9
      ];
    },
    useSyncExternalStore: function(l9, u10, a9) {
      var t8 = U9, n5 = hl();
      if (Y10) {
        if (a9 === void 0) throw Error(A6(407));
        a9 = a9();
      } else {
        if (a9 = u10(), V8 === null) throw Error(A6(349));
        (B7 & 124) !== 0 || P0(t8, u10, a9);
      }
      n5.memoizedState = a9;
      var f11 = {
        value: a9,
        getSnapshot: u10
      };
      return n5.queue = f11, Ai(u1.bind(null, t8, f11, l9), [
        l9
      ]), t8.flags |= 2048, qa(9, tf(), l1.bind(null, t8, f11, a9, u10), null), a9;
    },
    useId: function() {
      var l9 = hl(), u10 = V8.identifierPrefix;
      if (Y10) {
        var a9 = kl, t8 = Fl;
        a9 = (t8 & ~(1 << 32 - Ml(t8) - 1)).toString(32) + a9, u10 = "\xAB" + u10 + "R" + a9, a9 = Yn++, 0 < a9 && (u10 += "H" + a9.toString(32)), u10 += "\xBB";
      } else a9 = my++, u10 = "\xAB" + u10 + "r" + a9.toString(32) + "\xBB";
      return l9.memoizedState = u10;
    },
    useHostTransitionStatus: ze6,
    useFormState: gi,
    useActionState: gi,
    useOptimistic: function(l9) {
      var u10 = hl();
      u10.memoizedState = u10.baseState = l9;
      var a9 = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return u10.queue = a9, u10 = Ae5.bind(null, U9, true, a9), a9.dispatch = u10, [
        l9,
        u10
      ];
    },
    useMemoCache: Se5,
    useCacheRefresh: function() {
      return hl().memoizedState = Ty.bind(null, U9);
    }
  }, N1 = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d12,
    useMemo: b1,
    useReducer: dn,
    useRef: v1,
    useState: function() {
      return dn(au);
    },
    useDebugValue: ge5,
    useDeferredValue: function(l9, u10) {
      var a9 = F7();
      return z1(a9, Z6.memoizedState, l9, u10);
    },
    useTransition: function() {
      var l9 = dn(au)[0], u10 = F7().memoizedState;
      return [
        typeof l9 == "boolean" ? l9 : Qt2(l9),
        u10
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze6,
    useFormState: bi,
    useActionState: bi,
    useOptimistic: function(l9, u10) {
      var a9 = F7();
      return n1(a9, Z6, l9, u10);
    },
    useMemoCache: Se5,
    useCacheRefresh: D1
  }, Ey = {
    readContext: il,
    use: af,
    useCallback: g1,
    useContext: il,
    useEffect: h1,
    useImperativeHandle: m1,
    useInsertionEffect: y1,
    useLayoutEffect: d12,
    useMemo: b1,
    useReducer: qf,
    useRef: v1,
    useState: function() {
      return qf(au);
    },
    useDebugValue: ge5,
    useDeferredValue: function(l9, u10) {
      var a9 = F7();
      return Z6 === null ? be4(a9, l9, u10) : z1(a9, Z6.memoizedState, l9, u10);
    },
    useTransition: function() {
      var l9 = qf(au)[0], u10 = F7().memoizedState;
      return [
        typeof l9 == "boolean" ? l9 : Qt2(l9),
        u10
      ];
    },
    useSyncExternalStore: I0,
    useId: E1,
    useHostTransitionStatus: ze6,
    useFormState: zi,
    useActionState: zi,
    useOptimistic: function(l9, u10) {
      var a9 = F7();
      return Z6 !== null ? n1(a9, Z6, l9, u10) : (a9.baseState = l9, [
        l9,
        a9.queue.dispatch
      ]);
    },
    useMemoCache: Se5,
    useCacheRefresh: D1
  }, Ea = null, At = 0;
  function rt4(l9) {
    var u10 = At;
    return At += 1, Ea === null && (Ea = []), w0(Ea, l9, u10);
  }
  function La(l9, u10) {
    u10 = u10.props.ref, l9.ref = u10 !== void 0 ? u10 : null;
  }
  function It2(l9, u10) {
    throw u10.$$typeof === rv ? Error(A6(525)) : (l9 = Object.prototype.toString.call(u10), Error(A6(31, l9 === "[object Object]" ? "object with keys {" + Object.keys(u10).join(", ") + "}" : l9)));
  }
  function Ti(l9) {
    var u10 = l9._init;
    return u10(l9._payload);
  }
  function q1(l9) {
    function u10(h10, v13) {
      if (l9) {
        var y10 = h10.deletions;
        y10 === null ? (h10.deletions = [
          v13
        ], h10.flags |= 16) : y10.push(v13);
      }
    }
    function a9(h10, v13) {
      if (!l9) return null;
      for (; v13 !== null; ) u10(h10, v13), v13 = v13.sibling;
      return null;
    }
    function t8(h10) {
      for (var v13 = /* @__PURE__ */ new Map(); h10 !== null; ) h10.key !== null ? v13.set(h10.key, h10) : v13.set(h10.index, h10), h10 = h10.sibling;
      return v13;
    }
    function n5(h10, v13) {
      return h10 = Pl(h10, v13), h10.index = 0, h10.sibling = null, h10;
    }
    function f11(h10, v13, y10) {
      return h10.index = y10, l9 ? (y10 = h10.alternate, y10 !== null ? (y10 = y10.index, y10 < v13 ? (h10.flags |= 67108866, v13) : y10) : (h10.flags |= 67108866, v13)) : (h10.flags |= 1048576, v13);
    }
    function c6(h10) {
      return l9 && h10.alternate === null && (h10.flags |= 67108866), h10;
    }
    function e8(h10, v13, y10, b12) {
      return v13 === null || v13.tag !== 6 ? (v13 = Uf(y10, h10.mode, b12), v13.return = h10, v13) : (v13 = n5(v13, y10), v13.return = h10, v13);
    }
    function i9(h10, v13, y10, b12) {
      var T8 = y10.type;
      return T8 === ta ? g9(h10, v13, y10.props.children, b12, y10.key) : v13 !== null && (v13.elementType === T8 || typeof T8 == "object" && T8 !== null && T8.$$typeof === vu && Ti(T8) === v13.type) ? (v13 = n5(v13, y10.props), La(v13, y10), v13.return = h10, v13) : (v13 = hn2(y10.type, y10.key, y10.props, null, h10.mode, b12), La(v13, y10), v13.return = h10, v13);
    }
    function d8(h10, v13, y10, b12) {
      return v13 === null || v13.tag !== 4 || v13.stateNode.containerInfo !== y10.containerInfo || v13.stateNode.implementation !== y10.implementation ? (v13 = Hf(y10, h10.mode, b12), v13.return = h10, v13) : (v13 = n5(v13, y10.children || []), v13.return = h10, v13);
    }
    function g9(h10, v13, y10, b12, T8) {
      return v13 === null || v13.tag !== 7 ? (v13 = Zu(y10, h10.mode, b12, T8), v13.return = h10, v13) : (v13 = n5(v13, y10), v13.return = h10, v13);
    }
    function z10(h10, v13, y10) {
      if (typeof v13 == "string" && v13 !== "" || typeof v13 == "number" || typeof v13 == "bigint") return v13 = Uf("" + v13, h10.mode, y10), v13.return = h10, v13;
      if (typeof v13 == "object" && v13 !== null) {
        switch (v13.$$typeof) {
          case Ct2:
            return y10 = hn2(v13.type, v13.key, v13.props, null, h10.mode, y10), La(y10, v13), y10.return = h10, y10;
          case $a:
            return v13 = Hf(v13, h10.mode, y10), v13.return = h10, v13;
          case vu:
            var b12 = v13._init;
            return v13 = b12(v13._payload), z10(h10, v13, y10);
        }
        if (Fa(v13) || ja(v13)) return v13 = Zu(v13, h10.mode, y10, null), v13.return = h10, v13;
        if (typeof v13.then == "function") return z10(h10, rt4(v13), y10);
        if (v13.$$typeof === $l) return z10(h10, Ft3(h10, v13), y10);
        It2(h10, v13);
      }
      return null;
    }
    function S11(h10, v13, y10, b12) {
      var T8 = v13 !== null ? v13.key : null;
      if (typeof y10 == "string" && y10 !== "" || typeof y10 == "number" || typeof y10 == "bigint") return T8 !== null ? null : e8(h10, v13, "" + y10, b12);
      if (typeof y10 == "object" && y10 !== null) {
        switch (y10.$$typeof) {
          case Ct2:
            return y10.key === T8 ? i9(h10, v13, y10, b12) : null;
          case $a:
            return y10.key === T8 ? d8(h10, v13, y10, b12) : null;
          case vu:
            return T8 = y10._init, y10 = T8(y10._payload), S11(h10, v13, y10, b12);
        }
        if (Fa(y10) || ja(y10)) return T8 !== null ? null : g9(h10, v13, y10, b12, null);
        if (typeof y10.then == "function") return S11(h10, v13, rt4(y10), b12);
        if (y10.$$typeof === $l) return S11(h10, v13, Ft3(h10, y10), b12);
        It2(h10, y10);
      }
      return null;
    }
    function m13(h10, v13, y10, b12, T8) {
      if (typeof b12 == "string" && b12 !== "" || typeof b12 == "number" || typeof b12 == "bigint") return h10 = h10.get(y10) || null, e8(v13, h10, "" + b12, T8);
      if (typeof b12 == "object" && b12 !== null) {
        switch (b12.$$typeof) {
          case Ct2:
            return h10 = h10.get(b12.key === null ? y10 : b12.key) || null, i9(v13, h10, b12, T8);
          case $a:
            return h10 = h10.get(b12.key === null ? y10 : b12.key) || null, d8(v13, h10, b12, T8);
          case vu:
            var H6 = b12._init;
            return b12 = H6(b12._payload), m13(h10, v13, y10, b12, T8);
        }
        if (Fa(b12) || ja(b12)) return h10 = h10.get(y10) || null, g9(v13, h10, b12, T8, null);
        if (typeof b12.then == "function") return m13(h10, v13, y10, rt4(b12), T8);
        if (b12.$$typeof === $l) return m13(h10, v13, y10, Ft3(v13, b12), T8);
        It2(v13, b12);
      }
      return null;
    }
    function O6(h10, v13, y10, b12) {
      for (var T8 = null, H6 = null, M5 = v13, D8 = v13 = 0, P7 = null; M5 !== null && D8 < y10.length; D8++) {
        M5.index > D8 ? (P7 = M5, M5 = null) : P7 = M5.sibling;
        var R8 = S11(h10, M5, y10[D8], b12);
        if (R8 === null) {
          M5 === null && (M5 = P7);
          break;
        }
        l9 && M5 && R8.alternate === null && u10(h10, M5), v13 = f11(R8, v13, D8), H6 === null ? T8 = R8 : H6.sibling = R8, H6 = R8, M5 = P7;
      }
      if (D8 === y10.length) return a9(h10, M5), Y10 && Xu(h10, D8), T8;
      if (M5 === null) {
        for (; D8 < y10.length; D8++) M5 = z10(h10, y10[D8], b12), M5 !== null && (v13 = f11(M5, v13, D8), H6 === null ? T8 = M5 : H6.sibling = M5, H6 = M5);
        return Y10 && Xu(h10, D8), T8;
      }
      for (M5 = t8(M5); D8 < y10.length; D8++) P7 = m13(M5, h10, D8, y10[D8], b12), P7 !== null && (l9 && P7.alternate !== null && M5.delete(P7.key === null ? D8 : P7.key), v13 = f11(P7, v13, D8), H6 === null ? T8 = P7 : H6.sibling = P7, H6 = P7);
      return l9 && M5.forEach(function(cu) {
        return u10(h10, cu);
      }), Y10 && Xu(h10, D8), T8;
    }
    function E11(h10, v13, y10, b12) {
      if (y10 == null) throw Error(A6(151));
      for (var T8 = null, H6 = null, M5 = v13, D8 = v13 = 0, P7 = null, R8 = y10.next(); M5 !== null && !R8.done; D8++, R8 = y10.next()) {
        M5.index > D8 ? (P7 = M5, M5 = null) : P7 = M5.sibling;
        var cu = S11(h10, M5, R8.value, b12);
        if (cu === null) {
          M5 === null && (M5 = P7);
          break;
        }
        l9 && M5 && cu.alternate === null && u10(h10, M5), v13 = f11(cu, v13, D8), H6 === null ? T8 = cu : H6.sibling = cu, H6 = cu, M5 = P7;
      }
      if (R8.done) return a9(h10, M5), Y10 && Xu(h10, D8), T8;
      if (M5 === null) {
        for (; !R8.done; D8++, R8 = y10.next()) R8 = z10(h10, R8.value, b12), R8 !== null && (v13 = f11(R8, v13, D8), H6 === null ? T8 = R8 : H6.sibling = R8, H6 = R8);
        return Y10 && Xu(h10, D8), T8;
      }
      for (M5 = t8(M5); !R8.done; D8++, R8 = y10.next()) R8 = m13(M5, h10, D8, R8.value, b12), R8 !== null && (l9 && R8.alternate !== null && M5.delete(R8.key === null ? D8 : R8.key), v13 = f11(R8, v13, D8), H6 === null ? T8 = R8 : H6.sibling = R8, H6 = R8);
      return l9 && M5.forEach(function(Kv) {
        return u10(h10, Kv);
      }), Y10 && Xu(h10, D8), T8;
    }
    function G10(h10, v13, y10, b12) {
      if (typeof y10 == "object" && y10 !== null && y10.type === ta && y10.key === null && (y10 = y10.props.children), typeof y10 == "object" && y10 !== null) {
        switch (y10.$$typeof) {
          case Ct2:
            l: {
              for (var T8 = y10.key; v13 !== null; ) {
                if (v13.key === T8) {
                  if (T8 = y10.type, T8 === ta) {
                    if (v13.tag === 7) {
                      a9(h10, v13.sibling), b12 = n5(v13, y10.props.children), b12.return = h10, h10 = b12;
                      break l;
                    }
                  } else if (v13.elementType === T8 || typeof T8 == "object" && T8 !== null && T8.$$typeof === vu && Ti(T8) === v13.type) {
                    a9(h10, v13.sibling), b12 = n5(v13, y10.props), La(b12, y10), b12.return = h10, h10 = b12;
                    break l;
                  }
                  a9(h10, v13);
                  break;
                } else u10(h10, v13);
                v13 = v13.sibling;
              }
              y10.type === ta ? (b12 = Zu(y10.props.children, h10.mode, b12, y10.key), b12.return = h10, h10 = b12) : (b12 = hn2(y10.type, y10.key, y10.props, null, h10.mode, b12), La(b12, y10), b12.return = h10, h10 = b12);
            }
            return c6(h10);
          case $a:
            l: {
              for (T8 = y10.key; v13 !== null; ) {
                if (v13.key === T8) if (v13.tag === 4 && v13.stateNode.containerInfo === y10.containerInfo && v13.stateNode.implementation === y10.implementation) {
                  a9(h10, v13.sibling), b12 = n5(v13, y10.children || []), b12.return = h10, h10 = b12;
                  break l;
                } else {
                  a9(h10, v13);
                  break;
                }
                else u10(h10, v13);
                v13 = v13.sibling;
              }
              b12 = Hf(y10, h10.mode, b12), b12.return = h10, h10 = b12;
            }
            return c6(h10);
          case vu:
            return T8 = y10._init, y10 = T8(y10._payload), G10(h10, v13, y10, b12);
        }
        if (Fa(y10)) return O6(h10, v13, y10, b12);
        if (ja(y10)) {
          if (T8 = ja(y10), typeof T8 != "function") throw Error(A6(150));
          return y10 = T8.call(y10), E11(h10, v13, y10, b12);
        }
        if (typeof y10.then == "function") return G10(h10, v13, rt4(y10), b12);
        if (y10.$$typeof === $l) return G10(h10, v13, Ft3(h10, y10), b12);
        It2(h10, y10);
      }
      return typeof y10 == "string" && y10 !== "" || typeof y10 == "number" || typeof y10 == "bigint" ? (y10 = "" + y10, v13 !== null && v13.tag === 6 ? (a9(h10, v13.sibling), b12 = n5(v13, y10), b12.return = h10, h10 = b12) : (a9(h10, v13), b12 = Uf(y10, h10.mode, b12), b12.return = h10, h10 = b12), c6(h10)) : a9(h10, v13);
    }
    return function(h10, v13, y10, b12) {
      try {
        At = 0;
        var T8 = G10(h10, v13, y10, b12);
        return Ea = null, T8;
      } catch (M5) {
        if (M5 === Gt2 || M5 === uf) throw M5;
        var H6 = Al(29, M5, null, h10.mode);
        return H6.lanes = b12, H6.return = h10, H6;
      } finally {
      }
    };
  }
  var Ba = q1(true), B1 = q1(false), Yl = Cl(null), Kl = null;
  function du(l9) {
    var u10 = l9.alternate;
    C10(r8, r8.current & 1), C10(Yl, l9), Kl === null && (u10 === null || Na.current !== null || u10.memoizedState !== null) && (Kl = l9);
  }
  function R1(l9) {
    if (l9.tag === 22) {
      if (C10(r8, r8.current), C10(Yl, l9), Kl === null) {
        var u10 = l9.alternate;
        u10 !== null && u10.memoizedState !== null && (Kl = l9);
      }
    } else Su(l9);
  }
  function Su() {
    C10(r8, r8.current), C10(Yl, Yl.current);
  }
  function Il(l9) {
    tl(Yl), Kl === l9 && (Kl = null), tl(r8);
  }
  var r8 = Cl(0);
  function _n(l9) {
    for (var u10 = l9; u10 !== null; ) {
      if (u10.tag === 13) {
        var a9 = u10.memoizedState;
        if (a9 !== null && (a9 = a9.dehydrated, a9 === null || a9.data === "$?" || Gc(a9))) return u10;
      } else if (u10.tag === 19 && u10.memoizedProps.revealOrder !== void 0) {
        if ((u10.flags & 128) !== 0) return u10;
      } else if (u10.child !== null) {
        u10.child.return = u10, u10 = u10.child;
        continue;
      }
      if (u10 === l9) break;
      for (; u10.sibling === null; ) {
        if (u10.return === null || u10.return === l9) return null;
        u10 = u10.return;
      }
      u10.sibling.return = u10.return, u10 = u10.sibling;
    }
    return null;
  }
  function Bf(l9, u10, a9, t8) {
    u10 = l9.memoizedState, a9 = a9(t8, u10), a9 = a9 == null ? u10 : j10({}, u10, a9), l9.memoizedState = a9, l9.lanes === 0 && (l9.updateQueue.baseState = a9);
  }
  var Tc = {
    enqueueSetState: function(l9, u10, a9) {
      l9 = l9._reactInternals;
      var t8 = El(), n5 = Mu(t8);
      n5.payload = u10, a9 != null && (n5.callback = a9), u10 = Eu(l9, n5, t8), u10 !== null && (Dl(u10, l9, t8), tt4(u10, l9, t8));
    },
    enqueueReplaceState: function(l9, u10, a9) {
      l9 = l9._reactInternals;
      var t8 = El(), n5 = Mu(t8);
      n5.tag = 1, n5.payload = u10, a9 != null && (n5.callback = a9), u10 = Eu(l9, n5, t8), u10 !== null && (Dl(u10, l9, t8), tt4(u10, l9, t8));
    },
    enqueueForceUpdate: function(l9, u10) {
      l9 = l9._reactInternals;
      var a9 = El(), t8 = Mu(a9);
      t8.tag = 2, u10 != null && (t8.callback = u10), u10 = Eu(l9, t8, a9), u10 !== null && (Dl(u10, l9, a9), tt4(u10, l9, a9));
    }
  };
  function Mi(l9, u10, a9, t8, n5, f11, c6) {
    return l9 = l9.stateNode, typeof l9.shouldComponentUpdate == "function" ? l9.shouldComponentUpdate(t8, f11, c6) : u10.prototype && u10.prototype.isPureReactComponent ? !gt2(a9, t8) || !gt2(n5, f11) : true;
  }
  function Ei(l9, u10, a9, t8) {
    l9 = u10.state, typeof u10.componentWillReceiveProps == "function" && u10.componentWillReceiveProps(a9, t8), typeof u10.UNSAFE_componentWillReceiveProps == "function" && u10.UNSAFE_componentWillReceiveProps(a9, t8), u10.state !== l9 && Tc.enqueueReplaceState(u10, u10.state, null);
  }
  function Wu(l9, u10) {
    var a9 = u10;
    if ("ref" in u10) {
      a9 = {};
      for (var t8 in u10) t8 !== "ref" && (a9[t8] = u10[t8]);
    }
    if (l9 = l9.defaultProps) {
      a9 === u10 && (a9 = j10({}, a9));
      for (var n5 in l9) a9[n5] === void 0 && (a9[n5] = l9[n5]);
    }
    return a9;
  }
  var Xn = typeof reportError == "function" ? reportError : function(l9) {
    if (typeof globalThis == "object" && typeof globalThis.ErrorEvent == "function") {
      var u10 = new globalThis.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof l9 == "object" && l9 !== null && typeof l9.message == "string" ? String(l9.message) : String(l9),
        error: l9
      });
      if (!globalThis.dispatchEvent(u10)) return;
    } else if (typeof javascript_export_default_env_NODE_ENV_production_default == "object" && typeof javascript_export_default_env_NODE_ENV_production_default.emit == "function") {
      javascript_export_default_env_NODE_ENV_production_default.emit("uncaughtException", l9);
      return;
    }
    console.error(l9);
  };
  function Y1(l9) {
    Xn(l9);
  }
  function o1(l9) {
    console.error(l9);
  }
  function _1(l9) {
    Xn(l9);
  }
  function Gn(l9, u10) {
    try {
      var a9 = l9.onUncaughtError;
      a9(u10.value, {
        componentStack: u10.stack
      });
    } catch (t8) {
      setTimeout(function() {
        throw t8;
      });
    }
  }
  function Di(l9, u10, a9) {
    try {
      var t8 = l9.onCaughtError;
      t8(a9.value, {
        componentStack: a9.stack,
        errorBoundary: u10.tag === 1 ? u10.stateNode : null
      });
    } catch (n5) {
      setTimeout(function() {
        throw n5;
      });
    }
  }
  function Mc(l9, u10, a9) {
    return a9 = Mu(a9), a9.tag = 3, a9.payload = {
      element: null
    }, a9.callback = function() {
      Gn(l9, u10);
    }, a9;
  }
  function X1(l9) {
    return l9 = Mu(l9), l9.tag = 3, l9;
  }
  function G1(l9, u10, a9, t8) {
    var n5 = a9.type.getDerivedStateFromError;
    if (typeof n5 == "function") {
      var f11 = t8.value;
      l9.payload = function() {
        return n5(f11);
      }, l9.callback = function() {
        Di(u10, a9, t8);
      };
    }
    var c6 = a9.stateNode;
    c6 !== null && typeof c6.componentDidCatch == "function" && (l9.callback = function() {
      Di(u10, a9, t8), typeof n5 != "function" && (Du === null ? Du = /* @__PURE__ */ new Set([
        this
      ]) : Du.add(this));
      var e8 = t8.stack;
      this.componentDidCatch(t8.value, {
        componentStack: e8 !== null ? e8 : ""
      });
    });
  }
  function Dy(l9, u10, a9, t8, n5) {
    if (a9.flags |= 32768, t8 !== null && typeof t8 == "object" && typeof t8.then == "function") {
      if (u10 = a9.alternate, u10 !== null && _t3(u10, a9, n5, true), a9 = Yl.current, a9 !== null) {
        switch (a9.tag) {
          case 13:
            return Kl === null ? qc() : a9.alternate === null && J5 === 0 && (J5 = 3), a9.flags &= -257, a9.flags |= 65536, a9.lanes = n5, t8 === dc ? a9.flags |= 16384 : (u10 = a9.updateQueue, u10 === null ? a9.updateQueue = /* @__PURE__ */ new Set([
              t8
            ]) : u10.add(t8), jf(l9, t8, n5)), false;
          case 22:
            return a9.flags |= 65536, t8 === dc ? a9.flags |= 16384 : (u10 = a9.updateQueue, u10 === null ? (u10 = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([
                t8
              ])
            }, a9.updateQueue = u10) : (a9 = u10.retryQueue, a9 === null ? u10.retryQueue = /* @__PURE__ */ new Set([
              t8
            ]) : a9.add(t8)), jf(l9, t8, n5)), false;
        }
        throw Error(A6(435, a9.tag));
      }
      return jf(l9, t8, n5), qc(), false;
    }
    if (Y10) return u10 = Yl.current, u10 !== null ? ((u10.flags & 65536) === 0 && (u10.flags |= 256), u10.flags |= 65536, u10.lanes = n5, t8 !== ec && (l9 = Error(A6(422), {
      cause: t8
    }), bt2(Bl(l9, a9)))) : (t8 !== ec && (u10 = Error(A6(423), {
      cause: t8
    }), bt2(Bl(u10, a9))), l9 = l9.current.alternate, l9.flags |= 65536, n5 &= -n5, l9.lanes |= n5, t8 = Bl(t8, a9), n5 = Mc(l9.stateNode, t8, n5), Nf(l9, n5), J5 !== 4 && (J5 = 2)), false;
    var f11 = Error(A6(520), {
      cause: t8
    });
    if (f11 = Bl(f11, a9), vt3 === null ? vt3 = [
      f11
    ] : vt3.push(f11), J5 !== 4 && (J5 = 2), u10 === null) return true;
    t8 = Bl(t8, a9), a9 = u10;
    do {
      switch (a9.tag) {
        case 3:
          return a9.flags |= 65536, l9 = n5 & -n5, a9.lanes |= l9, l9 = Mc(a9.stateNode, t8, l9), Nf(a9, l9), false;
        case 1:
          if (u10 = a9.type, f11 = a9.stateNode, (a9.flags & 128) === 0 && (typeof u10.getDerivedStateFromError == "function" || f11 !== null && typeof f11.componentDidCatch == "function" && (Du === null || !Du.has(f11)))) return a9.flags |= 65536, n5 &= -n5, a9.lanes |= n5, n5 = X1(n5), G1(n5, l9, a9, t8), Nf(a9, n5), false;
      }
      a9 = a9.return;
    } while (a9 !== null);
    return false;
  }
  var Q1 = Error(A6(461)), al = false;
  function nl(l9, u10, a9, t8) {
    u10.child = l9 === null ? B1(u10, null, a9, t8) : Ba(u10, l9.child, a9, t8);
  }
  function Oi(l9, u10, a9, t8, n5) {
    a9 = a9.render;
    var f11 = u10.ref;
    if ("ref" in t8) {
      var c6 = {};
      for (var e8 in t8) e8 !== "ref" && (c6[e8] = t8[e8]);
    } else c6 = t8;
    return pu(u10), t8 = ie4(l9, u10, a9, c6, f11, n5), e8 = ve7(), l9 !== null && !al ? (he5(l9, u10, n5), tu(l9, u10, n5)) : (Y10 && e8 && ue3(u10), u10.flags |= 1, nl(l9, u10, t8, n5), u10.child);
  }
  function si(l9, u10, a9, t8, n5) {
    if (l9 === null) {
      var f11 = a9.type;
      return typeof f11 == "function" && !le6(f11) && f11.defaultProps === void 0 && a9.compare === null ? (u10.tag = 15, u10.type = f11, Z1(l9, u10, f11, t8, n5)) : (l9 = hn2(a9.type, null, t8, u10, u10.mode, n5), l9.ref = u10.ref, l9.return = u10, u10.child = l9);
    }
    if (f11 = l9.child, !Te5(l9, n5)) {
      var c6 = f11.memoizedProps;
      if (a9 = a9.compare, a9 = a9 !== null ? a9 : gt2, a9(c6, t8) && l9.ref === u10.ref) return tu(l9, u10, n5);
    }
    return u10.flags |= 1, l9 = Pl(f11, t8), l9.ref = u10.ref, l9.return = u10, u10.child = l9;
  }
  function Z1(l9, u10, a9, t8, n5) {
    if (l9 !== null) {
      var f11 = l9.memoizedProps;
      if (gt2(f11, t8) && l9.ref === u10.ref) if (al = false, u10.pendingProps = t8 = f11, Te5(l9, n5)) (l9.flags & 131072) !== 0 && (al = true);
      else return u10.lanes = l9.lanes, tu(l9, u10, n5);
    }
    return Ec(l9, u10, a9, t8, n5);
  }
  function x1(l9, u10, a9) {
    var t8 = u10.pendingProps, n5 = t8.children, f11 = l9 !== null ? l9.memoizedState : null;
    if (t8.mode === "hidden") {
      if ((u10.flags & 128) !== 0) {
        if (t8 = f11 !== null ? f11.baseLanes | a9 : a9, l9 !== null) {
          for (n5 = u10.child = l9.child, f11 = 0; n5 !== null; ) f11 = f11 | n5.lanes | n5.childLanes, n5 = n5.sibling;
          u10.childLanes = f11 & ~t8;
        } else u10.childLanes = 0, u10.child = null;
        return Ui(l9, u10, t8, a9);
      }
      if ((a9 & 536870912) !== 0) u10.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l9 !== null && yn(u10, f11 !== null ? f11.cachePool : null), f11 !== null ? di(u10, f11) : gc(), R1(u10);
      else return u10.lanes = u10.childLanes = 536870912, Ui(l9, u10, f11 !== null ? f11.baseLanes | a9 : a9, a9);
    } else f11 !== null ? (yn(u10, f11.cachePool), di(u10, f11), Su(u10), u10.memoizedState = null) : (l9 !== null && yn(u10, null), gc(), Su(u10));
    return nl(l9, u10, n5, a9), u10.child;
  }
  function Ui(l9, u10, a9, t8) {
    var n5 = ne4();
    return n5 = n5 === null ? null : {
      parent: k13._currentValue,
      pool: n5
    }, u10.memoizedState = {
      baseLanes: a9,
      cachePool: n5
    }, l9 !== null && yn(u10, null), gc(), R1(u10), l9 !== null && _t3(l9, u10, t8, true), null;
  }
  function mn(l9, u10) {
    var a9 = u10.ref;
    if (a9 === null) l9 !== null && l9.ref !== null && (u10.flags |= 4194816);
    else {
      if (typeof a9 != "function" && typeof a9 != "object") throw Error(A6(284));
      (l9 === null || l9.ref !== a9) && (u10.flags |= 4194816);
    }
  }
  function Ec(l9, u10, a9, t8, n5) {
    return pu(u10), a9 = ie4(l9, u10, a9, t8, void 0, n5), t8 = ve7(), l9 !== null && !al ? (he5(l9, u10, n5), tu(l9, u10, n5)) : (Y10 && t8 && ue3(u10), u10.flags |= 1, nl(l9, u10, a9, n5), u10.child);
  }
  function Hi(l9, u10, a9, t8, n5, f11) {
    return pu(u10), u10.updateQueue = null, a9 = r0(u10, t8, a9, n5), k0(l9), t8 = ve7(), l9 !== null && !al ? (he5(l9, u10, f11), tu(l9, u10, f11)) : (Y10 && t8 && ue3(u10), u10.flags |= 1, nl(l9, u10, a9, f11), u10.child);
  }
  function Ni(l9, u10, a9, t8, n5) {
    if (pu(u10), u10.stateNode === null) {
      var f11 = ya, c6 = a9.contextType;
      typeof c6 == "object" && c6 !== null && (f11 = il(c6)), f11 = new a9(t8, f11), u10.memoizedState = f11.state !== null && f11.state !== void 0 ? f11.state : null, f11.updater = Tc, u10.stateNode = f11, f11._reactInternals = u10, f11 = u10.stateNode, f11.props = t8, f11.state = u10.memoizedState, f11.refs = {}, fe5(u10), c6 = a9.contextType, f11.context = typeof c6 == "object" && c6 !== null ? il(c6) : ya, f11.state = u10.memoizedState, c6 = a9.getDerivedStateFromProps, typeof c6 == "function" && (Bf(u10, a9, c6, t8), f11.state = u10.memoizedState), typeof a9.getDerivedStateFromProps == "function" || typeof f11.getSnapshotBeforeUpdate == "function" || typeof f11.UNSAFE_componentWillMount != "function" && typeof f11.componentWillMount != "function" || (c6 = f11.state, typeof f11.componentWillMount == "function" && f11.componentWillMount(), typeof f11.UNSAFE_componentWillMount == "function" && f11.UNSAFE_componentWillMount(), c6 !== f11.state && Tc.enqueueReplaceState(f11, f11.state, null), ft3(u10, t8, f11, n5), nt4(), f11.state = u10.memoizedState), typeof f11.componentDidMount == "function" && (u10.flags |= 4194308), t8 = true;
    } else if (l9 === null) {
      f11 = u10.stateNode;
      var e8 = u10.memoizedProps, i9 = Wu(a9, e8);
      f11.props = i9;
      var d8 = f11.context, g9 = a9.contextType;
      c6 = ya, typeof g9 == "object" && g9 !== null && (c6 = il(g9));
      var z10 = a9.getDerivedStateFromProps;
      g9 = typeof z10 == "function" || typeof f11.getSnapshotBeforeUpdate == "function", e8 = u10.pendingProps !== e8, g9 || typeof f11.UNSAFE_componentWillReceiveProps != "function" && typeof f11.componentWillReceiveProps != "function" || (e8 || d8 !== c6) && Ei(u10, f11, t8, c6), hu = false;
      var S11 = u10.memoizedState;
      f11.state = S11, ft3(u10, t8, f11, n5), nt4(), d8 = u10.memoizedState, e8 || S11 !== d8 || hu ? (typeof z10 == "function" && (Bf(u10, a9, z10, t8), d8 = u10.memoizedState), (i9 = hu || Mi(u10, a9, i9, t8, S11, d8, c6)) ? (g9 || typeof f11.UNSAFE_componentWillMount != "function" && typeof f11.componentWillMount != "function" || (typeof f11.componentWillMount == "function" && f11.componentWillMount(), typeof f11.UNSAFE_componentWillMount == "function" && f11.UNSAFE_componentWillMount()), typeof f11.componentDidMount == "function" && (u10.flags |= 4194308)) : (typeof f11.componentDidMount == "function" && (u10.flags |= 4194308), u10.memoizedProps = t8, u10.memoizedState = d8), f11.props = t8, f11.state = d8, f11.context = c6, t8 = i9) : (typeof f11.componentDidMount == "function" && (u10.flags |= 4194308), t8 = false);
    } else {
      f11 = u10.stateNode, Sc(l9, u10), c6 = u10.memoizedProps, g9 = Wu(a9, c6), f11.props = g9, z10 = u10.pendingProps, S11 = f11.context, d8 = a9.contextType, i9 = ya, typeof d8 == "object" && d8 !== null && (i9 = il(d8)), e8 = a9.getDerivedStateFromProps, (d8 = typeof e8 == "function" || typeof f11.getSnapshotBeforeUpdate == "function") || typeof f11.UNSAFE_componentWillReceiveProps != "function" && typeof f11.componentWillReceiveProps != "function" || (c6 !== z10 || S11 !== i9) && Ei(u10, f11, t8, i9), hu = false, S11 = u10.memoizedState, f11.state = S11, ft3(u10, t8, f11, n5), nt4();
      var m13 = u10.memoizedState;
      c6 !== z10 || S11 !== m13 || hu || l9 !== null && l9.dependencies !== null && qn(l9.dependencies) ? (typeof e8 == "function" && (Bf(u10, a9, e8, t8), m13 = u10.memoizedState), (g9 = hu || Mi(u10, a9, g9, t8, S11, m13, i9) || l9 !== null && l9.dependencies !== null && qn(l9.dependencies)) ? (d8 || typeof f11.UNSAFE_componentWillUpdate != "function" && typeof f11.componentWillUpdate != "function" || (typeof f11.componentWillUpdate == "function" && f11.componentWillUpdate(t8, m13, i9), typeof f11.UNSAFE_componentWillUpdate == "function" && f11.UNSAFE_componentWillUpdate(t8, m13, i9)), typeof f11.componentDidUpdate == "function" && (u10.flags |= 4), typeof f11.getSnapshotBeforeUpdate == "function" && (u10.flags |= 1024)) : (typeof f11.componentDidUpdate != "function" || c6 === l9.memoizedProps && S11 === l9.memoizedState || (u10.flags |= 4), typeof f11.getSnapshotBeforeUpdate != "function" || c6 === l9.memoizedProps && S11 === l9.memoizedState || (u10.flags |= 1024), u10.memoizedProps = t8, u10.memoizedState = m13), f11.props = t8, f11.state = m13, f11.context = i9, t8 = g9) : (typeof f11.componentDidUpdate != "function" || c6 === l9.memoizedProps && S11 === l9.memoizedState || (u10.flags |= 4), typeof f11.getSnapshotBeforeUpdate != "function" || c6 === l9.memoizedProps && S11 === l9.memoizedState || (u10.flags |= 1024), t8 = false);
    }
    return f11 = t8, mn(l9, u10), t8 = (u10.flags & 128) !== 0, f11 || t8 ? (f11 = u10.stateNode, a9 = t8 && typeof a9.getDerivedStateFromError != "function" ? null : f11.render(), u10.flags |= 1, l9 !== null && t8 ? (u10.child = Ba(u10, l9.child, null, n5), u10.child = Ba(u10, null, a9, n5)) : nl(l9, u10, a9, n5), u10.memoizedState = f11.state, l9 = u10.child) : l9 = tu(l9, u10, n5), l9;
  }
  function qi(l9, u10, a9, t8) {
    return ot3(), u10.flags |= 256, nl(l9, u10, a9, t8), u10.child;
  }
  var Rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Yf(l9) {
    return {
      baseLanes: l9,
      cachePool: J0()
    };
  }
  function of(l9, u10, a9) {
    return l9 = l9 !== null ? l9.childLanes & ~a9 : 0, u10 && (l9 |= Rl), l9;
  }
  function V1(l9, u10, a9) {
    var t8 = u10.pendingProps, n5 = false, f11 = (u10.flags & 128) !== 0, c6;
    if ((c6 = f11) || (c6 = l9 !== null && l9.memoizedState === null ? false : (r8.current & 2) !== 0), c6 && (n5 = true, u10.flags &= -129), c6 = (u10.flags & 32) !== 0, u10.flags &= -33, l9 === null) {
      if (Y10) {
        if (n5 ? du(u10) : Su(u10), Y10) {
          var e8 = p9, i9;
          if (i9 = e8) {
            l: {
              for (i9 = e8, e8 = Zl; i9.nodeType !== 8; ) {
                if (!e8) {
                  e8 = null;
                  break l;
                }
                if (i9 = Xl(i9.nextSibling), i9 === null) {
                  e8 = null;
                  break l;
                }
              }
              e8 = i9;
            }
            e8 !== null ? (u10.memoizedState = {
              dehydrated: e8,
              treeContext: xu !== null ? {
                id: Fl,
                overflow: kl
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i9 = Al(18, null, null, 0), i9.stateNode = e8, i9.return = u10, u10.child = i9, vl = u10, p9 = null, i9 = true) : i9 = false;
          }
          i9 || Lu(u10);
        }
        if (e8 = u10.memoizedState, e8 !== null && (e8 = e8.dehydrated, e8 !== null)) return Gc(e8) ? u10.lanes = 32 : u10.lanes = 536870912, null;
        Il(u10);
      }
      return e8 = t8.children, t8 = t8.fallback, n5 ? (Su(u10), n5 = u10.mode, e8 = Qn({
        mode: "hidden",
        children: e8
      }, n5), t8 = Zu(t8, n5, a9, null), e8.return = u10, t8.return = u10, e8.sibling = t8, u10.child = e8, n5 = u10.child, n5.memoizedState = Yf(a9), n5.childLanes = of(l9, c6, a9), u10.memoizedState = Rf, t8) : (du(u10), Dc(u10, e8));
    }
    if (i9 = l9.memoizedState, i9 !== null && (e8 = i9.dehydrated, e8 !== null)) {
      if (f11) u10.flags & 256 ? (du(u10), u10.flags &= -257, u10 = _f(l9, u10, a9)) : u10.memoizedState !== null ? (Su(u10), u10.child = l9.child, u10.flags |= 128, u10 = null) : (Su(u10), n5 = t8.fallback, e8 = u10.mode, t8 = Qn({
        mode: "visible",
        children: t8.children
      }, e8), n5 = Zu(n5, e8, a9, null), n5.flags |= 2, t8.return = u10, n5.return = u10, t8.sibling = n5, u10.child = t8, Ba(u10, l9.child, null, a9), t8 = u10.child, t8.memoizedState = Yf(a9), t8.childLanes = of(l9, c6, a9), u10.memoizedState = Rf, u10 = n5);
      else if (du(u10), Gc(e8)) {
        if (c6 = e8.nextSibling && e8.nextSibling.dataset, c6) var d8 = c6.dgst;
        c6 = d8, t8 = Error(A6(419)), t8.stack = "", t8.digest = c6, bt2({
          value: t8,
          source: null,
          stack: null
        }), u10 = _f(l9, u10, a9);
      } else if (al || _t3(l9, u10, a9, false), c6 = (a9 & l9.childLanes) !== 0, al || c6) {
        if (c6 = V8, c6 !== null && (t8 = a9 & -a9, t8 = (t8 & 42) !== 0 ? 1 : Lc(t8), t8 = (t8 & (c6.suspendedLanes | a9)) !== 0 ? 0 : t8, t8 !== 0 && t8 !== i9.retryLane)) throw i9.retryLane = t8, Qa(l9, t8), Dl(c6, l9, t8), Q1;
        e8.data === "$?" || qc(), u10 = _f(l9, u10, a9);
      } else e8.data === "$?" ? (u10.flags |= 192, u10.child = l9.child, u10 = null) : (l9 = i9.treeContext, p9 = Xl(e8.nextSibling), vl = u10, Y10 = true, Vu = null, Zl = false, l9 !== null && (Hl[Nl++] = Fl, Hl[Nl++] = kl, Hl[Nl++] = xu, Fl = l9.id, kl = l9.overflow, xu = u10), u10 = Dc(u10, t8.children), u10.flags |= 4096);
      return u10;
    }
    return n5 ? (Su(u10), n5 = t8.fallback, e8 = u10.mode, i9 = l9.child, d8 = i9.sibling, t8 = Pl(i9, {
      mode: "hidden",
      children: t8.children
    }), t8.subtreeFlags = i9.subtreeFlags & 65011712, d8 !== null ? n5 = Pl(d8, n5) : (n5 = Zu(n5, e8, a9, null), n5.flags |= 2), n5.return = u10, t8.return = u10, t8.sibling = n5, u10.child = t8, t8 = n5, n5 = u10.child, e8 = l9.child.memoizedState, e8 === null ? e8 = Yf(a9) : (i9 = e8.cachePool, i9 !== null ? (d8 = k13._currentValue, i9 = i9.parent !== d8 ? {
      parent: d8,
      pool: d8
    } : i9) : i9 = J0(), e8 = {
      baseLanes: e8.baseLanes | a9,
      cachePool: i9
    }), n5.memoizedState = e8, n5.childLanes = of(l9, c6, a9), u10.memoizedState = Rf, t8) : (du(u10), a9 = l9.child, l9 = a9.sibling, a9 = Pl(a9, {
      mode: "visible",
      children: t8.children
    }), a9.return = u10, a9.sibling = null, l9 !== null && (c6 = u10.deletions, c6 === null ? (u10.deletions = [
      l9
    ], u10.flags |= 16) : c6.push(l9)), u10.child = a9, u10.memoizedState = null, a9);
  }
  function Dc(l9, u10) {
    return u10 = Qn({
      mode: "visible",
      children: u10
    }, l9.mode), u10.return = l9, l9.child = u10;
  }
  function Qn(l9, u10) {
    return l9 = Al(22, l9, null, u10), l9.lanes = 0, l9.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l9;
  }
  function _f(l9, u10, a9) {
    return Ba(u10, l9.child, null, a9), l9 = Dc(u10, u10.pendingProps.children), l9.flags |= 2, u10.memoizedState = null, l9;
  }
  function Bi(l9, u10, a9) {
    l9.lanes |= u10;
    var t8 = l9.alternate;
    t8 !== null && (t8.lanes |= u10), vc(l9.return, u10, a9);
  }
  function Xf(l9, u10, a9, t8, n5) {
    var f11 = l9.memoizedState;
    f11 === null ? l9.memoizedState = {
      isBackwards: u10,
      rendering: null,
      renderingStartTime: 0,
      last: t8,
      tail: a9,
      tailMode: n5
    } : (f11.isBackwards = u10, f11.rendering = null, f11.renderingStartTime = 0, f11.last = t8, f11.tail = a9, f11.tailMode = n5);
  }
  function j1(l9, u10, a9) {
    var t8 = u10.pendingProps, n5 = t8.revealOrder, f11 = t8.tail;
    if (nl(l9, u10, t8.children, a9), t8 = r8.current, (t8 & 2) !== 0) t8 = t8 & 1 | 2, u10.flags |= 128;
    else {
      if (l9 !== null && (l9.flags & 128) !== 0) l: for (l9 = u10.child; l9 !== null; ) {
        if (l9.tag === 13) l9.memoizedState !== null && Bi(l9, a9, u10);
        else if (l9.tag === 19) Bi(l9, a9, u10);
        else if (l9.child !== null) {
          l9.child.return = l9, l9 = l9.child;
          continue;
        }
        if (l9 === u10) break l;
        for (; l9.sibling === null; ) {
          if (l9.return === null || l9.return === u10) break l;
          l9 = l9.return;
        }
        l9.sibling.return = l9.return, l9 = l9.sibling;
      }
      t8 &= 1;
    }
    switch (C10(r8, t8), n5) {
      case "forwards":
        for (a9 = u10.child, n5 = null; a9 !== null; ) l9 = a9.alternate, l9 !== null && _n(l9) === null && (n5 = a9), a9 = a9.sibling;
        a9 = n5, a9 === null ? (n5 = u10.child, u10.child = null) : (n5 = a9.sibling, a9.sibling = null), Xf(u10, false, n5, a9, f11);
        break;
      case "backwards":
        for (a9 = null, n5 = u10.child, u10.child = null; n5 !== null; ) {
          if (l9 = n5.alternate, l9 !== null && _n(l9) === null) {
            u10.child = n5;
            break;
          }
          l9 = n5.sibling, n5.sibling = a9, a9 = n5, n5 = l9;
        }
        Xf(u10, true, a9, null, f11);
        break;
      case "together":
        Xf(u10, false, null, null, void 0);
        break;
      default:
        u10.memoizedState = null;
    }
    return u10.child;
  }
  function tu(l9, u10, a9) {
    if (l9 !== null && (u10.dependencies = l9.dependencies), Bu |= u10.lanes, (a9 & u10.childLanes) === 0) if (l9 !== null) {
      if (_t3(l9, u10, a9, false), (a9 & u10.childLanes) === 0) return null;
    } else return null;
    if (l9 !== null && u10.child !== l9.child) throw Error(A6(153));
    if (u10.child !== null) {
      for (l9 = u10.child, a9 = Pl(l9, l9.pendingProps), u10.child = a9, a9.return = u10; l9.sibling !== null; ) l9 = l9.sibling, a9 = a9.sibling = Pl(l9, l9.pendingProps), a9.return = u10;
      a9.sibling = null;
    }
    return u10.child;
  }
  function Te5(l9, u10) {
    return (l9.lanes & u10) !== 0 ? true : (l9 = l9.dependencies, !!(l9 !== null && qn(l9)));
  }
  function Oy(l9, u10, a9) {
    switch (u10.tag) {
      case 3:
        Mn(u10, u10.stateNode.containerInfo), yu(u10, k13, l9.memoizedState.cache), ot3();
        break;
      case 27:
      case 5:
        rf(u10);
        break;
      case 4:
        Mn(u10, u10.stateNode.containerInfo);
        break;
      case 10:
        yu(u10, u10.type, u10.memoizedProps.value);
        break;
      case 13:
        var t8 = u10.memoizedState;
        if (t8 !== null) return t8.dehydrated !== null ? (du(u10), u10.flags |= 128, null) : (a9 & u10.child.childLanes) !== 0 ? V1(l9, u10, a9) : (du(u10), l9 = tu(l9, u10, a9), l9 !== null ? l9.sibling : null);
        du(u10);
        break;
      case 19:
        var n5 = (l9.flags & 128) !== 0;
        if (t8 = (a9 & u10.childLanes) !== 0, t8 || (_t3(l9, u10, a9, false), t8 = (a9 & u10.childLanes) !== 0), n5) {
          if (t8) return j1(l9, u10, a9);
          u10.flags |= 128;
        }
        if (n5 = u10.memoizedState, n5 !== null && (n5.rendering = null, n5.tail = null, n5.lastEffect = null), C10(r8, r8.current), t8) break;
        return null;
      case 22:
      case 23:
        return u10.lanes = 0, x1(l9, u10, a9);
      case 24:
        yu(u10, k13, l9.memoizedState.cache);
    }
    return tu(l9, u10, a9);
  }
  function K1(l9, u10, a9) {
    if (l9 !== null) if (l9.memoizedProps !== u10.pendingProps) al = true;
    else {
      if (!Te5(l9, a9) && (u10.flags & 128) === 0) return al = false, Oy(l9, u10, a9);
      al = (l9.flags & 131072) !== 0;
    }
    else al = false, Y10 && (u10.flags & 1048576) !== 0 && L0(u10, Nn, u10.index);
    switch (u10.lanes = 0, u10.tag) {
      case 16:
        l: {
          l9 = u10.pendingProps;
          var t8 = u10.elementType, n5 = t8._init;
          if (t8 = n5(t8._payload), u10.type = t8, typeof t8 == "function") le6(t8) ? (l9 = Wu(t8, l9), u10.tag = 1, u10 = Ni(null, u10, t8, l9, a9)) : (u10.tag = 0, u10 = Ec(null, u10, t8, l9, a9));
          else {
            if (t8 != null) {
              if (n5 = t8.$$typeof, n5 === jc) {
                u10.tag = 11, u10 = Oi(null, u10, t8, l9, a9);
                break l;
              } else if (n5 === Kc) {
                u10.tag = 14, u10 = si(null, u10, t8, l9, a9);
                break l;
              }
            }
            throw u10 = Ff(t8) || t8, Error(A6(306, u10, ""));
          }
        }
        return u10;
      case 0:
        return Ec(l9, u10, u10.type, u10.pendingProps, a9);
      case 1:
        return t8 = u10.type, n5 = Wu(t8, u10.pendingProps), Ni(l9, u10, t8, n5, a9);
      case 3:
        l: {
          if (Mn(u10, u10.stateNode.containerInfo), l9 === null) throw Error(A6(387));
          t8 = u10.pendingProps;
          var f11 = u10.memoizedState;
          n5 = f11.element, Sc(l9, u10), ft3(u10, t8, null, a9);
          var c6 = u10.memoizedState;
          if (t8 = c6.cache, yu(u10, k13, t8), t8 !== f11.cache && hc(u10, [
            k13
          ], a9, true), nt4(), t8 = c6.element, f11.isDehydrated) if (f11 = {
            element: t8,
            isDehydrated: false,
            cache: c6.cache
          }, u10.updateQueue.baseState = f11, u10.memoizedState = f11, u10.flags & 256) {
            u10 = qi(l9, u10, t8, a9);
            break l;
          } else if (t8 !== n5) {
            n5 = Bl(Error(A6(424)), u10), bt2(n5), u10 = qi(l9, u10, t8, a9);
            break l;
          } else {
            switch (l9 = u10.stateNode.containerInfo, l9.nodeType) {
              case 9:
                l9 = l9.body;
                break;
              default:
                l9 = l9.nodeName === "HTML" ? l9.ownerDocument.body : l9;
            }
            for (p9 = Xl(l9.firstChild), vl = u10, Y10 = true, Vu = null, Zl = true, a9 = B1(u10, null, t8, a9), u10.child = a9; a9; ) a9.flags = a9.flags & -3 | 4096, a9 = a9.sibling;
          }
          else {
            if (ot3(), t8 === n5) {
              u10 = tu(l9, u10, a9);
              break l;
            }
            nl(l9, u10, t8, a9);
          }
          u10 = u10.child;
        }
        return u10;
      case 26:
        return mn(l9, u10), l9 === null ? (a9 = $i(u10.type, null, u10.pendingProps, null)) ? u10.memoizedState = a9 : Y10 || (a9 = u10.type, l9 = u10.pendingProps, t8 = Ln(Tu.current).createElement(a9), t8[el] = u10, t8[Sl] = l9, cl(t8, a9, l9), ul(t8), u10.stateNode = t8) : u10.memoizedState = $i(u10.type, l9.memoizedProps, u10.pendingProps, l9.memoizedState), null;
      case 27:
        return rf(u10), l9 === null && Y10 && (t8 = u10.stateNode = Nv(u10.type, u10.pendingProps, Tu.current), vl = u10, Zl = true, n5 = p9, Yu(u10.type) ? (Qc = n5, p9 = Xl(t8.firstChild)) : p9 = n5), nl(l9, u10, u10.pendingProps.children, a9), mn(l9, u10), l9 === null && (u10.flags |= 4194304), u10.child;
      case 5:
        return l9 === null && Y10 && ((n5 = t8 = p9) && (t8 = Fy(t8, u10.type, u10.pendingProps, Zl), t8 !== null ? (u10.stateNode = t8, vl = u10, p9 = Xl(t8.firstChild), Zl = false, n5 = true) : n5 = false), n5 || Lu(u10)), rf(u10), n5 = u10.type, f11 = u10.pendingProps, c6 = l9 !== null ? l9.memoizedProps : null, t8 = f11.children, _c(n5, f11) ? t8 = null : c6 !== null && _c(n5, c6) && (u10.flags |= 32), u10.memoizedState !== null && (n5 = ie4(l9, u10, gy, null, null, a9), Dt3._currentValue = n5), mn(l9, u10), nl(l9, u10, t8, a9), u10.child;
      case 6:
        return l9 === null && Y10 && ((l9 = a9 = p9) && (a9 = ky(a9, u10.pendingProps, Zl), a9 !== null ? (u10.stateNode = a9, vl = u10, p9 = null, l9 = true) : l9 = false), l9 || Lu(u10)), null;
      case 13:
        return V1(l9, u10, a9);
      case 4:
        return Mn(u10, u10.stateNode.containerInfo), t8 = u10.pendingProps, l9 === null ? u10.child = Ba(u10, null, t8, a9) : nl(l9, u10, t8, a9), u10.child;
      case 11:
        return Oi(l9, u10, u10.type, u10.pendingProps, a9);
      case 7:
        return nl(l9, u10, u10.pendingProps, a9), u10.child;
      case 8:
        return nl(l9, u10, u10.pendingProps.children, a9), u10.child;
      case 12:
        return nl(l9, u10, u10.pendingProps.children, a9), u10.child;
      case 10:
        return t8 = u10.pendingProps, yu(u10, u10.type, t8.value), nl(l9, u10, t8.children, a9), u10.child;
      case 9:
        return n5 = u10.type._context, t8 = u10.pendingProps.children, pu(u10), n5 = il(n5), t8 = t8(n5), u10.flags |= 1, nl(l9, u10, t8, a9), u10.child;
      case 14:
        return si(l9, u10, u10.type, u10.pendingProps, a9);
      case 15:
        return Z1(l9, u10, u10.type, u10.pendingProps, a9);
      case 19:
        return j1(l9, u10, a9);
      case 31:
        return t8 = u10.pendingProps, a9 = u10.mode, t8 = {
          mode: t8.mode,
          children: t8.children
        }, l9 === null ? (a9 = Qn(t8, a9), a9.ref = u10.ref, u10.child = a9, a9.return = u10, u10 = a9) : (a9 = Pl(l9.child, t8), a9.ref = u10.ref, u10.child = a9, a9.return = u10, u10 = a9), u10;
      case 22:
        return x1(l9, u10, a9);
      case 24:
        return pu(u10), t8 = il(k13), l9 === null ? (n5 = ne4(), n5 === null && (n5 = V8, f11 = te2(), n5.pooledCache = f11, f11.refCount++, f11 !== null && (n5.pooledCacheLanes |= a9), n5 = f11), u10.memoizedState = {
          parent: t8,
          cache: n5
        }, fe5(u10), yu(u10, k13, n5)) : ((l9.lanes & a9) !== 0 && (Sc(l9, u10), ft3(u10, null, null, a9), nt4()), n5 = l9.memoizedState, f11 = u10.memoizedState, n5.parent !== t8 ? (n5 = {
          parent: t8,
          cache: t8
        }, u10.memoizedState = n5, u10.lanes === 0 && (u10.memoizedState = u10.updateQueue.baseState = n5), yu(u10, k13, t8)) : (t8 = f11.cache, yu(u10, k13, t8), t8 !== n5.cache && hc(u10, [
          k13
        ], a9, true))), nl(l9, u10, u10.pendingProps.children, a9), u10.child;
      case 29:
        throw u10.pendingProps;
    }
    throw Error(A6(156, u10.tag));
  }
  function Jl(l9) {
    l9.flags |= 4;
  }
  function Ri(l9, u10) {
    if (u10.type !== "stylesheet" || (u10.state.loading & 4) !== 0) l9.flags &= -16777217;
    else if (l9.flags |= 16777216, !Rv(u10)) {
      if (u10 = Yl.current, u10 !== null && ((B7 & 4194048) === B7 ? Kl !== null : (B7 & 62914560) !== B7 && (B7 & 536870912) === 0 || u10 !== Kl)) throw at3 = dc, W0;
      l9.flags |= 8192;
    }
  }
  function Pt2(l9, u10) {
    u10 !== null && (l9.flags |= 4), l9.flags & 16384 && (u10 = l9.tag !== 22 ? S0() : 536870912, l9.lanes |= u10, Ra |= u10);
  }
  function pa(l9, u10) {
    if (!Y10) switch (l9.tailMode) {
      case "hidden":
        u10 = l9.tail;
        for (var a9 = null; u10 !== null; ) u10.alternate !== null && (a9 = u10), u10 = u10.sibling;
        a9 === null ? l9.tail = null : a9.sibling = null;
        break;
      case "collapsed":
        a9 = l9.tail;
        for (var t8 = null; a9 !== null; ) a9.alternate !== null && (t8 = a9), a9 = a9.sibling;
        t8 === null ? u10 || l9.tail === null ? l9.tail = null : l9.tail.sibling = null : t8.sibling = null;
    }
  }
  function L6(l9) {
    var u10 = l9.alternate !== null && l9.alternate.child === l9.child, a9 = 0, t8 = 0;
    if (u10) for (var n5 = l9.child; n5 !== null; ) a9 |= n5.lanes | n5.childLanes, t8 |= n5.subtreeFlags & 65011712, t8 |= n5.flags & 65011712, n5.return = l9, n5 = n5.sibling;
    else for (n5 = l9.child; n5 !== null; ) a9 |= n5.lanes | n5.childLanes, t8 |= n5.subtreeFlags, t8 |= n5.flags, n5.return = l9, n5 = n5.sibling;
    return l9.subtreeFlags |= t8, l9.childLanes = a9, u10;
  }
  function sy(l9, u10, a9) {
    var t8 = u10.pendingProps;
    switch (ae6(u10), u10.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return L6(u10), null;
      case 1:
        return L6(u10), null;
      case 3:
        return a9 = u10.stateNode, t8 = null, l9 !== null && (t8 = l9.memoizedState.cache), u10.memoizedState.cache !== t8 && (u10.flags |= 2048), lu(k13), Oa(), a9.pendingContext && (a9.context = a9.pendingContext, a9.pendingContext = null), (l9 === null || l9.child === null) && (Ca(u10) ? Jl(u10) : l9 === null || l9.memoizedState.isDehydrated && (u10.flags & 256) === 0 || (u10.flags |= 1024, ci())), L6(u10), null;
      case 26:
        return a9 = u10.memoizedState, l9 === null ? (Jl(u10), a9 !== null ? (L6(u10), Ri(u10, a9)) : (L6(u10), u10.flags &= -16777217)) : a9 ? a9 !== l9.memoizedState ? (Jl(u10), L6(u10), Ri(u10, a9)) : (L6(u10), u10.flags &= -16777217) : (l9.memoizedProps !== t8 && Jl(u10), L6(u10), u10.flags &= -16777217), null;
      case 27:
        En(u10), a9 = Tu.current;
        var n5 = u10.type;
        if (l9 !== null && u10.stateNode != null) l9.memoizedProps !== t8 && Jl(u10);
        else {
          if (!t8) {
            if (u10.stateNode === null) throw Error(A6(166));
            return L6(u10), null;
          }
          l9 = Vl.current, Ca(u10) ? ni(u10, l9) : (l9 = Nv(n5, t8, a9), u10.stateNode = l9, Jl(u10));
        }
        return L6(u10), null;
      case 5:
        if (En(u10), a9 = u10.type, l9 !== null && u10.stateNode != null) l9.memoizedProps !== t8 && Jl(u10);
        else {
          if (!t8) {
            if (u10.stateNode === null) throw Error(A6(166));
            return L6(u10), null;
          }
          if (l9 = Vl.current, Ca(u10)) ni(u10, l9);
          else {
            switch (n5 = Ln(Tu.current), l9) {
              case 1:
                l9 = n5.createElementNS("http://www.w3.org/2000/svg", a9);
                break;
              case 2:
                l9 = n5.createElementNS("http://www.w3.org/1998/Math/MathML", a9);
                break;
              default:
                switch (a9) {
                  case "svg":
                    l9 = n5.createElementNS("http://www.w3.org/2000/svg", a9);
                    break;
                  case "math":
                    l9 = n5.createElementNS("http://www.w3.org/1998/Math/MathML", a9);
                    break;
                  case "script":
                    l9 = n5.createElement("div"), l9.innerHTML = "<script></script>", l9 = l9.removeChild(l9.firstChild);
                    break;
                  case "select":
                    l9 = typeof t8.is == "string" ? n5.createElement("select", {
                      is: t8.is
                    }) : n5.createElement("select"), t8.multiple ? l9.multiple = true : t8.size && (l9.size = t8.size);
                    break;
                  default:
                    l9 = typeof t8.is == "string" ? n5.createElement(a9, {
                      is: t8.is
                    }) : n5.createElement(a9);
                }
            }
            l9[el] = u10, l9[Sl] = t8;
            l: for (n5 = u10.child; n5 !== null; ) {
              if (n5.tag === 5 || n5.tag === 6) l9.appendChild(n5.stateNode);
              else if (n5.tag !== 4 && n5.tag !== 27 && n5.child !== null) {
                n5.child.return = n5, n5 = n5.child;
                continue;
              }
              if (n5 === u10) break l;
              for (; n5.sibling === null; ) {
                if (n5.return === null || n5.return === u10) break l;
                n5 = n5.return;
              }
              n5.sibling.return = n5.return, n5 = n5.sibling;
            }
            u10.stateNode = l9;
            l: switch (cl(l9, a9, t8), a9) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l9 = !!t8.autoFocus;
                break l;
              case "img":
                l9 = true;
                break l;
              default:
                l9 = false;
            }
            l9 && Jl(u10);
          }
        }
        return L6(u10), u10.flags &= -16777217, null;
      case 6:
        if (l9 && u10.stateNode != null) l9.memoizedProps !== t8 && Jl(u10);
        else {
          if (typeof t8 != "string" && u10.stateNode === null) throw Error(A6(166));
          if (l9 = Tu.current, Ca(u10)) {
            if (l9 = u10.stateNode, a9 = u10.memoizedProps, t8 = null, n5 = vl, n5 !== null) switch (n5.tag) {
              case 27:
              case 5:
                t8 = n5.memoizedProps;
            }
            l9[el] = u10, l9 = !!(l9.nodeValue === a9 || t8 !== null && t8.suppressHydrationWarning === true || sv(l9.nodeValue, a9)), l9 || Lu(u10);
          } else l9 = Ln(l9).createTextNode(t8), l9[el] = u10, u10.stateNode = l9;
        }
        return L6(u10), null;
      case 13:
        if (t8 = u10.memoizedState, l9 === null || l9.memoizedState !== null && l9.memoizedState.dehydrated !== null) {
          if (n5 = Ca(u10), t8 !== null && t8.dehydrated !== null) {
            if (l9 === null) {
              if (!n5) throw Error(A6(318));
              if (n5 = u10.memoizedState, n5 = n5 !== null ? n5.dehydrated : null, !n5) throw Error(A6(317));
              n5[el] = u10;
            } else ot3(), (u10.flags & 128) === 0 && (u10.memoizedState = null), u10.flags |= 4;
            L6(u10), n5 = false;
          } else n5 = ci(), l9 !== null && l9.memoizedState !== null && (l9.memoizedState.hydrationErrors = n5), n5 = true;
          if (!n5) return u10.flags & 256 ? (Il(u10), u10) : (Il(u10), null);
        }
        if (Il(u10), (u10.flags & 128) !== 0) return u10.lanes = a9, u10;
        if (a9 = t8 !== null, l9 = l9 !== null && l9.memoizedState !== null, a9) {
          t8 = u10.child, n5 = null, t8.alternate !== null && t8.alternate.memoizedState !== null && t8.alternate.memoizedState.cachePool !== null && (n5 = t8.alternate.memoizedState.cachePool.pool);
          var f11 = null;
          t8.memoizedState !== null && t8.memoizedState.cachePool !== null && (f11 = t8.memoizedState.cachePool.pool), f11 !== n5 && (t8.flags |= 2048);
        }
        return a9 !== l9 && a9 && (u10.child.flags |= 8192), Pt2(u10, u10.updateQueue), L6(u10), null;
      case 4:
        return Oa(), l9 === null && Ne6(u10.stateNode.containerInfo), L6(u10), null;
      case 10:
        return lu(u10.type), L6(u10), null;
      case 19:
        if (tl(r8), n5 = u10.memoizedState, n5 === null) return L6(u10), null;
        if (t8 = (u10.flags & 128) !== 0, f11 = n5.rendering, f11 === null) if (t8) pa(n5, false);
        else {
          if (J5 !== 0 || l9 !== null && (l9.flags & 128) !== 0) for (l9 = u10.child; l9 !== null; ) {
            if (f11 = _n(l9), f11 !== null) {
              for (u10.flags |= 128, pa(n5, false), l9 = f11.updateQueue, u10.updateQueue = l9, Pt2(u10, l9), u10.subtreeFlags = 0, l9 = a9, a9 = u10.child; a9 !== null; ) C0(a9, l9), a9 = a9.sibling;
              return C10(r8, r8.current & 1 | 2), u10.child;
            }
            l9 = l9.sibling;
          }
          n5.tail !== null && jl() > xn && (u10.flags |= 128, t8 = true, pa(n5, false), u10.lanes = 4194304);
        }
        else {
          if (!t8) if (l9 = _n(f11), l9 !== null) {
            if (u10.flags |= 128, t8 = true, l9 = l9.updateQueue, u10.updateQueue = l9, Pt2(u10, l9), pa(n5, true), n5.tail === null && n5.tailMode === "hidden" && !f11.alternate && !Y10) return L6(u10), null;
          } else 2 * jl() - n5.renderingStartTime > xn && a9 !== 536870912 && (u10.flags |= 128, t8 = true, pa(n5, false), u10.lanes = 4194304);
          n5.isBackwards ? (f11.sibling = u10.child, u10.child = f11) : (l9 = n5.last, l9 !== null ? l9.sibling = f11 : u10.child = f11, n5.last = f11);
        }
        return n5.tail !== null ? (u10 = n5.tail, n5.rendering = u10, n5.tail = u10.sibling, n5.renderingStartTime = jl(), u10.sibling = null, l9 = r8.current, C10(r8, t8 ? l9 & 1 | 2 : l9 & 1), u10) : (L6(u10), null);
      case 22:
      case 23:
        return Il(u10), ce6(), t8 = u10.memoizedState !== null, l9 !== null ? l9.memoizedState !== null !== t8 && (u10.flags |= 8192) : t8 && (u10.flags |= 8192), t8 ? (a9 & 536870912) !== 0 && (u10.flags & 128) === 0 && (L6(u10), u10.subtreeFlags & 6 && (u10.flags |= 8192)) : L6(u10), a9 = u10.updateQueue, a9 !== null && Pt2(u10, a9.retryQueue), a9 = null, l9 !== null && l9.memoizedState !== null && l9.memoizedState.cachePool !== null && (a9 = l9.memoizedState.cachePool.pool), t8 = null, u10.memoizedState !== null && u10.memoizedState.cachePool !== null && (t8 = u10.memoizedState.cachePool.pool), t8 !== a9 && (u10.flags |= 2048), l9 !== null && tl(ju), null;
      case 24:
        return a9 = null, l9 !== null && (a9 = l9.memoizedState.cache), u10.memoizedState.cache !== a9 && (u10.flags |= 2048), lu(k13), L6(u10), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A6(156, u10.tag));
  }
  function Uy(l9, u10) {
    switch (ae6(u10), u10.tag) {
      case 1:
        return l9 = u10.flags, l9 & 65536 ? (u10.flags = l9 & -65537 | 128, u10) : null;
      case 3:
        return lu(k13), Oa(), l9 = u10.flags, (l9 & 65536) !== 0 && (l9 & 128) === 0 ? (u10.flags = l9 & -65537 | 128, u10) : null;
      case 26:
      case 27:
      case 5:
        return En(u10), null;
      case 13:
        if (Il(u10), l9 = u10.memoizedState, l9 !== null && l9.dehydrated !== null) {
          if (u10.alternate === null) throw Error(A6(340));
          ot3();
        }
        return l9 = u10.flags, l9 & 65536 ? (u10.flags = l9 & -65537 | 128, u10) : null;
      case 19:
        return tl(r8), null;
      case 4:
        return Oa(), null;
      case 10:
        return lu(u10.type), null;
      case 22:
      case 23:
        return Il(u10), ce6(), l9 !== null && tl(ju), l9 = u10.flags, l9 & 65536 ? (u10.flags = l9 & -65537 | 128, u10) : null;
      case 24:
        return lu(k13), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function C1(l9, u10) {
    switch (ae6(u10), u10.tag) {
      case 3:
        lu(k13), Oa();
        break;
      case 26:
      case 27:
      case 5:
        En(u10);
        break;
      case 4:
        Oa();
        break;
      case 13:
        Il(u10);
        break;
      case 19:
        tl(r8);
        break;
      case 10:
        lu(u10.type);
        break;
      case 22:
      case 23:
        Il(u10), ce6(), l9 !== null && tl(ju);
        break;
      case 24:
        lu(k13);
    }
  }
  function xt4(l9, u10) {
    try {
      var a9 = u10.updateQueue, t8 = a9 !== null ? a9.lastEffect : null;
      if (t8 !== null) {
        var n5 = t8.next;
        a9 = n5;
        do {
          if ((a9.tag & l9) === l9) {
            t8 = void 0;
            var f11 = a9.create, c6 = a9.inst;
            t8 = f11(), c6.destroy = t8;
          }
          a9 = a9.next;
        } while (a9 !== n5);
      }
    } catch (e8) {
      x10(u10, u10.return, e8);
    }
  }
  function qu(l9, u10, a9) {
    try {
      var t8 = u10.updateQueue, n5 = t8 !== null ? t8.lastEffect : null;
      if (n5 !== null) {
        var f11 = n5.next;
        t8 = f11;
        do {
          if ((t8.tag & l9) === l9) {
            var c6 = t8.inst, e8 = c6.destroy;
            if (e8 !== void 0) {
              c6.destroy = void 0, n5 = u10;
              var i9 = a9, d8 = e8;
              try {
                d8();
              } catch (g9) {
                x10(n5, i9, g9);
              }
            }
          }
          t8 = t8.next;
        } while (t8 !== f11);
      }
    } catch (g9) {
      x10(u10, u10.return, g9);
    }
  }
  function L1(l9) {
    var u10 = l9.updateQueue;
    if (u10 !== null) {
      var a9 = l9.stateNode;
      try {
        F0(u10, a9);
      } catch (t8) {
        x10(l9, l9.return, t8);
      }
    }
  }
  function p1(l9, u10, a9) {
    a9.props = Wu(l9.type, l9.memoizedProps), a9.state = l9.memoizedState;
    try {
      a9.componentWillUnmount();
    } catch (t8) {
      x10(l9, u10, t8);
    }
  }
  function et4(l9, u10) {
    try {
      var a9 = l9.ref;
      if (a9 !== null) {
        switch (l9.tag) {
          case 26:
          case 27:
          case 5:
            var t8 = l9.stateNode;
            break;
          case 30:
            t8 = l9.stateNode;
            break;
          default:
            t8 = l9.stateNode;
        }
        typeof a9 == "function" ? l9.refCleanup = a9(t8) : a9.current = t8;
      }
    } catch (n5) {
      x10(l9, u10, n5);
    }
  }
  function xl(l9, u10) {
    var a9 = l9.ref, t8 = l9.refCleanup;
    if (a9 !== null) if (typeof t8 == "function") try {
      t8();
    } catch (n5) {
      x10(l9, u10, n5);
    } finally {
      l9.refCleanup = null, l9 = l9.alternate, l9 != null && (l9.refCleanup = null);
    }
    else if (typeof a9 == "function") try {
      a9(null);
    } catch (n5) {
      x10(l9, u10, n5);
    }
    else a9.current = null;
  }
  function J1(l9) {
    var u10 = l9.type, a9 = l9.memoizedProps, t8 = l9.stateNode;
    try {
      l: switch (u10) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a9.autoFocus && t8.focus();
          break l;
        case "img":
          a9.src ? t8.src = a9.src : a9.srcSet && (t8.srcset = a9.srcSet);
      }
    } catch (n5) {
      x10(l9, l9.return, n5);
    }
  }
  function Gf(l9, u10, a9) {
    try {
      var t8 = l9.stateNode;
      py(t8, l9.type, a9, u10), t8[Sl] = u10;
    } catch (n5) {
      x10(l9, l9.return, n5);
    }
  }
  function W1(l9) {
    return l9.tag === 5 || l9.tag === 3 || l9.tag === 26 || l9.tag === 27 && Yu(l9.type) || l9.tag === 4;
  }
  function Qf(l9) {
    l: for (; ; ) {
      for (; l9.sibling === null; ) {
        if (l9.return === null || W1(l9.return)) return null;
        l9 = l9.return;
      }
      for (l9.sibling.return = l9.return, l9 = l9.sibling; l9.tag !== 5 && l9.tag !== 6 && l9.tag !== 18; ) {
        if (l9.tag === 27 && Yu(l9.type) || l9.flags & 2 || l9.child === null || l9.tag === 4) continue l;
        l9.child.return = l9, l9 = l9.child;
      }
      if (!(l9.flags & 2)) return l9.stateNode;
    }
  }
  function Oc(l9, u10, a9) {
    var t8 = l9.tag;
    if (t8 === 5 || t8 === 6) l9 = l9.stateNode, u10 ? (a9.nodeType === 9 ? a9.body : a9.nodeName === "HTML" ? a9.ownerDocument.body : a9).insertBefore(l9, u10) : (u10 = a9.nodeType === 9 ? a9.body : a9.nodeName === "HTML" ? a9.ownerDocument.body : a9, u10.appendChild(l9), a9 = a9._reactRootContainer, a9 != null || u10.onclick !== null || (u10.onclick = vf));
    else if (t8 !== 4 && (t8 === 27 && Yu(l9.type) && (a9 = l9.stateNode, u10 = null), l9 = l9.child, l9 !== null)) for (Oc(l9, u10, a9), l9 = l9.sibling; l9 !== null; ) Oc(l9, u10, a9), l9 = l9.sibling;
  }
  function Zn(l9, u10, a9) {
    var t8 = l9.tag;
    if (t8 === 5 || t8 === 6) l9 = l9.stateNode, u10 ? a9.insertBefore(l9, u10) : a9.appendChild(l9);
    else if (t8 !== 4 && (t8 === 27 && Yu(l9.type) && (a9 = l9.stateNode), l9 = l9.child, l9 !== null)) for (Zn(l9, u10, a9), l9 = l9.sibling; l9 !== null; ) Zn(l9, u10, a9), l9 = l9.sibling;
  }
  function w1(l9) {
    var u10 = l9.stateNode, a9 = l9.memoizedProps;
    try {
      for (var t8 = l9.type, n5 = u10.attributes; n5.length; ) u10.removeAttributeNode(n5[0]);
      cl(u10, t8, a9), u10[el] = l9, u10[Sl] = a9;
    } catch (f11) {
      x10(l9, l9.return, f11);
    }
  }
  var wl = false, w5 = false, Zf = false, Yi = typeof WeakSet == "function" ? WeakSet : Set, ll = null;
  function Hy(l9, u10) {
    if (l9 = l9.containerInfo, Yc = wn, l9 = X0(l9), rc(l9)) {
      if ("selectionStart" in l9) var a9 = {
        start: l9.selectionStart,
        end: l9.selectionEnd
      };
      else l: {
        a9 = (a9 = l9.ownerDocument) && a9.defaultView || globalThis;
        var t8 = a9.getSelection && a9.getSelection();
        if (t8 && t8.rangeCount !== 0) {
          a9 = t8.anchorNode;
          var n5 = t8.anchorOffset, f11 = t8.focusNode;
          t8 = t8.focusOffset;
          try {
            a9.nodeType, f11.nodeType;
          } catch {
            a9 = null;
            break l;
          }
          var c6 = 0, e8 = -1, i9 = -1, d8 = 0, g9 = 0, z10 = l9, S11 = null;
          u: for (; ; ) {
            for (var m13; z10 !== a9 || n5 !== 0 && z10.nodeType !== 3 || (e8 = c6 + n5), z10 !== f11 || t8 !== 0 && z10.nodeType !== 3 || (i9 = c6 + t8), z10.nodeType === 3 && (c6 += z10.nodeValue.length), (m13 = z10.firstChild) !== null; ) S11 = z10, z10 = m13;
            for (; ; ) {
              if (z10 === l9) break u;
              if (S11 === a9 && ++d8 === n5 && (e8 = c6), S11 === f11 && ++g9 === t8 && (i9 = c6), (m13 = z10.nextSibling) !== null) break;
              z10 = S11, S11 = z10.parentNode;
            }
            z10 = m13;
          }
          a9 = e8 === -1 || i9 === -1 ? null : {
            start: e8,
            end: i9
          };
        } else a9 = null;
      }
      a9 = a9 || {
        start: 0,
        end: 0
      };
    } else a9 = null;
    for (oc = {
      focusedElem: l9,
      selectionRange: a9
    }, wn = false, ll = u10; ll !== null; ) if (u10 = ll, l9 = u10.child, (u10.subtreeFlags & 1024) !== 0 && l9 !== null) l9.return = u10, ll = l9;
    else for (; ll !== null; ) {
      switch (u10 = ll, f11 = u10.alternate, l9 = u10.flags, u10.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l9 & 1024) !== 0 && f11 !== null) {
            l9 = void 0, a9 = u10, n5 = f11.memoizedProps, f11 = f11.memoizedState, t8 = a9.stateNode;
            try {
              var O6 = Wu(a9.type, n5, a9.elementType === a9.type);
              l9 = t8.getSnapshotBeforeUpdate(O6, f11), t8.__reactInternalSnapshotBeforeUpdate = l9;
            } catch (E11) {
              x10(a9, a9.return, E11);
            }
          }
          break;
        case 3:
          if ((l9 & 1024) !== 0) {
            if (l9 = u10.stateNode.containerInfo, a9 = l9.nodeType, a9 === 9) Xc(l9);
            else if (a9 === 1) switch (l9.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Xc(l9);
                break;
              default:
                l9.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l9 & 1024) !== 0) throw Error(A6(163));
      }
      if (l9 = u10.sibling, l9 !== null) {
        l9.return = u10.return, ll = l9;
        break;
      }
      ll = u10.return;
    }
  }
  function $1(l9, u10, a9) {
    var t8 = a9.flags;
    switch (a9.tag) {
      case 0:
      case 11:
      case 15:
        eu(l9, a9), t8 & 4 && xt4(5, a9);
        break;
      case 1:
        if (eu(l9, a9), t8 & 4) if (l9 = a9.stateNode, u10 === null) try {
          l9.componentDidMount();
        } catch (c6) {
          x10(a9, a9.return, c6);
        }
        else {
          var n5 = Wu(a9.type, u10.memoizedProps);
          u10 = u10.memoizedState;
          try {
            l9.componentDidUpdate(n5, u10, l9.__reactInternalSnapshotBeforeUpdate);
          } catch (c6) {
            x10(a9, a9.return, c6);
          }
        }
        t8 & 64 && L1(a9), t8 & 512 && et4(a9, a9.return);
        break;
      case 3:
        if (eu(l9, a9), t8 & 64 && (l9 = a9.updateQueue, l9 !== null)) {
          if (u10 = null, a9.child !== null) switch (a9.child.tag) {
            case 27:
            case 5:
              u10 = a9.child.stateNode;
              break;
            case 1:
              u10 = a9.child.stateNode;
          }
          try {
            F0(l9, u10);
          } catch (c6) {
            x10(a9, a9.return, c6);
          }
        }
        break;
      case 27:
        u10 === null && t8 & 4 && w1(a9);
      case 26:
      case 5:
        eu(l9, a9), u10 === null && t8 & 4 && J1(a9), t8 & 512 && et4(a9, a9.return);
        break;
      case 12:
        eu(l9, a9);
        break;
      case 13:
        eu(l9, a9), t8 & 4 && r1(l9, a9), t8 & 64 && (l9 = a9.memoizedState, l9 !== null && (l9 = l9.dehydrated, l9 !== null && (a9 = Gy.bind(null, a9), ry(l9, a9))));
        break;
      case 22:
        if (t8 = a9.memoizedState !== null || wl, !t8) {
          u10 = u10 !== null && u10.memoizedState !== null || w5, n5 = wl;
          var f11 = w5;
          wl = t8, (w5 = u10) && !f11 ? iu(l9, a9, (a9.subtreeFlags & 8772) !== 0) : eu(l9, a9), wl = n5, w5 = f11;
        }
        break;
      case 30:
        break;
      default:
        eu(l9, a9);
    }
  }
  function F1(l9) {
    var u10 = l9.alternate;
    u10 !== null && (l9.alternate = null, F1(u10)), l9.child = null, l9.deletions = null, l9.sibling = null, l9.tag === 5 && (u10 = l9.stateNode, u10 !== null && Jc(u10)), l9.stateNode = null, l9.return = null, l9.dependencies = null, l9.memoizedProps = null, l9.memoizedState = null, l9.pendingProps = null, l9.stateNode = null, l9.updateQueue = null;
  }
  var K9 = null, yl = false;
  function Wl(l9, u10, a9) {
    for (a9 = a9.child; a9 !== null; ) k1(l9, u10, a9), a9 = a9.sibling;
  }
  function k1(l9, u10, a9) {
    if (Tl && typeof Tl.onCommitFiberUnmount == "function") try {
      Tl.onCommitFiberUnmount(Nt2, a9);
    } catch {
    }
    switch (a9.tag) {
      case 26:
        w5 || xl(a9, u10), Wl(l9, u10, a9), a9.memoizedState ? a9.memoizedState.count-- : a9.stateNode && (a9 = a9.stateNode, a9.parentNode.removeChild(a9));
        break;
      case 27:
        w5 || xl(a9, u10);
        var t8 = K9, n5 = yl;
        Yu(a9.type) && (K9 = a9.stateNode, yl = false), Wl(l9, u10, a9), yt3(a9.stateNode), K9 = t8, yl = n5;
        break;
      case 5:
        w5 || xl(a9, u10);
      case 6:
        if (t8 = K9, n5 = yl, K9 = null, Wl(l9, u10, a9), K9 = t8, yl = n5, K9 !== null) if (yl) try {
          (K9.nodeType === 9 ? K9.body : K9.nodeName === "HTML" ? K9.ownerDocument.body : K9).removeChild(a9.stateNode);
        } catch (f11) {
          x10(a9, u10, f11);
        }
        else try {
          K9.removeChild(a9.stateNode);
        } catch (f11) {
          x10(a9, u10, f11);
        }
        break;
      case 18:
        K9 !== null && (yl ? (l9 = K9, Ji(l9.nodeType === 9 ? l9.body : l9.nodeName === "HTML" ? l9.ownerDocument.body : l9, a9.stateNode), Ut3(l9)) : Ji(K9, a9.stateNode));
        break;
      case 4:
        t8 = K9, n5 = yl, K9 = a9.stateNode.containerInfo, yl = true, Wl(l9, u10, a9), K9 = t8, yl = n5;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        w5 || qu(2, a9, u10), w5 || qu(4, a9, u10), Wl(l9, u10, a9);
        break;
      case 1:
        w5 || (xl(a9, u10), t8 = a9.stateNode, typeof t8.componentWillUnmount == "function" && p1(a9, u10, t8)), Wl(l9, u10, a9);
        break;
      case 21:
        Wl(l9, u10, a9);
        break;
      case 22:
        w5 = (t8 = w5) || a9.memoizedState !== null, Wl(l9, u10, a9), w5 = t8;
        break;
      default:
        Wl(l9, u10, a9);
    }
  }
  function r1(l9, u10) {
    if (u10.memoizedState === null && (l9 = u10.alternate, l9 !== null && (l9 = l9.memoizedState, l9 !== null && (l9 = l9.dehydrated, l9 !== null)))) try {
      Ut3(l9);
    } catch (a9) {
      x10(u10, u10.return, a9);
    }
  }
  function Ny(l9) {
    switch (l9.tag) {
      case 13:
      case 19:
        var u10 = l9.stateNode;
        return u10 === null && (u10 = l9.stateNode = new Yi()), u10;
      case 22:
        return l9 = l9.stateNode, u10 = l9._retryCache, u10 === null && (u10 = l9._retryCache = new Yi()), u10;
      default:
        throw Error(A6(435, l9.tag));
    }
  }
  function xf(l9, u10) {
    var a9 = Ny(l9);
    u10.forEach(function(t8) {
      var n5 = Qy.bind(null, l9, t8);
      a9.has(t8) || (a9.add(t8), t8.then(n5, n5));
    });
  }
  function gl(l9, u10) {
    var a9 = u10.deletions;
    if (a9 !== null) for (var t8 = 0; t8 < a9.length; t8++) {
      var n5 = a9[t8], f11 = l9, c6 = u10, e8 = c6;
      l: for (; e8 !== null; ) {
        switch (e8.tag) {
          case 27:
            if (Yu(e8.type)) {
              K9 = e8.stateNode, yl = false;
              break l;
            }
            break;
          case 5:
            K9 = e8.stateNode, yl = false;
            break l;
          case 3:
          case 4:
            K9 = e8.stateNode.containerInfo, yl = true;
            break l;
        }
        e8 = e8.return;
      }
      if (K9 === null) throw Error(A6(160));
      k1(f11, c6, n5), K9 = null, yl = false, f11 = n5.alternate, f11 !== null && (f11.return = null), n5.return = null;
    }
    if (u10.subtreeFlags & 13878) for (u10 = u10.child; u10 !== null; ) I1(u10, l9), u10 = u10.sibling;
  }
  var _l = null;
  function I1(l9, u10) {
    var a9 = l9.alternate, t8 = l9.flags;
    switch (l9.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        gl(u10, l9), bl(l9), t8 & 4 && (qu(3, l9, l9.return), xt4(3, l9), qu(5, l9, l9.return));
        break;
      case 1:
        gl(u10, l9), bl(l9), t8 & 512 && (w5 || a9 === null || xl(a9, a9.return)), t8 & 64 && wl && (l9 = l9.updateQueue, l9 !== null && (t8 = l9.callbacks, t8 !== null && (a9 = l9.shared.hiddenCallbacks, l9.shared.hiddenCallbacks = a9 === null ? t8 : a9.concat(t8))));
        break;
      case 26:
        var n5 = _l;
        if (gl(u10, l9), bl(l9), t8 & 512 && (w5 || a9 === null || xl(a9, a9.return)), t8 & 4) {
          var f11 = a9 !== null ? a9.memoizedState : null;
          if (t8 = l9.memoizedState, a9 === null) if (t8 === null) if (l9.stateNode === null) {
            l: {
              t8 = l9.type, a9 = l9.memoizedProps, n5 = n5.ownerDocument || n5;
              u: switch (t8) {
                case "title":
                  f11 = n5.getElementsByTagName("title")[0], (!f11 || f11[Rt3] || f11[el] || f11.namespaceURI === "http://www.w3.org/2000/svg" || f11.hasAttribute("itemprop")) && (f11 = n5.createElement(t8), n5.head.insertBefore(f11, n5.querySelector("head > title"))), cl(f11, t8, a9), f11[el] = l9, ul(f11), t8 = f11;
                  break l;
                case "link":
                  var c6 = ki("link", "href", n5).get(t8 + (a9.href || ""));
                  if (c6) {
                    for (var e8 = 0; e8 < c6.length; e8++) if (f11 = c6[e8], f11.getAttribute("href") === (a9.href == null || a9.href === "" ? null : a9.href) && f11.getAttribute("rel") === (a9.rel == null ? null : a9.rel) && f11.getAttribute("title") === (a9.title == null ? null : a9.title) && f11.getAttribute("crossorigin") === (a9.crossOrigin == null ? null : a9.crossOrigin)) {
                      c6.splice(e8, 1);
                      break u;
                    }
                  }
                  f11 = n5.createElement(t8), cl(f11, t8, a9), n5.head.appendChild(f11);
                  break;
                case "meta":
                  if (c6 = ki("meta", "content", n5).get(t8 + (a9.content || ""))) {
                    for (e8 = 0; e8 < c6.length; e8++) if (f11 = c6[e8], f11.getAttribute("content") === (a9.content == null ? null : "" + a9.content) && f11.getAttribute("name") === (a9.name == null ? null : a9.name) && f11.getAttribute("property") === (a9.property == null ? null : a9.property) && f11.getAttribute("http-equiv") === (a9.httpEquiv == null ? null : a9.httpEquiv) && f11.getAttribute("charset") === (a9.charSet == null ? null : a9.charSet)) {
                      c6.splice(e8, 1);
                      break u;
                    }
                  }
                  f11 = n5.createElement(t8), cl(f11, t8, a9), n5.head.appendChild(f11);
                  break;
                default:
                  throw Error(A6(468, t8));
              }
              f11[el] = l9, ul(f11), t8 = f11;
            }
            l9.stateNode = t8;
          } else ri(n5, l9.type, l9.stateNode);
          else l9.stateNode = Fi(n5, t8, l9.memoizedProps);
          else f11 !== t8 ? (f11 === null ? a9.stateNode !== null && (a9 = a9.stateNode, a9.parentNode.removeChild(a9)) : f11.count--, t8 === null ? ri(n5, l9.type, l9.stateNode) : Fi(n5, t8, l9.memoizedProps)) : t8 === null && l9.stateNode !== null && Gf(l9, l9.memoizedProps, a9.memoizedProps);
        }
        break;
      case 27:
        gl(u10, l9), bl(l9), t8 & 512 && (w5 || a9 === null || xl(a9, a9.return)), a9 !== null && t8 & 4 && Gf(l9, l9.memoizedProps, a9.memoizedProps);
        break;
      case 5:
        if (gl(u10, l9), bl(l9), t8 & 512 && (w5 || a9 === null || xl(a9, a9.return)), l9.flags & 32) {
          n5 = l9.stateNode;
          try {
            Ua(n5, "");
          } catch (m13) {
            x10(l9, l9.return, m13);
          }
        }
        t8 & 4 && l9.stateNode != null && (n5 = l9.memoizedProps, Gf(l9, n5, a9 !== null ? a9.memoizedProps : n5)), t8 & 1024 && (Zf = true);
        break;
      case 6:
        if (gl(u10, l9), bl(l9), t8 & 4) {
          if (l9.stateNode === null) throw Error(A6(162));
          t8 = l9.memoizedProps, a9 = l9.stateNode;
          try {
            a9.nodeValue = t8;
          } catch (m13) {
            x10(l9, l9.return, m13);
          }
        }
        break;
      case 3:
        if (zn = null, n5 = _l, _l = pn(u10.containerInfo), gl(u10, l9), _l = n5, bl(l9), t8 & 4 && a9 !== null && a9.memoizedState.isDehydrated) try {
          Ut3(u10.containerInfo);
        } catch (m13) {
          x10(l9, l9.return, m13);
        }
        Zf && (Zf = false, P1(l9));
        break;
      case 4:
        t8 = _l, _l = pn(l9.stateNode.containerInfo), gl(u10, l9), bl(l9), _l = t8;
        break;
      case 12:
        gl(u10, l9), bl(l9);
        break;
      case 13:
        gl(u10, l9), bl(l9), l9.child.flags & 8192 && l9.memoizedState !== null != (a9 !== null && a9.memoizedState !== null) && (se3 = jl()), t8 & 4 && (t8 = l9.updateQueue, t8 !== null && (l9.updateQueue = null, xf(l9, t8)));
        break;
      case 22:
        n5 = l9.memoizedState !== null;
        var i9 = a9 !== null && a9.memoizedState !== null, d8 = wl, g9 = w5;
        if (wl = d8 || n5, w5 = g9 || i9, gl(u10, l9), w5 = g9, wl = d8, bl(l9), t8 & 8192) l: for (u10 = l9.stateNode, u10._visibility = n5 ? u10._visibility & -2 : u10._visibility | 1, n5 && (a9 === null || i9 || wl || w5 || Gu(l9)), a9 = null, u10 = l9; ; ) {
          if (u10.tag === 5 || u10.tag === 26) {
            if (a9 === null) {
              i9 = a9 = u10;
              try {
                if (f11 = i9.stateNode, n5) c6 = f11.style, typeof c6.setProperty == "function" ? c6.setProperty("display", "none", "important") : c6.display = "none";
                else {
                  e8 = i9.stateNode;
                  var z10 = i9.memoizedProps.style, S11 = z10 != null && z10.hasOwnProperty("display") ? z10.display : null;
                  e8.style.display = S11 == null || typeof S11 == "boolean" ? "" : ("" + S11).trim();
                }
              } catch (m13) {
                x10(i9, i9.return, m13);
              }
            }
          } else if (u10.tag === 6) {
            if (a9 === null) {
              i9 = u10;
              try {
                i9.stateNode.nodeValue = n5 ? "" : i9.memoizedProps;
              } catch (m13) {
                x10(i9, i9.return, m13);
              }
            }
          } else if ((u10.tag !== 22 && u10.tag !== 23 || u10.memoizedState === null || u10 === l9) && u10.child !== null) {
            u10.child.return = u10, u10 = u10.child;
            continue;
          }
          if (u10 === l9) break l;
          for (; u10.sibling === null; ) {
            if (u10.return === null || u10.return === l9) break l;
            a9 === u10 && (a9 = null), u10 = u10.return;
          }
          a9 === u10 && (a9 = null), u10.sibling.return = u10.return, u10 = u10.sibling;
        }
        t8 & 4 && (t8 = l9.updateQueue, t8 !== null && (a9 = t8.retryQueue, a9 !== null && (t8.retryQueue = null, xf(l9, a9))));
        break;
      case 19:
        gl(u10, l9), bl(l9), t8 & 4 && (t8 = l9.updateQueue, t8 !== null && (l9.updateQueue = null, xf(l9, t8)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gl(u10, l9), bl(l9);
    }
  }
  function bl(l9) {
    var u10 = l9.flags;
    if (u10 & 2) {
      try {
        for (var a9, t8 = l9.return; t8 !== null; ) {
          if (W1(t8)) {
            a9 = t8;
            break;
          }
          t8 = t8.return;
        }
        if (a9 == null) throw Error(A6(160));
        switch (a9.tag) {
          case 27:
            var n5 = a9.stateNode, f11 = Qf(l9);
            Zn(l9, f11, n5);
            break;
          case 5:
            var c6 = a9.stateNode;
            a9.flags & 32 && (Ua(c6, ""), a9.flags &= -33);
            var e8 = Qf(l9);
            Zn(l9, e8, c6);
            break;
          case 3:
          case 4:
            var i9 = a9.stateNode.containerInfo, d8 = Qf(l9);
            Oc(l9, d8, i9);
            break;
          default:
            throw Error(A6(161));
        }
      } catch (g9) {
        x10(l9, l9.return, g9);
      }
      l9.flags &= -3;
    }
    u10 & 4096 && (l9.flags &= -4097);
  }
  function P1(l9) {
    if (l9.subtreeFlags & 1024) for (l9 = l9.child; l9 !== null; ) {
      var u10 = l9;
      P1(u10), u10.tag === 5 && u10.flags & 1024 && u10.stateNode.reset(), l9 = l9.sibling;
    }
  }
  function eu(l9, u10) {
    if (u10.subtreeFlags & 8772) for (u10 = u10.child; u10 !== null; ) $1(l9, u10.alternate, u10), u10 = u10.sibling;
  }
  function Gu(l9) {
    for (l9 = l9.child; l9 !== null; ) {
      var u10 = l9;
      switch (u10.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qu(4, u10, u10.return), Gu(u10);
          break;
        case 1:
          xl(u10, u10.return);
          var a9 = u10.stateNode;
          typeof a9.componentWillUnmount == "function" && p1(u10, u10.return, a9), Gu(u10);
          break;
        case 27:
          yt3(u10.stateNode);
        case 26:
        case 5:
          xl(u10, u10.return), Gu(u10);
          break;
        case 22:
          u10.memoizedState === null && Gu(u10);
          break;
        case 30:
          Gu(u10);
          break;
        default:
          Gu(u10);
      }
      l9 = l9.sibling;
    }
  }
  function iu(l9, u10, a9) {
    for (a9 = a9 && (u10.subtreeFlags & 8772) !== 0, u10 = u10.child; u10 !== null; ) {
      var t8 = u10.alternate, n5 = l9, f11 = u10, c6 = f11.flags;
      switch (f11.tag) {
        case 0:
        case 11:
        case 15:
          iu(n5, f11, a9), xt4(4, f11);
          break;
        case 1:
          if (iu(n5, f11, a9), t8 = f11, n5 = t8.stateNode, typeof n5.componentDidMount == "function") try {
            n5.componentDidMount();
          } catch (d8) {
            x10(t8, t8.return, d8);
          }
          if (t8 = f11, n5 = t8.updateQueue, n5 !== null) {
            var e8 = t8.stateNode;
            try {
              var i9 = n5.shared.hiddenCallbacks;
              if (i9 !== null) for (n5.shared.hiddenCallbacks = null, n5 = 0; n5 < i9.length; n5++) $0(i9[n5], e8);
            } catch (d8) {
              x10(t8, t8.return, d8);
            }
          }
          a9 && c6 & 64 && L1(f11), et4(f11, f11.return);
          break;
        case 27:
          w1(f11);
        case 26:
        case 5:
          iu(n5, f11, a9), a9 && t8 === null && c6 & 4 && J1(f11), et4(f11, f11.return);
          break;
        case 12:
          iu(n5, f11, a9);
          break;
        case 13:
          iu(n5, f11, a9), a9 && c6 & 4 && r1(n5, f11);
          break;
        case 22:
          f11.memoizedState === null && iu(n5, f11, a9), et4(f11, f11.return);
          break;
        case 30:
          break;
        default:
          iu(n5, f11, a9);
      }
      u10 = u10.sibling;
    }
  }
  function Me6(l9, u10) {
    var a9 = null;
    l9 !== null && l9.memoizedState !== null && l9.memoizedState.cachePool !== null && (a9 = l9.memoizedState.cachePool.pool), l9 = null, u10.memoizedState !== null && u10.memoizedState.cachePool !== null && (l9 = u10.memoizedState.cachePool.pool), l9 !== a9 && (l9 != null && l9.refCount++, a9 != null && Xt2(a9));
  }
  function Ee5(l9, u10) {
    l9 = null, u10.alternate !== null && (l9 = u10.alternate.memoizedState.cache), u10 = u10.memoizedState.cache, u10 !== l9 && (u10.refCount++, l9 != null && Xt2(l9));
  }
  function Ql(l9, u10, a9, t8) {
    if (u10.subtreeFlags & 10256) for (u10 = u10.child; u10 !== null; ) lv(l9, u10, a9, t8), u10 = u10.sibling;
  }
  function lv(l9, u10, a9, t8) {
    var n5 = u10.flags;
    switch (u10.tag) {
      case 0:
      case 11:
      case 15:
        Ql(l9, u10, a9, t8), n5 & 2048 && xt4(9, u10);
        break;
      case 1:
        Ql(l9, u10, a9, t8);
        break;
      case 3:
        Ql(l9, u10, a9, t8), n5 & 2048 && (l9 = null, u10.alternate !== null && (l9 = u10.alternate.memoizedState.cache), u10 = u10.memoizedState.cache, u10 !== l9 && (u10.refCount++, l9 != null && Xt2(l9)));
        break;
      case 12:
        if (n5 & 2048) {
          Ql(l9, u10, a9, t8), l9 = u10.stateNode;
          try {
            var f11 = u10.memoizedProps, c6 = f11.id, e8 = f11.onPostCommit;
            typeof e8 == "function" && e8(c6, u10.alternate === null ? "mount" : "update", l9.passiveEffectDuration, -0);
          } catch (i9) {
            x10(u10, u10.return, i9);
          }
        } else Ql(l9, u10, a9, t8);
        break;
      case 13:
        Ql(l9, u10, a9, t8);
        break;
      case 23:
        break;
      case 22:
        f11 = u10.stateNode, c6 = u10.alternate, u10.memoizedState !== null ? f11._visibility & 2 ? Ql(l9, u10, a9, t8) : it3(l9, u10) : f11._visibility & 2 ? Ql(l9, u10, a9, t8) : (f11._visibility |= 2, ua(l9, u10, a9, t8, (u10.subtreeFlags & 10256) !== 0)), n5 & 2048 && Me6(c6, u10);
        break;
      case 24:
        Ql(l9, u10, a9, t8), n5 & 2048 && Ee5(u10.alternate, u10);
        break;
      default:
        Ql(l9, u10, a9, t8);
    }
  }
  function ua(l9, u10, a9, t8, n5) {
    for (n5 = n5 && (u10.subtreeFlags & 10256) !== 0, u10 = u10.child; u10 !== null; ) {
      var f11 = l9, c6 = u10, e8 = a9, i9 = t8, d8 = c6.flags;
      switch (c6.tag) {
        case 0:
        case 11:
        case 15:
          ua(f11, c6, e8, i9, n5), xt4(8, c6);
          break;
        case 23:
          break;
        case 22:
          var g9 = c6.stateNode;
          c6.memoizedState !== null ? g9._visibility & 2 ? ua(f11, c6, e8, i9, n5) : it3(f11, c6) : (g9._visibility |= 2, ua(f11, c6, e8, i9, n5)), n5 && d8 & 2048 && Me6(c6.alternate, c6);
          break;
        case 24:
          ua(f11, c6, e8, i9, n5), n5 && d8 & 2048 && Ee5(c6.alternate, c6);
          break;
        default:
          ua(f11, c6, e8, i9, n5);
      }
      u10 = u10.sibling;
    }
  }
  function it3(l9, u10) {
    if (u10.subtreeFlags & 10256) for (u10 = u10.child; u10 !== null; ) {
      var a9 = l9, t8 = u10, n5 = t8.flags;
      switch (t8.tag) {
        case 22:
          it3(a9, t8), n5 & 2048 && Me6(t8.alternate, t8);
          break;
        case 24:
          it3(a9, t8), n5 & 2048 && Ee5(t8.alternate, t8);
          break;
        default:
          it3(a9, t8);
      }
      u10 = u10.sibling;
    }
  }
  var ra = 8192;
  function Iu(l9) {
    if (l9.subtreeFlags & ra) for (l9 = l9.child; l9 !== null; ) uv(l9), l9 = l9.sibling;
  }
  function uv(l9) {
    switch (l9.tag) {
      case 26:
        Iu(l9), l9.flags & ra && l9.memoizedState !== null && hd(_l, l9.memoizedState, l9.memoizedProps);
        break;
      case 5:
        Iu(l9);
        break;
      case 3:
      case 4:
        var u10 = _l;
        _l = pn(l9.stateNode.containerInfo), Iu(l9), _l = u10;
        break;
      case 22:
        l9.memoizedState === null && (u10 = l9.alternate, u10 !== null && u10.memoizedState !== null ? (u10 = ra, ra = 16777216, Iu(l9), ra = u10) : Iu(l9));
        break;
      default:
        Iu(l9);
    }
  }
  function av(l9) {
    var u10 = l9.alternate;
    if (u10 !== null && (l9 = u10.child, l9 !== null)) {
      u10.child = null;
      do
        u10 = l9.sibling, l9.sibling = null, l9 = u10;
      while (l9 !== null);
    }
  }
  function Ja(l9) {
    var u10 = l9.deletions;
    if ((l9.flags & 16) !== 0) {
      if (u10 !== null) for (var a9 = 0; a9 < u10.length; a9++) {
        var t8 = u10[a9];
        ll = t8, nv(t8, l9);
      }
      av(l9);
    }
    if (l9.subtreeFlags & 10256) for (l9 = l9.child; l9 !== null; ) tv(l9), l9 = l9.sibling;
  }
  function tv(l9) {
    switch (l9.tag) {
      case 0:
      case 11:
      case 15:
        Ja(l9), l9.flags & 2048 && qu(9, l9, l9.return);
        break;
      case 3:
        Ja(l9);
        break;
      case 12:
        Ja(l9);
        break;
      case 22:
        var u10 = l9.stateNode;
        l9.memoizedState !== null && u10._visibility & 2 && (l9.return === null || l9.return.tag !== 13) ? (u10._visibility &= -3, gn2(l9)) : Ja(l9);
        break;
      default:
        Ja(l9);
    }
  }
  function gn2(l9) {
    var u10 = l9.deletions;
    if ((l9.flags & 16) !== 0) {
      if (u10 !== null) for (var a9 = 0; a9 < u10.length; a9++) {
        var t8 = u10[a9];
        ll = t8, nv(t8, l9);
      }
      av(l9);
    }
    for (l9 = l9.child; l9 !== null; ) {
      switch (u10 = l9, u10.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, u10, u10.return), gn2(u10);
          break;
        case 22:
          a9 = u10.stateNode, a9._visibility & 2 && (a9._visibility &= -3, gn2(u10));
          break;
        default:
          gn2(u10);
      }
      l9 = l9.sibling;
    }
  }
  function nv(l9, u10) {
    for (; ll !== null; ) {
      var a9 = ll;
      switch (a9.tag) {
        case 0:
        case 11:
        case 15:
          qu(8, a9, u10);
          break;
        case 23:
        case 22:
          if (a9.memoizedState !== null && a9.memoizedState.cachePool !== null) {
            var t8 = a9.memoizedState.cachePool.pool;
            t8 != null && t8.refCount++;
          }
          break;
        case 24:
          Xt2(a9.memoizedState.cache);
      }
      if (t8 = a9.child, t8 !== null) t8.return = a9, ll = t8;
      else l: for (a9 = l9; ll !== null; ) {
        t8 = ll;
        var n5 = t8.sibling, f11 = t8.return;
        if (F1(t8), t8 === a9) {
          ll = null;
          break l;
        }
        if (n5 !== null) {
          n5.return = f11, ll = n5;
          break l;
        }
        ll = f11;
      }
    }
  }
  var qy = {
    getCacheForType: function(l9) {
      var u10 = il(k13), a9 = u10.data.get(l9);
      return a9 === void 0 && (a9 = l9(), u10.data.set(l9, a9)), a9;
    }
  }, By = typeof WeakMap == "function" ? WeakMap : Map, X6 = 0, V8 = null, q9 = null, B7 = 0, _8 = 0, zl = null, zu = false, Za = false, De6 = false, nu = 0, J5 = 0, Bu = 0, Ku = 0, Oe4 = 0, Rl = 0, Ra = 0, vt3 = null, dl = null, sc = false, se3 = 0, xn = 1 / 0, Vn = null, Du = null, fl = 0, Ou = null, Ya = null, Da = 0, Uc = 0, Hc = null, fv = null, ht2 = 0, Nc = null;
  function El() {
    if ((X6 & 2) !== 0 && B7 !== 0) return B7 & -B7;
    if (s8.T !== null) {
      var l9 = Ha;
      return l9 !== 0 ? l9 : He6();
    }
    return b0();
  }
  function cv() {
    Rl === 0 && (Rl = (B7 & 536870912) === 0 || Y10 ? d0() : 536870912);
    var l9 = Yl.current;
    return l9 !== null && (l9.flags |= 32), Rl;
  }
  function Dl(l9, u10, a9) {
    (l9 === V8 && (_8 === 2 || _8 === 9) || l9.cancelPendingCommit !== null) && (oa(l9, 0), Au(l9, B7, Rl, false)), Bt2(l9, a9), ((X6 & 2) === 0 || l9 !== V8) && (l9 === V8 && ((X6 & 2) === 0 && (Ku |= a9), J5 === 4 && Au(l9, B7, Rl, false)), Ll(l9));
  }
  function ev(l9, u10, a9) {
    if ((X6 & 6) !== 0) throw Error(A6(327));
    var t8 = !a9 && (u10 & 124) === 0 && (u10 & l9.expiredLanes) === 0 || qt4(l9, u10), n5 = t8 ? oy(l9, u10) : Vf(l9, u10, true), f11 = t8;
    do {
      if (n5 === 0) {
        Za && !t8 && Au(l9, u10, 0, false);
        break;
      } else {
        if (a9 = l9.current.alternate, f11 && !Ry(a9)) {
          n5 = Vf(l9, u10, false), f11 = false;
          continue;
        }
        if (n5 === 2) {
          if (f11 = u10, l9.errorRecoveryDisabledLanes & f11) var c6 = 0;
          else c6 = l9.pendingLanes & -536870913, c6 = c6 !== 0 ? c6 : c6 & 536870912 ? 536870912 : 0;
          if (c6 !== 0) {
            u10 = c6;
            l: {
              var e8 = l9;
              n5 = vt3;
              var i9 = e8.current.memoizedState.isDehydrated;
              if (i9 && (oa(e8, c6).flags |= 256), c6 = Vf(e8, c6, false), c6 !== 2) {
                if (De6 && !i9) {
                  e8.errorRecoveryDisabledLanes |= f11, Ku |= f11, n5 = 4;
                  break l;
                }
                f11 = dl, dl = n5, f11 !== null && (dl === null ? dl = f11 : dl.push.apply(dl, f11));
              }
              n5 = c6;
            }
            if (f11 = false, n5 !== 2) continue;
          }
        }
        if (n5 === 1) {
          oa(l9, 0), Au(l9, u10, 0, true);
          break;
        }
        l: {
          switch (t8 = l9, f11 = n5, f11) {
            case 0:
            case 1:
              throw Error(A6(345));
            case 4:
              if ((u10 & 4194048) !== u10) break;
            case 6:
              Au(t8, u10, Rl, !zu);
              break l;
            case 2:
              dl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A6(329));
          }
          if ((u10 & 62914560) === u10 && (n5 = se3 + 300 - jl(), 10 < n5)) {
            if (Au(t8, u10, Rl, !zu), Fn(t8, 0, true) !== 0) break l;
            t8.timeoutHandle = Hv(oi.bind(null, t8, a9, dl, Vn, sc, u10, Rl, Ku, Ra, zu, f11, 2, -0, 0), n5);
            break l;
          }
          oi(t8, a9, dl, Vn, sc, u10, Rl, Ku, Ra, zu, f11, 0, -0, 0);
        }
      }
      break;
    } while (true);
    Ll(l9);
  }
  function oi(l9, u10, a9, t8, n5, f11, c6, e8, i9, d8, g9, z10, S11, m13) {
    if (l9.timeoutHandle = -1, z10 = u10.subtreeFlags, (z10 & 8192 || (z10 & 16785408) === 16785408) && (Et2 = {
      stylesheets: null,
      count: 0,
      unsuspend: vd
    }, uv(u10), z10 = yd(), z10 !== null)) {
      l9.cancelPendingCommit = z10(Xi.bind(null, l9, u10, f11, a9, t8, n5, c6, e8, i9, g9, 1, S11, m13)), Au(l9, f11, c6, !d8);
      return;
    }
    Xi(l9, u10, f11, a9, t8, n5, c6, e8, i9);
  }
  function Ry(l9) {
    for (var u10 = l9; ; ) {
      var a9 = u10.tag;
      if ((a9 === 0 || a9 === 11 || a9 === 15) && u10.flags & 16384 && (a9 = u10.updateQueue, a9 !== null && (a9 = a9.stores, a9 !== null))) for (var t8 = 0; t8 < a9.length; t8++) {
        var n5 = a9[t8], f11 = n5.getSnapshot;
        n5 = n5.value;
        try {
          if (!Ol(f11(), n5)) return false;
        } catch {
          return false;
        }
      }
      if (a9 = u10.child, u10.subtreeFlags & 16384 && a9 !== null) a9.return = u10, u10 = a9;
      else {
        if (u10 === l9) break;
        for (; u10.sibling === null; ) {
          if (u10.return === null || u10.return === l9) return true;
          u10 = u10.return;
        }
        u10.sibling.return = u10.return, u10 = u10.sibling;
      }
    }
    return true;
  }
  function Au(l9, u10, a9, t8) {
    u10 &= ~Oe4, u10 &= ~Ku, l9.suspendedLanes |= u10, l9.pingedLanes &= ~u10, t8 && (l9.warmLanes |= u10), t8 = l9.expirationTimes;
    for (var n5 = u10; 0 < n5; ) {
      var f11 = 31 - Ml(n5), c6 = 1 << f11;
      t8[f11] = -1, n5 &= ~c6;
    }
    a9 !== 0 && m0(l9, a9, u10);
  }
  function ff() {
    return (X6 & 6) === 0 ? (Vt2(0, false), false) : true;
  }
  function Ue6() {
    if (q9 !== null) {
      if (_8 === 0) var l9 = q9.return;
      else l9 = q9, rl = ku = null, ye7(l9), Ea = null, At = 0, l9 = q9;
      for (; l9 !== null; ) C1(l9.alternate, l9), l9 = l9.return;
      q9 = null;
    }
  }
  function oa(l9, u10) {
    var a9 = l9.timeoutHandle;
    a9 !== -1 && (l9.timeoutHandle = -1, Wy(a9)), a9 = l9.cancelPendingCommit, a9 !== null && (l9.cancelPendingCommit = null, a9()), Ue6(), V8 = l9, q9 = a9 = Pl(l9.current, null), B7 = u10, _8 = 0, zl = null, zu = false, Za = qt4(l9, u10), De6 = false, Ra = Rl = Oe4 = Ku = Bu = J5 = 0, dl = vt3 = null, sc = false, (u10 & 8) !== 0 && (u10 |= u10 & 32);
    var t8 = l9.entangledLanes;
    if (t8 !== 0) for (l9 = l9.entanglements, t8 &= u10; 0 < t8; ) {
      var n5 = 31 - Ml(t8), f11 = 1 << n5;
      u10 |= l9[n5], t8 &= ~f11;
    }
    return nu = u10, Pn(), a9;
  }
  function iv(l9, u10) {
    U9 = null, s8.H = on, u10 === Gt2 || u10 === uf ? (u10 = hi(), _8 = 3) : u10 === W0 ? (u10 = hi(), _8 = 4) : _8 = u10 === Q1 ? 8 : u10 !== null && typeof u10 == "object" && typeof u10.then == "function" ? 6 : 1, zl = u10, q9 === null && (J5 = 1, Gn(l9, Bl(u10, l9.current)));
  }
  function vv() {
    var l9 = s8.H;
    return s8.H = on, l9 === null ? on : l9;
  }
  function hv() {
    var l9 = s8.A;
    return s8.A = qy, l9;
  }
  function qc() {
    J5 = 4, zu || (B7 & 4194048) !== B7 && Yl.current !== null || (Za = true), (Bu & 134217727) === 0 && (Ku & 134217727) === 0 || V8 === null || Au(V8, B7, Rl, false);
  }
  function Vf(l9, u10, a9) {
    var t8 = X6;
    X6 |= 2;
    var n5 = vv(), f11 = hv();
    (V8 !== l9 || B7 !== u10) && (Vn = null, oa(l9, u10)), u10 = false;
    var c6 = J5;
    l: do
      try {
        if (_8 !== 0 && q9 !== null) {
          var e8 = q9, i9 = zl;
          switch (_8) {
            case 8:
              Ue6(), c6 = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Yl.current === null && (u10 = true);
              var d8 = _8;
              if (_8 = 0, zl = null, ma(l9, e8, i9, d8), a9 && Za) {
                c6 = 0;
                break l;
              }
              break;
            default:
              d8 = _8, _8 = 0, zl = null, ma(l9, e8, i9, d8);
          }
        }
        Yy(), c6 = J5;
        break;
      } catch (g9) {
        iv(l9, g9);
      }
    while (true);
    return u10 && l9.shellSuspendCounter++, rl = ku = null, X6 = t8, s8.H = n5, s8.A = f11, q9 === null && (V8 = null, B7 = 0, Pn()), c6;
  }
  function Yy() {
    for (; q9 !== null; ) yv(q9);
  }
  function oy(l9, u10) {
    var a9 = X6;
    X6 |= 2;
    var t8 = vv(), n5 = hv();
    V8 !== l9 || B7 !== u10 ? (Vn = null, xn = jl() + 500, oa(l9, u10)) : Za = qt4(l9, u10);
    l: do
      try {
        if (_8 !== 0 && q9 !== null) {
          u10 = q9;
          var f11 = zl;
          u: switch (_8) {
            case 1:
              _8 = 0, zl = null, ma(l9, u10, f11, 1);
              break;
            case 2:
            case 9:
              if (vi(f11)) {
                _8 = 0, zl = null, _i(u10);
                break;
              }
              u10 = function() {
                _8 !== 2 && _8 !== 9 || V8 !== l9 || (_8 = 7), Ll(l9);
              }, f11.then(u10, u10);
              break l;
            case 3:
              _8 = 7;
              break l;
            case 4:
              _8 = 5;
              break l;
            case 7:
              vi(f11) ? (_8 = 0, zl = null, _i(u10)) : (_8 = 0, zl = null, ma(l9, u10, f11, 7));
              break;
            case 5:
              var c6 = null;
              switch (q9.tag) {
                case 26:
                  c6 = q9.memoizedState;
                case 5:
                case 27:
                  var e8 = q9;
                  if (!c6 || Rv(c6)) {
                    _8 = 0, zl = null;
                    var i9 = e8.sibling;
                    if (i9 !== null) q9 = i9;
                    else {
                      var d8 = e8.return;
                      d8 !== null ? (q9 = d8, cf(d8)) : q9 = null;
                    }
                    break u;
                  }
              }
              _8 = 0, zl = null, ma(l9, u10, f11, 5);
              break;
            case 6:
              _8 = 0, zl = null, ma(l9, u10, f11, 6);
              break;
            case 8:
              Ue6(), J5 = 6;
              break l;
            default:
              throw Error(A6(462));
          }
        }
        _y();
        break;
      } catch (g9) {
        iv(l9, g9);
      }
    while (true);
    return rl = ku = null, s8.H = t8, s8.A = n5, X6 = a9, q9 !== null ? 0 : (V8 = null, B7 = 0, Pn(), J5);
  }
  function _y() {
    for (; q9 !== null && !uh(); ) yv(q9);
  }
  function yv(l9) {
    var u10 = K1(l9.alternate, l9, nu);
    l9.memoizedProps = l9.pendingProps, u10 === null ? cf(l9) : q9 = u10;
  }
  function _i(l9) {
    var u10 = l9, a9 = u10.alternate;
    switch (u10.tag) {
      case 15:
      case 0:
        u10 = Hi(a9, u10, u10.pendingProps, u10.type, void 0, B7);
        break;
      case 11:
        u10 = Hi(a9, u10, u10.pendingProps, u10.type.render, u10.ref, B7);
        break;
      case 5:
        ye7(u10);
      default:
        C1(a9, u10), u10 = q9 = C0(u10, nu), u10 = K1(a9, u10, nu);
    }
    l9.memoizedProps = l9.pendingProps, u10 === null ? cf(l9) : q9 = u10;
  }
  function ma(l9, u10, a9, t8) {
    rl = ku = null, ye7(u10), Ea = null, At = 0;
    var n5 = u10.return;
    try {
      if (Dy(l9, n5, u10, a9, B7)) {
        J5 = 1, Gn(l9, Bl(a9, l9.current)), q9 = null;
        return;
      }
    } catch (f11) {
      if (n5 !== null) throw q9 = n5, f11;
      J5 = 1, Gn(l9, Bl(a9, l9.current)), q9 = null;
      return;
    }
    u10.flags & 32768 ? (Y10 || t8 === 1 ? l9 = true : Za || (B7 & 536870912) !== 0 ? l9 = false : (zu = l9 = true, (t8 === 2 || t8 === 9 || t8 === 3 || t8 === 6) && (t8 = Yl.current, t8 !== null && t8.tag === 13 && (t8.flags |= 16384))), dv(u10, l9)) : cf(u10);
  }
  function cf(l9) {
    var u10 = l9;
    do {
      if ((u10.flags & 32768) !== 0) {
        dv(u10, zu);
        return;
      }
      l9 = u10.return;
      var a9 = sy(u10.alternate, u10, nu);
      if (a9 !== null) {
        q9 = a9;
        return;
      }
      if (u10 = u10.sibling, u10 !== null) {
        q9 = u10;
        return;
      }
      q9 = u10 = l9;
    } while (u10 !== null);
    J5 === 0 && (J5 = 5);
  }
  function dv(l9, u10) {
    do {
      var a9 = Uy(l9.alternate, l9);
      if (a9 !== null) {
        a9.flags &= 32767, q9 = a9;
        return;
      }
      if (a9 = l9.return, a9 !== null && (a9.flags |= 32768, a9.subtreeFlags = 0, a9.deletions = null), !u10 && (l9 = l9.sibling, l9 !== null)) {
        q9 = l9;
        return;
      }
      q9 = l9 = a9;
    } while (l9 !== null);
    J5 = 6, q9 = null;
  }
  function Xi(l9, u10, a9, t8, n5, f11, c6, e8, i9) {
    l9.cancelPendingCommit = null;
    do
      ef();
    while (fl !== 0);
    if ((X6 & 6) !== 0) throw Error(A6(327));
    if (u10 !== null) {
      if (u10 === l9.current) throw Error(A6(177));
      if (f11 = u10.lanes | u10.childLanes, f11 |= Ic, yh(l9, a9, f11, c6, e8, i9), l9 === V8 && (q9 = V8 = null, B7 = 0), Ya = u10, Ou = l9, Da = a9, Uc = f11, Hc = n5, fv = t8, (u10.subtreeFlags & 10256) !== 0 || (u10.flags & 10256) !== 0 ? (l9.callbackNode = null, l9.callbackPriority = 0, Zy(Dn, function() {
        return zv(true), null;
      })) : (l9.callbackNode = null, l9.callbackPriority = 0), t8 = (u10.flags & 13878) !== 0, (u10.subtreeFlags & 13878) !== 0 || t8) {
        t8 = s8.T, s8.T = null, n5 = o7.p, o7.p = 2, c6 = X6, X6 |= 4;
        try {
          Hy(l9, u10, a9);
        } finally {
          X6 = c6, o7.p = n5, s8.T = t8;
        }
      }
      fl = 1, Sv(), mv(), gv();
    }
  }
  function Sv() {
    if (fl === 1) {
      fl = 0;
      var l9 = Ou, u10 = Ya, a9 = (u10.flags & 13878) !== 0;
      if ((u10.subtreeFlags & 13878) !== 0 || a9) {
        a9 = s8.T, s8.T = null;
        var t8 = o7.p;
        o7.p = 2;
        var n5 = X6;
        X6 |= 4;
        try {
          I1(u10, l9);
          var f11 = oc, c6 = X0(l9.containerInfo), e8 = f11.focusedElem, i9 = f11.selectionRange;
          if (c6 !== e8 && e8 && e8.ownerDocument && _0(e8.ownerDocument.documentElement, e8)) {
            if (i9 !== null && rc(e8)) {
              var d8 = i9.start, g9 = i9.end;
              if (g9 === void 0 && (g9 = d8), "selectionStart" in e8) e8.selectionStart = d8, e8.selectionEnd = Math.min(g9, e8.value.length);
              else {
                var z10 = e8.ownerDocument || document, S11 = z10 && z10.defaultView || globalThis;
                if (S11.getSelection) {
                  var m13 = S11.getSelection(), O6 = e8.textContent.length, E11 = Math.min(i9.start, O6), G10 = i9.end === void 0 ? E11 : Math.min(i9.end, O6);
                  !m13.extend && E11 > G10 && (c6 = G10, G10 = E11, E11 = c6);
                  var h10 = ui(e8, E11), v13 = ui(e8, G10);
                  if (h10 && v13 && (m13.rangeCount !== 1 || m13.anchorNode !== h10.node || m13.anchorOffset !== h10.offset || m13.focusNode !== v13.node || m13.focusOffset !== v13.offset)) {
                    var y10 = z10.createRange();
                    y10.setStart(h10.node, h10.offset), m13.removeAllRanges(), E11 > G10 ? (m13.addRange(y10), m13.extend(v13.node, v13.offset)) : (y10.setEnd(v13.node, v13.offset), m13.addRange(y10));
                  }
                }
              }
            }
            for (z10 = [], m13 = e8; m13 = m13.parentNode; ) m13.nodeType === 1 && z10.push({
              element: m13,
              left: m13.scrollLeft,
              top: m13.scrollTop
            });
            for (typeof e8.focus == "function" && e8.focus(), e8 = 0; e8 < z10.length; e8++) {
              var b12 = z10[e8];
              b12.element.scrollLeft = b12.left, b12.element.scrollTop = b12.top;
            }
          }
          wn = !!Yc, oc = Yc = null;
        } finally {
          X6 = n5, o7.p = t8, s8.T = a9;
        }
      }
      l9.current = u10, fl = 2;
    }
  }
  function mv() {
    if (fl === 2) {
      fl = 0;
      var l9 = Ou, u10 = Ya, a9 = (u10.flags & 8772) !== 0;
      if ((u10.subtreeFlags & 8772) !== 0 || a9) {
        a9 = s8.T, s8.T = null;
        var t8 = o7.p;
        o7.p = 2;
        var n5 = X6;
        X6 |= 4;
        try {
          $1(l9, u10.alternate, u10);
        } finally {
          X6 = n5, o7.p = t8, s8.T = a9;
        }
      }
      fl = 3;
    }
  }
  function gv() {
    if (fl === 4 || fl === 3) {
      fl = 0, ah();
      var l9 = Ou, u10 = Ya, a9 = Da, t8 = fv;
      (u10.subtreeFlags & 10256) !== 0 || (u10.flags & 10256) !== 0 ? fl = 5 : (fl = 0, Ya = Ou = null, bv(l9, l9.pendingLanes));
      var n5 = l9.pendingLanes;
      if (n5 === 0 && (Du = null), pc(a9), u10 = u10.stateNode, Tl && typeof Tl.onCommitFiberRoot == "function") try {
        Tl.onCommitFiberRoot(Nt2, u10, void 0, (u10.current.flags & 128) === 128);
      } catch {
      }
      if (t8 !== null) {
        u10 = s8.T, n5 = o7.p, o7.p = 2, s8.T = null;
        try {
          for (var f11 = l9.onRecoverableError, c6 = 0; c6 < t8.length; c6++) {
            var e8 = t8[c6];
            f11(e8.value, {
              componentStack: e8.stack
            });
          }
        } finally {
          s8.T = u10, o7.p = n5;
        }
      }
      (Da & 3) !== 0 && ef(), Ll(l9), n5 = l9.pendingLanes, (a9 & 4194090) !== 0 && (n5 & 42) !== 0 ? l9 === Nc ? ht2++ : (ht2 = 0, Nc = l9) : ht2 = 0, Vt2(0, false);
    }
  }
  function bv(l9, u10) {
    (l9.pooledCacheLanes &= u10) === 0 && (u10 = l9.pooledCache, u10 != null && (l9.pooledCache = null, Xt2(u10)));
  }
  function ef(l9) {
    return Sv(), mv(), gv(), zv(l9);
  }
  function zv() {
    if (fl !== 5) return false;
    var l9 = Ou, u10 = Uc;
    Uc = 0;
    var a9 = pc(Da), t8 = s8.T, n5 = o7.p;
    try {
      o7.p = 32 > a9 ? 32 : a9, s8.T = null, a9 = Hc, Hc = null;
      var f11 = Ou, c6 = Da;
      if (fl = 0, Ya = Ou = null, Da = 0, (X6 & 6) !== 0) throw Error(A6(331));
      var e8 = X6;
      if (X6 |= 4, tv(f11.current), lv(f11, f11.current, c6, a9), X6 = e8, Vt2(0, false), Tl && typeof Tl.onPostCommitFiberRoot == "function") try {
        Tl.onPostCommitFiberRoot(Nt2, f11);
      } catch {
      }
      return true;
    } finally {
      o7.p = n5, s8.T = t8, bv(l9, u10);
    }
  }
  function Gi(l9, u10, a9) {
    u10 = Bl(a9, u10), u10 = Mc(l9.stateNode, u10, 2), l9 = Eu(l9, u10, 2), l9 !== null && (Bt2(l9, 2), Ll(l9));
  }
  function x10(l9, u10, a9) {
    if (l9.tag === 3) Gi(l9, l9, a9);
    else for (; u10 !== null; ) {
      if (u10.tag === 3) {
        Gi(u10, l9, a9);
        break;
      } else if (u10.tag === 1) {
        var t8 = u10.stateNode;
        if (typeof u10.type.getDerivedStateFromError == "function" || typeof t8.componentDidCatch == "function" && (Du === null || !Du.has(t8))) {
          l9 = Bl(a9, l9), a9 = X1(2), t8 = Eu(u10, a9, 2), t8 !== null && (G1(a9, t8, u10, l9), Bt2(t8, 2), Ll(t8));
          break;
        }
      }
      u10 = u10.return;
    }
  }
  function jf(l9, u10, a9) {
    var t8 = l9.pingCache;
    if (t8 === null) {
      t8 = l9.pingCache = new By();
      var n5 = /* @__PURE__ */ new Set();
      t8.set(u10, n5);
    } else n5 = t8.get(u10), n5 === void 0 && (n5 = /* @__PURE__ */ new Set(), t8.set(u10, n5));
    n5.has(a9) || (De6 = true, n5.add(a9), l9 = Xy.bind(null, l9, u10, a9), u10.then(l9, l9));
  }
  function Xy(l9, u10, a9) {
    var t8 = l9.pingCache;
    t8 !== null && t8.delete(u10), l9.pingedLanes |= l9.suspendedLanes & a9, l9.warmLanes &= ~a9, V8 === l9 && (B7 & a9) === a9 && (J5 === 4 || J5 === 3 && (B7 & 62914560) === B7 && 300 > jl() - se3 ? (X6 & 2) === 0 && oa(l9, 0) : Oe4 |= a9, Ra === B7 && (Ra = 0)), Ll(l9);
  }
  function Av(l9, u10) {
    u10 === 0 && (u10 = S0()), l9 = Qa(l9, u10), l9 !== null && (Bt2(l9, u10), Ll(l9));
  }
  function Gy(l9) {
    var u10 = l9.memoizedState, a9 = 0;
    u10 !== null && (a9 = u10.retryLane), Av(l9, a9);
  }
  function Qy(l9, u10) {
    var a9 = 0;
    switch (l9.tag) {
      case 13:
        var t8 = l9.stateNode, n5 = l9.memoizedState;
        n5 !== null && (a9 = n5.retryLane);
        break;
      case 19:
        t8 = l9.stateNode;
        break;
      case 22:
        t8 = l9.stateNode._retryCache;
        break;
      default:
        throw Error(A6(314));
    }
    t8 !== null && t8.delete(u10), Av(l9, a9);
  }
  function Zy(l9, u10) {
    return Cc(l9, u10);
  }
  var jn = null, aa = null, Bc = false, Kn = false, Kf = false, Cu = 0;
  function Ll(l9) {
    l9 !== aa && l9.next === null && (aa === null ? jn = aa = l9 : aa = aa.next = l9), Kn = true, Bc || (Bc = true, Vy());
  }
  function Vt2(l9, u10) {
    if (!Kf && Kn) {
      Kf = true;
      do
        for (var a9 = false, t8 = jn; t8 !== null; ) {
          if (!u10) if (l9 !== 0) {
            var n5 = t8.pendingLanes;
            if (n5 === 0) var f11 = 0;
            else {
              var c6 = t8.suspendedLanes, e8 = t8.pingedLanes;
              f11 = (1 << 31 - Ml(42 | l9) + 1) - 1, f11 &= n5 & ~(c6 & ~e8), f11 = f11 & 201326741 ? f11 & 201326741 | 1 : f11 ? f11 | 2 : 0;
            }
            f11 !== 0 && (a9 = true, Qi(t8, f11));
          } else f11 = B7, f11 = Fn(t8, t8 === V8 ? f11 : 0, t8.cancelPendingCommit !== null || t8.timeoutHandle !== -1), (f11 & 3) === 0 || qt4(t8, f11) || (a9 = true, Qi(t8, f11));
          t8 = t8.next;
        }
      while (a9);
      Kf = false;
    }
  }
  function xy() {
    Tv();
  }
  function Tv() {
    Kn = Bc = false;
    var l9 = 0;
    Cu !== 0 && (Jy() && (l9 = Cu), Cu = 0);
    for (var u10 = jl(), a9 = null, t8 = jn; t8 !== null; ) {
      var n5 = t8.next, f11 = Mv(t8, u10);
      f11 === 0 ? (t8.next = null, a9 === null ? jn = n5 : a9.next = n5, n5 === null && (aa = a9)) : (a9 = t8, (l9 !== 0 || (f11 & 3) !== 0) && (Kn = true)), t8 = n5;
    }
    Vt2(l9, false);
  }
  function Mv(l9, u10) {
    for (var a9 = l9.suspendedLanes, t8 = l9.pingedLanes, n5 = l9.expirationTimes, f11 = l9.pendingLanes & -62914561; 0 < f11; ) {
      var c6 = 31 - Ml(f11), e8 = 1 << c6, i9 = n5[c6];
      i9 === -1 ? ((e8 & a9) === 0 || (e8 & t8) !== 0) && (n5[c6] = hh(e8, u10)) : i9 <= u10 && (l9.expiredLanes |= e8), f11 &= ~e8;
    }
    if (u10 = V8, a9 = B7, a9 = Fn(l9, l9 === u10 ? a9 : 0, l9.cancelPendingCommit !== null || l9.timeoutHandle !== -1), t8 = l9.callbackNode, a9 === 0 || l9 === u10 && (_8 === 2 || _8 === 9) || l9.cancelPendingCommit !== null) return t8 !== null && t8 !== null && mf(t8), l9.callbackNode = null, l9.callbackPriority = 0;
    if ((a9 & 3) === 0 || qt4(l9, a9)) {
      if (u10 = a9 & -a9, u10 === l9.callbackPriority) return u10;
      switch (t8 !== null && mf(t8), pc(a9)) {
        case 2:
        case 8:
          a9 = h0;
          break;
        case 32:
          a9 = Dn;
          break;
        case 268435456:
          a9 = y0;
          break;
        default:
          a9 = Dn;
      }
      return t8 = Ev.bind(null, l9), a9 = Cc(a9, t8), l9.callbackPriority = u10, l9.callbackNode = a9, u10;
    }
    return t8 !== null && t8 !== null && mf(t8), l9.callbackPriority = 2, l9.callbackNode = null, 2;
  }
  function Ev(l9, u10) {
    if (fl !== 0 && fl !== 5) return l9.callbackNode = null, l9.callbackPriority = 0, null;
    var a9 = l9.callbackNode;
    if (ef(true) && l9.callbackNode !== a9) return null;
    var t8 = B7;
    return t8 = Fn(l9, l9 === V8 ? t8 : 0, l9.cancelPendingCommit !== null || l9.timeoutHandle !== -1), t8 === 0 ? null : (ev(l9, t8, u10), Mv(l9, jl()), l9.callbackNode != null && l9.callbackNode === a9 ? Ev.bind(null, l9) : null);
  }
  function Qi(l9, u10) {
    if (ef()) return null;
    ev(l9, u10, true);
  }
  function Vy() {
    wy(function() {
      (X6 & 6) !== 0 ? Cc(v0, xy) : Tv();
    });
  }
  function He6() {
    return Cu === 0 && (Cu = d0()), Cu;
  }
  function Zi(l9) {
    return l9 == null || typeof l9 == "symbol" || typeof l9 == "boolean" ? null : typeof l9 == "function" ? l9 : cn2("" + l9);
  }
  function xi(l9, u10) {
    var a9 = u10.ownerDocument.createElement("input");
    return a9.name = u10.name, a9.value = u10.value, l9.id && a9.setAttribute("form", l9.id), u10.parentNode.insertBefore(a9, u10), l9 = new FormData(l9), a9.parentNode.removeChild(a9), l9;
  }
  function jy(l9, u10, a9, t8, n5) {
    if (u10 === "submit" && a9 && a9.stateNode === n5) {
      var f11 = Zi((n5[Sl] || null).action), c6 = t8.submitter;
      c6 && (u10 = (u10 = c6[Sl] || null) ? Zi(u10.formAction) : c6.getAttribute("formAction"), u10 !== null && (f11 = u10, c6 = null));
      var e8 = new kn("action", "action", null, t8, n5);
      l9.push({
        event: e8,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t8.defaultPrevented) {
                if (Cu !== 0) {
                  var i9 = c6 ? xi(n5, c6) : new FormData(n5);
                  Ac(a9, {
                    pending: true,
                    data: i9,
                    method: n5.method,
                    action: f11
                  }, null, i9);
                }
              } else typeof f11 == "function" && (e8.preventDefault(), i9 = c6 ? xi(n5, c6) : new FormData(n5), Ac(a9, {
                pending: true,
                data: i9,
                method: n5.method,
                action: f11
              }, f11, i9));
            },
            currentTarget: n5
          }
        ]
      });
    }
  }
  for (ln = 0; ln < cc.length; ln++) un = cc[ln], Vi = un.toLowerCase(), ji = un[0].toUpperCase() + un.slice(1), Gl(Vi, "on" + ji);
  var un, Vi, ji, ln;
  Gl(Q0, "onAnimationEnd");
  Gl(Z0, "onAnimationIteration");
  Gl(x0, "onAnimationStart");
  Gl("dblclick", "onDoubleClick");
  Gl("focusin", "onFocus");
  Gl("focusout", "onBlur");
  Gl(fy, "onTransitionRun");
  Gl(cy, "onTransitionStart");
  Gl(ey, "onTransitionCancel");
  Gl(V0, "onTransitionEnd");
  sa("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  sa("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  sa("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  sa("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  wu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  wu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  wu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  wu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tt4 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ky = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tt4));
  function Dv(l9, u10) {
    u10 = (u10 & 4) !== 0;
    for (var a9 = 0; a9 < l9.length; a9++) {
      var t8 = l9[a9], n5 = t8.event;
      t8 = t8.listeners;
      l: {
        var f11 = void 0;
        if (u10) for (var c6 = t8.length - 1; 0 <= c6; c6--) {
          var e8 = t8[c6], i9 = e8.instance, d8 = e8.currentTarget;
          if (e8 = e8.listener, i9 !== f11 && n5.isPropagationStopped()) break l;
          f11 = e8, n5.currentTarget = d8;
          try {
            f11(n5);
          } catch (g9) {
            Xn(g9);
          }
          n5.currentTarget = null, f11 = i9;
        }
        else for (c6 = 0; c6 < t8.length; c6++) {
          if (e8 = t8[c6], i9 = e8.instance, d8 = e8.currentTarget, e8 = e8.listener, i9 !== f11 && n5.isPropagationStopped()) break l;
          f11 = e8, n5.currentTarget = d8;
          try {
            f11(n5);
          } catch (g9) {
            Xn(g9);
          }
          n5.currentTarget = null, f11 = i9;
        }
      }
    }
  }
  function N4(l9, u10) {
    var a9 = u10[Pf];
    a9 === void 0 && (a9 = u10[Pf] = /* @__PURE__ */ new Set());
    var t8 = l9 + "__bubble";
    a9.has(t8) || (Ov(u10, l9, 2, false), a9.add(t8));
  }
  function Cf(l9, u10, a9) {
    var t8 = 0;
    u10 && (t8 |= 4), Ov(a9, l9, t8, u10);
  }
  var an = "_reactListening" + Math.random().toString(36).slice(2);
  function Ne6(l9) {
    if (!l9[an]) {
      l9[an] = true, z0.forEach(function(a9) {
        a9 !== "selectionchange" && (Ky.has(a9) || Cf(a9, false, l9), Cf(a9, true, l9));
      });
      var u10 = l9.nodeType === 9 ? l9 : l9.ownerDocument;
      u10 === null || u10[an] || (u10[an] = true, Cf("selectionchange", false, u10));
    }
  }
  function Ov(l9, u10, a9, t8) {
    switch (Gv(u10)) {
      case 2:
        var n5 = md;
        break;
      case 8:
        n5 = gd;
        break;
      default:
        n5 = Ye6;
    }
    a9 = n5.bind(null, u10, a9, l9), n5 = void 0, !tc || u10 !== "touchstart" && u10 !== "touchmove" && u10 !== "wheel" || (n5 = true), t8 ? n5 !== void 0 ? l9.addEventListener(u10, a9, {
      capture: true,
      passive: n5
    }) : l9.addEventListener(u10, a9, true) : n5 !== void 0 ? l9.addEventListener(u10, a9, {
      passive: n5
    }) : l9.addEventListener(u10, a9, false);
  }
  function Lf(l9, u10, a9, t8, n5) {
    var f11 = t8;
    if ((u10 & 1) === 0 && (u10 & 2) === 0 && t8 !== null) l: for (; ; ) {
      if (t8 === null) return;
      var c6 = t8.tag;
      if (c6 === 3 || c6 === 4) {
        var e8 = t8.stateNode.containerInfo;
        if (e8 === n5) break;
        if (c6 === 4) for (c6 = t8.return; c6 !== null; ) {
          var i9 = c6.tag;
          if ((i9 === 3 || i9 === 4) && c6.stateNode.containerInfo === n5) return;
          c6 = c6.return;
        }
        for (; e8 !== null; ) {
          if (c6 = fa(e8), c6 === null) return;
          if (i9 = c6.tag, i9 === 5 || i9 === 6 || i9 === 26 || i9 === 27) {
            t8 = f11 = c6;
            continue l;
          }
          e8 = e8.parentNode;
        }
      }
      t8 = t8.return;
    }
    U0(function() {
      var d8 = f11, g9 = wc(a9), z10 = [];
      l: {
        var S11 = j0.get(l9);
        if (S11 !== void 0) {
          var m13 = kn, O6 = l9;
          switch (l9) {
            case "keypress":
              if (vn(a9) === 0) break l;
            case "keydown":
            case "keyup":
              m13 = Zh;
              break;
            case "focusin":
              O6 = "focus", m13 = Df;
              break;
            case "focusout":
              O6 = "blur", m13 = Df;
              break;
            case "beforeblur":
            case "afterblur":
              m13 = Df;
              break;
            case "click":
              if (a9.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m13 = We6;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m13 = Uh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m13 = jh;
              break;
            case Q0:
            case Z0:
            case x0:
              m13 = qh;
              break;
            case V0:
              m13 = Ch;
              break;
            case "scroll":
            case "scrollend":
              m13 = Oh;
              break;
            case "wheel":
              m13 = ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              m13 = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m13 = $e6;
              break;
            case "toggle":
            case "beforetoggle":
              m13 = Wh;
          }
          var E11 = (u10 & 4) !== 0, G10 = !E11 && (l9 === "scroll" || l9 === "scrollend"), h10 = E11 ? S11 !== null ? S11 + "Capture" : null : S11;
          E11 = [];
          for (var v13 = d8, y10; v13 !== null; ) {
            var b12 = v13;
            if (y10 = b12.stateNode, b12 = b12.tag, b12 !== 5 && b12 !== 26 && b12 !== 27 || y10 === null || h10 === null || (b12 = St2(v13, h10), b12 != null && E11.push(Mt2(v13, b12, y10))), G10) break;
            v13 = v13.return;
          }
          0 < E11.length && (S11 = new m13(S11, O6, null, a9, g9), z10.push({
            event: S11,
            listeners: E11
          }));
        }
      }
      if ((u10 & 7) === 0) {
        l: {
          if (S11 = l9 === "mouseover" || l9 === "pointerover", m13 = l9 === "mouseout" || l9 === "pointerout", S11 && a9 !== ac && (O6 = a9.relatedTarget || a9.fromElement) && (fa(O6) || O6[Xa])) break l;
          if ((m13 || S11) && (S11 = g9.window === g9 ? g9 : (S11 = g9.ownerDocument) ? S11.defaultView || S11.parentWindow : globalThis, m13 ? (O6 = a9.relatedTarget || a9.toElement, m13 = d8, O6 = O6 ? fa(O6) : null, O6 !== null && (G10 = Ht3(O6), E11 = O6.tag, O6 !== G10 || E11 !== 5 && E11 !== 27 && E11 !== 6) && (O6 = null)) : (m13 = null, O6 = d8), m13 !== O6)) {
            if (E11 = We6, b12 = "onMouseLeave", h10 = "onMouseEnter", v13 = "mouse", (l9 === "pointerout" || l9 === "pointerover") && (E11 = $e6, b12 = "onPointerLeave", h10 = "onPointerEnter", v13 = "pointer"), G10 = m13 == null ? S11 : ka(m13), y10 = O6 == null ? S11 : ka(O6), S11 = new E11(b12, v13 + "leave", m13, a9, g9), S11.target = G10, S11.relatedTarget = y10, b12 = null, fa(g9) === d8 && (E11 = new E11(h10, v13 + "enter", O6, a9, g9), E11.target = y10, E11.relatedTarget = G10, b12 = E11), G10 = b12, m13 && O6) u: {
              for (E11 = m13, h10 = O6, v13 = 0, y10 = E11; y10; y10 = Pu(y10)) v13++;
              for (y10 = 0, b12 = h10; b12; b12 = Pu(b12)) y10++;
              for (; 0 < v13 - y10; ) E11 = Pu(E11), v13--;
              for (; 0 < y10 - v13; ) h10 = Pu(h10), y10--;
              for (; v13--; ) {
                if (E11 === h10 || h10 !== null && E11 === h10.alternate) break u;
                E11 = Pu(E11), h10 = Pu(h10);
              }
              E11 = null;
            }
            else E11 = null;
            m13 !== null && Ki(z10, S11, m13, E11, false), O6 !== null && G10 !== null && Ki(z10, G10, O6, E11, true);
          }
        }
        l: {
          if (S11 = d8 ? ka(d8) : globalThis, m13 = S11.nodeName && S11.nodeName.toLowerCase(), m13 === "select" || m13 === "input" && S11.type === "file") var T8 = Ie5;
          else if (re3(S11)) if (Y0) T8 = ay;
          else {
            T8 = ly;
            var H6 = Ph;
          }
          else m13 = S11.nodeName, !m13 || m13.toLowerCase() !== "input" || S11.type !== "checkbox" && S11.type !== "radio" ? d8 && Wc(d8.elementType) && (T8 = Ie5) : T8 = uy;
          if (T8 && (T8 = T8(l9, d8))) {
            R0(z10, T8, a9, g9);
            break l;
          }
          H6 && H6(l9, S11, d8), l9 === "focusout" && d8 && S11.type === "number" && d8.memoizedProps.value != null && uc(S11, "number", S11.value);
        }
        switch (H6 = d8 ? ka(d8) : globalThis, l9) {
          case "focusin":
            (re3(H6) || H6.contentEditable === "true") && (ia = H6, nc = d8, lt2 = null);
            break;
          case "focusout":
            lt2 = nc = ia = null;
            break;
          case "mousedown":
            fc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = false, ai(z10, a9, g9);
            break;
          case "selectionchange":
            if (ny) break;
          case "keydown":
          case "keyup":
            ai(z10, a9, g9);
        }
        var M5;
        if (kc) l: {
          switch (l9) {
            case "compositionstart":
              var D8 = "onCompositionStart";
              break l;
            case "compositionend":
              D8 = "onCompositionEnd";
              break l;
            case "compositionupdate":
              D8 = "onCompositionUpdate";
              break l;
          }
          D8 = void 0;
        }
        else ea ? q0(l9, a9) && (D8 = "onCompositionEnd") : l9 === "keydown" && a9.keyCode === 229 && (D8 = "onCompositionStart");
        D8 && (N0 && a9.locale !== "ko" && (ea || D8 !== "onCompositionStart" ? D8 === "onCompositionEnd" && ea && (M5 = H0()) : (bu = g9, $c = "value" in bu ? bu.value : bu.textContent, ea = true)), H6 = Cn(d8, D8), 0 < H6.length && (D8 = new we6(D8, l9, null, a9, g9), z10.push({
          event: D8,
          listeners: H6
        }), M5 ? D8.data = M5 : (M5 = B0(a9), M5 !== null && (D8.data = M5)))), (M5 = $h ? Fh(l9, a9) : kh(l9, a9)) && (D8 = Cn(d8, "onBeforeInput"), 0 < D8.length && (H6 = new we6("onBeforeInput", "beforeinput", null, a9, g9), z10.push({
          event: H6,
          listeners: D8
        }), H6.data = M5)), jy(z10, l9, d8, a9, g9);
      }
      Dv(z10, u10);
    });
  }
  function Mt2(l9, u10, a9) {
    return {
      instance: l9,
      listener: u10,
      currentTarget: a9
    };
  }
  function Cn(l9, u10) {
    for (var a9 = u10 + "Capture", t8 = []; l9 !== null; ) {
      var n5 = l9, f11 = n5.stateNode;
      if (n5 = n5.tag, n5 !== 5 && n5 !== 26 && n5 !== 27 || f11 === null || (n5 = St2(l9, a9), n5 != null && t8.unshift(Mt2(l9, n5, f11)), n5 = St2(l9, u10), n5 != null && t8.push(Mt2(l9, n5, f11))), l9.tag === 3) return t8;
      l9 = l9.return;
    }
    return [];
  }
  function Pu(l9) {
    if (l9 === null) return null;
    do
      l9 = l9.return;
    while (l9 && l9.tag !== 5 && l9.tag !== 27);
    return l9 || null;
  }
  function Ki(l9, u10, a9, t8, n5) {
    for (var f11 = u10._reactName, c6 = []; a9 !== null && a9 !== t8; ) {
      var e8 = a9, i9 = e8.alternate, d8 = e8.stateNode;
      if (e8 = e8.tag, i9 !== null && i9 === t8) break;
      e8 !== 5 && e8 !== 26 && e8 !== 27 || d8 === null || (i9 = d8, n5 ? (d8 = St2(a9, f11), d8 != null && c6.unshift(Mt2(a9, d8, i9))) : n5 || (d8 = St2(a9, f11), d8 != null && c6.push(Mt2(a9, d8, i9)))), a9 = a9.return;
    }
    c6.length !== 0 && l9.push({
      event: u10,
      listeners: c6
    });
  }
  var Cy = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
  function Ci(l9) {
    return (typeof l9 == "string" ? l9 : "" + l9).replace(Cy, `
`).replace(Ly, "");
  }
  function sv(l9, u10) {
    return u10 = Ci(u10), Ci(l9) === u10;
  }
  function vf() {
  }
  function Q5(l9, u10, a9, t8, n5, f11) {
    switch (a9) {
      case "children":
        typeof t8 == "string" ? u10 === "body" || u10 === "textarea" && t8 === "" || Ua(l9, t8) : (typeof t8 == "number" || typeof t8 == "bigint") && u10 !== "body" && Ua(l9, "" + t8);
        break;
      case "className":
        Jt2(l9, "class", t8);
        break;
      case "tabIndex":
        Jt2(l9, "tabindex", t8);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jt2(l9, a9, t8);
        break;
      case "style":
        s0(l9, t8, f11);
        break;
      case "data":
        if (u10 !== "object") {
          Jt2(l9, "data", t8);
          break;
        }
      case "src":
      case "href":
        if (t8 === "" && (u10 !== "a" || a9 !== "href")) {
          l9.removeAttribute(a9);
          break;
        }
        if (t8 == null || typeof t8 == "function" || typeof t8 == "symbol" || typeof t8 == "boolean") {
          l9.removeAttribute(a9);
          break;
        }
        t8 = cn2("" + t8), l9.setAttribute(a9, t8);
        break;
      case "action":
      case "formAction":
        if (typeof t8 == "function") {
          l9.setAttribute(a9, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f11 == "function" && (a9 === "formAction" ? (u10 !== "input" && Q5(l9, u10, "name", n5.name, n5, null), Q5(l9, u10, "formEncType", n5.formEncType, n5, null), Q5(l9, u10, "formMethod", n5.formMethod, n5, null), Q5(l9, u10, "formTarget", n5.formTarget, n5, null)) : (Q5(l9, u10, "encType", n5.encType, n5, null), Q5(l9, u10, "method", n5.method, n5, null), Q5(l9, u10, "target", n5.target, n5, null)));
        if (t8 == null || typeof t8 == "symbol" || typeof t8 == "boolean") {
          l9.removeAttribute(a9);
          break;
        }
        t8 = cn2("" + t8), l9.setAttribute(a9, t8);
        break;
      case "onClick":
        t8 != null && (l9.onclick = vf);
        break;
      case "onScroll":
        t8 != null && N4("scroll", l9);
        break;
      case "onScrollEnd":
        t8 != null && N4("scrollend", l9);
        break;
      case "dangerouslySetInnerHTML":
        if (t8 != null) {
          if (typeof t8 != "object" || !("__html" in t8)) throw Error(A6(61));
          if (a9 = t8.__html, a9 != null) {
            if (n5.children != null) throw Error(A6(60));
            l9.innerHTML = a9;
          }
        }
        break;
      case "multiple":
        l9.multiple = t8 && typeof t8 != "function" && typeof t8 != "symbol";
        break;
      case "muted":
        l9.muted = t8 && typeof t8 != "function" && typeof t8 != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t8 == null || typeof t8 == "function" || typeof t8 == "boolean" || typeof t8 == "symbol") {
          l9.removeAttribute("xlink:href");
          break;
        }
        a9 = cn2("" + t8), l9.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a9);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t8 != null && typeof t8 != "function" && typeof t8 != "symbol" ? l9.setAttribute(a9, "" + t8) : l9.removeAttribute(a9);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t8 && typeof t8 != "function" && typeof t8 != "symbol" ? l9.setAttribute(a9, "") : l9.removeAttribute(a9);
        break;
      case "capture":
      case "download":
        t8 === true ? l9.setAttribute(a9, "") : t8 !== false && t8 != null && typeof t8 != "function" && typeof t8 != "symbol" ? l9.setAttribute(a9, t8) : l9.removeAttribute(a9);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t8 != null && typeof t8 != "function" && typeof t8 != "symbol" && !isNaN(t8) && 1 <= t8 ? l9.setAttribute(a9, t8) : l9.removeAttribute(a9);
        break;
      case "rowSpan":
      case "start":
        t8 == null || typeof t8 == "function" || typeof t8 == "symbol" || isNaN(t8) ? l9.removeAttribute(a9) : l9.setAttribute(a9, t8);
        break;
      case "popover":
        N4("beforetoggle", l9), N4("toggle", l9), fn(l9, "popover", t8);
        break;
      case "xlinkActuate":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:actuate", t8);
        break;
      case "xlinkArcrole":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:arcrole", t8);
        break;
      case "xlinkRole":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:role", t8);
        break;
      case "xlinkShow":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:show", t8);
        break;
      case "xlinkTitle":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:title", t8);
        break;
      case "xlinkType":
        pl(l9, "http://www.w3.org/1999/xlink", "xlink:type", t8);
        break;
      case "xmlBase":
        pl(l9, "http://www.w3.org/XML/1998/namespace", "xml:base", t8);
        break;
      case "xmlLang":
        pl(l9, "http://www.w3.org/XML/1998/namespace", "xml:lang", t8);
        break;
      case "xmlSpace":
        pl(l9, "http://www.w3.org/XML/1998/namespace", "xml:space", t8);
        break;
      case "is":
        fn(l9, "is", t8);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a9.length) || a9[0] !== "o" && a9[0] !== "O" || a9[1] !== "n" && a9[1] !== "N") && (a9 = Eh.get(a9) || a9, fn(l9, a9, t8));
    }
  }
  function Rc(l9, u10, a9, t8, n5, f11) {
    switch (a9) {
      case "style":
        s0(l9, t8, f11);
        break;
      case "dangerouslySetInnerHTML":
        if (t8 != null) {
          if (typeof t8 != "object" || !("__html" in t8)) throw Error(A6(61));
          if (a9 = t8.__html, a9 != null) {
            if (n5.children != null) throw Error(A6(60));
            l9.innerHTML = a9;
          }
        }
        break;
      case "children":
        typeof t8 == "string" ? Ua(l9, t8) : (typeof t8 == "number" || typeof t8 == "bigint") && Ua(l9, "" + t8);
        break;
      case "onScroll":
        t8 != null && N4("scroll", l9);
        break;
      case "onScrollEnd":
        t8 != null && N4("scrollend", l9);
        break;
      case "onClick":
        t8 != null && (l9.onclick = vf);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!A0.hasOwnProperty(a9)) l: {
          if (a9[0] === "o" && a9[1] === "n" && (n5 = a9.endsWith("Capture"), u10 = a9.slice(2, n5 ? a9.length - 7 : void 0), f11 = l9[Sl] || null, f11 = f11 != null ? f11[a9] : null, typeof f11 == "function" && l9.removeEventListener(u10, f11, n5), typeof t8 == "function")) {
            typeof f11 != "function" && f11 !== null && (a9 in l9 ? l9[a9] = null : l9.hasAttribute(a9) && l9.removeAttribute(a9)), l9.addEventListener(u10, t8, n5);
            break l;
          }
          a9 in l9 ? l9[a9] = t8 : t8 === true ? l9.setAttribute(a9, "") : fn(l9, a9, t8);
        }
    }
  }
  function cl(l9, u10, a9) {
    switch (u10) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        N4("error", l9), N4("load", l9);
        var t8 = false, n5 = false, f11;
        for (f11 in a9) if (a9.hasOwnProperty(f11)) {
          var c6 = a9[f11];
          if (c6 != null) switch (f11) {
            case "src":
              t8 = true;
              break;
            case "srcSet":
              n5 = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(A6(137, u10));
            default:
              Q5(l9, u10, f11, c6, a9, null);
          }
        }
        n5 && Q5(l9, u10, "srcSet", a9.srcSet, a9, null), t8 && Q5(l9, u10, "src", a9.src, a9, null);
        return;
      case "input":
        N4("invalid", l9);
        var e8 = f11 = c6 = n5 = null, i9 = null, d8 = null;
        for (t8 in a9) if (a9.hasOwnProperty(t8)) {
          var g9 = a9[t8];
          if (g9 != null) switch (t8) {
            case "name":
              n5 = g9;
              break;
            case "type":
              c6 = g9;
              break;
            case "checked":
              i9 = g9;
              break;
            case "defaultChecked":
              d8 = g9;
              break;
            case "value":
              f11 = g9;
              break;
            case "defaultValue":
              e8 = g9;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g9 != null) throw Error(A6(137, u10));
              break;
            default:
              Q5(l9, u10, t8, g9, a9, null);
          }
        }
        E0(l9, f11, e8, i9, d8, c6, n5, false), On(l9);
        return;
      case "select":
        N4("invalid", l9), t8 = c6 = f11 = null;
        for (n5 in a9) if (a9.hasOwnProperty(n5) && (e8 = a9[n5], e8 != null)) switch (n5) {
          case "value":
            f11 = e8;
            break;
          case "defaultValue":
            c6 = e8;
            break;
          case "multiple":
            t8 = e8;
          default:
            Q5(l9, u10, n5, e8, a9, null);
        }
        u10 = f11, a9 = c6, l9.multiple = !!t8, u10 != null ? ba(l9, !!t8, u10, false) : a9 != null && ba(l9, !!t8, a9, true);
        return;
      case "textarea":
        N4("invalid", l9), f11 = n5 = t8 = null;
        for (c6 in a9) if (a9.hasOwnProperty(c6) && (e8 = a9[c6], e8 != null)) switch (c6) {
          case "value":
            t8 = e8;
            break;
          case "defaultValue":
            n5 = e8;
            break;
          case "children":
            f11 = e8;
            break;
          case "dangerouslySetInnerHTML":
            if (e8 != null) throw Error(A6(91));
            break;
          default:
            Q5(l9, u10, c6, e8, a9, null);
        }
        O0(l9, t8, n5, f11), On(l9);
        return;
      case "option":
        for (i9 in a9) if (a9.hasOwnProperty(i9) && (t8 = a9[i9], t8 != null)) switch (i9) {
          case "selected":
            l9.selected = t8 && typeof t8 != "function" && typeof t8 != "symbol";
            break;
          default:
            Q5(l9, u10, i9, t8, a9, null);
        }
        return;
      case "dialog":
        N4("beforetoggle", l9), N4("toggle", l9), N4("cancel", l9), N4("close", l9);
        break;
      case "iframe":
      case "object":
        N4("load", l9);
        break;
      case "video":
      case "audio":
        for (t8 = 0; t8 < Tt4.length; t8++) N4(Tt4[t8], l9);
        break;
      case "image":
        N4("error", l9), N4("load", l9);
        break;
      case "details":
        N4("toggle", l9);
        break;
      case "embed":
      case "source":
      case "link":
        N4("error", l9), N4("load", l9);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d8 in a9) if (a9.hasOwnProperty(d8) && (t8 = a9[d8], t8 != null)) switch (d8) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A6(137, u10));
          default:
            Q5(l9, u10, d8, t8, a9, null);
        }
        return;
      default:
        if (Wc(u10)) {
          for (g9 in a9) a9.hasOwnProperty(g9) && (t8 = a9[g9], t8 !== void 0 && Rc(l9, u10, g9, t8, a9, void 0));
          return;
        }
    }
    for (e8 in a9) a9.hasOwnProperty(e8) && (t8 = a9[e8], t8 != null && Q5(l9, u10, e8, t8, a9, null));
  }
  function py(l9, u10, a9, t8) {
    switch (u10) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n5 = null, f11 = null, c6 = null, e8 = null, i9 = null, d8 = null, g9 = null;
        for (m13 in a9) {
          var z10 = a9[m13];
          if (a9.hasOwnProperty(m13) && z10 != null) switch (m13) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i9 = z10;
            default:
              t8.hasOwnProperty(m13) || Q5(l9, u10, m13, null, t8, z10);
          }
        }
        for (var S11 in t8) {
          var m13 = t8[S11];
          if (z10 = a9[S11], t8.hasOwnProperty(S11) && (m13 != null || z10 != null)) switch (S11) {
            case "type":
              f11 = m13;
              break;
            case "name":
              n5 = m13;
              break;
            case "checked":
              d8 = m13;
              break;
            case "defaultChecked":
              g9 = m13;
              break;
            case "value":
              c6 = m13;
              break;
            case "defaultValue":
              e8 = m13;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m13 != null) throw Error(A6(137, u10));
              break;
            default:
              m13 !== z10 && Q5(l9, u10, S11, m13, t8, z10);
          }
        }
        lc(l9, c6, e8, i9, d8, g9, f11, n5);
        return;
      case "select":
        m13 = c6 = e8 = S11 = null;
        for (f11 in a9) if (i9 = a9[f11], a9.hasOwnProperty(f11) && i9 != null) switch (f11) {
          case "value":
            break;
          case "multiple":
            m13 = i9;
          default:
            t8.hasOwnProperty(f11) || Q5(l9, u10, f11, null, t8, i9);
        }
        for (n5 in t8) if (f11 = t8[n5], i9 = a9[n5], t8.hasOwnProperty(n5) && (f11 != null || i9 != null)) switch (n5) {
          case "value":
            S11 = f11;
            break;
          case "defaultValue":
            e8 = f11;
            break;
          case "multiple":
            c6 = f11;
          default:
            f11 !== i9 && Q5(l9, u10, n5, f11, t8, i9);
        }
        u10 = e8, a9 = c6, t8 = m13, S11 != null ? ba(l9, !!a9, S11, false) : !!t8 != !!a9 && (u10 != null ? ba(l9, !!a9, u10, true) : ba(l9, !!a9, a9 ? [] : "", false));
        return;
      case "textarea":
        m13 = S11 = null;
        for (e8 in a9) if (n5 = a9[e8], a9.hasOwnProperty(e8) && n5 != null && !t8.hasOwnProperty(e8)) switch (e8) {
          case "value":
            break;
          case "children":
            break;
          default:
            Q5(l9, u10, e8, null, t8, n5);
        }
        for (c6 in t8) if (n5 = t8[c6], f11 = a9[c6], t8.hasOwnProperty(c6) && (n5 != null || f11 != null)) switch (c6) {
          case "value":
            S11 = n5;
            break;
          case "defaultValue":
            m13 = n5;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n5 != null) throw Error(A6(91));
            break;
          default:
            n5 !== f11 && Q5(l9, u10, c6, n5, t8, f11);
        }
        D0(l9, S11, m13);
        return;
      case "option":
        for (var O6 in a9) if (S11 = a9[O6], a9.hasOwnProperty(O6) && S11 != null && !t8.hasOwnProperty(O6)) switch (O6) {
          case "selected":
            l9.selected = false;
            break;
          default:
            Q5(l9, u10, O6, null, t8, S11);
        }
        for (i9 in t8) if (S11 = t8[i9], m13 = a9[i9], t8.hasOwnProperty(i9) && S11 !== m13 && (S11 != null || m13 != null)) switch (i9) {
          case "selected":
            l9.selected = S11 && typeof S11 != "function" && typeof S11 != "symbol";
            break;
          default:
            Q5(l9, u10, i9, S11, t8, m13);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var E11 in a9) S11 = a9[E11], a9.hasOwnProperty(E11) && S11 != null && !t8.hasOwnProperty(E11) && Q5(l9, u10, E11, null, t8, S11);
        for (d8 in t8) if (S11 = t8[d8], m13 = a9[d8], t8.hasOwnProperty(d8) && S11 !== m13 && (S11 != null || m13 != null)) switch (d8) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S11 != null) throw Error(A6(137, u10));
            break;
          default:
            Q5(l9, u10, d8, S11, t8, m13);
        }
        return;
      default:
        if (Wc(u10)) {
          for (var G10 in a9) S11 = a9[G10], a9.hasOwnProperty(G10) && S11 !== void 0 && !t8.hasOwnProperty(G10) && Rc(l9, u10, G10, void 0, t8, S11);
          for (g9 in t8) S11 = t8[g9], m13 = a9[g9], !t8.hasOwnProperty(g9) || S11 === m13 || S11 === void 0 && m13 === void 0 || Rc(l9, u10, g9, S11, t8, m13);
          return;
        }
    }
    for (var h10 in a9) S11 = a9[h10], a9.hasOwnProperty(h10) && S11 != null && !t8.hasOwnProperty(h10) && Q5(l9, u10, h10, null, t8, S11);
    for (z10 in t8) S11 = t8[z10], m13 = a9[z10], !t8.hasOwnProperty(z10) || S11 === m13 || S11 == null && m13 == null || Q5(l9, u10, z10, S11, t8, m13);
  }
  var Yc = null, oc = null;
  function Ln(l9) {
    return l9.nodeType === 9 ? l9 : l9.ownerDocument;
  }
  function Li(l9) {
    switch (l9) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l9, u10) {
    if (l9 === 0) switch (u10) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l9 === 1 && u10 === "foreignObject" ? 0 : l9;
  }
  function _c(l9, u10) {
    return l9 === "textarea" || l9 === "noscript" || typeof u10.children == "string" || typeof u10.children == "number" || typeof u10.children == "bigint" || typeof u10.dangerouslySetInnerHTML == "object" && u10.dangerouslySetInnerHTML !== null && u10.dangerouslySetInnerHTML.__html != null;
  }
  var pf = null;
  function Jy() {
    var l9 = globalThis.event;
    return l9 && l9.type === "popstate" ? l9 === pf ? false : (pf = l9, true) : (pf = null, false);
  }
  var Hv = typeof setTimeout == "function" ? setTimeout : void 0, Wy = typeof clearTimeout == "function" ? clearTimeout : void 0, pi = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof pi < "u" ? function(l9) {
    return pi.resolve(null).then(l9).catch($y);
  } : Hv;
  function $y(l9) {
    setTimeout(function() {
      throw l9;
    });
  }
  function Yu(l9) {
    return l9 === "head";
  }
  function Ji(l9, u10) {
    var a9 = u10, t8 = 0, n5 = 0;
    do {
      var f11 = a9.nextSibling;
      if (l9.removeChild(a9), f11 && f11.nodeType === 8) if (a9 = f11.data, a9 === "/$") {
        if (0 < t8 && 8 > t8) {
          a9 = t8;
          var c6 = l9.ownerDocument;
          if (a9 & 1 && yt3(c6.documentElement), a9 & 2 && yt3(c6.body), a9 & 4) for (a9 = c6.head, yt3(a9), c6 = a9.firstChild; c6; ) {
            var e8 = c6.nextSibling, i9 = c6.nodeName;
            c6[Rt3] || i9 === "SCRIPT" || i9 === "STYLE" || i9 === "LINK" && c6.rel.toLowerCase() === "stylesheet" || a9.removeChild(c6), c6 = e8;
          }
        }
        if (n5 === 0) {
          l9.removeChild(f11), Ut3(u10);
          return;
        }
        n5--;
      } else a9 === "$" || a9 === "$?" || a9 === "$!" ? n5++ : t8 = a9.charCodeAt(0) - 48;
      else t8 = 0;
      a9 = f11;
    } while (a9);
    Ut3(u10);
  }
  function Xc(l9) {
    var u10 = l9.firstChild;
    for (u10 && u10.nodeType === 10 && (u10 = u10.nextSibling); u10; ) {
      var a9 = u10;
      switch (u10 = u10.nextSibling, a9.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a9), Jc(a9);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a9.rel.toLowerCase() === "stylesheet") continue;
      }
      l9.removeChild(a9);
    }
  }
  function Fy(l9, u10, a9, t8) {
    for (; l9.nodeType === 1; ) {
      var n5 = a9;
      if (l9.nodeName.toLowerCase() !== u10.toLowerCase()) {
        if (!t8 && (l9.nodeName !== "INPUT" || l9.type !== "hidden")) break;
      } else if (t8) {
        if (!l9[Rt3]) switch (u10) {
          case "meta":
            if (!l9.hasAttribute("itemprop")) break;
            return l9;
          case "link":
            if (f11 = l9.getAttribute("rel"), f11 === "stylesheet" && l9.hasAttribute("data-precedence")) break;
            if (f11 !== n5.rel || l9.getAttribute("href") !== (n5.href == null || n5.href === "" ? null : n5.href) || l9.getAttribute("crossorigin") !== (n5.crossOrigin == null ? null : n5.crossOrigin) || l9.getAttribute("title") !== (n5.title == null ? null : n5.title)) break;
            return l9;
          case "style":
            if (l9.hasAttribute("data-precedence")) break;
            return l9;
          case "script":
            if (f11 = l9.getAttribute("src"), (f11 !== (n5.src == null ? null : n5.src) || l9.getAttribute("type") !== (n5.type == null ? null : n5.type) || l9.getAttribute("crossorigin") !== (n5.crossOrigin == null ? null : n5.crossOrigin)) && f11 && l9.hasAttribute("async") && !l9.hasAttribute("itemprop")) break;
            return l9;
          default:
            return l9;
        }
      } else if (u10 === "input" && l9.type === "hidden") {
        var f11 = n5.name == null ? null : "" + n5.name;
        if (n5.type === "hidden" && l9.getAttribute("name") === f11) return l9;
      } else return l9;
      if (l9 = Xl(l9.nextSibling), l9 === null) break;
    }
    return null;
  }
  function ky(l9, u10, a9) {
    if (u10 === "") return null;
    for (; l9.nodeType !== 3; ) if ((l9.nodeType !== 1 || l9.nodeName !== "INPUT" || l9.type !== "hidden") && !a9 || (l9 = Xl(l9.nextSibling), l9 === null)) return null;
    return l9;
  }
  function Gc(l9) {
    return l9.data === "$!" || l9.data === "$?" && l9.ownerDocument.readyState === "complete";
  }
  function ry(l9, u10) {
    var a9 = l9.ownerDocument;
    if (l9.data !== "$?" || a9.readyState === "complete") u10();
    else {
      var t8 = function() {
        u10(), a9.removeEventListener("DOMContentLoaded", t8);
      };
      a9.addEventListener("DOMContentLoaded", t8), l9._reactRetry = t8;
    }
  }
  function Xl(l9) {
    for (; l9 != null; l9 = l9.nextSibling) {
      var u10 = l9.nodeType;
      if (u10 === 1 || u10 === 3) break;
      if (u10 === 8) {
        if (u10 = l9.data, u10 === "$" || u10 === "$!" || u10 === "$?" || u10 === "F!" || u10 === "F") break;
        if (u10 === "/$") return null;
      }
    }
    return l9;
  }
  var Qc = null;
  function Wi(l9) {
    l9 = l9.previousSibling;
    for (var u10 = 0; l9; ) {
      if (l9.nodeType === 8) {
        var a9 = l9.data;
        if (a9 === "$" || a9 === "$!" || a9 === "$?") {
          if (u10 === 0) return l9;
          u10--;
        } else a9 === "/$" && u10++;
      }
      l9 = l9.previousSibling;
    }
    return null;
  }
  function Nv(l9, u10, a9) {
    switch (u10 = Ln(a9), l9) {
      case "html":
        if (l9 = u10.documentElement, !l9) throw Error(A6(452));
        return l9;
      case "head":
        if (l9 = u10.head, !l9) throw Error(A6(453));
        return l9;
      case "body":
        if (l9 = u10.body, !l9) throw Error(A6(454));
        return l9;
      default:
        throw Error(A6(451));
    }
  }
  function yt3(l9) {
    for (var u10 = l9.attributes; u10.length; ) l9.removeAttributeNode(u10[0]);
    Jc(l9);
  }
  var ol = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Set();
  function pn(l9) {
    return typeof l9.getRootNode == "function" ? l9.getRootNode() : l9.nodeType === 9 ? l9 : l9.ownerDocument;
  }
  var fu = o7.d;
  o7.d = {
    f: Iy,
    r: Py,
    D: ld,
    C: ud,
    L: ad,
    m: td,
    X: fd,
    S: nd,
    M: cd
  };
  function Iy() {
    var l9 = fu.f(), u10 = ff();
    return l9 || u10;
  }
  function Py(l9) {
    var u10 = Ga(l9);
    u10 !== null && u10.tag === 5 && u10.type === "form" ? M1(u10) : fu.r(l9);
  }
  var xa = typeof document > "u" ? null : document;
  function qv(l9, u10, a9) {
    var t8 = xa;
    if (t8 && typeof u10 == "string" && u10) {
      var n5 = ql(u10);
      n5 = 'link[rel="' + l9 + '"][href="' + n5 + '"]', typeof a9 == "string" && (n5 += '[crossorigin="' + a9 + '"]'), wi.has(n5) || (wi.add(n5), l9 = {
        rel: l9,
        crossOrigin: a9,
        href: u10
      }, t8.querySelector(n5) === null && (u10 = t8.createElement("link"), cl(u10, "link", l9), ul(u10), t8.head.appendChild(u10)));
    }
  }
  function ld(l9) {
    fu.D(l9), qv("dns-prefetch", l9, null);
  }
  function ud(l9, u10) {
    fu.C(l9, u10), qv("preconnect", l9, u10);
  }
  function ad(l9, u10, a9) {
    fu.L(l9, u10, a9);
    var t8 = xa;
    if (t8 && l9 && u10) {
      var n5 = 'link[rel="preload"][as="' + ql(u10) + '"]';
      u10 === "image" && a9 && a9.imageSrcSet ? (n5 += '[imagesrcset="' + ql(a9.imageSrcSet) + '"]', typeof a9.imageSizes == "string" && (n5 += '[imagesizes="' + ql(a9.imageSizes) + '"]')) : n5 += '[href="' + ql(l9) + '"]';
      var f11 = n5;
      switch (u10) {
        case "style":
          f11 = _a(l9);
          break;
        case "script":
          f11 = Va(l9);
      }
      ol.has(f11) || (l9 = j10({
        rel: "preload",
        href: u10 === "image" && a9 && a9.imageSrcSet ? void 0 : l9,
        as: u10
      }, a9), ol.set(f11, l9), t8.querySelector(n5) !== null || u10 === "style" && t8.querySelector(jt3(f11)) || u10 === "script" && t8.querySelector(Kt3(f11)) || (u10 = t8.createElement("link"), cl(u10, "link", l9), ul(u10), t8.head.appendChild(u10)));
    }
  }
  function td(l9, u10) {
    fu.m(l9, u10);
    var a9 = xa;
    if (a9 && l9) {
      var t8 = u10 && typeof u10.as == "string" ? u10.as : "script", n5 = 'link[rel="modulepreload"][as="' + ql(t8) + '"][href="' + ql(l9) + '"]', f11 = n5;
      switch (t8) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f11 = Va(l9);
      }
      if (!ol.has(f11) && (l9 = j10({
        rel: "modulepreload",
        href: l9
      }, u10), ol.set(f11, l9), a9.querySelector(n5) === null)) {
        switch (t8) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a9.querySelector(Kt3(f11))) return;
        }
        t8 = a9.createElement("link"), cl(t8, "link", l9), ul(t8), a9.head.appendChild(t8);
      }
    }
  }
  function nd(l9, u10, a9) {
    fu.S(l9, u10, a9);
    var t8 = xa;
    if (t8 && l9) {
      var n5 = ga(t8).hoistableStyles, f11 = _a(l9);
      u10 = u10 || "default";
      var c6 = n5.get(f11);
      if (!c6) {
        var e8 = {
          loading: 0,
          preload: null
        };
        if (c6 = t8.querySelector(jt3(f11))) e8.loading = 5;
        else {
          l9 = j10({
            rel: "stylesheet",
            href: l9,
            "data-precedence": u10
          }, a9), (a9 = ol.get(f11)) && qe5(l9, a9);
          var i9 = c6 = t8.createElement("link");
          ul(i9), cl(i9, "link", l9), i9._p = new Promise(function(d8, g9) {
            i9.onload = d8, i9.onerror = g9;
          }), i9.addEventListener("load", function() {
            e8.loading |= 1;
          }), i9.addEventListener("error", function() {
            e8.loading |= 2;
          }), e8.loading |= 4, bn(c6, u10, t8);
        }
        c6 = {
          type: "stylesheet",
          instance: c6,
          count: 1,
          state: e8
        }, n5.set(f11, c6);
      }
    }
  }
  function fd(l9, u10) {
    fu.X(l9, u10);
    var a9 = xa;
    if (a9 && l9) {
      var t8 = ga(a9).hoistableScripts, n5 = Va(l9), f11 = t8.get(n5);
      f11 || (f11 = a9.querySelector(Kt3(n5)), f11 || (l9 = j10({
        src: l9,
        async: true
      }, u10), (u10 = ol.get(n5)) && Be6(l9, u10), f11 = a9.createElement("script"), ul(f11), cl(f11, "link", l9), a9.head.appendChild(f11)), f11 = {
        type: "script",
        instance: f11,
        count: 1,
        state: null
      }, t8.set(n5, f11));
    }
  }
  function cd(l9, u10) {
    fu.M(l9, u10);
    var a9 = xa;
    if (a9 && l9) {
      var t8 = ga(a9).hoistableScripts, n5 = Va(l9), f11 = t8.get(n5);
      f11 || (f11 = a9.querySelector(Kt3(n5)), f11 || (l9 = j10({
        src: l9,
        async: true,
        type: "module"
      }, u10), (u10 = ol.get(n5)) && Be6(l9, u10), f11 = a9.createElement("script"), ul(f11), cl(f11, "link", l9), a9.head.appendChild(f11)), f11 = {
        type: "script",
        instance: f11,
        count: 1,
        state: null
      }, t8.set(n5, f11));
    }
  }
  function $i(l9, u10, a9, t8) {
    var n5 = (n5 = Tu.current) ? pn(n5) : null;
    if (!n5) throw Error(A6(446));
    switch (l9) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a9.precedence == "string" && typeof a9.href == "string" ? (u10 = _a(a9.href), a9 = ga(n5).hoistableStyles, t8 = a9.get(u10), t8 || (t8 = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a9.set(u10, t8)), t8) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a9.rel === "stylesheet" && typeof a9.href == "string" && typeof a9.precedence == "string") {
          l9 = _a(a9.href);
          var f11 = ga(n5).hoistableStyles, c6 = f11.get(l9);
          if (c6 || (n5 = n5.ownerDocument || n5, c6 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f11.set(l9, c6), (f11 = n5.querySelector(jt3(l9))) && !f11._p && (c6.instance = f11, c6.state.loading = 5), ol.has(l9) || (a9 = {
            rel: "preload",
            as: "style",
            href: a9.href,
            crossOrigin: a9.crossOrigin,
            integrity: a9.integrity,
            media: a9.media,
            hrefLang: a9.hrefLang,
            referrerPolicy: a9.referrerPolicy
          }, ol.set(l9, a9), f11 || ed(n5, l9, a9, c6.state))), u10 && t8 === null) throw Error(A6(528, ""));
          return c6;
        }
        if (u10 && t8 !== null) throw Error(A6(529, ""));
        return null;
      case "script":
        return u10 = a9.async, a9 = a9.src, typeof a9 == "string" && u10 && typeof u10 != "function" && typeof u10 != "symbol" ? (u10 = Va(a9), a9 = ga(n5).hoistableScripts, t8 = a9.get(u10), t8 || (t8 = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a9.set(u10, t8)), t8) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(A6(444, l9));
    }
  }
  function _a(l9) {
    return 'href="' + ql(l9) + '"';
  }
  function jt3(l9) {
    return 'link[rel="stylesheet"][' + l9 + "]";
  }
  function Bv(l9) {
    return j10({}, l9, {
      "data-precedence": l9.precedence,
      precedence: null
    });
  }
  function ed(l9, u10, a9, t8) {
    l9.querySelector('link[rel="preload"][as="style"][' + u10 + "]") ? t8.loading = 1 : (u10 = l9.createElement("link"), t8.preload = u10, u10.addEventListener("load", function() {
      return t8.loading |= 1;
    }), u10.addEventListener("error", function() {
      return t8.loading |= 2;
    }), cl(u10, "link", a9), ul(u10), l9.head.appendChild(u10));
  }
  function Va(l9) {
    return '[src="' + ql(l9) + '"]';
  }
  function Kt3(l9) {
    return "script[async]" + l9;
  }
  function Fi(l9, u10, a9) {
    if (u10.count++, u10.instance === null) switch (u10.type) {
      case "style":
        var t8 = l9.querySelector('style[data-href~="' + ql(a9.href) + '"]');
        if (t8) return u10.instance = t8, ul(t8), t8;
        var n5 = j10({}, a9, {
          "data-href": a9.href,
          "data-precedence": a9.precedence,
          href: null,
          precedence: null
        });
        return t8 = (l9.ownerDocument || l9).createElement("style"), ul(t8), cl(t8, "style", n5), bn(t8, a9.precedence, l9), u10.instance = t8;
      case "stylesheet":
        n5 = _a(a9.href);
        var f11 = l9.querySelector(jt3(n5));
        if (f11) return u10.state.loading |= 4, u10.instance = f11, ul(f11), f11;
        t8 = Bv(a9), (n5 = ol.get(n5)) && qe5(t8, n5), f11 = (l9.ownerDocument || l9).createElement("link"), ul(f11);
        var c6 = f11;
        return c6._p = new Promise(function(e8, i9) {
          c6.onload = e8, c6.onerror = i9;
        }), cl(f11, "link", t8), u10.state.loading |= 4, bn(f11, a9.precedence, l9), u10.instance = f11;
      case "script":
        return f11 = Va(a9.src), (n5 = l9.querySelector(Kt3(f11))) ? (u10.instance = n5, ul(n5), n5) : (t8 = a9, (n5 = ol.get(f11)) && (t8 = j10({}, a9), Be6(t8, n5)), l9 = l9.ownerDocument || l9, n5 = l9.createElement("script"), ul(n5), cl(n5, "link", t8), l9.head.appendChild(n5), u10.instance = n5);
      case "void":
        return null;
      default:
        throw Error(A6(443, u10.type));
    }
    else u10.type === "stylesheet" && (u10.state.loading & 4) === 0 && (t8 = u10.instance, u10.state.loading |= 4, bn(t8, a9.precedence, l9));
    return u10.instance;
  }
  function bn(l9, u10, a9) {
    for (var t8 = a9.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n5 = t8.length ? t8[t8.length - 1] : null, f11 = n5, c6 = 0; c6 < t8.length; c6++) {
      var e8 = t8[c6];
      if (e8.dataset.precedence === u10) f11 = e8;
      else if (f11 !== n5) break;
    }
    f11 ? f11.parentNode.insertBefore(l9, f11.nextSibling) : (u10 = a9.nodeType === 9 ? a9.head : a9, u10.insertBefore(l9, u10.firstChild));
  }
  function qe5(l9, u10) {
    l9.crossOrigin == null && (l9.crossOrigin = u10.crossOrigin), l9.referrerPolicy == null && (l9.referrerPolicy = u10.referrerPolicy), l9.title == null && (l9.title = u10.title);
  }
  function Be6(l9, u10) {
    l9.crossOrigin == null && (l9.crossOrigin = u10.crossOrigin), l9.referrerPolicy == null && (l9.referrerPolicy = u10.referrerPolicy), l9.integrity == null && (l9.integrity = u10.integrity);
  }
  var zn = null;
  function ki(l9, u10, a9) {
    if (zn === null) {
      var t8 = /* @__PURE__ */ new Map(), n5 = zn = /* @__PURE__ */ new Map();
      n5.set(a9, t8);
    } else n5 = zn, t8 = n5.get(a9), t8 || (t8 = /* @__PURE__ */ new Map(), n5.set(a9, t8));
    if (t8.has(l9)) return t8;
    for (t8.set(l9, null), a9 = a9.getElementsByTagName(l9), n5 = 0; n5 < a9.length; n5++) {
      var f11 = a9[n5];
      if (!(f11[Rt3] || f11[el] || l9 === "link" && f11.getAttribute("rel") === "stylesheet") && f11.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c6 = f11.getAttribute(u10) || "";
        c6 = l9 + c6;
        var e8 = t8.get(c6);
        e8 ? e8.push(f11) : t8.set(c6, [
          f11
        ]);
      }
    }
    return t8;
  }
  function ri(l9, u10, a9) {
    l9 = l9.ownerDocument || l9, l9.head.insertBefore(a9, u10 === "title" ? l9.querySelector("head > title") : null);
  }
  function id(l9, u10, a9) {
    if (a9 === 1 || u10.itemProp != null) return false;
    switch (l9) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof u10.precedence != "string" || typeof u10.href != "string" || u10.href === "") break;
        return true;
      case "link":
        if (typeof u10.rel != "string" || typeof u10.href != "string" || u10.href === "" || u10.onLoad || u10.onError) break;
        switch (u10.rel) {
          case "stylesheet":
            return l9 = u10.disabled, typeof u10.precedence == "string" && l9 == null;
          default:
            return true;
        }
      case "script":
        if (u10.async && typeof u10.async != "function" && typeof u10.async != "symbol" && !u10.onLoad && !u10.onError && u10.src && typeof u10.src == "string") return true;
    }
    return false;
  }
  function Rv(l9) {
    return !(l9.type === "stylesheet" && (l9.state.loading & 3) === 0);
  }
  var Et2 = null;
  function vd() {
  }
  function hd(l9, u10, a9) {
    if (Et2 === null) throw Error(A6(475));
    var t8 = Et2;
    if (u10.type === "stylesheet" && (typeof a9.media != "string" || matchMedia(a9.media).matches !== false) && (u10.state.loading & 4) === 0) {
      if (u10.instance === null) {
        var n5 = _a(a9.href), f11 = l9.querySelector(jt3(n5));
        if (f11) {
          l9 = f11._p, l9 !== null && typeof l9 == "object" && typeof l9.then == "function" && (t8.count++, t8 = Jn.bind(t8), l9.then(t8, t8)), u10.state.loading |= 4, u10.instance = f11, ul(f11);
          return;
        }
        f11 = l9.ownerDocument || l9, a9 = Bv(a9), (n5 = ol.get(n5)) && qe5(a9, n5), f11 = f11.createElement("link"), ul(f11);
        var c6 = f11;
        c6._p = new Promise(function(e8, i9) {
          c6.onload = e8, c6.onerror = i9;
        }), cl(f11, "link", a9), u10.instance = f11;
      }
      t8.stylesheets === null && (t8.stylesheets = /* @__PURE__ */ new Map()), t8.stylesheets.set(u10, l9), (l9 = u10.state.preload) && (u10.state.loading & 3) === 0 && (t8.count++, u10 = Jn.bind(t8), l9.addEventListener("load", u10), l9.addEventListener("error", u10));
    }
  }
  function yd() {
    if (Et2 === null) throw Error(A6(475));
    var l9 = Et2;
    return l9.stylesheets && l9.count === 0 && Zc(l9, l9.stylesheets), 0 < l9.count ? function(u10) {
      var a9 = setTimeout(function() {
        if (l9.stylesheets && Zc(l9, l9.stylesheets), l9.unsuspend) {
          var t8 = l9.unsuspend;
          l9.unsuspend = null, t8();
        }
      }, 6e4);
      return l9.unsuspend = u10, function() {
        l9.unsuspend = null, clearTimeout(a9);
      };
    } : null;
  }
  function Jn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l9 = this.unsuspend;
        this.unsuspend = null, l9();
      }
    }
  }
  var Wn = null;
  function Zc(l9, u10) {
    l9.stylesheets = null, l9.unsuspend !== null && (l9.count++, Wn = /* @__PURE__ */ new Map(), u10.forEach(dd, l9), Wn = null, Jn.call(l9));
  }
  function dd(l9, u10) {
    if (!(u10.state.loading & 4)) {
      var a9 = Wn.get(l9);
      if (a9) var t8 = a9.get(null);
      else {
        a9 = /* @__PURE__ */ new Map(), Wn.set(l9, a9);
        for (var n5 = l9.querySelectorAll("link[data-precedence],style[data-precedence]"), f11 = 0; f11 < n5.length; f11++) {
          var c6 = n5[f11];
          (c6.nodeName === "LINK" || c6.getAttribute("media") !== "not all") && (a9.set(c6.dataset.precedence, c6), t8 = c6);
        }
        t8 && a9.set(null, t8);
      }
      n5 = u10.instance, c6 = n5.getAttribute("data-precedence"), f11 = a9.get(c6) || t8, f11 === t8 && a9.set(null, n5), a9.set(c6, n5), this.count++, t8 = Jn.bind(this), n5.addEventListener("load", t8), n5.addEventListener("error", t8), f11 ? f11.parentNode.insertBefore(n5, f11.nextSibling) : (l9 = l9.nodeType === 9 ? l9.head : l9, l9.insertBefore(n5, l9.firstChild)), u10.state.loading |= 4;
    }
  }
  var Dt3 = {
    $$typeof: $l,
    Provider: null,
    Consumer: null,
    _currentValue: Qu,
    _currentValue2: Qu,
    _threadCount: 0
  };
  function Sd(l9, u10, a9, t8, n5, f11, c6, e8) {
    this.tag = 1, this.containerInfo = l9, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.hiddenUpdates = gf(null), this.identifierPrefix = t8, this.onUncaughtError = n5, this.onCaughtError = f11, this.onRecoverableError = c6, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = e8, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yv(l9, u10, a9, t8, n5, f11, c6, e8, i9, d8, g9, z10) {
    return l9 = new Sd(l9, u10, a9, c6, e8, i9, d8, z10), u10 = 1, f11 === true && (u10 |= 24), f11 = Al(3, null, null, u10), l9.current = f11, f11.stateNode = l9, u10 = te2(), u10.refCount++, l9.pooledCache = u10, u10.refCount++, f11.memoizedState = {
      element: t8,
      isDehydrated: a9,
      cache: u10
    }, fe5(f11), l9;
  }
  function ov(l9) {
    return l9 ? (l9 = ya, l9) : ya;
  }
  function _v(l9, u10, a9, t8, n5, f11) {
    n5 = ov(n5), t8.context === null ? t8.context = n5 : t8.pendingContext = n5, t8 = Mu(u10), t8.payload = {
      element: a9
    }, f11 = f11 === void 0 ? null : f11, f11 !== null && (t8.callback = f11), a9 = Eu(l9, t8, u10), a9 !== null && (Dl(a9, l9, u10), tt4(a9, l9, u10));
  }
  function Ii(l9, u10) {
    if (l9 = l9.memoizedState, l9 !== null && l9.dehydrated !== null) {
      var a9 = l9.retryLane;
      l9.retryLane = a9 !== 0 && a9 < u10 ? a9 : u10;
    }
  }
  function Re6(l9, u10) {
    Ii(l9, u10), (l9 = l9.alternate) && Ii(l9, u10);
  }
  function Xv(l9) {
    if (l9.tag === 13) {
      var u10 = Qa(l9, 67108864);
      u10 !== null && Dl(u10, l9, 67108864), Re6(l9, 67108864);
    }
  }
  var wn = true;
  function md(l9, u10, a9, t8) {
    var n5 = s8.T;
    s8.T = null;
    var f11 = o7.p;
    try {
      o7.p = 2, Ye6(l9, u10, a9, t8);
    } finally {
      o7.p = f11, s8.T = n5;
    }
  }
  function gd(l9, u10, a9, t8) {
    var n5 = s8.T;
    s8.T = null;
    var f11 = o7.p;
    try {
      o7.p = 8, Ye6(l9, u10, a9, t8);
    } finally {
      o7.p = f11, s8.T = n5;
    }
  }
  function Ye6(l9, u10, a9, t8) {
    if (wn) {
      var n5 = xc(t8);
      if (n5 === null) Lf(l9, u10, t8, $n, a9), Pi(l9, t8);
      else if (zd(n5, l9, u10, a9, t8)) t8.stopPropagation();
      else if (Pi(l9, t8), u10 & 4 && -1 < bd.indexOf(l9)) {
        for (; n5 !== null; ) {
          var f11 = Ga(n5);
          if (f11 !== null) switch (f11.tag) {
            case 3:
              if (f11 = f11.stateNode, f11.current.memoizedState.isDehydrated) {
                var c6 = _u(f11.pendingLanes);
                if (c6 !== 0) {
                  var e8 = f11;
                  for (e8.pendingLanes |= 2, e8.entangledLanes |= 2; c6; ) {
                    var i9 = 1 << 31 - Ml(c6);
                    e8.entanglements[1] |= i9, c6 &= ~i9;
                  }
                  Ll(f11), (X6 & 6) === 0 && (xn = jl() + 500, Vt2(0, false));
                }
              }
              break;
            case 13:
              e8 = Qa(f11, 2), e8 !== null && Dl(e8, f11, 2), ff(), Re6(f11, 2);
          }
          if (f11 = xc(t8), f11 === null && Lf(l9, u10, t8, $n, a9), f11 === n5) break;
          n5 = f11;
        }
        n5 !== null && t8.stopPropagation();
      } else Lf(l9, u10, t8, null, a9);
    }
  }
  function xc(l9) {
    return l9 = wc(l9), oe5(l9);
  }
  var $n = null;
  function oe5(l9) {
    if ($n = null, l9 = fa(l9), l9 !== null) {
      var u10 = Ht3(l9);
      if (u10 === null) l9 = null;
      else {
        var a9 = u10.tag;
        if (a9 === 13) {
          if (l9 = f0(u10), l9 !== null) return l9;
          l9 = null;
        } else if (a9 === 3) {
          if (u10.stateNode.current.memoizedState.isDehydrated) return u10.tag === 3 ? u10.stateNode.containerInfo : null;
          l9 = null;
        } else u10 !== l9 && (l9 = null);
      }
    }
    return $n = l9, null;
  }
  function Gv(l9) {
    switch (l9) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (th()) {
          case v0:
            return 2;
          case h0:
            return 8;
          case Dn:
          case nh:
            return 32;
          case y0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vc = false, su = null, Uu = null, Hu = null, Ot3 = /* @__PURE__ */ new Map(), st4 = /* @__PURE__ */ new Map(), mu = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Pi(l9, u10) {
    switch (l9) {
      case "focusin":
      case "focusout":
        su = null;
        break;
      case "dragenter":
      case "dragleave":
        Uu = null;
        break;
      case "mouseover":
      case "mouseout":
        Hu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ot3.delete(u10.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        st4.delete(u10.pointerId);
    }
  }
  function Wa(l9, u10, a9, t8, n5, f11) {
    return l9 === null || l9.nativeEvent !== f11 ? (l9 = {
      blockedOn: u10,
      domEventName: a9,
      eventSystemFlags: t8,
      nativeEvent: f11,
      targetContainers: [
        n5
      ]
    }, u10 !== null && (u10 = Ga(u10), u10 !== null && Xv(u10)), l9) : (l9.eventSystemFlags |= t8, u10 = l9.targetContainers, n5 !== null && u10.indexOf(n5) === -1 && u10.push(n5), l9);
  }
  function zd(l9, u10, a9, t8, n5) {
    switch (u10) {
      case "focusin":
        return su = Wa(su, l9, u10, a9, t8, n5), true;
      case "dragenter":
        return Uu = Wa(Uu, l9, u10, a9, t8, n5), true;
      case "mouseover":
        return Hu = Wa(Hu, l9, u10, a9, t8, n5), true;
      case "pointerover":
        var f11 = n5.pointerId;
        return Ot3.set(f11, Wa(Ot3.get(f11) || null, l9, u10, a9, t8, n5)), true;
      case "gotpointercapture":
        return f11 = n5.pointerId, st4.set(f11, Wa(st4.get(f11) || null, l9, u10, a9, t8, n5)), true;
    }
    return false;
  }
  function Qv(l9) {
    var u10 = fa(l9.target);
    if (u10 !== null) {
      var a9 = Ht3(u10);
      if (a9 !== null) {
        if (u10 = a9.tag, u10 === 13) {
          if (u10 = f0(a9), u10 !== null) {
            l9.blockedOn = u10, dh(l9.priority, function() {
              if (a9.tag === 13) {
                var t8 = El();
                t8 = Lc(t8);
                var n5 = Qa(a9, t8);
                n5 !== null && Dl(n5, a9, t8), Re6(a9, t8);
              }
            });
            return;
          }
        } else if (u10 === 3 && a9.stateNode.current.memoizedState.isDehydrated) {
          l9.blockedOn = a9.tag === 3 ? a9.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l9.blockedOn = null;
  }
  function An(l9) {
    if (l9.blockedOn !== null) return false;
    for (var u10 = l9.targetContainers; 0 < u10.length; ) {
      var a9 = xc(l9.nativeEvent);
      if (a9 === null) {
        a9 = l9.nativeEvent;
        var t8 = new a9.constructor(a9.type, a9);
        ac = t8, a9.target.dispatchEvent(t8), ac = null;
      } else return u10 = Ga(a9), u10 !== null && Xv(u10), l9.blockedOn = a9, false;
      u10.shift();
    }
    return true;
  }
  function l0(l9, u10, a9) {
    An(l9) && a9.delete(u10);
  }
  function Ad() {
    Vc = false, su !== null && An(su) && (su = null), Uu !== null && An(Uu) && (Uu = null), Hu !== null && An(Hu) && (Hu = null), Ot3.forEach(l0), st4.forEach(l0);
  }
  function tn2(l9, u10) {
    l9.blockedOn === u10 && (l9.blockedOn = null, Vc || (Vc = true, I6.unstable_scheduleCallback(I6.unstable_NormalPriority, Ad)));
  }
  var nn2 = null;
  function u0(l9) {
    nn2 !== l9 && (nn2 = l9, I6.unstable_scheduleCallback(I6.unstable_NormalPriority, function() {
      nn2 === l9 && (nn2 = null);
      for (var u10 = 0; u10 < l9.length; u10 += 3) {
        var a9 = l9[u10], t8 = l9[u10 + 1], n5 = l9[u10 + 2];
        if (typeof t8 != "function") {
          if (oe5(t8 || a9) === null) continue;
          break;
        }
        var f11 = Ga(a9);
        f11 !== null && (l9.splice(u10, 3), u10 -= 3, Ac(f11, {
          pending: true,
          data: n5,
          method: a9.method,
          action: t8
        }, t8, n5));
      }
    }));
  }
  function Ut3(l9) {
    function u10(i9) {
      return tn2(i9, l9);
    }
    su !== null && tn2(su, l9), Uu !== null && tn2(Uu, l9), Hu !== null && tn2(Hu, l9), Ot3.forEach(u10), st4.forEach(u10);
    for (var a9 = 0; a9 < mu.length; a9++) {
      var t8 = mu[a9];
      t8.blockedOn === l9 && (t8.blockedOn = null);
    }
    for (; 0 < mu.length && (a9 = mu[0], a9.blockedOn === null); ) Qv(a9), a9.blockedOn === null && mu.shift();
    if (a9 = (l9.ownerDocument || l9).$$reactFormReplay, a9 != null) for (t8 = 0; t8 < a9.length; t8 += 3) {
      var n5 = a9[t8], f11 = a9[t8 + 1], c6 = n5[Sl] || null;
      if (typeof f11 == "function") c6 || u0(a9);
      else if (c6) {
        var e8 = null;
        if (f11 && f11.hasAttribute("formAction")) {
          if (n5 = f11, c6 = f11[Sl] || null) e8 = c6.formAction;
          else if (oe5(n5) !== null) continue;
        } else e8 = c6.action;
        typeof e8 == "function" ? a9[t8 + 1] = e8 : (a9.splice(t8, 3), t8 -= 3), u0(a9);
      }
    }
  }
  function _e6(l9) {
    this._internalRoot = l9;
  }
  hf.prototype.render = _e6.prototype.render = function(l9) {
    var u10 = this._internalRoot;
    if (u10 === null) throw Error(A6(409));
    var a9 = u10.current, t8 = El();
    _v(a9, t8, l9, u10, null, null);
  };
  hf.prototype.unmount = _e6.prototype.unmount = function() {
    var l9 = this._internalRoot;
    if (l9 !== null) {
      this._internalRoot = null;
      var u10 = l9.containerInfo;
      _v(l9.current, 2, null, l9, null, null), ff(), u10[Xa] = null;
    }
  };
  function hf(l9) {
    this._internalRoot = l9;
  }
  hf.prototype.unstable_scheduleHydration = function(l9) {
    if (l9) {
      var u10 = b0();
      l9 = {
        blockedOn: null,
        target: l9,
        priority: u10
      };
      for (var a9 = 0; a9 < mu.length && u10 !== 0 && u10 < mu[a9].priority; a9++) ;
      mu.splice(a9, 0, l9), a9 === 0 && Qv(l9);
    }
  };
  var a0 = t0.version;
  if (a0 !== "19.1.1") throw Error(A6(527, a0, "19.1.1"));
  o7.findDOMNode = function(l9) {
    var u10 = l9._reactInternals;
    if (u10 === void 0) throw typeof l9.render == "function" ? Error(A6(188)) : (l9 = Object.keys(l9).join(","), Error(A6(268, l9)));
    return l9 = kv(u10), l9 = l9 !== null ? c0(l9) : null, l9 = l9 === null ? null : l9.stateNode, l9;
  };
  var Td = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: s8,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (wa = __REACT_DEVTOOLS_GLOBAL_HOOK__, !wa.isDisabled && wa.supportsFiber)) try {
    Nt2 = wa.inject(Td), Tl = wa;
  } catch {
  }
  var wa;
  yf.createRoot = function(l9, u10) {
    if (!n0(l9)) throw Error(A6(299));
    var a9 = false, t8 = "", n5 = Y1, f11 = o1, c6 = _1, e8 = null;
    return u10 != null && (u10.unstable_strictMode === true && (a9 = true), u10.identifierPrefix !== void 0 && (t8 = u10.identifierPrefix), u10.onUncaughtError !== void 0 && (n5 = u10.onUncaughtError), u10.onCaughtError !== void 0 && (f11 = u10.onCaughtError), u10.onRecoverableError !== void 0 && (c6 = u10.onRecoverableError), u10.unstable_transitionCallbacks !== void 0 && (e8 = u10.unstable_transitionCallbacks)), u10 = Yv(l9, 1, false, null, null, a9, t8, n5, f11, c6, e8, null), l9[Xa] = u10.current, Ne6(l9), new _e6(u10);
  };
  yf.hydrateRoot = function(l9, u10, a9) {
    if (!n0(l9)) throw Error(A6(299));
    var t8 = false, n5 = "", f11 = Y1, c6 = o1, e8 = _1, i9 = null, d8 = null;
    return a9 != null && (a9.unstable_strictMode === true && (t8 = true), a9.identifierPrefix !== void 0 && (n5 = a9.identifierPrefix), a9.onUncaughtError !== void 0 && (f11 = a9.onUncaughtError), a9.onCaughtError !== void 0 && (c6 = a9.onCaughtError), a9.onRecoverableError !== void 0 && (e8 = a9.onRecoverableError), a9.unstable_transitionCallbacks !== void 0 && (i9 = a9.unstable_transitionCallbacks), a9.formState !== void 0 && (d8 = a9.formState)), u10 = Yv(l9, 1, true, u10, a9 ?? null, t8, n5, f11, c6, e8, i9, d8), u10.context = ov(null), a9 = u10.current, t8 = El(), t8 = Lc(t8), n5 = Mu(t8), n5.callback = null, Eu(a9, n5, t8), a9 = t8, u10.current.lanes = a9, Bt2(u10, a9), Ll(u10), l9[Xa] = u10.current, Ne6(l9), new hf(u10);
  };
  yf.version = "19.1.1";
});
var jv = Ge2((Dd, Vv) => {
  "use strict";
  function xv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv);
    } catch (l9) {
      console.error(l9);
    }
  }
  xv(), Vv.exports = Zv();
});
var df = $v(jv());
var { createRoot: Od, hydrateRoot: sd, version: Ud } = df;
var Hd = df.default ?? df;

// deno:https://esm.sh/regexparam@3.0.0/denonext/regexparam.mjs
function l2(s8, f11) {
  if (s8 instanceof RegExp) return {
    keys: false,
    pattern: s8
  };
  var t8, n5, e8, r8, a9 = [], i9 = "", p9 = s8.split("/");
  for (p9[0] || p9.shift(); e8 = p9.shift(); ) t8 = e8[0], t8 === "*" ? (a9.push(t8), i9 += e8[1] === "?" ? "(?:/(.*))?" : "/(.*)") : t8 === ":" ? (n5 = e8.indexOf("?", 1), r8 = e8.indexOf(".", 1), a9.push(e8.substring(1, ~n5 ? n5 : ~r8 ? r8 : e8.length)), i9 += ~n5 && !~r8 ? "(?:/([^/]+?))?" : "/([^/]+?)", ~r8 && (i9 += (~n5 ? "?" : "") + "\\" + e8.substring(r8))) : i9 += "/" + e8;
  return {
    keys: a9,
    pattern: new RegExp("^" + i9 + (f11 ? "(?=$|/)" : "/?$"), "i")
  };
}

// deno:https://esm.sh/react@19.1.1?target=denonext
var react_19_1_exports = {};
__export(react_19_1_exports, {
  Children: () => ce,
  Component: () => pe,
  Fragment: () => ae,
  Profiler: () => _e,
  PureComponent: () => le,
  StrictMode: () => Ee,
  Suspense: () => ye,
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => ve,
  __COMPILER_RUNTIME: () => Re,
  cache: () => me,
  cloneElement: () => Te,
  createContext: () => de,
  createElement: () => Ce,
  createRef: () => Se,
  default: () => Qe,
  forwardRef: () => Ae,
  isValidElement: () => we,
  lazy: () => he,
  memo: () => Oe,
  startTransition: () => ge,
  unstable_useCacheRefresh: () => Ne,
  use: () => je,
  useActionState: () => Pe,
  useCallback: () => He,
  useContext: () => Ie,
  useDebugValue: () => $e,
  useDeferredValue: () => Me,
  useEffect: () => Le,
  useId: () => Ue,
  useImperativeHandle: () => Ye,
  useInsertionEffect: () => xe,
  useLayoutEffect: () => De,
  useMemo: () => be,
  useOptimistic: () => ke,
  useReducer: () => qe,
  useRef: () => ze,
  useState: () => Ge,
  useSyncExternalStore: () => Ke,
  useTransition: () => We,
  version: () => Be
});

// deno:https://esm.sh/use-sync-external-store@1.5.0/denonext/shim/index.mjs
var require4 = (n5) => {
  const e8 = (m13) => typeof m13.default < "u" ? m13.default : m13, c6 = (m13) => Object.assign({
    __esModule: true
  }, m13);
  switch (n5) {
    case "react":
      return e8(react_19_1_exports);
    default:
      console.error('module "' + n5 + '" not found');
      return null;
  }
};
var v3 = Object.create;
var i2 = Object.defineProperty;
var E4 = Object.getOwnPropertyDescriptor;
var m2 = Object.getOwnPropertyNames;
var y2 = Object.getPrototypeOf;
var h2 = Object.prototype.hasOwnProperty;
var j3 = ((e8) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(e8, {
  get: (t8, n5) => (typeof require4 < "u" ? require4 : t8)[n5]
}) : e8)(function(e8) {
  if (typeof require4 < "u") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + e8 + '" is not supported');
});
var f2 = (e8, t8) => () => (t8 || e8((t8 = {
  exports: {}
}).exports, t8), t8.exports);
var x4 = (e8, t8, n5, u10) => {
  if (t8 && typeof t8 == "object" || typeof t8 == "function") for (let r8 of m2(t8)) !h2.call(e8, r8) && r8 !== n5 && i2(e8, r8, {
    get: () => t8[r8],
    enumerable: !(u10 = E4(t8, r8)) || u10.enumerable
  });
  return e8;
};
var w2 = (e8, t8, n5) => (n5 = e8 != null ? v3(y2(e8)) : {}, x4(t8 || !e8 || !e8.__esModule ? i2(n5, "default", {
  value: e8,
  enumerable: true
}) : n5, e8));
var d2 = f2((l9) => {
  "use strict";
  var o7 = j3("react");
  function b12(e8, t8) {
    return e8 === t8 && (e8 !== 0 || 1 / e8 === 1 / t8) || e8 !== e8 && t8 !== t8;
  }
  var g9 = typeof Object.is == "function" ? Object.is : b12, q9 = o7.useState, D8 = o7.useEffect, O6 = o7.useLayoutEffect, V8 = o7.useDebugValue;
  function I6(e8, t8) {
    var n5 = t8(), u10 = q9({
      inst: {
        value: n5,
        getSnapshot: t8
      }
    }), r8 = u10[0].inst, c6 = u10[1];
    return O6(function() {
      r8.value = n5, r8.getSnapshot = t8, a9(r8) && c6({
        inst: r8
      });
    }, [
      e8,
      n5,
      t8
    ]), D8(function() {
      return a9(r8) && c6({
        inst: r8
      }), e8(function() {
        a9(r8) && c6({
          inst: r8
        });
      });
    }, [
      e8
    ]), V8(n5), n5;
  }
  function a9(e8) {
    var t8 = e8.getSnapshot;
    e8 = e8.value;
    try {
      var n5 = t8();
      return !g9(e8, n5);
    } catch {
      return true;
    }
  }
  function L6(e8, t8) {
    return t8();
  }
  var N4 = typeof globalThis > "u" || typeof globalThis.document > "u" || typeof globalThis.document.createElement > "u" ? L6 : I6;
  l9.useSyncExternalStore = o7.useSyncExternalStore !== void 0 ? o7.useSyncExternalStore : N4;
});
var p3 = f2((k13, S11) => {
  "use strict";
  S11.exports = d2();
});
var s = w2(p3());
var { useSyncExternalStore: C3 } = s;
var G4 = s.default ?? s;

// deno:https://esm.sh/wouter@3.7.1/denonext/esm/react-deps.mjs
var c = xe;
var s2 = typeof globalThis < "u" && typeof globalThis.document < "u" && typeof globalThis.document.createElement < "u";
var f3 = s2 ? De : Le;
var r = c || f3;
var u2 = (n5) => {
  let t8 = ze([
    n5,
    (...o7) => t8[0](...o7)
  ]).current;
  return r(() => {
    t8[0] = n5;
  }), t8[1];
};

// deno:https://esm.sh/wouter@3.7.1/denonext/use-browser-location.mjs
var p4 = "popstate";
var o = "pushState";
var s3 = "replaceState";
var f4 = "hashchange";
var a2 = [
  p4,
  o,
  s3,
  f4
];
var v4 = (t8) => {
  for (let e8 of a2) addEventListener(e8, t8);
  return () => {
    for (let e8 of a2) removeEventListener(e8, t8);
  };
};
var r2 = (t8, e8) => C3(v4, t8, e8);
var y3 = () => location.search;
var g2 = ({ ssrSearch: t8 = "" } = {}) => r2(y3, () => t8);
var i3 = () => location.pathname;
var l3 = ({ ssrPath: t8 } = {}) => r2(i3, t8 ? () => t8 : i3);
var S3 = (t8, { replace: e8 = false, state: n5 = null } = {}) => history[e8 ? s3 : o](n5, "", t8);
var E5 = (t8 = {}) => [
  l3(t8),
  S3
];
var u3 = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof globalThis[u3] > "u") {
  for (let t8 of [
    o,
    s3
  ]) {
    let e8 = history[t8];
    history[t8] = function() {
      let n5 = e8.apply(this, arguments), c6 = new Event(t8);
      return c6.arguments = arguments, dispatchEvent(c6), n5;
    };
  }
  Object.defineProperty(globalThis, u3, {
    value: true
  });
}

// deno:https://esm.sh/wouter@3.7.1/denonext/wouter.mjs
var Q = (e8, t8) => t8.toLowerCase().indexOf(e8.toLowerCase()) ? "~" + t8 : t8.slice(e8.length) || "/";
var j4 = (e8 = "") => e8 === "/" ? "" : e8;
var T3 = (e8, t8) => e8[0] === "~" ? e8.slice(1) : j4(t8) + e8;
var V2 = (e8 = "", t8) => Q(k4(j4(e8)), k4(t8));
var k4 = (e8) => {
  try {
    return decodeURI(e8);
  } catch {
    return e8;
  }
};
var v5 = {
  hook: E5,
  searchHook: g2,
  parser: l2,
  base: "",
  ssrPath: void 0,
  ssrSearch: void 0,
  ssrContext: void 0,
  hrefs: (e8) => e8
};
var O = de(v5);
var h3 = () => Ie(O);
var _2 = {};
var K3 = de(_2);
var P = (e8) => {
  let [t8, s8] = e8.hook(e8);
  return [
    V2(e8.base, t8),
    u2((r8, n5) => s8(T3(r8, e8.base), n5))
  ];
};
var W = ({ children: e8, ...t8 }) => {
  let s8 = h3(), r8 = t8.hook ? v5 : s8, n5 = r8, [u10, o7] = t8.ssrPath?.split("?") ?? [];
  o7 && (t8.ssrSearch = o7, t8.ssrPath = u10), t8.hrefs = t8.hrefs ?? t8.hook?.hrefs;
  let i9 = ze({}), l9 = i9.current, c6 = l9;
  for (let a9 in r8) {
    let m13 = a9 === "base" ? r8[a9] + (t8[a9] || "") : t8[a9] || r8[a9];
    l9 === c6 && m13 !== c6[a9] && (i9.current = c6 = {
      ...c6
    }), c6[a9] = m13, (m13 !== r8[a9] || m13 !== n5[a9]) && (n5 = c6);
  }
  return Ce(O.Provider, {
    value: n5,
    children: e8
  });
};
var ne = Ae((e8, t8) => {
  let s8 = h3(), [r8, n5] = P(s8), { to: u10 = "", href: o7 = u10, onClick: i9, asChild: l9, children: c6, className: a9, replace: m13, state: R8, ...D8 } = e8, b12 = u2((f11) => {
    f11.ctrlKey || f11.metaKey || f11.altKey || f11.shiftKey || f11.button !== 0 || (i9?.(f11), f11.defaultPrevented || (f11.preventDefault(), n5(o7, e8)));
  }), g9 = s8.hrefs(o7[0] === "~" ? o7.slice(1) : s8.base + o7, s8);
  return l9 && we(c6) ? Te(c6, {
    onClick: b12,
    href: g9
  }) : Ce("a", {
    ...D8,
    onClick: b12,
    href: g9,
    className: a9?.call ? a9(r8 === o7) : a9,
    children: c6,
    ref: t8
  });
});

// languages/index.ts
var languages_exports = {};
__export(languages_exports, {
  en: () => en_default,
  zh: () => zh_default
});

// languages/zh.ts
var zh_default = {};

// languages/en.ts
var en_default = {};

// hooks/i18n.tsx
var I18nContext = /* @__PURE__ */ de(void 0);
var I18nProvider = ({ children, lang = "en" }) => {
  const [l9, setLang] = Ge(lang);
  const t8 = He((key, params) => {
    const translations = {
      ...languages_exports
    };
    let text = translations[l9]?.[key] || translations.en[key] || key;
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(new RegExp(`\\{${param}\\}`, "g"), String(value));
      });
    }
    return text;
  }, [
    l9
  ]);
  return /* @__PURE__ */ q(I18nContext.Provider, {
    value: {
      lang: l9,
      setLang,
      t: t8
    },
    children
  });
};

// deno:https://esm.sh/react@19.2.0-canary-fa3feba6-20250623/denonext/react.mjs
var U2 = Object.create;
var S4 = Object.defineProperty;
var D3 = Object.getOwnPropertyDescriptor;
var k5 = Object.getOwnPropertyNames;
var b3 = Object.getPrototypeOf;
var q4 = Object.prototype.hasOwnProperty;
var A2 = (e8, t8) => () => (t8 || e8((t8 = {
  exports: {}
}).exports, t8), t8.exports);
var z4 = (e8, t8, n5, r8) => {
  if (t8 && typeof t8 == "object" || typeof t8 == "function") for (let o7 of k5(t8)) !q4.call(e8, o7) && o7 !== n5 && S4(e8, o7, {
    get: () => t8[o7],
    enumerable: !(r8 = D3(t8, o7)) || r8.enumerable
  });
  return e8;
};
var G5 = (e8, t8, n5) => (n5 = e8 != null ? U2(b3(e8)) : {}, z4(t8 || !e8 || !e8.__esModule ? S4(n5, "default", {
  value: e8,
  enumerable: true
}) : n5, e8));
var $2 = A2((u10) => {
  "use strict";
  var R8 = Symbol.for("react.transitional.element"), K9 = Symbol.for("react.portal"), W6 = Symbol.for("react.fragment"), B7 = Symbol.for("react.strict_mode"), Q5 = Symbol.for("react.profiler"), X6 = Symbol.for("react.consumer"), Z6 = Symbol.for("react.context"), J5 = Symbol.for("react.forward_ref"), V8 = Symbol.for("react.suspense"), F7 = Symbol.for("react.memo"), N4 = Symbol.for("react.lazy"), w5 = Symbol.iterator;
  function ee4(e8) {
    return e8 === null || typeof e8 != "object" ? null : (e8 = w5 && e8[w5] || e8["@@iterator"], typeof e8 == "function" ? e8 : null);
  }
  var j10 = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P7 = Object.assign, H6 = {};
  function l9(e8, t8, n5) {
    this.props = e8, this.context = t8, this.refs = H6, this.updater = n5 || j10;
  }
  l9.prototype.isReactComponent = {};
  l9.prototype.setState = function(e8, t8) {
    if (typeof e8 != "object" && typeof e8 != "function" && e8 != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e8, t8, "setState");
  };
  l9.prototype.forceUpdate = function(e8) {
    this.updater.enqueueForceUpdate(this, e8, "forceUpdate");
  };
  function I6() {
  }
  I6.prototype = l9.prototype;
  function m13(e8, t8, n5) {
    this.props = e8, this.context = t8, this.refs = H6, this.updater = n5 || j10;
  }
  var T8 = m13.prototype = new I6();
  T8.constructor = m13;
  P7(T8, l9.prototype);
  T8.isPureReactComponent = true;
  var O6 = Array.isArray;
  function v13() {
  }
  var i9 = {
    H: null,
    A: null,
    T: null,
    S: null
  }, M5 = Object.prototype.hasOwnProperty;
  function C10(e8, t8, n5, r8, o7, f11) {
    return n5 = f11.ref, {
      $$typeof: R8,
      type: e8,
      key: t8,
      ref: n5 !== void 0 ? n5 : null,
      props: f11
    };
  }
  function te2(e8, t8) {
    return C10(e8.type, t8, void 0, void 0, void 0, e8.props);
  }
  function d8(e8) {
    return typeof e8 == "object" && e8 !== null && e8.$$typeof === R8;
  }
  function ne4(e8) {
    var t8 = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e8.replace(/[=:]/g, function(n5) {
      return t8[n5];
    });
  }
  var h10 = /\/+/g;
  function y10(e8, t8) {
    return typeof e8 == "object" && e8 !== null && e8.key != null ? ne4("" + e8.key) : t8.toString(36);
  }
  function re3(e8) {
    switch (e8.status) {
      case "fulfilled":
        return e8.value;
      case "rejected":
        throw e8.reason;
      default:
        switch (typeof e8.status == "string" ? e8.then(v13, v13) : (e8.status = "pending", e8.then(function(t8) {
          e8.status === "pending" && (e8.status = "fulfilled", e8.value = t8);
        }, function(t8) {
          e8.status === "pending" && (e8.status = "rejected", e8.reason = t8);
        })), e8.status) {
          case "fulfilled":
            return e8.value;
          case "rejected":
            throw e8.reason;
        }
    }
    throw e8;
  }
  function a9(e8, t8, n5, r8, o7) {
    var f11 = typeof e8;
    (f11 === "undefined" || f11 === "boolean") && (e8 = null);
    var s8 = false;
    if (e8 === null) s8 = true;
    else switch (f11) {
      case "bigint":
      case "string":
      case "number":
        s8 = true;
        break;
      case "object":
        switch (e8.$$typeof) {
          case R8:
          case K9:
            s8 = true;
            break;
          case N4:
            return s8 = e8._init, a9(s8(e8._payload), t8, n5, r8, o7);
        }
    }
    if (s8) return o7 = o7(e8), s8 = r8 === "" ? "." + y10(e8, 0) : r8, O6(o7) ? (n5 = "", s8 != null && (n5 = s8.replace(h10, "$&/") + "/"), a9(o7, t8, n5, "", function(x10) {
      return x10;
    })) : o7 != null && (d8(o7) && (o7 = te2(o7, n5 + (o7.key == null || e8 && e8.key === o7.key ? "" : ("" + o7.key).replace(h10, "$&/") + "/") + s8)), t8.push(o7)), 1;
    s8 = 0;
    var p9 = r8 === "" ? "." : r8 + ":";
    if (O6(e8)) for (var c6 = 0; c6 < e8.length; c6++) r8 = e8[c6], f11 = p9 + y10(r8, c6), s8 += a9(r8, t8, n5, f11, o7);
    else if (c6 = ee4(e8), typeof c6 == "function") for (e8 = c6.call(e8), c6 = 0; !(r8 = e8.next()).done; ) r8 = r8.value, f11 = p9 + y10(r8, c6++), s8 += a9(r8, t8, n5, f11, o7);
    else if (f11 === "object") {
      if (typeof e8.then == "function") return a9(re3(e8), t8, n5, r8, o7);
      throw t8 = String(e8), Error("Objects are not valid as a React child (found: " + (t8 === "[object Object]" ? "object with keys {" + Object.keys(e8).join(", ") + "}" : t8) + "). If you meant to render a collection of children, use an array instead.");
    }
    return s8;
  }
  function _8(e8, t8, n5) {
    if (e8 == null) return e8;
    var r8 = [], o7 = 0;
    return a9(e8, r8, "", "", function(f11) {
      return t8.call(n5, f11, o7++);
    }), r8;
  }
  function ue3(e8) {
    if (e8._status === -1) {
      var t8 = e8._result;
      t8 = t8(), t8.then(function(n5) {
        (e8._status === 0 || e8._status === -1) && (e8._status = 1, e8._result = n5);
      }, function(n5) {
        (e8._status === 0 || e8._status === -1) && (e8._status = 2, e8._result = n5);
      }), e8._status === -1 && (e8._status = 0, e8._result = t8);
    }
    if (e8._status === 1) return e8._result.default;
    throw e8._result;
  }
  var g9 = typeof reportError == "function" ? reportError : function(e8) {
    if (typeof globalThis == "object" && typeof globalThis.ErrorEvent == "function") {
      var t8 = new globalThis.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof e8 == "object" && e8 !== null && typeof e8.message == "string" ? String(e8.message) : String(e8),
        error: e8
      });
      if (!globalThis.dispatchEvent(t8)) return;
    } else if (typeof javascript_export_default_env_NODE_ENV_production_default == "object" && typeof javascript_export_default_env_NODE_ENV_production_default.emit == "function") {
      javascript_export_default_env_NODE_ENV_production_default.emit("uncaughtException", e8);
      return;
    }
    console.error(e8);
  };
  u10.Children = {
    map: _8,
    forEach: function(e8, t8, n5) {
      _8(e8, function() {
        t8.apply(this, arguments);
      }, n5);
    },
    count: function(e8) {
      var t8 = 0;
      return _8(e8, function() {
        t8++;
      }), t8;
    },
    toArray: function(e8) {
      return _8(e8, function(t8) {
        return t8;
      }) || [];
    },
    only: function(e8) {
      if (!d8(e8)) throw Error("React.Children.only expected to receive a single React element child.");
      return e8;
    }
  };
  u10.Component = l9;
  u10.Fragment = W6;
  u10.Profiler = Q5;
  u10.PureComponent = m13;
  u10.StrictMode = B7;
  u10.Suspense = V8;
  u10.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i9;
  u10.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(e8) {
      return i9.H.useMemoCache(e8);
    }
  };
  u10.cache = function(e8) {
    return function() {
      return e8.apply(null, arguments);
    };
  };
  u10.cacheSignal = function() {
    return null;
  };
  u10.cloneElement = function(e8, t8, n5) {
    if (e8 == null) throw Error("The argument must be a React element, but you passed " + e8 + ".");
    var r8 = P7({}, e8.props), o7 = e8.key, f11 = void 0;
    if (t8 != null) for (s8 in t8.ref !== void 0 && (f11 = void 0), t8.key !== void 0 && (o7 = "" + t8.key), t8) !M5.call(t8, s8) || s8 === "key" || s8 === "__self" || s8 === "__source" || s8 === "ref" && t8.ref === void 0 || (r8[s8] = t8[s8]);
    var s8 = arguments.length - 2;
    if (s8 === 1) r8.children = n5;
    else if (1 < s8) {
      for (var p9 = Array(s8), c6 = 0; c6 < s8; c6++) p9[c6] = arguments[c6 + 2];
      r8.children = p9;
    }
    return C10(e8.type, o7, void 0, void 0, f11, r8);
  };
  u10.createContext = function(e8) {
    return e8 = {
      $$typeof: Z6,
      _currentValue: e8,
      _currentValue2: e8,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e8.Provider = e8, e8.Consumer = {
      $$typeof: X6,
      _context: e8
    }, e8;
  };
  u10.createElement = function(e8, t8, n5) {
    var r8, o7 = {}, f11 = null;
    if (t8 != null) for (r8 in t8.key !== void 0 && (f11 = "" + t8.key), t8) M5.call(t8, r8) && r8 !== "key" && r8 !== "__self" && r8 !== "__source" && (o7[r8] = t8[r8]);
    var s8 = arguments.length - 2;
    if (s8 === 1) o7.children = n5;
    else if (1 < s8) {
      for (var p9 = Array(s8), c6 = 0; c6 < s8; c6++) p9[c6] = arguments[c6 + 2];
      o7.children = p9;
    }
    if (e8 && e8.defaultProps) for (r8 in s8 = e8.defaultProps, s8) o7[r8] === void 0 && (o7[r8] = s8[r8]);
    return C10(e8, f11, void 0, void 0, null, o7);
  };
  u10.createRef = function() {
    return {
      current: null
    };
  };
  u10.forwardRef = function(e8) {
    return {
      $$typeof: J5,
      render: e8
    };
  };
  u10.isValidElement = d8;
  u10.lazy = function(e8) {
    return {
      $$typeof: N4,
      _payload: {
        _status: -1,
        _result: e8
      },
      _init: ue3
    };
  };
  u10.memo = function(e8, t8) {
    return {
      $$typeof: F7,
      type: e8,
      compare: t8 === void 0 ? null : t8
    };
  };
  u10.startTransition = function(e8) {
    var t8 = i9.T, n5 = {};
    i9.T = n5;
    try {
      var r8 = e8(), o7 = i9.S;
      o7 !== null && o7(n5, r8), typeof r8 == "object" && r8 !== null && typeof r8.then == "function" && r8.then(v13, g9);
    } catch (f11) {
      g9(f11);
    } finally {
      t8 !== null && n5.types !== null && (t8.types = n5.types), i9.T = t8;
    }
  };
  u10.unstable_useCacheRefresh = function() {
    return i9.H.useCacheRefresh();
  };
  u10.use = function(e8) {
    return i9.H.use(e8);
  };
  u10.useActionState = function(e8, t8, n5) {
    return i9.H.useActionState(e8, t8, n5);
  };
  u10.useCallback = function(e8, t8) {
    return i9.H.useCallback(e8, t8);
  };
  u10.useContext = function(e8) {
    return i9.H.useContext(e8);
  };
  u10.useDebugValue = function() {
  };
  u10.useDeferredValue = function(e8, t8) {
    return i9.H.useDeferredValue(e8, t8);
  };
  u10.useEffect = function(e8, t8) {
    return i9.H.useEffect(e8, t8);
  };
  u10.useId = function() {
    return i9.H.useId();
  };
  u10.useImperativeHandle = function(e8, t8, n5) {
    return i9.H.useImperativeHandle(e8, t8, n5);
  };
  u10.useInsertionEffect = function(e8, t8) {
    return i9.H.useInsertionEffect(e8, t8);
  };
  u10.useLayoutEffect = function(e8, t8) {
    return i9.H.useLayoutEffect(e8, t8);
  };
  u10.useMemo = function(e8, t8) {
    return i9.H.useMemo(e8, t8);
  };
  u10.useOptimistic = function(e8, t8) {
    return i9.H.useOptimistic(e8, t8);
  };
  u10.useReducer = function(e8, t8, n5) {
    return i9.H.useReducer(e8, t8, n5);
  };
  u10.useRef = function(e8) {
    return i9.H.useRef(e8);
  };
  u10.useState = function(e8) {
    return i9.H.useState(e8);
  };
  u10.useSyncExternalStore = function(e8, t8, n5) {
    return i9.H.useSyncExternalStore(e8, t8, n5);
  };
  u10.useTransition = function() {
    return i9.H.useTransition();
  };
  u10.version = "19.2.0-canary-fa3feba6-20250623";
});
var Y3 = A2((ie4, L6) => {
  "use strict";
  L6.exports = $2();
});
var E6 = G5(Y3());
var { Children: fe2, Component: ce3, Fragment: pe2, Profiler: ae3, PureComponent: le2, StrictMode: _e3, Suspense: Ee2, __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: ye3, __COMPILER_RUNTIME: ve3, cache: Re2, cacheSignal: me3, cloneElement: Te2, createContext: Ce2, createElement: de3, createRef: Se2, forwardRef: Ae2, isValidElement: we3, lazy: Oe2, memo: he2, startTransition: ge2, unstable_useCacheRefresh: Ne2, use: je2, useActionState: Pe3, useCallback: He2, useContext: Ie2, useDebugValue: Me2, useDeferredValue: $e2, useEffect: Le2, useId: Ye2, useImperativeHandle: xe2, useInsertionEffect: Ue2, useLayoutEffect: De2, useMemo: ke3, useOptimistic: be3, useReducer: qe2, useRef: ze2, useState: Ge3, useSyncExternalStore: Ke2, useTransition: We2, version: Be2 } = E6;
var Qe2 = E6.default ?? E6;

// deno:https://esm.sh/@radix-ui/react-compose-refs@1.1.2/denonext/react-compose-refs.mjs
function l4(n5, o7) {
  if (typeof n5 == "function") return n5(o7);
  n5 != null && (n5.current = o7);
}
function i4(...n5) {
  return (o7) => {
    let u10 = false, c6 = n5.map((t8) => {
      let e8 = l4(t8, o7);
      return !u10 && typeof e8 == "function" && (u10 = true), e8;
    });
    if (u10) return () => {
      for (let t8 = 0; t8 < c6.length; t8++) {
        let e8 = c6[t8];
        typeof e8 == "function" ? e8() : l4(n5[t8], null);
      }
    };
  };
}

// deno:https://esm.sh/react@19.2.0-canary-fa3feba6-20250623/denonext/jsx-runtime.mjs
var p5 = Object.create;
var j5 = Object.defineProperty;
var v6 = Object.getOwnPropertyDescriptor;
var a3 = Object.getOwnPropertyNames;
var k6 = Object.getPrototypeOf;
var T4 = Object.prototype.hasOwnProperty;
var n2 = (e8, r8) => () => (r8 || e8((r8 = {
  exports: {}
}).exports, r8), r8.exports);
var f5 = (e8, r8, t8, o7) => {
  if (r8 && typeof r8 == "object" || typeof r8 == "function") for (let s8 of a3(r8)) !T4.call(e8, s8) && s8 !== t8 && j5(e8, s8, {
    get: () => r8[s8],
    enumerable: !(o7 = v6(r8, s8)) || o7.enumerable
  });
  return e8;
};
var m3 = (e8, r8, t8) => (t8 = e8 != null ? p5(k6(e8)) : {}, f5(r8 || !e8 || !e8.__esModule ? j5(t8, "default", {
  value: e8,
  enumerable: true
}) : t8, e8));
var E7 = n2((l9) => {
  "use strict";
  var _8 = Symbol.for("react.transitional.element"), c6 = Symbol.for("react.fragment");
  function x10(e8, r8, t8) {
    var o7 = null;
    if (t8 !== void 0 && (o7 = "" + t8), r8.key !== void 0 && (o7 = "" + r8.key), "key" in r8) {
      t8 = {};
      for (var s8 in r8) s8 !== "key" && (t8[s8] = r8[s8]);
    } else t8 = r8;
    return r8 = t8.ref, {
      $$typeof: _8,
      type: e8,
      key: o7,
      ref: r8 !== void 0 ? r8 : null,
      props: t8
    };
  }
  l9.Fragment = c6;
  l9.jsx = x10;
  l9.jsxs = x10;
});
var i5 = n2((P7, d8) => {
  "use strict";
  d8.exports = E7();
});
var u4 = m3(i5());
var { Fragment: R3, jsx: q5, jsxs: C4 } = u4;
var M3 = u4.default ?? u4;

// deno:https://esm.sh/@radix-ui/react-slot@1.2.3/denonext/react-slot.mjs
function S5(e8) {
  let t8 = g3(e8), n5 = Ae2((l9, o7) => {
    let { children: a9, ...s8 } = l9, i9 = fe2.toArray(a9), c6 = i9.find(E8);
    if (c6) {
      let f11 = c6.props.children, R8 = i9.map((u10) => u10 === c6 ? fe2.count(f11) > 1 ? fe2.only(null) : we3(f11) ? f11.props.children : null : u10);
      return q5(t8, {
        ...s8,
        ref: o7,
        children: we3(f11) ? Te2(f11, void 0, R8) : null
      });
    }
    return q5(t8, {
      ...s8,
      ref: o7,
      children: a9
    });
  });
  return n5.displayName = `${e8}.Slot`, n5;
}
var I2 = S5("Slot");
function g3(e8) {
  let t8 = Ae2((n5, l9) => {
    let { children: o7, ...a9 } = n5;
    if (we3(o7)) {
      let s8 = h4(o7), i9 = C5(a9, o7.props);
      return o7.type !== pe2 && (i9.ref = l9 ? i4(l9, s8) : s8), Te2(o7, i9);
    }
    return fe2.count(o7) > 1 ? fe2.only(null) : null;
  });
  return t8.displayName = `${e8}.SlotClone`, t8;
}
var d3 = Symbol("radix.slottable");
function b4(e8) {
  let t8 = ({ children: n5 }) => q5(R3, {
    children: n5
  });
  return t8.displayName = `${e8}.Slottable`, t8.__radixId = d3, t8;
}
var V3 = b4("Slottable");
function E8(e8) {
  return we3(e8) && typeof e8.type == "function" && "__radixId" in e8.type && e8.type.__radixId === d3;
}
function C5(e8, t8) {
  let n5 = {
    ...t8
  };
  for (let l9 in t8) {
    let o7 = e8[l9], a9 = t8[l9];
    /^on[A-Z]/.test(l9) ? o7 && a9 ? n5[l9] = (...i9) => {
      let c6 = a9(...i9);
      return o7(...i9), c6;
    } : o7 && (n5[l9] = o7) : l9 === "style" ? n5[l9] = {
      ...o7,
      ...a9
    } : l9 === "className" && (n5[l9] = [
      o7,
      a9
    ].filter(Boolean).join(" "));
  }
  return {
    ...e8,
    ...n5
  };
}
function h4(e8) {
  let t8 = Object.getOwnPropertyDescriptor(e8.props, "ref")?.get, n5 = t8 && "isReactWarning" in t8 && t8.isReactWarning;
  return n5 ? e8.ref : (t8 = Object.getOwnPropertyDescriptor(e8, "ref")?.get, n5 = t8 && "isReactWarning" in t8 && t8.isReactWarning, n5 ? e8.props.ref : e8.props.ref || e8.ref);
}

// deno:https://esm.sh/clsx@2.1.1/denonext/clsx.mjs
function a4(r8) {
  var n5, f11, t8 = "";
  if (typeof r8 == "string" || typeof r8 == "number") t8 += r8;
  else if (typeof r8 == "object") if (Array.isArray(r8)) {
    var o7 = r8.length;
    for (n5 = 0; n5 < o7; n5++) r8[n5] && (f11 = a4(r8[n5])) && (t8 && (t8 += " "), t8 += f11);
  } else for (f11 in r8) r8[f11] && (t8 && (t8 += " "), t8 += f11);
  return t8;
}
function e() {
  for (var r8, n5, f11 = 0, t8 = "", o7 = arguments.length; f11 < o7; f11++) (r8 = arguments[f11]) && (n5 = a4(r8)) && (t8 && (t8 += " "), t8 += n5);
  return t8;
}

// deno:https://esm.sh/class-variance-authority@0.7.1/denonext/class-variance-authority.mjs
var m4 = (e8) => typeof e8 == "boolean" ? `${e8}` : e8 === 0 ? "0" : e8;
var y4 = e;
var b5 = (e8, l9) => (n5) => {
  var s8;
  if (l9?.variants == null) return y4(e8, n5?.class, n5?.className);
  let { variants: r8, defaultVariants: d8 } = l9, V8 = Object.keys(r8).map((t8) => {
    let a9 = n5?.[t8], u10 = d8?.[t8];
    if (a9 === null) return null;
    let i9 = m4(a9) || m4(u10);
    return r8[t8][i9];
  }), v13 = n5 && Object.entries(n5).reduce((t8, a9) => {
    let [u10, i9] = a9;
    return i9 === void 0 || (t8[u10] = i9), t8;
  }, {}), N4 = l9 == null || (s8 = l9.compoundVariants) === null || s8 === void 0 ? void 0 : s8.reduce((t8, a9) => {
    let { class: u10, className: i9, ...f11 } = a9;
    return Object.entries(f11).every((C10) => {
      let [c6, o7] = C10;
      return Array.isArray(o7) ? o7.includes({
        ...d8,
        ...v13
      }[c6]) : {
        ...d8,
        ...v13
      }[c6] === o7;
    }) ? [
      ...t8,
      u10,
      i9
    ] : t8;
  }, []);
  return y4(e8, V8, N4, n5?.class, n5?.className);
};

// deno:https://esm.sh/tailwind-merge@3.3.1/denonext/tailwind-merge.mjs
var pe3 = "-";
var We3 = (e8) => {
  let s8 = Oe3(e8), { conflictingClassGroups: o7, conflictingClassGroupModifiers: n5 } = e8;
  return {
    getClassGroupId: (c6) => {
      let u10 = c6.split(pe3);
      return u10[0] === "" && u10.length !== 1 && u10.shift(), ze3(u10, s8) || $e3(c6);
    },
    getConflictingClassGroupIds: (c6, u10) => {
      let p9 = o7[c6] || [];
      return u10 && n5[c6] ? [
        ...p9,
        ...n5[c6]
      ] : p9;
    }
  };
};
var ze3 = (e8, s8) => {
  if (e8.length === 0) return s8.classGroupId;
  let o7 = e8[0], n5 = s8.nextPart.get(o7), i9 = n5 ? ze3(e8.slice(1), n5) : void 0;
  if (i9) return i9;
  if (s8.validators.length === 0) return;
  let l9 = e8.join(pe3);
  return s8.validators.find(({ validator: c6 }) => c6(l9))?.classGroupId;
};
var ye4 = /^\[(.+)\]$/;
var $e3 = (e8) => {
  if (ye4.test(e8)) {
    let s8 = ye4.exec(e8)[1], o7 = s8?.substring(0, s8.indexOf(":"));
    if (o7) return "arbitrary.." + o7;
  }
};
var Oe3 = (e8) => {
  let { theme: s8, classGroups: o7 } = e8, n5 = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (let i9 in o7) ne2(o7[i9], n5, i9, s8);
  return n5;
};
var ne2 = (e8, s8, o7, n5) => {
  e8.forEach((i9) => {
    if (typeof i9 == "string") {
      let l9 = i9 === "" ? s8 : ve4(s8, i9);
      l9.classGroupId = o7;
      return;
    }
    if (typeof i9 == "function") {
      if (Ue3(i9)) {
        ne2(i9(n5), s8, o7, n5);
        return;
      }
      s8.validators.push({
        validator: i9,
        classGroupId: o7
      });
      return;
    }
    Object.entries(i9).forEach(([l9, c6]) => {
      ne2(c6, ve4(s8, l9), o7, n5);
    });
  });
};
var ve4 = (e8, s8) => {
  let o7 = e8;
  return s8.split(pe3).forEach((n5) => {
    o7.nextPart.has(n5) || o7.nextPart.set(n5, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o7 = o7.nextPart.get(n5);
  }), o7;
};
var Ue3 = (e8) => e8.isThemeGetter;
var qe3 = (e8) => {
  if (e8 < 1) return {
    get: () => {
    },
    set: () => {
    }
  };
  let s8 = 0, o7 = /* @__PURE__ */ new Map(), n5 = /* @__PURE__ */ new Map(), i9 = (l9, c6) => {
    o7.set(l9, c6), s8++, s8 > e8 && (s8 = 0, n5 = o7, o7 = /* @__PURE__ */ new Map());
  };
  return {
    get(l9) {
      let c6 = o7.get(l9);
      if (c6 !== void 0) return c6;
      if ((c6 = n5.get(l9)) !== void 0) return i9(l9, c6), c6;
    },
    set(l9, c6) {
      o7.has(l9) ? o7.set(l9, c6) : i9(l9, c6);
    }
  };
};
var ae4 = "!";
var ie2 = ":";
var He3 = ie2.length;
var Je = (e8) => {
  let { prefix: s8, experimentalParseClassName: o7 } = e8, n5 = (i9) => {
    let l9 = [], c6 = 0, u10 = 0, p9 = 0, b12;
    for (let k13 = 0; k13 < i9.length; k13++) {
      let y10 = i9[k13];
      if (c6 === 0 && u10 === 0) {
        if (y10 === ie2) {
          l9.push(i9.slice(p9, k13)), p9 = k13 + He3;
          continue;
        }
        if (y10 === "/") {
          b12 = k13;
          continue;
        }
      }
      y10 === "[" ? c6++ : y10 === "]" ? c6-- : y10 === "(" ? u10++ : y10 === ")" && u10--;
    }
    let h10 = l9.length === 0 ? i9 : i9.substring(p9), C10 = Xe2(h10), B7 = C10 !== h10, j10 = b12 && b12 > p9 ? b12 - p9 : void 0;
    return {
      modifiers: l9,
      hasImportantModifier: B7,
      baseClassName: C10,
      maybePostfixModifierPosition: j10
    };
  };
  if (s8) {
    let i9 = s8 + ie2, l9 = n5;
    n5 = (c6) => c6.startsWith(i9) ? l9(c6.substring(i9.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: c6,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o7) {
    let i9 = n5;
    n5 = (l9) => o7({
      className: l9,
      parseClassName: i9
    });
  }
  return n5;
};
var Xe2 = (e8) => e8.endsWith(ae4) ? e8.substring(0, e8.length - 1) : e8.startsWith(ae4) ? e8.substring(1) : e8;
var De3 = (e8) => {
  let s8 = Object.fromEntries(e8.orderSensitiveModifiers.map((n5) => [
    n5,
    true
  ]));
  return (n5) => {
    if (n5.length <= 1) return n5;
    let i9 = [], l9 = [];
    return n5.forEach((c6) => {
      c6[0] === "[" || s8[c6] ? (i9.push(...l9.sort(), c6), l9 = []) : l9.push(c6);
    }), i9.push(...l9.sort()), i9;
  };
};
var Ke3 = (e8) => ({
  cache: qe3(e8.cacheSize),
  parseClassName: Je(e8),
  sortModifiers: De3(e8),
  ...We3(e8)
});
var Qe3 = /\s+/;
var Ye3 = (e8, s8) => {
  let { parseClassName: o7, getClassGroupId: n5, getConflictingClassGroupIds: i9, sortModifiers: l9 } = s8, c6 = [], u10 = e8.trim().split(Qe3), p9 = "";
  for (let b12 = u10.length - 1; b12 >= 0; b12 -= 1) {
    let h10 = u10[b12], { isExternal: C10, modifiers: B7, hasImportantModifier: j10, baseClassName: k13, maybePostfixModifierPosition: y10 } = o7(h10);
    if (C10) {
      p9 = h10 + (p9.length > 0 ? " " + p9 : p9);
      continue;
    }
    let T8 = !!y10, A6 = n5(T8 ? k13.substring(0, y10) : k13);
    if (!A6) {
      if (!T8) {
        p9 = h10 + (p9.length > 0 ? " " + p9 : p9);
        continue;
      }
      if (A6 = n5(k13), !A6) {
        p9 = h10 + (p9.length > 0 ? " " + p9 : p9);
        continue;
      }
      T8 = false;
    }
    let H6 = l9(B7).join(":"), W6 = j10 ? H6 + ae4 : H6, E11 = W6 + A6;
    if (c6.includes(E11)) continue;
    c6.push(E11);
    let N4 = i9(A6, T8);
    for (let P7 = 0; P7 < N4.length; ++P7) {
      let $7 = N4[P7];
      c6.push(W6 + $7);
    }
    p9 = h10 + (p9.length > 0 ? " " + p9 : p9);
  }
  return p9;
};
function Ze() {
  let e8 = 0, s8, o7, n5 = "";
  for (; e8 < arguments.length; ) (s8 = arguments[e8++]) && (o7 = Me3(s8)) && (n5 && (n5 += " "), n5 += o7);
  return n5;
}
var Me3 = (e8) => {
  if (typeof e8 == "string") return e8;
  let s8, o7 = "";
  for (let n5 = 0; n5 < e8.length; n5++) e8[n5] && (s8 = Me3(e8[n5])) && (o7 && (o7 += " "), o7 += s8);
  return o7;
};
function le3(e8, ...s8) {
  let o7, n5, i9, l9 = c6;
  function c6(p9) {
    let b12 = s8.reduce((h10, C10) => C10(h10), e8());
    return o7 = Ke3(b12), n5 = o7.cache.get, i9 = o7.cache.set, l9 = u10, u10(p9);
  }
  function u10(p9) {
    let b12 = n5(p9);
    if (b12) return b12;
    let h10 = Ye3(p9, o7);
    return i9(p9, h10), h10;
  }
  return function() {
    return l9(Ze.apply(null, arguments));
  };
}
var f6 = (e8) => {
  let s8 = (o7) => o7[e8] || [];
  return s8.isThemeGetter = true, s8;
};
var Se3 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var Ce3 = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var eo = /^\d+\/\d+$/;
var oo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var ro = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var to = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var so = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var no = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var R4 = (e8) => eo.test(e8);
var m5 = (e8) => !!e8 && !Number.isNaN(Number(e8));
var S6 = (e8) => !!e8 && Number.isInteger(Number(e8));
var ee = (e8) => e8.endsWith("%") && m5(e8.slice(0, -1));
var v7 = (e8) => oo.test(e8);
var Ge4 = () => true;
var ao = (e8) => ro.test(e8) && !to.test(e8);
var Ae3 = () => false;
var io = (e8) => so.test(e8);
var lo = (e8) => no.test(e8);
var Pe4 = (e8) => !r3(e8) && !t(e8);
var Ie3 = (e8) => _3(e8, _e4, Ae3);
var r3 = (e8) => Se3.test(e8);
var G6 = (e8) => _3(e8, Fe, ao);
var oe2 = (e8) => _3(e8, co, m5);
var ce4 = (e8) => _3(e8, Le3, Ae3);
var Re3 = (e8) => _3(e8, Ve, lo);
var O2 = (e8) => _3(e8, Be3, io);
var t = (e8) => Ce3.test(e8);
var V4 = (e8) => F3(e8, Fe);
var Te3 = (e8) => F3(e8, mo);
var de4 = (e8) => F3(e8, Le3);
var Ee3 = (e8) => F3(e8, _e4);
var Ne3 = (e8) => F3(e8, Ve);
var U3 = (e8) => F3(e8, Be3, true);
var _3 = (e8, s8, o7) => {
  let n5 = Se3.exec(e8);
  return n5 ? n5[1] ? s8(n5[1]) : o7(n5[2]) : false;
};
var F3 = (e8, s8, o7 = false) => {
  let n5 = Ce3.exec(e8);
  return n5 ? n5[1] ? s8(n5[1]) : o7 : false;
};
var Le3 = (e8) => e8 === "position" || e8 === "percentage";
var Ve = (e8) => e8 === "image" || e8 === "url";
var _e4 = (e8) => e8 === "length" || e8 === "size" || e8 === "bg-size";
var Fe = (e8) => e8 === "length";
var co = (e8) => e8 === "number";
var mo = (e8) => e8 === "family-name";
var Be3 = (e8) => e8 === "shadow";
var uo = Object.defineProperty({
  __proto__: null,
  isAny: Ge4,
  isAnyNonArbitrary: Pe4,
  isArbitraryImage: Re3,
  isArbitraryLength: G6,
  isArbitraryNumber: oe2,
  isArbitraryPosition: ce4,
  isArbitraryShadow: O2,
  isArbitrarySize: Ie3,
  isArbitraryValue: r3,
  isArbitraryVariable: t,
  isArbitraryVariableFamilyName: Te3,
  isArbitraryVariableImage: Ne3,
  isArbitraryVariableLength: V4,
  isArbitraryVariablePosition: de4,
  isArbitraryVariableShadow: U3,
  isArbitraryVariableSize: Ee3,
  isFraction: R4,
  isInteger: S6,
  isNumber: m5,
  isPercent: ee,
  isTshirtSize: v7
}, Symbol.toStringTag, {
  value: "Module"
});
var me4 = () => {
  let e8 = f6("color"), s8 = f6("font"), o7 = f6("text"), n5 = f6("font-weight"), i9 = f6("tracking"), l9 = f6("leading"), c6 = f6("breakpoint"), u10 = f6("container"), p9 = f6("spacing"), b12 = f6("radius"), h10 = f6("shadow"), C10 = f6("inset-shadow"), B7 = f6("text-shadow"), j10 = f6("drop-shadow"), k13 = f6("blur"), y10 = f6("perspective"), T8 = f6("aspect"), A6 = f6("ease"), H6 = f6("animate"), W6 = () => [
    "auto",
    "avoid",
    "all",
    "avoid-page",
    "page",
    "left",
    "right",
    "column"
  ], E11 = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "left-top",
    "top-right",
    "right-top",
    "bottom-right",
    "right-bottom",
    "bottom-left",
    "left-bottom"
  ], N4 = () => [
    ...E11(),
    t,
    r3
  ], P7 = () => [
    "auto",
    "hidden",
    "clip",
    "visible",
    "scroll"
  ], $7 = () => [
    "auto",
    "contain",
    "none"
  ], d8 = () => [
    t,
    r3,
    p9
  ], z10 = () => [
    R4,
    "full",
    "auto",
    ...d8()
  ], ue3 = () => [
    S6,
    "none",
    "subgrid",
    t,
    r3
  ], fe5 = () => [
    "auto",
    {
      span: [
        "full",
        S6,
        t,
        r3
      ]
    },
    S6,
    t,
    r3
  ], J5 = () => [
    S6,
    "auto",
    t,
    r3
  ], ge5 = () => [
    "auto",
    "min",
    "max",
    "fr",
    t,
    r3
  ], re3 = () => [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
    "stretch",
    "baseline",
    "center-safe",
    "end-safe"
  ], L6 = () => [
    "start",
    "end",
    "center",
    "stretch",
    "center-safe",
    "end-safe"
  ], M5 = () => [
    "auto",
    ...d8()
  ], I6 = () => [
    R4,
    "auto",
    "full",
    "dvw",
    "dvh",
    "lvw",
    "lvh",
    "svw",
    "svh",
    "min",
    "max",
    "fit",
    ...d8()
  ], a9 = () => [
    e8,
    t,
    r3
  ], be4 = () => [
    ...E11(),
    de4,
    ce4,
    {
      position: [
        t,
        r3
      ]
    }
  ], he5 = () => [
    "no-repeat",
    {
      repeat: [
        "",
        "x",
        "y",
        "space",
        "round"
      ]
    }
  ], we6 = () => [
    "auto",
    "cover",
    "contain",
    Ee3,
    Ie3,
    {
      size: [
        t,
        r3
      ]
    }
  ], te2 = () => [
    ee,
    V4,
    G6
  ], w5 = () => [
    "",
    "none",
    "full",
    b12,
    t,
    r3
  ], x10 = () => [
    "",
    m5,
    V4,
    G6
  ], X6 = () => [
    "solid",
    "dashed",
    "dotted",
    "double"
  ], xe4 = () => [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
  ], g9 = () => [
    m5,
    ee,
    de4,
    ce4
  ], ke5 = () => [
    "",
    "none",
    k13,
    t,
    r3
  ], D8 = () => [
    "none",
    m5,
    t,
    r3
  ], K9 = () => [
    "none",
    m5,
    t,
    r3
  ], se3 = () => [
    m5,
    t,
    r3
  ], Q5 = () => [
    R4,
    "full",
    ...d8()
  ];
  return {
    cacheSize: 500,
    theme: {
      animate: [
        "spin",
        "ping",
        "pulse",
        "bounce"
      ],
      aspect: [
        "video"
      ],
      blur: [
        v7
      ],
      breakpoint: [
        v7
      ],
      color: [
        Ge4
      ],
      container: [
        v7
      ],
      "drop-shadow": [
        v7
      ],
      ease: [
        "in",
        "out",
        "in-out"
      ],
      font: [
        Pe4
      ],
      "font-weight": [
        "thin",
        "extralight",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extrabold",
        "black"
      ],
      "inset-shadow": [
        v7
      ],
      leading: [
        "none",
        "tight",
        "snug",
        "normal",
        "relaxed",
        "loose"
      ],
      perspective: [
        "dramatic",
        "near",
        "normal",
        "midrange",
        "distant",
        "none"
      ],
      radius: [
        v7
      ],
      shadow: [
        v7
      ],
      spacing: [
        "px",
        m5
      ],
      text: [
        v7
      ],
      "text-shadow": [
        v7
      ],
      tracking: [
        "tighter",
        "tight",
        "normal",
        "wide",
        "wider",
        "widest"
      ]
    },
    classGroups: {
      aspect: [
        {
          aspect: [
            "auto",
            "square",
            R4,
            r3,
            t,
            T8
          ]
        }
      ],
      container: [
        "container"
      ],
      columns: [
        {
          columns: [
            m5,
            r3,
            t,
            u10
          ]
        }
      ],
      "break-after": [
        {
          "break-after": W6()
        }
      ],
      "break-before": [
        {
          "break-before": W6()
        }
      ],
      "break-inside": [
        {
          "break-inside": [
            "auto",
            "avoid",
            "avoid-page",
            "avoid-column"
          ]
        }
      ],
      "box-decoration": [
        {
          "box-decoration": [
            "slice",
            "clone"
          ]
        }
      ],
      box: [
        {
          box: [
            "border",
            "content"
          ]
        }
      ],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden"
      ],
      sr: [
        "sr-only",
        "not-sr-only"
      ],
      float: [
        {
          float: [
            "right",
            "left",
            "none",
            "start",
            "end"
          ]
        }
      ],
      clear: [
        {
          clear: [
            "left",
            "right",
            "both",
            "none",
            "start",
            "end"
          ]
        }
      ],
      isolation: [
        "isolate",
        "isolation-auto"
      ],
      "object-fit": [
        {
          object: [
            "contain",
            "cover",
            "fill",
            "none",
            "scale-down"
          ]
        }
      ],
      "object-position": [
        {
          object: N4()
        }
      ],
      overflow: [
        {
          overflow: P7()
        }
      ],
      "overflow-x": [
        {
          "overflow-x": P7()
        }
      ],
      "overflow-y": [
        {
          "overflow-y": P7()
        }
      ],
      overscroll: [
        {
          overscroll: $7()
        }
      ],
      "overscroll-x": [
        {
          "overscroll-x": $7()
        }
      ],
      "overscroll-y": [
        {
          "overscroll-y": $7()
        }
      ],
      position: [
        "static",
        "fixed",
        "absolute",
        "relative",
        "sticky"
      ],
      inset: [
        {
          inset: z10()
        }
      ],
      "inset-x": [
        {
          "inset-x": z10()
        }
      ],
      "inset-y": [
        {
          "inset-y": z10()
        }
      ],
      start: [
        {
          start: z10()
        }
      ],
      end: [
        {
          end: z10()
        }
      ],
      top: [
        {
          top: z10()
        }
      ],
      right: [
        {
          right: z10()
        }
      ],
      bottom: [
        {
          bottom: z10()
        }
      ],
      left: [
        {
          left: z10()
        }
      ],
      visibility: [
        "visible",
        "invisible",
        "collapse"
      ],
      z: [
        {
          z: [
            S6,
            "auto",
            t,
            r3
          ]
        }
      ],
      basis: [
        {
          basis: [
            R4,
            "full",
            "auto",
            u10,
            ...d8()
          ]
        }
      ],
      "flex-direction": [
        {
          flex: [
            "row",
            "row-reverse",
            "col",
            "col-reverse"
          ]
        }
      ],
      "flex-wrap": [
        {
          flex: [
            "nowrap",
            "wrap",
            "wrap-reverse"
          ]
        }
      ],
      flex: [
        {
          flex: [
            m5,
            R4,
            "auto",
            "initial",
            "none",
            r3
          ]
        }
      ],
      grow: [
        {
          grow: [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      shrink: [
        {
          shrink: [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      order: [
        {
          order: [
            S6,
            "first",
            "last",
            "none",
            t,
            r3
          ]
        }
      ],
      "grid-cols": [
        {
          "grid-cols": ue3()
        }
      ],
      "col-start-end": [
        {
          col: fe5()
        }
      ],
      "col-start": [
        {
          "col-start": J5()
        }
      ],
      "col-end": [
        {
          "col-end": J5()
        }
      ],
      "grid-rows": [
        {
          "grid-rows": ue3()
        }
      ],
      "row-start-end": [
        {
          row: fe5()
        }
      ],
      "row-start": [
        {
          "row-start": J5()
        }
      ],
      "row-end": [
        {
          "row-end": J5()
        }
      ],
      "grid-flow": [
        {
          "grid-flow": [
            "row",
            "col",
            "dense",
            "row-dense",
            "col-dense"
          ]
        }
      ],
      "auto-cols": [
        {
          "auto-cols": ge5()
        }
      ],
      "auto-rows": [
        {
          "auto-rows": ge5()
        }
      ],
      gap: [
        {
          gap: d8()
        }
      ],
      "gap-x": [
        {
          "gap-x": d8()
        }
      ],
      "gap-y": [
        {
          "gap-y": d8()
        }
      ],
      "justify-content": [
        {
          justify: [
            ...re3(),
            "normal"
          ]
        }
      ],
      "justify-items": [
        {
          "justify-items": [
            ...L6(),
            "normal"
          ]
        }
      ],
      "justify-self": [
        {
          "justify-self": [
            "auto",
            ...L6()
          ]
        }
      ],
      "align-content": [
        {
          content: [
            "normal",
            ...re3()
          ]
        }
      ],
      "align-items": [
        {
          items: [
            ...L6(),
            {
              baseline: [
                "",
                "last"
              ]
            }
          ]
        }
      ],
      "align-self": [
        {
          self: [
            "auto",
            ...L6(),
            {
              baseline: [
                "",
                "last"
              ]
            }
          ]
        }
      ],
      "place-content": [
        {
          "place-content": re3()
        }
      ],
      "place-items": [
        {
          "place-items": [
            ...L6(),
            "baseline"
          ]
        }
      ],
      "place-self": [
        {
          "place-self": [
            "auto",
            ...L6()
          ]
        }
      ],
      p: [
        {
          p: d8()
        }
      ],
      px: [
        {
          px: d8()
        }
      ],
      py: [
        {
          py: d8()
        }
      ],
      ps: [
        {
          ps: d8()
        }
      ],
      pe: [
        {
          pe: d8()
        }
      ],
      pt: [
        {
          pt: d8()
        }
      ],
      pr: [
        {
          pr: d8()
        }
      ],
      pb: [
        {
          pb: d8()
        }
      ],
      pl: [
        {
          pl: d8()
        }
      ],
      m: [
        {
          m: M5()
        }
      ],
      mx: [
        {
          mx: M5()
        }
      ],
      my: [
        {
          my: M5()
        }
      ],
      ms: [
        {
          ms: M5()
        }
      ],
      me: [
        {
          me: M5()
        }
      ],
      mt: [
        {
          mt: M5()
        }
      ],
      mr: [
        {
          mr: M5()
        }
      ],
      mb: [
        {
          mb: M5()
        }
      ],
      ml: [
        {
          ml: M5()
        }
      ],
      "space-x": [
        {
          "space-x": d8()
        }
      ],
      "space-x-reverse": [
        "space-x-reverse"
      ],
      "space-y": [
        {
          "space-y": d8()
        }
      ],
      "space-y-reverse": [
        "space-y-reverse"
      ],
      size: [
        {
          size: I6()
        }
      ],
      w: [
        {
          w: [
            u10,
            "screen",
            ...I6()
          ]
        }
      ],
      "min-w": [
        {
          "min-w": [
            u10,
            "screen",
            "none",
            ...I6()
          ]
        }
      ],
      "max-w": [
        {
          "max-w": [
            u10,
            "screen",
            "none",
            "prose",
            {
              screen: [
                c6
              ]
            },
            ...I6()
          ]
        }
      ],
      h: [
        {
          h: [
            "screen",
            "lh",
            ...I6()
          ]
        }
      ],
      "min-h": [
        {
          "min-h": [
            "screen",
            "lh",
            "none",
            ...I6()
          ]
        }
      ],
      "max-h": [
        {
          "max-h": [
            "screen",
            "lh",
            ...I6()
          ]
        }
      ],
      "font-size": [
        {
          text: [
            "base",
            o7,
            V4,
            G6
          ]
        }
      ],
      "font-smoothing": [
        "antialiased",
        "subpixel-antialiased"
      ],
      "font-style": [
        "italic",
        "not-italic"
      ],
      "font-weight": [
        {
          font: [
            n5,
            t,
            oe2
          ]
        }
      ],
      "font-stretch": [
        {
          "font-stretch": [
            "ultra-condensed",
            "extra-condensed",
            "condensed",
            "semi-condensed",
            "normal",
            "semi-expanded",
            "expanded",
            "extra-expanded",
            "ultra-expanded",
            ee,
            r3
          ]
        }
      ],
      "font-family": [
        {
          font: [
            Te3,
            r3,
            s8
          ]
        }
      ],
      "fvn-normal": [
        "normal-nums"
      ],
      "fvn-ordinal": [
        "ordinal"
      ],
      "fvn-slashed-zero": [
        "slashed-zero"
      ],
      "fvn-figure": [
        "lining-nums",
        "oldstyle-nums"
      ],
      "fvn-spacing": [
        "proportional-nums",
        "tabular-nums"
      ],
      "fvn-fraction": [
        "diagonal-fractions",
        "stacked-fractions"
      ],
      tracking: [
        {
          tracking: [
            i9,
            t,
            r3
          ]
        }
      ],
      "line-clamp": [
        {
          "line-clamp": [
            m5,
            "none",
            t,
            oe2
          ]
        }
      ],
      leading: [
        {
          leading: [
            l9,
            ...d8()
          ]
        }
      ],
      "list-image": [
        {
          "list-image": [
            "none",
            t,
            r3
          ]
        }
      ],
      "list-style-position": [
        {
          list: [
            "inside",
            "outside"
          ]
        }
      ],
      "list-style-type": [
        {
          list: [
            "disc",
            "decimal",
            "none",
            t,
            r3
          ]
        }
      ],
      "text-alignment": [
        {
          text: [
            "left",
            "center",
            "right",
            "justify",
            "start",
            "end"
          ]
        }
      ],
      "placeholder-color": [
        {
          placeholder: a9()
        }
      ],
      "text-color": [
        {
          text: a9()
        }
      ],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline"
      ],
      "text-decoration-style": [
        {
          decoration: [
            ...X6(),
            "wavy"
          ]
        }
      ],
      "text-decoration-thickness": [
        {
          decoration: [
            m5,
            "from-font",
            "auto",
            t,
            G6
          ]
        }
      ],
      "text-decoration-color": [
        {
          decoration: a9()
        }
      ],
      "underline-offset": [
        {
          "underline-offset": [
            m5,
            "auto",
            t,
            r3
          ]
        }
      ],
      "text-transform": [
        "uppercase",
        "lowercase",
        "capitalize",
        "normal-case"
      ],
      "text-overflow": [
        "truncate",
        "text-ellipsis",
        "text-clip"
      ],
      "text-wrap": [
        {
          text: [
            "wrap",
            "nowrap",
            "balance",
            "pretty"
          ]
        }
      ],
      indent: [
        {
          indent: d8()
        }
      ],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            t,
            r3
          ]
        }
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces"
          ]
        }
      ],
      break: [
        {
          break: [
            "normal",
            "words",
            "all",
            "keep"
          ]
        }
      ],
      wrap: [
        {
          wrap: [
            "break-word",
            "anywhere",
            "normal"
          ]
        }
      ],
      hyphens: [
        {
          hyphens: [
            "none",
            "manual",
            "auto"
          ]
        }
      ],
      content: [
        {
          content: [
            "none",
            t,
            r3
          ]
        }
      ],
      "bg-attachment": [
        {
          bg: [
            "fixed",
            "local",
            "scroll"
          ]
        }
      ],
      "bg-clip": [
        {
          "bg-clip": [
            "border",
            "padding",
            "content",
            "text"
          ]
        }
      ],
      "bg-origin": [
        {
          "bg-origin": [
            "border",
            "padding",
            "content"
          ]
        }
      ],
      "bg-position": [
        {
          bg: be4()
        }
      ],
      "bg-repeat": [
        {
          bg: he5()
        }
      ],
      "bg-size": [
        {
          bg: we6()
        }
      ],
      "bg-image": [
        {
          bg: [
            "none",
            {
              linear: [
                {
                  to: [
                    "t",
                    "tr",
                    "r",
                    "br",
                    "b",
                    "bl",
                    "l",
                    "tl"
                  ]
                },
                S6,
                t,
                r3
              ],
              radial: [
                "",
                t,
                r3
              ],
              conic: [
                S6,
                t,
                r3
              ]
            },
            Ne3,
            Re3
          ]
        }
      ],
      "bg-color": [
        {
          bg: a9()
        }
      ],
      "gradient-from-pos": [
        {
          from: te2()
        }
      ],
      "gradient-via-pos": [
        {
          via: te2()
        }
      ],
      "gradient-to-pos": [
        {
          to: te2()
        }
      ],
      "gradient-from": [
        {
          from: a9()
        }
      ],
      "gradient-via": [
        {
          via: a9()
        }
      ],
      "gradient-to": [
        {
          to: a9()
        }
      ],
      rounded: [
        {
          rounded: w5()
        }
      ],
      "rounded-s": [
        {
          "rounded-s": w5()
        }
      ],
      "rounded-e": [
        {
          "rounded-e": w5()
        }
      ],
      "rounded-t": [
        {
          "rounded-t": w5()
        }
      ],
      "rounded-r": [
        {
          "rounded-r": w5()
        }
      ],
      "rounded-b": [
        {
          "rounded-b": w5()
        }
      ],
      "rounded-l": [
        {
          "rounded-l": w5()
        }
      ],
      "rounded-ss": [
        {
          "rounded-ss": w5()
        }
      ],
      "rounded-se": [
        {
          "rounded-se": w5()
        }
      ],
      "rounded-ee": [
        {
          "rounded-ee": w5()
        }
      ],
      "rounded-es": [
        {
          "rounded-es": w5()
        }
      ],
      "rounded-tl": [
        {
          "rounded-tl": w5()
        }
      ],
      "rounded-tr": [
        {
          "rounded-tr": w5()
        }
      ],
      "rounded-br": [
        {
          "rounded-br": w5()
        }
      ],
      "rounded-bl": [
        {
          "rounded-bl": w5()
        }
      ],
      "border-w": [
        {
          border: x10()
        }
      ],
      "border-w-x": [
        {
          "border-x": x10()
        }
      ],
      "border-w-y": [
        {
          "border-y": x10()
        }
      ],
      "border-w-s": [
        {
          "border-s": x10()
        }
      ],
      "border-w-e": [
        {
          "border-e": x10()
        }
      ],
      "border-w-t": [
        {
          "border-t": x10()
        }
      ],
      "border-w-r": [
        {
          "border-r": x10()
        }
      ],
      "border-w-b": [
        {
          "border-b": x10()
        }
      ],
      "border-w-l": [
        {
          "border-l": x10()
        }
      ],
      "divide-x": [
        {
          "divide-x": x10()
        }
      ],
      "divide-x-reverse": [
        "divide-x-reverse"
      ],
      "divide-y": [
        {
          "divide-y": x10()
        }
      ],
      "divide-y-reverse": [
        "divide-y-reverse"
      ],
      "border-style": [
        {
          border: [
            ...X6(),
            "hidden",
            "none"
          ]
        }
      ],
      "divide-style": [
        {
          divide: [
            ...X6(),
            "hidden",
            "none"
          ]
        }
      ],
      "border-color": [
        {
          border: a9()
        }
      ],
      "border-color-x": [
        {
          "border-x": a9()
        }
      ],
      "border-color-y": [
        {
          "border-y": a9()
        }
      ],
      "border-color-s": [
        {
          "border-s": a9()
        }
      ],
      "border-color-e": [
        {
          "border-e": a9()
        }
      ],
      "border-color-t": [
        {
          "border-t": a9()
        }
      ],
      "border-color-r": [
        {
          "border-r": a9()
        }
      ],
      "border-color-b": [
        {
          "border-b": a9()
        }
      ],
      "border-color-l": [
        {
          "border-l": a9()
        }
      ],
      "divide-color": [
        {
          divide: a9()
        }
      ],
      "outline-style": [
        {
          outline: [
            ...X6(),
            "none",
            "hidden"
          ]
        }
      ],
      "outline-offset": [
        {
          "outline-offset": [
            m5,
            t,
            r3
          ]
        }
      ],
      "outline-w": [
        {
          outline: [
            "",
            m5,
            V4,
            G6
          ]
        }
      ],
      "outline-color": [
        {
          outline: a9()
        }
      ],
      shadow: [
        {
          shadow: [
            "",
            "none",
            h10,
            U3,
            O2
          ]
        }
      ],
      "shadow-color": [
        {
          shadow: a9()
        }
      ],
      "inset-shadow": [
        {
          "inset-shadow": [
            "none",
            C10,
            U3,
            O2
          ]
        }
      ],
      "inset-shadow-color": [
        {
          "inset-shadow": a9()
        }
      ],
      "ring-w": [
        {
          ring: x10()
        }
      ],
      "ring-w-inset": [
        "ring-inset"
      ],
      "ring-color": [
        {
          ring: a9()
        }
      ],
      "ring-offset-w": [
        {
          "ring-offset": [
            m5,
            G6
          ]
        }
      ],
      "ring-offset-color": [
        {
          "ring-offset": a9()
        }
      ],
      "inset-ring-w": [
        {
          "inset-ring": x10()
        }
      ],
      "inset-ring-color": [
        {
          "inset-ring": a9()
        }
      ],
      "text-shadow": [
        {
          "text-shadow": [
            "none",
            B7,
            U3,
            O2
          ]
        }
      ],
      "text-shadow-color": [
        {
          "text-shadow": a9()
        }
      ],
      opacity: [
        {
          opacity: [
            m5,
            t,
            r3
          ]
        }
      ],
      "mix-blend": [
        {
          "mix-blend": [
            ...xe4(),
            "plus-darker",
            "plus-lighter"
          ]
        }
      ],
      "bg-blend": [
        {
          "bg-blend": xe4()
        }
      ],
      "mask-clip": [
        {
          "mask-clip": [
            "border",
            "padding",
            "content",
            "fill",
            "stroke",
            "view"
          ]
        },
        "mask-no-clip"
      ],
      "mask-composite": [
        {
          mask: [
            "add",
            "subtract",
            "intersect",
            "exclude"
          ]
        }
      ],
      "mask-image-linear-pos": [
        {
          "mask-linear": [
            m5
          ]
        }
      ],
      "mask-image-linear-from-pos": [
        {
          "mask-linear-from": g9()
        }
      ],
      "mask-image-linear-to-pos": [
        {
          "mask-linear-to": g9()
        }
      ],
      "mask-image-linear-from-color": [
        {
          "mask-linear-from": a9()
        }
      ],
      "mask-image-linear-to-color": [
        {
          "mask-linear-to": a9()
        }
      ],
      "mask-image-t-from-pos": [
        {
          "mask-t-from": g9()
        }
      ],
      "mask-image-t-to-pos": [
        {
          "mask-t-to": g9()
        }
      ],
      "mask-image-t-from-color": [
        {
          "mask-t-from": a9()
        }
      ],
      "mask-image-t-to-color": [
        {
          "mask-t-to": a9()
        }
      ],
      "mask-image-r-from-pos": [
        {
          "mask-r-from": g9()
        }
      ],
      "mask-image-r-to-pos": [
        {
          "mask-r-to": g9()
        }
      ],
      "mask-image-r-from-color": [
        {
          "mask-r-from": a9()
        }
      ],
      "mask-image-r-to-color": [
        {
          "mask-r-to": a9()
        }
      ],
      "mask-image-b-from-pos": [
        {
          "mask-b-from": g9()
        }
      ],
      "mask-image-b-to-pos": [
        {
          "mask-b-to": g9()
        }
      ],
      "mask-image-b-from-color": [
        {
          "mask-b-from": a9()
        }
      ],
      "mask-image-b-to-color": [
        {
          "mask-b-to": a9()
        }
      ],
      "mask-image-l-from-pos": [
        {
          "mask-l-from": g9()
        }
      ],
      "mask-image-l-to-pos": [
        {
          "mask-l-to": g9()
        }
      ],
      "mask-image-l-from-color": [
        {
          "mask-l-from": a9()
        }
      ],
      "mask-image-l-to-color": [
        {
          "mask-l-to": a9()
        }
      ],
      "mask-image-x-from-pos": [
        {
          "mask-x-from": g9()
        }
      ],
      "mask-image-x-to-pos": [
        {
          "mask-x-to": g9()
        }
      ],
      "mask-image-x-from-color": [
        {
          "mask-x-from": a9()
        }
      ],
      "mask-image-x-to-color": [
        {
          "mask-x-to": a9()
        }
      ],
      "mask-image-y-from-pos": [
        {
          "mask-y-from": g9()
        }
      ],
      "mask-image-y-to-pos": [
        {
          "mask-y-to": g9()
        }
      ],
      "mask-image-y-from-color": [
        {
          "mask-y-from": a9()
        }
      ],
      "mask-image-y-to-color": [
        {
          "mask-y-to": a9()
        }
      ],
      "mask-image-radial": [
        {
          "mask-radial": [
            t,
            r3
          ]
        }
      ],
      "mask-image-radial-from-pos": [
        {
          "mask-radial-from": g9()
        }
      ],
      "mask-image-radial-to-pos": [
        {
          "mask-radial-to": g9()
        }
      ],
      "mask-image-radial-from-color": [
        {
          "mask-radial-from": a9()
        }
      ],
      "mask-image-radial-to-color": [
        {
          "mask-radial-to": a9()
        }
      ],
      "mask-image-radial-shape": [
        {
          "mask-radial": [
            "circle",
            "ellipse"
          ]
        }
      ],
      "mask-image-radial-size": [
        {
          "mask-radial": [
            {
              closest: [
                "side",
                "corner"
              ],
              farthest: [
                "side",
                "corner"
              ]
            }
          ]
        }
      ],
      "mask-image-radial-pos": [
        {
          "mask-radial-at": E11()
        }
      ],
      "mask-image-conic-pos": [
        {
          "mask-conic": [
            m5
          ]
        }
      ],
      "mask-image-conic-from-pos": [
        {
          "mask-conic-from": g9()
        }
      ],
      "mask-image-conic-to-pos": [
        {
          "mask-conic-to": g9()
        }
      ],
      "mask-image-conic-from-color": [
        {
          "mask-conic-from": a9()
        }
      ],
      "mask-image-conic-to-color": [
        {
          "mask-conic-to": a9()
        }
      ],
      "mask-mode": [
        {
          mask: [
            "alpha",
            "luminance",
            "match"
          ]
        }
      ],
      "mask-origin": [
        {
          "mask-origin": [
            "border",
            "padding",
            "content",
            "fill",
            "stroke",
            "view"
          ]
        }
      ],
      "mask-position": [
        {
          mask: be4()
        }
      ],
      "mask-repeat": [
        {
          mask: he5()
        }
      ],
      "mask-size": [
        {
          mask: we6()
        }
      ],
      "mask-type": [
        {
          "mask-type": [
            "alpha",
            "luminance"
          ]
        }
      ],
      "mask-image": [
        {
          mask: [
            "none",
            t,
            r3
          ]
        }
      ],
      filter: [
        {
          filter: [
            "",
            "none",
            t,
            r3
          ]
        }
      ],
      blur: [
        {
          blur: ke5()
        }
      ],
      brightness: [
        {
          brightness: [
            m5,
            t,
            r3
          ]
        }
      ],
      contrast: [
        {
          contrast: [
            m5,
            t,
            r3
          ]
        }
      ],
      "drop-shadow": [
        {
          "drop-shadow": [
            "",
            "none",
            j10,
            U3,
            O2
          ]
        }
      ],
      "drop-shadow-color": [
        {
          "drop-shadow": a9()
        }
      ],
      grayscale: [
        {
          grayscale: [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      "hue-rotate": [
        {
          "hue-rotate": [
            m5,
            t,
            r3
          ]
        }
      ],
      invert: [
        {
          invert: [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      saturate: [
        {
          saturate: [
            m5,
            t,
            r3
          ]
        }
      ],
      sepia: [
        {
          sepia: [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-filter": [
        {
          "backdrop-filter": [
            "",
            "none",
            t,
            r3
          ]
        }
      ],
      "backdrop-blur": [
        {
          "backdrop-blur": ke5()
        }
      ],
      "backdrop-brightness": [
        {
          "backdrop-brightness": [
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-contrast": [
        {
          "backdrop-contrast": [
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-grayscale": [
        {
          "backdrop-grayscale": [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-hue-rotate": [
        {
          "backdrop-hue-rotate": [
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-invert": [
        {
          "backdrop-invert": [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-opacity": [
        {
          "backdrop-opacity": [
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-saturate": [
        {
          "backdrop-saturate": [
            m5,
            t,
            r3
          ]
        }
      ],
      "backdrop-sepia": [
        {
          "backdrop-sepia": [
            "",
            m5,
            t,
            r3
          ]
        }
      ],
      "border-collapse": [
        {
          border: [
            "collapse",
            "separate"
          ]
        }
      ],
      "border-spacing": [
        {
          "border-spacing": d8()
        }
      ],
      "border-spacing-x": [
        {
          "border-spacing-x": d8()
        }
      ],
      "border-spacing-y": [
        {
          "border-spacing-y": d8()
        }
      ],
      "table-layout": [
        {
          table: [
            "auto",
            "fixed"
          ]
        }
      ],
      caption: [
        {
          caption: [
            "top",
            "bottom"
          ]
        }
      ],
      transition: [
        {
          transition: [
            "",
            "all",
            "colors",
            "opacity",
            "shadow",
            "transform",
            "none",
            t,
            r3
          ]
        }
      ],
      "transition-behavior": [
        {
          transition: [
            "normal",
            "discrete"
          ]
        }
      ],
      duration: [
        {
          duration: [
            m5,
            "initial",
            t,
            r3
          ]
        }
      ],
      ease: [
        {
          ease: [
            "linear",
            "initial",
            A6,
            t,
            r3
          ]
        }
      ],
      delay: [
        {
          delay: [
            m5,
            t,
            r3
          ]
        }
      ],
      animate: [
        {
          animate: [
            "none",
            H6,
            t,
            r3
          ]
        }
      ],
      backface: [
        {
          backface: [
            "hidden",
            "visible"
          ]
        }
      ],
      perspective: [
        {
          perspective: [
            y10,
            t,
            r3
          ]
        }
      ],
      "perspective-origin": [
        {
          "perspective-origin": N4()
        }
      ],
      rotate: [
        {
          rotate: D8()
        }
      ],
      "rotate-x": [
        {
          "rotate-x": D8()
        }
      ],
      "rotate-y": [
        {
          "rotate-y": D8()
        }
      ],
      "rotate-z": [
        {
          "rotate-z": D8()
        }
      ],
      scale: [
        {
          scale: K9()
        }
      ],
      "scale-x": [
        {
          "scale-x": K9()
        }
      ],
      "scale-y": [
        {
          "scale-y": K9()
        }
      ],
      "scale-z": [
        {
          "scale-z": K9()
        }
      ],
      "scale-3d": [
        "scale-3d"
      ],
      skew: [
        {
          skew: se3()
        }
      ],
      "skew-x": [
        {
          "skew-x": se3()
        }
      ],
      "skew-y": [
        {
          "skew-y": se3()
        }
      ],
      transform: [
        {
          transform: [
            t,
            r3,
            "",
            "none",
            "gpu",
            "cpu"
          ]
        }
      ],
      "transform-origin": [
        {
          origin: N4()
        }
      ],
      "transform-style": [
        {
          transform: [
            "3d",
            "flat"
          ]
        }
      ],
      translate: [
        {
          translate: Q5()
        }
      ],
      "translate-x": [
        {
          "translate-x": Q5()
        }
      ],
      "translate-y": [
        {
          "translate-y": Q5()
        }
      ],
      "translate-z": [
        {
          "translate-z": Q5()
        }
      ],
      "translate-none": [
        "translate-none"
      ],
      accent: [
        {
          accent: a9()
        }
      ],
      appearance: [
        {
          appearance: [
            "none",
            "auto"
          ]
        }
      ],
      "caret-color": [
        {
          caret: a9()
        }
      ],
      "color-scheme": [
        {
          scheme: [
            "normal",
            "dark",
            "light",
            "light-dark",
            "only-dark",
            "only-light"
          ]
        }
      ],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            t,
            r3
          ]
        }
      ],
      "field-sizing": [
        {
          "field-sizing": [
            "fixed",
            "content"
          ]
        }
      ],
      "pointer-events": [
        {
          "pointer-events": [
            "auto",
            "none"
          ]
        }
      ],
      resize: [
        {
          resize: [
            "none",
            "",
            "y",
            "x"
          ]
        }
      ],
      "scroll-behavior": [
        {
          scroll: [
            "auto",
            "smooth"
          ]
        }
      ],
      "scroll-m": [
        {
          "scroll-m": d8()
        }
      ],
      "scroll-mx": [
        {
          "scroll-mx": d8()
        }
      ],
      "scroll-my": [
        {
          "scroll-my": d8()
        }
      ],
      "scroll-ms": [
        {
          "scroll-ms": d8()
        }
      ],
      "scroll-me": [
        {
          "scroll-me": d8()
        }
      ],
      "scroll-mt": [
        {
          "scroll-mt": d8()
        }
      ],
      "scroll-mr": [
        {
          "scroll-mr": d8()
        }
      ],
      "scroll-mb": [
        {
          "scroll-mb": d8()
        }
      ],
      "scroll-ml": [
        {
          "scroll-ml": d8()
        }
      ],
      "scroll-p": [
        {
          "scroll-p": d8()
        }
      ],
      "scroll-px": [
        {
          "scroll-px": d8()
        }
      ],
      "scroll-py": [
        {
          "scroll-py": d8()
        }
      ],
      "scroll-ps": [
        {
          "scroll-ps": d8()
        }
      ],
      "scroll-pe": [
        {
          "scroll-pe": d8()
        }
      ],
      "scroll-pt": [
        {
          "scroll-pt": d8()
        }
      ],
      "scroll-pr": [
        {
          "scroll-pr": d8()
        }
      ],
      "scroll-pb": [
        {
          "scroll-pb": d8()
        }
      ],
      "scroll-pl": [
        {
          "scroll-pl": d8()
        }
      ],
      "snap-align": [
        {
          snap: [
            "start",
            "end",
            "center",
            "align-none"
          ]
        }
      ],
      "snap-stop": [
        {
          snap: [
            "normal",
            "always"
          ]
        }
      ],
      "snap-type": [
        {
          snap: [
            "none",
            "x",
            "y",
            "both"
          ]
        }
      ],
      "snap-strictness": [
        {
          snap: [
            "mandatory",
            "proximity"
          ]
        }
      ],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "manipulation"
          ]
        }
      ],
      "touch-x": [
        {
          "touch-pan": [
            "x",
            "left",
            "right"
          ]
        }
      ],
      "touch-y": [
        {
          "touch-pan": [
            "y",
            "up",
            "down"
          ]
        }
      ],
      "touch-pz": [
        "touch-pinch-zoom"
      ],
      select: [
        {
          select: [
            "none",
            "text",
            "all",
            "auto"
          ]
        }
      ],
      "will-change": [
        {
          "will-change": [
            "auto",
            "scroll",
            "contents",
            "transform",
            t,
            r3
          ]
        }
      ],
      fill: [
        {
          fill: [
            "none",
            ...a9()
          ]
        }
      ],
      "stroke-w": [
        {
          stroke: [
            m5,
            V4,
            G6,
            oe2
          ]
        }
      ],
      stroke: [
        {
          stroke: [
            "none",
            ...a9()
          ]
        }
      ],
      "forced-color-adjust": [
        {
          "forced-color-adjust": [
            "auto",
            "none"
          ]
        }
      ]
    },
    conflictingClassGroups: {
      overflow: [
        "overflow-x",
        "overflow-y"
      ],
      overscroll: [
        "overscroll-x",
        "overscroll-y"
      ],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left"
      ],
      "inset-x": [
        "right",
        "left"
      ],
      "inset-y": [
        "top",
        "bottom"
      ],
      flex: [
        "basis",
        "grow",
        "shrink"
      ],
      gap: [
        "gap-x",
        "gap-y"
      ],
      p: [
        "px",
        "py",
        "ps",
        "pe",
        "pt",
        "pr",
        "pb",
        "pl"
      ],
      px: [
        "pr",
        "pl"
      ],
      py: [
        "pt",
        "pb"
      ],
      m: [
        "mx",
        "my",
        "ms",
        "me",
        "mt",
        "mr",
        "mb",
        "ml"
      ],
      mx: [
        "mr",
        "ml"
      ],
      my: [
        "mt",
        "mb"
      ],
      size: [
        "w",
        "h"
      ],
      "font-size": [
        "leading"
      ],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction"
      ],
      "fvn-ordinal": [
        "fvn-normal"
      ],
      "fvn-slashed-zero": [
        "fvn-normal"
      ],
      "fvn-figure": [
        "fvn-normal"
      ],
      "fvn-spacing": [
        "fvn-normal"
      ],
      "fvn-fraction": [
        "fvn-normal"
      ],
      "line-clamp": [
        "display",
        "overflow"
      ],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl"
      ],
      "rounded-s": [
        "rounded-ss",
        "rounded-es"
      ],
      "rounded-e": [
        "rounded-se",
        "rounded-ee"
      ],
      "rounded-t": [
        "rounded-tl",
        "rounded-tr"
      ],
      "rounded-r": [
        "rounded-tr",
        "rounded-br"
      ],
      "rounded-b": [
        "rounded-br",
        "rounded-bl"
      ],
      "rounded-l": [
        "rounded-tl",
        "rounded-bl"
      ],
      "border-spacing": [
        "border-spacing-x",
        "border-spacing-y"
      ],
      "border-w": [
        "border-w-x",
        "border-w-y",
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l"
      ],
      "border-w-x": [
        "border-w-r",
        "border-w-l"
      ],
      "border-w-y": [
        "border-w-t",
        "border-w-b"
      ],
      "border-color": [
        "border-color-x",
        "border-color-y",
        "border-color-s",
        "border-color-e",
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l"
      ],
      "border-color-x": [
        "border-color-r",
        "border-color-l"
      ],
      "border-color-y": [
        "border-color-t",
        "border-color-b"
      ],
      translate: [
        "translate-x",
        "translate-y",
        "translate-none"
      ],
      "translate-none": [
        "translate",
        "translate-x",
        "translate-y",
        "translate-z"
      ],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml"
      ],
      "scroll-mx": [
        "scroll-mr",
        "scroll-ml"
      ],
      "scroll-my": [
        "scroll-mt",
        "scroll-mb"
      ],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl"
      ],
      "scroll-px": [
        "scroll-pr",
        "scroll-pl"
      ],
      "scroll-py": [
        "scroll-pt",
        "scroll-pb"
      ],
      touch: [
        "touch-x",
        "touch-y",
        "touch-pz"
      ],
      "touch-x": [
        "touch"
      ],
      "touch-y": [
        "touch"
      ],
      "touch-pz": [
        "touch"
      ]
    },
    conflictingClassGroupModifiers: {
      "font-size": [
        "leading"
      ]
    },
    orderSensitiveModifiers: [
      "*",
      "**",
      "after",
      "backdrop",
      "before",
      "details-content",
      "file",
      "first-letter",
      "first-line",
      "marker",
      "placeholder",
      "selection"
    ]
  };
};
var go = le3(me4);

// lib/utils.ts
function cn(...inputs) {
  return go(e(inputs));
}

// components/ui/button.tsx
var buttonVariants = b5("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? I2 : "button";
  return /* @__PURE__ */ q(Comp, {
    "data-slot": "button",
    className: cn(buttonVariants({
      variant,
      size,
      className
    })),
    ...props
  });
}

// pages/index.tsx
var Container = ({ children, left, ...props }) => {
  return /* @__PURE__ */ C("div", {
    className: "border rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md",
    ...props,
    children: [
      /* @__PURE__ */ C("div", {
        className: "flex gap-4",
        children: [
          /* @__PURE__ */ q("div", {
            className: "w-[20%] hover:scale-[2] transition-transform duration-300 ease-in-out cursor-pointer",
            children: left
          }),
          /* @__PURE__ */ q("div", {
            className: "flex-1 bg-primary",
            children
          })
        ]
      }),
      /* @__PURE__ */ q(Button, {
        variant: "default",
        children: "fuck"
      })
    ]
  });
};
function MyPage() {
  const [currentTime, setCurrentTime] = Qe.useState(/* @__PURE__ */ new Date());
  Qe.useEffect(() => {
    console.log("index.tsx");
    const timer = setInterval(() => {
      setCurrentTime(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ C(Container, {
    left: /* @__PURE__ */ q("div", {
      children: "Left Content"
    }),
    children: [
      /* @__PURE__ */ q("h1", {
        children: "Hello, World!"
      }),
      /* @__PURE__ */ C("p", {
        children: [
          "Current time: ",
          currentTime.toLocaleTimeString()
        ]
      })
    ]
  });
}

// service.json
var service_default = {
  name: "TEMPLATE",
  jwt_check: false,
  permissions: {
    read: [],
    write: [],
    env: [],
    run: []
  }
};

// service.ts
var baseURL = `/api/v2/${service_default.name}`;

// deno:https://esm.sh/@tanstack/query-core@5.59.16/denonext/query-core.mjs
var O3 = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t8) {
    return this.listeners.add(t8), this.onSubscribe(), () => {
      this.listeners.delete(t8), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var S7 = typeof globalThis > "u" || "Deno" in globalThis;
function m6() {
}
function pt(t8, e8) {
  return typeof t8 == "function" ? t8(e8) : t8;
}
function K4(t8) {
  return typeof t8 == "number" && t8 >= 0 && t8 !== 1 / 0;
}
function B2(t8, e8) {
  return Math.max(t8 + (e8 || 0) - Date.now(), 0);
}
function E9(t8, e8) {
  return typeof t8 == "function" ? t8(e8) : t8;
}
function P2(t8, e8) {
  return typeof t8 == "function" ? t8(e8) : t8;
}
function V5(t8, e8) {
  let { type: s8 = "all", exact: r8, fetchStatus: i9, predicate: a9, queryKey: h10, stale: n5 } = t8;
  if (h10) {
    if (r8) {
      if (e8.queryHash !== j6(h10, e8.options)) return false;
    } else if (!A3(e8.queryKey, h10)) return false;
  }
  if (s8 !== "all") {
    let o7 = e8.isActive();
    if (s8 === "active" && !o7 || s8 === "inactive" && o7) return false;
  }
  return !(typeof n5 == "boolean" && e8.isStale() !== n5 || i9 && i9 !== e8.state.fetchStatus || a9 && !a9(e8));
}
function $3(t8, e8) {
  let { exact: s8, status: r8, predicate: i9, mutationKey: a9 } = t8;
  if (a9) {
    if (!e8.options.mutationKey) return false;
    if (s8) {
      if (Q2(e8.options.mutationKey) !== Q2(a9)) return false;
    } else if (!A3(e8.options.mutationKey, a9)) return false;
  }
  return !(r8 && e8.state.status !== r8 || i9 && !i9(e8));
}
function j6(t8, e8) {
  return (e8?.queryKeyHashFn || Q2)(t8);
}
function Q2(t8) {
  return JSON.stringify(t8, (e8, s8) => Z2(s8) ? Object.keys(s8).sort().reduce((r8, i9) => (r8[i9] = s8[i9], r8), {}) : s8);
}
function A3(t8, e8) {
  return t8 === e8 ? true : typeof t8 != typeof e8 ? false : t8 && e8 && typeof t8 == "object" && typeof e8 == "object" ? !Object.keys(e8).some((s8) => !A3(t8[s8], e8[s8])) : false;
}
function N2(t8, e8) {
  if (t8 === e8) return t8;
  let s8 = ft(t8) && ft(e8);
  if (s8 || Z2(t8) && Z2(e8)) {
    let r8 = s8 ? t8 : Object.keys(t8), i9 = r8.length, a9 = s8 ? e8 : Object.keys(e8), h10 = a9.length, n5 = s8 ? [] : {}, o7 = 0;
    for (let c6 = 0; c6 < h10; c6++) {
      let u10 = s8 ? c6 : a9[c6];
      (!s8 && r8.includes(u10) || s8) && t8[u10] === void 0 && e8[u10] === void 0 ? (n5[u10] = void 0, o7++) : (n5[u10] = N2(t8[u10], e8[u10]), n5[u10] === t8[u10] && t8[u10] !== void 0 && o7++);
    }
    return i9 === h10 && o7 === i9 ? t8 : n5;
  }
  return e8;
}
function ft(t8) {
  return Array.isArray(t8) && t8.length === Object.keys(t8).length;
}
function Z2(t8) {
  if (!dt(t8)) return false;
  let e8 = t8.constructor;
  if (e8 === void 0) return true;
  let s8 = e8.prototype;
  return !(!dt(s8) || !s8.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t8) !== Object.prototype);
}
function dt(t8) {
  return Object.prototype.toString.call(t8) === "[object Object]";
}
function yt(t8) {
  return new Promise((e8) => {
    setTimeout(e8, t8);
  });
}
function H2(t8, e8, s8) {
  return typeof s8.structuralSharing == "function" ? s8.structuralSharing(t8, e8) : s8.structuralSharing !== false ? N2(t8, e8) : e8;
}
function mt(t8, e8, s8 = 0) {
  let r8 = [
    ...t8,
    e8
  ];
  return s8 && r8.length > s8 ? r8.slice(1) : r8;
}
function vt(t8, e8, s8 = 0) {
  let r8 = [
    e8,
    ...t8
  ];
  return s8 && r8.length > s8 ? r8.slice(0, -1) : r8;
}
var k7 = Symbol();
function W2(t8, e8) {
  return !t8.queryFn && e8?.initialPromise ? () => e8.initialPromise : !t8.queryFn || t8.queryFn === k7 ? () => Promise.reject(new Error(`Missing queryFn: '${t8.queryHash}'`)) : t8.queryFn;
}
var Et = class extends O3 {
  #t;
  #e;
  #r;
  constructor() {
    super(), this.#r = (t8) => {
      if (!S7 && globalThis.addEventListener) {
        let e8 = () => t8();
        return globalThis.addEventListener("visibilitychange", e8, false), () => {
          globalThis.removeEventListener("visibilitychange", e8);
        };
      }
    };
  }
  onSubscribe() {
    this.#e || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#e?.(), this.#e = void 0);
  }
  setEventListener(t8) {
    this.#r = t8, this.#e?.(), this.#e = t8((e8) => {
      typeof e8 == "boolean" ? this.setFocused(e8) : this.onFocus();
    });
  }
  setFocused(t8) {
    this.#t !== t8 && (this.#t = t8, this.onFocus());
  }
  onFocus() {
    let t8 = this.isFocused();
    this.listeners.forEach((e8) => {
      e8(t8);
    });
  }
  isFocused() {
    return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden";
  }
};
var D4 = new Et();
var Ft = class extends O3 {
  #t = true;
  #e;
  #r;
  constructor() {
    super(), this.#r = (t8) => {
      if (!S7 && globalThis.addEventListener) {
        let e8 = () => t8(true), s8 = () => t8(false);
        return globalThis.addEventListener("online", e8, false), globalThis.addEventListener("offline", s8, false), () => {
          globalThis.removeEventListener("online", e8), globalThis.removeEventListener("offline", s8);
        };
      }
    };
  }
  onSubscribe() {
    this.#e || this.setEventListener(this.#r);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#e?.(), this.#e = void 0);
  }
  setEventListener(t8) {
    this.#r = t8, this.#e?.(), this.#e = t8(this.setOnline.bind(this));
  }
  setOnline(t8) {
    this.#t !== t8 && (this.#t = t8, this.listeners.forEach((s8) => {
      s8(t8);
    }));
  }
  isOnline() {
    return this.#t;
  }
};
var x5 = new Ft();
function L() {
  let t8, e8, s8 = new Promise((i9, a9) => {
    t8 = i9, e8 = a9;
  });
  s8.status = "pending", s8.catch(() => {
  });
  function r8(i9) {
    Object.assign(s8, i9), delete s8.resolve, delete s8.reject;
  }
  return s8.resolve = (i9) => {
    r8({
      status: "fulfilled",
      value: i9
    }), t8(i9);
  }, s8.reject = (i9) => {
    r8({
      status: "rejected",
      reason: i9
    }), e8(i9);
  }, s8;
}
function Dt(t8) {
  return Math.min(1e3 * 2 ** t8, 3e4);
}
function tt(t8) {
  return (t8 ?? "online") === "online" ? x5.isOnline() : true;
}
var et = class extends Error {
  constructor(t8) {
    super("CancelledError"), this.revert = t8?.revert, this.silent = t8?.silent;
  }
};
function z5(t8) {
  return t8 instanceof et;
}
function J2(t8) {
  let e8 = false, s8 = 0, r8 = false, i9, a9 = L(), h10 = (l9) => {
    r8 || (d8(new et(l9)), t8.abort?.());
  }, n5 = () => {
    e8 = true;
  }, o7 = () => {
    e8 = false;
  }, c6 = () => D4.isFocused() && (t8.networkMode === "always" || x5.isOnline()) && t8.canRun(), u10 = () => tt(t8.networkMode) && t8.canRun(), w5 = (l9) => {
    r8 || (r8 = true, t8.onSuccess?.(l9), i9?.(), a9.resolve(l9));
  }, d8 = (l9) => {
    r8 || (r8 = true, t8.onError?.(l9), i9?.(), a9.reject(l9));
  }, v13 = () => new Promise((l9) => {
    i9 = (b12) => {
      (r8 || c6()) && l9(b12);
    }, t8.onPause?.();
  }).then(() => {
    i9 = void 0, r8 || t8.onContinue?.();
  }), p9 = () => {
    if (r8) return;
    let l9, b12 = s8 === 0 ? t8.initialPromise : void 0;
    try {
      l9 = b12 ?? t8.fn();
    } catch (y10) {
      l9 = Promise.reject(y10);
    }
    Promise.resolve(l9).then(w5).catch((y10) => {
      if (r8) return;
      let R8 = t8.retry ?? (S7 ? 0 : 3), C10 = t8.retryDelay ?? Dt, F7 = typeof C10 == "function" ? C10(s8, y10) : C10, lt2 = R8 === true || typeof R8 == "number" && s8 < R8 || typeof R8 == "function" && R8(s8, y10);
      if (e8 || !lt2) {
        d8(y10);
        return;
      }
      s8++, t8.onFail?.(s8, y10), yt(F7).then(() => c6() ? void 0 : v13()).then(() => {
        e8 ? d8(y10) : p9();
      });
    });
  };
  return {
    promise: a9,
    cancel: h10,
    continue: () => (i9?.(), a9),
    cancelRetry: n5,
    continueRetry: o7,
    canStart: u10,
    start: () => (u10() ? p9() : v13().then(p9), a9)
  };
}
function xt() {
  let t8 = [], e8 = 0, s8 = (n5) => {
    n5();
  }, r8 = (n5) => {
    n5();
  }, i9 = (n5) => setTimeout(n5, 0), a9 = (n5) => {
    e8 ? t8.push(n5) : i9(() => {
      s8(n5);
    });
  }, h10 = () => {
    let n5 = t8;
    t8 = [], n5.length && i9(() => {
      r8(() => {
        n5.forEach((o7) => {
          s8(o7);
        });
      });
    });
  };
  return {
    batch: (n5) => {
      let o7;
      e8++;
      try {
        o7 = n5();
      } finally {
        e8--, e8 || h10();
      }
      return o7;
    },
    batchCalls: (n5) => (...o7) => {
      a9(() => {
        n5(...o7);
      });
    },
    schedule: a9,
    setNotifyFunction: (n5) => {
      s8 = n5;
    },
    setBatchNotifyFunction: (n5) => {
      r8 = n5;
    },
    setScheduler: (n5) => {
      i9 = n5;
    }
  };
}
var f7 = xt();
var X2 = class {
  #t;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), K4(this.gcTime) && (this.#t = setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t8) {
    this.gcTime = Math.max(this.gcTime || 0, t8 ?? (S7 ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.#t && (clearTimeout(this.#t), this.#t = void 0);
  }
};
var st = class extends X2 {
  #t;
  #e;
  #r;
  #s;
  #i;
  #n;
  constructor(t8) {
    super(), this.#n = false, this.#i = t8.defaultOptions, this.setOptions(t8.options), this.observers = [], this.#r = t8.cache, this.queryKey = t8.queryKey, this.queryHash = t8.queryHash, this.#t = qt(this.options), this.state = t8.state ?? this.#t, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#s?.promise;
  }
  setOptions(t8) {
    this.options = {
      ...this.#i,
      ...t8
    }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
  }
  setData(t8, e8) {
    let s8 = H2(this.state.data, t8, this.options);
    return this.#a({
      data: s8,
      type: "success",
      dataUpdatedAt: e8?.updatedAt,
      manual: e8?.manual
    }), s8;
  }
  setState(t8, e8) {
    this.#a({
      type: "setState",
      state: t8,
      setStateOptions: e8
    });
  }
  cancel(t8) {
    let e8 = this.#s?.promise;
    return this.#s?.cancel(t8), e8 ? e8.then(m6).catch(m6) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: true
    });
  }
  reset() {
    this.destroy(), this.setState(this.#t);
  }
  isActive() {
    return this.observers.some((t8) => P2(t8.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === k7 || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? true : this.getObserversCount() > 0 ? this.observers.some((t8) => t8.getCurrentResult().isStale) : this.state.data === void 0;
  }
  isStaleByTime(t8 = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !B2(this.state.dataUpdatedAt, t8);
  }
  onFocus() {
    this.observers.find((e8) => e8.shouldFetchOnWindowFocus())?.refetch({
      cancelRefetch: false
    }), this.#s?.continue();
  }
  onOnline() {
    this.observers.find((e8) => e8.shouldFetchOnReconnect())?.refetch({
      cancelRefetch: false
    }), this.#s?.continue();
  }
  addObserver(t8) {
    this.observers.includes(t8) || (this.observers.push(t8), this.clearGcTimeout(), this.#r.notify({
      type: "observerAdded",
      query: this,
      observer: t8
    }));
  }
  removeObserver(t8) {
    this.observers.includes(t8) && (this.observers = this.observers.filter((e8) => e8 !== t8), this.observers.length || (this.#s && (this.#n ? this.#s.cancel({
      revert: true
    }) : this.#s.cancelRetry()), this.scheduleGc()), this.#r.notify({
      type: "observerRemoved",
      query: this,
      observer: t8
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#a({
      type: "invalidate"
    });
  }
  fetch(t8, e8) {
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && e8?.cancelRefetch) this.cancel({
        silent: true
      });
      else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
    }
    if (t8 && this.setOptions(t8), !this.options.queryFn) {
      let n5 = this.observers.find((o7) => o7.options.queryFn);
      n5 && this.setOptions(n5.options);
    }
    let s8 = new AbortController(), r8 = (n5) => {
      Object.defineProperty(n5, "signal", {
        enumerable: true,
        get: () => (this.#n = true, s8.signal)
      });
    }, i9 = () => {
      let n5 = W2(this.options, e8), o7 = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return r8(o7), this.#n = false, this.options.persister ? this.options.persister(n5, o7, this) : n5(o7);
    }, a9 = {
      fetchOptions: e8,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: i9
    };
    r8(a9), this.options.behavior?.onFetch(a9, this), this.#e = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a9.fetchOptions?.meta) && this.#a({
      type: "fetch",
      meta: a9.fetchOptions?.meta
    });
    let h10 = (n5) => {
      z5(n5) && n5.silent || this.#a({
        type: "error",
        error: n5
      }), z5(n5) || (this.#r.config.onError?.(n5, this), this.#r.config.onSettled?.(this.state.data, n5, this)), this.scheduleGc();
    };
    return this.#s = J2({
      initialPromise: e8?.initialPromise,
      fn: a9.fetchFn,
      abort: s8.abort.bind(s8),
      onSuccess: (n5) => {
        if (n5 === void 0) {
          h10(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(n5);
        } catch (o7) {
          h10(o7);
          return;
        }
        this.#r.config.onSuccess?.(n5, this), this.#r.config.onSettled?.(n5, this.state.error, this), this.scheduleGc();
      },
      onError: h10,
      onFail: (n5, o7) => {
        this.#a({
          type: "failed",
          failureCount: n5,
          error: o7
        });
      },
      onPause: () => {
        this.#a({
          type: "pause"
        });
      },
      onContinue: () => {
        this.#a({
          type: "continue"
        });
      },
      retry: a9.options.retry,
      retryDelay: a9.options.retryDelay,
      networkMode: a9.options.networkMode,
      canRun: () => true
    }), this.#s.start();
  }
  #a(t8) {
    let e8 = (s8) => {
      switch (t8.type) {
        case "failed":
          return {
            ...s8,
            fetchFailureCount: t8.failureCount,
            fetchFailureReason: t8.error
          };
        case "pause":
          return {
            ...s8,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...s8,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...s8,
            ...rt(s8.data, this.options),
            fetchMeta: t8.meta ?? null
          };
        case "success":
          return {
            ...s8,
            data: t8.data,
            dataUpdateCount: s8.dataUpdateCount + 1,
            dataUpdatedAt: t8.dataUpdatedAt ?? Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!t8.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          let r8 = t8.error;
          return z5(r8) && r8.revert && this.#e ? {
            ...this.#e,
            fetchStatus: "idle"
          } : {
            ...s8,
            error: r8,
            errorUpdateCount: s8.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: s8.fetchFailureCount + 1,
            fetchFailureReason: r8,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...s8,
            isInvalidated: true
          };
        case "setState":
          return {
            ...s8,
            ...t8.state
          };
      }
    };
    this.state = e8(this.state), f7.batch(() => {
      this.observers.forEach((s8) => {
        s8.onQueryUpdate();
      }), this.#r.notify({
        query: this,
        type: "updated",
        action: t8
      });
    });
  }
};
function rt(t8, e8) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: tt(e8.networkMode) ? "fetching" : "paused",
    ...t8 === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function qt(t8) {
  let e8 = typeof t8.initialData == "function" ? t8.initialData() : t8.initialData, s8 = e8 !== void 0, r8 = s8 ? typeof t8.initialDataUpdatedAt == "function" ? t8.initialDataUpdatedAt() : t8.initialDataUpdatedAt : 0;
  return {
    data: e8,
    dataUpdateCount: 0,
    dataUpdatedAt: s8 ? r8 ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: s8 ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var it = class extends O3 {
  constructor(t8 = {}) {
    super(), this.config = t8, this.#t = /* @__PURE__ */ new Map();
  }
  #t;
  build(t8, e8, s8) {
    let r8 = e8.queryKey, i9 = e8.queryHash ?? j6(r8, e8), a9 = this.get(i9);
    return a9 || (a9 = new st({
      cache: this,
      queryKey: r8,
      queryHash: i9,
      options: t8.defaultQueryOptions(e8),
      state: s8,
      defaultOptions: t8.getQueryDefaults(r8)
    }), this.add(a9)), a9;
  }
  add(t8) {
    this.#t.has(t8.queryHash) || (this.#t.set(t8.queryHash, t8), this.notify({
      type: "added",
      query: t8
    }));
  }
  remove(t8) {
    let e8 = this.#t.get(t8.queryHash);
    e8 && (t8.destroy(), e8 === t8 && this.#t.delete(t8.queryHash), this.notify({
      type: "removed",
      query: t8
    }));
  }
  clear() {
    f7.batch(() => {
      this.getAll().forEach((t8) => {
        this.remove(t8);
      });
    });
  }
  get(t8) {
    return this.#t.get(t8);
  }
  getAll() {
    return [
      ...this.#t.values()
    ];
  }
  find(t8) {
    let e8 = {
      exact: true,
      ...t8
    };
    return this.getAll().find((s8) => V5(e8, s8));
  }
  findAll(t8 = {}) {
    let e8 = this.getAll();
    return Object.keys(t8).length > 0 ? e8.filter((s8) => V5(t8, s8)) : e8;
  }
  notify(t8) {
    f7.batch(() => {
      this.listeners.forEach((e8) => {
        e8(t8);
      });
    });
  }
  onFocus() {
    f7.batch(() => {
      this.getAll().forEach((t8) => {
        t8.onFocus();
      });
    });
  }
  onOnline() {
    f7.batch(() => {
      this.getAll().forEach((t8) => {
        t8.onOnline();
      });
    });
  }
};
var nt = class extends X2 {
  #t;
  #e;
  #r;
  constructor(t8) {
    super(), this.mutationId = t8.mutationId, this.#e = t8.mutationCache, this.#t = [], this.state = t8.state || at(), this.setOptions(t8.options), this.scheduleGc();
  }
  setOptions(t8) {
    this.options = t8, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t8) {
    this.#t.includes(t8) || (this.#t.push(t8), this.clearGcTimeout(), this.#e.notify({
      type: "observerAdded",
      mutation: this,
      observer: t8
    }));
  }
  removeObserver(t8) {
    this.#t = this.#t.filter((e8) => e8 !== t8), this.scheduleGc(), this.#e.notify({
      type: "observerRemoved",
      mutation: this,
      observer: t8
    });
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#e.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t8) {
    this.#r = J2({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t8) : Promise.reject(new Error("No mutationFn found")),
      onFail: (r8, i9) => {
        this.#s({
          type: "failed",
          failureCount: r8,
          error: i9
        });
      },
      onPause: () => {
        this.#s({
          type: "pause"
        });
      },
      onContinue: () => {
        this.#s({
          type: "continue"
        });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this)
    });
    let e8 = this.state.status === "pending", s8 = !this.#r.canStart();
    try {
      if (!e8) {
        this.#s({
          type: "pending",
          variables: t8,
          isPaused: s8
        }), await this.#e.config.onMutate?.(t8, this);
        let i9 = await this.options.onMutate?.(t8);
        i9 !== this.state.context && this.#s({
          type: "pending",
          context: i9,
          variables: t8,
          isPaused: s8
        });
      }
      let r8 = await this.#r.start();
      return await this.#e.config.onSuccess?.(r8, t8, this.state.context, this), await this.options.onSuccess?.(r8, t8, this.state.context), await this.#e.config.onSettled?.(r8, null, this.state.variables, this.state.context, this), await this.options.onSettled?.(r8, null, t8, this.state.context), this.#s({
        type: "success",
        data: r8
      }), r8;
    } catch (r8) {
      try {
        throw await this.#e.config.onError?.(r8, t8, this.state.context, this), await this.options.onError?.(r8, t8, this.state.context), await this.#e.config.onSettled?.(void 0, r8, this.state.variables, this.state.context, this), await this.options.onSettled?.(void 0, r8, t8, this.state.context), r8;
      } finally {
        this.#s({
          type: "error",
          error: r8
        });
      }
    } finally {
      this.#e.runNext(this);
    }
  }
  #s(t8) {
    let e8 = (s8) => {
      switch (t8.type) {
        case "failed":
          return {
            ...s8,
            failureCount: t8.failureCount,
            failureReason: t8.error
          };
        case "pause":
          return {
            ...s8,
            isPaused: true
          };
        case "continue":
          return {
            ...s8,
            isPaused: false
          };
        case "pending":
          return {
            ...s8,
            context: t8.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t8.isPaused,
            status: "pending",
            variables: t8.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...s8,
            data: t8.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...s8,
            data: void 0,
            error: t8.error,
            failureCount: s8.failureCount + 1,
            failureReason: t8.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = e8(this.state), f7.batch(() => {
      this.#t.forEach((s8) => {
        s8.onMutationUpdate(t8);
      }), this.#e.notify({
        mutation: this,
        type: "updated",
        action: t8
      });
    });
  }
};
function at() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var ot = class extends O3 {
  constructor(t8 = {}) {
    super(), this.config = t8, this.#t = /* @__PURE__ */ new Map(), this.#e = Date.now();
  }
  #t;
  #e;
  build(t8, e8, s8) {
    let r8 = new nt({
      mutationCache: this,
      mutationId: ++this.#e,
      options: t8.defaultMutationOptions(e8),
      state: s8
    });
    return this.add(r8), r8;
  }
  add(t8) {
    let e8 = Y4(t8), s8 = this.#t.get(e8) ?? [];
    s8.push(t8), this.#t.set(e8, s8), this.notify({
      type: "added",
      mutation: t8
    });
  }
  remove(t8) {
    let e8 = Y4(t8);
    if (this.#t.has(e8)) {
      let s8 = this.#t.get(e8)?.filter((r8) => r8 !== t8);
      s8 && (s8.length === 0 ? this.#t.delete(e8) : this.#t.set(e8, s8));
    }
    this.notify({
      type: "removed",
      mutation: t8
    });
  }
  canRun(t8) {
    let e8 = this.#t.get(Y4(t8))?.find((s8) => s8.state.status === "pending");
    return !e8 || e8 === t8;
  }
  runNext(t8) {
    return this.#t.get(Y4(t8))?.find((s8) => s8 !== t8 && s8.state.isPaused)?.continue() ?? Promise.resolve();
  }
  clear() {
    f7.batch(() => {
      this.getAll().forEach((t8) => {
        this.remove(t8);
      });
    });
  }
  getAll() {
    return [
      ...this.#t.values()
    ].flat();
  }
  find(t8) {
    let e8 = {
      exact: true,
      ...t8
    };
    return this.getAll().find((s8) => $3(e8, s8));
  }
  findAll(t8 = {}) {
    return this.getAll().filter((e8) => $3(t8, e8));
  }
  notify(t8) {
    f7.batch(() => {
      this.listeners.forEach((e8) => {
        e8(t8);
      });
    });
  }
  resumePausedMutations() {
    let t8 = this.getAll().filter((e8) => e8.state.isPaused);
    return f7.batch(() => Promise.all(t8.map((e8) => e8.continue().catch(m6))));
  }
};
function Y4(t8) {
  return t8.options.scope?.id ?? String(t8.mutationId);
}
function U4(t8) {
  return {
    onFetch: (e8, s8) => {
      let r8 = e8.options, i9 = e8.fetchOptions?.meta?.fetchMore?.direction, a9 = e8.state.data?.pages || [], h10 = e8.state.data?.pageParams || [], n5 = {
        pages: [],
        pageParams: []
      }, o7 = 0, c6 = async () => {
        let u10 = false, w5 = (p9) => {
          Object.defineProperty(p9, "signal", {
            enumerable: true,
            get: () => (e8.signal.aborted ? u10 = true : e8.signal.addEventListener("abort", () => {
              u10 = true;
            }), e8.signal)
          });
        }, d8 = W2(e8.options, e8.fetchOptions), v13 = async (p9, l9, b12) => {
          if (u10) return Promise.reject();
          if (l9 == null && p9.pages.length) return Promise.resolve(p9);
          let y10 = {
            queryKey: e8.queryKey,
            pageParam: l9,
            direction: b12 ? "backward" : "forward",
            meta: e8.options.meta
          };
          w5(y10);
          let R8 = await d8(y10), { maxPages: C10 } = e8.options, F7 = b12 ? vt : mt;
          return {
            pages: F7(p9.pages, R8, C10),
            pageParams: F7(p9.pageParams, l9, C10)
          };
        };
        if (i9 && a9.length) {
          let p9 = i9 === "backward", l9 = p9 ? bt : ut, b12 = {
            pages: a9,
            pageParams: h10
          }, y10 = l9(r8, b12);
          n5 = await v13(b12, y10, p9);
        } else {
          let p9 = t8 ?? a9.length;
          do {
            let l9 = o7 === 0 ? h10[0] ?? r8.initialPageParam : ut(r8, n5);
            if (o7 > 0 && l9 == null) break;
            n5 = await v13(n5, l9), o7++;
          } while (o7 < p9);
        }
        return n5;
      };
      e8.options.persister ? e8.fetchFn = () => e8.options.persister?.(c6, {
        queryKey: e8.queryKey,
        meta: e8.options.meta,
        signal: e8.signal
      }, s8) : e8.fetchFn = c6;
    }
  };
}
function ut(t8, { pages: e8, pageParams: s8 }) {
  let r8 = e8.length - 1;
  return e8.length > 0 ? t8.getNextPageParam(e8[r8], e8, s8[r8], s8) : void 0;
}
function bt(t8, { pages: e8, pageParams: s8 }) {
  return e8.length > 0 ? t8.getPreviousPageParam?.(e8[0], e8, s8[0], s8) : void 0;
}
var Tt = class {
  #t;
  #e;
  #r;
  #s;
  #i;
  #n;
  #a;
  #o;
  constructor(t8 = {}) {
    this.#t = t8.queryCache || new it(), this.#e = t8.mutationCache || new ot(), this.#r = t8.defaultOptions || {}, this.#s = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#n = 0;
  }
  mount() {
    this.#n++, this.#n === 1 && (this.#a = D4.subscribe(async (t8) => {
      t8 && (await this.resumePausedMutations(), this.#t.onFocus());
    }), this.#o = x5.subscribe(async (t8) => {
      t8 && (await this.resumePausedMutations(), this.#t.onOnline());
    }));
  }
  unmount() {
    this.#n--, this.#n === 0 && (this.#a?.(), this.#a = void 0, this.#o?.(), this.#o = void 0);
  }
  isFetching(t8) {
    return this.#t.findAll({
      ...t8,
      fetchStatus: "fetching"
    }).length;
  }
  isMutating(t8) {
    return this.#e.findAll({
      ...t8,
      status: "pending"
    }).length;
  }
  getQueryData(t8) {
    let e8 = this.defaultQueryOptions({
      queryKey: t8
    });
    return this.#t.get(e8.queryHash)?.state.data;
  }
  ensureQueryData(t8) {
    let e8 = this.getQueryData(t8.queryKey);
    if (e8 === void 0) return this.fetchQuery(t8);
    {
      let s8 = this.defaultQueryOptions(t8), r8 = this.#t.build(this, s8);
      return t8.revalidateIfStale && r8.isStaleByTime(E9(s8.staleTime, r8)) && this.prefetchQuery(s8), Promise.resolve(e8);
    }
  }
  getQueriesData(t8) {
    return this.#t.findAll(t8).map(({ queryKey: e8, state: s8 }) => {
      let r8 = s8.data;
      return [
        e8,
        r8
      ];
    });
  }
  setQueryData(t8, e8, s8) {
    let r8 = this.defaultQueryOptions({
      queryKey: t8
    }), a9 = this.#t.get(r8.queryHash)?.state.data, h10 = pt(e8, a9);
    if (h10 !== void 0) return this.#t.build(this, r8).setData(h10, {
      ...s8,
      manual: true
    });
  }
  setQueriesData(t8, e8, s8) {
    return f7.batch(() => this.#t.findAll(t8).map(({ queryKey: r8 }) => [
      r8,
      this.setQueryData(r8, e8, s8)
    ]));
  }
  getQueryState(t8) {
    let e8 = this.defaultQueryOptions({
      queryKey: t8
    });
    return this.#t.get(e8.queryHash)?.state;
  }
  removeQueries(t8) {
    let e8 = this.#t;
    f7.batch(() => {
      e8.findAll(t8).forEach((s8) => {
        e8.remove(s8);
      });
    });
  }
  resetQueries(t8, e8) {
    let s8 = this.#t, r8 = {
      type: "active",
      ...t8
    };
    return f7.batch(() => (s8.findAll(t8).forEach((i9) => {
      i9.reset();
    }), this.refetchQueries(r8, e8)));
  }
  cancelQueries(t8 = {}, e8 = {}) {
    let s8 = {
      revert: true,
      ...e8
    }, r8 = f7.batch(() => this.#t.findAll(t8).map((i9) => i9.cancel(s8)));
    return Promise.all(r8).then(m6).catch(m6);
  }
  invalidateQueries(t8 = {}, e8 = {}) {
    return f7.batch(() => {
      if (this.#t.findAll(t8).forEach((r8) => {
        r8.invalidate();
      }), t8.refetchType === "none") return Promise.resolve();
      let s8 = {
        ...t8,
        type: t8.refetchType ?? t8.type ?? "active"
      };
      return this.refetchQueries(s8, e8);
    });
  }
  refetchQueries(t8 = {}, e8) {
    let s8 = {
      ...e8,
      cancelRefetch: e8?.cancelRefetch ?? true
    }, r8 = f7.batch(() => this.#t.findAll(t8).filter((i9) => !i9.isDisabled()).map((i9) => {
      let a9 = i9.fetch(void 0, s8);
      return s8.throwOnError || (a9 = a9.catch(m6)), i9.state.fetchStatus === "paused" ? Promise.resolve() : a9;
    }));
    return Promise.all(r8).then(m6);
  }
  fetchQuery(t8) {
    let e8 = this.defaultQueryOptions(t8);
    e8.retry === void 0 && (e8.retry = false);
    let s8 = this.#t.build(this, e8);
    return s8.isStaleByTime(E9(e8.staleTime, s8)) ? s8.fetch(e8) : Promise.resolve(s8.state.data);
  }
  prefetchQuery(t8) {
    return this.fetchQuery(t8).then(m6).catch(m6);
  }
  fetchInfiniteQuery(t8) {
    return t8.behavior = U4(t8.pages), this.fetchQuery(t8);
  }
  prefetchInfiniteQuery(t8) {
    return this.fetchInfiniteQuery(t8).then(m6).catch(m6);
  }
  ensureInfiniteQueryData(t8) {
    return t8.behavior = U4(t8.pages), this.ensureQueryData(t8);
  }
  resumePausedMutations() {
    return x5.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return this.#t;
  }
  getMutationCache() {
    return this.#e;
  }
  getDefaultOptions() {
    return this.#r;
  }
  setDefaultOptions(t8) {
    this.#r = t8;
  }
  setQueryDefaults(t8, e8) {
    this.#s.set(Q2(t8), {
      queryKey: t8,
      defaultOptions: e8
    });
  }
  getQueryDefaults(t8) {
    let e8 = [
      ...this.#s.values()
    ], s8 = {};
    return e8.forEach((r8) => {
      A3(t8, r8.queryKey) && (s8 = {
        ...s8,
        ...r8.defaultOptions
      });
    }), s8;
  }
  setMutationDefaults(t8, e8) {
    this.#i.set(Q2(t8), {
      mutationKey: t8,
      defaultOptions: e8
    });
  }
  getMutationDefaults(t8) {
    let e8 = [
      ...this.#i.values()
    ], s8 = {};
    return e8.forEach((r8) => {
      A3(t8, r8.mutationKey) && (s8 = {
        ...s8,
        ...r8.defaultOptions
      });
    }), s8;
  }
  defaultQueryOptions(t8) {
    if (t8._defaulted) return t8;
    let e8 = {
      ...this.#r.queries,
      ...this.getQueryDefaults(t8.queryKey),
      ...t8,
      _defaulted: true
    };
    return e8.queryHash || (e8.queryHash = j6(e8.queryKey, e8)), e8.refetchOnReconnect === void 0 && (e8.refetchOnReconnect = e8.networkMode !== "always"), e8.throwOnError === void 0 && (e8.throwOnError = !!e8.suspense), !e8.networkMode && e8.persister && (e8.networkMode = "offlineFirst"), e8.enabled !== true && e8.queryFn === k7 && (e8.enabled = false), e8;
  }
  defaultMutationOptions(t8) {
    return t8?._defaulted ? t8 : {
      ...this.#r.mutations,
      ...t8?.mutationKey && this.getMutationDefaults(t8.mutationKey),
      ...t8,
      _defaulted: true
    };
  }
  clear() {
    this.#t.clear(), this.#e.clear();
  }
};

// deno:https://esm.sh/@tanstack/react-query@5.59.16/denonext/react-query.mjs
var D5 = de(void 0);
var Y5 = ({ client: e8, children: r8 }) => (Le(() => (e8.mount(), () => {
  e8.unmount();
}), [
  e8
]), q(D5.Provider, {
  value: e8,
  children: r8
}));
var U5 = de(false);
var Z3 = U5.Provider;
function L2() {
  let e8 = false;
  return {
    clearReset: () => {
      e8 = false;
    },
    reset: () => {
      e8 = true;
    },
    isReset: () => e8
  };
}
var K5 = de(L2());

// deno:https://esm.sh/@tanstack/query-devtools@5.58.0/denonext/query-devtools.mjs
var at2 = (e8, t8) => e8 === t8;
var le4 = Symbol("solid-proxy");
var Jt = Symbol("solid-track");
var W3 = {
  equals: at2
};
var Ne4 = null;
var ut2 = qe4;
var T5 = 1;
var F4 = 2;
var g4 = null;
var u5 = null;
var j7 = null;
var B3 = null;
var y5 = null;
var v8 = null;
var x6 = null;
var J3 = 0;
function b6(e8, t8) {
  t8 = t8 ? Object.assign({}, W3, t8) : W3;
  let n5 = {
    value: e8,
    observers: null,
    observerSlots: null,
    comparator: t8.equals || void 0
  }, r8 = (s8) => (typeof s8 == "function" && (u5 && u5.running && u5.sources.has(n5) ? s8 = s8(n5.tValue) : s8 = s8(n5.value)), Ue4(n5, s8));
  return [
    je3.bind(n5),
    r8
  ];
}
function R5(e8) {
  if (!B3 && y5 === null) return e8();
  let t8 = y5;
  y5 = null;
  try {
    return B3 ? B3.untrack(e8) : e8();
  } finally {
    y5 = t8;
  }
}
var [en, Pe5] = b6(false);
function je3() {
  let e8 = u5 && u5.running;
  if (this.sources && (e8 ? this.tState : this.state)) if ((e8 ? this.tState : this.state) === T5) G7(this);
  else {
    let t8 = v8;
    v8 = null, C6(() => Y6(this), false), v8 = t8;
  }
  if (y5) {
    let t8 = this.observers ? this.observers.length : 0;
    y5.sources ? (y5.sources.push(this), y5.sourceSlots.push(t8)) : (y5.sources = [
      this
    ], y5.sourceSlots = [
      t8
    ]), this.observers ? (this.observers.push(y5), this.observerSlots.push(y5.sources.length - 1)) : (this.observers = [
      y5
    ], this.observerSlots = [
      y5.sources.length - 1
    ]);
  }
  return e8 && u5.sources.has(this) ? this.tValue : this.value;
}
function Ue4(e8, t8, n5) {
  let r8 = u5 && u5.running && u5.sources.has(e8) ? e8.tValue : e8.value;
  if (!e8.comparator || !e8.comparator(r8, t8)) {
    if (u5) {
      let s8 = u5.running;
      (s8 || !n5 && u5.sources.has(e8)) && (u5.sources.add(e8), e8.tValue = t8), s8 || (e8.value = t8);
    } else e8.value = t8;
    e8.observers && e8.observers.length && C6(() => {
      for (let s8 = 0; s8 < e8.observers.length; s8 += 1) {
        let i9 = e8.observers[s8], o7 = u5 && u5.running;
        o7 && u5.disposed.has(i9) || ((o7 ? !i9.tState : !i9.state) && (i9.pure ? v8.push(i9) : x6.push(i9), i9.observers && Fe2(i9)), o7 ? i9.tState = T5 : i9.state = T5);
      }
      if (v8.length > 1e6) throw v8 = [], new Error();
    }, false);
  }
  return t8;
}
function G7(e8) {
  if (!e8.fn) return;
  I3(e8);
  let t8 = J3;
  Re4(e8, u5 && u5.running && u5.sources.has(e8) ? e8.tValue : e8.value, t8), u5 && !u5.running && u5.sources.has(e8) && queueMicrotask(() => {
    C6(() => {
      u5 && (u5.running = true), y5 = g4 = e8, Re4(e8, e8.tValue, t8), y5 = g4 = null;
    }, false);
  });
}
function Re4(e8, t8, n5) {
  let r8, s8 = g4, i9 = y5;
  y5 = g4 = e8;
  try {
    r8 = e8.fn(t8);
  } catch (o7) {
    return e8.pure && (u5 && u5.running ? (e8.tState = T5, e8.tOwned && e8.tOwned.forEach(I3), e8.tOwned = void 0) : (e8.state = T5, e8.owned && e8.owned.forEach(I3), e8.owned = null)), e8.updatedAt = n5 + 1, ve5(o7);
  } finally {
    y5 = i9, g4 = s8;
  }
  (!e8.updatedAt || e8.updatedAt <= n5) && (e8.updatedAt != null && "observers" in e8 ? Ue4(e8, r8, true) : u5 && u5.running && e8.pure ? (u5.sources.add(e8), e8.tValue = r8) : e8.value = r8, e8.updatedAt = n5);
}
function we4(e8) {
  let t8 = u5 && u5.running;
  if ((t8 ? e8.tState : e8.state) === 0) return;
  if ((t8 ? e8.tState : e8.state) === F4) return Y6(e8);
  if (e8.suspense && R5(e8.suspense.inFallback)) return e8.suspense.effects.push(e8);
  let n5 = [
    e8
  ];
  for (; (e8 = e8.owner) && (!e8.updatedAt || e8.updatedAt < J3); ) {
    if (t8 && u5.disposed.has(e8)) return;
    (t8 ? e8.tState : e8.state) && n5.push(e8);
  }
  for (let r8 = n5.length - 1; r8 >= 0; r8--) {
    if (e8 = n5[r8], t8) {
      let s8 = e8, i9 = n5[r8 + 1];
      for (; (s8 = s8.owner) && s8 !== i9; ) if (u5.disposed.has(s8)) return;
    }
    if ((t8 ? e8.tState : e8.state) === T5) G7(e8);
    else if ((t8 ? e8.tState : e8.state) === F4) {
      let s8 = v8;
      v8 = null, C6(() => Y6(e8, n5[0]), false), v8 = s8;
    }
  }
}
function C6(e8, t8) {
  if (v8) return e8();
  let n5 = false;
  t8 || (v8 = []), x6 ? n5 = true : x6 = [], J3++;
  try {
    let r8 = e8();
    return mt2(n5), r8;
  } catch (r8) {
    n5 || (x6 = null), v8 = null, ve5(r8);
  }
}
function mt2(e8) {
  if (v8 && (j7 && u5 && u5.running ? pt2(v8) : qe4(v8), v8 = null), e8) return;
  let t8;
  if (u5) {
    if (!u5.promises.size && !u5.queue.size) {
      let r8 = u5.sources, s8 = u5.disposed;
      x6.push.apply(x6, u5.effects), t8 = u5.resolve;
      for (let i9 of x6) "tState" in i9 && (i9.state = i9.tState), delete i9.tState;
      u5 = null, C6(() => {
        for (let i9 of s8) I3(i9);
        for (let i9 of r8) {
          if (i9.value = i9.tValue, i9.owned) for (let o7 = 0, l9 = i9.owned.length; o7 < l9; o7++) I3(i9.owned[o7]);
          i9.tOwned && (i9.owned = i9.tOwned), delete i9.tValue, delete i9.tOwned, i9.tState = 0;
        }
        Pe5(false);
      }, false);
    } else if (u5.running) {
      u5.running = false, u5.effects.push.apply(u5.effects, x6), x6 = null, Pe5(true);
      return;
    }
  }
  let n5 = x6;
  x6 = null, n5.length && C6(() => ut2(n5), false), t8 && t8();
}
function qe4(e8) {
  for (let t8 = 0; t8 < e8.length; t8++) we4(e8[t8]);
}
function pt2(e8) {
  for (let t8 = 0; t8 < e8.length; t8++) {
    let n5 = e8[t8], r8 = u5.queue;
    r8.has(n5) || (r8.add(n5), j7(() => {
      r8.delete(n5), C6(() => {
        u5.running = true, we4(n5);
      }, false), u5 && (u5.running = false);
    }));
  }
}
function Y6(e8, t8) {
  let n5 = u5 && u5.running;
  n5 ? e8.tState = 0 : e8.state = 0;
  for (let r8 = 0; r8 < e8.sources.length; r8 += 1) {
    let s8 = e8.sources[r8];
    if (s8.sources) {
      let i9 = n5 ? s8.tState : s8.state;
      i9 === T5 ? s8 !== t8 && (!s8.updatedAt || s8.updatedAt < J3) && we4(s8) : i9 === F4 && Y6(s8, t8);
    }
  }
}
function Fe2(e8) {
  let t8 = u5 && u5.running;
  for (let n5 = 0; n5 < e8.observers.length; n5 += 1) {
    let r8 = e8.observers[n5];
    (t8 ? !r8.tState : !r8.state) && (t8 ? r8.tState = F4 : r8.state = F4, r8.pure ? v8.push(r8) : x6.push(r8), r8.observers && Fe2(r8));
  }
}
function I3(e8) {
  let t8;
  if (e8.sources) for (; e8.sources.length; ) {
    let n5 = e8.sources.pop(), r8 = e8.sourceSlots.pop(), s8 = n5.observers;
    if (s8 && s8.length) {
      let i9 = s8.pop(), o7 = n5.observerSlots.pop();
      r8 < s8.length && (i9.sourceSlots[o7] = r8, s8[r8] = i9, n5.observerSlots[r8] = o7);
    }
  }
  if (u5 && u5.running && e8.pure) {
    if (e8.tOwned) {
      for (t8 = e8.tOwned.length - 1; t8 >= 0; t8--) I3(e8.tOwned[t8]);
      delete e8.tOwned;
    }
    Ke4(e8, true);
  } else if (e8.owned) {
    for (t8 = e8.owned.length - 1; t8 >= 0; t8--) I3(e8.owned[t8]);
    e8.owned = null;
  }
  if (e8.cleanups) {
    for (t8 = e8.cleanups.length - 1; t8 >= 0; t8--) e8.cleanups[t8]();
    e8.cleanups = null;
  }
  u5 && u5.running ? e8.tState = 0 : e8.state = 0;
}
function Ke4(e8, t8) {
  if (t8 || (e8.tState = 0, u5.disposed.add(e8)), e8.owned) for (let n5 = 0; n5 < e8.owned.length; n5++) Ke4(e8.owned[n5]);
}
function fe3(e8) {
  return e8 instanceof Error ? e8 : new Error(typeof e8 == "string" ? e8 : "Unknown error", {
    cause: e8
  });
}
function Me4(e8, t8, n5) {
  try {
    for (let r8 of t8) r8(e8);
  } catch (r8) {
    ve5(r8, n5 && n5.owner || null);
  }
}
function ve5(e8, t8 = g4) {
  let n5 = Ne4 && t8 && t8.context && t8.context[Ne4], r8 = fe3(e8);
  if (!n5) throw r8;
  x6 ? x6.push({
    fn() {
      Me4(r8, n5, t8);
    },
    state: T5
  }) : Me4(r8, n5, t8);
}
var tn = Symbol("fallback");
var St = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
];
var nn = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...St
]);
var Ot = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e8, t8) {
    this.keyToValue.set(e8, t8), this.valueToKey.set(t8, e8);
  }
  getByKey(e8) {
    return this.keyToValue.get(e8);
  }
  getByValue(e8) {
    return this.valueToKey.get(e8);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
};
var ze4 = class {
  constructor(e8) {
    this.generateIdentifier = e8, this.kv = new Ot();
  }
  register(e8, t8) {
    this.kv.getByValue(e8) || (t8 || (t8 = this.generateIdentifier(e8)), this.kv.set(t8, e8));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e8) {
    return this.kv.getByValue(e8);
  }
  getValue(e8) {
    return this.kv.getByKey(e8);
  }
};
var xt2 = class extends ze4 {
  constructor() {
    super((e8) => e8.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e8, t8) {
    typeof t8 == "object" ? (t8.allowProps && this.classToAllowedProps.set(e8, t8.allowProps), super.register(e8, t8.identifier)) : super.register(e8, t8);
  }
  getAllowedProps(e8) {
    return this.classToAllowedProps.get(e8);
  }
};
function Ct(e8) {
  if ("values" in Object) return Object.values(e8);
  let t8 = [];
  for (let n5 in e8) e8.hasOwnProperty(n5) && t8.push(e8[n5]);
  return t8;
}
function Tt2(e8, t8) {
  let n5 = Ct(e8);
  if ("find" in n5) return n5.find(t8);
  let r8 = n5;
  for (let s8 = 0; s8 < r8.length; s8++) {
    let i9 = r8[s8];
    if (t8(i9)) return i9;
  }
}
function _5(e8, t8) {
  Object.entries(e8).forEach(([n5, r8]) => t8(r8, n5));
}
function X3(e8, t8) {
  return e8.indexOf(t8) !== -1;
}
function Le4(e8, t8) {
  for (let n5 = 0; n5 < e8.length; n5++) {
    let r8 = e8[n5];
    if (t8(r8)) return r8;
  }
}
var kt = class {
  constructor() {
    this.transfomers = {};
  }
  register(e8) {
    this.transfomers[e8.name] = e8;
  }
  findApplicable(e8) {
    return Tt2(this.transfomers, (t8) => t8.isApplicable(e8));
  }
  findByName(e8) {
    return this.transfomers[e8];
  }
};
var Nt = (e8) => Object.prototype.toString.call(e8).slice(8, -1);
var He4 = (e8) => typeof e8 > "u";
var It = (e8) => e8 === null;
var K6 = (e8) => typeof e8 != "object" || e8 === null || e8 === Object.prototype ? false : Object.getPrototypeOf(e8) === null ? true : Object.getPrototypeOf(e8) === Object.prototype;
var de5 = (e8) => K6(e8) && Object.keys(e8).length === 0;
var P3 = (e8) => Array.isArray(e8);
var Pt = (e8) => typeof e8 == "string";
var Rt = (e8) => typeof e8 == "number" && !isNaN(e8);
var Mt = (e8) => typeof e8 == "boolean";
var Vt = (e8) => e8 instanceof RegExp;
var z6 = (e8) => e8 instanceof Map;
var H3 = (e8) => e8 instanceof Set;
var Ge5 = (e8) => Nt(e8) === "Symbol";
var Lt = (e8) => e8 instanceof Date && !isNaN(e8.valueOf());
var Dt2 = (e8) => e8 instanceof Error;
var De4 = (e8) => typeof e8 == "number" && isNaN(e8);
var $t = (e8) => Mt(e8) || It(e8) || He4(e8) || Rt(e8) || Pt(e8) || Ge5(e8);
var Bt = (e8) => typeof e8 == "bigint";
var _t = (e8) => e8 === 1 / 0 || e8 === -1 / 0;
var jt2 = (e8) => ArrayBuffer.isView(e8) && !(e8 instanceof DataView);
var Ut2 = (e8) => e8 instanceof URL;
var Qe4 = (e8) => e8.replace(/\./g, "\\.");
var oe3 = (e8) => e8.map(String).map(Qe4).join(".");
var q6 = (e8) => {
  let t8 = [], n5 = "";
  for (let s8 = 0; s8 < e8.length; s8++) {
    let i9 = e8.charAt(s8);
    if (i9 === "\\" && e8.charAt(s8 + 1) === ".") {
      n5 += ".", s8++;
      continue;
    }
    if (i9 === ".") {
      t8.push(n5), n5 = "";
      continue;
    }
    n5 += i9;
  }
  let r8 = n5;
  return t8.push(r8), t8;
};
function k8(e8, t8, n5, r8) {
  return {
    isApplicable: e8,
    annotation: t8,
    transform: n5,
    untransform: r8
  };
}
var Xe3 = [
  k8(He4, "undefined", () => null, () => {
  }),
  k8(Bt, "bigint", (e8) => e8.toString(), (e8) => typeof BigInt < "u" ? BigInt(e8) : e8),
  k8(Lt, "Date", (e8) => e8.toISOString(), (e8) => new Date(e8)),
  k8(Dt2, "Error", (e8, t8) => {
    let n5 = {
      name: e8.name,
      message: e8.message
    };
    return t8.allowedErrorProps.forEach((r8) => {
      n5[r8] = e8[r8];
    }), n5;
  }, (e8, t8) => {
    let n5 = new Error(e8.message);
    return n5.name = e8.name, n5.stack = e8.stack, t8.allowedErrorProps.forEach((r8) => {
      n5[r8] = e8[r8];
    }), n5;
  }),
  k8(Vt, "regexp", (e8) => "" + e8, (e8) => {
    let t8 = e8.slice(1, e8.lastIndexOf("/")), n5 = e8.slice(e8.lastIndexOf("/") + 1);
    return new RegExp(t8, n5);
  }),
  k8(H3, "set", (e8) => [
    ...e8.values()
  ], (e8) => new Set(e8)),
  k8(z6, "map", (e8) => [
    ...e8.entries()
  ], (e8) => new Map(e8)),
  k8((e8) => De4(e8) || _t(e8), "number", (e8) => De4(e8) ? "NaN" : e8 > 0 ? "Infinity" : "-Infinity", Number),
  k8((e8) => e8 === 0 && 1 / e8 === -1 / 0, "number", () => "-0", Number),
  k8(Ut2, "URL", (e8) => e8.toString(), (e8) => new URL(e8))
];
function ee2(e8, t8, n5, r8) {
  return {
    isApplicable: e8,
    annotation: t8,
    transform: n5,
    untransform: r8
  };
}
var We4 = ee2((e8, t8) => Ge5(e8) ? !!t8.symbolRegistry.getIdentifier(e8) : false, (e8, t8) => [
  "symbol",
  t8.symbolRegistry.getIdentifier(e8)
], (e8) => e8.description, (e8, t8, n5) => {
  let r8 = n5.symbolRegistry.getValue(t8[1]);
  if (!r8) throw new Error("Trying to deserialize unknown symbol");
  return r8;
});
var qt2 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e8, t8) => (e8[t8.name] = t8, e8), {});
var Ye4 = ee2(jt2, (e8) => [
  "typed-array",
  e8.constructor.name
], (e8) => [
  ...e8
], (e8, t8) => {
  let n5 = qt2[t8[1]];
  if (!n5) throw new Error("Trying to deserialize unknown typed array");
  return new n5(e8);
});
function Ze2(e8, t8) {
  return e8?.constructor ? !!t8.classRegistry.getIdentifier(e8.constructor) : false;
}
var Je2 = ee2(Ze2, (e8, t8) => [
  "class",
  t8.classRegistry.getIdentifier(e8.constructor)
], (e8, t8) => {
  let n5 = t8.classRegistry.getAllowedProps(e8.constructor);
  if (!n5) return {
    ...e8
  };
  let r8 = {};
  return n5.forEach((s8) => {
    r8[s8] = e8[s8];
  }), r8;
}, (e8, t8, n5) => {
  let r8 = n5.classRegistry.getValue(t8[1]);
  if (!r8) throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(r8.prototype), e8);
});
var et2 = ee2((e8, t8) => !!t8.customTransformerRegistry.findApplicable(e8), (e8, t8) => [
  "custom",
  t8.customTransformerRegistry.findApplicable(e8).name
], (e8, t8) => t8.customTransformerRegistry.findApplicable(e8).serialize(e8), (e8, t8, n5) => {
  let r8 = n5.customTransformerRegistry.findByName(t8[1]);
  if (!r8) throw new Error("Trying to deserialize unknown custom value");
  return r8.deserialize(e8);
});
var Ft2 = [
  Je2,
  We4,
  et2,
  Ye4
];
var $e4 = (e8, t8) => {
  let n5 = Le4(Ft2, (s8) => s8.isApplicable(e8, t8));
  if (n5) return {
    value: n5.transform(e8, t8),
    type: n5.annotation(e8, t8)
  };
  let r8 = Le4(Xe3, (s8) => s8.isApplicable(e8, t8));
  if (r8) return {
    value: r8.transform(e8, t8),
    type: r8.annotation
  };
};
var tt2 = {};
Xe3.forEach((e8) => {
  tt2[e8.annotation] = e8;
});
var Kt2 = (e8, t8, n5) => {
  if (P3(t8)) switch (t8[0]) {
    case "symbol":
      return We4.untransform(e8, t8, n5);
    case "class":
      return Je2.untransform(e8, t8, n5);
    case "custom":
      return et2.untransform(e8, t8, n5);
    case "typed-array":
      return Ye4.untransform(e8, t8, n5);
    default:
      throw new Error("Unknown transformation: " + t8);
  }
  else {
    let r8 = tt2[t8];
    if (!r8) throw new Error("Unknown transformation: " + t8);
    return r8.untransform(e8, n5);
  }
};
var $4 = (e8, t8) => {
  let n5 = e8.keys();
  for (; t8 > 0; ) n5.next(), t8--;
  return n5.next().value;
};
function nt2(e8) {
  if (X3(e8, "__proto__")) throw new Error("__proto__ is not allowed as a property");
  if (X3(e8, "prototype")) throw new Error("prototype is not allowed as a property");
  if (X3(e8, "constructor")) throw new Error("constructor is not allowed as a property");
}
var zt2 = (e8, t8) => {
  nt2(t8);
  for (let n5 = 0; n5 < t8.length; n5++) {
    let r8 = t8[n5];
    if (H3(e8)) e8 = $4(e8, +r8);
    else if (z6(e8)) {
      let s8 = +r8, i9 = +t8[++n5] == 0 ? "key" : "value", o7 = $4(e8, s8);
      switch (i9) {
        case "key":
          e8 = o7;
          break;
        case "value":
          e8 = e8.get(o7);
          break;
      }
    } else e8 = e8[r8];
  }
  return e8;
};
var he3 = (e8, t8, n5) => {
  if (nt2(t8), t8.length === 0) return n5(e8);
  let r8 = e8;
  for (let i9 = 0; i9 < t8.length - 1; i9++) {
    let o7 = t8[i9];
    if (P3(r8)) {
      let l9 = +o7;
      r8 = r8[l9];
    } else if (K6(r8)) r8 = r8[o7];
    else if (H3(r8)) {
      let l9 = +o7;
      r8 = $4(r8, l9);
    } else if (z6(r8)) {
      if (i9 === t8.length - 2) break;
      let a9 = +o7, c6 = +t8[++i9] == 0 ? "key" : "value", f11 = $4(r8, a9);
      switch (c6) {
        case "key":
          r8 = f11;
          break;
        case "value":
          r8 = r8.get(f11);
          break;
      }
    }
  }
  let s8 = t8[t8.length - 1];
  if (P3(r8) ? r8[+s8] = n5(r8[+s8]) : K6(r8) && (r8[s8] = n5(r8[s8])), H3(r8)) {
    let i9 = $4(r8, +s8), o7 = n5(i9);
    i9 !== o7 && (r8.delete(i9), r8.add(o7));
  }
  if (z6(r8)) {
    let i9 = +t8[t8.length - 2], o7 = $4(r8, i9);
    switch (+s8 == 0 ? "key" : "value") {
      case "key": {
        let a9 = n5(o7);
        r8.set(a9, r8.get(o7)), a9 !== o7 && r8.delete(o7);
        break;
      }
      case "value": {
        r8.set(o7, n5(r8.get(o7)));
        break;
      }
    }
  }
  return e8;
};
function ge3(e8, t8, n5 = []) {
  if (!e8) return;
  if (!P3(e8)) {
    _5(e8, (i9, o7) => ge3(i9, t8, [
      ...n5,
      ...q6(o7)
    ]));
    return;
  }
  let [r8, s8] = e8;
  s8 && _5(s8, (i9, o7) => {
    ge3(i9, t8, [
      ...n5,
      ...q6(o7)
    ]);
  }), t8(r8, n5);
}
function Ht(e8, t8, n5) {
  return ge3(t8, (r8, s8) => {
    e8 = he3(e8, s8, (i9) => Kt2(i9, r8, n5));
  }), e8;
}
function Gt(e8, t8) {
  function n5(r8, s8) {
    let i9 = zt2(e8, q6(s8));
    r8.map(q6).forEach((o7) => {
      e8 = he3(e8, o7, () => i9);
    });
  }
  if (P3(t8)) {
    let [r8, s8] = t8;
    r8.forEach((i9) => {
      e8 = he3(e8, q6(i9), () => e8);
    }), s8 && _5(s8, n5);
  } else _5(t8, n5);
  return e8;
}
var Qt = (e8, t8) => K6(e8) || P3(e8) || z6(e8) || H3(e8) || Ze2(e8, t8);
function Xt(e8, t8, n5) {
  let r8 = n5.get(e8);
  r8 ? r8.push(t8) : n5.set(e8, [
    t8
  ]);
}
function Wt(e8, t8) {
  let n5 = {}, r8;
  return e8.forEach((s8) => {
    if (s8.length <= 1) return;
    t8 || (s8 = s8.map((l9) => l9.map(String)).sort((l9, a9) => l9.length - a9.length));
    let [i9, ...o7] = s8;
    i9.length === 0 ? r8 = o7.map(oe3) : n5[oe3(i9)] = o7.map(oe3);
  }), r8 ? de5(n5) ? [
    r8
  ] : [
    r8,
    n5
  ] : de5(n5) ? void 0 : n5;
}
var rt2 = (e8, t8, n5, r8, s8 = [], i9 = [], o7 = /* @__PURE__ */ new Map()) => {
  let l9 = $t(e8);
  if (!l9) {
    Xt(e8, s8, t8);
    let E11 = o7.get(e8);
    if (E11) return r8 ? {
      transformedValue: null
    } : E11;
  }
  if (!Qt(e8, n5)) {
    let E11 = $e4(e8, n5), S11 = E11 ? {
      transformedValue: E11.value,
      annotations: [
        E11.type
      ]
    } : {
      transformedValue: e8
    };
    return l9 || o7.set(e8, S11), S11;
  }
  if (X3(i9, e8)) return {
    transformedValue: null
  };
  let a9 = $e4(e8, n5), c6 = a9?.value ?? e8, f11 = P3(c6) ? [] : {}, d8 = {};
  _5(c6, (E11, S11) => {
    if (S11 === "__proto__" || S11 === "constructor" || S11 === "prototype") throw new Error(`Detected property ${S11}. This is a prototype pollution risk, please remove it from your object.`);
    let N4 = rt2(E11, t8, n5, r8, [
      ...s8,
      S11
    ], [
      ...i9,
      e8
    ], o7);
    f11[S11] = N4.transformedValue, P3(N4.annotations) ? d8[S11] = N4.annotations : K6(N4.annotations) && _5(N4.annotations, (U9, te2) => {
      d8[Qe4(S11) + "." + te2] = U9;
    });
  });
  let O6 = de5(d8) ? {
    transformedValue: f11,
    annotations: a9 ? [
      a9.type
    ] : void 0
  } : {
    transformedValue: f11,
    annotations: a9 ? [
      a9.type,
      d8
    ] : d8
  };
  return l9 || o7.set(e8, O6), O6;
};
function st2(e8) {
  return Object.prototype.toString.call(e8).slice(8, -1);
}
function Be4(e8) {
  return st2(e8) === "Array";
}
function Yt(e8) {
  if (st2(e8) !== "Object") return false;
  let t8 = Object.getPrototypeOf(e8);
  return !!t8 && t8.constructor === Object && t8 === Object.prototype;
}
function Zt(e8, t8, n5, r8, s8) {
  let i9 = {}.propertyIsEnumerable.call(r8, t8) ? "enumerable" : "nonenumerable";
  i9 === "enumerable" && (e8[t8] = n5), s8 && i9 === "nonenumerable" && Object.defineProperty(e8, t8, {
    value: n5,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
function ye5(e8, t8 = {}) {
  if (Be4(e8)) return e8.map((s8) => ye5(s8, t8));
  if (!Yt(e8)) return e8;
  let n5 = Object.getOwnPropertyNames(e8), r8 = Object.getOwnPropertySymbols(e8);
  return [
    ...n5,
    ...r8
  ].reduce((s8, i9) => {
    if (Be4(t8.props) && !t8.props.includes(i9)) return s8;
    let o7 = e8[i9], l9 = ye5(o7, t8);
    return Zt(s8, i9, l9, e8, t8.nonenumerable), s8;
  }, {});
}
var h5 = class {
  constructor({ dedupe: e8 = false } = {}) {
    this.classRegistry = new xt2(), this.symbolRegistry = new ze4((t8) => t8.description ?? ""), this.customTransformerRegistry = new kt(), this.allowedErrorProps = [], this.dedupe = e8;
  }
  serialize(e8) {
    let t8 = /* @__PURE__ */ new Map(), n5 = rt2(e8, t8, this, this.dedupe), r8 = {
      json: n5.transformedValue
    };
    n5.annotations && (r8.meta = {
      ...r8.meta,
      values: n5.annotations
    });
    let s8 = Wt(t8, this.dedupe);
    return s8 && (r8.meta = {
      ...r8.meta,
      referentialEqualities: s8
    }), r8;
  }
  deserialize(e8) {
    let { json: t8, meta: n5 } = e8, r8 = ye5(t8);
    return n5?.values && (r8 = Ht(r8, n5.values, this)), n5?.referentialEqualities && (r8 = Gt(r8, n5.referentialEqualities)), r8;
  }
  stringify(e8) {
    return JSON.stringify(this.serialize(e8));
  }
  parse(e8) {
    return this.deserialize(JSON.parse(e8));
  }
  registerClass(e8, t8) {
    this.classRegistry.register(e8, t8);
  }
  registerSymbol(e8, t8) {
    this.symbolRegistry.register(e8, t8);
  }
  registerCustom(e8, t8) {
    this.customTransformerRegistry.register({
      name: t8,
      ...e8
    });
  }
  allowErrorProps(...e8) {
    this.allowedErrorProps.push(...e8);
  }
};
h5.defaultInstance = new h5();
h5.serialize = h5.defaultInstance.serialize.bind(h5.defaultInstance);
h5.deserialize = h5.defaultInstance.deserialize.bind(h5.defaultInstance);
h5.stringify = h5.defaultInstance.stringify.bind(h5.defaultInstance);
h5.parse = h5.defaultInstance.parse.bind(h5.defaultInstance);
h5.registerClass = h5.defaultInstance.registerClass.bind(h5.defaultInstance);
h5.registerSymbol = h5.defaultInstance.registerSymbol.bind(h5.defaultInstance);
h5.registerCustom = h5.defaultInstance.registerCustom.bind(h5.defaultInstance);
h5.allowErrorProps = h5.defaultInstance.allowErrorProps.bind(h5.defaultInstance);
var rn = h5.serialize;
h5.deserialize;
var sn = h5.stringify;
h5.parse;
h5.registerClass;
h5.registerCustom;
h5.registerSymbol;
h5.allowErrorProps;

// deno:https://esm.sh/@tanstack/query-core@5.83.1/denonext/query-core.mjs
var O4 = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t8) {
    return this.listeners.add(t8), this.onSubscribe(), () => {
      this.listeners.delete(t8), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var R6 = typeof globalThis > "u" || "Deno" in globalThis;
var U6 = Symbol();
var qt3 = class extends O4 {
  #e;
  #t;
  #s;
  constructor() {
    super(), this.#s = (t8) => {
      if (!R6 && globalThis.addEventListener) {
        let e8 = () => t8();
        return globalThis.addEventListener("visibilitychange", e8, false), () => {
          globalThis.removeEventListener("visibilitychange", e8);
        };
      }
    };
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#s);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), this.#t = void 0);
  }
  setEventListener(t8) {
    this.#s = t8, this.#t?.(), this.#t = t8((e8) => {
      typeof e8 == "boolean" ? this.setFocused(e8) : this.onFocus();
    });
  }
  setFocused(t8) {
    this.#e !== t8 && (this.#e = t8, this.onFocus());
  }
  onFocus() {
    let t8 = this.isFocused();
    this.listeners.forEach((e8) => {
      e8(t8);
    });
  }
  isFocused() {
    return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
  }
};
var q7 = new qt3();
var xt3 = class extends O4 {
  #e = true;
  #t;
  #s;
  constructor() {
    super(), this.#s = (t8) => {
      if (!R6 && globalThis.addEventListener) {
        let e8 = () => t8(true), s8 = () => t8(false);
        return globalThis.addEventListener("online", e8, false), globalThis.addEventListener("offline", s8, false), () => {
          globalThis.removeEventListener("online", e8), globalThis.removeEventListener("offline", s8);
        };
      }
    };
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#s);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), this.#t = void 0);
  }
  setEventListener(t8) {
    this.#s = t8, this.#t?.(), this.#t = t8(this.setOnline.bind(this));
  }
  setOnline(t8) {
    this.#e !== t8 && (this.#e = t8, this.listeners.forEach((s8) => {
      s8(t8);
    }));
  }
  isOnline() {
    return this.#e;
  }
};
var x7 = new xt3();
var Ot2 = (t8) => setTimeout(t8, 0);
function kt2() {
  let t8 = [], e8 = 0, s8 = (a9) => {
    a9();
  }, r8 = (a9) => {
    a9();
  }, i9 = Ot2, o7 = (a9) => {
    e8 ? t8.push(a9) : i9(() => {
      s8(a9);
    });
  }, u10 = () => {
    let a9 = t8;
    t8 = [], a9.length && i9(() => {
      r8(() => {
        a9.forEach((n5) => {
          s8(n5);
        });
      });
    });
  };
  return {
    batch: (a9) => {
      let n5;
      e8++;
      try {
        n5 = a9();
      } finally {
        e8--, e8 || u10();
      }
      return n5;
    },
    batchCalls: (a9) => (...n5) => {
      o7(() => {
        a9(...n5);
      });
    },
    schedule: o7,
    setNotifyFunction: (a9) => {
      s8 = a9;
    },
    setBatchNotifyFunction: (a9) => {
      r8 = a9;
    },
    setScheduler: (a9) => {
      i9 = a9;
    }
  };
}
var d4 = kt2();
var Cs = Symbol("dataTagSymbol");
var Es = Symbol("dataTagErrorSymbol");
var Ds = Symbol("unsetMarker");

// deno:https://esm.sh/@tanstack/react-query@5.84.1/denonext/react-query.mjs
var A4 = de(void 0);
var V6 = de(false);
var Y7 = V6.Provider;
function L4() {
  let e8 = false;
  return {
    clearReset: () => {
      e8 = false;
    },
    reset: () => {
      e8 = true;
    },
    isReset: () => e8
  };
}
var U7 = de(L4());

// deno:https://esm.sh/@tanstack/react-query-devtools@5.59.16/denonext/react-query-devtools.mjs
var C7 = function() {
  return null;
};

// components/providers/query-provider.tsx
function QueryProvider({ children }) {
  const [queryClient] = Qe.useState(() => new Tt());
  return /* @__PURE__ */ C(Y5, {
    client: queryClient,
    children: [
      children,
      globalThis.DEV && /* @__PURE__ */ q(C7, {
        initialIsOpen: false
      })
    ]
  });
}

// router.tsx
function router_default({ ssrPath, ssrSearch, lang }) {
  return /* @__PURE__ */ q(QueryProvider, {
    children: /* @__PURE__ */ q(I18nProvider, {
      lang,
      children: /* @__PURE__ */ q(W, {
        ssrPath,
        ssrSearch,
        base: baseURL,
        children: /* @__PURE__ */ q(MyPage, {})
      })
    })
  });
}

// deno:https://esm.sh/@twind/core@1.1.3/denonext/core.mjs
var B5;
function ae5(e8) {
  return [
    ...e8.v,
    (e8.i ? "!" : "") + e8.n
  ].join(":");
}
function ue2(e8, t8 = ",") {
  return e8.map(ae5).join(t8);
}
var Y8 = typeof CSS < "u" && CSS.escape || ((e8) => e8.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T6(e8) {
  for (var t8 = 9, r8 = e8.length; r8--; ) t8 = Math.imul(t8 ^ e8.charCodeAt(r8), 1597334677);
  return "#" + ((t8 ^ t8 >>> 9) >>> 0).toString(36);
}
function Ce4(e8, t8 = "@media ") {
  return t8 + b7(e8).map((r8) => (typeof r8 == "string" && (r8 = {
    min: r8
  }), r8.raw || Object.keys(r8).map((i9) => `(${i9}-width:${r8[i9]})`).join(" and "))).join(",");
}
function b7(e8 = []) {
  return Array.isArray(e8) ? e8 : e8 == null ? [] : [
    e8
  ];
}
function te(e8) {
  return e8;
}
function F5() {
}
var S8 = {
  d: 0,
  b: 134217728,
  c: 268435456,
  a: 671088640,
  u: 805306368,
  o: 939524096
};
function Ee4(e8) {
  return e8.match(/[-=:;]/g)?.length || 0;
}
function re2(e8) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e8) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee4(e8), 15) << 18;
}
var Ue5 = [
  "rst-c",
  "st-ch",
  "h-chi",
  "y-lin",
  "nk",
  "sited",
  "ecked",
  "pty",
  "ad-on",
  "cus-w",
  "ver",
  "cus",
  "cus-v",
  "tive",
  "sable",
  "tiona",
  "quire"
];
function ce5({ n: e8, i: t8, v: r8 = [] }, i9, n5, l9) {
  e8 && (e8 = ae5({
    n: e8,
    i: t8,
    v: r8
  })), l9 = [
    ...b7(l9)
  ];
  for (let s8 of r8) {
    let f11 = i9.theme("screens", s8);
    for (let a9 of b7(f11 && Ce4(f11) || i9.v(s8))) {
      var o7;
      l9.push(a9), n5 |= f11 ? 67108864 | re2(a9) : s8 == "dark" ? 1073741824 : a9[0] == "@" ? re2(a9) : (o7 = a9, 1 << ~(/:([a-z-]+)/.test(o7) && ~Ue5.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return {
    n: e8,
    p: n5,
    r: l9,
    i: t8
  };
}
var pe4 = /* @__PURE__ */ new Map();
function ne3(e8) {
  if (e8.d) {
    let t8 = [], r8 = H4(e8.r.reduce((i9, n5) => n5[0] == "@" ? (t8.push(n5), i9) : n5 ? H4(i9, (l9) => H4(n5, (o7) => {
      let s8 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o7);
      if (s8) {
        let f11 = l9.indexOf(s8[1]);
        return ~f11 ? l9.slice(0, f11) + s8[0] + l9.slice(f11 + s8[1].length) : Q3(l9, o7);
      }
      return Q3(o7, l9);
    })) : i9, "&"), (i9) => Q3(i9, e8.n ? "." + Y8(e8.n) : ""));
    return r8 && t8.push(r8.replace(/:merge\((.+?)\)/g, "$1")), t8.reduceRight((i9, n5) => n5 + "{" + i9 + "}", e8.d);
  }
}
function H4(e8, t8) {
  return e8.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r8, i9, n5) => t8(i9) + n5);
}
function Q3(e8, t8) {
  return e8.replace(/&/g, t8);
}
var $e5 = new Intl.Collator("en", {
  numeric: true
});
function Me5(e8, t8) {
  for (var r8 = 0, i9 = e8.length; r8 < i9; ) {
    let n5 = i9 + r8 >> 1;
    0 >= Ne5(e8[n5], t8) ? r8 = n5 + 1 : i9 = n5;
  }
  return i9;
}
function Ne5(e8, t8) {
  let r8 = e8.p & S8.o;
  return r8 == (t8.p & S8.o) && (r8 == S8.b || r8 == S8.o) ? 0 : e8.p - t8.p || e8.o - t8.o || $e5.compare(we5(e8.n), we5(t8.n)) || $e5.compare(Ae4(e8.n), Ae4(t8.n));
}
function we5(e8) {
  return (e8 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae4(e8) {
  return (e8 || "").replace(/\W/g, (t8) => String.fromCharCode(127 + t8.charCodeAt(0))) + "\0";
}
function X4(e8, t8) {
  return Math.round(parseInt(e8, 16) * t8);
}
function P4(e8, t8 = {}) {
  if (typeof e8 == "function") return e8(t8);
  let { opacityValue: r8 = "1", opacityVariable: i9 } = t8, n5 = i9 ? `var(${i9})` : r8;
  if (e8.includes("<alpha-value>")) return e8.replace("<alpha-value>", n5);
  if (e8[0] == "#" && (e8.length == 4 || e8.length == 7)) {
    let l9 = (e8.length - 1) / 3, o7 = [
      17,
      1,
      0.062272
    ][l9 - 1];
    return `rgba(${[
      X4(e8.substr(1, l9), o7),
      X4(e8.substr(1 + l9, l9), o7),
      X4(e8.substr(1 + 2 * l9, l9), o7),
      n5
    ]})`;
  }
  return n5 == "1" ? e8 : n5 == "0" ? "#0000" : e8.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n5})`);
}
function de6(e8, t8, r8, i9, n5 = []) {
  return function l9(o7, { n: s8, p: f11, r: a9 = [], i: c6 }, u10) {
    let p9 = [], g9 = "", y10 = 0, $7 = 0;
    for (let h10 in o7 || {}) {
      var A6, R8;
      let d8 = o7[h10];
      if (h10[0] == "@") {
        if (!d8) continue;
        if (h10[1] == "a") {
          p9.push(...ge4(s8, f11, I4("" + d8), u10, f11, a9, c6, true));
          continue;
        }
        if (h10[1] == "l") {
          for (let w5 of b7(d8)) p9.push(...l9(w5, {
            n: s8,
            p: (A6 = S8[h10[7]], f11 & ~S8.o | A6),
            r: h10[7] == "d" ? [] : a9,
            i: c6
          }, u10));
          continue;
        }
        if (h10[1] == "i") {
          p9.push(...b7(d8).map((w5) => ({
            p: -1,
            o: 0,
            r: [],
            d: h10 + " " + w5
          })));
          continue;
        }
        if (h10[1] == "k") {
          p9.push({
            p: S8.d,
            o: 0,
            r: [
              h10
            ],
            d: l9(d8, {
              p: S8.d
            }, u10).map(ne3).join("")
          });
          continue;
        }
        if (h10[1] == "f") {
          p9.push(...b7(d8).map((w5) => ({
            p: S8.d,
            o: 0,
            r: [
              h10
            ],
            d: l9(w5, {
              p: S8.d
            }, u10).map(ne3).join("")
          })));
          continue;
        }
      }
      if (typeof d8 != "object" || Array.isArray(d8)) h10 == "label" && d8 ? s8 = d8 + T6(JSON.stringify([
        f11,
        c6,
        o7
      ])) : (d8 || d8 === 0) && (h10 = h10.replace(/[A-Z]/g, (w5) => "-" + w5.toLowerCase()), $7 += 1, y10 = Math.max(y10, (R8 = h10)[0] == "-" ? 0 : Ee4(R8) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R8) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g9 += (g9 ? ";" : "") + b7(d8).map((w5) => u10.s(h10, he4("" + w5, u10.theme) + (c6 ? " !important" : ""))).join(";"));
      else if (h10[0] == "@" || h10.includes("&")) {
        let w5 = f11;
        h10[0] == "@" && (h10 = h10.replace(/\bscreen\(([^)]+)\)/g, (x10, M5) => {
          let N4 = u10.theme("screens", M5);
          return N4 ? (w5 |= 67108864, Ce4(N4, "")) : x10;
        }), w5 |= re2(h10)), p9.push(...l9(d8, {
          n: s8,
          p: w5,
          r: [
            ...a9,
            h10
          ],
          i: c6
        }, u10));
      } else p9.push(...l9(d8, {
        p: f11,
        r: [
          ...a9,
          h10
        ]
      }, u10));
    }
    return p9.unshift({
      n: s8,
      p: f11,
      o: Math.max(0, 15 - $7) + 1.5 * Math.min(y10 || 15, 15),
      r: a9,
      d: g9
    }), p9.sort(Ne5);
  }(e8, ce5(t8, r8, i9, n5), r8);
}
function he4(e8, t8) {
  return e8.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r8, i9, n5, l9, o7 = "") => {
    let s8 = t8(n5, o7);
    return typeof s8 == "function" && /color|fill|stroke/i.test(n5) ? P4(s8) : "" + b7(s8).filter((f11) => Object(f11) !== f11);
  });
}
function ye6(e8, t8) {
  let r8, i9 = [];
  for (let n5 of e8) n5.d && n5.n ? r8?.p == n5.p && "" + r8.r == "" + n5.r ? (r8.c = [
    r8.c,
    n5.c
  ].filter(Boolean).join(" "), r8.d = r8.d + ";" + n5.d) : i9.push(r8 = {
    ...n5,
    n: n5.n && t8
  }) : i9.push({
    ...n5,
    n: n5.n && t8
  });
  return i9;
}
function W4(e8, t8, r8 = S8.u, i9, n5) {
  let l9 = [];
  for (let o7 of e8) for (let s8 of function(f11, a9, c6, u10, p9) {
    f11 = {
      ...f11,
      i: f11.i || p9
    };
    let g9 = function(y10, $7) {
      let A6 = pe4.get(y10.n);
      return A6 ? A6(y10, $7) : $7.r(y10.n, y10.v[0] == "dark");
    }(f11, a9);
    return g9 ? typeof g9 == "string" ? ({ r: u10, p: c6 } = ce5(f11, a9, c6, u10), ye6(W4(I4(g9), a9, c6, u10, f11.i), f11.n)) : Array.isArray(g9) ? g9.map((y10) => {
      var $7, A6;
      return {
        o: 0,
        ...y10,
        r: [
          ...b7(u10),
          ...b7(y10.r)
        ],
        p: ($7 = c6, A6 = y10.p ?? c6, $7 & ~S8.o | A6)
      };
    }) : de6(g9, f11, a9, c6, u10) : [
      {
        c: ae5(f11),
        p: 0,
        o: 0,
        r: []
      }
    ];
  }(o7, t8, r8, i9, n5)) l9.splice(Me5(l9, s8), 0, s8);
  return l9;
}
function ge4(e8, t8, r8, i9, n5, l9, o7, s8) {
  return ye6((s8 ? r8.flatMap((f11) => W4([
    f11
  ], i9, n5, l9, o7)) : W4(r8, i9, n5, l9, o7)).map((f11) => f11.p & S8.o && (f11.n || t8 == S8.b) ? {
    ...f11,
    p: f11.p & ~S8.o | t8,
    o: 0
  } : f11), e8);
}
function _e5(e8, t8, r8, i9) {
  var n5;
  return n5 = (l9, o7) => {
    let { n: s8, p: f11, r: a9, i: c6 } = ce5(l9, o7, t8);
    return r8 && ge4(s8, t8, r8, o7, f11, a9, c6, i9);
  }, pe4.set(e8, n5), e8;
}
function K7(e8, t8, r8) {
  if (e8[e8.length - 1] != "(") {
    let i9 = [], n5 = false, l9 = false, o7 = "";
    for (let s8 of e8) if (!(s8 == "(" || /[~@]$/.test(s8))) {
      if (s8[0] == "!" && (s8 = s8.slice(1), n5 = !n5), s8.endsWith(":")) {
        i9[s8 == "dark:" ? "unshift" : "push"](s8.slice(0, -1));
        continue;
      }
      s8[0] == "-" && (s8 = s8.slice(1), l9 = !l9), s8.endsWith("-") && (s8 = s8.slice(0, -1)), s8 && s8 != "&" && (o7 += (o7 && "-") + s8);
    }
    o7 && (l9 && (o7 = "-" + o7), t8[0].push({
      n: o7,
      v: i9.filter(Be5),
      i: n5
    }));
  }
}
function Be5(e8, t8, r8) {
  return r8.indexOf(e8) == t8;
}
var Se4 = /* @__PURE__ */ new Map();
function I4(e8) {
  let t8 = Se4.get(e8);
  if (!t8) {
    let r8 = [], i9 = [
      []
    ], n5 = 0, l9 = 0, o7 = null, s8 = 0, f11 = (a9, c6 = 0) => {
      n5 != s8 && (r8.push(e8.slice(n5, s8 + c6)), a9 && K7(r8, i9)), n5 = s8 + 1;
    };
    for (; s8 < e8.length; s8++) {
      let a9 = e8[s8];
      if (l9) e8[s8 - 1] != "\\" && (l9 += +(a9 == "[") || -(a9 == "]"));
      else if (a9 == "[") l9 += 1;
      else if (o7) e8[s8 - 1] != "\\" && o7.test(e8.slice(s8)) && (o7 = null, n5 = s8 + RegExp.lastMatch.length);
      else if (a9 == "/" && e8[s8 - 1] != "\\" && (e8[s8 + 1] == "*" || e8[s8 + 1] == "/")) o7 = e8[s8 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a9 == "(") f11(), r8.push(a9);
      else if (a9 == ":") e8[s8 + 1] != ":" && f11(false, 1);
      else if (/[\s,)]/.test(a9)) {
        f11(true);
        let c6 = r8.lastIndexOf("(");
        if (a9 == ")") {
          let u10 = r8[c6 - 1];
          if (/[~@]$/.test(u10)) {
            let p9 = i9.shift();
            r8.length = c6, K7([
              ...r8,
              "#"
            ], i9);
            let { v: g9 } = i9[0].pop();
            for (let y10 of p9) y10.v.splice(+(y10.v[0] == "dark") - +(g9[0] == "dark"), g9.length);
            K7([
              ...r8,
              _e5(u10.length > 1 ? u10.slice(0, -1) + T6(JSON.stringify([
                u10,
                p9
              ])) : u10 + "(" + ue2(p9) + ")", S8.a, p9, /@$/.test(u10))
            ], i9);
          }
          c6 = r8.lastIndexOf("(", c6 - 1);
        }
        r8.length = c6 + 1;
      } else /[~@]/.test(a9) && e8[s8 + 1] == "(" && i9.unshift([]);
    }
    f11(true), Se4.set(e8, t8 = i9[0]);
  }
  return t8;
}
function Ve2(e8, t8, r8) {
  return t8.reduce((i9, n5, l9) => i9 + r8(n5) + e8[l9 + 1], e8[0]);
}
function Z4(e8, t8) {
  return Array.isArray(e8) && Array.isArray(e8.raw) ? Ve2(e8, t8, (r8) => ee3(r8).trim()) : t8.filter(Boolean).reduce((r8, i9) => r8 + ee3(i9), e8 ? ee3(e8) : "");
}
function ee3(e8) {
  let t8, r8 = "";
  if (e8 && typeof e8 == "object") if (Array.isArray(e8)) (t8 = Z4(e8[0], e8.slice(1))) && (r8 += " " + t8);
  else for (let i9 in e8) e8[i9] && (r8 += " " + i9);
  else e8 != null && typeof e8 != "boolean" && (r8 += " " + e8);
  return r8;
}
var pt3 = ze5("@");
var dt2 = ze5("~");
function ze5(e8) {
  return new Proxy(function(i9, ...n5) {
    return t8("", i9, n5);
  }, {
    get(r8, i9) {
      return i9 in r8 ? r8[i9] : function(l9, ...o7) {
        return t8(i9, l9, o7);
      };
    }
  });
  function t8(r8, i9, n5) {
    return ue2(I4(r8 + e8 + "(" + Z4(i9, n5) + ")"));
  }
}
function G8(e8, t8) {
  return Array.isArray(e8) ? ve6(Ve2(e8, t8, (r8) => r8 != null && typeof r8 != "boolean" ? r8 : "")) : typeof e8 == "string" ? ve6(e8) : [
    e8
  ];
}
var We5 = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve6(e8) {
  let t8;
  e8 = e8.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r8 = [
    {}
  ], i9 = [
    r8[0]
  ], n5 = [];
  for (; t8 = We5.exec(e8); ) t8[4] && (r8.shift(), n5.shift()), t8[3] ? (n5.unshift(t8[3]), r8.unshift({}), i9.push(n5.reduce((l9, o7) => ({
    [o7]: l9
  }), r8[0]))) : t8[4] || (r8[0][t8[1]] && (r8.unshift({}), i9.push(n5.reduce((l9, o7) => ({
    [o7]: l9
  }), r8[0]))), r8[0][t8[1]] = t8[2]);
  return i9;
}
function me5(e8, ...t8) {
  var r8;
  let i9 = G8(e8, t8), n5 = (i9.find((l9) => l9.label)?.label || "css") + T6(JSON.stringify(i9));
  return r8 = (l9, o7) => ye6(i9.flatMap((s8) => de6(s8, l9, o7, S8.o)), n5), pe4.set(n5, r8), n5;
}
var ht = new Proxy(function(e8, t8) {
  return Re5("animation", e8, t8);
}, {
  get(e8, t8) {
    return t8 in e8 ? e8[t8] : function(i9, n5) {
      return Re5(t8, i9, n5);
    };
  }
});
function Re5(e8, t8, r8) {
  return {
    toString() {
      return me5({
        label: e8,
        "@layer components": {
          ...typeof t8 == "object" ? t8 : {
            animation: t8
          },
          animationName: "" + r8
        }
      });
    }
  };
}
function yt2(e8, t8, r8) {
  return [
    e8,
    ie3(t8, r8)
  ];
}
function ie3(e8, t8) {
  return typeof e8 == "function" ? e8 : typeof e8 == "string" && /^[\w-]+$/.test(e8) ? (r8, i9) => ({
    [e8]: t8 ? t8(r8, i9) : le5(r8, 1)
  }) : (r8) => e8 || {
    [r8[1]]: le5(r8, 2)
  };
}
function le5(e8, t8, r8 = e8.slice(t8).find(Boolean) || e8.$$ || e8.input) {
  return e8.input[0] == "-" ? `calc(${r8} * -1)` : r8;
}
function gt(e8, t8, r8, i9) {
  return [
    e8,
    Ge6(t8, r8, i9)
  ];
}
function Ge6(e8, t8, r8) {
  let i9 = typeof t8 == "string" ? (n5, l9) => ({
    [t8]: r8 ? r8(n5, l9) : n5._
  }) : t8 || (({ 1: n5, _: l9 }, o7, s8) => ({
    [n5 || s8]: l9
  }));
  return (n5, l9) => {
    let o7 = ke4(e8 || n5[1]), s8 = l9.theme(o7, n5.$$) ?? oe4(n5.$$, o7, l9);
    if (s8 != null) return n5._ = le5(n5, 0, s8), i9(n5, l9, o7);
  };
}
function mt3(e8, t8 = {}, r8) {
  return [
    e8,
    Ye5(t8, r8)
  ];
}
function Ye5(e8 = {}, t8) {
  return (r8, i9) => {
    let { section: n5 = ke4(r8[0]).replace("-", "") + "Color" } = e8, [l9, o7] = Ze3(r8.$$);
    if (!l9) return;
    let s8 = i9.theme(n5, l9) || oe4(l9, n5, i9);
    if (!s8 || typeof s8 == "object") return;
    let { opacityVariable: f11 = `--tw-${r8[0].replace(/-$/, "")}-opacity`, opacitySection: a9 = n5.replace("Color", "Opacity"), property: c6 = n5, selector: u10 } = e8, p9 = i9.theme(a9, o7 || "DEFAULT") || o7 && oe4(o7, a9, i9), g9 = t8 || (({ _: $7 }) => {
      let A6 = He5(c6, $7);
      return u10 ? {
        [u10]: A6
      } : A6;
    });
    r8._ = {
      value: P4(s8, {
        opacityVariable: f11 || void 0,
        opacityValue: p9 || void 0
      }),
      color: ($7) => P4(s8, $7),
      opacityVariable: f11 || void 0,
      opacityValue: p9 || void 0
    };
    let y10 = g9(r8, i9);
    if (!r8.dark) {
      let $7 = i9.d(n5, l9, s8);
      $7 && $7 !== s8 && (r8._ = {
        value: P4($7, {
          opacityVariable: f11 || void 0,
          opacityValue: p9 || "1"
        }),
        color: (A6) => P4($7, A6),
        opacityVariable: f11 || void 0,
        opacityValue: p9 || void 0
      }, y10 = {
        "&": y10,
        [i9.v("dark")]: g9(r8, i9)
      });
    }
    return y10;
  };
}
function Ze3(e8) {
  return (e8.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function He5(e8, t8) {
  let r8 = {};
  return typeof t8 == "string" ? r8[e8] = t8 : (t8.opacityVariable && t8.value.includes(t8.opacityVariable) && (r8[t8.opacityVariable] = t8.opacityValue || "1"), r8[e8] = t8.value), r8;
}
function oe4(e8, t8, r8) {
  if (e8[0] == "[" && e8.slice(-1) == "]") {
    if (e8 = se2(he4(e8.slice(1, -1), r8.theme)), !t8) return e8;
    if (!(/color|fill|stroke/i.test(t8) && !(/^color:/.test(e8) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e8)) || /image/i.test(t8) && !(/^image:/.test(e8) || /^[a-z-]+\(/.test(e8)) || /weight/i.test(t8) && !(/^(number|any):/.test(e8) || /^\d+$/.test(e8)) || /position/i.test(t8) && /^(length|size):/.test(e8))) return e8.replace(/^[a-z-]+:/, "");
  }
}
function ke4(e8) {
  return e8.replace(/-./g, (t8) => t8[1].toUpperCase());
}
function se2(e8) {
  return e8.includes("url(") ? e8.replace(/(.*?)(url\(.*?\))(.*?)/g, (t8, r8 = "", i9, n5 = "") => se2(r8) + i9 + se2(n5)) : e8.replace(/(^|[^\\])_+/g, (t8, r8) => r8 + " ".repeat(t8.length - r8.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t8) => t8.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe5 = Symbol();
function Te4({ presets: e8 = [], ...t8 }) {
  let r8 = {
    darkMode: void 0,
    darkColor: void 0,
    preflight: t8.preflight !== false && [],
    theme: {},
    variants: b7(t8.variants),
    rules: b7(t8.rules),
    ignorelist: b7(t8.ignorelist),
    hash: void 0,
    stringify: (i9, n5) => i9 + ":" + n5,
    finalize: []
  };
  for (let i9 of b7([
    ...e8,
    {
      darkMode: t8.darkMode,
      darkColor: t8.darkColor,
      preflight: t8.preflight !== false && b7(t8.preflight),
      theme: t8.theme,
      hash: t8.hash,
      stringify: t8.stringify,
      finalize: t8.finalize
    }
  ])) {
    let { preflight: n5, darkMode: l9 = r8.darkMode, darkColor: o7 = r8.darkColor, theme: s8, variants: f11, rules: a9, ignorelist: c6, hash: u10 = r8.hash, stringify: p9 = r8.stringify, finalize: g9 } = typeof i9 == "function" ? i9(r8) : i9;
    r8 = {
      preflight: r8.preflight !== false && n5 !== false && [
        ...r8.preflight,
        ...b7(n5)
      ],
      darkMode: l9,
      darkColor: o7,
      theme: {
        ...r8.theme,
        ...s8,
        extend: {
          ...r8.theme.extend,
          ...s8?.extend
        }
      },
      variants: [
        ...r8.variants,
        ...b7(f11)
      ],
      rules: [
        ...r8.rules,
        ...b7(a9)
      ],
      ignorelist: [
        ...r8.ignorelist,
        ...b7(c6)
      ],
      hash: u10,
      stringify: p9,
      finalize: [
        ...r8.finalize,
        ...b7(g9)
      ]
    };
  }
  return r8;
}
function xe3(e8, t8, r8, i9, n5, l9) {
  for (let o7 of t8) {
    let s8 = r8.get(o7);
    s8 || r8.set(o7, s8 = i9(o7));
    let f11 = s8(e8, n5, l9);
    if (f11) return f11;
  }
}
function Xe4(e8) {
  var t8;
  return fe4(e8[0], typeof (t8 = e8[1]) == "function" ? t8 : () => t8);
}
function Ke5(e8) {
  var t8, r8;
  return Array.isArray(e8) ? fe4(e8[0], ie3(e8[1], e8[2])) : fe4(e8, ie3(t8, r8));
}
function fe4(e8, t8) {
  return Ie4(e8, (r8, i9, n5, l9) => {
    let o7 = i9.exec(r8);
    if (o7) return o7.$$ = r8.slice(o7[0].length), o7.dark = l9, t8(o7, n5);
  });
}
function Ie4(e8, t8) {
  let r8 = b7(e8).map(et3);
  return (i9, n5, l9) => {
    for (let o7 of r8) {
      let s8 = t8(i9, o7, n5, l9);
      if (s8) return s8;
    }
  };
}
function et3(e8) {
  return typeof e8 == "string" ? RegExp("^" + e8 + (e8.includes("$") || e8.slice(-1) == "-" ? "" : "$")) : e8;
}
function tt3(e8, t8) {
  let r8 = Te4(e8), i9 = function({ theme: f11, darkMode: a9, darkColor: c6 = F5, variants: u10, rules: p9, hash: g9, stringify: y10, ignorelist: $7, finalize: A6 }) {
    let R8 = /* @__PURE__ */ new Map(), h10 = /* @__PURE__ */ new Map(), d8 = /* @__PURE__ */ new Map(), w5 = /* @__PURE__ */ new Map(), x10 = Ie4($7, (m13, j10) => j10.test(m13));
    u10.push([
      "dark",
      Array.isArray(a9) || a9 == "class" ? `${b7(a9)[1] || ".dark"} &` : typeof a9 == "string" && a9 != "media" ? a9 : "@media (prefers-color-scheme:dark)"
    ]);
    let M5 = typeof g9 == "function" ? (m13) => g9(m13, T6) : g9 ? T6 : te;
    M5 !== te && A6.push((m13) => ({
      ...m13,
      n: m13.n && M5(m13.n),
      d: m13.d?.replace(/--(tw(?:-[\w-]+)?)\b/g, (j10, C10) => "--" + M5(C10).replace("#", ""))
    }));
    let N4 = {
      theme: function({ extend: m13 = {}, ...j10 }) {
        let C10 = {}, qe5 = {
          get colors() {
            return L6("colors");
          },
          theme: L6,
          negative() {
            return {};
          },
          breakpoints(v13) {
            let E11 = {};
            for (let O6 in v13) typeof v13[O6] == "string" && (E11["screen-" + O6] = v13[O6]);
            return E11;
          }
        };
        return L6;
        function L6(v13, E11, O6, q9) {
          if (v13) {
            if ({ 1: v13, 2: q9 } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec(v13) || [
              ,
              v13
            ], /[.[]/.test(v13)) {
              let V8 = [];
              v13.replace(/\[([^\]]+)\]|([^.[]+)/g, (k13, U9, Je3 = U9) => V8.push(Je3)), v13 = V8.shift(), O6 = E11, E11 = V8.join("-");
            }
            let _8 = C10[v13] || Object.assign(Object.assign(C10[v13] = {}, be4(j10, v13)), be4(m13, v13));
            if (E11 == null) return _8;
            E11 ||= "DEFAULT";
            let z10 = _8[E11] ?? E11.split("-").reduce((V8, k13) => V8?.[k13], _8) ?? O6;
            return q9 ? P4(z10, {
              opacityValue: he4(q9, L6)
            }) : z10;
          }
          let J5 = {};
          for (let _8 of [
            ...Object.keys(j10),
            ...Object.keys(m13)
          ]) J5[_8] = L6(_8);
          return J5;
        }
        function be4(v13, E11) {
          let O6 = v13[E11];
          return typeof O6 == "function" && (O6 = O6(qe5)), O6 && /color|fill|stroke/i.test(E11) ? function q9(J5, _8 = []) {
            let z10 = {};
            for (let V8 in J5) {
              let k13 = J5[V8], U9 = [
                ..._8,
                V8
              ];
              z10[U9.join("-")] = k13, V8 == "DEFAULT" && (U9 = _8, z10[_8.join("-")] = k13), typeof k13 == "object" && Object.assign(z10, q9(k13, U9));
            }
            return z10;
          }(O6) : O6;
        }
      }(f11),
      e: Y8,
      h: M5,
      s(m13, j10) {
        return y10(m13, j10, N4);
      },
      d(m13, j10, C10) {
        return c6(m13, j10, N4, C10);
      },
      v(m13) {
        return R8.has(m13) || R8.set(m13, xe3(m13, u10, h10, Xe4, N4) || "&:" + m13), R8.get(m13);
      },
      r(m13, j10) {
        let C10 = JSON.stringify([
          m13,
          j10
        ]);
        return d8.has(C10) || d8.set(C10, !x10(m13, N4) && xe3(m13, p9, w5, Ke5, N4, j10)), d8.get(C10);
      },
      f(m13) {
        return A6.reduce((j10, C10) => C10(j10, N4), m13);
      }
    };
    return N4;
  }(r8), n5 = /* @__PURE__ */ new Map(), l9 = [], o7 = /* @__PURE__ */ new Set();
  t8.resume((f11) => n5.set(f11, f11), (f11, a9) => {
    t8.insert(f11, l9.length, a9), l9.push(a9), o7.add(f11);
  });
  function s8(f11) {
    let a9 = i9.f(f11), c6 = ne3(a9);
    if (c6 && !o7.has(c6)) {
      o7.add(c6);
      let u10 = Me5(l9, f11);
      t8.insert(c6, u10, f11), l9.splice(u10, 0, f11);
    }
    return a9.n;
  }
  return Object.defineProperties(function(a9) {
    if (!n5.size) for (let u10 of b7(r8.preflight)) typeof u10 == "function" && (u10 = u10(i9)), u10 && (typeof u10 == "string" ? ge4("", S8.b, I4(u10), i9, S8.b, [], false, true) : de6(u10, {}, i9, S8.b)).forEach(s8);
    a9 = "" + a9;
    let c6 = n5.get(a9);
    if (!c6) {
      let u10 = /* @__PURE__ */ new Set();
      for (let p9 of W4(I4(a9), i9)) u10.add(p9.c).add(s8(p9));
      c6 = [
        ...u10
      ].filter(Boolean).join(" "), n5.set(a9, c6).set(c6, c6);
    }
    return c6;
  }, Object.getOwnPropertyDescriptors({
    get target() {
      return t8.target;
    },
    theme: i9.theme,
    config: r8,
    snapshot() {
      let f11 = t8.snapshot(), a9 = new Set(o7), c6 = new Map(n5), u10 = [
        ...l9
      ];
      return () => {
        f11(), o7 = a9, n5 = c6, l9 = u10;
      };
    },
    clear() {
      t8.clear(), o7 = /* @__PURE__ */ new Set(), n5 = /* @__PURE__ */ new Map(), l9 = [];
    },
    destroy() {
      this.clear(), t8.destroy();
    }
  }));
}
function De5(e8, t8) {
  return e8 != t8 && "" + e8.split(" ").sort() != "" + t8.split(" ").sort();
}
function rt3(e8) {
  let t8 = new MutationObserver(r8);
  return {
    observe(n5) {
      t8.observe(n5, {
        attributeFilter: [
          "class"
        ],
        subtree: true,
        childList: true
      }), i9(n5), r8([
        {
          target: n5,
          type: ""
        }
      ]);
    },
    disconnect() {
      t8.disconnect();
    }
  };
  function r8(n5) {
    for (let { type: l9, target: o7 } of n5) if (l9[0] == "a") i9(o7);
    else for (let s8 of o7.querySelectorAll("[class]")) i9(s8);
    t8.takeRecords();
  }
  function i9(n5) {
    let l9, o7 = n5.getAttribute?.("class");
    o7 && De5(o7, l9 = e8(o7)) && n5.setAttribute("class", l9);
  }
}
function nt3(e8 = D6, t8 = typeof document < "u" && document.documentElement) {
  if (t8) {
    let r8 = rt3(e8);
    r8.observe(t8);
    let { destroy: i9 } = e8;
    e8.destroy = () => {
      r8.disconnect(), i9.call(e8);
    };
  }
  return e8;
}
function Pe6(e8) {
  let t8 = document.querySelector(e8 || 'style[data-twind=""]');
  return (!t8 || t8.tagName != "STYLE") && (t8 = document.createElement("style"), document.head.prepend(t8)), t8.dataset.twind = "claimed", t8;
}
function it2(e8) {
  let t8 = e8?.cssRules ? e8 : (e8 && typeof e8 != "string" ? e8 : Pe6(e8)).sheet;
  return {
    target: t8,
    snapshot() {
      let r8 = Array.from(t8.cssRules, (i9) => i9.cssText);
      return () => {
        this.clear(), r8.forEach(this.insert);
      };
    },
    clear() {
      for (let r8 = t8.cssRules.length; r8--; ) t8.deleteRule(r8);
    },
    destroy() {
      t8.ownerNode?.remove();
    },
    insert(r8, i9) {
      try {
        t8.insertRule(r8, i9);
      } catch {
        t8.insertRule(":root{}", i9);
      }
    },
    resume: F5
  };
}
function lt(e8) {
  let t8 = e8 && typeof e8 != "string" ? e8 : Pe6(e8);
  return {
    target: t8,
    snapshot() {
      let r8 = Array.from(t8.childNodes, (i9) => i9.textContent);
      return () => {
        this.clear(), r8.forEach(this.insert);
      };
    },
    clear() {
      t8.textContent = "";
    },
    destroy() {
      t8.remove();
    },
    insert(r8, i9) {
      t8.insertBefore(document.createTextNode(r8), t8.childNodes[i9] || null);
    },
    resume: F5
  };
}
function ot2(e8) {
  let t8 = [];
  return {
    target: t8,
    snapshot() {
      let r8 = [
        ...t8
      ];
      return () => {
        t8.splice(0, t8.length, ...r8);
      };
    },
    clear() {
      t8.length = 0;
    },
    destroy() {
      this.clear();
    },
    insert(r8, i9, n5) {
      t8.splice(i9, 0, e8 ? `/*!${n5.p.toString(36)},${(2 * n5.o).toString(36)}${n5.n ? "," + n5.n : ""}*/${r8}` : r8);
    },
    resume: F5
  };
}
function Fe3(e8, t8) {
  let r8 = typeof document > "u" ? ot2(!t8) : e8 ? lt() : it2();
  return t8 || (r8.resume = st3), r8;
}
function Le5(e8) {
  return (e8.ownerNode || e8).textContent || (e8.cssRules ? Array.from(e8.cssRules, (t8) => t8.cssText) : b7(e8)).join("");
}
function st3(e8, t8) {
  let r8 = Le5(this.target), i9 = /\/\*!([\da-z]+),([\da-z]+)(?:,(.+?))?\*\//g;
  if (i9.test(r8)) {
    var n5;
    let l9;
    if (i9.lastIndex = 0, this.clear(), typeof document < "u") for (let o7 of document.querySelectorAll("[class]")) e8(o7.getAttribute("class"));
    for (; n5 = i9.exec(r8), l9 && t8(r8.slice(l9.index + l9[0].length, n5?.index), {
      p: parseInt(l9[1], 36),
      o: parseInt(l9[2], 36) / 2,
      n: l9[3]
    }), l9 = n5; ) ;
  }
}
var D6 = new Proxy(F5, {
  apply(e8, t8, r8) {
    return B5(r8[0]);
  },
  get(e8, t8) {
    let r8 = B5[t8];
    return typeof r8 == "function" ? function() {
      return r8.apply(B5, arguments);
    } : r8;
  }
});
function ft2(e8 = {}, t8 = Fe3, r8) {
  return B5?.destroy(), B5 = nt3(tt3(e8, typeof t8 == "function" ? t8() : t8), r8);
}
function vt2(e8, t8 = true) {
  let r8 = Te4(e8);
  return ft2({
    ...r8,
    hash: r8.hash ?? t8
  }, () => Fe3(!t8));
}
var Rt2 = function e2(t8) {
  return new Proxy(function(i9, ...n5) {
    return je4(t8, "", i9, n5);
  }, {
    get(r8, i9) {
      return i9 === "bind" ? e2 : i9 in r8 ? r8[i9] : function(l9, ...o7) {
        return je4(t8, i9, l9, o7);
      };
    }
  });
}();
function je4(e8, t8, r8, i9) {
  return {
    toString() {
      let n5 = G8(r8, i9), l9 = Y8(t8 + T6(JSON.stringify([
        t8,
        n5
      ])));
      return (typeof e8 == "function" ? e8 : D6)(me5({
        [`@keyframes ${l9}`]: G8(r8, i9)
      })), l9;
    }
  };
}

// deno:https://esm.sh/@twind/with-react@1.1.3/denonext/with-react.mjs
function t2(r8, l9 = true) {
  return vt2(r8, l9);
}

// deno:https://esm.sh/style-vendorizer@2.2.3/denonext/style-vendorizer.mjs
var t3 = /* @__PURE__ */ new Map([
  [
    "align-self",
    "-ms-grid-row-align"
  ],
  [
    "color-adjust",
    "-webkit-print-color-adjust"
  ],
  [
    "column-gap",
    "grid-column-gap"
  ],
  [
    "forced-color-adjust",
    "-ms-high-contrast-adjust"
  ],
  [
    "gap",
    "grid-gap"
  ],
  [
    "grid-template-columns",
    "-ms-grid-columns"
  ],
  [
    "grid-template-rows",
    "-ms-grid-rows"
  ],
  [
    "justify-self",
    "-ms-grid-column-align"
  ],
  [
    "margin-inline-end",
    "-webkit-margin-end"
  ],
  [
    "margin-inline-start",
    "-webkit-margin-start"
  ],
  [
    "mask-border",
    "-webkit-mask-box-image"
  ],
  [
    "mask-border-outset",
    "-webkit-mask-box-image-outset"
  ],
  [
    "mask-border-slice",
    "-webkit-mask-box-image-slice"
  ],
  [
    "mask-border-source",
    "-webkit-mask-box-image-source"
  ],
  [
    "mask-border-repeat",
    "-webkit-mask-box-image-repeat"
  ],
  [
    "mask-border-width",
    "-webkit-mask-box-image-width"
  ],
  [
    "overflow-wrap",
    "word-wrap"
  ],
  [
    "padding-inline-end",
    "-webkit-padding-end"
  ],
  [
    "padding-inline-start",
    "-webkit-padding-start"
  ],
  [
    "print-color-adjust",
    "color-adjust"
  ],
  [
    "row-gap",
    "grid-row-gap"
  ],
  [
    "scroll-margin-bottom",
    "scroll-snap-margin-bottom"
  ],
  [
    "scroll-margin-left",
    "scroll-snap-margin-left"
  ],
  [
    "scroll-margin-right",
    "scroll-snap-margin-right"
  ],
  [
    "scroll-margin-top",
    "scroll-snap-margin-top"
  ],
  [
    "scroll-margin",
    "scroll-snap-margin"
  ],
  [
    "text-combine-upright",
    "-ms-text-combine-horizontal"
  ]
]);
function e3(r8) {
  return t3.get(r8);
}
function s4(r8) {
  var i9 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(r8);
  return i9 ? i9[1] ? 1 : i9[2] ? 2 : i9[3] ? 3 : 5 : 0;
}
function o2(r8, i9) {
  var a9 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(r8);
  return a9 ? a9[1] ? /^sti/i.test(i9) ? 1 : 0 : a9[2] ? /^pat/i.test(i9) ? 1 : 0 : a9[3] ? /^image-/i.test(i9) ? 1 : 0 : a9[4] ? i9[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(i9) ? 4 : 0 : 0;
}

// deno:https://esm.sh/@twind/preset-autoprefix@1.0.7/denonext/preset-autoprefix.mjs
var P5 = [
  [
    "-webkit-",
    1
  ],
  [
    "-moz-",
    2
  ],
  [
    "-ms-",
    4
  ]
];
function u6() {
  return ({ stringify: r8 }) => ({
    stringify(s8, e8, l9) {
      let f11 = "", t8 = e3(s8);
      t8 && (f11 += r8(t8, e8, l9) + ";");
      let i9 = s4(s8), o7 = o2(s8, e8);
      for (let a9 of P5) i9 & a9[1] && (f11 += r8(a9[0] + s8, e8, l9) + ";"), o7 & a9[1] && (f11 += r8(s8, a9[0] + e8, l9) + ";");
      return f11 + r8(s8, e8, l9);
    }
  });
}

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/_/colors-e5e84df2.mjs
var f8 = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a"
};
var e4 = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827"
};
var a6 = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b"
};
var d5 = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717"
};
var c2 = {
  50: "#fafaf9",
  100: "#f5f5f4",
  200: "#e7e5e4",
  300: "#d6d3d1",
  400: "#a8a29e",
  500: "#78716c",
  600: "#57534e",
  700: "#44403c",
  800: "#292524",
  900: "#1c1917"
};
var b8 = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d"
};
var s5 = {
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12"
};
var l5 = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "#fbbf24",
  500: "#f59e0b",
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f"
};
var r4 = {
  50: "#fefce8",
  100: "#fef9c3",
  200: "#fef08a",
  300: "#fde047",
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  900: "#713f12"
};
var o3 = {
  50: "#f7fee7",
  100: "#ecfccb",
  200: "#d9f99d",
  300: "#bef264",
  400: "#a3e635",
  500: "#84cc16",
  600: "#65a30d",
  700: "#4d7c0f",
  800: "#3f6212",
  900: "#365314"
};
var n3 = {
  50: "#f0fdf4",
  100: "#dcfce7",
  200: "#bbf7d0",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#16a34a",
  700: "#15803d",
  800: "#166534",
  900: "#14532d"
};
var t4 = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b7",
  400: "#34d399",
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  900: "#064e3b"
};
var i7 = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a"
};
var p6 = {
  50: "#ecfeff",
  100: "#cffafe",
  200: "#a5f3fc",
  300: "#67e8f9",
  400: "#22d3ee",
  500: "#06b6d4",
  600: "#0891b2",
  700: "#0e7490",
  800: "#155e75",
  900: "#164e63"
};
var g5 = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e"
};
var u7 = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a"
};
var y6 = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81"
};
var m7 = {
  50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6d28d9",
  800: "#5b21b6",
  900: "#4c1d95"
};
var _6 = {
  50: "#faf5ff",
  100: "#f3e8ff",
  200: "#e9d5ff",
  300: "#d8b4fe",
  400: "#c084fc",
  500: "#a855f7",
  600: "#9333ea",
  700: "#7e22ce",
  800: "#6b21a8",
  900: "#581c87"
};
var k9 = {
  50: "#fdf4ff",
  100: "#fae8ff",
  200: "#f5d0fe",
  300: "#f0abfc",
  400: "#e879f9",
  500: "#d946ef",
  600: "#c026d3",
  700: "#a21caf",
  800: "#86198f",
  900: "#701a75"
};
var h6 = {
  50: "#fdf2f8",
  100: "#fce7f3",
  200: "#fbcfe8",
  300: "#f9a8d4",
  400: "#f472b6",
  500: "#ec4899",
  600: "#db2777",
  700: "#be185d",
  800: "#9d174d",
  900: "#831843"
};
var v10 = {
  50: "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337"
};
var z7 = {
  __proto__: null,
  slate: f8,
  gray: e4,
  zinc: a6,
  neutral: d5,
  stone: c2,
  red: b8,
  orange: s5,
  amber: l5,
  yellow: r4,
  lime: o3,
  green: n3,
  emerald: t4,
  teal: i7,
  cyan: p6,
  sky: g5,
  blue: u7,
  indigo: y6,
  violet: m7,
  purple: _6,
  fuchsia: k9,
  pink: h6,
  rose: v10
};

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/baseTheme.mjs
var c3 = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  columns: {
    auto: "auto",
    "3xs": "16rem",
    "2xs": "18rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem"
  },
  spacing: {
    px: "1px",
    0: "0px",
    ...r5(4, "rem", 4, 0.5, 0.5),
    ...r5(12, "rem", 4, 5),
    14: "3.5rem",
    ...r5(64, "rem", 4, 16, 4),
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
    bounce: "bounce 1s infinite"
  },
  aspectRatio: {
    auto: "auto",
    square: "1/1",
    video: "16/9"
  },
  backdropBlur: e5("blur"),
  backdropBrightness: e5("brightness"),
  backdropContrast: e5("contrast"),
  backdropGrayscale: e5("grayscale"),
  backdropHueRotate: e5("hueRotate"),
  backdropInvert: e5("invert"),
  backdropOpacity: e5("opacity"),
  backdropSaturate: e5("saturate"),
  backdropSepia: e5("sepia"),
  backgroundColor: e5("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: e5("opacity"),
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    none: "none",
    0: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  brightness: {
    ...r5(200, "", 100, 0, 50),
    ...r5(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  borderColor: ({ theme: o7 }) => ({
    DEFAULT: o7("colors.gray.200", "currentColor"),
    ...o7("colors")
  }),
  borderOpacity: e5("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "1/2": "50%",
    full: "9999px"
  },
  borderSpacing: e5("spacing"),
  borderWidth: {
    DEFAULT: "1px",
    ...t5(8, "px")
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
    md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
    none: "0 0 #0000"
  },
  boxShadowColor: e5("colors"),
  caretColor: e5("colors"),
  accentColor: ({ theme: o7 }) => ({
    auto: "auto",
    ...o7("colors")
  }),
  contrast: {
    ...r5(200, "", 100, 0, 50),
    75: "0.75",
    125: "1.25"
  },
  content: {
    none: "none"
  },
  divideColor: e5("borderColor"),
  divideOpacity: e5("borderOpacity"),
  divideWidth: e5("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgba(0,0,0,0.05)",
    DEFAULT: [
      "0 1px 2px rgba(0,0,0,0.1)",
      "0 1px 1px rgba(0,0,0,0.06)"
    ],
    md: [
      "0 4px 3px rgba(0,0,0,0.07)",
      "0 2px 2px rgba(0,0,0,0.06)"
    ],
    lg: [
      "0 10px 8px rgba(0,0,0,0.04)",
      "0 4px 3px rgba(0,0,0,0.1)"
    ],
    xl: [
      "0 20px 13px rgba(0,0,0,0.03)",
      "0 8px 5px rgba(0,0,0,0.08)"
    ],
    "2xl": "0 25px 25px rgba(0,0,0,0.15)",
    none: "0 0 #0000"
  },
  fill: ({ theme: o7 }) => ({
    ...o7("colors"),
    none: "none"
  }),
  grayscale: {
    DEFAULT: "100%",
    0: "0"
  },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  invert: {
    DEFAULT: "100%",
    0: "0"
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  flexBasis: ({ theme: o7 }) => ({
    ...o7("spacing"),
    ...l6(2, 6),
    ...l6(12, 12),
    auto: "auto",
    full: "100%"
  }),
  flexGrow: {
    DEFAULT: 1,
    0: 0
  },
  flexShrink: {
    DEFAULT: 1,
    0: 0
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: [
      "0.75rem",
      "1rem"
    ],
    sm: [
      "0.875rem",
      "1.25rem"
    ],
    base: [
      "1rem",
      "1.5rem"
    ],
    lg: [
      "1.125rem",
      "1.75rem"
    ],
    xl: [
      "1.25rem",
      "1.75rem"
    ],
    "2xl": [
      "1.5rem",
      "2rem"
    ],
    "3xl": [
      "1.875rem",
      "2.25rem"
    ],
    "4xl": [
      "2.25rem",
      "2.5rem"
    ],
    "5xl": [
      "3rem",
      "1"
    ],
    "6xl": [
      "3.75rem",
      "1"
    ],
    "7xl": [
      "4.5rem",
      "1"
    ],
    "8xl": [
      "6rem",
      "1"
    ],
    "9xl": [
      "8rem",
      "1"
    ]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gap: e5("spacing"),
  gradientColorStops: e5("colors"),
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridColumn: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gridRow: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gridTemplateColumns: {
    none: "none"
  },
  gridTemplateRows: {
    none: "none"
  },
  height: ({ theme: o7 }) => ({
    ...o7("spacing"),
    ...l6(2, 6),
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    auto: "auto",
    full: "100%",
    screen: "100vh"
  }),
  inset: ({ theme: o7 }) => ({
    ...o7("spacing"),
    ...l6(2, 4),
    auto: "auto",
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: {
    ...r5(10, "rem", 4, 3),
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  margin: ({ theme: o7 }) => ({
    auto: "auto",
    ...o7("spacing")
  }),
  maxHeight: ({ theme: o7 }) => ({
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh",
    ...o7("spacing")
  }),
  maxWidth: ({ theme: o7, breakpoints: a9 }) => ({
    ...a9(o7("screens")),
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch"
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  },
  opacity: {
    ...r5(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0"
  },
  padding: e5("spacing"),
  placeholderColor: e5("colors"),
  placeholderOpacity: e5("opacity"),
  outlineColor: e5("colors"),
  outlineOffset: t5(8, "px"),
  outlineWidth: t5(8, "px"),
  ringColor: ({ theme: o7 }) => ({
    ...o7("colors"),
    DEFAULT: "#3b82f6"
  }),
  ringOffsetColor: e5("colors"),
  ringOffsetWidth: t5(8, "px"),
  ringOpacity: ({ theme: o7 }) => ({
    ...o7("opacity"),
    DEFAULT: "0.5"
  }),
  ringWidth: {
    DEFAULT: "3px",
    ...t5(8, "px")
  },
  rotate: {
    ...t5(2, "deg"),
    ...t5(12, "deg", 3),
    ...t5(180, "deg", 45)
  },
  saturate: r5(200, "", 100, 0, 50),
  scale: {
    ...r5(150, "", 100, 0, 50),
    ...r5(110, "", 100, 90, 5),
    75: "0.75",
    125: "1.25"
  },
  scrollMargin: e5("spacing"),
  scrollPadding: e5("spacing"),
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    ...t5(2, "deg"),
    ...t5(12, "deg", 3)
  },
  space: e5("spacing"),
  stroke: ({ theme: o7 }) => ({
    ...o7("colors"),
    none: "none"
  }),
  strokeWidth: r5(2),
  textColor: e5("colors"),
  textDecorationColor: e5("colors"),
  textDecorationThickness: {
    "from-font": "from-font",
    auto: "auto",
    ...t5(8, "px")
  },
  textUnderlineOffset: {
    auto: "auto",
    ...t5(8, "px")
  },
  textIndent: e5("spacing"),
  textOpacity: e5("opacity"),
  transitionDuration: ({ theme: o7 }) => ({
    ...o7("durations"),
    DEFAULT: "150ms"
  }),
  transitionDelay: e5("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    colors: "color,background-color,border-color,text-decoration-color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: ({ theme: o7 }) => ({
    ...o7("spacing"),
    ...l6(2, 4),
    full: "100%"
  }),
  width: ({ theme: o7 }) => ({
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vw",
    ...o7("flexBasis")
  }),
  willChange: {
    scroll: "scroll-position"
  },
  zIndex: {
    ...r5(50, "", 1, 0, 10),
    auto: "auto"
  }
};
function l6(o7, a9) {
  let i9 = {};
  do
    for (var n5 = 1; n5 < o7; n5++) i9[`${n5}/${o7}`] = Number((n5 / o7 * 100).toFixed(6)) + "%";
  while (++o7 <= a9);
  return i9;
}
function t5(o7, a9, i9 = 0) {
  let n5 = {};
  for (; i9 <= o7; i9 = 2 * i9 || 1) n5[i9] = i9 + a9;
  return n5;
}
function r5(o7, a9 = "", i9 = 1, n5 = 0, s8 = 1, m13 = {}) {
  for (; n5 <= o7; n5 += s8) m13[n5] = n5 / i9 + a9;
  return m13;
}
function e5(o7) {
  return ({ theme: a9 }) => a9(o7);
}

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/preflight.mjs
var o4 = {
  "*,::before,::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: "theme(borderColor.DEFAULT, currentColor)"
  },
  "::before,::after": {
    "--tw-content": "''"
  },
  html: {
    lineHeight: 1.5,
    WebkitTextSizeAdjust: "100%",
    MozTabSize: "4",
    tabSize: 4,
    fontFamily: `theme(fontFamily.sans, ${c3.fontFamily.sans})`,
    fontFeatureSettings: "theme(fontFamily.sans[1].fontFeatureSettings, normal)"
  },
  body: {
    margin: "0",
    lineHeight: "inherit"
  },
  hr: {
    height: "0",
    color: "inherit",
    borderTopWidth: "1px"
  },
  "abbr:where([title])": {
    textDecoration: "underline dotted"
  },
  "h1,h2,h3,h4,h5,h6": {
    fontSize: "inherit",
    fontWeight: "inherit"
  },
  a: {
    color: "inherit",
    textDecoration: "inherit"
  },
  "b,strong": {
    fontWeight: "bolder"
  },
  "code,kbd,samp,pre": {
    fontFamily: `theme(fontFamily.mono, ${c3.fontFamily.mono})`,
    fontFeatureSettings: "theme(fontFamily.mono[1].fontFeatureSettings, normal)",
    fontSize: "1em"
  },
  small: {
    fontSize: "80%"
  },
  "sub,sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sub: {
    bottom: "-0.25em"
  },
  sup: {
    top: "-0.5em"
  },
  table: {
    textIndent: "0",
    borderColor: "inherit",
    borderCollapse: "collapse"
  },
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: "inherit",
    color: "inherit",
    margin: "0",
    padding: "0"
  },
  "button,select": {
    textTransform: "none"
  },
  "button,[type='button'],[type='reset'],[type='submit']": {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none"
  },
  ":-moz-focusring": {
    outline: "auto"
  },
  ":-moz-ui-invalid": {
    boxShadow: "none"
  },
  progress: {
    verticalAlign: "baseline"
  },
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type='search']": {
    WebkitAppearance: "textfield",
    outlineOffset: "-2px"
  },
  "::-webkit-search-decoration": {
    WebkitAppearance: "none"
  },
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit"
  },
  summary: {
    display: "list-item"
  },
  "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
    margin: "0"
  },
  fieldset: {
    margin: "0",
    padding: "0"
  },
  legend: {
    padding: "0"
  },
  "ol,ul,menu": {
    listStyle: "none",
    margin: "0",
    padding: "0"
  },
  textarea: {
    resize: "vertical"
  },
  "input::placeholder,textarea::placeholder": {
    opacity: 1,
    color: "theme(colors.gray.400, #9ca3af)"
  },
  'button,[role="button"]': {
    cursor: "pointer"
  },
  ":disabled": {
    cursor: "default"
  },
  "img,svg,video,canvas,audio,iframe,embed,object": {
    display: "block",
    verticalAlign: "middle"
  },
  "img,video": {
    maxWidth: "100%",
    height: "auto"
  },
  "[hidden]": {
    display: "none"
  }
};

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/rules.mjs
var j8 = [
  yt2("\\[([-\\w]+):(.+)]", ({ 1: t8, 2: r8 }, i9) => ({
    "@layer overrides": {
      "&": {
        [t8]: oe4(`[${r8}]`, "", i9)
      }
    }
  })),
  yt2("(group|peer)([~/][^-[]+)?", ({ input: t8 }, { h: r8 }) => [
    {
      c: r8(t8)
    }
  ]),
  gt("aspect-", "aspectRatio"),
  yt2("container", (t8, { theme: r8 }) => {
    let { screens: i9 = r8("screens"), center: a9, padding: l9 } = r8("container"), d8 = {
      width: "100%",
      marginRight: a9 && "auto",
      marginLeft: a9 && "auto",
      ...p9("xs")
    };
    for (let u10 in i9) {
      let w5 = i9[u10];
      typeof w5 == "string" && (d8[Ce4(w5)] = {
        "&": {
          maxWidth: w5,
          ...p9(u10)
        }
      });
    }
    return d8;
    function p9(u10) {
      let w5 = l9 && (typeof l9 == "string" ? l9 : l9[u10] || l9.DEFAULT);
      if (w5) return {
        paddingRight: w5,
        paddingLeft: w5
      };
    }
  }),
  gt("content-", "content", ({ _: t8 }) => ({
    "--tw-content": t8,
    content: "var(--tw-content)"
  })),
  yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"),
  yt2("box-(border|content)", "boxSizing", ({ 1: t8 }) => t8 + "-box"),
  yt2("hidden", {
    display: "none"
  }),
  yt2("table-(auto|fixed)", "tableLayout"),
  yt2([
    "(block|flex|table|grid|inline|contents|flow-root|list-item)",
    "(inline-(block|flex|table|grid))",
    "(table-(caption|cell|column|row|(column|row|footer|header)-group))"
  ], "display"),
  "(float)-(left|right|none)",
  "(clear)-(left|right|none|both)",
  "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)",
  "(isolation)-(auto)",
  yt2("isolate", "isolation"),
  yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"),
  gt("object-", "objectPosition"),
  yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", y7),
  yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t8 = "", 2: r8 }) => ({
    ["overscroll-behavior" + t8]: r8
  })),
  yt2("(static|fixed|absolute|relative|sticky)", "position"),
  gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t8, _: r8 }) => ({
    top: t8 != "-x" && r8,
    right: t8 != "-y" && r8,
    bottom: t8 != "-x" && r8,
    left: t8 != "-y" && r8
  })),
  gt("-?(top|bottom|left|right)(?:$|-)", "inset"),
  yt2("(visible|collapse)", "visibility"),
  yt2("invisible", {
    visibility: "hidden"
  }),
  gt("-?z-", "zIndex"),
  yt2("flex-((row|col)(-reverse)?)", "flexDirection", x8),
  yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"),
  gt("(flex-(?:grow|shrink))(?:$|-)"),
  gt("(flex)-"),
  gt("grow(?:$|-)", "flexGrow"),
  gt("shrink(?:$|-)", "flexShrink"),
  gt("basis-", "flexBasis"),
  gt("-?(order)-"),
  "-?(order)-(\\d+)",
  gt("grid-cols-", "gridTemplateColumns"),
  yt2("grid-cols-(\\d+)", "gridTemplateColumns", C8),
  gt("col-", "gridColumn"),
  yt2("col-(span)-(\\d+)", "gridColumn", $5),
  gt("col-start-", "gridColumnStart"),
  yt2("col-start-(auto|\\d+)", "gridColumnStart"),
  gt("col-end-", "gridColumnEnd"),
  yt2("col-end-(auto|\\d+)", "gridColumnEnd"),
  gt("grid-rows-", "gridTemplateRows"),
  yt2("grid-rows-(\\d+)", "gridTemplateRows", C8),
  gt("row-", "gridRow"),
  yt2("row-(span)-(\\d+)", "gridRow", $5),
  gt("row-start-", "gridRowStart"),
  yt2("row-start-(auto|\\d+)", "gridRowStart"),
  gt("row-end-", "gridRowEnd"),
  yt2("row-end-(auto|\\d+)", "gridRowEnd"),
  yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t8) => y7(x8(t8))),
  yt2("grid-flow-(dense)", "gridAutoFlow"),
  gt("auto-cols-", "gridAutoColumns"),
  gt("auto-rows-", "gridAutoRows"),
  gt("gap-x(?:$|-)", "gap", "columnGap"),
  gt("gap-y(?:$|-)", "gap", "rowGap"),
  gt("gap(?:$|-)", "gap"),
  "(justify-(?:items|self))-",
  yt2("justify-", "justifyContent", k10),
  yt2("(content|items|self)-", (t8) => ({
    ["align-" + t8[1]]: k10(t8)
  })),
  yt2("(place-(content|items|self))-", ({ 1: t8, $$: r8 }) => ({
    [t8]: ("wun".includes(r8[3]) ? "space-" : "") + r8
  })),
  gt("p([xytrbl])?(?:$|-)", "padding", f9("padding")),
  gt("-?m([xytrbl])?(?:$|-)", "margin", f9("margin")),
  gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t8, _: r8 }) => ({
    "&>:not([hidden])~:not([hidden])": {
      [`--tw-space-${t8}-reverse`]: "0",
      ["margin-" + {
        y: "top",
        x: "left"
      }[t8]]: `calc(${r8} * calc(1 - var(--tw-space-${t8}-reverse)))`,
      ["margin-" + {
        y: "bottom",
        x: "right"
      }[t8]]: `calc(${r8} * var(--tw-space-${t8}-reverse))`
    }
  })),
  yt2("space-(x|y)-reverse", ({ 1: t8 }) => ({
    "&>:not([hidden])~:not([hidden])": {
      [`--tw-space-${t8}-reverse`]: "1"
    }
  })),
  gt("w-", "width"),
  gt("min-w-", "minWidth"),
  gt("max-w-", "maxWidth"),
  gt("h-", "height"),
  gt("min-h-", "minHeight"),
  gt("max-h-", "maxHeight"),
  gt("font-", "fontWeight"),
  gt("font-", "fontFamily", ({ _: t8 }) => typeof (t8 = b7(t8))[1] == "string" ? {
    fontFamily: s6(t8)
  } : {
    fontFamily: s6(t8[0]),
    ...t8[1]
  }),
  yt2("antialiased", {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }),
  yt2("subpixel-antialiased", {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  }),
  yt2("italic", "fontStyle"),
  yt2("not-italic", {
    fontStyle: "normal"
  }),
  yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t8, 2: r8 = "", 3: i9 }) => r8 == "normal" ? {
    fontVariantNumeric: "normal"
  } : {
    ["--tw-" + (i9 ? "numeric-fraction" : "pt".includes(r8[0]) ? "numeric-spacing" : r8 ? "numeric-figure" : t8)]: t8,
    fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",
    ...c4({
      "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)"
    })
  }),
  gt("tracking-", "letterSpacing"),
  gt("leading-", "lineHeight"),
  yt2("list-(inside|outside)", "listStylePosition"),
  gt("list-", "listStyleType"),
  yt2("list-", "listStyleType"),
  gt("placeholder-opacity-", "placeholderOpacity", ({ _: t8 }) => ({
    "&::placeholder": {
      "--tw-placeholder-opacity": t8
    }
  })),
  mt3("placeholder-", {
    property: "color",
    selector: "&::placeholder"
  }),
  yt2("text-(left|center|right|justify|start|end)", "textAlign"),
  yt2("text-(ellipsis|clip)", "textOverflow"),
  gt("text-opacity-", "textOpacity", "--tw-text-opacity"),
  mt3("text-", {
    property: "color"
  }),
  gt("text-", "fontSize", ({ _: t8 }) => typeof t8 == "string" ? {
    fontSize: t8
  } : {
    fontSize: t8[0],
    ...typeof t8[1] == "string" ? {
      lineHeight: t8[1]
    } : t8[1]
  }),
  gt("indent-", "textIndent"),
  yt2("(overline|underline|line-through)", "textDecorationLine"),
  yt2("no-underline", {
    textDecorationLine: "none"
  }),
  gt("underline-offset-", "textUnderlineOffset"),
  mt3("decoration-", {
    section: "textDecorationColor",
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  gt("decoration-", "textDecorationThickness"),
  yt2("decoration-", "textDecorationStyle"),
  yt2("(uppercase|lowercase|capitalize)", "textTransform"),
  yt2("normal-case", {
    textTransform: "none"
  }),
  yt2("truncate", {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }),
  yt2("align-", "verticalAlign"),
  yt2("whitespace-", "whiteSpace"),
  yt2("break-normal", {
    wordBreak: "normal",
    overflowWrap: "normal"
  }),
  yt2("break-words", {
    overflowWrap: "break-word"
  }),
  yt2("break-all", {
    wordBreak: "break-all"
  }),
  yt2("break-keep", {
    wordBreak: "keep-all"
  }),
  mt3("caret-", {
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  mt3("accent-", {
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t8 }) => `linear-gradient(to ${g6(t8, " ")},var(--tw-gradient-stops))`),
  mt3("from-", {
    section: "gradientColorStops",
    opacityVariable: false,
    opacitySection: "opacity"
  }, ({ _: t8 }) => ({
    "--tw-gradient-from": t8.value,
    "--tw-gradient-to": t8.color({
      opacityValue: "0"
    }),
    "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)"
  })),
  mt3("via-", {
    section: "gradientColorStops",
    opacityVariable: false,
    opacitySection: "opacity"
  }, ({ _: t8 }) => ({
    "--tw-gradient-to": t8.color({
      opacityValue: "0"
    }),
    "--tw-gradient-stops": `var(--tw-gradient-from),${t8.value},var(--tw-gradient-to)`
  })),
  mt3("to-", {
    section: "gradientColorStops",
    property: "--tw-gradient-to",
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  yt2("bg-(fixed|local|scroll)", "backgroundAttachment"),
  yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t8 }) => t8 + "-box"),
  yt2([
    "bg-(no-repeat|repeat(-[xy])?)",
    "bg-repeat-(round|space)"
  ], "backgroundRepeat"),
  yt2("bg-blend-", "backgroundBlendMode"),
  yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t8 }) => t8 + (t8 == "text" ? "" : "-box")),
  gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"),
  mt3("bg-", {
    section: "backgroundColor"
  }),
  gt("bg-", "backgroundImage"),
  gt("bg-", "backgroundPosition"),
  yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", y7),
  gt("bg-", "backgroundSize"),
  gt("rounded(?:$|-)", "borderRadius"),
  gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t8, _: r8 }) => {
    let i9 = {
      t: [
        "tl",
        "tr"
      ],
      r: [
        "tr",
        "br"
      ],
      b: [
        "bl",
        "br"
      ],
      l: [
        "bl",
        "tl"
      ]
    }[t8] || [
      t8,
      t8
    ];
    return {
      [`border-${g6(i9[0])}-radius`]: r8,
      [`border-${g6(i9[1])}-radius`]: r8
    };
  }),
  yt2("border-(collapse|separate)", "borderCollapse"),
  gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"),
  yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"),
  gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t8, _: r8 }) => ({
    ...c4({
      "--tw-border-spacing-x": "0",
      "--tw-border-spacing-y": "0"
    }),
    ["--tw-border-spacing" + (t8 || "-x")]: r8,
    ["--tw-border-spacing" + (t8 || "-y")]: r8,
    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
  })),
  mt3("border-([xytrbl])-", {
    section: "borderColor"
  }, f9("border", "Color")),
  mt3("border-"),
  gt("border-([xytrbl])(?:$|-)", "borderWidth", f9("border", "Width")),
  gt("border(?:$|-)", "borderWidth"),
  gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t8 }) => ({
    "&>:not([hidden])~:not([hidden])": {
      "--tw-divide-opacity": t8
    }
  })),
  yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t8 }) => ({
    "&>:not([hidden])~:not([hidden])": {
      borderStyle: t8
    }
  })),
  yt2("divide-([xy]-reverse)", ({ 1: t8 }) => ({
    "&>:not([hidden])~:not([hidden])": {
      ["--tw-divide-" + t8]: "1"
    }
  })),
  gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t8, _: r8 }) => {
    let i9 = {
      x: "lr",
      y: "tb"
    }[t8];
    return {
      "&>:not([hidden])~:not([hidden])": {
        [`--tw-divide-${t8}-reverse`]: "0",
        [`border-${g6(i9[0])}Width`]: `calc(${r8} * calc(1 - var(--tw-divide-${t8}-reverse)))`,
        [`border-${g6(i9[1])}Width`]: `calc(${r8} * var(--tw-divide-${t8}-reverse))`
      }
    };
  }),
  mt3("divide-", {
    property: "borderColor",
    selector: "&>:not([hidden])~:not([hidden])"
  }),
  gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"),
  mt3("ring-offset-", {
    property: "--tw-ring-offset-color",
    opacityVariable: false
  }),
  gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"),
  yt2("ring-inset", {
    "--tw-ring-inset": "inset"
  }),
  mt3("ring-", {
    property: "--tw-ring-color"
  }),
  gt("ring(?:$|-)", "ringWidth", ({ _: t8 }, { theme: r8 }) => ({
    ...c4({
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000",
      "&": {
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": r8("ringOffsetWidth", "", "0px"),
        "--tw-ring-offset-color": P4(r8("ringOffsetColor", "", "#fff")),
        "--tw-ring-color": P4(r8("ringColor", "", "#93c5fd"), {
          opacityVariable: "--tw-ring-opacity"
        }),
        "--tw-ring-opacity": r8("ringOpacity", "", "0.5")
      }
    }),
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t8} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
  })),
  mt3("shadow-", {
    section: "boxShadowColor",
    opacityVariable: false,
    opacitySection: "opacity"
  }, ({ _: t8 }) => ({
    "--tw-shadow-color": t8.value,
    "--tw-shadow": "var(--tw-shadow-colored)"
  })),
  gt("shadow(?:$|-)", "boxShadow", ({ _: t8 }) => ({
    ...c4({
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000"
    }),
    "--tw-shadow": s6(t8),
    "--tw-shadow-colored": s6(t8).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"),
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
  })),
  gt("(opacity)-"),
  yt2("mix-blend-", "mixBlendMode"),
  ...S9(),
  ...S9("backdrop-"),
  gt("transition(?:$|-)", "transitionProperty", (t8, { theme: r8 }) => ({
    transitionProperty: s6(t8),
    transitionTimingFunction: t8._ == "none" ? void 0 : s6(r8("transitionTimingFunction", "")),
    transitionDuration: t8._ == "none" ? void 0 : s6(r8("transitionDuration", ""))
  })),
  gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s6),
  gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s6),
  gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s6),
  gt("animate(?:$|-)", "animation", (t8, { theme: r8, h: i9, e: a9 }) => {
    let l9 = s6(t8), d8 = l9.split(" "), p9 = r8("keyframes", d8[0]);
    return p9 ? {
      ["@keyframes " + (d8[0] = a9(i9(d8[0])))]: p9,
      animation: d8.join(" ")
    } : {
      animation: l9
    };
  }),
  "(transform)-(none)",
  yt2("transform", m8),
  yt2("transform-(cpu|gpu)", ({ 1: t8 }) => ({
    "--tw-transform": z8(t8 == "gpu")
  })),
  gt("scale(-[xy])?-", "scale", ({ 1: t8, _: r8 }) => ({
    ["--tw-scale" + (t8 || "-x")]: r8,
    ["--tw-scale" + (t8 || "-y")]: r8,
    ...m8()
  })),
  gt("-?(rotate)-", "rotate", h7),
  gt("-?(translate-[xy])-", "translate", h7),
  gt("-?(skew-[xy])-", "skew", h7),
  yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", y7),
  "(appearance)-",
  gt("(columns)-"),
  "(columns)-(\\d+)",
  "(break-(?:before|after|inside))-",
  gt("(cursor)-"),
  "(cursor)-",
  yt2("snap-(none)", "scroll-snap-type"),
  yt2("snap-(x|y|both)", ({ 1: t8 }) => ({
    ...c4({
      "--tw-scroll-snap-strictness": "proximity"
    }),
    "scroll-snap-type": t8 + " var(--tw-scroll-snap-strictness)"
  })),
  yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"),
  yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"),
  yt2("snap-(normal|always)", "scroll-snap-stop"),
  yt2("scroll-(auto|smooth)", "scroll-behavior"),
  gt("scroll-p([xytrbl])?(?:$|-)", "padding", f9("scroll-padding")),
  gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", f9("scroll-margin")),
  yt2("touch-(auto|none|manipulation)", "touch-action"),
  yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t8, 2: r8, 3: i9 }) => ({
    ...c4({
      "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"
    }),
    [`--tw-${r8 ? "pan-x" : i9 ? "pan-y" : t8}`]: t8,
    "touch-action": "var(--tw-touch-action)"
  })),
  yt2("outline-none", {
    outline: "2px solid transparent",
    "outline-offset": "2px"
  }),
  yt2("outline", {
    outlineStyle: "solid"
  }),
  yt2("outline-(dashed|dotted|double)", "outlineStyle"),
  gt("-?(outline-offset)-"),
  mt3("outline-", {
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  gt("outline-", "outlineWidth"),
  "(pointer-events)-",
  gt("(will-change)-"),
  "(will-change)-",
  [
    "resize(?:-(none|x|y))?",
    "resize",
    ({ 1: t8 }) => ({
      x: "horizontal",
      y: "vertical"
    })[t8] || t8 || "both"
  ],
  yt2("select-(none|text|all|auto)", "userSelect"),
  mt3("fill-", {
    section: "fill",
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  mt3("stroke-", {
    section: "stroke",
    opacityVariable: false,
    opacitySection: "opacity"
  }),
  gt("stroke-", "strokeWidth"),
  yt2("sr-only", {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  }),
  yt2("not-sr-only", {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  })
];
function y7(t8) {
  return (typeof t8 == "string" ? t8 : t8[1]).replace(/-/g, " ").trim();
}
function x8(t8) {
  return (typeof t8 == "string" ? t8 : t8[1]).replace("col", "column");
}
function g6(t8, r8 = "-") {
  let i9 = [];
  for (let a9 of t8) i9.push({
    t: "top",
    r: "right",
    b: "bottom",
    l: "left"
  }[a9]);
  return i9.join(r8);
}
function s6(t8) {
  return t8 && "" + (t8._ || t8);
}
function k10({ $$: t8 }) {
  return ({
    r: "flex-",
    "": "flex-",
    w: "space-",
    u: "space-",
    n: "space-"
  }[t8[3] || ""] || "") + t8;
}
function f9(t8, r8 = "") {
  return ({ 1: i9, _: a9 }) => {
    let l9 = {
      x: "lr",
      y: "tb"
    }[i9] || i9 + i9;
    return l9 ? {
      ...He5(t8 + "-" + g6(l9[0]) + r8, a9),
      ...He5(t8 + "-" + g6(l9[1]) + r8, a9)
    } : He5(t8 + r8, a9);
  };
}
function S9(t8 = "") {
  let r8 = [
    "blur",
    "brightness",
    "contrast",
    "grayscale",
    "hue-rotate",
    "invert",
    t8 && "opacity",
    "saturate",
    "sepia",
    !t8 && "drop-shadow"
  ].filter(Boolean), i9 = {};
  for (let a9 of r8) i9[`--tw-${t8}${a9}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return i9 = {
    ...c4(i9),
    [`${t8}filter`]: r8.map((a9) => `var(--tw-${t8}${a9})`).join(" ")
  }, [
    `(${t8}filter)-(none)`,
    yt2(`${t8}filter`, i9),
    ...r8.map((a9) => gt(`${a9[0] == "h" ? "-?" : ""}(${t8}${a9})(?:$|-)`, a9, ({ 1: l9, _: d8 }) => ({
      [`--tw-${l9}`]: b7(d8).map((p9) => `${a9}(${p9})`).join(" "),
      ...i9
    })))
  ];
}
function h7({ 1: t8, _: r8 }) {
  return {
    ["--tw-" + t8]: r8,
    ...m8()
  };
}
function m8() {
  return {
    ...c4({
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      "--tw-transform": z8()
    }),
    transform: "var(--tw-transform)"
  };
}
function z8(t8) {
  return [
    t8 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))",
    "rotate(var(--tw-rotate))",
    "skewX(var(--tw-skew-x))",
    "skewY(var(--tw-skew-y))",
    "scaleX(var(--tw-scale-x))",
    "scaleY(var(--tw-scale-y))"
  ].join(" ");
}
function $5({ 1: t8, 2: r8 }) {
  return `${t8} ${r8} / ${t8} ${r8}`;
}
function C8({ 1: t8 }) {
  return `repeat(${t8},minmax(0,1fr))`;
}
function c4(t8) {
  return {
    "@layer defaults": {
      "*,::before,::after": t8,
      "::backdrop": t8
    }
  };
}

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/variants.mjs
var m9 = [
  [
    "sticky",
    "@supports ((position: -webkit-sticky) or (position:sticky))"
  ],
  [
    "motion-reduce",
    "@media (prefers-reduced-motion:reduce)"
  ],
  [
    "motion-safe",
    "@media (prefers-reduced-motion:no-preference)"
  ],
  [
    "print",
    "@media print"
  ],
  [
    "(portrait|landscape)",
    ({ 1: e8 }) => `@media (orientation:${e8})`
  ],
  [
    "contrast-(more|less)",
    ({ 1: e8 }) => `@media (prefers-contrast:${e8})`
  ],
  [
    "(first-(letter|line)|placeholder|backdrop|before|after)",
    ({ 1: e8 }) => `&::${e8}`
  ],
  [
    "(marker|selection)",
    ({ 1: e8 }) => `& *::${e8},&::${e8}`
  ],
  [
    "file",
    "&::file-selector-button"
  ],
  [
    "(first|last|only)",
    ({ 1: e8 }) => `&:${e8}-child`
  ],
  [
    "even",
    "&:nth-child(2n)"
  ],
  [
    "odd",
    "&:nth-child(odd)"
  ],
  [
    "open",
    "&[open]"
  ],
  [
    "(aria|data)-",
    ({ 1: e8, $$: r8 }, t8) => r8 && `&[${e8}-${t8.theme(e8, r8) || oe4(r8, "", t8) || `${r8}="true"`}]`
  ],
  [
    "((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",
    ({ 2: e8, 3: r8 = "", 4: t8, 5: a9 = "", 6: n5 = r8 }, { e: d8, h: l9, v: p9 }) => {
      let o7 = se2(a9) || (t8[0] == "[" ? t8 : p9(t8.slice(1)));
      return `${(o7.includes("&") ? o7 : "&" + o7).replace(/&/g, `:merge(.${d8(l9(e8 + n5))})`)}${e8[0] == "p" ? "~" : " "}&`;
    }
  ],
  [
    "(ltr|rtl)",
    ({ 1: e8 }) => `[dir="${e8}"] &`
  ],
  [
    "supports-",
    ({ $$: e8 }, r8) => {
      if (e8 &&= r8.theme("supports", e8) || oe4(e8, "", r8), e8) return e8.includes(":") || (e8 += ":var(--tw)"), /^\w*\s*\(/.test(e8) || (e8 = `(${e8})`), `@supports ${e8.replace(/\b(and|or|not)\b/g, " $1 ").trim()}`;
    }
  ],
  [
    "max-",
    ({ $$: e8 }, r8) => {
      if (e8 &&= r8.theme("screens", e8) || oe4(e8, "", r8), typeof e8 == "string") return `@media not all and (min-width:${e8})`;
    }
  ],
  [
    "min-",
    ({ $$: e8 }, r8) => (e8 &&= oe4(e8, "", r8)) && `@media (min-width:${e8})`
  ],
  [
    /^\[(.+)]$/,
    ({ 1: e8 }) => /[&@]/.test(e8) && se2(e8).replace(/[}]+$/, "").split("{")
  ]
];

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/base.mjs
function d6({ colors: r8, disablePreflight: e8 } = {}) {
  return {
    preflight: e8 ? void 0 : o4,
    theme: {
      ...c3,
      colors: {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        ...r8
      }
    },
    variants: m9,
    rules: j8,
    finalize(t8) {
      return t8.n && t8.d && t8.r.some((n5) => /^&::(before|after)$/.test(n5)) && !/(^|;)content:/.test(t8.d) ? {
        ...t8,
        d: "content:var(--tw-content);" + t8.d
      } : t8;
    }
  };
}

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/preset-tailwind.mjs
function a7({ disablePreflight: r8 } = {}) {
  return d6({
    colors: z7,
    disablePreflight: r8
  });
}

// deno:https://esm.sh/@twind/preset-typography@1.0.7/denonext/preset-typography.mjs
function y8({ className: e8 = "prose", defaultColor: p9 = "gray", extend: h10 = {}, colors: i9 = {} } = {}) {
  return i9 = {
    body: "700",
    headings: "900",
    lead: "600",
    links: "900",
    bold: "900",
    counters: "500",
    bullets: "300",
    hr: "200",
    quotes: "900",
    "quote-borders": "200",
    captions: "500",
    code: "900",
    "pre-code": "200",
    "pre-bg": "800",
    "th-borders": "300",
    "td-borders": "200",
    ...i9,
    dark: i9.dark === null ? null : {
      body: "300",
      headings: "#fff",
      lead: "400",
      links: "#fff",
      bold: "#fff",
      counters: "400",
      bullets: "600",
      hr: "700",
      quotes: "100",
      "quote-borders": "700",
      captions: "400",
      code: "#fff",
      "pre-code": "300",
      "pre-bg": "rgb(0 0 0 / 50%)",
      "th-borders": "600",
      "td-borders": "700",
      ...i9.dark
    }
  }, {
    variants: [
      [
        "headings",
        "h1,h2,h3,h4,h5,h6,th"
      ],
      [
        "h1"
      ],
      [
        "h2"
      ],
      [
        "h3"
      ],
      [
        "h4"
      ],
      [
        "h5"
      ],
      [
        "h6"
      ],
      [
        "p"
      ],
      [
        "a"
      ],
      [
        "blockquote"
      ],
      [
        "figure"
      ],
      [
        "figcaption"
      ],
      [
        "strong"
      ],
      [
        "em"
      ],
      [
        "code"
      ],
      [
        "pre"
      ],
      [
        "ol"
      ],
      [
        "ul"
      ],
      [
        "li"
      ],
      [
        "table"
      ],
      [
        "thead"
      ],
      [
        "tr"
      ],
      [
        "th"
      ],
      [
        "td"
      ],
      [
        "img"
      ],
      [
        "video"
      ],
      [
        "hr"
      ],
      [
        "lead",
        ".lead"
      ]
    ].map(([r8, o7 = r8]) => [
      `${e8}-${r8}`,
      (n5, l9) => v11(e8, o7[0] == "." ? "." + l9.e(l9.h(o7.slice(1))) : o7, l9, (g9) => `& :is(${g9.trim()})`)
    ]),
    rules: [
      [
        `(lead|not-${e8})`,
        ({ 1: r8 }, { h: o7 }) => [
          {
            c: o7(r8)
          }
        ]
      ],
      [
        `${e8}-invert`,
        {
          "@layer base": {
            "--tw-prose-body": "var(--tw-prose-invert-body)",
            "--tw-prose-headings": "var(--tw-prose-invert-headings)",
            "--tw-prose-lead": "var(--tw-prose-invert-lead)",
            "--tw-prose-links": "var(--tw-prose-invert-links)",
            "--tw-prose-bold": "var(--tw-prose-invert-bold)",
            "--tw-prose-counters": "var(--tw-prose-invert-counters)",
            "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
            "--tw-prose-hr": "var(--tw-prose-invert-hr)",
            "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
            "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
            "--tw-prose-captions": "var(--tw-prose-invert-captions)",
            "--tw-prose-code": "var(--tw-prose-invert-code)",
            "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
            "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
            "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
            "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)"
          }
        }
      ],
      [
        e8 + "-",
        ({ $$: r8 }, o7) => {
          let n5 = w3(o7.theme("fontSize", r8));
          return n5 && {
            "@layer components": n5
          };
        }
      ],
      [
        e8 + "-",
        ({ $$: r8 }, o7) => s8(r8, o7)
      ],
      [
        e8,
        (r8, o7) => ({
          ...s8(p9, o7),
          "@layer base": [
            b9(e8, o7, {
              a: {
                color: "var(--tw-prose-links)",
                textDecorationLine: "underline",
                fontWeight: "500"
              },
              strong: {
                color: "var(--tw-prose-bold)",
                fontWeight: "600"
              },
              "a strong,blockquote strong,thead th strong": {
                color: "inherit"
              },
              ul: {
                listStyleType: "disc"
              },
              ol: {
                listStyleType: "decimal"
              },
              'ol[type="A"]': {
                listStyleType: "upper-alpha"
              },
              'ol[type="a"]': {
                listStyleType: "lower-alpha"
              },
              'ol[type="A" s]': {
                listStyleType: "upper-alpha"
              },
              'ol[type="a" s]': {
                listStyleType: "lower-alpha"
              },
              'ol[type="I"]': {
                listStyleType: "upper-roman"
              },
              'ol[type="i"]': {
                listStyleType: "lower-roman"
              },
              'ol[type="I" s]': {
                listStyleType: "upper-roman"
              },
              'ol[type="i" s]': {
                listStyleType: "lower-roman"
              },
              'ol[type="1"]': {
                listStyleType: "decimal"
              },
              "ol,ul": {
                marginTop: t6(20, 16),
                marginBottom: t6(20, 16),
                paddingLeft: t6(26, 16)
              },
              li: {
                marginTop: t6(8, 16),
                marginBottom: t6(8, 16)
              },
              "ol>li,ul>li": {
                paddingLeft: t6(6, 16)
              },
              ">ul>li p": {
                marginTop: t6(12, 16),
                marginBottom: t6(12, 16)
              },
              ">ul>li>*:first-child,>ol>li>*:last-child": {
                marginTop: t6(20, 16)
              },
              ">ul>li>*:last-child,>ol>li>*:last-child": {
                marginBottom: t6(20, 16)
              },
              "ol>li::marker": {
                fontWeight: "400",
                color: "var(--tw-prose-counters)"
              },
              "ul>li::marker": {
                color: "var(--tw-prose-bullets)"
              },
              "ul ul,ul ol,ol ul,ol ol": {
                marginTop: t6(12, 16),
                marginBottom: t6(12, 16)
              },
              hr: {
                borderColor: "var(--tw-prose-hr)",
                borderTopWidth: "1",
                marginTop: t6(48, 16),
                marginBottom: t6(48, 16)
              },
              blockquote: {
                marginTop: t6(32, 20),
                marginBottom: t6(32, 20),
                paddingLeft: t6(20, 20),
                fontWeight: "500",
                fontStyle: "italic",
                color: "var(--tw-prose-quotes)",
                borderLeftWidth: "0.25rem",
                borderLeftColor: "var(--tw-prose-quote-borders)",
                quotes: '"\\201C""\\201D""\\2018""\\2019"'
              },
              "blockquote p:first-of-type::before": {
                content: "open-quote"
              },
              "blockquote p:last-of-type::after": {
                content: "close-quote"
              },
              p: {
                marginTop: t6(20, 16),
                marginBottom: t6(20, 16)
              },
              h1: {
                color: "var(--tw-prose-headings)",
                fontWeight: "800",
                fontSize: t6(36, 16),
                marginTop: "0",
                marginBottom: t6(32, 36),
                lineHeight: 1.15
              },
              "h1 strong": {
                fontWeight: "900",
                color: "inherit"
              },
              h2: {
                color: "var(--tw-prose-headings)",
                fontWeight: "700",
                fontSize: t6(24, 16),
                marginTop: t6(48, 24),
                marginBottom: t6(24, 24),
                lineHeight: "1.35"
              },
              "h2 strong": {
                fontWeight: "800",
                color: "inherit"
              },
              h3: {
                color: "var(--tw-prose-headings)",
                fontWeight: "600",
                fontSize: t6(20, 16),
                marginTop: t6(32, 20),
                marginBottom: t6(12, 20),
                lineHeight: "1.6"
              },
              "h3 strong": {
                fontWeight: "700",
                color: "inherit"
              },
              h4: {
                color: "var(--tw-prose-headings)",
                fontWeight: "600",
                marginTop: t6(24, 16),
                marginBottom: t6(8, 16),
                lineHeight: "1.5"
              },
              "h4 strong": {
                fontWeight: "700",
                color: "inherit"
              },
              "hr+*,h2+*,h3+*,h4+*": {
                marginTop: "0"
              },
              "img,video,figure": {
                marginTop: t6(32, 16),
                marginBottom: t6(32, 16)
              },
              "figure>*": {
                marginTop: "0",
                marginBottom: "0"
              },
              figcaption: {
                color: "var(--tw-prose-captions)",
                fontSize: t6(14, 16),
                lineHeight: "1.4",
                marginTop: t6(12, 14)
              },
              code: {
                color: "var(--tw-prose-code)",
                fontWeight: "600",
                fontSize: t6(14, 16)
              },
              "code::before,code::after": {
                content: '"`"'
              },
              "h2 code": {
                fontSize: t6(21, 24)
              },
              "h3 code": {
                fontSize: t6(18, 20)
              },
              "a code,h1 code,h2 code,h3 code,h4 code,blockquote code,thead th code": {
                color: "inherit"
              },
              pre: {
                color: "var(--tw-prose-pre-code)",
                backgroundColor: "var(--tw-prose-pre-bg)",
                overflowX: "auto",
                fontWeight: "400",
                fontSize: t6(14, 16),
                lineHeight: "1.7",
                marginTop: t6(24, 14),
                marginBottom: t6(24, 14),
                borderRadius: "0.375rem",
                paddingTop: t6(12, 14),
                paddingRight: t6(16, 14),
                paddingBottom: t6(12, 14),
                paddingLeft: t6(16, 14)
              },
              "pre code": {
                backgroundColor: "transparent",
                borderWidth: "0",
                borderRadius: "0",
                padding: "0",
                fontWeight: "inherit",
                color: "inherit",
                fontSize: "inherit",
                fontFamily: "inherit",
                lineHeight: "inherit"
              },
              "pre code::before": {
                content: "none"
              },
              "pre code::after": {
                content: "none"
              },
              table: {
                width: "100%",
                tableLayout: "auto",
                textAlign: "left",
                marginTop: t6(32, 16),
                marginBottom: t6(32, 16),
                fontSize: t6(14, 16),
                lineHeight: "1.7"
              },
              thead: {
                borderBottomWidth: "1px",
                borderBottomColor: "var(--tw-prose-th-borders)"
              },
              "thead th": {
                color: "var(--tw-prose-headings)",
                fontWeight: "600",
                verticalAlign: "bottom",
                paddingRight: t6(8, 14),
                paddingBottom: t6(8, 14),
                paddingLeft: t6(8, 14)
              },
              "thead th:first-child": {
                paddingLeft: "0"
              },
              "thead th:last-child": {
                paddingRight: "0"
              },
              "tbody tr": {
                borderBottomWidth: "1px",
                borderBottomColor: "var(--tw-prose-td-borders)"
              },
              "tbody tr:last-child": {
                borderBottomWidth: "0"
              },
              "tbody td,tfoot td": {
                verticalAlign: "baseline",
                paddingTop: t6(8, 14),
                paddingRight: t6(8, 14),
                paddingBottom: t6(8, 14),
                paddingLeft: t6(8, 14)
              },
              "tbody td:first-child,tfoot td:first-child": {
                paddingLeft: "0"
              },
              "tbody td:last-child,tfoot td:last-child": {
                paddingRight: "0"
              },
              [`.${o7.e(o7.h("lead"))}`]: {
                color: "var(--tw-prose-lead)",
                fontSize: t6(20, 16),
                lineHeight: "1.6",
                marginTop: t6(24, 20),
                marginBottom: t6(24, 20)
              },
              ">:first-child": {
                marginTop: "0"
              },
              ">:last-child": {
                marginBottom: "0"
              }
            }),
            b9(e8, o7, h10)
          ],
          "@layer components": {
            ...w3(o7.theme("fontSize", "base")),
            color: "var(--tw-prose-body)",
            maxWidth: "theme(max-w.prose, 65ch)"
          }
        })
      ]
    ]
  };
  function s8(r8, o7) {
    let n5 = {}, l9 = {}, g9 = (d8, a9, f11) => {
      let c6 = o7.theme(`colors.${r8}.${a9}`, a9);
      f11["--tw-prose-" + d8] = P4(c6);
      let m13 = f11 != l9 && o7.d("colors", `${r8}-${a9}`, c6);
      m13 && (l9["--tw-prose-" + d8] = P4(m13));
    };
    for (let d8 in i9) {
      let a9 = i9[d8];
      d8 != "dark" && a9 && g9(d8, a9, n5);
    }
    for (let d8 in i9.dark || {}) {
      let a9 = i9.dark[d8];
      a9 && (i9.dark ? g9("invert-" + d8, a9, n5) : g9(d8, a9, l9));
    }
    return Object.keys(n5).length ? {
      "@layer defaults": {
        "&": n5,
        [o7.v("dark")]: l9
      }
    } : void 0;
  }
}
function b9(e8, p9, h10) {
  let i9 = {};
  for (let s8 in h10) i9[v11(e8, s8, p9, (r8) => `.${p9.e(p9.h(e8))}${r8}`)] = h10[s8];
  return i9;
}
function v11(e8, p9, { e: h10, h: i9 }, s8) {
  return p9.replace(/^[^>:]+$|(>)?((?:[^:,]+(?::[\w-]+)?)|:[\w-]+)(::[\w-]+)?/g, (r8, o7 = " ", n5 = r8, l9 = "") => s8(`${o7}:where(${n5}):not(:where(.${h10(i9("not-" + e8))} *))${l9}`));
}
function w3(e8) {
  return e8 ? typeof e8 == "string" ? {
    fontSize: e8
  } : {
    fontSize: e8[0],
    ...typeof e8[1] == "string" ? {
      lineHeight: e8[1]
    } : e8[1]
  } : void 0;
}
function t6(e8, p9) {
  return `${(e8 / p9).toFixed(3).replace(/^0|\.?0+$/g, "")}em`;
}

// deno:https://esm.sh/@twind/preset-tailwind@1.1.4/denonext/defaultTheme.mjs
var r6 = {
  ...c3,
  colors: z7
};

// deno:https://esm.sh/@twind/preset-tailwind-forms@1.1.2/denonext/preset-tailwind-forms.mjs
var [b10, h8] = r6.fontSize.base;
var { spacing: e6, borderWidth: p7, borderRadius: u8 } = r6;
function m10({ strategy: r8 } = {}) {
  let d8 = {};
  return r8 !== "base" && (d8.rules = [
    [
      "(" + [
        ...new Set(g7.flatMap((a9) => a9.c).filter(Boolean))
      ].join("|") + ")",
      (a9, i9) => ({
        "@layer base": g7.filter((n5) => n5.c?.includes(a9[1])).map(({ c: n5, s: t8 }) => ({
          ["" + n5.map((w5) => "." + i9.e(i9.h(w5)))]: typeof t8 == "function" ? t8(i9) : t8
        }))
      })
    ]
  ]), r8 !== "class" && (d8.preflight = (a9) => {
    let i9 = {};
    for (let { b: n5, s: t8 } of g7) i9["" + n5] = typeof t8 == "function" ? t8(a9) : t8;
    return i9;
  }), d8;
}
var g7 = [
  {
    b: [
      "[type='text']",
      "[type='email']",
      "[type='url']",
      "[type='password']",
      "[type='number']",
      "[type='date']",
      "[type='datetime-local']",
      "[type='month']",
      "[type='search']",
      "[type='tel']",
      "[type='time']",
      "[type='week']",
      "[multiple]",
      "textarea",
      "select"
    ],
    c: [
      "form-input",
      "form-textarea",
      "form-select",
      "form-multiselect"
    ],
    s: ({ theme: r8 }) => ({
      appearance: "none",
      "background-color": "#fff",
      "border-color": P4(r8("colors.gray.500", e4[500])),
      "border-width": p7.DEFAULT,
      "border-radius": u8.none,
      "padding-top": e6[2],
      "padding-right": e6[3],
      "padding-bottom": e6[2],
      "padding-left": e6[3],
      "font-size": b10,
      "line-height": h8,
      "--tw-shadow": "0 0 #0000",
      "&:focus": {
        outline: "2px solid transparent",
        "outline-offset": "2px",
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": "0px",
        "--tw-ring-offset-color": "#fff",
        "--tw-ring-color": P4(r8("colors.blue.600", u7[600])),
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
        "border-color": P4(r8("colors.blue.600", u7[600]))
      }
    })
  },
  {
    b: [
      "input",
      "textarea"
    ],
    c: [
      "form-input",
      "form-textarea"
    ],
    s: ({ theme: r8 }) => ({
      "&::placeholder": {
        color: P4(r8("colors.gray.500", e4[500])),
        opacity: "1"
      }
    })
  },
  {
    b: [
      ""
    ],
    c: [
      "form-input"
    ],
    s: {
      "&::-webkit-datetime-edit-fields-wrapper": {
        padding: "0"
      },
      "&::-webkit-date-and-time-value": {
        "min-height": "1.5em"
      }
    }
  },
  {
    b: [
      "select"
    ],
    c: [
      "form-select"
    ],
    s: ({ theme: r8 }) => ({
      "background-image": `url("${l7(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${P4(r8("colors.gray.500", e4[500]))}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,
      "background-position": `right ${e6[2]} center`,
      "background-repeat": "no-repeat",
      "background-size": "1.5em 1.5em",
      "padding-right": e6[10],
      "color-adjust": "exact"
    })
  },
  {
    b: [
      "[multiple]"
    ],
    s: {
      "background-image": "initial",
      "background-position": "initial",
      "background-repeat": "unset",
      "background-size": "initial",
      "padding-right": e6[3],
      "color-adjust": "unset"
    }
  },
  {
    b: [
      "[type='checkbox']",
      "[type='radio']"
    ],
    c: [
      "form-checkbox",
      "form-radio"
    ],
    s: ({ theme: r8 }) => ({
      appearance: "none",
      padding: "0",
      "color-adjust": "exact",
      display: "inline-block",
      "vertical-align": "middle",
      "background-origin": "border-box",
      "user-select": "none",
      "flex-shrink": "0",
      height: e6[4],
      width: e6[4],
      color: P4(r8("colors.blue.600", u7[600])),
      "background-color": "#fff",
      "border-color": P4(r8("colors.gray.500", e4[500])),
      "border-width": p7.DEFAULT,
      "--tw-shadow": "0 0 #0000",
      "&:focus": {
        outline: "2px solid transparent",
        "outline-offset": "2px",
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": "2px",
        "--tw-ring-offset-color": "#fff",
        "--tw-ring-color": P4(r8("colors.blue.600", u7[600])),
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"
      },
      "&:checked": {
        "border-color": "transparent",
        "background-color": "currentColor",
        "background-size": "100% 100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "&:hover,&:focus": {
          "border-color": "transparent",
          "background-color": "currentColor"
        }
      }
    })
  },
  {
    b: [
      "[type='checkbox']"
    ],
    c: [
      "form-checkbox"
    ],
    s: {
      "border-radius": u8.none,
      "&:checked": {
        "background-image": `url("${l7('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`
      },
      "&:indeterminate": {
        "background-image": `url("${l7('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,
        "border-color": "transparent",
        "background-color": "currentColor",
        "background-size": "100% 100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "&:hover,&:focus": {
          "border-color": "transparent",
          "background-color": "currentColor"
        }
      }
    }
  },
  {
    b: [
      "[type='radio']"
    ],
    c: [
      "form-radio"
    ],
    s: {
      "border-radius": "100%",
      "&:checked": {
        "background-image": `url("${l7('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`
      }
    }
  },
  {
    b: [
      "[type='file']"
    ],
    s: {
      background: "unset",
      "border-color": "inherit",
      "border-width": "0",
      "border-radius": "0",
      padding: "0",
      "font-size": "unset",
      "line-height": "inherit",
      "&:focus": {
        outline: [
          "1px solid ButtonText",
          "1px auto -webkit-focus-ring-color"
        ]
      }
    }
  }
];
function k11(r8) {
  switch (r8) {
    case "%20":
      return " ";
    case "%3D":
      return "=";
    case "%3A":
      return ":";
    case "%2F":
      return "/";
    default:
      return r8.toLowerCase();
  }
}
function l7(r8) {
  return "data:image/svg+xml," + encodeURIComponent(r8.trim().replace(/\s+/g, " ").replace(/"/g, "'")).replace(/%[\dA-F]{2}/g, k11);
}

// deno:https://esm.sh/@twind/preset-radix-ui@1.0.7/denonext/darkColor.mjs
function o5(r8, a9, { theme: e8 }) {
  return e8(r8, a9.replace(/^([a-z]+)($|[.-])/, "$1Dark$2"));
}

// deno:https://esm.sh/@twind/preset-radix-ui@1.0.7/denonext/defaultTheme.mjs
var a8 = {
  1: "#fefdfb",
  2: "#fff9ed",
  3: "#fff4d5",
  4: "#ffecbc",
  5: "#ffe3a2",
  6: "#ffd386",
  7: "#f3ba63",
  8: "#ee9d2b",
  9: "#ffb224",
  10: "#ffa01c",
  11: "#ad5700",
  12: "#4e2009"
};
var d7 = {
  1: "#1f1300",
  2: "#271700",
  3: "#341c00",
  4: "#3f2200",
  5: "#4a2900",
  6: "#573300",
  7: "#693f05",
  8: "#824e00",
  9: "#ffb224",
  10: "#ffcb47",
  11: "#f1a10d",
  12: "#fef3dd"
};
var c5 = {
  1: "#fbfdff",
  2: "#f5faff",
  3: "#edf6ff",
  4: "#e1f0ff",
  5: "#cee7fe",
  6: "#b7d9f8",
  7: "#96c7f2",
  8: "#5eb0ef",
  9: "#0090ff",
  10: "#0081f1",
  11: "#006adc",
  12: "#00254d"
};
var b11 = {
  1: "#0f1720",
  2: "#0f1b2d",
  3: "#10243e",
  4: "#102a4c",
  5: "#0f3058",
  6: "#0d3868",
  7: "#0a4481",
  8: "#0954a5",
  9: "#0090ff",
  10: "#369eff",
  11: "#52a9ff",
  12: "#eaf6ff"
};
var s7 = {
  1: "#fdfcfc",
  2: "#fdf8f6",
  3: "#f8f1ee",
  4: "#f2e8e4",
  5: "#eaddd7",
  6: "#e0cec7",
  7: "#d2bab0",
  8: "#bfa094",
  9: "#a18072",
  10: "#977669",
  11: "#846358",
  12: "#43302b"
};
var r7 = {
  1: "#191514",
  2: "#1f1917",
  3: "#2a211f",
  4: "#332824",
  5: "#3b2e29",
  6: "#453530",
  7: "#57433c",
  8: "#74594e",
  9: "#a18072",
  10: "#b08c7d",
  11: "#cba393",
  12: "#f9ede7"
};
var o6 = {
  1: "#fefdfc",
  2: "#fcf9f6",
  3: "#f8f1ea",
  4: "#f4e9dd",
  5: "#efddcc",
  6: "#e8cdb5",
  7: "#ddb896",
  8: "#d09e72",
  9: "#ad7f58",
  10: "#a07653",
  11: "#886349",
  12: "#3f2c22"
};
var k12 = {
  1: "#1a1513",
  2: "#221813",
  3: "#2e201a",
  4: "#36261e",
  5: "#3e2d22",
  6: "#493528",
  7: "#5c4332",
  8: "#775940",
  9: "#ad7f58",
  10: "#bd8b60",
  11: "#dba16e",
  12: "#faf0e5"
};
var l8 = {
  1: "#fffcfd",
  2: "#fff7fb",
  3: "#feeff6",
  4: "#fce5f0",
  5: "#f9d8e7",
  6: "#f4c6db",
  7: "#edadc8",
  8: "#e58fb1",
  9: "#e93d82",
  10: "#e03177",
  11: "#d31e66",
  12: "#3d0d1d"
};
var D7 = {
  1: "#1d1418",
  2: "#27141c",
  3: "#3c1827",
  4: "#481a2d",
  5: "#541b33",
  6: "#641d3b",
  7: "#801d45",
  8: "#ae1955",
  9: "#e93d82",
  10: "#f04f88",
  11: "#f76190",
  12: "#feecf4"
};
var t7 = {
  1: "#fafdfe",
  2: "#f2fcfd",
  3: "#e7f9fb",
  4: "#d8f3f6",
  5: "#c4eaef",
  6: "#aadee6",
  7: "#84cdda",
  8: "#3db9cf",
  9: "#05a2c2",
  10: "#0894b3",
  11: "#0c7792",
  12: "#04313c"
};
var n4 = {
  1: "#07191d",
  2: "#061e24",
  3: "#072830",
  4: "#07303b",
  5: "#073844",
  6: "#064150",
  7: "#045063",
  8: "#00647d",
  9: "#05a2c2",
  10: "#00b1cc",
  11: "#00c2d7",
  12: "#e1f8fa"
};
var m11 = {
  1: "#fdfdfc",
  2: "#fbf9f2",
  3: "#f5f2e9",
  4: "#eeeadd",
  5: "#e5dfd0",
  6: "#dad1bd",
  7: "#cbbda4",
  8: "#b8a383",
  9: "#978365",
  10: "#8c795d",
  11: "#776750",
  12: "#3b352b"
};
var i8 = {
  1: "#171613",
  2: "#1c1a15",
  3: "#26231c",
  4: "#2e2a21",
  5: "#353026",
  6: "#3e382c",
  7: "#504737",
  8: "#6b5d48",
  9: "#978365",
  10: "#a59071",
  11: "#bfa888",
  12: "#f7f4e7"
};
var g8 = {
  1: "#fbfefb",
  2: "#f3fcf3",
  3: "#ebf9eb",
  4: "#dff3df",
  5: "#ceebcf",
  6: "#b7dfba",
  7: "#97cf9c",
  8: "#65ba75",
  9: "#46a758",
  10: "#3d9a50",
  11: "#297c3b",
  12: "#1b311e"
};
var p8 = {
  1: "#0d1912",
  2: "#0f1e13",
  3: "#132819",
  4: "#16301d",
  5: "#193921",
  6: "#1d4427",
  7: "#245530",
  8: "#2f6e3b",
  9: "#46a758",
  10: "#55b467",
  11: "#63c174",
  12: "#e5fbeb"
};
var u9 = {
  1: "#fcfcfc",
  2: "#f8f8f8",
  3: "#f3f3f3",
  4: "#ededed",
  5: "#e8e8e8",
  6: "#e2e2e2",
  7: "#dbdbdb",
  8: "#c7c7c7",
  9: "#8f8f8f",
  10: "#858585",
  11: "#6f6f6f",
  12: "#171717"
};
var y9 = {
  1: "#161616",
  2: "#1c1c1c",
  3: "#232323",
  4: "#282828",
  5: "#2e2e2e",
  6: "#343434",
  7: "#3e3e3e",
  8: "#505050",
  9: "#707070",
  10: "#7e7e7e",
  11: "#a0a0a0",
  12: "#ededed"
};
var v12 = {
  1: "#fbfefc",
  2: "#f2fcf5",
  3: "#e9f9ee",
  4: "#ddf3e4",
  5: "#ccebd7",
  6: "#b4dfc4",
  7: "#92ceac",
  8: "#5bb98c",
  9: "#30a46c",
  10: "#299764",
  11: "#18794e",
  12: "#153226"
};
var w4 = {
  1: "#0d1912",
  2: "#0c1f17",
  3: "#0f291e",
  4: "#113123",
  5: "#133929",
  6: "#164430",
  7: "#1b543a",
  8: "#236e4a",
  9: "#30a46c",
  10: "#3cb179",
  11: "#4cc38a",
  12: "#e5fbeb"
};
var x9 = {
  1: "#fdfdfe",
  2: "#f8faff",
  3: "#f0f4ff",
  4: "#e6edfe",
  5: "#d9e2fc",
  6: "#c6d4f9",
  7: "#aec0f5",
  8: "#8da4ef",
  9: "#3e63dd",
  10: "#3a5ccc",
  11: "#3451b2",
  12: "#101d46"
};
var _7 = {
  1: "#131620",
  2: "#15192d",
  3: "#192140",
  4: "#1c274f",
  5: "#1f2c5c",
  6: "#22346e",
  7: "#273e89",
  8: "#2f4eb2",
  9: "#3e63dd",
  10: "#5373e7",
  11: "#849dff",
  12: "#eef1fd"
};
var z9 = {
  1: "#fcfdfa",
  2: "#f7fcf0",
  3: "#eefadc",
  4: "#e4f7c7",
  5: "#d7f2b0",
  6: "#c9e894",
  7: "#b1d16a",
  8: "#94ba2c",
  9: "#99d52a",
  10: "#93c926",
  11: "#5d770d",
  12: "#263209"
};
var h9 = {
  1: "#141807",
  2: "#181d08",
  3: "#1e260d",
  4: "#252e0f",
  5: "#2b3711",
  6: "#344213",
  7: "#415215",
  8: "#536716",
  9: "#99d52a",
  10: "#c4f042",
  11: "#87be22",
  12: "#effbdd"
};
var j9 = {
  1: "#fdfcfd",
  2: "#f9f8f9",
  3: "#f4f2f4",
  4: "#eeedef",
  5: "#e9e8ea",
  6: "#e4e2e4",
  7: "#dcdbdd",
  8: "#c8c7cb",
  9: "#908e96",
  10: "#86848d",
  11: "#6f6e77",
  12: "#1a1523"
};
var q8 = {
  1: "#161618",
  2: "#1c1c1f",
  3: "#232326",
  4: "#28282c",
  5: "#2e2e32",
  6: "#34343a",
  7: "#3e3e44",
  8: "#504f57",
  9: "#706f78",
  10: "#7e7d86",
  11: "#a09fa6",
  12: "#ededef"
};
var A5 = {
  1: "#f9fefd",
  2: "#effefa",
  3: "#e1fbf4",
  4: "#d2f7ed",
  5: "#c0efe3",
  6: "#a5e4d4",
  7: "#7dd4c0",
  8: "#40c4aa",
  9: "#70e1c8",
  10: "#69d9c1",
  11: "#147d6f",
  12: "#09342e"
};
var B6 = {
  1: "#081917",
  2: "#05201e",
  3: "#052926",
  4: "#04312c",
  5: "#033a34",
  6: "#01453d",
  7: "#00564a",
  8: "#006d5b",
  9: "#70e1c8",
  10: "#95f3d9",
  11: "#25d0ab",
  12: "#e7fcf7"
};
var C9 = {
  1: "#fcfdfc",
  2: "#f8faf8",
  3: "#f2f4f2",
  4: "#ecefec",
  5: "#e6e9e6",
  6: "#e0e4e0",
  7: "#d8dcd8",
  8: "#c3c8c2",
  9: "#8b918a",
  10: "#818780",
  11: "#6b716a",
  12: "#141e12"
};
var E10 = {
  1: "#151715",
  2: "#1a1d19",
  3: "#20241f",
  4: "#262925",
  5: "#2b2f2a",
  6: "#313530",
  7: "#3b3f3a",
  8: "#4c514b",
  9: "#687366",
  10: "#778175",
  11: "#9aa299",
  12: "#eceeec"
};
var F6 = {
  1: "#fefcfb",
  2: "#fef8f4",
  3: "#fff1e7",
  4: "#ffe8d7",
  5: "#ffdcc3",
  6: "#ffcca7",
  7: "#ffb381",
  8: "#fa934e",
  9: "#f76808",
  10: "#ed5f00",
  11: "#bd4b00",
  12: "#451e11"
};
var G9 = {
  1: "#1f1206",
  2: "#2b1400",
  3: "#391a03",
  4: "#441f04",
  5: "#4f2305",
  6: "#5f2a06",
  7: "#763205",
  8: "#943e00",
  9: "#f76808",
  10: "#ff802b",
  11: "#ff8b3e",
  12: "#feeadd"
};
var H5 = {
  1: "#fffcfe",
  2: "#fff7fc",
  3: "#feeef8",
  4: "#fce5f3",
  5: "#f9d8ec",
  6: "#f3c6e2",
  7: "#ecadd4",
  8: "#e38ec3",
  9: "#d6409f",
  10: "#d23197",
  11: "#cd1d8d",
  12: "#3b0a2a"
};
var I5 = {
  1: "#1f121b",
  2: "#271421",
  3: "#3a182f",
  4: "#451a37",
  5: "#501b3f",
  6: "#601d48",
  7: "#7a1d5a",
  8: "#a71873",
  9: "#d6409f",
  10: "#e34ba9",
  11: "#f65cb6",
  12: "#feebf7"
};
var J4 = {
  1: "#fefcff",
  2: "#fff8ff",
  3: "#fceffc",
  4: "#f9e5f9",
  5: "#f3d9f4",
  6: "#ebc8ed",
  7: "#dfafe3",
  8: "#cf91d8",
  9: "#ab4aba",
  10: "#a43cb4",
  11: "#9c2bad",
  12: "#340c3b"
};
var K8 = {
  1: "#1d131d",
  2: "#251425",
  3: "#341a34",
  4: "#3e1d40",
  5: "#48214b",
  6: "#542658",
  7: "#692d6f",
  8: "#883894",
  9: "#ab4aba",
  10: "#bd54c6",
  11: "#d864d8",
  12: "#fbecfc"
};
var L5 = {
  1: "#fefcfe",
  2: "#fdfaff",
  3: "#f9f1fe",
  4: "#f3e7fc",
  5: "#eddbf9",
  6: "#e3ccf4",
  7: "#d3b4ed",
  8: "#be93e4",
  9: "#8e4ec6",
  10: "#8445bc",
  11: "#793aaf",
  12: "#2b0e44"
};
var M4 = {
  1: "#1b141d",
  2: "#221527",
  3: "#301a3a",
  4: "#3a1e48",
  5: "#432155",
  6: "#4e2667",
  7: "#5f2d84",
  8: "#7938b2",
  9: "#8e4ec6",
  10: "#9d5bd2",
  11: "#bf7af0",
  12: "#f7ecfc"
};
var N3 = {
  1: "#fffcfc",
  2: "#fff8f8",
  3: "#ffefef",
  4: "#ffe5e5",
  5: "#fdd8d8",
  6: "#f9c6c6",
  7: "#f3aeaf",
  8: "#eb9091",
  9: "#e5484d",
  10: "#dc3d43",
  11: "#cd2b31",
  12: "#381316"
};
var O5 = {
  1: "#1f1315",
  2: "#291415",
  3: "#3c181a",
  4: "#481a1d",
  5: "#541b1f",
  6: "#671e22",
  7: "#822025",
  8: "#aa2429",
  9: "#e5484d",
  10: "#f2555a",
  11: "#ff6369",
  12: "#feecee"
};
var P6 = {
  1: "#fbfdfc",
  2: "#f8faf9",
  3: "#f1f4f3",
  4: "#ecefed",
  5: "#e6e9e8",
  6: "#dfe4e2",
  7: "#d7dcda",
  8: "#c2c9c6",
  9: "#8a918e",
  10: "#808784",
  11: "#6a716e",
  12: "#111c18"
};
var Q4 = {
  1: "#141716",
  2: "#191d1b",
  3: "#1f2421",
  4: "#252a27",
  5: "#2a2f2c",
  6: "#303633",
  7: "#393f3c",
  8: "#4a524e",
  9: "#66736d",
  10: "#75817b",
  11: "#99a29e",
  12: "#eceeed"
};
var R7 = {
  1: "#fdfdfc",
  2: "#f9f9f8",
  3: "#f3f3f2",
  4: "#eeeeec",
  5: "#e9e9e6",
  6: "#e3e3e0",
  7: "#dbdbd7",
  8: "#c8c7c1",
  9: "#90908c",
  10: "#868682",
  11: "#706f6c",
  12: "#1b1b18"
};
var S10 = {
  1: "#161615",
  2: "#1c1c1a",
  3: "#232320",
  4: "#282826",
  5: "#2e2e2b",
  6: "#353431",
  7: "#3e3e3a",
  8: "#51504b",
  9: "#717069",
  10: "#7f7e77",
  11: "#a1a09a",
  12: "#ededec"
};
var T7 = {
  1: "#f9feff",
  2: "#f1fcff",
  3: "#e4f9ff",
  4: "#d5f4fd",
  5: "#c1ecf9",
  6: "#a4dff1",
  7: "#79cfea",
  8: "#2ebde5",
  9: "#68ddfd",
  10: "#5fd4f4",
  11: "#0078a1",
  12: "#003242"
};
var U8 = {
  1: "#0c1820",
  2: "#071d2a",
  3: "#082636",
  4: "#082d41",
  5: "#08354c",
  6: "#083e59",
  7: "#064b6b",
  8: "#005d85",
  9: "#68ddfd",
  10: "#8ae8ff",
  11: "#2ec8ee",
  12: "#eaf8ff"
};
var V7 = {
  1: "#fbfcfd",
  2: "#f8f9fa",
  3: "#f1f3f5",
  4: "#eceef0",
  5: "#e6e8eb",
  6: "#dfe3e6",
  7: "#d7dbdf",
  8: "#c1c8cd",
  9: "#889096",
  10: "#7e868c",
  11: "#687076",
  12: "#11181c"
};
var W5 = {
  1: "#151718",
  2: "#1a1d1e",
  3: "#202425",
  4: "#26292b",
  5: "#2b2f31",
  6: "#313538",
  7: "#3a3f42",
  8: "#4c5155",
  9: "#697177",
  10: "#787f85",
  11: "#9ba1a6",
  12: "#ecedee"
};
var X5 = {
  1: "#fafefd",
  2: "#f1fcfa",
  3: "#e7f9f5",
  4: "#d9f3ee",
  5: "#c7ebe5",
  6: "#afdfd7",
  7: "#8dcec3",
  8: "#53b9ab",
  9: "#12a594",
  10: "#0e9888",
  11: "#067a6f",
  12: "#10302b"
};
var Y9 = {
  1: "#091915",
  2: "#04201b",
  3: "#062923",
  4: "#07312b",
  5: "#083932",
  6: "#09443c",
  7: "#0b544a",
  8: "#0c6d62",
  9: "#12a594",
  10: "#10b3a3",
  11: "#0ac5b3",
  12: "#e1faf4"
};
var Z5 = {
  1: "#fffcfc",
  2: "#fff8f7",
  3: "#fff0ee",
  4: "#ffe6e2",
  5: "#fdd8d3",
  6: "#fac7be",
  7: "#f3b0a2",
  8: "#ea9280",
  9: "#e54d2e",
  10: "#db4324",
  11: "#ca3214",
  12: "#341711"
};
var $6 = {
  1: "#1d1412",
  2: "#2a1410",
  3: "#3b1813",
  4: "#481a14",
  5: "#541c15",
  6: "#652016",
  7: "#7f2315",
  8: "#a42a12",
  9: "#e54d2e",
  10: "#ec5e41",
  11: "#f16a50",
  12: "#feefec"
};
var f1 = {
  1: "#fdfcfe",
  2: "#fbfaff",
  3: "#f5f2ff",
  4: "#ede9fe",
  5: "#e4defc",
  6: "#d7cff9",
  7: "#c4b8f3",
  8: "#aa99ec",
  9: "#6e56cf",
  10: "#644fc1",
  11: "#5746af",
  12: "#20134b"
};
var e1 = {
  1: "#17151f",
  2: "#1c172b",
  3: "#251e40",
  4: "#2c2250",
  5: "#32275f",
  6: "#392c72",
  7: "#443592",
  8: "#5842c3",
  9: "#6e56cf",
  10: "#7c66dc",
  11: "#9e8cfc",
  12: "#f1eefe"
};
var a1 = {
  1: "#fdfdf9",
  2: "#fffce8",
  3: "#fffbd1",
  4: "#fff8bb",
  5: "#fef2a4",
  6: "#f9e68c",
  7: "#efd36c",
  8: "#ebbc00",
  9: "#f5d90a",
  10: "#f7ce00",
  11: "#946800",
  12: "#35290f"
};
var d1 = {
  1: "#1c1500",
  2: "#221a00",
  3: "#2c2100",
  4: "#352800",
  5: "#3e3000",
  6: "#493c00",
  7: "#594a05",
  8: "#705d00",
  9: "#f5d90a",
  10: "#ffef5c",
  11: "#f0c000",
  12: "#fffad1"
};
var f10 = {
  __proto__: null,
  amber: a8,
  amberDark: d7,
  blue: c5,
  blueDark: b11,
  bronze: s7,
  bronzeDark: r7,
  brown: o6,
  brownDark: k12,
  crimson: l8,
  crimsonDark: D7,
  cyan: t7,
  cyanDark: n4,
  gold: m11,
  goldDark: i8,
  grass: g8,
  grassDark: p8,
  gray: u9,
  grayDark: y9,
  green: v12,
  greenDark: w4,
  indigo: x9,
  indigoDark: _7,
  lime: z9,
  limeDark: h9,
  mauve: j9,
  mauveDark: q8,
  mint: A5,
  mintDark: B6,
  olive: C9,
  oliveDark: E10,
  orange: F6,
  orangeDark: G9,
  pink: H5,
  pinkDark: I5,
  plum: J4,
  plumDark: K8,
  purple: L5,
  purpleDark: M4,
  red: N3,
  redDark: O5,
  sage: P6,
  sageDark: Q4,
  sand: R7,
  sandDark: S10,
  sky: T7,
  skyDark: U8,
  slate: V7,
  slateDark: W5,
  teal: X5,
  tealDark: Y9,
  tomato: Z5,
  tomatoDark: $6,
  violet: f1,
  violetDark: e1,
  yellow: a1,
  yellowDark: d1
};
var e7 = {
  colors: f10
};

// deno:https://esm.sh/@twind/preset-radix-ui@1.0.7/denonext/preset-radix-ui.mjs
function m12() {
  return {
    theme: e7,
    darkColor: o5
  };
}

// twind.config.ts
var twindConfig = Te4({
  presets: [
    u6(),
    a7(),
    m10(),
    y8(),
    m12()
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      }
    }
  },
  darkColor: o5
});
var twind_config_default = twindConfig;

// tw.ts
var tw_default = t2(twind_config_default);

// client.tsx
if (globalThis.document) {
  sd(globalThis.document.getElementById("app"), /* @__PURE__ */ q(router_default, {
    ssrPath: globalThis.SSR_PATH || globalThis.location.pathname,
    ssrSearch: globalThis.SSR_SEARCH || globalThis.location.search,
    lang: globalThis.SSR_LANG || "en"
  }));
}
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
