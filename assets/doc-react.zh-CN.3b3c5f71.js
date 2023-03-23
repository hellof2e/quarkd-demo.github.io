import{d as n,c as a,a as t,o as l}from"./vue.41a5ff19.js";const p={class:"markdown-body"},c=t(`<h1>ShareSheet</h1><h3>\u4ECB\u7ECD</h3><p>ShareSheet \u5206\u4EAB\u9762\u677F</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { ShareSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> showBase = <span class="hljs-function">() =&gt;</span> {
    ShareSheet({
      <span class="hljs-attr">options</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1\u670B\u53CB\u5708&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ\u7A7A\u95F4&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u535A&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4E8C\u7EF4\u7801&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png&quot;</span>,
        },
      ],
      <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
      <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
      <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
    });
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showBase}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u672C\u4F7F\u7528&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F</h3><pre><code class="language-js">ShareSheet({
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">options</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1\u670B\u53CB\u5708&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ\u7A7A\u95F4&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u535A&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4E8C\u7EF4\u7801&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png&quot;</span>,
    },
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6837\u5F0F</h3><pre><code class="language-js">ShareSheet({
  <span class="hljs-attr">cancelColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">options</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u4FE1\u670B\u53CB\u5708&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ\u7A7A\u95F4&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u5FAE\u535A&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u4E8C\u7EF4\u7801&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png&quot;</span>,
    },
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>options</td><td>\u9009\u9879\u6309\u94AE</td><td><code class="">Option [] </code></td><td><code class="">require</code></td></tr><tr><td>titleColor</td><td>\u6807\u9898\u6587\u5B57\u989C\u8272</td><td><code class="">string </code></td><td><code class="">#969799</code></td></tr><tr><td>titleFontSize</td><td>\u6807\u9898\u6587\u5B57\u5927\u5C0F</td><td><code class="">number </code></td><td><code class="">14</code></td></tr><tr><td>cancelColor</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><code class="">string </code></td><td><code class="">#646566</code></td></tr><tr><td>cancelFontSize</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u5927\u5C0F</td><td><code class="">number</code></td><td><code class="">16</code></td></tr><tr><td>zIndex</td><td>sharesheet \u5C42\u7EA7</td><td><code class="">number </code></td><td><code class="">999</code></td></tr><tr><td>select</td><td>\u9009\u9879\u9009\u4E2D\u56DE\u8C03</td><td><code class="">(index: number, action: Option) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>close</td><td>\u8499\u7248\u70B9\u51FB\u56DE\u8C03</td><td><code class="">() =&gt; void </code></td><td></td></tr></tbody></table><h3>Option \u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B</h3><pre><code class="language-js">type Option = {
  <span class="hljs-attr">name</span>: string,
  <span class="hljs-attr">icon</span>: string,
};

type ShareSheetParams = {
  <span class="hljs-attr">options</span>: Option[],
  titleColor?: string,
  titleFontSize?: number,
  cancelColor?: string,
  cancelFontSize?: number,
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index: number, action: Option</span>) =&gt;</span> <span class="hljs-keyword">void</span>,
  cancel?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  close?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  zIndex?: number,
};
</code></pre>`,16),o=[c],d={},i="",j=n({__name:"doc-react.zh-CN",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,h)=>(l(),a("div",p,o))}});export{j as default,i as excerpt,d as frontmatter};
