import{c as a,o as n,a as t}from"./vue.77604f68.js";const l={class:"markdown-body"},c=t(`<h1>ActionSheet</h1><h3>Intro</h3><p>The pop-up modal panel at the bottom contains multiple options related to the current situation.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> showBase = <span class="hljs-function">() =&gt;</span> {
    ActionSheet({
      <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }],
      <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log.(action.name);
      },
    });
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showBase}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Basic Usage&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
}
</code></pre><h3>Show Title</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;This is title message&#39;</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
})
</code></pre><h3>Show Cancel Button</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;This is title message&#39;</span>,
  <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
});
</code></pre><h3>Custom Title Style</h3><pre><code class="language-js"> ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;This is title message&#39;</span>,
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
});
</code></pre><h3>Custom Options Style</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;This is title message&#39;</span>,
  <span class="hljs-attr">titleColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
  <span class="hljs-attr">titleFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span>,<span class="hljs-attr">color</span>: <span class="hljs-string">&#39;#999&#39;</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-number">20</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }
  ],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
});
</code></pre><h3>Custom Cancel Button Style</h3><pre><code class="language-js">ActionSheet({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;This is title message&#39;</span>,
  <span class="hljs-attr">cancelText</span>: <span class="hljs-string">&#39;Cancel&#39;</span>,
  <span class="hljs-attr">cancelTextColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
  <span class="hljs-attr">cancelTextFontSize</span>: <span class="hljs-number">20</span>,
  <span class="hljs-attr">actions</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 1&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 2&#39;</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Option 3&#39;</span> }],
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index, action</span>) =&gt;</span> {},
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> {},
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> {}
});
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><code>string</code></td><td></td></tr><tr><td>actions</td><td>Options</td><td><code>Action []</code></td><td><code>require</code></td></tr><tr><td>cancelText</td><td>Text of cancel button</td><td><code>string </code></td><td></td></tr><tr><td>titleColor</td><td>Title color</td><td><code>string </code></td><td><code>#969799</code></td></tr><tr><td>titleFontSize</td><td>Title font size</td><td><code>number </code></td><td><code>14</code></td></tr><tr><td>cancelTextColor</td><td>Text color of cancel button</td><td><code>string </code></td><td><code>#646566</code></td></tr><tr><td>cancelTextFontSize</td><td>Font size of cancel button</td><td><code>number </code></td><td><code>16</code></td></tr><tr><td>zIndex</td><td>actionsheet z-index</td><td><code>number </code></td><td><code>999</code></td></tr><tr><td>select</td><td>Selected callback</td><td><code>(index: number, action: Action) =&gt; void</code></td><td></td></tr><tr><td>cancel</td><td>Cancel button click callback</td><td><code>() =&gt; void </code></td><td></td></tr><tr><td>close</td><td>Mask click callback</td><td><code>() =&gt; void </code></td><td></td></tr></tbody></table><h3>Data Structure of Action</h3><pre><code class="language-js">type Action = {
  <span class="hljs-attr">name</span>: string;
  color?: string;
  fontSize?: number;
};

type ActionParams = {
  title?: string;
  actions: Action[],
  cancelText?: string,
  titleColor?: string,
  titleFontSize?: number,
  cancelTextColor?: string,
  cancelTextFontSize?: number,
  <span class="hljs-attr">select</span>: <span class="hljs-function">(<span class="hljs-params">index: number, action: Action</span>) =&gt;</span> <span class="hljs-keyword">void</span>,
  cancel?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  close?: <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">void</span>,
  zIndex?: number
}
</code></pre>`,22),p=[c],d={__name:"doc-react.en-US",setup(e,{expose:s}){return s({frontmatter:{}}),(r,i)=>(n(),a("div",l,p))}};export{d as default};
