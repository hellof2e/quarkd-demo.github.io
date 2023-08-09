import { _ as _export_sfc, c as createElementBlock, b as openBlock, a as createBaseVNode } from "./mobile.30e96997.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "demo demo-card" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("quark-card", {
  title: "This is title",
  tips: "$ 100",
  content: "This is content of Card"
}, [
  /* @__PURE__ */ createBaseVNode("div", {
    class: "demo",
    "my-slot": "desc",
    style: { "font-size": "14px", "color": "#999", "padding-top": "14px" }
  }, " footer content ")
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
