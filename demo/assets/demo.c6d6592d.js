import { c as createComponent } from "./component.2436f793.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.ee66c392.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("switch");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      checked1: false,
      checked2: true,
      checked3: true
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5",
          disabled: "\u7981\u7528\u72B6\u6001",
          size: "\u81EA\u5B9A\u4E49\u5927\u5C0F",
          color: "\u81EA\u5B9A\u4E49\u989C\u8272"
        },
        "en-US": {
          basic: "Basic Usage",
          disabled: "Disabled",
          size: "Custom Size",
          color: "Custom Color"
        }
      });
    });
    const handleChange1 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked1 = e.detail.value;
    };
    const handleChange2 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked2 = !data.value.checked2;
    };
    const handleChange3 = (e) => {
      console.log("current value is:", e.detail.value);
      data.value.checked3 = e.detail.value;
    };
    return {
      data,
      handleChange1,
      handleChange2,
      handleChange3,
      translate
    };
  }
});
const _hoisted_1 = {
  class: "demo switch-demo",
  style: { "background-color": "#fff" }
};
const _hoisted_2 = ["checked"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-switch", { disabled: "" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("quark-switch", {
  disabled: "",
  checked: ""
}, null, -1);
const _hoisted_5 = ["checked"];
const _hoisted_6 = ["checked"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-switch", {
      checked: _ctx.data.checked1,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange1 && _ctx.handleChange1(...args))
    }, null, 40, _hoisted_2),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("size")), 1),
    createBaseVNode("quark-switch", {
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange2 && _ctx.handleChange2(...args)),
      checked: _ctx.data.checked2,
      size: "20"
    }, null, 40, _hoisted_5),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("color")), 1),
    createBaseVNode("quark-switch", {
      onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleChange3 && _ctx.handleChange3(...args)),
      checked: _ctx.data.checked3,
      color: "red"
    }, null, 40, _hoisted_6)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
