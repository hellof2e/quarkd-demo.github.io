import{c as t,o as a,a as n}from"./vue.0c3fa157.js";const l={class:"markdown-body"},o=n(`<h1>Button</h1><h3>Intro</h3><p>To trigger an operation.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Type</h3><p>There are <code>primary</code>, <code>success</code>, <code>danger</code>, <code>warning</code> and default type.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Blue<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Green<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Red<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Yellow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grey&quot;</span>&gt;</span>Grey<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Plain</h3><p>To set the button as a plain button, add <code>plain</code> prop to the Button. The plain button\u2019s text is the button color, and the background is white.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Size</h3><p>Support <code>big</code>, <code>small</code>, the default is normal.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Big<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To mark a button as disabled, add <code>disabled</code> prop to the Button. The button cannot be clicked when disabled.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">plain</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Shape</h3><p>A button shape can be added to a button by setting <code>shape</code> prop on the Button, which supports <code>round</code> and <code>square</code> buttons. The default is small rounded corners.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Round<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Loading</h3><p>A loading indicator can be added to a button by setting <code>loading</code> prop on the Button. <code>loadingcolor</code> prop controls the loading color, <code>loadingsize</code> prop controls the loading size, and <code>loadingtype</code> prop controls the loading type. For loading, refer to the loading component.</p><pre><code class="language-tsx">&lt;Button loading <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;danger&quot;</span> loadtype=<span class="hljs-string">&quot;circular&quot;</span>&gt;Loading...&lt;/Button&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;changeLoading&quot;</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">{isLoading}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Click me!<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
</code></pre><h3>Icon</h3><p>Button components can contain an Icon. This is done by setting <code>icon</code> prop within the Button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png&quot;</span>&gt;</span>
  Like
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Button type\uFF0Ccan be set to <code>primary</code>,<code>success</code>,<code>danger</code>,<code>warning</code></td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td>size</td><td>Button size\uFF0Ccan be set to <code>small</code>, <code>normal</code>, <code>big</code>, <code>large</code></td><td><code>string</code></td><td><code>normal</code></td></tr><tr><td>disabled</td><td>Whether to disable button</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>Icon on button (can be set to url link)</td><td><code>string</code></td><td>-</td></tr><tr><td>shape</td><td>Button shape\uFF0Ccan be set to <code>square</code>, <code>round</code></td><td><code>string</code></td><td><code>round</code></td></tr><tr><td>plain</td><td>Whether to be plain button</td><td><code>boolean</code></td><td><code>false </code></td></tr><tr><td>loading</td><td>Whether to show loading status</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loadtype</td><td>Loading type\uFF0Ccan be set to <code>circular</code></td><td><code>string</code></td><td><code>spinner</code></td></tr><tr><td>loadingcolor</td><td>Loading color</td><td><code>string</code></td><td><code>#fff</code></td></tr><tr><td>loadingsize</td><td>Loading size</td><td><code>string</code></td><td><code>20</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>--button-height</code></td><td>Height of button</td><td><code>32px</code></td></tr><tr><td><code>--button-hspacing</code></td><td>Left and right padding of button</td><td><code>12px</code></td></tr><tr><td><code>--button-font-size</code></td><td>font size on button</td><td><code>14px</code></td></tr><tr><td><code>--button-border-radius</code></td><td>Border-radius of button</td><td><code>8px</code></td></tr><tr><td><code>--button-color</code></td><td>Font color on button</td><td><code>#fff</code></td></tr><tr><td><code>--button-icon-hspacing</code></td><td>icon margin right</td><td><code>6px</code></td></tr></tbody></table>`,34),e=[o],g={__name:"doc-react.en-US",setup(p,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",l,e))}};export{g as default};
