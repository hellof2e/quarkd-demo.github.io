;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".image-demo .quark-cell {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 7px #edeef1;\n  font-size: 14px;\n  color: #666;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 8px;\n}\n.image-demo .quark-cell-list quark-image {\n  min-width: 100px;\n  min-height: 100px;\n}\n.image-demo .quark-cell-item {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 33.33%;\n  padding: 4px;\n}\n.image-demo .quark-cell-item p {\n  text-align: center;\n}\n.image-demo .error-img {\n  height: 30px;\n  width: 30px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.7eefcc7a.js','./mobile-legacy.b3fd71d4.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Fragment,renderList,createStaticVNode,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Fragment=module.F;renderList=module.y;createStaticVNode=module.e;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("image");const _sfc_main=createDemo({setup(){const imgList=ref(["https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg","https://m.hellobike.com/resource/helloyun/09764/sbESi_picture-2.jpeg","https://m.hellobike.com/resource/helloyun/09764/uzhnQ_picture-3.jpeg","https://m.hellobike.com/resource/helloyun/09764/1jm2V_picture-4.png","https://m.hellobike.com/resource/helloyun/09764/uzuHB_picture-5.jpeg","https://m.hellobike.com/resource/helloyun/09764/gyy6t_picture-6.jpeg"]);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",fit:"填充样式",round:"圆形图片",loadingMention:"加载中提示",loading:"加载中...",loadingFail:"加载失败提示",lazy:"懒加载"},"en-US":{basic:"Basic Usage",fit:"Fit Style",round:"Round Image",loadingMention:"Loading Mention",loading:"Loading...",loadingFail:"Fail Mention",lazy:"Lazy Load"}});});return{imgList,translate};}});const _hoisted_1={class:"demo image-demo"};const _hoisted_2=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell base-cell"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg"})],-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",fit:"contain"}),/*#__PURE__*/createBaseVNode("p",null,"contain")]),/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",fit:"fill"}),/*#__PURE__*/createBaseVNode("p",null,"fill")]),/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",fit:"cover"}),/*#__PURE__*/createBaseVNode("p",null,"cover")]),/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",fit:"none"}),/*#__PURE__*/createBaseVNode("p",null,"none")]),/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",fit:"scale-down"}),/*#__PURE__*/createBaseVNode("p",null,"scale-down")])],-1);const _hoisted_4=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg",width:"100px",height:"100px",fit:"cover",round:""})],-1);const _hoisted_5={class:"quark-cell"};const _hoisted_6={class:"quark-cell-item"};const _hoisted_7={src:"",width:"100px",height:"100px"};const _hoisted_8={slot:"error"};const _hoisted_9=/*#__PURE__*/createBaseVNode("div",{class:"quark-cell-item"},[/*#__PURE__*/createBaseVNode("quark-image",{src:"",width:"100px",height:"100px"},[/*#__PURE__*/createBaseVNode("div",{slot:"error"},[/*#__PURE__*/createBaseVNode("quark-loading")])])],-1);const _hoisted_10=/*#__PURE__*/createStaticVNode("<div class=\"quark-cell\"><div class=\"quark-cell-item\"><quark-image src=\"https://m.hellobike.com/resource/helloyun\" width=\"100\" height=\"100\"></quark-image></div><div class=\"quark-cell-item\"><quark-image src=\"/hero.jpg\" width=\"100\" height=\"100\"><div slot=\"error\"><img src=\"https://m.hellobike.com/resource/helloyun/09764/ZYtvcQv7AH.png\" alt=\"\" class=\"error-img\"></div></quark-image></div></div>",1);const _hoisted_11={class:"quark-cell quark-cell-list"};const _hoisted_12=["src"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("fit")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("round")),1),_hoisted_4,createBaseVNode("h2",null,toDisplayString(_ctx.translate("loadingMention")),1),createBaseVNode("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-image",_hoisted_7,[createBaseVNode("div",_hoisted_8,toDisplayString(_ctx.translate("loading")),1)])]),_hoisted_9]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("loadingFail")),1),_hoisted_10,createBaseVNode("h2",null,toDisplayString(_ctx.translate("lazy")),1),(openBlock(true),createElementBlock(Fragment,null,renderList(_ctx.imgList,img=>{return openBlock(),createElementBlock("div",_hoisted_11,[(openBlock(),createElementBlock("quark-image",{src:img,class:"img-box",key:img,lazy:""},null,8,_hoisted_12))]);}),256))]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
