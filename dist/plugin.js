var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// node_modules/.pnpm/graphology@0.25.4_graphology-types@0.24.7/node_modules/graphology/dist/graphology.umd.min.js
var require_graphology_umd_min = __commonJS({
  "node_modules/.pnpm/graphology@0.25.4_graphology-types@0.24.7/node_modules/graphology/dist/graphology.umd.min.js"(exports, module) {
    !function(t3, e3) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e3() : "function" == typeof define && define.amd ? define(e3) : (t3 = "undefined" != typeof globalThis ? globalThis : t3 || self).graphology = e3();
    }(exports, function() {
      "use strict";
      function t3(e4) {
        return t3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, t3(e4);
      }
      function e3(t4, e4) {
        t4.prototype = Object.create(e4.prototype), t4.prototype.constructor = t4, r3(t4, e4);
      }
      function n3(t4) {
        return n3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
          return t5.__proto__ || Object.getPrototypeOf(t5);
        }, n3(t4);
      }
      function r3(t4, e4) {
        return r3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, e5) {
          return t5.__proto__ = e5, t5;
        }, r3(t4, e4);
      }
      function i2() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (t4) {
          return false;
        }
      }
      function o4(t4, e4, n4) {
        return o4 = i2() ? Reflect.construct.bind() : function(t5, e5, n5) {
          var i3 = [null];
          i3.push.apply(i3, e5);
          var o5 = new (Function.bind.apply(t5, i3))();
          return n5 && r3(o5, n5.prototype), o5;
        }, o4.apply(null, arguments);
      }
      function a4(t4) {
        var e4 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return a4 = function(t5) {
          if (null === t5 || (i3 = t5, -1 === Function.toString.call(i3).indexOf("[native code]")))
            return t5;
          var i3;
          if ("function" != typeof t5)
            throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e4) {
            if (e4.has(t5))
              return e4.get(t5);
            e4.set(t5, a5);
          }
          function a5() {
            return o4(t5, arguments, n3(this).constructor);
          }
          return a5.prototype = Object.create(t5.prototype, { constructor: { value: a5, enumerable: false, writable: true, configurable: true } }), r3(a5, t5);
        }, a4(t4);
      }
      function c2(t4) {
        if (void 0 === t4)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t4;
      }
      var u2 = function() {
        for (var t4 = arguments[0], e4 = 1, n4 = arguments.length; e4 < n4; e4++)
          if (arguments[e4])
            for (var r4 in arguments[e4])
              t4[r4] = arguments[e4][r4];
        return t4;
      };
      function d2(t4, e4, n4, r4) {
        var i3 = t4._nodes.get(e4), o5 = null;
        return i3 ? o5 = "mixed" === r4 ? i3.out && i3.out[n4] || i3.undirected && i3.undirected[n4] : "directed" === r4 ? i3.out && i3.out[n4] : i3.undirected && i3.undirected[n4] : o5;
      }
      function s3(e4) {
        return "object" === t3(e4) && null !== e4;
      }
      function h2(t4) {
        var e4;
        for (e4 in t4)
          return false;
        return true;
      }
      function p2(t4, e4, n4) {
        Object.defineProperty(t4, e4, { enumerable: false, configurable: false, writable: true, value: n4 });
      }
      function f2(t4, e4, n4) {
        var r4 = { enumerable: true, configurable: true };
        "function" == typeof n4 ? r4.get = n4 : (r4.value = n4, r4.writable = false), Object.defineProperty(t4, e4, r4);
      }
      function l3(t4) {
        return !!s3(t4) && !(t4.attributes && !Array.isArray(t4.attributes));
      }
      "function" == typeof Object.assign && (u2 = Object.assign);
      var g2, y2 = { exports: {} }, w2 = "object" == typeof Reflect ? Reflect : null, v2 = w2 && "function" == typeof w2.apply ? w2.apply : function(t4, e4, n4) {
        return Function.prototype.apply.call(t4, e4, n4);
      };
      g2 = w2 && "function" == typeof w2.ownKeys ? w2.ownKeys : Object.getOwnPropertySymbols ? function(t4) {
        return Object.getOwnPropertyNames(t4).concat(Object.getOwnPropertySymbols(t4));
      } : function(t4) {
        return Object.getOwnPropertyNames(t4);
      };
      var b2 = Number.isNaN || function(t4) {
        return t4 != t4;
      };
      function m2() {
        m2.init.call(this);
      }
      y2.exports = m2, y2.exports.once = function(t4, e4) {
        return new Promise(function(n4, r4) {
          function i3(n5) {
            t4.removeListener(e4, o5), r4(n5);
          }
          function o5() {
            "function" == typeof t4.removeListener && t4.removeListener("error", i3), n4([].slice.call(arguments));
          }
          U(t4, e4, o5, { once: true }), "error" !== e4 && function(t5, e5, n5) {
            "function" == typeof t5.on && U(t5, "error", e5, n5);
          }(t4, i3, { once: true });
        });
      }, m2.EventEmitter = m2, m2.prototype._events = void 0, m2.prototype._eventsCount = 0, m2.prototype._maxListeners = void 0;
      var k2 = 10;
      function _2(t4) {
        if ("function" != typeof t4)
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t4);
      }
      function G2(t4) {
        return void 0 === t4._maxListeners ? m2.defaultMaxListeners : t4._maxListeners;
      }
      function x2(t4, e4, n4, r4) {
        var i3, o5, a5, c3;
        if (_2(n4), void 0 === (o5 = t4._events) ? (o5 = t4._events = /* @__PURE__ */ Object.create(null), t4._eventsCount = 0) : (void 0 !== o5.newListener && (t4.emit("newListener", e4, n4.listener ? n4.listener : n4), o5 = t4._events), a5 = o5[e4]), void 0 === a5)
          a5 = o5[e4] = n4, ++t4._eventsCount;
        else if ("function" == typeof a5 ? a5 = o5[e4] = r4 ? [n4, a5] : [a5, n4] : r4 ? a5.unshift(n4) : a5.push(n4), (i3 = G2(t4)) > 0 && a5.length > i3 && !a5.warned) {
          a5.warned = true;
          var u3 = new Error("Possible EventEmitter memory leak detected. " + a5.length + " " + String(e4) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          u3.name = "MaxListenersExceededWarning", u3.emitter = t4, u3.type = e4, u3.count = a5.length, c3 = u3, console && console.warn && console.warn(c3);
        }
        return t4;
      }
      function E2() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function A2(t4, e4, n4) {
        var r4 = { fired: false, wrapFn: void 0, target: t4, type: e4, listener: n4 }, i3 = E2.bind(r4);
        return i3.listener = n4, r4.wrapFn = i3, i3;
      }
      function L2(t4, e4, n4) {
        var r4 = t4._events;
        if (void 0 === r4)
          return [];
        var i3 = r4[e4];
        return void 0 === i3 ? [] : "function" == typeof i3 ? n4 ? [i3.listener || i3] : [i3] : n4 ? function(t5) {
          for (var e5 = new Array(t5.length), n5 = 0; n5 < e5.length; ++n5)
            e5[n5] = t5[n5].listener || t5[n5];
          return e5;
        }(i3) : D2(i3, i3.length);
      }
      function S2(t4) {
        var e4 = this._events;
        if (void 0 !== e4) {
          var n4 = e4[t4];
          if ("function" == typeof n4)
            return 1;
          if (void 0 !== n4)
            return n4.length;
        }
        return 0;
      }
      function D2(t4, e4) {
        for (var n4 = new Array(e4), r4 = 0; r4 < e4; ++r4)
          n4[r4] = t4[r4];
        return n4;
      }
      function U(t4, e4, n4, r4) {
        if ("function" == typeof t4.on)
          r4.once ? t4.once(e4, n4) : t4.on(e4, n4);
        else {
          if ("function" != typeof t4.addEventListener)
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t4);
          t4.addEventListener(e4, function i3(o5) {
            r4.once && t4.removeEventListener(e4, i3), n4(o5);
          });
        }
      }
      function N2(t4) {
        if ("function" != typeof t4)
          throw new Error("obliterator/iterator: expecting a function!");
        this.next = t4;
      }
      Object.defineProperty(m2, "defaultMaxListeners", { enumerable: true, get: function() {
        return k2;
      }, set: function(t4) {
        if ("number" != typeof t4 || t4 < 0 || b2(t4))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t4 + ".");
        k2 = t4;
      } }), m2.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, m2.prototype.setMaxListeners = function(t4) {
        if ("number" != typeof t4 || t4 < 0 || b2(t4))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t4 + ".");
        return this._maxListeners = t4, this;
      }, m2.prototype.getMaxListeners = function() {
        return G2(this);
      }, m2.prototype.emit = function(t4) {
        for (var e4 = [], n4 = 1; n4 < arguments.length; n4++)
          e4.push(arguments[n4]);
        var r4 = "error" === t4, i3 = this._events;
        if (void 0 !== i3)
          r4 = r4 && void 0 === i3.error;
        else if (!r4)
          return false;
        if (r4) {
          var o5;
          if (e4.length > 0 && (o5 = e4[0]), o5 instanceof Error)
            throw o5;
          var a5 = new Error("Unhandled error." + (o5 ? " (" + o5.message + ")" : ""));
          throw a5.context = o5, a5;
        }
        var c3 = i3[t4];
        if (void 0 === c3)
          return false;
        if ("function" == typeof c3)
          v2(c3, this, e4);
        else {
          var u3 = c3.length, d3 = D2(c3, u3);
          for (n4 = 0; n4 < u3; ++n4)
            v2(d3[n4], this, e4);
        }
        return true;
      }, m2.prototype.addListener = function(t4, e4) {
        return x2(this, t4, e4, false);
      }, m2.prototype.on = m2.prototype.addListener, m2.prototype.prependListener = function(t4, e4) {
        return x2(this, t4, e4, true);
      }, m2.prototype.once = function(t4, e4) {
        return _2(e4), this.on(t4, A2(this, t4, e4)), this;
      }, m2.prototype.prependOnceListener = function(t4, e4) {
        return _2(e4), this.prependListener(t4, A2(this, t4, e4)), this;
      }, m2.prototype.removeListener = function(t4, e4) {
        var n4, r4, i3, o5, a5;
        if (_2(e4), void 0 === (r4 = this._events))
          return this;
        if (void 0 === (n4 = r4[t4]))
          return this;
        if (n4 === e4 || n4.listener === e4)
          0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r4[t4], r4.removeListener && this.emit("removeListener", t4, n4.listener || e4));
        else if ("function" != typeof n4) {
          for (i3 = -1, o5 = n4.length - 1; o5 >= 0; o5--)
            if (n4[o5] === e4 || n4[o5].listener === e4) {
              a5 = n4[o5].listener, i3 = o5;
              break;
            }
          if (i3 < 0)
            return this;
          0 === i3 ? n4.shift() : function(t5, e5) {
            for (; e5 + 1 < t5.length; e5++)
              t5[e5] = t5[e5 + 1];
            t5.pop();
          }(n4, i3), 1 === n4.length && (r4[t4] = n4[0]), void 0 !== r4.removeListener && this.emit("removeListener", t4, a5 || e4);
        }
        return this;
      }, m2.prototype.off = m2.prototype.removeListener, m2.prototype.removeAllListeners = function(t4) {
        var e4, n4, r4;
        if (void 0 === (n4 = this._events))
          return this;
        if (void 0 === n4.removeListener)
          return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n4[t4] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n4[t4]), this;
        if (0 === arguments.length) {
          var i3, o5 = Object.keys(n4);
          for (r4 = 0; r4 < o5.length; ++r4)
            "removeListener" !== (i3 = o5[r4]) && this.removeAllListeners(i3);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e4 = n4[t4]))
          this.removeListener(t4, e4);
        else if (void 0 !== e4)
          for (r4 = e4.length - 1; r4 >= 0; r4--)
            this.removeListener(t4, e4[r4]);
        return this;
      }, m2.prototype.listeners = function(t4) {
        return L2(this, t4, true);
      }, m2.prototype.rawListeners = function(t4) {
        return L2(this, t4, false);
      }, m2.listenerCount = function(t4, e4) {
        return "function" == typeof t4.listenerCount ? t4.listenerCount(e4) : S2.call(t4, e4);
      }, m2.prototype.listenerCount = S2, m2.prototype.eventNames = function() {
        return this._eventsCount > 0 ? g2(this._events) : [];
      }, "undefined" != typeof Symbol && (N2.prototype[Symbol.iterator] = function() {
        return this;
      }), N2.of = function() {
        var t4 = arguments, e4 = t4.length, n4 = 0;
        return new N2(function() {
          return n4 >= e4 ? { done: true } : { done: false, value: t4[n4++] };
        });
      }, N2.empty = function() {
        return new N2(function() {
          return { done: true };
        });
      }, N2.fromSequence = function(t4) {
        var e4 = 0, n4 = t4.length;
        return new N2(function() {
          return e4 >= n4 ? { done: true } : { done: false, value: t4[e4++] };
        });
      }, N2.is = function(t4) {
        return t4 instanceof N2 || "object" == typeof t4 && null !== t4 && "function" == typeof t4.next;
      };
      var O2 = N2, j2 = {};
      j2.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j2.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
      var C2 = O2, M2 = j2, z2 = M2.ARRAY_BUFFER_SUPPORT, W2 = M2.SYMBOL_SUPPORT;
      var P2 = function(t4) {
        var e4 = function(t5) {
          return "string" == typeof t5 || Array.isArray(t5) || z2 && ArrayBuffer.isView(t5) ? C2.fromSequence(t5) : "object" != typeof t5 || null === t5 ? null : W2 && "function" == typeof t5[Symbol.iterator] ? t5[Symbol.iterator]() : "function" == typeof t5.next ? t5 : null;
        }(t4);
        if (!e4)
          throw new Error("obliterator: target is not iterable nor a valid iterator.");
        return e4;
      }, R2 = P2, K = function(t4, e4) {
        for (var n4, r4 = arguments.length > 1 ? e4 : 1 / 0, i3 = r4 !== 1 / 0 ? new Array(r4) : [], o5 = 0, a5 = R2(t4); ; ) {
          if (o5 === r4)
            return i3;
          if ((n4 = a5.next()).done)
            return o5 !== e4 && (i3.length = o5), i3;
          i3[o5++] = n4.value;
        }
      }, T = function(t4) {
        function n4(e4) {
          var n5;
          return (n5 = t4.call(this) || this).name = "GraphError", n5.message = e4, n5;
        }
        return e3(n4, t4), n4;
      }(a4(Error)), B2 = function(t4) {
        function n4(e4) {
          var r4;
          return (r4 = t4.call(this, e4) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c2(r4), n4.prototype.constructor), r4;
        }
        return e3(n4, t4), n4;
      }(T), F2 = function(t4) {
        function n4(e4) {
          var r4;
          return (r4 = t4.call(this, e4) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c2(r4), n4.prototype.constructor), r4;
        }
        return e3(n4, t4), n4;
      }(T), I2 = function(t4) {
        function n4(e4) {
          var r4;
          return (r4 = t4.call(this, e4) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c2(r4), n4.prototype.constructor), r4;
        }
        return e3(n4, t4), n4;
      }(T);
      function Y(t4, e4) {
        this.key = t4, this.attributes = e4, this.clear();
      }
      function q2(t4, e4) {
        this.key = t4, this.attributes = e4, this.clear();
      }
      function J(t4, e4) {
        this.key = t4, this.attributes = e4, this.clear();
      }
      function V2(t4, e4, n4, r4, i3) {
        this.key = e4, this.attributes = i3, this.undirected = t4, this.source = n4, this.target = r4;
      }
      Y.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
      }, q2.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
      }, J.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
      }, V2.prototype.attach = function() {
        var t4 = "out", e4 = "in";
        this.undirected && (t4 = e4 = "undirected");
        var n4 = this.source.key, r4 = this.target.key;
        this.source[t4][r4] = this, this.undirected && n4 === r4 || (this.target[e4][n4] = this);
      }, V2.prototype.attachMulti = function() {
        var t4 = "out", e4 = "in", n4 = this.source.key, r4 = this.target.key;
        this.undirected && (t4 = e4 = "undirected");
        var i3 = this.source[t4], o5 = i3[r4];
        if (void 0 === o5)
          return i3[r4] = this, void (this.undirected && n4 === r4 || (this.target[e4][n4] = this));
        o5.previous = this, this.next = o5, i3[r4] = this, this.target[e4][n4] = this;
      }, V2.prototype.detach = function() {
        var t4 = this.source.key, e4 = this.target.key, n4 = "out", r4 = "in";
        this.undirected && (n4 = r4 = "undirected"), delete this.source[n4][e4], delete this.target[r4][t4];
      }, V2.prototype.detachMulti = function() {
        var t4 = this.source.key, e4 = this.target.key, n4 = "out", r4 = "in";
        this.undirected && (n4 = r4 = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n4][e4], delete this.target[r4][t4]) : (this.next.previous = void 0, this.source[n4][e4] = this.next, this.target[r4][t4] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
      };
      function H2(t4, e4, n4, r4, i3, o5, a5) {
        var c3, u3, d3, s4;
        if (r4 = "" + r4, 0 === n4) {
          if (!(c3 = t4._nodes.get(r4)))
            throw new F2("Graph.".concat(e4, ': could not find the "').concat(r4, '" node in the graph.'));
          d3 = i3, s4 = o5;
        } else if (3 === n4) {
          if (i3 = "" + i3, !(u3 = t4._edges.get(i3)))
            throw new F2("Graph.".concat(e4, ': could not find the "').concat(i3, '" edge in the graph.'));
          var h3 = u3.source.key, p3 = u3.target.key;
          if (r4 === h3)
            c3 = u3.target;
          else {
            if (r4 !== p3)
              throw new F2("Graph.".concat(e4, ': the "').concat(r4, '" node is not attached to the "').concat(i3, '" edge (').concat(h3, ", ").concat(p3, ")."));
            c3 = u3.source;
          }
          d3 = o5, s4 = a5;
        } else {
          if (!(u3 = t4._edges.get(r4)))
            throw new F2("Graph.".concat(e4, ': could not find the "').concat(r4, '" edge in the graph.'));
          c3 = 1 === n4 ? u3.source : u3.target, d3 = i3, s4 = o5;
        }
        return [c3, d3, s4];
      }
      var Q = [{ name: function(t4) {
        return "get".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          return a5.attributes[c3];
        };
      } }, { name: function(t4) {
        return "get".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          return H2(this, e4, n4, t5, r4)[0].attributes;
        };
      } }, { name: function(t4) {
        return "has".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          return a5.attributes.hasOwnProperty(c3);
        };
      } }, { name: function(t4) {
        return "set".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3, o5) {
          var a5 = H2(this, e4, n4, t5, r4, i3, o5), c3 = a5[0], u3 = a5[1], d3 = a5[2];
          return c3.attributes[u3] = d3, this.emit("nodeAttributesUpdated", { key: c3.key, type: "set", attributes: c3.attributes, name: u3 }), this;
        };
      } }, { name: function(t4) {
        return "update".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3, o5) {
          var a5 = H2(this, e4, n4, t5, r4, i3, o5), c3 = a5[0], u3 = a5[1], d3 = a5[2];
          if ("function" != typeof d3)
            throw new B2("Graph.".concat(e4, ": updater should be a function."));
          var s4 = c3.attributes, h3 = d3(s4[u3]);
          return s4[u3] = h3, this.emit("nodeAttributesUpdated", { key: c3.key, type: "set", attributes: c3.attributes, name: u3 }), this;
        };
      } }, { name: function(t4) {
        return "remove".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          return delete a5.attributes[c3], this.emit("nodeAttributesUpdated", { key: a5.key, type: "remove", attributes: a5.attributes, name: c3 }), this;
        };
      } }, { name: function(t4) {
        return "replace".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          if (!s3(c3))
            throw new B2("Graph.".concat(e4, ": provided attributes are not a plain object."));
          return a5.attributes = c3, this.emit("nodeAttributesUpdated", { key: a5.key, type: "replace", attributes: a5.attributes }), this;
        };
      } }, { name: function(t4) {
        return "merge".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          if (!s3(c3))
            throw new B2("Graph.".concat(e4, ": provided attributes are not a plain object."));
          return u2(a5.attributes, c3), this.emit("nodeAttributesUpdated", { key: a5.key, type: "merge", attributes: a5.attributes, data: c3 }), this;
        };
      } }, { name: function(t4) {
        return "update".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5 = H2(this, e4, n4, t5, r4, i3), a5 = o5[0], c3 = o5[1];
          if ("function" != typeof c3)
            throw new B2("Graph.".concat(e4, ": provided updater is not a function."));
          return a5.attributes = c3(a5.attributes), this.emit("nodeAttributesUpdated", { key: a5.key, type: "update", attributes: a5.attributes }), this;
        };
      } }];
      var X = [{ name: function(t4) {
        return "get".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          return i3.attributes[r4];
        };
      } }, { name: function(t4) {
        return "get".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5) {
          var r4;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 1) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var i3 = "" + t5, o5 = "" + arguments[1];
            if (!(r4 = d2(this, i3, o5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(i3, '" - "').concat(o5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(r4 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          return r4.attributes;
        };
      } }, { name: function(t4) {
        return "has".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          return i3.attributes.hasOwnProperty(r4);
        };
      } }, { name: function(t4) {
        return "set".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a5 = "" + t5, c3 = "" + r4;
            if (r4 = arguments[2], i3 = arguments[3], !(o5 = d2(this, a5, c3, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(a5, '" - "').concat(c3, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(o5 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          return o5.attributes[r4] = i3, this.emit("edgeAttributesUpdated", { key: o5.key, type: "set", attributes: o5.attributes, name: r4 }), this;
        };
      } }, { name: function(t4) {
        return "update".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4, i3) {
          var o5;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a5 = "" + t5, c3 = "" + r4;
            if (r4 = arguments[2], i3 = arguments[3], !(o5 = d2(this, a5, c3, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(a5, '" - "').concat(c3, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(o5 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          if ("function" != typeof i3)
            throw new B2("Graph.".concat(e4, ": updater should be a function."));
          return o5.attributes[r4] = i3(o5.attributes[r4]), this.emit("edgeAttributesUpdated", { key: o5.key, type: "set", attributes: o5.attributes, name: r4 }), this;
        };
      } }, { name: function(t4) {
        return "remove".concat(t4, "Attribute");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          return delete i3.attributes[r4], this.emit("edgeAttributesUpdated", { key: i3.key, type: "remove", attributes: i3.attributes, name: r4 }), this;
        };
      } }, { name: function(t4) {
        return "replace".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          if (!s3(r4))
            throw new B2("Graph.".concat(e4, ": provided attributes are not a plain object."));
          return i3.attributes = r4, this.emit("edgeAttributesUpdated", { key: i3.key, type: "replace", attributes: i3.attributes }), this;
        };
      } }, { name: function(t4) {
        return "merge".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          if (!s3(r4))
            throw new B2("Graph.".concat(e4, ": provided attributes are not a plain object."));
          return u2(i3.attributes, r4), this.emit("edgeAttributesUpdated", { key: i3.key, type: "merge", attributes: i3.attributes, data: r4 }), this;
        };
      } }, { name: function(t4) {
        return "update".concat(t4, "Attributes");
      }, attacher: function(t4, e4, n4) {
        t4.prototype[e4] = function(t5, r4) {
          var i3;
          if ("mixed" !== this.type && "mixed" !== n4 && n4 !== this.type)
            throw new I2("Graph.".concat(e4, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi)
              throw new I2("Graph.".concat(e4, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o5 = "" + t5, a5 = "" + r4;
            if (r4 = arguments[2], !(i3 = d2(this, o5, a5, n4)))
              throw new F2("Graph.".concat(e4, ': could not find an edge for the given path ("').concat(o5, '" - "').concat(a5, '").'));
          } else {
            if ("mixed" !== n4)
              throw new I2("Graph.".concat(e4, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t5 = "" + t5, !(i3 = this._edges.get(t5)))
              throw new F2("Graph.".concat(e4, ': could not find the "').concat(t5, '" edge in the graph.'));
          }
          if ("function" != typeof r4)
            throw new B2("Graph.".concat(e4, ": provided updater is not a function."));
          return i3.attributes = r4(i3.attributes), this.emit("edgeAttributesUpdated", { key: i3.key, type: "update", attributes: i3.attributes }), this;
        };
      } }];
      var Z2 = O2, $2 = P2, tt = function() {
        var t4 = arguments, e4 = null, n4 = -1;
        return new Z2(function() {
          for (var r4 = null; ; ) {
            if (null === e4) {
              if (++n4 >= t4.length)
                return { done: true };
              e4 = $2(t4[n4]);
            }
            if (true !== (r4 = e4.next()).done)
              break;
            e4 = null;
          }
          return r4;
        });
      }, et = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
      function nt(t4, e4, n4, r4) {
        var i3 = false;
        for (var o5 in e4)
          if (o5 !== r4) {
            var a5 = e4[o5];
            if (i3 = n4(a5.key, a5.attributes, a5.source.key, a5.target.key, a5.source.attributes, a5.target.attributes, a5.undirected), t4 && i3)
              return a5.key;
          }
      }
      function rt(t4, e4, n4, r4) {
        var i3, o5, a5, c3 = false;
        for (var u3 in e4)
          if (u3 !== r4) {
            i3 = e4[u3];
            do {
              if (o5 = i3.source, a5 = i3.target, c3 = n4(i3.key, i3.attributes, o5.key, a5.key, o5.attributes, a5.attributes, i3.undirected), t4 && c3)
                return i3.key;
              i3 = i3.next;
            } while (void 0 !== i3);
          }
      }
      function it(t4, e4) {
        var n4, r4 = Object.keys(t4), i3 = r4.length, o5 = 0;
        return new O2(function() {
          do {
            if (n4)
              n4 = n4.next;
            else {
              if (o5 >= i3)
                return { done: true };
              var a5 = r4[o5++];
              if (a5 === e4) {
                n4 = void 0;
                continue;
              }
              n4 = t4[a5];
            }
          } while (!n4);
          return { done: false, value: { edge: n4.key, attributes: n4.attributes, source: n4.source.key, target: n4.target.key, sourceAttributes: n4.source.attributes, targetAttributes: n4.target.attributes, undirected: n4.undirected } };
        });
      }
      function ot(t4, e4, n4, r4) {
        var i3 = e4[n4];
        if (i3) {
          var o5 = i3.source, a5 = i3.target;
          return r4(i3.key, i3.attributes, o5.key, a5.key, o5.attributes, a5.attributes, i3.undirected) && t4 ? i3.key : void 0;
        }
      }
      function at(t4, e4, n4, r4) {
        var i3 = e4[n4];
        if (i3) {
          var o5 = false;
          do {
            if (o5 = r4(i3.key, i3.attributes, i3.source.key, i3.target.key, i3.source.attributes, i3.target.attributes, i3.undirected), t4 && o5)
              return i3.key;
            i3 = i3.next;
          } while (void 0 !== i3);
        }
      }
      function ct(t4, e4) {
        var n4 = t4[e4];
        return void 0 !== n4.next ? new O2(function() {
          if (!n4)
            return { done: true };
          var t5 = { edge: n4.key, attributes: n4.attributes, source: n4.source.key, target: n4.target.key, sourceAttributes: n4.source.attributes, targetAttributes: n4.target.attributes, undirected: n4.undirected };
          return n4 = n4.next, { done: false, value: t5 };
        }) : O2.of({ edge: n4.key, attributes: n4.attributes, source: n4.source.key, target: n4.target.key, sourceAttributes: n4.source.attributes, targetAttributes: n4.target.attributes, undirected: n4.undirected });
      }
      function ut(t4, e4) {
        if (0 === t4.size)
          return [];
        if ("mixed" === e4 || e4 === t4.type)
          return "function" == typeof Array.from ? Array.from(t4._edges.keys()) : K(t4._edges.keys(), t4._edges.size);
        for (var n4, r4, i3 = "undirected" === e4 ? t4.undirectedSize : t4.directedSize, o5 = new Array(i3), a5 = "undirected" === e4, c3 = t4._edges.values(), u3 = 0; true !== (n4 = c3.next()).done; )
          (r4 = n4.value).undirected === a5 && (o5[u3++] = r4.key);
        return o5;
      }
      function dt(t4, e4, n4, r4) {
        if (0 !== e4.size) {
          for (var i3, o5, a5 = "mixed" !== n4 && n4 !== e4.type, c3 = "undirected" === n4, u3 = false, d3 = e4._edges.values(); true !== (i3 = d3.next()).done; )
            if (o5 = i3.value, !a5 || o5.undirected === c3) {
              var s4 = o5, h3 = s4.key, p3 = s4.attributes, f3 = s4.source, l4 = s4.target;
              if (u3 = r4(h3, p3, f3.key, l4.key, f3.attributes, l4.attributes, o5.undirected), t4 && u3)
                return h3;
            }
        }
      }
      function st(t4, e4) {
        if (0 === t4.size)
          return O2.empty();
        var n4 = "mixed" !== e4 && e4 !== t4.type, r4 = "undirected" === e4, i3 = t4._edges.values();
        return new O2(function() {
          for (var t5, e5; ; ) {
            if ((t5 = i3.next()).done)
              return t5;
            if (e5 = t5.value, !n4 || e5.undirected === r4)
              break;
          }
          return { value: { edge: e5.key, attributes: e5.attributes, source: e5.source.key, target: e5.target.key, sourceAttributes: e5.source.attributes, targetAttributes: e5.target.attributes, undirected: e5.undirected }, done: false };
        });
      }
      function ht(t4, e4, n4, r4, i3, o5) {
        var a5, c3 = e4 ? rt : nt;
        if ("undirected" !== n4) {
          if ("out" !== r4 && (a5 = c3(t4, i3.in, o5), t4 && a5))
            return a5;
          if ("in" !== r4 && (a5 = c3(t4, i3.out, o5, r4 ? void 0 : i3.key), t4 && a5))
            return a5;
        }
        if ("directed" !== n4 && (a5 = c3(t4, i3.undirected, o5), t4 && a5))
          return a5;
      }
      function pt(t4, e4, n4, r4) {
        var i3 = [];
        return ht(false, t4, e4, n4, r4, function(t5) {
          i3.push(t5);
        }), i3;
      }
      function ft(t4, e4, n4) {
        var r4 = O2.empty();
        return "undirected" !== t4 && ("out" !== e4 && void 0 !== n4.in && (r4 = tt(r4, it(n4.in))), "in" !== e4 && void 0 !== n4.out && (r4 = tt(r4, it(n4.out, e4 ? void 0 : n4.key)))), "directed" !== t4 && void 0 !== n4.undirected && (r4 = tt(r4, it(n4.undirected))), r4;
      }
      function lt(t4, e4, n4, r4, i3, o5, a5) {
        var c3, u3 = n4 ? at : ot;
        if ("undirected" !== e4) {
          if (void 0 !== i3.in && "out" !== r4 && (c3 = u3(t4, i3.in, o5, a5), t4 && c3))
            return c3;
          if (void 0 !== i3.out && "in" !== r4 && (r4 || i3.key !== o5) && (c3 = u3(t4, i3.out, o5, a5), t4 && c3))
            return c3;
        }
        if ("directed" !== e4 && void 0 !== i3.undirected && (c3 = u3(t4, i3.undirected, o5, a5), t4 && c3))
          return c3;
      }
      function gt(t4, e4, n4, r4, i3) {
        var o5 = [];
        return lt(false, t4, e4, n4, r4, i3, function(t5) {
          o5.push(t5);
        }), o5;
      }
      function yt(t4, e4, n4, r4) {
        var i3 = O2.empty();
        return "undirected" !== t4 && (void 0 !== n4.in && "out" !== e4 && r4 in n4.in && (i3 = tt(i3, ct(n4.in, r4))), void 0 !== n4.out && "in" !== e4 && r4 in n4.out && (e4 || n4.key !== r4) && (i3 = tt(i3, ct(n4.out, r4)))), "directed" !== t4 && void 0 !== n4.undirected && r4 in n4.undirected && (i3 = tt(i3, ct(n4.undirected, r4))), i3;
      }
      var wt = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
      function vt() {
        this.A = null, this.B = null;
      }
      function bt(t4, e4, n4, r4, i3) {
        for (var o5 in r4) {
          var a5 = r4[o5], c3 = a5.source, u3 = a5.target, d3 = c3 === n4 ? u3 : c3;
          if (!e4 || !e4.has(d3.key)) {
            var s4 = i3(d3.key, d3.attributes);
            if (t4 && s4)
              return d3.key;
          }
        }
      }
      function mt(t4, e4, n4, r4, i3) {
        if ("mixed" !== e4) {
          if ("undirected" === e4)
            return bt(t4, null, r4, r4.undirected, i3);
          if ("string" == typeof n4)
            return bt(t4, null, r4, r4[n4], i3);
        }
        var o5, a5 = new vt();
        if ("undirected" !== e4) {
          if ("out" !== n4) {
            if (o5 = bt(t4, null, r4, r4.in, i3), t4 && o5)
              return o5;
            a5.wrap(r4.in);
          }
          if ("in" !== n4) {
            if (o5 = bt(t4, a5, r4, r4.out, i3), t4 && o5)
              return o5;
            a5.wrap(r4.out);
          }
        }
        if ("directed" !== e4 && (o5 = bt(t4, a5, r4, r4.undirected, i3), t4 && o5))
          return o5;
      }
      function kt(t4, e4, n4) {
        var r4 = Object.keys(n4), i3 = r4.length, o5 = 0;
        return new O2(function() {
          var a5 = null;
          do {
            if (o5 >= i3)
              return t4 && t4.wrap(n4), { done: true };
            var c3 = n4[r4[o5++]], u3 = c3.source, d3 = c3.target;
            a5 = u3 === e4 ? d3 : u3, t4 && t4.has(a5.key) && (a5 = null);
          } while (null === a5);
          return { done: false, value: { neighbor: a5.key, attributes: a5.attributes } };
        });
      }
      function _t(t4, e4) {
        var n4 = e4.name, r4 = e4.type, i3 = e4.direction;
        t4.prototype[n4] = function(t5) {
          if ("mixed" !== r4 && "mixed" !== this.type && r4 !== this.type)
            return [];
          t5 = "" + t5;
          var e5 = this._nodes.get(t5);
          if (void 0 === e5)
            throw new F2("Graph.".concat(n4, ': could not find the "').concat(t5, '" node in the graph.'));
          return function(t6, e6, n5) {
            if ("mixed" !== t6) {
              if ("undirected" === t6)
                return Object.keys(n5.undirected);
              if ("string" == typeof e6)
                return Object.keys(n5[e6]);
            }
            var r5 = [];
            return mt(false, t6, e6, n5, function(t7) {
              r5.push(t7);
            }), r5;
          }("mixed" === r4 ? this.type : r4, i3, e5);
        };
      }
      function Gt(t4, e4) {
        var n4 = e4.name, r4 = e4.type, i3 = e4.direction, o5 = n4.slice(0, -1) + "Entries";
        t4.prototype[o5] = function(t5) {
          if ("mixed" !== r4 && "mixed" !== this.type && r4 !== this.type)
            return O2.empty();
          t5 = "" + t5;
          var e5 = this._nodes.get(t5);
          if (void 0 === e5)
            throw new F2("Graph.".concat(o5, ': could not find the "').concat(t5, '" node in the graph.'));
          return function(t6, e6, n5) {
            if ("mixed" !== t6) {
              if ("undirected" === t6)
                return kt(null, n5, n5.undirected);
              if ("string" == typeof e6)
                return kt(null, n5, n5[e6]);
            }
            var r5 = O2.empty(), i4 = new vt();
            return "undirected" !== t6 && ("out" !== e6 && (r5 = tt(r5, kt(i4, n5, n5.in))), "in" !== e6 && (r5 = tt(r5, kt(i4, n5, n5.out)))), "directed" !== t6 && (r5 = tt(r5, kt(i4, n5, n5.undirected))), r5;
          }("mixed" === r4 ? this.type : r4, i3, e5);
        };
      }
      function xt(t4, e4, n4, r4, i3) {
        for (var o5, a5, c3, u3, d3, s4, h3, p3 = r4._nodes.values(), f3 = r4.type; true !== (o5 = p3.next()).done; ) {
          var l4 = false;
          if (a5 = o5.value, "undirected" !== f3)
            for (c3 in u3 = a5.out) {
              d3 = u3[c3];
              do {
                if (s4 = d3.target, l4 = true, h3 = i3(a5.key, s4.key, a5.attributes, s4.attributes, d3.key, d3.attributes, d3.undirected), t4 && h3)
                  return d3;
                d3 = d3.next;
              } while (d3);
            }
          if ("directed" !== f3) {
            for (c3 in u3 = a5.undirected)
              if (!(e4 && a5.key > c3)) {
                d3 = u3[c3];
                do {
                  if ((s4 = d3.target).key !== c3 && (s4 = d3.source), l4 = true, h3 = i3(a5.key, s4.key, a5.attributes, s4.attributes, d3.key, d3.attributes, d3.undirected), t4 && h3)
                    return d3;
                  d3 = d3.next;
                } while (d3);
              }
          }
          if (n4 && !l4 && (h3 = i3(a5.key, null, a5.attributes, null, null, null, null), t4 && h3))
            return null;
        }
      }
      function Et(t4) {
        if (!s3(t4))
          throw new B2('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t4))
          throw new B2("Graph.import: serialized node is missing its key.");
        if ("attributes" in t4 && (!s3(t4.attributes) || null === t4.attributes))
          throw new B2("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
      }
      function At(t4) {
        if (!s3(t4))
          throw new B2('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t4))
          throw new B2("Graph.import: serialized edge is missing its source.");
        if (!("target" in t4))
          throw new B2("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t4 && (!s3(t4.attributes) || null === t4.attributes))
          throw new B2("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t4 && "boolean" != typeof t4.undirected)
          throw new B2("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
      }
      vt.prototype.wrap = function(t4) {
        null === this.A ? this.A = t4 : null === this.B && (this.B = t4);
      }, vt.prototype.has = function(t4) {
        return null !== this.A && t4 in this.A || null !== this.B && t4 in this.B;
      };
      var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
        return Lt++;
      }), Dt = /* @__PURE__ */ new Set(["directed", "undirected", "mixed"]), Ut = /* @__PURE__ */ new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), Nt = { allowSelfLoops: true, multi: false, type: "mixed" };
      function Ot(t4, e4, n4) {
        var r4 = new t4.NodeDataClass(e4, n4);
        return t4._nodes.set(e4, r4), t4.emit("nodeAdded", { key: e4, attributes: n4 }), r4;
      }
      function jt(t4, e4, n4, r4, i3, o5, a5, c3) {
        if (!r4 && "undirected" === t4.type)
          throw new I2("Graph.".concat(e4, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r4 && "directed" === t4.type)
          throw new I2("Graph.".concat(e4, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (c3 && !s3(c3))
          throw new B2("Graph.".concat(e4, ': invalid attributes. Expecting an object but got "').concat(c3, '"'));
        if (o5 = "" + o5, a5 = "" + a5, c3 = c3 || {}, !t4.allowSelfLoops && o5 === a5)
          throw new I2("Graph.".concat(e4, ': source & target are the same ("').concat(o5, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var u3 = t4._nodes.get(o5), d3 = t4._nodes.get(a5);
        if (!u3)
          throw new F2("Graph.".concat(e4, ': source node "').concat(o5, '" not found.'));
        if (!d3)
          throw new F2("Graph.".concat(e4, ': target node "').concat(a5, '" not found.'));
        var h3 = { key: null, undirected: r4, source: o5, target: a5, attributes: c3 };
        if (n4)
          i3 = t4._edgeKeyGenerator();
        else if (i3 = "" + i3, t4._edges.has(i3))
          throw new I2("Graph.".concat(e4, ': the "').concat(i3, '" edge already exists in the graph.'));
        if (!t4.multi && (r4 ? void 0 !== u3.undirected[a5] : void 0 !== u3.out[a5]))
          throw new I2("Graph.".concat(e4, ': an edge linking "').concat(o5, '" to "').concat(a5, `" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`));
        var p3 = new V2(r4, i3, u3, d3, c3);
        t4._edges.set(i3, p3);
        var f3 = o5 === a5;
        return r4 ? (u3.undirectedDegree++, d3.undirectedDegree++, f3 && (u3.undirectedLoops++, t4._undirectedSelfLoopCount++)) : (u3.outDegree++, d3.inDegree++, f3 && (u3.directedLoops++, t4._directedSelfLoopCount++)), t4.multi ? p3.attachMulti() : p3.attach(), r4 ? t4._undirectedSize++ : t4._directedSize++, h3.key = i3, t4.emit("edgeAdded", h3), i3;
      }
      function Ct(t4, e4, n4, r4, i3, o5, a5, c3, d3) {
        if (!r4 && "undirected" === t4.type)
          throw new I2("Graph.".concat(e4, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r4 && "directed" === t4.type)
          throw new I2("Graph.".concat(e4, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (c3) {
          if (d3) {
            if ("function" != typeof c3)
              throw new B2("Graph.".concat(e4, ': invalid updater function. Expecting a function but got "').concat(c3, '"'));
          } else if (!s3(c3))
            throw new B2("Graph.".concat(e4, ': invalid attributes. Expecting an object but got "').concat(c3, '"'));
        }
        var h3;
        if (o5 = "" + o5, a5 = "" + a5, d3 && (h3 = c3, c3 = void 0), !t4.allowSelfLoops && o5 === a5)
          throw new I2("Graph.".concat(e4, ': source & target are the same ("').concat(o5, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var p3, f3, l4 = t4._nodes.get(o5), g3 = t4._nodes.get(a5);
        if (!n4 && (p3 = t4._edges.get(i3))) {
          if (!(p3.source.key === o5 && p3.target.key === a5 || r4 && p3.source.key === a5 && p3.target.key === o5))
            throw new I2("Graph.".concat(e4, ': inconsistency detected when attempting to merge the "').concat(i3, '" edge with "').concat(o5, '" source & "').concat(a5, '" target vs. ("').concat(p3.source.key, '", "').concat(p3.target.key, '").'));
          f3 = p3;
        }
        if (f3 || t4.multi || !l4 || (f3 = r4 ? l4.undirected[a5] : l4.out[a5]), f3) {
          var y3 = [f3.key, false, false, false];
          if (d3 ? !h3 : !c3)
            return y3;
          if (d3) {
            var w3 = f3.attributes;
            f3.attributes = h3(w3), t4.emit("edgeAttributesUpdated", { type: "replace", key: f3.key, attributes: f3.attributes });
          } else
            u2(f3.attributes, c3), t4.emit("edgeAttributesUpdated", { type: "merge", key: f3.key, attributes: f3.attributes, data: c3 });
          return y3;
        }
        c3 = c3 || {}, d3 && h3 && (c3 = h3(c3));
        var v3 = { key: null, undirected: r4, source: o5, target: a5, attributes: c3 };
        if (n4)
          i3 = t4._edgeKeyGenerator();
        else if (i3 = "" + i3, t4._edges.has(i3))
          throw new I2("Graph.".concat(e4, ': the "').concat(i3, '" edge already exists in the graph.'));
        var b3 = false, m3 = false;
        l4 || (l4 = Ot(t4, o5, {}), b3 = true, o5 === a5 && (g3 = l4, m3 = true)), g3 || (g3 = Ot(t4, a5, {}), m3 = true), p3 = new V2(r4, i3, l4, g3, c3), t4._edges.set(i3, p3);
        var k3 = o5 === a5;
        return r4 ? (l4.undirectedDegree++, g3.undirectedDegree++, k3 && (l4.undirectedLoops++, t4._undirectedSelfLoopCount++)) : (l4.outDegree++, g3.inDegree++, k3 && (l4.directedLoops++, t4._directedSelfLoopCount++)), t4.multi ? p3.attachMulti() : p3.attach(), r4 ? t4._undirectedSize++ : t4._directedSize++, v3.key = i3, t4.emit("edgeAdded", v3), [i3, true, b3, m3];
      }
      function Mt(t4, e4) {
        t4._edges.delete(e4.key);
        var n4 = e4.source, r4 = e4.target, i3 = e4.attributes, o5 = e4.undirected, a5 = n4 === r4;
        o5 ? (n4.undirectedDegree--, r4.undirectedDegree--, a5 && (n4.undirectedLoops--, t4._undirectedSelfLoopCount--)) : (n4.outDegree--, r4.inDegree--, a5 && (n4.directedLoops--, t4._directedSelfLoopCount--)), t4.multi ? e4.detachMulti() : e4.detach(), o5 ? t4._undirectedSize-- : t4._directedSize--, t4.emit("edgeDropped", { key: e4.key, attributes: i3, source: n4.key, target: r4.key, undirected: o5 });
      }
      var zt = function(n4) {
        function r4(t4) {
          var e4;
          if (e4 = n4.call(this) || this, "boolean" != typeof (t4 = u2({}, Nt, t4)).multi)
            throw new B2(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "`.concat(t4.multi, '".'));
          if (!Dt.has(t4.type))
            throw new B2(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "`.concat(t4.type, '".'));
          if ("boolean" != typeof t4.allowSelfLoops)
            throw new B2(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "`.concat(t4.allowSelfLoops, '".'));
          var r5 = "mixed" === t4.type ? Y : "directed" === t4.type ? q2 : J;
          p2(c2(e4), "NodeDataClass", r5);
          var i4 = "geid_" + St() + "_", o5 = 0;
          return p2(c2(e4), "_attributes", {}), p2(c2(e4), "_nodes", /* @__PURE__ */ new Map()), p2(c2(e4), "_edges", /* @__PURE__ */ new Map()), p2(c2(e4), "_directedSize", 0), p2(c2(e4), "_undirectedSize", 0), p2(c2(e4), "_directedSelfLoopCount", 0), p2(c2(e4), "_undirectedSelfLoopCount", 0), p2(c2(e4), "_edgeKeyGenerator", function() {
            var t5;
            do {
              t5 = i4 + o5++;
            } while (e4._edges.has(t5));
            return t5;
          }), p2(c2(e4), "_options", t4), Ut.forEach(function(t5) {
            return p2(c2(e4), t5, e4[t5]);
          }), f2(c2(e4), "order", function() {
            return e4._nodes.size;
          }), f2(c2(e4), "size", function() {
            return e4._edges.size;
          }), f2(c2(e4), "directedSize", function() {
            return e4._directedSize;
          }), f2(c2(e4), "undirectedSize", function() {
            return e4._undirectedSize;
          }), f2(c2(e4), "selfLoopCount", function() {
            return e4._directedSelfLoopCount + e4._undirectedSelfLoopCount;
          }), f2(c2(e4), "directedSelfLoopCount", function() {
            return e4._directedSelfLoopCount;
          }), f2(c2(e4), "undirectedSelfLoopCount", function() {
            return e4._undirectedSelfLoopCount;
          }), f2(c2(e4), "multi", e4._options.multi), f2(c2(e4), "type", e4._options.type), f2(c2(e4), "allowSelfLoops", e4._options.allowSelfLoops), f2(c2(e4), "implementation", function() {
            return "graphology";
          }), e4;
        }
        e3(r4, n4);
        var i3 = r4.prototype;
        return i3._resetInstanceCounters = function() {
          this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, i3.hasNode = function(t4) {
          return this._nodes.has("" + t4);
        }, i3.hasDirectedEdge = function(t4, e4) {
          if ("undirected" === this.type)
            return false;
          if (1 === arguments.length) {
            var n5 = "" + t4, r5 = this._edges.get(n5);
            return !!r5 && !r5.undirected;
          }
          if (2 === arguments.length) {
            t4 = "" + t4, e4 = "" + e4;
            var i4 = this._nodes.get(t4);
            return !!i4 && i4.out.hasOwnProperty(e4);
          }
          throw new B2("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.hasUndirectedEdge = function(t4, e4) {
          if ("directed" === this.type)
            return false;
          if (1 === arguments.length) {
            var n5 = "" + t4, r5 = this._edges.get(n5);
            return !!r5 && r5.undirected;
          }
          if (2 === arguments.length) {
            t4 = "" + t4, e4 = "" + e4;
            var i4 = this._nodes.get(t4);
            return !!i4 && i4.undirected.hasOwnProperty(e4);
          }
          throw new B2("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.hasEdge = function(t4, e4) {
          if (1 === arguments.length) {
            var n5 = "" + t4;
            return this._edges.has(n5);
          }
          if (2 === arguments.length) {
            t4 = "" + t4, e4 = "" + e4;
            var r5 = this._nodes.get(t4);
            return !!r5 && (void 0 !== r5.out && r5.out.hasOwnProperty(e4) || void 0 !== r5.undirected && r5.undirected.hasOwnProperty(e4));
          }
          throw new B2("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i3.directedEdge = function(t4, e4) {
          if ("undirected" !== this.type) {
            if (t4 = "" + t4, e4 = "" + e4, this.multi)
              throw new I2("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
            var n5 = this._nodes.get(t4);
            if (!n5)
              throw new F2('Graph.directedEdge: could not find the "'.concat(t4, '" source node in the graph.'));
            if (!this._nodes.has(e4))
              throw new F2('Graph.directedEdge: could not find the "'.concat(e4, '" target node in the graph.'));
            var r5 = n5.out && n5.out[e4] || void 0;
            return r5 ? r5.key : void 0;
          }
        }, i3.undirectedEdge = function(t4, e4) {
          if ("directed" !== this.type) {
            if (t4 = "" + t4, e4 = "" + e4, this.multi)
              throw new I2("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
            var n5 = this._nodes.get(t4);
            if (!n5)
              throw new F2('Graph.undirectedEdge: could not find the "'.concat(t4, '" source node in the graph.'));
            if (!this._nodes.has(e4))
              throw new F2('Graph.undirectedEdge: could not find the "'.concat(e4, '" target node in the graph.'));
            var r5 = n5.undirected && n5.undirected[e4] || void 0;
            return r5 ? r5.key : void 0;
          }
        }, i3.edge = function(t4, e4) {
          if (this.multi)
            throw new I2("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.edge: could not find the "'.concat(t4, '" source node in the graph.'));
          if (!this._nodes.has(e4))
            throw new F2('Graph.edge: could not find the "'.concat(e4, '" target node in the graph.'));
          var r5 = n5.out && n5.out[e4] || n5.undirected && n5.undirected[e4] || void 0;
          if (r5)
            return r5.key;
        }, i3.areDirectedNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areDirectedNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && (e4 in n5.in || e4 in n5.out);
        }, i3.areOutNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areOutNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && e4 in n5.out;
        }, i3.areInNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areInNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && e4 in n5.in;
        }, i3.areUndirectedNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areUndirectedNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "directed" !== this.type && e4 in n5.undirected;
        }, i3.areNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && (e4 in n5.in || e4 in n5.out) || "directed" !== this.type && e4 in n5.undirected;
        }, i3.areInboundNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areInboundNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && e4 in n5.in || "directed" !== this.type && e4 in n5.undirected;
        }, i3.areOutboundNeighbors = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.areOutboundNeighbors: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" !== this.type && e4 in n5.out || "directed" !== this.type && e4 in n5.undirected;
        }, i3.inDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.inDegree: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.inDegree;
        }, i3.outDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.outDegree: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.outDegree;
        }, i3.directedDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.directedDegree: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.inDegree + e4.outDegree;
        }, i3.undirectedDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.undirectedDegree: could not find the "'.concat(t4, '" node in the graph.'));
          return "directed" === this.type ? 0 : e4.undirectedDegree;
        }, i3.inboundDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.inboundDegree: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree), "undirected" !== this.type && (n5 += e4.inDegree), n5;
        }, i3.outboundDegree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.outboundDegree: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree), "undirected" !== this.type && (n5 += e4.outDegree), n5;
        }, i3.degree = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.degree: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree), "undirected" !== this.type && (n5 += e4.inDegree + e4.outDegree), n5;
        }, i3.inDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.inDegree - e4.directedLoops;
        }, i3.outDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.outDegree - e4.directedLoops;
        }, i3.directedDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e4.inDegree + e4.outDegree - 2 * e4.directedLoops;
        }, i3.undirectedDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          return "directed" === this.type ? 0 : e4.undirectedDegree - 2 * e4.undirectedLoops;
        }, i3.inboundDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0, r5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree, r5 += 2 * e4.undirectedLoops), "undirected" !== this.type && (n5 += e4.inDegree, r5 += e4.directedLoops), n5 - r5;
        }, i3.outboundDegreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0, r5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree, r5 += 2 * e4.undirectedLoops), "undirected" !== this.type && (n5 += e4.outDegree, r5 += e4.directedLoops), n5 - r5;
        }, i3.degreeWithoutSelfLoops = function(t4) {
          t4 = "" + t4;
          var e4 = this._nodes.get(t4);
          if (!e4)
            throw new F2('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t4, '" node in the graph.'));
          var n5 = 0, r5 = 0;
          return "directed" !== this.type && (n5 += e4.undirectedDegree, r5 += 2 * e4.undirectedLoops), "undirected" !== this.type && (n5 += e4.inDegree + e4.outDegree, r5 += 2 * e4.directedLoops), n5 - r5;
        }, i3.source = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.source: could not find the "'.concat(t4, '" edge in the graph.'));
          return e4.source.key;
        }, i3.target = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.target: could not find the "'.concat(t4, '" edge in the graph.'));
          return e4.target.key;
        }, i3.extremities = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.extremities: could not find the "'.concat(t4, '" edge in the graph.'));
          return [e4.source.key, e4.target.key];
        }, i3.opposite = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._edges.get(e4);
          if (!n5)
            throw new F2('Graph.opposite: could not find the "'.concat(e4, '" edge in the graph.'));
          var r5 = n5.source.key, i4 = n5.target.key;
          if (t4 === r5)
            return i4;
          if (t4 === i4)
            return r5;
          throw new F2('Graph.opposite: the "'.concat(t4, '" node is not attached to the "').concat(e4, '" edge (').concat(r5, ", ").concat(i4, ")."));
        }, i3.hasExtremity = function(t4, e4) {
          t4 = "" + t4, e4 = "" + e4;
          var n5 = this._edges.get(t4);
          if (!n5)
            throw new F2('Graph.hasExtremity: could not find the "'.concat(t4, '" edge in the graph.'));
          return n5.source.key === e4 || n5.target.key === e4;
        }, i3.isUndirected = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.isUndirected: could not find the "'.concat(t4, '" edge in the graph.'));
          return e4.undirected;
        }, i3.isDirected = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.isDirected: could not find the "'.concat(t4, '" edge in the graph.'));
          return !e4.undirected;
        }, i3.isSelfLoop = function(t4) {
          t4 = "" + t4;
          var e4 = this._edges.get(t4);
          if (!e4)
            throw new F2('Graph.isSelfLoop: could not find the "'.concat(t4, '" edge in the graph.'));
          return e4.source === e4.target;
        }, i3.addNode = function(t4, e4) {
          var n5 = function(t5, e5, n6) {
            if (n6 && !s3(n6))
              throw new B2('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n6, '"'));
            if (e5 = "" + e5, n6 = n6 || {}, t5._nodes.has(e5))
              throw new I2('Graph.addNode: the "'.concat(e5, '" node already exist in the graph.'));
            var r5 = new t5.NodeDataClass(e5, n6);
            return t5._nodes.set(e5, r5), t5.emit("nodeAdded", { key: e5, attributes: n6 }), r5;
          }(this, t4, e4);
          return n5.key;
        }, i3.mergeNode = function(t4, e4) {
          if (e4 && !s3(e4))
            throw new B2('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e4, '"'));
          t4 = "" + t4, e4 = e4 || {};
          var n5 = this._nodes.get(t4);
          return n5 ? (e4 && (u2(n5.attributes, e4), this.emit("nodeAttributesUpdated", { type: "merge", key: t4, attributes: n5.attributes, data: e4 })), [t4, false]) : (n5 = new this.NodeDataClass(t4, e4), this._nodes.set(t4, n5), this.emit("nodeAdded", { key: t4, attributes: e4 }), [t4, true]);
        }, i3.updateNode = function(t4, e4) {
          if (e4 && "function" != typeof e4)
            throw new B2('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e4, '"'));
          t4 = "" + t4;
          var n5 = this._nodes.get(t4);
          if (n5) {
            if (e4) {
              var r5 = n5.attributes;
              n5.attributes = e4(r5), this.emit("nodeAttributesUpdated", { type: "replace", key: t4, attributes: n5.attributes });
            }
            return [t4, false];
          }
          var i4 = e4 ? e4({}) : {};
          return n5 = new this.NodeDataClass(t4, i4), this._nodes.set(t4, n5), this.emit("nodeAdded", { key: t4, attributes: i4 }), [t4, true];
        }, i3.dropNode = function(t4) {
          t4 = "" + t4;
          var e4, n5 = this._nodes.get(t4);
          if (!n5)
            throw new F2('Graph.dropNode: could not find the "'.concat(t4, '" node in the graph.'));
          if ("undirected" !== this.type) {
            for (var r5 in n5.out) {
              e4 = n5.out[r5];
              do {
                Mt(this, e4), e4 = e4.next;
              } while (e4);
            }
            for (var i4 in n5.in) {
              e4 = n5.in[i4];
              do {
                Mt(this, e4), e4 = e4.next;
              } while (e4);
            }
          }
          if ("directed" !== this.type)
            for (var o5 in n5.undirected) {
              e4 = n5.undirected[o5];
              do {
                Mt(this, e4), e4 = e4.next;
              } while (e4);
            }
          this._nodes.delete(t4), this.emit("nodeDropped", { key: t4, attributes: n5.attributes });
        }, i3.dropEdge = function(t4) {
          var e4;
          if (arguments.length > 1) {
            var n5 = "" + arguments[0], r5 = "" + arguments[1];
            if (!(e4 = d2(this, n5, r5, this.type)))
              throw new F2('Graph.dropEdge: could not find the "'.concat(n5, '" -> "').concat(r5, '" edge in the graph.'));
          } else if (t4 = "" + t4, !(e4 = this._edges.get(t4)))
            throw new F2('Graph.dropEdge: could not find the "'.concat(t4, '" edge in the graph.'));
          return Mt(this, e4), this;
        }, i3.dropDirectedEdge = function(t4, e4) {
          if (arguments.length < 2)
            throw new I2("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi)
            throw new I2("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n5 = d2(this, t4 = "" + t4, e4 = "" + e4, "directed");
          if (!n5)
            throw new F2('Graph.dropDirectedEdge: could not find a "'.concat(t4, '" -> "').concat(e4, '" edge in the graph.'));
          return Mt(this, n5), this;
        }, i3.dropUndirectedEdge = function(t4, e4) {
          if (arguments.length < 2)
            throw new I2("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi)
            throw new I2("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n5 = d2(this, t4, e4, "undirected");
          if (!n5)
            throw new F2('Graph.dropUndirectedEdge: could not find a "'.concat(t4, '" -> "').concat(e4, '" edge in the graph.'));
          return Mt(this, n5), this;
        }, i3.clear = function() {
          this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, i3.clearEdges = function() {
          for (var t4, e4 = this._nodes.values(); true !== (t4 = e4.next()).done; )
            t4.value.clear();
          this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, i3.getAttribute = function(t4) {
          return this._attributes[t4];
        }, i3.getAttributes = function() {
          return this._attributes;
        }, i3.hasAttribute = function(t4) {
          return this._attributes.hasOwnProperty(t4);
        }, i3.setAttribute = function(t4, e4) {
          return this._attributes[t4] = e4, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t4 }), this;
        }, i3.updateAttribute = function(t4, e4) {
          if ("function" != typeof e4)
            throw new B2("Graph.updateAttribute: updater should be a function.");
          var n5 = this._attributes[t4];
          return this._attributes[t4] = e4(n5), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t4 }), this;
        }, i3.removeAttribute = function(t4) {
          return delete this._attributes[t4], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t4 }), this;
        }, i3.replaceAttributes = function(t4) {
          if (!s3(t4))
            throw new B2("Graph.replaceAttributes: provided attributes are not a plain object.");
          return this._attributes = t4, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
        }, i3.mergeAttributes = function(t4) {
          if (!s3(t4))
            throw new B2("Graph.mergeAttributes: provided attributes are not a plain object.");
          return u2(this._attributes, t4), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t4 }), this;
        }, i3.updateAttributes = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.updateAttributes: provided updater is not a function.");
          return this._attributes = t4(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
        }, i3.updateEachNodeAttributes = function(t4, e4) {
          if ("function" != typeof t4)
            throw new B2("Graph.updateEachNodeAttributes: expecting an updater function.");
          if (e4 && !l3(e4))
            throw new B2("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n5, r5, i4 = this._nodes.values(); true !== (n5 = i4.next()).done; )
            (r5 = n5.value).attributes = t4(r5.key, r5.attributes);
          this.emit("eachNodeAttributesUpdated", { hints: e4 || null });
        }, i3.updateEachEdgeAttributes = function(t4, e4) {
          if ("function" != typeof t4)
            throw new B2("Graph.updateEachEdgeAttributes: expecting an updater function.");
          if (e4 && !l3(e4))
            throw new B2("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n5, r5, i4, o5, a5 = this._edges.values(); true !== (n5 = a5.next()).done; )
            i4 = (r5 = n5.value).source, o5 = r5.target, r5.attributes = t4(r5.key, r5.attributes, i4.key, o5.key, i4.attributes, o5.attributes, r5.undirected);
          this.emit("eachEdgeAttributesUpdated", { hints: e4 || null });
        }, i3.forEachAdjacencyEntry = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.forEachAdjacencyEntry: expecting a callback.");
          xt(false, false, false, this, t4);
        }, i3.forEachAdjacencyEntryWithOrphans = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
          xt(false, false, true, this, t4);
        }, i3.forEachAssymetricAdjacencyEntry = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
          xt(false, true, false, this, t4);
        }, i3.forEachAssymetricAdjacencyEntryWithOrphans = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
          xt(false, true, true, this, t4);
        }, i3.nodes = function() {
          return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
        }, i3.forEachNode = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.forEachNode: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(); true !== (e4 = r5.next()).done; )
            t4((n5 = e4.value).key, n5.attributes);
        }, i3.findNode = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.findNode: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(); true !== (e4 = r5.next()).done; )
            if (t4((n5 = e4.value).key, n5.attributes))
              return n5.key;
        }, i3.mapNodes = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.mapNode: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(), i4 = new Array(this.order), o5 = 0; true !== (e4 = r5.next()).done; )
            n5 = e4.value, i4[o5++] = t4(n5.key, n5.attributes);
          return i4;
        }, i3.someNode = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.someNode: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(); true !== (e4 = r5.next()).done; )
            if (t4((n5 = e4.value).key, n5.attributes))
              return true;
          return false;
        }, i3.everyNode = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.everyNode: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(); true !== (e4 = r5.next()).done; )
            if (!t4((n5 = e4.value).key, n5.attributes))
              return false;
          return true;
        }, i3.filterNodes = function(t4) {
          if ("function" != typeof t4)
            throw new B2("Graph.filterNodes: expecting a callback.");
          for (var e4, n5, r5 = this._nodes.values(), i4 = []; true !== (e4 = r5.next()).done; )
            t4((n5 = e4.value).key, n5.attributes) && i4.push(n5.key);
          return i4;
        }, i3.reduceNodes = function(t4, e4) {
          if ("function" != typeof t4)
            throw new B2("Graph.reduceNodes: expecting a callback.");
          if (arguments.length < 2)
            throw new B2("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
          for (var n5, r5, i4 = e4, o5 = this._nodes.values(); true !== (n5 = o5.next()).done; )
            i4 = t4(i4, (r5 = n5.value).key, r5.attributes);
          return i4;
        }, i3.nodeEntries = function() {
          var t4 = this._nodes.values();
          return new O2(function() {
            var e4 = t4.next();
            if (e4.done)
              return e4;
            var n5 = e4.value;
            return { value: { node: n5.key, attributes: n5.attributes }, done: false };
          });
        }, i3.export = function() {
          var t4 = this, e4 = new Array(this._nodes.size), n5 = 0;
          this._nodes.forEach(function(t5, r6) {
            e4[n5++] = function(t6, e5) {
              var n6 = { key: t6 };
              return h2(e5.attributes) || (n6.attributes = u2({}, e5.attributes)), n6;
            }(r6, t5);
          });
          var r5 = new Array(this._edges.size);
          return n5 = 0, this._edges.forEach(function(e5, i4) {
            r5[n5++] = function(t5, e6, n6) {
              var r6 = { key: e6, source: n6.source.key, target: n6.target.key };
              return h2(n6.attributes) || (r6.attributes = u2({}, n6.attributes)), "mixed" === t5 && n6.undirected && (r6.undirected = true), r6;
            }(t4.type, i4, e5);
          }), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e4, edges: r5 };
        }, i3.import = function(t4) {
          var e4, n5, i4, o5, a5, c3 = this, u3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (t4 instanceof r4)
            return t4.forEachNode(function(t5, e5) {
              u3 ? c3.mergeNode(t5, e5) : c3.addNode(t5, e5);
            }), t4.forEachEdge(function(t5, e5, n6, r5, i5, o6, a6) {
              u3 ? a6 ? c3.mergeUndirectedEdgeWithKey(t5, n6, r5, e5) : c3.mergeDirectedEdgeWithKey(t5, n6, r5, e5) : a6 ? c3.addUndirectedEdgeWithKey(t5, n6, r5, e5) : c3.addDirectedEdgeWithKey(t5, n6, r5, e5);
            }), this;
          if (!s3(t4))
            throw new B2("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
          if (t4.attributes) {
            if (!s3(t4.attributes))
              throw new B2("Graph.import: invalid attributes. Expecting a plain object.");
            u3 ? this.mergeAttributes(t4.attributes) : this.replaceAttributes(t4.attributes);
          }
          if (t4.nodes) {
            if (i4 = t4.nodes, !Array.isArray(i4))
              throw new B2("Graph.import: invalid nodes. Expecting an array.");
            for (e4 = 0, n5 = i4.length; e4 < n5; e4++) {
              Et(o5 = i4[e4]);
              var d3 = o5, h3 = d3.key, p3 = d3.attributes;
              u3 ? this.mergeNode(h3, p3) : this.addNode(h3, p3);
            }
          }
          if (t4.edges) {
            var f3 = false;
            if ("undirected" === this.type && (f3 = true), i4 = t4.edges, !Array.isArray(i4))
              throw new B2("Graph.import: invalid edges. Expecting an array.");
            for (e4 = 0, n5 = i4.length; e4 < n5; e4++) {
              At(a5 = i4[e4]);
              var l4 = a5, g3 = l4.source, y3 = l4.target, w3 = l4.attributes, v3 = l4.undirected, b3 = void 0 === v3 ? f3 : v3;
              "key" in a5 ? (u3 ? b3 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b3 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a5.key, g3, y3, w3) : (u3 ? b3 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b3 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g3, y3, w3);
            }
          }
          return this;
        }, i3.nullCopy = function(t4) {
          var e4 = new r4(u2({}, this._options, t4));
          return e4.replaceAttributes(u2({}, this.getAttributes())), e4;
        }, i3.emptyCopy = function(t4) {
          var e4 = this.nullCopy(t4);
          return this._nodes.forEach(function(t5, n5) {
            var r5 = u2({}, t5.attributes);
            t5 = new e4.NodeDataClass(n5, r5), e4._nodes.set(n5, t5);
          }), e4;
        }, i3.copy = function(t4) {
          if ("string" == typeof (t4 = t4 || {}).type && t4.type !== this.type && "mixed" !== t4.type)
            throw new I2('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t4.type, '" because this would mean losing information about the current graph.'));
          if ("boolean" == typeof t4.multi && t4.multi !== this.multi && true !== t4.multi)
            throw new I2("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
          if ("boolean" == typeof t4.allowSelfLoops && t4.allowSelfLoops !== this.allowSelfLoops && true !== t4.allowSelfLoops)
            throw new I2("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
          for (var e4, n5, r5 = this.emptyCopy(t4), i4 = this._edges.values(); true !== (e4 = i4.next()).done; )
            jt(r5, "copy", false, (n5 = e4.value).undirected, n5.key, n5.source.key, n5.target.key, u2({}, n5.attributes));
          return r5;
        }, i3.toJSON = function() {
          return this.export();
        }, i3.toString = function() {
          return "[object Graph]";
        }, i3.inspect = function() {
          var e4 = this, n5 = {};
          this._nodes.forEach(function(t4, e5) {
            n5[e5] = t4.attributes;
          });
          var r5 = {}, i4 = {};
          this._edges.forEach(function(t4, n6) {
            var o6, a6 = t4.undirected ? "--" : "->", c3 = "", u3 = t4.source.key, d3 = t4.target.key;
            t4.undirected && u3 > d3 && (o6 = u3, u3 = d3, d3 = o6);
            var s4 = "(".concat(u3, ")").concat(a6, "(").concat(d3, ")");
            n6.startsWith("geid_") ? e4.multi && (void 0 === i4[s4] ? i4[s4] = 0 : i4[s4]++, c3 += "".concat(i4[s4], ". ")) : c3 += "[".concat(n6, "]: "), r5[c3 += s4] = t4.attributes;
          });
          var o5 = {};
          for (var a5 in this)
            this.hasOwnProperty(a5) && !Ut.has(a5) && "function" != typeof this[a5] && "symbol" !== t3(a5) && (o5[a5] = this[a5]);
          return o5.attributes = this._attributes, o5.nodes = n5, o5.edges = r5, p2(o5, "constructor", this.constructor), o5;
        }, r4;
      }(y2.exports.EventEmitter);
      "undefined" != typeof Symbol && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{ name: function(t4) {
        return "".concat(t4, "Edge");
      }, generateKey: true }, { name: function(t4) {
        return "".concat(t4, "DirectedEdge");
      }, generateKey: true, type: "directed" }, { name: function(t4) {
        return "".concat(t4, "UndirectedEdge");
      }, generateKey: true, type: "undirected" }, { name: function(t4) {
        return "".concat(t4, "EdgeWithKey");
      } }, { name: function(t4) {
        return "".concat(t4, "DirectedEdgeWithKey");
      }, type: "directed" }, { name: function(t4) {
        return "".concat(t4, "UndirectedEdgeWithKey");
      }, type: "undirected" }].forEach(function(t4) {
        ["add", "merge", "update"].forEach(function(e4) {
          var n4 = t4.name(e4), r4 = "add" === e4 ? jt : Ct;
          t4.generateKey ? zt.prototype[n4] = function(i3, o5, a5) {
            return r4(this, n4, true, "undirected" === (t4.type || this.type), null, i3, o5, a5, "update" === e4);
          } : zt.prototype[n4] = function(i3, o5, a5, c3) {
            return r4(this, n4, false, "undirected" === (t4.type || this.type), i3, o5, a5, c3, "update" === e4);
          };
        });
      }), function(t4) {
        Q.forEach(function(e4) {
          var n4 = e4.name, r4 = e4.attacher;
          r4(t4, n4("Node"), 0), r4(t4, n4("Source"), 1), r4(t4, n4("Target"), 2), r4(t4, n4("Opposite"), 3);
        });
      }(zt), function(t4) {
        X.forEach(function(e4) {
          var n4 = e4.name, r4 = e4.attacher;
          r4(t4, n4("Edge"), "mixed"), r4(t4, n4("DirectedEdge"), "directed"), r4(t4, n4("UndirectedEdge"), "undirected");
        });
      }(zt), function(t4) {
        et.forEach(function(e4) {
          !function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction;
            t5.prototype[n4] = function(t6, e6) {
              if ("mixed" !== r4 && "mixed" !== this.type && r4 !== this.type)
                return [];
              if (!arguments.length)
                return ut(this, r4);
              if (1 === arguments.length) {
                t6 = "" + t6;
                var o5 = this._nodes.get(t6);
                if (void 0 === o5)
                  throw new F2("Graph.".concat(n4, ': could not find the "').concat(t6, '" node in the graph.'));
                return pt(this.multi, "mixed" === r4 ? this.type : r4, i3, o5);
              }
              if (2 === arguments.length) {
                t6 = "" + t6, e6 = "" + e6;
                var a5 = this._nodes.get(t6);
                if (!a5)
                  throw new F2("Graph.".concat(n4, ':  could not find the "').concat(t6, '" source node in the graph.'));
                if (!this._nodes.has(e6))
                  throw new F2("Graph.".concat(n4, ':  could not find the "').concat(e6, '" target node in the graph.'));
                return gt(r4, this.multi, i3, a5, e6);
              }
              throw new B2("Graph.".concat(n4, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
            };
          }(t4, e4), function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction, o5 = "forEach" + n4[0].toUpperCase() + n4.slice(1, -1);
            t5.prototype[o5] = function(t6, e6, n5) {
              if ("mixed" === r4 || "mixed" === this.type || r4 === this.type) {
                if (1 === arguments.length)
                  return dt(false, this, r4, n5 = t6);
                if (2 === arguments.length) {
                  t6 = "" + t6, n5 = e6;
                  var a6 = this._nodes.get(t6);
                  if (void 0 === a6)
                    throw new F2("Graph.".concat(o5, ': could not find the "').concat(t6, '" node in the graph.'));
                  return ht(false, this.multi, "mixed" === r4 ? this.type : r4, i3, a6, n5);
                }
                if (3 === arguments.length) {
                  t6 = "" + t6, e6 = "" + e6;
                  var c4 = this._nodes.get(t6);
                  if (!c4)
                    throw new F2("Graph.".concat(o5, ':  could not find the "').concat(t6, '" source node in the graph.'));
                  if (!this._nodes.has(e6))
                    throw new F2("Graph.".concat(o5, ':  could not find the "').concat(e6, '" target node in the graph.'));
                  return lt(false, r4, this.multi, i3, c4, e6, n5);
                }
                throw new B2("Graph.".concat(o5, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
              }
            };
            var a5 = "map" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[a5] = function() {
              var t6, e6 = Array.prototype.slice.call(arguments), n5 = e6.pop();
              if (0 === e6.length) {
                var i4 = 0;
                "directed" !== r4 && (i4 += this.undirectedSize), "undirected" !== r4 && (i4 += this.directedSize), t6 = new Array(i4);
                var a6 = 0;
                e6.push(function(e7, r5, i5, o6, c4, u4, d3) {
                  t6[a6++] = n5(e7, r5, i5, o6, c4, u4, d3);
                });
              } else
                t6 = [], e6.push(function(e7, r5, i5, o6, a7, c4, u4) {
                  t6.push(n5(e7, r5, i5, o6, a7, c4, u4));
                });
              return this[o5].apply(this, e6), t6;
            };
            var c3 = "filter" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[c3] = function() {
              var t6 = Array.prototype.slice.call(arguments), e6 = t6.pop(), n5 = [];
              return t6.push(function(t7, r5, i4, o6, a6, c4, u4) {
                e6(t7, r5, i4, o6, a6, c4, u4) && n5.push(t7);
              }), this[o5].apply(this, t6), n5;
            };
            var u3 = "reduce" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[u3] = function() {
              var t6, e6, n5 = Array.prototype.slice.call(arguments);
              if (n5.length < 2 || n5.length > 4)
                throw new B2("Graph.".concat(u3, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n5.length, ")."));
              if ("function" == typeof n5[n5.length - 1] && "function" != typeof n5[n5.length - 2])
                throw new B2("Graph.".concat(u3, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              2 === n5.length ? (t6 = n5[0], e6 = n5[1], n5 = []) : 3 === n5.length ? (t6 = n5[1], e6 = n5[2], n5 = [n5[0]]) : 4 === n5.length && (t6 = n5[2], e6 = n5[3], n5 = [n5[0], n5[1]]);
              var r5 = e6;
              return n5.push(function(e7, n6, i4, o6, a6, c4, u4) {
                r5 = t6(r5, e7, n6, i4, o6, a6, c4, u4);
              }), this[o5].apply(this, n5), r5;
            };
          }(t4, e4), function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction, o5 = "find" + n4[0].toUpperCase() + n4.slice(1, -1);
            t5.prototype[o5] = function(t6, e6, n5) {
              if ("mixed" !== r4 && "mixed" !== this.type && r4 !== this.type)
                return false;
              if (1 === arguments.length)
                return dt(true, this, r4, n5 = t6);
              if (2 === arguments.length) {
                t6 = "" + t6, n5 = e6;
                var a6 = this._nodes.get(t6);
                if (void 0 === a6)
                  throw new F2("Graph.".concat(o5, ': could not find the "').concat(t6, '" node in the graph.'));
                return ht(true, this.multi, "mixed" === r4 ? this.type : r4, i3, a6, n5);
              }
              if (3 === arguments.length) {
                t6 = "" + t6, e6 = "" + e6;
                var c4 = this._nodes.get(t6);
                if (!c4)
                  throw new F2("Graph.".concat(o5, ':  could not find the "').concat(t6, '" source node in the graph.'));
                if (!this._nodes.has(e6))
                  throw new F2("Graph.".concat(o5, ':  could not find the "').concat(e6, '" target node in the graph.'));
                return lt(true, r4, this.multi, i3, c4, e6, n5);
              }
              throw new B2("Graph.".concat(o5, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
            };
            var a5 = "some" + n4[0].toUpperCase() + n4.slice(1, -1);
            t5.prototype[a5] = function() {
              var t6 = Array.prototype.slice.call(arguments), e6 = t6.pop();
              return t6.push(function(t7, n5, r5, i4, o6, a6, c4) {
                return e6(t7, n5, r5, i4, o6, a6, c4);
              }), !!this[o5].apply(this, t6);
            };
            var c3 = "every" + n4[0].toUpperCase() + n4.slice(1, -1);
            t5.prototype[c3] = function() {
              var t6 = Array.prototype.slice.call(arguments), e6 = t6.pop();
              return t6.push(function(t7, n5, r5, i4, o6, a6, c4) {
                return !e6(t7, n5, r5, i4, o6, a6, c4);
              }), !this[o5].apply(this, t6);
            };
          }(t4, e4), function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction, o5 = n4.slice(0, -1) + "Entries";
            t5.prototype[o5] = function(t6, e6) {
              if ("mixed" !== r4 && "mixed" !== this.type && r4 !== this.type)
                return O2.empty();
              if (!arguments.length)
                return st(this, r4);
              if (1 === arguments.length) {
                t6 = "" + t6;
                var n5 = this._nodes.get(t6);
                if (!n5)
                  throw new F2("Graph.".concat(o5, ': could not find the "').concat(t6, '" node in the graph.'));
                return ft(r4, i3, n5);
              }
              if (2 === arguments.length) {
                t6 = "" + t6, e6 = "" + e6;
                var a5 = this._nodes.get(t6);
                if (!a5)
                  throw new F2("Graph.".concat(o5, ':  could not find the "').concat(t6, '" source node in the graph.'));
                if (!this._nodes.has(e6))
                  throw new F2("Graph.".concat(o5, ':  could not find the "').concat(e6, '" target node in the graph.'));
                return yt(r4, i3, a5, e6);
              }
              throw new B2("Graph.".concat(o5, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
            };
          }(t4, e4);
        });
      }(zt), function(t4) {
        wt.forEach(function(e4) {
          _t(t4, e4), function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction, o5 = "forEach" + n4[0].toUpperCase() + n4.slice(1, -1);
            t5.prototype[o5] = function(t6, e6) {
              if ("mixed" === r4 || "mixed" === this.type || r4 === this.type) {
                t6 = "" + t6;
                var n5 = this._nodes.get(t6);
                if (void 0 === n5)
                  throw new F2("Graph.".concat(o5, ': could not find the "').concat(t6, '" node in the graph.'));
                mt(false, "mixed" === r4 ? this.type : r4, i3, n5, e6);
              }
            };
            var a5 = "map" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[a5] = function(t6, e6) {
              var n5 = [];
              return this[o5](t6, function(t7, r5) {
                n5.push(e6(t7, r5));
              }), n5;
            };
            var c3 = "filter" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[c3] = function(t6, e6) {
              var n5 = [];
              return this[o5](t6, function(t7, r5) {
                e6(t7, r5) && n5.push(t7);
              }), n5;
            };
            var u3 = "reduce" + n4[0].toUpperCase() + n4.slice(1);
            t5.prototype[u3] = function(t6, e6, n5) {
              if (arguments.length < 3)
                throw new B2("Graph.".concat(u3, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              var r5 = n5;
              return this[o5](t6, function(t7, n6) {
                r5 = e6(r5, t7, n6);
              }), r5;
            };
          }(t4, e4), function(t5, e5) {
            var n4 = e5.name, r4 = e5.type, i3 = e5.direction, o5 = n4[0].toUpperCase() + n4.slice(1, -1), a5 = "find" + o5;
            t5.prototype[a5] = function(t6, e6) {
              if ("mixed" === r4 || "mixed" === this.type || r4 === this.type) {
                t6 = "" + t6;
                var n5 = this._nodes.get(t6);
                if (void 0 === n5)
                  throw new F2("Graph.".concat(a5, ': could not find the "').concat(t6, '" node in the graph.'));
                return mt(true, "mixed" === r4 ? this.type : r4, i3, n5, e6);
              }
            };
            var c3 = "some" + o5;
            t5.prototype[c3] = function(t6, e6) {
              return !!this[a5](t6, e6);
            };
            var u3 = "every" + o5;
            t5.prototype[u3] = function(t6, e6) {
              return !this[a5](t6, function(t7, n5) {
                return !e6(t7, n5);
              });
            };
          }(t4, e4), Gt(t4, e4);
        });
      }(zt);
      var Wt = function(t4) {
        function n4(e4) {
          var n5 = u2({ type: "directed" }, e4);
          if ("multi" in n5 && false !== n5.multi)
            throw new B2("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("directed" !== n5.type)
            throw new B2('DirectedGraph.from: inconsistent "' + n5.type + '" type in given options!');
          return t4.call(this, n5) || this;
        }
        return e3(n4, t4), n4;
      }(zt), Pt = function(t4) {
        function n4(e4) {
          var n5 = u2({ type: "undirected" }, e4);
          if ("multi" in n5 && false !== n5.multi)
            throw new B2("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("undirected" !== n5.type)
            throw new B2('UndirectedGraph.from: inconsistent "' + n5.type + '" type in given options!');
          return t4.call(this, n5) || this;
        }
        return e3(n4, t4), n4;
      }(zt), Rt = function(t4) {
        function n4(e4) {
          var n5 = u2({ multi: true }, e4);
          if ("multi" in n5 && true !== n5.multi)
            throw new B2("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
          return t4.call(this, n5) || this;
        }
        return e3(n4, t4), n4;
      }(zt), Kt = function(t4) {
        function n4(e4) {
          var n5 = u2({ type: "directed", multi: true }, e4);
          if ("multi" in n5 && true !== n5.multi)
            throw new B2("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("directed" !== n5.type)
            throw new B2('MultiDirectedGraph.from: inconsistent "' + n5.type + '" type in given options!');
          return t4.call(this, n5) || this;
        }
        return e3(n4, t4), n4;
      }(zt), Tt = function(t4) {
        function n4(e4) {
          var n5 = u2({ type: "undirected", multi: true }, e4);
          if ("multi" in n5 && true !== n5.multi)
            throw new B2("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("undirected" !== n5.type)
            throw new B2('MultiUndirectedGraph.from: inconsistent "' + n5.type + '" type in given options!');
          return t4.call(this, n5) || this;
        }
        return e3(n4, t4), n4;
      }(zt);
      function Bt(t4) {
        t4.from = function(e4, n4) {
          var r4 = u2({}, e4.options, n4), i3 = new t4(r4);
          return i3.import(e4), i3;
        };
      }
      return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B2, zt.NotFoundGraphError = F2, zt.UsageGraphError = I2, zt;
    });
  }
});

// node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.7/node_modules/graphology-utils/defaults.js
var require_defaults = __commonJS({
  "node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.7/node_modules/graphology-utils/defaults.js"(exports, module) {
    function isLeaf(o4) {
      return !o4 || typeof o4 !== "object" || typeof o4 === "function" || Array.isArray(o4) || o4 instanceof Set || o4 instanceof Map || o4 instanceof RegExp || o4 instanceof Date;
    }
    function resolveDefaults(target, defaults) {
      target = target || {};
      var output = {};
      for (var k2 in defaults) {
        var existing = target[k2];
        var def = defaults[k2];
        if (!isLeaf(def)) {
          output[k2] = resolveDefaults(existing, def);
          continue;
        }
        if (existing === void 0) {
          output[k2] = def;
        } else {
          output[k2] = existing;
        }
      }
      return output;
    }
    module.exports = resolveDefaults;
  }
});

// node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.7/node_modules/graphology-utils/is-graph.js
var require_is_graph = __commonJS({
  "node_modules/.pnpm/graphology-utils@2.5.2_graphology-types@0.24.7/node_modules/graphology-utils/is-graph.js"(exports, module) {
    module.exports = function isGraph(value) {
      return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
    };
  }
});

// node_modules/.pnpm/graphology-layout@0.6.1_graphology-types@0.24.7/node_modules/graphology-layout/circular.js
var require_circular = __commonJS({
  "node_modules/.pnpm/graphology-layout@0.6.1_graphology-types@0.24.7/node_modules/graphology-layout/circular.js"(exports, module) {
    var resolveDefaults = require_defaults();
    var isGraph = require_is_graph();
    var DEFAULTS = {
      dimensions: ["x", "y"],
      center: 0.5,
      scale: 1
    };
    function genericCircularLayout(assign, graph, options) {
      if (!isGraph(graph))
        throw new Error(
          "graphology-layout/random: the given graph is not a valid graphology instance."
        );
      options = resolveDefaults(options, DEFAULTS);
      var dimensions = options.dimensions;
      if (!Array.isArray(dimensions) || dimensions.length !== 2)
        throw new Error("graphology-layout/random: given dimensions are invalid.");
      var center = options.center;
      var scale = options.scale;
      var tau = Math.PI * 2;
      var offset = (center - 0.5) * scale;
      var l3 = graph.order;
      var x2 = dimensions[0];
      var y2 = dimensions[1];
      function assignPosition(i3, target) {
        target[x2] = scale * Math.cos(i3 * tau / l3) + offset;
        target[y2] = scale * Math.sin(i3 * tau / l3) + offset;
        return target;
      }
      var i2 = 0;
      if (!assign) {
        var positions = {};
        graph.forEachNode(function(node) {
          positions[node] = assignPosition(i2++, {});
        });
        return positions;
      }
      graph.updateEachNodeAttributes(
        function(_2, attr) {
          assignPosition(i2++, attr);
          return attr;
        },
        {
          attributes: dimensions
        }
      );
    }
    var circularLayout = genericCircularLayout.bind(null, false);
    circularLayout.assign = genericCircularLayout.bind(null, true);
    module.exports = circularLayout;
  }
});

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e3) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n3, iteratee) {
        var index = -1, result = Array(n3);
        while (++index < n3) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue2(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e3) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n3) {
          return shuffleSelf(copyArray(array), baseClamp(n3, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n3) {
          var length = array.length;
          if (!length) {
            return;
          }
          n3 += n3 < 0 ? length : 0;
          return isIndex(n3, length) ? array[n3] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n3) {
          var result2 = "";
          if (!string || n3 < 1 || n3 > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n3 % 2) {
              result2 += string;
            }
            n3 = nativeFloor(n3 / 2);
            if (n3) {
              string += string;
            }
          } while (n3);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n3) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n3, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue2(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e3) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e3) {
            }
            try {
              return func + "";
            } catch (e3) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n3, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n3 = guard || n3 === undefined2 ? 1 : toInteger(n3);
          return baseSlice(array, n3 < 0 ? 0 : n3, length);
        }
        function dropRight(array, n3, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n3 = guard || n3 === undefined2 ? 1 : toInteger(n3);
          n3 = length - n3;
          return baseSlice(array, 0, n3 < 0 ? 0 : n3);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n3) {
          return array && array.length ? baseNth(array, toInteger(n3)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n3, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n3 = guard || n3 === undefined2 ? 1 : toInteger(n3);
          return baseSlice(array, 0, n3 < 0 ? 0 : n3);
        }
        function takeRight(array, n3, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n3 = guard || n3 === undefined2 ? 1 : toInteger(n3);
          n3 = length - n3;
          return baseSlice(array, n3 < 0 ? 0 : n3, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n3, guard) {
          if (guard ? isIterateeCall(collection, n3, guard) : n3 === undefined2) {
            n3 = 1;
          } else {
            n3 = toInteger(n3);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n3);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n3, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n3 = toInteger(n3);
          return function() {
            if (--n3 < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n3, guard) {
          n3 = guard ? undefined2 : n3;
          n3 = func && n3 == null ? func.length : n3;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n3);
        }
        function before(n3, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n3 = toInteger(n3);
          return function() {
            if (--n3 > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n3 <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase2 = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n3, guard) {
          if (guard ? isIterateeCall(string, n3, guard) : n3 === undefined2) {
            n3 = 1;
          } else {
            n3 = toInteger(n3);
          }
          return baseRepeat(toString(string), n3);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e3) {
            return isError(e3) ? e3 : new Error2(e3);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n3) {
          n3 = toInteger(n3);
          return baseRest(function(args) {
            return baseNth(args, n3);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n3, iteratee2) {
          n3 = toInteger(n3);
          if (n3 < 1 || n3 > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n3, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n3 -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n3) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase2;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n3) {
            n3 = n3 === undefined2 ? 1 : nativeMax(toInteger(n3), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n3, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n3, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n3) {
            return this.reverse()[methodName](n3).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(exports);
  }
});

// node_modules/.pnpm/@yomguithereal+helpers@1.1.1/node_modules/@yomguithereal/helpers/extend.js
var require_extend = __commonJS({
  "node_modules/.pnpm/@yomguithereal+helpers@1.1.1/node_modules/@yomguithereal/helpers/extend.js"(exports, module) {
    module.exports = function extend(array, values) {
      var l22 = values.length;
      if (l22 === 0)
        return;
      var l1 = array.length;
      array.length += l22;
      for (var i2 = 0; i2 < l22; i2++)
        array[l1 + i2] = values[i2];
    };
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/matrices.js
var require_matrices = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/matrices.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiplyVec2 = exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = void 0;
    function identity() {
      return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    exports.identity = identity;
    function scale(m2, x2, y2) {
      m2[0] = x2;
      m2[4] = typeof y2 === "number" ? y2 : x2;
      return m2;
    }
    exports.scale = scale;
    function rotate(m2, r3) {
      var s3 = Math.sin(r3), c2 = Math.cos(r3);
      m2[0] = c2;
      m2[1] = s3;
      m2[3] = -s3;
      m2[4] = c2;
      return m2;
    }
    exports.rotate = rotate;
    function translate(m2, x2, y2) {
      m2[6] = x2;
      m2[7] = y2;
      return m2;
    }
    exports.translate = translate;
    function multiply(a4, b2) {
      var a00 = a4[0], a01 = a4[1], a02 = a4[2];
      var a10 = a4[3], a11 = a4[4], a12 = a4[5];
      var a20 = a4[6], a21 = a4[7], a22 = a4[8];
      var b00 = b2[0], b01 = b2[1], b02 = b2[2];
      var b10 = b2[3], b11 = b2[4], b12 = b2[5];
      var b20 = b2[6], b21 = b2[7], b22 = b2[8];
      a4[0] = b00 * a00 + b01 * a10 + b02 * a20;
      a4[1] = b00 * a01 + b01 * a11 + b02 * a21;
      a4[2] = b00 * a02 + b01 * a12 + b02 * a22;
      a4[3] = b10 * a00 + b11 * a10 + b12 * a20;
      a4[4] = b10 * a01 + b11 * a11 + b12 * a21;
      a4[5] = b10 * a02 + b11 * a12 + b12 * a22;
      a4[6] = b20 * a00 + b21 * a10 + b22 * a20;
      a4[7] = b20 * a01 + b21 * a11 + b22 * a21;
      a4[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return a4;
    }
    exports.multiply = multiply;
    function multiplyVec2(a4, b2, z2) {
      if (z2 === void 0) {
        z2 = 1;
      }
      var a00 = a4[0];
      var a01 = a4[1];
      var a10 = a4[3];
      var a11 = a4[4];
      var a20 = a4[6];
      var a21 = a4[7];
      var b0 = b2.x;
      var b1 = b2.y;
      return { x: b0 * a00 + b1 * a10 + a20 * z2, y: b0 * a01 + b1 * a11 + a21 * z2 };
    }
    exports.multiplyVec2 = multiplyVec2;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/data.js
var require_data = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/data.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTML_COLORS = void 0;
    exports.HTML_COLORS = {
      black: "#000000",
      silver: "#C0C0C0",
      gray: "#808080",
      grey: "#808080",
      white: "#FFFFFF",
      maroon: "#800000",
      red: "#FF0000",
      purple: "#800080",
      fuchsia: "#FF00FF",
      green: "#008000",
      lime: "#00FF00",
      olive: "#808000",
      yellow: "#FFFF00",
      navy: "#000080",
      blue: "#0000FF",
      teal: "#008080",
      aqua: "#00FFFF",
      darkblue: "#00008B",
      mediumblue: "#0000CD",
      darkgreen: "#006400",
      darkcyan: "#008B8B",
      deepskyblue: "#00BFFF",
      darkturquoise: "#00CED1",
      mediumspringgreen: "#00FA9A",
      springgreen: "#00FF7F",
      cyan: "#00FFFF",
      midnightblue: "#191970",
      dodgerblue: "#1E90FF",
      lightseagreen: "#20B2AA",
      forestgreen: "#228B22",
      seagreen: "#2E8B57",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      limegreen: "#32CD32",
      mediumseagreen: "#3CB371",
      turquoise: "#40E0D0",
      royalblue: "#4169E1",
      steelblue: "#4682B4",
      darkslateblue: "#483D8B",
      mediumturquoise: "#48D1CC",
      indigo: "#4B0082",
      darkolivegreen: "#556B2F",
      cadetblue: "#5F9EA0",
      cornflowerblue: "#6495ED",
      rebeccapurple: "#663399",
      mediumaquamarine: "#66CDAA",
      dimgray: "#696969",
      dimgrey: "#696969",
      slateblue: "#6A5ACD",
      olivedrab: "#6B8E23",
      slategray: "#708090",
      slategrey: "#708090",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      mediumslateblue: "#7B68EE",
      lawngreen: "#7CFC00",
      chartreuse: "#7FFF00",
      aquamarine: "#7FFFD4",
      skyblue: "#87CEEB",
      lightskyblue: "#87CEFA",
      blueviolet: "#8A2BE2",
      darkred: "#8B0000",
      darkmagenta: "#8B008B",
      saddlebrown: "#8B4513",
      darkseagreen: "#8FBC8F",
      lightgreen: "#90EE90",
      mediumpurple: "#9370DB",
      darkviolet: "#9400D3",
      palegreen: "#98FB98",
      darkorchid: "#9932CC",
      yellowgreen: "#9ACD32",
      sienna: "#A0522D",
      brown: "#A52A2A",
      darkgray: "#A9A9A9",
      darkgrey: "#A9A9A9",
      lightblue: "#ADD8E6",
      greenyellow: "#ADFF2F",
      paleturquoise: "#AFEEEE",
      lightsteelblue: "#B0C4DE",
      powderblue: "#B0E0E6",
      firebrick: "#B22222",
      darkgoldenrod: "#B8860B",
      mediumorchid: "#BA55D3",
      rosybrown: "#BC8F8F",
      darkkhaki: "#BDB76B",
      mediumvioletred: "#C71585",
      indianred: "#CD5C5C",
      peru: "#CD853F",
      chocolate: "#D2691E",
      tan: "#D2B48C",
      lightgray: "#D3D3D3",
      lightgrey: "#D3D3D3",
      thistle: "#D8BFD8",
      orchid: "#DA70D6",
      goldenrod: "#DAA520",
      palevioletred: "#DB7093",
      crimson: "#DC143C",
      gainsboro: "#DCDCDC",
      plum: "#DDA0DD",
      burlywood: "#DEB887",
      lightcyan: "#E0FFFF",
      lavender: "#E6E6FA",
      darksalmon: "#E9967A",
      violet: "#EE82EE",
      palegoldenrod: "#EEE8AA",
      lightcoral: "#F08080",
      khaki: "#F0E68C",
      aliceblue: "#F0F8FF",
      honeydew: "#F0FFF0",
      azure: "#F0FFFF",
      sandybrown: "#F4A460",
      wheat: "#F5DEB3",
      beige: "#F5F5DC",
      whitesmoke: "#F5F5F5",
      mintcream: "#F5FFFA",
      ghostwhite: "#F8F8FF",
      salmon: "#FA8072",
      antiquewhite: "#FAEBD7",
      linen: "#FAF0E6",
      lightgoldenrodyellow: "#FAFAD2",
      oldlace: "#FDF5E6",
      magenta: "#FF00FF",
      deeppink: "#FF1493",
      orangered: "#FF4500",
      tomato: "#FF6347",
      hotpink: "#FF69B4",
      coral: "#FF7F50",
      darkorange: "#FF8C00",
      lightsalmon: "#FFA07A",
      orange: "#FFA500",
      lightpink: "#FFB6C1",
      pink: "#FFC0CB",
      gold: "#FFD700",
      peachpuff: "#FFDAB9",
      navajowhite: "#FFDEAD",
      moccasin: "#FFE4B5",
      bisque: "#FFE4C4",
      mistyrose: "#FFE4E1",
      blanchedalmond: "#FFEBCD",
      papayawhip: "#FFEFD5",
      lavenderblush: "#FFF0F5",
      seashell: "#FFF5EE",
      cornsilk: "#FFF8DC",
      lemonchiffon: "#FFFACD",
      floralwhite: "#FFFAF0",
      snow: "#FFFAFA",
      lightyellow: "#FFFFE0",
      ivory: "#FFFFF0"
    };
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/index.js
var require_utils = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/index.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o4, n3) {
      var m2 = typeof Symbol === "function" && o4[Symbol.iterator];
      if (!m2)
        return o4;
      var i2 = m2.call(o4), r3, ar = [], e3;
      try {
        while ((n3 === void 0 || n3-- > 0) && !(r3 = i2.next()).done)
          ar.push(r3.value);
      } catch (error) {
        e3 = { error };
      } finally {
        try {
          if (r3 && !r3.done && (m2 = i2["return"]))
            m2.call(i2);
        } finally {
          if (e3)
            throw e3.error;
        }
      }
      return ar;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.getMatrixImpact = exports.matrixFromCamera = exports.getCorrectionRatio = exports.floatColor = exports.floatArrayColor = exports.parseColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.graphExtent = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.assign = exports.isPlainObject = void 0;
    var is_graph_1 = __importDefault(require_is_graph());
    var matrices_1 = require_matrices();
    var data_1 = require_data();
    function isPlainObject(value) {
      return typeof value === "object" && value !== null && value.constructor === Object;
    }
    exports.isPlainObject = isPlainObject;
    function assign(target) {
      var objects = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
      }
      target = target || {};
      for (var i2 = 0, l3 = objects.length; i2 < l3; i2++) {
        var o4 = objects[i2];
        if (!o4)
          continue;
        Object.assign(target, o4);
      }
      return target;
    }
    exports.assign = assign;
    function assignDeep(target) {
      var objects = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
      }
      target = target || {};
      for (var i2 = 0, l3 = objects.length; i2 < l3; i2++) {
        var o4 = objects[i2];
        if (!o4)
          continue;
        for (var k2 in o4) {
          if (isPlainObject(o4[k2])) {
            target[k2] = assignDeep(target[k2], o4[k2]);
          } else {
            target[k2] = o4[k2];
          }
        }
      }
      return target;
    }
    exports.assignDeep = assignDeep;
    exports.requestFrame = typeof requestAnimationFrame !== "undefined" ? function(callback) {
      return requestAnimationFrame(callback);
    } : function(callback) {
      return setTimeout(callback, 0);
    };
    exports.cancelFrame = typeof cancelAnimationFrame !== "undefined" ? function(requestID) {
      return cancelAnimationFrame(requestID);
    } : function(requestID) {
      return clearTimeout(requestID);
    };
    function createElement5(tag, style, attributes) {
      var element = document.createElement(tag);
      if (style) {
        for (var k2 in style) {
          element.style[k2] = style[k2];
        }
      }
      if (attributes) {
        for (var k2 in attributes) {
          element.setAttribute(k2, attributes[k2]);
        }
      }
      return element;
    }
    exports.createElement = createElement5;
    function getPixelRatio() {
      if (typeof window.devicePixelRatio !== "undefined")
        return window.devicePixelRatio;
      return 1;
    }
    exports.getPixelRatio = getPixelRatio;
    function graphExtent(graph) {
      if (!graph.order)
        return { x: [0, 1], y: [0, 1] };
      var xMin = Infinity;
      var xMax = -Infinity;
      var yMin = Infinity;
      var yMax = -Infinity;
      graph.forEachNode(function(_2, attr) {
        var x2 = attr.x, y2 = attr.y;
        if (x2 < xMin)
          xMin = x2;
        if (x2 > xMax)
          xMax = x2;
        if (y2 < yMin)
          yMin = y2;
        if (y2 > yMax)
          yMax = y2;
      });
      return { x: [xMin, xMax], y: [yMin, yMax] };
    }
    exports.graphExtent = graphExtent;
    function createNormalizationFunction(extent) {
      var _a = __read(extent.x, 2), minX = _a[0], maxX = _a[1], _b = __read(extent.y, 2), minY = _b[0], maxY = _b[1];
      var ratio = Math.max(maxX - minX, maxY - minY), dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
      if (ratio === 0 || Math.abs(ratio) === Infinity || isNaN(ratio))
        ratio = 1;
      if (isNaN(dX))
        dX = 0;
      if (isNaN(dY))
        dY = 0;
      var fn = function(data) {
        return {
          x: 0.5 + (data.x - dX) / ratio,
          y: 0.5 + (data.y - dY) / ratio
        };
      };
      fn.applyTo = function(data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
      };
      fn.inverse = function(data) {
        return {
          x: dX + ratio * (data.x - 0.5),
          y: dY + ratio * (data.y - 0.5)
        };
      };
      fn.ratio = ratio;
      return fn;
    }
    exports.createNormalizationFunction = createNormalizationFunction;
    function zIndexOrdering(extent, getter, elements) {
      return elements.sort(function(a4, b2) {
        var zA = getter(a4) || 0, zB = getter(b2) || 0;
        if (zA < zB)
          return -1;
        if (zA > zB)
          return 1;
        return 0;
      });
    }
    exports.zIndexOrdering = zIndexOrdering;
    var INT8 = new Int8Array(4);
    var INT32 = new Int32Array(INT8.buffer, 0, 1);
    var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
    var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
    var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
    function parseColor(val) {
      var r3 = 0;
      var g2 = 0;
      var b2 = 0;
      var a4 = 1;
      if (val[0] === "#") {
        if (val.length === 4) {
          r3 = parseInt(val.charAt(1) + val.charAt(1), 16);
          g2 = parseInt(val.charAt(2) + val.charAt(2), 16);
          b2 = parseInt(val.charAt(3) + val.charAt(3), 16);
        } else {
          r3 = parseInt(val.charAt(1) + val.charAt(2), 16);
          g2 = parseInt(val.charAt(3) + val.charAt(4), 16);
          b2 = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
        if (val.length === 9) {
          a4 = parseInt(val.charAt(7) + val.charAt(8), 16) / 255;
        }
      } else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
          r3 = +match[1];
          g2 = +match[2];
          b2 = +match[3];
          if (match[4])
            a4 = +match[4];
        }
      }
      return { r: r3, g: g2, b: b2, a: a4 };
    }
    exports.parseColor = parseColor;
    var FLOAT_COLOR_CACHE = {};
    for (htmlColor in data_1.HTML_COLORS) {
      FLOAT_COLOR_CACHE[htmlColor] = floatColor(data_1.HTML_COLORS[htmlColor]);
      FLOAT_COLOR_CACHE[data_1.HTML_COLORS[htmlColor]] = FLOAT_COLOR_CACHE[htmlColor];
    }
    var htmlColor;
    function floatArrayColor(val) {
      val = data_1.HTML_COLORS[val] || val;
      var _a = parseColor(val), r3 = _a.r, g2 = _a.g, b2 = _a.b, a4 = _a.a;
      return new Float32Array([r3 / 255, g2 / 255, b2 / 255, a4]);
    }
    exports.floatArrayColor = floatArrayColor;
    function floatColor(val) {
      if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
        return FLOAT_COLOR_CACHE[val];
      var parsed = parseColor(val);
      var r3 = parsed.r, g2 = parsed.g, b2 = parsed.b;
      var a4 = parsed.a;
      a4 = a4 * 255 | 0;
      INT32[0] = (a4 << 24 | b2 << 16 | g2 << 8 | r3) & 4278190079;
      var color = FLOAT32[0];
      FLOAT_COLOR_CACHE[val] = color;
      return color;
    }
    exports.floatColor = floatColor;
    function getCorrectionRatio(viewportDimensions, graphDimensions) {
      var viewportRatio = viewportDimensions.height / viewportDimensions.width;
      var graphRatio = graphDimensions.height / graphDimensions.width;
      if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
        return 1;
      }
      return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
    }
    exports.getCorrectionRatio = getCorrectionRatio;
    function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
      var angle = state.angle, ratio = state.ratio, x2 = state.x, y2 = state.y;
      var width = viewportDimensions.width, height = viewportDimensions.height;
      var matrix = (0, matrices_1.identity)();
      var smallestDimension = Math.min(width, height) - 2 * padding;
      var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
      if (!inverse) {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), -angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 1 / ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), -x2, -y2));
      } else {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), x2, y2));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
      }
      return matrix;
    }
    exports.matrixFromCamera = matrixFromCamera;
    function getMatrixImpact(matrix, cameraState, viewportDimensions) {
      var _a = (0, matrices_1.multiplyVec2)(matrix, { x: Math.cos(cameraState.angle), y: Math.sin(cameraState.angle) }, 0), x2 = _a.x, y2 = _a.y;
      return 1 / Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2)) / viewportDimensions.width;
    }
    exports.getMatrixImpact = getMatrixImpact;
    function extractPixel(gl, x2, y2, array) {
      var data = array || new Uint8Array(4);
      gl.readPixels(x2, y2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
      return data;
    }
    exports.extractPixel = extractPixel;
    function canUse32BitsIndices(gl) {
      var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
      return webgl2 || !!gl.getExtension("OES_element_index_uint");
    }
    exports.canUse32BitsIndices = canUse32BitsIndices;
    function validateGraph(graph) {
      if (!(0, is_graph_1.default)(graph))
        throw new Error("Sigma: invalid graph instance.");
      graph.forEachNode(function(key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
          throw new Error("Sigma: Coordinates of node ".concat(key, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
        }
      });
    }
    exports.validateGraph = validateGraph;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/easings.js
var require_easings = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/easings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;
    var linear = function(k2) {
      return k2;
    };
    exports.linear = linear;
    var quadraticIn = function(k2) {
      return k2 * k2;
    };
    exports.quadraticIn = quadraticIn;
    var quadraticOut = function(k2) {
      return k2 * (2 - k2);
    };
    exports.quadraticOut = quadraticOut;
    var quadraticInOut = function(k2) {
      if ((k2 *= 2) < 1)
        return 0.5 * k2 * k2;
      return -0.5 * (--k2 * (k2 - 2) - 1);
    };
    exports.quadraticInOut = quadraticInOut;
    var cubicIn = function(k2) {
      return k2 * k2 * k2;
    };
    exports.cubicIn = cubicIn;
    var cubicOut = function(k2) {
      return --k2 * k2 * k2 + 1;
    };
    exports.cubicOut = cubicOut;
    var cubicInOut = function(k2) {
      if ((k2 *= 2) < 1)
        return 0.5 * k2 * k2 * k2;
      return 0.5 * ((k2 -= 2) * k2 * k2 + 2);
    };
    exports.cubicInOut = cubicInOut;
    var easings = {
      linear: exports.linear,
      quadraticIn: exports.quadraticIn,
      quadraticOut: exports.quadraticOut,
      quadraticInOut: exports.quadraticInOut,
      cubicIn: exports.cubicIn,
      cubicOut: exports.cubicOut,
      cubicInOut: exports.cubicInOut
    };
    exports.default = easings;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/animate.js
var require_animate = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/animate.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animateNodes = exports.ANIMATE_DEFAULTS = void 0;
    var index_1 = require_utils();
    var easings_1 = __importDefault(require_easings());
    exports.ANIMATE_DEFAULTS = {
      easing: "quadraticInOut",
      duration: 150
    };
    function animateNodes(graph, targets, opts, callback) {
      var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
      var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
      var start = Date.now();
      var startPositions = {};
      for (var node in targets) {
        var attrs = targets[node];
        startPositions[node] = {};
        for (var k2 in attrs)
          startPositions[node][k2] = graph.getNodeAttribute(node, k2);
      }
      var frame = null;
      var step = function() {
        frame = null;
        var p2 = (Date.now() - start) / options.duration;
        if (p2 >= 1) {
          for (var node2 in targets) {
            var attrs2 = targets[node2];
            for (var k3 in attrs2)
              graph.setNodeAttribute(node2, k3, attrs2[k3]);
          }
          if (typeof callback === "function")
            callback();
          return;
        }
        p2 = easing(p2);
        for (var node2 in targets) {
          var attrs2 = targets[node2];
          var s3 = startPositions[node2];
          for (var k3 in attrs2)
            graph.setNodeAttribute(node2, k3, attrs2[k3] * p2 + s3[k3] * (1 - p2));
        }
        frame = (0, index_1.requestFrame)(step);
      };
      step();
      return function() {
        if (frame)
          (0, index_1.cancelFrame)(frame);
      };
    }
    exports.animateNodes = animateNodes;
  }
});

// node_modules/.pnpm/events@3.3.0/node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/.pnpm/events@3.3.0/node_modules/events/events.js"(exports, module) {
    "use strict";
    var R2 = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R2 && typeof R2.apply === "function" ? R2.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R2 && typeof R2.ownKeys === "function") {
      ReflectOwnKeys = R2.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning3) {
      if (console && console.warn)
        console.warn(warning3);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n3) {
      if (typeof n3 !== "number" || n3 < 0 || NumberIsNaN(n3)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n3 + ".");
      }
      this._maxListeners = n3;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i2 = 1; i2 < arguments.length; i2++)
        args.push(arguments[i2]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i2 = 0; i2 < len; ++i2)
          ReflectApply(listeners[i2], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m2;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m2 = _getMaxListeners(target);
        if (m2 > 0 && existing.length > m2 && !existing.warned) {
          existing.warned = true;
          var w2 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w2.name = "MaxListenersExceededWarning";
          w2.emitter = target;
          w2.type = type;
          w2.count = existing.length;
          ProcessEmitWarning(w2);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i2, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i2 = list.length - 1; i2 >= 0; i2--) {
          if (list[i2] === listener || list[i2].listener === listener) {
            originalListener = list[i2].listener;
            position = i2;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i2;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i2 = 0; i2 < keys.length; ++i2) {
          key = keys[i2];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i2 = listeners.length - 1; i2 >= 0; i2--) {
          this.removeListener(type, listeners[i2]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n3) {
      var copy = new Array(n3);
      for (var i2 = 0; i2 < n3; ++i2)
        copy[i2] = arr[i2];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i2 = 0; i2 < ret.length; ++i2) {
        ret[i2] = arr[i2].listener || arr[i2];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/types.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypedEventEmitter = void 0;
    var events_1 = require_events();
    var TypedEventEmitter = (
      /** @class */
      function(_super) {
        __extends(TypedEventEmitter2, _super);
        function TypedEventEmitter2() {
          var _this = _super.call(this) || this;
          _this.rawEmitter = _this;
          return _this;
        }
        return TypedEventEmitter2;
      }(events_1.EventEmitter)
    );
    exports.TypedEventEmitter = TypedEventEmitter;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/camera.js
var require_camera = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/camera.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var animate_1 = require_animate();
    var easings_1 = __importDefault(require_easings());
    var utils_1 = require_utils();
    var types_1 = require_types();
    var DEFAULT_ZOOMING_RATIO = 1.5;
    var Camera = (
      /** @class */
      function(_super) {
        __extends(Camera2, _super);
        function Camera2() {
          var _this = _super.call(this) || this;
          _this.x = 0.5;
          _this.y = 0.5;
          _this.angle = 0;
          _this.ratio = 1;
          _this.minRatio = null;
          _this.maxRatio = null;
          _this.nextFrame = null;
          _this.previousState = null;
          _this.enabled = true;
          _this.previousState = _this.getState();
          return _this;
        }
        Camera2.from = function(state) {
          var camera = new Camera2();
          return camera.setState(state);
        };
        Camera2.prototype.enable = function() {
          this.enabled = true;
          return this;
        };
        Camera2.prototype.disable = function() {
          this.enabled = false;
          return this;
        };
        Camera2.prototype.getState = function() {
          return {
            x: this.x,
            y: this.y,
            angle: this.angle,
            ratio: this.ratio
          };
        };
        Camera2.prototype.hasState = function(state) {
          return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
        };
        Camera2.prototype.getPreviousState = function() {
          var state = this.previousState;
          if (!state)
            return null;
          return {
            x: state.x,
            y: state.y,
            angle: state.angle,
            ratio: state.ratio
          };
        };
        Camera2.prototype.getBoundedRatio = function(ratio) {
          var r3 = ratio;
          if (typeof this.minRatio === "number")
            r3 = Math.max(r3, this.minRatio);
          if (typeof this.maxRatio === "number")
            r3 = Math.min(r3, this.maxRatio);
          return r3;
        };
        Camera2.prototype.validateState = function(state) {
          var validatedState = {};
          if (typeof state.x === "number")
            validatedState.x = state.x;
          if (typeof state.y === "number")
            validatedState.y = state.y;
          if (typeof state.angle === "number")
            validatedState.angle = state.angle;
          if (typeof state.ratio === "number")
            validatedState.ratio = this.getBoundedRatio(state.ratio);
          return validatedState;
        };
        Camera2.prototype.isAnimated = function() {
          return !!this.nextFrame;
        };
        Camera2.prototype.setState = function(state) {
          if (!this.enabled)
            return this;
          this.previousState = this.getState();
          var validState = this.validateState(state);
          if (typeof validState.x === "number")
            this.x = validState.x;
          if (typeof validState.y === "number")
            this.y = validState.y;
          if (typeof validState.angle === "number")
            this.angle = validState.angle;
          if (typeof validState.ratio === "number")
            this.ratio = validState.ratio;
          if (!this.hasState(this.previousState))
            this.emit("updated", this.getState());
          return this;
        };
        Camera2.prototype.updateState = function(updater) {
          this.setState(updater(this.getState()));
          return this;
        };
        Camera2.prototype.animate = function(state, opts, callback) {
          var _this = this;
          if (!this.enabled)
            return;
          var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
          var validState = this.validateState(state);
          var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
          var start = Date.now(), initialState = this.getState();
          var fn = function() {
            var t3 = (Date.now() - start) / options.duration;
            if (t3 >= 1) {
              _this.nextFrame = null;
              _this.setState(validState);
              if (_this.animationCallback) {
                _this.animationCallback.call(null);
                _this.animationCallback = void 0;
              }
              return;
            }
            var coefficient = easing(t3);
            var newState = {};
            if (typeof validState.x === "number")
              newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
            if (typeof validState.y === "number")
              newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
            if (typeof validState.angle === "number")
              newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
            if (typeof validState.ratio === "number")
              newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
            _this.setState(newState);
            _this.nextFrame = (0, utils_1.requestFrame)(fn);
          };
          if (this.nextFrame) {
            (0, utils_1.cancelFrame)(this.nextFrame);
            if (this.animationCallback)
              this.animationCallback.call(null);
            this.nextFrame = (0, utils_1.requestFrame)(fn);
          } else {
            fn();
          }
          this.animationCallback = callback;
        };
        Camera2.prototype.animatedZoom = function(factorOrOptions) {
          if (!factorOrOptions) {
            this.animate({ ratio: this.ratio / DEFAULT_ZOOMING_RATIO });
          } else {
            if (typeof factorOrOptions === "number")
              return this.animate({ ratio: this.ratio / factorOrOptions });
            else
              this.animate({
                ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
              }, factorOrOptions);
          }
        };
        Camera2.prototype.animatedUnzoom = function(factorOrOptions) {
          if (!factorOrOptions) {
            this.animate({ ratio: this.ratio * DEFAULT_ZOOMING_RATIO });
          } else {
            if (typeof factorOrOptions === "number")
              return this.animate({ ratio: this.ratio * factorOrOptions });
            else
              this.animate({
                ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
              }, factorOrOptions);
          }
        };
        Camera2.prototype.animatedReset = function(options) {
          this.animate({
            x: 0.5,
            y: 0.5,
            ratio: 1,
            angle: 0
          }, options);
        };
        Camera2.prototype.copy = function() {
          return Camera2.from(this.getState());
        };
        return Camera2;
      }(types_1.TypedEventEmitter)
    );
    exports.default = Camera;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/captor.js
var require_captor = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/captor.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t3) {
        for (var s3, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
          s3 = arguments[i2];
          for (var p2 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p2))
              t3[p2] = s3[p2];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getWheelCoords = exports.getMouseCoords = exports.getPosition = void 0;
    var types_1 = require_types();
    function getPosition(e3, dom) {
      var bbox = dom.getBoundingClientRect();
      return {
        x: e3.clientX - bbox.left,
        y: e3.clientY - bbox.top
      };
    }
    exports.getPosition = getPosition;
    function getMouseCoords(e3, dom) {
      var res = __assign(__assign({}, getPosition(e3, dom)), { sigmaDefaultPrevented: false, preventSigmaDefault: function() {
        res.sigmaDefaultPrevented = true;
      }, original: e3 });
      return res;
    }
    exports.getMouseCoords = getMouseCoords;
    function getWheelCoords(e3, dom) {
      return __assign(__assign({}, getMouseCoords(e3, dom)), { delta: getWheelDelta(e3) });
    }
    exports.getWheelCoords = getWheelCoords;
    var MAX_TOUCHES = 2;
    function getTouchesArray(touches) {
      var arr = [];
      for (var i2 = 0, l3 = Math.min(touches.length, MAX_TOUCHES); i2 < l3; i2++)
        arr.push(touches[i2]);
      return arr;
    }
    exports.getTouchesArray = getTouchesArray;
    function getTouchCoords(e3, dom) {
      return {
        touches: getTouchesArray(e3.touches).map(function(touch) {
          return getPosition(touch, dom);
        }),
        original: e3
      };
    }
    exports.getTouchCoords = getTouchCoords;
    function getWheelDelta(e3) {
      if (typeof e3.deltaY !== "undefined")
        return e3.deltaY * -3 / 360;
      if (typeof e3.detail !== "undefined")
        return e3.detail / -9;
      throw new Error("Captor: could not extract delta from event.");
    }
    exports.getWheelDelta = getWheelDelta;
    var Captor = (
      /** @class */
      function(_super) {
        __extends(Captor2, _super);
        function Captor2(container, renderer) {
          var _this = _super.call(this) || this;
          _this.container = container;
          _this.renderer = renderer;
          return _this;
        }
        return Captor2;
      }(types_1.TypedEventEmitter)
    );
    exports.default = Captor;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/mouse.js
var require_mouse = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/mouse.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o4, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      Object.defineProperty(o4, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    } : function(o4, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o4[k22] = m2[k2];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o4, v2) {
      Object.defineProperty(o4, "default", { enumerable: true, value: v2 });
    } : function(o4, v2) {
      o4["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k2 in mod)
          if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
            __createBinding(result, mod, k2);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var captor_1 = __importStar(require_captor());
    var DRAG_TIMEOUT = 100;
    var DRAGGED_EVENTS_TOLERANCE = 3;
    var MOUSE_INERTIA_DURATION = 200;
    var MOUSE_INERTIA_RATIO = 3;
    var MOUSE_ZOOM_DURATION = 250;
    var ZOOMING_RATIO = 1.7;
    var DOUBLE_CLICK_TIMEOUT = 300;
    var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
    var DOUBLE_CLICK_ZOOMING_DURATION = 200;
    var MouseCaptor = (
      /** @class */
      function(_super) {
        __extends(MouseCaptor2, _super);
        function MouseCaptor2(container, renderer) {
          var _this = _super.call(this, container, renderer) || this;
          _this.enabled = true;
          _this.draggedEvents = 0;
          _this.downStartTime = null;
          _this.lastMouseX = null;
          _this.lastMouseY = null;
          _this.isMouseDown = false;
          _this.isMoving = false;
          _this.movingTimeout = null;
          _this.startCameraState = null;
          _this.clicks = 0;
          _this.doubleClickTimeout = null;
          _this.currentWheelDirection = 0;
          _this.handleClick = _this.handleClick.bind(_this);
          _this.handleRightClick = _this.handleRightClick.bind(_this);
          _this.handleDown = _this.handleDown.bind(_this);
          _this.handleUp = _this.handleUp.bind(_this);
          _this.handleMove = _this.handleMove.bind(_this);
          _this.handleWheel = _this.handleWheel.bind(_this);
          _this.handleOut = _this.handleOut.bind(_this);
          container.addEventListener("click", _this.handleClick, false);
          container.addEventListener("contextmenu", _this.handleRightClick, false);
          container.addEventListener("mousedown", _this.handleDown, false);
          container.addEventListener("wheel", _this.handleWheel, false);
          container.addEventListener("mouseout", _this.handleOut, false);
          document.addEventListener("mousemove", _this.handleMove, false);
          document.addEventListener("mouseup", _this.handleUp, false);
          return _this;
        }
        MouseCaptor2.prototype.kill = function() {
          var container = this.container;
          container.removeEventListener("click", this.handleClick);
          container.removeEventListener("contextmenu", this.handleRightClick);
          container.removeEventListener("mousedown", this.handleDown);
          container.removeEventListener("wheel", this.handleWheel);
          container.removeEventListener("mouseout", this.handleOut);
          document.removeEventListener("mousemove", this.handleMove);
          document.removeEventListener("mouseup", this.handleUp);
        };
        MouseCaptor2.prototype.handleClick = function(e3) {
          var _this = this;
          if (!this.enabled)
            return;
          this.clicks++;
          if (this.clicks === 2) {
            this.clicks = 0;
            if (typeof this.doubleClickTimeout === "number") {
              clearTimeout(this.doubleClickTimeout);
              this.doubleClickTimeout = null;
            }
            return this.handleDoubleClick(e3);
          }
          setTimeout(function() {
            _this.clicks = 0;
            _this.doubleClickTimeout = null;
          }, DOUBLE_CLICK_TIMEOUT);
          if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
            this.emit("click", (0, captor_1.getMouseCoords)(e3, this.container));
        };
        MouseCaptor2.prototype.handleRightClick = function(e3) {
          if (!this.enabled)
            return;
          this.emit("rightClick", (0, captor_1.getMouseCoords)(e3, this.container));
        };
        MouseCaptor2.prototype.handleDoubleClick = function(e3) {
          if (!this.enabled)
            return;
          e3.preventDefault();
          e3.stopPropagation();
          var mouseCoords = (0, captor_1.getMouseCoords)(e3, this.container);
          this.emit("doubleClick", mouseCoords);
          if (mouseCoords.sigmaDefaultPrevented)
            return;
          var camera = this.renderer.getCamera();
          var newRatio = camera.getBoundedRatio(camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO);
          camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e3, this.container), newRatio), {
            easing: "quadraticInOut",
            duration: DOUBLE_CLICK_ZOOMING_DURATION
          });
        };
        MouseCaptor2.prototype.handleDown = function(e3) {
          if (!this.enabled)
            return;
          if (e3.button === 0) {
            this.startCameraState = this.renderer.getCamera().getState();
            var _a = (0, captor_1.getPosition)(e3, this.container), x2 = _a.x, y2 = _a.y;
            this.lastMouseX = x2;
            this.lastMouseY = y2;
            this.draggedEvents = 0;
            this.downStartTime = Date.now();
            this.isMouseDown = true;
          }
          this.emit("mousedown", (0, captor_1.getMouseCoords)(e3, this.container));
        };
        MouseCaptor2.prototype.handleUp = function(e3) {
          var _this = this;
          if (!this.enabled || !this.isMouseDown)
            return;
          var camera = this.renderer.getCamera();
          this.isMouseDown = false;
          if (typeof this.movingTimeout === "number") {
            clearTimeout(this.movingTimeout);
            this.movingTimeout = null;
          }
          var _a = (0, captor_1.getPosition)(e3, this.container), x2 = _a.x, y2 = _a.y;
          var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
          if (this.isMoving) {
            camera.animate({
              x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
              y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
            }, {
              duration: MOUSE_INERTIA_DURATION,
              easing: "quadraticOut"
            });
          } else if (this.lastMouseX !== x2 || this.lastMouseY !== y2) {
            camera.setState({
              x: cameraState.x,
              y: cameraState.y
            });
          }
          this.isMoving = false;
          setTimeout(function() {
            _this.draggedEvents = 0;
            _this.renderer.refresh();
          }, 0);
          this.emit("mouseup", (0, captor_1.getMouseCoords)(e3, this.container));
        };
        MouseCaptor2.prototype.handleMove = function(e3) {
          var _this = this;
          if (!this.enabled)
            return;
          var mouseCoords = (0, captor_1.getMouseCoords)(e3, this.container);
          this.emit("mousemovebody", mouseCoords);
          if (e3.target === this.container) {
            this.emit("mousemove", mouseCoords);
          }
          if (mouseCoords.sigmaDefaultPrevented)
            return;
          if (this.isMouseDown) {
            this.isMoving = true;
            this.draggedEvents++;
            if (typeof this.movingTimeout === "number") {
              clearTimeout(this.movingTimeout);
            }
            this.movingTimeout = window.setTimeout(function() {
              _this.movingTimeout = null;
              _this.isMoving = false;
            }, DRAG_TIMEOUT);
            var camera = this.renderer.getCamera();
            var _a = (0, captor_1.getPosition)(e3, this.container), eX = _a.x, eY = _a.y;
            var lastMouse = this.renderer.viewportToFramedGraph({
              x: this.lastMouseX,
              y: this.lastMouseY
            });
            var mouse = this.renderer.viewportToFramedGraph({ x: eX, y: eY });
            var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
            var cameraState = camera.getState();
            var x2 = cameraState.x + offsetX, y2 = cameraState.y + offsetY;
            camera.setState({ x: x2, y: y2 });
            this.lastMouseX = eX;
            this.lastMouseY = eY;
            e3.preventDefault();
            e3.stopPropagation();
          }
        };
        MouseCaptor2.prototype.handleWheel = function(e3) {
          var _this = this;
          if (!this.enabled)
            return;
          e3.preventDefault();
          e3.stopPropagation();
          var delta = (0, captor_1.getWheelDelta)(e3);
          if (!delta)
            return;
          var wheelCoords = (0, captor_1.getWheelCoords)(e3, this.container);
          this.emit("wheel", wheelCoords);
          if (wheelCoords.sigmaDefaultPrevented)
            return;
          var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
          var camera = this.renderer.getCamera();
          var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
          var wheelDirection = delta > 0 ? 1 : -1;
          var now = Date.now();
          if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
            return;
          }
          camera.animate(this.renderer.getViewportZoomedState((0, captor_1.getPosition)(e3, this.container), newRatio), {
            easing: "quadraticOut",
            duration: MOUSE_ZOOM_DURATION
          }, function() {
            _this.currentWheelDirection = 0;
          });
          this.currentWheelDirection = wheelDirection;
          this.lastWheelTriggerTime = now;
        };
        MouseCaptor2.prototype.handleOut = function() {
        };
        return MouseCaptor2;
      }(captor_1.default)
    );
    exports.default = MouseCaptor;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/quadtree.js
var require_quadtree = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/quadtree.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = void 0;
    var extend_1 = __importDefault(require_extend());
    var BLOCKS = 4;
    var MAX_LEVEL = 5;
    var OUTSIDE_BLOCK = 5460;
    var X_OFFSET = 0;
    var Y_OFFSET = 1;
    var WIDTH_OFFSET = 2;
    var HEIGHT_OFFSET = 3;
    var TOP_LEFT = 1;
    var TOP_RIGHT = 2;
    var BOTTOM_LEFT = 3;
    var BOTTOM_RIGHT = 4;
    var hasWarnedTooMuchOutside = false;
    function isRectangleAligned(rect) {
      return rect.x1 === rect.x2 || rect.y1 === rect.y2;
    }
    exports.isRectangleAligned = isRectangleAligned;
    function getCircumscribedAlignedRectangle(rect) {
      var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
      var heightVector = {
        x: (rect.y1 - rect.y2) * rect.height / width,
        y: (rect.x2 - rect.x1) * rect.height / width
      };
      var tl = { x: rect.x1, y: rect.y1 };
      var tr = { x: rect.x2, y: rect.y2 };
      var bl = {
        x: rect.x1 + heightVector.x,
        y: rect.y1 + heightVector.y
      };
      var br = {
        x: rect.x2 + heightVector.x,
        y: rect.y2 + heightVector.y
      };
      var xL = Math.min(tl.x, tr.x, bl.x, br.x);
      var xR = Math.max(tl.x, tr.x, bl.x, br.x);
      var yT = Math.min(tl.y, tr.y, bl.y, br.y);
      var yB = Math.max(tl.y, tr.y, bl.y, br.y);
      return {
        x1: xL,
        y1: yT,
        x2: xR,
        y2: yT,
        height: yB - yT
      };
    }
    exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
    function squareCollidesWithQuad(x1, y1, w2, qx, qy, qw, qh) {
      return x1 < qx + qw && x1 + w2 > qx && y1 < qy + qh && y1 + w2 > qy;
    }
    exports.squareCollidesWithQuad = squareCollidesWithQuad;
    function rectangleCollidesWithQuad(x1, y1, w2, h2, qx, qy, qw, qh) {
      return x1 < qx + qw && x1 + w2 > qx && y1 < qy + qh && y1 + h2 > qy;
    }
    exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
    function pointIsInQuad(x2, y2, qx, qy, qw, qh) {
      var xmp = qx + qw / 2, ymp = qy + qh / 2, top = y2 < ymp, left = x2 < xmp;
      return top ? left ? TOP_LEFT : TOP_RIGHT : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
    }
    function buildQuadrants(maxLevel, data) {
      var stack = [0, 0];
      while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var x2 = data[block + X_OFFSET], y2 = data[block + Y_OFFSET], width = data[block + WIDTH_OFFSET], height = data[block + HEIGHT_OFFSET], hw = width / 2, hh = height / 2;
        data[topLeftBlock + X_OFFSET] = x2;
        data[topLeftBlock + Y_OFFSET] = y2;
        data[topLeftBlock + WIDTH_OFFSET] = hw;
        data[topLeftBlock + HEIGHT_OFFSET] = hh;
        data[topRightBlock + X_OFFSET] = x2 + hw;
        data[topRightBlock + Y_OFFSET] = y2;
        data[topRightBlock + WIDTH_OFFSET] = hw;
        data[topRightBlock + HEIGHT_OFFSET] = hh;
        data[bottomLeftBlock + X_OFFSET] = x2;
        data[bottomLeftBlock + Y_OFFSET] = y2 + hh;
        data[bottomLeftBlock + WIDTH_OFFSET] = hw;
        data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
        data[bottomRightBlock + X_OFFSET] = x2 + hw;
        data[bottomRightBlock + Y_OFFSET] = y2 + hh;
        data[bottomRightBlock + WIDTH_OFFSET] = hw;
        data[bottomRightBlock + HEIGHT_OFFSET] = hh;
        if (level < maxLevel - 1) {
          stack.push(bottomRightBlock, level + 1);
          stack.push(bottomLeftBlock, level + 1);
          stack.push(topRightBlock, level + 1);
          stack.push(topLeftBlock, level + 1);
        }
      }
    }
    function insertNode(maxLevel, data, containers, key, x2, y2, size) {
      var x1 = x2 - size, y1 = y2 - size, w2 = size * 2;
      var level = 0, block = 0;
      while (true) {
        if (level >= maxLevel) {
          containers[block] = containers[block] || [];
          containers[block].push(key);
          return;
        }
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w2, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w2, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w2, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w2, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        var collisions = [
          collidingWithTopLeft,
          collidingWithTopRight,
          collidingWithBottomLeft,
          collidingWithBottomRight
        ].reduce(function(acc, current) {
          if (current)
            return acc + 1;
          else
            return acc;
        }, 0);
        if (collisions === 0 && level === 0) {
          containers[OUTSIDE_BLOCK].push(key);
          if (!hasWarnedTooMuchOutside && containers[OUTSIDE_BLOCK].length >= 5) {
            hasWarnedTooMuchOutside = true;
            console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. You might have a problem with the normalization function or the custom bounding box.");
          }
          return;
        }
        if (collisions === 0)
          throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x2, ", y: ").concat(y2, ", size: ").concat(size, ")."));
        if (collisions === 3)
          throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(level, ", key: ").concat(key, ", x: ").concat(x2, ", y: ").concat(y2, ", size: ").concat(size, ")."));
        if (collisions > 1) {
          containers[block] = containers[block] || [];
          containers[block].push(key);
          return;
        } else {
          level++;
        }
        if (collidingWithTopLeft)
          block = topLeftBlock;
        if (collidingWithTopRight)
          block = topRightBlock;
        if (collidingWithBottomLeft)
          block = bottomLeftBlock;
        if (collidingWithBottomRight)
          block = bottomRightBlock;
      }
    }
    function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w2, h2) {
      var stack = [0, 0];
      var collectedNodes = [];
      var container;
      while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        container = containers[block];
        if (container)
          (0, extend_1.default)(collectedNodes, container);
        if (level >= maxLevel)
          continue;
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w2, h2, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w2, h2, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w2, h2, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w2, h2, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        if (collidingWithTopLeft)
          stack.push(topLeftBlock, level + 1);
        if (collidingWithTopRight)
          stack.push(topRightBlock, level + 1);
        if (collidingWithBottomLeft)
          stack.push(bottomLeftBlock, level + 1);
        if (collidingWithBottomRight)
          stack.push(bottomRightBlock, level + 1);
      }
      return collectedNodes;
    }
    var QuadTree = (
      /** @class */
      function() {
        function QuadTree2(params) {
          var _a;
          if (params === void 0) {
            params = {};
          }
          this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
          this.cache = null;
          this.lastRectangle = null;
          var L2 = Math.pow(4, MAX_LEVEL);
          this.data = new Float32Array(BLOCKS * ((4 * L2 - 1) / 3));
          if (params.boundaries)
            this.resize(params.boundaries);
          else
            this.resize({
              x: 0,
              y: 0,
              width: 1,
              height: 1
            });
        }
        QuadTree2.prototype.add = function(key, x2, y2, size) {
          insertNode(MAX_LEVEL, this.data, this.containers, key, x2, y2, size);
          return this;
        };
        QuadTree2.prototype.resize = function(boundaries) {
          this.clear();
          this.data[X_OFFSET] = boundaries.x;
          this.data[Y_OFFSET] = boundaries.y;
          this.data[WIDTH_OFFSET] = boundaries.width;
          this.data[HEIGHT_OFFSET] = boundaries.height;
          buildQuadrants(MAX_LEVEL, this.data);
        };
        QuadTree2.prototype.clear = function() {
          var _a;
          this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
          return this;
        };
        QuadTree2.prototype.point = function(x2, y2) {
          var nodes = this.containers[OUTSIDE_BLOCK].slice();
          var block = 0, level = 0;
          do {
            if (this.containers[block])
              (0, extend_1.default)(nodes, this.containers[block]);
            var quad = pointIsInQuad(x2, y2, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
            block = 4 * block + quad * BLOCKS;
            level++;
          } while (level <= MAX_LEVEL);
          return nodes;
        };
        QuadTree2.prototype.rectangle = function(x1, y1, x2, y2, height) {
          var lr = this.lastRectangle;
          if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
            return this.cache;
          }
          this.lastRectangle = {
            x1,
            y1,
            x2,
            y2,
            height
          };
          if (!isRectangleAligned(this.lastRectangle))
            this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
          this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
          (0, extend_1.default)(this.cache, this.containers[OUTSIDE_BLOCK]);
          return this.cache;
        };
        return QuadTree2;
      }()
    );
    exports.default = QuadTree;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/labels.js
