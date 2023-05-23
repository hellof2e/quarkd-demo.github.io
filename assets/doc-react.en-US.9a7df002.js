import{d as t,c as a,a as n,o as e}from"./vue.695eecf4.js";const l={class:"markdown-body"},r=n(`<h1>VirtualList</h1><h3>Intro</h3><p>Virtual list is often used to render a list with a very large amount of data. It can ensure that only the current visible area is rendered, and other parts are rendered after the user scrolls into the visible area. The smoothness of the page is guaranteed.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { VirtualList } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [list, setList] = useState(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">100</span>).fill(<span class="hljs-number">0</span>).map(<span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>));
  <span class="hljs-keyword">const</span> virtualListRef = useRef(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> onLoad = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> len = list.length;
    <span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">100</span>).fill(<span class="hljs-number">0</span>).map(<span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> len + i + <span class="hljs-number">1</span>);
    <span class="hljs-keyword">const</span> newList = [...list, ...arr];
    setList(newList);
    virtualListRef.current.setListData(newList);
  };

  <span class="hljs-keyword">const</span> renderItem = <span class="hljs-function">(<span class="hljs-params">text</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> div = <span class="hljs-string">\`
      &lt;div style=&quot;height: 50px; line-height: 50px; text-align: center;&quot;&gt;<span class="hljs-subst">\${text}</span>&lt;/div&gt;
    \`</span>;
    <span class="hljs-keyword">return</span> div;
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">{virtualListRef}</span>
      <span class="hljs-attr">itemheight</span>=<span class="hljs-string">{50}</span>
      <span class="hljs-attr">containerheight</span>=<span class="hljs-string">{500}</span>
      <span class="hljs-attr">onLoad</span>=<span class="hljs-string">{onLoad}</span>
    /&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Arribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>itemheight</td><td>List item height, unit px</td><td><code class="">number</code></td><td><code class="">50</code></td></tr><tr><td>containerheight</td><td>Container height, unit px</td><td><code class="">number</code></td><td><code class="">500</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>load</td><td>Triggered when scrolling to the bottom</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setListData</td><td>Used to set all data of the list</td><td><code class="">(listData: any[]) =&gt; void</code></td></tr><tr><td>setRenderItem</td><td>The rendering function used to set the list items, which needs to return a string</td><td><code class="">(itemData: any) =&gt; string</code></td></tr></tbody></table>`,14),p=[r],i={},u="",j=t({__name:"doc-react.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(e(),a("div",l,p))}});export{j as default,u as excerpt,i as frontmatter};
