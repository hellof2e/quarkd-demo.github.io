import { c as createComponent } from "./component.124d9c3a.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock } from "./mobile.f024d0f3.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("cascadepicker");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    const customOpen = ref(false);
    const pickerRef = ref(null);
    const customPickerRef = ref(null);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            head: "\u81EA\u5B9A\u4E49\u5934\u90E8",
            region: "\u8BF7\u9009\u62E9\u5730\u533A"
          },
          button: {
            cancel: "\u53D6\u6D88",
            confirm: "\u786E\u5B9A"
          },
          options: {
            zhejiang: "\u6D59\u6C5F",
            hangzhou: "\u676D\u5DDE",
            xihu: "\u897F\u6E56\u533A",
            yuhang: "\u4F59\u676D\u533A",
            wenzhou: "\u6E29\u5DDE",
            lucheng: "\u9E7F\u57CE\u533A",
            ouhai: "\u74EF\u6D77\u533A",
            fujian: "\u798F\u5EFA",
            fuzhou: "\u798F\u5DDE",
            gulou: "\u9F13\u697C\u533A",
            taijiang: "\u53F0\u6C5F\u533A",
            xiamen: "\u53A6\u95E8",
            siming: "\u601D\u660E\u533A",
            haicang: "\u6D77\u6CA7\u533A",
            beijing: "\u5317\u4EAC"
          },
          selected: "\u5F53\u524D\u9009\u4E2D\uFF1A"
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            head: "Custom Head",
            region: "Please select the region"
          },
          button: {
            cancel: "Cancel",
            confirm: "Confirm"
          },
          options: {
            zhejiang: "Zhejiang",
            hangzhou: "Hangzhou",
            xihu: "Xihu",
            yuhang: "Yuhang",
            wenzhou: "Wenzhou",
            lucheng: "Lucheng",
            ouhai: "Ouhai",
            fujian: "Fujian",
            fuzhou: "Fuzhou",
            gulou: "Gulou",
            taijiang: "Taijiang",
            xiamen: "Xiamen",
            siming: "Siming",
            haicang: "Haicang",
            beijing: "Beijing"
          },
          selected: "Currently selected: "
        }
      });
    });
    onMounted(() => {
      const DATA = [
        {
          text: `${translate("options.zhejiang")}`,
          children: [
            {
              text: `${translate("options.hangzhou")}`,
              children: [{ text: `${translate("options.xihu")}` }]
            },
            {
              text: `${translate("options.wenzhou")}`,
              children: [
                { text: `${translate("options.lucheng")}` },
                { text: `${translate("options.ouhai")}` }
              ]
            }
          ]
        },
        {
          text: `${translate("options.fujian")}`,
          children: [
            {
              text: `${translate("options.fuzhou")}`,
              children: [
                { text: `${translate("options.gulou")}` },
                { text: `${translate("options.taijiang")}` }
              ]
            },
            {
              text: `${translate("options.xiamen")}`,
              children: [
                { text: `${translate("options.siming")}` },
                { text: `${translate("options.haicang")}` }
              ]
            }
          ]
        },
        {
          text: `${translate("options.beijing")}`,
          children: [
            {
              text: "",
              children: [{ text: "" }]
            }
          ]
        }
      ];
      setTimeout(() => {
        const preview = pickerRef.value;
        preview.setColumns(DATA);
        const customPreview = customPickerRef.value;
        customPreview.setColumns(DATA);
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
      let values = detail.value.map((column) => {
        return column.value;
      });
      values = values.filter((value) => value.length > 0);
      if (values.length > 1) {
        values = values.join("\uFF0C");
      }
      Toast.text(`${values}`);
      open.value = false;
    };
    const customConfirm = () => {
      const customPreview = customPickerRef.value;
      let values = customPreview.getValues().map((column) => {
        return column.value;
      });
      values = values.filter((value) => value.length > 0);
      if (values.length > 1) {
        values = values.join("\uFF0C");
      }
      Toast.text(`${values}`);
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
const _hoisted_2 = ["title"];
const _hoisted_3 = ["open", "title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["open"];
const _hoisted_6 = {
  slot: "header",
  class: "head-container"
};
const _hoisted_7 = { class: "picker-title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.basic"),
        islink: "",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.click && _ctx.click(...args))
      }, null, 8, _hoisted_2)
    ]),
    createBaseVNode("quark-cascade-picker", {
      open: _ctx.open,
      onClose: _cache[1] || (_cache[1] = ($event) => _ctx.close(0)),
      title: _ctx.translate("title.region"),
      onConfirm: _cache[2] || (_cache[2] = (...args) => _ctx.confirm && _ctx.confirm(...args)),
      ref: "pickerRef",
      onChange: _cache[3] || (_cache[3] = (...args) => _ctx.change && _ctx.change(...args))
    }, null, 40, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.head")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("title.head"),
        islink: "",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.customClick && _ctx.customClick(...args))
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("quark-cascade-picker", {
      open: _ctx.customOpen,
      onClose: _cache[7] || (_cache[7] = ($event) => _ctx.close(1)),
      ref: "customPickerRef",
      bottomhidden: ""
    }, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("span", {
          class: "cancel",
          onClick: _cache[5] || (_cache[5] = ($event) => _ctx.close(1))
        }, toDisplayString(_ctx.translate("button.cancel")), 1),
        createBaseVNode("span", _hoisted_7, toDisplayString(_ctx.translate("title.region")), 1),
        createBaseVNode("span", {
          class: "ensure",
          onClick: _cache[6] || (_cache[6] = (...args) => _ctx.customConfirm && _ctx.customConfirm(...args))
        }, toDisplayString(_ctx.translate("button.confirm")), 1)
      ])
    ], 40, _hoisted_5)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
