import { defineComponent as j, reactive as Ht, ref as x, onMounted as je, resolveComponent as I, openBlock as b, createBlock as O, normalizeClass as _, withCtx as A, renderSlot as G, createElementBlock as k, Fragment as J, renderList as X, createTextVNode as Ge, toDisplayString as te, watch as R, unref as v, createVNode as q, createCommentVNode as U, getCurrentScope as rr, onScopeDispose as ar, readonly as sr, getCurrentInstance as ie, nextTick as qe, createElementVNode as K, warn as lr, inject as z, computed as w, isRef as We, provide as Ce, mergeProps as Xn, toRef as ir, onUnmounted as eo, Transition as Gt, withDirectives as ne, vShow as De, toRaw as cn, useSlots as to, resolveDynamicComponent as mt, vModelCheckbox as dt, normalizeStyle as yt, toRefs as dr, toHandlers as ur, h as fn, withModifiers as fe, shallowRef as pn, onUpdated as cr, shallowReactive as fr, isVNode as no, render as hn } from "vue";
const pr = /* @__PURE__ */ j({
  __name: "DynamicFormItems",
  props: {
    config: {
      type: Object,
      default: () => ({
        label: "",
        dynamicFormProp: "",
        rules: [],
        type: "",
        placeholder: ""
      })
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = "dynamic", o = Ht(t.model), r = x([]);
    return je(async () => {
      if (["select", "radio", "treeSelect"].includes(t.config.type))
        if (t.config.async) {
          const a = await t.config.fetchFunc();
          a && a.code === 0 && (r.value = a.data);
        } else
          r.value = t.config.fetchFunc ? t.config.fetchFunc() : [];
    }), (a, s) => {
      const l = I("el-input"), d = I("el-transfer"), i = I("el-input-number"), u = I("el-option"), h = I("el-select"), f = I("el-tree-select"), g = I("el-date-picker"), p = I("el-radio"), c = I("el-radio-group"), y = I("el-form-item");
      return b(), O(y, {
        class: _(`${n}-form-item`),
        rules: e.config.rules || [],
        label: e.config.label,
        "label-width": e.config.labelWidth,
        prop: e.config.dynamicFormProp,
        required: e.config.required || !1
      }, {
        default: A(() => [
          G(a.$slots, e.config.dynamicFormProp, { config: e.config }, () => {
            var m, $, T, E, P, ae, S, Y, N, L, M, Ee;
            return [
              e.config.type === "input" ? (b(), O(l, {
                key: 0,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[0] || (s[0] = (B) => o[e.config.dynamicFormProp] = B),
                modelModifiers: { trim: !0 },
                placeholder: e.config.placeholder || `\u8BF7\u8F93\u5165${e.config.label}`,
                class: _(`${n}-form-input`),
                "show-word-limit": e.config.showWordLimit || !1,
                "show-password": e.config.showPassword || !1,
                autocomplete: e.config.autocomplete,
                maxlength: e.config.maxlength || "",
                disabled: e.config.disabled || !1,
                type: ($ = (m = e.config) == null ? void 0 : m.componentProps) == null ? void 0 : $.type
              }, null, 8, ["modelValue", "placeholder", "class", "show-word-limit", "show-password", "autocomplete", "maxlength", "disabled", "type"])) : e.config.type === "textarea" ? (b(), O(l, {
                key: 1,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[1] || (s[1] = (B) => o[e.config.dynamicFormProp] = B),
                autosize: e.config.autosize || !1,
                resize: e.config.resize || "vertical",
                placeholder: e.config.placeholder || `\u8BF7\u8F93\u5165${e.config.label}`,
                class: _(`${n}-form-textarea`),
                "show-word-limit": e.config.showWordLimit || !1,
                rows: e.config.rows || 3,
                autocomplete: e.config.autocomplete,
                maxlength: e.config.maxlength || "",
                disabled: e.config.disabled || !1,
                type: "textarea"
              }, null, 8, ["modelValue", "autosize", "resize", "placeholder", "class", "show-word-limit", "rows", "autocomplete", "maxlength", "disabled"])) : e.config.type === "transfer" ? (b(), O(d, {
                key: 2,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[2] || (s[2] = (B) => o[e.config.dynamicFormProp] = B),
                titles: e.config.titles,
                class: _(`${n}-form-transfer`),
                filterable: "",
                "filter-placeholder": e.config["filter-placeholder"],
                "button-texts": ["\u89E3\u7ED1", "\u7ED1\u5B9A"],
                data: e.config.data,
                props: e.config.props
              }, null, 8, ["modelValue", "titles", "class", "filter-placeholder", "data", "props"])) : e.config.type === "inputNumber" ? (b(), O(i, {
                key: 3,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[3] || (s[3] = (B) => o[e.config.dynamicFormProp] = B),
                modelModifiers: { trim: !0 },
                class: _(`${n}-form-input input-number`),
                placeholder: e.config.placeholder || `\u8BF7\u8F93\u5165${e.config.label}`,
                min: e.config.min,
                max: e.config.max,
                disabled: e.config.disabled || !1,
                controls: e.config.controls,
                precision: e.config.precision,
                "controls-position": e.config.controlsPosition
              }, null, 8, ["modelValue", "class", "placeholder", "min", "max", "disabled", "controls", "precision", "controls-position"])) : e.config.type === "select" ? (b(), O(h, {
                key: 4,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[4] || (s[4] = (B) => o[e.config.dynamicFormProp] = B),
                modelModifiers: { trim: !0 },
                class: _(`${n}-form-select`),
                placeholder: e.config.placeholder || `\u8BF7\u9009\u62E9${e.config.label}`,
                multiple: (E = (T = e.config) == null ? void 0 : T.componentProps) == null ? void 0 : E.multiple
              }, {
                default: A(() => [
                  (b(!0), k(J, null, X(r.value, (B) => {
                    var Oe, et, tt;
                    return b(), O(u, {
                      key: `select-${e.config.dynamicFormProp}-${B[(Oe = e.config.props) == null ? void 0 : Oe.key]}`,
                      label: B[(et = e.config.props) == null ? void 0 : et.label],
                      value: B[(tt = e.config.props) == null ? void 0 : tt.value]
                    }, null, 8, ["label", "value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class", "placeholder", "multiple"])) : e.config.type === "treeSelect" ? (b(), O(f, {
                key: 5,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[5] || (s[5] = (B) => o[e.config.dynamicFormProp] = B),
                class: _(`${n}-form-treeselect`),
                placeholder: e.config.placeholder || `\u8BF7\u9009\u62E9${e.config.label}`,
                data: r.value,
                "render-after-expand": e.config.renderAfterExpand || !0,
                props: e.config.props,
                "check-strictly": ((ae = (P = e.config) == null ? void 0 : P.componentProps) == null ? void 0 : ae.checkStrictly) || !1,
                "node-key": (Y = (S = e.config) == null ? void 0 : S.componentProps) == null ? void 0 : Y.nodeKey,
                "show-checkbox": ((L = (N = e.config) == null ? void 0 : N.componentProps) == null ? void 0 : L.showCheckbox) || !1,
                multiple: ((Ee = (M = e.config) == null ? void 0 : M.componentProps) == null ? void 0 : Ee.multiple) || !1
              }, null, 8, ["modelValue", "class", "placeholder", "data", "render-after-expand", "props", "check-strictly", "node-key", "show-checkbox", "multiple"])) : e.config.type === "dateTimePicker" ? (b(), O(g, {
                key: 6,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[6] || (s[6] = (B) => o[e.config.dynamicFormProp] = B),
                class: _(`${n}-form-datepicker`),
                type: "datetime",
                "value-format": e.config.valueFormat,
                placeholder: e.config.placeholder || `\u8BF7\u9009\u62E9${e.config.label}`,
                disabled: e.config.disabled || !1
              }, null, 8, ["modelValue", "class", "value-format", "placeholder", "disabled"])) : e.config.type === "radio" ? (b(), O(c, {
                key: 7,
                modelValue: o[e.config.dynamicFormProp],
                "onUpdate:modelValue": s[7] || (s[7] = (B) => o[e.config.dynamicFormProp] = B),
                class: _(`${n}-form-radio`)
              }, {
                default: A(() => [
                  (b(!0), k(J, null, X(r.value, (B, Oe) => (b(), O(p, {
                    key: `radio-${e.config.dynamicFormProp}-${Oe}`,
                    label: B.label,
                    border: e.config.border
                  }, {
                    default: A(() => [
                      Ge(te(B.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label", "border"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])) : G(a.$slots, e.config.type, { key: 8 })
            ];
          })
        ]),
        _: 3
      }, 8, ["class", "rules", "label", "label-width", "prop", "required"]);
    };
  }
});
const bt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, gn = /* @__PURE__ */ bt(pr, [["__file", "/data/frontend/vue3-template/src/components/DynamicForm/src/DynamicFormItems.vue"]]), oo = {
  randomString: function(e = 10, t) {
    const n = t || "abcdefghijklmnopqrstuvwxyz9876543210";
    let o = "";
    const r = n.length;
    for (let a = 0; a < e; a++)
      o += n.charAt(Math.floor(Math.random() * r));
    return o;
  },
  randomNumber: function(e = 10) {
    const t = Number(e);
    return isNaN(t) ? NaN : Math.round(Math.random() * t);
  },
  randomFloat: function(e = 10, t = 2) {
    const n = Number(e * Math.pow(10, t));
    if (isNaN(n))
      return NaN;
    const o = (oo.randomNumber(n) / Math.pow(10, t)).toFixed(t);
    return parseFloat(o);
  }
}, hr = /* @__PURE__ */ j({
  __name: "DynamicForm",
  props: {
    formConfig: {
      type: Array,
      default: () => []
    },
    model: {
      type: Object,
      default: () => ({})
    },
    tabModel: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, o = x(), r = "dynamic";
    let a = Ht(n.model);
    const s = x(n.formConfig[0] ? n.formConfig[0].label : ""), l = () => o.value, d = () => {
      s.value = n.formConfig[0] ? n.formConfig[0].label : "";
    }, i = () => {
      if (!o.value)
        return !1;
      o.value.resetFields && o.value.resetFields();
    };
    return R(
      () => n.model,
      (u) => {
        u && (a = u);
      }
    ), t({
      getFormRef: l,
      resetCurrentTab: d,
      resetFields: i
    }), (u, h) => {
      const f = I("el-col"), g = I("el-row"), p = I("el-tab-pane"), c = I("el-tabs"), y = I("el-form");
      return b(), O(y, {
        ref_key: "dynamicFormRef",
        ref: o,
        class: _(`${r}-form`),
        model: v(a),
        "label-position": "right",
        disabled: e.disabled
      }, {
        default: A(() => [
          e.tabModel ? (b(), k("div", {
            key: 0,
            class: _(`${r}-form-tabs`)
          }, [
            q(c, {
              modelValue: s.value,
              "onUpdate:modelValue": h[0] || (h[0] = (m) => s.value = m)
            }, {
              default: A(() => [
                (b(!0), k(J, null, X(e.formConfig, (m, $) => (b(), O(p, {
                  key: `${m.label}_${$}`,
                  label: m.label,
                  name: m.label
                }, {
                  default: A(() => [
                    (b(!0), k(J, null, X(Math.round(m.config.length / (m.colsNumber || 1)), (T) => (b(), O(g, {
                      key: `form-row-${T}`
                    }, {
                      default: A(() => [
                        (b(!0), k(J, null, X(m.config.slice(
                          (m.colsNumber || 1) * (T - 1),
                          (m.colsNumber || 1) * T
                        ), (E) => (b(), O(f, {
                          key: `${E.dynamicFormProp}_${E.type}`,
                          span: 24 / (m.colsNumber || 1)
                        }, {
                          default: A(() => [
                            q(gn, {
                              config: E,
                              model: v(a)
                            }, {
                              [E.dynamicFormProp]: A(() => [
                                G(u.$slots, E.dynamicFormProp, { config: E })
                              ]),
                              _: 2
                            }, 1032, ["config", "model"])
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128))
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ]),
                  _: 2
                }, 1032, ["label", "name"]))), 128))
              ]),
              _: 3
            }, 8, ["modelValue"])
          ], 2)) : (b(), k("div", {
            key: 1,
            class: _(`${r}-form-line`)
          }, [
            (b(!0), k(J, null, X(e.formConfig, (m, $) => (b(), k("div", {
              key: `${m.label}_${$}_${v(oo).randomString()}`
            }, [
              m.label ? (b(), k("div", {
                key: 0,
                class: _(`${r}-form-title block-before`)
              }, te(m.label), 3)) : U("v-if", !0),
              (b(!0), k(J, null, X(Math.round(m.config.length / (m.colsNumber || 1)), (T) => (b(), O(g, {
                key: `form-row-${T}`
              }, {
                default: A(() => [
                  (b(!0), k(J, null, X(m.config.slice(
                    (m.colsNumber || 1) * (T - 1),
                    (m.colsNumber || 1) * T
                  ), (E) => (b(), O(f, {
                    key: `${E.dynamicFormProp}_${E.type}`,
                    span: 24 / (m.colsNumber || 1)
                  }, {
                    default: A(() => [
                      q(gn, {
                        config: E,
                        model: v(a)
                      }, {
                        [E.dynamicFormProp]: A(() => [
                          G(u.$slots, E.dynamicFormProp, { config: E })
                        ]),
                        _: 2
                      }, 1032, ["config", "model"])
                    ]),
                    _: 2
                  }, 1032, ["span"]))), 128))
                ]),
                _: 2
              }, 1024))), 128)),
              U('        <el-divider v-if="index < formConfig.length - 1" class="mt5 mb5" />')
            ]))), 128))
          ], 2))
        ]),
        _: 3
      }, 8, ["class", "model", "disabled"]);
    };
  }
});
const Sc = /* @__PURE__ */ bt(hr, [["__file", "/data/frontend/vue3-template/src/components/DynamicForm/src/DynamicForm.vue"]]), gr = () => {
  const e = {
    vNamespace: "heilanfe",
    elNamespace: "el"
  };
  return {
    variables: e,
    getPrefixCls: (n) => `${e.vNamespace}-${n}`
  };
};
var vn;
const Ke = typeof window < "u", St = (e) => typeof e == "boolean", we = (e) => typeof e == "number", vr = (e) => typeof e == "string", mr = () => {
};
Ke && ((vn = window == null ? void 0 : window.navigator) == null ? void 0 : vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qt(e) {
  return typeof e == "function" ? e() : v(e);
}
function yr(e) {
  return e;
}
function Wt(e) {
  return rr() ? (ar(e), !0) : !1;
}
function br(e, t = !0) {
  ie() ? je(e) : t ? e() : qe(e);
}
function Cr(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = x(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function l() {
    r.value = !1, s();
  }
  function d(...i) {
    s(), r.value = !0, a = setTimeout(() => {
      r.value = !1, a = null, e(...i);
    }, qt(t));
  }
  return o && (r.value = !0, Ke && d()), Wt(l), {
    isPending: sr(r),
    start: d,
    stop: l
  };
}
function ro(e) {
  var t;
  const n = qt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ao = Ke ? window : void 0;
function so(...e) {
  let t, n, o, r;
  if (vr(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = ao) : [t, n, o, r] = e, !t)
    return mr;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], s = () => {
    a.forEach((u) => u()), a.length = 0;
  }, l = (u, h, f, g) => (u.addEventListener(h, f, g), () => u.removeEventListener(h, f, g)), d = R(() => [ro(t), qt(r)], ([u, h]) => {
    s(), u && a.push(...n.flatMap((f) => o.map((g) => l(u, f, g, h))));
  }, { immediate: !0, flush: "post" }), i = () => {
    d(), s();
  };
  return Wt(i), i;
}
function wr(e, t = !1) {
  const n = x(), o = () => n.value = Boolean(e());
  return o(), br(o, t), n;
}
const Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Dt = "__vueuse_ssr_handlers__";
Pt[Dt] = Pt[Dt] || {};
Pt[Dt];
var mn = Object.getOwnPropertySymbols, Nr = Object.prototype.hasOwnProperty, _r = Object.prototype.propertyIsEnumerable, kr = (e, t) => {
  var n = {};
  for (var o in e)
    Nr.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && mn)
    for (var o of mn(e))
      t.indexOf(o) < 0 && _r.call(e, o) && (n[o] = e[o]);
  return n;
};
function $r(e, t, n = {}) {
  const o = n, { window: r = ao } = o, a = kr(o, ["window"]);
  let s;
  const l = wr(() => r && "ResizeObserver" in r), d = () => {
    s && (s.disconnect(), s = void 0);
  }, i = R(() => ro(e), (h) => {
    d(), l.value && r && h && (s = new ResizeObserver(t), s.observe(h, a));
  }, { immediate: !0, flush: "post" }), u = () => {
    d(), i();
  };
  return Wt(u), {
    isSupported: l,
    stop: u
  };
}
var yn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(yn || (yn = {}));
var xr = Object.defineProperty, bn = Object.getOwnPropertySymbols, Tr = Object.prototype.hasOwnProperty, Er = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Or = (e, t) => {
  for (var n in t || (t = {}))
    Tr.call(t, n) && Cn(e, n, t[n]);
  if (bn)
    for (var n of bn(t))
      Er.call(t, n) && Cn(e, n, t[n]);
  return e;
};
const Sr = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Or({
  linear: yr
}, Sr);
const Yt = new Proxy({}, {
  get(e, t) {
    throw new Error(`Module "process" has been externalized for browser compatibility. Cannot access "process.${t}" in client code.`);
  }
}), nt = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {};
Yt.env.NODE_ENV !== "production" && Object.freeze({});
Yt.env.NODE_ENV !== "production" && Object.freeze([]);
const Pr = () => {
}, Dr = Object.prototype.hasOwnProperty, Ye = (e, t) => Dr.call(e, t), Je = Array.isArray, ut = (e) => typeof e == "function", ge = (e) => typeof e == "string", Ct = (e) => e !== null && typeof e == "object";
var Ir = typeof nt == "object" && nt && nt.Object === Object && nt;
const lo = Ir;
var Ar = typeof self == "object" && self && self.Object === Object && self, Fr = lo || Ar || Function("return this")();
const de = Fr;
var Br = de.Symbol;
const oe = Br;
var io = Object.prototype, Lr = io.hasOwnProperty, jr = io.toString, Ve = oe ? oe.toStringTag : void 0;
function Kr(e) {
  var t = Lr.call(e, Ve), n = e[Ve];
  try {
    e[Ve] = void 0;
    var o = !0;
  } catch {
  }
  var r = jr.call(e);
  return o && (t ? e[Ve] = n : delete e[Ve]), r;
}
var zr = Object.prototype, Mr = zr.toString;
function Rr(e) {
  return Mr.call(e);
}
var Vr = "[object Null]", Ur = "[object Undefined]", wn = oe ? oe.toStringTag : void 0;
function ze(e) {
  return e == null ? e === void 0 ? Ur : Vr : wn && wn in Object(e) ? Kr(e) : Rr(e);
}
function Ie(e) {
  return e != null && typeof e == "object";
}
var Hr = "[object Symbol]";
function Jt(e) {
  return typeof e == "symbol" || Ie(e) && ze(e) == Hr;
}
function Gr(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var qr = Array.isArray;
const le = qr;
var Wr = 1 / 0, Nn = oe ? oe.prototype : void 0, _n = Nn ? Nn.toString : void 0;
function uo(e) {
  if (typeof e == "string")
    return e;
  if (le(e))
    return Gr(e, uo) + "";
  if (Jt(e))
    return _n ? _n.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Wr ? "-0" : t;
}
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Yr(e) {
  return e;
}
var Jr = "[object AsyncFunction]", Zr = "[object Function]", Qr = "[object GeneratorFunction]", Xr = "[object Proxy]";
function co(e) {
  if (!ct(e))
    return !1;
  var t = ze(e);
  return t == Zr || t == Qr || t == Jr || t == Xr;
}
var ea = de["__core-js_shared__"];
const xt = ea;
var kn = function() {
  var e = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ta(e) {
  return !!kn && kn in e;
}
var na = Function.prototype, oa = na.toString;
function ke(e) {
  if (e != null) {
    try {
      return oa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ra = /[\\^$.*+?()[\]{}|]/g, aa = /^\[object .+?Constructor\]$/, sa = Function.prototype, la = Object.prototype, ia = sa.toString, da = la.hasOwnProperty, ua = RegExp(
  "^" + ia.call(da).replace(ra, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ca(e) {
  if (!ct(e) || ta(e))
    return !1;
  var t = co(e) ? ua : aa;
  return t.test(ke(e));
}
function fa(e, t) {
  return e == null ? void 0 : e[t];
}
function $e(e, t) {
  var n = fa(e, t);
  return ca(n) ? n : void 0;
}
var pa = $e(de, "WeakMap");
const It = pa;
function ha(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ga = 800, va = 16, ma = Date.now;
function ya(e) {
  var t = 0, n = 0;
  return function() {
    var o = ma(), r = va - (o - n);
    if (n = o, r > 0) {
      if (++t >= ga)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function ba(e) {
  return function() {
    return e;
  };
}
var Ca = function() {
  try {
    var e = $e(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ft = Ca;
var wa = ft ? function(e, t) {
  return ft(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ba(t),
    writable: !0
  });
} : Yr;
const Na = wa;
var _a = ya(Na);
const ka = _a;
var $a = 9007199254740991, xa = /^(?:0|[1-9]\d*)$/;
function Zt(e, t) {
  var n = typeof e;
  return t = t == null ? $a : t, !!t && (n == "number" || n != "symbol" && xa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ta(e, t, n) {
  t == "__proto__" && ft ? ft(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Qt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ea = Object.prototype, Oa = Ea.hasOwnProperty;
function Sa(e, t, n) {
  var o = e[t];
  (!(Oa.call(e, t) && Qt(o, n)) || n === void 0 && !(t in e)) && Ta(e, t, n);
}
var $n = Math.max;
function Pa(e, t, n) {
  return t = $n(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, a = $n(o.length - t, 0), s = Array(a); ++r < a; )
      s[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(s), ha(e, this, l);
  };
}
var Da = 9007199254740991;
function Xt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Da;
}
function Ia(e) {
  return e != null && Xt(e.length) && !co(e);
}
var Aa = Object.prototype;
function Fa(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Aa;
  return e === n;
}
function Ba(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var La = "[object Arguments]";
function xn(e) {
  return Ie(e) && ze(e) == La;
}
var fo = Object.prototype, ja = fo.hasOwnProperty, Ka = fo.propertyIsEnumerable, za = xn(function() {
  return arguments;
}()) ? xn : function(e) {
  return Ie(e) && ja.call(e, "callee") && !Ka.call(e, "callee");
};
const en = za;
function Ma() {
  return !1;
}
var po = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = po && typeof module == "object" && module && !module.nodeType && module, Ra = Tn && Tn.exports === po, En = Ra ? de.Buffer : void 0, Va = En ? En.isBuffer : void 0, Ua = Va || Ma;
const At = Ua;
var Ha = "[object Arguments]", Ga = "[object Array]", qa = "[object Boolean]", Wa = "[object Date]", Ya = "[object Error]", Ja = "[object Function]", Za = "[object Map]", Qa = "[object Number]", Xa = "[object Object]", es = "[object RegExp]", ts = "[object Set]", ns = "[object String]", os = "[object WeakMap]", rs = "[object ArrayBuffer]", as = "[object DataView]", ss = "[object Float32Array]", ls = "[object Float64Array]", is = "[object Int8Array]", ds = "[object Int16Array]", us = "[object Int32Array]", cs = "[object Uint8Array]", fs = "[object Uint8ClampedArray]", ps = "[object Uint16Array]", hs = "[object Uint32Array]", F = {};
F[ss] = F[ls] = F[is] = F[ds] = F[us] = F[cs] = F[fs] = F[ps] = F[hs] = !0;
F[Ha] = F[Ga] = F[rs] = F[qa] = F[as] = F[Wa] = F[Ya] = F[Ja] = F[Za] = F[Qa] = F[Xa] = F[es] = F[ts] = F[ns] = F[os] = !1;
function gs(e) {
  return Ie(e) && Xt(e.length) && !!F[ze(e)];
}
function vs(e) {
  return function(t) {
    return e(t);
  };
}
var ho = typeof exports == "object" && exports && !exports.nodeType && exports, Ue = ho && typeof module == "object" && module && !module.nodeType && module, ms = Ue && Ue.exports === ho, Tt = ms && lo.process, ys = function() {
  try {
    var e = Ue && Ue.require && Ue.require("util").types;
    return e || Tt && Tt.binding && Tt.binding("util");
  } catch {
  }
}();
const On = ys;
var Sn = On && On.isTypedArray, bs = Sn ? vs(Sn) : gs;
const go = bs;
var Cs = Object.prototype, ws = Cs.hasOwnProperty;
function Ns(e, t) {
  var n = le(e), o = !n && en(e), r = !n && !o && At(e), a = !n && !o && !r && go(e), s = n || o || r || a, l = s ? Ba(e.length, String) : [], d = l.length;
  for (var i in e)
    (t || ws.call(e, i)) && !(s && (i == "length" || r && (i == "offset" || i == "parent") || a && (i == "buffer" || i == "byteLength" || i == "byteOffset") || Zt(i, d))) && l.push(i);
  return l;
}
function _s(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ks = _s(Object.keys, Object);
const $s = ks;
var xs = Object.prototype, Ts = xs.hasOwnProperty;
function Es(e) {
  if (!Fa(e))
    return $s(e);
  var t = [];
  for (var n in Object(e))
    Ts.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Os(e) {
  return Ia(e) ? Ns(e) : Es(e);
}
var Ss = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ps = /^\w*$/;
function Ds(e, t) {
  if (le(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Jt(e) ? !0 : Ps.test(e) || !Ss.test(e) || t != null && e in Object(t);
}
var Is = $e(Object, "create");
const Ze = Is;
function As() {
  this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
}
function Fs(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bs = "__lodash_hash_undefined__", Ls = Object.prototype, js = Ls.hasOwnProperty;
function Ks(e) {
  var t = this.__data__;
  if (Ze) {
    var n = t[e];
    return n === Bs ? void 0 : n;
  }
  return js.call(t, e) ? t[e] : void 0;
}
var zs = Object.prototype, Ms = zs.hasOwnProperty;
function Rs(e) {
  var t = this.__data__;
  return Ze ? t[e] !== void 0 : Ms.call(t, e);
}
var Vs = "__lodash_hash_undefined__";
function Us(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ze && t === void 0 ? Vs : t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ne.prototype.clear = As;
Ne.prototype.delete = Fs;
Ne.prototype.get = Ks;
Ne.prototype.has = Rs;
Ne.prototype.set = Us;
function Hs() {
  this.__data__ = [], this.size = 0;
}
function wt(e, t) {
  for (var n = e.length; n--; )
    if (Qt(e[n][0], t))
      return n;
  return -1;
}
var Gs = Array.prototype, qs = Gs.splice;
function Ws(e) {
  var t = this.__data__, n = wt(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : qs.call(t, n, 1), --this.size, !0;
}
function Ys(e) {
  var t = this.__data__, n = wt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Js(e) {
  return wt(this.__data__, e) > -1;
}
function Zs(e, t) {
  var n = this.__data__, o = wt(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ue.prototype.clear = Hs;
ue.prototype.delete = Ws;
ue.prototype.get = Ys;
ue.prototype.has = Js;
ue.prototype.set = Zs;
var Qs = $e(de, "Map");
const Qe = Qs;
function Xs() {
  this.size = 0, this.__data__ = {
    hash: new Ne(),
    map: new (Qe || ue)(),
    string: new Ne()
  };
}
function el(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Nt(e, t) {
  var n = e.__data__;
  return el(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function tl(e) {
  var t = Nt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nl(e) {
  return Nt(this, e).get(e);
}
function ol(e) {
  return Nt(this, e).has(e);
}
function rl(e, t) {
  var n = Nt(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function ce(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ce.prototype.clear = Xs;
ce.prototype.delete = tl;
ce.prototype.get = nl;
ce.prototype.has = ol;
ce.prototype.set = rl;
var al = "Expected a function";
function tn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(al);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(r))
      return a.get(r);
    var s = e.apply(this, o);
    return n.cache = a.set(r, s) || a, s;
  };
  return n.cache = new (tn.Cache || ce)(), n;
}
tn.Cache = ce;
var sl = 500;
function ll(e) {
  var t = tn(e, function(o) {
    return n.size === sl && n.clear(), o;
  }), n = t.cache;
  return t;
}
var il = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dl = /\\(\\)?/g, ul = ll(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(il, function(n, o, r, a) {
    t.push(r ? a.replace(dl, "$1") : o || n);
  }), t;
});
const cl = ul;
function fl(e) {
  return e == null ? "" : uo(e);
}
function _t(e, t) {
  return le(e) ? e : Ds(e, t) ? [e] : cl(fl(e));
}
var pl = 1 / 0;
function nn(e) {
  if (typeof e == "string" || Jt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -pl ? "-0" : t;
}
function vo(e, t) {
  t = _t(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[nn(t[n++])];
  return n && n == o ? e : void 0;
}
function hl(e, t, n) {
  var o = e == null ? void 0 : vo(e, t);
  return o === void 0 ? n : o;
}
function mo(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Pn = oe ? oe.isConcatSpreadable : void 0;
function gl(e) {
  return le(e) || en(e) || !!(Pn && e && e[Pn]);
}
function yo(e, t, n, o, r) {
  var a = -1, s = e.length;
  for (n || (n = gl), r || (r = []); ++a < s; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? yo(l, t - 1, n, o, r) : mo(r, l) : o || (r[r.length] = l);
  }
  return r;
}
function vl(e) {
  var t = e == null ? 0 : e.length;
  return t ? yo(e, 1) : [];
}
function ml(e) {
  return ka(Pa(e, void 0, vl), e + "");
}
function yl() {
  this.__data__ = new ue(), this.size = 0;
}
function bl(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Cl(e) {
  return this.__data__.get(e);
}
function wl(e) {
  return this.__data__.has(e);
}
var Nl = 200;
function _l(e, t) {
  var n = this.__data__;
  if (n instanceof ue) {
    var o = n.__data__;
    if (!Qe || o.length < Nl - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ce(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function he(e) {
  var t = this.__data__ = new ue(e);
  this.size = t.size;
}
he.prototype.clear = yl;
he.prototype.delete = bl;
he.prototype.get = Cl;
he.prototype.has = wl;
he.prototype.set = _l;
function kl(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, a = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (a[r++] = s);
  }
  return a;
}
function $l() {
  return [];
}
var xl = Object.prototype, Tl = xl.propertyIsEnumerable, Dn = Object.getOwnPropertySymbols, El = Dn ? function(e) {
  return e == null ? [] : (e = Object(e), kl(Dn(e), function(t) {
    return Tl.call(e, t);
  }));
} : $l;
const Ol = El;
function Sl(e, t, n) {
  var o = t(e);
  return le(e) ? o : mo(o, n(e));
}
function In(e) {
  return Sl(e, Os, Ol);
}
var Pl = $e(de, "DataView");
const Ft = Pl;
var Dl = $e(de, "Promise");
const Bt = Dl;
var Il = $e(de, "Set");
const Lt = Il;
var An = "[object Map]", Al = "[object Object]", Fn = "[object Promise]", Bn = "[object Set]", Ln = "[object WeakMap]", jn = "[object DataView]", Fl = ke(Ft), Bl = ke(Qe), Ll = ke(Bt), jl = ke(Lt), Kl = ke(It), ye = ze;
(Ft && ye(new Ft(new ArrayBuffer(1))) != jn || Qe && ye(new Qe()) != An || Bt && ye(Bt.resolve()) != Fn || Lt && ye(new Lt()) != Bn || It && ye(new It()) != Ln) && (ye = function(e) {
  var t = ze(e), n = t == Al ? e.constructor : void 0, o = n ? ke(n) : "";
  if (o)
    switch (o) {
      case Fl:
        return jn;
      case Bl:
        return An;
      case Ll:
        return Fn;
      case jl:
        return Bn;
      case Kl:
        return Ln;
    }
  return t;
});
const Kn = ye;
var zl = de.Uint8Array;
const zn = zl;
var Ml = "__lodash_hash_undefined__";
function Rl(e) {
  return this.__data__.set(e, Ml), this;
}
function Vl(e) {
  return this.__data__.has(e);
}
function pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ce(); ++t < n; )
    this.add(e[t]);
}
pt.prototype.add = pt.prototype.push = Rl;
pt.prototype.has = Vl;
function Ul(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Hl(e, t) {
  return e.has(t);
}
var Gl = 1, ql = 2;
function bo(e, t, n, o, r, a) {
  var s = n & Gl, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var i = a.get(e), u = a.get(t);
  if (i && u)
    return i == t && u == e;
  var h = -1, f = !0, g = n & ql ? new pt() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < l; ) {
    var p = e[h], c = t[h];
    if (o)
      var y = s ? o(c, p, h, t, e, a) : o(p, c, h, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      f = !1;
      break;
    }
    if (g) {
      if (!Ul(t, function(m, $) {
        if (!Hl(g, $) && (p === m || r(p, m, n, o, a)))
          return g.push($);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === c || r(p, c, n, o, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
function Wl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Yl(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Jl = 1, Zl = 2, Ql = "[object Boolean]", Xl = "[object Date]", ei = "[object Error]", ti = "[object Map]", ni = "[object Number]", oi = "[object RegExp]", ri = "[object Set]", ai = "[object String]", si = "[object Symbol]", li = "[object ArrayBuffer]", ii = "[object DataView]", Mn = oe ? oe.prototype : void 0, Et = Mn ? Mn.valueOf : void 0;
function di(e, t, n, o, r, a, s) {
  switch (n) {
    case ii:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case li:
      return !(e.byteLength != t.byteLength || !a(new zn(e), new zn(t)));
    case Ql:
    case Xl:
    case ni:
      return Qt(+e, +t);
    case ei:
      return e.name == t.name && e.message == t.message;
    case oi:
    case ai:
      return e == t + "";
    case ti:
      var l = Wl;
    case ri:
      var d = o & Jl;
      if (l || (l = Yl), e.size != t.size && !d)
        return !1;
      var i = s.get(e);
      if (i)
        return i == t;
      o |= Zl, s.set(e, t);
      var u = bo(l(e), l(t), o, r, a, s);
      return s.delete(e), u;
    case si:
      if (Et)
        return Et.call(e) == Et.call(t);
  }
  return !1;
}
var ui = 1, ci = Object.prototype, fi = ci.hasOwnProperty;
function pi(e, t, n, o, r, a) {
  var s = n & ui, l = In(e), d = l.length, i = In(t), u = i.length;
  if (d != u && !s)
    return !1;
  for (var h = d; h--; ) {
    var f = l[h];
    if (!(s ? f in t : fi.call(t, f)))
      return !1;
  }
  var g = a.get(e), p = a.get(t);
  if (g && p)
    return g == t && p == e;
  var c = !0;
  a.set(e, t), a.set(t, e);
  for (var y = s; ++h < d; ) {
    f = l[h];
    var m = e[f], $ = t[f];
    if (o)
      var T = s ? o($, m, f, t, e, a) : o(m, $, f, e, t, a);
    if (!(T === void 0 ? m === $ || r(m, $, n, o, a) : T)) {
      c = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (c && !y) {
    var E = e.constructor, P = t.constructor;
    E != P && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof P == "function" && P instanceof P) && (c = !1);
  }
  return a.delete(e), a.delete(t), c;
}
var hi = 1, Rn = "[object Arguments]", Vn = "[object Array]", ot = "[object Object]", gi = Object.prototype, Un = gi.hasOwnProperty;
function vi(e, t, n, o, r, a) {
  var s = le(e), l = le(t), d = s ? Vn : Kn(e), i = l ? Vn : Kn(t);
  d = d == Rn ? ot : d, i = i == Rn ? ot : i;
  var u = d == ot, h = i == ot, f = d == i;
  if (f && At(e)) {
    if (!At(t))
      return !1;
    s = !0, u = !1;
  }
  if (f && !u)
    return a || (a = new he()), s || go(e) ? bo(e, t, n, o, r, a) : di(e, t, d, n, o, r, a);
  if (!(n & hi)) {
    var g = u && Un.call(e, "__wrapped__"), p = h && Un.call(t, "__wrapped__");
    if (g || p) {
      var c = g ? e.value() : e, y = p ? t.value() : t;
      return a || (a = new he()), r(c, y, n, o, a);
    }
  }
  return f ? (a || (a = new he()), pi(e, t, n, o, r, a)) : !1;
}
function Co(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Ie(e) && !Ie(t) ? e !== e && t !== t : vi(e, t, n, o, Co, r);
}
function mi(e, t) {
  return e != null && t in Object(e);
}
function yi(e, t, n) {
  t = _t(t, e);
  for (var o = -1, r = t.length, a = !1; ++o < r; ) {
    var s = nn(t[o]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != r ? a : (r = e == null ? 0 : e.length, !!r && Xt(r) && Zt(s, r) && (le(e) || en(e)));
}
function bi(e, t) {
  return e != null && yi(e, t, mi);
}
function Ci(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function wi(e, t) {
  return Co(e, t);
}
function Ni(e, t, n, o) {
  if (!ct(e))
    return e;
  t = _t(t, e);
  for (var r = -1, a = t.length, s = a - 1, l = e; l != null && ++r < a; ) {
    var d = nn(t[r]), i = n;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return e;
    if (r != s) {
      var u = l[d];
      i = o ? o(u, d, l) : void 0, i === void 0 && (i = ct(u) ? u : Zt(t[r + 1]) ? [] : {});
    }
    Sa(l, d, i), l = l[d];
  }
  return e;
}
function _i(e, t, n) {
  for (var o = -1, r = t.length, a = {}; ++o < r; ) {
    var s = t[o], l = vo(e, s);
    n(l, s) && Ni(a, _t(s, e), l);
  }
  return a;
}
function ki(e, t) {
  return _i(e, t, function(n, o) {
    return bi(e, o);
  });
}
var $i = ml(function(e, t) {
  return e == null ? {} : ki(e, t);
});
const xi = $i, ht = (e) => e === void 0, Ti = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ei = (e) => ge(e) ? !Number.isNaN(Number(e)) : !1, Hn = (e) => Object.keys(e);
class Oi extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function xe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ge(e) ? new Oi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Si = "utils/dom/style", wo = (e = "") => e.split(" ").filter((t) => !!t.trim()), Pi = (e, t) => {
  !e || !t.trim() || e.classList.add(...wo(t));
}, Ot = (e, t) => {
  !e || !t.trim() || e.classList.remove(...wo(t));
};
function Di(e, t = "px") {
  if (!e)
    return "";
  if (we(e) || Ei(e))
    return `${e}${t}`;
  if (ge(e))
    return e;
  xe(Si, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.1.0 */
var ve = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Ii = {
  name: "CaretRight"
}, Ai = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fi = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
), Bi = [
  Fi
];
function Li(e, t, n, o, r, a) {
  return b(), k("svg", Ai, Bi);
}
var ji = /* @__PURE__ */ ve(Ii, [["render", Li], ["__file", "caret-right.vue"]]), Ki = {
  name: "CircleCloseFilled"
}, zi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mi = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
), Ri = [
  Mi
];
function Vi(e, t, n, o, r, a) {
  return b(), k("svg", zi, Ri);
}
var No = /* @__PURE__ */ ve(Ki, [["render", Vi], ["__file", "circle-close-filled.vue"]]), Ui = {
  name: "Close"
}, Hi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gi = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
), qi = [
  Gi
];
function Wi(e, t, n, o, r, a) {
  return b(), k("svg", Hi, qi);
}
var Yi = /* @__PURE__ */ ve(Ui, [["render", Wi], ["__file", "close.vue"]]), Ji = {
  name: "InfoFilled"
}, Zi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qi = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
), Xi = [
  Qi
];
function ed(e, t, n, o, r, a) {
  return b(), k("svg", Zi, Xi);
}
var _o = /* @__PURE__ */ ve(Ji, [["render", ed], ["__file", "info-filled.vue"]]), td = {
  name: "Loading"
}, nd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, od = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
), rd = [
  od
];
function ad(e, t, n, o, r, a) {
  return b(), k("svg", nd, rd);
}
var sd = /* @__PURE__ */ ve(td, [["render", ad], ["__file", "loading.vue"]]), ld = {
  name: "Search"
}, id = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dd = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
), ud = [
  dd
];
function cd(e, t, n, o, r, a) {
  return b(), k("svg", id, ud);
}
var fd = /* @__PURE__ */ ve(ld, [["render", cd], ["__file", "search.vue"]]), pd = {
  name: "SuccessFilled"
}, hd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gd = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
), vd = [
  gd
];
function md(e, t, n, o, r, a) {
  return b(), k("svg", hd, vd);
}
var ko = /* @__PURE__ */ ve(pd, [["render", md], ["__file", "success-filled.vue"]]), yd = {
  name: "WarningFilled"
}, bd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cd = /* @__PURE__ */ K(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
), wd = [
  Cd
];
function Nd(e, t, n, o, r, a) {
  return b(), k("svg", bd, wd);
}
var $o = /* @__PURE__ */ ve(yd, [["render", Nd], ["__file", "warning-filled.vue"]]);
const xo = "__epPropKey", se = (e) => e, _d = (e) => Ct(e) && !!e[xo], To = (e, t) => {
  if (!Ct(e) || _d(e))
    return e;
  const { values: n, required: o, default: r, type: a, validator: s } = e, d = {
    type: a,
    required: !!o,
    validator: n || s ? (i) => {
      let u = !1, h = [];
      if (n && (h = Array.from(n), Ye(e, "default") && h.push(r), u || (u = h.includes(i))), s && (u || (u = s(i))), !u && h.length > 0) {
        const f = [...new Set(h)].map((g) => JSON.stringify(g)).join(", ");
        lr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(i)}.`);
      }
      return u;
    } : void 0,
    [xo]: !0
  };
  return Ye(e, "default") && (d.default = r), d;
}, Xe = (e) => Ci(Object.entries(e).map(([t, n]) => [
  t,
  To(n, t)
])), Eo = se([
  String,
  Object,
  Function
]), kd = {
  Close: Yi,
  SuccessFilled: ko,
  InfoFilled: _o,
  WarningFilled: $o,
  CircleCloseFilled: No
}, Gn = {
  success: ko,
  warning: $o,
  error: No,
  info: _o
}, on = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, $d = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Oo = (e) => (e.install = Pr, e), pe = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, kt = "update:modelValue", xd = ["", "default", "small", "large"], Td = (e) => e;
var Ed = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const Od = (e) => (t, n) => Sd(t, n, v(e)), Sd = (e, t, n) => hl(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var a;
  return `${(a = t == null ? void 0 : t[r]) != null ? a : `{${r}}`}`;
}), Pd = (e) => {
  const t = w(() => v(e).name), n = We(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: Od(e)
  };
}, So = Symbol("localeContextKey"), Po = (e) => {
  const t = e || z(So, x());
  return Pd(w(() => t.value || Ed));
}, jt = "el", Dd = "is-", me = (e, t, n, o, r) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), r && (a += `--${r}`), a;
}, Do = Symbol("namespaceContextKey"), Io = (e) => {
  const t = e || z(Do, x(jt));
  return w(() => v(t) || jt);
}, Z = (e, t) => {
  const n = Io(t);
  return {
    namespace: n,
    b: (c = "") => me(n.value, e, c, "", ""),
    e: (c) => c ? me(n.value, e, "", c, "") : "",
    m: (c) => c ? me(n.value, e, "", "", c) : "",
    be: (c, y) => c && y ? me(n.value, e, c, y, "") : "",
    em: (c, y) => c && y ? me(n.value, e, "", c, y) : "",
    bm: (c, y) => c && y ? me(n.value, e, c, "", y) : "",
    bem: (c, y, m) => c && y && m ? me(n.value, e, c, y, m) : "",
    is: (c, ...y) => {
      const m = y.length >= 1 ? y[0] : !0;
      return c && m ? `${Dd}${c}` : "";
    },
    cssVar: (c) => {
      const y = {};
      for (const m in c)
        c[m] && (y[`--${n.value}-${m}`] = c[m]);
      return y;
    },
    cssVarName: (c) => `--${n.value}-${c}`,
    cssVarBlock: (c) => {
      const y = {};
      for (const m in c)
        c[m] && (y[`--${n.value}-${e}-${m}`] = c[m]);
      return y;
    },
    cssVarBlockName: (c) => `--${n.value}-${e}-${c}`
  };
}, Ao = (e) => {
  const t = ie();
  return w(() => {
    var n, o;
    return (o = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, Kt = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Id = Symbol("elIdInjection"), Ad = () => ie() ? z(Id, Kt) : Kt, Fd = (e) => {
  const t = Ad();
  !Ke && t === Kt && xe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Io();
  return w(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, qn = x(0), Fo = 2e3, Bo = Symbol("zIndexContextKey"), Bd = (e) => {
  const t = e || z(Bo, void 0), n = w(() => {
    const a = v(t);
    return we(a) ? a : Fo;
  }), o = w(() => n.value + qn.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (qn.value++, o.value)
  };
}, rn = To({
  type: String,
  values: xd,
  required: !1
}), Lo = Symbol("size"), Ld = () => {
  const e = z(Lo, {});
  return w(() => v(e.size) || "");
}, jo = Symbol(), gt = x();
function Ko(e, t = void 0) {
  const n = ie() ? z(jo, gt) : gt;
  return e ? w(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function jd(e, t) {
  const n = Ko(), o = Z(e, w(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || jt;
  })), r = Po(w(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), a = Bd(w(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Fo;
  })), s = w(() => {
    var l;
    return v(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return zo(w(() => v(n) || {})), {
    ns: o,
    locale: r,
    zIndex: a,
    size: s
  };
}
const zo = (e, t, n = !1) => {
  var o;
  const r = !!ie(), a = r ? Ko() : void 0, s = (o = t == null ? void 0 : t.provide) != null ? o : r ? Ce : void 0;
  if (!s) {
    xe("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = w(() => {
    const d = v(e);
    return a != null && a.value ? Kd(a.value, d) : d;
  });
  return s(jo, l), s(So, w(() => l.value.locale)), s(Do, w(() => l.value.namespace)), s(Bo, w(() => l.value.zIndex)), s(Lo, {
    size: w(() => l.value.size || "")
  }), (n || !gt.value) && (gt.value = l.value), l;
}, Kd = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Hn(e), ...Hn(t)])], r = {};
  for (const a of o)
    r[a] = (n = t[a]) != null ? n : e[a];
  return r;
}, zd = Xe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: se(Object)
  },
  size: rn,
  button: {
    type: se(Object)
  },
  experimentalFeatures: {
    type: se(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: se(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), zt = {};
j({
  name: "ElConfigProvider",
  props: zd,
  setup(e, { slots: t }) {
    R(() => e.message, (o) => {
      Object.assign(zt, o != null ? o : {});
    }, { immediate: !0, deep: !0 });
    const n = zo(e);
    return () => G(t, "default", { config: n == null ? void 0 : n.value });
  }
});
var re = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const Md = Xe({
  size: {
    type: se([Number, String])
  },
  color: {
    type: String
  }
}), Rd = j({
  name: "ElIcon",
  inheritAttrs: !1
}), Vd = /* @__PURE__ */ j({
  ...Rd,
  props: Md,
  setup(e) {
    const t = e, n = Z("icon"), o = w(() => {
      const { size: r, color: a } = t;
      return !r && !a ? {} : {
        fontSize: ht(r) ? void 0 : Di(r),
        "--color": a
      };
    });
    return (r, a) => (b(), k("i", Xn({
      class: v(n).b(),
      style: v(o)
    }, r.$attrs), [
      G(r.$slots, "default")
    ], 16));
  }
});
var Ud = /* @__PURE__ */ re(Vd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Mt = on(Ud), an = Symbol("formContextKey"), sn = Symbol("formItemContextKey"), Wn = (e, t = {}) => {
  const n = x(void 0), o = t.prop ? n : Ao("size"), r = t.global ? n : Ld(), a = t.form ? { size: void 0 } : z(an, void 0), s = t.formItem ? { size: void 0 } : z(sn, void 0);
  return w(() => o.value || v(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || r.value || "");
}, Hd = (e) => {
  const t = Ao("disabled"), n = z(an, void 0);
  return w(() => t.value || v(e) || (n == null ? void 0 : n.disabled) || !1);
}, ln = () => {
  const e = z(an, void 0), t = z(sn, void 0);
  return {
    form: e,
    formItem: t
  };
}, Mo = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = x(!1)), o || (o = x(!1));
  const r = x();
  let a;
  const s = w(() => {
    var l;
    return !!(!e.label && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return je(() => {
    a = R([ir(e, "id"), n], ([l, d]) => {
      const i = l != null ? l : d ? void 0 : Fd().value;
      i !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(o != null && o.value) && !d && i && t.addInputId(i)), r.value = i);
    }, { immediate: !0 });
  }), eo(() => {
    a && a(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: s,
    inputId: r
  };
}, Gd = Xe({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), qd = ["textContent"], Wd = j({
  name: "ElBadge"
}), Yd = /* @__PURE__ */ j({
  ...Wd,
  props: Gd,
  setup(e, { expose: t }) {
    const n = e, o = Z("badge"), r = w(() => n.isDot ? "" : we(n.value) && we(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return t({
      content: r
    }), (a, s) => (b(), k("div", {
      class: _(v(o).b())
    }, [
      G(a.$slots, "default"),
      q(Gt, {
        name: `${v(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: A(() => [
          ne(K("sup", {
            class: _([
              v(o).e("content"),
              v(o).em("content", a.type),
              v(o).is("fixed", !!a.$slots.default),
              v(o).is("dot", a.isDot)
            ]),
            textContent: te(v(r))
          }, null, 10, qd), [
            [De, !a.hidden && (v(r) || a.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Jd = /* @__PURE__ */ re(Yd, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Zd = on(Jd), Ro = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: rn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Vo = {
  [kt]: (e) => ge(e) || we(e) || St(e),
  change: (e) => ge(e) || we(e) || St(e)
}, Me = Symbol("checkboxGroupContextKey"), Qd = ({
  model: e,
  isChecked: t
}) => {
  const n = z(Me, void 0), o = w(() => {
    var a, s;
    const l = (a = n == null ? void 0 : n.max) == null ? void 0 : a.value, d = (s = n == null ? void 0 : n.min) == null ? void 0 : s.value;
    return !ht(l) && e.value.length >= l && !t.value || !ht(d) && e.value.length <= d && t.value;
  });
  return {
    isDisabled: Hd(w(() => (n == null ? void 0 : n.disabled.value) || o.value)),
    isLimitDisabled: o
  };
}, Xd = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: r,
  isLabeledByFormItem: a
}) => {
  const s = z(Me, void 0), { formItem: l } = ln(), { emit: d } = ie();
  function i(p) {
    var c, y;
    return p === e.trueLabel || p === !0 ? (c = e.trueLabel) != null ? c : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function u(p, c) {
    d("change", i(p), c);
  }
  function h(p) {
    if (n.value)
      return;
    const c = p.target;
    d("change", i(c.checked), p);
  }
  async function f(p) {
    n.value || !o.value && !r.value && a.value && (p.composedPath().some((m) => m.tagName === "LABEL") || (t.value = i([!1, e.falseLabel].includes(t.value)), await qe(), u(t.value, p)));
  }
  const g = w(() => (s == null ? void 0 : s.validateEvent) || e.validateEvent);
  return R(() => e.modelValue, () => {
    g.value && (l == null || l.validate("change").catch((p) => xe(p)));
  }), {
    handleChange: h,
    onClickRoot: f
  };
}, eu = (e) => {
  const t = x(!1), { emit: n } = ie(), o = z(Me, void 0), r = w(() => ht(o) === !1), a = x(!1);
  return {
    model: w({
      get() {
        var l, d;
        return r.value ? (l = o == null ? void 0 : o.modelValue) == null ? void 0 : l.value : (d = e.modelValue) != null ? d : t.value;
      },
      set(l) {
        var d, i;
        r.value && Je(l) ? (a.value = ((d = o == null ? void 0 : o.max) == null ? void 0 : d.value) !== void 0 && l.length > (o == null ? void 0 : o.max.value), a.value === !1 && ((i = o == null ? void 0 : o.changeEvent) == null || i.call(o, l))) : (n(kt, l), t.value = l);
      }
    }),
    isGroup: r,
    isLimitExceeded: a
  };
}, tu = (e, t, { model: n }) => {
  const o = z(Me, void 0), r = x(!1), a = w(() => {
    const i = n.value;
    return St(i) ? i : Je(i) ? Ct(e.label) ? i.map(cn).some((u) => wi(u, e.label)) : i.map(cn).includes(e.label) : i != null ? i === e.trueLabel : !!i;
  }), s = Wn(w(() => {
    var i;
    return (i = o == null ? void 0 : o.size) == null ? void 0 : i.value;
  }), {
    prop: !0
  }), l = Wn(w(() => {
    var i;
    return (i = o == null ? void 0 : o.size) == null ? void 0 : i.value;
  })), d = w(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: s,
    isChecked: a,
    isFocused: r,
    checkboxSize: l,
    hasOwnLabel: d
  };
}, nu = (e, { model: t }) => {
  function n() {
    Je(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Uo = (e, t) => {
  const { formItem: n } = ln(), { model: o, isGroup: r, isLimitExceeded: a } = eu(e), {
    isFocused: s,
    isChecked: l,
    checkboxButtonSize: d,
    checkboxSize: i,
    hasOwnLabel: u
  } = tu(e, t, { model: o }), { isDisabled: h } = Qd({ model: o, isChecked: l }), { inputId: f, isLabeledByFormItem: g } = Mo(e, {
    formItemContext: n,
    disableIdGeneration: u,
    disableIdManagement: r
  }), { handleChange: p, onClickRoot: c } = Xd(e, {
    model: o,
    isLimitExceeded: a,
    hasOwnLabel: u,
    isDisabled: h,
    isLabeledByFormItem: g
  });
  return nu(e, { model: o }), {
    inputId: f,
    isLabeledByFormItem: g,
    isChecked: l,
    isDisabled: h,
    isFocused: s,
    checkboxButtonSize: d,
    checkboxSize: i,
    hasOwnLabel: u,
    model: o,
    handleChange: p,
    onClickRoot: c
  };
}, ou = ["tabindex", "role", "aria-checked"], ru = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], au = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], su = j({
  name: "ElCheckbox"
}), lu = /* @__PURE__ */ j({
  ...su,
  props: Ro,
  emits: Vo,
  setup(e) {
    const t = e, n = to(), {
      inputId: o,
      isLabeledByFormItem: r,
      isChecked: a,
      isDisabled: s,
      isFocused: l,
      checkboxSize: d,
      hasOwnLabel: i,
      model: u,
      handleChange: h,
      onClickRoot: f
    } = Uo(t, n), g = Z("checkbox"), p = w(() => [
      g.b(),
      g.m(d.value),
      g.is("disabled", s.value),
      g.is("bordered", t.border),
      g.is("checked", a.value)
    ]), c = w(() => [
      g.e("input"),
      g.is("disabled", s.value),
      g.is("checked", a.value),
      g.is("indeterminate", t.indeterminate),
      g.is("focus", l.value)
    ]);
    return (y, m) => (b(), O(mt(!v(i) && v(r) ? "span" : "label"), {
      class: _(v(p)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: v(f)
    }, {
      default: A(() => [
        K("span", {
          class: _(v(c)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? ne((b(), k("input", {
            key: 0,
            id: v(o),
            "onUpdate:modelValue": m[0] || (m[0] = ($) => We(u) ? u.value = $ : null),
            class: _(v(g).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: v(s),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: m[1] || (m[1] = (...$) => v(h) && v(h)(...$)),
            onFocus: m[2] || (m[2] = ($) => l.value = !0),
            onBlur: m[3] || (m[3] = ($) => l.value = !1)
          }, null, 42, ru)), [
            [dt, v(u)]
          ]) : ne((b(), k("input", {
            key: 1,
            id: v(o),
            "onUpdate:modelValue": m[4] || (m[4] = ($) => We(u) ? u.value = $ : null),
            class: _(v(g).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: v(s),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: m[5] || (m[5] = (...$) => v(h) && v(h)(...$)),
            onFocus: m[6] || (m[6] = ($) => l.value = !0),
            onBlur: m[7] || (m[7] = ($) => l.value = !1)
          }, null, 42, au)), [
            [dt, v(u)]
          ]),
          K("span", {
            class: _(v(g).e("inner"))
          }, null, 2)
        ], 10, ou),
        v(i) ? (b(), k("span", {
          key: 0,
          class: _(v(g).e("label"))
        }, [
          G(y.$slots, "default"),
          y.$slots.default ? U("v-if", !0) : (b(), k(J, { key: 0 }, [
            Ge(te(y.label), 1)
          ], 64))
        ], 2)) : U("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var iu = /* @__PURE__ */ re(lu, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const du = ["name", "tabindex", "disabled", "true-value", "false-value"], uu = ["name", "tabindex", "disabled", "value"], cu = j({
  name: "ElCheckboxButton"
}), fu = /* @__PURE__ */ j({
  ...cu,
  props: Ro,
  emits: Vo,
  setup(e) {
    const t = e, n = to(), {
      isFocused: o,
      isChecked: r,
      isDisabled: a,
      checkboxButtonSize: s,
      model: l,
      handleChange: d
    } = Uo(t, n), i = z(Me, void 0), u = Z("checkbox"), h = w(() => {
      var g, p, c, y;
      const m = (p = (g = i == null ? void 0 : i.fill) == null ? void 0 : g.value) != null ? p : "";
      return {
        backgroundColor: m,
        borderColor: m,
        color: (y = (c = i == null ? void 0 : i.textColor) == null ? void 0 : c.value) != null ? y : "",
        boxShadow: m ? `-1px 0 0 0 ${m}` : void 0
      };
    }), f = w(() => [
      u.b("button"),
      u.bm("button", s.value),
      u.is("disabled", a.value),
      u.is("checked", r.value),
      u.is("focus", o.value)
    ]);
    return (g, p) => (b(), k("label", {
      class: _(v(f))
    }, [
      g.trueLabel || g.falseLabel ? ne((b(), k("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (c) => We(l) ? l.value = c : null),
        class: _(v(u).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: v(a),
        "true-value": g.trueLabel,
        "false-value": g.falseLabel,
        onChange: p[1] || (p[1] = (...c) => v(d) && v(d)(...c)),
        onFocus: p[2] || (p[2] = (c) => o.value = !0),
        onBlur: p[3] || (p[3] = (c) => o.value = !1)
      }, null, 42, du)), [
        [dt, v(l)]
      ]) : ne((b(), k("input", {
        key: 1,
        "onUpdate:modelValue": p[4] || (p[4] = (c) => We(l) ? l.value = c : null),
        class: _(v(u).be("button", "original")),
        type: "checkbox",
        name: g.name,
        tabindex: g.tabindex,
        disabled: v(a),
        value: g.label,
        onChange: p[5] || (p[5] = (...c) => v(d) && v(d)(...c)),
        onFocus: p[6] || (p[6] = (c) => o.value = !0),
        onBlur: p[7] || (p[7] = (c) => o.value = !1)
      }, null, 42, uu)), [
        [dt, v(l)]
      ]),
      g.$slots.default || g.label ? (b(), k("span", {
        key: 2,
        class: _(v(u).be("button", "inner")),
        style: yt(v(r) ? v(h) : void 0)
      }, [
        G(g.$slots, "default", {}, () => [
          Ge(te(g.label), 1)
        ])
      ], 6)) : U("v-if", !0)
    ], 2));
  }
});
var Ho = /* @__PURE__ */ re(fu, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const pu = Xe({
  modelValue: {
    type: se(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: rn,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), hu = {
  [kt]: (e) => Je(e),
  change: (e) => Je(e)
}, gu = j({
  name: "ElCheckboxGroup"
}), vu = /* @__PURE__ */ j({
  ...gu,
  props: pu,
  emits: hu,
  setup(e, { emit: t }) {
    const n = e, o = Z("checkbox"), { formItem: r } = ln(), { inputId: a, isLabeledByFormItem: s } = Mo(n, {
      formItemContext: r
    }), l = async (i) => {
      t(kt, i), await qe(), t("change", i);
    }, d = w({
      get() {
        return n.modelValue;
      },
      set(i) {
        l(i);
      }
    });
    return Ce(Me, {
      ...xi(dr(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: d,
      changeEvent: l
    }), R(() => n.modelValue, () => {
      n.validateEvent && (r == null || r.validate("change").catch((i) => xe(i)));
    }), (i, u) => {
      var h;
      return b(), O(mt(i.tag), {
        id: v(a),
        class: _(v(o).b("group")),
        role: "group",
        "aria-label": v(s) ? void 0 : i.label || "checkbox-group",
        "aria-labelledby": v(s) ? (h = v(r)) == null ? void 0 : h.labelId : void 0
      }, {
        default: A(() => [
          G(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Go = /* @__PURE__ */ re(vu, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const mu = on(iu, {
  CheckboxButton: Ho,
  CheckboxGroup: Go
});
Oo(Ho);
Oo(Go);
const yu = j({
  name: "ElCollapseTransition"
}), bu = /* @__PURE__ */ j({
  ...yu,
  setup(e) {
    const t = Z("collapse-transition"), n = {
      beforeEnter(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0;
      },
      enter(o) {
        o.dataset.oldOverflow = o.style.overflow, o.scrollHeight !== 0 ? (o.style.maxHeight = `${o.scrollHeight}px`, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom) : (o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom), o.style.overflow = "hidden";
      },
      afterEnter(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow;
      },
      beforeLeave(o) {
        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden";
      },
      leave(o) {
        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0);
      },
      afterLeave(o) {
        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom;
      }
    };
    return (o, r) => (b(), O(Gt, Xn({
      name: v(t).b()
    }, ur(n)), {
      default: A(() => [
        G(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
var at = /* @__PURE__ */ re(bu, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);
at.install = (e) => {
  e.component(at.name, at);
};
const Cu = at, Pe = "$treeNodeId", Yn = function(e, t) {
  !t || t[Pe] || Object.defineProperty(t, Pe, {
    value: e.id,
    enumerable: !1,
    configurable: !1,
    writable: !1
  });
}, dn = function(e, t) {
  return e ? t[e] : t[Pe];
}, Rt = (e, t, n) => {
  const o = e.value.currentNode;
  n();
  const r = e.value.currentNode;
  o !== r && t("current-change", r ? r.data : null, r);
}, Vt = (e) => {
  let t = !0, n = !0, o = !0;
  for (let r = 0, a = e.length; r < a; r++) {
    const s = e[r];
    (s.checked !== !0 || s.indeterminate) && (t = !1, s.disabled || (o = !1)), (s.checked !== !1 || s.indeterminate) && (n = !1);
  }
  return { all: t, none: n, allWithoutDisable: o, half: !t && !n };
}, st = function(e) {
  if (e.childNodes.length === 0 || e.loading)
    return;
  const { all: t, none: n, half: o } = Vt(e.childNodes);
  t ? (e.checked = !0, e.indeterminate = !1) : o ? (e.checked = !1, e.indeterminate = !0) : n && (e.checked = !1, e.indeterminate = !1);
  const r = e.parent;
  !r || r.level === 0 || e.store.checkStrictly || st(r);
}, rt = function(e, t) {
  const n = e.store.props, o = e.data || {}, r = n[t];
  if (typeof r == "function")
    return r(o, e);
  if (typeof r == "string")
    return o[r];
  if (typeof r > "u") {
    const a = o[t];
    return a === void 0 ? "" : a;
  }
};
let wu = 0;
class be {
  constructor(t) {
    this.id = wu++, this.text = null, this.checked = !1, this.indeterminate = !1, this.data = null, this.expanded = !1, this.parent = null, this.visible = !0, this.isCurrent = !1, this.canFocus = !1;
    for (const n in t)
      Ye(t, n) && (this[n] = t[n]);
    this.level = 0, this.loaded = !1, this.childNodes = [], this.loading = !1, this.parent && (this.level = this.parent.level + 1);
  }
  initialize() {
    const t = this.store;
    if (!t)
      throw new Error("[Node]store is required!");
    t.registerNode(this);
    const n = t.props;
    if (n && typeof n.isLeaf < "u") {
      const a = rt(this, "isLeaf");
      typeof a == "boolean" && (this.isLeafByUser = a);
    }
    if (t.lazy !== !0 && this.data ? (this.setData(this.data), t.defaultExpandAll && (this.expanded = !0, this.canFocus = !0)) : this.level > 0 && t.lazy && t.defaultExpandAll && this.expand(), Array.isArray(this.data) || Yn(this, this.data), !this.data)
      return;
    const o = t.defaultExpandedKeys, r = t.key;
    r && o && o.includes(this.key) && this.expand(null, t.autoExpandParent), r && t.currentNodeKey !== void 0 && this.key === t.currentNodeKey && (t.currentNode = this, t.currentNode.isCurrent = !0), t.lazy && t._initDefaultCheckedNode(this), this.updateLeafState(), this.parent && (this.level === 1 || this.parent.expanded === !0) && (this.canFocus = !0);
  }
  setData(t) {
    Array.isArray(t) || Yn(this, t), this.data = t, this.childNodes = [];
    let n;
    this.level === 0 && Array.isArray(this.data) ? n = this.data : n = rt(this, "children") || [];
    for (let o = 0, r = n.length; o < r; o++)
      this.insertChild({ data: n[o] });
  }
  get label() {
    return rt(this, "label");
  }
  get key() {
    const t = this.store.key;
    return this.data ? this.data[t] : null;
  }
  get disabled() {
    return rt(this, "disabled");
  }
  get nextSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return t.childNodes[n + 1];
    }
    return null;
  }
  get previousSibling() {
    const t = this.parent;
    if (t) {
      const n = t.childNodes.indexOf(this);
      if (n > -1)
        return n > 0 ? t.childNodes[n - 1] : null;
    }
    return null;
  }
  contains(t, n = !0) {
    return (this.childNodes || []).some((o) => o === t || n && o.contains(t));
  }
  remove() {
    const t = this.parent;
    t && t.removeChild(this);
  }
  insertChild(t, n, o) {
    if (!t)
      throw new Error("InsertChild error: child is required.");
    if (!(t instanceof be)) {
      if (!o) {
        const r = this.getChildren(!0);
        r.includes(t.data) || (typeof n > "u" || n < 0 ? r.push(t.data) : r.splice(n, 0, t.data));
      }
      Object.assign(t, {
        parent: this,
        store: this.store
      }), t = Ht(new be(t)), t instanceof be && t.initialize();
    }
    t.level = this.level + 1, typeof n > "u" || n < 0 ? this.childNodes.push(t) : this.childNodes.splice(n, 0, t), this.updateLeafState();
  }
  insertBefore(t, n) {
    let o;
    n && (o = this.childNodes.indexOf(n)), this.insertChild(t, o);
  }
  insertAfter(t, n) {
    let o;
    n && (o = this.childNodes.indexOf(n), o !== -1 && (o += 1)), this.insertChild(t, o);
  }
  removeChild(t) {
    const n = this.getChildren() || [], o = n.indexOf(t.data);
    o > -1 && n.splice(o, 1);
    const r = this.childNodes.indexOf(t);
    r > -1 && (this.store && this.store.deregisterNode(t), t.parent = null, this.childNodes.splice(r, 1)), this.updateLeafState();
  }
  removeChildByData(t) {
    let n = null;
    for (let o = 0; o < this.childNodes.length; o++)
      if (this.childNodes[o].data === t) {
        n = this.childNodes[o];
        break;
      }
    n && this.removeChild(n);
  }
  expand(t, n) {
    const o = () => {
      if (n) {
        let r = this.parent;
        for (; r.level > 0; )
          r.expanded = !0, r = r.parent;
      }
      this.expanded = !0, t && t(), this.childNodes.forEach((r) => {
        r.canFocus = !0;
      });
    };
    this.shouldLoadData() ? this.loadData((r) => {
      Array.isArray(r) && (this.checked ? this.setChecked(!0, !0) : this.store.checkStrictly || st(this), o());
    }) : o();
  }
  doCreateChildren(t, n = {}) {
    t.forEach((o) => {
      this.insertChild(Object.assign({ data: o }, n), void 0, !0);
    });
  }
  collapse() {
    this.expanded = !1, this.childNodes.forEach((t) => {
      t.canFocus = !1;
    });
  }
  shouldLoadData() {
    return this.store.lazy === !0 && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === !0 && this.loaded !== !0 && typeof this.isLeafByUser < "u") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const t = this.childNodes;
    if (!this.store.lazy || this.store.lazy === !0 && this.loaded === !0) {
      this.isLeaf = !t || t.length === 0;
      return;
    }
    this.isLeaf = !1;
  }
  setChecked(t, n, o, r) {
    if (this.indeterminate = t === "half", this.checked = t === !0, this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all: s, allWithoutDisable: l } = Vt(this.childNodes);
      !this.isLeaf && !s && l && (this.checked = !1, t = !1);
      const d = () => {
        if (n) {
          const i = this.childNodes;
          for (let f = 0, g = i.length; f < g; f++) {
            const p = i[f];
            r = r || t !== !1;
            const c = p.disabled ? p.checked : r;
            p.setChecked(c, n, !0, r);
          }
          const { half: u, all: h } = Vt(i);
          h || (this.checked = h, this.indeterminate = u);
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          d(), st(this);
        }, {
          checked: t !== !1
        });
        return;
      } else
        d();
    }
    const a = this.parent;
    !a || a.level === 0 || o || st(a);
  }
  getChildren(t = !1) {
    if (this.level === 0)
      return this.data;
    const n = this.data;
    if (!n)
      return null;
    const o = this.store.props;
    let r = "children";
    return o && (r = o.children || "children"), n[r] === void 0 && (n[r] = null), t && !n[r] && (n[r] = []), n[r];
  }
  updateChildren() {
    const t = this.getChildren() || [], n = this.childNodes.map((a) => a.data), o = {}, r = [];
    t.forEach((a, s) => {
      const l = a[Pe];
      !!l && n.findIndex((i) => i[Pe] === l) >= 0 ? o[l] = { index: s, data: a } : r.push({ index: s, data: a });
    }), this.store.lazy || n.forEach((a) => {
      o[a[Pe]] || this.removeChildByData(a);
    }), r.forEach(({ index: a, data: s }) => {
      this.insertChild({ data: s }, a);
    }), this.updateLeafState();
  }
  loadData(t, n = {}) {
    if (this.store.lazy === !0 && this.store.load && !this.loaded && (!this.loading || Object.keys(n).length)) {
      this.loading = !0;
      const o = (r) => {
        this.childNodes = [], this.doCreateChildren(r, n), this.loaded = !0, this.loading = !1, this.updateLeafState(), t && t.call(this, r);
      };
      this.store.load(this, o);
    } else
      t && t.call(this);
  }
}
class Nu {
  constructor(t) {
    this.currentNode = null, this.currentNodeKey = null;
    for (const n in t)
      Ye(t, n) && (this[n] = t[n]);
    this.nodesMap = {};
  }
  initialize() {
    if (this.root = new be({
      data: this.data,
      store: this
    }), this.root.initialize(), this.lazy && this.load) {
      const t = this.load;
      t(this.root, (n) => {
        this.root.doCreateChildren(n), this._initDefaultCheckedNodes();
      });
    } else
      this._initDefaultCheckedNodes();
  }
  filter(t) {
    const n = this.filterNodeMethod, o = this.lazy, r = function(a) {
      const s = a.root ? a.root.childNodes : a.childNodes;
      if (s.forEach((l) => {
        l.visible = n.call(l, t, l.data, l), r(l);
      }), !a.visible && s.length) {
        let l = !0;
        l = !s.some((d) => d.visible), a.root ? a.root.visible = l === !1 : a.visible = l === !1;
      }
      !t || a.visible && !a.isLeaf && !o && a.expand();
    };
    r(this);
  }
  setData(t) {
    t !== this.root.data ? (this.root.setData(t), this._initDefaultCheckedNodes()) : this.root.updateChildren();
  }
  getNode(t) {
    if (t instanceof be)
      return t;
    const n = Ct(t) ? dn(this.key, t) : t;
    return this.nodesMap[n] || null;
  }
  insertBefore(t, n) {
    const o = this.getNode(n);
    o.parent.insertBefore({ data: t }, o);
  }
  insertAfter(t, n) {
    const o = this.getNode(n);
    o.parent.insertAfter({ data: t }, o);
  }
  remove(t) {
    const n = this.getNode(t);
    n && n.parent && (n === this.currentNode && (this.currentNode = null), n.parent.removeChild(n));
  }
  append(t, n) {
    const o = n ? this.getNode(n) : this.root;
    o && o.insertChild({ data: t });
  }
  _initDefaultCheckedNodes() {
    const t = this.defaultCheckedKeys || [], n = this.nodesMap;
    t.forEach((o) => {
      const r = n[o];
      r && r.setChecked(!0, !this.checkStrictly);
    });
  }
  _initDefaultCheckedNode(t) {
    (this.defaultCheckedKeys || []).includes(t.key) && t.setChecked(!0, !this.checkStrictly);
  }
  setDefaultCheckedKey(t) {
    t !== this.defaultCheckedKeys && (this.defaultCheckedKeys = t, this._initDefaultCheckedNodes());
  }
  registerNode(t) {
    const n = this.key;
    !t || !t.data || (n ? t.key !== void 0 && (this.nodesMap[t.key] = t) : this.nodesMap[t.id] = t);
  }
  deregisterNode(t) {
    !this.key || !t || !t.data || (t.childNodes.forEach((o) => {
      this.deregisterNode(o);
    }), delete this.nodesMap[t.key]);
  }
  getCheckedNodes(t = !1, n = !1) {
    const o = [], r = function(a) {
      (a.root ? a.root.childNodes : a.childNodes).forEach((l) => {
        (l.checked || n && l.indeterminate) && (!t || t && l.isLeaf) && o.push(l.data), r(l);
      });
    };
    return r(this), o;
  }
  getCheckedKeys(t = !1) {
    return this.getCheckedNodes(t).map((n) => (n || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const t = [], n = function(o) {
      (o.root ? o.root.childNodes : o.childNodes).forEach((a) => {
        a.indeterminate && t.push(a.data), n(a);
      });
    };
    return n(this), t;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((t) => (t || {})[this.key]);
  }
  _getAllNodes() {
    const t = [], n = this.nodesMap;
    for (const o in n)
      Ye(n, o) && t.push(n[o]);
    return t;
  }
  updateChildren(t, n) {
    const o = this.nodesMap[t];
    if (!o)
      return;
    const r = o.childNodes;
    for (let a = r.length - 1; a >= 0; a--) {
      const s = r[a];
      this.remove(s.data);
    }
    for (let a = 0, s = n.length; a < s; a++) {
      const l = n[a];
      this.append(l, o.data);
    }
  }
  _setCheckedKeys(t, n = !1, o) {
    const r = this._getAllNodes().sort((l, d) => d.level - l.level), a = /* @__PURE__ */ Object.create(null), s = Object.keys(o);
    r.forEach((l) => l.setChecked(!1, !1));
    for (let l = 0, d = r.length; l < d; l++) {
      const i = r[l], u = i.data[t].toString();
      if (!s.includes(u)) {
        i.checked && !a[u] && i.setChecked(!1, !1);
        continue;
      }
      let f = i.parent;
      for (; f && f.level > 0; )
        a[f.data[t]] = !0, f = f.parent;
      if (i.isLeaf || this.checkStrictly) {
        i.setChecked(!0, !1);
        continue;
      }
      if (i.setChecked(!0, !0), n) {
        i.setChecked(!1, !1);
        const g = function(p) {
          p.childNodes.forEach((y) => {
            y.isLeaf || y.setChecked(!1, !1), g(y);
          });
        };
        g(i);
      }
    }
  }
  setCheckedNodes(t, n = !1) {
    const o = this.key, r = {};
    t.forEach((a) => {
      r[(a || {})[o]] = !0;
    }), this._setCheckedKeys(o, n, r);
  }
  setCheckedKeys(t, n = !1) {
    this.defaultCheckedKeys = t;
    const o = this.key, r = {};
    t.forEach((a) => {
      r[a] = !0;
    }), this._setCheckedKeys(o, n, r);
  }
  setDefaultExpandedKeys(t) {
    t = t || [], this.defaultExpandedKeys = t, t.forEach((n) => {
      const o = this.getNode(n);
      o && o.expand(null, this.autoExpandParent);
    });
  }
  setChecked(t, n, o) {
    const r = this.getNode(t);
    r && r.setChecked(!!n, o);
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(t) {
    const n = this.currentNode;
    n && (n.isCurrent = !1), this.currentNode = t, this.currentNode.isCurrent = !0;
  }
  setUserCurrentNode(t, n = !0) {
    const o = t[this.key], r = this.nodesMap[o];
    this.setCurrentNode(r), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0);
  }
  setCurrentNodeKey(t, n = !0) {
    if (t == null) {
      this.currentNode && (this.currentNode.isCurrent = !1), this.currentNode = null;
      return;
    }
    const o = this.getNode(t);
    o && (this.setCurrentNode(o), n && this.currentNode.level > 1 && this.currentNode.parent.expand(null, !0));
  }
}
const _u = j({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: !0
    },
    renderContent: Function
  },
  setup(e) {
    const t = Z("tree"), n = z("NodeInstance"), o = z("RootTree");
    return () => {
      const r = e.node, { data: a, store: s } = r;
      return e.renderContent ? e.renderContent(fn, { _self: n, node: r, data: a, store: s }) : o.ctx.slots.default ? o.ctx.slots.default({ node: r, data: a }) : fn("span", { class: t.be("node", "label") }, [r.label]);
    };
  }
});
var ku = /* @__PURE__ */ re(_u, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);
function qo(e) {
  const t = z("TreeNodeMap", null), n = {
    treeNodeExpand: (o) => {
      e.node !== o && e.node.collapse();
    },
    children: []
  };
  return t && t.children.push(n), Ce("TreeNodeMap", n), {
    broadcastExpanded: (o) => {
      if (!!e.accordion)
        for (const r of n.children)
          r.treeNodeExpand(o);
    }
  };
}
const Wo = Symbol("dragEvents");
function $u({ props: e, ctx: t, el$: n, dropIndicator$: o, store: r }) {
  const a = Z("tree"), s = x({
    showDropIndicator: !1,
    draggingNode: null,
    dropNode: null,
    allowDrop: !0,
    dropType: null
  });
  return Ce(Wo, {
    treeNodeDragStart: ({ event: u, treeNode: h }) => {
      if (typeof e.allowDrag == "function" && !e.allowDrag(h.node))
        return u.preventDefault(), !1;
      u.dataTransfer.effectAllowed = "move";
      try {
        u.dataTransfer.setData("text/plain", "");
      } catch {
      }
      s.value.draggingNode = h, t.emit("node-drag-start", h.node, u);
    },
    treeNodeDragOver: ({ event: u, treeNode: h }) => {
      const f = h, g = s.value.dropNode;
      g && g !== f && Ot(g.$el, a.is("drop-inner"));
      const p = s.value.draggingNode;
      if (!p || !f)
        return;
      let c = !0, y = !0, m = !0, $ = !0;
      typeof e.allowDrop == "function" && (c = e.allowDrop(p.node, f.node, "prev"), $ = y = e.allowDrop(p.node, f.node, "inner"), m = e.allowDrop(p.node, f.node, "next")), u.dataTransfer.dropEffect = y || c || m ? "move" : "none", (c || y || m) && g !== f && (g && t.emit("node-drag-leave", p.node, g.node, u), t.emit("node-drag-enter", p.node, f.node, u)), (c || y || m) && (s.value.dropNode = f), f.node.nextSibling === p.node && (m = !1), f.node.previousSibling === p.node && (c = !1), f.node.contains(p.node, !1) && (y = !1), (p.node === f.node || p.node.contains(f.node)) && (c = !1, y = !1, m = !1);
      const T = f.$el.getBoundingClientRect(), E = n.value.getBoundingClientRect();
      let P;
      const ae = c ? y ? 0.25 : m ? 0.45 : 1 : -1, S = m ? y ? 0.75 : c ? 0.55 : 0 : 1;
      let Y = -9999;
      const N = u.clientY - T.top;
      N < T.height * ae ? P = "before" : N > T.height * S ? P = "after" : y ? P = "inner" : P = "none";
      const L = f.$el.querySelector(`.${a.be("node", "expand-icon")}`).getBoundingClientRect(), M = o.value;
      P === "before" ? Y = L.top - E.top : P === "after" && (Y = L.bottom - E.top), M.style.top = `${Y}px`, M.style.left = `${L.right - E.left}px`, P === "inner" ? Pi(f.$el, a.is("drop-inner")) : Ot(f.$el, a.is("drop-inner")), s.value.showDropIndicator = P === "before" || P === "after", s.value.allowDrop = s.value.showDropIndicator || $, s.value.dropType = P, t.emit("node-drag-over", p.node, f.node, u);
    },
    treeNodeDragEnd: (u) => {
      const { draggingNode: h, dropType: f, dropNode: g } = s.value;
      if (u.preventDefault(), u.dataTransfer.dropEffect = "move", h && g) {
        const p = { data: h.node.data };
        f !== "none" && h.node.remove(), f === "before" ? g.node.parent.insertBefore(p, g.node) : f === "after" ? g.node.parent.insertAfter(p, g.node) : f === "inner" && g.node.insertChild(p), f !== "none" && r.value.registerNode(p), Ot(g.$el, a.is("drop-inner")), t.emit("node-drag-end", h.node, g.node, f, u), f !== "none" && t.emit("node-drop", h.node, g.node, f, u);
      }
      h && !g && t.emit("node-drag-end", h.node, null, f, u), s.value.showDropIndicator = !1, s.value.draggingNode = null, s.value.dropNode = null, s.value.allowDrop = !0;
    }
  }), {
    dragState: s
  };
}
const xu = j({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition: Cu,
    ElCheckbox: mu,
    NodeContent: ku,
    ElIcon: Mt,
    Loading: sd
  },
  props: {
    node: {
      type: be,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["node-expand"],
  setup(e, t) {
    const n = Z("tree"), { broadcastExpanded: o } = qo(e), r = z("RootTree"), a = x(!1), s = x(!1), l = x(null), d = x(null), i = x(null), u = z(Wo), h = ie();
    Ce("NodeInstance", h), r || xe("Tree", "Can not find node's tree."), e.node.expanded && (a.value = !0, s.value = !0);
    const f = r.props.children || "children";
    R(() => {
      const N = e.node.data[f];
      return N && [...N];
    }, () => {
      e.node.updateChildren();
    }), R(() => e.node.indeterminate, (N) => {
      c(e.node.checked, N);
    }), R(() => e.node.checked, (N) => {
      c(N, e.node.indeterminate);
    }), R(() => e.node.expanded, (N) => {
      qe(() => a.value = N), N && (s.value = !0);
    });
    const g = (N) => dn(r.props.nodeKey, N.data), p = (N) => {
      const L = e.props.class;
      if (!L)
        return {};
      let M;
      if (ut(L)) {
        const { data: Ee } = N;
        M = L(Ee, N);
      } else
        M = L;
      return ge(M) ? { [M]: !0 } : M;
    }, c = (N, L) => {
      (l.value !== N || d.value !== L) && r.ctx.emit("check-change", e.node.data, N, L), l.value = N, d.value = L;
    }, y = (N) => {
      Rt(r.store, r.ctx.emit, () => r.store.value.setCurrentNode(e.node)), r.currentNode.value = e.node, r.props.expandOnClickNode && $(), r.props.checkOnClickNode && !e.node.disabled && T(null, {
        target: { checked: !e.node.checked }
      }), r.ctx.emit("node-click", e.node.data, e.node, h, N);
    }, m = (N) => {
      r.instance.vnode.props.onNodeContextmenu && (N.stopPropagation(), N.preventDefault()), r.ctx.emit("node-contextmenu", N, e.node.data, e.node, h);
    }, $ = () => {
      e.node.isLeaf || (a.value ? (r.ctx.emit("node-collapse", e.node.data, e.node, h), e.node.collapse()) : (e.node.expand(), t.emit("node-expand", e.node.data, e.node, h)));
    }, T = (N, L) => {
      e.node.setChecked(L.target.checked, !r.props.checkStrictly), qe(() => {
        const M = r.store.value;
        r.ctx.emit("check", e.node.data, {
          checkedNodes: M.getCheckedNodes(),
          checkedKeys: M.getCheckedKeys(),
          halfCheckedNodes: M.getHalfCheckedNodes(),
          halfCheckedKeys: M.getHalfCheckedKeys()
        });
      });
    };
    return {
      ns: n,
      node$: i,
      tree: r,
      expanded: a,
      childNodeRendered: s,
      oldChecked: l,
      oldIndeterminate: d,
      getNodeKey: g,
      getNodeClass: p,
      handleSelectChange: c,
      handleClick: y,
      handleContextMenu: m,
      handleExpandIconClick: $,
      handleCheckChange: T,
      handleChildNodeExpand: (N, L, M) => {
        o(L), r.ctx.emit("node-expand", N, L, M);
      },
      handleDragStart: (N) => {
        !r.props.draggable || u.treeNodeDragStart({ event: N, treeNode: e });
      },
      handleDragOver: (N) => {
        N.preventDefault(), r.props.draggable && u.treeNodeDragOver({
          event: N,
          treeNode: { $el: i.value, node: e.node }
        });
      },
      handleDrop: (N) => {
        N.preventDefault();
      },
      handleDragEnd: (N) => {
        !r.props.draggable || u.treeNodeDragEnd(N);
      },
      CaretRight: ji
    };
  }
}), Tu = ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key"], Eu = ["aria-expanded"];
function Ou(e, t, n, o, r, a) {
  const s = I("el-icon"), l = I("el-checkbox"), d = I("loading"), i = I("node-content"), u = I("el-tree-node"), h = I("el-collapse-transition");
  return ne((b(), k("div", {
    ref: "node$",
    class: _([
      e.ns.b("node"),
      e.ns.is("expanded", e.expanded),
      e.ns.is("current", e.node.isCurrent),
      e.ns.is("hidden", !e.node.visible),
      e.ns.is("focusable", !e.node.disabled),
      e.ns.is("checked", !e.node.disabled && e.node.checked),
      e.getNodeClass(e.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": e.expanded,
    "aria-disabled": e.node.disabled,
    "aria-checked": e.node.checked,
    draggable: e.tree.props.draggable,
    "data-key": e.getNodeKey(e.node),
    onClick: t[1] || (t[1] = fe((...f) => e.handleClick && e.handleClick(...f), ["stop"])),
    onContextmenu: t[2] || (t[2] = (...f) => e.handleContextMenu && e.handleContextMenu(...f)),
    onDragstart: t[3] || (t[3] = fe((...f) => e.handleDragStart && e.handleDragStart(...f), ["stop"])),
    onDragover: t[4] || (t[4] = fe((...f) => e.handleDragOver && e.handleDragOver(...f), ["stop"])),
    onDragend: t[5] || (t[5] = fe((...f) => e.handleDragEnd && e.handleDragEnd(...f), ["stop"])),
    onDrop: t[6] || (t[6] = fe((...f) => e.handleDrop && e.handleDrop(...f), ["stop"]))
  }, [
    K("div", {
      class: _(e.ns.be("node", "content")),
      style: yt({ paddingLeft: (e.node.level - 1) * e.tree.props.indent + "px" })
    }, [
      e.tree.props.icon || e.CaretRight ? (b(), O(s, {
        key: 0,
        class: _([
          e.ns.be("node", "expand-icon"),
          e.ns.is("leaf", e.node.isLeaf),
          {
            expanded: !e.node.isLeaf && e.expanded
          }
        ]),
        onClick: fe(e.handleExpandIconClick, ["stop"])
      }, {
        default: A(() => [
          (b(), O(mt(e.tree.props.icon || e.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : U("v-if", !0),
      e.showCheckbox ? (b(), O(l, {
        key: 1,
        "model-value": e.node.checked,
        indeterminate: e.node.indeterminate,
        disabled: !!e.node.disabled,
        onClick: t[0] || (t[0] = fe(() => {
        }, ["stop"])),
        onChange: e.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : U("v-if", !0),
      e.node.loading ? (b(), O(s, {
        key: 2,
        class: _([e.ns.be("node", "loading-icon"), e.ns.is("loading")])
      }, {
        default: A(() => [
          q(d)
        ]),
        _: 1
      }, 8, ["class"])) : U("v-if", !0),
      q(i, {
        node: e.node,
        "render-content": e.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    q(h, null, {
      default: A(() => [
        !e.renderAfterExpand || e.childNodeRendered ? ne((b(), k("div", {
          key: 0,
          class: _(e.ns.be("node", "children")),
          role: "group",
          "aria-expanded": e.expanded
        }, [
          (b(!0), k(J, null, X(e.node.childNodes, (f) => (b(), O(u, {
            key: e.getNodeKey(f),
            "render-content": e.renderContent,
            "render-after-expand": e.renderAfterExpand,
            "show-checkbox": e.showCheckbox,
            node: f,
            accordion: e.accordion,
            props: e.props,
            onNodeExpand: e.handleChildNodeExpand
          }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]))), 128))
        ], 10, Eu)), [
          [De, e.expanded]
        ]) : U("v-if", !0)
      ]),
      _: 1
    })
  ], 42, Tu)), [
    [De, e.node.visible]
  ]);
}
var Su = /* @__PURE__ */ re(xu, [["render", Ou], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);
function Pu({ el$: e }, t) {
  const n = Z("tree"), o = pn([]), r = pn([]);
  je(() => {
    s();
  }), cr(() => {
    o.value = Array.from(e.value.querySelectorAll("[role=treeitem]")), r.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
  }), R(r, (l) => {
    l.forEach((d) => {
      d.setAttribute("tabindex", "-1");
    });
  }), so(e, "keydown", (l) => {
    const d = l.target;
    if (!d.className.includes(n.b("node")))
      return;
    const i = l.code;
    o.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));
    const u = o.value.indexOf(d);
    let h;
    if ([pe.up, pe.down].includes(i)) {
      if (l.preventDefault(), i === pe.up) {
        h = u === -1 ? 0 : u !== 0 ? u - 1 : o.value.length - 1;
        const g = h;
        for (; !t.value.getNode(o.value[h].dataset.key).canFocus; ) {
          if (h--, h === g) {
            h = -1;
            break;
          }
          h < 0 && (h = o.value.length - 1);
        }
      } else {
        h = u === -1 ? 0 : u < o.value.length - 1 ? u + 1 : 0;
        const g = h;
        for (; !t.value.getNode(o.value[h].dataset.key).canFocus; ) {
          if (h++, h === g) {
            h = -1;
            break;
          }
          h >= o.value.length && (h = 0);
        }
      }
      h !== -1 && o.value[h].focus();
    }
    [pe.left, pe.right].includes(i) && (l.preventDefault(), d.click());
    const f = d.querySelector('[type="checkbox"]');
    [pe.enter, pe.space].includes(i) && f && (l.preventDefault(), f.click());
  });
  const s = () => {
    var l;
    o.value = Array.from(e.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)), r.value = Array.from(e.value.querySelectorAll("input[type=checkbox]"));
    const d = e.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);
    if (d.length) {
      d[0].setAttribute("tabindex", "0");
      return;
    }
    (l = o.value[0]) == null || l.setAttribute("tabindex", "0");
  };
}
const Du = j({
  name: "ElTree",
  components: { ElTreeNode: Su },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: !0
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: !0
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: !1
    },
    autoExpandParent: {
      type: Boolean,
      default: !0
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: !1
    },
    draggable: {
      type: Boolean,
      default: !1
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: Eo
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(e, t) {
    const { t: n } = Po(), o = Z("tree"), r = x(new Nu({
      key: e.nodeKey,
      data: e.data,
      lazy: e.lazy,
      props: e.props,
      load: e.load,
      currentNodeKey: e.currentNodeKey,
      checkStrictly: e.checkStrictly,
      checkDescendants: e.checkDescendants,
      defaultCheckedKeys: e.defaultCheckedKeys,
      defaultExpandedKeys: e.defaultExpandedKeys,
      autoExpandParent: e.autoExpandParent,
      defaultExpandAll: e.defaultExpandAll,
      filterNodeMethod: e.filterNodeMethod
    }));
    r.value.initialize();
    const a = x(r.value.root), s = x(null), l = x(null), d = x(null), { broadcastExpanded: i } = qo(e), { dragState: u } = $u({
      props: e,
      ctx: t,
      el$: l,
      dropIndicator$: d,
      store: r
    });
    Pu({ el$: l }, r);
    const h = w(() => {
      const { childNodes: C } = a.value;
      return !C || C.length === 0 || C.every(({ visible: D }) => !D);
    });
    R(() => e.currentNodeKey, (C) => {
      r.value.setCurrentNodeKey(C);
    }), R(() => e.defaultCheckedKeys, (C) => {
      r.value.setDefaultCheckedKey(C);
    }), R(() => e.defaultExpandedKeys, (C) => {
      r.value.setDefaultExpandedKeys(C);
    }), R(() => e.data, (C) => {
      r.value.setData(C);
    }, { deep: !0 }), R(() => e.checkStrictly, (C) => {
      r.value.checkStrictly = C;
    });
    const f = (C) => {
      if (!e.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      r.value.filter(C);
    }, g = (C) => dn(e.nodeKey, C.data), p = (C) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const D = r.value.getNode(C);
      if (!D)
        return [];
      const Se = [D.data];
      let Re = D.parent;
      for (; Re && Re !== a.value; )
        Se.push(Re.data), Re = Re.parent;
      return Se.reverse();
    }, c = (C, D) => r.value.getCheckedNodes(C, D), y = (C) => r.value.getCheckedKeys(C), m = () => {
      const C = r.value.getCurrentNode();
      return C ? C.data : null;
    }, $ = () => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const C = m();
      return C ? C[e.nodeKey] : null;
    }, T = (C, D) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      r.value.setCheckedNodes(C, D);
    }, E = (C, D) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      r.value.setCheckedKeys(C, D);
    }, P = (C, D, Se) => {
      r.value.setChecked(C, D, Se);
    }, ae = () => r.value.getHalfCheckedNodes(), S = () => r.value.getHalfCheckedKeys(), Y = (C, D = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      Rt(r, t.emit, () => r.value.setUserCurrentNode(C, D));
    }, N = (C, D = !0) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      Rt(r, t.emit, () => r.value.setCurrentNodeKey(C, D));
    }, L = (C) => r.value.getNode(C), M = (C) => {
      r.value.remove(C);
    }, Ee = (C, D) => {
      r.value.append(C, D);
    }, B = (C, D) => {
      r.value.insertBefore(C, D);
    }, Oe = (C, D) => {
      r.value.insertAfter(C, D);
    }, et = (C, D, Se) => {
      i(D), t.emit("node-expand", C, D, Se);
    }, tt = (C, D) => {
      if (!e.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      r.value.updateChildren(C, D);
    };
    return Ce("RootTree", {
      ctx: t,
      props: e,
      store: r,
      root: a,
      currentNode: s,
      instance: ie()
    }), Ce(sn, void 0), {
      ns: o,
      store: r,
      root: a,
      currentNode: s,
      dragState: u,
      el$: l,
      dropIndicator$: d,
      isEmpty: h,
      filter: f,
      getNodeKey: g,
      getNodePath: p,
      getCheckedNodes: c,
      getCheckedKeys: y,
      getCurrentNode: m,
      getCurrentKey: $,
      setCheckedNodes: T,
      setCheckedKeys: E,
      setChecked: P,
      getHalfCheckedNodes: ae,
      getHalfCheckedKeys: S,
      setCurrentNode: Y,
      setCurrentKey: N,
      t: n,
      getNode: L,
      remove: M,
      append: Ee,
      insertBefore: B,
      insertAfter: Oe,
      handleNodeExpand: et,
      updateKeyChildren: tt
    };
  }
});
function Iu(e, t, n, o, r, a) {
  var s;
  const l = I("el-tree-node");
  return b(), k("div", {
    ref: "el$",
    class: _([
      e.ns.b(),
      e.ns.is("dragging", !!e.dragState.draggingNode),
      e.ns.is("drop-not-allow", !e.dragState.allowDrop),
      e.ns.is("drop-inner", e.dragState.dropType === "inner"),
      { [e.ns.m("highlight-current")]: e.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (b(!0), k(J, null, X(e.root.childNodes, (d) => (b(), O(l, {
      key: e.getNodeKey(d),
      node: d,
      props: e.props,
      accordion: e.accordion,
      "render-after-expand": e.renderAfterExpand,
      "show-checkbox": e.showCheckbox,
      "render-content": e.renderContent,
      onNodeExpand: e.handleNodeExpand
    }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]))), 128)),
    e.isEmpty ? (b(), k("div", {
      key: 0,
      class: _(e.ns.e("empty-block"))
    }, [
      K("span", {
        class: _(e.ns.e("empty-text"))
      }, te((s = e.emptyText) != null ? s : e.t("el.tree.emptyText")), 3)
    ], 2)) : U("v-if", !0),
    ne(K("div", {
      ref: "dropIndicator$",
      class: _(e.ns.e("drop-indicator"))
    }, null, 2), [
      [De, e.dragState.showDropIndicator]
    ])
  ], 2);
}
var lt = /* @__PURE__ */ re(Du, [["render", Iu], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);
lt.install = (e) => {
  e.component(lt.name, lt);
};
const Au = lt, Fu = Au, Yo = ["success", "info", "warning", "error"], H = Td({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: Ke ? document.body : void 0
}), Bu = Xe({
  customClass: {
    type: String,
    default: H.customClass
  },
  center: {
    type: Boolean,
    default: H.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: H.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: H.duration
  },
  icon: {
    type: Eo,
    default: H.icon
  },
  id: {
    type: String,
    default: H.id
  },
  message: {
    type: se([
      String,
      Object,
      Function
    ]),
    default: H.message
  },
  onClose: {
    type: se(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: H.showClose
  },
  type: {
    type: String,
    values: Yo,
    default: H.type
  },
  offset: {
    type: Number,
    default: H.offset
  },
  zIndex: {
    type: Number,
    default: H.zIndex
  },
  grouping: {
    type: Boolean,
    default: H.grouping
  },
  repeatNum: {
    type: Number,
    default: H.repeatNum
  }
}), Lu = {
  destroy: () => !0
}, Q = fr([]), ju = (e) => {
  const t = Q.findIndex((r) => r.id === e), n = Q[t];
  let o;
  return t > 0 && (o = Q[t - 1]), { current: n, prev: o };
}, Ku = (e) => {
  const { prev: t } = ju(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, zu = (e, t) => Q.findIndex((o) => o.id === e) > 0 ? 20 : t, Mu = ["id"], Ru = ["innerHTML"], Vu = j({
  name: "ElMessage"
}), Uu = /* @__PURE__ */ j({
  ...Vu,
  props: Bu,
  emits: Lu,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = kd, { ns: r, zIndex: a } = jd("message"), { currentZIndex: s, nextZIndex: l } = a, d = x(), i = x(!1), u = x(0);
    let h;
    const f = w(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = w(() => {
      const S = n.type;
      return { [r.bm("icon", S)]: S && Gn[S] };
    }), p = w(() => n.icon || Gn[n.type] || ""), c = w(() => Ku(n.id)), y = w(() => zu(n.id, n.offset) + c.value), m = w(() => u.value + y.value), $ = w(() => ({
      top: `${y.value}px`,
      zIndex: s.value
    }));
    function T() {
      n.duration !== 0 && ({ stop: h } = Cr(() => {
        P();
      }, n.duration));
    }
    function E() {
      h == null || h();
    }
    function P() {
      i.value = !1;
    }
    function ae({ code: S }) {
      S === pe.esc && P();
    }
    return je(() => {
      T(), l(), i.value = !0;
    }), R(() => n.repeatNum, () => {
      E(), T();
    }), so(document, "keydown", ae), $r(d, () => {
      u.value = d.value.getBoundingClientRect().height;
    }), t({
      visible: i,
      bottom: m,
      close: P
    }), (S, Y) => (b(), O(Gt, {
      name: v(r).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: Y[0] || (Y[0] = (N) => S.$emit("destroy")),
      persisted: ""
    }, {
      default: A(() => [
        ne(K("div", {
          id: S.id,
          ref_key: "messageRef",
          ref: d,
          class: _([
            v(r).b(),
            { [v(r).m(S.type)]: S.type && !S.icon },
            v(r).is("center", S.center),
            v(r).is("closable", S.showClose),
            S.customClass
          ]),
          style: yt(v($)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: T
        }, [
          S.repeatNum > 1 ? (b(), O(v(Zd), {
            key: 0,
            value: S.repeatNum,
            type: v(f),
            class: _(v(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : U("v-if", !0),
          v(p) ? (b(), O(v(Mt), {
            key: 1,
            class: _([v(r).e("icon"), v(g)])
          }, {
            default: A(() => [
              (b(), O(mt(v(p))))
            ]),
            _: 1
          }, 8, ["class"])) : U("v-if", !0),
          G(S.$slots, "default", {}, () => [
            S.dangerouslyUseHTMLString ? (b(), k(J, { key: 1 }, [
              U(" Caution here, message could've been compromised, never use user's input as message "),
              K("p", {
                class: _(v(r).e("content")),
                innerHTML: S.message
              }, null, 10, Ru)
            ], 2112)) : (b(), k("p", {
              key: 0,
              class: _(v(r).e("content"))
            }, te(S.message), 3))
          ]),
          S.showClose ? (b(), O(v(Mt), {
            key: 2,
            class: _(v(r).e("closeBtn")),
            onClick: fe(P, ["stop"])
          }, {
            default: A(() => [
              q(v(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : U("v-if", !0)
        ], 46, Mu), [
          [De, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var Hu = /* @__PURE__ */ re(Uu, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let Gu = 1;
const Jo = (e) => {
  const t = !e || ge(e) || no(e) || ut(e) ? { message: e } : e, n = {
    ...H,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (ge(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Ti(o) || (xe("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return n;
}, qu = (e) => {
  const t = Q.indexOf(e);
  if (t === -1)
    return;
  Q.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Wu = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Gu++}`, r = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      r == null || r(), qu(u);
    },
    onDestroy: () => {
      hn(null, a);
    }
  }, l = q(Hu, s, ut(s.message) || no(s.message) ? {
    default: ut(s.message) ? s.message : () => s.message
  } : null);
  l.appContext = n || Ae._context, hn(l, a), e.appendChild(a.firstElementChild);
  const d = l.component, u = {
    id: o,
    vnode: l,
    vm: d,
    handler: {
      close: () => {
        d.exposed.visible.value = !1;
      }
    },
    props: l.component.props
  };
  return u;
}, Ae = (e = {}, t) => {
  if (!Ke)
    return { close: () => {
    } };
  if (we(zt.max) && Q.length >= zt.max)
    return { close: () => {
    } };
  const n = Jo(e);
  if (n.grouping && Q.length) {
    const r = Q.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  const o = Wu(n, t);
  return Q.push(o), o.handler;
};
Yo.forEach((e) => {
  Ae[e] = (t = {}, n) => {
    const o = Jo(t);
    return Ae({ ...o, type: e }, n);
  };
});
function Yu(e) {
  for (const t of Q)
    (!e || e === t.props.type) && t.handler.close();
}
Ae.closeAll = Yu;
Ae._context = null;
const Ju = $d(Ae, "$message"), Zu = 3, Qu = 0, Xu = {
  key: 0,
  class: "flex justify-between border-b-1px border-solid border-[var(--border-color)] pb-5px text-[var(--color-normal)]"
}, ec = { class: "flex flex-col mt-12px flex-1 overflow-hidden" }, tc = { class: "flex align-middle" }, nc = { class: "flex items-center edit-area relative ml-8px hidden" }, oc = /* @__PURE__ */ j({
  __name: "TreeSelector",
  props: {
    title: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 220
    },
    defaultProps: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        value: "value"
      })
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57"
    },
    data: {
      type: Array,
      required: !0
    },
    showEditBtns: {
      type: Boolean,
      default: !0
    },
    remote: {
      type: Boolean,
      default: !1
    },
    fetchFunc: {
      type: Function
    },
    showFirstGroup: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click", "add", "edit", "delete"],
  setup(e, { emit: t }) {
    const n = e, { getPrefixCls: o } = gr(), r = o("tree-selector"), a = x(""), s = x();
    R(a, (p) => {
      s.value.filter(p);
    });
    const l = (p, c) => p ? c[n.defaultProps.label] && c[n.defaultProps.label].includes(p) : !0, d = (p, c) => {
      t("add", p, c);
    }, i = (p, c) => {
      t("click", p, c);
    }, u = (p, c) => {
      t("edit", p, c);
    }, h = (p, c) => {
      t("delete", p, c);
    }, f = x();
    function g() {
      if (!n.remote) {
        f.value = n.data;
        return;
      }
      (n == null ? void 0 : n.fetchFunc).call(n).then((p) => {
        if (p.code === Qu) {
          let c = [];
          n.showFirstGroup && (c = [
            {
              [n.defaultProps.label]: "\u5168\u90E8",
              [n.defaultProps.value]: "",
              [n.defaultProps.children]: p.data
            }
          ]), f.value = c;
        } else
          Ju.error(p.msg);
      });
    }
    return je(() => {
      g();
    }), (p, c) => {
      const y = I("el-input"), m = I("Icon"), $ = I("el-popconfirm");
      return b(), k("div", {
        class: _([`${v(r)}-wrap`, "p-10px h-full overflow-hidden flex flex-col"]),
        style: yt({ width: e.width + "px" })
      }, [
        e.title ? (b(), k("div", Xu, [
          K("h1", null, te(e.title), 1)
        ])) : U("v-if", !0),
        K("div", ec, [
          q(y, {
            modelValue: a.value,
            "onUpdate:modelValue": c[0] || (c[0] = (T) => a.value = T),
            placeholder: e.placeholder,
            "suffix-icon": v(fd)
          }, null, 8, ["modelValue", "placeholder", "suffix-icon"]),
          q(v(Fu), {
            ref_key: "treeRef",
            ref: s,
            class: "flex-1 mt-6px overflow-auto filter-tree",
            data: f.value,
            props: e.defaultProps,
            "default-expand-all": "",
            "expand-on-click-node": !1,
            onNodeClick: i,
            "filter-node-method": l
          }, {
            default: A(({ node: T, data: E }) => [
              K("div", tc, [
                K("span", null, te(T.label), 1),
                K("span", nc, [
                  ne(q(m, {
                    class: "ml-6px",
                    icon: "ep:plus",
                    size: 16,
                    onClick: (P) => d(T, E)
                  }, null, 8, ["onClick"]), [
                    [De, T.level < v(Zu) && e.showEditBtns]
                  ]),
                  T.label !== "\u5168\u90E8" && e.showEditBtns ? (b(), O(m, {
                    key: 0,
                    class: "ml-6px",
                    icon: "ep:edit-pen",
                    size: 16,
                    onClick: (P) => u(T, E)
                  }, null, 8, ["onClick"])) : U("v-if", !0),
                  T.label !== "\u5168\u90E8" && e.showEditBtns ? (b(), O($, {
                    key: 1,
                    title: "\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5206\u7EC4\u5417\uFF1F",
                    "confirm-button-type": "danger",
                    onConfirm: (P) => h(T, E)
                  }, {
                    reference: A(() => [
                      q(m, {
                        class: "ml-6px",
                        icon: "ep:delete",
                        size: 16
                      })
                    ]),
                    _: 2
                  }, 1032, ["onConfirm"])) : U("v-if", !0)
                ])
              ])
            ]),
            _: 1
          }, 8, ["data", "props"])
        ])
      ], 6);
    };
  }
});
const Pc = /* @__PURE__ */ bt(oc, [["__file", "/data/frontend/vue3-template/src/components/TreeSelector/src/TreeSelector.vue"]]);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Jn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function rc(e) {
  var t, n;
  return Jn(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (n = t.prototype, !(Jn(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
function He() {
  return He = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, He.apply(this, arguments);
}
function Zo(e, t) {
  if (e == null)
    return {};
  var n, o, r = {}, a = Object.keys(e);
  for (o = 0; o < a.length; o++)
    t.indexOf(n = a[o]) >= 0 || (r[n] = e[n]);
  return r;
}
const Ut = { silent: !1, logLevel: "warn" }, ac = ["validator"], Qo = Object.prototype, Xo = Qo.toString, sc = Qo.hasOwnProperty, er = /^\s*function (\w+)/;
function Zn(e) {
  var t;
  const n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    const o = n.toString().match(er);
    return o ? o[1] : "";
  }
  return "";
}
const _e = rc, tr = (e) => e;
let V = tr;
Yt.env.NODE_ENV !== "production" && (V = typeof console < "u" ? function(t, n = Ut.logLevel) {
  Ut.silent === !1 && console[n](`[VueTypes warn]: ${t}`);
} : tr);
const Fe = (e, t) => sc.call(e, t), lc = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, Be = Array.isArray || function(e) {
  return Xo.call(e) === "[object Array]";
}, Le = (e) => Xo.call(e) === "[object Function]", vt = (e) => _e(e) && Fe(e, "_vueTypes_name"), nr = (e) => _e(e) && (Fe(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t) => Fe(e, t)));
function un(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function Te(e, t, n = !1) {
  let o, r = !0, a = "";
  o = _e(e) ? e : { type: e };
  const s = vt(o) ? o._vueTypes_name + " - " : "";
  if (nr(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && t === void 0)
      return r;
    Be(o.type) ? (r = o.type.some((l) => Te(l, t, !0) === !0), a = o.type.map((l) => Zn(l)).join(" or ")) : (a = Zn(o), r = a === "Array" ? Be(t) : a === "Object" ? _e(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(l) {
      if (l == null)
        return "";
      const d = l.constructor.toString().match(er);
      return d ? d[1] : "";
    }(t) === a : t instanceof o.type);
  }
  if (!r) {
    const l = `${s}value "${t}" should be of type "${a}"`;
    return n === !1 ? (V(l), !1) : l;
  }
  if (Fe(o, "validator") && Le(o.validator)) {
    const l = V, d = [];
    if (V = (i) => {
      d.push(i);
    }, r = o.validator(t), V = l, !r) {
      const i = (d.length > 1 ? "* " : "") + d.join(`
* `);
      return d.length = 0, n === !1 ? (V(i), r) : i;
    }
  }
  return r;
}
function W(e, t) {
  const n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get() {
    return this.required = !0, this;
  } }, def: { value(r) {
    return r === void 0 ? (Fe(this, "default") && delete this.default, this) : Le(r) || Te(this, r, !0) === !0 ? (this.default = Be(r) ? () => [...r] : _e(r) ? () => Object.assign({}, r) : r, this) : (V(`${this._vueTypes_name} - invalid default value: "${r}"`), this);
  } } }), { validator: o } = n;
  return Le(o) && (n.validator = un(o, n)), n;
}
function ee(e, t) {
  const n = W(e, t);
  return Object.defineProperty(n, "validate", { value(o) {
    return Le(this.validator) && V(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = un(o, this), this;
  } });
}
function Qn(e, t, n) {
  const o = function(d) {
    const i = {};
    return Object.getOwnPropertyNames(d).forEach((u) => {
      i[u] = Object.getOwnPropertyDescriptor(d, u);
    }), Object.defineProperties({}, i);
  }(t);
  if (o._vueTypes_name = e, !_e(n))
    return o;
  const { validator: r } = n, a = Zo(n, ac);
  if (Le(r)) {
    let { validator: d } = o;
    d && (d = (l = (s = d).__original) !== null && l !== void 0 ? l : s), o.validator = un(d ? function(i) {
      return d.call(this, i) && r.call(this, i);
    } : r, o);
  }
  var s, l;
  return Object.assign(o, a);
}
function $t(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
const ic = () => ee("any", {}), dc = () => ee("function", { type: Function }), uc = () => ee("boolean", { type: Boolean }), cc = () => ee("string", { type: String }), fc = () => ee("number", { type: Number }), pc = () => ee("array", { type: Array }), hc = () => ee("object", { type: Object }), gc = () => W("integer", { type: Number, validator: (e) => lc(e) }), vc = () => W("symbol", { validator: (e) => typeof e == "symbol" });
function mc(e, t = "custom validation failed") {
  if (typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return W(e.name || "<<anonymous function>>", { type: null, validator(n) {
    const o = e(n);
    return o || V(`${this._vueTypes_name} - ${t}`), o;
  } });
}
function yc(e) {
  if (!Be(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t = `oneOf - value should be one of "${e.join('", "')}".`, n = e.reduce((o, r) => {
    if (r != null) {
      const a = r.constructor;
      o.indexOf(a) === -1 && o.push(a);
    }
    return o;
  }, []);
  return W("oneOf", { type: n.length > 0 ? n : void 0, validator(o) {
    const r = e.indexOf(o) !== -1;
    return r || V(t), r;
  } });
}
function bc(e) {
  if (!Be(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t = !1, n = [];
  for (let r = 0; r < e.length; r += 1) {
    const a = e[r];
    if (nr(a)) {
      if (vt(a) && a._vueTypes_name === "oneOf" && a.type) {
        n = n.concat(a.type);
        continue;
      }
      if (Le(a.validator) && (t = !0), a.type === !0 || !a.type) {
        V('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      n = n.concat(a.type);
    } else
      n.push(a);
  }
  n = n.filter((r, a) => n.indexOf(r) === a);
  const o = n.length > 0 ? n : null;
  return W("oneOfType", t ? { type: o, validator(r) {
    const a = [], s = e.some((l) => {
      const d = Te(vt(l) && l._vueTypes_name === "oneOf" ? l.type || null : l, r, !0);
      return typeof d == "string" && a.push(d), d === !0;
    });
    return s || V(`oneOfType - provided value does not match any of the ${a.length} passed-in validators:
${$t(a.join(`
`))}`), s;
  } } : { type: o });
}
function Cc(e) {
  return W("arrayOf", { type: Array, validator(t) {
    let n = "";
    const o = t.every((r) => (n = Te(e, r, !0), n === !0));
    return o || V(`arrayOf - value validation error:
${$t(n)}`), o;
  } });
}
function wc(e) {
  return W("instanceOf", { type: e });
}
function Nc(e) {
  return W("objectOf", { type: Object, validator(t) {
    let n = "";
    const o = Object.keys(t).every((r) => (n = Te(e, t[r], !0), n === !0));
    return o || V(`objectOf - value validation error:
${$t(n)}`), o;
  } });
}
function _c(e) {
  const t = Object.keys(e), n = t.filter((r) => {
    var a;
    return !((a = e[r]) === null || a === void 0 || !a.required);
  }), o = W("shape", { type: Object, validator(r) {
    if (!_e(r))
      return !1;
    const a = Object.keys(r);
    if (n.length > 0 && n.some((s) => a.indexOf(s) === -1)) {
      const s = n.filter((l) => a.indexOf(l) === -1);
      return V(s.length === 1 ? `shape - required property "${s[0]}" is not defined.` : `shape - required properties "${s.join('", "')}" are not defined.`), !1;
    }
    return a.every((s) => {
      if (t.indexOf(s) === -1)
        return this._vueTypes_isLoose === !0 || (V(`shape - shape definition does not include a "${s}" property. Allowed keys: "${t.join('", "')}".`), !1);
      const l = Te(e[s], r[s], !0);
      return typeof l == "string" && V(`shape - "${s}" property validation error:
 ${$t(l)}`), l === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
const kc = ["name", "validate", "getter"], $c = /* @__PURE__ */ (() => {
  var e;
  return (e = class {
    static get any() {
      return ic();
    }
    static get func() {
      return dc().def(this.defaults.func);
    }
    static get bool() {
      return uc().def(this.defaults.bool);
    }
    static get string() {
      return cc().def(this.defaults.string);
    }
    static get number() {
      return fc().def(this.defaults.number);
    }
    static get array() {
      return pc().def(this.defaults.array);
    }
    static get object() {
      return hc().def(this.defaults.object);
    }
    static get integer() {
      return gc().def(this.defaults.integer);
    }
    static get symbol() {
      return vc();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(t) {
      if (Be(t))
        return t.forEach((d) => this.extend(d)), this;
      const { name: n, validate: o = !1, getter: r = !1 } = t, a = Zo(t, kc);
      if (Fe(this, n))
        throw new TypeError(`[VueTypes error]: Type "${n}" already defined`);
      const { type: s } = a;
      if (vt(s))
        return delete a.type, Object.defineProperty(this, n, r ? { get: () => Qn(n, s, a) } : { value(...d) {
          const i = Qn(n, s, a);
          return i.validator && (i.validator = i.validator.bind(i, ...d)), i;
        } });
      let l;
      return l = r ? { get() {
        const d = Object.assign({}, a);
        return o ? ee(n, d) : W(n, d);
      }, enumerable: !0 } : { value(...d) {
        const i = Object.assign({}, a);
        let u;
        return u = o ? ee(n, i) : W(n, i), i.validator && (u.validator = i.validator.bind(u, ...d)), u;
      }, enumerable: !0 }, Object.defineProperty(this, n, l);
    }
  }).defaults = {}, e.sensibleDefaults = void 0, e.config = Ut, e.custom = mc, e.oneOf = yc, e.instanceOf = wc, e.oneOfType = bc, e.arrayOf = Cc, e.objectOf = Nc, e.shape = _c, e.utils = { validate: (t, n) => Te(n, t, !0) === !0, toType: (t, n, o = !1) => o ? ee(t, n) : W(t, n) }, e;
})();
function or(e = { func: () => {
}, bool: !0, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var t;
  return (t = class extends $c {
    static get sensibleDefaults() {
      return He({}, this.defaults);
    }
    static set sensibleDefaults(n) {
      this.defaults = n !== !1 ? He({}, n !== !0 ? n : e) : {};
    }
  }).defaults = He({}, e), t;
}
class Dc extends or() {
}
const it = or({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
it.extend([
  {
    name: "style",
    getter: !0,
    type: [String, Object],
    default: void 0
  }
]);
const xc = { key: 0 }, Tc = { key: 1 }, Ec = /* @__PURE__ */ j({
  __name: "TimeoutButton",
  props: {
    type: it.string.def("default"),
    text: it.string.def(""),
    interval: it.number.def(60)
  },
  emits: ["timerStart", "timerEnd"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = "timeout-button";
    let a = x(), s = x(!1), l = x(o.interval);
    const d = () => {
      clearInterval(a.value), a.value = null, s.value = !1;
    }, i = () => {
      s.value = !0;
      let u = o.interval;
      n("timerStart"), a.value = setInterval(() => {
        u > 0 ? (u--, l.value = u) : (d(), n("timerEnd"));
      }, 1e3);
    };
    return eo(() => {
      d();
    }), t({
      clearTimer: d
    }), (u, h) => {
      const f = I("el-button");
      return b(), O(f, {
        type: o.type,
        class: _(`${r}-main`),
        disabled: v(s),
        onClick: i
      }, {
        default: A(() => [
          v(s) ? (b(), k("span", xc, [
            G(u.$slots, "disable", { current: v(l) }, () => [
              Ge(" \u91CD\u65B0\u83B7\u53D6(" + te(v(l)) + "s) ", 1)
            ], !0)
          ])) : (b(), k("span", Tc, [
            G(u.$slots, "enable", {}, () => [
              Ge("\u83B7\u53D6\u9A8C\u8BC1\u7801")
            ], !0)
          ]))
        ]),
        _: 3
      }, 8, ["type", "class", "disabled"]);
    };
  }
});
const Ic = /* @__PURE__ */ bt(Ec, [["__scopeId", "data-v-c3c4edec"], ["__file", "/data/frontend/vue3-template/src/components/TimeoutButton/src/TimeoutButton.vue"]]);
export {
  Sc as DynamicForm,
  Ic as TimeoutButton,
  Pc as TreeSelector
};
//# sourceMappingURL=component-lib.mjs.map
