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
import { c as createComponent } from "./component.dc66c692.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock, T as Toast } from "./mobile.a3f69a60.js";
import { o as onBeforeRouteLeave } from "./vue-router.e65fcf1c.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("uploader");
const _sfc_main = createDemo({
  setup() {
    const isPreview = ref(false);
    const preview = ref(null);
    const preview2 = ref(null);
    const preview3 = ref(null);
    const maxcount = ref(3);
    const previewUrls = [
      "https://img.yzcdn.cn/vant/leaf.jpg",
      "https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"
    ];
    const successUrl = [
      "https://m.hellobike.com/resource/helloyun/15697/JPjd2_WX20220830-141115.png?x-oss-process=image/quality,q_80",
      "https://m.hellobike.com/resource/helloyun/15697/Wc4c2_shop.png?x-oss-process=image/quality,q_80"
    ];
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          remove: "\u56FE\u7247\u5220\u9664",
          readonly: "\u53EA\u8BFB\u6A21\u5F0F"
        },
        "en-US": {
          basic: "Basic Usage",
          remove: "Picture Remove",
          readonly: "readonly"
        }
      });
    });
    onMounted(() => {
      console.log(preview3, "333");
      preview.value.setPreview(previewUrls);
      preview2.value.setPreview(previewUrls);
      preview3.value.setPreview(previewUrls);
    });
    const sleep = (time) => {
      return new Promise((reslove) => {
        setTimeout(() => {
          reslove(true);
        }, time);
      });
    };
    const callNative = () => __async(this, null, function* () {
      const toast = Toast.loading("\u5BA2\u6237\u7AEF\u4E0A\u4F20\u56FE\u7247\u4E2D");
      yield sleep(1e3);
      toast.hide();
      Toast.success("\u5BA2\u6237\u7AEF\u8FD4\u56DE\u6570\u636E");
      return Promise.resolve(successUrl);
    });
    const afterRead = (_0) => __async(this, [_0], function* ({ detail: data }) {
      const successData = yield callNative();
      const newData = data.concat(successData);
      preview.value.setPreview(newData);
    });
    const onremove = ({ detail: item }) => {
      console.log(item, "item");
    };
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-image-preview ");
      nodes.forEach((i) => i.open = false);
    });
    return {
      isPreview,
      preview,
      preview2,
      preview3,
      afterRead,
      translate,
      onremove,
      maxcount
    };
  }
});
const _hoisted_1 = { class: "demo uploader-demo" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["maxcount"];
const _hoisted_4 = { class: "flex" };
const _hoisted_5 = { class: "flex" };
const _hoisted_6 = {
  ref: "preview3",
  readonly: ""
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("quark-native-uploader", {
        ref: "preview",
        onOnread: _cache[0] || (_cache[0] = (...args) => _ctx.afterRead && _ctx.afterRead(...args)),
        maxcount: _ctx.maxcount
      }, null, 40, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("remove")), 1),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("quark-native-uploader", {
        ref: "preview2",
        onOnread: _cache[1] || (_cache[1] = (...args) => _ctx.afterRead && _ctx.afterRead(...args)),
        onOnremove: _cache[2] || (_cache[2] = (...args) => _ctx.onremove && _ctx.onremove(...args))
      }, null, 544)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("readonly")), 1),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("quark-native-uploader", _hoisted_6, null, 512)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
