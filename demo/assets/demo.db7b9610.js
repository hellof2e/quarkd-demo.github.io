import { c as createComponent } from "./component.4b7c979c.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.b0e1cb79.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("tooltip");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      top: false,
      topleft: false,
      topright: false,
      bottom: false,
      bottomleft: false,
      bottomright: false,
      left: false,
      lefttop: false,
      leftbottom: false,
      right: false,
      righttop: false,
      rightbottom: false,
      topclose: false,
      autoclose: false,
      customstyle: false,
      large: false,
      largeClose: false
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          tipsPosition: "Tips \u4F4D\u7F6E\uFF08\u6240\u6709\u652F\u6301\u7684\u4F4D\u7F6E\u53C2\u89C1placement \u53C2\u6570\uFF09",
          topPosition: "top \u4F4D\u7F6E",
          topLeftPosition: "top left \u4F4D\u7F6E",
          topRightPosition: "top right \u4F4D\u7F6E",
          tipsSize: "tips \u5C3A\u5BF8",
          largeSize: "large \u5C3A\u5BF8",
          tips: "\u6C14\u6CE1\u6587\u5B57",
          showCloseButton: "\u663E\u793A\u5173\u95ED\u6309\u94AE",
          setAutoOffTime: "\u8BBE\u7F6E\u81EA\u52A8\u5173\u95ED\u65F6\u95F4",
          customStyle: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
        },
        "en-US": {
          tipsPosition: "Tips Position(See placement parameter for all supported positions)",
          topPosition: "Top Position",
          topLeftPosition: "Top Left Position",
          topRightPosition: "Top Right Position",
          tipsSize: "tips Size",
          largeSize: "Large Size",
          tips: "Bubble Text",
          showCloseButton: "Show Close Button",
          setAutoOffTime: "Set auto-off time",
          customStyle: "Custom Style"
        }
      });
    });
    const open = (placement) => {
      data.value[placement] = true;
    };
    const close = (placement) => {
      data.value[placement] = false;
    };
    return {
      data,
      open,
      close,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = { class: "quark-tip" };
const _hoisted_3 = ["tips", "open"];
const _hoisted_4 = { class: "quark-tip" };
const _hoisted_5 = ["tips", "open"];
const _hoisted_6 = { class: "quark-tip" };
const _hoisted_7 = ["tips", "open"];
const _hoisted_8 = { class: "quark-tip" };
const _hoisted_9 = ["tips", "open"];
const _hoisted_10 = { class: "quark-tip" };
const _hoisted_11 = ["tips", "open"];
const _hoisted_12 = { class: "quark-tip" };
const _hoisted_13 = ["tips", "open"];
const _hoisted_14 = { class: "quark-tip" };
const _hoisted_15 = ["tips", "open"];
const _hoisted_16 = { class: "quark-tip" };
const _hoisted_17 = ["tips", "open"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("tipsPosition")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        tips: _ctx.translate("tips"),
        scrollhidden: "",
        open: _ctx.data.top,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.open("top")),
        onClose: _cache[1] || (_cache[1] = ($event) => _ctx.close("top"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topPosition")), 1)
      ], 40, _hoisted_3)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-tooltip", {
        placement: "topleft",
        tips: _ctx.translate("tips"),
        scrollhidden: "",
        open: _ctx.data.topleft,
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.open("topleft")),
        onClose: _cache[3] || (_cache[3] = ($event) => _ctx.close("topleft"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topLeftPosition")), 1)
      ], 40, _hoisted_5)
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-tooltip", {
        placement: "topright",
        tips: _ctx.translate("tips"),
        scrollhidden: "",
        open: _ctx.data.topright,
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.open("topright")),
        onClose: _cache[5] || (_cache[5] = ($event) => _ctx.close("topright"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topRightPosition")), 1)
      ], 40, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("tipsSize")), 1),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        tips: _ctx.translate("tips"),
        scrollhidden: "",
        size: "large",
        open: _ctx.data.large,
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.open("large")),
        onClose: _cache[7] || (_cache[7] = ($event) => _ctx.close("large"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("largeSize")), 1)
      ], 40, _hoisted_9)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("showCloseButton")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        closeable: "",
        scrollhidden: "",
        tips: _ctx.translate("tips"),
        open: _ctx.data.topclose,
        onClick: _cache[8] || (_cache[8] = ($event) => _ctx.open("topclose")),
        onClose: _cache[9] || (_cache[9] = ($event) => _ctx.close("topclose"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topPosition")), 1)
      ], 40, _hoisted_11)
    ]),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        scrollhidden: "",
        closeable: "",
        size: "large",
        tips: _ctx.translate("tips"),
        open: _ctx.data.largeClose,
        onClick: _cache[10] || (_cache[10] = ($event) => _ctx.open("largeClose")),
        onClose: _cache[11] || (_cache[11] = ($event) => _ctx.close("largeClose"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("largeSize")), 1)
      ], 40, _hoisted_13)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("setAutoOffTime")), 1),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        autoclose: "",
        opentime: "5000",
        scrollhidden: "",
        tips: _ctx.translate("tips"),
        open: _ctx.data.autoclose,
        onClick: _cache[12] || (_cache[12] = ($event) => _ctx.open("autoclose")),
        onClose: _cache[13] || (_cache[13] = ($event) => _ctx.close("autoclose"))
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topPosition")), 1)
      ], 40, _hoisted_15)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle:")), 1),
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("quark-tooltip", {
        placement: "top",
        autoclose: "",
        closeable: "",
        opentime: "5000",
        scrollhidden: "",
        tips: _ctx.translate("tips"),
        open: _ctx.data.customstyle,
        onClick: _cache[14] || (_cache[14] = ($event) => _ctx.open("customstyle")),
        onClose: _cache[15] || (_cache[15] = ($event) => _ctx.close("customstyle")),
        class: "custom-tips"
      }, [
        createBaseVNode("div", null, toDisplayString(_ctx.translate("topPosition")), 1)
      ], 40, _hoisted_17)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
