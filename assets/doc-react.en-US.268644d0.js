import{c as s,o as a,a as e}from"./vue.c5ba06d9.js";const o={class:"markdown-body"},n=e(`<h1>Tooltip</h1><h3>Intro</h3><p>Simple text prompt bubbles.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tooltip } <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> click = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };
  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span>
        <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> {
          handleClose();
        }}
      &gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
            click();
          }}
        &gt;top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}

</code></pre><h3>Set Tips Direction</h3><p>The tips position of the bubble is controlled by the placement property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
</code></pre><p>Placement supports the following values:</p><pre><code class="language-tsx">top           # top middle position
topleft       # top left position
topright      # top right position
left          # left middle position
lefttop       # left top position
leftbottom    # left bottom position
right         # right middle position
righttop      # right top position
rightbottom   # left bottom position
bottom        # bottom middle position
bottomleft    # bottom left position
bottomright   # bottom right position
</code></pre><h3>Show Close Button</h3><p>Control whether to display the close button through the closeable property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span> <span class="hljs-attr">closeable</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
</code></pre><h3>Whether To Close Automatically</h3><p>Whether to automatically close is controlled by the autoclose property, and how many milliseconds it will be automatically closed by the opentime property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span> <span class="hljs-attr">autoclose</span> <span class="hljs-attr">opentime</span>=<span class="hljs-string">&quot;5000&quot;</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
</code></pre><h3>Scroll To Close</h3><p>Controls whether to close when the page is scrolled through the scroolhidden property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span> <span class="hljs-attr">scroolhidden</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tooltip</span> <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.custom-style</span>{
  --tips-<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#0088ff</span>;
  --tips-<span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>open</td><td>Whether to show tip</td><td><code>boolean</code></td><td><code>require</code></td></tr><tr><td>placement</td><td>Position of tip</td><td><code>top</code> <code>topleft</code> <code>topright</code> <code>left</code> <code>lefttop</code> <code>leftbottom</code> <code>right</code> <code>righttop</code> <code>rightbottom</code> <code>bottom</code> <code>bottomleft</code> <code>bottomright</code></td><td><code>bottom</code></td></tr><tr><td>tips</td><td>content of tip</td><td><code>string </code></td><td><code>require</code></td></tr><tr><td>closeable</td><td>Whether to show close button</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoclose</td><td>Whether to automatically close after display</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>opentime</td><td>Time from display to auto-off</td><td><code>string</code></td><td><code>3000</code></td></tr><tr><td>scroolhidden</td><td>Whether to close automatically when the page is scrolled</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zindex</td><td>z-index</td><td><code>number</code></td><td><code>999</code></td></tr><tr><td>onClose</td><td>tip disappear callback</td><td><code>() =&gt; void</code></td><td><code>require</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--tips-background-color</code></td><td>background color</td><td><code>#242729</code></td></tr><tr><td><code>--tips-color</code></td><td>color</td><td><code>#fff</code></td></tr><tr><td><code>--tips-font-size</code></td><td>font size</td><td><code>14</code></td></tr><tr><td><code>--tips-font-weight</code></td><td>font weight</td><td><code>400</code></td></tr><tr><td><code>--tips-line-height</code></td><td>line height</td><td><code>1.4</code></td></tr><tr><td><code>--tips-hspacing</code></td><td>horizontal padding</td><td><code>8px</code></td></tr><tr><td><code>--tips-vspacing</code></td><td>vertical padding</td><td><code>6px</code></td></tr><tr><td><code>--tips-margin-bottom</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is top, topleft, topright\uFF09</td><td><code>6px</code></td></tr><tr><td><code>--tips-margin-top</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is bottom, bottomleft, bottomright\uFF09</td><td><code>6px</code></td></tr><tr><td><code>--tips-margin-right</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is left, lefttop, leftbottom\uFF09</td><td><code>16px</code></td></tr><tr><td><code>--tips-margin-left</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is right, righttop, rightbottom\uFF09</td><td><code>16px</code></td></tr></tbody></table>`,29),l=[n],r={__name:"doc-react.en-US",setup(p,{expose:t}){return t({frontmatter:{}}),(c,i)=>(a(),s("div",o,l))}};export{r as default};
