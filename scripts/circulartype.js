/*!
 * circletype 2.3.1
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
!(function(t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.CircleType = n())
    : (t.CircleType = n());
})(window, function() {
  return (function(t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function(t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function(t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function(n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function(t) {
        var n =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 28))
    );
  })([
    function(t, n, e) {
      var r = e(13)("wks"),
        o = e(12),
        i = e(1).Symbol,
        u = "function" == typeof i;
      (t.exports = function(t) {
        return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
      }).store = r;
    },
    function(t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    },
    function(t, n) {
      var e = (t.exports = { version: "2.6.11" });
      "number" == typeof __e && (__e = e);
    },
    function(t, n, e) {
      var r = e(4),
        o = e(11);
      t.exports = e(6)
        ? function(t, n, e) {
            return r.f(t, n, o(1, e));
          }
        : function(t, n, e) {
            return (t[n] = e), t;
          };
    },
    function(t, n, e) {
      var r = e(5),
        o = e(33),
        i = e(34),
        u = Object.defineProperty;
      n.f = e(6)
        ? Object.defineProperty
        : function(t, n, e) {
            if ((r(t), (n = i(n, !0)), r(e), o))
              try {
                return u(t, n, e);
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    function(t, n, e) {
      var r = e(10);
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function(t, n, e) {
      t.exports = !e(18)(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
    },
    function(t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function(t, n) {
        return e.call(t, n);
      };
    },
    function(t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    function(t, n) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function(t, n) {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function(t, n) {
      t.exports = function(t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n
        };
      };
    },
    function(t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + r).toString(36)
        );
      };
    },
    function(t, n, e) {
      var r = e(2),
        o = e(1),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function(t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: r.version,
        mode: e(16) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    },
    function(t, n) {
      t.exports = {};
    },
    function(t, n, e) {
      var r = e(13)("keys"),
        o = e(12);
      t.exports = function(t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function(t, n) {
      t.exports = !1;
    },
    function(t, n, e) {
      var r = e(1),
        o = e(2),
        i = e(3),
        u = e(20),
        c = e(21),
        a = function(t, n, e) {
          var f,
            s,
            l,
            p,
            h = t & a.F,
            v = t & a.G,
            d = t & a.S,
            y = t & a.P,
            m = t & a.B,
            g = v ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            _ = v ? o : o[n] || (o[n] = {}),
            x = _.prototype || (_.prototype = {});
          for (f in (v && (e = n), e))
            (l = ((s = !h && g && void 0 !== g[f]) ? g : e)[f]),
              (p =
                m && s
                  ? c(l, r)
                  : y && "function" == typeof l
                  ? c(Function.call, l)
                  : l),
              g && u(g, f, l, t & a.U),
              _[f] != l && i(_, f, p),
              y && x[f] != l && (x[f] = l);
        };
      (r.core = o),
        (a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (a.U = 64),
        (a.R = 128),
        (t.exports = a);
    },
    function(t, n) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function(t, n, e) {
      var r = e(10),
        o = e(1).document,
        i = r(o) && r(o.createElement);
      t.exports = function(t) {
        return i ? o.createElement(t) : {};
      };
    },
    function(t, n, e) {
      var r = e(1),
        o = e(3),
        i = e(7),
        u = e(12)("src"),
        c = e(35),
        a = ("" + c).split("toString");
      (e(2).inspectSource = function(t) {
        return c.call(t);
      }),
        (t.exports = function(t, n, e, c) {
          var f = "function" == typeof e;
          f && (i(e, "name") || o(e, "name", n)),
            t[n] !== e &&
              (f && (i(e, u) || o(e, u, t[n] ? "" + t[n] : a.join(String(n)))),
              t === r
                ? (t[n] = e)
                : c
                ? t[n]
                  ? (t[n] = e)
                  : o(t, n, e)
                : (delete t[n], o(t, n, e)));
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && this[u]) || c.call(this);
        });
    },
    function(t, n, e) {
      var r = e(36);
      t.exports = function(t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function(e) {
              return t.call(n, e);
            };
          case 2:
            return function(e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function(e, r, o) {
              return t.call(n, e, r, o);
            };
        }
        return function() {
          return t.apply(n, arguments);
        };
      };
    },
    function(t, n, e) {
      var r = e(42),
        o = e(9);
      t.exports = function(t) {
        return r(o(t));
      };
    },
    function(t, n) {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1);
      };
    },
    function(t, n, e) {
      var r = e(8),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function(t, n) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function(t, n, e) {
      var r = e(4).f,
        o = e(7),
        i = e(0)("toStringTag");
      t.exports = function(t, n, e) {
        t &&
          !o((t = e ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: n });
      };
    },
    function(t, n, e) {
      var r = e(9);
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    function(t, n, e) {
      e(29);
      var r = e(54).default;
      t.exports = r;
    },
    function(t, n, e) {
      e(30), e(47), (t.exports = e(2).Array.from);
    },
    function(t, n, e) {
      "use strict";
      var r = e(31)(!0);
      e(32)(
        String,
        "String",
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function(t, n, e) {
      var r = e(8),
        o = e(9);
      t.exports = function(t) {
        return function(n, e) {
          var i,
            u,
            c = String(o(n)),
            a = r(e),
            f = c.length;
          return a < 0 || a >= f
            ? t
              ? ""
              : void 0
            : (i = c.charCodeAt(a)) < 55296 ||
              i > 56319 ||
              a + 1 === f ||
              (u = c.charCodeAt(a + 1)) < 56320 ||
              u > 57343
            ? t
              ? c.charAt(a)
              : i
            : t
            ? c.slice(a, a + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function(t, n, e) {
      "use strict";
      var r = e(16),
        o = e(17),
        i = e(20),
        u = e(3),
        c = e(14),
        a = e(37),
        f = e(26),
        s = e(46),
        l = e(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function() {
          return this;
        };
      t.exports = function(t, n, e, v, d, y, m) {
        a(e, n, v);
        var g,
          _,
          x,
          b = function(t) {
            if (!p && t in S) return S[t];
            switch (t) {
              case "keys":
              case "values":
                return function() {
                  return new e(this, t);
                };
            }
            return function() {
              return new e(this, t);
            };
          },
          w = n + " Iterator",
          O = "values" == d,
          j = !1,
          S = t.prototype,
          M = S[l] || S["@@iterator"] || (d && S[d]),
          T = M || b(d),
          P = d ? (O ? b("entries") : T) : void 0,
          A = ("Array" == n && S.entries) || M;
        if (
          (A &&
            (x = s(A.call(new t()))) !== Object.prototype &&
            x.next &&
            (f(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)),
          O &&
            M &&
            "values" !== M.name &&
            ((j = !0),
            (T = function() {
              return M.call(this);
            })),
          (r && !m) || (!p && !j && S[l]) || u(S, l, T),
          (c[n] = T),
          (c[w] = h),
          d)
        )
          if (
            ((g = {
              values: O ? T : b("values"),
              keys: y ? T : b("keys"),
              entries: P
            }),
            m)
          )
            for (_ in g) _ in S || i(S, _, g[_]);
          else o(o.P + o.F * (p || j), n, g);
        return g;
      };
    },
    function(t, n, e) {
      t.exports =
        !e(6) &&
        !e(18)(function() {
          return (
            7 !=
            Object.defineProperty(e(19)("div"), "a", {
              get: function() {
                return 7;
              }
            }).a
          );
        });
    },
    function(t, n, e) {
      var r = e(10);
      t.exports = function(t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o;
        if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, n, e) {
      t.exports = e(13)("native-function-to-string", Function.toString);
    },
    function(t, n) {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function(t, n, e) {
      "use strict";
      var r = e(38),
        o = e(11),
        i = e(26),
        u = {};
      e(3)(u, e(0)("iterator"), function() {
        return this;
      }),
        (t.exports = function(t, n, e) {
          (t.prototype = r(u, { next: o(1, e) })), i(t, n + " Iterator");
        });
    },
    function(t, n, e) {
      var r = e(5),
        o = e(39),
        i = e(25),
        u = e(15)("IE_PROTO"),
        c = function() {},
        a = function() {
          var t,
            n = e(19)("iframe"),
            r = i.length;
          for (
            n.style.display = "none",
              e(45).appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              a = t.F;
            r--;

          )
            delete a.prototype[i[r]];
          return a();
        };
      t.exports =
        Object.create ||
        function(t, n) {
          var e;
          return (
            null !== t
              ? ((c.prototype = r(t)),
                (e = new c()),
                (c.prototype = null),
                (e[u] = t))
              : (e = a()),
            void 0 === n ? e : o(e, n)
          );
        };
    },
    function(t, n, e) {
      var r = e(4),
        o = e(5),
        i = e(40);
      t.exports = e(6)
        ? Object.defineProperties
        : function(t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, a = 0; c > a; )
              r.f(t, (e = u[a++]), n[e]);
            return t;
          };
    },
    function(t, n, e) {
      var r = e(41),
        o = e(25);
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, o);
        };
    },
    function(t, n, e) {
      var r = e(7),
        o = e(22),
        i = e(43)(!1),
        u = e(15)("IE_PROTO");
      t.exports = function(t, n) {
        var e,
          c = o(t),
          a = 0,
          f = [];
        for (e in c) e != u && r(c, e) && f.push(e);
        for (; n.length > a; ) r(c, (e = n[a++])) && (~i(f, e) || f.push(e));
        return f;
      };
    },
    function(t, n, e) {
      var r = e(23);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return "String" == r(t) ? t.split("") : Object(t);
          };
    },
    function(t, n, e) {
      var r = e(22),
        o = e(24),
        i = e(44);
      t.exports = function(t) {
        return function(n, e, u) {
          var c,
            a = r(n),
            f = o(a.length),
            s = i(u, f);
          if (t && e != e) {
            for (; f > s; ) if ((c = a[s++]) != c) return !0;
          } else
            for (; f > s; s++)
              if ((t || s in a) && a[s] === e) return t || s || 0;
          return !t && -1;
        };
      };
    },
    function(t, n, e) {
      var r = e(8),
        o = Math.max,
        i = Math.min;
      t.exports = function(t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
      };
    },
    function(t, n, e) {
      var r = e(1).document;
      t.exports = r && r.documentElement;
    },
    function(t, n, e) {
      var r = e(7),
        o = e(27),
        i = e(15)("IE_PROTO"),
        u = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
    },
    function(t, n, e) {
      "use strict";
      var r = e(21),
        o = e(17),
        i = e(27),
        u = e(48),
        c = e(49),
        a = e(24),
        f = e(50),
        s = e(51);
      o(
        o.S +
          o.F *
            !e(53)(function(t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function(t) {
            var n,
              e,
              o,
              l,
              p = i(t),
              h = "function" == typeof this ? this : Array,
              v = arguments.length,
              d = v > 1 ? arguments[1] : void 0,
              y = void 0 !== d,
              m = 0,
              g = s(p);
            if (
              (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)),
              null == g || (h == Array && c(g)))
            )
              for (e = new h((n = a(p.length))); n > m; m++)
                f(e, m, y ? d(p[m], m) : p[m]);
            else
              for (l = g.call(p), e = new h(); !(o = l.next()).done; m++)
                f(e, m, y ? u(l, d, [o.value, m], !0) : o.value);
            return (e.length = m), e;
          }
        }
      );
    },
    function(t, n, e) {
      var r = e(5);
      t.exports = function(t, n, e, o) {
        try {
          return o ? n(r(e)[0], e[1]) : n(e);
        } catch (n) {
          var i = t.return;
          throw (void 0 !== i && r(i.call(t)), n);
        }
      };
    },
    function(t, n, e) {
      var r = e(14),
        o = e(0)("iterator"),
        i = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
      };
    },
    function(t, n, e) {
      "use strict";
      var r = e(4),
        o = e(11);
      t.exports = function(t, n, e) {
        n in t ? r.f(t, n, o(0, e)) : (t[n] = e);
      };
    },
    function(t, n, e) {
      var r = e(52),
        o = e(0)("iterator"),
        i = e(14);
      t.exports = e(2).getIteratorMethod = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    function(t, n, e) {
      var r = e(23),
        o = e(0)("toStringTag"),
        i =
          "Arguments" ==
          r(
            (function() {
              return arguments;
            })()
          );
      t.exports = function(t) {
        var n, e, u;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function(t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), o))
          ? e
          : i
          ? r(n)
          : "Object" == (u = r(n)) && "function" == typeof n.callee
          ? "Arguments"
          : u;
      };
    },
    function(t, n, e) {
      var r = e(0)("iterator"),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function() {
          o = !0;
        }),
          Array.from(i, function() {
            throw 2;
          });
      } catch (t) {}
      t.exports = function(t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function() {
            return { done: (e = !0) };
          }),
            (i[r] = function() {
              return u;
            }),
            t(i);
        } catch (t) {}
        return e;
      };
    },
    function(t, n, e) {
      "use strict";
      e.r(n);
      var r = function(t) {
        var n = t.getBoundingClientRect();
        return {
          height: n.height,
          left: n.left + window.pageXOffset,
          top: n.top + window.pageYOffset,
          width: n.width
        };
      };
      function o(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var n = 0, e = new Array(t.length); n < t.length; n++)
                e[n] = t[n];
              return e;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      var i = Math.PI / 180,
        u = function(t) {
          return t * i;
        },
        c = function(t, n) {
          return t * (1 - Math.cos(u(n / 2)));
        },
        a = 180 / Math.PI,
        f = function(t, n) {
          return t.reduce(
            function(t, e) {
              var r = e.width,
                o = (r / n) * a;
              return {
                θ: t.θ + o,
                rotations: t.rotations.concat([t.θ + o / 2])
              };
            },
            { θ: 0, rotations: [] }
          );
        };
      function s(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      var l = Math.PI,
        p = Math.max,
        h = Math.min,
        v = (function() {
          function t(n, e) {
            !(function(t, n) {
              if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.element = n),
              (this.originalHTML = this.element.innerHTML);
            var i = document.createElement("div"),
              u = document.createDocumentFragment();
            i.setAttribute("aria-label", n.innerText),
              (i.style.position = "relative"),
              (this.container = i),
              (this._letters = (function(t, n) {
                var e = document.createElement("span"),
                  r = t.innerText.trim();
                return (n ? n(r) : o(r)).map(function(t) {
                  var n = e.cloneNode();
                  return (
                    n.insertAdjacentHTML(
                      "afterbegin",
                      " " === t ? "&nbsp;" : t
                    ),
                    n
                  );
                });
              })(n, e)),
              this._letters.forEach(function(t) {
                return u.appendChild(t);
              }),
              i.appendChild(u),
              (this.element.innerHTML = ""),
              this.element.appendChild(i);
            var c = window.getComputedStyle(this.element),
              a = c.fontSize,
              f = c.lineHeight;
            (this._fontSize = parseFloat(a)),
              (this._lineHeight = parseFloat(f) || this._fontSize),
              (this._metrics = this._letters.map(r));
            var s = this._metrics.reduce(function(t, n) {
              return t + n.width;
            }, 0);
            (this._minRadius = s / l / 2 + this._lineHeight),
              (this._dir = 1),
              (this._forceWidth = !1),
              (this._forceHeight = !0),
              (this._radius = this._minRadius),
              this._invalidate();
          }
          var n, e, i;
          return (
            (n = t),
            (e = [
              {
                key: "radius",
                value: function(t) {
                  return void 0 !== t
                    ? ((this._radius = p(this._minRadius, t)),
                      this._invalidate(),
                      this)
                    : this._radius;
                }
              },
              {
                key: "dir",
                value: function(t) {
                  return void 0 !== t
                    ? ((this._dir = t), this._invalidate(), this)
                    : this._dir;
                }
              },
              {
                key: "forceWidth",
                value: function(t) {
                  return void 0 !== t
                    ? ((this._forceWidth = t), this._invalidate(), this)
                    : this._forceWidth;
                }
              },
              {
                key: "forceHeight",
                value: function(t) {
                  return void 0 !== t
                    ? ((this._forceHeight = t), this._invalidate(), this)
                    : this._forceHeight;
                }
              },
              {
                key: "refresh",
                value: function() {
                  return this._invalidate();
                }
              },
              {
                key: "destroy",
                value: function() {
                  return (this.element.innerHTML = this.originalHTML), this;
                }
              },
              {
                key: "_invalidate",
                value: function() {
                  var t = this;
                  return (
                    cancelAnimationFrame(this._raf),
                    (this._raf = requestAnimationFrame(function() {
                      t._layout();
                    })),
                    this
                  );
                }
              },
              {
                key: "_layout",
                value: function() {
                  var t = this,
                    n = this._radius,
                    e = this._dir,
                    r = -1 === e ? -n + this._lineHeight : n,
                    o = "center ".concat(r / this._fontSize, "em"),
                    i = n - this._lineHeight,
                    a = f(this._metrics, i),
                    s = a.rotations,
                    l = a.θ;
                  if (
                    (this._letters.forEach(function(n, r) {
                      var i = n.style,
                        u = (-0.5 * l + s[r]) * e,
                        c = (-0.5 * t._metrics[r].width) / t._fontSize,
                        a = "translateX("
                          .concat(c, "em) rotate(")
                          .concat(u, "deg)");
                      (i.position = "absolute"),
                        (i.bottom = -1 === e ? 0 : "auto"),
                        (i.left = "50%"),
                        (i.transform = a),
                        (i.transformOrigin = o),
                        (i.webkitTransform = a),
                        (i.webkitTransformOrigin = o);
                    }),
                    this._forceHeight)
                  ) {
                    var p = l > 180 ? c(n, l) : c(i, l) + this._lineHeight;
                    this.container.style.height = "".concat(
                      p / this._fontSize,
                      "em"
                    );
                  }
                  if (this._forceWidth) {
                    var v = (function(t, n) {
                      return 2 * t * Math.sin(u(n / 2));
                    })(n, h(180, l));
                    this.container.style.width = "".concat(
                      v / this._fontSize,
                      "em"
                    );
                  }
                  return this;
                }
              }
            ]) && s(n.prototype, e),
            i && s(n, i),
            t
          );
        })();
      n.default = v;
    }
  ]);
});

document.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelector(".small");
  const b = document.querySelector(".medium");

  new CircleType(a);
  new CircleType(b);
});
