import{d as a,c as t,a as l,o as n}from"./vue.a109ca2d.js";const u={class:"markdown-body"},e=l(`<h1>Field \u8F93\u5165\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u8F93\u5165\u7EC4\u4EF6</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Field, FieldRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;123456&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;12345678901&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;11&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6570\u5B57&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u4E00\u4E8C\u4E09\u56DB\u4E94&quot;</span> <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6700\u591A5\u4F4D\u6570&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898/\u65E0\u6807\u9898</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u6807\u9898&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u4E3B\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u8FD9\u662F\u4E00\u884C\u526F\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7981\u7528label&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u65E0\u6807\u9898&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;oneLine&quot;</span> /&gt;</span>
</code></pre><h3>\u7981\u7528\u4E0E\u53EA\u8BFB</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u6211\u7981\u7528\u4E86&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u7981\u7528&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7981\u7528label&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;\u6211\u662F\u53EA\u8BFB\u7684&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u53EA\u8BFB&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u5FC5\u586B\u5B57\u6BB5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">errormsg</span>=<span class="hljs-string">&quot;\u4E0D\u80FD\u4E3A\u7A7A&quot;</span> /&gt;</span>
</code></pre><h3>css \u5C5E\u6027</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;theme&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;css \u5C5E\u6027&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;css&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.theme</span> {
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
  --field-<span class="hljs-selector-tag">label</span>-text-<span class="hljs-attribute">color</span>: green;
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
  --field-<span class="hljs-selector-tag">label</span>-<span class="hljs-attribute">margin-right</span>: <span class="hljs-number">10px</span>;
  --field-<span class="hljs-selector-tag">input</span>-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#999</span>;
  --field-<span class="hljs-selector-tag">input</span>-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
  --field-placeholder-text-<span class="hljs-attribute">color</span>: red;
  --field-placeholder-<span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  --field-disabled-text-<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
}
</code></pre><h3>\u4E8B\u4EF6</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value, setValue] = useState(<span class="hljs-number">1</span>);

  <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    setValue(<span class="hljs-function">() =&gt;</span> e.detail.value);
    Toast.text(e.detail.value);
  };

  <span class="hljs-keyword">const</span> onBlur = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;blur&quot;</span>);
  };

  <span class="hljs-keyword">const</span> onFocus = <span class="hljs-function">() =&gt;</span> {
    Toast.text(<span class="hljs-string">&quot;focus&quot;</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u89E6\u53D1\u5931\u7126\u4E8B\u4EF6&quot;</span>
      <span class="hljs-attr">value</span>=<span class="hljs-string">{value}</span>
      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onChange}</span>
      <span class="hljs-attr">onBlur</span>=<span class="hljs-string">{onBlur}</span>
      <span class="hljs-attr">onFocus</span>=<span class="hljs-string">{onFocus}</span>
    /&gt;</span></span>
  );
};
</code></pre><h3>\u8BBE\u7F6E\u6821\u9A8C\u89C4\u5219</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> fieldRef = useRef &lt; FieldRef &gt; <span class="hljs-literal">null</span>;
  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { current } = fieldRef;
    current.setRules([
      {
        <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/^1[3456789]\\d{9}$/</span>.test(val)) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        },
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7&quot;</span>,
      },
    ]);
  }, []);
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{fieldRef}</span> /&gt;</span></span>;
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u8F93\u5165\u9879\u63CF\u8FF0, \u4E0D\u4F20\u9690\u85CF \u6216\u8005 slot = \u2018label\u2019</td><td><code class="">string</code></td><td></td></tr><tr><td>type</td><td>input \u7C7B\u578B \u9ED8\u8BA4 text</td><td><code class="">string</code></td><td>text</td></tr><tr><td>value</td><td>\u8868\u5355\u503C</td><td><code class="">string</code></td><td></td></tr><tr><td>defaultvalue</td><td>\u9ED8\u8BA4 value \u503C</td><td><code class="">string</code></td><td></td></tr><tr><td>name</td><td>\u8868\u5355\u9700\u8981</td><td><code class="">string</code></td><td></td></tr><tr><td>placeholder</td><td>\u9ED8\u8BA4\u63D0\u793A</td><td><code class="">string</code></td><td>-</td></tr><tr><td>min</td><td>\u7EE7\u627F\u539F\u751F input \u5C5E\u6027</td><td><code class="">string</code></td><td></td></tr><tr><td>minlength</td><td>\u7EE7\u627F\u539F\u751F input \u5C5E\u6027</td><td><code class="">string</code></td><td></td></tr><tr><td>max</td><td>\u7EE7\u627F\u539F\u751F input \u5C5E\u6027</td><td><code class="">string</code></td><td></td></tr><tr><td>maxlength</td><td>\u7EE7\u627F\u539F\u751F input \u5C5E\u6027</td><td><code class="">string</code></td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>required</td><td>\u662F\u5426\u5FC5\u586B</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>errormsg</td><td>\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</td><td><code class="">string</code></td><td>-</td></tr><tr><td>onChange</td><td>\u503C\u6539\u53D8\u4E8B\u4EF6</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>onFocus</td><td>\u805A\u7126\u4E8B\u4EF6</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>onBlur</td><td>\u5931\u7126\u4E8B\u4EF6</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td><td></td></tr></tbody></table><h3>Method</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setRules</td><td>\u7528\u4E8E\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u89C4\u5219</td><td><code class="">(rule: Rule[]) =&gt; void</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type Rule = {
  <span class="hljs-attr">message</span>: string, <span class="hljs-comment">// \u9519\u8BEF\u63D0\u793A</span>
  <span class="hljs-attr">validator</span>: <span class="hljs-function">(<span class="hljs-params">value: string | number</span>) =&gt;</span> boolean, <span class="hljs-comment">// \u6821\u9A8C\u89C4\u5219</span>
};
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--field-label-width</code></td><td>label \u5BBD\u5EA6</td><td><code class="">119px</code></td></tr><tr><td><code class="">--field-label-font-size</code></td><td>label \u5B57\u4F53\u5927\u5C0F</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-label-text-color</code></td><td>label \u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--field-label-font-weight</code></td><td>label \u5B57\u91CD</td><td></td></tr><tr><td><code class="">--field-label-margin-right</code></td><td>label \u53F3\u95F4\u8DDD</td><td><code class="">12px</code></td></tr><tr><td><code class="">--field-input-text-color</code></td><td>input \u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--field-input-align</code></td><td>input \u5BF9\u9F50\u65B9\u5F0F</td><td><code class="">left</code></td></tr><tr><td><code class="">--field-input-font-size</code></td><td>input \u5B57\u4F53\u5927\u5C0F</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-placeholder-text-color</code></td><td>input \u63D0\u793A\u5B57\u4F53\u989C\u8272</td><td><code class="">#bcc4cc</code></td></tr><tr><td><code class="">--field-placeholder-font-size</code></td><td>input \u63D0\u793A\u5B57\u4F53\u5927\u5C0F</td><td><code class="">15px</code></td></tr><tr><td><code class="">--field-disabled-text-color</code></td><td>\u7981\u6B62\u5B57\u4F53\u989C\u8272</td><td><code class="">#c8c9cc</code></td></tr><tr><td><code class="">--field-error-font-size</code></td><td>\u9519\u8BEF\u63D0\u793A\u5B57\u4F53\u5927\u5C0F</td><td><code class="">12px</code></td></tr><tr><td><code class="">--field-error-text-color</code></td><td>\u9519\u8BEF\u63D0\u793A\u5B57\u4F53\u989C\u8272</td><td><code class="">#F72626</code></td></tr><tr><td><code class="">--field-error-text-align</code></td><td>\u9519\u8BEF\u63D0\u793A\u5B57\u4F53\u5BF9\u9F50\u65B9\u5F0F</td><td><code class="">left</code></td></tr></tbody></table>`,30),d=[e],h={},i="",j=a({__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,o)=>(n(),t("div",u,d))}});export{j as default,i as excerpt,h as frontmatter};
