import { c as createComponent } from "./component.8774e5cb.js";
import { _ as _export_sfc, r as ref, f as onMounted, l as onBeforeUnmount, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock, p as pushScopeId, m as popScopeId } from "./mobile.98e90c24.js";
var demo_scss_vue_type_style_index_0_src_scoped_true_lang = "";
const { createDemo, translate } = createComponent("form");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      value: 10,
      open: false,
      datepicker: `${translate("error.timePicker")}`,
      field: "",
      textarea: "",
      checkbox1: true,
      checkbox2: false,
      radio: "",
      t: ""
    });
    const form1 = ref(null);
    const form2 = ref(null);
    const form3 = ref(null);
    const pickerRef = ref(null);
    onMounted(() => {
      form1.value.setRules([
        { name: "name", required: true },
        { name: "password", required: true, type: "password" }
      ]);
      form2.value.setRules([
        {
          name: "field",
          required: true
        },
        {
          name: "textarea",
          required: true
        }
      ]);
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: translate("calendaritem.weekdays")
        },
        {
          defaultIndex: 1,
          values: translate("time")
        }
      ]);
      form2.value.setRules([
        {
          name: "age",
          required: true,
          message: `${translate("error.age")}`,
          validator: (value) => value >= 18
        },
        {
          name: "phone",
          required: true,
          message: `${translate("error.formItem")}`,
          validator: (value) => /^1[3456789]\d{9}$/g.test(value)
        }
      ]);
      form3.value.setRules([
        {
          name: "field",
          required: true
        },
        {
          name: "textarea",
          required: true
        }
      ]);
    });
    onBeforeUnmount(() => {
      clearTimeout(data.value.t);
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            rule: "\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219",
            items: "\u8868\u5355\u9879\u5927\u5168"
          },
          labels: ["\u59D3\u540D", "\u5BC6\u7801", "\u5E74\u9F84", "\u624B\u673A\u53F7"],
          vegetable: "\u852C\u83DC:",
          vegetables: ["\u9EC4\u74DC", "\u751F\u59DC"],
          fruit: "\u6C34\u679C:",
          fruits: ["\u82F9\u679C", "\u9999\u8549"],
          items: ["\u5F00\u706F:", "\u6253\u5206:", "\u6B65\u8FDB\u5668:", "\u4E0A\u4F20:", "picker \u9009\u62E9\u5668:"],
          placeholder: "\u8BF7\u8F93\u5165\u6587\u672C",
          submit: "\u63D0\u4EA4",
          error: {
            timePicker: "\u8BF7\u9009\u62E9\u65F6\u95F4",
            age: "\u4E0D\u80FD\u5C0F\u4E8E18\u5C81",
            name: "\u8BF7\u8F93\u5165\u59D3\u540D",
            phone: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",
            formItem: "\u8BF7\u68C0\u67E5\u8868\u5355\u9879",
            items: "\u5F53\u524D\u8868\u5355\u6240\u6709\u7684\u503C",
            console: "\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\u8868\u5355\u503C"
          },
          time: ["\u4E0A\u5348", "\u4E0B\u5348"]
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            rule: "Custom Rules",
            items: "Form Items"
          },
          labels: ["Name", "Password", "Age", "Phone"],
          vegetable: "Vegetables:",
          vegetables: ["Cucumber", "Ginger"],
          fruit: "Fruit:",
          fruits: ["Apple", "Banana"],
          items: ["Switch:", "Rate:", "Stepper:", "Upload:", "Picker:"],
          placeholder: "Please enter text",
          submit: "Submit",
          error: {
            timePicker: "Please select time",
            age: "Must not be younger than 18",
            phone: "please enter a valid phone number",
            formItem: "Please check the form item",
            items: "All values of the current form",
            console: "Please check the form value in the console",
            name: "Please input name"
          },
          time: ["a.m.", "p.m."]
        }
      });
    });
    const submit1 = () => {
      form1.value.getValues().then((value) => {
      }).catch((err) => {
        Toast.text(err.message || `${translate("error.name")}`);
      });
    };
    const submit2 = () => {
      form2.value.getValues().then((value) => {
        console.log(value, `${translate("error.items")}`);
      }).catch((err) => {
      });
    };
    const submit3 = () => {
      form3.value.getValues().then((value) => {
        Toast.text(`${translate("error.console")}`);
        console.log(value, "22");
      }).catch((err) => {
        console.log(err, "e");
        Toast.text(err.message || `${translate("error.formItem")}`);
      });
    };
    const onRadioChange = ({ detail }) => {
      data.value.radio = detail.value;
    };
    const click = () => {
      data.value.open = true;
    };
    const close = () => {
      data.value.open = false;
    };
    const confirm = ({ detail }) => {
      data.value.datepicker = detail.value.map((i) => i.value).join(" ");
      data.value.open = false;
    };
    return {
      data,
      form1,
      form2,
      form3,
      pickerRef,
      translate,
      submit1,
      submit2,
      submit3,
      click,
      close,
      confirm,
      onRadioChange
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-5d848ad9"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo scoped-form" };
const _hoisted_2 = { ref: "form1" };
const _hoisted_3 = ["label"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_5 = ["label"];
const _hoisted_6 = { class: "submit-wrap" };
const _hoisted_7 = { ref: "form2" };
const _hoisted_8 = ["placeholder", "label"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_10 = ["label"];
const _hoisted_11 = { class: "submit-wrap" };
const _hoisted_12 = { ref: "form3" };
const _hoisted_13 = ["placeholder", "label", "value"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_15 = { class: "form-item" };
const _hoisted_16 = ["value"];
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_18 = { class: "form-item" };
const _hoisted_19 = ["checked"];
const _hoisted_20 = ["checked"];
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_23 = { class: "form-item" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-switch", { name: "switch" }, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_26 = { class: "form-item" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-rate", { name: "rate" }, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_29 = { class: "form-item" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-stepper", { name: "step" }, null, -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_32 = { class: "form-item" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-uploader", {
  name: "uploader",
  iconcolor: "#ccc",
  preview: ""
}, null, -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_35 = { class: "form-item" };
const _hoisted_36 = ["title"];
const _hoisted_37 = ["title", "open"];
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "line" }, null, -1));
const _hoisted_39 = { class: "submit-wrap" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-form", _hoisted_2, [
      createBaseVNode("quark-field", {
        name: "name",
        label: _ctx.translate("labels")[0]
      }, null, 8, _hoisted_3),
      _hoisted_4,
      createBaseVNode("quark-field", {
        type: "password",
        name: "password",
        label: _ctx.translate("labels")[1]
      }, null, 8, _hoisted_5),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("quark-button", {
          type: "primary",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.submit1 && _ctx.submit1(...args)),
          class: "submit"
        }, toDisplayString(_ctx.translate("submit")), 1)
      ])
    ], 512),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.rule")), 1),
    createBaseVNode("quark-form", _hoisted_7, [
      createBaseVNode("quark-field", {
        placeholder: _ctx.translate("placeholder"),
        name: "age",
        label: _ctx.translate("labels")[2]
      }, null, 8, _hoisted_8),
      _hoisted_9,
      createBaseVNode("quark-field", {
        type: "number",
        value: "123",
        max: "11",
        name: "phone",
        label: _ctx.translate("labels")[3]
      }, null, 8, _hoisted_10),
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("quark-button", {
          type: "primary",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.submit2 && _ctx.submit2(...args)),
          class: "submit"
        }, toDisplayString(_ctx.translate("submit")), 1)
      ])
    ], 512),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.items")), 1),
    createBaseVNode("quark-form", _hoisted_12, [
      createBaseVNode("quark-field", {
        placeholder: _ctx.translate("placeholder"),
        name: "field",
        label: _ctx.translate("labels")[2],
        value: _ctx.data.field
      }, null, 8, _hoisted_13),
      _hoisted_14,
      createBaseVNode("div", _hoisted_15, [
        createBaseVNode("quark-textarea", {
          name: "textarea",
          value: _ctx.data.textarea
        }, null, 8, _hoisted_16)
      ]),
      _hoisted_17,
      createBaseVNode("div", _hoisted_18, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("vegetable")), 1),
        createBaseVNode("quark-checkbox", {
          name: "checkbox1",
          shape: "square",
          checked: _ctx.data.checkbox1
        }, toDisplayString(_ctx.translate("vegetables")[0]), 9, _hoisted_19),
        createBaseVNode("quark-checkbox", {
          name: "checkbox2",
          shape: "square",
          checked: _ctx.data.checkbox2
        }, toDisplayString(_ctx.translate("vegetables")[1]), 9, _hoisted_20)
      ]),
      _hoisted_21,
      _hoisted_22,
      createBaseVNode("div", _hoisted_23, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("items")[0]), 1),
        _hoisted_24
      ]),
      _hoisted_25,
      createBaseVNode("div", _hoisted_26, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("items")[1]), 1),
        _hoisted_27
      ]),
      _hoisted_28,
      createBaseVNode("div", _hoisted_29, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("items")[2]), 1),
        _hoisted_30
      ]),
      _hoisted_31,
      createBaseVNode("div", _hoisted_32, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("items")[3]), 1),
        _hoisted_33
      ]),
      _hoisted_34,
      createBaseVNode("div", _hoisted_35, [
        createBaseVNode("span", null, toDisplayString(_ctx.translate("items")[4]), 1),
        createBaseVNode("quark-cell", {
          type: "primary",
          title: _ctx.data.datepicker,
          isLink: "",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.click && _ctx.click(...args))
        }, null, 8, _hoisted_36),
        createBaseVNode("quark-picker", {
          title: _ctx.translate("error.timePicker"),
          ref: "pickerRef",
          open: _ctx.data.open,
          onClose: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => _ctx.confirm && _ctx.confirm(...args)),
          onChange: _cache[5] || (_cache[5] = (...args) => _ctx.change && _ctx.change(...args)),
          name: "picker"
        }, null, 40, _hoisted_37)
      ]),
      _hoisted_38,
      createBaseVNode("div", _hoisted_39, [
        createBaseVNode("quark-button", {
          type: "primary",
          class: "submit",
          onClick: _cache[6] || (_cache[6] = (...args) => _ctx.submit3 && _ctx.submit3(...args))
        }, toDisplayString(_ctx.translate("submit")), 1)
      ])
    ], 512)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5d848ad9"]]);
export { demo as default };
