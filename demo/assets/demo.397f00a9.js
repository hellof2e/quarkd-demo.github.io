import { c as createComponent } from "./component.72c9863f.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.3f242a9e.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("grid");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u4F7F\u7528",
          column: "\u81EA\u5B9A\u4E49\u5217\u6570",
          square: "\u6B63\u65B9\u5F62\u683C\u5B50",
          border: "\u65E0\u8FB9\u6846",
          custom: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
          text: "\u6587\u5B57"
        },
        "en-US": {
          basic: "Basic Usage",
          column: "Custom Column",
          square: "Square Cell",
          border: "No Border",
          custom: "Custom Content",
          text: "text"
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo demo-badge" };
const _hoisted_2 = ["text"];
const _hoisted_3 = ["text"];
const _hoisted_4 = ["text"];
const _hoisted_5 = ["text"];
const _hoisted_6 = { column: "3" };
const _hoisted_7 = ["text"];
const _hoisted_8 = ["text"];
const _hoisted_9 = ["text"];
const _hoisted_10 = ["text"];
const _hoisted_11 = ["text"];
const _hoisted_12 = ["text"];
const _hoisted_13 = {
  column: "3",
  square: ""
};
const _hoisted_14 = ["text"];
const _hoisted_15 = ["text"];
const _hoisted_16 = ["text"];
const _hoisted_17 = ["text"];
const _hoisted_18 = ["text"];
const _hoisted_19 = ["text"];
const _hoisted_20 = { noborder: "" };
const _hoisted_21 = ["text"];
const _hoisted_22 = ["text"];
const _hoisted_23 = ["text"];
const _hoisted_24 = ["text"];
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("quark-grid", { column: "3" }, [
  /* @__PURE__ */ createBaseVNode("quark-grid-item", null, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
      style: { "width": "40px" }
    })
  ]),
  /* @__PURE__ */ createBaseVNode("quark-grid-item", null, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
      style: { "width": "40px" }
    })
  ]),
  /* @__PURE__ */ createBaseVNode("quark-grid-item", null, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
      style: { "width": "40px" }
    })
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-grid", null, [
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("column")), 1),
    createBaseVNode("quark-grid", _hoisted_6, [
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_7),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_8),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_9),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_10),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_11),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_12)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("square")), 1),
    createBaseVNode("quark-grid", _hoisted_13, [
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_14),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_15),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_16),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_17),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_18),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_19)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("border")), 1),
    createBaseVNode("quark-grid", _hoisted_20, [
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_21),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_22),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_23),
      createBaseVNode("quark-grid-item", {
        icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
        text: _ctx.translate("text")
      }, null, 8, _hoisted_24)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("custom")), 1),
    _hoisted_25
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
