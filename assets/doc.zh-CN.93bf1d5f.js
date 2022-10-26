import{c as a,o as n,a as p}from"./vue.5ce4fb01.js";const l={class:"markdown-body"},t=p(`<h1>ImagePreview \u56FE\u7247\u9884\u89C8</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u57FA\u7840\u56FE\u7247\u9884\u89C8\u529F\u80FD</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> imagePreview <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/imagepreview&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u9884\u89C8\u56FE\u7247</p><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>:  [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>]
});
</code></pre><h3>\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E</h3><p>\u6307\u5B9A\u56FE\u7247\u9884\u89C8\u4F4D\u7F6E\u9ED8\u8BA4\u4ECE1\u5F00\u59CB</p><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">3</span>,
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>]
});
</code></pre><h3>\u76D1\u542C\u6ED1\u52A8\u4E8B\u4EF6</h3><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>],
  <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`\u5F53\u524D\u79FB\u52A8\u4F4D\u7F6E<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>)
});
</code></pre><h3>\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6</h3><pre><code class="language-js">imagePreview({
  <span class="hljs-attr">images</span>: [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>],
  <span class="hljs-attr">close</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> Toast.text(<span class="hljs-string">\`\u5F53\u524D\u5173\u95ED\u4F4D\u7F6E<span class="hljs-subst">\${index + <span class="hljs-number">1</span>}</span>\`</span>)
});
</code></pre><h3>\u6807\u7B7E\u5F0F\u8C03\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image-preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&#39;open&#39;</span>/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//\u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
      <span class="hljs-keyword">const</span> preview = <span class="hljs-built_in">this</span>.$refs.preview
      preview.setData({
        <span class="hljs-attr">images</span>: [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>],
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span>  <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
      })
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {}
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u5BFC\u822A</h3><p>\u914D\u5408 change \u4E8B\u4EF6\u663E\u793A\u4E0B\u6807</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-image-preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview2&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&#39;open&#39;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-indicator&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicator&quot;</span>&gt;</span>\u7B2C{{ index }} \u9875<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">index</span>: <span class="hljs-number">1</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//\u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
      <span class="hljs-keyword">const</span> preview = <span class="hljs-built_in">this</span>.$refs.preview
      preview2.setData({
        <span class="hljs-attr">images</span>: [<span class="hljs-string">&#39;1.png&#39;</span>, <span class="hljs-string">&#39;2.png&#39;</span>, <span class="hljs-string">&#39;3.png&#39;</span>],
        <span class="hljs-attr">change</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> <span class="hljs-built_in">this</span>.index = index + <span class="hljs-number">1</span>,
        <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span>  <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>
      })
    }, <span class="hljs-number">1000</span>)    
  },
  <span class="hljs-attr">methods</span>: {}
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u6807\u7B7E\u5F0F\u8C03\u7528\u5C5E\u6027</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setData</td><td>\u7528\u4E8E\u8BBE\u7F6E\u56FE\u7247\u9884\u89C8\u6570\u636E</td><td><code>(data: Options) =&gt; void</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type Options = {
  <span class="hljs-attr">images</span>: string[] <span class="hljs-comment">// \u8981\u663E\u793A\u7684\u56FE\u7247\u6570\u7EC4</span>
  startPosition?: number <span class="hljs-comment">// \u9ED8\u8BA4\u663E\u793A\u4F4D\u7F6E</span>
  change?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// \u56FE\u7247\u6ED1\u5230\u4E8B\u4EF6</span>
  close?: <span class="hljs-function">(<span class="hljs-params">index: number</span>) =&gt;</span> <span class="hljs-keyword">void</span> <span class="hljs-comment">// \u7EC4\u4EF6\u5173\u95ED\u4E8B\u4EF6</span>
};
</code></pre><h3>slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name=indicator</td><td>\u81EA\u5B9A\u4E49\u5206\u9875\u663E\u793A</td></tr></tbody></table>`,31),e=[t],j={__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(r,i)=>(n(),a("div",l,e))}};export{j as default};
