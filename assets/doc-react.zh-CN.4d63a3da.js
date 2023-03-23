import{d as a,c as t,a as u,o as n}from"./vue.7ba4190a.js";const p={class:"markdown-body"},l=u(`<h1>Popup</h1><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5C42</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleOpen = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleOpen}</span>&gt;</span>
        \u57FA\u672C\u4F7F\u7528
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Popup</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u4E8C\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u4E09\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u56DB\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u4E94\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u516D\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Popup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u5F39\u7A97\u4F4D\u7F6E</h3><p>\u901A\u8FC7 position \u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A top\u3001bottom\u3001left\u3001right\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> /&gt;</span>
</code></pre><h3>\u5173\u95ED\u56FE\u6807</h3><p>\u8BBE\u7F6E closeable \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">closeable</span> /&gt;</span>
</code></pre><h3>\u7981\u6B62\u906E\u7F69\u5C42\u70B9\u51FB</h3><p>\u8BBE\u7F6E forbidmaskclick \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u906E\u7F69\u5C42\u5C06\u65E0\u6CD5\u81EA\u52A8\u5173\u95ED\u5F39\u5C42\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">forbidmaskclick</span> /&gt;</span>
</code></pre><h3>\u5706\u89D2\u5F39\u7A97</h3><p>\u8BBE\u7F6E round \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">round</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u5F39\u7A97\u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>position</td><td>\u5F39\u6846\u4F4D\u7F6E</td><td><code class="">top</code> <code class="">bottom</code> <code class="">left</code> <code class="">right</code></td><td><code class="">bottom</code></td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>\u662F\u5426\u7981\u6B62\u906E\u7F69\u5C42\u70B9\u51FB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>safearea</td><td>\u662F\u5426\u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u57DF\u9002\u914D</td><td><code class=""> boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>popup \u5C42\u7EA7\u8BBE\u7F6E</td><td><code class="">number\u3001string</code></td><td>-</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u7ACB\u5373\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td>-</td></tr><tr><td>onClosed</td><td>\u5173\u95ED\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td>-</td></tr><tr><td>onOpened</td><td>\u5F39\u51FA\u5C42\u6253\u5F00\u540E\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td>-</td></tr><tr><td>onClickoverlay</td><td>\u906E\u7F69\u5C42\u70B9\u51FB\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td>-</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--popup-mask-color</code></td><td>\u8499\u5C42\u80CC\u666F</td><td><code class="">rgba(0, 0, 0, 0.7)</code></td></tr><tr><td><code class="">--popup-z-index</code></td><td>\u7EC4\u4EF6\u5C42\u7EA7</td><td><code class="">999</code></td></tr><tr><td><code class="">--popup-max-width</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5927\u5BBD\u5EA6</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-min-width</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5C0F\u5BBD\u5EA6</td><td>-</td></tr><tr><td><code class="">--popup-max-height</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5927\u9AD8\u5EA6</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-min-height</code></td><td>popup \u5185\u5BB9\u533A\u57DF\u6700\u5C0F\u9AD8\u5EA6</td><td><code class="">200px</code></td></tr><tr><td><code class="">--popup-border-radius</code></td><td>popup \u5706\u89D2\u5927\u5C0F\uFF08\u4EC5\u5F53 position \u4E3A bottom\uFF0C\u4E14 props \u8BBE\u7F6E round \u751F\u6548\uFF09</td><td><code class="">16px</code></td></tr></tbody></table>`,25),d=[l],r={},F="",E=a({__name:"doc-react.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,c)=>(n(),t("div",p,d))}});export{E as default,F as excerpt,r as frontmatter};