var require_labels = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/labels.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.edgeLabelsToDisplayFromNodes = exports.LabelGrid = void 0;
    var LabelCandidate = (
      /** @class */
      function() {
        function LabelCandidate2(key, size) {
          this.key = key;
          this.size = size;
        }
        LabelCandidate2.compare = function(first, second) {
          if (first.size > second.size)
            return -1;
          if (first.size < second.size)
            return 1;
          if (first.key > second.key)
            return 1;
          return -1;
        };
        return LabelCandidate2;
      }()
    );
    var LabelGrid = (
      /** @class */
      function() {
        function LabelGrid2() {
          this.width = 0;
          this.height = 0;
          this.cellSize = 0;
          this.columns = 0;
          this.rows = 0;
          this.cells = {};
        }
        LabelGrid2.prototype.resizeAndClear = function(dimensions, cellSize) {
          this.width = dimensions.width;
          this.height = dimensions.height;
          this.cellSize = cellSize;
          this.columns = Math.ceil(dimensions.width / cellSize);
          this.rows = Math.ceil(dimensions.height / cellSize);
          this.cells = {};
        };
        LabelGrid2.prototype.getIndex = function(pos) {
          var xIndex = Math.floor(pos.x / this.cellSize);
          var yIndex = Math.floor(pos.y / this.cellSize);
          return yIndex * this.columns + xIndex;
        };
        LabelGrid2.prototype.add = function(key, size, pos) {
          var candidate = new LabelCandidate(key, size);
          var index = this.getIndex(pos);
          var cell = this.cells[index];
          if (!cell) {
            cell = [];
            this.cells[index] = cell;
          }
          cell.push(candidate);
        };
        LabelGrid2.prototype.organize = function() {
          for (var k2 in this.cells) {
            var cell = this.cells[k2];
            cell.sort(LabelCandidate.compare);
          }
        };
        LabelGrid2.prototype.getLabelsToDisplay = function(ratio, density) {
          var cellArea = this.cellSize * this.cellSize;
          var scaledCellArea = cellArea / ratio / ratio;
          var scaledDensity = scaledCellArea * density / cellArea;
          var labelsToDisplayPerCell = Math.ceil(scaledDensity);
          var labels = [];
          for (var k2 in this.cells) {
            var cell = this.cells[k2];
            for (var i2 = 0; i2 < Math.min(labelsToDisplayPerCell, cell.length); i2++) {
              labels.push(cell[i2].key);
            }
          }
          return labels;
        };
        return LabelGrid2;
      }()
    );
    exports.LabelGrid = LabelGrid;
    function edgeLabelsToDisplayFromNodes(params) {
      var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
      var worthyEdges = [];
      graph.forEachEdge(function(edge, _2, source, target) {
        if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
          worthyEdges.push(edge);
        }
      });
      return worthyEdges;
    }
    exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/label.js
