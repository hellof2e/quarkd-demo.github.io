import{d as a,c as n,a as t,o as l}from"./vue.de3638f0.js";const e={class:"markdown-body"},p=t(`<h1>Radio</h1><h3>Intro</h3><p>Single radio, Single selection among multiple options.</p><h2>Install</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Radio } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Generally appear in groups. Use <code class="">value</code> to bind the name of checked radio.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">import</span> { Radio, RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value1, setValue1] = useState(<span class="hljs-string">&quot;apple&quot;</span>);
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setValue(<span class="hljs-function">() =&gt;</span> detail.value);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
};
</code></pre><h3>Shape</h3><p>Radio shape supports <code class="">round</code> and <code class="">square</code>, the default is <code class="">round</code>.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">import</span> { Radio, RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value1, setValue1] = useState(<span class="hljs-string">&quot;apple&quot;</span>);
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setValue(<span class="hljs-function">() =&gt;</span> detail.value);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>
          Square
        <span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
};
</code></pre><h3>Size</h3><p>Radio size supports <code class="">normal</code> and <code class="">big</code>, the default is <code class="">normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;{value}&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Square(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>Round(Big)<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable radio, add <code class="">disabled</code> prop on the Radio.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{true}&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{false}&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{true}&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>
  &gt;</span>square - checked - disabled&lt;/Radio
&gt;
<span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;{false}&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">disabled</span>
  &gt;</span>square - unchecked - disabled&lt;/Radio
&gt;
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-radio&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Radio-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>

<span class="hljs-comment">&lt;!-- CSS --&gt;</span>
.my-radio { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
</code></pre><h2>API</h2><h3>Radio Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code class="">round</code> <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code class="">normal</code> <code class="">big</code></td><td><code class="">string </code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>Disable radio</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>RadioGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>Specific radio</td><td><code class="">String</code></td><td>-</td></tr><tr><td>onChange</td><td>Emitted when radio check status changed <code class="">(e:{detail: {value: string}})=&gt;void</code></td><td></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--radio-font-size</code></td><td>radio label font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--radio-color</code></td><td>radio label font color</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--radio-label-height</code></td><td>radio label line-height</td><td>same as the height of radio</td></tr><tr><td><code class="">--radio-size</code></td><td>radio size\uFF0CPriority is higher than <code class="">size</code> prop</td><td><code class="">16px; big: 20px</code></td></tr><tr><td><code class="">--radio-background</code></td><td>checked color</td><td><code class="">#0088ff</code></td></tr></tbody></table>`,28),o=[p],i={},u="",g=a({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,h)=>(l(),n("div",e,o))}});export{g as default,u as excerpt,i as frontmatter};
