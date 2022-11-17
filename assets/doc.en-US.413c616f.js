import{d as t,c as a,a as n,o as l}from"./vue.edf3a3e2.js";const e={class:"markdown-body"},p=n(`<h1>Popupextra</h1><h3>Intro</h3><p>Used to display some content.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/popupextra&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popupextra</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;Subtitle&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-body&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Why We Love Dunhuang<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Text text text.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-popupextra</span>&gt;</span>
</code></pre><pre><code class="language-jsx">&lt;script&gt;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/popupextra&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
     <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    }
   },
  <span class="hljs-attr">methods</span>: {
   <span class="hljs-function"><span class="hljs-title">showPopup</span>(<span class="hljs-params"></span>)</span> {
     <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
   },
 }
}
&lt;/script&gt;
</code></pre><h3>Custom Title</h3><p>Set <code class="">slot=&#39;title&#39;</code> to replace <code class="">title</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popupextra</span> <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;Sub title&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;open = false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: red&quot;</span>&gt;</span>Custom<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;popup-body&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;&quot;</span>&gt;</span>Why We Love Dunhuang<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Text text text.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-popupextra</span>&gt;</span>
</code></pre><h3>Close popup</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popupextra</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;handleClose()&quot;</span> /&gt;</span>

// handleClose this.open = false
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show popup</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>subtitle</td><td>Subtitle</td><td><code class="">string</code></td><td></td></tr><tr><td>hideclose</td><td>Whether to hide the close button in the upper-right corner</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>round</td><td>Whether to use round popup</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>safearea</td><td>Whether to turn on the bottom safe area adaptation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>Popup level</td><td><code class="">number\u3001string</code></td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>closed</td><td>Emitted when popup is closed</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--popup-extra-title-color</code></td><td>Title color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--popup-extra-subtitle-color</code></td><td>Subtitle color</td><td><code class="">#879099</code></td></tr><tr><td><code class="">--popup-extra-mask-color</code></td><td>Mask color</td><td><code class="">rgba(0, 0, 0, 0.7)</code></td></tr><tr><td><code class="">--popup-extra-z-index</code></td><td>z-index</td><td><code class="">999</code></td></tr><tr><td><code class="">--popup-extra-max-height</code></td><td>Content max-height</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-extra-min-height</code></td><td>Content min-height</td><td>-</td></tr><tr><td><code class="">--popup-extra-border-radius</code></td><td>Popup border-radius</td><td><code class="">16px</code></td></tr><tr><td><code class="">--popup-extra-title-font-family</code></td><td>Title font-family</td><td><code class="">PingFangSC-Medium, PingFang SC, sans-serif</code></td></tr><tr><td><code class="">--popup-extra-subtitle-font-family</code></td><td>Subtitle font-family</td><td><code class="">PingFangSC-Regular, PingFang SC, sans-serif</code></td></tr></tbody></table>`,21),o=[p],i={},u="",g=t({__name:"doc.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,r)=>(l(),a("div",e,o))}});export{g as default,u as excerpt,i as frontmatter};
