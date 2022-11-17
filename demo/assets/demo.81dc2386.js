import { c as createComponent } from "./component.fa5e0f2f.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.5d942645.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("steps");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      title: `${translate("status.doing.title")}`,
      content: `${translate("status.doing.content")}`,
      status: "doing"
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u672C\u7528\u6CD5",
            desc: "\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F",
            vertical: "\u7AD6\u5411\u6B65\u9AA4\u6761"
          },
          steps: {
            step1: "\u6B65\u9AA4\u4E00",
            step2: "\u6B65\u9AA4\u4E8C",
            step3: "\u6B65\u9AA4\u4E09"
          },
          status: {
            done: {
              title: "\u5DF2\u5B8C\u6210",
              content: "\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u6253\u5305\u5B8C\u6210\uFF0C\u5546\u54C1\u5DF2\u53D1\u51FA"
            },
            todo: {
              title: "\u672A\u5F00\u59CB",
              content: "\u6536\u8D27\u5730\u5740\u4E3A\uFF1A\u676D\u5DDE\u5E02\u76CA\u5C55\u5546\u52A1\u5927\u53A6"
            },
            doing: {
              title: "\u8FDB\u884C\u4E2D",
              content: "\u60A8\u7684\u8BA2\u5355\u6B63\u5728\u914D\u9001\u4E2D..."
            }
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            desc: "Title and Description",
            vertical: "Vertical Steps"
          },
          steps: {
            step1: "Step One",
            step2: "Step Two",
            step3: "Step Three"
          },
          status: {
            done: {
              title: "Finished",
              content: "Your order has been packed and the item has been dispatched"
            },
            todo: {
              title: "Not Started",
              content: "The delivery address is: 16F, Yizhan Business Building, Hangzhou"
            },
            doing: {
              title: "Processing",
              content: "Your order is being shipped..."
            }
          }
        }
      });
    });
    onMounted(() => {
      setTimeout(() => {
        data.value.title = `${translate("status.done.title")}`;
        data.value.content = `${translate("status.done.content")}`;
        data.value.status = "done";
      }, 5e3);
    });
    return {
      data,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding steps-demo" };
const _hoisted_2 = { class: "item-wrap item-horzontal" };
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = { class: "item-wrap item-horzontal" };
const _hoisted_7 = ["title", "content"];
const _hoisted_8 = ["status", "title", "content"];
const _hoisted_9 = ["title", "content"];
const _hoisted_10 = { class: "item-wrap" };
const _hoisted_11 = { direction: "vertical" };
const _hoisted_12 = ["title", "content"];
const _hoisted_13 = ["title", "content"];
const _hoisted_14 = ["title", "content"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-steps", null, [
        createBaseVNode("quark-step", {
          status: "done",
          title: _ctx.translate("steps.step1"),
          order: "1"
        }, null, 8, _hoisted_3),
        createBaseVNode("quark-step", {
          status: "doing",
          title: _ctx.translate("steps.step2"),
          order: "2"
        }, null, 8, _hoisted_4),
        createBaseVNode("quark-step", {
          status: "todo",
          title: _ctx.translate("steps.step3"),
          order: "3"
        }, null, 8, _hoisted_5)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.desc")), 1),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-steps", null, [
        createBaseVNode("quark-step", {
          status: "done",
          title: _ctx.translate("status.done.title"),
          content: _ctx.translate("status.done.content"),
          order: "1"
        }, null, 8, _hoisted_7),
        createBaseVNode("quark-step", {
          status: _ctx.data.status,
          title: _ctx.data.title,
          content: _ctx.data.content,
          order: "2"
        }, null, 8, _hoisted_8),
        createBaseVNode("quark-step", {
          status: "todo",
          title: _ctx.translate("status.todo.title"),
          content: _ctx.translate("status.todo.content"),
          order: "3"
        }, null, 8, _hoisted_9)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.vertical")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-steps", _hoisted_11, [
        createBaseVNode("quark-step", {
          status: "done",
          title: _ctx.translate("status.done.title"),
          content: _ctx.translate("status.done.content"),
          order: "1"
        }, null, 8, _hoisted_12),
        createBaseVNode("quark-step", {
          status: "doing",
          title: _ctx.translate("status.doing.title"),
          content: _ctx.translate("status.doing.content"),
          order: "2"
        }, null, 8, _hoisted_13),
        createBaseVNode("quark-step", {
          status: "todo",
          title: _ctx.translate("status.todo.title"),
          content: _ctx.translate("status.todo.content"),
          order: "3"
        }, null, 8, _hoisted_14)
      ])
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
