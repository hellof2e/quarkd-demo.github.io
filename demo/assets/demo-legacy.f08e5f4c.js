;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".demo-badge .demo-cell {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 76px);\n  padding: 13px 16px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 7px #edeef1;\n  font-size: 14px;\n  color: #666;\n  align-items: self-end;\n}\n.demo-badge .custom-background {\n  --badge-background: #666;\n}\n.demo-badge .custom-color {\n  --badge-background: #fff;\n  --badge-text-color: #fb990f;\n}\n.demo-badge .badge-container {\n  margin: 0 10px;\n  display: inline-flex;\n  align-items: center;\n}\n.demo-badge .dark {\n  padding: 5px;\n  background: #666;\n}\n.demo-badge .child {\n  height: 30px;\n  width: 30px;\n  background: #ccc;\n}\n.demo-badge .bg-color {\n  --badge-background: linear-gradient(90deg, blue, pink);\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.69b98bb4.js','./mobile-legacy.6b6b28d8.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createStaticVNode,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createStaticVNode=module.e;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("badge");const _sfc_main=createDemo({setup(){const num=ref(11);const change=()=>{num.value=num.value+1;};onBeforeMount(()=>{useTranslate({"zh-CN":{independent:"徽标独立使用",word:"文字徽标",word2:"最高立减5元",type:"徽标类型",size:"徽标大小",style:"徽标风格",digital:"数字徽标",custom:"自定义样式-背景色",normal:"普通徽标",border:"边框徽标"},"en-US":{independent:"Badge Independent Use",word:"Word Badge",word2:"Up to $5 off",type:"Badge Type",size:"Badge Size",style:"Badge Style",digital:"Digital Badge",custom:"Custom-Background",normal:"Normal Badge",border:"Border Badge"}});});return{num,change,translate};}});const _hoisted_1={class:"demo demo-badge"};const _hoisted_2=/*#__PURE__*/createBaseVNode("div",{class:"badge-container"},[/*#__PURE__*/createBaseVNode("quark-badge",{type:"dot"})],-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("div",{class:"badge-container"},[/*#__PURE__*/createBaseVNode("quark-badge",{type:"round",content:"9"})],-1);const _hoisted_4={class:"badge-container"};const _hoisted_5=["content"];const _hoisted_6={class:"badge-container"};const _hoisted_7=["content"];const _hoisted_8=/*#__PURE__*/createStaticVNode("<div class=\"badge-container\"><quark-badge type=\"dot\"><div class=\"child\"></div></quark-badge></div><div class=\"badge-container\"><quark-badge type=\"round\" content=\"9\"><div class=\"child\"></div></quark-badge></div>",2);const _hoisted_10=/*#__PURE__*/createStaticVNode("<div class=\"badge-container\"><quark-badge type=\"dot\"><div class=\"child\"></div></quark-badge></div><div class=\"badge-container\"><quark-badge content=\"9\"><div class=\"child\"></div></quark-badge></div><div class=\"badge-container\"><quark-badge type=\"dot\" size=\"big\"><div class=\"child\"></div></quark-badge></div><div class=\"badge-container\"><quark-badge size=\"big\" content=\"9\"><div class=\"child\"></div></quark-badge></div>",4);const _hoisted_14={class:"badge-container"};const _hoisted_15=["content"];const _hoisted_16={class:"badge-container dark"};const _hoisted_17=["content"];const _hoisted_18=/*#__PURE__*/createStaticVNode("<div class=\"badge-container\"><quark-badge content=\"9\"><div class=\"child\"></div></quark-badge></div><div class=\"badge-container\"><quark-badge content=\"100\" max=\"99\"><div class=\"child\"></div></quark-badge></div>",2);const _hoisted_20={class:"badge-container"};const _hoisted_21=["content"];const _hoisted_22=/*#__PURE__*/createBaseVNode("div",{class:"child"},null,-1);const _hoisted_23=[_hoisted_22];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("independent")),1),_hoisted_2,_hoisted_3,createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-badge",{type:"label",content:_ctx.translate('word')},null,8,_hoisted_5)]),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-badge",{type:"label",size:"big",content:_ctx.translate('word2')},null,8,_hoisted_7)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("type")),1),_hoisted_8,createBaseVNode("h2",null,toDisplayString(_ctx.translate("size")),1),_hoisted_10,createBaseVNode("h2",null,toDisplayString(_ctx.translate("style")),1),createBaseVNode("div",_hoisted_14,[createBaseVNode("quark-badge",{type:"label",content:_ctx.translate('normal'),size:"big"},null,8,_hoisted_15)]),createBaseVNode("div",_hoisted_16,[createBaseVNode("quark-badge",{border:"",type:"label",content:_ctx.translate('border'),size:"big"},null,8,_hoisted_17)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("digital")),1),_hoisted_18,createBaseVNode("h2",{onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.change&&_ctx.change(...args))},toDisplayString(_ctx.translate("custom")),1),createBaseVNode("div",_hoisted_20,[createBaseVNode("quark-badge",{class:"bg-color",content:_ctx.num},_hoisted_23,8,_hoisted_21)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
