import { c as createComponent } from "./component.3510fc30.js";
import { _ as _export_sfc, r as ref, f as onMounted, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, D as createCommentVNode, E as MarketDialog, b as openBlock } from "./mobile.f630d0fa.js";
import { o as onBeforeRouteLeave } from "./vue-router.d73e4ad5.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("marketdialog");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    let value = 0;
    onMounted(() => {
      let t = setInterval(() => {
        if (value >= 100)
          clearInterval(t);
        else
          value += 10;
      }, 1e3);
    });
    const showDialog = () => {
      MarketDialog({
        url: "https://m.hellobike.com/resource/helloyun/15697/95WGX_i-hb-zyj220904-2-2.jpeg?x-oss-process=image/quality,q_80"
      });
    };
    const showDialog2 = () => {
      MarketDialog({
        url: "https://m.hellobike.com/resource/helloyun/15697/qxlI2_no_network.png"
      });
    };
    const showDialog3 = () => {
      open.value = true;
    };
    const close = () => {
      open.value = false;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u7840\u7528\u6CD5",
          tab: "\u6807\u7B7E\u5F0F\u8C03\u7528",
          type: {
            basic: "\u57FA\u7840\u5F39\u7A97",
            irregular: "\u4E0D\u89C4\u5219\u5F39\u7A97",
            custom: "\u81EA\u5B9A\u4E49\u5185\u5BB9"
          }
        },
        "en-US": {
          basic: "Basic Usage",
          tab: "Tab Call",
          type: {
            basic: "Basic Dialog",
            irregular: "Irregular Dialog",
            custom: "Custom Content"
          }
        }
      });
    });
    onBeforeRouteLeave(() => {
      const nodes = document.querySelectorAll("quark-market-dialog");
      nodes.forEach((i) => i.open = false);
    });
    return {
      open,
      showDialog,
      showDialog2,
      showDialog3,
      close,
      translate
    };
  }
});
const _hoisted_1 = { class: "scope-market demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["open"];
const _hoisted_6 = {
  key: 0,
  controls: "",
  width: "320",
  slot: "market"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("source", {
  src: "https://m.hellobike.com/resource/helloyun/15697/B_TtZ_big_buck_bunny.mp4",
  type: "video/mp4"
}, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.showDialog()),
        title: _ctx.translate("type.basic")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.showDialog2()),
        title: _ctx.translate("type.irregular")
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("tab")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.showDialog3()),
        title: _ctx.translate("type.custom")
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("quark-market-dialog", {
      open: _ctx.open,
      onClose: _cache[3] || (_cache[3] = (...args) => _ctx.close && _ctx.close(...args))
    }, [
      _ctx.open ? (openBlock(), createElementBlock("video", _hoisted_6, _hoisted_8)) : createCommentVNode("", true)
    ], 40, _hoisted_5)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