var require_label = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/label.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawLabel(context, data, settings) {
      if (!data.label)
        return;
      var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight, color = settings.labelColor.attribute ? data[settings.labelColor.attribute] || settings.labelColor.color || "#000" : settings.labelColor.color;
      context.fillStyle = color;
      context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
      context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
    }
    exports.default = drawLabel;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/hover.js
var require_hover = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/hover.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var label_1 = __importDefault(require_label());
    function drawHover(context, data, settings) {
      var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
      context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
      context.fillStyle = "#FFF";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 8;
      context.shadowColor = "#000";
      var PADDING = 2;
      if (typeof data.label === "string") {
        var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
        var angleRadian = Math.asin(boxHeight / 2 / radius);
        var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
        context.beginPath();
        context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
        context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
        context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
        context.closePath();
        context.fill();
      } else {
        context.beginPath();
        context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      (0, label_1.default)(context, data, settings);
    }
    exports.default = drawHover;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/edge-label.js
var require_edge_label = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/canvas/edge-label.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawEdgeLabel(context, edgeData, sourceData, targetData, settings) {
      var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, color = settings.edgeLabelColor.attribute ? edgeData[settings.edgeLabelColor.attribute] || settings.edgeLabelColor.color || "#000" : settings.edgeLabelColor.color;
      var label = edgeData.label;
      if (!label)
        return;
      context.fillStyle = color;
      context.font = "".concat(weight, " ").concat(size, "px ").concat(font);
      var sSize = sourceData.size;
      var tSize = targetData.size;
      var sx = sourceData.x;
      var sy = sourceData.y;
      var tx = targetData.x;
      var ty = targetData.y;
      var cx = (sx + tx) / 2;
      var cy = (sy + ty) / 2;
      var dx = tx - sx;
      var dy = ty - sy;
      var d2 = Math.sqrt(dx * dx + dy * dy);
      if (d2 < sSize + tSize)
        return;
      sx += dx * sSize / d2;
      sy += dy * sSize / d2;
      tx -= dx * tSize / d2;
      ty -= dy * tSize / d2;
      cx = (sx + tx) / 2;
      cy = (sy + ty) / 2;
      dx = tx - sx;
      dy = ty - sy;
      d2 = Math.sqrt(dx * dx + dy * dy);
      var textLength = context.measureText(label).width;
      if (textLength > d2) {
        var ellipsis = "\u2026";
        label = label + ellipsis;
        textLength = context.measureText(label).width;
        while (textLength > d2 && label.length > 1) {
          label = label.slice(0, -2) + ellipsis;
          textLength = context.measureText(label).width;
        }
        if (label.length < 4)
          return;
      }
      var angle;
      if (dx > 0) {
        if (dy > 0)
          angle = Math.acos(dx / d2);
        else
          angle = Math.asin(dy / d2);
      } else {
        if (dy > 0)
          angle = Math.acos(dx / d2) + Math.PI;
        else
          angle = Math.asin(dx / d2) + Math.PI / 2;
      }
      context.save();
      context.translate(cx, cy);
      context.rotate(angle);
      context.fillText(label, -textLength / 2, edgeData.size / 2 + size);
      context.restore();
    }
    exports.default = drawEdgeLabel;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/utils.js
var require_utils2 = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = void 0;
    function loadShader(type, gl, source) {
      var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
      var shader = gl.createShader(glType);
      if (shader === null) {
        throw new Error("loadShader: error while creating the shader");
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n".concat(infoLog, "\n").concat(source));
      }
      return shader;
    }
    function loadVertexShader(gl, source) {
      return loadShader("VERTEX", gl, source);
    }
    exports.loadVertexShader = loadVertexShader;
    function loadFragmentShader(gl, source) {
      return loadShader("FRAGMENT", gl, source);
    }
    exports.loadFragmentShader = loadFragmentShader;
    function loadProgram(gl, shaders) {
      var program = gl.createProgram();
      if (program === null) {
        throw new Error("loadProgram: error while creating the program.");
      }
      var i2, l3;
      for (i2 = 0, l3 = shaders.length; i2 < l3; i2++)
        gl.attachShader(program, shaders[i2]);
      gl.linkProgram(program);
      var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
      }
      return program;
    }
    exports.loadProgram = loadProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/program.js
