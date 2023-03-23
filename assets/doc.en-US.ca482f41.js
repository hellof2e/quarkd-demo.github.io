import{d as t,c as a,a as e,o as l}from"./vue.10ed14a6.js";const n={class:"markdown-body"},c=e(`<h1>textArea</h1><h3>Intro</h3><p>Multi-line text input</p><h3>Install</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/textarea&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> /&gt;</span>
</code></pre><h3>Rows Number</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>Autosize</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>Count</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>Maxlength</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>Disabled</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">disabled</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.custom-style</span> {
    --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">border-color</span>: red;
    --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">color</span>: red;
    --<span class="hljs-selector-tag">textarea</span>-count-<span class="hljs-attribute">color</span>: red;
    --<span class="hljs-selector-tag">textarea</span>-placeholder-<span class="hljs-attribute">color</span>: red;
    --<span class="hljs-selector-tag">textarea</span>-text-count-align: <span class="hljs-string">&quot;left&quot;</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>Events</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span>
    @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;input&#39;)&quot;</span>
    @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;blur&#39;)&quot;</span>
    @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;focus&#39;)&quot;</span>
    @<span class="hljs-attr">compositionstart</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;compositionstart&#39;)&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> Toast <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../toast&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">handleEvent</span>(<span class="hljs-params">event, type</span>)</span> {
      Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${event.target.value}</span>, <span class="hljs-subst">\${type}</span>\`</span>);
    },
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Input value</td><td><code class="">string</code></td><td></td></tr><tr><td>placeholder</td><td>Placeholder</td><td><code class="">string</code></td><td></td></tr><tr><td>rows</td><td>Rows number</td><td><code class="">number</code></td><td><code class="">2</code></td></tr><tr><td>maxlength</td><td>Maxlength</td><td><code class="">number</code></td><td><code class="">-</code></td></tr><tr><td>showcount</td><td>Show count</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autocomplete</td><td>Autocomplete</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>Whether to disable textarea</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>id</td><td>Textarea id, used with label</td><td><code class="">string</code></td><td></td></tr></tbody></table><h3>Events</h3><p>textarea native events are supported</p><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>input</td><td>Emitted when input value changed</td><td><code class="">(e: ({ detail: { value: string } }) =&gt; void</code></td></tr><tr><td>focus</td><td>Emitted when input is focused</td><td><code class="">(e: ({ detail: { value: string } }) =&gt; void</code></td></tr><tr><td>blur</td><td>Emitted when input is blurred</td><td><code class="">(e: ({ detail: { value: string } }) =&gt; void</code></td></tr><tr><td>compositionstart</td><td>Emitted when input editor starts a new input</td><td><code class="">(\uFF09=&gt; void </code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--textarea-color</code></td><td>text color</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--textarea-font-size</code></td><td>text size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--textarea-text-align</code></td><td>text align</td><td><code class="">left</code></td></tr><tr><td><code class="">--textarea-text-count-align</code></td><td>text count align</td><td><code class="">right</code></td></tr><tr><td><code class="">--textarea-count-color</code></td><td>text count color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--textarea-border-color</code></td><td>textarea border color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--textarea-placeholder-color</code></td><td>placeholder text color</td><td><code class="">#242729</code></td></tr></tbody></table>`,31),d=[c],u={},i="",g=t({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(l(),a("div",n,d))}});export{g as default,i as excerpt,u as frontmatter};
