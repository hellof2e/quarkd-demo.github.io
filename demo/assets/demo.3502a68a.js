import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, A as ActionSheet, T as Toast, b as openBlock } from "./mobile.ab38b32d.js";
import { c as createComponent } from "./component.c0f9a560.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("actionsheet");
const _sfc_main = createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5",
          customStyle: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
          title: "\u5E26\u6807\u9898",
          cancel: "\u5E26\u53D6\u6D88\u6309\u94AE",
          titleStyle: "\u6807\u9898\u6837\u5F0F",
          optionStyle: "\u9009\u9879\u6837\u5F0F",
          cancelStyle: "\u53D6\u6D88\u6309\u94AE\u6837\u5F0F",
          options: ["\u9009\u9879\u4E00", "\u9009\u9879\u4E8C", "\u9009\u9879\u4E09"],
          titleTxt: "\u6211\u662F\u6807\u9898\u4FE1\u606F",
          maskClick: "\u8499\u7248\u70B9\u51FB"
        },
        "en-US": {
          basic: "Basic Usage",
          customStyle: "Custom Style",
          title: "Title",
          cancel: "Cancel",
          titleStyle: "Title Style",
          optionStyle: "Option Style",
          cancelStyle: "Cancel Style",
          options: ["Option 1", "Option 2", "Option 3"],
          titleTxt: "Title Message",
          maskClick: "Mask Click"
        }
      });
    });
    const showBase = () => {
      ActionSheet({
        actions: [
          { name: `${translate("options")[0]}` },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
        ],
        select: (index, action) => {
          Toast.text(action.name);
        }
      });
    };
    const showTitle = () => {
      ActionSheet({
        title: `${translate("titleTxt")}`,
        actions: [
          { name: `${translate("options")[0]}` },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
        ],
        select: (index, action) => {
          Toast.text(action.name);
        }
      });
    };
    const showCancel = () => {
      ActionSheet({
        title: `${translate("titleTxt")}`,
        actions: [
          { name: `${translate("options")[0]}` },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
        ],
        cancelText: `${translate("cancel")}`,
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
    const showTitleCustom = () => {
      ActionSheet({
        title: `${translate("titleTxt")}`,
        titleColor: "red",
        titleFontSize: 20,
        actions: [
          { name: `${translate("options")[0]}` },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
        ],
        select: (index, action) => {
          Toast.text(action.name);
        },
        close: () => {
          Toast.text(`${translate("maskClick")}`);
        }
      });
    };
    const showActionCustom = () => {
      ActionSheet({
        title: `${translate("titleTxt")}`,
        actions: [
          { name: `${translate("options")[0]}`, color: "#999", fontSize: 20 },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
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
        title: `${translate("titleTxt")}`,
        cancelText: `${translate("cancel")}`,
        actions: [
          { name: `${translate("options")[0]}` },
          { name: `${translate("options")[1]}` },
          { name: `${translate("options")[2]}` }
        ],
        cancelTextColor: "red",
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
      translate,
      showBase,
      showTitle,
      showCancel,
      showTitleCustom,
      showActionCustom,
      showCancelCustom
    };
  }
});
const _hoisted_1 = { class: "demo no-padding action-sheet-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.showBase && _ctx.showBase(...args)),
        title: _ctx.translate("basic")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.showTitle && _ctx.showTitle(...args)),
        title: _ctx.translate("title")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.showCancel && _ctx.showCancel(...args)),
        title: _ctx.translate("cancel")
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.showTitleCustom && _ctx.showTitleCustom(...args)),
        title: _ctx.translate("titleStyle")
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showActionCustom && _ctx.showActionCustom(...args)),
        title: _ctx.translate("optionStyle")
      }, null, 8, _hoisted_6),
      createBaseVNode("quark-cell", {
        type: "primary",
        onClick: _cache[5] || (_cache[5] = (...args) => _ctx.showCancelCustom && _ctx.showCancelCustom(...args)),
        title: _ctx.translate("cancelStyle")
      }, null, 8, _hoisted_7)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
