import { c as createComponent } from "./component.f176a571.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.dd808505.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("radio");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      value1: "apple",
      value2: "apple",
      value3: "apple",
      value4: "apple",
      flag: true
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u5355\u9009\u6846\u57FA\u7840\u7528\u6CD5",
            type: "\u5355\u9009\u6846\u5F62\u72B6",
            size: "\u5355\u9009\u6846\u5927\u5C0F",
            disabled: "\u5355\u9009\u6846\u7981\u7528\u72B6\u6001",
            selectedColor: "\u5355\u9009\u6846\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49"
          },
          type: {
            round: "\u5706\u5F62(\u9ED8\u8BA4)",
            square: "\u65B9\u5F62"
          },
          size: {
            round: "\u5706\u5F62(\u5927)",
            square: "\u65B9\u5F62(\u5927)"
          },
          disabled: {
            checked: "\u5DF2\u9009-\u7981\u7528",
            unchecked: "\u672A\u9009-\u7981\u7528",
            squareChecekd: "\u65B9\u5F62-\u5DF2\u9009-\u7981\u7528",
            squareUnchecked: "\u65B9\u5F62-\u672A\u9009-\u7981\u7528"
          },
          group: {
            apple: "\u82F9\u679C",
            banana: "\u9999\u8549"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            type: "Checkbox Type",
            size: "Checkbox Size",
            disabled: "Disabled Checkbox",
            selectedColor: "Custom Selected Color"
          },
          type: {
            round: "Round(Default)",
            square: "Square"
          },
          size: {
            round: "Round(Big)",
            square: "Square(Big)"
          },
          disabled: {
            checked: "Checked - Disabled",
            unchecked: "Unchecked - Disabled",
            squareChecekd: "Square - Checked -Disabled",
            squareUnchecked: "Square - Unchecked -Disabled"
          },
          group: {
            apple: "Apple",
            banana: "Banana"
          }
        }
      });
    });
    const onChange1 = ({ detail }) => {
      data.value.value1 = detail.value;
    };
    const onChange2 = ({ detail }) => {
      data.value.value2 = detail.value;
    };
    const onChange3 = ({ detail }) => {
      data.value.value3 = detail.value;
    };
    const onChange4 = ({ detail }) => {
      data.value.value4 = detail.value;
    };
    const changeDisable = () => {
      data.value.flag = !data.value.flag;
    };
    return {
      data,
      onChange1,
      onChange2,
      onChange3,
      onChange4,
      changeDisable,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo radio-demo" };
const _hoisted_2 = { class: "radio-container" };
const _hoisted_3 = ["value"];
const _hoisted_4 = {
  name: "apple",
  class: "first-radio"
};
const _hoisted_5 = { name: "banana" };
const _hoisted_6 = { class: "radio-container" };
const _hoisted_7 = ["value"];
const _hoisted_8 = {
  name: "apple",
  class: "first-radio"
};
const _hoisted_9 = {
  name: "banana",
  shape: "square"
};
const _hoisted_10 = { class: "radio-container" };
const _hoisted_11 = ["value"];
const _hoisted_12 = {
  name: "apple",
  shape: "square",
  size: "big",
  class: "first-radio"
};
const _hoisted_13 = {
  name: "banana",
  size: "big"
};
const _hoisted_14 = { class: "radio-container" };
const _hoisted_15 = ["value"];
const _hoisted_16 = ["disabled"];
const _hoisted_17 = ["disabled"];
const _hoisted_18 = { class: "radio-container" };
const _hoisted_19 = {
  checked: true,
  shape: "square",
  disabled: "",
  class: "first-radio"
};
const _hoisted_20 = {
  checked: false,
  shape: "square",
  disabled: ""
};
const _hoisted_21 = { class: "radio-container my-color" };
const _hoisted_22 = { checked: true };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-radio-group", {
        value: _ctx.data.value1,
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange1 && _ctx.onChange1(...args))
      }, [
        createBaseVNode("quark-radio", _hoisted_4, toDisplayString(_ctx.translate("group.apple")), 1),
        createBaseVNode("quark-radio", _hoisted_5, toDisplayString(_ctx.translate("group.banana")), 1)
      ], 40, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.type")), 1),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-radio-group", {
        value: _ctx.data.value2,
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChange2 && _ctx.onChange2(...args))
      }, [
        createBaseVNode("quark-radio", _hoisted_8, toDisplayString(_ctx.translate("type.round")), 1),
        createBaseVNode("quark-radio", _hoisted_9, toDisplayString(_ctx.translate("type.square")), 1)
      ], 40, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.size")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-radio-group", {
        value: _ctx.data.value3,
        onChange: _cache[2] || (_cache[2] = (...args) => _ctx.onChange3 && _ctx.onChange3(...args))
      }, [
        createBaseVNode("quark-radio", _hoisted_12, toDisplayString(_ctx.translate("size.square")), 1),
        createBaseVNode("quark-radio", _hoisted_13, toDisplayString(_ctx.translate("size.round")), 1)
      ], 40, _hoisted_11)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.disabled")), 1),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("quark-radio-group", {
        value: _ctx.data.value4,
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChange4 && _ctx.onChange4(...args))
      }, [
        createBaseVNode("quark-radio", {
          name: "apple",
          disabled: _ctx.data.flag,
          class: "first-radio"
        }, toDisplayString(_ctx.translate("disabled.checked")), 9, _hoisted_16),
        createBaseVNode("quark-radio", {
          name: "banana",
          disabled: _ctx.data.flag
        }, toDisplayString(_ctx.translate("disabled.unchecked")), 9, _hoisted_17)
      ], 40, _hoisted_15)
    ]),
    createBaseVNode("div", _hoisted_18, [
      createBaseVNode("quark-radio", _hoisted_19, toDisplayString(_ctx.translate("disabled.squareChecekd")), 1),
      createBaseVNode("quark-radio", _hoisted_20, toDisplayString(_ctx.translate("disabled.squareUnchecked")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.selectedColor")), 1),
    createBaseVNode("div", _hoisted_21, [
      createBaseVNode("quark-radio", _hoisted_22, toDisplayString(_ctx.translate("title.selectedColor")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
