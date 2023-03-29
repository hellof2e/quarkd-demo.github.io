import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.b852edd5.js";
import { c as createComponent } from "./component.2a9314a3.js";
import "./index.6cadae0e.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("navbar");
const _sfc_main = createDemo({
  setup() {
    const onLeftClick = () => {
      Toast.text(`${translate("clicked")}`);
    };
    const onRightClick = () => {
      Toast.text(`${translate("clicked")}`);
    };
    const close = () => {
      Toast.text(`${translate("closed")}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          background: "\u6587\u5B57/\u80CC\u666F\u989C\u8272\u8BBE\u7F6E",
          left: "\u5DE6\u4FA7\u6309\u94AE\u81EA\u5B9A\u4E49",
          right: "\u53F3\u4FA7\u6309\u94AE\u81EA\u5B9A\u4E49",
          title: "\u9875\u9762\u6807\u9898",
          leftTitle: "\u5DE6\u6807\u9898",
          rightTitle: "\u5206\u4EAB",
          iconTitle: "\u5C0F\u53F7\u56FE\u6807",
          event: "\u4E8B\u4EF6\u7ED1\u5B9A",
          close: "\u70B9\u51FB\u5DE6\u53F3\u4FA7\u548C\u5173\u95ED",
          return: "\u8FD4\u56DE",
          clicked: "\u70B9\u51FB",
          closed: "\u5173\u95ED"
        },
        "en-US": {
          basic: "Basic Usage",
          background: "Background Color",
          left: "Custom Left Button",
          right: "Csutom Right Button",
          title: "Page Title",
          leftTitle: "Left Title",
          rightTitle: "Share",
          iconTitle: "Small Icon",
          event: "Event Binding",
          close: "Click event and close",
          return: "Return",
          clicked: "Clicked",
          closed: "Close"
        }
      });
    });
    return {
      onLeftClick,
      onRightClick,
      close,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding navbar-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title", "right"];
const _hoisted_5 = ["title", "right"];
const _hoisted_6 = ["title"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", {
  slot: "left",
  class: "left-wrap"
}, [
  /* @__PURE__ */ createBaseVNode("quark-icon-user", {
    size: "24",
    name: "user"
  })
], -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = ["title"];
const _hoisted_10 = { slot: "left" };
const _hoisted_11 = ["title"];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "user",
  slot: "right"
}, null, -1);
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = ["right", "title"];
const _hoisted_15 = ["right", "title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-navbar", {
      title: _ctx.translate("title")
    }, null, 8, _hoisted_2),
    createBaseVNode("quark-navbar", {
      title: _ctx.translate("leftTitle"),
      closehide: "true",
      class: "left"
    }, null, 8, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("background")), 1),
    createBaseVNode("quark-navbar", {
      class: "bg",
      title: _ctx.translate("title"),
      right: _ctx.translate("rightTitle"),
      safearea: "true"
    }, null, 8, _hoisted_4),
    createBaseVNode("quark-navbar", {
      class: "bg2",
      title: _ctx.translate("iconTitle"),
      right: _ctx.translate("rightTitle"),
      iconsize: "18"
    }, null, 8, _hoisted_5),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("left")), 1),
    createBaseVNode("quark-navbar", {
      title: _ctx.translate("title")
    }, _hoisted_8, 8, _hoisted_6),
    createBaseVNode("quark-navbar", {
      title: _ctx.translate("title")
    }, [
      createBaseVNode("span", _hoisted_10, toDisplayString(_ctx.translate("return")), 1)
    ], 8, _hoisted_9),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("right")), 1),
    createBaseVNode("quark-navbar", {
      title: _ctx.translate("title")
    }, _hoisted_13, 8, _hoisted_11),
    createBaseVNode("quark-navbar", {
      right: _ctx.translate("rightTitle"),
      title: _ctx.translate("title")
    }, null, 8, _hoisted_14),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("event")), 1),
    createBaseVNode("quark-navbar", {
      right: _ctx.translate("rightTitle"),
      title: _ctx.translate("close"),
      onLeftclick: _cache[0] || (_cache[0] = (...args) => _ctx.onLeftClick && _ctx.onLeftClick(...args)),
      onRightclick: _cache[1] || (_cache[1] = (...args) => _ctx.onRightClick && _ctx.onRightClick(...args)),
      onClose: _cache[2] || (_cache[2] = (...args) => _ctx.close && _ctx.close(...args))
    }, null, 40, _hoisted_15)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
