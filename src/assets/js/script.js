! function(c) {
    function e(e) { for (var t, n, r = e[0], o = e[1], a = 0, i = []; a < r.length; a++) n = r[a], Object.prototype.hasOwnProperty.call(u, n) && u[n] && i.push(u[n][0]), u[n] = 0; for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]); for (s && s(e); i.length;) i.shift()() }
    var n = {},
        u = { 3: 0 };

    function l(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return c[e].call(t.exports, t, t.exports, l), t.l = !0, t.exports }
    l.e = function(o) {
        var e, a, i, t, c, n, r = [],
            s = u[o];
        return 0 !== s && (s ? r.push(s[2]) : (e = new Promise(function(e, t) { s = u[o] = [e, t] }), r.push(s[2] = e), (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, l.nc && a.setAttribute("nonce", l.nc), a.src = l.p + "fingerprinted/js/" + ({ 1: "elements-afterpay-clearpay-message", 4: "trusted-types-checker" }[n = o] || n) + "-" + { 1: "2274a42c381d8cd3782289bfdb87a03c", 4: "6fb661259290eb5fd6c6c0bb32ab0d8c" }[n] + ".js", i = new Error, t = function(e) {
            a.onerror = a.onload = null, clearTimeout(c);
            var t, n, r = u[o];
            0 !== r && (r && (t = e && ("load" === e.type ? "missing" : e.type), n = e && e.target && e.target.src, i.message = "Loading chunk " + o + " failed.\n(" + t + ": " + n + ")", i.name = "ChunkLoadError", i.type = t, i.request = n, r[1](i)), u[o] = void 0)
        }, c = setTimeout(function() { t({ type: "timeout", target: a }) }, 12e4), a.onerror = a.onload = t, document.head.appendChild(a))), Promise.all(r)
    }, l.m = c, l.c = n, l.d = function(e, t, n) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, l.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function(t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (l.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var r in t) l.d(n, r, function(e) { return t[e] }.bind(null, r));
        return n
    }, l.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return l.d(t, "a", t), t }, l.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = "https://js.stripe.com/v3/", l.oe = function(e) { throw console.error(e), e };
    var t = window.__webpackStripeJSv3Jsonp = window.__webpackStripeJSv3Jsonp || [],
        r = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var o = 0; o < t.length; o++) e(t[o]);
    var s = r;
    l(l.s = 19)
}([function(e, t, n) {
    "use strict";
    var r = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(o, Error), o);

    function o(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o); var t = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e)); return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e), t.name = "IntegrationError", Object.defineProperty(t, "message", { value: t.message, enumerable: !0 }), t }
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", function() { return d }), n.d(t, "i", function() { return m }), n.d(t, "f", function() { return h }), n.d(t, "c", function() { return a.a }), n.d(t, "e", function() { return c }), n.d(t, "d", function() { return s }), n.d(t, "b", function() { return u.a }), n.d(t, "k", function() { return p }), n.d(t, "g", function() { return l }), n.d(t, "h", function() { return _ }), n.d(t, "a", function() { return y }), n.d(t, "j", function() { return b });

    function r(e) { return "https://js.stripe.com/v3/" + (e || "") }
    var o = n(9),
        a = n(7),
        i = n(3),
        c = function(e) {
            switch (e) {
                case "ADDRESS_AUTOCOMPLETE":
                    return r("checkout-inner-address-autocomplete-5cf7addd4c3214692c8f16ede0e81f33.html");
                case "CARD_ELEMENT":
                    return r("elements-inner-card-cb4cf1ba97f15cf47564633f480e3259.html");
                case "CARD_LIGHT_ELEMENT":
                    return r("elements-inner-card-light-c095fbe3ba277f3ec9f693d25d5aad65.html");
                case "CONTROLLER":
                    return r("controller-22f002eb280b64f732fda40420e2915a.html");
                case "METRICS_CONTROLLER":
                    return r("m-outer-0cba8a995d163797499ab006bbb6b889.html");
                case "PAYMENT_REQUEST_ELEMENT":
                    return r("elements-inner-payment-request-d25ad354b87845826eba63be90f8181f.html");
                case "PAYMENT_REQUEST_BROWSER":
                    return r("payment-request-inner-browser-94de057eb85308fed93338f19b3a3e01.html");
                case "PAYMENT_REQUEST_GOOGLE_PAY":
                    return r("payment-request-inner-google-pay-05308bf9d26ecab6aa9ab27bfe0e6eac.html");
                case "IBAN_ELEMENT":
                    return r("elements-inner-iban-972505c4b828954ac01da2a914a38cd1.html");
                case "IDEAL_BANK_ELEMENT":
                    return r("elements-inner-ideal-bank-8a536ee89a43a8a96baebcb8b63aa17e.html");
                case "P24_BANK_ELEMENT":
                    return r("elements-inner-p24-bank-c6a970130ed9c216d08e2dcce7b9515e.html");
                case "AUTHORIZE_WITH_URL":
                    return r("authorize-with-url-inner-6483c2dff8ba14a7628a8af92c1f0333.html");
                case "STRIPE_3DS2_CHALLENGE":
                    return r("three-ds-2-challenge-f699dfa9ff71418a8d267aa409855b22.html");
                case "STRIPE_3DS2_FINGERPRINT":
                    return r("three-ds-2-fingerprint-9965aa1f0e544b94c5a57dee90ee8279.html");
                case "AU_BANK_ACCOUNT_ELEMENT":
                    return r("elements-inner-au-bank-account-1c631b8aaffedc4336f952a622495ca1.html");
                case "FPX_BANK_ELEMENT":
                    return r("elements-inner-fpx-bank-69923100f024b2af27615529ac6d8260.html");
                case "LIGHTBOX_APP":
                    return r("lightbox-inner-8ca21e86e4109503dcdd7024f3e4c0c9.html");
                case "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-number-display-aae770bf9e6f8effe8591fdb7edfcb03.html");
                case "ISSUING_CARD_CVC_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-cvc-display-c21b840eee29d76e386c037341caa877.html");
                case "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-expiry-display-835bfc136d52cf99eead705e5768ded9.html");
                case "EPS_BANK_ELEMENT":
                    return r("elements-inner-eps-bank-41eafb7617b5cafbbcb344336c7e400f.html");
                case "HCAPTCHA_APP":
                    return r("hcaptcha-inner-9d2a67252ab6a2931ec623224a2a299d.html");
                case "NETBANKING_BANK_ELEMENT":
                    return r("elements-inner-netbanking-bank-60e6e510dcd41fc053ccb8746ad1ea22.html");
                case "AFTERPAY_MESSAGE_MODAL_ELEMENT":
                    return r("elements-inner-afterpay-message-modal-706efaf25adc4179833b35346e2abc8a.html");
                case "INSTANT_DEBITS_APP":
                    return r("instant-debits-app-a0ad1adadfd0c69bbc38712cc5cb7f55.html");
                case "AUTHENTICATION_ELEMENT":
                    return r("elements-inner-authentication-c5a74b01d16c43087ee99e99f05d33ed.html");
                case "AUTHENTICATION_POPOVER_ELEMENT":
                    return r("elements-inner-authentication-popover-32f81d78d3472e0cf899b6e1f3875574.html");
                case "PAYMENT_ELEMENT":
                    return r("elements-inner-payment-8ceff19fc5a878c0a7dbfab4404aea10.html");
                case "LINKED_ACCOUNTS_INNER":
                    return r("linked-accounts-inner-f3b8f2fba8fc2922a935a6e4253031b6.html");
                default:
                    return Object(i.a)(e)
            }
        },
        s = function(e) { var t = { frameborder: "0", allowTransparency: "true", scrolling: "no", allowpaymentrequest: "true" }; return "PAYMENT_REQUEST_GOOGLE_PAY" === e && (t.sandbox = ["allow-scripts", "allow-forms", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin"].join(" "), t.referrerpolicy = "origin"), t },
        u = n(4),
        l = { PAYMENT_INTENT: "PAYMENT_INTENT", SETUP_INTENT: "SETUP_INTENT" },
        p = [u.a.card, u.a.cardNumber, u.a.cardExpiry, u.a.cardCvc, u.a.postalCode],
        d = "https://js.stripe.com/v3/",
        f = Object(o.d)(d),
        m = f ? f.origin : "",
        h = "https://verify.stripe.com/",
        _ = { family: "font-family", src: "src", unicodeRange: "unicode-range", style: "font-style", variant: "font-variant", stretch: "font-stretch", weight: "font-weight", display: "font-display" },
        y = Object.keys(_).reduce(function(e, t) { return e[_[t]] = t, e }, {}),
        b = [u.a.idealBank, u.a.p24Bank, u.a.netbankingBank, u.a.idealBankSecondary, u.a.p24BankSecondary, u.a.netbankingBankSecondary, u.a.fpxBank, u.a.fpxBankSecondary, u.a.epsBank, u.a.epsBankSecondary]
}, function(e, t, n) {
    "use strict";
    var r = n(16),
        o = n.n(r),
        a = window.Promise ? Promise : o.a;
    t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var r = function(e, t) { throw new Error(1 < arguments.length && void 0 !== t ? t : "absurd") }
}, function(e, t, n) {
    "use strict";
    var r = { card: "card", cardNumber: "cardNumber", cardExpiry: "cardExpiry", cardCvc: "cardCvc", postalCode: "postalCode", iban: "iban", idealBank: "idealBank", p24Bank: "p24Bank", paymentRequestButton: "paymentRequestButton", auBankAccount: "auBankAccount", fpxBank: "fpxBank", netbankingBank: "netbankingBank", epsBank: "epsBank", afterpayClearpayMessage: "afterpayClearpayMessage", authentication: "authentication", payment: "payment", idealBankSecondary: "idealBankSecondary", p24BankSecondary: "p24BankSecondary", auBankAccountNumber: "auBankAccountNumber", auBsb: "auBsb", fpxBankSecondary: "fpxBankSecondary", netbankingBankSecondary: "netbankingBankSecondary", issuingCardNumberDisplay: "issuingCardNumberDisplay", issuingCardCvcDisplay: "issuingCardCvcDisplay", issuingCardExpiryDisplay: "issuingCardExpiryDisplay", epsBankSecondary: "epsBankSecondary", afterpayClearpayMessageModal: "afterpayClearpayMessageModal", authenticationPopover: "authenticationPopover" };
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", function() { return s }), n.d(t, "d", function() { return u }), n.d(t, "c", function() { return p }), n.d(t, "e", function() { return d }), n.d(t, "a", function() { return f }), n.d(t, "g", function() { return m }), n.d(t, "b", function() { return _ });

    function r(e, t) { return !!e.documentElement && e.documentElement.contains(t) }
    var o = n(17),
        a = n.n(o),
        i = n(0),
        c = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        s = function(e, t) {
            var o = {};
            t.forEach(function(e) {
                var t = c(e, 2),
                    n = t[0],
                    r = t[1];
                n.split(/\s+/).forEach(function(e) { e && (o[e] = o[e] || r) })
            }), e.className = a()(e.className, o)
        },
        u = function(e, t) { e.style.cssText = Object.keys(t).map(function(e) { return e + ": " + t[e] + " !important;" }).join(" ") },
        l = { border: "none", margin: "0", padding: "0", width: "1px", "min-width": "100%", overflow: "hidden", display: "block", visibility: "hidden", position: "fixed", height: "1px", "pointer-events": "none", "user-select": "none" },
        p = function(e) { u(e, l) },
        d = function(e) { try { return window.parent.frames[e] } catch (e) { return null } },
        f = function() { if (!document.body) throw new i.a("Stripe.js requires that your page has a <body> element."); return document.body },
        m = function(e) { return requestAnimationFrame(function() { requestAnimationFrame(e) }) },
        h = "isConnected" in window.Node.prototype ? function(e, t) { return t.isConnected && t.ownerDocument === e } : r,
        _ = function(e, t) { return !r(e, t) && h(e, t) }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s });
    var r = function(e, t, n) { return t && o(e.prototype, t), n && o(e, n), e };

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = Date.now ? function() { return Date.now() } : function() { return (new Date).getTime() },
        i = a(),
        c = window.performance && window.performance.now ? function() { return window.performance.now() } : function() { return a() - i },
        s = (r(u, [{ key: "getAsPosixTime", value: function() { return a() - this.getElapsedTime() } }, { key: "getElapsedTime", value: function(e) { return Math.round((e ? e.timestampValue : c()) - this.timestampValue) } }, { key: "valueOf", value: function() { return Math.round(this.timestampValue) } }], [{ key: "fromPosixTime", value: function(e) { return new u(e - a() + c()) } }]), u);

    function u(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u), this.timestampValue = null != e ? e : c() }
}, function(e, t, n) {
    "use strict";
    t.a = { ADDRESS_AUTOCOMPLETE: "ADDRESS_AUTOCOMPLETE", CARD_ELEMENT: "CARD_ELEMENT", CARD_LIGHT_ELEMENT: "CARD_LIGHT_ELEMENT", CONTROLLER: "CONTROLLER", METRICS_CONTROLLER: "METRICS_CONTROLLER", PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT", PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER", PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY", IBAN_ELEMENT: "IBAN_ELEMENT", IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT", P24_BANK_ELEMENT: "P24_BANK_ELEMENT", AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL", STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE", STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT", AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT", FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT", LIGHTBOX_APP: "LIGHTBOX_APP", ISSUING_CARD_NUMBER_DISPLAY_ELEMENT: "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT", ISSUING_CARD_CVC_DISPLAY_ELEMENT: "ISSUING_CARD_CVC_DISPLAY_ELEMENT", ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT: "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT", EPS_BANK_ELEMENT: "EPS_BANK_ELEMENT", HCAPTCHA_APP: "HCAPTCHA_APP", NETBANKING_BANK_ELEMENT: "NETBANKING_BANK_ELEMENT", AFTERPAY_MESSAGE_MODAL_ELEMENT: "AFTERPAY_MESSAGE_MODAL_ELEMENT", INSTANT_DEBITS_APP: "INSTANT_DEBITS_APP", AUTHENTICATION_ELEMENT: "AUTHENTICATION_ELEMENT", AUTHENTICATION_POPOVER_ELEMENT: "AUTHENTICATION_POPOVER_ELEMENT", PAYMENT_ELEMENT: "PAYMENT_ELEMENT", LINKED_ACCOUNTS_INNER: "LINKED_ACCOUNTS_INNER" }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r }), n.d(t, "b", function() { return o }), n.d(t, "c", function() { return a }), n.d(t, "e", function() { return s }), n.d(t, "f", function() { return u }), n.d(t, "d", function() { return l });
    var i = n(2),
        c = n(6),
        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        r = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return e[n]
        },
        o = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return n;
            return -1
        },
        m = "[object Object]",
        a = function t(e, n) {
            if ("object" !== (void 0 === e ? "undefined" : f(e)) || "object" !== (void 0 === n ? "undefined" : f(n))) return e === n;
            if (null === e || null === n) return e === n;
            var r = Array.isArray(e);
            if (r !== Array.isArray(n)) return !1;
            var o = Object.prototype.toString.call(e) === m;
            if (o != (Object.prototype.toString.call(n) === m)) return !1;
            if (!o && !r) return !1;
            var a = Object.keys(e),
                i = Object.keys(n);
            if (a.length !== i.length) return !1;
            for (var c = {}, s = 0; s < a.length; s++) c[a[s]] = !0;
            for (var u = 0; u < i.length; u++) c[i[u]] = !0;
            var l = Object.keys(c);
            if (l.length !== a.length) return !1;
            var p = e,
                d = n;
            return l.every(function(e) { return t(p[e], d[e]) })
        },
        s = function(e, t) { for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0; for (var o = [], a = 0; a < e.length; a++) n[e[a]] && o.push(e[a]); return o },
        u = function(e) { for (var t = 0, n = 0; n < e.length; n++) t += e[n]; return t },
        l = function(r, o) {
            var a = 0;
            return new i.a(function e(t) {
                for (var n = new c.a; a < r.length && n.getElapsedTime() < 50;) o(r[a]), a++;
                a === r.length ? t() : setTimeout(function() { return e(t) })
            })
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return c }), n.d(t, "a", function() { return o }), n.d(t, "d", function() { return a }), n.d(t, "c", function() { return i });
    var r = /^(http(s)?):\/\//,
        c = function(e) { return r.test(e) },
        o = function(e) { var t = e.match(r); return t && t.length ? t[1] : null },
        a = function(e) {
            if (!c(e)) return null;
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol,
                r = t.host,
                o = t.pathname,
                a = /:80$/,
                i = /:443$/;
            return "http:" === n && a.test(r) ? r = r.replace(a, "") : "https:" === n && i.test(r) && (r = r.replace(i, "")), { host: r, protocol: n, origin: n + "//" + r, path: o }
        },
        i = function(e, t) { if ("/" !== t[0]) return "" + e.replace(/\/[^/]*$/, "/") + t; var n = a(e); return n ? "" + n.origin + t : t }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return o }), n.d(t, "a", function() { return a }), n.d(t, "c", function() { return i });
    var r = n(0),
        o = function(r) {
            var o = {},
                a = {};
            return function(e) { var t = "_" + e; if ("string" == typeof e && void 0 !== o[t]) return o[t]; if ("number" == typeof e && void 0 !== a[t]) return a[t]; var n = r(e); return "string" == typeof e && (o[t] = n), "number" == typeof e && (a[t] = n), n }
        },
        a = function(e, t) {
            var n = !1;
            return function() {
                if (n) throw new r.a(t);
                n = !0;
                try { return e.apply(void 0, arguments).then(function(e) { return n = !1, e }, function(e) { throw n = !1, e }) } catch (e) { throw n = !1, e }
            }
        },
        i = function(e) { var t = e; return function() { t && (t.apply(void 0, arguments), t = null) } }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r }), n.d(t, "b", function() { return a }), n.d(t, "c", function() { return i });
    var o = n(9),
        r = function(e, t) {
            var n = Object(o.d)(e),
                r = Object(o.d)(t);
            return !(!n || !r) && n.origin === r.origin
        },
        a = function(e) { return r(e, "https://js.stripe.com/v3/") },
        i = function(e) { return a(e) || (t = e, n = Object(o.d)(t), "stripe.com" === (r = n ? n.host : "") || !!r.match(/\.stripe\.(com|me)$/)); var t, n, r }
}, function(e, t, n) {
    "use strict";
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function u(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
    t.a = function o(a, i) {
        var c = [];
        return Object.keys(a).forEach(function(e) {
            var t, n = a[e],
                r = i ? i + "[" + e + "]" : e;
            n && "object" === (void 0 === n ? "undefined" : s(n)) ? "" !== (t = o(n, r)) && (c = [].concat(u(c), [t])) : null != n && (c = [].concat(u(c), [r + "=" + encodeURIComponent(String(n))]))
        }), c.join("&").replace(/%20/g, "+")
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) { return e ? window.getComputedStyle(e, t) : null }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return c }), n.d(t, "c", function() { return s }), n.d(t, "a", function() { return u });

    function r() {
        return Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")).filter(function(e) {
            var t = e.getAttribute("tabindex"),
                n = !t || 0 <= parseInt(t, 10),
                r = e.getBoundingClientRect(),
                o = Object(i.a)(e),
                a = 0 < r.width && 0 < r.height && o && "hidden" !== o.getPropertyValue("visibility");
            return n && a
        })
    }
    var o = n(10),
        a = n(8),
        i = n(13),
        c = function(t, e) { var n = r(); return n[Object(a.b)(n, function(e) { return e === t || t.contains(e) }) + ("previous" === e ? -1 : 1)] },
        s = function(e, t) {
            return e.then(function() {
                return Object(a.d)(t, function(e) {
                    var t = e.element,
                        n = e.tabIndex;
                    "" === n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", n)
                })
            })
        },
        u = function(n) {
            var r = [],
                e = Object(a.d)(document.querySelectorAll("*"), function(e) {
                    var t = e.getAttribute("tabindex") || "";
                    n !== e && (e.tabIndex = -1), r.push({ element: e, tabIndex: t })
                }),
                t = Object(o.c)(function() { s(e, r) });
            return { lockedPromise: e, lockedElements: r, restoreFocus: t }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(5),
        i = n(10),
        r = function() {
            function e(e) { return e.preventDefault() }

            function t() {}
            var n = Object(a.a)(),
                r = n.style.overflow,
                o = { passive: !(n.style.overflow = "hidden") };
            return window.addEventListener("touchmove", t, o), n.addEventListener("touchstart", t, o), n.addEventListener("touchmove", e, o), Object(i.c)(function() { n.style.overflow = r || "", window.removeEventListener("touchmove", t, o), n.removeEventListener("touchstart", t, o), n.removeEventListener("touchmove", e, o) })
        }
}, function(e, t, n) {
    "use strict";
    var s = n(20);
    e.exports = s;
    var r = l(!0),
        o = l(!1),
        a = l(null),
        i = l(void 0),
        c = l(0),
        u = l("");

    function l(e) { var t = new s(s._61); return t._81 = 1, t._65 = e, t }
    s.resolve = function(e) {
        if (e instanceof s) return e;
        if (null === e) return a;
        if (void 0 === e) return i;
        if (!0 === e) return r;
        if (!1 === e) return o;
        if (0 === e) return c;
        if ("" === e) return u;
        if ("object" == typeof e || "function" == typeof e) try { var t = e.then; if ("function" == typeof t) return new s(t.bind(e)) } catch (n) { return new s(function(e, t) { t(n) }) }
        return l(e)
    }, s.all = function(e) {
        var c = Array.prototype.slice.call(e);
        return new s(function(o, a) {
            if (0 === c.length) return o([]);
            var i = c.length;
            for (var e = 0; e < c.length; e++) ! function t(n, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) { if (e instanceof s && e.then === s.prototype.then) { for (; 3 === e._81;) e = e._65; return 1 === e._81 ? t(n, e._65) : (2 === e._81 && a(e._65), void e.then(function(e) { t(n, e) }, a)) } var r = e.then; if ("function" == typeof r) return void new s(r.bind(e)).then(function(e) { t(n, e) }, a) }
                c[n] = e, 0 == --i && o(c)
            }(e, c[e])
        })
    }, s.reject = function(n) { return new s(function(e, t) { t(n) }) }, s.race = function(e) { return new s(function(t, n) { e.forEach(function(e) { s.resolve(e).then(t, n) }) }) }, s.prototype.catch = function(e) { return this.then(null, e) }
}, function(t, n, e) {
    var r;
    ! function() {
        "use strict";
        var e = function() {
            function i() {}

            function c(e, t) { for (var n = t.length, r = 0; r < n; ++r) ! function(e, t) { if (!t) return; var n = typeof t; "string" == n ? function(e, t) { for (var n = t.split(a), r = n.length, o = 0; o < r; ++o) e[n[o]] = !0 }(e, t) : Array.isArray(t) ? c(e, t) : "object" == n ? function(e, t) { for (var n in t) o.call(t, n) && (e[n] = !!t[n]) }(e, t) : "number" == n && (e[t] = !0) }(e, t[r]) }
            i.prototype = Object.create(null);
            var o = {}.hasOwnProperty;
            var a = /\s+/;
            return function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = new i;
                c(r, t);
                var o, a = [];
                for (o in r) r[o] && a.push(o);
                return a.join(" ")
            }
        }();
        t.exports ? t.exports = e : void 0 === (r = function() { return e }.apply(n, [])) || (t.exports = r)
    }()
}, function(e, t) { e.exports = function(e) { return "_" + e.split("").map(function(e) { return e.charCodeAt(0) }).reduce(function(e, t) { return (e << 5) - e + t & (e << 5) - e + t }, 0).toString().replace(/[-.]/g, "_") } }, function(e, t, n) { e.exports = n(28) }, function(e, t, n) {
    "use strict";
    var o = n(21);

    function i() {}
    var a = null,
        c = {};

    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== i && f(e, this)
    }

    function u(e, t) {
        for (; 3 === e._81;) e = e._65;
        if (s._10 && s._10(e), 0 === e._81) return 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t);
        var n, r;
        n = e, r = t, o(function() {
            var e, t = 1 === n._81 ? r.onFulfilled : r.onRejected;
            null !== t ? (e = function(e, t) { try { return e(t) } catch (e) { return a = e, c } }(t, n._65)) === c ? p(r.promise, a) : l(r.promise, e) : (1 === n._81 ? l : p)(r.promise, n._65)
        })
    }

    function l(e, t) {
        if (t === e) return p(e, new TypeError("A promise cannot be resolved with itself.")), 0;
        if (t && ("object" == typeof t || "function" == typeof t)) { var n = function(e) { try { return e.then } catch (e) { return a = e, c } }(t); if (n === c) return p(e, a), 0; if (n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void r(e); if ("function" == typeof n) return void f(n.bind(t), e) }
        e._81 = 1, e._65 = t, r(e)
    }

    function p(e, t) { e._81 = 2, e._65 = t, s._97 && s._97(e, t), r(e) }

    function r(e) {
        if (1 === e._45 && (u(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
            e._54 = null
        }
    }

    function d(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

    function f(e, t) {
        var n = !1,
            r = function(e, t, n) { try { e(t, n) } catch (e) { return a = e, c } }(e, function(e) { n || (n = !0, l(t, e)) }, function(e) { n || (n = !0, p(t, e)) });
        n || r !== c || (n = !0, p(t, a))
    }(e.exports = s)._10 = null, s._97 = null, s._61 = i, s.prototype.then = function(e, t) {
        if (this.constructor !== s) return o = e, a = t, new(r = this).constructor(function(e, t) {
            var n = new s(i);
            n.then(e, t), u(r, new d(o, a, n))
        });
        var r, o, a, n = new s(i);
        return u(this, new d(e, t, n)), n
    }
}, function(d, e, t) {
    "use strict";
    (function(e) {
        function t(e) { r.length || (n(), 0), r[r.length] = e }
        d.exports = t;
        var n, r = [],
            o = 0;

        function a() {
            for (; o < r.length;) {
                var e = o;
                if (o += 1, r[e].call(), 1024 < o) {
                    for (var t = 0, n = r.length - o; t < n; t++) r[t] = r[t + o];
                    r.length -= o, o = 0
                }
            }
            r.length = 0, o = 0, 0
        }
        var i, c, s, u = void 0 !== e ? e : self,
            l = u.MutationObserver || u.WebKitMutationObserver;

        function p(r) {
            return function() {
                var e = setTimeout(n, 0),
                    t = setInterval(n, 50);

                function n() { clearTimeout(e), clearInterval(t), r() }
            }
        }
        n = "function" == typeof l ? (i = 1, c = new l(a), s = document.createTextNode(""), c.observe(s, { characterData: !0 }), function() { i = -i, s.data = i }) : p(a), t.requestFlush = n, t.makeRequestCallFromTimer = p
    }).call(this, t(22))
}, function(e, t) {
    var n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t) {}, , , , , function(e, t, m) {
    "use strict";
    m.r(t);

    function n(e, t) { return 0 <= e.indexOf(t) }
    var M = m(0),
        T = m(3),
        w = m(8),
        r = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"],
        o = { AE: "AE", AT: "AT", AU: "AU", BE: "BE", BG: "BG", BR: "BR", CA: "CA", CH: "CH", CI: "CI", CR: "CR", CY: "CY", CZ: "CZ", DE: "DE", DK: "DK", DO: "DO", EE: "EE", ES: "ES", FI: "FI", FR: "FR", GB: "GB", GI: "GI", GR: "GR", GT: "GT", HK: "HK", HU: "HU", ID: "ID", IE: "IE", IN: "IN", IT: "IT", JP: "JP", LI: "LI", LT: "LT", LU: "LU", LV: "LV", MT: "MT", MX: "MX", MY: "MY", NL: "NL", NO: "NO", NZ: "NZ", PE: "PE", PH: "PH", PL: "PL", PT: "PT", RO: "RO", SE: "SE", SG: "SG", SI: "SI", SK: "SK", SN: "SN", TH: "TH", TT: "TT", US: "US", UY: "UY" },
        a = Object.keys(o),
        i = { applePay: "applePay", googlePay: "googlePay", browserCard: "browserCard" },
        c = Object.keys(i),
        s = { live: "live", test: "test", unknown: "unknown" },
        _ = function(e) { return /^pk_test_/.test(e) ? s.test : /^pk_live_/.test(e) ? s.live : s.unknown },
        v = m(9),
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function d(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function f(e, t, n) { return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "." }

    function h(e, t) { return { type: "valid", value: e, warnings: 1 < arguments.length && void 0 !== t ? t : [] } }

    function g(e) { return { error: e, errorType: "full", type: "error" } }

    function y(e, t, n) { var r = new M.a(f(e, t, n)); return g(r) }

    function b(e, t, n) { return { expected: e, actual: String(t), options: n, errorType: "mismatch", type: "error" } }

    function E(e, t) { return u({}, e, { path: [].concat(d(e.path), [t]) }) }

    function S(n) { return function(e, t) { return void 0 === e ? h(e) : n(e, t) } }

    function P(b, v) {
        return function(e, t) {
            function n(e) { var t = e.options.path.join(".") || "value"; return { error: t + " should be " + e.expected, actual: t + " as " + e.actual } }

            function r(e, t, n) { return g(new M.a("Invalid value for " + e + ": " + t + ". You specified " + n + ".")) }
            var o = b(e, t),
                a = v(e, t);
            if ("error" !== o.type || "error" !== a.type) return "valid" === o.type ? o : a;
            if ("mismatch" === o.errorType && "mismatch" === a.errorType) {
                var i = n(o),
                    c = i.error,
                    s = i.actual,
                    u = n(a),
                    l = u.error,
                    p = u.actual;
                return r(t.label, c === l ? c : c + " or " + l, s === p ? s : s + " and " + p)
            }
            if ("mismatch" === o.errorType) {
                var d = n(o),
                    f = d.error,
                    m = d.actual;
                return r(t.label, f, m)
            }
            if ("mismatch" !== a.errorType) return g(o.error);
            var h = n(a),
                _ = h.error,
                y = h.actual;
            return r(t.label, _, y)
        }
    }

    function k(o, a) { return function(t, e) { var n = Object(w.a)(o, function(e) { return e === t }); if (void 0 !== n) return h(n); var r = a ? "a recognized string." : "one of the following strings: " + o.join(", "); return b(r, t, e) } }

    function O(n) { return function(e, t) { return "string" == typeof e && 0 === e.indexOf(n) ? h(e) : b("a string starting with " + n, e, t) } }

    function A() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return k(t, !1) }

    function I() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return k(t, !0) }

    function C(e, t) { return "string" == typeof e ? h(e) : b("a string", e, t) }

    function j(n, r) { return function(e, t) { return void 0 === e ? h(r()) : n(e, t) } }

    function N(e, t) { return "boolean" == typeof e ? h(e) : b("a boolean", e, t) }

    function R(e, t) { return "number" == typeof e ? h(e) : b("a number", e, t) }

    function x(n) { return function(e, t) { return "number" == typeof e && n < e ? h(e) : b("a number greater than " + n, e, t) } }

    function L(n) { return function(e, t) { return "number" == typeof e && e === parseInt(e, 10) && (!n || 0 <= e) ? h(e) : b(n ? "a positive amount in the currency's subunit" : "an amount in the currency's subunit", e, t) } }

    function D(e, t) { return L(!1)(e, t) }

    function B(e, t) { return e && "object" === (void 0 === e ? "undefined" : l(e)) ? h(e) : b("an object", e, t) }

    function F(r) { return function(e, n) { return Array.isArray(e) ? e.map(function(e, t) { return r(e, E(n, String(t))) }).reduce(function(e, t) { return "error" === e.type ? e : "error" === t.type ? t : h([].concat(d(e.value), [t.value]), [].concat(d(e.warnings), d(t.warnings))) }, h([])) : b("array", e, n) } }

    function q(u) {
        return function(s) {
            return function(e, t) {
                if (Array.isArray(e)) {
                    var n = s(e, t);
                    if ("valid" === n.type)
                        for (var r = {}, o = 0; o < n.value.length; o += 1) {
                            var a = n.value[o];
                            if ("object" === (void 0 === a ? "undefined" : l(a)) && a && "string" == typeof a[u]) {
                                var i = a[u],
                                    c = "_" + i;
                                if (r[c]) return g(new M.a("Duplicate value for " + u + ": " + i + ". The property '" + u + "' of '" + t.path.join(".") + "' has to be unique."));
                                r[c] = !0
                            }
                        }
                    return n
                }
                return b("array", e, t)
            }
        }
    }

    function U(n) { return function(e, t) { return void 0 === e ? h(void 0) : b("used in " + n + " instead", e, t) } }

    function H(c) {
        return function(i) {
            return function(e, r) {
                if (!e || "object" !== (void 0 === e ? "undefined" : l(e)) || Array.isArray(e)) return b("an object", e, r);
                var o = e,
                    t = Object(w.a)(Object.keys(o), function(e) { return !i[e] });
                if (t && c) return g(new M.a("Invalid " + r.label + " parameter: " + [].concat(d(r.path), [t]).join(".") + " is not an accepted parameter."));
                var n = Object.keys(o),
                    a = h({});
                return t && (a = n.reduce(function(e, t) { return i[t] ? e : h(e.value, [].concat(d(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(d(r.path), [t]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."])) }, a)), Object.keys(i).reduce(function(e, t) { if ("error" === e.type) return e; var n = (0, i[t])(o[t], E(r, t)); return "valid" === n.type && void 0 !== n.value ? h(u({}, e.value, p({}, t, n.value)), [].concat(d(e.warnings), d(n.warnings))) : "valid" === n.type ? h(e.value, [].concat(d(e.warnings), d(n.warnings))) : n }, a)
            }
        }
    }

    function Y(e, t, n, r) {
        var o = r || {},
            a = e(t, { authenticatedOrigin: o.authenticatedOrigin || "", element: o.element || "", label: n, path: o.path || [] });
        return "valid" === a.type || "full" === a.errorType ? a : { type: "error", errorType: "full", error: new M.a(f(a.expected, a.actual, a.options)) }
    }

    function z() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""; return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, z) }

    function G(e) {
        var t = e.controllerId,
            n = e.frameId,
            r = e.targetOrigin,
            o = e.type,
            a = r,
            i = void 0;
        "controller" === o ? i = Object(ie.e)(n) : "group" === o ? i = Object(ie.e)(t) : "outer" === o || "hosted" === o ? i = window.frames[n] : "inner" === o && (a = a || "*", i = window.parent), a = a || ee.i, i && "function" == typeof i.postMessage && i.postMessage(JSON.stringify(ce({}, e, { __stripeJsV3: !0 })), a)
    }

    function W(e, t) { var n = e._isUserError || "IntegrationError" === e.name; throw t && !n && t.report("fatal.uncaught_error", { iframe: !1, name: e.name, element: "outer", message: e.message || e.description, fileName: e.fileName, lineNumber: e.lineNumber, columnNumber: e.columnNumber, stack: e.stack && e.stack.substring(0, 1e3) }), e }

    function K(r, o) { return function(e, t, n) { try { return r.call(this, e, t, n) } catch (e) { return W(e, o || this && this._controller) } } }
    var V = A.apply(void 0, d(a)),
        J = A.apply(void 0, d(r)),
        $ = A.apply(void 0, d(c)),
        X = (A.apply(void 0, d(Object.keys(s))), H(!0)),
        Z = H(!1),
        Q = function(e, t, n, r) {
            var o = Y(e, t, n, r);
            switch (o.type) {
                case "valid":
                    return { value: o.value, warnings: o.warnings };
                case "error":
                    throw o.error;
                default:
                    return Object(T.a)(o)
            }
        },
        ee = m(1),
        te = ("00" + Math.floor(1e3 * Math.random())).slice(-3),
        ne = 0,
        re = function(e) { return "" + e + te + ne++ },
        oe = m(12),
        ae = m(2),
        ie = m(5),
        ce = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        se = (m(23), function(t, n) { return function(e) { try { return t.call(this, e) } catch (e) { return W(e, n || this && this._controller) } } }),
        ue = function(n, r) { return function(e, t) { try { return n.call(this, e, t) } catch (e) { return W(e, r || this && this._controller) } } };

    function le() {
        var a = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, le), this._emit = function(e) { for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return (a._callbacks[e] || []).forEach(function(e) { var t = e.fn; if (t._isUserCallback) try { t.apply(void 0, n) } catch (e) { throw e._isUserError = !0, e } else t.apply(void 0, n) }), a }, this._once = function(t, n) { return a._on(t, function e() { a._off(t, e), n.apply(void 0, arguments) }, n) }, this._removeAllListeners = function() { return a._callbacks = {}, a }, this._on = function(e, t, n) { return a._callbacks[e] = a._callbacks[e] || [], a._callbacks[e].push({ original: n, fn: t }), a }, this._validateUserOn = function(e, t) {}, this._userOn = function(e, t) { if ("string" != typeof e) throw new M.a("When adding an event listener, the first argument should be a string event name."); if ("function" != typeof t) throw new M.a("When adding an event listener, the second argument should be a function callback."); return a._validateUserOn(e, t), t._isUserCallback = !0, a._on(e, t) }, this._hasRegisteredListener = function(e) { return a._callbacks[e] && 0 < a._callbacks[e].length }, this._off = function(e, t) {
            if (t) {
                for (var n, r = a._callbacks[e], o = 0; o < r.length; o++)
                    if ((n = r[o]).fn === t || n.original === t) { r.splice(o, 1); break }
            } else delete a._callbacks[e];
            return a
        }, this._callbacks = {};
        var r, o, e = ue(this._userOn),
            t = ue(this._off),
            n = ue(this._once),
            i = se(this._hasRegisteredListener),
            c = se(this._removeAllListeners),
            s = (r = this._emit, function() { try { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return r.call.apply(r, [this].concat(t)) } catch (e) { return W(e, o || this && this._controller) } });
        this.on = this.addListener = this.addEventListener = e, this.off = this.removeListener = this.removeEventListener = t, this.once = n, this.hasRegisteredListener = i, this.removeAllListeners = c, this.emit = s
    }
    var pe = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        de = function(e, t, n) { return t && fe(e.prototype, t), n && fe(e, n), e };

    function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function me(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function he(e) {
        var t = e.type,
            n = e.controllerId,
            r = e.listenerRegistry,
            o = e.betas,
            a = e.appParams;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, he);
        var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (he.__proto__ || Object.getPrototypeOf(he)).call(this));
        return i._sendFAReq = function(n) { var r = re(n.tag); return new ae.a(function(e, t) { i._requests[r] = { resolve: e, reject: t }, i._send({ message: { action: "stripe-frame-action", payload: { nonce: r, faReq: n } }, type: "outer", frameId: i.id, controllerId: i._controllerId }) }) }, i.action = { perform3DS2Challenge: function(e) { return i._sendFAReq({ tag: "PERFORM_3DS2_CHALLENGE", value: e }) }, perform3DS2Fingerprint: function(e) { return i._sendFAReq({ tag: "PERFORM_3DS2_FINGERPRINT", value: e }) }, show3DS2Spinner: function(e) { return i._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e }) }, checkCanMakePayment: function(e) { return i._sendFAReq({ tag: "CHECK_CAN_MAKE_PAYMENT", value: e }) }, closeLightboxFrame: function(e) { return i._sendFAReq({ tag: "CLOSE_LIGHTBOX_FRAME", value: e }) }, openLightboxFrame: function(e) { return i._sendFAReq({ tag: "OPEN_LIGHTBOX_FRAME", value: e }) } }, i.type = t, i.loaded = !1, i._controllerId = n, i._persistentMessages = [], i._queuedMessages = [], i._requests = {}, i._listenerRegistry = r, i.id = i._generateId(), i._iframe = i._createIFrame(t, o, a), i._on("load", function() { i.loaded = !0, i._ensureMounted(), i.loaded && (i._persistentMessages.forEach(function(e) { return i._send(e) }), i._queuedMessages.forEach(function(e) { return i._send(e) }), i._queuedMessages = []) }), i._on("title", function(e) {
            var t = e.title;
            i._iframe.setAttribute("title", t)
        }), i
    }
    var _e = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(he, le), de(he, [{ key: "_generateId", value: function() { return re("__privateStripeFrame") } }, { key: "send", value: function(e) { this._send({ message: e, type: "outer", frameId: this.id, controllerId: this._controllerId }) } }, {
            key: "sendPersistent",
            value: function(e) {
                this._ensureMounted();
                var t = { message: e, type: "outer", frameId: this.id, controllerId: this._controllerId };
                this._persistentMessages = [].concat(me(this._persistentMessages), [t]), this.loaded && G(t)
            }
        }, { key: "resolve", value: function(e, t) { this._requests[e] && this._requests[e].resolve(t) } }, { key: "reject", value: function(e, t) { this._requests[e] && this._requests[e].reject(t) } }, { key: "_send", value: function(e) { this._ensureMounted(), this.loaded ? G(e) : this._queuedMessages = [].concat(me(this._queuedMessages), [e]) } }, { key: "appendTo", value: function(e) { this._emit("mount", { anchor: e }), e.appendChild(this._iframe) } }, { key: "unmount", value: function() { this.loaded = !1, this._emit("unload") } }, {
            key: "destroy",
            value: function() {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe), this._emit("destroy")
            }
        }, { key: "_ensureMounted", value: function() { this._isMounted() || this.unmount() } }, { key: "_isMounted", value: function() { return !!document.body && document.body.contains(this._iframe) } }, {
            key: "_createIFrame",
            value: function(e, t, n) {
                var r = window.location.href.toString(),
                    o = "string" == typeof n ? n : Object(oe.a)(pe({}, n || {}, { referrer: r, controllerId: this._controllerId })),
                    a = document.createElement("iframe");
                a.setAttribute("name", this.id);
                var i = Object(ee.d)(e);
                return Object.keys(i).forEach(function(e) { a.setAttribute(e, i[e]) }), n && n.allowCamera && a.setAttribute("allow", "camera"), a.src = Object(ee.e)(e) + (o ? "#" : "") + o, a
            }
        }]), he),
        ye = function(e, t, n) { return t && be(e.prototype, t), n && be(e, n), e };

    function be(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ve(e, t, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, t); if (void 0 === r) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : ve(o, t, n) } if ("value" in r) return r.value; var a = r.get; return void 0 !== a ? a.call(n) : void 0 }

    function ge(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ge); var t, n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (ge.__proto__ || Object.getPrototypeOf(ge)).call(this, e)); return n.autoload = e.autoload || !1, "complete" === document.readyState ? n._ensureMounted() : (t = n._ensureMounted.bind(n), n._listenerRegistry.addEventListener(document, "DOMContentLoaded", t), n._listenerRegistry.addEventListener(window, "load", t), setTimeout(t, 5e3)), n }
    var we = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ge, _e), ye(ge, [{ key: "_ensureMounted", value: function() { ve(ge.prototype.__proto__ || Object.getPrototypeOf(ge.prototype), "_ensureMounted", this).call(this), this._isMounted() || this._autoMount() } }, {
            key: "_autoMount",
            value: function() {
                var e = document.body;
                if (e) {
                    var t = document.querySelector("#stripe-hidden-frames-container") || e;
                    this.appendTo(t)
                } else if ("complete" === document.readyState || "interactive" === document.readyState) throw new M.a("Stripe.js requires that your page has a <body> element.");
                this.autoload && (this.loaded = !0)
            }
        }, { key: "_createIFrame", value: function(e, t, n) { var r = ve(ge.prototype.__proto__ || Object.getPrototypeOf(ge.prototype), "_createIFrame", this).call(this, e, t, n); return r.setAttribute("aria-hidden", "true"), r.setAttribute("tabIndex", "-1"), Object(ie.c)(r), r } }]), ge),
        Ee = function(e, t, n) { return t && Se(e.prototype, t), n && Se(e, n), e };

    function Se(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Pe() {
        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Pe),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (Pe.__proto__ || Object.getPrototypeOf(Pe)).apply(this, arguments))
    }

    function ke(e) { return /Edge\//i.test(e) }

    function Oe(e) { return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e) }

    function Te(e) { return /SamsungBrowser/.test(e) }

    function Ae(e) { return /iPad|iPhone/i.test(e) && !Oe(e) }

    function Ie(e) { return /^((?!chrome|android).)*safari/i.test(e) && !Te(e) }

    function Ce(e) { return /Android/i.test(e) && !Oe(e) }
    var je, Ne, Re, Me, xe, Le = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(Pe, we), Ee(Pe, [{ key: "_generateId", value: function() { return this._controllerId } }]), Pe),
        De = window.navigator.userAgent,
        Be = ke(De),
        Fe = (/Edge\/((1[0-6]\.)|0\.)/i.test(De), Oe(De)),
        qe = (/MSIE ([0-9]{1,}[.0-9]{0,})/i.test(De), Ae(De)),
        Ue = (Ae(je = De) || Ce(je), Ce(De)),
        He = (/Android 4\./i.test(Ne = De) && !/Chrome/i.test(Ne) && Ce(Ne), Ie(De)),
        Ye = (Ie(Re = De) && Ae(Re), /Firefox\//i.test(De), /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(De), Te(De)),
        ze = (/Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(De), /AppleWebKit/i.test(Me = De) && !/Chrome/i.test(Me) && !ke(Me) && !Oe(Me)),
        Ge = /Chrome/i.test(xe = De) && !ke(xe),
        We = (/CriOS/i.test(De), He && "download" in document.createElement("a")),
        Ke = function(e, t, n) { return t && Ve(e.prototype, t), n && Ve(e, n), e };

    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Je = { border: "none", margin: "0", padding: "0", width: "1px", "min-width": "100%", overflow: "hidden", display: "block", "user-select": "none", "will-change": "transform" };

    function $e(e) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, $e);
        var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, ($e.__proto__ || Object.getPrototypeOf($e)).call(this, e));
        return He && n._listenerRegistry.addEventListener(document, "transitionstart", function(e) {
            switch (e.propertyName) {
                case "opacity":
                case "transform":
                case "visibility":
                    var t = e.target;
                    n._isMounted() && t.contains(n._iframe) && n._forceRepaint()
            }
        }, { passive: !0 }), n
    }
    var Xe = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }($e, _e), Ke($e, [{ key: "update", value: function(e) { this.send({ action: "stripe-user-update", payload: e }) } }, {
            key: "updateStyle",
            value: function(t) {
                var n = this;
                Object.keys(t).forEach(function(e) { n._iframe.style[e] = t[e] })
            }
        }, { key: "focus", value: function() { this.loaded && (He ? this._iframe.focus() : this.send({ action: "stripe-user-focus", payload: {} })) } }, { key: "blur", value: function() { this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur(), document.activeElement === this._iframe && (window.focus(), document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur())) } }, { key: "clear", value: function() { this.send({ action: "stripe-user-clear", payload: {} }) } }, { key: "_createIFrame", value: function(e, t, n) { var r = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 }($e.prototype.__proto__ || Object.getPrototypeOf($e.prototype), "_createIFrame", this).call(this, e, t, n); return r.setAttribute("title", "Secure payment input frame"), Object(ie.d)(r, Je), r } }, {
            key: "_forceRepaint",
            value: function() {
                var e = this._iframe,
                    t = e.style.display;
                e.style.display = "none";
                var n = e.offsetHeight;
                return e.style.display = t, n
            }
        }]), $e),
        Ze = m(15),
        Qe = m(14),
        et = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var tt = { display: "block", position: "fixed", "z-index": "2147483647", background: "rgba(40,40,40,0)", transition: "background 400ms ease", "will-change": "background", top: "0", left: "0", right: "0", bottom: "0" },
        nt = et({}, tt, { background: "rgba(40,40,40,0.75)" }),
        rt = function e(t) {
            var n = this,
                r = t.lockScrolling,
                o = t.lockFocus,
                a = t.lockFocusOn,
                i = t.listenerRegistry;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.domElement = document.createElement("div"), this._runOnHide = [], this.mount = function() {
                var e = Object(ie.a)();
                n.domElement.style.display = "none", e.contains(n.domElement) || e.insertBefore(n.domElement, e.firstChild)
            }, this.show = function() {
                var e, t;
                Object(ie.d)(n.domElement, tt), n._lockScrolling && (e = Object(Ze.a)(), n._runOnHide.push(e)), n._lockFocus && (t = Object(Qe.a)(n._lockFocusOn).restoreFocus, n._runOnHide.push(t))
            }, this.fadeIn = function() { setTimeout(function() { Object(ie.d)(n.domElement, nt) }) }, this.fadeOut = function() { return new ae.a(function(e) { Object(ie.d)(n.domElement, tt), setTimeout(e, 500), n._listenerRegistry.addEventListener(n.domElement, "transitionend", e) }).then(function() { for (n.domElement.style.display = "none"; n._runOnHide.length;) n._runOnHide.pop()() }) }, this.unmount = function() { Object(ie.a)().removeChild(n.domElement) }, this._lockScrolling = !!r, this._lockFocus = !!o, this._lockFocusOn = a || null, this._listenerRegistry = i
        },
        ot = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 };
    var at = { position: "absolute", left: "0", top: "0", height: "100%", width: "100%" };

    function it(e) {
        var t = e.type,
            n = e.controllerId,
            r = e.listenerRegistry,
            o = e.options;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, it);
        var a = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (it.__proto__ || Object.getPrototypeOf(it)).call(this, { type: t, controllerId: n, listenerRegistry: r, appParams: o }));
        return a._autoMount = function() { a.appendTo(a._backdrop.domElement), a._backdrop.mount() }, a.show = function() { a._backdrop.show(), Object(ie.d)(a._iframe, at) }, a.fadeInBackdrop = function() { a._backdrop.fadeIn() }, a._backdropFadeoutPromise = null, a.fadeOutBackdrop = function() { return a._backdropFadeoutPromise || (a._backdropFadeoutPromise = a._backdrop.fadeOut()), a._backdropFadeoutPromise }, a.destroy = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                t = a.fadeOutBackdrop().then(function() { a._backdrop.unmount(), e || ot(it.prototype.__proto__ || Object.getPrototypeOf(it.prototype), "destroy", a).call(a) });
            return e && ot(it.prototype.__proto__ || Object.getPrototypeOf(it.prototype), "destroy", a).call(a), t
        }, a._backdrop = new rt({ lockScrolling: !0, lockFocus: !0, lockFocusOn: a._iframe, listenerRegistry: r }), a._autoMount(), a
    }
    var ct = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(it, _e), it),
        st = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        lt = function(e, t, n) { return t && pt(e.prototype, t), n && pt(e, n), e };

    function pt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var dt = { display: "block", position: "absolute", "z-index": "1000", width: "1px", "min-width": "100%", margin: "2px 0 0 0", padding: "0", border: "none", overflow: "hidden" };

    function ft() {
        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ft),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (ft.__proto__ || Object.getPrototypeOf(ft)).apply(this, arguments))
    }

    function mt(e) {
        var t = e.name,
            n = e.value,
            r = e.expiresIn,
            o = e.path,
            a = e.domain,
            i = new Date,
            c = r || 31536e6;
        i.setTime(i.getTime() + c);
        var s = o || "/",
            u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
            l = encodeURIComponent(t) + "=" + u + ";expires=" + i.toGMTString() + ";path=" + s + ";SameSite=Lax";
        return a && (l += ";domain=" + a), document.cookie = l
    }

    function ht(n) { var e = Object(w.a)(document.cookie.split("; "), function(e) { var t = e.indexOf("="); return decodeURIComponent(e.substr(0, t)) === n }); if (e) { var t = e.indexOf("="); return decodeURIComponent(e.substr(t + 1)) } return null }

    function _t(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
    var yt = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ft, _e), lt(ft, [{
            key: "updateStyle",
            value: function(t) {
                var n = this;
                Object.keys(t).forEach(function(e) { n._iframe.style[e] = t[e] })
            }
        }, { key: "update", value: function(e) { this.send({ action: "stripe-user-update", payload: e }) } }, { key: "_createIFrame", value: function(e, t, n) { var r = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 }(ft.prototype.__proto__ || Object.getPrototypeOf(ft.prototype), "_createIFrame", this).call(this, e, t, n && "object" === (void 0 === n ? "undefined" : ut(n)) ? st({}, n, { isSecondaryFrame: !0 }) : n); return Object(ie.d)(r, dt), r.style.height = "0", r } }]), ft),
        bt = m(11),
        vt = ["button", "checkbox", "file", "hidden", "image", "submit", "radio", "reset"],
        gt = function(e) { var t = e.tagName; if (e.isContentEditable || "TEXTAREA" === t) return !0; if ("INPUT" !== t) return !1; var n = e.getAttribute("type"); return -1 === vt.indexOf(n) },
        wt = function(e) {
            var u = {};
            return e.replace(/\+/g, " ").split("&").forEach(function(e, t) {
                var n, r = e.split("="),
                    o = decodeURIComponent(r[0]),
                    a = u,
                    i = 0,
                    c = o.split("]["),
                    s = c.length - 1,
                    s = /\[/.test(c[0]) && /\]$/.test(c[s]) ? (c[s] = c[s].replace(/\]$/, ""), (c = c.shift().split("[").concat(c)).length - 1) : 0;
                if (!(0 <= c.indexOf("__proto__")))
                    if (2 === r.length)
                        if (n = decodeURIComponent(r[1]), s)
                            for (; i <= s; i++) {
                                if (o = "" === c[i] ? a.length : c[i], !_t(a, o) && a[o]) return;
                                a[o] = i < s ? a[o] || (c[i + 1] && isNaN(c[i + 1]) ? {} : []) : n, a = a[o]
                            } else if (Array.isArray(u[o])) u[o].push(n);
                            else if (void 0 !== u[o]) {
                    if (!_t(u, o)) return;
                    u[o] = [u[o], n]
                } else u[o] = n;
                else o && (u[o] = "")
            }), u
        },
        Et = m(18),
        St = m.n(Et),
        Pt = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function Ot(e) { return e && "object" === (void 0 === e ? "undefined" : kt(e)) && (e.constructor === Array || e.constructor === Object) }

    function Tt(e) { return Ot(e) ? Array.isArray(e) ? e.slice(0, e.length) : Pt({}, e) : e }

    function At(i) {
        return function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (Array.isArray(t[0]) && i) return Tt(t[0]);
            var a = Array.isArray(t[0]) ? [] : {};
            return t.forEach(function(o) {
                o && Object.keys(o).forEach(function(e) {
                    var t = a[e],
                        n = o[e],
                        r = Ot(t) && !(i && Array.isArray(t));
                    "object" === (void 0 === n ? "undefined" : kt(n)) && r ? a[e] = At(i)(t, Tt(n)) : void 0 !== n ? a[e] = (Ot(n) ? At(i) : Tt)(n) : void 0 !== t && (a[e] = t)
                })
            }), a
        }
    }
    var It = At(!1),
        Ct = At(!0),
        jt = ee.l.replace(/\/$/, "");
    var Nt = "_1776170249",
        Rt = function(e) {
            var t, n, r, o = (r = !0, (n = Nt) in (t = {}) ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t);
            try {
                var a = wt(e.slice(e.indexOf("?") + 1));
                Object.keys(a).forEach(function(e) {
                    var t = St()(e),
                        n = a[e];
                    t === Nt && "false" === n && (o[t] = !1)
                })
            } catch (e) {}
            return o
        }(function(e) {
            try {
                if (e.currentScript) return e.currentScript.src;
                var t = e.querySelectorAll('script[src^="' + jt + '"]'),
                    n = Object(w.a)(t, function(e) { var t = (e.getAttribute("src") || "").split("?")[0]; return new RegExp("^" + jt + "/?$").test(t) });
                return n && n.getAttribute("src") || ""
            } catch (e) { return "" }
        }(document))[Nt],
        Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        xt = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Lt = function() { var o = []; return { addEventListener: function(e, t, n, r) { e.addEventListener(t, n, r), o.push([e, t, n, r]) }, removeEventListener: function(d, f, m, h) { d.removeEventListener(f, m, h), o = o.filter(function(e) { return t = e, n = xt([d, f, m, h], 4), r = n[0], o = n[1], a = n[2], i = n[3], c = xt(t, 4), s = c[0], u = c[1], l = c[2], p = c[3], s !== r || u !== o || l !== a || !0 === ("object" === (void 0 === i ? "undefined" : Mt(i)) && i ? i.capture : i) != (!0 === ("object" === (void 0 === p ? "undefined" : Mt(p)) && p ? p.capture : p)); var t, n, r, o, a, i, c, s, u, l, p }) } } };

    function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Bt(e) { return 42 === e.length }

    function Ft(e, t, n) { return n ? !e || !Bt(e) && Bt(t) ? t : e : z() }
    var qt = "__privateStripeMetricsController",
        Ut = { MERCHANT: "merchant", SESSION: "session" },
        Ht = "NA",
        Yt = (function(e, t, n) { return t && Dt(e.prototype, t), n && Dt(e, n), e }(zt, [{ key: "ids", value: function() { return { guid: this._guid, muid: this._muid, sid: this._sid } } }, { key: "idsPromise", value: function() { var e = this; return this._idsPromise.then(function() { return e.ids() }) } }, {
            key: "_establishMessageChannel",
            value: function(e) {
                if (!Rt) return this._guid = z(), void e();
                this._listenerRegistry.addEventListener(window, "message", this._handleMessage(e))
            }
        }, {
            key: "_startIntervalCheck",
            value: function() {
                var t = this,
                    n = window.location.href;
                setInterval(function() {
                    var e = window.location.href;
                    e !== n && (t.send(function(e) { return { action: "ping", payload: { sid: e.sid, muid: e.muid, title: document.title, referrer: document.referrer, url: document.location.href, version: 6 } } }), n = e)
                }, 5e3)
            }
        }, { key: "report", value: function(t, n) { this.send(function(e) { return { action: "track", payload: { sid: e.sid, muid: e.muid, url: document.location.href, source: t, data: n, version: 6 } } }) } }, {
            key: "send",
            value: function(e) {
                var t = this;
                this._idsPromise.then(function() { try { t._controllerFrame && t._controllerFrame.send(e(t.ids())) } catch (e) {} })
            }
        }, {
            key: "_testLatency",
            value: function() {
                var n = this,
                    r = new Date;
                this._listenerRegistry.addEventListener(document, "mousemove", function e() {
                    try {
                        var t = new Date;
                        n._latencies.push(t - r), 10 <= n._latencies.length && (n.report("mouse-timings-10", n._latencies), n._listenerRegistry.removeEventListener(document, "mousemove", e)), r = t
                    } catch (e) {}
                })
            }
        }, { key: "_extractMetaReferrerPolicy", value: function() { var e = document.querySelector("meta[name=referrer]"); return null != e && e instanceof HTMLMetaElement ? e.content.toLowerCase() : null } }, {
            key: "_extractUrl",
            value: function(e) {
                var t = document.location.href;
                switch (e) {
                    case "origin":
                    case "strict-origin":
                    case "origin-when-cross-origin":
                    case "strict-origin-when-cross-origin":
                        return document.location.origin;
                    case "unsafe-url":
                        return t.split("#")[0];
                    default:
                        return t
                }
            }
        }, {
            key: "_buildFrameQueryString",
            value: function() {
                var e = this._extractMetaReferrerPolicy(),
                    t = this._extractUrl(e),
                    n = { url: t, title: document.title, referrer: document.referrer, muid: this._muid, sid: this._sid, version: 6, preview: Object(bt.c)(t) };
                return null != e && (n.metaReferrerPolicy = e), Object.keys(n).map(function(e) { return null != n[e] ? e + "=" + encodeURIComponent(n[e].toString()) : null }).join("&")
            }
        }, {
            key: "_getID",
            value: function(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : Ht;
                switch (e) {
                    case Ut.MERCHANT:
                        if (this._doNotPersist) return Ft(this._muid, n, Rt);
                        try {
                            var r = "__stripe_mid",
                                o = Ft(ht(r), n, Rt);
                            return Bt(o) && mt({ name: r, value: o, domain: "." + document.location.hostname }), o
                        } catch (e) { return Ht }
                    case Ut.SESSION:
                        if (this._doNotPersist) return Ft(this._sid, n, Rt);
                        try {
                            var a = "__stripe_sid",
                                i = Ft(ht(a), n, Rt);
                            return Bt(i) && mt({ name: a, value: i, domain: "." + document.location.hostname, expiresIn: 18e5 }), i
                        } catch (e) { return Ht }
                    default:
                        throw new Error("Invalid ID type specified: " + e)
                }
            }
        }]), zt);

    function zt() {
        var e, t, n, l = this,
            r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, zt), this._controllerFrame = null, this._latencies = [], this._handleMessage = function(u) {
            return function(e) {
                var t = e.data,
                    n = e.origin;
                if (Object(bt.c)(n) && "string" == typeof t) try {
                    var r, o, a, i = JSON.parse(t),
                        c = i.originatingScript,
                        s = i.payload;
                    "m2" === c && (r = s.guid, o = s.muid, a = s.sid, l._guid = r, l._muid = l._getID(Ut.MERCHANT, o), l._sid = l._getID(Ut.SESSION, a), u())
                } catch (e) {}
            }
        }, r.checkoutIds ? (t = (e = r.checkoutIds).muid, n = e.sid, this._guid = Ht, this._muid = t, this._sid = n, this._doNotPersist = !0) : (this._guid = Ht, this._muid = this._getID(Ut.MERCHANT), this._sid = this._getID(Ut.SESSION), this._doNotPersist = !1), this._listenerRegistry = Lt(), this._idsPromise = new ae.a(function(e) { l._establishMessageChannel(e) }), this._id = re(qt), Rt && (this._controllerFrame = new Le({ type: ee.c.METRICS_CONTROLLER, controllerId: this._id, listenerRegistry: this._listenerRegistry, autoload: !0, appParams: this._buildFrameQueryString() }), this._startIntervalCheck(), setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random()))
    }

    function Gt(e, t) { return 0 <= e.indexOf(t) }
    var Wt, Kt = null,
        Vt = function(e) { return Kt = new Yt(0 < arguments.length && void 0 !== e ? e : {}) },
        Jt = !1,
        $t = function() {
            var t = Kt;
            t && (Jt || (Jt = !0, t.send(function(e) { return { action: "ping", payload: { v2: 2, sid: e.sid, muid: e.muid, title: document.title, referrer: document.referrer, url: document.location.href, version: 6 } } }), t.send(function(e) { return { action: "track", payload: { sid: e.sid, muid: e.muid, url: document.location.href, source: "mouse-timings-10-v2", data: t._latencies, version: 6 } } })))
        },
        Xt = m(6),
        Zt = { checkout_beta_2: "checkout_beta_2", checkout_beta_3: "checkout_beta_3", checkout_beta_4: "checkout_beta_4", checkout_beta_testcards: "checkout_beta_testcards", payment_intent_beta_1: "payment_intent_beta_1", payment_intent_beta_2: "payment_intent_beta_2", payment_intent_beta_3: "payment_intent_beta_3", card_payment_method_beta_1: "card_payment_method_beta_1", acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation", cvc_update_beta_1: "cvc_update_beta_1", google_pay_beta_1: "google_pay_beta_1", acss_debit_beta_1: "acss_debit_beta_1", acss_debit_beta_2: "acss_debit_beta_2", afterpay_clearpay_pm_beta_1: "afterpay_clearpay_pm_beta_1", alipay_pm_beta_1: "alipay_pm_beta_1", au_bank_account_beta_1: "au_bank_account_beta_1", au_bank_account_beta_2: "au_bank_account_beta_2", bacs_debit_beta: "bacs_debit_beta", bancontact_pm_beta_1: "bancontact_pm_beta_1", boleto_pm_beta_1: "boleto_pm_beta_1", eps_pm_beta_1: "eps_pm_beta_1", fpx_bank_beta_1: "fpx_bank_beta_1", giropay_pm_beta_1: "giropay_pm_beta_1", grabpay_pm_beta_1: "grabpay_pm_beta_1", ideal_pm_beta_1: "ideal_pm_beta_1", konbini_pm_beta_1: "konbini_pm_beta_1", line_items_beta_1: "line_items_beta_1", oxxo_pm_beta_1: "oxxo_pm_beta_1", p24_pm_beta_1: "p24_pm_beta_1", paypal_pm_beta_1: "paypal_pm_beta_1", sepa_pm_beta_1: "sepa_pm_beta_1", sofort_pm_beta_1: "sofort_pm_beta_1", tax_product_beta_1: "tax_product_beta_1", wechat_pay_pm_beta_1: "wechat_pay_pm_beta_1", wechat_pay_pm_beta_2: "wechat_pay_pm_beta_2", checkout_beta_locales: "checkout_beta_locales", stripe_js_beta_locales: "stripe_js_beta_locales", ideal_sepa_beta_1: "ideal_sepa_beta_1", sofort_sepa_beta_1: "sofort_sepa_beta_1", bancontact_sepa_beta_1: "bancontact_sepa_beta_1", upi_beta_1: "upi_beta_1", issuing_elements_1: "issuing_elements_1", issuing_elements_2: "issuing_elements_2", return_intents_beta_1: "return_intents_beta_1", netbanking_beta_1: "netbanking_beta_1", eps_bank_beta_1: "eps_bank_beta_1", card_light_beta_1: "card_light_beta_1", no_card_light_beta_1: "no_card_light_beta_1", p24_bank_beta_1: "p24_bank_beta_1", netbanking_bank_beta_1: "netbanking_bank_beta_1", instant_debits_beta_1: "instant_debits_beta_1", expresspay_beta_1: "expresspay_beta_1", identity_dialog_1: "identity_dialog_1", id_bank_transfer_beta_1: "id_bank_transfer_beta_1", linked_accounts_beta_1: "linked_accounts_beta_1" },
        Qt = Object.freeze({ netbankingBank: "netbanking_bank_beta_1", authentication: "expresspay_beta_1", payment: "expresspay_beta_1" }),
        en = Object.keys(Zt),
        tn = !1,
        nn = function(e) { tn || "null" === (null != e ? e : window.origin) && (tn = !0, console.error("Stripe.js requires 'allow-same-origin' if sandboxed.")) };

    function rn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var on, an, cn = (rn(Wt = {}, ee.b.card, { unique: !0, conflict: [ee.b.cardNumber, ee.b.cardExpiry, ee.b.cardCvc, ee.b.postalCode], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardNumber, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardExpiry, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardCvc, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.postalCode, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.paymentRequestButton, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.iban, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.idealBank, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.p24Bank, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.auBankAccount, { unique: !0, beta: !1, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.fpxBank, { unique: !0, beta: !1, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.netbankingBank, { unique: !0, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardNumberDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardCvcDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardExpiryDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.epsBank, { unique: !0, conflict: [], beta: !0, implementation: "legacy" }), rn(Wt, ee.b.afterpayClearpayMessage, { unique: !1, conflict: [], beta: !1, implementation: "afterpay_message" }), rn(Wt, ee.b.authentication, { unique: !0, conflict: [], beta: !0, implementation: "frame" }), rn(Wt, ee.b.payment, { unique: !0, conflict: [], beta: !0, implementation: "frame" }), Wt);

    function sn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var un, ln = "__PrivateStripeElement",
        pn = ["brand"],
        dn = (sn(on = {}, ee.b.card, pn), sn(on, ee.b.cardNumber, pn), sn(on, ee.b.iban, ["country", "bankName"]), sn(on, ee.b.auBankAccount, ["bankName", "branchName"]), on),
        fn = (sn(an = {}, ee.b.idealBank, { secondary: ee.b.idealBankSecondary }), sn(an, ee.b.p24Bank, { secondary: ee.b.p24BankSecondary }), sn(an, ee.b.fpxBank, { secondary: ee.b.fpxBankSecondary }), sn(an, ee.b.netbankingBank, { secondary: ee.b.netbankingBankSecondary }), sn(an, ee.b.epsBank, { secondary: ee.b.epsBankSecondary }), an),
        mn = m(4),
        hn = m(7);

    function _n(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var yn = ln + "-input",
        bn = ln + "-safariInput",
        vn = "StripeElement",
        gn = ["ready", "focus", "blur", "escape", "change"],
        wn = (_n(un = {}, mn.a.authentication, hn.a.AUTHENTICATION_ELEMENT), _n(un, mn.a.payment, hn.a.PAYMENT_ELEMENT), un),
        En = _n({}, mn.a.authenticationPopover, hn.a.AUTHENTICATION_POPOVER_ELEMENT),
        Sn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Pn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function On(e, t) { return document.activeElement === e._iframe || e._iframe.parentElement && document.activeElement === t }

    function Tn(e) { return "object" === (void 0 === e ? "undefined" : kn(e)) && null !== e && "IntegrationError" === e.name ? new M.a("string" == typeof e.message ? e.message : "") : e }
    var An = "__privateStripeController",
        In = !1,
        Cn = {},
        jn = function(e) { return { cl: !Gt(e, "no_card_light_beta_1") && (Gt(e, "card_light_beta_1") || Math.random() < 0), clc: Math.random() < 0 } },
        Nn = (function(e, t, n) { return t && Pn(e.prototype, t), n && Pn(e, n), e }(Rn, [{ key: "registerWrapper", value: function(e) { this._controllerFrame.send({ action: "stripe-wrapper-register", payload: { wrapperLibrary: e } }) } }]), Rn);

    function Rn(e) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Rn), xn.call(this);
        var t = e.listenerRegistry,
            r = e.stripeJsLoadTimestamp,
            o = e.stripeCreateTimestamp,
            a = e.onFirstLoad,
            i = e.betas,
            c = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(e, ["listenerRegistry", "stripeJsLoadTimestamp", "stripeCreateTimestamp", "onFirstLoad", "betas"]),
            s = c.apiKey,
            u = c.stripeAccount,
            l = c.stripeJsId,
            p = c.locale;
        this._id = re(An), this._stripeJsId = l, this._apiKey = s, this._stripeAccount = u, this._listenerRegistry = t, this._betas = i, this._flags = jn(i), this._controllerFrame = new Le({ type: ee.c.CONTROLLER, betas: i, controllerId: this._id, listenerRegistry: t, appParams: Sn({}, c, { outerFlags: this._flags, betas: i, stripeJsLoadTime: r.getAsPosixTime() }) }), this._stripeJsLoadTimestamp = r, this._createTimestamp = o, this._loadCount = 0;

        function d(e) {
            var t = e.anchor;
            n._mountTimestamp = new Xt.a, t !== document.body && n.report("controller.mount.custom_container")
        }
        this._controllerFrame._isMounted() ? d({ anchor: this._controllerFrame._iframe.parentElement }) : this._controllerFrame._once("mount", d), a && this._controllerFrame._once("load", a), this._frames = {}, this._requests = {}, this._setupPostMessage(), this._handleMessage = ue(this._handleMessage, this), this.action.fetchLocale({ locale: p || "auto" })
    }

    function Mn() {
        var e = document.querySelectorAll("meta[name=viewport][content]"),
            t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : ""
    }
    var xn = function() {
            var p = this;
            this._sendCAReq = function(n) { var r = re(n.tag); return new ae.a(function(e, t) { p._requests[r] = { resolve: e, reject: t }, p._controllerFrame.send({ action: "stripe-safe-controller-action-request", payload: { nonce: r, caReq: n } }) }) }, this.keyMode = function() { return _(p._apiKey) }, this.action = { retrievePaymentIntent: function(e) { return p._sendCAReq({ tag: "RETRIEVE_PAYMENT_INTENT", value: e }) }, confirmPaymentIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_PAYMENT_INTENT", value: e }) }, cancelPaymentIntentSource: function(e) { return p._sendCAReq({ tag: "CANCEL_PAYMENT_INTENT_SOURCE", value: e }) }, confirmSetupIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_SETUP_INTENT", value: e }) }, retrieveSetupIntent: function(e) { return p._sendCAReq({ tag: "RETRIEVE_SETUP_INTENT", value: e }) }, cancelSetupIntentSource: function(e) { return p._sendCAReq({ tag: "CANCEL_SETUP_INTENT_SOURCE", value: e }) }, fetchLocale: function(e) { return p._sendCAReq({ tag: "FETCH_LOCALE", value: e }) }, updateCSSFonts: function(e) { return p._sendCAReq({ tag: "UPDATE_CSS_FONTS", value: e }) }, createApplePaySession: function(e) { return p._sendCAReq({ tag: "CREATE_APPLE_PAY_SESSION", value: e }) }, retrieveSource: function(e) { return p._sendCAReq({ tag: "RETRIEVE_SOURCE", value: e }) }, tokenizeWithElement: function(e) { return p._sendCAReq({ tag: "TOKENIZE_WITH_ELEMENT", value: e }) }, tokenizeCvcUpdate: function(e) { return p._sendCAReq({ tag: "TOKENIZE_CVC_UPDATE", value: e }) }, tokenizeWithData: function(e) { return p._sendCAReq({ tag: "TOKENIZE_WITH_DATA", value: e }) }, createSourceWithElement: function(e) { return p._sendCAReq({ tag: "CREATE_SOURCE_WITH_ELEMENT", value: e }) }, createSourceWithData: function(e) { return p._sendCAReq({ tag: "CREATE_SOURCE_WITH_DATA", value: e }) }, createPaymentMethodWithElement: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT", value: e }) }, createPaymentMethodWithData: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_METHOD_WITH_DATA", value: e }) }, createPaymentPage: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_PAGE", value: e }) }, createPaymentPageWithSession: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_PAGE_WITH_SESSION", value: e }) }, createRadarSession: function(e) { return p._sendCAReq({ tag: "CREATE_RADAR_SESSION", value: e }) }, authenticate3DS2: function(e) { return p._sendCAReq({ tag: "AUTHENTICATE_3DS2", value: e }) }, verifyMicrodepositsForPayment: function(e) { return p._sendCAReq({ tag: "VERIFY_MICRODEPOSITS_FOR_PAYMENT", value: e }) }, verifyMicrodepositsForSetup: function(e) { return p._sendCAReq({ tag: "VERIFY_MICRODEPOSITS_FOR_SETUP", value: e }) }, retrieveIssuingCardWithoutNonce: function(e) { return p._sendCAReq({ tag: "RETRIEVE_ISSUING_CARD_WITHOUT_NONCE", value: e }) }, retrieveIssuingCard: function(e) { return p._sendCAReq({ tag: "RETRIEVE_ISSUING_CARD", value: e }) }, createEphemeralKeyNonce: function(e) { return p._sendCAReq({ tag: "CREATE_EPHEMERAL_KEY_NONCE", value: e }) }, updatePaymentIntent: function(e) { return p._sendCAReq({ tag: "UPDATE_PAYMENT_INTENT", value: e }) }, createAcssDebitSession: function(e) { return p._sendCAReq({ tag: "CREATE_ACSS_DEBIT_SESSION", value: e }) }, confirmReturnIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_RETURN_INTENT", value: e }) }, localizeError: function(e) { return p._sendCAReq({ tag: "LOCALIZE_ERROR", value: e }) } }, this.createElementFrame = function(e, t, n, r) {
                var o = p._betas,
                    a = new Xe({ type: e, betas: o, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: Sn({}, r, { componentName: t, keyMode: _(p._apiKey), apiKey: p._apiKey }) });
                return p._setupFrame(a, e, n)
            }, this.createSecondaryElementFrame = function(e, t, n, r, o) {
                var a = p._betas,
                    i = new yt({ type: e, betas: a, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: Sn({}, o, { componentName: t, primaryElementType: n, keyMode: _(p._apiKey) }) });
                return p._setupFrame(i, e, r)
            }, this.createHiddenFrame = function(e, t) { var n = new we({ type: e, betas: p._betas, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: t }); return p._setupFrame(n, e) }, this.createLightboxFrame = function(e) {
                var t = e.type,
                    n = e.options,
                    r = new ct({ type: t, controllerId: p._id, listenerRegistry: p._listenerRegistry, options: Sn({}, n, { betas: p._betas }) });
                return p._setupFrame(r, t)
            }, this.getFlags = function() { return p._flags }, this._setupFrame = function(e, t, n) { return p._frames[e.id] = e, p._controllerFrame.sendPersistent({ action: "stripe-user-createframe", payload: { newFrameId: e.id, frameType: t, groupId: n } }), e._on("unload", function() { p._controllerFrame.sendPersistent({ action: "stripe-frame-unload", payload: { unloadedFrameId: e.id } }) }), e._on("destroy", function() { delete p._frames[e.id], p._controllerFrame.sendPersistent({ action: "stripe-frame-destroy", payload: { destroyedFrameId: e.id } }) }), e._on("load", function() { p._controllerFrame.sendPersistent({ action: "stripe-frame-load", payload: { loadedFrameId: e.id } }), p._controllerFrame.loaded && e.send({ action: "stripe-controller-load", payload: {} }) }), e }, this.report = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                p._controllerFrame.send({ action: "stripe-controller-report", payload: { event: e, data: t } })
            }, this.warn = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                p._controllerFrame.send({ action: "stripe-controller-warn", payload: { args: t } })
            }, this.controllerFor = function() { return "outer" }, this._setupPostMessage = function() {
                p._listenerRegistry.addEventListener(window, "message", function(e) {
                    var t = e.data,
                        n = e.origin,
                        r = e.source,
                        o = function(e) { try { var t = "string" == typeof e ? JSON.parse(e) : e; return t.__stripeJsV3 ? t : null } catch (e) { return null } }(t);
                    o && (Object(bt.a)(ee.i, n) ? p._handleMessage(o, r) : nn(n))
                })
            }, this._nodeIsKnownElement = function(e) { return e && "IFRAME" === e.nodeName && !!p._frames[e.getAttribute("name") || ""] }, this._handleMessage = function(e, t) {
                var n = e.controllerId,
                    r = e.frameId,
                    o = e.message,
                    a = p._frames[r];
                if (n === p._id) switch (o.action) {
                    case "stripe-frame-event":
                        var i = o.payload.event,
                            c = o.payload.data;
                        if (a) {
                            if (qe) {
                                var s = a._iframe.parentElement,
                                    u = s && s.querySelector("." + yn);
                                if ("focus" === i && !In && u && !On(a, u) && !Cn[r]) { u.focus(), In = !0, Cn[r] = !0, setTimeout(function() { Cn[r] = !1 }, 1e3); break }
                                if ("blur" === i && In) { In = !1; break }
                                "blur" === i && We && setTimeout(function() { var e, t, n = document.activeElement;!n || On(a, u) || gt(n) || p._nodeIsKnownElement(n) || ((e = s && s.querySelector("." + bn)) && ((t = e).disabled = !1, t.focus(), t.blur(), t.disabled = !0), n.focus()) }, 400)
                            }
                            "load" === i && (c = Sn({}, c, { source: t })), a._emit(i, c)
                        }
                        break;
                    case "stripe-frame-action-response":
                        a && a.resolve(o.payload.nonce, o.payload.faRes);
                        break;
                    case "stripe-frame-action-error":
                        a && a.reject(o.payload.nonce, Tn(o.payload.faErr));
                        break;
                    case "stripe-frame-error":
                        throw new M.a(o.payload.message);
                    case "stripe-integration-error":
                        a && a._emit("__privateIntegrationError", { message: o.payload.message });
                        break;
                    case "stripe-controller-load":
                        p._controllerFrame._emit("load", { source: t }), p._loadCount++, Object.keys(p._frames).forEach(function(e) { return p._frames[e].send({ action: "stripe-controller-load", payload: {} }) });
                        var l = p._createTimestamp.getAsPosixTime();
                        p._controllerFrame.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: p._stripeJsLoadTimestamp.getAsPosixTime(), stripeCreate: l, create: l, mount: p._mountTimestamp.getAsPosixTime() }, loadCount: p._loadCount, matchFrame: t === p._controllerFrame._iframe.contentWindow, rtl: !1, paymentRequestButtonType: null } });
                        break;
                    case "stripe-safe-controller-action-response":
                        p._requests[o.payload.nonce] && p._requests[o.payload.nonce].resolve(o.payload.caRes);
                        break;
                    case "stripe-safe-controller-action-error":
                        p._requests[o.payload.nonce] && p._requests[o.payload.nonce].reject(Tn(o.payload.caErr));
                        break;
                    case "stripe-api-call":
                        $t()
                }
            }
        },
        Ln = Nn;

    function Dn() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Dn); var e = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (Dn.__proto__ || Object.getPrototypeOf(Dn)).call(this)); return e.name = "NetworkError", e.type = "network_error", e }
    var Bn = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(Dn, Error), Dn),
        Fn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        qn = function f(m) {
            return new ae.a(function(e, t) {
                var n = m.method,
                    r = m.url,
                    o = m.data,
                    a = m.headers,
                    i = m.withCredentials,
                    c = m.contentType,
                    s = void 0 === c ? "application/x-www-form-urlencoded" : c,
                    u = "";
                o && "application/x-www-form-urlencoded" === s ? u = Object(oe.a)(o) : o && "application/json" === s && (u = JSON.stringify(o));
                var l = "GET" === n && u ? r + "?" + u : r,
                    p = "GET" === n ? "" : u,
                    d = new XMLHttpRequest;
                i && (d.withCredentials = i), d.open(n, l, !0), d.setRequestHeader("Accept", "application/json"), d.setRequestHeader("Content-Type", s), a && Object.keys(a).forEach(function(e) { var t = a[e]; "string" == typeof t && d.setRequestHeader(e, t) }), d.onreadystatechange = function() { 4 === d.readyState && (d.onreadystatechange = function() {}, 0 === d.status ? i ? t(new Bn) : f(Fn({}, m, { withCredentials: !0 })).then(e, t) : e(d)) };
                try { d.send(p) } catch (e) { t(e) }
            })
        },
        Un = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Hn(e, s) {
        var t = e.reduce(function(e, t) {
            var n, r, o, a = function(e, t) {
                    var n = e.indexOf(":");
                    if (-1 === n) throw new M.a("Invalid css declaration in file from " + t + ': "' + e + '"');
                    var r = e.slice(0, n).trim(),
                        o = ee.a[r];
                    if (!o) throw new M.a("Unsupported css property in file from " + t + ': "' + r + '"');
                    return { property: o, value: e.slice(n + 1).trim() }
                }(t, s),
                i = a.property,
                c = a.value;
            return Un({}, e, (o = c, (r = i) in (n = {}) ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = o, n))
        }, {});
        return ["family", "src"].forEach(function(e) { if (!t[e]) throw new M.a("Missing css property in file from " + s + ': "' + ee.h[e] + '"') }), t
    }

    function Yn(e, t) { var n, r, o, a = "string" == typeof(n = e) && Object(w.a)(Object.keys(cn), function(e) { return e === n }) || null; if (!a || (r = t, (o = Qt[a]) && !Gt(r, o))) { var i = "string" == typeof e ? e : void 0 === e ? "undefined" : Kn(e); throw new M.a("A valid Element name must be provided. Valid Elements are:\n  " + Object.keys(cn).filter(function(e) { return !cn[e].beta }).join(", ") + "; you passed: " + i + ".") } }
    var zn, Gn = function(r) {
            return qn({ url: r, method: "GET" }).then(function(e) { return e.responseText }).then(function(e) {
                return function(e, t) { var n = e.match(/@font-face[ ]?{[^}]*}/g); if (!n) throw new M.a("No @font-face rules found in file from " + t); return n }(e, r).map(function(e) {
                    var t, n = function(e, t) {
                        var n = e.replace(/\/\*.*\*\//g, "").trim(),
                            r = (n.length && /;$/.test(n) ? n : n + ";").match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
                        if (!r) throw new M.a("Found @font-face rule containing no valid font-properties in file from " + t);
                        return r
                    }((t = e.match(/@font-face[ ]?{([^}]*)}/)) ? t[1] : "", r);
                    return Hn(n, r)
                })
            })
        },
        Wn = (zn = [], function(e, t) { return Gt(t, Zt.stripe_js_beta_locales) || -1 === zn.indexOf(e) ? e : "auto" }),
        Kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Vn = function(e, t, n) {
            var r, o = 0 < arguments.length && void 0 !== e ? e : "1.2em",
                a = 1 < arguments.length && void 0 !== t ? t : "14px",
                i = 1 === (r = (2 < arguments.length && void 0 !== n ? n : "0").split(" ").map(function(e) { return parseInt(e.trim(), 10) })).length || 2 === r.length ? 2 * r[0] : 3 === r.length || 4 === r.length ? r[0] + r[2] : 0;
            if ("string" == typeof o && /^[0-9.]+px$/.test(o)) return parseFloat(o.toString().replace(/[^0-9.]/g, "")) + i + "px";
            var c = parseFloat(o.toString().replace(/[^0-9.]/g, "")),
                s = parseFloat("14px".replace(/[^0-9.]/g, "")),
                u = parseFloat(a.toString().replace(/[^0-9.]/g, "")),
                l = void 0;
            if ("string" == typeof a && /^(\d+|\d*\.\d+)px$/.test(a)) l = u;
            else if ("string" == typeof a && /^(\d+|\d*\.\d+)em$/.test(a)) l = u * s;
            else if ("string" == typeof a && /^(\d+|\d*\.\d+)%$/.test(a)) l = u / 100 * s;
            else {
                if ("string" != typeof a || !/^[\d.]+$/.test(a) && !/^\d*\.(px|em|%)$/.test(a)) return "100%";
                l = s
            }
            var p = c * l + i + "px";
            return /^[0-9.]+px$/.test(p) ? p : "100%"
        },
        Jn = m(13),
        $n = function(e, n) { return e.reduce(function(e, t) { return e.then(function(e) { return "SATISFIED" === e.type ? e : t().then(function(e) { return n(e) ? { type: "SATISFIED", value: e } : { type: "UNSATISFIED" } }) }) }, ae.a.resolve({ type: "UNSATISFIED" })) },
        Xn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Zn = { success: "success", fail: "fail", invalid_shipping_address: "invalid_shipping_address" },
        Qn = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
        er = Xn({ success: "success" }, { fail: "fail", invalid_payer_name: "invalid_payer_name", invalid_payer_email: "invalid_payer_email", invalid_payer_phone: "invalid_payer_phone", invalid_shipping_address: "invalid_shipping_address" }),
        tr = { merchantCapabilities: ["supports3DS"], displayItems: [] };

    function nr(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function rr(e) { if (window.ApplePaySession) try { return window.ApplePaySession.supportsVersion(e) } catch (e) { return } }
    var or = Z({ amount: function(e, t) { return L(!0)(e, t) }, label: C, pending: S(N) }),
        ar = Z({ amount: D, label: C, pending: S(N) }),
        ir = Z({ amount: D, label: C, pending: S(N), id: j(C, function() { return re("shippingOption") }), detail: j(C, function() { return "" }) }),
        cr = A.apply(void 0, nr(Object.keys(Qn))),
        sr = Z({ origin: C, name: C }),
        ur = Z({ displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), wallets: S(F($)), disableWallets: S(F($)), total: or, requestShipping: S(N), requestPayerName: S(N), requestPayerEmail: S(N), requestPayerPhone: S(N), shippingType: S(cr), currency: J, country: V, jcbEnabled: S(N), __billingDetailsEmailOverride: S(C), __minApplePayVersion: S(R), __merchantDetails: S(sr), __isCheckout: S(N), __betas: S(F(I.apply(void 0, nr(en)))) }),
        lr = X({ currency: S(J), displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), total: S(or) }),
        pr = Z({ displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), total: S(or), status: function(e, t) { return A.apply(void 0, nr(Object.keys(Zn)))(-1 !== ["invalid_payer_name", "invalid_payer_email", "invalid_payer_phone"].indexOf(e) ? "fail" : e, t) } }),
        dr = A.apply(void 0, nr(Object.keys(er))),
        fr = function() { return window.ApplePaySession ? ["APPLE_PAY"] : ["GOOGLE_PAY", "BROWSER"] },
        mr = function(e) { var t = []; return window.ApplePaySession ? n(e, i.applePay) && t.push("APPLE_PAY") : (n(e, i.googlePay) && (t.push("GOOGLE_PAY"), Ue && t.push("BROWSER")), n(e, i.browserCard) && -1 === t.indexOf("BROWSER") && t.push("BROWSER")), t },
        hr = m(10),
        _r = 2,
        yr = Object(hr.b)(function(e) { return window.ApplePaySession.canMakePaymentsWithActiveCard(e) }),
        br = function(n, r, o, a, e) {
            var t = 4 < arguments.length && void 0 !== e ? e : _r,
                i = Math.max(_r, t);
            if (window.ApplePaySession) { if (function() { try { return window.location.origin === window.top.location.origin } catch (e) { return !1 } }()) { if (window.ApplePaySession.supportsVersion(i)) { var c = "merchant." + (r ? [n, r] : [n]).join(".") + ".stripe"; return yr(c).then(function(e) { var t; return a("pr.apple_pay.can_make_payment_native_response", { available: e }), o && !e && window.console && (t = r ? "or stripeAccount parameter (" + r + ") " : "", window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + n + ") " + t + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")), e }) } return o && window.console && window.console.warn("This version of Safari does not support ApplePay JS version " + i + "."), ae.a.resolve(!1) } return ae.a.resolve(!1) }
            return ae.a.resolve(!1)
        };

    function vr(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function gr(e, t) { var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(kr) : kr; return -1 !== Or.indexOf(e) ? ["amex"].concat(vr(n)) : n }

    function wr(e, t) { var n, r = { unitSize: 1 / (n = Tr[t.toLowerCase()] || 100), fractionDigits: Math.ceil(Math.log(n) / Math.log(10)) }; return (e * r.unitSize).toFixed(r.fractionDigits) }
    var Er, Sr, Pr, kr = ["mastercard", "visa"],
        Or = ["AT", "AU", "BE", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "IE", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NO", "NZ", "PL", "PT", "SE", "SG", "US"],
        Tr = { bif: 1, clp: 1, djf: 1, gnf: 1, jpy: 1, kmf: 1, krw: 1, mga: 1, pyg: 1, rwf: 1, vnd: 1, vuv: 1, xaf: 1, xof: 1, xpf: 1, bhd: 1e3, jod: 1e3, kwd: 1e3, omr: 1e3, tnd: 1e3 },
        Ar = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ir(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Cr(e, t) { return { amount: wr(e.amount, t.currency), label: e.label, type: e.pending ? "pending" : "final" } }

    function jr(e, t) { return new window.ApplePayError(e, t) }

    function Nr(t) { return function(e) { return e[t] && "string" == typeof e[t] ? e[t].toUpperCase() : null } }
    var Rr, Mr = (Ir(Er = {}, er.success, 0), Ir(Er, er.fail, 1), Ir(Er, er.invalid_payer_name, 2), Ir(Er, er.invalid_shipping_address, 3), Ir(Er, er.invalid_payer_phone, 4), Ir(Er, er.invalid_payer_email, 4), Er),
        xr = (Ir(Sr = {}, er.success, function() { return null }), Ir(Sr, er.fail, function() { return null }), Ir(Sr, er.invalid_payer_name, function() { return jr("billingContactInvalid", "name") }), Ir(Sr, er.invalid_shipping_address, function() { return jr("shippingContactInvalid", "postalAddress") }), Ir(Sr, er.invalid_payer_phone, function() { return jr("shippingContactInvalid", "phoneNumber") }), Ir(Sr, er.invalid_payer_email, function() { return jr("shippingContactInvalid", "emailAddress") }), Sr),
        Lr = (Ir(Pr = {}, Qn.pickup, "storePickup"), Ir(Pr, Qn.shipping, "shipping"), Ir(Pr, Qn.delivery, "delivery"), Pr),
        Dr = { total: function(e) { return Cr(e.total, e) }, lineItems: function(t) { return t.displayItems ? t.displayItems.map(function(e) { return Cr(e, t) }) : [] }, shippingMethods: function(r) { return r.shippingOptions ? r.shippingOptions.map(function(e) { return n = r, { amount: wr((t = e).amount, n.currency), label: t.label, detail: t.detail, identifier: t.id }; var t, n }) : [] }, applicationData: function(e) { return e.applicationData || null } },
        Br = { shippingType: function(e) { var t = e.shippingType; if (!t) return null; var n = Lr[t]; if (void 0 !== n) return n; throw new M.a("Invalid value for shippingType: " + t) }, requiredBillingContactFields: function(e) { return e.requestPayerName ? ["postalAddress"] : null }, requiredShippingContactFields: function(e) { var t = []; return e.requestShipping && t.push("postalAddress"), e.requestPayerEmail && t.push("email"), e.requestPayerPhone && t.push("phone"), t.length ? t : null }, countryCode: Nr("country"), currencyCode: Nr("currency"), merchantCapabilities: (Rr = "merchantCapabilities", function(e) { return e[Rr] || null }), supportedNetworks: function(e) { var t, n, r = (t = e.country, n = e.jcbEnabled || !1, gr(t, n).reduce(function(e, t) { return "mastercard" === t ? [].concat(vr(e), ["masterCard"]) : "diners" === t ? e : [].concat(vr(e), [t]) }, [])); return rr(4) && r.push("maestro"), r } },
        Fr = { status: function(e) { var t = Mr[e.status]; return rr(3) && 1 < t ? 1 : t }, error: function(e) { return rr(3) ? xr[e.status]() : null } },
        qr = Ar({}, Dr, Br),
        Ur = Ar({}, Dr, Fr),
        Hr = function(e) { var r = Ar({}, tr, e); return Object.keys(qr).reduce(function(e, t) { var n = (0, qr[t])(r); return null !== n ? Ar({}, e, Ir({}, t, n)) : e }, {}) },
        Yr = function(r) { return Object.keys(Ur).reduce(function(e, t) { var n = (0, Ur[t])(r); return null !== n ? Ar({}, e, Ir({}, t, n)) : e }, {}) };

    function zr(e) { return "string" == typeof e ? e : null }

    function Gr(e) { return e ? [e.givenName, e.familyName].filter(function(e) { return e && "string" == typeof e }).join(" ") : null }
    var Wr = function(e) {
            var t = e.addressLines,
                n = e.countryCode,
                r = e.postalCode,
                o = e.administrativeArea,
                a = e.locality,
                i = e.phoneNumber,
                c = zr(n);
            return { addressLine: Array.isArray(t) ? t.reduce(function(e, t) { return "string" == typeof t ? [].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e), [t]) : e }, []) : [], country: c ? c.toUpperCase() : "", postalCode: zr(r) || "", recipient: Gr(e) || "", region: zr(o) || "", city: zr(a) || "", phone: zr(i) || "", sortingCode: "", dependentLocality: "", organization: "" }
        },
        Kr = function(e, t) {
            var n = e.identifier,
                r = e.label;
            return t.filter(function(e) { return e.id === n && e.label === r })[0]
        },
        Vr = function(e, t) {
            var n, r, o = e.shippingContact,
                a = e.shippingMethod,
                i = e.billingContact;
            return { shippingOption: a && t.shippingOptions && t.shippingOptions.length ? Kr(a, t.shippingOptions) : null, shippingAddress: o ? Wr(o) : null, payerEmail: (r = o) ? zr(r.emailAddress) : null, payerPhone: (n = o) ? zr(n.phoneNumber) : null, payerName: Gr(i), walletName: "applePay", methodName: "apple-pay" }
        },
        Jr = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function $r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
    var Zr = { austria: "AT", sterreich: "AT", csterreich: "AT", au: "AU", australia: "AU", belgium: "BE", br: "BR", brasil: "BR", brazil: "BR", ca: "CA", canada: "CA", ch: "CH", schweiz: "CH", switzerland: "CH", china: "CN", czechrepublic: "CZ", de: "DE", deutschland: "DE", germany: "DE", danmark: "DK", denmark: "DK", es: "ES", espaa: "ES", spain: "ES", finland: "FI", suomi: "FI", fr: "FR", hk: "HK", hongkong: "HK", england: "GB", gb: "GB", uk: "GB", unitedkingdom: "GB", scotland: "GB", wales: "GB", it: "IT", italy: "IT", italia: "IT", japan: "JP", lietuva: "LT", luxembourg: "LU", netherlands: "NL", nederland: "NL", norway: "NO", poland: "PL", polska: "PL", russia: "RU", saudiarabia: "SA", se: "SE", sweden: "SE", sverige: "SE", singapore: "SG", us: "US", usa: "US", unitedstatesofamerica: "US", unitedstates: "US", estadosunidos: "US" },
        Qr = function(e, t) { return e && "object" === (void 0 === e ? "undefined" : Xr(e)) ? t(e) : null };

    function eo(e) {
        var c = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, eo), this._onEvent = function() {}, this.setEventHandler = function(e) { c._onEvent = e }, this.canMakePayment = function() { return br(window.location.hostname, c._authentication.accountId, _(c._authentication.apiKey) === s.test, c._report, c._minimumVersion) }, this.update = function(e) { c._initialPaymentRequest = Ct(c._paymentRequestOptions, e), c._initializeSessionState() }, this.show = function() {
            c._initializeSessionState();
            var e = void 0;
            try { e = new window.ApplePaySession(c._minimumVersion, Hr(c._paymentRequestOptions)) } catch (e) { throw "Must create a new ApplePaySession from a user gesture handler." === e.message ? new M.a("show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).") : e }
            c._privateSession = e, c._setupSession(e, c._usesButtonElement()), e.begin(), c._isShowing = !0
        }, this.abort = function() { c._privateSession && c._privateSession.abort() }, this._warn = function(e) {}, this._report = function(e, t) { c._controller.report(e, Jr({}, t, { backingLibrary: "APPLE_PAY", usesButtonElement: c._usesButtonElement() })) }, this._validateMerchant = function(t, n) {
            return function(e) {
                c._controller.action.createApplePaySession({ data: { validation_url: e.validationURL, domain_name: window.location.hostname, display_name: c._paymentRequestOptions.total.label }, usesButtonElement: n }).then(function(e) {
                    if (c._isShowing) switch (e.type) {
                        case "object":
                            t.completeMerchantValidation(JSON.parse(e.object.session));
                            break;
                        case "error":
                            c._handleValidationError(t)(e.error);
                            break;
                        default:
                            Object(T.a)(e)
                    }
                }, c._handleValidationError(t))
            }
        }, this._handleValidationError = function(n) { return function(e) { c._report("error.pr.apple_pay.session_creation_failed", { error: e }), n.abort(); var t = e.message; "string" == typeof t && c._controller.warn(t) } }, this._paymentAuthorized = function(a) {
            return function(e) {
                var o = e.payment,
                    t = c._usesButtonElement() ? ee.b.paymentRequestButton : null;
                c._controller.action.tokenizeWithData({ type: "apple_pay", elementName: t, tokenData: Jr({}, o, { billingContact: Qr(o.billingContact, c._normalizeContact) }), mids: c._mids }).then(function(e) { var t, n, r; "error" === e.type ? (a.completePayment(window.ApplePaySession.STATUS_FAILURE), c._report("error.pr.create_token_failed", { error: e.error })) : (t = Qr(o.shippingContact, c._normalizeContact), n = Qr(o.billingContact, c._normalizeContact), t && c._paymentRequestOptions.requestShipping && !t.countryCode && a.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS), r = Vr({ shippingContact: t, billingContact: n }, c._paymentRequestOptions), c._onToken(a)(Jr({}, r, { shippingOption: c._privateShippingOption, token: e.object }))) })
            }
        }, this._normalizeContact = function(e) {
            if (e.country && "string" == typeof e.country) {
                var t = e.country.toLowerCase().replace(/[^a-z]+/g, ""),
                    n = void 0;
                return e.countryCode ? "string" == typeof e.countryCode && (n = e.countryCode.toUpperCase()) : (n = Zr[t]) || c._report("warn.pr.apple_pay.missing_country_code", { country: e.country }), Jr({}, e, { countryCode: n })
            }
            return e
        }, this._onToken = function(t) { return function(e) { c._onEvent({ type: "paymentresponse", payload: Jr({}, e, { complete: se(c._completePayment(t)) }) }) } }, this._completePayment = function(o) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, { status: e });
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.error;
                c._isShowing && (r ? o.completePayment({ status: n, errors: [r] }) : o.completePayment(n)), (0 === n || 1 === n && null == r) && (c._isShowing = !1, c._onEvent && c._onEvent({ type: "close" }))
            }
        }, this._shippingContactSelected = function(t) { return function(e) { c._onEvent({ type: "shippingaddresschange", payload: { shippingAddress: Wr(c._normalizeContact(e.shippingContact)), updateWith: se(c._completeShippingContactSelection(t)) } }) } }, this._completeShippingContactSelection = function(i) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, e), c._paymentRequestOptions.shippingOptions && c._paymentRequestOptions.shippingOptions.length && (c._privateShippingOption = c._paymentRequestOptions.shippingOptions[0]);
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.shippingMethods,
                    o = t.total,
                    a = t.lineItems;
                i.completeShippingContactSelection(n, r, o, a)
            }
        }, this._shippingMethodSelected = function(n) {
            return function(e) {
                var t;
                c._paymentRequestOptions.shippingOptions && (t = Kr(e.shippingMethod, c._paymentRequestOptions.shippingOptions), c._privateShippingOption = t, c._onEvent({ type: "shippingoptionchange", payload: { shippingOption: t, updateWith: se(c._completeShippingMethodSelection(n)) } }))
            }
        }, this._completeShippingMethodSelection = function(a) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, e);
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.total,
                    o = t.lineItems;
                a.completeShippingMethodSelection(n, r, o)
            }
        };
        var t = e.controller,
            n = e.authentication,
            r = e.mids,
            o = e.options,
            a = e.usesButtonElement,
            i = e.listenerRegistry;
        this._controller = t, this._authentication = n, this._mids = r, this._minimumVersion = o.__minApplePayVersion || _r, this._usesButtonElement = a, this._listenerRegistry = i, this._initialPaymentRequest = o, this._isShowing = !1, this._initializeSessionState()
    }
    var to = (function(e, t, n) { return t && $r(e.prototype, t), n && $r(e, n), e }(eo, [{
            key: "_initializeSessionState",
            value: function() {
                var e = btoa(this._authentication.accountId ? this._authentication.apiKey + ":" + this._authentication.accountId : this._authentication.apiKey);
                this._paymentRequestOptions = Jr({}, tr, this._initialPaymentRequest, { status: er.success, applicationData: e }), this._privateSession = null, this._privateShippingOption = null;
                var t = this._paymentRequestOptions.shippingOptions;
                t && t.length && (this._privateShippingOption = t[0])
            }
        }, {
            key: "_setupSession",
            value: function(e, t) {
                var n = this;
                this._listenerRegistry.addEventListener(e, "validatemerchant", se(this._validateMerchant(e, t))), this._listenerRegistry.addEventListener(e, "paymentauthorized", se(this._paymentAuthorized(e))), this._listenerRegistry.addEventListener(e, "cancel", se(function() { n._isShowing = !1, n._onEvent({ type: "cancel" }), n._onEvent({ type: "close" }) })), this._listenerRegistry.addEventListener(e, "shippingcontactselected", se(this._shippingContactSelected(e))), this._listenerRegistry.addEventListener(e, "shippingmethodselected", se(this._shippingMethodSelected(e)))
            }
        }]), eo),
        no = null;
    var ro = function(e) { return null !== no ? ae.a.resolve(no) : e().then(function(e) { return no = e }) },
        oo = function(e) { return !(!ze && !Ge) && (!(!e.isCheckout && !window.PaymentRequest) && !(!e.isCheckout && Ue)) },
        ao = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var io = function e(t) {
            var a = this;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._mids = null, this._frame = null, this._initFrame = function(e) {
                var t = a._controller.createHiddenFrame(ee.c.PAYMENT_REQUEST_GOOGLE_PAY, { authentication: a._authentication, mids: a._mids, origin: a._origin });
                t.send({ action: "stripe-pr-initialize", payload: { data: e } }), a._initFrameEventHandlers(t), a._frame = t
            }, this._initFrameEventHandlers = function(o) {
                o._on("pr-cancel", function() { a._onEvent({ type: "cancel" }) }), o._on("pr-close", function() { a._backdrop.fadeOut().then(function() { a._backdrop.unmount() }), a._onEvent({ type: "close" }) }), o._on("pr-error", function(e) { a._onEvent({ type: "error", payload: { errorMessage: e.errorMessage, errorCode: e.errorCode } }) }), o._on("pr-callback", function(e) {
                    var t = e.event,
                        n = e.options,
                        r = e.nonce;
                    switch (t) {
                        case "paymentresponse":
                            a._handlePaymentResponse(o, n, r);
                            break;
                        case "shippingaddresschange":
                            a._handleShippingAddressChange(o, n, r);
                            break;
                        case "shippingoptionchange":
                            a._handleShippingOptionChange(o, n, r);
                            break;
                        default:
                            throw new Error("Unexpected event name: " + t)
                    }
                })
            }, this._handlePaymentResponse = function(t, e, n) { a._onEvent({ type: "paymentresponse", payload: ao({}, e, { complete: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: { status: e } } }) } }) }) }, this._handleShippingAddressChange = function(t, e, n) { a._onEvent({ type: "shippingaddresschange", payload: ao({}, e, { updateWith: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } }) }) }, this._handleShippingOptionChange = function(t, e, n) { a._onEvent({ type: "shippingoptionchange", payload: ao({}, e, { updateWith: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } }) }) }, this.setEventHandler = function(e) { a._onEvent = e }, this.canMakePayment = function() { if (!oo({ isCheckout: a._isCheckout })) return ae.a.resolve(!1); if (!a._frame) throw new Error("Frame not initialized."); var e = a._frame; return ro(function() { return e.action.checkCanMakePayment().then(function(e) { return !0 === e.available }) }) }, this.show = function() { a._frame && (a._frame.send({ action: "stripe-pr-show", payload: { data: { usesButtonElement: a._usesButtonElement() } } }), a._backdrop.mount(), a._backdrop.show(), a._backdrop.fadeIn()) }, this.update = function(e) { a._frame && a._frame.send({ action: "stripe-pr-update", payload: { data: e } }) }, this.abort = function() { a._frame && a._frame.send({ action: "stripe-pr-abort", payload: {} }) }, this._controller = t.controller, this._authentication = t.authentication, this._mids = t.mids, this._origin = t.origin, this._usesButtonElement = t.usesButtonElement, this._backdrop = new rt({ lockScrolling: !1, lockFocus: !0, lockFocusOn: null, listenerRegistry: t.listenerRegistry }), this._isCheckout = !!t.options.__isCheckout, oo({ isCheckout: this._isCheckout }) && this._controller && (this._controller.action.fetchLocale({ locale: "auto" }), this._initFrame(t.options))
        },
        co = function() { if (!window.PaymentRequest) return null; if (/CriOS\/59/.test(navigator.userAgent)) return null; if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)) return null; if (Ye) return null; var e = window.PaymentRequest; return e.prototype.canMakePayment || (e.prototype.canMakePayment = function() { return ae.a.resolve(!1) }), e }(),
        so = null,
        uo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var lo = function() {
            var a = this;
            this._onEvent = function() {}, this.setEventHandler = function(e) { a._onEvent = e }, this.canMakePayment = function() { return e = a._prFrame, _(a._authentication.apiKey), s.test, null !== so ? ae.a.resolve(so) : co && e ? e.action.checkCanMakePayment().then(function(e) { var t = e.available; return so = !0 === t }) : ae.a.resolve(!1); var e }, this.update = function(e) {
                var t = a._prFrame;
                t && t.send({ action: "stripe-pr-update", payload: { data: e } })
            }, this.show = function() {
                if (!a._prFrame) throw new M.a("Payment Request is not available in this browser.");
                a._prFrame.send({ action: "stripe-pr-show", payload: { data: { usesButtonElement: a._usesButtonElement() } } })
            }, this.abort = function() { a._prFrame && a._prFrame.send({ action: "stripe-pr-abort", payload: {} }) }, this._setupPrFrame = function(o, e) {
                o.send({ action: "stripe-pr-initialize", payload: { data: e } }), o._on("pr-cancel", function() { a._onEvent({ type: "cancel" }) }), o._on("pr-close", function() { a._onEvent({ type: "close" }) }), o._on("pr-error", function(e) { a._onEvent({ type: "error", payload: { errorMessage: e.message || "", errorCode: e.code || "" } }) }), o._on("pr-callback", function(e) {
                    var t = e.event,
                        n = e.nonce,
                        r = e.options;
                    switch (t) {
                        case "token":
                            a._onEvent({ type: "paymentresponse", payload: uo({}, r, { complete: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { data: { status: e }, nonce: n } }) } }) });
                            break;
                        case "shippingaddresschange":
                            a._onEvent({ type: "shippingaddresschange", payload: { shippingAddress: r.shippingAddress, updateWith: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } } });
                            break;
                        case "shippingoptionchange":
                            a._onEvent({ type: "shippingoptionchange", payload: { shippingOption: r.shippingOption, updateWith: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } } });
                            break;
                        default:
                            throw new Error("Unexpected event from PaymentRequest inner: " + t)
                    }
                })
            }
        },
        po = function e(t) {
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), lo.call(this);
            var n, r = t.authentication,
                o = t.controller,
                a = t.mids,
                i = t.origin,
                c = t.usesButtonElement,
                s = t.options;
            this._authentication = r, this._controller = o, this._usesButtonElement = c, co && "https:" === window.location.protocol ? (this._controller.action.fetchLocale({ locale: "auto" }), n = this._controller.createHiddenFrame(ee.c.PAYMENT_REQUEST_BROWSER, { authentication: r, mids: a, origin: i }), this._setupPrFrame(n, s), this._prFrame = n) : this._prFrame = null
        },
        fo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function mo(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }
    var ho = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(_o, le), _o);

    function _o(e) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, _o);
        var t = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (_o.__proto__ || Object.getPrototypeOf(_o)).call(this));
        go.call(t), t._controller = e.controller, t._authentication = e.authentication, t._mids = e.mids, t._listenerRegistry = e.listenerRegistry, t._report("pr.options", { options: e.rawOptions });
        var n = Q(ur, e.rawOptions || {}, "paymentRequest()"),
            r = n.value;
        if (n.warnings.forEach(function(e) { return t._warn(e) }), r.__billingDetailsEmailOverride && r.requestPayerEmail) throw new M.a("When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet.");
        var o = r.disableWallets,
            a = o ? c.filter(function(e) { return -1 === o.indexOf(e) }) : r.wallets;
        return t._queryStrategy = a ? mr(a) : e.queryStrategyOverride || fr(), t._isCustomizedQueryStrategy = !!a, t._report("pr.query_strategy", { queryStrategy: t._queryStrategy }), t._initialOptions = fo({}, r, { __betas: e.betas, wallets: a }), t._initBackingLibraries(t._initialOptions), t
    }
    var yo, bo, vo, go = function() {
            var f = this;
            this._usedByButtonElement = null, this._showCalledByButtonElement = !1, this._isShowing = !1, this._backingLibraries = { APPLE_PAY: null, GOOGLE_PAY: null, BROWSER: null }, this._activeBackingLibraryName = null, this._buttonTypeName = null, this._activeBackingLibrary = null, this._isCustomizedQueryStrategy = !1, this._canMakePaymentAvailability = { APPLE_PAY: null, GOOGLE_PAY: null, BROWSER: null }, this._canMakePaymentResolved = !1, this._validateUserOn = function(e, t) { "string" == typeof e && ("source" === e && f._hasRegisteredListener("paymentmethod") || "paymentmethod" === e && f._hasRegisteredListener("source")) && (f._report("pr.double_callback_registration"), f._controller.warn("Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed.")) }, this._report = function(e, t) { f._controller.report(e, fo({}, t, { activeBackingLibrary: f._activeBackingLibraryName, usesButtonElement: f._usedByButtonElement || !1 })) }, this._warn = function(e) { f._controller.warn(e) }, this._registerElement = function() { f._usedByButtonElement = !0 }, this._elementShow = function() { f._showCalledByButtonElement = !0, f.show() }, this._initBackingLibraries = function(n) {
                f._queryStrategy.forEach(function(e) {
                    var t = { controller: f._controller, authentication: f._authentication, mids: f._mids, origin: window.location.origin, options: n, usesButtonElement: function() { return !0 === f._usedByButtonElement }, listenerRegistry: f._listenerRegistry };
                    switch (e) {
                        case "APPLE_PAY":
                            f._backingLibraries.APPLE_PAY = new to(t), f._backingLibraries.APPLE_PAY.setEventHandler(f._handleInternalEvent);
                            break;
                        case "GOOGLE_PAY":
                            f._backingLibraries.GOOGLE_PAY = new io(t), f._backingLibraries.GOOGLE_PAY.setEventHandler(f._handleInternalEvent);
                            break;
                        case "BROWSER":
                            f._backingLibraries.BROWSER = new po(t), f._backingLibraries.BROWSER.setEventHandler(f._handleInternalEvent);
                            break;
                        default:
                            Object(T.a)(e)
                    }
                })
            }, this._handleInternalEvent = function(e) {
                switch (e.type) {
                    case "paymentresponse":
                        f._emitPaymentResponse(e.payload);
                        break;
                    case "error":
                        f._report("error.pr.internal_error", { error: e.payload });
                        break;
                    case "close":
                        f._isShowing = !1;
                        break;
                    default:
                        f._emitExternalEvent(e)
                }
            }, this._emitExternalEvent = function(i) {
                switch (i.type) {
                    case "cancel":
                        f._emit("cancel");
                        break;
                    case "shippingoptionchange":
                    case "shippingaddresschange":
                        var c = i.type,
                            s = i.payload,
                            u = null,
                            l = !1,
                            p = !1,
                            e = function(e) {
                                if (p && l) return f._report("pr.update_with_called_after_timeout", { event: c }), void f._controller.warn("Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds.");
                                if (l) return f._report("pr.update_with_double_call", { event: c }), void f._controller.warn("Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once.");
                                u && clearTimeout(u), l = !0, f._report("pr.update_with", { event: c, updates: e });
                                var t = Q(pr, e || {}, c + " callback"),
                                    n = t.value;
                                t.warnings.forEach(function(e) { return f._controller.warn(e) });
                                var r = n,
                                    o = !1;
                                f._initialOptions.__isCheckout && "APPLE_PAY" === f._activeBackingLibraryName && n.shippingOptions && 1 === n.shippingOptions.length && 0 === n.shippingOptions[0].amount && (n.shippingOptions, r = mo(n, ["shippingOptions"]), o = !0);
                                var a = n.shippingOptions || f._initialOptions.shippingOptions;
                                if (!(o || "shippingaddresschange" !== i.type || n.status !== er.success || a && a.length)) throw new M.a("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
                                s.updateWith(r)
                            };
                        f._hasRegisteredListener(i.type) ? (u = setTimeout(function() { p = !0, f._report("pr.update_with_timed_out", { event: c }), f._controller.warn('Timed out waiting for a call to updateWith(). If you listen to "' + i.type + '" events, then you must call event.updateWith in the "' + i.type + '" handler within 30 seconds.'), e({ status: "fail" }) }, 29900), f._emit(c, fo({}, s, { updateWith: e }))) : e({ status: "success" });
                        break;
                    case "token":
                    case "source":
                    case "paymentmethod":
                        var t = i.type,
                            r = i.payload,
                            o = null,
                            a = !1,
                            d = !1,
                            n = function(e) {
                                if (a && d) return f._report("pr.complete_called_after_timeout"), void f._controller.warn("Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds.");
                                if (d) return f._report("pr.complete_double_call"), void f._controller.warn("Call to complete() was ignored because it has already been called. Do not call complete more than once.");
                                o && clearTimeout(o), d = !0;
                                var t = Q(dr, e, "status for PaymentRequest completion"),
                                    n = t.value;
                                t.warnings.forEach(function(e) { return f._controller.warn(e) }), r.complete(n)
                            },
                            o = setTimeout(function() { a = !0, f._report("pr.complete_timed_out"), f._controller.warn('Timed out waiting for a call to complete(). Once you have processed the payment in the "' + i.type + '" handler, you must call event.complete within 30 seconds.'), n("fail") }, 29900);
                        f._emit(t, fo({}, r, { complete: n }));
                        break;
                    default:
                        Object(T.a)(i)
                }
            }, this._maybeEmitPaymentResponse = function(e) { f._isShowing && f._emitExternalEvent(e) }, this._emitPaymentResponse = function(e) {
                f._report("pr.payment_authorized");
                var t = e.token,
                    n = mo(e, ["token"]),
                    r = n.payerEmail,
                    o = n.payerPhone,
                    a = n.complete,
                    i = f._showCalledByButtonElement ? ee.b.paymentRequestButton : null;
                f._hasRegisteredListener("token") && f._maybeEmitPaymentResponse({ type: "token", payload: e }), f._hasRegisteredListener("source") && f._controller.action.createSourceWithData({ elementName: i, type: "card", sourceData: { token: t.id, owner: { email: f._initialOptions.__billingDetailsEmailOverride || r, phone: o } }, mids: null }).then(function(e) { "error" === e.type ? e.error.code && "email_invalid" === e.error.code ? a("invalid_payer_email") : (f._report("fatal.pr.token_to_source_failed", { error: e.error, token: t.id }), a("fail")) : f._maybeEmitPaymentResponse({ type: "source", payload: fo({}, n, { source: e.object }) }) }), f._hasRegisteredListener("paymentmethod") && f._controller.action.createPaymentMethodWithData({ elementName: i, type: "card", paymentMethodData: { card: { token: t.id }, billing_details: { email: f._initialOptions.__billingDetailsEmailOverride || r, phone: o } }, mids: null }).then(function(e) { "error" === e.type ? e.error.code && "email_invalid" === e.error.code ? a("invalid_payer_email") : (f._report("fatal.pr.token_to_payment_method_failed", { error: e.error, token: t.id }), a("fail")) : f._maybeEmitPaymentResponse({ type: "paymentmethod", payload: fo({}, n, { paymentMethod: e.object }) }) })
            }, this._canMakePaymentForBackingLibrary = function(o) { var e = f._backingLibraries[o]; if (!e) throw new Error("Unexpectedly calling canMakePayment on uninitialized backing library."); return ae.a.race([new ae.a(function(e) { return setTimeout(e, 1e4) }).then(function() { return !1 }), e.canMakePayment().then(function(e) { return !!e })]).then(function(e) { var t, n, r; return f._canMakePaymentAvailability = fo({}, f._canMakePaymentAvailability, (r = e, (n = o) in (t = {}) ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t)), { backingLibraryName: o, available: e } }) }, this._isGooglePayOnAndroid = function() {
                var e = f._initialOptions.wallets,
                    t = e && -1 === e.indexOf("googlePay");
                return Ue && !t
            }, this._constructCanMakePaymentResponse = function() { var e = f._isGooglePayOnAndroid() && !!f._canMakePaymentAvailability.BROWSER; return { applePay: !!f._canMakePaymentAvailability.APPLE_PAY, googlePay: !!f._canMakePaymentAvailability.GOOGLE_PAY || e } }, this.canMakePayment = se(function() {
                if (f._report("pr.can_make_payment"), f._canMakePaymentResolved) { var e = null !== f._activeBackingLibrary ? f._constructCanMakePaymentResponse() : null; return f._report("pr.can_make_payment_response", { response: e, cached: !0 }), ae.a.resolve(e) }
                if ("https:" !== window.location.protocol) return f._controller.warn("If you are testing the PaymentRequest button (to accept Apple Pay, Google Pay, etc.) you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details."), f._canMakePaymentResolved = !0, ae.a.resolve(null);
                if (f._isCustomizedQueryStrategy && window.self !== window.top) return f._controller.warn("You must use Stripe PaymentRequest in the top level frame if you specify which wallets are available."), f._canMakePaymentResolved = !0, ae.a.resolve(null);
                var t = f._queryStrategy.map(function(e) { return function() { return f._canMakePaymentForBackingLibrary(e) } }),
                    r = new Xt.a;
                return $n(t, function(e) {
                    var t = e.backingLibraryName,
                        n = e.available;
                    return n && (f._activeBackingLibraryName = t, f._activeBackingLibrary = f._backingLibraries[t], f._buttonTypeName = f._activeBackingLibraryName, f._isGooglePayOnAndroid() && (f._buttonTypeName = "GOOGLE_PAY")), n
                }).then(function(e) {
                    var t = new Xt.a;
                    f._canMakePaymentResolved = !0;
                    var n = null;
                    return "SATISFIED" === e.type && (n = f._constructCanMakePaymentResponse()), f._report("pr.can_make_payment_response", { response: n, cached: !1, duration: r.getElapsedTime(t) }), n
                })
            }), this.update = se(function(e) {
                if (f._isShowing) throw f._report("pr.update_called_while_showing"), new M.a("You cannot update Payment Request options while the payment sheet is showing.");
                f._report("pr.update", { updates: e });
                var t = Q(lr, e, "PaymentRequest update()"),
                    n = t.value;
                t.warnings.forEach(function(e) { return f._warn(e) }), f._activeBackingLibrary && f._activeBackingLibrary.update(n)
            }), this.show = se(function() {
                if (f._usedByButtonElement && !f._showCalledByButtonElement && (f._report("pr.show_called_with_button"), f._warn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")), !f._canMakePaymentResolved) throw f._report("pr.show_called_before_can_make_payment"), new M.a("You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show().");
                if (!f._activeBackingLibrary) throw f._report("pr.show_called_with_can_make_payment_false"), new M.a("Payment Request is not available in this browser.");
                var e = f._activeBackingLibrary;
                f._report("pr.show", { listeners: Object.keys(f._callbacks).sort() }), f._isShowing = !0, e.show()
            }), this.abort = se(function() {
                var e;
                f._activeBackingLibrary && (e = f._activeBackingLibrary, f._report("pr.abort"), e.abort())
            }), this.isShowing = function() { return f._isShowing }
        },
        wo = ho,
        Eo = { base: S(B), complete: S(B), empty: S(B), invalid: S(B), paymentRequestButton: S(B) },
        So = { classes: S(Z({ base: S(C), complete: S(C), empty: S(C), focus: S(C), invalid: S(C), webkitAutofill: S(C) })), hidePostalCode: S(N), hideIcon: S(N), showIcon: S(N), style: S(Z(Eo)), iconStyle: S(A("solid", "default")), value: S(P(C, B)), __privateCvcOptional: S(N), __privateValue: S(P(C, B)), __privateEmitIbanValue: S(N), error: S(Z({ type: C, code: S(C), decline_code: S(C), param: S(C) })), locale: U("elements()"), fonts: U("elements()"), placeholder: S(C), disabled: S(N), placeholderCountry: S(C), paymentRequest: S((yo = wo, bo = "stripe.paymentRequest(...)", function(e, t) { return e instanceof yo ? h(e) : b("a " + bo + " instance", e, t) })), supportedCountries: S(F(C)), accountHolderType: S(A("individual", "company")), issuingCard: S(C) },
        Po = Z(So);

    function ko(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Oo(e, t) { return (n = e) !== mn.a.cardNumber && n !== mn.a.cardExpiry && n !== mn.a.cardCvc || !t.cl ? Ro[e] : hn.a.CARD_LIGHT_ELEMENT; var n }

    function To(e) { var t = Object(Jn.a)(e, null); return !!t && "rtl" === t.getPropertyValue("direction") }

    function Ao() { var e = document.createElement("input"); return e.className = yn, e.setAttribute("aria-hidden", "true"), e.setAttribute("aria-label", " "), e.setAttribute("autocomplete", "false"), e.maxLength = 1, e.disabled = !0, Object(ie.d)(e, xo), e }

    function Io() { var e = Ao(); return e.className = bn, e.setAttribute("tabindex", "-1"), e }

    function Co() { document.activeElement && document.activeElement.blur && document.activeElement.blur() }

    function jo(e) {
        switch (e.type) {
            case "object":
                return Lo.push(e.object.id), { issuingCard: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function No(e) {
        switch (e.type) {
            case "object":
                return { nonce: e.object.public_nonce };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }
    var Ro = (ko(vo = {}, mn.a.card, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardNumber, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardExpiry, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardCvc, hn.a.CARD_ELEMENT), ko(vo, mn.a.postalCode, hn.a.CARD_ELEMENT), ko(vo, mn.a.paymentRequestButton, hn.a.PAYMENT_REQUEST_ELEMENT), ko(vo, mn.a.iban, hn.a.IBAN_ELEMENT), ko(vo, mn.a.idealBank, hn.a.IDEAL_BANK_ELEMENT), ko(vo, mn.a.p24Bank, hn.a.P24_BANK_ELEMENT), ko(vo, mn.a.auBankAccount, hn.a.AU_BANK_ACCOUNT_ELEMENT), ko(vo, mn.a.fpxBank, hn.a.FPX_BANK_ELEMENT), ko(vo, mn.a.issuingCardNumberDisplay, hn.a.ISSUING_CARD_NUMBER_DISPLAY_ELEMENT), ko(vo, mn.a.issuingCardCvcDisplay, hn.a.ISSUING_CARD_CVC_DISPLAY_ELEMENT), ko(vo, mn.a.issuingCardExpiryDisplay, hn.a.ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT), ko(vo, mn.a.epsBank, hn.a.EPS_BANK_ELEMENT), ko(vo, mn.a.netbankingBank, hn.a.NETBANKING_BANK_ELEMENT), ko(vo, mn.a.afterpayClearpayMessageModal, hn.a.AFTERPAY_MESSAGE_MODAL_ELEMENT), vo),
        Mo = { margin: "0", padding: "0", border: "none", display: "block", background: "transparent", position: "relative", opacity: "1" },
        xo = { border: "none", display: "block", position: "absolute", height: "1px", top: "-1px", left: "0", padding: "0", margin: "0", width: "100%", opacity: "0", background: "transparent", "pointer-events": "none", "font-size": "16px" },
        Lo = ["test_id"],
        Do = function(e) { return -1 !== Lo.indexOf(e) },
        Bo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Fo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function qo(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Uo(e) { return parseFloat(e.toFixed(1)) }
    var Ho = { base: "StripeElement", focus: "StripeElement--focus", invalid: "StripeElement--invalid", complete: "StripeElement--complete", empty: "StripeElement--empty", webkitAutofill: "StripeElement--webkit-autofill" },
        Yo = "#faffbd";

    function zo(e) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, zo), this.focus = function() {
            if (n._isIssuingElement()) throw new M.a("Cannot call focus() on an " + n._componentName + " Element.");
            document.activeElement && document.activeElement.blur && document.activeElement.blur(), n._fakeInput.focus()
        }, this._formSubmit = function() {
            for (var e, t = n._component.parentElement; t && "FORM" !== t.nodeName;) t = t.parentElement;
            t && ((e = document.createEvent("Event")).initEvent("submit", !0, !0), t.dispatchEvent(e))
        };
        var t = e.options,
            r = e.component,
            o = e.listenerRegistry,
            a = e.elementTimings,
            i = e.emitEvent,
            c = e.getParent,
            s = t.controller,
            u = t.componentName,
            l = t.publicOptions;
        this._componentName = u, this._component = r, this._controller = s, this._listenerRegistry = o, this._emitEvent = i, this._getParent = c;
        var p = Q(Po, l || {}, "create()"),
            d = p.value;
        p.warnings.forEach(function(e) { return n._controller.warn(e) });
        var f = d.paymentRequest,
            m = d.classes,
            h = d.issuingCard,
            _ = "paymentRequestButton" === this._componentName;
        if (_) {
            if (!f) throw new M.a("You must pass in a stripe.paymentRequest object in order to use this Element.");
            this._paymentRequest = f, this._paymentRequest._registerElement()
        }
        if (this._isIssuingElement()) { if (!h) throw new Error("You must pass in an ID to the issuingCard option in order to use this Element."); if (!Do(h)) throw new Error("Issuing card " + h + " has not been retrieved.") }
        this._createElement(t, d, a), this._classes = Ho, this._computeCustomClasses(m || {}), this._lastBackgroundColor = "", this._focused = !1, this._empty = !_, this._invalid = !1, this._complete = !1, this._autofilled = !1, this._lastSubmittedAt = null
    }
    var Go = (function(e, t, n) { return t && Fo(e.prototype, t), n && Fo(e, n), e }(zo, [{
            key: "update",
            value: function(e) {
                var t, n, r = this,
                    o = Q(Po, e || {}, "element.update()"),
                    a = o.value;
                o.warnings.forEach(function(e) { return r._controller.warn(e) }), a && (t = a.classes, n = qo(a, ["classes"]), t && (this._removeClasses(), this._computeCustomClasses(t), this._updateClasses()), this._updateFrameHeight(a), Object.keys(n).length && (this._frame.update(n), this._secondaryFrame && this._secondaryFrame.update(n)))
            }
        }, {
            key: "blur",
            value: function() {
                if (this._isIssuingElement()) throw new M.a("Cannot call blur() on an " + this._componentName + " Element.");
                this._frame.blur(), this._fakeInput.blur()
            }
        }, { key: "clear", value: function() { this._frame.clear() } }, {
            key: "unmount",
            value: function() {
                var e = this._getParent(),
                    t = this._label;
                e && (this._listenerRegistry.removeEventListener(e, "click", this.focus), this._removeClasses()), t && (this._listenerRegistry.removeEventListener(t, "click", this.focus), this._label = null), this._secondaryFrame && (this._secondaryFrame.unmount(), this._listenerRegistry.removeEventListener(window, "click", this._handleOutsideClick)), this._fakeInput.disabled = !0, this._frame.unmount()
            }
        }, {
            key: "mount",
            value: function() {
                var e;
                if (Object(ie.b)(document, this._component) && (this._controller.report("user_error.shadow_dom_mount", { element: this._componentName }), e = function() { throw new M.a("Elements cannot be mounted in a ShadowRoot. Please mount in the Light DOM.") }, "test" === this._controller.keyMode() ? e() : setTimeout(e, 0)), this._paymentRequest) { if (!this._paymentRequest._canMakePaymentResolved) throw new M.a("For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."); if (!this._paymentRequest._activeBackingLibraryName) throw new M.a("The paymentRequestButton Element is not available in the current environment.") }
                this._mountTimestamp = new Xt.a, this._findPossibleLabel(), this._updateClasses()
            }
        }, { key: "_isIssuingElement", value: function() { return "issuingCardNumberDisplay" === this._componentName || "issuingCardCvcDisplay" === this._componentName || "issuingCardExpiryDisplay" === this._componentName } }, {
            key: "_updateClasses",
            value: function() {
                var e = this._getParent();
                e && Object(ie.f)(e, [
                    [this._classes.base, !0],
                    [this._classes.empty, this._empty],
                    [this._classes.focus, this._focused],
                    [this._classes.invalid, this._invalid],
                    [this._classes.complete, this._complete],
                    [this._classes.webkitAutofill, this._autofilled]
                ])
            }
        }, {
            key: "_removeClasses",
            value: function() {
                var e = this._getParent();
                e && Object(ie.f)(e, [
                    [this._classes.base, !1],
                    [this._classes.empty, !1],
                    [this._classes.focus, !1],
                    [this._classes.invalid, !1],
                    [this._classes.complete, !1],
                    [this._classes.webkitAutofill, !1]
                ])
            }
        }, {
            key: "_findPossibleLabel",
            value: function() {
                var e = this._getParent();
                if (e) {
                    var t = e.getAttribute("id"),
                        n = void 0;
                    if (t && (n = document.querySelector("label[for='" + t + "']")), n) this._listenerRegistry.addEventListener(e, "click", this.focus);
                    else
                        for (n = n || e.parentElement; n && "LABEL" !== n.nodeName;) n = n.parentElement;
                    n ? (this._label = n, this._listenerRegistry.addEventListener(n, "click", this.focus)) : this._listenerRegistry.addEventListener(e, "click", this.focus)
                }
            }
        }, {
            key: "_computeCustomClasses",
            value: function(n) {
                var r = {};
                return Object.keys(n).forEach(function(e) {
                    if (!Ho[e]) throw new M.a(e + " is not a customizable class name.\nYou can customize: " + Object.keys(Ho).join(", "));
                    var t = n[e] || Ho[e];
                    r[e] = t.replace(/\./g, " ")
                }), this._classes = Bo({}, this._classes, r), this
            }
        }, {
            key: "_setupEvents",
            value: function(e) {
                var n, p = this,
                    a = e.stripeJsLoadTimestamp,
                    i = e.stripeCreateTimestamp,
                    c = e.groupCreateTimestamp,
                    s = e.createTimestamp,
                    u = 0,
                    r = 0;
                this._frame._on("load", function(e) {
                    var t = e.source;
                    u++;
                    var n = p._getParent(),
                        r = To(n),
                        o = p._paymentRequest ? p._paymentRequest._buttonTypeName : null;
                    p._frame.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: a.getAsPosixTime(), stripeCreate: i.getAsPosixTime(), groupCreate: c.getAsPosixTime(), create: s.getAsPosixTime(), mount: p._mountTimestamp.getAsPosixTime() }, loadCount: u, matchFrame: t === p._frame._iframe.contentWindow, rtl: r, paymentRequestButtonType: o } })
                }), this._secondaryFrame && (n = this._secondaryFrame)._on("load", function(e) {
                    var t = e.source;
                    r++, n.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: a.getAsPosixTime(), stripeCreate: i.getAsPosixTime(), groupCreate: c.getAsPosixTime(), create: s.getAsPosixTime(), mount: p._mountTimestamp.getAsPosixTime() }, loadCount: r, matchFrame: t === n._iframe.contentWindow, rtl: !1, paymentRequestButtonType: null } })
                }), this._frame._on("redirectfocus", function(e) {
                    var t = e.focusDirection,
                        n = Object(Qe.b)(p._component, t);
                    n && n.focus()
                }), this._frame._on("focus", function() { p._focused = !0, p._updateClasses() }), this._frame._on("blur", function() { p._focused = !1, p._updateClasses(), p._lastSubmittedAt && "paymentRequestButton" === p._componentName && (p._controller.report("payment_request_button.sheet_visible", { latency: p._lastSubmittedAt.getElapsedTime() }), p._lastSubmittedAt = null) }), this._frame._on("submit", function() { var e, t; "paymentRequestButton" === p._componentName ? (p._lastSubmittedAt = new Xt.a, t = e = !1, $t(), p._emitEvent("click", { preventDefault: function() { p._controller.report("payment_request_button.default_prevented"), e && p._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."), t = !0 } }), !t && p._paymentRequest && (p._paymentRequest._elementShow(), e = !0)) : (p._emitEvent("submit"), p._formSubmit()) }), ["ready", "focus", "blur", "escape"].forEach(function(e) { p._frame._on(e, function() { p._emitEvent(e) }) }), this._frame._on("change", function(t) {
                    $t();
                    var n = {},
                        e = dn[p._componentName] || [];
                    ["error", "value", "empty", "complete"].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e)).forEach(function(e) { return n[e] = t[e] }), p._emitEvent("change", n), p._empty = n.empty, p._invalid = !!n.error, p._complete = n.complete, p._updateClasses()
                }), this._frame._on("__privateIntegrationError", function(e) {
                    var t = e.message;
                    p._emitEvent("__privateIntegrationError", { message: t })
                }), this._frame._on("dimensions", function(e) { var t, n, r, o, a, i, c, s, u, l = p._getParent();!l || (t = Object(Jn.a)(l, null)) && (a = parseFloat(t.getPropertyValue("height")), n = e.height, "border-box" === t.getPropertyValue("box-sizing") && (r = parseFloat(t.getPropertyValue("padding-top")), o = parseFloat(t.getPropertyValue("padding-bottom")), a = a - parseFloat(t.getPropertyValue("border-top")) - parseFloat(t.getPropertyValue("border-bottom")) - r - o), i = Uo(a), c = Uo(n), 0 !== a && i < c && p._controller.report("wrapper_height_mismatch", { height: c, outer_height: i }), s = p._component.getBoundingClientRect().height, u = Uo(s), 0 !== s && 0 !== n && u !== c && (p._frame.updateStyle({ height: n + "px" }), p._controller.report("iframe_height_update", { height: c, calculated_height: u }))) }), this._frame._on("autofill", function() {
                    var e, t, n = p._getParent();
                    n && (t = (e = n.style.backgroundColor) === Yo || "rgb(250, 255, 189)" === e, p._lastBackgroundColor = t ? p._lastBackgroundColor : e, n.style.backgroundColor = Yo, p._autofilled = !0, p._updateClasses())
                }), this._frame._on("autofill-cleared", function() {
                    var e = p._getParent();
                    p._autofilled = !1, e && (e.style.backgroundColor = p._lastBackgroundColor), p._updateClasses()
                }), this._frame._on("update-outer-style", function(t) { Object.keys(t).forEach(function(e) { p._component.style.setProperty(e, t[e]) }) })
            }
        }, { key: "_handleOutsideClick", value: function() { this._secondaryFrame && this._secondaryFrame.send({ action: "stripe-outside-click", payload: {} }) } }, {
            key: "_updateFrameHeight",
            value: function(e, t) {
                var n, r, o, a, i, c, s, u, l, p, d, f = 1 < arguments.length && void 0 !== t && t,
                    m = e.style;
                "paymentRequestButton" === this._componentName ? (r = "string" == typeof(n = (m && m.paymentRequestButton || {}).height) ? n : void 0, (f || r) && (this._frame.updateStyle({ height: r || this._lastHeight || "40px" }), this._lastHeight = r || this._lastHeight)) : (i = (o = m && m.base || {}).fontSize, c = o.padding, s = "string" != typeof(a = o.lineHeight) || isNaN(parseFloat(a)) ? void 0 : a, l = "string" == typeof c ? c : void 0, (u = "string" == typeof i ? i : void 0) && !/^\d+(\.\d*)?px$/.test(u) && this._controller.warn("The fontSize style you specified (" + u + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."), (f || s || u) && (p = -1 === ee.j.indexOf(this._componentName) ? void 0 : l || this._lastPadding, d = Vn(s || this._lastHeight, u || this._lastFontSize, p), this._frame.updateStyle({ height: d }), this._lastFontSize = u || this._lastFontSize, this._lastHeight = s || this._lastHeight, this._lastPadding = p))
            }
        }, {
            key: "_createElement",
            value: function(e, t, n) {
                var r = this,
                    o = (e.controller, e.publicOptions, e.componentName),
                    a = e.groupId,
                    i = qo(e, ["controller", "publicOptions", "componentName", "groupId"]),
                    c = (t.classes, t.paymentRequest, qo(t, ["classes", "paymentRequest"])),
                    s = this._component,
                    u = Ao();
                Object(ie.d)(s, Mo);
                var l, p, d, f = To(document.body),
                    m = Oo(o, this._controller.getFlags()),
                    h = Bo({}, i, c, { rtl: f }),
                    _ = this._controller.createElementFrame(m, o, a, h);
                _._on("load", function() { u.disabled = !1 }), this._listenerRegistry.addEventListener(u, "focus", function() { _.focus() }), _.appendTo(s), fn[o] && (l = fn[o].secondary, (p = this._controller.createSecondaryElementFrame(m, l, o, a, h)) && p.on && p.on("height-change", function(e) { p.updateStyle({ height: e.height + "px" }) }), (this._secondaryFrame = p).appendTo(s), this._listenerRegistry.addEventListener(window, "click", function() { return r._handleOutsideClick() })), s.appendChild(u), qe && o !== ee.b.paymentRequestButton && (d = Io(), s.appendChild(d)), this._frame = _, this._fakeInput = u, this._setupEvents(n), this._updateFrameHeight(t, !0)
            }
        }]), zo),
        Wo = { amount: R, currency: A("USD", "AUD", "CAD", "GBP", "NZD", "EUR"), badgeTheme: S(A("black-on-mint", "black-on-white", "mint-on-black", "white-on-black")), introText: S(A("In", "in", "Or", "or", "Pay", "pay", "Pay in", "pay in")), isEligible: S(N), isCartEligible: S(N), lockupTheme: S(A("black", "white", "mint")), logoType: S(A("badge", "lockup")), max: S(R), min: S(R), modalLinkStyle: S(A("circled-info-icon", "more-info-text", "learn-more-text")), modalTheme: S(A("mint", "white")), showInterestFree: S(N), showLowerLimit: S(N), showUpperLimit: S(N), showWith: S(N) },
        Ko = Z(Wo),
        Vo = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
    var Jo = function(o) {
        function r(e) {
            var t = Q(Ko, e || {}, "create()"),
                n = t.value;
            return t.warnings.forEach(function(e) { return c.warn(e) }), n
        }

        function a(e, t) { return e.apply(void 0, [p].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(t))) }

        function e(r) {
            return function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                p ? a(r, t) : d.push([r, t])
            }
        }
        var i = o.emitEvent,
            t = o.options,
            c = t.controller,
            s = t.locale,
            n = t.publicOptions,
            u = new Xt.a,
            l = r(n),
            p = void 0,
            d = [];
        (function(e) {
            var t = !1;
            window.Promise || (t = !0, window.Promise = ae.a);
            var n = e();
            return t && window.Promise === ae.a && delete window.Promise, n
        })(function() { return m.e(1).then(m.bind(null, 31)) }).then(function(e) {
            var t = e.default,
                n = o.component,
                r = o.listenerRegistry;
            p = t({ component: n, controller: c, listenerRegistry: r, locale: s }), c.report("afterpay_message.loaded", { load_time: u.getElapsedTime(), locale: s, currency: l.currency }),
                function() {
                    for (; d.length;) {
                        var e = d.shift(),
                            t = Vo(e, 2),
                            n = t[0],
                            r = t[1];
                        a(n, r)
                    }
                }(), i("ready")
        }, function(e) { c.report("afterpay_message.import_error", { error: e }) });

        function f(e) { return function() { throw new M.a(e) } }
        return {
            mount: e(function(e) { e.mount(l) }),
            unmount: e(function(e) { e.unmount() }),
            update: e(function(e, t) {
                var n = It(l, t);
                l = r(n), e.update(l)
            }),
            focus: f("Focus is not supported by afterpayClearpayMessage."),
            blur: f("Blur is not supported by afterpayClearpayMessage."),
            clear: f("Clear is not supported by afterpayClearpayMessage.")
        }
    };

    function $o(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Xo(e, t, n) {
        switch (e) {
            case "authentication":
                var r = Q(Qo, t, n),
                    o = r.value;
                o.locale, o.fonts;
                return { value: $o(o, ["locale", "fonts"]), warnings: r.warnings };
            case "payment":
                var a = Q(ta, t, n),
                    i = a.value;
                i.locale, i.fonts;
                return { value: $o(i, ["locale", "fonts"]), warnings: a.warnings };
            default:
                return Object(T.a)(e)
        }
    }
    var Zo = { locale: U("elements()"), fonts: U("elements()"), color: S(C) },
        Qo = Z(Zo),
        ea = { locale: U("elements()"), fonts: U("elements()"), color: S(C) },
        ta = Z(ea),
        na = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ra = function(e) {
            var t, n, r, o, a, i, c, s, u, l, p, d, f, m = e.component,
                h = e.listenerRegistry,
                _ = e.elementTimings,
                y = e.getParent,
                b = e.emitEvent,
                v = e.options,
                g = null,
                w = [],
                E = (n = (t = v).controller, r = t.componentName, o = t.groupId, a = t.locale, i = t.fonts, c = t.wait, s = t.publicOptions, u = na({ locale: a, fonts: i, wait: c, rtl: To(document.body) }, s), l = wn[r], p = n.createElementFrame(l, r, o, u), d = Ao(), f = null, qe && (f = Io()), { frame: p, hiddenInput: d, hiddenSafariQuirkFixInput: f }),
                S = E.frame,
                P = E.hiddenInput,
                k = E.hiddenSafariQuirkFixInput;
            Object(ie.d)(m, Mo), S.appendTo(m), m.appendChild(P), k && m.appendChild(k), S.updateStyle(function(e) {
                switch (e) {
                    case "authentication":
                        return { height: "46px" };
                    case "payment":
                        return { height: "0" };
                    default:
                        return Object(T.a)(e)
                }
            }(v.componentName)), h.addEventListener(P, "focus", function() { S.focus() }), S._on("load", function() { P.disabled = !1, w.push(function() { P.disabled = !0 }), S.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: _.stripeJsLoadTimestamp.getAsPosixTime(), stripeCreate: _.stripeCreateTimestamp.getAsPosixTime(), groupCreate: _.groupCreateTimestamp.getAsPosixTime(), create: _.createTimestamp.getAsPosixTime(), mount: g ? g.getAsPosixTime() : 0 }, rtl: To(y()) } }) }), gn.forEach(function(t) { S._on(t, function(e) { return b(t, e) }) });
            var O = {};
            S._on("add_overlay", function(e) {
                var t = e.style,
                    n = e.nonce,
                    r = e.elementType,
                    o = v.controller.createElementFrame(En[r], r, v.groupId, { locale: v.locale, rtl: To(document.body) });
                (O[n] = o).updateStyle(na({ "min-width": "0", "z-index": "1000" }, t)), o.appendTo(m), o._on("ready", function() { o.focus() }), w.push(function() { O[n] && (o.destroy(), delete O[n]) })
            }), S._on("remove_overlay", function(e) {
                var t = e.nonce;
                O[t] && (O[t].destroy(), delete O[t])
            }), S._on("resize", function(e) {
                var t = e.height;
                S.updateStyle({ height: t + "px" })
            });
            return {
                update: function(e) { S.update(e) },
                focus: function() { Co(), P.focus() },
                blur: function() { S.blur(), P.blur() },
                clear: function() { S.clear() },
                mount: function() {
                    g = new Xt.a;
                    var e, t, n, r = y();
                    r && (Object(ie.f)(r, [
                        [vn, !0]
                    ]), w.push(function() {
                        Object(ie.f)(r, [
                            [vn, !1]
                        ])
                    }), e = function() { Co(), P.focus() }, function(e, t) {
                        for (var n = e.parentElement; n;) {
                            if (n && t(n)) return n;
                            n = n.parentElement
                        }
                        return null
                    }(r, function(e) { return "LABEL" === e.nodeName }) || (h.addEventListener(r, "click", e), w.push(function() { h.removeEventListener(r, "click", e) })), t = r.getAttribute("id"), (n = t ? document.querySelector("label[for='" + t + "']") : null) && (h.addEventListener(n, "click", e), w.push(function() { h.removeEventListener(n, "click", e) })))
                },
                unmount: function() {
                    for (; w.length;) w.pop()();
                    S.unmount()
                },
                _frame: S
            }
        },
        oa = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function aa(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }
    var ia = function(e) {
            var t = e.options,
                n = aa(e, ["options"]),
                r = t.controller,
                o = t.componentName,
                a = t.publicOptions,
                i = aa(t, ["controller", "componentName", "publicOptions"]),
                c = function(e) {
                    switch (e) {
                        case "authentication":
                        case "payment":
                            return e;
                        default:
                            throw new Error("Unexpected element type for implementation")
                    }
                }(o),
                s = Xo(c, a || {}, "elements.create('" + c + "')");
            s.warnings.forEach(function(e) { return r.warn(e) });
            var u = ra(oa({}, n, { options: oa({}, i, { controller: r, componentName: c, publicOptions: s.value }) })),
                l = u.update,
                p = aa(u, ["update"]);
            return oa({
                update: function(e) {
                    var t = Xo(c, e || {}, c + ".update()");
                    t.warnings.forEach(function(e) { return r.warn(e) }), l(t.value)
                }
            }, p)
        },
        ca = function(e, t) {
            var n = function(e) { if (!cn[e]) throw new Error("Unexpected Element type: " + e + "."); return cn[e].implementation }(e);
            switch (n) {
                case "legacy":
                    return new Go(t);
                case "afterpay_message":
                    return Jo(t);
                case "frame":
                    return ia(t);
                default:
                    return Object(T.a)(n, "Unexpected implementation type: " + n + ".")
            }
        },
        sa = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ua = function(e, t, n) { return t && la(e.prototype, t), n && la(e, n), e };

    function la(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var pa = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(da, le), ua(da, [{ key: "_checkDestroyed", value: function() { if (this._destroyed) throw new M.a("This Element has already been destroyed. Please create a new one.") } }, { key: "_isMounted", value: function() { return !!document.body && document.body.contains(this._component) } }, {
        key: "_unmount",
        value: function() {
            var e = this._component.parentElement;
            e && e.removeChild(this._component), this._implementation.unmount(), this._parent = null
        }
    }, {
        key: "_mountToParent",
        value: function(e) {
            var t = this._component.parentElement,
                n = this._isMounted();
            if (e === t) {
                if (n) return;
                this.unmount(), this._mountTo(e)
            } else if (t) {
                if (n) throw new M.a("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
                this.unmount(), this._mountTo(e)
            } else this._mountTo(e)
        }
    }, {
        key: "_mountTo",
        value: function(e) {
            for (this._parent = e; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(this._component), this._implementation.mount()
        }
    }]), da);

    function da(e, t, n) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, da);
        var r = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (da.__proto__ || Object.getPrototypeOf(da)).call(this));
        ma.call(r);
        var o = e.controller,
            a = e.componentName;
        r._controller = o, r._componentName = a, r._destroyed = !1;
        var i = document.createElement("div");
        return i.className = ln, r._component = i, r._implementation = ca(r._componentName, { options: e, component: i, listenerRegistry: t, elementTimings: n, emitEvent: r._emitEvent, getParent: r._getParent }), r
    }

    function fa(e, t) { e._controller.report("legacy_private_property_used", { prop: t, componentName: e._componentName }) }
    var ma = function() {
        var r = this;
        this.mount = se(function(e) {
            r._checkDestroyed();
            var t = void 0;
            if (!e) throw new M.a("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
            if ("string" == typeof e) {
                var n = document.querySelectorAll(e);
                if (1 < n.length && r._controller.warn("The selector you specified (" + e + ") applies to " + n.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !n.length) throw new M.a("The selector you specified (" + e + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
                t = n[0]
            } else {
                if (!e.appendChild) throw new M.a("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
                t = e
            }
            if ("INPUT" === t.nodeName) throw new M.a("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
            t.children.length && r._controller.warn("This Element will be mounted to a DOM element that contains child nodes."), r._mountToParent(t)
        }), this.update = se(function(e) { return r._checkDestroyed(), r._implementation.update(e), r }), this.focus = se(function(e) { return r._checkDestroyed(), e && e.preventDefault(), r._implementation.focus(), r }), this.blur = se(function() { return r._checkDestroyed(), r._implementation.blur(), r }), this.clear = se(function() { return r._checkDestroyed(), r._implementation.clear(), r }), this.unmount = se(function() { return r._checkDestroyed(), r._unmount(), r }), this.destroy = se(function() { return r._checkDestroyed(), r.unmount(), r._destroyed = !0, r._emitEvent("destroy"), r }), this._getParent = function() { return r._parent }, this._emitEvent = function(e, t) { return r._emit(e, sa({ elementType: r._componentName }, t)) }
    };
    ["_autofilled", "_classes", "_complete", "_empty", "_fakeInput", "_focused", "_frame", "_invalid", "_lastBackgroundColor", "_lastFontSize", "_lastHeight", "_lastPadding", "_lastSubmittedAt", "_listenerRegistry", "_paymentRequest"].forEach(function(e) { Object.defineProperty(pa.prototype, e, { enumerable: !1, get: function() { return fa(this, e), this._implementation[e] } }) });
    ["_formSubmit", "_isIssuingElement"].forEach(function(e) { Object.defineProperty(pa.prototype, e, { enumerable: !1, writable: !1, value: function() { return fa(this, e), this._implementation[e]() } }) });
    var ha = pa,
        _a = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function ya(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function ba(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function va(e) { var t = Y(Ta, e, ""); return "error" === t.type ? null : t.value }
    var ga, wa = { locale: S(C), fonts: S(F(B)), betas: S(F(I.apply(void 0, ba(en)))) },
        Ea = Z(wa),
        Sa = function() {
            var s = this;
            this.getElement = se(function(e) { var t, n = (null != (t = e) && t.__elementType && "string" == typeof t.__elementType && "function" == typeof t ? t.__elementType : null) || e; return Yn(n, s._betas), Object(w.a)(s._elements, function(e) { return e._componentName === n }) || null }), this.create = ue(function(t, e) {
                var n = new Xt.a;
                ! function(e, t, n) {
                    if (Yn(e, n), cn[e].unique && -1 !== t.indexOf(e)) throw new M.a("Can only create one Element of type " + e + ".");
                    var r = cn[e].conflict,
                        o = Object(w.e)(t, r);
                    if (o.length) { var a = o[0]; throw new M.a("Cannot create an Element of type " + e + " after an Element of type " + a + " has already been created.") }
                }(t, s._elements.map(function(e) { return e._componentName }), s._betas);
                var r = _a({}, e, s._commonOptions, { componentName: t, groupId: s._id }),
                    o = (r.paymentRequest, ya(r, ["paymentRequest"])),
                    a = (Be || Fe) && 2e3 < Object(oe.a)(o).length,
                    i = !!s._pendingFonts || a,
                    c = new ha(_a({ publicOptions: e }, s._commonOptions, { componentName: t, groupId: s._id, fonts: a ? null : s._commonOptions.fonts, controller: s._controller, wait: i }), s._listenerRegistry, _a({}, s._timings, { createTimestamp: n }));
                return s._elements = [].concat(ba(s._elements), [c]), c._on("destroy", function() { s._elements = s._elements.filter(function(e) { return e._componentName !== t }) }), a && c._implementation.update({ fonts: s._commonOptions.fonts }), c
            })
        },
        Pa = function e(t, n, r, o) {
            var a = this;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Sa.call(this);
            var i, c = new Xt.a,
                s = Q(Ea, o || {}, "elements()"),
                u = s.value,
                l = u.betas,
                p = void 0 === l ? [] : l,
                d = u.fonts,
                f = void 0 === d ? [] : d,
                m = u.locale,
                h = ya(u, ["betas", "fonts", "locale"]);
            s.warnings.forEach(function(e) { return t.warn(e) }), i = t.warn, Mn().match(/width=device-width/) || i('Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'), t.report("elements", { options: o }), this._elements = [], this._id = re("elements"), this._timings = _a({}, r, { groupCreateTimestamp: c }), this._controller = t, this._betas = p, this._listenerRegistry = n;
            var _ = Wn(m, p);
            this._controller.action.fetchLocale({ locale: _ || "auto" });
            var y = f.filter(function(e) { return !e.cssSrc || "string" != typeof e.cssSrc }).map(function(e) { return _a({}, e, { __resolveFontRelativeTo: window.location.href }) }),
                b = f.map(function(e) { return e.cssSrc }).reduce(function(e, t) { return "string" == typeof t ? [].concat(ba(e), [t]) : e }, []).map(function(e) { return Object(v.b)(e) ? e : Object(v.c)(window.location.href, e) });
            return this._pendingFonts = b.length, this._commonOptions = _a({}, h, { betas: p, locale: _, fonts: y }), b.forEach(function(n) {
                var r;
                "string" == typeof n && (r = new Xt.a, Gn(n).then(function(e) {
                    a._controller.report("font.loaded", { load_time: r.getElapsedTime(), font_count: e.length, css_src: n });
                    var t = e.map(function(e) { return _a({}, e, { __resolveFontRelativeTo: n }) });
                    a._controller.action.updateCSSFonts({ fonts: t, groupId: a._id }), a._commonOptions = _a({}, a._commonOptions, { fonts: [].concat(ba(a._commonOptions.fonts ? a._commonOptions.fonts : []), ba(t)) })
                }).catch(function(e) { a._controller.report("error.font.not_loaded", { load_time: r.getElapsedTime(), message: e && e.message && e.message, css_src: n }), a._controller.warn("Failed to load CSS file at " + n + ".") }))
            }), this
        },
        ka = function(e, t, n, r, o, a, i) { return new wo({ controller: e, authentication: t, mids: n, rawOptions: r, betas: o, queryStrategyOverride: a, listenerRegistry: i }) },
        Oa = { _componentName: C, _implementation: Z({ _frame: Z({ id: C }) }) },
        Ta = Z(Oa);

    function Aa(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Ia(e) { return -1 === ee.k.indexOf(e) }

    function Ca(e, t) {
        switch (e.type) {
            case "object":
                return { paymentIntent: e.object };
            case "error":
                return { error: Da({}, t ? { payment_intent: t } : {}, e.error) };
            default:
                return Object(T.a)(e)
        }
    }

    function ja(e) {
        switch (e.type) {
            case "error":
                return { error: e.error };
            case "object":
                return { setupIntent: e.object };
            default:
                return Object(T.a)(e)
        }
    }

    function Na(e) { return { id: e.id, clientSecret: e.client_secret } }

    function Ra(e) { return "requires_source_action" === e || "requires_action" === e }

    function Ma(e) { return "requires_source_action" === e.status || "requires_action" === e.status ? e.next_action : null }
    var xa = { alipay: "alipay", afterpay_clearpay: "afterpay_clearpay", au_becs_debit: "au_becs_debit", acss_debit: "acss_debit", bacs_debit: "bacs_debit", bancontact: "bancontact", boleto: "boleto", card: "card", eps: "eps", fpx: "fpx", giropay: "giropay", grabpay: "grabpay", ideal: "ideal", konbini: "konbini", oxxo: "oxxo", p24: "p24", paypal: "paypal", sepa_debit: "sepa_debit", sofort: "sofort", three_d_secure: "three_d_secure", upi: "upi", wechat_pay: "wechat_pay", netbanking: "netbanking", id_bank_transfer: "id_bank_transfer" },
        La = (Aa(ga = {}, ee.b.auBankAccount, xa.au_becs_debit), Aa(ga, ee.b.card, xa.card), Aa(ga, ee.b.cardNumber, xa.card), Aa(ga, ee.b.cardExpiry, xa.card), Aa(ga, ee.b.cardCvc, xa.card), Aa(ga, ee.b.postalCode, xa.card), Aa(ga, ee.b.iban, xa.sepa_debit), Aa(ga, ee.b.idealBank, xa.ideal), Aa(ga, ee.b.fpxBank, xa.fpx), Aa(ga, ee.b.p24Bank, xa.p24), Aa(ga, ee.b.netbankingBank, xa.netbanking), Aa(ga, ee.b.epsBank, xa.eps), ga),
        Da = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Ba = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function qa(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function Ua(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Ha(a) { return function(e, t) { if ("string" != typeof e) return b("a client_secret string", e, t); var n, r = (n = e.trim().match(/^((seti|pi)_[^_]+)_secret_[^-]+$/)) ? { id: n[1], clientSecret: n[0] } : null; if (null === r) return b("a client secret of the form ${id}_secret_${secret}", e, t); if (function(e) { var t = e.match(/^(seti|pi)_/); if (t) return "seti" === t[1] ? ee.g.SETUP_INTENT : ee.g.PAYMENT_INTENT; throw new Error("Unexpected intent id or client secret shape") }(r.id) === a) return h(r, []); var o = a === ee.g.PAYMENT_INTENT ? new M.a(f("a PaymentIntent client secret", "a SetupIntent client secret", t)) : new M.a(f("a SetupIntent client secret", "a PaymentIntent client secret", t)); return g(o) } }

    function Ya(e, t) {
        if (null === e) return y("object", "null", t);
        if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
        var n = e.client_secret,
            r = e.status,
            o = e.next_action,
            a = Ha("payment_intent" === e.object ? ee.g.PAYMENT_INTENT : ee.g.SETUP_INTENT)(n, E(t, "client_secret"));
        return "error" === a.type ? a : "string" != typeof r ? y("string", void 0 === r ? "undefined" : Fa(r), E(t, "status")) : "requires_source_action" !== r && "requires_action" !== r || "object" === (void 0 === o ? "undefined" : Fa(o)) ? (e.object, h(e, [])) : y("object", void 0 === o ? "undefined" : Fa(o), E(t, "next_action"))
    }

    function za(d) {
        return function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
            if (null === e) return y("object", "null", t);
            var n = e.type,
                r = Ua(e, ["type"]),
                o = void 0;
            if (null === d) {
                if ("string" != typeof n) return y("string", void 0 === n ? "undefined" : Fa(n), E(t, "type"));
                o = n
            } else {
                if (void 0 !== n && n !== d) return "string" != typeof n ? y("string", void 0 === n ? "undefined" : Fa(n), E(t, "type")) : y('"' + n + '"', '"' + d + '"', E(t, "type"));
                o = d
            }
            var a = r[o],
                i = (r[o], Ua(r, [o]));
            if (-1 !== ["acss_debit", "afterpay_clearpay", "alipay", "bancontact", "eps", "giropay", "grabpay", "konbini", "oxxo", "p24", "paypal", "wechat_pay"].indexOf(o) && void 0 === a && (a = {}), "object" !== (void 0 === a ? "undefined" : Fa(a))) return y("object or element", Fa(e[o]), E(t, o));
            if (null === a) return y("object or element", "null", E(t, o));
            var c = va(a);
            if (c) {
                var s = c._componentName;
                if (La[s] === o) return h({ type: o, element: c, data: i });
                var u = [].concat(qa(t.path), [o]).join("."),
                    l = t.label,
                    p = new M.a("Invalid value for " + l + ": " + u + " was `" + s + "` Element, which cannot be used to create " + o + " PaymentMethods.");
                return g(p)
            }
            return h({ type: o, element: null, data: r })
        }
    }

    function Ga(d, f) {
        return function(e, t) {
            if (void 0 === e) return h({ paymentMethodData: null, paymentMethodOptions: null, source: null, paymentMethod: null, otherParams: {} });
            if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
            if (null === e) return y("object", "null", t);
            var n = e.source,
                r = e.source_data,
                o = e.payment_method_data,
                a = e.payment_method_options,
                i = e.payment_method,
                c = Ua(e, ["source", "source_data", "payment_method_data", "payment_method_options", "payment_method"]);
            if (null != r) throw new M.a(f + ": Expected payment_method, or source, not source_data.");
            if (null != o) throw new M.a(f + ": Expected payment_method, or source, not payment_method_data.");
            if (null != n && null != i) throw new M.a(f + ": Expected either payment_method or source, but not both.");
            if (null === d && null != i && "string" != typeof i) throw new M.a(f + ": Expected payment_method[type] to be set if payment_method is passed.");
            if (null != n) { if ("string" != typeof n) return y("string", void 0 === n ? "undefined" : Fa(n), E(t, "source")); if ("updatePaymentIntent" === f) throw new M.a(f + ": Expected payment_method, not source to be passed."); return h({ source: n, paymentMethodData: null, paymentMethodOptions: null, paymentMethod: null, otherParams: c }) }
            if (null != i && "string" != typeof i && "object" !== (void 0 === i ? "undefined" : Fa(i))) return y("string or object", void 0 === i ? "undefined" : Fa(i), E(t, "payment_method"));
            var s, u = Y((s = d, function(e, t) {
                if (null == e) return h(null);
                if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
                var n = e.card,
                    r = Ua(e, ["card"]);
                if (!n || "object" !== (void 0 === n ? "undefined" : Fa(n))) return h(e);
                var o = n.cvc,
                    a = Ua(n, ["cvc"]);
                if (null == o) return h(e);
                var i = va(o),
                    c = i ? i._componentName : "";
                return ee.b.cardCvc !== c ? y("`" + ee.b.cardCvc + "` Element", c ? "`" + c + "` Element" : void 0 === o ? "undefined" : Fa(o), E(t, (s || "card") + ".cvc")) : h(Ba({}, r, { card: Ba({}, a, { cvc: i }) }))
            }), a, f, { path: [].concat(qa(t.path), ["payment_method_options"]) });
            if ("error" === u.type) return u;
            if ("string" == typeof i) return h({ source: null, paymentMethodData: null, paymentMethodOptions: u.value, paymentMethod: i, otherParams: c });
            if ("object" !== (void 0 === i ? "undefined" : Fa(i)) || null === i) return h({ source: null, paymentMethodData: null, paymentMethodOptions: null, paymentMethod: null, otherParams: c });
            var l = Y(za(d), i, f, { path: [].concat(qa(t.path), ["payment_method"]) });
            if ("error" === l.type) return l;
            var p = l.value;
            return h({ source: null, paymentMethod: null, paymentMethodOptions: u.value, paymentMethodData: p, otherParams: c })
        }
    }
    var Wa, Ka = Ha(ee.g.PAYMENT_INTENT),
        Va = Ha(ee.g.SETUP_INTENT),
        Ja = j(Z({ handleActions: j(N, function() { return !0 }) }), function() { return { handleActions: !0 } }),
        $a = Z({ name: A("react-stripe-js", "stripe-js", "react-stripe-elements"), version: (Wa = C, function(e, t) { return null === e ? h(e) : Wa(e, t) }), startTime: S(R) }),
        Xa = "publishable",
        Za = "secret",
        Qa = "ephemeral",
        ei = "restricted",
        ti = "unknown",
        ni = function(e) {
            if ("" === e) throw new M.a("Please call Stripe() with your publishable key. You used an empty string.");
            switch (function(e) {
                switch (e.split("_", 1)[0]) {
                    case "pk":
                        return Xa;
                    case "sk":
                        return Za;
                    case "ek":
                        return Qa;
                    case "rk":
                        return ei;
                    default:
                        return ti
                }
            }(e)) {
                case Za:
                    throw new M.a("You should not use your secret key with Stripe.js.\n          Please pass a publishable key instead.");
                case Qa:
                    throw new M.a("You should not use an ephemeral key with Stripe.js.\n          Please pass a publishable key instead.");
                case ei:
                    throw new M.a("You should not use a restricted key with Stripe.js.\n          Please pass a publishable key instead.")
            }
        };

    function ri(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var oi = ["elements", "createToken", "createPaymentMethod"],
        ai = ["elements", "createSource", "createToken", "createPaymentMethod"],
        ii = (function(e, t, n) { return t && ri(e.prototype, t), n && ri(e, n), e }(ci, [{ key: "got", value: function(e) { this._didDetect || ("elements" === e ? this._gets = ["elements"] : this._gets.push(e), this._checkForWrapper()) } }, { key: "called", value: function(t) { this._didDetect || (this._gets = this._gets.filter(function(e) { return e !== t })) } }, { key: "_checkForWrapper", value: function() { Object(w.c)(this._gets, oi) ? this._onDetection("react-stripe-js") : Object(w.c)(this._gets, ai) && this._onDetection("react-stripe-elements") } }]), ci);

    function ci(t) { var n = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ci), this._gets = [], this._didDetect = !1, this._onDetection = function(e) { n._didDetect = !0, t(e) }, window.Stripe && window.Stripe.__cachedInstances && this._onDetection("react-stripe-elements") }
    var si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function ui(e) { if (!e || "object" !== (void 0 === e ? "undefined" : si(e))) return null; var t = e.type; return { type: "string" == typeof t ? t : null, data: function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(e, ["type"]) } }

    function li(e) {
        switch (e.type) {
            case "object":
                return { source: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function pi(e) {
        switch (e.type) {
            case "object":
                return { paymentMethod: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function di(e, t, n, r, o) {
        if ("string" == typeof n) return function(e, t, n, r, o) {
            var a = va(r),
                i = ui(a ? o : r),
                c = i || { type: null, data: {} },
                s = c.type,
                u = c.data;
            if (s && n !== s) return ae.a.reject(new M.a("The type supplied in payment_method_data is not consistent."));
            if (a) {
                var l = a._implementation._frame.id,
                    p = a._componentName;
                return e.action.createPaymentMethodWithElement({ frameId: l, elementName: p, type: n, paymentMethodData: u, mids: t }).then(pi)
            }
            return i ? e.action.createPaymentMethodWithData({ elementName: null, type: n, paymentMethodData: u, mids: t }).then(pi) : ae.a.reject(new M.a("Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."))
        }(e, t, n, r, o);
        try {
            var a = Q(za(null), n, "createPaymentMethod").value,
                i = a.element,
                c = a.type,
                s = a.data;
            if (i) {
                var u = i._implementation._frame.id,
                    l = i._componentName;
                return e.action.createPaymentMethodWithElement({ frameId: u, elementName: l, type: c, paymentMethodData: s, mids: t }).then(pi)
            }
            return e.action.createPaymentMethodWithData({ elementName: null, type: c, paymentMethodData: s, mids: t }).then(pi)
        } catch (e) { return ae.a.reject(e) }
    }

    function fi(e) { return "https://stripe.com/docs/stripe-js/reference#stripe-" + e.split(/(?=[A-Z])/).join("-").toLowerCase() }

    function mi(e, t) { return Q(Ka, e, "stripe." + t + " intent secret").value }

    function hi(e, t) { return Q(Va, e, "stripe." + t + " intent secret").value }

    function _i(e, t) { return Q(Ja, t, e).value }

    function yi(e, t, n) {
        if ("valid" === Y(Ta, n, t).type) throw new M.a("Do not pass an Element to stripe." + t + "() directly.\nFor more information: " + fi(t));
        var r = Q(Ga(e, t), n, t).value,
            o = r.source,
            a = r.paymentMethodData,
            i = r.paymentMethodOptions,
            c = r.paymentMethod,
            s = r.otherParams;
        if (null != o && (null != a || null != c)) throw new M.a(t + ": Expected either source or payment_method, but not both.");
        if (a) { if (a.element) return { mode: { tag: "paymentMethod-from-element", type: e, elementName: a.element._componentName, frameId: a.element._implementation._frame.id, data: a.data, options: i }, otherParams: s }; if (e) return { mode: { tag: "paymentMethod-from-data", type: e, data: a.data, options: i }, otherParams: s } } else { if (c) return { mode: { tag: "paymentMethod", paymentMethod: c, options: i }, otherParams: s }; if (o) return { mode: { tag: "source", source: o }, otherParams: s } }
        return { mode: { tag: "none" }, otherParams: s }
    }

    function bi(e, t) { var n = { skipFingerprint: !1, sandboxFingerprintFrame: !1, sandboxChallengeFrame: !1 }; return -1 !== e.indexOf("Y") && (t.report("3ds2.optimization.Y"), n.skipFingerprint = !0), -1 !== e.indexOf("k") && (t.report("3ds2.optimization.k"), n.sandboxFingerprintFrame = !0), -1 !== e.indexOf("5") && (t.report("3ds2.optimization.5"), n.sandboxChallengeFrame = !0), n }

    function vi(e) { return { american_express: "amex", visa: "visa", mastercard: "mastercard", discover: "discover" }[e] || "unknown" }

    function gi(e, t, n) {
        if (!e) return null;
        if ("use_stripe_sdk" === e.type) {
            var r = e.use_stripe_sdk;
            switch (r.type) {
                case "stripe_3ds2_fingerprint":
                    return { type: "3ds2-fingerprint", threeDS2Source: r.three_d_secure_2_source, merchant: r.merchant, cardBrand: vi(r.directory_server_name), transactionId: r.server_transaction_id, optimizations: bi(r.three_ds_optimizations, n), methodUrl: r.three_ds_method_url };
                case "stripe_3ds2_challenge":
                    return { type: "3ds2-challenge", threeDS2Source: r.stripe_js.three_d_secure_2_source, cardBrand: vi(r.stripe_js.directory_server_name), transactionId: r.stripe_js.server_transaction_id, optimizations: bi(r.stripe_js.three_ds_optimizations, n), acsTransactionId: r.stripe_js.acs_transaction_id, acsUrl: r.stripe_js.acs_url, creq: r.stripe_js.creq };
                case "three_d_secure_redirect":
                    return { type: "3ds1-modal", url: r.stripe_js, source: r.source }
            }
        }
        if ("redirect_to_url" === e.type) return { type: "redirect", redirectUrl: e.redirect_to_url.url };
        if ("alipay_handle_redirect" === e.type) return { type: "redirect", redirectUrl: e.alipay_handle_redirect.url };
        if ("boleto_display_details" === e.type) return { type: "boleto-display", hostedVoucherUrl: e.boleto_display_details.hosted_voucher_url };
        if ("display_oxxo_details" === e.type) return { type: "oxxo-display", hostedVoucherUrl: e.display_oxxo_details.hosted_voucher_url };
        if ("konbini_display_details" === e.type) return { type: "konbini-display", hostedVoucherUrl: e.konbini_display_details.hosted_voucher_url };
        if ("oxxo_display_details" === e.type) return { type: "oxxo-display", hostedVoucherUrl: e.oxxo_display_details.hosted_voucher_url };
        if ("authorize_with_url" === e.type) {
            var o = e.authorize_with_url.url;
            switch (t) {
                case xa.card:
                    return { type: "3ds1-modal", url: o, source: null };
                case xa.ideal:
                    return { type: "redirect", redirectUrl: o }
            }
        }
        return "upi_await_notification" === e.type ? { type: "upi_await_notification" } : "wechat_pay_display_qr_code" === e.type ? { type: "wechat_pay_display_qr_code" } : null
    }

    function wi(e) {
        switch (e.type) {
            case "error":
                return { error: e.error };
            case "object":
                switch (e.object.object) {
                    case "payment_intent":
                        return { paymentIntent: e.object };
                    case "setup_intent":
                        return { setupIntent: e.object };
                    default:
                        return Object(T.a)(e.object)
                }
            default:
                return Object(T.a)(e)
        }
    }

    function Ei(e, t, n, r) { return t === ee.g.PAYMENT_INTENT ? n.action.retrievePaymentIntent({ hosted: !1, intentSecret: e, locale: r, asErrorIfNotSucceeded: !0 }).then(wi) : n.action.retrieveSetupIntent({ hosted: !1, intentSecret: e, locale: r, asErrorIfNotSucceeded: !0 }).then(wi) }

    function Si(e, t, n, r, o) { return t === ee.g.PAYMENT_INTENT ? n.action.cancelPaymentIntentSource({ intentSecret: e, locale: o, sourceId: r }).then(wi) : n.action.cancelSetupIntentSource({ intentSecret: e, locale: o, sourceId: r }).then(wi) }

    function Pi(e) { return (e.error ? e.error.payment_intent || e.error.setup_intent : e.paymentIntent || e.setupIntent) || null }

    function ki(n, l, p, d, f) {
        var e, t, r, o, a, i = Mn(),
            m = new Xt.a,
            h = (e = d, t = n.url, r = l.id, o = n.source, a = f, e.createLightboxFrame({ type: ee.c.AUTHORIZE_WITH_URL, options: Ci({ url: t, locale: a, intentId: r }, o ? { source: o } : {}) }));
        return h.show(), d.report("authorize_with_url.loading", { viewport: i, intentId: l.id }), h._on("load", function() { d.report("authorize_with_url.loaded", { loadDuration: m.getElapsedTime(), intentId: l.id }), h.fadeInBackdrop() }), h._on("challenge_complete", function() { h.fadeOutBackdrop() }), new ae.a(function(u, e) {
            var t = n.source;
            t && h._once("cancel", function() { ae.a.all([Si(l, p, d, t, f), h.destroy()]).then(function(e) { var t = Ii(e, 1)[0]; return u(t) }) }), h._once("authorize_with_url_done", function() {
                var e, t, n, o, a, i, c, s, r = h.destroy();
                e = l, t = p, n = d, o = f, a = function(e, t) { r.then(function() { d.report("authorize_with_url.done", { shownDuration: m.getElapsedTime(), success: !("error" in e), intentId: l.id, iterations: t }), u(e) }) }, i = !0, c = 3, s = 0,
                    function r() {
                        s += 1, Ei(e, t, n, o).then(function(e) {
                            if (i) {
                                var t, n = Pi(e);
                                if (null !== n) switch (c = 3, n.status) {
                                    case "requires_action":
                                    case "requires_source_action":
                                        return void setTimeout(r, 5e3);
                                    case "processing":
                                        return void setTimeout(r, 1e3);
                                    default:
                                        a(e, s)
                                } else 0 < c ? (t = 500 * Math.pow(2, 3 - c), setTimeout(r, t), --c) : a(e, s)
                            }
                        })
                    }()
            })
        })
    }
    var Oi = { source: Z({ id: O("src_"), client_secret: O("src_client_secret_") }) },
        Ti = Z(Oi),
        Ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Ii = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Ci = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ji = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ni(e, t) {
        var n = t.intentSecret,
            r = t.controller,
            o = t.locale,
            a = t.hosted,
            i = r.createLightboxFrame({ type: ee.c.STRIPE_3DS2_CHALLENGE, options: { intentId: n.id, hosted: a, locale: o } });
        r.report("3ds2.challenge_frame.loading", { intentId: n.id, hosted: a }), i._on("challenge_complete", function() { i.fadeOutBackdrop() });
        var c, s = (c = i, new ae.a(function(e) { c._on("load", function() { return e(c) }) }));
        return s.then(function() { return r.report("3ds2.challenge_frame.loaded", { intentId: n.id, hosted: a }) }), a && (i.show(), i.action.show3DS2Spinner({ cardBrand: e.cardBrand })), s
    }

    function Ri(o, e, t) {
        var n = t.challengeFrame,
            a = e.controller,
            i = e.intentSecret,
            c = e.intentType,
            s = e.locale,
            u = e.hosted;
        return new ae.a(function(r) {
            n.then(function(e) {
                e._once("cancel", function() { e.fadeOutBackdrop(), Si(i, c, a, o.threeDS2Source, s).then(r) }), u || (e.show(), e.fadeInBackdrop());
                o.type;
                var t = o.optimizations,
                    n = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(o, ["type", "optimizations"]);
                e.action.perform3DS2Challenge(ji({}, n, { shouldSandbox: t.sandboxChallengeFrame })).then(function() { r() })
            })
        })
    }

    function Mi(e, t) {
        var n = t.existingPayload,
            r = t.challengeFrame,
            o = t.startTimestamp,
            a = e.intentSecret,
            i = e.intentType,
            c = e.controller,
            s = e.locale,
            u = e.hosted,
            l = n ? ae.a.resolve(n) : Ei(a, i, c, s);
        return ae.a.all([l, r.then(function(e) { return e.destroy() })]).then(function(e) { var t = qi(e, 1)[0]; return c.report("3ds2.done", Fi({ intentId: a.id, hosted: u, totalDuration: o.getElapsedTime() }, t.error ? { error: t.error, success: !1 } : { success: !0 })), t })
    }

    function xi(e) {
        var t = e.intentSecret,
            n = e.controller,
            r = e.hosted,
            o = e.locale,
            a = n.createHiddenFrame(ee.c.STRIPE_3DS2_FINGERPRINT, { intentId: t.id, locale: o, hosted: r });
        n.report("3ds2.fingerprint_frame.loading", { hosted: r, intentId: t.id });
        var i, c = (i = a, new ae.a(function(e) { i._on("load", function() { return e(i) }) }));
        return c.then(function() { n.report("3ds2.fingerprint_frame.loaded", { hosted: r, intentId: t.id }) }), c
    }

    function Li(c, s) {
        var e, t, n, r, o, a = new Xt.a,
            i = Ni(c, s);
        switch (c.type) {
            case "3ds2-challenge":
                return Ri(c, s, { challengeFrame: i }).then(function(e) { return Mi(s, { existingPayload: e, challengeFrame: i, startTimestamp: a }) });
            case "3ds2-fingerprint":
                return e = c, n = (t = s).intentSecret, r = t.controller, o = t.hosted, (e.optimizations.skipFingerprint ? ae.a.resolve({ fingerprintAttempted: !1, fingerprintData: null }) : "" === e.methodUrl ? (r.report("3ds2.fingerprint.no_method_url", { hosted: o, intentId: n.id }), ae.a.resolve({ fingerprintAttempted: !1, fingerprintData: null })) : xi(t).then(function(t) { return t.action.perform3DS2Fingerprint({ threeDS2Source: e.threeDS2Source, merchant: e.merchant, transactionId: e.transactionId, methodUrl: e.methodUrl, shouldSandbox: e.optimizations.sandboxFingerprintFrame }).then(function(e) { return t.destroy(), e }) })).then(function(e) { return t = c, r = { fingerprintResult: e }.fingerprintResult, o = (n = s).controller, a = n.hosted, i = n.intentSecret, o.report("3ds2.authenticate", { hosted: a, intentId: i.id }), o.action.authenticate3DS2({ threeDS2Source: t.threeDS2Source, outerWindowWidth: window.innerWidth, hosted: a, fingerprintResult: r }).then(function(e) { return "error" === e.type ? o.report("3ds2.authenticate.error", { error: e.error, hosted: a, intentId: i.id }) : o.report("3ds2.authenticate.success", { hosted: a, intentId: i.id }), e }); var t, n, r, o, a, i }).then(function(e) {
                    return function(e, t, n) {
                        var r = n.authResult,
                            o = n.challengeFrame,
                            a = t.controller,
                            i = t.hosted,
                            c = t.intentSecret;
                        if ("error" === r.type || null === r.object.ares) return ae.a.resolve();
                        var s = r.object,
                            u = s.ares,
                            l = s.creq;
                        return "C" !== u.transStatus || null == l ? (a.report("3ds2.frictionless", { hosted: i, intentId: c.id }), ae.a.resolve()) : Ri({ type: "3ds2-challenge", threeDS2Source: e.threeDS2Source, cardBrand: e.cardBrand, transactionId: e.transactionId, acsUrl: u.acsURL, acsTransactionId: u.acsTransID, optimizations: e.optimizations, creq: l }, t, { challengeFrame: o })
                    }(c, s, { authResult: e, challengeFrame: i })
                }).then(function(e) { return Mi(s, { existingPayload: e, challengeFrame: i, startTimestamp: a }) });
            default:
                return Object(T.a)(c)
        }
    }

    function Di(e, t) { var n = e.createLightboxFrame({ type: ee.c.LIGHTBOX_APP, options: t }); return n.show(), n._on("nested-frame-loaded", function() { n.fadeInBackdrop(), setTimeout(function() { n.action.openLightboxFrame() }, 200) }), n }

    function Bi(e) { return e.action.closeLightboxFrame(), e.destroy() }
    var Fi = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        qi = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

    function Ui(r) {
        return new ae.a(function(e, t) {
            var n = setTimeout(function() { e({ type: "error", error: { code: "redirect_error", message: "Failed to redirect to " + r }, locale: "en" }) }, 6e4);
            window.addEventListener("pagehide", function() { clearTimeout(n) }), window.top.location.href = r
        })
    }

    function Hi(e, t, n) { e.report("redirect_error", { initiator: t, error: n.error }) }

    function Yi(e) {
        switch (e.type) {
            case "error":
                var t = e.error;
                if ("payment_intent_unexpected_state" === t.code && "object" === Ki(t.payment_intent) && null != t.payment_intent && "string" == typeof t.payment_intent.status && Ra(t.payment_intent.status)) { var n = t.payment_intent; return { type: "object", locale: e.locale, object: n } }
                return e;
            case "object":
                return e;
            default:
                return Object(T.a)(e)
        }
    }

    function zi(e, t, n, r, o) {
        var a, i, c, s, u, l, p, d, f, m, h, _, y, b, v, g, w, E, S, P, k, O, T, A, I, C, j, N = gi(Ma(t), n, e),
            R = Na(t);
        if (!N) return ae.a.resolve({ paymentIntent: t });
        switch (N.type) {
            case "3ds1-modal":
                return ki(N, R, ee.g.PAYMENT_INTENT, e, r);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
                return Li(N, { intentSecret: R, intentType: ee.g.PAYMENT_INTENT, controller: e, locale: r, hosted: o });
            case "redirect":
                return A = t, I = n, C = N.redirectUrl, j = e, Ui(C).then(function(e) { return Hi(j, I + " redirect", e), Ca(e, A) });
            case "boleto-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("Expect `next_action.boleto_display_details.hosted_voucher_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-boleto_display_details-hosted_voucher_url");
                return E = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, S = E.controller, P = E.url, k = E.intent, O = E.locale, T = Di(S, { url: P, size: "600x700", locale: O, frameTitle: "boleto.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { T._on("request-close", function() { Bi(T).then(function() { e({ paymentIntent: k }) }) }) });
            case "konbini-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("Expected option `handleActions` to be `false`. The Konbini pilot does not handle the next actions for you automatically yet (e.g. displaying Konbini payment details). Please refer to the Stripe Konbini integration guide for more info: \n\nhttps://stripe.com/docs/payments/konbini");
                return _ = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, y = _.controller, b = _.url, v = _.intent, g = _.locale, w = Di(y, { url: b, size: "600x900", locale: g, frameTitle: "konbini.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { w._on("request-close", function() { Bi(w).then(function() { e({ paymentIntent: v }) }) }) });
            case "oxxo-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("To handle the next actions automatically, set the API version to oxxo_beta=v2. Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo");
                return l = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, p = l.controller, d = l.url, f = l.intent, m = l.locale, h = Di(p, { url: d, size: "600x700", locale: m, frameTitle: "oxxo.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { h._on("request-close", function() { Bi(h).then(function() { e({ paymentIntent: f }) }) }) });
            case "upi_await_notification":
                return a = { controller: e, intentSecret: R, intentType: ee.g.PAYMENT_INTENT, locale: r }, i = a.controller, c = a.intentSecret, s = a.intentType, u = a.locale, new ae.a(function(r) {
                    setTimeout(function n() {
                        Ei(c, s, i, u).then(function(e) {
                            var t = Pi(e);
                            null !== t && ("requires_action" !== t.status ? r(e) : setTimeout(n, 1e4))
                        })
                    }, 5e3)
                });
            case "wechat_pay_display_qr_code":
                throw new M.a("Expected option `handleActions` to be `false`.");
            default:
                return ae.a.resolve({ paymentIntent: t })
        }
    }

    function Gi(e, t, n, r, o) { return zi(e, t, n, r, o).then(function(e) { if (e.setupIntent) throw new Error("Got unexpected SetupIntent response"); return e }) }

    function Wi(a, i, c, s) {
        return function(e) {
            var t = Yi(e);
            switch (t.type) {
                case "error":
                    var n = t.error,
                        r = n.payment_intent;
                    return c && r && "payment_intent_unexpected_state" === n.code && ("succeeded" === r.status || "requires_capture" === r.status) ? ae.a.resolve({ paymentIntent: r }) : ae.a.resolve(Ca(e));
                case "object":
                    var o = t.object;
                    return Gi(a, o, i, t.locale, s);
                default:
                    return Object(T.a)(t)
            }
        }
    }
    var Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Ji = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function $i(l, p) {
        return function(e, t, n, r, o) {
            var a = mi(n, l),
                i = yi(p, l, r),
                c = _i(l, o),
                s = "none" === i.mode.tag,
                u = e.action.confirmPaymentIntent(Ji({}, i, { intentSecret: a, expectedType: p, options: c, mids: t }));
            return c.handleActions ? u.then(Wi(e, p, s, !1)) : u.then(Ca)
        }
    }

    function Xi(e, t, n, r) {
        var o = mi(n, "updatePaymentIntent"),
            a = function(e) { if (!e || !e.payment_method || !e.payment_method.type || "string" != typeof e.payment_method.type) return null; var t = e.payment_method.type; return xa[t] || null }(r),
            i = yi(a, "updatePaymentIntent", r);
        return e.action.updatePaymentIntent(Ji({}, i, { intentSecret: o, expectedType: a, mids: t, options: null })).then(Ca)
    }

    function Zi(t, e, n, r) {
        var o = mi(n, "confirmPayment"),
            a = Q(Z({ element: B, data: S(B) }), r, "stripe.confirmPayment()"),
            i = a.value,
            c = i.element,
            s = i.data;
        a.warnings.forEach(function(e) { return t.warn(e) });
        var u = Q(Ta, c, "stripe.confirmPayment()").value,
            l = s || {},
            p = l.payment_method_data,
            d = l.payment_method_options,
            f = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(l, ["payment_method_data", "payment_method_options"]),
            m = p && "object" === (void 0 === p ? "undefined" : Vi(p)) ? p : {},
            h = d && "object" === (void 0 === d ? "undefined" : Vi(d)) ? d : {};
        if ("payment" !== u._componentName) throw new M.a('stripe.confirmPayment() only works with the "payment" element');
        return t.action.confirmPaymentIntent({ mode: { tag: "paymentMethod-from-element", frameId: u._implementation._frame.id, elementName: "payment", type: null, data: m, options: h }, otherParams: f, intentSecret: o, expectedType: null, mids: e, options: { handleActions: !0 } }).then(Ca)
    }

    function Qi(e, r) {
        var t = mi(e, "handleCardAction");
        return r.action.retrievePaymentIntent({ intentSecret: t, hosted: !1 }).then(function(e) {
            var t = Yi(e);
            switch (t.type) {
                case "error":
                    return ae.a.resolve(Ca(e));
                case "object":
                    var n = t.object;
                    if (Ra(n.status)) { if ("manual" !== n.confirmation_method) throw new M.a("handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."); return Gi(r, n, xa.card, t.locale, !1) }
                    throw new M.a("handleCardAction: The PaymentIntent supplied is not in the requires_action state.");
                default:
                    return Object(T.a)(t)
            }
        })
    }

    function ec(e) { var t = e.mode; return !("paymentMethod-from-data" === t.tag && t.data.acss_debit) }

    function tc(e) { return null !== e && "object" === (void 0 === e ? "undefined" : Ic(e)) && !0 === e.skipMandate }

    function nc(e) {
        var t = e.controller,
            n = e.intentSecret,
            r = e.mode,
            o = e.confirmIntentData;
        return t.action.createAcssDebitSession({ intentSecret: n, confirmIntentData: o, mode: r }).then(function(e) {
            if ("error" === e.type) return { type: "error", error: e.error };
            var r = Di(t, { url: e.object.url, size: "400x600", locale: e.locale, frameTitle: "acss.dialog_frame_title", useLightboxHostedCloseButton: !1 });
            return new ae.a(function(n) {
                r._on("request-close", function() { Bi(r).then(function() { return t.action.localizeError(Cc) }).then(function(e) { n({ type: "error", error: e }) }) }), r._on("session-complete", function(e) {
                    var t = e.paymentMethod;
                    Bi(r).then(function() { n({ type: "success", paymentMethod: t }) })
                })
            })
        })
    }

    function rc(a, t, e, n, r) {
        var o = "confirmInstantDebitsPilotPayment",
            i = mi(e, o),
            c = _i(o, r),
            s = yi(null, o, n),
            u = a.createLightboxFrame({ type: ee.c.INSTANT_DEBITS_APP, options: { intentId: i.id, clientSecret: i.clientSecret, apiKey: a._apiKey, returnOnConfirm: !1 === c.handleActions } });
        return u.show(), u.fadeInBackdrop(), new ae.a(function(r) {
            function o(e) { u.fadeOutBackdrop().then(function() { r(e) }) }
            u._once("cancel", function() { u.fadeOutBackdrop(), a.action.localizeError(Mc).then(function(e) { o({ error: e }) }) }), u._on("instant-debits-fetch-payment-intent", function() {
                a.action.retrievePaymentIntent({ intentSecret: i, hosted: !1 }).then(function(e) {
                    var t, n;
                    e.object ? (t = e.object, u.send({ action: "stripe-instant-debits-received-payment-intent", payload: { paymentIntent: t } }), !1 === c.handleActions && setTimeout(function() { u.fadeOutBackdrop(), o(Ca(e)) }, 2e3)) : (n = e.error, a.action.localizeError(n).then(function(e) { r({ error: e }) }))
                })
            }), !1 === c.handleActions && u._on("instant-debits-payment-ready", function() { a.action.retrievePaymentIntent({ intentSecret: i, hosted: !1 }).then(Ca).then(o) }), u._on("instant-debits-attempt-payment", function(e) { a.action.confirmPaymentIntent(Nc({}, s, { mode: { tag: "none" }, intentSecret: i, expectedType: null, options: c, mids: t })).then(function(e) { e.object ? (u.send({ action: "stripe-instant-debits-successful-payment-intent", payload: { paymentIntent: e.object } }), setTimeout(function() { o(Ca(e)) }, 2e3)) : a.action.localizeError(e.error).then(function(e) { o({ error: e }) }) }) }), u._on("instant-debits-payment-error", function(e) { u.fadeOutBackdrop(), a.action.localizeError(e).then(function(e) { o({ error: e }) }) }), u._on("instant-debits-flow-error", function(e) { a.action.localizeError(Rc).then(function(e) { o({ error: e }) }) })
        })
    }

    function oc(e) { return "linked-accounts." + e }

    function ac(t, r) {
        return r.report("link-accounts.launched"), new ae.a(function(n) {
            var e = void 0;
            try { e = r.createLightboxFrame({ type: ee.c.LINKED_ACCOUNTS_INNER, options: { clientSecret: t, apiKey: r._apiKey } }) } catch (e) { return n({ error: { message: e.message } }) }
            return e._on(xc.READY, function() { e.show(), e.fadeInBackdrop() }), e._on(xc.CLOSE, function() { e.fadeOutBackdrop() }), e._on(xc.COMPLETE, function(t) {
                e.destroy(!0).then(function() {
                    var e = {};
                    t.error && (e.errorMessage = t.error.message), r.report("link-accounts.complete", e), n(function(e) {
                        switch (e.type) {
                            case "object":
                                return { linkedAccounts: e.object.data };
                            case "error":
                                return { error: { message: e.error.message || "stripe.linkAccounts: an unknown error occurred." } };
                            default:
                                return Object(T.a)(e)
                        }
                    }(t))
                })
            }), null
        })
    }
    var ic = $i("confirmAcssDebitPayment", xa.acss_debit),
        cc = $i("confirmAfterpayClearpayPayment", xa.afterpay_clearpay),
        sc = $i("confirmAuBecsDebitPayment", xa.au_becs_debit),
        uc = $i("confirmBacsDebitPayment", xa.bacs_debit),
        lc = $i("confirmBancontactPayment", xa.bancontact),
        pc = $i("confirmBoletoPayment", xa.boleto),
        dc = $i("confirmCardPayment", xa.card),
        fc = $i("confirmEpsPayment", xa.eps),
        mc = $i("confirmFpxPayment", xa.fpx),
        hc = $i("confirmGiropayPayment", xa.giropay),
        _c = $i("confirmGrabPayPayment", xa.grabpay),
        yc = $i("confirmIdealPayment", xa.ideal),
        bc = $i("confirmKonbiniPayment", xa.konbini),
        vc = $i("confirmOxxoPayment", xa.oxxo),
        gc = $i("confirmAlipayPayment", xa.alipay),
        wc = $i("confirmP24Payment", xa.p24),
        Ec = $i("confirmPayPalPayment", xa.paypal),
        Sc = $i("confirmSepaDebitPayment", xa.sepa_debit),
        Pc = $i("confirmSofortPayment", xa.sofort),
        kc = $i("confirmIdBankTransferPayment", xa.id_bank_transfer),
        Oc = $i("confirmUpiPayment", xa.upi),
        Tc = $i("confirmNetbankingPayment", xa.netbanking),
        Ac = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Cc = { type: "validation_error", code: "incomplete_payment_details" },
        jc = function(e, t) { if ("object" === (void 0 === e ? "undefined" : Ai(e)) && null !== e && void 0 !== e.handleActions) throw new M.a("stripe." + t + " does not support a handleActions option. For more information, see " + fi(t)) },
        Nc = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Rc = { type: "validation_error", code: "errors.code.unexpected" },
        Mc = { type: "validation_error", code: "errors.code.incomplete_payment_details" },
        xc = (O("bcsess_"), { READY: oc("ready"), CLOSE: oc("close"), COMPLETE: oc("complete") }),
        Lc = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Dc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function Bc(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Fc(e, t) {
        if (null == e) return h(null);
        var n = e.type,
            r = Bc(e, ["type"]),
            o = j(C, function() { return null })(n, E(t, "type"));
        return "error" === o.type ? o : h({ type: o.value, data: r })
    }

    function qc(e, t, n, r) { if (null === e) { if (null !== t) return t; var o = r ? "source_data" : "payment_method_data"; throw new M.a(n + ": you must additionally specify the type of payment method to create within " + o + ".") } if (null === t) return e; if (t !== e) throw new M.a(n + ": you specified `type: " + t + "`, but " + n + " will create a " + e + " payment method."); return e }

    function Uc(p) {
        return function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : Dc(e)) || null === e) return y("object", null === e ? "null" : void 0 === e ? "undefined" : Dc(e), t);
            var n = e.source,
                r = e.source_data,
                o = e.payment_method,
                a = e.payment_method_data,
                i = Bc(e, ["source", "source_data", "payment_method", "payment_method_data"]);
            if (null != n && "string" != typeof n) return y("string", void 0 === n ? "undefined" : Dc(n), E(t, "source"));
            if (null != o && "string" != typeof o) return y("string", void 0 === o ? "undefined" : Dc(o), E(t, "payment_method"));
            if (null != r && "object" !== (void 0 === r ? "undefined" : Dc(r))) return y("object", void 0 === r ? "undefined" : Dc(r), E(t, "source_data"));
            if (null != a && "object" !== (void 0 === a ? "undefined" : Dc(a))) return y("object", void 0 === a ? "undefined" : Dc(a), E(t, "payment_method_data"));
            var c = Fc(r, E(t, "source_data"));
            if ("error" === c.type) return c;
            var s = c.value,
                u = Fc(a, E(t, "payment_method_data"));
            if ("error" === u.type) return u;
            var l = u.value;
            return h({ sourceData: s, source: null == n ? null : n, paymentMethodData: l, paymentMethod: null == o ? null : o, otherParams: Lc({}, p, i) })
        }
    }

    function Hc(o) {
        return function(e, t) {
            if (void 0 === e) return h({ sourceData: null, paymentMethodData: null, source: null, paymentMethod: null, otherParams: {} });
            if ("object" !== (void 0 === e ? "undefined" : Dc(e))) return y("object", void 0 === e ? "undefined" : Dc(e), t);
            if (null === e) return y("object", "null", t);
            if (o) {
                if (!e.payment_intent) return h({ sourceData: null, paymentMethodData: null, source: null, paymentMethod: null, otherParams: e });
                var n = e.payment_intent,
                    r = Bc(e, ["payment_intent"]);
                return Uc(r)(n, E(t, "payment_intent"))
            }
            return e.payment_intent ? g(new M.a("The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.")) : Uc({})(e, t)
        }
    }

    function Yc(e, t, n, r, o, a) {
        var i = Y(Ta, o, r);
        if ("error" === i.type) return null;
        var c = i.value,
            s = Q(Hc(t), a, r).value,
            u = s.sourceData,
            l = s.source,
            p = s.paymentMethodData,
            d = s.paymentMethod,
            f = s.otherParams;
        if (!e && u) throw new M.a(r + ": Expected payment_method_data, not source_data.");
        if (null != l) throw new M.a("When calling " + r + " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element.");
        if (null != d) throw new M.a("When calling " + r + " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element.");
        var m, h, _ = c._componentName,
            y = c._implementation._frame.id,
            b = u || p || { type: null, data: {} },
            v = b.data,
            g = (m = _, null != (h = b.type) ? h : !Ia(m) && La[m] || null),
            w = e && !p,
            E = { elementName: _, frameId: y, type: qc(n, g, r, w), data: v };
        return w ? { mode: Lc({ tag: "source-from-element" }, E), otherParams: f } : { mode: Lc({ tag: "paymentMethod-from-element", options: null }, E), otherParams: f }
    }

    function zc(o, a, i, c) {
        return function(e, t) {
            var n = Yc(o, a, i, c, e, t);
            if (n) return n;
            var r = function(e, t, n, r, o) {
                var a = Q(Hc(t), o, r).value,
                    i = a.sourceData,
                    c = a.source,
                    s = a.paymentMethodData,
                    u = a.paymentMethod,
                    l = a.otherParams;
                if (!e && i) throw new M.a(r + ": Expected payment_method, source, or payment_method_data, not source_data.");
                if (null !== c && null !== i) throw new M.a(r + ": Expected either source or source_data, but not both.");
                if (null !== u && null !== s) throw new M.a(r + ": Expected either payment_method or payment_method_data, but not both.");
                if (null !== u && null !== c) throw new M.a(r + ": Expected either payment_method or source, but not both.");
                if (i || s) {
                    var p = i || s || {},
                        d = p.data,
                        f = e && !s,
                        m = qc(n, p.type, r, f);
                    return f ? { mode: { tag: "source-from-data", type: m, data: d }, otherParams: l } : { mode: { tag: "paymentMethod-from-data", type: m, data: d, options: null }, otherParams: l }
                }
                return null !== c ? { mode: { tag: "source", source: c }, otherParams: l } : null !== u ? { mode: { tag: "paymentMethod", paymentMethod: u, options: null }, otherParams: l } : { mode: { tag: "none" }, otherParams: l }
            }(o, a, i, c, e);
            if (r) return r;
            throw new M.a("Expected: stripe." + c + "(intentSecret, element[, data]) or stripe." + c + "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication")
        }
    }

    function Gc(e, t, n, r, o, a) {
        var i = Q(Ka, r, "stripe.confirmPaymentIntent intent secret").value,
            c = null,
            s = zc(e, !1, c, "confirmPaymentIntent")(o, a);
        return t.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !1 }, mids: n })).then(Ca)
    }

    function Wc(e, t, n, r, o, a, i) {
        var c = Q(Ka, o, "stripe.handleCardPayment intent secret").value,
            s = xa.card,
            u = zc(e, r, s, "handleCardPayment")(a, i),
            l = !a && !i;
        return t.action.confirmPaymentIntent(ss({}, u, { intentSecret: c, expectedType: s, options: { handleActions: !0 }, mids: n })).then(Wi(t, s, l, !1))
    }

    function Kc(e, t, n, r, o, a, i) {
        var c = Q(Ka, o, "stripe.handleIdealPayment intent secret").value,
            s = xa.ideal,
            u = zc(e, r, s, "handleIdealPayment")(a, i),
            l = !a && !i;
        return t.action.confirmPaymentIntent(ss({}, u, { intentSecret: c, expectedType: s, options: { handleActions: !0 }, mids: n })).then(Wi(t, s, l, !1))
    }

    function Vc(e) {
        switch (e.type) {
            case "object":
                return { returnIntent: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function Jc(e, t, n, r, o) {
        var a, i, c, s = gi(Ma(t), n, e),
            u = Na(t);
        if (!s) return ae.a.resolve({ setupIntent: t });
        switch (s.type) {
            case "3ds1-modal":
                return ki(s, u, ee.g.SETUP_INTENT, e, r);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
                return Li(s, { intentSecret: u, intentType: ee.g.SETUP_INTENT, controller: e, locale: r, hosted: o });
            case "redirect":
                return a = n, i = s.redirectUrl, c = e, Ui(i).then(function(e) { return Hi(c, a + " redirect", e), ja(e) });
            default:
                return ae.a.resolve({ setupIntent: t })
        }
    }

    function $c(e, t, n, r, o) { return Jc(e, t, n, r, o).then(function(e) { if (e.paymentIntent) throw new Error("Got unexpected PaymentIntent response"); return e }) }

    function Xc(o, a, i, c) {
        return function(e) {
            switch (e.type) {
                case "error":
                    var t = e.error,
                        n = t.setup_intent;
                    return i && n && "succeeded" === n.status ? ae.a.resolve({ setupIntent: n }) : ae.a.resolve({ error: t });
                case "object":
                    var r = e.object;
                    return $c(o, r, a, e.locale, c);
                default:
                    return Object(T.a)(e)
            }
        }
    }

    function Zc(l, p) {
        return function(e, t, n, r, o) {
            var a = hi(n, l),
                i = yi(p, l, r),
                c = _i(l, o),
                s = "none" === i.mode.tag,
                u = e.action.confirmSetupIntent(us({}, i, { intentSecret: a, expectedType: p, options: c, mids: t }));
            return c.handleActions ? u.then(Xc(e, p, s, !1)) : u.then(ja)
        }
    }

    function Qc(e, t, n, r, o) {
        var a = Q(Va, n, "stripe.handleCardSetup intent secret").value,
            i = xa.card,
            c = zc(!1, !1, i, "handleCardSetup")(r, o),
            s = !r && !o;
        return e.action.confirmSetupIntent(gs({}, c, { intentSecret: a, expectedType: i, options: { handleActions: !0 }, mids: t })).then(Xc(e, i, s, !1))
    }

    function es(e, t) {
        var n, r, o, a, i, c, s = function(e) { if ("string" != typeof e) throw new M.a("stripe.verifyIdentity: Could not parse client secret. Please include the `use_stripe_sdk` parameter on your server when creating the VerificationSession."); var t = e.trim().match(/^((vi|vs)_[0-9a-zA-Z]+)_secret_([0-9a-zA-Z]+)$/); if (!t) throw new M.a("stripe.verifyIdentity: Could not parse client secret. Please include the `use_stripe_sdk` parameter on your server when creating the VerificationSession."); return { identityClientSecret: t[0], id: t[1], token: t[3] } }(e),
            u = s.id,
            l = s.token,
            p = (n = l, ee.f + "start/" + n);
        return o = (r = { controller: t, url: p, id: u }).controller, a = r.url, r.id, i = r.locale, c = Di(o, { url: a, size: "1100x800", frameTitle: "identity.verification_frame_title", locale: void 0 === i ? "en-US" : i, useLightboxHostedCloseButton: !0, allowCamera: !0, appType: "identity" }), new ae.a(function(t) {
            var r = { type: "user_action", code: "session_cancelled" };
            c._on("identity-frame-close", function() { Bi(c).then(function() { t({ error: r }) }) }), c._on("identity-frame-error", function(e) {
                var t = e.type,
                    n = e.code;
                r = { type: t, code: n }
            }), c._on("identity-frame-session-complete", function() { r = null }), c._on("request-close", function(e) { Bi(c).then(function() { t({ error: r }) }) })
        })
    }

    function ts(e, t) { if ("string" != typeof e) return b("an Issuing card ID of the form ic_xxx", e, t); var n, r = (n = e.trim().match(/ic_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an Issuing card ID of the form ic_xxx", e, t) : h(r, []) }

    function ns(e, t) { return Q(ts, e, "stripe." + t + " cardId").value }

    function rs(e, t) { if ("string" != typeof e) return b("an ephemeral key secret of the form ek_xxx", e, t); var n, r = (n = e.trim().match(/ek_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an ephemeral key secret of the form ek_xxx", e, t) : h(r, []) }

    function os(e, t) { return Q(rs, e, "stripe." + t + " ephemeral key secret").value }

    function as(e, t) { if ("string" != typeof e) return b("an ephemeral key nonce of the form ephkn_xxx", e, t); var n, r = (n = e.trim().match(/ephkn_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an ephemeral key nonce of the form ephkn_xxx", e, t) : h(r, []) }

    function is(e) { var t; if ("object" === (void 0 === e ? "undefined" : ws(e)) && e && e.ephemeralKeySecret && e.nonce) return { ephemeralKeySecret: os(e.ephemeralKeySecret, "retrieveIssuingCard"), publicNonce: (t = e.nonce, Q(as, t, "stripe." + "retrieveIssuingCard" + " ephemeral key nonce").value) }; throw new M.a("When retrieving an Issuing card, you must specify an ephemeral key secret and an ephemeral key nonce in the options argument of stripe.retrieveIssuingCard.") }

    function cs(e, t) { var n = function(e) { if ("object" === (void 0 === e ? "undefined" : ws(e)) && e && e.issuingCard) return { issuingCard: ns(e.issuingCard, "createEphemeralKeyNonce") }; throw new M.a("When creating an ephemeral key nonce, you must specify an Issuing card ID in the options argument of stripe.createEphemeralKeyNonce.") }(e); return t.action.createEphemeralKeyNonce({ cardId: n.issuingCard }).then(No) }
    var ss = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        us = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ls = Zc("confirmAcssDebitSetup", xa.acss_debit),
        ps = Zc("confirmCardSetup", xa.card),
        ds = Zc("confirmSepaDebitSetup", xa.sepa_debit),
        fs = Zc("confirmAuBecsDebitSetup", xa.au_becs_debit),
        ms = Zc("confirmBacsDebitSetup", xa.bacs_debit),
        hs = Zc("confirmIdealSetup", xa.ideal),
        _s = Zc("confirmAlipaySetup", xa.alipay),
        ys = Zc("confirmSofortSetup", xa.sofort),
        bs = Zc("confirmBancontactSetup", xa.bancontact),
        vs = Zc("confirmIdBankTransferSetup", xa.id_bank_transfer),
        gs = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ws = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Es = [Zt.checkout_beta_2, Zt.checkout_beta_3, Zt.checkout_beta_4],
        Ss = [Zt.checkout_beta_2, Zt.checkout_beta_3, Zt.checkout_beta_4, Zt.checkout_beta_locales, Zt.checkout_beta_testcards],
        Ps = Object.keys({ bg: "bg", cs: "cs", da: "da", de: "de", el: "el", en: "en", "en-GB": "en-GB", es: "es", "es-419": "es-419", et: "et", fi: "fi", fr: "fr", "fr-CA": "fr-CA", hu: "hu", id: "id", it: "it", ja: "ja", lt: "lt", lv: "lv", ms: "ms", mt: "mt", nb: "nb", nl: "nl", pl: "pl", pt: "pt", "pt-BR": "pt-BR", ro: "ro", ru: "ru", sk: "sk", sl: "sl", sv: "sv", th: "th", tr: "tr", zh: "zh", "zh-HK": "zh-HK", "zh-TW": "zh-TW" }),
        ks = Object.keys({ "pt-PT": "pt-PT" }),
        Os = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ts(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function As(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function Is(e, t) {
        var n = X(Os({}, Ns, { items: S(P(F(X({ type: A("plan"), quantity: x(0), id: C })), F(X({ type: A("sku"), quantity: x(0), id: C })))), successUrl: C, cancelUrl: C })),
            r = Q(n, t, "stripe.redirectToCheckout").value,
            o = r.sku,
            a = r.plan,
            i = r.items,
            c = Ts(r, ["sku", "plan", "items"]),
            s = function(e, t, n) { if (e && t || (e || t) && n) throw new M.a("stripe.redirectToCheckout: Expected only one of sku, plan, or items."); if ("string" == typeof e) return [{ sku: e, quantity: 1 }]; if ("string" == typeof t) return [{ plan: t, quantity: 1 }]; if (n) return n.map(function(e) { return "sku" === e.type ? { sku: e.id, quantity: e.quantity } : { plan: e.id, quantity: e.quantity } }); throw new M.a("stripe.redirectToCheckout: You must provide either sku, plan, or items.") }(o, a, i);
        return Os({ tag: "no-session", items: s }, c)
    }

    function Cs(e, t, n) {
        var r = X(Os({}, Ns, { sessionId: S(C), successUrl: S(C), cancelUrl: S(C), mode: S(A("subscription", "payment")), items: S(P(F(X({ quantity: x(0), plan: C })), F(X({ quantity: x(0), sku: C })))), lineItems: S(F(X({ quantity: x(0), price: C }))) }, -1 !== e.indexOf("checkout_beta_locales") ? { locale: S(A.apply(void 0, ["auto"].concat(As(Ps), As(ks)))) } : {})),
            o = Q(r, t, "stripe.redirectToCheckout").value;
        if (o.sessionId) { var a = o.sessionId; if (1 < Object.keys(o).length) throw new M.a("stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."); if (!/^cs_/.test(a)) throw new M.a("stripe.redirectToCheckout: Invalid value for sessionId. You specified '" + a + "'."); if ("live" === n && /^cs_test_/.test(a)) throw new M.a("stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."); if ("test" === n && /^cs_live_/.test(a)) throw new M.a("stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."); return { tag: "session", sessionId: a } }
        o.sessionId, o.sku, o.plan;
        var i = o.items,
            c = o.lineItems,
            s = o.successUrl,
            u = o.cancelUrl,
            l = o.mode,
            p = Ts(o, ["sessionId", "sku", "plan", "items", "lineItems", "successUrl", "cancelUrl", "mode"]);
        if (!c && !i) throw new M.a("stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId.");
        if (!s || !u) throw new M.a("stripe.redirectToCheckout: You must provide successUrl and cancelUrl.");
        return Os({ tag: "no-session", items: i, lineItems: c, successUrl: s, cancelUrl: u, mode: l }, p)
    }

    function js(e, t, n) {
        var r = Cs(e, t, n);
        if ("no-session" !== r.tag) return r;
        var o = r.successUrl,
            a = r.cancelUrl;
        if (!Object(v.b)(o)) throw new M.a("stripe.redirectToCheckout: successUrl must start with either http:// or https://.");
        if (!Object(v.b)(a)) throw new M.a("stripe.redirectToCheckout: cancelUrl must start with either http:// or https://.");
        return r
    }
    var Ns = { sku: S(C), plan: S(C), clientReferenceId: S(C), locale: S(A.apply(void 0, ["auto"].concat(As(Ps)))), customerEmail: S(C), billingAddressCollection: S(A("required", "auto")), submitType: S(A("auto", "pay", "book", "donate")), allowIncompleteSubscriptions: S(N), shippingAddressCollection: S(X({ allowedCountries: F(C) })) },
        Rs = /cs_(test|live)_.+/,
        Ms = function(e, t, n, r) {
            var o, a;
            return o = t, "session" === (a = function(t, e, n) {
                var r = Object(w.a)(Es, function(e) { return Gt(t, e) });
                if (e && e.lineItems && r) throw new M.a("Prices cannot be used with " + r);
                if ("string" == typeof e && Rs.test(e)) throw new M.a("stripe.redirectToCheckout: Checkout Session IDs must be passed in as an object with a key of `sessionId` and the Session ID as the value.");
                switch (r) {
                    case "checkout_beta_2":
                        return Is(0, e);
                    case "checkout_beta_3":
                        return Cs(t, e, n);
                    case "checkout_beta_4":
                    default:
                        return js(t, e, n)
                }
            }(e, n, 3 < arguments.length && void 0 !== r ? r : "unknown")).tag || null == o || a.locale || -1 === ["auto"].concat(As(Ps)).indexOf(o) ? a : Os({}, a, { locale: o })
        },
        xs = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ls(t, e) { return Ui(e).then(function(e) { return Hi(t, "redirectToCheckout", e), { error: e.error } }) }

    function Ds(n, t, e, r, o) {
        n.report("redirect_to_checkout.options", { betas: t, options: o, globalLocale: r });
        var a = Ms(t, r, o, n.keyMode());
        if ("session" === a.tag) { var i = a.sessionId; return n.action.createPaymentPageWithSession({ betas: t, mids: e(), sessionId: i }).then(function(e) { if ("error" === e.type) return { error: e.error }; var t = e.object.url; return Ls(n, t) }) }
        a.tag;
        var c = a.items,
            s = a.lineItems,
            u = a.mode,
            l = a.successUrl,
            p = a.cancelUrl,
            d = a.clientReferenceId,
            f = a.customerEmail,
            m = a.billingAddressCollection,
            h = a.submitType,
            _ = a.allowIncompleteSubscriptions,
            y = a.shippingAddressCollection,
            b = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(a, ["tag", "items", "lineItems", "mode", "successUrl", "cancelUrl", "clientReferenceId", "customerEmail", "billingAddressCollection", "submitType", "allowIncompleteSubscriptions", "shippingAddressCollection"]),
            v = [];
        if (s && c) throw new Error("Only one of items, lineItems can be passed in.");
        if (s) {
            if (!u) throw new Error("Expected `mode`");
            v = s.map(function(e) { if (e.price) return { type: "price", id: e.price, quantity: e.quantity }; throw new Error("Unexpected item shape.") })
        } else {
            if (!c) throw new Error("An items field must be passed in.");
            v = c.map(function(e) { if (e.sku) return { type: "sku", id: e.sku, quantity: e.quantity }; if (e.plan) return { type: "plan", id: e.plan, quantity: e.quantity }; throw new Error("Unexpected item shape.") })
        }
        var g = Object(w.a)(Es, function(e) { return Gt(t, e) });
        return n.action.createPaymentPage(xs({ betas: t, mids: e(), items: v, mode: u, success_url: l, cancel_url: p, client_reference_id: d, customer_email: f, billing_address_collection: m, submit_type: h, use_payment_methods: !g, allow_incomplete_subscriptions: _, shipping_address_collection: y && { allowed_countries: y.allowedCountries } }, b)).then(function(e) { if ("error" === e.type) return { error: e.error }; var t = e.object.url; return Ls(n, t) })
    }

    function Bs(e) {
        switch (e.type) {
            case "object":
                return { token: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function Fs(e) { return "object" === (void 0 === e ? "undefined" : Us(e)) && null !== e ? e : {} }

    function qs(e) {
        switch (e.type) {
            case "object":
                return { radarSession: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }
    var Us = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Hs = "securitypolicyviolation",
        Ys = window,
        zs = /^require-trusted-types-for/,
        Gs = "LOAD_ERROR",
        Ws = "REPORT_ONLY",
        Ks = "BLOCKED",
        Vs = function(e, t, n) { return t && Js(e.prototype, t), n && Js(e, n), e };

    function Js(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var $s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Xs(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
    var Zs = new Xt.a,
        Qs = document ? document.readyState : "unknown",
        eu = !1;
    switch (Qs) {
        case "loading":
            eu = !0;
            break;
        case "interactive":
            try {
                var tu = function() { eu = !0 };
                setTimeout(function() { document.removeEventListener("DOMContentLoaded", tu) }, 0), document.addEventListener("DOMContentLoaded", tu)
            } catch (e) {}
    }

    function nu(t, e, n, r) {
        var o, a, i, c, s, u, l, p, d, f;
        cu && !r || (cu = !0, o = r || new Xt.a, "complete" === document.readyState ? (f = l = u = s = c = null, window.performance && (window.performance.timing && (i = (a = window.performance.timing).fetchStart, c = a.domLoading - i, s = a.domInteractive - i, u = a.domComplete - i, l = Xt.a.fromPosixTime(i).getElapsedTime(Zs)), window.performance.getEntriesByType && (p = window.performance.getEntriesByType("resource"), d = "https://js.stripe.com/v3/".replace(/\/$/, ""), f = p.reduce(function(e, t) { if (0 === t.name.indexOf(d)) { var n = t.name.match(/\/([^/#?]*)\/?(?:$|[#?])/); if (n && n[1]) { var r = n[1].replace(/-[0-9a-f]{32}\./, "."); return "v3" === r && (r = "stripe.js"), $s({}, e, (o = {}, a = r, i = { transfer_size: t.transferSize, duration: Math.round(t.duration) }, a in o ? Object.defineProperty(o, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = i, o)) } } var o, a, i; return e }, {}))), t.report("timings", { element: t.controllerFor(), dom_loading: c, dom_interactive: s, dom_complete: u, since_fetch: l, load_count: 1, load_before_dom_content_loaded: eu, load_ready_state: Qs, first_create_ready_state: e, first_mount_readyState: n, until_first_create: Zs.getElapsedTime(t._createTimestamp), until_first_mount: Zs.getElapsedTime(t._mountTimestamp), until_first_load: Zs.getElapsedTime(o), resource_timings: f }), setTimeout(function() {
            new ae.a(function(e) {
                if (Ys.trustedTypes && Ys.Promise) {
                    var t = !1,
                        n = function(e) {
                            (zs.test(e.effectiveDirective) || zs.test(e.violatedDirective)) && (Object(bt.b)(e.blockedURI) || Object(bt.b)(e.sourceFile)) && (t = !0)
                        },
                        r = function() { return t ? Ks : Gs };
                    Ys.addEventListener(Hs, n);
                    var o = void 0;
                    try { o = m.e(4).then(m.bind(null, 30)).then(function(e) { return (e.loaded && t ? Ws : "ALLOWED") || Gs }, r) } catch (e) { o = new ae.a(function(e) { return setTimeout(e, 0) }).then(r) }
                    o.then(function() { Ys.removeEventListener(Hs, n) }), e(o)
                } else e("NOT_SUPPORTED")
            }).then(function(e) {
                t.report("trusted_types_check", { result: e }),
                    function(e) {
                        switch (e) {
                            case Ws:
                            case Ks:
                                return !0
                        }
                        return !1
                    }(e) && t.warn("We noticed that you are using Trusted Types. Nothing has broken, but we plan to add dynamic loading to parts of Stripe.js. Please allow scripts from 'https://js.stripe.com' in your default Trusted Types policy. For more information: https://stripe.com/docs/security/guide#content-security-policy")
            })
        }, 5e3)) : window.addEventListener("load", function() { try { nu(t, e, n, o) } catch (e) {} }))
    }

    function ru(e) { return "You have an in-flight " + e + "! Please be sure to disable your form submit button when " + e + " is called." }

    function ou(e) { return function() { throw new M.a("You cannot call `stripe." + e + "` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart.") } }

    function au(e) { return function() { throw new M.a("You cannot call `stripe." + e + "` without supplying an Issuing beta flag when initializing Stripe.js.") } }
    var iu, cu = !1,
        su = Z({ apiKey: C, stripeAccount: S(C), locale: S(C), apiVersion: S(C), __privateApiUrl: S(C), __checkout: S(Z({ mids: Z({ muid: C, sid: C }) })), __hosted3DS: S(N), canCreateRadarSession: S(N), betas: S(F(I.apply(void 0, Xs(en)))) }),
        uu = (Vs(lu, [{
            key: "_attachCreateRadarSession",
            value: function(e) {
                var t, n, r = this;
                e && (this.createRadarSession = (t = function() { return r._midsPromise().then(function(e) { return t = r._controller, n = e, t.action.createRadarSession({ mids: n }).then(qs); var t, n }) }, function() { try { return t.call(this) } catch (e) { return W(e, n || this && this._controller) } }))
            }
        }, {
            key: "_attachPaymentIntentMethods",
            value: function(e, t) {
                function r() { return o._mids() }
                var o = this;
                this.createPaymentMethod = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return di.apply(void 0, [o._controller, r()].concat(t)) }), this._createPaymentMethod = this.createPaymentMethod, this.retrievePaymentIntent = se(function(e) { return t = e, n = o._controller, r = mi(t, "retrievePaymentIntent"), n.action.retrievePaymentIntent({ intentSecret: r, hosted: !1 }).then(Ca); var t, n, r }), this.retrieveSetupIntent = se(function(e) { return t = e, n = o._controller, r = hi(t, "retrieveSetupIntent"), n.action.retrieveSetupIntent({ intentSecret: r, hosted: !1 }).then(ja); var t, n, r }), this.updatePaymentIntent = ou("updatePaymentIntent"), (Gt(this._betas, Zt.line_items_beta_1) || Gt(this._betas, Zt.tax_product_beta_1)) && (this.updatePaymentIntent = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Xi.apply(void 0, [o._controller, r()].concat(t)) }));
                var n = Object(hr.a)(Qi, ru("handleCardAction"));
                this.handleCardAction = se(function(e) { return n(e, o._controller) });
                var a = Object(hr.a)(dc, ru("confirmCardPayment"));
                this.confirmCardPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return a.apply(void 0, [o._controller, r()].concat(t)) });
                var i = Object(hr.a)(ps, ru("confirmCardSetup"));
                this.confirmCardSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdealPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return yc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSepaDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Sc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSepaDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ds.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmFpxPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return mc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAlipayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return gc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAlipaySetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return _s.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAuBecsDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return sc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAuBecsDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return fs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBacsDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return uc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBacsDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ms.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBancontactPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return lc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmEpsPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return fc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmGiropayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return hc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmOxxoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmP24Payment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return wc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSofortPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Pc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdealSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return hs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSofortSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ys.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBancontactSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return bs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmGrabPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return _c.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAfterpayClearpayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return cc.apply(void 0, [o._controller, r()].concat(t)) }), this.verifyMicrodepositsForPayment = ue(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, t, n) {
                        var r = mi(t, "verifyMicrodepositsForPayment"),
                            o = Q(B, n, "stripe.verifyMicrodepositsForPayment");
                        return e.action.verifyMicrodepositsForPayment({ intentSecret: r, data: o.value }).then(Ca)
                    }.apply(void 0, [o._controller].concat(t))
                }), this.verifyMicrodepositsForSetup = ue(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, t, n) {
                        var r = hi(t, "verifyMicrodepositsForSetup"),
                            o = Q(B, n, "stripe.verifyMicrodepositsForSetup");
                        return e.action.verifyMicrodepositsForSetup({ intentSecret: r, data: o.value }).then(ja)
                    }.apply(void 0, [o._controller].concat(t))
                }), Gt(this._betas, Zt.acss_debit_beta_1) ? (this.confirmAcssDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ic.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAcssDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ls.apply(void 0, [o._controller, r()].concat(t)) })) : (this.confirmAcssDebitPayment = K(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                        var a = "confirmAcssDebitPayment",
                            i = xa.acss_debit,
                            c = mi(e, a),
                            s = yi(i, a, r);
                        return jc(o, a), tc(o) || !ec(s) ? t.action.confirmPaymentIntent(Ac({}, s, { intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n })).then(Ca) : nc({ controller: t, intentSecret: c, mode: "payment", confirmIntentData: s }).then(function(e) {
                            switch (e.type) {
                                case "error":
                                    return { error: e.error };
                                case "success":
                                    return t.action.confirmPaymentIntent({ mode: { tag: "paymentMethod", paymentMethod: e.paymentMethod, options: s.mode.options || {} }, otherParams: s.otherParams, intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n }).then(Ca);
                                default:
                                    return Object(T.a)(e.type)
                            }
                        })
                    }.apply(void 0, [o._controller, r()].concat(t))
                }), this.confirmAcssDebitSetup = K(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                        var a = "confirmAcssDebitSetup",
                            i = xa.acss_debit,
                            c = hi(e, a),
                            s = yi(i, a, r);
                        return jc(o, a), tc(o) || !ec(s) ? t.action.confirmSetupIntent(Ac({}, s, { intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n })).then(ja) : nc({ controller: t, intentSecret: c, mode: "setup", confirmIntentData: s }).then(function(e) {
                            switch (e.type) {
                                case "error":
                                    return { error: e.error };
                                case "success":
                                    return t.action.confirmSetupIntent({ mode: { tag: "paymentMethod", paymentMethod: e.paymentMethod, options: s.mode.options || {} }, otherParams: s.otherParams, intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n }).then(ja);
                                default:
                                    return Object(T.a)(e.type)
                            }
                        })
                    }.apply(void 0, [o._controller, r()].concat(t))
                })), Gt(this._betas, Zt.return_intents_beta_1) && (this.confirmReturnIntent = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n) { return e.action.confirmReturnIntent({ returnIntentId: t, data: n }).then(Vc) }.apply(void 0, [o._controller].concat(t)) })), this.confirmBoletoPayment = ou("confirmBoletoPayment"), Gt(this._betas, Zt.boleto_pm_beta_1) && (this.confirmBoletoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return pc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmKonbiniPayment = ou("confirmKonbiniPayment"), Gt(this._betas, Zt.konbini_pm_beta_1) && (this.confirmKonbiniPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return bc.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.oxxo_pm_beta_1) && (this.confirmOxxoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmWechatPayPayment = ou("confirmWechatPayPayment"), Gt(this._betas, Zt.wechat_pay_pm_beta_1) && (this.confirmWechatPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n, r, o) { if (o && !0 === o.handleActions) throw new M.a("Expected option `handleActions` to be `false`."); var a = Ji({}, r, { payment_method: Ji({}, r && r.payment_method || {}), payment_method_options: Ji({}, r && r.payment_method_options || {}, { wechat_pay: Ji({}, r && r.payment_method_options && r.payment_method_options.wechat_pay || {}, { client: "web" }) }) }); return $i("confirmWechatPayPayment", xa.wechat_pay)(e, t, n, a, o) }.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.wechat_pay_pm_beta_2) && (this.confirmWechatPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n, r, o) { if (o && !0 === o.handleActions) throw new M.a("Expected option `handleActions` to be `false`."); if (!r || !r.payment_method_options || !r.payment_method_options.wechat_pay || "web" !== r.payment_method_options.wechat_pay.client && "mobile_web" !== r.payment_method_options.wechat_pay.client) throw new M.a("Expected client value `web` or `mobile_web` in payment_method_options."); var a = Ji({}, r, { payment_method: Ji({}, r && r.payment_method || {}), payment_method_options: Ji({}, r && r.payment_method_options || {}, { wechat_pay: Ji({}, r && r.payment_method_options && r.payment_method_options.wechat_pay || {}) }) }); return $i("confirmWechatPayPayment", xa.wechat_pay)(e, t, n, a, o) }.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmPayPalPayment = ou("confirmPayPalPayment"), Gt(this._betas, Zt.paypal_pm_beta_1) && (this.confirmPayPalPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Ec.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmUpiPayment = ou("confirmUpiPayment"), Gt(this._betas, Zt.upi_beta_1) && (this.confirmUpiPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Oc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmNetbankingPayment = ou("confirmNetbankingPayment"), Gt(this._betas, Zt.netbanking_beta_1) && (this.confirmNetbankingPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Tc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmInstantDebitsPilotPayment = ou("confirmInstantDebitsPilotPayment"), Gt(this._betas, Zt.instant_debits_beta_1) && (this.confirmInstantDebitsPilotPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return rc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmIdBankTransferPayment = ou("confirmIdBankTransferPayment"), this.confirmIdBankTransferSetup = ou("confirmIdBankTransferSetup"), Gt(this._betas, Zt.id_bank_transfer_beta_1) && (this.confirmIdBankTransferPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return kc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdBankTransferSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vs.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.expresspay_beta_1) && (this.confirmPayment = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Zi.apply(void 0, [o._controller, r()].concat(t)) })), t && (this.handleHosted3DS2Payment = se(function(e) { return t = e, n = o._controller, r = mi(t, "handleHosted3DS2Setup [internal]"), n.action.retrievePaymentIntent({ intentSecret: r, hosted: !0 }).then(Wi(n, xa.card, !1, !0)); var t, n, r }), this.handleHosted3DS2Setup = se(function(e) { return t = e, n = o._controller, r = hi(t, "handleHosted3DS2Setup [internal]"), n.action.retrieveSetupIntent({ intentSecret: r, hosted: !0 }).then(Xc(n, xa.card, !1, !0)); var t, n, r }))
            }
        }, {
            key: "_attachLegacyPaymentIntentMethods",
            value: function() {
                function r() { return o._mids() }
                var o = this,
                    a = Gt(this._betas, Zt.payment_intent_beta_1) || Gt(this._betas, Zt.payment_intent_beta_2),
                    e = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Gc.apply(void 0, [!0, o._controller, r()].concat(t)) }),
                    t = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Gc.apply(void 0, [!1, o._controller, r()].concat(t)) }),
                    i = Object(hr.a)(Wc, ru("handleCardPayment")),
                    n = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [!0, o._controller, r(), a].concat(t)) }),
                    c = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [!1, o._controller, r(), a].concat(t)) }),
                    s = Object(hr.a)(Qc, ru("handleCardSetup")),
                    u = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return s.apply(void 0, [o._controller, r()].concat(t)) }),
                    l = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o) {
                            var a = Q(Va, n, "stripe.confirmSetupIntent intent secret").value,
                                i = null,
                                c = zc(!1, !1, i, "confirmSetupIntent")(r, o);
                            return e.action.confirmSetupIntent(gs({}, c, { otherParams: gs({}, c.otherParams), intentSecret: a, expectedType: i, options: { handleActions: !1 }, mids: t })).then(ja)
                        }.apply(void 0, [o._controller, r()].concat(t))
                    }),
                    p = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o, a) {
                            var i = Q(Ka, r, "stripe.handleSepaDebitPayment intent secret").value,
                                c = xa.sepa_debit,
                                s = zc(!1, n, c, "handleSepaDebitPayment")(o, a),
                                u = !o && !a;
                            return e.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !0 }, mids: t })).then(Wi(e, c, u, !1))
                        }.apply(void 0, [o._controller, r(), a].concat(t))
                    }),
                    d = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o) {
                            var a = Q(Va, n, "stripe.handleSepaDebitSetup intent secret").value,
                                i = xa.sepa_debit,
                                c = zc(!1, !1, i, "handleSepaDebitSetup")(r, o),
                                s = !r && !o;
                            return e.action.confirmSetupIntent(gs({}, c, { intentSecret: a, expectedType: i, options: { handleActions: !0 }, mids: t })).then(Xc(e, i, s, !1))
                        }.apply(void 0, [o._controller, r()].concat(t))
                    }),
                    f = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Kc.apply(void 0, [!0, o._controller, r(), a].concat(t)) }),
                    m = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Kc.apply(void 0, [!1, o._controller, r(), a].concat(t)) }),
                    h = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o, a) {
                            var i = Q(Ka, r, "stripe.handleFpxPayment intent secret").value,
                                c = xa.fpx,
                                s = zc(!1, n, c, "handleFpxPayment")(o, a),
                                u = !o && !a;
                            return e.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !0 }, mids: t })).then(Wi(e, c, u, !1))
                        }.apply(void 0, [o._controller, r(), a].concat(t))
                    });
                this.handleCardPayment = c, this.confirmPaymentIntent = t, this.handleCardSetup = u, this.confirmSetupIntent = l, this.fulfillPaymentIntent = ou("fulfillPaymentIntent"), this.handleSepaDebitPayment = ou("handleSepaDebitPayment"), this.handleSepaDebitSetup = ou("handleSepaDebitSetup"), this.handleIdealPayment = ou("handleIdealPayment"), this.handleFpxPayment = ou("handleFpxPayment"), Gt(this._betas, Zt.payment_intent_beta_1) ? this.fulfillPaymentIntent = n : (Gt(this._betas, Zt.payment_intent_beta_3) || Gt(this._betas, Zt.payment_intent_beta_2)) && (this.handleCardPayment = n), Gt(this._betas, Zt.payment_intent_beta_3) && (this.confirmPaymentIntent = e, this.handleIdealPayment = f, this.handleSepaDebitPayment = p), Gt(this._betas, Zt.fpx_bank_beta_1) && (this.handleFpxPayment = h), Gt(this._betas, Zt.ideal_pm_beta_1) && (this.handleIdealPayment = m), Gt(this._betas, Zt.sepa_pm_beta_1) && (this.handleSepaDebitPayment = p, this.handleSepaDebitSetup = d)
            }
        }, {
            key: "_attachPrivateMethodsForCheckout",
            value: function(e) {
                var a = this;
                e && (this.sendInteractionEvent = $t, this.tryNextAction = ue(function(e, t) {
                    var n = Q(Ya, e, "Payment Intent").value,
                        r = Object.keys(xa).map(function(e) { return xa[e] }),
                        o = Q(A.apply(void 0, Xs(r)), t, "Source type").value;
                    return ("payment_intent" === n.object ? Gi : $c)(a._controller, n, o, "auto", !1)
                }))
            }
        }, {
            key: "_attachCheckoutMethods",
            value: function(e) {
                function t() { return n._mids() }
                var n = this,
                    r = e.reduce(function(e, t) { var n = Object(w.a)(Ss, function(e) { return e === t }); return n ? [].concat(Xs(e), [n]) : e }, []);
                this.redirectToCheckout = function(e) { return Ds(n._controller, r, t, n._locale, e) }
            }
        }, {
            key: "_attachGetters",
            value: function() {
                var t = this,
                    a = new ii(function(e) { t._registerWrapper({ name: e, version: null }) });
                ["elements", "createToken", "createSource", "createPaymentMethod"].forEach(function(r) {
                    var o, e;
                    t.hasOwnProperty(r) && (o = t[r], e = function() { a.called(r); for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return o.apply(this, t) }, Object.defineProperty(t, r, { enumerable: !0, get: function() { return a.got(r), e } }))
                })
            }
        }, {
            key: "_attachIssuingCardMethods",
            value: function() {
                var c = this;
                this.retrieveIssuingCard = au("retrieveIssuingCard"), this.createEphemeralKeyNonce = au("createEphemeralKeyNonce"), Gt(this._betas, Zt.issuing_elements_1) ? this.retrieveIssuingCard = ue(function(e, t) { return n = e, r = t, o = c._controller, a = ns(n, "retrieveIssuingCard"), i = os(r, "retrieveIssuingCard"), o.action.retrieveIssuingCardWithoutNonce({ cardId: a, ephemeralKeySecret: i }).then(jo); var n, r, o, a, i }) : Gt(this._betas, Zt.issuing_elements_2) && (this.retrieveIssuingCard = ue(function(e, t) { return n = e, r = t, o = c._controller, a = ns(n, "retrieveIssuingCard"), i = is(r), o.action.retrieveIssuingCard({ cardId: a, ephemeralKeySecret: i.ephemeralKeySecret, publicNonce: i.publicNonce }).then(jo); var n, r, o, a, i }), this.createEphemeralKeyNonce = se(function(e) { return cs(e, c._controller) }))
            }
        }, {
            key: "_attachIdentityMethods",
            value: function() {
                var e, t = this;
                this.verifyIdentity = (e = "verifyIdentity", function() { throw new M.a("You cannot call `stripe." + e + "` without supplying an Identity beta flag when initializing Stripe.js.") }), Gt(this._betas, Zt.identity_dialog_1) && (this.verifyIdentity = se(function(e) { return es(e, t._controller) }))
            }
        }, {
            key: "_attachControllerGetter",
            value: function(t, n, r, o) {
                var a = this,
                    i = [],
                    c = document.readyState,
                    s = void 0;
                Object.defineProperties(this, { _registerWrapper: { enumerable: !1, configurable: !0, writable: !1, value: function(e) { i.push(e) } }, _controller: { enumerable: !0, configurable: !0, get: function() { if (s) return s; var e = document.readyState; return s = new Ln($s({ apiKey: a._apiKey, apiVersion: t, __privateApiUrl: n, stripeAccount: r, betas: a._betas, stripeJsId: lu.stripeJsId, stripeJsLoadTimestamp: Zs, stripeCreateTimestamp: o, onFirstLoad: function() { try { nu(s, c, e) } catch (e) {} }, listenerRegistry: a._listenerRegistry }, a._locale ? { locale: a._locale } : {})), Object.defineProperties(a, { _registerWrapper: { value: fu, writable: !1, enumerable: !1, configurable: !0 }, _controller: { value: s, writable: !0, enumerable: !0, configurable: !0 } }), i.forEach(function(e) { return a._registerWrapper(e) }), i.splice(0), s } } })
            }
        }, {
            key: "_attachLinkedAccounts",
            value: function(e) {
                var t = this;
                this.linkAccounts = function() { throw new M.a("You cannot call `stripe.linkAccounts` without supplying a LinkedAccounts beta flag when initializing Stripe.js.") }, Gt(e, Zt.linked_accounts_beta_1) && (this.linkAccounts = se(function(e) { return ac(e, t._controller) }))
            }
        }, {
            key: "_ensureHTTPS",
            value: function() {
                var e = window.location.protocol,
                    t = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname),
                    n = !0 === window.isSecureContext && !t || -1 !== ["https:", "file:", "ionic:", "httpsionic:", "chrome-extension:", "moz-extension:"].indexOf(e),
                    r = this._keyMode === s.live,
                    o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security/guide#tls";
                if (!n) { if (r && !t) throw this._controller.report("user_error.non_https_error", { protocol: e }), new M.a(o);!r || t ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o) }
            }
        }, { key: "_ensureStripeHosted", value: function(e) { if (!e) throw this._controller.report("user_error.self_hosted"), new M.a("Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs") } }, { key: "_mids", value: function() { return lu._ec ? lu._ec.ids() : null } }, { key: "_midsPromise", value: function() { return lu._ec ? lu._ec.idsPromise() : ae.a.resolve(this._mids()) } }]), lu);

    function lu(e, t) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, lu), du.call(this);
        var r = new Xt.a,
            o = Q(su, e || {}, "Stripe()"),
            a = o.value,
            i = o.warnings,
            c = a.apiKey,
            s = a.stripeAccount,
            u = a.apiVersion,
            l = a.locale,
            p = a.__privateApiUrl,
            d = a.__checkout,
            f = a.__hosted3DS,
            m = a.canCreateRadarSession,
            h = a.betas;
        ni(c), d && d.mids && (lu._ec = Vt({ checkoutIds: d.mids })), this._apiKey = c.trim(), this._keyMode = _(this._apiKey), this._betas = h || [], this._locale = Wn(l, this._betas) || null, this._stripeAccount = s || null, this._isCheckout = !!d, this._attachControllerGetter(u, p, s, r), i.forEach(function(e) { return n._controller.warn(e) }), nn(), this._ensureHTTPS(), this._ensureStripeHosted(t), this._attachPaymentIntentMethods(this._betas, !!f), this._attachLegacyPaymentIntentMethods(this._betas), this._attachCheckoutMethods(this._betas), this._attachPrivateMethodsForCheckout(this._isCheckout), this._attachCreateRadarSession(m || !1), this._attachGetters(), this._attachIssuingCardMethods(this._betas), this._attachIdentityMethods(this._betas), this._attachLinkedAccounts(this._betas)
    }
    uu.version = 3, uu.stripeJsId = z(), uu._ec = (iu = new RegExp(document.location.protocol + "//" + document.location.host), "https://checkout.stripe.com/".match(iu) ? null : Vt());

    function pu(e, t) { return new mu(_u({ apiKey: e }, t && "object" === (void 0 === t ? "undefined" : hu(t)) ? t : {}), yu) }
    var du = function() {
            var l = this;
            this._listenerRegistry = Lt(), this.elements = se(function(e) { return new Pa(l._controller, l._listenerRegistry, { stripeJsLoadTimestamp: Zs, stripeCreateTimestamp: l._controller._createTimestamp }, $s({}, l._locale ? { locale: l._locale } : {}, e, { betas: l._betas })) }), this.createToken = ue(function(e, t) {
                var s, u, n = l._mids();
                return "cvc_update" === e ? function(e, t, n) { var r = va(t); if (r && "cardCvc" === r._componentName) { var o = r._implementation._frame.id; return e.action.tokenizeCvcUpdate({ frameId: o, mids: n }).then(Bs) } throw new M.a("You must provide a `cardCvc` Element to create a `cvc_update` token.") }(l._controller, t, n) : (s = l._controller, u = n, function(e, t) {
                    var n = va(e);
                    if (n) {
                        var r = n._implementation._frame.id,
                            o = n._componentName,
                            a = Fs(t);
                        return s.action.tokenizeWithElement({ frameId: r, elementName: o, tokenData: a, mids: u }).then(Bs)
                    }
                    if ("string" != typeof e) throw new M.a("You must provide a Stripe Element or a valid token type to create a Token.");
                    var i = e,
                        c = Fs(t);
                    return s.action.tokenizeWithData({ elementName: null, type: i, tokenData: c, mids: u }).then(Bs)
                }(e, t))
            }), this.createSource = ue(function(e, t) {
                var n = va(e),
                    r = ui(n ? t : e),
                    o = r || { type: null, data: {} },
                    a = o.type,
                    i = o.data;
                if (n) {
                    var c = n._implementation._frame.id,
                        s = n._componentName;
                    return !r && Ia(s) ? ae.a.reject(new M.a("Please provide Source creation parameters to createSource.")) : l._controller.action.createSourceWithElement({ frameId: c, elementName: s, type: a, sourceData: i, mids: l._mids() }).then(li)
                }
                return r ? a ? l._controller.action.createSourceWithData({ elementName: null, type: a, sourceData: i, mids: l._mids() }).then(li) : ae.a.reject(new M.a("Please provide a source type to createSource.")) : ae.a.reject(new M.a("Please provide either an Element or Source creation parameters to createSource."))
            }), this.retrieveSource = se(function(e) {
                var t = Q(Ti, { source: e }, "retrieveSource"),
                    n = t.value;
                return t.warnings.forEach(function(e) { return l._controller.warn(e) }), l._controller.action.retrieveSource(n).then(li)
            }), this.paymentRequest = ue(function(e, t) {! function(e) { if (e === s.unknown) throw new M.a("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys") }(l._keyMode); var n = l._isCheckout && t ? t : null; return ka(l._controller, { apiKey: l._apiKey, accountId: l._stripeAccount }, l._mids(), e, l._betas, n, l._listenerRegistry) })
        },
        fu = function(e) { var t, n, r, o, a = Y($a, e, "WrapperLibrary"); "error" !== a.type ? (n = (t = a.value).name, r = t.version, o = t.startTime, this._controller.registerWrapper({ name: n, version: r, startTime: o })) : this._controller.report("register_wrapper.error", { error: a.error.message }) },
        mu = uu,
        hu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        _u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        yu = function() { if (document.currentScript) { var e = Object(v.d)(document.currentScript.src); return !e || Object(bt.c)(e.origin) } return !0 }();
    pu.version = mu.version, window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = pu : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = pu;
    t.default = pu
}]);

function e(e) { for (var t, n, r = e[0], o = e[1], a = 0, i = []; a < r.length; a++) n = r[a], Object.prototype.hasOwnProperty.call(u, n) && u[n] && i.push(u[n][0]), u[n] = 0; for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]); for (s && s(e); i.length;) i.shift()() }
var n = {},
    u = { 3: 0 };

function l(e) { if (n[e]) return n[e].exports; var t = n[e] = { i: e, l: !1, exports: {} }; return c[e].call(t.exports, t, t.exports, l), t.l = !0, t.exports }
l.e = function(o) {
    var e, a, i, t, c, n, r = [],
        s = u[o];
    return 0 !== s && (s ? r.push(s[2]) : (e = new Promise(function(e, t) { s = u[o] = [e, t] }), r.push(s[2] = e), (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, l.nc && a.setAttribute("nonce", l.nc), a.src = l.p + "fingerprinted/js/" + ({ 1: "elements-afterpay-clearpay-message", 4: "trusted-types-checker" }[n = o] || n) + "-" + { 1: "2274a42c381d8cd3782289bfdb87a03c", 4: "6fb661259290eb5fd6c6c0bb32ab0d8c" }[n] + ".js", i = new Error, t = function(e) {
        a.onerror = a.onload = null, clearTimeout(c);
        var t, n, r = u[o];
        0 !== r && (r && (t = e && ("load" === e.type ? "missing" : e.type), n = e && e.target && e.target.src, i.message = "Loading chunk " + o + " failed.\n(" + t + ": " + n + ")", i.name = "ChunkLoadError", i.type = t, i.request = n, r[1](i)), u[o] = void 0)
    }, c = setTimeout(function() { t({ type: "timeout", target: a }) }, 12e4), a.onerror = a.onload = t, document.head.appendChild(a))), Promise.all(r)
}, l.m = c, l.c = n, l.d = function(e, t, n) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, l.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, l.t = function(t, e) {
    if (1 & e && (t = l(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
        for (var r in t) l.d(n, r, function(e) { return t[e] }.bind(null, r));
    return n
}, l.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return l.d(t, "a", t), t }, l.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = "https://js.stripe.com/v3/", l.oe = function(e) { throw console.error(e), e };
var t = window.__webpackStripeJSv3Jsonp = window.__webpackStripeJSv3Jsonp || [],
    r = t.push.bind(t);
t.push = e, t = t.slice();
for (var o = 0; o < t.length; o++) e(t[o]);
var s = r;
l(l.s = 19)
}([function(e, t, n) {
    "use strict";
    var r = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(o, Error), o);

    function o(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o); var t = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e)); return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e), t.name = "IntegrationError", Object.defineProperty(t, "message", { value: t.message, enumerable: !0 }), t }
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "l", function() { return d }), n.d(t, "i", function() { return m }), n.d(t, "f", function() { return h }), n.d(t, "c", function() { return a.a }), n.d(t, "e", function() { return c }), n.d(t, "d", function() { return s }), n.d(t, "b", function() { return u.a }), n.d(t, "k", function() { return p }), n.d(t, "g", function() { return l }), n.d(t, "h", function() { return _ }), n.d(t, "a", function() { return y }), n.d(t, "j", function() { return b });

    function r(e) { return "https://js.stripe.com/v3/" + (e || "") }
    var o = n(9),
        a = n(7),
        i = n(3),
        c = function(e) {
            switch (e) {
                case "ADDRESS_AUTOCOMPLETE":
                    return r("checkout-inner-address-autocomplete-5cf7addd4c3214692c8f16ede0e81f33.html");
                case "CARD_ELEMENT":
                    return r("elements-inner-card-cb4cf1ba97f15cf47564633f480e3259.html");
                case "CARD_LIGHT_ELEMENT":
                    return r("elements-inner-card-light-c095fbe3ba277f3ec9f693d25d5aad65.html");
                case "CONTROLLER":
                    return r("controller-22f002eb280b64f732fda40420e2915a.html");
                case "METRICS_CONTROLLER":
                    return r("m-outer-0cba8a995d163797499ab006bbb6b889.html");
                case "PAYMENT_REQUEST_ELEMENT":
                    return r("elements-inner-payment-request-d25ad354b87845826eba63be90f8181f.html");
                case "PAYMENT_REQUEST_BROWSER":
                    return r("payment-request-inner-browser-94de057eb85308fed93338f19b3a3e01.html");
                case "PAYMENT_REQUEST_GOOGLE_PAY":
                    return r("payment-request-inner-google-pay-05308bf9d26ecab6aa9ab27bfe0e6eac.html");
                case "IBAN_ELEMENT":
                    return r("elements-inner-iban-972505c4b828954ac01da2a914a38cd1.html");
                case "IDEAL_BANK_ELEMENT":
                    return r("elements-inner-ideal-bank-8a536ee89a43a8a96baebcb8b63aa17e.html");
                case "P24_BANK_ELEMENT":
                    return r("elements-inner-p24-bank-c6a970130ed9c216d08e2dcce7b9515e.html");
                case "AUTHORIZE_WITH_URL":
                    return r("authorize-with-url-inner-6483c2dff8ba14a7628a8af92c1f0333.html");
                case "STRIPE_3DS2_CHALLENGE":
                    return r("three-ds-2-challenge-f699dfa9ff71418a8d267aa409855b22.html");
                case "STRIPE_3DS2_FINGERPRINT":
                    return r("three-ds-2-fingerprint-9965aa1f0e544b94c5a57dee90ee8279.html");
                case "AU_BANK_ACCOUNT_ELEMENT":
                    return r("elements-inner-au-bank-account-1c631b8aaffedc4336f952a622495ca1.html");
                case "FPX_BANK_ELEMENT":
                    return r("elements-inner-fpx-bank-69923100f024b2af27615529ac6d8260.html");
                case "LIGHTBOX_APP":
                    return r("lightbox-inner-8ca21e86e4109503dcdd7024f3e4c0c9.html");
                case "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-number-display-aae770bf9e6f8effe8591fdb7edfcb03.html");
                case "ISSUING_CARD_CVC_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-cvc-display-c21b840eee29d76e386c037341caa877.html");
                case "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT":
                    return r("elements-inner-issuing-card-expiry-display-835bfc136d52cf99eead705e5768ded9.html");
                case "EPS_BANK_ELEMENT":
                    return r("elements-inner-eps-bank-41eafb7617b5cafbbcb344336c7e400f.html");
                case "HCAPTCHA_APP":
                    return r("hcaptcha-inner-9d2a67252ab6a2931ec623224a2a299d.html");
                case "NETBANKING_BANK_ELEMENT":
                    return r("elements-inner-netbanking-bank-60e6e510dcd41fc053ccb8746ad1ea22.html");
                case "AFTERPAY_MESSAGE_MODAL_ELEMENT":
                    return r("elements-inner-afterpay-message-modal-706efaf25adc4179833b35346e2abc8a.html");
                case "INSTANT_DEBITS_APP":
                    return r("instant-debits-app-a0ad1adadfd0c69bbc38712cc5cb7f55.html");
                case "AUTHENTICATION_ELEMENT":
                    return r("elements-inner-authentication-c5a74b01d16c43087ee99e99f05d33ed.html");
                case "AUTHENTICATION_POPOVER_ELEMENT":
                    return r("elements-inner-authentication-popover-32f81d78d3472e0cf899b6e1f3875574.html");
                case "PAYMENT_ELEMENT":
                    return r("elements-inner-payment-8ceff19fc5a878c0a7dbfab4404aea10.html");
                case "LINKED_ACCOUNTS_INNER":
                    return r("linked-accounts-inner-f3b8f2fba8fc2922a935a6e4253031b6.html");
                default:
                    return Object(i.a)(e)
            }
        },
        s = function(e) { var t = { frameborder: "0", allowTransparency: "true", scrolling: "no", allowpaymentrequest: "true" }; return "PAYMENT_REQUEST_GOOGLE_PAY" === e && (t.sandbox = ["allow-scripts", "allow-forms", "allow-popups", "allow-popups-to-escape-sandbox", "allow-same-origin"].join(" "), t.referrerpolicy = "origin"), t },
        u = n(4),
        l = { PAYMENT_INTENT: "PAYMENT_INTENT", SETUP_INTENT: "SETUP_INTENT" },
        p = [u.a.card, u.a.cardNumber, u.a.cardExpiry, u.a.cardCvc, u.a.postalCode],
        d = "https://js.stripe.com/v3/",
        f = Object(o.d)(d),
        m = f ? f.origin : "",
        h = "https://verify.stripe.com/",
        _ = { family: "font-family", src: "src", unicodeRange: "unicode-range", style: "font-style", variant: "font-variant", stretch: "font-stretch", weight: "font-weight", display: "font-display" },
        y = Object.keys(_).reduce(function(e, t) { return e[_[t]] = t, e }, {}),
        b = [u.a.idealBank, u.a.p24Bank, u.a.netbankingBank, u.a.idealBankSecondary, u.a.p24BankSecondary, u.a.netbankingBankSecondary, u.a.fpxBank, u.a.fpxBankSecondary, u.a.epsBank, u.a.epsBankSecondary]
}, function(e, t, n) {
    "use strict";
    var r = n(16),
        o = n.n(r),
        a = window.Promise ? Promise : o.a;
    t.a = a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var r = function(e, t) { throw new Error(1 < arguments.length && void 0 !== t ? t : "absurd") }
}, function(e, t, n) {
    "use strict";
    var r = { card: "card", cardNumber: "cardNumber", cardExpiry: "cardExpiry", cardCvc: "cardCvc", postalCode: "postalCode", iban: "iban", idealBank: "idealBank", p24Bank: "p24Bank", paymentRequestButton: "paymentRequestButton", auBankAccount: "auBankAccount", fpxBank: "fpxBank", netbankingBank: "netbankingBank", epsBank: "epsBank", afterpayClearpayMessage: "afterpayClearpayMessage", authentication: "authentication", payment: "payment", idealBankSecondary: "idealBankSecondary", p24BankSecondary: "p24BankSecondary", auBankAccountNumber: "auBankAccountNumber", auBsb: "auBsb", fpxBankSecondary: "fpxBankSecondary", netbankingBankSecondary: "netbankingBankSecondary", issuingCardNumberDisplay: "issuingCardNumberDisplay", issuingCardCvcDisplay: "issuingCardCvcDisplay", issuingCardExpiryDisplay: "issuingCardExpiryDisplay", epsBankSecondary: "epsBankSecondary", afterpayClearpayMessageModal: "afterpayClearpayMessageModal", authenticationPopover: "authenticationPopover" };
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "f", function() { return s }), n.d(t, "d", function() { return u }), n.d(t, "c", function() { return p }), n.d(t, "e", function() { return d }), n.d(t, "a", function() { return f }), n.d(t, "g", function() { return m }), n.d(t, "b", function() { return _ });

    function r(e, t) { return !!e.documentElement && e.documentElement.contains(t) }
    var o = n(17),
        a = n.n(o),
        i = n(0),
        c = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        s = function(e, t) {
            var o = {};
            t.forEach(function(e) {
                var t = c(e, 2),
                    n = t[0],
                    r = t[1];
                n.split(/\s+/).forEach(function(e) { e && (o[e] = o[e] || r) })
            }), e.className = a()(e.className, o)
        },
        u = function(e, t) { e.style.cssText = Object.keys(t).map(function(e) { return e + ": " + t[e] + " !important;" }).join(" ") },
        l = { border: "none", margin: "0", padding: "0", width: "1px", "min-width": "100%", overflow: "hidden", display: "block", visibility: "hidden", position: "fixed", height: "1px", "pointer-events": "none", "user-select": "none" },
        p = function(e) { u(e, l) },
        d = function(e) { try { return window.parent.frames[e] } catch (e) { return null } },
        f = function() { if (!document.body) throw new i.a("Stripe.js requires that your page has a <body> element."); return document.body },
        m = function(e) { return requestAnimationFrame(function() { requestAnimationFrame(e) }) },
        h = "isConnected" in window.Node.prototype ? function(e, t) { return t.isConnected && t.ownerDocument === e } : r,
        _ = function(e, t) { return !r(e, t) && h(e, t) }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return s });
    var r = function(e, t, n) { return t && o(e.prototype, t), n && o(e, n), e };

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = Date.now ? function() { return Date.now() } : function() { return (new Date).getTime() },
        i = a(),
        c = window.performance && window.performance.now ? function() { return window.performance.now() } : function() { return a() - i },
        s = (r(u, [{ key: "getAsPosixTime", value: function() { return a() - this.getElapsedTime() } }, { key: "getElapsedTime", value: function(e) { return Math.round((e ? e.timestampValue : c()) - this.timestampValue) } }, { key: "valueOf", value: function() { return Math.round(this.timestampValue) } }], [{ key: "fromPosixTime", value: function(e) { return new u(e - a() + c()) } }]), u);

    function u(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u), this.timestampValue = null != e ? e : c() }
}, function(e, t, n) {
    "use strict";
    t.a = { ADDRESS_AUTOCOMPLETE: "ADDRESS_AUTOCOMPLETE", CARD_ELEMENT: "CARD_ELEMENT", CARD_LIGHT_ELEMENT: "CARD_LIGHT_ELEMENT", CONTROLLER: "CONTROLLER", METRICS_CONTROLLER: "METRICS_CONTROLLER", PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT", PAYMENT_REQUEST_BROWSER: "PAYMENT_REQUEST_BROWSER", PAYMENT_REQUEST_GOOGLE_PAY: "PAYMENT_REQUEST_GOOGLE_PAY", IBAN_ELEMENT: "IBAN_ELEMENT", IDEAL_BANK_ELEMENT: "IDEAL_BANK_ELEMENT", P24_BANK_ELEMENT: "P24_BANK_ELEMENT", AUTHORIZE_WITH_URL: "AUTHORIZE_WITH_URL", STRIPE_3DS2_CHALLENGE: "STRIPE_3DS2_CHALLENGE", STRIPE_3DS2_FINGERPRINT: "STRIPE_3DS2_FINGERPRINT", AU_BANK_ACCOUNT_ELEMENT: "AU_BANK_ACCOUNT_ELEMENT", FPX_BANK_ELEMENT: "FPX_BANK_ELEMENT", LIGHTBOX_APP: "LIGHTBOX_APP", ISSUING_CARD_NUMBER_DISPLAY_ELEMENT: "ISSUING_CARD_NUMBER_DISPLAY_ELEMENT", ISSUING_CARD_CVC_DISPLAY_ELEMENT: "ISSUING_CARD_CVC_DISPLAY_ELEMENT", ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT: "ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT", EPS_BANK_ELEMENT: "EPS_BANK_ELEMENT", HCAPTCHA_APP: "HCAPTCHA_APP", NETBANKING_BANK_ELEMENT: "NETBANKING_BANK_ELEMENT", AFTERPAY_MESSAGE_MODAL_ELEMENT: "AFTERPAY_MESSAGE_MODAL_ELEMENT", INSTANT_DEBITS_APP: "INSTANT_DEBITS_APP", AUTHENTICATION_ELEMENT: "AUTHENTICATION_ELEMENT", AUTHENTICATION_POPOVER_ELEMENT: "AUTHENTICATION_POPOVER_ELEMENT", PAYMENT_ELEMENT: "PAYMENT_ELEMENT", LINKED_ACCOUNTS_INNER: "LINKED_ACCOUNTS_INNER" }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r }), n.d(t, "b", function() { return o }), n.d(t, "c", function() { return a }), n.d(t, "e", function() { return s }), n.d(t, "f", function() { return u }), n.d(t, "d", function() { return l });
    var i = n(2),
        c = n(6),
        f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        r = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return e[n]
        },
        o = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return n;
            return -1
        },
        m = "[object Object]",
        a = function t(e, n) {
            if ("object" !== (void 0 === e ? "undefined" : f(e)) || "object" !== (void 0 === n ? "undefined" : f(n))) return e === n;
            if (null === e || null === n) return e === n;
            var r = Array.isArray(e);
            if (r !== Array.isArray(n)) return !1;
            var o = Object.prototype.toString.call(e) === m;
            if (o != (Object.prototype.toString.call(n) === m)) return !1;
            if (!o && !r) return !1;
            var a = Object.keys(e),
                i = Object.keys(n);
            if (a.length !== i.length) return !1;
            for (var c = {}, s = 0; s < a.length; s++) c[a[s]] = !0;
            for (var u = 0; u < i.length; u++) c[i[u]] = !0;
            var l = Object.keys(c);
            if (l.length !== a.length) return !1;
            var p = e,
                d = n;
            return l.every(function(e) { return t(p[e], d[e]) })
        },
        s = function(e, t) { for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0; for (var o = [], a = 0; a < e.length; a++) n[e[a]] && o.push(e[a]); return o },
        u = function(e) { for (var t = 0, n = 0; n < e.length; n++) t += e[n]; return t },
        l = function(r, o) {
            var a = 0;
            return new i.a(function e(t) {
                for (var n = new c.a; a < r.length && n.getElapsedTime() < 50;) o(r[a]), a++;
                a === r.length ? t() : setTimeout(function() { return e(t) })
            })
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return c }), n.d(t, "a", function() { return o }), n.d(t, "d", function() { return a }), n.d(t, "c", function() { return i });
    var r = /^(http(s)?):\/\//,
        c = function(e) { return r.test(e) },
        o = function(e) { var t = e.match(r); return t && t.length ? t[1] : null },
        a = function(e) {
            if (!c(e)) return null;
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol,
                r = t.host,
                o = t.pathname,
                a = /:80$/,
                i = /:443$/;
            return "http:" === n && a.test(r) ? r = r.replace(a, "") : "https:" === n && i.test(r) && (r = r.replace(i, "")), { host: r, protocol: n, origin: n + "//" + r, path: o }
        },
        i = function(e, t) { if ("/" !== t[0]) return "" + e.replace(/\/[^/]*$/, "/") + t; var n = a(e); return n ? "" + n.origin + t : t }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return o }), n.d(t, "a", function() { return a }), n.d(t, "c", function() { return i });
    var r = n(0),
        o = function(r) {
            var o = {},
                a = {};
            return function(e) { var t = "_" + e; if ("string" == typeof e && void 0 !== o[t]) return o[t]; if ("number" == typeof e && void 0 !== a[t]) return a[t]; var n = r(e); return "string" == typeof e && (o[t] = n), "number" == typeof e && (a[t] = n), n }
        },
        a = function(e, t) {
            var n = !1;
            return function() {
                if (n) throw new r.a(t);
                n = !0;
                try { return e.apply(void 0, arguments).then(function(e) { return n = !1, e }, function(e) { throw n = !1, e }) } catch (e) { throw n = !1, e }
            }
        },
        i = function(e) { var t = e; return function() { t && (t.apply(void 0, arguments), t = null) } }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r }), n.d(t, "b", function() { return a }), n.d(t, "c", function() { return i });
    var o = n(9),
        r = function(e, t) {
            var n = Object(o.d)(e),
                r = Object(o.d)(t);
            return !(!n || !r) && n.origin === r.origin
        },
        a = function(e) { return r(e, "https://js.stripe.com/v3/") },
        i = function(e) { return a(e) || (t = e, n = Object(o.d)(t), "stripe.com" === (r = n ? n.host : "") || !!r.match(/\.stripe\.(com|me)$/)); var t, n, r }
}, function(e, t, n) {
    "use strict";
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function u(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
    t.a = function o(a, i) {
        var c = [];
        return Object.keys(a).forEach(function(e) {
            var t, n = a[e],
                r = i ? i + "[" + e + "]" : e;
            n && "object" === (void 0 === n ? "undefined" : s(n)) ? "" !== (t = o(n, r)) && (c = [].concat(u(c), [t])) : null != n && (c = [].concat(u(c), [r + "=" + encodeURIComponent(String(n))]))
        }), c.join("&").replace(/%20/g, "+")
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) { return e ? window.getComputedStyle(e, t) : null }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() { return c }), n.d(t, "c", function() { return s }), n.d(t, "a", function() { return u });

    function r() {
        return Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")).filter(function(e) {
            var t = e.getAttribute("tabindex"),
                n = !t || 0 <= parseInt(t, 10),
                r = e.getBoundingClientRect(),
                o = Object(i.a)(e),
                a = 0 < r.width && 0 < r.height && o && "hidden" !== o.getPropertyValue("visibility");
            return n && a
        })
    }
    var o = n(10),
        a = n(8),
        i = n(13),
        c = function(t, e) { var n = r(); return n[Object(a.b)(n, function(e) { return e === t || t.contains(e) }) + ("previous" === e ? -1 : 1)] },
        s = function(e, t) {
            return e.then(function() {
                return Object(a.d)(t, function(e) {
                    var t = e.element,
                        n = e.tabIndex;
                    "" === n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", n)
                })
            })
        },
        u = function(n) {
            var r = [],
                e = Object(a.d)(document.querySelectorAll("*"), function(e) {
                    var t = e.getAttribute("tabindex") || "";
                    n !== e && (e.tabIndex = -1), r.push({ element: e, tabIndex: t })
                }),
                t = Object(o.c)(function() { s(e, r) });
            return { lockedPromise: e, lockedElements: r, restoreFocus: t }
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() { return r });
    var a = n(5),
        i = n(10),
        r = function() {
            function e(e) { return e.preventDefault() }

            function t() {}
            var n = Object(a.a)(),
                r = n.style.overflow,
                o = { passive: !(n.style.overflow = "hidden") };
            return window.addEventListener("touchmove", t, o), n.addEventListener("touchstart", t, o), n.addEventListener("touchmove", e, o), Object(i.c)(function() { n.style.overflow = r || "", window.removeEventListener("touchmove", t, o), n.removeEventListener("touchstart", t, o), n.removeEventListener("touchmove", e, o) })
        }
}, function(e, t, n) {
    "use strict";
    var s = n(20);
    e.exports = s;
    var r = l(!0),
        o = l(!1),
        a = l(null),
        i = l(void 0),
        c = l(0),
        u = l("");

    function l(e) { var t = new s(s._61); return t._81 = 1, t._65 = e, t }
    s.resolve = function(e) {
        if (e instanceof s) return e;
        if (null === e) return a;
        if (void 0 === e) return i;
        if (!0 === e) return r;
        if (!1 === e) return o;
        if (0 === e) return c;
        if ("" === e) return u;
        if ("object" == typeof e || "function" == typeof e) try { var t = e.then; if ("function" == typeof t) return new s(t.bind(e)) } catch (n) { return new s(function(e, t) { t(n) }) }
        return l(e)
    }, s.all = function(e) {
        var c = Array.prototype.slice.call(e);
        return new s(function(o, a) {
            if (0 === c.length) return o([]);
            var i = c.length;
            for (var e = 0; e < c.length; e++) ! function t(n, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) { if (e instanceof s && e.then === s.prototype.then) { for (; 3 === e._81;) e = e._65; return 1 === e._81 ? t(n, e._65) : (2 === e._81 && a(e._65), void e.then(function(e) { t(n, e) }, a)) } var r = e.then; if ("function" == typeof r) return void new s(r.bind(e)).then(function(e) { t(n, e) }, a) }
                c[n] = e, 0 == --i && o(c)
            }(e, c[e])
        })
    }, s.reject = function(n) { return new s(function(e, t) { t(n) }) }, s.race = function(e) { return new s(function(t, n) { e.forEach(function(e) { s.resolve(e).then(t, n) }) }) }, s.prototype.catch = function(e) { return this.then(null, e) }
}, function(t, n, e) {
    var r;
    ! function() {
        "use strict";
        var e = function() {
            function i() {}

            function c(e, t) { for (var n = t.length, r = 0; r < n; ++r) ! function(e, t) { if (!t) return; var n = typeof t; "string" == n ? function(e, t) { for (var n = t.split(a), r = n.length, o = 0; o < r; ++o) e[n[o]] = !0 }(e, t) : Array.isArray(t) ? c(e, t) : "object" == n ? function(e, t) { for (var n in t) o.call(t, n) && (e[n] = !!t[n]) }(e, t) : "number" == n && (e[t] = !0) }(e, t[r]) }
            i.prototype = Object.create(null);
            var o = {}.hasOwnProperty;
            var a = /\s+/;
            return function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = new i;
                c(r, t);
                var o, a = [];
                for (o in r) r[o] && a.push(o);
                return a.join(" ")
            }
        }();
        t.exports ? t.exports = e : void 0 === (r = function() { return e }.apply(n, [])) || (t.exports = r)
    }()
}, function(e, t) { e.exports = function(e) { return "_" + e.split("").map(function(e) { return e.charCodeAt(0) }).reduce(function(e, t) { return (e << 5) - e + t & (e << 5) - e + t }, 0).toString().replace(/[-.]/g, "_") } }, function(e, t, n) { e.exports = n(28) }, function(e, t, n) {
    "use strict";
    var o = n(21);

    function i() {}
    var a = null,
        c = {};

    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== i && f(e, this)
    }

    function u(e, t) {
        for (; 3 === e._81;) e = e._65;
        if (s._10 && s._10(e), 0 === e._81) return 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t);
        var n, r;
        n = e, r = t, o(function() {
            var e, t = 1 === n._81 ? r.onFulfilled : r.onRejected;
            null !== t ? (e = function(e, t) { try { return e(t) } catch (e) { return a = e, c } }(t, n._65)) === c ? p(r.promise, a) : l(r.promise, e) : (1 === n._81 ? l : p)(r.promise, n._65)
        })
    }

    function l(e, t) {
        if (t === e) return p(e, new TypeError("A promise cannot be resolved with itself.")), 0;
        if (t && ("object" == typeof t || "function" == typeof t)) { var n = function(e) { try { return e.then } catch (e) { return a = e, c } }(t); if (n === c) return p(e, a), 0; if (n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void r(e); if ("function" == typeof n) return void f(n.bind(t), e) }
        e._81 = 1, e._65 = t, r(e)
    }

    function p(e, t) { e._81 = 2, e._65 = t, s._97 && s._97(e, t), r(e) }

    function r(e) {
        if (1 === e._45 && (u(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) u(e, e._54[t]);
            e._54 = null
        }
    }

    function d(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

    function f(e, t) {
        var n = !1,
            r = function(e, t, n) { try { e(t, n) } catch (e) { return a = e, c } }(e, function(e) { n || (n = !0, l(t, e)) }, function(e) { n || (n = !0, p(t, e)) });
        n || r !== c || (n = !0, p(t, a))
    }(e.exports = s)._10 = null, s._97 = null, s._61 = i, s.prototype.then = function(e, t) {
        if (this.constructor !== s) return o = e, a = t, new(r = this).constructor(function(e, t) {
            var n = new s(i);
            n.then(e, t), u(r, new d(o, a, n))
        });
        var r, o, a, n = new s(i);
        return u(this, new d(e, t, n)), n
    }
}, function(d, e, t) {
    "use strict";
    (function(e) {
        function t(e) { r.length || (n(), 0), r[r.length] = e }
        d.exports = t;
        var n, r = [],
            o = 0;

        function a() {
            for (; o < r.length;) {
                var e = o;
                if (o += 1, r[e].call(), 1024 < o) {
                    for (var t = 0, n = r.length - o; t < n; t++) r[t] = r[t + o];
                    r.length -= o, o = 0
                }
            }
            r.length = 0, o = 0, 0
        }
        var i, c, s, u = void 0 !== e ? e : self,
            l = u.MutationObserver || u.WebKitMutationObserver;

        function p(r) {
            return function() {
                var e = setTimeout(n, 0),
                    t = setInterval(n, 50);

                function n() { clearTimeout(e), clearInterval(t), r() }
            }
        }
        n = "function" == typeof l ? (i = 1, c = new l(a), s = document.createTextNode(""), c.observe(s, { characterData: !0 }), function() { i = -i, s.data = i }) : p(a), t.requestFlush = n, t.makeRequestCallFromTimer = p
    }).call(this, t(22))
}, function(e, t) {
    var n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t) {}, , , , , function(e, t, m) {
    "use strict";
    m.r(t);

    function n(e, t) { return 0 <= e.indexOf(t) }
    var M = m(0),
        T = m(3),
        w = m(8),
        r = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"],
        o = { AE: "AE", AT: "AT", AU: "AU", BE: "BE", BG: "BG", BR: "BR", CA: "CA", CH: "CH", CI: "CI", CR: "CR", CY: "CY", CZ: "CZ", DE: "DE", DK: "DK", DO: "DO", EE: "EE", ES: "ES", FI: "FI", FR: "FR", GB: "GB", GI: "GI", GR: "GR", GT: "GT", HK: "HK", HU: "HU", ID: "ID", IE: "IE", IN: "IN", IT: "IT", JP: "JP", LI: "LI", LT: "LT", LU: "LU", LV: "LV", MT: "MT", MX: "MX", MY: "MY", NL: "NL", NO: "NO", NZ: "NZ", PE: "PE", PH: "PH", PL: "PL", PT: "PT", RO: "RO", SE: "SE", SG: "SG", SI: "SI", SK: "SK", SN: "SN", TH: "TH", TT: "TT", US: "US", UY: "UY" },
        a = Object.keys(o),
        i = { applePay: "applePay", googlePay: "googlePay", browserCard: "browserCard" },
        c = Object.keys(i),
        s = { live: "live", test: "test", unknown: "unknown" },
        _ = function(e) { return /^pk_test_/.test(e) ? s.test : /^pk_live_/.test(e) ? s.live : s.unknown },
        v = m(9),
        l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function d(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function f(e, t, n) { return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "." }

    function h(e, t) { return { type: "valid", value: e, warnings: 1 < arguments.length && void 0 !== t ? t : [] } }

    function g(e) { return { error: e, errorType: "full", type: "error" } }

    function y(e, t, n) { var r = new M.a(f(e, t, n)); return g(r) }

    function b(e, t, n) { return { expected: e, actual: String(t), options: n, errorType: "mismatch", type: "error" } }

    function E(e, t) { return u({}, e, { path: [].concat(d(e.path), [t]) }) }

    function S(n) { return function(e, t) { return void 0 === e ? h(e) : n(e, t) } }

    function P(b, v) {
        return function(e, t) {
            function n(e) { var t = e.options.path.join(".") || "value"; return { error: t + " should be " + e.expected, actual: t + " as " + e.actual } }

            function r(e, t, n) { return g(new M.a("Invalid value for " + e + ": " + t + ". You specified " + n + ".")) }
            var o = b(e, t),
                a = v(e, t);
            if ("error" !== o.type || "error" !== a.type) return "valid" === o.type ? o : a;
            if ("mismatch" === o.errorType && "mismatch" === a.errorType) {
                var i = n(o),
                    c = i.error,
                    s = i.actual,
                    u = n(a),
                    l = u.error,
                    p = u.actual;
                return r(t.label, c === l ? c : c + " or " + l, s === p ? s : s + " and " + p)
            }
            if ("mismatch" === o.errorType) {
                var d = n(o),
                    f = d.error,
                    m = d.actual;
                return r(t.label, f, m)
            }
            if ("mismatch" !== a.errorType) return g(o.error);
            var h = n(a),
                _ = h.error,
                y = h.actual;
            return r(t.label, _, y)
        }
    }

    function k(o, a) { return function(t, e) { var n = Object(w.a)(o, function(e) { return e === t }); if (void 0 !== n) return h(n); var r = a ? "a recognized string." : "one of the following strings: " + o.join(", "); return b(r, t, e) } }

    function O(n) { return function(e, t) { return "string" == typeof e && 0 === e.indexOf(n) ? h(e) : b("a string starting with " + n, e, t) } }

    function A() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return k(t, !1) }

    function I() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return k(t, !0) }

    function C(e, t) { return "string" == typeof e ? h(e) : b("a string", e, t) }

    function j(n, r) { return function(e, t) { return void 0 === e ? h(r()) : n(e, t) } }

    function N(e, t) { return "boolean" == typeof e ? h(e) : b("a boolean", e, t) }

    function R(e, t) { return "number" == typeof e ? h(e) : b("a number", e, t) }

    function x(n) { return function(e, t) { return "number" == typeof e && n < e ? h(e) : b("a number greater than " + n, e, t) } }

    function L(n) { return function(e, t) { return "number" == typeof e && e === parseInt(e, 10) && (!n || 0 <= e) ? h(e) : b(n ? "a positive amount in the currency's subunit" : "an amount in the currency's subunit", e, t) } }

    function D(e, t) { return L(!1)(e, t) }

    function B(e, t) { return e && "object" === (void 0 === e ? "undefined" : l(e)) ? h(e) : b("an object", e, t) }

    function F(r) { return function(e, n) { return Array.isArray(e) ? e.map(function(e, t) { return r(e, E(n, String(t))) }).reduce(function(e, t) { return "error" === e.type ? e : "error" === t.type ? t : h([].concat(d(e.value), [t.value]), [].concat(d(e.warnings), d(t.warnings))) }, h([])) : b("array", e, n) } }

    function q(u) {
        return function(s) {
            return function(e, t) {
                if (Array.isArray(e)) {
                    var n = s(e, t);
                    if ("valid" === n.type)
                        for (var r = {}, o = 0; o < n.value.length; o += 1) {
                            var a = n.value[o];
                            if ("object" === (void 0 === a ? "undefined" : l(a)) && a && "string" == typeof a[u]) {
                                var i = a[u],
                                    c = "_" + i;
                                if (r[c]) return g(new M.a("Duplicate value for " + u + ": " + i + ". The property '" + u + "' of '" + t.path.join(".") + "' has to be unique."));
                                r[c] = !0
                            }
                        }
                    return n
                }
                return b("array", e, t)
            }
        }
    }

    function U(n) { return function(e, t) { return void 0 === e ? h(void 0) : b("used in " + n + " instead", e, t) } }

    function H(c) {
        return function(i) {
            return function(e, r) {
                if (!e || "object" !== (void 0 === e ? "undefined" : l(e)) || Array.isArray(e)) return b("an object", e, r);
                var o = e,
                    t = Object(w.a)(Object.keys(o), function(e) { return !i[e] });
                if (t && c) return g(new M.a("Invalid " + r.label + " parameter: " + [].concat(d(r.path), [t]).join(".") + " is not an accepted parameter."));
                var n = Object.keys(o),
                    a = h({});
                return t && (a = n.reduce(function(e, t) { return i[t] ? e : h(e.value, [].concat(d(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(d(r.path), [t]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."])) }, a)), Object.keys(i).reduce(function(e, t) { if ("error" === e.type) return e; var n = (0, i[t])(o[t], E(r, t)); return "valid" === n.type && void 0 !== n.value ? h(u({}, e.value, p({}, t, n.value)), [].concat(d(e.warnings), d(n.warnings))) : "valid" === n.type ? h(e.value, [].concat(d(e.warnings), d(n.warnings))) : n }, a)
            }
        }
    }

    function Y(e, t, n, r) {
        var o = r || {},
            a = e(t, { authenticatedOrigin: o.authenticatedOrigin || "", element: o.element || "", label: n, path: o.path || [] });
        return "valid" === a.type || "full" === a.errorType ? a : { type: "error", errorType: "full", error: new M.a(f(a.expected, a.actual, a.options)) }
    }

    function z() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""; return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, z) }

    function G(e) {
        var t = e.controllerId,
            n = e.frameId,
            r = e.targetOrigin,
            o = e.type,
            a = r,
            i = void 0;
        "controller" === o ? i = Object(ie.e)(n) : "group" === o ? i = Object(ie.e)(t) : "outer" === o || "hosted" === o ? i = window.frames[n] : "inner" === o && (a = a || "*", i = window.parent), a = a || ee.i, i && "function" == typeof i.postMessage && i.postMessage(JSON.stringify(ce({}, e, { __stripeJsV3: !0 })), a)
    }

    function W(e, t) { var n = e._isUserError || "IntegrationError" === e.name; throw t && !n && t.report("fatal.uncaught_error", { iframe: !1, name: e.name, element: "outer", message: e.message || e.description, fileName: e.fileName, lineNumber: e.lineNumber, columnNumber: e.columnNumber, stack: e.stack && e.stack.substring(0, 1e3) }), e }

    function K(r, o) { return function(e, t, n) { try { return r.call(this, e, t, n) } catch (e) { return W(e, o || this && this._controller) } } }
    var V = A.apply(void 0, d(a)),
        J = A.apply(void 0, d(r)),
        $ = A.apply(void 0, d(c)),
        X = (A.apply(void 0, d(Object.keys(s))), H(!0)),
        Z = H(!1),
        Q = function(e, t, n, r) {
            var o = Y(e, t, n, r);
            switch (o.type) {
                case "valid":
                    return { value: o.value, warnings: o.warnings };
                case "error":
                    throw o.error;
                default:
                    return Object(T.a)(o)
            }
        },
        ee = m(1),
        te = ("00" + Math.floor(1e3 * Math.random())).slice(-3),
        ne = 0,
        re = function(e) { return "" + e + te + ne++ },
        oe = m(12),
        ae = m(2),
        ie = m(5),
        ce = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        se = (m(23), function(t, n) { return function(e) { try { return t.call(this, e) } catch (e) { return W(e, n || this && this._controller) } } }),
        ue = function(n, r) { return function(e, t) { try { return n.call(this, e, t) } catch (e) { return W(e, r || this && this._controller) } } };

    function le() {
        var a = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, le), this._emit = function(e) { for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]; return (a._callbacks[e] || []).forEach(function(e) { var t = e.fn; if (t._isUserCallback) try { t.apply(void 0, n) } catch (e) { throw e._isUserError = !0, e } else t.apply(void 0, n) }), a }, this._once = function(t, n) { return a._on(t, function e() { a._off(t, e), n.apply(void 0, arguments) }, n) }, this._removeAllListeners = function() { return a._callbacks = {}, a }, this._on = function(e, t, n) { return a._callbacks[e] = a._callbacks[e] || [], a._callbacks[e].push({ original: n, fn: t }), a }, this._validateUserOn = function(e, t) {}, this._userOn = function(e, t) { if ("string" != typeof e) throw new M.a("When adding an event listener, the first argument should be a string event name."); if ("function" != typeof t) throw new M.a("When adding an event listener, the second argument should be a function callback."); return a._validateUserOn(e, t), t._isUserCallback = !0, a._on(e, t) }, this._hasRegisteredListener = function(e) { return a._callbacks[e] && 0 < a._callbacks[e].length }, this._off = function(e, t) {
            if (t) {
                for (var n, r = a._callbacks[e], o = 0; o < r.length; o++)
                    if ((n = r[o]).fn === t || n.original === t) { r.splice(o, 1); break }
            } else delete a._callbacks[e];
            return a
        }, this._callbacks = {};
        var r, o, e = ue(this._userOn),
            t = ue(this._off),
            n = ue(this._once),
            i = se(this._hasRegisteredListener),
            c = se(this._removeAllListeners),
            s = (r = this._emit, function() { try { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return r.call.apply(r, [this].concat(t)) } catch (e) { return W(e, o || this && this._controller) } });
        this.on = this.addListener = this.addEventListener = e, this.off = this.removeListener = this.removeEventListener = t, this.once = n, this.hasRegisteredListener = i, this.removeAllListeners = c, this.emit = s
    }
    var pe = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        de = function(e, t, n) { return t && fe(e.prototype, t), n && fe(e, n), e };

    function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function me(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function he(e) {
        var t = e.type,
            n = e.controllerId,
            r = e.listenerRegistry,
            o = e.betas,
            a = e.appParams;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, he);
        var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (he.__proto__ || Object.getPrototypeOf(he)).call(this));
        return i._sendFAReq = function(n) { var r = re(n.tag); return new ae.a(function(e, t) { i._requests[r] = { resolve: e, reject: t }, i._send({ message: { action: "stripe-frame-action", payload: { nonce: r, faReq: n } }, type: "outer", frameId: i.id, controllerId: i._controllerId }) }) }, i.action = { perform3DS2Challenge: function(e) { return i._sendFAReq({ tag: "PERFORM_3DS2_CHALLENGE", value: e }) }, perform3DS2Fingerprint: function(e) { return i._sendFAReq({ tag: "PERFORM_3DS2_FINGERPRINT", value: e }) }, show3DS2Spinner: function(e) { return i._sendFAReq({ tag: "SHOW_3DS2_SPINNER", value: e }) }, checkCanMakePayment: function(e) { return i._sendFAReq({ tag: "CHECK_CAN_MAKE_PAYMENT", value: e }) }, closeLightboxFrame: function(e) { return i._sendFAReq({ tag: "CLOSE_LIGHTBOX_FRAME", value: e }) }, openLightboxFrame: function(e) { return i._sendFAReq({ tag: "OPEN_LIGHTBOX_FRAME", value: e }) } }, i.type = t, i.loaded = !1, i._controllerId = n, i._persistentMessages = [], i._queuedMessages = [], i._requests = {}, i._listenerRegistry = r, i.id = i._generateId(), i._iframe = i._createIFrame(t, o, a), i._on("load", function() { i.loaded = !0, i._ensureMounted(), i.loaded && (i._persistentMessages.forEach(function(e) { return i._send(e) }), i._queuedMessages.forEach(function(e) { return i._send(e) }), i._queuedMessages = []) }), i._on("title", function(e) {
            var t = e.title;
            i._iframe.setAttribute("title", t)
        }), i
    }
    var _e = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(he, le), de(he, [{ key: "_generateId", value: function() { return re("__privateStripeFrame") } }, { key: "send", value: function(e) { this._send({ message: e, type: "outer", frameId: this.id, controllerId: this._controllerId }) } }, {
            key: "sendPersistent",
            value: function(e) {
                this._ensureMounted();
                var t = { message: e, type: "outer", frameId: this.id, controllerId: this._controllerId };
                this._persistentMessages = [].concat(me(this._persistentMessages), [t]), this.loaded && G(t)
            }
        }, { key: "resolve", value: function(e, t) { this._requests[e] && this._requests[e].resolve(t) } }, { key: "reject", value: function(e, t) { this._requests[e] && this._requests[e].reject(t) } }, { key: "_send", value: function(e) { this._ensureMounted(), this.loaded ? G(e) : this._queuedMessages = [].concat(me(this._queuedMessages), [e]) } }, { key: "appendTo", value: function(e) { this._emit("mount", { anchor: e }), e.appendChild(this._iframe) } }, { key: "unmount", value: function() { this.loaded = !1, this._emit("unload") } }, {
            key: "destroy",
            value: function() {
                this.unmount();
                var e = this._iframe.parentElement;
                e && e.removeChild(this._iframe), this._emit("destroy")
            }
        }, { key: "_ensureMounted", value: function() { this._isMounted() || this.unmount() } }, { key: "_isMounted", value: function() { return !!document.body && document.body.contains(this._iframe) } }, {
            key: "_createIFrame",
            value: function(e, t, n) {
                var r = window.location.href.toString(),
                    o = "string" == typeof n ? n : Object(oe.a)(pe({}, n || {}, { referrer: r, controllerId: this._controllerId })),
                    a = document.createElement("iframe");
                a.setAttribute("name", this.id);
                var i = Object(ee.d)(e);
                return Object.keys(i).forEach(function(e) { a.setAttribute(e, i[e]) }), n && n.allowCamera && a.setAttribute("allow", "camera"), a.src = Object(ee.e)(e) + (o ? "#" : "") + o, a
            }
        }]), he),
        ye = function(e, t, n) { return t && be(e.prototype, t), n && be(e, n), e };

    function be(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ve(e, t, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, t); if (void 0 === r) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : ve(o, t, n) } if ("value" in r) return r.value; var a = r.get; return void 0 !== a ? a.call(n) : void 0 }

    function ge(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ge); var t, n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (ge.__proto__ || Object.getPrototypeOf(ge)).call(this, e)); return n.autoload = e.autoload || !1, "complete" === document.readyState ? n._ensureMounted() : (t = n._ensureMounted.bind(n), n._listenerRegistry.addEventListener(document, "DOMContentLoaded", t), n._listenerRegistry.addEventListener(window, "load", t), setTimeout(t, 5e3)), n }
    var we = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ge, _e), ye(ge, [{ key: "_ensureMounted", value: function() { ve(ge.prototype.__proto__ || Object.getPrototypeOf(ge.prototype), "_ensureMounted", this).call(this), this._isMounted() || this._autoMount() } }, {
            key: "_autoMount",
            value: function() {
                var e = document.body;
                if (e) {
                    var t = document.querySelector("#stripe-hidden-frames-container") || e;
                    this.appendTo(t)
                } else if ("complete" === document.readyState || "interactive" === document.readyState) throw new M.a("Stripe.js requires that your page has a <body> element.");
                this.autoload && (this.loaded = !0)
            }
        }, { key: "_createIFrame", value: function(e, t, n) { var r = ve(ge.prototype.__proto__ || Object.getPrototypeOf(ge.prototype), "_createIFrame", this).call(this, e, t, n); return r.setAttribute("aria-hidden", "true"), r.setAttribute("tabIndex", "-1"), Object(ie.c)(r), r } }]), ge),
        Ee = function(e, t, n) { return t && Se(e.prototype, t), n && Se(e, n), e };

    function Se(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Pe() {
        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Pe),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (Pe.__proto__ || Object.getPrototypeOf(Pe)).apply(this, arguments))
    }

    function ke(e) { return /Edge\//i.test(e) }

    function Oe(e) { return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e) }

    function Te(e) { return /SamsungBrowser/.test(e) }

    function Ae(e) { return /iPad|iPhone/i.test(e) && !Oe(e) }

    function Ie(e) { return /^((?!chrome|android).)*safari/i.test(e) && !Te(e) }

    function Ce(e) { return /Android/i.test(e) && !Oe(e) }
    var je, Ne, Re, Me, xe, Le = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(Pe, we), Ee(Pe, [{ key: "_generateId", value: function() { return this._controllerId } }]), Pe),
        De = window.navigator.userAgent,
        Be = ke(De),
        Fe = (/Edge\/((1[0-6]\.)|0\.)/i.test(De), Oe(De)),
        qe = (/MSIE ([0-9]{1,}[.0-9]{0,})/i.test(De), Ae(De)),
        Ue = (Ae(je = De) || Ce(je), Ce(De)),
        He = (/Android 4\./i.test(Ne = De) && !/Chrome/i.test(Ne) && Ce(Ne), Ie(De)),
        Ye = (Ie(Re = De) && Ae(Re), /Firefox\//i.test(De), /Firefox\/(50|51|[0-4]?\d)([^\d]|$)/i.test(De), Te(De)),
        ze = (/Chrome\/(6[6-9]|[7-9]\d+|[1-9]\d{2,})/i.test(De), /AppleWebKit/i.test(Me = De) && !/Chrome/i.test(Me) && !ke(Me) && !Oe(Me)),
        Ge = /Chrome/i.test(xe = De) && !ke(xe),
        We = (/CriOS/i.test(De), He && "download" in document.createElement("a")),
        Ke = function(e, t, n) { return t && Ve(e.prototype, t), n && Ve(e, n), e };

    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Je = { border: "none", margin: "0", padding: "0", width: "1px", "min-width": "100%", overflow: "hidden", display: "block", "user-select": "none", "will-change": "transform" };

    function $e(e) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, $e);
        var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, ($e.__proto__ || Object.getPrototypeOf($e)).call(this, e));
        return He && n._listenerRegistry.addEventListener(document, "transitionstart", function(e) {
            switch (e.propertyName) {
                case "opacity":
                case "transform":
                case "visibility":
                    var t = e.target;
                    n._isMounted() && t.contains(n._iframe) && n._forceRepaint()
            }
        }, { passive: !0 }), n
    }
    var Xe = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }($e, _e), Ke($e, [{ key: "update", value: function(e) { this.send({ action: "stripe-user-update", payload: e }) } }, {
            key: "updateStyle",
            value: function(t) {
                var n = this;
                Object.keys(t).forEach(function(e) { n._iframe.style[e] = t[e] })
            }
        }, { key: "focus", value: function() { this.loaded && (He ? this._iframe.focus() : this.send({ action: "stripe-user-focus", payload: {} })) } }, { key: "blur", value: function() { this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur(), document.activeElement === this._iframe && (window.focus(), document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur())) } }, { key: "clear", value: function() { this.send({ action: "stripe-user-clear", payload: {} }) } }, { key: "_createIFrame", value: function(e, t, n) { var r = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 }($e.prototype.__proto__ || Object.getPrototypeOf($e.prototype), "_createIFrame", this).call(this, e, t, n); return r.setAttribute("title", "Secure payment input frame"), Object(ie.d)(r, Je), r } }, {
            key: "_forceRepaint",
            value: function() {
                var e = this._iframe,
                    t = e.style.display;
                e.style.display = "none";
                var n = e.offsetHeight;
                return e.style.display = t, n
            }
        }]), $e),
        Ze = m(15),
        Qe = m(14),
        et = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var tt = { display: "block", position: "fixed", "z-index": "2147483647", background: "rgba(40,40,40,0)", transition: "background 400ms ease", "will-change": "background", top: "0", left: "0", right: "0", bottom: "0" },
        nt = et({}, tt, { background: "rgba(40,40,40,0.75)" }),
        rt = function e(t) {
            var n = this,
                r = t.lockScrolling,
                o = t.lockFocus,
                a = t.lockFocusOn,
                i = t.listenerRegistry;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.domElement = document.createElement("div"), this._runOnHide = [], this.mount = function() {
                var e = Object(ie.a)();
                n.domElement.style.display = "none", e.contains(n.domElement) || e.insertBefore(n.domElement, e.firstChild)
            }, this.show = function() {
                var e, t;
                Object(ie.d)(n.domElement, tt), n._lockScrolling && (e = Object(Ze.a)(), n._runOnHide.push(e)), n._lockFocus && (t = Object(Qe.a)(n._lockFocusOn).restoreFocus, n._runOnHide.push(t))
            }, this.fadeIn = function() { setTimeout(function() { Object(ie.d)(n.domElement, nt) }) }, this.fadeOut = function() { return new ae.a(function(e) { Object(ie.d)(n.domElement, tt), setTimeout(e, 500), n._listenerRegistry.addEventListener(n.domElement, "transitionend", e) }).then(function() { for (n.domElement.style.display = "none"; n._runOnHide.length;) n._runOnHide.pop()() }) }, this.unmount = function() { Object(ie.a)().removeChild(n.domElement) }, this._lockScrolling = !!r, this._lockFocus = !!o, this._lockFocusOn = a || null, this._listenerRegistry = i
        },
        ot = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 };
    var at = { position: "absolute", left: "0", top: "0", height: "100%", width: "100%" };

    function it(e) {
        var t = e.type,
            n = e.controllerId,
            r = e.listenerRegistry,
            o = e.options;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, it);
        var a = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (it.__proto__ || Object.getPrototypeOf(it)).call(this, { type: t, controllerId: n, listenerRegistry: r, appParams: o }));
        return a._autoMount = function() { a.appendTo(a._backdrop.domElement), a._backdrop.mount() }, a.show = function() { a._backdrop.show(), Object(ie.d)(a._iframe, at) }, a.fadeInBackdrop = function() { a._backdrop.fadeIn() }, a._backdropFadeoutPromise = null, a.fadeOutBackdrop = function() { return a._backdropFadeoutPromise || (a._backdropFadeoutPromise = a._backdrop.fadeOut()), a._backdropFadeoutPromise }, a.destroy = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                t = a.fadeOutBackdrop().then(function() { a._backdrop.unmount(), e || ot(it.prototype.__proto__ || Object.getPrototypeOf(it.prototype), "destroy", a).call(a) });
            return e && ot(it.prototype.__proto__ || Object.getPrototypeOf(it.prototype), "destroy", a).call(a), t
        }, a._backdrop = new rt({ lockScrolling: !0, lockFocus: !0, lockFocusOn: a._iframe, listenerRegistry: r }), a._autoMount(), a
    }
    var ct = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(it, _e), it),
        st = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        lt = function(e, t, n) { return t && pt(e.prototype, t), n && pt(e, n), e };

    function pt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var dt = { display: "block", position: "absolute", "z-index": "1000", width: "1px", "min-width": "100%", margin: "2px 0 0 0", padding: "0", border: "none", overflow: "hidden" };

    function ft() {
        return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ft),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (ft.__proto__ || Object.getPrototypeOf(ft)).apply(this, arguments))
    }

    function mt(e) {
        var t = e.name,
            n = e.value,
            r = e.expiresIn,
            o = e.path,
            a = e.domain,
            i = new Date,
            c = r || 31536e6;
        i.setTime(i.getTime() + c);
        var s = o || "/",
            u = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
            l = encodeURIComponent(t) + "=" + u + ";expires=" + i.toGMTString() + ";path=" + s + ";SameSite=Lax";
        return a && (l += ";domain=" + a), document.cookie = l
    }

    function ht(n) { var e = Object(w.a)(document.cookie.split("; "), function(e) { var t = e.indexOf("="); return decodeURIComponent(e.substr(0, t)) === n }); if (e) { var t = e.indexOf("="); return decodeURIComponent(e.substr(t + 1)) } return null }

    function _t(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
    var yt = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ft, _e), lt(ft, [{
            key: "updateStyle",
            value: function(t) {
                var n = this;
                Object.keys(t).forEach(function(e) { n._iframe.style[e] = t[e] })
            }
        }, { key: "update", value: function(e) { this.send({ action: "stripe-user-update", payload: e }) } }, { key: "_createIFrame", value: function(e, t, n) { var r = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; return void 0 !== i ? i.call(r) : void 0 }(ft.prototype.__proto__ || Object.getPrototypeOf(ft.prototype), "_createIFrame", this).call(this, e, t, n && "object" === (void 0 === n ? "undefined" : ut(n)) ? st({}, n, { isSecondaryFrame: !0 }) : n); return Object(ie.d)(r, dt), r.style.height = "0", r } }]), ft),
        bt = m(11),
        vt = ["button", "checkbox", "file", "hidden", "image", "submit", "radio", "reset"],
        gt = function(e) { var t = e.tagName; if (e.isContentEditable || "TEXTAREA" === t) return !0; if ("INPUT" !== t) return !1; var n = e.getAttribute("type"); return -1 === vt.indexOf(n) },
        wt = function(e) {
            var u = {};
            return e.replace(/\+/g, " ").split("&").forEach(function(e, t) {
                var n, r = e.split("="),
                    o = decodeURIComponent(r[0]),
                    a = u,
                    i = 0,
                    c = o.split("]["),
                    s = c.length - 1,
                    s = /\[/.test(c[0]) && /\]$/.test(c[s]) ? (c[s] = c[s].replace(/\]$/, ""), (c = c.shift().split("[").concat(c)).length - 1) : 0;
                if (!(0 <= c.indexOf("__proto__")))
                    if (2 === r.length)
                        if (n = decodeURIComponent(r[1]), s)
                            for (; i <= s; i++) {
                                if (o = "" === c[i] ? a.length : c[i], !_t(a, o) && a[o]) return;
                                a[o] = i < s ? a[o] || (c[i + 1] && isNaN(c[i + 1]) ? {} : []) : n, a = a[o]
                            } else if (Array.isArray(u[o])) u[o].push(n);
                            else if (void 0 !== u[o]) {
                    if (!_t(u, o)) return;
                    u[o] = [u[o], n]
                } else u[o] = n;
                else o && (u[o] = "")
            }), u
        },
        Et = m(18),
        St = m.n(Et),
        Pt = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function Ot(e) { return e && "object" === (void 0 === e ? "undefined" : kt(e)) && (e.constructor === Array || e.constructor === Object) }

    function Tt(e) { return Ot(e) ? Array.isArray(e) ? e.slice(0, e.length) : Pt({}, e) : e }

    function At(i) {
        return function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (Array.isArray(t[0]) && i) return Tt(t[0]);
            var a = Array.isArray(t[0]) ? [] : {};
            return t.forEach(function(o) {
                o && Object.keys(o).forEach(function(e) {
                    var t = a[e],
                        n = o[e],
                        r = Ot(t) && !(i && Array.isArray(t));
                    "object" === (void 0 === n ? "undefined" : kt(n)) && r ? a[e] = At(i)(t, Tt(n)) : void 0 !== n ? a[e] = (Ot(n) ? At(i) : Tt)(n) : void 0 !== t && (a[e] = t)
                })
            }), a
        }
    }
    var It = At(!1),
        Ct = At(!0),
        jt = ee.l.replace(/\/$/, "");
    var Nt = "_1776170249",
        Rt = function(e) {
            var t, n, r, o = (r = !0, (n = Nt) in (t = {}) ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t);
            try {
                var a = wt(e.slice(e.indexOf("?") + 1));
                Object.keys(a).forEach(function(e) {
                    var t = St()(e),
                        n = a[e];
                    t === Nt && "false" === n && (o[t] = !1)
                })
            } catch (e) {}
            return o
        }(function(e) {
            try {
                if (e.currentScript) return e.currentScript.src;
                var t = e.querySelectorAll('script[src^="' + jt + '"]'),
                    n = Object(w.a)(t, function(e) { var t = (e.getAttribute("src") || "").split("?")[0]; return new RegExp("^" + jt + "/?$").test(t) });
                return n && n.getAttribute("src") || ""
            } catch (e) { return "" }
        }(document))[Nt],
        Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        xt = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Lt = function() { var o = []; return { addEventListener: function(e, t, n, r) { e.addEventListener(t, n, r), o.push([e, t, n, r]) }, removeEventListener: function(d, f, m, h) { d.removeEventListener(f, m, h), o = o.filter(function(e) { return t = e, n = xt([d, f, m, h], 4), r = n[0], o = n[1], a = n[2], i = n[3], c = xt(t, 4), s = c[0], u = c[1], l = c[2], p = c[3], s !== r || u !== o || l !== a || !0 === ("object" === (void 0 === i ? "undefined" : Mt(i)) && i ? i.capture : i) != (!0 === ("object" === (void 0 === p ? "undefined" : Mt(p)) && p ? p.capture : p)); var t, n, r, o, a, i, c, s, u, l, p }) } } };

    function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Bt(e) { return 42 === e.length }

    function Ft(e, t, n) { return n ? !e || !Bt(e) && Bt(t) ? t : e : z() }
    var qt = "__privateStripeMetricsController",
        Ut = { MERCHANT: "merchant", SESSION: "session" },
        Ht = "NA",
        Yt = (function(e, t, n) { return t && Dt(e.prototype, t), n && Dt(e, n), e }(zt, [{ key: "ids", value: function() { return { guid: this._guid, muid: this._muid, sid: this._sid } } }, { key: "idsPromise", value: function() { var e = this; return this._idsPromise.then(function() { return e.ids() }) } }, {
            key: "_establishMessageChannel",
            value: function(e) {
                if (!Rt) return this._guid = z(), void e();
                this._listenerRegistry.addEventListener(window, "message", this._handleMessage(e))
            }
        }, {
            key: "_startIntervalCheck",
            value: function() {
                var t = this,
                    n = window.location.href;
                setInterval(function() {
                    var e = window.location.href;
                    e !== n && (t.send(function(e) { return { action: "ping", payload: { sid: e.sid, muid: e.muid, title: document.title, referrer: document.referrer, url: document.location.href, version: 6 } } }), n = e)
                }, 5e3)
            }
        }, { key: "report", value: function(t, n) { this.send(function(e) { return { action: "track", payload: { sid: e.sid, muid: e.muid, url: document.location.href, source: t, data: n, version: 6 } } }) } }, {
            key: "send",
            value: function(e) {
                var t = this;
                this._idsPromise.then(function() { try { t._controllerFrame && t._controllerFrame.send(e(t.ids())) } catch (e) {} })
            }
        }, {
            key: "_testLatency",
            value: function() {
                var n = this,
                    r = new Date;
                this._listenerRegistry.addEventListener(document, "mousemove", function e() {
                    try {
                        var t = new Date;
                        n._latencies.push(t - r), 10 <= n._latencies.length && (n.report("mouse-timings-10", n._latencies), n._listenerRegistry.removeEventListener(document, "mousemove", e)), r = t
                    } catch (e) {}
                })
            }
        }, { key: "_extractMetaReferrerPolicy", value: function() { var e = document.querySelector("meta[name=referrer]"); return null != e && e instanceof HTMLMetaElement ? e.content.toLowerCase() : null } }, {
            key: "_extractUrl",
            value: function(e) {
                var t = document.location.href;
                switch (e) {
                    case "origin":
                    case "strict-origin":
                    case "origin-when-cross-origin":
                    case "strict-origin-when-cross-origin":
                        return document.location.origin;
                    case "unsafe-url":
                        return t.split("#")[0];
                    default:
                        return t
                }
            }
        }, {
            key: "_buildFrameQueryString",
            value: function() {
                var e = this._extractMetaReferrerPolicy(),
                    t = this._extractUrl(e),
                    n = { url: t, title: document.title, referrer: document.referrer, muid: this._muid, sid: this._sid, version: 6, preview: Object(bt.c)(t) };
                return null != e && (n.metaReferrerPolicy = e), Object.keys(n).map(function(e) { return null != n[e] ? e + "=" + encodeURIComponent(n[e].toString()) : null }).join("&")
            }
        }, {
            key: "_getID",
            value: function(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : Ht;
                switch (e) {
                    case Ut.MERCHANT:
                        if (this._doNotPersist) return Ft(this._muid, n, Rt);
                        try {
                            var r = "__stripe_mid",
                                o = Ft(ht(r), n, Rt);
                            return Bt(o) && mt({ name: r, value: o, domain: "." + document.location.hostname }), o
                        } catch (e) { return Ht }
                    case Ut.SESSION:
                        if (this._doNotPersist) return Ft(this._sid, n, Rt);
                        try {
                            var a = "__stripe_sid",
                                i = Ft(ht(a), n, Rt);
                            return Bt(i) && mt({ name: a, value: i, domain: "." + document.location.hostname, expiresIn: 18e5 }), i
                        } catch (e) { return Ht }
                    default:
                        throw new Error("Invalid ID type specified: " + e)
                }
            }
        }]), zt);

    function zt() {
        var e, t, n, l = this,
            r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, zt), this._controllerFrame = null, this._latencies = [], this._handleMessage = function(u) {
            return function(e) {
                var t = e.data,
                    n = e.origin;
                if (Object(bt.c)(n) && "string" == typeof t) try {
                    var r, o, a, i = JSON.parse(t),
                        c = i.originatingScript,
                        s = i.payload;
                    "m2" === c && (r = s.guid, o = s.muid, a = s.sid, l._guid = r, l._muid = l._getID(Ut.MERCHANT, o), l._sid = l._getID(Ut.SESSION, a), u())
                } catch (e) {}
            }
        }, r.checkoutIds ? (t = (e = r.checkoutIds).muid, n = e.sid, this._guid = Ht, this._muid = t, this._sid = n, this._doNotPersist = !0) : (this._guid = Ht, this._muid = this._getID(Ut.MERCHANT), this._sid = this._getID(Ut.SESSION), this._doNotPersist = !1), this._listenerRegistry = Lt(), this._idsPromise = new ae.a(function(e) { l._establishMessageChannel(e) }), this._id = re(qt), Rt && (this._controllerFrame = new Le({ type: ee.c.METRICS_CONTROLLER, controllerId: this._id, listenerRegistry: this._listenerRegistry, autoload: !0, appParams: this._buildFrameQueryString() }), this._startIntervalCheck(), setTimeout(this._testLatency.bind(this), 2e3 + 500 * Math.random()))
    }

    function Gt(e, t) { return 0 <= e.indexOf(t) }
    var Wt, Kt = null,
        Vt = function(e) { return Kt = new Yt(0 < arguments.length && void 0 !== e ? e : {}) },
        Jt = !1,
        $t = function() {
            var t = Kt;
            t && (Jt || (Jt = !0, t.send(function(e) { return { action: "ping", payload: { v2: 2, sid: e.sid, muid: e.muid, title: document.title, referrer: document.referrer, url: document.location.href, version: 6 } } }), t.send(function(e) { return { action: "track", payload: { sid: e.sid, muid: e.muid, url: document.location.href, source: "mouse-timings-10-v2", data: t._latencies, version: 6 } } })))
        },
        Xt = m(6),
        Zt = { checkout_beta_2: "checkout_beta_2", checkout_beta_3: "checkout_beta_3", checkout_beta_4: "checkout_beta_4", checkout_beta_testcards: "checkout_beta_testcards", payment_intent_beta_1: "payment_intent_beta_1", payment_intent_beta_2: "payment_intent_beta_2", payment_intent_beta_3: "payment_intent_beta_3", card_payment_method_beta_1: "card_payment_method_beta_1", acknowledge_ie9_deprecation: "acknowledge_ie9_deprecation", cvc_update_beta_1: "cvc_update_beta_1", google_pay_beta_1: "google_pay_beta_1", acss_debit_beta_1: "acss_debit_beta_1", acss_debit_beta_2: "acss_debit_beta_2", afterpay_clearpay_pm_beta_1: "afterpay_clearpay_pm_beta_1", alipay_pm_beta_1: "alipay_pm_beta_1", au_bank_account_beta_1: "au_bank_account_beta_1", au_bank_account_beta_2: "au_bank_account_beta_2", bacs_debit_beta: "bacs_debit_beta", bancontact_pm_beta_1: "bancontact_pm_beta_1", boleto_pm_beta_1: "boleto_pm_beta_1", eps_pm_beta_1: "eps_pm_beta_1", fpx_bank_beta_1: "fpx_bank_beta_1", giropay_pm_beta_1: "giropay_pm_beta_1", grabpay_pm_beta_1: "grabpay_pm_beta_1", ideal_pm_beta_1: "ideal_pm_beta_1", konbini_pm_beta_1: "konbini_pm_beta_1", line_items_beta_1: "line_items_beta_1", oxxo_pm_beta_1: "oxxo_pm_beta_1", p24_pm_beta_1: "p24_pm_beta_1", paypal_pm_beta_1: "paypal_pm_beta_1", sepa_pm_beta_1: "sepa_pm_beta_1", sofort_pm_beta_1: "sofort_pm_beta_1", tax_product_beta_1: "tax_product_beta_1", wechat_pay_pm_beta_1: "wechat_pay_pm_beta_1", wechat_pay_pm_beta_2: "wechat_pay_pm_beta_2", checkout_beta_locales: "checkout_beta_locales", stripe_js_beta_locales: "stripe_js_beta_locales", ideal_sepa_beta_1: "ideal_sepa_beta_1", sofort_sepa_beta_1: "sofort_sepa_beta_1", bancontact_sepa_beta_1: "bancontact_sepa_beta_1", upi_beta_1: "upi_beta_1", issuing_elements_1: "issuing_elements_1", issuing_elements_2: "issuing_elements_2", return_intents_beta_1: "return_intents_beta_1", netbanking_beta_1: "netbanking_beta_1", eps_bank_beta_1: "eps_bank_beta_1", card_light_beta_1: "card_light_beta_1", no_card_light_beta_1: "no_card_light_beta_1", p24_bank_beta_1: "p24_bank_beta_1", netbanking_bank_beta_1: "netbanking_bank_beta_1", instant_debits_beta_1: "instant_debits_beta_1", expresspay_beta_1: "expresspay_beta_1", identity_dialog_1: "identity_dialog_1", id_bank_transfer_beta_1: "id_bank_transfer_beta_1", linked_accounts_beta_1: "linked_accounts_beta_1" },
        Qt = Object.freeze({ netbankingBank: "netbanking_bank_beta_1", authentication: "expresspay_beta_1", payment: "expresspay_beta_1" }),
        en = Object.keys(Zt),
        tn = !1,
        nn = function(e) { tn || "null" === (null != e ? e : window.origin) && (tn = !0, console.error("Stripe.js requires 'allow-same-origin' if sandboxed.")) };

    function rn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var on, an, cn = (rn(Wt = {}, ee.b.card, { unique: !0, conflict: [ee.b.cardNumber, ee.b.cardExpiry, ee.b.cardCvc, ee.b.postalCode], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardNumber, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardExpiry, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.cardCvc, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.postalCode, { unique: !0, conflict: [ee.b.card], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.paymentRequestButton, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.iban, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.idealBank, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.p24Bank, { unique: !0, conflict: [], beta: !1, implementation: "legacy" }), rn(Wt, ee.b.auBankAccount, { unique: !0, beta: !1, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.fpxBank, { unique: !0, beta: !1, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.netbankingBank, { unique: !0, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardNumberDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardCvcDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.issuingCardExpiryDisplay, { unique: !1, beta: !0, conflict: [], implementation: "legacy" }), rn(Wt, ee.b.epsBank, { unique: !0, conflict: [], beta: !0, implementation: "legacy" }), rn(Wt, ee.b.afterpayClearpayMessage, { unique: !1, conflict: [], beta: !1, implementation: "afterpay_message" }), rn(Wt, ee.b.authentication, { unique: !0, conflict: [], beta: !0, implementation: "frame" }), rn(Wt, ee.b.payment, { unique: !0, conflict: [], beta: !0, implementation: "frame" }), Wt);

    function sn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var un, ln = "__PrivateStripeElement",
        pn = ["brand"],
        dn = (sn(on = {}, ee.b.card, pn), sn(on, ee.b.cardNumber, pn), sn(on, ee.b.iban, ["country", "bankName"]), sn(on, ee.b.auBankAccount, ["bankName", "branchName"]), on),
        fn = (sn(an = {}, ee.b.idealBank, { secondary: ee.b.idealBankSecondary }), sn(an, ee.b.p24Bank, { secondary: ee.b.p24BankSecondary }), sn(an, ee.b.fpxBank, { secondary: ee.b.fpxBankSecondary }), sn(an, ee.b.netbankingBank, { secondary: ee.b.netbankingBankSecondary }), sn(an, ee.b.epsBank, { secondary: ee.b.epsBankSecondary }), an),
        mn = m(4),
        hn = m(7);

    function _n(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var yn = ln + "-input",
        bn = ln + "-safariInput",
        vn = "StripeElement",
        gn = ["ready", "focus", "blur", "escape", "change"],
        wn = (_n(un = {}, mn.a.authentication, hn.a.AUTHENTICATION_ELEMENT), _n(un, mn.a.payment, hn.a.PAYMENT_ELEMENT), un),
        En = _n({}, mn.a.authenticationPopover, hn.a.AUTHENTICATION_POPOVER_ELEMENT),
        Sn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Pn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function On(e, t) { return document.activeElement === e._iframe || e._iframe.parentElement && document.activeElement === t }

    function Tn(e) { return "object" === (void 0 === e ? "undefined" : kn(e)) && null !== e && "IntegrationError" === e.name ? new M.a("string" == typeof e.message ? e.message : "") : e }
    var An = "__privateStripeController",
        In = !1,
        Cn = {},
        jn = function(e) { return { cl: !Gt(e, "no_card_light_beta_1") && (Gt(e, "card_light_beta_1") || Math.random() < 0), clc: Math.random() < 0 } },
        Nn = (function(e, t, n) { return t && Pn(e.prototype, t), n && Pn(e, n), e }(Rn, [{ key: "registerWrapper", value: function(e) { this._controllerFrame.send({ action: "stripe-wrapper-register", payload: { wrapperLibrary: e } }) } }]), Rn);

    function Rn(e) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Rn), xn.call(this);
        var t = e.listenerRegistry,
            r = e.stripeJsLoadTimestamp,
            o = e.stripeCreateTimestamp,
            a = e.onFirstLoad,
            i = e.betas,
            c = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(e, ["listenerRegistry", "stripeJsLoadTimestamp", "stripeCreateTimestamp", "onFirstLoad", "betas"]),
            s = c.apiKey,
            u = c.stripeAccount,
            l = c.stripeJsId,
            p = c.locale;
        this._id = re(An), this._stripeJsId = l, this._apiKey = s, this._stripeAccount = u, this._listenerRegistry = t, this._betas = i, this._flags = jn(i), this._controllerFrame = new Le({ type: ee.c.CONTROLLER, betas: i, controllerId: this._id, listenerRegistry: t, appParams: Sn({}, c, { outerFlags: this._flags, betas: i, stripeJsLoadTime: r.getAsPosixTime() }) }), this._stripeJsLoadTimestamp = r, this._createTimestamp = o, this._loadCount = 0;

        function d(e) {
            var t = e.anchor;
            n._mountTimestamp = new Xt.a, t !== document.body && n.report("controller.mount.custom_container")
        }
        this._controllerFrame._isMounted() ? d({ anchor: this._controllerFrame._iframe.parentElement }) : this._controllerFrame._once("mount", d), a && this._controllerFrame._once("load", a), this._frames = {}, this._requests = {}, this._setupPostMessage(), this._handleMessage = ue(this._handleMessage, this), this.action.fetchLocale({ locale: p || "auto" })
    }

    function Mn() {
        var e = document.querySelectorAll("meta[name=viewport][content]"),
            t = e[e.length - 1];
        return t && t instanceof HTMLMetaElement ? t.content : ""
    }
    var xn = function() {
            var p = this;
            this._sendCAReq = function(n) { var r = re(n.tag); return new ae.a(function(e, t) { p._requests[r] = { resolve: e, reject: t }, p._controllerFrame.send({ action: "stripe-safe-controller-action-request", payload: { nonce: r, caReq: n } }) }) }, this.keyMode = function() { return _(p._apiKey) }, this.action = { retrievePaymentIntent: function(e) { return p._sendCAReq({ tag: "RETRIEVE_PAYMENT_INTENT", value: e }) }, confirmPaymentIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_PAYMENT_INTENT", value: e }) }, cancelPaymentIntentSource: function(e) { return p._sendCAReq({ tag: "CANCEL_PAYMENT_INTENT_SOURCE", value: e }) }, confirmSetupIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_SETUP_INTENT", value: e }) }, retrieveSetupIntent: function(e) { return p._sendCAReq({ tag: "RETRIEVE_SETUP_INTENT", value: e }) }, cancelSetupIntentSource: function(e) { return p._sendCAReq({ tag: "CANCEL_SETUP_INTENT_SOURCE", value: e }) }, fetchLocale: function(e) { return p._sendCAReq({ tag: "FETCH_LOCALE", value: e }) }, updateCSSFonts: function(e) { return p._sendCAReq({ tag: "UPDATE_CSS_FONTS", value: e }) }, createApplePaySession: function(e) { return p._sendCAReq({ tag: "CREATE_APPLE_PAY_SESSION", value: e }) }, retrieveSource: function(e) { return p._sendCAReq({ tag: "RETRIEVE_SOURCE", value: e }) }, tokenizeWithElement: function(e) { return p._sendCAReq({ tag: "TOKENIZE_WITH_ELEMENT", value: e }) }, tokenizeCvcUpdate: function(e) { return p._sendCAReq({ tag: "TOKENIZE_CVC_UPDATE", value: e }) }, tokenizeWithData: function(e) { return p._sendCAReq({ tag: "TOKENIZE_WITH_DATA", value: e }) }, createSourceWithElement: function(e) { return p._sendCAReq({ tag: "CREATE_SOURCE_WITH_ELEMENT", value: e }) }, createSourceWithData: function(e) { return p._sendCAReq({ tag: "CREATE_SOURCE_WITH_DATA", value: e }) }, createPaymentMethodWithElement: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_METHOD_WITH_ELEMENT", value: e }) }, createPaymentMethodWithData: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_METHOD_WITH_DATA", value: e }) }, createPaymentPage: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_PAGE", value: e }) }, createPaymentPageWithSession: function(e) { return p._sendCAReq({ tag: "CREATE_PAYMENT_PAGE_WITH_SESSION", value: e }) }, createRadarSession: function(e) { return p._sendCAReq({ tag: "CREATE_RADAR_SESSION", value: e }) }, authenticate3DS2: function(e) { return p._sendCAReq({ tag: "AUTHENTICATE_3DS2", value: e }) }, verifyMicrodepositsForPayment: function(e) { return p._sendCAReq({ tag: "VERIFY_MICRODEPOSITS_FOR_PAYMENT", value: e }) }, verifyMicrodepositsForSetup: function(e) { return p._sendCAReq({ tag: "VERIFY_MICRODEPOSITS_FOR_SETUP", value: e }) }, retrieveIssuingCardWithoutNonce: function(e) { return p._sendCAReq({ tag: "RETRIEVE_ISSUING_CARD_WITHOUT_NONCE", value: e }) }, retrieveIssuingCard: function(e) { return p._sendCAReq({ tag: "RETRIEVE_ISSUING_CARD", value: e }) }, createEphemeralKeyNonce: function(e) { return p._sendCAReq({ tag: "CREATE_EPHEMERAL_KEY_NONCE", value: e }) }, updatePaymentIntent: function(e) { return p._sendCAReq({ tag: "UPDATE_PAYMENT_INTENT", value: e }) }, createAcssDebitSession: function(e) { return p._sendCAReq({ tag: "CREATE_ACSS_DEBIT_SESSION", value: e }) }, confirmReturnIntent: function(e) { return p._sendCAReq({ tag: "CONFIRM_RETURN_INTENT", value: e }) }, localizeError: function(e) { return p._sendCAReq({ tag: "LOCALIZE_ERROR", value: e }) } }, this.createElementFrame = function(e, t, n, r) {
                var o = p._betas,
                    a = new Xe({ type: e, betas: o, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: Sn({}, r, { componentName: t, keyMode: _(p._apiKey), apiKey: p._apiKey }) });
                return p._setupFrame(a, e, n)
            }, this.createSecondaryElementFrame = function(e, t, n, r, o) {
                var a = p._betas,
                    i = new yt({ type: e, betas: a, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: Sn({}, o, { componentName: t, primaryElementType: n, keyMode: _(p._apiKey) }) });
                return p._setupFrame(i, e, r)
            }, this.createHiddenFrame = function(e, t) { var n = new we({ type: e, betas: p._betas, controllerId: p._id, listenerRegistry: p._listenerRegistry, appParams: t }); return p._setupFrame(n, e) }, this.createLightboxFrame = function(e) {
                var t = e.type,
                    n = e.options,
                    r = new ct({ type: t, controllerId: p._id, listenerRegistry: p._listenerRegistry, options: Sn({}, n, { betas: p._betas }) });
                return p._setupFrame(r, t)
            }, this.getFlags = function() { return p._flags }, this._setupFrame = function(e, t, n) { return p._frames[e.id] = e, p._controllerFrame.sendPersistent({ action: "stripe-user-createframe", payload: { newFrameId: e.id, frameType: t, groupId: n } }), e._on("unload", function() { p._controllerFrame.sendPersistent({ action: "stripe-frame-unload", payload: { unloadedFrameId: e.id } }) }), e._on("destroy", function() { delete p._frames[e.id], p._controllerFrame.sendPersistent({ action: "stripe-frame-destroy", payload: { destroyedFrameId: e.id } }) }), e._on("load", function() { p._controllerFrame.sendPersistent({ action: "stripe-frame-load", payload: { loadedFrameId: e.id } }), p._controllerFrame.loaded && e.send({ action: "stripe-controller-load", payload: {} }) }), e }, this.report = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                p._controllerFrame.send({ action: "stripe-controller-report", payload: { event: e, data: t } })
            }, this.warn = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                p._controllerFrame.send({ action: "stripe-controller-warn", payload: { args: t } })
            }, this.controllerFor = function() { return "outer" }, this._setupPostMessage = function() {
                p._listenerRegistry.addEventListener(window, "message", function(e) {
                    var t = e.data,
                        n = e.origin,
                        r = e.source,
                        o = function(e) { try { var t = "string" == typeof e ? JSON.parse(e) : e; return t.__stripeJsV3 ? t : null } catch (e) { return null } }(t);
                    o && (Object(bt.a)(ee.i, n) ? p._handleMessage(o, r) : nn(n))
                })
            }, this._nodeIsKnownElement = function(e) { return e && "IFRAME" === e.nodeName && !!p._frames[e.getAttribute("name") || ""] }, this._handleMessage = function(e, t) {
                var n = e.controllerId,
                    r = e.frameId,
                    o = e.message,
                    a = p._frames[r];
                if (n === p._id) switch (o.action) {
                    case "stripe-frame-event":
                        var i = o.payload.event,
                            c = o.payload.data;
                        if (a) {
                            if (qe) {
                                var s = a._iframe.parentElement,
                                    u = s && s.querySelector("." + yn);
                                if ("focus" === i && !In && u && !On(a, u) && !Cn[r]) { u.focus(), In = !0, Cn[r] = !0, setTimeout(function() { Cn[r] = !1 }, 1e3); break }
                                if ("blur" === i && In) { In = !1; break }
                                "blur" === i && We && setTimeout(function() { var e, t, n = document.activeElement;!n || On(a, u) || gt(n) || p._nodeIsKnownElement(n) || ((e = s && s.querySelector("." + bn)) && ((t = e).disabled = !1, t.focus(), t.blur(), t.disabled = !0), n.focus()) }, 400)
                            }
                            "load" === i && (c = Sn({}, c, { source: t })), a._emit(i, c)
                        }
                        break;
                    case "stripe-frame-action-response":
                        a && a.resolve(o.payload.nonce, o.payload.faRes);
                        break;
                    case "stripe-frame-action-error":
                        a && a.reject(o.payload.nonce, Tn(o.payload.faErr));
                        break;
                    case "stripe-frame-error":
                        throw new M.a(o.payload.message);
                    case "stripe-integration-error":
                        a && a._emit("__privateIntegrationError", { message: o.payload.message });
                        break;
                    case "stripe-controller-load":
                        p._controllerFrame._emit("load", { source: t }), p._loadCount++, Object.keys(p._frames).forEach(function(e) { return p._frames[e].send({ action: "stripe-controller-load", payload: {} }) });
                        var l = p._createTimestamp.getAsPosixTime();
                        p._controllerFrame.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: p._stripeJsLoadTimestamp.getAsPosixTime(), stripeCreate: l, create: l, mount: p._mountTimestamp.getAsPosixTime() }, loadCount: p._loadCount, matchFrame: t === p._controllerFrame._iframe.contentWindow, rtl: !1, paymentRequestButtonType: null } });
                        break;
                    case "stripe-safe-controller-action-response":
                        p._requests[o.payload.nonce] && p._requests[o.payload.nonce].resolve(o.payload.caRes);
                        break;
                    case "stripe-safe-controller-action-error":
                        p._requests[o.payload.nonce] && p._requests[o.payload.nonce].reject(Tn(o.payload.caErr));
                        break;
                    case "stripe-api-call":
                        $t()
                }
            }
        },
        Ln = Nn;

    function Dn() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, Dn); var e = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (Dn.__proto__ || Object.getPrototypeOf(Dn)).call(this)); return e.name = "NetworkError", e.type = "network_error", e }
    var Bn = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(Dn, Error), Dn),
        Fn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        qn = function f(m) {
            return new ae.a(function(e, t) {
                var n = m.method,
                    r = m.url,
                    o = m.data,
                    a = m.headers,
                    i = m.withCredentials,
                    c = m.contentType,
                    s = void 0 === c ? "application/x-www-form-urlencoded" : c,
                    u = "";
                o && "application/x-www-form-urlencoded" === s ? u = Object(oe.a)(o) : o && "application/json" === s && (u = JSON.stringify(o));
                var l = "GET" === n && u ? r + "?" + u : r,
                    p = "GET" === n ? "" : u,
                    d = new XMLHttpRequest;
                i && (d.withCredentials = i), d.open(n, l, !0), d.setRequestHeader("Accept", "application/json"), d.setRequestHeader("Content-Type", s), a && Object.keys(a).forEach(function(e) { var t = a[e]; "string" == typeof t && d.setRequestHeader(e, t) }), d.onreadystatechange = function() { 4 === d.readyState && (d.onreadystatechange = function() {}, 0 === d.status ? i ? t(new Bn) : f(Fn({}, m, { withCredentials: !0 })).then(e, t) : e(d)) };
                try { d.send(p) } catch (e) { t(e) }
            })
        },
        Un = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Hn(e, s) {
        var t = e.reduce(function(e, t) {
            var n, r, o, a = function(e, t) {
                    var n = e.indexOf(":");
                    if (-1 === n) throw new M.a("Invalid css declaration in file from " + t + ': "' + e + '"');
                    var r = e.slice(0, n).trim(),
                        o = ee.a[r];
                    if (!o) throw new M.a("Unsupported css property in file from " + t + ': "' + r + '"');
                    return { property: o, value: e.slice(n + 1).trim() }
                }(t, s),
                i = a.property,
                c = a.value;
            return Un({}, e, (o = c, (r = i) in (n = {}) ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = o, n))
        }, {});
        return ["family", "src"].forEach(function(e) { if (!t[e]) throw new M.a("Missing css property in file from " + s + ': "' + ee.h[e] + '"') }), t
    }

    function Yn(e, t) { var n, r, o, a = "string" == typeof(n = e) && Object(w.a)(Object.keys(cn), function(e) { return e === n }) || null; if (!a || (r = t, (o = Qt[a]) && !Gt(r, o))) { var i = "string" == typeof e ? e : void 0 === e ? "undefined" : Kn(e); throw new M.a("A valid Element name must be provided. Valid Elements are:\n  " + Object.keys(cn).filter(function(e) { return !cn[e].beta }).join(", ") + "; you passed: " + i + ".") } }
    var zn, Gn = function(r) {
            return qn({ url: r, method: "GET" }).then(function(e) { return e.responseText }).then(function(e) {
                return function(e, t) { var n = e.match(/@font-face[ ]?{[^}]*}/g); if (!n) throw new M.a("No @font-face rules found in file from " + t); return n }(e, r).map(function(e) {
                    var t, n = function(e, t) {
                        var n = e.replace(/\/\*.*\*\//g, "").trim(),
                            r = (n.length && /;$/.test(n) ? n : n + ";").match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
                        if (!r) throw new M.a("Found @font-face rule containing no valid font-properties in file from " + t);
                        return r
                    }((t = e.match(/@font-face[ ]?{([^}]*)}/)) ? t[1] : "", r);
                    return Hn(n, r)
                })
            })
        },
        Wn = (zn = [], function(e, t) { return Gt(t, Zt.stripe_js_beta_locales) || -1 === zn.indexOf(e) ? e : "auto" }),
        Kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Vn = function(e, t, n) {
            var r, o = 0 < arguments.length && void 0 !== e ? e : "1.2em",
                a = 1 < arguments.length && void 0 !== t ? t : "14px",
                i = 1 === (r = (2 < arguments.length && void 0 !== n ? n : "0").split(" ").map(function(e) { return parseInt(e.trim(), 10) })).length || 2 === r.length ? 2 * r[0] : 3 === r.length || 4 === r.length ? r[0] + r[2] : 0;
            if ("string" == typeof o && /^[0-9.]+px$/.test(o)) return parseFloat(o.toString().replace(/[^0-9.]/g, "")) + i + "px";
            var c = parseFloat(o.toString().replace(/[^0-9.]/g, "")),
                s = parseFloat("14px".replace(/[^0-9.]/g, "")),
                u = parseFloat(a.toString().replace(/[^0-9.]/g, "")),
                l = void 0;
            if ("string" == typeof a && /^(\d+|\d*\.\d+)px$/.test(a)) l = u;
            else if ("string" == typeof a && /^(\d+|\d*\.\d+)em$/.test(a)) l = u * s;
            else if ("string" == typeof a && /^(\d+|\d*\.\d+)%$/.test(a)) l = u / 100 * s;
            else {
                if ("string" != typeof a || !/^[\d.]+$/.test(a) && !/^\d*\.(px|em|%)$/.test(a)) return "100%";
                l = s
            }
            var p = c * l + i + "px";
            return /^[0-9.]+px$/.test(p) ? p : "100%"
        },
        Jn = m(13),
        $n = function(e, n) { return e.reduce(function(e, t) { return e.then(function(e) { return "SATISFIED" === e.type ? e : t().then(function(e) { return n(e) ? { type: "SATISFIED", value: e } : { type: "UNSATISFIED" } }) }) }, ae.a.resolve({ type: "UNSATISFIED" })) },
        Xn = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Zn = { success: "success", fail: "fail", invalid_shipping_address: "invalid_shipping_address" },
        Qn = { shipping: "shipping", delivery: "delivery", pickup: "pickup" },
        er = Xn({ success: "success" }, { fail: "fail", invalid_payer_name: "invalid_payer_name", invalid_payer_email: "invalid_payer_email", invalid_payer_phone: "invalid_payer_phone", invalid_shipping_address: "invalid_shipping_address" }),
        tr = { merchantCapabilities: ["supports3DS"], displayItems: [] };

    function nr(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function rr(e) { if (window.ApplePaySession) try { return window.ApplePaySession.supportsVersion(e) } catch (e) { return } }
    var or = Z({ amount: function(e, t) { return L(!0)(e, t) }, label: C, pending: S(N) }),
        ar = Z({ amount: D, label: C, pending: S(N) }),
        ir = Z({ amount: D, label: C, pending: S(N), id: j(C, function() { return re("shippingOption") }), detail: j(C, function() { return "" }) }),
        cr = A.apply(void 0, nr(Object.keys(Qn))),
        sr = Z({ origin: C, name: C }),
        ur = Z({ displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), wallets: S(F($)), disableWallets: S(F($)), total: or, requestShipping: S(N), requestPayerName: S(N), requestPayerEmail: S(N), requestPayerPhone: S(N), shippingType: S(cr), currency: J, country: V, jcbEnabled: S(N), __billingDetailsEmailOverride: S(C), __minApplePayVersion: S(R), __merchantDetails: S(sr), __isCheckout: S(N), __betas: S(F(I.apply(void 0, nr(en)))) }),
        lr = X({ currency: S(J), displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), total: S(or) }),
        pr = Z({ displayItems: S(F(ar)), shippingOptions: S(q("id")(F(ir))), total: S(or), status: function(e, t) { return A.apply(void 0, nr(Object.keys(Zn)))(-1 !== ["invalid_payer_name", "invalid_payer_email", "invalid_payer_phone"].indexOf(e) ? "fail" : e, t) } }),
        dr = A.apply(void 0, nr(Object.keys(er))),
        fr = function() { return window.ApplePaySession ? ["APPLE_PAY"] : ["GOOGLE_PAY", "BROWSER"] },
        mr = function(e) { var t = []; return window.ApplePaySession ? n(e, i.applePay) && t.push("APPLE_PAY") : (n(e, i.googlePay) && (t.push("GOOGLE_PAY"), Ue && t.push("BROWSER")), n(e, i.browserCard) && -1 === t.indexOf("BROWSER") && t.push("BROWSER")), t },
        hr = m(10),
        _r = 2,
        yr = Object(hr.b)(function(e) { return window.ApplePaySession.canMakePaymentsWithActiveCard(e) }),
        br = function(n, r, o, a, e) {
            var t = 4 < arguments.length && void 0 !== e ? e : _r,
                i = Math.max(_r, t);
            if (window.ApplePaySession) { if (function() { try { return window.location.origin === window.top.location.origin } catch (e) { return !1 } }()) { if (window.ApplePaySession.supportsVersion(i)) { var c = "merchant." + (r ? [n, r] : [n]).join(".") + ".stripe"; return yr(c).then(function(e) { var t; return a("pr.apple_pay.can_make_payment_native_response", { available: e }), o && !e && window.console && (t = r ? "or stripeAccount parameter (" + r + ") " : "", window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + n + ") " + t + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")), e }) } return o && window.console && window.console.warn("This version of Safari does not support ApplePay JS version " + i + "."), ae.a.resolve(!1) } return ae.a.resolve(!1) }
            return ae.a.resolve(!1)
        };

    function vr(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function gr(e, t) { var n = "US" === e || t ? ["discover", "diners", "jcb"].concat(kr) : kr; return -1 !== Or.indexOf(e) ? ["amex"].concat(vr(n)) : n }

    function wr(e, t) { var n, r = { unitSize: 1 / (n = Tr[t.toLowerCase()] || 100), fractionDigits: Math.ceil(Math.log(n) / Math.log(10)) }; return (e * r.unitSize).toFixed(r.fractionDigits) }
    var Er, Sr, Pr, kr = ["mastercard", "visa"],
        Or = ["AT", "AU", "BE", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "IE", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NO", "NZ", "PL", "PT", "SE", "SG", "US"],
        Tr = { bif: 1, clp: 1, djf: 1, gnf: 1, jpy: 1, kmf: 1, krw: 1, mga: 1, pyg: 1, rwf: 1, vnd: 1, vuv: 1, xaf: 1, xof: 1, xpf: 1, bhd: 1e3, jod: 1e3, kwd: 1e3, omr: 1e3, tnd: 1e3 },
        Ar = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ir(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Cr(e, t) { return { amount: wr(e.amount, t.currency), label: e.label, type: e.pending ? "pending" : "final" } }

    function jr(e, t) { return new window.ApplePayError(e, t) }

    function Nr(t) { return function(e) { return e[t] && "string" == typeof e[t] ? e[t].toUpperCase() : null } }
    var Rr, Mr = (Ir(Er = {}, er.success, 0), Ir(Er, er.fail, 1), Ir(Er, er.invalid_payer_name, 2), Ir(Er, er.invalid_shipping_address, 3), Ir(Er, er.invalid_payer_phone, 4), Ir(Er, er.invalid_payer_email, 4), Er),
        xr = (Ir(Sr = {}, er.success, function() { return null }), Ir(Sr, er.fail, function() { return null }), Ir(Sr, er.invalid_payer_name, function() { return jr("billingContactInvalid", "name") }), Ir(Sr, er.invalid_shipping_address, function() { return jr("shippingContactInvalid", "postalAddress") }), Ir(Sr, er.invalid_payer_phone, function() { return jr("shippingContactInvalid", "phoneNumber") }), Ir(Sr, er.invalid_payer_email, function() { return jr("shippingContactInvalid", "emailAddress") }), Sr),
        Lr = (Ir(Pr = {}, Qn.pickup, "storePickup"), Ir(Pr, Qn.shipping, "shipping"), Ir(Pr, Qn.delivery, "delivery"), Pr),
        Dr = { total: function(e) { return Cr(e.total, e) }, lineItems: function(t) { return t.displayItems ? t.displayItems.map(function(e) { return Cr(e, t) }) : [] }, shippingMethods: function(r) { return r.shippingOptions ? r.shippingOptions.map(function(e) { return n = r, { amount: wr((t = e).amount, n.currency), label: t.label, detail: t.detail, identifier: t.id }; var t, n }) : [] }, applicationData: function(e) { return e.applicationData || null } },
        Br = { shippingType: function(e) { var t = e.shippingType; if (!t) return null; var n = Lr[t]; if (void 0 !== n) return n; throw new M.a("Invalid value for shippingType: " + t) }, requiredBillingContactFields: function(e) { return e.requestPayerName ? ["postalAddress"] : null }, requiredShippingContactFields: function(e) { var t = []; return e.requestShipping && t.push("postalAddress"), e.requestPayerEmail && t.push("email"), e.requestPayerPhone && t.push("phone"), t.length ? t : null }, countryCode: Nr("country"), currencyCode: Nr("currency"), merchantCapabilities: (Rr = "merchantCapabilities", function(e) { return e[Rr] || null }), supportedNetworks: function(e) { var t, n, r = (t = e.country, n = e.jcbEnabled || !1, gr(t, n).reduce(function(e, t) { return "mastercard" === t ? [].concat(vr(e), ["masterCard"]) : "diners" === t ? e : [].concat(vr(e), [t]) }, [])); return rr(4) && r.push("maestro"), r } },
        Fr = { status: function(e) { var t = Mr[e.status]; return rr(3) && 1 < t ? 1 : t }, error: function(e) { return rr(3) ? xr[e.status]() : null } },
        qr = Ar({}, Dr, Br),
        Ur = Ar({}, Dr, Fr),
        Hr = function(e) { var r = Ar({}, tr, e); return Object.keys(qr).reduce(function(e, t) { var n = (0, qr[t])(r); return null !== n ? Ar({}, e, Ir({}, t, n)) : e }, {}) },
        Yr = function(r) { return Object.keys(Ur).reduce(function(e, t) { var n = (0, Ur[t])(r); return null !== n ? Ar({}, e, Ir({}, t, n)) : e }, {}) };

    function zr(e) { return "string" == typeof e ? e : null }

    function Gr(e) { return e ? [e.givenName, e.familyName].filter(function(e) { return e && "string" == typeof e }).join(" ") : null }
    var Wr = function(e) {
            var t = e.addressLines,
                n = e.countryCode,
                r = e.postalCode,
                o = e.administrativeArea,
                a = e.locality,
                i = e.phoneNumber,
                c = zr(n);
            return { addressLine: Array.isArray(t) ? t.reduce(function(e, t) { return "string" == typeof t ? [].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e), [t]) : e }, []) : [], country: c ? c.toUpperCase() : "", postalCode: zr(r) || "", recipient: Gr(e) || "", region: zr(o) || "", city: zr(a) || "", phone: zr(i) || "", sortingCode: "", dependentLocality: "", organization: "" }
        },
        Kr = function(e, t) {
            var n = e.identifier,
                r = e.label;
            return t.filter(function(e) { return e.id === n && e.label === r })[0]
        },
        Vr = function(e, t) {
            var n, r, o = e.shippingContact,
                a = e.shippingMethod,
                i = e.billingContact;
            return { shippingOption: a && t.shippingOptions && t.shippingOptions.length ? Kr(a, t.shippingOptions) : null, shippingAddress: o ? Wr(o) : null, payerEmail: (r = o) ? zr(r.emailAddress) : null, payerPhone: (n = o) ? zr(n.phoneNumber) : null, payerName: Gr(i), walletName: "applePay", methodName: "apple-pay" }
        },
        Jr = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function $r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
    var Zr = { austria: "AT", sterreich: "AT", csterreich: "AT", au: "AU", australia: "AU", belgium: "BE", br: "BR", brasil: "BR", brazil: "BR", ca: "CA", canada: "CA", ch: "CH", schweiz: "CH", switzerland: "CH", china: "CN", czechrepublic: "CZ", de: "DE", deutschland: "DE", germany: "DE", danmark: "DK", denmark: "DK", es: "ES", espaa: "ES", spain: "ES", finland: "FI", suomi: "FI", fr: "FR", hk: "HK", hongkong: "HK", england: "GB", gb: "GB", uk: "GB", unitedkingdom: "GB", scotland: "GB", wales: "GB", it: "IT", italy: "IT", italia: "IT", japan: "JP", lietuva: "LT", luxembourg: "LU", netherlands: "NL", nederland: "NL", norway: "NO", poland: "PL", polska: "PL", russia: "RU", saudiarabia: "SA", se: "SE", sweden: "SE", sverige: "SE", singapore: "SG", us: "US", usa: "US", unitedstatesofamerica: "US", unitedstates: "US", estadosunidos: "US" },
        Qr = function(e, t) { return e && "object" === (void 0 === e ? "undefined" : Xr(e)) ? t(e) : null };

    function eo(e) {
        var c = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, eo), this._onEvent = function() {}, this.setEventHandler = function(e) { c._onEvent = e }, this.canMakePayment = function() { return br(window.location.hostname, c._authentication.accountId, _(c._authentication.apiKey) === s.test, c._report, c._minimumVersion) }, this.update = function(e) { c._initialPaymentRequest = Ct(c._paymentRequestOptions, e), c._initializeSessionState() }, this.show = function() {
            c._initializeSessionState();
            var e = void 0;
            try { e = new window.ApplePaySession(c._minimumVersion, Hr(c._paymentRequestOptions)) } catch (e) { throw "Must create a new ApplePaySession from a user gesture handler." === e.message ? new M.a("show() must be called from a user gesture handler (such as a click handler, after the user clicks a button).") : e }
            c._privateSession = e, c._setupSession(e, c._usesButtonElement()), e.begin(), c._isShowing = !0
        }, this.abort = function() { c._privateSession && c._privateSession.abort() }, this._warn = function(e) {}, this._report = function(e, t) { c._controller.report(e, Jr({}, t, { backingLibrary: "APPLE_PAY", usesButtonElement: c._usesButtonElement() })) }, this._validateMerchant = function(t, n) {
            return function(e) {
                c._controller.action.createApplePaySession({ data: { validation_url: e.validationURL, domain_name: window.location.hostname, display_name: c._paymentRequestOptions.total.label }, usesButtonElement: n }).then(function(e) {
                    if (c._isShowing) switch (e.type) {
                        case "object":
                            t.completeMerchantValidation(JSON.parse(e.object.session));
                            break;
                        case "error":
                            c._handleValidationError(t)(e.error);
                            break;
                        default:
                            Object(T.a)(e)
                    }
                }, c._handleValidationError(t))
            }
        }, this._handleValidationError = function(n) { return function(e) { c._report("error.pr.apple_pay.session_creation_failed", { error: e }), n.abort(); var t = e.message; "string" == typeof t && c._controller.warn(t) } }, this._paymentAuthorized = function(a) {
            return function(e) {
                var o = e.payment,
                    t = c._usesButtonElement() ? ee.b.paymentRequestButton : null;
                c._controller.action.tokenizeWithData({ type: "apple_pay", elementName: t, tokenData: Jr({}, o, { billingContact: Qr(o.billingContact, c._normalizeContact) }), mids: c._mids }).then(function(e) { var t, n, r; "error" === e.type ? (a.completePayment(window.ApplePaySession.STATUS_FAILURE), c._report("error.pr.create_token_failed", { error: e.error })) : (t = Qr(o.shippingContact, c._normalizeContact), n = Qr(o.billingContact, c._normalizeContact), t && c._paymentRequestOptions.requestShipping && !t.countryCode && a.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS), r = Vr({ shippingContact: t, billingContact: n }, c._paymentRequestOptions), c._onToken(a)(Jr({}, r, { shippingOption: c._privateShippingOption, token: e.object }))) })
            }
        }, this._normalizeContact = function(e) {
            if (e.country && "string" == typeof e.country) {
                var t = e.country.toLowerCase().replace(/[^a-z]+/g, ""),
                    n = void 0;
                return e.countryCode ? "string" == typeof e.countryCode && (n = e.countryCode.toUpperCase()) : (n = Zr[t]) || c._report("warn.pr.apple_pay.missing_country_code", { country: e.country }), Jr({}, e, { countryCode: n })
            }
            return e
        }, this._onToken = function(t) { return function(e) { c._onEvent({ type: "paymentresponse", payload: Jr({}, e, { complete: se(c._completePayment(t)) }) }) } }, this._completePayment = function(o) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, { status: e });
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.error;
                c._isShowing && (r ? o.completePayment({ status: n, errors: [r] }) : o.completePayment(n)), (0 === n || 1 === n && null == r) && (c._isShowing = !1, c._onEvent && c._onEvent({ type: "close" }))
            }
        }, this._shippingContactSelected = function(t) { return function(e) { c._onEvent({ type: "shippingaddresschange", payload: { shippingAddress: Wr(c._normalizeContact(e.shippingContact)), updateWith: se(c._completeShippingContactSelection(t)) } }) } }, this._completeShippingContactSelection = function(i) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, e), c._paymentRequestOptions.shippingOptions && c._paymentRequestOptions.shippingOptions.length && (c._privateShippingOption = c._paymentRequestOptions.shippingOptions[0]);
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.shippingMethods,
                    o = t.total,
                    a = t.lineItems;
                i.completeShippingContactSelection(n, r, o, a)
            }
        }, this._shippingMethodSelected = function(n) {
            return function(e) {
                var t;
                c._paymentRequestOptions.shippingOptions && (t = Kr(e.shippingMethod, c._paymentRequestOptions.shippingOptions), c._privateShippingOption = t, c._onEvent({ type: "shippingoptionchange", payload: { shippingOption: t, updateWith: se(c._completeShippingMethodSelection(n)) } }))
            }
        }, this._completeShippingMethodSelection = function(a) {
            return function(e) {
                c._paymentRequestOptions = Ct(c._paymentRequestOptions, e);
                var t = Yr(c._paymentRequestOptions),
                    n = t.status,
                    r = t.total,
                    o = t.lineItems;
                a.completeShippingMethodSelection(n, r, o)
            }
        };
        var t = e.controller,
            n = e.authentication,
            r = e.mids,
            o = e.options,
            a = e.usesButtonElement,
            i = e.listenerRegistry;
        this._controller = t, this._authentication = n, this._mids = r, this._minimumVersion = o.__minApplePayVersion || _r, this._usesButtonElement = a, this._listenerRegistry = i, this._initialPaymentRequest = o, this._isShowing = !1, this._initializeSessionState()
    }
    var to = (function(e, t, n) { return t && $r(e.prototype, t), n && $r(e, n), e }(eo, [{
            key: "_initializeSessionState",
            value: function() {
                var e = btoa(this._authentication.accountId ? this._authentication.apiKey + ":" + this._authentication.accountId : this._authentication.apiKey);
                this._paymentRequestOptions = Jr({}, tr, this._initialPaymentRequest, { status: er.success, applicationData: e }), this._privateSession = null, this._privateShippingOption = null;
                var t = this._paymentRequestOptions.shippingOptions;
                t && t.length && (this._privateShippingOption = t[0])
            }
        }, {
            key: "_setupSession",
            value: function(e, t) {
                var n = this;
                this._listenerRegistry.addEventListener(e, "validatemerchant", se(this._validateMerchant(e, t))), this._listenerRegistry.addEventListener(e, "paymentauthorized", se(this._paymentAuthorized(e))), this._listenerRegistry.addEventListener(e, "cancel", se(function() { n._isShowing = !1, n._onEvent({ type: "cancel" }), n._onEvent({ type: "close" }) })), this._listenerRegistry.addEventListener(e, "shippingcontactselected", se(this._shippingContactSelected(e))), this._listenerRegistry.addEventListener(e, "shippingmethodselected", se(this._shippingMethodSelected(e)))
            }
        }]), eo),
        no = null;
    var ro = function(e) { return null !== no ? ae.a.resolve(no) : e().then(function(e) { return no = e }) },
        oo = function(e) { return !(!ze && !Ge) && (!(!e.isCheckout && !window.PaymentRequest) && !(!e.isCheckout && Ue)) },
        ao = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var io = function e(t) {
            var a = this;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._mids = null, this._frame = null, this._initFrame = function(e) {
                var t = a._controller.createHiddenFrame(ee.c.PAYMENT_REQUEST_GOOGLE_PAY, { authentication: a._authentication, mids: a._mids, origin: a._origin });
                t.send({ action: "stripe-pr-initialize", payload: { data: e } }), a._initFrameEventHandlers(t), a._frame = t
            }, this._initFrameEventHandlers = function(o) {
                o._on("pr-cancel", function() { a._onEvent({ type: "cancel" }) }), o._on("pr-close", function() { a._backdrop.fadeOut().then(function() { a._backdrop.unmount() }), a._onEvent({ type: "close" }) }), o._on("pr-error", function(e) { a._onEvent({ type: "error", payload: { errorMessage: e.errorMessage, errorCode: e.errorCode } }) }), o._on("pr-callback", function(e) {
                    var t = e.event,
                        n = e.options,
                        r = e.nonce;
                    switch (t) {
                        case "paymentresponse":
                            a._handlePaymentResponse(o, n, r);
                            break;
                        case "shippingaddresschange":
                            a._handleShippingAddressChange(o, n, r);
                            break;
                        case "shippingoptionchange":
                            a._handleShippingOptionChange(o, n, r);
                            break;
                        default:
                            throw new Error("Unexpected event name: " + t)
                    }
                })
            }, this._handlePaymentResponse = function(t, e, n) { a._onEvent({ type: "paymentresponse", payload: ao({}, e, { complete: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: { status: e } } }) } }) }) }, this._handleShippingAddressChange = function(t, e, n) { a._onEvent({ type: "shippingaddresschange", payload: ao({}, e, { updateWith: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } }) }) }, this._handleShippingOptionChange = function(t, e, n) { a._onEvent({ type: "shippingoptionchange", payload: ao({}, e, { updateWith: function(e) { t.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } }) }) }, this.setEventHandler = function(e) { a._onEvent = e }, this.canMakePayment = function() { if (!oo({ isCheckout: a._isCheckout })) return ae.a.resolve(!1); if (!a._frame) throw new Error("Frame not initialized."); var e = a._frame; return ro(function() { return e.action.checkCanMakePayment().then(function(e) { return !0 === e.available }) }) }, this.show = function() { a._frame && (a._frame.send({ action: "stripe-pr-show", payload: { data: { usesButtonElement: a._usesButtonElement() } } }), a._backdrop.mount(), a._backdrop.show(), a._backdrop.fadeIn()) }, this.update = function(e) { a._frame && a._frame.send({ action: "stripe-pr-update", payload: { data: e } }) }, this.abort = function() { a._frame && a._frame.send({ action: "stripe-pr-abort", payload: {} }) }, this._controller = t.controller, this._authentication = t.authentication, this._mids = t.mids, this._origin = t.origin, this._usesButtonElement = t.usesButtonElement, this._backdrop = new rt({ lockScrolling: !1, lockFocus: !0, lockFocusOn: null, listenerRegistry: t.listenerRegistry }), this._isCheckout = !!t.options.__isCheckout, oo({ isCheckout: this._isCheckout }) && this._controller && (this._controller.action.fetchLocale({ locale: "auto" }), this._initFrame(t.options))
        },
        co = function() { if (!window.PaymentRequest) return null; if (/CriOS\/59/.test(navigator.userAgent)) return null; if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)) return null; if (Ye) return null; var e = window.PaymentRequest; return e.prototype.canMakePayment || (e.prototype.canMakePayment = function() { return ae.a.resolve(!1) }), e }(),
        so = null,
        uo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };
    var lo = function() {
            var a = this;
            this._onEvent = function() {}, this.setEventHandler = function(e) { a._onEvent = e }, this.canMakePayment = function() { return e = a._prFrame, _(a._authentication.apiKey), s.test, null !== so ? ae.a.resolve(so) : co && e ? e.action.checkCanMakePayment().then(function(e) { var t = e.available; return so = !0 === t }) : ae.a.resolve(!1); var e }, this.update = function(e) {
                var t = a._prFrame;
                t && t.send({ action: "stripe-pr-update", payload: { data: e } })
            }, this.show = function() {
                if (!a._prFrame) throw new M.a("Payment Request is not available in this browser.");
                a._prFrame.send({ action: "stripe-pr-show", payload: { data: { usesButtonElement: a._usesButtonElement() } } })
            }, this.abort = function() { a._prFrame && a._prFrame.send({ action: "stripe-pr-abort", payload: {} }) }, this._setupPrFrame = function(o, e) {
                o.send({ action: "stripe-pr-initialize", payload: { data: e } }), o._on("pr-cancel", function() { a._onEvent({ type: "cancel" }) }), o._on("pr-close", function() { a._onEvent({ type: "close" }) }), o._on("pr-error", function(e) { a._onEvent({ type: "error", payload: { errorMessage: e.message || "", errorCode: e.code || "" } }) }), o._on("pr-callback", function(e) {
                    var t = e.event,
                        n = e.nonce,
                        r = e.options;
                    switch (t) {
                        case "token":
                            a._onEvent({ type: "paymentresponse", payload: uo({}, r, { complete: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { data: { status: e }, nonce: n } }) } }) });
                            break;
                        case "shippingaddresschange":
                            a._onEvent({ type: "shippingaddresschange", payload: { shippingAddress: r.shippingAddress, updateWith: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } } });
                            break;
                        case "shippingoptionchange":
                            a._onEvent({ type: "shippingoptionchange", payload: { shippingOption: r.shippingOption, updateWith: function(e) { o.send({ action: "stripe-pr-callback-complete", payload: { nonce: n, data: e } }) } } });
                            break;
                        default:
                            throw new Error("Unexpected event from PaymentRequest inner: " + t)
                    }
                })
            }
        },
        po = function e(t) {
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), lo.call(this);
            var n, r = t.authentication,
                o = t.controller,
                a = t.mids,
                i = t.origin,
                c = t.usesButtonElement,
                s = t.options;
            this._authentication = r, this._controller = o, this._usesButtonElement = c, co && "https:" === window.location.protocol ? (this._controller.action.fetchLocale({ locale: "auto" }), n = this._controller.createHiddenFrame(ee.c.PAYMENT_REQUEST_BROWSER, { authentication: r, mids: a, origin: i }), this._setupPrFrame(n, s), this._prFrame = n) : this._prFrame = null
        },
        fo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function mo(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }
    var ho = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(_o, le), _o);

    function _o(e) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, _o);
        var t = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (_o.__proto__ || Object.getPrototypeOf(_o)).call(this));
        go.call(t), t._controller = e.controller, t._authentication = e.authentication, t._mids = e.mids, t._listenerRegistry = e.listenerRegistry, t._report("pr.options", { options: e.rawOptions });
        var n = Q(ur, e.rawOptions || {}, "paymentRequest()"),
            r = n.value;
        if (n.warnings.forEach(function(e) { return t._warn(e) }), r.__billingDetailsEmailOverride && r.requestPayerEmail) throw new M.a("When providing `__billingDetailsEmailOverride`, `requestPayerEmail` has to be `false` so that the customer is not prompted for their email in the payment sheet.");
        var o = r.disableWallets,
            a = o ? c.filter(function(e) { return -1 === o.indexOf(e) }) : r.wallets;
        return t._queryStrategy = a ? mr(a) : e.queryStrategyOverride || fr(), t._isCustomizedQueryStrategy = !!a, t._report("pr.query_strategy", { queryStrategy: t._queryStrategy }), t._initialOptions = fo({}, r, { __betas: e.betas, wallets: a }), t._initBackingLibraries(t._initialOptions), t
    }
    var yo, bo, vo, go = function() {
            var f = this;
            this._usedByButtonElement = null, this._showCalledByButtonElement = !1, this._isShowing = !1, this._backingLibraries = { APPLE_PAY: null, GOOGLE_PAY: null, BROWSER: null }, this._activeBackingLibraryName = null, this._buttonTypeName = null, this._activeBackingLibrary = null, this._isCustomizedQueryStrategy = !1, this._canMakePaymentAvailability = { APPLE_PAY: null, GOOGLE_PAY: null, BROWSER: null }, this._canMakePaymentResolved = !1, this._validateUserOn = function(e, t) { "string" == typeof e && ("source" === e && f._hasRegisteredListener("paymentmethod") || "paymentmethod" === e && f._hasRegisteredListener("source")) && (f._report("pr.double_callback_registration"), f._controller.warn("Do not register event listeners for both `source` or `paymentmethod`. Only one of them will succeed.")) }, this._report = function(e, t) { f._controller.report(e, fo({}, t, { activeBackingLibrary: f._activeBackingLibraryName, usesButtonElement: f._usedByButtonElement || !1 })) }, this._warn = function(e) { f._controller.warn(e) }, this._registerElement = function() { f._usedByButtonElement = !0 }, this._elementShow = function() { f._showCalledByButtonElement = !0, f.show() }, this._initBackingLibraries = function(n) {
                f._queryStrategy.forEach(function(e) {
                    var t = { controller: f._controller, authentication: f._authentication, mids: f._mids, origin: window.location.origin, options: n, usesButtonElement: function() { return !0 === f._usedByButtonElement }, listenerRegistry: f._listenerRegistry };
                    switch (e) {
                        case "APPLE_PAY":
                            f._backingLibraries.APPLE_PAY = new to(t), f._backingLibraries.APPLE_PAY.setEventHandler(f._handleInternalEvent);
                            break;
                        case "GOOGLE_PAY":
                            f._backingLibraries.GOOGLE_PAY = new io(t), f._backingLibraries.GOOGLE_PAY.setEventHandler(f._handleInternalEvent);
                            break;
                        case "BROWSER":
                            f._backingLibraries.BROWSER = new po(t), f._backingLibraries.BROWSER.setEventHandler(f._handleInternalEvent);
                            break;
                        default:
                            Object(T.a)(e)
                    }
                })
            }, this._handleInternalEvent = function(e) {
                switch (e.type) {
                    case "paymentresponse":
                        f._emitPaymentResponse(e.payload);
                        break;
                    case "error":
                        f._report("error.pr.internal_error", { error: e.payload });
                        break;
                    case "close":
                        f._isShowing = !1;
                        break;
                    default:
                        f._emitExternalEvent(e)
                }
            }, this._emitExternalEvent = function(i) {
                switch (i.type) {
                    case "cancel":
                        f._emit("cancel");
                        break;
                    case "shippingoptionchange":
                    case "shippingaddresschange":
                        var c = i.type,
                            s = i.payload,
                            u = null,
                            l = !1,
                            p = !1,
                            e = function(e) {
                                if (p && l) return f._report("pr.update_with_called_after_timeout", { event: c }), void f._controller.warn("Call to updateWith() was ignored because it has already timed out. Please ensure that updateWith is called within 30 seconds.");
                                if (l) return f._report("pr.update_with_double_call", { event: c }), void f._controller.warn("Call to updateWith() was ignored because it has already been called. Do not call updateWith more than once.");
                                u && clearTimeout(u), l = !0, f._report("pr.update_with", { event: c, updates: e });
                                var t = Q(pr, e || {}, c + " callback"),
                                    n = t.value;
                                t.warnings.forEach(function(e) { return f._controller.warn(e) });
                                var r = n,
                                    o = !1;
                                f._initialOptions.__isCheckout && "APPLE_PAY" === f._activeBackingLibraryName && n.shippingOptions && 1 === n.shippingOptions.length && 0 === n.shippingOptions[0].amount && (n.shippingOptions, r = mo(n, ["shippingOptions"]), o = !0);
                                var a = n.shippingOptions || f._initialOptions.shippingOptions;
                                if (!(o || "shippingaddresschange" !== i.type || n.status !== er.success || a && a.length)) throw new M.a("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
                                s.updateWith(r)
                            };
                        f._hasRegisteredListener(i.type) ? (u = setTimeout(function() { p = !0, f._report("pr.update_with_timed_out", { event: c }), f._controller.warn('Timed out waiting for a call to updateWith(). If you listen to "' + i.type + '" events, then you must call event.updateWith in the "' + i.type + '" handler within 30 seconds.'), e({ status: "fail" }) }, 29900), f._emit(c, fo({}, s, { updateWith: e }))) : e({ status: "success" });
                        break;
                    case "token":
                    case "source":
                    case "paymentmethod":
                        var t = i.type,
                            r = i.payload,
                            o = null,
                            a = !1,
                            d = !1,
                            n = function(e) {
                                if (a && d) return f._report("pr.complete_called_after_timeout"), void f._controller.warn("Call to complete() was ignored because it has already timed out. Please ensure that complete is called within 30 seconds.");
                                if (d) return f._report("pr.complete_double_call"), void f._controller.warn("Call to complete() was ignored because it has already been called. Do not call complete more than once.");
                                o && clearTimeout(o), d = !0;
                                var t = Q(dr, e, "status for PaymentRequest completion"),
                                    n = t.value;
                                t.warnings.forEach(function(e) { return f._controller.warn(e) }), r.complete(n)
                            },
                            o = setTimeout(function() { a = !0, f._report("pr.complete_timed_out"), f._controller.warn('Timed out waiting for a call to complete(). Once you have processed the payment in the "' + i.type + '" handler, you must call event.complete within 30 seconds.'), n("fail") }, 29900);
                        f._emit(t, fo({}, r, { complete: n }));
                        break;
                    default:
                        Object(T.a)(i)
                }
            }, this._maybeEmitPaymentResponse = function(e) { f._isShowing && f._emitExternalEvent(e) }, this._emitPaymentResponse = function(e) {
                f._report("pr.payment_authorized");
                var t = e.token,
                    n = mo(e, ["token"]),
                    r = n.payerEmail,
                    o = n.payerPhone,
                    a = n.complete,
                    i = f._showCalledByButtonElement ? ee.b.paymentRequestButton : null;
                f._hasRegisteredListener("token") && f._maybeEmitPaymentResponse({ type: "token", payload: e }), f._hasRegisteredListener("source") && f._controller.action.createSourceWithData({ elementName: i, type: "card", sourceData: { token: t.id, owner: { email: f._initialOptions.__billingDetailsEmailOverride || r, phone: o } }, mids: null }).then(function(e) { "error" === e.type ? e.error.code && "email_invalid" === e.error.code ? a("invalid_payer_email") : (f._report("fatal.pr.token_to_source_failed", { error: e.error, token: t.id }), a("fail")) : f._maybeEmitPaymentResponse({ type: "source", payload: fo({}, n, { source: e.object }) }) }), f._hasRegisteredListener("paymentmethod") && f._controller.action.createPaymentMethodWithData({ elementName: i, type: "card", paymentMethodData: { card: { token: t.id }, billing_details: { email: f._initialOptions.__billingDetailsEmailOverride || r, phone: o } }, mids: null }).then(function(e) { "error" === e.type ? e.error.code && "email_invalid" === e.error.code ? a("invalid_payer_email") : (f._report("fatal.pr.token_to_payment_method_failed", { error: e.error, token: t.id }), a("fail")) : f._maybeEmitPaymentResponse({ type: "paymentmethod", payload: fo({}, n, { paymentMethod: e.object }) }) })
            }, this._canMakePaymentForBackingLibrary = function(o) { var e = f._backingLibraries[o]; if (!e) throw new Error("Unexpectedly calling canMakePayment on uninitialized backing library."); return ae.a.race([new ae.a(function(e) { return setTimeout(e, 1e4) }).then(function() { return !1 }), e.canMakePayment().then(function(e) { return !!e })]).then(function(e) { var t, n, r; return f._canMakePaymentAvailability = fo({}, f._canMakePaymentAvailability, (r = e, (n = o) in (t = {}) ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t)), { backingLibraryName: o, available: e } }) }, this._isGooglePayOnAndroid = function() {
                var e = f._initialOptions.wallets,
                    t = e && -1 === e.indexOf("googlePay");
                return Ue && !t
            }, this._constructCanMakePaymentResponse = function() { var e = f._isGooglePayOnAndroid() && !!f._canMakePaymentAvailability.BROWSER; return { applePay: !!f._canMakePaymentAvailability.APPLE_PAY, googlePay: !!f._canMakePaymentAvailability.GOOGLE_PAY || e } }, this.canMakePayment = se(function() {
                if (f._report("pr.can_make_payment"), f._canMakePaymentResolved) { var e = null !== f._activeBackingLibrary ? f._constructCanMakePaymentResponse() : null; return f._report("pr.can_make_payment_response", { response: e, cached: !0 }), ae.a.resolve(e) }
                if ("https:" !== window.location.protocol) return f._controller.warn("If you are testing the PaymentRequest button (to accept Apple Pay, Google Pay, etc.) you must serve this page over HTTPS as it will not work over HTTP. Please read https://stripe.com/docs/stripe-js/elements/payment-request-button#html-js-prerequisites for more details."), f._canMakePaymentResolved = !0, ae.a.resolve(null);
                if (f._isCustomizedQueryStrategy && window.self !== window.top) return f._controller.warn("You must use Stripe PaymentRequest in the top level frame if you specify which wallets are available."), f._canMakePaymentResolved = !0, ae.a.resolve(null);
                var t = f._queryStrategy.map(function(e) { return function() { return f._canMakePaymentForBackingLibrary(e) } }),
                    r = new Xt.a;
                return $n(t, function(e) {
                    var t = e.backingLibraryName,
                        n = e.available;
                    return n && (f._activeBackingLibraryName = t, f._activeBackingLibrary = f._backingLibraries[t], f._buttonTypeName = f._activeBackingLibraryName, f._isGooglePayOnAndroid() && (f._buttonTypeName = "GOOGLE_PAY")), n
                }).then(function(e) {
                    var t = new Xt.a;
                    f._canMakePaymentResolved = !0;
                    var n = null;
                    return "SATISFIED" === e.type && (n = f._constructCanMakePaymentResponse()), f._report("pr.can_make_payment_response", { response: n, cached: !1, duration: r.getElapsedTime(t) }), n
                })
            }), this.update = se(function(e) {
                if (f._isShowing) throw f._report("pr.update_called_while_showing"), new M.a("You cannot update Payment Request options while the payment sheet is showing.");
                f._report("pr.update", { updates: e });
                var t = Q(lr, e, "PaymentRequest update()"),
                    n = t.value;
                t.warnings.forEach(function(e) { return f._warn(e) }), f._activeBackingLibrary && f._activeBackingLibrary.update(n)
            }), this.show = se(function() {
                if (f._usedByButtonElement && !f._showCalledByButtonElement && (f._report("pr.show_called_with_button"), f._warn("Do not call show() yourself if you are using the paymentRequestButton Element. The Element handles showing the payment sheet.")), !f._canMakePaymentResolved) throw f._report("pr.show_called_before_can_make_payment"), new M.a("You must first check the Payment Request API's availability using paymentRequest.canMakePayment() before calling show().");
                if (!f._activeBackingLibrary) throw f._report("pr.show_called_with_can_make_payment_false"), new M.a("Payment Request is not available in this browser.");
                var e = f._activeBackingLibrary;
                f._report("pr.show", { listeners: Object.keys(f._callbacks).sort() }), f._isShowing = !0, e.show()
            }), this.abort = se(function() {
                var e;
                f._activeBackingLibrary && (e = f._activeBackingLibrary, f._report("pr.abort"), e.abort())
            }), this.isShowing = function() { return f._isShowing }
        },
        wo = ho,
        Eo = { base: S(B), complete: S(B), empty: S(B), invalid: S(B), paymentRequestButton: S(B) },
        So = { classes: S(Z({ base: S(C), complete: S(C), empty: S(C), focus: S(C), invalid: S(C), webkitAutofill: S(C) })), hidePostalCode: S(N), hideIcon: S(N), showIcon: S(N), style: S(Z(Eo)), iconStyle: S(A("solid", "default")), value: S(P(C, B)), __privateCvcOptional: S(N), __privateValue: S(P(C, B)), __privateEmitIbanValue: S(N), error: S(Z({ type: C, code: S(C), decline_code: S(C), param: S(C) })), locale: U("elements()"), fonts: U("elements()"), placeholder: S(C), disabled: S(N), placeholderCountry: S(C), paymentRequest: S((yo = wo, bo = "stripe.paymentRequest(...)", function(e, t) { return e instanceof yo ? h(e) : b("a " + bo + " instance", e, t) })), supportedCountries: S(F(C)), accountHolderType: S(A("individual", "company")), issuingCard: S(C) },
        Po = Z(So);

    function ko(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Oo(e, t) { return (n = e) !== mn.a.cardNumber && n !== mn.a.cardExpiry && n !== mn.a.cardCvc || !t.cl ? Ro[e] : hn.a.CARD_LIGHT_ELEMENT; var n }

    function To(e) { var t = Object(Jn.a)(e, null); return !!t && "rtl" === t.getPropertyValue("direction") }

    function Ao() { var e = document.createElement("input"); return e.className = yn, e.setAttribute("aria-hidden", "true"), e.setAttribute("aria-label", " "), e.setAttribute("autocomplete", "false"), e.maxLength = 1, e.disabled = !0, Object(ie.d)(e, xo), e }

    function Io() { var e = Ao(); return e.className = bn, e.setAttribute("tabindex", "-1"), e }

    function Co() { document.activeElement && document.activeElement.blur && document.activeElement.blur() }

    function jo(e) {
        switch (e.type) {
            case "object":
                return Lo.push(e.object.id), { issuingCard: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function No(e) {
        switch (e.type) {
            case "object":
                return { nonce: e.object.public_nonce };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }
    var Ro = (ko(vo = {}, mn.a.card, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardNumber, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardExpiry, hn.a.CARD_ELEMENT), ko(vo, mn.a.cardCvc, hn.a.CARD_ELEMENT), ko(vo, mn.a.postalCode, hn.a.CARD_ELEMENT), ko(vo, mn.a.paymentRequestButton, hn.a.PAYMENT_REQUEST_ELEMENT), ko(vo, mn.a.iban, hn.a.IBAN_ELEMENT), ko(vo, mn.a.idealBank, hn.a.IDEAL_BANK_ELEMENT), ko(vo, mn.a.p24Bank, hn.a.P24_BANK_ELEMENT), ko(vo, mn.a.auBankAccount, hn.a.AU_BANK_ACCOUNT_ELEMENT), ko(vo, mn.a.fpxBank, hn.a.FPX_BANK_ELEMENT), ko(vo, mn.a.issuingCardNumberDisplay, hn.a.ISSUING_CARD_NUMBER_DISPLAY_ELEMENT), ko(vo, mn.a.issuingCardCvcDisplay, hn.a.ISSUING_CARD_CVC_DISPLAY_ELEMENT), ko(vo, mn.a.issuingCardExpiryDisplay, hn.a.ISSUING_CARD_EXPIRY_DISPLAY_ELEMENT), ko(vo, mn.a.epsBank, hn.a.EPS_BANK_ELEMENT), ko(vo, mn.a.netbankingBank, hn.a.NETBANKING_BANK_ELEMENT), ko(vo, mn.a.afterpayClearpayMessageModal, hn.a.AFTERPAY_MESSAGE_MODAL_ELEMENT), vo),
        Mo = { margin: "0", padding: "0", border: "none", display: "block", background: "transparent", position: "relative", opacity: "1" },
        xo = { border: "none", display: "block", position: "absolute", height: "1px", top: "-1px", left: "0", padding: "0", margin: "0", width: "100%", opacity: "0", background: "transparent", "pointer-events": "none", "font-size": "16px" },
        Lo = ["test_id"],
        Do = function(e) { return -1 !== Lo.indexOf(e) },
        Bo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Fo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function qo(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Uo(e) { return parseFloat(e.toFixed(1)) }
    var Ho = { base: "StripeElement", focus: "StripeElement--focus", invalid: "StripeElement--invalid", complete: "StripeElement--complete", empty: "StripeElement--empty", webkitAutofill: "StripeElement--webkit-autofill" },
        Yo = "#faffbd";

    function zo(e) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, zo), this.focus = function() {
            if (n._isIssuingElement()) throw new M.a("Cannot call focus() on an " + n._componentName + " Element.");
            document.activeElement && document.activeElement.blur && document.activeElement.blur(), n._fakeInput.focus()
        }, this._formSubmit = function() {
            for (var e, t = n._component.parentElement; t && "FORM" !== t.nodeName;) t = t.parentElement;
            t && ((e = document.createEvent("Event")).initEvent("submit", !0, !0), t.dispatchEvent(e))
        };
        var t = e.options,
            r = e.component,
            o = e.listenerRegistry,
            a = e.elementTimings,
            i = e.emitEvent,
            c = e.getParent,
            s = t.controller,
            u = t.componentName,
            l = t.publicOptions;
        this._componentName = u, this._component = r, this._controller = s, this._listenerRegistry = o, this._emitEvent = i, this._getParent = c;
        var p = Q(Po, l || {}, "create()"),
            d = p.value;
        p.warnings.forEach(function(e) { return n._controller.warn(e) });
        var f = d.paymentRequest,
            m = d.classes,
            h = d.issuingCard,
            _ = "paymentRequestButton" === this._componentName;
        if (_) {
            if (!f) throw new M.a("You must pass in a stripe.paymentRequest object in order to use this Element.");
            this._paymentRequest = f, this._paymentRequest._registerElement()
        }
        if (this._isIssuingElement()) { if (!h) throw new Error("You must pass in an ID to the issuingCard option in order to use this Element."); if (!Do(h)) throw new Error("Issuing card " + h + " has not been retrieved.") }
        this._createElement(t, d, a), this._classes = Ho, this._computeCustomClasses(m || {}), this._lastBackgroundColor = "", this._focused = !1, this._empty = !_, this._invalid = !1, this._complete = !1, this._autofilled = !1, this._lastSubmittedAt = null
    }
    var Go = (function(e, t, n) { return t && Fo(e.prototype, t), n && Fo(e, n), e }(zo, [{
            key: "update",
            value: function(e) {
                var t, n, r = this,
                    o = Q(Po, e || {}, "element.update()"),
                    a = o.value;
                o.warnings.forEach(function(e) { return r._controller.warn(e) }), a && (t = a.classes, n = qo(a, ["classes"]), t && (this._removeClasses(), this._computeCustomClasses(t), this._updateClasses()), this._updateFrameHeight(a), Object.keys(n).length && (this._frame.update(n), this._secondaryFrame && this._secondaryFrame.update(n)))
            }
        }, {
            key: "blur",
            value: function() {
                if (this._isIssuingElement()) throw new M.a("Cannot call blur() on an " + this._componentName + " Element.");
                this._frame.blur(), this._fakeInput.blur()
            }
        }, { key: "clear", value: function() { this._frame.clear() } }, {
            key: "unmount",
            value: function() {
                var e = this._getParent(),
                    t = this._label;
                e && (this._listenerRegistry.removeEventListener(e, "click", this.focus), this._removeClasses()), t && (this._listenerRegistry.removeEventListener(t, "click", this.focus), this._label = null), this._secondaryFrame && (this._secondaryFrame.unmount(), this._listenerRegistry.removeEventListener(window, "click", this._handleOutsideClick)), this._fakeInput.disabled = !0, this._frame.unmount()
            }
        }, {
            key: "mount",
            value: function() {
                var e;
                if (Object(ie.b)(document, this._component) && (this._controller.report("user_error.shadow_dom_mount", { element: this._componentName }), e = function() { throw new M.a("Elements cannot be mounted in a ShadowRoot. Please mount in the Light DOM.") }, "test" === this._controller.keyMode() ? e() : setTimeout(e, 0)), this._paymentRequest) { if (!this._paymentRequest._canMakePaymentResolved) throw new M.a("For the paymentRequestButton Element, you must first check availability using paymentRequest.canMakePayment() before mounting the Element."); if (!this._paymentRequest._activeBackingLibraryName) throw new M.a("The paymentRequestButton Element is not available in the current environment.") }
                this._mountTimestamp = new Xt.a, this._findPossibleLabel(), this._updateClasses()
            }
        }, { key: "_isIssuingElement", value: function() { return "issuingCardNumberDisplay" === this._componentName || "issuingCardCvcDisplay" === this._componentName || "issuingCardExpiryDisplay" === this._componentName } }, {
            key: "_updateClasses",
            value: function() {
                var e = this._getParent();
                e && Object(ie.f)(e, [
                    [this._classes.base, !0],
                    [this._classes.empty, this._empty],
                    [this._classes.focus, this._focused],
                    [this._classes.invalid, this._invalid],
                    [this._classes.complete, this._complete],
                    [this._classes.webkitAutofill, this._autofilled]
                ])
            }
        }, {
            key: "_removeClasses",
            value: function() {
                var e = this._getParent();
                e && Object(ie.f)(e, [
                    [this._classes.base, !1],
                    [this._classes.empty, !1],
                    [this._classes.focus, !1],
                    [this._classes.invalid, !1],
                    [this._classes.complete, !1],
                    [this._classes.webkitAutofill, !1]
                ])
            }
        }, {
            key: "_findPossibleLabel",
            value: function() {
                var e = this._getParent();
                if (e) {
                    var t = e.getAttribute("id"),
                        n = void 0;
                    if (t && (n = document.querySelector("label[for='" + t + "']")), n) this._listenerRegistry.addEventListener(e, "click", this.focus);
                    else
                        for (n = n || e.parentElement; n && "LABEL" !== n.nodeName;) n = n.parentElement;
                    n ? (this._label = n, this._listenerRegistry.addEventListener(n, "click", this.focus)) : this._listenerRegistry.addEventListener(e, "click", this.focus)
                }
            }
        }, {
            key: "_computeCustomClasses",
            value: function(n) {
                var r = {};
                return Object.keys(n).forEach(function(e) {
                    if (!Ho[e]) throw new M.a(e + " is not a customizable class name.\nYou can customize: " + Object.keys(Ho).join(", "));
                    var t = n[e] || Ho[e];
                    r[e] = t.replace(/\./g, " ")
                }), this._classes = Bo({}, this._classes, r), this
            }
        }, {
            key: "_setupEvents",
            value: function(e) {
                var n, p = this,
                    a = e.stripeJsLoadTimestamp,
                    i = e.stripeCreateTimestamp,
                    c = e.groupCreateTimestamp,
                    s = e.createTimestamp,
                    u = 0,
                    r = 0;
                this._frame._on("load", function(e) {
                    var t = e.source;
                    u++;
                    var n = p._getParent(),
                        r = To(n),
                        o = p._paymentRequest ? p._paymentRequest._buttonTypeName : null;
                    p._frame.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: a.getAsPosixTime(), stripeCreate: i.getAsPosixTime(), groupCreate: c.getAsPosixTime(), create: s.getAsPosixTime(), mount: p._mountTimestamp.getAsPosixTime() }, loadCount: u, matchFrame: t === p._frame._iframe.contentWindow, rtl: r, paymentRequestButtonType: o } })
                }), this._secondaryFrame && (n = this._secondaryFrame)._on("load", function(e) {
                    var t = e.source;
                    r++, n.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: a.getAsPosixTime(), stripeCreate: i.getAsPosixTime(), groupCreate: c.getAsPosixTime(), create: s.getAsPosixTime(), mount: p._mountTimestamp.getAsPosixTime() }, loadCount: r, matchFrame: t === n._iframe.contentWindow, rtl: !1, paymentRequestButtonType: null } })
                }), this._frame._on("redirectfocus", function(e) {
                    var t = e.focusDirection,
                        n = Object(Qe.b)(p._component, t);
                    n && n.focus()
                }), this._frame._on("focus", function() { p._focused = !0, p._updateClasses() }), this._frame._on("blur", function() { p._focused = !1, p._updateClasses(), p._lastSubmittedAt && "paymentRequestButton" === p._componentName && (p._controller.report("payment_request_button.sheet_visible", { latency: p._lastSubmittedAt.getElapsedTime() }), p._lastSubmittedAt = null) }), this._frame._on("submit", function() { var e, t; "paymentRequestButton" === p._componentName ? (p._lastSubmittedAt = new Xt.a, t = e = !1, $t(), p._emitEvent("click", { preventDefault: function() { p._controller.report("payment_request_button.default_prevented"), e && p._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."), t = !0 } }), !t && p._paymentRequest && (p._paymentRequest._elementShow(), e = !0)) : (p._emitEvent("submit"), p._formSubmit()) }), ["ready", "focus", "blur", "escape"].forEach(function(e) { p._frame._on(e, function() { p._emitEvent(e) }) }), this._frame._on("change", function(t) {
                    $t();
                    var n = {},
                        e = dn[p._componentName] || [];
                    ["error", "value", "empty", "complete"].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e)).forEach(function(e) { return n[e] = t[e] }), p._emitEvent("change", n), p._empty = n.empty, p._invalid = !!n.error, p._complete = n.complete, p._updateClasses()
                }), this._frame._on("__privateIntegrationError", function(e) {
                    var t = e.message;
                    p._emitEvent("__privateIntegrationError", { message: t })
                }), this._frame._on("dimensions", function(e) { var t, n, r, o, a, i, c, s, u, l = p._getParent();!l || (t = Object(Jn.a)(l, null)) && (a = parseFloat(t.getPropertyValue("height")), n = e.height, "border-box" === t.getPropertyValue("box-sizing") && (r = parseFloat(t.getPropertyValue("padding-top")), o = parseFloat(t.getPropertyValue("padding-bottom")), a = a - parseFloat(t.getPropertyValue("border-top")) - parseFloat(t.getPropertyValue("border-bottom")) - r - o), i = Uo(a), c = Uo(n), 0 !== a && i < c && p._controller.report("wrapper_height_mismatch", { height: c, outer_height: i }), s = p._component.getBoundingClientRect().height, u = Uo(s), 0 !== s && 0 !== n && u !== c && (p._frame.updateStyle({ height: n + "px" }), p._controller.report("iframe_height_update", { height: c, calculated_height: u }))) }), this._frame._on("autofill", function() {
                    var e, t, n = p._getParent();
                    n && (t = (e = n.style.backgroundColor) === Yo || "rgb(250, 255, 189)" === e, p._lastBackgroundColor = t ? p._lastBackgroundColor : e, n.style.backgroundColor = Yo, p._autofilled = !0, p._updateClasses())
                }), this._frame._on("autofill-cleared", function() {
                    var e = p._getParent();
                    p._autofilled = !1, e && (e.style.backgroundColor = p._lastBackgroundColor), p._updateClasses()
                }), this._frame._on("update-outer-style", function(t) { Object.keys(t).forEach(function(e) { p._component.style.setProperty(e, t[e]) }) })
            }
        }, { key: "_handleOutsideClick", value: function() { this._secondaryFrame && this._secondaryFrame.send({ action: "stripe-outside-click", payload: {} }) } }, {
            key: "_updateFrameHeight",
            value: function(e, t) {
                var n, r, o, a, i, c, s, u, l, p, d, f = 1 < arguments.length && void 0 !== t && t,
                    m = e.style;
                "paymentRequestButton" === this._componentName ? (r = "string" == typeof(n = (m && m.paymentRequestButton || {}).height) ? n : void 0, (f || r) && (this._frame.updateStyle({ height: r || this._lastHeight || "40px" }), this._lastHeight = r || this._lastHeight)) : (i = (o = m && m.base || {}).fontSize, c = o.padding, s = "string" != typeof(a = o.lineHeight) || isNaN(parseFloat(a)) ? void 0 : a, l = "string" == typeof c ? c : void 0, (u = "string" == typeof i ? i : void 0) && !/^\d+(\.\d*)?px$/.test(u) && this._controller.warn("The fontSize style you specified (" + u + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."), (f || s || u) && (p = -1 === ee.j.indexOf(this._componentName) ? void 0 : l || this._lastPadding, d = Vn(s || this._lastHeight, u || this._lastFontSize, p), this._frame.updateStyle({ height: d }), this._lastFontSize = u || this._lastFontSize, this._lastHeight = s || this._lastHeight, this._lastPadding = p))
            }
        }, {
            key: "_createElement",
            value: function(e, t, n) {
                var r = this,
                    o = (e.controller, e.publicOptions, e.componentName),
                    a = e.groupId,
                    i = qo(e, ["controller", "publicOptions", "componentName", "groupId"]),
                    c = (t.classes, t.paymentRequest, qo(t, ["classes", "paymentRequest"])),
                    s = this._component,
                    u = Ao();
                Object(ie.d)(s, Mo);
                var l, p, d, f = To(document.body),
                    m = Oo(o, this._controller.getFlags()),
                    h = Bo({}, i, c, { rtl: f }),
                    _ = this._controller.createElementFrame(m, o, a, h);
                _._on("load", function() { u.disabled = !1 }), this._listenerRegistry.addEventListener(u, "focus", function() { _.focus() }), _.appendTo(s), fn[o] && (l = fn[o].secondary, (p = this._controller.createSecondaryElementFrame(m, l, o, a, h)) && p.on && p.on("height-change", function(e) { p.updateStyle({ height: e.height + "px" }) }), (this._secondaryFrame = p).appendTo(s), this._listenerRegistry.addEventListener(window, "click", function() { return r._handleOutsideClick() })), s.appendChild(u), qe && o !== ee.b.paymentRequestButton && (d = Io(), s.appendChild(d)), this._frame = _, this._fakeInput = u, this._setupEvents(n), this._updateFrameHeight(t, !0)
            }
        }]), zo),
        Wo = { amount: R, currency: A("USD", "AUD", "CAD", "GBP", "NZD", "EUR"), badgeTheme: S(A("black-on-mint", "black-on-white", "mint-on-black", "white-on-black")), introText: S(A("In", "in", "Or", "or", "Pay", "pay", "Pay in", "pay in")), isEligible: S(N), isCartEligible: S(N), lockupTheme: S(A("black", "white", "mint")), logoType: S(A("badge", "lockup")), max: S(R), min: S(R), modalLinkStyle: S(A("circled-info-icon", "more-info-text", "learn-more-text")), modalTheme: S(A("mint", "white")), showInterestFree: S(N), showLowerLimit: S(N), showUpperLimit: S(N), showWith: S(N) },
        Ko = Z(Wo),
        Vo = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
    var Jo = function(o) {
        function r(e) {
            var t = Q(Ko, e || {}, "create()"),
                n = t.value;
            return t.warnings.forEach(function(e) { return c.warn(e) }), n
        }

        function a(e, t) { return e.apply(void 0, [p].concat(function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(t))) }

        function e(r) {
            return function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                p ? a(r, t) : d.push([r, t])
            }
        }
        var i = o.emitEvent,
            t = o.options,
            c = t.controller,
            s = t.locale,
            n = t.publicOptions,
            u = new Xt.a,
            l = r(n),
            p = void 0,
            d = [];
        (function(e) {
            var t = !1;
            window.Promise || (t = !0, window.Promise = ae.a);
            var n = e();
            return t && window.Promise === ae.a && delete window.Promise, n
        })(function() { return m.e(1).then(m.bind(null, 31)) }).then(function(e) {
            var t = e.default,
                n = o.component,
                r = o.listenerRegistry;
            p = t({ component: n, controller: c, listenerRegistry: r, locale: s }), c.report("afterpay_message.loaded", { load_time: u.getElapsedTime(), locale: s, currency: l.currency }),
                function() {
                    for (; d.length;) {
                        var e = d.shift(),
                            t = Vo(e, 2),
                            n = t[0],
                            r = t[1];
                        a(n, r)
                    }
                }(), i("ready")
        }, function(e) { c.report("afterpay_message.import_error", { error: e }) });

        function f(e) { return function() { throw new M.a(e) } }
        return {
            mount: e(function(e) { e.mount(l) }),
            unmount: e(function(e) { e.unmount() }),
            update: e(function(e, t) {
                var n = It(l, t);
                l = r(n), e.update(l)
            }),
            focus: f("Focus is not supported by afterpayClearpayMessage."),
            blur: f("Blur is not supported by afterpayClearpayMessage."),
            clear: f("Clear is not supported by afterpayClearpayMessage.")
        }
    };

    function $o(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Xo(e, t, n) {
        switch (e) {
            case "authentication":
                var r = Q(Qo, t, n),
                    o = r.value;
                o.locale, o.fonts;
                return { value: $o(o, ["locale", "fonts"]), warnings: r.warnings };
            case "payment":
                var a = Q(ta, t, n),
                    i = a.value;
                i.locale, i.fonts;
                return { value: $o(i, ["locale", "fonts"]), warnings: a.warnings };
            default:
                return Object(T.a)(e)
        }
    }
    var Zo = { locale: U("elements()"), fonts: U("elements()"), color: S(C) },
        Qo = Z(Zo),
        ea = { locale: U("elements()"), fonts: U("elements()"), color: S(C) },
        ta = Z(ea),
        na = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ra = function(e) {
            var t, n, r, o, a, i, c, s, u, l, p, d, f, m = e.component,
                h = e.listenerRegistry,
                _ = e.elementTimings,
                y = e.getParent,
                b = e.emitEvent,
                v = e.options,
                g = null,
                w = [],
                E = (n = (t = v).controller, r = t.componentName, o = t.groupId, a = t.locale, i = t.fonts, c = t.wait, s = t.publicOptions, u = na({ locale: a, fonts: i, wait: c, rtl: To(document.body) }, s), l = wn[r], p = n.createElementFrame(l, r, o, u), d = Ao(), f = null, qe && (f = Io()), { frame: p, hiddenInput: d, hiddenSafariQuirkFixInput: f }),
                S = E.frame,
                P = E.hiddenInput,
                k = E.hiddenSafariQuirkFixInput;
            Object(ie.d)(m, Mo), S.appendTo(m), m.appendChild(P), k && m.appendChild(k), S.updateStyle(function(e) {
                switch (e) {
                    case "authentication":
                        return { height: "46px" };
                    case "payment":
                        return { height: "0" };
                    default:
                        return Object(T.a)(e)
                }
            }(v.componentName)), h.addEventListener(P, "focus", function() { S.focus() }), S._on("load", function() { P.disabled = !1, w.push(function() { P.disabled = !0 }), S.send({ action: "stripe-user-mount", payload: { timestamps: { stripeJsLoad: _.stripeJsLoadTimestamp.getAsPosixTime(), stripeCreate: _.stripeCreateTimestamp.getAsPosixTime(), groupCreate: _.groupCreateTimestamp.getAsPosixTime(), create: _.createTimestamp.getAsPosixTime(), mount: g ? g.getAsPosixTime() : 0 }, rtl: To(y()) } }) }), gn.forEach(function(t) { S._on(t, function(e) { return b(t, e) }) });
            var O = {};
            S._on("add_overlay", function(e) {
                var t = e.style,
                    n = e.nonce,
                    r = e.elementType,
                    o = v.controller.createElementFrame(En[r], r, v.groupId, { locale: v.locale, rtl: To(document.body) });
                (O[n] = o).updateStyle(na({ "min-width": "0", "z-index": "1000" }, t)), o.appendTo(m), o._on("ready", function() { o.focus() }), w.push(function() { O[n] && (o.destroy(), delete O[n]) })
            }), S._on("remove_overlay", function(e) {
                var t = e.nonce;
                O[t] && (O[t].destroy(), delete O[t])
            }), S._on("resize", function(e) {
                var t = e.height;
                S.updateStyle({ height: t + "px" })
            });
            return {
                update: function(e) { S.update(e) },
                focus: function() { Co(), P.focus() },
                blur: function() { S.blur(), P.blur() },
                clear: function() { S.clear() },
                mount: function() {
                    g = new Xt.a;
                    var e, t, n, r = y();
                    r && (Object(ie.f)(r, [
                        [vn, !0]
                    ]), w.push(function() {
                        Object(ie.f)(r, [
                            [vn, !1]
                        ])
                    }), e = function() { Co(), P.focus() }, function(e, t) {
                        for (var n = e.parentElement; n;) {
                            if (n && t(n)) return n;
                            n = n.parentElement
                        }
                        return null
                    }(r, function(e) { return "LABEL" === e.nodeName }) || (h.addEventListener(r, "click", e), w.push(function() { h.removeEventListener(r, "click", e) })), t = r.getAttribute("id"), (n = t ? document.querySelector("label[for='" + t + "']") : null) && (h.addEventListener(n, "click", e), w.push(function() { h.removeEventListener(n, "click", e) })))
                },
                unmount: function() {
                    for (; w.length;) w.pop()();
                    S.unmount()
                },
                _frame: S
            }
        },
        oa = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function aa(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }
    var ia = function(e) {
            var t = e.options,
                n = aa(e, ["options"]),
                r = t.controller,
                o = t.componentName,
                a = t.publicOptions,
                i = aa(t, ["controller", "componentName", "publicOptions"]),
                c = function(e) {
                    switch (e) {
                        case "authentication":
                        case "payment":
                            return e;
                        default:
                            throw new Error("Unexpected element type for implementation")
                    }
                }(o),
                s = Xo(c, a || {}, "elements.create('" + c + "')");
            s.warnings.forEach(function(e) { return r.warn(e) });
            var u = ra(oa({}, n, { options: oa({}, i, { controller: r, componentName: c, publicOptions: s.value }) })),
                l = u.update,
                p = aa(u, ["update"]);
            return oa({
                update: function(e) {
                    var t = Xo(c, e || {}, c + ".update()");
                    t.warnings.forEach(function(e) { return r.warn(e) }), l(t.value)
                }
            }, p)
        },
        ca = function(e, t) {
            var n = function(e) { if (!cn[e]) throw new Error("Unexpected Element type: " + e + "."); return cn[e].implementation }(e);
            switch (n) {
                case "legacy":
                    return new Go(t);
                case "afterpay_message":
                    return Jo(t);
                case "frame":
                    return ia(t);
                default:
                    return Object(T.a)(n, "Unexpected implementation type: " + n + ".")
            }
        },
        sa = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ua = function(e, t, n) { return t && la(e.prototype, t), n && la(e, n), e };

    function la(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var pa = (function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(da, le), ua(da, [{ key: "_checkDestroyed", value: function() { if (this._destroyed) throw new M.a("This Element has already been destroyed. Please create a new one.") } }, { key: "_isMounted", value: function() { return !!document.body && document.body.contains(this._component) } }, {
        key: "_unmount",
        value: function() {
            var e = this._component.parentElement;
            e && e.removeChild(this._component), this._implementation.unmount(), this._parent = null
        }
    }, {
        key: "_mountToParent",
        value: function(e) {
            var t = this._component.parentElement,
                n = this._isMounted();
            if (e === t) {
                if (n) return;
                this.unmount(), this._mountTo(e)
            } else if (t) {
                if (n) throw new M.a("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
                this.unmount(), this._mountTo(e)
            } else this._mountTo(e)
        }
    }, {
        key: "_mountTo",
        value: function(e) {
            for (this._parent = e; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(this._component), this._implementation.mount()
        }
    }]), da);

    function da(e, t, n) {
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, da);
        var r = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (da.__proto__ || Object.getPrototypeOf(da)).call(this));
        ma.call(r);
        var o = e.controller,
            a = e.componentName;
        r._controller = o, r._componentName = a, r._destroyed = !1;
        var i = document.createElement("div");
        return i.className = ln, r._component = i, r._implementation = ca(r._componentName, { options: e, component: i, listenerRegistry: t, elementTimings: n, emitEvent: r._emitEvent, getParent: r._getParent }), r
    }

    function fa(e, t) { e._controller.report("legacy_private_property_used", { prop: t, componentName: e._componentName }) }
    var ma = function() {
        var r = this;
        this.mount = se(function(e) {
            r._checkDestroyed();
            var t = void 0;
            if (!e) throw new M.a("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
            if ("string" == typeof e) {
                var n = document.querySelectorAll(e);
                if (1 < n.length && r._controller.warn("The selector you specified (" + e + ") applies to " + n.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !n.length) throw new M.a("The selector you specified (" + e + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
                t = n[0]
            } else {
                if (!e.appendChild) throw new M.a("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
                t = e
            }
            if ("INPUT" === t.nodeName) throw new M.a("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
            t.children.length && r._controller.warn("This Element will be mounted to a DOM element that contains child nodes."), r._mountToParent(t)
        }), this.update = se(function(e) { return r._checkDestroyed(), r._implementation.update(e), r }), this.focus = se(function(e) { return r._checkDestroyed(), e && e.preventDefault(), r._implementation.focus(), r }), this.blur = se(function() { return r._checkDestroyed(), r._implementation.blur(), r }), this.clear = se(function() { return r._checkDestroyed(), r._implementation.clear(), r }), this.unmount = se(function() { return r._checkDestroyed(), r._unmount(), r }), this.destroy = se(function() { return r._checkDestroyed(), r.unmount(), r._destroyed = !0, r._emitEvent("destroy"), r }), this._getParent = function() { return r._parent }, this._emitEvent = function(e, t) { return r._emit(e, sa({ elementType: r._componentName }, t)) }
    };
    ["_autofilled", "_classes", "_complete", "_empty", "_fakeInput", "_focused", "_frame", "_invalid", "_lastBackgroundColor", "_lastFontSize", "_lastHeight", "_lastPadding", "_lastSubmittedAt", "_listenerRegistry", "_paymentRequest"].forEach(function(e) { Object.defineProperty(pa.prototype, e, { enumerable: !1, get: function() { return fa(this, e), this._implementation[e] } }) });
    ["_formSubmit", "_isIssuingElement"].forEach(function(e) { Object.defineProperty(pa.prototype, e, { enumerable: !1, writable: !1, value: function() { return fa(this, e), this._implementation[e]() } }) });
    var ha = pa,
        _a = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function ya(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function ba(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function va(e) { var t = Y(Ta, e, ""); return "error" === t.type ? null : t.value }
    var ga, wa = { locale: S(C), fonts: S(F(B)), betas: S(F(I.apply(void 0, ba(en)))) },
        Ea = Z(wa),
        Sa = function() {
            var s = this;
            this.getElement = se(function(e) { var t, n = (null != (t = e) && t.__elementType && "string" == typeof t.__elementType && "function" == typeof t ? t.__elementType : null) || e; return Yn(n, s._betas), Object(w.a)(s._elements, function(e) { return e._componentName === n }) || null }), this.create = ue(function(t, e) {
                var n = new Xt.a;
                ! function(e, t, n) {
                    if (Yn(e, n), cn[e].unique && -1 !== t.indexOf(e)) throw new M.a("Can only create one Element of type " + e + ".");
                    var r = cn[e].conflict,
                        o = Object(w.e)(t, r);
                    if (o.length) { var a = o[0]; throw new M.a("Cannot create an Element of type " + e + " after an Element of type " + a + " has already been created.") }
                }(t, s._elements.map(function(e) { return e._componentName }), s._betas);
                var r = _a({}, e, s._commonOptions, { componentName: t, groupId: s._id }),
                    o = (r.paymentRequest, ya(r, ["paymentRequest"])),
                    a = (Be || Fe) && 2e3 < Object(oe.a)(o).length,
                    i = !!s._pendingFonts || a,
                    c = new ha(_a({ publicOptions: e }, s._commonOptions, { componentName: t, groupId: s._id, fonts: a ? null : s._commonOptions.fonts, controller: s._controller, wait: i }), s._listenerRegistry, _a({}, s._timings, { createTimestamp: n }));
                return s._elements = [].concat(ba(s._elements), [c]), c._on("destroy", function() { s._elements = s._elements.filter(function(e) { return e._componentName !== t }) }), a && c._implementation.update({ fonts: s._commonOptions.fonts }), c
            })
        },
        Pa = function e(t, n, r, o) {
            var a = this;
            ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), Sa.call(this);
            var i, c = new Xt.a,
                s = Q(Ea, o || {}, "elements()"),
                u = s.value,
                l = u.betas,
                p = void 0 === l ? [] : l,
                d = u.fonts,
                f = void 0 === d ? [] : d,
                m = u.locale,
                h = ya(u, ["betas", "fonts", "locale"]);
            s.warnings.forEach(function(e) { return t.warn(e) }), i = t.warn, Mn().match(/width=device-width/) || i('Elements requires "width=device-width" be set in your page\'s viewport meta tag.\n       For more information: https://stripe.com/docs/js/appendix/viewport_meta_requirements'), t.report("elements", { options: o }), this._elements = [], this._id = re("elements"), this._timings = _a({}, r, { groupCreateTimestamp: c }), this._controller = t, this._betas = p, this._listenerRegistry = n;
            var _ = Wn(m, p);
            this._controller.action.fetchLocale({ locale: _ || "auto" });
            var y = f.filter(function(e) { return !e.cssSrc || "string" != typeof e.cssSrc }).map(function(e) { return _a({}, e, { __resolveFontRelativeTo: window.location.href }) }),
                b = f.map(function(e) { return e.cssSrc }).reduce(function(e, t) { return "string" == typeof t ? [].concat(ba(e), [t]) : e }, []).map(function(e) { return Object(v.b)(e) ? e : Object(v.c)(window.location.href, e) });
            return this._pendingFonts = b.length, this._commonOptions = _a({}, h, { betas: p, locale: _, fonts: y }), b.forEach(function(n) {
                var r;
                "string" == typeof n && (r = new Xt.a, Gn(n).then(function(e) {
                    a._controller.report("font.loaded", { load_time: r.getElapsedTime(), font_count: e.length, css_src: n });
                    var t = e.map(function(e) { return _a({}, e, { __resolveFontRelativeTo: n }) });
                    a._controller.action.updateCSSFonts({ fonts: t, groupId: a._id }), a._commonOptions = _a({}, a._commonOptions, { fonts: [].concat(ba(a._commonOptions.fonts ? a._commonOptions.fonts : []), ba(t)) })
                }).catch(function(e) { a._controller.report("error.font.not_loaded", { load_time: r.getElapsedTime(), message: e && e.message && e.message, css_src: n }), a._controller.warn("Failed to load CSS file at " + n + ".") }))
            }), this
        },
        ka = function(e, t, n, r, o, a, i) { return new wo({ controller: e, authentication: t, mids: n, rawOptions: r, betas: o, queryStrategyOverride: a, listenerRegistry: i }) },
        Oa = { _componentName: C, _implementation: Z({ _frame: Z({ id: C }) }) },
        Ta = Z(Oa);

    function Aa(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function Ia(e) { return -1 === ee.k.indexOf(e) }

    function Ca(e, t) {
        switch (e.type) {
            case "object":
                return { paymentIntent: e.object };
            case "error":
                return { error: Da({}, t ? { payment_intent: t } : {}, e.error) };
            default:
                return Object(T.a)(e)
        }
    }

    function ja(e) {
        switch (e.type) {
            case "error":
                return { error: e.error };
            case "object":
                return { setupIntent: e.object };
            default:
                return Object(T.a)(e)
        }
    }

    function Na(e) { return { id: e.id, clientSecret: e.client_secret } }

    function Ra(e) { return "requires_source_action" === e || "requires_action" === e }

    function Ma(e) { return "requires_source_action" === e.status || "requires_action" === e.status ? e.next_action : null }
    var xa = { alipay: "alipay", afterpay_clearpay: "afterpay_clearpay", au_becs_debit: "au_becs_debit", acss_debit: "acss_debit", bacs_debit: "bacs_debit", bancontact: "bancontact", boleto: "boleto", card: "card", eps: "eps", fpx: "fpx", giropay: "giropay", grabpay: "grabpay", ideal: "ideal", konbini: "konbini", oxxo: "oxxo", p24: "p24", paypal: "paypal", sepa_debit: "sepa_debit", sofort: "sofort", three_d_secure: "three_d_secure", upi: "upi", wechat_pay: "wechat_pay", netbanking: "netbanking", id_bank_transfer: "id_bank_transfer" },
        La = (Aa(ga = {}, ee.b.auBankAccount, xa.au_becs_debit), Aa(ga, ee.b.card, xa.card), Aa(ga, ee.b.cardNumber, xa.card), Aa(ga, ee.b.cardExpiry, xa.card), Aa(ga, ee.b.cardCvc, xa.card), Aa(ga, ee.b.postalCode, xa.card), Aa(ga, ee.b.iban, xa.sepa_debit), Aa(ga, ee.b.idealBank, xa.ideal), Aa(ga, ee.b.fpxBank, xa.fpx), Aa(ga, ee.b.p24Bank, xa.p24), Aa(ga, ee.b.netbankingBank, xa.netbanking), Aa(ga, ee.b.epsBank, xa.eps), ga),
        Da = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Ba = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function qa(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function Ua(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Ha(a) { return function(e, t) { if ("string" != typeof e) return b("a client_secret string", e, t); var n, r = (n = e.trim().match(/^((seti|pi)_[^_]+)_secret_[^-]+$/)) ? { id: n[1], clientSecret: n[0] } : null; if (null === r) return b("a client secret of the form ${id}_secret_${secret}", e, t); if (function(e) { var t = e.match(/^(seti|pi)_/); if (t) return "seti" === t[1] ? ee.g.SETUP_INTENT : ee.g.PAYMENT_INTENT; throw new Error("Unexpected intent id or client secret shape") }(r.id) === a) return h(r, []); var o = a === ee.g.PAYMENT_INTENT ? new M.a(f("a PaymentIntent client secret", "a SetupIntent client secret", t)) : new M.a(f("a SetupIntent client secret", "a PaymentIntent client secret", t)); return g(o) } }

    function Ya(e, t) {
        if (null === e) return y("object", "null", t);
        if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
        var n = e.client_secret,
            r = e.status,
            o = e.next_action,
            a = Ha("payment_intent" === e.object ? ee.g.PAYMENT_INTENT : ee.g.SETUP_INTENT)(n, E(t, "client_secret"));
        return "error" === a.type ? a : "string" != typeof r ? y("string", void 0 === r ? "undefined" : Fa(r), E(t, "status")) : "requires_source_action" !== r && "requires_action" !== r || "object" === (void 0 === o ? "undefined" : Fa(o)) ? (e.object, h(e, [])) : y("object", void 0 === o ? "undefined" : Fa(o), E(t, "next_action"))
    }

    function za(d) {
        return function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
            if (null === e) return y("object", "null", t);
            var n = e.type,
                r = Ua(e, ["type"]),
                o = void 0;
            if (null === d) {
                if ("string" != typeof n) return y("string", void 0 === n ? "undefined" : Fa(n), E(t, "type"));
                o = n
            } else {
                if (void 0 !== n && n !== d) return "string" != typeof n ? y("string", void 0 === n ? "undefined" : Fa(n), E(t, "type")) : y('"' + n + '"', '"' + d + '"', E(t, "type"));
                o = d
            }
            var a = r[o],
                i = (r[o], Ua(r, [o]));
            if (-1 !== ["acss_debit", "afterpay_clearpay", "alipay", "bancontact", "eps", "giropay", "grabpay", "konbini", "oxxo", "p24", "paypal", "wechat_pay"].indexOf(o) && void 0 === a && (a = {}), "object" !== (void 0 === a ? "undefined" : Fa(a))) return y("object or element", Fa(e[o]), E(t, o));
            if (null === a) return y("object or element", "null", E(t, o));
            var c = va(a);
            if (c) {
                var s = c._componentName;
                if (La[s] === o) return h({ type: o, element: c, data: i });
                var u = [].concat(qa(t.path), [o]).join("."),
                    l = t.label,
                    p = new M.a("Invalid value for " + l + ": " + u + " was `" + s + "` Element, which cannot be used to create " + o + " PaymentMethods.");
                return g(p)
            }
            return h({ type: o, element: null, data: r })
        }
    }

    function Ga(d, f) {
        return function(e, t) {
            if (void 0 === e) return h({ paymentMethodData: null, paymentMethodOptions: null, source: null, paymentMethod: null, otherParams: {} });
            if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
            if (null === e) return y("object", "null", t);
            var n = e.source,
                r = e.source_data,
                o = e.payment_method_data,
                a = e.payment_method_options,
                i = e.payment_method,
                c = Ua(e, ["source", "source_data", "payment_method_data", "payment_method_options", "payment_method"]);
            if (null != r) throw new M.a(f + ": Expected payment_method, or source, not source_data.");
            if (null != o) throw new M.a(f + ": Expected payment_method, or source, not payment_method_data.");
            if (null != n && null != i) throw new M.a(f + ": Expected either payment_method or source, but not both.");
            if (null === d && null != i && "string" != typeof i) throw new M.a(f + ": Expected payment_method[type] to be set if payment_method is passed.");
            if (null != n) { if ("string" != typeof n) return y("string", void 0 === n ? "undefined" : Fa(n), E(t, "source")); if ("updatePaymentIntent" === f) throw new M.a(f + ": Expected payment_method, not source to be passed."); return h({ source: n, paymentMethodData: null, paymentMethodOptions: null, paymentMethod: null, otherParams: c }) }
            if (null != i && "string" != typeof i && "object" !== (void 0 === i ? "undefined" : Fa(i))) return y("string or object", void 0 === i ? "undefined" : Fa(i), E(t, "payment_method"));
            var s, u = Y((s = d, function(e, t) {
                if (null == e) return h(null);
                if ("object" !== (void 0 === e ? "undefined" : Fa(e))) return y("object", void 0 === e ? "undefined" : Fa(e), t);
                var n = e.card,
                    r = Ua(e, ["card"]);
                if (!n || "object" !== (void 0 === n ? "undefined" : Fa(n))) return h(e);
                var o = n.cvc,
                    a = Ua(n, ["cvc"]);
                if (null == o) return h(e);
                var i = va(o),
                    c = i ? i._componentName : "";
                return ee.b.cardCvc !== c ? y("`" + ee.b.cardCvc + "` Element", c ? "`" + c + "` Element" : void 0 === o ? "undefined" : Fa(o), E(t, (s || "card") + ".cvc")) : h(Ba({}, r, { card: Ba({}, a, { cvc: i }) }))
            }), a, f, { path: [].concat(qa(t.path), ["payment_method_options"]) });
            if ("error" === u.type) return u;
            if ("string" == typeof i) return h({ source: null, paymentMethodData: null, paymentMethodOptions: u.value, paymentMethod: i, otherParams: c });
            if ("object" !== (void 0 === i ? "undefined" : Fa(i)) || null === i) return h({ source: null, paymentMethodData: null, paymentMethodOptions: null, paymentMethod: null, otherParams: c });
            var l = Y(za(d), i, f, { path: [].concat(qa(t.path), ["payment_method"]) });
            if ("error" === l.type) return l;
            var p = l.value;
            return h({ source: null, paymentMethod: null, paymentMethodOptions: u.value, paymentMethodData: p, otherParams: c })
        }
    }
    var Wa, Ka = Ha(ee.g.PAYMENT_INTENT),
        Va = Ha(ee.g.SETUP_INTENT),
        Ja = j(Z({ handleActions: j(N, function() { return !0 }) }), function() { return { handleActions: !0 } }),
        $a = Z({ name: A("react-stripe-js", "stripe-js", "react-stripe-elements"), version: (Wa = C, function(e, t) { return null === e ? h(e) : Wa(e, t) }), startTime: S(R) }),
        Xa = "publishable",
        Za = "secret",
        Qa = "ephemeral",
        ei = "restricted",
        ti = "unknown",
        ni = function(e) {
            if ("" === e) throw new M.a("Please call Stripe() with your publishable key. You used an empty string.");
            switch (function(e) {
                switch (e.split("_", 1)[0]) {
                    case "pk":
                        return Xa;
                    case "sk":
                        return Za;
                    case "ek":
                        return Qa;
                    case "rk":
                        return ei;
                    default:
                        return ti
                }
            }(e)) {
                case Za:
                    throw new M.a("You should not use your secret key with Stripe.js.\n          Please pass a publishable key instead.");
                case Qa:
                    throw new M.a("You should not use an ephemeral key with Stripe.js.\n          Please pass a publishable key instead.");
                case ei:
                    throw new M.a("You should not use a restricted key with Stripe.js.\n          Please pass a publishable key instead.")
            }
        };

    function ri(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var oi = ["elements", "createToken", "createPaymentMethod"],
        ai = ["elements", "createSource", "createToken", "createPaymentMethod"],
        ii = (function(e, t, n) { return t && ri(e.prototype, t), n && ri(e, n), e }(ci, [{ key: "got", value: function(e) { this._didDetect || ("elements" === e ? this._gets = ["elements"] : this._gets.push(e), this._checkForWrapper()) } }, { key: "called", value: function(t) { this._didDetect || (this._gets = this._gets.filter(function(e) { return e !== t })) } }, { key: "_checkForWrapper", value: function() { Object(w.c)(this._gets, oi) ? this._onDetection("react-stripe-js") : Object(w.c)(this._gets, ai) && this._onDetection("react-stripe-elements") } }]), ci);

    function ci(t) { var n = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, ci), this._gets = [], this._didDetect = !1, this._onDetection = function(e) { n._didDetect = !0, t(e) }, window.Stripe && window.Stripe.__cachedInstances && this._onDetection("react-stripe-elements") }
    var si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function ui(e) { if (!e || "object" !== (void 0 === e ? "undefined" : si(e))) return null; var t = e.type; return { type: "string" == typeof t ? t : null, data: function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(e, ["type"]) } }

    function li(e) {
        switch (e.type) {
            case "object":
                return { source: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function pi(e) {
        switch (e.type) {
            case "object":
                return { paymentMethod: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function di(e, t, n, r, o) {
        if ("string" == typeof n) return function(e, t, n, r, o) {
            var a = va(r),
                i = ui(a ? o : r),
                c = i || { type: null, data: {} },
                s = c.type,
                u = c.data;
            if (s && n !== s) return ae.a.reject(new M.a("The type supplied in payment_method_data is not consistent."));
            if (a) {
                var l = a._implementation._frame.id,
                    p = a._componentName;
                return e.action.createPaymentMethodWithElement({ frameId: l, elementName: p, type: n, paymentMethodData: u, mids: t }).then(pi)
            }
            return i ? e.action.createPaymentMethodWithData({ elementName: null, type: n, paymentMethodData: u, mids: t }).then(pi) : ae.a.reject(new M.a("Please provide either an Element or PaymentMethod creation parameters to createPaymentMethod."))
        }(e, t, n, r, o);
        try {
            var a = Q(za(null), n, "createPaymentMethod").value,
                i = a.element,
                c = a.type,
                s = a.data;
            if (i) {
                var u = i._implementation._frame.id,
                    l = i._componentName;
                return e.action.createPaymentMethodWithElement({ frameId: u, elementName: l, type: c, paymentMethodData: s, mids: t }).then(pi)
            }
            return e.action.createPaymentMethodWithData({ elementName: null, type: c, paymentMethodData: s, mids: t }).then(pi)
        } catch (e) { return ae.a.reject(e) }
    }

    function fi(e) { return "https://stripe.com/docs/stripe-js/reference#stripe-" + e.split(/(?=[A-Z])/).join("-").toLowerCase() }

    function mi(e, t) { return Q(Ka, e, "stripe." + t + " intent secret").value }

    function hi(e, t) { return Q(Va, e, "stripe." + t + " intent secret").value }

    function _i(e, t) { return Q(Ja, t, e).value }

    function yi(e, t, n) {
        if ("valid" === Y(Ta, n, t).type) throw new M.a("Do not pass an Element to stripe." + t + "() directly.\nFor more information: " + fi(t));
        var r = Q(Ga(e, t), n, t).value,
            o = r.source,
            a = r.paymentMethodData,
            i = r.paymentMethodOptions,
            c = r.paymentMethod,
            s = r.otherParams;
        if (null != o && (null != a || null != c)) throw new M.a(t + ": Expected either source or payment_method, but not both.");
        if (a) { if (a.element) return { mode: { tag: "paymentMethod-from-element", type: e, elementName: a.element._componentName, frameId: a.element._implementation._frame.id, data: a.data, options: i }, otherParams: s }; if (e) return { mode: { tag: "paymentMethod-from-data", type: e, data: a.data, options: i }, otherParams: s } } else { if (c) return { mode: { tag: "paymentMethod", paymentMethod: c, options: i }, otherParams: s }; if (o) return { mode: { tag: "source", source: o }, otherParams: s } }
        return { mode: { tag: "none" }, otherParams: s }
    }

    function bi(e, t) { var n = { skipFingerprint: !1, sandboxFingerprintFrame: !1, sandboxChallengeFrame: !1 }; return -1 !== e.indexOf("Y") && (t.report("3ds2.optimization.Y"), n.skipFingerprint = !0), -1 !== e.indexOf("k") && (t.report("3ds2.optimization.k"), n.sandboxFingerprintFrame = !0), -1 !== e.indexOf("5") && (t.report("3ds2.optimization.5"), n.sandboxChallengeFrame = !0), n }

    function vi(e) { return { american_express: "amex", visa: "visa", mastercard: "mastercard", discover: "discover" }[e] || "unknown" }

    function gi(e, t, n) {
        if (!e) return null;
        if ("use_stripe_sdk" === e.type) {
            var r = e.use_stripe_sdk;
            switch (r.type) {
                case "stripe_3ds2_fingerprint":
                    return { type: "3ds2-fingerprint", threeDS2Source: r.three_d_secure_2_source, merchant: r.merchant, cardBrand: vi(r.directory_server_name), transactionId: r.server_transaction_id, optimizations: bi(r.three_ds_optimizations, n), methodUrl: r.three_ds_method_url };
                case "stripe_3ds2_challenge":
                    return { type: "3ds2-challenge", threeDS2Source: r.stripe_js.three_d_secure_2_source, cardBrand: vi(r.stripe_js.directory_server_name), transactionId: r.stripe_js.server_transaction_id, optimizations: bi(r.stripe_js.three_ds_optimizations, n), acsTransactionId: r.stripe_js.acs_transaction_id, acsUrl: r.stripe_js.acs_url, creq: r.stripe_js.creq };
                case "three_d_secure_redirect":
                    return { type: "3ds1-modal", url: r.stripe_js, source: r.source }
            }
        }
        if ("redirect_to_url" === e.type) return { type: "redirect", redirectUrl: e.redirect_to_url.url };
        if ("alipay_handle_redirect" === e.type) return { type: "redirect", redirectUrl: e.alipay_handle_redirect.url };
        if ("boleto_display_details" === e.type) return { type: "boleto-display", hostedVoucherUrl: e.boleto_display_details.hosted_voucher_url };
        if ("display_oxxo_details" === e.type) return { type: "oxxo-display", hostedVoucherUrl: e.display_oxxo_details.hosted_voucher_url };
        if ("konbini_display_details" === e.type) return { type: "konbini-display", hostedVoucherUrl: e.konbini_display_details.hosted_voucher_url };
        if ("oxxo_display_details" === e.type) return { type: "oxxo-display", hostedVoucherUrl: e.oxxo_display_details.hosted_voucher_url };
        if ("authorize_with_url" === e.type) {
            var o = e.authorize_with_url.url;
            switch (t) {
                case xa.card:
                    return { type: "3ds1-modal", url: o, source: null };
                case xa.ideal:
                    return { type: "redirect", redirectUrl: o }
            }
        }
        return "upi_await_notification" === e.type ? { type: "upi_await_notification" } : "wechat_pay_display_qr_code" === e.type ? { type: "wechat_pay_display_qr_code" } : null
    }

    function wi(e) {
        switch (e.type) {
            case "error":
                return { error: e.error };
            case "object":
                switch (e.object.object) {
                    case "payment_intent":
                        return { paymentIntent: e.object };
                    case "setup_intent":
                        return { setupIntent: e.object };
                    default:
                        return Object(T.a)(e.object)
                }
            default:
                return Object(T.a)(e)
        }
    }

    function Ei(e, t, n, r) { return t === ee.g.PAYMENT_INTENT ? n.action.retrievePaymentIntent({ hosted: !1, intentSecret: e, locale: r, asErrorIfNotSucceeded: !0 }).then(wi) : n.action.retrieveSetupIntent({ hosted: !1, intentSecret: e, locale: r, asErrorIfNotSucceeded: !0 }).then(wi) }

    function Si(e, t, n, r, o) { return t === ee.g.PAYMENT_INTENT ? n.action.cancelPaymentIntentSource({ intentSecret: e, locale: o, sourceId: r }).then(wi) : n.action.cancelSetupIntentSource({ intentSecret: e, locale: o, sourceId: r }).then(wi) }

    function Pi(e) { return (e.error ? e.error.payment_intent || e.error.setup_intent : e.paymentIntent || e.setupIntent) || null }

    function ki(n, l, p, d, f) {
        var e, t, r, o, a, i = Mn(),
            m = new Xt.a,
            h = (e = d, t = n.url, r = l.id, o = n.source, a = f, e.createLightboxFrame({ type: ee.c.AUTHORIZE_WITH_URL, options: Ci({ url: t, locale: a, intentId: r }, o ? { source: o } : {}) }));
        return h.show(), d.report("authorize_with_url.loading", { viewport: i, intentId: l.id }), h._on("load", function() { d.report("authorize_with_url.loaded", { loadDuration: m.getElapsedTime(), intentId: l.id }), h.fadeInBackdrop() }), h._on("challenge_complete", function() { h.fadeOutBackdrop() }), new ae.a(function(u, e) {
            var t = n.source;
            t && h._once("cancel", function() { ae.a.all([Si(l, p, d, t, f), h.destroy()]).then(function(e) { var t = Ii(e, 1)[0]; return u(t) }) }), h._once("authorize_with_url_done", function() {
                var e, t, n, o, a, i, c, s, r = h.destroy();
                e = l, t = p, n = d, o = f, a = function(e, t) { r.then(function() { d.report("authorize_with_url.done", { shownDuration: m.getElapsedTime(), success: !("error" in e), intentId: l.id, iterations: t }), u(e) }) }, i = !0, c = 3, s = 0,
                    function r() {
                        s += 1, Ei(e, t, n, o).then(function(e) {
                            if (i) {
                                var t, n = Pi(e);
                                if (null !== n) switch (c = 3, n.status) {
                                    case "requires_action":
                                    case "requires_source_action":
                                        return void setTimeout(r, 5e3);
                                    case "processing":
                                        return void setTimeout(r, 1e3);
                                    default:
                                        a(e, s)
                                } else 0 < c ? (t = 500 * Math.pow(2, 3 - c), setTimeout(r, t), --c) : a(e, s)
                            }
                        })
                    }()
            })
        })
    }
    var Oi = { source: Z({ id: O("src_"), client_secret: O("src_client_secret_") }) },
        Ti = Z(Oi),
        Ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Ii = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        Ci = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ji = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ni(e, t) {
        var n = t.intentSecret,
            r = t.controller,
            o = t.locale,
            a = t.hosted,
            i = r.createLightboxFrame({ type: ee.c.STRIPE_3DS2_CHALLENGE, options: { intentId: n.id, hosted: a, locale: o } });
        r.report("3ds2.challenge_frame.loading", { intentId: n.id, hosted: a }), i._on("challenge_complete", function() { i.fadeOutBackdrop() });
        var c, s = (c = i, new ae.a(function(e) { c._on("load", function() { return e(c) }) }));
        return s.then(function() { return r.report("3ds2.challenge_frame.loaded", { intentId: n.id, hosted: a }) }), a && (i.show(), i.action.show3DS2Spinner({ cardBrand: e.cardBrand })), s
    }

    function Ri(o, e, t) {
        var n = t.challengeFrame,
            a = e.controller,
            i = e.intentSecret,
            c = e.intentType,
            s = e.locale,
            u = e.hosted;
        return new ae.a(function(r) {
            n.then(function(e) {
                e._once("cancel", function() { e.fadeOutBackdrop(), Si(i, c, a, o.threeDS2Source, s).then(r) }), u || (e.show(), e.fadeInBackdrop());
                o.type;
                var t = o.optimizations,
                    n = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(o, ["type", "optimizations"]);
                e.action.perform3DS2Challenge(ji({}, n, { shouldSandbox: t.sandboxChallengeFrame })).then(function() { r() })
            })
        })
    }

    function Mi(e, t) {
        var n = t.existingPayload,
            r = t.challengeFrame,
            o = t.startTimestamp,
            a = e.intentSecret,
            i = e.intentType,
            c = e.controller,
            s = e.locale,
            u = e.hosted,
            l = n ? ae.a.resolve(n) : Ei(a, i, c, s);
        return ae.a.all([l, r.then(function(e) { return e.destroy() })]).then(function(e) { var t = qi(e, 1)[0]; return c.report("3ds2.done", Fi({ intentId: a.id, hosted: u, totalDuration: o.getElapsedTime() }, t.error ? { error: t.error, success: !1 } : { success: !0 })), t })
    }

    function xi(e) {
        var t = e.intentSecret,
            n = e.controller,
            r = e.hosted,
            o = e.locale,
            a = n.createHiddenFrame(ee.c.STRIPE_3DS2_FINGERPRINT, { intentId: t.id, locale: o, hosted: r });
        n.report("3ds2.fingerprint_frame.loading", { hosted: r, intentId: t.id });
        var i, c = (i = a, new ae.a(function(e) { i._on("load", function() { return e(i) }) }));
        return c.then(function() { n.report("3ds2.fingerprint_frame.loaded", { hosted: r, intentId: t.id }) }), c
    }

    function Li(c, s) {
        var e, t, n, r, o, a = new Xt.a,
            i = Ni(c, s);
        switch (c.type) {
            case "3ds2-challenge":
                return Ri(c, s, { challengeFrame: i }).then(function(e) { return Mi(s, { existingPayload: e, challengeFrame: i, startTimestamp: a }) });
            case "3ds2-fingerprint":
                return e = c, n = (t = s).intentSecret, r = t.controller, o = t.hosted, (e.optimizations.skipFingerprint ? ae.a.resolve({ fingerprintAttempted: !1, fingerprintData: null }) : "" === e.methodUrl ? (r.report("3ds2.fingerprint.no_method_url", { hosted: o, intentId: n.id }), ae.a.resolve({ fingerprintAttempted: !1, fingerprintData: null })) : xi(t).then(function(t) { return t.action.perform3DS2Fingerprint({ threeDS2Source: e.threeDS2Source, merchant: e.merchant, transactionId: e.transactionId, methodUrl: e.methodUrl, shouldSandbox: e.optimizations.sandboxFingerprintFrame }).then(function(e) { return t.destroy(), e }) })).then(function(e) { return t = c, r = { fingerprintResult: e }.fingerprintResult, o = (n = s).controller, a = n.hosted, i = n.intentSecret, o.report("3ds2.authenticate", { hosted: a, intentId: i.id }), o.action.authenticate3DS2({ threeDS2Source: t.threeDS2Source, outerWindowWidth: window.innerWidth, hosted: a, fingerprintResult: r }).then(function(e) { return "error" === e.type ? o.report("3ds2.authenticate.error", { error: e.error, hosted: a, intentId: i.id }) : o.report("3ds2.authenticate.success", { hosted: a, intentId: i.id }), e }); var t, n, r, o, a, i }).then(function(e) {
                    return function(e, t, n) {
                        var r = n.authResult,
                            o = n.challengeFrame,
                            a = t.controller,
                            i = t.hosted,
                            c = t.intentSecret;
                        if ("error" === r.type || null === r.object.ares) return ae.a.resolve();
                        var s = r.object,
                            u = s.ares,
                            l = s.creq;
                        return "C" !== u.transStatus || null == l ? (a.report("3ds2.frictionless", { hosted: i, intentId: c.id }), ae.a.resolve()) : Ri({ type: "3ds2-challenge", threeDS2Source: e.threeDS2Source, cardBrand: e.cardBrand, transactionId: e.transactionId, acsUrl: u.acsURL, acsTransactionId: u.acsTransID, optimizations: e.optimizations, creq: l }, t, { challengeFrame: o })
                    }(c, s, { authResult: e, challengeFrame: i })
                }).then(function(e) { return Mi(s, { existingPayload: e, challengeFrame: i, startTimestamp: a }) });
            default:
                return Object(T.a)(c)
        }
    }

    function Di(e, t) { var n = e.createLightboxFrame({ type: ee.c.LIGHTBOX_APP, options: t }); return n.show(), n._on("nested-frame-loaded", function() { n.fadeInBackdrop(), setTimeout(function() { n.action.openLightboxFrame() }, 200) }), n }

    function Bi(e) { return e.action.closeLightboxFrame(), e.destroy() }
    var Fi = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        qi = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try { for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try {!r && c.return && c.return() } finally { if (o) throw a } }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

    function Ui(r) {
        return new ae.a(function(e, t) {
            var n = setTimeout(function() { e({ type: "error", error: { code: "redirect_error", message: "Failed to redirect to " + r }, locale: "en" }) }, 6e4);
            window.addEventListener("pagehide", function() { clearTimeout(n) }), window.top.location.href = r
        })
    }

    function Hi(e, t, n) { e.report("redirect_error", { initiator: t, error: n.error }) }

    function Yi(e) {
        switch (e.type) {
            case "error":
                var t = e.error;
                if ("payment_intent_unexpected_state" === t.code && "object" === Ki(t.payment_intent) && null != t.payment_intent && "string" == typeof t.payment_intent.status && Ra(t.payment_intent.status)) { var n = t.payment_intent; return { type: "object", locale: e.locale, object: n } }
                return e;
            case "object":
                return e;
            default:
                return Object(T.a)(e)
        }
    }

    function zi(e, t, n, r, o) {
        var a, i, c, s, u, l, p, d, f, m, h, _, y, b, v, g, w, E, S, P, k, O, T, A, I, C, j, N = gi(Ma(t), n, e),
            R = Na(t);
        if (!N) return ae.a.resolve({ paymentIntent: t });
        switch (N.type) {
            case "3ds1-modal":
                return ki(N, R, ee.g.PAYMENT_INTENT, e, r);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
                return Li(N, { intentSecret: R, intentType: ee.g.PAYMENT_INTENT, controller: e, locale: r, hosted: o });
            case "redirect":
                return A = t, I = n, C = N.redirectUrl, j = e, Ui(C).then(function(e) { return Hi(j, I + " redirect", e), Ca(e, A) });
            case "boleto-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("Expect `next_action.boleto_display_details.hosted_voucher_url` of `PaymentIntent` to be not undefined. Please refer to \n\nhttps://stripe.com/docs/api/payment_intents/object#payment_intent_object-next_action-boleto_display_details-hosted_voucher_url");
                return E = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, S = E.controller, P = E.url, k = E.intent, O = E.locale, T = Di(S, { url: P, size: "600x700", locale: O, frameTitle: "boleto.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { T._on("request-close", function() { Bi(T).then(function() { e({ paymentIntent: k }) }) }) });
            case "konbini-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("Expected option `handleActions` to be `false`. The Konbini pilot does not handle the next actions for you automatically yet (e.g. displaying Konbini payment details). Please refer to the Stripe Konbini integration guide for more info: \n\nhttps://stripe.com/docs/payments/konbini");
                return _ = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, y = _.controller, b = _.url, v = _.intent, g = _.locale, w = Di(y, { url: b, size: "600x900", locale: g, frameTitle: "konbini.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { w._on("request-close", function() { Bi(w).then(function() { e({ paymentIntent: v }) }) }) });
            case "oxxo-display":
                if (void 0 === N.hostedVoucherUrl) throw new M.a("To handle the next actions automatically, set the API version to oxxo_beta=v2. Please refer to the Stripe OXXO integration guide for more info: \n\nhttps://stripe.com/docs/payments/oxxo");
                return l = { controller: e, locale: r, url: N.hostedVoucherUrl, intent: t }, p = l.controller, d = l.url, f = l.intent, m = l.locale, h = Di(p, { url: d, size: "600x700", locale: m, frameTitle: "oxxo.voucher_frame_title", useLightboxHostedCloseButton: !1 }), new ae.a(function(e) { h._on("request-close", function() { Bi(h).then(function() { e({ paymentIntent: f }) }) }) });
            case "upi_await_notification":
                return a = { controller: e, intentSecret: R, intentType: ee.g.PAYMENT_INTENT, locale: r }, i = a.controller, c = a.intentSecret, s = a.intentType, u = a.locale, new ae.a(function(r) {
                    setTimeout(function n() {
                        Ei(c, s, i, u).then(function(e) {
                            var t = Pi(e);
                            null !== t && ("requires_action" !== t.status ? r(e) : setTimeout(n, 1e4))
                        })
                    }, 5e3)
                });
            case "wechat_pay_display_qr_code":
                throw new M.a("Expected option `handleActions` to be `false`.");
            default:
                return ae.a.resolve({ paymentIntent: t })
        }
    }

    function Gi(e, t, n, r, o) { return zi(e, t, n, r, o).then(function(e) { if (e.setupIntent) throw new Error("Got unexpected SetupIntent response"); return e }) }

    function Wi(a, i, c, s) {
        return function(e) {
            var t = Yi(e);
            switch (t.type) {
                case "error":
                    var n = t.error,
                        r = n.payment_intent;
                    return c && r && "payment_intent_unexpected_state" === n.code && ("succeeded" === r.status || "requires_capture" === r.status) ? ae.a.resolve({ paymentIntent: r }) : ae.a.resolve(Ca(e));
                case "object":
                    var o = t.object;
                    return Gi(a, o, i, t.locale, s);
                default:
                    return Object(T.a)(t)
            }
        }
    }
    var Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Ji = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function $i(l, p) {
        return function(e, t, n, r, o) {
            var a = mi(n, l),
                i = yi(p, l, r),
                c = _i(l, o),
                s = "none" === i.mode.tag,
                u = e.action.confirmPaymentIntent(Ji({}, i, { intentSecret: a, expectedType: p, options: c, mids: t }));
            return c.handleActions ? u.then(Wi(e, p, s, !1)) : u.then(Ca)
        }
    }

    function Xi(e, t, n, r) {
        var o = mi(n, "updatePaymentIntent"),
            a = function(e) { if (!e || !e.payment_method || !e.payment_method.type || "string" != typeof e.payment_method.type) return null; var t = e.payment_method.type; return xa[t] || null }(r),
            i = yi(a, "updatePaymentIntent", r);
        return e.action.updatePaymentIntent(Ji({}, i, { intentSecret: o, expectedType: a, mids: t, options: null })).then(Ca)
    }

    function Zi(t, e, n, r) {
        var o = mi(n, "confirmPayment"),
            a = Q(Z({ element: B, data: S(B) }), r, "stripe.confirmPayment()"),
            i = a.value,
            c = i.element,
            s = i.data;
        a.warnings.forEach(function(e) { return t.warn(e) });
        var u = Q(Ta, c, "stripe.confirmPayment()").value,
            l = s || {},
            p = l.payment_method_data,
            d = l.payment_method_options,
            f = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(l, ["payment_method_data", "payment_method_options"]),
            m = p && "object" === (void 0 === p ? "undefined" : Vi(p)) ? p : {},
            h = d && "object" === (void 0 === d ? "undefined" : Vi(d)) ? d : {};
        if ("payment" !== u._componentName) throw new M.a('stripe.confirmPayment() only works with the "payment" element');
        return t.action.confirmPaymentIntent({ mode: { tag: "paymentMethod-from-element", frameId: u._implementation._frame.id, elementName: "payment", type: null, data: m, options: h }, otherParams: f, intentSecret: o, expectedType: null, mids: e, options: { handleActions: !0 } }).then(Ca)
    }

    function Qi(e, r) {
        var t = mi(e, "handleCardAction");
        return r.action.retrievePaymentIntent({ intentSecret: t, hosted: !1 }).then(function(e) {
            var t = Yi(e);
            switch (t.type) {
                case "error":
                    return ae.a.resolve(Ca(e));
                case "object":
                    var n = t.object;
                    if (Ra(n.status)) { if ("manual" !== n.confirmation_method) throw new M.a("handleCardAction: The PaymentIntent supplied does not require manual server-side confirmation. Please use confirmCardPayment instead to complete the payment."); return Gi(r, n, xa.card, t.locale, !1) }
                    throw new M.a("handleCardAction: The PaymentIntent supplied is not in the requires_action state.");
                default:
                    return Object(T.a)(t)
            }
        })
    }

    function ec(e) { var t = e.mode; return !("paymentMethod-from-data" === t.tag && t.data.acss_debit) }

    function tc(e) { return null !== e && "object" === (void 0 === e ? "undefined" : Ic(e)) && !0 === e.skipMandate }

    function nc(e) {
        var t = e.controller,
            n = e.intentSecret,
            r = e.mode,
            o = e.confirmIntentData;
        return t.action.createAcssDebitSession({ intentSecret: n, confirmIntentData: o, mode: r }).then(function(e) {
            if ("error" === e.type) return { type: "error", error: e.error };
            var r = Di(t, { url: e.object.url, size: "400x600", locale: e.locale, frameTitle: "acss.dialog_frame_title", useLightboxHostedCloseButton: !1 });
            return new ae.a(function(n) {
                r._on("request-close", function() { Bi(r).then(function() { return t.action.localizeError(Cc) }).then(function(e) { n({ type: "error", error: e }) }) }), r._on("session-complete", function(e) {
                    var t = e.paymentMethod;
                    Bi(r).then(function() { n({ type: "success", paymentMethod: t }) })
                })
            })
        })
    }

    function rc(a, t, e, n, r) {
        var o = "confirmInstantDebitsPilotPayment",
            i = mi(e, o),
            c = _i(o, r),
            s = yi(null, o, n),
            u = a.createLightboxFrame({ type: ee.c.INSTANT_DEBITS_APP, options: { intentId: i.id, clientSecret: i.clientSecret, apiKey: a._apiKey, returnOnConfirm: !1 === c.handleActions } });
        return u.show(), u.fadeInBackdrop(), new ae.a(function(r) {
            function o(e) { u.fadeOutBackdrop().then(function() { r(e) }) }
            u._once("cancel", function() { u.fadeOutBackdrop(), a.action.localizeError(Mc).then(function(e) { o({ error: e }) }) }), u._on("instant-debits-fetch-payment-intent", function() {
                a.action.retrievePaymentIntent({ intentSecret: i, hosted: !1 }).then(function(e) {
                    var t, n;
                    e.object ? (t = e.object, u.send({ action: "stripe-instant-debits-received-payment-intent", payload: { paymentIntent: t } }), !1 === c.handleActions && setTimeout(function() { u.fadeOutBackdrop(), o(Ca(e)) }, 2e3)) : (n = e.error, a.action.localizeError(n).then(function(e) { r({ error: e }) }))
                })
            }), !1 === c.handleActions && u._on("instant-debits-payment-ready", function() { a.action.retrievePaymentIntent({ intentSecret: i, hosted: !1 }).then(Ca).then(o) }), u._on("instant-debits-attempt-payment", function(e) { a.action.confirmPaymentIntent(Nc({}, s, { mode: { tag: "none" }, intentSecret: i, expectedType: null, options: c, mids: t })).then(function(e) { e.object ? (u.send({ action: "stripe-instant-debits-successful-payment-intent", payload: { paymentIntent: e.object } }), setTimeout(function() { o(Ca(e)) }, 2e3)) : a.action.localizeError(e.error).then(function(e) { o({ error: e }) }) }) }), u._on("instant-debits-payment-error", function(e) { u.fadeOutBackdrop(), a.action.localizeError(e).then(function(e) { o({ error: e }) }) }), u._on("instant-debits-flow-error", function(e) { a.action.localizeError(Rc).then(function(e) { o({ error: e }) }) })
        })
    }

    function oc(e) { return "linked-accounts." + e }

    function ac(t, r) {
        return r.report("link-accounts.launched"), new ae.a(function(n) {
            var e = void 0;
            try { e = r.createLightboxFrame({ type: ee.c.LINKED_ACCOUNTS_INNER, options: { clientSecret: t, apiKey: r._apiKey } }) } catch (e) { return n({ error: { message: e.message } }) }
            return e._on(xc.READY, function() { e.show(), e.fadeInBackdrop() }), e._on(xc.CLOSE, function() { e.fadeOutBackdrop() }), e._on(xc.COMPLETE, function(t) {
                e.destroy(!0).then(function() {
                    var e = {};
                    t.error && (e.errorMessage = t.error.message), r.report("link-accounts.complete", e), n(function(e) {
                        switch (e.type) {
                            case "object":
                                return { linkedAccounts: e.object.data };
                            case "error":
                                return { error: { message: e.error.message || "stripe.linkAccounts: an unknown error occurred." } };
                            default:
                                return Object(T.a)(e)
                        }
                    }(t))
                })
            }), null
        })
    }
    var ic = $i("confirmAcssDebitPayment", xa.acss_debit),
        cc = $i("confirmAfterpayClearpayPayment", xa.afterpay_clearpay),
        sc = $i("confirmAuBecsDebitPayment", xa.au_becs_debit),
        uc = $i("confirmBacsDebitPayment", xa.bacs_debit),
        lc = $i("confirmBancontactPayment", xa.bancontact),
        pc = $i("confirmBoletoPayment", xa.boleto),
        dc = $i("confirmCardPayment", xa.card),
        fc = $i("confirmEpsPayment", xa.eps),
        mc = $i("confirmFpxPayment", xa.fpx),
        hc = $i("confirmGiropayPayment", xa.giropay),
        _c = $i("confirmGrabPayPayment", xa.grabpay),
        yc = $i("confirmIdealPayment", xa.ideal),
        bc = $i("confirmKonbiniPayment", xa.konbini),
        vc = $i("confirmOxxoPayment", xa.oxxo),
        gc = $i("confirmAlipayPayment", xa.alipay),
        wc = $i("confirmP24Payment", xa.p24),
        Ec = $i("confirmPayPalPayment", xa.paypal),
        Sc = $i("confirmSepaDebitPayment", xa.sepa_debit),
        Pc = $i("confirmSofortPayment", xa.sofort),
        kc = $i("confirmIdBankTransferPayment", xa.id_bank_transfer),
        Oc = $i("confirmUpiPayment", xa.upi),
        Tc = $i("confirmNetbankingPayment", xa.netbanking),
        Ac = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Cc = { type: "validation_error", code: "incomplete_payment_details" },
        jc = function(e, t) { if ("object" === (void 0 === e ? "undefined" : Ai(e)) && null !== e && void 0 !== e.handleActions) throw new M.a("stripe." + t + " does not support a handleActions option. For more information, see " + fi(t)) },
        Nc = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Rc = { type: "validation_error", code: "errors.code.unexpected" },
        Mc = { type: "validation_error", code: "errors.code.incomplete_payment_details" },
        xc = (O("bcsess_"), { READY: oc("ready"), CLOSE: oc("close"), COMPLETE: oc("complete") }),
        Lc = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        Dc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

    function Bc(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function Fc(e, t) {
        if (null == e) return h(null);
        var n = e.type,
            r = Bc(e, ["type"]),
            o = j(C, function() { return null })(n, E(t, "type"));
        return "error" === o.type ? o : h({ type: o.value, data: r })
    }

    function qc(e, t, n, r) { if (null === e) { if (null !== t) return t; var o = r ? "source_data" : "payment_method_data"; throw new M.a(n + ": you must additionally specify the type of payment method to create within " + o + ".") } if (null === t) return e; if (t !== e) throw new M.a(n + ": you specified `type: " + t + "`, but " + n + " will create a " + e + " payment method."); return e }

    function Uc(p) {
        return function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : Dc(e)) || null === e) return y("object", null === e ? "null" : void 0 === e ? "undefined" : Dc(e), t);
            var n = e.source,
                r = e.source_data,
                o = e.payment_method,
                a = e.payment_method_data,
                i = Bc(e, ["source", "source_data", "payment_method", "payment_method_data"]);
            if (null != n && "string" != typeof n) return y("string", void 0 === n ? "undefined" : Dc(n), E(t, "source"));
            if (null != o && "string" != typeof o) return y("string", void 0 === o ? "undefined" : Dc(o), E(t, "payment_method"));
            if (null != r && "object" !== (void 0 === r ? "undefined" : Dc(r))) return y("object", void 0 === r ? "undefined" : Dc(r), E(t, "source_data"));
            if (null != a && "object" !== (void 0 === a ? "undefined" : Dc(a))) return y("object", void 0 === a ? "undefined" : Dc(a), E(t, "payment_method_data"));
            var c = Fc(r, E(t, "source_data"));
            if ("error" === c.type) return c;
            var s = c.value,
                u = Fc(a, E(t, "payment_method_data"));
            if ("error" === u.type) return u;
            var l = u.value;
            return h({ sourceData: s, source: null == n ? null : n, paymentMethodData: l, paymentMethod: null == o ? null : o, otherParams: Lc({}, p, i) })
        }
    }

    function Hc(o) {
        return function(e, t) {
            if (void 0 === e) return h({ sourceData: null, paymentMethodData: null, source: null, paymentMethod: null, otherParams: {} });
            if ("object" !== (void 0 === e ? "undefined" : Dc(e))) return y("object", void 0 === e ? "undefined" : Dc(e), t);
            if (null === e) return y("object", "null", t);
            if (o) {
                if (!e.payment_intent) return h({ sourceData: null, paymentMethodData: null, source: null, paymentMethod: null, otherParams: e });
                var n = e.payment_intent,
                    r = Bc(e, ["payment_intent"]);
                return Uc(r)(n, E(t, "payment_intent"))
            }
            return e.payment_intent ? g(new M.a("The payment_intent parameter has been removed. To fix, move everything nested under the payment_intent parameter to the top-level object.")) : Uc({})(e, t)
        }
    }

    function Yc(e, t, n, r, o, a) {
        var i = Y(Ta, o, r);
        if ("error" === i.type) return null;
        var c = i.value,
            s = Q(Hc(t), a, r).value,
            u = s.sourceData,
            l = s.source,
            p = s.paymentMethodData,
            d = s.paymentMethod,
            f = s.otherParams;
        if (!e && u) throw new M.a(r + ": Expected payment_method_data, not source_data.");
        if (null != l) throw new M.a("When calling " + r + " on an Element, you can't pass in a pre-existing source ID, as a source will be created using the Element.");
        if (null != d) throw new M.a("When calling " + r + " on an Element, you can't pass in a pre-existing PaymentMethod ID, as a PaymentMethod will be created using the Element.");
        var m, h, _ = c._componentName,
            y = c._implementation._frame.id,
            b = u || p || { type: null, data: {} },
            v = b.data,
            g = (m = _, null != (h = b.type) ? h : !Ia(m) && La[m] || null),
            w = e && !p,
            E = { elementName: _, frameId: y, type: qc(n, g, r, w), data: v };
        return w ? { mode: Lc({ tag: "source-from-element" }, E), otherParams: f } : { mode: Lc({ tag: "paymentMethod-from-element", options: null }, E), otherParams: f }
    }

    function zc(o, a, i, c) {
        return function(e, t) {
            var n = Yc(o, a, i, c, e, t);
            if (n) return n;
            var r = function(e, t, n, r, o) {
                var a = Q(Hc(t), o, r).value,
                    i = a.sourceData,
                    c = a.source,
                    s = a.paymentMethodData,
                    u = a.paymentMethod,
                    l = a.otherParams;
                if (!e && i) throw new M.a(r + ": Expected payment_method, source, or payment_method_data, not source_data.");
                if (null !== c && null !== i) throw new M.a(r + ": Expected either source or source_data, but not both.");
                if (null !== u && null !== s) throw new M.a(r + ": Expected either payment_method or payment_method_data, but not both.");
                if (null !== u && null !== c) throw new M.a(r + ": Expected either payment_method or source, but not both.");
                if (i || s) {
                    var p = i || s || {},
                        d = p.data,
                        f = e && !s,
                        m = qc(n, p.type, r, f);
                    return f ? { mode: { tag: "source-from-data", type: m, data: d }, otherParams: l } : { mode: { tag: "paymentMethod-from-data", type: m, data: d, options: null }, otherParams: l }
                }
                return null !== c ? { mode: { tag: "source", source: c }, otherParams: l } : null !== u ? { mode: { tag: "paymentMethod", paymentMethod: u, options: null }, otherParams: l } : { mode: { tag: "none" }, otherParams: l }
            }(o, a, i, c, e);
            if (r) return r;
            throw new M.a("Expected: stripe." + c + "(intentSecret, element[, data]) or stripe." + c + "(intentSecret[, data]). Please see the docs for more usage examples https://stripe.com/docs/payments/dynamic-authentication")
        }
    }

    function Gc(e, t, n, r, o, a) {
        var i = Q(Ka, r, "stripe.confirmPaymentIntent intent secret").value,
            c = null,
            s = zc(e, !1, c, "confirmPaymentIntent")(o, a);
        return t.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !1 }, mids: n })).then(Ca)
    }

    function Wc(e, t, n, r, o, a, i) {
        var c = Q(Ka, o, "stripe.handleCardPayment intent secret").value,
            s = xa.card,
            u = zc(e, r, s, "handleCardPayment")(a, i),
            l = !a && !i;
        return t.action.confirmPaymentIntent(ss({}, u, { intentSecret: c, expectedType: s, options: { handleActions: !0 }, mids: n })).then(Wi(t, s, l, !1))
    }

    function Kc(e, t, n, r, o, a, i) {
        var c = Q(Ka, o, "stripe.handleIdealPayment intent secret").value,
            s = xa.ideal,
            u = zc(e, r, s, "handleIdealPayment")(a, i),
            l = !a && !i;
        return t.action.confirmPaymentIntent(ss({}, u, { intentSecret: c, expectedType: s, options: { handleActions: !0 }, mids: n })).then(Wi(t, s, l, !1))
    }

    function Vc(e) {
        switch (e.type) {
            case "object":
                return { returnIntent: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function Jc(e, t, n, r, o) {
        var a, i, c, s = gi(Ma(t), n, e),
            u = Na(t);
        if (!s) return ae.a.resolve({ setupIntent: t });
        switch (s.type) {
            case "3ds1-modal":
                return ki(s, u, ee.g.SETUP_INTENT, e, r);
            case "3ds2-fingerprint":
            case "3ds2-challenge":
                return Li(s, { intentSecret: u, intentType: ee.g.SETUP_INTENT, controller: e, locale: r, hosted: o });
            case "redirect":
                return a = n, i = s.redirectUrl, c = e, Ui(i).then(function(e) { return Hi(c, a + " redirect", e), ja(e) });
            default:
                return ae.a.resolve({ setupIntent: t })
        }
    }

    function $c(e, t, n, r, o) { return Jc(e, t, n, r, o).then(function(e) { if (e.paymentIntent) throw new Error("Got unexpected PaymentIntent response"); return e }) }

    function Xc(o, a, i, c) {
        return function(e) {
            switch (e.type) {
                case "error":
                    var t = e.error,
                        n = t.setup_intent;
                    return i && n && "succeeded" === n.status ? ae.a.resolve({ setupIntent: n }) : ae.a.resolve({ error: t });
                case "object":
                    var r = e.object;
                    return $c(o, r, a, e.locale, c);
                default:
                    return Object(T.a)(e)
            }
        }
    }

    function Zc(l, p) {
        return function(e, t, n, r, o) {
            var a = hi(n, l),
                i = yi(p, l, r),
                c = _i(l, o),
                s = "none" === i.mode.tag,
                u = e.action.confirmSetupIntent(us({}, i, { intentSecret: a, expectedType: p, options: c, mids: t }));
            return c.handleActions ? u.then(Xc(e, p, s, !1)) : u.then(ja)
        }
    }

    function Qc(e, t, n, r, o) {
        var a = Q(Va, n, "stripe.handleCardSetup intent secret").value,
            i = xa.card,
            c = zc(!1, !1, i, "handleCardSetup")(r, o),
            s = !r && !o;
        return e.action.confirmSetupIntent(gs({}, c, { intentSecret: a, expectedType: i, options: { handleActions: !0 }, mids: t })).then(Xc(e, i, s, !1))
    }

    function es(e, t) {
        var n, r, o, a, i, c, s = function(e) { if ("string" != typeof e) throw new M.a("stripe.verifyIdentity: Could not parse client secret. Please include the `use_stripe_sdk` parameter on your server when creating the VerificationSession."); var t = e.trim().match(/^((vi|vs)_[0-9a-zA-Z]+)_secret_([0-9a-zA-Z]+)$/); if (!t) throw new M.a("stripe.verifyIdentity: Could not parse client secret. Please include the `use_stripe_sdk` parameter on your server when creating the VerificationSession."); return { identityClientSecret: t[0], id: t[1], token: t[3] } }(e),
            u = s.id,
            l = s.token,
            p = (n = l, ee.f + "start/" + n);
        return o = (r = { controller: t, url: p, id: u }).controller, a = r.url, r.id, i = r.locale, c = Di(o, { url: a, size: "1100x800", frameTitle: "identity.verification_frame_title", locale: void 0 === i ? "en-US" : i, useLightboxHostedCloseButton: !0, allowCamera: !0, appType: "identity" }), new ae.a(function(t) {
            var r = { type: "user_action", code: "session_cancelled" };
            c._on("identity-frame-close", function() { Bi(c).then(function() { t({ error: r }) }) }), c._on("identity-frame-error", function(e) {
                var t = e.type,
                    n = e.code;
                r = { type: t, code: n }
            }), c._on("identity-frame-session-complete", function() { r = null }), c._on("request-close", function(e) { Bi(c).then(function() { t({ error: r }) }) })
        })
    }

    function ts(e, t) { if ("string" != typeof e) return b("an Issuing card ID of the form ic_xxx", e, t); var n, r = (n = e.trim().match(/ic_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an Issuing card ID of the form ic_xxx", e, t) : h(r, []) }

    function ns(e, t) { return Q(ts, e, "stripe." + t + " cardId").value }

    function rs(e, t) { if ("string" != typeof e) return b("an ephemeral key secret of the form ek_xxx", e, t); var n, r = (n = e.trim().match(/ek_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an ephemeral key secret of the form ek_xxx", e, t) : h(r, []) }

    function os(e, t) { return Q(rs, e, "stripe." + t + " ephemeral key secret").value }

    function as(e, t) { if ("string" != typeof e) return b("an ephemeral key nonce of the form ephkn_xxx", e, t); var n, r = (n = e.trim().match(/ephkn_[a-zA-Z0-9_]+$/)) ? n[0] : null; return null === r ? b("an ephemeral key nonce of the form ephkn_xxx", e, t) : h(r, []) }

    function is(e) { var t; if ("object" === (void 0 === e ? "undefined" : ws(e)) && e && e.ephemeralKeySecret && e.nonce) return { ephemeralKeySecret: os(e.ephemeralKeySecret, "retrieveIssuingCard"), publicNonce: (t = e.nonce, Q(as, t, "stripe." + "retrieveIssuingCard" + " ephemeral key nonce").value) }; throw new M.a("When retrieving an Issuing card, you must specify an ephemeral key secret and an ephemeral key nonce in the options argument of stripe.retrieveIssuingCard.") }

    function cs(e, t) { var n = function(e) { if ("object" === (void 0 === e ? "undefined" : ws(e)) && e && e.issuingCard) return { issuingCard: ns(e.issuingCard, "createEphemeralKeyNonce") }; throw new M.a("When creating an ephemeral key nonce, you must specify an Issuing card ID in the options argument of stripe.createEphemeralKeyNonce.") }(e); return t.action.createEphemeralKeyNonce({ cardId: n.issuingCard }).then(No) }
    var ss = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        us = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ls = Zc("confirmAcssDebitSetup", xa.acss_debit),
        ps = Zc("confirmCardSetup", xa.card),
        ds = Zc("confirmSepaDebitSetup", xa.sepa_debit),
        fs = Zc("confirmAuBecsDebitSetup", xa.au_becs_debit),
        ms = Zc("confirmBacsDebitSetup", xa.bacs_debit),
        hs = Zc("confirmIdealSetup", xa.ideal),
        _s = Zc("confirmAlipaySetup", xa.alipay),
        ys = Zc("confirmSofortSetup", xa.sofort),
        bs = Zc("confirmBancontactSetup", xa.bancontact),
        vs = Zc("confirmIdBankTransferSetup", xa.id_bank_transfer),
        gs = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        ws = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Es = [Zt.checkout_beta_2, Zt.checkout_beta_3, Zt.checkout_beta_4],
        Ss = [Zt.checkout_beta_2, Zt.checkout_beta_3, Zt.checkout_beta_4, Zt.checkout_beta_locales, Zt.checkout_beta_testcards],
        Ps = Object.keys({ bg: "bg", cs: "cs", da: "da", de: "de", el: "el", en: "en", "en-GB": "en-GB", es: "es", "es-419": "es-419", et: "et", fi: "fi", fr: "fr", "fr-CA": "fr-CA", hu: "hu", id: "id", it: "it", ja: "ja", lt: "lt", lv: "lv", ms: "ms", mt: "mt", nb: "nb", nl: "nl", pl: "pl", pt: "pt", "pt-BR": "pt-BR", ro: "ro", ru: "ru", sk: "sk", sl: "sl", sv: "sv", th: "th", tr: "tr", zh: "zh", "zh-HK": "zh-HK", "zh-TW": "zh-TW" }),
        ks = Object.keys({ "pt-PT": "pt-PT" }),
        Os = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ts(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }

    function As(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }

    function Is(e, t) {
        var n = X(Os({}, Ns, { items: S(P(F(X({ type: A("plan"), quantity: x(0), id: C })), F(X({ type: A("sku"), quantity: x(0), id: C })))), successUrl: C, cancelUrl: C })),
            r = Q(n, t, "stripe.redirectToCheckout").value,
            o = r.sku,
            a = r.plan,
            i = r.items,
            c = Ts(r, ["sku", "plan", "items"]),
            s = function(e, t, n) { if (e && t || (e || t) && n) throw new M.a("stripe.redirectToCheckout: Expected only one of sku, plan, or items."); if ("string" == typeof e) return [{ sku: e, quantity: 1 }]; if ("string" == typeof t) return [{ plan: t, quantity: 1 }]; if (n) return n.map(function(e) { return "sku" === e.type ? { sku: e.id, quantity: e.quantity } : { plan: e.id, quantity: e.quantity } }); throw new M.a("stripe.redirectToCheckout: You must provide either sku, plan, or items.") }(o, a, i);
        return Os({ tag: "no-session", items: s }, c)
    }

    function Cs(e, t, n) {
        var r = X(Os({}, Ns, { sessionId: S(C), successUrl: S(C), cancelUrl: S(C), mode: S(A("subscription", "payment")), items: S(P(F(X({ quantity: x(0), plan: C })), F(X({ quantity: x(0), sku: C })))), lineItems: S(F(X({ quantity: x(0), price: C }))) }, -1 !== e.indexOf("checkout_beta_locales") ? { locale: S(A.apply(void 0, ["auto"].concat(As(Ps), As(ks)))) } : {})),
            o = Q(r, t, "stripe.redirectToCheckout").value;
        if (o.sessionId) { var a = o.sessionId; if (1 < Object.keys(o).length) throw new M.a("stripe.redirectToCheckout: Do not provide other parameters when providing sessionId. Specify all parameters on your server when creating the CheckoutSession."); if (!/^cs_/.test(a)) throw new M.a("stripe.redirectToCheckout: Invalid value for sessionId. You specified '" + a + "'."); if ("live" === n && /^cs_test_/.test(a)) throw new M.a("stripe.redirectToCheckout: the provided sessionId is for a test mode Checkout Session, whereas Stripe.js was initialized with a live mode publishable key."); if ("test" === n && /^cs_live_/.test(a)) throw new M.a("stripe.redirectToCheckout: the provided sessionId is for a live mode Checkout Session, whereas Stripe.js was initialized with a test mode publishable key."); return { tag: "session", sessionId: a } }
        o.sessionId, o.sku, o.plan;
        var i = o.items,
            c = o.lineItems,
            s = o.successUrl,
            u = o.cancelUrl,
            l = o.mode,
            p = Ts(o, ["sessionId", "sku", "plan", "items", "lineItems", "successUrl", "cancelUrl", "mode"]);
        if (!c && !i) throw new M.a("stripe.redirectToCheckout: You must provide one of lineItems, items, or sessionId.");
        if (!s || !u) throw new M.a("stripe.redirectToCheckout: You must provide successUrl and cancelUrl.");
        return Os({ tag: "no-session", items: i, lineItems: c, successUrl: s, cancelUrl: u, mode: l }, p)
    }

    function js(e, t, n) {
        var r = Cs(e, t, n);
        if ("no-session" !== r.tag) return r;
        var o = r.successUrl,
            a = r.cancelUrl;
        if (!Object(v.b)(o)) throw new M.a("stripe.redirectToCheckout: successUrl must start with either http:// or https://.");
        if (!Object(v.b)(a)) throw new M.a("stripe.redirectToCheckout: cancelUrl must start with either http:// or https://.");
        return r
    }
    var Ns = { sku: S(C), plan: S(C), clientReferenceId: S(C), locale: S(A.apply(void 0, ["auto"].concat(As(Ps)))), customerEmail: S(C), billingAddressCollection: S(A("required", "auto")), submitType: S(A("auto", "pay", "book", "donate")), allowIncompleteSubscriptions: S(N), shippingAddressCollection: S(X({ allowedCountries: F(C) })) },
        Rs = /cs_(test|live)_.+/,
        Ms = function(e, t, n, r) {
            var o, a;
            return o = t, "session" === (a = function(t, e, n) {
                var r = Object(w.a)(Es, function(e) { return Gt(t, e) });
                if (e && e.lineItems && r) throw new M.a("Prices cannot be used with " + r);
                if ("string" == typeof e && Rs.test(e)) throw new M.a("stripe.redirectToCheckout: Checkout Session IDs must be passed in as an object with a key of `sessionId` and the Session ID as the value.");
                switch (r) {
                    case "checkout_beta_2":
                        return Is(0, e);
                    case "checkout_beta_3":
                        return Cs(t, e, n);
                    case "checkout_beta_4":
                    default:
                        return js(t, e, n)
                }
            }(e, n, 3 < arguments.length && void 0 !== r ? r : "unknown")).tag || null == o || a.locale || -1 === ["auto"].concat(As(Ps)).indexOf(o) ? a : Os({}, a, { locale: o })
        },
        xs = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Ls(t, e) { return Ui(e).then(function(e) { return Hi(t, "redirectToCheckout", e), { error: e.error } }) }

    function Ds(n, t, e, r, o) {
        n.report("redirect_to_checkout.options", { betas: t, options: o, globalLocale: r });
        var a = Ms(t, r, o, n.keyMode());
        if ("session" === a.tag) { var i = a.sessionId; return n.action.createPaymentPageWithSession({ betas: t, mids: e(), sessionId: i }).then(function(e) { if ("error" === e.type) return { error: e.error }; var t = e.object.url; return Ls(n, t) }) }
        a.tag;
        var c = a.items,
            s = a.lineItems,
            u = a.mode,
            l = a.successUrl,
            p = a.cancelUrl,
            d = a.clientReferenceId,
            f = a.customerEmail,
            m = a.billingAddressCollection,
            h = a.submitType,
            _ = a.allowIncompleteSubscriptions,
            y = a.shippingAddressCollection,
            b = function(e, t) { var n, r = {}; for (n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]); return r }(a, ["tag", "items", "lineItems", "mode", "successUrl", "cancelUrl", "clientReferenceId", "customerEmail", "billingAddressCollection", "submitType", "allowIncompleteSubscriptions", "shippingAddressCollection"]),
            v = [];
        if (s && c) throw new Error("Only one of items, lineItems can be passed in.");
        if (s) {
            if (!u) throw new Error("Expected `mode`");
            v = s.map(function(e) { if (e.price) return { type: "price", id: e.price, quantity: e.quantity }; throw new Error("Unexpected item shape.") })
        } else {
            if (!c) throw new Error("An items field must be passed in.");
            v = c.map(function(e) { if (e.sku) return { type: "sku", id: e.sku, quantity: e.quantity }; if (e.plan) return { type: "plan", id: e.plan, quantity: e.quantity }; throw new Error("Unexpected item shape.") })
        }
        var g = Object(w.a)(Es, function(e) { return Gt(t, e) });
        return n.action.createPaymentPage(xs({ betas: t, mids: e(), items: v, mode: u, success_url: l, cancel_url: p, client_reference_id: d, customer_email: f, billing_address_collection: m, submit_type: h, use_payment_methods: !g, allow_incomplete_subscriptions: _, shipping_address_collection: y && { allowed_countries: y.allowedCountries } }, b)).then(function(e) { if ("error" === e.type) return { error: e.error }; var t = e.object.url; return Ls(n, t) })
    }

    function Bs(e) {
        switch (e.type) {
            case "object":
                return { token: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }

    function Fs(e) { return "object" === (void 0 === e ? "undefined" : Us(e)) && null !== e ? e : {} }

    function qs(e) {
        switch (e.type) {
            case "object":
                return { radarSession: e.object };
            case "error":
                return { error: e.error };
            default:
                return Object(T.a)(e)
        }
    }
    var Us = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        Hs = "securitypolicyviolation",
        Ys = window,
        zs = /^require-trusted-types-for/,
        Gs = "LOAD_ERROR",
        Ws = "REPORT_ONLY",
        Ks = "BLOCKED",
        Vs = function(e, t, n) { return t && Js(e.prototype, t), n && Js(e, n), e };

    function Js(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var $s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e };

    function Xs(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }
    var Zs = new Xt.a,
        Qs = document ? document.readyState : "unknown",
        eu = !1;
    switch (Qs) {
        case "loading":
            eu = !0;
            break;
        case "interactive":
            try {
                var tu = function() { eu = !0 };
                setTimeout(function() { document.removeEventListener("DOMContentLoaded", tu) }, 0), document.addEventListener("DOMContentLoaded", tu)
            } catch (e) {}
    }

    function nu(t, e, n, r) {
        var o, a, i, c, s, u, l, p, d, f;
        cu && !r || (cu = !0, o = r || new Xt.a, "complete" === document.readyState ? (f = l = u = s = c = null, window.performance && (window.performance.timing && (i = (a = window.performance.timing).fetchStart, c = a.domLoading - i, s = a.domInteractive - i, u = a.domComplete - i, l = Xt.a.fromPosixTime(i).getElapsedTime(Zs)), window.performance.getEntriesByType && (p = window.performance.getEntriesByType("resource"), d = "https://js.stripe.com/v3/".replace(/\/$/, ""), f = p.reduce(function(e, t) { if (0 === t.name.indexOf(d)) { var n = t.name.match(/\/([^/#?]*)\/?(?:$|[#?])/); if (n && n[1]) { var r = n[1].replace(/-[0-9a-f]{32}\./, "."); return "v3" === r && (r = "stripe.js"), $s({}, e, (o = {}, a = r, i = { transfer_size: t.transferSize, duration: Math.round(t.duration) }, a in o ? Object.defineProperty(o, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : o[a] = i, o)) } } var o, a, i; return e }, {}))), t.report("timings", { element: t.controllerFor(), dom_loading: c, dom_interactive: s, dom_complete: u, since_fetch: l, load_count: 1, load_before_dom_content_loaded: eu, load_ready_state: Qs, first_create_ready_state: e, first_mount_readyState: n, until_first_create: Zs.getElapsedTime(t._createTimestamp), until_first_mount: Zs.getElapsedTime(t._mountTimestamp), until_first_load: Zs.getElapsedTime(o), resource_timings: f }), setTimeout(function() {
            new ae.a(function(e) {
                if (Ys.trustedTypes && Ys.Promise) {
                    var t = !1,
                        n = function(e) {
                            (zs.test(e.effectiveDirective) || zs.test(e.violatedDirective)) && (Object(bt.b)(e.blockedURI) || Object(bt.b)(e.sourceFile)) && (t = !0)
                        },
                        r = function() { return t ? Ks : Gs };
                    Ys.addEventListener(Hs, n);
                    var o = void 0;
                    try { o = m.e(4).then(m.bind(null, 30)).then(function(e) { return (e.loaded && t ? Ws : "ALLOWED") || Gs }, r) } catch (e) { o = new ae.a(function(e) { return setTimeout(e, 0) }).then(r) }
                    o.then(function() { Ys.removeEventListener(Hs, n) }), e(o)
                } else e("NOT_SUPPORTED")
            }).then(function(e) {
                t.report("trusted_types_check", { result: e }),
                    function(e) {
                        switch (e) {
                            case Ws:
                            case Ks:
                                return !0
                        }
                        return !1
                    }(e) && t.warn("We noticed that you are using Trusted Types. Nothing has broken, but we plan to add dynamic loading to parts of Stripe.js. Please allow scripts from 'https://js.stripe.com' in your default Trusted Types policy. For more information: https://stripe.com/docs/security/guide#content-security-policy")
            })
        }, 5e3)) : window.addEventListener("load", function() { try { nu(t, e, n, o) } catch (e) {} }))
    }

    function ru(e) { return "You have an in-flight " + e + "! Please be sure to disable your form submit button when " + e + " is called." }

    function ou(e) { return function() { throw new M.a("You cannot call `stripe." + e + "` without supplying a PaymentIntents beta flag when initializing Stripe.js.    You can find more information including code snippets at https://www.stripe.com/docs/payments/payment-intents/quickstart.") } }

    function au(e) { return function() { throw new M.a("You cannot call `stripe." + e + "` without supplying an Issuing beta flag when initializing Stripe.js.") } }
    var iu, cu = !1,
        su = Z({ apiKey: C, stripeAccount: S(C), locale: S(C), apiVersion: S(C), __privateApiUrl: S(C), __checkout: S(Z({ mids: Z({ muid: C, sid: C }) })), __hosted3DS: S(N), canCreateRadarSession: S(N), betas: S(F(I.apply(void 0, Xs(en)))) }),
        uu = (Vs(lu, [{
            key: "_attachCreateRadarSession",
            value: function(e) {
                var t, n, r = this;
                e && (this.createRadarSession = (t = function() { return r._midsPromise().then(function(e) { return t = r._controller, n = e, t.action.createRadarSession({ mids: n }).then(qs); var t, n }) }, function() { try { return t.call(this) } catch (e) { return W(e, n || this && this._controller) } }))
            }
        }, {
            key: "_attachPaymentIntentMethods",
            value: function(e, t) {
                function r() { return o._mids() }
                var o = this;
                this.createPaymentMethod = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return di.apply(void 0, [o._controller, r()].concat(t)) }), this._createPaymentMethod = this.createPaymentMethod, this.retrievePaymentIntent = se(function(e) { return t = e, n = o._controller, r = mi(t, "retrievePaymentIntent"), n.action.retrievePaymentIntent({ intentSecret: r, hosted: !1 }).then(Ca); var t, n, r }), this.retrieveSetupIntent = se(function(e) { return t = e, n = o._controller, r = hi(t, "retrieveSetupIntent"), n.action.retrieveSetupIntent({ intentSecret: r, hosted: !1 }).then(ja); var t, n, r }), this.updatePaymentIntent = ou("updatePaymentIntent"), (Gt(this._betas, Zt.line_items_beta_1) || Gt(this._betas, Zt.tax_product_beta_1)) && (this.updatePaymentIntent = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Xi.apply(void 0, [o._controller, r()].concat(t)) }));
                var n = Object(hr.a)(Qi, ru("handleCardAction"));
                this.handleCardAction = se(function(e) { return n(e, o._controller) });
                var a = Object(hr.a)(dc, ru("confirmCardPayment"));
                this.confirmCardPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return a.apply(void 0, [o._controller, r()].concat(t)) });
                var i = Object(hr.a)(ps, ru("confirmCardSetup"));
                this.confirmCardSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdealPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return yc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSepaDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Sc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSepaDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ds.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmFpxPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return mc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAlipayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return gc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAlipaySetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return _s.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAuBecsDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return sc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAuBecsDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return fs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBacsDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return uc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBacsDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ms.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBancontactPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return lc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmEpsPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return fc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmGiropayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return hc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmOxxoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmP24Payment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return wc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSofortPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Pc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdealSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return hs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmSofortSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ys.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmBancontactSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return bs.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmGrabPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return _c.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAfterpayClearpayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return cc.apply(void 0, [o._controller, r()].concat(t)) }), this.verifyMicrodepositsForPayment = ue(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, t, n) {
                        var r = mi(t, "verifyMicrodepositsForPayment"),
                            o = Q(B, n, "stripe.verifyMicrodepositsForPayment");
                        return e.action.verifyMicrodepositsForPayment({ intentSecret: r, data: o.value }).then(Ca)
                    }.apply(void 0, [o._controller].concat(t))
                }), this.verifyMicrodepositsForSetup = ue(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e, t, n) {
                        var r = hi(t, "verifyMicrodepositsForSetup"),
                            o = Q(B, n, "stripe.verifyMicrodepositsForSetup");
                        return e.action.verifyMicrodepositsForSetup({ intentSecret: r, data: o.value }).then(ja)
                    }.apply(void 0, [o._controller].concat(t))
                }), Gt(this._betas, Zt.acss_debit_beta_1) ? (this.confirmAcssDebitPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ic.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmAcssDebitSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return ls.apply(void 0, [o._controller, r()].concat(t)) })) : (this.confirmAcssDebitPayment = K(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                        var a = "confirmAcssDebitPayment",
                            i = xa.acss_debit,
                            c = mi(e, a),
                            s = yi(i, a, r);
                        return jc(o, a), tc(o) || !ec(s) ? t.action.confirmPaymentIntent(Ac({}, s, { intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n })).then(Ca) : nc({ controller: t, intentSecret: c, mode: "payment", confirmIntentData: s }).then(function(e) {
                            switch (e.type) {
                                case "error":
                                    return { error: e.error };
                                case "success":
                                    return t.action.confirmPaymentIntent({ mode: { tag: "paymentMethod", paymentMethod: e.paymentMethod, options: s.mode.options || {} }, otherParams: s.otherParams, intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n }).then(Ca);
                                default:
                                    return Object(T.a)(e.type)
                            }
                        })
                    }.apply(void 0, [o._controller, r()].concat(t))
                }), this.confirmAcssDebitSetup = K(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(t, n, e, r, o) {
                        var a = "confirmAcssDebitSetup",
                            i = xa.acss_debit,
                            c = hi(e, a),
                            s = yi(i, a, r);
                        return jc(o, a), tc(o) || !ec(s) ? t.action.confirmSetupIntent(Ac({}, s, { intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n })).then(ja) : nc({ controller: t, intentSecret: c, mode: "setup", confirmIntentData: s }).then(function(e) {
                            switch (e.type) {
                                case "error":
                                    return { error: e.error };
                                case "success":
                                    return t.action.confirmSetupIntent({ mode: { tag: "paymentMethod", paymentMethod: e.paymentMethod, options: s.mode.options || {} }, otherParams: s.otherParams, intentSecret: c, expectedType: i, options: { handleActions: !1 }, mids: n }).then(ja);
                                default:
                                    return Object(T.a)(e.type)
                            }
                        })
                    }.apply(void 0, [o._controller, r()].concat(t))
                })), Gt(this._betas, Zt.return_intents_beta_1) && (this.confirmReturnIntent = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n) { return e.action.confirmReturnIntent({ returnIntentId: t, data: n }).then(Vc) }.apply(void 0, [o._controller].concat(t)) })), this.confirmBoletoPayment = ou("confirmBoletoPayment"), Gt(this._betas, Zt.boleto_pm_beta_1) && (this.confirmBoletoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return pc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmKonbiniPayment = ou("confirmKonbiniPayment"), Gt(this._betas, Zt.konbini_pm_beta_1) && (this.confirmKonbiniPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return bc.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.oxxo_pm_beta_1) && (this.confirmOxxoPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmWechatPayPayment = ou("confirmWechatPayPayment"), Gt(this._betas, Zt.wechat_pay_pm_beta_1) && (this.confirmWechatPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n, r, o) { if (o && !0 === o.handleActions) throw new M.a("Expected option `handleActions` to be `false`."); var a = Ji({}, r, { payment_method: Ji({}, r && r.payment_method || {}), payment_method_options: Ji({}, r && r.payment_method_options || {}, { wechat_pay: Ji({}, r && r.payment_method_options && r.payment_method_options.wechat_pay || {}, { client: "web" }) }) }); return $i("confirmWechatPayPayment", xa.wechat_pay)(e, t, n, a, o) }.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.wechat_pay_pm_beta_2) && (this.confirmWechatPayPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return function(e, t, n, r, o) { if (o && !0 === o.handleActions) throw new M.a("Expected option `handleActions` to be `false`."); if (!r || !r.payment_method_options || !r.payment_method_options.wechat_pay || "web" !== r.payment_method_options.wechat_pay.client && "mobile_web" !== r.payment_method_options.wechat_pay.client) throw new M.a("Expected client value `web` or `mobile_web` in payment_method_options."); var a = Ji({}, r, { payment_method: Ji({}, r && r.payment_method || {}), payment_method_options: Ji({}, r && r.payment_method_options || {}, { wechat_pay: Ji({}, r && r.payment_method_options && r.payment_method_options.wechat_pay || {}) }) }); return $i("confirmWechatPayPayment", xa.wechat_pay)(e, t, n, a, o) }.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmPayPalPayment = ou("confirmPayPalPayment"), Gt(this._betas, Zt.paypal_pm_beta_1) && (this.confirmPayPalPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Ec.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmUpiPayment = ou("confirmUpiPayment"), Gt(this._betas, Zt.upi_beta_1) && (this.confirmUpiPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Oc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmNetbankingPayment = ou("confirmNetbankingPayment"), Gt(this._betas, Zt.netbanking_beta_1) && (this.confirmNetbankingPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Tc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmInstantDebitsPilotPayment = ou("confirmInstantDebitsPilotPayment"), Gt(this._betas, Zt.instant_debits_beta_1) && (this.confirmInstantDebitsPilotPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return rc.apply(void 0, [o._controller, r()].concat(t)) })), this.confirmIdBankTransferPayment = ou("confirmIdBankTransferPayment"), this.confirmIdBankTransferSetup = ou("confirmIdBankTransferSetup"), Gt(this._betas, Zt.id_bank_transfer_beta_1) && (this.confirmIdBankTransferPayment = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return kc.apply(void 0, [o._controller, r()].concat(t)) }), this.confirmIdBankTransferSetup = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return vs.apply(void 0, [o._controller, r()].concat(t)) })), Gt(this._betas, Zt.expresspay_beta_1) && (this.confirmPayment = ue(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Zi.apply(void 0, [o._controller, r()].concat(t)) })), t && (this.handleHosted3DS2Payment = se(function(e) { return t = e, n = o._controller, r = mi(t, "handleHosted3DS2Setup [internal]"), n.action.retrievePaymentIntent({ intentSecret: r, hosted: !0 }).then(Wi(n, xa.card, !1, !0)); var t, n, r }), this.handleHosted3DS2Setup = se(function(e) { return t = e, n = o._controller, r = hi(t, "handleHosted3DS2Setup [internal]"), n.action.retrieveSetupIntent({ intentSecret: r, hosted: !0 }).then(Xc(n, xa.card, !1, !0)); var t, n, r }))
            }
        }, {
            key: "_attachLegacyPaymentIntentMethods",
            value: function() {
                function r() { return o._mids() }
                var o = this,
                    a = Gt(this._betas, Zt.payment_intent_beta_1) || Gt(this._betas, Zt.payment_intent_beta_2),
                    e = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Gc.apply(void 0, [!0, o._controller, r()].concat(t)) }),
                    t = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Gc.apply(void 0, [!1, o._controller, r()].concat(t)) }),
                    i = Object(hr.a)(Wc, ru("handleCardPayment")),
                    n = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [!0, o._controller, r(), a].concat(t)) }),
                    c = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i.apply(void 0, [!1, o._controller, r(), a].concat(t)) }),
                    s = Object(hr.a)(Qc, ru("handleCardSetup")),
                    u = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return s.apply(void 0, [o._controller, r()].concat(t)) }),
                    l = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o) {
                            var a = Q(Va, n, "stripe.confirmSetupIntent intent secret").value,
                                i = null,
                                c = zc(!1, !1, i, "confirmSetupIntent")(r, o);
                            return e.action.confirmSetupIntent(gs({}, c, { otherParams: gs({}, c.otherParams), intentSecret: a, expectedType: i, options: { handleActions: !1 }, mids: t })).then(ja)
                        }.apply(void 0, [o._controller, r()].concat(t))
                    }),
                    p = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o, a) {
                            var i = Q(Ka, r, "stripe.handleSepaDebitPayment intent secret").value,
                                c = xa.sepa_debit,
                                s = zc(!1, n, c, "handleSepaDebitPayment")(o, a),
                                u = !o && !a;
                            return e.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !0 }, mids: t })).then(Wi(e, c, u, !1))
                        }.apply(void 0, [o._controller, r(), a].concat(t))
                    }),
                    d = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o) {
                            var a = Q(Va, n, "stripe.handleSepaDebitSetup intent secret").value,
                                i = xa.sepa_debit,
                                c = zc(!1, !1, i, "handleSepaDebitSetup")(r, o),
                                s = !r && !o;
                            return e.action.confirmSetupIntent(gs({}, c, { intentSecret: a, expectedType: i, options: { handleActions: !0 }, mids: t })).then(Xc(e, i, s, !1))
                        }.apply(void 0, [o._controller, r()].concat(t))
                    }),
                    f = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Kc.apply(void 0, [!0, o._controller, r(), a].concat(t)) }),
                    m = K(function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return Kc.apply(void 0, [!1, o._controller, r(), a].concat(t)) }),
                    h = K(function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return function(e, t, n, r, o, a) {
                            var i = Q(Ka, r, "stripe.handleFpxPayment intent secret").value,
                                c = xa.fpx,
                                s = zc(!1, n, c, "handleFpxPayment")(o, a),
                                u = !o && !a;
                            return e.action.confirmPaymentIntent(ss({}, s, { intentSecret: i, expectedType: c, options: { handleActions: !0 }, mids: t })).then(Wi(e, c, u, !1))
                        }.apply(void 0, [o._controller, r(), a].concat(t))
                    });
                this.handleCardPayment = c, this.confirmPaymentIntent = t, this.handleCardSetup = u, this.confirmSetupIntent = l, this.fulfillPaymentIntent = ou("fulfillPaymentIntent"), this.handleSepaDebitPayment = ou("handleSepaDebitPayment"), this.handleSepaDebitSetup = ou("handleSepaDebitSetup"), this.handleIdealPayment = ou("handleIdealPayment"), this.handleFpxPayment = ou("handleFpxPayment"), Gt(this._betas, Zt.payment_intent_beta_1) ? this.fulfillPaymentIntent = n : (Gt(this._betas, Zt.payment_intent_beta_3) || Gt(this._betas, Zt.payment_intent_beta_2)) && (this.handleCardPayment = n), Gt(this._betas, Zt.payment_intent_beta_3) && (this.confirmPaymentIntent = e, this.handleIdealPayment = f, this.handleSepaDebitPayment = p), Gt(this._betas, Zt.fpx_bank_beta_1) && (this.handleFpxPayment = h), Gt(this._betas, Zt.ideal_pm_beta_1) && (this.handleIdealPayment = m), Gt(this._betas, Zt.sepa_pm_beta_1) && (this.handleSepaDebitPayment = p, this.handleSepaDebitSetup = d)
            }
        }, {
            key: "_attachPrivateMethodsForCheckout",
            value: function(e) {
                var a = this;
                e && (this.sendInteractionEvent = $t, this.tryNextAction = ue(function(e, t) {
                    var n = Q(Ya, e, "Payment Intent").value,
                        r = Object.keys(xa).map(function(e) { return xa[e] }),
                        o = Q(A.apply(void 0, Xs(r)), t, "Source type").value;
                    return ("payment_intent" === n.object ? Gi : $c)(a._controller, n, o, "auto", !1)
                }))
            }
        }, {
            key: "_attachCheckoutMethods",
            value: function(e) {
                function t() { return n._mids() }
                var n = this,
                    r = e.reduce(function(e, t) { var n = Object(w.a)(Ss, function(e) { return e === t }); return n ? [].concat(Xs(e), [n]) : e }, []);
                this.redirectToCheckout = function(e) { return Ds(n._controller, r, t, n._locale, e) }
            }
        }, {
            key: "_attachGetters",
            value: function() {
                var t = this,
                    a = new ii(function(e) { t._registerWrapper({ name: e, version: null }) });
                ["elements", "createToken", "createSource", "createPaymentMethod"].forEach(function(r) {
                    var o, e;
                    t.hasOwnProperty(r) && (o = t[r], e = function() { a.called(r); for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return o.apply(this, t) }, Object.defineProperty(t, r, { enumerable: !0, get: function() { return a.got(r), e } }))
                })
            }
        }, {
            key: "_attachIssuingCardMethods",
            value: function() {
                var c = this;
                this.retrieveIssuingCard = au("retrieveIssuingCard"), this.createEphemeralKeyNonce = au("createEphemeralKeyNonce"), Gt(this._betas, Zt.issuing_elements_1) ? this.retrieveIssuingCard = ue(function(e, t) { return n = e, r = t, o = c._controller, a = ns(n, "retrieveIssuingCard"), i = os(r, "retrieveIssuingCard"), o.action.retrieveIssuingCardWithoutNonce({ cardId: a, ephemeralKeySecret: i }).then(jo); var n, r, o, a, i }) : Gt(this._betas, Zt.issuing_elements_2) && (this.retrieveIssuingCard = ue(function(e, t) { return n = e, r = t, o = c._controller, a = ns(n, "retrieveIssuingCard"), i = is(r), o.action.retrieveIssuingCard({ cardId: a, ephemeralKeySecret: i.ephemeralKeySecret, publicNonce: i.publicNonce }).then(jo); var n, r, o, a, i }), this.createEphemeralKeyNonce = se(function(e) { return cs(e, c._controller) }))
            }
        }, {
            key: "_attachIdentityMethods",
            value: function() {
                var e, t = this;
                this.verifyIdentity = (e = "verifyIdentity", function() { throw new M.a("You cannot call `stripe." + e + "` without supplying an Identity beta flag when initializing Stripe.js.") }), Gt(this._betas, Zt.identity_dialog_1) && (this.verifyIdentity = se(function(e) { return es(e, t._controller) }))
            }
        }, {
            key: "_attachControllerGetter",
            value: function(t, n, r, o) {
                var a = this,
                    i = [],
                    c = document.readyState,
                    s = void 0;
                Object.defineProperties(this, { _registerWrapper: { enumerable: !1, configurable: !0, writable: !1, value: function(e) { i.push(e) } }, _controller: { enumerable: !0, configurable: !0, get: function() { if (s) return s; var e = document.readyState; return s = new Ln($s({ apiKey: a._apiKey, apiVersion: t, __privateApiUrl: n, stripeAccount: r, betas: a._betas, stripeJsId: lu.stripeJsId, stripeJsLoadTimestamp: Zs, stripeCreateTimestamp: o, onFirstLoad: function() { try { nu(s, c, e) } catch (e) {} }, listenerRegistry: a._listenerRegistry }, a._locale ? { locale: a._locale } : {})), Object.defineProperties(a, { _registerWrapper: { value: fu, writable: !1, enumerable: !1, configurable: !0 }, _controller: { value: s, writable: !0, enumerable: !0, configurable: !0 } }), i.forEach(function(e) { return a._registerWrapper(e) }), i.splice(0), s } } })
            }
        }, {
            key: "_attachLinkedAccounts",
            value: function(e) {
                var t = this;
                this.linkAccounts = function() { throw new M.a("You cannot call `stripe.linkAccounts` without supplying a LinkedAccounts beta flag when initializing Stripe.js.") }, Gt(e, Zt.linked_accounts_beta_1) && (this.linkAccounts = se(function(e) { return ac(e, t._controller) }))
            }
        }, {
            key: "_ensureHTTPS",
            value: function() {
                var e = window.location.protocol,
                    t = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname),
                    n = !0 === window.isSecureContext && !t || -1 !== ["https:", "file:", "ionic:", "httpsionic:", "chrome-extension:", "moz-extension:"].indexOf(e),
                    r = this._keyMode === s.live,
                    o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/security/guide#tls";
                if (!n) { if (r && !t) throw this._controller.report("user_error.non_https_error", { protocol: e }), new M.a(o);!r || t ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o) }
            }
        }, { key: "_ensureStripeHosted", value: function(e) { if (!e) throw this._controller.report("user_error.self_hosted"), new M.a("Stripe.js must be loaded from js.stripe.com. For more information https://stripe.com/docs/stripe-js/reference#including-stripejs") } }, { key: "_mids", value: function() { return lu._ec ? lu._ec.ids() : null } }, { key: "_midsPromise", value: function() { return lu._ec ? lu._ec.idsPromise() : ae.a.resolve(this._mids()) } }]), lu);

    function lu(e, t) {
        var n = this;
        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, lu), du.call(this);
        var r = new Xt.a,
            o = Q(su, e || {}, "Stripe()"),
            a = o.value,
            i = o.warnings,
            c = a.apiKey,
            s = a.stripeAccount,
            u = a.apiVersion,
            l = a.locale,
            p = a.__privateApiUrl,
            d = a.__checkout,
            f = a.__hosted3DS,
            m = a.canCreateRadarSession,
            h = a.betas;
        ni(c), d && d.mids && (lu._ec = Vt({ checkoutIds: d.mids })), this._apiKey = c.trim(), this._keyMode = _(this._apiKey), this._betas = h || [], this._locale = Wn(l, this._betas) || null, this._stripeAccount = s || null, this._isCheckout = !!d, this._attachControllerGetter(u, p, s, r), i.forEach(function(e) { return n._controller.warn(e) }), nn(), this._ensureHTTPS(), this._ensureStripeHosted(t), this._attachPaymentIntentMethods(this._betas, !!f), this._attachLegacyPaymentIntentMethods(this._betas), this._attachCheckoutMethods(this._betas), this._attachPrivateMethodsForCheckout(this._isCheckout), this._attachCreateRadarSession(m || !1), this._attachGetters(), this._attachIssuingCardMethods(this._betas), this._attachIdentityMethods(this._betas), this._attachLinkedAccounts(this._betas)
    }
    uu.version = 3, uu.stripeJsId = z(), uu._ec = (iu = new RegExp(document.location.protocol + "//" + document.location.host), "https://checkout.stripe.com/".match(iu) ? null : Vt());

    function pu(e, t) { return new mu(_u({ apiKey: e }, t && "object" === (void 0 === t ? "undefined" : hu(t)) ? t : {}), yu) }
    var du = function() {
            var l = this;
            this._listenerRegistry = Lt(), this.elements = se(function(e) { return new Pa(l._controller, l._listenerRegistry, { stripeJsLoadTimestamp: Zs, stripeCreateTimestamp: l._controller._createTimestamp }, $s({}, l._locale ? { locale: l._locale } : {}, e, { betas: l._betas })) }), this.createToken = ue(function(e, t) {
                var s, u, n = l._mids();
                return "cvc_update" === e ? function(e, t, n) { var r = va(t); if (r && "cardCvc" === r._componentName) { var o = r._implementation._frame.id; return e.action.tokenizeCvcUpdate({ frameId: o, mids: n }).then(Bs) } throw new M.a("You must provide a `cardCvc` Element to create a `cvc_update` token.") }(l._controller, t, n) : (s = l._controller, u = n, function(e, t) {
                    var n = va(e);
                    if (n) {
                        var r = n._implementation._frame.id,
                            o = n._componentName,
                            a = Fs(t);
                        return s.action.tokenizeWithElement({ frameId: r, elementName: o, tokenData: a, mids: u }).then(Bs)
                    }
                    if ("string" != typeof e) throw new M.a("You must provide a Stripe Element or a valid token type to create a Token.");
                    var i = e,
                        c = Fs(t);
                    return s.action.tokenizeWithData({ elementName: null, type: i, tokenData: c, mids: u }).then(Bs)
                }(e, t))
            }), this.createSource = ue(function(e, t) {
                var n = va(e),
                    r = ui(n ? t : e),
                    o = r || { type: null, data: {} },
                    a = o.type,
                    i = o.data;
                if (n) {
                    var c = n._implementation._frame.id,
                        s = n._componentName;
                    return !r && Ia(s) ? ae.a.reject(new M.a("Please provide Source creation parameters to createSource.")) : l._controller.action.createSourceWithElement({ frameId: c, elementName: s, type: a, sourceData: i, mids: l._mids() }).then(li)
                }
                return r ? a ? l._controller.action.createSourceWithData({ elementName: null, type: a, sourceData: i, mids: l._mids() }).then(li) : ae.a.reject(new M.a("Please provide a source type to createSource.")) : ae.a.reject(new M.a("Please provide either an Element or Source creation parameters to createSource."))
            }), this.retrieveSource = se(function(e) {
                var t = Q(Ti, { source: e }, "retrieveSource"),
                    n = t.value;
                return t.warnings.forEach(function(e) { return l._controller.warn(e) }), l._controller.action.retrieveSource(n).then(li)
            }), this.paymentRequest = ue(function(e, t) {! function(e) { if (e === s.unknown) throw new M.a("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n    You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys") }(l._keyMode); var n = l._isCheckout && t ? t : null; return ka(l._controller, { apiKey: l._apiKey, accountId: l._stripeAccount }, l._mids(), e, l._betas, n, l._listenerRegistry) })
        },
        fu = function(e) { var t, n, r, o, a = Y($a, e, "WrapperLibrary"); "error" !== a.type ? (n = (t = a.value).name, r = t.version, o = t.startTime, this._controller.registerWrapper({ name: n, version: r, startTime: o })) : this._controller.report("register_wrapper.error", { error: a.error.message }) },
        mu = uu,
        hu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
        _u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, r = arguments[t]; for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e },
        yu = function() { if (document.currentScript) { var e = Object(v.d)(document.currentScript.src); return !e || Object(bt.c)(e.origin) } return !0 }();
    pu.version = mu.version, window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = pu : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = pu;
    t.default = pu
}]);