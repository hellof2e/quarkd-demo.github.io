import{d as a,c as t,a as n,o as u}from"./vue.eec00386.js";const l={class:"markdown-body"},p=n(`<h1>VirtualList \u5217\u8868</h1><h3>\u4ECB\u7ECD</h3><p>\u865A\u62DF\u5217\u8868\uFF0C\u5E38\u7528\u4E8E\u6E32\u67D3\u6570\u636E\u91CF\u975E\u5E38\u5927\u7684\u5217\u8868\uFF0C\u5B83\u53EF\u4EE5\u4FDD\u8BC1\u53EA\u6E32\u67D3\u5F53\u524D\u7684\u53EF\u89C6\u533A\u57DF\uFF0C\u5176\u4ED6\u90E8\u5206\u5728\u7528\u6237\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\u5185\u4E4B\u540E\u518D\u6E32\u67D3\u3002\u4FDD\u8BC1\u4E86\u9875\u9762\u7684\u6D41\u7545\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/virtuallist&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-virtuallist</span>
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
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>itemheight</td><td>\u5217\u8868\u9879\u9AD8\u5EA6\uFF0C\u5355\u4F4D px</td><td><code class="">number</code></td><td><code class="">50</code></td></tr><tr><td>containerheight</td><td>\u5BB9\u5668\u9AD8\u5EA6\uFF0C\u5355\u4F4D px</td><td><code class="">number</code></td><td><code class="">500</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>load</td><td>\u6ED1\u52A8\u81F3\u5E95\u90E8\u65F6\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setListData</td><td>\u7528\u4E8E\u8BBE\u7F6E\u5217\u8868\u6240\u6709\u6570\u636E</td><td><code class="">(listData: any[]) =&gt; void</code></td></tr><tr><td>setRenderItem</td><td>\u7528\u4E8E\u8BBE\u7F6E\u5217\u8868\u9879\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u9700\u8FD4\u56DE\u5B57\u7B26\u4E32</td><td><code class="">(itemData: any) =&gt; string</code></td></tr></tbody></table>`,15),e=[p],d={},o="",j=a({__name:"doc.zh-CN",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,r)=>(u(),t("div",l,e))}});export{j as default,o as excerpt,d as frontmatter};
