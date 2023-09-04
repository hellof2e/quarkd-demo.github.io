import { c as createComponent } from "./component.d53ab02f.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, g as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.4c5879dd.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("popup");
const _sfc_main = createDemo({
  setup() {
    const openCenter = ref(false);
    const openTop = ref(false);
    const openBottom = ref(false);
    const openLeft = ref(false);
    const openRight = ref(false);
    const openRound = ref(false);
    const openCloseable = ref(false);
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
      document.getElementById("popup-top").addEventListener("close", () => {
        open.value = false;
        Toast.text(`${translate("tip")}`);
      });
    });
    const showTopPopup = () => {
      openTop.value = true;
    };
    const showLeftPopup = () => {
      openLeft.value = true;
    };
    const showRightPopup = () => {
      openRight.value = true;
    };
    const showBottomPopup = () => {
      openBottom.value = true;
    };
    const showCenterPopup = () => {
      openCenter.value = true;
    };
    const showRoundPopup = () => {
      openRound.value = true;
    };
    const showCloseablePopup = () => {
      openCloseable.value = true;
    };
    const closeTopPopup = () => {
      openTop.value = false;
    };
    const closedTopPopup = () => {
      console.log("closedTopPopup");
    };
    const openedTopPopup = () => {
      console.log("openedTopPopup");
    };
    const closeLeftPopup = () => {
      openLeft.value = false;
    };
    const closeRightPopup = () => {
      openRight.value = false;
    };
    const closeBottomPopup = () => {
      openBottom.value = false;
    };
    const closeCenterPopup = () => {
      openCenter.value = false;
    };
    const closeRoundPopup = () => {
      openRound.value = false;
    };
    const closeCloseablePopup = () => {
      openCloseable.value = false;
    };
    const contentClick = () => {
      openRound.value = false;
    };
    return {
      openCenter,
      openTop,
      openBottom,
      openLeft,
      openRight,
      openRound,
      openCloseable,
      showTopPopup,
      showLeftPopup,
      showRightPopup,
      showBottomPopup,
      showCenterPopup,
      showRoundPopup,
      showCloseablePopup,
      closeTopPopup,
      closedTopPopup,
      openedTopPopup,
      closeLeftPopup,
      closeRightPopup,
      closeBottomPopup,
      closeCenterPopup,
      closeRoundPopup,
      closeCloseablePopup,
      contentClick,
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
const _hoisted_8 = ["open"];
const _hoisted_9 = ["open"];
const _hoisted_10 = ["open"];
const _hoisted_11 = ["open"];
const _hoisted_12 = ["title"];
const _hoisted_13 = ["title"];
const _hoisted_14 = ["open"];
const _hoisted_15 = ["open"];
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
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.showBottomPopup && _ctx.showBottomPopup(...args)),
        title: _ctx.translate("bottomPopup")
      }, null, 8, _hoisted_3),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.showLeftPopup && _ctx.showLeftPopup(...args)),
        title: _ctx.translate("leftPopup")
      }, null, 8, _hoisted_4),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.showRightPopup && _ctx.showRightPopup(...args)),
        title: _ctx.translate("rightPopup")
      }, null, 8, _hoisted_5),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showCenterPopup && _ctx.showCenterPopup(...args)),
        title: _ctx.translate("centerPopup")
      }, null, 8, _hoisted_6)
    ]),
    createBaseVNode("quark-popup", {
      id: "popup-top",
      position: "top",
      open: _ctx.openTop,
      onClose: _cache[5] || (_cache[5] = (...args) => _ctx.closeTopPopup && _ctx.closeTopPopup(...args)),
      onClosed: _cache[6] || (_cache[6] = (...args) => _ctx.closedTopPopup && _ctx.closedTopPopup(...args)),
      onOpened: _cache[7] || (_cache[7] = (...args) => _ctx.openedTopPopup && _ctx.openedTopPopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_7),
    createBaseVNode("quark-popup", {
      id: "popup-left",
      position: "left",
      open: _ctx.openLeft,
      onClose: _cache[8] || (_cache[8] = (...args) => _ctx.closeLeftPopup && _ctx.closeLeftPopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_8),
    createBaseVNode("quark-popup", {
      id: "popup-bottom",
      position: "bottom",
      open: _ctx.openBottom,
      onClose: _cache[9] || (_cache[9] = (...args) => _ctx.closeBottomPopup && _ctx.closeBottomPopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_9),
    createBaseVNode("quark-popup", {
      id: "popup-right",
      position: "right",
      open: _ctx.openRight,
      onClose: _cache[10] || (_cache[10] = (...args) => _ctx.closeRightPopup && _ctx.closeRightPopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_10),
    createBaseVNode("quark-popup", {
      id: "popup-center",
      position: "center",
      open: _ctx.openCenter,
      onClose: _cache[11] || (_cache[11] = (...args) => _ctx.closeCenterPopup && _ctx.closeCenterPopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1)
    ], 40, _hoisted_11),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("style")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[12] || (_cache[12] = (...args) => _ctx.showRoundPopup && _ctx.showRoundPopup(...args)),
        title: _ctx.translate("roundStyle")
      }, null, 8, _hoisted_12),
      createBaseVNode("quark-cell", {
        islink: "",
        onClick: _cache[13] || (_cache[13] = (...args) => _ctx.showCloseablePopup && _ctx.showCloseablePopup(...args)),
        title: _ctx.translate("showCloseTitle")
      }, null, 8, _hoisted_13)
    ]),
    createBaseVNode("quark-popup", {
      id: "popup-round",
      position: "bottom",
      round: "",
      open: _ctx.openRound,
      onClose: _cache[15] || (_cache[15] = (...args) => _ctx.closeRoundPopup && _ctx.closeRoundPopup(...args))
    }, [
      createBaseVNode("div", {
        style: { "margin-top": "20px" },
        onClick: _cache[14] || (_cache[14] = (...args) => _ctx.contentClick && _ctx.contentClick(...args))
      }, toDisplayString(_ctx.translate("closePopup")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_14),
    createBaseVNode("quark-popup", {
      id: "popup-closeable",
      position: "bottom",
      closeable: "",
      round: "",
      open: _ctx.openCloseable,
      onClose: _cache[16] || (_cache[16] = (...args) => _ctx.closeCloseablePopup && _ctx.closeCloseablePopup(...args))
    }, [
      createBaseVNode("div", null, toDisplayString(_ctx.translate("firstLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("secondLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("thirdLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("forthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("fifthLine")), 1),
      createBaseVNode("div", null, toDisplayString(_ctx.translate("sixthLine")), 1)
    ], 40, _hoisted_15)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
