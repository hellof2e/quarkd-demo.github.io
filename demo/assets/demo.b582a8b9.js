import { c as createComponent } from "./component.f9ba0d23.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.ce2ee5c9.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("button");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            type: "\u6309\u94AE\u7C7B\u578B",
            shape: "\u6309\u94AE\u5F62\u72B6",
            plain: "\u6734\u7D20\u6309\u94AE",
            light: "\u6D45\u8272\u6309\u94AE",
            disabled: "\u7981\u7528\u72B6\u6001",
            loading: "\u52A0\u8F7D\u72B6\u6001",
            icon: "\u56FE\u6807\u6309\u94AE",
            size: "\u6309\u94AE\u5C3A\u5BF8"
          },
          type: {
            default: "\u9ED8\u8BA4\u6309\u94AE",
            primary: "\u4E3B\u8981\u6309\u94AE",
            success: "\u6210\u529F\u6309\u94AE",
            danger: "\u5371\u9669\u6309\u94AE",
            warning: "\u8B66\u544A\u6309\u94AE"
          },
          shape: {
            square: "\u65B9\u5F62\u6309\u94AE",
            round: "\u5C0F\u5706\u89D2\u6309\u94AE"
          },
          size: {
            large: "\u7279\u5927\u5C3A\u5BF8",
            big: "\u5927\u53F7\u5C3A\u5BF8",
            normal: "\u666E\u901A\u5C3A\u5BF8",
            small: "\u5C0F\u53F7\u5C3A\u5BF8"
          },
          loading: "\u52A0\u8F7D\u4E2D...",
          click: "\u70B9\u6211!",
          like: "\u559C\u6B22",
          name: "\u5F20\u4E09"
        },
        "en-US": {
          title: {
            type: "Button Type",
            shape: "Button Shape",
            plain: "Plain Button",
            light: "Light Button",
            disabled: "Disabled",
            loading: "Loading",
            icon: "Icon Button",
            size: "Button Size"
          },
          type: {
            default: "Default",
            primary: "Primary",
            success: "Success",
            danger: "Danger",
            warning: "Warning"
          },
          shape: {
            square: "Square",
            round: "Round"
          },
          size: {
            large: "Large",
            big: "Big",
            normal: "Normal",
            small: "Small"
          },
          loading: "Loading...",
          click: "Click Me!",
          like: "Like",
          name: "Zhang San"
        }
      });
    });
    const isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 2e3);
    };
    return {
      translate,
      isLoading,
      changeLoading
    };
  }
});
const _hoisted_1 = { class: "demo button-demo" };
const _hoisted_2 = { class: "demo-buttons" };
const _hoisted_3 = { type: "primary" };
const _hoisted_4 = { type: "success" };
const _hoisted_5 = { type: "danger" };
const _hoisted_6 = { type: "warning" };
const _hoisted_7 = { class: "demo-buttons" };
const _hoisted_8 = {
  plain: "",
  type: "primary"
};
const _hoisted_9 = {
  plain: "",
  type: "success"
};
const _hoisted_10 = { class: "demo-buttons" };
const _hoisted_11 = {
  light: "",
  type: "primary"
};
const _hoisted_12 = {
  light: "",
  type: "success"
};
const _hoisted_13 = { class: "demo-buttons" };
const _hoisted_14 = {
  type: "primary",
  size: "large"
};
const _hoisted_15 = {
  type: "primary",
  size: "big"
};
const _hoisted_16 = { type: "primary" };
const _hoisted_17 = {
  type: "primary",
  size: "small"
};
const _hoisted_18 = { class: "demo-buttons" };
const _hoisted_19 = {
  type: "primary",
  disabled: ""
};
const _hoisted_20 = { disabled: "" };
const _hoisted_21 = { class: "demo-buttons" };
const _hoisted_22 = {
  shape: "square",
  type: "danger"
};
const _hoisted_23 = {
  style: { "--button-border-radius": "6px" },
  type: "primary"
};
const _hoisted_24 = { class: "flex" };
const _hoisted_25 = {
  loading: "",
  loadtype: "circular",
  type: "danger"
};
const _hoisted_26 = {
  loading: "",
  type: "warning"
};
const _hoisted_27 = ["loading"];
const _hoisted_28 = { class: "demo-buttons" };
const _hoisted_29 = {
  type: "danger",
  icon: "https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png"
};
const _hoisted_30 = {
  type: "primary",
  icon: "https://m.hellobike.com/resource/helloyun/16682/_pay6_setting%20(1).png"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.type")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-button", null, toDisplayString(_ctx.translate("type.default")), 1),
      createBaseVNode("quark-button", _hoisted_3, toDisplayString(_ctx.translate("type.primary")), 1),
      createBaseVNode("quark-button", _hoisted_4, toDisplayString(_ctx.translate("type.success")), 1),
      createBaseVNode("quark-button", _hoisted_5, toDisplayString(_ctx.translate("type.danger")), 1),
      createBaseVNode("quark-button", _hoisted_6, toDisplayString(_ctx.translate("type.warning")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.plain")), 1),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("quark-button", _hoisted_8, toDisplayString(_ctx.translate("type.primary")), 1),
      createBaseVNode("quark-button", _hoisted_9, toDisplayString(_ctx.translate("type.success")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.light")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-button", _hoisted_11, toDisplayString(_ctx.translate("type.primary")), 1),
      createBaseVNode("quark-button", _hoisted_12, toDisplayString(_ctx.translate("type.success")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.size")), 1),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("quark-button", _hoisted_14, toDisplayString(_ctx.translate("size.large")), 1),
      createBaseVNode("quark-button", _hoisted_15, toDisplayString(_ctx.translate("size.big")), 1),
      createBaseVNode("quark-button", _hoisted_16, toDisplayString(_ctx.translate("size.normal")), 1),
      createBaseVNode("quark-button", _hoisted_17, toDisplayString(_ctx.translate("size.small")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.disabled")), 1),
    createBaseVNode("div", _hoisted_18, [
      createBaseVNode("quark-button", _hoisted_19, toDisplayString(_ctx.translate("title.disabled")), 1),
      createBaseVNode("quark-button", _hoisted_20, toDisplayString(_ctx.translate("title.disabled")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.shape")), 1),
    createBaseVNode("div", _hoisted_21, [
      createBaseVNode("quark-button", _hoisted_22, toDisplayString(_ctx.translate("shape.square")), 1),
      createBaseVNode("quark-button", _hoisted_23, toDisplayString(_ctx.translate("shape.round")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.loading")), 1),
    createBaseVNode("div", _hoisted_24, [
      createBaseVNode("quark-button", _hoisted_25, toDisplayString(_ctx.translate("loading")), 1),
      createBaseVNode("quark-button", _hoisted_26, toDisplayString(_ctx.translate("loading")), 1),
      createBaseVNode("quark-button", {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeLoading && _ctx.changeLoading(...args)),
        loading: _ctx.isLoading,
        type: "success"
      }, toDisplayString(_ctx.translate("click")), 9, _hoisted_27)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.icon")), 1),
    createBaseVNode("div", _hoisted_28, [
      createBaseVNode("quark-button", _hoisted_29, toDisplayString(_ctx.translate("like")), 1),
      createBaseVNode("quark-button", _hoisted_30, toDisplayString(_ctx.translate("name")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
