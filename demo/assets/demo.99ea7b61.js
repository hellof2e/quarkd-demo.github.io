import { c as createComponent } from "./component.20dc6cd5.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, G as ActionSheet, T as Toast, b as openBlock } from "./mobile.ab691ab4.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("sharesheet");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basicUsage: "\u57FA\u672C\u4F7F\u7528",
          customStyle: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
          titleStyle: "\u6807\u9898\u6837\u5F0F",
          cancelButtonStyle: "\u53D6\u6D88\u6309\u94AE\u6837\u5F0F",
          options: ["\u5FAE\u4FE1", "\u5FAE\u4FE1\u670B\u53CB\u5708", "QQ", "QQ\u7A7A\u95F4", "\u5FAE\u535A", "\u4E8C\u7EF4\u7801"],
          maskClick: "\u8499\u7248\u70B9\u51FB",
          cancel: "\u53D6\u6D88"
        },
        "en-US": {
          basicUsage: "Basic Usage",
          customStyle: "Custom Style",
          titleStyle: "Title Style",
          cancelButtonStyle: "Cancel Button Style",
          options: [
            "WeChat",
            "WeChat Moments",
            "QQ",
            "QQ Space",
            "WeiBo",
            "QR Code"
          ],
          maskClick: "Mask Click",
          cancel: "Cancel"
        }
      });
    });
    const showBase = () => {
      ActionSheet({
        options: [
          {
            name: `${translate("options")[0]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"
          },
          {
            name: `${translate("options")[1]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"
          },
          {
            name: `${translate("options")[2]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png"
          },
          {
            name: `${translate("options")[3]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png"
          },
          {
            name: `${translate("options")[4]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png"
          },
          {
            name: `${translate("options")[5]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png"
          }
        ],
        select: (index, action) => {
          Toast.text(action.name);
        }
      });
    };
    const showTitleCustom = () => {
      ActionSheet({
        titleColor: "red",
        titleFontSize: 20,
        options: [
          {
            name: `${translate("options")[0]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"
          },
          {
            name: `${translate("options")[1]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"
          },
          {
            name: `${translate("options")[2]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png"
          }
        ],
        select: (index, action) => {
          Toast.text(action.name);
        },
        close: () => {
          Toast.text(`${translate("maskClick")}`);
        }
      });
    };
    const showCancelCustom = () => {
      ActionSheet({
        options: [
          {
            name: `${translate("options")[0]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png"
          },
          {
            name: `${translate("options")[1]}`,
            icon: "https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png"
          }
        ],
        cancelColor: "red",
        select: (index, action) => {
          Toast.text(action.name);
        },
        cancel: () => {
          Toast.text(`${translate("cancel")}`);
        },
        close: () => {
          Toast.text(`${translate("maskClick")}`);
        }
      });
    };
    return {
      showBase,
      showTitleCustom,
      showCancelCustom,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding action-sheet-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basicUsage")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.showBase && _ctx.showBase(...args)),
        title: _ctx.translate("basicUsage")
      }, null, 8, _hoisted_2)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.showTitleCustom && _ctx.showTitleCustom(...args)),
        title: _ctx.translate("titleStyle")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.showCancelCustom && _ctx.showCancelCustom(...args)),
        title: _ctx.translate("cancelButtonStyle")
      }, null, 8, _hoisted_4)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
