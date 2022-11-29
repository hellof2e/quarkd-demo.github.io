import { c as createComponent } from "./component.d917cbab.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, y as renderList, e as createStaticVNode, b as openBlock } from "./mobile.978f18d0.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("image");
const _sfc_main = createDemo({
  setup() {
    const imgList = ref([
      "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      "https://m.hellobike.com/resource/helloyun/09764/sbESi_picture-2.jpeg",
      "https://m.hellobike.com/resource/helloyun/09764/uzhnQ_picture-3.jpeg",
      "https://m.hellobike.com/resource/helloyun/09764/1jm2V_picture-4.png",
      "https://m.hellobike.com/resource/helloyun/09764/uzuHB_picture-5.jpeg",
      "https://m.hellobike.com/resource/helloyun/09764/gyy6t_picture-6.jpeg"
    ]);
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          fit: "\u586B\u5145\u6837\u5F0F",
          round: "\u5706\u5F62\u56FE\u7247",
          loadingMention: "\u52A0\u8F7D\u4E2D\u63D0\u793A",
          loading: "\u52A0\u8F7D\u4E2D...",
          loadingFail: "\u52A0\u8F7D\u5931\u8D25\u63D0\u793A",
          lazy: "\u61D2\u52A0\u8F7D"
        },
        "en-US": {
          basic: "Basic Usage",
          fit: "Fit Style",
          round: "Round Image",
          loadingMention: "Loading Mention",
          loading: "Loading...",
          loadingFail: "Fail Mention",
          lazy: "Lazy Load"
        }
      });
    });
    return {
      imgList,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo image-demo" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell base-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-image", { src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg" })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
    /* @__PURE__ */ createBaseVNode("quark-image", {
      src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      fit: "contain"
    }),
    /* @__PURE__ */ createBaseVNode("p", null, "contain")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
    /* @__PURE__ */ createBaseVNode("quark-image", {
      src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      fit: "fill"
    }),
    /* @__PURE__ */ createBaseVNode("p", null, "fill")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
    /* @__PURE__ */ createBaseVNode("quark-image", {
      src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      fit: "cover"
    }),
    /* @__PURE__ */ createBaseVNode("p", null, "cover")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
    /* @__PURE__ */ createBaseVNode("quark-image", {
      src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      fit: "none"
    }),
    /* @__PURE__ */ createBaseVNode("p", null, "none")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
    /* @__PURE__ */ createBaseVNode("quark-image", {
      src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
      fit: "scale-down"
    }),
    /* @__PURE__ */ createBaseVNode("p", null, "scale-down")
  ])
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell" }, [
  /* @__PURE__ */ createBaseVNode("quark-image", {
    src: "https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",
    width: "100px",
    height: "100px",
    fit: "cover",
    round: ""
  })
], -1);
const _hoisted_5 = { class: "quark-cell" };
const _hoisted_6 = { class: "quark-cell-item" };
const _hoisted_7 = {
  src: "",
  width: "100px",
  height: "100px"
};
const _hoisted_8 = { slot: "error" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "quark-cell-item" }, [
  /* @__PURE__ */ createBaseVNode("quark-image", {
    src: "",
    width: "100px",
    height: "100px"
  }, [
    /* @__PURE__ */ createBaseVNode("div", { slot: "error" }, [
      /* @__PURE__ */ createBaseVNode("quark-loading")
    ])
  ])
], -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<div class="quark-cell"><div class="quark-cell-item"><quark-image src="https://m.hellobike.com/resource/helloyun" width="100" height="100"></quark-image></div><div class="quark-cell-item"><quark-image src="/hero.jpg" width="100" height="100"><div slot="error"><img src="https://m.hellobike.com/resource/helloyun/09764/ZYtvcQv7AH.png" alt="" class="error-img"></div></quark-image></div></div>', 1);
const _hoisted_11 = { class: "quark-cell quark-cell-list" };
const _hoisted_12 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    _hoisted_2,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("fit")), 1),
    _hoisted_3,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("round")), 1),
    _hoisted_4,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("loadingMention")), 1),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("quark-image", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.translate("loading")), 1)
        ])
      ]),
      _hoisted_9
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("loadingFail")), 1),
    _hoisted_10,
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("lazy")), 1),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imgList, (img) => {
      return openBlock(), createElementBlock("div", _hoisted_11, [
        (openBlock(), createElementBlock("quark-image", {
          src: img,
          class: "img-box",
          key: img,
          lazy: ""
        }, null, 8, _hoisted_12))
      ]);
    }), 256))
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
