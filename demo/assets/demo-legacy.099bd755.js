;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".scope-rate .tag-container[data-v-1dba146e] {\n  margin: 5px;\n  margin-bottom: 30px;\n}\n.scope-rate quark-rate[data-v-1dba146e] {\n  color: rgb(238, 238, 238);\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.60ee65fe.js','./mobile-legacy.3bf73b3c.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;pushScopeId=module.p;popScopeId=module.l;}],execute:function(){var demo_scss_vue_type_style_index_0_src_scoped_true_lang='';const{createDemo,translate}=createComponent("rate");const _sfc_main=createDemo({setup(){const rate=ref(2);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",selectedColor:"自定义选中颜色",disabled:"禁用状态",readonly:"只读状态",event:"监听 change 事件"},"en-US":{basic:"Basic Usage",selectedColor:"Custom Selected Color",disabled:"Disabled",readonly:"Readonly",event:"Listen to change event"}});});onMounted(()=>{setTimeout(()=>{rate.value=3;},2000);});const handleChange=e=>{Toast.text(e.detail.value);};return{rate,handleChange,translate};}});const _withScopeId=n=>(pushScopeId("data-v-1dba146e"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo scope-rate"};const _hoisted_2=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container"},[/*#__PURE__*/createBaseVNode("quark-rate",{defaultvalue:"1"})],-1));const _hoisted_3=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container"},[/*#__PURE__*/createBaseVNode("quark-rate",{defaultvalue:"2",activecolor:"green"})],-1));const _hoisted_4=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container"},[/*#__PURE__*/createBaseVNode("quark-rate",{defaultvalue:"2",disabled:""})],-1));const _hoisted_5=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container"},[/*#__PURE__*/createBaseVNode("quark-rate",{defaultvalue:"2",readonly:""})],-1));const _hoisted_6={class:"tag-container"};const _hoisted_7=["value"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("selectedColor")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("disabled")),1),_hoisted_4,createBaseVNode("h2",null,toDisplayString(_ctx.translate("readonly")),1),_hoisted_5,createBaseVNode("h2",null,toDisplayString(_ctx.translate("event")),1),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-rate",{value:_ctx.rate,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.handleChange&&_ctx.handleChange(...args))},null,40,_hoisted_7)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-1dba146e"]]));}};});})();
