import{d as a,c as t,a as e,o as n}from"./vue.9c2f3f12.js";const l={class:"markdown-body"},o=e(`<h1>MarketDialog</h1><h3>Intro</h3><p>Pure picture popup</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { MarketDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span>
      <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
      <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
      <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>
    /&gt;</span></span>
  );
};
</code></pre><h3>Tabbed Call</h3><p>For example, we need to customize the image rounded corners</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
        <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;market&quot;</span>
        <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">MarketDialog</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Control popup window show and hide</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>url</td><td>popup image url</td><td><code class="">string</code></td><td></td></tr><tr><td>size</td><td>The size of close button</td><td><code class="">string</code></td><td><code class="">32</code></td></tr><tr><td>onClose</td><td>Click the close icon callback function</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--market-dialog-width</code></td><td>Image width</td><td><code class="">288px</code></td></tr><tr><td><code class="">--market-dialog-radius</code></td><td>Image Radius</td><td><code class="">12px</code></td></tr></tbody></table>`,16),p=[o],i={},u="",g=a({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(n(),t("div",l,p))}});export{g as default,u as excerpt,i as frontmatter};
