import{d as t,c as a,a as e,o as n}from"./vue.41a5ff19.js";const r={class:"markdown-body"},o=e(`<h1>Progress</h1><h3>Intro</h3><p>Used to show the current progress.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Progress } <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx">&lt;Progress value=<span class="hljs-string">&quot;0&quot;</span>&gt;&lt;/Progress&gt;
</code></pre><h3>Showtext</h3><pre><code class="language-tsx">&lt;Progress value=<span class="hljs-string">&quot;100&quot;</span> showtext&gt;&lt;/Progress&gt;
</code></pre><h3>Custom style 1</h3><pre><code class="language-css"><span class="hljs-selector-class">.green</span> {
  --progress-box-<span class="hljs-attribute">background</span>: yellowgreen;
  --progress-<span class="hljs-attribute">margin-left</span>: <span class="hljs-number">6px</span>;
}
</code></pre><pre><code class="language-tsx">&lt;Progress value=<span class="hljs-string">&quot;20&quot;</span> color=<span class="hljs-string">&quot;green&quot;</span>&gt;&lt;/Progress&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Progress</span>&gt;</span></span>
</code></pre><h3>Custom style 2</h3><pre><code class="language-css"><span class="hljs-selector-class">.auto</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">15px</span>;
}
</code></pre><pre><code class="language-tsx">&lt;Progress
  value=&quot;90&quot;
  class=&quot;auto&quot;
  color=&quot;linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)&quot;
&gt;
  &lt;span slot=&quot;percent&quot; class=&quot;percent&quot;&gt;
    0.9
  &lt;/span&gt;
&lt;/Progress&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Default progress value 0-100 means percentage</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>color</td><td>Default Progress bar color supports gradient</td><td><code class=""> string</code></td><td><code class="">linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)</code></td></tr><tr><td>showtext</td><td>Whether to show progress text</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,18),l=[o],h={},u="",i=t({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,d)=>(n(),a("div",r,l))}});export{i as default,u as excerpt,h as frontmatter};
