import { c as createComponent } from "./component.6089a895.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.fc810470.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("cell");
const _sfc_main = createDemo({
  setup() {
    const fruit = ref("apple");
    const onChange = ({ detail }) => {
      fruit.value = detail.value;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "\u57FA\u672C\u7528\u6CD5",
            router: "\u94FE\u63A5\u8DF3\u8F6C",
            icon: "\u5C55\u793A\u56FE\u6807",
            group: "\u5206\u7EC4\u7528\u6CD5",
            custom: "\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u7701\u7565\u53F7\u5C55\u793A",
            right: "\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9"
          },
          title: "\u8FD9\u662F\u6807\u9898",
          desc: "\u63CF\u8FF0\u6587\u5B57",
          longTitle: "\u8FD9\u662F\u6807\u9898\u975E\u5E38\u7684\u957F\uFF0C\u592A\u957F\u4F1A\u81EA\u52A8\u6362\u884C\u7684\u54E6",
          longLongTitle: "\u8FD9\u662F\u6807\u9898\u5F88\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F\u957F",
          router: "\u8DEF\u7531\u8DF3\u8F6C",
          url: "\u94FE\u63A5\u8DF3\u8F6C"
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            router: "Router",
            icon: "Icon",
            group: "Inset Grouped",
            custom: "Custom Style",
            right: "Right content"
          },
          title: "Cell Title",
          desc: "Description",
          longTitle: "This is a very long title, it will automatically wrap.",
          longLongTitle: "The title is very very very very very very very long",
          router: "Router",
          url: "Url"
        }
      });
    });
    return {
      fruit,
      translate,
      onChange
    };
  }
});
const _hoisted_1 = { class: "demo no-padding demo-cell" };
const _hoisted_2 = ["title", "desc"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title", "desc"];
const _hoisted_5 = ["title", "desc"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
const _hoisted_8 = ["title", "desc"];
const _hoisted_9 = ["title"];
const _hoisted_10 = ["title"];
const _hoisted_11 = ["title"];
const _hoisted_12 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.basicUsage")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        desc: _ctx.translate("desc")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        islink: ""
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        desc: _ctx.translate("desc"),
        islink: ""
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-cell", {
        title: _ctx.translate("longTitle"),
        desc: _ctx.translate("desc"),
        islink: ""
      }, null, 8, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.router")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("router"),
        to: "#/button",
        islink: ""
      }, null, 8, _hoisted_6),
      createBaseVNode("quark-cell", {
        title: _ctx.translate("url"),
        to: "https://baidu.com",
        islink: ""
      }, null, 8, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.icon")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        desc: _ctx.translate("desc"),
        islink: "",
        icon: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png?x-oss-process=image/quality,q_80"
      }, null, 8, _hoisted_8)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.group")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title")
      }, null, 8, _hoisted_9),
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title")
      }, null, 8, _hoisted_10)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.custom")), 1),
    createBaseVNode("quark-cell", {
      class: "my-cell",
      title: _ctx.translate("longLongTitle")
    }, null, 8, _hoisted_11),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.right")), 1),
    createBaseVNode("quark-cell", {
      title: _ctx.translate("title")
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("CellTitle.right")), 1)
    ], 8, _hoisted_12)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
