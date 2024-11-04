(() => {
  var Pe = Object.create;
  var be = Object.defineProperty;
  var Ce = Object.getOwnPropertyDescriptor;
  var Ie = Object.getOwnPropertyNames;
  var Ae = Object.getPrototypeOf,
    qe = Object.prototype.hasOwnProperty;
  var De = (r, e) => () => (
    e || r((e = { exports: {} }).exports, e), e.exports
  );
  var Oe = (r, e, t, i) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of Ie(e))
        !qe.call(r, n) &&
          n !== t &&
          be(r, n, {
            get: () => e[n],
            enumerable: !(i = Ce(e, n)) || i.enumerable,
          });
    return r;
  };
  var We = (r, e, t) => (
    (t = r != null ? Pe(Ae(r)) : {}),
    Oe(
      e || !r || !r.__esModule
        ? be(t, "default", { value: r, enumerable: !0 })
        : t,
      r
    )
  );
  var ve = De((ge) => {
    (function (r) {
      r.Conrec = s;
      var e = 1e-10;
      function t(a, h) {
        var c = a.x - h.x,
          l = a.y - h.y;
        return c * c + l * l < e;
      }
      function i(a) {
        for (var h = a.head; h; ) {
          var c = h.next;
          (h.next = h.prev), (h.prev = c), (h = c);
        }
        var c = a.head;
        (a.head = a.tail), (a.tail = c);
      }
      function n(a) {
        (this.level = a), (this.s = null), (this.count = 0);
      }
      (n.prototype.remove_seq = function (a) {
        a.prev ? (a.prev.next = a.next) : (this.s = a.next),
          a.next && (a.next.prev = a.prev),
          --this.count;
      }),
        (n.prototype.addSegment = function (a, h) {
          for (
            var c = this.s, l = null, o = null, d = !1, f = !1;
            c &&
            (l == null &&
              (t(a, c.head.p)
                ? ((l = c), (d = !0))
                : t(a, c.tail.p) && (l = c)),
            o == null &&
              (t(h, c.head.p)
                ? ((o = c), (f = !0))
                : t(h, c.tail.p) && (o = c)),
            !(o != null && l != null));

          )
            c = c.next;
          var _ = (l != null ? 1 : 0) | (o != null ? 2 : 0);
          switch (_) {
            case 0:
              var g = { p: a, prev: null },
                w = { p: h, next: null };
              (g.next = w),
                (w.prev = g),
                (l = {
                  head: g,
                  tail: w,
                  next: this.s,
                  prev: null,
                  closed: !1,
                }),
                this.s && (this.s.prev = l),
                (this.s = l),
                ++this.count;
              break;
            case 1:
              var p = { p: h };
              d
                ? ((p.next = l.head),
                  (p.prev = null),
                  (l.head.prev = p),
                  (l.head = p))
                : ((p.next = null),
                  (p.prev = l.tail),
                  (l.tail.next = p),
                  (l.tail = p));
              break;
            case 2:
              var p = { p: a };
              f
                ? ((p.next = o.head),
                  (p.prev = null),
                  (o.head.prev = p),
                  (o.head = p))
                : ((p.next = null),
                  (p.prev = o.tail),
                  (o.tail.next = p),
                  (o.tail = p));
              break;
            case 3:
              if (l === o) {
                var p = { p: l.tail.p, next: l.head, prev: null };
                (l.head.prev = p), (l.head = p), (l.closed = !0);
                break;
              }
              switch ((d ? 1 : 0) | (f ? 2 : 0)) {
                case 0:
                  i(l);
                case 1:
                  (o.tail.next = l.head),
                    (l.head.prev = o.tail),
                    (o.tail = l.tail),
                    this.remove_seq(l);
                  break;
                case 3:
                  i(l);
                case 2:
                  (l.tail.next = o.head),
                    (o.head.prev = l.tail),
                    (l.tail = o.tail),
                    this.remove_seq(o);
                  break;
              }
          }
        });
      function s(a) {
        if (a) this.drawContour = a;
        else {
          var h = this;
          (h.contours = {}),
            (this.drawContour = function (c, l, o, d, f, _) {
              var g = h.contours[_];
              g || (g = h.contours[_] = new n(f)),
                g.addSegment({ x: c, y: l }, { x: o, y: d });
            }),
            (this.contourList = function () {
              var c = [],
                l = h.contours;
              for (var o in l)
                for (var d = l[o].s, f = l[o].level; d; ) {
                  var _ = d.head,
                    g = [];
                  for (g.level = f, g.k = o; _ && _.p; )
                    g.push(_.p), (_ = _.next);
                  c.push(g), (d = d.next);
                }
              return (
                c.sort(function (w, p) {
                  return w.k - p.k;
                }),
                c
              );
            });
        }
        (this.h = new Array(5)),
          (this.sh = new Array(5)),
          (this.xh = new Array(5)),
          (this.yh = new Array(5));
      }
      s.prototype.contour = function (a, h, c, l, o, d, f, _, g) {
        var w = this.h,
          p = this.sh,
          v = this.xh,
          x = this.yh,
          z = this.drawContour;
        this.contours = {};
        for (
          var q = function (F, U) {
              return (w[U] * v[F] - w[F] * v[U]) / (w[U] - w[F]);
            },
            C = function (F, U) {
              return (w[U] * x[F] - w[F] * x[U]) / (w[U] - w[F]);
            },
            m,
            b,
            k,
            he,
            ce,
            de,
            W = 0,
            R = 0,
            j = 0,
            B = 0,
            ye = [0, 1, 1, 0],
            me = [0, 0, 1, 1],
            Le = [
              [
                [0, 0, 8],
                [0, 2, 5],
                [7, 6, 9],
              ],
              [
                [0, 3, 4],
                [1, 3, 1],
                [4, 3, 0],
              ],
              [
                [9, 6, 7],
                [5, 2, 0],
                [8, 0, 0],
              ],
            ],
            I = o - 1;
          I >= l;
          I--
        )
          for (var A = h; A <= c - 1; A++) {
            var Q, Z;
            if (
              ((Q = Math.min(a[A][I], a[A][I + 1])),
              (Z = Math.min(a[A + 1][I], a[A + 1][I + 1])),
              (ce = Math.min(Q, Z)),
              (Q = Math.max(a[A][I], a[A][I + 1])),
              (Z = Math.max(a[A + 1][I], a[A + 1][I + 1])),
              (de = Math.max(Q, Z)),
              de >= g[0] && ce <= g[_ - 1])
            ) {
              for (var H = 0; H < _; H++)
                if (g[H] >= ce && g[H] <= de) {
                  for (var S = 4; S >= 0; S--)
                    S > 0
                      ? ((w[S] = a[A + ye[S - 1]][I + me[S - 1]] - g[H]),
                        (v[S] = d[A + ye[S - 1]]),
                        (x[S] = f[I + me[S - 1]]))
                      : ((w[0] = 0.25 * (w[1] + w[2] + w[3] + w[4])),
                        (v[0] = 0.5 * (d[A] + d[A + 1])),
                        (x[0] = 0.5 * (f[I] + f[I + 1]))),
                      w[S] > e
                        ? (p[S] = 1)
                        : w[S] < -e
                        ? (p[S] = -1)
                        : (p[S] = 0);
                  for (S = 1; S <= 4; S++)
                    if (
                      ((m = S),
                      (b = 0),
                      S != 4 ? (k = S + 1) : (k = 1),
                      (he = Le[p[m] + 1][p[b] + 1][p[k] + 1]),
                      he != 0)
                    ) {
                      switch (he) {
                        case 1:
                          (W = v[m]), (j = x[m]), (R = v[b]), (B = x[b]);
                          break;
                        case 2:
                          (W = v[b]), (j = x[b]), (R = v[k]), (B = x[k]);
                          break;
                        case 3:
                          (W = v[k]), (j = x[k]), (R = v[m]), (B = x[m]);
                          break;
                        case 4:
                          (W = v[m]), (j = x[m]), (R = q(b, k)), (B = C(b, k));
                          break;
                        case 5:
                          (W = v[b]), (j = x[b]), (R = q(k, m)), (B = C(k, m));
                          break;
                        case 6:
                          (W = v[k]), (j = x[k]), (R = q(m, b)), (B = C(m, b));
                          break;
                        case 7:
                          (W = q(m, b)),
                            (j = C(m, b)),
                            (R = q(b, k)),
                            (B = C(b, k));
                          break;
                        case 8:
                          (W = q(b, k)),
                            (j = C(b, k)),
                            (R = q(k, m)),
                            (B = C(k, m));
                          break;
                        case 9:
                          (W = q(k, m)),
                            (j = C(k, m)),
                            (R = q(m, b)),
                            (B = C(m, b));
                          break;
                        default:
                          break;
                      }
                      z(W, j, R, B, g[H], H);
                    }
                }
            }
          }
      };
    })(typeof ge < "u" ? ge : window);
  });
  var N = class {
      constructor(e) {
        (this.num_nodes = e),
          (this._edges = []),
          (this._weights = []),
          (this._observers = []);
        for (let t = 0; t < e; t++)
          (this._weights[t] = 1), (this._edges[t] = []);
      }
      ids() {
        return Array.from({ length: this.num_nodes }, (e, t) => t);
      }
      tile_weight(e) {
        return this._weights[e];
      }
      set_tile_weight(e, t) {
        this._weights[e] !== t &&
          ((this._weights[e] = t), this.notify_observers());
      }
      tiles_less_than_weight(e = 1 / 0) {
        return Array.from({ length: this.num_nodes }, (t, i) => i).filter(
          (t) => this._weights[t] < e
        );
      }
      tiles_with_given_weight(e = 1 / 0) {
        return Array.from({ length: this.num_nodes }, (t, i) => i).filter(
          (t) => this._weights[t] === e
        );
      }
      edge_weight(e, t) {
        return this.has_edge(e, t)
          ? this._weights[t] === void 0
            ? 1
            : this._weights[t]
          : 1 / 0;
      }
      has_edge(e, t) {
        return this._edges[e] && this._edges[e].indexOf(t) >= 0;
      }
      edges_from(e) {
        return this._edges[e].filter((i) => this.tile_weight(i) !== 1 / 0);
      }
      all_edges(e = 1 / 0) {
        let t = [];
        for (let i = 0; i < this.num_nodes; i++)
          this.tile_weight(i) < e &&
            this._edges[i].forEach((n) => {
              this.tile_weight(n) < e && t.push([i, n]);
            });
        return t;
      }
      notify_observers() {
        this._observers.forEach((e) => e());
      }
      add_observer(e) {
        this._observers.push(e), e();
      }
      make_proxy() {
        return Object.create(this);
      }
    },
    V = class {
      constructor(e, t) {
        (this.graph = e), (this.SCALE = t);
      }
      coordinate_range() {
        let e = [0, 0],
          t = [-1 / 0, -1 / 0];
        for (let i = 0; i < this.graph.num_nodes; i++) {
          let n = this.tile_center(i),
            s = this.tile_shape(i);
          for (let a = 0; a < s.length; a++)
            for (let h = 0; h < 2; h++)
              (e[h] = Math.min(e[h], n[h] + s[a][h])),
                (t[h] = Math.max(t[h], n[h] + s[a][h]));
        }
        return { min: e, max: t };
      }
      tile_center(e) {
        return [0, 0];
      }
      tile_shape(e) {
        return [[0, 0]];
      }
      pixel_to_tile(e) {
        return -1;
      }
    },
    L = class r extends N {
      constructor(e, t) {
        super(e * t), (this.W = e), (this.H = t);
        for (let i = 0; i < e; i++)
          for (let n = 0; n < t; n++) {
            let s = this.to_id(i, n);
            r.DIRS.forEach((a) => {
              let h = i + a[0],
                c = n + a[1];
              this.valid(h, c) && this._edges[s].push(this.to_id(h, c));
            });
          }
      }
      edges_from(e) {
        let t = super.edges_from(e),
          i = this.from_id(e);
        return (i[0] + i[1]) % 2 === 0 && t.reverse(), t;
      }
      valid(e, t) {
        return 0 <= e && e < this.W && 0 <= t && t < this.H;
      }
      to_id(e, t) {
        return (
          (e = Math.min(this.W - 1, Math.max(0, e))),
          (t = Math.min(this.H - 1, Math.max(0, t))),
          e + t * this.W
        );
      }
      from_id(e) {
        return [e % this.W, Math.floor(e / this.W)];
      }
    };
  L.DIRS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  var D = class extends V {
    xy_scaled(e) {
      return [e[0] * this.SCALE, e[1] * this.SCALE];
    }
    tile_center(e) {
      return this.xy_scaled(this.graph.from_id(e));
    }
    tile_shape(e) {
      let t = this.SCALE;
      return [
        [-t / 2, -t / 2],
        [-t / 2, t / 2 - 1],
        [t / 2 - 1, t / 2 - 1],
        [t / 2 - 1, -t / 2],
      ];
    }
    pixel_to_tile(e) {
      return this.graph.to_id(
        Math.round(e[0] / this.SCALE),
        Math.round(e[1] / this.SCALE)
      );
    }
  };
  var ue = class {
      constructor(e, t, i, n) {
        (this.steps = e),
          (this.current = t),
          (this.frontier = i),
          (this.neighbors = n);
      }
    },
    M = class {
      constructor(
        e = [],
        t = (s) => !1,
        i = (s, a) => a.cost_so_far,
        n = () => {}
      ) {
        (this.allow_reprioritize = !0),
          (this.starts = e),
          (this.exit_now = t),
          (this.sort_key = i),
          (this.search_setup = n);
      }
    };
  function Y(r, e, t) {
    let i = new ue(0, -1, r.starts.concat(), []);
    i.frontier.forEach((s, a) => {
      (t[s].reached = !0),
        (t[s].visit_order = a),
        (t[s].steps = 0),
        (t[s].cost_so_far = 0),
        (t[s].parent = void 0),
        (t[s].started_at = s),
        (t[s].sort_key = r.sort_key(s, t[s]));
    });
    let n = i.frontier.length;
    for (
      ;
      i.frontier.length > 0 &&
      (i.steps++,
      i.frontier.sort((s, a) =>
        t[s].sort_key == t[a].sort_key
          ? t[s].visit_order - t[a].visit_order
          : t[s].sort_key - t[a].sort_key
      ),
      (i.current = i.frontier.shift()),
      (i.neighbors = e.edges_from(i.current)),
      !r.exit_now(i, t));

    )
      i.neighbors.forEach((s) => {
        let a = t[i.current].cost_so_far + e.edge_weight(i.current, s);
        (!t[s].reached ||
          (r.allow_reprioritize && t[s].reached && a < t[s].cost_so_far)) &&
          (i.frontier.indexOf(s) < 0 && i.frontier.push(s),
          (t[s].reached = !0),
          (t[s].visit_order = n++),
          (t[s].steps = t[i.current].steps + 1),
          (t[s].cost_so_far = a),
          (t[s].parent = i.current),
          (t[s].started_at = t[i.current].started_at),
          (t[s].sort_key = r.sort_key(s, t[s])));
      });
    return i.frontier.length == 0 && ((i.current = -1), (i.neighbors = [])), i;
  }
  function Re() {
    function r(s, a) {
      (s = JSON.stringify(s)),
        (a = JSON.stringify(a)),
        s != a && console.log("FAIL", s, "should be", a);
    }
    let e, t, i, n;
    (n = new M()),
      (e = new L(2, 2)),
      (t = Array.from({ length: e.num_nodes }, (s) => ({}))),
      (i = Y(new M([0]), e, t)),
      r(t[3].cost_so_far, 2),
      r(t[1].parent, 0),
      r(i.frontier, []),
      r(i.neighbors, []),
      r(i.current, -1),
      (e = new L(2, 2)),
      e.set_tile_weight(1, 1 / 0),
      e.set_tile_weight(2, 1 / 0),
      (t = Array.from({ length: e.num_nodes }, (s) => ({}))),
      (i = Y(new M([0]), e, t)),
      r(t[3].cost_so_far, void 0),
      r(t[1].parent, void 0),
      r(i.frontier, []),
      r(i.neighbors, []),
      r(i.current, -1),
      (e = new L(2, 2)),
      e.set_tile_weight(2, 1 / 0),
      (t = Array.from({ length: e.num_nodes }, (s) => ({}))),
      (i = Y(new M([0], (s) => s.current == 1), e, t)),
      r(t[3].cost_so_far, void 0),
      r(t[1].parent, 0),
      r(i.frontier, []),
      r(i.neighbors, []),
      r(i.current, -1);
  }
  Re();
  var K = class {
    constructor(e) {
      typeof e.el == "string" && (e.el = document.querySelector(e.el)),
        (this.reference = e.el),
        Object.assign(this, e);
      let t = () => null,
        i = (a) => {
          if (a.button != 0) return;
          t();
          let h = this.reference.getBoundingClientRect(),
            c = Object.create(this);
          (c.mouse_button = a.button), (c.raw = a), c.start(c.coords(h, a));
          function l(d) {
            (c.raw = d),
              c.drag(c.coords(h, d)),
              d.preventDefault(),
              d.stopPropagation();
          }
          function o(d) {
            (c.raw = d),
              c.end(c.coords(h, d)),
              t(),
              d.preventDefault(),
              d.stopPropagation();
          }
          (t = () => {
            window.removeEventListener("mousemove", l),
              window.removeEventListener("mouseup", o),
              (t = () => null);
          }),
            window.addEventListener("mousemove", l),
            window.addEventListener("mouseup", o),
            a.preventDefault(),
            a.stopPropagation();
        },
        n = [],
        s = (a) => {
          let h = this.reference.getBoundingClientRect();
          for (let c = 0; c < a.changedTouches.length; c++) {
            let l = a.changedTouches[c],
              o = this.coords(h, l);
            switch (((o.raw = l), a.type)) {
              case "touchstart":
                (n[l.identifier] = Object.create(this)),
                  (n[l.identifier].touch_identifier = l.identifier),
                  n[l.identifier].start(o);
                break;
              case "touchmove":
                n[l.identifier].drag(o);
                break;
              case "touchend":
                n[l.identifier].end(o), (n[l.identifier] = null);
                break;
            }
          }
          a.preventDefault(), a.stopPropagation();
        };
      (this.el.style.touchAction = "none"),
        this.el.addEventListener("mousedown", i),
        this.el.addEventListener("touchstart", s),
        this.el.addEventListener("touchmove", s),
        this.el.addEventListener("touchend", s),
        (this.uninstall = function () {
          (this.el.style.touchAction = ""),
            this.el.removeEventListener("mousedown", i),
            this.el.removeEventListener("touchstart", s),
            this.el.removeEventListener("touchmove", s),
            this.el.removeEventListener("touchend", s),
            t();
        });
    }
    coords(e, t) {
      let i = { x: t.clientX - e.left, y: t.clientY - e.top },
        n =
          this.reference instanceof SVGSVGElement
            ? this.reference
            : this.reference.ownerSVGElement;
      if (n) {
        let s = n.createSVGPoint();
        (s.x = t.clientX),
          (s.y = t.clientY),
          (i = s.matrixTransform(n.getScreenCTM().inverse()));
      }
      return i;
    }
    start(e) {}
    drag(e) {}
    end(e) {}
  };
  function je(r, e, t) {
    return r < e && (r = e), r > t && (r = t), r;
  }
  function ee(r, e, t) {
    return r * (1 - t) + e * t;
  }
  function $(r, e) {
    for (let t = 0; t < e.length; t++) {
      if (e[t] === void 0) continue;
      let i = e[t][0],
        n = e[t][1];
      e[t - 1] === void 0 ? r.moveTo(i, n) : r.lineTo(i, n);
    }
    r.closePath();
  }
  var E = class {
      constructor(e, t, i, n, ...s) {
        (this.el = e),
          (this.graph = t),
          (this.options = i),
          (this.layout = n),
          (this.layers = s),
          (this._linked_diagrams = null),
          (this._redrawing = 0),
          (this.margin = 4),
          (this.xy_range = this.layout.coordinate_range()),
          (this.translate = [
            this.xy_range.min[0] - this.margin,
            this.xy_range.min[1] - this.margin,
          ]),
          (this.parent =
            typeof this.el == "string"
              ? document.querySelector(this.el)
              : this.el),
          (this.canvas =
            this.parent.querySelector("canvas") ||
            document.createElement("canvas")),
          this.setSize(),
          (this.ctx = this.canvas.getContext("2d")),
          this.parent.appendChild(this.canvas),
          requestAnimationFrame(() => {
            this.setUpDragHandlers(),
              this.setUpMouseoverHandlers(),
              this.graph.add_observer(this.redraw.bind(this));
          });
      }
      linkTo(...e) {
        if (this._linked_diagrams !== null)
          throw `Diagram ${this.el} already linked`;
        e.push(this);
        for (let t of e) t._linked_diagrams = e;
      }
      setSize() {
        let e = this.xy_range.max[0] - this.xy_range.min[0] + 2 * this.margin,
          t = this.xy_range.max[1] - this.xy_range.min[1] + 2 * this.margin;
        (this.scale = (window.devicePixelRatio * this.parent.clientWidth) / e),
          (e = Math.round(this.scale * e)),
          (t = Math.round(this.scale * t)),
          (this.canvas.width !== e || this.canvas.height !== t) &&
            ((this.canvas.width = e), (this.canvas.height = t));
      }
      mouseEventToTileEvent(e) {
        let t = this.canvas,
          i =
            ((e.x / t.clientWidth) * t.width) / this.scale + this.translate[0],
          n =
            ((e.y / t.clientHeight) * t.height) / this.scale +
            this.translate[1],
          s = this.layout.pixel_to_tile([i, n]);
        return { x: i, y: n, id: s };
      }
      setUpDragHandlers() {
        let e = this;
        function t(i, n, s) {
          i?.[n]?.call(e, e.mouseEventToTileEvent(s));
        }
        new K({
          el: this.canvas,
          start(i) {
            let n = e.mouseEventToTileEvent(i);
            this.handler = !1;
            for (let s = e.layers.length - 1; s >= 0 && !this.handler; s--) {
              let a = e.layers[s];
              this.handler = a.handle_drag?.call(e, n);
            }
            t(this.handler, "start", i), t(this.handler, "drag", i);
          },
          drag(i) {
            t(this.handler, "drag", i);
          },
          end(i) {
            t(this.handler, "end", i);
          },
        });
      }
      setUpMouseoverHandlers() {
        this.canvas.addEventListener("mousemove", (t) => {
          let i = this.canvas.getBoundingClientRect(),
            n = this.mouseEventToTileEvent({ x: t.x - i.left, y: t.y - i.top });
          this.updateCursor(n);
        });
      }
      updateCursor(e) {
        let t = "";
        for (let i of this.layers)
          i.cursor && (t = i.cursor.call(this, e) ?? t);
        this.canvas.style.cursor = t;
      }
      redraw() {
        for (let e of this._linked_diagrams ?? [this]) {
          if (e._redrawing) return;
          e._redrawing = requestAnimationFrame(() => e._redraw());
        }
      }
      rerunSearch() {
        let e = this.graph
            .ids()
            .map((i) => ({ tile_weight: this.graph.tile_weight(i) })),
          t = Y(this.options, this.graph, e);
        return (
          t.current !== -1 && (e[t.current].current = !0),
          t.frontier.forEach((i) => {
            e[i].frontier = !0;
          }),
          t.neighbors.forEach((i) => {
            e[i].neighbor = !0;
          }),
          { ss: t, map: e }
        );
      }
      _redraw() {
        (this._redrawing = 0), this.options.search_setup();
        let e = this.graph.ids(),
          { ss: t, map: i } = this.rerunSearch(),
          { ctx: n } = this;
        (n.textAlign = "center"),
          (n.textBaseline = "middle"),
          (n.font = `${this.layout.SCALE * 0.4}px sans-serif`),
          (n.fillStyle = "white"),
          n.fillRect(0, 0, this.canvas.width, this.canvas.height),
          n.save(),
          n.scale(this.scale, this.scale),
          n.translate(-this.translate[0], -this.translate[1]);
        for (let s of this.layers)
          if (
            (s.draw && (n.save(), s.draw.call(this, n, t, i), n.restore()),
            s.draw_tile)
          )
            for (let a of e) {
              let h = this.layout.tile_center(a);
              n.save(),
                n.translate(h[0], h[1]),
                s.draw_tile.call(this, n, t, i, a),
                n.restore();
            }
        n.restore();
      }
    },
    u = {
      base(r = {}) {
        let {
          tile: e,
          reached: t,
          current: i,
          frontier: n,
          override: s,
        } = Object.create(r);
        return (
          (e = e ?? { fillStyle: "hsl(0, 10%, 85%)" }),
          (t = t ?? { fillStyle: "hsl(30, 20%, 75%)" }),
          (n = n ?? {}),
          (i = i ?? {}),
          (r[1 / 0] = r[1 / 0] ?? {
            fillStyle: "hsl(60, 5%, 50%)",
            strokeStyle: "hsl(60, 5%, 50%)",
          }),
          {
            draw_tile(a, h, c, l) {
              let o = c[l].tile_weight,
                d = {};
              Object.assign(d, e),
                c[l].reached && Object.assign(d, t),
                r[o] && Object.assign(d, r[o]),
                (c[l].frontier || c[l].current) && Object.assign(d, n),
                c[l].current && Object.assign(d, i),
                Object.assign(a, d),
                s && s.call(this, a, h, c, l),
                a.beginPath(),
                $(a, this.layout.tile_shape(l)),
                d.fillStyle && a.fill(),
                d.strokeStyle && a.stroke();
            },
          }
        );
      },
      numericLabels(
        r,
        e = "black",
        t = (i) => (i === 1 / 0 || i === void 0 ? "" : i.toFixed(0))
      ) {
        return {
          draw_tile(i, n, s, a) {
            (i.fillStyle = e), i.fillText(t(s[a][r], a), 0, 0);
          },
        };
      },
      frontierTiles(r = null, e = !1) {
        return {
          draw_tile(t, i, n, s) {
            (r = r ?? this.layout.SCALE / 10),
              (n[s].current || n[s].frontier) &&
                ((t.strokeStyle = "hsl(220, 50%, 50%)"),
                (t.lineWidth = r),
                e && (t.beginPath(), $(t, this.layout.tile_shape(s)), t.clip()),
                t.beginPath(),
                $(t, this.layout.tile_shape(s)),
                t.stroke());
          },
        };
      },
      neighborTiles(r = null) {
        let e = null;
        return {
          draw_tile(t, i, n, s) {
            (r = r ?? this.layout.SCALE / 5),
              n[s].neighbor &&
                (e === null &&
                  ((e = t.createRadialGradient(
                    0,
                    0,
                    10,
                    0,
                    0,
                    this.layout.SCALE / 2
                  )),
                  e.addColorStop(0, "hsla(150, 50%, 45%, 0.0)"),
                  e.addColorStop(1, "hsla(150, 50%, 45%, 0.5)")),
                (t.fillStyle = e),
                (t.strokeStyle = "hsl(150, 50%, 45%)"),
                (t.lineWidth = r),
                t.setLineDash([r / 2, r / 2]),
                t.beginPath(),
                $(t, this.layout.tile_shape(s)),
                t.clip(),
                t.beginPath(),
                $(t, this.layout.tile_shape(s)),
                t.fill(),
                t.stroke());
          },
        };
      },
      parentPointers(
        r = !1,
        e = 3,
        t = {
          fillStyle: "hsl(30, 20%, 65%)",
          strokeStyle: "hsla(0, 0%, 100%, 0.5)",
          lineWidth: 0.5,
        }
      ) {
        return {
          draw_tile(h, c, l, o) {
            let d = l[o].parent;
            if (d === void 0) return;
            let f = this.layout.tile_center(o),
              _ = this.layout.tile_center(d);
            r && ([f, _] = [_, f]);
            let g = [_[0] - f[0], _[1] - f[1]],
              w = Math.hypot(g[0], g[1]),
              p = [(-g[1] * e) / 2 / w, (g[0] * e) / 2 / w];
            function v(...x) {
              let z = 0,
                q = 0;
              for (let C = 0; C < x.length; C += 2) {
                let m = x[C],
                  b = x[C + 1];
                (z += m * b[0]), (q += m * b[1]);
              }
              return [z, q];
            }
            Object.assign(h, t),
              h.beginPath(),
              $(h, [
                v(0.1, g, 1, p),
                v(0.4, g, 1, p),
                v(0.4, g, 3, p),
                v(0.7, g),
                v(0.4, g, -3, p),
                v(0.4, g, -1, p),
                v(0.1, g, -1, p),
              ]),
              t.strokeStyle && h.stroke(),
              t.fillStyle && h.fill();
          },
        };
      },
      editable(...r) {
        r.length === 0 && (r = [1, 1 / 0]);
        function e(t) {
          let i = r.indexOf(t);
          return r[(i + 1) % r.length];
        }
        return {
          handle_drag(t) {
            let i = this.graph,
              n = e(i.tile_weight(t.id));
            return {
              drag(s) {
                s.id !== -1 && i.set_tile_weight(s.id, n);
              },
            };
          },
          cursor(t) {
            return "crosshair";
          },
        };
      },
      draggableMarker(r, e, t) {
        let i = !1;
        return {
          draw(n, s, a) {
            let [h, c] = this.layout.tile_center(e[t]);
            n.save(), n.translate(h, c), r(n, i), n.restore();
          },
          handle_drag(n) {
            return n.id === e[t]
              ? {
                  start(s) {
                    (i = !0), this.updateCursor(s), this.redraw();
                  },
                  end(s) {
                    (i = !1), this.updateCursor(s), this.redraw();
                  },
                  drag(s) {
                    s.id !== -1 &&
                      s.id !== e[t] &&
                      ((e[t] = s.id), this.redraw());
                  },
                }
              : null;
          },
          cursor(n) {
            return n.id !== e[t] ? null : i ? "grabbing" : "grab";
          },
        };
      },
    },
    J = (function () {
      let r = {};
      if (!globalThis.document) return r;
      let e = document.createElement("canvas"),
        t = e.getContext("2d");
      return (
        (e.width = 10),
        (e.height = 10),
        (t.fillStyle = "hsl(110, 40%, 80%)"),
        t.fillRect(0, 0, e.width, e.height),
        (t.strokeStyle = "hsl(110, 50%, 70%)"),
        t.beginPath(),
        t.moveTo(1, 1),
        t.lineTo(3, 3),
        t.lineTo(5, 1),
        t.moveTo(6, 6),
        t.lineTo(8, 8),
        t.lineTo(10, 6),
        t.stroke(),
        (r.grass = t.createPattern(e, "repeat")),
        (t.fillStyle = "hsl(110, 20%, 70%)"),
        t.fillRect(0, 0, e.width, e.height),
        (t.strokeStyle = "hsl(100, 20%, 60%)"),
        t.beginPath(),
        t.moveTo(1, 1),
        t.lineTo(3, 3),
        t.lineTo(5, 1),
        t.moveTo(6, 6),
        t.lineTo(8, 8),
        t.lineTo(10, 6),
        t.stroke(),
        (r.forest = t.createPattern(e, "repeat")),
        (t.fillStyle = "hsl(60, 50%, 80%)"),
        t.fillRect(0, 0, e.width, e.height),
        (t.strokeStyle = "hsl(30, 50%, 80%)"),
        t.beginPath(),
        t.arc(5, 5, 3, 1.1 * Math.PI, 1.9 * Math.PI),
        t.stroke(),
        (r.desert = t.createPattern(e, "repeat")),
        (t.fillStyle = "hsl(200, 50%, 70%)"),
        t.fillRect(0, 0, e.width, e.height),
        (t.strokeStyle = "hsl(180, 50%, 70%)"),
        t.beginPath(),
        t.arc(5, 5, 3, 0.1 * Math.PI, 0.9 * Math.PI),
        t.stroke(),
        (r.river = t.createPattern(e, "repeat")),
        r
      );
    })(),
    y = {
      blob(r) {
        i.path = [];
        for (let n = 0; n < 2 * Math.PI; n += 0.1) {
          let s = r * (1 + Math.sin(5 * n) / 5.5),
            a = s * Math.cos(n),
            h = -s * Math.sin(n);
          (h -= 0.05 * r), i.path.push([a, h]);
        }
        i.style = {
          fillStyle: "hsl(0, 50%, 50%)",
          lineWidth: 0.4,
          strokeStyle: "hsl(0, 0%, 100%, 0.5)",
          shadowColor: "hsl(0, 0%, 0%, 0.5)",
          shadowOffsetY: 1,
          shadowBlur: 1,
        };
        let e = r > 11;
        function t(n, s, a, h) {
          let c = h ? 0.02 : 0.01,
            l = h ? 0 : 0.02;
          e &&
            ((n.fillStyle = "white"),
            n.beginPath(),
            n.ellipse(r * s, r * a, r * 0.12, r * 0.18, 0, 0, 2 * Math.PI),
            n.fill()),
            (n.fillStyle = "black"),
            n.beginPath(),
            n.arc(
              r * (s + c),
              r * (a + l),
              r * (e ? 0.07 : 0.09),
              0,
              2 * Math.PI
            ),
            n.fill();
        }
        function i(n, s) {
          Object.assign(n, i.style),
            s && (n.scale(1.05, 1.05), (n.shadowColor = "black")),
            n.beginPath(),
            $(n, i.path),
            n.fill(),
            n.stroke(),
            (n.shadowColor = "rgb(0, 0, 0, 0.2)"),
            t(n, -0.18, -0.8, s),
            t(n, 0.18, -0.8, s),
            (n.strokeStyle = "black"),
            (n.lineWidth = r * 0.1),
            (n.lineCap = "round"),
            n.beginPath(),
            n.moveTo(-r * 0.2, -r * 0.4),
            n.quadraticCurveTo(0, -r * (s ? 0.2 : 0.3), r * 0.2, -r * 0.4),
            n.stroke();
        }
        return i;
      },
      cross(r) {
        e.style = {
          lineWidth: 0.75 * r,
          lineJoin: "miter",
          lineCap: "butt",
          strokeStyle: "hsl(310, 50%, 50%)",
          shadowColor: "hsl(0, 0%, 0%, 0.5)",
          shadowOffsetY: 1,
          shadowBlur: 1,
        };
        function e(t, i) {
          Object.assign(t, e.style),
            i && (t.scale(1.05, 1.05), (t.shadowColor = "black")),
            t.beginPath(),
            t.moveTo(-r, -r),
            t.lineTo(r, r),
            t.moveTo(-r, r),
            t.lineTo(r, -r),
            t.stroke();
        }
        return e;
      },
    };
  function te(r, e) {
    let t = 0,
      i = fe(r, {
        min: 0,
        get max() {
          return e[0].graph.tiles_less_than_weight().length;
        },
        get value() {
          return t;
        },
        set value(n) {
          (t = n), e.forEach((s) => s.redraw());
        },
      });
    for (let n of e) {
      let s = n.options.exit_now;
      (n.options.exit_now = (a) => s(a) || a.steps > t),
        n.graph.add_observer(() => i.redrawSlider());
    }
    return i;
  }
  function fe(r, e) {
    typeof r == "string" && (r = document.querySelector(r));
    let t = r.querySelector("div.slider") ?? document.createElement("div");
    (t.className = "slider"),
      (t.style.textAlign = "center"),
      (t.innerHTML = `
             <input type="range" />
             <br />
             <button class="step_back">\u2190</button>
             <button class="play_pause"></button>
             <button class="step_forward">\u2192</button>
    `);
    let i = t.querySelector("input");
    i.addEventListener("input", s),
      t.querySelector(".step_back").addEventListener("click", a),
      t.querySelector(".play_pause").addEventListener("click", c),
      t.querySelector(".step_forward").addEventListener("click", h),
      r.appendChild(t);
    let n = 0;
    return _(), { setSliderPosition: l, setPlayPause: d, redrawSlider: _ };
    function s(g) {
      l(g.target.valueAsNumber);
    }
    function a(g) {
      l(e.value - 1);
    }
    function h(g) {
      l(e.value + 1);
    }
    function c(g) {
      d(n === 0);
    }
    function l(g) {
      d(!1), o(g);
    }
    function o(g) {
      (e.value = je(g, e.min, e.max)), _();
    }
    function d(g) {
      g && !n
        ? ((n = setInterval(f, e.animationFrameMs ?? 1e3 / 60)),
          e.value === e.max && o(0),
          _())
        : !g && n && (clearInterval(n), (n = 0), _());
    }
    function f() {
      e.value < e.max ? o(e.value + 1) : d(!1);
    }
    function _() {
      (i.min = e.min),
        (i.max = e.max),
        (i.value = e.value),
        (t.querySelector(".play_pause").textContent = n
          ? "Pause animation"
          : "Start animation");
    }
  }
  var Te = We(ve());
  function G(r, e) {
    let t = String.raw`\b`,
      i = String.raw`(?<!<)`,
      n = `(${e.join("|")})`,
      s = String.raw`(?![-'"=])`;
    try {
      let a = new RegExp(t + i + n + t + s, "g");
      return r.replace(a, "<span class='$&'>$&</span>");
    } catch {
      return (
        console.log(
          "WARNING: browser doesn't support https://caniuse.com/js-regexp-lookbehind, skipping code highlighting"
        ),
        r
      );
    }
  }
  function Be() {
    function r(e, t) {
      e != t &&
        (console.log("ASSERT failed:"),
        console.log("   OUTPUT = ", e),
        console.log("   EXPECT = ", t));
    }
    r(
      G("begin end", ["begin", "end"]),
      "<span class='begin'>begin</span> <span class='end'>end</span>"
    ),
      r(
        G("begin middle funcall() end", ["middle", "funcall"]),
        "begin <span class='middle'>middle</span> <span class='funcall'>funcall</span>() end"
      ),
      r(
        G(
          `begin eol
bol end`,
          ["eol", "bol"]
        ),
        `begin <span class='eol'>eol</span>
<span class='bol'>bol</span> end`
      ),
      r(
        G("begin object.method end", ["object", "method"]),
        "begin <span class='object'>object</span>.<span class='method'>method</span> end"
      ),
      r(
        G("begin <tag object='foo'> end", ["object", "method", "object"]),
        "begin <tag object='foo'> end"
      ),
      r(
        G("begin <tag foo='object'> end", ["object", "method", "foo"]),
        "begin <tag foo='object'> end"
      );
  }
  Be();
  function ke(r, e) {
    return Array.from({ length: e - r }, (t, i) => r + i);
  }
  function ie(r, e, t) {
    let i = r.from_id(e),
      n = r.from_id(t);
    return Math.abs(i[0] - n[0]) + Math.abs(i[1] - n[1]);
  }
  function $e(r, e) {
    let t = e.length,
      i = !1;
    for (let n = 0, s = t - 1; n < t; s = n, n++) {
      let a = e[s].x - e[n].x,
        h = e[s].y - e[n].y;
      e[n].y > r.y != e[s].y > r.y &&
        r.x < ((r.y - e[n].y) * a) / h + e[n].x &&
        (i = !i);
    }
    return i;
  }
  function T(r) {
    (T.queue === void 0 || T.queue.length === 0) &&
      ((T.queue = [() => {}]), e());
    function e() {
      T.queue.length > 0 && (T.queue.shift()(), requestAnimationFrame(e));
    }
    T.queue.push(r);
  }
  function Ge() {
    return {
      draw(r, e, t) {
        r.clearRect(
          this.xy_range.min[0],
          this.xy_range.min[1],
          this.xy_range.max[0] - this.xy_range.min[0],
          this.xy_range.max[1] - this.xy_range.min[1]
        );
      },
    };
  }
  function ne() {
    return {
      draw(r, e, t) {
        (r.fillStyle = "hsl(110, 20%, 60%)"),
          r.fillRect(0, 0, 390, 300),
          (r.fillStyle = J.river),
          r.fillRect(390, 0, 210, 300);
      },
    };
  }
  var He = { current: { fillStyle: "hsl(220, 60%, 60%)" } },
    se = { 5: { fillStyle: J.forest } },
    ae = {
      tile: {
        fillStyle: "hsla(0, 0%, 100%, 0.9)",
        strokeStyle: "hsla(0, 0%, 60%, 0.5)",
        lineWidth: 0.5,
      },
      reached: {},
      override(r, e, t, i) {
        (i === 5 || i === 10 || i === 11 || i === 12) &&
          (r.fillStyle = J.grass),
          (i === 16 || i === 22 || i === 24) && (r.fillStyle = J.desert);
      },
    },
    O = { lineWidth: 11, strokeStyle: "hsl(30, 5%, 90%)" };
  function _e(r) {
    return {
      cursor(e) {
        e.id !== -1 && (r(e.id), this.redraw());
      },
    };
  }
  function Fe(r, e) {
    return {
      cursor(t) {
        return t.id === r() ? e : null;
      },
    };
  }
  function P(r, e) {
    return (
      (e = Object.assign(
        {
          lineWidth: 4,
          lineCap: "round",
          lineJoin: "round",
          strokeStyle: "hsl(280, 50%, 50%)",
        },
        e
      )),
      {
        draw(t, i, n) {
          let s = r();
          if (s < 0) return;
          let a = this.layout.tile_center(s);
          for (
            Object.assign(t, e), t.beginPath(), t.moveTo(a[0], a[1]);
            n[s].parent !== void 0;

          )
            (s = n[s].parent),
              (a = this.layout.tile_center(s)),
              t.lineTo(a[0], a[1]);
          t.stroke();
        },
      }
    );
  }
  function Se(r, e) {
    return {
      draw(t, i, n) {
        let s = this.layout,
          a = e(),
          h = r();
        if (a >= 0 && h >= 0) {
          let c = s.tile_center(a),
            l = s.tile_center(h);
          (t.strokeStyle = "hsl(330, 50%, 50%)"),
            (t.lineWidth = 4),
            (t.lineCap = "round"),
            t.beginPath(),
            t.moveTo(c[0], c[1]),
            t.lineTo(l[0], l[1]),
            t.stroke();
        }
      },
    };
  }
  function X(
    r,
    e = 1 / 0,
    t = {
      fillStyle: "hsl(230, 50%, 60%)",
      strokeStyle: "hsl(0, 0%, 100%)",
      lineWidth: 0.5,
    }
  ) {
    return {
      draw_tile(i, n, s, a) {
        s[a].tile_weight < e &&
          (Object.assign(i, t),
          i.beginPath(),
          i.arc(0, 0, r, 0, 2 * Math.PI),
          t.fillStyle && i.fill(),
          t.strokeStyle && i.stroke());
      },
    };
  }
  function re(r = 1 / 0) {
    return {
      draw(e, t, i) {
        (e.strokeStyle = "hsl(160, 30%, 50%)"),
          (e.lineWidth = 4.5),
          (e.lineCap = "round");
        for (let n of this.graph.all_edges(r)) {
          let s = this.layout.tile_center(n[0]),
            a = this.layout.tile_center(n[1]);
          e.beginPath(),
            e.moveTo(s[0], s[1]),
            e.lineTo(0.5 * (s[0] + a[0]), 0.5 * (s[1] + a[1])),
            e.stroke();
        }
      },
    };
  }
  function Me(r = "sort_key") {
    return {
      draw(t, i, n) {
        let s = new Te.Conrec(),
          { graph: a, layout: h } = this,
          c = [],
          l = 0;
        for (let f = -1; f <= a.W; f++) {
          c.push([]);
          for (let _ = -1; _ <= a.H; _++) {
            let g = 1e3;
            if (a.valid(f, _)) {
              let w = a.to_id(f, _);
              (g = n[w][r]), g > l && (l = g), g === void 0 && (g = 1e3);
            }
            c[f + 1].push(g);
          }
        }
        let o = [];
        for (let f = 1; f <= l; f++) o.push(f + 0.5);
        s.contour(
          c,
          0,
          c.length - 1,
          0,
          c[0].length - 1,
          ke(-1, c.length - 1),
          ke(-1, c[0].length - 1),
          o.length,
          o
        );
        let d = s.contourList();
        for (let f = 0; f < o.length; f++) {
          let _ = Math.sqrt(f / o.length);
          (t.strokeStyle = `hsl(${ee(-30, 60, _) | 0}, ${
            ee(30, 10, _) | 0
          }%, ${ee(30, 60, _)}%)`),
            t.beginPath(),
            $(
              t,
              d[f].map((g) => h.xy_scaled([g.x, g.y]))
            ),
            t.stroke();
        }
      },
    };
  }
  var pe = [
      {
        points: [
          [1, 1],
          [3, 1],
          [4, 2],
          [4, 4],
          [1, 4],
        ],
        center: [1.5, 3],
      },
      {
        points: [
          [9, 1],
          [9, 6],
          [7, 6],
          [7, 4],
          [5, 4],
          [5, 2],
          [6, 1],
        ],
        center: [7, 2.5],
      },
      {
        points: [
          [10, 1],
          [15, 1],
          [15, 7],
          [14, 7],
          [14, 8],
          [13, 7],
          [12, 7],
          [12, 6],
          [10, 6],
        ],
        center: [13.5, 3.5],
      },
      {
        points: [
          [16, 1],
          [20, 1],
          [20, 7],
          [19, 7],
          [19, 8],
          [18, 7],
          [16, 7],
        ],
        center: [18.5, 3.5],
      },
      {
        points: [
          [21, 1],
          [25, 1],
          [25, 5],
          [21, 5],
        ],
        center: [23, 3],
      },
      {
        points: [
          [30, 0],
          [33, 0],
          [34, 2],
          [34, 4],
        ],
        center: [32, 1],
      },
      {
        points: [
          [7, 6],
          [9, 6],
          [9, 7],
          [11, 7],
          [11, 8],
          [10, 9],
          [7, 9],
        ],
        center: [8.5, 8],
      },
      {
        points: [
          [10, 9],
          [11, 8],
          [13, 8],
          [13, 7],
          [14, 8],
          [15, 8],
          [15, 9],
          [16, 10],
          [15, 10],
          [15, 11],
          [10, 11],
        ],
        center: [13.5, 9.5],
      },
      {
        points: [
          [16, 8],
          [18, 8],
          [18, 7],
          [19, 8],
          [21, 8],
          [21, 11],
          [16, 11],
          [16, 10],
          [15, 9],
          [16, 9],
        ],
        center: [18.5, 9.5],
      },
      {
        points: [
          [21, 6],
          [25, 6],
          [25, 9],
          [26, 9],
          [26, 10],
          [25, 10],
          [25, 11],
          [21, 11],
        ],
        center: [23.5, 9.5],
      },
      {
        points: [
          [26, 5],
          [33, 8],
          [33, 9],
          [30, 10],
          [27, 13],
          [26, 16],
          [26, 10],
          [26, 9],
        ],
        center: [27.5, 9.5],
      },
      {
        points: [
          [26, 0],
          [28, 0],
          [33, 5],
          [33, 8],
          [26, 5],
        ],
        center: [29.75, 4.5],
      },
      {
        points: [
          [36, 7],
          [36, 2],
          [35, 0],
          [40, 0],
          [40, 7],
          [37, 8],
        ],
        center: [38, 6],
      },
      {
        points: [
          [1, 4],
          [2, 4],
          [2, 15],
          [1, 15],
        ],
        center: [1.5, 11.5],
      },
      {
        points: [
          [3, 5],
          [6, 5],
          [6, 10],
          [3, 10],
        ],
        center: [4.5, 8.5],
      },
      {
        points: [
          [13, 11],
          [15, 11],
          [15, 16],
          [13, 16],
        ],
        center: [13.5, 13.5],
      },
      {
        points: [
          [33.5, 13],
          [34, 11],
          [35, 10],
          [35, 8],
          [36, 7],
          [37, 8],
          [40, 7],
          [40, 15],
        ],
        center: [37, 12],
      },
      {
        points: [
          [1, 15],
          [6, 15],
          [6, 19],
          [1, 19],
        ],
        center: [1.5, 16],
      },
      {
        points: [
          [7, 15],
          [10, 15],
          [12, 16],
          [12, 19],
          [7, 19],
        ],
        center: [10, 16.5],
      },
      {
        points: [
          [13, 16],
          [15, 16],
          [15, 19],
          [13, 19],
        ],
        center: [14, 17],
      },
      {
        points: [
          [16, 12],
          [20, 12],
          [20, 19],
          [16, 19],
        ],
        center: [18, 17],
      },
      {
        points: [
          [21, 12],
          [25, 12],
          [25, 19],
          [21, 19],
        ],
        center: [23, 15],
      },
      {
        points: [
          [26, 16],
          [27, 13],
          [30, 10],
          [33, 9],
          [32, 11],
          [31, 12],
          [30, 16],
          [29, 16],
          [29, 17],
          [30, 17],
          [30, 19],
          [31, 20],
          [26, 20],
        ],
        center: [28, 16],
      },
      {
        points: [
          [29, 16],
          [33, 16],
          [33, 17],
          [29, 17],
        ],
        center: [31, 16.5],
      },
      {
        points: [
          [32, 16],
          [33.5, 13],
          [40, 15],
          [40, 20],
          [33, 20],
          [32, 18],
          [32, 17],
          [33, 17],
          [33, 16],
        ],
        center: [34.5, 16],
      },
      {
        points: [
          [2, 11],
          [2, 12],
          [3, 12],
          [3, 14],
          [9, 14],
          [9, 10],
          [3, 10],
          [3, 11],
        ],
        center: [4, 11.5],
      },
      {
        points: [
          [3, 1],
          [4, 2],
          [5, 2],
          [6, 1],
        ],
        center: [4.5, 1.5],
      },
      {
        points: [
          [9, 2],
          [9, 3],
          [10, 3],
          [10, 2],
        ],
        center: [9.5, 2.5],
      },
      {
        points: [
          [15, 3],
          [15, 4],
          [16, 4],
          [16, 3],
        ],
        center: [15.5, 3.5],
      },
      {
        points: [
          [20, 2],
          [20, 3],
          [21, 3],
          [21, 2],
        ],
        center: [20.5, 2.5],
      },
      {
        points: [
          [23, 5],
          [23, 6],
          [24, 6],
          [24, 5],
        ],
        center: [23.5, 5.5],
      },
      {
        points: [
          [6, 17],
          [6, 18],
          [7, 18],
          [7, 17],
        ],
        center: [6.5, 17.5],
      },
      {
        points: [
          [10, 12],
          [10, 15],
          [12, 16],
          [12, 14],
          [13, 14],
          [13, 13],
          [12, 13],
          [12, 12],
        ],
        center: [11.5, 13.5],
      },
      {
        points: [
          [15, 17],
          [15, 18],
          [16, 18],
          [16, 17],
        ],
        center: [15.5, 17.5],
      },
      {
        points: [
          [20, 16],
          [20, 17],
          [21, 17],
          [21, 16],
        ],
        center: [20.5, 16.5],
      },
      {
        points: [
          [23, 11],
          [23, 12],
          [24, 12],
          [24, 11],
        ],
        center: [23.5, 11.5],
      },
    ],
    Ue = [
      {
        points: [
          [1, 1],
          [3, 1],
          [4, 2],
          [4, 4],
          [1, 4],
        ],
        center: [1.5, 3.5],
      },
      {
        points: [
          [9, 1],
          [9, 6],
          [7, 6],
          [7, 4],
          [5, 4],
          [5, 2],
          [6, 1],
        ],
        center: [6, 1.5],
      },
      {
        points: [
          [10, 1],
          [15, 1],
          [15, 7],
          [14, 7],
          [14, 8],
          [13, 7],
          [12, 7],
          [12, 6],
          [10, 6],
        ],
        center: [10.5, 2.5],
      },
      {
        points: [
          [16, 1],
          [20, 1],
          [20, 7],
          [19, 7],
          [19, 8],
          [18, 7],
          [16, 7],
        ],
        center: [16.5, 3.5],
      },
      {
        points: [
          [21, 1],
          [25, 1],
          [25, 5],
          [21, 5],
        ],
        center: [21.5, 2.5],
      },
      {
        points: [
          [30, 0],
          [33, 0],
          [34, 2],
          [34, 4],
        ],
        center: [13.5, 9.5],
      },
      {
        points: [
          [7, 6],
          [9, 6],
          [9, 7],
          [11, 7],
          [11, 8],
          [10, 9],
          [7, 9],
        ],
        center: [8.5, 7.5],
      },
      {
        points: [
          [10, 9],
          [11, 8],
          [13, 8],
          [13, 7],
          [14, 8],
          [15, 8],
          [15, 9],
          [16, 10],
          [15, 10],
          [15, 11],
          [10, 11],
        ],
        center: [13.5, 6.5],
      },
      {
        points: [
          [16, 8],
          [18, 8],
          [18, 7],
          [19, 8],
          [21, 8],
          [21, 11],
          [16, 11],
          [16, 10],
          [15, 9],
          [16, 9],
        ],
        center: [18.5, 6.5],
      },
      {
        points: [
          [21, 6],
          [25, 6],
          [25, 9],
          [26, 9],
          [26, 10],
          [25, 10],
          [25, 11],
          [21, 11],
        ],
        center: [23.5, 7],
      },
      {
        points: [
          [26, 5],
          [33, 8],
          [33, 9],
          [30, 10],
          [27, 13],
          [26, 16],
          [26, 10],
          [26, 9],
        ],
        center: [23.5, 9.5],
      },
      {
        points: [
          [26, 0],
          [28, 0],
          [33, 5],
          [33, 8],
          [26, 5],
        ],
        center: [18.5, 9.5],
      },
      {
        points: [
          [36, 7],
          [36, 2],
          [35, 0],
          [40, 0],
          [40, 7],
          [37, 8],
        ],
        center: [16.5, 9.5],
      },
      {
        points: [
          [1, 4],
          [2, 4],
          [2, 15],
          [1, 15],
        ],
        center: [1.5, 11.5],
      },
      {
        points: [
          [3, 5],
          [6, 5],
          [6, 10],
          [3, 10],
        ],
        center: [11, 9],
      },
      {
        points: [
          [13, 11],
          [15, 11],
          [15, 16],
          [13, 16],
        ],
        center: [14, 13.5],
      },
      {
        points: [
          [33.5, 13],
          [34, 11],
          [35, 10],
          [35, 8],
          [36, 7],
          [37, 8],
          [40, 7],
          [40, 15],
        ],
        center: [26.5, 9.5],
      },
      {
        points: [
          [1, 15],
          [6, 15],
          [6, 19],
          [1, 19],
        ],
        center: [1.5, 15.5],
      },
      {
        points: [
          [7, 15],
          [10, 15],
          [12, 16],
          [12, 19],
          [7, 19],
        ],
        center: [8.5, 17.5],
      },
      {
        points: [
          [13, 16],
          [15, 16],
          [15, 19],
          [13, 19],
        ],
        center: [14.5, 17.5],
      },
      {
        points: [
          [16, 12],
          [20, 12],
          [20, 19],
          [16, 19],
        ],
        center: [19.5, 16.5],
      },
      {
        points: [
          [21, 12],
          [25, 12],
          [25, 19],
          [21, 19],
        ],
        center: [23.5, 12.5],
      },
      {
        points: [
          [26, 16],
          [27, 13],
          [30, 10],
          [33, 9],
          [32, 11],
          [31, 12],
          [30, 16],
          [29, 16],
          [29, 17],
          [30, 17],
          [30, 19],
          [31, 20],
          [26, 20],
        ],
        center: [30, 4.5],
      },
      {
        points: [
          [29, 16],
          [33, 16],
          [33, 17],
          [29, 17],
        ],
        center: [29, 16.5],
      },
      {
        points: [
          [32, 16],
          [33.5, 13],
          [40, 15],
          [40, 20],
          [33, 20],
          [32, 18],
          [32, 17],
          [33, 17],
          [33, 16],
        ],
        center: [33, 16.5],
      },
      {
        points: [
          [2, 11],
          [2, 12],
          [3, 12],
          [3, 14],
          [9, 14],
          [9, 10],
          [3, 10],
          [3, 11],
        ],
        center: [3.5, 11.5],
      },
      {
        points: [
          [3, 1],
          [4, 2],
          [5, 2],
          [6, 1],
        ],
        center: [3.5, 1.5],
      },
      {
        points: [
          [9, 2],
          [9, 3],
          [10, 3],
          [10, 2],
        ],
        center: [8.5, 2.5],
      },
      {
        points: [
          [15, 3],
          [15, 4],
          [16, 4],
          [16, 3],
        ],
        center: [14.5, 3.5],
      },
      {
        points: [
          [20, 2],
          [20, 3],
          [21, 3],
          [21, 2],
        ],
        center: [19.5, 2.5],
      },
      {
        points: [
          [23, 5],
          [23, 6],
          [24, 6],
          [24, 5],
        ],
        center: [23.5, 4.5],
      },
      {
        points: [
          [6, 17],
          [6, 18],
          [7, 18],
          [7, 17],
        ],
        center: [5, 17.5],
      },
      {
        points: [
          [10, 12],
          [10, 15],
          [12, 16],
          [12, 14],
          [13, 14],
          [13, 13],
          [12, 13],
          [12, 12],
        ],
        center: [11.5, 13.5],
      },
      {
        points: [
          [15, 17],
          [15, 18],
          [16, 18],
          [16, 17],
        ],
        center: [16.5, 17.5],
      },
      {
        points: [
          [20, 16],
          [20, 17],
          [21, 17],
          [21, 16],
        ],
        center: [21.5, 16.5],
      },
      {
        points: [
          [23, 11],
          [23, 12],
          [24, 12],
          [24, 11],
        ],
        center: [37, 7.5],
      },
    ];
  function we(r) {
    function e(t, i) {
      r._edges[t].push(i), r._edges[i].push(t);
    }
    e(0, 26),
      e(26, 1),
      e(1, 27),
      e(27, 2),
      e(2, 28),
      e(28, 3),
      e(3, 29),
      e(29, 4),
      e(4, 30),
      e(0, 13),
      e(13, 25),
      e(25, 14),
      e(1, 6),
      e(6, 7),
      e(2, 7),
      e(7, 8),
      e(3, 8),
      e(8, 9),
      e(30, 9),
      e(9, 10),
      e(9, 35),
      e(10, 11),
      e(12, 16),
      e(16, 24),
      e(13, 17),
      e(17, 31),
      e(31, 18),
      e(18, 32),
      e(32, 15),
      e(7, 15),
      e(15, 19),
      e(19, 33),
      e(33, 20),
      e(20, 34),
      e(34, 21),
      e(35, 21),
      e(10, 22),
      e(22, 23),
      e(23, 24);
  }
  function Ne(r) {
    function e(t, i) {
      r._edges[t].push(i), r._edges[i].push(t);
    }
    e(0, 26),
      e(26, 1),
      e(1, 27),
      e(1, 6),
      e(6, 27),
      e(2, 27),
      e(2, 28),
      e(2, 7),
      e(28, 3),
      e(3, 29),
      e(29, 4),
      e(4, 30),
      e(3, 8),
      e(6, 14),
      e(7, 5),
      e(7, 28),
      e(14, 5),
      e(5, 12),
      e(12, 11),
      e(8, 11),
      e(30, 9),
      e(9, 10),
      e(9, 11),
      e(0, 13),
      e(13, 25),
      e(13, 17),
      e(17, 31),
      e(10, 21),
      e(10, 11),
      e(8, 29),
      e(31, 18),
      e(18, 32),
      e(32, 15),
      e(15, 5),
      e(15, 19),
      e(19, 33),
      e(33, 20),
      e(20, 34),
      e(34, 21),
      e(10, 16),
      e(16, 22),
      e(16, 23),
      e(22, 23),
      e(23, 24),
      e(24, 35);
  }
  function oe(r, e, t, i) {
    let n = new N(e.length);
    (n._center = []),
      (n._paths = []),
      (n.edge_weight = function (o, d) {
        let f = this._center[o],
          _ = this._center[d],
          g = f[0] - _[0],
          w = f[1] - _[1];
        return Math.sqrt(g * g + w * w);
      });
    let s = new V(n, 15);
    function a(o) {
      return o.map((d) => d * s.SCALE);
    }
    (s.tile_center = (o) => a(n._center[o])),
      (s.tile_shape = (o) => n._paths[o].map(a));
    function h(o) {
      return { x: o[0], y: o[1] };
    }
    s.pixel_to_tile = (o) => {
      let d = { x: o[0] / s.SCALE, y: o[1] / s.SCALE };
      for (let f = 0; f < e.length; f++)
        if ($e(d, e[f].points.map(h))) return f;
      return -1;
    };
    for (let o = 0; o < e.length; o++) {
      let d = e[o].center;
      (n._center[o] = d),
        (n._paths[o] = e[o].points.map(function (f) {
          return [f[0] - d[0], f[1] - d[1]];
        })),
        (n._edges[o] = []);
    }
    t(n);
    let c = new M([14]),
      l = { id: 12 };
    return new E(r, n, c, s, ...i(c, l));
  }
  oe("#diagram-intro", pe, we, (r, e) => [
    ne(),
    u.base(ae),
    X(3, 1 / 0, { fillStyle: "hsla(60, 10%, 50%, 10%)" }),
    P(() => e.id, { lineWidth: 11, strokeStyle: "hsla(280, 20%, 70%, 0.7)" }),
    u.draggableMarker(y.blob(15), r.starts, 0),
    u.draggableMarker(y.cross(13), e, "id"),
  ]);
  function le(r, e, t) {
    let i = document.querySelector(r);
    function n(s, a) {
      i.addEventListener(s, a);
    }
    n("mouseover", e),
      n("mouseout", t),
      n("mousedown", e),
      n("mouseup", t),
      n("touchstart", (s) => {
        e(), s.preventDefault();
      }),
      n("touchend", (s) => {
        t(), s.preventDefault();
      }),
      n("touchmove", (s) => {
        s.preventDefault();
      });
  }
  function Ve() {
    function r(c, l) {
      return {
        draw(o, d, f) {
          c() && l.draw?.call(this, o, d, f);
        },
        draw_tile(o, d, f, _) {
          c() && l.draw_tile?.call(this, o, d, f, _);
        },
      };
    }
    let e = !1,
      t = !1,
      i = oe("#diagram-graphs1-over", pe, we, (c, l) => [
        Ge(),
        r(() => !e, ne()),
        r(() => !e, u.base(ae)),
        re(),
        r(
          () => t,
          P(() => l.id, {
            strokeStyle: "hsla(280, 20%, 70%, 0.7)",
            lineWidth: 11,
          })
        ),
        X(7),
      ]);
    function n() {
      (e = !0), i.redraw();
    }
    function s() {
      (e = !1), i.redraw();
    }
    function a() {
      (t = !0), i.redraw();
    }
    function h() {
      (t = !1), i.redraw();
    }
    le("#show-graphs1-different-map", n, s),
      le("#show-graphs1-path-trace", a, h);

    le("#show-graphs1-different-map2", n, s),
      le("#show-graphs1-path-trace2", a, h);
  }
  T(Ve);
  function Ye() {
    oe("#diagram-graphs2-navmesh", pe, we, (o, d) => [
      ne(),
      u.base(ae),
      re(),
      X(7),
    ]),
      oe("#diagram-graphs2-waypoints", Ue, Ne, (o, d) => [
        ne(),
        u.base(ae),
        re(),
        X(7),
      ]);

      

    

      
    let r = new L(40, 20),
      e = new D(r, 15),
      t = { id: r.to_id(38, 10) },
      i = new M(
        [r.to_id(7, 11)],
        (o) => !1,
        (o, d) => ((d.h = ie(r, t.id, o)), d.cost_so_far + 1.01 * d.h)
      );
    [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 40, 49, 55, 60, 65, 80, 84, 95, 105, 120, 124, 129,
      140, 145, 160, 162, 163, 164, 165, 166, 169, 175, 180, 185, 200, 202, 206,
      209, 215, 220, 221, 222, 224, 225, 240, 242, 246, 249, 250, 251, 255, 260,
      265, 280, 282, 286, 291, 292, 294, 295, 296, 297, 299, 300, 305, 320, 322,
      326, 335, 345, 360, 362, 366, 367, 368, 369, 400, 402, 409, 415, 425, 440,
      449, 450, 451, 452, 455, 456, 457, 458, 459, 460, 461, 462, 464, 465, 480,
      482, 489, 492, 495, 500, 505, 520, 522, 529, 535, 540, 545, 560, 562, 563,
      564, 565, 566, 567, 568, 569, 572, 575, 580, 585, 600, 606, 612, 615, 620,
      625, 640, 646, 652, 655, 665, 680, 692, 700, 705, 720, 726, 732, 735, 740,
      745, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773,
      774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 35, 77, 149,
      158, 227, 230, 308, 311, 389, 427, 557, 594, 676,
    ].forEach((o) => r.set_tile_weight(o, 1 / 0)),
      [
        26, 27, 29, 30, 31, 32, 36, 37, 38, 39, 66, 67, 70, 71, 72, 75, 76, 78,
        79, 106, 107, 108, 109, 112, 113, 116, 117, 118, 119, 146, 147, 148,
        150, 153, 156, 157, 159, 186, 187, 188, 189, 190, 191, 196, 197, 198,
        199, 226, 228, 229, 231, 232, 235, 236, 237, 238, 239, 266, 267, 268,
        269, 270, 271, 272, 276, 277, 278, 279, 306, 307, 309, 310, 312, 316,
        317, 318, 319, 346, 347, 348, 349, 350, 351, 352, 356, 357, 388, 390,
        391, 426, 428, 429, 466, 467, 468, 506, 507, 546, 586, 626,
      ].forEach((o) => r.set_tile_weight(o, 2)),
      [
        355, 358, 359, 392, 395, 396, 397, 398, 399, 430, 431, 432, 435, 436,
        437, 438, 439, 469, 470, 471, 475, 476, 477, 478, 479, 508, 509, 510,
        514, 515, 516, 517, 518, 519, 547, 548, 549, 550, 553, 554, 555, 556,
        558, 559, 587, 588, 589, 590, 593, 595, 596, 597, 598, 599, 627, 628,
        629, 632, 633, 634, 635, 636, 637, 638, 639, 666, 667, 668, 673, 674,
        675, 677, 678, 679, 706, 707, 708, 709, 712, 713, 714, 715, 716, 717,
        718, 719, 746, 747, 748, 749, 752, 753, 754, 755, 756, 757, 758, 759,
        786, 787, 788, 789, 790, 793, 794, 795, 796, 797, 798, 799,
      ].forEach((o) => r.set_tile_weight(o, 3)),
      [
        28, 33, 34, 68, 69, 73, 74, 110, 111, 114, 115, 151, 152, 154, 155, 192,
        193, 194, 195, 233, 234, 273, 274, 275, 313, 314, 315, 353, 354, 393,
        394, 433, 434, 472, 473, 474, 511, 512, 513, 551, 552, 591, 592, 630,
        631, 710, 711, 750, 751, 791, 792,
      ].forEach((o) => r.set_tile_weight(o, 20)),
      new E(
        "#diagram-graphs2-grid",
        r,
        i,
        e,
        u.base({
          reached: { fillStyle: "hsl(0, 10%, 95%)" },
          2: {
            fillStyle: "hsl(110, 40%, 80%)",
            strokeStyle: "hsl(110, 40%, 80%)",
            lineWidth: 0.5,
          },
          3: {
            fillStyle: "hsl(60, 50%, 80%)",
            strokeStyle: "hsl(60, 50%, 80%)",
            lineWidth: 0.5,
          },
          [1 / 0]: {
            fillStyle: "hsl(110, 20%, 60%)",
            strokeStyle: "hsl(110, 20%, 60%)",
          },
          20: {
            fillStyle: "hsl(200, 50%, 70%)",
            strokeStyle: "hsl(200, 50%, 70%)",
            lineWidth: 0.5,
          },
        }),
        P(() => t.id, { strokeStyle: "hsl(280, 30%, 70%)", lineWidth: 5 }),
        re(4),
        X(3.5, 20)
      );
    let n = document.querySelector("#diagram-graphs2-waypoints"),
      s = document.querySelector("#diagram-graphs2-grid");

      let n2 = document.querySelector("#diagram-graphs2-waypoints2"),
      s2 = document.querySelector("#diagram-graphs2-grid2");
    function a() {
      n.classList.add("show");
      n2.classList.add("show");
    }
    function h() {
      n.classList.remove("show");
      n2.classList.remove("show");
    }
    function c() {
      s.classList.add("show");
      s2.classList.add("show");
    }
    function l() {
      s.classList.remove("show");
      s2.classList.remove("show");
    }
    le("#show-graphs2-waypoints", a, h), le("#show-graphs2-grid", c, l);
    le("#show-graphs2-waypoints2", a, h), le("#show-graphs2-grid2", c, l);
  }
  T(Ye);
  var xe = [
    21, 22, 51, 52, 81, 82, 93, 94, 111, 112, 123, 124, 133, 134, 141, 142, 153,
    154, 163, 164, 171, 172, 173, 174, 175, 183, 184, 193, 194, 201, 202, 203,
    204, 205, 213, 214, 223, 224, 243, 244, 253, 254, 273, 274, 283, 284, 303,
    304, 313, 314, 333, 334, 343, 344, 373, 374, 403, 404, 433, 434,
  ];
  function Je() {
    let r = new L(30, 15);
    xe.forEach((s) => {
      r.set_tile_weight(s, 1 / 0);
    });
    let e = new D(r, 20),
      t = new M([r.to_id(8, 7)]),
      i = new E(
        "#diagram-frontier",
        r,
        t,
        e,
        u.base(),
        u.frontierTiles(),
        u.editable(),
        u.draggableMarker(y.blob(11), t.starts, 0)
      ),
      n = 0;
    (t.exit_now = (s, a) => a[s.current].cost_so_far >= n),
      fe("#diagram-frontier", {
        min: 0,
        max: 60,
        get value() {
          return n;
        },
        set value(s) {
          (n = s), i.redraw();
        },
        animationFrameMs: 1e3 / 7,
      }).setSliderPosition(3);
  }
  T(Je);
  function Xe() {
    let r = new L(9, 4),
      e = new D(r, 600 / 9),
      t = new M([r.to_id(3, 1)]),
      i = new E(
        "#diagram-expansion",
        r,
        t,
        e,
        u.base(He),
        u.frontierTiles(),
        u.editable(),
        u.numericLabels("visit_order", "hsl(0, 10%, 80%)"),
        u.neighborTiles(),
        u.draggableMarker(y.blob(20), t.starts, 0)
      );
    te("#diagram-expansion", [i]),
      (document.querySelector("#diagram-expansion .step_back").textContent =
        "< Step backward"),
      (document.querySelector("#diagram-expansion .step_forward").textContent =
        "Step forward >");
  }
  T(Xe);
  function ze() {
    let r = new L(30, 15),
      e = new D(r, 20);
    xe.forEach((s) => {
      r.set_tile_weight(s, 1 / 0);
    });
    let t = { id: r.to_id(23, 4) },
      i = new M([r.to_id(8, 7)]),
      n = new E(
        "#diagram-path-reconstruction",
        r,
        i,
        e,
        u.base({
          reached: {},
          [1 / 0]: {
            fillStyle: "hsl(60, 5%, 50%)",
            strokeStyle: "hsl(60, 5%, 50%)",
            lineWidth: 1.5,
          },
        }),
        u.editable(),
        u.parentPointers(!1),
        P(() => t.id),
        u.draggableMarker(y.blob(14), i.starts, 0),
        u.draggableMarker(y.cross(9), t, "id"),
        Fe(() => t.id, "crosshair")
      );
  }
  T(ze);
  function Qe() {
    let r = new L(15, 15),
      e = new D(r, 19),
      t = { id: r.to_id(8, 9) },
      i = new M([r.to_id(2, 6)]),
      n = new E(
        "#diagram-early-exit-false",
        r,
        i,
        e,
        u.base(),
        u.editable(),
        P(() => t.id, O),
        u.numericLabels("cost_so_far"),
        u.draggableMarker(y.blob(10), i.starts, 0),
        u.draggableMarker(y.cross(9), t, "id")
      ),
      s = new M(i.starts, (h) => t.id === h.current),
      a = new E(
        "#diagram-early-exit-true",
        r,
        s,
        e,
        u.base(),
        u.frontierTiles(),
        u.editable(),
        P(() => t.id, O),
        u.numericLabels("cost_so_far"),
        u.draggableMarker(y.blob(10), s.starts, 0),
        u.draggableMarker(y.cross(9), t, "id")
      );
    n.linkTo(a);
  }
  T(Qe);
  function Ze() {
    let r = new L(10, 10),
      e = new D(r, 28),
      t = new M([r.to_id(1, 4)]),
      i = { id: r.to_id(8, 5) };
    [71, 72, 73, 81, 82, 83].forEach((h) => r.set_tile_weight(h, 1 / 0)),
      [
        14, 15, 24, 25, 26, 34, 35, 36, 37, 43, 44, 45, 46, 47, 53, 54, 55, 56,
        57, 64, 65, 66, 74, 75, 76, 84, 85,
      ].forEach((h) => r.set_tile_weight(h, 5));
    let n = r.make_proxy();
    n.edge_weight = (h, c) => 1;
    let s = new E(
        "#diagram-weights-false",
        n,
        t,
        e,
        u.base(se),
        u.editable(1, 5, 1 / 0),
        P(() => i.id, O),
        u.numericLabels("cost_so_far"),
        u.draggableMarker(y.blob(15), t.starts, 0),
        u.draggableMarker(y.cross(12), i, "id")
      ),
      a = new E(
        "#diagram-weights-true",
        r,
        t,
        e,
        u.base(se),
        u.editable(1, 5, 1 / 0),
        P(() => i.id, O),
        u.numericLabels("cost_so_far"),
        u.draggableMarker(y.blob(15), t.starts, 0),
        u.draggableMarker(y.cross(12), i, "id")
      );
    s.linkTo(a);
  }
  T(Ze);
  function Ke() {
    let r = new L(15, 15),
      e = new D(r, 19),
      t = new M([r.to_id(2, 8)]),
      i = { id: r.to_id(13, 6) };
    [
      0, 1, 2, 15, 16, 17, 30, 31, 36, 37, 38, 39, 45, 46, 51, 52, 53, 54, 60,
      61, 65, 66, 67, 68, 69, 70, 75, 80, 81, 82, 83, 84, 85, 95, 96, 97, 98,
      100, 110, 111, 113, 114, 115, 125, 126, 127, 128, 130, 140, 141, 143, 144,
      145, 155, 156, 157, 158, 159, 160, 171, 172, 173, 174, 180, 186, 187, 188,
      189, 195, 196, 197, 210, 211, 212, 213,
    ].forEach((h) => r.set_tile_weight(h, 5));
    let n = r.make_proxy();
    n.edge_weight = (h, c) => 1;
    let s = new E(
        "#diagram-contour-unweighted",
        n,
        t,
        e,
        u.base(se),
        u.frontierTiles(),
        u.editable(1, 5, 1 / 0),
        P(() => i.id, O),
        Me(),
        u.draggableMarker(y.blob(10), t.starts, 0),
        u.draggableMarker(y.cross(9), i, "id")
      ),
      a = new E(
        "#diagram-contour-weighted",
        r,
        t,
        e,
        u.base(se),
        u.frontierTiles(),
        u.editable(1, 5, 1 / 0),
        P(() => i.id, O),
        Me(),
        u.draggableMarker(y.blob(10), t.starts, 0),
        u.draggableMarker(y.cross(9), i, "id")
      );
    s.linkTo(a), te("#diagram-contour", [s, a]).setSliderPosition(67);
  }
  T(Ke);
  function Ee(r, e) {
    let t = new L(15, 15),
      i = new D(t, 19),
      n = { id: t.to_id(14, 2) };
    e.forEach((l) => t.set_tile_weight(l, 1 / 0));
    let s = new M([t.to_id(0, 12)], (l) => l.current == n.id),
      a = new E(
        r + " .left",
        t,
        s,
        i,
        u.base(),
        u.frontierTiles(),
        u.editable(),
        P(() => n.id, O),
        u.draggableMarker(y.blob(10), s.starts, 0),
        u.draggableMarker(y.cross(9), n, "id")
      ),
      h = new M(s.starts, s.exit_now, (l, o) => ((o.h = ie(t, n.id, l)), o.h));
    h.allow_reprioritize = !1;
    let c = new E(
      r + " .right",
      t,
      h,
      i,
      u.base(),
      u.frontierTiles(),
      u.editable(),
      P(() => n.id, O),
      u.draggableMarker(y.blob(10), s.starts, 0),
      u.draggableMarker(y.cross(9), n, "id")
    );
    a.linkTo(c), te(r, [a, c]).setSliderPosition(10);
  }
  T(() => {
    Ee("#diagram-greedybestfirst", []),
      Ee(
        "#diagram-greedybestfirst-complex",
        [
          32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 57, 72, 87, 102, 117, 132,
          147, 162, 177, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
        ]
      );
  });
  function et() {
    let r = new L(15, 15),
      e = new D(r, 19),
      t = { id: r.to_id(11, 1) },
      i = -1;
    [
      35, 36, 37, 38, 39, 40, 41, 42, 57, 72, 87, 102, 117, 132, 147, 162, 177,
      182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192,
    ].forEach((d) => r.set_tile_weight(d, 1 / 0));
    let n = [r.to_id(0, 12)],
      s = new M(n, (d) => d.current == t.id),
      a = new E(
        "#diagram-astar-1",
        r,
        s,
        e,
        u.base(),
        u.editable(),
        P(() => t.id, O),
        u.numericLabels("cost_so_far"),
        _e((d) => {
          i = d;
        }),
        P(() => i),
        u.draggableMarker(y.blob(8), n, 0),
        u.draggableMarker(y.cross(7), t, "id")
      ),
      h = new M(n, s.exit_now, (d, f) => ((f.h = ie(r, t.id, d)), f.h));
    h.allow_reprioritize = !1;
    let c = new E(
        "#diagram-astar-2",
        r,
        h,
        e,
        u.base(),
        u.editable(),
        P(() => t.id, O),
        u.numericLabels("h"),
        _e((d) => {
          i = d;
        }),
        Se(
          () => i,
          () => t.id
        ),
        u.draggableMarker(y.blob(8), n, 0),
        u.draggableMarker(y.cross(7), t, "id")
      ),
      l = new M(
        n,
        s.exit_now,
        (d, f) => ((f.h = ie(r, t.id, d)), f.cost_so_far + 1.01 * f.h)
      ),
      o = new E(
        "#diagram-astar-3",
        r,
        l,
        e,
        u.base(),
        u.editable(),
        P(() => t.id, O),
        u.numericLabels("sort_key"),
        _e((d) => {
          i = d;
        }),
        P(() => i),
        Se(
          () => i,
          () => t.id
        ),
        u.draggableMarker(y.blob(8), n, 0),
        u.draggableMarker(y.cross(7), t, "id")
      );
    a.linkTo(c, o);
  }
  T(et);
  function tt() {
    let r = [];
    for (let s = 0; s < 360; s += 5) r.push((s / 180) * Math.PI);
    function e(s, a) {
      return s * 0.9;
    }
    function t(s, a) {
      return (s / 10) * (8 - 1 * Math.cos(a * 3) - 1.5 * Math.sin(a * 5));
    }
    function i(s, a) {
      return (
        t(s, a) * 0.1 +
        (s / 10) * (3 + 8 * Math.exp(-2 * Math.abs(a - Math.PI / 3)))
      );
    }
    function n(s, a) {
      let h = "";
      for (let c = 10; c <= 50; c += 7) {
        let l = r.map((d) => {
            let f = a(c, d);
            return (
              (f * Math.cos(d)).toFixed(2) + "," + (f * Math.sin(d)).toFixed(2)
            );
          }),
          o = `hsl(220 ${2 * c}% ${90 - c / 2}%)`;
        h += `<path d="M ${l.join(" L")} Z" fill="none" stroke-width="${
          0.7 + c / 30
        }" stroke="${o}" stroke-linejoin="round"/>`;
      }
      s.innerHTML = h;
    }
    n(document.querySelector("#overview-bfs"), e),
      n(document.querySelector("#overview-dijkstra"), t),
      n(document.querySelector("#overview-astar"), i);
  }
  T(tt);
  T(() => {
    for (let r of document.querySelectorAll("pre"))
      r.classList.contains("src") ||
        (r.classList.add("src"),
        (r.innerHTML = G(r.innerHTML, [
          "frontier",
          "start",
          "current",
          "reached",
          "came_from",
          "next",
          "goal",
          "path",
          "cost_so_far",
          "new_cost",
          "def",
          "return",
          "while",
          "for",
          "if",
          "break",
        ])));
  });
})();
