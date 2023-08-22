import { c as createComponent } from "./component.7b10e87e.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, g as createTextVNode, b as openBlock } from "./mobile.cfd6eaa4.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("cell");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "\u57FA\u672C\u7528\u6CD5",
            custom: "\u6837\u5F0F\u5B9A\u5236",
            position: "\u8D77\u59CB\u4F4D\u7F6E"
          },
          size: "\u5927\u5C0F\u5B9A\u5236",
          color: "\u989C\u8272\u5B9A\u5236",
          strokewidth: "\u5BBD\u5EA6\u5B9A\u5236",
          layercolor: "\u8F68\u9053\u989C\u8272",
          anticlockwise: "\u9006\u65F6\u9488",
          gradient: "\u6E10\u53D8\u8272",
          right: "\u53F3\u4FA7",
          bottom: "\u4E0B\u4FA7",
          left: "\u5DE6\u4FA7",
          increase: "\u589E\u52A0",
          decrease: "\u51CF\u5C11"
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            custom: "Custom Style",
            position: "Start Position"
          },
          size: "Size",
          color: "Color",
          strokewidth: "Strokewidth",
          layercolor: "Layercolor",
          anticlockwise: "Anticlockwise",
          gradient: "Gradient",
          right: "Right",
          bottom: "Bottom",
          left: "Left",
          increase: "Increase",
          decrease: "Decrease"
        }
      });
    });
    const rate = ref(10);
    const increase = () => {
      rate.value += rate.value >= 100 ? 0 : 10;
    };
    const decrease = () => {
      rate.value -= rate.value <= 0 ? 0 : 10;
    };
    const anticlockwise = ref(true);
    const circleRef = ref();
    onMounted(() => {
      circleRef.value.setGradient({
        "0%": "#3fecff",
        "100%": "#6149f6"
      });
    });
    return {
      translate,
      rate,
      circleRef,
      increase,
      decrease,
      anticlockwise
    };
  }
});
const _hoisted_1 = { class: "demo demo-circle" };
const _hoisted_2 = ["rate"];
const _hoisted_3 = ["rate"];
const _hoisted_4 = ["rate"];
const _hoisted_5 = ["rate"];
const _hoisted_6 = ["rate"];
const _hoisted_7 = ["rate", "anticlockwise"];
const _hoisted_8 = ["rate"];
const _hoisted_9 = ["rate"];
const _hoisted_10 = ["rate"];
const _hoisted_11 = ["rate"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.basicUsage")), 1),
    createBaseVNode("quark-circle", { rate: _ctx.rate }, toDisplayString(_ctx.rate) + "%", 9, _hoisted_2),
    createBaseVNode("div", null, [
      createBaseVNode("quark-button", {
        type: "primary",
        shape: "square",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.increase && _ctx.increase(...args))
      }, toDisplayString(_ctx.translate("increase")), 1),
      createTextVNode(" \xA0 "),
      createBaseVNode("quark-button", {
        type: "danger",
        shape: "square",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.decrease && _ctx.decrease(...args))
      }, toDisplayString(_ctx.translate("decrease")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.custom")), 1),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      size: "80"
    }, toDisplayString(_ctx.translate("size")), 9, _hoisted_3),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      color: "#02b357"
    }, toDisplayString(_ctx.translate("color")), 9, _hoisted_4),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      strokewidth: 5
    }, toDisplayString(_ctx.translate("strokewidth")), 9, _hoisted_5),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      layercolor: "#f00"
    }, toDisplayString(_ctx.translate("layercolor")), 9, _hoisted_6),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      anticlockwise: _ctx.anticlockwise
    }, toDisplayString(_ctx.translate("anticlockwise")), 9, _hoisted_7),
    createBaseVNode("quark-circle", {
      ref: "circleRef",
      class: "custom",
      strokewidth: 5,
      rate: _ctx.rate,
      size: "100"
    }, toDisplayString(_ctx.translate("gradient")), 9, _hoisted_8),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.position")), 1),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      startposition: "right"
    }, toDisplayString(_ctx.translate("right")), 9, _hoisted_9),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      startposition: "bottom"
    }, toDisplayString(_ctx.translate("bottom")), 9, _hoisted_10),
    createBaseVNode("quark-circle", {
      rate: _ctx.rate,
      startposition: "left"
    }, toDisplayString(_ctx.translate("left")), 9, _hoisted_11)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
