import { c as createComponent } from "./component.72c9863f.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, e as createStaticVNode, b as openBlock } from "./mobile.3f242a9e.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("badge");
const _sfc_main = createDemo({
  setup() {
    const num = ref(11);
    const change = () => {
      num.value = num.value + 1;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          independent: "\u5FBD\u6807\u72EC\u7ACB\u4F7F\u7528",
          word: "\u6587\u5B57\u5FBD\u6807",
          type: "\u5FBD\u6807\u7C7B\u578B",
          size: "\u5FBD\u6807\u5927\u5C0F",
          style: "\u5FBD\u6807\u98CE\u683C",
          digital: "\u6570\u5B57\u5FBD\u6807",
          custom: "\u81EA\u5B9A\u4E49\u6837\u5F0F-\u80CC\u666F\u8272",
          normal: "\u666E\u901A\u5FBD\u6807",
          border: "\u8FB9\u6846\u5FBD\u6807"
        },
        "en-US": {
          independent: "Badge Independent Use",
          word: "Word Badge",
          type: "Badge Type",
          size: "Badge Size",
          style: "Badge Style",
          digital: "Digital Badge",
          custom: "Custom-Background",
          normal: "Normal Badge",
          border: "Border Badge"
        }
      });
    });
    return {
      num,
      change,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo demo-badge" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "badge-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-badge", { type: "dot" })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "badge-container" }, [
  /* @__PURE__ */ createBaseVNode("quark-badge", {
    type: "round",
    content: "9"
  })
], -1);
const _hoisted_4 = { class: "badge-container" };
const _hoisted_5 = ["content"];
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<div class="badge-container"><quark-badge type="dot"><div class="child"></div></quark-badge></div><div class="badge-container"><quark-badge type="round" content="9"><div class="child"></div></quark-badge></div>', 2);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="badge-container"><quark-badge type="dot"><div class="child"></div></quark-badge></div><div class="badge-container"><quark-badge content="9"><div class="child"></div></quark-badge></div><div class="badge-container"><quark-badge type="dot" size="big"><div class="child"></div></quark-badge></div><div class="badge-container"><quark-badge size="big" content="9"><div class="child"></div></quark-badge></div>', 4);
const _hoisted_12 = { class: "badge-container" };
const _hoisted_13 = ["content"];
const _hoisted_14 = { class: "badge-container dark" };
const _hoisted_15 = ["content"];
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<div class="badge-container"><quark-badge content="9"><div class="child"></div></quark-badge></div><div class="badge-container"><quark-badge content="100" max="99"><div class="child"></div></quark-badge></div>', 2);
const _hoisted_18 = { class: "badge-container" };
const _hoisted_19 = ["content"];
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "child" }, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("independent")), 1),
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-badge", {
        type: "label",
        content: _ctx.translate("word")
      }, null, 8, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("type")), 1),
    _hoisted_6,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("size")), 1),
    _hoisted_8,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("style")), 1),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("quark-badge", {
        type: "label",
        content: _ctx.translate("normal"),
        size: "big"
      }, null, 8, _hoisted_13)
    ]),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("quark-badge", {
        border: "",
        type: "label",
        content: _ctx.translate("border"),
        size: "big"
      }, null, 8, _hoisted_15)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("digital")), 1),
    _hoisted_16,
    createBaseVNode("h2", {
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args))
    }, toDisplayString(_ctx.translate("custom")), 1),
    createBaseVNode("div", _hoisted_18, [
      createBaseVNode("quark-badge", {
        class: "bg-color",
        content: _ctx.num
      }, _hoisted_21, 8, _hoisted_19)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
