import { c as createComponent } from "./component.0d13518c.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.570a2399.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("toast");
const _sfc_main = createDemo({
  setup() {
    const tag = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          functionCall: "\u51FD\u6570\u5F0F\u8C03\u7528",
          closeCallback: "\u5173\u95ED\u540E\u56DE\u8C03\u51FD\u6570",
          textTip: "\u6587\u5B57\u63D0\u793A",
          successTip: "\u6210\u529F\u63D0\u793A",
          errorTip: "\u5931\u8D25\u63D0\u793A",
          warningTip: "\u8B66\u544A\u63D0\u793A",
          loadingTip: "\u52A0\u8F7D\u63D0\u793A",
          networkTip: "\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E",
          executeCallback: "\u56DE\u8C03\u51FD\u6570\u6267\u884C",
          close: "\u4E00\u79D2\u540E\u5173\u95ED"
        },
        "en-US": {
          functionCall: "Function Call",
          closeCallback: "Close Callback",
          textTip: "Text Tip",
          successTip: "Success Tip",
          errorTip: "Error Tip",
          warningTip: "Warning Tip",
          loadingTip: "Loading Tip",
          networkTip: "Network failed, please try again later~",
          executeCallback: "Execute Callback",
          close: "Close after a second"
        }
      });
    });
    const cbClick = () => {
      Toast.text(`${translate("networkTip")}`, {
        close: () => Toast.text(`${translate("executeCallback")}`)
      });
    };
    const handleTextClick = () => {
      Toast.text(`${translate("networkTip")}`);
    };
    const handleSuccessClick = () => {
      Toast.success(`${translate("successTip")}`);
    };
    const handleErrorClick = () => {
      Toast.error(`${translate("errorTip")}`);
    };
    const handleWarningClick = () => {
      Toast.warning(`${translate("warningTip")}`);
    };
    const handleLoadingClick = () => {
      const toast = Toast.loading(`${translate("close")}`, {
        duration: 0,
        size: 40
      });
      setTimeout(() => {
        toast.hide();
      }, 3e3);
    };
    return {
      tag,
      cbClick,
      handleTextClick,
      handleSuccessClick,
      handleErrorClick,
      handleWarningClick,
      handleLoadingClick,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo toast-demo" };
const _hoisted_2 = { class: "nut-cell__title" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_4 = { class: "nut-cell__title" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_6 = { class: "nut-cell__title" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_8 = { class: "nut-cell__title" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_10 = { class: "nut-cell__title" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_12 = { class: "nut-cell__title" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("functionCall")), 1),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleTextClick && _ctx.handleTextClick(...args))
    }, [
      createBaseVNode("div", _hoisted_2, "Text " + toDisplayString(_ctx.translate("textTip")), 1),
      _hoisted_3
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleSuccessClick && _ctx.handleSuccessClick(...args))
    }, [
      createBaseVNode("div", _hoisted_4, "Success " + toDisplayString(_ctx.translate("successTip")), 1),
      _hoisted_5
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleErrorClick && _ctx.handleErrorClick(...args))
    }, [
      createBaseVNode("div", _hoisted_6, "Error " + toDisplayString(_ctx.translate("errorTip")), 1),
      _hoisted_7
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleWarningClick && _ctx.handleWarningClick(...args))
    }, [
      createBaseVNode("div", _hoisted_8, "Warning " + toDisplayString(_ctx.translate("warningTip")), 1),
      _hoisted_9
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleLoadingClick && _ctx.handleLoadingClick(...args))
    }, [
      createBaseVNode("div", _hoisted_10, "Loading " + toDisplayString(_ctx.translate("loadingTip")), 1),
      _hoisted_11
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("closeCallback")), 1),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[5] || (_cache[5] = (...args) => _ctx.cbClick && _ctx.cbClick(...args))
    }, [
      createBaseVNode("div", _hoisted_12, toDisplayString(_ctx.translate("closeCallback")), 1),
      _hoisted_13
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
