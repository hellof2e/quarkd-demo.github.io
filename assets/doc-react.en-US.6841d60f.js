import{d as s,c as o,a,o as d}from"./vue.335f97cb.js";const e={class:"markdown-body"},c=a(`<h1>Toast</h1><h3>Intro</h3><p>Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Text</h3><pre><code class="language-javascript">Toast.text(<span class="hljs-string">&quot;Network failed, please try again later~&quot;</span>);
</code></pre><h3>Text position</h3><p>use position property\uFF0Ccan use <code class="">top</code>\u3001<code class="">bottom</code>, <code class="">middle</code> is default</p><pre><code class="language-javascript">Toast.text(<span class="hljs-string">&quot;\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~&quot;</span>, {
  <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>
});
</code></pre><h3>Success</h3><pre><code class="language-javascript">Toast.success(<span class="hljs-string">&quot;Success&quot;</span>);
</code></pre><h3>Fail</h3><pre><code class="language-javascript">Toast.error(<span class="hljs-string">&quot;Fail&quot;</span>);
</code></pre><h3>Warning</h3><pre><code class="language-javascript">Toast.warning(<span class="hljs-string">&quot;Warning&quot;</span>);
</code></pre><h3>Loading</h3><pre><code class="language-javascript">Toast.loading(<span class="hljs-string">&quot;Loading&quot;</span>);
</code></pre><h3>Toast not disappear</h3><pre><code class="language-javascript">Toast.text(msg, {
  <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>,
});
</code></pre><h3>Close Manually</h3><p>Call the <code class="">hide</code> method.</p><pre><code class="language-js">Toast.hide();
<span class="hljs-comment">// or use ths instance.</span>
<span class="hljs-keyword">const</span> toast = Toast.loading(<span class="hljs-string">&quot;use in js module&quot;</span>);
toast.hide();
</code></pre><h3>Close Callback Function</h3><pre><code class="language-tsx">Toast.text(<span class="hljs-string">&quot;Network failed, please try again later~&quot;</span>, {
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> alert(<span class="hljs-string">&quot;hello&quot;</span>),
});
</code></pre><h3>Singleton</h3><p>Toast use singleton mode by default, if you need to pop multiple Toast at the same time, you can refer to the following example:</p><pre><code class="language-tsx">Toast.allowMultiple();
<span class="hljs-keyword">const</span> toast1 = Toast.text(<span class="hljs-string">&quot;first Toast&quot;</span>);
<span class="hljs-keyword">const</span> toast2 = Toast.success(<span class="hljs-string">&quot;second Toast&quot;</span>);
toast1.hide();
toast2.hide();
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Methods</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>Toast.text</td><td>Show text toast</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast instance(message supports incoming HTML)</td></tr><tr><td>Toast.success</td><td>Show success toast</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast instance</td></tr><tr><td>Toast.error</td><td>Show fail toast</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast instance</td></tr><tr><td>Toast.warning</td><td>Show warning toast</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast instance</td></tr><tr><td>Toast.hide</td><td>Close toast</td><td>-</td><td>void</td></tr><tr><td>Toast.loading</td><td>Show loading toast</td><td>message \uFF5C <code class="">ToastOptions</code></td><td>toast instance</td></tr><tr><td>Toast.allowMultiple</td><td>open multiple toast</td><td>-</td><td>toast instance</td></tr></tbody></table><h3>ToastOptions \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>duration</td><td>Toast duration(ms), won\u2019t disappear if value is 0</td><td><code class="">number</code></td><td><code class="">2000ms</code></td></tr><tr><td>size</td><td>Custom icon size</td><td><code class="">number</code></td><td><code class="">40px</code></td></tr><tr><td>zIndex</td><td>Custom zIndex</td><td><code class="">number</code></td><td><code class="">9999</code></td></tr><tr><td>close</td><td>Callback function after close</td><td><code class="">() =&gt; void</code></td><td>-</td></tr><tr><td>loadingIconDirection</td><td>loading icon display direction, only valid when <code class="">type=loading</code></td><td><code class="">horizontal</code> or <code class="">vertical</code></td><td><code class="">vertical</code></td></tr><tr><td>position</td><td>Position</td><td><code class="">top</code> or <code class="">bottom</code></td><td><code class="">middle</code></td></tr></tbody></table><h2>CSS Variables</h2><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--toast-min-width</code></td><td>Minimum width</td><td><code class="">120px</code></td></tr><tr><td><code class="">--toast-max-width</code></td><td>Maximum width</td><td><code class="">240px</code></td></tr><tr><td><code class="">--toast-text-padding</code></td><td>Padding</td><td><code class="">24px 16px</code></td></tr><tr><td><code class="">--toast-font-size</code></td><td>Font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--toast-color</code></td><td>Font color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--toast-loading-bottom</code></td><td>bottom margin of loading icon</td><td>Vertical loading is <code class="">14px</code>; horizontal loading is <code class="">0</code></td></tr><tr><td><code class="">--toast-loading-right</code></td><td>right margin of loading icon</td><td>Vertical loading is <code class="">0</code>; horizontal loading is <code class="">8px</code></td></tr><tr><td><code class="">--toast-position-top-distance</code></td><td>the text of top distance</td><td>When position is <code class="">top</code>,the value is<code class="">20%</code>.when position is <code class="">botton</code>,the value is<code class="">80%</code></td></tr></tbody></table>`,35),n=[c],h={},u="",g=s({__name:"doc-react.en-US",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,i)=>(d(),o("div",e,n))}});export{g as default,u as excerpt,h as frontmatter};
