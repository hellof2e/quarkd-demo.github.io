import{d as t,c as a,a as e,o}from"./vue.41a5ff19.js";const n={class:"markdown-body"},c=e(`<h1>Loading</h1><h3>Intro</h3><p>Used to indicate the transition state during loading.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx">&lt;Loading&gt;&lt;/Loading&gt;
</code></pre><h3>Type</h3><pre><code class="language-tsx">&lt;Loading <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;circular&quot;</span>&gt;&lt;<span class="hljs-regexp">/Loading&gt; &lt;Loading type=&quot;spinner&quot;&gt;&lt;/</span>Loading&gt;
</code></pre><h3>Size</h3><p>Default <code class="">px</code>\u3002</p><pre><code class="language-tsx">&lt;Loading size=<span class="hljs-string">&quot;20&quot;</span>&gt;&lt;/Loading&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;30&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span></span>
</code></pre><h3>Color</h3><pre><code class="language-tsx">&lt;Loading size=&quot;30&quot;&gt;&lt;/Loading&gt; // Default
&lt;Loading size=&quot;30&quot; color=&quot;green&quot;&gt;&lt;/Loading&gt;
&lt;Loading size=&quot;30&quot; color=&quot;warning&quot;&gt;&lt;/Loading&gt;
</code></pre><h3>Text</h3><pre><code class="language-tsx">&lt;Loading size=<span class="hljs-string">&quot;30&quot;</span>&gt;loading...&lt;/Loading&gt;
</code></pre><h3>Vertical</h3><pre><code class="language-tsx">&lt;Loading size=<span class="hljs-string">&quot;30&quot;</span> vertical&gt;
  loading...
&lt;/Loading&gt;
</code></pre><h3>Text Color</h3><pre><code class="language-tsx">&lt;Loading size=<span class="hljs-string">&quot;30&quot;</span> vertical <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;custom-text&quot;</span>&gt;
  loading...
&lt;/Loading&gt;
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-text</span> {
  --loading-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#0088ff</span>;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Icon type, <code class="">circular</code> <code class="">spinner</code></td><td><code class="">string</code></td><td><code class="">spinner</code></td></tr><tr><td>color</td><td>Icon color</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>size</td><td>Icon size, <code class="">20px</code> <code class="">2em</code> <code class="">2rem</code> <code class="">20vm</code> <code class="">20vh</code></td><td><code class="">string</code> or <code class="">number</code></td><td><code class="">30px</code></td></tr><tr><td>vertical</td><td>Whether to arrange icons and text content vertically</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--loading-text-color</code></td><td>Loading text color</td><td><code class="">#969799</code></td></tr><tr><td><code class="">--loading-text-font-size</code></td><td>Loading text font size</td><td><code class="">14px</code></td></tr></tbody></table>`,27),l=[c],g={},h="",u=t({__name:"doc-react.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,p)=>(o(),a("div",n,l))}});export{u as default,h as excerpt,g as frontmatter};
