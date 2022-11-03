import{c as a,o as t,a as n}from"./vue.7f40998a.js";const l={class:"markdown-body"},e=n(`<h1>Tab</h1><h3>Introduce</h3><p>Used to switch between different content areas.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tabs, TabContent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{1}</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>
    tab1 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>
    tab2 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    tab3 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>
    tab4 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Match By Name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">d</span>&#39;}&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
    tab1 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
    tab2 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
    tab3 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
    tab4 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Swipe Tabs</h3><p>Horizontal scrolling is automatically supported when the length exceeds the viewport.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>tab1<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>tab2<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  ...
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab10&quot;</span>&gt;</span>tab10<span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h3>Click Tab Event</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

  <span class="hljs-keyword">const</span> [activeName, setActiveName] = useState(<span class="hljs-string">&#39;d&#39;</span>);
  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setActiveName(<span class="hljs-function">() =&gt;</span> detail.name);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`current selection: <span class="hljs-subst">\${detail.label}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo tab-demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">activekey</span>=<span class="hljs-string">{activeName}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
          tab1 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
          tab2 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>
          tab3 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;d&quot;</span>&gt;</span>
          tab4 content
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}

</code></pre><h3>Sticky</h3><p>In sticky mode, the nav-item will be fixed to top when scroll to top.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;17vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab1&quot;</span>&gt;</span>
    tab1 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab2&quot;</span>&gt;</span>
    tab2 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab3&quot;</span>&gt;</span>
    tab3 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabContent</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tab4&quot;</span>&gt;</span>
    tab4 content
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabContent</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabs props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>activekey</td><td>The currently activated tab, corresponding to the <code>name</code> in <code>quark-tab-content</code></td><td><code>string</code></td><td>-</td></tr><tr><td>sticky</td><td>Whether to use sticky mode</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>offsettop</td><td>Sticky offset top , supports vm</td><td><code>string</code></td><td><code>0vw</code></td></tr><tr><td>linewidth</td><td>Width of tab line</td><td><code>string</code></td><td><code>40px</code></td></tr><tr><td>onChange</td><td>change callback</td><td><code>(e: {detail: { name: string\uFF0Clabel: number }}) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>TabContent props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>label</td><td>tab show name</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>tab Whether to disable tab</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>tab match label(matches activekey)</td><td><code>string</code></td><td>-</td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles\uFF0CPlease refer to<a href="#/zh-CN/guide/theme">Theme customization</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>--tab-item-color</code></td><td><code>tab-item</code> Font color</td><td><code>#5E6266</code></td></tr><tr><td><code>--tab-item-active-color</code></td><td><code>tab-item</code> Active state <code>active</code> font color</td><td><code>#333333</code></td></tr><tr><td><code>--tab-item-disabled-color</code></td><td><code>tab-item</code> Disabled state font color</td><td><code>#c8c9cc</code></td></tr><tr><td><code>--tab-item-min-width</code></td><td><code>tab-item</code> Minimum width (determines the maximum number of display in a line)</td><td><code>20vw</code>(Display up to 5 in a row)</td></tr><tr><td><code>--tab-item-height</code></td><td><code>tab-item</code> Height setting</td><td><code>44px </code></td></tr><tr><td><code>--tab-item-font-size</code></td><td><code>tab-item</code> Font size</td><td><code>16px</code></td></tr><tr><td><code>--tab-active-line-color</code></td><td><code>tab-item</code> active state <code>underline</code> color</td><td><code>#0088ff </code></td></tr><tr><td><code>--tabs-background-color</code></td><td>tabs Background color</td><td><code>#ffffff</code></td></tr><tr><td><code>--tab-item-background-color</code></td><td><code>tab-item</code> Background color</td><td><code>#ffffff </code></td></tr></tbody></table>`,25),p=[e],j={__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(d,h)=>(t(),a("div",l,p))}};export{j as default};
