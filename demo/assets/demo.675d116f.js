import { c as createComponent } from "./component.01ad1bda.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.d5f0d4bc.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("watermark");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            default: "\u57FA\u7840\u7528\u6CD5"
          },
          button: {
            normal: "\u6587\u5B57\u6C34\u5370",
            multiLine: "\u591A\u884C\u6C34\u5370",
            image: "\u56FE\u7247\u6C34\u5370",
            gap: "\u7F29\u5C0F\u95F4\u8DDD"
          }
        },
        "en-US": {
          title: {
            default: "basic usage"
          },
          button: {
            normal: "Text Watermark",
            image: "Image Watermark",
            multiLine: "multiLine Watermark",
            gap: "change gap"
          }
        }
      });
    });
    const watermark = ref(null);
    const image = ref("");
    const text = ref("quark-design");
    const width = ref(120);
    const height = ref(64);
    const rotate = ref(-22);
    const gapx = ref(24);
    const gapy = ref(48);
    const changeText = () => {
      height.value = "64";
      width.value = "120";
      rotate.value = "-22";
      image.value = "";
      if (watermark.value)
        watermark.value.setText("quark-design");
    };
    const changeImage = () => {
      height.value = 36;
      width.value = 100;
      rotate.value = -12;
      image.value = "https://m.hellobike.com/resource/helloyun/16682/o7HKA_image.png?x-oss-process=image/quality,q_80";
    };
    const changeMultiText = () => {
      height.value = 64;
      width.value = 120;
      rotate.value = -22;
      image.value = "";
      if (watermark.value)
        watermark.value.setText(["quark-design", "A component library"]);
    };
    const changeGap = () => {
      gapx.value = 12;
      gapy.value = 24;
    };
    return {
      watermark,
      gapy,
      gapx,
      width,
      height,
      rotate,
      image,
      text,
      translate,
      changeText,
      changeMultiText,
      changeImage,
      changeGap
    };
  }
});
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = ["text", "image", "width", "height", "rotate", "gapx", "gapy"];
const _hoisted_3 = { class: "demo-buttons" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("quark-watermark", {
      ref: "watermark",
      text: _ctx.text,
      class: "demo-watermark",
      image: _ctx.image,
      width: _ctx.width,
      height: _ctx.height,
      rotate: _ctx.rotate,
      gapx: _ctx.gapx,
      gapy: _ctx.gapy
    }, null, 8, _hoisted_2),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.default")), 1),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("quark-button", {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeText && _ctx.changeText(...args))
      }, toDisplayString(_ctx.translate("button.normal")), 1),
      createBaseVNode("quark-button", {
        type: "primary",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.changeImage && _ctx.changeImage(...args))
      }, toDisplayString(_ctx.translate("button.image")), 1),
      createBaseVNode("quark-button", {
        type: "primary",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.changeGap && _ctx.changeGap(...args))
      }, toDisplayString(_ctx.translate("button.gap")), 1),
      createBaseVNode("quark-button", {
        type: "primary",
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.changeMultiText && _ctx.changeMultiText(...args))
      }, toDisplayString(_ctx.translate("button.multiLine")), 1)
    ])
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
