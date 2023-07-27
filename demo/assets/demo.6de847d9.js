var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { c as createComponent } from "./component.acbde3b2.js";
import { _ as _export_sfc, r as ref, f as onMounted, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, w as withDirectives, v as vModelText, F as Fragment, l as renderList, b as openBlock, p as pushScopeId, m as popScopeId } from "./mobile.37575bbd.js";
var demo_scss_vue_type_style_index_0_src_scoped_true_lang = "";
const { createDemo, translate } = createComponent("form");
const _sfc_main = createDemo({
  setup() {
    const formData = ref({
      checkbox: ["apple"],
      radio: "",
      rate: "",
      stepper: "",
      switch: false,
      textarea: "",
      uploader: [],
      picker: ""
    });
    const form = ref({
      name: "",
      password: "",
      other: {
        age: 18
      }
    });
    const formRef = ref(null);
    const pickerRef = ref(null);
    const ruleFormRef = ref(null);
    const ruleForm = ref({
      name: "",
      password: "",
      age: ""
    });
    const formAttrRef = ref();
    const attrsForm = ref({
      name: "",
      password: "",
      age: ""
    });
    const formItemsRef = ref();
    const dynamicFormData = ref({
      user: [{ name: "", age: "" }]
    });
    const addDynamicForm = () => {
      dynamicFormData.value.user.push({ name: "", age: "" });
    };
    const dynamicRules = {
      name: [{ required: true, message: translate("error.name") }],
      age: [{ required: true, message: translate("error.age1") }]
    };
    onMounted(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      const picker = pickerRef.value;
      picker.setColumns([
        {
          defaultIndex: 0,
          values: translate("cities")
        }
      ]);
      (_a = formRef.value) == null ? void 0 : _a.setModel(form.value);
      (_b = formRef.value) == null ? void 0 : _b.setRules({
        name: [{ required: true, message: translate("error.name") }],
        password: { required: true, message: translate("error.password") },
        other: {
          age: [{ required: true, message: translate("error.age1") }]
        }
      });
      (_c = formItemsRef.value) == null ? void 0 : _c.setModel(formData.value);
      (_d = formAttrRef.value) == null ? void 0 : _d.setModel(attrsForm.value);
      (_e = formAttrRef.value) == null ? void 0 : _e.setRules({
        name: [{ required: true, message: translate("error.name") }],
        age: { required: true, message: translate("error.age1") }
      });
      (_f = ruleFormRef.value) == null ? void 0 : _f.setRules({
        name: [
          {
            required: true,
            message: translate("error.errorMsg"),
            pattern: /\w{6}/
          }
        ],
        password: [{ required: true, validator: validatorPassword }],
        age: [{ required: true, asyncValidator }]
      });
      (_g = dynamicFormRef.value) == null ? void 0 : _g.setModel(dynamicFormData.value);
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            rule: "\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219",
            items: "\u8868\u5355\u9879\u7C7B\u578B",
            slots: "\u4F7F\u7528\u63D2\u69FD",
            attrs: "\u8868\u5355\u5C5E\u6027",
            dynamic: "\u52A8\u6001\u589E\u52A0\u8868\u5355\u9879"
          },
          label: {
            name: "\u59D3\u540D",
            password: "\u5BC6\u7801",
            age: "\u5E74\u9F84",
            checkbox: "\u590D\u9009\u6846",
            radio: "\u5355\u9009\u6846",
            switch: "\u5F00\u5173",
            rate: "\u8BC4\u5206",
            stepper: "\u6B65\u8FDB\u5668",
            textarea: "\u6587\u672C\u57DF",
            uploader: "\u6587\u4EF6\u4E0A\u4F20",
            picker: "\u9009\u62E9\u5668"
          },
          placeholders: {
            pattern: "\u6B63\u5219\u6821\u9A8C",
            validator: "\u51FD\u6570\u6821\u9A8C",
            asyncValidator: "\u5F02\u6B65\u6821\u9A8C"
          },
          cities: ["\u676D\u5DDE", "\u5609\u5174", "\u7ECD\u5174", "\u5B81\u6CE2", "\u6E56\u5DDE", "\u5343\u5C9B\u6E56"],
          submit: "\u63D0\u4EA4",
          reset: "\u91CD\u7F6E",
          add: "\u6DFB\u52A0",
          error: {
            name: "\u8BF7\u8F93\u5165\u59D3\u540D",
            password: "\u8BF7\u8F93\u5165\u5BC6\u7801",
            age1: "\u8BF7\u8F93\u5165\u5E74\u9F84",
            age: "\u4E0D\u80FD\u5C0F\u4E8E18\u5C81",
            errorMsg: "\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",
            errorPwd: "\u5BC6\u7801\u4E0D\u80FD\u4E3A123456"
          },
          pickerTitle: "\u8BF7\u9009\u62E9\u57CE\u5E02",
          enum: {
            apple: "\u82F9\u679C",
            banana: "\u9999\u8549",
            square: "\u65B9\u5F62",
            circle: "\u5706\u5F62"
          },
          customLabel: "\u81EA\u5B9A\u4E49label",
          search: "\u641C\u7D22"
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            rule: "Custom Rules",
            items: "Form Items",
            slots: "Use slots",
            attrs: "Form Attributes",
            dynamic: "Add form items dynamically"
          },
          label: {
            name: "Name",
            password: "Password",
            age: "Age",
            checkbox: "Checkbox",
            radio: "Radio",
            switch: "Swicth",
            rate: "Rate",
            stepper: "Stepper",
            textarea: "Textarea",
            uploader: "Uploader",
            picker: "Picker"
          },
          placeholders: {
            pattern: "Use pattern",
            validator: "Use validator",
            asyncValidator: "Use async validator"
          },
          cities: [
            "Hangzhou",
            "Jiaxing",
            "Shaoxing",
            "Ningbo",
            "Huzhou",
            "Qiandaohu"
          ],
          submit: "Submit",
          reset: "Reset",
          add: "Add",
          error: {
            name: "Name is required",
            password: "Password is required",
            age: "Must not be younger than 18",
            age1: "Age is required",
            errorMsg: "Error message",
            errorPwd: "Password can not be 123456"
          },
          pickerTitle: "Please choose city",
          enum: {
            apple: "apple",
            banana: "banana",
            square: "square",
            circle: "circle"
          },
          customLabel: "Custom Label",
          search: "Search"
        }
      });
    });
    const submit = (ref2) => {
      ref2.validate((valid, errorMsg) => {
        console.log("submit", valid, errorMsg);
      });
    };
    const reset = () => {
      formRef.value.resetFields();
    };
    const getValues = (ref2) => {
      const values = ref2.getValues();
      console.log(values);
    };
    const onCheckboxChange = ({ detail }) => {
      formData.value.checkbox = detail.value;
    };
    const onRadioChange = ({ detail }) => {
      formData.value.radio = detail.value;
    };
    const pickerVisible = ref(false);
    const close = () => {
      pickerVisible.value = false;
    };
    const confirm = ({ detail }) => {
      formData.value.picker = detail.value.map((i) => i.value).join("");
      pickerVisible.value = false;
    };
    const ruleFormSubmit = () => __async(this, null, function* () {
      const valid = yield ruleFormRef.value.validate();
      console.log(valid);
    });
    const validatorPassword = (rule, val, callback) => {
      if (!val) {
        callback(new Error(translate("error.errorMsg")));
      } else if (val === "123456") {
        callback(new Error(translate("error.errorPwd")));
      } else {
        callback();
      }
    };
    const asyncValidator = (rule, value) => {
      return new Promise((resolve, reject) => {
        if (value < 18) {
          reject(translate("error.age"));
        } else {
          resolve();
        }
      });
    };
    const dynamicFormRef = ref();
    return {
      formRef,
      formData,
      pickerRef,
      translate,
      close,
      confirm,
      onCheckboxChange,
      pickerVisible,
      onRadioChange,
      submit,
      reset,
      form,
      ruleFormRef,
      ruleForm,
      ruleFormSubmit,
      formAttrRef,
      attrsForm,
      formItemsRef,
      getValues,
      addDynamicForm,
      dynamicRules,
      dynamicFormData,
      dynamicFormRef
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-84a6474c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo scoped-form" };
const _hoisted_2 = {
  ref: "formRef",
  labelwidth: "70px"
};
const _hoisted_3 = ["label"];
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = ["label"];
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = ["label"];
const _hoisted_8 = ["placeholder"];
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_10 = { class: "flex-box" };
const _hoisted_11 = {
  ref: "ruleFormRef",
  labelwidth: "90px"
};
const _hoisted_12 = ["label"];
const _hoisted_13 = ["placeholder"];
const _hoisted_14 = ["label"];
const _hoisted_15 = ["placeholder"];
const _hoisted_16 = ["label"];
const _hoisted_17 = ["placeholder"];
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_19 = { class: "flex-box" };
const _hoisted_20 = { ref: "formItemsRef" };
const _hoisted_21 = ["label"];
const _hoisted_22 = ["value"];
const _hoisted_23 = { name: "apple" };
const _hoisted_24 = { name: "banana" };
const _hoisted_25 = ["label"];
const _hoisted_26 = ["value"];
const _hoisted_27 = { name: "square" };
const _hoisted_28 = { name: "circle" };
const _hoisted_29 = ["label"];
const _hoisted_30 = ["checked"];
const _hoisted_31 = ["label"];
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-rate", null, null, -1));
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = ["label"];
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-stepper", {
  min: "0",
  max: "99"
}, null, -1));
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = ["label"];
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-textarea", { autosize: "" }, null, -1));
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = ["label"];
const _hoisted_41 = ["label"];
const _hoisted_42 = ["value"];
const _hoisted_43 = ["title", "open"];
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_45 = { class: "flex-box" };
const _hoisted_46 = {
  ref: "formAttrRef",
  labelwidth: "60px",
  labelposition: "right",
  labelsuffix: "\uFF1A"
};
const _hoisted_47 = ["label"];
const _hoisted_48 = ["placeholder"];
const _hoisted_49 = ["label", "rules"];
const _hoisted_50 = ["placeholder"];
const _hoisted_51 = ["label"];
const _hoisted_52 = ["placeholder"];
const _hoisted_53 = { slot: "label" };
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-field", null, null, -1));
const _hoisted_55 = { slot: "suffix" };
const _hoisted_56 = {
  type: "primary",
  size: "small"
};
const _hoisted_57 = { ref: "dynamicFormRef" };
const _hoisted_58 = ["label", "prop", "rules"];
const _hoisted_59 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_60 = ["label", "prop", "rules"];
const _hoisted_61 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_62 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_63 = { class: "flex-box" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-form", _hoisted_2, [
      createBaseVNode("quark-form-item", {
        prop: "name",
        label: _ctx.translate("label.name")
      }, [
        withDirectives(createBaseVNode("quark-field", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.form.name = $event),
          placeholder: _ctx.translate("label.name")
        }, null, 8, _hoisted_4), [
          [vModelText, _ctx.form.name]
        ])
      ], 8, _hoisted_3),
      createBaseVNode("quark-form-item", {
        prop: "password",
        label: _ctx.translate("label.password")
      }, [
        withDirectives(createBaseVNode("quark-field", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.form.password = $event),
          type: "password",
          placeholder: _ctx.translate("label.password")
        }, null, 8, _hoisted_6), [
          [vModelText, _ctx.form.password]
        ])
      ], 8, _hoisted_5),
      createBaseVNode("quark-form-item", {
        prop: "other.age",
        label: _ctx.translate("label.age")
      }, [
        withDirectives(createBaseVNode("quark-field", {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.form.other.age = $event),
          placeholder: _ctx.translate("label.age")
        }, null, 8, _hoisted_8), [
          [vModelText, _ctx.form.other.age]
        ])
      ], 8, _hoisted_7)
    ], 512),
    _hoisted_9,
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-button", {
        type: "primary",
        size: "big",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.submit(_ctx.formRef))
      }, toDisplayString(_ctx.translate("submit")), 1),
      createBaseVNode("quark-button", {
        size: "big",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.reset && _ctx.reset(...args))
      }, toDisplayString(_ctx.translate("reset")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.rule")), 1),
    createBaseVNode("quark-form", _hoisted_11, [
      createBaseVNode("quark-form-item", {
        prop: "name",
        label: _ctx.translate("label.name")
      }, [
        createBaseVNode("quark-field", {
          placeholder: _ctx.translate("placeholders.pattern")
        }, null, 8, _hoisted_13)
      ], 8, _hoisted_12),
      createBaseVNode("quark-form-item", {
        prop: "password",
        label: _ctx.translate("label.password")
      }, [
        createBaseVNode("quark-field", {
          value: "123456",
          placeholder: _ctx.translate("placeholders.validator")
        }, null, 8, _hoisted_15)
      ], 8, _hoisted_14),
      createBaseVNode("quark-form-item", {
        prop: "age",
        label: _ctx.translate("label.age")
      }, [
        createBaseVNode("quark-field", {
          placeholder: _ctx.translate("placeholders.asyncValidator")
        }, null, 8, _hoisted_17)
      ], 8, _hoisted_16)
    ], 512),
    _hoisted_18,
    createBaseVNode("div", _hoisted_19, [
      createBaseVNode("quark-button", {
        type: "primary",
        size: "big",
        onClick: _cache[5] || (_cache[5] = (...args) => _ctx.ruleFormSubmit && _ctx.ruleFormSubmit(...args))
      }, toDisplayString(_ctx.translate("submit")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.items")), 1),
    createBaseVNode("quark-form", _hoisted_20, [
      createBaseVNode("quark-form-item", {
        prop: "checkbox",
        label: _ctx.translate("label.checkbox")
      }, [
        createBaseVNode("quark-checkbox-group", {
          value: _ctx.formData.checkbox,
          onChange: _cache[6] || (_cache[6] = (...args) => _ctx.onCheckboxChange && _ctx.onCheckboxChange(...args))
        }, [
          createBaseVNode("quark-checkbox", _hoisted_23, toDisplayString(_ctx.translate("enum.apple")), 1),
          createBaseVNode("quark-checkbox", _hoisted_24, toDisplayString(_ctx.translate("enum.banana")), 1)
        ], 40, _hoisted_22)
      ], 8, _hoisted_21),
      createBaseVNode("quark-form-item", {
        prop: "radio",
        label: _ctx.translate("label.radio")
      }, [
        createBaseVNode("quark-radio-group", {
          value: _ctx.formData.radio,
          direction: "horizontal",
          onChange: _cache[7] || (_cache[7] = (...args) => _ctx.onRadioChange && _ctx.onRadioChange(...args))
        }, [
          createBaseVNode("quark-radio", _hoisted_27, toDisplayString(_ctx.translate("enum.square")), 1),
          createBaseVNode("quark-radio", _hoisted_28, toDisplayString(_ctx.translate("enum.circle")), 1)
        ], 40, _hoisted_26)
      ], 8, _hoisted_25),
      createBaseVNode("quark-form-item", {
        prop: "swich",
        label: _ctx.translate("label.switch")
      }, [
        createBaseVNode("quark-switch", {
          checked: _ctx.formData.switch
        }, null, 8, _hoisted_30)
      ], 8, _hoisted_29),
      createBaseVNode("quark-form-item", {
        prop: "rate",
        label: _ctx.translate("label.rate")
      }, _hoisted_33, 8, _hoisted_31),
      createBaseVNode("quark-form-item", {
        prop: "stepper",
        label: _ctx.translate("label.stepper")
      }, _hoisted_36, 8, _hoisted_34),
      createBaseVNode("quark-form-item", {
        prop: "textarea",
        label: _ctx.translate("label.textarea")
      }, _hoisted_39, 8, _hoisted_37),
      createBaseVNode("quark-form-item", {
        prop: "uploader",
        label: _ctx.translate("label.uploader")
      }, [
        withDirectives(createBaseVNode("quark-uploader", {
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.formData.uploader = $event),
          preview: ""
        }, null, 512), [
          [vModelText, _ctx.formData.uploader]
        ])
      ], 8, _hoisted_40),
      createBaseVNode("quark-form-item", {
        prop: "picker",
        label: _ctx.translate("label.picker"),
        islink: ""
      }, [
        createBaseVNode("quark-field", {
          value: _ctx.formData.picker,
          readonly: "",
          onClick: _cache[9] || (_cache[9] = ($event) => _ctx.pickerVisible = true)
        }, null, 8, _hoisted_42),
        createBaseVNode("quark-picker", {
          title: _ctx.translate("pickerTitle"),
          ref: "pickerRef",
          open: _ctx.pickerVisible,
          onClose: _cache[10] || (_cache[10] = (...args) => _ctx.close && _ctx.close(...args)),
          onConfirm: _cache[11] || (_cache[11] = (...args) => _ctx.confirm && _ctx.confirm(...args))
        }, null, 40, _hoisted_43)
      ], 8, _hoisted_41)
    ], 512),
    _hoisted_44,
    createBaseVNode("div", _hoisted_45, [
      createBaseVNode("quark-button", {
        type: "primary",
        size: "big",
        onClick: _cache[12] || (_cache[12] = ($event) => _ctx.getValues(_ctx.formItemsRef))
      }, toDisplayString(_ctx.translate("submit")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.attrs")), 1),
    createBaseVNode("quark-form", _hoisted_46, [
      createBaseVNode("quark-form-item", {
        prop: "name",
        label: _ctx.translate("label.name"),
        labelwidth: "70px"
      }, [
        createBaseVNode("quark-field", {
          placeholder: _ctx.translate("label.name")
        }, null, 8, _hoisted_48)
      ], 8, _hoisted_47),
      createBaseVNode("quark-form-item", {
        prop: "password",
        hideasterisk: "",
        label: _ctx.translate("label.password"),
        rules: [{ required: true, message: _ctx.translate("error.password") }]
      }, [
        createBaseVNode("quark-field", {
          type: "password",
          placeholder: _ctx.translate("label.password")
        }, null, 8, _hoisted_50)
      ], 8, _hoisted_49),
      createBaseVNode("quark-form-item", {
        prop: "age",
        label: _ctx.translate("label.age"),
        hidemessage: ""
      }, [
        withDirectives(createBaseVNode("quark-field", {
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.attrsForm.age = $event),
          placeholder: _ctx.translate("label.age")
        }, null, 8, _hoisted_52), [
          [vModelText, _ctx.attrsForm.age]
        ])
      ], 8, _hoisted_51)
    ], 512),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.slots")), 1),
    createBaseVNode("quark-form", null, [
      createBaseVNode("quark-form-item", null, [
        createBaseVNode("div", _hoisted_53, toDisplayString(_ctx.translate("customLabel")), 1),
        _hoisted_54,
        createBaseVNode("div", _hoisted_55, [
          createBaseVNode("quark-button", _hoisted_56, toDisplayString(_ctx.translate("search")), 1)
        ])
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.dynamic")), 1),
    createBaseVNode("quark-form", _hoisted_57, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dynamicFormData.user, (item, index) => {
        return openBlock(), createElementBlock(Fragment, { key: index }, [
          createBaseVNode("quark-form-item", {
            label: `${_ctx.translate("label.name")}${index}`,
            prop: `user.${index}.name`,
            rules: [{ required: true, message: _ctx.translate("error.name") }]
          }, [
            withDirectives(createBaseVNode("quark-field", {
              "onUpdate:modelValue": ($event) => item.name = $event,
              placeholder: _ctx.translate("label.name")
            }, null, 8, _hoisted_59), [
              [vModelText, item.name]
            ])
          ], 8, _hoisted_58),
          createBaseVNode("quark-form-item", {
            label: `${_ctx.translate("label.age")}${index}`,
            prop: `user.${index}.age`,
            rules: [{ required: true, message: _ctx.translate("error.age1") }]
          }, [
            withDirectives(createBaseVNode("quark-field", {
              "onUpdate:modelValue": ($event) => item.age = $event,
              placeholder: _ctx.translate("label.age")
            }, null, 8, _hoisted_61), [
              [vModelText, item.age]
            ])
          ], 8, _hoisted_60),
          _hoisted_62
        ], 64);
      }), 128))
    ], 512),
    createBaseVNode("div", _hoisted_63, [
      createBaseVNode("quark-button", {
        type: "primary",
        size: "big",
        onClick: _cache[14] || (_cache[14] = ($event) => _ctx.submit(_ctx.dynamicFormRef))
      }, toDisplayString(_ctx.translate("submit")), 1),
      createBaseVNode("quark-button", {
        size: "big",
        onClick: _cache[15] || (_cache[15] = (...args) => _ctx.addDynamicForm && _ctx.addDynamicForm(...args))
      }, toDisplayString(_ctx.translate("add")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-84a6474c"]]);
export { demo as default };
