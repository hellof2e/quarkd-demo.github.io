import{c as s,o as a,a as e}from"./vue.ac8d90f1.js";const n={class:"markdown-body"},d=e(`<h1>textArea</h1><h3>Intro</h3><p>Multi-line text input</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { TextArea } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> /&gt;</span>
</code></pre><h3>Rows Number</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>
</code></pre><h3>Autosize</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
</code></pre><h3>Count</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">showcount</span> /&gt;</span>
</code></pre><h3>Maxlength</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre><h3>Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">TextArea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-style</span>{
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">border-color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-count-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-placeholder-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-text-count-align: <span class="hljs-string">&#39;left&#39;</span>;
}
</code></pre><h3>Events</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span>
      <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{(event)</span> =&gt;</span> {
        Toast.text(\`\${event.target.value}, blur\`);
      }}
      onInput={(event) =&gt; {
        Toast.text(\`\${event.target.value}, input\`);
      }}
      onFocus={(event) =&gt; {
        Toast.text(\`\${event.target.value}, focus\`);
      }}
      onCompositionStart={(event) =&gt; {
        Toast.text(\`\${event.target.value}, compositionStart\`);
      }}
    /&gt;</span>
  )
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Input value</td><td>String</td><td></td></tr><tr><td>placeholder</td><td>Placeholder</td><td>String</td><td></td></tr><tr><td>rows</td><td>Rows number</td><td>number</td><td>2</td></tr><tr><td>maxlength</td><td>Maxlength</td><td>number</td><td>-</td></tr><tr><td>showcount</td><td>Show count</td><td>boolean</td><td>false</td></tr><tr><td>autocomplete</td><td>Autocomplete</td><td>boolean</td><td>false</td></tr><tr><td>disabled</td><td>Whether to disable textarea</td><td>boolean</td><td>false</td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td>boolean</td><td>false</td></tr><tr><td>id</td><td>Textarea id, used with label</td><td>string</td><td></td></tr><tr><td>onInput</td><td>Emitted when input value changed</td><td>Function</td><td></td></tr><tr><td>onFocus</td><td>Emitted when input is focused</td><td>Function</td><td></td></tr><tr><td>onBlur</td><td>Emitted when input is blurred</td><td>Function</td><td></td></tr><tr><td>onCompositionStart</td><td>Emitted when input editor starts a new input</td><td>Function</td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--textarea-color</code></td><td>text color</td><td><code>#242729 </code></td></tr><tr><td><code>--textarea-font-size</code></td><td>text size</td><td><code>14px</code></td></tr><tr><td><code>--textarea-text-align</code></td><td>text align</td><td><code>left</code></td></tr><tr><td><code>--textarea-text-count-align</code></td><td>text count align</td><td><code>right</code></td></tr><tr><td><code>--textarea-count-color</code></td><td>text count color</td><td><code>#242729</code></td></tr><tr><td><code>--textarea-border-color</code></td><td>textarea border color</td><td><code>#242729</code></td></tr><tr><td><code>--textarea-placeholder-color</code></td><td>placeholder text color</td><td><code>#242729</code></td></tr></tbody></table>`,28),l=[d],u={__name:"doc-react.en-US",setup(o,{expose:t}){return t({frontmatter:{}}),(c,p)=>(a(),s("div",n,l))}};export{u as default};
