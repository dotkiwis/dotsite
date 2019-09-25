! function () {
    function t(t, e) {
        for (var n = t.split("."), r = mt, o = r[n[0]], i = 1; o && i < n.length; i++) r = o, o = o[n[i]];
        if ("function" == Z(o)) {
            var a = [];
            for (i = 1; i < arguments.length; i++) a.push(rt(arguments[i]));
            o.apply(r, a)
        }
    }

    function e() {
        return mt.location.href
    }

    function n(t, e, n) {
        for (var r = t.split("."), o = mt, i = 0; i < r.length - 1; i++)
            if (o = o[r[i]], void 0 === o || null === o) return;
        return e && (void 0 === o[r[i]] || n && !o[r[i]]) && (o[r[i]] = rt(e)), ot(o[r[i]])
    }

    function r() {
        return _t.referrer
    }

    function o(t, e, n, r, o) {
        var i;
        if (r && r instanceof Y) {
            i = [];
            for (var a = Number(r.get("length")), s = 0; a > s; s++) {
                var u = r.get(s);
                "string" == typeof u && i.push(u)
            }
        }
        return Nt(It(t), e, n, i, o)
    }

    function i(t) {
        return Nt(It(t), "fragment")
    }

    function a(t) {
        return t instanceof z
    }

    function s(t, e) {
        var n = this.s();
        Ot(t, function () {
            e instanceof K && e.g(n)
        })
    }

    function u(t, e, n, r) {
        var o = this.s(),
            i = function () {
                e instanceof K && e.g(o)
            },
            a = function () {
                n instanceof K && n.g(o)
            };
        r ? Dt[r] ? (Dt[r].onSuccess.push(i), Dt[r].onFailure.push(a)) : (Dt[r] = {
            onSuccess: [i],
            onFailure: [a]
        }, Et(t, function () {
            for (var t = Dt[r].onSuccess, e = 0; e < t.length; e++) At(t[e]);
            t.push = function (t) {
                return At(t), 0
            }
        }, function () {
            for (var t = Dt[r].onFailure, e = 0; e < t.length; e++) At(t[e]);
            Dt[r] = null
        })) : Et(t, i, a)
    }

    function c(t) {
        return Pt(It(t))
    }

    function f(t, e, n) {
        return t.replace(new RegExp(e, "g"), n)
    }

    function l(t, e, n) {
        var r = this.s();
        Tt(t, function () {
            e instanceof K && e.g(r)
        }, function () {
            n instanceof K && n.g(r)
        })
    }

    function p(t, e, n) {
        for (var r = t.split("."), o = mt, i = 0; i < r.length - 1; i++)
            if (o = o[r[i]], void 0 === o) return !1;
        return void 0 === o[r[i]] || n ? (o[r[i]] = rt(e), !0) : !1
    }

    function g(t) {
        if (!we) {
            var e = _t.createEventObject,
                n = "complete" == _t.readyState,
                r = "interactive" == _t.readyState;
            if (!t || "readystatechange" != t.type || n || !e && r) {
                we = !0;
                for (var o = 0; o < Ee.length; o++) At(Ee[o])
            }
            Ee.push = function () {
                for (var t = 0; t < arguments.length; t++) At(arguments[t]);
                return 0
            }
        }
    }

    function h() {
        if (!we && 140 > be) {
            be++;
            try {
                _t.documentElement.doScroll("left"), g()
            } catch (t) {
                mt.setTimeout(h, 50)
            }
        }
    }

    function v(t) {
        var e = 0,
            n = 0,
            r = !1;
        return {
            add: function () {
                return n++, he(function () {
                    e++, r && e >= n && t()
                })
            },
            Ua: function () {
                r = !0, e >= n && t()
            }
        }
    }

    function d() {
        return Ve = Ve || !Jt.gtagRegistered, Jt.gtagRegistered = !0, Ve
    }

    function m(t) {
        if (void 0 === We[t.id]) {
            var e;
            if ("UA" == t.prefix) e = Me("gtagua", {
                trackingId: t.id
            });
            else if ("AW" == t.prefix) e = Me("gtagaw", {
                conversionId: t
            });
            else {
                if ("DC" != t.prefix) return void me("Unknown target: %s", t);
                e = Me("gtagfl", {
                    targetId: t.id
                })
            }
            if (!le) {
                var n = {
                        name: "send_to",
                        dataLayerVersion: 2
                    },
                    r = {};
                r[Oe.O] = "__v";
                for (var o in n) n.hasOwnProperty(o) && (r["vtp_" + o] = n[o]);
                Gt.push(r), le = ["macro", Gt.length - 1]
            }
            var i = {
                arg0: le,
                arg1: t.id,
                ignore_case: !1
            };
            i[Oe.O] = "_lc", Mt.push(i);
            var a = {
                "if": [Mt.length - 1],
                add: [e]
            };
            a["if"] && (a.add || a.block) && jt.push(a), We[t.id] = e
        }
    }

    function _(t, e, n) {
        me("Ignored %s command. Invalid arguments found.", t), me("  Expected: %s", e), me("  Actual:   %s", n)
    }

    function y() {
        if (!$e) {
            $e = !0;
            for (var t = 0; t < Je.length; t++) At(Je[t])
        }
    }

    function w(t) {
        var e = t.arg0,
            n = t.arg1;
        switch (t["function"]) {
            case "_cn":
                return 0 <= String(e).indexOf(String(n));
            case "_ew":
                var r, o;
                r = String(e), o = String(n);
                var i = r.length - o.length;
                return i >= 0 && r.indexOf(o, i) == i;
            case "_eq":
                return String(e) == String(n);
            case "_ge":
                return Number(e) >= Number(n);
            case "_gt":
                return Number(e) > Number(n);
            case "_lc":
                var a;
                return a = e.toString().split(","), 0 <= H(a, String(n));
            case "_le":
                return Number(e) <= Number(n);
            case "_lt":
                return Number(e) < Number(n);
            case "_re":
                var s, u = t.ignore_case ? "i" : void 0;
                try {
                    var c = String(n) + u,
                        f = nn.get(c);
                    f || (f = new RegExp(n, u), nn.set(c, f)), s = f.test(e)
                } catch (l) {
                    s = !1
                }
                return s;
            case "_sw":
                return 0 == String(e).indexOf(String(n))
        }
        return !1
    }

    function b(t, e, n, r) {
        return (r || "https:" == mt.location.protocol ? t : e) + n
    }

    function E(t, e) {
        for (var n = e || (t instanceof Y ? new Y : new z), r = t.A(), o = Number(r.get("length")), i = 0; o > i; i++) {
            var a = r.get(i);
            if (t.has(a)) {
                var s = t.get(a);
                s instanceof Y ? (n.get(a) instanceof Y || n.set(a, new Y), E(s, n.get(a))) : s instanceof z ? (n.get(a) instanceof z || n.set(a, new z), E(s, n.get(a))) : n.set(a, s)
            }
        }
        return n
    }

    function O() {
        return $t.N
    }

    function T() {
        return (new Date).getTime()
    }

    function S(t, e) {
        return ot(ke(t, e || 2))
    }

    function A() {
        return zt
    }

    function k(t) {
        var e = _t.createElement("div");
        e.innerHTML = "A<div>" + ('<a href="' + t + '"></a>') + "</div>", e = e.lastChild;
        for (var n = []; e.firstChild;) n.push(e.removeChild(e.firstChild));
        return n[0].href
    }

    function N(t) {
        return ie(rt(t))
    }

    function P(t) {
        return null === t ? "null" : void 0 === t ? "undefined" : t.toString()
    }

    function I(t, e) {
        return ce(t, e)
    }

    function L(t, e, n) {
        if (!(t instanceof Y)) return null;
        for (var r = new z, o = !1, i = t.get("length"), a = 0; i > a; a++) {
            var s = t.get(a);
            s instanceof z && s.has(e) && s.has(n) && (r.set(s.get(e), s.get(n)), o = !0)
        }
        return o ? r : null
    }

    function R(t) {
        return t && "string" == typeof t && t.match(pn) ? t : "_gcl"
    }

    function C(t) {
        if (t) {
            if ("string" == typeof t) {
                var e = R(t);
                return {
                    U: e,
                    S: e
                }
            }
            if (t && "object" == typeof t) return {
                U: R(t.dc),
                S: R(t.aw)
            }
        }
        return {
            U: "_gcl",
            S: "_gcl"
        }
    }

    function x(t) {
        var e = It(mt.location.href),
            n = Nt(e, "host", !1);
        if (n && n.match(hn)) {
            var r = Nt(e, "path").split(t + "=");
            if (1 < r.length) return r[1].split(";")[0].split("?")[0]
        }
    }

    function D(t) {
        return t.filter(function (t) {
            return gn.test(t)
        })
    }

    function G() {
        var t = It(mt.location.href),
            e = Nt(t, "query", !1, void 0, "gclid"),
            n = Nt(t, "query", !1, void 0, "gclsrc");
        if (!e || !n) {
            var r = Nt(t, "fragment");
            e = e || kt(r, "gclid"), n = n || kt(r, "gclsrc")
        }
        return void 0 !== e && e.match(gn) ? {
            W: e,
            D: n
        } : null
    }
    var j = {
            resource: {
                version: "1",
                macros: [],
                tags: [],
                predicates: [],
                rules: []
            },
            runtime: [
                [],
                []
            ]
        },
        M = function (t, e) {
            function n() {}
            n.prototype = e.prototype, t.Mb = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.Jb = function (t, n, r) {
                for (var o = Array(arguments.length - 2), i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                return e.prototype[n].apply(t, o)
            }
        },
        F = function (t, e) {
            this.h = t, this.cb = e
        };
    F.prototype.lb = function () {
        return this.h
    }, F.prototype.getType = F.prototype.lb, F.prototype.getData = function () {
        return this.cb
    }, F.prototype.getData = F.prototype.getData;
    var q = function (t) {
            return "number" == typeof t && t >= 0 && isFinite(t) && 0 == t % 1 || "string" == typeof t && "-" != t[0] && t == "" + parseInt(t, 10)
        },
        B = function () {
            this.K = {}, this.F = !1
        };
    B.prototype.get = function (t) {
        return this.K["dust." + t]
    }, B.prototype.set = function (t, e) {
        !this.F && (this.K["dust." + t] = e)
    }, B.prototype.has = function (t) {
        return this.K.hasOwnProperty("dust." + t)
    };
    var V = function (t) {
        var e, n = [];
        for (e in t.K) t.K.hasOwnProperty(e) && n.push(e.substr(5));
        return n
    };
    B.prototype.remove = function (t) {
        !this.F && delete this.K["dust." + t]
    };
    var Y = function (t) {
        this.M = new B, this.b = [], t = t || [];
        for (var e in t) t.hasOwnProperty(e) && (q(e) ? this.b[Number(e)] = t[Number(e)] : this.M.set(e, t[e]))
    };
    Y.prototype.toString = function () {
        for (var t = [], e = 0; e < this.b.length; e++) {
            var n = this.b[e];
            null === n || void 0 === n ? t.push("") : t.push(n.toString())
        }
        return t.join(",")
    }, Y.prototype.set = function (t, e) {
        if ("length" == t) {
            if (!q(e)) throw "RangeError: Length property must be a valid integer.";
            this.b.length = Number(e)
        } else q(t) ? this.b[Number(t)] = e : this.M.set(t, e)
    }, Y.prototype.set = Y.prototype.set, Y.prototype.get = function (t) {
        return "length" == t ? this.b.length : q(t) ? this.b[Number(t)] : this.M.get(t)
    }, Y.prototype.get = Y.prototype.get, Y.prototype.A = function () {
        for (var t = V(this.M), e = 0; e < this.b.length; e++) t.push(e + "");
        return new Y(t)
    }, Y.prototype.getKeys = Y.prototype.A, Y.prototype.remove = function (t) {
        q(t) ? delete this.b[Number(t)] : this.M.remove(t)
    }, Y.prototype.remove = Y.prototype.remove, Y.prototype.pop = function () {
        return this.b.pop()
    }, Y.prototype.pop = Y.prototype.pop, Y.prototype.push = function (t) {
        return this.b.push.apply(this.b, Array.prototype.slice.call(arguments))
    }, Y.prototype.push = Y.prototype.push, Y.prototype.shift = function () {
        return this.b.shift()
    }, Y.prototype.shift = Y.prototype.shift, Y.prototype.splice = function (t, e, n) {
        return new Y(this.b.splice.apply(this.b, arguments))
    }, Y.prototype.splice = Y.prototype.splice, Y.prototype.unshift = function (t) {
        return this.b.unshift.apply(this.b, Array.prototype.slice.call(arguments))
    }, Y.prototype.unshift = Y.prototype.unshift, Y.prototype.has = function (t) {
        return q(t) && this.b.hasOwnProperty(t) || this.M.has(t)
    };
    var W = function (t) {
        this.G = t, this.b = new B
    };
    W.prototype.add = function (t, e) {
        this.b.set(t, e)
    }, W.prototype.add = W.prototype.add, W.prototype.set = function (t, e) {
        this.G && this.G.has(t) ? this.G.set(t, e) : this.b.set(t, e)
    }, W.prototype.set = W.prototype.set, W.prototype.get = function (t) {
        return this.b.has(t) ? this.b.get(t) : this.G ? this.G.get(t) : void 0
    }, W.prototype.get = W.prototype.get, W.prototype.has = function (t) {
        return !!this.b.has(t) || !(!this.G || !this.G.has(t))
    }, W.prototype.has = W.prototype.has;
    var Q = function (t) {
            return "[object Array]" == Object.prototype.toString.call(Object(t))
        },
        H = function (t, e) {
            if (Array.prototype.indexOf) {
                var n = t.indexOf(e);
                return "number" == typeof n ? n : -1
            }
            for (var r = 0; r < t.length; r++)
                if (t[r] === e) return r;
            return -1
        },
        K = function (t, e) {
            B.call(this), this.Ga = t, this.jb = e
        };
    M(K, B), K.prototype.toString = function () {
        return this.Ga
    }, K.prototype.getName = function () {
        return this.Ga
    }, K.prototype.getName = K.prototype.getName, K.prototype.A = function () {
        return new Y(V(this))
    }, K.prototype.getKeys = K.prototype.A, K.prototype.g = function (t, e) {
        return this.jb.apply({
            s: function () {
                return t
            },
            evaluate: function (e) {
                var n = t;
                return Q(e) ? J(n, e) : e
            },
            V: function (e) {
                return $(t, e)
            }
        }, Array.prototype.slice.call(arguments, 1))
    }, K.prototype.invoke = K.prototype.g;
    var $ = function (t, e) {
            for (var n, r = 0; r < e.length && (n = J(t, e[r]), !(n instanceof F)); r++);
            return n
        },
        J = function (t, e) {
            var n = t.get(String(e[0]));
            if (!(n && n instanceof K)) throw "Attempting to execute non-function " + e[0] + ".";
            return n.g.apply(n, [t].concat(e.slice(1)))
        },
        z = function () {
            B.call(this)
        };
    M(z, B), z.prototype.A = function () {
        return new Y(V(this))
    }, z.prototype.getKeys = z.prototype.A;
    var X = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Z = function (t) {
            if (null == t) return String(t);
            var e = X.exec(Object.prototype.toString.call(Object(t)));
            return e ? e[1].toLowerCase() : "object"
        },
        tt = function (t, e) {
            return Object.prototype.hasOwnProperty.call(Object(t), e)
        },
        et = function (t) {
            if (!t || "object" != Z(t) || t.nodeType || t == t.window) return !1;
            try {
                if (t.constructor && !tt(t, "constructor") && !tt(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (var n in t);
            return void 0 === n || tt(t, n)
        },
        nt = function (t, e) {
            var n, r = e || ("array" == Z(t) ? [] : {});
            for (n in t)
                if (tt(t, n)) {
                    var o = t[n];
                    "array" == Z(o) ? ("array" != Z(r[n]) && (r[n] = []), r[n] = nt(o, r[n])) : et(o) ? (et(r[n]) || (r[n] = {}), r[n] = nt(o, r[n])) : r[n] = o
                } return r
        },
        rt = function (t) {
            if (t instanceof Y) {
                for (var e = [], n = Number(t.get("length")), r = 0; n > r; r++) t.has(r) && (e[r] = rt(t.get(r)));
                return e
            }
            if (t instanceof z) {
                var o = {},
                    i = t.A();
                for (n = Number(i.get("length")), r = 0; n > r; r++) o[i.get(r)] = rt(t.get(i.get(r)));
                return o
            }
            return t instanceof K ? function () {
                for (var e = Array.prototype.slice.call(arguments, 0), n = 0; n < e.length; n++) e[n] = ot(e[n]);
                return rt(t.g.apply(t, [{}].concat(e)))
            } : t
        },
        ot = function (t) {
            if (Q(t)) {
                for (var e = [], n = 0; n < t.length; n++) t.hasOwnProperty(n) && (e[n] = ot(t[n]));
                return new Y(e)
            }
            if (et(t)) {
                var r, o = new z;
                for (r in t) t.hasOwnProperty(r) && o.set(r, ot(t[r]));
                return o
            }
            if ("function" == typeof t) return new K("", function (e) {
                for (var n = Array.prototype.slice.call(arguments, 0), r = 0; r < n.length; r++) n[r] = rt(this.evaluate(n[r]));
                return ot(t.apply(t, n))
            });
            var i = typeof t;
            return null === t || "string" == i || "number" == i || "boolean" == i ? t : void 0
        },
        it = {
            control: function (t, e) {
                return new F(t, this.evaluate(e))
            },
            fn: function (t, e, n) {
                var r = this.s(),
                    o = this.evaluate(e);
                if (!(o instanceof Y)) throw "Error: non-List value given for Fn argument names.";
                var i = Array.prototype.slice.call(arguments, 2);
                return new K(t, function () {
                    return function (t) {
                        for (var e = new W(r), n = Array.prototype.slice.call(arguments, 0), a = 0; a < n.length; a++)
                            if (n[a] = this.evaluate(n[a]), n[a] instanceof F) return n[a];
                        var s = o.get("length");
                        for (a = 0; s > a; a++) a < n.length ? e.set(o.get(a), n[a]) : e.set(o.get(a), void 0);
                        e.set("arguments", new Y(n));
                        var u = $(e, i);
                        return u instanceof F ? "return" == u.h ? u.getData() : u : void 0
                    }
                }())
            },
            list: function (t) {
                for (var e = new Y, n = 0; n < arguments.length; n++) e.push(this.evaluate(arguments[n]));
                return e
            },
            map: function (t) {
                for (var e = new z, n = 0; n < arguments.length - 1; n += 2) e.set(this.evaluate(arguments[n]), this.evaluate(arguments[n + 1]));
                return e
            },
            undefined: function () {}
        },
        at = function () {
            this.Ea = new W
        };
    at.prototype.B = function (t, e) {
        var n = new K(t, e);
        n.F = !0, this.Ea.set(t, n)
    }, at.prototype.addInstruction = at.prototype.B, at.prototype.ya = function (t, e) {
        it.hasOwnProperty(t) && this.B(e || t, it[t])
    }, at.prototype.addNativeInstruction = at.prototype.ya, at.prototype.i = function (t, e) {
        var n = Array.prototype.slice.call(arguments, 0),
            r = J(this.Ea, n);
        return r instanceof F || r instanceof K || r instanceof Y || r instanceof z || null === r || void 0 === r || "string" == typeof r || "number" == typeof r || "boolean" == typeof r ? r : void 0
    }, at.prototype.execute = at.prototype.i, at.prototype.Bb = function (t) {
        for (var e = 0; e < arguments.length; e++) this.i.apply(this, arguments[e])
    }, at.prototype.run = at.prototype.Bb;
    var st = function (t) {
            for (var e = [], n = Number(t.get("length")), r = 0; n > r; r++) t.has(r) && (e[r] = t.get(r));
            return e
        },
        ut = {
            Gb: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" ")
        },
        ct = function (t) {
            return Number(t.get("length"))
        };
    ut.concat = function (t, e) {
        for (var n = [], r = ct(this), o = 0; r > o; o++) n.push(this.get(o));
        for (o = 1; o < arguments.length; o++)
            if (arguments[o] instanceof Y)
                for (var i = arguments[o], a = ct(i), s = 0; a > s; s++) n.push(i.get(s));
            else n.push(arguments[o]);
        return new Y(n)
    }, ut.every = function (t, e) {
        for (var n = ct(this), r = 0; r < ct(this) && n > r; r++)
            if (this.has(r) && !e.g(t, this.get(r), r, this)) return !1;
        return !0
    }, ut.filter = function (t, e) {
        for (var n = ct(this), r = [], o = 0; o < ct(this) && n > o; o++) this.has(o) && e.g(t, this.get(o), o, this) && r.push(this.get(o));
        return new Y(r)
    }, ut.forEach = function (t, e) {
        for (var n = ct(this), r = 0; r < ct(this) && n > r; r++) this.has(r) && e.g(t, this.get(r), r, this)
    }, ut.hasOwnProperty = function (t, e) {
        return this.has(e)
    }, ut.indexOf = function (t, e, n) {
        var r = ct(this),
            o = void 0 === n ? 0 : Number(n);
        0 > o && (o = Math.max(r + o, 0));
        for (var i = o; r > i; i++)
            if (this.has(i) && this.get(i) === e) return i;
        return -1
    }, ut.join = function (t, e) {
        for (var n = [], r = ct(this), o = 0; r > o; o++) n.push(this.get(o));
        return n.join(e)
    }, ut.lastIndexOf = function (t, e, n) {
        var r = ct(this),
            o = r - 1;
        void 0 !== n && (o = 0 > n ? r + n : Math.min(n, o));
        for (var i = o; i >= 0; i--)
            if (this.has(i) && this.get(i) === e) return i;
        return -1
    }, ut.map = function (t, e) {
        for (var n = ct(this), r = [], o = 0; o < ct(this) && n > o; o++) this.has(o) && (r[o] = e.g(t, this.get(o), o, this));
        return new Y(r)
    }, ut.pop = function () {
        return this.pop()
    }, ut.push = function (t, e) {
        return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
    }, ut.reduce = function (t, e, n) {
        var r, o, i = ct(this);
        if (void 0 !== n) r = n, o = 0;
        else {
            if (0 == i) throw "TypeError: Reduce on List with no elements.";
            for (var a = 0; i > a; a++)
                if (this.has(a)) {
                    r = this.get(a), o = a + 1;
                    break
                } if (a == i) throw "TypeError: Reduce on List with no elements."
        }
        for (a = o; i > a; a++) this.has(a) && (r = e.g(t, r, this.get(a), a, this));
        return r
    }, ut.reduceRight = function (t, e, n) {
        var r, o, i = ct(this);
        if (void 0 !== n) r = n, o = i - 1;
        else {
            if (0 == i) throw "TypeError: ReduceRight on List with no elements.";
            for (var a = 1; i >= a; a++)
                if (this.has(i - a)) {
                    r = this.get(i - a), o = i - (a + 1);
                    break
                } if (a > i) throw "TypeError: ReduceRight on List with no elements."
        }
        for (a = o; a >= 0; a--) this.has(a) && (r = e.g(t, r, this.get(a), a, this));
        return r
    }, ut.reverse = function () {
        for (var t = st(this), e = t.length - 1, n = 0; e >= 0; e--, n++) t.hasOwnProperty(e) ? this.set(n, t[e]) : this.remove(n);
        return this
    }, ut.shift = function () {
        return this.shift()
    }, ut.slice = function (t, e, n) {
        var r = ct(this);
        void 0 === e && (e = 0), e = 0 > e ? Math.max(r + e, 0) : Math.min(e, r), n = void 0 === n ? r : 0 > n ? Math.max(r + n, 0) : Math.min(n, r), n = Math.max(e, n);
        for (var o = [], i = e; n > i; i++) o.push(this.get(i));
        return new Y(o)
    }, ut.some = function (t, e) {
        for (var n = ct(this), r = 0; r < ct(this) && n > r; r++)
            if (this.has(r) && e.g(t, this.get(r), r, this)) return !0;
        return !1
    }, ut.sort = function (t, e) {
        var n = st(this);
        void 0 === e ? n.sort() : n.sort(function (n, r) {
            return Number(e.g(t, n, r))
        });
        for (var r = 0; r < n.length; r++) n.hasOwnProperty(r) ? this.set(r, n[r]) : this.remove(r)
    }, ut.splice = function (t, e, n, r) {
        return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
    }, ut.toString = function () {
        return this.toString()
    }, ut.unshift = function (t, e) {
        return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
    };
    var ft = {
            Y: {
                ADD: 0,
                AND: 1,
                APPLY: 2,
                ASSIGN: 3,
                BREAK: 4,
                CASE: 5,
                CONTINUE: 6,
                CONTROL: 49,
                CREATE_ARRAY: 7,
                CREATE_OBJECT: 8,
                DEFAULT: 9,
                DEFN: 50,
                DIVIDE: 10,
                DO: 11,
                EQUALS: 12,
                EXPRESSION_LIST: 13,
                FN: 51,
                FOR: 14,
                FOR_IN: 47,
                GET: 15,
                GET_CONTAINER_VARIABLE: 48,
                GET_INDEX: 16,
                GET_PROPERTY: 17,
                GREATER_THAN: 18,
                GREATER_THAN_EQUALS: 19,
                IDENTITY_EQUALS: 20,
                IDENTITY_NOT_EQUALS: 21,
                IF: 22,
                LESS_THAN: 23,
                LESS_THAN_EQUALS: 24,
                MODULUS: 25,
                MULTIPLY: 26,
                NEGATE: 27,
                NOT: 28,
                NOT_EQUALS: 29,
                NULL: 45,
                OR: 30,
                PLUS_EQUALS: 31,
                POST_DECREMENT: 32,
                POST_INCREMENT: 33,
                PRE_DECREMENT: 34,
                PRE_INCREMENT: 35,
                QUOTE: 46,
                RETURN: 36,
                SET_PROPERTY: 43,
                SUBTRACT: 37,
                SWITCH: 38,
                TERNARY: 39,
                TYPEOF: 40,
                UNDEFINED: 44,
                VAR: 41,
                WHILE: 42
            }
        },
        lt = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        pt = new F("break"),
        gt = new F("continue");
    ft.add = function (t, e) {
        return this.evaluate(t) + this.evaluate(e)
    }, ft.and = function (t, e) {
        return this.evaluate(t) && this.evaluate(e)
    }, ft.apply = function (t, e, n) {
        if (t = this.evaluate(t), e = this.evaluate(e), n = this.evaluate(n), !(n instanceof Y)) throw "Error: Non-List argument given to Apply instruction.";
        if (null === t || void 0 === t) throw "TypeError: Can't read property " + e + " of " + t + ".";
        if ("boolean" == typeof t || "number" == typeof t) {
            if ("toString" == e) return t.toString();
            throw "TypeError: " + t + "." + e + " is not a function."
        }
        if ("string" == typeof t) {
            if (0 <= H(lt, e)) return ot(t[e].apply(t, st(n)));
            throw "TypeError: " + e + " is not a function"
        }
        if (t instanceof Y) {
            if (t.has(e)) {
                var r = t.get(e);
                if (r instanceof K) {
                    var o = st(n);
                    return o.unshift(this.s()), r.g.apply(r, o)
                }
                throw "TypeError: " + e + " is not a function"
            }
            if (0 <= H(ut.Gb, e)) return o = st(n), o.unshift(this.s()), ut[e].apply(t, o)
        }
        if (t instanceof K || t instanceof z) {
            if (t.has(e)) {
                if (r = t.get(e), r instanceof K) return o = st(n), o.unshift(this.s()), r.g.apply(r, o);
                throw "TypeError: " + e + " is not a function"
            }
            if ("toString" == e) return t instanceof K ? t.getName() : t.toString();
            if ("hasOwnProperty" == e) return t.has.apply(t, st(n))
        }
        throw "TypeError: Object has no '" + e + "' property."
    }, ft.assign = function (t, e) {
        if (t = this.evaluate(t), "string" != typeof t) throw "Invalid key name given for assignment.";
        var n = this.s();
        if (!n.has(t)) throw "Attempting to assign to undefined value " + e;
        var r = this.evaluate(e);
        return n.set(t, r), r
    }, ft["break"] = function () {
        return pt
    }, ft["case"] = function (t) {
        for (var e = this.evaluate(t), n = 0; n < e.length; n++) {
            var r = this.evaluate(e[n]);
            if (r instanceof F) return r
        }
    }, ft["continue"] = function () {
        return gt
    }, ft.eb = function (t, e, n) {
        var r = new Y;
        e = this.evaluate(e);
        for (var o = 0; o < e.length; o++) r.push(e[o]);
        var i = [ft.Y.FN, t, r].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.s().set(t, this.evaluate(i))
    }, ft.fb = function (t, e) {
        return this.evaluate(t) / this.evaluate(e)
    }, ft.gb = function (t, e) {
        return this.evaluate(t) == this.evaluate(e)
    }, ft.hb = function (t) {
        for (var e, n = 0; n < arguments.length; n++) e = this.evaluate(arguments[n]);
        return e
    }, ft.kb = function (t, e, n) {
        t = this.evaluate(t), e = this.evaluate(e), n = this.evaluate(n);
        var r = this.s();
        if ("string" == typeof e)
            for (var o = 0; o < e.length; o++) {
                r.set(t, o);
                var i = this.V(n);
                if (i instanceof F) {
                    if ("break" == i.h) break;
                    if ("return" == i.h) return i
                }
            } else if (e instanceof z || e instanceof Y || e instanceof K) {
                var a = e.A(),
                    s = Number(a.get("length"));
                for (o = 0; s > o; o++)
                    if (r.set(t, a.get(o)), i = this.V(n), i instanceof F) {
                        if ("break" == i.h) break;
                        if ("return" == i.h) return i
                    }
            }
    }, ft.get = function (t) {
        return this.s().get(this.evaluate(t))
    }, ft.Da = function (t, e) {
        var n;
        if (t = this.evaluate(t), e = this.evaluate(e), void 0 === t || null === t) throw "TypeError: cannot access property of " + t + ".";
        return t instanceof z || t instanceof Y || t instanceof K ? n = t.get(e) : "string" == typeof t && ("length" == e ? n = t.length : q(e) && (n = t[e])), n
    }, ft.mb = function (t, e) {
        return this.evaluate(t) > this.evaluate(e)
    }, ft.nb = function (t, e) {
        return this.evaluate(t) >= this.evaluate(e)
    }, ft.ob = function (t, e) {
        return this.evaluate(t) === this.evaluate(e)
    }, ft.pb = function (t, e) {
        return this.evaluate(t) !== this.evaluate(e)
    }, ft["if"] = function (t, e, n) {
        var r = [];
        this.evaluate(t) ? r = this.evaluate(e) : n && (r = this.evaluate(n));
        var o = this.V(r);
        return o instanceof F ? o : void 0
    }, ft.sb = function (t, e) {
        return this.evaluate(t) < this.evaluate(e)
    }, ft.tb = function (t, e) {
        return this.evaluate(t) <= this.evaluate(e)
    }, ft.ub = function (t, e) {
        return this.evaluate(t) % this.evaluate(e)
    }, ft.multiply = function (t, e) {
        return this.evaluate(t) * this.evaluate(e)
    }, ft.vb = function (t) {
        return -this.evaluate(t)
    }, ft.wb = function (t) {
        return !this.evaluate(t)
    }, ft.xb = function (t, e) {
        return this.evaluate(t) != this.evaluate(e)
    }, ft["null"] = function () {
        return null
    }, ft.or = function (t, e) {
        return this.evaluate(t) || this.evaluate(e)
    }, ft.Ja = function (t, e) {
        var n = this.evaluate(t);
        return this.evaluate(e), n
    }, ft.Ka = function (t) {
        return this.evaluate(t)
    }, ft.quote = function (t) {
        return Array.prototype.slice.apply(arguments)
    }, ft["return"] = function (t) {
        return new F("return", this.evaluate(t))
    }, ft.setProperty = function (t, e, n) {
        if (t = this.evaluate(t), e = this.evaluate(e), n = this.evaluate(n), null === t || void 0 === t) throw "TypeError: Can't set property " + e + " of " + t + ".";
        return (t instanceof K || t instanceof Y || t instanceof z) && t.set(e, n), n
    }, ft.Fb = function (t, e) {
        return this.evaluate(t) - this.evaluate(e)
    }, ft["switch"] = function (t, e, n) {
        if (t = this.evaluate(t), e = this.evaluate(e), n = this.evaluate(n), !Q(e) || !Q(n)) throw "Error: Malformed switch instruction.";
        for (var r, o = !1, i = 0; i < e.length; i++)
            if (o || t === this.evaluate(e[i]))
                if (r = this.evaluate(n[i]), r instanceof F) {
                    var a = r.h;
                    if ("break" == a) return;
                    if ("return" == a || "continue" == a) return r
                } else o = !0;
        return n.length == e.length + 1 && (r = this.evaluate(n[n.length - 1]), r instanceof F && ("return" == r.h || "continue" == r.h)) ? r : void 0
    }, ft.Hb = function (t, e, n) {
        return this.evaluate(t) ? this.evaluate(e) : this.evaluate(n)
    }, ft["typeof"] = function (t) {
        return t = this.evaluate(t), t instanceof K ? "function" : typeof t
    }, ft.undefined = function () {}, ft["var"] = function (t) {
        for (var e = this.s(), n = 0; n < arguments.length; n++) {
            var r = arguments[n];
            "string" != typeof r || e.add(r, void 0)
        }
    }, ft["while"] = function (t, e, n, r) {
        var o, i = this.evaluate(r);
        if (this.evaluate(n) && (o = this.V(i), o instanceof F)) {
            if ("break" == o.h) return;
            if ("return" == o.h) return o
        }
        for (; this.evaluate(t);) {
            if (o = this.V(i), o instanceof F) {
                if ("break" == o.h) break;
                if ("return" == o.h) return o
            }
            this.evaluate(e)
        }
    };
    var ht = function () {
        this.Fa = !1, this.I = new at, this.J = new z, vt(this), this.i([ft.Y.VAR, "gtmUtils"]), this.i([ft.Y.ASSIGN, "gtmUtils", this.J]), this.Fa = !0
    };
    ht.prototype.rb = function () {
        return this.Fa
    }, ht.prototype.isInitialized = ht.prototype.rb, ht.prototype.i = function (t) {
        return this.I.i.apply(this.I, t)
    }, ht.prototype.execute = ht.prototype.i;
    var vt = function (t) {
        function e(t, e) {
            o.I.ya(t, String(e))
        }

        function n(t, e) {
            o.I.B(String(r[t]), e)
        }
        var r = ft.Y,
            o = t;
        e("control", r.CONTROL), e("fn", r.FN), e("list", r.CREATE_ARRAY), e("map", r.CREATE_OBJECT), e("undefined", r.UNDEFINED), n("ADD", ft.add), n("AND", ft.and), n("APPLY", ft.apply), n("ASSIGN", ft.assign), n("BREAK", ft["break"]), n("CASE", ft["case"]), n("CONTINUE", ft["continue"]), n("DEFAULT", ft["case"]), n("DEFN", ft.eb), n("DIVIDE", ft.fb), n("EQUALS", ft.gb), n("EXPRESSION_LIST", ft.hb), n("FOR_IN", ft.kb), n("GET", ft.get), n("GET_INDEX", ft.Da), n("GET_PROPERTY", ft.Da), n("GREATER_THAN", ft.mb), n("GREATER_THAN_EQUALS", ft.nb), n("IDENTITY_EQUALS", ft.ob), n("IDENTITY_NOT_EQUALS", ft.pb), n("IF", ft["if"]), n("LESS_THAN", ft.sb), n("LESS_THAN_EQUALS", ft.tb), n("MODULUS", ft.ub), n("MULTIPLY", ft.multiply), n("NEGATE", ft.vb), n("NOT", ft.wb), n("NOT_EQUALS", ft.xb), n("NULL", ft["null"]), n("OR", ft.or), n("POST_DECREMENT", ft.Ja), n("POST_INCREMENT", ft.Ja), n("PRE_DECREMENT", ft.Ka), n("PRE_INCREMENT", ft.Ka), n("QUOTE", ft.quote), n("RETURN", ft["return"]), n("SET_PROPERTY", ft.setProperty), n("SUBTRACT", ft.Fb), n("SWITCH", ft["switch"]), n("TERNARY", ft.Hb), n("TYPEOF", ft["typeof"]), n("VAR", ft["var"]), n("WHILE", ft["while"])
    };
    ht.prototype.Ra = function (t) {
        this.I.B(String(ft.Y.GET_CONTAINER_VARIABLE), t)
    }, ht.prototype.addContainerVariableInstruction = ht.prototype.Ra, ht.prototype.Sa = function (t, e) {
        for (var n = new z, r = e.A(), o = Number(r.get("length")), i = 0; o > i; i++) {
            var a = r.get(i);
            n.set(a, e.get(a))
        }
        n.F = !0, e.set("base", n), this.J.set(t, e)
    }, ht.prototype.addLibrary = ht.prototype.Sa, ht.prototype.B = function (t, e) {
        this.I.B(t, e)
    }, ht.prototype.addInstruction = ht.prototype.B, ht.prototype.ib = function (t) {
        t && this.i([t, this.J]);
        for (var e = this.J.A(), n = Number(e.get("length")), r = 0; n > r; r++) {
            var o = e.get(r);
            this.J.get(o).F = !0
        }
        this.J.F = !0
    }, ht.prototype.finalize = ht.prototype.ib;
    var dt = function () {
        this.ca = {}
    };
    dt.prototype.get = function (t) {
        return this.ca.hasOwnProperty(t) ? this.ca[t] : void 0
    }, dt.prototype.add = function (t, e) {
        if (this.ca.hasOwnProperty(t)) throw "Attempting to add a function which already exists: " + t + ".";
        var n = new K(t, function () {
            for (var t = Array.prototype.slice.call(arguments, 0), n = 0; n < t.length; n++) t[n] = this.evaluate(t[n]);
            return e.apply(this, t)
        });
        n.F = !0, this.ca[t] = n
    }, dt.prototype.addAll = function (t) {
        for (var e in t) t.hasOwnProperty(e) && this.add(e, t[e])
    };
    var mt = window,
        _t = document,
        yt = function (t, e) {
            var n = mt[t];
            return mt[t] = void 0 === n ? e : n, mt[t]
        },
        wt = function (t) {
            var e = _t.getElementsByTagName("script")[0] || _t.body || _t.head;
            e.parentNode.insertBefore(t, e)
        },
        bt = function (t, e) {
            e && (t.addEventListener ? t.onload = e : t.onreadystatechange = function () {
                t.readyState in {
                    loaded: 1,
                    complete: 1
                } && (t.onreadystatechange = null, e())
            })
        },
        Et = function (t, e, n) {
            var r = _t.createElement("script");
            return r.type = "text/javascript", r.async = !0, r.src = t, bt(r, e), n && (r.onerror = n), wt(r), r
        },
        Ot = function (t, e) {
            var n = _t.createElement("iframe");
            n.height = "0", n.width = "0", n.style.display = "none", n.style.visibility = "hidden", wt(n), bt(n, e), void 0 !== t && (n.src = t)
        },
        Tt = function (t, e, n) {
            var r = new Image(1, 1);
            r.onload = function () {
                r.onload = null, e && e()
            }, r.onerror = function () {
                r.onerror = null, n && n()
            }, r.src = t
        },
        St = function (t, e, n, r) {
            t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent("on" + e, n)
        },
        At = function (t) {
            mt.setTimeout(t, 0)
        },
        kt = function (t, e) {
            for (var n = t.split("&"), r = 0; r < n.length; r++) {
                var o = n[r].split("=");
                if (decodeURIComponent(o[0]).replace(/\+/g, " ") == e) return decodeURIComponent(o.slice(1).join("=")).replace(/\+/g, " ")
            }
        },
        Nt = function (t, e, n, r, o) {
            var i, a = t.protocol || mt.location.protocol;
            switch (a = a.replace(":", "").toLowerCase(), e && (e = String(e).toLowerCase()), e) {
                case "protocol":
                    i = a;
                    break;
                case "host":
                    if (i = (t.hostname || mt.location.hostname).split(":")[0].toLowerCase(), n) {
                        var s = /^www\d*\./.exec(i);
                        s && s[0] && (i = i.substr(s[0].length))
                    }
                    break;
                case "port":
                    i = String(1 * (t.hostname ? t.port : mt.location.port) || ("http" == a ? 80 : "https" == a ? 443 : ""));
                    break;
                case "path":
                    i = "/" == t.pathname.substr(0, 1) ? t.pathname : "/" + t.pathname;
                    var u = i.split("/");
                    0 <= H(r || [], u[u.length - 1]) && (u[u.length - 1] = ""), i = u.join("/");
                    break;
                case "query":
                    i = t.search.replace("?", ""), o && (i = kt(i, o));
                    break;
                case "fragment":
                    i = t.hash.replace("#", "");
                    break;
                default:
                    i = t && t.href
            }
            return i
        },
        Pt = function (t) {
            var e = "";
            return t && t.href && (e = t.hash ? t.href.replace(t.hash, "") : t.href), e
        },
        It = function (t) {
            var e = _t.createElement("a");
            return t && (e.href = t), e
        },
        Lt = function () {
            this.Ia = new ht;
            var t = new dt;
            t.addAll(Rt()), Ut(this, function (e) {
                return t.get(e)
            })
        },
        Rt = function () {
            return {
                callInWindow: t,
                getCurrentUrl: e,
                getInWindow: n,
                getReferrer: r,
                getUrlComponent: o,
                getUrlFragment: i,
                isPlainObject: a,
                loadIframe: s,
                loadJavaScript: u,
                removeUrlFragment: c,
                replaceAll: f,
                sendTrackingBeacon: l,
                setInWindow: p
            }
        };
    Lt.prototype.i = function (t) {
        return this.Ia.i(t)
    }, Lt.prototype.execute = Lt.prototype.i;
    var Ct, xt, Ut = function (t, e) {
            t.Ia.B("require", e)
        },
        Dt = {},
        Gt = [],
        jt = [],
        Mt = [],
        Ft = [],
        qt = {},
        Bt = function (t) {
            var e = t["function"];
            if (!e) throw "Error: No function name given for function call.";
            if (qt[e]) {
                var n, r = {};
                for (n in t) t.hasOwnProperty(n) && 0 === n.indexOf("vtp_") && (r[n] = t[n]);
                return qt[e](r)
            }
            var o = new z;
            for (n in t) t.hasOwnProperty(n) && 0 === n.indexOf("vtp_") && o.set(n.substr(4), ot(t[n]));
            var i = Ct([e, o]);
            return i instanceof F && "return" == i.h && (i = i.getData()), rt(i)
        },
        Vt = function (t, e, n) {
            var r, o = {};
            for (r in t) t.hasOwnProperty(r) && (o[r] = Yt(t[r], e, n));
            return o
        },
        Yt = function (t, e, n) {
            if (Q(t)) switch (t[0]) {
                case "function_id":
                    return t[1];
                case "list":
                    for (var r = [], o = 1; o < t.length; o++) r.push(Yt(t[o], e, n));
                    return r;
                case "macro":
                    var i = t[1];
                    if (e[i]) throw Error("Macro cycle detected. Resolving macro " + i + "results in it resolving itself.");
                    if (Gt[i]) return e[i] = !0, r = Bt(Vt(Gt[i], e, n)), e[i] = !1, r;
                    throw Error("Attempting to resolve unknown macro reference " + i + ".");
                case "map":
                    for (r = {}, o = 1; o < t.length; o += 2) r[Yt(t[o], e, n)] = Yt(t[o + 1], e, n);
                    return r;
                case "template":
                    for (r = [], o = 1; o < t.length; o++) r.push(Yt(t[o], e, n));
                    return r.join("");
                case "escape":
                    for (r = Yt(t[1], e, n), o = 2; o < t.length; o++) U[t[o]] && (r = U[t[o]](r));
                    return r;
                default:
                    throw "Error: Attempting to expand unknown Value type: " + t[0] + "."
            }
            return t
        },
        Wt = null,
        Qt = function (t) {
            function e(t) {
                for (var e = 0; e < t.length; e++) r[t[e]] = !0
            }
            var n = [],
                r = [];
            Wt = Kt(t);
            for (var o = 0; o < jt.length; o++) {
                var i = jt[o],
                    a = Ht(i);
                if (a) {
                    for (var s = i.add || [], u = 0; u < s.length; u++) n[s[u]] = !0;
                    e(i.block || [])
                } else null === a && e(i.block || [])
            }
            var c = [];
            for (o = 0; o < Ft.length; o++) n[o] && !r[o] && (c[o] = !0);
            return c
        },
        Ht = function (t) {
            for (var e = t["if"] || [], n = 0; n < e.length; n++) {
                var r = Wt(e[n]);
                if (!r) return null === r ? null : !1
            }
            var o = t.unless || [];
            for (n = 0; n < o.length; n++) {
                if (r = Wt(o[n]), null === r) return null;
                if (r) return !1
            }
            return !0
        },
        Kt = function (t) {
            var e = [];
            return function (n) {
                if (void 0 !== e[n]) return e[n];
                var r = Mt[n],
                    o = null;
                if (t(r)) o = !1;
                else try {
                    o = xt(Vt(r, [], t))
                } catch (i) {}
                return e[n] = null === o ? o : !!o
            }
        },
        $t = {},
        Jt = null;
    $t.N = "UA-43125341-1";
    var zt = null,
        Xt = {},
        Zt = {},
        te = function () {},
        ee = function (t) {
            return "function" == typeof t
        },
        ne = function (t) {
            return "string" == Z(t)
        },
        re = function (t) {
            return "number" == Z(t) && !isNaN(t)
        },
        oe = function (t) {
            return !!t && ("[object Arguments]" == Object.prototype.toString.call(t) || Object.prototype.hasOwnProperty.call(t, "callee"))
        },
        ie = function (t) {
            return Math.round(Number(t)) || 0
        },
        ae = function (t) {
            return "false" == String(t).toLowerCase() ? !1 : !!t
        },
        se = function (t) {
            var e = [];
            if (Q(t))
                for (var n = 0; n < t.length; n++) e.push(String(t[n]));
            return e
        },
        ue = function (t) {
            return t ? t.replace(/^\s+|\s+$/g, "") : ""
        },
        ce = function (t, e) {
            return (!re(t) || !re(e) || t > e) && (t = 0, e = 2147483647), Math.floor(Math.random() * (e - t + 1) + t)
        },
        fe = function () {
            this.prefix = "gtm.", this.values = {}
        };
    fe.prototype.set = function (t, e) {
        this.values[this.prefix + t] = e
    }, fe.prototype.get = function (t) {
        return this.values[this.prefix + t]
    }, fe.prototype.contains = function (t) {
        return void 0 !== this.get(t)
    };
    var le, pe, ge = function () {
            var t = Jt.sequence || 0;
            return Jt.sequence = t + 1, t
        },
        he = function (t) {
            var e = !1;
            return function () {
                if (!e) try {
                    t()
                } catch (n) {}
                e = !0
            }
        },
        ve = function (t, e) {},
        de = function (t, e) {},
        me = function (t, e) {},
        _e = function (t, e) {},
        ye = function () {},
        we = !1,
        be = 0,
        Ee = [],
        Oe = function () {
            var t = function (t) {
                return {
                    toString: function () {
                        return t
                    }
                }
            };
            return {
                O: t("function"),
                Ib: t("live_only"),
                Pa: t("tag_id")
            }
        }(),
        Te = new fe,
        Se = {},
        Ae = {
            set: function (t, e) {
                nt(Ce(t, e), Se)
            },
            get: function (t) {
                return ke(t, 2)
            },
            reset: function () {
                Te = new fe, Se = {}
            }
        },
        ke = function (t, e) {
            return 2 != e ? Te.get(t) : Ne(t)
        },
        Ne = function (t, e, n) {
            var r = t.split("."),
                o = function (t, e) {
                    for (var n = 0; void 0 !== t && n < r.length; n++) t = t[r[n]];
                    return void 0 !== t || n > 1 ? t : e.length ? o(Ie(e.pop()), e) : Pe(r)
                };
            return o(Se.eventModel, [e, n])
        },
        Pe = function (t) {
            for (var e = Se, n = 0; n < t.length && void 0 !== e; n++) e = e[t[n]];
            return e
        },
        Ie = function (t) {
            if (t) {
                var e = Pe(["gtag", "targets", t]);
                return et(e) ? e : void 0
            }
        },
        Le = function (t, e) {
            function n(t) {
                if (t)
                    for (var e in t) t.hasOwnProperty(e) && (r[e] = null)
            }
            var r = {};
            n(Se), delete r.eventModel, n(Ie(t)), n(Ie(e)), n(Se.eventModel);
            var o, i = [];
            for (o in r) r.hasOwnProperty(o) && i.push(o);
            return i
        },
        Re = function (t, e) {
            Te.set(t, e), nt(Ce(t, e), Se)
        },
        Ce = function (t, e) {
            for (var n = {}, r = n, o = t.split("."), i = 0; i < o.length - 1; i++) r = r[o[i]] = {};
            return r[o[o.length - 1]] = e, n
        },
        xe = (new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), {
            customPixels: ["nonGooglePixels"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        }),
        Ue = {
            customPixels: ["customScripts", "html"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        De = function (t, e) {
            for (var n = [], r = 0; r < t.length; r++) n.push(t[r]), n.push.apply(n, e[t[r]] || []);
            return n
        },
        Ge = function () {
            var t = ke("gtm.whitelist");
            t = "gtagua gtagaw gtagfl e v oid op cn css ew eq ge gt lc le lt re sw um".split(" ");
            var e = t && De(se(t), xe),
                n = ke("gtm.blacklist") || ke("tagTypeBlacklist") || [],
                r = n && De(se(n), Ue),
                o = {};
            return function (i) {
                var a = i && i[Oe.O];
                if (!a || "string" != typeof a) return !0;
                if (a = a.replace(/_/g, ""), void 0 !== o[a]) return o[a];
                var s = Zt[a] || [],
                    u = !0;
                if (t) t: {
                    if (0 > H(e, a)) {
                        if (!(s && 0 < s.length)) {
                            u = !1;
                            break t
                        }
                        for (var c = 0; c < s.length; c++)
                            if (0 > H(e, s[c])) {
                                u = !1;
                                break t
                            }
                    }
                    u = !0
                }
                var f = !1;
                if (n) {
                    var l;
                    if (!(l = 0 <= H(r, a))) t: {
                        for (var p = s || [], g = new fe, h = 0; h < r.length; h++) g.set(r[h], !0);
                        for (h = 0; h < p.length; h++)
                            if (g.get(p[h])) {
                                l = !0;
                                break t
                            } l = !1
                    }
                    f = l
                }
                return o[a] = !u || f
            }
        },
        je = !1,
        Me = function (t, e) {
            var n = {};
            n[Oe.O] = "__" + t;
            for (var r in e) e.hasOwnProperty(r) && (n["vtp_" + r] = e[r]);
            for (r in void 0)(void 0).hasOwnProperty(r) && (n[r] = (void 0)[r]);
            return Ft.push(n), Ft.length - 1
        },
        Fe = /[A-Z]+/,
        qe = /\s/,
        Be = function (t) {
            function e() {
                me('Cannot parse target: "%s"', t)
            }
            if (ne(t) && (t = t.trim(), !qe.test(t))) {
                var n = t.indexOf("-");
                if (!(0 > n)) {
                    var r = t.substring(0, n);
                    if (Fe.test(r)) {
                        for (var o = t.substring(n + 1).split("/"), i = 0; i < o.length; i++)
                            if (!o[i]) return void e();
                        return {
                            id: t,
                            prefix: r,
                            T: r + "-" + o[0],
                            X: o
                        }
                    }
                }
            }
            e()
        },
        Ve = null,
        Ye = {},
        We = {},
        Qe = function (t, e) {
            var n = {
                event: t
            };
            return e && (n.eventModel = nt(e, void 0), e.event_callback && (n.eventCallback = e.event_callback), e.event_timeout && (n.eventTimeout = e.event_timeout)), n
        },
        He = {
            event: function (t) {
                var e = t[1];
                if (ne(e) && !(3 < t.length)) {
                    var n;
                    if (2 < t.length) {
                        if (!et(t[2])) return;
                        n = t[2]
                    }
                    var r, o = Qe(e, n),
                        i = n,
                        a = ke("gtag.fields.send_to", 2);
                    ne(a) || (a = "send_to");
                    var s = i && i[a];
                    if (void 0 === s && (s = ke(a, 2), void 0 === s && (s = "default")), ne(s) || Q(s)) {
                        for (var u, c = s.toString().replace(/\s+/g, "").split(","), f = [], l = 0; l < c.length; l++) 0 <= c[l].indexOf("-") ? f.push(c[l]) : f = f.concat(Ye[c[l]] || []);
                        u = f;
                        for (var p = {}, g = 0; g < u.length; ++g) {
                            var h = Be(u[g]);
                            h && (p[h.id] = h)
                        }
                        var v, y = [];
                        for (v in p)
                            if (p.hasOwnProperty(v)) {
                                var w = p[v];
                                "AW" === w.prefix && w.X[1] && y.push(w.T)
                            } for (var b = 0; b < y.length; ++b) delete p[y[b]];
                        var E, O = [];
                        for (E in p) p.hasOwnProperty(E) && O.push(p[E]);
                        r = O
                    } else me('Invalid "send_to" value: %s', s), r = void 0;
                    if (!r) return;
                    var T = d();
                    T || Ke();
                    for (var S = [], A = 0; T && A < r.length; A++) {
                        var k = r[A];
                        S.push(k.id), m(k)
                    }
                    return o.eventModel = o.eventModel || {}, 0 < r.length ? o.eventModel.send_to = S.join() : delete o.eventModel.send_to, o
                }
                _("event", "[string, Object]", t)
            },
            set: function (t) {
                var e;
                return 2 == t.length && et(t[1]) ? e = nt(t[1], void 0) : 3 == t.length && ne(t[1]) ? (e = {}, e[t[1]] = t[2]) : _("set", "[string, Object] or [string, string, string]", t), e ? (e.eventModel = nt(e, void 0), e.event = "gtag.set", e._clear = !0, e) : void 0
            },
            js: function (t) {
                return 2 == t.length && t[1].getTime ? {
                    event: "gtm.js",
                    "gtm.start": t[1].getTime()
                } : void _("js", "[js, Date]", t)
            },
            config: function (t) {
                var e = t[2] || {};
                if (2 > t.length || !ne(t[1]) || !et(e)) return void _("config", "[string, object]", t);
                var n = Be(t[1]);
                if (n) {
                    d() ? m(n) : Ke();
                    var r, o = n.id;
                    for (r in Ye)
                        if (Ye.hasOwnProperty(r)) {
                            var i = H(Ye[r], o);
                            i >= 0 && Ye[r].splice(i, 1)
                        } var a = n.id,
                        s = e.groups || "default";
                    s = s.toString().split(",");
                    for (var u = 0; u < s.length; u++) Ye[s[u]] = Ye[s[u]] || [], Ye[s[u]].push(a);
                    return delete e.groups, Re("gtag.targets." + n.id, void 0), Re("gtag.targets." + n.id, nt(e, void 0)), ve('GTAG Command: "config", target: %s, configuration: %s', t[1], e), Qe("gtag.config", {
                        send_to: n.id
                    })
                }
            }
        },
        Ke = he(function () {
            de("GTAG script is installed twice.")
        }),
        $e = !1,
        Je = [],
        ze = [],
        Xe = !1,
        Ze = function (t) {
            var e = t.eventCallback,
                n = he(function () {
                    ee(e) && At(function () {
                        e($t.N)
                    })
                }),
                r = t.eventTimeout;
            return r && mt.setTimeout(n, Number(r)), n
        },
        tn = function () {
            var t = !1;
            for (_e("Processing commands (%s)", ze.length); !Xe && 0 < ze.length;) {
                Xe = !0, delete Se.eventModel;
                var e = ze.shift();
                if (ee(e)) {
                    _e("Processing custom method: %s", e);
                    try {
                        e.call(Ae)
                    } catch (n) {
                        me("Error occurred during custom method invocation: %s", n)
                    }
                } else if (Q(e)) {
                    _e("Processing data layer command: %s", e);
                    var r = e;
                    if (ne(r[0])) {
                        var o = r[0].split("."),
                            i = o.pop(),
                            a = r.slice(1),
                            s = ke(o.join("."), 2);
                        if (void 0 !== s && null !== s) try {
                            s[i].apply(s, a)
                        } catch (n) {
                            me("Error occurred during command processing: %s", n)
                        }
                    }
                } else {
                    if (oe(e)) {
                        _e("Processing GTAG command: %s", e);
                        t: {
                            var u = e;
                            if (u.length)
                                if (ne(u[0])) {
                                    var c = He[u[0]];
                                    if (c) {
                                        e = c(u);
                                        break t
                                    }
                                    me("Unknown command name: %s", u)
                                } else me("Invalid command name: %s", u);
                            else me("Command name not specified.");e = void 0
                        }
                        if (!e) {
                            Xe = !1, ye();
                            continue
                        }
                    } else _e("Processing data layer push: %s", e);
                    var f, l = void 0,
                        p = e,
                        g = p._clear;
                    for (l in p) p.hasOwnProperty(l) && "_clear" !== l && (g && Re(l, void 0), Re(l, p[l]));
                    var h = !1,
                        d = p.event;
                    if (d) {
                        f = ge(), zt = d, p["gtm.uniqueEventId"] || Re("gtm.uniqueEventId", f);
                        var m = Ze(p);
                        t: {
                            var _ = f,
                                y = d,
                                w = m;
                            switch (y) {
                                case "gtm.js":
                                    if (je) {
                                        h = !1;
                                        break t
                                    }
                                    je = !0
                            }
                            var b = {
                                id: _,
                                name: y,
                                Wa: w || te,
                                na: Ge()
                            };b.ra = Qt(b.na);
                            for (var E = b, O = !1, T = v(E.Wa), S = 0; S < E.ra.length; S++)
                                if (E.ra[S]) {
                                    var A = Ft[S];
                                    if (E.na(A)) de("Tag blacklisted: %s", A);
                                    else {
                                        var k = T.add();
                                        try {
                                            var N = Vt(A, [], E.na);
                                            N.vtp_gtmOnSuccess = k, N.vtp_gtmOnFailure = k, Bt(N), ve("Tag fired: %s", A)
                                        } catch (n) {
                                            me("Tag exception: %s - %s", A, n), k();
                                            continue
                                        }
                                        O = !0
                                    }
                                } T.Ua(),
                            h = O
                        }
                        h || ve("No tags for event: %s  were fired.", d)
                    }
                    zt = null, t = h || t
                }
                Xe = !1, ye()
            }
            return ye(), !t
        },
        en = function () {
            return tn()
        },
        nn = new fe,
        rn = function () {
            var t = new dt;
            return t.addAll(Rt()), t.addAll({
                    buildSafeUrl: b,
                    decodeHtmlUrl: k,
                    copy: E,
                    generateUniqueNumber: ge,
                    getContainerId: O,
                    getCurrentTime: T,
                    getDataLayerValue: S,
                    getEventName: A,
                    makeInteger: N,
                    makeString: P,
                    randomInteger: I,
                    tableToMap: L
                }),
                function (e) {
                    return t.get(e)
                }
        },
        on = new Lt,
        an = function (t) {
            return encodeURIComponent(t)
        },
        sn = function (t, e) {
            return H(t, e)
        },
        un = /(^|\.)doubleclick\.net$/i,
        cn = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        fn = function (t, e, n, r, o) {
            e = encodeURIComponent(e);
            var i = t + "=" + e + "; ";
            n && (i += "path=" + n + "; "), o && (i += "expires=" + o.toGMTString() + "; ");
            var a, s;
            if ("auto" == r) {
                var u = Nt(mt.location, "host", !0).split(".");
                if (4 == u.length && /^[0-9]*$/.exec(u[3])) s = ["none"];
                else {
                    for (var c = [], f = u.length - 2; f >= 0; f--) c.push(u.slice(f).join("."));
                    c.push("none"), s = c
                }
            } else s = [r || "none"];
            a = s;
            for (var l = _t.cookie, p = 0; p < a.length; p++) {
                var g = i,
                    h = a[p],
                    v = n;
                if (un.test(mt.location.hostname) || "/" == v && cn.test(h)) break;
                "none" != a[p] && (g += "domain=" + a[p] + ";"), _t.cookie = g;
                var d;
                if (!(d = l != _t.cookie)) {
                    for (var m = t, _ = String(_t.cookie).split(";"), y = [], w = 0; w < _.length; w++) {
                        var b = _[w].split("="),
                            E = ue(b[0]);
                        if (E && E == m) {
                            var O = ue(b.slice(1).join("="));
                            O && (O = decodeURIComponent(O)), y.push(O)
                        }
                    }
                    d = 0 <= H(y, e)
                }
                if (d) break
            }
        },
        ln = function (t) {
            for (var e = [], n = _t.cookie.split(";"), r = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$"), o = 0; o < n.length; o++) {
                var i = n[o].match(r);
                i && e.push(i[1])
            }
            var a = [];
            if (!e || 0 == e.length) return a;
            for (var s = 0; s < e.length; s++) {
                var u = e[s].split(".");
                3 == u.length && "GCL" == u[0] && u[1] && a.push(u[2])
            }
            return a
        },
        pn = /^\w+$/,
        gn = /^[\w-]+$/,
        hn = /^\d+\.fls\.doubleclick\.net$/,
        vn = function (t) {
            var e = x("gclaw");
            if (e) return e.split(".");
            var n = C(t);
            if ("_gcl" == n.S) {
                var r = G();
                if (r && (null == r.D || "aw.ds" == r.D)) return [r.W]
            }
            return D(ln(n.S + "_aw"))
        },
        dn = function (t) {
            var e = x("gcldc");
            if (e) return e.split(".");
            var n = C(t);
            if ("_gcl" == n.U) {
                var r = G();
                if (r && ("ds" == r.D || "aw.ds" == r.D)) return [r.W]
            }
            return D(ln(n.U + "_dc"))
        },
        mn = function () {
            var t = x("gac");
            if (t) return decodeURIComponent(t);
            for (var e = [], n = _t.cookie.split(";"), r = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, o = 0; o < n.length; o++) {
                var i = n[o].match(r);
                i && e.push({
                    sa: i[1],
                    value: i[2]
                })
            }
            var a = {};
            if (e && e.length)
                for (var s = 0; s < e.length; s++) {
                    var u = e[s].value.split(".");
                    "1" == u[0] && 3 == u.length && u[1] && (a[e[s].sa] || (a[e[s].sa] = []), a[e[s].sa].push({
                        timestamp: u[1],
                        W: u[2]
                    }))
                }
            var c, f = [];
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    for (var l = [], p = a[c], g = 0; g < p.length; g++) l.push(p[g].W);
                    l = D(l), l.length && f.push(c + ":" + l.join(","))
                } return f.join(";")
        };
    pe = "g";
    var _n = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            GTM: pe
        },
        yn = function (t) {
            var e = $t.N.split("-"),
                n = e[0].toUpperCase();
            return (_n[n] || "i") + "be" + (t && "GTM" === n ? e[1] : "")
        },
        wn = function (t) {
            return !(void 0 === t || null === t || 0 === (t + "").length)
        },
        bn = function (t, e) {
            var n;
            if (2 === e.w) return t("ord", ce(1e11, 1e13)), !0;
            if (3 === e.w) return t("ord", "1"), t("num", ce(1e11, 1e13)), !0;
            if (4 === e.w) return wn(e.sessionId) && t("ord", e.sessionId), !0;
            if (5 === e.w) n = "1";
            else {
                if (6 !== e.w) return !1;
                n = e.La
            }
            return wn(n) && t("qty", n), wn(e.ja) && t("cost", e.ja), wn(e.va) && t("ord", e.va), !0
        },
        En = encodeURIComponent,
        On = function (t, e) {
            function n(t, e, n) {
                a.hasOwnProperty(t) || (e += "", o += ";" + t + "=" + (n ? e : En(e)))
            }
            var r = t.la,
                o = t.protocol;
            o += t.fa ? "//" + r + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity", o += ";src=" + En(r) + (";type=" + En(t.ma)) + (";cat=" + En(t.R));
            var i, a = t.ab || {};
            for (i in a) a.hasOwnProperty(i) && (o += ";" + En(i) + "=" + En(a[i] + ""));
            if (bn(n, t)) {
                if (wn(t.xa) && n("u", t.xa), wn(t.tran) && n("tran", t.tran), n("gtm", yn()), t.ia) {
                    var s = dn(t.aa);
                    s && s.length && n("gcldc", s.join("."));
                    var u = vn(t.aa);
                    u && u.length && n("gclaw", u.join("."));
                    var c = mn();
                    c && n("gac", c)
                }
                wn(t.oa) && n("prd", t.oa, !0);
                for (var f in t.Z) t.Z.hasOwnProperty(f) && n(f, t.Z[f]);
                o += e, t.fa ? Ot(o, t.ea) : Tt(o, t.ea, t.da)
            } else At(t.da)
        },
        Tn = function (t) {
            mt.GoogleAnalyticsObject || (mt.GoogleAnalyticsObject = t || "ga");
            var e = mt.GoogleAnalyticsObject;
            if (!mt[e]) {
                var n = function () {
                    n.q = n.q || [], n.q.push(arguments)
                };
                n.l = Number(new Date), mt[e] = n
            }
            return mt[e]
        },
        Sn = function () {
            return mt.GoogleAnalyticsObject && mt[mt.GoogleAnalyticsObject]
        },
        An = function (t, e, n, r) {
            e = String(e).replace(/\s+/g, "").split(",");
            var o = Sn();
            o(t + "require", "linker"), o(t + "linker:autoLink", e, n, r)
        },
        kn = "www.googletagmanager.com/gtm.js";
    kn = "www.googletagmanager.com/gtag/js";
    var Nn = kn,
        Pn = function (t, e, n) {
            Et(t, e, n)
        },
        In = function (t, e) {
            return e && void 0 === mt[t] && (mt[t] = e), mt[t]
        },
        Ln = function (t) {
            var e = void 0,
                n = void 0,
                r = C(t);
            n = n || "auto", e = e || "/";
            var o = G();
            if (null != o) {
                var i = (new Date).getTime(),
                    a = new Date(i + 7776e6),
                    s = ["GCL", Math.round(i / 1e3), o.W].join(".");
                o.D && "aw.ds" != o.D || fn(r.S + "_aw", s, e, n, a), "aw.ds" != o.D && "ds" != o.D || fn(r.U + "_dc", s, e, n, a)
            }
        },
        Rn = function (t, e, n, r) {
            var o = !r && "http:" == mt.location.protocol;
            return o && (o = 2 !== Cn()), (o ? e : t) + n
        },
        Cn = function () {
            var t = Nn;
            t = t.toLowerCase();
            for (var e = "https://" + t, n = "http://" + t, r = 1, o = _t.getElementsByTagName("script"), i = 0; i < o.length && 100 > i; i++) {
                var a = o[i].src;
                if (a) {
                    if (a = a.toLowerCase(), 0 === a.indexOf(n)) return 3;
                    1 === r && 0 === a.indexOf(e) && (r = 2)
                }
            }
            return r
        },
        xn = function (t, e) {
            return Ne(t, e, void 0)
        },
        Un = {
            a: {}
        };
    Un.a.e = ["google"],
        function () {
            ! function (t) {
                Un.__e = t, Un.__e.m = "e", Un.__e.o = !0
            }(function () {
                return zt
            })
        }(), Un.a.v = ["google"],
        function () {
            ! function (t) {
                Un.__v = t, Un.__v.m = "v", Un.__v.o = !0
            }(function (t) {
                var e, n = t.vtp_name.replace(/\\\./g, ".");
                return e = ke(n, t.vtp_dataLayerVersion || 1), void 0 !== e ? e : t.vtp_defaultValue
            })
        }(), Un.a.gtagaw = ["google"],
        function () {
            var t = !1,
                e = !1,
                n = [],
                r = "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class".split(" "),
                o = function (t) {
                    var e = In("google_trackConversion"),
                        n = t.gtm_onFailure;
                    "function" == typeof e ? e(t) || n() : n()
                },
                i = function () {
                    for (; 0 < n.length;) o(n.shift())
                },
                a = function () {
                    t || (t = !0, Pn(Rn("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                        i(), n = {
                            push: o
                        }
                    }, function () {
                        i(), t = !1
                    }))
                },
                s = function (t, n, r, o) {
                    if (n) {
                        var i = t.X[0],
                            a = t.X[1],
                            s = In("_googWcmImpl", function () {
                                s.q = s.q || [], s.q.push(arguments)
                            });
                        In("_googWcmAk", i), e || (e = !0, Pn(Rn("https://", "http://", "www.gstatic.com/wcm/loader.js")));
                        var u = {
                            ak: i,
                            cl: a
                        };
                        void 0 === r && (u.autoreplace = n), s(2, r, u, n, o, new Date, o)
                    }
                };
            ! function (t) {
                Un.__gtagaw = t, Un.__gtagaw.m = "gtagaw", Un.__gtagaw.o = !0
            }(function (t) {
                var e = t.vtp_conversionId,
                    o = "gtag.config" == zt,
                    i = e.X[0],
                    u = e.X[1],
                    c = void 0 !== u,
                    f = e.T,
                    l = c ? e.id : void 0,
                    p = function (t) {
                        return Ne(t, f, l)
                    },
                    g = !1 !== p("conversion_linker"),
                    h = p("conversion_cookie_prefix");
                if (o && g && Ln(h), o && c) {
                    var v = p("phone_conversion_number"),
                        d = p("phone_conversion_callback"),
                        m = p("phone_conversion_css_class"),
                        _ = p("phone_conversion_options");
                    s(e, v, d || m, _)
                }
                var y = !1 === p("aw_remarketing") || !1 === p("send_page_view");
                if (!o || !c && !y) {
                    !0 === p("aw_remarketing_only") && (c = !1);
                    var w = {
                        google_conversion_id: i,
                        google_remarketing_only: !c,
                        onload_callback: t.vtp_gtmOnSuccess,
                        gtm_onFailure: t.vtp_gtmOnFailure,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: u,
                        google_conversion_language: p("language"),
                        google_conversion_value: p("value"),
                        google_conversion_currency: p("currency"),
                        google_conversion_order_id: p("transaction_id"),
                        google_user_id: p("user_id"),
                        google_conversion_page_url: p("page_location"),
                        google_conversion_referrer_url: p("page_referrer"),
                        google_gtm: yn(void 0),
                        google_read_gcl_cookie_opt_out: !g
                    };
                    g && h && (et(h) ? w.google_gcl_cookie_prefix = h.aw : w.google_gcl_cookie_prefix = h);
                    var b = function () {
                        var t = p("custom_params"),
                            e = {
                                event: zt
                            };
                        if (Q(t)) {
                            for (var n = 0; n < t.length; ++n) {
                                var o = t[n],
                                    i = p(o);
                                void 0 !== i && (e[o] = i)
                            }
                            return e
                        }
                        var a = p("eventModel");
                        if (!a) return null;
                        nt(a, e);
                        for (var s = 0; s < r.length; ++s) delete e[r[s]];
                        return e
                    }();
                    b && (w.google_custom_params = b), n.push(w)
                }
                a()
            })
        }(), Un.a.gtagfl = [],
        function () {
            function t(t) {
                var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(t);
                if (e) {
                    var n = {
                        standard: 2,
                        unique: 3,
                        per_session: 4,
                        transactions: 5,
                        items_sold: 6,
                        "": 1
                    } [(e[5] || "").toLowerCase()];
                    if (n) return {
                        T: "DC-" + e[1],
                        Oa: e[3] ? t : "",
                        Ta: e[1],
                        Qa: e[3] || "",
                        R: e[4] || "",
                        w: n
                    }
                }
            }

            function e(t, e) {
                function n(e, n, o) {
                    void 0 !== o && 0 !== (o + "").length && r.push(e + n + ":" + t(o + ""))
                }
                var r = [],
                    o = e("items") || [];
                if (Q(o))
                    for (var i = 0; i < o.length; i++) {
                        var a = o[i],
                            s = i + 1;
                        n("i", s, a.id), n("p", s, a.price), n("q", s, a.quantity), n("c", s, e("country")), n("l", s, e("language"))
                    }
                return r.join("|")
            }

            function n(t, e, n) {
                var r = /^u([1-9]\d?|100)$/,
                    o = t("custom_map") || {},
                    i = Le(e, n),
                    a = {},
                    s = {};
                if (et(o))
                    for (var u in o)
                        if (o.hasOwnProperty(u) && r.test(u)) {
                            var c = o[u];
                            ne(c) && (a[u] = c)
                        } for (var f = 0; f < i.length; f++) {
                    var l = i[f];
                    r.test(l) && (a[l] = l)
                }
                for (var p in a) a.hasOwnProperty(p) && (s[p] = t(a[p]));
                return s
            }! function (t) {
                Un.__gtagfl = t, Un.__gtagfl.m = "gtagfl", Un.__gtagfl.o = !0
            }(function (r) {
                var o = r.vtp_gtmOnSuccess,
                    i = r.vtp_gtmOnFailure,
                    a = t(r.vtp_targetId);
                if (a) {
                    var s = function (t) {
                            return Ne(t, a.T, a.Oa || void 0)
                        },
                        u = !1 !== s("conversion_linker"),
                        c = s("conversion_cookie_prefix");
                    if ("gtag.config" === zt) u && Ln(c), At(o);
                    else {
                        var f = "",
                            l = {},
                            p = {},
                            g = s("dc_custom_params");
                        if (et(g))
                            for (var h in g)
                                if (g.hasOwnProperty(h)) {
                                    var v = g[h];
                                    void 0 !== v && null !== v && (p[h] = v)
                                } var d = "";
                        (5 === a.w || 6 === a.w) && (d = e(an, s));
                        var m = n(s, a.T, a.Oa);
                        ! function (t, e) {
                            l.hasOwnProperty(t) || p.hasOwnProperty(t) || (f += ";" + t + "=" + encodeURIComponent(e), l[t] = 0)
                        }("~oref", Pt(It(mt.location.href))), f += "?";
                        var _ = 3 === Cn(),
                            y = !0 === s("allow_custom_scripts"),
                            w = {
                                w: a.w,
                                protocol: _ ? "http:" : "https:",
                                fa: y,
                                la: a.Ta,
                                ma: a.Qa,
                                R: a.R,
                                ea: o,
                                da: i,
                                ab: p,
                                sessionId: s("session_id"),
                                va: s("transaction_id"),
                                ja: s("value"),
                                La: s("quantity"),
                                ia: u,
                                aa: c,
                                oa: d,
                                Z: m
                            };
                        On(w, f)
                    }
                } else At(i)
            })
        }(), Un.a.gtagua = ["google"],
        function () {
            var t, e = {
                    client_id: 1,
                    client_storage: "storage",
                    cookie_name: 1,
                    cookie_domain: 1,
                    cookie_expires: 1,
                    cookie_update: 1,
                    sample_rate: 1,
                    site_speed_sample_rate: 1,
                    use_amp_client_id: 1,
                    store_gac: 1,
                    conversion_linker: "storeGac"
                },
                n = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: {
                        name: "campaignName",
                        source: "campaignSource",
                        medium: "campaignMedium",
                        term: "campaignTerm",
                        content: "campaignContent",
                        id: "campaignId"
                    },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                r = {
                    content_id: 1,
                    event_category: 1,
                    event_action: 1,
                    event_label: 1,
                    link_attribution: 1,
                    linker: 1,
                    method: 1,
                    name: 1,
                    send_page_view: 1,
                    value: 1
                },
                o = {
                    cookie_name: 1,
                    cookie_expires: "duration",
                    levels: 1
                },
                i = {
                    anonymize_ip: 1,
                    fatal: 1,
                    non_interaction: 1,
                    use_amp_client_id: 1,
                    send_page_view: 1,
                    store_gac: 1,
                    conversion_linker: 1
                },
                a = function (t, e, n, r) {
                    if (void 0 !== n)
                        if (i[e] && (n = ae(n)), "anonymize_ip" != e || n || (n = void 0), 1 === t) r[s(e)] = n;
                        else if (ne(t)) r[t] = n;
                    else
                        for (var o in t) t.hasOwnProperty(o) && void 0 !== n[o] && (r[t[o]] = n[o])
                },
                s = function (t) {
                    return t && ne(t) ? t.replace(/(_[a-z])/g, function (t) {
                        return t[1].toUpperCase()
                    }) : t
                },
                u = function (t, e, n) {
                    t.hasOwnProperty(e) || (t[e] = n)
                },
                c = function (t, o, i) {
                    var s = {},
                        c = {},
                        f = {},
                        l = xn("custom_map", t);
                    if (et(l))
                        for (var p in l)
                            if (l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p)) {
                                var g = xn(l[p], t);
                                void 0 !== g && u(c, p, g)
                            } for (var h = Le(t, void 0), v = 0; v < h.length; ++v) {
                        var d = h[v],
                            m = xn(d, t);
                        r.hasOwnProperty(d) ? a(r[d], d, m, s) : n.hasOwnProperty(d) ? a(n[d], d, m, c) : e.hasOwnProperty(d) ? a(e[d], d, m, f) : /^(dimension|metric|content_group)\d+$/.test(d) && a(1, d, m, c)
                    }
                    var _ = String(zt);
                    u(f, "cookieDomain", "auto"), u(c, "forceSSL", !0);
                    var y = "general";
                    0 <= sn("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), _) ? y = "ecommerce" : 0 <= sn("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), _) ? y = "engagement" : "exception" == _ && (y = "error"), u(s, "eventCategory", y), 0 <= sn(["view_item", "view_item_list", "view_promotion", "view_search_results"], _) && u(c, "nonInteraction", !0), "login" == _ || "sign_up" == _ || "share" == _ ? u(s, "eventLabel", xn("method", t)) : "search" == _ || "view_search_results" == _ ? u(s, "eventLabel", xn("search_term", t)) : "select_content" == _ && u(s, "eventLabel", xn("content_type", t));
                    var w = s.linker || {};
                    return (w.accept_incoming || 0 != w.accept_incoming && w.domains) && (f.allowLinker = !0), !1 === xn("allow_display_features", t) && (c.displayFeaturesTask = null), f.name = o, c["&gtm"] = yn(!0), c.hitCallback = i, s.C = c, s.za = f, s
                },
                f = function (t) {
                    function e(t) {
                        var e = nt(t, void 0);
                        return e.list = t.list_name, e.listPosition = t.list_position, e.position = t.list_position || t.creative_slot, e.creative = t.creative_name, e
                    }

                    function n(t) {
                        for (var n = [], r = 0; t && r < t.length; r++) t[r] && n.push(e(t[r]));
                        return n.length ? n : void 0
                    }

                    function r() {
                        return {
                            id: o("transaction_id"),
                            affiliation: o("affiliation"),
                            revenue: o("value"),
                            tax: o("tax"),
                            shipping: o("shipping"),
                            coupon: o("coupon"),
                            list: o("list_name")
                        }
                    }
                    var o = function (e) {
                            return Ne(e, t, void 0)
                        },
                        i = o("items"),
                        a = o("custom_map");
                    if (et(a))
                        for (var s = 0; i && s < i.length; ++s) {
                            var c, f = i[s];
                            for (c in a) a.hasOwnProperty(c) && /^(dimension|metric)\d+$/.test(c) && u(f, c, f[a[c]])
                        }
                    var l = null,
                        p = zt,
                        g = o("promotions");
                    return "purchase" == p || "refund" == p ? l = {
                        action: p,
                        P: r(),
                        L: n(i)
                    } : "add_to_cart" == p ? l = {
                        action: "add",
                        L: n(i)
                    } : "remove_from_cart" == p ? l = {
                        action: "remove",
                        L: n(i)
                    } : "view_item" == p ? l = {
                        action: "detail",
                        P: r(),
                        L: n(i)
                    } : "view_item_list" == p ? l = {
                        action: "impressions",
                        qb: n(i)
                    } : "view_promotion" == p ? l = {
                        action: "promo_view",
                        qa: n(g)
                    } : "select_content" == p && g && 0 < g.length ? l = {
                        action: "promo_click",
                        qa: n(g)
                    } : "select_content" == p ? l = {
                        action: "click",
                        P: {
                            list: o("list_name")
                        },
                        L: n(i)
                    } : "begin_checkout" == p || "checkout_progress" == p ? l = {
                        action: "checkout",
                        L: n(i),
                        P: {
                            step: "begin_checkout" == p ? 1 : o("checkout_step"),
                            option: o("checkout_option")
                        }
                    } : "set_checkout_option" == p && (l = {
                        action: "checkout_option",
                        P: {
                            step: o("checkout_step"),
                            option: o("checkout_option")
                        }
                    }), l && (l.Kb = o("currency")), l
                },
                l = {},
                p = function (t, e) {
                    var n = l[t];
                    if (l[t] = nt(e, void 0), !n) return !1;
                    for (var r in e)
                        if (e.hasOwnProperty(r) && e[r] !== n[r]) return !0;
                    for (r in n)
                        if (n.hasOwnProperty(r) && n[r] !== e[r]) return !0;
                    return !1
                };
            ! function (t) {
                Un.__gtagua = t, Un.__gtagua.m = "gtagua", Un.__gtagua.o = !0
            }(function (e) {
                var n = e.vtp_trackingId,
                    r = Tn(void 0),
                    i = "gtag_" + n.split("-").join("_"),
                    l = function (t) {
                        var e = [].slice.call(arguments, 0);
                        e[0] = i + "." + e[0], r.apply(window, e)
                    },
                    g = function () {
                        var t = function (t, e) {
                                for (var n = 0; e && n < e.length; n++) l(t, e[n])
                            },
                            e = f(n);
                        if (e) {
                            var r = e.action;
                            if ("impressions" == r) t("ec:addImpression", e.qb);
                            else if ("promo_click" == r || "promo_view" == r) {
                                var o = e.qa;
                                t("ec:addPromo", e.qa), o && 0 < o.length && "promo_click" == r && l("ec:setAction", r)
                            } else t("ec:addProduct", e.L), l("ec:setAction", r, e.P)
                        }
                    },
                    h = function () {
                        var t = xn("optimize_id", n);
                        t && (l("require", t, {
                            dataLayer: "dataLayer"
                        }), l("require", "render"))
                    },
                    v = c(n, i, e.vtp_gtmOnSuccess);
                p(i, v.za) && r(function () {
                        Sn() && Sn().remove(i)
                    }), r("create", n, v.za),
                    function () {
                        var t = xn("custom_map", n);
                        r(function () {
                            if (et(t)) {
                                var e, n = v.C,
                                    r = Sn().getByName(i);
                                for (e in t)
                                    if (t.hasOwnProperty(e) && /^(dimension|metric)\d+$/.test(e)) {
                                        var o = r.get(s(t[e]));
                                        u(n, e, o)
                                    }
                            }
                        })
                    }(),
                    function (t) {
                        if (t) {
                            var e = {};
                            if (et(t))
                                for (var n in o) o.hasOwnProperty(n) && a(o[n], n, t[n], e);
                            l("require", "linkid", e)
                        }
                    }(v.linkAttribution);
                var d = v.linker;
                d && d.domains && An(i + ".", d.domains, !!d.use_anchor, !!d.decorate_forms);
                var m = function (t, e, n) {
                        n && (e = "" + e), v.C[t] = e
                    },
                    _ = zt;
                "page_view" == _ ? (h(), l("send", "pageview", v.C)) : "gtag.config" == _ ? 0 != v.sendPageView && (h(), l("send", "pageview", v.C)) : "screen_view" == _ ? l("send", "screenview", v.C) : "timing_complete" == _ ? (m("timingCategory", v.eventCategory, !0), m("timingVar", v.name, !0), m("timingValue", ie(v.value)), void 0 !== v.eventLabel && m("timingLabel", v.eventLabel, !0), l("send", "timing", v.C)) : "exception" == _ ? l("send", "exception", v.C) : (0 <= sn("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), _) && (l("require", "ec", "ec.js"), g()), m("eventCategory", v.eventCategory, !0), m("eventAction", v.eventAction || _, !0), void 0 !== v.eventLabel && m("eventLabel", v.eventLabel, !0), void 0 !== v.value && m("eventValue", ie(v.value)), l("send", "event", v.C)), t || (t = !0, Pn("E:/dotkiwis/lj.studio/js/analytics.js", function () {
                    Sn().loaded || e.vtp_gtmOnFailure()
                }, e.vtp_gtmOnFailure))
            })
        }();
    var Dn = {
        macro: function () {}
    };
    Dn.dataLayer = Ae, Dn.callback = function (t) {
        Xt.hasOwnProperty(t) && ee(Xt[t]) && Xt[t](), delete Xt[t]
    }, Dn.Va = function () {
        var t = mt.google_tag_manager;
        t || (t = mt.google_tag_manager = {}), t[$t.N] || (t[$t.N] = Dn), Jt = t, Zt = Un.a
    };
    for (var Gn = j.resource || {}, jn = Gn.macros || [], Mn = 0; Mn < jn.length; Mn++) Gt.push(jn[Mn]);
    var Fn = Gn.tags || [];
    for (Mn = 0; Mn < Fn.length; Mn++) Ft.push(Fn[Mn]);
    var qn = Gn.predicates || [];
    for (Mn = 0; Mn < qn.length; Mn++) Mt.push(qn[Mn]);
    for (var Bn = Gn.rules || [], Vn = 0; Vn < Bn.length; Vn++) {
        for (var Yn = Bn[Vn], Wn = {}, Qn = 0; Qn < Yn.length; Qn++) Wn[Yn[Qn][0]] = Array.prototype.slice.call(Yn[Qn], 1);
        jt.push(Wn)
    }
    if (qt = Un, function (t) {
            Ct = function (t) {
                return on.i(t)
            }, xt = w, Ut(on, rn());
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (!Q(n) || 3 > n.length) {
                    if (0 == n.length) continue;
                    me("Internal Error");
                    break
                }
                on.i(n)
            }
        }(j.runtime || []), Dn.Va(), function () {
            var t = yt("dataLayer", []),
                e = yt("google_tag_manager", {});
            e = e.dataLayer = e.dataLayer || {}, Ee.push(function () {
                e.gtmDom || (e.gtmDom = !0, t.push({
                    event: "gtm.dom"
                }))
            }), Je.push(function () {
                e.gtmLoad || (e.gtmLoad = !0, t.push({
                    event: "gtm.load"
                }))
            });
            var n = t.push;
            t.push = function () {
                var e = [].slice.call(arguments, 0);
                for (n.apply(t, e), ze.push.apply(ze, e); 300 < this.length;) this.shift();
                return tn()
            }, ze.push.apply(ze, t.slice(0)), At(en)
        }(), we = !1, be = 0, "interactive" == _t.readyState && !_t.createEventObject || "complete" == _t.readyState) g();
    else {
        if (St(_t, "DOMContentLoaded", g), St(_t, "readystatechange", g), _t.createEventObject && _t.documentElement.doScroll) {
            var Hn = !0;
            try {
                Hn = !mt.frameElement
            } catch (Kn) {}
            Hn && h()
        }
        St(mt, "load", g)
    }
    $e = !1, "complete" === _t.readyState ? y() : St(mt, "load", y)
}();