var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import { c as createComponent } from "./component.24b47aac.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.7a4b697f.js";
import { o as onBeforeRouteLeave } from "./vue-router.678dff5a.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("uploader");
const _sfc_main = createDemo({
  setup() {
    const isPreview = ref(false);
    const preview = ref(null);
    const preview2 = ref(null);
    const before = ref(null);
    const previewUrls = [
      "https://img.yzcdn.cn/vant/leaf.jpg",
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
    ];
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          preview: "\u6587\u4EF6\u9884\u89C8",
          previewMode: "\u9884\u89C8\u6A21\u5F0F",
          limit: "\u9650\u5236\u4E0A\u4F20\u6570\u91CF",
          size: "\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",
          custom: "\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",
          file: "\u4E0A\u4F20\u6587\u4EF6",
          before: "\u4E0A\u4F20\u524D\u7F6E",
          disabled: "\u7981\u6B62\u4E0A\u4F20",
          toast: {
            format: "\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",
            overSize: "\u6709\u6587\u4EF6\u8D85\u8FC71KB\u4E86\u54E6"
          }
        },
        "en-US": {
          basic: "Basic Usage",
          preview: "File Preview",
          previewMode: "File Preview Mode",
          limit: "Limit Uploads Number",
          size: "Limit Uploads Size",
          custom: "Custom Upload Style",
          file: "Upload File",
          before: "Before Uploading",
          disabled: "Disabled",
          toast: {
            format: "Please upload image in jpg format",
            overSize: "There are files over 1KB"
          }
        }
      });
    });
    onMounted(() => {
      preview.value.setPreview(previewUrls);
      preview2.value.setPreview(previewUrls);
      before.value.beforeUpload = beforeUpload;
    });
    const sleep = (time) => {
      return new Promise((reslove) => {
        setTimeout(() => {
          reslove(true);
        }, time);
      });
    };
    const beforeUpload = (files) => {
      const r = files.every((file) => file.type === "image/jpg");
      if (!r) {
        Toast.text(`${translate("toast.format")}`);
        return false;
      }
      return true;
    };
    const oversize = () => {
      Toast.text(`${translate("toast.overSize")}`);
    };
    const uploadAction = (item) => __async(this, null, function* () {
      preview.value.setStatus(__spreadProps(__spreadValues({}, item), {
        status: "uploading",
        message: "\u4E0A\u4F20\u4E2D"
      }));
      yield sleep(2e3);
      preview.value.setStatus(__spreadProps(__spreadValues({}, item), {
        status: "done"
      }));
      Toast.success("\u4E0A\u4F20\u6210\u529F");
    });
    const afterRead = (_0) => __async(this, [_0], function* ({ detail: file }) {
      if (Array.isArray(file)) {
        for (let i = 0; i < file.length; i++) {
          const item = file[i];
          uploadAction(item);
        }
      } else {
        uploadAction(file);
      }
    });
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-image-preview ");
      nodes.forEach((i) => i.open = false);
    });
    return {
      isPreview,
      preview,
      preview2,
      before,
      beforeUpload,
      oversize,
      afterRead,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo uploader-demo" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["preview"];
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex" }, [
  /* @__PURE__ */ createBaseVNode("quark-uploader", {
    maxcount: "2",
    preview: ""
  })
], -1);
const _hoisted_6 = { class: "flex" };
const _hoisted_7 = { preview: "" };
const _hoisted_8 = {
  type: "primary",
  slot: "uploader",
  icon: "home"
};
const _hoisted_9 = {
  preview: "",
  ref: "before"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("quark-uploader", {
  preview: "",
  disabled: true
}, null, -1);
const _hoisted_11 = { class: "flex" };
const _hoisted_12 = {
  ref: "preview2",
  preview: "",
  readonly: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-uploader", {
        onAfterread: _cache[0] || (_cache[0] = (...args) => _ctx.afterRead && _ctx.afterRead(...args)),
        preview: _ctx.isPreview
      }, null, 40, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("preview")), 1),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-uploader", {
        onAfterread: _cache[1] || (_cache[1] = (...args) => _ctx.afterRead && _ctx.afterRead(...args)),
        ref: "preview",
        preview: ""
      }, null, 544)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("limit")), 1),
    _hoisted_5,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("size")), 1),
    createBaseVNode("quark-uploader", {
      maxsize: "1024",
      onOversize: _cache[2] || (_cache[2] = (...args) => _ctx.oversize && _ctx.oversize(...args)),
      ref: "oversize"
    }, null, 544),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("custom")), 1),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("quark-uploader", _hoisted_7, [
        createBaseVNode("quark-button", _hoisted_8, toDisplayString(_ctx.translate("file")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("before")), 1),
    createBaseVNode("quark-uploader", _hoisted_9, null, 512),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_10,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("previewMode")), 1),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("quark-uploader", _hoisted_12, null, 512)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
