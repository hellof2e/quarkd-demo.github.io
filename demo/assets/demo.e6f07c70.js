import { c as createComponent } from "./component.26cf3cf5.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.a2f3240c.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("skeleton");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      checked: false,
      hide: false
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          avator: "\u663E\u793A\u5934\u50CF\u3001\u6807\u9898",
          rowwidths: "\u8BBE\u7F6E\u5BBD\u5EA6",
          childComponent: "\u663E\u793A\u5B50\u7EC4\u4EF6",
          about: "\u5173\u4E8E Quark",
          des: "Quark \u662F\u4E00\u6B3E\u57FA\u4E8E Web Components \u7684\u8DE8\u6846\u67B6 UI \u7EC4\u4EF6\u5E93\u3002"
        },
        "en-US": {
          basic: "Basic Usage",
          avator: "Show Avatar\u3001Title",
          rowwidths: "Set row width",
          childComponent: "Show childComponent",
          about: "About Quark",
          des: "Quark is a cross-frame UI component library based on Web Components."
        }
      });
    });
    const handleSwitch = (e) => {
      data.value.checked = e.detail.value;
      data.value.hide = e.detail.value;
    };
    return {
      data,
      handleSwitch,
      translate
    };
  }
});
const _hoisted_1 = {
  class: "demo skeleton-demo",
  style: { "background": "#fff" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell base-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-skeleton", { row: 2 })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell base-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-skeleton", {
    title: "",
    avatar: "",
    row: 2
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell base-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-skeleton", {
    title: "",
    avatar: "",
    row: 2,
    rowwidths: "100%,20%"
  })
], -1);
const _hoisted_5 = ["checked"];
const _hoisted_6 = { class: "quark-cell base-cell" };
const _hoisted_7 = ["hide"];
const _hoisted_8 = { class: "demo-preview" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  src: "https://m.hellobike.com/resource/helloyun/13459/BI7jn_quark-logo.png",
  alt: ""
}, null, -1);
const _hoisted_10 = { class: "demo-content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("avator")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("rowwidths")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("childComponent")), 1),
    createBaseVNode("quark-switch", {
      checked: _ctx.data.checked,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleSwitch && _ctx.handleSwitch(...args))
    }, null, 40, _hoisted_5),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-skeleton", {
        title: "",
        avatar: "",
        row: 2,
        hide: _ctx.data.hide
      }, [
        createBaseVNode("div", _hoisted_8, [
          _hoisted_9,
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("h3", null, toDisplayString(_ctx.translate("about")), 1),
            createBaseVNode("p", null, toDisplayString(_ctx.translate("des")), 1)
          ])
        ])
      ], 8, _hoisted_7)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
