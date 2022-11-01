import{c as e,o as d,a}from"./vue.77604f68.js";const s={class:"markdown-body"},o=a(`<h1>Image</h1><h3>Intro</h3><p>Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.</p><h3>Install</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Image } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span> /&gt;</span>
</code></pre><h3>Round</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">round</span>
/&gt;</span>
</code></pre><h3>Lazy load</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span>
  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
  <span class="hljs-attr">lazy</span>
/&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>width</td><td>Width\uFF0Cdefault unit is px</td><td><code>number</code> or <code>string</code></td><td>-</td></tr><tr><td>height</td><td>Height\uFF0Cdefault unit is px</td><td><code>number</code> or <code>string</code></td><td>-</td></tr><tr><td>fit</td><td>Fit mode, same as <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit">object-fit</a></td><td><code>string</code></td><td><code>fill</code></td></tr><tr><td>lazy</td><td>Whether to enable lazy load</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>round</td><td>Whether to be round</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>radius</td><td>Border Radius</td><td><code>number</code> or <code>string</code></td><td>-</td></tr><tr><td>alt</td><td>Alternate textual description of image</td><td><code>string</code></td><td>-</td></tr><tr><td>onClick</td><td>Emitted when image is clicked</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onLoad</td><td>Emitted when image loaded</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onError</td><td>Emitted when image load failed</td><td><code>(error) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>Fit optional value</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>contain</td><td>Keep aspect ratio, fully display the long side of the image</td></tr><tr><td>cover</td><td>Keep aspect ratio, fully display the short side of the image, cutting the long side</td></tr><tr><td>fill</td><td>Stretch and resize image to fill the content box</td></tr><tr><td>none</td><td>Not resize image</td></tr><tr><td>scale-down</td><td>Take the smaller of <code>none</code> or <code>contain</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>loading</td><td>Custom loading placeholder</td></tr><tr><td>error</td><td>Custom error placeholder</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-height</code></td><td>Image height</td><td><code>100%</code></td></tr><tr><td><code>--image-width</code></td><td>Image width</td><td><code>100%</code></td></tr></tbody></table>`,21),r=[o],p={__name:"doc-react.en-US",setup(n,{expose:t}){return t({frontmatter:{}}),(h,c)=>(d(),e("div",s,r))}};export{p as default};
