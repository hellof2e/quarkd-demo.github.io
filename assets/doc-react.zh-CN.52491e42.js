import{d as a,c as t,a as n,o as l}from"./vue.ce134ea2.js";const u={class:"markdown-body"},p=n(`<h1>PullRefresh \u4E0B\u62C9\u5237\u65B0</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u63D0\u4F9B\u4E0B\u62C9\u5237\u65B0\u7684\u4EA4\u4E92\u64CD\u4F5C</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>;
<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [loading, setloading] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">const</span> onload = <span class="hljs-function">() =&gt;</span> {
    setloading(<span class="hljs-literal">true</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      Toast.success(<span class="hljs-string">&#39;\u5237\u65B0\u6210\u529F&#39;</span>);

      setloading(<span class="hljs-literal">false</span>);
      setCount(count++));

    }, <span class="hljs-number">1000</span>);
  };


  rerturn(
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PullRefresh</span> <span class="hljs-attr">dark</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">{loading}</span> <span class="hljs-attr">onRefresh</span>=<span class="hljs-string">{onload}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>
          \u5237\u65B0\u6B21\u6570: { count }
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">PullRefresh</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
}

</code></pre><h3>\u6DF1\u8272\u80CC\u666F</h3><p>\u901A\u8FC7 dark \u53EF\u4EE5\u8BBE\u7F6E\u4E0B\u62C9\u65F6\u7684\u80CC\u666F\u989C\u8272</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">PullRefresh</span> <span class="hljs-attr">dark</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;{loading}&quot;</span> <span class="hljs-attr">onRefresh</span>=<span class="hljs-string">&quot;{onFresh}&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span>{ count }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">PullRefresh</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u63D0\u793A</h3><p>\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E0B\u62C9\u5237\u65B0\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u5185\u5BB9</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">PullRefresh</span> <span class="hljs-attr">dark</span> <span class="hljs-attr">loading</span>=<span class="hljs-string">&quot;{loading}&quot;</span> <span class="hljs-attr">onRefresh</span>=<span class="hljs-string">&quot;{onFresh}&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;pull-content&quot;</span>&gt;</span>\u5237\u65B0\u6B21\u6570: { count }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;pulling&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/3OOq2_down.svg&quot;</span>
    /&gt;</span>\u4E0B\u62C9\u63D0\u793A
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loosing&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/18625/ImS4S_up.svg&quot;</span>
    /&gt;</span>\u677E\u5F00\u7ACB\u5373\u5237\u65B0
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;refresh-text&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-loading</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;18&quot;</span>&gt;</span>\u6B63\u5728\u5237\u65B0\u6570\u636E...<span class="hljs-tag">&lt;/<span class="hljs-name">quark-loading</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">PullRefresh</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dark</td><td>\u6DF1\u8272\u6A21\u5F0F (\u80CC\u666F\u503C: #0088FF )</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>headheight</td><td>\u9876\u90E8\u5185\u5BB9\u9AD8\u5EA6/\u89E6\u53D1\u4E0B\u62C9\u5237\u65B0\u7684\u8DDD\u79BB</td><td><code class="">string/number</code></td><td><code class="">96</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u4E2D\u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>pullingtext</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u4E0B\u62C9\u5373\u53EF\u5237\u65B0</code></td></tr><tr><td>loosingtext</td><td>\u91CA\u653E\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u677E\u5F00\u7ACB\u5373\u5237\u65B0</code></td></tr><tr><td>loadingtext</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u52A0\u8F7D\u4E2D...</code></td></tr><tr><td>textcolor</td><td>\u63D0\u793A\u6587\u6848\u5B57\u4F53\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#879099</code></td></tr><tr><td>onRefresh</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>content</td><td>\u8981\u5C55\u793A\u7684\u5185\u5BB9</td><td></td></tr><tr><td>pulling</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u4E2D\u7684\u9876\u90E8\u63D0\u793A\u4FE1\u606F</td><td></td></tr><tr><td>loosing</td><td>\u91CA\u653E\u8FC7\u7A0B\u4E2D\u7684\u9876\u90E8\u63D0\u793A\u4FE1\u606F</td><td></td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u9876\u90E8\u63D0\u793A\u4FE1\u606F</td><td></td></tr></tbody></table>`,18),c=[p],r={},g="",j=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,o)=>(l(),t("div",u,c))}});export{j as default,g as excerpt,r as frontmatter};
