(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [4], {
        "/MKj": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            })), n.d(e, "b", (function() {
                return W
            })), n.d(e, "d", (function() {
                return V
            })), n.d(e, "e", (function() {
                return J
            })), n.d(e, "c", (function() {
                return S
            }));
            var r = n("q1tI"),
                o = n.n(r),
                i = (n("17x9"), o.a.createContext(null));
            var a = function(t) {
                    t()
                },
                c = {
                    notify: function() {}
                };

            function s() {
                var t = a,
                    e = null,
                    n = null;
                return {
                    clear: function() {
                        e = null, n = null
                    },
                    notify: function() {
                        t((function() {
                            for (var t = e; t;) t.callback(), t = t.next
                        }))
                    },
                    get: function() {
                        for (var t = [], n = e; n;) t.push(n), n = n.next;
                        return t
                    },
                    subscribe: function(t) {
                        var r = !0,
                            o = n = {
                                callback: t,
                                next: null,
                                prev: n
                            };
                        return o.prev ? o.prev.next = o : e = o,
                            function() {
                                r && null !== e && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : e = o.next)
                            }
                    }
                }
            }
            var u = function() {
                function t(t, e) {
                    this.store = t, this.parentSub = e, this.unsubscribe = null, this.listeners = c, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
                }
                var e = t.prototype;
                return e.addNestedSub = function(t) {
                    return this.trySubscribe(), this.listeners.subscribe(t)
                }, e.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, e.handleChangeWrapper = function() {
                    this.onStateChange && this.onStateChange()
                }, e.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, e.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = s())
                }, e.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = c)
                }, t
            }();
            var l = function(t) {
                    var e = t.store,
                        n = t.context,
                        a = t.children,
                        c = Object(r.useMemo)((function() {
                            var t = new u(e);
                            return t.onStateChange = t.notifyNestedSubs, {
                                store: e,
                                subscription: t
                            }
                        }), [e]),
                        s = Object(r.useMemo)((function() {
                            return e.getState()
                        }), [e]);
                    Object(r.useEffect)((function() {
                        var t = c.subscription;
                        return t.trySubscribe(), s !== e.getState() && t.notifyNestedSubs(),
                            function() {
                                t.tryUnsubscribe(), t.onStateChange = null
                            }
                    }), [c, s]);
                    var l = n || i;
                    return o.a.createElement(l.Provider, {
                        value: c
                    }, a)
                },
                f = n("wx14"),
                d = n("zLVn"),
                h = n("2mql"),
                p = n.n(h),
                g = n("TOwV"),
                _ = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? r.useLayoutEffect : r.useEffect,
                v = [],
                m = [null, null];

            function b(t, e) {
                var n = t[1];
                return [e.payload, n + 1]
            }

            function y(t, e, n) {
                _((function() {
                    return t.apply(void 0, e)
                }), n)
            }

            function w(t, e, n, r, o, i, a) {
                t.current = r, e.current = o, n.current = !1, i.current && (i.current = null, a())
            }

            function O(t, e, n, r, o, i, a, c, s, u) {
                if (t) {
                    var l = !1,
                        f = null,
                        d = function() {
                            if (!l) {
                                var t, n, d = e.getState();
                                try {
                                    t = r(d, o.current)
                                } catch (h) {
                                    n = h, f = h
                                }
                                n || (f = null), t === i.current ? a.current || s() : (i.current = t, c.current = t, a.current = !0, u({
                                    type: "STORE_UPDATED",
                                    payload: {
                                        error: n
                                    }
                                }))
                            }
                        };
                    n.onStateChange = d, n.trySubscribe(), d();
                    return function() {
                        if (l = !0, n.tryUnsubscribe(), n.onStateChange = null, f) throw f
                    }
                }
            }
            var C = function() {
                return [null, 0]
            };

            function P(t, e) {
                void 0 === e && (e = {});
                var n = e,
                    a = n.getDisplayName,
                    c = void 0 === a ? function(t) {
                        return "ConnectAdvanced(" + t + ")"
                    } : a,
                    s = n.methodName,
                    l = void 0 === s ? "connectAdvanced" : s,
                    h = n.renderCountProp,
                    _ = void 0 === h ? void 0 : h,
                    P = n.shouldHandleStateChanges,
                    E = void 0 === P || P,
                    S = n.storeKey,
                    j = void 0 === S ? "store" : S,
                    I = (n.withRef, n.forwardRef),
                    A = void 0 !== I && I,
                    D = n.context,
                    T = void 0 === D ? i : D,
                    k = Object(d.a)(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]),
                    N = T;
                return function(e) {
                    var n = e.displayName || e.name || "Component",
                        i = c(n),
                        a = Object(f.a)({}, k, {
                            getDisplayName: c,
                            methodName: l,
                            renderCountProp: _,
                            shouldHandleStateChanges: E,
                            storeKey: j,
                            displayName: i,
                            wrappedComponentName: n,
                            WrappedComponent: e
                        }),
                        s = k.pure;
                    var h = s ? r.useMemo : function(t) {
                        return t()
                    };

                    function P(n) {
                        var i = Object(r.useMemo)((function() {
                                var t = n.reactReduxForwardedRef,
                                    e = Object(d.a)(n, ["reactReduxForwardedRef"]);
                                return [n.context, t, e]
                            }), [n]),
                            c = i[0],
                            s = i[1],
                            l = i[2],
                            p = Object(r.useMemo)((function() {
                                return c && c.Consumer && Object(g.isContextConsumer)(o.a.createElement(c.Consumer, null)) ? c : N
                            }), [c, N]),
                            _ = Object(r.useContext)(p),
                            P = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch);
                        Boolean(_) && Boolean(_.store);
                        var S = P ? n.store : _.store,
                            j = Object(r.useMemo)((function() {
                                return function(e) {
                                    return t(e.dispatch, a)
                                }(S)
                            }), [S]),
                            I = Object(r.useMemo)((function() {
                                if (!E) return m;
                                var t = new u(S, P ? null : _.subscription),
                                    e = t.notifyNestedSubs.bind(t);
                                return [t, e]
                            }), [S, P, _]),
                            A = I[0],
                            D = I[1],
                            T = Object(r.useMemo)((function() {
                                return P ? _ : Object(f.a)({}, _, {
                                    subscription: A
                                })
                            }), [P, _, A]),
                            k = Object(r.useReducer)(b, v, C),
                            R = k[0][0],
                            M = k[1];
                        if (R && R.error) throw R.error;
                        var x = Object(r.useRef)(),
                            L = Object(r.useRef)(l),
                            B = Object(r.useRef)(),
                            U = Object(r.useRef)(!1),
                            F = h((function() {
                                return B.current && l === L.current ? B.current : j(S.getState(), l)
                            }), [S, R, l]);
                        y(w, [L, x, U, l, F, B, D]), y(O, [E, S, A, j, L, x, U, B, D, M], [S, A, j]);
                        var W = Object(r.useMemo)((function() {
                            return o.a.createElement(e, Object(f.a)({}, F, {
                                ref: s
                            }))
                        }), [s, e, F]);
                        return Object(r.useMemo)((function() {
                            return E ? o.a.createElement(p.Provider, {
                                value: T
                            }, W) : W
                        }), [p, W, T])
                    }
                    var S = s ? o.a.memo(P) : P;
                    if (S.WrappedComponent = e, S.displayName = i, A) {
                        var I = o.a.forwardRef((function(t, e) {
                            return o.a.createElement(S, Object(f.a)({}, t, {
                                reactReduxForwardedRef: e
                            }))
                        }));
                        return I.displayName = i, I.WrappedComponent = e, p()(I, e)
                    }
                    return p()(S, e)
                }
            }

            function E(t, e) {
                return t === e ? 0 !== t || 0 !== e || 1 / t === 1 / e : t !== t && e !== e
            }

            function S(t, e) {
                if (E(t, e)) return !0;
                if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
                var n = Object.keys(t),
                    r = Object.keys(e);
                if (n.length !== r.length) return !1;
                for (var o = 0; o < n.length; o++)
                    if (!Object.prototype.hasOwnProperty.call(e, n[o]) || !E(t[n[o]], e[n[o]])) return !1;
                return !0
            }
            var j = n("ANjH");

            function I(t) {
                return function(e, n) {
                    var r = t(e, n);

                    function o() {
                        return r
                    }
                    return o.dependsOnOwnProps = !1, o
                }
            }

            function A(t) {
                return null !== t.dependsOnOwnProps && void 0 !== t.dependsOnOwnProps ? Boolean(t.dependsOnOwnProps) : 1 !== t.length
            }

            function D(t, e) {
                return function(e, n) {
                    n.displayName;
                    var r = function(t, e) {
                        return r.dependsOnOwnProps ? r.mapToProps(t, e) : r.mapToProps(t)
                    };
                    return r.dependsOnOwnProps = !0, r.mapToProps = function(e, n) {
                        r.mapToProps = t, r.dependsOnOwnProps = A(t);
                        var o = r(e, n);
                        return "function" === typeof o && (r.mapToProps = o, r.dependsOnOwnProps = A(o), o = r(e, n)), o
                    }, r
                }
            }
            var T = [function(t) {
                return "function" === typeof t ? D(t) : void 0
            }, function(t) {
                return t ? void 0 : I((function(t) {
                    return {
                        dispatch: t
                    }
                }))
            }, function(t) {
                return t && "object" === typeof t ? I((function(e) {
                    return Object(j.bindActionCreators)(t, e)
                })) : void 0
            }];
            var k = [function(t) {
                return "function" === typeof t ? D(t) : void 0
            }, function(t) {
                return t ? void 0 : I((function() {
                    return {}
                }))
            }];

            function N(t, e, n) {
                return Object(f.a)({}, n, {}, t, {}, e)
            }
            var R = [function(t) {
                return "function" === typeof t ? function(t) {
                    return function(e, n) {
                        n.displayName;
                        var r, o = n.pure,
                            i = n.areMergedPropsEqual,
                            a = !1;
                        return function(e, n, c) {
                            var s = t(e, n, c);
                            return a ? o && i(s, r) || (r = s) : (a = !0, r = s), r
                        }
                    }
                }(t) : void 0
            }, function(t) {
                return t ? void 0 : function() {
                    return N
                }
            }];

            function M(t, e, n, r) {
                return function(o, i) {
                    return n(t(o, i), e(r, i), i)
                }
            }

            function x(t, e, n, r, o) {
                var i, a, c, s, u, l = o.areStatesEqual,
                    f = o.areOwnPropsEqual,
                    d = o.areStatePropsEqual,
                    h = !1;

                function p(o, h) {
                    var p = !f(h, a),
                        g = !l(o, i);
                    return i = o, a = h, p && g ? (c = t(i, a), e.dependsOnOwnProps && (s = e(r, a)), u = n(c, s, a)) : p ? (t.dependsOnOwnProps && (c = t(i, a)), e.dependsOnOwnProps && (s = e(r, a)), u = n(c, s, a)) : g ? function() {
                        var e = t(i, a),
                            r = !d(e, c);
                        return c = e, r && (u = n(c, s, a)), u
                    }() : u
                }
                return function(o, l) {
                    return h ? p(o, l) : (c = t(i = o, a = l), s = e(r, a), u = n(c, s, a), h = !0, u)
                }
            }

            function L(t, e) {
                var n = e.initMapStateToProps,
                    r = e.initMapDispatchToProps,
                    o = e.initMergeProps,
                    i = Object(d.a)(e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
                    a = n(t, i),
                    c = r(t, i),
                    s = o(t, i);
                return (i.pure ? x : M)(a, c, s, t, i)
            }

            function B(t, e, n) {
                for (var r = e.length - 1; r >= 0; r--) {
                    var o = e[r](t);
                    if (o) return o
                }
                return function(e, r) {
                    throw new Error("Invalid value of type " + typeof t + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
                }
            }

            function U(t, e) {
                return t === e
            }

            function F(t) {
                var e = void 0 === t ? {} : t,
                    n = e.connectHOC,
                    r = void 0 === n ? P : n,
                    o = e.mapStateToPropsFactories,
                    i = void 0 === o ? k : o,
                    a = e.mapDispatchToPropsFactories,
                    c = void 0 === a ? T : a,
                    s = e.mergePropsFactories,
                    u = void 0 === s ? R : s,
                    l = e.selectorFactory,
                    h = void 0 === l ? L : l;
                return function(t, e, n, o) {
                    void 0 === o && (o = {});
                    var a = o,
                        s = a.pure,
                        l = void 0 === s || s,
                        p = a.areStatesEqual,
                        g = void 0 === p ? U : p,
                        _ = a.areOwnPropsEqual,
                        v = void 0 === _ ? S : _,
                        m = a.areStatePropsEqual,
                        b = void 0 === m ? S : m,
                        y = a.areMergedPropsEqual,
                        w = void 0 === y ? S : y,
                        O = Object(d.a)(a, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                        C = B(t, i, "mapStateToProps"),
                        P = B(e, c, "mapDispatchToProps"),
                        E = B(n, u, "mergeProps");
                    return r(h, Object(f.a)({
                        methodName: "connect",
                        getDisplayName: function(t) {
                            return "Connect(" + t + ")"
                        },
                        shouldHandleStateChanges: Boolean(t),
                        initMapStateToProps: C,
                        initMapDispatchToProps: P,
                        initMergeProps: E,
                        pure: l,
                        areStatesEqual: g,
                        areOwnPropsEqual: v,
                        areStatePropsEqual: b,
                        areMergedPropsEqual: w
                    }, O))
                }
            }
            var W = F();

            function q() {
                return Object(r.useContext)(i)
            }

            function z(t) {
                void 0 === t && (t = i);
                var e = t === i ? q : function() {
                    return Object(r.useContext)(t)
                };
                return function() {
                    return e().store
                }
            }
            var G = z();

            function $(t) {
                void 0 === t && (t = i);
                var e = t === i ? G : z(t);
                return function() {
                    return e().dispatch
                }
            }
            var V = $(),
                K = function(t, e) {
                    return t === e
                };

            function H(t) {
                void 0 === t && (t = i);
                var e = t === i ? q : function() {
                    return Object(r.useContext)(t)
                };
                return function(t, n) {
                    void 0 === n && (n = K);
                    var o = e(),
                        i = function(t, e, n, o) {
                            var i, a = Object(r.useReducer)((function(t) {
                                    return t + 1
                                }), 0)[1],
                                c = Object(r.useMemo)((function() {
                                    return new u(n, o)
                                }), [n, o]),
                                s = Object(r.useRef)(),
                                l = Object(r.useRef)(),
                                f = Object(r.useRef)(),
                                d = Object(r.useRef)(),
                                h = n.getState();
                            try {
                                i = t !== l.current || h !== f.current || s.current ? t(h) : d.current
                            } catch (p) {
                                throw s.current && (p.message += "\nThe error may be correlated with this previous error:\n" + s.current.stack + "\n\n"), p
                            }
                            return _((function() {
                                l.current = t, f.current = h, d.current = i, s.current = void 0
                            })), _((function() {
                                function t() {
                                    try {
                                        var t = l.current(n.getState());
                                        if (e(t, d.current)) return;
                                        d.current = t
                                    } catch (p) {
                                        s.current = p
                                    }
                                    a()
                                }
                                return c.onStateChange = t, c.trySubscribe(), t(),
                                    function() {
                                        return c.tryUnsubscribe()
                                    }
                            }), [n, c]), i
                        }(t, n, o.store, o.subscription);
                    return Object(r.useDebugValue)(i), i
                }
            }
            var X, J = H(),
                Y = n("i8i4");
            X = Y.unstable_batchedUpdates, a = X
        },
        "0b+E": function(t, e, n) {
            "use strict";
            var r = {};
            n.r(r), n.d(r, "addTrackers", (function() {
                return V
            })), n.d(r, "initialize", (function() {
                return K
            })), n.d(r, "ga", (function() {
                return H
            })), n.d(r, "set", (function() {
                return X
            })), n.d(r, "send", (function() {
                return J
            })), n.d(r, "pageview", (function() {
                return Y
            })), n.d(r, "modalview", (function() {
                return Q
            })), n.d(r, "timing", (function() {
                return Z
            })), n.d(r, "event", (function() {
                return tt
            })), n.d(r, "exception", (function() {
                return et
            })), n.d(r, "plugin", (function() {
                return nt
            })), n.d(r, "outboundLink", (function() {
                return rt
            })), n.d(r, "testModeAPI", (function() {
                return ot
            })), n.d(r, "default", (function() {
                return it
            }));
            var o = n("q1tI"),
                i = n.n(o),
                a = n("17x9"),
                c = n.n(a);

            function s(t) {
                console.warn("[react-ga]", t)
            }

            function u(t) {
                return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        y(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function d(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function h(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function g(t, e) {
                return (g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function _(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(t);
                    if (e) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }

            function v(t, e) {
                return !e || "object" !== u(e) && "function" !== typeof e ? m(t) : e
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function b(t) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function y(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var w = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && g(t, e)
                }(a, t);
                var e, n, r, o = _(a);

                function a() {
                    var t;
                    h(this, a);
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return y(m(t = o.call.apply(o, [this].concat(n))), "handleClick", (function(e) {
                        var n = t.props,
                            r = n.target,
                            o = n.eventLabel,
                            i = n.to,
                            c = n.onClick,
                            s = n.trackerNames,
                            u = {
                                label: o
                            },
                            l = "_blank" !== r,
                            f = !(e.ctrlKey || e.shiftKey || e.metaKey || 1 === e.button);
                        l && f ? (e.preventDefault(), a.trackLink(u, (function() {
                            window.location.href = i
                        }), s)) : a.trackLink(u, (function() {}), s), c && c(e)
                    })), t
                }
                return e = a, (n = [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.to,
                            n = t.target,
                            r = f(f({}, d(t, ["to", "target"])), {}, {
                                target: n,
                                href: e,
                                onClick: this.handleClick
                            });
                        return "_blank" === n && (r.rel = "".concat(r.rel ? r.rel : "", " noopener noreferrer").trim()), delete r.eventLabel, delete r.trackerNames, i.a.createElement("a", r)
                    }
                }]) && p(e.prototype, n), r && p(e, r), a
            }(o.Component);
            y(w, "trackLink", (function() {
                s("ga tracking not enabled")
            })), w.propTypes = {
                eventLabel: c.a.string.isRequired,
                target: c.a.string,
                to: c.a.string,
                onClick: c.a.func,
                trackerNames: c.a.arrayOf(c.a.string)
            }, w.defaultProps = {
                target: null,
                to: null,
                onClick: null,
                trackerNames: null
            };

            function O(t) {
                return "string" === typeof(e = t) && -1 !== e.indexOf("@") ? (s("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : t;
                var e
            }

            function C(t) {
                return t && t.toString().replace(/^\s+|\s+$/g, "")
            }
            var P = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

            function E(t) {
                return C(t).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (function(t, e, n) {
                    return e > 0 && e + t.length !== n.length && t.search(P) > -1 && ":" !== n.charAt(e - 2) && ("-" !== n.charAt(e + t.length) || "-" === n.charAt(e - 1)) && n.charAt(e - 1).search(/[^\s-]/) < 0 ? t.toLowerCase() : t.substr(1).search(/[A-Z]|\../) > -1 ? t : t.charAt(0).toUpperCase() + t.substr(1)
                }))
            }
            var S = !1;

            function j(t) {
                console.info("[react-ga]", t)
            }
            var I = [],
                A = {
                    calls: I,
                    ga: function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        I.push([].concat(e))
                    },
                    resetCalls: function() {
                        I.length = 0
                    }
                };

            function D(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function T(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function N(t) {
                return (N = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function R(t) {
                return function(t) {
                    if (Array.isArray(t)) return M(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return M(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var x = "undefined" === typeof window || "undefined" === typeof document,
                L = !1,
                B = !0,
                U = !1,
                F = !0,
                W = !0,
                q = function() {
                    var t;
                    return U ? A.ga.apply(A, arguments) : !x && (window.ga ? (t = window).ga.apply(t, arguments) : s("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))
                };

            function z(t) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = t || "";
                    return (arguments.length > 1 ? arguments[1] : void 0) && (n = E(t)), e && (n = O(n)), n
                }(t, B, W)
            }

            function G(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                var o = n[0];
                "string" === typeof o ? (!F && Array.isArray(t) || q.apply(void 0, n), Array.isArray(t) && t.forEach((function(t) {
                    q.apply(void 0, R(["".concat(t, ".").concat(o)].concat(n.slice(1))))
                }))) : s("ga command must be a string")
            }

            function $(t, e) {
                t ? e && (e.debug && !0 === e.debug && (L = !0), !1 === e.titleCase && (B = !1), !1 === e.redactEmail && (W = !1), e.useExistingGa) || (e && e.gaOptions ? q("create", t, e.gaOptions) : q("create", t, "auto")) : s("gaTrackingID is required in initialize()")
            }

            function V(t, e) {
                return Array.isArray(t) ? t.forEach((function(t) {
                    "object" === N(t) ? $(t.trackingId, t) : s("All configs must be an object")
                })) : $(t, e), !0
            }

            function K(t, e) {
                if (e && !0 === e.testMode) U = !0;
                else {
                    if (x) return;
                    e && !0 === e.standardImplementation || function(t) {
                        if (!S) {
                            S = !0;
                            var e = "https://www.google-analytics.com/analytics.js";
                            t && t.gaAddress ? e = t.gaAddress : t && t.debug && (e = "https://www.google-analytics.com/analytics_debug.js");
                            var n, r, o, i, a, c, s, u = t && t.onerror;
                            n = window, r = document, o = "script", i = e, a = "ga", n.GoogleAnalyticsObject = a, n.ga = n.ga || function() {
                                (n.ga.q = n.ga.q || []).push(arguments)
                            }, n.ga.l = 1 * new Date, c = r.createElement(o), s = r.getElementsByTagName(o)[0], c.async = 1, c.src = i, c.onerror = u, s.parentNode.insertBefore(c, s)
                        }
                    }(e)
                }
                F = !e || "boolean" !== typeof e.alwaysSendToDefaultTracker || e.alwaysSendToDefaultTracker, V(t, e)
            }

            function H() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return e.length > 0 && (q.apply(void 0, e), L && (j("called ga('arguments');"), j("with arguments: ".concat(JSON.stringify(e))))), window.ga
            }

            function X(t, e) {
                t ? "object" === N(t) ? (0 === Object.keys(t).length && s("empty `fieldsObject` given to .set()"), G(e, "set", t), L && (j("called ga('set', fieldsObject);"), j("with fieldsObject: ".concat(JSON.stringify(t))))) : s("Expected `fieldsObject` arg to be an Object") : s("`fieldsObject` is required in .set()")
            }

            function J(t, e) {
                G(e, "send", t), L && (j("called ga('send', fieldObject);"), j("with fieldObject: ".concat(JSON.stringify(t))), j("with trackers: ".concat(JSON.stringify(e))))
            }

            function Y(t, e, n) {
                if (t) {
                    var r = C(t);
                    if ("" !== r) {
                        var o = {};
                        if (n && (o.title = n), G(e, "send", function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? T(Object(n), !0).forEach((function(e) {
                                        k(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({
                                hitType: "pageview",
                                page: r
                            }, o)), L) {
                            j("called ga('send', 'pageview', path);");
                            var i = "";
                            n && (i = " and title: ".concat(n)), j("with path: ".concat(r).concat(i))
                        }
                    } else s("path cannot be an empty string in .pageview()")
                } else s("path is required in .pageview()")
            }

            function Q(t, e) {
                if (t) {
                    var n, r = "/" === (n = C(t)).substring(0, 1) ? n.substring(1) : n;
                    if ("" !== r) {
                        var o = "/modal/".concat(r);
                        G(e, "send", "pageview", o), L && (j("called ga('send', 'pageview', path);"), j("with path: ".concat(o)))
                    } else s("modalName cannot be an empty string or a single / in .modalview()")
                } else s("modalName is required in .modalview(modalName)")
            }

            function Z() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.category,
                    n = t.variable,
                    r = t.value,
                    o = t.label,
                    i = arguments.length > 1 ? arguments[1] : void 0;
                if (e && n && "number" === typeof r) {
                    var a = {
                        hitType: "timing",
                        timingCategory: z(e),
                        timingVar: z(n),
                        timingValue: r
                    };
                    o && (a.timingLabel = z(o)), J(a, i)
                } else s("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")
            }

            function tt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.category,
                    n = t.action,
                    r = t.label,
                    o = t.value,
                    i = t.nonInteraction,
                    a = t.transport,
                    c = D(t, ["category", "action", "label", "value", "nonInteraction", "transport"]),
                    u = arguments.length > 1 ? arguments[1] : void 0;
                if (e && n) {
                    var l = {
                        hitType: "event",
                        eventCategory: z(e),
                        eventAction: z(n)
                    };
                    r && (l.eventLabel = z(r)), "undefined" !== typeof o && ("number" !== typeof o ? s("Expected `args.value` arg to be a Number.") : l.eventValue = o), "undefined" !== typeof i && ("boolean" !== typeof i ? s("`args.nonInteraction` must be a boolean.") : l.nonInteraction = i), "undefined" !== typeof a && ("string" !== typeof a ? s("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(a) && s("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), l.transport = a)), Object.keys(c).filter((function(t) {
                        return "dimension" === t.substr(0, "dimension".length)
                    })).forEach((function(t) {
                        l[t] = c[t]
                    })), Object.keys(c).filter((function(t) {
                        return "metric" === t.substr(0, "metric".length)
                    })).forEach((function(t) {
                        l[t] = c[t]
                    })), J(l, u)
                } else s("args.category AND args.action are required in event()")
            }

            function et(t, e) {
                var n = t.description,
                    r = t.fatal,
                    o = {
                        hitType: "exception"
                    };
                n && (o.exDescription = z(n)), "undefined" !== typeof r && ("boolean" !== typeof r ? s("`args.fatal` must be a boolean.") : o.exFatal = r), J(o, e)
            }
            var nt = {
                require: function(t, e, n) {
                    if (t) {
                        var r = C(t);
                        if ("" !== r) {
                            var o = n ? "".concat(n, ".require") : "require";
                            if (e) {
                                if ("object" !== N(e)) return void s("Expected `options` arg to be an Object");
                                0 === Object.keys(e).length && s("Empty `options` given to .require()"), H(o, r, e), L && j("called ga('require', '".concat(r, "', ").concat(JSON.stringify(e)))
                            } else H(o, r), L && j("called ga('require', '".concat(r, "');"))
                        } else s("`name` cannot be an empty string in .require()")
                    } else s("`name` is required in .require()")
                },
                execute: function(t, e) {
                    for (var n, r, o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) i[a - 2] = arguments[a];
                    if (1 === i.length ? n = i[0] : (r = i[0], n = i[1]), "string" !== typeof t) s("Expected `pluginName` arg to be a String.");
                    else if ("string" !== typeof e) s("Expected `action` arg to be a String.");
                    else {
                        var c = "".concat(t, ":").concat(e);
                        n = n || null, r && n ? (H(c, r, n), L && (j("called ga('".concat(c, "');")), j('actionType: "'.concat(r, '" with payload: ').concat(JSON.stringify(n))))) : n ? (H(c, n), L && (j("called ga('".concat(c, "');")), j("with payload: ".concat(JSON.stringify(n))))) : (H(c), L && j("called ga('".concat(c, "');")))
                    }
                }
            };

            function rt(t, e, n) {
                if ("function" === typeof e)
                    if (t && t.label) {
                        var r = {
                                hitType: "event",
                                eventCategory: "Outbound",
                                eventAction: "Click",
                                eventLabel: z(t.label)
                            },
                            o = !1,
                            i = setTimeout((function() {
                                o = !0, e()
                            }), 250);
                        r.hitCallback = function() {
                            clearTimeout(i), o || e()
                        }, J(r, n)
                    } else s("args.label is required in outboundLink()");
                else s("hitCallback function is required")
            }
            var ot = A,
                it = {
                    initialize: K,
                    ga: H,
                    set: X,
                    send: J,
                    pageview: Y,
                    modalview: Q,
                    timing: Z,
                    event: tt,
                    exception: et,
                    plugin: nt,
                    outboundLink: rt,
                    testModeAPI: A
                };

            function at(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ct(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? at(Object(n), !0).forEach((function(e) {
                        st(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function st(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            w.origTrackLink = w.trackLink, w.trackLink = rt;
            var ut = w;
            e.a = ct(ct({}, r), {}, {
                OutboundLink: ut
            })
        },
        "3UD+": function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        ANjH: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "__DO_NOT_USE__ActionTypes", (function() {
                return i
            })), n.d(e, "applyMiddleware", (function() {
                return _
            })), n.d(e, "bindActionCreators", (function() {
                return f
            })), n.d(e, "combineReducers", (function() {
                return u
            })), n.d(e, "compose", (function() {
                return g
            })), n.d(e, "createStore", (function() {
                return c
            }));
            var r = n("bCCX"),
                o = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                i = {
                    INIT: "@@redux/INIT" + o(),
                    REPLACE: "@@redux/REPLACE" + o(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + o()
                    }
                };

            function a(t) {
                if ("object" !== typeof t || null === t) return !1;
                for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e);
                return Object.getPrototypeOf(t) === e
            }

            function c(t, e, n) {
                var o;
                if ("function" === typeof e && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                if ("function" === typeof e && "undefined" === typeof n && (n = e, e = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error("Expected the enhancer to be a function.");
                    return n(c)(t, e)
                }
                if ("function" !== typeof t) throw new Error("Expected the reducer to be a function.");
                var s = t,
                    u = e,
                    l = [],
                    f = l,
                    d = !1;

                function h() {
                    f === l && (f = l.slice())
                }

                function p() {
                    if (d) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                    return u
                }

                function g(t) {
                    if ("function" !== typeof t) throw new Error("Expected the listener to be a function.");
                    if (d) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                    var e = !0;
                    return h(), f.push(t),
                        function() {
                            if (e) {
                                if (d) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                                e = !1, h();
                                var n = f.indexOf(t);
                                f.splice(n, 1), l = null
                            }
                        }
                }

                function _(t) {
                    if (!a(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if ("undefined" === typeof t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (d) throw new Error("Reducers may not dispatch actions.");
                    try {
                        d = !0, u = s(u, t)
                    } finally {
                        d = !1
                    }
                    for (var e = l = f, n = 0; n < e.length; n++) {
                        (0, e[n])()
                    }
                    return t
                }

                function v(t) {
                    if ("function" !== typeof t) throw new Error("Expected the nextReducer to be a function.");
                    s = t, _({
                        type: i.REPLACE
                    })
                }

                function m() {
                    var t, e = g;
                    return (t = {
                        subscribe: function(t) {
                            if ("object" !== typeof t || null === t) throw new TypeError("Expected the observer to be an object.");

                            function n() {
                                t.next && t.next(p())
                            }
                            return n(), {
                                unsubscribe: e(n)
                            }
                        }
                    })[r.a] = function() {
                        return this
                    }, t
                }
                return _({
                    type: i.INIT
                }), (o = {
                    dispatch: _,
                    subscribe: g,
                    getState: p,
                    replaceReducer: v
                })[r.a] = m, o
            }

            function s(t, e) {
                var n = e && e.type;
                return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            }

            function u(t) {
                for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
                    var o = e[r];
                    0, "function" === typeof t[o] && (n[o] = t[o])
                }
                var a, c = Object.keys(n);
                try {
                    ! function(t) {
                        Object.keys(t).forEach((function(e) {
                            var n = t[e];
                            if ("undefined" === typeof n(void 0, {
                                    type: i.INIT
                                })) throw new Error('Reducer "' + e + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if ("undefined" === typeof n(void 0, {
                                    type: i.PROBE_UNKNOWN_ACTION()
                                })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                        }))
                    }(n)
                } catch (u) {
                    a = u
                }
                return function(t, e) {
                    if (void 0 === t && (t = {}), a) throw a;
                    for (var r = !1, o = {}, i = 0; i < c.length; i++) {
                        var u = c[i],
                            l = n[u],
                            f = t[u],
                            d = l(f, e);
                        if ("undefined" === typeof d) {
                            var h = s(u, e);
                            throw new Error(h)
                        }
                        o[u] = d, r = r || d !== f
                    }
                    return (r = r || c.length !== Object.keys(t).length) ? o : t
                }
            }

            function l(t, e) {
                return function() {
                    return e(t.apply(this, arguments))
                }
            }

            function f(t, e) {
                if ("function" === typeof t) return l(t, e);
                if ("object" !== typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                var n = {};
                for (var r in t) {
                    var o = t[r];
                    "function" === typeof o && (n[r] = l(o, e))
                }
                return n
            }

            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t, e) {
                var n = Object.keys(t);
                return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(n, !0).forEach((function(e) {
                        d(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function g() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return 0 === e.length ? function(t) {
                    return t
                } : 1 === e.length ? e[0] : e.reduce((function(t, e) {
                    return function() {
                        return t(e.apply(void 0, arguments))
                    }
                }))
            }

            function _() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function(t) {
                    return function() {
                        var n = t.apply(void 0, arguments),
                            r = function() {
                                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            i = e.map((function(t) {
                                return t(o)
                            }));
                        return p({}, n, {
                            dispatch: r = g.apply(void 0, i)(n.dispatch)
                        })
                    }
                }
            }
        },
        PENG: function(t, e) {
            e.endianness = function() {
                return "LE"
            }, e.hostname = function() {
                return "undefined" !== typeof location ? location.hostname : ""
            }, e.loadavg = function() {
                return []
            }, e.uptime = function() {
                return 0
            }, e.freemem = function() {
                return Number.MAX_VALUE
            }, e.totalmem = function() {
                return Number.MAX_VALUE
            }, e.cpus = function() {
                return []
            }, e.type = function() {
                return "Browser"
            }, e.release = function() {
                return "undefined" !== typeof navigator ? navigator.appVersion : ""
            }, e.networkInterfaces = e.getNetworkInterfaces = function() {
                return {}
            }, e.arch = function() {
                return "javascript"
            }, e.platform = function() {
                return "browser"
            }, e.tmpdir = e.tmpDir = function() {
                return "/tmp"
            }, e.EOL = "\n", e.homedir = function() {
                return "/"
            }
        },
        SLVX: function(t, e, n) {
            "use strict";

            function r(t) {
                var e, n = t.Symbol;
                return "function" === typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        X1fs: function(t, e, n) {
            "use strict";
            (function(t, r) {
                n.d(e, "a", (function() {
                    return He
                })), n.d(e, "b", (function() {
                    return d
                })), n.d(e, "c", (function() {
                    return f
                })), n.d(e, "d", (function() {
                    return u
                })), n.d(e, "e", (function() {
                    return l
                })), n.d(e, "f", (function() {
                    return h
                })), n.d(e, "g", (function() {
                    return Ve
                }));
                var o = n("q1tI"),
                    i = n.n(o),
                    a = n("thIF"),
                    c = n("+qE3"),
                    s = n.n(c),
                    u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};

                function l() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }

                function f(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                }

                function d(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports
                }

                function h(t) {
                    return t && t.default || t
                }
                var p = "function" == typeof Symbol && Symbol.for,
                    g = p ? Symbol.for("react.element") : 60103,
                    _ = p ? Symbol.for("react.portal") : 60106,
                    v = p ? Symbol.for("react.fragment") : 60107,
                    m = p ? Symbol.for("react.strict_mode") : 60108,
                    b = p ? Symbol.for("react.profiler") : 60114,
                    y = p ? Symbol.for("react.provider") : 60109,
                    w = p ? Symbol.for("react.context") : 60110,
                    O = p ? Symbol.for("react.async_mode") : 60111,
                    C = p ? Symbol.for("react.concurrent_mode") : 60111,
                    P = p ? Symbol.for("react.forward_ref") : 60112,
                    E = p ? Symbol.for("react.suspense") : 60113,
                    S = p ? Symbol.for("react.suspense_list") : 60120,
                    j = p ? Symbol.for("react.memo") : 60115,
                    I = p ? Symbol.for("react.lazy") : 60116,
                    A = p ? Symbol.for("react.block") : 60121,
                    D = p ? Symbol.for("react.fundamental") : 60117,
                    T = p ? Symbol.for("react.responder") : 60118,
                    k = p ? Symbol.for("react.scope") : 60119;

                function N(t) {
                    if ("object" == typeof t && null !== t) {
                        var e = t.$$typeof;
                        switch (e) {
                            case g:
                                switch (t = t.type) {
                                    case O:
                                    case C:
                                    case v:
                                    case b:
                                    case m:
                                    case E:
                                        return t;
                                    default:
                                        switch (t = t && t.$$typeof) {
                                            case w:
                                            case P:
                                            case I:
                                            case j:
                                            case y:
                                                return t;
                                            default:
                                                return e
                                        }
                                }
                                case _:
                                    return e
                        }
                    }
                }

                function R(t) {
                    return N(t) === C
                }
                var M = {
                        AsyncMode: O,
                        ConcurrentMode: C,
                        ContextConsumer: w,
                        ContextProvider: y,
                        Element: g,
                        ForwardRef: P,
                        Fragment: v,
                        Lazy: I,
                        Memo: j,
                        Portal: _,
                        Profiler: b,
                        StrictMode: m,
                        Suspense: E,
                        isAsyncMode: function(t) {
                            return R(t) || N(t) === O
                        },
                        isConcurrentMode: R,
                        isContextConsumer: function(t) {
                            return N(t) === w
                        },
                        isContextProvider: function(t) {
                            return N(t) === y
                        },
                        isElement: function(t) {
                            return "object" == typeof t && null !== t && t.$$typeof === g
                        },
                        isForwardRef: function(t) {
                            return N(t) === P
                        },
                        isFragment: function(t) {
                            return N(t) === v
                        },
                        isLazy: function(t) {
                            return N(t) === I
                        },
                        isMemo: function(t) {
                            return N(t) === j
                        },
                        isPortal: function(t) {
                            return N(t) === _
                        },
                        isProfiler: function(t) {
                            return N(t) === b
                        },
                        isStrictMode: function(t) {
                            return N(t) === m
                        },
                        isSuspense: function(t) {
                            return N(t) === E
                        },
                        isValidElementType: function(t) {
                            return "string" == typeof t || "function" == typeof t || t === v || t === C || t === b || t === m || t === E || t === S || "object" == typeof t && null !== t && (t.$$typeof === I || t.$$typeof === j || t.$$typeof === y || t.$$typeof === w || t.$$typeof === P || t.$$typeof === D || t.$$typeof === T || t.$$typeof === k || t.$$typeof === A)
                        },
                        typeOf: N
                    },
                    x = d((function(t, e) {})),
                    L = (x.AsyncMode, x.ConcurrentMode, x.ContextConsumer, x.ContextProvider, x.Element, x.ForwardRef, x.Fragment, x.Lazy, x.Memo, x.Portal, x.Profiler, x.StrictMode, x.Suspense, x.isAsyncMode, x.isConcurrentMode, x.isContextConsumer, x.isContextProvider, x.isElement, x.isForwardRef, x.isFragment, x.isLazy, x.isMemo, x.isPortal, x.isProfiler, x.isStrictMode, x.isSuspense, x.isValidElementType, x.typeOf, d((function(t) {
                        t.exports = M
                    })), Object.getOwnPropertySymbols),
                    B = Object.prototype.hasOwnProperty,
                    U = Object.prototype.propertyIsEnumerable;

                function F(t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(function() {
                    try {
                        if (!Object.assign) return !1;
                        var t = new String("abc");
                        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                                return e[t]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                            r[t] = t
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (t) {
                        return !1
                    }
                })() && Object.assign;
                var W = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

                function q(t, e, n, r, o) {}
                q.resetWarningCache = function() {};
                Function.call.bind(Object.prototype.hasOwnProperty);

                function z() {}

                function G() {}
                G.resetWarningCache = z;
                var $, V, K = d((function(t) {
                    t.exports = function() {
                        function t(t, e, n, r, o, i) {
                            if (i !== W) {
                                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw a.name = "Invariant Violation", a
                            }
                        }

                        function e() {
                            return t
                        }
                        t.isRequired = t;
                        var n = {
                            array: t,
                            bool: t,
                            func: t,
                            number: t,
                            object: t,
                            string: t,
                            symbol: t,
                            any: t,
                            arrayOf: e,
                            element: t,
                            elementType: t,
                            instanceOf: e,
                            node: t,
                            objectOf: e,
                            oneOf: e,
                            oneOfType: e,
                            shape: e,
                            exact: e,
                            checkPropTypes: G,
                            resetWarningCache: z
                        };
                        return n.PropTypes = n, n
                    }()
                }));

                function H(t, e) {
                    if (!t) throw new Error("Invariant failed")
                }(V = $ || ($ = {})).Update = "Web3ReactUpdate", V.Error = "Web3ReactError", V.Deactivate = "Web3ReactDeactivate";
                let X = !1,
                    J = !1;
                const Y = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                };
                let Q = Y.default,
                    Z = null;
                const tt = function() {
                    try {
                        const t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                                } catch (n) {
                                    t.push(e)
                                }
                            }), t.length) throw new Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
                    } catch (V) {
                        return V.message
                    }
                    return null
                }();
                class et {
                    constructor(t) {
                        Object.defineProperty(this, "version", {
                            enumerable: !0,
                            value: t,
                            writable: !1
                        })
                    }
                    _log(t, e) {
                        const n = t.toLowerCase();
                        null == Y[n] && this.throwArgumentError("invalid log level name", "logLevel", t), Q > Y[n] || console.log.apply(console, e)
                    }
                    debug(...t) {
                        this._log(et.levels.DEBUG, t)
                    }
                    info(...t) {
                        this._log(et.levels.INFO, t)
                    }
                    warn(...t) {
                        this._log(et.levels.WARNING, t)
                    }
                    makeError(t, e, n) {
                        if (J) return this.makeError("censored error", e, {});
                        e || (e = et.errors.UNKNOWN_ERROR), n || (n = {});
                        const r = [];
                        Object.keys(n).forEach(t => {
                            try {
                                r.push(t + "=" + JSON.stringify(n[t]))
                            } catch (e) {
                                r.push(t + "=" + JSON.stringify(n[t].toString()))
                            }
                        }), r.push("code=" + e), r.push("version=" + this.version);
                        const o = t;
                        r.length && (t += " (" + r.join(", ") + ")");
                        const i = new Error(t);
                        return i.reason = o, i.code = e, Object.keys(n).forEach((function(t) {
                            i[t] = n[t]
                        })), i
                    }
                    throwError(t, e, n) {
                        throw this.makeError(t, e, n)
                    }
                    throwArgumentError(t, e, n) {
                        return this.throwError(t, et.errors.INVALID_ARGUMENT, {
                            argument: e,
                            value: n
                        })
                    }
                    checkNormalize(t) {
                        tt && this.throwError("platform missing String.prototype.normalize", et.errors.UNSUPPORTED_OPERATION, {
                            operation: "String.prototype.normalize",
                            form: tt
                        })
                    }
                    checkSafeUint53(t, e) {
                        "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, et.errors.NUMERIC_FAULT, {
                            operation: "checkSafeInteger",
                            fault: "out-of-safe-range",
                            value: t
                        }), t % 1 && this.throwError(e, et.errors.NUMERIC_FAULT, {
                            operation: "checkSafeInteger",
                            fault: "non-integer",
                            value: t
                        }))
                    }
                    checkArgumentCount(t, e, n) {
                        n = n ? ": " + n : "", t < e && this.throwError("missing argument" + n, et.errors.MISSING_ARGUMENT, {
                            count: t,
                            expectedCount: e
                        }), t > e && this.throwError("too many arguments" + n, et.errors.UNEXPECTED_ARGUMENT, {
                            count: t,
                            expectedCount: e
                        })
                    }
                    checkNew(t, e) {
                        t !== Object && null != t || this.throwError("missing new", et.errors.MISSING_NEW, {
                            name: e.name
                        })
                    }
                    checkAbstract(t, e) {
                        t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", et.errors.UNSUPPORTED_OPERATION, {
                            name: t.name,
                            operation: "new"
                        }) : t !== Object && null != t || this.throwError("missing new", et.errors.MISSING_NEW, {
                            name: e.name
                        })
                    }
                    static globalLogger() {
                        return Z || (Z = new et("logger/5.0.0-beta.136")), Z
                    }
                    static setCensorship(t, e) {
                        if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", et.errors.UNSUPPORTED_OPERATION, {
                                operation: "setCensorship"
                            }), X) {
                            if (!t) return;
                            this.globalLogger().throwError("error censorship permanent", et.errors.UNSUPPORTED_OPERATION, {
                                operation: "setCensorship"
                            })
                        }
                        J = !!t, X = !!e
                    }
                    static setLogLevel(t) {
                        const e = Y[t];
                        null != e ? Q = e : et.globalLogger().warn("invalid log level - " + t)
                    }
                }
                et.errors = {
                    UNKNOWN_ERROR: "UNKNOWN_ERROR",
                    NOT_IMPLEMENTED: "NOT_IMPLEMENTED",
                    UNSUPPORTED_OPERATION: "UNSUPPORTED_OPERATION",
                    NETWORK_ERROR: "NETWORK_ERROR",
                    SERVER_ERROR: "SERVER_ERROR",
                    TIMEOUT: "TIMEOUT",
                    BUFFER_OVERRUN: "BUFFER_OVERRUN",
                    NUMERIC_FAULT: "NUMERIC_FAULT",
                    MISSING_NEW: "MISSING_NEW",
                    INVALID_ARGUMENT: "INVALID_ARGUMENT",
                    MISSING_ARGUMENT: "MISSING_ARGUMENT",
                    UNEXPECTED_ARGUMENT: "UNEXPECTED_ARGUMENT",
                    CALL_EXCEPTION: "CALL_EXCEPTION",
                    INSUFFICIENT_FUNDS: "INSUFFICIENT_FUNDS",
                    NONCE_EXPIRED: "NONCE_EXPIRED",
                    REPLACEMENT_UNDERPRICED: "REPLACEMENT_UNDERPRICED",
                    UNPREDICTABLE_GAS_LIMIT: "UNPREDICTABLE_GAS_LIMIT"
                }, et.levels = {
                    DEBUG: "DEBUG",
                    INFO: "INFO",
                    WARNING: "WARNING",
                    ERROR: "ERROR",
                    OFF: "OFF"
                };
                const nt = new et("bytes/5.0.0-beta.137");

                function rt(t) {
                    return t.slice || (t.slice = function() {
                        const e = Array.prototype.slice.call(arguments);
                        return rt(new Uint8Array(Array.prototype.slice.apply(t, e)))
                    }), t
                }

                function ot(t, e) {
                    if (e || (e = {}), "number" == typeof t) {
                        nt.checkSafeUint53(t, "invalid arrayify value");
                        const e = [];
                        for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                        return 0 === e.length && e.push(0), rt(new Uint8Array(e))
                    }
                    if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), function(t) {
                            return !!t.toHexString
                        }(t) && (t = t.toHexString()), function(t, e) {
                            return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/))
                        }(t)) {
                        let n = t.substring(2);
                        n.length % 2 && ("left" === e.hexPad ? n = "0x0" + n.substring(2) : "right" === e.hexPad ? n += "0" : nt.throwArgumentError("hex data is odd-length", "value", t));
                        const r = [];
                        for (let t = 0; t < n.length; t += 2) r.push(parseInt(n.substring(t, t + 2), 16));
                        return rt(new Uint8Array(r))
                    }
                    return function(t) {
                        if (null == t) return !1;
                        if (t.constructor === Uint8Array) return !0;
                        if ("string" == typeof t) return !1;
                        if (null == t.length) return !1;
                        for (let e = 0; e < t.length; e++) {
                            const n = t[e];
                            if (n < 0 || n >= 256 || n % 1) return !1
                        }
                        return !0
                    }(t) ? rt(new Uint8Array(t)) : nt.throwArgumentError("invalid arrayify value", "value", t)
                }
                var it = d((function(t) {
                    ! function() {
                        var e = "object" == typeof window ? window : {};
                        !e.JS_SHA3_NO_NODE_JS && "object" == typeof r && r.versions && r.versions.node && (e = u);
                        for (var n = !e.JS_SHA3_NO_COMMON_JS && t.exports, o = "0123456789abcdef".split(""), i = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], s = ["hex", "buffer", "arrayBuffer", "array"], l = function(t, e, n) {
                                return function(r) {
                                    return new w(t, e, t).update(r)[n]()
                                }
                            }, f = function(t, e, n) {
                                return function(r, o) {
                                    return new w(t, e, o).update(r)[n]()
                                }
                            }, d = function(t, e) {
                                var n = l(t, e, "hex");
                                n.create = function() {
                                    return new w(t, e, t)
                                }, n.update = function(t) {
                                    return n.create().update(t)
                                };
                                for (var r = 0; r < s.length; ++r) {
                                    var o = s[r];
                                    n[o] = l(t, e, o)
                                }
                                return n
                            }, h = [{
                                name: "keccak",
                                padding: [1, 256, 65536, 16777216],
                                bits: c,
                                createMethod: d
                            }, {
                                name: "sha3",
                                padding: [6, 1536, 393216, 100663296],
                                bits: c,
                                createMethod: d
                            }, {
                                name: "shake",
                                padding: [31, 7936, 2031616, 520093696],
                                bits: [128, 256],
                                createMethod: function(t, e) {
                                    var n = f(t, e, "hex");
                                    n.create = function(n) {
                                        return new w(t, e, n)
                                    }, n.update = function(t, e) {
                                        return n.create(e).update(t)
                                    };
                                    for (var r = 0; r < s.length; ++r) {
                                        var o = s[r];
                                        n[o] = f(t, e, o)
                                    }
                                    return n
                                }
                            }], p = {}, g = [], _ = 0; _ < h.length; ++_)
                            for (var v = h[_], m = v.bits, b = 0; b < m.length; ++b) {
                                var y = v.name + "_" + m[b];
                                g.push(y), p[y] = v.createMethod(m[b], v.padding)
                            }

                        function w(t, e, n) {
                            this.blocks = [], this.s = [], this.padding = e, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
                            for (var r = 0; r < 50; ++r) this.s[r] = 0
                        }
                        w.prototype.update = function(t) {
                            var e = "string" != typeof t;
                            e && t.constructor === ArrayBuffer && (t = new Uint8Array(t));
                            for (var n, r, o = t.length, a = this.blocks, c = this.byteCount, s = this.blockCount, u = 0, l = this.s; u < o;) {
                                if (this.reset)
                                    for (this.reset = !1, a[0] = this.block, n = 1; n < s + 1; ++n) a[n] = 0;
                                if (e)
                                    for (n = this.start; u < o && n < c; ++u) a[n >> 2] |= t[u] << i[3 & n++];
                                else
                                    for (n = this.start; u < o && n < c; ++u)(r = t.charCodeAt(u)) < 128 ? a[n >> 2] |= r << i[3 & n++] : r < 2048 ? (a[n >> 2] |= (192 | r >> 6) << i[3 & n++], a[n >> 2] |= (128 | 63 & r) << i[3 & n++]) : r < 55296 || r >= 57344 ? (a[n >> 2] |= (224 | r >> 12) << i[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << i[3 & n++], a[n >> 2] |= (128 | 63 & r) << i[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++u)), a[n >> 2] |= (240 | r >> 18) << i[3 & n++], a[n >> 2] |= (128 | r >> 12 & 63) << i[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << i[3 & n++], a[n >> 2] |= (128 | 63 & r) << i[3 & n++]);
                                if (this.lastByteIndex = n, n >= c) {
                                    for (this.start = n - c, this.block = a[s], n = 0; n < s; ++n) l[n] ^= a[n];
                                    O(l), this.reset = !0
                                } else this.start = n
                            }
                            return this
                        }, w.prototype.finalize = function() {
                            var t = this.blocks,
                                e = this.lastByteIndex,
                                n = this.blockCount,
                                r = this.s;
                            if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                                for (t[0] = t[n], e = 1; e < n + 1; ++e) t[e] = 0;
                            for (t[n - 1] |= 2147483648, e = 0; e < n; ++e) r[e] ^= t[e];
                            O(r)
                        }, w.prototype.toString = w.prototype.hex = function() {
                            this.finalize();
                            for (var t, e = this.blockCount, n = this.s, r = this.outputBlocks, i = this.extraBytes, a = 0, c = 0, s = ""; c < r;) {
                                for (a = 0; a < e && c < r; ++a, ++c) t = n[a], s += o[t >> 4 & 15] + o[15 & t] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 28 & 15] + o[t >> 24 & 15];
                                c % e == 0 && (O(n), a = 0)
                            }
                            return i && (t = n[a], i > 0 && (s += o[t >> 4 & 15] + o[15 & t]), i > 1 && (s += o[t >> 12 & 15] + o[t >> 8 & 15]), i > 2 && (s += o[t >> 20 & 15] + o[t >> 16 & 15])), s
                        }, w.prototype.arrayBuffer = function() {
                            this.finalize();
                            var t, e = this.blockCount,
                                n = this.s,
                                r = this.outputBlocks,
                                o = this.extraBytes,
                                i = 0,
                                a = 0,
                                c = this.outputBits >> 3;
                            t = o ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(c);
                            for (var s = new Uint32Array(t); a < r;) {
                                for (i = 0; i < e && a < r; ++i, ++a) s[a] = n[i];
                                a % e == 0 && O(n)
                            }
                            return o && (s[i] = n[i], t = t.slice(0, c)), t
                        }, w.prototype.buffer = w.prototype.arrayBuffer, w.prototype.digest = w.prototype.array = function() {
                            this.finalize();
                            for (var t, e, n = this.blockCount, r = this.s, o = this.outputBlocks, i = this.extraBytes, a = 0, c = 0, s = []; c < o;) {
                                for (a = 0; a < n && c < o; ++a, ++c) t = c << 2, e = r[a], s[t] = 255 & e, s[t + 1] = e >> 8 & 255, s[t + 2] = e >> 16 & 255, s[t + 3] = e >> 24 & 255;
                                c % n == 0 && O(r)
                            }
                            return i && (t = c << 2, e = r[a], i > 0 && (s[t] = 255 & e), i > 1 && (s[t + 1] = e >> 8 & 255), i > 2 && (s[t + 2] = e >> 16 & 255)), s
                        };
                        var O = function(t) {
                            var e, n, r, o, i, c, s, u, l, f, d, h, p, g, _, v, m, b, y, w, O, C, P, E, S, j, I, A, D, T, k, N, R, M, x, L, B, U, F, W, q, z, G, $, V, K, H, X, J, Y, Q, Z, tt, et, nt, rt, ot, it, at, ct, st, ut, lt;
                            for (r = 0; r < 48; r += 2) o = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], c = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (c << 1 | s >>> 31), n = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (s << 1 | c >>> 31), t[0] ^= e, t[1] ^= n, t[10] ^= e, t[11] ^= n, t[20] ^= e, t[21] ^= n, t[30] ^= e, t[31] ^= n, t[40] ^= e, t[41] ^= n, e = o ^ (u << 1 | l >>> 31), n = i ^ (l << 1 | u >>> 31), t[2] ^= e, t[3] ^= n, t[12] ^= e, t[13] ^= n, t[22] ^= e, t[23] ^= n, t[32] ^= e, t[33] ^= n, t[42] ^= e, t[43] ^= n, e = c ^ (f << 1 | d >>> 31), n = s ^ (d << 1 | f >>> 31), t[4] ^= e, t[5] ^= n, t[14] ^= e, t[15] ^= n, t[24] ^= e, t[25] ^= n, t[34] ^= e, t[35] ^= n, t[44] ^= e, t[45] ^= n, e = u ^ (h << 1 | p >>> 31), n = l ^ (p << 1 | h >>> 31), t[6] ^= e, t[7] ^= n, t[16] ^= e, t[17] ^= n, t[26] ^= e, t[27] ^= n, t[36] ^= e, t[37] ^= n, t[46] ^= e, t[47] ^= n, e = f ^ (o << 1 | i >>> 31), n = d ^ (i << 1 | o >>> 31), t[8] ^= e, t[9] ^= n, t[18] ^= e, t[19] ^= n, t[28] ^= e, t[29] ^= n, t[38] ^= e, t[39] ^= n, t[48] ^= e, t[49] ^= n, g = t[0], _ = t[1], K = t[11] << 4 | t[10] >>> 28, H = t[10] << 4 | t[11] >>> 28, A = t[20] << 3 | t[21] >>> 29, D = t[21] << 3 | t[20] >>> 29, ct = t[31] << 9 | t[30] >>> 23, st = t[30] << 9 | t[31] >>> 23, z = t[40] << 18 | t[41] >>> 14, G = t[41] << 18 | t[40] >>> 14, M = t[2] << 1 | t[3] >>> 31, x = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, m = t[12] << 12 | t[13] >>> 20, X = t[22] << 10 | t[23] >>> 22, J = t[23] << 10 | t[22] >>> 22, T = t[33] << 13 | t[32] >>> 19, k = t[32] << 13 | t[33] >>> 19, ut = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, nt = t[4] << 30 | t[5] >>> 2, L = t[14] << 6 | t[15] >>> 26, B = t[15] << 6 | t[14] >>> 26, b = t[25] << 11 | t[24] >>> 21, y = t[24] << 11 | t[25] >>> 21, Y = t[34] << 15 | t[35] >>> 17, Q = t[35] << 15 | t[34] >>> 17, N = t[45] << 29 | t[44] >>> 3, R = t[44] << 29 | t[45] >>> 3, E = t[6] << 28 | t[7] >>> 4, S = t[7] << 28 | t[6] >>> 4, rt = t[17] << 23 | t[16] >>> 9, ot = t[16] << 23 | t[17] >>> 9, U = t[26] << 25 | t[27] >>> 7, F = t[27] << 25 | t[26] >>> 7, w = t[36] << 21 | t[37] >>> 11, O = t[37] << 21 | t[36] >>> 11, Z = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, $ = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, j = t[18] << 20 | t[19] >>> 12, I = t[19] << 20 | t[18] >>> 12, it = t[29] << 7 | t[28] >>> 25, at = t[28] << 7 | t[29] >>> 25, W = t[38] << 8 | t[39] >>> 24, q = t[39] << 8 | t[38] >>> 24, C = t[48] << 14 | t[49] >>> 18, P = t[49] << 14 | t[48] >>> 18, t[0] = g ^ ~v & b, t[1] = _ ^ ~m & y, t[10] = E ^ ~j & A, t[11] = S ^ ~I & D, t[20] = M ^ ~L & U, t[21] = x ^ ~B & F, t[30] = $ ^ ~K & X, t[31] = V ^ ~H & J, t[40] = et ^ ~rt & it, t[41] = nt ^ ~ot & at, t[2] = v ^ ~b & w, t[3] = m ^ ~y & O, t[12] = j ^ ~A & T, t[13] = I ^ ~D & k, t[22] = L ^ ~U & W, t[23] = B ^ ~F & q, t[32] = K ^ ~X & Y, t[33] = H ^ ~J & Q, t[42] = rt ^ ~it & ct, t[43] = ot ^ ~at & st, t[4] = b ^ ~w & C, t[5] = y ^ ~O & P, t[14] = A ^ ~T & N, t[15] = D ^ ~k & R, t[24] = U ^ ~W & z, t[25] = F ^ ~q & G, t[34] = X ^ ~Y & Z, t[35] = J ^ ~Q & tt, t[44] = it ^ ~ct & ut, t[45] = at ^ ~st & lt, t[6] = w ^ ~C & g, t[7] = O ^ ~P & _, t[16] = T ^ ~N & E, t[17] = k ^ ~R & S, t[26] = W ^ ~z & M, t[27] = q ^ ~G & x, t[36] = Y ^ ~Z & $, t[37] = Q ^ ~tt & V, t[46] = ct ^ ~ut & et, t[47] = st ^ ~lt & nt, t[8] = C ^ ~g & v, t[9] = P ^ ~_ & m, t[18] = N ^ ~E & j, t[19] = R ^ ~S & I, t[28] = z ^ ~M & L, t[29] = G ^ ~x & B, t[38] = Z ^ ~$ & K, t[39] = tt ^ ~V & H, t[48] = ut ^ ~et & rt, t[49] = lt ^ ~nt & ot, t[0] ^= a[r], t[1] ^= a[r + 1]
                        };
                        if (n) t.exports = p;
                        else
                            for (_ = 0; _ < g.length; ++_) e[g[_]] = p[g[_]]
                    }()
                }));

                function at() {
                    return (at = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function ct(t, e) {
                    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
                }

                function st(t) {
                    return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function ut(t, e) {
                    return (ut = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function lt() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (V) {
                        return !1
                    }
                }

                function ft(t, e, n) {
                    return (ft = lt() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var o = new(Function.bind.apply(t, r));
                        return n && ut(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function dt(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return (dt = function(t) {
                        if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                        var n;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, r)
                        }

                        function r() {
                            return ft(t, arguments, st(this).constructor)
                        }
                        return r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), ut(r, t)
                    })(t)
                }

                function ht(t, e) {
                    try {
                        var n = t()
                    } catch (t) {
                        return e(t)
                    }
                    return n && n.then ? n.then(void 0, e) : n
                }

                function pt(t) {
                    if ("string" == typeof t) {
                        t = t.replace(/^Ox/, "0x");
                        var e = Number.parseInt(t, "0x" === t.trim().substring(0, 2) ? 16 : 10);
                        return Number.isNaN(e) && H(!1), e
                    }
                    return Number.isInteger(t) || H(!1), t
                }

                function gt(t) {
                    "string" == typeof t && t.match(/^(0x)?[0-9a-fA-F]{40}$/) || H(!1);
                    for (var e = "0x" === t.substring(0, 2) ? t : "0x" + t, n = e.toLowerCase().substring(2).split(""), r = new Uint8Array(40), o = 0; o < 40; o++) r[o] = n[o].charCodeAt(0);
                    for (var i, a = ot((i = r, "0x" + it.keccak_256(ot(i)))), c = 0; c < 40; c += 2) a[c >> 1] >> 4 >= 8 && (n[c] = n[c].toUpperCase()), (15 & a[c >> 1]) >= 8 && (n[c + 1] = n[c + 1].toUpperCase());
                    var s = "0x" + n.join("");
                    return e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== s && H(!1), s
                }
                "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
                var _t, vt = function(t, e) {
                        try {
                            var n = function(n) {
                                    return Promise.resolve(Promise.all([void 0 === e.chainId ? t.getChainId() : e.chainId, void 0 === e.account ? t.getAccount() : e.account])).then((function(e) {
                                        var r = e[0],
                                            o = e[1],
                                            i = pt(r);
                                        if (t.supportedChainIds && !t.supportedChainIds.includes(i)) throw new bt(i, t.supportedChainIds);
                                        var a = null === o ? o : gt(o);
                                        return {
                                            provider: n,
                                            chainId: i,
                                            account: a
                                        }
                                    }))
                                },
                                r = void 0 === e.provider;
                            return Promise.resolve(r ? Promise.resolve(t.getProvider()).then(n) : n(e.provider))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    },
                    mt = function(t) {
                        function e() {
                            var e;
                            return (e = t.call(this) || this).name = e.constructor.name, e
                        }
                        return ct(e, t), e
                    }(dt(Error)),
                    bt = function(t) {
                        function e(e, n) {
                            var r;
                            return (r = t.call(this) || this).name = r.constructor.name, r.message = "Unsupported chain id: " + e + ". Supported chain ids are: " + n + ".", r
                        }
                        return ct(e, t), e
                    }(dt(Error));

                function yt(t, e) {
                    var n = e.type,
                        r = e.payload;
                    switch (n) {
                        case _t.ACTIVATE_CONNECTOR:
                            return {
                                connector: r.connector, provider: r.provider, chainId: r.chainId, account: r.account, onError: r.onError
                            };
                        case _t.UPDATE:
                            var o = r.provider,
                                i = r.chainId,
                                a = r.account;
                            return at({}, t, void 0 === o ? {} : {
                                provider: o
                            }, void 0 === i ? {} : {
                                chainId: i
                            }, void 0 === a ? {} : {
                                account: a
                            });
                        case _t.UPDATE_FROM_ERROR:
                            var c = r.provider,
                                s = r.chainId,
                                u = r.account;
                            return at({}, t, void 0 === c ? {} : {
                                provider: c
                            }, void 0 === s ? {} : {
                                chainId: s
                            }, void 0 === u ? {} : {
                                account: u
                            }, {
                                error: void 0
                            });
                        case _t.ERROR:
                            var l = r.error;
                            return {
                                connector: t.connector, error: l, onError: t.onError
                            };
                        case _t.ERROR_FROM_ACTIVATION:
                            return {
                                connector: r.connector, error: r.error
                            };
                        case _t.DEACTIVATE_CONNECTOR:
                            return {}
                    }
                }! function(t) {
                    t[t.ACTIVATE_CONNECTOR = 0] = "ACTIVATE_CONNECTOR", t[t.UPDATE = 1] = "UPDATE", t[t.UPDATE_FROM_ERROR = 2] = "UPDATE_FROM_ERROR", t[t.ERROR = 3] = "ERROR", t[t.ERROR_FROM_ACTIVATION = 4] = "ERROR_FROM_ACTIVATION", t[t.DEACTIVATE_CONNECTOR = 5] = "DEACTIVATE_CONNECTOR"
                }(_t || (_t = {}));
                var wt = {};
                var Ot = function(t) {
                    wt[t] && H(!1), wt[t] = Object(o.createContext)({
                        activate: function() {
                            try {
                                return H(!1), Promise.resolve()
                            } catch (V) {
                                return Promise.reject(V)
                            }
                        },
                        setError: function() {
                            H(!1)
                        },
                        deactivate: function() {
                            H(!1)
                        },
                        active: !1
                    }), wt[t].displayName = "Web3ReactContext - " + t;
                    var e = wt[t].Provider;
                    return function(t) {
                        var n = t.getLibrary,
                            r = t.children,
                            a = function() {
                                var t = Object(o.useReducer)(yt, {}),
                                    e = t[0],
                                    n = t[1],
                                    r = e.connector,
                                    i = e.provider,
                                    a = e.chainId,
                                    c = e.account,
                                    s = e.onError,
                                    u = e.error,
                                    l = Object(o.useRef)(-1);
                                l.current += 1;
                                var f = Object(o.useCallback)((function(t, e, r) {
                                        void 0 === r && (r = !1);
                                        try {
                                            var o = l.current,
                                                i = !1;
                                            return Promise.resolve(ht((function() {
                                                return Promise.resolve(t.activate().then((function(t) {
                                                    return i = !0, t
                                                }))).then((function(r) {
                                                    return Promise.resolve(vt(t, r)).then((function(r) {
                                                        if (l.current > o) throw new mt;
                                                        n({
                                                            type: _t.ACTIVATE_CONNECTOR,
                                                            payload: at({
                                                                connector: t
                                                            }, r, {
                                                                onError: e
                                                            })
                                                        })
                                                    }))
                                                }))
                                            }), (function(o) {
                                                if (o instanceof mt) i && t.deactivate();
                                                else {
                                                    if (r) throw i && t.deactivate(), o;
                                                    e ? (i && t.deactivate(), e(o)) : n({
                                                        type: _t.ERROR_FROM_ACTIVATION,
                                                        payload: {
                                                            connector: t,
                                                            error: o
                                                        }
                                                    })
                                                }
                                            })))
                                        } catch (t) {
                                            return Promise.reject(t)
                                        }
                                    }), []),
                                    d = Object(o.useCallback)((function(t) {
                                        n({
                                            type: _t.ERROR,
                                            payload: {
                                                error: t
                                            }
                                        })
                                    }), []),
                                    h = Object(o.useCallback)((function() {
                                        n({
                                            type: _t.DEACTIVATE_CONNECTOR
                                        })
                                    }), []),
                                    p = Object(o.useCallback)((function(t) {
                                        try {
                                            if (!r) throw Error("This should never happen, it's just so Typescript stops complaining");
                                            var e = l.current;
                                            return Promise.resolve(function() {
                                                if (u) return ht((function() {
                                                    return Promise.resolve(vt(r, t)).then((function(t) {
                                                        if (l.current > e) throw new mt;
                                                        n({
                                                            type: _t.UPDATE_FROM_ERROR,
                                                            payload: t
                                                        })
                                                    }))
                                                }), (function(t) {
                                                    !(t instanceof mt) && (s ? s(t) : n({
                                                        type: _t.ERROR,
                                                        payload: {
                                                            error: t
                                                        }
                                                    }))
                                                }));
                                                var o = void 0 === t.chainId ? void 0 : pt(t.chainId);
                                                if (void 0 !== o && r.supportedChainIds && !r.supportedChainIds.includes(o)) {
                                                    var i = new bt(o, r.supportedChainIds);
                                                    s ? s(i) : n({
                                                        type: _t.ERROR,
                                                        payload: {
                                                            error: i
                                                        }
                                                    })
                                                } else {
                                                    var a = "string" == typeof t.account ? gt(t.account) : t.account;
                                                    n({
                                                        type: _t.UPDATE,
                                                        payload: {
                                                            provider: t.provider,
                                                            chainId: o,
                                                            account: a
                                                        }
                                                    })
                                                }
                                            }())
                                        } catch (t) {
                                            return Promise.reject(t)
                                        }
                                    }), [r, u, s]),
                                    g = Object(o.useCallback)((function(t) {
                                        s ? s(t) : n({
                                            type: _t.ERROR,
                                            payload: {
                                                error: t
                                            }
                                        })
                                    }), [s]),
                                    _ = Object(o.useCallback)((function() {
                                        n({
                                            type: _t.DEACTIVATE_CONNECTOR
                                        })
                                    }), []);
                                return Object(o.useEffect)((function() {
                                    return function() {
                                        r && r.deactivate()
                                    }
                                }), [r]), Object(o.useEffect)((function() {
                                    return r && r.on($.Update, p).on($.Error, g).on($.Deactivate, _),
                                        function() {
                                            r && r.off($.Update, p).off($.Error, g).off($.Deactivate, _)
                                        }
                                }), [r, p, g, _]), {
                                    connector: r,
                                    provider: i,
                                    chainId: a,
                                    account: c,
                                    activate: f,
                                    setError: d,
                                    deactivate: h,
                                    error: u
                                }
                            }(),
                            c = a.connector,
                            s = a.provider,
                            u = a.chainId,
                            l = a.account,
                            f = a.activate,
                            d = a.setError,
                            h = a.deactivate,
                            p = a.error,
                            g = void 0 !== c && void 0 !== u && void 0 !== l && !p,
                            _ = Object(o.useMemo)((function() {
                                return g && void 0 !== u && Number.isInteger(u) && c ? n(s, c) : void 0
                            }), [g, n, s, c, u]),
                            v = {
                                connector: c,
                                library: _,
                                chainId: u,
                                account: l,
                                activate: f,
                                setError: d,
                                deactivate: h,
                                active: g,
                                error: p
                            };
                        return i.a.createElement(e, {
                            value: v
                        }, r)
                    }
                }("primary");
                class Ct extends Array {
                    constructor(t, e) {
                        if (t > Ct.__kMaxLength) throw new RangeError("Maximum BigInt size exceeded");
                        super(t), this.sign = e
                    }
                    static BigInt(t) {
                        var e = Math.floor,
                            n = Number.isFinite;
                        if ("number" == typeof t) {
                            if (0 === t) return Ct.__zero();
                            if ((0 | t) === t) return 0 > t ? Ct.__oneDigit(-t, !0) : Ct.__oneDigit(t, !1);
                            if (!n(t) || e(t) !== t) throw new RangeError("The number " + t + " cannot be converted to BigInt because it is not an integer");
                            return Ct.__fromDouble(t)
                        }
                        if ("string" == typeof t) {
                            const e = Ct.__fromString(t);
                            if (null === e) throw new SyntaxError("Cannot convert " + t + " to a BigInt");
                            return e
                        }
                        if ("boolean" == typeof t) return !0 === t ? Ct.__oneDigit(1, !1) : Ct.__zero();
                        if ("object" == typeof t) {
                            if (t.constructor === Ct) return t;
                            const e = Ct.__toPrimitive(t);
                            return Ct.BigInt(e)
                        }
                        throw new TypeError("Cannot convert " + t + " to a BigInt")
                    }
                    toDebugString() {
                        const t = ["BigInt["];
                        for (const e of this) t.push((e ? (e >>> 0).toString(16) : e) + ", ");
                        return t.push("]"), t.join("")
                    }
                    toString(t = 10) {
                        if (2 > t || 36 < t) throw new RangeError("toString() radix argument must be between 2 and 36");
                        return 0 === this.length ? "0" : 0 == (t & t - 1) ? Ct.__toStringBasePowerOfTwo(this, t) : Ct.__toStringGeneric(this, t, !1)
                    }
                    static toNumber(t) {
                        var e = Math.clz32;
                        const n = t.length;
                        if (0 === n) return 0;
                        if (1 === n) {
                            const e = t.__unsignedDigit(0);
                            return t.sign ? -e : e
                        }
                        const r = t.__digit(n - 1),
                            o = e(r),
                            i = 32 * n - o;
                        if (1024 < i) return t.sign ? -1 / 0 : 1 / 0;
                        let a = i - 1,
                            c = r,
                            s = n - 1;
                        const u = o + 1;
                        let l = 32 === u ? 0 : c << u;
                        l >>>= 12;
                        const f = u - 12;
                        let d = 12 <= u ? 0 : c << 20 + u,
                            h = 20 + u;
                        0 < f && 0 < s && (s--, c = t.__digit(s), l |= c >>> 32 - f, d = c << f, h = f), 0 < h && 0 < s && (s--, c = t.__digit(s), d |= c >>> 32 - h, h -= 32);
                        const p = Ct.__decideRounding(t, h, s, c);
                        if ((1 === p || 0 === p && 1 == (1 & d)) && (d = d + 1 >>> 0, 0 == d && (l++, 0 != l >>> 20 && (l = 0, a++, 1023 < a)))) return t.sign ? -1 / 0 : 1 / 0;
                        const g = t.sign ? -2147483648 : 0;
                        return a = a + 1023 << 20, Ct.__kBitConversionInts[1] = g | a | l, Ct.__kBitConversionInts[0] = d, Ct.__kBitConversionDouble[0]
                    }
                    static unaryMinus(t) {
                        if (0 === t.length) return t;
                        const e = t.__copy();
                        return e.sign = !t.sign, e
                    }
                    static bitwiseNot(t) {
                        return t.sign ? Ct.__absoluteSubOne(t).__trim() : Ct.__absoluteAddOne(t, !0)
                    }
                    static exponentiate(t, e) {
                        if (e.sign) throw new RangeError("Exponent must be positive");
                        if (0 === e.length) return Ct.__oneDigit(1, !1);
                        if (0 === t.length) return t;
                        if (1 === t.length && 1 === t.__digit(0)) return t.sign && 0 == (1 & e.__digit(0)) ? Ct.unaryMinus(t) : t;
                        if (1 < e.length) throw new RangeError("BigInt too big");
                        let n = e.__unsignedDigit(0);
                        if (1 === n) return t;
                        if (n >= Ct.__kMaxLengthBits) throw new RangeError("BigInt too big");
                        if (1 === t.length && 2 === t.__digit(0)) {
                            const e = 1 + (n >>> 5),
                                r = t.sign && 0 != (1 & n),
                                o = new Ct(e, r);
                            o.__initializeDigits();
                            const i = 1 << (31 & n);
                            return o.__setDigit(e - 1, i), o
                        }
                        let r = null,
                            o = t;
                        for (0 != (1 & n) && (r = t), n >>= 1; 0 !== n; n >>= 1) o = Ct.multiply(o, o), 0 != (1 & n) && (r = null === r ? o : Ct.multiply(r, o));
                        return r
                    }
                    static multiply(t, e) {
                        if (0 === t.length) return t;
                        if (0 === e.length) return e;
                        let n = t.length + e.length;
                        32 <= t.__clzmsd() + e.__clzmsd() && n--;
                        const r = new Ct(n, t.sign !== e.sign);
                        r.__initializeDigits();
                        for (let o = 0; o < t.length; o++) Ct.__multiplyAccumulate(e, t.__digit(o), r, o);
                        return r.__trim()
                    }
                    static divide(t, e) {
                        if (0 === e.length) throw new RangeError("Division by zero");
                        if (0 > Ct.__absoluteCompare(t, e)) return Ct.__zero();
                        const n = t.sign !== e.sign,
                            r = e.__unsignedDigit(0);
                        let o;
                        if (1 === e.length && 65535 >= r) {
                            if (1 === r) return n === t.sign ? t : Ct.unaryMinus(t);
                            o = Ct.__absoluteDivSmall(t, r, null)
                        } else o = Ct.__absoluteDivLarge(t, e, !0, !1);
                        return o.sign = n, o.__trim()
                    }
                    static remainder(t, e) {
                        if (0 === e.length) throw new RangeError("Division by zero");
                        if (0 > Ct.__absoluteCompare(t, e)) return t;
                        const n = e.__unsignedDigit(0);
                        if (1 === e.length && 65535 >= n) {
                            if (1 === n) return Ct.__zero();
                            const e = Ct.__absoluteModSmall(t, n);
                            return 0 === e ? Ct.__zero() : Ct.__oneDigit(e, t.sign)
                        }
                        const r = Ct.__absoluteDivLarge(t, e, !1, !0);
                        return r.sign = t.sign, r.__trim()
                    }
                    static add(t, e) {
                        const n = t.sign;
                        return n === e.sign ? Ct.__absoluteAdd(t, e, n) : 0 <= Ct.__absoluteCompare(t, e) ? Ct.__absoluteSub(t, e, n) : Ct.__absoluteSub(e, t, !n)
                    }
                    static subtract(t, e) {
                        const n = t.sign;
                        return n === e.sign ? 0 <= Ct.__absoluteCompare(t, e) ? Ct.__absoluteSub(t, e, n) : Ct.__absoluteSub(e, t, !n) : Ct.__absoluteAdd(t, e, n)
                    }
                    static leftShift(t, e) {
                        return 0 === e.length || 0 === t.length ? t : e.sign ? Ct.__rightShiftByAbsolute(t, e) : Ct.__leftShiftByAbsolute(t, e)
                    }
                    static signedRightShift(t, e) {
                        return 0 === e.length || 0 === t.length ? t : e.sign ? Ct.__leftShiftByAbsolute(t, e) : Ct.__rightShiftByAbsolute(t, e)
                    }
                    static unsignedRightShift() {
                        throw new TypeError("BigInts have no unsigned right shift; use >> instead")
                    }
                    static lessThan(t, e) {
                        return 0 > Ct.__compareToBigInt(t, e)
                    }
                    static lessThanOrEqual(t, e) {
                        return 0 >= Ct.__compareToBigInt(t, e)
                    }
                    static greaterThan(t, e) {
                        return 0 < Ct.__compareToBigInt(t, e)
                    }
                    static greaterThanOrEqual(t, e) {
                        return 0 <= Ct.__compareToBigInt(t, e)
                    }
                    static equal(t, e) {
                        if (t.sign !== e.sign) return !1;
                        if (t.length !== e.length) return !1;
                        for (let n = 0; n < t.length; n++)
                            if (t.__digit(n) !== e.__digit(n)) return !1;
                        return !0
                    }
                    static notEqual(t, e) {
                        return !Ct.equal(t, e)
                    }
                    static bitwiseAnd(t, e) {
                        var n = Math.max;
                        if (!t.sign && !e.sign) return Ct.__absoluteAnd(t, e).__trim();
                        if (t.sign && e.sign) {
                            const r = n(t.length, e.length) + 1;
                            let o = Ct.__absoluteSubOne(t, r);
                            const i = Ct.__absoluteSubOne(e);
                            return o = Ct.__absoluteOr(o, i, o), Ct.__absoluteAddOne(o, !0, o).__trim()
                        }
                        return t.sign && ([t, e] = [e, t]), Ct.__absoluteAndNot(t, Ct.__absoluteSubOne(e)).__trim()
                    }
                    static bitwiseXor(t, e) {
                        var n = Math.max;
                        if (!t.sign && !e.sign) return Ct.__absoluteXor(t, e).__trim();
                        if (t.sign && e.sign) {
                            const r = n(t.length, e.length),
                                o = Ct.__absoluteSubOne(t, r),
                                i = Ct.__absoluteSubOne(e);
                            return Ct.__absoluteXor(o, i, o).__trim()
                        }
                        const r = n(t.length, e.length) + 1;
                        t.sign && ([t, e] = [e, t]);
                        let o = Ct.__absoluteSubOne(e, r);
                        return o = Ct.__absoluteXor(o, t, o), Ct.__absoluteAddOne(o, !0, o).__trim()
                    }
                    static bitwiseOr(t, e) {
                        const n = (0, Math.max)(t.length, e.length);
                        if (!t.sign && !e.sign) return Ct.__absoluteOr(t, e).__trim();
                        if (t.sign && e.sign) {
                            let r = Ct.__absoluteSubOne(t, n);
                            const o = Ct.__absoluteSubOne(e);
                            return r = Ct.__absoluteAnd(r, o, r), Ct.__absoluteAddOne(r, !0, r).__trim()
                        }
                        t.sign && ([t, e] = [e, t]);
                        let r = Ct.__absoluteSubOne(e, n);
                        return r = Ct.__absoluteAndNot(r, t, r), Ct.__absoluteAddOne(r, !0, r).__trim()
                    }
                    static asIntN(t, e) {
                        if (0 === e.length) return e;
                        if (0 === t) return Ct.__zero();
                        if (t >= Ct.__kMaxLengthBits) return e;
                        const n = t + 31 >>> 5;
                        if (e.length < n) return e;
                        const r = e.__unsignedDigit(n - 1),
                            o = 1 << (31 & t - 1);
                        if (e.length === n && r < o) return e;
                        if ((r & o) !== o) return Ct.__truncateToNBits(t, e);
                        if (!e.sign) return Ct.__truncateAndSubFromPowerOfTwo(t, e, !0);
                        if (0 == (r & o - 1)) {
                            for (let r = n - 2; 0 <= r; r--)
                                if (0 !== e.__digit(r)) return Ct.__truncateAndSubFromPowerOfTwo(t, e, !1);
                            return e.length === n && r === o ? e : Ct.__truncateToNBits(t, e)
                        }
                        return Ct.__truncateAndSubFromPowerOfTwo(t, e, !1)
                    }
                    static asUintN(t, e) {
                        if (0 === e.length) return e;
                        if (0 === t) return Ct.__zero();
                        if (e.sign) {
                            if (t > Ct.__kMaxLengthBits) throw new RangeError("BigInt too big");
                            return Ct.__truncateAndSubFromPowerOfTwo(t, e, !1)
                        }
                        if (t >= Ct.__kMaxLengthBits) return e;
                        const n = t + 31 >>> 5;
                        if (e.length < n) return e;
                        const r = 31 & t;
                        if (e.length == n) {
                            if (0 == r) return e;
                            if (0 == e.__digit(n - 1) >>> r) return e
                        }
                        return Ct.__truncateToNBits(t, e)
                    }
                    static ADD(t, e) {
                        if (t = Ct.__toPrimitive(t), e = Ct.__toPrimitive(e), "string" == typeof t) return "string" != typeof e && (e = e.toString()), t + e;
                        if ("string" == typeof e) return t.toString() + e;
                        if (t = Ct.__toNumeric(t), e = Ct.__toNumeric(e), Ct.__isBigInt(t) && Ct.__isBigInt(e)) return Ct.add(t, e);
                        if ("number" == typeof t && "number" == typeof e) return t + e;
                        throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")
                    }
                    static LT(t, e) {
                        return Ct.__compare(t, e, 0)
                    }
                    static LE(t, e) {
                        return Ct.__compare(t, e, 1)
                    }
                    static GT(t, e) {
                        return Ct.__compare(t, e, 2)
                    }
                    static GE(t, e) {
                        return Ct.__compare(t, e, 3)
                    }
                    static EQ(t, e) {
                        for (;;) {
                            if (Ct.__isBigInt(t)) return Ct.__isBigInt(e) ? Ct.equal(t, e) : Ct.EQ(e, t);
                            if ("number" == typeof t) {
                                if (Ct.__isBigInt(e)) return Ct.__equalToNumber(e, t);
                                if ("object" != typeof e) return t == e;
                                e = Ct.__toPrimitive(e)
                            } else if ("string" == typeof t) {
                                if (Ct.__isBigInt(e)) return null !== (t = Ct.__fromString(t)) && Ct.equal(t, e);
                                if ("object" != typeof e) return t == e;
                                e = Ct.__toPrimitive(e)
                            } else if ("boolean" == typeof t) {
                                if (Ct.__isBigInt(e)) return Ct.__equalToNumber(e, +t);
                                if ("object" != typeof e) return t == e;
                                e = Ct.__toPrimitive(e)
                            } else if ("symbol" == typeof t) {
                                if (Ct.__isBigInt(e)) return !1;
                                if ("object" != typeof e) return t == e;
                                e = Ct.__toPrimitive(e)
                            } else {
                                if ("object" != typeof t) return t == e;
                                if ("object" == typeof e && e.constructor !== Ct) return t == e;
                                t = Ct.__toPrimitive(t)
                            }
                        }
                    }
                    static NE(t, e) {
                        return !Ct.EQ(t, e)
                    }
                    static __zero() {
                        return new Ct(0, !1)
                    }
                    static __oneDigit(t, e) {
                        const n = new Ct(1, e);
                        return n.__setDigit(0, t), n
                    }
                    __copy() {
                        const t = new Ct(this.length, this.sign);
                        for (let e = 0; e < this.length; e++) t[e] = this[e];
                        return t
                    }
                    __trim() {
                        let t = this.length,
                            e = this[t - 1];
                        for (; 0 === e;) t--, e = this[t - 1], this.pop();
                        return 0 === t && (this.sign = !1), this
                    }
                    __initializeDigits() {
                        for (let t = 0; t < this.length; t++) this[t] = 0
                    }
                    static __decideRounding(t, e, n, r) {
                        if (0 < e) return -1;
                        let o;
                        if (0 > e) o = -e - 1;
                        else {
                            if (0 === n) return -1;
                            n--, r = t.__digit(n), o = 31
                        }
                        let i = 1 << o;
                        if (0 == (r & i)) return -1;
                        if (i -= 1, 0 != (r & i)) return 1;
                        for (; 0 < n;)
                            if (n--, 0 !== t.__digit(n)) return 1;
                        return 0
                    }
                    static __fromDouble(t) {
                        Ct.__kBitConversionDouble[0] = t;
                        const e = (2047 & Ct.__kBitConversionInts[1] >>> 20) - 1023,
                            n = 1 + (e >>> 5),
                            r = new Ct(n, 0 > t);
                        let o = 1048575 & Ct.__kBitConversionInts[1] | 1048576,
                            i = Ct.__kBitConversionInts[0];
                        const a = 31 & e;
                        let c, s = 0;
                        if (a < 20) {
                            const t = 20 - a;
                            s = t + 32, c = o >>> t, o = o << 32 - t | i >>> t, i <<= 32 - t
                        } else if (20 === a) s = 32, c = o, o = i;
                        else {
                            const t = a - 20;
                            s = 32 - t, c = o << t | i >>> 32 - t, o = i << t
                        }
                        r.__setDigit(n - 1, c);
                        for (let u = n - 2; 0 <= u; u--) 0 < s ? (s -= 32, c = o, o = i) : c = 0, r.__setDigit(u, c);
                        return r.__trim()
                    }
                    static __isWhitespace(t) {
                        return !!(13 >= t && 9 <= t) || (159 >= t ? 32 == t : 131071 >= t ? 160 == t || 5760 == t : 196607 >= t ? 10 >= (t &= 131071) || 40 == t || 41 == t || 47 == t || 95 == t || 4096 == t : 65279 == t)
                    }
                    static __fromString(t, e = 0) {
                        let n = 0;
                        const r = t.length;
                        let o = 0;
                        if (o === r) return Ct.__zero();
                        let i = t.charCodeAt(o);
                        for (; Ct.__isWhitespace(i);) {
                            if (++o === r) return Ct.__zero();
                            i = t.charCodeAt(o)
                        }
                        if (43 === i) {
                            if (++o === r) return null;
                            i = t.charCodeAt(o), n = 1
                        } else if (45 === i) {
                            if (++o === r) return null;
                            i = t.charCodeAt(o), n = -1
                        }
                        if (0 === e) {
                            if (e = 10, 48 === i) {
                                if (++o === r) return Ct.__zero();
                                if (i = t.charCodeAt(o), 88 === i || 120 === i) {
                                    if (e = 16, ++o === r) return null;
                                    i = t.charCodeAt(o)
                                } else if (79 === i || 111 === i) {
                                    if (e = 8, ++o === r) return null;
                                    i = t.charCodeAt(o)
                                } else if (66 === i || 98 === i) {
                                    if (e = 2, ++o === r) return null;
                                    i = t.charCodeAt(o)
                                }
                            }
                        } else if (16 === e && 48 === i) {
                            if (++o === r) return Ct.__zero();
                            if (i = t.charCodeAt(o), 88 === i || 120 === i) {
                                if (++o === r) return null;
                                i = t.charCodeAt(o)
                            }
                        }
                        for (; 48 === i;) {
                            if (++o === r) return Ct.__zero();
                            i = t.charCodeAt(o)
                        }
                        const a = r - o;
                        let c = Ct.__kMaxBitsPerChar[e],
                            s = Ct.__kBitsPerCharTableMultiplier - 1;
                        if (a > 1073741824 / c) return null;
                        const u = c * a + s >>> Ct.__kBitsPerCharTableShift,
                            l = new Ct(u + 31 >>> 5, !1),
                            f = 10 > e ? e : 10,
                            d = 10 < e ? e - 10 : 0;
                        if (0 == (e & e - 1)) {
                            c >>= Ct.__kBitsPerCharTableShift;
                            const e = [],
                                n = [];
                            let a = !1;
                            do {
                                let s = 0,
                                    u = 0;
                                for (;;) {
                                    let e;
                                    if (i - 48 >>> 0 < f) e = i - 48;
                                    else {
                                        if (!((32 | i) - 97 >>> 0 < d)) {
                                            a = !0;
                                            break
                                        }
                                        e = (32 | i) - 87
                                    }
                                    if (u += c, s = s << c | e, ++o === r) {
                                        a = !0;
                                        break
                                    }
                                    if (i = t.charCodeAt(o), 32 < u + c) break
                                }
                                e.push(s), n.push(u)
                            } while (!a);
                            Ct.__fillFromParts(l, e, n)
                        } else {
                            l.__initializeDigits();
                            let n = !1,
                                a = 0;
                            do {
                                let u = 0,
                                    h = 1;
                                for (;;) {
                                    let c;
                                    if (i - 48 >>> 0 < f) c = i - 48;
                                    else {
                                        if (!((32 | i) - 97 >>> 0 < d)) {
                                            n = !0;
                                            break
                                        }
                                        c = (32 | i) - 87
                                    }
                                    const s = h * e;
                                    if (4294967295 < s) break;
                                    if (h = s, u = u * e + c, a++, ++o === r) {
                                        n = !0;
                                        break
                                    }
                                    i = t.charCodeAt(o)
                                }
                                s = 32 * Ct.__kBitsPerCharTableMultiplier - 1;
                                const p = c * a + s >>> Ct.__kBitsPerCharTableShift + 5;
                                l.__inplaceMultiplyAdd(h, u, p)
                            } while (!n)
                        }
                        if (o !== r) {
                            if (!Ct.__isWhitespace(i)) return null;
                            for (o++; o < r; o++)
                                if (i = t.charCodeAt(o), !Ct.__isWhitespace(i)) return null
                        }
                        return 0 != n && 10 !== e ? null : (l.sign = -1 == n, l.__trim())
                    }
                    static __fillFromParts(t, e, n) {
                        let r = 0,
                            o = 0,
                            i = 0;
                        for (let a = e.length - 1; 0 <= a; a--) {
                            const c = e[a],
                                s = n[a];
                            o |= c << i, i += s, 32 === i ? (t.__setDigit(r++, o), i = 0, o = 0) : 32 < i && (t.__setDigit(r++, o), i -= 32, o = c >>> s - i)
                        }
                        if (0 !== o) {
                            if (r >= t.length) throw new Error("implementation bug");
                            t.__setDigit(r++, o)
                        }
                        for (; r < t.length; r++) t.__setDigit(r, 0)
                    }
                    static __toStringBasePowerOfTwo(t, e) {
                        var n = Math.clz32;
                        const r = t.length;
                        let o = e - 1;
                        o = (85 & o >>> 1) + (85 & o), o = (51 & o >>> 2) + (51 & o), o = (15 & o >>> 4) + (15 & o);
                        const i = o,
                            a = e - 1,
                            c = t.__digit(r - 1);
                        let s = 0 | (32 * r - n(c) + i - 1) / i;
                        if (t.sign && s++, 268435456 < s) throw new Error("string too long");
                        const u = Array(s);
                        let l = s - 1,
                            f = 0,
                            d = 0;
                        for (let p = 0; p < r - 1; p++) {
                            const e = t.__digit(p),
                                n = (f | e << d) & a;
                            u[l--] = Ct.__kConversionChars[n];
                            const r = i - d;
                            for (f = e >>> r, d = 32 - r; d >= i;) u[l--] = Ct.__kConversionChars[f & a], f >>>= i, d -= i
                        }
                        const h = (f | c << d) & a;
                        for (u[l--] = Ct.__kConversionChars[h], f = c >>> i - d; 0 !== f;) u[l--] = Ct.__kConversionChars[f & a], f >>>= i;
                        if (t.sign && (u[l--] = "-"), -1 != l) throw new Error("implementation bug");
                        return u.join("")
                    }
                    static __toStringGeneric(t, e, n) {
                        var r = Math.clz32;
                        const o = t.length;
                        if (0 === o) return "";
                        if (1 === o) {
                            let r = t.__unsignedDigit(0).toString(e);
                            return !1 === n && t.sign && (r = "-" + r), r
                        }
                        const i = 32 * o - r(t.__digit(o - 1)),
                            a = Ct.__kMaxBitsPerChar[e] - 1;
                        let c = i * Ct.__kBitsPerCharTableMultiplier;
                        c += a - 1, c = 0 | c / a;
                        const s = c + 1 >> 1,
                            u = Ct.exponentiate(Ct.__oneDigit(e, !1), Ct.__oneDigit(s, !1));
                        let l, f;
                        const d = u.__unsignedDigit(0);
                        if (1 === u.length && 65535 >= d) {
                            l = new Ct(t.length, !1), l.__initializeDigits();
                            let n = 0;
                            for (let e = 2 * t.length - 1; 0 <= e; e--) {
                                const r = n << 16 | t.__halfDigit(e);
                                l.__setHalfDigit(e, 0 | r / d), n = 0 | r % d
                            }
                            f = n.toString(e)
                        } else {
                            const n = Ct.__absoluteDivLarge(t, u, !0, !0);
                            l = n.quotient;
                            const r = n.remainder.__trim();
                            f = Ct.__toStringGeneric(r, e, !0)
                        }
                        l.__trim();
                        let h = Ct.__toStringGeneric(l, e, !0);
                        for (; f.length < s;) f = "0" + f;
                        return !1 === n && t.sign && (h = "-" + h), h + f
                    }
                    static __unequalSign(t) {
                        return t ? -1 : 1
                    }
                    static __absoluteGreater(t) {
                        return t ? -1 : 1
                    }
                    static __absoluteLess(t) {
                        return t ? 1 : -1
                    }
                    static __compareToBigInt(t, e) {
                        const n = t.sign;
                        if (n !== e.sign) return Ct.__unequalSign(n);
                        const r = Ct.__absoluteCompare(t, e);
                        return 0 < r ? Ct.__absoluteGreater(n) : 0 > r ? Ct.__absoluteLess(n) : 0
                    }
                    static __compareToNumber(t, e) {
                        if (!0 | e) {
                            const n = t.sign,
                                r = 0 > e;
                            if (n !== r) return Ct.__unequalSign(n);
                            if (0 === t.length) {
                                if (r) throw new Error("implementation bug");
                                return 0 === e ? 0 : -1
                            }
                            if (1 < t.length) return Ct.__absoluteGreater(n);
                            const o = Math.abs(e),
                                i = t.__unsignedDigit(0);
                            return i > o ? Ct.__absoluteGreater(n) : i < o ? Ct.__absoluteLess(n) : 0
                        }
                        return Ct.__compareToDouble(t, e)
                    }
                    static __compareToDouble(t, e) {
                        var n = Math.clz32;
                        if (e != e) return e;
                        if (e === 1 / 0) return -1;
                        if (e === -1 / 0) return 1;
                        const r = t.sign;
                        if (r !== 0 > e) return Ct.__unequalSign(r);
                        if (0 === e) throw new Error("implementation bug: should be handled elsewhere");
                        if (0 === t.length) return -1;
                        Ct.__kBitConversionDouble[0] = e;
                        const o = 2047 & Ct.__kBitConversionInts[1] >>> 20;
                        if (2047 == o) throw new Error("implementation bug: handled elsewhere");
                        const i = o - 1023;
                        if (0 > i) return Ct.__absoluteGreater(r);
                        const a = t.length;
                        let c = t.__digit(a - 1);
                        const s = n(c),
                            u = 32 * a - s,
                            l = i + 1;
                        if (u < l) return Ct.__absoluteLess(r);
                        if (u > l) return Ct.__absoluteGreater(r);
                        let f = 1048576 | 1048575 & Ct.__kBitConversionInts[1],
                            d = Ct.__kBitConversionInts[0];
                        const h = 31 - s;
                        if (h !== (u - 1) % 31) throw new Error("implementation bug");
                        let p, g = 0;
                        if (20 > h) {
                            const t = 20 - h;
                            g = t + 32, p = f >>> t, f = f << 32 - t | d >>> t, d <<= 32 - t
                        } else if (20 === h) g = 32, p = f, f = d;
                        else {
                            const t = h - 20;
                            g = 32 - t, p = f << t | d >>> 32 - t, f = d << t
                        }
                        if (c >>>= 0, p >>>= 0, c > p) return Ct.__absoluteGreater(r);
                        if (c < p) return Ct.__absoluteLess(r);
                        for (let _ = a - 2; 0 <= _; _--) {
                            0 < g ? (g -= 32, p = f >>> 0, f = d, d = 0) : p = 0;
                            const e = t.__unsignedDigit(_);
                            if (e > p) return Ct.__absoluteGreater(r);
                            if (e < p) return Ct.__absoluteLess(r)
                        }
                        if (0 !== f || 0 !== d) {
                            if (0 === g) throw new Error("implementation bug");
                            return Ct.__absoluteLess(r)
                        }
                        return 0
                    }
                    static __equalToNumber(t, e) {
                        var n = Math.abs;
                        return e | 0 === e ? 0 === e ? 0 === t.length : 1 === t.length && t.sign === 0 > e && t.__unsignedDigit(0) === n(e) : 0 === Ct.__compareToDouble(t, e)
                    }
                    static __comparisonResultToBool(t, e) {
                        switch (e) {
                            case 0:
                                return 0 > t;
                            case 1:
                                return 0 >= t;
                            case 2:
                                return 0 < t;
                            case 3:
                                return 0 <= t
                        }
                        throw new Error("unreachable")
                    }
                    static __compare(t, e, n) {
                        if (t = Ct.__toPrimitive(t), e = Ct.__toPrimitive(e), "string" == typeof t && "string" == typeof e) switch (n) {
                            case 0:
                                return t < e;
                            case 1:
                                return t <= e;
                            case 2:
                                return t > e;
                            case 3:
                                return t >= e
                        }
                        if (Ct.__isBigInt(t) && "string" == typeof e) return null !== (e = Ct.__fromString(e)) && Ct.__comparisonResultToBool(Ct.__compareToBigInt(t, e), n);
                        if ("string" == typeof t && Ct.__isBigInt(e)) return null !== (t = Ct.__fromString(t)) && Ct.__comparisonResultToBool(Ct.__compareToBigInt(t, e), n);
                        if (t = Ct.__toNumeric(t), e = Ct.__toNumeric(e), Ct.__isBigInt(t)) {
                            if (Ct.__isBigInt(e)) return Ct.__comparisonResultToBool(Ct.__compareToBigInt(t, e), n);
                            if ("number" != typeof e) throw new Error("implementation bug");
                            return Ct.__comparisonResultToBool(Ct.__compareToNumber(t, e), n)
                        }
                        if ("number" != typeof t) throw new Error("implementation bug");
                        if (Ct.__isBigInt(e)) return Ct.__comparisonResultToBool(Ct.__compareToNumber(e, t), 2 ^ n);
                        if ("number" != typeof e) throw new Error("implementation bug");
                        return 0 === n ? t < e : 1 === n ? t <= e : 2 === n ? t > e : 3 === n ? t >= e : void 0
                    }
                    __clzmsd() {
                        return Math.clz32(this[this.length - 1])
                    }
                    static __absoluteAdd(t, e, n) {
                        if (t.length < e.length) return Ct.__absoluteAdd(e, t, n);
                        if (0 === t.length) return t;
                        if (0 === e.length) return t.sign === n ? t : Ct.unaryMinus(t);
                        let r = t.length;
                        (0 === t.__clzmsd() || e.length === t.length && 0 === e.__clzmsd()) && r++;
                        const o = new Ct(r, n);
                        let i = 0,
                            a = 0;
                        for (; a < e.length; a++) {
                            const n = e.__digit(a),
                                r = t.__digit(a),
                                c = (65535 & r) + (65535 & n) + i,
                                s = (r >>> 16) + (n >>> 16) + (c >>> 16);
                            i = s >>> 16, o.__setDigit(a, 65535 & c | s << 16)
                        }
                        for (; a < t.length; a++) {
                            const e = t.__digit(a),
                                n = (65535 & e) + i,
                                r = (e >>> 16) + (n >>> 16);
                            i = r >>> 16, o.__setDigit(a, 65535 & n | r << 16)
                        }
                        return a < o.length && o.__setDigit(a, i), o.__trim()
                    }
                    static __absoluteSub(t, e, n) {
                        if (0 === t.length) return t;
                        if (0 === e.length) return t.sign === n ? t : Ct.unaryMinus(t);
                        const r = new Ct(t.length, n);
                        let o = 0,
                            i = 0;
                        for (; i < e.length; i++) {
                            const n = t.__digit(i),
                                a = e.__digit(i),
                                c = (65535 & n) - (65535 & a) - o;
                            o = 1 & c >>> 16;
                            const s = (n >>> 16) - (a >>> 16) - o;
                            o = 1 & s >>> 16, r.__setDigit(i, 65535 & c | s << 16)
                        }
                        for (; i < t.length; i++) {
                            const e = t.__digit(i),
                                n = (65535 & e) - o;
                            o = 1 & n >>> 16;
                            const a = (e >>> 16) - o;
                            o = 1 & a >>> 16, r.__setDigit(i, 65535 & n | a << 16)
                        }
                        return r.__trim()
                    }
                    static __absoluteAddOne(t, e, n = null) {
                        const r = t.length;
                        null === n ? n = new Ct(r, e) : n.sign = e;
                        let o = !0;
                        for (let i, a = 0; a < r; a++) {
                            i = t.__digit(a);
                            const e = -1 === i;
                            o && (i = 0 | i + 1), o = e, n.__setDigit(a, i)
                        }
                        return o && n.__setDigitGrow(r, 1), n
                    }
                    static __absoluteSubOne(t, e) {
                        const n = t.length,
                            r = new Ct(e = e || n, !1);
                        let o = !0;
                        for (let i, a = 0; a < n; a++) {
                            i = t.__digit(a);
                            const e = 0 === i;
                            o && (i = 0 | i - 1), o = e, r.__setDigit(a, i)
                        }
                        for (let i = n; i < e; i++) r.__setDigit(i, 0);
                        return r
                    }
                    static __absoluteAnd(t, e, n = null) {
                        let r = t.length,
                            o = e.length,
                            i = o;
                        if (r < o) {
                            i = r;
                            const n = t,
                                a = r;
                            t = e, r = o, e = n, o = a
                        }
                        let a = i;
                        null === n ? n = new Ct(a, !1) : a = n.length;
                        let c = 0;
                        for (; c < i; c++) n.__setDigit(c, t.__digit(c) & e.__digit(c));
                        for (; c < a; c++) n.__setDigit(c, 0);
                        return n
                    }
                    static __absoluteAndNot(t, e, n = null) {
                        const r = t.length,
                            o = e.length;
                        let i = o;
                        r < o && (i = r);
                        let a = r;
                        null === n ? n = new Ct(a, !1) : a = n.length;
                        let c = 0;
                        for (; c < i; c++) n.__setDigit(c, t.__digit(c) & ~e.__digit(c));
                        for (; c < r; c++) n.__setDigit(c, t.__digit(c));
                        for (; c < a; c++) n.__setDigit(c, 0);
                        return n
                    }
                    static __absoluteOr(t, e, n = null) {
                        let r = t.length,
                            o = e.length,
                            i = o;
                        if (r < o) {
                            i = r;
                            const n = t,
                                a = r;
                            t = e, r = o, e = n, o = a
                        }
                        let a = r;
                        null === n ? n = new Ct(a, !1) : a = n.length;
                        let c = 0;
                        for (; c < i; c++) n.__setDigit(c, t.__digit(c) | e.__digit(c));
                        for (; c < r; c++) n.__setDigit(c, t.__digit(c));
                        for (; c < a; c++) n.__setDigit(c, 0);
                        return n
                    }
                    static __absoluteXor(t, e, n = null) {
                        let r = t.length,
                            o = e.length,
                            i = o;
                        if (r < o) {
                            i = r;
                            const n = t,
                                a = r;
                            t = e, r = o, e = n, o = a
                        }
                        let a = r;
                        null === n ? n = new Ct(a, !1) : a = n.length;
                        let c = 0;
                        for (; c < i; c++) n.__setDigit(c, t.__digit(c) ^ e.__digit(c));
                        for (; c < r; c++) n.__setDigit(c, t.__digit(c));
                        for (; c < a; c++) n.__setDigit(c, 0);
                        return n
                    }
                    static __absoluteCompare(t, e) {
                        const n = t.length - e.length;
                        if (0 != n) return n;
                        let r = t.length - 1;
                        for (; 0 <= r && t.__digit(r) === e.__digit(r);) r--;
                        return 0 > r ? 0 : t.__unsignedDigit(r) > e.__unsignedDigit(r) ? 1 : -1
                    }
                    static __multiplyAccumulate(t, e, n, r) {
                        var o = Math.imul;
                        if (0 === e) return;
                        const i = 65535 & e,
                            a = e >>> 16;
                        let c = 0,
                            s = 0,
                            u = 0;
                        for (let l = 0; l < t.length; l++, r++) {
                            let e = n.__digit(r),
                                f = 65535 & e,
                                d = e >>> 16;
                            const h = t.__digit(l),
                                p = 65535 & h,
                                g = h >>> 16,
                                _ = o(p, i),
                                v = o(p, a),
                                m = o(g, i),
                                b = o(g, a);
                            f += s + (65535 & _), d += u + c + (f >>> 16) + (_ >>> 16) + (65535 & v) + (65535 & m), c = d >>> 16, s = (v >>> 16) + (m >>> 16) + (65535 & b) + c, c = s >>> 16, s &= 65535, u = b >>> 16, e = 65535 & f | d << 16, n.__setDigit(r, e)
                        }
                        for (; 0 != c || 0 !== s || 0 !== u; r++) {
                            let t = n.__digit(r);
                            const e = (65535 & t) + s,
                                o = (t >>> 16) + (e >>> 16) + u + c;
                            s = 0, u = 0, c = o >>> 16, t = 65535 & e | o << 16, n.__setDigit(r, t)
                        }
                    }
                    static __internalMultiplyAdd(t, e, n, r, o) {
                        var i = Math.imul;
                        let a = n,
                            c = 0;
                        for (let s = 0; s < r; s++) {
                            const n = t.__digit(s),
                                r = i(65535 & n, e),
                                u = (65535 & r) + c + a;
                            a = u >>> 16;
                            const l = i(n >>> 16, e),
                                f = (65535 & l) + (r >>> 16) + a;
                            a = f >>> 16, c = l >>> 16, o.__setDigit(s, f << 16 | 65535 & u)
                        }
                        if (o.length > r)
                            for (o.__setDigit(r++, a + c); r < o.length;) o.__setDigit(r++, 0);
                        else if (0 !== a + c) throw new Error("implementation bug")
                    }
                    __inplaceMultiplyAdd(t, e, n) {
                        var r = Math.imul;
                        n > this.length && (n = this.length);
                        const o = 65535 & t,
                            i = t >>> 16;
                        let a = 0,
                            c = 65535 & e,
                            s = e >>> 16;
                        for (let u = 0; u < n; u++) {
                            const t = this.__digit(u),
                                e = 65535 & t,
                                n = t >>> 16,
                                l = r(e, o),
                                f = r(e, i),
                                d = r(n, o),
                                h = r(n, i),
                                p = c + (65535 & l),
                                g = s + a + (p >>> 16) + (l >>> 16) + (65535 & f) + (65535 & d);
                            c = (f >>> 16) + (d >>> 16) + (65535 & h) + (g >>> 16), a = c >>> 16, c &= 65535, s = h >>> 16, this.__setDigit(u, 65535 & p | g << 16)
                        }
                        if (0 != a || 0 !== c || 0 !== s) throw new Error("implementation bug")
                    }
                    static __absoluteDivSmall(t, e, n) {
                        null === n && (n = new Ct(t.length, !1));
                        let r = 0;
                        for (let o, i = 2 * t.length - 1; 0 <= i; i -= 2) {
                            o = (r << 16 | t.__halfDigit(i)) >>> 0;
                            const a = 0 | o / e;
                            r = 0 | o % e, o = (r << 16 | t.__halfDigit(i - 1)) >>> 0;
                            const c = 0 | o / e;
                            r = 0 | o % e, n.__setDigit(i >>> 1, a << 16 | c)
                        }
                        return n
                    }
                    static __absoluteModSmall(t, e) {
                        let n = 0;
                        for (let r = 2 * t.length - 1; 0 <= r; r--) n = 0 | ((n << 16 | t.__halfDigit(r)) >>> 0) % e;
                        return n
                    }
                    static __absoluteDivLarge(t, e, n, r) {
                        var o = Math.imul;
                        const i = e.__halfDigitLength(),
                            a = e.length,
                            c = t.__halfDigitLength() - i;
                        let s = null;
                        n && (s = new Ct(c + 2 >>> 1, !1), s.__initializeDigits());
                        const u = new Ct(i + 2 >>> 1, !1);
                        u.__initializeDigits();
                        const l = Ct.__clz16(e.__halfDigit(i - 1));
                        0 < l && (e = Ct.__specialLeftShift(e, l, 0));
                        const f = Ct.__specialLeftShift(t, l, 1),
                            d = e.__halfDigit(i - 1);
                        let h = 0;
                        for (let p, g = c; 0 <= g; g--) {
                            p = 65535;
                            const t = f.__halfDigit(g + i);
                            if (t !== d) {
                                const n = (t << 16 | f.__halfDigit(g + i - 1)) >>> 0;
                                p = 0 | n / d;
                                let r = 0 | n % d;
                                const a = e.__halfDigit(i - 2),
                                    c = f.__halfDigit(g + i - 2);
                                for (; o(p, a) >>> 0 > (r << 16 | c) >>> 0 && (p--, r += d, !(65535 < r)););
                            }
                            Ct.__internalMultiplyAdd(e, p, 0, a, u);
                            let r = f.__inplaceSub(u, g, i + 1);
                            0 !== r && (r = f.__inplaceAdd(e, g, i), f.__setHalfDigit(g + i, f.__halfDigit(g + i) + r), p--), n && (1 & g ? h = p << 16 : s.__setDigit(g >>> 1, h | p))
                        }
                        return r ? (f.__inplaceRightShift(l), n ? {
                            quotient: s,
                            remainder: f
                        } : f) : n ? s : void 0
                    }
                    static __clz16(t) {
                        return Math.clz32(t) - 16
                    }
                    __inplaceAdd(t, e, n) {
                        let r = 0;
                        for (let o = 0; o < n; o++) {
                            const n = this.__halfDigit(e + o) + t.__halfDigit(o) + r;
                            r = n >>> 16, this.__setHalfDigit(e + o, n)
                        }
                        return r
                    }
                    __inplaceSub(t, e, n) {
                        let r = 0;
                        if (1 & e) {
                            e >>= 1;
                            let o = this.__digit(e),
                                i = 65535 & o,
                                a = 0;
                            for (; a < n - 1 >>> 1; a++) {
                                const n = t.__digit(a),
                                    c = (o >>> 16) - (65535 & n) - r;
                                r = 1 & c >>> 16, this.__setDigit(e + a, c << 16 | 65535 & i), o = this.__digit(e + a + 1), i = (65535 & o) - (n >>> 16) - r, r = 1 & i >>> 16
                            }
                            const c = t.__digit(a),
                                s = (o >>> 16) - (65535 & c) - r;
                            if (r = 1 & s >>> 16, this.__setDigit(e + a, s << 16 | 65535 & i), e + a + 1 >= this.length) throw new RangeError("out of bounds");
                            0 == (1 & n) && (o = this.__digit(e + a + 1), i = (65535 & o) - (c >>> 16) - r, r = 1 & i >>> 16, this.__setDigit(e + t.length, 4294901760 & o | 65535 & i))
                        } else {
                            e >>= 1;
                            let o = 0;
                            for (; o < t.length - 1; o++) {
                                const n = this.__digit(e + o),
                                    i = t.__digit(o),
                                    a = (65535 & n) - (65535 & i) - r;
                                r = 1 & a >>> 16;
                                const c = (n >>> 16) - (i >>> 16) - r;
                                r = 1 & c >>> 16, this.__setDigit(e + o, c << 16 | 65535 & a)
                            }
                            const i = this.__digit(e + o),
                                a = t.__digit(o),
                                c = (65535 & i) - (65535 & a) - r;
                            r = 1 & c >>> 16;
                            let s = 0;
                            0 == (1 & n) && (s = (i >>> 16) - (a >>> 16) - r, r = 1 & s >>> 16), this.__setDigit(e + o, s << 16 | 65535 & c)
                        }
                        return r
                    }
                    __inplaceRightShift(t) {
                        if (0 === t) return;
                        let e = this.__digit(0) >>> t;
                        const n = this.length - 1;
                        for (let r = 0; r < n; r++) {
                            const n = this.__digit(r + 1);
                            this.__setDigit(r, n << 32 - t | e), e = n >>> t
                        }
                        this.__setDigit(n, e)
                    }
                    static __specialLeftShift(t, e, n) {
                        const r = t.length,
                            o = new Ct(r + n, !1);
                        if (0 === e) {
                            for (let e = 0; e < r; e++) o.__setDigit(e, t.__digit(e));
                            return 0 < n && o.__setDigit(r, 0), o
                        }
                        let i = 0;
                        for (let a = 0; a < r; a++) {
                            const n = t.__digit(a);
                            o.__setDigit(a, n << e | i), i = n >>> 32 - e
                        }
                        return 0 < n && o.__setDigit(r, i), o
                    }
                    static __leftShiftByAbsolute(t, e) {
                        const n = Ct.__toShiftAmount(e);
                        if (0 > n) throw new RangeError("BigInt too big");
                        const r = n >>> 5,
                            o = 31 & n,
                            i = t.length,
                            a = 0 !== o && 0 != t.__digit(i - 1) >>> 32 - o,
                            c = i + r + (a ? 1 : 0),
                            s = new Ct(c, t.sign);
                        if (0 === o) {
                            let e = 0;
                            for (; e < r; e++) s.__setDigit(e, 0);
                            for (; e < c; e++) s.__setDigit(e, t.__digit(e - r))
                        } else {
                            let e = 0;
                            for (let t = 0; t < r; t++) s.__setDigit(t, 0);
                            for (let n = 0; n < i; n++) {
                                const i = t.__digit(n);
                                s.__setDigit(n + r, i << o | e), e = i >>> 32 - o
                            }
                            if (a) s.__setDigit(i + r, e);
                            else if (0 != e) throw new Error("implementation bug")
                        }
                        return s.__trim()
                    }
                    static __rightShiftByAbsolute(t, e) {
                        const n = t.length,
                            r = t.sign,
                            o = Ct.__toShiftAmount(e);
                        if (0 > o) return Ct.__rightShiftByMaximum(r);
                        const i = o >>> 5,
                            a = 31 & o;
                        let c = n - i;
                        if (0 >= c) return Ct.__rightShiftByMaximum(r);
                        let s = !1;
                        if (r)
                            if (0 != (t.__digit(i) & (1 << a) - 1)) s = !0;
                            else
                                for (let l = 0; l < i; l++)
                                    if (0 !== t.__digit(l)) {
                                        s = !0;
                                        break
                                    } s && 0 === a && 0 == ~t.__digit(n - 1) && c++;
                        let u = new Ct(c, r);
                        if (0 === a)
                            for (let l = i; l < n; l++) u.__setDigit(l - i, t.__digit(l));
                        else {
                            let e = t.__digit(i) >>> a;
                            const r = n - i - 1;
                            for (let n = 0; n < r; n++) {
                                const r = t.__digit(n + i + 1);
                                u.__setDigit(n, r << 32 - a | e), e = r >>> a
                            }
                            u.__setDigit(r, e)
                        }
                        return s && (u = Ct.__absoluteAddOne(u, !0, u)), u.__trim()
                    }
                    static __rightShiftByMaximum(t) {
                        return t ? Ct.__oneDigit(1, !0) : Ct.__zero()
                    }
                    static __toShiftAmount(t) {
                        if (1 < t.length) return -1;
                        const e = t.__unsignedDigit(0);
                        return e > Ct.__kMaxLengthBits ? -1 : e
                    }
                    static __toPrimitive(t, e = "default") {
                        if ("object" != typeof t) return t;
                        if (t.constructor === Ct) return t;
                        const n = t[Symbol.toPrimitive];
                        if (n) {
                            const t = n(e);
                            if ("object" != typeof t) return t;
                            throw new TypeError("Cannot convert object to primitive value")
                        }
                        const r = t.valueOf;
                        if (r) {
                            const e = r.call(t);
                            if ("object" != typeof e) return e
                        }
                        const o = t.toString;
                        if (o) {
                            const e = o.call(t);
                            if ("object" != typeof e) return e
                        }
                        throw new TypeError("Cannot convert object to primitive value")
                    }
                    static __toNumeric(t) {
                        return Ct.__isBigInt(t) ? t : +t
                    }
                    static __isBigInt(t) {
                        return "object" == typeof t && t.constructor === Ct
                    }
                    static __truncateToNBits(t, e) {
                        const n = t + 31 >>> 5,
                            r = new Ct(n, e.sign),
                            o = n - 1;
                        for (let a = 0; a < o; a++) r.__setDigit(a, e.__digit(a));
                        let i = e.__digit(o);
                        if (0 != (31 & t)) {
                            const e = 32 - (31 & t);
                            i = i << e >>> e
                        }
                        return r.__setDigit(o, i), r.__trim()
                    }
                    static __truncateAndSubFromPowerOfTwo(t, e, n) {
                        var r = Math.min;
                        const o = t + 31 >>> 5,
                            i = new Ct(o, n);
                        let a = 0;
                        const c = o - 1;
                        let s = 0;
                        for (const d = r(c, e.length); a < d; a++) {
                            const t = e.__digit(a),
                                n = 0 - (65535 & t) - s;
                            s = 1 & n >>> 16;
                            const r = 0 - (t >>> 16) - s;
                            s = 1 & r >>> 16, i.__setDigit(a, 65535 & n | r << 16)
                        }
                        for (; a < c; a++) i.__setDigit(a, 0 | -s);
                        let u = c < e.length ? e.__digit(c) : 0;
                        const l = 31 & t;
                        let f;
                        if (0 == l) {
                            const t = 0 - (65535 & u) - s;
                            s = 1 & t >>> 16, f = 65535 & t | 0 - (u >>> 16) - s << 16
                        } else {
                            const t = 32 - l;
                            u = u << t >>> t;
                            const e = 1 << 32 - t,
                                n = (65535 & e) - (65535 & u) - s;
                            s = 1 & n >>> 16, f = 65535 & n | (e >>> 16) - (u >>> 16) - s << 16, f &= e - 1
                        }
                        return i.__setDigit(c, f), i.__trim()
                    }
                    __digit(t) {
                        return this[t]
                    }
                    __unsignedDigit(t) {
                        return this[t] >>> 0
                    }
                    __setDigit(t, e) {
                        this[t] = 0 | e
                    }
                    __setDigitGrow(t, e) {
                        this[t] = 0 | e
                    }
                    __halfDigitLength() {
                        const t = this.length;
                        return 65535 >= this.__unsignedDigit(t - 1) ? 2 * t - 1 : 2 * t
                    }
                    __halfDigit(t) {
                        return 65535 & this[t >>> 1] >>> ((1 & t) << 4)
                    }
                    __setHalfDigit(t, e) {
                        const n = t >>> 1,
                            r = this.__digit(n),
                            o = 1 & t ? 65535 & r | e << 16 : 4294901760 & r | 65535 & e;
                        this.__setDigit(n, o)
                    }
                    static __digitPow(t, e) {
                        let n = 1;
                        for (; 0 < e;) 1 & e && (n *= t), e >>>= 1, t *= t;
                        return n
                    }
                }
                Ct.__kMaxLength = 33554432, Ct.__kMaxLengthBits = Ct.__kMaxLength << 5, Ct.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], Ct.__kBitsPerCharTableShift = 5, Ct.__kBitsPerCharTableMultiplier = 1 << Ct.__kBitsPerCharTableShift, Ct.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], Ct.__kBitConversionBuffer = new ArrayBuffer(8), Ct.__kBitConversionDouble = new Float64Array(Ct.__kBitConversionBuffer), Ct.__kBitConversionInts = new Int32Array(Ct.__kBitConversionBuffer);
                var Pt = function(t) {
                    var e, n;

                    function r(e) {
                        var n, r = (void 0 === e ? {} : e).supportedChainIds;
                        return (n = t.call(this) || this).supportedChainIds = r, n
                    }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
                    var o = r.prototype;
                    return o.emitUpdate = function(t) {
                        this.emit($.Update, t)
                    }, o.emitError = function(t) {
                        this.emit($.Error, t)
                    }, o.emitDeactivate = function() {
                        this.emit($.Deactivate)
                    }, r
                }(c.EventEmitter);

                function Et() {
                    return (Et = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var St = {
                        1: "mainnet",
                        3: "ropsten",
                        4: "rinkeby",
                        5: "goerli",
                        42: "kovan"
                    },
                    jt = function(t) {
                        var e, r;

                        function o(e) {
                            var n, r = e.chainId,
                                o = e.config,
                                i = void 0 === o ? {} : o;
                            return (n = t.call(this, {
                                supportedChainIds: [r]
                            }) || this).chainId = r, n.config = i, n
                        }
                        r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var i = o.prototype;
                        return i.activate = function() {
                            try {
                                var t = function() {
                                        return Promise.resolve(e.authereum.getProvider().enable().then((function(t) {
                                            return t[0]
                                        }))).then((function() {
                                            return {
                                                provider: e.authereum.getProvider()
                                            }
                                        }))
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.authereum) return Promise.resolve(Promise.all([n.e(7), n.e(16), n.e(14), n.e(0)]).then(n.bind(null, "PCyZ"))).then((function(t) {
                                            var n = t.default;
                                            e.authereum = new n(Et({
                                                networkName: St[e.chainId]
                                            }, e.config))
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getProvider = function() {
                            try {
                                return Promise.resolve(this.authereum.getProvider())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getChainId = function() {
                            try {
                                return Promise.resolve(this.authereum.getNetworkId())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getAccount = function() {
                            try {
                                return Promise.resolve(this.authereum.getAccountAddress())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.deactivate = function() {}, i.close = function() {
                            try {
                                return this.authereum.logout(), this.emitDeactivate(), Promise.resolve()
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, o
                    }(Pt),
                    It = {
                        1: "mainnet",
                        3: "ropsten",
                        4: "rinkeby",
                        42: "kovan"
                    },
                    At = function(t) {
                        var e, r;

                        function o(e) {
                            var n, r = e.apiKey,
                                o = e.chainId;
                            return Object.keys(It).includes(o.toString()) || H(!1), (n = t.call(this, {
                                supportedChainIds: [o]
                            }) || this).apiKey = r, n.chainId = o, n
                        }
                        r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var i = o.prototype;
                        return i.activate = function() {
                            try {
                                var t = function() {
                                        return Promise.resolve(e.fortmatic.getProvider().enable().then((function(t) {
                                            return t[0]
                                        }))).then((function(t) {
                                            return {
                                                provider: e.fortmatic.getProvider(),
                                                chainId: e.chainId,
                                                account: t
                                            }
                                        }))
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.fortmatic) return Promise.resolve(n.e(35).then(n.bind(null, "bWFv"))).then((function(t) {
                                            var n = t.default;
                                            e.fortmatic = new n(e.apiKey, 1 === e.chainId || 4 === e.chainId ? void 0 : It[e.chainId])
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getProvider = function() {
                            try {
                                return Promise.resolve(this.fortmatic.getProvider())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getChainId = function() {
                            try {
                                return Promise.resolve(this.chainId)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getAccount = function() {
                            try {
                                return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t) {
                                    return t[0]
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.deactivate = function() {}, i.close = function() {
                            try {
                                var t = this;
                                return Promise.resolve(t.fortmatic.user.logout()).then((function() {
                                    t.emitDeactivate()
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, o
                    }(Pt);
                const Dt = t => "injected" === t ? "injected" : t.endsWith(".ipc") ? "ipc" : t.startsWith("wss://") || t.startsWith("ws://") ? "ws" : t.startsWith("https://") || t.startsWith("http://") ? "http" : "";
                var Tt = class extends s.a {
                    constructor(t) {
                        super(), this.connected = !1, this.nextId = 0, this.promises = {}, this.subscriptions = [], this.connection = t, this.connection.on("connect", () => this.checkConnection()), this.connection.on("close", () => this.emit("close")), this.connection.on("payload", t => {
                            const {
                                id: e,
                                method: n,
                                error: r,
                                result: o
                            } = t;
                            void 0 !== e ? this.promises[e] && (t.error ? this.promises[e].reject(r) : this.promises[e].resolve(o), delete this.promises[e]) : n && n.indexOf("_subscription") > -1 && (this.emit(t.params.subscription, t.params.result), this.emit(n, t.params), this.emit("data", t))
                        }), this.on("newListener", (t, e) => {
                            "networkChanged" === t ? !this.attemptedNetworkSubscription && this.connected && this.startNetworkSubscription() : "accountsChanged" === t && !this.attemptedAccountsSubscription && this.connected && this.startAccountsSubscription()
                        })
                    }
                    async checkConnection() {
                        try {
                            this.emit("connect", await this._send("net_version")), this.connected = !0, this.listenerCount("networkChanged") && !this.attemptedNetworkSubscription && this.startNetworkSubscription(), this.listenerCount("accountsChanged") && !this.attemptedAccountsSubscription && this.startAccountsSubscription()
                        } catch (V) {
                            this.connected = !1
                        }
                    }
                    async startNetworkSubscription() {
                        this.attemptedNetworkSubscription = !0;
                        try {
                            let t = await this.subscribe("eth_subscribe", "networkChanged");
                            this.on(t, t => this.emit("networkChanged", t))
                        } catch (V) {
                            console.warn("Unable to subscribe to networkChanged", V)
                        }
                    }
                    async startAccountsSubscription() {
                        this.attemptedAccountsSubscription = !0;
                        try {
                            let t = await this.subscribe("eth_subscribe", "accountsChanged");
                            this.on(t, t => this.emit("accountsChanged", t))
                        } catch (V) {
                            console.warn("Unable to subscribe to accountsChanged", V)
                        }
                    }
                    enable() {
                        return new Promise((t, e) => {
                            this._send("eth_accounts").then(n => {
                                if (n.length > 0) this.accounts = n, this.coinbase = n[0], this.emit("enable"), t(n);
                                else {
                                    const t = new Error("User Denied Full Provider");
                                    t.code = 4001, e(t)
                                }
                            }).catch(e)
                        })
                    }
                    _send(t, e = []) {
                        if (!t || "string" != typeof t) return new Error("Method is not a valid string.");
                        if (!(e instanceof Array)) return new Error("Params is not a valid array.");
                        const n = {
                                jsonrpc: "2.0",
                                id: this.nextId++,
                                method: t,
                                params: e
                            },
                            r = new Promise((t, e) => {
                                this.promises[n.id] = {
                                    resolve: t,
                                    reject: e
                                }
                            });
                        return this.connection.send(n), r
                    }
                    send(...t) {
                        return this._send(...t)
                    }
                    _sendBatch(t) {
                        return Promise.all(t.map(t => this._send(t.method, t.params)))
                    }
                    subscribe(t, e, n = []) {
                        return this._send(t, [e, ...n]).then(t => (this.subscriptions.push(t), t))
                    }
                    unsubscribe(t, e) {
                        return this._send(t, [e]).then(t => {
                            if (t) return this.subscriptions = this.subscriptions.filter(t => t !== e), this.removeAllListeners(e), t
                        })
                    }
                    sendAsync(t, e) {
                        return e && "function" == typeof e ? t ? t instanceof Array ? this.sendAsyncBatch(t, e) : this._send(t.method, t.params).then(n => {
                            e(null, {
                                id: t.id,
                                jsonrpc: t.jsonrpc,
                                result: n
                            })
                        }).catch(t => {
                            e(t)
                        }) : e(new Error("Invalid Payload")) : e(new Error("Invalid or undefined callback provided to sendAsync"))
                    }
                    sendAsyncBatch(t, e) {
                        return this._sendBatch(t).then(n => {
                            let r = n.map((e, n) => ({
                                id: t[n].id,
                                jsonrpc: t[n].jsonrpc,
                                result: e
                            }));
                            e(null, r)
                        }).catch(t => {
                            e(t)
                        })
                    }
                    isConnected() {
                        return this.connected
                    }
                    close() {
                        this.connection.close(), this.connected = !1;
                        let t = new Error("Provider closed, subscription lost, please subscribe again.");
                        this.subscriptions.forEach(e => this.emit(e, t)), this.subscriptions = []
                    }
                };
                var kt = class extends s.a {
                    constructor(t, e, n) {
                        super(), this.targets = e, this.connections = t, this.connected = !1, this.status = "loading", this.interval = n.interval || 5e3, this.name = n.name || "default", this.inSetup = !0, this.connect()
                    }
                    connect(t = 0) {
                        if (this.connection && "connected" === this.connection.status && t >= this.connection.index);
                        else if (0 === this.targets.length);
                        else {
                            const {
                                protocol: e,
                                location: n
                            } = this.targets[t];
                            this.connection = this.connections[e](n), this.connection.on("error", e => this.connected ? this.listenerCount("error") ? this.emit("error", e) : void console.warn("eth-provider - Uncaught connection error: " + e.message) : this.connectionError(t, e)), this.connection.on("close", t => {
                                this.connected = !1, this.emit("close"), this.closing || this.refresh()
                            }), this.connection.on("connect", () => {
                                this.connection.target = this.targets[t], this.connection.index = t, this.targets[t].status = this.connection.status, this.connected = !0, this.inSetup = !1, this.emit("connect")
                            }), this.connection.on("data", t => this.emit("data", t)), this.connection.on("payload", t => this.emit("payload", t))
                        }
                    }
                    refresh(t = this.interval) {
                        clearTimeout(this.connectTimer), this.connectTimer = setTimeout(() => this.connect(), t)
                    }
                    connectionError(t, e) {
                        this.targets[t].status = e, this.targets.length - 1 === t ? (this.inSetup = !1, this.refresh()) : this.connect(++t)
                    }
                    close() {
                        this.closing = !0, this.connection ? this.connection.close() : this.emit("close"), clearTimeout(this.connectTimer)
                    }
                    error(t, e, n = -1) {
                        this.emit("payload", {
                            id: t.id,
                            jsonrpc: t.jsonrpc,
                            error: {
                                message: e,
                                code: n
                            }
                        })
                    }
                    send(t) {
                        this.inSetup ? setTimeout(() => this.send(t), 100) : this.connection.closed ? this.error(t, "Not connected") : this.connection.send(t)
                    }
                };
                const Nt = t => {
                    function e(e) {
                        t.status = e, t instanceof s.a && t.emit("status", e)
                    }
                    async function n() {
                        if (t.inSetup) return setTimeout(n, 1e3);
                        try {
                            await t.send("eth_syncing") ? (e("syncing"), setTimeout(() => n(), 5e3)) : e("connected")
                        } catch (t) {
                            e("disconnected")
                        }
                    }
                    return e("loading"), n(), t.on("connect", () => n()), t.on("close", () => e("disconnected")), t
                };
                var Rt = {
                    injected: ["injected"],
                    frame: ["ws://127.0.0.1:1248", "http://127.0.0.1:1248"],
                    direct: ["ws://127.0.0.1:8546", "http://127.0.0.1:8545"],
                    infura: ["wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b", "https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],
                    infuraRopsten: ["wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b", "https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],
                    infuraRinkeby: ["wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b", "https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],
                    infuraKovan: ["wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b", "https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b"]
                };
                class Mt extends s.a {
                    constructor(t, e) {
                        super(), t ? setTimeout(() => this.emit("error", new Error("Injected web3 provider is not currently supported")), 0) : setTimeout(() => this.emit("error", new Error("No injected provider found")), 0)
                    }
                }
                class xt extends s.a {
                    constructor(t) {
                        super(), setTimeout(() => this.emit("error", new Error(t)), 0)
                    }
                }
                let Lt, Bt;
                let Ut;
                class Ft extends s.a {
                    constructor(t, e, n) {
                        super(), Ut = t, setTimeout(() => this.create(e, n), 0)
                    }
                    create(t, e) {
                        Ut || this.emit("error", new Error("No WebSocket transport available"));
                        try {
                            this.socket = new Ut(t)
                        } catch (t) {
                            return this.emit("error", t)
                        }
                        this.socket.addEventListener("error", t => this.emit("error", t)), this.socket.addEventListener("open", () => {
                            this.emit("connect"), this.socket.addEventListener("message", t => {
                                ((t, e) => {
                                    const n = [];
                                    t.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|").forEach(t => {
                                        let r;
                                        Lt && (t = Lt + t);
                                        try {
                                            r = JSON.parse(t)
                                        } catch (n) {
                                            return Lt = t, clearTimeout(Bt), void(Bt = setTimeout(() => e(new Error("Parse response timeout")), 15e3))
                                        }
                                        clearTimeout(Bt), Lt = null, r && n.push(r)
                                    }), e(null, n)
                                })("string" == typeof t.data ? t.data : "", (t, e) => {
                                    t || e.forEach(t => {
                                        Array.isArray(t) ? t.forEach(t => this.emit("payload", t)) : this.emit("payload", t)
                                    })
                                })
                            }), this.socket.addEventListener("close", () => this.onClose())
                        })
                    }
                    onClose() {
                        this.socket = null, this.closed = !0, this.emit("close"), this.removeAllListeners()
                    }
                    close() {
                        this.socket ? this.socket.close() : this.onClose()
                    }
                    error(t, e, n = -1) {
                        this.emit("payload", {
                            id: t.id,
                            jsonrpc: t.jsonrpc,
                            error: {
                                message: e,
                                code: n
                            }
                        })
                    }
                    send(t) {
                        this.socket && this.socket.readyState === this.socket.CONNECTING ? setTimeout(e => this.send(t), 10) : !this.socket || this.socket.readyState > 1 ? (this.connected = !1, this.error(t, "Not connected")) : this.socket.send(JSON.stringify(t))
                    }
                }
                for (var Wt = d((function(t) {
                        var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                        if (e) {
                            var n = new Uint8Array(16);
                            t.exports = function() {
                                return e(n), n
                            }
                        } else {
                            var r = new Array(16);
                            t.exports = function() {
                                for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), r[e] = t >>> ((3 & e) << 3) & 255;
                                return r
                            }
                        }
                    })), qt = [], zt = 0; zt < 256; ++zt) qt[zt] = (zt + 256).toString(16).substr(1);
                var Gt = function(t, e, n) {
                    var r = e && n || 0;
                    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                    var o = (t = t || {}).random || (t.rng || Wt)();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
                        for (var i = 0; i < 16; ++i) e[r + i] = o[i];
                    return e || function(t, e) {
                        var n = e || 0,
                            r = qt;
                        return [r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], "-", r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]], r[t[n++]]].join("")
                    }(o)
                };
                let $t;
                class Vt extends s.a {
                    constructor(t, e, n) {
                        super(), $t = t, this.connected = !1, this.subscriptions = !1, this.status = "loading", this.url = e, this.pollId = Gt(), setTimeout(() => this.create(), 0)
                    }
                    create() {
                        if (!$t) return this.emit("error", new Error("No HTTP transport available"));
                        this.on("error", () => {
                            this.connected && this.close()
                        }), this.init()
                    }
                    init() {
                        this.send({
                            jsonrpc: "2.0",
                            method: "eth_syncing",
                            params: [],
                            id: 1
                        }, (t, e) => {
                            if (t) return this.emit("error", t);
                            this.send({
                                jsonrpc: "2.0",
                                id: 1,
                                method: "eth_pollSubscriptions",
                                params: [this.pollId, "immediate"]
                            }, (t, e) => {
                                t || (this.subscriptions = !0, this.pollSubscriptions()), this.connected = !0, this.emit("connect")
                            })
                        })
                    }
                    pollSubscriptions() {
                        this.send({
                            jsonrpc: "2.0",
                            id: 1,
                            method: "eth_pollSubscriptions",
                            params: [this.pollId]
                        }, (t, e) => {
                            if (t) return this.subscriptionTimeout = setTimeout(() => this.pollSubscriptions(), 1e4), this.emit("error", t);
                            this.closed || (this.subscriptionTimeout = this.pollSubscriptions()), e && e.map(t => {
                                let e;
                                try {
                                    e = JSON.parse(t)
                                } catch (t) {
                                    e = !1
                                }
                                return e
                            }).filter(t => t).forEach(t => this.emit("payload", t))
                        })
                    }
                    close() {
                        this.closed = !0, this.emit("close"), clearTimeout(this.subscriptionTimeout), this.removeAllListeners()
                    }
                    filterStatus(t) {
                        if (t.status >= 200 && t.status < 300) return t;
                        const e = new Error(t.statusText);
                        throw e.res = t, e.message
                    }
                    error(t, e, n = -1) {
                        this.emit("payload", {
                            id: t.id,
                            jsonrpc: t.jsonrpc,
                            error: {
                                message: e,
                                code: n
                            }
                        })
                    }
                    send(t, e) {
                        if (this.closed) return this.error(t, "Not connected");
                        if ("eth_subscribe" === t.method) {
                            if (!this.subscriptions) return this.error(t, "Subscriptions are not supported by this HTTP endpoint");
                            t.pollId = this.pollId
                        }
                        const n = new $t;
                        let r = !1;
                        const o = (o, i) => {
                            if (!r)
                                if (n.abort(), r = !0, e) e(o, i);
                                else {
                                    const {
                                        id: e,
                                        jsonrpc: n
                                    } = t, r = o ? {
                                        id: e,
                                        jsonrpc: n,
                                        error: {
                                            message: o.message,
                                            code: o.code
                                        }
                                    } : {
                                        id: e,
                                        jsonrpc: n,
                                        result: i
                                    };
                                    this.emit("payload", r)
                                }
                        };
                        n.open("POST", this.url, !0), n.setRequestHeader("Content-Type", "application/json"), n.timeout = 6e4, n.onerror = o, n.ontimeout = o, n.onreadystatechange = () => {
                            if (4 === n.readyState) try {
                                const t = JSON.parse(n.responseText);
                                o(t.error, t.result)
                            } catch (t) {
                                o(t)
                            }
                        }, n.send(JSON.stringify(t))
                    }
                }
                const Kt = {
                        ethereum: "undefined" != typeof window && void 0 !== window.ethereum ? window.ethereum : null,
                        web3: "undefined" != typeof window && void 0 !== window.web3 ? window.web3.currentProvider : null
                    },
                    Ht = "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : null,
                    Xt = "undefined" != typeof window && void 0 !== window.XMLHttpRequest ? window.XMLHttpRequest : null;
                Kt.ethereum && (Kt.ethereum.__isProvider = !0);
                const Jt = {
                    injected: Kt.ethereum || (t => e => new Mt(t, e))(Kt.web3),
                    ipc: ("IPC connections are unavliable in the browser", () => new xt("IPC connections are unavliable in the browser")),
                    ws: (t => (e, n) => new Ft(t, e, n))(Ht),
                    http: (t => (e, n) => new Vt(t, e, n))(Xt)
                };

                function Yt(t, e) {
                    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
                }

                function Qt(t) {
                    return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function Zt(t, e) {
                    return (Zt = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function te() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (V) {
                        return !1
                    }
                }

                function ee(t, e, n) {
                    return (ee = te() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var o = new(Function.bind.apply(t, r));
                        return n && Zt(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function ne(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return (ne = function(t) {
                        if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                        var n;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, r)
                        }

                        function r() {
                            return ee(t, arguments, Qt(this).constructor)
                        }
                        return r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), Zt(r, t)
                    })(t)
                }

                function re(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var oe = function(t) {
                        function e() {
                            var e;
                            return (e = t.call(this) || this).name = e.constructor.name, e.message = "The user rejected the request.", e
                        }
                        return Yt(e, t), e
                    }(ne(Error)),
                    ie = function(t) {
                        function e(e) {
                            var n;
                            return 1 !== e.supportedChainIds.length && H(!1), (n = t.call(this, e) || this).handleNetworkChanged = n.handleNetworkChanged.bind(re(n)), n.handleChainChanged = n.handleChainChanged.bind(re(n)), n.handleAccountsChanged = n.handleAccountsChanged.bind(re(n)), n.handleClose = n.handleClose.bind(re(n)), n
                        }
                        Yt(e, t);
                        var n = e.prototype;
                        return n.handleNetworkChanged = function(t) {
                            this.emitUpdate({
                                provider: this.provider,
                                chainId: t
                            })
                        }, n.handleChainChanged = function(t) {
                            this.emitUpdate({
                                chainId: t
                            })
                        }, n.handleAccountsChanged = function(t) {
                            this.emitUpdate({
                                account: 0 === t.length ? null : t[0]
                            })
                        }, n.handleClose = function(t, e) {
                            this.emitDeactivate()
                        }, n.activate = function() {
                            try {
                                var t = this;
                                return t.provider || (t.provider = ((t = ["injected", "frame"], e = {}) => ((t, e, n) => {
                                    if (t.injected.__isProvider && e.map(t => t.type).indexOf("injected") > -1) return delete t.injected.__isProvider, Nt(t.injected);
                                    const r = new Tt(new kt(t, e, n));
                                    return r.setMaxListeners(128), Nt(r)
                                })(Jt, ((t, e) => [].concat(...[].concat(t).map(t => e[t] ? e[t].map(e => ({
                                    type: t,
                                    location: e,
                                    protocol: Dt(e)
                                })) : {
                                    type: "custom",
                                    location: t,
                                    protocol: Dt(t)
                                })).filter(t => !(!t.protocol && "injected" !== t.type) || (console.log('eth-provider | Invalid provider preset/location: "' + t.location + '"'), !1)))(t, Rt), e))("frame")), t.provider.on("networkChanged", t.handleNetworkChanged).on("chainChanged", t.handleChainChanged).on("accountsChanged", t.handleAccountsChanged).on("close", t.handleClose), Promise.resolve(t.provider.enable().then((function(t) {
                                    return t[0]
                                })).catch((function(t) {
                                    throw t && 4001 === t.code ? new oe : t
                                }))).then((function(e) {
                                    return {
                                        provider: t.provider,
                                        account: e
                                    }
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getProvider = function() {
                            try {
                                return Promise.resolve(this.provider)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getChainId = function() {
                            try {
                                return Promise.resolve(this.provider.send("eth_chainId"))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getAccount = function() {
                            try {
                                return Promise.resolve(this.provider.send("eth_accounts").then((function(t) {
                                    return t[0]
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.deactivate = function() {
                            this.provider.removeListener("networkChanged", this.handleNetworkChanged).removeListener("chainChanged", this.handleChainChanged).removeListener("accountsChanged", this.handleAccountsChanged).removeListener("close", this.handleClose)
                        }, e
                    }(Pt);

                function ae() {
                    return (ae = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function ce(t, e) {
                    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
                }

                function se(t) {
                    return (se = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function ue(t, e) {
                    return (ue = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function le() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (V) {
                        return !1
                    }
                }

                function fe(t, e, n) {
                    return (fe = le() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var o = new(Function.bind.apply(t, r));
                        return n && ue(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function de(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return (de = function(t) {
                        if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                        var n;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, r)
                        }

                        function r() {
                            return fe(t, arguments, se(this).constructor)
                        }
                        return r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), ue(r, t)
                    })(t)
                }

                function he(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function pe(t, e) {
                    try {
                        var n = t()
                    } catch (t) {
                        return e(t)
                    }
                    return n && n.then ? n.then(void 0, e) : n
                }

                function ge(t) {
                    return t.hasOwnProperty("result") ? t.result : t
                }
                "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
                var _e = function(t) {
                        function e() {
                            var e;
                            return (e = t.call(this) || this).name = e.constructor.name, e.message = "No Ethereum provider was found on window.ethereum.", e
                        }
                        return ce(e, t), e
                    }(de(Error)),
                    ve = function(t) {
                        function e() {
                            var e;
                            return (e = t.call(this) || this).name = e.constructor.name, e.message = "The user rejected the request.", e
                        }
                        return ce(e, t), e
                    }(de(Error)),
                    me = function(t) {
                        function e(e) {
                            var n;
                            return (n = t.call(this, e) || this).handleNetworkChanged = n.handleNetworkChanged.bind(he(n)), n.handleChainChanged = n.handleChainChanged.bind(he(n)), n.handleAccountsChanged = n.handleAccountsChanged.bind(he(n)), n.handleClose = n.handleClose.bind(he(n)), n
                        }
                        ce(e, t);
                        var n = e.prototype;
                        return n.handleChainChanged = function(t) {
                            this.emitUpdate({
                                chainId: t,
                                provider: window.ethereum
                            })
                        }, n.handleAccountsChanged = function(t) {
                            0 === t.length ? this.emitDeactivate() : this.emitUpdate({
                                account: t[0]
                            })
                        }, n.handleClose = function(t, e) {
                            this.emitDeactivate()
                        }, n.handleNetworkChanged = function(t) {
                            this.emitUpdate({
                                chainId: t,
                                provider: window.ethereum
                            })
                        }, n.activate = function() {
                            try {
                                var t, e = function(e) {
                                        if (n) return e;

                                        function r() {
                                            return ae({
                                                provider: window.ethereum
                                            }, t ? {
                                                account: t
                                            } : {})
                                        }
                                        var o = function() {
                                            if (!t) return Promise.resolve(window.ethereum.enable().then((function(t) {
                                                return t && ge(t)[0]
                                            }))).then((function(e) {
                                                t = e
                                            }))
                                        }();
                                        return o && o.then ? o.then(r) : r()
                                    },
                                    n = !1;
                                if (!window.ethereum) throw new _e;
                                window.ethereum.on && (window.ethereum.on("chainChanged", this.handleChainChanged), window.ethereum.on("accountsChanged", this.handleAccountsChanged), window.ethereum.on("close", this.handleClose), window.ethereum.on("networkChanged", this.handleNetworkChanged)), window.ethereum.isMetaMask && (window.ethereum.autoRefreshOnNetworkChange = !1);
                                var r = pe((function() {
                                    return Promise.resolve(window.ethereum.send("eth_requestAccounts").then((function(t) {
                                        return ge(t)[0]
                                    }))).then((function(e) {
                                        t = e
                                    }))
                                }), (function(t) {
                                    if (4001 === t.code) throw new ve
                                }));
                                return Promise.resolve(r && r.then ? r.then(e) : e(r))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getProvider = function() {
                            try {
                                return Promise.resolve(window.ethereum)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getChainId = function() {
                            try {
                                var t, e = function() {
                                    function e() {
                                        if (!t) try {
                                            t = ge(window.ethereum.send({
                                                method: "net_version"
                                            }))
                                        } catch (t) {}
                                        return t || (t = window.ethereum.isDapper ? ge(window.ethereum.cachedResults.net_version) : window.ethereum.chainId || window.ethereum.netVersion || window.ethereum.networkVersion || window.ethereum._chainId), t
                                    }
                                    var n = function() {
                                        if (!t) {
                                            var e = pe((function() {
                                                return Promise.resolve(window.ethereum.send("net_version").then(ge)).then((function(e) {
                                                    t = e
                                                }))
                                            }), (function() {}));
                                            if (e && e.then) return e.then((function() {}))
                                        }
                                    }();
                                    return n && n.then ? n.then(e) : e()
                                };
                                if (!window.ethereum) throw new _e;
                                var n = pe((function() {
                                    return Promise.resolve(window.ethereum.send("eth_chainId").then(ge)).then((function(e) {
                                        t = e
                                    }))
                                }), (function() {}));
                                return Promise.resolve(n && n.then ? n.then(e) : e())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.getAccount = function() {
                            try {
                                var t, e = function() {
                                    function e() {
                                        return t || (t = ge(window.ethereum.send({
                                            method: "eth_accounts"
                                        }))[0]), t
                                    }
                                    var n = function() {
                                        if (!t) {
                                            var e = pe((function() {
                                                return Promise.resolve(window.ethereum.enable().then((function(t) {
                                                    return ge(t)[0]
                                                }))).then((function(e) {
                                                    t = e
                                                }))
                                            }), (function() {}));
                                            if (e && e.then) return e.then((function() {}))
                                        }
                                    }();
                                    return n && n.then ? n.then(e) : e()
                                };
                                if (!window.ethereum) throw new _e;
                                var n = pe((function() {
                                    return Promise.resolve(window.ethereum.send("eth_accounts").then((function(t) {
                                        return ge(t)[0]
                                    }))).then((function(e) {
                                        t = e
                                    }))
                                }), (function() {}));
                                return Promise.resolve(n && n.then ? n.then(e) : e())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, n.deactivate = function() {
                            window.ethereum && window.ethereum.removeListener && (window.ethereum.removeListener("chainChanged", this.handleChainChanged), window.ethereum.removeListener("accountsChanged", this.handleAccountsChanged), window.ethereum.removeListener("close", this.handleClose), window.ethereum.removeListener("networkChanged", this.handleNetworkChanged))
                        }, n.isAuthorized = function() {
                            try {
                                return window.ethereum ? Promise.resolve(pe((function() {
                                    return Promise.resolve(window.ethereum.send("eth_accounts").then((function(t) {
                                        return ge(t).length > 0
                                    })))
                                }), (function() {
                                    return !1
                                }))) : Promise.resolve(!1)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, e
                    }(Pt);

                function be(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var ye = {
                        1: "mainnet",
                        3: "ropsten",
                        4: "rinkeby",
                        5: "goerli",
                        42: "kovan",
                        100: "xdai",
                        30: "orchid",
                        31: "orchidTestnet",
                        99: "core",
                        77: "sokol",
                        61: "classic",
                        8: "ubiq",
                        108: "thundercore",
                        18: "thundercoreTestnet",
                        163: "lightstreams",
                        122: "fuse",
                        15001: "maticTestnet"
                    },
                    we = function(t) {
                        var e, r;

                        function o(e) {
                            var n, r = e.dAppId,
                                o = e.networks,
                                i = e.config,
                                a = void 0 === i ? {} : i,
                                c = o.map((function(t) {
                                    return "number" == typeof t ? t : Number(t.chainId)
                                }));
                            return c.every((function(t) {
                                return !!ye[t]
                            })) || H(!1), (n = t.call(this, {
                                supportedChainIds: c
                            }) || this).dAppId = r, n.networks = o, n.config = a, n.handleOnLogout = n.handleOnLogout.bind(be(n)), n.handleOnActiveWalletChanged = n.handleOnActiveWalletChanged.bind(be(n)), n.handleOnError = n.handleOnError.bind(be(n)), n
                        }
                        r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var i = o.prototype;
                        return i.handleOnLogout = function() {
                            this.emitDeactivate()
                        }, i.handleOnActiveWalletChanged = function(t) {
                            this.emitUpdate({
                                account: t
                            })
                        }, i.handleOnError = function(t) {
                            this.emitError(t)
                        }, i.activate = function() {
                            try {
                                var t = function() {
                                        return e.portis.onLogout(e.handleOnLogout), e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged), e.portis.onError(e.handleOnError), Promise.resolve(e.portis.provider.enable().then((function(t) {
                                            return t[0]
                                        }))).then((function(t) {
                                            return {
                                                provider: e.portis.provider,
                                                account: t
                                            }
                                        }))
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.portis) return Promise.resolve(Promise.all([n.e(7), n.e(0), n.e(27)]).then(n.bind(null, "Zwof"))).then((function(t) {
                                            var n = t.default;
                                            e.portis = new n(e.dAppId, "number" == typeof e.networks[0] ? ye[e.networks[0]] : e.networks[0], e.config)
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getProvider = function() {
                            try {
                                return Promise.resolve(this.portis.provider)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getChainId = function() {
                            try {
                                return Promise.resolve(this.portis.provider.send("eth_chainId"))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getAccount = function() {
                            try {
                                return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t) {
                                    return t[0]
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.deactivate = function() {
                            this.portis.onLogout((function() {})), this.portis.onActiveWalletChanged((function() {})), this.portis.onError((function() {}))
                        }, i.changeNetwork = function(t, e) {
                            try {
                                return "number" == typeof t ? (ye[t] || H(!1), this.portis.changeNetwork(ye[t], e), this.emitUpdate({
                                    chainId: t
                                })) : (this.portis.changeNetwork(t, e), this.emitUpdate({
                                    chainId: Number(t.chainId)
                                })), Promise.resolve()
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.close = function() {
                            try {
                                var t = this;
                                return Promise.resolve(t.portis.logout()).then((function() {
                                    t.emitDeactivate()
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, o
                    }(Pt),
                    Oe = {
                        1: "mainnet",
                        3: "ropsten",
                        4: "rinkeby",
                        5: "goerli",
                        42: "kovan",
                        100: "xdai"
                    },
                    Ce = function(t) {
                        var e, r;

                        function o(e) {
                            var n, r = e.clientId,
                                o = e.networks,
                                i = e.options,
                                a = void 0 === i ? {} : i,
                                c = o.map((function(t) {
                                    return "number" == typeof t ? t : t.chainId
                                }));
                            return c.every((function(t) {
                                return !!Oe[t]
                            })) || H(!1), (n = t.call(this, {
                                supportedChainIds: c
                            }) || this).clientId = r, n.networks = o, n.options = a, n
                        }
                        r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var i = o.prototype;
                        return i.activate = function() {
                            try {
                                var t = function() {
                                        return Promise.resolve(e.squarelink.getProvider()).then((function(t) {
                                            return Promise.resolve(t.enable().then((function(t) {
                                                return t[0]
                                            }))).then((function(e) {
                                                return {
                                                    provider: t,
                                                    account: e
                                                }
                                            }))
                                        }))
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.squarelink) return Promise.resolve(n.e(33).then(n.t.bind(null, "j8LT", 7))).then((function(t) {
                                            var n = t.default;
                                            e.squarelink = new n(e.clientId, "number" == typeof e.networks[0] ? Oe[e.networks[0]] : e.networks[0], e.options)
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getProvider = function() {
                            try {
                                return Promise.resolve(this.squarelink.getProvider())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getChainId = function() {
                            try {
                                return Promise.resolve(this.squarelink.getProvider().then((function(t) {
                                    return t.send("eth_chainId")
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getAccount = function() {
                            try {
                                return Promise.resolve(this.squarelink.getProvider().then((function(t) {
                                    return t.send("eth_accounts").then((function(t) {
                                        return t[0]
                                    }))
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.deactivate = function() {}, o
                    }(Pt);

                function Pe() {
                    return (Pe = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var Ee = function(t) {
                    var e, r;

                    function o(e) {
                        var n, r = e.url,
                            o = e.appName,
                            i = e.appLogoUrl,
                            a = e.darkMode;
                        return (n = t.call(this, {
                            supportedChainIds: [1]
                        }) || this).url = r, n.appName = o, n.appLogoUrl = i, n.darkMode = a || !1, n
                    }
                    r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                    var i = o.prototype;
                    return i.activate = function() {
                        try {
                            var t = function() {
                                    return Promise.resolve(e.provider.send("eth_requestAccounts").then((function(t) {
                                        return t[0]
                                    }))).then((function(t) {
                                        return {
                                            provider: e.provider,
                                            chainId: 1,
                                            account: t
                                        }
                                    }))
                                },
                                e = this,
                                r = function() {
                                    if (!e.walletLink) return Promise.resolve(Promise.all([n.e(15), n.e(0), n.e(34)]).then(n.bind(null, "OfP8"))).then((function(t) {
                                        var n = t.default;
                                        e.walletLink = new n(Pe({
                                            appName: e.appName,
                                            darkMode: e.darkMode
                                        }, e.appLogoUrl ? {
                                            appLogoUrl: e.appLogoUrl
                                        } : {})), e.provider = e.walletLink.makeWeb3Provider(e.url, 1)
                                    }))
                                }();
                            return Promise.resolve(r && r.then ? r.then(t) : t())
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.getProvider = function() {
                        try {
                            return Promise.resolve(this.provider)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.getChainId = function() {
                        return Promise.resolve(1)
                    }, i.getAccount = function() {
                        try {
                            return Promise.resolve(this.provider.send("eth_accounts").then((function(t) {
                                return t[0]
                            })))
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, i.deactivate = function() {}, i.close = function() {
                        try {
                            return this.provider.close(), this.emitDeactivate(), Promise.resolve()
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, o
                }(Pt);
                const Se = new Map([
                    ["1", "Mainnet"],
                    ["3", "Ropsten"],
                    ["4", "Rinkeby"],
                    ["5", "Goerli"],
                    ["100", "xDai"],
                    ["1337", "Local"]
                ]);

                function je(t) {
                    return t = String(t), Se.get(t) || "Unknown"
                }

                function Ie(t) {
                    if ("object" == typeof t && "jsonrpc" in t) {
                        if (t.error) throw new Error(t.error);
                        return t.result || null
                    }
                    return t || null
                }
                async function Ae(t, e, n) {
                    return t.sendAsync && t.selectedAddress ? new Promise((r, o) => {
                        t.sendAsync({
                            method: e,
                            params: n,
                            from: t.selectedAddress,
                            jsonrpc: "2.0",
                            id: 0
                        }, (t, e) => {
                            t ? o(t) : r(e)
                        })
                    }).then(Ie) : t.send(e, n).then(Ie)
                }

                function De(t, e) {
                    let n = -1,
                        r = !1;
                    const o = async (t, i) => {
                        const a = await t();
                        r || (i(a), n = setTimeout(o.bind(null, t, i), e))
                    };
                    return (...e) => {
                        const {
                            request: i,
                            onResult: a
                        } = t(...e);
                        return r = !1, o(i, a), () => {
                            r = !0, clearTimeout(n)
                        }
                    }
                }
                class Te extends Error {
                    constructor(t, e, ...n) {
                        super(...n), this.name = "ChainUnsupportedError", this.message = `Unsupported chain: ${je(t)}${-1===t?"":` (Chain ID: ${t})`}. Required chain: ${je(e)} (Chain ID: ${e}).`
                    }
                }
                class ke extends Error {
                    constructor(t, ...e) {
                        super(...e), this.name = "ConnectorUnsupportedError", this.message = `Unsupported connector: ${t}.`
                    }
                }
                class Ne extends Error {
                    constructor(...t) {
                        super(...t), this.name = "ConnectionRejectedError", this.message = "The activation has been rejected by the provider."
                    }
                }
                class Re extends Error {
                    constructor(...t) {
                        super(...t), this.name = "ConnectorConfigError"
                    }
                }

                function Me(t, e) {
                    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
                }

                function xe(t) {
                    return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function Le(t, e) {
                    return (Le = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function Be() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (V) {
                        return !1
                    }
                }

                function Ue(t, e, n) {
                    return (Ue = Be() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var o = new(Function.bind.apply(t, r));
                        return n && Le(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function Fe(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return (Fe = function(t) {
                        if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                        var n;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, r)
                        }

                        function r() {
                            return Ue(t, arguments, xe(this).constructor)
                        }
                        return r.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), Le(r, t)
                    })(t)
                }

                function We(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }
                var qe = function(t) {
                        function e() {
                            var e;
                            return (e = t.call(this) || this).name = e.constructor.name, e.message = "The user rejected the request.", e
                        }
                        return Me(e, t), e
                    }(Fe(Error)),
                    ze = function(t) {
                        function e(e) {
                            var n, r = e.rpc,
                                o = e.bridge,
                                i = e.qrcode,
                                a = e.pollingInterval;
                            return 1 !== Object.keys(r).length && H(!1), (n = t.call(this, {
                                supportedChainIds: Object.keys(r).map((function(t) {
                                    return Number(t)
                                }))
                            }) || this).rpc = r, n.bridge = o, n.qrcode = i, n.pollingInterval = a, n.handleChainChanged = n.handleChainChanged.bind(We(n)), n.handleAccountsChanged = n.handleAccountsChanged.bind(We(n)), n.handleDisconnect = n.handleDisconnect.bind(We(n)), n
                        }
                        Me(e, t);
                        var r = e.prototype;
                        return r.handleChainChanged = function(t) {
                            this.emitUpdate({
                                chainId: t
                            })
                        }, r.handleAccountsChanged = function(t) {
                            this.emitUpdate({
                                account: t[0]
                            })
                        }, r.handleDisconnect = function() {
                            this.emitDeactivate(), this.walletConnectProvider && (this.walletConnectProvider.stop(), this.walletConnectProvider.removeListener("chainChanged", this.handleChainChanged), this.walletConnectProvider.removeListener("accountsChanged", this.handleAccountsChanged), this.walletConnectProvider = void 0), this.emitDeactivate()
                        }, r.activate = function() {
                            try {
                                var t = function() {
                                        function t() {
                                            return Promise.resolve(e.walletConnectProvider.enable().then((function(t) {
                                                return t[0]
                                            })).catch((function(t) {
                                                if ("User closed modal" === t.message) throw new qe;
                                                throw t
                                            }))).then((function(t) {
                                                return e.walletConnectProvider.on("disconnect", e.handleDisconnect), e.walletConnectProvider.on("chainChanged", e.handleChainChanged), e.walletConnectProvider.on("accountsChanged", e.handleAccountsChanged), {
                                                    provider: e.walletConnectProvider,
                                                    account: t
                                                }
                                            }))
                                        }
                                        var n = function() {
                                            if (!e.walletConnectProvider.wc.connected) return Promise.resolve(e.walletConnectProvider.wc.createSession({
                                                chainId: Number(Object.keys(e.rpc)[0])
                                            })).then((function() {
                                                e.emit("URI_AVAILABLE", e.walletConnectProvider.wc.uri)
                                            }))
                                        }();
                                        return n && n.then ? n.then(t) : t()
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.walletConnectProvider) return Promise.resolve(Promise.all([n.e(7), n.e(12), n.e(0), n.e(29)]).then(n.bind(null, "3HCw"))).then((function(t) {
                                            var n = t.default;
                                            e.walletConnectProvider = new n({
                                                bridge: e.bridge,
                                                rpc: e.rpc,
                                                qrcode: e.qrcode,
                                                pollingInterval: e.pollingInterval
                                            })
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, r.getProvider = function() {
                            try {
                                return Promise.resolve(this.walletConnectProvider)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, r.getChainId = function() {
                            try {
                                return Promise.resolve(this.walletConnectProvider.send("eth_chainId"))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, r.getAccount = function() {
                            try {
                                return Promise.resolve(this.walletConnectProvider.send("eth_accounts").then((function(t) {
                                    return t[0]
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, r.deactivate = function() {
                            this.walletConnectProvider && (this.walletConnectProvider.stop(), this.walletConnectProvider.removeListener("disconnect", this.handleDisconnect), this.walletConnectProvider.removeListener("chainChanged", this.handleChainChanged), this.walletConnectProvider.removeListener("accountsChanged", this.handleAccountsChanged))
                        }, r.close = function() {
                            try {
                                var t;
                                return Promise.resolve(null == (t = this.walletConnectProvider) ? void 0 : t.close()).then((function() {}))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, e
                    }(Pt),
                    Ge = function(t) {
                        var e, r;

                        function o(e) {
                            var n, r = e.chainId,
                                o = e.initOptions,
                                i = void 0 === o ? {} : o,
                                a = e.constructorOptions,
                                c = void 0 === a ? {} : a,
                                s = e.loginOptions,
                                u = void 0 === s ? {} : s;
                            return (n = t.call(this, {
                                supportedChainIds: [r]
                            }) || this).chainId = r, n.initOptions = i, n.constructorOptions = c, n.loginOptions = u, n
                        }
                        r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                        var i = o.prototype;
                        return i.activate = function() {
                            try {
                                var t = function() {
                                        return Promise.resolve(e.torus.login(e.loginOptions).then((function(t) {
                                            return t[0]
                                        }))).then((function(t) {
                                            return {
                                                provider: e.torus.provider,
                                                account: t
                                            }
                                        }))
                                    },
                                    e = this,
                                    r = function() {
                                        if (!e.torus) return Promise.resolve(Promise.all([n.e(13), n.e(36)]).then(n.bind(null, "gDiM"))).then((function(t) {
                                            var n = t.default;
                                            return e.torus = new n(e.constructorOptions), Promise.resolve(e.torus.init(e.initOptions)).then((function() {}))
                                        }))
                                    }();
                                return Promise.resolve(r && r.then ? r.then(t) : t())
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getProvider = function() {
                            try {
                                return Promise.resolve(this.torus.provider)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getChainId = function() {
                            try {
                                return Promise.resolve(this.chainId)
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.getAccount = function() {
                            try {
                                return Promise.resolve(this.torus.ethereum.send("eth_accounts").then((function(t) {
                                    return t[0]
                                })))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.deactivate = function() {
                            try {
                                var t = this;
                                return Promise.resolve(t.torus.cleanUp()).then((function() {
                                    t.torus = void 0
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, i.close = function() {
                            try {
                                var t = this;
                                return Promise.resolve(t.torus.logout()).then((function() {
                                    t.emitDeactivate()
                                }))
                            } catch (t) {
                                return Promise.reject(t)
                            }
                        }, o
                    }(Pt);
                const $e = i.a.createContext(null);

                function Ve() {
                    const t = Object(o.useContext)($e);
                    if (null === t) throw new Error("useWallet() can only be used inside of <UseWalletProvider />, please declare it at a higher level.");
                    const e = function() {
                            const t = Object(o.useContext)($e),
                                [e, n] = Object(o.useState)(null),
                                r = Object(o.useRef)(!1),
                                i = Object(o.useCallback)(() => (r.current = !0, t.addBlockNumberListener(n), e), [t, e]);
                            return Object(o.useEffect)(() => {
                                if (r.current) return t.addBlockNumberListener(n), () => {
                                    t.removeBlockNumberListener(n)
                                }
                            }, [r, t]), i
                        }(),
                        {
                            wallet: n
                        } = t;
                    return Object(o.useMemo)(() => ({
                        ...n,
                        getBlockNumber: e
                    }), [e, n])
                }

                function Ke({
                    chainId: t,
                    children: e,
                    connectors: n,
                    pollBalanceInterval: r,
                    pollBlockNumberInterval: c
                }) {
                    if (null !== Object(o.useContext)($e)) throw new Error("<UseWalletProvider /> has already been declared.");
                    const [s, u] = Object(o.useState)(null), [l, f] = Object(o.useState)(null), [d, h] = Object(o.useState)(null), [p, g] = Object(o.useState)("disconnected"), _ = function(t) {
                        return Object(o.useContext)(function(t) {
                            return void 0 === t && (t = "primary"), Object.keys(wt).includes(t) || H(!1), wt[t]
                        }(t))
                    }(), v = Object(o.useRef)(0), {
                        account: m,
                        library: b
                    } = _, y = function({
                        account: t,
                        ethereum: e,
                        pollBalanceInterval: n
                    }) {
                        const [r, i] = Object(o.useState)("-1");
                        return Object(o.useEffect)(() => {
                            if (!t || !e) return;
                            let r = !1;
                            const o = De((t, e, n) => {
                                let o = "-1";
                                return {
                                    request: async () => async function(t, e) {
                                        return Ae(t, "eth_getBalance", [e, "latest"])
                                    }(e, t).then(t => t ? Ct.BigInt(t).toString() : "-1").catch(() => "-1"),
                                    onResult(t) {
                                        r || t === o || (o = t, n(t))
                                    }
                                }
                            }, n)(t, e, i);
                            return () => {
                                r = !0, o(), i("-1")
                            }
                        }, [t, e, n]), r
                    }({
                        account: m,
                        ethereum: b,
                        pollBalanceInterval: r
                    }), {
                        addBlockNumberListener: w,
                        removeBlockNumberListener: O
                    } = function({
                        ethereum: t,
                        pollBlockNumberInterval: e
                    }) {
                        const n = Object(o.useRef)(null),
                            r = Object(o.useRef)(new Set),
                            i = Object(o.useCallback)(t => {
                                r.current.has(t) || (t(n.current), r.current.add(t))
                            }, []),
                            a = Object(o.useCallback)(t => {
                                r.current.delete(t)
                            }, []),
                            c = Object(o.useCallback)(t => {
                                n.current !== t && (n.current = t, r.current.forEach(e => e(t)))
                            }, []);
                        return Object(o.useEffect)(() => {
                            if (!t) return void c(null);
                            let n = !1;
                            const r = De(() => ({
                                request: () => async function(t) {
                                    return Ae(t, "eth_blockNumber", [])
                                }(t),
                                onResult: t => {
                                    n || c(null === t ? null : Ct.BigInt(t).toString())
                                }
                            }), e)();
                            return () => {
                                n = !0, r()
                            }
                        }, [t, e, c]), {
                            addBlockNumberListener: i,
                            removeBlockNumberListener: a
                        }
                    }({
                        ethereum: b,
                        pollBlockNumberInterval: c
                    }), C = Object(o.useMemo)(() => function(t, e = {}) {
                        const [n, r] = Object.entries(e).reduce(([t, e], [n, r]) => "function" == typeof r.web3ReactConnector ? [{
                            ...t,
                            [n]: r
                        }, e] : [t, [...e, [n, r]]], [{},
                            []
                        ]), o = {
                            injected: {
                                web3ReactConnector: ({
                                    chainId: t
                                }) => new me({
                                    supportedChainIds: [t]
                                }),
                                handleActivationError(t) {
                                    if (t instanceof ve) return new Ne
                                }
                            },
                            frame: {
                                web3ReactConnector: ({
                                    chainId: t
                                }) => new ie({
                                    supportedChainIds: [t]
                                }),
                                handleActivationError: t => t instanceof oe ? new Ne : t.message.startsWith("JSON.parse") ? new Error("There seems to be an issue when trying to connect to Frame.") : void 0
                            },
                            fortmatic: {
                                web3ReactConnector({
                                    chainId: t,
                                    apiKey: e
                                }) {
                                    if (!e) throw new Re("The Fortmatic connector requires apiKey to be set.");
                                    return new At({
                                        apiKey: e,
                                        chainId: t
                                    })
                                }
                            },
                            portis: {
                                web3ReactConnector({
                                    chainId: t,
                                    dAppId: e
                                }) {
                                    if (!e) throw new Re("The Portis connector requires dAppId to be set.");
                                    return new we({
                                        dAppId: e,
                                        networks: [t]
                                    })
                                }
                            },
                            provided: {
                                web3ReactConnector: ({
                                    chainId: t,
                                    provider: e
                                }) => new a.a({
                                    provider: e,
                                    supportedChainIds: [t]
                                }),
                                handleActivationError(t) {
                                    if (t instanceof a.b) return new Ne
                                }
                            },
                            authereum: {
                                web3ReactConnector: ({
                                    chainId: t
                                }) => new jt({
                                    chainId: t
                                })
                            },
                            squarelink: {
                                web3ReactConnector: ({
                                    chainId: t,
                                    clientId: e,
                                    options: n
                                }) => new Ce({
                                    clientId: e,
                                    networks: [t],
                                    options: n
                                })
                            },
                            torus: {
                                web3ReactConnector: ({
                                    chainId: t,
                                    initOptions: e,
                                    constructorOptions: n
                                }) => new Ge({
                                    chainId: t,
                                    constructorOptions: n,
                                    initOptions: e
                                })
                            },
                            walletconnect: {
                                web3ReactConnector({
                                    chainId: t,
                                    rpcUrl: e,
                                    bridge: n,
                                    pollingInterval: r
                                }) {
                                    if (!e) throw new Re("The WalletConnect connector requires rpcUrl to be set.");
                                    if (!/^https?:\/\//.test(e)) throw new Re("The WalletConnect connector requires rpcUrl to be an HTTP URL.");
                                    return new ze({
                                        bridge: n,
                                        pollingInterval: r,
                                        qrcode: !0,
                                        rpc: {
                                            [t]: e
                                        }
                                    })
                                },
                                handleActivationError(t) {
                                    if (t instanceof qe) return new Ne
                                }
                            },
                            walletlink: {
                                web3ReactConnector({
                                    chainId: t,
                                    url: e,
                                    appName: n,
                                    appLogoUrl: r
                                }) {
                                    if (1 !== t) throw new Re("The WalletLink connector requires chainId to be 1.");
                                    if (!/^https?:\/\//.test(e)) throw new Re("The WalletLink connector requires url to be an HTTP URL.");
                                    return new Ee({
                                        url: e,
                                        appName: n,
                                        appLogoUrl: r
                                    })
                                }
                            },
                            ...n
                        };
                        for (const [i, a] of r) o[i] && (o[i].config = a);
                        return o
                    }(0, n), [t, n]), P = Object(o.useCallback)(() => {
                        _.active && _.deactivate(), u(null), f(null), g("disconnected")
                    }, [_]), E = Object(o.useCallback)(async (e = "injected") => {
                        const n = ++v.current;
                        if (P(), n !== v.current) return;
                        if (!C[e]) return g("error"), void f(new ke(e));
                        g("connecting");
                        const r = C[e],
                            o = r && r.web3ReactConnector && r.web3ReactConnector({
                                chainId: t,
                                ...r.config || {}
                            });
                        if (!o) return g("error"), void f(new ke(e));
                        try {
                            u(e), await _.activate(o, null, !0), g("connected")
                        } catch (e) {
                            if (n !== v.current) return;
                            if (u(null), g("error"), e instanceof bt) return void f(new Te(-1, t));
                            if (r.handleActivationError) {
                                const t = r.handleActivationError(e);
                                if (t) return void f(t)
                            }
                            f(e)
                        }
                    }, [t, C, P, _]);
                    Object(o.useEffect)(() => {
                        if (!m || !b) return;
                        let t = !1;
                        return h(null), async function(t, e) {
                            try {
                                return "0x" !== await Ae(t, "eth_getCode", [e])
                            } catch (t) {
                                return !1
                            }
                        }(b, m).then(e => {
                            t || (g("connected"), h(e ? "contract" : "normal"))
                        }), () => {
                            t = !0, g("disconnected"), h(null)
                        }
                    }, [m, b]);
                    const S = Object(o.useMemo)(() => ({
                        _web3ReactContext: _,
                        account: m || null,
                        balance: y,
                        chainId: t,
                        connect: E,
                        connector: s,
                        connectors: C,
                        error: l,
                        ethereum: b,
                        networkName: je(t),
                        reset: P,
                        status: p,
                        type: d
                    }), [m, y, t, E, s, C, l, b, d, P, p, _]);
                    return i.a.createElement($e.Provider, {
                        value: {
                            addBlockNumberListener: w,
                            pollBalanceInterval: r,
                            pollBlockNumberInterval: c,
                            removeBlockNumberListener: O,
                            wallet: S
                        }
                    }, e)
                }

                function He(t) {
                    return i.a.createElement(Ot, {
                        getLibrary: t => t
                    }, i.a.createElement(Ke, t))
                }
                Ke.propTypes = {
                    chainId: K.number,
                    children: K.node,
                    connectors: K.objectOf(K.object),
                    pollBalanceInterval: K.number,
                    pollBlockNumberInterval: K.number
                }, Ke.defaultProps = {
                    chainId: 1,
                    connectors: {},
                    pollBalanceInterval: 2e3,
                    pollBlockNumberInterval: 5e3
                }, He.propTypes = Ke.propTypes, He.defaultProps = Ke.defaultProps
            }).call(this, n("yLpj"), n("8oxB"))
        },
        Xqnb: function(t, e, n) {
            "use strict";
            n.d(e, "g", (function() {
                return s
            })), n.d(e, "a", (function() {
                return u
            })), n.d(e, "f", (function() {
                return l
            })), n.d(e, "b", (function() {
                return f
            })), n.d(e, "d", (function() {
                return d
            })), n.d(e, "e", (function() {
                return h
            })), n.d(e, "c", (function() {
                return p
            }));
            var r, o = n("rePB");

            function i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) {
                        Object(o.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }! function(t) {
                t.SetNetwork = "Wallet/SET_NETWORK", t.SetShowCheckInstallModal = "Wallet/SetShowCheckInstallModal", t.SetAccount = "Wallet/SET_ACCOUNT", t.SetIsShowConnectModal = "Wallet/SET_IS_SHOW_CONNECT_MODAL", t.SetWalletType = "Wallet/SET_WALLET_TYPE", t.SetSelectedAddress = "Wallet/SET_SELECTED_ADDRESS", t.SetFromNameIcon = "Wallet/SET_FROM_NAME_ICON", t.SetToNameIcon = "Wallet/SET_TO_NAME_ICON"
            }(r || (r = {}));
            var c = {
                    account: {},
                    selectedAddress: "",
                    chainId: "",
                    network: "",
                    networkName: "",
                    checkWalletInstalled: !0,
                    isShowConnectModal: !1,
                    walletType: ""
                },
                s = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                        e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case r.SetNetwork:
                            var n = "";
                            switch (e.data.network) {
                                case "bbc-testnet":
                                    n = "Binance Chain testnet";
                                    break;
                                case "bbc-mainnet":
                                    n = "Binance Chain mainnet";
                                    break;
                                case "bsc-testnet":
                                    n = "Binance Smart Chain testnet";
                                    break;
                                case "bsc-mainnet":
                                    n = "Binance Smart Chain mainnet";
                                    break;
                                case "eth-mainnet":
                                    n = "Ethereum Network"
                            }
                            return a(a(a({}, t), e.data), {}, {
                                networkName: n
                            });
                        case r.SetSelectedAddress:
                        case r.SetFromNameIcon:
                        case r.SetToNameIcon:
                        case r.SetIsShowConnectModal:
                        case r.SetShowCheckInstallModal:
                        case r.SetAccount:
                        case r.SetWalletType:
                            return a(a({}, t), e.data);
                        default:
                            return t
                    }
                },
                u = function(t) {
                    return {
                        type: r.SetAccount,
                        data: t
                    }
                },
                l = function(t) {
                    return {
                        type: r.SetWalletType,
                        data: t
                    }
                },
                f = function(t) {
                    return {
                        type: r.SetIsShowConnectModal,
                        data: t
                    }
                },
                d = function(t) {
                    return {
                        type: r.SetNetwork,
                        data: t
                    }
                },
                h = function(t) {
                    return {
                        type: r.SetSelectedAddress,
                        data: t
                    }
                },
                p = function(t) {
                    return {
                        type: r.SetShowCheckInstallModal,
                        data: t
                    }
                }
        },
        bCCX: function(t, e, n) {
            "use strict";
            (function(t, r) {
                var o, i = n("SLVX");
                o = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : r;
                var a = Object(i.a)(o);
                e.a = a
            }).call(this, n("yLpj"), n("3UD+")(t))
        },
        dDsW: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r = n("q1tI"),
                o = n("2OET"),
                i = n("N3fz");

            function a() {
                var t = r.useContext(o.a);
                return Object(i.c)(t), t
            }
        },
        e0ae: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return d
                }));
                var r = function() {
                        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                        var r = Array(t),
                            o = 0;
                        for (e = 0; e < n; e++)
                            for (var i = arguments[e], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                        return r
                    },
                    o = function(t, e, n) {
                        this.name = t, this.version = e, this.os = n, this.type = "browser"
                    },
                    i = function(e) {
                        this.version = e, this.type = "node", this.name = "node", this.os = t.platform
                    },
                    a = function(t, e, n, r) {
                        this.name = t, this.version = e, this.os = n, this.bot = r, this.type = "bot-device"
                    },
                    c = function() {
                        this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                    },
                    s = function() {
                        this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                    },
                    u = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                    l = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /Edg\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FBAV\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ],
                    f = [
                        ["iOS", /iP(hone|od|ad)/],
                        ["Android OS", /Android/],
                        ["BlackBerry OS", /BlackBerry|BB10/],
                        ["Windows Mobile", /IEMobile/],
                        ["Amazon OS", /Kindle/],
                        ["Windows 3.11", /Win16/],
                        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                        ["Windows 98", /(Windows 98)|(Win98)/],
                        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                        ["Windows Server 2003", /(Windows NT 5.2)/],
                        ["Windows Vista", /(Windows NT 6.0)/],
                        ["Windows 7", /(Windows NT 6.1)/],
                        ["Windows 8", /(Windows NT 6.2)/],
                        ["Windows 8.1", /(Windows NT 6.3)/],
                        ["Windows 10", /(Windows NT 10.0)/],
                        ["Windows ME", /Windows ME/],
                        ["Open BSD", /OpenBSD/],
                        ["Sun OS", /SunOS/],
                        ["Chrome OS", /CrOS/],
                        ["Linux", /(Linux)|(X11)/],
                        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                        ["QNX", /QNX/],
                        ["BeOS", /BeOS/],
                        ["OS/2", /OS\/2/]
                    ];

                function d(e) {
                    return e ? p(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new s : "undefined" !== typeof navigator ? p(navigator.userAgent) : "undefined" !== typeof t && t.version ? new i(t.version.slice(1)) : null
                }

                function h(t) {
                    return "" !== t && l.reduce((function(e, n) {
                        var r = n[0],
                            o = n[1];
                        if (e) return e;
                        var i = o.exec(t);
                        return !!i && [r, i]
                    }), !1)
                }

                function p(t) {
                    var e = h(t);
                    if (!e) return null;
                    var n = e[0],
                        i = e[1];
                    if ("searchbot" === n) return new c;
                    var s = i[1] && i[1].split(/[._]/).slice(0, 3);
                    s ? s.length < 3 && (s = r(s, function(t) {
                        for (var e = [], n = 0; n < t; n++) e.push("0");
                        return e
                    }(3 - s.length))) : s = [];
                    var l = s.join("."),
                        d = function(t) {
                            for (var e = 0, n = f.length; e < n; e++) {
                                var r = f[e],
                                    o = r[0];
                                if (r[1].exec(t)) return o
                            }
                            return null
                        }(t),
                        p = u.exec(t);
                    return p && p[1] ? new a(n, l, d, p[1]) : new o(n, l, d)
                }
            }).call(this, n("8oxB"))
        },
        gOym: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            })), n.d(e, "h", (function() {
                return l
            })), n.d(e, "j", (function() {
                return f
            })), n.d(e, "i", (function() {
                return d
            })), n.d(e, "o", (function() {
                return h
            })), n.d(e, "k", (function() {
                return p
            })), n.d(e, "b", (function() {
                return g
            })), n.d(e, "n", (function() {
                return _
            })), n.d(e, "l", (function() {
                return v
            })), n.d(e, "f", (function() {
                return m
            })), n.d(e, "d", (function() {
                return b
            })), n.d(e, "c", (function() {
                return y
            })), n.d(e, "m", (function() {
                return w
            })), n.d(e, "g", (function() {
                return O
            })), n.d(e, "e", (function() {
                return C
            })), n.d(e, "p", (function() {
                return P
            }));
            var r, o, i, a = n("rePB");

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }! function(t) {
                t.WAITINGFORDEPOSIT = "WaitingForDeposit", t.DEPOSITINPROGRESS = "DepositInProgress", t.WITHDRAWINPROGRESS = "WithdrawInProgress", t.COMPLETED = "Completed", t.FAILED = "Failed", t.CANCELLED = "Cancelled"
            }(r || (r = {})),
            function(t) {
                t.REFUNDING = "Refunding", t.REFUNDED = "Refunded", t.REFUNDFAILED = "RefundFailed", t.REFUNDREJECTED = "RefundRejected"
            }(o || (o = {})),
            function(t) {
                t.AddDepositModal = "Swap/ADD_DEPOSIT_MODAL", t.SetDepositData = "Swap/SET_DEPOSIT_DATA", t.SetFloatData = "Swap/SET_FLOAT_DATA", t.UpdateFloatData = "Swap/UPDATE_FLOAT_DATA", t.ToggleDepositModal = "Swap/TOGGLE_DEPOSIT_MODAL", t.RemoveDepositModal = "Swap/REMOVE_DEPOSIT_Modal", t.RemoveAllDepositModal = "Swap/REMOVE_ALL_DEPOSIT_Modal", t.AddFloat = "Swap/ADD_FLOAT", t.ToggleFloat = "Swap/TOGGLE_FLOAT", t.RemoveFloat = "Swap/REMOVE_FLOST", t.RemoveAllFloat = "Swap/REMOVE_ALL_FLOST", t.UpdateDepositMoal = "Swap/UPDATE_DEPOSIT_MODAL", t.SetSwapTokens = "Swap/SET_SWAP_TOKENS", t.SetPegOutTokens = "Swap/SET_PEGOUT_TOKENS", t.SetSentTx = "Swap/SET_SENT_TRANSACTION"
            }(i || (i = {}));
            var u = {
                    showDepositModal: !1,
                    modalActiveIndex: -1,
                    depositModalData: [],
                    floatData: [],
                    swapTokens: [],
                    pegOutTokens: []
                },
                l = function(t) {
                    return {
                        type: i.SetDepositData,
                        data: t
                    }
                },
                f = function(t) {
                    return {
                        type: i.SetSentTx,
                        data: t
                    }
                },
                d = function(t) {
                    return {
                        type: i.SetFloatData,
                        data: t
                    }
                },
                h = function(t) {
                    return {
                        type: i.UpdateFloatData,
                        data: t
                    }
                },
                p = function(t) {
                    return {
                        type: i.SetSwapTokens,
                        data: t
                    }
                },
                g = function(t) {
                    return {
                        type: i.AddDepositModal,
                        data: t
                    }
                },
                _ = function(t) {
                    return {
                        type: i.UpdateDepositMoal,
                        data: t
                    }
                },
                v = function(t) {
                    return {
                        type: i.ToggleDepositModal,
                        data: t
                    }
                },
                m = function(t) {
                    return {
                        type: i.RemoveDepositModal,
                        data: t
                    }
                },
                b = function() {
                    return {
                        type: i.RemoveAllDepositModal
                    }
                },
                y = function(t) {
                    return {
                        type: i.AddFloat,
                        data: t
                    }
                },
                w = function(t) {
                    return {
                        type: i.ToggleFloat,
                        data: t
                    }
                },
                O = function(t) {
                    return {
                        type: i.RemoveFloat,
                        data: t
                    }
                },
                C = function() {
                    return {
                        type: i.RemoveAllFloat
                    }
                },
                P = function() {
                    var t, e, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                        case i.SetSwapTokens:
                            return s(s({}, o), {}, {
                                swapTokens: a.data
                            });
                        case i.SetPegOutTokens:
                            return s(s({}, o), {}, {
                                pegOutTokens: a.data
                            });
                        case i.SetFloatData:
                            return s(s({}, o), {}, {
                                floatData: a.data
                            });
                        case i.SetDepositData:
                            return s(s({}, o), {}, {
                                depositModalData: a.data
                            });
                        case i.AddDepositModal:
                            return s(s({}, o), {}, {
                                depositModalData: o.depositModalData.concat(a.data)
                            });
                        case i.UpdateDepositMoal:
                            for (var c = 0; c < o.depositModalData.length; c++) {
                                var l, f;
                                if (o.depositModalData[c].data.id === (null === (l = a.data) || void 0 === l || null === (f = l.data) || void 0 === f ? void 0 : f.id)) {
                                    var d, h, p;
                                    if (o.depositModalData[c].data.status === (null === (d = a.data) || void 0 === d || null === (h = d.data) || void 0 === h ? void 0 : h.status)) return o;
                                    o.depositModalData[c].data = null === (p = a.data) || void 0 === p ? void 0 : p.data;
                                    break
                                }
                            }
                            return s({}, o);
                        case i.ToggleDepositModal:
                            return o.depositModalData[a.data.index].show = a.data.show, s({}, o);
                        case i.SetSentTx:
                            for (var g = 0; g < o.depositModalData.length; g++)
                                if (o.depositModalData[g].data.id === a.data.swapId) {
                                    o.depositModalData[g].hasSentTx = a.data.hasSentTx;
                                    break
                                } return s({}, o);
                        case i.RemoveDepositModal:
                            return null === o || void 0 === o || null === (t = o.depositModalData) || void 0 === t || t.splice(a.data.index, 1), s({}, o);
                        case i.RemoveAllDepositModal:
                            return null === o || void 0 === o || null === (e = o.depositModalData) || void 0 === e || e.splice(0, o.depositModalData.length), s({}, o);
                        case i.AddFloat:
                            var _;
                            if (a.data.index < o.floatData.length) o.floatData[a.data.index].show = !0, o.floatData[a.data.index].status = a.data.status;
                            else o.floatData = null === o || void 0 === o || null === (_ = o.floatData) || void 0 === _ ? void 0 : _.concat(a.data);
                            return s({}, o);
                        case i.ToggleFloat:
                            return o.floatData[a.data.index].show = a.data.show, s({}, o);
                        case i.UpdateFloatData:
                            for (var v = 0, m = o.floatData.length; v < m; v++) {
                                var b = o.floatData.find((function(t) {
                                    return t.swapId === a.data.swapId
                                }));
                                if (b) {
                                    b.status = a.data.status;
                                    break
                                }
                            }
                            return s({}, o);
                        case i.RemoveFloat:
                            return null === o || void 0 === o || null === (n = o.floatData) || void 0 === n || n.splice(a.data.index, 1), s({}, o);
                        case i.RemoveAllFloat:
                            return null === o || void 0 === o || null === (r = o.floatData) || void 0 === r || r.splice(0, o.floatData.length), s({}, o);
                        default:
                            return o
                    }
                }
        },
        p9jX: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "k", (function() {
                    return b
                })), n.d(e, "h", (function() {
                    return y
                })), n.d(e, "i", (function() {
                    return w
                })), n.d(e, "c", (function() {
                    return O
                })), n.d(e, "a", (function() {
                    return C
                })), n.d(e, "m", (function() {
                    return P
                })), n.d(e, "j", (function() {
                    return E
                })), n.d(e, "b", (function() {
                    return S
                })), n.d(e, "f", (function() {
                    return j
                })), n.d(e, "d", (function() {
                    return I
                })), n.d(e, "l", (function() {
                    return A
                })), n.d(e, "n", (function() {
                    return D
                })), n.d(e, "e", (function() {
                    return T
                })), n.d(e, "g", (function() {
                    return k
                }));
                var r = n("PENG"),
                    o = n.n(r),
                    i = n("ufzv"),
                    a = n.n(i),
                    c = n("yLiY"),
                    s = n.n(c)()(),
                    u = s.publicRuntimeConfig,
                    l = u.PUBLIC_BACKEND_API_URL,
                    f = u.NETWORK,
                    d = (u.SITE, u.COMMIT_HASH),
                    h = u.NODE_ENV,
                    p = u.LOG_LEVEL,
                    g = (u.WEB_WALLET_URL, u.ASSET_PREFIX),
                    _ = u.MULTI_CHAIN_API,
                    v = u.SWAP_BACKEND_API,
                    m = u.GA_TRACING_ID,
                    b = (s.serverRuntimeConfig.INTERNAL_BACKEND_API, ("mainnet" === f ? f : null) || "testnet"),
                    y = "production" === h,
                    w = p || void 0,
                    O = d || "undefined-commit-hash",
                    C = g ? "".concat(g, "/static") : "",
                    P = v || "https://api.binance.org/bridge",
                    E = _ || "https://wallet.binance.org/",
                    S = "https://bsc-dataseed.binance.org",
                    j = "https://mainnet.infura.io/v3/d4d164391311401b9ac5e900b0d9f7df",
                    I = m || "UA-185495023-1",
                    A = function() {
                        try {
                            return t.pid
                        } catch (e) {
                            return
                        }
                    }(),
                    D = {
                        rpc: "https://bsc-dataseed.binance.org/",
                        explorer: "https://bscscan.com/"
                    },
                    T = function() {
                        try {
                            return o.a.hostname
                        } catch (t) {
                            return
                        }
                    }(),
                    k = function() {
                        try {
                            return a.a.address()
                        } catch (t) {
                            return
                        }
                    }()
            }).call(this, n("8oxB"))
        },
        rePB: function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        thIF: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            })), n.d(e, "b", (function() {
                return v
            }));
            var r, o = n("+qE3");
            ! function(t) {
                t.Update = "Web3ReactUpdate", t.Error = "Web3ReactError", t.Deactivate = "Web3ReactDeactivate"
            }(r || (r = {}));
            var i = function(t) {
                var e, n;

                function o(e) {
                    var n, r = (void 0 === e ? {} : e).supportedChainIds;
                    return (n = t.call(this) || this).supportedChainIds = r, n
                }
                n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
                var i = o.prototype;
                return i.emitUpdate = function(t) {
                    this.emit(r.Update, t)
                }, i.emitError = function(t) {
                    this.emit(r.Error, t)
                }, i.emitDeactivate = function() {
                    this.emit(r.Deactivate)
                }, o
            }(o.EventEmitter);

            function a() {
                return (a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function c(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function l() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function f(t, e, n) {
                return (f = l() ? Reflect.construct : function(t, e, n) {
                    var r = [null];
                    r.push.apply(r, e);
                    var o = new(Function.bind.apply(t, r));
                    return n && u(o, n.prototype), o
                }).apply(null, arguments)
            }

            function d(t) {
                var e = "function" === typeof Map ? new Map : void 0;
                return (d = function(t) {
                    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
                    var n;
                    if ("function" !== typeof t) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r)
                    }

                    function r() {
                        return f(t, arguments, s(this).constructor)
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), u(r, t)
                })(t)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

            function p(t, e) {
                try {
                    var n = t()
                } catch (r) {
                    return e(r)
                }
                return n && n.then ? n.then(void 0, e) : n
            }

            function g(t) {
                return t.hasOwnProperty("result") ? t.result : t
            }
            var _ = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).name = e.constructor.name, e.message = "No Ethereum provider was passed to the constructor or found on window.ethereum.", e
                    }
                    return c(e, t), e
                }(d(Error)),
                v = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).name = e.constructor.name, e.message = "The user rejected the request.", e
                    }
                    return c(e, t), e
                }(d(Error)),
                m = function(t) {
                    function e(e) {
                        var n, r = e.provider,
                            o = void 0 === r ? window.ethereum : r,
                            i = e.supportedChainIds;
                        return (n = t.call(this, {
                            supportedChainIds: i
                        }) || this).provider = o, n.handleNetworkChanged = n.handleNetworkChanged.bind(h(n)), n.handleChainChanged = n.handleChainChanged.bind(h(n)), n.handleAccountsChanged = n.handleAccountsChanged.bind(h(n)), n.handleClose = n.handleClose.bind(h(n)), n
                    }
                    c(e, t);
                    var n = e.prototype;
                    return n.handleChainChanged = function(t) {
                        this.emitUpdate({
                            chainId: t,
                            provider: this.provider
                        })
                    }, n.handleAccountsChanged = function(t) {
                        0 === t.length ? this.emitDeactivate() : this.emitUpdate({
                            account: t[0]
                        })
                    }, n.handleClose = function(t, e) {
                        this.emitDeactivate()
                    }, n.handleNetworkChanged = function(t) {
                        this.emitUpdate({
                            chainId: t,
                            provider: this.provider
                        })
                    }, n.activate = function() {
                        try {
                            var t, e = function(e) {
                                    if (n) return e;

                                    function o() {
                                        return a({
                                            provider: r.provider
                                        }, t ? {
                                            account: t
                                        } : {})
                                    }
                                    var i = function() {
                                        if (!t) return Promise.resolve(r.provider.enable().then((function(t) {
                                            return t && g(t)[0]
                                        }))).then((function(e) {
                                            t = e
                                        }))
                                    }();
                                    return i && i.then ? i.then(o) : o()
                                },
                                n = !1,
                                r = this;
                            if (!r.provider) throw new _;
                            r.provider.on && (r.provider.on("chainChanged", r.handleChainChanged), r.provider.on("accountsChanged", r.handleAccountsChanged), r.provider.on("close", r.handleClose), r.provider.on("networkChanged", r.handleNetworkChanged)), r.provider.isMetaMask && (r.provider.autoRefreshOnNetworkChange = !1);
                            var o = p((function() {
                                return Promise.resolve(r.provider.send("eth_requestAccounts").then((function(t) {
                                    return g(t)[0]
                                }))).then((function(e) {
                                    t = e
                                }))
                            }), (function(t) {
                                if (4001 === t.code) throw new v
                            }));
                            return Promise.resolve(o && o.then ? o.then(e) : e(o))
                        } catch (i) {
                            return Promise.reject(i)
                        }
                    }, n.getProvider = function() {
                        try {
                            return Promise.resolve(this.provider)
                        } catch (t) {
                            return Promise.reject(t)
                        }
                    }, n.getChainId = function() {
                        try {
                            var t, e = function() {
                                    function e() {
                                        if (!t) try {
                                            t = g(n.provider.send({
                                                method: "net_version"
                                            }))
                                        } catch (e) {}
                                        return t || (t = n.provider.isDapper ? g(n.provider.cachedResults.net_version) : n.provider.chainId || n.provider.networkVersion || n.provider._chainId), t
                                    }
                                    var r = function() {
                                        if (!t) {
                                            var e = p((function() {
                                                return Promise.resolve(n.provider.send("net_version").then(g)).then((function(e) {
                                                    t = e
                                                }))
                                            }), (function() {}));
                                            if (e && e.then) return e.then((function() {}))
                                        }
                                    }();
                                    return r && r.then ? r.then(e) : e()
                                },
                                n = this;
                            if (!n.provider) throw new _;
                            var r = p((function() {
                                return Promise.resolve(n.provider.send("eth_chainId").then(g)).then((function(e) {
                                    t = e
                                }))
                            }), (function() {}));
                            return Promise.resolve(r && r.then ? r.then(e) : e())
                        } catch (o) {
                            return Promise.reject(o)
                        }
                    }, n.getAccount = function() {
                        try {
                            var t, e = function() {
                                    function e() {
                                        return t || (t = g(n.provider.send({
                                            method: "eth_accounts"
                                        }))[0]), t
                                    }
                                    var r = function() {
                                        if (!t) {
                                            var e = p((function() {
                                                return Promise.resolve(n.provider.enable().then((function(t) {
                                                    return g(t)[0]
                                                }))).then((function(e) {
                                                    t = e
                                                }))
                                            }), (function() {}));
                                            if (e && e.then) return e.then((function() {}))
                                        }
                                    }();
                                    return r && r.then ? r.then(e) : e()
                                },
                                n = this;
                            if (!n.provider) throw new _;
                            var r = p((function() {
                                return Promise.resolve(n.provider.send("eth_accounts").then((function(t) {
                                    return g(t)[0]
                                }))).then((function(e) {
                                    t = e
                                }))
                            }), (function() {}));
                            return Promise.resolve(r && r.then ? r.then(e) : e())
                        } catch (o) {
                            return Promise.reject(o)
                        }
                    }, n.deactivate = function() {
                        this.provider && this.provider.removeListener && (this.provider.removeListener("chainChanged", this.handleChainChanged), this.provider.removeListener("accountsChanged", this.handleAccountsChanged), this.provider.removeListener("close", this.handleClose), this.provider.removeListener("networkChanged", this.handleNetworkChanged))
                    }, n.isAuthorized = function() {
                        try {
                            var t = this;
                            return t.provider ? Promise.resolve(p((function() {
                                return Promise.resolve(t.provider.send("eth_accounts").then((function(t) {
                                    return g(t).length > 0
                                })))
                            }), (function() {
                                return !1
                            }))) : Promise.resolve(!1)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }, e
                }(i)
        },
        ufzv: function(t, e, n) {
            "use strict";
            var r = e,
                o = n("HDXh").Buffer,
                i = n("PENG");
            r.toBuffer = function(t, e, n) {
                var r;
                if (n = ~~n, this.isV4Format(t)) r = e || new o(n + 4), t.split(/\./g).map((function(t) {
                    r[n++] = 255 & parseInt(t, 10)
                }));
                else if (this.isV6Format(t)) {
                    var i, a = t.split(":", 8);
                    for (i = 0; i < a.length; i++) {
                        var c;
                        this.isV4Format(a[i]) && (c = this.toBuffer(a[i]), a[i] = c.slice(0, 2).toString("hex")), c && ++i < 8 && a.splice(i, 0, c.slice(2, 4).toString("hex"))
                    }
                    if ("" === a[0])
                        for (; a.length < 8;) a.unshift("0");
                    else if ("" === a[a.length - 1])
                        for (; a.length < 8;) a.push("0");
                    else if (a.length < 8) {
                        for (i = 0; i < a.length && "" !== a[i]; i++);
                        var s = [i, 1];
                        for (i = 9 - a.length; i > 0; i--) s.push("0");
                        a.splice.apply(a, s)
                    }
                    for (r = e || new o(n + 16), i = 0; i < a.length; i++) {
                        var u = parseInt(a[i], 16);
                        r[n++] = u >> 8 & 255, r[n++] = 255 & u
                    }
                }
                if (!r) throw Error("Invalid ip address: " + t);
                return r
            }, r.toString = function(t, e, n) {
                e = ~~e;
                var r = [];
                if (4 === (n = n || t.length - e)) {
                    for (var o = 0; o < n; o++) r.push(t[e + o]);
                    r = r.join(".")
                } else if (16 === n) {
                    for (o = 0; o < n; o += 2) r.push(t.readUInt16BE(e + o).toString(16));
                    r = (r = (r = r.join(":")).replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")).replace(/:{3,4}/, "::")
                }
                return r
            };
            var a = /^(\d{1,3}\.){3,3}\d{1,3}$/,
                c = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

            function s(t) {
                return t ? t.toLowerCase() : "ipv4"
            }
            r.isV4Format = function(t) {
                return a.test(t)
            }, r.isV6Format = function(t) {
                return c.test(t)
            }, r.fromPrefixLen = function(t, e) {
                var n = 4;
                "ipv6" === (e = t > 32 ? "ipv6" : s(e)) && (n = 16);
                for (var i = new o(n), a = 0, c = i.length; a < c; ++a) {
                    var u = 8;
                    t < 8 && (u = t), t -= u, i[a] = 255 & ~(255 >> u)
                }
                return r.toString(i)
            }, r.mask = function(t, e) {
                t = r.toBuffer(t), e = r.toBuffer(e);
                var n = new o(Math.max(t.length, e.length)),
                    i = 0;
                if (t.length === e.length)
                    for (i = 0; i < t.length; i++) n[i] = t[i] & e[i];
                else if (4 === e.length)
                    for (i = 0; i < e.length; i++) n[i] = t[t.length - 4 + i] & e[i];
                else {
                    for (i = 0; i < n.length - 6; i++) n[i] = 0;
                    for (n[10] = 255, n[11] = 255, i = 0; i < t.length; i++) n[i + 12] = t[i] & e[i + 12];
                    i += 12
                }
                for (; i < n.length; i++) n[i] = 0;
                return r.toString(n)
            }, r.cidr = function(t) {
                var e = t.split("/"),
                    n = e[0];
                if (2 !== e.length) throw new Error("invalid CIDR subnet: " + n);
                var o = r.fromPrefixLen(parseInt(e[1], 10));
                return r.mask(n, o)
            }, r.subnet = function(t, e) {
                for (var n = r.toLong(r.mask(t, e)), o = r.toBuffer(e), i = 0, a = 0; a < o.length; a++)
                    if (255 === o[a]) i += 8;
                    else
                        for (var c = 255 & o[a]; c;) c = c << 1 & 255, i++;
                var s = Math.pow(2, 32 - i);
                return {
                    networkAddress: r.fromLong(n),
                    firstAddress: s <= 2 ? r.fromLong(n) : r.fromLong(n + 1),
                    lastAddress: s <= 2 ? r.fromLong(n + s - 1) : r.fromLong(n + s - 2),
                    broadcastAddress: r.fromLong(n + s - 1),
                    subnetMask: e,
                    subnetMaskLength: i,
                    numHosts: s <= 2 ? s : s - 2,
                    length: s,
                    contains: function(t) {
                        return n === r.toLong(r.mask(t, e))
                    }
                }
            }, r.cidrSubnet = function(t) {
                var e = t.split("/"),
                    n = e[0];
                if (2 !== e.length) throw new Error("invalid CIDR subnet: " + n);
                var o = r.fromPrefixLen(parseInt(e[1], 10));
                return r.subnet(n, o)
            }, r.not = function(t) {
                for (var e = r.toBuffer(t), n = 0; n < e.length; n++) e[n] = 255 ^ e[n];
                return r.toString(e)
            }, r.or = function(t, e) {
                if (t = r.toBuffer(t), e = r.toBuffer(e), t.length === e.length) {
                    for (var n = 0; n < t.length; ++n) t[n] |= e[n];
                    return r.toString(t)
                }
                var o = t,
                    i = e;
                e.length > t.length && (o = e, i = t);
                var a = o.length - i.length;
                for (n = a; n < o.length; ++n) o[n] |= i[n - a];
                return r.toString(o)
            }, r.isEqual = function(t, e) {
                if (t = r.toBuffer(t), e = r.toBuffer(e), t.length === e.length) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n] !== e[n]) return !1;
                    return !0
                }
                if (4 === e.length) {
                    var o = e;
                    e = t, t = o
                }
                for (n = 0; n < 10; n++)
                    if (0 !== e[n]) return !1;
                var i = e.readUInt16BE(10);
                if (0 !== i && 65535 !== i) return !1;
                for (n = 0; n < 4; n++)
                    if (t[n] !== e[n + 12]) return !1;
                return !0
            }, r.isPrivate = function(t) {
                return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(t) || /^f[cd][0-9a-f]{2}:/i.test(t) || /^fe80:/i.test(t) || /^::1$/.test(t) || /^::$/.test(t)
            }, r.isPublic = function(t) {
                return !r.isPrivate(t)
            }, r.isLoopback = function(t) {
                return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(t) || /^fe80::1$/.test(t) || /^::1$/.test(t) || /^::$/.test(t)
            }, r.loopback = function(t) {
                if ("ipv4" !== (t = s(t)) && "ipv6" !== t) throw new Error("family must be ipv4 or ipv6");
                return "ipv4" === t ? "127.0.0.1" : "fe80::1"
            }, r.address = function(t, e) {
                var n, o = i.networkInterfaces();
                if (e = s(e), t && "private" !== t && "public" !== t) {
                    var a = o[t].filter((function(t) {
                        return t.family.toLowerCase() === e
                    }));
                    if (0 === a.length) return;
                    return a[0].address
                }
                return (n = Object.keys(o).map((function(n) {
                    var i = o[n].filter((function(n) {
                        return n.family = n.family.toLowerCase(), n.family === e && !r.isLoopback(n.address) && (!t || ("public" === t ? r.isPrivate(n.address) : r.isPublic(n.address)))
                    }));
                    return i.length ? i[0].address : void 0
                })).filter(Boolean)).length ? n[0] : r.loopback(e)
            }, r.toLong = function(t) {
                var e = 0;
                return t.split(".").forEach((function(t) {
                    e <<= 8, e += parseInt(t)
                })), e >>> 0
            }, r.fromLong = function(t) {
                return (t >>> 24) + "." + (t >> 16 & 255) + "." + (t >> 8 & 255) + "." + (255 & t)
            }
        },
        yhap: function(t, e, n) {
            "use strict";
            var r = n("gOym");
            n.d(e, "a", (function() {
                return r.a
            })), n.d(e, "b", (function() {
                return r.b
            })), n.d(e, "c", (function() {
                return r.c
            })), n.d(e, "d", (function() {
                return r.d
            })), n.d(e, "e", (function() {
                return r.e
            })), n.d(e, "f", (function() {
                return r.f
            })), n.d(e, "g", (function() {
                return r.g
            })), n.d(e, "h", (function() {
                return r.j
            })), n.d(e, "i", (function() {
                return r.k
            })), n.d(e, "j", (function() {
                return r.l
            })), n.d(e, "k", (function() {
                return r.m
            })), n.d(e, "l", (function() {
                return r.n
            })), n.d(e, "m", (function() {
                return r.o
            })), n.d(e, "n", (function() {
                return r.p
            }))
        }
    }
]);