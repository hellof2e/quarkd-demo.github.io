;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".skeleton-demo .quark-cell {\n  display: flex;\n}\n.skeleton-demo quark-switch {\n  margin-bottom: 20px;\n}\n.skeleton-demo .demo-preview {\n  display: flex;\n}\n.skeleton-demo .demo-preview img {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  margin-right: 16px;\n}\n.skeleton-demo .demo-preview .demo-content h3 {\n  margin: 0;\n  font-size: 18px;\n  line-height: 20px;\n}\n.skeleton-demo .demo-preview .demo-content p {\n  margin: 13px 0 0;\n  font-size: 14px;\n  line-height: 20px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.867e54e9.js','./mobile-legacy.e49391c2.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("skeleton");const _sfc_main=createDemo({setup(){const data=ref({checked:false,hide:false});onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",avator:"显示头像、标题",rowwidths:"设置宽度",childComponent:"显示子组件",about:"关于 Quark",des:"Quark 是一款基于 Web Components 的跨框架 UI 组件库。"},"en-US":{basic:"Basic Usage",avator:"Show Avatar、Title",rowwidths:"Set row width",childComponent:"Show childComponent",about:"About Quark",des:"Quark is a cross-frame UI component library based on Web Components."}});});const handleSwitch=e=>{data.value.checked=e.detail.value;data.value.hide=e.detail.value;};return{data,handleSwitch,translate};}});const _hoisted_1={class:"demo skeleton-demo",style:{"background":"#fff"}};const _hoisted_2=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell base-cell"},[/*#__PURE__*/createBaseVNode("quark-skeleton",{row:2})],-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell base-cell"},[/*#__PURE__*/createBaseVNode("quark-skeleton",{title:"",avatar:"",row:2})],-1);const _hoisted_4=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell base-cell"},[/*#__PURE__*/createBaseVNode("quark-skeleton",{title:"",avatar:"",row:2,rowwidths:"100%,20%"})],-1);const _hoisted_5=["checked"];const _hoisted_6={class:"quark-cell base-cell"};const _hoisted_7=["hide"];const _hoisted_8={class:"demo-preview"};const _hoisted_9=/*#__PURE__*/createBaseVNode("img",{src:"https://m.hellobike.com/resource/helloyun/13459/BI7jn_quark-logo.png",alt:""},null,-1);const _hoisted_10={class:"demo-content"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("avator")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("rowwidths")),1),_hoisted_4,createBaseVNode("h2",null,toDisplayString(_ctx.translate("childComponent")),1),createBaseVNode("quark-switch",{checked:_ctx.data.checked,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.handleSwitch&&_ctx.handleSwitch(...args))},null,40,_hoisted_5),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-skeleton",{title:"",avatar:"",row:2,hide:_ctx.data.hide},[createBaseVNode("div",_hoisted_8,[_hoisted_9,createBaseVNode("div",_hoisted_10,[createBaseVNode("h3",null,toDisplayString(_ctx.translate("about")),1),createBaseVNode("p",null,toDisplayString(_ctx.translate("des")),1)])])],8,_hoisted_7)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
