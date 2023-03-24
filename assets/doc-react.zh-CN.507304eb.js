import{d as s,c as a,a as e,o as u}from"./vue.3d7dc3f3.js";const d={class:"markdown-body"},c=e(`<h1>Textarea \u6587\u672C\u57DF</h1><h3>\u4ECB\u7ECD</h3><p>\u591A\u884C\u6587\u672C\u8F93\u5165\u6846</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Textarea } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> /&gt;</span>
</code></pre><h3>\u6307\u5B9A\u884C\u6570</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>
</code></pre><h3>\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
</code></pre><h3>\u5B57\u6570\u7EDF\u8BA1</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">showcount</span> /&gt;</span>
</code></pre><h3>\u5B57\u6570\u9650\u5236</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom-style</span> {
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">border-color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-count-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-placeholder-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-text-count-align: <span class="hljs-string">&quot;left&quot;</span>;
}
</code></pre><h3>\u89E6\u53D1\u4E8B\u4EF6</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span>
      <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{(event)</span> =&gt;</span> {
        Toast.text(\`\${event.target.value}, blur\`);
      }}
      onInput={(event) =&gt; {
        Toast.text(\`\${event.target.value}, input\`);
      }}
      onFocus={(event) =&gt; {
        Toast.text(\`\${event.target.value}, focus\`);
      }}
      onCompositionStart={(event) =&gt; {
        Toast.text(\`\${event.target.value}, compositionStart\`);
      }}
    /&gt;</span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u8F93\u5165\u503C</td><td><code class="">string</code></td><td></td></tr><tr><td>placeholder</td><td>\u63D0\u793A\u6587\u672C</td><td><code class="">string</code></td><td></td></tr><tr><td>rows</td><td>\u884C\u6570</td><td><code class="">number</code></td><td><code class="">2</code></td></tr><tr><td>maxlength</td><td>\u6700\u5927\u5B57\u7B26\u6570</td><td><code class="">number</code></td><td><code class="">-</code></td></tr><tr><td>showcount</td><td>\u663E\u793A\u5B57\u6570</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autocomplete</td><td>\u81EA\u52A8\u8865\u5168</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>id</td><td>textarea \u5143\u7D20\u7684 id\uFF0C\u5E38\u7528\u6765\u914D\u5408 label \u4F7F\u7528</td><td><code class="">string</code></td><td></td></tr><tr><td>onInput</td><td>\u6587\u672C\u57DF\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>onFocus</td><td>\u6587\u672C\u57DF\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>onBlur</td><td>\u6587\u672C\u57DF\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>onCompositionStart</td><td>\u8F93\u5165\u6CD5\u7F16\u8F91\u5668\u5F00\u59CB\u65B0\u7684\u8F93\u5165\u65F6\u89E6\u53D1</td><td><code class="">(\uFF09=&gt; void </code></td><td></td></tr></tbody></table><h2>CSS \u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--textarea-color</code></td><td>\u6587\u5B57\u989C\u8272</td><td><code class="">#242729 </code></td></tr><tr><td><code class="">--textarea-font-size</code></td><td>\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--textarea-text-align</code></td><td>\u6587\u5B57\u4F4D\u7F6E</td><td><code class="">left</code></td></tr><tr><td><code class="">--textarea-text-count-align</code></td><td>\u7EDF\u8BA1\u5B57\u6570\u4F4D\u7F6E</td><td><code class="">right</code></td></tr><tr><td><code class="">--textarea-count-color</code></td><td>\u7EDF\u8BA1\u5B57\u6570\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--textarea-border-color</code></td><td>\u6587\u672C\u57DF\u8FB9\u6846\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--textarea-placeholder-color</code></td><td>\u5360\u4F4D\u6587\u5B57\u989C\u8272</td><td><code class="">#242729</code></td></tr></tbody></table>`,28),l=[c],h={},g="",F=s({__name:"doc-react.zh-CN",setup(o,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,r)=>(u(),a("div",d,l))}});export{F as default,g as excerpt,h as frontmatter};
