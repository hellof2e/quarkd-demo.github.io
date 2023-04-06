import { c as createComponent } from "./component.7e2b1a21.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.d7fbb3f8.js";
import { o as onBeforeRouteLeave } from "./vue-router.d6fbe7f9.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("dialog");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    const open2 = ref(false);
    const open3 = ref(false);
    const open4 = ref(false);
    const open5 = ref(false);
    const open6 = ref(false);
    const open7 = ref(false);
    const open8 = ref(false);
    const open9 = ref(false);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          dialogTitle: "\u6807\u9898",
          alert: "\u63D0\u793A\u5F39\u7A97",
          alertWithoutContent: "\u63D0\u793A\u5F39\u7A97\uFF08\u6CA1\u6709\u5185\u5BB9\uFF09",
          confirm: "\u786E\u8BA4\u5F39\u7A97",
          btnvertical: "\u786E\u8BA4\u5F39\u7A97(\u6309\u94AE\u5782\u76F4\u6392\u5217)",
          basicDialog: "\u57FA\u7840\u5F39\u7A97",
          showCloseButton: "\u9690\u85CF\u5173\u95ED\u6309\u94AE",
          alignLeft: "\u5185\u5BB9\u5C45\u5DE6\u5BF9\u9F50",
          customFooter: "Footer \u81EA\u5B9A\u4E49",
          noFooter: "Footer \u9690\u85CF",
          title: "\u8FD9\u662F\u4E00\u53E5\u8BDD\u5C31\u80FD\u8BF4\u6E05\u695A\u7684\u786E\u8BA4\u5F39\u7A97\uFF0C\u6240\u4EE5\u53EA\u6709\u6807\u9898",
          content: "\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",
          text: "\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C",
          okText: "\u77E5\u9053\u4E86",
          customTitle: "Title \u81EA\u5B9A\u4E49",
          noTitle: "Title \u9690\u85CF"
        },
        "en-US": {
          basic: "Basic use",
          dialogTitle: "Title",
          alert: "Alert",
          alertWithoutContent: "Alert without content",
          confirm: "Confirm dialog",
          btnvertical: "Confirm dialog\uFF08vertical button\uFF09",
          basicDialog: "Basic Dialog",
          showCloseButton: "Hide Close Button",
          alignLeft: "Align Content To The Left",
          customFooter: "Custom Footer",
          noFooter: "Not Show Footer ",
          title: "This is a confirmation dialog that can be explained clearly in one sentence, so only the title",
          content: "This is a content",
          text: "This is custom body. The code is written for people to see, with the addition of running on the machine",
          okText: "Got it",
          noTitle: "Title hide",
          customTitle: "Custom title"
        }
      });
    });
    onBeforeRouteLeave(() => {
      const quarkDialogs = document.querySelectorAll("quark-dialog");
      quarkDialogs.forEach((i) => i.open = false);
    });
    return {
      open,
      open2,
      open3,
      open4,
      open5,
      open6,
      open7,
      open8,
      open9,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo demo-dialog" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["open", "title", "content"];
const _hoisted_7 = ["open", "title", "oktext"];
const _hoisted_8 = ["open", "title", "content"];
const _hoisted_9 = ["open", "title", "content"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", null, "Title", -1);
const _hoisted_11 = ["title"];
const _hoisted_12 = ["title"];
const _hoisted_13 = ["content", "open"];
const _hoisted_14 = {
  slot: "title",
  style: { "color": "red", "font-size": "16px", "margin-bottom": "14px" }
};
const _hoisted_15 = ["open", "content"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h2", null, "Footer", -1);
const _hoisted_17 = ["title"];
const _hoisted_18 = ["title"];
const _hoisted_19 = ["title", "open"];
const _hoisted_20 = {
  slot: "footer",
  class: "custom-footer"
};
const _hoisted_21 = ["open", "title", "content"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        title: _ctx.translate("alert"),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.open = true)
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        title: _ctx.translate("alertWithoutContent"),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.open2 = true)
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        title: _ctx.translate("confirm"),
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.open3 = true)
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        title: _ctx.translate("btnvertical"),
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.open6 = true)
      }, null, 8, _hoisted_5)
    ]),
    createBaseVNode("quark-dialog", {
      type: "confirm",
      open: _ctx.open,
      title: _ctx.translate("dialogTitle"),
      content: _ctx.translate("content"),
      onConfirm: _cache[4] || (_cache[4] = ($event) => _ctx.open = false),
      onClose: _cache[5] || (_cache[5] = ($event) => _ctx.open = false)
    }, null, 40, _hoisted_6),
    createBaseVNode("quark-dialog", {
      type: "confirm",
      open: _ctx.open2,
      title: _ctx.translate("title"),
      oktext: _ctx.translate("okText"),
      onConfirm: _cache[6] || (_cache[6] = ($event) => _ctx.open2 = false),
      onClose: _cache[7] || (_cache[7] = ($event) => _ctx.open2 = false)
    }, null, 40, _hoisted_7),
    createBaseVNode("quark-dialog", {
      open: _ctx.open3,
      title: _ctx.translate("dialogTitle"),
      content: _ctx.translate("text"),
      onClose: _cache[8] || (_cache[8] = ($event) => _ctx.open3 = false),
      onConfirm: _cache[9] || (_cache[9] = ($event) => _ctx.open3 = false),
      onCancel: _cache[10] || (_cache[10] = ($event) => _ctx.open3 = false)
    }, null, 40, _hoisted_8),
    createBaseVNode("quark-dialog", {
      btnvertical: "",
      open: _ctx.open6,
      title: _ctx.translate("dialogTitle"),
      content: _ctx.translate("text"),
      onClose: _cache[11] || (_cache[11] = ($event) => _ctx.open6 = false),
      onConfirm: _cache[12] || (_cache[12] = ($event) => _ctx.open6 = false),
      onCancel: _cache[13] || (_cache[13] = ($event) => _ctx.open6 = false)
    }, null, 40, _hoisted_9),
    _hoisted_10,
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        title: _ctx.translate("customTitle"),
        onClick: _cache[14] || (_cache[14] = ($event) => _ctx.open4 = true)
      }, null, 8, _hoisted_11),
      createBaseVNode("quark-cell", {
        islink: "",
        title: _ctx.translate("noTitle"),
        onClick: _cache[15] || (_cache[15] = ($event) => _ctx.open5 = true)
      }, null, 8, _hoisted_12)
    ]),
    createBaseVNode("quark-dialog", {
      content: _ctx.translate("content"),
      open: _ctx.open4,
      onConfirm: _cache[16] || (_cache[16] = ($event) => _ctx.open4 = false),
      onCancel: _cache[17] || (_cache[17] = ($event) => _ctx.open4 = false),
      onClose: _cache[18] || (_cache[18] = ($event) => _ctx.open4 = false)
    }, [
      createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.translate("customTitle")), 1)
    ], 40, _hoisted_13),
    createBaseVNode("quark-dialog", {
      notitle: "",
      open: _ctx.open5,
      content: _ctx.translate("content"),
      onConfirm: _cache[19] || (_cache[19] = ($event) => _ctx.open5 = false),
      onCancel: _cache[20] || (_cache[20] = ($event) => _ctx.open5 = false),
      onClose: _cache[21] || (_cache[21] = ($event) => _ctx.open5 = false)
    }, null, 40, _hoisted_15),
    _hoisted_16,
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        title: _ctx.translate("customFooter"),
        onClick: _cache[22] || (_cache[22] = ($event) => _ctx.open8 = true)
      }, null, 8, _hoisted_17),
      createBaseVNode("quark-cell", {
        islink: "",
        title: _ctx.translate("noFooter"),
        onClick: _cache[23] || (_cache[23] = ($event) => _ctx.open9 = true)
      }, null, 8, _hoisted_18)
    ]),
    createBaseVNode("quark-dialog", {
      title: _ctx.translate("dialogTitle"),
      open: _ctx.open8,
      onClose: _cache[25] || (_cache[25] = ($event) => _ctx.open8 = false)
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("text")), 1),
      createBaseVNode("div", _hoisted_20, [
        createBaseVNode("quark-button", {
          type: "primary",
          onClick: _cache[24] || (_cache[24] = ($event) => _ctx.open8 = false)
        }, toDisplayString(_ctx.translate("customFooter")), 1)
      ])
    ], 40, _hoisted_19),
    createBaseVNode("quark-dialog", {
      nofooter: "",
      open: _ctx.open9,
      title: _ctx.translate("dialogTitle"),
      content: _ctx.translate("content"),
      onConfirm: _cache[26] || (_cache[26] = ($event) => _ctx.open9 = false),
      onClose: _cache[27] || (_cache[27] = ($event) => _ctx.open9 = false)
    }, null, 40, _hoisted_21)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
