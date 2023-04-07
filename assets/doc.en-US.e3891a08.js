import{d as t,c as a,a as n,o as l}from"./vue.f6323cdc.js";const e={class:"markdown-body"},p=n(`<h1>VirtualList</h1><h3>Intro</h3><p>Virtual list is often used to render a list with a very large amount of data. It can ensure that only the current visible area is rendered, and other parts are rendered after the user scrolls into the visible area. The smoothness of the page is guaranteed.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/virtuallist&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-virtuallist</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;virtualListRef&quot;</span>
  <span class="hljs-attr">:itemheight</span>=<span class="hljs-string">&quot;50&quot;</span>
  <span class="hljs-attr">:containerheight</span>=<span class="hljs-string">&quot;500&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">list</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">100</span>).fill(<span class="hljs-number">0</span>).map(<span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>),
    <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
  };
},
<span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.virtualListRef.setListData(<span class="hljs-built_in">this</span>.list);
  <span class="hljs-built_in">this</span>.$refs.virtualListRef.setRenderItem(<span class="hljs-built_in">this</span>.renderItem);
},
<span class="hljs-attr">methods</span>: {
  <span class="hljs-function"><span class="hljs-title">onLoad</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> len = <span class="hljs-built_in">this</span>.list.length;
    <span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">100</span>).fill(<span class="hljs-number">0</span>).map(<span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> len + i + <span class="hljs-number">1</span>);
    <span class="hljs-built_in">this</span>.list = <span class="hljs-built_in">this</span>.list.concat(arr);
    <span class="hljs-built_in">this</span>.$refs.virtualListRef.setListData(<span class="hljs-built_in">this</span>.list);
  },
  <span class="hljs-function"><span class="hljs-title">renderItem</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> div = <span class="hljs-string">\`
      &lt;div style=&quot;height: 50px; line-height: 50px; text-align: center;&quot;&gt;<span class="hljs-subst">\${text}</span>&lt;/div&gt;
    \`</span>;
    <span class="hljs-keyword">return</span> div;
  }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Arribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>itemheight</td><td>List item height, unit px</td><td><code class="">number</code></td><td><code class="">50</code></td></tr><tr><td>containerheight</td><td>Container height, unit px</td><td><code class="">number</code></td><td><code class="">500</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>load</td><td>Triggered when scrolling to the bottom</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setListData</td><td>Used to set all data of the list</td><td><code class="">(listData: any[]) =&gt; void</code></td></tr><tr><td>setRenderItem</td><td>The rendering function used to set the list items, which needs to return a string</td><td><code class="">(itemData: any) =&gt; string</code></td></tr></tbody></table>`,15),h=[p],d={},u="",j=t({__name:"doc.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(i,c)=>(l(),a("div",e,h))}});export{j as default,u as excerpt,d as frontmatter};
