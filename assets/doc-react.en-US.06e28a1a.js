import{d as n,c as a,a as t,o as l}from"./vue.9c2f3f12.js";const p={class:"markdown-body"},c=t(`<h1>ShareSheet</h1><h3>Intro</h3><p>ShareSheet</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { ShareSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> showBase = <span class="hljs-function">() =&gt;</span> {
    ShareSheet({
      <span class="hljs-attr">options</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat Moments&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ space&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeiBo&quot;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QR code&quot;</span>,
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
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showBase}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Basic Usage&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Title Style</h3><pre><code class="language-js">ShareSheet({
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">options</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat Moments&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ space&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeiBo&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QR code&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png&quot;</span>,
    },
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h3>Custom Cancel Button Style</h3><pre><code class="language-js">ShareSheet({
  <span class="hljs-attr">cancelColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
  <span class="hljs-attr">options</span>: [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/LY3mn00VTX.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeChat Moments&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/QOiMPs9BLj.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/J4TWX9Jpca.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QQ space&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/wG7wG2CHQx.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;WeiBo&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/vt_vyR3M8I.png&quot;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;QR code&quot;</span>,
      <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/16682/hvu4xjJpNY.png&quot;</span>,
    },
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {},
});
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>options</td><td>option button</td><td><code class="">Option [] </code></td><td><code class="">require</code></td></tr><tr><td>titleColor</td><td>titleColor</td><td><code class="">string </code></td><td><code class="">#969799</code></td></tr><tr><td>titleFontSize</td><td>titleFontSize</td><td><code class="">number </code></td><td><code class="">14</code></td></tr><tr><td>cancelColor</td><td>cancel Button Color</td><td><code class="">string</code></td><td><code class="">#646566</code></td></tr><tr><td>cancelFontSize</td><td>cancel Button Text fontSize</td><td><code class="">number </code></td><td><code class="">16</code></td></tr><tr><td>zIndex</td><td>z-index</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>select</td><td>Option checked callback</td><td><code class="">(index: number, action: Option) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>Cancel button click callback</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>close</td><td>Mask click callback</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>The Data Structure Of Option</h3><pre><code class="language-js">type Option = {
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
</code></pre>`,16),o=[c],u={},d="",j=n({__name:"doc-react.en-US",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),a("div",p,o))}});export{j as default,d as excerpt,u as frontmatter};
