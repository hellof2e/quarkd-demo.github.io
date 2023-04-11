;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".head-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n}\n.cancel {\n  color: #969799;\n  font-size: 14px;\n}\n.ensure {\n  font-size: 14px;\n  color: #0088ff;\n}\n.picker-title {\n  font-size: 16px;\n  color: #242729;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.c1cc4f0b.js','./mobile-legacy.afc7f177.js','./preact.module-legacy.4407a518.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;},function(){}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("cascadepicker");const _sfc_main=createDemo({setup(){const open=ref(false);const customOpen=ref(false);const pickerRef=ref(null);const customPickerRef=ref(null);onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",head:"自定义头部",region:"请选择地区"},button:{cancel:"取消",confirm:"确定"},options:{zhejiang:"浙江",hangzhou:"杭州",xihu:"西湖区",yuhang:"余杭区",wenzhou:"温州",lucheng:"鹿城区",ouhai:"瓯海区",fujian:"福建",fuzhou:"福州",gulou:"鼓楼区",taijiang:"台江区",xiamen:"厦门",siming:"思明区",haicang:"海沧区",beijing:"北京"},selected:"当前选中："},"en-US":{title:{basic:"Basic Usage",head:"Custom Head",region:"Please select the region"},button:{cancel:"Cancel",confirm:"Confirm"},options:{zhejiang:"Zhejiang",hangzhou:"Hangzhou",xihu:"Xihu",yuhang:"Yuhang",wenzhou:"Wenzhou",lucheng:"Lucheng",ouhai:"Ouhai",fujian:"Fujian",fuzhou:"Fuzhou",gulou:"Gulou",taijiang:"Taijiang",xiamen:"Xiamen",siming:"Siming",haicang:"Haicang",beijing:"Beijing"},selected:"Currently selected: "}});});onMounted(()=>{const DATA=[{text:`${translate("options.zhejiang")}`,children:[{text:`${translate("options.hangzhou")}`,children:[{text:`${translate("options.xihu")}`}]},{text:`${translate("options.wenzhou")}`,children:[{text:`${translate("options.lucheng")}`},{text:`${translate("options.ouhai")}`}]}]},{text:`${translate("options.fujian")}`,children:[{text:`${translate("options.fuzhou")}`,children:[{text:`${translate("options.gulou")}`},{text:`${translate("options.taijiang")}`}]},{text:`${translate("options.xiamen")}`,children:[{text:`${translate("options.siming")}`},{text:`${translate("options.haicang")}`}]}]},{text:`${translate("options.beijing")}`,children:[{text:"",children:[{text:""}]}]}];setTimeout(()=>{//模拟异步获取数据
const preview=pickerRef.value;preview.setColumns(DATA);const customPreview=customPickerRef.value;customPreview.setColumns(DATA);},1000);});const click=()=>{open.value=true;};const customClick=()=>{customOpen.value=true;};const close=type=>{if(type===0){open.value=false;}else if(type===1){customOpen.value=false;}};const confirm=({detail})=>{let values=detail.value.map(column=>{return column.value;});values=values.filter(value=>value.length>0);if(values.length>1){values=values.join("，");}Toast.text(`${values}`);open.value=false;};const customConfirm=()=>{const customPreview=customPickerRef.value;let values=customPreview.getValues().map(column=>{return column.value;});values=values.filter(value=>value.length>0);if(values.length>1){values=values.join("，");}Toast.text(`${values}`);customOpen.value=false;};const change=({detail})=>{console.log(detail.value,33333);};return{open,customOpen,pickerRef,customPickerRef,click,customClick,close,confirm,customConfirm,change,translate};}});const _hoisted_1={class:"demo"};const _hoisted_2=["title"];const _hoisted_3=["open","title"];const _hoisted_4=["title"];const _hoisted_5=["open"];const _hoisted_6={slot:"header",class:"head-container"};const _hoisted_7={class:"picker-title"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{type:"primary",title:_ctx.translate('title.basic'),islink:"",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.click&&_ctx.click(...args))},null,8,_hoisted_2)]),createBaseVNode("quark-cascade-picker",{open:_ctx.open,onClose:_cache[1]||(_cache[1]=$event=>_ctx.close(0)),title:_ctx.translate('title.region'),onConfirm:_cache[2]||(_cache[2]=(...args)=>_ctx.confirm&&_ctx.confirm(...args)),ref:"pickerRef",onChange:_cache[3]||(_cache[3]=(...args)=>_ctx.change&&_ctx.change(...args))},null,40,_hoisted_3),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.head")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{type:"primary",title:_ctx.translate('title.head'),islink:"",onClick:_cache[4]||(_cache[4]=(...args)=>_ctx.customClick&&_ctx.customClick(...args))},null,8,_hoisted_4)]),createBaseVNode("quark-cascade-picker",{open:_ctx.customOpen,onClose:_cache[7]||(_cache[7]=$event=>_ctx.close(1)),ref:"customPickerRef",bottomhidden:""},[createBaseVNode("div",_hoisted_6,[createBaseVNode("span",{class:"cancel",onClick:_cache[5]||(_cache[5]=$event=>_ctx.close(1))},toDisplayString(_ctx.translate("button.cancel")),1),createBaseVNode("span",_hoisted_7,toDisplayString(_ctx.translate("title.region")),1),createBaseVNode("span",{class:"ensure",onClick:_cache[6]||(_cache[6]=(...args)=>_ctx.customConfirm&&_ctx.customConfirm(...args))},toDisplayString(_ctx.translate("button.confirm")),1)])],40,_hoisted_5)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
