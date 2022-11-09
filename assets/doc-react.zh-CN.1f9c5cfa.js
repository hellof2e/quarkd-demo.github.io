import{d as a,c as t,a as n,o as e}from"./vue.6b336880.js";const u={class:"markdown-body"},l=n(`<h1>MarketDialog \u8425\u9500\u5F39\u7A97</h1><h3>\u4ECB\u7ECD</h3><p>\u7EAF\u56FE\u7247\u5F39\u7A97</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { MarketDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span>
      <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>
      <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>
    /&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p>\u6BD4\u5982\u6211\u4EEC\u9700\u8981\u81EA\u5B9A\u4E49\u56FE\u7247\u5706\u89D2</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
        <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;market&quot;</span>
        <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">MarketDialog</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u63A7\u5236\u5F39\u7A97\u663E\u793A\u9690\u85CF</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>url</td><td>\u5F39\u7A97\u56FE\u7247\u5730\u5740</td><td><code class="">string</code></td><td></td></tr><tr><td>size</td><td>\u5173\u95ED\u6309\u94AE\u5927\u5C0F</td><td><code class="">string</code></td><td><code class="">32</code></td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--market-dialog-width</code></td><td>\u56FE\u7247\u5BBD\u5EA6</td><td><code class="">288px</code></td></tr><tr><td><code class="">--market-dialog-radius</code></td><td>\u56FE\u7247\u5706\u89D2</td><td><code class="">12px</code></td></tr></tbody></table>`,16),p=[l],h={},i="",g=a({__name:"doc-react.zh-CN",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,d)=>(e(),t("div",u,p))}});export{g as default,i as excerpt,h as frontmatter};