var require_program = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/program.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Program = exports.AbstractProgram = void 0;
    var utils_1 = require_utils();
    var utils_2 = require_utils2();
    var SIZE_FACTOR_PER_ATTRIBUTE_TYPE = (_a = {}, _a[WebGL2RenderingContext.BOOL] = 1, _a[WebGL2RenderingContext.BYTE] = 1, _a[WebGL2RenderingContext.UNSIGNED_BYTE] = 1, _a[WebGL2RenderingContext.SHORT] = 2, _a[WebGL2RenderingContext.UNSIGNED_SHORT] = 2, _a[WebGL2RenderingContext.INT] = 4, _a[WebGL2RenderingContext.UNSIGNED_INT] = 4, _a[WebGL2RenderingContext.FLOAT] = 4, _a);
    var AbstractProgram = (
      /** @class */
      function() {
        function AbstractProgram2(_gl, _renderer) {
        }
        return AbstractProgram2;
      }()
    );
    exports.AbstractProgram = AbstractProgram;
    var Program = (
      /** @class */
      function() {
        function Program2(gl, renderer) {
          var _this = this;
          this.array = new Float32Array();
          this.indicesArray = null;
          this.uniformLocations = {};
          this.attributeLocations = {};
          this.capacity = 0;
          this.verticesCount = 0;
          var definition = this.getDefinition();
          this.VERTICES = definition.VERTICES;
          this.ARRAY_ITEMS_PER_VERTEX = definition.ARRAY_ITEMS_PER_VERTEX;
          this.VERTEX_SHADER_SOURCE = definition.VERTEX_SHADER_SOURCE;
          this.FRAGMENT_SHADER_SOURCE = definition.FRAGMENT_SHADER_SOURCE;
          this.UNIFORMS = definition.UNIFORMS;
          this.ATTRIBUTES = definition.ATTRIBUTES;
          this.STRIDE = this.VERTICES * this.ARRAY_ITEMS_PER_VERTEX;
          this.gl = gl;
          this.renderer = renderer;
          var buffer = gl.createBuffer();
          if (buffer === null)
            throw new Error("Program: error while creating the webgl buffer.");
          this.buffer = buffer;
          var indicesBuffer = gl.createBuffer();
          if (indicesBuffer === null)
            throw new Error("Program: error while creating the webgl indices buffer.");
          this.indicesBuffer = indicesBuffer;
          this.vertexShader = (0, utils_2.loadVertexShader)(this.gl, this.VERTEX_SHADER_SOURCE);
          this.fragmentShader = (0, utils_2.loadFragmentShader)(this.gl, this.FRAGMENT_SHADER_SOURCE);
          this.program = (0, utils_2.loadProgram)(this.gl, [this.vertexShader, this.fragmentShader]);
          this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(this.gl);
          this.indicesType = this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
          this.IndicesArray = this.canUse32BitsIndices ? Uint32Array : Uint16Array;
          this.UNIFORMS.forEach(function(uniformName) {
            var location = _this.gl.getUniformLocation(_this.program, uniformName);
            if (location === null)
              throw new Error('Program: error while getting location for uniform "'.concat(uniformName, '".'));
            _this.uniformLocations[uniformName] = location;
          });
          this.ATTRIBUTES.forEach(function(attr) {
            var location = _this.gl.getAttribLocation(_this.program, attr.name);
            if (location === -1)
              throw new Error('Program: error while getting location for attribute "'.concat(attr.name, '".'));
            _this.attributeLocations[attr.name] = location;
          });
        }
        Program2.prototype.bind = function() {
          var _this = this;
          var gl = this.gl;
          gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
          if (this.indicesArray) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
          }
          for (var attributeName in this.attributeLocations) {
            gl.enableVertexAttribArray(this.attributeLocations[attributeName]);
          }
          var offset = 0;
          this.ATTRIBUTES.forEach(function(attr) {
            var location = _this.attributeLocations[attr.name];
            gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized || false, _this.ARRAY_ITEMS_PER_VERTEX * Float32Array.BYTES_PER_ELEMENT, offset);
            var sizeFactor = SIZE_FACTOR_PER_ATTRIBUTE_TYPE[attr.type];
            if (typeof sizeFactor !== "number")
              throw new Error('Program.bind: yet unsupported attribute type "'.concat(attr.type, '"!'));
            offset += attr.size * sizeFactor;
          });
        };
        Program2.prototype.bufferData = function() {
          var gl = this.gl;
          this.gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
          if (this.indicesArray) {
            this.gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
          }
        };
        Program2.prototype.reallocateIndices = function() {
          return;
        };
        Program2.prototype.reallocate = function(capacity) {
          if (capacity === this.capacity)
            return;
          this.capacity = capacity;
          this.verticesCount = this.VERTICES * capacity;
          this.array = new Float32Array(this.verticesCount * this.ARRAY_ITEMS_PER_VERTEX);
          if (typeof this.reallocateIndices === "function")
            this.reallocateIndices();
        };
        Program2.prototype.hasNothingToRender = function() {
          return this.verticesCount === 0;
        };
        Program2.prototype.render = function(params) {
          if (this.hasNothingToRender())
            return;
          this.bind();
          this.bufferData();
          this.gl.useProgram(this.program);
          this.draw(params);
        };
        return Program2;
      }()
    );
    exports.Program = Program;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/node.js
