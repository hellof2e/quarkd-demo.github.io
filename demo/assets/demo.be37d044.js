import { c as createComponent } from "./component.80ebf159.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, D as Dialog, T as Toast, b as openBlock } from "./mobile.4ae0ea58.js";
import { o as onBeforeRouteLeave } from "./vue-router.dec79c01.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("dialog");
const _sfc_main = createDemo({
  setup() {
    const isOneSentenceShow = ref("false");
    const showDialog = () => {
      Dialog({
        title: `${translate("title2")}`,
        content: `${translate("text")}`
      });
    };
    const showDialog1 = () => {
      Dialog({
        title: `${translate("secondButton")}`,
        btnvertical: true,
        content: `${translate("tips")}`,
        oktext: `${translate("okText")}`,
        canceltext: `${translate("secondButton")}`
      });
    };
    const showDialog2 = () => {
      Dialog({
        content: `${translate("text")}`
      });
    };
    const showDialog5 = () => {
      Dialog({
        content: `${translate("text")}`,
        hideclose: true
      });
    };
    const showDialog6 = () => {
      Dialog({
        content: `${translate("alignLeft")}`,
        textleft: true
      });
    };
    const showDialog7 = () => {
      document.getElementById("market1").open = true;
    };
    const showDialog8 = () => {
      document.getElementById("market2").open = true;
    };
    const showDialog3 = () => {
      Dialog({
        title: `${translate("buttonCallback")}`,
        content: `${translate("text")}`,
        close: () => Toast.text("closed"),
        confirm: () => {
          Toast.text("confirm clicked");
        },
        cancel: () => {
          Toast.text("cancel clicked");
        }
      });
    };
    const showDialog4 = () => {
      Dialog({
        title: `${translate("noFooter")}`,
        content: `${translate("text")}`,
        nofooter: true
      });
    };
    const open = ref(false);
    const componentDemo = () => {
      open.value = true;
    };
    const oneSentence = () => {
      document.getElementById("demo2").open = true;
    };
    const customFooterShow = () => {
      document.getElementById("demo3").open = true;
    };
    const close = () => {
      open.value = false;
      document.getElementById("demo3").open = false;
    };
    const confirm = () => {
      console.log(13);
      open.value = false;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          basicDialog: "\u57FA\u7840\u5F39\u7A97",
          secondButton: "\u6B21\u8981\u6309\u94AE",
          unTitleDialog: "\u65E0\u6807\u9898\u5F39\u7A97",
          showCloseButton: "\u9690\u85CF\u5173\u95ED\u6309\u94AE",
          alignLeft: "\u5185\u5BB9\u5C45\u5DE6\u5BF9\u9F50",
          buttonCallback: "\u6309\u94AE\u56DE\u8C03\u51FD\u6570",
          noFooter: "Footer \u4E0D\u5C55\u793A",
          callComponent: "\u7EC4\u4EF6\u8C03\u7528",
          confirmDialog: "\u786E\u8BA4\u5F39\u7A97",
          customButton: "\u81EA\u5B9A\u4E49 Body | Footer | \u5173\u95ED\u6309\u94AE",
          title: "\u8FD9\u662F\u4E00\u53E5\u8BDD\u5C31\u80FD\u8BF4\u6E05\u695A\u7684\u786E\u8BA4\u5F39\u7A97\uFF0C\u6240\u4EE5\u53EA\u6709\u6807\u9898",
          content: "\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E\u7EC4\u4EF6",
          text: "\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C",
          customFooter: "\u81EA\u5B9A\u4E49footer",
          okText: "\u77E5\u9053\u4E86",
          title2: "\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",
          tips: "\u5F39\u7A97\u7684\u5185\u5BB9\u4E0B\u662F\u4E24\u4E2A\u5177\u4F53\u7684\u64CD\u4F5C\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u4F1A\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u9875\u9762\uFF0C\u6240\u4EE5\u9700\u8981\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u5173\u95ED\u5F39\u7A97"
        },
        "en-US": {
          basic: "Basic Usage",
          basicDialog: "Basic Dialog",
          secondButton: "Secondary Button",
          unTitleDialog: "Untitled Dialog",
          showCloseButton: "Hide Close Button",
          alignLeft: "Align Content To The Left",
          buttonCallback: " Button Callback",
          noFooter: "Not Show Footer ",
          callComponent: "Component Call",
          confirmDialog: "Confirm dialog",
          customButton: "Custom Body | Footer | Close Button(Component Call)",
          title: "This is a confirmation dialog that can be explained clearly in one sentence, so only the title",
          content: "This is a tab component",
          text: "This is custom body. The code is written for people to see, with the addition of running on the machine",
          customFooter: "Custom Footer",
          okText: "Got it",
          title2: "This is a title",
          tips: "There are two specific operation buttons under the content of the pop-up window. After clicking, it will jump to the corresponding page, so the close button in the upper right corner is needed, so that the user can close the pop-up window."
        }
      });
    });
    onBeforeRouteLeave(() => {
      const quarkDialogs = document.querySelectorAll("quark-dialog");
      quarkDialogs.forEach((i) => i.open = false);
    });
    return {
      open,
      isOneSentenceShow,
      showDialog,
      showDialog1,
      showDialog2,
      showDialog3,
      showDialog4,
      showDialog5,
      showDialog6,
      showDialog7,
      showDialog8,
      componentDemo,
      oneSentence,
      customFooterShow,
      close,
      translate,
      confirm
    };
  }
});
const _hoisted_1 = { class: "demo demo-dialog" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
const _hoisted_8 = ["title"];
const _hoisted_9 = ["title"];
const _hoisted_10 = ["title"];
const _hoisted_11 = ["title"];
const _hoisted_12 = ["open", "title", "content"];
const _hoisted_13 = ["title", "oktext"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("quark-dialog", {
  id: "market1",
  type: "market"
}, [
  /* @__PURE__ */ createBaseVNode("img", {
    slot: "market",
    src: "https://m.hellobike.com/resource/helloyun/15697/Zj-NfJdxdA.png"
  })
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("quark-dialog", {
  id: "market2",
  type: "market"
}, [
  /* @__PURE__ */ createBaseVNode("img", {
    slot: "market",
    src: "https://m.hellobike.com/resource/helloyun/15697/qxlI2_no_network.png"
  })
], -1);
const _hoisted_16 = ["title"];
const _hoisted_17 = {
  slot: "footer",
  class: "custom-footer"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.showDialog && _ctx.showDialog(...args)),
        title: _ctx.translate("basicDialog")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.showDialog1 && _ctx.showDialog1(...args)),
        title: _ctx.translate("secondButton")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.showDialog2 && _ctx.showDialog2(...args)),
        title: _ctx.translate("unTitleDialog")
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.showDialog5 && _ctx.showDialog5(...args)),
        title: _ctx.translate("showCloseButton")
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showDialog6 && _ctx.showDialog6(...args)),
        title: _ctx.translate("alignLeft")
      }, null, 8, _hoisted_6)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("buttonCallback")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[5] || (_cache[5] = (...args) => _ctx.showDialog3 && _ctx.showDialog3(...args)),
        title: _ctx.translate("buttonCallback")
      }, null, 8, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        nofooter: "",
        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.showDialog4 && _ctx.showDialog4(...args)),
        title: _ctx.translate("noFooter")
      }, null, 8, _hoisted_8)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("callComponent")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[7] || (_cache[7] = (...args) => _ctx.componentDemo && _ctx.componentDemo(...args)),
        title: _ctx.translate("callComponent")
      }, null, 8, _hoisted_9),
      createBaseVNode("quark-cell", {
        type: "primary",
        isLink: "",
        onClick: _cache[8] || (_cache[8] = (...args) => _ctx.oneSentence && _ctx.oneSentence(...args)),
        title: _ctx.translate("confirmDialog")
      }, null, 8, _hoisted_10),
      createBaseVNode("quark-cell", {
        islink: "",
        onClick: _cache[9] || (_cache[9] = (...args) => _ctx.customFooterShow && _ctx.customFooterShow(...args)),
        title: _ctx.translate("customButton")
      }, null, 8, _hoisted_11)
    ]),
    createBaseVNode("quark-dialog", {
      id: "demo",
      open: _ctx.open,
      title: _ctx.translate("callComponent"),
      onConfirm: _cache[10] || (_cache[10] = (...args) => _ctx.confirm && _ctx.confirm(...args)),
      onClose: _cache[11] || (_cache[11] = (...args) => _ctx.confirm && _ctx.confirm(...args)),
      onCancel: _cache[12] || (_cache[12] = (...args) => _ctx.confirm && _ctx.confirm(...args)),
      content: _ctx.translate("content")
    }, null, 40, _hoisted_12),
    createBaseVNode("quark-dialog", {
      id: "demo2",
      type: "confirm",
      title: _ctx.translate("title"),
      oktext: _ctx.translate("okText")
    }, null, 8, _hoisted_13),
    _hoisted_14,
    _hoisted_15,
    createBaseVNode("quark-dialog", {
      id: "demo3",
      title: _ctx.translate("customButton")
    }, [
      createBaseVNode("img", {
        onClick: _cache[13] || (_cache[13] = (...args) => _ctx.close && _ctx.close(...args)),
        src: "https://m.hellobike.com/resource/helloyun/15697/JPuH-8dD23.png",
        slot: "close",
        class: "dialog-close"
      }),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("text")), 1),
      createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.translate("customFooter")), 1)
    ], 8, _hoisted_16)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
