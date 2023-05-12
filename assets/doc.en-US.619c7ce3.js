import{d as s,c as a,a as e,o as d}from"./vue.6fd8ce74.js";const o={class:"markdown-body"},n=e(`<h1>Empty</h1><h3>Intro</h3><p>Empty status.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/empty&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> /&gt;</span>
</code></pre><h3>Description</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;no data&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;add data now~&quot;</span> /&gt;</span>
</code></pre><h3>Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;no data&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;add data now~&quot;</span> <span class="hljs-attr">buttontext</span>=<span class="hljs-string">&quot;go to Order&quot;</span> /&gt;</span>
</code></pre><h3>Custom Image Size</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- default unit is px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;no data&quot;</span>
  <span class="hljs-attr">imagesize</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png&quot;</span>
/&gt;</span>

<span class="hljs-comment">&lt;!-- support rem, em, vw, vh --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;no data&quot;</span>
  <span class="hljs-attr">imagesize</span>=<span class="hljs-string">&quot;100rem&quot;</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png&quot;</span>
/&gt;</span>
</code></pre><h3>Custom Image</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span>
  <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;no data&quot;</span>
  <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png&quot;</span>
/&gt;</span>
</code></pre><h3>Custom Bottom</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Go and Order&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;no order history&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>custom footer<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-empty</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>desc</td><td>Description</td><td><code class="">string</code></td><td></td></tr><tr><td>image</td><td>image url</td><td><code class="">string</code></td><td></td></tr><tr><td>imagesize</td><td>image size</td><td><code class="">string</code></td><td></td></tr><tr><td>buttontext</td><td>button text</td><td><code class="">string</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--empty-padding</code></td><td>Container padding</td><td><code class="">32px 0</code></td></tr><tr><td><code class="">--empty-title-font-size</code></td><td>Title font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--empty-image-width</code></td><td>Image width</td><td><code class="">191px</code></td></tr><tr><td><code class="">--empty-title-color</code></td><td>Title font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--empty-title-line-height</code></td><td>Title line-height</td><td><code class="">22px</code></td></tr><tr><td><code class="">--empty-title-white-space</code></td><td>Whether title change line</td><td><code class="">pre-wrap</code></td></tr><tr><td><code class="">--empty-desc-font-size</code></td><td>Desc font size</td><td></td></tr><tr><td><code class="">--empty-desc-color</code></td><td>Desc font color</td><td><code class="">#969799</code></td></tr><tr><td><code class="">--empty-desc-line-height</code></td><td>Desc line-height</td><td><code class="">20px</code></td></tr><tr><td><code class="">--empty-desc-width</code></td><td>Desc font width</td><td></td></tr><tr><td><code class="">--empty-desc-white-space</code></td><td>Whether desc change line</td><td><code class="">pre-wrap</code></td></tr><tr><td><code class="">--empty-button-font-size</code></td><td>Button font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--empty-button-text-color</code></td><td>Button text color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--empty-button-margin-top</code></td><td>Button margin top</td><td><code class="">20px</code></td></tr><tr><td><code class="">--empty-button-background-color</code></td><td>Button background color</td><td><code class="">#0088ff</code></td></tr><tr><td><code class="">--empty-button-line-height</code></td><td>Button line height</td><td><code class="">22px</code></td></tr><tr><td><code class="">--empty-button-padding-column</code></td><td>Button padding column</td><td><code class="">9px</code></td></tr><tr><td><code class="">--empty-button-padding-row</code></td><td>Button padding row</td><td><code class="">34px</code></td></tr><tr><td><code class="">--empty-button-border-radius</code></td><td>Button border radius</td><td><code class="">20px</code></td></tr></tbody></table>`,23),c=[n],i={},m="",u=s({__name:"doc.en-US",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,r)=>(d(),a("div",o,c))}});export{u as default,m as excerpt,i as frontmatter};
