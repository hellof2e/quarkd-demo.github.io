import { c as createComponent } from "./component.a3f6026b.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, g as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.878855b9.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("dropdownmenu");
const _sfc_main = createDemo({
  props: {},
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5",
          title: "\u7B5B\u9009",
          title1: "\u5305\u90AE",
          title2: "\u56E2\u8D2D",
          confirm: "\u786E\u8BA4",
          customContent: "\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",
          customColor: "\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u989C\u8272",
          disabled: "\u7981\u7528\u83DC\u5355",
          direction: "\u5411\u4E0A\u5C55\u5F00",
          option1: [
            { text: "\u5168\u90E8\u5546\u54C1", value: "0" },
            { text: "\u65B0\u6B3E\u5546\u54C1", value: "1" },
            { text: "\u6D3B\u52A8\u5546\u54C1", value: "2" }
          ],
          option2: [
            { text: "\u9ED8\u8BA4\u6392\u5E8F", value: "a" },
            { text: "\u597D\u8BC4\u6392\u5E8F", value: "b" },
            { text: "\u9500\u91CF\u6392\u5E8F", value: "c" }
          ],
          swipeItems: "\u6A2A\u5411\u6EDA\u52A8"
        },
        "en-US": {
          basic: "Basic Usage",
          title: "Title",
          title1: "Title",
          title2: "Title",
          customContent: "Custom Content",
          customColor: "Custom Active Color",
          confirm: "Confirm",
          disabled: "Disabled",
          direction: "Expand Direction",
          option1: [
            { text: "Option 0", value: "0" },
            { text: "Option 1", value: "1" },
            { text: "Option 2", value: "2" }
          ],
          option2: [
            { text: "Option A", value: "a" },
            { text: "Option B", value: "b" },
            { text: "Option C", value: "c" }
          ],
          swipeItems: "Swipe Items"
        }
      });
    });
    const value = ref(1);
    const value1 = ref("0");
    const value2 = ref("a");
    const switch1 = ref(true);
    const switch2 = ref(false);
    const onSwitch1Change = (e) => {
      switch1.value = e.detail.value;
    };
    const onSwitch2Change = (e) => {
      switch2.value = e.detail.value;
    };
    const dropdownItemRef1 = ref(null);
    const dropdownItemRef2 = ref(null);
    const dropdownItemRef3 = ref(null);
    const dropdownItemRef4 = ref(null);
    const dropdownItemRef5 = ref(null);
    const dropdownItemRef6 = ref(null);
    const dropdownItemRef7 = ref(null);
    const dropdownItemRef8 = ref(null);
    const dropdownItemRef9 = ref(null);
    const dropdownItemRef10 = ref(null);
    const dropdownItemRef11 = ref(null);
    const dropdownItemRef12 = ref(null);
    onMounted(() => {
      dropdownItemRef1.value.setOptions(translate("option1"));
      dropdownItemRef2.value.setOptions(translate("option2"));
      dropdownItemRef3.value.setOptions(translate("option1"));
      dropdownItemRef5.value.setOptions(translate("option1"));
      dropdownItemRef6.value.setOptions(translate("option2"));
      dropdownItemRef7.value.setOptions(translate("option1"));
      dropdownItemRef8.value.setOptions(translate("option2"));
      dropdownItemRef9.value.setOptions(translate("option1"));
      dropdownItemRef10.value.setOptions(translate("option2"));
      dropdownItemRef11.value.setOptions(translate("option1"));
      dropdownItemRef12.value.setOptions(translate("option2"));
    });
    const onConfirm = () => {
      dropdownItemRef4.value.toggle();
    };
    return {
      translate,
      value1,
      value2,
      value,
      switch1,
      switch2,
      onConfirm,
      onSwitch1Change,
      onSwitch2Change,
      dropdownItemRef1,
      dropdownItemRef2,
      dropdownItemRef3,
      dropdownItemRef4,
      dropdownItemRef5,
      dropdownItemRef6,
      dropdownItemRef7,
      dropdownItemRef8,
      dropdownItemRef9,
      dropdownItemRef10,
      dropdownItemRef11,
      dropdownItemRef12
    };
  }
});
const _hoisted_1 = { class: "demo no-padding action-sheet-demo" };
const _hoisted_2 = ["value"];
const _hoisted_3 = ["value"];
const _hoisted_4 = {
  ref: "dropdownItemRef3",
  value: "0"
};
const _hoisted_5 = ["title"];
const _hoisted_6 = ["title"];
const _hoisted_7 = ["checked"];
const _hoisted_8 = ["title"];
const _hoisted_9 = ["checked"];
const _hoisted_10 = { style: { "padding": "5px 16px" } };
const _hoisted_11 = { "active-color": "#f00" };
const _hoisted_12 = ["value"];
const _hoisted_13 = ["value"];
const _hoisted_14 = ["value"];
const _hoisted_15 = ["value"];
const _hoisted_16 = { direction: "up" };
const _hoisted_17 = {
  ref: "dropdownItemRef9",
  value: "0"
};
const _hoisted_18 = {
  ref: "dropdownItemRef10",
  value: "a"
};
const _hoisted_19 = { "swipe-threshold": 4 };
const _hoisted_20 = {
  ref: "dropdownItemRef11",
  value: "0"
};
const _hoisted_21 = {
  ref: "dropdownItemRef12",
  value: "a"
};
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("quark-dropdown-item", { disabled: "" }, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("quark-dropdown-item", { disabled: "" }, null, -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("quark-dropdown-item", { disabled: "" }, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("quark-dropdown-item", { disabled: "" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-dropdown-menu", null, [
      createBaseVNode("quark-dropdown-item", {
        ref: "dropdownItemRef1",
        value: _ctx.value1
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-dropdown-item", {
        ref: "dropdownItemRef2",
        value: _ctx.value2
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customContent")), 1),
    createBaseVNode("quark-dropdown-menu", null, [
      createBaseVNode("quark-dropdown-item", _hoisted_4, null, 512),
      createBaseVNode("quark-dropdown-item", {
        ref: "dropdownItemRef4",
        title: _ctx.translate("title")
      }, [
        createBaseVNode("quark-cell", {
          title: _ctx.translate("title1")
        }, [
          createBaseVNode("quark-switch", {
            checked: _ctx.switch1,
            onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onSwitch1Change && _ctx.onSwitch1Change(...args))
          }, null, 40, _hoisted_7)
        ], 8, _hoisted_6),
        createBaseVNode("quark-cell", {
          title: _ctx.translate("title2")
        }, [
          createBaseVNode("quark-switch", {
            checked: _ctx.switch2,
            onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onSwitch2Change && _ctx.onSwitch2Change(...args))
          }, null, 40, _hoisted_9)
        ], 8, _hoisted_8),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("quark-button", {
            type: "primary",
            size: "big",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onConfirm && _ctx.onConfirm(...args))
          }, toDisplayString(_ctx.translate("confirm")), 1)
        ])
      ], 8, _hoisted_5)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customColor")), 1),
    createBaseVNode("quark-dropdown-menu", _hoisted_11, [
      createBaseVNode("quark-dropdown-item", {
        ref: "dropdownItemRef5",
        value: _ctx.value1
      }, null, 8, _hoisted_12),
      createBaseVNode("quark-dropdown-item", {
        ref: "dropdownItemRef6",
        value: _ctx.value2
      }, null, 8, _hoisted_13)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    createBaseVNode("quark-dropdown-menu", null, [
      createBaseVNode("quark-dropdown-item", {
        disabled: "",
        value: _ctx.value1,
        ref: "dropdownItemRef7"
      }, null, 8, _hoisted_14),
      createBaseVNode("quark-dropdown-item", {
        disabled: "",
        value: _ctx.value2,
        ref: "dropdownItemRef8"
      }, null, 8, _hoisted_15)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("direction")), 1),
    createBaseVNode("quark-dropdown-menu", _hoisted_16, [
      createBaseVNode("quark-dropdown-item", _hoisted_17, null, 512),
      createBaseVNode("quark-dropdown-item", _hoisted_18, null, 512)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("swipeItems")), 1),
    createBaseVNode("quark-dropdown-menu", _hoisted_19, [
      createBaseVNode("quark-dropdown-item", _hoisted_20, null, 512),
      createBaseVNode("quark-dropdown-item", _hoisted_21, null, 512),
      _hoisted_22,
      _hoisted_23,
      _hoisted_24,
      _hoisted_25
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
