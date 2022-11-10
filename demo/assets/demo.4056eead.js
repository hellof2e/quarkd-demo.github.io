import { c as createComponent } from "./component.d08ed6c5.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.fd24012a.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("popup");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          position: "\u4E0D\u540C\u4F4D\u7F6E",
          topPopup: "\u9876\u90E8\u5F39\u6846",
          bottomPopup: "\u5E95\u90E8\u5F39\u7A97",
          leftPopup: "\u5DE6\u4FA7\u5F39\u6846",
          rightPopup: "\u53F3\u4FA7\u5F39\u7A97",
          centerPopup: "\u5C45\u4E2D\u663E\u793A",
          firstLine: "\u7B2C\u4E00\u884C",
          secondLine: "\u7B2C\u4E8C\u884C",
          thirdLine: "\u7B2C\u4E09\u884C",
          forthLine: "\u7B2C\u56DB\u884C",
          fifthLine: "\u7B2C\u4E94\u884C",
          sixthLine: "\u7B2C\u516D\u884C",
          style: "\u6837\u5F0F",
          roundStyle: "\u5706\u89D2\u6837\u5F0F",
          showCloseTitle: "\u663E\u793A\u5173\u95ED\u6309\u94AE",
          closePopup: "\u70B9\u6211\u5173\u95ED\u5F39\u6846",
          tip: "\u5F39\u5C42\u6D88\u5931\u56DE\u8C03"
        },
        "en-US": {
          position: "Different Position",
          topPopup: "Top Popup",
          bottomPopup: "Bottom Popup",
          leftPopup: "Left Popup",
          rightPopup: "Right Popup",
          centerPopup: "Center Popup",
          firstLine: "First Line",
          secondLine: "Second Line",
          thirdLine: "Third Line",
          forthLine: "Forth Line",
          fifthLine: "Fifth Line",
          sixthLine: "Six Line",
          style: "Style",
          roundStyle: "Rounded Style",
          showCloseTitle: "Show Close Title",
          closePopup: "Close Popup",
          tip: "Popup layer disappears callback"
        }
      });
    });
    onMounted(() => {
      document.getElementById("popup-top").addEventListener("closed", () => {
        open.value = false;
        Toast.text(`${translate("tip")}`);
      });
    });
    const showTopPopup = () => {
      open.value = true;
    };
    const closed = () => {
      Toast.text(`${translate("tip")}`);
    };
    const contentClick = () => {
      document.getElementById("popup-round").open = false;
    };
    const showPopup = (position) => {
      if (~[
        "bottom",
        "left",
        "right",
        "center",
        "round",
        "closeable",
        "max-content"
      ].indexOf(position)) {
        document.getElementById(`popup-${position}`).open = true;
      }
    };
    return {
      open,
      showTopPopup,
      closed,
      contentClick,
      showPopup,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding popup-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["open"];
const _hoisted_8 = {
  id: "popup-left",
  position: "left"
};
const _hoisted_9 = {
  id: "popup-bottom",
  position: "bottom"
};
const _hoisted_10 = {
  id: "popup-right",
  position: "right"
};
const _hoisted_11 = {
  id: "popup-center",
  position: "center"
};
const _hoisted_12 = ["title"];
const _hoisted_13 = ["title"];
const _hoisted_14 = {
  id: "popup-round",
  position: "bottom",
  round: ""
};
const _hoisted_15 = {
  id: "popup-closeable",
  position: "bottom",
  closeable: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("position")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.showTopPopup && _ctx.showTopPopup(...args)),
        title: _ctx.translate("topPopup")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.showPopup("bottom")),
        title: _ctx.translate("bottomPopup")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.showPopup("left")),
        title: _ctx.translate("leftPopup")
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.showPopup("right")),
        title: _ctx.translate("rightPopup")
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[4] || (_cache[4] = ($event) => _ctx.showPopup("center")),
        title: _ctx.translate("centerPopup")
      }, null, 8, _hoisted_6)
    ]),
    createBaseVNode("quark-popup", {
      id: "popup-top",
      position: "top",
      open: _ctx.open
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 8, _hoisted_7),
    createBaseVNode("quark-popup", _hoisted_8, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ]),
    createBaseVNode("quark-popup", _hoisted_9, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ]),
    createBaseVNode("quark-popup", _hoisted_10, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ]),
    createBaseVNode("quark-popup", _hoisted_11, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("style")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[5] || (_cache[5] = ($event) => _ctx.showPopup("round")),
        title: _ctx.translate("roundStyle")
      }, null, 8, _hoisted_12),
      createBaseVNode("quark-cell", {
        islink: "",
        onClick: _cache[6] || (_cache[6] = ($event) => _ctx.showPopup("closeable")),
        title: _ctx.translate("showCloseTitle")
      }, null, 8, _hoisted_13)
    ]),
    createBaseVNode("quark-popup", _hoisted_14, [
      createBaseVNode("div", {
        style: { "margin-top": "20px" },
        onClick: _cache[7] || (_cache[7] = (...args) => _ctx.contentClick && _ctx.contentClick(...args))
      }, toDisplayString(_ctx.translate("closePopup")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ]),
    createBaseVNode("quark-popup", _hoisted_15, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
