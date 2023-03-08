import { c as createComponent } from "./component.2f6d9413.js";
import { _ as _export_sfc, E as reactive, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.444dfa5b.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("marquee");
const _sfc_main = createDemo({
  setup() {
    const isPaused = reactive({
      button: false,
      hover: false,
      click: false
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          speed: "\u4E0D\u540C\u901F\u5EA6",
          paused: "\u6682\u505C",
          pausedExmple: {
            button: {
              title: "\u63A7\u5236\u6682\u505C",
              pause: "\u6682\u505C",
              continue: "\u7EE7\u7EED"
            },
            hover: "\u60AC\u6D6E\u6682\u505C",
            click: "\u70B9\u51FB\u6682\u505C"
          },
          reverse: "\u53CD\u8F6C\u65B9\u5411",
          content: "2022 \u5E74\u6211\u4EEC\u89C1\u8BC1\u4E86\u5F88\u591A\u6280\u672F\u7684\u65B0\u53D1\u5C55\u65B0\u53D8\u5316\uFF1A\u4F4E\u4EE3\u7801\u7684\u7A81\u7136\u7206\u706B\u3001\u6570\u636E\u5E93\u7684\u63A5\u8FDE\u5F00\u6E90\u3001\u82AF\u7247\u7684\u77ED\u7F3A\u4E0E\u81EA\u7814\u3001\u8BAD\u7EC3\u6A21\u578B\u7684\u53C2\u6570\u7A81\u7834",
          alert: {
            return: "\u8FD4\u56DE",
            clear: "\u6E05\u9664"
          }
        },
        "en-US": {
          basic: "Basic Usage",
          speed: "Marqueen Speed",
          pausedExmple: {
            button: {
              title: "Control Paused",
              pause: "Pause",
              continue: "Continue"
            },
            hover: "Hover Paused",
            click: "Click Paused"
          },
          reverse: "Reverse Direction",
          content: "In 2022, we will witness many new developments and changes in technology: the sudden explosion of low-code, the continuous open source of databases, the shortage of chips and self-research, and the parameter breakthrough of training models",
          alert: {
            return: "Go Back",
            clear: "Clear"
          }
        }
      });
    });
    return {
      isPaused,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title", "paused"];
const _hoisted_8 = ["title", "paused"];
const _hoisted_9 = ["title", "paused"];
const _hoisted_10 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-marquee", {
        title: _ctx.translate("content")
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("speed")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      speed: "25"
    }, null, 8, _hoisted_4),
    _hoisted_5,
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      speed: "100"
    }, null, 8, _hoisted_6),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("pausedExmple.button.title")), 1),
    createBaseVNode("quark-button", {
      class: "paused-button",
      size: "small",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isPaused.button = true)
    }, toDisplayString(_ctx.translate("pausedExmple.button.pause")), 1),
    createBaseVNode("quark-button", {
      class: "paused-button",
      size: "small",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.isPaused.button = false)
    }, toDisplayString(_ctx.translate("pausedExmple.button.continue")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      paused: _ctx.isPaused.button
    }, null, 8, _hoisted_7),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("pausedExmple.hover")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      paused: _ctx.isPaused.hover,
      onMouseover: _cache[2] || (_cache[2] = ($event) => _ctx.isPaused.hover = true),
      onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.isPaused.hover = false)
    }, null, 40, _hoisted_8),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("pausedExmple.click")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      paused: _ctx.isPaused.click,
      onClick: _cache[4] || (_cache[4] = ($event) => _ctx.isPaused.click = !_ctx.isPaused.click)
    }, null, 8, _hoisted_9),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("reverse")), 1),
    createBaseVNode("quark-marquee", {
      title: _ctx.translate("content"),
      reverse: true
    }, null, 8, _hoisted_10)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
