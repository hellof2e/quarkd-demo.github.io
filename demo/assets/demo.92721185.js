import { c as createComponent } from "./component.074f0ea3.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.82d141dc.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("button");
const _sfc_main = createDemo({
  setup() {
    const time1 = ref(72e5);
    const time2 = ref(36e4);
    const time3 = ref(5e3);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          base: "\u57FA\u672C\u4F7F\u7528",
          format: "\u683C\u5F0F\u5316",
          callback: "\u7ED3\u675F\u56DE\u8C03",
          style: "\u6837\u5F0F\u81EA\u5B9A\u4E49",
          slot: "\u81EA\u5B9A\u4E49\u95F4\u9694\u7B26"
        },
        "en-US": {
          base: "Basic Usage",
          format: "Custom Format",
          callback: "End the callback",
          style: "Custom Style",
          slot: "Custom spacer"
        }
      });
    });
    const onEnd = () => {
      Toast.text("\u5F00\u59CB\u79D2\u6740");
    };
    return {
      translate,
      time1,
      time2,
      time3,
      onEnd
    };
  }
});
const _hoisted_1 = { class: "demo button-demo" };
const _hoisted_2 = { class: "demo-buttons" };
const _hoisted_3 = ["time"];
const _hoisted_4 = { class: "demo-buttons" };
const _hoisted_5 = ["time"];
const _hoisted_6 = ["time"];
const _hoisted_7 = ["time"];
const _hoisted_8 = { class: "demo-buttons" };
const _hoisted_9 = ["time"];
const _hoisted_10 = { class: "demo-buttons" };
const _hoisted_11 = ["time"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("base")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-countdown", { time: _ctx.time1 }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("format")), 1),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-countdown", {
        format: "MM:SS",
        time: _ctx.time2,
        class: "mgr-10"
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-countdown", {
        format: "MM-SS",
        time: _ctx.time2,
        class: "mgr-10"
      }, null, 8, _hoisted_6),
      createBaseVNode("quark-countdown", {
        format: "MM SS",
        time: _ctx.time2
      }, null, 8, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("callback")), 1),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("quark-countdown", {
        time: _ctx.time3,
        onEnd: _cache[0] || (_cache[0] = (...args) => _ctx.onEnd && _ctx.onEnd(...args))
      }, null, 40, _hoisted_9)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("style")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-countdown", {
        class: "css",
        time: _ctx.time1
      }, null, 8, _hoisted_11)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
