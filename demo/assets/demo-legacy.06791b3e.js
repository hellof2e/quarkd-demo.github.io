;(function(){System.register(['./component-legacy.136e4062.js','./mobile-legacy.cd2b086f.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("sticky");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",offset:"吸顶距离",otherUnits:"其他单位"},"en-US":{basic:"Basic Usage",offset:"Offset Top",otherUnits:"Other Units"}});});return{translate};}});const _hoisted_1={class:"demo sticky-demo",style:{"padding-left":"0","height":"150vh"}};const _hoisted_2={offsettop:"17vw"};const _hoisted_3={type:"primary",shape:"square"};const _hoisted_4={offsettop:"45vw"};const _hoisted_5={type:"primary",shape:"square",style:{"margin-left":"100px"}};const _hoisted_6={offsettop:"150px"};const _hoisted_7={type:"primary",shape:"square",style:{"margin-left":"180px"}};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-sticky",_hoisted_2,[createBaseVNode("quark-button",_hoisted_3,toDisplayString(_ctx.translate("basic")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("offset")),1),createBaseVNode("quark-sticky",_hoisted_4,[createBaseVNode("quark-button",_hoisted_5,toDisplayString(_ctx.translate("offset")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("otherUnits")),1),createBaseVNode("quark-sticky",_hoisted_6,[createBaseVNode("quark-button",_hoisted_7,toDisplayString(_ctx.translate("otherUnits")),1)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
