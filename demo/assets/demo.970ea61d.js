import { c as createComponent } from "./component.3cef85d2.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, D as createTextVNode, T as Toast, b as openBlock } from "./mobile.b0853051.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("noticebar");
const _sfc_main = createDemo({
  setup() {
    const data = ref([]);
    const onRightClick = () => {
      Toast.text(`${translate("text.clickToast")}`);
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            multiple: "\u6587\u5B57\u884C\u6570\u8BBE\u7F6E",
            style: "\u6837\u5F0F\u8BBE\u7F6E",
            marquee: "\u6587\u5B57\u8D85\u957F\u6EDA\u52A8",
            icon: "\u56FE\u6807\u9690\u85CF",
            custom: "\u4E24\u7AEF\u81EA\u5B9A\u4E49",
            right: "\u53F3\u4FA7\u4E8B\u4EF6\u7ED1\u5B9A"
          },
          text: {
            content: "\u5927\u5B66\u4E4B\u9053\uFF0C\u5728\u660E\u660E\u5FB7\uFF0C\u5728\u4EB2\u6C11\uFF0C\u5728\u6B62\u4E8E\u81F3\u5584\u3002",
            left: "\u5DE6\u4FA7\u5185\u5BB9",
            right: "\u53F3\u4FA7\u5185\u5BB9",
            error: "\u5F53\u524D\u7F51\u7EDC\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E",
            set: "\u53BB\u8BBE\u7F6E",
            rightClick: "\u8BD5\u7740\u70B9\u51FB\u4E00\u4E0B\u53F3\u7BAD\u5934",
            multiple: "\u5927\u5B66\u7684\u76EE\u7684\uFF0C\u5728\u4E8E\u663E\u660E\u9AD8\u5C1A\u7684\u54C1\u5FB7\uFF0C\u5728\u4E8E\u4F7F\u4EBA\u4EEC\u9769\u9664\u65E7\u4E60\uFF0C\u5728\u4E8E\u8FBE\u5230\u5584\u7684\u6700\u9AD8\u5883\u754C\u3002\u5927\u5B66\u7684\u76EE\u7684\uFF0C\u5728\u4E8E\u663E\u660E\u9AD8\u5C1A\u7684\u54C1\u5FB7\uFF0C\u5728\u4E8E\u4F7F\u4EBA\u4EEC\u9769\u9664\u65E7\u4E60\uFF0C\u5728\u4E8E\u8FBE\u5230\u5584\u7684\u6700\u9AD8\u5883\u754C\u3002",
            clickToast: "\u70B9\u51FB\u6D4B\u8BD5"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            multiple: "Multiple Text",
            style: "Style",
            marquee: "Marquee",
            icon: "Hide Icon",
            custom: "Custom Ends",
            right: "Right Event"
          },
          text: {
            content: "The way of the university is to be bright and virtuous.",
            left: "Left Content",
            right: "Right Content",
            error: "Current network is unavailable, please check the network settings",
            set: "Go to Settings",
            rightClick: "Try to click the right arrow",
            multiple: "The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness. The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness.",
            clickToast: "Click to test"
          }
        }
      });
      data.value = {
        lefttext: false,
        right: "",
        text: `${translate("text.content")}`,
        multipleText: `${translate("text.multiple")}`
      };
    });
    return {
      data,
      onRightClick,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding" };
const _hoisted_2 = ["text"];
const _hoisted_3 = ["text"];
const _hoisted_4 = ["text"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["text"];
const _hoisted_7 = ["text"];
const _hoisted_8 = ["text"];
const _hoisted_9 = { slot: "left" };
const _hoisted_10 = { slot: "right" };
const _hoisted_11 = ["text"];
const _hoisted_12 = { slot: "right" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("quark-icon-arrow-right", {
  size: "15",
  name: "right"
}, null, -1);
const _hoisted_14 = ["text"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-noticebar", {
      text: _ctx.data.text
    }, null, 8, _hoisted_2),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.multiple")), 1),
    createBaseVNode("quark-noticeBar", {
      text: _ctx.data.multipleText,
      multiple: 2
    }, null, 8, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.style")), 1),
    createBaseVNode("quark-noticebar", {
      text: _ctx.data.text,
      color: "#1989fa",
      bgcolor: "#ecf9ff"
    }, null, 8, _hoisted_4),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.marquee")), 1),
    createBaseVNode("quark-noticebar", null, [
      createBaseVNode("quark-marquee", {
        slot: "text",
        title: _ctx.data.multipleText
      }, null, 8, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.icon")), 1),
    createBaseVNode("quark-noticebar", {
      text: _ctx.translate("text.content"),
      righthide: "",
      style: { "margin-bottom": "10px" }
    }, null, 8, _hoisted_6),
    createBaseVNode("quark-noticebar", {
      text: _ctx.translate("text.content"),
      lefthide: ""
    }, null, 8, _hoisted_7),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.custom")), 1),
    createBaseVNode("quark-noticebar", {
      class: "noticebar-left-style-setting",
      text: _ctx.translate("text.content")
    }, [
      createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.translate("text.left")), 1),
      createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.translate("text.right")), 1)
    ], 8, _hoisted_8),
    createBaseVNode("quark-noticebar", {
      class: "noticebar-right-style-setting",
      lefthide: "",
      text: _ctx.translate("text.error")
    }, [
      createBaseVNode("span", _hoisted_12, [
        createTextVNode(toDisplayString(_ctx.translate("text.set")), 1),
        _hoisted_13
      ])
    ], 8, _hoisted_11),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.right")), 1),
    createBaseVNode("quark-noticebar", {
      text: _ctx.translate("text.rightClick"),
      onRightclick: _cache[0] || (_cache[0] = (...args) => _ctx.onRightClick && _ctx.onRightClick(...args))
    }, null, 40, _hoisted_14)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
