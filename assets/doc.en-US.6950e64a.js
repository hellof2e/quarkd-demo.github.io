import{d as a,c as n,a as t,o as l}from"./vue.2377335e.js";const p={class:"markdown-body"},e=t(`<h1>Tabbar</h1><h3>Introduce</h3><p>Used to switch between different pages.</p><h3>Install</h3><p>If use quark-icons, please install: <code class="">npm install --save quark-icons</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/tabbar&quot;</span>;

<span class="hljs-comment">// import icons</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/home&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/user&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/tel&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Mine<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Contact<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>No icons</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>Mine<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>Contact<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Active menu</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> <span class="hljs-attr">active</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Mine<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Contact<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Fixed at the bottom</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> <span class="hljs-attr">fixed</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Mine<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Contact<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Quark-tabbar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>fixed</td><td>Whether to fixed bottom</td><td><code class="">boolean</code></td><td><code class="">true </code></td></tr><tr><td>activecolor</td><td>Color of active tab item</td><td><code class="">string </code></td><td><code class="">#0088FF</code></td></tr><tr><td>active</td><td>name or index of active tab item</td><td><code class="">string</code></td><td><code class="">0</code></td></tr></tbody></table><h3>Quark-tabbar Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Callback Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when changing active tab</td><td><code class="">{e:{detail: {value: The selected name or index value}}} =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--tabbar-active-color</code></td><td>The color of the activated menu</td><td><code class="">#0088FF</code></td></tr></tbody></table>`,21),c=[e],j={},i="",d=a({__name:"doc.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),n("div",p,c))}});export{d as default,i as excerpt,j as frontmatter};