var require_node = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/node.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNodeCompoundProgram = exports.NodeProgram = exports.AbstractNodeProgram = void 0;
    var program_1 = require_program();
    var AbstractNodeProgram = (
      /** @class */
      function(_super) {
        __extends(AbstractNodeProgram2, _super);
        function AbstractNodeProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractNodeProgram2;
      }(program_1.AbstractProgram)
    );
    exports.AbstractNodeProgram = AbstractNodeProgram;
    var NodeProgram = (
      /** @class */
      function(_super) {
        __extends(NodeProgram2, _super);
        function NodeProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NodeProgram2.prototype.process = function(offset, data) {
          var i2 = offset * this.STRIDE;
          if (data.hidden) {
            for (var l3 = i2 + this.STRIDE; i2 < l3; i2++) {
              this.array[i2] = 0;
            }
            return;
          }
          return this.processVisibleItem(i2, data);
        };
        return NodeProgram2;
      }(program_1.Program)
    );
    exports.NodeProgram = NodeProgram;
    function createNodeCompoundProgram(programClasses) {
      return (
        /** @class */
        function() {
          function NodeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function(Program) {
              return new Program(gl, renderer);
            });
          }
          NodeCompoundProgram.prototype.reallocate = function(capacity) {
            this.programs.forEach(function(program) {
              return program.reallocate(capacity);
            });
          };
          NodeCompoundProgram.prototype.process = function(offset, data) {
            this.programs.forEach(function(program) {
              return program.process(offset, data);
            });
          };
          NodeCompoundProgram.prototype.render = function(params) {
            this.programs.forEach(function(program) {
              return program.render(params);
            });
          };
          return NodeCompoundProgram;
        }()
      );
    }
    exports.createNodeCompoundProgram = createNodeCompoundProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.point.vert.glsl.js
var require_node_point_vert_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.point.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var o4 = { d: (t4, e4) => {
        for (var n3 in e4)
          o4.o(e4, n3) && !o4.o(t4, n3) && Object.defineProperty(t4, n3, { enumerable: true, get: e4[n3] });
      }, o: (o5, t4) => Object.prototype.hasOwnProperty.call(o5, t4), r: (o5) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o5, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o5, "__esModule", { value: true });
      } }, t3 = {};
      o4.r(t3), o4.d(t3, { default: () => e3 });
      const e3 = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = t3;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.point.frag.glsl.js
var require_node_point_frag_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.point.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (n4, o5) => {
        for (var t3 in o5)
          e3.o(o5, t3) && !e3.o(n4, t3) && Object.defineProperty(n4, t3, { enumerable: true, get: o5[t3] });
      }, o: (e4, n4) => Object.prototype.hasOwnProperty.call(e4, n4), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, n3 = {};
      e3.r(n3), e3.d(n3, { default: () => o4 });
      const o4 = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";
      module.exports = n3;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/node.point.js
var require_node_point = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/node.point.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var node_1 = require_node();
    var node_point_vert_glsl_1 = __importDefault(require_node_point_vert_glsl());
    var node_point_frag_glsl_1 = __importDefault(require_node_point_frag_glsl());
    var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
    var FLOAT = WebGLRenderingContext.FLOAT;
    var UNIFORMS = ["u_sizeRatio", "u_pixelRatio", "u_matrix"];
    var NodePointProgram = (
      /** @class */
      function(_super) {
        __extends(NodePointProgram2, _super);
        function NodePointProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        NodePointProgram2.prototype.getDefinition = function() {
          return {
            VERTICES: 1,
            ARRAY_ITEMS_PER_VERTEX: 4,
            VERTEX_SHADER_SOURCE: node_point_vert_glsl_1.default,
            FRAGMENT_SHADER_SOURCE: node_point_frag_glsl_1.default,
            UNIFORMS,
            ATTRIBUTES: [
              { name: "a_position", size: 2, type: FLOAT },
              { name: "a_size", size: 1, type: FLOAT },
              { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true }
            ]
          };
        };
        NodePointProgram2.prototype.processVisibleItem = function(i2, data) {
          var array = this.array;
          array[i2++] = data.x;
          array[i2++] = data.y;
          array[i2++] = data.size;
          array[i2] = (0, utils_1.floatColor)(data.color);
        };
        NodePointProgram2.prototype.draw = function(params) {
          var gl = this.gl;
          var _a = this.uniformLocations, u_sizeRatio = _a.u_sizeRatio, u_pixelRatio = _a.u_pixelRatio, u_matrix = _a.u_matrix;
          gl.uniform1f(u_sizeRatio, params.sizeRatio);
          gl.uniform1f(u_pixelRatio, params.pixelRatio);
          gl.uniformMatrix3fv(u_matrix, false, params.matrix);
          gl.drawArrays(gl.POINTS, 0, this.verticesCount);
        };
        return NodePointProgram2;
      }(node_1.NodeProgram)
    );
    exports.default = NodePointProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/edge.js
var require_edge = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/common/edge.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createEdgeCompoundProgram = exports.EdgeProgram = exports.AbstractEdgeProgram = void 0;
    var program_1 = require_program();
    var AbstractEdgeProgram = (
      /** @class */
      function(_super) {
        __extends(AbstractEdgeProgram2, _super);
        function AbstractEdgeProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractEdgeProgram2;
      }(program_1.AbstractProgram)
    );
    exports.AbstractEdgeProgram = AbstractEdgeProgram;
    var EdgeProgram = (
      /** @class */
      function(_super) {
        __extends(EdgeProgram2, _super);
        function EdgeProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        EdgeProgram2.prototype.process = function(offset, sourceData, targetData, data) {
          var i2 = offset * this.STRIDE;
          if (data.hidden || sourceData.hidden || targetData.hidden) {
            for (var l3 = i2 + this.STRIDE; i2 < l3; i2++) {
              this.array[i2] = 0;
            }
            return;
          }
          return this.processVisibleItem(i2, sourceData, targetData, data);
        };
        return EdgeProgram2;
      }(program_1.Program)
    );
    exports.EdgeProgram = EdgeProgram;
    function createEdgeCompoundProgram(programClasses) {
      return (
        /** @class */
        function() {
          function EdgeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function(Program) {
              return new Program(gl, renderer);
            });
          }
          EdgeCompoundProgram.prototype.reallocate = function(capacity) {
            this.programs.forEach(function(program) {
              return program.reallocate(capacity);
            });
          };
          EdgeCompoundProgram.prototype.process = function(offset, sourceData, targetData, data) {
            this.programs.forEach(function(program) {
              return program.process(offset, sourceData, targetData, data);
            });
          };
          EdgeCompoundProgram.prototype.render = function(params) {
            this.programs.forEach(function(program) {
              return program.render(params);
            });
          };
          return EdgeCompoundProgram;
        }()
      );
    }
    exports.createEdgeCompoundProgram = createEdgeCompoundProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.rectangle.vert.glsl.js
var require_edge_rectangle_vert_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.rectangle.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (n4, o5) => {
        for (var t3 in o5)
          e3.o(o5, t3) && !e3.o(n4, t3) && Object.defineProperty(n4, t3, { enumerable: true, get: o5[t3] });
      }, o: (e4, n4) => Object.prototype.hasOwnProperty.call(e4, n4), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, n3 = {};
      e3.r(n3), e3.d(n3, { default: () => o4 });
      const o4 = 'attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_zoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the size ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * webGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';
      module.exports = n3;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.rectangle.frag.glsl.js
var require_edge_rectangle_frag_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.rectangle.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (n4, t4) => {
        for (var o4 in t4)
          e3.o(t4, o4) && !e3.o(n4, o4) && Object.defineProperty(n4, o4, { enumerable: true, get: t4[o4] });
      }, o: (e4, n4) => Object.prototype.hasOwnProperty.call(e4, n4), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, n3 = {};
      e3.r(n3), e3.d(n3, { default: () => t3 });
      const t3 = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";
      module.exports = n3;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.rectangle.js
var require_edge_rectangle = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.rectangle.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var edge_1 = require_edge();
    var edge_rectangle_vert_glsl_1 = __importDefault(require_edge_rectangle_vert_glsl());
    var edge_rectangle_frag_glsl_1 = __importDefault(require_edge_rectangle_frag_glsl());
    var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
    var FLOAT = WebGLRenderingContext.FLOAT;
    var UNIFORMS = ["u_matrix", "u_zoomRatio", "u_sizeRatio", "u_correctionRatio"];
    var EdgeRectangleProgram = (
      /** @class */
      function(_super) {
        __extends(EdgeRectangleProgram2, _super);
        function EdgeRectangleProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        EdgeRectangleProgram2.prototype.getDefinition = function() {
          return {
            VERTICES: 4,
            ARRAY_ITEMS_PER_VERTEX: 5,
            VERTEX_SHADER_SOURCE: edge_rectangle_vert_glsl_1.default,
            FRAGMENT_SHADER_SOURCE: edge_rectangle_frag_glsl_1.default,
            UNIFORMS,
            ATTRIBUTES: [
              { name: "a_position", size: 2, type: FLOAT },
              { name: "a_normal", size: 2, type: FLOAT },
              { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true }
            ]
          };
        };
        EdgeRectangleProgram2.prototype.reallocateIndices = function() {
          var l3 = this.verticesCount;
          var size = l3 + l3 / 2;
          var indices = new this.IndicesArray(size);
          for (var i2 = 0, c2 = 0; i2 < l3; i2 += 4) {
            indices[c2++] = i2;
            indices[c2++] = i2 + 1;
            indices[c2++] = i2 + 2;
            indices[c2++] = i2 + 2;
            indices[c2++] = i2 + 1;
            indices[c2++] = i2 + 3;
          }
          this.indicesArray = indices;
        };
        EdgeRectangleProgram2.prototype.processVisibleItem = function(i2, sourceData, targetData, data) {
          var thickness = data.size || 1;
          var x1 = sourceData.x;
          var y1 = sourceData.y;
          var x2 = targetData.x;
          var y2 = targetData.y;
          var color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1;
          var dy = y2 - y1;
          var len = dx * dx + dy * dy;
          var n1 = 0;
          var n22 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n22 = dx * len * thickness;
          }
          var array = this.array;
          array[i2++] = x1;
          array[i2++] = y1;
          array[i2++] = n1;
          array[i2++] = n22;
          array[i2++] = color;
          array[i2++] = x1;
          array[i2++] = y1;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = color;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = n1;
          array[i2++] = n22;
          array[i2++] = color;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2] = color;
        };
        EdgeRectangleProgram2.prototype.draw = function(params) {
          var gl = this.gl;
          var _a = this.uniformLocations, u_matrix = _a.u_matrix, u_zoomRatio = _a.u_zoomRatio, u_correctionRatio = _a.u_correctionRatio, u_sizeRatio = _a.u_sizeRatio;
          gl.uniformMatrix3fv(u_matrix, false, params.matrix);
          gl.uniform1f(u_zoomRatio, params.zoomRatio);
          gl.uniform1f(u_sizeRatio, params.sizeRatio);
          gl.uniform1f(u_correctionRatio, params.correctionRatio);
          if (!this.indicesArray)
            throw new Error("EdgeRectangleProgram: indicesArray should be allocated when drawing!");
          gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
        };
        return EdgeRectangleProgram2;
      }(edge_1.EdgeProgram)
    );
    exports.default = EdgeRectangleProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js
