;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".steps-demo .item-wrap {\n  padding: 16px;\n  background: #fff;\n}\n.steps-demo .item-horizontal {\n  padding: 16px 0 0;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.054155ef.js','./mobile-legacy.ece471a2.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.g;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("steps");const _sfc_main=createDemo({setup(){const data=ref({title:`${translate("status.doing.title")}`,content:`${translate("status.doing.content")}`,status:"doing"});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基本用法",desc:"标题和描述信息",vertical:"竖向步骤条"},steps:{step1:"步骤一",step2:"步骤二",step3:"步骤三"},status:{done:{title:"已完成",content:"您的订单已经打包完成，商品已发出"},todo:{title:"未开始",content:"收货地址为：杭州市益展商务大厦"},doing:{title:"进行中",content:"您的订单正在配送中..."}}},"en-US":{title:{basic:"Basic Usage",desc:"Title and Description",vertical:"Vertical Steps"},steps:{step1:"Step One",step2:"Step Two",step3:"Step Three"},status:{done:{title:"Finished",content:"Your order has been packed and the item has been dispatched"},todo:{title:"Not Started",content:"The delivery address is: 16F, Yizhan Business Building, Hangzhou"},doing:{title:"Processing",content:"Your order is being shipped..."}}}});});onMounted(()=>{setTimeout(()=>{data.value.title=`${translate("status.done.title")}`;data.value.content=`${translate("status.done.content")}`;data.value.status="done";},5000);});return{data,translate};}});const _hoisted_1={class:"demo no-padding steps-demo"};const _hoisted_2={class:"item-wrap item-horizontal"};const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["title"];const _hoisted_6={class:"item-wrap item-horizontal"};const _hoisted_7=["title","content"];const _hoisted_8=["status","title","content"];const _hoisted_9=["title","content"];const _hoisted_10={class:"item-wrap"};const _hoisted_11={direction:"vertical"};const _hoisted_12=["title","content"];const _hoisted_13=["title","content"];const _hoisted_14=["title","content"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-steps",null,[createBaseVNode("quark-step",{status:"done",title:_ctx.translate('steps.step1'),order:"1"},null,8,_hoisted_3),createBaseVNode("quark-step",{status:"doing",title:_ctx.translate('steps.step2'),order:"2"},null,8,_hoisted_4),createBaseVNode("quark-step",{status:"todo",title:_ctx.translate('steps.step3'),order:"3"},null,8,_hoisted_5)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.desc")),1),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-steps",null,[createBaseVNode("quark-step",{status:"done",title:_ctx.translate('status.done.title'),content:_ctx.translate('status.done.content'),order:"1"},null,8,_hoisted_7),createBaseVNode("quark-step",{status:_ctx.data.status,title:_ctx.data.title,content:_ctx.data.content,order:"2"},null,8,_hoisted_8),createBaseVNode("quark-step",{status:"todo",title:_ctx.translate('status.todo.title'),content:_ctx.translate('status.todo.content'),order:"3"},null,8,_hoisted_9)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.vertical")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-steps",_hoisted_11,[createBaseVNode("quark-step",{status:"done",title:_ctx.translate('status.done.title'),content:_ctx.translate('status.done.content'),order:"1"},null,8,_hoisted_12),createBaseVNode("quark-step",{status:"doing",title:_ctx.translate('status.doing.title'),content:_ctx.translate('status.doing.content'),order:"2"},null,8,_hoisted_13),createBaseVNode("quark-step",{status:"todo",title:_ctx.translate('status.todo.title'),content:_ctx.translate('status.todo.content'),order:"3"},null,8,_hoisted_14)])])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
