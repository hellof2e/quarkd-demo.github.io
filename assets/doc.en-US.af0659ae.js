import{d as a,c as t,a as n,o as l}from"./vue.6d2987d5.js";const e={class:"markdown-body"},p=n(`<h1>PullRefresh</h1><h3>Introduce</h3><p>Used to provide interactive operations for pull-down refresh.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/pullrefresh&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-pull-refresh</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onFresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{{count}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">onFresh</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>;
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    Toast.success(<span class="hljs-string">&#39;Refresh Success&#39;</span>);
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>;
    <span class="hljs-built_in">this</span>.count++;
  }, <span class="hljs-number">1000</span>);
},
</code></pre><h3>Dark Background</h3><p>You can set the background color of the drop-down through dark</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-pull-refresh</span> <span class="hljs-attr">dark</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onFresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{{count}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-pull-refresh</span>&gt;</span>
</code></pre><h3>Custom Tip</h3><p>Use slots to custom tips.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-pull-refresh</span> <span class="hljs-attr">dark</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onFresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>Refresh Count:{{count}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;pulling&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg&quot;</span>
    /&gt;</span>drop down prompt
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loosing&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg&quot;</span>
    /&gt;</span>Release to refresh now
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18&quot;</span>&gt;</span>Refreshing data...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-pull-refresh</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>dark</td><td>Dark mode (background value: #0088FF )</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>Whether to disable</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>headheight</td><td>Top content height / distance to trigger pull-down refresh</td><td><code class="">string/number</code></td><td><code class="">96</code></td></tr><tr><td>loading</td><td>Is it in loading state</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>pullingtext</td><td>Pulling text</td><td><code class="">string</code></td><td><code class="">Pull to refresh</code></td></tr><tr><td>loosingtext</td><td>Loosing text</td><td><code class="">string</code></td><td><code class="">Loose to refresh</code></td></tr><tr><td>loadingtext</td><td>Loading text</td><td><code class="">string</code></td><td><code class="">Loading...</code></td></tr><tr><td>textcolor</td><td>Text color</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>refresh</td><td>Emitted after pulling refresh</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>Content to show</td></tr><tr><td>pulling</td><td>Content of head when at pulling</td></tr><tr><td>loosing</td><td>Content of head when at loosing</td></tr><tr><td>loading</td><td>Content of head when at loading</td></tr></tbody></table>`,21),o=[p],g={},i="",u=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(l(),t("div",e,o))}});export{u as default,i as excerpt,g as frontmatter};
