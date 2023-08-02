;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".demo-dialog .custom-footer {\n  margin-top: 20px;\n}\n.demo-dialog .custom-footer quark-button {\n  background: linear-gradient(270deg, #00d9ff 0%, #0098fe 100%);\n  border-radius: 24px;\n  width: 100%;\n  height: 48px;\n}\n.demo-dialog .dialog-close {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n}\n.demo-dialog img {\n  width: 288px;\n  border-radius: 12px;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  -ms-border-radius: 12px;\n  -o-border-radius: 12px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.b7fdbb0b.js','./mobile-legacy.9ebfe512.js','./vue-router-legacy.a679314a.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock,onBeforeRouteLeave;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;},function(module){onBeforeRouteLeave=module.o;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("dialog");// import Dialog from "./index.tsx";
// import Toast from "../toast";
const _sfc_main=createDemo({setup(){// ***** 标签调用
// 标签-组件调用
const open=ref(false);const open2=ref(false);const open3=ref(false);const open4=ref(false);const open5=ref(false);const open6=ref(false);const open7=ref(false);const open8=ref(false);const open9=ref(false);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",dialogTitle:"标题",alert:"提示弹窗",alertWithoutContent:"提示弹窗（没有内容）",confirm:"确认弹窗",btnvertical:"确认弹窗(按钮垂直排列)",basicDialog:"基础弹窗",showCloseButton:"隐藏关闭按钮",alignLeft:"内容居左对齐",customFooter:"Footer 自定义",noFooter:"Footer 隐藏",title:"这是一句话就能说清楚的确认弹窗，所以只有标题",content:"生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",text:"代码是写出来给人看的，附带能在机器上运行",okText:"知道了",customTitle:"Title 自定义",noTitle:"Title 隐藏"},"en-US":{basic:"Basic use",dialogTitle:"Title",alert:"Alert",alertWithoutContent:"Alert without content",confirm:"Confirm dialog",btnvertical:"Confirm dialog（vertical button）",basicDialog:"Basic Dialog",showCloseButton:"Hide Close Button",alignLeft:"Align Content To The Left",customFooter:"Custom Footer",noFooter:"Not Show Footer ",title:"This is a confirmation dialog that can be explained clearly in one sentence, so only the title",content:"This is a content",text:"This is custom body. The code is written for people to see, with the addition of running on the machine",okText:"Got it",noTitle:"Title hide",customTitle:"Custom title"}});});onBeforeRouteLeave(()=>{const quarkDialogs=document.querySelectorAll("quark-dialog");quarkDialogs.forEach(i=>i.open=false);});return{open,open2,open3,open4,open5,open6,open7,open8,open9,translate};}});const _hoisted_1={class:"demo demo-dialog"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["title"];const _hoisted_6=["open","title","content"];const _hoisted_7=["open","title","oktext"];const _hoisted_8=["open","title","content"];const _hoisted_9=["open","title","content"];const _hoisted_10=/*#__PURE__*/createBaseVNode("h2",null,"Title",-1);const _hoisted_11=["title"];const _hoisted_12=["title"];const _hoisted_13=["content","open"];const _hoisted_14={slot:"title",style:{"color":"red","font-size":"16px","margin-bottom":"14px"}};const _hoisted_15=["open","content"];const _hoisted_16=/*#__PURE__*/createBaseVNode("h2",null,"Footer",-1);const _hoisted_17=["title"];const _hoisted_18=["title"];const _hoisted_19=["title","open"];const _hoisted_20={slot:"footer",class:"custom-footer"};const _hoisted_21=["open","title","content"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{type:"primary",isLink:"",title:_ctx.translate('alert'),onClick:_cache[0]||(_cache[0]=$event=>_ctx.open=true)},null,8,_hoisted_2),createBaseVNode("quark-cell",{type:"primary",isLink:"",title:_ctx.translate('alertWithoutContent'),onClick:_cache[1]||(_cache[1]=$event=>_ctx.open2=true)},null,8,_hoisted_3),createBaseVNode("quark-cell",{type:"primary",isLink:"",title:_ctx.translate('confirm'),onClick:_cache[2]||(_cache[2]=$event=>_ctx.open3=true)},null,8,_hoisted_4),createBaseVNode("quark-cell",{type:"primary",isLink:"",title:_ctx.translate('btnvertical'),onClick:_cache[3]||(_cache[3]=$event=>_ctx.open6=true)},null,8,_hoisted_5)]),createBaseVNode("quark-dialog",{type:"confirm",open:_ctx.open,title:_ctx.translate('dialogTitle'),content:_ctx.translate('content'),onConfirm:_cache[4]||(_cache[4]=$event=>_ctx.open=false),onClose:_cache[5]||(_cache[5]=$event=>_ctx.open=false)},null,40,_hoisted_6),createBaseVNode("quark-dialog",{type:"confirm",open:_ctx.open2,title:_ctx.translate('title'),oktext:_ctx.translate('okText'),onConfirm:_cache[6]||(_cache[6]=$event=>_ctx.open2=false),onClose:_cache[7]||(_cache[7]=$event=>_ctx.open2=false)},null,40,_hoisted_7),createBaseVNode("quark-dialog",{open:_ctx.open3,title:_ctx.translate('dialogTitle'),content:_ctx.translate('text'),onClose:_cache[8]||(_cache[8]=$event=>_ctx.open3=false),onConfirm:_cache[9]||(_cache[9]=$event=>_ctx.open3=false),onCancel:_cache[10]||(_cache[10]=$event=>_ctx.open3=false)},null,40,_hoisted_8),createBaseVNode("quark-dialog",{btnvertical:"",open:_ctx.open6,title:_ctx.translate('dialogTitle'),content:_ctx.translate('text'),onClose:_cache[11]||(_cache[11]=$event=>_ctx.open6=false),onConfirm:_cache[12]||(_cache[12]=$event=>_ctx.open6=false),onCancel:_cache[13]||(_cache[13]=$event=>_ctx.open6=false)},null,40,_hoisted_9),_hoisted_10,createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",title:_ctx.translate('customTitle'),onClick:_cache[14]||(_cache[14]=$event=>_ctx.open4=true)},null,8,_hoisted_11),createBaseVNode("quark-cell",{islink:"",title:_ctx.translate('noTitle'),onClick:_cache[15]||(_cache[15]=$event=>_ctx.open5=true)},null,8,_hoisted_12)]),createBaseVNode("quark-dialog",{content:_ctx.translate('content'),open:_ctx.open4,onConfirm:_cache[16]||(_cache[16]=$event=>_ctx.open4=false),onCancel:_cache[17]||(_cache[17]=$event=>_ctx.open4=false),onClose:_cache[18]||(_cache[18]=$event=>_ctx.open4=false)},[createBaseVNode("div",_hoisted_14,toDisplayString(_ctx.translate("customTitle")),1)],40,_hoisted_13),createBaseVNode("quark-dialog",{notitle:"",open:_ctx.open5,content:_ctx.translate('content'),onConfirm:_cache[19]||(_cache[19]=$event=>_ctx.open5=false),onCancel:_cache[20]||(_cache[20]=$event=>_ctx.open5=false),onClose:_cache[21]||(_cache[21]=$event=>_ctx.open5=false)},null,40,_hoisted_15),_hoisted_16,createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",title:_ctx.translate('customFooter'),onClick:_cache[22]||(_cache[22]=$event=>_ctx.open8=true)},null,8,_hoisted_17),createBaseVNode("quark-cell",{islink:"",title:_ctx.translate('noFooter'),onClick:_cache[23]||(_cache[23]=$event=>_ctx.open9=true)},null,8,_hoisted_18)]),createBaseVNode("quark-dialog",{title:_ctx.translate('dialogTitle'),open:_ctx.open8,onClose:_cache[25]||(_cache[25]=$event=>_ctx.open8=false)},[createBaseVNode("div",null,toDisplayString(_ctx.translate("text")),1),createBaseVNode("div",_hoisted_20,[createBaseVNode("quark-button",{type:"primary",onClick:_cache[24]||(_cache[24]=$event=>_ctx.open8=false)},toDisplayString(_ctx.translate("customFooter")),1)])],40,_hoisted_19),createBaseVNode("quark-dialog",{nofooter:"",open:_ctx.open9,title:_ctx.translate('dialogTitle'),content:_ctx.translate('content'),onConfirm:_cache[26]||(_cache[26]=$event=>_ctx.open9=false),onClose:_cache[27]||(_cache[27]=$event=>_ctx.open9=false)},null,40,_hoisted_21)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
