import{c as a,o as n,a as o}from"./vue.60af942b.js";const e={class:"markdown-body"},t=o(`<h1>Load onDemand</h1><h2>Vue</h2><p>You can manually introduce component in <code>Vue</code>.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><h2>React</h2><p>Using <code>babel</code> plugin <a href="https://github.com/umijs/babel-plugin-import">babel-plugin-import</a></p><pre><code class="language-js"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><p>config <code>.babelrc</code></p><pre><code class="language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">plugins</span>: [[<span class="hljs-string">&quot;import&quot;</span>, { <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span> }]],
};
</code></pre><p>or you can manually introduce component\uFF0Cbut not recommend.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react/lib/button&quot;</span>;
</code></pre>`,11),p=[t],i={__name:"loaddemand.en-US",setup(r,{expose:s}){return s({frontmatter:{}}),(l,u)=>(n(),a("div",e,p))}};export{i as default};
