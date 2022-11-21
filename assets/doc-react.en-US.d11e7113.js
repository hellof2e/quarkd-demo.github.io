import{d as a,c as n,a as t,o as l}from"./vue.7f245ff4.js";const p={class:"markdown-body"},c=t(`<h1>Tabbar</h1><h3>Introduce</h3><p>Used to switch between different pages.</p><h3>Install</h3><p>If use quark-icons, please install: <code class="">npm install --save quark-icons</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Tabbar, TabbarItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-comment">// import icons</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/home&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/user&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/tel&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>Match by name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">badgecontent</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">inactivecolor</span>=<span class="hljs-string">&quot;#000&quot;</span> <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h3>Custom Icon</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> img1 = <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src.jpeg&quot;</span>;
  <span class="hljs-keyword">const</span> img2 = <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png&quot;</span>;
  <span class="hljs-keyword">const</span> [activeIndex, setActiveIndex] = useState(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setActiveIndex(detail.value);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`currently selected\uFF1A<span class="hljs-subst">\${detail.value}</span>\`</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo no-padding scope-list&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
            <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>
            <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">height:</span> <span class="hljs-attr">20</span> }}
            <span class="hljs-attr">src</span>=<span class="hljs-string">{activeIndex</span> === <span class="hljs-string">1</span> ? <span class="hljs-attr">img1</span> <span class="hljs-attr">:</span> <span class="hljs-attr">img2</span>}
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Tabbar</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;{&quot;</span> <span class="hljs-attr">onChange</span> }&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">TabbarItem</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">TabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Tabbar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabbar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>fixed</td><td>Whether to fixed bottom</td><td><code class="">boolean</code></td><td><code class="">true </code></td></tr><tr><td>inactivecolor</td><td>Color of inactive tab item</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>activecolor</td><td>Color of active tab item</td><td><code class="">string </code></td><td><code class="">#0088FF</code></td></tr><tr><td>value</td><td>name or index of active tab item</td><td><code class="">string</code></td><td><code class="">0</code></td></tr><tr><td>onChange</td><td>Emitted when changing active tab</td><td><code class="">{e:{detail: {value: The selected name or index value}}} =&gt; void</code></td><td></td></tr></tbody></table><h3>TabbarItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>label</td><td>Label name, used to show</td><td><code class="">string</code></td><td></td></tr><tr><td>name</td><td>Label value, as the matched identifier</td><td><code class="">string</code></td><td></td></tr><tr><td>badgecontent</td><td>Content of the badge</td><td><code class="">string</code></td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>icon</td><td>icon</td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles.Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--tabbar-z-index</code></td><td>tabbar z-index</td><td><code class="">1 </code></td></tr><tr><td><code class="">--tabbar-box-shadow</code></td><td>tabbar upper shadow</td><td><code class="">0px -2px 8px 0px rgba(36, 39, 41, 0.08)</code></td></tr><tr><td><code class="">--tabbar-font-size</code></td><td>tabbar font size</td><td><code class="">10px</code></td></tr><tr><td><code class="">--tabbar-height</code></td><td>tabbar height</td><td><code class="">56px </code></td></tr></tbody></table>`,28),e=[c],g={},i="",d=a({__name:"doc-react.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(l(),n("div",p,e))}});export{d as default,i as excerpt,g as frontmatter};
