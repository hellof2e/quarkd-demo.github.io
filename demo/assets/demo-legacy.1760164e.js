;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".uploader-demo {\n  background-color: #fff !important;\n}\n.uploader-demo quark-button {\n  margin-left: 10px;\n}\n.uploader-demo .closeimg {\n  --uploader-delete-top: 0px;\n  --uploader-delete-right: 0px;\n  --uploader-delete-wrap-width: 14px;\n  --uploader-delete-wrap-height: 14px;\n  --uploader-delete-background: transparent;\n  --uploader-delete-left-radius: 12px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.491cf6b6.js','./mobile-legacy.44843e73.js','./vue-router-legacy.724aae54.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,Toast,createElementBlock,createBaseVNode,toDisplayString,openBlock,onBeforeRouteLeave;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;Toast=module.T;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;},function(module){onBeforeRouteLeave=module.o;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("uploader");const _sfc_main=createDemo({setup(){const isPreview=ref(null);const preview=ref(null);const preview2=ref(null);const before=ref(null);const uploadStatus=ref(null);const oversizeRef=ref(null);const customPreviewIcon=ref(null);const previewUrls=["https://m.hellobike.com/resource/helloyun/15697/9VgwC_Screenshot_20220215_191457_com.jingyao.easybike.jpg?x-oss-process=image/quality,q_80","https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png"];onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",preview:"文件预览",status:"上传状态",previewMode:"预览模式",limit:"限制上传数量",size:"限制上传大小",custom:"自定义上传样式",customPreviewIcon:"自定义预览删除 icon",file:"上传文件",before:"上传前置",disabled:"禁止上传",toast:{format:"请上传 jpg 格式图片",overSize:"有文件超过1KB了哦"}},"en-US":{basic:"Basic Usage",preview:"File Preview",status:"upload status",previewMode:"File Preview Mode",limit:"Limit Uploads Number",size:"Limit Uploads Size",custom:"Custom Upload Style",customPreviewIcon:"Custom predictive deletion icon",file:"Upload File",before:"Before Uploading",disabled:"Disabled",toast:{format:"Please upload image in jpg format",overSize:"There are files over 1KB"}}});});onMounted(()=>{preview.value.setPreview(previewUrls);preview2.value.setPreview(previewUrls);uploadStatus.value.setPreview(previewUrls);customPreviewIcon.value.setPreview(previewUrls);const tasks=uploadStatus.value.tasks;tasks.forEach((i,index)=>{if(!index){uploadStatus.value.setStatus({...i,status:"uploading"});}});before.value.beforeUpload=beforeUpload;});const sleep=time=>{return new Promise(reslove=>{setTimeout(()=>{reslove(true);},time);});};const beforeUpload=files=>{const r=files.every(file=>file.type==="image/jpg");if(!r){Toast.text(`${translate("toast.format")}`);return false;}return true;};const oversize=({detail:{items,maxsize}})=>{console.log(items,maxsize);Toast.text(`${translate("toast.overSize")}`);};const uploadAction=async(item,status="done")=>{preview.value.setStatus({...item,status:"uploading",message:"上传中"});await sleep(2000);preview.value.setStatus({...item,status});Toast.success("上传成功");};const afterRead=async({detail:file},isDefault)=>{if(isDefault){Toast.text(`success: the file is ${file.file.name}`);return;}if(Array.isArray(file)){for(let i=0;i<file.length;i++){const item=file[i];if(i===0)uploadAction(item);else uploadAction(item);}}else{uploadAction(file);}};const afterReadStatus=async({detail:file})=>{uploadStatus.value.setStatus({...file,status:"uploading",message:"上传中"});await sleep(2000);uploadStatus.value.setStatus({...file,status:"failed"});Toast.success(`${file.file.name}上传失败`);};onBeforeRouteLeave(()=>{const nodes=document.querySelectorAll("quark-image-preview ");nodes.forEach(i=>i.open=false);});return{isPreview,preview,preview2,before,uploadStatus,beforeUpload,oversize,oversizeRef,afterRead,translate,afterReadStatus,customPreviewIcon};}});const _hoisted_1={class:"demo uploader-demo"};const _hoisted_2={class:"flex"};const _hoisted_3=["preview"];const _hoisted_4={class:"flex"};const _hoisted_5={class:"flex"};const _hoisted_6=/*#__PURE__*/createBaseVNode("div",{class:"flex"},[/*#__PURE__*/createBaseVNode("quark-uploader",{maxcount:"2",preview:""})],-1);const _hoisted_7={class:"flex"};const _hoisted_8={preview:""};const _hoisted_9={type:"primary",slot:"uploader",icon:"home"};const _hoisted_10={class:"flex closeimg"};const _hoisted_11={preview:"",ref:"customPreviewIcon",closeimg:"https://m.hellobike.com/resource/helloyun/15697/dEYF0_round_close_fill.png?x-oss-process=image/quality,q_80"};const _hoisted_12={preview:"",ref:"before"};const _hoisted_13=/*#__PURE__*/createBaseVNode("quark-uploader",{preview:"",disabled:true},null,-1);const _hoisted_14={class:"flex"};const _hoisted_15={ref:"preview2",preview:"",readonly:""};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-uploader",{onAfterread:_cache[0]||(_cache[0]=val=>_ctx.afterRead(val,true)),preview:_ctx.isPreview},null,40,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("preview")),1),createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-uploader",{onAfterread:_cache[1]||(_cache[1]=(...args)=>_ctx.afterRead&&_ctx.afterRead(...args)),ref:"preview",preview:""},null,544)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("status")),1),createBaseVNode("div",_hoisted_5,[createBaseVNode("quark-uploader",{onAfterread:_cache[2]||(_cache[2]=(...args)=>_ctx.afterReadStatus&&_ctx.afterReadStatus(...args)),ref:"uploadStatus",preview:""},null,544)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("limit")),1),_hoisted_6,createBaseVNode("h2",null,toDisplayString(_ctx.translate("size")),1),createBaseVNode("quark-uploader",{maxsize:"1024",onOversize:_cache[3]||(_cache[3]=(...args)=>_ctx.oversize&&_ctx.oversize(...args)),ref:"oversizeRef"},null,544),createBaseVNode("h2",null,toDisplayString(_ctx.translate("custom")),1),createBaseVNode("div",_hoisted_7,[createBaseVNode("quark-uploader",_hoisted_8,[createBaseVNode("quark-button",_hoisted_9,toDisplayString(_ctx.translate("file")),1)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customPreviewIcon")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-uploader",_hoisted_11,null,512)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("before")),1),createBaseVNode("quark-uploader",_hoisted_12,null,512),createBaseVNode("h2",null,toDisplayString(_ctx.translate("disabled")),1),_hoisted_13,createBaseVNode("h2",null,toDisplayString(_ctx.translate("previewMode")),1),createBaseVNode("div",_hoisted_14,[createBaseVNode("quark-uploader",_hoisted_15,null,512)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
