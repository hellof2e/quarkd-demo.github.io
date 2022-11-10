import{d as a,c as t,a as n,o as l}from"./vue.eced4d61.js";const p={class:"markdown-body"},c=n(`<h1>Tabbar</h1><h3>Introduce</h3><p>Used to switch between different pages.</p><h3>Install</h3><p>If use quark-icons, please install: <code class="">npm install --save quark-icons</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/tabbar&quot;</span>;

<span class="hljs-comment">// import icons</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/home&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/user&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/tel&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Match by name</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Show Badge</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">badgecontent</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Custom Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">badgecontent</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 20px;&quot;</span>
      <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;activeIndex === &#39;0&#39; ? img1:img2 &quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;user&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeIndex</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">img1</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&amp;refer=http___inews.gtimg.jpeg&quot;</span>,
        <span class="hljs-attr">img2</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png&quot;</span>,
      };
    },
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">onChange1</span>(<span class="hljs-params">{ detail }</span>)</span> {
        <span class="hljs-built_in">this</span>.activeIndex = detail.value;
      },
    },
    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {},
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> <span class="hljs-attr">inactivecolor</span>=<span class="hljs-string">&quot;#000&quot;</span> <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-tabbar-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;tel&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-tabbar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{detail}</span>)</span> {
  Toast.text(<span class="hljs-string">\`currently selected: <span class="hljs-subst">\${detail.value}</span>\`</span>);
}
</code></pre><h2>API</h2><h3>Quark-tabbar Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>fixed</td><td>Whether to fixed bottom</td><td><code class="">boolean</code></td><td><code class="">true </code></td></tr><tr><td>inactivecolor</td><td>Color of inactive tab item</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>activecolor</td><td>Color of active tab item</td><td><code class="">string </code></td><td><code class="">#0088FF</code></td></tr><tr><td>value</td><td>name or index of active tab item</td><td><code class="">string</code></td><td><code class="">0</code></td></tr></tbody></table><h3>Quark-tabbar-item Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead><tbody><tr><td>label</td><td>Label name, used to show</td><td><code class="">string</code></td><td></td></tr><tr><td>name</td><td>Label value, as the matched identifier</td><td><code class="">string</code></td><td></td></tr><tr><td>badgecontent</td><td>Content of the badge</td><td><code class="">string</code></td><td></td></tr></tbody></table><h3>Quark-tabbar Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Callback Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when changing active tab</td><td><code class="">{e:{detail: {value: The selected name or index value}}} =&gt; void</code></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>icon</td><td>icon</td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>\uFF0Cwhich can be used to customize styles.Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--tabbar-z-index</code></td><td>tabbar z-index</td><td><code class="">1 </code></td></tr><tr><td><code class="">--tabbar-box-shadow</code></td><td>tabbar upper shadow</td><td><code class="">0px -2px 8px 0px rgba(36, 39, 41, 0.08)</code></td></tr><tr><td><code class="">--tabbar-font-size</code></td><td>tabbar font size</td><td><code class="">10px</code></td></tr><tr><td><code class="">--tabbar-height</code></td><td>tabbar height</td><td><code class="">56px </code></td></tr></tbody></table>`,31),e=[c],u={},i="",g=a({__name:"doc.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),t("div",p,e))}});export{g as default,i as excerpt,u as frontmatter};
