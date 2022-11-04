import{c as t,o as a,a as e}from"./vue.60af942b.js";const n={class:"markdown-body"},l=e(`<h1>Switch</h1><h3>Intro</h3><p>Used to switch between open and closed states.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">checked</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>Custom Size</h3><p>TO change switch size, set <code>size</code> prop on the Switch or alter <code>font-size</code> value of <code>style</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>Custom Color</h3><p>To custom color, set <code>color</code> prop on the Switch.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [checked, setChecked] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    setChecked(e.detail.value)
  }
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Swtich</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;console.log(event)&quot;</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Swtich</span>&gt;</span></span>
  )
}

</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>checked</td><td>On/Off</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Disable switch</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>Switch size</td><td><code>number</code></td><td><code>16px</code></td></tr><tr><td>color</td><td>Switch color</td><td><code>string</code></td><td>-</td></tr><tr><td>onChange</td><td>Emitted when check status changed</td><td><code>e: {detail:{value: string}}\uFF09=&gt;void </code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--switch-label-width</code></td><td>switch label width</td><td><code>50px / 3.125em</code></td></tr></tbody></table>`,23),c=[l],i={__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{}}),(p,d)=>(a(),t("div",n,c))}};export{i as default};
