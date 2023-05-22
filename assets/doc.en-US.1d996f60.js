import{d as t,c as e,b as n,e as s,a as c,o as l}from"./vue.49cbd51d.js";const p={class:"markdown-body"},o=s("h1",null,"CheckBox",-1),h=s("h3",null,"Intro",-1),d=s("p",null,"A group of options for multiple choices.",-1),r=s("br",null,null,-1),u=c(`<h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/checkbox&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>To change the checked status, bind and set <code class="">checked</code> prop on the CheckBox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;mycheck&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>checked<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>unchecked<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">mycheck</span>: <span class="hljs-literal">true</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.mycheck = detail.value;
    },
  },
};
</code></pre><h3>Shape</h3><p>Checkbox shape supports <code class="">round</code> and <code class="">square</code>, the default is <code class="">round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><h3>Size</h3><p>Checkbox size supports <code class="">normal</code> and <code class="">big</code>, the default is <code class="">normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
  &gt;</span>default shape - big&lt;/quark-checkbox
&gt;
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
  &gt;</span>square - big&lt;/quark-checkbox
&gt;
</code></pre><h3>Disabled</h3><p>To disable checkbox, add <code class="">disabled</code> prop on the CheckBox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><h3>Checkbox Group</h3><p>Checkboxes support grouping.<br>&gt; Due to technical limitations, the value of the checkbox group needs to be a string consisting of an array via the join() method.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;groupValue.join()&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onGroupChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;orange&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">groupValue</span>: [<span class="hljs-string">&quot;Apple&quot;</span>, <span class="hljs-string">&quot;Orange&quot;</span>],
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onGroupChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.groupValue = detail.value;
    },
  },
};
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Checkbox-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-css">:quark-checkbox {
  --radio-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">225deg</span>, <span class="hljs-number">#ff918d</span> <span class="hljs-number">0%</span>, <span class="hljs-number">#f54640</span> <span class="hljs-number">100%</span>);
}
</code></pre><h2>API</h2><h3>quark-checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code class="">round</code> <code class="">square</code></td><td><code class="">string</code></td><td><code class="">round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code class="">normal</code> <code class="">big</code></td><td><code class="">string</code></td><td><code class="">normal</code></td></tr><tr><td>disabled</td><td>Disable checkbox</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>checked</td><td>Check status</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>quark-checkbox Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when checkbox check status changed</td><td><code class="">(e: {detail: {value: string}}) =&gt; void</code></td></tr></tbody></table><h3>quark-checkbox-group Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific checkbox</td><td><code class="">string</code></td><td>-</td></tr></tbody></table><h3>quark-checkbox-Group Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>mitted when checkbox check status changed</td><td><code class="">(e: {detail: {value: string[]}}) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--checkbox-font-size</code></td><td>checkbox label font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--checkbox-color</code></td><td>checkbox label font color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--checkbox-label-height</code></td><td>checkbox label line-height</td><td>same as the height of checkbox</td></tr><tr><td><code class="">--checkbox-size</code></td><td>checkbox size\uFF0CPriority is higher than <code class="">size</code> prop</td><td><code class="">16px; big: 20px</code></td></tr><tr><td><code class="">--checkbox-background</code></td><td>checked color</td><td><code class="">#0088ff</code></td></tr></tbody></table>`,35),b={},q="",m=t({__name:"doc.en-US",setup(i,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(g,j)=>(l(),e("div",p,[o,h,d,r,n(" To toggle between the checked and unchecked status. "),u]))}});export{m as default,q as excerpt,b as frontmatter};
