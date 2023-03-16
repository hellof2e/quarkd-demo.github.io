;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".swipe-demo quark-swipe-item > div {\n  width: 100%;\n  height: 200px;\n  color: #fff;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swipe-demo quark-swipe-item:nth-child(odd) > div {\n  background-color: #66c6f2;\n}\n.swipe-demo quark-swipe-item:nth-child(even) > div {\n  background-color: #39a9ed;\n}\n.swipe-demo .custom-indicator {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  padding: 2px 5px;\n  color: #fff;\n  font-size: 12px;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 2;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.5c05dcb4.js','./mobile-legacy.ffa765d1.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createStaticVNode,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createStaticVNode=module.e;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("swipe");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基本使用",indicator:"圆形指示器",auto:"自动播放",settings:"设置默认选中的swipeItem",slider:"自定义滑块大小",color:"设置指示器颜色",custom:"自定义指示器"},"en-US":{basic:"Basic Usage",indicator:"Circular Indicator",auto:"Auto PLay",settings:"Set Default Swipe Item",slider:"Custom Slider Size",color:"Set Indicator Color",custom:"Custom Indicator"}});});const onChange=e=>{};const customChange=e=>{const indicator=document.getElementById("indicator");indicator.innerHTML=`${e.detail.index+1} / 4`;};return{onChange,customChange,translate};}});const _hoisted_1={class:"demo swipe-demo",style:{"padding-left":"0","padding-right":"0"}};const _hoisted_2=/*#__PURE__*/createBaseVNode("quark-swipe",{inactivecolor:"#fff"},[/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"1")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"2")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"3")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"4")])],-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("quark-swipe",{type:"round",inactivecolor:"#fff"},[/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"1")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"2")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"3")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"4")])],-1);const _hoisted_4=/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"1")],-1);const _hoisted_5=/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"2")],-1);const _hoisted_6=/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"3")],-1);const _hoisted_7=/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"4")],-1);const _hoisted_8=[_hoisted_4,_hoisted_5,_hoisted_6,_hoisted_7];const _hoisted_9=/*#__PURE__*/createBaseVNode("quark-swipe",{defaultindex:2},[/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"1")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"2")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"3")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"4")])],-1);const _hoisted_10=/*#__PURE__*/createStaticVNode("<div class=\"custom-container\"><quark-swipe class=\"custom-style\"><quark-swipe-item><div class=\"one\">1</div></quark-swipe-item><quark-swipe-item><div class=\"two\">2</div></quark-swipe-item><quark-swipe-item><div class=\"one\">3</div></quark-swipe-item><quark-swipe-item><div class=\"two\">4</div></quark-swipe-item></quark-swipe></div>",1);const _hoisted_11=/*#__PURE__*/createBaseVNode("quark-swipe",{activecolor:"red"},[/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"1")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"2")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"one"},"3")]),/*#__PURE__*/createBaseVNode("quark-swipe-item",null,[/*#__PURE__*/createBaseVNode("div",{class:"two"},"4")])],-1);const _hoisted_12=/*#__PURE__*/createStaticVNode("<quark-swipe-item><div class=\"one\">1</div></quark-swipe-item><quark-swipe-item><div class=\"two\">2</div></quark-swipe-item><quark-swipe-item><div class=\"one\">3</div></quark-swipe-item><quark-swipe-item><div class=\"two\">4</div></quark-swipe-item><div id=\"indicator\" slot=\"indicators\" class=\"custom-indicator\">1 / 4</div>",5);const _hoisted_17=[_hoisted_12];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("indicator")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("auto")),1),createBaseVNode("quark-swipe",{id:"quark-swipe-event",autoplay:"",onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.onChange&&_ctx.onChange(...args))},_hoisted_8,32),createBaseVNode("h2",null,toDisplayString(_ctx.translate("settings")),1),_hoisted_9,createBaseVNode("h2",null,toDisplayString(_ctx.translate("slider")),1),_hoisted_10,createBaseVNode("h2",null,toDisplayString(_ctx.translate("color")),1),_hoisted_11,createBaseVNode("h2",null,toDisplayString(_ctx.translate("custom")),1),createBaseVNode("quark-swipe",{id:"custom-indicator",onChange:_cache[1]||(_cache[1]=(...args)=>_ctx.customChange&&_ctx.customChange(...args))},_hoisted_17,32)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
