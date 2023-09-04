import { c as createComponent } from "./component.14a28f14.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, e as createStaticVNode, b as openBlock } from "./mobile.6b3b842b.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("swipe");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u4F7F\u7528",
          indicator: "\u5706\u5F62\u6307\u793A\u5668",
          auto: "\u81EA\u52A8\u64AD\u653E",
          settings: "\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u7684swipeItem",
          slider: "\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F",
          color: "\u8BBE\u7F6E\u6307\u793A\u5668\u989C\u8272",
          custom: "\u81EA\u5B9A\u4E49\u6307\u793A\u5668"
        },
        "en-US": {
          basic: "Basic Usage",
          indicator: "Circular Indicator",
          auto: "Auto PLay",
          settings: "Set Default Swipe Item",
          slider: "Custom Slider Size",
          color: "Set Indicator Color",
          custom: "Custom Indicator"
        }
      });
    });
    const onChange = (e) => {
    };
    const customChange = (e) => {
      const indicator = document.getElementById("indicator");
      indicator.innerHTML = `${e.detail.index + 1} / 4`;
    };
    return {
      onChange,
      customChange,
      translate
    };
  }
});
const _hoisted_1 = {
  class: "demo swipe-demo",
  style: { "padding-left": "0", "padding-right": "0" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("quark-swipe", { inactivecolor: "#fff" }, [
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "1")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "2")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "3")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "4")
  ])
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("quark-swipe", {
  type: "round",
  inactivecolor: "#fff"
}, [
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "1")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "2")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "3")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "4")
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "1")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "2")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "3")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
  /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "4")
], -1);
const _hoisted_8 = [
  _hoisted_4,
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("quark-swipe", { defaultindex: 2 }, [
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "1")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "2")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "3")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "4")
  ])
], -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="custom-container"><quark-swipe class="custom-style"><quark-swipe-item><div class="one">1</div></quark-swipe-item><quark-swipe-item><div class="two">2</div></quark-swipe-item><quark-swipe-item><div class="one">3</div></quark-swipe-item><quark-swipe-item><div class="two">4</div></quark-swipe-item></quark-swipe></div>', 1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("quark-swipe", { activecolor: "red" }, [
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "1")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "2")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "one" }, "3")
  ]),
  /* @__PURE__ */ createBaseVNode("quark-swipe-item", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "two" }, "4")
  ])
], -1);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<quark-swipe-item><div class="one">1</div></quark-swipe-item><quark-swipe-item><div class="two">2</div></quark-swipe-item><quark-swipe-item><div class="one">3</div></quark-swipe-item><quark-swipe-item><div class="two">4</div></quark-swipe-item><div id="indicator" slot="indicators" class="custom-indicator">1 / 4</div>', 5);
const _hoisted_17 = [
  _hoisted_12
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("indicator")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("auto")), 1),
    createBaseVNode("quark-swipe", {
      id: "quark-swipe-event",
      autoplay: "",
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
    }, _hoisted_8, 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("settings")), 1),
    _hoisted_9,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("slider")), 1),
    _hoisted_10,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("color")), 1),
    _hoisted_11,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("custom")), 1),
    createBaseVNode("quark-swipe", {
      id: "custom-indicator",
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.customChange && _ctx.customChange(...args))
    }, _hoisted_17, 32)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
