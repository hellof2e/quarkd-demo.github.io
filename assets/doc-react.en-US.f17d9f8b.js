import{d as s,c as e,a,o as n}from"./vue.41a5ff19.js";const l={class:"markdown-body"},o=a(`<h1>Collapse</h1><h3>Intro</h3><p>Place the content in multiple folded panels, and click the panel title to expand or shrink the content.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Collapse } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx">&lt;Collapse title=<span class="hljs-string">&quot;title&quot;</span>&gt;
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than <span class="hljs-built_in">this</span>.
&lt;/Collapse&gt;
</code></pre><h3>Open state</h3><p>Control the open state of the accordion by setting the <code class="">open=true</code> property.</p><pre><code class="language-tsx">&lt;Collapse title=<span class="hljs-string">&quot;title&quot;</span> open&gt;
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than <span class="hljs-built_in">this</span>.
&lt;/Collapse&gt;
</code></pre><h3>No icon style</h3><p>Set custom icons through <code class="">iconhide</code> property.</p><pre><code class="language-tsx">&lt;Collapse title=<span class="hljs-string">&quot;title&quot;</span> iconhide&gt;
  Life is far more than spinning around and being busy to the limit. Human
  experience is far broader and richer than <span class="hljs-built_in">this</span>.
&lt;/Collapse&gt;
</code></pre><h3>Custom title</h3><p>Set custom title through <code class="">slot=&quot;title&quot;</code>.</p><pre><code class="language-tsx">&lt;Collapse title=<span class="hljs-string">&quot;title&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blueviolet&quot;</span>&gt;</span>custom title<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  Life is far more than spinning around and being busy to the limit. Human experience
  is far broader and richer than <span class="hljs-built_in">this</span>.
&lt;/Collapse&gt;
</code></pre><h3>Custom icon</h3><p>Set custom icon through <code class="">slot=&quot;icon&quot;</code>.</p><pre><code class="language-tsx">&lt;Collapse title=<span class="hljs-string">&quot;title&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span>\u{1F389}\u{1F389}\u{1F389}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
  Life is far more than spinning around and being busy to the limit. Human experience
  is far broader and richer than <span class="hljs-built_in">this</span>.
&lt;/Collapse&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>title</td><td><code class="">string</code></td><td></td></tr><tr><td>open</td><td>open</td><td><code class="">Boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--callapse-title-fontsize</code></td><td>Title font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-title-color</code></td><td>Title color</td><td><code class="">#666</code></td></tr><tr><td><code class="">--callapse-content-fontsize</code></td><td>Content font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-content-color</code></td><td>Content color</td><td><code class="">#666</code></td></tr></tbody></table>`,25),c=[o],h={},u="",g=s({__name:"doc-react.en-US",setup(p,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(i,r)=>(n(),e("div",l,c))}});export{g as default,u as excerpt,h as frontmatter};
