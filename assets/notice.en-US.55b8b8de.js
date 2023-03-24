import{d as n,c as a,a as e,o as t}from"./vue.2572eed9.js";const o={class:"markdown-body"},p=e(`<h1>Common Problem</h1><h2>Vue Precautions For Use</h2><p>Vue project using <code class="">quark</code> component may appear <strong>warning</strong>\uFF1A</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- vue@2.x: --&gt;</span>
Unknown custom element:
<span class="hljs-tag">&lt;<span class="hljs-name">quark-card</span>&gt;</span>
  - did you register the component correctly? For recursive components, make
  sure to provide the &quot;name&quot; option.

<span class="hljs-comment">&lt;!-- vue@3.x --&gt;</span>
[Vue warn]: Failed to resolve component: quark-icon
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-card</span>&gt;</span>
</code></pre><p>Don\u2019t worry, this is because the syntax part of Vue components refers to custom elements, in order to avoid conflicts with Vue components, custom elements need to be ignored! Please inject the following code into the project:</p><pre><code class="language-tsx"><span class="hljs-comment">// vue@2.x</span>
Vue.config.ignoredElements = [<span class="hljs-regexp">/^quark-/</span>];

<span class="hljs-comment">// vue@3.x</span>
<span class="hljs-keyword">const</span> app = createApp({});
app.config.compilerOptions.isCustomElement = <span class="hljs-function">(<span class="hljs-params">tag</span>) =&gt;</span> tag.startsWith(<span class="hljs-string">&quot;quark-&quot;</span>);
</code></pre><p>If you are using vite, modify vite.config.js:</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@vitejs/plugin-vue&quot;</span>;

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
</code></pre>`,8),c=[p],m={},h="",d=n({__name:"notice.en-US",setup(l,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,i)=>(t(),a("div",o,c))}});export{d as default,h as excerpt,m as frontmatter};
