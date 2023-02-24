import{d as a,c as n,a as l,o as t}from"./vue.5cc580eb.js";const p={class:"markdown-body"},u=l(`<h1>List \u5217\u8868</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u5C55\u793A\u957F\u5217\u8868\uFF0C\u5728\u5217\u8868\u5C06\u8981\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u89E6\u53D1\u4E8B\u4EF6\u6765\u52A0\u8F7D\u66F4\u591A\u5217\u8868\u9879\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/list&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u63D0\u793A&quot;</span>
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
    <span class="hljs-comment">// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42</span>
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
</code></pre><h3>\u9519\u8BEF\u63D0\u793A</h3><p>\u5728\u53D1\u751F\u9519\u8BEF\u65F6, \u53EF\u4EE5\u70B9\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\u91CD\u65B0\u62C9\u53D6\u6570\u636E</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  @<span class="hljs-attr">reload</span>=<span class="hljs-string">&quot;reload&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u63D0\u793A&quot;</span>
  <span class="hljs-attr">:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">errortext</span>=<span class="hljs-string">&quot;\u51FA\u9519\u4E86, \u70B9\u51FB\u91CD\u8BD5&quot;</span>
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
      <span class="hljs-comment">// \u6A21\u62DF\u89E6\u53D1error</span>
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
</code></pre><h3>\u81EA\u5B9A\u4E49\u63D0\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;finished&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u7684\u7ED3\u675F\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;list-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span>&gt;</span> \u81EA\u5B9A\u4E49\u7684\u52A0\u8F7D\u4E2D<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-list</span>&gt;</span>
</code></pre><h3>\u4E0B\u62C9\u5237\u65B0</h3><p>\u53EF\u4EE5\u548C\u4E0B\u62C9\u5237\u65B0\u7EC4\u4EF6\u8054\u5408\u4F7F\u7528</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/pull-refresh&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-pull-refresh</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-list</span>
        @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
        <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
        <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
        <span class="hljs-attr">finishedtext</span>=<span class="hljs-string">&quot;\u7ED3\u675F\u63D0\u793A&quot;</span>
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
    <span class="hljs-comment">// \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42</span>
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
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>error</td><td>\u662F\u5426\u52A0\u8F7D\u5931\u8D25\uFF0C\u52A0\u8F7D\u5931\u8D25\u540E\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u53EF\u4EE5\u91CD\u65B0\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u4E0D\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>finished</td><td>\u6570\u636E\u662F\u5426\u52A0\u8F7D\u7ED3\u675F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>offset</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1 load \u4E8B\u4EF6</td><td><code class="">number</code></td><td><code class="">300</code></td></tr><tr><td>loadingtext</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>finishedtext</td><td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>errortext</td><td>\u52A0\u8F7D\u5931\u8D25\u540E\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td></td></tr><tr><td>textcolor</td><td>\u63D0\u793A\u6587\u6848\u5B57\u4F53\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>load</td><td>\u6EDA\u52A8\u6761\u4E0E\u5E95\u90E8\u8DDD\u79BB\u5C0F\u4E8E offset \u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void </code></td></tr><tr><td>reload</td><td>\u53D1\u751F\u9519\u8BEF, \u70B9\u51FB\u91CD\u8BD5\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u8981\u5C55\u793A\u7684\u5185\u5BB9</td></tr><tr><td>finished</td><td>\u81EA\u5B9A\u4E49\u7684\u7ED3\u675F\u72B6\u6001\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u7684\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u4FE1\u606F</td></tr></tbody></table>`,26),c=[u],o={},j="",d=a({__name:"doc.zh-CN",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,i)=>(t(),n("div",p,c))}});export{d as default,j as excerpt,o as frontmatter};
