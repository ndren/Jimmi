var Qt = (t, e, r) => {
    if (!e.has(t)) throw TypeError("Cannot " + r)
};
var J = (t, e, r) => (Qt(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    te = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r)
    },
    re = (t, e, r, n) => (Qt(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import {
    O as Rr,
    X as Ve,
    P as Dr,
    S as he,
    i as be,
    s as Se,
    e as E,
    a as x,
    q as ne,
    b as m,
    d as F,
    f as h,
    l as z,
    v as oe,
    n as T,
    Q as Fe,
    T as qt,
    U as ze,
    z as Vt,
    V as zt,
    W as Kt,
    r as Lr,
    Y as Yt,
    Z as Br,
    o as fe,
    _ as jr,
    a0 as ue,
    J as Ke,
    w as Te,
    x as Me,
    t as K,
    k as X,
    B as Re,
    M as Xt,
    K as Zt,
    C as Ye,
    a1 as Ur,
    a2 as Gr,
    G as Wr,
    c as Jr,
    u as Hr,
    h as Qr,
    j as qr,
    p as ft,
    A as ut,
    a3 as Vr
} from "./vendor.89e2b59b.js";
import {
    c as De,
    J as zr
} from "./index.c0ea76cd.js";
var Kr = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            r = Symbol("test"),
            n = Object(r);
        if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
        var o = 42;
        e[r] = o;
        for (r in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var i = Object.getOwnPropertySymbols(e);
        if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var a = Object.getOwnPropertyDescriptor(e, r);
            if (a.value !== o || a.enumerable !== !0) return !1
        }
        return !0
    },
    er = typeof Symbol != "undefined" && Symbol,
    Yr = Kr,
    Xr = function() {
        return typeof er != "function" || typeof Symbol != "function" || typeof er("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Yr()
    },
    Zr = "Function.prototype.bind called on incompatible ",
    pt = Array.prototype.slice,
    en = Object.prototype.toString,
    tn = "[object Function]",
    rn = function(e) {
        var r = this;
        if (typeof r != "function" || en.call(r) !== tn) throw new TypeError(Zr + r);
        for (var n = pt.call(arguments, 1), o, i = function() {
                if (this instanceof o) {
                    var f = r.apply(this, n.concat(pt.call(arguments)));
                    return Object(f) === f ? f : this
                } else return r.apply(e, n.concat(pt.call(arguments)))
            }, a = Math.max(0, r.length - n.length), l = [], s = 0; s < a; s++) l.push("$" + s);
        if (o = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
            var c = function() {};
            c.prototype = r.prototype, o.prototype = new c, c.prototype = null
        }
        return o
    },
    nn = rn,
    yt = Function.prototype.bind || nn,
    on = yt,
    an = on.call(Function.call, Object.prototype.hasOwnProperty),
    C, Le = SyntaxError,
    tr = Function,
    _e = TypeError,
    dt = function(t) {
        try {
            return tr('return (' + t + ").constructor;")()
        } catch {}
    },
    pe = Object.getOwnPropertyDescriptor;
if (pe) try {
    pe({}, "")
} catch {
    pe = null
}
var mt = function() {
        throw new _e
    },
    ln = pe ? function() {
        try {
            return arguments.callee, mt
        } catch {
            try {
                return pe(arguments, "callee").get
            } catch {
                return mt
            }
        }
    }() : mt,
    we = Xr(),
    ae = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    Ee = {},
    sn = typeof Uint8Array == "undefined" ? C : ae(Uint8Array),
    Ae = {
        "%AggregateError%": typeof AggregateError == "undefined" ? C : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? C : ArrayBuffer,
        "%ArrayIteratorPrototype%": we ? ae([][Symbol.iterator]()) : C,
        "%AsyncFromSyncIteratorPrototype%": C,
        "%AsyncFunction%": Ee,
        "%AsyncGenerator%": Ee,
        "%AsyncGeneratorFunction%": Ee,
        "%AsyncIteratorPrototype%": Ee,
        "%Atomics%": typeof Atomics == "undefined" ? C : Atomics,
        "%BigInt%": typeof BigInt == "undefined" ? C : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView == "undefined" ? C : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array == "undefined" ? C : Float32Array,
        "%Float64Array%": typeof Float64Array == "undefined" ? C : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? C : FinalizationRegistry,
        "%Function%": tr,
        "%GeneratorFunction%": Ee,
        "%Int8Array%": typeof Int8Array == "undefined" ? C : Int8Array,
        "%Int16Array%": typeof Int16Array == "undefined" ? C : Int16Array,
        "%Int32Array%": typeof Int32Array == "undefined" ? C : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": we ? ae(ae([][Symbol.iterator]())) : C,
        "%JSON%": typeof JSON == "object" ? JSON : C,
        "%Map%": typeof Map == "undefined" ? C : Map,
        "%MapIteratorPrototype%": typeof Map == "undefined" || !we ? C : ae(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise == "undefined" ? C : Promise,
        "%Proxy%": typeof Proxy == "undefined" ? C : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect == "undefined" ? C : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set == "undefined" ? C : Set,
        "%SetIteratorPrototype%": typeof Set == "undefined" || !we ? C : ae(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? C : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": we ? ae("" [Symbol.iterator]()) : C,
        "%Symbol%": we ? Symbol : C,
        "%SyntaxError%": Le,
        "%ThrowTypeError%": ln,
        "%TypedArray%": sn,
        "%TypeError%": _e,
        "%Uint8Array%": typeof Uint8Array == "undefined" ? C : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? C : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array == "undefined" ? C : Uint16Array,
        "%Uint32Array%": typeof Uint32Array == "undefined" ? C : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap == "undefined" ? C : WeakMap,
        "%WeakRef%": typeof WeakRef == "undefined" ? C : WeakRef,
        "%WeakSet%": typeof WeakSet == "undefined" ? C : WeakSet
    },
    cn = function t(e) {
        var r;
        if (e === "%AsyncFunction%") r = dt("async function () {}");
        else if (e === "%GeneratorFunction%") r = dt("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") r = dt("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var o = t("%AsyncGenerator%");
            o && (r = ae(o.prototype))
        }
        return Ae[e] = r, r
    },
    rr = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    Xe = yt,
    Ze = an,
    fn = Xe.call(Function.call, Array.prototype.concat),
    un = Xe.call(Function.apply, Array.prototype.splice),
    nr = Xe.call(Function.call, String.prototype.replace),
    et = Xe.call(Function.call, String.prototype.slice),
    pn = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    yn = /\\(\\)?/g,
    dn = function(e) {
        var r = et(e, 0, 1),
            n = et(e, -1);
        if (r === "%" && n !== "%") throw new Le("invalid intrinsic syntax, expected closing `%`");
        if (n === "%" && r !== "%") throw new Le("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return nr(e, pn, function(i, a, l, s) {
            o[o.length] = l ? nr(s, yn, "$1") : a || i
        }), o
    },
    mn = function(e, r) {
        var n = e,
            o;
        if (Ze(rr, n) && (o = rr[n], n = "%" + o[0] + "%"), Ze(Ae, n)) {
            var i = Ae[n];
            if (i === Ee && (i = cn(n)), typeof i == "undefined" && !r) throw new _e("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: n,
                value: i
            }
        }
        throw new Le("intrinsic " + e + " does not exist!")
    },
    vt = function(e, r) {
        if (typeof e != "string" || e.length === 0) throw new _e("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof r != "boolean") throw new _e('"allowMissing" argument must be a boolean');
        var n = dn(e),
            o = n.length > 0 ? n[0] : "",
            i = mn("%" + o + "%", r),
            a = i.name,
            l = i.value,
            s = !1,
            c = i.alias;
        c && (o = c[0], un(n, fn([0, 1], c)));
        for (var f = 1, y = !0; f < n.length; f += 1) {
            var d = n[f],
                b = et(d, 0, 1),
                g = et(d, -1);
            if ((b === '"' || b === "'" || b === "`" || g === '"' || g === "'" || g === "`") && b !== g) throw new Le("property names with quotes must have matching quotes");
            if ((d === "constructor" || !y) && (s = !0), o += "." + d, a = "%" + o + "%", Ze(Ae, a)) l = Ae[a];
            else if (l != null) {
                if (!(d in l)) {
                    if (!r) throw new _e("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (pe && f + 1 >= n.length) {
                    var p = pe(l, d);
                    y = !!p, y && "get" in p && !("originalValue" in p.get) ? l = p.get : l = l[d]
                } else y = Ze(l, d), l = l[d];
                y && !s && (Ae[a] = l)
            }
        }
        return l
    },
    ir = {
        exports: {}
    };
(function(t) {
    var e = yt,
        r = vt,
        n = r("%Function.prototype.apply%"),
        o = r("%Function.prototype.call%"),
        i = r("%Reflect.apply%", !0) || e.call(o, n),
        a = r("%Object.getOwnPropertyDescriptor%", !0),
        l = r("%Object.defineProperty%", !0),
        s = r("%Math.max%");
    if (l) try {
        l({}, "a", {
            value: 1
        })
    } catch {
        l = null
    }
    t.exports = function(y) {
        var d = i(e, o, arguments);
        if (a && l) {
            var b = a(d, "length");
            b.configurable && l(d, "length", {
                value: 1 + s(0, y.length - (arguments.length - 1))
            })
        }
        return d
    };
    var c = function() {
        return i(e, n, arguments)
    };
    l ? l(t.exports, "apply", {
        value: c
    }) : t.exports.apply = c
})(ir);
var or = vt,
    ar = ir.exports,
    vn = ar(or("String.prototype.indexOf")),
    gn = function(e, r) {
        var n = or(e, !!r);
        return typeof n == "function" && vn(e, ".prototype.") > -1 ? ar(n) : n
    },
    hn = {},
    bn = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: hn
    }),
    Sn = Rr(bn),
    gt = typeof Map == "function" && Map.prototype,
    ht = Object.getOwnPropertyDescriptor && gt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    tt = gt && ht && typeof ht.get == "function" ? ht.get : null,
    _n = gt && Map.prototype.forEach,
    bt = typeof Set == "function" && Set.prototype,
    St = Object.getOwnPropertyDescriptor && bt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    rt = bt && St && typeof St.get == "function" ? St.get : null,
    wn = bt && Set.prototype.forEach,
    En = typeof WeakMap == "function" && WeakMap.prototype,
    Be = En ? WeakMap.prototype.has : null,
    An = typeof WeakSet == "function" && WeakSet.prototype,
    je = An ? WeakSet.prototype.has : null,
    On = typeof WeakRef == "function" && WeakRef.prototype,
    lr = On ? WeakRef.prototype.deref : null,
    Pn = Boolean.prototype.valueOf,
    Nn = Object.prototype.toString,
    Cn = Function.prototype.toString,
    xn = String.prototype.match,
    _t = String.prototype.slice,
    le = String.prototype.replace,
    In = String.prototype.toUpperCase,
    sr = String.prototype.toLowerCase,
    cr = RegExp.prototype.test,
    fr = Array.prototype.concat,
    Z = Array.prototype.join,
    $n = Array.prototype.slice,
    ur = Math.floor,
    wt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    Et = Object.getOwnPropertySymbols,
    At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Oe = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    j = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Oe ? "object" : "symbol") ? Symbol.toStringTag : null,
    pr = Object.prototype.propertyIsEnumerable,
    yr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function dr(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || cr.call(/e/, e)) return e;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var n = t < 0 ? -ur(-t) : ur(t);
        if (n !== t) {
            var o = String(n),
                i = _t.call(e, o.length + 1);
            return le.call(o, r, "$&_") + "." + le.call(le.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return le.call(e, r, "$&_")
}
var Ot = Sn.custom,
    Pt = Ot && vr(Ot) ? Ot : null,
    kn = function t(e, r, n, o) {
        var i = r || {};
        if (se(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (se(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var a = se(i, "customInspect") ? i.customInspect : !0;
        if (typeof a != "boolean" && a !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (se(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (se(i, "numericSeparator") && typeof i.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var l = i.numericSeparator;
        if (typeof e == "undefined") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return hr(e, i);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var s = String(e);
            return l ? dr(e, s) : s
        }
        if (typeof e == "bigint") {
            var c = String(e) + "n";
            return l ? dr(e, c) : c
        }
        var f = typeof i.depth == "undefined" ? 5 : i.depth;
        if (typeof n == "undefined" && (n = 0), n >= f && f > 0 && typeof e == "object") return Nt(e) ? "[Array]" : "[Object]";
        var y = Yn(i, n);
        if (typeof o == "undefined") o = [];
        else if (gr(o, e) >= 0) return "[Circular]";

        function d(N, w, H) {
            if (w && (o = $n.call(o), o.push(w)), H) {
                var k = {
                    depth: i.depth
                };
                return se(i, "quoteStyle") && (k.quoteStyle = i.quoteStyle), t(N, k, n + 1, o)
            }
            return t(N, i, n + 1, o)
        }
        if (typeof e == "function") {
            var b = Gn(e),
                g = nt(e, d);
            return "[Function" + (b ? ": " + b : " (anonymous)") + "]" + (g.length > 0 ? " { " + Z.call(g, ", ") + " }" : "")
        }
        if (vr(e)) {
            var p = Oe ? le.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : At.call(e);
            return typeof e == "object" && !Oe ? Ue(p) : p
        }
        if (Vn(e)) {
            for (var u = "<" + sr.call(String(e.nodeName)), v = e.attributes || [], O = 0; O < v.length; O++) u += " " + v[O].name + "=" + mr(Fn(v[O].value), "double", i);
            return u += ">", e.childNodes && e.childNodes.length && (u += "..."), u += "</" + sr.call(String(e.nodeName)) + ">", u
        }
        if (Nt(e)) {
            if (e.length === 0) return "[]";
            var S = nt(e, d);
            return y && !Kn(S) ? "[" + xt(S, y) + "]" : "[ " + Z.call(S, ", ") + " ]"
        }
        if (Rn(e)) {
            var A = nt(e, d);
            return "cause" in e && !pr.call(e, "cause") ? "{ [" + String(e) + "] " + Z.call(fr.call("[cause]: " + d(e.cause), A), ", ") + " }" : A.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Z.call(A, ", ") + " }"
        }
        if (typeof e == "object" && a) {
            if (Pt && typeof e[Pt] == "function") return e[Pt]();
            if (a !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Wn(e)) {
            var L = [];
            return _n.call(e, function(N, w) {
                L.push(d(w, e, !0) + " => " + d(N, e))
            }), br("Map", tt.call(e), L, y)
        }
        if (Qn(e)) {
            var I = [];
            return wn.call(e, function(N) {
                I.push(d(N, e))
            }), br("Set", rt.call(e), I, y)
        }
        if (Jn(e)) return Ct("WeakMap");
        if (qn(e)) return Ct("WeakSet");
        if (Hn(e)) return Ct("WeakRef");
        if (Ln(e)) return Ue(d(Number(e)));
        if (jn(e)) return Ue(d(wt.call(e)));
        if (Bn(e)) return Ue(Pn.call(e));
        if (Dn(e)) return Ue(d(String(e)));
        if (!Tn(e) && !Mn(e)) {
            var U = nt(e, d),
                B = yr ? yr(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                G = e instanceof Object ? "" : "null prototype",
                W = !B && j && Object(e) === e && j in e ? _t.call(ce(e), 8, -1) : G ? "Object" : "",
                R = B || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                _ = R + (W || G ? "[" + Z.call(fr.call([], W || [], G || []), ": ") + "] " : "");
            return U.length === 0 ? _ + "{}" : y ? _ + "{" + xt(U, y) + "}" : _ + "{ " + Z.call(U, ", ") + " }"
        }
        return String(e)
    };

function mr(t, e, r) {
    var n = (r.quoteStyle || e) === "double" ? '"' : "'";
    return n + t + n
}

function Fn(t) {
    return le.call(String(t), /"/g, "&quot;")
}

function Nt(t) {
    return ce(t) === "[object Array]" && (!j || !(typeof t == "object" && j in t))
}

function Tn(t) {
    return ce(t) === "[object Date]" && (!j || !(typeof t == "object" && j in t))
}

function Mn(t) {
    return ce(t) === "[object RegExp]" && (!j || !(typeof t == "object" && j in t))
}

function Rn(t) {
    return ce(t) === "[object Error]" && (!j || !(typeof t == "object" && j in t))
}

function Dn(t) {
    return ce(t) === "[object String]" && (!j || !(typeof t == "object" && j in t))
}

function Ln(t) {
    return ce(t) === "[object Number]" && (!j || !(typeof t == "object" && j in t))
}

function Bn(t) {
    return ce(t) === "[object Boolean]" && (!j || !(typeof t == "object" && j in t))
}

function vr(t) {
    if (Oe) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !At) return !1;
    try {
        return At.call(t), !0
    } catch {}
    return !1
}

function jn(t) {
    if (!t || typeof t != "object" || !wt) return !1;
    try {
        return wt.call(t), !0
    } catch {}
    return !1
}
var Un = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function se(t, e) {
    return Un.call(t, e)
}

function ce(t) {
    return Nn.call(t)
}

function Gn(t) {
    if (t.name) return t.name;
    var e = xn.call(Cn.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function gr(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var r = 0, n = t.length; r < n; r++)
        if (t[r] === e) return r;
    return -1
}

function Wn(t) {
    if (!tt || !t || typeof t != "object") return !1;
    try {
        tt.call(t);
        try {
            rt.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Jn(t) {
    if (!Be || !t || typeof t != "object") return !1;
    try {
        Be.call(t, Be);
        try {
            je.call(t, je)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function Hn(t) {
    if (!lr || !t || typeof t != "object") return !1;
    try {
        return lr.call(t), !0
    } catch {}
    return !1
}

function Qn(t) {
    if (!rt || !t || typeof t != "object") return !1;
    try {
        rt.call(t);
        try {
            tt.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function qn(t) {
    if (!je || !t || typeof t != "object") return !1;
    try {
        je.call(t, je);
        try {
            Be.call(t, Be)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function Vn(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement != "undefined" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function hr(t, e) {
    if (t.length > e.maxStringLength) {
        var r = t.length - e.maxStringLength,
            n = "... " + r + " more character" + (r > 1 ? "s" : "");
        return hr(_t.call(t, 0, e.maxStringLength), e) + n
    }
    var o = le.call(le.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, zn);
    return mr(o, "single", e)
}

function zn(t) {
    var e = t.charCodeAt(0),
        r = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + In.call(e.toString(16))
}

function Ue(t) {
    return "Object(" + t + ")"
}

function Ct(t) {
    return t + " { ? }"
}

function br(t, e, r, n) {
    var o = n ? xt(r, n) : Z.call(r, ", ");
    return t + " (" + e + ") {" + o + "}"
}

function Kn(t) {
    for (var e = 0; e < t.length; e++)
        if (gr(t[e], `
`) >= 0) return !1;
    return !0
}

function Yn(t, e) {
    var r;
    if (t.indent === "	") r = "	";
    else if (typeof t.indent == "number" && t.indent > 0) r = Z.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: r,
        prev: Z.call(Array(e + 1), r)
    }
}

function xt(t, e) {
    if (t.length === 0) return "";
    var r = `
` + e.prev + e.base;
    return r + Z.call(t, "," + r) + `
` + e.prev
}

function nt(t, e) {
    var r = Nt(t),
        n = [];
    if (r) {
        n.length = t.length;
        for (var o = 0; o < t.length; o++) n[o] = se(t, o) ? e(t[o], t) : ""
    }
    var i = typeof Et == "function" ? Et(t) : [],
        a;
    if (Oe) {
        a = {};
        for (var l = 0; l < i.length; l++) a["$" + i[l]] = i[l]
    }
    for (var s in t) !se(t, s) || r && String(Number(s)) === s && s < t.length || Oe && a["$" + s] instanceof Symbol || (cr.call(/[^\w$]/, s) ? n.push(e(s, t) + ": " + e(t[s], t)) : n.push(s + ": " + e(t[s], t)));
    if (typeof Et == "function")
        for (var c = 0; c < i.length; c++) pr.call(t, i[c]) && n.push("[" + e(i[c]) + "]: " + e(t[i[c]], t));
    return n
}
var It = vt,
    Pe = gn,
    Xn = kn,
    Zn = It("%TypeError%"),
    it = It("%WeakMap%", !0),
    ot = It("%Map%", !0),
    ei = Pe("WeakMap.prototype.get", !0),
    ti = Pe("WeakMap.prototype.set", !0),
    ri = Pe("WeakMap.prototype.has", !0),
    ni = Pe("Map.prototype.get", !0),
    ii = Pe("Map.prototype.set", !0),
    oi = Pe("Map.prototype.has", !0),
    $t = function(t, e) {
        for (var r = t, n;
            (n = r.next) !== null; r = n)
            if (n.key === e) return r.next = n.next, n.next = t.next, t.next = n, n
    },
    ai = function(t, e) {
        var r = $t(t, e);
        return r && r.value
    },
    li = function(t, e, r) {
        var n = $t(t, e);
        n ? n.value = r : t.next = {
            key: e,
            next: t.next,
            value: r
        }
    },
    si = function(t, e) {
        return !!$t(t, e)
    },
    ci = function() {
        var e, r, n, o = {
            assert: function(i) {
                if (!o.has(i)) throw new Zn("Side channel does not contain " + Xn(i))
            },
            get: function(i) {
                if (it && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return ei(e, i)
                } else if (ot) {
                    if (r) return ni(r, i)
                } else if (n) return ai(n, i)
            },
            has: function(i) {
                if (it && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return ri(e, i)
                } else if (ot) {
                    if (r) return oi(r, i)
                } else if (n) return si(n, i);
                return !1
            },
            set: function(i, a) {
                it && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new it), ti(e, i, a)) : ot ? (r || (r = new ot), ii(r, i, a)) : (n || (n = {
                    key: {},
                    next: null
                }), li(n, i, a))
            }
        };
        return o
    },
    fi = String.prototype.replace,
    ui = /%20/g,
    kt = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ft = {
        default: kt.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return fi.call(t, ui, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: kt.RFC1738,
        RFC3986: kt.RFC3986
    },
    pi = Ft,
    Tt = Object.prototype.hasOwnProperty,
    ye = Array.isArray,
    ee = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    yi = function(e) {
        for (; e.length > 1;) {
            var r = e.pop(),
                n = r.obj[r.prop];
            if (ye(n)) {
                for (var o = [], i = 0; i < n.length; ++i) typeof n[i] != "undefined" && o.push(n[i]);
                r.obj[r.prop] = o
            }
        }
    },
    Sr = function(e, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] != "undefined" && (n[o] = e[o]);
        return n
    },
    di = function t(e, r, n) {
        if (!r) return e;
        if (typeof r != "object") {
            if (ye(e)) e.push(r);
            else if (e && typeof e == "object")(n && (n.plainObjects || n.allowPrototypes) || !Tt.call(Object.prototype, r)) && (e[r] = !0);
            else return [e, r];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(r);
        var o = e;
        return ye(e) && !ye(r) && (o = Sr(e, n)), ye(e) && ye(r) ? (r.forEach(function(i, a) {
            if (Tt.call(e, a)) {
                var l = e[a];
                l && typeof l == "object" && i && typeof i == "object" ? e[a] = t(l, i, n) : e.push(i)
            } else e[a] = i
        }), e) : Object.keys(r).reduce(function(i, a) {
            var l = r[a];
            return Tt.call(i, a) ? i[a] = t(i[a], l, n) : i[a] = l, i
        }, o)
    },
    mi = function(e, r) {
        return Object.keys(r).reduce(function(n, o) {
            return n[o] = r[o], n
        }, e)
    },
    vi = function(t, e, r) {
        var n = t.replace(/\+/g, " ");
        if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(n)
        } catch {
            return n
        }
    },
    gi = function(e, r, n, o, i) {
        if (e.length === 0) return e;
        var a = e;
        if (typeof e == "symbol" ? a = Symbol.prototype.toString.call(e) : typeof e != "string" && (a = String(e)), n === "iso-8859-1") return escape(a).replace(/%u[0-9a-f]{4}/gi, function(f) {
            return "%26%23" + parseInt(f.slice(2), 16) + "%3B"
        });
        for (var l = "", s = 0; s < a.length; ++s) {
            var c = a.charCodeAt(s);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || i === pi.RFC1738 && (c === 40 || c === 41)) {
                l += a.charAt(s);
                continue
            }
            if (c < 128) {
                l = l + ee[c];
                continue
            }
            if (c < 2048) {
                l = l + (ee[192 | c >> 6] + ee[128 | c & 63]);
                continue
            }
            if (c < 55296 || c >= 57344) {
                l = l + (ee[224 | c >> 12] + ee[128 | c >> 6 & 63] + ee[128 | c & 63]);
                continue
            }
            s += 1, c = 65536 + ((c & 1023) << 10 | a.charCodeAt(s) & 1023), l += ee[240 | c >> 18] + ee[128 | c >> 12 & 63] + ee[128 | c >> 6 & 63] + ee[128 | c & 63]
        }
        return l
    },
    hi = function(e) {
        for (var r = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], n = [], o = 0; o < r.length; ++o)
            for (var i = r[o], a = i.obj[i.prop], l = Object.keys(a), s = 0; s < l.length; ++s) {
                var c = l[s],
                    f = a[c];
                typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({
                    obj: a,
                    prop: c
                }), n.push(f))
            }
        return yi(r), e
    },
    bi = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Si = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    _i = function(e, r) {
        return [].concat(e, r)
    },
    wi = function(e, r) {
        if (ye(e)) {
            for (var n = [], o = 0; o < e.length; o += 1) n.push(r(e[o]));
            return n
        }
        return r(e)
    },
    _r = {
        arrayToObject: Sr,
        assign: mi,
        combine: _i,
        compact: hi,
        decode: vi,
        encode: gi,
        isBuffer: Si,
        isRegExp: bi,
        maybeMap: wi,
        merge: di
    },
    wr = ci,
    Mt = _r,
    Ge = Ft,
    Ei = Object.prototype.hasOwnProperty,
    Er = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, r) {
            return e + "[" + r + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    de = Array.isArray,
    Ai = String.prototype.split,
    Oi = Array.prototype.push,
    Ar = function(t, e) {
        Oi.apply(t, de(e) ? e : [e])
    },
    Pi = Date.prototype.toISOString,
    Or = Ge.default,
    D = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Mt.encode,
        encodeValuesOnly: !1,
        format: Or,
        formatter: Ge.formatters[Or],
        indices: !1,
        serializeDate: function(e) {
            return Pi.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Ni = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    Rt = {},
    Ci = function t(e, r, n, o, i, a, l, s, c, f, y, d, b, g, p) {
        for (var u = e, v = p, O = 0, S = !1;
            (v = v.get(Rt)) !== void 0 && !S;) {
            var A = v.get(e);
            if (O += 1, typeof A != "undefined") {
                if (A === O) throw new RangeError("Cyclic object value");
                S = !0
            }
            typeof v.get(Rt) == "undefined" && (O = 0)
        }
        if (typeof l == "function" ? u = l(r, u) : u instanceof Date ? u = f(u) : n === "comma" && de(u) && (u = Mt.maybeMap(u, function(ve) {
                return ve instanceof Date ? f(ve) : ve
            })), u === null) {
            if (o) return a && !b ? a(r, D.encoder, g, "key", y) : r;
            u = ""
        }
        if (Ni(u) || Mt.isBuffer(u)) {
            if (a) {
                var L = b ? r : a(r, D.encoder, g, "key", y);
                if (n === "comma" && b) {
                    for (var I = Ai.call(String(u), ","), U = "", B = 0; B < I.length; ++B) U += (B === 0 ? "" : ",") + d(a(I[B], D.encoder, g, "value", y));
                    return [d(L) + "=" + U]
                }
                return [d(L) + "=" + d(a(u, D.encoder, g, "value", y))]
            }
            return [d(r) + "=" + d(String(u))]
        }
        var G = [];
        if (typeof u == "undefined") return G;
        var W;
        if (n === "comma" && de(u)) W = [{
            value: u.length > 0 ? u.join(",") || null : void 0
        }];
        else if (de(l)) W = l;
        else {
            var R = Object.keys(u);
            W = s ? R.sort(s) : R
        }
        for (var _ = 0; _ < W.length; ++_) {
            var N = W[_],
                w = typeof N == "object" && typeof N.value != "undefined" ? N.value : u[N];
            if (!(i && w === null)) {
                var H = de(u) ? typeof n == "function" ? n(r, N) : r : r + (c ? "." + N : "[" + N + "]");
                p.set(e, O);
                var k = wr();
                k.set(Rt, p), Ar(G, t(w, H, n, o, i, a, l, s, c, f, y, d, b, g, k))
            }
        }
        return G
    },
    xi = function(e) {
        if (!e) return D;
        if (e.encoder !== null && typeof e.encoder != "undefined" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var r = e.charset || D.charset;
        if (typeof e.charset != "undefined" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = Ge.default;
        if (typeof e.format != "undefined") {
            if (!Ei.call(Ge.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            n = e.format
        }
        var o = Ge.formatters[n],
            i = D.filter;
        return (typeof e.filter == "function" || de(e.filter)) && (i = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : D.addQueryPrefix,
            allowDots: typeof e.allowDots == "undefined" ? D.allowDots : !!e.allowDots,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : D.charsetSentinel,
            delimiter: typeof e.delimiter == "undefined" ? D.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : D.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : D.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : D.encodeValuesOnly,
            filter: i,
            format: n,
            formatter: o,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : D.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : D.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : D.strictNullHandling
        }
    },
    Ii = function(t, e) {
        var r = t,
            n = xi(e),
            o, i;
        typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : de(n.filter) && (i = n.filter, o = i);
        var a = [];
        if (typeof r != "object" || r === null) return "";
        var l;
        e && e.arrayFormat in Er ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
        var s = Er[l];
        o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
        for (var c = wr(), f = 0; f < o.length; ++f) {
            var y = o[f];
            n.skipNulls && r[y] === null || Ar(a, Ci(r[y], y, s, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, c))
        }
        var d = a.join(n.delimiter),
            b = n.addQueryPrefix === !0 ? "?" : "";
        return n.charsetSentinel && (n.charset === "iso-8859-1" ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), d.length > 0 ? b + d : ""
    },
    Ne = _r,
    Dt = Object.prototype.hasOwnProperty,
    $i = Array.isArray,
    M = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Ne.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    ki = function(t) {
        return t.replace(/&#(\d+);/g, function(e, r) {
            return String.fromCharCode(parseInt(r, 10))
        })
    },
    Pr = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Fi = "utf8=%26%2310003%3B",
    Ti = "utf8=%E2%9C%93",
    Mi = function(e, r) {
        var n = {},
            o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            a = o.split(r.delimiter, i),
            l = -1,
            s, c = r.charset;
        if (r.charsetSentinel)
            for (s = 0; s < a.length; ++s) a[s].indexOf("utf8=") === 0 && (a[s] === Ti ? c = "utf-8" : a[s] === Fi && (c = "iso-8859-1"), l = s, s = a.length);
        for (s = 0; s < a.length; ++s)
            if (s !== l) {
                var f = a[s],
                    y = f.indexOf("]="),
                    d = y === -1 ? f.indexOf("=") : y + 1,
                    b, g;
                d === -1 ? (b = r.decoder(f, M.decoder, c, "key"), g = r.strictNullHandling ? null : "") : (b = r.decoder(f.slice(0, d), M.decoder, c, "key"), g = Ne.maybeMap(Pr(f.slice(d + 1), r), function(p) {
                    return r.decoder(p, M.decoder, c, "value")
                })), g && r.interpretNumericEntities && c === "iso-8859-1" && (g = ki(g)), f.indexOf("[]=") > -1 && (g = $i(g) ? [g] : g), Dt.call(n, b) ? n[b] = Ne.combine(n[b], g) : n[b] = g
            } return n
    },
    Ri = function(t, e, r, n) {
        for (var o = n ? e : Pr(e, r), i = t.length - 1; i >= 0; --i) {
            var a, l = t[i];
            if (l === "[]" && r.parseArrays) a = [].concat(o);
            else {
                a = r.plainObjects ? Object.create(null) : {};
                var s = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l,
                    c = parseInt(s, 10);
                !r.parseArrays && s === "" ? a = {
                    0: o
                } : !isNaN(c) && l !== s && String(c) === s && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (a = [], a[c] = o) : s !== "__proto__" && (a[s] = o)
            }
            o = a
        }
        return o
    },
    Di = function(e, r, n, o) {
        if (!!e) {
            var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                a = /(\[[^[\]]*])/,
                l = /(\[[^[\]]*])/g,
                s = n.depth > 0 && a.exec(i),
                c = s ? i.slice(0, s.index) : i,
                f = [];
            if (c) {
                if (!n.plainObjects && Dt.call(Object.prototype, c) && !n.allowPrototypes) return;
                f.push(c)
            }
            for (var y = 0; n.depth > 0 && (s = l.exec(i)) !== null && y < n.depth;) {
                if (y += 1, !n.plainObjects && Dt.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
                f.push(s[1])
            }
            return s && f.push("[" + i.slice(s.index) + "]"), Ri(f, r, n, o)
        }
    },
    Li = function(e) {
        if (!e) return M;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset != "undefined" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = typeof e.charset == "undefined" ? M.charset : e.charset;
        return {
            allowDots: typeof e.allowDots == "undefined" ? M.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : M.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : M.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : M.arrayLimit,
            charset: r,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : M.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : M.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : M.decoder,
            delimiter: typeof e.delimiter == "string" || Ne.isRegExp(e.delimiter) ? e.delimiter : M.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : M.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : M.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : M.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : M.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : M.strictNullHandling
        }
    },
    Bi = function(t, e) {
        var r = Li(e);
        if (t === "" || t === null || typeof t == "undefined") return r.plainObjects ? Object.create(null) : {};
        for (var n = typeof t == "string" ? Mi(t, r) : t, o = r.plainObjects ? Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
            var l = i[a],
                s = Di(l, n[l], r, typeof t == "string");
            o = Ne.merge(o, s, r)
        }
        return r.allowSparse === !0 ? o : Ne.compact(o)
    },
    ji = Ii,
    Ui = Bi,
    Gi = Ft,
    Wi = {
        formats: Gi,
        parse: Ui,
        stringify: ji
    },
    me, We, Je, Ce;
class Ji {
    constructor(e, r) {
        te(this, me, void 0);
        te(this, We, void 0);
        te(this, Je, void 0);
        te(this, Ce, void 0);
        if (re(this, me, e), re(this, We, r.meta.id), !r.commands) throw new Error("Cannot construct JimmiCommand for plugin without commands");
        re(this, Je, r.commands[J(this, me)].bind(r)), Ve.subscribe(n => re(this, Ce, n))
    }
    get name() {
        return J(this, me)
    }
    get pluginId() {
        return J(this, We)
    }
    exec(e) {
        J(this, Je).call(this, e.detail)
    }
    get description() {
        return J(this, Ce) ? J(this, Ce).call(this, `plugins.${this.pluginId}.commands.${J(this,me)}.usage`) : ""
    }
}
me = new WeakMap, We = new WeakMap, Je = new WeakMap, Ce = new WeakMap;

function Nr(t, {
    delay: e = 0,
    duration: r = 400,
    easing: n = Dr
} = {}) {
    const o = +getComputedStyle(t).opacity;
    return {
        delay: e,
        duration: r,
        easing: n,
        css: i => `opacity: ${i*o}`
    }
}

function Cr(t, e, r) {
    const n = t.slice();
    return n[27] = e[r], n[29] = r, n
}

function Hi(t) {
    let e, r, n;
    return {
        c() {
            e = ue("svg"), r = ue("polygon"), n = ue("polygon"), m(r, "points", "7,3 7,21"), m(n, "points", "17,3 17,21"), m(e, "class", "w-5 h-5"), m(e, "viewBox", "0 0 24 24"), m(e, "fill", "none"), m(e, "stroke", "currentColor"), m(e, "stroke-width", "2"), m(e, "stroke-linecap", "round"), m(e, "stroke-linejoin", "round")
        },
        m(o, i) {
            F(o, e, i), h(e, r), h(e, n)
        },
        d(o) {
            o && T(e)
        }
    }
}

function Qi(t) {
    let e, r;
    return {
        c() {
            e = ue("svg"), r = ue("polygon"), m(r, "points", "5 3 19 12 5 21 5 3"), m(e, "class", "w-5 h-5"), m(e, "viewBox", "0 0 24 24"), m(e, "fill", "none"), m(e, "stroke", "currentColor"), m(e, "stroke-width", "2"), m(e, "stroke-linecap", "round"), m(e, "stroke-linejoin", "round")
        },
        m(n, o) {
            F(n, e, o), h(e, r)
        },
        d(n) {
            n && T(e)
        }
    }
}

function xr(t) {
    let e, r, n, o, i = t[27].title + "",
        a, l, s, c;

    function f() {
        return t[24](t[29])
    }
    return {
        c() {
            e = E("li"), r = E("button"), r.innerHTML = '<svg class="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>', n = x(), o = E("div"), a = ne(i), l = x(), m(r, "class", "p-3 hover:bg-green-500 group focus:outline-none"), m(o, "class", "flex-1"), m(e, "class", "flex items-center space-x-3 hover:bg-gray-100")
        },
        m(y, d) {
            F(y, e, d), h(e, r), h(e, n), h(e, o), h(o, a), h(e, l), s || (c = z(r, "click", f), s = !0)
        },
        p(y, d) {
            t = y, d & 64 && i !== (i = t[27].title + "") && oe(a, i)
        },
        d(y) {
            y && T(e), s = !1, c()
        }
    }
}

function qi(t) {
    var Gt;
    let e, r, n = !1,
        o, i, a, l, s, c, f, y, d, b, g, p = (((Gt = t[5]) == null ? void 0 : Gt.title) || "N/A") + "",
        u, v, O, S, A, L, I, U, B = at(t[3], t[4]) + "",
        G, W, R, _, N, w, H, k, ve, lt, Qe = at(t[4]) + "",
        st, Lt, ke, Y, ct, Bt;

    function jt() {
        cancelAnimationFrame(o), e.paused || (o = Br(jt), n = !0), t[18].call(e)
    }

    function Ut(P, $) {
        var q;
        return ((q = P[2]) == null ? void 0 : q.paused) ? Qi : Hi
    }
    let qe = Ut(t),
        ie = qe(t),
        ge = t[6],
        Q = [];
    for (let P = 0; P < ge.length; P += 1) Q[P] = xr(Cr(t, ge, P));
    return {
        c() {
            var P, $;
            e = E("audio"), i = x(), a = E("div"), l = E("div"), s = E("div"), c = E("img"), d = x(), b = E("div"), g = E("h3"), u = ne(p), v = x(), O = E("div"), S = E("div"), A = E("input"), L = x(), I = E("div"), U = E("div"), G = ne(B), W = x(), R = E("div"), _ = E("button"), _.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>', N = x(), w = E("button"), ie.c(), H = x(), k = E("button"), k.innerHTML = '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>', ve = x(), lt = E("div"), st = ne(Qe), Lt = x(), ke = E("ul");
            for (let q = 0; q < Q.length; q += 1) Q[q].c();
            m(e, "class", "hidden"), Fe(e.src, r = ((P = t[5]) == null ? void 0 : P.source) || void 0) || m(e, "src", r), m(e, "crossorigin", "anonymous"), e.controls = !0, t[4] === void 0 && qt(() => t[19].call(e)), Fe(c.src, f = ($ = t[5]) == null ? void 0 : $.thumbnailUrl) || m(c, "src", f), m(c, "alt", "Video thumbnail"), m(c, "class", "h-80 w-full object-cover"), m(c, "crossorigin", "anonymous"), m(c, "referrerpolicy", "no-referrer"), ze(c, "invisible", !t[7]), m(s, "class", "h-80"), m(g, "class", "font-bold"), m(b, "class", "absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white"), m(l, "class", "relative"), m(A, "type", "range"), m(A, "min", "0"), m(A, "max", t[4]), m(A, "class", "absolute h-full w-full"), m(S, "class", "relative h-1 bg-gray-200"), m(_, "class", "focus:outline-none"), m(w, "class", "rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none"), m(k, "class", "focus:outline-none"), m(R, "class", "flex space-x-3 p-2"), m(I, "class", "flex justify-between text-xs font-semibold text-gray-500 px-4 py-2"), m(ke, "class", "text-xs sm:text-base divide-y border-t cursor-default"), m(a, "class", "max-w-xl bg-white rounded-lg shadow-lg overflow-hidden")
        },
        m(P, $) {
            F(P, e, $), t[17](e), F(P, i, $), F(P, a, $), h(a, l), h(l, s), h(s, c), h(l, d), h(l, b), h(b, g), h(g, u), h(a, v), h(a, O), h(O, S), h(S, A), Vt(A, t[3]), h(a, L), h(a, I), h(I, U), h(U, G), h(I, W), h(I, R), h(R, _), h(R, N), h(R, w), ie.m(w, null), h(R, H), h(R, k), h(I, ve), h(I, lt), h(lt, st), h(a, Lt), h(a, ke);
            for (let q = 0; q < Q.length; q += 1) Q[q].m(ke, null);
            Y = !0, ct || (Bt = [z(e, "loadeddata", t[16]), z(e, "ended", t[10]), z(e, "timeupdate", jt), z(e, "durationchange", t[19]), z(c, "load", t[20]), z(A, "change", t[21]), z(A, "input", t[21]), z(_, "click", t[22]), z(w, "click", t[9]), z(k, "click", t[23])], ct = !0)
        },
        p(P, [$]) {
            var q, Wt, Jt;
            if ((!Y || $ & 32 && !Fe(e.src, r = ((q = P[5]) == null ? void 0 : q.source) || void 0)) && m(e, "src", r), !n && $ & 8 && !isNaN(P[3]) && (e.currentTime = P[3]), n = !1, (!Y || $ & 32 && !Fe(c.src, f = (Wt = P[5]) == null ? void 0 : Wt.thumbnailUrl)) && m(c, "src", f), $ & 128 && ze(c, "invisible", !P[7]), (!Y || $ & 32) && p !== (p = (((Jt = P[5]) == null ? void 0 : Jt.title) || "N/A") + "") && oe(u, p), (!Y || $ & 16) && m(A, "max", P[4]), $ & 8 && Vt(A, P[3]), (!Y || $ & 24) && B !== (B = at(P[3], P[4]) + "") && oe(G, B), qe !== (qe = Ut(P)) && (ie.d(1), ie = qe(P), ie && (ie.c(), ie.m(w, null))), (!Y || $ & 16) && Qe !== (Qe = at(P[4]) + "") && oe(st, Qe), $ & 320) {
                ge = P[6];
                let V;
                for (V = 0; V < ge.length; V += 1) {
                    const Ht = Cr(P, ge, V);
                    Q[V] ? Q[V].p(Ht, $) : (Q[V] = xr(Ht), Q[V].c(), Q[V].m(ke, null))
                }
                for (; V < Q.length; V += 1) Q[V].d(1);
                Q.length = ge.length
            }
        },
        i(P) {
            Y || (qt(() => {
                y || (y = zt(c, Nr, {}, !0)), y.run(1)
            }), Y = !0)
        },
        o(P) {
            y || (y = zt(c, Nr, {}, !1)), y.run(0), Y = !1
        },
        d(P) {
            P && T(e), t[17](null), P && T(i), P && T(a), P && y && y.end(), ie.d(), Kt(Q, P), ct = !1, Lr(Bt)
        }
    }
}

function at(t, e = t) {
    if (!e) return "--:--";
    let r = Math.trunc(t / 3600),
        n = Math.trunc(t % 3600 / 60),
        o = Math.trunc(t % 60);
    return r < 10 && (r = "0" + r), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), e > 3600 ? `${r}:${n}:${o}` : e > 60 ? `${n}:${o}` : o
}

function Vi(t, e, r) {
    let n, o, i, a, l, s = 0,
        c = 0;

    function f() {
        return Math.floor(a.gain.value * 100)
    }

    function y(w) {
        a.gain.value = [0, w / 100, 1].sort()[1]
    }

    function d() {
        if (!l) throw new Error("Audio element not ready yet!");
        const w = new AudioContext,
            H = w.createMediaElementSource(l);
        a = w.createGain();
        const k = w.createMediaStreamDestination();
        y(De.default.initialVolume), H.connect(a).connect(k), navigator.mediaDevices.getUserMedia = async function() {
            return await w.resume(), k.stream
        }
    }
    async function b(w) {
        w ? r(5, o = w) : await (l == null ? void 0 : l.play())
    }
    async function g(w) {
        r(6, n = n.concat(w))
    }

    function p() {
        return console.log(n), Object.freeze(n)
    }

    function u(w) {
        b(n[w]), n.splice(w, 1), r(6, n)
    }

    function v() {
        !l || (l.paused ? l.play() : l.pause())
    }

    function O() {
        return o
    }

    function S(w) {
        !l || r(2, l.currentTime += w, l)
    }

    function A() {
        n.length > 0 ? (b(n.shift()), r(6, n)) : (r(5, o = null), r(2, l.src = "", l))
    }
    Yt(d);
    const L = () => b();

    function I(w) {
        fe[w ? "unshift" : "push"](() => {
            l = w, r(2, l)
        })
    }

    function U() {
        s = this.currentTime, r(3, s)
    }

    function B() {
        c = this.duration, r(4, c)
    }
    const G = () => r(7, i = !0);

    function W() {
        s = jr(this.value), r(3, s)
    }
    const R = () => S(-s),
        _ = () => S(c),
        N = w => u(w);
    return r(6, n = []), r(5, o = null), r(7, i = !1), [b, S, l, s, c, o, n, i, u, v, A, f, y, g, p, O, L, I, U, B, G, W, R, _, N]
}
class zi extends he {
    constructor(e) {
        super();
        be(this, e, Vi, qi, Se, {
            getGain: 11,
            setGain: 12,
            play: 0,
            addToQueue: 13,
            getQueue: 14,
            getCurrentTrack: 15,
            forward: 1
        })
    }
    get getGain() {
        return this.$$.ctx[11]
    }
    get setGain() {
        return this.$$.ctx[12]
    }
    get play() {
        return this.$$.ctx[0]
    }
    get addToQueue() {
        return this.$$.ctx[13]
    }
    get getQueue() {
        return this.$$.ctx[14]
    }
    get getCurrentTrack() {
        return this.$$.ctx[15]
    }
    get forward() {
        return this.$$.ctx[1]
    }
}

function Ki(t) {
    let e, r, n, o, i = t[0].getDisplayName() + "",
        a;
    return {
        c() {
            e = E("div"), r = E("div"), r.innerHTML = '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>', n = x(), o = E("h2"), a = ne(i), m(r, "class", "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"), m(o, "class", "text-gray-900 break-words text-lg title-font font-medium"), m(e, "class", "flex items-center mb-3")
        },
        m(l, s) {
            F(l, e, s), h(e, r), h(e, n), h(e, o), h(o, a)
        },
        p(l, [s]) {
            s & 1 && i !== (i = l[0].getDisplayName() + "") && oe(a, i)
        },
        i: Ke,
        o: Ke,
        d(l) {
            l && T(e)
        }
    }
}

function Yi(t, e, r) {
    let {
        participant: n
    } = e;
    return t.$$set = o => {
        "participant" in o && r(0, n = o.participant)
    }, [n]
}
class Xi extends he {
    constructor(e) {
        super();
        be(this, e, Yi, Ki, Se, {
            participant: 0
        })
    }
}
var xe, Ie, $e, He;
class Zi {
    constructor(e, r, n, o) {
        te(this, xe, void 0);
        te(this, Ie, void 0);
        te(this, $e, void 0);
        te(this, He, void 0);
        re(this, xe, e), re(this, Ie, r), re(this, He, n), re(this, $e, o)
    }
    get text() {
        return J(this, xe)
    }
    get params() {
        const [, ...e] = J(this, xe).split(" ");
        return e
    }
    get participant() {
        return J(this, Ie)
    }
    respond(e) {
        J(this, He) ? J(this, $e).call(this, e, J(this, Ie).getId()) : J(this, $e).call(this, e)
    }
}
xe = new WeakMap, Ie = new WeakMap, $e = new WeakMap, He = new WeakMap;
class eo {
    constructor(e, r) {
        this.audio = e, this.conference = r, this.play.bind(this), this.mute.bind(this), this.unmute.bind(this)
    }
    async play() {
        await this.audio.play(), this.unmute()
    }
    mute() {}
    unmute() {}
    get queue() {
        return this.audio.getQueue()
    }
    addToQueue(e) {
        this.audio.addToQueue(e)
    }
    get currentTrack() {
        return this.audio.getCurrentTrack()
    }
    set currentTrack(e) {
        this.audio.play(e)
    }
    forward(e) {
        this.audio.forward(e)
    }
    get volume() {
        return this.audio.getGain()
    }
    set volume(e) {
        this.audio.setGain(e), e && this.unmute()
    }
}

function Ir(t, e, r) {
    const n = t.slice();
    return n[25] = e[r], n
}

function $r(t) {
    let e, r = t[3]("general.participants") + "",
        n;
    return {
        c() {
            e = E("h1"), n = ne(r), m(e, "class", "text-gray-900 text-3xl title-font font-medium mb-4")
        },
        m(o, i) {
            F(o, e, i), h(e, n)
        },
        p(o, i) {
            i & 8 && r !== (r = o[3]("general.participants") + "") && oe(n, r)
        },
        d(o) {
            o && T(e)
        }
    }
}

function kr(t) {
    let e, r;
    return e = new Xi({
        props: {
            participant: t[25]
        }
    }), {
        c() {
            Te(e.$$.fragment)
        },
        m(n, o) {
            Me(e, n, o), r = !0
        },
        p(n, o) {
            const i = {};
            o & 4 && (i.participant = n[25]), e.$set(i)
        },
        i(n) {
            r || (K(e.$$.fragment, n), r = !0)
        },
        o(n) {
            X(e.$$.fragment, n), r = !1
        },
        d(n) {
            Re(e, n)
        }
    }
}

function to(t) {
    let e, r, n, o, i, a, l, s, c, f, y = {};
    a = new zi({
        props: y
    }), t[11](a);
    let d = t[2].length && $r(t),
        b = t[2],
        g = [];
    for (let u = 0; u < b.length; u += 1) g[u] = kr(Ir(t, b, u));
    const p = u => X(g[u], 1, 1, () => {
        g[u] = null
    });
    return {
        c() {
            e = E("div"), r = x(), n = E("div"), o = E("div"), i = E("div"), Te(a.$$.fragment), l = x(), s = E("div"), d && d.c(), c = x();
            for (let u = 0; u < g.length; u += 1) g[u].c();
            m(i, "class", "w-full sm:w-2/3 md:w-3/4 pt-1 px-2"), m(s, "class", "w-full sm:w-1/3 md:w-1/4 px-2"), m(o, "class", "flex flex-row flex-wrap py-4"), m(n, "class", "container mx-auto")
        },
        m(u, v) {
            F(u, e, v), t[10](e), F(u, r, v), F(u, n, v), h(n, o), h(o, i), Me(a, i, null), h(o, l), h(o, s), d && d.m(s, null), h(s, c);
            for (let O = 0; O < g.length; O += 1) g[O].m(s, null);
            f = !0
        },
        p(u, [v]) {
            const O = {};
            if (a.$set(O), u[2].length ? d ? d.p(u, v) : (d = $r(u), d.c(), d.m(s, c)) : d && (d.d(1), d = null), v & 4) {
                b = u[2];
                let S;
                for (S = 0; S < b.length; S += 1) {
                    const A = Ir(u, b, S);
                    g[S] ? (g[S].p(A, v), K(g[S], 1)) : (g[S] = kr(A), g[S].c(), K(g[S], 1), g[S].m(s, null))
                }
                for (Xt(), S = b.length; S < g.length; S += 1) p(S);
                Zt()
            }
        },
        i(u) {
            if (!f) {
                K(a.$$.fragment, u);
                for (let v = 0; v < b.length; v += 1) K(g[v]);
                f = !0
            }
        },
        o(u) {
            X(a.$$.fragment, u), g = g.filter(Boolean);
            for (let v = 0; v < g.length; v += 1) X(g[v]);
            f = !1
        },
        d(u) {
            u && T(e), t[10](null), u && T(r), u && T(n), t[11](null), Re(a), d && d.d(), Kt(g, u)
        }
    }
}

function Fr() {
    alert("Connection failed! Please report this issue"), console.error("Connection Failed!")
}
async function ro(t) {
    return new Promise(e => setTimeout(e, t))
}
async function Tr() {
    const t = window.JitsiMeetJS;
    return typeof t != "undefined" ? t : (await ro(100), Tr())
}

function no(t, e, r) {
    let n, o;
    Ye(t, Ve, _ => r(3, o = _));
    let {
        isJoined: i = !1
    } = e, {
        roomName: a
    } = e, {
        jimmiApi: l
    } = e, {
        conferencePassword: s = ""
    } = e, c, f, y, d = [], b;
    const g = Ur();
    let p, u;

    function v() {
        r(2, n = y.getParticipants())
    }

    function O() {
        for (let _ = 0; _ < d.length; _++) d[_].dispose();
        y && y.leave(), f && f.disconnect()
    }

    function S(_) {
        if (_ && (d = _), !!i)
            for (let N = 0; N < d.length; N++) y.addTrack(d[N])
    }

    function A() {
        const _ = (N, w, H) => g("message", new Zi(w, y.getParticipantById(N), H, y.sendMessage.bind(y)));
        y.addEventListener(p.events.conference.PRIVATE_MESSAGE_RECEIVED, (N, w) => _(N, w, !0)), y.addEventListener(p.events.conference.MESSAGE_RECEIVED, (N, w) => _(N, w, !1))
    }
    async function L() {
        console.info("Successfully joined conference!"), b(null), r(4, i = !0), S();
        const _ = () => {};
        y.addEventListener(p.events.conference.MESSAGE_RECEIVED, _), await (w => new Promise(H => setTimeout(H, w)))(1e3), y.removeEventListener(p.events.conference.MESSAGE_RECEIVED, _), A()
    }

    function I() {
        console.info("Connection established successfully");
        const _ = {
            startAudioMuted: !1
        };
        y = f.initJitsiConference(a.toLowerCase(), _), y.setDisplayName(De.default.jitsiDisplayName), y.on(p.events.conference.CONFERENCE_JOINED, L), y.on(p.events.conference.USER_JOINED, v), y.on(p.events.conference.USER_LEFT, v), y.on(p.events.conference.DISPLAY_NAME_CHANGED, v), y.join(s)
    }

    function U() {
        console.info("disconnecting!"), f.removeEventListener(p.events.connection.CONNECTION_ESTABLISHED, I), f.removeEventListener(p.events.connection.CONNECTION_FAILED, Fr), f.removeEventListener(p.events.connection.CONNECTION_DISCONNECTED, U)
    }
    async function B(_) {
        let N = document.createElement("script");
        N.src = `https://${_.hosts.domain}/libs/lib-jitsi-meet.min.js`, u == null || u.append(N), p = await Tr(), p.setLogLevel(p.logLevels.WARN), window.addEventListener("beforeunload", O), window.addEventListener("unload", O);
        const w = {
                disableAudioLevels: !0,
                disableThirdPartyRequests: !0,
                enableAnalyticsLogging: !1
            },
            H = new Promise(k => {
                b = k
            });
        p.init(w), f = new p.JitsiConnection(void 0, null, _), f.addEventListener(p.events.connection.CONNECTION_ESTABLISHED, I), f.addEventListener(p.events.connection.CONNECTION_FAILED, Fr), f.addEventListener(p.events.connection.CONNECTION_DISCONNECTED, U), f.connect(), p.createLocalTracks({
            devices: ["audio"]
        }).then(S).catch(k => {
            throw k
        }), await H, r(5, l = new eo(c, y))
    }

    function G(_, N) {
        y.addEventListener(_, N)
    }
    Gr(() => {
        O()
    });

    function W(_) {
        fe[_ ? "unshift" : "push"](() => {
            u = _, r(1, u)
        })
    }

    function R(_) {
        fe[_ ? "unshift" : "push"](() => {
            c = _, r(0, c)
        })
    }
    return t.$$set = _ => {
        "isJoined" in _ && r(4, i = _.isJoined), "roomName" in _ && r(6, a = _.roomName), "jimmiApi" in _ && r(5, l = _.jimmiApi), "conferencePassword" in _ && r(7, s = _.conferencePassword)
    }, r(2, n = []), [c, u, n, o, i, l, a, s, B, G, W, R]
}
class io extends he {
    constructor(e) {
        super();
        be(this, e, no, to, Se, {
            isJoined: 4,
            roomName: 6,
            jimmiApi: 5,
            conferencePassword: 7,
            joinConference: 8,
            addConferenceEventListener: 9
        })
    }
    get joinConference() {
        return this.$$.ctx[8]
    }
    get addConferenceEventListener() {
        return this.$$.ctx[9]
    }
}

function oo(t) {
    let e, r, n, o, i, a, l, s, c, f, y, d = t[0]("general.leave") + "",
        b, g, p, u, v, O;
    return {
        c() {
            e = E("header"), r = E("div"), n = E("a"), o = E("img"), a = x(), l = E("span"), l.textContent = "JIMMI", s = x(), c = E("nav"), f = x(), y = E("button"), b = ne(d), g = x(), p = ue("svg"), u = ue("path"), Fe(o.src, i = De.logo) || m(o, "src", i), m(o, "alt", "Logo"), m(o, "class", "w-16 h-16"), m(l, "class", "ml-3 text-white text-xl font-mono"), m(n, "href", De.url), m(n, "class", "flex title-font font-medium items-center text-gray-900 mb-4 sm:mb-0"), m(c, "class", "sm:ml-auto flex flex-wrap items-center text-base justify-center"), m(u, "d", "M5 12h14M12 5l7 7-7 7"), m(p, "fill", "none"), m(p, "stroke", "currentColor"), m(p, "stroke-linecap", "round"), m(p, "stroke-linejoin", "round"), m(p, "stroke-width", "2"), m(p, "class", "w-4 h-4 ml-1"), m(p, "viewBox", "0 0 24 24"), m(y, "class", "inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 sm:mt-0"), m(r, "class", "container p-2 mx-auto flex flex-wrap p-1 flex-col sm:flex-row items-center"), m(e, "class", "bg-indigo-500 text-lightgray-600 body-font")
        },
        m(S, A) {
            F(S, e, A), h(e, r), h(r, n), h(n, o), h(n, a), h(n, l), h(r, s), h(r, c), h(r, f), h(r, y), h(y, b), h(y, g), h(y, p), h(p, u), v || (O = z(y, "click", t[1]), v = !0)
        },
        p(S, [A]) {
            A & 1 && d !== (d = S[0]("general.leave") + "") && oe(b, d)
        },
        i: Ke,
        o: Ke,
        d(S) {
            S && T(e), v = !1, O()
        }
    }
}

function ao(t, e, r) {
    let n;
    Ye(t, Ve, i => r(0, n = i));

    function o() {
        Wr("/")
    }
    return [n, o]
}
class lo extends he {
    constructor(e) {
        super();
        be(this, e, ao, oo, Se, {})
    }
}

function so(t) {
    let e, r, n, o;
    const i = t[1].default,
        a = Jr(i, t, t[0], null);
    return {
        c() {
            e = E("div"), r = E("div"), n = x(), a && a.c(), m(r, "class", "ml-5 w-20 h-20 border-4 border-indigo-600 rounded-full loader svelte-1rc6lrp"), m(e, "class", "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")
        },
        m(l, s) {
            F(l, e, s), h(e, r), h(e, n), a && a.m(e, null), o = !0
        },
        p(l, [s]) {
            a && a.p && (!o || s & 1) && Hr(a, i, l, l[0], o ? qr(i, l[0], s, null) : Qr(l[0]), null)
        },
        i(l) {
            o || (K(a, l), o = !0)
        },
        o(l) {
            X(a, l), o = !1
        },
        d(l) {
            l && T(e), a && a.d(l)
        }
    }
}

function co(t, e, r) {
    let {
        $$slots: n = {},
        $$scope: o
    } = e;
    return t.$$set = i => {
        "$$scope" in i && r(0, o = i.$$scope)
    }, [o, n]
}
class fo extends he {
    constructor(e) {
        super();
        be(this, e, co, so, Se, {})
    }
}

function Mr(t) {
    let e, r, n;
    return r = new fo({
        props: {
            $$slots: {
                default: [uo]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            e = E("div"), Te(r.$$.fragment), m(e, "class", "flex flex-col items-center justify-center")
        },
        m(o, i) {
            F(o, e, i), Me(r, e, null), n = !0
        },
        p(o, i) {
            const a = {};
            i & 16416 && (a.$$scope = {
                dirty: i,
                ctx: o
            }), r.$set(a)
        },
        i(o) {
            n || (K(r.$$.fragment, o), n = !0)
        },
        o(o) {
            X(r.$$.fragment, o), n = !1
        },
        d(o) {
            o && T(e), Re(r)
        }
    }
}

function uo(t) {
    let e, r = t[5]("general.connecting") + "",
        n, o;
    return {
        c() {
            e = E("p"), n = ne(r), o = ne("..."), m(e, "class", "p-5")
        },
        m(i, a) {
            F(i, e, a), h(e, n), h(e, o)
        },
        p(i, a) {
            a & 32 && r !== (r = i[5]("general.connecting") + "") && oe(n, r)
        },
        d(i) {
            i && T(e)
        }
    }
}

function po(t) {
    let e, r, n, o, i, a, l, s, c;
    e = new lo({});
    let f = !t[2] && Mr(t);

    function y(p) {
        t[9](p)
    }

    function d(p) {
        t[10](p)
    }

    function b(p) {
        t[11](p)
    }
    let g = {
        roomName: t[0].room
    };
    return t[2] !== void 0 && (g.isJoined = t[2]), t[3] !== void 0 && (g.jimmiApi = t[3]), t[4].password !== void 0 && (g.conferencePassword = t[4].password), i = new io({
        props: g
    }), t[8](i), fe.push(() => ft(i, "isJoined", y)), fe.push(() => ft(i, "jimmiApi", d)), fe.push(() => ft(i, "conferencePassword", b)), i.$on("message", t[6]), {
        c() {
            Te(e.$$.fragment), r = x(), f && f.c(), n = x(), o = E("div"), Te(i.$$.fragment), ze(o, "hidden", !t[2])
        },
        m(p, u) {
            Me(e, p, u), F(p, r, u), f && f.m(p, u), F(p, n, u), F(p, o, u), Me(i, o, null), c = !0
        },
        p(p, [u]) {
            p[2] ? f && (Xt(), X(f, 1, 1, () => {
                f = null
            }), Zt()) : f ? (f.p(p, u), u & 4 && K(f, 1)) : (f = Mr(p), f.c(), K(f, 1), f.m(n.parentNode, n));
            const v = {};
            u & 1 && (v.roomName = p[0].room), !a && u & 4 && (a = !0, v.isJoined = p[2], ut(() => a = !1)), !l && u & 8 && (l = !0, v.jimmiApi = p[3], ut(() => l = !1)), !s && u & 16 && (s = !0, v.conferencePassword = p[4].password, ut(() => s = !1)), i.$set(v), u & 4 && ze(o, "hidden", !p[2])
        },
        i(p) {
            c || (K(e.$$.fragment, p), K(f), K(i.$$.fragment, p), c = !0)
        },
        o(p) {
            X(e.$$.fragment, p), X(f), X(i.$$.fragment, p), c = !1
        },
        d(p) {
            Re(e, p), p && T(r), f && f.d(p), p && T(n), p && T(o), t[8](null), Re(i)
        }
    }
}

function yo(t, e, r) {
    let n, o, i;
    Ye(t, Ve, v => r(5, o = v)), Ye(t, Vr, v => r(7, i = v));
    let {
        params: a
    } = e, l, s, c;
    const f = {};

    function y(v) {
        if (!c) return;
        let O = Object.keys(f).reduce((S, A) => S += `
${f[A].description||o("general.noDescriptionForCommand")}`, `The following commands are available:
!help - Display this help menu`);
        v.respond(O)
    }

    function d(v) {
        if (v.detail.text.startsWith("!")) {
            let [O] = v.detail.text.split(" ");
            if (O = O.toLocaleLowerCase(), O === "!help") return y(v.detail);
            O in f && f[O].exec(v)
        }
    }
    Yt(async () => {
        const v = {
            hosts: {
                domain: a.instance,
                muc: `conference.${a.instance}`
            },
            bosh: `https://${a.instance}/http-bind?room=${a.room}`
        };
        await l.joinConference(v);
        const O = new RegExp(/^\w+$/);
        De.plugins.map(S => new S(c)).forEach(S => {
            Object.keys(S.commands || {}).forEach(A => {
                const L = `!${A}`;
                O.test(A) ? L in f ? console.warn(`Duplicate command: "${L}" provided by plugin "${S.meta.id}" is already used!`) : f[L] = new Ji(A, S) : console.error(`Invalid command: "${A}" provided by plugin "${S.meta.id}" is not a valid command name!`)
            }), Object.keys(S.events || {}).forEach(A => {
                Object.values(zr).includes(A) ? l.addConferenceEventListener(A, S.events[A].bind(S)) : console.error(`Invalid jitsi conference event: ${A} provided by plugin "${S.meta.id}"`)
            })
        })
    });

    function b(v) {
        fe[v ? "unshift" : "push"](() => {
            l = v, r(1, l)
        })
    }

    function g(v) {
        s = v, r(2, s)
    }

    function p(v) {
        c = v, r(3, c)
    }

    function u(v) {
        t.$$.not_equal(n.password, v) && (n.password = v, r(4, n), r(7, i))
    }
    return t.$$set = v => {
        "params" in v && r(0, a = v.params)
    }, t.$$.update = () => {
        t.$$.dirty & 128 && r(4, n = Wi.parse(i || ""))
    }, [a, l, s, c, n, o, d, i, b, g, p, u]
}
class ho extends he {
    constructor(e) {
        super();
        be(this, e, yo, po, Se, {
            params: 0
        })
    }
}
export {
    ho as
    default
};
