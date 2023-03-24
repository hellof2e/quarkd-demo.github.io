import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.ab691ab4.js";
import { c as createComponent } from "./component.20dc6cd5.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("loading");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          loadingType: "\u52A0\u8F7D\u7C7B\u578B",
          customSize: "\u81EA\u5B9A\u4E49\u5927\u5C0F",
          customColor: "\u81EA\u5B9A\u4E49\u989C\u8272",
          loadingText: "\u52A0\u8F7D\u6587\u6848",
          vertical: "\u5782\u76F4\u6392\u5217",
          customStyle: "\u81EA\u5B9A\u4E49\u6587\u672C\u6837\u5F0F",
          load: "\u52A0\u8F7D\u4E2D..."
        },
        "en-US": {
          loadingType: "Loading Type",
          customSize: "Custom Size",
          customColor: "Custom Color",
          loadingText: "Loading Text",
          vertical: "Vertical Layout",
          customStyle: "Custom Text Style",
          load: "loading..."
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo loading-demo" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "demo-loadings" }, [
  /* @__PURE__ */ createBaseVNode("quark-loading", { type: "circular" }),
  /* @__PURE__ */ createBaseVNode("quark-loading")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "demo-loadings" }, [
  /* @__PURE__ */ createBaseVNode("quark-loading", { size: "20" }),
  /* @__PURE__ */ createBaseVNode("quark-loading", { size: "30" }),
  /* @__PURE__ */ createBaseVNode("quark-loading", { size: "40" })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "demo-loadings" }, [
  /* @__PURE__ */ createBaseVNode("quark-loading", { size: "30" }),
  /* @__PURE__ */ createBaseVNode("quark-loading", {
    size: "30",
    color: "green"
  }),
  /* @__PURE__ */ createBaseVNode("quark-loading", {
    size: "30",
    color: "warning"
  })
], -1);
const _hoisted_5 = { class: "demo-loadings" };
const _hoisted_6 = { size: "30" };
const _hoisted_7 = { class: "demo-loadings" };
const _hoisted_8 = {
  size: "30",
  vertical: ""
};
const _hoisted_9 = { class: "demo-loadings" };
const _hoisted_10 = {
  size: "30",
  vertical: "",
  class: "custom-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("loadingType")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customSize")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customColor")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("loadingText")), 1),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("quark-loading", _hoisted_6, toDisplayString(_ctx.translate("load")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("vertical")), 1),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("quark-loading", _hoisted_8, toDisplayString(_ctx.translate("load")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle")), 1),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("quark-loading", _hoisted_10, toDisplayString(_ctx.translate("load")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
