import{c as a,o as n,a as l}from"./vue.81f12a40.js";const t={class:"markdown-body"},p=l(`<h1>Swipe</h1><h3>Intro</h3><p>Used to loop a group of pictures or content.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/swipe&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Round Indicator</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Autoplay</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">autoplay</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Default SwipeItem</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">:defaultindex</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Set SwipeItem Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Set Indicator color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span>  <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>Custom Indicator</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span>  <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicators&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;indicator&quot;</span>&gt;</span>
    1/4
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">e</span>)</span> {
      <span class="hljs-keyword">const</span> indicator = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&#39;indicator&#39;</span>);
      indicator.innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${e.detail.index + <span class="hljs-number">1</span>}</span> / 4\`</span>;
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.custom-indicator</span> {
  <span class="hljs-attribute">position</span>: absolute;
  <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
  <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span>  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;one&#39;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&#39;two&#39;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
   <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">e</span>)</span> {
      <span class="hljs-built_in">console</span>.log(e.detail.index);
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.one</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#66c6f2</span>;
}
<span class="hljs-selector-class">.two</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attibute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Indicator type, can be set to <code>round</code></td><td><code>string</code></td><td></td></tr><tr><td>duration</td><td></td><td><code>number</code></td><td><code>500</code></td></tr><tr><td>interval</td><td>Animation duration</td><td><code>number </code></td><td><code>3000</code></td></tr><tr><td>defaultindex</td><td>Default SwipeItem</td><td><code>number </code></td><td><code>0</code></td></tr><tr><td>autoplay</td><td>Whether to enable autoplay</td><td><code> boolean</code></td><td><code>false</code></td></tr><tr><td>activecolor</td><td>Selected indicator color</td><td><code>string</code></td><td><code>#0088ff</code></td></tr><tr><td>inactivecolor</td><td>Not selected indicator color</td><td><code>string</code></td><td><code>#d3dae0</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when current swipe changed</td><td><code>\uFF08e: {detail:{index: number}}\uFF09=&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--swipe-width</code></td><td>SwipeItem width</td><td><code>100%</code></td></tr><tr><td><code>--swipe-height</code></td><td>SwipeItem height</td><td><code>100%</code></td></tr><tr><td><code>--swipe-border-radius</code></td><td>SwipeItem border radius</td><td><code>0</code></td></tr><tr><td><code>--swipe-indicator-activecolor</code></td><td>Indicator color</td><td><code>#0088ff</code></td></tr><tr><td><code>--swipe-indicator-margin</code></td><td>Indicator margin</td><td><code>2px</code></td></tr></tbody></table>`,29),c=[p],r={__name:"doc.en-US",setup(e,{expose:s}){return s({frontmatter:{}}),(j,g)=>(n(),a("div",t,c))}};export{r as default};
