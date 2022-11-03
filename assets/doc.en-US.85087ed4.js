import{c as a,o as t,a as n}from"./vue.7f40998a.js";const l={class:"markdown-body"},e=n(`<h1>Loading</h1><h3>Intro</h3><p>Used to indicate the transition state during loading.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/loading&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Type</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;circular&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Size</h3><p>Default <code>px</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span> // Default
<span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Text</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Vertical</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
</code></pre><h3>Text Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-text&quot;</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>

.custom-text {
  --loading-text-color: #0088ff;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Icon type, <code>circular</code> <code>spinner</code></td><td><code>string</code></td><td><code>spinner</code></td></tr><tr><td>color</td><td>Icon color</td><td><code>string</code></td><td><code>#879099</code></td></tr><tr><td>size</td><td>Icon size, <code>20px</code> <code>2em</code> <code>2rem</code></td><td><code>string</code> or <code>number</code></td><td><code>30px</code></td></tr><tr><td>vertical</td><td>Whether to arrange icons and text content vertically</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>--loading-text-color</code></td><td>Loading text color</td><td><code>#969799</code></td></tr><tr><td><code>--loading-text-font-size</code></td><td>Loading text font size</td><td><code>14px</code></td></tr></tbody></table>`,26),p=[e],g={__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(d,r)=>(t(),a("div",l,p))}};export{g as default};
