import{d as a,c as t,a as u,o as n}from"./vue.858c05d5.js";const l={class:"markdown-body"},c=u(`<h1>Button \u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u6309\u94AE\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u6309\u94AE\u7C7B\u578B</h3><p>\u6309\u94AE\u652F\u6301 <code class="">primary</code>\u3001<code class="">success</code>\u3001<code class="">danger</code>\u3001<code class="">warning</code>\u548C\u9ED8\u8BA4\u7C7B\u578B\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u6734\u7D20\u6309\u94AE</h3><p>\u901A\u8FC7 <code class="">plain</code> \u5C5E\u6027\u5C06\u6309\u94AE\u8BBE\u7F6E\u4E3A\u6734\u7D20\u6309\u94AE\uFF0C\u6734\u7D20\u6309\u94AE\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u989C\u8272\uFF0C\u80CC\u666F\u4E3A\u767D\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u6309\u94AE\u5C3A\u5BF8</h3><p>\u6309\u94AE\u652F\u6301 <code class="">big</code>\u3001<code class="">small</code> \u548C\u9ED8\u8BA4\u5C3A\u5BF8\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u5C0F\u53F7\u5C3A\u5BF8<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>\u5927\u53F7\u5C3A\u5BF8<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u666E\u901A\u5C3A\u5BF8<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><p>\u901A\u8FC7 <code class="">disabled</code> \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">plain</span>&gt;</span>\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u6309\u94AE\u5F62\u72B6</h3><p>\u901A\u8FC7 <code class="">shape</code> \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6\uFF0C\u652F\u6301\u5706\u89D2\uFF08<code class="">round</code>\uFF09\u3001\u65B9\u5F62\u6309\u94AE(<code class="">square</code>)\u548C\u9ED8\u8BA4\u7684\u5C0F\u5706\u89D2\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u65B9\u5F62\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u5706\u89D2\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h3>\u52A0\u8F7D\u72B6\u6001</h3><p>\u901A\u8FC7 <code class="">loading</code> \u5C5E\u6027\u8BBE\u7F6E\u52A0\u8F7D\u72B6\u6001\uFF0C\u5176\u4E2D<code class="">loadingcolor </code>\u5C5E\u6027\u63A7\u5236 loading \u989C\u8272\uFF0C<code class="">loadingsize </code>\u5C5E\u6027\u63A7\u5236 loading \u5927\u5C0F\uFF0C<code class="">loadingtype </code>\u5C5E\u6027\u63A7\u5236 loading \u7C7B\u578B\uFF0Cloading \u53C2\u8003 loading \u7EC4\u4EF6\uFF0C</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">loadtype</span>=<span class="hljs-string">&quot;circular&quot;</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleChange&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;isLoading&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>
  &gt;</span>Click me!&lt;/quark-button
&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> isLoading = ref(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> changeLoading = <span class="hljs-function">() =&gt;</span> {
      isLoading.value = <span class="hljs-literal">true</span>;
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        isLoading.value = <span class="hljs-literal">false</span>;
      }, <span class="hljs-number">2000</span>); <span class="hljs-comment">// \u70B9\u51FB2s\u540Eloading\u6D88\u5931</span>
    };

    <span class="hljs-keyword">return</span> {
      data,
      isLoading,
      handleChange,
    };
  },
};
</code></pre><h3>\u56FE\u6807\u6309\u94AE</h3><p>\u901A\u8FC7 <code class="">icon</code> \u5C5E\u6027\u8BBE\u7F6E\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png&quot;</span>
&gt;</span>
  \u559C\u6B22
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">primary</code>\u3001<code class="">success</code>\u3001<code class="">danger</code>\u3001<code class="">warning</code> \u548C\u9ED8\u8BA4 5 \u79CD\u7C7B\u578B</td><td><code class="">string</code></td><td>-</td></tr><tr><td>size</td><td>\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">small</code>, <code class="">normal</code>, <code class="">big</code>, <code class="">large</code> 4 \u79CD\u7C7B\u578B</td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>icon</td><td>\u6309\u94AE\u56FE\u6807 (\u652F\u6301\u4F20 url \u94FE\u63A5)</td><td><code class="">string</code></td><td>-</td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>plain</td><td>\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false </code></td></tr><tr><td>loading</td><td>\u6309\u94AE loading \u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loadtype</td><td>\u52A0\u8F7D\u56FE\u6807\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">circular</code></td><td><code class="">string</code></td><td><code class="">spinner</code></td></tr><tr><td>loadingcolor</td><td>\u52A0\u8F7D\u56FE\u6807\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>loadingsize</td><td>\u52A0\u8F7D\u56FE\u6807\u5927\u5C0F</td><td><code class="">string</code></td><td><code class="">20</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--button-height</code></td><td>\u6309\u94AE\u9AD8\u5EA6</td><td><code class="">32px</code></td></tr><tr><td><code class="">--button-hspacing</code></td><td>\u6309\u94AE\u5DE6\u53F3\u5185\u8FB9\u8DDD</td><td><code class="">12px</code></td></tr><tr><td><code class="">--button-font-size</code></td><td>\u6309\u94AE\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--button-border-radius</code></td><td>\u6309\u94AE\u5706\u89D2</td><td><code class="">8px</code></td></tr><tr><td><code class="">--button-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--button-icon-hspacing</code></td><td>icon \u53F3\u95F4\u8DDD</td><td><code class="">6px</code></td></tr><tr><td><code class="">--button-icon-size</code></td><td>icon \u5927\u5C0F</td><td><code class="">1em</code></td></tr><tr><td><code class="">--button-big-border-radius</code></td><td>\u5927\u5C3A\u5BF8\u6309\u94AE\u5706\u89D2</td><td><code class="">8px</code></td></tr></tbody></table>`,35),p=[c],h={},g="",j=a({__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,o)=>(n(),t("div",l,p))}});export{j as default,g as excerpt,h as frontmatter};
