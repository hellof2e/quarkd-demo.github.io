import{c as a,o as n,a as l}from"./vue.5ce4fb01.js";const t={class:"markdown-body"},p=l(`<h1>Quick Start</h1><h2>Preview</h2><blockquote><p>Scan the QR code below to experience the Quark component library example</p></blockquote><img src="https://m.hellobike.com/resource/helloyun/16682/76s6X_quark.demo.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png"><h2>NPM Install</h2><pre><code class="language-shell"><span class="hljs-meta">#</span><span class="bash"> Vue / Angular / HTML / Other project</span>
npm i quarkd
<span class="hljs-meta">
#</span><span class="bash"> React project</span>
npm i  @quarkd/quark-react
</code></pre><h2>1.Example Vue</h2><pre><code class="language-jsx">&lt;template&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><h2>2. Example React</h2><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Demo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>button<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;
  }
}
</code></pre><h2>3 \u3001Polyfill</h2><blockquote><p>Use Quark(Web components) today and have them work in all major browsers. <a href="https://www.webcomponents.org/polyfills">Polyfill</a>\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/wcs-bundle.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>`,13),e=[p],m={__name:"quickstart.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",t,e))}};export{m as default};
