import{c as a,o as n,a as l}from"./vue.296e9791.js";const t={class:"markdown-body"},p=l(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C Quark \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png"><h2>NPM \u5B89\u88C5</h2><pre><code class="language-shell"><span class="hljs-meta">#</span><span class="bash"> Vue / Angular / HTML / \u5176\u5B83\u524D\u7AEF\u6280\u672F\u6808</span>
npm i quarkd
<span class="hljs-meta">
#</span><span class="bash"> React \u9879\u76EE</span>
npm i @quarkd/quark-react
</code></pre><p><code>@quarkd/quark-react</code> \u5E95\u5C42\u4F9D\u8D56 <code>quarkd</code> ,\u4F18\u5316\u4E86\u5728 React \u9879\u76EE\u4E2D\u7EC4\u4EF6\u4E8B\u4EF6\u9700\u8981\u624B\u52A8 addEventListener \u95EE\u9898\u3002</p><h2>1\u3001\u4F7F\u7528\u793A\u4F8B Vue</h2><pre><code class="language-tsx">&lt;template&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><h2>2\u3001\u4F7F\u7528\u793A\u4F8B React</h2><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Demo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
  <span class="hljs-function"><span class="hljs-title">render</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>;
  }
}
</code></pre><h2>3 \u3001Polyfill</h2><blockquote><p>Quark(Web components) \u652F\u6301\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u5982\u9700\u517C\u5BB9\u66F4\u4F4E\u7248\u672C\uFF0C\u8BF7\u5728 HTML \u5934\u90E8\u52A0\u5165 polyfill\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/wcs-bundle.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>\u4E0A\u9762 cdn \u540C\u5B98\u65B9Polyfill <a href="https://www.webcomponents.org/polyfills">\u70B9\u51FB\u67E5\u770B\u66F4\u591A</a>\u3002</p>`,15),e=[p],j={__name:"quickstart.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",t,e))}};export{j as default};
