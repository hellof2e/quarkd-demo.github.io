import{d as n,c as e,a,o as t}from"./vue.2377335e.js";const o={class:"markdown-body"},p=a(`<h1>Common Problem</h1><h2>Vue Precautions For Use</h2><p>Vue project using <code class="">quark</code> component may appear <strong>warning</strong>\uFF1A</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- vue@2.x: --&gt;</span>
Unknown custom element:
...

<span class="hljs-comment">&lt;!-- vue@3.x --&gt;</span>
[Vue warn]: Failed to resolve component: quark-button
...
</code></pre><p>Don\u2019t worry, this is because the syntax part of Vue components refers to custom elements, in order to avoid conflicts with Vue components, custom elements need to be ignored!</p><p>Please inject the following code into the project: <a href="https://vuejs.org/guide/extras/web-components.html">Vue Official document description</a></p><pre><code class="language-tsx"><span class="hljs-comment">// vue@2.x</span>
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
</code></pre>`,9),c=[p],m={},h="",d=n({__name:"notice.en-US",setup(l,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,i)=>(t(),e("div",o,c))}});export{d as default,h as excerpt,m as frontmatter};
