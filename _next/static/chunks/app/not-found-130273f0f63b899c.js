(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [160], {
        3282: function(e, _, c) {
            Promise.resolve().then(c.bind(c, 154))
        },
        154: function(e, _, c) {
            "use strict";
            c.r(_);
            var s = c(7437),
                t = c(6648),
                r = c(6463),
                n = c(2421),
                o = c(550),
                l = c(20),
                a = c(3733),
                i = c.n(a);
            _.default = () => {
                let e = (0, r.useRouter)();
                return (0, s.jsxs)("section", {
                    className: i().error,
                    children: [(0, s.jsx)(l.vm, {
                        className: i().error__sun
                    }), (0, s.jsx)("div", {
                        className: i().error__bgImg,
                        children: (0, s.jsx)(t.default, {
                            fill: !0,
                            src: "/static/img/FirstScreen/firstScreenBg.png",
                            alt: "bg"
                        })
                    }), (0, s.jsx)("div", {
                        className: i().error__bg
                    }), (0, s.jsx)("div", {
                        className: i().error__ground,
                        children: (0, s.jsx)(l.os, {})
                    }), (0, s.jsx)("div", {
                        className: i().error__svg,
                        children: (0, s.jsx)("div", {
                            className: i().error__svg__content,
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/svg/notFound.svg",
                                alt: "404"
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: i().error__left,
                        children: [(0, s.jsx)("div", {
                            className: "first",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/Mountain1.png",
                                alt: "tree"
                            })
                        }), (0, s.jsx)("div", {
                            className: "second",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/Mountain2.png",
                                alt: "tree"
                            })
                        }), (0, s.jsx)("div", {
                            className: "third",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/Mountain3.png",
                                alt: "tree"
                            })
                        }), (0, s.jsx)(l.P8, {
                            className: i().firstTree + " desktop"
                        }), (0, s.jsx)(l.KN, {
                            className: i().secondTree + " desktop"
                        }), (0, s.jsx)(l.Kj, {
                            className: i().thirdTree + " desktop"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: i().error__right,
                        children: [(0, s.jsx)("div", {
                            className: "first",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/MountainR1.png",
                                alt: "mountain"
                            })
                        }), (0, s.jsx)("div", {
                            className: "second",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/MountainR2.png",
                                alt: "mountain"
                            })
                        }), (0, s.jsx)("div", {
                            className: "third",
                            children: (0, s.jsx)(t.default, {
                                fill: !0,
                                src: "/static/img/FirstScreen/MountainR3.png",
                                alt: "mountain"
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: i().error__content,
                        children: [(0, s.jsx)("div", {
                            className: i().error__content__text,
                            children: (0, s.jsx)(o.Z, {
                                isBig: !0,
                                text: "Page not found",
                                className: i().error__content__text__block,
                                isShort: !0
                            })
                        }), (0, s.jsx)(n.Z, {
                            isButton: !0,
                            handler: () => {
                                e.push("/")
                            },
                            text: "Back to main",
                            className: i().error__content__bottom
                        })]
                    })]
                })
            }
        },
        550: function(e, _, c) {
            "use strict";
            c.d(_, {
                Z: function() {
                    return o
                }
            });
            var s = c(7437),
                t = c(21),
                r = c.n(t),
                n = c(20);

            function o(e) {
                let {
                    title: _,
                    text: c,
                    className: t,
                    isBig: o = !1,
                    isGolden: l = !1,
                    textClassname: a = ""
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: l ? (0, s.jsxs)("div", {
                        className: "".concat(r().block, " ").concat(t, " ").concat(r().golden),
                        children: [(0, s.jsx)(n.xk, {
                            className: r().block__firstSide
                        }), (0, s.jsx)(n.x_, {
                            className: r().block__firstBg
                        }), (0, s.jsx)(n.Yu, {
                            className: r().block__secondBg + " desktop"
                        }), (0, s.jsxs)("div", {
                            className: r().block__content,
                            children: [(0, s.jsx)("span", {
                                className: "".concat(r().block__content__line, " ").concat(r().golden)
                            }), _ ? (0, s.jsx)("span", {
                                className: "".concat(r().block__content__title, " ").concat(r().golden),
                                children: _
                            }) : null, (0, s.jsx)("p", {
                                className: "".concat(r().block__content__text, " ").concat(a, " ").concat(o ? r().big : ""),
                                children: c
                            }), (0, s.jsx)("span", {
                                className: "".concat(r().block__content__line, " ").concat(r().golden)
                            })]
                        }), (0, s.jsx)(n.xk, {
                            className: r().block__secondSide
                        })]
                    }) : (0, s.jsxs)("div", {
                        className: "".concat(r().block, " ").concat(t),
                        children: [(0, s.jsx)(n.Nx, {
                            className: r().block__firstSide
                        }), (0, s.jsx)(n.x_, {
                            className: r().block__firstBg
                        }), (0, s.jsx)(n.Yu, {
                            className: r().block__secondBg + " desktop"
                        }), (0, s.jsxs)("div", {
                            className: r().block__content,
                            children: [(0, s.jsx)("span", {
                                className: r().block__content__line
                            }), _ ? (0, s.jsx)("span", {
                                className: r().block__content__title,
                                children: _
                            }) : null, (0, s.jsx)("p", {
                                className: "".concat(r().block__content__text, " ").concat(a, " ").concat(o ? r().big : ""),
                                children: c
                            }), (0, s.jsx)("span", {
                                className: r().block__content__line
                            })]
                        }), (0, s.jsx)(n.Nx, {
                            className: r().block__secondSide
                        })]
                    })
                })
            }
        },
        2421: function(e, _, c) {
            "use strict";
            c.d(_, {
                Z: function() {
                    return o
                }
            });
            var s = c(7437),
                t = c(9660),
                r = c.n(t),
                n = c(20);

            function o(e) {
                let {
                    text: _,
                    secondText: c,
                    handler: t = "",
                    className: o,
                    isButton: l = !1
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: l ? (0, s.jsxs)("button", {
                        onClick: t,
                        className: "".concat(r().block, " ").concat(r().block__hover, " ").concat(o),
                        children: [(0, s.jsx)("div", {
                            className: r().block__hover__box
                        }), (0, s.jsx)(n.C6, {
                            className: r().block__firstSide
                        }), (0, s.jsx)(n.Co, {
                            className: r().block__firstBg
                        }), (0, s.jsxs)("div", {
                            className: r().block__content,
                            children: [(0, s.jsx)("span", {
                                className: r().block__content__line
                            }), (0, s.jsxs)("span", {
                                className: "".concat(r().block__content__text, " ").concat(r().button),
                                children: [_, "\xa0", (0, s.jsx)(n.nm, {
                                    className: r().block__dollar
                                }), c]
                            }), (0, s.jsx)("span", {
                                className: r().block__content__line
                            })]
                        }), (0, s.jsx)(n.C6, {
                            className: r().block__secondSide
                        })]
                    }) : (0, s.jsxs)("div", {
                        className: "".concat(r().block, " ").concat(o),
                        children: [(0, s.jsx)(n.C6, {
                            className: r().block__firstSide
                        }), (0, s.jsx)(n.Co, {
                            className: r().block__firstBg
                        }), (0, s.jsx)(n.NC, {
                            className: r().block__secondBg + " desktop"
                        }), (0, s.jsxs)("div", {
                            className: r().block__content,
                            children: [(0, s.jsx)("span", {
                                className: r().block__content__line
                            }), (0, s.jsx)("span", {
                                className: r().block__content__text,
                                children: _
                            }), (0, s.jsx)("span", {
                                className: r().block__content__line
                            })]
                        }), (0, s.jsx)(n.C6, {
                            className: r().block__secondSide
                        })]
                    })
                })
            }
        },
        21: function(e) {
            e.exports = {
                block: "textBlock_block__Dnv3A",
                golden: "textBlock_golden__tf15T",
                block__sun: "textBlock_block__sun__bVpZy",
                block__firstSide: "textBlock_block__firstSide__ggfYI",
                block__secondSide: "textBlock_block__secondSide__HgoM_",
                block__firstBg: "textBlock_block__firstBg__hyNQu",
                block__secondBg: "textBlock_block__secondBg__jKhNY",
                block__content: "textBlock_block__content__yDnf_",
                block__content__title: "textBlock_block__content__title__5CGn0",
                block__content__line: "textBlock_block__content__line__sww6l",
                block__content__text: "textBlock_block__content__text__rTuQd",
                big: "textBlock_big__yI0Sd"
            }
        },
        3733: function(e) {
            e.exports = {
                error: "error_error__KQ8mq",
                error__sun: "error_error__sun__IcOda",
                error__bg: "error_error__bg__oGFrY",
                error__bgImg: "error_error__bgImg__IFgqb",
                error__ground: "error_error__ground__tmfa0",
                error__svg: "error_error__svg__cP7Kh",
                error__svg__content: "error_error__svg__content__7fk8n",
                error__left: "error_error__left__BY9T3",
                firstTree: "error_firstTree__BzZGX",
                secondTree: "error_secondTree__8cOKy",
                thirdTree: "error_thirdTree__LR6T_",
                error__right: "error_error__right__sXPXt",
                error__content: "error_error__content__hDR5_",
                error__content__text: "error_error__content__text__pjyvk",
                error__content__text__block: "error_error__content__text__block__Rm_9x",
                error__content__bottom: "error_error__content__bottom__Cpw3J"
            }
        }
    },
    function(e) {
        e.O(0, [494, 724, 824, 971, 23, 744], function() {
            return e(e.s = 3282)
        }), _N_E = e.O()
    }
]);