var require_edge_arrowHead_vert_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (a5, n4) => {
        for (var t3 in n4)
          e3.o(n4, t3) && !e3.o(a5, t3) && Object.defineProperty(a5, t3, { enumerable: true, get: n4[t3] });
      }, o: (e4, a5) => Object.prototype.hasOwnProperty.call(e4, a5), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, a4 = {};
      e3.r(a4), e3.d(a4, { default: () => n3 });
      const n3 = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n  float webGLNodeRadius = a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float webGLArrowHeadHalfWidth = webGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (webGLNodeRadius * unitNormal.y)\n    + db * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y + webGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((webGLNodeRadius + webGLArrowHeadLength) * unitNormal.y - webGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-webGLNodeRadius * unitNormal.x)\n    + db * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x + webGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(webGLNodeRadius + webGLArrowHeadLength) * unitNormal.x - webGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = a4;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js
var require_edge_arrowHead_frag_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (o5, r4) => {
        for (var t3 in r4)
          e3.o(r4, t3) && !e3.o(o5, t3) && Object.defineProperty(o5, t3, { enumerable: true, get: r4[t3] });
      }, o: (e4, o5) => Object.prototype.hasOwnProperty.call(e4, o5), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, o4 = {};
      e3.r(o4), e3.d(o4, { default: () => r3 });
      const r3 = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
      module.exports = o4;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js
var require_edge_arrowHead = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var edge_1 = require_edge();
    var edge_arrowHead_vert_glsl_1 = __importDefault(require_edge_arrowHead_vert_glsl());
    var edge_arrowHead_frag_glsl_1 = __importDefault(require_edge_arrowHead_frag_glsl());
    var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
    var FLOAT = WebGLRenderingContext.FLOAT;
    var UNIFORMS = ["u_matrix", "u_sizeRatio", "u_correctionRatio"];
    var EdgeArrowHeadProgram = (
      /** @class */
      function(_super) {
        __extends(EdgeArrowHeadProgram2, _super);
        function EdgeArrowHeadProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        EdgeArrowHeadProgram2.prototype.getDefinition = function() {
          return {
            VERTICES: 3,
            ARRAY_ITEMS_PER_VERTEX: 9,
            VERTEX_SHADER_SOURCE: edge_arrowHead_vert_glsl_1.default,
            FRAGMENT_SHADER_SOURCE: edge_arrowHead_frag_glsl_1.default,
            UNIFORMS,
            ATTRIBUTES: [
              { name: "a_position", size: 2, type: FLOAT },
              { name: "a_normal", size: 2, type: FLOAT },
              { name: "a_radius", size: 1, type: FLOAT },
              { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
              { name: "a_barycentric", size: 3, type: FLOAT }
            ]
          };
        };
        EdgeArrowHeadProgram2.prototype.processVisibleItem = function(i2, sourceData, targetData, data) {
          var thickness = data.size || 1;
          var radius = targetData.size || 1;
          var x1 = sourceData.x;
          var y1 = sourceData.y;
          var x2 = targetData.x;
          var y2 = targetData.y;
          var color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1;
          var dy = y2 - y1;
          var len = dx * dx + dy * dy;
          var n1 = 0;
          var n22 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n22 = dx * len * thickness;
          }
          var array = this.array;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = radius;
          array[i2++] = color;
          array[i2++] = 1;
          array[i2++] = 0;
          array[i2++] = 0;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = radius;
          array[i2++] = color;
          array[i2++] = 0;
          array[i2++] = 1;
          array[i2++] = 0;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = radius;
          array[i2++] = color;
          array[i2++] = 0;
          array[i2++] = 0;
          array[i2] = 1;
        };
        EdgeArrowHeadProgram2.prototype.draw = function(params) {
          var gl = this.gl;
          var _a = this.uniformLocations, u_matrix = _a.u_matrix, u_sizeRatio = _a.u_sizeRatio, u_correctionRatio = _a.u_correctionRatio;
          gl.uniformMatrix3fv(u_matrix, false, params.matrix);
          gl.uniform1f(u_sizeRatio, params.sizeRatio);
          gl.uniform1f(u_correctionRatio, params.correctionRatio);
          gl.drawArrays(gl.TRIANGLES, 0, this.verticesCount);
        };
        return EdgeArrowHeadProgram2;
      }(edge_1.EdgeProgram)
    );
    exports.default = EdgeArrowHeadProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js
var require_edge_clamped_vert_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (o5, n4) => {
        for (var t3 in n4)
          e3.o(n4, t3) && !e3.o(o5, t3) && Object.defineProperty(o5, t3, { enumerable: true, get: n4[t3] });
      }, o: (e4, o5) => Object.prototype.hasOwnProperty.call(e4, o5), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, o4 = {};
      e3.r(o4), e3.d(o4, { default: () => n3 });
      const n3 = "attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float webGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLArrowHeadLength = webGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (webGLNodeRadius + webGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * webGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = o4;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.clamped.js
var require_edge_clamped = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.clamped.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t3) {
        for (var s3, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
          s3 = arguments[i2];
          for (var p2 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p2))
              t3[p2] = s3[p2];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var edge_rectangle_1 = __importDefault(require_edge_rectangle());
    var edge_clamped_vert_glsl_1 = __importDefault(require_edge_clamped_vert_glsl());
    var utils_1 = require_utils();
    var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE;
    var FLOAT = WebGLRenderingContext.FLOAT;
    var EdgeClampedProgram = (
      /** @class */
      function(_super) {
        __extends(EdgeClampedProgram2, _super);
        function EdgeClampedProgram2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        EdgeClampedProgram2.prototype.getDefinition = function() {
          return __assign(__assign({}, _super.prototype.getDefinition.call(this)), { ARRAY_ITEMS_PER_VERTEX: 6, VERTEX_SHADER_SOURCE: edge_clamped_vert_glsl_1.default, ATTRIBUTES: [
            { name: "a_position", size: 2, type: FLOAT },
            { name: "a_normal", size: 2, type: FLOAT },
            { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
            { name: "a_radius", size: 1, type: FLOAT }
          ] });
        };
        EdgeClampedProgram2.prototype.processVisibleItem = function(i2, sourceData, targetData, data) {
          var thickness = data.size || 1;
          var x1 = sourceData.x;
          var y1 = sourceData.y;
          var x2 = targetData.x;
          var y2 = targetData.y;
          var color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1;
          var dy = y2 - y1;
          var radius = targetData.size || 1;
          var len = dx * dx + dy * dy;
          var n1 = 0;
          var n22 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len * thickness;
            n22 = dx * len * thickness;
          }
          var array = this.array;
          array[i2++] = x1;
          array[i2++] = y1;
          array[i2++] = n1;
          array[i2++] = n22;
          array[i2++] = color;
          array[i2++] = 0;
          array[i2++] = x1;
          array[i2++] = y1;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = color;
          array[i2++] = 0;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = n1;
          array[i2++] = n22;
          array[i2++] = color;
          array[i2++] = radius;
          array[i2++] = x2;
          array[i2++] = y2;
          array[i2++] = -n1;
          array[i2++] = -n22;
          array[i2++] = color;
          array[i2] = -radius;
        };
        return EdgeClampedProgram2;
      }(edge_rectangle_1.default)
    );
    exports.default = EdgeClampedProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.arrow.js
var require_edge_arrow = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/edge.arrow.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var edge_1 = require_edge();
    var edge_arrowHead_1 = __importDefault(require_edge_arrowHead());
    var edge_clamped_1 = __importDefault(require_edge_clamped());
    var EdgeArrowProgram = (0, edge_1.createEdgeCompoundProgram)([edge_clamped_1.default, edge_arrowHead_1.default]);
    exports.default = EdgeArrowProgram;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/settings.js
var require_settings = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/settings.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveSettings = exports.validateSettings = exports.DEFAULT_EDGE_PROGRAM_CLASSES = exports.DEFAULT_NODE_PROGRAM_CLASSES = exports.DEFAULT_SETTINGS = void 0;
    var utils_1 = require_utils();
    var label_1 = __importDefault(require_label());
    var hover_1 = __importDefault(require_hover());
    var edge_label_1 = __importDefault(require_edge_label());
    var node_point_1 = __importDefault(require_node_point());
    var edge_rectangle_1 = __importDefault(require_edge_rectangle());
    var edge_arrow_1 = __importDefault(require_edge_arrow());
    exports.DEFAULT_SETTINGS = {
      // Performance
      hideEdgesOnMove: false,
      hideLabelsOnMove: false,
      renderLabels: true,
      renderEdgeLabels: false,
      enableEdgeClickEvents: false,
      enableEdgeWheelEvents: false,
      enableEdgeHoverEvents: false,
      // Component rendering
      defaultNodeColor: "#999",
      defaultNodeType: "circle",
      defaultEdgeColor: "#ccc",
      defaultEdgeType: "line",
      labelFont: "Arial",
      labelSize: 14,
      labelWeight: "normal",
      labelColor: { color: "#000" },
      edgeLabelFont: "Arial",
      edgeLabelSize: 14,
      edgeLabelWeight: "normal",
      edgeLabelColor: { attribute: "color" },
      stagePadding: 30,
      zoomToSizeRatioFunction: Math.sqrt,
      itemSizesReference: "screen",
      // Labels
      labelDensity: 1,
      labelGridCellSize: 100,
      labelRenderedSizeThreshold: 6,
      // Reducers
      nodeReducer: null,
      edgeReducer: null,
      // Features
      zIndex: false,
      minCameraRatio: null,
      maxCameraRatio: null,
      // Renderers
      labelRenderer: label_1.default,
      hoverRenderer: hover_1.default,
      edgeLabelRenderer: edge_label_1.default,
      // Lifecycle
      allowInvalidContainer: false,
      // Program classes
      nodeProgramClasses: {},
      nodeHoverProgramClasses: {},
      edgeProgramClasses: {}
    };
    exports.DEFAULT_NODE_PROGRAM_CLASSES = {
      circle: node_point_1.default
    };
    exports.DEFAULT_EDGE_PROGRAM_CLASSES = {
      arrow: edge_arrow_1.default,
      line: edge_rectangle_1.default
    };
    function validateSettings(settings) {
      if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
        throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
      }
      var minCameraRatio = settings.minCameraRatio, maxCameraRatio = settings.maxCameraRatio;
      if (typeof minCameraRatio === "number" && typeof maxCameraRatio === "number" && maxCameraRatio < minCameraRatio) {
        throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
      }
    }
    exports.validateSettings = validateSettings;
    function resolveSettings(settings) {
      var resolvedSettings = (0, utils_1.assign)({}, exports.DEFAULT_SETTINGS, settings);
      resolvedSettings.nodeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_NODE_PROGRAM_CLASSES, resolvedSettings.nodeProgramClasses);
      resolvedSettings.edgeProgramClasses = (0, utils_1.assign)({}, exports.DEFAULT_EDGE_PROGRAM_CLASSES, resolvedSettings.edgeProgramClasses);
      return resolvedSettings;
    }
    exports.resolveSettings = resolveSettings;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/touch.js
