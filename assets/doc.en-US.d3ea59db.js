import{d as t,c as a,a as n,o as l}from"./vue.d5c6d028.js";const p={class:"markdown-body"},e=n(`<h1>Tooltip</h1><h3>Intro</h3><p>Simple text prompt bubbles.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/tooltip&quot;</span>;
</code></pre><h3>Set Tips Direction</h3><p>The tips position of the bubble is controlled by the placement property.</p><pre><code class="language-tsx">&lt;quark-tooltip placement=<span class="hljs-string">&quot;top&quot;</span> tips=<span class="hljs-string">&quot;bubble text&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/quark-tooltip&gt;
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
</code></pre><h3>Show Close Button</h3><p>Control whether to display the close button through the closeable property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-JS"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    }
  }
};
</code></pre><h3>Whether To Close Automatically</h3><p>Whether to automatically close is controlled by the autoclose property, and how many milliseconds it will be automatically closed by the opentime property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>
  <span class="hljs-attr">autoclose</span>
  <span class="hljs-attr">opentime</span>=<span class="hljs-string">&quot;5000&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-JS"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    }
  }
};
</code></pre><h3>Scroll To Close</h3><p>Controls whether to close when the page is scrolled through the scroolhidden property.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>
  <span class="hljs-attr">scroolhidden</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
</code></pre><pre><code class="language-JS"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
    }
  }
};
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tooltip</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;bubble text&quot;</span>
  <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>top position<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.custom-style</span> {
    --tips-<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#0088ff</span>;
    --tips-<span class="hljs-attribute">font-weight</span>: <span class="hljs-number">500</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-JS"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>
    }
  }
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>open</td><td>Whether to show tip</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>placement</td><td>Position of tip</td><td><code class="">top</code> <code class="">topleft</code> <code class="">topright</code> <code class="">left</code> <code class="">lefttop</code> <code class="">leftbottom</code> <code class="">right</code> <code class="">righttop</code> <code class="">rightbottom</code> <code class="">bottom</code> <code class="">bottomleft</code> <code class="">bottomright</code></td><td><code class="">bottom</code></td></tr><tr><td>tips</td><td>content of tip</td><td><code class="">string </code></td><td><code class="">require</code></td></tr><tr><td>closeable</td><td>Whether to show close button</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autoclose</td><td>Whether to automatically close after display</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>opentime</td><td>Time from display to auto-off</td><td><code class="">string</code></td><td><code class="">3000</code></td></tr><tr><td>scroolhidden</td><td>Whether to close automatically when the page is scrolled</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>z-index</td><td><code class="">number</code></td><td><code class="">999</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Callback</th></tr></thead><tbody><tr><td>close</td><td>tip disappear callback</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--tips-background-color</code></td><td>background color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--tips-color</code></td><td>color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--tips-font-size</code></td><td>font size</td><td><code class="">14</code></td></tr><tr><td><code class="">--tips-font-weight</code></td><td>font weight</td><td><code class="">400</code></td></tr><tr><td><code class="">--tips-line-height</code></td><td>line height</td><td><code class="">1.4</code></td></tr><tr><td><code class="">--tips-hspacing</code></td><td>horizontal padding</td><td><code class="">8px</code></td></tr><tr><td><code class="">--tips-vspacing</code></td><td>vertical padding</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-bottom</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is top, topleft, topright\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-top</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is bottom, bottomleft, bottomright\uFF09</td><td><code class="">6px</code></td></tr><tr><td><code class="">--tips-margin-right</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is left, lefttop, leftbottom\uFF09</td><td><code class="">16px</code></td></tr><tr><td><code class="">--tips-margin-left</code></td><td>tip distance from actual display element\uFF08It takes effect when placement is right, righttop, rightbottom\uFF09</td><td><code class="">16px</code></td></tr></tbody></table>`,33),o=[e],i={},j="",u=t({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,h)=>(l(),a("div",p,o))}});export{u as default,j as excerpt,i as frontmatter};
