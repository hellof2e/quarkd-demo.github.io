;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".empty-demo {\n  background-color: #fff !important;\n}\n.empty-demo .outer {\n  display: flex;\n  justify-content: center;\n  margin: 20px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.f9b06e17.js','./mobile-legacy.efba8d8c.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("empty");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",desc:"描述文字",image:"自定义图片",bottom:"自定义底部",title:"没有历史订单",order:"快去下一单吧!",return:"返回首页",button:"去下单"},"en-US":{basic:"Basic Usage",desc:"Description",image:"Custom Image",bottom:"Csutom Bottom",title:"No Order History",order:"Go and Order!",return:"Back to Home",button:"Go to Order"}});});return{translate};}});const _hoisted_1={class:"demo empty-demo"};const _hoisted_2=/*#__PURE__*/createBaseVNode("quark-empty",null,null,-1);const _hoisted_3=["title","desc"];const _hoisted_4=["desc"];const _hoisted_5=["desc","title"];const _hoisted_6={class:"outer",slot:"footer"};const _hoisted_7={style:{"margin-right":"10px"}};const _hoisted_8={type:"primary"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("desc")),1),createBaseVNode("quark-empty",{title:_ctx.translate('title'),desc:_ctx.translate('order')},null,8,_hoisted_3),createBaseVNode("h2",null,toDisplayString(_ctx.translate("image")),1),createBaseVNode("quark-empty",{desc:_ctx.translate('order'),imagesize:"100",image:"https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png"},null,8,_hoisted_4),createBaseVNode("h2",null,toDisplayString(_ctx.translate("bottom")),1),createBaseVNode("quark-empty",{desc:_ctx.translate('order'),title:_ctx.translate('title')},[createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-button",_hoisted_7,toDisplayString(_ctx.translate("return")),1),createBaseVNode("quark-button",_hoisted_8,toDisplayString(_ctx.translate("button")),1)])],8,_hoisted_5)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
