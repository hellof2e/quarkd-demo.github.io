import { c as createComponent } from "./component.8369819c.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.ce3121d4.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("field");
const _sfc_main = createDemo({
  setup() {
    const value = ref(1);
    const disabled = ref(true);
    const css = ref({
      labelWidth: "100px",
      labelColor: "#ccc",
      labelSize: "16px",
      labelMarginRight: "10px",
      inputColor: "#999",
      inputSize: "12px",
      placeholderColor: "red"
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            head: "\u81EA\u5B9A\u4E49\u6807\u9898/\u65E0\u6807\u9898",
            disabled: "\u7981\u7528\u4E0E\u53EA\u8BFB",
            css: "css \u5C5E\u6027",
            event: "\u4E8B\u4EF6",
            required: "\u8BBE\u7F6E\u5FC5\u586B\u5B57\u6BB5"
          },
          basic: {
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
            label1: "\u6587\u672C",
            label2: "\u5BC6\u7801",
            label3: "\u6570\u5B57",
            label4: "\u6700\u591A5\u4F4D\u6570",
            value: "\u4E00\u4E8C\u4E09\u56DB\u4E94"
          },
          head: {
            value: "\u81EA\u5B9A\u4E49\u6807\u9898",
            main: "\u4E3B\u6807\u9898",
            subtitle: "\u8FD9\u662F\u4E00\u884C\u526F\u6807\u9898"
          },
          nohead: {
            placeholder: "\u7981\u7528label",
            value: "\u65E0\u6807\u9898"
          },
          disabled: {
            value: "\u6211\u7981\u7528\u4E86",
            label: "\u7981\u7528"
          },
          readonly: {
            value: "\u6211\u662F\u53EA\u8BFB\u7684",
            label: "\u53EA\u8BFB"
          },
          requiredText: {
            placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
            label: "\u6587\u672C",
            error: "\u6587\u672C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"
          },
          requiredPhone: {
            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            label: "\u624B\u673A\u53F7",
            error: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            head: "Custom Title",
            disabled: "Disabled & Readonly",
            css: "CSS Style",
            event: "Event",
            required: "Requied Content Setting"
          },
          basic: {
            placeholder: "Please enter text",
            label1: "Text",
            label2: "Password",
            label3: "Number",
            label4: "Up to 5 digits",
            value: "One Two Tree Four Five"
          },
          head: {
            value: "Custom Title",
            main: "Main Title",
            subtitle: "Subtitle"
          },
          nohead: {
            placeholder: "Disable Label",
            value: "No Title"
          },
          disabled: {
            value: "Disabled",
            label: "Disabled"
          },
          readonly: {
            value: "Readonly",
            label: "Readonly"
          },
          requiredText: {
            placeholder: "Please enter text",
            label: "Text",
            error: "Text content cannot be empty"
          },
          requiredPhone: {
            placeholder: "Please enter phone number",
            label: "Phone number",
            error: "Please enter the correct number"
          }
        }
      });
    });
    onMounted(() => {
      const field = document.getElementById("custom-rule");
      field.setRules([
        {
          validator: validatorPhone,
          message: `${translate("requiredPhone.error")}`
        }
      ]);
    });
    const validatorPhone = (value2) => {
      if (!/^1[3456789]\d{9}$/.test(value2)) {
        return false;
      }
      return true;
    };
    const change = (e) => {
      value.data = e.detail.value;
      Toast.text(e.detail.value);
    };
    const blur = () => {
      Toast.text("blur");
    };
    const focus = () => {
      Toast.text("focus");
    };
    return {
      value,
      disabled,
      css,
      change,
      blur,
      focus,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo field-demo" };
const _hoisted_2 = { class: "demo-inputs" };
const _hoisted_3 = { class: "type" };
const _hoisted_4 = ["placeholder", "label"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_6 = ["label"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_8 = ["label"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_10 = ["value", "label"];
const _hoisted_11 = { class: "type" };
const _hoisted_12 = ["value"];
const _hoisted_13 = {
  slot: "label",
  class: "label"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_15 = ["placeholder", "value"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_17 = { class: "type" };
const _hoisted_18 = ["value", "label"];
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1);
const _hoisted_20 = ["value", "label"];
const _hoisted_21 = { class: "type" };
const _hoisted_22 = ["value"];
const _hoisted_23 = ["label", "value"];
const _hoisted_24 = ["placeholder", "label", "errormsg"];
const _hoisted_25 = ["placeholder", "label"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("quark-field", {
          placeholder: _ctx.translate("basic.placeholder"),
          label: _ctx.translate("basic.label1")
        }, null, 8, _hoisted_4),
        _hoisted_5,
        createBaseVNode("quark-field", {
          type: "password",
          value: "123456",
          label: _ctx.translate("basic.label2")
        }, null, 8, _hoisted_6),
        _hoisted_7,
        createBaseVNode("quark-field", {
          type: "number",
          value: "12345678901",
          max: "11",
          label: _ctx.translate("basic.label3")
        }, null, 8, _hoisted_8),
        _hoisted_9,
        createBaseVNode("quark-field", {
          value: _ctx.translate("basic.value"),
          maxlength: "5",
          label: _ctx.translate("basic.label4")
        }, null, 8, _hoisted_10)
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.head")), 1),
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("quark-field", {
          value: _ctx.translate("head.value")
        }, [
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("p", null, toDisplayString(_ctx.translate("head.main")), 1),
            createBaseVNode("span", null, toDisplayString(_ctx.translate("head.subtitle")), 1)
          ])
        ], 8, _hoisted_12),
        _hoisted_14,
        createBaseVNode("quark-field", {
          placeholder: _ctx.translate("nohead.placeholder"),
          value: _ctx.translate("nohead.value"),
          class: "oneLine"
        }, null, 8, _hoisted_15),
        _hoisted_16
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.disabled")), 1),
      createBaseVNode("div", _hoisted_17, [
        createBaseVNode("quark-field", {
          value: _ctx.translate("disabled.value"),
          label: _ctx.translate("disabled.label"),
          disabled: ""
        }, null, 8, _hoisted_18),
        _hoisted_19,
        createBaseVNode("quark-field", {
          value: _ctx.translate("readonly.value"),
          label: _ctx.translate("readonly.label"),
          readonly: ""
        }, null, 8, _hoisted_20)
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.css")), 1),
      createBaseVNode("div", _hoisted_21, [
        createBaseVNode("quark-field", {
          class: "theme",
          value: _ctx.translate("title.css"),
          label: "css"
        }, null, 8, _hoisted_22)
      ]),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.event")), 1),
      createBaseVNode("quark-field", {
        label: _ctx.translate("title.event"),
        value: _ctx.value,
        onChange: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.blur && _ctx.blur(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.focus && _ctx.focus(...args))
      }, null, 40, _hoisted_23),
      createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.required")), 1),
      createBaseVNode("quark-field", {
        placeholder: _ctx.translate("requiredText.placeholder"),
        label: _ctx.translate("requiredText.label"),
        required: "",
        errormsg: _ctx.translate("requiredText.error")
      }, null, 8, _hoisted_24),
      createBaseVNode("quark-field", {
        placeholder: _ctx.translate("requiredPhone.placeholder"),
        label: _ctx.translate("requiredPhone.label"),
        id: "custom-rule",
        required: ""
      }, null, 8, _hoisted_25)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
