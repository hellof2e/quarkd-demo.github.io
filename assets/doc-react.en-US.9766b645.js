import{d as t,c as n,b as e,e as s,a as l,o as c}from"./vue.a903c79e.js";const p={class:"markdown-body"},o=s("h1",null,"Checkbox",-1),h=s("h3",null,"Intro",-1),d=s("p",null,"A group of options for multiple choices.",-1),r=s("br",null,null,-1),g=l(`<h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>To change the checked status, bind and set <code class="">checked</code> prop on the Checkbox.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [checked, setCheck] = useState(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">() =&gt;</span> {
    setCheck(<span class="hljs-function">() =&gt;</span> !checked);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
        Apple
      <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
};
</code></pre><h3>Shape</h3><p>Checkbox shape supports <code class="">round</code> and <code class="">square</code>, the default is <code class="">round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Size</h3><p>Checkbox size supports <code class="">normal</code> and <code class="">big</code>, the default is <code class="">normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
  &gt;</span>default shape - big&lt;/Checkbox
&gt;
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>square - big<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable Checkbox, add <code class="">disabled</code> prop on the Checkbox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
</code></pre><h3>Checkbox Group</h3><p>Checkboxes support grouping.<br>&gt; Due to technical limitations, the value of the Checkbox group needs to be a string consisting of an array via the join() method.</p><pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [groupValue, setGroupValue] = useState([<span class="hljs-string">&quot;Apple&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>]);

  <span class="hljs-keyword">const</span> onGroupChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setGroupValue(<span class="hljs-function">() =&gt;</span> detail.value);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{groupValue.join()}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onGroupChange}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
          Orange
        <span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  );
};
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>&gt;</span>Checkbox-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>

<span class="hljs-comment">&lt;!-- CSS --&gt;</span>
Checkbox { --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640
100%); }
</code></pre><h2>API</h2><h3>Checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code class="">round</code> <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code class="">normal</code> <code class="">big</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>Disable Checkbox</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>checked</td><td>Check status</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>CheckboxGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific Checkbox</td><td><code class="">string</code></td><td>-</td></tr><tr><td>onChange</td><td>Emitted when Checkbox check status changed</td><td><code class="">(e: {detail: {value: string}}) =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--checkbox-font-size</code></td><td>Checkbox label font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--checkbox-color</code></td><td>Checkbox label font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--checkbox-label-height</code></td><td>Checkbox label line-height</td><td>same as the height of Checkbox</td></tr><tr><td><code class="">--checkbox-size</code></td><td>Checkbox size\uFF0CPriority is higher than <code class="">size</code> prop</td><td><code class="">16px; big: 20px</code></td></tr><tr><td><code class="">--checkbox-background</code></td><td>checked color</td><td><code class="">#0088ff</code></td></tr></tbody></table>`,28),k={},C="",x=t({__name:"doc-react.en-US",setup(i,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(u,j)=>(c(),n("div",p,[o,h,d,r,e(" To toggle between the checked and unchecked status. "),g]))}});export{x as default,C as excerpt,k as frontmatter};