var require_touch = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/core/captors/touch.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o4, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      Object.defineProperty(o4, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    } : function(o4, m2, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o4[k22] = m2[k2];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o4, v2) {
      Object.defineProperty(o4, "default", { enumerable: true, value: v2 });
    } : function(o4, v2) {
      o4["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k2 in mod)
          if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
            __createBinding(result, mod, k2);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __read = exports && exports.__read || function(o4, n3) {
      var m2 = typeof Symbol === "function" && o4[Symbol.iterator];
      if (!m2)
        return o4;
      var i2 = m2.call(o4), r3, ar = [], e3;
      try {
        while ((n3 === void 0 || n3-- > 0) && !(r3 = i2.next()).done)
          ar.push(r3.value);
      } catch (error) {
        e3 = { error };
      } finally {
        try {
          if (r3 && !r3.done && (m2 = i2["return"]))
            m2.call(i2);
        } finally {
          if (e3)
            throw e3.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var captor_1 = __importStar(require_captor());
    var DRAG_TIMEOUT = 200;
    var TOUCH_INERTIA_RATIO = 3;
    var TOUCH_INERTIA_DURATION = 200;
    var TouchCaptor = (
      /** @class */
      function(_super) {
        __extends(TouchCaptor2, _super);
        function TouchCaptor2(container, renderer) {
          var _this = _super.call(this, container, renderer) || this;
          _this.enabled = true;
          _this.isMoving = false;
          _this.hasMoved = false;
          _this.touchMode = 0;
          _this.startTouchesPositions = [];
          _this.handleStart = _this.handleStart.bind(_this);
          _this.handleLeave = _this.handleLeave.bind(_this);
          _this.handleMove = _this.handleMove.bind(_this);
          container.addEventListener("touchstart", _this.handleStart, false);
          container.addEventListener("touchend", _this.handleLeave, false);
          container.addEventListener("touchcancel", _this.handleLeave, false);
          container.addEventListener("touchmove", _this.handleMove, false);
          return _this;
        }
        TouchCaptor2.prototype.kill = function() {
          var container = this.container;
          container.removeEventListener("touchstart", this.handleStart);
          container.removeEventListener("touchend", this.handleLeave);
          container.removeEventListener("touchcancel", this.handleLeave);
          container.removeEventListener("touchmove", this.handleMove);
        };
        TouchCaptor2.prototype.getDimensions = function() {
          return {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
          };
        };
        TouchCaptor2.prototype.dispatchRelatedMouseEvent = function(type, e3, touch, emitter) {
          var mousePosition = touch || e3.touches[0];
          var mouseEvent = new MouseEvent(type, {
            clientX: mousePosition.clientX,
            clientY: mousePosition.clientY,
            altKey: e3.altKey,
            ctrlKey: e3.ctrlKey
          });
          mouseEvent.isFakeSigmaMouseEvent = true;
          (emitter || this.container).dispatchEvent(mouseEvent);
        };
        TouchCaptor2.prototype.handleStart = function(e3) {
          var _this = this;
          if (!this.enabled)
            return;
          e3.preventDefault();
          if (e3.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousedown", e3);
          var touches = (0, captor_1.getTouchesArray)(e3.touches);
          this.touchMode = touches.length;
          this.startCameraState = this.renderer.getCamera().getState();
          this.startTouchesPositions = touches.map(function(touch) {
            return (0, captor_1.getPosition)(touch, _this.container);
          });
          this.lastTouches = touches;
          this.lastTouchesPositions = this.startTouchesPositions;
          if (this.touchMode === 2) {
            var _a = __read(this.startTouchesPositions, 2), _b = _a[0], x0 = _b.x, y0 = _b.y, _c = _a[1], x1 = _c.x, y1 = _c.y;
            this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
            this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
          }
          this.emit("touchdown", (0, captor_1.getTouchCoords)(e3, this.container));
        };
        TouchCaptor2.prototype.handleLeave = function(e3) {
          if (!this.enabled)
            return;
          e3.preventDefault();
          if (e3.touches.length === 0 && this.lastTouches && this.lastTouches.length) {
            this.dispatchRelatedMouseEvent("mouseup", e3, this.lastTouches[0], document);
            if (!this.hasMoved) {
              this.dispatchRelatedMouseEvent("click", e3, this.lastTouches[0]);
            }
          }
          if (this.movingTimeout) {
            this.isMoving = false;
            clearTimeout(this.movingTimeout);
          }
          switch (this.touchMode) {
            case 2:
              if (e3.touches.length === 1) {
                this.handleStart(e3);
                e3.preventDefault();
                break;
              }
            case 1:
              if (this.isMoving) {
                var camera = this.renderer.getCamera();
                var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
                camera.animate({
                  x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                  y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
                }, {
                  duration: TOUCH_INERTIA_DURATION,
                  easing: "quadraticOut"
                });
              }
              this.hasMoved = false;
              this.isMoving = false;
              this.touchMode = 0;
              break;
          }
          this.emit("touchup", (0, captor_1.getTouchCoords)(e3, this.container));
        };
        TouchCaptor2.prototype.handleMove = function(e3) {
          var _a;
          var _this = this;
          if (!this.enabled)
            return;
          e3.preventDefault();
          if (e3.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousemove", e3);
          var touches = (0, captor_1.getTouchesArray)(e3.touches);
          var touchesPositions = touches.map(function(touch) {
            return (0, captor_1.getPosition)(touch, _this.container);
          });
          this.lastTouches = touches;
          this.lastTouchesPositions = touchesPositions;
          this.hasMoved || (this.hasMoved = touchesPositions.some(function(position, idx) {
            var startPosition = _this.startTouchesPositions[idx];
            return position.x !== startPosition.x || position.y !== startPosition.y;
          }));
          if (!this.hasMoved) {
            return;
          }
          this.isMoving = true;
          if (this.movingTimeout)
            clearTimeout(this.movingTimeout);
          this.movingTimeout = window.setTimeout(function() {
            _this.isMoving = false;
          }, DRAG_TIMEOUT);
          var camera = this.renderer.getCamera();
          var startCameraState = this.startCameraState;
          switch (this.touchMode) {
            case 1: {
              var _b = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _b.x, yStart = _b.y;
              var _c = this.renderer.viewportToFramedGraph(touchesPositions[0]), x2 = _c.x, y2 = _c.y;
              camera.setState({
                x: startCameraState.x + xStart - x2,
                y: startCameraState.y + yStart - y2
              });
              break;
            }
            case 2: {
              var newCameraState = {};
              var _d = touchesPositions[0], x0 = _d.x, y0 = _d.y;
              var _e = touchesPositions[1], x1 = _e.x, y1 = _e.y;
              var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
              var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
              var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
              newCameraState.ratio = newRatio;
              newCameraState.angle = startCameraState.angle + angleDiff;
              var dimensions = this.getDimensions();
              var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: startCameraState });
              var smallestDimension = Math.min(dimensions.width, dimensions.height);
              var dx = smallestDimension / dimensions.width;
              var dy = smallestDimension / dimensions.height;
              var ratio = newRatio / smallestDimension;
              var x2 = x0 - smallestDimension / 2 / dx;
              var y2 = y0 - smallestDimension / 2 / dy;
              _a = __read([
                x2 * Math.cos(-newCameraState.angle) - y2 * Math.sin(-newCameraState.angle),
                y2 * Math.cos(-newCameraState.angle) + x2 * Math.sin(-newCameraState.angle)
              ], 2), x2 = _a[0], y2 = _a[1];
              newCameraState.x = touchGraphPosition.x - x2 * ratio;
              newCameraState.y = touchGraphPosition.y + y2 * ratio;
              camera.setState(newCameraState);
              break;
            }
          }
          this.emit("touchmove", (0, captor_1.getTouchCoords)(e3, this.container));
        };
        return TouchCaptor2;
      }(captor_1.default)
    );
    exports.default = TouchCaptor;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/edge-collisions.js
var require_edge_collisions = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/utils/edge-collisions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.doEdgeCollideWithPoint = exports.isPixelColored = void 0;
    function isPixelColored(gl, x2, y2) {
      var pixels = new Uint8Array(4);
      gl.readPixels(x2, gl.drawingBufferHeight - y2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      return pixels[3] > 0;
    }
    exports.isPixelColored = isPixelColored;
    function doEdgeCollideWithPoint(x2, y2, xS, yS, xT, yT, thickness) {
      if (x2 < xS - thickness && x2 < xT - thickness)
        return false;
      if (y2 < yS - thickness && y2 < yT - thickness)
        return false;
      if (x2 > xS + thickness && x2 > xT + thickness)
        return false;
      if (y2 > yS + thickness && y2 > yT + thickness)
        return false;
      var distance = Math.abs((xT - xS) * (yS - y2) - (xS - x2) * (yT - yS)) / Math.sqrt(Math.pow(xT - xS, 2) + Math.pow(yT - yS, 2));
      return distance < thickness / 2;
    }
    exports.doEdgeCollideWithPoint = doEdgeCollideWithPoint;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/sigma.js
var require_sigma = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/sigma.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t3) {
        for (var s3, i2 = 1, n3 = arguments.length; i2 < n3; i2++) {
          s3 = arguments[i2];
          for (var p2 in s3)
            if (Object.prototype.hasOwnProperty.call(s3, p2))
              t3[p2] = s3[p2];
        }
        return t3;
      };
      return __assign.apply(this, arguments);
    };
    var __values = exports && exports.__values || function(o4) {
      var s3 = typeof Symbol === "function" && Symbol.iterator, m2 = s3 && o4[s3], i2 = 0;
      if (m2)
        return m2.call(o4);
      if (o4 && typeof o4.length === "number")
        return {
          next: function() {
            if (o4 && i2 >= o4.length)
              o4 = void 0;
            return { value: o4 && o4[i2++], done: !o4 };
          }
        };
      throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var extend_1 = __importDefault(require_extend());
    var camera_1 = __importDefault(require_camera());
    var mouse_1 = __importDefault(require_mouse());
    var quadtree_1 = __importDefault(require_quadtree());
    var types_1 = require_types();
    var utils_1 = require_utils();
    var labels_1 = require_labels();
    var settings_1 = require_settings();
    var touch_1 = __importDefault(require_touch());
    var matrices_1 = require_matrices();
    var edge_collisions_1 = require_edge_collisions();
    var X_LABEL_MARGIN = 150;
    var Y_LABEL_MARGIN = 50;
    function applyNodeDefaults(settings, key, data) {
      if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y"))
        throw new Error('Sigma: could not find a valid position (x, y) for node "'.concat(key, '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'));
      if (!data.color)
        data.color = settings.defaultNodeColor;
      if (!data.label && data.label !== "")
        data.label = null;
      if (data.label !== void 0 && data.label !== null)
        data.label = "" + data.label;
      else
        data.label = null;
      if (!data.size)
        data.size = 2;
      if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
      if (!data.hasOwnProperty("highlighted"))
        data.highlighted = false;
      if (!data.hasOwnProperty("forceLabel"))
        data.forceLabel = false;
      if (!data.type || data.type === "")
        data.type = settings.defaultNodeType;
      if (!data.zIndex)
        data.zIndex = 0;
      return data;
    }
    function applyEdgeDefaults(settings, key, data) {
      if (!data.color)
        data.color = settings.defaultEdgeColor;
      if (!data.label)
        data.label = "";
      if (!data.size)
        data.size = 0.5;
      if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
      if (!data.hasOwnProperty("forceLabel"))
        data.forceLabel = false;
      if (!data.type || data.type === "")
        data.type = settings.defaultEdgeType;
      if (!data.zIndex)
        data.zIndex = 0;
      return data;
    }
    var Sigma = (
      /** @class */
      function(_super) {
        __extends(Sigma2, _super);
        function Sigma2(graph, container, settings) {
          if (settings === void 0) {
            settings = {};
          }
          var _this = _super.call(this) || this;
          _this.elements = {};
          _this.canvasContexts = {};
          _this.webGLContexts = {};
          _this.activeListeners = {};
          _this.quadtree = new quadtree_1.default();
          _this.labelGrid = new labels_1.LabelGrid();
          _this.nodeDataCache = {};
          _this.edgeDataCache = {};
          _this.nodesWithForcedLabels = [];
          _this.edgesWithForcedLabels = [];
          _this.nodeExtent = { x: [0, 1], y: [0, 1] };
          _this.matrix = (0, matrices_1.identity)();
          _this.invMatrix = (0, matrices_1.identity)();
          _this.correctionRatio = 1;
          _this.customBBox = null;
          _this.normalizationFunction = (0, utils_1.createNormalizationFunction)({
            x: [0, 1],
            y: [0, 1]
          });
          _this.graphToViewportRatio = 1;
          _this.width = 0;
          _this.height = 0;
          _this.pixelRatio = (0, utils_1.getPixelRatio)();
          _this.displayedNodeLabels = /* @__PURE__ */ new Set();
          _this.displayedEdgeLabels = /* @__PURE__ */ new Set();
          _this.highlightedNodes = /* @__PURE__ */ new Set();
          _this.hoveredNode = null;
          _this.hoveredEdge = null;
          _this.renderFrame = null;
          _this.renderHighlightedNodesFrame = null;
          _this.needToProcess = false;
          _this.checkEdgesEventsFrame = null;
          _this.nodePrograms = {};
          _this.nodeHoverPrograms = {};
          _this.edgePrograms = {};
          _this.settings = (0, settings_1.resolveSettings)(settings);
          (0, settings_1.validateSettings)(_this.settings);
          (0, utils_1.validateGraph)(graph);
          if (!(container instanceof HTMLElement))
            throw new Error("Sigma: container should be an html element.");
          _this.graph = graph;
          _this.container = container;
          _this.createWebGLContext("edges", { preserveDrawingBuffer: true });
          _this.createCanvasContext("edgeLabels");
          _this.createWebGLContext("nodes");
          _this.createCanvasContext("labels");
          _this.createCanvasContext("hovers");
          _this.createWebGLContext("hoverNodes");
          _this.createCanvasContext("mouse");
          for (var key in _this.webGLContexts) {
            var gl = _this.webGLContexts[key];
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);
          }
          for (var type in _this.settings.nodeProgramClasses) {
            var NodeProgramClass = _this.settings.nodeProgramClasses[type];
            _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this);
            var NodeHoverProgram = NodeProgramClass;
            if (type in _this.settings.nodeHoverProgramClasses) {
              NodeHoverProgram = _this.settings.nodeHoverProgramClasses[type];
            }
            _this.nodeHoverPrograms[type] = new NodeHoverProgram(_this.webGLContexts.hoverNodes, _this);
          }
          for (var type in _this.settings.edgeProgramClasses) {
            var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
            _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges, _this);
          }
          _this.resize();
          _this.camera = new camera_1.default();
          _this.bindCameraHandlers();
          _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this);
          _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this);
          _this.bindEventHandlers();
          _this.bindGraphHandlers();
          _this.handleSettingsUpdate();
          _this.refresh();
          return _this;
        }
        Sigma2.prototype.createCanvas = function(id) {
          var canvas = (0, utils_1.createElement)("canvas", {
            position: "absolute"
          }, {
            class: "sigma-".concat(id)
          });
          this.elements[id] = canvas;
          this.container.appendChild(canvas);
          return canvas;
        };
        Sigma2.prototype.createCanvasContext = function(id) {
          var canvas = this.createCanvas(id);
          var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false
          };
          this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
          return this;
        };
        Sigma2.prototype.createWebGLContext = function(id, options) {
          var canvas = this.createCanvas(id);
          var contextOptions = __assign({ preserveDrawingBuffer: false, antialias: false }, options || {});
          var context;
          context = canvas.getContext("webgl2", contextOptions);
          if (!context)
            context = canvas.getContext("webgl", contextOptions);
          if (!context)
            context = canvas.getContext("experimental-webgl", contextOptions);
          this.webGLContexts[id] = context;
          return this;
        };
        Sigma2.prototype.bindCameraHandlers = function() {
          var _this = this;
          this.activeListeners.camera = function() {
            _this.scheduleRender();
          };
          this.camera.on("updated", this.activeListeners.camera);
          return this;
        };
        Sigma2.prototype.unbindCameraHandlers = function() {
          this.camera.removeListener("updated", this.activeListeners.camera);
          return this;
        };
        Sigma2.prototype.mouseIsOnNode = function(_a, _b, size) {
          var x2 = _a.x, y2 = _a.y;
          var nodeX = _b.x, nodeY = _b.y;
          return x2 > nodeX - size && x2 < nodeX + size && y2 > nodeY - size && y2 < nodeY + size && Math.sqrt(Math.pow(x2 - nodeX, 2) + Math.pow(y2 - nodeY, 2)) < size;
        };
        Sigma2.prototype.getQuadNodes = function(position) {
          var mouseGraphPosition = this.viewportToFramedGraph(position);
          return this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
        };
        Sigma2.prototype.getNodeAtPosition = function(position) {
          var x2 = position.x, y2 = position.y;
          var quadNodes = this.getQuadNodes(position);
          var minDistance = Infinity, nodeAtPosition = null;
          for (var i2 = 0, l3 = quadNodes.length; i2 < l3; i2++) {
            var node = quadNodes[i2];
            var data = this.nodeDataCache[node];
            var nodePosition = this.framedGraphToViewport(data);
            var size = this.scaleSize(data.size);
            if (!data.hidden && this.mouseIsOnNode(position, nodePosition, size)) {
              var distance = Math.sqrt(Math.pow(x2 - nodePosition.x, 2) + Math.pow(y2 - nodePosition.y, 2));
              if (distance < minDistance) {
                minDistance = distance;
                nodeAtPosition = node;
              }
            }
          }
          return nodeAtPosition;
        };
        Sigma2.prototype.bindEventHandlers = function() {
          var _this = this;
          this.activeListeners.handleResize = function() {
            _this.scheduleRender();
          };
          window.addEventListener("resize", this.activeListeners.handleResize);
          this.activeListeners.handleMove = function(e3) {
            var baseEvent = {
              event: e3,
              preventSigmaDefault: function() {
                e3.preventSigmaDefault();
              }
            };
            var nodeToHover = _this.getNodeAtPosition(e3);
            if (nodeToHover && _this.hoveredNode !== nodeToHover && !_this.nodeDataCache[nodeToHover].hidden) {
              if (_this.hoveredNode)
                _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node: _this.hoveredNode }));
              _this.hoveredNode = nodeToHover;
              _this.emit("enterNode", __assign(__assign({}, baseEvent), { node: nodeToHover }));
              _this.scheduleHighlightedNodesRender();
              return;
            }
            if (_this.hoveredNode) {
              var data = _this.nodeDataCache[_this.hoveredNode];
              var pos = _this.framedGraphToViewport(data);
              var size = _this.scaleSize(data.size);
              if (!_this.mouseIsOnNode(e3, pos, size)) {
                var node = _this.hoveredNode;
                _this.hoveredNode = null;
                _this.emit("leaveNode", __assign(__assign({}, baseEvent), { node }));
                _this.scheduleHighlightedNodesRender();
                return;
              }
            }
            if (_this.settings.enableEdgeHoverEvents === true) {
              _this.checkEdgeHoverEvents(baseEvent);
            } else if (_this.settings.enableEdgeHoverEvents === "debounce") {
              if (!_this.checkEdgesEventsFrame)
                _this.checkEdgesEventsFrame = (0, utils_1.requestFrame)(function() {
                  _this.checkEdgeHoverEvents(baseEvent);
                  _this.checkEdgesEventsFrame = null;
                });
            }
          };
          var createMouseListener = function(eventType) {
            return function(e3) {
              var baseEvent = {
                event: e3,
                preventSigmaDefault: function() {
                  e3.preventSigmaDefault();
                }
              };
              var isFakeSigmaMouseEvent = e3.original.isFakeSigmaMouseEvent;
              var nodeAtPosition = isFakeSigmaMouseEvent ? _this.getNodeAtPosition(e3) : _this.hoveredNode;
              if (nodeAtPosition)
                return _this.emit("".concat(eventType, "Node"), __assign(__assign({}, baseEvent), { node: nodeAtPosition }));
              if (eventType === "wheel" ? _this.settings.enableEdgeWheelEvents : _this.settings.enableEdgeClickEvents) {
                var edge = _this.getEdgeAtPoint(e3.x, e3.y);
                if (edge)
                  return _this.emit("".concat(eventType, "Edge"), __assign(__assign({}, baseEvent), { edge }));
              }
              return _this.emit("".concat(eventType, "Stage"), baseEvent);
            };
          };
          this.activeListeners.handleClick = createMouseListener("click");
          this.activeListeners.handleRightClick = createMouseListener("rightClick");
          this.activeListeners.handleDoubleClick = createMouseListener("doubleClick");
          this.activeListeners.handleWheel = createMouseListener("wheel");
          this.activeListeners.handleDown = createMouseListener("down");
          this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
          this.mouseCaptor.on("click", this.activeListeners.handleClick);
          this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
          this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
          this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
          this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
          return this;
        };
        Sigma2.prototype.bindGraphHandlers = function() {
          var _this = this;
          var graph = this.graph;
          this.activeListeners.graphUpdate = function() {
            _this.scheduleRefresh();
          };
          this.activeListeners.dropNodeGraphUpdate = function(e3) {
            delete _this.nodeDataCache[e3.key];
            if (_this.hoveredNode === e3.key)
              _this.hoveredNode = null;
            _this.activeListeners.graphUpdate();
          };
          this.activeListeners.dropEdgeGraphUpdate = function(e3) {
            delete _this.edgeDataCache[e3.key];
            if (_this.hoveredEdge === e3.key)
              _this.hoveredEdge = null;
            _this.activeListeners.graphUpdate();
          };
          this.activeListeners.clearEdgesGraphUpdate = function() {
            _this.edgeDataCache = {};
            _this.hoveredEdge = null;
            _this.activeListeners.graphUpdate();
          };
          this.activeListeners.clearGraphUpdate = function() {
            _this.nodeDataCache = {};
            _this.hoveredNode = null;
            _this.activeListeners.clearEdgesGraphUpdate();
          };
          graph.on("nodeAdded", this.activeListeners.graphUpdate);
          graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
          graph.on("nodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("edgeAdded", this.activeListeners.graphUpdate);
          graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
          graph.on("edgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
          graph.on("cleared", this.activeListeners.clearGraphUpdate);
          return this;
        };
        Sigma2.prototype.unbindGraphHandlers = function() {
          var graph = this.graph;
          graph.removeListener("nodeAdded", this.activeListeners.graphUpdate);
          graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
          graph.removeListener("nodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("edgeAdded", this.activeListeners.graphUpdate);
          graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
          graph.removeListener("edgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
          graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
        };
        Sigma2.prototype.checkEdgeHoverEvents = function(payload) {
          var edgeToHover = this.hoveredNode ? null : this.getEdgeAtPoint(payload.event.x, payload.event.y);
          if (edgeToHover !== this.hoveredEdge) {
            if (this.hoveredEdge)
              this.emit("leaveEdge", __assign(__assign({}, payload), { edge: this.hoveredEdge }));
            if (edgeToHover)
              this.emit("enterEdge", __assign(__assign({}, payload), { edge: edgeToHover }));
            this.hoveredEdge = edgeToHover;
          }
          return this;
        };
        Sigma2.prototype.getEdgeAtPoint = function(x2, y2) {
          var e_1, _a;
          var _this = this;
          var _b = this, edgeDataCache = _b.edgeDataCache, nodeDataCache = _b.nodeDataCache;
          if (!(0, edge_collisions_1.isPixelColored)(this.webGLContexts.edges, x2 * this.pixelRatio, y2 * this.pixelRatio))
            return null;
          var _c = this.viewportToGraph({ x: x2, y: y2 }), graphX = _c.x, graphY = _c.y;
          var transformationRatio = 0;
          this.graph.someEdge(function(key, _2, sourceId, targetId, _a2, _b2) {
            var xs = _a2.x, ys = _a2.y;
            var xt = _b2.x, yt = _b2.y;
            if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
              return false;
            if (xs !== xt || ys !== yt) {
              var graphLength = Math.sqrt(Math.pow(xt - xs, 2) + Math.pow(yt - ys, 2));
              var _c2 = _this.graphToViewport({ x: xs, y: ys }), vp_xs = _c2.x, vp_ys = _c2.y;
              var _d = _this.graphToViewport({ x: xt, y: yt }), vp_xt = _d.x, vp_yt = _d.y;
              var viewportLength = Math.sqrt(Math.pow(vp_xt - vp_xs, 2) + Math.pow(vp_yt - vp_ys, 2));
              transformationRatio = graphLength / viewportLength;
              return true;
            }
          });
          if (!transformationRatio)
            return null;
          var edges = this.graph.filterEdges(function(key, edgeAttributes, sourceId, targetId, sourcePosition, targetPosition) {
            if (edgeDataCache[key].hidden || nodeDataCache[sourceId].hidden || nodeDataCache[targetId].hidden)
              return false;
            if ((0, edge_collisions_1.doEdgeCollideWithPoint)(
              graphX,
              graphY,
              sourcePosition.x,
              sourcePosition.y,
              targetPosition.x,
              targetPosition.y,
              // Adapt the edge size to the zoom ratio:
              _this.scaleSize(edgeDataCache[key].size * transformationRatio)
            )) {
              return true;
            }
          });
          if (edges.length === 0)
            return null;
          var selectedEdge = edges[edges.length - 1];
          var highestZIndex = -Infinity;
          try {
            for (var edges_1 = __values(edges), edges_1_1 = edges_1.next(); !edges_1_1.done; edges_1_1 = edges_1.next()) {
              var edge = edges_1_1.value;
              var zIndex = this.graph.getEdgeAttribute(edge, "zIndex");
              if (zIndex >= highestZIndex) {
                selectedEdge = edge;
                highestZIndex = zIndex;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (edges_1_1 && !edges_1_1.done && (_a = edges_1.return))
                _a.call(edges_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return selectedEdge;
        };
        Sigma2.prototype.process = function() {
          var _this = this;
          var graph = this.graph;
          var settings = this.settings;
          var dimensions = this.getDimensions();
          var nodeZExtent = [Infinity, -Infinity];
          var edgeZExtent = [Infinity, -Infinity];
          this.quadtree.clear();
          this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
          this.highlightedNodes = /* @__PURE__ */ new Set();
          this.nodeExtent = (0, utils_1.graphExtent)(graph);
          this.nodesWithForcedLabels = [];
          this.edgesWithForcedLabels = [];
          var nullCamera = new camera_1.default();
          var nullCameraMatrix = (0, utils_1.matrixFromCamera)(nullCamera.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
          this.normalizationFunction = (0, utils_1.createNormalizationFunction)(this.customBBox || this.nodeExtent);
          var nodesPerPrograms = {};
          var nodes = graph.nodes();
          for (var i2 = 0, l3 = nodes.length; i2 < l3; i2++) {
            var node = nodes[i2];
            var attr = Object.assign({}, graph.getNodeAttributes(node));
            if (settings.nodeReducer)
              attr = settings.nodeReducer(node, attr);
            var data = applyNodeDefaults(this.settings, node, attr);
            nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
            this.nodeDataCache[node] = data;
            this.normalizationFunction.applyTo(data);
            if (data.forceLabel)
              this.nodesWithForcedLabels.push(node);
            if (this.settings.zIndex) {
              if (data.zIndex < nodeZExtent[0])
                nodeZExtent[0] = data.zIndex;
              if (data.zIndex > nodeZExtent[1])
                nodeZExtent[1] = data.zIndex;
            }
          }
          for (var type in this.nodePrograms) {
            if (!this.nodePrograms.hasOwnProperty(type)) {
              throw new Error('Sigma: could not find a suitable program for node type "'.concat(type, '"!'));
            }
            this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
            nodesPerPrograms[type] = 0;
          }
          if (this.settings.zIndex && nodeZExtent[0] !== nodeZExtent[1])
            nodes = (0, utils_1.zIndexOrdering)(nodeZExtent, function(node2) {
              return _this.nodeDataCache[node2].zIndex;
            }, nodes);
          var normalizationRatio = this.normalizationFunction.ratio;
          for (var i2 = 0, l3 = nodes.length; i2 < l3; i2++) {
            var node = nodes[i2];
            var data = this.nodeDataCache[node];
            this.quadtree.add(node, data.x, 1 - data.y, this.scaleSize(data.size, 1) / normalizationRatio);
            if (typeof data.label === "string" && !data.hidden)
              this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, { matrix: nullCameraMatrix }));
            var nodeProgram = this.nodePrograms[data.type];
            if (!nodeProgram)
              throw new Error('Sigma: could not find a suitable program for node type "'.concat(data.type, '"!'));
            nodeProgram.process(nodesPerPrograms[data.type]++, data);
            if (data.highlighted && !data.hidden)
              this.highlightedNodes.add(node);
          }
          this.labelGrid.organize();
          var edgesPerPrograms = {};
          var edges = graph.edges();
          for (var i2 = 0, l3 = edges.length; i2 < l3; i2++) {
            var edge = edges[i2];
            var attr = Object.assign({}, graph.getEdgeAttributes(edge));
            if (settings.edgeReducer)
              attr = settings.edgeReducer(edge, attr);
            var data = applyEdgeDefaults(this.settings, edge, attr);
            edgesPerPrograms[data.type] = (edgesPerPrograms[data.type] || 0) + 1;
            this.edgeDataCache[edge] = data;
            if (data.forceLabel && !data.hidden)
              this.edgesWithForcedLabels.push(edge);
            if (this.settings.zIndex) {
              if (data.zIndex < edgeZExtent[0])
                edgeZExtent[0] = data.zIndex;
              if (data.zIndex > edgeZExtent[1])
                edgeZExtent[1] = data.zIndex;
            }
          }
          for (var type in this.edgePrograms) {
            if (!this.edgePrograms.hasOwnProperty(type)) {
              throw new Error('Sigma: could not find a suitable program for edge type "'.concat(type, '"!'));
            }
            this.edgePrograms[type].reallocate(edgesPerPrograms[type] || 0);
            edgesPerPrograms[type] = 0;
          }
          if (this.settings.zIndex && edgeZExtent[0] !== edgeZExtent[1])
            edges = (0, utils_1.zIndexOrdering)(edgeZExtent, function(edge2) {
              return _this.edgeDataCache[edge2].zIndex;
            }, edges);
          for (var i2 = 0, l3 = edges.length; i2 < l3; i2++) {
            var edge = edges[i2];
            var data = this.edgeDataCache[edge];
            var extremities = graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
            this.edgePrograms[data.type].process(edgesPerPrograms[data.type]++, sourceData, targetData, data);
          }
          return this;
        };
        Sigma2.prototype.handleSettingsUpdate = function() {
          this.camera.minRatio = this.settings.minCameraRatio;
          this.camera.maxRatio = this.settings.maxCameraRatio;
          this.camera.setState(this.camera.validateState(this.camera.getState()));
          return this;
        };
        Sigma2.prototype.renderLabels = function() {
          if (!this.settings.renderLabels)
            return this;
          var cameraState = this.camera.getState();
          var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
          (0, extend_1.default)(labelsToDisplay, this.nodesWithForcedLabels);
          this.displayedNodeLabels = /* @__PURE__ */ new Set();
          var context = this.canvasContexts.labels;
          for (var i2 = 0, l3 = labelsToDisplay.length; i2 < l3; i2++) {
            var node = labelsToDisplay[i2];
            var data = this.nodeDataCache[node];
            if (this.displayedNodeLabels.has(node))
              continue;
            if (data.hidden)
              continue;
            var _a = this.framedGraphToViewport(data), x2 = _a.x, y2 = _a.y;
            var size = this.scaleSize(data.size);
            if (!data.forceLabel && size < this.settings.labelRenderedSizeThreshold)
              continue;
            if (x2 < -X_LABEL_MARGIN || x2 > this.width + X_LABEL_MARGIN || y2 < -Y_LABEL_MARGIN || y2 > this.height + Y_LABEL_MARGIN)
              continue;
            this.displayedNodeLabels.add(node);
            this.settings.labelRenderer(context, __assign(__assign({ key: node }, data), { size, x: x2, y: y2 }), this.settings);
          }
          return this;
        };
        Sigma2.prototype.renderEdgeLabels = function() {
          if (!this.settings.renderEdgeLabels)
            return this;
          var context = this.canvasContexts.edgeLabels;
          context.clearRect(0, 0, this.width, this.height);
          var edgeLabelsToDisplay = (0, labels_1.edgeLabelsToDisplayFromNodes)({
            graph: this.graph,
            hoveredNode: this.hoveredNode,
            displayedNodeLabels: this.displayedNodeLabels,
            highlightedNodes: this.highlightedNodes
          }).concat(this.edgesWithForcedLabels);
          var displayedLabels = /* @__PURE__ */ new Set();
          for (var i2 = 0, l3 = edgeLabelsToDisplay.length; i2 < l3; i2++) {
            var edge = edgeLabelsToDisplay[i2], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edge];
            if (displayedLabels.has(edge))
              continue;
            if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
              continue;
            }
            this.settings.edgeLabelRenderer(context, __assign(__assign({ key: edge }, edgeData), { size: this.scaleSize(edgeData.size) }), __assign(__assign(__assign({ key: extremities[0] }, sourceData), this.framedGraphToViewport(sourceData)), { size: this.scaleSize(sourceData.size) }), __assign(__assign(__assign({ key: extremities[1] }, targetData), this.framedGraphToViewport(targetData)), { size: this.scaleSize(targetData.size) }), this.settings);
            displayedLabels.add(edge);
          }
          this.displayedEdgeLabels = displayedLabels;
          return this;
        };
        Sigma2.prototype.renderHighlightedNodes = function() {
          var _this = this;
          var context = this.canvasContexts.hovers;
          context.clearRect(0, 0, this.width, this.height);
          var render = function(node) {
            var data = _this.nodeDataCache[node];
            var _a = _this.framedGraphToViewport(data), x2 = _a.x, y2 = _a.y;
            var size = _this.scaleSize(data.size);
            _this.settings.hoverRenderer(context, __assign(__assign({ key: node }, data), { size, x: x2, y: y2 }), _this.settings);
          };
          var nodesToRender = [];
          if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
            nodesToRender.push(this.hoveredNode);
          }
          this.highlightedNodes.forEach(function(node) {
            if (node !== _this.hoveredNode)
              nodesToRender.push(node);
          });
          nodesToRender.forEach(function(node) {
            return render(node);
          });
          var nodesPerPrograms = {};
          nodesToRender.forEach(function(node) {
            var type2 = _this.nodeDataCache[node].type;
            nodesPerPrograms[type2] = (nodesPerPrograms[type2] || 0) + 1;
          });
          for (var type in this.nodeHoverPrograms) {
            this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
            nodesPerPrograms[type] = 0;
          }
          nodesToRender.forEach(function(node) {
            var data = _this.nodeDataCache[node];
            _this.nodeHoverPrograms[data.type].process(nodesPerPrograms[data.type]++, data);
          });
          this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
          for (var type in this.nodeHoverPrograms) {
            var program = this.nodeHoverPrograms[type];
            program.render({
              matrix: this.matrix,
              width: this.width,
              height: this.height,
              pixelRatio: this.pixelRatio,
              zoomRatio: this.camera.ratio,
              sizeRatio: 1 / this.scaleSize(),
              correctionRatio: this.correctionRatio
            });
          }
        };
        Sigma2.prototype.scheduleHighlightedNodesRender = function() {
          var _this = this;
          if (this.renderHighlightedNodesFrame || this.renderFrame)
            return;
          this.renderHighlightedNodesFrame = (0, utils_1.requestFrame)(function() {
            _this.renderHighlightedNodesFrame = null;
            _this.renderHighlightedNodes();
            _this.renderEdgeLabels();
          });
        };
        Sigma2.prototype.render = function() {
          var _this = this;
          this.emit("beforeRender");
          var exitRender = function() {
            _this.emit("afterRender");
            return _this;
          };
          if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
          }
          this.resize();
          if (this.needToProcess)
            this.process();
          this.needToProcess = false;
          this.clear();
          if (!this.graph.order)
            return exitRender();
          var mouseCaptor = this.mouseCaptor;
          var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
          var cameraState = this.camera.getState();
          var viewportDimensions = this.getDimensions();
          var graphDimensions = this.getGraphDimensions();
          var padding = this.getSetting("stagePadding") || 0;
          this.matrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding);
          this.invMatrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding, true);
          this.correctionRatio = (0, utils_1.getMatrixImpact)(this.matrix, cameraState, viewportDimensions);
          this.graphToViewportRatio = this.getGraphToViewportRatio();
          var params = {
            matrix: this.matrix,
            width: this.width,
            height: this.height,
            pixelRatio: this.pixelRatio,
            zoomRatio: this.camera.ratio,
            sizeRatio: 1 / this.scaleSize(),
            correctionRatio: this.correctionRatio
          };
          for (var type in this.nodePrograms) {
            var program = this.nodePrograms[type];
            program.render(params);
          }
          if (!this.settings.hideEdgesOnMove || !moving) {
            for (var type in this.edgePrograms) {
              var program = this.edgePrograms[type];
              program.render(params);
            }
          }
          if (this.settings.hideLabelsOnMove && moving)
            return exitRender();
          this.renderLabels();
          this.renderEdgeLabels();
          this.renderHighlightedNodes();
          return exitRender();
        };
        Sigma2.prototype.getCamera = function() {
          return this.camera;
        };
        Sigma2.prototype.setCamera = function(camera) {
          this.unbindCameraHandlers();
          this.camera = camera;
          this.bindCameraHandlers();
        };
        Sigma2.prototype.getContainer = function() {
          return this.container;
        };
        Sigma2.prototype.getGraph = function() {
          return this.graph;
        };
        Sigma2.prototype.setGraph = function(graph) {
          if (graph === this.graph)
            return;
          this.unbindGraphHandlers();
          this.nodeDataCache = {};
          this.edgeDataCache = {};
          this.displayedNodeLabels.clear();
          this.displayedEdgeLabels.clear();
          this.highlightedNodes.clear();
          this.hoveredNode = null;
          this.hoveredEdge = null;
          this.nodesWithForcedLabels.length = 0;
          this.edgesWithForcedLabels.length = 0;
          if (this.checkEdgesEventsFrame !== null) {
            (0, utils_1.cancelFrame)(this.checkEdgesEventsFrame);
            this.checkEdgesEventsFrame = null;
          }
          this.graph = graph;
          this.bindGraphHandlers();
          this.refresh();
        };
        Sigma2.prototype.getMouseCaptor = function() {
          return this.mouseCaptor;
        };
        Sigma2.prototype.getTouchCaptor = function() {
          return this.touchCaptor;
        };
        Sigma2.prototype.getDimensions = function() {
          return { width: this.width, height: this.height };
        };
        Sigma2.prototype.getGraphDimensions = function() {
          var extent = this.customBBox || this.nodeExtent;
          return {
            width: extent.x[1] - extent.x[0] || 1,
            height: extent.y[1] - extent.y[0] || 1
          };
        };
        Sigma2.prototype.getNodeDisplayData = function(key) {
          var node = this.nodeDataCache[key];
          return node ? Object.assign({}, node) : void 0;
        };
        Sigma2.prototype.getEdgeDisplayData = function(key) {
          var edge = this.edgeDataCache[key];
          return edge ? Object.assign({}, edge) : void 0;
        };
        Sigma2.prototype.getNodeDisplayedLabels = function() {
          return new Set(this.displayedNodeLabels);
        };
        Sigma2.prototype.getEdgeDisplayedLabels = function() {
          return new Set(this.displayedEdgeLabels);
        };
        Sigma2.prototype.getSettings = function() {
          return __assign({}, this.settings);
        };
        Sigma2.prototype.getSetting = function(key) {
          return this.settings[key];
        };
        Sigma2.prototype.setSetting = function(key, value) {
          this.settings[key] = value;
          (0, settings_1.validateSettings)(this.settings);
          this.handleSettingsUpdate();
          this.scheduleRefresh();
          return this;
        };
        Sigma2.prototype.updateSetting = function(key, updater) {
          this.settings[key] = updater(this.settings[key]);
          (0, settings_1.validateSettings)(this.settings);
          this.handleSettingsUpdate();
          this.scheduleRefresh();
          return this;
        };
        Sigma2.prototype.resize = function() {
          var previousWidth = this.width, previousHeight = this.height;
          this.width = this.container.offsetWidth;
          this.height = this.container.offsetHeight;
          this.pixelRatio = (0, utils_1.getPixelRatio)();
          if (this.width === 0) {
            if (this.settings.allowInvalidContainer)
              this.width = 1;
            else
              throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
          }
          if (this.height === 0) {
            if (this.settings.allowInvalidContainer)
              this.height = 1;
            else
              throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
          }
          if (previousWidth === this.width && previousHeight === this.height)
            return this;
          this.emit("resize");
          for (var id in this.elements) {
            var element = this.elements[id];
            element.style.width = this.width + "px";
            element.style.height = this.height + "px";
          }
          for (var id in this.canvasContexts) {
            this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
            this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
            if (this.pixelRatio !== 1)
              this.canvasContexts[id].scale(this.pixelRatio, this.pixelRatio);
          }
          for (var id in this.webGLContexts) {
            this.elements[id].setAttribute("width", this.width * this.pixelRatio + "px");
            this.elements[id].setAttribute("height", this.height * this.pixelRatio + "px");
            this.webGLContexts[id].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
          }
          return this;
        };
        Sigma2.prototype.clear = function() {
          this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
          this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
          this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
          this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
          this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
          this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
          return this;
        };
        Sigma2.prototype.refresh = function() {
          this.needToProcess = true;
          this.render();
          return this;
        };
        Sigma2.prototype.scheduleRender = function() {
          var _this = this;
          if (!this.renderFrame) {
            this.renderFrame = (0, utils_1.requestFrame)(function() {
              _this.render();
            });
          }
          return this;
        };
        Sigma2.prototype.scheduleRefresh = function() {
          this.needToProcess = true;
          this.scheduleRender();
          return this;
        };
        Sigma2.prototype.getViewportZoomedState = function(viewportTarget, newRatio) {
          var _a = this.camera.getState(), ratio = _a.ratio, angle = _a.angle, x2 = _a.x, y2 = _a.y;
          var ratioDiff = newRatio / ratio;
          var center = {
            x: this.width / 2,
            y: this.height / 2
          };
          var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
          var graphCenterPosition = this.viewportToFramedGraph(center);
          return {
            angle,
            x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x2,
            y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y2,
            ratio: newRatio
          };
        };
        Sigma2.prototype.viewRectangle = function() {
          var marginX = 0 * this.width / 8, marginY = 0 * this.height / 8;
          var p1 = this.viewportToFramedGraph({ x: 0 - marginX, y: 0 - marginY }), p2 = this.viewportToFramedGraph({ x: this.width + marginX, y: 0 - marginY }), h2 = this.viewportToFramedGraph({ x: 0, y: this.height + marginY });
          return {
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            height: p2.y - h2.y
          };
        };
        Sigma2.prototype.framedGraphToViewport = function(coordinates, override) {
          if (override === void 0) {
            override = {};
          }
          var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
          var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
          var viewportPos = (0, matrices_1.multiplyVec2)(matrix, coordinates);
          return {
            x: (1 + viewportPos.x) * this.width / 2,
            y: (1 - viewportPos.y) * this.height / 2
          };
        };
        Sigma2.prototype.viewportToFramedGraph = function(coordinates, override) {
          if (override === void 0) {
            override = {};
          }
          var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
          var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
          var res = (0, matrices_1.multiplyVec2)(invMatrix, {
            x: coordinates.x / this.width * 2 - 1,
            y: 1 - coordinates.y / this.height * 2
          });
          if (isNaN(res.x))
            res.x = 0;
          if (isNaN(res.y))
            res.y = 0;
          return res;
        };
        Sigma2.prototype.viewportToGraph = function(viewportPoint, override) {
          if (override === void 0) {
            override = {};
          }
          return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
        };
        Sigma2.prototype.graphToViewport = function(graphPoint, override) {
          if (override === void 0) {
            override = {};
          }
          return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
        };
        Sigma2.prototype.getGraphToViewportRatio = function() {
          var graphP1 = { x: 0, y: 0 };
          var graphP2 = { x: 1, y: 1 };
          var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
          var viewportP1 = this.graphToViewport(graphP1);
          var viewportP2 = this.graphToViewport(graphP2);
          var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
          return viewportD / graphD;
        };
        Sigma2.prototype.getBBox = function() {
          return (0, utils_1.graphExtent)(this.graph);
        };
        Sigma2.prototype.getCustomBBox = function() {
          return this.customBBox;
        };
        Sigma2.prototype.setCustomBBox = function(customBBox) {
          this.customBBox = customBBox;
          this.scheduleRender();
          return this;
        };
        Sigma2.prototype.kill = function() {
          this.emit("kill");
          this.removeAllListeners();
          this.unbindCameraHandlers();
          window.removeEventListener("resize", this.activeListeners.handleResize);
          this.mouseCaptor.kill();
          this.touchCaptor.kill();
          this.unbindGraphHandlers();
          this.quadtree = new quadtree_1.default();
          this.nodeDataCache = {};
          this.edgeDataCache = {};
          this.nodesWithForcedLabels = [];
          this.edgesWithForcedLabels = [];
          this.highlightedNodes.clear();
          if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
          }
          if (this.renderHighlightedNodesFrame) {
            (0, utils_1.cancelFrame)(this.renderHighlightedNodesFrame);
            this.renderHighlightedNodesFrame = null;
          }
          var container = this.container;
          while (container.firstChild)
            container.removeChild(container.firstChild);
        };
        Sigma2.prototype.scaleSize = function(size, cameraRatio) {
          if (size === void 0) {
            size = 1;
          }
          if (cameraRatio === void 0) {
            cameraRatio = this.camera.ratio;
          }
          return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
        };
        Sigma2.prototype.getCanvases = function() {
          return __assign({}, this.elements);
        };
        return Sigma2;
      }(types_1.TypedEventEmitter)
    );
    exports.default = Sigma;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/index.js
var require_sigma2 = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sigma = exports.MouseCaptor = exports.QuadTree = exports.Camera = void 0;
    var sigma_1 = __importDefault(require_sigma());
    exports.Sigma = sigma_1.default;
    var camera_1 = __importDefault(require_camera());
    exports.Camera = camera_1.default;
    var quadtree_1 = __importDefault(require_quadtree());
    exports.QuadTree = quadtree_1.default;
    var mouse_1 = __importDefault(require_mouse());
    exports.MouseCaptor = mouse_1.default;
    exports.default = sigma_1.default;
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.image.vert.glsl.js
var require_node_image_vert_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.image.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var t3 = { d: (e4, o5) => {
        for (var n3 in o5)
          t3.o(o5, n3) && !t3.o(e4, n3) && Object.defineProperty(e4, n3, { enumerable: true, get: o5[n3] });
      }, o: (t4, e4) => Object.prototype.hasOwnProperty.call(t4, e4), r: (t4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t4, "__esModule", { value: true });
      } }, e3 = {};
      t3.r(e3), t3.d(e3, { default: () => o4 });
      const o4 = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\nattribute vec4 a_texture;\n\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\nvarying vec4 v_texture;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size / u_sizeRatio * u_pixelRatio * 2.0;\n\n  v_border = (0.5 / a_size) * u_sizeRatio;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n\n  // Pass the texture coordinates:\n  v_texture = a_texture;\n}\n";
      module.exports = e3;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.image.frag.glsl.js
var require_node_image_frag_glsl = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/shaders/node.image.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e3 = { d: (o5, r4) => {
        for (var n3 in r4)
          e3.o(r4, n3) && !e3.o(o5, n3) && Object.defineProperty(o5, n3, { enumerable: true, get: r4[n3] });
      }, o: (e4, o5) => Object.prototype.hasOwnProperty.call(e4, o5), r: (e4) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      } }, o4 = {};
      e3.r(o4), e3.d(o4, { default: () => r3 });
      const r3 = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\nvarying vec4 v_texture;\n\nuniform sampler2D u_atlas;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec4 color;\n\n  if (v_texture.w > 0.0) {\n    vec4 texel = texture2D(u_atlas, v_texture.xy + gl_PointCoord * v_texture.zw, -1.0);\n    color = vec4(mix(v_color, texel, texel.a).rgb, max(texel.a, v_color.a));\n  } else {\n    color = v_color;\n  }\n\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = length(m);\n\n  if (dist < radius - v_border) {\n    gl_FragColor = color;\n  } else if (dist < radius) {\n    gl_FragColor = mix(transparent, color, (radius - dist) / v_border);\n  } else {\n    gl_FragColor = transparent;\n  }\n}\n";
      module.exports = o4;
    })();
  }
});

