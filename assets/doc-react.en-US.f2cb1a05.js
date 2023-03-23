import{d as t,c as a,a as e,o as n}from"./vue.41a5ff19.js";const l={class:"markdown-body"},o=e(`<h1>Rate</h1><h3>Intro</h3><p>The rate component is used for rating things.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx">&lt;Rate value=<span class="hljs-string">&quot;1&quot;</span>&gt;&lt;/Rate&gt;
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* Unchosen star color */</span>
Rate {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">238</span>, <span class="hljs-number">238</span>, <span class="hljs-number">238</span>);
}
</code></pre><h3>Custom color</h3><pre><code class="language-tsx">&lt;Rate value=<span class="hljs-string">&quot;2&quot;</span> active-color=<span class="hljs-string">&quot;green&quot;</span>&gt;&lt;/Rate&gt;
</code></pre><h3>Disabled</h3><pre><code class="language-tsx">&lt;Rate value=<span class="hljs-string">&quot;2&quot;</span> disabled&gt;&lt;/Rate&gt;
</code></pre><h3>Readonly</h3><pre><code class="language-tsx">&lt;Rate value=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-keyword">readonly</span>&gt;&lt;/Rate&gt;
</code></pre><h3>Change Event</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onselect = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(e.detail.value);
  };
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onselect}</span> /&gt;</span></span>;
};
</code></pre><h3>image icon</h3><pre><code class="language-tsx">&lt;Rate
  value=<span class="hljs-string">&quot;2&quot;</span>
  imgicon=<span class="hljs-string">&quot;https://quark-design.hellobike.com/assets/quark-logo.7fd50e67.png&quot;</span>
&gt;&lt;/Rate&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>defaultvalue</td><td>Default chosen value 1-5 represent star</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>value</td><td>Chosen value\uFF0Ccan be set to async value, 1-5 represent star</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>size</td><td>Icon font size</td><td><code class="">string</code></td><td><code class="">25</code></td></tr><tr><td>disabled</td><td>Whether to disable rate</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>activecolor</td><td>chosen color</td><td><code class="">string</code></td><td><code class="">#ffc800</code></td></tr><tr><td>imgicon</td><td>iamge icon</td><td><code class="">string</code></td><td><code class="">-</code></td></tr><tr><td>onChange Emitted when rate changed</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td><td></td></tr></tbody></table>`,21),d=[o],g={},i="",u=t({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,p)=>(n(),a("div",l,d))}});export{u as default,i as excerpt,g as frontmatter};
