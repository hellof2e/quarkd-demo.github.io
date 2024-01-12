;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".swipe-cell-demo {\n  --button-height: 100%;\n}\n.swipe-cell-demo .right,\n.swipe-cell-demo .left {\n  height: 100%;\n}\n.swipe-cell-demo .quark-button {\n  height: 100%;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.24f38e83.js','./mobile-legacy.7a2c61d0.js'],function(exports){'use strict';var createComponent,_export_sfc,onBeforeMount,useTranslate,ref,onMounted,Toast,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;ref=module.r;onMounted=module.g;Toast=module.T;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("cell");const _sfc_main=createDemo({setup(){onBeforeMount(()=>{useTranslate({"zh-CN":{CellTitle:{basicUsage:"基本用法",custom:"自定义内容",async:"异步关闭"},title:"这是标题",desc:"描述文字",buttons:{del:"删除",collect:"收藏",select:"选择",add:"添加"},noData:"暂无数据",addData:"快去添加数据吧~",loading:"请求中",deleteSucc:"删除成功"},"en-US":{CellTitle:{basicUsage:"Basic Usage",custom:"Custom Content",async:"Async Close"},title:"Cell Title",desc:"Description",buttons:{del:"Delete",collect:"Collect",select:"Select",add:"Add"},noData:"No Data",addData:"Go to add data.",loading:"loading...",deleteSucc:"successfully deleted"}});});const onOpen=({detail})=>{console.log(detail.name,detail.position);};const onClose=({detail})=>{console.log(detail.name,detail.position);};const asyncSwipeCell=ref();onMounted(()=>{asyncSwipeCell.value.setBeforeClose(position=>{if(position==="right"){return new Promise(resolve=>{const toast=Toast.loading(translate("loading"));setTimeout(()=>{toast.hide();Toast.success(translate("deleteSucc"));resolve(true);},1000);});}else{return true;}});// asyncSwipeCell.value.open("right");
// setTimeout(() => {
//   asyncSwipeCell.value.close();
// }, 1000);
});return{translate,onOpen,onClose,asyncSwipeCell};}});const _hoisted_1={class:"demo no-padding swipe-cell-demo"};const _hoisted_2=["title","desc"];const _hoisted_3={class:"left",slot:"left"};const _hoisted_4={type:"primary",shape:"square"};const _hoisted_5={class:"right",slot:"right"};const _hoisted_6={type:"danger",shape:"square"};const _hoisted_7={type:"primary",shape:"square"};const _hoisted_8=["title","desc"];const _hoisted_9={class:"right",slot:"right"};const _hoisted_10={type:"primary",shape:"square"};const _hoisted_11={ref:"asyncSwipeCell"};const _hoisted_12=["title","desc"];const _hoisted_13={class:"right",slot:"right"};const _hoisted_14={type:"primary",shape:"square"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.basicUsage")),1),createBaseVNode("quark-swipe-cell",{onOpen:_cache[0]||(_cache[0]=(...args)=>_ctx.onOpen&&_ctx.onOpen(...args)),onClose:_cache[1]||(_cache[1]=(...args)=>_ctx.onClose&&_ctx.onClose(...args))},[createBaseVNode("quark-cell",{title:_ctx.translate('title'),desc:_ctx.translate('desc')},null,8,_hoisted_2),createBaseVNode("div",_hoisted_3,[createBaseVNode("quark-button",_hoisted_4,toDisplayString(_ctx.translate("buttons.select")),1)]),createBaseVNode("div",_hoisted_5,[createBaseVNode("quark-button",_hoisted_6,toDisplayString(_ctx.translate("buttons.del")),1),createBaseVNode("quark-button",_hoisted_7,toDisplayString(_ctx.translate("buttons.collect")),1)])],32),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.custom")),1),createBaseVNode("quark-swipe-cell",null,[createBaseVNode("quark-empty",{title:_ctx.translate('noData'),desc:_ctx.translate('addData'),type:"local"},null,8,_hoisted_8),createBaseVNode("div",_hoisted_9,[createBaseVNode("quark-button",_hoisted_10,toDisplayString(_ctx.translate("buttons.add")),1)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("CellTitle.async")),1),createBaseVNode("quark-swipe-cell",_hoisted_11,[createBaseVNode("quark-cell",{title:_ctx.translate('title'),desc:_ctx.translate('desc')},null,8,_hoisted_12),createBaseVNode("div",_hoisted_13,[createBaseVNode("quark-button",_hoisted_14,toDisplayString(_ctx.translate("buttons.del")),1)])],512)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
