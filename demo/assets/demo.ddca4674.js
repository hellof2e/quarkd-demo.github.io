import { c as createComponent } from "./component.acbde3b2.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, f as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.37575bbd.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("cell");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          CellTitle: {
            basicUsage: "\u57FA\u672C\u7528\u6CD5",
            custom: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
            async: "\u5F02\u6B65\u5173\u95ED"
          },
          title: "\u8FD9\u662F\u6807\u9898",
          desc: "\u63CF\u8FF0\u6587\u5B57",
          buttons: {
            del: "\u5220\u9664",
            collect: "\u6536\u85CF",
            select: "\u9009\u62E9",
            add: "\u6DFB\u52A0"
          },
          noData: "\u6682\u65E0\u6570\u636E",
          addData: "\u5FEB\u53BB\u6DFB\u52A0\u6570\u636E\u5427~",
          loading: "\u8BF7\u6C42\u4E2D",
          deleteSucc: "\u5220\u9664\u6210\u529F"
        },
        "en-US": {
          CellTitle: {
            basicUsage: "Basic Usage",
            custom: "Custom Content",
            async: "Async Close"
          },
          title: "Cell Title",
          desc: "Description",
          buttons: {
            del: "Delete",
            collect: "Collect",
            select: "Select",
            add: "Add"
          },
          noData: "No Data",
          addData: "Go to add data.",
          loading: "loading...",
          deleteSucc: "successfully deleted"
        }
      });
    });
    const onOpen = ({ detail }) => {
      console.log(detail.name, detail.position);
    };
    const onClose = ({ detail }) => {
      console.log(detail.name, detail.position);
    };
    const asyncSwipeCell = ref();
    onMounted(() => {
      asyncSwipeCell.value.setBeforeClose((position) => {
        if (position === "right") {
          return new Promise((resolve) => {
            const toast = Toast.loading(translate("loading"));
            setTimeout(() => {
              toast.hide();
              Toast.success(translate("deleteSucc"));
              resolve(true);
            }, 1e3);
          });
        } else {
          return true;
        }
      });
    });
    return {
      translate,
      onOpen,
      onClose,
      asyncSwipeCell
    };
  }
});
const _hoisted_1 = { class: "demo no-padding swipe-cell-demo" };
const _hoisted_2 = ["title", "desc"];
const _hoisted_3 = {
  class: "left",
  slot: "left"
};
const _hoisted_4 = {
  type: "primary",
  shape: "square"
};
const _hoisted_5 = {
  class: "right",
  slot: "right"
};
const _hoisted_6 = {
  type: "danger",
  shape: "square"
};
const _hoisted_7 = {
  type: "primary",
  shape: "square"
};
const _hoisted_8 = ["title", "desc"];
const _hoisted_9 = {
  class: "right",
  slot: "right"
};
const _hoisted_10 = {
  type: "primary",
  shape: "square"
};
const _hoisted_11 = { ref: "asyncSwipeCell" };
const _hoisted_12 = ["title", "desc"];
const _hoisted_13 = {
  class: "right",
  slot: "right"
};
const _hoisted_14 = {
  type: "primary",
  shape: "square"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.basicUsage")), 1),
    createBaseVNode("quark-swipe-cell", {
      onOpen: _cache[0] || (_cache[0] = (...args) => _ctx.onOpen && _ctx.onOpen(...args)),
      onClose: _cache[1] || (_cache[1] = (...args) => _ctx.onClose && _ctx.onClose(...args))
    }, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        desc: _ctx.translate("desc")
      }, null, 8, _hoisted_2),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("quark-button", _hoisted_4, toDisplayString(_ctx.translate("buttons.select")), 1)
      ]),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("quark-button", _hoisted_6, toDisplayString(_ctx.translate("buttons.del")), 1),
        createBaseVNode("quark-button", _hoisted_7, toDisplayString(_ctx.translate("buttons.collect")), 1)
      ])
    ], 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.custom")), 1),
    createBaseVNode("quark-swipe-cell", null, [
      createBaseVNode("quark-empty", {
        title: _ctx.translate("noData"),
        desc: _ctx.translate("addData"),
        type: "local"
      }, null, 8, _hoisted_8),
      createBaseVNode("div", _hoisted_9, [
        createBaseVNode("quark-button", _hoisted_10, toDisplayString(_ctx.translate("buttons.add")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("CellTitle.async")), 1),
    createBaseVNode("quark-swipe-cell", _hoisted_11, [
      createBaseVNode("quark-cell", {
        title: _ctx.translate("title"),
        desc: _ctx.translate("desc")
      }, null, 8, _hoisted_12),
      createBaseVNode("div", _hoisted_13, [
        createBaseVNode("quark-button", _hoisted_14, toDisplayString(_ctx.translate("buttons.del")), 1)
      ])
    ], 512)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
