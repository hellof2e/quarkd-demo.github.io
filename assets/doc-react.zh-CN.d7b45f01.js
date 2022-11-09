import{d as a,c as t,a as u,o as l}from"./vue.6b336880.js";const n={class:"markdown-body"},e=u(`<h1>Noticebar \u901A\u77E5\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u6D88\u606F\u901A\u77E5\u529F\u80FD</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Noticebar } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;{text}&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h3>\u6587\u5B57\u884C\u6570\u8BBE\u7F6E</h3><p>\u901A\u8FC7\u5185\u5D4C <code class="">multiple</code> \u63A7\u5236\u6587\u5B57\u884C\u6570\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;{multipleText}&quot;</span> <span class="hljs-attr">multiple</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h3>\u6837\u5F0F\u8BBE\u7F6E</h3><p>\u901A\u8FC7 <code class="">color</code> \u63A7\u5236\u5B57\u4F53\u989C\u8272\uFF0C\u901A\u8FC7 <code class="">bgcolor</code> \u63A7\u5236\u80CC\u666F\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;{text}&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">bgcolor</span>=<span class="hljs-string">&quot;#ddd&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h3>\u6587\u5B57\u8D85\u957F\u6EDA\u52A8</h3><p>\u901A\u8FC7\u5185\u5D4C <code class="">quark-marquee\uFF08\u8DD1\u9A6C\u706F\uFF09</code> \u5B9E\u73B0\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Marquee } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">marquee</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;{multipleText}&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">marquee</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h3>\u56FE\u6807\u9690\u85CF</h3><p>\u901A\u8FC7 <code class="">righthide</code>\u3001<code class="">lefthide</code> \u5B9E\u73B0\u5DE6\u53F3\u4FA7\u56FE\u6807\u9690\u85CF\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9690\u85CF\u53F3\u4FA7&quot;</span> <span class="hljs-attr">righthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u9690\u85CF\u5DE6\u4FA7&quot;</span> <span class="hljs-attr">lefthide</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h2>\u4E24\u7AEF\u81EA\u5B9A\u4E49</h2><p>\u901A\u8FC7 <code class="">slot=&quot;left&quot;</code>\u3001<code class="">slot=&quot;right&quot;</code> \u5B9E\u73B0\u5DE6\u53F3\u4FA7\u5185\u5BB9\u81EA\u5B9A\u4E49\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5927\u5B66\u4E4B\u9053\uFF0C\u5728\u660E\u660E\u5FB7\uFF0C\u5728\u4EB2\u6C11\uFF0C\u5728\u6B62\u4E8E\u81F3\u5584\u3002&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u5DE6\u4FA7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\u53F3\u4FA7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h3>\u53F3\u4FA7\u4E8B\u4EF6\u7ED1\u5B9A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Noticebar</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Try to click right icon&quot;</span> @<span class="hljs-attr">rightclick</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Noticebar</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u6587\u672C</td><td><code class="">string</code></td><td></td></tr><tr><td>multiple</td><td>\u8D85\u8FC7\u591A\u5C11\u884C\u7701\u7565</td><td><code class="">string</code></td><td><code class="">1</code></td></tr><tr><td>lefthide</td><td>\u662F\u5426\u9690\u85CF\u5DE6\u4FA7\u56FE\u6807</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>righthide</td><td>\u662F\u5426\u9690\u85CF\u53F3\u4FA7\u56FE\u6807</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>keyword</td><td>\u5173\u952E\u5B57\u9AD8\u4EAE</td><td><code class="">string</code></td><td></td></tr><tr><td>onRightclick</td><td>\u53F3\u4FA7\u70B9\u51FB\u4E8B\u4EF6</td><td><code class="">() =&gt; void </code></td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9</td></tr><tr><td>text</td><td>\u81EA\u5B9A\u4E49\u6587\u672C</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u63CF\u8FF0</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--noticebar-left-color</code></td><td>\u5DE6\u4FA7\u56FE\u6807\u989C\u8272</td><td><code class="">\u7EE7\u627F</code></td></tr><tr><td><code class="">--noticebar-right-color</code></td><td>\u53F3\u4FA7\u56FE\u6807\u989C\u8272</td><td><code class="">\u7EE7\u627F</code></td></tr></tbody></table>`,33),c=[e],r={},F="",g=a({__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),t("div",n,c))}});export{g as default,F as excerpt,r as frontmatter};
