import{d as a,c as n,a as t,o as l}from"./vue.a109ca2d.js";const p={class:"markdown-body"},e=t(`<h1>List</h1><h3>Intro</h3><p>A list component to show items and control loading status.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { List } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
</code></pre><h3>Error Text</h3><p>After loading is error, reloading will be Emitted only when error text clicked.</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
</code></pre><h3>Custom Info</h3><pre><code class="language-tsx">    &lt;List
      {...props}
    &gt;
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
        {...}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
     <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;finished&quot;</span>&gt;</span>Custom finished text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>Custom error text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&#39;15&#39;</span>&gt;</span> Custom loading<span class="hljs-tag">&lt;/<span class="hljs-name">Loading</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
    &lt;/List&gt;
</code></pre><h3>PullRefresh</h3><p>Can be used with <code class="">pull-refresh</code> component.</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {

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
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Arribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>error</td><td>Whether loading is error, the load event will be Emitted only when error text clicked</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>Whether to show loading info, the load event will not be Emitted when loading</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>finished</td><td>Whether loading is finished</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>offset</td><td>The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset</td><td><code class="">number</code></td><td><code class="">300</code></td></tr><tr><td>loadingtext</td><td>Loading text</td><td><code class="">string</code></td><td><code class="">loading...</code></td></tr><tr><td>finishedtext</td><td>Finished text</td><td><code class="">string</code></td><td></td></tr><tr><td>errortext</td><td>Error loaded text</td><td><code class="">string</code></td><td></td></tr><tr><td>textcolor</td><td>Text font color</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>onLoad</td><td>Emitted when the distance between the scrollbar and the bottom is less than offset</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onReload</td><td>Emitted when click retry after loading is error</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>List content</td></tr><tr><td>finished</td><td>Custom finished tips</td></tr><tr><td>error</td><td>Custom error tips</td></tr><tr><td>loading</td><td>Custom loading tips</td></tr></tbody></table>`,20),c=[e],i={},j="",g=a({__name:"doc-react.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),n("div",p,c))}});export{g as default,j as excerpt,i as frontmatter};
