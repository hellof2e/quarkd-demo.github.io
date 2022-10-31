import { c as createComponent } from "./component.72c9863f.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.3f242a9e.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("empty");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          desc: "\u63CF\u8FF0\u6587\u5B57",
          image: "\u81EA\u5B9A\u4E49\u56FE\u7247",
          bottom: "\u81EA\u5B9A\u4E49\u5E95\u90E8",
          title: "\u6CA1\u6709\u5386\u53F2\u8BA2\u5355",
          order: "\u5FEB\u53BB\u4E0B\u4E00\u5355\u5427!",
          return: "\u8FD4\u56DE\u9996\u9875",
          button: "\u53BB\u4E0B\u5355"
        },
        "en-US": {
          basic: "Basic Usage",
          desc: "Description",
          image: "Custom Image",
          bottom: "Csutom Bottom",
          title: "No Order History",
          order: "Go and Order!",
          return: "Back to Home",
          button: "Go to Order"
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo empty-demo" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("quark-empty", null, null, -1);
const _hoisted_3 = ["title", "desc"];
const _hoisted_4 = ["desc"];
const _hoisted_5 = ["desc", "title"];
const _hoisted_6 = {
  class: "outer",
  slot: "footer"
};
const _hoisted_7 = { style: { "margin-right": "10px" } };
const _hoisted_8 = { type: "primary" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("desc")), 1),
    createBaseVNode("quark-empty", {
      title: _ctx.translate("title"),
      desc: _ctx.translate("order")
    }, null, 8, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("image")), 1),
    createBaseVNode("quark-empty", {
      desc: _ctx.translate("order"),
      imagesize: "100",
      image: "https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png"
    }, null, 8, _hoisted_4),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("bottom")), 1),
    createBaseVNode("quark-empty", {
      desc: _ctx.translate("order"),
      title: _ctx.translate("title")
    }, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("quark-button", _hoisted_7, toDisplayString(_ctx.translate("return")), 1),
        createBaseVNode("quark-button", _hoisted_8, toDisplayString(_ctx.translate("button")), 1)
      ])
    ], 8, _hoisted_5)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
