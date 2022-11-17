import{d as a,c as n,a as t,o as l}from"./vue.6f2a79c8.js";const p={class:"markdown-body"},u=t(`<h1>List</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5728\u5217\u8868\u5C06\u8981\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u89E6\u53D1\u4E8B\u4EF6\u6765\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { List } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [loading1, setLoading1] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [finished1, setFinished1] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [list1, setList1] = useState([]);

  <span class="hljs-keyword">const</span> onLoad1 = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (finished1) {
      <span class="hljs-keyword">return</span>;
    }
    setLoading1(<span class="hljs-literal">true</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i += <span class="hljs-number">1</span>) {
        setList1(<span class="hljs-function">(<span class="hljs-params">list1</span>) =&gt;</span> [...list1, list1.length + <span class="hljs-number">1</span>]);
      }
      setLoading1(<span class="hljs-literal">false</span>);
      <span class="hljs-keyword">if</span> (list1.length &gt;= <span class="hljs-number">30</span>) {
        setFinished1(<span class="hljs-literal">true</span>);
      }
    }, <span class="hljs-number">1000</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">List</span>
      <span class="hljs-attr">loading</span>=<span class="hljs-string">{loading1}</span>
      <span class="hljs-attr">finished</span>=<span class="hljs-string">{finished1}</span>
      <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;finished text&quot;</span>
      <span class="hljs-attr">onLoad</span>=<span class="hljs-string">{onLoad1}</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
        {list1.map((item) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-list&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>
            {item}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">List</span>&gt;</span></span>
  );
};
</code></pre><h3>\u9519\u8BEF\u63D0\u793A</h3><p>\u5728\u53D1\u751F\u9519\u8BEF\u65F6, \u53EF\u4EE5\u70B9\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u91CD\u65B0\u62C9\u53D6\u6570\u636E</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [loading2, setLoading2] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [finished2, setFinished2] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [error2, setError2] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [list2, setList2] = useState([]);

  <span class="hljs-keyword">const</span> onLoad2 = <span class="hljs-function">() =&gt;</span> {
    setError2(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">if</span> (finished2) {
      <span class="hljs-keyword">return</span>;
    }
    setLoading2(<span class="hljs-literal">true</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i += <span class="hljs-number">1</span>) {
        setList2(<span class="hljs-function">(<span class="hljs-params">list2</span>) =&gt;</span> [...list2, list2.length + <span class="hljs-number">1</span>]);
      }
      <span class="hljs-keyword">if</span> (list2.length === <span class="hljs-number">0</span>) {
        setError2(<span class="hljs-literal">true</span>);
      } <span class="hljs-keyword">else</span> {
        setError2(<span class="hljs-literal">false</span>);
      }
      setLoading2(<span class="hljs-literal">false</span>);
      <span class="hljs-keyword">if</span> (list2.length &gt;= <span class="hljs-number">30</span>) {
        setFinished2(<span class="hljs-literal">true</span>);
      }
    }, <span class="hljs-number">1000</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">List</span>
      <span class="hljs-attr">onLoad</span>=<span class="hljs-string">{onLoad2}</span>
      <span class="hljs-attr">onReload</span>=<span class="hljs-string">{onLoad2}</span>
      <span class="hljs-attr">loading</span>=<span class="hljs-string">{loading2}</span>
      <span class="hljs-attr">error</span>=<span class="hljs-string">{error2}</span>
      <span class="hljs-attr">finished</span>=<span class="hljs-string">{finished2}</span>
      <span class="hljs-attr">errortext</span>=<span class="hljs-string">&quot;Error, click retry&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
        {list2.map((item) =&gt; (
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-list&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>
            {item}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        ))}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">List</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u63D0\u793A</h3><pre><code class="language-tsx">    &lt;List
      {...props}
    &gt;
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
        {...}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
     <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;finished&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u7684\u7ED3\u675F\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&#39;15&#39;</span>&gt;</span> \u81EA\u5B9A\u4E49\u52A0\u8F7D<span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;/List&gt;
</code></pre><h3>\u4E0B\u62C9\u5237\u65B0</h3><p>\u53EF\u4EE5\u548C\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\u8054\u5408\u4F7F\u7528</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

  <span class="hljs-keyword">const</span> [refresh, setRefresh] = useState(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> onRefresh = () = {
    setRefresh(<span class="hljs-function">(<span class="hljs-params">refresh</span>) =&gt;</span> (refresh += <span class="hljs-number">1</span>));
  }

  <span class="hljs-keyword">return</span>
    (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">PullRefresh</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">onRefresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">List</span>
            {<span class="hljs-attr">...props</span>}
          &gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
            {...}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">List</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">PullRefresh</span>&gt;</span></span>
    )
  }
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>error</td><td>\u662F\u5426\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u5931\u8D25\u540E\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u91CD\u65B0\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>finished</td><td>\u6570\u636E\u662F\u5426\u52A0\u8F7D\u7ED3\u675F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>offset</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">number</code></td><td><code class="">300</code></td></tr><tr><td>loadingtext</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>finishedtext</td><td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>errortext</td><td>\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>textcolor</td><td>\u63D0\u793A\u6587\u6848\u5B57\u4F53\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>onLoad</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onReload</td><td>\u53D1\u751F\u9519\u8BEF, \u70B9\u51FB\u91CD\u8BD5\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u8981\u5C55\u793A\u7684\u5185\u5BB9</td></tr><tr><td>finished</td><td>\u81EA\u5B9A\u4E49\u7684\u7ED3\u675F\u72B6\u6001\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u7684\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u4FE1\u606F</td></tr></tbody></table>`,19),e=[u],o={},i="",j=a({__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(l(),n("div",p,e))}});export{j as default,i as excerpt,o as frontmatter};
