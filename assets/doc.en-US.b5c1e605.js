import{d as a,c as t,a as e,o as c}from"./vue.49cbd51d.js";const n={class:"markdown-body"},l=e(`<h1>Switch</h1><h3>Intro</h3><p>Used to switch between open and closed states.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/switch&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="">&lt;quark-switch checked onchange=&quot;&quot;&gt;&lt;/quark-switch&gt;
</code></pre><h3>Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
</code></pre><h3>Custom Size</h3><p>TO change switch size, set <code class="">size</code> prop on the Switch or alter <code class="">font-size</code> value of <code class="">style</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;font-size: 26px&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
</code></pre><h3>Custom Color</h3><p>To custom color, set <code class="">color</code> and <code class="">inactivecolor</code> prop on the Switch.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">inactivecolor</span>=<span class="hljs-string">&quot;#08f&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
</code></pre><h3>Loading</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">loading</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">checked</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">e</span>)</span> {
      data.checked = e.detail.value;
    }
  }
}
&lt;/script&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>checked</td><td>On/Off</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>Disable switch</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>Loading switch</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>size</td><td>Switch size</td><td><code class="">number</code></td><td><code class="">16px</code></td></tr><tr><td>color</td><td>Background color when active</td><td><code class="">string</code></td><td><code class="">#08f</code></td></tr><tr><td>inactivecolor</td><td>Background color when inactive</td><td><code class="">string</code></td><td><code class="">#e1e6eb</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when check status changed</td><td><code class="">e: ({ detail: { value: string } }) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--switch-label-width</code></td><td>switch label width</td><td><code class="">50px / 3.125em</code></td></tr></tbody></table>`,28),o=[l],i={},g="",u=a({__name:"doc.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,p)=>(c(),t("div",n,o))}});export{u as default,g as excerpt,i as frontmatter};
