import{d as e,c as a,a as n,o as t}from"./vue.90a030a7.js";const o={class:"markdown-body"},c=n(`<h1>React/Preact Project</h1><pre><code class="language-bash">npm i @quarkd/quark-react
</code></pre><h3>React</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Demo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> (
      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">&quot;() =&gt; handleClick()&quot;</span>&gt;</span>
        Button
      <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
    );
  }
}
</code></pre><br><details><summary>@quarkd/quark-react technical principle</summary><p>Since the components provided by <code class="">quarkd</code> are all native custom elements (analogous to div), events dispatched in the component need to be received by <code class="">addEventLisener</code>, such as the custom close event <code class="">close</code> inside the <code class="">dialog</code> component. The Vue technology stack can directly use <code class="">@xx</code> to receive natively dispatched events, so there is no need to use <code class="">addEventLisener</code> to receive. <br><br> In order to improve the development experience, we have <a href="https://github.com/BBKolton/reactify-wc/">Reactify (Reactify)</a> for <code class="">quarkd</code>! So, we recommend that you use <code class="">@quarkd/quark-react</code> in your React/Preact projects!</p></details><h2>Polyfill</h2><blockquote><p>Use Quarkd(Web components) today and have them work in all major browsers. <a href="https://www.webcomponents.org/polyfills">Polyfill</a>.</p></blockquote><p>Install polyfills</p><pre><code class="">npm install @webcomponents/webcomponentsjs
</code></pre><p>You can also load the code from a CDN such as unpkg: <a href="https://unpkg.com/@webcomponents/webcomponentsjs@%5E2/">https://unpkg.com/@webcomponents/webcomponentsjs@^2/</a></p>`,11),l=[c],i={},u="",m=e({__name:"quickstart4React.en-US",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(t(),a("div",o,l))}});export{m as default,u as excerpt,i as frontmatter};
