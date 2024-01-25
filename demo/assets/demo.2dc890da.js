import { c as createComponent } from "./component.39791595.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.84854240.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("stepper");
const _sfc_main = createDemo({
  setup() {
    const value = ref(1);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          limit: "\u9650\u5236\u8F93\u5165\u8303\u56F4",
          steps: "\u6B65\u957F\u8BBE\u7F6E",
          interger: "\u9650\u5236\u8F93\u5165\u6574\u6570",
          disabled: "\u7981\u7528\u72B6\u6001",
          call: "\u53D8\u66F4\u56DE\u8C03",
          css: "css\u5C5E\u6027"
        },
        "en-US": {
          basic: "Basic Usage",
          limit: "Limit Input Range",
          steps: "Steps Setting",
          interger: "Interger Limit",
          disabled: "Disabled",
          call: "Change Call",
          css: "CSS Style"
        }
      });
    });
    const changeValue = ({ detail }) => {
      value.value = detail.value;
    };
    const change = ({ detail }) => {
      Toast.text(detail.value);
    };
    const blur = ({ detail }) => {
      Toast.text("blur");
    };
    const focus = ({ detail }) => {
      Toast.text("focus");
    };
    return {
      value,
      changeValue,
      change,
      blur,
      focus,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo stepper-demo" };
const _hoisted_2 = { class: "quark-cell" };
const _hoisted_3 = ["value"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-stepper", {
    min: "5",
    max: "12"
  })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-stepper", { steps: "2" })
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-stepper", { interger: "" })
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-stepper", { disabled: "" })
], -1);
const _hoisted_8 = { class: "quark-cell" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-stepper", { class: "theme" })
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-stepper", {
        value: _ctx.value,
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.changeValue && _ctx.changeValue(...args))
      }, null, 40, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("limit")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("steps")), 1),
    _hoisted_5,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("interger")), 1),
    _hoisted_6,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_7,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("call")), 1),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("quark-stepper", {
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.change && _ctx.change(...args))
      }, null, 32)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("css")), 1),
    _hoisted_9
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
