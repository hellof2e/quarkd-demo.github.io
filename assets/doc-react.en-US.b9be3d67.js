import{d as t,c as a,a as e,o as d}from"./vue.628ec601.js";const n={class:"markdown-body"},c=e(`<h1>Search</h1><h3>Intro</h3><p>Input box component for search scenarios.</p><h2>Install</h2><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Search } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h2>Basic Usage</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h2>Round</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;round&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h3>Hide Action Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">hideaction</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h3>Show Back Button</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">showback</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h3>Dark</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">dark</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h3>Slot</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">hideaction</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;action&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Primary Button<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Search</span>&gt;</span>
</code></pre><h3>Event</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> onBlur = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(detail.value);
  };
  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(detail.value);
  };
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">showback</span> <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{onBlur}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span> /&gt;</span></span>;
};
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Search</span> <span class="hljs-attr">showback</span> <span class="hljs-attr">iconcolor</span>=<span class="hljs-string">&quot;aqua&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* CSS display */</span>
:search {
  --search-background: <span class="hljs-built_in">linear-gradient</span>(<span class="hljs-number">135deg</span>, <span class="hljs-number">#667eea</span>, <span class="hljs-number">#764ba2</span>);
  --search-action-text-<span class="hljs-attribute">color</span>: aqua;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Input value</td><td></td><td></td></tr><tr><td>shape</td><td>Shape of field</td><td><code class="">square</code> <code class="">round</code></td><td><code class="">square</code></td></tr><tr><td>dark</td><td>Dark</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr><tr><td>showback</td><td>Whether to show the back button</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideaction</td><td>Hide action button</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>actiontext</td><td>Text of action button</td><td><code class="">string</code></td><td><code class="">Cancel</code></td></tr><tr><td>iconcolor</td><td>Icon color, it\u2019s white in dark mode</td><td><code class="">string</code></td><td><code class="">#242729</code></td></tr><tr><td>placeholder</td><td>placeholder text</td><td><code class="">string</code></td><td><code class="">Please enter key words</code></td></tr><tr><td>maxlength</td><td>Input field max length</td><td><code class="">string</code> or <code class="">number</code></td><td></td></tr><tr><td>autofocus</td><td>Whether to auto focus, unsupported in iOS</td><td><code class="">boolean</code></td><td></td></tr><tr><td>clearable</td><td>Whether to be clearable</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>disabled</td><td>Whether to disable field</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><code class="">boolean</code></td><td><code class="">fasle</code></td></tr><tr><td>onFocus</td><td>Emitted when input is focused</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td><td></td></tr><tr><td>onBlur</td><td>Emitted when input is blurred</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td><td></td></tr><tr><td>onSearch</td><td>Emitted when confirming search</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td><td></td></tr><tr><td>onChange</td><td>Emitted when input value changed</td><td><code class="">(e:{detail:{value:string}}) =&gt; void </code></td><td></td></tr><tr><td>onCancel</td><td>Emitted when the action button is clicked</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>onBack</td><td>Emitted when the back button is clicked</td><td><code class="">() =&gt; void </code></td><td></td></tr></tbody></table><h3>CSS Variables</h3><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--field-font-size</code></td><td>Input field font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--search-background</code></td><td>Search background color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--search-dark-background</code></td><td>Dark background</td><td><code class="">#08f</code></td></tr><tr><td><code class="">--search-action-text-color</code></td><td>Action button font color</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--search-action-font-size</code></td><td>Action button font size</td><td><code class="">16px </code></td></tr></tbody></table>`,28),l=[c],i={},g="",u=t({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,p)=>(d(),a("div",n,l))}});export{u as default,g as excerpt,i as frontmatter};
