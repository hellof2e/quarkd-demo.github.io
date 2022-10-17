import { c as createComponent } from "./component.80ebf159.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.4ae0ea58.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("marquee");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          speed: "\u4E0D\u540C\u901F\u5EA6",
          content: "2022 \u5E74\u6211\u4EEC\u89C1\u8BC1\u4E86\u5F88\u591A\u6280\u672F\u7684\u65B0\u53D1\u5C55\u65B0\u53D8\u5316\uFF1A\u4F4E\u4EE3\u7801\u7684\u7A81\u7136\u7206\u706B\u3001\u6570\u636E\u5E93\u7684\u63A5\u8FDE\u5F00\u6E90\u3001\u82AF\u7247\u7684\u77ED\u7F3A\u4E0E\u81EA\u7814\u3001\u8BAD\u7EC3\u6A21\u578B\u7684\u53C2\u6570\u7A81\u7834",
          alert: {
            return: "\u8FD4\u56DE",
            clear: "\u6E05\u9664"
          }
        },
        "en-US": {
          basic: "Basic Usage",
          speed: "Marqueen Speed",
          content: "In 2022, we will witness many new developments and changes in technology: the sudden explosion of low-code, the continuous open source of databases, the shortage of chips and self-research, and the parameter breakthrough of training models",
          alert: {
            return: "Go Back",
            clear: "Clear"
          }
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-marquee", {
        title: _ctx.translate("content")
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("speed")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      speed: "25"
    }, null, 8, _hoisted_4),
    _hoisted_5,
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      speed: "100"
    }, null, 8, _hoisted_6)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
