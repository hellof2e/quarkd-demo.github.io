import { c as createComponent } from "./component.616a4cf8.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock, p as pushScopeId, m as popScopeId } from "./mobile.7e64e960.js";
var demo_scss_vue_type_style_index_0_src_scoped_true_lang = "";
const { createDemo, translate } = createComponent("rate");
const _sfc_main = createDemo({
  setup() {
    const rate = ref(2);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          selectedColor: "\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272",
          disabled: "\u7981\u7528\u72B6\u6001",
          readonly: "\u53EA\u8BFB\u72B6\u6001",
          event: "\u76D1\u542C change \u4E8B\u4EF6",
          imageIcon: "\u56FE\u7247icon"
        },
        "en-US": {
          basic: "Basic Usage",
          selectedColor: "Custom Selected Color",
          disabled: "Disabled",
          readonly: "Readonly",
          event: "Listen to change event",
          imageIcon: "image icon"
        }
      });
    });
    onMounted(() => {
      setTimeout(() => {
        rate.value = 3;
      }, 2e3);
    });
    const handleChange = (e) => {
      Toast.text(e.detail.value);
    };
    return {
      rate,
      handleChange,
      translate
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5a0f8119"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo scope-rate" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-rate", { defaultvalue: "1" })
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-rate", {
    defaultvalue: "2",
    activecolor: "#ffd21e"
  })
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-rate", {
    defaultvalue: "2",
    disabled: ""
  })
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-rate", {
    defaultvalue: "2",
    readonly: ""
  })
], -1));
const _hoisted_6 = { class: "tag-container" };
const _hoisted_7 = ["value"];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-rate", {
    defaultvalue: "2",
    imgicon: "https://quark-design.hellobike.com/assets/quark-logo.7fd50e67.png"
  })
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("selectedColor")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("readonly")), 1),
    _hoisted_5,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("event")), 1),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-rate", {
        value: _ctx.rate,
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
      }, null, 40, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("imageIcon")), 1),
    _hoisted_8
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a0f8119"]]);
export { demo as default };
