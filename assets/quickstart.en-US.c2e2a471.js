import{d as l,c as p,e as s,t as e,a,o as c}from"./vue.8c4481a8.js";const o={class:"markdown-body"},h=a(`<h1>Quick Start</h1><h2>Preview</h2><blockquote><p>Scan the QR code below to experience the Quark component library example</p></blockquote><img src="https://m.hellobike.com/resource/helloyun/16682/76s6X_quark.demo.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png"><h2>CDN</h2><p>The easiest way to use quark is to directly introduce the CDN link in the HTML file, and then you can use it anywhere in the world. Since quark has achieved CSS-IN-JS, you only need to load the link below.</p><pre><code class="">&lt;!-- Introduce CDN files, only 80kb --&gt;
&lt;script src=&quot;https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js&quot; /&gt;
</code></pre><h2>NPM Install</h2><pre><code class="language-shell"><span class="hljs-meta">#</span><span class="bash"> Vue / Angular / HTML / Other project</span>
npm i quarkd
</code></pre><h3><a href="/#/en-US/guide/quickstart4React">React project installation please click</a></h3><h2>Usage</h2><h3>Vue</h3><pre><code class="language-tsx">&lt;template&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><h3>Angular</h3>`,14),r={class:""},i=a(`<h3>Jquery/No framework etc.</h3><pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;en&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;utf-8&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- cdn --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/quarkd@1.0.11/umd/index.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;btn&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">const</span> el = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;btn&quot;</span>);
    el.addEventListener(<span class="hljs-string">&quot;click&quot;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleClick</span>(<span class="hljs-params"></span>) </span>{
      el.loading = <span class="hljs-literal">true</span>;
    });
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><h2>Polyfill</h2><blockquote><p>Use Quarkd(Web components) today and have them work in all major browsers. <a href="https://www.webcomponents.org/polyfills">Polyfill</a>.</p></blockquote><p>Install polyfills</p><pre><code class="">npm install @webcomponents/webcomponentsjs
</code></pre><p>You can also load the code from a CDN such as unpkg: <a href="https://unpkg.com/@webcomponents/webcomponentsjs@%5E2/">https://unpkg.com/@webcomponents/webcomponentsjs@^2/</a></p>`,7),j={},d="",k=l({__name:"quickstart.en-US",setup(u,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(t,g)=>(c(),p("div",o,[h,s("pre",null,[s("code",r,`import { Component } from '@angular/core
import "quarkd/lib/button"

@Component({
  template: \`<quark-button loading="`+e(t.loading)+`"" (click)="handleClick()">
    Button
  </quark-button>\`
})
`,1)]),i]))}});export{k as default,d as excerpt,j as frontmatter};
