;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="\n.pull-content[data-v-c4042356] {\n\tpadding: 16px;\n\theight: 475px;\n}\n.refresh-text[data-v-c4042356] {\n\tfont-size: 14px;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-end;\n\tpadding-bottom: 16px;\n\tbox-sizing: border-box;\n\tcolor: #879099;\n}\n.refresh-text img[data-v-c4042356] {\n\twidth: 20px;\n\theight: 20px;\n\tmargin-right: 4px;\n}\n";document.head.appendChild(__vite_style__);System.register(['./component-legacy.2ea50aa3.js','./mobile-legacy.fb1c9b8e.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createTextVNode,Toast,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createTextVNode=module.C;Toast=module.T;openBlock=module.b;pushScopeId=module.p;popScopeId=module.l;}],execute:function(){var demo_vue_vue_type_style_index_0_scoped_true_lang='';const{createDemo,translate}=createComponent("pullrefresh");const _sfc_main=createDemo({setup(){const data=ref({loading1:false,loading2:false,loading3:false,count1:0,count2:0,count3:0});onBeforeMount(()=>{useTranslate({"zh-CN":{darkBackground:"深色背景",lightBackground:"浅色背景",customContent:"自定义内容",tip:"下拉提示",constantRefresh:"松开立即刷新",refreshing:"正在刷新数据...",refreshCount:"刷新次数",refreshSuccess:"刷新成功"},"en-US":{darkBackground:"Dark Background",lightBackground:"Light Background",customContent:"Custom Content",tip:"Drop Down Prompt",constantRefresh:"Release To Refresh Now",refreshing:"Refreshing...",refreshCount:"Number Of Refreshes ",refreshSuccess:"Refresh Success"}});});const onFresh1=()=>{data.value.loading1=true;setTimeout(()=>{Toast.success(`${translate("refreshSuccess")}`);data.value.loading1=false;data.value.count1++;},1000);};const onFresh2=()=>{data.value.loading2=true;setTimeout(()=>{Toast.success(`${translate("refreshSuccess")}`);data.value.loading2=false;data.value.count2++;},1000);};const onFresh3=()=>{data.value.loading3=true;setTimeout(()=>{Toast.success(`${translate("refreshSuccess")}`);data.value.loading3=false;data.value.count3++;},1000);};return{data,onFresh1,onFresh2,onFresh3,translate};}});const _withScopeId=n=>(pushScopeId("data-v-c4042356"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo no-padding"};const _hoisted_2=["label"];const _hoisted_3=["loading"];const _hoisted_4={slot:"content",class:"pull-content"};const _hoisted_5=["label"];const _hoisted_6=["loading"];const _hoisted_7={slot:"content",class:"pull-content"};const _hoisted_8=["label"];const _hoisted_9=["loading"];const _hoisted_10={slot:"content",class:"pull-content"};const _hoisted_11={class:"refresh-text",slot:"pulling"};const _hoisted_12=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("img",{src:"https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg"},null,-1));const _hoisted_13={class:"refresh-text",slot:"loosing"};const _hoisted_14=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("img",{src:"https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg"},null,-1));const _hoisted_15={class:"refresh-text",slot:"loading"};const _hoisted_16={size:"18"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("quark-tabs",null,[createBaseVNode("quark-tab-content",{label:_ctx.translate('darkBackground')},[createBaseVNode("quark-pull-refresh",{dark:"",loading:_ctx.data.loading2,onRefresh:_cache[0]||(_cache[0]=(...args)=>_ctx.onFresh2&&_ctx.onFresh2(...args))},[createBaseVNode("div",_hoisted_4,toDisplayString(_ctx.translate("refreshCount"))+": "+toDisplayString(_ctx.data.count2),1)],40,_hoisted_3)],8,_hoisted_2),createBaseVNode("quark-tab-content",{label:_ctx.translate('lightBackground')},[createBaseVNode("quark-pull-refresh",{loading:_ctx.data.loading1,onRefresh:_cache[1]||(_cache[1]=(...args)=>_ctx.onFresh1&&_ctx.onFresh1(...args))},[createBaseVNode("div",_hoisted_7,toDisplayString(_ctx.translate("refreshCount"))+": "+toDisplayString(_ctx.data.count1),1)],40,_hoisted_6)],8,_hoisted_5),createBaseVNode("quark-tab-content",{label:_ctx.translate('customContent')},[createBaseVNode("quark-pull-refresh",{loading:_ctx.data.loading3,onRefresh:_cache[2]||(_cache[2]=(...args)=>_ctx.onFresh3&&_ctx.onFresh3(...args))},[createBaseVNode("div",_hoisted_10,toDisplayString(_ctx.translate("refreshCount"))+": "+toDisplayString(_ctx.data.count3),1),createBaseVNode("div",_hoisted_11,[_hoisted_12,createTextVNode(toDisplayString(_ctx.translate("tip")),1)]),createBaseVNode("div",_hoisted_13,[_hoisted_14,createTextVNode(toDisplayString(_ctx.translate("constantRefresh")),1)]),createBaseVNode("div",_hoisted_15,[createBaseVNode("quark-loading",_hoisted_16,toDisplayString(_ctx.translate("refreshing")),1)])],40,_hoisted_9)],8,_hoisted_8)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-c4042356"]]));}};});})();
