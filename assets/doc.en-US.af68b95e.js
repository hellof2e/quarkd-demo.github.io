import{d as a,c as n,a as t,o as p}from"./vue.3c20e197.js";const l={class:"markdown-body"},e=t(`<h1>ImagePreview</h1><h3>Intro</h3><p>Basic image preview function</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> imagePreview <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/imagepreview&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Image preview</p><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
});
</code></pre><h3>Set Start Position</h3><p>Specify the image preview position to start. The default is 1.</p><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
});
</code></pre><h3>Move Event</h3><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
  <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`current location<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>),
});
</code></pre><h3>Close Event</h3><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
  <span class="hljs-attr">close</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`current close location<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>),
});
</code></pre><h3>Component Call</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image-preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//Simulate async requests</span>
      <span class="hljs-keyword">const</span> preview = <span class="hljs-built_in">this</span>.$refs.preview;
      preview.setData({
        <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> (<span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>),
      });
    }, <span class="hljs-number">1000</span>);
  },
  <span class="hljs-attr">methods</span>: {},
};
</code></pre><h3>Custom Navigation</h3><p>Display index with change event</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image-preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview2&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-indicator&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicator&quot;</span>&gt;</span>Page{{ index }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">index</span>: <span class="hljs-number">1</span>,
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//Simulate async requests</span>
      <span class="hljs-keyword">const</span> preview = <span class="hljs-built_in">this</span>.$refs.preview;
      preview2.setData({
        <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
        <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> (<span class="hljs-built_in">this</span>.index = index + <span class="hljs-number">1</span>),
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> (<span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>),
      });
    }, <span class="hljs-number">1000</span>);
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Component call</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>setData</td><td>Set current value of ImageView</td><td><code class="">(data: Options) =&gt; void</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type Options = {
  <span class="hljs-attr">images</span>: string[] <span class="hljs-comment">// images array</span>
  startPosition?: number <span class="hljs-comment">// which means the default show position</span>
  change?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// custom navigation event</span>
  close?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// specific component close</span>
};
</code></pre><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=indicator</td><td>Custom show pages</td></tr></tbody></table>`,31),c=[e],j={},u="",g=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(p(),n("div",l,c))}});export{g as default,u as excerpt,j as frontmatter};
