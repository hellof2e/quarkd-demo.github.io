import{c as a,o as t,a as n}from"./vue.ac8d90f1.js";const l={class:"markdown-body"},e=n(`<h1>Internationalization</h1><h2>Intro</h2><p>Quark uses Chinese as the default language and supports multi-language switching. Please follow the tutorial below to set internationalization.</p><h2>Multi-language switch</h2><p>Quark implements multi-language support through the Locale component, and you can use the Locale.use method to switch the currently used language.</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;
<span class="hljs-comment">// import Chinese locale</span>
<span class="hljs-keyword">import</span> zhCN <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale/lang/zh-CN&quot;</span>;

Locale.use(zhCN);
</code></pre><h2>Override language packs</h2><p>The Locale.add method can be used to modify the text. Examples are as follows:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> Locale <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/locale&quot;</span>;

Locale.add({
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;Custom confirm&quot;</span>,
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;Custom pull to refresh...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;Custom loose to refresh...&quot;</span>,
  },
});
</code></pre><h2>Currently supported languages</h2><table><thead><tr><th>Languages</th><th>File</th><th>Version</th></tr></thead><tbody><tr><td>English</td><td>en-US</td><td><code>v1.0.0</code></td></tr><tr><td>Simplified Chinese</td><td>zh-CN</td><td><code>v1.0.0</code></td></tr><tr><td>Traditional Chinese</td><td>zh-TW</td><td>waiting PR</td></tr><tr><td>Indonesian</td><td>id-ID</td><td>waiting PR</td></tr><tr><td>Thai</td><td>th-TH</td><td>waiting PR</td></tr></tbody></table><br><br><h2>Variables</h2><p>View all language configs</p><pre><code class="language-ts"><span class="hljs-comment">// English Examples</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">save</span>: <span class="hljs-string">&quot;Save&quot;</span>,
  <span class="hljs-attr">confirm</span>: <span class="hljs-string">&quot;Confirm&quot;</span>,
  <span class="hljs-attr">cancel</span>: <span class="hljs-string">&quot;Cancel&quot;</span>,
  <span class="hljs-attr">delete</span>: <span class="hljs-string">&quot;Delete&quot;</span>,
  <span class="hljs-attr">loading</span>: <span class="hljs-string">&quot;Loading...&quot;</span>,
  <span class="hljs-attr">placehold</span>: <span class="hljs-string">&quot;Please input content&quot;</span>,
  <span class="hljs-attr">image</span>: {
    <span class="hljs-attr">loadError</span>: <span class="hljs-string">&quot;Loaded error&quot;</span>,
  },
  <span class="hljs-attr">pullRefresh</span>: {
    <span class="hljs-attr">pulling</span>: <span class="hljs-string">&quot;Pull to refresh...&quot;</span>,
    <span class="hljs-attr">loosing</span>: <span class="hljs-string">&quot;Loose to refresh...&quot;</span>,
  },
  <span class="hljs-attr">search</span>: {
    <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&quot;Please input keywords&quot;</span>,
  },
  <span class="hljs-attr">actionSheet</span>: {
    <span class="hljs-attr">shareTitle</span>: <span class="hljs-string">&quot;Share to&quot;</span>,
  },
};
</code></pre><h2>How to internationalize business code?</h2><p>This can be done using <code>i18n</code>.</p>`,18),o=[e],d={__name:"internationalization.en-US",setup(p,{expose:s}){return s({frontmatter:{}}),(c,h)=>(t(),a("div",l,o))}};export{d as default};
