import{d as u,c as a,a as t,o as n}from"./vue.700c3c59.js";const l={class:"markdown-body"},p=t(`<h1>\u56FD\u9645\u5316</h1><h2>\u4ECB\u7ECD</h2><p>Quark \u91C7\u7528\u4E2D\u6587\u4F5C\u4E3A\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u540C\u65F6\u652F\u6301\u591A\u8BED\u8A00\u5207\u6362\uFF0C\u8BF7\u6309\u7167\u4E0B\u65B9\u6559\u7A0B\u8FDB\u884C\u56FD\u9645\u5316\u8BBE\u7F6E\u3002</p><h2>\u591A\u8BED\u8A00\u5207\u6362</h2><p>Quark \u901A\u8FC7 Locale \u7EC4\u4EF6\u5B9E\u73B0\u591A\u8BED\u8A00\u652F\u6301\uFF0C\u4F7F\u7528 Locale.use \u65B9\u6CD5\u53EF\u4EE5\u5207\u6362\u5F53\u524D\u4F7F\u7528\u7684\u8BED\u8A00\u3002</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale, {enUS} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;
Locale.use(enUS);
</code></pre><h2>\u8986\u76D6\u8BED\u8A00\u5305</h2><p>\u901A\u8FC7 Locale.add \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u6587\u6848\u7684\u4FEE\u6539\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;

Locale.add({
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;Custom confirm&quot;</span>,
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;Custom pull to refresh...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;Custom loose to refresh...&quot;</span>,
  },
});
</code></pre><h2>\u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00</h2><table><thead><tr><th>\u8BED\u8A00</th><th>\u6587\u4EF6\u540D</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>\u82F1\u8BED</td><td>en-US</td><td><code class="">v1.0.0</code></td></tr><tr><td>\u7B80\u4F53\u4E2D\u6587</td><td>zh-CN</td><td><code class="">v1.0.0</code></td></tr><tr><td>\u7E41\u9AD4\u4E2D\u6587</td><td>zh-TW</td><td>\u7B49\u5F85 PR</td></tr><tr><td>\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED</td><td>id-ID</td><td>\u7B49\u5F85 PR</td></tr><tr><td>\u6CF0\u8BED</td><td>th-TH</td><td>\u7B49\u5F85 PR</td></tr></tbody></table><h2>\u5185\u7F6E\u7684\u53D8\u91CF</h2><pre><code class="language-ts"><span class="hljs-comment">// \u4E2D\u6587\u793A\u4F8B</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">save</span>: <span class="hljs-string">&quot;\u4FDD\u5B58&quot;</span>,
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;\u786E\u8BA4&quot;</span>,
  <span class="hljs-attr">cancel</span>: <span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>,
  <span class="hljs-attr">delete</span>: <span class="hljs-string">&quot;\u5220\u9664&quot;</span>,
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&quot;\u52A0\u8F7D\u4E2D...&quot;</span>,
  <span class="hljs-attr">placehold</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>,
  <span class="hljs-attr">image</span>: {
    <span class="hljs-attr">loadError</span>: <span class="hljs-string">&quot;\u52A0\u8F7D\u5931\u8D25&quot;</span>,
  },
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;\u91CA\u653E\u5373\u53EF\u5237\u65B0...&quot;</span>,
  },
  <span class="hljs-attr">search</span>: {
    <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD&quot;</span>,
  },
  <span class="hljs-attr">actionSheet</span>: {
    <span class="hljs-attr">shareTitle</span>: <span class="hljs-string">&quot;\u5206\u4EAB\u5230&quot;</span>,
  },
};
</code></pre><h2>\u4E1A\u52A1\u4EE3\u7801\u5982\u4F55\u5B9E\u73B0\u56FD\u9645\u5316\uFF1F</h2><p>\u53EF\u4EE5\u4F7F\u7528 <code class="">i18n</code> \u6765\u5B9E\u73B0\u3002</p>`,15),o=[p],d={},E="",F=u({__name:"internationalization.zh-CN",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,c)=>(n(),a("div",l,o))}});export{F as default,E as excerpt,d as frontmatter};
