import{c as a,o as t,a as e}from"./vue.7f40998a.js";const n={class:"markdown-body"},c=e(`<h1>CheckBox</h1><h3>Intro</h3><p>A group of options for multiple choices.</p><br> To toggle between the checked and unchecked status. <h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/checkbox&#39;</span>;
</code></pre><h3>Basic Usage</h3><p>To change the checked status, bind and set <code>checked</code> prop on the CheckBox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;mycheck&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>checked<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>unchecked<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">mycheck</span>: <span class="hljs-literal">true</span>,
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.mycheck = detail.value;
    },
  }
}
</code></pre><h3>Shape</h3><p>Checkbox shape supports <code>round</code> and <code>square</code>, the default is <code>round</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>round(default)<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><h3>Size</h3><p>Checkbox size supports <code>normal</code> and <code>big</code>, the default is <code>normal</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>default shape - big<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>&gt;</span>square - big<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><h3>Disabled</h3><p>To disable checkbox, add <code>disabled</code> prop on the CheckBox.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>checked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>unchecked - disabled<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><h3>Checkbox Group</h3><p>Checkboxes support grouping.<br>&gt; Due to technical limitations, the value of the checkbox group needs to be a string consisting of an array via the join() method.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;groupValue.join()&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onGroupChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;orange&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Orange<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>Banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">groupValue</span>: [<span class="hljs-string">&#39;Apple&#39;</span>, <span class="hljs-string">&#39;Orange&#39;</span>]
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onGroupChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.groupValue = detail.value;
    }
  }
}
</code></pre><h3>Custom Style</h3><p>Custom checked color</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Checkbox-Custom checked color<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-css">:quark-checkbox {
  --radio-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">225deg</span>, <span class="hljs-number">#ff918d</span> <span class="hljs-number">0%</span>, <span class="hljs-number">#f54640</span> <span class="hljs-number">100%</span>);
}
</code></pre><h2>API</h2><h3>quark-checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>shape</td><td>Shape\uFF0Ccan be set to <code>round</code> <code>square</code></td><td><code>string</code></td><td><code>round</code></td></tr><tr><td>size</td><td>Size\uFF0Ccan be set to <code>normal</code> <code>big</code></td><td><code>string</code></td><td><code>normal</code></td></tr><tr><td>disabled</td><td>Disable checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>checked</td><td>Check status</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3>quark-checkbox Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when checkbox check status changed</td><td><code>(e: {detail: {value: string}}) =&gt; void</code></td></tr></tbody></table><h3>quark-checkbox-group Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Specific checkbox</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3>quark-checkbox-Group Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>mitted when checkbox check status changed</td><td><code>(e: {detail: {value: string[]}}) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--checkbox-font-size</code></td><td>checkbox label font size</td><td><code>12px</code></td></tr><tr><td><code>--checkbox-color</code></td><td>checkbox label font color</td><td><code>#242729</code></td></tr><tr><td><code>--checkbox-label-height</code></td><td>checkbox label line-height</td><td>same as the height of checkbox</td></tr><tr><td><code>--checkbox-size</code></td><td>checkbox size\uFF0CPriority is higher than <code>size</code> prop</td><td><code>16px; big: 20px</code></td></tr><tr><td><code>--checkbox-background</code></td><td>checked color</td><td><code>#0088ff</code></td></tr></tbody></table>`,40),l=[c],u={__name:"doc.en-US",setup(p,{expose:s}){return s({frontmatter:{}}),(o,d)=>(t(),a("div",n,l))}};export{u as default};
