const t = "_9271h23"
  , e = "_1hjs881912n";
let n = [15, 31, 47, 63, 79, 95, 111, 127]
  , i = function(t) {
    let e;
    switch (15 & t) {
    case 12:
        return e = 24 + (t >> 4),
        [e, e + 32];
    case 13:
        let n;
        switch (t >> 4) {
        case 0:
            n = 32,
            e = 9;
            break;
        case 2:
        case 3:
            n = 32,
            e = (t >> 4) - 2 + 14;
            break;
        case 6:
            n = 32,
            e = 3;
            break;
        case 4:
            e = 31,
            n = 32;
            break;
        case 5:
            e = 77 + (6 + (t >> 4) & 7),
            n = 8
        }
        return [e, e + n];
    case 15:
        return e = 104 + (t >> 4),
        [e, e + 8];
    default:
        return e = 16 + (15 & t),
        [e, e + 32]
    }
};
const r = [["i159", 2, 12, 127], ["i160", 2, 28, 127], ["i161", 2, 44, 0], ["i162", 2, 60, 0], ["i163", 2, 13, 60], ["i164", 0, 90, 0], ["i165", 2, 15, 127], ["i166", 2, 31, 0], ["i167", 2, 47, 0], ["i168", 2, 63, 0], ["i169", 2, 79, 0], ["i170", 2, 95, 0], ["i171", 2, 111, 0], ["i172", 2, 127, 0], ["i173", 3, "omni", 127, [124, 125]], ["i174", 3, "poly", 127, [126, 127]]]
  , l = ["i181", 0, 11, 127]
  , o = ["i186", 0, 1, 0]
  , u = ["i190", 1, 65, 0]
  , f = ["i191", 1, 66, 0]
  , c = ["i192", 1, 64, 0]
  , a = ["i193", 1, 68, 0]
  , s = ["i201", 1, 83, 0]
  , h = [["i179", 0, 10, 64, !0], ["i180", 0, 7, 127], l, ["i182", 0, 81, 0], ["i183", 0, 82, 0], ["i184", 0, 86, 127], ["i185", 0, 85, 127], o, ["i187", 0, 76, 64], ["i188", 0, 5, 1], ["i189", 0, 37, 0], ["i198", 5, 1, 0], ["i199", 5, 2, 0], ["i200", 5, 3, 8192, !0], u, f, c, a, ["i194", 1, 103, 0], ["i195", 1, 102, 0], ["i197", 4, 0, 0], s, ["i213", 0, 12, 64, !0], ["i214", 0, 13, 64, !0], ["i202", 1, 89, 0], ["channelUnavailableVoicesLabel", 6, 4, 0]];
function d(t) {
    let e;
    return 4 == t[1] || 6 == t[1] || 5 == t[1] ? e = "_06_" : 1 != t[1] && 0 != t[1] || (e = "_05_"),
    e + t[2]
}
const w = [["_04", 0]];
for (let t of h)
    w.push([d(t), t[3]]);
function m(t) {
    let e = at("i136").dataset[t];
    return e
}
function p(t) {
    return new Promise((function(e, n) {
        setTimeout(e, t)
    }
    ))
}
function _(t) {
    return 10 * t / 31250 * 1e3
}
function v(t) {
    return (100 * t).toFixed(2) + "%"
}
function y(t, e) {
    let n = parseInt(t);
    for (; ; ) {
        let t = e();
        if (!/\d/.test(t))
            return [n, t];
        n *= 10,
        n += parseInt(t)
    }
}
function g(t) {
    return "_xy_" + t
}
function M(t) {
    return parseInt(t.substr(4))
}
function b(t, ...e) {
    let n = ""
      , i = 0
      , r = function() {
        let e = t.charAt(i);
        return "" == e || (i += 1),
        e
    }
      , l = 0;
    for (; ; ) {
        let t, i, o, u, f, c, a, s, h = r();
        if ("" == h)
            break;
        if ("%" == h) {
            if (o = r(),
            " " == o || "0" == o ? t = r() : (t = o,
            o = " "),
            /\d/.test(t) ? [u,a] = y(t, r) : (u = null,
            a = t),
            i = "." != a ? a : r(),
            /\d/.test(i)) {
                let[t,e] = y(i, r)
            } else
                f = null,
                c = i;
            switch (c) {
            case "d":
            case "s":
                s = e[l++].toString();
                break;
            case "x":
                s = e[l++].toString(16);
                break;
            case "f":
                {
                    let t = e[l++];
                    s = null != f ? t.toFixed(f) : t.toString();
                    break
                }
            case "%":
                s = "%";
                break;
            case "p":
                s = v(e[l++])
            }
            null != u && (s = s.padStart(u, o)),
            n += s
        } else
            n += h
    }
    return n
}
const k = [126]
  , A = [0, 2, 62]
  , x = new Uint8Array(A)
  , E = new Uint8Array([0, 0])
  , U = x.length + E.length
  , I = new Uint8Array([240])
  , N = new Uint8Array([247]);
function S(t) {
    let e = 0;
    for (let n = 0; n < t.length; ++n)
        e |= t[n] << 7 * n;
    return e
}
function $(t) {
    let e = 0
      , n = 0
      , i = Math.ceil(8 * t.length / 7)
      , r = new Uint8Array(i);
    for (; e != t.length; ) {
        let i = 0
          , l = [];
        for (let n = 0; n < 7; ++n) {
            let r;
            e != t.length ? (r = t[e++],
            l.push(r >> 1 & 127)) : r = 0,
            i |= (1 & r) << n
        }
        r[n] = i,
        r.set(l, n + 1),
        n += 8
    }
    return r
}
function F(t, e, n) {
    return t.set(e, n),
    n + e.length
}
function T(t, e, n) {
    let i = $(n);
    i.length;
    let r = 8 + U + i.length
      , l = new Uint8Array(r)
      , o = 0;
    o = F(l, I, o),
    o = F(l, x, o),
    o = F(l, E, o),
    l[o++] = 2,
    l[o++] = (3 & e) << 5 | t,
    l[o++] = e >> 2 & 127,
    l[o++] = e >> 9 & 127,
    l[o++] = i.length - 1,
    o = F(l, i, o);
    let u = 0;
    for (let t = 1; t < o; ++t)
        u ^= l[t];
    return l[o++] = u,
    o = F(l, N, o),
    l.length,
    l
}
function D(t, e, n) {
    let i = new Uint8Array(3)
      , r = 0;
    return i[r++] = 176 | t,
    i[r++] = e,
    i[r++] = n,
    i
}
function P() {
    return new Uint8Array([240, 126, 0, 6, 1, 247])
}
function O(t, e, n) {
    if (125 == e)
        return D(0, 90, n << 3);
    return D(t, i(e)[1 & n], n >> 1)
}
function j(t, e, n) {
    let i = e + 16;
    return 1 & n && (i += 32),
    D(t, i, n >> 1)
}
function q(t, e) {
    let n = new Uint8Array(2)
      , i = 0;
    return n[i++] = 192 | t,
    n[i++] = e,
    n
}
function L(t, e) {
    let n = new Uint8Array(5 + U)
      , i = 0;
    return i = F(n, I, i),
    i = F(n, x, i),
    i = F(n, E, i),
    n[i++] = t,
    n[i++] = e,
    n[i++] = 0,
    i = F(n, N, i),
    n.length,
    n
}
function C(t) {
    return L(18, t)
}
function R(t) {
    return L(10, t)
}
function B(t) {
    t.length >= 0 && t.length;
    let e = 8 + 4 * t.length
      , n = new Uint8Array(e)
      , i = 0;
    i = F(n, [240, 127, 0, 8, 2, 0, t.length], i);
    for (let e of t) {
        e.t,
        e.t;
        parseInt(65536 * e.t);
        i = F(n, [e.key, parseInt(e.t) % 128, parseInt(128 * e.t) % 128, parseInt(16384 * e.t) % 128], i)
    }
    return n[i++] = 247,
    n.length,
    n
}
async function z(t, e, n, i) {
    let r = 0;
    for (; ; ) {
        let l = i(r);
        if (e.send(l),
        !await X(t, r, n)) {
            r += 1,
            r %= 128;
            break
        }
    }
}
async function V(t, e, n, i) {
    let r = tt(t);
    try {
        await z(r, e, n, i)
    } finally {
        nt(r)
    }
}
function W() {
    let t = new Error(m("i252"));
    return t.name = "TimeoutError",
    t
}
async function G(t, e, n) {
    let i = !et(t);
    const r = (t,e)=>e.every(((e,n)=>e === t[n]));
    for (; ; ) {
        let l = (new Date).getTime()
          , o = await t(n)
          , u = (new Date).getTime();
        if (!o) {
            if (i)
                throw W();
            return
        }
        if (r(o, e))
            return o;
        n -= u - l
    }
}
function J(t, e) {
    return e.every(((e,n,i)=>e == t[n]))
}
function H(t, e) {
    return e.every(((n,i)=>n == t[t.length - e.length + i]))
}
async function K(t, e, n, i) {
    let r, l = !et(t), o = new Uint8Array(2 + U), u = 0;
    u = F(o, I, u),
    u = F(o, x, u),
    u = F(o, E, u),
    o[u++] = 3,
    o.length,
    r = i() + n;
    let f = n;
    for (; ; ) {
        let n;
        n = null !== r ? r - i() : null;
        let u = await t(n);
        if (!u) {
            if (l)
                throw W();
            return !1
        }
        if (!J(u, o))
            continue;
        let c = u[o.length];
        if (u[o.length + 1] == e) {
            if (127 == c)
                return !1;
            if (126 == c)
                return !0;
            if (124 != c) {
                if (123 == c)
                    throw new Error(m("i254"));
                throw new Error(m("i253"))
            }
            r = r - f + 1e4
        }
    }
}
function Q() {
    return (new Date).getTime()
}
async function X(t, e, n) {
    return await K(t, e, n, Q)
}
async function Y(t, e, n, i, r, l) {
    void 0 === r && (r = p),
    void 0 === l && (l = Q);
    let o = Z(e, r);
    try {
        await async function(t, e, n, i, r) {
            let l = 0
              , o = 0
              , u = Math.floor(112);
            for (; l < i.length; ) {
                let f = Math.min(u, i.length - l)
                  , c = T(o, n, i.subarray(l, l + f));
                e.send(c),
                await K(t, o, 100, r) || (l += f,
                o += 1,
                o %= 32,
                n += f)
            }
        }(o, t, n, i, l)
    } finally {
        nt(o)
    }
}
function Z(t, e) {
    let n = []
      , i = []
      , r = function(t) {
        if (n.length) {
            let[e] = n.splice(0, 1);
            e(t.data)
        } else
            i.push(t)
    };
    t && t.addEventListener("midimessage", r);
    let l = function(t) {
        return new Promise((function(r, l) {
            if (i.length) {
                let[t] = i.splice(0, 1);
                r(t.data)
            } else
                n.push(r),
                null != t && e(t).then((function() {
                    let t = n.indexOf(r);
                    t >= 0 && (n.splice(t, 1),
                    r(null))
                }
                ))
        }
        ))
    };
    return l.i = t,
    l.l = r,
    l
}
function tt(t) {
    return Z(t, p)
}
function et(t) {
    return !t.i
}
function nt(t) {
    t.i && t.i.removeEventListener("midimessage", t.l)
}
function it(t, e) {
    return e >= -(1 << t - 1) && e < 1 << t - 1
}
function rt(t, e) {
    return e & 1 << t - 1 && (e -= 1 << t),
    e
}
function lt(t, e, n) {
    it(16, e),
    it(16, n);
    let i = 0;
    return 0 == t || (1 == t ? (i += e >> 1,
    i += -e >> 5) : 2 == t ? (i += e,
    i -= n >>= 1,
    i += n >> 4,
    i += -3 * e >> 6) : 3 == t && (i += e,
    i -= n >>= 1,
    i += -13 * e >> 7,
    i += 3 * n >> 4)),
    i
}
function ot(t, e, n) {
    var i, r;
    return i = 16,
    r = 2 * function(t, e) {
        let n = 1 << t - 1;
        return e >= n ? n - 1 : e < -n ? -n : e
    }(16, (t << e >> 1) + n),
    rt(i, r & (1 << i) - 1)
}
function ut(t, e, n) {
    e || (e = [0, 0]);
    let[i,r] = e;
    it(16, i),
    it(16, r);
    let l = i
      , o = r;
    t.length,
    t.length;
    for (let e = 0; e < t.length; e += 9) {
        let i = t.slice(e, e + 9)
          , r = i[0] >> 4 & 15
          , u = i[0] >> 2 & 3;
        for (let t = 0; t < 16; ++t) {
            let e, f = 1 + (t >> 1);
            e = t % 2 ? i[f] : i[f] >> 4,
            e &= 15,
            e = rt(4, e);
            let c = ot(e, r, lt(u, l, o));
            n(c),
            o = l,
            l = c
        }
    }
    return [l, o]
}
function ft(t) {
    return void 0 === t && (t = {
        o: !0,
        u: !0,
        h: !0,
        m: !0,
        p: !0
    }),
    new Promise((function(e, n) {
        let i, r, l, o = function() {
            r(),
            at("i0").close()
        };
        l = function(t) {
            let n = function(e) {
                let n = at("i2");
                return n.innerText = e,
                n.classList.remove("i283"),
                t.preventDefault(),
                null
            }
              , i = at("i5").value.trim();
            if (i) {
                if (i = parseFloat(i),
                isNaN(i) || i < 0)
                    return n(m("i259"));
                if (2 * i % 1)
                    return n(m("i260"))
            } else
                i = 0;
            let r = at("i7").value.trim();
            if (r) {
                if (r = parseFloat(r),
                isNaN(r) || r % 1)
                    return n(m("i261"));
                if (r <= 0 || r >= 2 ** 32)
                    return n(m("i262"))
            } else
                r = 1;
            let l = at("i9").value.trim();
            if (l) {
                if (l = parseFloat(l),
                isNaN(l))
                    return n(m("i263"));
                l = Math.pow(2, l)
            } else
                l = 1;
            let o = at("i11").checked
              , u = at("i13").checked;
            return e({
                o: i,
                u: r,
                h: l,
                m: o,
                p: u
            })
        }
        ,
        i = function(t) {
            at("i15").removeEventListener("click", o),
            at("i3").removeEventListener("submit", l),
            at("i0").removeEventListener("close", i),
            at("i0").removeEventListener("cancel", r)
        }
        ,
        r = function(t) {
            let e = new Error("Cancelled");
            e.name = "CancelledError",
            n(e)
        }
        ,
        at("i15").addEventListener("click", o),
        at("i3").addEventListener("submit", l),
        at("i3").reset(),
        at("i0").addEventListener("close", i),
        at("i0").addEventListener("cancel", r),
        t.o ? at("i4").classList.remove("i283") : at("i4").classList.add("i283"),
        t.u ? at("i6").classList.remove("i283") : at("i6").classList.add("i283"),
        t.h ? at("i8").classList.remove("i283") : at("i8").classList.add("i283"),
        t.m ? at("i10").classList.remove("i283") : at("i10").classList.add("i283"),
        t.p ? at("i12").classList.remove("i283") : at("i12").classList.add("i283"),
        at("i0").showModal()
    }
    ))
}
async function ct(t) {
    let e = await t.arrayBuffer();
    var n = new OfflineAudioContext(1,1,32e3);
    let i, r = await n.decodeAudioData(e), l = await async function(t, e) {
        if (t.sampleRate == e && 1 == t.numberOfChannels)
            return t;
        var n = t.length * e / t.sampleRate;
        n = Math.ceil(n);
        var i = new OfflineAudioContext(1,n,e)
          , r = i.createBufferSource();
        return r.buffer = t,
        r.connect(i.destination),
        r.start(0),
        await i.startRendering()
    }(r, 32e3), o = l.getChannelData(0), u = await ft();
    if (u.o && o.length % 16) {
        let t = 16 - o.length % 16
          , e = n.createBuffer(1, o.length + t, 32e3);
        e.copyToChannel(o, 0, t),
        o = e.getChannelData(0)
    }
    return i = u.o ? (o.length - 32 * u.o) / 16 : null,
    await $t(1, {
        _: o,
        loop: i,
        u: u.u,
        h: u.h,
        m: u.m,
        p: u.p
    }, [o.buffer])
}
function at(t) {
    return document.getElementById(t)
}
function st(t) {
    let e = t.indexOf("\0");
    return e >= 0 && (t = t.substring(0, e)),
    t
}
let ht = null
  , dt = 0
  , wt = null
  , mt = null
  , pt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17, 18, 19, 19, 20, 20, 21, 21, 22, 23, 23, 24, 24, 25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 36, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 64, 65, 66, 67, 69, 70, 71, 73, 74, 76, 77, 78, 80, 81, 83, 84, 86, 87, 89, 90, 92, 94, 95, 97, 99, 100, 102, 104, 106, 107, 109, 111, 113, 115, 117, 118, 120, 122, 124, 126, 128, 130, 132, 134, 137, 139, 141, 143, 145, 147, 150, 152, 154, 156, 159, 161, 163, 166, 168, 171, 173, 175, 178, 180, 183, 186, 188, 191, 193, 196, 199, 201, 204, 207, 210, 212, 215, 218, 221, 224, 227, 230, 233, 236, 239, 242, 245, 248, 251, 254, 257, 260, 263, 267, 270, 273, 276, 280, 283, 286, 290, 293, 297, 300, 304, 307, 311, 314, 318, 321, 325, 328, 332, 336, 339, 343, 347, 351, 354, 358, 362, 366, 370, 374, 378, 381, 385, 389, 393, 397, 401, 405, 410, 414, 418, 422, 426, 430, 434, 439, 443, 447, 451, 456, 460, 464, 469, 473, 477, 482, 486, 491, 495, 499, 504, 508, 513, 517, 522, 527, 531, 536, 540, 545, 550, 554, 559, 563, 568, 573, 577, 582, 587, 592, 596, 601, 606, 611, 615, 620, 625, 630, 635, 640, 644, 649, 654, 659, 664, 669, 674, 678, 683, 688, 693, 698, 703, 708, 713, 718, 723, 728, 732, 737, 742, 747, 752, 757, 762, 767, 772, 777, 782, 787, 792, 797, 802, 806, 811, 816, 821, 826, 831, 836, 841, 846, 851, 855, 860, 865, 870, 875, 880, 884, 889, 894, 899, 904, 908, 913, 918, 923, 927, 932, 937, 941, 946, 951, 955, 960, 965, 969, 974, 978, 983, 988, 992, 997, 1001, 1005, 1010, 1014, 1019, 1023, 1027, 1032, 1036, 1040, 1045, 1049, 1053, 1057, 1061, 1066, 1070, 1074, 1078, 1082, 1086, 1090, 1094, 1098, 1102, 1106, 1109, 1113, 1117, 1121, 1125, 1128, 1132, 1136, 1139, 1143, 1146, 1150, 1153, 1157, 1160, 1164, 1167, 1170, 1174, 1177, 1180, 1183, 1186, 1190, 1193, 1196, 1199, 1202, 1205, 1207, 1210, 1213, 1216, 1219, 1221, 1224, 1227, 1229, 1232, 1234, 1237, 1239, 1241, 1244, 1246, 1248, 1251, 1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267, 1269, 1270, 1272, 1274, 1275, 1277, 1279, 1280, 1282, 1283, 1284, 1286, 1287, 1288, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1297, 1298, 1299, 1300, 1300, 1301, 1302, 1302, 1303, 1303, 1303, 1304, 1304, 1304, 1304, 1304, 1305, 1305];
function _t(t, e, n) {
    var i = ht.createBufferSource();
    return [i.buffer,mt] = function(t, e, n, i) {
        let r, l;
        i ? (l = 16 * (e.length + i.length) / 9,
        l = Math.max(Math.floor(3 * t), l)) : (e.length,
        l = 16 * e.length / 9),
        r = Math.ceil(32e3 * (l + 4) / t);
        var o = ht.createBuffer(1, r, 32e3);
        let u = o.getChannelData(0)
          , f = t / 32e3
          , c = 0
          , a = [0, 0, 0, 0]
          , s = 0
          , h = 0
          , d = function(t) {
            if (s != l)
                for (a.splice(0, 1),
                a.push(t),
                s += 1; c < s; ) {
                    let t = parseInt(c % 1 * 256)
                      , e = +a[3] * pt[0 + t] + a[2] * pt[256 + t] + a[1] * pt[511 - t] + a[0] * pt[255 - t];
                    e /= 2048,
                    u[h] = e / 32768,
                    h += 1,
                    c += f
                }
        };
        for (n = ut(e, n, d); s != l; )
            n = ut(i, n, d);
        l += 4;
        for (let t = 0; t < 4; ++t)
            d(0);
        return [o, n]
    }(t, e, mt, n),
    i.connect(ht.destination),
    i.start(dt),
    i.v = !1,
    dt += i.buffer.duration,
    i
}
function vt(t) {
    if (!t.parentNode.g)
        return void (t.innerHTML = m("i150"));
    let e = M(t.parentNode.id);
    t.innerHTML = m(e >= 128 ? "i158" : "i150")
}
function yt(t, e) {
    e ? (t.innerHTML = m("i153"),
    t.M = !0,
    t.classList.add("i308")) : (vt(t),
    t.M = !1,
    t.k = null,
    t.classList.remove("i308"))
}
function gt() {
    let t;
    if (wt && wt.length) {
        for (let t of wt)
            t.v = !0,
            t.stop();
        t = wt[0].A,
        yt(t, !1),
        wt = null
    } else
        t = null;
    return t
}
function Mt(t) {
    if (t.M) {
        let e = gt();
        Object.is(e, t)
    }
}
let bt = function(t) {
    return 440 * 2 ** ((t - 69) / 12)
}
  , kt = function(t) {
    let e = t.U
      , n = t.I;
    null == n && (n = function(t, e) {
        let n, i = M(e.id);
        if (i >= 128)
            return 440 * 2 ** ((i - 128 - 69) / 12);
        if (t) {
            let e = at(t);
            null != e.S.N ? n = e.S.N : t.length && e.S.$ && (n = 32e3 / (16 * e.S.$.length / 9))
        }
        return null == n && (n = 440 * 2 ** -.75),
        n
    }(e.value, t));
    let i = 440 * 2 ** -5.75;
    n < i && (n = i);
    let r = 13289.749956516074;
    return n > r && (n = r),
    n
}
  , At = null;
