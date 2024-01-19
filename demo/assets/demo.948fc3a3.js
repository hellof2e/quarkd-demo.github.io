import { c as createComponent } from "./component.e7ee0ce4.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, T as Toast, b as openBlock, p as pushScopeId, q as popScopeId } from "./mobile.fbc374c0.js";
import "./index.d0f35ae5.js";
import "./index.ff830196.js";
var demo_vue_vue_type_style_index_0_scoped_true_lang = "";
const { createDemo, translate } = createComponent("tabbar");
const _sfc_main = createDemo({
  setup() {
    const data = ref({
      activeIndex: 0,
      img1: "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",
      img2: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"
    });
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          title: {
            basic: "\u57FA\u7840\u7528\u6CD5",
            noicon: "\u4E0D\u5E26\u56FE\u6807",
            name: "\u9ED8\u8BA4\u6FC0\u6D3B\u83DC\u5355",
            badge: "\u5FBD\u6807\u63D0\u793A",
            color: "\u81EA\u5B9A\u4E49\u989C\u8272",
            event: "\u81EA\u5B9A\u4E49\u5207\u6362\u4E8B\u4EF6(\u53EF\u5236\u5B9A\u8DEF\u7531\u5207\u6362)",
            fixed: "\u56FA\u5B9A\u5E95\u90E8"
          },
          tabbar: {
            home: "\u9996\u9875",
            user: "\u6211\u7684",
            tel: "\u8054\u7CFB"
          }
        },
        "en-US": {
          title: {
            basic: "Basic Usage",
            noicon: "No Icon",
            name: "Default Active menu",
            badge: "Badge Tips",
            color: "Custom Color",
            event: "Custom Change Event",
            fixed: "Fixed"
          },
          tabbar: {
            home: "Home",
            user: "User",
            tel: "Tel"
          }
        }
      });
    });
    const onChange = ({ detail }) => {
      Toast.text(`\u5F53\u524D\u9009\u4E2D\uFF1A${detail.value}`);
    };
    return {
      data,
      onChange,
      translate
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-a092b524"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "demo no-padding" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", { size: "20" }, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "20" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", { size: "20" }, null, -1));
const _hoisted_5 = { active: "2" };
const _hoisted_6 = { name: "home" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", { size: "20" }, null, -1));
const _hoisted_8 = { name: "user" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "20" }, null, -1));
const _hoisted_10 = { name: "tel" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", { size: "20" }, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-home", { size: "20" }, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-user", { size: "20" }, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("quark-icon-tel", { size: "20" }, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.basic")), 1),
    createBaseVNode("quark-tabbar", {
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
    }, [
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_2,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.home")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_3,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.user")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_4,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.tel")), 1)
      ])
    ], 32),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.noicon")), 1),
    createBaseVNode("quark-tabbar", null, [
      createBaseVNode("quark-tabbar-item", null, toDisplayString(_ctx.translate("tabbar.home")), 1),
      createBaseVNode("quark-tabbar-item", null, toDisplayString(_ctx.translate("tabbar.user")), 1),
      createBaseVNode("quark-tabbar-item", null, toDisplayString(_ctx.translate("tabbar.tel")), 1)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.name")), 1),
    createBaseVNode("quark-tabbar", _hoisted_5, [
      createBaseVNode("quark-tabbar-item", _hoisted_6, [
        _hoisted_7,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.home")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", _hoisted_8, [
        _hoisted_9,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.user")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", _hoisted_10, [
        _hoisted_11,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.tel")), 1)
      ])
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title.fixed")), 1),
    createBaseVNode("quark-tabbar", {
      onChange: _cache[1] || (_cache[1] = (...args) => _ctx.onChange && _ctx.onChange(...args)),
      fixed: ""
    }, [
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_12,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.home")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_13,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.user")), 1)
      ]),
      createBaseVNode("quark-tabbar-item", null, [
        _hoisted_14,
        createBaseVNode("div", null, toDisplayString(_ctx.translate("tabbar.tel")), 1)
      ])
    ], 32)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a092b524"]]);
export { demo as default };
