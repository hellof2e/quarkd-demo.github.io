import { c as createComponent } from "./component.4f79d5f6.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.50dfbfab.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("sticky");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          size: "\u6807\u7B7E\u5927\u5C0F",
          plain: "\u7A7A\u5FC3\u6837\u5F0F",
          light: "\u6D45\u8272\u6837\u5F0F",
          color: "\u81EA\u5B9A\u4E49\u989C\u8272",
          round: "\u5706\u89D2\u6807\u7B7E",
          roundTag: "\u6211\u662F\u5706\u89D2",
          tag: "\u6B63"
        },
        "en-US": {
          basic: "Basic Usage",
          size: "Tag Size",
          plain: "Plain Tag",
          light: "Light Tag",
          color: "Custom Color",
          round: "Round Tag",
          roundTag: "Round Tag",
          tag: "Q"
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo tag-demo" };
const _hoisted_2 = { class: "tag-container" };
const _hoisted_3 = {
  type: "danger",
  size: "large"
};
const _hoisted_4 = { class: "tag-container" };
const _hoisted_5 = {
  type: "warning",
  size: "large"
};
const _hoisted_6 = { class: "tag-container" };
const _hoisted_7 = {
  type: "success",
  size: "large"
};
const _hoisted_8 = { class: "tag-container" };
const _hoisted_9 = {
  type: "primary",
  size: "large"
};
const _hoisted_10 = { class: "tag-container" };
const _hoisted_11 = { class: "tag-container" };
const _hoisted_12 = { size: "large" };
const _hoisted_13 = { class: "tag-container" };
const _hoisted_14 = {
  plain: "",
  size: "large",
  type: "danger"
};
const _hoisted_15 = { class: "tag-container" };
const _hoisted_16 = {
  plain: "",
  size: "large",
  type: "warning"
};
const _hoisted_17 = { class: "tag-container" };
const _hoisted_18 = {
  plain: "",
  size: "large",
  type: "success"
};
const _hoisted_19 = { class: "tag-container" };
const _hoisted_20 = {
  plain: "",
  size: "large",
  type: "primary"
};
const _hoisted_21 = { class: "tag-container" };
const _hoisted_22 = {
  light: "",
  size: "large",
  type: "danger"
};
const _hoisted_23 = { class: "tag-container" };
const _hoisted_24 = {
  light: "",
  size: "large",
  type: "warning"
};
const _hoisted_25 = { class: "tag-container" };
const _hoisted_26 = {
  light: "",
  size: "large",
  type: "success"
};
const _hoisted_27 = { class: "tag-container" };
const _hoisted_28 = {
  light: "",
  size: "large",
  type: "primary"
};
const _hoisted_29 = { class: "tag-container" };
const _hoisted_30 = {
  size: "large",
  color: "#ffe1e1",
  textcolor: "#ad0000"
};
const _hoisted_31 = { class: "tag-container" };
const _hoisted_32 = {
  size: "large",
  color: "linear-gradient(135deg, #667eea, #764ba2)"
};
const _hoisted_33 = { class: "tag-container" };
const _hoisted_34 = {
  class: "custom-border-color",
  plain: "",
  size: "large",
  color: "#ffe1e1",
  textcolor: "#ad0000"
};
const _hoisted_35 = { class: "tag-container" };
const _hoisted_36 = {
  size: "large",
  type: "primary",
  round: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-tag", _hoisted_3, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-tag", _hoisted_5, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-tag", _hoisted_7, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("quark-tag", _hoisted_9, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("size")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-tag", null, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("quark-tag", _hoisted_12, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("plain")), 1),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("quark-tag", _hoisted_14, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_15, [
      createBaseVNode("quark-tag", _hoisted_16, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_17, [
      createBaseVNode("quark-tag", _hoisted_18, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_19, [
      createBaseVNode("quark-tag", _hoisted_20, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("light")), 1),
    createBaseVNode("div", _hoisted_21, [
      createBaseVNode("quark-tag", _hoisted_22, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_23, [
      createBaseVNode("quark-tag", _hoisted_24, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_25, [
      createBaseVNode("quark-tag", _hoisted_26, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_27, [
      createBaseVNode("quark-tag", _hoisted_28, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("color")), 1),
    createBaseVNode("div", _hoisted_29, [
      createBaseVNode("quark-tag", _hoisted_30, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_31, [
      createBaseVNode("quark-tag", _hoisted_32, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("div", _hoisted_33, [
      createBaseVNode("quark-tag", _hoisted_34, toDisplayString(_ctx.translate("tag")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("round")), 1),
    createBaseVNode("div", _hoisted_35, [
      createBaseVNode("quark-tag", _hoisted_36, toDisplayString(_ctx.translate("roundTag")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
