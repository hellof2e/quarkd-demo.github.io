import{c as t,o as a,a as l}from"./vue.73a18cf8.js";const n={class:"markdown-body"},e=l(`<h1>Cell</h1><h3>Intro</h3><p>The cell is a single display item in the list.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Content&quot;</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Content&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
  )
}
</code></pre><h3>Router</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Router&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;#/button&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;URL&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;https://baidu.com&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span></span>
  )
}
</code></pre><h3>Icon</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png&quot;</span>
      <span class="hljs-attr">islink</span>
    /&gt;</span></span>
  )
}
</code></pre><h3>Inset Grouped</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell, CellGroupl } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CellGroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span> <span class="hljs-attr">islink</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">CellGroup</span>&gt;</span></span>
  )
}
</code></pre><h3>Custom</h3><p>Set the maximum width of the title, show ellipsis</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;The title is very very very long&quot;</span>
    /&gt;</span></span>
  )
}
</code></pre><pre><code class="language-css"><span class="hljs-comment">/** CSS show ellipsis **/</span>
<span class="hljs-selector-class">.my-cell</span> {
  --cell-title-<span class="hljs-attribute">white-space</span>: nowrap;
  --cell-title-<span class="hljs-attribute">text-overflow</span>: ellipsis;
}
</code></pre><h3>Right content</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell title&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Custom content<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
  )
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code>string</code></td><td>-</td></tr><tr><td>desc</td><td>description</td><td><code>string</code></td><td>-</td></tr><tr><td>to</td><td>Target route of the link</td><td><code>string</code></td><td>-</td></tr><tr><td>islink</td><td>Whether to show link icon</td><td><code>boolean </code></td><td><code>false</code></td></tr><tr><td>icon</td><td>Left Icon(can be set to url link)</td><td><code>string </code></td><td>-</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-title-font-size</code></td><td>Title font size</td><td><code>14px</code></td></tr><tr><td><code>--cell-title-color</code></td><td>Title font color</td><td><code>#666</code></td></tr><tr><td><code>--cell-title-width</code></td><td>Title font max width</td><td></td></tr><tr><td><code>--cell-title-font-weight</code></td><td>Title font weight</td><td></td></tr><tr><td><code>--cell-title-font-family</code></td><td>Title font family</td><td><code>PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code>--cell-title-white-space</code></td><td>Whether the title change line</td><td><code>nowrap</code></td></tr><tr><td><code>--cell-desc-font-size</code></td><td>Desc font size</td><td></td></tr><tr><td><code>--cell-desc-color</code></td><td>Desc font color</td><td><code>#969799</code></td></tr><tr><td><code>--cell-desc-width</code></td><td>Desc font max width</td><td><code>14px</code></td></tr><tr><td><code>--cell-desc-white-space</code></td><td>Whether the desc change line</td><td><code>nowrap</code></td></tr><tr><td><code>--cell-desc-font-weight</code></td><td>Desc font weight</td><td></td></tr><tr><td><code>--cell-desc-font-family</code></td><td>Desc font family</td><td><code>PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code>--cell-icon-font-size</code></td><td>Icon size</td><td><code>16px</code></td></tr><tr><td><code>--cell-quark-icon-color</code></td><td>Icon color</td><td><code>#969799</code></td></tr><tr><td><code>--cell-hspacing</code></td><td>left and right padding of cell</td><td><code>16px</code></td></tr><tr><td><code>--cell-vspacing</code></td><td>top and bottom padding of cell</td><td><code>13px</code></td></tr></tbody></table>`,25),p=[e],i={__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),t("div",n,p))}};export{i as default};
