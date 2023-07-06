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
import { c as createComponent } from "./component.d3f54638.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, T as Toast, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.85d2488f.js";
import { o as onBeforeRouteLeave } from "./vue-router.1fb494e1.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("uploader");
const _sfc_main = createDemo({
  setup() {
    const isPreview = ref(null);
    const preview = ref(null);
    const preview2 = ref(null);
    const before = ref(null);
    const uploadStatus = ref(null);
    const oversizeRef = ref(null);
    const customPreviewIcon = ref(null);
    const previewUrls = [
      "https://m.hellobike.com/resource/helloyun/15697/9VgwC_Screenshot_20220215_191457_com.jingyao.easybike.jpg?x-oss-process=image/quality,q_80",
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
    ];
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          preview: "\u6587\u4EF6\u9884\u89C8",
          status: "\u4E0A\u4F20\u72B6\u6001",
          previewMode: "\u9884\u89C8\u6A21\u5F0F",
          limit: "\u9650\u5236\u4E0A\u4F20\u6570\u91CF",
          size: "\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",
          custom: "\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",
          customPreviewIcon: "\u81EA\u5B9A\u4E49\u9884\u89C8\u5220\u9664 icon",
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
          status: "upload status",
          previewMode: "File Preview Mode",
          limit: "Limit Uploads Number",
          size: "Limit Uploads Size",
          custom: "Custom Upload Style",
          customPreviewIcon: "Custom predictive deletion icon",
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
      uploadStatus.value.setPreview(previewUrls);
      customPreviewIcon.value.setPreview(previewUrls);
      const tasks = uploadStatus.value.tasks;
      tasks.forEach((i, index) => {
        if (!index) {
          uploadStatus.value.setStatus(__spreadProps(__spreadValues({}, i), {
            status: "uploading"
          }));
        }
      });
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
    const oversize = ({ detail: { items, maxsize } }) => {
      console.log(items, maxsize);
      Toast.text(`${translate("toast.overSize")}`);
    };
    const uploadAction = (item, status = "done") => __async(this, null, function* () {
      preview.value.setStatus(__spreadProps(__spreadValues({}, item), {
        status: "uploading",
        message: "\u4E0A\u4F20\u4E2D"
      }));
      yield sleep(2e3);
      preview.value.setStatus(__spreadProps(__spreadValues({}, item), {
        status
      }));
      Toast.success("\u4E0A\u4F20\u6210\u529F");
    });
    const afterRead = (_0, _1) => __async(this, [_0, _1], function* ({ detail: file }, isDefault) {
      if (isDefault) {
        Toast.text(`success: the file is ${file.file.name}`);
        return;
      }
      if (Array.isArray(file)) {
        for (let i = 0; i < file.length; i++) {
          const item = file[i];
          if (i === 0)
            uploadAction(item);
          else
            uploadAction(item);
        }
      } else {
        uploadAction(file);
      }
    });
    const afterReadStatus = (_0) => __async(this, [_0], function* ({ detail: file }) {
      uploadStatus.value.setStatus(__spreadProps(__spreadValues({}, file), {
        status: "uploading",
        message: "\u4E0A\u4F20\u4E2D"
      }));
      yield sleep(2e3);
      uploadStatus.value.setStatus(__spreadProps(__spreadValues({}, file), {
        status: "failed"
      }));
      Toast.success(`${file.file.name}\u4E0A\u4F20\u5931\u8D25`);
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
      uploadStatus,
      beforeUpload,
      oversize,
      oversizeRef,
      afterRead,
      translate,
      afterReadStatus,
      customPreviewIcon
    };
  }
});
const _hoisted_1 = { class: "demo uploader-demo" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["preview"];
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "flex" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex" }, [
  /* @__PURE__ */ createBaseVNode("quark-uploader", {
    maxcount: "2",
    preview: ""
  })
], -1);
const _hoisted_7 = { class: "flex" };
const _hoisted_8 = { preview: "" };
const _hoisted_9 = {
  type: "primary",
  slot: "uploader",
  icon: "home"
};
const _hoisted_10 = { class: "flex closeimg" };
const _hoisted_11 = {
  preview: "",
  ref: "customPreviewIcon",
  closeimg: "https://m.hellobike.com/resource/helloyun/15697/dEYF0_round_close_fill.png?x-oss-process=image/quality,q_80"
};
const _hoisted_12 = {
  preview: "",
  ref: "before"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("quark-uploader", {
  preview: "",
  disabled: true
}, null, -1);
const _hoisted_14 = { class: "flex" };
const _hoisted_15 = {
  ref: "preview2",
  preview: "",
  readonly: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-uploader", {
        onAfterread: _cache[0] || (_cache[0] = (val) => _ctx.afterRead(val, true)),
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
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("status")), 1),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("quark-uploader", {
        onAfterread: _cache[2] || (_cache[2] = (...args) => _ctx.afterReadStatus && _ctx.afterReadStatus(...args)),
        ref: "uploadStatus",
        preview: ""
      }, null, 544)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("limit")), 1),
    _hoisted_6,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("size")), 1),
    createBaseVNode("quark-uploader", {
      maxsize: "1024",
      onOversize: _cache[3] || (_cache[3] = (...args) => _ctx.oversize && _ctx.oversize(...args)),
      ref: "oversizeRef"
    }, null, 544),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("custom")), 1),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("quark-uploader", _hoisted_8, [
        createBaseVNode("quark-button", _hoisted_9, toDisplayString(_ctx.translate("file")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customPreviewIcon")), 1),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("quark-uploader", _hoisted_11, null, 512)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("before")), 1),
    createBaseVNode("quark-uploader", _hoisted_12, null, 512),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("disabled")), 1),
    _hoisted_13,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("previewMode")), 1),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("quark-uploader", _hoisted_15, null, 512)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
