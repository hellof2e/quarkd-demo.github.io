import{c as t,o as a,a as p}from"./vue.60af942b.js";const n={class:"markdown-body"},o=p(`<h1>Popup</h1><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5C42</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/popup&#39;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;handleClosed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u4E00xxxxxxxxxxxxxxxxx\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u7B2C\u4E8Cxxxxxxxxxxxxxxxxx\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-popup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopup&quot;</span>&gt;</span>\u89E6\u53D1Popup\u663E\u793A<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">import</span>  <span class="hljs-string">&#39;quarkd/lib/popup&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
        }
    },
    <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">showPopup</span>(<span class="hljs-params"></span>)</span> {
            <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
        },
        <span class="hljs-function"><span class="hljs-title">handleClosed</span>(<span class="hljs-params"></span>)</span> {
            <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
        }
  }
}
&lt;/script&gt;
</code></pre><h3>\u5F39\u7A97\u4F4D\u7F6E</h3><p>\u901A\u8FC7 position \u5C5E\u6027\u8BBE\u7F6E\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A top\u3001bottom\u3001left\u3001right\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>/&gt;</span>
</code></pre><h3>\u5173\u95ED\u56FE\u6807</h3><p>\u8BBE\u7F6E closeable \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">closeable</span> /&gt;</span>
</code></pre><h3>\u5706\u89D2\u5F39\u7A97</h3><p>\u8BBE\u7F6E round \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">round</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u5F39\u7A97\u72B6\u6001</td><td><code>boolean</code></td><td><code>require</code></td></tr><tr><td>position</td><td>\u5F39\u6846\u4F4D\u7F6E</td><td><code>top</code> <code>bottom</code> <code>left</code> <code>right</code></td><td><code>bottom</code></td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2</td><td><code>boolean </code></td><td><code>false</code></td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td><code>boolean </code></td><td><code>false</code></td></tr><tr><td>safearea</td><td>\u662F\u5426\u5F00\u542F\u5E95\u90E8\u5B89\u5168\u533A\u57DF\u9002\u914D</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zindex</td><td>popup\u5C42\u7EA7\u8BBE\u7F6E</td><td><code>number\u3001string</code></td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>closed</td><td>\u7EC4\u4EF6\u5173\u95ED\u56DE\u8C03</td><td><code>\uFF08\uFF09=&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--popup-mask-color</code></td><td>\u8499\u5C42\u80CC\u666F</td><td><code>rgba(0, 0, 0, 0.7)</code></td></tr><tr><td><code>--popup-z-index</code></td><td>\u7EC4\u4EF6\u5C42\u7EA7</td><td><code>999</code></td></tr><tr><td><code>--popup-max-width</code></td><td>popup\u5185\u5BB9\u533A\u57DF\u6700\u5927\u5BBD\u5EA6</td><td><code>90%</code></td></tr><tr><td><code>--popup-min-width</code></td><td>popup\u5185\u5BB9\u533A\u57DF\u6700\u5C0F\u5BBD\u5EA6</td><td>-</td></tr><tr><td><code>--popup-max-height</code></td><td>popup\u5185\u5BB9\u533A\u57DF\u6700\u5927\u9AD8\u5EA6</td><td><code>90%</code></td></tr><tr><td><code>--popup-min-height</code></td><td>popup\u5185\u5BB9\u533A\u57DF\u6700\u5C0F\u9AD8\u5EA6</td><td><code>200px</code></td></tr><tr><td><code>--popup-border-radius</code></td><td>popup\u5706\u89D2\u5927\u5C0F\uFF08\u4EC5\u5F53position\u4E3Abottom\uFF0C\u4E14props\u8BBE\u7F6Eround\u751F\u6548\uFF09</td><td><code>200px</code></td></tr></tbody></table>`,25),d=[o],i={__name:"doc.zh-CN",setup(l,{expose:s}){return s({frontmatter:{}}),(c,h)=>(a(),t("div",n,d))}};export{i as default};
