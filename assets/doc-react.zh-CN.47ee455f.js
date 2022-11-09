import{d as a,c as n,a as t,o as l}from"./vue.5b2d89be.js";const c={class:"markdown-body"},p=t(`<h1>ActionSheet</h1><h3>\u4ECB\u7ECD</h3><p>ActionSheet \u52A8\u4F5C\u9762\u677F</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> showBase = <span class="hljs-function">() =&gt;</span> {
    ActionSheet({
      <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span> }],
      <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log.(action.name);
      },
    });
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showBase}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u672C\u4F7F\u7528&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><h3>\u5E26\u6807\u9898</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6211\u662F\u6807\u9898\u4FE1\u606F&quot;</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>\u5E26\u53D6\u6D88\u6309\u94AE</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6211\u662F\u6807\u9898\u4FE1\u606F&quot;</span>,
  <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898\u6837\u5F0F</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6211\u662F\u6807\u9898\u4FE1\u606F&quot;</span>,
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6211\u662F\u6807\u9898\u4FE1\u606F&quot;</span>,
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;#999&quot;</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-number">20</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> },
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6837\u5F0F</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6211\u662F\u6807\u9898\u4FE1\u606F&quot;</span>,
  <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>,
  <span class="hljs-attr">cancelTextColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">cancelTextFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E00&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E8C&quot;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;\u9009\u9879\u4E09&quot;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u6587\u5B57</td><td><code class="">string</code></td><td></td></tr><tr><td>actions</td><td>\u9009\u9879\u6309\u94AE</td><td><code class="">Action []</code></td><td><code class="">require</code></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE</td><td><code class="">string</code></td><td></td></tr><tr><td>titleColor</td><td>\u6807\u9898\u6587\u5B57\u989C\u8272</td><td><code class="">string </code></td><td><code class="">#969799</code></td></tr><tr><td>titleFontSize</td><td>\u6807\u9898\u6587\u5B57\u5927\u5C0F</td><td><code class="">number </code></td><td><code class="">14</code></td></tr><tr><td>cancelTextColor</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272</td><td><code class="">string </code></td><td><code class="">#646566</code></td></tr><tr><td>cancelTextFontSize</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u5927\u5C0F</td><td><code class="">number </code></td><td><code class="">16</code></td></tr><tr><td>zIndex</td><td>actionsheet \u5C42\u7EA7</td><td><code class="">number </code></td><td><code class="">999</code></td></tr><tr><td>select</td><td>\u9009\u9879\u9009\u4E2D\u56DE\u8C03</td><td><code class="">(index: number, action: Action) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code class="">() =&gt; void </code></td><td></td></tr><tr><td>close</td><td>\u8499\u7248\u70B9\u51FB\u56DE\u8C03</td><td><code class="">() =&gt; void </code></td><td></td></tr></tbody></table><h3>Action \u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B</h3><pre><code class="language-js">type Action = {
  <span class="hljs-attr">name</span>: string,
  color?: string,
  fontSize?: number,
};

type ActionParams = {
  title?: string,
  <span class="hljs-attr">actions</span>: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index: number, action: Action</span>) =&gt;</span> <span class="hljs-keyword">void</span>,
  cancel?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  close?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  zIndex?: number,
};
</code></pre>`,22),u=[p],d={},i="",j=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(l(),n("div",c,u))}});export{j as default,i as excerpt,d as frontmatter};
