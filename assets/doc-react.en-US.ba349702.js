import{c as a,o as t,a as n}from"./vue.a14da11e.js";const e={class:"markdown-body"},l=n(`<h1>Checkbox</h1><h3>Intro</h3><p>A group of options for multiple choices.</p><br> To toggle between the checked and unchecked status. <h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>
</code></pre><h3>Basic Usage</h3><p>To change the checked status, bind and set <code>checked</code> prop on the Checkbox.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

  <span class="hljs-keyword">const</span> [checked, setCheck] = useState(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {
    setCheck(<span class="hljs-function">() =&gt;</span> !checked);
  };

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><h3>Shape</h3><p>Checkbox shape supports <code>round</code> and <code>square</code>, the default is <code>round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Size</h3><p>Checkbox size supports <code>normal</code> and <code>big</code>, the default is <code>normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>default shape - big<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>square - big<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable Checkbox, add <code>disabled</code> prop on the Checkbox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Checkbox Group</h3><p>Checkboxes support grouping.<br>&gt; Due to technical limitations, the value of the Checkbox group needs to be a string consisting of an array via the join() method.</p><pre><code class="language-jsx">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt;  {
  <span class="hljs-keyword">const</span> [groupValue, setGroupValue] = useState([<span class="hljs-string">&#39;Apple&#39;</span>, <span class="hljs-string">&#39;Orange&#39;</span>]);

  <span class="hljs-keyword">const</span> onGroupChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setGroupValue(<span class="hljs-function">() =&gt;</span> detail.value);
  };

  <span class="hljs-keyword">return</span>(
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{groupValue.join()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onGroupChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>Checkbox-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>

<span class="hljs-comment">&lt;!-- CSS --&gt;</span>
Checkbox {
  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);
}
</code></pre><h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code>round</code> <code>square</code></td><td><code>string</code></td><td><code>round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code>normal</code> <code>big</code></td><td><code>string</code></td><td><code>normal</code></td></tr><tr><td>disabled</td><td>Disable Checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>checked</td><td>Check status</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3>CheckboxGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific Checkbox</td><td><code>string</code></td><td>-</td></tr><tr><td>onChange</td><td>Emitted when Checkbox check status changed</td><td><code>(e: {detail: {value: string}}) =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--checkbox-font-size</code></td><td>Checkbox label font size</td><td><code>12px</code></td></tr><tr><td><code>--checkbox-color</code></td><td>Checkbox label font color</td><td><code>#242729</code></td></tr><tr><td><code>--checkbox-label-height</code></td><td>Checkbox label line-height</td><td>same as the height of Checkbox</td></tr><tr><td><code>--checkbox-size</code></td><td>Checkbox size\uFF0CPriority is higher than <code>size</code> prop</td><td><code>16px; big: 20px</code></td></tr><tr><td><code>--checkbox-background</code></td><td>checked color</td><td><code>#0088ff</code></td></tr></tbody></table>`,33),c=[l],g={__name:"doc-react.en-US",setup(p,{expose:s}){return s({frontmatter:{}}),(o,d)=>(t(),a("div",e,c))}};export{g as default};
