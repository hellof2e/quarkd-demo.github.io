import{d as e,c as s,a,o as u}from"./vue.5e10e00c.js";const d={class:"markdown-body"},l=a(`<h1>Stepper</h1><h3>\u4ECB\u7ECD</h3><p>\u6B65\u8FDB\u5668\u7531\u589E\u52A0\u6309\u94AE\u3001\u51CF\u5C11\u6309\u94AE\u548C\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u7528\u4E8E\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u8F93\u5165\u3001\u8C03\u6574\u6570\u5B57\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Stepper } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Stepper</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u8F93\u5165\u8303\u56F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;12&quot;</span> /&gt;</span>
</code></pre><h3>\u6B65\u957F\u8BBE\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">steps</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><h3>\u9650\u5236\u8F93\u5165\u6574\u6570</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">interger</span> /&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-css">Stepper {
  --stepper-<span class="hljs-selector-tag">input</span>-text-<span class="hljs-attribute">color</span>: black;
  --stepper-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">background-color</span>: white;
  --stepper-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  --stepper-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
  --stepper-<span class="hljs-selector-tag">button</span>-<span class="hljs-attribute">border-width</span>: <span class="hljs-number">1px</span>;
  --stepper-plus-<span class="hljs-attribute">background-color</span>: red;
  --stepper-plus-<span class="hljs-attribute">color</span>: white;
  --stepper-minus-<span class="hljs-attribute">background-color</span>: white;
  --stepper-minus-<span class="hljs-attribute">color</span>: <span class="hljs-number">#ee0a24</span>;
  --stepper-minus-<span class="hljs-attribute">border-color</span>: <span class="hljs-number">#ee0a24</span>;
}
</code></pre><h3>\u53D8\u66F4\u56DE\u8C03</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> = <span class="hljs-function">() =&gt;</span>  {
  <span class="hljs-keyword">const</span> [value, setValue] = useState(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setValue(detail.value);
  };
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value}/</span>&gt;</span></span>
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">min</td><td style="text-align:center;">\u6700\u5C0F\u503C</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">max</td><td style="text-align:center;">\u6700\u5927\u503C</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">steps</td><td style="text-align:center;">\u6B65\u6570(\u6BCF\u6B21\u70B9\u51FB\u6539\u53D8\u7684\u6570\u503C\u95F4\u9694)</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"><code class="">1</code></td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">\u6807\u8BC6\u7B26\uFF0C\u4F1A\u5728<code class="">change</code>\u4E8B\u4EF6\u4E2D\u8FD4\u56DE</td><td style="text-align:center;"><code class="">string</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">decimallength</td><td style="text-align:center;">\u56FA\u5B9A\u663E\u793A\u7684\u5C0F\u6570\u4F4D\u6570</td><td style="text-align:center;"><code class="">number</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">integer</td><td style="text-align:center;">\u662F\u5426\u53EA\u5141\u8BB8\u8F93\u5165\u6574\u6570</td><td style="text-align:center;"><code class="">boolean</code></td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;">\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668</td><td style="text-align:center;"><code class="">boolean</code></td><td style="text-align:left;"><code class="">false</code></td></tr><tr><td style="text-align:center;">onChange</td><td style="text-align:center;">\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td style="text-align:center;"><code class="">(e:{detail: { name: string, value: number }}) =&gt; void</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">onOverlimit</td><td style="text-align:center;">\u70B9\u51FB\u4E0D\u53EF\u7528\u7684\u6309\u94AE\u65F6\u89E6\u53D1</td><td style="text-align:center;"><code class="">(e:{detail: { action: string}}) =&gt; void</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">onPlus</td><td style="text-align:center;">\u70B9\u51FB\u589E\u52A0\u6309\u94AE\u65F6\u89E6\u53D1</td><td style="text-align:center;"><code class="">() =&gt; void</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;">onMinus</td><td style="text-align:center;">\u70B9\u51FB\u51CF\u5C11\u6309\u94AE\u65F6\u89E6\u53D1</td><td style="text-align:center;"><code class="">() =&gt; void</code></td><td style="text-align:left;"></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--stepper-input-text-color</code></td><td>stepper-input \u5B57\u4F53\u989C\u8272</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-input-background-color</code></td><td>stepper-input \u80CC\u666F\u989C\u8272</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-input-width</code></td><td>stepper-input \u5BBD\u5EA6</td><td><code class="">32px</code></td></tr><tr><td><code class="">--stepper-input-height</code></td><td>stepper-input \u9AD8\u5EA6</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-input-border-color</code></td><td>stepper-input \u8FB9\u6846\u989C\u8272</td><td></td></tr><tr><td><code class="">--stepper-input-border-width</code></td><td>stepper-input \u8FB9\u6846\u5BBD\u5EA6</td><td><code class="">1px</code></td></tr><tr><td><code class="">--stepper-input-font-size</code></td><td>stepper-input \u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--stepper-input-line-height</code></td><td>stepper-input \u884C\u9AD8</td><td><code class="">normal</code></td></tr><tr><td><code class="">--stepper-input-border-radius</code></td><td>stepper-input \u8FB9\u6846\u5706\u89D2</td><td></td></tr><tr><td><code class="">--stepper-button-border-radius</code></td><td>stepper-button \u8FB9\u6846\u5706\u89D2</td><td></td></tr><tr><td><code class="">--stepper-button-border-height</code></td><td>stepper-button \u9AD8\u5EA6</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-button-border-width</code></td><td>stepper-button \u5BBD\u5EA6</td><td><code class="">28px</code></td></tr><tr><td><code class="">--stepper-button-disabled-color</code></td><td>stepper \u7981\u7528\u65F6\u989C\u8272</td><td><code class="">#c8c9cc</code></td></tr><tr><td><code class="">--stepper-minus-color</code></td><td>stepper-minus-button \u5B57\u4F53\u989C\u8272</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-minus-background-color</code></td><td>stepper-minus-button \u80CC\u666F\u989C\u8272</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-plus-color</code></td><td>stepper-plus-button \u5B57\u4F53\u989C\u8272</td><td><code class="">#e8e8e8</code></td></tr><tr><td><code class="">--stepper-plus-background-color</code></td><td>stepper-plus-button \u80CC\u666F\u989C\u8272</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--stepper-minus-border-color</code></td><td>stepper-minus-button \u8FB9\u6846\u989C\u8272</td><td></td></tr><tr><td><code class="">--stepper-plus-border-color</code></td><td>stepper-plus-button \u8FB9\u6846\u989C\u8272</td><td></td></tr></tbody></table>`,25),n=[l],i={},h="",g=e({__name:"doc-react.zh-CN",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(p,r)=>(u(),s("div",d,n))}});export{g as default,h as excerpt,i as frontmatter};
