;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".stepper-demo .demo {\n  width: 100%;\n}\n.stepper-demo .quark-cell {\n  padding: 13px 16px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 7px #edeef1;\n  font-size: 14px;\n  color: #666;\n  margin: 10px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.stepper-demo .theme {\n  --stepper-input-text-color: black;\n  --stepper-input-background-color: white;\n  --stepper-input-font-size: 18px;\n  --stepper-button-border-radius: 50%;\n  --stepper-button-border-width: 1px;\n  --stepper-plus-background-color: red;\n  --stepper-plus-color: white;\n  --stepper-minus-background-color: white;\n  --stepper-minus-color: #ee0a24;\n  --stepper-minus-border-color: #ee0a24;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.6cc5f6b3.js','./mobile-legacy.2498f5cb.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("stepper");const _sfc_main=createDemo({setup(){const value=ref(1);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",limit:"限制输入范围",steps:"步长设置",interger:"限制输入整数",disabled:"禁用状态",call:"变更回调",css:"css属性"},"en-US":{basic:"Basic Usage",limit:"Limit Input Range",steps:"Steps Setting",interger:"Interger Limit",disabled:"Disabled",call:"Change Call",css:"CSS Style"}});});const changeValue=({detail})=>{value.value=detail.value;};const change=({detail})=>{Toast.text(detail.value);};const blur=({detail})=>{Toast.text("blur");};const focus=({detail})=>{Toast.text("focus");};return{value,changeValue,change,blur,focus,translate};}});const _hoisted_1={class:"demo stepper-demo"};const _hoisted_2={class:"quark-cell"};const _hoisted_3=["value"];const _hoisted_4=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-stepper",{min:"5",max:"12"})],-1);const _hoisted_5=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-stepper",{steps:"2"})],-1);const _hoisted_6=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-stepper",{interger:""})],-1);const _hoisted_7=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-stepper",{disabled:""})],-1);const _hoisted_8={class:"quark-cell"};const _hoisted_9=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-stepper",{class:"theme"})],-1);function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-stepper",{value:_ctx.value,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.changeValue&&_ctx.changeValue(...args))},null,40,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("limit")),1),_hoisted_4,createBaseVNode("h2",null,toDisplayString(_ctx.translate("steps")),1),_hoisted_5,createBaseVNode("h2",null,toDisplayString(_ctx.translate("interger")),1),_hoisted_6,createBaseVNode("h2",null,toDisplayString(_ctx.translate("disabled")),1),_hoisted_7,createBaseVNode("h2",null,toDisplayString(_ctx.translate("call")),1),createBaseVNode("div",_hoisted_8,[createBaseVNode("quark-stepper",{onChange:_cache[1]||(_cache[1]=(...args)=>_ctx.change&&_ctx.change(...args))},null,32)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("css")),1),_hoisted_9]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
