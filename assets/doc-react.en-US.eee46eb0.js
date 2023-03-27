import{d as t,c as a,a as n,o as l}from"./vue.62476c4f.js";const p={class:"markdown-body"},e=n(`<h1>Grid</h1><h3>Intro</h3><p>Used to divide the page into blocks of equal width in the horizontal direction for displaying content or page navigation.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Grid, GridItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>To change the icon and add text in the block, set <code class="">icon</code> prop and <code class="">text</code> prop on the Grid respectively.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>Column Num</h3><p>To change the column number of grid, set <code class="">column</code> prop on the Grid. The default is 4.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">column</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>Square</h3><p>To make every block of grid be quare shape, add <code class="">square</code> prop on the Grid.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">square</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>No Border</h3><p>Every block of grid has no border when add <code class="">noborder</code> prop on the Grid.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">noborder</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>
    <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
    <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u6587\u5B57&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h3>Custom Content</h3><p>To custom content in the block of grid, use Grid with default slot.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 40px;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>column</td><td>Column number</td><td>String</td><td><code class="">4</code></td></tr><tr><td>noborder</td><td>Whether to hide border</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>square</td><td>Whether to be square shape</td><td>Boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>GridItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>text</td><td>Text</td><td>String</td><td></td></tr><tr><td>icon</td><td>Icon</td><td>String</td><td></td></tr><tr><td>iconsize</td><td>Icon size</td><td>String</td><td><code class="">28px</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Descripton</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--grid-item-background-color</code></td><td>Block background color</td><td><code class="">#FFFFFF</code></td></tr><tr><td><code class="">--grid-item-text-font-size</code></td><td>Block text font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--grid-item-text-color</code></td><td>Block text font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--grid-item-text-margin-top</code></td><td>Distance between text and icon</td><td><code class="">8px</code></td></tr><tr><td><code class="">--grid-item-icon-font-size</code></td><td>Icon size</td><td><code class="">28px</code></td></tr><tr><td><code class="">--grid-item-hspacing</code></td><td>Block content left and right padding</td><td><code class="">16px</code></td></tr><tr><td><code class="">--grid-item-vspacing</code></td><td>Block content top and bottom padding</td><td><code class="">16px</code></td></tr></tbody></table>`,28),o=[e],i={},g="",u=t({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),a("div",p,o))}});export{u as default,g as excerpt,i as frontmatter};
