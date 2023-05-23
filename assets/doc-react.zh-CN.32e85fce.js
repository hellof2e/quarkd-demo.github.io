import{d as a,c as n,a as l,o as t}from"./vue.695eecf4.js";const p={class:"markdown-body"},u=l(`<h1>Tabbar \u5E95\u90E8\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u5E95\u90E8\u5BFC\u822A\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/tabbar&quot;</span>;
</code></pre><p>\u5982\u679C\u4F7F\u7528 <code class="">quark-icons</code>\uFF0C\u8BF7\u5148\u5B89\u88C5\uFF1A<code class="">npm install --save quark-icons</code>\u3002</p><pre><code class="language-js"><span class="hljs-comment">// \u5F15\u5165 icons</span>
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/home&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/user&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@quarkd/icons/lib/tel&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9996\u9875<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6211\u7684<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8054\u7CFB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbar</span>&gt;</span>
</code></pre><h3>\u4E0D\u5E26\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>\u9996\u9875<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>\u6211\u7684<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>\u8054\u7CFB<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbar</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u9ED8\u8BA4\u6FC0\u6D3B\u83DC\u5355</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbar</span> <span class="hljs-attr">active</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9996\u9875<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6211\u7684<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8054\u7CFB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbar</span>&gt;</span>
</code></pre><h3>\u56FA\u5B9A\u5728\u9875\u9762\u5E95\u90E8</h3><p>\u901A\u8FC7 <code class="">fixed</code> \u6765\u8BBE\u7F6E\u56FA\u5B9A\u5E95\u90E8</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbar</span> <span class="hljs-attr">fixed</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-home</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u9996\u9875<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-user</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6211\u7684<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-icon-tel</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u8054\u7CFB<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbarItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">QuarkTabbar</span>&gt;</span>
</code></pre><h2>API</h2><h3>QuarkTabbar \u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>fixed</td><td>\u662F\u5426\u56FA\u5B9A\u5728\u5E95\u90E8</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>active</td><td>\u9009\u4E2D\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C</td><td><code class="">string</code></td><td><code class="">0</code></td></tr></tbody></table><h3>QuarkTabbar \u4E8B\u4EF6</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u6807\u7B7E\u65F6\u89E6\u53D1</td><td><code class="">{e:{detail: {value: \u9009\u4E2D\u7684\u540D\u79F0\u6216\u7D22\u5F15\u503C}}} =&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--tabbar-active-color</code></td><td>\u88AB\u6FC0\u6D3B\u83DC\u5355\u7684\u989C\u8272</td><td><code class="">#0088FF</code></td></tr></tbody></table>`,23),c=[u],j={},o="",d=a({__name:"doc-react.zh-CN",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(e,r)=>(t(),n("div",p,c))}});export{d as default,o as excerpt,j as frontmatter};
