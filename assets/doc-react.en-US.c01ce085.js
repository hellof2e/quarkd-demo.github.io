import{d as t,c as a,a as e,o as n}from"./vue.0d995834.js";const l={class:"markdown-body"},c=e(`<h1>Marquee</h1><h3>Intro</h3><p>Text scrolling.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Marquee } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx">&lt;Marquee title={title}&gt;&lt;/Marquee&gt;
</code></pre><h3>Speed</h3><pre><code class="language-tsx">&lt;Marquee title={title} speed=<span class="hljs-string">&quot;25&quot;</span>&gt;&lt;/Marquee&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">speed</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span></span>
</code></pre><h3>Control Paused</h3><pre><code class="language-tsx">&lt;Button onClick={pauseAnimation}&gt; Paused &lt;/Button&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{continueAnimation}</span>&gt;</span> Continue <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">paused</span>=<span class="hljs-string">{paused}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span></span>
</code></pre><h3>Hover Paused</h3><pre><code class="language-tsx">&lt;Marquee
  title={title}
  paused={paused}
  onMouseover={pauseAnimation}
  onMouseleave={continueAnimation}
&gt;&lt;/Marquee&gt;
</code></pre><h3>Click Paused</h3><pre><code class="language-tsx">&lt;Marquee title={title} paused={paused} onClick={changePauseStatus}&gt;&lt;/Marquee&gt;
</code></pre><h3>Reverse</h3><pre><code class="language-tsx">&lt;Marquee title={title} reverse=<span class="hljs-string">&quot;true&quot;</span>&gt;&lt;/Marquee&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>speed</td><td>Animation speed</td><td><code class="">string</code></td><td><code class="">50</code></td></tr><tr><td>paused</td><td>Whether to pause the animation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>reverse</td><td>Whether to reverse the animation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,20),p=[c],u={},i="",g=t({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(n(),a("div",l,p))}});export{g as default,i as excerpt,u as frontmatter};
