import F, { forwardRef as le, useRef as z, useEffect as mr, useImperativeHandle as oe, useState as Y, Fragment as We } from "react";
var je = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function br() {
  if (Ye)
    return ee;
  Ye = 1;
  var s = F, n = Symbol.for("react.element"), l = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, R = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(i, o, u) {
    var d, j = {}, N = null, O = null;
    u !== void 0 && (N = "" + u), o.key !== void 0 && (N = "" + o.key), o.ref !== void 0 && (O = o.ref);
    for (d in o)
      p.call(o, d) && !y.hasOwnProperty(d) && (j[d] = o[d]);
    if (i && i.defaultProps)
      for (d in o = i.defaultProps, o)
        j[d] === void 0 && (j[d] = o[d]);
    return { $$typeof: n, type: i, key: N, ref: O, props: j, _owner: R.current };
  }
  return ee.Fragment = l, ee.jsx = g, ee.jsxs = g, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function gr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var s = F, n = Symbol.for("react.element"), l = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), i = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), A = Symbol.iterator, K = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[K];
      return typeof r == "function" ? r : null;
    }
    var I = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          a[c - 1] = arguments[c];
        b("error", e, a);
      }
    }
    function b(e, r, a) {
      {
        var c = I.ReactDebugCurrentFrame, x = c.getStackAddendum();
        x !== "" && (r += "%s", a = a.concat([x]));
        var E = a.map(function(m) {
          return String(m);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var S = !1, V = !1, X = !1, ce = !1, ue = !1, Z;
    Z = Symbol.for("react.module.reference");
    function fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === y || ue || e === R || e === u || e === d || ce || e === O || S || V || X || typeof e == "object" && e !== null && (e.$$typeof === N || e.$$typeof === j || e.$$typeof === g || e.$$typeof === i || e.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function de(e, r, a) {
      var c = e.displayName;
      if (c)
        return c;
      var x = r.displayName || r.name || "";
      return x !== "" ? a + "(" + x + ")" : a;
    }
    function v(e) {
      return e.displayName || "Context";
    }
    function f(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case l:
          return "Portal";
        case y:
          return "Profiler";
        case R:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return v(r) + ".Consumer";
          case g:
            var a = e;
            return v(a._context) + ".Provider";
          case o:
            return de(e, e.render, "ForwardRef");
          case j:
            var c = e.displayName || null;
            return c !== null ? c : f(e.type) || "Memo";
          case N: {
            var x = e, E = x._payload, m = x._init;
            try {
              return f(m(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, P = 0, q, $, H, M, W, Re, _e;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function qe() {
      {
        if (P === 0) {
          q = console.log, $ = console.info, H = console.warn, M = console.error, W = console.group, Re = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: we,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function He() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: q
            }),
            info: T({}, e, {
              value: $
            }),
            warn: T({}, e, {
              value: H
            }),
            error: T({}, e, {
              value: M
            }),
            group: T({}, e, {
              value: W
            }),
            groupCollapsed: T({}, e, {
              value: Re
            }),
            groupEnd: T({}, e, {
              value: _e
            })
          });
        }
        P < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = I.ReactCurrentDispatcher, pe;
    function te(e, r, a) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (x) {
            var c = x.stack.trim().match(/\n( *(at )?)/);
            pe = c && c[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var he = !1, ne;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Je();
    }
    function Ce(e, r) {
      if (!e || he)
        return "";
      {
        var a = ne.get(e);
        if (a !== void 0)
          return a;
      }
      var c;
      he = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = ve.current, ve.current = null, qe();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (U) {
              c = U;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (U) {
              c = U;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            c = U;
          }
          e();
        }
      } catch (U) {
        if (U && c && typeof U.stack == "string") {
          for (var h = U.stack.split(`
`), k = c.stack.split(`
`), w = h.length - 1, C = k.length - 1; w >= 1 && C >= 0 && h[w] !== k[C]; )
            C--;
          for (; w >= 1 && C >= 0; w--, C--)
            if (h[w] !== k[C]) {
              if (w !== 1 || C !== 1)
                do
                  if (w--, C--, C < 0 || h[w] !== k[C]) {
                    var D = `
` + h[w].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, D), D;
                  }
                while (w >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        he = !1, ve.current = E, He(), Error.prepareStackTrace = x;
      }
      var G = e ? e.displayName || e.name : "", Me = G ? te(G) : "";
      return typeof e == "function" && ne.set(e, Me), Me;
    }
    function Ge(e, r, a) {
      return Ce(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, ze(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case u:
          return te("Suspense");
        case d:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            return Ge(e.render);
          case j:
            return ae(e.type, r, a);
          case N: {
            var c = e, x = c._payload, E = c._init;
            try {
              return ae(E(x), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Se = {}, Te = I.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(a);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ke(e, r, a, c, x) {
      {
        var E = Function.call.bind(se);
        for (var m in e)
          if (E(e, m)) {
            var h = void 0;
            try {
              if (typeof e[m] != "function") {
                var k = Error((c || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              h = e[m](r, m, c, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              h = w;
            }
            h && !(h instanceof Error) && (ie(x), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", a, m, typeof h), ie(null)), h instanceof Error && !(h.message in Se) && (Se[h.message] = !0, ie(x), _("Failed %s type: %s", a, h.message), ie(null));
          }
      }
    }
    var Xe = Array.isArray;
    function me(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Qe(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function ke(e) {
      if (Qe(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Oe(e);
    }
    var Q = I.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, De, be;
    be = {};
    function rr(e) {
      if (se.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (se.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && Q.current && r && Q.current.stateNode !== r) {
        var a = f(Q.current.type);
        be[a] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', f(Q.current.type), e.ref), be[a] = !0);
      }
    }
    function ar(e, r) {
      {
        var a = function() {
          Pe || (Pe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var a = function() {
          De || (De = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, a, c, x, E, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: m,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function lr(e, r, a, c, x) {
      {
        var E, m = {}, h = null, k = null;
        a !== void 0 && (ke(a), h = "" + a), tr(r) && (ke(r.key), h = "" + r.key), rr(r) && (k = r.ref, nr(r, x));
        for (E in r)
          se.call(r, E) && !er.hasOwnProperty(E) && (m[E] = r[E]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (E in w)
            m[E] === void 0 && (m[E] = w[E]);
        }
        if (h || k) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && ar(m, C), k && sr(m, C);
        }
        return ir(e, h, k, x, c, Q.current, m);
      }
    }
    var ge = I.ReactCurrentOwner, Ne = I.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(a);
      } else
        Ne.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function ye(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ae() {
      {
        if (ge.current) {
          var e = f(ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function cr(e) {
      {
        var r = Ae();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = cr(r);
        if (Fe[a])
          return;
        Fe[a] = !0;
        var c = "";
        e && e._owner && e._owner !== ge.current && (c = " It was passed a child from " + f(e._owner.type) + "."), J(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, c), J(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var a = 0; a < e.length; a++) {
            var c = e[a];
            ye(c) && Le(c, r);
          }
        else if (ye(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = L(e);
          if (typeof x == "function" && x !== e.entries)
            for (var E = x.call(e), m; !(m = E.next()).done; )
              ye(m.value) && Le(m.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          a = r.propTypes;
        else
          return;
        if (a) {
          var c = f(r);
          Ke(a, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !xe) {
          xe = !0;
          var x = f(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var c = r[a];
          if (c !== "children" && c !== "key") {
            J(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    function $e(e, r, a, c, x, E) {
      {
        var m = fe(e);
        if (!m) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = or(x);
          k ? h += k : h += Ae();
          var w;
          e === null ? w = "null" : me(e) ? w = "array" : e !== void 0 && e.$$typeof === n ? (w = "<" + (f(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, h);
        }
        var C = lr(e, r, a, x, E);
        if (C == null)
          return C;
        if (m) {
          var D = r.children;
          if (D !== void 0)
            if (c)
              if (me(D)) {
                for (var G = 0; G < D.length; G++)
                  Ie(D[G], e);
                Object.freeze && Object.freeze(D);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(D, e);
        }
        return e === p ? fr(C) : ur(C), C;
      }
    }
    function dr(e, r, a) {
      return $e(e, r, a, !0);
    }
    function vr(e, r, a) {
      return $e(e, r, a, !1);
    }
    var pr = vr, hr = dr;
    re.Fragment = p, re.jsx = pr, re.jsxs = hr;
  }()), re;
}
process.env.NODE_ENV === "production" ? je.exports = br() : je.exports = gr();
var t = je.exports;
const xr = () => /* @__PURE__ */ t.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    role: "presentation",
    "aria-hidden": "true",
    alt: "",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ t.jsx(
      "path",
      {
        d: "M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z",
        fill: "currentColor"
      }
    )
  }
);
let B = null;
const Ee = (s) => {
  s.target.closest(".sl-popup-00") === null && B && B.close();
}, yr = le((s, n) => {
  const l = z(null);
  mr(() => (n.current._isOpen = !1, () => {
    B && (document.removeEventListener("click", Ee), B = null);
  }), [n]);
  const p = (o) => {
    n.current._isOpen = o, o ? (document.addEventListener("click", Ee), B = n.current) : (document.removeEventListener("click", Ee), B = null), o ? l.current.classList.add("open") : l.current.classList.remove("open"), s.stateChanged && s.stateChanged(o);
  }, R = s.className ? `sl-popup-00 ${s.className}` : "sl-popup-00", y = (o) => {
    o && o.stopPropagation(), B && n.current !== B && B.close(), n.current._isOpen ? g() : p(!0);
  }, g = () => {
    var o;
    (o = n.current) != null && o._isOpen && p(!1);
  }, i = () => n.current._isOpen;
  return oe(n, () => ({
    toggle: y,
    isOpen: i,
    close: g
  })), /* @__PURE__ */ t.jsx("div", { ref: l, className: "sl-popup-00-wrapper", children: /* @__PURE__ */ t.jsx("div", { className: "sl-popup-00-absolute-wrapper", children: /* @__PURE__ */ t.jsx("div", { ref: n, className: R, children: s.children }) }) });
}), Be = ({
  options: s,
  selected: n,
  onSelect: l,
  name: p,
  id: R,
  className: y,
  height: g = "26px"
}) => {
  const [i, o] = Y(n || "0"), u = z(null), d = z(null), [j, N] = Y(!1);
  F.useEffect(() => {
    if (j)
      return;
    const b = u.current.firstChild, S = u.current.lastChild.firstChild.firstChild;
    if (S.offsetWidth !== 0) {
      const V = S.offsetWidth + 15;
      S.style.width = V + 6 + "px", b.style.width = V + "px", N(!0);
    }
  }), F.useEffect(() => {
    u.current.setSelected = o, p && (u.current.setAttribute("data-name", p), L(n || "0")), R && u.current.setAttribute("id", R);
  }, [p, R]);
  let O = [], A = [];
  s.length !== 0 && typeof s[0] == "object" ? (O = s.map((b) => b[0]), A = s.map((b) => b[2])) : O = s;
  const K = y ? `sl-select-00 ${y}` : "sl-select-00", L = (b) => {
    s.length !== 0 && (typeof s[0] == "object" ? (u.current.setAttribute("data-value", s[b][1]), l && l(s[b][1], b)) : (u.current.setAttribute("data-value", s[b]), l && l(s[b], b)));
  }, I = (b) => {
    const S = b.target.dataset.value;
    o(S), d.current.toggle(b), L(S);
  }, _ = (b, S) => A[S] ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    A[S](),
    "  ",
    b
  ] }) : b;
  return /* @__PURE__ */ t.jsxs("div", { ref: u, className: K, id: R, children: [
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        style: g && { height: g },
        onClick: (b) => d.current.toggle(b),
        tabIndex: 0,
        children: [
          /* @__PURE__ */ t.jsx("span", { children: _(O[i], Number(i)) }),
          /* @__PURE__ */ t.jsx("span", { children: /* @__PURE__ */ t.jsx(xr, {}) })
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      yr,
      {
        stateChanged: (b) => {
          b ? u.current.classList.add("open") : u.current.classList.remove("open");
        },
        ref: d,
        children: O.map((b, S) => /* @__PURE__ */ t.jsx(
          "div",
          {
            style: g && { height: g },
            "data-value": S,
            onClick: I,
            children: _(b, S)
          },
          S
        ))
      }
    )
  ] });
}, Er = ({ entries: s, updateNbPages: n }) => /* @__PURE__ */ t.jsxs("div", { className: "entries", children: [
  "Show",
  /* @__PURE__ */ t.jsx(
    Be,
    {
      options: s,
      onSelect: (l) => n(l)
    }
  ),
  "entries"
] }), jr = le(({ searchFilter: s }, n) => {
  oe(n, () => ({
    clear: p
  }));
  const l = z(null), p = () => {
    l.current.value = "";
  };
  return /* @__PURE__ */ t.jsxs("label", { children: [
    "Search:",
    /* @__PURE__ */ t.jsx("input", { ref: l, onChange: s, type: "search" })
  ] });
});
const Rr = ({ setPage: s, page: n, nbPages: l }) => {
  const p = (i) => {
    s(Number(i.target.innerHTML));
  }, R = () => {
    const i = [];
    if (l <= 6)
      for (let u = 1; u <= l; u++)
        i.push(u);
    else
      l === 7 ? (n <= 3 && i.push(1, 2, 3, 4, "e", 7), n === 4 && i.push(1, 2, 3, 4, 5, 6, 7), n > 4 && i.push(1, "e", 4, 5, 6, 7)) : l === 8 ? (n <= 3 && i.push(1, 2, 3, 4, "e", 8), n === 4 && i.push(1, 2, 3, 4, 5, "e", 8), n === 5 && i.push(1, "e", 4, 5, 6, 7, 8), n >= 6 && i.push(1, "e", 5, 6, 7, 8)) : n <= 3 ? i.push(1, 2, 3, 4, "e", l) : n === 4 ? i.push(1, 2, 3, 4, 5, "e", l) : n >= l - 2 ? i.push(
        1,
        "e",
        l - 3,
        l - 2,
        l - 1,
        l
      ) : n === l - 3 ? i.push(1, "e", n - 1, n, n + 1, n + 2, l) : i.push(1, "e", n - 1, n, n + 1, "e", l);
    const o = [];
    return i.map((u, d) => {
      u === n ? o.push(
        /* @__PURE__ */ t.jsx("a", { className: "selected", onClick: p, children: u }, d)
      ) : u != "e" ? o.push(
        /* @__PURE__ */ t.jsx("a", { onClick: p, children: u }, d)
      ) : o.push(
        /* @__PURE__ */ t.jsx("span", { className: "ellipse", children: "..." }, d)
      );
    }), o;
  }, y = () => {
    n !== l && s(n + 1);
  }, g = () => {
    n !== 1 && s(n - 1);
  };
  return l !== 0 && /* @__PURE__ */ t.jsxs("div", { className: "pages-menu", children: [
    n === 1 ? /* @__PURE__ */ t.jsx("a", { className: "disabled", onClick: g, children: "Previous" }) : /* @__PURE__ */ t.jsx("a", { onClick: g, children: "Previous" }),
    R(),
    n === l ? /* @__PURE__ */ t.jsx("a", { className: "disabled", onClick: y, children: "Next" }) : /* @__PURE__ */ t.jsx("a", { onClick: y, children: "Next" })
  ] });
}, _r = ({ setPage: s, page: n, N: l, itemsPerPage: p, Tot: R, searching: y }) => {
  const g = (
    // calcule le nombre de pages nécessaires pour afficher N entrées avec un nombre itemsPerPage d'entrées par page.
    Math.floor(l / p) + (l % p === 0 ? 0 : 1)
  );
  return /* @__PURE__ */ t.jsxs("div", { className: "entries-pages", children: [
    /* @__PURE__ */ t.jsxs("div", { children: [
      l !== 0 ? `Showing ${(n - 1) * p + 1} to
                ${Math.min(n * p, l)} of ${l} entries` : "no result",
      y && /* @__PURE__ */ t.jsxs("span", { children: [
        " (",
        R,
        " entries filtered)"
      ] })
    ] }),
    /* @__PURE__ */ t.jsx(Rr, { setPage: s, page: n, nbPages: g })
  ] });
};
const wr = ({
  formRef: s,
  onSubmit: n,
  embedded: l,
  labelSubmit: p = "Save",
  reset: R,
  labelReset: y = "Clear"
}) => {
  const g = () => {
    const o = s.current.getData();
    n && n(o);
  }, i = () => {
    s.current.clear();
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: l ? "sl-modal-footer" : "datatableform-submission",
      children: [
        R && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: i,
            className: "cfsb-clear",
            tabIndex: 0,
            children: y
          }
        ),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: g,
            className: "cfsb-save",
            tabIndex: 0,
            children: p
          }
        )
      ]
    }
  );
};
const Cr = le(({ model: s, title: n, className: l }, p) => {
  oe(p, () => ({
    getData: g,
    clear: y
  })), l = l ? `datatableform ${l}` : "datatableform";
  const R = (i, o) => {
    if (i.input === "text" || i.input === "date" || i.input === "number")
      return /* @__PURE__ */ t.jsxs(We, { children: [
        /* @__PURE__ */ t.jsx("label", { htmlFor: i.field, children: i.title }),
        /* @__PURE__ */ t.jsx("input", { type: i.input, id: i.field, name: i.field })
      ] }, o);
    if (i.input === "Select")
      return /* @__PURE__ */ t.jsxs(We, { children: [
        /* @__PURE__ */ t.jsx("label", { children: i.title }),
        /* @__PURE__ */ t.jsx(
          Be,
          {
            options: i.options,
            name: i.field,
            id: `${s.id}-${i.field}`,
            selected: i.selected,
            height: 27
          }
        )
      ] }, o);
    if (i.input === "fieldset")
      return /* @__PURE__ */ t.jsxs("fieldset", { className: "datatable-modal-fieldset", children: [
        /* @__PURE__ */ t.jsx("legend", { children: i.title }),
        i.content.map((u, d) => R(u, d))
      ] }, o);
  }, y = () => {
    const i = document.querySelector(`#${s.id}`), o = i.querySelectorAll("[name]"), u = i.querySelectorAll("[data-name]");
    o.forEach((d) => {
      d.value = "";
    }), u.forEach((d) => {
      document.getElementById(d.id).setSelected(0);
    });
  }, g = () => {
    const i = document.querySelector(`#${s.id}`), o = i.querySelectorAll("[name]"), u = i.querySelectorAll("[data-name]"), d = {};
    return o.forEach((j) => {
      d[j.getAttribute("name")] = j.value;
    }), u.forEach((j) => {
      d[j.dataset.name] = j.dataset.value;
    }), d;
  };
  return /* @__PURE__ */ t.jsxs("div", { className: l, children: [
    n && /* @__PURE__ */ t.jsx("h2", { children: n }),
    /* @__PURE__ */ t.jsx("form", { className: "form-create", id: s.id, children: s.headers.map((i, o) => R(i, o)) })
  ] });
}), Sr = le(
  ({ model: s, label: n, title: l = "", onSubmit: p, labelSubmit: R, reset: y, labelReset: g }, i) => {
    const o = F.useRef(null), u = F.useRef(null);
    oe(i, () => ({
      toggle: d,
      clear: j
    }));
    const d = () => {
      o.current.classList.contains("opened") ? o.current.classList.remove("opened") : o.current.classList.add("opened");
    }, j = () => {
      u.current.clear();
    };
    return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx("div", { ref: o, className: "sl-modal-wrapper", children: /* @__PURE__ */ t.jsxs("div", { className: "sl-modal", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "sl-modal-header", children: [
          /* @__PURE__ */ t.jsx("div", { children: l }),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: "sl-modal-close-btn",
              onClick: d,
              children: /* @__PURE__ */ t.jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 22.457 22.457",
                  children: /* @__PURE__ */ t.jsx(
                    "path",
                    {
                      id: "close-btn",
                      d: "M122.232,46.019l6.621-6.621a2.7,2.7,0,1,0-3.817-3.817L118.415,42.2l-6.621-6.621a2.7,2.7,0,0,0-3.817,3.817l6.621,6.621-6.621,6.621a2.7,2.7,0,0,0,3.817,3.817l6.621-6.621,6.621,6.621a2.7,2.7,0,0,0,3.817-3.817Z",
                      transform: "translate(-107.186 -34.791)"
                    }
                  )
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "sl-modal-content", children: /* @__PURE__ */ t.jsx(Cr, { model: s, ref: u }) }),
        /* @__PURE__ */ t.jsx(
          wr,
          {
            formRef: u,
            modalRef: i,
            onSubmit: p,
            embedded: !0,
            labelSubmit: R,
            reset: y,
            labelReset: g
          }
        )
      ] }) }),
      /* @__PURE__ */ t.jsx("button", { className: "cfsb-save", onClick: d, children: n })
    ] });
  }
), Or = ({ model: s, data: n, externalForm: l }) => {
  const [p, R] = Y(n), [y, g] = Y(n), [i, o] = Y([]), [u, d] = Y(s.sortCol), [j, N] = Y(!s.ascending), [O, A] = Y(1), K = s.entries ? s.entries[0] : s.nbEntries, [L, I] = Y(K), [_, b] = Y(!1), S = z(null), V = z(null);
  F.useEffect(() => {
    const v = () => {
      b(!1), S.current.clear();
    };
    return l && document.addEventListener("datatableSubmitted", v, !1), () => {
      l && document.removeEventListener(
        "datatableSubmitted",
        v,
        !1
      );
    };
  }, []), F.useEffect(() => {
    g(n), R(n);
  }, [n]), F.useEffect(() => {
    g(p);
  }, [p]), F.useEffect(() => {
    u !== null && X(y, u, j);
  }, [y, j, u]), F.useEffect(() => {
    const v = (O - 1) * L, f = Math.min(y.length, O * L);
    o(
      //dataToUse.filter((e, idx) => idx >= startIndex && idx < endIndex)
      y.slice(v, f)
    );
  }, [y, O, L, u, j]);
  const X = (v, f, T) => v.sort((P, q) => {
    const $ = s.flatHeaders[f].field, H = s.flatHeaders[f].type;
    let M = P[$], W = q[$];
    switch (H) {
      case "number":
        M = Number(M), W = Number(W);
        break;
      case "date":
        M = Date.parse(M), W = Date.parse(W);
        break;
    }
    return M === W ? 0 : T ? M < W ? 1 : -1 : M > W ? 1 : -1;
  }), ce = (v, f) => {
    const T = f === u && !j;
    N(() => T), d(f), g(X(v.slice(), f, T)), A(1);
  }, ue = (v) => {
    const f = (O - 1) * L;
    I(v), A(Math.floor(f / v) + 1);
  }, Z = (v, f) => f.type === "date" ? new Date(Date.parse(v[f.field])).toLocaleDateString() : v[f.field], fe = (v) => {
    v.target.value === "" ? (b(!1), g(p)) : _ || b(!0);
    const f = v.target.value.split(" "), T = p.filter((P) => {
      for (let q of f.filter(($) => $ !== "")) {
        let $ = !1;
        for (let H of s.flatHeaders)
          if (Z(P, H).toLowerCase().includes(q.toLowerCase())) {
            $ = !0;
            break;
          }
        if (!$)
          return !1;
      }
      return !0;
    });
    u !== null && X(T, u, j), g(T), A(1);
  }, de = (v, f) => {
    if (v.type === "new")
      return /* @__PURE__ */ t.jsx(
        Sr,
        {
          ref: V,
          model: s,
          actionLabel: "Save",
          onSubmit: (T) => {
            const P = [...p, T];
            R(P), console.log("enregistrement dans le localStorage"), localStorage.setItem(
              s.id,
              JSON.stringify(P)
            ), V.current.toggle(), V.current.clear(), b(!1), g(p), S.current.clear();
          },
          label: v.label,
          title: v.title,
          labelSubmit: "Save",
          reset: !0,
          labelReset: "Clear"
        },
        f
      );
  };
  return /* @__PURE__ */ t.jsxs("div", { className: `dataTable ${s.id}`, children: [
    /* @__PURE__ */ t.jsxs("div", { className: "dataTable-header", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "dth-leftpart", children: [
        s.buttons && /* @__PURE__ */ t.jsx("div", { className: "datatable-buttons", children: s.buttons.map((v, f) => de(v, f)) }),
        s.entries && /* @__PURE__ */ t.jsx(
          Er,
          {
            entries: s.entries,
            updateNbPages: ue
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(jr, { ref: S, searchFilter: fe })
    ] }),
    /* @__PURE__ */ t.jsxs("table", { children: [
      /* @__PURE__ */ t.jsx("thead", { onClick: (v) => ce(y, v.target.cellIndex), children: /* @__PURE__ */ t.jsx("tr", { children: s.flatHeaders.map(
        (v, f) => f === u ? /* @__PURE__ */ t.jsx(
          "th",
          {
            className: j ? "desc" : "asc",
            style: {
              width: v.width
            },
            children: v.title
          },
          f
        ) : /* @__PURE__ */ t.jsx(
          "th",
          {
            style: {
              width: v.width || "auto"
            },
            children: v.title
          },
          f
        )
      ) }) }),
      /* @__PURE__ */ t.jsx("tbody", { children: i.map((v, f) => /* @__PURE__ */ t.jsx("tr", { children: s.flatHeaders.map((T, P) => /* @__PURE__ */ t.jsx("td", { children: Z(v, T) }, P)) }, f)) }),
      s.footer && /* @__PURE__ */ t.jsx("tfoot", { children: /* @__PURE__ */ t.jsx("tr", { children: s.flatHeaders.map((v, f) => /* @__PURE__ */ t.jsx("th", { children: v.title }, f)) }) })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "dataTable-footer", children: /* @__PURE__ */ t.jsx(
      _r,
      {
        setPage: A,
        page: O,
        N: y.length,
        itemsPerPage: L,
        Tot: n.length,
        searching: _
      }
    ) })
  ] });
}, Ve = (s) => {
  const n = [];
  return s.forEach((l) => {
    l.input !== "fieldset" ? n.push(l) : n.push(...Ve(l.content));
  }), n;
}, kr = (s) => ({
  ...s,
  flatHeaders: Ve(s.headers)
});
export {
  Or as Datatable,
  Cr as Form,
  wr as Submit,
  kr as getModel
};
