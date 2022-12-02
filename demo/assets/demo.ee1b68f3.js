import { c as createComponent } from "./component.4578f813.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, z as imagePreview, b as openBlock } from "./mobile.ceb68552.js";
import { o as onBeforeRouteLeave } from "./vue-router.d11a42c0.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("imagePreview");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      index: 0,
      open1: false,
      open2: false
    });
    const preview1 = ref(null);
    const preview2 = ref(null);
    const baseUrls = [
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png",
      "https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png",
      "https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png"
    ];
    const baseUse = () => {
      imagePreview({
        images: baseUrls
      });
    };
    const baseUse2 = () => {
      imagePreview({
        startPosition: 2,
        images: baseUrls
      });
    };
    const baseUse3 = () => {
      imagePreview({
        startPosition: 1,
        images: baseUrls,
        close: (index) => Toast.text(`${translate("dialog.close")}${index + 1}`)
      });
    };
    const swipeChange = () => {
      imagePreview({
        startPosition: 1,
        images: baseUrls,
        change: (index) => Toast.text(`${translate("dialog.move")}${index + 1}`)
      });
    };
    const componentsClick = () => {
      data.value.open1 = true;
    };
    const componentsClick2 = () => {
      data.value.open2 = true;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            configuration: "\u4F20\u5165\u914D\u7F6E\u9879",
            props: "\u7EC4\u4EF6\u5F0F\u8C03\u7528"
          },
          basic: {
            preview: "\u9884\u89C8\u56FE\u7247"
          },
          configuration: {
            initial: "\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",
            sliding: "\u76D1\u542C\u6ED1\u52A8\u4E8B\u4EF6",
            close: "\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6"
          },
          props: {
            label: "\u6807\u7B7E\u5F0F\u8C03\u7528",
            nav: "\u81EA\u5B9A\u4E49\u5BFC\u822A"
          },
          page1: "\u7B2C",
          page2: "\u9875",
          dialog: {
            move: "\u5F53\u524D\u79FB\u52A8\u4F4D\u7F6E",
            close: "\u5F53\u524D\u5173\u95ED\u4F4D\u7F6E"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            configuration: "Configuration Items",
            props: "Component Call"
          },
          basic: {
            preview: "Image Preview"
          },
          configuration: {
            initial: "Initial Position",
            sliding: "Sliding Event",
            close: "Close Event"
          },
          props: {
            label: "Label Call",
            nav: "Custom Navigation"
          },
          page1: "Page",
          page2: "",
          dialog: {
            move: "Current Mobile Location",
            close: "Current Closed Position"
          }
        }
      });
    });
    onMounted(() => {
      preview2.value.setData({
        images: baseUrls,
        change: (index) => data.value.index = index,
        close: () => data.value.open2 = false
      });
      preview1.value.setData({
        images: baseUrls,
        startPosition: 2,
        change: (index) => Toast.text(`${translate("dialog.move")}${index + 1}`),
        close: () => data.value.open1 = false
      });
    });
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-image-preview ");
      nodes.forEach((i) => i.open = false);
    });
    return {
      data,
      baseUse,
      baseUse2,
      baseUse3,
      swipeChange,
      componentsClick,
      componentsClick2,
      translate,
      preview1,
      preview2
    };
  }
});
const _hoisted_1 = { style: { "height": "100%" } };
const _hoisted_2 = { class: "demo dialog-demo" };
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["title"];
const _hoisted_8 = ["title"];
const _hoisted_9 = ["open"];
const _hoisted_10 = ["open"];
const _hoisted_11 = {
  class: "my-indicator",
  slot: "indicator"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
      createBaseVNode("quark-cell-group", null, [
        createBaseVNode("quark-cell", {
          type: "primary",
          title: _ctx.translate("basic.preview"),
          isLink: "",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.baseUse && _ctx.baseUse(...args))
        }, null, 8, _hoisted_3)
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.configuration")), 1),
      createBaseVNode("quark-cell-group", null, [
        createBaseVNode("quark-cell", {
          type: "primary",
          title: _ctx.translate("configuration.initial"),
          isLink: "",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.baseUse2 && _ctx.baseUse2(...args))
        }, null, 8, _hoisted_4),
        createBaseVNode("quark-cell", {
          title: _ctx.translate("configuration.sliding"),
          isLink: "",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.swipeChange && _ctx.swipeChange(...args))
        }, null, 8, _hoisted_5),
        createBaseVNode("quark-cell", {
          type: "primary",
          title: _ctx.translate("configuration.close"),
          isLink: "",
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.baseUse3 && _ctx.baseUse3(...args))
        }, null, 8, _hoisted_6)
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.props")), 1),
      createBaseVNode("quark-cell-group", null, [
        createBaseVNode("quark-cell", {
          title: _ctx.translate("props.label"),
          isLink: "",
          onClick: _cache[4] || (_cache[4] = (...args) => _ctx.componentsClick && _ctx.componentsClick(...args))
        }, null, 8, _hoisted_7),
        createBaseVNode("quark-cell", {
          title: _ctx.translate("props.nav"),
          isLink: "",
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.componentsClick2 && _ctx.componentsClick2(...args))
        }, null, 8, _hoisted_8)
      ])
    ]),
    createBaseVNode("quark-image-preview", {
      ref: "preview1",
      open: _ctx.data.open1
    }, null, 8, _hoisted_9),
    createBaseVNode("quark-image-preview", {
      ref: "preview2",
      open: _ctx.data.open2
    }, [
      createBaseVNode("p", _hoisted_11, toDisplayString(_ctx.translate("page1")) + " " + toDisplayString(_ctx.data.index + 1) + " " + toDisplayString(_ctx.translate("page2")), 1)
    ], 8, _hoisted_10)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
