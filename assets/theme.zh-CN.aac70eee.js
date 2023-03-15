import{d as s,c as a,a as e,o}from"./vue.92ca1a40.js";const n={class:"markdown-body"},r=e(`<h1>\u4E3B\u9898\u5B9A\u5236</h1><p>Quark \u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957 UI \u4E3B\u9898\uFF0C\u540C\u65F6\u5141\u8BB8\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5B9A\u5236\u65B0\u7684\u4E3B\u9898\uFF0C\u4EE5\u6EE1\u8DB3\u4E1A\u52A1\u7684\u591A\u6837\u5316\u89C6\u89C9\u9700\u6C42\u3002</p><div><br><img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quark \u4E3B\u9898\u5B9A\u5236"> \xA0\xA0\xA0\xA0\xA0\xA0 <img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quark \u4E3B\u9898\u5B9A\u5236"><br></div><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u4E0D\u540C\u4E8E\u4E00\u4E9B\u6846\u67B6\u91C7\u7528<code class="">less</code>\u3001<code class="">sass</code>\u7B49\u9884\u5904\u7406\u5668\uFF0C Quark \u91C7\u7528 <code class="">CSS</code><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">\u81EA\u5B9A\u4E49\u5C5E\u6027</a> \u5B9E\u73B0\u3002</p><p>\u60A8\u53EA\u9700\u8981\u5728\u60A8\u7684\u9879\u76EE\u4E2D\u8BBE\u7F6E\u4EE5\u4E0B\u53D8\u91CF\u5373\u53EF\u8F7B\u677E\u4FEE\u6539\u4E3B\u9898\u6837\u5F0F\uFF1A</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
  --quark-warning-<span class="hljs-attribute">color</span>: <span class="hljs-number">#fb990f</span>;
  --quark-danger-<span class="hljs-attribute">color</span>: <span class="hljs-number">#ff5526</span>;
  --quark-success-<span class="hljs-attribute">color</span>: <span class="hljs-number">#07c160</span>;
}
</code></pre><h2>\u5B9A\u5236\u4E3B\u9898</h2><p>\u4E3A\u7EC4\u4EF6\u5355\u72EC\u8BBE\u7F6E\u4E3B\u9898\u8272\uFF1A</p><pre><code class="language-less"><span class="hljs-selector-tag">quark-button</span> { 
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088FF</span>;
}
</code></pre><p>\u5168\u5C40\u4E3A\u6240\u6709\u7EC4\u4EF6\u8BBE\u7F6E\u4E3B\u9898\u8272\uFF1A</p><pre><code class="language-less"><span class="hljs-selector-pseudo">:root</span> {
  --quark-theme-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre>`,12),c=[r],h={},B="",d=s({__name:"theme.zh-CN",setup(t,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(l,p)=>(o(),a("div",n,c))}});export{d as default,B as excerpt,h as frontmatter};
