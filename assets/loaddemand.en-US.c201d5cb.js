import{d as a,c as n,a as o,o as e}from"./vue.92ca1a40.js";const t={class:"markdown-body"},c=o(`<h1>Load onDemand</h1><h2>Vue</h2><p>You can manually introduce component in <code class="">Vue</code>.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><h2>React</h2><p>Using <code class="">babel</code> plugin <a href="https://github.com/umijs/babel-plugin-import">babel-plugin-import</a></p><pre><code class="language-js"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><p>config <code class="">.babelrc</code></p><pre><code class="language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [[<span class="hljs-string">&quot;import&quot;</span>, { <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span> }]],
};
</code></pre><p>or you can manually introduce component\uFF0Cbut not recommend.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react/lib/button&quot;</span>;
</code></pre>`,11),p=[c],i={},m="",h=a({__name:"loaddemand.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(l,u)=>(e(),n("div",t,p))}});export{h as default,m as excerpt,i as frontmatter};
