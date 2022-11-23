import{d as a,c as t,a as n,o as l}from"./vue.61e44a0e.js";const o={class:"markdown-body"},e=n(`<h1>Button</h1><h3>Intro</h3><p>To trigger an operation.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Type</h3><p>There are <code class="">primary</code>, <code class="">success</code>, <code class="">danger</code>, <code class="">warning</code> and default type.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Blue<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Green<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Red<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Yellow<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grey&quot;</span>&gt;</span>Grey<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Plain</h3><p>To set the Button as a plain Button, add <code class="">plain</code> prop to the Button. The plain Button\u2019s text is the Button color, and the background is white.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">plain</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Size</h3><p>Support <code class="">big</code>, <code class="">small</code>, the default is normal.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Big<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Normal<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To mark a Button as disabled, add <code class="">disabled</code> prop to the Button. The Button cannot be clicked when disabled.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">plain</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Shape</h3><p>A Button shape can be added to a Button by setting <code class="">shape</code> prop on the Button, which supports <code class="">round</code> and <code class="">square</code> Buttons. The default is small rounded corners.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Square<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Round<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h3>Loading</h3><p>A loading indicator can be added to a Button by setting <code class="">loading</code> prop on the Button. <code class="">loadingcolor</code> prop controls the loading color, <code class="">loadingsize</code> prop controls the loading size, and <code class="">loadingtype</code> prop controls the loading type. For loading, refer to the loading component.</p><pre><code class="language-tsx">&lt;Button loading <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;danger&quot;</span> loadtype=<span class="hljs-string">&quot;circular&quot;</span>&gt;Loading...&lt;/Button&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;changeLoading&quot;</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">{isLoading}</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Click me!<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
</code></pre><h3>Icon</h3><p>Button components can contain an Icon. This is done by setting <code class="">icon</code> prop within the Button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png&quot;</span>
&gt;</span>
  Like
<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Button type\uFF0Ccan be set to <code class="">primary</code>,<code class="">success</code>,<code class="">danger</code>,<code class="">warning</code></td><td><code class="">string</code></td><td>-</td></tr><tr><td>size</td><td>Button size\uFF0Ccan be set to <code class="">small</code>, <code class="">normal</code>, <code class="">big</code>, <code class="">large</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>Whether to disable button</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>icon</td><td>Icon on button (can be set to url link)</td><td><code class="">string</code></td><td>-</td></tr><tr><td>shape</td><td>Button shape\uFF0Ccan be set to <code class="">square</code>, <code class="">round</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>plain</td><td>Whether to be plain button</td><td><code class="">boolean</code></td><td><code class="">false </code></td></tr><tr><td>loading</td><td>Whether to show loading status</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loadtype</td><td>Loading type\uFF0Ccan be set to <code class="">circular</code></td><td><code class="">string</code></td><td><code class="">spinner</code></td></tr><tr><td>loadingcolor</td><td>Loading color</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>loadingsize</td><td>Loading size</td><td><code class="">string</code></td><td><code class="">20</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--button-height</code></td><td>Height of button</td><td><code class="">32px</code></td></tr><tr><td><code class="">--button-hspacing</code></td><td>Left and right padding of button</td><td><code class="">12px</code></td></tr><tr><td><code class="">--button-font-size</code></td><td>font size on button</td><td><code class="">14px</code></td></tr><tr><td><code class="">--button-border-radius</code></td><td>Border-radius of button</td><td><code class="">8px</code></td></tr><tr><td><code class="">--button-color</code></td><td>Font color on button</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--button-icon-hspacing</code></td><td>icon margin right</td><td><code class="">6px</code></td></tr><tr><td><code class="">--button-icon-size</code></td><td>icon size</td><td><code class="">1em</code></td></tr><tr><td><code class="">--button-big-border-radius</code></td><td>Border-radius of big size button</td><td><code class="">8px</code></td></tr></tbody></table>`,34),c=[e],g={},u="",i=a({__name:"doc-react.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(l(),t("div",o,c))}});export{i as default,u as excerpt,g as frontmatter};
