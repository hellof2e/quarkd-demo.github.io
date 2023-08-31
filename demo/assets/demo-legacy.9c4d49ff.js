;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="quark-marquee {\n  color: #ee8c02;\n}\nquark-marquee .line {\n  width: 100%;\n  height: 1px;\n  background: #fff;\n}\nquark-marquee .flex {\n  display: flex;\n  align-items: center;\n}\n.paused-button {\n  margin: 0 0 10px 20px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.69b98bb4.js','./mobile-legacy.6b6b28d8.js'],function(exports){'use strict';var createComponent,_export_sfc,reactive,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;reactive=module.G;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("marquee");const _sfc_main=createDemo({setup(){const isPaused=reactive({button:false,hover:false,click:false});onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",speed:"不同速度",paused:"暂停",pausedExmple:{button:{title:"控制暂停",pause:"暂停",continue:"继续"},hover:"悬浮暂停",click:"点击暂停"},reverse:"反转方向",content:"2022 年我们见证了很多技术的新发展新变化：低代码的突然爆火、数据库的接连开源、芯片的短缺与自研、训练模型的参数突破",alert:{return:"返回",clear:"清除"}},"en-US":{basic:"Basic Usage",speed:"Marqueen Speed",pausedExmple:{button:{title:"Control Paused",pause:"Pause",continue:"Continue"},hover:"Hover Paused",click:"Click Paused"},reverse:"Reverse Direction",content:"In 2022, we will witness many new developments and changes in technology: the sudden explosion of low-code, the continuous open source of databases, the shortage of chips and self-research, and the parameter breakthrough of training models",alert:{return:"Go Back",clear:"Clear"}}});});return{isPaused,translate};}});const _hoisted_1={class:"demo no-padding"};const _hoisted_2={class:"flex"};const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=/*#__PURE__*/createBaseVNode("br",null,null,-1);const _hoisted_6=["title"];const _hoisted_7=["title","paused"];const _hoisted_8=["title","paused"];const _hoisted_9=["title","paused"];const _hoisted_10=["title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-marquee",{title:_ctx.translate('content')},null,8,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("speed")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),speed:"25"},null,8,_hoisted_4),_hoisted_5,createBaseVNode("quark-marquee",{title:_ctx.translate('content'),speed:"100"},null,8,_hoisted_6),createBaseVNode("h2",null,toDisplayString(_ctx.translate("pausedExmple.button.title")),1),createBaseVNode("quark-button",{class:"paused-button",size:"small",onClick:_cache[0]||(_cache[0]=$event=>_ctx.isPaused.button=true)},toDisplayString(_ctx.translate("pausedExmple.button.pause")),1),createBaseVNode("quark-button",{class:"paused-button",size:"small",onClick:_cache[1]||(_cache[1]=$event=>_ctx.isPaused.button=false)},toDisplayString(_ctx.translate("pausedExmple.button.continue")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),paused:_ctx.isPaused.button},null,8,_hoisted_7),createBaseVNode("h2",null,toDisplayString(_ctx.translate("pausedExmple.hover")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),paused:_ctx.isPaused.hover,onMouseover:_cache[2]||(_cache[2]=$event=>_ctx.isPaused.hover=true),onMouseleave:_cache[3]||(_cache[3]=$event=>_ctx.isPaused.hover=false)},null,40,_hoisted_8),createBaseVNode("h2",null,toDisplayString(_ctx.translate("pausedExmple.click")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),paused:_ctx.isPaused.click,onClick:_cache[4]||(_cache[4]=$event=>_ctx.isPaused.click=!_ctx.isPaused.click)},null,8,_hoisted_9),createBaseVNode("h2",null,toDisplayString(_ctx.translate("reverse")),1),createBaseVNode("quark-marquee",{title:_ctx.translate('content'),reverse:true},null,8,_hoisted_10)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
