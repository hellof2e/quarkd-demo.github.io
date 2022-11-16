import{d as a,c as t,a as n,o as l}from"./vue.c821364d.js";const e={class:"markdown-body"},p=n(`<h1>Progress</h1><h3>Intro</h3><p>Used to show the current progress.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/progress&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-progress</span>&gt;</span>
</code></pre><h3>Showtext</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">showtext</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-progress</span>&gt;</span>
</code></pre><h3>Custom style 1</h3><pre><code class="language-css"><span class="hljs-selector-class">.green</span> {
  --progress-box-<span class="hljs-attribute">background</span>: yellowgreen;
  --progress-<span class="hljs-attribute">margin-left</span>: <span class="hljs-number">6px</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-progress</span>&gt;</span>
</code></pre><h3>Custom style 2</h3><pre><code class="language-css"><span class="hljs-selector-class">.auto</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">15px</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-progress</span>
  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;90&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;auto&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;percent&quot;</span>&gt;</span>0.9<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-progress</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Default progress value 0-100 means percentage</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>color</td><td>Default Progress bar color supports gradient</td><td><code class=""> string</code></td><td><code class="">linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)</code></td></tr><tr><td>showtext</td><td>Whether to show progress text</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,18),r=[p],d={},u="",j=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(l(),t("div",e,r))}});export{j as default,u as excerpt,d as frontmatter};
