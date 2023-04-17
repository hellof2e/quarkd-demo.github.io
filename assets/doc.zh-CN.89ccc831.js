import{d as s,c as a,a as t,o as l}from"./vue.8c4481a8.js";const n={class:"markdown-body"},e=t(`<h1>Collapse</h1><h3>\u4ECB\u7ECD</h3><p>\u5C06\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u6807\u9898\u53EF\u5C55\u5F00\u6216\u6536\u7F29\u5185\u5BB9\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/collapse&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  \u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>\u6253\u5F00\u72B6\u6001</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code class="">open=true</code> \u5C5E\u6027\u6765\u63A7\u5236\u6298\u53E0\u9762\u677F\u6253\u5F00\u72B6\u6001</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">open</span>&gt;</span>
  \u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>\u65E0 icon \u6837\u5F0F</h3><p>\u901A\u8FC7 <code class="">iconhide</code> \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u6807\u9898\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">iconhide</span>&gt;</span>
  \u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898</h3><p>\u901A\u8FC7 <code class="">slot=&quot;title&quot;</code> \u6765\u81EA\u5B9A\u4E49\u6807\u9898\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: blueviolet&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  \u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49 icon</h3><p>\u901A\u8FC7 <code class="">slot=&quot;icon&quot;</code> \u6765\u81EA\u5B9A\u4E49 icon\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-collapse</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;icon&quot;</span>&gt;</span>\u{1F389}\u{1F389}\u{1F389}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  \u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-collapse</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u6587\u5B57</td><td><code class="">string</code></td><td></td></tr><tr><td>open</td><td>\u6253\u5F00</td><td><code class="">Boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--callapse-title-fontsize</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#666</code></td></tr><tr><td><code class="">--callapse-content-fontsize</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--callapse-content-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#666</code></td></tr></tbody></table>`,25),p=[e],h={},r="",C=s({__name:"doc.zh-CN",setup(c,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(o,F)=>(l(),a("div",n,p))}});export{C as default,r as excerpt,h as frontmatter};
