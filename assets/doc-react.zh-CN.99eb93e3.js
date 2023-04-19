import{d as u,c as t,a,o as n}from"./vue.d196687a.js";const d={class:"markdown-body"},e=a(`<h1>VirtualList</h1><h3>\u4ECB\u7ECD</h3><p>\u865A\u62DF\u5217\u8868\uFF0C\u5E38\u7528\u4E8E\u6E32\u67D3\u6570\u636E\u91CF\u975E\u5E38\u5927\u7684\u5217\u8868\uFF0C\u5B83\u53EF\u4EE5\u4FDD\u8BC1\u53EA\u6E32\u67D3\u5F53\u524D\u7684\u53EF\u89C6\u533A\u57DF\uFF0C\u5176\u4ED6\u90E8\u5206\u5728\u7528\u6237\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\u5185\u4E4B\u540E\u518D\u6E32\u67D3\u3002\u4FDD\u8BC1\u4E86\u9875\u9762\u7684\u6D41\u7545\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { VirtualList } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>error</td><td>\u662F\u5426\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u5931\u8D25\u540E\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u91CD\u65B0\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>finished</td><td>\u6570\u636E\u662F\u5426\u52A0\u8F7D\u7ED3\u675F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>offset</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">number</code></td><td><code class="">300</code></td></tr><tr><td>loadingtext</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>finishedtext</td><td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>errortext</td><td>\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>textcolor</td><td>\u63D0\u793A\u6587\u6848\u5B57\u4F53\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>onLoad</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onReload</td><td>\u53D1\u751F\u9519\u8BEF, \u70B9\u51FB\u91CD\u8BD5\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u8981\u5C55\u793A\u7684\u5185\u5BB9</td></tr><tr><td>finished</td><td>\u81EA\u5B9A\u4E49\u7684\u7ED3\u675F\u72B6\u6001\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u7684\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u4FE1\u606F</td></tr></tbody></table>`,11),l=[e],h={},i="",E=u({__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(n(),t("div",d,l))}});export{E as default,i as excerpt,h as frontmatter};
