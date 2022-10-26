import{c as a,o as n,a as t}from"./vue.4f01afdf.js";const p={class:"markdown-body"},l=t(`<h1>Countdown \u5012\u8BA1\u65F6</h1><h3>\u4ECB\u7ECD</h3><p>\u5E38\u89C1\u7535\u5546\u79D2\u6740\u5012\u8BA1\u65F6</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/countdown&#39;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html">\u901A\u8FC7\u8BBE\u7F6E time \u7684\u503C\u4E3A\u65F6\u95F4\u6233
<span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;7200000&#39;</span>/&gt;</span>
</code></pre><h3>\u683C\u5F0F\u5316</h3><p>format \u5C5E\u6027\u63A7\u5236\uFF0C\u95F4\u9694\u7B26\u4EC5\u652F\u6301\u4E00\u4F4D\u5B57\u7B26\u4E32</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM:SS&#39;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM-SS&#39;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;360000&#39;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&#39;MM SS&#39;</span>/&gt;</span>
</code></pre><h3>\u7ED3\u675F\u56DE\u8C03</h3><p>\u5F53\u5012\u8BA1\u65F6\u4E3A 0 \u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u7ED3\u675F\u4E8B\u4EF6</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">time</span>=<span class="hljs-string">&#39;5000&#39;</span> @<span class="hljs-attr">end</span>=<span class="hljs-string">&#39;onEnd&#39;</span>/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> time3 = ref(<span class="hljs-number">5000</span>)
    <span class="hljs-keyword">const</span> onEnd = <span class="hljs-function">() =&gt;</span> {
      Toast.text(<span class="hljs-string">&#39;\u5F00\u59CB\u79D2\u6740&#39;</span>)
    }
    <span class="hljs-keyword">return</span> {
      time3,
      onEnd
      };
    },
});
</code></pre><h3>\u6837\u5F0F\u81EA\u5B9A\u4E49</h3><p>\u652F\u6301\u6837\u5F0F\u81EA\u5B9A\u4E49</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-countdown</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;css&quot;</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time1&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"> <span class="hljs-selector-class">.css</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">letter-spacing</span>: <span class="hljs-number">2px</span>;
    --countdown-num-<span class="hljs-attribute">min-width</span>: <span class="hljs-number">20px</span>;
    --countdown-num-<span class="hljs-attribute">background</span>: <span class="hljs-number">#fff</span>;
    --countdown-num-<span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">10px</span>;
    --countdown-num-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">6px</span>;
    --countdown-dot-<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    --countdown-dot-<span class="hljs-attribute">margin</span>: <span class="hljs-number">6px</span>;
  }
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>time</td><td>\u6807\u51C6\u65F6\u95F4\u6233</td><td>string</td><td></td></tr><tr><td>format</td><td>\u652F\u6301 HH MM SS\u3001MM:SS \u95F4\u9694\u7B26\u53EF\u81EA\u5B9A\u4E49\u4E00\u4F4D\u5B57\u7B26\u4E32</td><td>string</td><td><code>HH:MM:SS</code></td></tr><tr><td>end</td><td>\u5012\u8BA1\u65F6\u4E3A 0 \u89E6\u53D1\u4E8B\u4EF6</td><td>() =&gt; void</td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--countdown-num-min-width</code></td><td>\u6570\u5B57\u5185\u5BB9\u6700\u5C0F\u5BBD\u5EA6</td><td><code>18px</code></td></tr><tr><td><code> --countdown-num-background</code></td><td>\u6570\u5B57\u5185\u5BB9\u80CC\u666F\u8272</td><td><code>#F4433D</code></td></tr><tr><td><code>--countdown-num-padding</code></td><td>\u6570\u5B57\u5185\u5BB9 padding</td><td><code>0 4px</code></td></tr><tr><td><code>--countdown-num-border-radius</code></td><td>\u6570\u5B57\u5706\u89D2</td><td><code>4px</code></td></tr><tr><td><code>--countdown-dot-color</code></td><td>\u95F4\u9694\u7B26\u989C\u8272</td><td><code>#fff</code></td></tr><tr><td><code>--countdown-dot-margin</code></td><td>\u95F4\u9694\u7B26\u95F4\u8DDD</td><td><code>0 2px</code></td></tr></tbody></table>`,24),d=[l],u={__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{}}),(o,r)=>(n(),a("div",p,d))}};export{u as default};
