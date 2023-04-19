import{d as a,c as n,a as t,o as l}from"./vue.112a6c2f.js";const p={class:"markdown-body"},e=t(`<h1>Progress \u8FDB\u5EA6\u6761\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u5C55\u793A\u8FDB\u5EA6</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Progress } <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u5B57\u4F53\u8FDB\u5EA6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">showtext</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272/\u80CC\u666F\u8272</h3><pre><code class="language-css"><span class="hljs-selector-class">.green</span> {
  --progress-box-<span class="hljs-attribute">background</span>: yellowgreen;
  --progress-<span class="hljs-attribute">margin-left</span>: <span class="hljs-number">6px</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">progress</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;30&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;green&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5BBD\u5EA6\u9AD8\u5EA6/\u5706\u89D2</h3><pre><code class="language-css"><span class="hljs-selector-class">.auto</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">50px</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">15px</span>;
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">progress</span>
  <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;90&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;auto&quot;</span>
  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;linear-gradient(
  268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;percent&quot;</span>&gt;</span>0.9<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">progress</span>&gt;</span>
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9ED8\u8BA4\u8FDB\u5EA6 0-100 \u4EE3\u8868\u767E\u5206\u6BD4</td><td><code class="">string</code></td><td><code class="">0</code></td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u6FC0\u6D3B\u989C\u8272\u652F\u6301\u6E10\u53D8</td><td><code class="">string</code></td><td><code class=""> linear-gradient(90deg, #FFC91C 0%, #FB990F 100%)</code></td></tr><tr><td>showtext</td><td>\u662F\u5426\u663E\u793A\u6587\u5B57\u8FDB\u5EA6</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table>`,17),c=[e],g={},d="",j=a({__name:"doc-react.zh-CN",setup(u,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),n("div",p,c))}});export{j as default,d as excerpt,g as frontmatter};
