import{d as a,c as n,a as t,o as l}from"./vue.3ff03b12.js";const e={class:"markdown-body"},p=t(`<h1>ImagePreview</h1><h3>Intro</h3><p>Basic image preview function</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> {
  imagepreview,
  ImagePreview,
  ImagePreviewRef,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Image preview</p><pre><code class="language-js">imagepreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
});
</code></pre><h3>Set Start Position</h3><p>Specify the image preview position to start. The default is 1.</p><pre><code class="language-js">imagepreview({
  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
});
</code></pre><h3>Move Event</h3><pre><code class="language-js">imagepreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
  <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`current location<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>),
});
</code></pre><h3>Close Event</h3><pre><code class="language-js">imagepreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&quot;1.png&quot;</span>, <span class="hljs-string">&quot;2.png&quot;</span>, <span class="hljs-string">&quot;3.png&quot;</span>],
  <span class="hljs-attr">close</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`current close location<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>),
});
</code></pre><h3>Component Call</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> preview = useRef&lt;ImagePreviewRef&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> baseUrls = [
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>,
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png&quot;</span>,
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png&quot;</span>,
  ];

  <span class="hljs-keyword">const</span> componentsClick = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
    preview.current.setData({
      <span class="hljs-attr">images</span>: baseUrls,
    });
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{componentsClick}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ImagePreview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{preview}</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Navigation</h3><p>Display index with change event</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> baseUrls = [
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>,
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/1V_2oJv02t.png&quot;</span>,
    <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/Q6t6B_noNetWork.png&quot;</span>,
  ];
  <span class="hljs-keyword">const</span> [index, setIndex] = useState(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> [open2, setOpen2] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> preview2 = useRef&lt;ImagePreviewRef&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">const</span> componentsClick2 = <span class="hljs-function">() =&gt;</span> {
    setOpen2(<span class="hljs-literal">true</span>);
    preview2.current.setData({
      <span class="hljs-attr">images</span>: baseUrls,
      <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">_index</span>) =&gt;</span> setIndex(_index),
      <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> setOpen2(<span class="hljs-literal">false</span>),
    });
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{componentsClick2}</span>&gt;</span>Custom Navigation<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ImagePreview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{preview2}</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open2}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-indicator&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicator&quot;</span>&gt;</span>
          Page{{ index }}{&quot; &quot;}
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ImagePreview</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Component call</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>setData</td><td>Set current value of ImageView</td><td><code class="">(data: Options) =&gt; void</code></td></tr></tbody></table><h3>Type definition</h3><pre><code class="language-js">type Options = {
  <span class="hljs-attr">images</span>: string[] <span class="hljs-comment">// images array</span>
  startPosition?: number <span class="hljs-comment">// which means the default show position</span>
  change?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// custom navigation event</span>
  close?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// specific component close</span>
};
</code></pre><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=indicator</td><td>Custom show pages</td></tr></tbody></table>`,29),c=[p],g={},j="",d=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),n("div",e,c))}});export{d as default,j as excerpt,g as frontmatter};
