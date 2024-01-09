;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".head-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n}\n.cancel {\n  color: #969799;\n  font-size: 14px;\n}\n.ensure {\n  font-size: 14px;\n  color: #0088ff;\n}\n.picker-title {\n  font-size: 16px;\n  color: #242729;\n}\n.custom-pickerview {\n  --pickerview-item-height: 44px;\n  --pickerview-height: 220px;\n  --pickerview-row-top-mask-height: 88px;\n  --pickerview-row-bottom-mask-height: 88px;\n  --pickerview-scroll-margin-top: 88px;\n  --pickerview-current-top: 90px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.054155ef.js','./mobile-legacy.ece471a2.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.g;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("picker");const _sfc_main=createDemo({setup(){const open=ref(false);const customOpen=ref(false);const pickerRef=ref(null);const customPickerRef=ref(null);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础使用",head:"自定义样式",selectedTime:"请选择时间",confirmText:"确认",custom:{cancel:"取消",confirm:"确定",title:"请选择城市"},time:["上午","下午"],provinces:["浙江省"],values:["杭州","嘉兴","绍兴","宁波","湖州","千岛湖"],selected:"当前选中："},"en-US":{basic:"Basic Usage",head:"Custom Style",selectedTime:"Please Select Time",confirmText:"Confirm",custom:{cancel:"Cancel",confirm:"Confirm",title:"Please Select City"},time:["Morning","Afternoon"],provinces:["Zhejiang Province"],values:["Hangzhou","Jiaxing","Shaoxing","Ningbo","Huzhou","Qiandao Lake"],selected:"Currently Selected:"}});});onMounted(()=>{setTimeout(()=>{//模拟异步获取数据
const preview=pickerRef.value;preview.setColumns([{defaultIndex:2,values:translate("calendaritem.weekdays")},{defaultIndex:0,values:translate("time")}]);const customPreview=customPickerRef.value;customPreview.setColumns([{defaultIndex:0,values:translate("provinces")},{defaultIndex:2,values:translate("values")}]);},0);});const click=()=>{open.value=true;};const customClick=()=>{customOpen.value=true;};const close=type=>{if(type===0){open.value=false;}else if(type===1){customOpen.value=false;}};const confirm=({detail})=>{const values=detail.value.map(column=>{return column.value;}).join("，");Toast.text(`${translate("selected")}${values}`);open.value=false;};const customConfirm=()=>{const customPreview=customPickerRef.value;const values=customPreview.getValues().map(column=>{return column.value;}).join("，");Toast.text(`${translate("selected")}${values}`);customOpen.value=false;};const change=({detail})=>{console.log(detail.value,33333);};return{open,customOpen,pickerRef,customPickerRef,click,customClick,close,confirm,customConfirm,change,translate};}});const _hoisted_1={class:"demo"};const _hoisted_2={ref:"customPickerRef",class:"custom-pickerview"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-pickerview",{ref:"pickerRef",onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.change&&_ctx.change(...args)),onConfirm:_cache[1]||(_cache[1]=(...args)=>_ctx.confirm&&_ctx.confirm(...args))},null,544),createBaseVNode("h2",null,toDisplayString(_ctx.translate("head")),1),createBaseVNode("quark-pickerview",_hoisted_2,null,512)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
