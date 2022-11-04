import{c as n,o as a,a as t}from"./vue.60af942b.js";const e={class:"markdown-body"},p=t(`<h1>\u5E38\u89C1\u95EE\u9898</h1><h2>Vue \u4F7F\u7528\u6CE8\u610F\u4E8B\u9879</h2><p>Vue \u5DE5\u7A0B\u4E2D\u4F7F\u7528 <code>quark</code> \u7EC4\u4EF6\u53EF\u80FD\u4F1A\u51FA\u73B0<strong>\u544A\u8B66</strong>\uFF1A</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- vue@2.x: --&gt;</span>
Unknown custom element:
<span class="hljs-tag">&lt;<span class="hljs-name">quark-card</span>&gt;</span>
  - did you register the component correctly? For recursive components, make
  sure to provide the &quot;name&quot; option.

  <span class="hljs-comment">&lt;!-- vue@3.x --&gt;</span>
  [Vue warn]: Failed to resolve component: quark-icon
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-card</span>&gt;</span>
</code></pre><p>\u4E0D\u7528\u62C5\u5FC3\uFF0C\u8FD9\u662F\u7531\u4E8E Vue \u7EC4\u4EF6\u7684\u8BED\u6CD5\u90E8\u5206\u53C2\u8003\u4E86\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u4E3A\u4E86\u907F\u514D\u4E0E Vue \u7EC4\u4EF6\u4EA7\u751F\u51B2\u7A81\uFF0C\u9700\u8981\u5C06\u81EA\u5B9A\u4E49\u5143\u7D20\u5FFD\u7565\uFF01\u8BF7\u5728\u5DE5\u7A0B\u4E2D\u6CE8\u5165\u5982\u4E0B\u4EE3\u7801\u5373\u53EF\uFF1A</p><pre><code class="language-tsx"><span class="hljs-comment">// vue@2.x</span>
Vue.config.ignoredElements = [<span class="hljs-regexp">/^quark-/</span>];

<span class="hljs-comment">// vue@3.x</span>
<span class="hljs-keyword">const</span> app = createApp({});
app.config.compilerOptions.isCustomElement = <span class="hljs-function">(<span class="hljs-params">tag</span>) =&gt;</span> tag.startsWith(<span class="hljs-string">&quot;quark-&quot;</span>);
</code></pre><p>\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F vite\uFF0C\u4FEE\u6539 vite.config.js:</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@vitejs/plugin-vue&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">plugins</span>: [
    vue({
      <span class="hljs-attr">template</span>: {
        <span class="hljs-attr">compilerOptions</span>: {
          <span class="hljs-attr">isCustomElement</span>: <span class="hljs-function">(<span class="hljs-params">tag</span>) =&gt;</span> tag.startsWith(<span class="hljs-string">&quot;quark-&quot;</span>),
        },
      },
    }),
  ],
};
</code></pre>`,8),o=[p],i={__name:"notice.zh-CN",setup(l,{expose:s}){return s({frontmatter:{}}),(r,u)=>(a(),n("div",e,o))}};export{i as default};
