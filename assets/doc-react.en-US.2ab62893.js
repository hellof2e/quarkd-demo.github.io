import{d as a,c as t,a as n,o as l}from"./vue.6d6f63f5.js";const e={class:"markdown-body"},p=n(`<h1>Marquee</h1><h3>Intro</h3><p>Text scrolling.</p><h3>Install</h3><pre><code class="language-html">import { Marquee } from &quot;@quarkd/quark-react&quot;;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h3>Speed</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">speed</span>=<span class="hljs-string">&quot;25&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">speed</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h3>Control Paused</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{pauseAnimation}</span>&gt;</span> Paused <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{continueAnimation}</span>&gt;</span> Continue <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">paused</span>=<span class="hljs-string">{paused}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h3>Hover Paused</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span>
  <span class="hljs-attr">paused</span>=<span class="hljs-string">{paused}</span>
  <span class="hljs-attr">onMouseover</span>=<span class="hljs-string">{pauseAnimation}</span>
  <span class="hljs-attr">onMouseleave</span>=<span class="hljs-string">{continueAnimation}</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h3>Click Paused</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">paused</span>=<span class="hljs-string">{paused}</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{changePauseStatus}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h3>Reverse</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Marquee</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{title}</span> <span class="hljs-attr">reverse</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Marquee</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>speed</td><td>Animation speed</td><td><code class="">string</code></td><td><code class="">50</code></td></tr><tr><td>paused</td><td>Whether to pause the animation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>reverse</td><td>Whether to reverse the animation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,20),c=[p],g={},i="",j=a({__name:"doc-react.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),t("div",e,c))}});export{j as default,i as excerpt,g as frontmatter};
