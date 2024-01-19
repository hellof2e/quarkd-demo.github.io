import { c as createComponent } from "./component.a3f6026b.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.878855b9.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("toast");
const _sfc_main = createDemo({
  setup() {
    const tag = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          top: "\u9876\u90E8\u5C55\u793A",
          bottom: "\u5E95\u90E8\u5C55\u793A",
          position: "Toast \u663E\u793A\u4F4D\u7F6E",
          functionCall: "\u51FD\u6570\u5F0F\u8C03\u7528",
          closeCallback: "\u5173\u95ED\u540E\u56DE\u8C03\u51FD\u6570",
          textTip: "\u6587\u5B57\u63D0\u793A",
          horizontalLoadingTip: "\u6C34\u5E73\u65B9\u5411\u7684\u52A0\u8F7D\u56FE\u6807",
          successTip: "\u6210\u529F\u63D0\u793A",
          errorTip: "\u5931\u8D25\u63D0\u793A",
          warningTip: "\u8B66\u544A\u63D0\u793A",
          loadingTip: "\u52A0\u8F7D\u63D0\u793A",
          networkTip: "\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E",
          executeCallback: "\u56DE\u8C03\u51FD\u6570\u6267\u884C",
          close: "\u4E09\u79D2\u540E\u5173\u95ED"
        },
        "en-US": {
          top: "Show on top",
          bottom: "Show on bottom",
          position: "Toast position",
          functionCall: "Function Call",
          closeCallback: "Close Callback",
          textTip: "Text Tip",
          successTip: "Success Tip",
          errorTip: "Error Tip",
          warningTip: "Warning Tip",
          loadingTip: "Loading Tip",
          networkTip: "Network failed, please try again later~",
          executeCallback: "Execute Callback",
          close: "Close after three seconds"
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
    const handleTextTopClick = () => {
      Toast.text(`${translate("networkTip")}`, {
        position: "top"
      });
    };
    const handleTextBottomClick = () => {
      Toast.text(`${translate("networkTip")}`, {
        position: "bottom"
      });
    };
    const handlehorizontalLoadingClick = () => {
      Toast.loading(`${translate("loadingTip")}`, {
        loadingIconDirection: "horizontal"
      });
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
      handleTextTopClick,
      handleTextBottomClick,
      tag,
      cbClick,
      handleTextClick,
      handlehorizontalLoadingClick,
      handleSuccessClick,
      handleErrorClick,
      handleWarningClick,
      handleLoadingClick,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo toast-demo" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "20",
  name: "right"
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
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
      createBaseVNode("div", null, "Text " + toDisplayString(_ctx.translate("textTip")), 1),
      _hoisted_2
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handlehorizontalLoadingClick && _ctx.handlehorizontalLoadingClick(...args))
    }, [
      createBaseVNode("div", null, "Text " + toDisplayString(_ctx.translate("horizontalLoadingTip")), 1),
      _hoisted_3
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleSuccessClick && _ctx.handleSuccessClick(...args))
    }, [
      createBaseVNode("div", null, "Success " + toDisplayString(_ctx.translate("successTip")), 1),
      _hoisted_4
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleErrorClick && _ctx.handleErrorClick(...args))
    }, [
      createBaseVNode("div", null, "Error " + toDisplayString(_ctx.translate("errorTip")), 1),
      _hoisted_5
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleWarningClick && _ctx.handleWarningClick(...args))
    }, [
      createBaseVNode("div", null, "Warning " + toDisplayString(_ctx.translate("warningTip")), 1),
      _hoisted_6
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleLoadingClick && _ctx.handleLoadingClick(...args))
    }, [
      createBaseVNode("div", null, "Loading " + toDisplayString(_ctx.translate("loadingTip")), 1),
      _hoisted_7
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("position")), 1),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleTextTopClick && _ctx.handleTextTopClick(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("top")), 1),
      _hoisted_8
    ]),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[7] || (_cache[7] = (...args) => _ctx.handleTextBottomClick && _ctx.handleTextBottomClick(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("bottom")), 1),
      _hoisted_9
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("closeCallback")), 1),
    createBaseVNode("div", {
      class: "quark-cell",
      onClick: _cache[8] || (_cache[8] = (...args) => _ctx.cbClick && _ctx.cbClick(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("closeCallback")), 1),
      _hoisted_10
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