// node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/node.image.js
var require_node_image = __commonJS({
  "node_modules/.pnpm/sigma@3.0.0-alpha3_graphology-types@0.24.7/node_modules/sigma/rendering/webgl/programs/node.image.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3)
            if (Object.prototype.hasOwnProperty.call(b3, p2))
              d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      };
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var node_image_vert_glsl_1 = __importDefault(require_node_image_vert_glsl());
    var node_image_frag_glsl_1 = __importDefault(require_node_image_frag_glsl());
    var node_1 = require_node();
    var MAX_TEXTURE_SIZE = 192;
    var MAX_CANVAS_WIDTH = 3072;
    function getNodeImageProgram() {
      var rebindTextureFns = [];
      var images = {};
      var textureImage;
      var hasReceivedImages = false;
      var pendingImagesFrameID = void 0;
      var writePositionX = 0;
      var writePositionY = 0;
      var writeRowHeight = 0;
      function loadImage(imageSource) {
        if (images[imageSource])
          return;
        var image = new Image();
        image.addEventListener("load", function() {
          images[imageSource] = {
            status: "pending",
            image
          };
          if (typeof pendingImagesFrameID !== "number") {
            pendingImagesFrameID = requestAnimationFrame(function() {
              return finalizePendingImages();
            });
          }
        });
        image.addEventListener("error", function() {
          images[imageSource] = { status: "error" };
        });
        images[imageSource] = { status: "loading" };
        image.setAttribute("crossOrigin", "");
        image.src = imageSource;
      }
      function finalizePendingImages() {
        pendingImagesFrameID = void 0;
        var pendingImages = [];
        for (var id in images) {
          var state = images[id];
          if (state.status === "pending") {
            pendingImages.push({
              id,
              image: state.image,
              size: Math.min(state.image.width, state.image.height) || 1
            });
          }
        }
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d", { willReadFrequently: true });
        var totalWidth = hasReceivedImages ? textureImage.width : 0;
        var totalHeight = hasReceivedImages ? textureImage.height : 0;
        var xOffset = writePositionX;
        var yOffset = writePositionY;
        var drawRow = function(pendingImages2) {
          if (canvas.width !== totalWidth || canvas.height !== totalHeight) {
            canvas.width = Math.min(MAX_CANVAS_WIDTH, totalWidth);
            canvas.height = totalHeight;
            if (hasReceivedImages) {
              ctx.putImageData(textureImage, 0, 0);
            }
          }
          pendingImages2.forEach(function(_a) {
            var id2 = _a.id, image = _a.image, size = _a.size;
            var imageSizeInTexture = Math.min(MAX_TEXTURE_SIZE, size);
            var dx = 0, dy = 0;
            if ((image.width || 0) > (image.height || 0)) {
              dx = (image.width - image.height) / 2;
            } else {
              dy = (image.height - image.width) / 2;
            }
            ctx.drawImage(image, dx, dy, size, size, xOffset, yOffset, imageSizeInTexture, imageSizeInTexture);
            images[id2] = {
              status: "ready",
              x: xOffset,
              y: yOffset,
              width: imageSizeInTexture,
              height: imageSizeInTexture
            };
            xOffset += imageSizeInTexture;
          });
          hasReceivedImages = true;
          textureImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
        };
        var rowImages = [];
        pendingImages.forEach(function(image) {
          var size = image.size;
          var imageSizeInTexture = Math.min(size, MAX_TEXTURE_SIZE);
          if (writePositionX + imageSizeInTexture > MAX_CANVAS_WIDTH) {
            if (rowImages.length > 0) {
              totalWidth = Math.max(writePositionX, totalWidth);
              totalHeight = Math.max(writePositionY + writeRowHeight, totalHeight);
              drawRow(rowImages);
              rowImages = [];
              writeRowHeight = 0;
            }
            writePositionX = 0;
            writePositionY = totalHeight;
            xOffset = 0;
            yOffset = totalHeight;
          }
          rowImages.push(image);
          writePositionX += imageSizeInTexture;
          writeRowHeight = Math.max(writeRowHeight, imageSizeInTexture);
        });
        totalWidth = Math.max(writePositionX, totalWidth);
        totalHeight = Math.max(writePositionY + writeRowHeight, totalHeight);
        drawRow(rowImages);
        rowImages = [];
        rebindTextureFns.forEach(function(fn) {
          return fn();
        });
      }
      var UNSIGNED_BYTE = WebGLRenderingContext.UNSIGNED_BYTE, FLOAT = WebGLRenderingContext.FLOAT;
      var UNIFORMS = ["u_sizeRatio", "u_pixelRatio", "u_matrix", "u_atlas"];
      return (
        /** @class */
        function(_super) {
          __extends(NodeImageProgram, _super);
          function NodeImageProgram(gl, renderer) {
            var _this = _super.call(this, gl, renderer) || this;
            rebindTextureFns.push(function() {
              if (_this && _this.rebindTexture)
                _this.rebindTexture();
              if (renderer && renderer.refresh)
                renderer.refresh();
            });
            textureImage = new ImageData(1, 1);
            _this.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, _this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
            return _this;
          }
          NodeImageProgram.prototype.getDefinition = function() {
            return {
              VERTICES: 1,
              ARRAY_ITEMS_PER_VERTEX: 8,
              VERTEX_SHADER_SOURCE: node_image_vert_glsl_1.default,
              FRAGMENT_SHADER_SOURCE: node_image_frag_glsl_1.default,
              UNIFORMS,
              ATTRIBUTES: [
                { name: "a_position", size: 2, type: FLOAT },
                { name: "a_size", size: 1, type: FLOAT },
                { name: "a_color", size: 4, type: UNSIGNED_BYTE, normalized: true },
                { name: "a_texture", size: 4, type: FLOAT }
              ]
            };
          };
          NodeImageProgram.prototype.rebindTexture = function() {
            var gl = this.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
            gl.generateMipmap(gl.TEXTURE_2D);
            if (this.latestRenderParams)
              this.render(this.latestRenderParams);
          };
          NodeImageProgram.prototype.processVisibleItem = function(i2, data) {
            var array = this.array;
            var imageSource = data.image;
            var imageState = imageSource && images[imageSource];
            if (typeof imageSource === "string" && !imageState)
              loadImage(imageSource);
            array[i2++] = data.x;
            array[i2++] = data.y;
            array[i2++] = data.size;
            array[i2++] = (0, utils_1.floatColor)(data.color);
            if (imageState && imageState.status === "ready") {
              var width = textureImage.width, height = textureImage.height;
              array[i2++] = imageState.x / width;
              array[i2++] = imageState.y / height;
              array[i2++] = imageState.width / width;
              array[i2++] = imageState.height / height;
            } else {
              array[i2++] = 0;
              array[i2++] = 0;
              array[i2++] = 0;
              array[i2++] = 0;
            }
          };
          NodeImageProgram.prototype.draw = function(params) {
            this.latestRenderParams = params;
            var gl = this.gl;
            var _a = this.uniformLocations, u_sizeRatio = _a.u_sizeRatio, u_pixelRatio = _a.u_pixelRatio, u_matrix = _a.u_matrix, u_atlas = _a.u_atlas;
            gl.uniform1f(u_sizeRatio, params.sizeRatio);
            gl.uniform1f(u_pixelRatio, params.pixelRatio);
            gl.uniformMatrix3fv(u_matrix, false, params.matrix);
            gl.uniform1i(u_atlas, 0);
            gl.drawArrays(gl.POINTS, 0, this.verticesCount);
          };
          return NodeImageProgram;
        }(node_1.NodeProgram)
      );
    }
    exports.default = getNodeImageProgram;
  }
});

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = window.reactjsxruntime;
  }
});

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r3, l3) {
  var t3 = null == r3 ? null : "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
  if (null != t3) {
    var e3, n3, i2, u2, a4 = [], f2 = true, o4 = false;
    try {
      if (i2 = (t3 = t3.call(r3)).next, 0 === l3) {
        if (Object(t3) !== t3)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e3 = i2.call(t3)).done) && (a4.push(e3.value), a4.length !== l3); f2 = true)
          ;
    } catch (r4) {
      o4 = true, n3 = r4;
    } finally {
      try {
        if (!f2 && null != t3["return"] && (u2 = t3["return"](), Object(u2) !== u2))
          return;
      } finally {
        if (o4)
          throw n3;
      }
    }
    return a4;
  }
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o4, minLen) {
  if (!o4)
    return;
  if (typeof o4 === "string")
    return _arrayLikeToArray(o4, minLen);
  var n3 = Object.prototype.toString.call(o4).slice(8, -1);
  if (n3 === "Object" && o4.constructor)
    n3 = o4.constructor.name;
  if (n3 === "Map" || n3 === "Set")
    return Array.from(o4);
  if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
    return _arrayLikeToArray(o4, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o4) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o5) {
    return typeof o5;
  } : function(o5) {
    return o5 && "function" == typeof Symbol && o5.constructor === Symbol && o5 !== Symbol.prototype ? "symbol" : typeof o5;
  }, _typeof(o4);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n3, max) {
  if (isOnePointZero(n3)) {
    n3 = "100%";
  }
  var isPercent = isPercentage(n3);
  n3 = max === 360 ? n3 : Math.min(max, Math.max(0, parseFloat(n3)));
  if (isPercent) {
    n3 = parseInt(String(n3 * max), 10) / 100;
  }
  if (Math.abs(n3 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n3 = (n3 < 0 ? n3 % max + max : n3 % max) / parseFloat(String(max));
  } else {
    n3 = n3 % max / parseFloat(String(max));
  }
  return n3;
}
function isOnePointZero(n3) {
  return typeof n3 === "string" && n3.indexOf(".") !== -1 && parseFloat(n3) === 1;
}
function isPercentage(n3) {
  return typeof n3 === "string" && n3.indexOf("%") !== -1;
}
function boundAlpha(a4) {
  a4 = parseFloat(a4);
  if (isNaN(a4) || a4 < 0 || a4 > 1) {
    a4 = 1;
  }
  return a4;
}
function convertToPercentage(n3) {
  if (n3 <= 1) {
    return "".concat(Number(n3) * 100, "%");
  }
  return n3;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r3, g2, b2) {
  return {
    r: bound01(r3, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function hue2rgb(p2, q2, t3) {
  if (t3 < 0) {
    t3 += 1;
  }
  if (t3 > 1) {
    t3 -= 1;
  }
  if (t3 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t3);
  }
  if (t3 < 1 / 2) {
    return q2;
  }
  if (t3 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t3) * 6;
  }
  return p2;
}
function hslToRgb(h2, s3, l3) {
  var r3;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s3 = bound01(s3, 100);
  l3 = bound01(l3, 100);
  if (s3 === 0) {
    g2 = l3;
    b2 = l3;
    r3 = l3;
  } else {
    var q2 = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3;
    var p2 = 2 * l3 - q2;
    r3 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r3 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r3, g2, b2) {
  r3 = bound01(r3, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r3, g2, b2);
  var min = Math.min(r3, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s3 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r3:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r3) / d2 + 2;
        break;
      case b2:
        h2 = (r3 - g2) / d2 + 4;
        break;
      default:
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s3, v: v2 };
}
function hsvToRgb(h2, s3, v2) {
  h2 = bound01(h2, 360) * 6;
  s3 = bound01(s3, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p2 = v2 * (1 - s3);
  var q2 = v2 * (1 - f2 * s3);
  var t3 = v2 * (1 - (1 - f2) * s3);
  var mod = i2 % 6;
  var r3 = [v2, q2, p2, p2, t3, v2][mod];
  var g2 = [t3, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t3, v2, v2, q2][mod];
  return { r: r3 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r3, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r3).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a4 = 1;
  var s3 = null;
  var v2 = null;
  var l3 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s3 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s3, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s3 = convertToPercentage(color.s);
      l3 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s3, l3);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a4 = color.a;
    }
  }
  a4 = boundAlpha(a4);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a4
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r3 = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r3, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r3 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r3, g2, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i2, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i2, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i2;
  } else if (i2 === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i2;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i2 === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i2, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i2;
  } else {
    value = hsv.v - brightnessStep2 * i2;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i2, true),
      s: getSaturation(hsv, i2, true),
      v: getValue(hsv, i2, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e3, r3) {
  var t3 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var o4 = Object.getOwnPropertySymbols(e3);
    r3 && (o4 = o4.filter(function(r4) {
      return Object.getOwnPropertyDescriptor(e3, r4).enumerable;
    })), t3.push.apply(t3, o4);
  }
  return t3;
}
function _objectSpread2(e3) {
  for (var r3 = 1; r3 < arguments.length; r3++) {
    var t3 = null != arguments[r3] ? arguments[r3] : {};
    r3 % 2 ? ownKeys(Object(t3), true).forEach(function(r4) {
      _defineProperty(e3, r4, t3[r4]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t3)) : ownKeys(Object(t3)).forEach(function(r4) {
      Object.defineProperty(e3, r4, Object.getOwnPropertyDescriptor(t3, r4));
    });
  }
  return e3;
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n3) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n3);
  }
  var node = n3;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node) {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, function(match, g2) {
    return g2.toUpperCase();
  });
}
function warning2(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, import_react2.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
  var svgRef = React2.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
  var _React$useContext = React3.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PartitionOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/PartitionOutlined.js
var PartitionOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3zm53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150zm364.2 75.1h150v150.1h-150V662.1z" } }] }, "name": "partition", "theme": "outlined" };
var PartitionOutlined_default = PartitionOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.6_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/PartitionOutlined.js
var PartitionOutlined2 = function PartitionOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: PartitionOutlined_default
  }));
};
if (true) {
  PartitionOutlined2.displayName = "PartitionOutlined";
}
var PartitionOutlined_default2 = /* @__PURE__ */ React4.forwardRef(PartitionOutlined2);

// src/GraphView.tsx
var import_react7 = __toESM(require_react(), 1);
var import_antd2 = __toESM(require_antd(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_react_query = __toESM(require_react_query(), 1);

// src/utils/did.ts
function shortId(id) {
  if (!id)
    return "";
  function shortDotSeparatedString(str) {
    const parts2 = str.split(".");
    if (parts2.length === 1) {
      return str;
    }
    return parts2.map((part) => {
      if (part.length > 10) {
        return part.substring(0, 1) + "." + part.substring(part.length - 1);
      } else {
        return part;
      }
    }).join(".");
  }
  const parts = id.split(":");
  return parts.map((part) => {
    if (part.length > 41) {
      const str = shortDotSeparatedString(part);
      if (part !== str)
        return str;
      return str.substring(0, 7) + "..." + str.substring(str.length - 5);
    } else {
      return part;
    }
  }).join(":");
}
function getIssuerDID(credential) {
  if (typeof credential.issuer === "string") {
    return credential.issuer;
  } else {
    return credential.issuer.id;
  }
}

// src/SigmaCircularView.tsx
var import_react6 = __toESM(require_react(), 1);
var import_graphology2 = __toESM(require_graphology_umd_min(), 1);

// node_modules/.pnpm/@react-sigma+layout-circular@3.4.2_graphology-layout@0.6.1_graphology@0.25.4_lodash@4.17.21_r_easmijcznccz3ou744bvtd2oay/node_modules/@react-sigma/layout-circular/lib/react-sigma_layout-circular.esm.min.js
var import_circular = __toESM(require_circular());

// node_modules/.pnpm/@react-sigma+layout-core@3.4.2_graphology@0.25.4_lodash@4.17.21_react@18.2.0_sigma@3.0.0-alpha3/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js
var import_lodash2 = __toESM(require_lodash());
var e2 = __toESM(require_react());
var import_react4 = __toESM(require_react());

// node_modules/.pnpm/@react-sigma+core@3.4.2_graphology@0.25.4_lodash@4.17.21_react@18.2.0_sigma@3.0.0-alpha3/node_modules/@react-sigma/core/lib/react-sigma_core.esm.min.js
var e = __toESM(require_react());
var import_react3 = __toESM(require_react());
var import_lodash = __toESM(require_lodash());
var import_graphology = __toESM(require_graphology_umd_min());
var import_sigma = __toESM(require_sigma2());
var h = (0, import_react3.createContext)(null);
var v = h.Provider;
function f() {
  const e3 = (0, import_react3.useContext)(h);
  if (null == e3)
    throw new Error("No context provided: useSigmaContext() can only be used in a descendant of <SigmaContainer>");
  return e3;
}
function p() {
  return f().sigma;
}
function b() {
  const { sigma: e3, container: t3 } = f(), [n3, a4] = (0, import_react3.useState)({});
  return (0, import_react3.useEffect)(() => {
    if (!e3 || !n3)
      return;
    const a5 = {};
    return Object.keys(n3).forEach((t4) => {
      a5[t4] = n3[t4], e3.setSetting(t4, n3[t4]);
    }), () => {
      e3 && t3 && t3.offsetWidth > 0 && t3.offsetHeight > 0 && Object.keys(a5).forEach((t4) => {
        e3.setSetting(t4, a5[t4]);
      });
    };
  }, [e3, n3, t3]), a4;
}
var E = ["clickNode", "rightClickNode", "downNode", "enterNode", "leaveNode", "doubleClickNode", "wheelNode", "clickEdge", "rightClickEdge", "downEdge", "enterEdge", "leaveEdge", "doubleClickEdge", "wheelEdge", "clickStage", "rightClickStage", "downStage", "doubleClickStage", "wheelStage", "beforeRender", "afterRender", "kill"];
var w = ["click", "rightClick", "mouseup", "mousedown", "mousemove", "mousemovebody", "doubleClick", "wheel"];
var C = ["touchup", "touchdown", "touchmove"];
var O = ["updated"];
function _() {
  const e3 = p(), t3 = b(), [n3, a4] = (0, import_react3.useState)({});
  return (0, import_react3.useEffect)(() => {
    if (!e3 || !n3)
      return;
    const a5 = n3, r3 = Object.keys(a5), s3 = {}, c2 = {}, l3 = e3.getSettings();
    return r3.some((e4) => ["clickEdge", "rightClickEdge", "doubleClickEdge", "downEdge"].includes(e4)) && false === l3.enableEdgeClickEvents && (s3.enableEdgeClickEvents = true, c2.enableEdgeClickEvents = false), r3.some((e4) => ["enterEdge", "leaveEdge"].includes(e4)) && false === l3.enableEdgeHoverEvents && (s3.enableEdgeHoverEvents = true, c2.enableEdgeHoverEvents = false), r3.some((e4) => ["wheelEdge"].includes(e4)) && false === l3.enableEdgeWheelEvents && (s3.enableEdgeWheelEvents = true, c2.enableEdgeWheelEvents = false), Object.keys(s3).length > 0 && t3(s3), r3.forEach((t4) => {
      const n4 = a5[t4];
      E.find((e4) => e4 === t4) && e3.on(t4, n4), w.find((e4) => e4 === t4) && e3.getMouseCaptor().on(t4, n4), C.find((e4) => e4 === t4) && e3.getTouchCaptor().on(t4, n4), O.find((e4) => e4 === t4) && e3.getCamera().on(t4, n4);
    }), () => {
      Object.keys(c2).length > 0 && t3(c2), e3 && r3.forEach((t4) => {
        const n4 = a5[t4];
        E.find((e4) => e4 === t4) && e3.off(t4, n4), w.find((e4) => e4 === t4) && e3.getMouseCaptor().off(t4, n4), C.find((e4) => e4 === t4) && e3.getTouchCaptor().off(t4, n4), O.find((e4) => e4 === t4) && e3.getCamera().off(t4, n4);
      });
    };
  }, [e3, n3, t3]), a4;
}
function y() {
  const e3 = p();
  return (0, import_react3.useCallback)((t3, n3 = true) => {
    e3 && t3 && (n3 && e3.getGraph().order > 0 && e3.getGraph().clear(), e3.getGraph().import(t3), e3.refresh());
  }, [e3]);
}
function j(e3) {
  const t3 = p(), n3 = (0, import_react3.useRef)();
  (0, import_lodash.isEqual)(n3.current, e3) || (n3.current = e3);
  const a4 = (0, import_react3.useCallback)((e4) => {
    t3.getCamera().animatedZoom(Object.assign(Object.assign({}, n3.current), e4));
  }, [t3, n3]), r3 = (0, import_react3.useCallback)((e4) => {
    t3.getCamera().animatedUnzoom(Object.assign(Object.assign({}, n3.current), e4));
  }, [t3, n3]), s3 = (0, import_react3.useCallback)((e4) => {
    t3.getCamera().animatedReset(Object.assign(Object.assign({}, n3.current), e4));
  }, [t3, n3]), o4 = (0, import_react3.useCallback)((e4, a5) => {
    t3.getCamera().animate(e4, Object.assign(Object.assign({}, n3.current), a5));
  }, [t3, n3]), i2 = (0, import_react3.useCallback)((e4, a5) => {
    const r4 = t3.getNodeDisplayData(e4);
    r4 ? t3.getCamera().animate(r4, Object.assign(Object.assign({}, n3.current), a5)) : console.log(`Node ${e4} not found`);
  }, [t3, n3]);
  return { zoomIn: a4, zoomOut: r3, reset: s3, goto: o4, gotoNode: i2 };
}
function x(e3) {
  const t3 = f(), [n3, a4] = (0, import_react3.useState)(false), [l3, o4] = (0, import_react3.useState)(e3 || t3.container), i2 = () => a4((e4) => !e4);
  return (0, import_react3.useEffect)(() => (document.addEventListener("fullscreenchange", i2), () => document.removeEventListener("fullscreenchange", i2)), [i2]), (0, import_react3.useEffect)(() => {
    o4(e3 || t3.container);
  }, [e3, t3.container]), { toggle: (0, import_react3.useCallback)(() => {
    var e4;
    e4 = l3, document.fullscreenElement !== e4 ? e4.requestFullscreen() : document.exitFullscreen && document.exitFullscreen();
  }, [l3]), isFullScreen: n3 };
}
var k = (0, import_react3.forwardRef)(({ graph: e3, id: n3, className: a4, style: c2, settings: o4, children: h2 }, f2) => {
  const p2 = (0, import_react3.useRef)(null), b2 = (0, import_react3.useRef)(null), E2 = { className: `react-sigma ${a4 || ""}`, id: n3, style: c2 }, [w2, C2] = (0, import_react3.useState)(null), O2 = (0, import_react3.useRef)({});
  (0, import_lodash.isEqual)(O2.current, o4) || (O2.current = o4 || {}), (0, import_react3.useEffect)(() => {
    let t3 = null;
    if (null !== b2.current) {
      const n4 = e3 ? "function" == typeof e3 ? new e3() : e3 : new import_graphology.default();
      t3 = new import_sigma.Sigma(n4, b2.current, Object.assign({ allowInvalidContainer: true }, O2.current)), w2 && t3.getCamera().setState(w2.getCamera().getState());
    }
    return C2(t3), () => {
      t3 && t3.kill(), C2(null);
    };
  }, [b2, e3, O2]), (0, import_react3.useImperativeHandle)(f2, () => w2, [w2]);
  const _2 = (0, import_react3.useMemo)(() => w2 && p2.current ? { sigma: w2, container: p2.current } : null, [w2, p2.current]), y2 = null !== _2 ? import_react3.default.createElement(v, { value: _2 }, h2) : null;
  return import_react3.default.createElement("div", Object.assign({}, E2, { ref: p2 }), import_react3.default.createElement("div", { className: "sigma-container", ref: b2 }), y2);
});
var S = ({ id: e3, className: n3, style: a4, children: r3, position: s3 = "bottom-left" }) => {
  const c2 = { className: `react-sigma-controls ${n3 || ""} ${s3}`, id: e3, style: a4 };
  return import_react3.default.createElement("div", Object.assign({}, c2), r3);
};
var N;
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var a4 in n3)
        Object.prototype.hasOwnProperty.call(n3, a4) && (e3[a4] = n3[a4]);
    }
    return e3;
  }, z.apply(this, arguments);
}
var H;
var M = function(t3) {
  return e.createElement("svg", z({ "aria-hidden": "true", "data-prefix": "fas", "data-icon": "plus", className: "plus-solid_svg__svg-inline--fa plus-solid_svg__fa-plus plus-solid_svg__fa-w-14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t3), N || (N = e.createElement("path", { fill: "currentColor", d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" })));
};
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var a4 in n3)
        Object.prototype.hasOwnProperty.call(n3, a4) && (e3[a4] = n3[a4]);
    }
    return e3;
  }, $.apply(this, arguments);
}
var F;
var V = function(t3) {
  return e.createElement("svg", $({ "aria-hidden": "true", "data-prefix": "fas", "data-icon": "minus", className: "minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t3), H || (H = e.createElement("path", { fill: "currentColor", d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" })));
};
function G() {
  return G = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var a4 in n3)
        Object.prototype.hasOwnProperty.call(n3, a4) && (e3[a4] = n3[a4]);
    }
    return e3;
  }, G.apply(this, arguments);
}
var P = function(t3) {
  return e.createElement("svg", G({ "aria-hidden": "true", "data-prefix": "far", "data-icon": "dot-circle", className: "dot-circle-regular_svg__svg-inline--fa dot-circle-regular_svg__fa-dot-circle dot-circle-regular_svg__fa-w-16", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, t3), F || (F = e.createElement("path", { fill: "currentColor", d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" })));
};
var I = ({ className: e3, style: n3, animationDuration: a4 = 200, children: r3, labels: s3 = {} }) => {
  const { zoomIn: c2, zoomOut: l3, reset: o4 } = j({ duration: a4, factor: 1.5 }), i2 = { style: n3, className: `react-sigma-control ${e3 || ""}` };
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement("div", Object.assign({}, i2), import_react3.default.createElement("button", { onClick: () => c2(), title: s3.zoomIn || "Zoom In" }, r3 ? r3[0] : import_react3.default.createElement(M, { style: { width: "1em" } }))), import_react3.default.createElement("div", Object.assign({}, i2), import_react3.default.createElement("button", { onClick: () => l3(), title: s3.zoomOut || "Zoom Out" }, r3 ? r3[1] : import_react3.default.createElement(V, { style: { width: "1em" } }))), import_react3.default.createElement("div", Object.assign({}, i2), import_react3.default.createElement("button", { onClick: () => o4(), title: s3.reset || "See whole graph" }, r3 ? r3[2] : import_react3.default.createElement(P, { style: { width: "1em" } }))));
};
var R;
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var a4 in n3)
        Object.prototype.hasOwnProperty.call(n3, a4) && (e3[a4] = n3[a4]);
    }
    return e3;
  }, B.apply(this, arguments);
}
var L;
var W = function(t3) {
  return e.createElement("svg", B({ "aria-hidden": "true", "data-prefix": "fas", "data-icon": "expand", className: "expand-solid_svg__svg-inline--fa expand-solid_svg__fa-expand expand-solid_svg__fa-w-14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t3), R || (R = e.createElement("path", { fill: "currentColor", d: "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" })));
};
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var n3 = arguments[t3];
      for (var a4 in n3)
        Object.prototype.hasOwnProperty.call(n3, a4) && (e3[a4] = n3[a4]);
    }
    return e3;
  }, Z.apply(this, arguments);
}
var D = function(t3) {
  return e.createElement("svg", Z({ "aria-hidden": "true", "data-prefix": "fas", "data-icon": "compress", className: "compress-solid_svg__svg-inline--fa compress-solid_svg__fa-compress compress-solid_svg__fa-w-14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, t3), L || (L = e.createElement("path", { fill: "currentColor", d: "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" })));
};
var q = ({ id: e3, className: n3, style: a4, container: r3, children: s3, labels: c2 = {} }) => {
  const { isFullScreen: l3, toggle: o4 } = x(null == r3 ? void 0 : r3.current), i2 = { className: `react-sigma-control ${n3 || ""}`, id: e3, style: a4 };
  return document.fullscreenEnabled ? import_react3.default.createElement("div", Object.assign({}, i2), import_react3.default.createElement("button", { onClick: o4, title: l3 ? c2.exit || "Exit fullscreen" : c2.enter || "Enter fullscreen" }, s3 && !l3 && s3[0], s3 && l3 && s3[1], !s3 && !l3 && import_react3.default.createElement(W, { style: { width: "1em" } }), !s3 && l3 && import_react3.default.createElement(D, { style: { width: "1em" } }))) : null;
};
var A = ({ id: e3, className: n3, style: a4, labels: c2 = {} }) => {
  const l3 = p(), o4 = _(), { gotoNode: i2 } = j(), [d2, u2] = (0, import_react3.useState)(""), [g2, m2] = (0, import_react3.useState)([]), [h2, v2] = (0, import_react3.useState)(null), [f2, b2] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    b2(`search-${Math.random().toString(36).slice(2)}`);
  }, []), (0, import_react3.useEffect)(() => {
    const e4 = [];
    !h2 && d2.length > 1 && l3.getGraph().forEachNode((t3, n4) => {
      n4.label && n4.label.toLowerCase().includes(d2.toLowerCase()) && e4.push({ id: t3, label: n4.label });
    }), m2(e4);
  }, [d2]), (0, import_react3.useEffect)(() => {
    o4({ clickStage: () => {
      v2(null), u2("");
    } });
  }, [o4]), (0, import_react3.useEffect)(() => {
    if (h2)
      return l3.getGraph().setNodeAttribute(h2, "highlighted", true), i2(h2), () => {
        l3.getGraph().setNodeAttribute(h2, "highlighted", false);
      };
  }, [h2]);
  const E2 = { className: `react-sigma-search ${n3 || ""}`, id: e3, style: a4 };
  return import_react3.default.createElement("div", Object.assign({}, E2), import_react3.default.createElement("label", { htmlFor: f2, style: { display: "none" } }, c2.text || "Search a node"), import_react3.default.createElement("input", { id: f2, type: "text", placeholder: c2.placeholder || "Search...", list: `${f2}-datalist`, value: d2, onChange: (e4) => {
    const t3 = e4.target.value, n4 = g2.find((e5) => e5.label === t3);
    n4 ? (u2(n4.label), m2([]), v2(n4.id)) : (v2(null), u2(t3));
  } }), import_react3.default.createElement("datalist", { id: `${f2}-datalist` }, g2.map((e4) => import_react3.default.createElement("option", { key: e4.id, value: e4.label }, e4.label))));
};

// node_modules/.pnpm/@react-sigma+layout-core@3.4.2_graphology@0.25.4_lodash@4.17.21_react@18.2.0_sigma@3.0.0-alpha3/node_modules/@react-sigma/layout-core/lib/react-sigma_layout-core.esm.min.js
function l2(e3, r3) {
  return (s3 = r3) => {
    const o4 = p(), l3 = (0, import_react4.useRef)(r3);
    return (0, import_lodash2.isEqual)(l3.current, s3) || (l3.current = s3), { positions: (0, import_react4.useCallback)(() => l3.current ? e3(o4.getGraph(), l3.current) : {}, [o4, l3]), assign: (0, import_react4.useCallback)(() => {
      l3.current && e3.assign(o4.getGraph(), l3.current);
    }, [o4, l3]) };
  };
}

// node_modules/.pnpm/@react-sigma+layout-circular@3.4.2_graphology-layout@0.6.1_graphology@0.25.4_lodash@4.17.21_r_easmijcznccz3ou744bvtd2oay/node_modules/@react-sigma/layout-circular/lib/react-sigma_layout-circular.esm.min.js
var a3 = l2(import_circular.default, {});

// src/SigmaCircularView.tsx
var import_graphology3 = __toESM(require_graphology_umd_min(), 1);
var import_node = __toESM(require_node_image(), 1);
var import_antd = __toESM(require_antd(), 1);

// src/utils/use-resize.ts
var import_react5 = __toESM(require_react(), 1);
var getScreenSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});
var useResize = () => {
  const [size, setSize] = import_react5.default.useState(getScreenSize());
  import_react5.default.useEffect(() => {
    const onResize = () => setSize(getScreenSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
};

// src/SigmaCircularView.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var LoadGraph = (props) => {
  const loadGraph = y();
  const { assign } = a3();
  (0, import_react6.useEffect)(() => {
    const graph = new import_graphology2.default({ multi: true });
    try {
      for (const node of props.nodes || []) {
        graph.addNode(node.id, { x: 0, y: 0, size: 15, label: node.label, color: node.color, image: node.picture });
      }
      for (const edge of props.edges || []) {
        graph.addEdge(edge.source, edge.target);
      }
    } catch (e3) {
      console.log(e3);
    }
    loadGraph(graph);
    assign();
  }, [loadGraph, props.nodes, props.edges, assign]);
  return null;
};
var SigmaCircularView = (props) => {
  const size = useResize();
  const { token } = import_antd.theme.useToken();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    k,
    {
      style: { height: size.height - 200, backgroundColor: token.colorBgLayout },
      graph: import_graphology3.MultiDirectedGraph,
      settings: {
        nodeProgramClasses: {
          //@ts-ignore
          image: import_node.default.default()
        },
        defaultNodeType: "image",
        defaultEdgeType: "arrow",
        labelDensity: 0.07,
        labelGridCellSize: 60,
        labelRenderedSizeThreshold: 15,
        labelColor: {
          color: token.colorTextBase
        },
        defaultEdgeColor: token.colorBorder,
        nodeHoverProgramClasses: {},
        zIndex: true
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadGraph, { nodes: props.nodes, edges: props.edges }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(S, { position: "bottom-right", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(q, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { position: "top-right", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(A, { style: { width: "200px" } }) })
      ]
    }
  );
};

// src/GraphView.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var GraphView = () => {
  const { token } = import_antd2.theme.useToken();
  const { agent } = (0, import_veramo_react.useVeramo)();
  const [uniqueIdentifiers, setUniqueIdentifiers] = (0, import_react7.useState)([]);
  const [profiles, setProfiles] = (0, import_react7.useState)([]);
  const [graphNodes, setGraphNodes] = (0, import_react7.useState)([]);
  const [graphEdges, setGraphEdges] = (0, import_react7.useState)([]);
  const [isLoadingProfiles, setIsLoadingProfiles] = (0, import_react7.useState)(true);
  const { data: credentials, isLoading: isLoadingCredentials } = (0, import_react_query.useQuery)(
    ["credentials", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  const { data: contacts, isLoading: isLoadingContacts } = (0, import_react_query.useQuery)(
    ["contacts", { agentId: agent?.context.id }],
    () => agent?.dataStoreORMGetIdentifiers()
  );
  const { data: identifiers, isLoading: isLoadingIdentifiers } = (0, import_react_query.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  (0, import_react7.useEffect)(() => {
    setUniqueIdentifiers([.../* @__PURE__ */ new Set([
      ...contacts?.map((c2) => c2.did || "") || [],
      ...identifiers?.map((i2) => i2.did) || []
    ])]);
  }, [contacts, identifiers]);
  (0, import_react7.useEffect)(() => {
    async function fetchProfiles() {
      setIsLoadingProfiles(true);
      const profiles2 = await Promise.all(
        uniqueIdentifiers.map((did) => {
          return agent?.getIdentifierProfile({ did });
        })
      );
      setProfiles(profiles2);
      setIsLoadingProfiles(false);
    }
    fetchProfiles();
  }, [uniqueIdentifiers]);
  const isLoading = isLoadingCredentials || isLoadingContacts || isLoadingIdentifiers || isLoadingProfiles;
  (0, import_react7.useEffect)(() => {
    const nodes = profiles.map((profile) => {
      return {
        id: profile.did,
        label: profile.name || shortId(profile.did),
        color: token.colorPrimary,
        picture: profile.picture || void 0
      };
    });
    setGraphNodes(nodes);
    const edges = credentials?.map((credential) => {
      return {
        id: credential.verifiableCredential.id,
        source: getIssuerDID(credential.verifiableCredential),
        target: credential.verifiableCredential.credentialSubject.id || "",
        label: "relation",
        color: "#ccc"
      };
    }) || [];
    setGraphEdges(edges);
  }, [credentials, profiles, setGraphNodes, setGraphEdges]);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Spin, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Tabs, { defaultActiveKey: "1", items: [
    {
      key: "1",
      label: "Sigma Circular",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SigmaCircularView, { nodes: graphNodes, edges: graphEdges })
    }
  ] });
};

// src/index.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  init: () => {
    return {
      name: "Graph view",
      description: "Explore contacts and credentials in a graph view",
      routes: [
        {
          path: "/graph",
          element: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(GraphView, {})
        }
      ],
      menuItems: [
        {
          name: "Graph view",
          path: "/graph",
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PartitionOutlined_default2, {})
        }
      ],
      hasCss: true
    };
  }
};
var src_default = Plugin;
export {
  src_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
