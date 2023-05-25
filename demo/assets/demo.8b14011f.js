import { c as createComponent } from "./component.297adc60.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.c52def29.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("checkbox");
const _sfc_main = createDemo({
  setup() {
    const mycheck = ref(true);
    const mycheckFalse = ref(false);
    const type1 = ref(true);
    const type2 = ref(true);
    const size1 = ref(true);
    const size2 = ref(true);
    const groupValue = ref([]);
    const onChange = ({ detail }) => {
      mycheck.value = detail.value;
    };
    const onChangeFalse = ({ detail }) => {
      mycheckFalse.value = detail.value;
    };
    const onChangeType1 = ({ detail }) => {
      type1.value = detail.value;
    };
    const onChangeType2 = ({ detail }) => {
      type2.value = detail.value;
    };
    const onChangeSize1 = ({ detail }) => {
      size1.value = detail.value;
    };
    const onChangeSize2 = ({ detail }) => {
      size2.value = detail.value;
    };
    const onGroupChange = ({ detail }) => {
      groupValue.value = detail.value;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u590D\u9009\u6846\u57FA\u7840\u7528\u6CD5",
            type: "\u590D\u9009\u6846\u7C7B\u578B",
            size: "\u590D\u9009\u6846\u5927\u5C0F",
            disabled: "\u590D\u9009\u6846\u7981\u7528\u72B6\u6001",
            group: "\u590D\u9009\u6846\u7FA4\u7EC4",
            selectedColor: "\u590D\u9009\u6846\u9009\u4E2D\u989C\u8272\u81EA\u5B9A\u4E49"
          },
          checked: {
            true: "\u52FE\u9009",
            false: "\u4E0D\u52FE\u9009"
          },
          type: {
            round: "\u5706\u5F62(\u9ED8\u8BA4)",
            square: "\u65B9\u5F62"
          },
          size: {
            default: "\u9ED8\u8BA4\u5F62\u72B6-\u5927",
            square: "\u65B9\u5F62-\u5927"
          },
          disabled: {
            checked: "\u5DF2\u9009-\u7981\u7528",
            unchecked: "\u672A\u9009-\u7981\u7528"
          },
          group: {
            apple: "\u82F9\u679C",
            orange: "\u6A58\u5B50",
            banana: "\u9999\u8549",
            selected: "\u5DF2\u9009: "
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            type: "Checkbox Type",
            size: "Checkbox Size",
            disabled: "Disabled Checkbox",
            group: "Checkbox Group",
            selectedColor: "Custom Selected Color"
          },
          checked: {
            true: "Checked",
            false: "Unchecked"
          },
          type: {
            round: "Round(Default)",
            square: "Square"
          },
          size: {
            default: "Default Type - Big",
            square: "Square - Big"
          },
          disabled: {
            checked: "Checked - Disabled",
            unchecked: "Unchecked - Disabled"
          },
          group: {
            apple: "Apple",
            orange: "Orange",
            banana: "Banana",
            selected: "Selected: "
          }
        }
      });
      groupValue.value = [
        `${translate("group.apple")}`,
        `${translate("group.orange")}`
      ];
    });
    return {
      mycheck,
      mycheckFalse,
      type1,
      type2,
      size1,
      size2,
      onChangeType2,
      onChangeType1,
      onChangeSize2,
      onChangeSize1,
      groupValue,
      onChange,
      onChangeFalse,
      onGroupChange,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo demo-checkbox" };
const _hoisted_2 = { class: "checkbox-container" };
const _hoisted_3 = ["checked"];
const _hoisted_4 = ["checked"];
const _hoisted_5 = { class: "checkbox-container" };
const _hoisted_6 = ["checked"];
const _hoisted_7 = ["checked"];
const _hoisted_8 = { class: "checkbox-container" };
const _hoisted_9 = ["checked"];
const _hoisted_10 = ["checked"];
const _hoisted_11 = { class: "checkbox-container" };
const _hoisted_12 = {
  checked: "true",
  disabled: ""
};
const _hoisted_13 = {
  checked: "false",
  disabled: ""
};
const _hoisted_14 = { class: "checkbox-container" };
const _hoisted_15 = ["value"];
const _hoisted_16 = ["name"];
const _hoisted_17 = ["name"];
const _hoisted_18 = ["name"];
const _hoisted_19 = { className: "picked" };
const _hoisted_20 = { class: "checkbox-container my-color" };
const _hoisted_21 = { checked: true };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-checkbox", {
        checked: _ctx.mycheck,
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
      }, toDisplayString(_ctx.translate("checked.true")), 41, _hoisted_3),
      createBaseVNode("quark-checkbox", {
        checked: _ctx.mycheckFalse,
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChangeFalse && _ctx.onChangeFalse(...args))
      }, toDisplayString(_ctx.translate("checked.false")), 41, _hoisted_4)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.type")), 1),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("quark-checkbox", {
        checked: _ctx.type1,
        shape: "round",
        onChange: _cache[2] || (_cache[2] = (...args) => _ctx.onChangeType1 && _ctx.onChangeType1(...args))
      }, toDisplayString(_ctx.translate("type.round")), 41, _hoisted_6),
      createBaseVNode("quark-checkbox", {
        checked: _ctx.type2,
        shape: "square",
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.onChangeType2 && _ctx.onChangeType2(...args))
      }, toDisplayString(_ctx.translate("type.square")), 41, _hoisted_7)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.size")), 1),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("quark-checkbox", {
        checked: _ctx.size1,
        shape: "round",
        size: "big",
        onChange: _cache[4] || (_cache[4] = (...args) => _ctx.onChangeSize1 && _ctx.onChangeSize1(...args))
      }, toDisplayString(_ctx.translate("size.default")), 41, _hoisted_9),
      createBaseVNode("quark-checkbox", {
        checked: _ctx.size2,
        shape: "square",
        size: "big",
        onChange: _cache[5] || (_cache[5] = (...args) => _ctx.onChangeSize2 && _ctx.onChangeSize2(...args))
      }, toDisplayString(_ctx.translate("size.square")), 41, _hoisted_10)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.disabled")), 1),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("quark-checkbox", _hoisted_12, toDisplayString(_ctx.translate("disabled.checked")), 1),
      createBaseVNode("quark-checkbox", _hoisted_13, toDisplayString(_ctx.translate("disabled.unchecked")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.group")), 1),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("quark-checkbox-group", {
        value: _ctx.groupValue.join(),
        onChange: _cache[6] || (_cache[6] = (...args) => _ctx.onGroupChange && _ctx.onGroupChange(...args))
      }, [
        createBaseVNode("quark-checkbox", {
          name: _ctx.translate("group.apple")
        }, toDisplayString(_ctx.translate("group.apple")), 9, _hoisted_16),
        createBaseVNode("quark-checkbox", {
          name: _ctx.translate("group.orange"),
          disabled: ""
        }, toDisplayString(_ctx.translate("group.orange")), 9, _hoisted_17),
        createBaseVNode("quark-checkbox", {
          name: _ctx.translate("group.banana")
        }, toDisplayString(_ctx.translate("group.banana")), 9, _hoisted_18)
      ], 40, _hoisted_15),
      createBaseVNode("div", _hoisted_19, toDisplayString(_ctx.translate("group.selected")) + toDisplayString(_ctx.groupValue), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.selectedColor")), 1),
    createBaseVNode("div", _hoisted_20, [
      createBaseVNode("quark-checkbox", _hoisted_21, toDisplayString(_ctx.translate("title.selectedColor")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
