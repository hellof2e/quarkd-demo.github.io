import { c as createComponent } from "./component.3fec3639.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, H as withDirectives, I as vModelText, T as Toast, b as openBlock } from "./mobile.d9cd9b68.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("textarea");
const _sfc_main = createDemo({
  setup() {
    const textAreaInput = ref("");
    const handleEvent = (event, type) => {
      Toast.text(`${event.target.value}${type}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          count: "\u5B57\u6570\u7EDF\u8BA1",
          limit: "\u5B57\u6570\u9650\u5236",
          rows: "\u6307\u5B9A\u884C\u6570",
          height: "\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6",
          disabled: "\u7981\u7528\u72B6\u6001",
          event: "\u89E6\u53D1\u4E8B\u4EF6",
          custom: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
        },
        "en-US": {
          basic: "Basic Usage",
          count: "Show Count",
          limit: "Count Limit",
          rows: "Rows Setting",
          height: "Autosize",
          disabled: "Disabled",
          event: "Event Trigger",
          custom: "Custom Style"
        }
      });
    });
    return {
      textAreaInput,
      handleEvent,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo textarea-demo no-padding" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("quark-textarea", { showcount: "" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-textarea", {
  showcount: "",
  maxlength: "50"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("quark-textarea", { rows: "6" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("quark-textarea", { autosize: "" }, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("quark-textarea", { disabled: "" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("quark-textarea", {
  showcount: "",
  class: "custom-style"
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    withDirectives(createBaseVNode("quark-textarea", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.textAreaInput = $event)
    }, null, 512), [
      [vModelText, _ctx.textAreaInput]
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("count")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("limit")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("rows")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("height")), 1),
    _hoisted_5,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_6,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("event")), 1),
    createBaseVNode("quark-textarea", {
      onInput: _cache[1] || (_cache[1] = ($event) => _ctx.handleEvent($event, "input")),
      onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.handleEvent($event, "blur")),
      onFocus: _cache[3] || (_cache[3] = ($event) => _ctx.handleEvent($event, "focus")),
      onCompositionstart: _cache[4] || (_cache[4] = ($event) => _ctx.handleEvent($event, "compositionstart"))
    }, null, 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("custom")), 1),
    _hoisted_7
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
