import { c as createComponent } from "./component.c0f9a560.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, g as createTextVNode, b as openBlock } from "./mobile.ab38b32d.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("collapse");
const _sfc_main = createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5",
          openState: "\u6253\u5F00\u72B6\u6001",
          iconhide: "\u65E0icon\u6837\u5F0F",
          customTitile: "\u81EA\u5B9A\u4E49\u6807\u9898",
          customIcon: "\u81EA\u5B9A\u4E49\u56FE\u6807",
          title: "\u6807\u9898",
          title1: "\u6807\u98981",
          title2: "\u6807\u98982",
          content: "\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002"
        },
        "en-US": {
          basic: "Basic Usage",
          openState: "Open State",
          iconhide: "Custom Style",
          customTitile: "Custom titile",
          customIcon: "Custom Icon",
          title: "Title",
          title1: "Title1",
          title2: "Title2",
          content: "  Life is far more than spinning around and being busy to the limit. Human experience is far broader and richer than this."
        }
      });
    });
    return {
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding action-sheet-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = { slot: "title" };
const _hoisted_8 = { style: { "color": "blueviolet" } };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", {
  slot: "icon",
  class: "collapse-icon"
}, "\u{1F389}\u{1F389}\u{1F389}", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", null, [
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title1")
      }, toDisplayString(_ctx.translate("content")), 9, _hoisted_2),
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title2")
      }, toDisplayString(_ctx.translate("content")), 9, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("openState")), 1),
    createBaseVNode("div", null, [
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title"),
        open: ""
      }, toDisplayString(_ctx.translate("content")), 9, _hoisted_4)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("iconhide")), 1),
    createBaseVNode("div", null, [
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title"),
        iconhide: ""
      }, toDisplayString(_ctx.translate("content")), 9, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customTitile")), 1),
    createBaseVNode("div", null, [
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title")
      }, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.translate("title")) + toDisplayString(_ctx.translate("title")), 1)
        ]),
        createTextVNode(" " + toDisplayString(_ctx.translate("content")), 1)
      ], 8, _hoisted_6)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customIcon")), 1),
    createBaseVNode("div", null, [
      createBaseVNode("quark-collapse", {
        title: _ctx.translate("title")
      }, [
        _hoisted_10,
        createTextVNode(" " + toDisplayString(_ctx.translate("content")), 1)
      ], 8, _hoisted_9)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