function xt(t) {
    if (ht || (ht = new AudioContext),
    "running" != ht.state)
        return At || ht.resume().then((function() {
            At()
        }
        )),
        void (At = xt.bind(this, t));
    At = null;
    let e, n = this;
    n.M && (e = n.k);
    let i, r = gt(), l = 32e3;
    if (n.parentNode.g && (i = M(n.parentNode.id)),
    i >= 128) {
        if (r && Object.is(n, r))
            return;
        l *= 2 ** ((i - 128 - (Math.log(kt(n.parentNode) / 440) / Math.log(2) * 12 + 69)) / 12)
    } else if (r && Object.is(n, r))
        return;
    yt(n, !0),
    n.k = l;
    let o = document.getElementById(n.F).S;
    if (!o.T.length)
        return void yt(n, !1);
    let u = o.$;
    dt = ht.currentTime,
    mt = null,
    wt = [],
    wt.push(_t(l, o.T, u)),
    wt[wt.length - 1].addEventListener("ended", (function(t) {
        if (this.v)
            return void (wt || ht.suspend());
        let e = wt.indexOf(this)
          , n = wt.splice(e, 1)[0];
        Object.is(n, this),
        yt(this.A, !1),
        ht.suspend()
    }
    )),
    wt[wt.length - 1].A = n
}
function Et(t) {
    return /^\s*[-+]?\s*\d+\s*$/.test(t) || /^\s*[-+]?\s*0x[0-9A-Fa-f]+\s*$/.test(t) ? Number(t) : NaN
}
let Ut, It = 0, Nt = {};
function St(t) {
    let e = t.data
      , [n,i] = Nt["id_" + e.id];
    e.error ? i(e.error) : n(e.result)
}
function $t(t, e, n) {
    return new Promise((function(i, r) {
        Ut.postMessage({
            D: t,
            P: e,
            id: It
        }, n),
        Nt["id_" + It] = [i, r],
        It += 1
    }
    ))
}
function Ft(t) {
    let e = function(t) {
        let e = null;
        return e = Math.round((Math.log(t / 440) / Math.log(2) * 12 + 69) * (1 << 21)),
        [16383 & e, e >> 14]
    }(t);
    return e || (e = [0, 7680]),
    e
}
function Tt() {
    let t = [];
    for (let e of document.getElementsByClassName("i306"))
        e.g && t.push(e);
    return t
}
function Dt() {
    let t = [];
    for (let e of document.getElementsByClassName("i307"))
        e.O && t.push(e);
    return t
}
function Pt(t, e) {
    e.parentNode.insertBefore(t, e)
}
function Ot(t) {
    t.parentNode.removeChild(t)
}
let jt = function(t, e) {
    let n = document.createElement("div");
    return n.classList.add("i318"),
    n.addEventListener("dragenter", (function(t) {
        t.dataTransfer.dropEffect = "move",
        n.style.backgroundColor = "grey",
        t.preventDefault()
    }
    )),
    n.addEventListener("dragleave", (function(t) {
        n.style.backgroundColor = "inherit",
        t.preventDefault()
    }
    )),
    n.addEventListener("dragover", (function(t) {
        t.preventDefault()
    }
    )),
    n.addEventListener("drop", (function(i) {
        n.style.backgroundColor = "inherit";
        let r = at(i.dataTransfer.getData("text/plain"));
        r != e && (Ot(r),
        e ? Pt(r, e) : at("i135").appendChild(r),
        t()),
        i.preventDefault()
    }
    )),
    n
};
function qt(t) {
    let e = kt(t);
    return {
        j: 12 * Math.log2(e / 440) + 69,
        q: t.L,
        C: t.R,
        B: t.V,
        W: t.G,
        J: t.H,
        K: t.X,
        Y: t.Z,
        tt: t.et,
        nt: t.it
    }
}
async function Lt(t, e, n) {
    let[i,r] = Ft(bt(n.j))
      , l = function(t, e, n) {
        let i = new Uint8Array(9 + U)
          , r = 0;
        return r = F(i, I, r),
        r = F(i, x, r),
        r = F(i, E, r),
        i[r++] = 4,
        i[r++] = 127 & t,
        i[r++] = t >> 7 & 127,
        i[r++] = 127 & e,
        i[r++] = e >> 7 & 127,
        i[r++] = 127 & n,
        i[r++] = n >> 7 & 127,
        r = F(i, N, r),
        i.length,
        i
    }(e, i, r);
    t.send(l),
    await p(_(l.length)),
    t.send([160, 0, 0]),
    await p(_(3)),
    l = function(t, e, n, i, r) {
        let l = new Uint8Array(8 + U)
          , o = 0;
        return o = F(l, I, o),
        o = F(l, x, o),
        o = F(l, E, o),
        l[o++] = t < 128 ? 19 : 20,
        l[o++] = 127 & t,
        l[o++] = e,
        l[o++] = n,
        l[o++] = i,
        l[o++] = r,
        o = F(l, N, o),
        l.length,
        l
    }(e, n.q, n.C, n.B, n.W),
    t.send(l),
    await p(_(l.length)),
    t.send([160, 0, 0]),
    await p(_(3)),
    l = function(t, e, n, i) {
        let r = new Uint8Array(9 + U)
          , l = 0;
        return l = F(r, I, l),
        l = F(r, x, l),
        l = F(r, E, l),
        r[l++] = t < 128 ? 21 : 22,
        r[l++] = 127 & t,
        r[l++] = e,
        r[l++] = n,
        r[l++] = i,
        r[l++] = 0,
        r[l++] = 0,
        l = F(r, N, l),
        r.length,
        r
    }(e, n.J >> 7, n.K >> 7, n.Y >> 7),
    t.send(l),
    await p(_(l.length)),
    t.send([160, 0, 0]),
    await p(_(3))
}
function Ct(t, e, n, i, r) {
    let l = 256
      , o = Tt()
      , u = l
      , f = {}
      , c = []
      , a = []
      , s = -1;
    for (let t of o) {
        let e = M(t.id);
        "" != t.querySelector("select").value && (s = Math.max(s, e))
    }
    u += 4 * (s + 1);
    let h = function(t, e) {
        let n = t.value;
        if ("" == n)
            return;
        let i = at(n)
          , r = at(g(e));
        if (c[e] = {
            rt: n,
            tt: r.et,
            nt: r.it
        },
        a.push([e, qt(r)]),
        f[n])
            return;
        let l = {
            T: u
        };
        f[n] = l;
        let o = i.S;
        if (u += o.T.length,
        o.$) {
            H(o.T, o.$) ? l.$ = u - o.$.length : (l.$ = u,
            u += o.$.length)
        }
    };
    for (let t of o) {
        let e = M(t.id);
        h(t.querySelector("select"), e)
    }
    let d = new Uint8Array(u - l);
    for (let t = 0; t < s + 1; ++t) {
        if (!c[t])
            continue;
        let e = c[t].rt
          , n = f[e]
          , i = n.T + c[t].tt;
        if (d[4 * t] = 255 & i,
        d[4 * t + 1] = i >> 8 & 255,
        n.$) {
            let e = n.$ + c[t].nt;
            d[4 * t + 2] = 255 & e,
            d[4 * t + 3] = e >> 8 & 255
        }
    }
    for (let t in f) {
        let e = f[t]
          , n = at(t);
        d.set(n.S.T, e.T - l),
        e.$ && d.set(n.S.$, e.$ - l)
    }
    return async function() {
        for (let[t,n] of a)
            await Lt(e, t, n)
    }().then((function() {
        if (n) {
            let t = u;
            if (t % 256 && (t += 256 - t % 256),
            t >= 65536)
                throw new Error(m("i241"));
            return e.send(D(0, 90, 0)),
            i(300).then((function() {
                let n = t >> 8;
                return e.send(O(0, 109, n)),
                i(.03125)
            }
            ))
        }
    }
    )).then((function() {
        return Y(e, t, 256, d, i, r)
    }
    )).then((function() {
        e.send(O(0, 93, 1))
    }
    ))
}
async function Rt(t, e) {
    t.send(e),
    await p(_(e.length))
}
function Bt(t, e) {
    return t.length === e.length && t.every(((t,n)=>t === e[n]))
}
function zt(t, e, n) {
    null == n && (n = t.length);
    for (let i = n - e.length; i >= 0; --i)
        if (Bt(t.subarray(i, i + e.length), e))
            return i;
    return -1
}
async function Vt(t, e, n) {
    let i = new Uint8Array(n);
    if (i.length < 66048)
        throw new Error("not a valid SPC file!");
    let r = [12, 28, 44, 60, 92, 13, 45, 61, 77, 93, 125, 15, 31, 47, 63, 79, 95, 111, 127];
    await Rt(t, O(0, 108, 96)),
    await Rt(t, O(0, 109, 1));
    let l = i.subarray(65792, 65920);
    for (let e of r)
        await Rt(t, O(0, e, l[e]));
    let o = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let e = 0; e < 8; ++e)
        for (let n of o) {
            let i = e << 4 | n;
            await Rt(t, j(e, n, l[i]))
        }
    let u = 256 * l[109]
      , f = 2048 * (15 & l[125])
      , c = i.subarray(256, 65792);
    if (!(32 & l[108])) {
        let t = u;
        for (let e = 0; e < f; ++e)
            c[t + e & 65535] = 255
    }
    let a = i[37] | i[38] << 8
      , [s,h,d,w,m] = i.slice(39, 45)
      , p = c.slice(0, 256);
    p[240] = 10,
    p[241] = 0,
    p[242] = 109,
    p[243] = l[109];
    let _ = c[256 + m];
    c[256 + m] = 32 | w;
    let v, y, g, M, b = [143, 0, 241, 232, c[244], 46, 244, 253, 232, c[245], 46, 245, 253, 232, c[246], 46, 246, 253, 232, c[247], 46, 247, 253, 205, 0, 245, 128, 255], k = [].concat([].slice.call(p), b, [198, 61, 208, 249]), A = [].concat([205, 0, 232, 0, 29, 213, 128, 255, 208, 250, 205, k.length - 256, 29, 213, 128, 255, 208, 250, 205, 43, 29, 208, 253, 205, m - 1 & 255, 189, 232, s, 141, d, 205, h, 142, 143, _, m, 32, 143, 7 & c[241], 241, 143, 76, 242, 143, l[76], 243, 143, 108, 242, 143, l[108], 243, 143, c[242], 242], 32 & w ? [64] : [], [95, 255 & a, a >> 8]), S = 65472, T = new Uint8Array(64);
    for (let t = 0; t < T.length; ++t)
        T[t] = 255;
    128 & c[241] || Bt(c.slice(S, 65536), T) && S - u >= f && 65535 - u >= f ? (k = [].concat(k, [95, 192, 255]),
    A[11] = k.length - 256,
    c.set(A, S),
    A.length,
    v = !0) : (k = [].concat(k, A),
    v = !1),
    y = 128 & c[241] ? 65534 : 65536;
    for (let t of [[255, u], [0, u], [255, y], [0, y]]) {
        g = t[0];
        t[1];
        let e = new Uint8Array(k.length);
        for (let t = 0; t < e.length; ++t)
            e[t] = g;
        if (M = zt(c, e, y),
        M >= 0)
            break
    }
    M < 0 && (M = y - k.length),
    k.length,
    p.length;
    let D = M
      , P = p.length + b.length;
    k[P - 2] = D >> 0 & 255,
    k[P - 1] = D >> 8 & 255,
    c.set(k, M);
    let q = M + k.length - A.length;
    v && (q = S),
    c[q + 3] = g,
    c[q + 6] = D >> 0 & 255,
    c[q + 7] = D >> 8 & 255,
    c[q + 14] = D + 256 >> 0 & 255,
    c[q + 15] = D + 256 >> 8 & 255,
    128 & c[241] && (c[65535] = 255,
    c[65534] = 192);
    let L = c.subarray(256);
    L.length,
    await Y(t, e, 256, L);
    let C = M + p.length;
    await Rt(t, function(t, e) {
        let n = $([].concat([255 & t, t >> 8], [].slice.call(e)))
          , i = n.length + U + 3
          , r = new Uint8Array(i)
          , l = 0;
        return l = F(r, I, l),
        l = F(r, x, l),
        l = F(r, E, l),
        r[l++] = 6,
        l = F(r, n, l),
        l = F(r, N, l),
        r.length,
        r
    }(C, c.subarray(244, 248)))
}
function Wt(t, e) {
    return $t(3, {
        _: t,
        lt: e
    }, [t])
}
function Gt(t, e) {
    return $t(4, {
        _: t,
        ot: e
    }, [t])
}
function Jt(t, e, n) {
    return st(String.fromCharCode.apply(null, t.slice(e, e + 32)))
}
function Ht(t, e) {
    return new DataView(t.buffer).getUint32(e, !1)
}
function Kt(t, e) {
    return new DataView(t.buffer).getUint16(e, !1)
}
function Qt(t, e) {
    let n = 0;
    for (; ; ) {
        let i = t[e];
        if (n <<= 7,
        n |= 127 & i,
        e += 1,
        !(128 & i))
            break
    }
    return [n, e]
}
function Xt(t) {
    let e = [];
    for (; t; )
        e.push(128 | 127 & t),
        t >>= 7;
    return e[0] &= 127,
    e.reverse(),
    e
}
function Yt(t, e) {
    t.push.apply(t, e)
}
const Zt = [255, 127, 4, A[0], A[1], A[2], 1]
  , te = [255, 127, 4, A[0], A[1], A[2], 2]
  , ee = [255, 47, 0]
  , ne = [255, 6, 9, 108, 111, 111, 112, 83, 116, 97, 114, 116];
function ie(t, e, n) {
    t.push.apply(t, Xt(e)),
    t.push.apply(t, n)
}
function re(t) {
    return Uint8Array.from(t.split("").map((t=>t.charCodeAt(0))))
}
function le(t) {
    return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t >> 0 & 255]
}
function oe(t) {
    return [t >> 8 & 255, t >> 0 & 255]
}
function ue(t, e) {
    return .001 * t * (1 / 60) * 120 * e
}
function fe(t, e) {
    let n = 0
      , i = 0;
    return [new class {
        send(t) {
            if (255 == t[0])
                throw new Error("File output doesn't accept system reset message");
            return this.ut(function(t) {
                if (240 == t[0]) {
                    let e = [];
                    e.push(240),
                    e.push.apply(e, Xt(t.length - 1)),
                    e.push.apply(e, t.slice(1)),
                    t = e
                }
                return t
            }(t))
        }
        ut(e) {
            let i = Math.max(0, Math.ceil(n));
            ie(t, i, e),
            n -= i
        }
    }
    , function(t) {
        return new Promise((function(r, l) {
            let o = ue(t, e);
            n += o,
            i += t,
            r()
        }
        ))
    }
    , function() {
        return i
    }
    ]
}
async function ce(t, e) {
    let n = new Uint8Array(e)
      , i = Jt(n, 0);
    if ("MThd" != i)
        throw new Error(b(m("i246"), i));
    let r = Ht(n, 4);
    if (6 != r)
        throw new Error(b(m("i242"), r));
    let l = Kt(n, 8);
    if (l > 1)
        throw new Error(b(m("i243")));
    let o = Kt(n, 10)
      , u = Kt(n, 12);
    if (32768 & u)
        throw new Error(m("i244"));
    let f = []
      , [c,a,s] = fe(f, u);
    c.ut(Zt),
    await Ct(null, c, !0, a, s),
    await Je(c, a),
    c.ut(te);
    let h = ue(s(), u)
      , d = ue(t, u)
      , w = []
      , p = 14;
    for (let t = 0; t < o; ++t) {
        let e = Jt(n, p);
        if ("MTrk" != e)
            throw new Error(b(m("i245"), e));
        p += 4;
        let i = Ht(n, p);
        p += 4;
        let r = [];
        if (t)
            ie(r, 0, Zt),
            ie(r, Math.ceil(h), te),
            Yt(r, n.subarray(p, p + i));
        else {
            Yt(r, f);
            let t = n.subarray(p, p + i)
              , e = 0
              , l = 0
              , o = 0
              , u = !1
              , c = !1;
            for (; l < t.length; ) {
                let n;
                [n,l] = Qt(t, l),
                !u && n + o > d && (ie(r, d - o, ne),
                n -= d - o,
                u = !0);
                let i = l
                  , f = t[l++];
                if (255 == f) {
                    let e = t[l++]
                      , n = t[l++];
                    127 == e && t[l + 0] == A[0] && t[l + 1] == A[1] && t[l + 2] == A[2] && (1 == t[l + 3] ? c = !0 : 2 == t[l + 3] && (c = !1)),
                    l += n
                } else {
                    if (128 & f)
                        e = f < 240 ? f : 0;
                    else {
                        if (!e)
                            throw new Error("data byte with last status unset");
                        f = e,
                        l -= 1
                    }
                    if ([9, 8, 11, 14, 10].indexOf(f >> 4) >= 0)
                        l += 2;
                    else if (f >> 4 == 12)
                        l += 1;
                    else if (240 == f) {
                        let e;
                        [e,l] = Qt(t, l),
                        l += e
                    }
                }
                ie(r, n, t.subarray(i, l)),
                c || (o += n)
            }
        }
        w.push(r),
        p += i
    }
    let _ = 14 + 8 * o;
    for (let t of w)
        _ += t.length;
    let v = new Uint8Array(_);
    v.set(n.subarray(0, 14), 0),
    p = 14;
    for (let t of w)
        v.set(re("MTrk"), p),
        p += 4,
        v.set(le(t.length), p),
        p += 4,
        v.set(t, p),
        p += t.length;
    return v.buffer
}
const ae = {
    "audio/midi": [".mid"],
    "application/x-spc": [".spc"],
    "application/json": [".json"]
};
function se(t, e) {
    let n = document.createElement("a")
      , i = URL.createObjectURL(e);
    n.style = "display: none",
    document.body.appendChild(n),
    n.href = i,
    n.download = t,
    n.click(),
    window.URL.revokeObjectURL(i),
    n.remove()
}
function he(t, e, n) {
    if (window.showSaveFilePicker) {
        let n = {
            types: [{
                accept: {
                    [e.type]: ae[e.type]
                }
            }]
        };
        return null != t && (n.suggestedName = t),
        void window.showSaveFilePicker(n).then((function(t) {
            return t.createWritable()
        }
        )).then((function(t) {
            return t.write(e).then((function() {
                return t.close()
            }
            ))
        }
        ))
    }
    if (null != t || (t = prompt(n)))
        return se(t, e)
}
const de = "super_midi_pak_sample_uploader_session";
function we(t) {
    return new TextDecoder("utf-8").decode(t)
}
function me(t) {
    var e, n, i, r, l;
    for (e = t.length,
    n = new ArrayBuffer(e),
    i = new Uint8Array(n),
    r = l = 0; 0 <= e ? l < e : l > e; r = 0 <= e ? ++l : --l)
        i[r] = String.prototype.charCodeAt.call(t, r);
    return i
}
let pe = function(t, e, n, i) {
    let r = document.createElement("span")
      , l = document.createElement("label");
    l.htmlFor = i,
    l.innerHTML = m(e),
    r.appendChild(l);
    let o = document.createElement("span");
    o.appendChild(n);
    let u = document.createElement("div");
    u.classList.add("i266"),
    u.appendChild(r),
    u.appendChild(o),
    t.appendChild(u)
};
function _e(t) {
    for (let[e,n] of [["i21", "i20"], ["i23", "i22"], ["i25", "i24"], ["i27", "i26"], ["i29", "i28"], ["i31", "i30"], ["i33", "i32"]])
        if (t == e)
            return n
}
function ve(t, e) {
    at(t).value = e,
    at(_e(t)).value = e
}
function ye(t) {
    return parseInt(at(t).value)
}
function ge(t, e) {
    let n = at(t)
      , i = at(_e(t));
    i.addEventListener("input", (function(t) {
        n.value = this.value
    }
    )),
    n.addEventListener("input", (function(t) {
        i.value = this.value
    }
    ))
}
function Me(t, e, n, i, r, l, o) {
    let u = document.createElement("input")
      , f = document.createElement("input");
    if (u.id = n + "_x1",
    u.type = "number",
    u.min = i,
    u.max = r,
    u.step = 1,
    u.value = i,
    u.addEventListener("input", (function(e) {
        f.value = this.value,
        t(f)
    }
    )),
    e.appendChild(u),
    l) {
        let t = (i + r + 1) / 2;
        0 == t ? f.setAttribute("list", "i139") : 64 == t ? f.setAttribute("list", "i138") : 8192 == t && f.setAttribute("list", "i137")
    }
    f.ft = function(t) {
        f.value = t,
        u.value = t
    }
    ,
    f.ct = o,
    f.st = i,
    f.ht = r,
    f.id = n,
    f.type = "range",
    f.min = i,
    f.max = r,
    f.step = 1,
    f.value = i,
    f.addEventListener("input", (function(e) {
        u.value = this.value,
        t(this)
    }
    )),
    e.appendChild(f)
}
function be(t, e) {
    return function(n) {
        if (!n)
            return 0;
        let i = De(this);
        return n.send(D(t, 99, e >> 7)),
        n.send(D(t, 98, 127 & e)),
        n.send(D(t, 6, i >> 7)),
        n.send(D(t, 38, 127 & i)),
        12
    }
}
function ke(t, e, n, i, r) {
    for (let l = 0; l < n.length; ++l) {
        let o = n[l]
          , u = o[0]
          , f = o[1]
          , c = o[2]
          , a = document.createElement("span")
          , s = r(o);
        switch (pe(e, u, a, s),
        f) {
        case 0:
            Me(t, a, s, 0, 127, o[4], (function(t) {
                if (!t)
                    return 0;
                let e = De(this);
                return t.send(D(i, c, e)),
                3
            }
            ));
            break;
        case 1:
            {
                let e = o[2]
                  , n = document.createElement("input");
                n.st = 0,
                n.ht = 127,
                n.ct = function(t) {
                    if (!t)
                        return 0;
                    let n = De(this);
                    return t.send(D(i, e, n)),
                    3
                }
                ,
                n.ft = function(t) {
                    n.checked = t >= 64
                }
                ;
                let r = function(e) {
                    t(this)
                };
                n.id = s,
                n.type = "checkbox",
                n.addEventListener("change", r),
                a.appendChild(n);
                break
            }
        case 5:
            {
                let e = o[2];
                Me(t, a, s, 0, 16383, o[4], be(i, e));
                break
            }
        case 4:
            {
                let e = o[2]
                  , n = document.createElement("input");
                n.st = 0,
                n.ht = 16383,
                n.ct = be(i, e),
                n.ft = function(t) {
                    n.checked = t >= 8192
                }
                ;
                let r = function(e) {
                    t(this)
                };
                n.id = s,
                n.type = "checkbox",
                n.addEventListener("change", r),
                a.appendChild(n);
                break
            }
        case 2:
            {
                let e = o[2];
                Me(t, a, s, -128, 127, !0, (function(t) {
                    if (!t)
                        return 0;
                    let n = De(this);
                    return n < 0 && (n += 256),
                    t.send(O(0, e, n)),
                    3
                }
                ));
                break
            }
        case 3:
            {
                let[e,n] = o[4]
                  , i = document.createElement("input");
                i.st = 0,
                i.ht = 127,
                i.ct = function(t) {
                    if (!t)
                        return 0;
                    let i, r = De(this);
                    return i = r >= 64 ? n : e,
                    t.send(D(0, i, r)),
                    3
                }
                ,
                i.ft = function(t) {
                    i.checked = t >= 64
                }
                ;
                let r = function(e) {
                    t(this)
                };
                i.id = s,
                i.type = "checkbox",
                i.addEventListener("change", r),
                a.appendChild(i);
                break
            }
        }
    }
}
function Ae(t, e, n) {
    let i;
    return "_04" == t ? i = "program" : t.startsWith("_05_") ? (n <= 1 && ("_05_86" == t ? t = "_05_15" : "_05_85" == t ? t = "_05_14" : "_05_81" == t ? t = "_05_73" : "_05_82" == t && (t = "_05_75")),
    i = "control_" + t.substr("_05_".length)) : t.startsWith("_06_") && (i = "nrpn_" + t.substr("_06_".length)),
    "channel_" + i + "_" + e
}
function xe(t, e) {
    return t + "_" + e
}
function Ee(t, e) {
    if (2 == t[1])
        return "global_reg_" + t[2];
    if (3 == t[1])
        return "global_" + t[2];
    {
        let n = t[2];
        return e <= 1 && 90 == n && (n = 74),
        "global_cc_" + n
    }
}
function Ue(t, e) {
    return 2 == t ? "_00_" + e : 3 == t ? "_01_" + e : "_02_" + e
}
function Ie(t) {
    return Ue(t[1], t[2])
}
let Ne = {};
function Se(t) {
    return Ne[t]
}
Ne[Ue(2, 60)] = !0,
Ne[Ue(2, 44)] = !0,
Ne[Ue(2, 15)] = !0,
Ne[Ue(2, 31)] = !0,
Ne[Ue(2, 47)] = !0,
Ne[Ue(2, 63)] = !0,
Ne[Ue(2, 79)] = !0,
Ne[Ue(2, 95)] = !0,
Ne[Ue(2, 111)] = !0,
Ne[Ue(2, 127)] = !0,
Ne[Ue(2, 127)] = !0,
Ne[Ue(2, 13)] = !0,
Ne[Ue(0, 90)] = !0,
Ne[Ue(2, 12)] = !0,
Ne[Ue(2, 28)] = !0;
let $e = [l, o, u, f, c, a];
function Fe(t) {
    return "_07_" + t
}
function Te(t, e, n) {
    null == e && (e = n),
    at(t).ft(e)
}
function De(t) {
    let e;
    return "checkbox" == t.type ? e = t.checked ? t.ht : t.st : (e = t.value,
    e = parseInt(e),
    isNaN(e) ? e = t.st : e > t.ht ? e = t.ht : e < t.st && (e = t.st)),
    e
}
function Pe(t) {
    return De(at(t))
}
function Oe(t, e) {
    t || (t = {});
    for (let n of r) {
        Te(Ie(n), t[Ee(n, e)], n[3])
    }
}
let je = ["i86", "i87", "i88", "i89", "i90", "i91", "i92", "i93", "i94", "i95", "i96", "i97", "i98", "i99", "i100", "i101"];
function qe(t) {
    for (let e = 0; e < 128; ++e) {
        let n = document.createElement("option");
        n.value = e;
        let i = at(g(e));
        if (i) {
            let t = i.querySelector("select").value;
            n.text = "" == t ? b(m("i205"), e) : b(m("i205"), e) + " (" + at(t).dt + ")"
        } else
            n.text = b(m("i205"), e);
        t.add(n, null)
    }
}
function Le() {
    for (let t = 0; t < 16; ++t) {
        let e = at(xe("_04", t))
          , n = e.value;
        e.options.length = 0,
        qe(e),
        e.value = n
    }
}
function Ce(t, e) {
    t || (t = []);
    for (let n = 0; n < 16; ++n) {
        let i = t[n];
        i || (i = {});
        for (let[t,r] of w) {
            t == d(s) && e <= 2 && (r = 127),
            Te(xe(t, n), i[Ae(t, n, e)], r)
        }
    }
}
function Re(t, e) {
    return "_cbuv_" + t + "_" + e
}
const Be = ["i132", "i131", "i48", "i52", "i49", "i50", "i51", "i53", "i54", "i105"];
for (let t of r)
    Be.push(Ie(t)),
    2 != t[1] && 0 != t[1] || Be.push(Ie(t) + "_x1");
