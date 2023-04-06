import{d as a,c as n,a as t,o as l}from"./vue.2845d34a.js";const e={class:"markdown-body"},p=t(`<h1>Overlay \u906E\u7F69</h1><h3>\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Overlay } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Overlay</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u5D4C\u5165\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Overlay</span> <span class="hljs-attr">open</span>=<span class="hljs-string">&quot;{open}&quot;</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">&quot;{handleClose}&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Overlay</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.content</span> {
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">background-color</span>: white;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>picker \u662F\u5426\u663E\u793A</td><td><code class="">boolean </code></td><td><code class="">require</code></td></tr><tr><td>zindex</td><td>\u906E\u7F69\u5C42\u7EA7</td><td><code class="">number </code></td><td><code class="">999</code></td></tr><tr><td>onClose</td><td>\u906E\u7F69\u5173\u95ED</td><td><code class="">() =&gt; void</code></td><td><code class="">require</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--overlay-background</code></td><td>\u906E\u7F69\u80CC\u666F</td><td><code class="">rgba(0, 0, 0, 0.7)</code></td></tr></tbody></table>`,15),u=[p],r={},j="",i=a({__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(l(),n("div",e,u))}});export{i as default,j as excerpt,r as frontmatter};
