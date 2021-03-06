/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.11.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(n) {
    var i = {};

    function o(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = n, o.c = i, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 11)
}([, , function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, , function(n, e, t) {
    "use strict";
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
    }).call(this, t(5))
}, function(e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (i = window)
    }
    e.exports = i
}, , , , , , function(e, t, n) {
    e.exports = n(12)
}, function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = l(n(2)),
        a = n(4),
        r = l(n(13));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = a.window.jarallax;
    if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
            return a.window.jarallax = s, this
        }, void 0 !== a.jQuery) {
        var c = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = r.default.apply(a.window, e);
            return "object" !== (void 0 === t ? "undefined" : i(t)) ? t : this
        };
        c.constructor = r.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u, this
        }
    }(0, o.default)(function() {
        (0, r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function(e, I, P) {
    "use strict";
    (function(e) {
        Object.defineProperty(I, "__esModule", {
            value: !0
        });
        var s = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        i = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var r, l = e[Symbol.iterator](); !(i = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            !i && l.return && l.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            t = function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            };

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n = r(P(2)),
            o = r(P(14)),
            a = P(4);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"),
            l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            d = function() {
                for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++)
                    if (t && void 0 !== t.style[e[n]]) return e[n];
                return !1
            }(),
            m = void 0;
        var v = void 0,
            b = void 0,
            p = void 0,
            f = !1,
            g = !1;

        function y(e) {
            v = a.window.innerWidth || document.documentElement.clientWidth, b = l ? (!m && document.body && ((m = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(m)), (m ? m.clientHeight : 0) || a.window.innerHeight || document.documentElement.clientHeight) : a.window.innerHeight || document.documentElement.clientHeight, "object" !== (void 0 === e ? "undefined" : c(e)) || "load" !== e.type && "dom-loaded" !== e.type || (f = !0)
        }
        y(), a.window.addEventListener("resize", y), a.window.addEventListener("orientationchange", y), a.window.addEventListener("load", y), (0, n.default)(function() {
            y({
                type: "dom-loaded"
            })
        });
        var h = [],
            x = !1;

        function w() {
            if (h.length) {
                p = void 0 !== a.window.pageYOffset ? a.window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var t = f || !x || x.width !== v || x.height !== b,
                    n = g || t || !x || x.y !== p;
                g = f = !1, (t || n) && (h.forEach(function(e) {
                    t && e.onResize(), n && e.onScroll()
                }), x = {
                    width: v,
                    height: b,
                    y: p
                }), (0, o.default)(w)
            }
        }
        var A = !!e.ResizeObserver && new e.ResizeObserver(function(e) {
                e && e.length && (0, o.default)(function() {
                    e.forEach(function(e) {
                        e.target && e.target.jarallax && (f || e.target.jarallax.onResize(), g = !0)
                    })
                })
            }),
            $ = 0,
            S = (t(j, [{
                key: "css",
                value: function(t, n) {
                    return "string" == typeof n ? a.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && d && (n[d] = n.transform), Object.keys(n).forEach(function(e) {
                        t.style[e] = n[e]
                    }), t)
                }
            }, {
                key: "extend",
                value: function(n) {
                    var i = arguments;
                    return n = n || {}, Object.keys(arguments).forEach(function(t) {
                        i[t] && Object.keys(i[t]).forEach(function(e) {
                            n[e] = i[t][e]
                        })
                    }), n
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: v,
                        height: b,
                        y: p
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !e.image.bgImage || "none" === e.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return d && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        n = {};
                    if (!e.options.keepImg) {
                        var i = e.$item.getAttribute("style");
                        if (i && e.$item.setAttribute("data-jarallax-original-styles", i), e.image.useImgTag) {
                            var o = e.image.$item.getAttribute("style");
                            o && e.image.$item.setAttribute("data-jarallax-original-styles", o)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), u && e.css(e.image.$container, {
                            opacity: .9999
                        }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: " + e.options.imgSize + "; object-position: " + e.options.imgPosition + ";",
                            "max-width": "none"
                        }, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": e.image.bgImage || 'url("' + e.image.src + '")'
                        }, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position)
                        for (var a = 0, r = e.$item; null !== r && r !== document && 0 === a;) {
                            var l = e.css(r, "-webkit-transform") || e.css(r, "-moz-transform") || e.css(r, "transform");
                            l && "none" !== l && (a = 1, e.image.position = "absolute"), r = r.parentNode
                        }
                    n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.automaticResize && A && A.observe(e.$item), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    h.push(this), 1 === h.length && w()
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var n = this;
                    h.forEach(function(e, t) {
                        e.instanceID === n.instanceID && h.splice(t, 1)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var n = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            n = t.width,
                            i = t.height;
                        e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
                        var o = "#jarallax-container-" + e.instanceID + " {\n           clip: rect(0 " + n + "px " + i + "px 0);\n           clip: rect(0, " + n + "px, " + i + "px, 0);\n        }";
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        n = t.height,
                        i = e.options.speed,
                        o = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = n,
                        l = 0;
                    return o && (i < 0 ? (a = i * Math.max(n, b), b < n && (a -= i * (n - b))) : a = i * (n + b), 1 < i ? r = Math.abs(a - b) : i < 0 ? r = a / i + Math.abs(a) : r += (b - n) * (1 - i), a /= 2), e.parallaxScrollDistance = a, l = o ? (b - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
                        height: r + "px",
                        marginTop: l + "px",
                        left: "fixed" === e.image.position ? t.left + "px" : "0",
                        width: t.width + "px"
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        n = t.$item.getBoundingClientRect(),
                        i = n.top,
                        o = n.height,
                        a = {},
                        r = n;
                    if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= b && r.left <= v, e || t.isElementInViewport) {
                        var l = Math.max(0, i),
                            s = Math.max(0, o + i),
                            c = Math.max(0, -i),
                            u = Math.max(0, i + o - b),
                            d = Math.max(0, o - (i + o - b)),
                            m = Math.max(0, -i + b - o),
                            p = 1 - 2 * (b - i) / (b + o),
                            f = 1;
                        if (o < b ? f = 1 - (c || u) / o : s <= b ? f = s / b : d <= b && (f = d / b), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)", a.opacity = f), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var g = 1;
                            t.options.speed < 0 ? g -= t.options.speed * f : g += t.options.speed * (1 - f), a.transform = "scale(" + g + ") translate3d(0,0,0)"
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var y = t.parallaxScrollDistance * p;
                            "absolute" === t.image.position && (y -= i), a.transform = "translate3d(0," + y + "px,0)"
                        }
                        t.css(t.image.$item, a), t.options.onScroll && t.options.onScroll.call(t, {
                            section: n,
                            beforeTop: l,
                            beforeTopEnd: s,
                            afterTop: c,
                            beforeBottom: u,
                            beforeBottomEnd: d,
                            afterBottom: m,
                            visiblePercent: f,
                            fromViewportCenter: p
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }]), j);

        function j(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, j);
            var n = this;
            n.instanceID = $++, n.$item = e, n.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                automaticResize: !0,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var i = n.$item.dataset || {},
                o = {};
            if (Object.keys(i).forEach(function(e) {
                    var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                    t && void 0 !== n.defaults[t] && (o[t] = i[e])
                }), n.options = n.extend({}, n.defaults, o, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function(e) {
                    "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
                }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                var a = n.options.disableParallax;
                n.options.disableParallax = function() {
                    return a.test(navigator.userAgent)
                }
            }
            if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                    return !1
                }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                var r = n.options.disableVideo;
                n.options.disableVideo = function() {
                    return r.test(navigator.userAgent)
                }
            }
            "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                return !1
            });
            var l = n.options.elementInViewport;
            l && "object" === (void 0 === l ? "undefined" : c(l)) && void 0 !== l.length && (l = s(l, 1)[0]);
            l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
                src: n.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
            }, n.initImg() && n.canInitParallax() && n.init()
        }

        function E(e, t) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : c(HTMLElement)) ? e instanceof HTMLElement : e && "object" === (void 0 === e ? "undefined" : c(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var n = t, i = Array.prototype.slice.call(arguments, 2), o = e.length, a = 0, r = void 0; a < o; a++)
                if ("object" === (void 0 === n ? "undefined" : c(n)) || void 0 === n ? e[a].jarallax || (e[a].jarallax = new S(e[a], n)) : e[a].jarallax && (r = e[a].jarallax[n].apply(e[a].jarallax, i)), void 0 !== r) return r;
            return e
        }
        E.constructor = S, I.default = E
    }).call(this, P(5))
}, function(e, t, n) {
    "use strict";
    var i = n(15),
        o = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || function(e) {
            var t = +new Date,
                n = Math.max(0, 16 - (t - a)),
                i = setTimeout(e, n);
            return a = t, i
        },
        a = +new Date;
    var r = i.cancelAnimationFrame || i.webkitCancelAnimationFrame || i.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (o = o.bind(i), r = r.bind(i)), (e.exports = o).cancel = r
}, function(n, e, t) {
    "use strict";
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, n.exports = t
    }).call(this, t(5))
}]);
//# sourceMappingURL=jarallax.min.js.map