import { c as createComponent } from "./component.14a28f14.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, g as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.6b3b842b.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("picker");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    const customOpen = ref(false);
    const pickerRef = ref(null);
    const customPickerRef = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u4F7F\u7528",
          head: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
          selectedTime: "\u8BF7\u9009\u62E9\u65F6\u95F4",
          confirmText: "\u786E\u8BA4",
          custom: {
            cancel: "\u53D6\u6D88",
            confirm: "\u786E\u5B9A",
            title: "\u8BF7\u9009\u62E9\u57CE\u5E02"
          },
          time: ["\u4E0A\u5348", "\u4E0B\u5348"],
          provinces: ["\u6D59\u6C5F\u7701"],
          values: ["\u676D\u5DDE", "\u5609\u5174", "\u7ECD\u5174", "\u5B81\u6CE2", "\u6E56\u5DDE", "\u5343\u5C9B\u6E56"],
          selected: "\u5F53\u524D\u9009\u4E2D\uFF1A"
        },
        "en-US": {
          basic: "Basic Usage",
          head: "Custom Style",
          selectedTime: "Please Select Time",
          confirmText: "Confirm",
          custom: {
            cancel: "Cancel",
            confirm: "Confirm",
            title: "Please Select City"
          },
          time: ["Morning", "Afternoon"],
          provinces: ["Zhejiang Province"],
          values: [
            "Hangzhou",
            "Jiaxing",
            "Shaoxing",
            "Ningbo",
            "Huzhou",
            "Qiandao Lake"
          ],
          selected: "Currently Selected:"
        }
      });
    });
    onMounted(() => {
      setTimeout(() => {
        const preview = pickerRef.value;
        preview.setColumns([
          {
            defaultIndex: 2,
            values: translate("calendaritem.weekdays")
          },
          {
            defaultIndex: 0,
            values: translate("time")
          }
        ]);
        const customPreview = customPickerRef.value;
        customPreview.setColumns([
          {
            defaultIndex: 0,
            values: translate("provinces")
          },
          {
            defaultIndex: 2,
            values: translate("values")
          }
        ]);
      }, 1e3);
    });
    const click = () => {
      open.value = true;
    };
    const customClick = () => {
      customOpen.value = true;
    };
    const close = (type) => {
      if (type === 0) {
        open.value = false;
      } else if (type === 1) {
        customOpen.value = false;
      }
    };
    const confirm = ({ detail }) => {
      const values = detail.value.map((column) => {
        return column.value;
      }).join("\uFF0C");
      Toast.text(`${translate("selected")}${values}`);
      open.value = false;
    };
    const customConfirm = () => {
      const customPreview = customPickerRef.value;
      const values = customPreview.getValues().map((column) => {
        return column.value;
      }).join("\uFF0C");
      Toast.text(`${translate("selected")}${values}`);
      customOpen.value = false;
    };
    const change = ({ detail }) => {
      console.log(detail.value, 33333);
    };
    return {
      open,
      customOpen,
      pickerRef,
      customPickerRef,
      click,
      customClick,
      close,
      confirm,
      customConfirm,
      change,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = {
  ref: "customPickerRef",
  class: "custom-pickerview"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-pickerview", {
      ref: "pickerRef",
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.change && _ctx.change(...args)),
      onConfirm: _cache[1] || (_cache[1] = (...args) => _ctx.confirm && _ctx.confirm(...args))
    }, null, 544),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("head")), 1),
    createBaseVNode("quark-pickerview", _hoisted_2, null, 512)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
