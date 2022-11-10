import { c as createComponent } from "./component.e6180cf1.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock, p as pushScopeId, l as popScopeId } from "./mobile.d0a5e34c.js";
import "./index.f29d63b5.js";
import "./index.304b8792.js";
var demo_vue_vue_type_style_index_0_scoped_true_lang = "";
const { createDemo, translate } = createComponent("tabbar");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      activeIndex: 0,
      img1: "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",
      img2: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            name: "\u901A\u8FC7\u540D\u79F0\u5339\u914D",
            badge: "\u5FBD\u6807\u63D0\u793A",
            icon: "\u81EA\u5B9A\u4E49\u56FE\u6807",
            color: "\u81EA\u5B9A\u4E49\u989C\u8272",
            event: "\u81EA\u5B9A\u4E49\u5207\u6362\u4E8B\u4EF6"
          },
          tabbar: {
            home: "\u9996\u9875",
            user: "\u6211\u7684",
            tel: "\u8054\u7CFB"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            name: "Match by Name",
            badge: "Badge Tips",
            icon: "Custom Icon",
            color: "Custom Color",
            event: "Custom Change Event"
          },
          tabbar: {
            home: "Home",
            user: "User",
            tel: "Tel"
          }
        }
      });
    });
    const onChange2 = ({ detail }) => {
      data.value.activeIndex = detail.value;
    };
    const onChange1 = ({ detail }) => {
      Toast.text(`\u5F53\u524D\u9009\u4E2D\uFF1A${detail.value}`);
    };
    return {
      data,
      onChange1,
      onChange2,
      translate
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-f6d0c6de"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo no-padding" };
const _hoisted_2 = { fixed: "false" };
const _hoisted_3 = ["label"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = ["label"];
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = ["label"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = {
  value: "tel",
  fixed: "false"
};
const _hoisted_13 = ["label"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_15 = [
  _hoisted_14
];
const _hoisted_16 = ["label"];
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_18 = [
  _hoisted_17
];
const _hoisted_19 = ["label"];
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = {
  value: "1",
  fixed: false
};
const _hoisted_23 = ["label"];
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = ["label"];
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = ["label"];
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = ["label"];
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = ["label"];
const _hoisted_36 = ["src"];
const _hoisted_37 = ["label"];
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = {
  fixed: false,
  inactivecolor: "#000",
  activeColor: "#ee0a24"
};
const _hoisted_41 = ["label"];
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_43 = [
  _hoisted_42
];
const _hoisted_44 = ["label"];
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = ["label"];
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_49 = [
  _hoisted_48
];
const _hoisted_50 = ["label"];
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_52 = [
  _hoisted_51
];
const _hoisted_53 = ["label"];
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_55 = [
  _hoisted_54
];
const _hoisted_56 = ["label"];
const _hoisted_57 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", {
  slot: "icon",
  size: "20"
}, null, -1));
const _hoisted_58 = [
  _hoisted_57
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-tabbar", _hoisted_2, [
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.home")
      }, _hoisted_5, 8, _hoisted_3),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user")
      }, _hoisted_8, 8, _hoisted_6),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel")
      }, _hoisted_11, 8, _hoisted_9)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.name")), 1),
    createBaseVNode("quark-tabbar", _hoisted_12, [
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.home"),
        name: "home"
      }, _hoisted_15, 8, _hoisted_13),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user"),
        name: "user"
      }, _hoisted_18, 8, _hoisted_16),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel"),
        name: "tel"
      }, _hoisted_21, 8, _hoisted_19)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.badge")), 1),
    createBaseVNode("quark-tabbar", _hoisted_22, [
      createBaseVNode("quark-tabbar-item", {
        badgecontent: "20",
        label: _ctx.translate("tabbar.home")
      }, _hoisted_25, 8, _hoisted_23),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user")
      }, _hoisted_28, 8, _hoisted_26),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel")
      }, _hoisted_31, 8, _hoisted_29)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.icon")), 1),
    createBaseVNode("quark-tabbar", {
      fixed: false,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange2 && _ctx.onChange2(...args))
    }, [
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.home")
      }, _hoisted_34, 8, _hoisted_32),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user")
      }, [
        createBaseVNode("img", {
          slot: "icon",
          style: { "height": "20px" },
          src: _ctx.data.activeIndex === "1" ? _ctx.data.img1 : _ctx.data.img2
        }, null, 8, _hoisted_36)
      ], 8, _hoisted_35),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel")
      }, _hoisted_39, 8, _hoisted_37)
    ], 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.color")), 1),
    createBaseVNode("quark-tabbar", _hoisted_40, [
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.home")
      }, _hoisted_43, 8, _hoisted_41),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user")
      }, _hoisted_46, 8, _hoisted_44),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel")
      }, _hoisted_49, 8, _hoisted_47)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.event")), 1),
    createBaseVNode("quark-tabbar", {
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChange1 && _ctx.onChange1(...args)),
      fixed: false
    }, [
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.home")
      }, _hoisted_52, 8, _hoisted_50),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.user")
      }, _hoisted_55, 8, _hoisted_53),
      createBaseVNode("quark-tabbar-item", {
        label: _ctx.translate("tabbar.tel")
      }, _hoisted_58, 8, _hoisted_56)
    ], 32)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f6d0c6de"]]);
export { demo as default };
