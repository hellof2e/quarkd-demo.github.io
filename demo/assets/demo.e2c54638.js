import { c as createComponent } from "./component.d7340ae2.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, g as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock, p as pushScopeId, q as popScopeId } from "./mobile.aa4025fd.js";
var demo_vue_vue_type_style_index_0_scoped_true_lang = "";
const { createDemo, translate } = createComponent("progress");
const _sfc_main = createDemo({
  setup() {
    const value = ref(10);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          showText: "\u663E\u793A\u5B57\u4F53\u8FDB\u5EA6",
          customColor: "\u81EA\u5B9A\u4E49\u989C\u8272/\u80CC\u666F\u8272",
          customStyle: "\u81EA\u5B9A\u4E49\u5BBD\u5EA6/\u9AD8\u5EA6/\u5706\u89D2/\u663E\u793A\u767E\u5206\u6BD4"
        },
        "en-US": {
          basic: "Basic Usage",
          showText: "Show Progress",
          customColor: "Custom Color/Background Color",
          customStyle: "Custom Width/Height/Round/Percentage"
        }
      });
    });
    onMounted(() => {
      let t = setInterval(() => {
        if (value.value >= 100)
          clearInterval(t);
        else
          value.value += 10;
      }, 1e3);
    });
    return {
      value,
      translate
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-3ebefdf6"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container progress-wrap" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "wrap" }, [
    /* @__PURE__ */ createBaseVNode("quark-progress", { value: "0" })
  ])
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container progress-wrap space" }, [
  /* @__PURE__ */ createBaseVNode("quark-progress", {
    value: "100",
    showtext: ""
  })
], -1));
const _hoisted_4 = { class: "tag-container progress-wrap" };
const _hoisted_5 = ["value"];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-progress", {
  value: "20",
  color: "green",
  showtext: ""
}, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-progress", {
  value: "30",
  color: "green",
  class: "green",
  showtext: ""
}, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "tag-container progress-wrap" }, [
  /* @__PURE__ */ createBaseVNode("quark-progress", {
    value: "90",
    class: "auto",
    color: "linear-gradient(\n        268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"
  }, [
    /* @__PURE__ */ createBaseVNode("span", {
      slot: "percent",
      class: "percent"
    }, "0.9")
  ])
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("showText")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customColor")), 1),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-progress", {
        value: _ctx.value,
        color: "yellowgreen",
        showtext: ""
      }, null, 8, _hoisted_5),
      _hoisted_6,
      _hoisted_7
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle")), 1),
    _hoisted_8
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3ebefdf6"]]);
export { demo as default };
