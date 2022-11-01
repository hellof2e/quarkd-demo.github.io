import{c as s,o as a,a as d}from"./vue.c5ba06d9.js";const e={class:"markdown-body"},o=d(`<h1>Skeleton \u9AA8\u67B6\u5C4F</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u5185\u5BB9\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u5C55\u793A\u4E00\u7EC4\u5360\u4F4D\u56FE\u5F62\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/skeleton&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u5934\u50CF\u3001\u6807\u9898</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">titel</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u5B50\u7EC4\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">titel</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:hide</span>=<span class="hljs-string">&quot;hide&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6B63\u5F0F\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u6BB5\u843D\u5BBD\u5EA6</h3><p>\u6BB5\u843D\u5BBD\u5EA6\u4F7F\u7528 <code>rowwidths</code> \u5C5E\u6027\uFF0C\u91C7\u7528\u9017\u53F7\u8FDB\u884C\u5206\u5272\uFF1A\u6BD4\u5982 <code>row</code> \u8BBE\u4E3A <code>3</code>\uFF0C\u5219\u53EF\u8BBE\u7F6E <code>rowwidths</code> \u4E3A <code>100%,100%,60%</code></p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-skeleton</span> <span class="hljs-attr">titel</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">:row</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">rowwidths</span>=<span class="hljs-string">&quot;100%,100%,60%&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-skeleton</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>avatar</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>avatarshape</td><td>\u5934\u50CF\u5360\u4F4D\u56FE\u5F62\u72B6</td><td><code>round</code> \u6216 <code>square</code></td><td><code>round</code></td></tr><tr><td>titel</td><td>\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>row</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td><td><code>number</code></td><td>-</td></tr><tr><td>rowwidths</td><td>\u6BB5\u843D\u6BCF\u884C\u5BBD\u5EA6</td><td><code>string</code></td><td>-</td></tr><tr><td>hide</td><td>\u5173\u95ED\u9AA8\u67B6\u5C4F</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--skeleton-avatar-size</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u5C3A\u5BF8</td><td><code>32px</code></td></tr><tr><td><code>--skeleton-avatar-margin-right</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u8DDD\u53F3\u4FA7\u95F4\u8DDD</td><td><code>16px</code></td></tr><tr><td><code>--skeleton-avatar-background-color</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u80CC\u666F\u8272</td><td><code>#f2f3f5</code></td></tr><tr><td><code>--skeleton-title-width</code></td><td>\u6807\u9898\u5360\u4F4D\u56FE\u5BBD\u5EA6</td><td><code>40%</code></td></tr><tr><td><code>--skeleton-row-height</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u9AD8\u5EA6</td><td><code>16px</code></td></tr><tr><td><code>--skeleton-row-background-color</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u80CC\u666F</td><td><code>#f2f3f5</code></td></tr><tr><td><code>--skeleton-row-border-radius</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u5706\u89D2</td><td><code>0</code></td></tr><tr><td><code>--skeleton-row-margin-top</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u95F4\u8DDD</td><td><code>12px</code></td></tr></tbody></table>`,20),n=[o],g={__name:"doc.zh-CN",setup(l,{expose:t}){return t({frontmatter:{}}),(r,p)=>(a(),s("div",e,n))}};export{g as default};
