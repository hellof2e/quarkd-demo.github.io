import { c as createComponent } from "./component.72dc34a1.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.9d80e146.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("search");
const _sfc_main = createDemo({
  setup() {
    const defaultValue = ref("");
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          background: "\u66F4\u6539\u8F93\u5165\u6846\u5185\u90E8\u53CA\u5916\u90E8\u7684\u80CC\u666F\u6837\u5F0F",
          color: "\u81EA\u5B9A\u4E49\u989C\u8272",
          round: "\u5706\u89D2",
          readonly: "\u53EA\u8BFB",
          disabled: "\u7981\u7528",
          hide: "\u9690\u85CF\u53D6\u6D88\u6309\u94AE",
          show: "\u663E\u793A\u8FD4\u56DE\u6309\u94AE",
          slot: "\u81EA\u5B9A\u4E49\u6309\u94AE",
          event: "\u4E8B\u4EF6\u7ED1\u5B9A",
          toast: {
            cancel: "\u53D6\u6D88",
            return: "\u8FD4\u56DE",
            empty: "\u7A7A"
          }
        },
        "en-US": {
          basic: "Basic Usage",
          background: "Change background style",
          color: "Custom Color",
          round: "Round",
          readonly: "Readonly",
          disabled: "Disabled",
          hide: "Hide Cancel Button",
          show: "Show Return Button",
          slot: "Custom Button",
          event: "Event Binding",
          toast: {
            cancel: "Cancel",
            return: "Return",
            empty: "Empty"
          }
        }
      });
    });
    const onChange1 = ({ detail }) => {
      defaultValue.value = detail.value;
    };
    const onChange2 = ({ detail }) => {
      defaultValue.value = detail.value;
      Toast.text(detail.value || `${translate("toast.empty")}`);
    };
    const onChange = ({ detail }) => {
      defaultValue.value = detail.value;
      Toast.text(detail.value || `${translate("toast.empty")}`);
    };
    const onFocus = () => {
      Toast.text("focus");
    };
    const onBlur = () => {
      Toast.text("blur");
    };
    const onSearch = () => {
      Toast.text("search");
    };
    const onCancel = () => {
      Toast.text(`${translate("toast.cancel")}`);
    };
    const onBack = () => {
      Toast.text(`${translate("toast.return")}`);
    };
    return {
      defaultValue,
      onChange1,
      onChange2,
      onChange,
      onFocus,
      onBlur,
      onSearch,
      onCancel,
      onBack,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding search-demo" };
const _hoisted_2 = { slot: "action" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-search", {
  dark: "",
  showback: "",
  hideaction: ""
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("quark-search", {
  class: "custom-color",
  showback: "",
  hideaction: "",
  iconColor: "aqua"
}, null, -1);
const _hoisted_5 = { shape: "round" };
const _hoisted_6 = { slot: "action" };
const _hoisted_7 = { readonly: "" };
const _hoisted_8 = { slot: "action" };
const _hoisted_9 = { disabled: "" };
const _hoisted_10 = { slot: "action" };
const _hoisted_11 = ["placeholder"];
const _hoisted_12 = { showback: "" };
const _hoisted_13 = { slot: "action" };
const _hoisted_14 = { slot: "action" };
const _hoisted_15 = { slot: "action" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-search", {
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange1 && _ctx.onChange1(...args))
    }, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ], 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("background")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("color")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("round")), 1),
    createBaseVNode("quark-search", _hoisted_5, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("readonly")), 1),
    createBaseVNode("quark-search", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    createBaseVNode("quark-search", _hoisted_9, [
      createBaseVNode("div", _hoisted_10, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("hide")), 1),
    createBaseVNode("quark-search", {
      hideaction: "",
      placeholder: _ctx.translate("hide")
    }, null, 8, _hoisted_11),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("show")), 1),
    createBaseVNode("quark-search", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("slot")), 1),
    createBaseVNode("quark-search", null, [
      createBaseVNode("div", _hoisted_14, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("slot")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("event")), 1),
    createBaseVNode("quark-search", {
      id: "search-event",
      showback: "",
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChange && _ctx.onChange(...args)),
      onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
      onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onSearch: _cache[4] || (_cache[4] = (...args) => _ctx.onSearch && _ctx.onSearch(...args)),
      onCancel: _cache[5] || (_cache[5] = (...args) => _ctx.onCancel && _ctx.onCancel(...args)),
      onBack: _cache[6] || (_cache[6] = (...args) => _ctx.onBack && _ctx.onBack(...args))
    }, [
      createBaseVNode("div", _hoisted_15, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("toast.cancel")), 1)
      ])
    ], 32)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
