import{d as a,c as t,a as l,o as n}from"./vue.93d13378.js";const u={class:"markdown-body"},e=l(`<h1>textArea \u6587\u672C\u57DF</h1><h3>\u4ECB\u7ECD</h3><p>\u591A\u884C\u6587\u672C\u8F93\u5165\u6846</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/textarea&#39;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> /&gt;</span>
</code></pre><h3>\u6307\u5B9A\u884C\u6570</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>\u5B57\u6570\u7EDF\u8BA1</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>\u5B57\u6570\u9650\u5236</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-jsx">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">disabled</span> /&gt;</span></span>
&lt;/div&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">showcount</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
<span class="hljs-selector-class">.custom-style</span>{
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">border-color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-count-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-placeholder-<span class="hljs-attribute">color</span>: red;
  --<span class="hljs-selector-tag">textarea</span>-text-count-align: <span class="hljs-string">&#39;left&#39;</span>;
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>\u89E6\u53D1\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;quark-cell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span>
    @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;input&#39;)&quot;</span>
    @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;blur&#39;)&quot;</span>
    @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;focus&#39;)&quot;</span>
    @<span class="hljs-attr">compositionstart</span>=<span class="hljs-string">&quot;handleEvent($event, &#39;compositionstart&#39;)&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> Toast <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../toast&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">handleEvent</span>(<span class="hljs-params">event, type</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`<span class="hljs-subst">\${event.target.value}</span>, <span class="hljs-subst">\${type}</span>\`</span>);
    },
  }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u8F93\u5165\u503C</td><td><code class="">string </code></td><td></td></tr><tr><td>placeholder</td><td>\u63D0\u793A\u6587\u672C</td><td><code class="">string</code></td><td></td></tr><tr><td>rows</td><td>\u884C\u6570</td><td><code class="">number</code></td><td><code class="">2</code></td></tr><tr><td>maxlength</td><td>\u6700\u5927\u5B57\u7B26\u6570</td><td><code class="">number </code></td><td><code class="">-</code></td></tr><tr><td>showcount</td><td>\u663E\u793A\u5B57\u6570</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autocomplete</td><td>\u81EA\u52A8\u8865\u5168</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>id</td><td>textarea \u5143\u7D20\u7684 id\uFF0C\u5E38\u7528\u6765\u914D\u5408 label \u4F7F\u7528</td><td><code class="">string</code></td><td></td></tr></tbody></table><h3>Events</h3><p>textarea \u539F\u751F\u4E8B\u4EF6\u5747\u652F\u6301</p><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>input</td><td>\u6587\u672C\u57DF\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code class="">(e: {detail:{value: string}}\uFF09=&gt;void </code></td></tr><tr><td>focus</td><td>\u6587\u672C\u57DF\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code class="">(e: {detail:{value: string}}\uFF09=&gt;void </code></td></tr><tr><td>blur</td><td>\u6587\u672C\u57DF\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td><code class="">(e: {detail:{value: string}}\uFF09=&gt;void </code></td></tr><tr><td>compositionstart</td><td>\u8F93\u5165\u6CD5\u7F16\u8F91\u5668\u5F00\u59CB\u65B0\u7684\u8F93\u5165\u65F6\u89E6\u53D1</td><td><code class="">(\uFF09=&gt;void </code></td></tr></tbody></table><h2>CSS\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>\u2013textarea-color</td><td>\u6587\u5B57\u989C\u8272</td><td><code class="">#242729 </code></td></tr><tr><td>\u2013textarea-font-size</td><td>\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td>\u2013textarea-text-align</td><td>\u6587\u5B57\u4F4D\u7F6E</td><td><code class="">left</code></td></tr><tr><td>\u2013textarea-text-count-align</td><td>\u7EDF\u8BA1\u5B57\u6570\u4F4D\u7F6E</td><td><code class="">right</code></td></tr><tr><td>\u2013textarea-count-color</td><td>\u7EDF\u8BA1\u5B57\u6570\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td>\u2013textarea-border-color</td><td>\u6587\u672C\u57DF\u8FB9\u6846\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td>\u2013textarea-placeholder-color</td><td>\u5360\u4F4D\u6587\u5B57\u989C\u8272</td><td><code class="">#242729</code></td></tr></tbody></table>`,31),d=[e],h={},g="",j=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,o)=>(n(),t("div",u,d))}});export{j as default,g as excerpt,h as frontmatter};
