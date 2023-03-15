import{d as a,c as t,a as l,o as n}from"./vue.700c3c59.js";const e={class:"markdown-body"},u=l(`<h1>Rate \u8BC4\u5206</h1><h2>\u4ECB\u7ECD</h2><p>\u8BC4\u4EF7\u6253\u5206\u7EC4\u4EF6\u3002</p><h2>\u5B89\u88C5</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/rate&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* \u8BBE\u7F6E\u661F\u661F\u672A\u9009\u4E2D\u7684\u989C\u8272 */</span>
quark-rate {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">238</span>, <span class="hljs-number">238</span>, <span class="hljs-number">238</span>);
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>\u53EA\u8BFB\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>\u76D1\u542C change \u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;rate&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onselect&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">onselect</span>(<span class="hljs-params">e</span>)</span> { <span class="hljs-built_in">console</span>.log(e.detail.value) }
</code></pre><h3>\u56FE\u7247icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span>  <span class="hljs-attr">defaultvalue</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">imgicon</span>=<span class="hljs-string">&quot;https://quark-design.hellobike.com/assets/quark-logo.7fd50e67.png&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultvalue</td><td>\u9ED8\u8BA4\u9009\u4E2D 1-5 \u4EE3\u8868\u661F\u7EA7</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>value</td><td>\u9009\u4E2D\uFF0C\u53EF\u63A5\u6536\u5F02\u6B65\u6570\u503C 1-5 \u4EE3\u8868\u661F\u7EA7</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>size</td><td>icon \u5B57\u4F53\u5927\u5C0F</td><td><code class="">string</code></td><td><code class="">25</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>activecolor</td><td>\u9009\u4E2D\u7684\u65F6\u5019\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#ffc800</code></td></tr><tr><td>imgicon</td><td>\u56FE\u7247icon</td><td><code class="">string</code></td><td><code class="">-</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u524D\u5206\u503C\u4FEE\u6539\u65F6\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td></tr></tbody></table>`,24),c=[u],h={},g="",j=a({__name:"doc.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,o)=>(n(),t("div",e,c))}});export{j as default,g as excerpt,h as frontmatter};
