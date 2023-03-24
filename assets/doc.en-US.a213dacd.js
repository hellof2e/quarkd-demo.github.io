import{d as a,c as n,a as l,o as t}from"./vue.d5c6d028.js";const p={class:"markdown-body"},e=l(`<h1>List</h1><h3>Intro</h3><p>A list component to show items and control loading status.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/list&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;finished text&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-list</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">list</span>: [],
    <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
  };
},
<span class="hljs-attr">methods</span>: {
  <span class="hljs-function"><span class="hljs-title">onLoad</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>;
    <span class="hljs-comment">// Simulate async requests</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        <span class="hljs-built_in">this</span>.list.push(<span class="hljs-built_in">this</span>.list.length + <span class="hljs-number">1</span>);
      }
      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>;
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.list.length &gt;= <span class="hljs-number">40</span>) {
        <span class="hljs-built_in">this</span>.finished = <span class="hljs-literal">true</span>;
      }
    }, <span class="hljs-number">1000</span>);
  },
}
</code></pre><h3>Error Text</h3><p>After loading is error, reloading will be Emitted only when error text clicked.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  @<span class="hljs-attr">reload</span>=<span class="hljs-string">&quot;reload&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;finished text&quot;</span>
  <span class="hljs-attr">:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">errortext</span>=<span class="hljs-string">&quot;Error, click retry&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-list</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">list</span>: [],
    <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">error</span>: <span class="hljs-literal">false</span>,
  };
},
<span class="hljs-attr">methods</span>: {
  <span class="hljs-function"><span class="hljs-title">onLoad</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>;
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        <span class="hljs-built_in">this</span>.list.push(<span class="hljs-built_in">this</span>.list.length + <span class="hljs-number">1</span>);
      }
      <span class="hljs-comment">// Simulate emitted error</span>
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.list.length === <span class="hljs-number">10</span>) {
        <span class="hljs-built_in">this</span>.error = <span class="hljs-literal">true</span>;
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">this</span>.error = <span class="hljs-literal">false</span>;
      }
      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>;
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.list.length &gt;= <span class="hljs-number">40</span>) {
        <span class="hljs-built_in">this</span>.finished = <span class="hljs-literal">true</span>;
      }
    }, <span class="hljs-number">1000</span>);
  },
  <span class="hljs-function"><span class="hljs-title">reload</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.error = <span class="hljs-literal">false</span>;
  }
}
</code></pre><h3>Custom Info</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;finished&quot;</span>&gt;</span>Custom finished text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>Custom error text<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span>&gt;</span> Custom loading<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-list</span>&gt;</span>
</code></pre><h3>PullRefresh</h3><p>Can be used with <code class="">pull-refresh</code> component.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/pull-refresh&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-pull-refresh</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
        @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
        <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
        <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
        <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;finished text&quot;</span>
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-list&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">quark-list</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-pull-refresh</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">list</span>: [],
    <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">finished</span>: <span class="hljs-literal">false</span>,
  };
},
<span class="hljs-attr">methods</span>: {
  <span class="hljs-function"><span class="hljs-title">onLoad</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>;
    <span class="hljs-comment">// Simulate async requests</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        <span class="hljs-built_in">this</span>.list.push(<span class="hljs-built_in">this</span>.list.length + <span class="hljs-number">1</span>);
      }
      <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>;
      <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.list.length &gt;= <span class="hljs-number">40</span>) {
        <span class="hljs-built_in">this</span>.finished = <span class="hljs-literal">true</span>;
      }
    }, <span class="hljs-number">1000</span>);
  },
  <span class="hljs-function"><span class="hljs-title">onRefresh</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">true</span>;
    <span class="hljs-built_in">this</span>.list = [];
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
      <span class="hljs-built_in">this</span>.list.push(<span class="hljs-built_in">this</span>.list.length + <span class="hljs-number">1</span>);
    }
    <span class="hljs-built_in">this</span>.loading = <span class="hljs-literal">false</span>;
  },
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Arribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>error</td><td>Whether loading is error, the load event will be Emitted only when error text clicked</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>Whether to show loading info, the load event will not be Emitted when loading</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>finished</td><td>Whether loading is finished</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>offset</td><td>The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset</td><td><code class="">number</code></td><td><code class="">300</code></td></tr><tr><td>loadingtext</td><td>Loading text</td><td><code class="">string</code></td><td><code class="">loading...</code></td></tr><tr><td>finishedtext</td><td>Finished text</td><td><code class="">string</code></td><td></td></tr><tr><td>errortext</td><td>Error loaded text</td><td><code class="">string</code></td><td></td></tr><tr><td>textcolor</td><td>Text font color</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>load</td><td>Emitted when the distance between the scrollbar and the bottom is less than offset</td><td><code class="">() =&gt; void</code></td></tr><tr><td>reload</td><td>Emitted when click retry after loading is error</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>content</td><td>List content</td></tr><tr><td>finished</td><td>Custom finished tips</td></tr><tr><td>error</td><td>Custom error tips</td></tr><tr><td>loading</td><td>Custom loading tips</td></tr></tbody></table>`,26),h=[e],d={},j="",u=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(i,r)=>(t(),n("div",p,h))}});export{u as default,j as excerpt,d as frontmatter};