for (let t = 0; t < 16; ++t) {
    Be.push(xe("_04", t));
    for (let e of h) {
        let n = xe(d(e), t);
        Be.push(n),
        2 != e[1] && 0 != e[1] || Be.push(n + "_x1")
    }
    for (let e = 0; e < 8; ++e)
        Be.push(Re(t, e))
}
for (let t = 0; t < 128; ++t)
    Be.push(Fe(t));
for (let n of [t, "_oikoiu128384", e, "_617a7s9df"])
    Be.push(n),
    Be.push(n + "_x1");
let ze = [];
function Ve() {
    for (let t of ze)
        t.disabled = !0;
    at("i56").classList.remove("i283")
}
function We() {
    at("i56").classList.add("i283");
    for (let t of ze)
        t.disabled = !1
}
async function Ge(t, e) {
    for (let n = 0; n < 128; ++n) {
        let i = at(Fe(n)).ct(t);
        await e(_(i))
    }
}
async function Je(t, e) {
    for (let n of r) {
        let i = at(Ie(n)).ct(t);
        await e(_(i))
    }
    for (let n = 0; n < 16; ++n) {
        let i = await at(xe("_04", n)).ct(t);
        await e(_(i));
        for (let i of h) {
            let r = at(xe(d(i), n)).ct(t);
            await e(_(r))
        }
    }
    await Ge(t, e)
}
function He(t) {
    let e = t.T.length;
    if (t.$) {
        H(t.T, t.$) || (e += t.$.length)
    }
    return e
}
function Ke(t, e) {
    t || (t = {}),
    t.tunings || (t.tunings = []);
    for (let e = 0; e < 128; ++e) {
        let i, r = Fe(e), l = t.tunings[e];
        i = l ? l.semitone : e,
        Te(r, (n = i) < 0 ? 0 : n >= 127 + 16383 / 16384 ? 127 + 16382 / 16384 : n)
    }
    var n
}
function Qe(t) {
    let e = we(t).trim().split(new RegExp("\\s*[\r\n\0]\\s*"))
      , n = !0
      , i = e.findIndex((t=>"[exact tuning]" == t.toLowerCase()));
    if (i < 0 && (i = e.findIndex((t=>"[tuning]" == t.toLowerCase())),
    n = !1),
    i < 0)
        return null;
    let r = 440 * Math.pow(2, -5.75)
      , l = new Array(128);
    for (let t = i + 1; t < e.length && !e[t].startsWith("["); ++t) {
        let i = e[t];
        if (!i.length || i.startsWith(";"))
            continue;
        let o = i.split(new RegExp("="));
        if (2 != o.length)
            return null;
        let[u,f] = o
          , c = u.split(new RegExp("\\s+"));
        if ("note" == c[0].toLowerCase()) {
            let t = parseInt(c[1])
              , e = parseFloat(f);
            if (2 != c.length || Number.isNaN(t) || t < 0 || t >= 128 || Number.isNaN(e))
                return null;
            l[t] = e
        } else {
            if ("basefreq" != c[0].toLowerCase())
                return null;
            if (r = parseFloat(f),
            !n || 1 != c.length || Number.isNaN(r))
                return null
        }
    }
    if (n) {
        let t = l.findLastIndex((t=>void 0 !== t));
        if (t < 0)
            return null;
        for (let e = 0; e < t; ++e)
            void 0 === l[e] && (l[e] = 100 * e);
        if (t < 127) {
            let e = l[t];
            for (let n = t; n < 128; ++n)
                l[n] = l[n - t] + e
        }
    } else {
        if (l.wt((t=>void 0 === t)) >= 0)
            return null
    }
    let o = []
      , u = 12 * Math.log2(r / 440) + 69;
    for (let t of l) {
        let e = u + t / 100;
        o.push({
            semitone: e
        })
    }
    return {
        tunings: o
    }
}
let Xe = function() {
    function t(t, e, n) {
        let i = n ? 1 : 0;
        return [e[0] * t[0] + e[1] * t[2] + i * t[4], e[0] * t[1] + e[1] * t[3] + i * t[5]]
    }
    function e(e, n) {
        let i = t(e, [n[0], n[1]], !1)
          , r = t(e, [n[2], n[3]], !1)
          , l = t(e, [n[4], n[5]], !0);
        return [i[0], i[1], r[0], r[1], l[0], l[1]]
    }
    function n(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }
    function i() {
        this._t = null;
        let e = document.getElementById(this.vt)
          , i = e.getContext("2d");
        i.reset();
        let r = e.width
          , l = e.height
          , o = t(this.yt, [0, 0], !0);
        i.fillStyle = "white",
        i.strokeStyle = "black",
        i.lineWidth = 2,
        i.beginPath(),
        i.rect(0, 0, r, l),
        i.fill(),
        i.stroke(),
        i.beginPath(),
        i.moveTo(o[0], o[1]),
        i.lineTo(o[0], 0),
        i.moveTo(o[0], o[1]),
        i.lineTo(o[0], l),
        i.moveTo(o[0], o[1]),
        i.lineTo(0, o[1]),
        i.moveTo(o[0], o[1]),
        i.lineTo(r, o[1]),
        i.transform.apply(i, this.yt);
        let u = n(t(this.gt, [10, 0], !1))
          , f = n(t(this.gt, [1, 0], !1))
          , c = n(t(this.gt, [10, 0], !1));
        i.lineWidth = f,
        i.moveTo(1, 0),
        i.arc(0, 0, 1, 0, 2 * Math.PI),
        i.setLineDash([c, c]),
        i.stroke(),
        i.lineWidth = 3 * f,
        i.setLineDash([]);
        for (let t = 0; t < this.Mt.length; ++t) {
            let e = this.Mt[t];
            i.beginPath(),
            i.arc(e[0], e[1], u, 0, 2 * Math.PI),
            t != this.bt || this.kt.length ? i.fillStyle = "white" : i.fillStyle = "gray",
            i.fill(),
            i.stroke()
        }
        for (let t = 0; t < this.At.length; ++t) {
            let e = this.At[t];
            i.save(),
            i.translate(e[0], e[1]),
            i.rotate(Math.PI / 4),
            i.beginPath(),
            i.moveTo(0, u),
            i.lineTo(0, -u),
            i.moveTo(-u, 0),
            i.lineTo(u, 0),
            i.stroke(),
            i.restore()
        }
        for (let t = 0; t < this.kt.length; ++t) {
            let e = this.kt[t];
            i.beginPath(),
            i.arc(e[0], e[1], .5 * u, 0, 2 * Math.PI),
            i.fillStyle = "lightblue",
            i.fill(),
            i.stroke()
        }
        if (null != this.bt || this.kt.length) {
            let e;
            i.resetTransform(),
            i.textBaseline = "top",
            i.textAlign = "left",
            i.font = "bold 24px sans",
            e = this.kt.length ? this.kt[0] : this.Mt[this.bt];
            let n, l = t(this.yt, e, !0);
            n = e[1] < 0 ? `${e[0].toFixed(3)} - ${Math.abs(e[1]).toFixed(3)}j` : `${e[0].toFixed(3)} + ${e[1].toFixed(3)}j`;
            let o, u, f = i.measureText(n);
            l[1] - 8 - f.actualBoundingBoxDescent < 0 ? l[0] + 8 + f.actualBoundingBoxRight > r ? (o = l[0] - 8 - f.actualBoundingBoxRight,
            u = l[1] + 8) : (o = l[0] + 8,
            u = l[1] + 8) : l[0] + 8 + f.actualBoundingBoxRight > r ? (o = l[0] - 8 - f.actualBoundingBoxRight,
            u = l[1] - 8 - f.actualBoundingBoxDescent) : (o = l[0] + 8,
            u = l[1] - 8 - f.actualBoundingBoxDescent),
            i.fillStyle = "white",
            i.fillRect(o, u, f.actualBoundingBoxRight, f.actualBoundingBoxDescent),
            i.fillStyle = "black",
            i.fillText(n, o, u)
        }
    }
    function r(n) {
        let r = document.getElementById(n);
        function l(e) {
            document.getElementById(this.vt);
            for (let n = 0; n < this.Mt.length; ++n) {
                let i = this.Mt[n];
                i = t(this.yt, i, !0);
                let r = i[0] - e.offsetX
                  , l = i[1] - e.offsetY;
                if (Math.sqrt(r * r + l * l) <= 10)
                    return n
            }
            return null
        }
        function o(t) {
            if (this.disabled)
                return;
            let e = this.xt;
            this.xt = null,
            e != this.xt && (null != e && ([this.Mt,this.At] = this.Et(this.Mt, this.At),
            this.kt = [],
            this.Ut(),
            this.bt = l.apply(this, [t])),
            this.It()),
            this.Nt = null
        }
        r.addEventListener("mousedown", function(e) {
            if (this.disabled)
                return;
            let n = !1
              , i = this.xt;
            if (this.xt = l.apply(this, [e]),
            i != this.xt && (n = !0),
            null == this.xt)
                this.St = [e.offsetX, e.offsetY],
                this.Nt = this.yt,
                this.$t = this.gt;
            else {
                let i = [e.offsetX, e.offsetY];
                i = t(this.gt, i, !0),
                null == this.Ft ? this.Mt[this.xt] = i : [this.Mt,this.xt,this.At,this.kt] = this.Ft(this.Mt, this.xt, i),
                n = !0
            }
            n && this.It(),
            e.preventDefault()
        }
        .bind(this)),
        r.addEventListener("mousemove", function(n) {
            if (this.disabled)
                return;
            let i = !1;
            if (null != this.Nt) {
                let t = [1, 0, 0, 1, n.offsetX - this.St[0], n.offsetY - this.St[1]]
                  , r = [1, 0, 0, 1, -n.offsetX + this.St[0], -n.offsetY + this.St[1]];
                this.yt = e(t, this.Nt),
                this.gt = e(this.$t, r),
                i = !0
            }
            if (null == this.xt) {
                let t = this.bt;
                return this.bt = l.apply(this, [n]),
                void ((i || t != this.bt) && this.It())
            }
            let r = [n.offsetX, n.offsetY];
            r = t(this.gt, r, !0),
            null == this.Ft ? this.Mt[this.xt] = r : [this.Mt,this.xt,this.At,this.kt] = this.Ft(this.Mt, this.xt, r),
            this.bt = this.xt,
            this.It()
        }
        .bind(this)),
        r.addEventListener("mouseup", function(t) {
            o.apply(this, [t])
        }
        .bind(this)),
        r.addEventListener("mouseout", function(t) {
            o.apply(this, [t])
        }
        .bind(this)),
        r.addEventListener("wheel", function(t) {
            if (this.disabled)
                return;
            if (!t.ctrlKey)
                return;
            let n;
            this.yt[4] -= t.offsetX,
            this.yt[5] -= t.offsetY,
            n = t.deltaY > 0 ? .9 : 1.1;
            for (let t = 0; t < this.yt.length; ++t)
                this.yt[t] *= n;
            this.yt[4] += t.offsetX,
            this.yt[5] += t.offsetY;
            let i = [1 / n, 0, 0, 1 / n, -t.offsetX / n + t.offsetX, -t.offsetY / n + t.offsetY];
            this.gt = e(this.gt, i),
            this.It(),
            t.preventDefault()
        }
        .bind(this)),
        r.addEventListener("dblclick", function(t) {
            this.disabled || (null == l.apply(this, [t]) && (this.Tt(),
            this.It()),
            t.preventDefault())
        }
        .bind(this)),
        this.vt = n,
        this.Mt = [],
        this.At = [],
        this.kt = [],
        this.Tt(),
        this.bt = null,
        this.xt = null,
        this.Et = null,
        this.Dt = i.bind(this),
        this._t = null,
        this.It(),
        this.disabled = !1
    }
    return r.prototype.Tt = function() {
        let t = document.getElementById(this.vt)
          , n = t.width
          , i = t.height
          , r = function(t, e) {
            let n;
            return n = t > e ? e / 2 : t / 2,
            n *= .8,
            n
        }(n, i);
        this.yt = e([1, 0, 0, 1, n / 2, i / 2], [r, 0, 0, -r, 0, 0]),
        this.gt = e([1 / r, 0, 0, -1 / r, 0, 0], [1, 0, 0, 1, -n / 2, -i / 2]),
        this.Ut()
    }
    ,
    r.prototype.Ut = function() {}
    ,
    r.prototype.It = function() {
        this._t || (this._t = window.requestAnimationFrame(this.Dt))
    }
    ,
    r.prototype.Pt = function(t, e) {
        this.bt = null,
        this.xt = null,
        this.Mt = t,
        this.At = e,
        this.Ut(),
        this.It()
    }
    ,
    r.prototype.Ot = function(t) {
        this.Et = t
    }
    ,
    r.prototype.jt = function(t) {
        this.Ft = t
    }
    ,
    r
}()
  , Ye = function() {
    function t() {
        this._t = null;
        let t = document.getElementById(this.vt)
          , e = t.getContext("2d");
        e.reset();
        let n = t.width
          , i = t.height;
        e.fillStyle = "white",
        e.beginPath(),
        e.rect(0, 0, n, i),
        e.fill();
        let r = n
          , l = []
          , o = 1 / 0
          , u = -1 / 0;
        for (let t = 0; t < r; ++t) {
            let e = t / r
              , n = (1 - e) * this.qt[0] + e * this.qt[1]
              , i = this.Lt(n);
            !isNaN(i) && isFinite(i) && (o = Math.min(i, o),
            u = Math.max(i, u),
            l.push([n, i]))
        }
        let f = (u + o) / 2
          , c = 1.2 * (u - o) / 2;
        c < 1e-6 && (c = 1);
        let a = f + c
          , s = f - c
          , h = "rgba(196, 196, 196, 255)"
          , d = "rgba(32, 32, 32, 255)"
          , w = 10
          , m = "12px sans";
        e.font = m,
        e.textBaseline = "middle";
        let p = e.measureText(`${a.toFixed(2)} ${this.Ct}`)
          , _ = p.actualBoundingBoxAscent + 5
          , v = 0;
        for (let t = 0; t < 9; ++t) {
            let n = t / 8 * (a - s) + s;
            p = e.measureText(`${n.toFixed(2)} ${this.Ct}`),
            p.width > v && (v = p.width)
        }
        v += 20,
        e.textBaseline = "top",
        p = e.measureText(`${this.qt[1]} ${this.Rt}`);
        let y = [v, _, n - v - (p.width / 2 + 5), i - _ - (p.actualBoundingBoxDescent + w + 10)];
        for (let t = 0; t < 9; ++t) {
            let n = t / 8
              , i = n * (this.qt[1] - this.qt[0]) + this.qt[0]
              , r = n * y[2] + y[0];
            e.beginPath(),
            e.moveTo(r, y[1] + y[3]),
            e.lineTo(r, y[1]),
            e.strokeStyle = 0 == t ? d : h,
            e.stroke(),
            e.beginPath(),
            e.moveTo(r, y[1] + y[3]),
            e.lineTo(r, y[1] + y[3] + w),
            e.strokeStyle = h,
            e.stroke(),
            e.fillStyle = "black",
            e.textBaseline = "top",
            e.textAlign = "center",
            e.font = m,
            e.fillText(`${i.toFixed(0)} ${this.Rt}`, r, y[1] + y[3] + w + 5)
        }
        for (let t = 0; t < 9; ++t) {
            let n = t / 8
              , i = n * (a - s) + s
              , r = y[1] + y[3] - n * y[3];
            e.beginPath(),
            e.moveTo(y[0], r),
            e.lineTo(y[0] + y[2], r),
            e.strokeStyle = 0 == t ? d : h,
            e.stroke(),
            e.beginPath(),
            e.moveTo(y[0] - w, r),
            e.lineTo(y[0], r),
            e.strokeStyle = h,
            e.stroke(),
            e.fillStyle = "black",
            e.textBaseline = "middle",
            e.textAlign = "right",
            e.font = m,
            e.fillText(`${i.toFixed(2)} ${this.Ct}`, y[0] - w - 5, r)
        }
        e.strokeStyle = "black";
        let g = y[2] / (this.qt[1] - this.qt[0])
          , M = -y[3] / (a - s);
        if (e.save(),
        e.translate(y[0], y[1] + y[3]),
        e.scale(g, M),
        e.translate(-this.qt[0], -s),
        l.length) {
            e.beginPath(),
            e.moveTo(l[0][0], l[0][1]);
            for (let t = 1; t < l.length; ++t)
                e.lineTo(l[t][0], l[t][1])
        }
        if (e.restore(),
        e.stroke(),
        this.Bt[0] >= y[0] && this.Bt[0] < y[0] + y[2] && this.Bt[1] >= y[1] && this.Bt[1] < y[1] + y[3]) {
            let t = (this.Bt[0] - y[0]) / g + this.qt[0]
              , i = this.Lt(t)
              , r = (i - s) * M + y[1] + y[3];
            e.beginPath(),
            e.arc(this.Bt[0], r, 5, 0, 2 * Math.PI),
            e.fill(),
            e.textBaseline = "top",
            e.textAlign = "left",
            e.font = m;
            let l, o, u = `${t.toFixed(2)} ${this.Rt}, ${i.toFixed(2)} ${this.Ct}`;
            p = e.measureText(u),
            this.Bt[0] + 5 + p.actualBoundingBoxRight > n ? (l = this.Bt[0] - 5 - p.actualBoundingBoxRight,
            o = r - 5 - p.actualBoundingBoxDescent) : (l = this.Bt[0] + 5,
            o = r - 5 - p.actualBoundingBoxDescent),
            e.fillStyle = "white",
            e.fillRect(l, o, p.actualBoundingBoxRight, p.actualBoundingBoxDescent),
            e.fillStyle = "black",
            e.fillText(u, l, o)
        }
    }
    function e(e, n, i, r, l) {
        let o = document.getElementById(e);
        function u() {}
        o.addEventListener("mousemove", function(t) {
            this.Bt = [t.offsetX, t.offsetY],
            this.It()
        }
        .bind(this)),
        o.addEventListener("dblclick", function(t) {
            u.apply(this),
            this.It()
        }
        .bind(this)),
        this.Bt = [0, 0],
        this.Rt = r,
        this.Ct = l,
        this.vt = e,
        u.apply(this),
        this.Lt = n,
        this.qt = i,
        this._t = null,
        this.Dt = t.bind(this),
        this.It()
    }
    return e.prototype.It = function() {
        this._t || (this._t = window.requestAnimationFrame(this.Dt))
    }
    ,
    e.prototype.zt = function(t) {
        this.Lt = t,
        this.It()
    }
    ,
    e
}();
function Ze(t) {
    return Math.hypot(t[0], t[1])
}
function tn(t) {
    return [t[0], -t[1]]
}
function en(t, e) {
    return dn(Math.sqrt((t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2))
}
function nn(t) {
    let e = function(t) {
        return Math.atan2(t[1], t[0])
    }(t);
    return [Ze(t), e]
}
function rn(t, e) {
    return [t * Math.cos(e), t * Math.sin(e)]
}
function ln(t, e) {
    return [t[0] - e[0], t[1] - e[1]]
}
function on() {
    let t = 0
      , e = 0;
    for (var n = 0; n < arguments.length; n++)
        t += arguments[n][0],
        e += arguments[n][1];
    return [t, e]
}
function un(t, e) {
    return [t[0] * e[0] - t[1] * e[1], t[0] * e[1] + t[1] * e[0]]
}
function fn(t, e) {
    let[n,i] = nn(t)
      , [r,l] = nn(e)
      , o = n / r
      , u = i - l;
    return [o * Math.cos(u), o * Math.sin(u)]
}
function cn(t, e) {
    let[n,i] = nn(t)
      , r = Math.pow(n, e[0]) * Math.exp(-i * e[1]);
    return 0 == r ? [0, 0] : rn(r, Math.log(n) * e[1] + i * e[0])
}
function an(t, e) {
    let n = [0, 0]
      , [i,r] = nn(e);
    for (let e = 0; e < t.length; ++e) {
        let l = Math.pow(i, e)
          , o = [l * Math.cos(r * e), l * Math.sin(r * e)]
          , u = t[e];
        n[0] += u * o[0],
        n[1] += u * o[1]
    }
    return n
}
let sn, hn, dn = function(t) {
    return Math.abs(t) < 1e-6
};
function wn(t, e) {
    let n = [];
    for (let i = 0; i < t.length + e.length - 1; ++i)
        n[i] = 0;
    for (let i = 0; i < t.length; ++i)
        for (let r = 0; r < e.length; ++r)
            n[i + r] += t[i] * e[r];
    return n
}
function mn(t, e) {
    let n = t.length
      , i = t[0].length;
    if (1 == e && n != i)
        return;
    let r = pn(n)
      , l = function(t) {
        let e = t.length
          , n = t[0].length
          , i = bn(e, n, 0);
        for (let r = 0; r < e; ++r)
            for (let e = 0; e < n; ++e)
                i[r][e] = t[r][e];
        return i
    }(t)
      , o = i - 1;
    n != i && (o = i);
    for (let t = 0; t < o; ++t) {
        let e = pn(n)
          , o = vn(i - t, 0)
          , u = 0;
        for (let e = t; e < i; ++e)
            o[u++] = l[e][t];
        let f = yn(o);
        o[0] < 0 && (f = -f);
        let c = vn(o.length, 0);
        for (let t = 0; t < c.length; ++t)
            c[t] = o[t] / (o[0] + f);
        c[0] = 1;
        let a = pn(o.length)
          , s = gn(c, c)
          , h = _n(Mn(c, c.length, 1), Mn(c, 1, c.length));
        for (let t = 0; t < a.length; ++t)
            for (let e = 0; e < a[0].length; ++e)
                a[t][e] -= 2 / s * h[t][e];
        let d = i - a.length;
        for (let t = 0; t < a.length; ++t)
            for (let n = 0; n < a[0].length; ++n)
                e[t + d][n + d] = a[t][n];
        r = _n(r, e),
        l = _n(e, l)
    }
    if (1 == e) {
        let t = bn(i, i, 0);
        for (let e = 0; e < i; ++e)
            l[e][e] < 0 ? t[e][e] = -1 : t[e][e] = 1;
        r = _n(r, t),
        l = _n(t, l)
    }
    let u = [];
    return u[0] = r,
    u[1] = l,
    u
}
function pn(t) {
    let e = bn(t, t, 0);
    for (let n = 0; n < t; ++n)
        e[n][n] = 1;
    return e
}
function _n(t, e) {
    let n = t.length
      , i = t[0].length
      , r = (e.length,
    e[0].length)
      , l = bn(n, r, 0);
    for (let o = 0; o < n; ++o)
        for (let n = 0; n < r; ++n)
            for (let r = 0; r < i; ++r)
                l[o][n] += t[o][r] * e[r][n];
    return l
}
function vn(t, e) {
    let n = [];
    for (let i = 0; i < t; ++i)
        n[i] = e;
    return n
}
function yn(t) {
    let e = t.length
      , n = 0;
    for (let i = 0; i < e; ++i)
        n += t[i] * t[i];
    return Math.sqrt(n)
}
function gn(t, e) {
    let n = 0
      , i = t.length;
    for (let r = 0; r < i; ++r)
        n += t[r] * e[r];
    return n
}
function Mn(t, e, n) {
    let i = bn(e, n, 0)
      , r = 0;
    for (let l = 0; l < e; ++l)
        for (let e = 0; e < n; ++e)
            i[l][e] = t[r++];
    return i
}
function bn(t, e, n) {
    let i = [];
    for (let r = 0; r < t; ++r) {
        i[r] = [];
        for (let t = 0; t < e; ++t)
            i[r][t] = n
    }
    return i
}
function kn(t, e) {
    let n = [];
    for (let i = 0; i < t.length; ++i) {
        n[i] = [];
        for (let r = 0; r < t[i].length; ++r)
            n[i][r] = t[i][r] + e[i][r]
    }
    return n
}
function An(t, e) {
    let n = [];
    for (let i = 0; i < e.length; ++i) {
        n[i] = [];
        for (let r = 0; r < e[i].length; ++r)
            n[i][r] = t * e[i][r]
    }
    return n
}
function xn(t, e) {
    return kn(t, An(-1, e))
}
function En(t) {
    let e = [];
    for (let n = 0; n < t.length; ++n)
        for (let i = 0; i < t[n].length; ++i)
            void 0 === e[i] && (e[i] = []),
            e[i][n] = t[n][i];
    return e
}
function Un(t) {
    let e = [t[0][0], 0]
      , n = [t[0][1], 0]
      , i = [t[1][0], 0]
      , r = [t[1][1], 0]
      , l = on(e, r)
      , o = cn(ln(un(l, l), un([4, 0], ln(un(e, r), un(n, i)))), [.5, 0]);
    return [un(on(l, o), [.5, 0]), un(ln(l, o), [.5, 0])]
}
function In(t, e, n, i, r) {
    let l = [];
    for (let o = 0; o < i; ++o) {
        let i = [];
        for (let l = 0; l < r; ++l)
            i.push(t[e + o][n + l]);
        l.push(i)
    }
    return l
}
function Nn(t) {
    for (let e = (t = t.slice()).length - 1; e >= 0 && !t[e]; --e)
        t.splice(e, 1);
    let e = [];
    for (; t.length && !t[0]; )
        e.push([0, 0]),
        t.splice(0, 1);
    if (t.length <= 1)
        return e;
    let n = t.length - 1
      , i = [];
    for (let t = 0; t < n; ++t) {
        i[t] = [];
        for (let e = 0; e < n; ++e)
            i[t][e] = 0
    }
    for (let e = 0; e < n; ++e)
        i[e][n - 1] = -t[e] / t[n],
        e != n - 1 && (i[e + 1][e] = 1);
    let r = i
      , l = !1
      , o = 0;
    for (; r.length; ) {
        let t = r.length
          , n = 0;
        for (let i = 0; i < 20; ++i) {
            if (1 == t || dn(r[t - 1][t - 2])) {
                e.push([r[t - 1][t - 1], 0]),
                n = 1;
                break
            }
            if (2 == t || dn(r[t - 2][t - 3])) {
                e.push.apply(e, Un(In(r, t - 2, t - 2, 2, 2))),
                n = 2;
                break
            }
            let i = In(r, t - 2, t - 2, 2, 2)
              , o = i[0][0] + i[1][1]
              , u = i[0][0] * i[1][1] - i[0][1] * i[1][0];
            if (l) {
                let t = Math.random()
                  , e = Math.random();
                l = !1,
                o = t + e,
                u = t * e
            }
            let f = kn(xn(_n(r, r), An(o, r)), An(u, pn(t)))
              , [c,a] = mn(f);
            r = _n(En(c), _n(r, c))
        }
        if (0 != n)
            r = In(r, 0, 0, r.length - n, r.length - n);
        else {
            if (20 == o)
                throw new Exception("fail");
            o += 1,
            l = !0
        }
    }
    return e
}
function Sn(t, e, n, i, r, l) {
    let o, u, f = (l - r * n / 128) / 128, c = e.map((t=>t * f));
    for (; c.length < 8; )
        c.push(0);
    if (c.push(r),
    o = 0 == i ? Nn(c) : [],
    0 == i && c.map((t=>Math.abs(t))).reduce(((t,e)=>e + t))) {
        let t = 0 == i ? 1 : 512 * i
          , r = new Array(t + 8);
        r.fill(0),
        r[t + 7] = 1,
        e.length;
        for (let t = 0; t < e.length; ++t)
            r[t] = -e[t] * n / 128 / 128;
        u = Nn(r)
    } else
        u = [];
    t.splice(0);
    for (let e = o.length - 1; e >= 0; --e)
        en(o[e], [0, 0]) && t.push(o.splice(e, 1)[0]);
    let a = 0;
    for (let e = u.length - 1; e >= 0 && a != t.length; --e)
        en(u[e], [0, 0]) && (u.splice(e, 1),
        a += 1);
    for (let e = o.length - 1; e >= 0; --e)
        for (let n = u.length - 1; n >= 0; --n)
            if (en(o[e], u[n])) {
                t.push(o.splice(e, 1)[0]),
                u.splice(n, 1);
                break
            }
    return [o, u]
}
function $n(t, e) {
    let n = 0
      , i = [];
    for (; !n; ) {
        1 & t[e] && (n = 1);
        for (let n = 0; n < 9; ++n)
            i.push(t[e]),
            e = e + 1 & 65535
    }
    return Uint8Array.from(i)
}
function Fn(t) {
    let e = new Uint8Array(hn.exports.memory.buffer)
      , n = e.indexOf(0, t);
    return new TextDecoder("utf-8").decode(e.subarray(t, n))
}
function Tn(t) {
    for (let e of sn)
        if (Bt(e.T, t.T) && !!e.$ == !!t.$ && (!e.$ || Bt(e.$, t.$)))
            return !0;
    return !1
}
function Dn(t, e, n, i, r, l, o) {
    let u, f;
    if (o) {
        if (f = 16 + t,
        null == i) {
            f += 16;
            let e = t % 16;
            e && (f += 16 - e),
            (0 == e || e > 4) && (f += 16)
        } else
            i += 1;
        u = 16
    } else
        f = 16 * Math.ceil(t / 16),
        u = 0;
    var c;
    On((c = e,
    new Uint8Array(c.buffer,c.byteOffset,c.byteLength)), u * e.BYTES_PER_ELEMENT),
    jn(0, 0, u * e.BYTES_PER_ELEMENT),
    jn(0, (u + t) * e.BYTES_PER_ELEMENT, f * e.BYTES_PER_ELEMENT),
    hn.exports.Vt(f, null == i ? -1 : i, r, l);
    let a = f / 16 * 9;
    return function(t, e) {
        let n = new Uint8Array(hn.exports.memory.buffer);
        hn.exports.Wt();
        let i = hn.exports.Gt();
        t.set(n.subarray(i, i + e))
    }(n, a),
    [a, i]
}
function Pn() {
    let t = new Uint8Array(hn.exports.memory.buffer)
      , e = hn.exports.Wt()
      , n = hn.exports.Jt();
    return t.subarray(n, n + e)
}
function On(t, e) {
    null == e && (e = 0);
    let n = Pn();
    if (t.length + e > n.length)
        throw new Error("input too large");
    n.set(t, e)
}
function jn(t, e, n) {
    let i = Pn();
    if (n > i.length)
        throw new Error("input too large");
    i.fill(t, e, n)
}
null != self.document && function() {
    let l = null
      , o = null
      , u = function() {
        "complete" !== document.readyState && "interactive" !== document.readyState || !o || function(l, o) {
            let u = document.createElement("input");
            u.setAttribute("type", "file"),
            u.multiple = !0;
            let f, c, a = function() {
                let t = {
                    version: 3
                };
                t.type = de;
                let e = [];
                t.sample_catalogue = e;
                let n = Dt();
                for (let t of n) {
                    let n = 0
                      , i = null
                      , r = t.S;
                    n += r.T.length,
                    r.$ && (H(r.T, r.$) ? i = r.T.length - r.$.length : (i = r.T.length,
                    n += r.$.length));
                    let l = new Uint8Array(n);
                    l.set(r.T, 0),
                    i == r.T.length && l.set(r.$, r.T.length);
                    let o = {
                        id: t.id,
                        name: t.dt,
                        loop_start: i,
                        brr: btoa(String.fromCharCode.apply(null, l))
                    };
                    null != r.N && (o.base_frequency = r.N),
                    null != r.Ht && (o.adsr0 = r.Ht),
                    null != r.Kt && (o.adsr1 = r.Kt),
                    e.push(o)
                }
                let i = [];
                t.sample_directory = i;
                let l = Tt();
                for (let t of l) {
                    let e = M(t.id)
                      , n = t.querySelector("select").value
                      , r = t.I
                      , l = t.querySelector(".i317").checked;
                    i.push({
                        idx: e,
                        sample_id: n,
                        base_frequency: r,
                        volume_envelope_attack_time: t.L,
                        volume_envelope_decay_time: t.R,
                        volume_envelope_sustain_level: t.V,
                        volume_envelope_sustain_time: t.G,
                        pitch_envelope_attack_time: t.H,
                        pitch_envelope_decay_time: t.X,
                        pitch_envelope_amount: t.Z,
                        i34: t.et,
                        i35: t.it,
                        selected: l
                    })
                }
                return t.global_settings = function() {
                    let t = {};
                    for (let e of r) {
                        let n = Ie(e);
                        t[Ee(e, 3)] = Pe(n)
                    }
                    return t
                }(),
                t.channel_settings = function() {
                    let t = [];
                    for (let e = 0; e < 16; ++e) {
                        let n = {};
                        t.push(n);
                        for (let[t,i] of w) {
                            let i = xe(t, e);
                            n[Ae(t, e, 3)] = Pe(i)
                        }
                    }
                    return t
                }(),
                t.custom_tunings = function() {
                    let t = [];
                    for (let e = 0; e < 128; ++e) {
                        let n = at(Fe(e));
                        t.push({
                            semitone: parseFloat(n.value)
                        })
                    }
                    return {
                        tunings: t
                    }
                }(),
                t
            }, y = !1, T = !1, O = function() {
                if (o) {
                    if (!y) {
                        y = !0;
                        let t = a()
                          , e = o.transaction(["session"], "readwrite", {
                            durability: "relaxed"
                        })
                          , n = e.objectStore("session")
                          , i = n.clear()
                          , r = function(t) {
                            y = !1,
                            T && (T = !1,
                            O())
                        };
                        return e.addEventListener("abort", r),
                        e.addEventListener("complete", r),
                        void i.addEventListener("success", (function(i) {
                            n.add(t, "i62").addEventListener("success", (function(t) {
                                e.commit()
                            }
                            ))
                        }
                        ))
                    }
                    T = !0
                }
            }, j = at("i135"), L = 0, W = function() {
                let t = "_xz_" + L;
                for (; at(t); )
                    L += 1,
                    t = "_xz_" + L;
                return t
            }, J = function(t) {
                let e;
                for (Tt().length,
                e = 0; e < 256 && document.getElementById(g(e)); ++e)
                    ;
                256 != e ? (t.Qt = e,
                c(t)) : alert(m("i225"))
            }, K = function(t) {
                let e, n, i, r, l = t.S;
                return 128 & l.Ht && (e = 15 - (15 & l.Ht) << 3,
                n = 112 - (112 & l.Ht),
                i = l.Kt >> 1 & 112,
                r = 31 - (31 & l.Kt) << 2),
                {
                    Xt: t.id,
                    N: null,
                    q: e,
                    C: n,
                    B: i,
                    W: r
                }
            }, X = function(t) {
                let e = t.Yt
                  , n = document.createElement("div")
                  , i = t.name;
                n.id = t.id,
                n.O = !0,
                n.classList.add("i307");
                let r = n;
                r.style.display = "flex",
                r.style.alignItems = "center";
                let l = document.createElement("img");
                l.src = "hamburger.svg",
                l.style.height = "1.5em",
                l.style.margin = "0em 0.25em",
                l.classList.add("i319"),
                r.appendChild(l);
                let o = document.createElement("div");
                r.appendChild(o);
                let u = He(e)
                  , c = document.createElement("span");
                c.classList.add("i316"),
                c.innerHTML = b(m("i154"), i, u),
                o.appendChild(c);
                let a = document.createElement("button");
                a.innerHTML = m("i149"),
                a.addEventListener("click", (function(t) {
                    let e = c
                      , i = n.dt
                      , r = prompt(b(m("i155"), i));
                    if (null !== r) {
                        let t = He(n.S);
                        e.innerHTML = b(m("i154"), r, t),
                        n.dt = r
                    }
                    f(),
                    O()
                }
                )),
                o.appendChild(a);
                let s = document.createElement("button");
                s.classList.add("i311"),
                s.innerHTML = m("i150"),
                s.F = t.id,
                s.addEventListener("click", xt),
                o.appendChild(s),
                s.S = e,
                s.M = !1;
                let h = document.createElement("button");
                h.innerHTML = m("i151"),
                h.addEventListener("click", (function(t) {
                    J(K(n)),
                    Le(),
                    It(),
                    O(),
                    ht()
                }
                )),
                o.appendChild(h);
                let d = document.createElement("button");
                d.innerHTML = m("i152"),
                d.addEventListener("click", (function(t) {
                    Mt(s);
                    let e = n;
                    e.parentNode.removeChild(e),
                    f(),
                    O()
                }
                )),
                o.appendChild(d),
                n.dt = i,
                n.S = e,
                j.appendChild(n);
                let w = l;
                w.draggable = !0,
                w.addEventListener("dragstart", (function(t) {
                    t.dataTransfer.setData("text/plain", n.id),
                    t.dataTransfer.effectAllowed = "copy",
                    t.dataTransfer.setDragImage(r, 25, 25),
                    setTimeout((function() {
                        !function(t) {
                            let e = Dt();
                            for (let n = 0; n < e.length; ++n) {
                                let i = e[n];
                                Pt(jt(t, i), i)
                            }
                            var n, i;
                            n = jt(t, null),
                            (i = e[e.length - 1]).parentNode.insertBefore(n, i.nextSibling)
                        }((function() {
                            f(),
                            O()
                        }
                        ))
                    }
                    ), 0)
                }
                )),
                w.addEventListener("dragend", (function(t) {
                    !function() {
                        for (let t of Array.from(document.getElementsByClassName("i318")))
                            Ot(t)
                    }()
                }
                ))
            };
            u.addEventListener("change", (function(t) {
                let e = [];
                for (let t of u.files)
                    e.push(Y(t).catch((function(e) {
                        "CancelledError" != e.name && alert(b(m("i226"), t.name, e))
                    }
                    )));
                u.value = "",
                at("i133").Zt = at("i133").innerText,
                at("i133").disabled = !0,
                at("i133").innerHTML = at("i133").dataset.i148,
                Promise.all(e).finally((function() {
                    at("i133").disabled = !1,
                    at("i133").innerHTML = at("i133").Zt
                }
                ))
            }
            )),
            at("i133").addEventListener("click", (function(t) {
                return u.click(),
                !1
            }
            ));
            let Y = function(t) {
                return t.arrayBuffer().then((function(e) {
                    let n = new Uint8Array(e);
                    return "SNES-SPC700 Sound File Data v0.30" == (new TextDecoder).decode(n.subarray(0, 33)) ? it(t) : "RIFF" == (new TextDecoder).decode(n.subarray(0, 4)) && "sfbk" == (new TextDecoder).decode(n.subarray(8, 12)) ? et(t) : rt(t)
                }
                ))
            }
              , Z = async function(t) {
                let e = 131072;
                for (let n of t) {
                    if (null != n.N)
                        continue;
                    let t;
                    n.$ ? (t = (e - 16 * n.T.length / 9) / (16 * n.$.length / 9),
                    t = Math.ceil(t),
                    t = Math.max(0, t)) : t = 0;
                    let i = new Float32Array(e)
                      , r = 0
                      , l = function(t) {
                        r >= e || (t *= .21557895 - .41663158 * Math.cos(2 * Math.PI * r / (e - 1)) + .277263158 * Math.cos(4 * Math.PI * r / (e - 1)) - .083578947 * Math.cos(6 * Math.PI * r / (e - 1)) + .006947368 * Math.cos(8 * Math.PI * r / (e - 1)),
                        i[r] = t / 32768,
                        r += 1)
                    }
                      , o = null;
                    o = ut(n.T, o, l);
                    for (let e = 0; e < t; ++e)
                        o = ut(n.$, o, l);
                    const u = 5;
                    let f = await Gt(i.buffer, u) / e * 32e3;
                    if (n.$) {
                        let t = 32e3 / (16 * n.$.length / 9)
                          , e = f / t;
                        f = t * Math.round(e)
                    }
                    n.N = f
                }
            }
              , et = function(t) {
                let e = t.arrayBuffer().then((async function(t) {
                    let e = await ft({
                        u: !0,
                        h: !0,
                        m: !0,
                        p: !0
                    })
                      , n = await function(t, e, n, i, r) {
                        return $t(2, {
                            _: t,
                            u: e,
                            h: n,
                            m: i,
                            p: r
                        }, [t])
                    }(t, e.u, e.h, e.m, e.p);
                    return n
                }
                )).then((async function(t) {
                    let {info: e, te: n} = t;
                    return await Z(n),
                    t
                }
                )).then((function(t) {
                    let {info: e, te: n} = t;
                    n.sort((function(t, e) {
                        return t.Qt - e.Qt
                    }
                    ));
                    for (let t = 0; t < n.length; ++t) {
                        let i = n[t]
                          , r = `${e.ee} #${i.Qt} ${i.name} ${i.ne ? "(ROM)" : ""} ${i.$ ? "(Looping)" : ""}`
                          , l = W();
                        X({
                            id: l,
                            name: r,
                            Yt: i
                        })
                    }
                    O(),
                    f()
                }
                ));
                return e
            }
              , it = function(t) {
                let e = t.arrayBuffer().then((function(t) {
                    let {ie: e, re: n} = function(t) {
                        let e = new Uint8Array(t)
                          , n = String.fromCharCode.apply(null, e.slice(46, 78))
                          , i = String.fromCharCode.apply(null, e.slice(78, 110));
                        return n = st(n),
                        i = st(i),
                        {
                            ie: i,
                            re: n
                        }
                    }(t);
                    return {
                        ie: e,
                        re: n,
                        le: t
                    }
                }
                )).then((function(t) {
                    let {ie: e, re: n, le: i} = t;
                    return function(t) {
                        return $t(0, {
                            oe: t
                        }, [t])
                    }(i).then((function(t) {
                        return {
                            ie: e,
                            re: n,
                            te: t
                        }
                    }
                    ))
                }
                )).then((async function(t) {
                    let {ie: e, re: n, te: i} = t;
                    return await Z(i),
                    t
                }
                )).then((function(t) {
                    let {ie: e, re: n, te: i} = t;
                    i.sort((function(t, e) {
                        return t.Qt - e.Qt
                    }
                    ));
                    for (let t = 0; t < i.length; ++t) {
                        let r = i[t]
                          , l = `${e} - ${n} #${r.Qt}`
                          , o = W();
                        X({
                            id: o,
                            name: l,
                            Yt: r
                        })
                    }
                    O(),
                    f()
                }
                ));
                return e
            }
              , rt = function(t) {
                let e = t.name;
                return ct(t).catch((function(n) {
                    if ("EncodingError" === n.name && e.toLowerCase().endsWith(".brr"))
                        return t.arrayBuffer().then((async function(t) {
                            let e = new Uint8Array(t);
                            if (e.length % 9 != 2 && e.length % 9 != 0)
                                throw n;
                            let i, r = e.subarray(e.length % 9, e.length);
                            if (e.length % 9 == 2)
                                i = (e[0] + 256 * e[1]) / 9;
                            else {
                                let t = await ft({
                                    o: !0
                                });
                                i = t.o ? (r.length / 9 * 16 - 32 * t.o) / 16 : null
                            }
                            return [r, i]
                        }
                        ));
                    throw n
                }
                )).then((function(t) {
                    let[e,n] = t
                      , i = null;
                    return null != n && (i = e.slice(9 * n),
                    i.length),
                    {
                        T: e,
                        $: i
                    }
                }
                )).then((async function(t) {
                    return await Z([t]),
                    t
                }
                )).then((function(t) {
                    let n = W();
                    X({
                        id: n,
                        name: e,
                        Yt: t
                    }),
                    O(),
                    f()
                }
                ))
            }
              , lt = function(t, e) {
                return pt(t, bt(e))
            }
              , ot = function(t) {
                let e = at("i19").value
                  , n = _t(e);
                null == n && (n = parseFloat(e),
                isNaN(n) && (n = null));
                let i = at("i18");
                if (null == n)
                    return i.innerText = m("i256"),
                    i.classList.remove("i283"),
                    null;
                let r = 18 * parseFloat(at("i34").value);
                if (isNaN(r) || r % 9)
                    return i.innerText = m("i257"),
                    i.classList.remove("i283"),
                    null;
                let l = 18 * parseFloat(at("i35").value);
                return isNaN(l) || l % 9 ? (i.innerText = m("i258"),
                i.classList.remove("i283"),
                null) : {
                    j: n,
                    q: ye("i21"),
                    C: ye("i23"),
                    B: ye("i25"),
                    W: ye("i27"),
                    J: ye("i29"),
                    K: ye("i31"),
                    Y: ye("i33"),
                    tt: r,
                    nt: l
                }
            };
            at("i38").addEventListener("click", (function(t) {
                t.preventDefault();
                let e = at("i16")
                  , n = ot(e);
                n && e.ue(n)
            }
            )),
            function() {
                for (let t of ["i21", "i23", "i25", "i27", "i29", "i31", "i33"])
                    ge(t);
                return at("i16")
            }().addEventListener("close", (function(t) {
                if ("submit" != this.returnValue)
                    return;
                let e = ot(this);
                e ? this.fe(e) : this.showModal()
            }
            ));
            let ht, dt = function(t) {
                let e = document.createElement("option");
                e.value = "",
                e.text = m("i206"),
                t.add(e, null);
                let n = Dt();
                for (let i of n)
                    e = document.createElement("option"),
                    e.value = i.id,
                    e.text = i.dt,
                    t.add(e, null)
            }, wt = function(t) {
                let e = t.value;
                t.options.length = 0,
                dt(t),
                t.value = e,
                -1 == t.selectedIndex && (t.value = "")
            };
            f = function() {
                let t = Tt();
                for (let e of t) {
                    let t = e.querySelector("select");
                    wt(t)
                }
                Le(),
                ht()
            }
            ,
            ht = function() {
                let t = Tt()
                  , e = 256
                  , n = {}
                  , i = -1
                  , r = function(t) {
                    let r = M(t.id)
                      , l = t.querySelector("select")
                      , o = t.querySelector(".i314")
                      , u = l.value;
                    if ("" == u)
                        return void (o.ce = 0);
                    i = Math.max(i, r);
                    let f = at(u);
                    if (n[u])
                        return void (o.ce = 0);
                    n[u] = !0;
                    let c = He(f.S);
                    o.ce = c,
                    e += c
                };
                for (let e of t)
                    r(e);
                e += 4 * (i + 1);
                let l = 65280;
                for (let e of t) {
                    let t = e.querySelector(".i314");
                    t.innerHTML = " " + b(m("i156"), t.ce, t.ce / l)
                }
                at("i124").innerHTML = (4 * (i + 1)).toString(),
                at("i125").innerHTML = (e - 256).toString(),
                at("i126").innerHTML = l.toString(),
                at("i127").innerHTML = v((e - 256) / l);
                let o = e;
                o % 256 && (o += 256 - o % 256);
                let u = Math.min(Math.floor((65536 - o) / 2048), 15);
                at("i128").innerHTML = "0x" + o.toString(16),
                at("i129").innerHTML = "0x" + (o >> 8).toString(16),
                at("i130").innerHTML = "0x" + u.toString(16)
            }
            ;
            let mt = function(t, e) {
                t.F = e,
                t.disabled = !(e && e.length)
            }
              , pt = function(t, e) {
                t.I = e
            }
              , _t = function(t) {
                let e = t.match(/^\s*([a-gA-G])\s*([#b])?\s*(\d+)\s*$/);
                if (null == e)
                    return null;
                {
                    let t = {
                        c: 0,
                        d: 2,
                        e: 4,
                        f: 5,
                        g: 7,
                        a: 9,
                        b: 11
                    }[e[1].toLowerCase()];
                    return "#" == e[2] ? t += 1 : "b" == e[2] && (t -= 1),
                    12 * (parseInt(e[3]) + 1) + t
                }
            }
              , yt = function(t, e, n, i) {
                let r = e.j
                  , l = e.q
                  , o = e.C
                  , u = e.B
                  , f = e.W
                  , c = e.J
                  , a = e.K
                  , s = e.Y;
                at("i34").value = e.tt / 18,
                at("i35").value = e.nt / 18,
                at("i19").value = r,
                ve("i21", l),
                ve("i23", o),
                ve("i25", u),
                ve("i27", f),
                ve("i29", c),
                ve("i31", a),
                ve("i33", s),
                at("i17").innerText = t,
                at("i18").classList.add("i283"),
                at("i16").ue = i,
                at("i16").fe = n,
                at("i16").showModal()
            }
              , gt = function(t, e, n) {
                e.parentNode.U = t,
                t.addEventListener("change", (function(t) {
                    Le(),
                    ht()
                }
                )),
                t.addEventListener("change", (function(e) {
                    mt(n, t.value),
                    Mt(n),
                    O()
                }
                )),
                e.addEventListener("click", (function(n) {
                    let i, r = M(e.parentNode.id);
                    i = t.value ? at(t.value).dt : b(m("i209"), r);
                    let l = qt(e.parentNode);
                    yt(i, l, (function(t) {
                        let n = t.j
                          , i = t.q
                          , r = t.C
                          , l = t.B
                          , o = t.W
                          , u = t.J
                          , f = t.K
                          , c = t.Y;
                        lt(e.parentNode, n),
                        e.parentNode.L = i,
                        e.parentNode.R = r,
                        e.parentNode.V = l,
                        e.parentNode.G = o,
                        e.parentNode.H = u,
                        e.parentNode.X = f,
                        e.parentNode.Z = c,
                        e.parentNode.et = t.tt,
                        e.parentNode.it = t.nt,
                        O()
                    }
                    ), (function(t) {
                        let e = vn();
                        e && Lt(e, r, t)
                    }
                    ))
                }
                )),
                n.addEventListener("click", xt)
            }
              , At = function(t, e, n, i) {
                let r = i.N;
                null == i.Xt ? t.value = "" : t.value = i.Xt,
                pt(e.parentNode, r),
                mt(n, i.Xt);
                let l = function(t, e) {
                    return null == t ? e : t
                };
                e.parentNode.L = l(i.q, 0),
                e.parentNode.R = l(i.C, 0),
                e.parentNode.V = l(i.B, 127),
                e.parentNode.G = l(i.W, 127),
                e.parentNode.H = l(i.J, 0),
                e.parentNode.X = l(i.K, 0),
                e.parentNode.Z = l(i.Y, 8192),
                e.parentNode.et = l(i.tt, 0),
                e.parentNode.it = l(i.nt, 0)
            }
              , Ut = function() {
                let t = [];
                return document.querySelectorAll(".i317:checked").forEach((function(e) {
                    t.push(e.parentNode)
                }
                )),
                t
            }
              , It = function() {
                let t = Ut()
                  , e = t.length;
                at("i120").disabled = !e,
                t.length == Tt().length ? at("i119").innerText = m("i208") : at("i119").innerText = m("i207")
            };
            at("i119").addEventListener("click", (function(t) {
                Ut().length == Tt().length ? document.querySelectorAll(".i317").forEach((function(t) {
                    t.checked = !1
                }
                )) : document.querySelectorAll(".i317").forEach((function(t) {
                    t.checked = !0
                }
                )),
                It(),
                O()
            }
            )),
            at("i120").addEventListener("click", (function(t) {
                let e = Ut();
                e.length;
                let n = e[0]
                  , i = {
                    j: 12 * Math.log2(kt(n) / 440) + 69,
                    q: n.L,
                    C: n.R,
                    W: n.G,
                    B: n.V,
                    J: n.H,
                    K: n.X,
                    Y: n.Z,
                    tt: n.et,
                    nt: n.it
                };
                yt("Editing Multiple Patches", i, (function(t) {
                    let n = t.j
                      , i = t.q
                      , r = t.C
                      , l = t.B
                      , o = t.W
                      , u = t.J
                      , f = t.K
                      , c = t.Y;
                    for (let a of e)
                        lt(a, n),
                        a.L = i,
                        a.R = r,
                        a.V = l,
                        a.G = o,
                        a.H = u,
                        a.X = f,
                        a.Z = c,
                        a.et = t.tt,
                        a.it = t.nt;
                    O()
                }
                ))
            }
            )),
            c = function(t) {
                let e = document.createElement("div")
                  , n = t.Qt;
                e.id = g(n),
                e.g = !0,
                e.classList.add("i306");
                let i = document.createElement("input");
                i.setAttribute("type", "checkbox"),
                i.classList.add("i317"),
                i.checked = t.selected,
                e.appendChild(i),
                i.addEventListener("change", (function(t) {
                    It(),
                    O()
                }
                ));
                let r = document.createElement("button");
                r.classList.add("i315"),
                r.innerText = n + ".",
                e.appendChild(r);
                let l = document.createElement("button");
                r.addEventListener("click", (function(t) {
                    for (; ; ) {
                        let t = prompt(m("i217"));
                        if (null !== t) {
                            if (t = Et(t),
                            isNaN(t))
                                continue;
                            if (t < 0 || t > 255)
                                continue;
                            if (document.getElementById(g(t)))
                                continue;
                            this.parentNode.id = g(t),
                            this.innerHTML = `${t}.`,
                            vt(l)
                        }
                        break
                    }
                    Le(),
                    ht(),
                    O()
                }
                ));
                let o = document.createElement("select");
                dt(o),
                e.appendChild(o);
                let u = document.createElement("button");
                u.innerText = m("i157"),
                e.appendChild(u),
                e.appendChild(l),
                vt(l),
                gt(o, u, l),
                At(o, u, l, t);
                let f = document.createElement("button");
                e.appendChild(f),
                f.innerHTML = m("i152"),
                f.classList.add("i313"),
                f.addEventListener("click", (function(t) {
                    let e = this.parentNode;
                    Mt(l),
                    e.parentNode.removeChild(e),
                    Le(),
                    It(),
                    ht(),
                    O()
                }
                ));
                let c = document.createElement("span");
                c.classList.add("i314"),
                e.appendChild(c),
                at("i121").appendChild(e)
            }
            ,
            at("i122").addEventListener("click", (function(t) {
                J({
                    Xt: "",
                    N: null
                }),
                Le(),
                It(),
                ht(),
                O()
            }
            )),
            ht();
            let Nt, St, Ft = function() {
                alert(m("i227")),
                mn()
            }, Rt = [], Bt = [];
            for (let t = 0; t < 16; ++t)
                Rt[t] = 16383,
                Bt[t] = !1;
            let zt = function(n) {
                let l = 240 & n.data[0]
                  , o = function(t, e) {
                    Te(t, e),
                    Se(t) && Xn(),
                    O()
                };
                if (176 == l) {
                    let l = 15 & n.data[0]
                      , u = n.data[1]
                      , f = n.data[2];
                    if (99 == u)
                        return Rt[l] = f << 7,
                        void (Bt[l] = !0);
                    if (98 == u)
                        return Rt = Rt[l] | f,
                        void (Bt[l] = !0);
                    if (101 == u || 100 == u)
                        return void (Bt[l] = !1);
                    if (121 == u) {
                        for (let t of $e)
                            Te(xe(d(t), l), t[3]);
                        return Bt[l] = !1,
                        Rt[l] = 16383,
                        void O()
                    }
                    if (92 == u) {
                        let e = 16e3 * Math.min(f, 126) / 126;
                        return Te(t, e),
                        Nt(),
                        !0
                    }
                    if (95 == u)
                        return Te("_oikoiu128384", 16e3 * Math.min(f, 126) / 126),
                        Nt(),
                        !0;
                    if (94 == u) {
                        let t = 16e3 * Math.min(f, 126) / 126;
                        return Te(e, t),
                        St(),
                        !0
                    }
                    if (93 == u)
                        return Te("_617a7s9df", f),
                        St(),
                        !0;
                    for (let t of h) {
                        if ((1 == t[1] || 0 == t[1] || 3 == t[1]) && t[2] == u)
                            return void o(xe(d(t), l), f);
                        if ((4 == t[1] || 5 == t[1] || 6 == t[1]) && Bt[l] && (6 == u || 38 == u) && Rt[l] == t[2]) {
                            let e = xe(d(t), l);
                            return 6 == u ? f <<= 7 : f |= -128 & Pe(e),
                            void o(e, f)
                        }
                    }
                    for (let t of r) {
                        if ((1 == t[1] || 0 == t[1] || 3 == t[1]) && t[2] == u)
                            return void o(Ie(t), f);
                        if (2 == t[1] && i(t[2]).indexOf(u) >= 0) {
                            let e = Ie(t);
                            return f = 2 * f + i(t[2]).indexOf(u),
                            f >= 128 && (f -= 256),
                            void o(e, f)
                        }
                    }
                } else {
                    if (192 == l) {
                        let t = 15 & n.data[0]
                          , e = n.data[1];
                        return void o(xe("_04", t), e)
                    }
                    if (240 == n.data[0] && 127 == n.data[1] && 0 == n.data[2] && 8 == n.data[3] && 2 == n.data[4] && 0 == n.data[5])
                        for (let t = 0; t < n.data[6]; ++t) {
                            let e = n.data[7 + 4 * t + 0]
                              , i = (16384 * n.data[7 + 4 * t + 1] + 128 * n.data[7 + 4 * t + 2] + n.data[7 + 4 * t + 3]) / 16384;
                            return void o(Fe(e), i)
                        }
                }
            }
              , Jt = function(t, e, n) {
                let i = null
                  , r = function() {
                    at(t).style.backgroundColor = n,
                    i = null
                };
                return function() {
                    at(t).style.backgroundColor = e,
                    i || (i = window.setTimeout(r, 1e3 / 60))
                }
            }
              , Ht = Jt("i44", "lightblue", "darkblue")
              , Kt = function(t) {
                if (Ht(),
                zt(t))
                    return;
                let e = vn();
                e && e.send(t.data)
            }
              , Qt = Jt("i40", "orange", "darkred")
              , Xt = function(t) {
                Qt()
            }
              , Zt = null
              , te = at("i41")
              , ne = at("i43")
              , ie = at("i45")
              , ue = null
              , ae = !1
              , _e = !1
              , Ne = !1
              , nn = null
              , sn = function() {
                nn && nn.removeEventListener("midimessage", Xt),
                nn = "no-input-port" == te.value ? null : Zt.inputs.get(te.value),
                nn && nn.addEventListener("midimessage", Xt)
            };
            te.addEventListener("change", (function() {
                return ae = !0,
                sn(),
                !0
            }
            )),
            ne.addEventListener("change", (function() {
                return _e = !0,
                !0
            }
            ));
            let hn = function() {
                ue && ue.removeEventListener("midimessage", Kt),
                ue = "no-input-port" == ie.value ? null : Zt.inputs.get(ie.value),
                ue && ue.addEventListener("midimessage", Kt)
            };
            ie.addEventListener("change", (function() {
                return Ne = !0,
                hn(),
                !0
            }
            ));
            let mn = function() {
                let t = te.value
                  , e = ne.value
                  , n = ie.value;
                te.options.length = 0,
                ne.options.length = 0,
                ie.options.length = 0;
                let i = document.createElement("option");
                if (i.value = "no-input-port",
                i.text = m(Zt ? "i210" : "i212"),
                ie.add(i, null),
                Zt)
                    for (let t of Zt.inputs.values()) {
                        let e = document.createElement("option");
                        e.value = t.id,
                        e.text = t.name,
                        ie.add(e, null)
                    }
                Ne && (ie.value = n,
                -1 == ie.selectedIndex && (ie.value = "no-input-port",
                Ne = !1)),
                hn();
                let r = document.createElement("option");
                if (r.value = "no-input-port",
                r.text = m(Zt ? "i210" : "i212"),
                te.add(r, null),
                Zt)
                    for (let t of Zt.inputs.values()) {
                        let e = document.createElement("option");
                        e.value = t.id,
                        e.text = t.name,
                        te.add(e, null)
                    }
                let l = !0;
                ae && (te.value = t,
                l = -1 == te.selectedIndex);
                let o = document.createElement("option");
                if (o.value = "no-input-port",
                o.text = m(Zt ? "i211" : "i212"),
                ne.add(o, null),
                Zt)
                    for (let t of Zt.outputs.values()) {
                        let e = document.createElement("option");
                        e.value = t.id,
                        e.text = t.name,
                        ne.add(e, null)
                    }
                let u = !0;
                if (_e && (ne.value = e,
                u = -1 == ne.selectedIndex),
                u) {
                    if (ne.value = "no-input-port",
                    Zt)
                        for (let t of Zt.outputs.values())
                            t.name.startsWith("Super MIDI Pak") && (ne.value = t.id);
                    _e = !1
                }
                l && (te.value = "no-input-port",
                ae = !1),
                sn()
            }
              , pn = function(t) {
                Zt = t,
                mn(),
                Zt.addEventListener("statechange", mn),
                at("i131").disabled = !1
            }
              , _n = Jt("i42", "lightgreen", "darkgreen")
              , vn = function() {
                if ("no-input-port" == ne.value)
                    return null;
                let t = Zt.outputs.get(ne.value);
                return new class {
                    send(e) {
                        return _n(),
                        t.send(e)
                    }
                }
            }
              , yn = function() {
                return "no-input-port" == te.value ? null : Zt.inputs.get(te.value)
            }
              , gn = async function(t, e) {
                let n = new Uint8Array([].concat([240], k, [0, 6, 2], A, [0, 0]));
                for (; ; ) {
                    e.send(P());
                    let i = await G(t, n, 500);
                    if (i.length != n.length + 3) {
                        let t = null
                          , e = null;
                        return 247 != i[n.length + 6] && (t = i.subarray(n.length + 6, n.length + 6 + 16),
                        247 != i[n.length + 6 + 16] && (e = S(i.subarray(n.length + 6 + 16, n.length + 6 + 16 + 4)))),
                        {
                            ae: S(i.subarray(n.length, n.length + 2)),
                            se: S(i.subarray(n.length + 2, n.length + 4)),
                            he: t,
                            de: e,
                            we: !1
                        }
                    }
                    return {
                        se: i[n.length],
                        we: !0
                    }
                }
            }
              , Mn = async function() {
                let t = vn();
                if (!t)
                    return alert(m("i230")),
                    [null, null];
                let e = yn();
                if (e && e.name.startsWith("Super MIDI Pak") && "Super MIDI Pak" == e.manufacturer) {
                    let n = tt(e);
                    try {
                        await gn(n, t)
                    } catch (t) {
                        if ("TimeoutError" != t.name)
                            throw t;
                        e = null
                    } finally {
                        nt(n)
                    }
                }
                return [t, e]
            }
              , bn = function(t, e, n) {
                return Ct(t, e, n, p, Q)
            }
              , kn = function(t) {
                return Ve(),
                t.then((function() {
                    alert(m("i228"))
                }
                )).catch((function(t) {
                    alert(b(m("i229"), t))
                }
                )).finally((function() {
                    We()
                }
                ))
            };
            at("i131").addEventListener("click", (async function(t) {
                let[e,n] = await Mn();
                e && await kn(bn(n, e, at("i132").checked))
            }
            ));
            let An = function(t, e) {
                t.send(function() {
                    let t = new Uint8Array(1)
                      , e = 0;
                    return t[e++] = 255,
                    t
                }());
                let n, i = new Uint8Array(8), r = 0;
                return r = F(i, I, r),
                r = F(i, x, r),
                r = F(i, E, r),
                i[r++] = 1,
                r = F(i, N, r),
                i.length,
                n = 2e3,
                G(e, i, n)
            }
              , xn = async function() {
                let t = vn();
                if (t) {
                    Ve();
                    try {
                        await Ge(t, p)
                    } finally {
                        We()
                    }
                } else
                    alert(m("i230"))
            };
            at("i102").addEventListener("click", (function(t) {
                return xn()
            }
            ));
            let En = document.createElement("input");
            En.setAttribute("type", "file"),
            En.multiple = !1,
            En.addEventListener("change", (async function(t) {
                for (let t of En.files) {
                    let e = Qe(await t.arrayBuffer());
                    null != e ? (Ke(e),
                    O(),
                    await xn()) : alert(m("i240"))
                }
                En.value = ""
            }
            )),
            at("i103").addEventListener("click", (function(t) {
                return En.click(),
                !1
            }
            ));
            let Un = async function(t, e, n, i) {
                await Promise.resolve().then((function() {
                    return Ct(e, t, !0, n, i)
                }
                )).then((function() {
                    return Je(t, n)
                }
                ))
            };
            at("i48").addEventListener("click", (async function(t) {
                let[e,n] = await Mn();
                e && await kn(V(n, e, 800, (function(t) {
                    return C(t)
                }
                )).then((function() {
                    return Un(e, n, p, Q)
                }
                )))
            }
            )),
            at("i59").addEventListener("click", (async function(t) {
                let e = []
                  , n = 192
                  , [i,r,l] = fe(e, n)
                  , o = null;
                Yt(e, re("MThd")),
                Yt(e, le(6)),
                Yt(e, oe(0)),
                Yt(e, oe(1)),
                Yt(e, oe(n)),
                Yt(e, re("MTrk")),
                Yt(e, le(0));
                let u = e.length;
                await Un(i, o, r, l),
                i.ut(ee);
                let f = e.length - u;
                e.splice(u - 4, 4, ...le(f));
                let c = m("i221");
                he(null, new Blob([new Uint8Array(e)],{
                    type: "audio/midi"
                }), c)
            }
            ));
            let In = function(t, e, n) {
                at(t).addEventListener("click", (async function(i) {
                    let[r,l] = await Mn();
                    if (r) {
                        at(t).Zt = at(t).innerText,
                        at(t).innerHTML = at(t).dataset.i145,
                        Ve();
                        try {
                            await V(l, r, e, n)
                        } catch (t) {
                            alert(b(m("i237"), t))
                        } finally {
                            at(t).innerHTML = at(t).Zt,
                            We()
                        }
                    }
                }
                ))
            };
            In("i52", 1300, R),
            at("i49").addEventListener("click", (async function(t) {
                let e = vn();
                if (e)
                    for (let t = 0; t < 16; ++t)
                        e.send(D(t, 123, 0)),
                        await p(_(3))
            }
            ));
            let Nn = async function(t, e) {
                await z(t, e, 1e4, (function(t) {
                    return function(t, e, n) {
                        let i = new Uint8Array(6 + U)
                          , r = 0;
                        return r = F(i, I, r),
                        r = F(i, x, r),
                        r = F(i, E, r),
                        i[r++] = 8,
                        i[r++] = t,
                        i[r++] = e,
                        i[r++] = n,
                        r = F(i, N, r),
                        i.length,
                        i
                    }(t, 0, 8)
                }
                ))
            }
              , $n = async function(t, e, n) {
                let i = new Uint8Array(t);
                try {
                    let t = 0
                      , r = 128;
                    at("i50").innerHTML = at("i50").dataset.i140,
                    await Nn(n, e);
                    let l = async function(t) {
                        return z(n, e, 1e3, (function(e) {
                            let n = r
                              , l = i.subarray(t, t + n);
                            if (l.length != r)
                                throw new Error(m("i247"));
                            return function(t, e, n) {
                                n.length;
                                let i = $(n);
                                i.length;
                                let r = 7 + U + i.length
                                  , l = new Uint8Array(r)
                                  , o = 0;
                                o = F(l, I, o),
                                o = F(l, x, o),
                                o = F(l, E, o),
                                l[o++] = 7,
                                l[o++] = t,
                                l[o++] = e >> 7 & 127,
                                l[o++] = e >> 14 & 127,
                                o = F(l, i, o);
                                let u = 0;
                                for (let t = 1; t < o; ++t)
                                    u ^= l[t];
                                return l[o++] = u,
                                o = F(l, N, o),
                                l.length,
                                l
                            }(e, t, l)
                        }
                        ))
                    }
                      , o = 32768 - r;
                    for (; t < i.length; )
                        at("i50").innerHTML = b(at("i50").dataset.i141, t / i.length),
                        t != o && await l(t),
                        t += r;
                    await l(o),
                    await An(e, n)
                } finally {}
            }
              , Fn = document.createElement("input");
            Fn.setAttribute("type", "file");
            let Tn = function() {
                let t = vn();
                if (!t)
                    return alert(m("i230")),
                    null;
                let e = yn();
                return e ? [e, t] : (alert(m("i239")),
                null)
            };
            Fn.addEventListener("change", (async function(t) {
                if (!Fn.files.length)
                    return;
                let e = Tn();
                if (!e)
                    return;
                let[n,i] = e
                  , r = Fn.files[0];
                Fn.value = "",
                at("i50").Zt = at("i50").innerText;
                let l = await r.arrayBuffer()
                  , o = tt(n);
                try {
                    Ve();
                    try {
                        await $n(l, i, o)
                    } finally {
                        We(),
                        at("i50").innerHTML = at("i50").Zt
                    }
                } catch (t) {
                    alert(b(m("i232"), t))
                } finally {
                    nt(o)
                }
            }
            ));
            let Dn = function(t, e) {
                let n = 0;
                window.addEventListener("keydown", (function(i) {
                    i.key == t[n] ? (n += 1,
                    n == t.length && (e(),
                    n = 0)) : n = 0
                }
                )),
                window.addEventListener("focusout", (function(t) {
                    n = 0
                }
                ))
            };
            Dn("coolbeanz", (function() {
                Fn.click()
            }
            )),
            at("i50").addEventListener("click", (async function(t) {
                let e = Tn();
                if (!e)
                    return;
                let[n,i] = e
                  , r = tt(n);
                try {
                    at("i50").Zt = at("i50").innerText,
                    at("i50").me = at("i50").style.display,
                    at("i50").style.display = "initial",
                    Ve();
                    try {
                        let t, e;
                        at("i50").innerHTML = at("i50").dataset.i142;
                        let {ae: n, se: l, de: o, he: u, we: f} = await gn(r, i);
                        if (f) {
                            let i = prompt(m("i222"));
                            t = window.btoa(":c" + i),
                            e = !0,
                            n = 0
                        } else {
                            if (!u)
                                throw new Error(m("i248"));
                            let n = new Uint8Array(18)
                              , i = 0;
                            i = F(n, new Uint8Array([58, 100]), i),
                            i = F(n, u, i),
                            t = window.btoa((new TextDecoder).decode(n)),
                            e = !1
                        }
                        null == o && (o = 268435455),
                        at("i50").innerHTML = at("i50").dataset.i143;
                        let c = {
                            a: n,
                            b: l,
                            c: o
                        };
                        for (; ; ) {
                            let n = await fetch("upgrade", {
                                method: "POST",
                                headers: {
                                    Authorization: "Basic " + t,
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(c)
                            });
                            if (!n.ok) {
                                if (403 === n.status && e)
                                    throw new Error(m("i250"));
                                throw new Error(b(m("i251"), n.status))
                            }
                            let l = await n.arrayBuffer();
                            await $n(l, i, r);
                            break
                        }
                    } finally {
                        We(),
                        at("i50").innerHTML = at("i50").Zt,
                        at("i50").style.display = at("i50").me
                    }
                } catch (t) {
                    "TimeoutError" == t.name && n.name.startsWith("Super MIDI Pak") && "Super MIDI Pak" == n.manufacturer ? alert(b(m("i233"), t)) : alert(b(m("i232"), t))
                } finally {
                    nt(r)
                }
                return !1
            }
            )),
            Dn("upgrade", (function() {
                at("i50").click()
            }
            )),
            Dn("clearup", (async function() {
                let[t,e] = await Mn();
                if (!t)
                    return;
                Ve();
                let n = tt(e);
                try {
                    await Nn(n, t)
                } catch (t) {
                    alert(t.toString())
                } finally {
                    nt(n),
                    We()
                }
            }
            )),
            at("i51").addEventListener("click", (async function(t) {
                let[e,n] = await Mn();
                if (e) {
                    at("i51").Zt = at("i51").innerText,
                    at("i51").innerHTML = at("i51").dataset.i144,
                    Ve();
                    try {
                        await V(n, e, 1e4, (function(t) {
                            return function(t) {
                                let e = new Uint8Array(4 + U)
                                  , n = 0;
                                return n = F(e, I, n),
                                n = F(e, x, n),
                                n = F(e, E, n),
                                e[n++] = 9,
                                e[n++] = t,
                                n = F(e, N, n),
                                e.length,
                                e
                            }(t)
                        }
                        ))
                    } catch (t) {
                        alert(b(m("i238"), t))
                    } finally {
                        at("i51").innerHTML = at("i51").Zt,
                        We()
                    }
                }
            }
            )),
            In("i53", 800, C);
            let Pn = document.createElement("input");
            Pn.setAttribute("type", "file"),
            Pn.addEventListener("change", (function(t) {
                let e, n;
                for (; ; ) {
                    let t = prompt(m("i223"));
                    if ((null == t || new RegExp("^\\s*$").test(t)) && (t = "0"),
                    e = parseFloat(t),
                    !isNaN(e))
                        break
                }
                for (e *= 1e3; ; ) {
                    let t = prompt(m("i224"));
                    if ((null == t || new RegExp("^\\s*$").test(t)) && (t = "0"),
                    n = parseFloat(t),
                    !isNaN(n))
                        break
                }
                let i = [];
                for (let t of Pn.files)
                    i.push(t.arrayBuffer().then((function(t) {
                        return ce(n, t)
                    }
                    )).then((function(t) {
                        return Wt(t, e)
                    }
                    )).then((function(e) {
                        let n = prompt(m("i219"));
                        null == n && (n = "");
                        let i = prompt(m("i220"));
                        null == i && (i = "");
                        let r = new Uint8Array(e)
                          , l = new Date
                          , o = (l.getMonth() + 1).toString().padStart(2, "0") + "/" + (l.getDate() + 0).toString().padStart(2, "0") + "/" + (l.getFullYear() + 0).toString().padStart(4, "0");
                        r.set(re(i.slice(0, 31) + "\0"), 46),
                        r.set(re(n.slice(0, 31) + "\0"), 177),
                        r.set(re(o.slice(0, 10) + "\0"), 158),
                        se(t.name + ".spc", new Blob([e],{
                            type: "application/x-spc"
                        }))
                    }
                    )));
                Pn.value = "",
                at("i55").Zt = at("i55").innerText,
                at("i55").disabled = !0,
                at("i55").innerHTML = at("i55").dataset.i146,
                Promise.all(i).catch((function(t) {
                    alert(b(m("i236"), t))
                }
                )).finally((function() {
                    at("i55").disabled = !1,
                    at("i55").innerHTML = at("i55").Zt
                }
                ))
            }
            )),
            at("i55").addEventListener("click", (async function(t) {
                return Pn.click(),
                !1
            }
            ));
            let On = document.createElement("input");
            On.setAttribute("type", "file"),
            On.addEventListener("change", (async function(t) {
                let e = On.files[0];
                if (On.value = "",
                !e)
                    return;
                let[n,i] = await Mn();
                if (n) {
                    at("i54").Zt = at("i54").innerText,
                    at("i54").innerHTML = at("i54").dataset.i141,
                    Ve();
                    try {
                        let t = await e.arrayBuffer();
                        await Vt(n, i, t)
                    } catch (t) {
                        alert(b(m("i255"), t))
                    } finally {
                        at("i54").innerHTML = at("i54").Zt,
                        We()
                    }
                }
            }
            )),
            at("i54").addEventListener("click", (function(t) {
                return On.click(),
                !1
            }
            ));
            let jn = document.createElement("input");
            jn.setAttribute("type", "file");
            let qn = function(t, e) {
                let n;
                for (n of r)
                    if (n[1] == t && n[2] == e)
                        break;
                return n
            };
            jn.addEventListener("change", (async function(t) {
                let e = jn.files[0];
                if (jn.value = "",
                !e)
                    return;
                let n = await e.arrayBuffer()
                  , i = new Uint8Array(n).subarray(65792, 65920)
                  , r = vn();
                at("i105").Zt = at("i105").innerText,
                at("i105").innerHTML = at("i105").dataset.i141,
                Ve();
                try {
                    for (let t of [12, 28, 44, 60, 13, 15, 31, 47, 63, 79, 95, 111, 127]) {
                        let e = qn(2, t)
                          , n = Ie(e)
                          , l = i[t];
                        l >= 128 && (l -= 256),
                        Te(n, l, e[3]);
                        let o = at(n).ct(r);
                        await p(_(o))
                    }
                    let t = qn(0, 90)
                      , e = Ie(t);
                    Te(e, i[125] << 3, t[3]);
                    let n = at(e).ct(r);
                    await p(_(n)),
                    Xn(),
                    O()
                } finally {
                    at("i105").innerHTML = at("i105").Zt,
                    We()
                }
            }
            )),
            at("i105").addEventListener("click", (function(t) {
                jn.click()
            }
            )),
            mn(),
            navigator.requestMIDIAccess ? navigator.requestMIDIAccess({
                sysex: !0,
                software: !0
            }).then(pn, Ft) : alert(m("i235")),
            at("i61").addEventListener("click", (function(t) {
                at("i121").innerHTML = "",
                at("i135").innerHTML = "",
                Oe(null, 3),
                Ce(null),
                Ke(null),
                It(),
                ht(),
                O()
            }
            ));
            let Ln = document.createElement("input");
            Ln.setAttribute("type", "file");
            let Cn = new Xe("i115")
              , Rn = new Ye("i116",(t=>t),[0, 16e3],"Hz","dB")
              , Bn = new Ye("i117",(t=>t),[0, 16e3],"Hz","ms")
              , zn = function(t, e, n, i, r) {
                let l = function(t, e, n, i, r) {
                    return function(l) {
                        let o = 0 == n ? 1 : 512 * n
                          , u = 2 * Math.PI * l / 32e3
                          , f = rn(1, u * (o + 7))
                          , c = an(t, [Math.cos(u), Math.sin(u)])
                          , a = [(r - i * e / 128) / 128, 0]
                          , s = un([i, 0], f);
                        s = on(s, un(a, c));
                        let h = f;
                        h = ln(h, un([e / 128 / 128, 0], c));
                        let d = Math.atan2(s[1] * h[0] - s[0] * h[1], s[0] * h[0] + s[1] * h[1]);
                        return [Math.hypot(s[1], s[0]) / Math.hypot(h[1], h[0]) / 128, d]
                    }
                }(t, e, n, i, r);
                Rn.zt((function(t) {
                    let e = l(t)[0];
                    return 20 * Math.log10(e)
                }
                )),
                Bn.zt((function(l) {
                    let o = 0 == n ? 1 : 512 * n
                      , u = 2 * Math.PI * l / 32e3
                      , f = [];
                    for (let e = 0; e < t.length; ++e)
                        f.push(e * t[e]);
                    let c = [0, 1]
                      , a = [Math.cos(u), Math.sin(u)]
                      , s = [e / 128 / 128, 0]
                      , h = [(r - i * e / 128) / 128, 0]
                      , d = an(t, a)
                      , w = an(f, a)
                      , m = rn(1, u * (o + 7))
                      , p = on(un([i, 0], m), un(h, d))
                      , _ = on(un([i * (o + 7), 0], m), un(h, w));
                    _ = un(c, _);
                    let v = m;
                    v = ln(v, un(s, d));
                    let y = un([o + 7, 0], m);
                    y = ln(y, un(s, w)),
                    y = un(c, y);
                    let g = fn(p, v)
                      , M = fn(ln(un(_, v), un(p, y)), un(v, v));
                    return un(fn(c, [-2, 0]), fn(ln(un(g, tn(M)), un(M, tn(g))), un(g, tn(g))))[0] / 32e3 * 1e3
                }
                ))
            }
              , Vn = function(t, e, n, i) {
                if (at("i113").classList.add("i283"),
                e)
                    if (0 == n) {
                        for (let t = 0; t < i.length; ++t)
                            if (Ze(i[t]) >= 1) {
                                at("i113").classList.remove("i283");
                                break
                            }
                    } else {
                        let i = 0 == n ? 1 : 512 * n
                          , r = 2 * (i + 7)
                          , l = function(t) {
                            let e = [];
                            for (let n = 1; n < t.length; ++n)
                                e.push(n * t[n]);
                            return e
                        }(t)
                          , o = [0, 1]
                          , u = [e / 128 / 128, 0];
                        for (let e = 0; e < r; ++e) {
                            let n = 2 * Math.PI * e / r
                              , f = 1
                              , c = [Math.cos(n), Math.sin(n)]
                              , a = an(t, c)
                              , s = an(l, c)
                              , h = rn(Math.pow(f, i + 7), n * (i + 7));
                            h = ln(h, un(u, a));
                            let d = rn((i + 6) * Math.pow(f, i + 6), n * (i + 6));
                            d = ln(d, un(u, s));
                            let w = un(o, d)
                              , m = on(un(d, tn(h)), un(h, tn(d)));
                            m = m[0];
                            let p = on(un(w, tn(h)), un(h, tn(w)));
                            if (p = p[0],
                            m * c[0] + p * c[1] <= 0) {
                                at("i113").classList.remove("i283");
                                break
                            }
                        }
                    }
            }
              , Wn = function(t) {
                at("i114").classList.add("i283"),
                t && at("i114").classList.remove("i283")
            }
              , Gn = function(t) {
                let e = 0;
                for (let n = 0; n < Math.min(7, t.length); ++n)
                    e += Math.abs(t[n]);
                Wn(e > 127)
            }
              , Jn = function() {
                return at("i107").checked
            }
              , Hn = function() {
                let t, e;
                return Jn() ? (t = 28,
                e = 60) : (t = 12,
                e = 44),
                [t, e]
            }
              , Kn = function() {
                let[t,e] = Hn();
                return [Pe(Ue(2, t)), Pe(Ue(2, e))]
            }
              , Qn = []
              , Xn = function() {
                let t = n
                  , e = [];
                for (let n = 0; n < 8; ++n)
                    e.push(Pe(Ue(2, t[n])));
                let i = Pe(Ue(2, 13))
                  , r = Pe(Ue(0, 90)) >> 3
                  , [l,o] = Kn()
                  , [u,f] = Sn(Qn, e, i, r, l, o);
                Vn(e, i, r, f),
                Gn(e),
                Cn.Pt(u, f),
                zn(e, i, r, l, o)
            }
              , Yn = function(t) {
                if (t.type != de)
                    throw new Error(m("i249"));
                if (t.version > 3)
                    throw new Error(m("i249"));
                at("i121").innerHTML = "",
                at("i135").innerHTML = "";
                for (let e of t.sample_catalogue) {
                    let t = {}
                      , n = {};
                    t.T = me(atob(e.brr)),
                    null != e.loop_start && (t.$ = t.T.subarray(e.loop_start),
                    1 & t.T[e.pe - 9] && (t.T = t.T.subarray(0, e.loop_start))),
                    null != e.base_frequency && (t.N = e.base_frequency),
                    null != e.adsr0 && (t.Ht = e.adsr0),
                    null != e.adsr1 && (t.Kt = e.adsr1),
                    n.Yt = t,
                    n.id = e.id,
                    n.name = e.name,
                    n.pe = e.loop_start,
                    X(n)
                }
                for (let e of t.sample_directory) {
                    let t = {};
                    t.Qt = e.idx,
                    t.Xt = e.sample_id,
                    t.N = e.base_frequency,
                    t.q = e.volume_envelope_attack_time,
                    t.C = e.volume_envelope_decay_time,
                    t.B = e.volume_envelope_sustain_level,
                    t.W = e.volume_envelope_sustain_time,
                    t.J = e.pitch_envelope_attack_time,
                    t.K = e.pitch_envelope_decay_time,
                    t.Y = e.pitch_envelope_amount,
                    t.tt = e.i34,
                    t.nt = e.i35,
                    null == e.selected ? t.selected = !1 : t.selected = e.selected,
                    c(t)
                }
                Oe(t.global_settings, t.version),
                Ce(t.channel_settings, t.version),
                Ke(t.custom_tunings, t.version),
                Xn(),
                Le(),
                It(),
                ht()
            };
            Ln.addEventListener("change", (function(t) {
                if (!Ln.files.length)
                    return;
                Ln.files.length;
                let e = Ln.files[0];
                Ln.value = "",
                e.arrayBuffer().then((function(t) {
                    try {
                        let e = JSON.parse(we(t));
                        Yn(e),
                        O()
                    } catch (t) {
                        alert(b(m("i234"), t))
                    }
                }
                ))
            }
            )),
            at("i60").addEventListener("click", (function(t) {
                return Ln.click(),
                !1
            }
            )),
            at("i58").addEventListener("click", (function(t) {
                let e = m("i221")
                  , n = a();
                he(null, new Blob([JSON.stringify(n)],{
                    type: "application/json"
                }), e)
            }
            )),
            at("i134").addEventListener("click", (function(t) {
                for (let t of Dt())
                    J(K(t));
                Le(),
                It(),
                O(),
                ht()
            }
            )),
            document.smidi_original_title = document.title;
            let Zn = {
                sample_uploader: "i64",
                global_settings: "i65",
                echo_settings: "i66",
                custom_tunings: "i67",
                channel_1_settings: "i68",
                channel_2_settings: "i69",
                channel_3_settings: "i70",
                channel_4_settings: "i71",
                channel_5_settings: "i72",
                channel_6_settings: "i73",
                channel_7_settings: "i74",
                channel_8_settings: "i75",
                channel_9_settings: "i76",
                channel_10_settings: "i77",
                channel_11_settings: "i78",
                channel_12_settings: "i79",
                channel_13_settings: "i80",
                channel_14_settings: "i81",
                channel_15_settings: "i82",
                channel_16_settings: "i83"
            }
              , ti = function() {
                let t;
                if (location.hash)
                    t = at(location.hash.substr(1));
                else
                    for (let e of document.getElementsByClassName("i284"))
                        if (e.offsetParent) {
                            t = e;
                            break
                        }
                if (t && t.dataset.i147) {
                    for (let t in Zn)
                        at(Zn[t]).classList.remove("selected");
                    at(Zn[t.id]).classList.add("selected"),
                    new URLSearchParams(window.location.search).has("standalone") ? document.title = t.dataset.i147 : document.title = t.dataset.i147 + " - " + document.smidi_original_title
                } else
                    document.title = document.smidi_original_title
            };
            ti(),
            window.addEventListener("hashchange", ti),
            "serviceWorker"in navigator && navigator.serviceWorker.register("sw.js");
            let ei = function(t, e, n, i) {
                let r = Ue(e, n);
                Te(r, i),
                at(r).ct(t)
            }
              , ni = function(t) {
                return t > 127 ? t = 127 : t < -128 && (t = -128),
                t
            }
              , ii = function(t) {
                return ni(Math.round(t))
            }
              , ri = function(t) {
                return t < 0 ? Math.ceil(t) : Math.floor(t)
            }
              , li = function(t) {
                return t = ri(t),
                ni(t)
            }
              , oi = function(t) {
                return t = t < 0 ? Math.floor(t) : Math.ceil(t),
                ni(t)
            }
              , ui = function(t, e, i, r, l, o) {
                e.length;
                for (let i = 0; i < 8; ++i) {
                    let r = e[i];
                    null == r && (r = 0);
                    let l = Ue(2, n[i]);
                    Te(l, r),
                    at(l).ct(t)
                }
                zn(e, i, r, l, o),
                O()
            }
              , fi = function(t, e, n, i, r, l, o) {
                o || (o = {}),
                e = e.slice();
                let u = 0;
                for (let t = 0; t < e.length; ++t)
                    u += Math.abs(e[t]);
                let f = 127 / u;
                if (o._e) {
                    let e = r;
                    for (u += Math.abs(128 * e / l),
                    f = 127 / u; ; ) {
                        let t = 128 * e * f * l / (16384 + e * f * 0);
                        if (t = Math.round(t),
                        t > 127)
                            f *= 127 / t;
                        else {
                            if (!(r < -128)) {
                                r = t;
                                break
                            }
                            f *= -128 / t
                        }
                    }
                    ei(t, 2, 28, r),
                    ei(t, 2, 12, r)
                }
                for (let t = 0; t < e.length; ++t)
                    e[t] = Math.round(e[t] * f),
                    e[t] > 127 ? e[t] = 127 : e[t] < -128 && (e[t] = -128);
                for (; ; ) {
                    let t, n = 0, i = -1 / 0;
                    for (let r = 0; r < e.length; ++r) {
                        let l = Math.abs(e[r]);
                        n += l,
                        0 == r && null != o.ve || l > i && (i = l,
                        t = r)
                    }
                    if (n <= 128)
                        break;
                    if (null == o.ve)
                        e[t] < 0 ? e[t] += 1 : e[t] -= 1;
                    else if (o.ve == t)
                        e[o.ve] < 0 ? e[o.ve] += 1 : e[o.ve] -= 1;
                    else {
                        let n = Math.abs(o.ve - t);
                        e[t] < 0 ? (e[n + o.ve] += 1,
                        e[o.ve - n] += 1) : (e[n + o.ve] -= 1,
                        e[o.ve - n] -= 1)
                    }
                }
                return Wn(!1),
                ui(t, e, n, i, r, l),
                [e, r]
            }
              , ci = !1
              , ai = []
              , si = -1
              , hi = [];
            Cn.jt((function(t, e, n) {
                if (!ci) {
                    let n = tn(t[e]);
                    si = -1;
                    for (let i = 0; i < t.length; ++i)
                        if (i != e && en(n, t[i])) {
                            si = i;
                            break
                        }
                    si >= 0 ? e > si ? (t.splice(e, 1),
                    t.splice(si, 1)) : (t.splice(si, 1),
                    t.splice(e, 1)) : t.splice(e, 1),
                    hi = Qn.slice(),
                    ai = t.slice(),
                    ci = !0
                }
                let i = [];
                si >= 0 ? (i.push(n),
                i.push(tn(n))) : (n[1] = 0,
                i.push(n)),
                (t = ai.slice()).push(n),
                si >= 0 && t.push(tn(n));
                for (let e = 0; e < hi.length; ++e)
                    t.push(hi[e]);
                t.length;
                let r = [1];
                for (let e = 0; e < t.length; ) {
                    let n, i = t[e];
                    e != t.length - 1 && en(tn(i), t[e + 1]) ? (n = [i[0] * i[0] + i[1] * i[1], -2 * i[0], 1],
                    e += 2) : (n = [-i[0], 1],
                    e += 1),
                    r = wn(r, n)
                }
                let l = Pe(Ue(2, 13))
                  , o = Pe(Ue(0, 90)) >> 3
                  , [u,f] = Kn()
                  , [c,a,s] = Jn() ? [60, 44, 12] : [44, 60, 28]
                  , h = Pe(Ue(2, s));
                if (r.splice(8)[0],
                u) {
                    let t = r.map((t=>Math.abs(t * u))).reduce(((t,e)=>e + t))
                      , e = u * l / 128 - t
                      , n = u * l / 128 + t;
                    f = Math.abs(e) < Math.abs(n) ? e : n,
                    f = oi(f),
                    r = r.map((t=>li(t * u / ((f - u * l / 128) / 128)))),
                    Gn(r);
                    let i = vn();
                    ui(i, r, l, o, u, f),
                    ei(i, 2, c, f);
                    let s = oi(h / u * f);
                    ei(i, 2, a, s)
                } else {
                    h && ei(e, 2, a, 0);
                    let t, e = vn();
                    [r,t] = fi(e, r, l, o, u, f)
                }
                let[d,w] = Sn(Qn, r, l, o, u, f);
                return Vn(r, l, o, w),
                [d, e, w, i]
            }
            )),
            Cn.Ot((function(t, e) {
                return ci = !1,
                [t, e]
            }
            ));
            let di = function(t) {
                Se(t.id) && Xn(),
                t.ct(vn()),
                O()
            };
            (function(t) {
                let e = []
                  , n = [];
                for (let t of r)
                    Se(Ie(t)) ? n.push(t) : e.push(t);
                let i = at("i85")
                  , l = document.createElement("div");
                l.classList.add("i265"),
                i.appendChild(l),
                ke(t, l, e, 0, Ie);
                let o = at("i108")
                  , u = document.createElement("div");
                u.classList.add("i265"),
                o.appendChild(u),
                ke(t, u, n, 0, Ie)
            }
            )(di),
            function(t) {
                for (let e = 0; e < 16; ++e) {
                    let n = at(je[e])
                      , i = document.createElement("h2");
                    i.innerHTML = b(m("i204"), e + 1),
                    n.appendChild(i);
                    let r = document.createElement("div");
                    r.classList.add("i265"),
                    n.appendChild(r);
                    {
                        let n = document.createElement("select");
                        n.ct = async function(t) {
                            if (!t)
                                return 0;
                            let i = parseInt(n.value);
                            return t.send(D(e, 0, i >> 7 & 127)),
                            t.send(q(e, i >> 0 & 127)),
                            5
                        }
                        ,
                        n.ft = function(t) {
                            this.value = t
                        }
                        ;
                        let i = function(e) {
                            t(this)
                        };
                        n.id = xe("_04", e),
                        n.addEventListener("change", i),
                        qe(n),
                        pe(r, "i196", n, n.id)
                    }
                    let l, o, u, f = [], c = [], a = [];
                    for (let t of h) {
                        if ("channelUnavailableVoicesLabel" == t[0]) {
                            u = t;
                            continue
                        }
                        if (t[0] == s[0]) {
                            l = t;
                            continue
                        }
                        if ("i202" == t[0]) {
                            o = t;
                            continue
                        }
                        let e = !1
                          , n = !1;
                        for (let n of ["i182", "i183", "i184", "i185", "i198", "i199", "i200"])
                            if (t[0] == n) {
                                e = !0;
                                break
                            }
                        for (let e of ["i213", "i214"])
                            if (t[0] == e) {
                                n = !0;
                                break
                            }
                        e ? c.push(t) : n ? a.push(t) : f.push(t)
                    }
                    let w = function(t) {
                        return xe(d(t), e)
                    };
                    ke(t, r, f, e, w);
                    let p = document.createElement("div");
                    p.classList.add("i321"),
                    n.appendChild(p);
                    let _ = document.createElement("fieldset");
                    p.appendChild(_);
                    let v = document.createElement("legend");
                    _.appendChild(v),
                    v.innerText = m("i215");
                    let y = document.createElement("table");
                    y.classList.add("i320"),
                    _.appendChild(y);
                    let g = document.createElement("input");
                    g.type = "hidden",
                    p.appendChild(g),
                    g.ct = be(e, u[2]),
                    g.st = 0,
                    g.ht = 16383,
                    g.id = w(u);
                    let M = document.createElement("tr")
                      , k = document.createElement("tr");
                    y.appendChild(M),
                    y.appendChild(k);
                    let A = [];
                    for (let n = 0; n < 8; ++n) {
                        let i = document.createElement("td")
                          , r = document.createElement("td")
                          , l = document.createElement("input");
                        l.type = "checkbox",
                        l.ye = n,
                        l.id = Re(e, n),
                        l.addEventListener("change", (function(e) {
                            let n = parseInt(g.value);
                            n &= ~(1 << this.ye),
                            n |= !this.checked << this.ye,
                            g.value = n,
                            t(g)
                        }
                        ));
                        let o = document.createElement("label");
                        o.htmlFor = l.id,
                        o.innerText = n.toString(),
                        i.appendChild(o),
                        r.appendChild(l),
                        M.appendChild(i),
                        k.appendChild(r),
                        A.push(l)
                    }
                    g.ft = function(t) {
                        g.value = t;
                        for (let e = 0; e < 8; ++e)
                            A[e].checked = !(t & 1 << e)
                    }
                    ;
                    let x = document.createElement("div");
                    x.classList.add("i321"),
                    n.appendChild(x);
                    let E = document.createElement("fieldset");
                    x.appendChild(E);
                    let U = document.createElement("legend");
                    E.appendChild(U);
                    let I = document.createElement("div");
                    I.classList.add("i265"),
                    U.appendChild(I),
                    ke(t, I, [l], e, w);
                    let N = at(w(l))
                      , S = N.ft;
                    N.ft = function(t) {
                        S(t),
                        E.disabled = t < 64
                    }
                    ,
                    N.addEventListener("change", (function() {
                        let t = De(this);
                        E.disabled = t < 64
                    }
                    ));
                    let $ = document.createElement("div");
                    $.classList.add("i265"),
                    E.appendChild($),
                    ke(t, $, c, e, w);
                    let F = document.createElement("div");
                    F.classList.add("i321"),
                    n.appendChild(F);
                    let T = document.createElement("fieldset");
                    F.appendChild(T);
                    let P = document.createElement("legend");
                    T.appendChild(P);
                    let O = document.createElement("div");
                    O.classList.add("i265"),
                    P.appendChild(O),
                    ke(t, O, [o], e, w);
                    let j = at(w(o))
                      , L = j.ft;
                    j.ft = function(t) {
                        L(t),
                        T.disabled = t < 64
                    }
                    ,
                    j.addEventListener("change", (function() {
                        let t = De(this);
                        T.disabled = t < 64
                    }
                    ));
                    let C = document.createElement("div");
                    C.classList.add("i265"),
                    T.appendChild(C),
                    ke(t, C, a, e, w)
                }
            }(di),
            function(t) {
                let e = at("i104");
                for (let n = 0; n < 128; ++n) {
                    let i = document.createElement("tr")
                      , r = document.createElement("td");
                    i.appendChild(r),
                    r.textContent = n.toString();
                    let l = document.createElement("td");
                    i.appendChild(l);
                    let o = document.createElement("input");
                    l.appendChild(o),
                    o.id = Fe(n),
                    o.type = "number",
                    o.min = 0,
                    o.max = 2097151 / 16384,
                    o.value = n,
                    e.appendChild(i),
                    o.ft = function(t) {
                        o.value = t
                    }
                    ;
                    let u = n;
                    o.ct = function(t) {
                        if (!t)
                            return 0;
                        let e = B([{
                            key: u,
                            t: parseFloat(o.value)
                        }]);
                        return t.send(e),
                        e.length
                    }
                    ,
                    o.addEventListener("change", (function() {
                        t(this)
                    }
                    ))
                }
            }(di);
            {
                let e = at("i109")
                  , n = document.createElement("div");
                n.classList.add("i265"),
                e.appendChild(n);
                let i = document.createElement("span");
                pe(n, "i175", i, t),
                Nt = function() {
                    let e = Pe(t)
                      , n = 2 * Pe("_oikoiu128384") / 32e3
                      , i = 2 * e / 32e3
                      , r = [];
                    for (let t = 0; t < 9; ++t) {
                        let e = 4
                          , l = (t - e) * n
                          , o = l ? Math.sin(Math.PI * l) / (Math.PI * l) : 1
                          , u = (t - e) * i
                          , f = Math.cos(Math.PI * u);
                        r.push(o * f)
                    }
                    let l, o, u, f, c = Pe(Ue(2, 13)), a = 0, s = vn();
                    ei(s, 0, 90, a),
                    [l,o] = Kn();
                    let[h,d,w] = Jn() ? [60, 44, 12] : [44, 60, 28];
                    if (at("i110").checked) {
                        let t = Pe(Ue(2, w));
                        if (t || l) {
                            if (t)
                                if (l)
                                    if (Math.abs(t) > Math.abs(l)) {
                                        let e = 2 ** Math.floor(Math.log2(128 / Math.abs(t)));
                                        o = ni(l * e),
                                        f = l,
                                        u = ni(t * e)
                                    } else {
                                        let e = 2 ** Math.floor(Math.log2(128 / Math.abs(l)));
                                        o = ni(t * e),
                                        f = t,
                                        u = ni(l * e)
                                    }
                                else {
                                    let e = 2 ** Math.floor(Math.log2(128 / Math.abs(t)));
                                    o = ni(t * e),
                                    f = t,
                                    u = ni(l * e)
                                }
                            else {
                                let e = 2 ** Math.floor(Math.log2(128 / Math.abs(l)));
                                o = ni(l * e),
                                f = l,
                                u = ni(t * e)
                            }
                            let e = 0;
                            for (; ; ) {
                                let t = r[8];
                                if (!t)
                                    break;
                                let n = f / t * 128 / o
                                  , i = r.map((t=>ii(t * n)))
                                  , l = 0;
                                for (let t = 0; t < Math.min(8, i.length); ++t)
                                    l += Math.abs(i[t]);
                                let u = !1;
                                for (let t = 0; t < 8; ++t)
                                    u = u || -128 == i[t];
                                if (!(l > 127 || u)) {
                                    r = i;
                                    break
                                }
                                r.splice(8, 1),
                                r.splice(e, 1, 0, 0),
                                r.length,
                                e += 2
                            }
                            if (r = r.slice(0, 8),
                            !l || t && Math.abs(t) <= Math.abs(l)) {
                                f = l;
                                let t = o;
                                o = u,
                                u = t
                            }
                        } else
                            o = 0,
                            u = 0,
                            f = l,
                            r = [0, 0, 0, 0, 0, 0, 0, 0];
                        ui(s, r, c, a, f, o)
                    } else
                        o = -128,
                        f = r.splice(8),
                        [r,f] = fi(s, r, c, a, f, o, {
                            _e: !0,
                            ve: 4
                        }),
                        u = o;
                    ei(s, 2, h, o),
                    ei(s, 2, d, u);
                    let[m,p] = Sn(Qn, r, c, a, f, o);
                    Vn(r, c, a, p),
                    Cn.Pt(m, p)
                }
                ;
                let r = function(t) {
                    return Nt()
                };
                Me(r, i, t, 0, 16e3, !1, null);
                let l = document.createElement("span");
                pe(n, "i176", l, "_oikoiu128384"),
                Me(r, l, "_oikoiu128384", 0, 16e3, !1, null)
            }
            St = function() {
                let t = at("i112")
                  , n = document.createElement("div");
                n.classList.add("i265"),
                t.appendChild(n);
                let i = document.createElement("span");
                pe(n, "i177", i, e);
                let r = function(t, e, n, i) {
                    let r = e ** 2 - 3 * t * n
                      , l = 2 * e ** 3 - 9 * t * e * n + 27 * t ** 2 * i
                      , o = cn([l ** 2 - 4 * r ** 3, 0], [.5, 0])
                      , u = cn(un(on([l, 0], o), [.5, 0]), [1 / 3, 0])
                      , f = [-.5, Math.sqrt(3) / 2]
                      , c = un(u, f)
                      , a = un(c, f)
                      , s = [-1 / 3 / t, 0];
                    return [un(on(on([e, 0], u), fn([r, 0], u)), s), un(on(on([e, 0], c), fn([r, 0], c)), s), un(on(on([e, 0], a), fn([r, 0], a)), s)]
                }
                  , l = function() {
                    let t = Pe(e)
                      , n = Pe("_617a7s9df")
                      , i = t / 32e3 * 2 * Math.PI
                      , l = Math.cos(i)
                      , o = function(t, e, n, i) {
                        let r = 0
                          , l = 1;
                        for (let t = 0; t < 32; ++t) {
                            let t = (r + l) / 2;
                            n(t) > i ? l = t : r = t
                        }
                        return r
                    }
                      , u = 4
                      , f = u * (128 ** 4 / 65025 / u) ** (n / 127)
                      , c = null;
                    {
                        let t = o(0, 1, (function(t) {
                            return (t ** 4 + 2 * t ** 2 + 1) / (t - 1) ** 2 / (t + 1) ** 2 / (t ** 4 - 2 * t ** 2 * Math.cos(2 * i) + 1)
                        }
                        ), f)
                          , e = 127
                          , n = e / 128
                          , u = 2 * t * l / (t ** 2 + 1)
                          , a = -2 * t * u
                          , s = t ** 2
                          , h = 0;
                        if (a /= -n,
                        s /= -n,
                        a *= 128,
                        s *= 128,
                        a = Math.round(a),
                        s = Math.round(s),
                        s > 127 || s < -127 || a > 127 || a < -127) {
                            let n = -127;
                            l >= 0 && (n *= -1);
                            let i = [null]
                              , c = function(t) {
                                let o, u = l, f = r(-4294967296 * t ** 5, 262144 * n * e * t ** 4 + 131072 * n * e * t ** 2 - 8589934592 * t ** 2 * u, -4 * n ** 2 * e ** 2 * t ** 3 - 4 * n ** 2 * e ** 2 * t - 262144 * n * e * t ** 3 * u + 262144 * n * e * t * u + 1073741824 * t ** 5 + 12884901888 * t ** 3 * u ** 2 - 3221225472 * t ** 3, 8 * n ** 2 * e ** 2 * t ** 2 * u - 32768 * n * e * t ** 4 - 393216 * n * e * t ** 2 * u ** 2 + 65536 * n * e * t ** 2 - 32768 * n * e + 2147483648 * t ** 2 * u);
                                return o = l >= 0 ? f[0][0] : dn(f[1][1]) ? f[1][0] : f[0][0],
                                i[0] = o,
                                268435456 / (n ** 2 * e ** 2 * t ** 4 - 4 * n ** 2 * e ** 2 * t ** 3 * o * u + 4 * n ** 2 * e ** 2 * t ** 2 * o ** 2 + 4 * n ** 2 * e ** 2 * t ** 2 * u ** 2 - 2 * n ** 2 * e ** 2 * t ** 2 - 4 * n ** 2 * e ** 2 * t * o * u + n ** 2 * e ** 2 - 65536 * n * e * t ** 5 * o + 262144 * n * e * t ** 4 * o ** 2 * u - 32768 * n * e * t ** 4 * u - 262144 * n * e * t ** 3 * o ** 3 - 131072 * n * e * t ** 3 * o * u ** 2 + 131072 * n * e * t ** 3 * o + 131072 * n * e * t ** 2 * o ** 2 * u - 131072 * n * e * t ** 2 * u ** 3 + 65536 * n * e * t ** 2 * u + 131072 * n * e * t * o * u ** 2 - 65536 * n * e * t * o - 32768 * n * e * u + 1073741824 * t ** 6 * o ** 2 - 4294967296 * t ** 5 * o ** 3 * u + 1073741824 * t ** 5 * o * u + 4294967296 * t ** 4 * o ** 4 - 2147483648 * t ** 4 * o ** 2 + 268435456 * t ** 4 + 4294967296 * t ** 3 * o * u ** 3 - 3221225472 * t ** 3 * o * u - 4294967296 * t ** 2 * o ** 2 * u ** 2 + 2147483648 * t ** 2 * o ** 2 + 1073741824 * t ** 2 * u ** 2 - 536870912 * t ** 2 + 268435456)
                            };
                            t = o(0, 1, c, f),
                            u = i[0],
                            h = t ** 2 * (n * e - 32768 * t * u) / 128 / e,
                            s = t * (-n * e * u + 32768 * t * u ** 2 - 8192 * t) / 64 / e,
                            a = n / 128,
                            h *= 128,
                            s *= 128,
                            a *= 128,
                            h = Math.round(h),
                            s = Math.round(s),
                            a = Math.round(a)
                        }
                        n *= 128,
                        n = ri(n),
                        c = [null, n, h, s, a]
                    }
                    let a, s, [h,d,w,m,p] = c, _ = [0, 0, 0, 0, 0, w, m, p], v = d, y = 0, g = Pe(Ue(2, 12)), M = Pe(Ue(2, 28)), b = li(g * d / 128), k = li(M * d / 128);
                    Jn() ? (a = M,
                    s = k) : (a = g,
                    s = b),
                    function() {
                        let t = vn();
                        ei(t, 2, 60, k),
                        ei(t, 2, 44, b);
                        let e = Ue(2, 13);
                        Te(e, v),
                        at(e).ct(t);
                        let n = Ue(0, 90);
                        Te(n, y),
                        at(n).ct(t),
                        Gn(_),
                        ui(t, _, v, y, a, s)
                    }();
                    let[A,x] = Sn(Qn, _, v, y, a, s);
                    Vn(_, v, y, x),
                    Cn.Pt(A, x)
                }
                  , o = function(t) {
                    return l()
                };
                Me(o, i, e, 0, 16e3, !1, null);
                let u = document.createElement("span");
                return pe(n, "i178", u, "_617a7s9df"),
                Me(o, u, "_617a7s9df", 0, 127, !1, null),
                l
            }();
            let wi = function(t) {
                Xn()
            };
            at("i106").checked = !0,
            at("i106").addEventListener("input", wi),
            at("i107").addEventListener("input", wi),
            -1 != navigator.appVersion.indexOf("Win") && (at("i46").style.display = "block"),
            Yn(l);
            for (let t of Be)
                ze.push(at(t));
            ze.push(Cn)
        }(o, l)
    };
    "complete" !== document.readyState && "interactive" !== document.readyState && document.addEventListener("DOMContentLoaded", u),
    Ut = new Worker("index.js"),
    Ut.addEventListener("message", St);
    let f = window.sessionStorage.getItem("session_db");
    if (!f) {
        f = "sdb_" + Math.random(36).toString().substr(2) + "_" + (new Date).getTime();
        try {
            window.sessionStorage.setItem("session_db", f)
        } catch (t) {}
    }
    let c = window.indexedDB.open(f, 1);
    c.addEventListener("success", (function(t) {
        l = c.result;
        let e = l.transaction(["session"], "readonly", {
            durability: "relaxed"
        }).objectStore("session").get("i62");
        e.addEventListener("success", (function(t) {
            o = e.result ? e.result : {
                version: 3,
                type: de,
                sample_catalogue: [],
                sample_directory: []
            },
            u()
        }
        )),
        e.addEventListener("error", (function(t) {
            o = {},
            u()
        }
        ))
    }
    )),
    c.addEventListener("error", (function(t) {
        l = null,
        o = {},
        u()
    }
    )),
    c.addEventListener("upgradeneeded", (function(t) {
        t.target.result.createObjectStore("session")
    }
    ))
}();
let qn = []
  , Ln = function() {
    let t = [0, 374, 1305, 370]
      , e = [];
    for (let n of t)
        e.push(n / 2048);
    let n, i = Math.abs((e[1] + e[2] + e[3]) / (e[1] - e[2] - e[3])), [r,l] = function(t, e, n) {
        return [(-e + Math.sqrt(e * e - 4 * t * n)) / 2 / t, (-e - Math.sqrt(e * e - 4 * t * n)) / 2 / t]
    }(1, 2 * (i + 1) / (i - 1), 1);
    Math.abs(r) < 1 ? n = r : (Math.abs(l),
    n = l);
    let o = -2 * n
      , u = n ** 2
      , f = (e[1] + e[2] + e[3]) / (1 + o + u);
    return [0, f, f * o, f * u].slice(1)
}
  , Cn = function(t, e, n, i, r, l) {
    let o;
    o = t ? Ln() : [1, 0, 0];
    let u = [0, 0];
    for (let t = 0; t < e; ++t) {
        let e = n[t];
        e *= i,
        e -= u[1] * o[1],
        e -= u[0] * o[2],
        e /= o[0],
        u.splice(0, 1),
        u.push(e),
        l[t + r] = e
    }
}
  , Rn = function(t) {
    let e = t.data;
    try {
        if (1 == e.D) {
            let t = e.P._
              , n = 32767 / 32768
              , i = -1;
            for (let e = 0; e < t.length; ++e) {
                let r = t[e];
                n = Math.max(r, n),
                i = Math.min(r, i)
            }
            let r = Math.min(1 / n, -1 / i);
            Cn(e.P.p, t.length, t, r, 0, t);
            let l = t.length
              , o = new Uint8Array((l + 64) / 16 * 9)
              , [u,f] = Dn(t.length, t, o, e.P.loop, e.P.u, e.P.h, e.P.m);
            o = o.subarray(0, u);
            let c = [o.buffer];
            return self.postMessage({
                id: e.id,
                result: [o, f]
            }, c)
        }
        if (2 == e.D) {
            let t = function(t) {
                let e = new Bn.Me.ge(new Uint8Array(t._));
                e.parse();
                let n = {
                    ee: e.info.be
                }
                  , i = []
                  , r = [];
                for (let n = 0; n < e.ke.length && n != e.ke.length - 1; ++n) {
                    let l = e.ke[n]
                      , o = e.ke[n + 1]
                      , u = 0;
                    for (let n = l.Ae; n < o.Ae; ++n) {
                        if (n + 1 >= e.xe.length)
                            continue;
                        let o = e.xe[n]
                          , f = e.xe[n + 1]
                          , c = [];
                        for (let t = o.Ee; t < f.Ee; ++t) {
                            let n = e.Ue[t];
                            c[n.type] = n
                        }
                        if (void 0 === c[53]) {
                            n == l.Ae && (u = 0 - (void 0 === c[51] ? 0 : c[51].value.Ie) - (void 0 === c[52] ? 0 : c[52].value.Ie / 100));
                            continue
                        }
                        let a = c[53].value.Ie;
                        if (r[a])
                            continue;
                        let s = e.Ne[a]
                          , h = e.sample[a];
                        if (!h.length)
                            continue;
                        let d = null
                          , w = 0
                          , m = 0
                          , p = s.Se - s.$e;
                        p % 16 != 0 && 8 != p && 4 != p && 2 != p && 1 != p || (s.$e % 16 && (m = 16 - s.$e % 16),
                        d = (m + s.$e) / 16),
                        (s.Se + m) % 16 && (w = 16 - (s.Se + m) % 16),
                        h = new Float32Array(s.Se + m + w),
                        Cn(t.p, s.Se, e.sample[a], 1 / 32768, m, h);
                        let _, v = h.length, y = new Uint8Array((v + 64) / 16 * 9);
                        [_,d] = Dn(v, h, y, d, t.u, t.h, t.m),
                        y = y.subarray(0, _);
                        let g = null;
                        null != d && (g = y.subarray(9 * d));
                        let M = c[58];
                        void 0 !== M && (M = M.value.Ie),
                        void 0 === M && (M = s.Fe);
                        let b = M + u - (void 0 === c[51] ? 0 : c[51].value.Ie) - (void 0 === c[52] ? 0 : c[52].value.Ie / 100) - s.Te / 100 - 12 * Math.log(s.sampleRate / 32e3) / Math.log(2);
                        i.push({
                            Qt: a,
                            ne: 32768 & s.De,
                            N: 440 * Math.pow(2, (b - 69) / 12),
                            name: s.Pe,
                            T: y,
                            $: g
                        }),
                        r[a] = !0
                    }
                }
                return {
                    info: n,
                    te: i
                }
            }(e.P)
              , n = [];
            for (let e of t.te)
                n.push(e.T.buffer),
                e.T.$ && n.push(e.$.buffer);
            return self.postMessage({
                id: e.id,
                result: t
            }, n)
        }
        if (3 == e.D) {
            let t = function(t, e) {
                let n = new Uint8Array(hn.exports.memory.buffer)
                  , i = new Uint8Array(t);
                On(i);
                let r = hn.exports.Oe(i.length, e);
                if (r)
                    throw new Error(Fn(r));
                let l = hn.exports.je();
                return n.slice(l, l + 66048).buffer
            }(e.P._, e.P.lt)
              , n = [t];
            return self.postMessage({
                id: e.id,
                result: t
            }, n)
        }
        if (4 == e.D) {
            let t = (n = e.P._,
            i = e.P.ot,
            On(new Uint8Array(n)),
            hn.exports.qe(n.byteLength / 4, i));
            return self.postMessage({
                id: e.id,
                result: t
            }, [])
        }
        let t = function(t) {
            let e = new Uint8Array(t)
              , n = Math.min(66048, e.length)
              , i = hn.exports.je();
            new Uint8Array(hn.exports.memory.buffer).set(e.subarray(0, n), i),
            sn = [];
            let r = hn.exports.Le(n);
            if (r)
                throw new Error(Fn(r));
            return sn
        }(e.P.oe)
          , r = [];
        for (let e of t)
            r.push(e.T.buffer),
            e.$ && r.push(e.$.buffer);
        self.postMessage({
            id: e.id,
            result: t
        }, r)
    } catch (t) {
        self.postMessage({
            id: e.id,
            error: t
        })
    }
    var n, i
};
null == self.document && (WebAssembly.instantiateStreaming(fetch("./worker.wasm"), {
    env: {
        Ce: function(t, e, n) {
            if (76 == e) {
                let t = new Uint8Array(hn.exports.memory.buffer)
                  , e = hn.exports.Re()
                  , i = t.subarray(e, e + 65536)
                  , r = 256 * hn.exports.Be(93);
                for (let t = 0; t < 8; ++t)
                    if (1 << t & n) {
                        let e, n = hn.exports.Be(16 * t + 4), l = i[4 * n + r], o = $n(i, (i[4 * n + r + 1] << 8) + l);
                        if (2 & o[o.length - 9]) {
                            let t = i[4 * n + r + 2];
                            e = $n(i, (i[4 * n + r + 3] << 8) + t)
                        } else
                            e = null;
                        let u = {
                            Qt: n,
                            T: o,
                            $: e,
                            Ht: hn.exports.Be(16 * t + 5),
                            Kt: hn.exports.Be(16 * t + 6)
                        };
                        Tn(u) || sn.push(u)
                    }
            }
        },
        ze: function(t, e, n) {
            throw new Error(`Assertion error: ${Fn(t)} at ${Fn(e)}:${n}`)
        },
        Ve: Math.cos,
        We: Math.sin,
        Ge: Math.pow,
        Je: Math.log2
    }
}).then((function(t) {
    hn = t.instance,
    hn.exports.He();
    let e = qn;
    qn = null;
    for (let t of e)
        Rn(t)
}
)),
self.addEventListener("message", (function(t) {
    hn ? Rn(t) : qn.push(t)
}
)));
let Bn = {};
function zn(t, e, n) {
    return st(String.fromCharCode.apply(null, t.subarray(e, e += n)))
}
var Vn, Wn;
Vn = Bn,
Wn = function(t) {
    var e = t;
    return e.ge = function(t, e) {
        e = e || {},
        this.input = t,
        this.Ke = e.Ke
    }
    ,
    e.ge.prototype.parse = function() {
        var t, n = new e.Qe.ge(this.input,this.Ke);
        if (n.parse(),
        1 !== n.Xe.length)
            throw new Error("wrong chunk length");
        if (null === (t = n.Ye(0)))
            throw new Error("chunk not found");
        this.Ze(t),
        this.input = null
    }
    ,
    e.ge.prototype.Ze = function(t) {
        var n, i, r = this.input, l = t.offset;
        if ("RIFF" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        if ("sfbk" !== (i = String.fromCharCode(r[l++], r[l++], r[l++], r[l++])))
            throw new Error("invalid signature:" + i);
        if ((n = new e.Qe.ge(r,{
            index: l,
            length: t.size - 4
        })).parse(),
        3 !== n.tn())
            throw new Error("invalid sfbk structure");
        this.en(n.Ye(0)),
        this.nn(n.Ye(1)),
        this.rn(n.Ye(2))
    }
    ,
    e.ge.prototype.en = function(t) {
        var n, i, r = this.input, l = t.offset;
        let o = this.info = {};
        if ("LIST" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        if ("INFO" !== (i = String.fromCharCode(r[l++], r[l++], r[l++], r[l++])))
            throw new Error("invalid signature:" + i);
        (n = new e.Qe.ge(r,{
            index: l,
            length: t.size - 4
        })).parse();
        for (let t = 0; t < n.tn(); ++t) {
            let e = n.Ye(t);
            "INAM" == e.type && (o.be = zn(r, e.offset, e.size))
        }
    }
    ,
    e.ge.prototype.nn = function(t) {
        var n, i, r = this.input, l = t.offset;
        if ("LIST" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        if ("sdta" !== (i = String.fromCharCode(r[l++], r[l++], r[l++], r[l++])))
            throw new Error("invalid signature:" + i);
        if ((n = new e.Qe.ge(r,{
            index: l,
            length: t.size - 4
        })).parse(),
        1 !== n.Xe.length)
            throw new Error("TODO");
        this.ln = n.Ye(0)
    }
    ,
    e.ge.prototype.rn = function(t) {
        var n, i, r = this.input, l = t.offset;
        if ("LIST" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        if ("pdta" !== (i = String.fromCharCode(r[l++], r[l++], r[l++], r[l++])))
            throw new Error("invalid signature:" + i);
        if ((n = new e.Qe.ge(r,{
            index: l,
            length: t.size - 4
        })).parse(),
        9 !== n.tn())
            throw new Error("invalid pdta chunk");
        this.on(n.Ye(0)),
        this.un(n.Ye(1)),
        this.fn(n.Ye(2)),
        this.cn(n.Ye(3)),
        this.an(n.Ye(4)),
        this.sn(n.Ye(5)),
        this.hn(n.Ye(6)),
        this.dn(n.Ye(7)),
        this.wn(n.Ye(8))
    }
    ,
    e.ge.prototype.on = function(t) {
        var e = this.input
          , n = t.offset
          , i = this.mn = []
          , r = t.offset + t.size;
        if ("phdr" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        for (; n < r; )
            i.push({
                pn: String.fromCharCode.apply(null, e.subarray(n, n += 20)),
                _n: e[n++] | e[n++] << 8,
                vn: e[n++] | e[n++] << 8,
                yn: e[n++] | e[n++] << 8,
                gn: (e[n++] | e[n++] << 8 | e[n++] << 16 | e[n++] << 24) >>> 0,
                Mn: (e[n++] | e[n++] << 8 | e[n++] << 16 | e[n++] << 24) >>> 0,
                bn: (e[n++] | e[n++] << 8 | e[n++] << 16 | e[n++] << 24) >>> 0
            })
    }
    ,
    e.ge.prototype.un = function(t) {
        var e = this.input
          , n = t.offset
          , i = this.kn = []
          , r = t.offset + t.size;
        if ("pbag" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        for (; n < r; )
            i.push({
                An: e[n++] | e[n++] << 8,
                xn: e[n++] | e[n++] << 8
            })
    }
    ,
    e.ge.prototype.fn = function(t) {
        if ("pmod" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        this.En = this.Un(t)
    }
    ,
    e.ge.prototype.cn = function(t) {
        if ("pgen" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        this.In = this.Nn(t)
    }
    ,
    e.ge.prototype.an = function(t) {
        var e = this.input
          , n = t.offset
          , i = this.ke = []
          , r = t.offset + t.size;
        if ("inst" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        for (; n < r; ) {
            let t = zn(e, n, 20);
            n += 20,
            i.push({
                Sn: t,
                Ae: e[n++] | e[n++] << 8
            })
        }
    }
    ,
    e.ge.prototype.sn = function(t) {
        var e = this.input
          , n = t.offset
          , i = this.xe = []
          , r = t.offset + t.size;
        if ("ibag" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        for (; n < r; )
            i.push({
                Ee: e[n++] | e[n++] << 8,
                $n: e[n++] | e[n++] << 8
            })
    }
    ,
    e.ge.prototype.hn = function(t) {
        if ("imod" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        this.Fn = this.Un(t)
    }
    ,
    e.ge.prototype.dn = function(t) {
        if ("igen" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        this.Ue = this.Nn(t)
    }
    ,
    e.ge.prototype.wn = function(t) {
        var e, n, i, r, l, o, u, f, c, a, s = this.input, h = t.offset, d = this.sample = [], w = this.Ne = [], m = t.offset + t.size;
        if ("shdr" !== t.type)
            throw new Error("invalid chunk type:" + t.type);
        for (; h < m; )
            if (e = zn(s, h, 20),
            h += 20,
            n = (s[h++] << 0 | s[h++] << 8 | s[h++] << 16 | s[h++] << 24) >>> 0,
            i = (s[h++] << 0 | s[h++] << 8 | s[h++] << 16 | s[h++] << 24) >>> 0,
            r = (s[h++] << 0 | s[h++] << 8 | s[h++] << 16 | s[h++] << 24) >>> 0,
            l = (s[h++] << 0 | s[h++] << 8 | s[h++] << 16 | s[h++] << 24) >>> 0,
            o = (s[h++] << 0 | s[h++] << 8 | s[h++] << 16 | s[h++] << 24) >>> 0,
            u = s[h++],
            f = s[h++] << 24 >> 24,
            c = s[h++] | s[h++] << 8,
            a = s[h++] | s[h++] << 8,
            "EOS" != e) {
                r -= n,
                l -= n,
                w.push({
                    Pe: e,
                    $e: r,
                    Se: l,
                    sampleRate: o,
                    Fe: u,
                    Te: f,
                    Tn: c,
                    De: a
                });
                var p = new Int16Array(new Uint8Array(s.subarray(this.ln.offset + 2 * n, this.ln.offset + 2 * i)).buffer);
                d.push(p)
            }
    }
    ,
    e.ge.prototype.Un = function(t) {
        for (var e, n, i = this.input, r = t.offset, l = t.offset + t.size, o = []; r < l; )
            r += 2,
            n = e = i[r++] | i[r++] << 8,
            o.push({
                type: n,
                value: {
                    code: e,
                    Ie: i[r] | i[r + 1] << 8 << 16 >> 16,
                    Dn: i[r++],
                    Pn: i[r++]
                }
            }),
            r += 2,
            r += 2;
        return o
    }
    ,
    e.ge.prototype.Nn = function(t) {
        for (var e, n, i = this.input, r = t.offset, l = t.offset + t.size, o = []; r < l; )
            n = e = i[r++] | i[r++] << 8,
            o.push({
                type: n,
                value: {
                    code: e,
                    Ie: i[r] | i[r + 1] << 8 << 16 >> 16,
                    Dn: i[r++],
                    Pn: i[r++]
                }
            });
        return o
    }
    ,
    e.ge.prototype.On = function() {
        var t, e, n, i, r, l, o, u = this.ke, f = this.xe, c = [];
        for (i = 0,
        r = u.length; i < r; ++i) {
            for (t = [],
            l = u[i].Ae,
            o = u[i + 1] ? u[i + 1].Ae : f.length; l < o; ++l)
                e = this.jn(f, l),
                n = this.qn(f, l),
                t.push({
                    Ln: e.Ln,
                    Cn: e.Rn,
                    Bn: n.Bn,
                    zn: n.Vn
                });
            c.push({
                name: u[i].Sn,
                info: t
            })
        }
        return c
    }
    ,
    e.ge.prototype.Wn = function() {
        var t, e, n, i, r, l, o, u, f = this.mn, c = this.kn, a = [];
        for (r = 0,
        l = f.length; r < l; ++r) {
            for (t = [],
            o = f[r].yn,
            u = f[r + 1] ? f[r + 1].yn : c.length; o < u; ++o)
                n = this.Gn(c, o),
                i = this.Jn(c, o),
                t.push({
                    Ln: n.Ln,
                    Cn: n.Rn,
                    Bn: i.Bn,
                    zn: i.Vn
                }),
                e = void 0 !== n.Ln.ke ? n.Ln.ke.Ie : void 0 !== i.Bn.ke ? i.Bn.ke.Ie : null;
            a.push({
                name: f[r].pn,
                info: t,
                Hn: f[r],
                ke: e
            })
        }
        return a
    }
    ,
    e.ge.prototype.jn = function(t, e) {
        var n = this.Kn(t, t[e].Ee, t[e + 1] ? t[e + 1].Ee : this.Ue.length, this.Ue);
        return {
            Ln: n.Qn,
            Rn: n.Xn
        }
    }
    ,
    e.ge.prototype.qn = function(t, e) {
        var n = this.Kn(t, t[e].xn, t[e + 1] ? t[e + 1].$n : this.Fn.length, this.Fn);
        return {
            Bn: n.Qn,
            Vn: n.Xn
        }
    }
    ,
    e.ge.prototype.Gn = function(t, e) {
        var n = this.Kn(t, t[e].An, t[e + 1] ? t[e + 1].An : this.In.length, this.In);
        return {
            Ln: n.Qn,
            Rn: n.Xn
        }
    }
    ,
    e.ge.prototype.Jn = function(t, e) {
        var n = this.Kn(t, t[e].xn, t[e + 1] ? t[e + 1].xn : this.En.length, this.En);
        return {
            Bn: n.Qn,
            Vn: n.Xn
        }
    }
    ,
    e.ge.prototype.Kn = function(t, e, n, i) {
        var r, l, o, u = [], f = {
            [-1]: [],
            43: {
                Pn: 127,
                Dn: 0
            }
        };
        for (l = e,
        o = n; l < o; ++l)
            r = i[l],
            u.push(r),
            -1 === r.type ? f.Yn.push(r.value) : f[r.type] = r.value;
        return {
            Qn: f,
            Xn: u
        }
    }
    ,
    e.Qe = {},
    e.Qe.ge = function(t, e) {
        e = e || {},
        this.input = t,
        this.Zn = e.index || 0,
        this.length = e.length || t.length - this.Zn,
        this.offset = this.Zn,
        this.padding = void 0 === e.padding || e.padding,
        this.ti = void 0 !== e.ti && e.ti
    }
    ,
    e.Qe.ei = function(t, e, n) {
        this.type = t,
        this.size = e,
        this.offset = n
    }
    ,
    e.Qe.ge.prototype.parse = function() {
        var t = this.length + this.offset;
        for (this.Xe = []; this.Zn < t; )
            this.ni()
    }
    ,
    e.Qe.ge.prototype.ni = function() {
        var t, n = this.input, i = this.Zn;
        this.Xe.push(new e.Qe.ei(String.fromCharCode(n[i++], n[i++], n[i++], n[i++]),t = this.ti ? (n[i++] << 24 | n[i++] << 16 | n[i++] << 8 | n[i++]) >>> 0 : (n[i++] | n[i++] << 8 | n[i++] << 16 | n[i++] << 24) >>> 0,i)),
        i += t,
        this.padding && 1 == (i - this.offset & 1) && i++,
        this.Zn = i
    }
    ,
    e.Qe.ge.prototype.Ye = function(t) {
        var e = this.Xe[t];
        return void 0 === e ? null : e
    }
    ,
    e.Qe.ge.prototype.tn = function() {
        return this.Xe.length
    }
    ,
    e
}
,
"object" == typeof exports ? (Vn.Me = exports,
Wn(exports)) : "function" == typeof define && define.amd ? define(["exports"], (function(t) {
    return Vn.Me = t,
    Vn.Me,
    Wn(t)
}
)) : (Vn.Me = {},
Wn(Vn.Me));
